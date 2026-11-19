# Acción Regia

Página comercial estática de Acción Regia para Matangazo. Node.js 20 o superior, sin dependencias de npm.

```sh
npm run build
npm run preview
```

Abre http://127.0.0.1:4173/ en el equipo que ejecuta la vista previa, o abre `dist/index.html` directamente en un navegador. El HTML incluye el catálogo completo aunque el navegador no ejecute JavaScript. El contacto y las fichas se abren en sus servicios correspondientes.

La compilación está en modo de revisión con `noindex`. En una revisión con URL autorizada, define `ACCION_REGIA_URL` con esa dirección HTTPS y una barra final antes de compilar. La canónica, `og:url` y la URL de la imagen social se generan a partir de esa dirección. `ACCION_REGIA_PORT` cambia solo el puerto de vista previa local.

Consulta [la auditoría y la procedencia de recursos](AUDITORIA.md).

