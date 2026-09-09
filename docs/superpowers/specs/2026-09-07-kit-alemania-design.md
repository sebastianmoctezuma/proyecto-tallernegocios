# Kit Digital de Negociación Internacional: Alemania — Diseño

Fecha: 7 de septiembre de 2026

## Objetivo
Sitio web interactivo de una sola página (long-scroll por capítulos) que cubre la Etapa 1 del
proyecto integrador: contexto internacional, cultura, y cultura aplicada a negocios, con
riesgos y recomendaciones. Audiencia: una persona hispanohablante (México) que va a negociar
con contrapartes alemanas.

## Stack
- HTML5 + CSS3 (custom properties, grid) + JavaScript ES2020, sin build.
- Librerías por CDN: GSAP 3.13 (ScrollTrigger, SplitText, Flip), Lenis (smooth scroll),
  Chart.js 4 (barras, radar, dona).
- Fuentes: Archivo variable (display y cuerpo) + Instrument Serif itálica (citas).

## Concepto visual: "Präzision"
Herencia del diseño industrial alemán (DIN, Bauhaus, Dieter Rams). Superficies grises
"beton", tipografía grotesca extendida, acento oro de la bandera, rojo señal solo para
riesgos. Motion con propósito: una secuencia de carga orquestada, reveals ligados al scroll,
y respuesta directa a la interacción del usuario.

## Estructura
1. Preloader + Nav flotante con progreso de lectura.
2. Hero: "Negociar con Alemania" + reloj en vivo de Berlín (puntualidad como tema).
3. Alemania en el mundo: contadores, bento de indicadores, gráfica interactiva de socios
   comerciales / exportaciones por producto, marquee de productos, tarjetas de rol
   internacional, ferias (scroll horizontal pinned), relación México–Alemania.
4. Cultura: manifiesto scrub-reveal, acordeón horizontal de valores (Ordnung, Pünktlichkeit,
   etc.), radar Hofstede DE vs MX vs US, dona de religión + festivos regionales, estructura
   social, mosaico de los 16 Länder.
5. Cultura y negocios: mapa cultural interactivo (8 escalas de Erin Meyer, DE vs MX, con
   marcador "tú"), riesgos culturales en card-stacking, recomendaciones como checklist por
   fases con persistencia local, simulador de reunión con ramificación y puntaje, glosario.
6. Fuentes + footer.

## Archivos
- index.html
- css/styles.css
- js/data.js (todo el contenido y las cifras con fuente)
- js/main.js (motion, nav, hero, marquee, acordeón, stacking, checklist)
- js/charts.js (Chart.js)
- js/culturemap.js (escalas interactivas)
- js/simulator.js (simulador ramificado)

## Fuentes de datos
Destatis (comercio exterior 2025, PIB 2025, migración 2024), Deutsche Bundesbank (IED 2024),
OMC (ranking exportadores 2024), Hofstede Insights, Erin Meyer "The Culture Map" (2014),
fowid (religión 2024), KfW/IfM Bonn (Mittelstand), GTAI, AHK México, Secretaría de Economía.
