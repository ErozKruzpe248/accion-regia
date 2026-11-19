# Auditoría de la candidata de Acción Regia

Revisión del 19 de noviembre de 2026. Estado **pendiente de aceptación**. Se verificó la compilación estática y el HTML generado. La conexión de pruebas con el navegador a la vista previa local expiró, por lo que las comprobaciones visuales y de interacción quedan abiertas.

| N.º | Criterio | Estado | Evidencia |
| --- | --- | --- | --- |
| 1 | H1 único y primer pantallazo | No verificado | Un H1 en HTML. Falta revisar el primer pantallazo. |
| 2 | CTA principal sin desplazamiento | No verificado | Falta medir su posición en móvil y escritorio. |
| 3 | Texto limpio | Cumple | Textos de la ficha y descripciones ajustadas a los productos presentes. |
| 4 | Enlaces sin roturas | No verificado | Anclas internas y 18 fichas cotejadas. Falta comprobar Facebook, los destinos de WhatsApp y el enlace externo del footer en navegador. |
| 5 | Formato de contacto | Cumple | WhatsApp usa los números autorizados en formato internacional y mensajes codificados. |
| 6 | Canal visible y funcional | No verificado | CTA presente. Falta probar desde la vista previa y confirmar el destinatario. |
| 7 | Apertura protegida | Cumple | Todos los enlaces con target blank tienen noopener. |
| 8 | Footer Matangazo | No verificado | Logotipo, enlace, mensaje, CTA y contador integrados. Falta verificar el conteo acumulado. |
| 9 | Favicon | Cumple | PNG de 64 × 64 y etiqueta rel icon. |
| 10 | Open Graph | No verificado | Imagen 1200 × 630 de 104 376 B. Faltan URL autorizada y respuesta 200 en el destino. |
| 11 | JSON-LD | N/A | Organización sin ubicación física ni horario confirmados. Se usa Organization con datos visibles y verificables. |
| 12 | Título | Cumple | Nombre del negocio y oferta en menos de 60 caracteres. |
| 13 | Descripción | Cumple | Resume el catálogo y contacto en menos de 160 caracteres. |
| 14 | Jerarquía de encabezados | Cumple | H1 de portada, H2 de secciones, H3 de categorías y H4 de productos. |
| 15 | Canónica y og:url | No verificado | Ambas se generan con ACCION_REGIA_URL cuando se autorice una dirección. |
| 16 | Idioma y viewport | Cumple | es-MX y viewport adaptable. |
| 17 | Alternativas de imágenes | Cumple | Logos y productos con alt. Portada decorativa con alt vacío. |
| 18 | Sin desbordes | No verificado | Falta medición a 375 y 1280 px. |
| 19 | Áreas táctiles | No verificado | CSS fija mínimos para controles. Falta medir en navegador. |
| 20 | Texto legible | No verificado | CSS prevé textos de 12 px o más. Falta revisar la vista resultante. |
| 21 | Flotantes sin obstrucción | N/A | Sin controles flotantes sobre el contenido. |
| 22 | Menú móvil y salto inicial | No verificado | Implementados botón, Escape, foco y enlace de salto. Falta prueba en navegador. |
| 23 | Carga de imágenes | Cumple | Portada con dimensiones y prioridad alta. El logo visible carga con el encabezado. Galería diferida y Hits con prioridad baja tras load. |
| 24 | Carga inicial ligera | No verificado | Portada de 98 507 B, sin dependencias de npm. Falta medir transferencia total y solicitudes. |
| 25 | Consola limpia | No verificado | JavaScript pasó comprobación de sintaxis. Falta revisar la consola en navegador. |
| 26 | HTTPS | Cumple | Las imágenes y servicios remotos usan HTTPS. |
| 27 | Sin restos de plantilla | Cumple | La página y la compilación corresponden a Acción Regia. |
| 28 | Interacciones | No verificado | Pestañas, redes por categoría, movimientos y menú implementados. Falta prueba funcional en móvil y escritorio. |
| 29 | Contenido esencial en HTML | Cumple | Los 18 productos, beneficios, redes y contacto se generan en el HTML. Las categorías se ocultan solo al ejecutar el script. |

**Conteo técnico** 13 cumple · 2 N/A · 14 no verificados.

## Catálogo y materiales

- Los 18 códigos solicitados se cotejaron con sus fichas de Atomy México. Cada categoría tiene seis fichas y un producto estrella. El catálogo registra la URL exacta de origen de cada fotografía en `src/catalogo.json`.
- Las fotografías se enlazan desde el CDN oficial de Atomy con solicitudes de 360 px para tarjetas y 640 px para destacados. La exportación en lote del navegador se interrumpió. Falta completar la revisión visual de las 18 fotos y su peso de transferencia.
- El logotipo de Acción Regia conserva el PNG entregado, SHA-256 `78096e6a76a7907e57ae0a955bc1bd80512091690c0b919c1d3aaa0d3378fff8`.
- El logotipo de Matangazo se copió de `recursos/matangazo/logo-transparente.png`, blob `2e8f6ae0fd869608e87f0e6e93a760fe521e5b2b`.
- La portada es una escena decorativa preparada para Acción Regia. Los productos se muestran con sus fotografías oficiales. La imagen social combina la portada y el logotipo oficial. El favicon se compuso con las iniciales de la marca.

## Adaptaciones respecto a la Plantilla 1

Se conserva el orden de seis secciones, el HTML estático, la navegación adaptable, el footer comercial y la integración de Hits. El panel de servicios se adaptó a tres pestañas de productos con un destacado y un enlace de Facebook por categoría. El contacto se limita al WhatsApp autorizado para la revisión.

## Revisiones de referencia

Las revisiones listadas coincidieron antes y después de la implementación.

| Repositorio | Rama | Revisión |
| --- | --- | --- |
| matangazo-presencia-web | main | `d8babe95dfcf21acfec436cd98aca184753312d6` |
| matangazo-presencia-web | rescate/plantilla-01 | `5ca53f5033cde982374cf7b8b09abb8d88bbf3ca` |
| express-care-mexico | main | `ef54981a1030e5228911973400c7dc36f1cb1808` |
| express-care-mexico | gh-pages | `a4c50dcb874c56f0c86bd0b10a8f6adf708788cd` |

## Pendientes de Matangazo

- Confirmar el WhatsApp definitivo de Acción Regia. El número provisional autorizado también aparece como contacto de Atomy México.
- Confirmar el nombre o código del Protector Solar Beige. La ficha X00276 está titulada Atomy Absolute Essence Sunscreen. La candidata conserva el nombre y código solicitados y explica la correspondencia en la tarjeta.
- Revisar visualmente la candidata. Probar los destinos de Facebook y WhatsApp, el contador y las interacciones a 375 y 1280 px.
- Autorizar por separado una demostración pública, si se requiere, para cerrar los controles dependientes de una URL pública. La compilación conserva `noindex`.

## PageSpeed Insights

| Categoría | Móvil | Escritorio |
| --- | --- | --- |
| Rendimiento | No verificado | No verificado |
| Accesibilidad | No verificado | No verificado |
| Buenas prácticas | No verificado | No verificado |
| SEO | No verificado | No verificado |

La prueba de 90 puntos o más por categoría requiere una URL autorizada. No se registraron puntuaciones.

