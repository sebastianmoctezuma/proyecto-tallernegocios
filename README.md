# Negociar con Alemania — Kit Digital de Negociación Internacional

Sitio web interactivo (Etapa 1 del proyecto integrador) para prepararse a hacer negocios con Alemania.

## Cómo abrir

Abre `index.html` en el navegador (doble clic) o sirve la carpeta con cualquier servidor estático:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

Requiere conexión a internet para cargar fuentes y librerías desde CDN.

## Estructura

- `index.html` — estructura por capítulos.
- `css/styles.css` — sistema visual "Präzision" (Archivo variable + Instrument Serif, paleta beton / graphit / gold / signalrot).
- `js/data.js` — todo el contenido, cifras y fuentes.
- `js/main.js` — motion (GSAP, ScrollTrigger, SplitText), smooth scroll (Lenis), navegación, hero, checklist.
- `js/charts.js` — gráficas (Chart.js): comercio, radar Hofstede, dona de religión.
- `js/culturemap.js` — mapa cultural interactivo (escalas de Erin Meyer) con marcador arrastrable.
- `js/simulator.js` — simulador de reunión con puntaje y diagnóstico.
- `docs/superpowers/specs/` — especificación de diseño.

## Contenido

1. Alemania en el contexto internacional: indicadores, socios comerciales, exportaciones, rol en los negocios, ferias, relación México–Alemania.
2. Cultura: valores, Hofstede (DE vs MX vs US), religión y festivos, estructura social, 16 Länder, diversidad.
3. Cultura y negocios: mapa cultural, diez riesgos culturales, protocolo por fases, simulador, glosario.
4. Fuentes: Destatis, Bundesbank, OMC, Hofstede Insights, Erin Meyer, fowid, IfM Bonn, GTAI, CAMEXA, AUMA.
