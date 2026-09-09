/* =====================================================================
   KIT DIGITAL DE NEGOCIACIÓN INTERNACIONAL — ALEMANIA
   Contenido resumido. "detalle" guarda la versión larga para las hojas
   de información. Cada bloque indica su fuente.
   ===================================================================== */

window.KIT = {

  /* ---------- 1. Alemania en el contexto internacional ---------- */

  indicadores: [
    { valor: 4.47, sufijo: ' billones €', decimales: 2, etiqueta: 'PIB 2025', nota: 'Tercera economía del mundo.', fuente: 'Destatis' },
    { valor: 3, prefijo: '#', sufijo: '', decimales: 0, etiqueta: 'Exportador mundial', nota: '1.7 billones USD en bienes.', fuente: 'OMC 2024' },
    { valor: 200.5, sufijo: ' mil M€', decimales: 1, etiqueta: 'Superávit comercial', nota: 'Vende más de lo que compra.', fuente: 'Destatis 2025' },
    { valor: 1750, sufijo: ' mil M€', decimales: 0, etiqueta: 'Inversión en el exterior', nota: 'Stock de IED alemana.', fuente: 'Bundesbank 2024' },
    { valor: 83.5, sufijo: ' M', decimales: 1, etiqueta: 'Habitantes', nota: 'El país más poblado de la UE.', fuente: 'Destatis' },
    { valor: 99, sufijo: ' %', decimales: 0, etiqueta: 'Empresas son Mittelstand', nota: 'Pymes con 60 % del empleo.', fuente: 'IfM Bonn' }
  ],

  socios: {
    fuente: 'Destatis 2025, volumen comercial en miles de millones de euros',
    labels: ['China', 'Estados Unidos', 'Países Bajos', 'Polonia', 'Francia', 'Italia', 'Austria', 'Suiza', 'Bélgica', 'Rep. Checa'],
    valores: [251.8, 240.5, 209.1, 172, 165, 152, 128, 121, 112, 110],
    nota: 'China recuperó el primer lugar en 2025. Ocho de los diez socios son europeos.'
  },
  exportDestinos: {
    fuente: 'Destatis 2025, exportaciones por destino (aprox.)',
    labels: ['Estados Unidos', 'Francia', 'Países Bajos', 'Polonia', 'China', 'Italia', 'Austria', 'Reino Unido', 'Suiza', 'Bélgica'],
    valores: [153, 118, 112, 96, 85, 83, 80, 75, 70, 67],
    nota: 'EE. UU. sigue siendo el primer destino pese a los aranceles de 2025.'
  },
  importOrigen: {
    fuente: 'Destatis 2025, importaciones por origen (aprox.)',
    labels: ['China', 'Países Bajos', 'Estados Unidos', 'Polonia', 'Italia', 'Francia', 'Bélgica', 'Rep. Checa', 'Suiza', 'Austria'],
    valores: [167, 97, 88, 76, 69, 62, 55, 54, 51, 48],
    nota: 'China es la mayor fuente de importaciones: electrónica, baterías, componentes.'
  },
  productos: {
    fuente: 'Destatis 2024, participación en las exportaciones',
    labels: ['Vehículos', 'Maquinaria', 'Químicos', 'Equipo eléctrico', 'Farmacéuticos', 'Óptica y cómputo', 'Alimentos', 'Metales', 'Otros'],
    valores: [17.0, 14.2, 9.0, 7.5, 7.1, 6.4, 4.8, 4.5, 29.5],
    nota: 'Alemania vende lo que otros países usan para producir.'
  },

  roles: [
    { titulo: 'Motor industrial de Europa', linea: 'La industria pesa 26 % del PIB. Fabrica las máquinas con las que produce el mundo.', img: 'factory', fuente: 'Destatis / BMWK',
      detalle: 'La industria pesa cerca del 26 % del PIB, muy por encima del promedio de la UE. Alemania fabrica los bienes de capital con los que produce el resto del mundo: máquinas-herramienta, robótica, química fina.' },
    { titulo: 'Mittelstand y campeones ocultos', linea: 'Más de 1,500 empresas familiares lideran nichos globales desde ciudades pequeñas.', img: 'port', fuente: 'Hermann Simon; IfM Bonn',
      detalle: 'Más de 1,500 empresas medianas, familiares y poco conocidas lideran nichos globales (sellos, válvulas, sensores). Negociar con Alemania suele ser negociar con una empresa familiar de tercera generación en una ciudad pequeña.' },
    { titulo: 'Capital mundial de las ferias', linea: 'Dos terceras partes de las ferias industriales líderes se celebran aquí.', img: 'messe', fuente: 'AUMA',
      detalle: 'Hannover Messe (industria, abril), IAA Mobility (Múnich, septiembre), Medica (Düsseldorf, noviembre), Frankfurter Buchmesse (octubre), bauma (Múnich, trienal), Anuga (Colonia, bienal) e ITB Berlin (marzo). Ahí se abren y cierran los contratos con el Mittelstand.' }
  ],

  rolesExtra: [
    { titulo: 'Arquitecto del mercado único', detalle: 'Mayor economía de la UE (cerca del 24 % del PIB comunitario). Sus posiciones marcan la política comercial europea: acuerdos de libre comercio, reglas de origen, normas técnicas DIN y CE, regulación de sostenibilidad.', fuente: 'Eurostat' },
    { titulo: 'Inversionista global', detalle: 'Stock de inversión directa en el exterior de 1.75 billones de euros. Plantas alemanas en México, EE. UU., China y Europa del Este forman cadenas de valor transcontinentales.', fuente: 'Bundesbank 2024' },
    { titulo: 'Miembro de todos los foros', detalle: 'G7, G20, OCDE, OMC, OTAN, FMI. Participa en la definición de estándares globales, desde reglas fiscales hasta normas de reporte ESG.', fuente: 'Auswärtiges Amt' }
  ],

  mexico: {
    titulo: 'México y Alemania',
    linea: 'Alemania es el principal socio comercial de México en la Unión Europea.',
    bullets: [
      '2,100 empresas alemanas en México y más de 300,000 empleos.',
      'VW Puebla, Audi, BMW, Mercedes-Benz, Siemens, Bosch, BASF.',
      'Acuerdo Global UE–México modernizado: casi cero aranceles.'
    ],
    fuente: 'Secretaría de Economía, CAMEXA, Comisión Europea'
  },

  /* ---------- 2. Cultura del país ---------- */

  manifiesto: 'El orden no es rigidez, es confianza. La puntualidad es respeto. La franqueza es honestidad. Y el descanso se defiende con la misma seriedad que un contrato.',

  valoresPrincipales: [
    { palabra: 'Ordnung', trad: 'Orden', img: 'train', linea: 'Reglas claras para que nadie tenga que adivinar.', negocio: 'Agenda por escrito. Sin sorpresas de último momento.' },
    { palabra: 'Pünktlichkeit', trad: 'Puntualidad', img: 'ice', linea: 'Llegar tarde comunica desinterés. Cinco minutos ya requieren aviso.', negocio: 'Llega 10 minutos antes. Si te retrasas, avisa antes de la hora.' },
    { palabra: 'Sachlichkeit', trad: 'Objetividad', img: 'reichstag', linea: 'Se debate la idea, no a la persona.', negocio: 'Recibe la crítica con datos, no con emoción.' },
    { palabra: 'Feierabend', trad: 'Fin de la jornada', img: 'biergarten', linea: 'Cuando el trabajo termina, termina. El domingo es sagrado por ley.', negocio: 'Nada de mensajes fuera de horario ni en vacaciones.' }
  ],

  valoresExtra: [
    { palabra: 'Gründlichkeit', trad: 'Meticulosidad', texto: 'Mejor una respuesta tardía y completa que una rápida y parcial. Lleva especificaciones y anexos.' },
    { palabra: 'Zuverlässigkeit', trad: 'Fiabilidad', texto: 'La palabra dada vale. Un "quizá" alemán se interpreta como un "no".' },
    { palabra: 'Privatsphäre', trad: 'Esfera privada', texto: 'Nada de preguntas personales al inicio. Temas neutros: viaje, ciudad, sector.' },
    { palabra: 'Vereinskultur', trad: 'Vida asociativa', texto: 'Más de 600,000 asociaciones. Cámaras y gremios (VDMA, VDA) son la vía para hacer contactos.' }
  ],

  hofstede: {
    fuente: 'Hofstede Insights, modelo 6-D',
    dimensiones: ['Distancia al poder', 'Individualismo', 'Logro', 'Evitar incertidumbre', 'Largo plazo', 'Indulgencia'],
    paises: {
      Alemania: { color: '#F5B82E', valores: [35, 67, 66, 65, 83, 40] },
      México:   { color: '#FF453A', valores: [81, 30, 69, 82, 24, 97] },
      'EE. UU.': { color: '#98989D', valores: [40, 91, 62, 46, 26, 68] }
    },
    lecturas: [
      { dim: 'Largo plazo · 83 vs 24', texto: 'El alemán piensa en cinco años; el mexicano, en el trimestre.' },
      { dim: 'Indulgencia · 40 vs 97', texto: 'Contención frente a expresividad. Explica el choque de tono en las reuniones.' },
      { dim: 'Distancia al poder · 35 vs 81', texto: 'Jerarquía en la forma, pero el experto contradice al jefe con argumentos.' }
    ]
  },

  religion: {
    fuente: 'fowid 2024',
    labels: ['Sin religión', 'Católicos', 'Protestantes', 'Musulmanes', 'Otras'],
    valores: [47, 24, 21, 3.9, 4.1],
    colores: ['#F5F5F7', '#F5B82E', '#98989D', '#FF453A', '#48484A'],
    linea: 'Sociedad secular, pero el calendario de festivos cambia según el estado.',
    festivos: [
      { nombre: 'Viernes Santo, Pascua, 1 de mayo, Ascensión, Pentecostés, 3 de octubre, Navidad', alcance: 'Todo el país' },
      { nombre: 'Epifanía, Corpus Christi, Todos los Santos', alcance: 'Estados católicos del sur' },
      { nombre: 'Día de la Reforma (31 oct)', alcance: 'Norte y este protestante' }
    ],
    tradiciones: [
      { nombre: 'Oktoberfest', texto: 'Ser invitado es señal de relación consolidada.' },
      { nombre: 'Weihnachtsmarkt', texto: 'Diciembre se frena; se retoma a mediados de enero.' },
      { nombre: 'Karneval', texto: 'La región renana cierra de jueves a martes antes de Cuaresma.' }
    ]
  },

  estructura: [
    { titulo: 'Jerarquía funcional', texto: 'La autoridad viene del cargo y la competencia, no del carisma.' },
    { titulo: 'Responsabilidad explícita', texto: 'Cada persona tiene su Zuständigkeit. Saltársela es una falta grave.' },
    { titulo: 'Formalidad como respeto', texto: '"Sie" y apellido con título hasta que te ofrezcan el "du".' },
    { titulo: 'Consenso técnico', texto: 'Decidir tarda; una vez decidido, no se reabre.' },
    { titulo: 'Relaciones lentas', texto: 'La amistad llega después del contrato, no antes.' },
    { titulo: 'Igualdad de género', texto: 'Cuota de 30 % en consejos. Espera negociadoras con poder de decisión.' }
  ],

  laender: [
    { nombre: 'Baviera', capital: 'Múnich', rasgo: 'Católica, próspera y con identidad propia. BMW, Siemens, Allianz.', region: 'sur' },
    { nombre: 'Baden-Württemberg', capital: 'Stuttgart', rasgo: 'Cuna del Mittelstand: Bosch, Mercedes, Porsche. Ahorradores y perfeccionistas.', region: 'sur' },
    { nombre: 'Renania del Norte-Westfalia', capital: 'Düsseldorf', rasgo: 'El más poblado. Ruhr, Colonia, ferias. Carácter renano, más abierto.', region: 'oeste' },
    { nombre: 'Hesse', capital: 'Wiesbaden', rasgo: 'Fráncfort: finanzas, BCE, aeropuerto hub.', region: 'oeste' },
    { nombre: 'Baja Sajonia', capital: 'Hannover', rasgo: 'Volkswagen, Hannover Messe, energía eólica.', region: 'norte' },
    { nombre: 'Hamburgo', capital: 'Hamburgo', rasgo: 'Puerto y tradición hanseática: sobria y cosmopolita.', region: 'norte' },
    { nombre: 'Berlín', capital: 'Berlín', rasgo: 'Capital, startups, cultura alternativa. Más informal.', region: 'este' },
    { nombre: 'Sajonia', capital: 'Dresde', rasgo: '"Silicon Saxony": Infineon, GlobalFoundries, TSMC.', region: 'este' },
    { nombre: 'Schleswig-Holstein', capital: 'Kiel', rasgo: 'Entre dos mares. Eólica marina y vínculos nórdicos.', region: 'norte' },
    { nombre: 'Bremen', capital: 'Bremen', rasgo: 'Puerto, aeroespacial (Airbus) y logística.', region: 'norte' },
    { nombre: 'Mecklemburgo-Pomerania', capital: 'Schwerin', rasgo: 'Turismo báltico y agricultura.', region: 'este' },
    { nombre: 'Brandeburgo', capital: 'Potsdam', rasgo: 'Rodea Berlín. Tesla Gigafactory en Grünheide.', region: 'este' },
    { nombre: 'Sajonia-Anhalt', capital: 'Magdeburgo', rasgo: 'Química en Leuna y la Bauhaus en Dessau.', region: 'este' },
    { nombre: 'Turingia', capital: 'Érfurt', rasgo: 'Óptica de precisión en Jena: Zeiss, Jenoptik.', region: 'este' },
    { nombre: 'Renania-Palatinado', capital: 'Maguncia', rasgo: 'BASF, BioNTech y vinos del Rin.', region: 'oeste' },
    { nombre: 'Sarre', capital: 'Saarbrücken', rasgo: 'Frontera francesa, acero y bilingüismo.', region: 'oeste' }
  ],

  diversidad: [
    { titulo: 'Norte protestante, sur católico', texto: 'El norte es sobrio y directo; el sur, tradicional y formal.' },
    { titulo: 'Este y oeste', texto: 'Salarios más bajos en el este, pero inversión tecnológica masiva.' },
    { titulo: 'Sociedad de inmigración', texto: '25.6 % con antecedentes migratorios. En Fráncfort, más de la mitad.', fuente: 'Destatis 2024' },
    { titulo: 'No existe el alemán promedio', texto: 'Investiga región, religión e historia industrial antes de la reunión.' }
  ],

  /* ---------- 3. Cultura y negocios internacionales ---------- */

  cultureMap: {
    fuente: 'Erin Meyer, The Culture Map (2014). Escala 0-100 aproximada.',
    escalas: [
      { id: 'com', nombre: 'Comunicación', izq: 'Explícita', der: 'Implícita', de: 15, mx: 75, a: 'Digo exactamente lo que pienso, sin adornos.', b: 'Sugiero y dejo que el otro lea entre líneas.', texto: 'Alemania dice exactamente lo que quiere decir. México comunica entre líneas.' },
      { id: 'fb', nombre: 'Crítica', izq: 'Directa', der: 'Indirecta', de: 12, mx: 78, a: 'Si algo está mal, lo digo tal cual: "esto está mal".', b: 'Suavizo la crítica y la doy en privado.', texto: '"Das ist falsch" es un comentario técnico normal, no una agresión.' },
      { id: 'per', nombre: 'Persuasión', izq: 'Principios primero', der: 'Aplicación primero', de: 15, mx: 60, a: 'Para convencer, explico primero el método y los datos.', b: 'Para convencer, muestro primero el resultado y los beneficios.', texto: 'Primero el porqué y el método; la conclusión al final.' },
      { id: 'lid', nombre: 'Liderazgo', izq: 'Igualitario', der: 'Jerárquico', de: 40, mx: 85, a: 'Al jefe se le puede contradecir con argumentos.', b: 'Al jefe se le respeta y no se le contradice en público.', texto: 'Estructura formal, pero la opinión experta pesa.' },
      { id: 'dec', nombre: 'Decisiones', izq: 'Consenso', der: 'Desde arriba', de: 25, mx: 85, a: 'Decido despacio, con todos de acuerdo, y no cambio después.', b: 'Decido rápido desde arriba y ajusto en el camino.', texto: 'Alemania: lenta para decir sí, inflexible después. México: al revés.' },
      { id: 'con', nombre: 'Confianza', izq: 'Por la tarea', der: 'Por la relación', de: 22, mx: 88, a: 'Confío en alguien cuando cumple lo que promete.', b: 'Confío en alguien cuando lo conozco en persona.', texto: 'Primero trabajo, luego amistad. En México, al contrario.' },
      { id: 'des', nombre: 'Desacuerdo', izq: 'Abierto', der: 'Evitado', de: 20, mx: 80, a: 'Debatir abiertamente en la reunión es sano.', b: 'El desacuerdo se maneja mejor en privado y con tacto.', texto: 'Debatir en la reunión es sano. Un silencio mexicano es un "no" que el alemán no escucha.' },
      { id: 'tie', nombre: 'Tiempo', izq: 'Lineal', der: 'Flexible', de: 10, mx: 80, a: 'La agenda y la hora se cumplen al minuto.', b: 'La agenda es una guía; lo importante es la conversación.', texto: 'Una cosa a la vez, a la hora. La agenda es un contrato.' }
    ]
  },

  riesgos: [
    { num: '01', titulo: 'Llegar tarde', porque: 'La puntualidad se lee como fiabilidad.', hacer: 'Llega 10 minutos antes; si hay retraso, avisa antes de la hora.' },
    { num: '02', titulo: 'Tutear', porque: 'El "Sie" y el apellido marcan respeto profesional.', hacer: 'Herr / Frau + apellido y título hasta que te inviten al "du".' },
    { num: '03', titulo: 'Abrir con charla personal', porque: 'La reunión existe para trabajar.', hacer: 'Dos minutos de conversación neutra y a la agenda.' },
    { num: '04', titulo: 'Tomar la crítica como ataque', porque: 'La franqueza es un signo de respeto.', hacer: 'Agradece, pide detalle y responde con datos.' },
    { num: '05', titulo: 'Prometer de más', porque: 'Todo se contrasta contra el resultado.', hacer: '"Lo reviso y te confirmo el jueves" vale más que un "sí".' },
    { num: '06', titulo: 'Presentar sin datos', porque: 'Sin método y cifras, es marketing.', hacer: 'Especificaciones, certificaciones ISO/DIN, casos con números.' },
    { num: '07', titulo: 'Renegociar lo acordado', porque: 'Lo decidido es definitivo.', hacer: 'Negocia todo antes de cerrar. Cambios, por escrito y justificados.' },
    { num: '08', titulo: 'Saltarte al responsable', porque: 'La Zuständigkeit existe para respetarse.', hacer: 'Trata con la persona responsable; escala solo con su conocimiento.' },
    { num: '09', titulo: 'Escribir fuera de horario', porque: 'El Feierabend está protegido por ley.', hacer: 'Correo formal en horario laboral. Planea alrededor de vacaciones.' },
    { num: '10', titulo: 'Confundir frialdad con rechazo', porque: 'El tono neutro es la norma profesional.', hacer: 'El interés se mide en preguntas técnicas y siguientes pasos.' }
  ],

  recomendaciones: {
    fuente: 'Síntesis a partir de Erin Meyer, Hofstede Insights, GTAI y CAMEXA',
    fases: [
      { fase: 'Antes', items: ['Investiga región, tamaño y certificaciones de la empresa.', 'Identifica al responsable y su título correcto.', 'Traduce al alemán presentación y ficha técnica.', 'Pide la cita por correo con 2-3 semanas y agenda.', 'Revisa festivos regionales y vacaciones.'] },
      { fase: 'Primera reunión', items: ['Llega 10 minutos antes, traje oscuro y sobrio.', 'Apretón firme y breve a todos, empezando por el mayor rango.', 'Tarjetas con títulos; agenda punto por punto.', 'Estructura deductiva: contexto, método, datos, conclusión.'] },
      { fase: 'Negociación', items: ['Franqueza y precisión, sin superlativos.', 'Objeciones = interés. Responde con evidencia.', 'No presiones el cierre; el proceso es lento y consensual.', 'Precio no es todo: calidad, plazos y normativa pesan igual.', 'Si no sabes, dilo y da fecha de respuesta.'] },
      { fase: 'Cierre', items: ['Todo por escrito; lee cada cláusula.', 'Cierra todos los puntos antes de firmar.', 'Protokoll con acuerdos y fechas en 24 horas.', 'Penalizaciones y garantías claras: son señal de seriedad.'] },
      { fase: 'Seguimiento', items: ['Cumple cada plazo; si no, avisa antes.', 'Correo formal en horario laboral.', 'La cena llega después del segundo proyecto exitoso.', 'Ferias del sector y CAMEXA para sostener presencia.', 'Felicitaciones navideñas sobrias; sin regalos costosos.'] }
    ]
  },

  glosario: [
    { de: 'Sehr geehrte Frau / Sehr geehrter Herr', es: 'Apertura formal obligatoria en correos.' },
    { de: 'Termin', es: 'Cita. Un compromiso, no una intención.' },
    { de: 'Protokoll', es: 'Minuta con acuerdos y responsables.' },
    { de: 'Zuständigkeit', es: 'Área de responsabilidad formal.' },
    { de: 'Angebot', es: 'Cotización formal y vinculante.' },
    { de: 'Feierabend', es: 'Fin de la jornada. Intocable.' },
    { de: 'Jein', es: 'Sí y no. Escucha la explicación.' },
    { de: 'Das ist nicht mein Bier', es: 'No es mi responsabilidad.' },
    { de: 'Unter vier Augen', es: 'Conversación privada, uno a uno.' }
  ],

  fuentes: [
    { nombre: 'Destatis. Comercio exterior 2025; PIB 2025; Mikrozensus 2024.', url: 'https://www.destatis.de/EN/' },
    { nombre: 'Deutsche Bundesbank. Foreign direct investment stocks, 2024.', url: 'https://www.bundesbank.de/en/press/press-releases' },
    { nombre: 'OMC. World Trade Statistics 2025.', url: 'https://www.wto.org/english/res_e/statis_e/statis_e.htm' },
    { nombre: 'Hofstede Insights. Country Comparison Tool.', url: 'https://www.hofstede-insights.com/country-comparison-tool' },
    { nombre: 'Meyer, Erin. The Culture Map. PublicAffairs, 2014.', url: 'https://erinmeyer.com/books/the-culture-map/' },
    { nombre: 'fowid. Religionszugehörigkeiten 2024.', url: 'https://fowid.de/' },
    { nombre: 'KfW Research e IfM Bonn. Mittelstand 2024.', url: 'https://www.ifm-bonn.org/' },
    { nombre: 'Germany Trade & Invest. Business culture guides.', url: 'https://www.gtai.de/en/invest' },
    { nombre: 'CAMEXA. Relaciones económicas México–Alemania.', url: 'https://mexiko.ahk.de/es/' },
    { nombre: 'Secretaría de Economía. Acuerdo Global UE–México.', url: 'https://www.gob.mx/se' },
    { nombre: 'AUMA. Ferias líderes internacionales en Alemania.', url: 'https://www.auma.de/en' },
    { nombre: 'Simon, Hermann. Hidden Champions of the 21st Century. Springer, 2009.', url: 'https://link.springer.com/book/10.1007/978-0-387-98147-5' }
  ]
};
