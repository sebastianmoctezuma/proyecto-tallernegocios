# Alemania — Kit Digital de Negociación Internacional

Sitio web interactivo (Etapa 1 del proyecto integrador) para prepararse a hacer negocios con Alemania. Estética tipo Apple: tipografía del sistema, superficies liquid glass, fotografías reales a pantalla completa, textos breves con hojas de detalle.

## Cómo abrir

Abre `index.html` en el navegador o sirve la carpeta:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

Requiere internet para fuentes y librerías (GSAP, Chart.js por CDN). Las fotografías están en `assets/img/` y funcionan sin conexión.

## Estructura

- `index.html` — secciones: hero, cifras, comercio, papel global, México, valores (scrollytelling), Hofstede, dieciséis Länder y religión, test de estilo, riesgos (carrusel), protocolo (checklist), simulador de reunión, cierre, glosario, fuentes y créditos.
- `css/styles.css` — tokens, liquid glass, componentes, responsive, reduced-motion y reduced-transparency.
- `js/data.js` — contenido, cifras y fuentes.
- `js/credits.js` — créditos de las fotografías (generado desde `assets/img/credits.json`).
- `js/main.js` — render, brillo del vidrio que sigue al puntero, ScrollTrigger, narrativa de valores, carrusel con momentum, hoja modal arrastrable, protocolo con anillo de progreso.
- `js/charts.js` — gráficas Chart.js (comercio, radar Hofstede, dona de religión).
- `js/culturemap.js` — test "¿Qué tan alemán es tu estilo?" (ocho escalas de Erin Meyer).
- `js/simulator.js` — simulador tipo chat con controles interactivos y medidores de confianza por persona.
- `docs/superpowers/specs/` — especificación de diseño de la primera versión.

## Fotografías

Todas provienen de Wikimedia Commons con licencias CC BY, CC BY-SA o CC0. Autor y licencia de cada una aparecen en la sección "Créditos de las fotografías" del sitio y en `assets/img/credits.json`.

## Fuentes de datos

Destatis, Deutsche Bundesbank, OMC, Hofstede Insights, Erin Meyer (The Culture Map), fowid, KfW/IfM Bonn, GTAI, CAMEXA, Secretaría de Economía, AUMA, Hermann Simon.
