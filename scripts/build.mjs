import { cp, mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { render } from "./render.mjs";

const source = new URL("../src/", import.meta.url);
const output = new URL("../dist/", import.meta.url);
const catalog = JSON.parse(await readFile(new URL("catalogo.json", source), "utf8"));
const siteUrl = process.env.ACCION_REGIA_URL ? new URL(process.env.ACCION_REGIA_URL) : null;

if (siteUrl && (siteUrl.protocol !== "https:" || siteUrl.username || siteUrl.password ||
    !siteUrl.pathname.endsWith("/") || siteUrl.search || siteUrl.hash)) {
  throw new Error("ACCION_REGIA_URL debe ser una URL HTTPS autorizada y terminar en /.");
}

if (catalog.length !== 3 || catalog.some(category => category.products.length !== 6) ||
    new Set(catalog.flatMap(category => category.products.map(p => p.code))).size !== 18) {
  throw new Error("El catálogo debe contener tres categorías y 18 productos únicos.");
}

for (const product of catalog.flatMap(category => category.products)) {
  const file = new URL(`assets/productos/${product.code.toLowerCase()}.jpg`, source);
  const local = await stat(file).catch(error => {
    if (error.code !== "ENOENT") throw error;
  });
  if (local?.isFile()) product.localPhoto = `./assets/productos/${product.code.toLowerCase()}.jpg`;
}

await mkdir(output, { recursive: true });
await cp(new URL("assets/", source), new URL("assets/", output), { recursive: true });
for (const filename of ["styles.css", "app.js"]) {
  await cp(new URL(filename, source), new URL(filename, output));
}
await writeFile(new URL("index.html", output), render(catalog, siteUrl));
console.log("Sitio estático generado en dist/.");
