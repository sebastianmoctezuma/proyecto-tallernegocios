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

  /* ---------- 4. Sistema político, económico y legal (Etapa 2) ---------- */

  sistema: [
    {
      id: 'politico', num: '4.1', titulo: 'Sistema político',
      resumen: 'República federal parlamentaria. Estable, predecible y lenta: todo se decide por coalición.',
      datos: [
        { k: 'Forma de gobierno', v: 'República federal parlamentaria (Ley Fundamental de 1949)' },
        { k: 'Jefe de gobierno', v: 'Canciller Friedrich Merz (CDU), desde mayo de 2025' },
        { k: 'Coalición', v: 'CDU/CSU + SPD' },
        { k: 'Parlamento', v: 'Bundestag (630 escaños) y Bundesrat (los 16 Länder)' }
      ],
      estabilidad: 82,
      estabilidadNota: 'Estabilidad política alta',
      impacto: 'Las reglas no cambian de un día para otro, pero cada reforma pasa por la coalición, el Bundesrat y, a veces, el Tribunal Constitucional. Para hacer negocios: seguridad jurídica a cambio de paciencia.',
      detalle: [
        { t: 'Estructura', d: 'El presidente federal (Frank-Walter Steinmeier) tiene un papel protocolario. El poder ejecutivo lo ejerce el canciller, elegido por el Bundestag. Los 16 Länder tienen gobierno, parlamento y competencias propias en educación, policía y administración.' },
        { t: 'Frenos y contrapesos', d: 'El "voto de censura constructivo" impide derribar a un canciller sin elegir otro al mismo tiempo. El Tribunal Constitucional Federal (Karlsruhe) puede anular leyes, como hizo con el presupuesto de 2023.' },
        { t: 'Momento actual', d: 'La coalición de Olaf Scholz se rompió en noviembre de 2024 y hubo elecciones anticipadas en febrero de 2025. AfD quedó como segunda fuerza, pero los partidos tradicionales mantienen la mayoría. En 2025 se flexibilizó el freno de deuda para financiar defensa y un fondo de 500 mil millones de euros para infraestructura.' },
        { t: 'Impacto en los negocios', d: 'Riesgo político bajo y contratos que se respetan. Los cambios regulatorios se anuncian con tiempo, lo que permite planear inversiones a diez años. La contraparte: permisos y reformas avanzan despacio.' }
      ],
      fuente: 'Bundestag; Bundesregierung; Banco Mundial, Worldwide Governance Indicators'
    },
    {
      id: 'economico', num: '4.2', titulo: 'Sistema económico y teorías del comercio',
      resumen: 'Economía social de mercado: libre competencia con fuerte red social y sindicatos que deciden junto a la empresa.',
      datos: [
        { k: 'Modelo', v: 'Soziale Marktwirtschaft (economía social de mercado)' },
        { k: 'Moneda', v: 'Euro; política monetaria del BCE (Fráncfort)' },
        { k: 'Rasgo único', v: 'Mitbestimmung: trabajadores en el consejo de supervisión' },
        { k: 'Base industrial', v: 'Cerca del 26 % del PIB, muy por encima del promedio UE' }
      ],
      teorias: [
        { nombre: 'Ventaja comparativa', autor: 'Ricardo', texto: 'Alemania se especializa donde es relativamente más productiva: bienes de capital, autos y química. Importa energía, materias primas y electrónica de consumo.' },
        { nombre: 'Heckscher-Ohlin', autor: 'Dotación de factores', texto: 'Abunda en capital y mano de obra calificada, escasea en energía y recursos. Exporta bienes intensivos en tecnología e importa lo que su suelo no da.' },
        { nombre: 'Nueva teoría del comercio', autor: 'Krugman', texto: 'Comercio intraindustrial: vende autos a Francia y le compra autos. Las economías de escala y la diferenciación de marca explican ese intercambio.' },
        { nombre: 'Diamante de Porter', autor: 'Ventaja competitiva', texto: 'Formación dual de técnicos, clientes industriales exigentes, clústeres (Stuttgart, Ruhr, Silicon Saxony) y rivalidad entre miles de Mittelstand.' },
        { nombre: 'Neomercantilismo', autor: 'La crítica', texto: 'El superávit comercial persistente le vale críticas de la UE, EE. UU. y el FMI: Alemania ahorra y exporta más de lo que consume e invierte.' }
      ],
      competitividad: 'Su competitividad no viene del precio sino de la calidad, la ingeniería y la confianza: vende lo que otros usan para producir.',
      fuente: 'BMWE; Destatis; FMI, Article IV 2025'
    },
    {
      id: 'legal', num: '4.3', titulo: 'Sistema legal y marco normativo',
      resumen: 'Derecho civil codificado, como México. Todo está escrito y casi todo está regulado.',
      datos: [
        { k: 'Tradición', v: 'Derecho civil romano-germánico, codificado' },
        { k: 'Códigos clave', v: 'BGB (civil), HGB (comercio), GmbHG y AktG (sociedades)' },
        { k: 'Jerarquía', v: 'El derecho de la UE prevalece sobre la ley nacional' },
        { k: 'Tribunales', v: 'Especializados: laborales, fiscales, administrativos' }
      ],
      leyes: [
        { nombre: 'Constituir una empresa', texto: 'GmbH con capital mínimo de 25,000 €. Escritura ante notario e inscripción en el Handelsregister.', tag: 'Sociedades' },
        { nombre: 'Control de inversión extranjera', texto: 'Inversionistas de fuera de la UE que compren 10 %, 20 % o 25 % de una empresa en sectores sensibles necesitan revisión del Ministerio de Economía (AWG / AWV).', tag: 'Inversión' },
        { nombre: 'Protección laboral', texto: 'Despedir requiere causa justificada en empresas de más de 10 empleados. El Betriebsrat (comité de empresa) opina en contrataciones y horarios.', tag: 'Laboral' },
        { nombre: 'Salario mínimo', texto: '13.90 € por hora en 2026 y 14.60 € en 2027.', tag: 'Laboral' },
        { nombre: 'Cadena de suministro', texto: 'La LkSG obliga a las grandes empresas a revisar derechos humanos y medio ambiente en sus proveedores. Un proveedor mexicano debe esperar auditorías y cláusulas de cumplimiento.', tag: 'Proveedores' },
        { nombre: 'Protección de datos', texto: 'El RGPD (DSGVO) es estricto. Compartir datos de clientes o empleados exige base legal y contratos específicos.', tag: 'Datos' },
        { nombre: 'Impuestos', texto: 'Carga corporativa cercana al 30 %. En 2025 se aprobó bajar el impuesto de sociedades del 15 % al 10 % de forma gradual entre 2028 y 2032.', tag: 'Fiscal' },
        { nombre: 'Tratados con México', texto: 'Convenio para evitar la doble tributación, acuerdo de protección de inversiones (APPRI) y Acuerdo Global UE–México.', tag: 'México' }
      ],
      fuente: 'GTAI, "Doing Business in Germany"; Bundesministerium der Justiz; Mindestlohnkommission 2025'
    }
  ],

  /* ---------- 5. Entorno de negocios e inversión (Etapa 2) ---------- */

  comercioIED: {
    cifras: [
      { valor: '1.56', unidad: 'billones €', etiqueta: 'Exportaciones 2024' },
      { valor: '1.32', unidad: 'billones €', etiqueta: 'Importaciones 2024' },
      { valor: '#3', unidad: 'en Europa', etiqueta: 'Destino de proyectos de IED' }
    ],
    exporta: ['Vehículos y autopartes', 'Maquinaria', 'Químicos', 'Farmacéuticos', 'Equipo eléctrico', 'Óptica y médicos'],
    importa: ['Electrónica y computadoras', 'Energía: gas y petróleo', 'Vehículos y autopartes', 'Químicos', 'Maquinaria', 'Metales'],
    atractivo: [
      { titulo: 'Puerta a 450 millones', texto: 'Producir en Alemania da acceso sin aranceles a todo el mercado único europeo.' },
      { titulo: 'Seguridad jurídica', texto: 'Contratos que se cumplen, tribunales confiables y propiedad intelectual protegida.' },
      { titulo: 'Talento técnico', texto: 'Formación dual y universidades técnicas que producen ingenieros y técnicos de alto nivel.' },
      { titulo: 'Infraestructura y clústeres', texto: 'Puertos, autopistas y redes de proveedores especializados en cada región.' },
      { titulo: 'Incentivos', texto: 'Apoyos federales y regionales vía GTAI y KfW, sobre todo para semiconductores, energía limpia y el este del país.' }
    ],
    lectura: 'Atrae inversión por calidad y estabilidad, no por costos bajos. Grandes proyectos recientes: Tesla en Brandeburgo y ESMC (TSMC) en Dresde.',
    fuente: 'Destatis 2024; EY European Attractiveness Survey 2025; GTAI'
  },

  retos: {
    tipos: [
      { id: 'economicos', nombre: 'Económicos', items: [
        { t: 'Economía estancada', d: 'Dos años de contracción (2023 y 2024) y crecimiento mínimo en 2025.' },
        { t: 'Energía cara', d: 'Tras perder el gas ruso, la electricidad industrial cuesta más que en EE. UU. o Asia.' },
        { t: 'Costos laborales altos', d: 'Salarios, cargas sociales y jornadas cortas encarecen operar.' },
        { t: 'Aranceles de EE. UU.', d: 'Golpean a la industria automotriz, principal cliente de muchos proveedores mexicanos.' }
      ] },
      { id: 'legales', nombre: 'Legales', items: [
        { t: 'Regulación densa', d: 'Normas DIN, marcado CE, RGPD y LkSG: el cumplimiento es requisito, no ventaja.' },
        { t: 'Protección laboral', d: 'Despedir o reestructurar es lento; el Betriebsrat debe ser consultado.' },
        { t: 'Contratos exhaustivos', d: 'Penalizaciones, garantías y responsabilidad por producto detalladas al máximo.' }
      ] },
      { id: 'burocraticos', nombre: 'Burocráticos', items: [
        { t: 'Digitalización lenta', d: 'Trámites en papel, correo postal y hasta fax en algunas oficinas públicas.' },
        { t: 'Permisos tardados', d: 'Licencias de construcción y ambientales pueden tomar meses o años.' },
        { t: 'Notarios y traducciones', d: 'Muchos documentos exigen notario alemán y traducción jurada.' },
        { t: 'Visas', d: 'La Blue Card UE facilita contratar extranjeros, pero el trámite consular demora.' }
      ] },
      { id: 'logisticos', nombre: 'Logísticos', items: [
        { t: 'Distancia y aduana', d: 'Del puerto de Veracruz a Hamburgo, 3 a 4 semanas por mar más trámite aduanero UE.' },
        { t: 'Infraestructura envejecida', d: 'Puentes y vías férreas que requieren renovación; la Deutsche Bahn arrastra retrasos.' },
        { t: 'Falta de personal', d: 'Escasez de técnicos y conductores (Fachkräftemangel) en logística e industria.' },
        { t: 'Calendario', d: 'Domingos y festivos regionales detienen operación; agosto y diciembre frenan decisiones.' }
      ] }
    ],
    fuente: 'GTAI; DIHK, encuesta empresarial 2025; Destatis; Deutsche Bahn, informe 2024'
  },

  /* ---------- 6. Perfil y habilidades del negociador (Etapa 2) ---------- */

  empresario: {
    linea: 'Ingeniero antes que vendedor. Piensa en la próxima generación, no en el próximo trimestre.',
    rasgos: [
      { titulo: 'Técnico', texto: 'Muchos directivos son ingenieros o doctores. Preguntarán por especificaciones antes que por precio.' },
      { titulo: 'Largo plazo', texto: 'En el Mittelstand la empresa es patrimonio familiar. Busca proveedores para diez años, no para un pedido.' },
      { titulo: 'Prudente', texto: 'Evita el riesgo, planea con detalle y prefiere financiarse con reinversión y su banco de siempre.' },
      { titulo: 'Directo y formal', texto: 'Dice lo que piensa, separa lo personal de lo profesional y respeta jerarquías y títulos.' },
      { titulo: 'Consensual', texto: 'Consulta con su equipo y su comité de empresa. Tarda en decidir, pero no da marcha atrás.' },
      { titulo: 'Cumplido', texto: 'Su palabra y sus plazos valen. Espera exactamente lo mismo de su contraparte.' }
    ],
    prioridades: [
      { nombre: 'Calidad y fiabilidad', peso: 95 },
      { nombre: 'Cumplir plazos', peso: 90 },
      { nombre: 'Cumplimiento normativo', peso: 85 },
      { nombre: 'Relación a largo plazo', peso: 75 },
      { nombre: 'Sostenibilidad', peso: 70 },
      { nombre: 'Precio', peso: 60 }
    ],
    prioridadesNota: 'Peso relativo estimado a partir de las fuentes; el precio importa, pero rara vez decide solo.',
    fuente: 'IfM Bonn; Hofstede Insights; GTAI; Erin Meyer'
  },

  habilidades: {
    grupos: [
      { id: 'competencias', nombre: 'Competencias', items: [
        { t: 'Dominio técnico', d: 'Conoce tu producto a nivel de ingeniería: normas, tolerancias, certificaciones.' },
        { t: 'Datos y evidencia', d: 'Cada afirmación con cifra, fuente o caso medible.' },
        { t: 'Conocimiento normativo', d: 'DIN, CE, RGPD, LkSG e Incoterms. Saber de reglas genera confianza.' },
        { t: 'Idioma', d: 'Inglés de negocios sólido y alemán básico para saludos y correos.' }
      ] },
      { id: 'actitudes', nombre: 'Actitudes', items: [
        { t: 'Paciencia', d: 'Aceptar procesos de decisión largos sin presionar el cierre.' },
        { t: 'Franqueza', d: 'Decir "no" o "no sé" con claridad en lugar de prometer.' },
        { t: 'Humildad ante la crítica', d: 'Tomar las objeciones como interés, no como ataque.' },
        { t: 'Consistencia', d: 'Mismo mensaje, mismo precio y misma persona de principio a fin.' }
      ] },
      { id: 'practicas', nombre: 'Habilidades prácticas', items: [
        { t: 'Propuestas estructuradas', d: 'Contexto, método, datos y conclusión, en ese orden y por escrito.' },
        { t: 'Escucha activa', d: 'Tomar nota de cada objeción técnica y responderla punto por punto.' },
        { t: 'Gestión del tiempo', d: 'Puntualidad, agenda previa y seguimiento en las fechas prometidas.' },
        { t: 'Documentar acuerdos', d: 'Enviar el Protokoll en 24 horas con responsables y fechas.' }
      ] }
    ],
    fuente: 'Síntesis a partir de Erin Meyer, GTAI, CAMEXA y Hofstede Insights'
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
    { nombre: 'Simon, Hermann. Hidden Champions of the 21st Century. Springer, 2009.', url: 'https://link.springer.com/book/10.1007/978-0-387-98147-5' },
    { nombre: 'Deutscher Bundestag. Sistema político y Ley Fundamental.', url: 'https://www.bundestag.de/en' },
    { nombre: 'Banco Mundial. Worldwide Governance Indicators.', url: 'https://www.worldbank.org/en/publication/worldwide-governance-indicators' },
    { nombre: 'GTAI. Doing Business in Germany: formas societarias, impuestos y control de inversiones.', url: 'https://www.gtai.de/en/invest/business-location-germany' },
    { nombre: 'Mindestlohnkommission. Decisión sobre el salario mínimo 2026-2027.', url: 'https://www.mindestlohn-kommission.de/' },
    { nombre: 'EY. European Attractiveness Survey 2025.', url: 'https://www.ey.com/en_gl/foreign-direct-investment-surveys' },
    { nombre: 'DIHK. Encuesta empresarial y reporte de burocracia 2025.', url: 'https://www.dihk.de/' },
    { nombre: 'FMI. Germany: Article IV Consultation 2025.', url: 'https://www.imf.org/en/Countries/DEU' }
  ]
};
