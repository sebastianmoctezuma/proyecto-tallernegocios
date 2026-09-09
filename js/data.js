/* =====================================================================
   KIT DIGITAL DE NEGOCIACIÓN INTERNACIONAL — ALEMANIA
   Contenido y cifras. Cada bloque indica su fuente.
   ===================================================================== */

window.KIT = {

  /* ---------- 1. Alemania en el contexto internacional ---------- */

  indicadores: [
    { valor: 4.47, sufijo: ' billones €', decimales: 2, etiqueta: 'PIB nominal 2025', nota: 'Tercera economía del mundo, detrás de EE. UU. y China.', fuente: 'Destatis, enero 2026' },
    { valor: 3, prefijo: '#', sufijo: '', decimales: 0, etiqueta: 'Exportador mundial', nota: 'Exportaciones de bienes por 1.7 billones USD en 2024.', fuente: 'OMC, World Trade Statistics 2025' },
    { valor: 200.5, sufijo: ' mil M€', decimales: 1, etiqueta: 'Superávit comercial 2025', nota: 'Exporta más de lo que importa desde hace décadas.', fuente: 'Destatis, febrero 2026' },
    { valor: 1750, sufijo: ' mil M€', decimales: 0, etiqueta: 'Inversión directa en el exterior', nota: 'Stock de IED alemana al cierre de 2024.', fuente: 'Deutsche Bundesbank' },
    { valor: 83.5, sufijo: ' M', decimales: 1, etiqueta: 'Habitantes', nota: 'País más poblado de la Unión Europea.', fuente: 'Destatis' },
    { valor: 99, sufijo: ' %', decimales: 0, etiqueta: 'Empresas son Mittelstand', nota: 'Pymes que concentran cerca del 60 % del empleo.', fuente: 'IfM Bonn / KfW' }
  ],

  socios: {
    fuente: 'Destatis, comercio exterior 2025 (volumen = exportaciones + importaciones, miles de millones de euros)',
    labels: ['China', 'Estados Unidos', 'Países Bajos', 'Polonia', 'Francia', 'Italia', 'Austria', 'Suiza', 'Bélgica', 'Rep. Checa'],
    valores: [251.8, 240.5, 209.1, 172, 165, 152, 128, 121, 112, 110],
    nota: 'China recuperó en 2025 el primer lugar que había perdido con EE. UU. en 2024. Ocho de los diez principales socios son europeos: el mercado único de la UE es el corazón del comercio alemán.'
  },

  exportDestinos: {
    fuente: 'Destatis 2025, exportaciones alemanas por país de destino (miles de millones de euros, aprox.)',
    labels: ['Estados Unidos', 'Francia', 'Países Bajos', 'Polonia', 'China', 'Italia', 'Austria', 'Reino Unido', 'Suiza', 'Bélgica'],
    valores: [153, 118, 112, 96, 85, 83, 80, 75, 70, 67],
    nota: 'EE. UU. sigue siendo el principal destino de las exportaciones aunque las ventas de autos cayeron 17.8 % en 2025 por los aranceles.'
  },

  importOrigen: {
    fuente: 'Destatis 2025, importaciones alemanas por país de origen (miles de millones de euros, aprox.)',
    labels: ['China', 'Países Bajos', 'Estados Unidos', 'Polonia', 'Italia', 'Francia', 'Bélgica', 'Rep. Checa', 'Austria', 'Suiza'],
    valores: [167, 97, 88, 76, 69, 62, 55, 54, 48, 51],
    nota: 'China es la mayor fuente de importaciones: electrónica, maquinaria, baterías y componentes.'
  },

  productos: {
    fuente: 'Destatis 2024, participación en las exportaciones totales',
    labels: ['Vehículos y autopartes', 'Maquinaria', 'Químicos', 'Equipo eléctrico', 'Farmacéuticos', 'Computación y óptica', 'Alimentos', 'Metales', 'Otros'],
    valores: [17.0, 14.2, 9.0, 7.5, 7.1, 6.4, 4.8, 4.5, 29.5],
    nota: 'Bienes de capital e ingeniería de alto valor: Alemania vende lo que otros países usan para producir.'
  },

  marquee: ['Automóviles', 'Maquinaria industrial', 'Química', 'Farmacéutica', 'Ingeniería eléctrica', 'Óptica', 'Robótica', 'Autopartes', 'Tecnología médica', 'Energía eólica', 'Software industrial', 'Instrumentos de precisión'],

  roles: [
    {
      titulo: 'Motor industrial de Europa',
      texto: 'La industria pesa cerca del 26 % del PIB, muy por encima del promedio de la UE. Alemania fabrica los bienes de capital con los que produce el resto del mundo: máquinas-herramienta, robótica, química fina.',
      dato: '26 % del PIB es industria',
      fuente: 'Destatis / BMWK'
    },
    {
      titulo: 'Mittelstand y "campeones ocultos"',
      texto: 'Más de 1,500 empresas medianas, familiares y poco conocidas, lideran nichos globales (sellos, válvulas, sensores). Negociar con Alemania suele ser negociar con una empresa familiar de tercera generación en una ciudad pequeña.',
      dato: '+1,500 hidden champions',
      fuente: 'Hermann Simon, Hidden Champions; IfM Bonn'
    },
    {
      titulo: 'Arquitecto del mercado único',
      texto: 'Mayor economía de la UE y la eurozona. Sus posiciones marcan la política comercial europea: acuerdos de libre comercio, reglas de origen, normas técnicas (DIN, CE) y regulación de sostenibilidad.',
      dato: 'Aprox. 24 % del PIB de la UE',
      fuente: 'Eurostat'
    },
    {
      titulo: 'Inversionista global',
      texto: 'Stock de inversión directa en el exterior de 1.75 billones de euros. Plantas alemanas en México, EE. UU., China y Europa del Este forman cadenas de valor transcontinentales.',
      dato: '1.75 billones € de IED',
      fuente: 'Deutsche Bundesbank 2024'
    },
    {
      titulo: 'Capital mundial de las ferias',
      texto: 'Dos terceras partes de las ferias industriales líderes del mundo se celebran en Alemania. Hannover Messe, IAA o Medica son donde se abren y cierran contratos.',
      dato: '2/3 de las ferias líderes',
      fuente: 'AUMA, Asociación de la Industria Ferial Alemana'
    },
    {
      titulo: 'Miembro de todos los foros',
      texto: 'G7, G20, OCDE, OMC, OTAN, FMI. Participa en la definición de estándares globales: desde reglas fiscales hasta normas de reporte ESG.',
      dato: 'G7 · G20 · OCDE · OMC',
      fuente: 'Auswärtiges Amt'
    }
  ],

  ferias: [
    { nombre: 'Hannover Messe', ciudad: 'Hannover', mes: 'Abril', sector: 'Tecnología industrial e Industria 4.0', dato: '4,000 expositores · 130,000 visitantes' },
    { nombre: 'IAA Mobility', ciudad: 'Múnich', mes: 'Septiembre', sector: 'Movilidad y automotriz', dato: 'Desde 1897' },
    { nombre: 'Medica', ciudad: 'Düsseldorf', mes: 'Noviembre', sector: 'Tecnología médica', dato: 'La mayor del mundo en su sector' },
    { nombre: 'Frankfurter Buchmesse', ciudad: 'Fráncfort', mes: 'Octubre', sector: 'Editorial y derechos', dato: '7,000 expositores' },
    { nombre: 'bauma', ciudad: 'Múnich', mes: 'Abril (trienal)', sector: 'Maquinaria de construcción', dato: 'La feria más grande del planeta por superficie' },
    { nombre: 'Anuga', ciudad: 'Colonia', mes: 'Octubre (bienal)', sector: 'Alimentos y bebidas', dato: 'Puerta de entrada de exportadores agroalimentarios' },
    { nombre: 'ITB Berlin', ciudad: 'Berlín', mes: 'Marzo', sector: 'Turismo', dato: 'Feria líder mundial de viajes' }
  ],

  mexico: {
    titulo: 'México y Alemania',
    bullets: [
      'Alemania es el principal socio comercial de México dentro de la Unión Europea y México es el segundo socio de Alemania en América Latina.',
      'Cerca de 2,100 empresas con capital alemán operan en México y emplean a más de 300,000 personas: Volkswagen (Puebla), Audi (San José Chiapa), BMW (San Luis Potosí), Mercedes-Benz (Aguascalientes), Siemens, Bosch, BASF, Bayer.',
      'El Acuerdo Global UE–México modernizado (negociación concluida en 2025) elimina aranceles en casi la totalidad del comercio de bienes y fortalece reglas de inversión y compras públicas.',
      'El Año Dual México–Alemania (2016-2017) y la Cámara Mexicano-Alemana de Comercio (CAMEXA/AHK) son puentes institucionales activos.'
    ],
    fuente: 'Secretaría de Economía, CAMEXA (AHK México), Comisión Europea'
  },

  /* ---------- 2. Cultura del país ---------- */

  manifiesto: 'Para entender a Alemania hay que entender que el orden no es rigidez sino confianza: reglas claras para que nadie tenga que adivinar. La puntualidad es respeto por el tiempo ajeno. La franqueza es honestidad, no agresión. Y la separación entre trabajo y vida privada es una frontera que se defiende con la misma seriedad con la que se cumple un contrato.',

  valores: [
    { palabra: 'Ordnung', trad: 'Orden', texto: '"Ordnung muss sein". Procesos, reglas y estructura reducen la incertidumbre. En una empresa alemana el organigrama, el reglamento y el calendario son reales y se respetan.', negocio: 'Envía agendas por escrito, respeta el orden del día y no improvises cambios de última hora.' },
    { palabra: 'Pünktlichkeit', trad: 'Puntualidad', texto: 'Llegar tarde comunica desinterés o desorganización. Cinco minutos de retraso ya requieren aviso y disculpa. El tren que llega tarde es noticia nacional.', negocio: 'Llega entre 5 y 10 minutos antes. Si algo se retrasa, avisa antes de la hora acordada, no después.' },
    { palabra: 'Gründlichkeit', trad: 'Meticulosidad', texto: 'Hacer las cosas a fondo y bien desde la primera vez. Se prefiere una respuesta tardía y completa a una rápida y parcial.', negocio: 'Prepara datos, especificaciones técnicas y anexos. Las presentaciones ligeras y "vendedoras" generan desconfianza.' },
    { palabra: 'Sachlichkeit', trad: 'Objetividad', texto: 'Separar el asunto de la persona. Se debate la idea, no a quien la propone. Un desacuerdo técnico no es un ataque personal.', negocio: 'Acepta críticas directas a tu propuesta sin defenderte emocionalmente. Responde con argumentos y evidencia.' },
    { palabra: 'Zuverlässigkeit', trad: 'Fiabilidad', texto: 'La palabra dada vale. Cumplir plazos, entregar lo prometido y ser predecible construye reputación, el activo más valioso en el Mittelstand.', negocio: 'No prometas lo que no puedas cumplir. Un "quizá" alemán se interpreta como un "no".' },
    { palabra: 'Feierabend', trad: 'Fin de la jornada', texto: 'Al terminar el trabajo, se termina. El tiempo libre, las vacaciones (30 días es lo normal) y el domingo de descanso son sagrados y están protegidos por ley.', negocio: 'No llames ni escribas fuera de horario ni en vacaciones. Planea con anticipación los periodos de julio-agosto y Navidad.' },
    { palabra: 'Privatsphäre', trad: 'Esfera privada', texto: 'Clara distinción entre la vida pública y la privada. Preguntas personales, salario o familia se reservan hasta que existe una relación real.', negocio: 'Evita el "small talk" personal en los primeros encuentros. Habla de temas neutros: viaje, ciudad, sector, fútbol.' },
    { palabra: 'Vereinskultur', trad: 'Vida asociativa', texto: 'Más de 600,000 asociaciones (Vereine): deportivas, de bomberos voluntarios, de tiro, corales. La comunidad se organiza formalmente y con estatutos.', negocio: 'La pertenencia a cámaras, gremios y asociaciones sectoriales (VDMA, VDA, BDI) es la vía natural para hacer contactos.' }
  ],

  hofstede: {
    fuente: 'Hofstede Insights, Country Comparison Tool (modelo 6-D)',
    dimensiones: ['Distancia al poder', 'Individualismo', 'Motivación al logro', 'Evitación de la incertidumbre', 'Orientación a largo plazo', 'Indulgencia'],
    paises: {
      Alemania: { color: '#E3B02F', valores: [35, 67, 66, 65, 83, 40] },
      México:   { color: '#C8102E', valores: [81, 30, 69, 82, 24, 97] },
      'EE. UU.': { color: '#8A8F96', valores: [40, 91, 62, 46, 26, 68] }
    },
    lecturas: [
      { dim: 'Distancia al poder: 35 vs 81', texto: 'Alemania es jerárquica en la forma (títulos, formalidad) pero baja en distancia al poder: se espera que los expertos opinen y contradigan al jefe con argumentos. En México la autoridad se cuestiona menos abiertamente.' },
      { dim: 'Individualismo: 67 vs 30', texto: 'Las decisiones alemanas se basan en responsabilidad individual y contrato explícito; las mexicanas en lealtad de grupo y relaciones. Para un alemán, la confianza nace del desempeño, no del vínculo personal.' },
      { dim: 'Evitación de la incertidumbre: 65 vs 82', texto: 'Ambas culturas prefieren reglas, pero las usan distinto: Alemania las cumple al pie de la letra para eliminar ambigüedad; México las tiene pero tolera excepciones negociadas.' },
      { dim: 'Largo plazo: 83 vs 24', texto: 'El puntaje más alto de Alemania. Ahorro, planificación multianual, relaciones proveedor-cliente de décadas. El negociador alemán piensa en cinco años; el mexicano suele pensar en el trimestre.' },
      { dim: 'Indulgencia: 40 vs 97', texto: 'El contraste más extremo. Alemania es contenida: poca expresión emocional en público, celebración moderada. México es la cultura más indulgente del estudio. Esto explica el choque en el tono de las reuniones.' }
    ]
  },

  religion: {
    fuente: 'fowid (Forschungsgruppe Weltanschauungen in Deutschland), 2024',
    labels: ['Sin religión', 'Católicos', 'Protestantes (EKD)', 'Musulmanes', 'Otras'],
    valores: [47, 24, 21, 3.9, 4.1],
    colores: ['#14181F', '#E3B02F', '#8A8F96', '#C8102E', '#C9CBC6'],
    texto: 'En 2024, por primera vez, las personas sin afiliación religiosa superaron a católicos y protestantes juntos. Alemania es una sociedad secular donde la religión rara vez aparece en la conversación de negocios, pero su huella persiste: la ética protestante del trabajo, el impuesto eclesiástico (Kirchensteuer), el descanso dominical legal y un calendario de festivos que cambia según el estado.',
    festivos: [
      { nombre: 'Año Nuevo, Viernes Santo, Pascua, 1 de mayo, Ascensión, Pentecostés, Día de la Unidad (3 oct), Navidad (25 y 26 dic)', alcance: 'Todo el país' },
      { nombre: 'Epifanía (6 ene), Corpus Christi, Todos los Santos (1 nov)', alcance: 'Baviera, Baden-Württemberg y otros estados católicos' },
      { nombre: 'Día de la Reforma (31 oct)', alcance: 'Estados del norte y el este, de tradición protestante' },
      { nombre: 'Asunción (15 ago)', alcance: 'Solo Sarre y municipios católicos de Baviera' }
    ],
    tradiciones: [
      { nombre: 'Oktoberfest', texto: 'Múnich, finales de septiembre. Muchas empresas invitan a clientes; aceptar es una señal de relación consolidada.' },
      { nombre: 'Weihnachtsmarkt', texto: 'Mercados navideños desde finales de noviembre. Las reuniones se frenan en diciembre; la actividad se retoma a mediados de enero.' },
      { nombre: 'Karneval / Fasching', texto: 'Colonia, Düsseldorf, Maguncia. Del jueves al martes previos a la Cuaresma las oficinas de la región renana prácticamente cierran.' },
      { nombre: 'Kaffee und Kuchen', texto: 'Café y pastel a media tarde. Un espacio informal que a veces sustituye la comida de negocios.' }
    ]
  },

  estructura: [
    { titulo: 'Jerarquía funcional, no personal', texto: 'La autoridad viene del cargo y de la competencia técnica demostrada, no del carisma. El jefe es quien decide, pero se espera que consulte a los especialistas y que la decisión final se documente.' },
    { titulo: 'Individuo con responsabilidad explícita', texto: 'Cada persona tiene un área de responsabilidad (Zuständigkeit) definida. Preguntar "¿quién es responsable de esto?" es normal y esperado. Saltarse a la persona responsable se considera una falta grave.' },
    { titulo: 'Formalidad como respeto', texto: 'Se usa "Sie" (usted) y el apellido con título (Herr Dr. Schmidt, Frau Professorin Weber) hasta que la parte alemana proponga el "du". Los títulos académicos se usan en tarjetas, correos y puertas de oficina.' },
    { titulo: 'Consenso técnico (Mitbestimmung)', texto: 'Las grandes empresas tienen consejos de trabajadores con voz en las decisiones (cogestión). Las decisiones tardan más porque se consultan varios niveles, pero una vez tomadas no se reabren.' },
    { titulo: 'Relaciones lentas y duraderas', texto: 'La amistad se construye con años y pocas personas. En los negocios, la relación llega después del contrato, no antes. Un proveedor que cumple durante diez años se convierte en socio de por vida.' },
    { titulo: 'Igualdad de género en avance', texto: 'Cuota legal de 30 % de mujeres en consejos de supervisión de empresas cotizadas. Aun así, la brecha salarial ronda el 16 %. Espera negociadoras en posiciones de decisión y trátalas con la misma formalidad.' }
  ],

  laender: [
    { nombre: 'Baviera', capital: 'Múnich', rasgo: 'Católica, conservadora y próspera. BMW, Siemens, Allianz. Identidad regional fuerte: "primero bávaro, luego alemán".', region: 'sur' },
    { nombre: 'Baden-Württemberg', capital: 'Stuttgart', rasgo: 'Cuna del Mittelstand: Bosch, Daimler, Porsche. Fama de ahorradores y perfeccionistas ("Schaffe, schaffe, Häusle baue").', region: 'sur' },
    { nombre: 'Renania del Norte-Westfalia', capital: 'Düsseldorf', rasgo: 'El estado más poblado. Cuenca del Ruhr, Colonia, ferias de Düsseldorf. Carácter renano: más abierto y jovial.', region: 'oeste' },
    { nombre: 'Hesse', capital: 'Wiesbaden', rasgo: 'Fráncfort: capital financiera, Banco Central Europeo, aeropuerto hub y feria del libro.', region: 'oeste' },
    { nombre: 'Baja Sajonia', capital: 'Hannover', rasgo: 'Volkswagen (Wolfsburgo), Hannover Messe, agroindustria y energía eólica.', region: 'norte' },
    { nombre: 'Hamburgo', capital: 'Hamburgo', rasgo: 'Ciudad-estado portuaria, tradición hanseática mercantil: sobria, cosmopolita, "Hanseatic understatement".', region: 'norte' },
    { nombre: 'Berlín', capital: 'Berlín', rasgo: 'Capital política, escena startup, cultura alternativa, alta proporción de extranjeros. Más informal que el resto del país.', region: 'este' },
    { nombre: 'Sajonia', capital: 'Dresde', rasgo: '"Silicon Saxony": semiconductores (Infineon, GlobalFoundries, TSMC). Fuerte identidad del este.', region: 'este' },
    { nombre: 'Schleswig-Holstein', capital: 'Kiel', rasgo: 'Entre dos mares. Energía eólica marina, industria naval, vínculos con Escandinavia.', region: 'norte' },
    { nombre: 'Bremen', capital: 'Bremen', rasgo: 'Ciudad-estado portuaria, aeroespacial (Airbus) y logística.', region: 'norte' },
    { nombre: 'Mecklemburgo-Pomerania Occ.', capital: 'Schwerin', rasgo: 'Turismo báltico y agricultura. La menor densidad de población del país.', region: 'este' },
    { nombre: 'Brandeburgo', capital: 'Potsdam', rasgo: 'Rodea Berlín. Tesla Gigafactory en Grünheide, logística y energías renovables.', region: 'este' },
    { nombre: 'Sajonia-Anhalt', capital: 'Magdeburgo', rasgo: 'Química (Leuna), planta de Intel en proyecto, patrimonio de la Bauhaus en Dessau.', region: 'este' },
    { nombre: 'Turingia', capital: 'Érfurt', rasgo: 'Óptica de precisión en Jena (Zeiss, Jenoptik). Corazón geográfico y cultural (Weimar).', region: 'este' },
    { nombre: 'Renania-Palatinado', capital: 'Maguncia', rasgo: 'BASF en Ludwigshafen, BioNTech en Maguncia, vinos del Rin y Mosela.', region: 'oeste' },
    { nombre: 'Sarre', capital: 'Saarbrücken', rasgo: 'Frontera francesa, historia siderúrgica, bilingüismo funcional. El estado más pequeño (sin contar ciudades-estado).', region: 'oeste' }
  ],

  diversidad: [
    { titulo: 'Un país, muchas Alemanias', texto: 'Alemania se unificó apenas en 1871 y fue dividida entre 1949 y 1990. Los 16 estados federados conservan competencias reales (educación, policía, festivos) y personalidades culturales distintas.' },
    { titulo: 'Norte protestante, sur católico', texto: 'La línea histórica de la Reforma sigue marcando el mapa: el norte es más sobrio y directo; el sur, más tradicional, festivo y formal. Bayern y Baden-Württemberg concentran gran parte de la industria exportadora.' },
    { titulo: 'Este y oeste', texto: 'Treinta y cinco años después de la reunificación, el este tiene salarios más bajos, menos sedes corporativas y una mirada más escéptica hacia las élites. Sin embargo, atrae inversiones tecnológicas masivas (Dresde, Grünheide, Magdeburgo).' },
    { titulo: 'Sociedad de inmigración', texto: '25.6 % de la población tiene antecedentes migratorios (21.2 millones de personas); 12.4 millones son extranjeros. Las mayores comunidades: turca, ucraniana, siria, polaca, rumana. En Fráncfort, más de la mitad de la población tiene origen migrante.', fuente: 'Destatis, Mikrozensus 2024' },
    { titulo: 'Dialectos y Hochdeutsch', texto: 'Bávaro, suabo, sajón, bajo alemán. En los negocios se usa el alemán estándar, y el inglés es común en corporativos y startups, pero no en el Mittelstand de provincia. Traduce tus materiales al alemán.' },
    { titulo: 'Implicación para negocios', texto: 'No existe "el alemán promedio". Un ejecutivo de Hamburgo, uno de Múnich y uno de Leipzig se comportarán distinto. Investiga la región, la religión predominante y la historia industrial de la empresa antes de la primera reunión.' }
  ],

  /* ---------- 3. Cultura y negocios internacionales ---------- */

  cultureMap: {
    fuente: 'Erin Meyer, The Culture Map (2014). Posiciones aproximadas en escala 0-100.',
    escalas: [
      { id: 'com', nombre: 'Comunicación', izq: 'Bajo contexto (explícita)', der: 'Alto contexto (implícita)', de: 15, mx: 75, texto: 'Alemania dice exactamente lo que quiere decir. Lo que no se escribe no existe. México comunica entre líneas y con cortesía que suaviza el mensaje.' },
      { id: 'fb', nombre: 'Retroalimentación negativa', izq: 'Directa', der: 'Indirecta', de: 12, mx: 78, texto: '"Das ist falsch" (eso está mal) es un comentario técnico normal. Para un mexicano puede sonar a agresión; para un alemán, el rodeo mexicano suena a evasión.' },
      { id: 'per', nombre: 'Persuasión', izq: 'Primero principios (deductiva)', der: 'Primero aplicaciones (inductiva)', de: 15, mx: 60, texto: 'El alemán quiere entender el porqué antes del qué: teoría, método, datos, y al final la conclusión. Empezar por el resultado sin explicar el proceso genera sospecha.' },
      { id: 'lid', nombre: 'Liderazgo', izq: 'Igualitario', der: 'Jerárquico', de: 40, mx: 85, texto: 'Alemania está en el centro: estructuras formales pero la opinión experta pesa. México es fuertemente jerárquico; la decisión sube al director.' },
      { id: 'dec', nombre: 'Toma de decisiones', izq: 'Consensual', der: 'De arriba hacia abajo', de: 25, mx: 85, texto: 'Alemania decide despacio y por consenso técnico; una vez decidido es definitivo. México decide rápido desde arriba y ajusta después. Alemania: lento para decir sí, inflexible después. México: rápido para decir sí, flexible después.' },
      { id: 'con', nombre: 'Confianza', izq: 'Basada en la tarea', der: 'Basada en la relación', de: 22, mx: 88, texto: 'La confianza alemana se gana cumpliendo; la mexicana compartiendo comidas y tiempo. Ambas funcionan, pero en orden inverso: primero trabajo, luego amistad.' },
      { id: 'des', nombre: 'Desacuerdo', izq: 'Confrontacional', der: 'Evita la confrontación', de: 20, mx: 80, texto: 'Debatir abiertamente en una reunión es sano en Alemania. En México, el desacuerdo se expresa en privado y después. Un silencio mexicano puede ser un "no" que el alemán no escucha.' },
      { id: 'tie', nombre: 'Tiempo', izq: 'Lineal', der: 'Flexible', de: 10, mx: 80, texto: 'Una cosa a la vez, en orden, a la hora. La agenda es un contrato. En México el tiempo es fluido y las interrupciones son parte del trabajo.' }
    ]
  },

  riesgos: [
    { num: '01', titulo: 'Llegar tarde o cancelar a última hora', porque: 'La puntualidad se lee como fiabilidad. Un retraso de 10 minutos sin aviso puede descalificarte como socio serio antes de empezar a hablar.', hacer: 'Confirma la cita el día anterior, llega 10 minutos antes y si hay un imprevisto avisa por teléfono antes de la hora.' },
    { num: '02', titulo: 'Tutear o usar el nombre de pila', porque: 'El "Sie" y el apellido con título marcan respeto profesional. Pasar al "du" sin invitación se percibe como invasivo y poco serio.', hacer: 'Usa "Herr/Frau" + apellido (y "Dr." si aplica) hasta que la contraparte proponga el cambio. En inglés, "Mr./Ms." + apellido.' },
    { num: '03', titulo: 'Abrir con charla personal o humor', porque: 'La reunión existe para trabajar. El small talk extenso, los chistes y las preguntas sobre familia se interpretan como pérdida de tiempo o falta de preparación.', hacer: 'Dos minutos de conversación neutra (viaje, ciudad, clima) y directo a la agenda. El humor llega con la relación, no antes.' },
    { num: '04', titulo: 'Tomar la crítica como ataque personal', porque: 'La retroalimentación directa es un signo de respeto: te consideran capaz de escucharla. Ofenderse o defenderse emocionalmente confirma que no eres un socio confiable.', hacer: 'Agradece la observación, pide detalles y responde con datos. Separa la propuesta de tu persona.' },
    { num: '05', titulo: 'Prometer de más y entregar de menos', porque: 'El estilo comercial optimista ("sí, claro, sin problema") se contrasta después contra el resultado. Una promesa incumplida destruye años de relación.', hacer: 'Compromete solo lo verificable. Un "necesito revisarlo y te confirmo el jueves" vale más que un "sí" inmediato.' },
    { num: '06', titulo: 'Presentar sin datos ni detalle técnico', porque: 'La persuasión es deductiva: primero el método, luego el resultado. Las presentaciones emocionales o de "visión" sin cifras se descartan como marketing.', hacer: 'Lleva especificaciones, certificaciones (ISO, DIN, CE), casos con números y un anexo técnico. Espera preguntas incisivas y celébralas: significan interés.' },
    { num: '07', titulo: 'Intentar renegociar lo ya acordado', porque: 'Una vez decidido, el acuerdo es definitivo. Reabrir puntos cerrados se lee como mala fe o desorganización interna.', hacer: 'Negocia todo antes de cerrar. Si algo cambia, presenta la nueva información por escrito, con justificación, y acepta que la respuesta puede ser no.' },
    { num: '08', titulo: 'Ignorar la Zuständigkeit (responsabilidad formal)', porque: 'Saltarte a la persona responsable para hablar con su jefe humilla al primero y molesta al segundo. La estructura existe para respetarse.', hacer: 'Identifica quién es responsable de cada tema y trata con esa persona. Escala solo con su conocimiento.' },
    { num: '09', titulo: 'Contactar fuera de horario o en vacaciones', porque: 'El Feierabend y las vacaciones son intocables y están protegidos por ley. Un WhatsApp de trabajo el domingo se percibe como falta de respeto y desorganización.', hacer: 'Escribe correos formales en horario laboral. Planea alrededor de julio-agosto, Navidad y los festivos regionales.' },
    { num: '10', titulo: 'Confundir frialdad con desinterés', porque: 'Poca sonrisa, poco contacto físico y un tono neutro son la norma profesional, no una señal de rechazo. Interpretar mal el tono lleva a sobreactuar o a rendirse antes de tiempo.', hacer: 'Evalúa el interés por la sustancia: preguntas técnicas, solicitud de documentos, siguientes pasos concretos. Eso es un "sí" alemán.' }
  ],

  recomendaciones: {
    fuente: 'Síntesis del equipo a partir de Erin Meyer, Hofstede Insights, GTAI y CAMEXA',
    fases: [
      {
        fase: 'Antes del primer contacto',
        items: [
          'Investiga la empresa: región, tamaño (¿Mittelstand familiar o corporativo cotizado?), historia y certificaciones.',
          'Identifica a la persona responsable (Zuständigkeit) y su título correcto. Revisa LinkedIn y XING.',
          'Traduce al alemán el material clave: presentación, ficha técnica, propuesta. Contrata traducción profesional, no automática.',
          'Solicita la reunión por correo formal con 2-3 semanas de anticipación, propón agenda y duración exacta.',
          'Verifica festivos regionales y periodos vacacionales del estado federado antes de proponer fechas.'
        ]
      },
      {
        fase: 'Primera reunión',
        items: [
          'Llega 10 minutos antes. Vestimenta formal y sobria: traje oscuro, pocos accesorios, zapatos impecables.',
          'Saludo con apretón de manos firme y breve, contacto visual directo, a todos los presentes, empezando por el de mayor rango.',
          'Entrega tarjetas de presentación con títulos académicos y cargo; en alemán por un lado si es posible.',
          'Sigue la agenda punto por punto. No te saltes temas ni introduzcas sorpresas.',
          'Presenta con estructura deductiva: contexto, método, datos, conclusión. Anticipa preguntas técnicas detalladas.'
        ]
      },
      {
        fase: 'Durante la negociación',
        items: [
          'Habla con franqueza y precisión. Evita superlativos y lenguaje comercial exagerado.',
          'Recibe las objeciones como interés genuino y responde con evidencia, no con entusiasmo.',
          'No presiones para cerrar. El proceso alemán de decisión es lento y consensual; acelerar genera desconfianza.',
          'Acepta que el precio no es la única variable: calidad, plazos de entrega y cumplimiento normativo pesan igual o más.',
          'Si no sabes algo, dilo y comprométete a una fecha para responder. Nunca improvises una respuesta.'
        ]
      },
      {
        fase: 'Cierre y contrato',
        items: [
          'Todo por escrito. El contrato alemán es detallado y se cumplirá al pie de la letra; lee cada cláusula.',
          'Cierra todos los puntos antes de firmar. Lo acordado no se reabre.',
          'Envía un protocolo (Protokoll) de la reunión con acuerdos, responsables y fechas dentro de 24 horas.',
          'Define penalizaciones y garantías con claridad; para un alemán son señal de seriedad, no de desconfianza.'
        ]
      },
      {
        fase: 'Seguimiento y relación',
        items: [
          'Cumple cada plazo comprometido. Si vas a incumplir, avisa con anticipación y propón alternativa.',
          'Comunica por correo formal en horario laboral. Reserva el teléfono para urgencias reales.',
          'Construye la relación después de demostrar desempeño: una cena después del segundo proyecto exitoso vale más que una antes del primero.',
          'Visita ferias del sector y afíliate a la cámara binacional (CAMEXA) para sostener la presencia.',
          'Envía felicitaciones de Navidad escritas y sobrias. Evita regalos costosos: pueden violar políticas de cumplimiento.'
        ]
      }
    ]
  },

  simulador: {
    intro: 'Estás por cerrar tu primera reunión con Maschinenbau Hartmann GmbH, empresa familiar de Baden-Württemberg con 480 empleados. Cada decisión suma o resta preparación. Al final recibes tu diagnóstico.',
    escenas: [
      {
        id: 1,
        contexto: 'Correo inicial',
        situacion: 'Necesitas agendar la primera reunión con Frau Dr. Katrin Hartmann, directora general. ¿Cómo escribes el correo?',
        opciones: [
          { texto: '"Hola Katrin, me encantaría platicar contigo esta semana, ¿qué día te queda bien?"', puntos: 0, feedback: 'Tres errores: nombre de pila, plazo demasiado corto y sin agenda. En Alemania este correo probablemente no recibe respuesta.' },
          { texto: '"Sehr geehrte Frau Dr. Hartmann: propongo una reunión de 60 minutos el 14 o el 21 de octubre con la siguiente agenda (adjunta). Quedo atento a su confirmación."', puntos: 10, feedback: 'Exacto. Título correcto, dos fechas concretas con anticipación, duración y agenda por escrito. Así se abre una puerta alemana.' },
          { texto: '"Estimada Dra. Hartmann, tenemos una oportunidad increíble que va a revolucionar su negocio. ¿Podemos hablar cuanto antes?"', puntos: 3, feedback: 'La formalidad está bien, pero el lenguaje de venta exagerado ("increíble", "revolucionar") y la urgencia generan desconfianza inmediata.' }
        ]
      },
      {
        id: 2,
        contexto: 'Llegada',
        situacion: 'La reunión es a las 10:00 en Stuttgart. Tu tren desde Fráncfort sufre un retraso y llegarás a las 10:08. ¿Qué haces?',
        opciones: [
          { texto: 'Llegas a las 10:08, te disculpas brevemente y empiezas.', puntos: 2, feedback: 'Disculparse ayuda, pero llegar sin aviso ya dejó una impresión de descuido. Ocho minutos en Alemania son un retraso real.' },
          { texto: 'Llamas a las 9:40 a la asistente de la Dra. Hartmann, informas el retraso exacto y ofreces reducir la agenda para terminar a tiempo.', puntos: 10, feedback: 'Perfecto. Avisas antes de la hora, con dato preciso, y muestras respeto por el tiempo de todos ofreciendo ajustar la agenda.' },
          { texto: 'Envías un WhatsApp a las 10:02: "Ya casi llego, 5 min".', puntos: 1, feedback: 'Aviso tardío, informal y por un canal personal. El daño ya está hecho y el medio agrava la impresión.' }
        ]
      },
      {
        id: 3,
        contexto: 'Los primeros minutos',
        situacion: 'Entras a la sala. Están la Dra. Hartmann, el director técnico Herr Vogel y una ingeniera de compras, Frau Yilmaz. ¿Cómo rompes el hielo?',
        opciones: [
          { texto: 'Preguntas por sus familias, cuentas un chiste sobre el tráfico de la Ciudad de México y regalas tequila a cada uno.', puntos: 0, feedback: 'Preguntas personales, humor prematuro y regalos de alcohol en la primera reunión: tres señales de que no entiendes el código. El tequila además puede violar su política de cumplimiento.' },
          { texto: 'Saludas de mano a los tres, empezando por la Dra. Hartmann, comentas brevemente lo puntual del tren alemán (con ironía suave) y propones seguir la agenda.', puntos: 10, feedback: 'Bien. Saludo formal a todos por rango, un comentario neutro y breve, y directo al trabajo. Reconocer a Frau Yilmaz como igual también cuenta.' },
          { texto: 'Te sientas en silencio, esperas a que la Dra. Hartmann hable y no saludas a Frau Yilmaz porque asumes que es asistente.', puntos: 2, feedback: 'El silencio es aceptable, pero ignorar a una participante es un error grave. En Alemania cada persona en la sala tiene una función y merece saludo.' }
        ]
      },
      {
        id: 4,
        contexto: 'La presentación',
        situacion: 'Tienes 20 minutos para presentar tu empresa como proveedor de componentes. ¿Qué estructura eliges?',
        opciones: [
          { texto: 'Video emocional de la empresa, historia del fundador, visión 2030 y cierre con "juntos podemos lograr grandes cosas".', puntos: 1, feedback: 'Cero datos, cero método. Para un ingeniero alemán esto es marketing vacío. Herr Vogel dejará de escuchar en el minuto tres.' },
          { texto: 'Contexto del mercado, proceso de producción, certificaciones ISO 9001 e IATF 16949, datos de defectos por millón, dos casos con cifras, propuesta técnica y anexo de 40 páginas.', puntos: 10, feedback: 'Estructura deductiva perfecta. El anexo técnico es lo que el director técnico va a leer esa noche. Las certificaciones responden antes de que pregunten.' },
          { texto: 'Empiezas por el precio, que es 15 % menor al de su proveedor actual, y pides que firmen una carta de intención hoy.', puntos: 2, feedback: 'El precio no es la variable principal y presionar para firmar el mismo día activa todas las alarmas. Decidir rápido es sospechoso en Alemania.' }
        ]
      },
      {
        id: 5,
        contexto: 'La objeción',
        situacion: 'Herr Vogel interrumpe: "Sus datos de tolerancia son insuficientes. Así no funciona con nuestras máquinas." ¿Cómo respondes?',
        opciones: [
          { texto: '"Con todo respeto, creo que no está entendiendo bien nuestra propuesta, nuestros clientes están muy contentos."', puntos: 0, feedback: 'Defensivo y personal. Además el argumento ("otros están contentos") no es técnico. Acabas de confirmar que no eres el socio que buscan.' },
          { texto: '"Gracias por la precisión. ¿Podría indicarme el rango de tolerancia que requiere su línea? Tengo los datos de nuestra serie de alta precisión y puedo enviarle el reporte de metrología esta semana."', puntos: 10, feedback: 'Exacto. Tomas la crítica como información, pides el dato faltante y comprometes una entrega concreta. Herr Vogel acaba de convertirse en tu aliado.' },
          { texto: 'Sonríes, dices "sí, claro, eso lo ajustamos sin problema" y cambias de tema.', puntos: 2, feedback: 'Un "sí" vacío y evasivo. Vogel lo anotará y lo contrastará después. Si no puedes cumplirlo, la relación termina ahí.' }
        ]
      },
      {
        id: 6,
        contexto: 'El cierre',
        situacion: 'Termina la reunión. La Dra. Hartmann dice: "Lo analizaremos internamente y le informaremos en cuatro semanas." ¿Qué haces?',
        opciones: [
          { texto: 'Insistes: "¿No podríamos definirlo la próxima semana? Tengo otras ofertas y necesito una respuesta pronto."', puntos: 0, feedback: 'Presionar el proceso de decisión alemán es contraproducente. Cuatro semanas de análisis técnico y consenso interno es una buena señal, no una evasiva.' },
          { texto: 'Agradeces, confirmas el plazo, y en las siguientes 24 horas envías un Protokoll con los acuerdos, los datos comprometidos y la fecha de tu reporte de metrología.', puntos: 10, feedback: 'Impecable. Respetas el proceso, formalizas por escrito y cumples tu primer compromiso de inmediato. Así se construye fiabilidad.' },
          { texto: 'Los invitas a cenar esa noche para "cerrar la relación" y seguir hablando del proyecto en un ambiente relajado.', puntos: 3, feedback: 'La intención es buena pero el orden es inverso. En Alemania la relación viene después de demostrar desempeño. Una invitación tan pronta puede incomodar.' }
        ]
      }
    ],
    diagnosticos: [
      { min: 50, titulo: 'Verhandlungsprofi', texto: 'Estás listo para negociar en Alemania. Entiendes que la formalidad es respeto, la crítica es interés y la lentitud es seriedad. Revisa la checklist antes de viajar y visita una feria del sector.' },
      { min: 30, titulo: 'Fortgeschritten', texto: 'Buen instinto con algunos puntos ciegos. Repasa las secciones de riesgos culturales y el mapa cultural, en especial retroalimentación, tiempo y toma de decisiones.' },
      { min: 0, titulo: 'Anfänger', texto: 'Tu estilo funciona en México pero choca de frente con el código alemán. Empieza por los valores (Ordnung, Pünktlichkeit, Sachlichkeit), estudia los diez riesgos y vuelve a intentar el simulador.' }
    ]
  },

  glosario: [
    { de: 'Sehr geehrte Frau / Sehr geehrter Herr', es: 'Estimada señora / Estimado señor. Apertura formal obligatoria en correos.' },
    { de: 'Termin', es: 'Cita, fecha acordada. Un Termin es un compromiso, no una intención.' },
    { de: 'Protokoll', es: 'Minuta de reunión con acuerdos y responsables. Se envía y se cumple.' },
    { de: 'Zuständigkeit', es: 'Área de responsabilidad formal. Pregunta "Wer ist zuständig?".' },
    { de: 'Angebot', es: 'Oferta o cotización formal, detallada y vinculante.' },
    { de: 'Lieferzeit', es: 'Plazo de entrega. Se cumple al día.' },
    { de: 'Feierabend', es: 'Fin de la jornada laboral. Intocable.' },
    { de: 'Mahlzeit!', es: 'Saludo a la hora de la comida en oficinas y fábricas.' },
    { de: 'Jein', es: 'Sí y no. Se usa cuando la respuesta es matizada; escucha la explicación.' },
    { de: 'Das ist nicht mein Bier', es: '"Esa no es mi cerveza": no es mi responsabilidad. Busca al zuständig.' },
    { de: 'Unter vier Augen', es: '"Entre cuatro ojos": conversación privada, uno a uno.' },
    { de: 'Nägel mit Köpfen machen', es: 'Concretar, cerrar algo bien hecho. Lo que esperan de ti.' }
  ],

  fuentes: [
    { nombre: 'Destatis, Statistisches Bundesamt. "China is Germany\'s most important trading partner once again in 2025" (feb. 2026); "Gross domestic product up 0.2% in 2025" (ene. 2026); Mikrozensus 2024, población con antecedentes migratorios.', url: 'https://www.destatis.de/EN/' },
    { nombre: 'Deutsche Bundesbank. "Germany\'s foreign direct investment stocks at the end of 2024".', url: 'https://www.bundesbank.de/en/press/press-releases' },
    { nombre: 'Organización Mundial del Comercio. World Trade Statistics 2025: principales exportadores de mercancías 2024.', url: 'https://www.wto.org/english/res_e/statis_e/statis_e.htm' },
    { nombre: 'Hofstede Insights. Country Comparison Tool: Germany, Mexico, United States.', url: 'https://www.hofstede-insights.com/country-comparison-tool' },
    { nombre: 'Meyer, Erin. The Culture Map: Breaking Through the Invisible Boundaries of Global Business. PublicAffairs, 2014.', url: 'https://erinmeyer.com/books/the-culture-map/' },
    { nombre: 'fowid, Forschungsgruppe Weltanschauungen in Deutschland. Religionszugehörigkeiten 2024.', url: 'https://fowid.de/' },
    { nombre: 'KfW Research y IfM Bonn. Mittelstandsdefinition und Kennzahlen 2024.', url: 'https://www.ifm-bonn.org/' },
    { nombre: 'Germany Trade & Invest (GTAI). Business culture and market entry guides.', url: 'https://www.gtai.de/en/invest' },
    { nombre: 'CAMEXA, Cámara Mexicano-Alemana de Comercio e Industria. Relaciones económicas México–Alemania.', url: 'https://mexiko.ahk.de/es/' },
    { nombre: 'Secretaría de Economía de México. Relación comercial México–Alemania y Acuerdo Global UE–México modernizado.', url: 'https://www.gob.mx/se' },
    { nombre: 'AUMA, Asociación de la Industria Ferial Alemana. Ferias líderes internacionales en Alemania.', url: 'https://www.auma.de/en' },
    { nombre: 'Auswärtiges Amt, Ministerio Federal de Relaciones Exteriores. Alemania en organismos internacionales.', url: 'https://www.auswaertiges-amt.de/en' },
    { nombre: 'Simon, Hermann. Hidden Champions of the 21st Century. Springer, 2009.', url: 'https://link.springer.com/book/10.1007/978-0-387-98147-5' }
  ]
};
