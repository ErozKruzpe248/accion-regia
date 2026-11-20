const escapes = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = value => String(value).replace(/[&<>"']/g, char => escapes[char]);
const title = "Acción Regia | Skincare coreano, hogar y bienestar";
const description = "Explora la selección de Acción Regia de skincare coreano, hogar y bienestar. Conoce nuestros productos, visítanos en Monterrey y pide orientación por WhatsApp.";
const whatsApp = (number, message) => `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
const contact = whatsApp("528116000722", "Hola, me gustaría recibir información sobre un producto.");
const agency = whatsApp("528115963472", "Hola, Matangazo. Vi la página de Acción Regia y me interesa Presencia Web para mi negocio.");
const counter = "https://hits.sh/erozkruzpe248.github.io/accion-regia.svg?label=%20&color=e30613&labelColor=e30613&style=flat-square";
const arrow = '<span aria-hidden="true">↗</span>';

function card(product, featured) {
  const { name, description, photo, localPhoto } = product;
  const size = featured ? 640 : 360;
  const url = localPhoto ?? `${photo}?w=${size}&h=${size}`;
  return `<article class="product${featured ? " featured" : ""}">
    <div class="product-media"><img src="${esc(url)}" width="${size}" height="${size}" alt="${esc(name)}" loading="lazy" decoding="async"></div>
    <div class="product-copy">
      ${featured ? '<p class="featured-label"><span aria-hidden="true">✦</span> Producto estrella</p>' : ""}
      <h4>${esc(name)}</h4>
      <p>${esc(description)}</p>
    </div>
  </article>`;
}

function categoryPanel(category) {
  const [featured, ...products] = category.products;
  return `<section class="category-panel" id="${category.id}" aria-labelledby="title-${category.id}" data-panel>
    <h3 class="category-title" id="title-${category.id}">${esc(category.name)}</h3>
    <div class="category-grid">
      ${card(featured, true)}
      <div class="product-grid">${products.map(product => card(product, false)).join("")}</div>
    </div>
    <a class="social" href="${esc(category.facebook)}" target="_blank" rel="noopener">
      <span class="facebook-mark" aria-hidden="true">f</span> ${esc(category.name)} en Facebook ${arrow}
    </a>
  </section>`;
}

export function render(catalog, siteUrl) {
  const details = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Acción Regia",
    description,
    telephone: "+52 81 1600 0722",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carlos Salazar 1657, esquina con América",
      addressLocality: "Monterrey",
      addressRegion: "Nuevo León",
      postalCode: "64000",
      addressCountry: "MX"
    },
    sameAs: catalog.map(category => category.facebook),
    ...(siteUrl ? { url: siteUrl.href, logo: new URL("assets/logo-accion-regia.png", siteUrl).href } : {})
  };
  const socialImage = siteUrl ? new URL("assets/accion-regia-social.jpg", siteUrl).href : "./assets/accion-regia-social.jpg";
  return `<!doctype html>
<html lang="es-MX">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex">
  <meta name="theme-color" content="#f7f6f1">
  <title>${title}</title>
  <meta name="description" content="${esc(description)}">
  ${siteUrl ? `<link rel="canonical" href="${esc(siteUrl.href)}">
  <meta property="og:url" content="${esc(siteUrl.href)}">` : ""}
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="es_MX">
  <meta property="og:image" content="${esc(socialImage)}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Acción Regia · Skincare coreano, hogar y bienestar">
  <link rel="icon" href="./assets/favicon.png" type="image/png">
  <link rel="stylesheet" href="./styles.css">
  <script type="application/ld+json">${JSON.stringify(details).replace(/</g, "\\u003c")}</script>
  <script src="./app.js" defer></script>
</head>
<body id="inicio">
  <a class="skip" href="#main">Saltar al contenido</a>
  <header class="site-header">
    <div class="shell header-inner">
      <a class="brand" href="#inicio"><img src="./assets/logo-accion-regia.png" alt="Acción Regia · Skincare Coreano" width="330" height="196" decoding="async"></a>
      <button class="menu-button" type="button" aria-controls="nav" aria-expanded="false" hidden>Menú <span aria-hidden="true">☰</span></button>
      <nav id="nav" aria-label="Navegación principal">
        <a href="#beneficios">Nosotros</a><a href="#productos">Productos</a><a class="nav-contact" href="#contacto">Contacto ${arrow}</a>
      </nav>
    </div>
  </header>
  <main id="main" tabindex="-1">
    <section class="hero shell" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="hero-context">Skincare coreano · Hogar · Bienestar</p>
        <h1 id="hero-title">Descubre lo mejor de Corea <em>para tu día a día</em></h1>
        <p>Una experiencia inspirada en la innovación coreana.</p>
        <a class="button primary" href="#productos">EXPLORAR PRODUCTOS <span aria-hidden="true">↓</span></a>
      </div>
      <div class="hero-visual">
        <img class="hero-image" src="./assets/portada-pareja.jpg" alt="Pareja preparando alimentos en una cocina" width="1254" height="1254" fetchpriority="high" decoding="async">
      </div>
    </section>
    <section class="benefits shell" id="beneficios" aria-labelledby="benefits-title" data-reveal>
      <h2 class="visually-hidden" id="benefits-title">Beneficios de Acción Regia</h2>
      <ul>
        <li><span aria-hidden="true">✧</span> Tecnología Coreana</li>
        <li><span aria-hidden="true">◎</span> Recomendaciones Personalizadas</li>
        <li><span aria-hidden="true">⌂</span> De Corea a tu Hogar</li>
      </ul>
    </section>
    <section class="catalog" id="productos" aria-labelledby="catalog-title">
      <div class="shell">
        <div class="section-heading" data-reveal><h2 id="catalog-title">Explora nuestros productos</h2></div>
        <div class="tabs" role="tablist" aria-label="Categorías de productos" hidden>
          ${catalog.map(category => `<button type="button" role="tab" id="tab-${category.id}" aria-controls="${category.id}" aria-selected="false" tabindex="-1">${esc(category.name)}</button>`).join("")}
        </div>
        ${catalog.map(categoryPanel).join("")}
      </div>
    </section>
    <section class="contact shell" id="contacto" aria-labelledby="contact-title" data-reveal>
      <div class="location-heading">
        <h2 id="contact-title">Ubicación y contacto</h2>
        <p>Visítanos en Monterrey o escríbenos para recibir orientación sobre nuestros productos.</p>
        <a class="button primary" href="${esc(contact)}" target="_blank" rel="noopener">Escríbenos por WhatsApp ${arrow}</a>
      </div>
      <div class="location-card">
        <div class="location-details">
          <h3>Acción Regia</h3>
          <address>Carlos Salazar 1657, esquina con América<br>Monterrey, Nuevo León, México, C.P. 64000</address>
          <div class="location-actions">
            <a class="button contact-button" href="tel:+528116000722">81 1600 0722</a>
            <a class="button contact-button" href="${esc(contact)}" target="_blank" rel="noopener">Escríbenos por WhatsApp ${arrow}</a>
            <a class="button contact-button" href="https://www.google.com/maps/dir/?api=1&amp;destination=Carlos%20Salazar%201657%2C%20esquina%20con%20Am%C3%A9rica%2C%20Monterrey%2C%20Nuevo%20Le%C3%B3n%2C%20M%C3%A9xico%2C%2064000" target="_blank" rel="noopener">Cómo llegar ${arrow}</a>
          </div>
        </div>
        <iframe class="location-map" title="Ubicación de Acción Regia en Carlos Salazar 1657, Monterrey" src="https://www.google.com/maps?q=Carlos%20Salazar%201657%2C%20esquina%20con%20Am%C3%A9rica%2C%20Monterrey%2C%20Nuevo%20Le%C3%B3n%2C%20M%C3%A9xico%2C%2064000&amp;output=embed" width="720" height="460" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
      </div>
    </section>
  </main>
  <footer class="matangazo-footer">
    <div class="shell agency-footer">
      <div class="visit-counter">
        <span class="visit-label">Tus visitas</span>
        <div class="visit-total" role="status">
          <img id="visit-counter-image" data-counter-src="${esc(counter)}" alt="Visitas acumuladas del sitio" width="100" height="24" loading="lazy" decoding="async" fetchpriority="low" hidden>
          <span id="visit-counter-status">Cargando…</span>
        </div>
        <noscript><img src="${esc(counter)}" alt="Visitas acumuladas del sitio" width="100" height="24" loading="lazy" decoding="async" fetchpriority="low"><style>.visit-total{display:none}</style></noscript>
      </div>
      <a class="agency-brand" href="https://matangazo.mx/" aria-label="Visitar Matangazo.mx"><img src="./assets/matangazo-oficial.png" alt="Matangazo" width="120" height="82" loading="lazy" decoding="async"></a>
      <p class="agency-message">Digitaliza tu negocio con Presencia Web de Matangazo.</p>
      <a class="button agency-cta" href="${esc(agency)}" target="_blank" rel="noopener">Escríbenos por WhatsApp ${arrow}</a>
    </div>
  </footer>
</body>
</html>`;
}
