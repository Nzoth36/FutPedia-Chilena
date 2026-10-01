export type ClubHistorico = {
  id: string;
  nombre: string;
  escudo: string | null;
  apodo: string;
  fundacion: number | null;
  ciudad: string;
  pais: string;
  estado: "Activo" | "Desaparecido" | "Por confirmar";
  historia: string;
  totalTitulosOficiales: number | null;

  palmares: {
    competencia: string;
    cantidad: number | null;
    temporadas: string[];
  }[];

  estadio: {
    nombre: string;
    ciudad: string;
    capacidad: number | null;
    imagen: string | null;
    descripcion: string;
  };

  rivalidades: {
    clubId: string;
    nombre: string;
    descripcion: string;
  }[];

  records: {
    tipo: string;
    descripcion: string;
    dato: string | null;
    temporada: string | null;
  }[];

  jugadoresHistoricos: {
    nombre: string;
    posicion: string;
    periodo: string;
    descripcion: string;
  }[];
};

export const CLUBES_HISTORICOS: ClubHistorico[] = [

// =====================================================
// 1. ALEMÁN (Club Deportivo Alemán / DSV Santiago)
// =====================================================
{
  id: "aleman",
  nombre: "Club Deportivo Alemán",
  escudo: null,
  apodo: "Teutones",
  fundacion: 1916,
  ciudad: "Santiago",
  pais: "Chile",
  estado: "Desaparecido",
  historia: "Fundado en marzo de 1916 por miembros de la colonia alemana en Santiago liderados por Julius Kilian. En julio de ese mismo año adoptó el nombre de Deutscher Sportverein Santiago. Compitió en la Asociación de Football de Santiago (AFS) y en 1933 castellanizó su nombre a Club Deportivo Alemán. En 1934 integró la Primera División de Chile, logrando dos victorias históricas frente a Morning Star y Carlos Walker. El 25 de febrero de 1935 se fusionó con el Club Deportivo Irarrázaval para dar origen al Club Deportivo Alianza.",
  totalTitulosOficiales: 0,
  palmares: [
    {
      competencia: "Segunda División de la Asociación de Football de Santiago (Subcampeón)",
      cantidad: null,
      temporadas: ["1931"],
    },
  ],
  estadio: {
    nombre: "Cancha del Deutscher Sportverein",
    ciudad: "Santiago (Providencia)",
    capacidad: null,
    imagen: null,
    descripcion: "Cancha ubicada en la avenida Los Leones en la comuna de Providencia, recinto propiedad de la colonia alemana donde el club ejercía su localía.",
  },
  rivalidades: [],
  records: [
    {
      tipo: "Participación",
      descripcion: "Cuarto equipo de colonia en competir en la Primera División de Chile.",
      dato: "4° equipo de colonia",
      temporada: "1934",
    },
    {
      tipo: "Estadística",
      descripcion: "Consiguió 2 victorias en la máxima categoría del fútbol profesional chileno (frente a Morning Star y Carlos Walker).",
      dato: "2 victorias",
      temporada: "1934",
    },
    {
      tipo: "Hito",
      descripcion: "Primer y único club representante de la colonia alemana en disputar la división de honor del fútbol chileno.",
      dato: "Único club alemán",
      temporada: null,
    },
  ],
  jugadoresHistoricos: [
    {
      nombre: "Julius Kilian",
      posicion: "Fundador / Dirigente",
      periodo: "1916",
      descripcion: "Líder del grupo de jóvenes alemanes que impulsaron la creación del club en marzo de 1916.",
    },
  ],
},
  // =====================================================
  // 2. ANTOFAGASTA
  // =====================================================
 {
  id: "antofagasta",
  nombre: "Deportes Antofagasta",
  escudo: null,
  apodo: "Los Pumas",
  fundacion: 1966,
  ciudad: "Antofagasta",
  pais: "Chile",
  estado: "Activo",

  historia:
    "El Club de Deportes Antofagasta fue fundado el 14 de mayo de 1966 bajo el nombre de Antofagasta Portuario, producto de la fusión de los clubes Unión Bellavista y Portuario Atacama. La institución representa a la ciudad de Antofagasta y es conocida popularmente como Los Pumas. En 1979 adoptó su denominación definitiva de Club de Deportes Antofagasta. A lo largo de su trayectoria ha participado en distintas temporadas de la Primera División y Primera B del fútbol chileno. Entre sus principales logros se encuentran los campeonatos de Segunda División de 1968 y Primera B de 2011. También ha representado al fútbol chileno en la Copa Sudamericana, participando en las ediciones de 2019, 2021 y 2022. Su rivalidad regional con Cobreloa constituye uno de los enfrentamientos tradicionales del fútbol del norte de Chile.",

  totalTitulosOficiales: 2,

  palmares: [
    {
      competencia: "Segunda División de Chile",
      cantidad: 1,
      temporadas: ["1968"],
    },
    {
      competencia: "Primera B de Chile",
      cantidad: 1,
      temporadas: ["2011"],
    },
  ],

  estadio: {
    nombre: "Estadio Regional Calvo y Bascuñán",
    ciudad: "Antofagasta",
    capacidad: null,
    imagen: null,
    descripcion:
      "Principal recinto deportivo de Antofagasta e histórico estadio del Club de Deportes Antofagasta. Fue inaugurado el 8 de octubre de 1964 y posteriormente remodelado y reinaugurado en marzo de 2013. Es conocido también como el Coloso de Avenida Angamos. Su nombre homenajea a Alberto Calvo Nieto y Miguel Bascuñán Pavez, dirigentes vinculados al desarrollo deportivo de la ciudad.",
  },

  rivalidades: [
    {
      clubId: "cobreloa",
      nombre: "Cobreloa",
      descripcion:
        "Rivalidad regional conocida como el Clásico del Norte Grande o Clásico de la Segunda Región. Enfrenta a dos instituciones representativas de la Región de Antofagasta: Deportes Antofagasta, de la ciudad costera de Antofagasta, y Cobreloa, de Calama. Su historia se remonta a los primeros años de Cobreloa en el fútbol profesional y registra enfrentamientos destacados en distintas décadas. En 1991, Deportes Antofagasta eliminó a Cobreloa de la Liguilla Pre-Libertadores tras imponerse por 3-1 en Calama, con tres goles de Mario Cruz.",
    },
  ],

  records: [
    {
      tipo: "Primer título nacional",
      descripcion:
        "Deportes Antofagasta consiguió su primer campeonato de Segunda División en 1968.",
      dato: "Campeón de Segunda División",
      temporada: "1968",
    },
    {
      tipo: "Campeonato de ascenso",
      descripcion:
        "El club obtuvo el campeonato de Primera B y consiguió el ascenso a la máxima categoría del fútbol chileno.",
      dato: "Campeón de Primera B",
      temporada: "2011",
    },
    {
      tipo: "Participaciones internacionales",
      descripcion:
        "Deportes Antofagasta representó al fútbol chileno en tres ediciones de la Copa Sudamericana.",
      dato: "3 participaciones",
      temporada: "2019, 2021 y 2022",
    },
    {
      tipo: "Hito histórico",
      descripcion:
        "En la Liguilla Pre-Libertadores de 1991, Deportes Antofagasta derrotó a Cobreloa por 3-1 en Calama, con tres anotaciones de Mario Cruz, y avanzó de ronda.",
      dato: "Victoria 3-1",
      temporada: "1991",
    },
  ],

  jugadoresHistoricos: [
    {
      nombre: "Mario Cruz",
      posicion: "Delantero",
      periodo: "1991",
      descripcion:
        "Protagonista de uno de los triunfos históricos de Deportes Antofagasta frente a Cobreloa. Marcó los tres goles en la victoria por 3-1 en Calama durante la Liguilla Pre-Libertadores de 1991.",
    },
    {
      nombre: "Sergio Salgado",
      posicion: "Delantero",
      periodo: "1991",
      descripcion:
        "Futbolista histórico del fútbol chileno que defendió a Deportes Antofagasta. Anotó el descuento del CDA en un encuentro frente a Cobreloa durante el campeonato de 1991.",
    },
    {
      nombre: "Javier Elizondo",
      posicion: "Delantero",
      periodo: "2013",
      descripcion:
        "Delantero argentino recordado por su etapa en Deportes Antofagasta. Registró 42 goles en 70 partidos según antecedentes publicados por la prensa local y fue goleador del torneo chileno de 2013.",
    },
  ],
},

 
{
  id: "audax-italiano",
  nombre: "Audax Italiano",
  escudo: null,
  apodo: "Los Itálicos",
  fundacion: 1910,
  ciudad: "La Florida, Santiago",
  pais: "Chile",
  estado: "Activo",

  historia:
    "Audax Italiano fue fundado el 30 de noviembre de 1910 por integrantes de la colonia italiana residente en Santiago, originalmente bajo el nombre de Audax Club Ciclista Italiano. Sus primeros años estuvieron vinculados al ciclismo, incorporando posteriormente otras disciplinas deportivas. En 1921 se consolidó su rama de fútbol, impulsada por los hermanos Domingo y Tito Fruttero, adoptando el nombre Audax Club Sportivo Italiano. El club fue uno de los fundadores del campeonato profesional de Primera División de Chile en 1933. Durante su trayectoria obtuvo cuatro campeonatos nacionales de Primera División, en 1936, 1946, 1948 y 1957. Su identidad está profundamente relacionada con la comunidad italiana de Chile y forma parte de los tradicionales clubes de colonias junto a Unión Española y Palestino. Actualmente disputa sus encuentros como local en el Estadio Bicentenario de La Florida.",

  totalTitulosOficiales: 4,

  palmares: [
    {
      competencia: "Primera División de Chile",
      cantidad: 4,
      temporadas: ["1936", "1946", "1948", "1957"],
    },
  ],

  estadio: {
    nombre: "Estadio Bicentenario de La Florida",
    ciudad: "La Florida, Santiago",
    capacidad: null,
    imagen: null,
    descripcion:
      "Recinto deportivo ubicado en la comuna de La Florida, Santiago. Audax Italiano comenzó a disputar sus partidos como local en el estadio municipal en 1987. El recinto fue reconstruido y modernizado para la Copa Mundial Femenina Sub-20 de 2008, siendo reinaugurado el 12 de noviembre de ese año. Cuenta con superficie de césped sintético y ha albergado encuentros nacionales e internacionales. Es conocido como la casa de Los Itálicos.",
  },

  rivalidades: [
    {
      clubId: "union-espanola",
      nombre: "Unión Española",
      descripcion:
        "Rivalidad histórica entre dos instituciones representativas de las colonias europeas establecidas en Chile. Audax Italiano representa la tradición de la colonia italiana, mientras que Unión Española está vinculada a la comunidad española. Sus enfrentamientos forman parte del tradicional Clásico de Colonias y tienen antecedentes desde las primeras décadas del fútbol chileno.",
    },
    {
      clubId: "palestino",
      nombre: "Palestino",
      descripcion:
        "Encuentro tradicional entre instituciones de Santiago vinculadas a comunidades de inmigrantes. Audax Italiano representa la herencia italiana y Palestino la identidad de la comunidad palestina en Chile. Ambos forman parte de los denominados clubes de colonias del fútbol chileno.",
    },
    {
      clubId: "colo-colo",
      nombre: "Colo-Colo",
      descripcion:
        "Audax Italiano y Colo-Colo protagonizaron históricamente el denominado Clásico Criollo, nombre asociado a la identidad nacional de ambas instituciones en los primeros años del fútbol chileno. Sus enfrentamientos forman parte de la historia del campeonato nacional.",
    },
  ],

  records: [
    {
      tipo: "Primer campeonato nacional",
      descripcion:
        "Audax Italiano consiguió su primer título de Primera División después de una destacada campaña en el campeonato de 1936.",
      dato: "Campeón de Primera División",
      temporada: "1936",
    },
    {
      tipo: "Campeonatos nacionales",
      descripcion:
        "La institución ha obtenido cuatro campeonatos de Primera División del fútbol chileno.",
      dato: "4 títulos",
      temporada: "1936, 1946, 1948 y 1957",
    },
    {
      tipo: "Fundación institucional",
      descripcion:
        "El club nació como Audax Club Ciclista Italiano, vinculado inicialmente a la práctica del ciclismo.",
      dato: "30 de noviembre de 1910",
      temporada: "1910",
    },
    {
      tipo: "Participación internacional",
      descripcion:
        "Audax Italiano debutó en la Copa Libertadores durante la edición de 2007, luego de una destacada campaña en el fútbol chileno.",
      dato: "Primera participación en Copa Libertadores",
      temporada: "2007",
    },
    {
      tipo: "Campaña destacada",
      descripcion:
        "En el Torneo de Apertura 2007, el equipo dirigido por Raúl Toro protagonizó una campaña ofensiva destacada, con Carlos Villanueva como una de sus principales figuras.",
      dato: "62 goles anotados en el torneo",
      temporada: "2007",
    },
  ],

  jugadoresHistoricos: [
    {
      nombre: "Carlos Tello",
      posicion: "Volante de creación",
      periodo: "1950-1957",
      descripcion:
        "Campeón con Audax Italiano en 1957 y reconocido como máximo goleador histórico de la institución en sus registros oficiales. Anotó 101 goles según la ficha histórica del club. Fue goleador del campeonato nacional de 1951 y seleccionado chileno.",
    },
    {
      nombre: "Hernán Bolaños",
      posicion: "Delantero",
      periodo: "1933-1940",
      descripcion:
        "Delantero costarricense que defendió a Audax Italiano durante la década de 1930. Fue una de las grandes figuras del equipo campeón de 1936 y goleador de los campeonatos de 1936 y 1937. Es recordado como uno de los máximos artilleros históricos del club.",
    },
    {
      nombre: "Juan Alcántara",
      posicion: "Delantero",
      periodo: "1939-1945",
      descripcion:
        "Histórico atacante de Audax Italiano, campeón en 1941 y reconocido por su capacidad goleadora. Fue máximo anotador del campeonato nacional de 1944 con 19 goles y registró 84 tantos en 123 partidos con el club, según sus antecedentes históricos.",
    },
    {
      nombre: "Roberto Cabrera",
      posicion: "Volante",
      periodo: "Décadas de 1930 y 1940",
      descripcion:
        "Tres veces campeón con Audax Italiano, en 1941, 1946 y 1948. Disputó 291 partidos con la institución y fue integrante del equipo ideal de 1943. También representó a la selección chilena.",
    },
    {
      nombre: "Daniel Chirinos",
      posicion: "Arquero",
      periodo: "1943-1959",
      descripcion:
        "Arquero histórico de Audax Italiano, tricampeón con la institución en 1936, 1946 y 1957 según los registros históricos del club. Es reconocido por su extensa trayectoria y por figurar entre los futbolistas con más partidos disputados en la historia audina.",
    },
    {
      nombre: "Carlos Reinoso",
      posicion: "Volante",
      periodo: "1964-1969",
      descripcion:
        "Futbolista formado en Audax Italiano y destacado por su técnica y capacidad ofensiva. Fue goleador del Torneo Metropolitano de 1968 y posteriormente desarrolló una extensa trayectoria en el fútbol mexicano. Representó a Chile en el Mundial de 1974.",
    },
    {
      nombre: "Carlos Villanueva",
      posicion: "Volante ofensivo",
      periodo: "2004-2008",
      descripcion:
        "Una de las principales figuras de Audax Italiano durante la década de 2000. Destacó especialmente en la campaña de 2007, cuando el equipo tuvo una de sus temporadas ofensivas más recordadas y consiguió participar en la Copa Libertadores.",
    },
    {
      nombre: "Boris Rieloff",
      posicion: "Lateral derecho",
      periodo: "2000-2010",
      descripcion:
        "Jugador formado en Audax Italiano y uno de los futbolistas con mayor cantidad de partidos disputados en la historia del club. Fue reconocido por su rendimiento como lateral derecho y llegó a integrar la selección chilena.",
    },
  ],
},

  // =====================================================
  // 4. AVIACIÓN
  // =====================================================
 
{
  id: "aviacion",
  nombre: "Deportes Aviación",
  escudo: null,
  apodo: "Los Aviadores",
  fundacion: 1957,
  ciudad: "Santiago",
  pais: "Chile",
  estado: "Desaparecido",

  historia:
    "El Club de Deportes Aviación fue una institución futbolística chilena fundada el 12 de diciembre de 1957 y administrada por la Fuerza Aérea de Chile (FACH). Con sede en Santiago, comenzó su trayectoria en el Campeonato Regional de la Zona Central, competición en la que participó durante varios años. En 1971 obtuvo el título de dicho campeonato, resultado que le permitió solicitar su incorporación al fútbol profesional. Debutó en la Segunda División de Chile en 1972 y posteriormente consiguió el ascenso a Primera División, categoría en la que compitió durante siete temporadas consecutivas, entre 1974 y 1980. Su mejor ubicación en la máxima categoría fue el octavo lugar, alcanzado en 1977 y 1978. Tras regresar a Segunda División en 1981, la institución desapareció definitivamente el 25 de enero de 1982. Su historia permanece vinculada al desarrollo del fútbol institucional de la Fuerza Aérea y a los clubes históricos del fútbol chileno.",

  totalTitulosOficiales: null,

  palmares: [
    {
      competencia: "Campeonato Regional de la Zona Central",
      cantidad: 1,
      temporadas: ["1971"],
    },
  ],

  estadio: {
    nombre: "Estadio Capitán Reinaldo Martín Müller",
    ciudad: "El Bosque, Santiago",
    capacidad: 5000,
    imagen: null,
    descripcion:
      "Recinto deportivo ubicado en la comuna de El Bosque, Santiago, conocido históricamente como Estadio El Bosque. Fue utilizado por Deportes Aviación durante su existencia y perteneció a la Fuerza Aérea de Chile. El estadio fue inaugurado en 1957 y posteriormente reinaugurado en marzo de 1980. Cuenta con cancha de césped natural y pista atlética. Su capacidad registrada es de aproximadamente 5.000 espectadores.",
  },

  rivalidades: [],

  records: [
    {
      tipo: "Fundación institucional",
      descripcion:
        "Deportes Aviación fue fundado como una institución deportiva administrada por la Fuerza Aérea de Chile.",
      dato: "12 de diciembre de 1957",
      temporada: "1957",
    },
    {
      tipo: "Campeonato regional",
      descripcion:
        "Obtuvo el Campeonato Regional de la Zona Central, resultado que permitió gestionar su incorporación al fútbol profesional.",
      dato: "Campeón regional",
      temporada: "1971",
    },
    {
      tipo: "Debut profesional",
      descripcion:
        "Participó por primera vez en la Segunda División del fútbol chileno, finalizando en la octava posición.",
      dato: "8.º lugar",
      temporada: "1972",
    },
    {
      tipo: "Participaciones en Primera División",
      descripcion:
        "Disputó siete temporadas en la máxima categoría del fútbol chileno.",
      dato: "7 temporadas",
      temporada: "1974-1980",
    },
    {
      tipo: "Mejor ubicación en Primera División",
      descripcion:
        "Consiguió su mejor posición histórica en la máxima categoría al finalizar en el octavo lugar.",
      dato: "8.º lugar",
      temporada: "1977 y 1978",
    },
    {
      tipo: "Mayor goleada a favor",
      descripcion:
        "Consiguió una victoria por cuatro goles de diferencia frente a Coquimbo Unido.",
      dato: "Deportes Aviación 6-2 Coquimbo Unido",
      temporada: "1979",
    },
    {
      tipo: "Mayor goleada en contra",
      descripcion:
        "Registró derrotas por seis goles de diferencia frente a Huachipato y Universidad de Chile.",
      dato: "0-6",
      temporada: "1975 y 1976",
    },
    {
      tipo: "Máximo goleador histórico",
      descripcion:
        "Ricardo Fabbiani figura como el máximo goleador histórico de Deportes Aviación en los registros estadísticos consultados.",
      dato: "61 goles",
      temporada: null,
    },
    {
      tipo: "Desaparición institucional",
      descripcion:
        "La institución dejó de existir oficialmente después de su última participación en el fútbol profesional.",
      dato: "25 de enero de 1982",
      temporada: "1982",
    },
  ],

  jugadoresHistoricos: [
    {
      nombre: "Ricardo Fabbiani",
      posicion: "Delantero",
      periodo: "",
      descripcion:
        "Figura histórica de Deportes Aviación y máximo goleador registrado de la institución, con 61 anotaciones. Su registro lo identifica como uno de los principales referentes estadísticos del club.",
    },
  ],
},

  // =====================================================
  // 5. BADMINTON
  // =====================================================

{
  id: "badminton",
  nombre: "Club de Deportes Badminton",
  escudo: null,
  apodo: "El Rodillo",
  fundacion: 1912,
  ciudad: "Santiago / Curicó",
  pais: "Chile",
  estado: "Desaparecido",

  historia:
    "El Club de Deportes Badminton fue fundado el 10 de julio de 1912 en el barrio de Recoleta, Santiago, bajo el nombre de Santiago Badminton Football Club. Fue una institución histórica del fútbol chileno y uno de los ocho clubes fundadores de la Primera División profesional en 1933. Durante sus primeras décadas participó en distintas asociaciones del fútbol amateur de Santiago, hasta incorporarse al profesionalismo. Disputó ininterrumpidamente la Primera División entre 1933 y 1949, alcanzando el tercer lugar en su temporada inaugural. En 1950, tras finalizar último en el campeonato de 1949, se fusionó con Ferroviarios para formar Ferrobádminton. La fusión se disolvió en 1969 y Badminton se trasladó a Curicó, donde retomó su actividad profesional en Segunda División durante 1970 y 1971. Tras no conseguir mantenerse en el profesionalismo, la institución fue disuelta en 1973. Su franquicia y derechos deportivos fueron utilizados para dar origen a Curicó Unido, fundado ese mismo año.",

  totalTitulosOficiales: null,

  palmares: [],

  estadio: {
    nombre: "Estadio La Granja",
    ciudad: "Curicó",
    capacidad: null,
    imagen: null,
    descripcion:
      "Durante su etapa final en el fútbol profesional, luego de trasladarse desde Santiago a Curicó, Badminton disputó sus encuentros como local en el Estadio La Granja. En sus primeros años utilizó distintas canchas de Santiago, entre ellas la cancha del Seminario y terrenos ubicados en el sector de Los Dominicos. No contó con un estadio propio permanente durante toda su historia.",
  },

  rivalidades: [],

  records: [
    {
      tipo: "Fundación institucional",
      descripcion:
        "Fue fundado en el barrio de Recoleta, Santiago, bajo el nombre Santiago Badminton Football Club.",
      dato: "10 de julio",
      temporada: "1912",
    },
    {
      tipo: "Club fundador del profesionalismo",
      descripcion:
        "Integró el grupo de ocho instituciones que disputaron el primer campeonato profesional de Primera División de Chile.",
      dato: "Uno de los 8 clubes fundadores",
      temporada: "1933",
    },
    {
      tipo: "Mejor posición en Primera División",
      descripcion:
        "Consiguió el tercer lugar en el primer campeonato profesional del fútbol chileno.",
      dato: "3.º lugar",
      temporada: "1933",
    },
    {
      tipo: "Participaciones en Primera División",
      descripcion:
        "Disputó 17 temporadas consecutivas en la máxima categoría del fútbol chileno.",
      dato: "17 temporadas",
      temporada: "1933-1949",
    },
    {
      tipo: "Mayor goleada en Primera División",
      descripcion:
        "Consiguió una victoria por ocho goles de diferencia frente a Santiago Morning.",
      dato: "Badminton 10-2 Santiago Morning",
      temporada: "1938",
    },
    {
      tipo: "Mayor goleada en Segunda División",
      descripcion:
        "Registró una victoria por trece goles a cero frente a Lister Rossel.",
      dato: "Badminton 13-0 Lister Rossel",
      temporada: "1971",
    },
    {
      tipo: "Fusión institucional",
      descripcion:
        "Se fusionó con Ferroviarios para formar el Club Deportivo Ferrobádminton, luego de finalizar último en Primera División.",
      dato: "Nacimiento de Ferrobádminton",
      temporada: "1950",
    },
    {
      tipo: "Traslado a Curicó",
      descripcion:
        "Tras la disolución de la fusión con Ferroviarios, la institución se trasladó a Curicó y retomó su participación en el fútbol profesional.",
      dato: "Bádminton de Curicó",
      temporada: "1970",
    },
    {
      tipo: "Desaparición institucional",
      descripcion:
        "La institución fue disuelta y sus derechos deportivos fueron utilizados para fundar una nueva entidad que representara a Curicó.",
      dato: "Origen de Curicó Unido",
      temporada: "1973",
    },
  ],

  jugadoresHistoricos: [
    {
      nombre: "Leoncio Veloso",
      posicion: "Por confirmar",
      periodo: "Década de 1920",
      descripcion:
        "Futbolista de Badminton que representó a la selección chilena en el Campeonato Sudamericano de 1926. Fue uno de los primeros jugadores de la institución en participar en competencias internacionales con la selección nacional.",
    },
    {
      nombre: "Gustavo Pizarro",
      posicion: "Por confirmar",
      periodo: "Década de 1930",
      descripcion:
        "Futbolista vinculado a Badminton que fue convocado a la selección chilena en 1939. También desarrolló posteriormente una trayectoria como entrenador en el fútbol nacional.",
    },
    {
      nombre: "Juan Muñoz",
      posicion: "Por confirmar",
      periodo: "Década de 1940",
      descripcion:
        "Jugador de Badminton que integró la selección chilena en 1941, formando parte de los futbolistas de la institución que alcanzaron representación internacional.",
    },
    {
      nombre: "Carlos Atlagic",
      posicion: "Por confirmar",
      periodo: "Década de 1940",
      descripcion:
        "Futbolista de Badminton que representó a Chile en el Campeonato Sudamericano de 1945. Fue uno de los jugadores de la institución que alcanzaron participación internacional con la selección nacional.",
    },
  ],
},
  // =====================================================
  // 6. BARNECHEA
  // =====================================================
  
{
  id: "barnechea",
  nombre: "Athletic Club Barnechea",
  escudo: null,
  apodo: "Los Huaicocheros",
  fundacion: 1929,
  ciudad: "Lo Barnechea, Santiago",
  pais: "Chile",
  estado: "Activo",

  historia:
    "Athletic Club Barnechea fue fundado el 23 de diciembre de 1929 en la localidad de Lo Barnechea, originalmente bajo el nombre de Deportivo Santa Rosa de Barnechea. En 1943 adoptó la denominación Deportivo Lo Barnechea y al año siguiente participó en la fundación de la Asociación Deportiva de Fútbol de Las Condes. Durante varias décadas compitió en torneos amateur de la zona oriente de Santiago. En 1983 ingresó a la recién creada Cuarta División y en 1988 consiguió el campeonato de dicha categoría, ascendiendo a Tercera División. Posteriormente disputó dos subcampeonatos de Tercera División, en 1997 y 1998. En 2008 se inició una nueva etapa administrativa y deportiva que permitió impulsar su desarrollo hacia el profesionalismo. En 2011 se coronó campeón de Tercera División A bajo la dirección técnica de Mario Salas, logrando por primera vez el ascenso a Primera B. En 2014 consiguió el ascenso a Primera División tras superar a San Luis de Quillota en una definición por penales. Debutó en la máxima categoría durante 2015, aunque descendió al finalizar esa temporada. En 2017 obtuvo el campeonato de Segunda División Profesional y regresó a Primera B. Su historia representa el desarrollo de una institución nacida en el fútbol amateur de Santiago que logró alcanzar la máxima categoría del fútbol chileno.",

  totalTitulosOficiales: 1,

  palmares: [
    {
      competencia: "Segunda División Profesional de Chile",
      cantidad: 1,
      temporadas: ["2016-2017"],
    },
    {
      competencia: "Tercera División A de Chile",
      cantidad: 1,
      temporadas: ["2011"],
    },
    {
      competencia: "Tercera División de Chile",
      cantidad: 1,
      temporadas: ["1988"],
    },
  ],

  estadio: {
    nombre: "Estadio Municipal de Lo Barnechea",
    ciudad: "Lo Barnechea, Santiago",
    capacidad: 2500,
    imagen: null,
    descripcion:
      "Recinto deportivo ubicado en el sector oriente de Santiago, dentro de la comuna de Lo Barnechea. Es el estadio asociado históricamente al club y actualmente alberga sus encuentros como local. El recinto fue inaugurado en octubre de 2015 y recibió su primer partido profesional en enero de 2016, cuando Barnechea enfrentó a Iberia por el campeonato de Primera B. Cuenta con una capacidad aproximada de 2.500 espectadores y forma parte del Parque de la Chilenidad.",
  },

  rivalidades: [],

  records: [
    {
      tipo: "Fundación institucional",
      descripcion:
        "La institución nació como Deportivo Santa Rosa de Barnechea, fundada por jóvenes de la localidad de Lo Barnechea.",
      dato: "23 de diciembre",
      temporada: "1929",
    },
    {
      tipo: "Primer campeonato nacional amateur",
      descripcion:
        "Obtuvo el campeonato de Cuarta División y consiguió el ascenso a Tercera División.",
      dato: "Campeón de Cuarta División",
      temporada: "1988",
    },
    {
      tipo: "Campeonato de Tercera División",
      descripcion:
        "Se coronó campeón de Tercera División A y obtuvo el ascenso al fútbol profesional por primera vez en su historia.",
      dato: "Campeón y ascenso a Primera B",
      temporada: "2011",
    },
    {
      tipo: "Primer ascenso al profesionalismo",
      descripcion:
        "El campeonato de Tercera División A permitió que Barnechea participara por primera vez en Primera B.",
      dato: "Primer ascenso profesional",
      temporada: "2011-2012",
    },
    {
      tipo: "Ascenso a Primera División",
      descripcion:
        "Consiguió el ascenso a la máxima categoría tras superar a San Luis de Quillota en una definición por lanzamientos penales.",
      dato: "Ascenso a Primera División",
      temporada: "2014",
    },
    {
      tipo: "Primera participación en Primera División",
      descripcion:
        "Disputó por primera vez el campeonato de la máxima categoría del fútbol chileno.",
      dato: "Primera participación",
      temporada: "2015",
    },
    {
      tipo: "Campeonato profesional",
      descripcion:
        "Se coronó campeón de Segunda División Profesional y consiguió el retorno a Primera B.",
      dato: "Campeón de Segunda División Profesional",
      temporada: "2016-2017",
    },
    {
      tipo: "Subcampeonatos de Tercera División",
      descripcion:
        "Consiguió dos segundos lugares consecutivos en la categoría, antes de alcanzar el profesionalismo.",
      dato: "Subcampeón",
      temporada: "1997 y 1998",
    },
  ],

  jugadoresHistoricos: [
    {
      nombre: "Mikel Arguinarena",
      posicion: "Mediocampista",
      periodo: "2012-2014 y etapas posteriores",
      descripcion:
        "Futbolista chileno que desarrolló una parte importante de su trayectoria en Barnechea. Integró el equipo durante su etapa de consolidación en Primera B y fue reconocido posteriormente como una de las figuras representativas de la institución.",
    },
    {
      nombre: "Juan Ignacio Duma",
      posicion: "Delantero",
      periodo: "2012-2014 y etapas posteriores",
      descripcion:
        "Delantero argentino nacionalizado chileno que defendió a Barnechea durante distintas etapas de su carrera. Formó parte de los planteles que participaron en el proceso de crecimiento deportivo del club y posteriormente volvió a vestir su camiseta.",
    },
    {
      nombre: "Jorge Manduca",
      posicion: "Arquero",
      periodo: "2012-2014",
      descripcion:
        "Guardameta argentino que defendió a Barnechea durante su etapa en Primera B y participó en el plantel que consiguió el histórico ascenso a Primera División en 2014.",
    },
    {
      nombre: "Patricio Rubio",
      posicion: "Delantero",
      periodo: "2011",
      descripcion:
        "Integrante del equipo campeón de Tercera División A en 2011. Anotó uno de los goles en la victoria frente a Municipal Mejillones que permitió a Barnechea asegurar el campeonato y el ascenso al fútbol profesional.",
    },
  ],
},

// =====================================================
// 7. CARLOS WALKER
// =====================================================
{
  id: "carlos-walker",
  nombre: "Carlos Walker Martínez",
  escudo: null,
  apodo: "",
  fundacion: 1907,
  ciudad: "Santiago",
  pais: "Chile",
  estado: "Desaparecido",
  historia:
    "El Carlos Walker Martínez Football Club fue fundado en Santiago el 14 de abril de 1907. Tras participar durante décadas en el fútbol de asociaciones de la capital, clasificó al profesionalismo y disputó la Primera División de Chile en 1934, su única temporada en la máxima categoría. Finalizó en el octavo lugar y descendió a la Serie B Profesional. En 1935 terminó como subcampeón de dicha competencia. Posteriormente continuó participando en el fútbol amateur de Santiago hasta su desaparición en 1983.",
  totalTitulosOficiales: 0,
  palmares: [],
  estadio: {
    nombre: "",
    ciudad: "Santiago",
    capacidad: null,
    imagen: null,
    descripcion:
      "No se encontró información confirmada sobre un estadio propio del club.",
  },
  rivalidades: [],
  records: [
    {
      tipo: "Participación en Primera División",
      descripcion:
        "Disputó una temporada en la Primera División profesional y finalizó en el octavo lugar.",
      dato: "8.º lugar",
      temporada: "1934",
    },
    {
      tipo: "Debut en Primera División",
      descripcion:
        "Debutó el 17 de junio de 1934 con una victoria por 2-1 frente a Ferroviarios en el Estadio de Carabineros.",
      dato: "Victoria 2-1",
      temporada: "1934",
    },
    {
      tipo: "Subcampeonato de Serie B Profesional",
      descripcion:
        "Finalizó como subcampeón de la Serie B Profesional.",
      dato: "Subcampeón",
      temporada: "1935",
    },
  ],
  jugadoresHistoricos: [],
},
 // =====================================================
// 8. COBRELOA
// =====================================================
{
  id: "cobreloa",
  nombre: "Cobreloa",
  escudo: null,
  apodo: "Los Zorros del Desierto",
  fundacion: 1977,
  ciudad: "Calama",
  pais: "Chile",
  estado: "Activo",
  historia:
    "Cobreloa fue fundado el 7 de enero de 1977 en Calama, Región de Antofagasta, como resultado de un proceso impulsado por dirigentes, trabajadores y la comunidad local para incorporar al fútbol profesional una institución representativa de la zona. Ingresó a Segunda División ese mismo año y debutó en Primera División en 1978. Durante la década de 1980 se convirtió en protagonista del fútbol chileno, alcanzando las finales de Copa Libertadores de 1981 y 1982. Obtuvo ocho campeonatos de Primera División, además de la Copa Chile de 1986. Tras descender en 2015, consiguió el campeonato de Primera B en 2023 y regresó a la máxima categoría en 2024.",
  totalTitulosOficiales: 10,
  palmares: [
    {
      competencia: "Primera División de Chile",
      cantidad: 8,
      temporadas: [
        "1980",
        "1982",
        "1985",
        "1988",
        "1992",
        "2003-A",
        "2003-C",
        "2004-C",
      ],
    },
    {
      competencia: "Copa Chile",
      cantidad: 1,
      temporadas: ["1986"],
    },
    {
      competencia: "Primera B de Chile",
      cantidad: 1,
      temporadas: ["2023"],
    },
  ],
  estadio: {
    nombre: "Estadio Zorros del Desierto",
    ciudad: "Calama",
    capacidad: 12102,
    imagen: null,
    descripcion:
      "Estadio ubicado en Calama y utilizado por Cobreloa como local. Fue inaugurado el 18 de abril de 2015 y cuenta con una capacidad de 12.102 espectadores. Reemplazó al antiguo Estadio Municipal de Calama. Su nombre fue elegido mediante una consulta pública y hace referencia al apodo histórico de la institución y a la fauna característica de la zona.",
  },
  rivalidades: [
  {
    clubId: "antofagasta",
    nombre: "Deportes Antofagasta",
    descripcion:
      "Rivalidad regional entre Cobreloa, representante de Calama, y Deportes Antofagasta, representante de la capital regional. Sus enfrentamientos son conocidos como el Clásico de la Región de Antofagasta o Clásico del Norte Grande. La rivalidad se consolidó desde el ingreso de Cobreloa al fútbol profesional en 1977, cuando ambos clubes disputaban protagonismo en la región.",
  },
  {
    clubId: "cobresal",
    nombre: "Cobresal",
    descripcion:
      "Rivalidad entre dos clubes vinculados a ciudades mineras del norte de Chile: Cobreloa, de Calama, y Cobresal, de El Salvador. Sus enfrentamientos son conocidos como el Clásico del Cobre y tienen como trasfondo la identidad minera de ambas instituciones.",
  },
  {
    clubId: "colo-colo",
    nombre: "Colo-Colo",
    descripcion:
      "Rivalidad deportiva de alcance nacional que se fortaleció durante las décadas de 1980 y 1990, cuando Cobreloa y Colo-Colo disputaron reiteradamente campeonatos y definiciones del fútbol chileno. Entre sus antecedentes destacan las finales del campeonato nacional y los títulos de Cobreloa obtenidos frente a Colo-Colo en el Torneo de Clausura 2003.",
  },
],
  records: [
    {
      tipo: "Finalista de Copa Libertadores",
      descripcion:
        "Cobreloa alcanzó dos finales consecutivas de la Copa Libertadores.",
      dato: "Subcampeón",
      temporada: "1981 y 1982",
    },
    {
      tipo: "Campeonatos de Primera División",
      descripcion:
        "Conquistó ocho campeonatos de la máxima categoría del fútbol chileno.",
      dato: "8 títulos",
      temporada: "1980-2004",
    },
    {
      tipo: "Retorno a Primera División",
      descripcion:
        "Obtuvo el campeonato de Primera B y consiguió el ascenso a la máxima categoría.",
      dato: "Campeón",
      temporada: "2023",
    },
    {
      tipo: "Máximo goleador histórico",
      descripcion:
        "Juan Covarrubias es reconocido como el máximo goleador histórico de Cobreloa.",
      dato: "151 goles",
      temporada: null,
    },
  ],
  jugadoresHistoricos: [
    {
      nombre: "Héctor Puebla",
      posicion: "Mediocampista / Defensa",
      periodo: "1980-1996",
      descripcion:
        "Uno de los principales referentes históricos del club. Ganó cinco campeonatos de Primera División y la Copa Chile de 1986. También fue parte de los planteles que disputaron las finales de Copa Libertadores de 1981 y 1982.",
    },
    {
      nombre: "Víctor Merello",
      posicion: "Mediocampista",
      periodo: "1978-1984 y 1986-1987",
      descripcion:
        "Referente del equipo durante sus primeras grandes campañas nacionales e internacionales. Fue una de las figuras destacadas de la etapa de consolidación de Cobreloa.",
    },
    {
      nombre: "Juan Covarrubias",
      posicion: "Delantero",
      periodo: "Décadas de 1980 y 1990",
      descripcion:
        "Máximo goleador histórico de Cobreloa, con 151 goles en nueve temporadas. Conquistó títulos de Primera División y la Copa Chile de 1986.",
    },
    {
      nombre: "Fernando Cornejo",
      posicion: "Mediocampista",
      periodo: "Décadas de 1990 y 2000",
      descripcion:
        "Capitán y referente de la institución. Su legado es reconocido en el Estadio Zorros del Desierto, donde una de las tribunas lleva su nombre.",
    },
  ],
},

 // =====================================================
// 9. COBRESAL
// =====================================================
{
  id: "cobresal",
  nombre: "Cobresal",
  escudo: null,
  apodo: "Los Mineros",
  fundacion: 1979,
  ciudad: "El Salvador",
  pais: "Chile",
  estado: "Activo",
  historia:
    "Club de Deportes Cobresal fue fundado el 5 de mayo de 1979 en el campamento minero de El Salvador, Región de Atacama. Debutó en el fútbol profesional en Segunda División en 1980 y obtuvo el campeonato de esa categoría en 1983, consiguiendo el ascenso a Primera División. En 1984 disputó su primera temporada en la máxima categoría y terminó como subcampeón. En 1987 ganó la Copa Chile, torneo que le permitió consolidar su presencia en el fútbol nacional. En 1998 obtuvo nuevamente el campeonato de Primera B y consiguió el ascenso. Su mayor logro llegó en el Clausura 2015, cuando conquistó su primer título de Primera División. Cobresal representa a la localidad minera de El Salvador y disputa sus partidos como local en el Estadio El Cobre.",
  totalTitulosOficiales: 4,
  palmares: [
    {
      competencia: "Primera División de Chile",
      cantidad: 1,
      temporadas: ["2015-C"],
    },
    {
      competencia: "Copa Chile",
      cantidad: 1,
      temporadas: ["1987"],
    },
    {
      competencia: "Primera B de Chile",
      cantidad: 2,
      temporadas: ["1983", "1998"],
    },
  ],
  estadio: {
    nombre: "Estadio El Cobre",
    ciudad: "El Salvador",
    capacidad: null,
    imagen: null,
    descripcion:
      "Estadio ubicado en el campamento minero de El Salvador, Región de Atacama, utilizado por Cobresal como local. Su emplazamiento en altura es una característica distintiva del recinto y de los partidos del club. La capacidad se deja sin especificar para evitar incorporar una cifra no confirmada.",
  },
  rivalidades: [
    {
      clubId: "cobreloa",
      nombre: "Cobreloa",
      descripcion:
        "Principal rival tradicional de Cobresal. Ambos clubes representan localidades mineras del norte de Chile: Cobresal, de El Salvador, y Cobreloa, de Calama. Sus enfrentamientos son conocidos como el Clásico del Cobre. La rivalidad también se fortaleció por sus duelos deportivos en Primera División y por la competencia entre ambos durante distintas temporadas del fútbol profesional.",
    },
    {
      clubId: "deportes-copiapo",
      nombre: "Deportes Copiapó",
      descripcion:
        "Rivalidad regional entre los dos clubes profesionales de la Región de Atacama. Sus enfrentamientos son conocidos como el Clásico de Atacama y se desarrollaron especialmente a partir de sus encuentros en Primera B, extendiéndose posteriormente a Primera División.",
    },
  ],
  records: [
    {
      tipo: "Campeonato de Primera División",
      descripcion:
        "Consiguió el primer campeonato de Primera División de su historia al ganar el Torneo de Clausura.",
      dato: "Campeón",
      temporada: "2015-C",
    },
    {
      tipo: "Copa Chile",
      descripcion:
        "Obtuvo su primer título nacional destacado al ganar la Copa Chile, venciendo a Colo-Colo en la final.",
      dato: "Campeón",
      temporada: "1987",
    },
    {
      tipo: "Campeonatos de Primera B",
      descripcion:
        "Conquistó dos campeonatos de la segunda categoría profesional del fútbol chileno.",
      dato: "2 títulos",
      temporada: "1983 y 1998",
    },
    {
      tipo: "Subcampeonato de Primera División",
      descripcion:
        "Finalizó en el segundo lugar del campeonato nacional de Primera División.",
      dato: "Subcampeón",
      temporada: "1984",
    },
    {
      tipo: "Subcampeonato de Primera División",
      descripcion:
        "Volvió a terminar como subcampeón de la máxima categoría del fútbol chileno.",
      dato: "Subcampeón",
      temporada: "1988",
    },
    {
      tipo: "Subcampeonato de Primera División",
      descripcion:
        "Finalizó segundo en el campeonato nacional, detrás del equipo campeón.",
      dato: "Subcampeón",
      temporada: "2023",
    },
    {
      tipo: "Participación internacional",
      descripcion:
        "Disputó por primera vez la Copa Libertadores, integrando el grupo junto a Universidad Católica y los clubes colombianos América de Cali y Deportivo Cali.",
      dato: "Fase de grupos",
      temporada: "1986",
    },
  ],
  jugadoresHistoricos: [
    {
      nombre: "Iván Zamorano",
      posicion: "Delantero",
      periodo: "1985-1988",
      descripcion:
        "Inició su trayectoria profesional en Cobresal y fue parte del plantel que ganó la Copa Chile de 1987. Se destacó como goleador del equipo durante esa etapa antes de continuar su carrera en el extranjero.",
    },
    {
      nombre: "Sergio Salgado",
      posicion: "Delantero",
      periodo: "1980-1988 y 1993-1996",
      descripcion:
        "Uno de los máximos referentes ofensivos de la historia del club. Integró los planteles campeones de Primera B en 1983 y Copa Chile en 1987, y es reconocido como uno de los principales goleadores históricos de Cobresal.",
    },
    {
      nombre: "Rubén Martínez",
      posicion: "Delantero",
      periodo: "1984-1989 y 1998-2000",
      descripcion:
        "Delantero destacado de Cobresal durante las décadas de 1980 y 1990. Fue parte de la etapa de consolidación del club en Primera División y del plantel que obtuvo el campeonato de Primera B de 1998.",
    },
    {
      nombre: "Franklin Lobos",
      posicion: "Mediocampista",
      periodo: "1983-1985 y 1988-1989",
      descripcion:
        "Integró distintos planteles de Cobresal durante sus primeras décadas en el fútbol profesional y formó parte de la etapa de crecimiento deportivo de la institución.",
    },
  ],
},

// =====================================================
// 10. COLO-COLO
// =====================================================

{
  id: "colo-colo",
  nombre: "Colo-Colo",
  escudo: null,
  apodo: "El Cacique",
  fundacion: 1925,
  ciudad: "Santiago",
  pais: "Chile",
  estado: "Activo",

  historia:
    "El Club Social y Deportivo Colo-Colo fue fundado el 19 de abril de 1925 por un grupo de futbolistas encabezados por David Arellano, quienes se separaron de Magallanes para desarrollar un proyecto deportivo propio. Fue uno de los clubes participantes del campeonato profesional inaugural de 1933 y obtuvo su primer título de Primera División en 1937. A lo largo de su historia se ha consolidado como uno de los principales protagonistas del fútbol chileno. En 1991 alcanzó su mayor logro internacional al conquistar la Copa Libertadores, convirtiéndose en el primer club chileno en obtener ese torneo. En 1992 ganó la Recopa Sudamericana y la Copa Interamericana. Disputa sus partidos como local en el Estadio Monumental David Arellano.",

  totalTitulosOficiales: 55,

  palmares: [
    {
      competencia: "Primera División de Chile",
      cantidad: 34,
      temporadas: [
        "1937",
        "1939",
        "1941",
        "1944",
        "1947",
        "1953",
        "1956",
        "1960",
        "1963",
        "1970",
        "1972",
        "1979",
        "1981",
        "1983",
        "1986",
        "1989",
        "1990",
        "1991",
        "1993",
        "1996",
        "1997-C",
        "1998",
        "2002-C",
        "2006-A",
        "2006-C",
        "2007-A",
        "2007-C",
        "2008-C",
        "2009-C",
        "2014-C",
        "2015-A",
        "2017-T",
        "2022",
        "2024",
      ],
    },
    {
      competencia: "Copa Chile",
      cantidad: 14,
      temporadas: [
        "1958",
        "1974",
        "1981",
        "1982",
        "1985",
        "1988",
        "1989",
        "1990",
        "1994",
        "1996",
        "2016",
        "2019",
        "2021",
        "2023",
      ],
    },
    {
      competencia: "Supercopa de Chile",
      cantidad: 4,
      temporadas: ["2017", "2018", "2022", "2024"],
    },
    {
      competencia: "Copa Libertadores",
      cantidad: 1,
      temporadas: ["1991"],
    },
    {
      competencia: "Recopa Sudamericana",
      cantidad: 1,
      temporadas: ["1992"],
    },
    {
      competencia: "Copa Interamericana",
      cantidad: 1,
      temporadas: ["1992"],
    },
  ],

  estadio: {
    nombre: "Estadio Monumental David Arellano",
    ciudad: "Macul, Santiago",
    capacidad: null,
    imagen: null,
    descripcion:
      "Estadio ubicado en la comuna de Macul, Santiago. Es el principal recinto deportivo de Colo-Colo y lleva el nombre de su fundador, David Arellano. Su inauguración definitiva ocurrió el 30 de septiembre de 1989. La capacidad puede variar según la configuración del recinto y las condiciones de cada evento.",
  },

  rivalidades: [
    {
      clubId: "universidad-chile",
      nombre: "Universidad de Chile",
      descripcion:
        "Rival tradicional de Colo-Colo, con quien disputa el Superclásico del fútbol chileno. La rivalidad se consolidó durante las décadas de 1940 y 1950 y adquirió especial relevancia por sus enfrentamientos en campeonatos nacionales y definiciones deportivas. Es uno de los encuentros más representativos del fútbol profesional chileno.",
    },
    {
      clubId: "universidad-catolica",
      nombre: "Universidad Católica",
      descripcion:
        "Rivalidad deportiva entre dos de los clubes más laureados del fútbol chileno. Sus enfrentamientos, conocidos como el Clásico Albo-Cruzado, han tenido especial importancia por sus disputas de campeonatos nacionales y definiciones directas.",
    },
    {
      clubId: "cobreloa",
      nombre: "Cobreloa",
      descripcion:
        "Rivalidad deportiva que se desarrolló especialmente durante las décadas de 1980 y 1990, cuando ambos clubes disputaron títulos nacionales y definiciones de campeonato. Sus enfrentamientos incluyen finales en las que ambos equipos se consagraron campeones frente al otro.",
    },
  ],

  records: [
    {
      tipo: "Copa Libertadores",
      descripcion:
        "Conquistó la Copa Libertadores de América, convirtiéndose en el primer club chileno en ganar la principal competencia de clubes de Sudamérica.",
      dato: "Campeón",
      temporada: "1991",
    },
    {
      tipo: "Títulos de Primera División",
      descripcion:
        "Es el club con mayor cantidad de campeonatos de Primera División del fútbol chileno, con 34 títulos registrados hasta la temporada 2024.",
      dato: "34 títulos",
      temporada: "1937-2024",
    },
    {
      tipo: "Títulos de Copa Chile",
      descripcion:
        "Ha conquistado catorce ediciones de la Copa Chile.",
      dato: "14 títulos",
      temporada: "1958-2023",
    },
    {
      tipo: "Títulos de Supercopa de Chile",
      descripcion:
        "Ha ganado cuatro ediciones de la Supercopa de Chile.",
      dato: "4 títulos",
      temporada: "2017-2024",
    },
    {
      tipo: "Fundación",
      descripcion:
        "Fue fundado por futbolistas encabezados por David Arellano.",
      dato: "19 de abril",
      temporada: "1925",
    },
    {
      tipo: "Subcampeonato de Copa Libertadores",
      descripcion:
        "Alcanzó la final de la Copa Libertadores, en la que enfrentó a Olimpia de Paraguay.",
      dato: "Subcampeón",
      temporada: "1973",
    },
    {
      tipo: "Subcampeonato de Copa Libertadores",
      descripcion:
        "Alcanzó nuevamente la final de la Copa Libertadores, esta vez frente a Boca Juniors.",
      dato: "Subcampeón",
      temporada: "1978",
    },
    {
      tipo: "Subcampeonato de Copa Libertadores",
      descripcion:
        "Disputó la final de la Copa Libertadores frente a Pachuca.",
      dato: "Subcampeón",
      temporada: "2006",
    },
  ],

  jugadoresHistoricos: [
    {
      nombre: "David Arellano",
      posicion: "Delantero",
      periodo: "1925-1927",
      descripcion:
        "Fundador y primer gran referente deportivo de Colo-Colo. Su legado es central en la identidad histórica del club.",
    },
    {
      nombre: "Carlos Caszely",
      posicion: "Delantero",
      periodo: "1967-1973 y 1978-1985",
      descripcion:
        "Uno de los máximos referentes históricos de Colo-Colo y destacado goleador del fútbol chileno. Fue una figura importante de distintas generaciones del equipo.",
    },
    {
      nombre: "Lizardo Garrido",
      posicion: "Defensa",
      periodo: "1980-1993",
      descripcion:
        "Referente defensivo de Colo-Colo e integrante del plantel campeón de la Copa Libertadores de 1991.",
    },
    {
      nombre: "Jaime Pizarro",
      posicion: "Mediocampista",
      periodo: "1982-1993",
      descripcion:
        "Capitán del equipo que conquistó la Copa Libertadores de 1991 y uno de los jugadores destacados de esa generación.",
    },
    {
      nombre: "Esteban Paredes",
      posicion: "Delantero",
      periodo: "2009-2012 y 2014-2020",
      descripcion:
        "Uno de los principales goleadores de la historia del club y referente de los planteles campeones de Primera División.",
    },
  ],
},

// =====================================================
// 11. COQUIMBO UNIDO
// =====================================================

{
  id: "coquimbo-unido",
  nombre: "Coquimbo Unido",
  escudo: null,
  apodo: "Los Piratas",
  fundacion: 1958,
  ciudad: "Coquimbo",
  pais: "Chile",
  estado: "Activo",

  historia:
    "Coquimbo Unido fue fundado oficialmente el 11 de julio de 1958 en la ciudad de Coquimbo y obtuvo su ingreso al fútbol profesional en 1959. La institución representa a la zona portuaria de la Región de Coquimbo y es conocida como Los Piratas. Ha desarrollado gran parte de su trayectoria entre Primera División y Primera B. En 1991 alcanzó el subcampeonato de Primera División y clasificó a la Copa Libertadores, mientras que en 2005 disputó la final del Torneo de Apertura. En 2020 llegó a las semifinales de la Copa Sudamericana. En 2021 consiguió el campeonato de Primera B y regresó a la máxima categoría. En 2025 obtuvo su primer campeonato de Primera División. Su identidad está estrechamente ligada al puerto, la actividad marítima y la hinchada aurinegra.",

  totalTitulosOficiales: 7,

  palmares: [
    {
      competencia: "Primera División de Chile",
      cantidad: 1,
      temporadas: ["2025"],
    },
    {
      competencia: "Primera B de Chile",
      cantidad: 6,
      temporadas: [
        "1962",
        "1977",
        "2008-C",
        "2013-14-C",
        "2018",
        "2021",
      ],
    },
  ],

  estadio: {
    nombre: "Estadio Francisco Sánchez Rumoroso",
    ciudad: "Coquimbo",
    capacidad: null,
    imagen: null,
    descripcion:
      "Estadio municipal de Coquimbo y tradicional recinto de localía del club. Fue remodelado para la Copa Mundial Sub-20 de 2008 y lleva el nombre de Francisco Sánchez Rumoroso, exalcalde de la comuna. La capacidad puede variar según la configuración del recinto y las condiciones de cada evento.",
  },

  rivalidades: [
    {
      clubId: "deportes-la-serena",
      nombre: "Deportes La Serena",
      descripcion:
        "Rival tradicional de Coquimbo Unido, con quien disputa el Clásico de la Región de Coquimbo, también conocido como Clásico de la IV Región o Clásico del Norte Chico. Enfrenta a los dos principales clubes profesionales de la región: Coquimbo Unido, representante del puerto, y Deportes La Serena, representante de la capital regional. La rivalidad se ha desarrollado a través de sus enfrentamientos en Primera División, Primera B y Copa Chile.",
    },
  ],

  records: [
    {
      tipo: "Primer campeonato de Primera División",
      descripcion:
        "Conquistó por primera vez el campeonato de la máxima categoría del fútbol chileno.",
      dato: "Campeón",
      temporada: "2025",
    },
    {
      tipo: "Campeonatos de Primera B",
      descripcion:
        "Ha obtenido seis campeonatos de la segunda categoría profesional del fútbol chileno.",
      dato: "6 títulos",
      temporada: "1962-2021",
    },
    {
      tipo: "Subcampeonato de Primera División",
      descripcion:
        "Finalizó en el segundo lugar del campeonato nacional y clasificó a la Copa Libertadores.",
      dato: "Subcampeón",
      temporada: "1991",
    },
    {
      tipo: "Final del Torneo de Apertura",
      descripcion:
        "Alcanzó la final del Torneo de Apertura, donde enfrentó a Unión Española.",
      dato: "Finalista",
      temporada: "2005",
    },
    {
      tipo: "Semifinal de Copa Sudamericana",
      descripcion:
        "Alcanzó las semifinales de la Copa Sudamericana, donde fue eliminado por Defensa y Justicia.",
      dato: "Semifinalista",
      temporada: "2020",
    },
    {
      tipo: "Primera participación en Copa Libertadores",
      descripcion:
        "Clasificó a la Copa Libertadores tras finalizar como subcampeón del campeonato nacional. Compartió grupo con Colo-Colo, Universidad Católica, San Lorenzo y Newell's Old Boys.",
      dato: "Fase de grupos",
      temporada: "1992",
    },
    {
      tipo: "Fundación",
      descripcion:
        "La asamblea de socios aprobó los estatutos de la institución el 11 de julio de 1958; el ingreso al fútbol profesional fue aprobado en febrero de 1959.",
      dato: "11 de julio",
      temporada: "1958",
    },
  ],

  jugadoresHistoricos: [
    {
      nombre: "Marcelo Corrales",
      posicion: "Delantero",
      periodo: "Por confirmar",
      descripcion:
        "Goleador histórico del club en Primera División y una de las figuras identificadas con la campaña de 2005.",
    },
    {
      nombre: "Carlos Carmona",
      posicion: "Mediocampista",
      periodo: "Por confirmar",
      descripcion:
        "Futbolista formado en Coquimbo Unido y referente de la institución. Integró la selección chilena bicampeona de América y regresó al club durante su trayectoria profesional.",
    },
    {
      nombre: "Pedro González",
      posicion: "Delantero",
      periodo: "Por confirmar",
      descripcion:
        "Delantero histórico del fútbol chileno que formó parte del plantel de Coquimbo Unido que disputó la Copa Libertadores de 1992.",
    },
    {
      nombre: "Rodrigo Holgado",
      posicion: "Delantero",
      periodo: "2018-2020 y 2023",
      descripcion:
        "Goleador destacado del equipo en el ascenso de 2018 y en la campaña de 2023, temporada en la que Coquimbo Unido consiguió clasificación a la Copa Sudamericana.",
    },
    {
      nombre: "Arturo Díaz",
      posicion: "Delantero",
      periodo: "Década de 1960",
      descripcion:
        "Referente de los primeros años del club en el fútbol profesional y parte del plantel campeón de Segunda División en 1962.",
    },
    {
      nombre: "Alfonso Morales",
      posicion: "Delantero",
      periodo: "Década de 1960",
      descripcion:
        "Figura recordada de los primeros equipos profesionales de Coquimbo Unido e integrante del plantel campeón de 1962.",
    },
    {
      nombre: "Claudio Gallegos",
      posicion: "Por confirmar",
      periodo: "Década de 1970",
      descripcion:
        "Integrante del plantel que obtuvo el campeonato de Segunda División de 1977 y consiguió el ascenso a Primera División.",
    },
    {
      nombre: "Julio Dinamarca",
      posicion: "Por confirmar",
      periodo: "Década de 1970",
      descripcion:
        "Figura vinculada al plantel de Coquimbo Unido que conquistó el campeonato de Segunda División en 1977.",
    },
    {
      nombre: "Esteban Paredes",
      posicion: "Delantero",
      periodo: "2021",
      descripcion:
        "Delantero de amplia trayectoria en el fútbol chileno. Integró el plantel que obtuvo el campeonato de Primera B de 2021 y logró el retorno a Primera División.",
    },
    {
      nombre: "Jean Beausejour",
      posicion: "Defensa / Lateral",
      periodo: "2021",
      descripcion:
        "Futbolista internacional chileno e integrante del plantel campeón de Primera B en 2021.",
    },
    {
      nombre: "Matías Cano",
      posicion: "Portero",
      periodo: "2019-2021",
      descripcion:
        "Arquero y capitán identificado con Coquimbo Unido durante campañas relevantes del club, incluido el ascenso de 2021.",
    },
    {
      nombre: "Federico Pereyra",
      posicion: "Defensa",
      periodo: "Por confirmar",
      descripcion:
        "Defensor argentino que permaneció en el plantel durante el proceso de retorno a Primera División en 2021.",
    },
    {
      nombre: "Sebastián Galani",
      posicion: "Mediocampista",
      periodo: "Por confirmar",
      descripcion:
        "Mediocampista identificado con el club y referente de sus planteles recientes.",
    },
    {
      nombre: "Diego Sánchez",
      posicion: "Portero",
      periodo: "2023-2024",
      descripcion:
        "Arquero destacado de Coquimbo Unido en las campañas recientes y en el proceso de clasificación a la Copa Sudamericana 2024.",
    },
    {
      nombre: "Luciano Cabral",
      posicion: "Mediocampista",
      periodo: "2023-2024",
      descripcion:
        "Mediocampista que destacó por su aporte creativo durante la campaña nacional de 2023 y la participación internacional de 2024.",
    },
  ],
},

// =====================================================
// 12. CURICÓ UNIDO
// =====================================================

{
  id: "curico-unido",
  nombre: "Curicó Unido",
  escudo: null,
  apodo: "Los Torteros",
  fundacion: 1973,
  ciudad: "Curicó",
  pais: "Chile",
  estado: "Activo",

  historia:
    "El Club de Deportes Provincial Curicó Unido fue fundado el 26 de febrero de 1973 para representar a la ciudad de Curicó en el fútbol organizado. Su historia está vinculada al desarrollo del fútbol de la provincia y a la continuidad de la tradición deportiva local. Tras varias décadas en categorías de ascenso, obtuvo el campeonato de Primera B en 2008 y consiguió su primer ascenso a Primera División. En la temporada 2016-17 volvió a ganar la categoría y retornó a la máxima división. En 2022 alcanzó el segundo lugar de Primera División, logrando una de las mejores campañas de su historia y clasificando a la Copa Libertadores. Su trayectoria profesional incluye participaciones en Primera División y Primera B, además de una prolongada presencia en las competiciones de ascenso.",

  totalTitulosOficiales: 2,

  palmares: [
    {
      competencia: "Primera B de Chile",
      cantidad: 2,
      temporadas: ["2008", "2016-17"],
    },
  ],

  estadio: {
    nombre: "Estadio La Granja",
    ciudad: "Curicó",
    capacidad: null,
    imagen: null,
    descripcion:
      "Estadio municipal ubicado en Curicó y recinto tradicional de localía de Curicó Unido. Ha sido remodelado y ampliado para albergar partidos del fútbol profesional chileno. La capacidad oficial vigente debe confirmarse con la administración del recinto.",
  },

  rivalidades: [
    {
      clubId: "rangers",
      nombre: "Rangers de Talca",
      descripcion:
        "Rivalidad regional entre Curicó Unido y Rangers de Talca, representantes de ciudades importantes de la Región del Maule. Sus enfrentamientos son conocidos como el Clásico del Maule y han tenido continuidad principalmente en las categorías profesionales de ascenso, además de encuentros en Primera División.",
    },
  ],

  records: [
    {
      tipo: "Campeonato de Primera B",
      descripcion:
        "Obtuvo el campeonato anual de Primera B y consiguió el ascenso a Primera División.",
      dato: "Campeón",
      temporada: "2008",
    },
    {
      tipo: "Segundo campeonato de Primera B",
      descripcion:
        "Conquistó nuevamente la segunda categoría profesional y aseguró su retorno a Primera División.",
      dato: "Campeón",
      temporada: "2016-17",
    },
    {
      tipo: "Mejor campaña en Primera División",
      descripcion:
        "Finalizó en el segundo lugar del campeonato nacional y obtuvo clasificación a la Copa Libertadores.",
      dato: "Subcampeón",
      temporada: "2022",
    },
    {
      tipo: "Primera participación en Copa Libertadores",
      descripcion:
        "Clasificó por primera vez a la Copa Libertadores tras finalizar segundo en el campeonato chileno.",
      dato: "Fase de grupos",
      temporada: "2023",
    },
    {
      tipo: "Campeonato de Tercera División",
      descripcion:
        "Obtuvo el campeonato de Tercera División y retornó al fútbol profesional. Este título corresponde a una categoría amateur y no se contabiliza en el palmarés profesional de este registro.",
      dato: "Campeón de categoría amateur",
      temporada: "2005",
    },
    {
      tipo: "Fundación",
      descripcion:
        "Fue fundado para representar a la ciudad de Curicó en las competiciones de fútbol organizado.",
      dato: "26 de febrero",
      temporada: "1973",
    },
  ],

  jugadoresHistoricos: [
    {
      nombre: "César Díaz",
      posicion: "Delantero",
      periodo: "Por confirmar",
      descripcion:
        "Delantero asociado a la historia deportiva de Curicó Unido y a sus campañas en el fútbol profesional. Se mantiene el periodo específico pendiente de confirmación.",
    },
    {
      nombre: "Diego Churín",
      posicion: "Delantero",
      periodo: "2013-2014",
      descripcion:
        "Delantero argentino que defendió a Curicó Unido durante su trayectoria en el fútbol chileno y posteriormente desarrolló una carrera en clubes nacionales e internacionales.",
    },
    {
      nombre: "Nicolás Peric",
      posicion: "Portero",
      periodo: "Por confirmar",
      descripcion:
        "Arquero chileno con trayectoria en el fútbol profesional nacional. Su periodo exacto en Curicó Unido queda pendiente de confirmación.",
    },
    {
      nombre: "Gabriel Vargas",
      posicion: "Delantero",
      periodo: "Por confirmar",
      descripcion:
        "Delantero chileno que tuvo participación en el fútbol profesional de la zona centro-sur. Se incluye como referencia histórica, con su periodo específico en el club pendiente de verificación.",
    },
    {
      nombre: "Luis Marcoleta",
      posicion: "Entrenador",
      periodo: "2007-2009 y 2016-2017",
      descripcion:
        "Entrenador fundamental en los campeonatos de Primera B de Curicó Unido de 2008 y 2016-17. Se incluye como figura histórica institucional, aunque no corresponde a un jugador.",
    },
  ],
},

// =====================================================
// 13. DEPORTES CONCEPCIÓN
// =====================================================

{
  id: "deportes-concepcion",
  nombre: "Deportes Concepción",
  escudo: null,
  apodo: "El León de Collao",
  fundacion: 1966,
  ciudad: "Concepción",
  pais: "Chile",
  estado: "Activo",

  historia:
    "Deportes Concepción fue fundado el 25 de enero de 1966 mediante la unión de clubes amateur de la ciudad, con el respaldo deportivo e institucional de Lord Cochrane. Fue aceptado en la Segunda División ese mismo año y obtuvo su primer campeonato profesional en 1967. Durante su trayectoria se convirtió en uno de los principales representantes del fútbol de la Región del Biobío, participando en Primera División y en torneos internacionales, incluida la Copa Libertadores de 1991. Tras dificultades institucionales y administrativas, perdió su condición profesional en 2016. Posteriormente inició un proceso de reorganización deportiva, retornó a las competiciones profesionales y consiguió el ascenso a Primera División para la temporada 2026. Su identidad está estrechamente vinculada al Estadio Ester Roa Rebolledo y al sector de Collao.",

  totalTitulosOficiales: 1,

  palmares: [
    {
      competencia: "Segunda División de Chile",
      cantidad: 1,
      temporadas: ["1967"],
    },
  ],

  estadio: {
    nombre: "Estadio Ester Roa Rebolledo",
    ciudad: "Concepción",
    capacidad: null,
    imagen: null,
    descripcion:
      "Estadio municipal ubicado en el sector de Collao, Concepción. Es uno de los principales recintos deportivos de la Región del Biobío y escenario histórico de Deportes Concepción. Ha albergado partidos de fútbol profesional, encuentros internacionales y competiciones de selecciones.",
  },

  rivalidades: [
    {
      clubId: "fernandez-vial",
      nombre: "Fernández Vial",
      descripcion:
        "Enfrentamiento tradicional entre Deportes Concepción y Fernández Vial, dos instituciones históricas de la ciudad y del fútbol de la Región del Biobío. Es conocido como el Clásico Penquista y representa una de las rivalidades locales más reconocidas del fútbol chileno.",
    },
    {
      clubId: "huachipato",
      nombre: "Huachipato",
      descripcion:
        "Rivalidad regional entre dos clubes representativos del Gran Concepción. Sus enfrentamientos han tenido relevancia en el fútbol profesional de la Región del Biobío, aunque el Clásico Penquista tradicional se identifica principalmente con los duelos frente a Fernández Vial.",
    },
  ],

  records: [
    {
      tipo: "Primer título profesional",
      descripcion:
        "Obtuvo el campeonato de Segunda División y consiguió el ascenso a Primera División.",
      dato: "Campeón",
      temporada: "1967",
    },
    {
      tipo: "Participación internacional",
      descripcion:
        "Disputó la Copa Libertadores de América, enfrentándose a clubes chilenos y extranjeros en la fase de grupos.",
      dato: "Fase de grupos",
      temporada: "1991",
    },
    {
      tipo: "Subcampeonato de Primera División",
      descripcion:
        "Finalizó en el segundo lugar del campeonato nacional de Primera División.",
      dato: "Subcampeón",
      temporada: "1975",
    },
    {
      tipo: "Retorno a Primera División",
      descripcion:
        "Consiguió el ascenso a la máxima categoría tras superar a Cobreloa en la definición de ascenso de la temporada.",
      dato: "Ascenso",
      temporada: "2025",
    },
    {
      tipo: "Pérdida de la categoría profesional",
      descripcion:
        "Perdió su condición de club profesional debido a problemas institucionales y administrativos, iniciando posteriormente un proceso de reorganización deportiva.",
      dato: "Relegado al fútbol amateur",
      temporada: "2016",
    },
    {
      tipo: "Fundación",
      descripcion:
        "Nació de la unión de clubes amateur de Concepción, con el respaldo de Lord Cochrane.",
      dato: "25 de enero",
      temporada: "1966",
    },
  ],

  jugadoresHistoricos: [
    {
      nombre: "Haroldo Peña",
      posicion: "Delantero",
      periodo: "Década de 1960",
      descripcion:
        "Uno de los primeros grandes referentes deportivos de Deportes Concepción y figura destacada de la campaña que permitió conquistar el campeonato de Segunda División de 1967.",
    },
    {
      nombre: "Osvaldo Castro",
      posicion: "Delantero",
      periodo: "Década de 1970",
      descripcion:
        "Destacado goleador chileno que defendió a Deportes Concepción y desarrolló una extensa carrera nacional e internacional. Fue una de las figuras del equipo durante sus primeras décadas en el profesionalismo.",
    },
    {
      nombre: "Mario Osbén",
      posicion: "Portero",
      periodo: "Década de 1970",
      descripcion:
        "Arquero chileno de reconocida trayectoria nacional e internacional que defendió a Deportes Concepción antes de consolidarse como una figura de la selección chilena.",
    },
    {
      nombre: "René Valenzuela",
      posicion: "Defensa",
      periodo: "Década de 1970",
      descripcion:
        "Defensor chileno que formó parte de la historia del club y posteriormente tuvo participación en la selección nacional.",
    },
    {
      nombre: "Óscar Coll",
      posicion: "Delantero",
      periodo: "Década de 1960",
      descripcion:
        "Futbolista de experiencia que aportó al crecimiento deportivo de Deportes Concepción durante sus primeros años en el fútbol profesional.",
    },
    {
      nombre: "Marcelo Pagani",
      posicion: "Delantero",
      periodo: "Década de 1960",
      descripcion:
        "Jugador de trayectoria que integró los primeros planteles de Deportes Concepción en el profesionalismo.",
    },
    {
      nombre: "Nelson Sepúlveda",
      posicion: "Mediocampista",
      periodo: "2025",
      descripcion:
        "Autor del gol decisivo en la final de ascenso frente a Cobreloa, resultado que permitió a Deportes Concepción regresar a Primera División para la temporada 2026.",
    },
  ],
},

// =====================================================
// 14. DEPORTES COPIAPÓ
// =====================================================

{
  id: "deportes-copiapo",
  nombre: "Deportes Copiapó",
  escudo: null,
  apodo: "El León de Atacama",
  fundacion: 1999,
  ciudad: "Copiapó",
  pais: "Chile",
  estado: "Activo",

  historia:
    "Deportes Copiapó fue fundado el 9 de marzo de 1999 para representar a la ciudad de Copiapó y a la Región de Atacama en el fútbol organizado, tras la desaparición de Regional Atacama. Comenzó su trayectoria en Tercera División y obtuvo el campeonato de esa categoría en 2002, resultado que le permitió ingresar a Primera B en 2003. Desde entonces se consolidó como representante regional en el fútbol profesional chileno. En 2022 consiguió el ascenso a Primera División tras superar a Cobreloa en la liguilla de promoción, debutando en la máxima categoría durante la temporada 2023. Su identidad está asociada a la ciudad de Copiapó, al desierto de Atacama y al apodo de León de Atacama.",

  totalTitulosOficiales: 0,

  palmares: [],

  estadio: {
    nombre: "Estadio Luis Valenzuela Hermosilla",
    ciudad: "Copiapó",
    capacidad: null,
    imagen: null,
    descripcion:
      "Estadio ubicado en Copiapó y utilizado como recinto local por Deportes Copiapó. El club heredó el uso del estadio y los colores deportivos de Regional Atacama. El recinto ha sido sometido a trabajos de remodelación y mejoras para cumplir con las exigencias del fútbol profesional. La capacidad oficial vigente queda pendiente de confirmación.",
  },

  rivalidades: [
    {
      clubId: "cobreloa",
      nombre: "Cobreloa",
      descripcion:
        "Enfrentamiento regional entre Deportes Copiapó y Cobreloa, clubes del norte de Chile que se han encontrado en distintas temporadas de Primera B. El duelo adquirió especial relevancia durante la definición por el ascenso disputada en 2022, cuando Deportes Copiapó consiguió el paso a Primera División. No se presenta como un clásico histórico consolidado, sino como una rivalidad deportiva desarrollada por sus enfrentamientos competitivos.",
    },
    {
      clubId: "deportes-la-serena",
      nombre: "Deportes La Serena",
      descripcion:
        "Enfrentamiento entre clubes del norte chico que han compartido temporadas en Primera B y otras competiciones profesionales. Su componente regional está relacionado con la cercanía geográfica y la representación de ciudades del norte del país; no se identifica aquí como un clásico formalmente establecido.",
    },
  ],

  records: [
    {
      tipo: "Campeonato de Tercera División",
      descripcion:
        "Conquistó el campeonato de Tercera División en 2002 tras vencer a Malleco Unido en la definición. Esta categoría correspondía al fútbol amateur, por lo que el título se conserva como antecedente histórico y no se contabiliza en el total de títulos profesionales.",
      dato: "Campeón de categoría amateur",
      temporada: "2002",
    },
    {
      tipo: "Ingreso al fútbol profesional",
      descripcion:
        "Debutó en Primera B después de obtener el campeonato de Tercera División de 2002.",
      dato: "Primera temporada profesional",
      temporada: "2003",
    },
    {
      tipo: "Mejor debut profesional",
      descripcion:
        "En su primer partido de Primera B venció por 5-0 a Deportes La Serena, resultado destacado como uno de los debuts más amplios de un club proveniente del fútbol amateur.",
      dato: "Victoria 5-0",
      temporada: "2003",
    },
    {
      tipo: "Primer ascenso a Primera División",
      descripcion:
        "Consiguió el ascenso tras superar a Cobreloa en la liguilla de promoción, logrando por primera vez llegar a la máxima categoría del fútbol chileno.",
      dato: "Ascenso histórico",
      temporada: "2022",
    },
    {
      tipo: "Primera temporada en Primera División",
      descripcion:
        "Debutó en la máxima categoría del fútbol chileno después de conseguir el ascenso en la temporada anterior.",
      dato: "Primera participación",
      temporada: "2023",
    },
    {
      tipo: "Fundación",
      descripcion:
        "Fue constituido como institución deportiva para representar a Copiapó y a la Región de Atacama, tras la desaparición de Regional Atacama.",
      dato: "9 de marzo",
      temporada: "1999",
    },
  ],

  jugadoresHistoricos: [
    {
      nombre: "Jorge Lagunas",
      posicion: "Delantero",
      periodo: "2002",
      descripcion:
        "Integrante del plantel que obtuvo el campeonato de Tercera División de 2002. Marcó tres goles en la final frente a Malleco Unido.",
    },
    {
      nombre: "David Cubillos",
      posicion: "Delantero",
      periodo: "2002",
      descripcion:
        "Integrante del equipo campeón de Tercera División en 2002 y autor de uno de los goles de la final frente a Malleco Unido.",
    },
    {
      nombre: "Francisco Moscoso",
      posicion: "Delantero",
      periodo: "2002",
      descripcion:
        "Marcó dos goles en la final de Tercera División de 2002 frente a Malleco Unido y fue parte del plantel que consiguió el ingreso a Primera B.",
    },
    {
      nombre: "Marco Álvarez",
      posicion: "Por confirmar",
      periodo: "2002",
      descripcion:
        "Integrante del plantel campeón de Tercera División de 2002 y autor de un gol en la final frente a Malleco Unido. Su posición específica queda pendiente de confirmación.",
    },
    {
      nombre: "Nelson Rebolledo",
      posicion: "Defensa",
      periodo: "2022-2023",
      descripcion:
        "Futbolista que integró el plantel de Deportes Copiapó durante el proceso de ascenso y su primera temporada en Primera División.",
    },
    {
      nombre: "Manuel López",
      posicion: "Delantero",
      periodo: "2022-2023",
      descripcion:
        "Delantero que formó parte del plantel de Deportes Copiapó durante la campaña de ascenso y el debut del club en Primera División.",
    },
    {
      nombre: "Jorge Luna",
      posicion: "Mediocampista",
      periodo: "2022-2023",
      descripcion:
        "Mediocampista argentino que aportó experiencia y creación ofensiva al equipo durante su proceso de ascenso y su primera campaña en la máxima categoría.",
    },
  ],
},
// =====================================================
// 15. DEPORTES IBERIA
// =====================================================

{
  id: "deportes-iberia",
  nombre: "Deportes Iberia",
  escudo: null,
  apodo: "Los Azulgranas",
  fundacion: 1933,
  ciudad: "Los Ángeles",
  pais: "Chile",
  estado: "Activo",

  historia:
    "Deportes Iberia fue fundado el 15 de junio de 1933 en Santiago por un grupo de jóvenes encabezados por Alberto Cassorla Camhi. Durante sus primeros años desarrolló su actividad en la capital y posteriormente se trasladó a Puente Alto. En 1969 estableció su sede en Los Ángeles, Región del Biobío, donde se convirtió en una institución representativa de la zona. Su trayectoria incluye participaciones en distintas categorías del fútbol chileno. En 2012, 2013 y 2013-14 obtuvo tres campeonatos consecutivos de Segunda División Profesional, logrando el ascenso a Primera B en 2014. En temporadas posteriores participó en Primera B y regresó a categorías inferiores. Su actividad competitiva más reciente corresponde al fútbol amateur, por lo que su estado como institución se considera activo, aunque no participa actualmente en el fútbol profesional.",

  totalTitulosOficiales: 3,

  palmares: [
    {
      competencia: "Segunda División Profesional de Chile",
      cantidad: 3,
      temporadas: ["2012", "Transición 2013", "2013-14"],
    },
  ],

  estadio: {
    nombre: "Estadio Municipal de Los Ángeles",
    ciudad: "Los Ángeles",
    capacidad: null,
    imagen: null,
    descripcion:
      "Recinto deportivo municipal utilizado históricamente por Deportes Iberia en la ciudad de Los Ángeles, Región del Biobío. Ha sido escenario de sus campañas en las categorías profesionales de ascenso. La capacidad oficial vigente del recinto queda pendiente de confirmación.",
  },

  rivalidades: [],

  records: [
    {
      tipo: "Fundación",
      descripcion:
        "La institución fue fundada en Santiago por un grupo de jóvenes encabezados por Alberto Cassorla Camhi.",
      dato: "15 de junio",
      temporada: "1933",
    },
    {
      tipo: "Traslado a Los Ángeles",
      descripcion:
        "La institución estableció su sede en la ciudad de Los Ángeles, donde desarrolló su identidad deportiva como representante de la provincia de Biobío.",
      dato: "Traslado institucional",
      temporada: "1969",
    },
    {
      tipo: "Campeonatos consecutivos de Segunda División Profesional",
      descripcion:
        "Obtuvo tres campeonatos consecutivos de Segunda División Profesional y consiguió el ascenso a Primera B.",
      dato: "3 campeonatos consecutivos",
      temporada: "2012-2014",
    },
    {
      tipo: "Ascenso a Primera B",
      descripcion:
        "Consiguió el ascenso a Primera B tras conquistar el campeonato de Segunda División Profesional 2013-14.",
      dato: "Ascenso",
      temporada: "2014",
    },
    {
      tipo: "Subcampeonato de Segunda División Profesional",
      descripcion:
        "Finalizó como subcampeón de la categoría en una temporada posterior a su etapa de campeonatos consecutivos.",
      dato: "Subcampeón",
      temporada: "2020",
    },
    {
      tipo: "Fundación",
      descripcion:
        "Fue fundado en Santiago y posteriormente trasladó su actividad institucional a Puente Alto y Los Ángeles.",
      dato: "15 de junio",
      temporada: "1933",
    },
  ],

  jugadoresHistoricos: [
    {
      nombre: "Miguel Orellana",
      posicion: "Delantero",
      periodo: "2013-2014",
      descripcion:
        "Delantero y goleador del equipo durante la campaña 2013-14, temporada en la que Deportes Iberia obtuvo el campeonato de Segunda División Profesional y el ascenso a Primera B.",
    },
    {
      nombre: "Franco Cabrera",
      posicion: "Portero",
      periodo: "2013-2014",
      descripcion:
        "Arquero titular del plantel que consiguió el campeonato de Segunda División Profesional 2013-14 y el ascenso a Primera B.",
    },
    {
      nombre: "Ronald de la Fuente",
      posicion: "Defensa",
      periodo: "2013-2014",
      descripcion:
        "Defensor integrante del plantel campeón de Segunda División Profesional 2013-14. Posteriormente desarrolló una trayectoria en el fútbol profesional chileno.",
    },
    {
      nombre: "Fabián Torres",
      posicion: "Defensa",
      periodo: "2013-2014",
      descripcion:
        "Integrante de la defensa del equipo que obtuvo el campeonato de Segunda División Profesional 2013-14 y consiguió el ascenso a Primera B.",
    },
    {
      nombre: "Álvaro Torres",
      posicion: "Mediocampista",
      periodo: "2013-2014",
      descripcion:
        "Mediocampista del plantel que conquistó el campeonato de Segunda División Profesional 2013-14 bajo la dirección técnica de Ronald Fuentes.",
    },
  ],
},

// =====================================================
// 16. DEPORTES IQUIQUE
// =====================================================

{
  id: "deportes-iquique",
  nombre: "Deportes Iquique",
  escudo: null,
  apodo: "Los Dragones Celestes",
  fundacion: 1978,
  ciudad: "Iquique",
  pais: "Chile",
  estado: "Activo",

  historia:
    "El Club Deportes Iquique fue fundado el 21 de mayo de 1978 mediante la unión de instituciones del fútbol amateur iquiqueño, entre ellas Cavancha y Estrella del Norte. En 1979 obtuvo el campeonato de Segunda División y ascendió a Primera División. En 1980 conquistó la Copa Chile, uno de los principales logros de su historia. Posteriormente consiguió nuevos títulos de Primera B en 1997 y 2010, además de conquistar nuevamente la Copa Chile en 2010 y 2013-14. El club ha participado en Primera División, Primera B y competiciones internacionales. Su identidad está ligada a la ciudad de Iquique, conocida como la Tierra de Campeones, y al Estadio Tierra de Campeones Ramón Estay Saavedra.",

  totalTitulosOficiales: 6,

  palmares: [
    {
      competencia: "Primera B de Chile",
      cantidad: 3,
      temporadas: ["1979", "1997", "2010"],
    },
    {
      competencia: "Copa Chile",
      cantidad: 3,
      temporadas: ["1980", "2010", "2013-14"],
    },
  ],

  estadio: {
    nombre: "Estadio Tierra de Campeones Ramón Estay Saavedra",
    ciudad: "Iquique",
    capacidad: null,
    imagen: null,
    descripcion:
      "Estadio municipal de Iquique y recinto tradicional de Deportes Iquique. El estadio actual reemplazó al antiguo recinto ubicado junto a la playa Cavancha y fue reconstruido para modernizar la infraestructura deportiva de la ciudad. Lleva el nombre de Ramón Estay Saavedra, figura histórica vinculada al fútbol iquiqueño. La capacidad oficial vigente queda pendiente de confirmación.",
  },

  rivalidades: [
    {
      clubId: "san-marcos",
      nombre: "San Marcos de Arica",
      descripcion:
        "Rivalidad regional entre Deportes Iquique y San Marcos de Arica, dos instituciones representativas del extremo norte de Chile. Sus enfrentamientos son conocidos como el Clásico del Norte y tienen como trasfondo la rivalidad deportiva entre las ciudades de Iquique y Arica. Se han disputado en distintas categorías del fútbol profesional chileno.",
    },
  ],

  records: [
    {
      tipo: "Primer título de ascenso",
      descripcion:
        "Obtuvo el campeonato de Segunda División y consiguió el ascenso a Primera División.",
      dato: "Campeón",
      temporada: "1979",
    },
    {
      tipo: "Primer título de Copa Chile",
      descripcion:
        "Conquistó por primera vez la Copa Chile, obteniendo uno de los principales títulos de su historia institucional.",
      dato: "Campeón",
      temporada: "1980",
    },
    {
      tipo: "Segundo campeonato de Primera B",
      descripcion:
        "Obtuvo el campeonato de Primera B y retornó a la máxima categoría del fútbol chileno.",
      dato: "Campeón",
      temporada: "1997",
    },
    {
      tipo: "Campeonato de Primera B y Copa Chile",
      descripcion:
        "En 2010 conquistó el campeonato de Primera B y también la Copa Chile, consiguiendo dos títulos oficiales durante el mismo año.",
      dato: "2 títulos oficiales",
      temporada: "2010",
    },
    {
      tipo: "Tercer título de Copa Chile",
      descripcion:
        "Conquistó nuevamente la Copa Chile en la temporada 2013-14.",
      dato: "Campeón",
      temporada: "2013-14",
    },
    {
      tipo: "Subcampeonato de Primera División",
      descripcion:
        "Finalizó en el segundo lugar del Torneo de Apertura de Primera División, alcanzando una de sus mejores campañas en la máxima categoría.",
      dato: "Subcampeón",
      temporada: "2016",
    },
    {
      tipo: "Ascenso a Primera División",
      descripcion:
        "Consiguió el ascenso tras superar a Santiago Wanderers en la definición de promoción, regresando a Primera División.",
      dato: "Ascenso",
      temporada: "2023",
    },
    {
      tipo: "Fundación",
      descripcion:
        "La institución nació de la unión de clubes del fútbol amateur iquiqueño, entre ellos Cavancha y Estrella del Norte.",
      dato: "21 de mayo",
      temporada: "1978",
    },
  ],

  jugadoresHistoricos: [
    {
      nombre: "Ramón Estay",
      posicion: "Delantero",
      periodo: "Décadas de 1970 y 1980",
      descripcion:
        "Figura histórica vinculada al nacimiento y desarrollo de Deportes Iquique. El estadio de la ciudad lleva su nombre en reconocimiento a su trayectoria.",
    },
    {
      nombre: "Álvaro Ramos",
      posicion: "Delantero",
      periodo: "2009-2013 y etapas posteriores",
      descripcion:
        "Delantero formado en Deportes Iquique y reconocido como uno de los máximos goleadores de la historia del club. Fue protagonista de campañas de ascenso y de la obtención de la Copa Chile 2010.",
    },
    {
      nombre: "Edson Puch",
      posicion: "Delantero / Extremo",
      periodo: "2008-2010 y etapas posteriores",
      descripcion:
        "Futbolista formado en el entorno del fútbol iquiqueño y figura de Deportes Iquique. Su trayectoria incluye pasos por clubes nacionales e internacionales y participación en la selección chilena.",
    },
    {
      nombre: "Manuel Villalobos",
      posicion: "Delantero",
      periodo: "2009-2013",
      descripcion:
        "Delantero importante en los planteles de Deportes Iquique que conquistaron títulos de Primera B y Copa Chile durante el ciclo de comienzos de la década de 2010.",
    },
    {
      nombre: "Jaime Naranjo",
      posicion: "Mediocampista",
      periodo: "Décadas de 1970 y 1980",
      descripcion:
        "Referente histórico del fútbol iquiqueño y de los primeros años de Deportes Iquique en el profesionalismo.",
    },
    {
      nombre: "Cristián Bogado",
      posicion: "Delantero",
      periodo: "2010-2012",
      descripcion:
        "Delantero paraguayo que destacó en Deportes Iquique durante sus campañas en Primera División y en competiciones nacionales.",
    },
    {
      nombre: "Rafael Caroca",
      posicion: "Mediocampista",
      periodo: "2016-2017",
      descripcion:
        "Mediocampista que integró el equipo que alcanzó el subcampeonato del Torneo de Apertura 2016 y participó en competiciones internacionales.",
    },
  ],
},

// =====================================================
// 17. DEPORTES LA SERENA
// =====================================================

{
  id: "deportes-la-serena",
  nombre: "Deportes La Serena",
  escudo: null,
  apodo: "Los Papayeros",
  fundacion: 1955,
  ciudad: "La Serena",
  pais: "Chile",
  estado: "Activo",

  historia:
    "Club de Deportes La Serena fue fundado el 9 de diciembre de 1955, luego de que la selección de la ciudad alcanzara importantes logros en el fútbol amateur nacional. Ingresó al profesionalismo en 1956 y obtuvo el campeonato de ascenso en 1957, alcanzando rápidamente la Primera División. En 1960 conquistó la Copa Chile, uno de los principales logros de su historia. Posteriormente obtuvo nuevos campeonatos de Primera B en 1987 y 1996, y volvió a ganar la categoría en 2024. Su estadio tradicional es La Portada, recinto ubicado en la ciudad y símbolo del fútbol serenense. Su rivalidad histórica con Coquimbo Unido constituye uno de los clásicos regionales más reconocidos del fútbol chileno.",

  totalTitulosOficiales: 5,

  palmares: [
    {
      competencia: "Copa Chile",
      cantidad: 1,
      temporadas: ["1960"],
    },
    {
      competencia: "Primera B de Chile",
      cantidad: 4,
      temporadas: ["1957", "1987", "1996", "2024"],
    },
  ],

  estadio: {
    nombre: "Estadio La Portada",
    ciudad: "La Serena",
    capacidad: null,
    imagen: null,
    descripcion:
      "Estadio municipal inaugurado en 1952 y recinto histórico de Deportes La Serena. Se encuentra próximo al centro de la ciudad y ha sido escenario de partidos de Primera División, Primera B y encuentros de selecciones. Fue remodelado y reinaugurado en 2015. La capacidad oficial vigente queda pendiente de confirmación.",
  },

  rivalidades: [
    {
      clubId: "coquimbo-unido",
      nombre: "Coquimbo Unido",
      descripcion:
        "Clásico regional entre Deportes La Serena y Coquimbo Unido, dos clubes que representan a ciudades vecinas de la Región de Coquimbo. El enfrentamiento es conocido como el Clásico de la Región de Coquimbo, Clásico de la IV Región o Clásico del Norte Chico. La rivalidad se ha desarrollado a través de partidos de Primera División, Primera B y Copa Chile.",
    },
  ],

  records: [
    {
      tipo: "Primer título profesional",
      descripcion:
        "Obtuvo el campeonato de Segunda División, actualmente denominado Primera B, y consiguió el ascenso a Primera División.",
      dato: "Campeón",
      temporada: "1957",
    },
    {
      tipo: "Primera final de Copa Chile",
      descripcion:
        "Alcanzó la final de Copa Chile, en la que fue derrotado por Santiago Wanderers.",
      dato: "Subcampeón",
      temporada: "1959",
    },
    {
      tipo: "Copa Chile",
      descripcion:
        "Conquistó la Copa Chile tras vencer a Santiago Wanderers por 4-1 en la final disputada en el Estadio La Portada.",
      dato: "Campeón",
      temporada: "1960",
    },
    {
      tipo: "Segundo campeonato de Primera B",
      descripcion:
        "Obtuvo el campeonato de ascenso en una liguilla que incluyó a Coquimbo Unido.",
      dato: "Campeón",
      temporada: "1987",
    },
    {
      tipo: "Tercer campeonato de Primera B",
      descripcion:
        "Conquistó nuevamente la segunda categoría profesional y retornó a Primera División.",
      dato: "Campeón",
      temporada: "1996",
    },
    {
      tipo: "Cuarto campeonato de Primera B",
      descripcion:
        "Se coronó campeón del Campeonato de Ascenso tras una campaña en la que perdió solo dos partidos, asegurando su retorno a Primera División.",
      dato: "Campeón",
      temporada: "2024",
    },
    {
      tipo: "Participación en liguilla de Copa Libertadores",
      descripcion:
        "Clasificó a la liguilla que otorgaba acceso a la Copa Libertadores.",
      dato: "Participante",
      temporada: "1988",
    },
    {
      tipo: "Participación en liguilla de Copa Libertadores",
      descripcion:
        "Volvió a disputar la liguilla de clasificación a la Copa Libertadores.",
      dato: "Participante",
      temporada: "1989",
    },
    {
      tipo: "Semifinal del Torneo de Clausura",
      descripcion:
        "Alcanzó las semifinales del Torneo de Clausura de Primera División, instancia en la que fue eliminado por Universidad Católica.",
      dato: "Semifinalista",
      temporada: "2005",
    },
    {
      tipo: "Fundación",
      descripcion:
        "Su creación institucional fue impulsada por los logros de la selección amateur de La Serena, que obtuvo campeonatos nacionales antes de la incorporación de la ciudad al profesionalismo.",
      dato: "9 de diciembre",
      temporada: "1955",
    },
    {
      tipo: "Antecedentes del fútbol amateur",
      descripcion:
        "La selección de La Serena obtuvo campeonatos nacionales amateur que contribuyeron a impulsar la incorporación de la ciudad al fútbol profesional. Estos logros no se contabilizan en el palmarés profesional de Deportes La Serena.",
      dato: "Campeonatos amateur",
      temporada: "1949, 1951 y 1954",
    },
  ],

  jugadoresHistoricos: [
    {
      nombre: "Carlos Verdejo",
      posicion: "Delantero",
      periodo: "Década de 1950",
      descripcion:
        "Uno de los primeros grandes referentes de Deportes La Serena. Fue goleador de Primera División en 1958 y figura destacada durante los primeros años del club en el profesionalismo.",
    },
    {
      nombre: "José Sulantay",
      posicion: "Delantero",
      periodo: "Década de 1960",
      descripcion:
        "Futbolista y posteriormente entrenador chileno. Formó parte de la historia deportiva de Deportes La Serena y desarrolló una reconocida trayectoria en el fútbol nacional.",
    },
    {
      nombre: "Mauricio Salazar",
      posicion: "Delantero",
      periodo: "1990-2010",
      descripcion:
        "Uno de los máximos referentes históricos de Deportes La Serena y goleador destacado del club. Su extensa trayectoria lo convirtió en una figura emblemática de la institución.",
    },
    {
      nombre: "Francisco Rojas",
      posicion: "Defensa",
      periodo: "Década de 1990",
      descripcion:
        "Defensor chileno que defendió a Deportes La Serena y posteriormente desarrolló una carrera en clubes nacionales e internacionales, además de integrar la selección chilena.",
    },
    {
      nombre: "Jaime Valdés",
      posicion: "Mediocampista",
      periodo: "2000-2001",
      descripcion:
        "Mediocampista formado en Deportes La Serena que posteriormente desarrolló una extensa carrera en el fútbol europeo y chileno.",
    },
    {
      nombre: "Cristóbal Jorquera",
      posicion: "Mediocampista",
      periodo: "2006-2007",
      descripcion:
        "Mediocampista formado en el fútbol chileno que tuvo participación en Deportes La Serena antes de continuar su carrera en clubes nacionales e internacionales.",
    },
    {
      nombre: "Lionel Altamirano",
      posicion: "Delantero",
      periodo: "2024",
      descripcion:
        "Delantero argentino y principal referente ofensivo de la campaña que permitió a Deportes La Serena conquistar el Campeonato de Ascenso 2024. Fue uno de los máximos goleadores del torneo.",
    },
  ],
},
   // =====================================================
  // 18. DEPORTES LIMACHE
  // =====================================================
  {
    id: "deportes-limache",
    nombre: "Deportes Limache",
    escudo: null,
    apodo: "Tomateros",
    fundacion: 2012,
    ciudad: "Limache",
    pais: "Chile",
    estado: "Activo",
    historia:
      "Club fundado el 8 de noviembre de 2012 para representar a la ciudad de Limache, Región de Valparaíso. Ingresó a la Tercera División B en 2013 y consiguió ascensos consecutivos en distintas etapas de su desarrollo. En 2023 obtuvo el campeonato de Segunda División Profesional y en 2024 ganó la liguilla de ascenso de Primera B, logrando llegar por primera vez a la máxima categoría para la temporada 2025. Ese mismo año alcanzó la final de la Copa Chile, en la que perdió ante Huachipato mediante lanzamientos penales.",
    totalTitulosOficiales: 1,
    palmares: [
      {
        competencia: "Segunda División Profesional",
        cantidad: 1,
        temporadas: ["2023"],
      },
    ],
    estadio: {
      nombre: "Estadio Gustavo Ocaranza",
      ciudad: "Limache",
      capacidad: null,
      imagen: null,
      descripcion:
        "Recinto históricamente asociado a la localía del club en Limache. Durante su etapa profesional también ha disputado partidos en otros estadios, entre ellos el Lucio Fariña Fernández de Quillota y el Nicolás Chahuán Nazar de La Calera.",
    },
    rivalidades: [],
    records: [
      {
        tipo: "Ascensos consecutivos",
        descripcion:
          "Desde su ingreso a Tercera División B en 2013 avanzó por distintas categorías hasta alcanzar la Primera División en 2025. En ese recorrido obtuvo los campeonatos de Tercera B 2013 y Tercera A 2020, además del título de Segunda División Profesional 2023 y la liguilla de ascenso de Primera B 2024. Los títulos de Tercera B y Tercera A corresponden al fútbol amateur y no se contabilizan en el total de títulos profesionales.",
        dato: null,
        temporada: "2013-2024",
      },
      {
        tipo: "Subcampeonato",
        descripcion:
          "Disputó por primera vez la final de la Copa Chile y cayó ante Huachipato en la definición por penales, luego de empatar 1-1 en el tiempo reglamentario.",
        dato: "Subcampeón",
        temporada: "2025",
      },
      {
        tipo: "Ascenso a Primera División",
        descripcion:
          "Ganó la liguilla de ascenso de Primera B y consiguió el primer ascenso de su historia a la máxima categoría del fútbol chileno.",
        dato: "Liguilla de Ascenso",
        temporada: "2024",
      },
    ],
    jugadoresHistoricos: [
      {
        nombre: "Daniel Castro",
        posicion: "Delantero",
        periodo: "2025",
        descripcion:
          "Integrante del plantel que alcanzó la final de la Copa Chile 2025 y participó en la campaña del club en Primera División.",
      },
      {
        nombre: "Facundo Pons",
        posicion: "Delantero",
        periodo: "2025",
        descripcion:
          "Autor del gol de Deportes Limache en la final de la Copa Chile 2025 frente a Huachipato.",
      },
    ],
  },

  // =====================================================
  // 19. DEPORTES MELIPILLA
  // =====================================================
  {
    id: "deportes-melipilla",
    nombre: "Deportes Melipilla",
    escudo: null,
    apodo: "Potros",
    fundacion: 1992,
    ciudad: "Melipilla",
    pais: "Chile",
    estado: "Activo",
    historia:
      "Fundado el 24 de enero de 1992, Deportes Melipilla surgió como una nueva institución representativa de la ciudad y tomó el lugar de Soinca Bata en el fútbol profesional. Ha participado en distintas categorías del fútbol chileno y obtuvo los campeonatos de Primera B de 2004 y 2006. En 2026 se confirmó su descenso al fútbol amateur, tras una sanción relacionada con el incumplimiento de obligaciones salariales correspondientes a noviembre de 2025.",
    totalTitulosOficiales: 2,
    palmares: [
      {
        competencia: "Primera B",
        cantidad: 2,
        temporadas: ["2004", "2006"],
      },
    ],
    estadio: {
      nombre: "Estadio Municipal Roberto Bravo Santibáñez",
      ciudad: "Melipilla",
      capacidad: null,
      imagen: null,
      descripcion:
        "Estadio municipal de Melipilla utilizado como recinto local por Deportes Melipilla. El club también ha disputado encuentros en otros recintos durante periodos de remodelación o cambios de sede.",
    },
    rivalidades: [],
    records: [
      {
        tipo: "Campeonatos de Primera B",
        descripcion:
          "Obtuvo los campeonatos de Primera B de 2004 y 2006, temporadas que le permitieron alcanzar la máxima categoría del fútbol chileno.",
        dato: "2 títulos de Primera B",
        temporada: "2004 y 2006",
      },
      {
        tipo: "Descenso administrativo",
        descripcion:
          "El Tribunal de Penalidades de la ANFP ratificó su descenso al fútbol amateur por el incumplimiento del pago de remuneraciones correspondientes a noviembre de 2025.",
        dato: "Descenso a Tercera A",
        temporada: "2026",
      },
    ],
    jugadoresHistoricos: [],
  },

  // =====================================================
  // 20. DEPORTES PUERTO MONTT
  // =====================================================
  {
    id: "deportes-puerto-montt",
    nombre: "Deportes Puerto Montt",
    escudo: null,
    apodo: "Albiverdes",
    fundacion: 1983,
    ciudad: "Puerto Montt",
    pais: "Chile",
    estado: "Activo",
    historia:
      "Fundado el 6 de mayo de 1983 con el objetivo de establecer un club profesional que representara a Puerto Montt y a la zona austral de Chile. A lo largo de su historia ha participado en distintas categorías nacionales y ha obtenido el campeonato de Primera B en 2002 y títulos de Segunda División Profesional en 2014 y 2024.",
    totalTitulosOficiales: 3,
    palmares: [
      {
        competencia: "Primera B",
        cantidad: 1,
        temporadas: ["2002"],
      },
      {
        competencia: "Segunda División Profesional",
        cantidad: 2,
        temporadas: ["2014", "2024"],
      },
    ],
    estadio: {
      nombre: "Estadio Bicentenario Chinquihue",
      ciudad: "Puerto Montt",
      capacidad: null,
      imagen: null,
      descripcion:
        "Recinto deportivo ubicado en Puerto Montt y utilizado como estadio local por Deportes Puerto Montt. Se encuentra junto al seno de Reloncaví y es uno de los recintos representativos del fútbol de la zona austral.",
    },
    rivalidades: [],
    records: [
      {
        tipo: "Campeonato de Primera B",
        descripcion:
          "Se consagró campeón de Primera B en 2002 y consiguió el ascenso a la máxima categoría del fútbol chileno.",
        dato: "Campeón",
        temporada: "2002",
      },
      {
        tipo: "Campeonatos de Segunda División Profesional",
        descripcion:
          "Obtuvo los títulos de Segunda División Profesional de 2014 y 2024, logrando ascensos desde esa categoría.",
        dato: "2 títulos",
        temporada: "2014 y 2024",
      },
      {
        tipo: "Semifinales de Primera División",
        descripcion:
          "Alcanzó las semifinales del Torneo de Apertura de Primera División, en una de sus campañas destacadas en la máxima categoría.",
        dato: "Semifinalista",
        temporada: "2001",
      },
      {
        tipo: "Representación regional",
        descripcion:
          "Es uno de los clubes profesionales históricamente representativos de Puerto Montt y de la zona austral de Chile.",
        dato: null,
        temporada: null,
      },
    ],
    jugadoresHistoricos: [
      {
        nombre: "Víctor Cancino",
        posicion: "Por confirmar",
        periodo: "1996",
        descripcion:
          "Integrante del equipo que consiguió el primer ascenso de Deportes Puerto Montt a Primera División.",
      },
      {
        nombre: "Walter Otta",
        posicion: "Por confirmar",
        periodo: "1996",
        descripcion:
          "Integrante del equipo que logró el primer ascenso de Deportes Puerto Montt a Primera División.",
      },
    ],
  },

  // =====================================================
  // 21. DEPORTES VALDIVIA
  // =====================================================
  {
    id: "deportes-valdivia",
    nombre: "Deportes Valdivia",
    escudo: null,
    apodo: "Torreón",
    fundacion: 1983,
    ciudad: "Valdivia",
    pais: "Chile",
    estado: "Por confirmar",
    historia:
      "Club de fútbol de Valdivia fundado en 1983, conocido como el Torreón. Ha representado a la ciudad en competencias nacionales y ha participado en categorías profesionales y semiprofesionales del fútbol chileno. Su principal logro en el fútbol profesional fue el campeonato de Segunda División Profesional de la temporada 2016-2017, que le permitió ascender a Primera B. Se mantiene pendiente confirmar su situación competitiva e institucional más reciente antes de establecer su estado actual.",
    totalTitulosOficiales: 1,
    palmares: [
      {
        competencia: "Segunda División Profesional",
        cantidad: 1,
        temporadas: ["2016-2017"],
      },
    ],
    estadio: {
      nombre: "Estadio Félix Gallardo",
      ciudad: "Valdivia",
      capacidad: null,
      imagen: null,
      descripcion:
        "Recinto deportivo de Valdivia asociado a la localía del club. La institución también ha utilizado otros recintos de la ciudad en distintas etapas de su participación en competencias nacionales.",
    },
    rivalidades: [],
    records: [
      {
        tipo: "Campeonato de Segunda División Profesional",
        descripcion:
          "Se coronó campeón de Segunda División Profesional en la temporada 2016-2017 y consiguió el ascenso a Primera B.",
        dato: "Campeón",
        temporada: "2016-2017",
      },
    ],
    jugadoresHistoricos: [],
  },
   // =====================================================
  // 22. EVERTON
  // =====================================================
  {
    id: "everton",
    nombre: "Everton",
    escudo: null,
    apodo: "Ruleteros",
    fundacion: 1909,
    ciudad: "Viña del Mar",
    pais: "Chile",
    estado: "Activo",
    historia:
      "Fundado el 24 de junio de 1909, Everton es una institución futbolística de Viña del Mar. Se incorporó a los campeonatos nacionales profesionales en 1944 y se convirtió en uno de los clubes históricos del fútbol chileno. Ha conquistado cuatro campeonatos de Primera División, una Copa Chile y un título de Primera B. Su rivalidad con Santiago Wanderers es una de las más reconocidas del fútbol de la Región de Valparaíso.",
    totalTitulosOficiales: 6,
    palmares: [
      {
        competencia: "Primera División",
        cantidad: 4,
        temporadas: ["1950", "1952", "1976", "2008"],
      },
      {
        competencia: "Copa Chile",
        cantidad: 1,
        temporadas: ["1984"],
      },
      {
        competencia: "Primera B",
        cantidad: 1,
        temporadas: ["2003"],
      },
    ],
    estadio: {
      nombre: "Estadio Sausalito",
      ciudad: "Viña del Mar",
      capacidad: null,
      imagen: null,
      descripcion:
        "Estadio municipal de Viña del Mar y recinto habitual de localía de Everton. Fue una de las sedes de la Copa Mundial de Fútbol de 1962 y ha recibido importantes encuentros nacionales e internacionales.",
    },
    rivalidades: [
      {
        clubId: "santiago-wanderers",
        nombre: "Santiago Wanderers",
        descripcion:
          "Clásico Porteño, rivalidad histórica entre los clubes representativos de Viña del Mar y Valparaíso.",
      },
    ],
    records: [
      {
        tipo: "Campeonatos de Primera División",
        descripcion:
          "Ha obtenido cuatro títulos de la máxima categoría del fútbol chileno, en las temporadas 1950, 1952, 1976 y 2008.",
        dato: "4 títulos",
        temporada: "1950, 1952, 1976 y 2008",
      },
      {
        tipo: "Campeonato de Copa Chile",
        descripcion:
          "Conquistó la Copa Chile de 1984, uno de sus principales títulos nacionales.",
        dato: "Campeón",
        temporada: "1984",
      },
      {
        tipo: "Campeonato de Primera B",
        descripcion:
          "Obtuvo el título de Primera B en 2003 y consiguió el ascenso a la máxima categoría.",
        dato: "Campeón",
        temporada: "2003",
      },
    ],
    jugadoresHistoricos: [],
  },

  // =====================================================
  // 23. FERNÁNDEZ VIAL
  // =====================================================
  {
    id: "fernandez-vial",
    nombre: "Fernández Vial",
    escudo: null,
    apodo: "Inmortal",
    fundacion: 1897,
    ciudad: "Concepción",
    pais: "Chile",
    estado: "Por confirmar",
    historia:
      "Institución futbolística histórica de Concepción, cuyos orígenes se remontan a agrupaciones deportivas vinculadas a los trabajadores ferroviarios de la ciudad a fines del siglo XIX. Fue uno de los principales impulsores del fútbol en el sur de Chile y desarrolló una extensa trayectoria en competencias regionales y nacionales. En 1945 obtuvo el campeonato nacional amateur y en 1982 consiguió el título de Tercera División que le permitió ascender a Segunda División. Su historia institucional ha tenido etapas de reorganización y dificultades administrativas, por lo que se mantiene pendiente confirmar su continuidad y situación competitiva actual.",
    totalTitulosOficiales: 1,
    palmares: [
      {
        competencia: "Tercera División",
        cantidad: 1,
        temporadas: ["1982"],
      },
    ],
    estadio: {
      nombre: "Estadio Municipal de Concepción Ester Roa Rebolledo",
      ciudad: "Concepción",
      capacidad: null,
      imagen: null,
      descripcion:
        "Principal recinto deportivo de Concepción, utilizado por Fernández Vial en distintas etapas de su trayectoria. La localía puede variar según la temporada y la situación institucional del club.",
    },
    rivalidades: [
      {
        clubId: "deportes-concepcion",
        nombre: "Deportes Concepción",
        descripcion:
          "Clásico Penquista, rivalidad entre dos instituciones históricas de la ciudad de Concepción.",
      },
    ],
    records: [
      {
        tipo: "Campeonato nacional amateur",
        descripcion:
          "Obtuvo el primer lugar del campeonato nacional de fútbol amateur de 1945. Este logro corresponde a su trayectoria amateur y no se contabiliza como título profesional.",
        dato: "Campeón amateur",
        temporada: "1945",
      },
      {
        tipo: "Ascenso a Segunda División",
        descripcion:
          "Consiguió el título de Tercera División en 1982, resultado que le permitió ascender a la Segunda División del fútbol chileno.",
        dato: "Campeón de Tercera División",
        temporada: "1982",
      },
      {
        tipo: "Orígenes ferroviarios",
        descripcion:
          "Su tradición histórica está vinculada a los trabajadores ferroviarios de Concepción y al desarrollo del fútbol en el sur de Chile.",
        dato: null,
        temporada: "Desde fines del siglo XIX",
      },
    ],
    jugadoresHistoricos: [
      {
        nombre: "Nelson Acosta",
        posicion: "Defensa",
        periodo: "Década de 1970",
        descripcion:
          "Exfutbolista que vistió la camiseta de Fernández Vial antes de desarrollar una extensa trayectoria como entrenador.",
      },
      {
        nombre: "Mario Alberto Kempes",
        posicion: "Delantero",
        periodo: "Década de 1990",
        descripcion:
          "Destacado futbolista argentino que tuvo un paso por Fernández Vial durante la etapa final de su carrera como jugador.",
      },
      {
        nombre: "Horacio Muñoz",
        posicion: "Por confirmar",
        periodo: "Por confirmar",
        descripcion:
          "Figura histórica vinculada a los primeros años del club y a su tradición futbolística en Concepción.",
      },
    ],
  },

  // =====================================================
  // 24. FERROBADMINTON
  // =====================================================
  {
    id: "ferrobadminton",
    nombre: "Ferrobádminton",
    escudo: null,
    apodo: "Ferro",
    fundacion: 1950,
    ciudad: "Santiago",
    pais: "Chile",
    estado: "Desaparecido",
    historia:
      "Club formado el 23 de febrero de 1950 mediante la fusión de Ferroviarios y Badminton. Participó en la Primera y Segunda División del fútbol chileno. En 1965 obtuvo el campeonato de Segunda División y ascendió a Primera. La fusión se disolvió el 8 de enero de 1969, luego de que los dirigentes de Badminton decidieran separarse y trasladarse a Curicó, mientras Ferroviarios recuperó su identidad institucional.",
    totalTitulosOficiales: 1,
    palmares: [
      {
        competencia: "Segunda División",
        cantidad: 1,
        temporadas: ["1965"],
      },
    ],
    estadio: {
      nombre: "Estadio San Eugenio",
      ciudad: "Santiago",
      capacidad: null,
      imagen: null,
      descripcion:
        "Recinto vinculado a la localía del club durante su existencia y asociado históricamente a la actividad deportiva ferroviaria en Santiago.",
    },
    rivalidades: [],
    records: [
      {
        tipo: "Fusión institucional",
        descripcion:
          "Se constituyó mediante la unión de Ferroviarios y Badminton. La fusión se disolvió en enero de 1969, cuando ambos clubes retomaron caminos institucionales separados.",
        dato: null,
        temporada: "1950-1969",
      },
      {
        tipo: "Campeonato de Segunda División",
        descripcion:
          "Se coronó campeón de Segunda División en 1965 y consiguió el ascenso a Primera División.",
        dato: "Campeón",
        temporada: "1965",
      },
      {
        tipo: "Participación en Primera División",
        descripcion:
          "Participó en la máxima categoría del fútbol chileno durante las temporadas posteriores a su ascenso de 1965.",
        dato: null,
        temporada: "1966",
      },
    ],
    jugadoresHistoricos: [],
  },

  // =====================================================
  // 25. FERROVIARIOS
  // =====================================================
  {
    id: "ferroviarios",
    nombre: "Ferroviarios",
    escudo: null,
    apodo: "Ferro",
    fundacion: 1916,
    ciudad: "Santiago",
    pais: "Chile",
    estado: "Activo",
    historia:
      "Club deportivo chileno de tradición ferroviaria, fundado el 14 de julio de 1916. Participó en el fútbol nacional y obtuvo campeonatos de ascenso antes de la creación de la Segunda División bajo su formato posterior. En 1950 se fusionó con Badminton para formar Ferrobádminton. Tras la disolución de esa fusión en 1969, Ferroviarios recuperó su identidad y continuó compitiendo en categorías del fútbol chileno. Su trayectoria posterior incluyó participación en divisiones de ascenso y amateur.",
    totalTitulosOficiales: 2,
    palmares: [
      {
        competencia: "División de Ascenso",
        cantidad: 2,
        temporadas: ["1947", "1948"],
      },
    ],
    estadio: {
      nombre: "Estadio San Eugenio",
      ciudad: "Santiago",
      capacidad: null,
      imagen: null,
      descripcion:
        "Antiguo recinto asociado al club y a la actividad deportiva ferroviaria. El equipo cambió de recinto y ubicación en etapas posteriores.",
    },
    rivalidades: [],
    records: [
      {
        tipo: "Campeonatos consecutivos",
        descripcion:
          "Conquistó dos temporadas consecutivas de la División de Ascenso, en 1947 y 1948.",
        dato: "2 títulos",
        temporada: "1947 y 1948",
      },
      {
        tipo: "Fusión institucional",
        descripcion:
          "En 1950 se fusionó con Badminton para formar Ferrobádminton. Tras la separación de 1969, Ferroviarios recuperó su identidad y continuó su trayectoria deportiva.",
        dato: null,
        temporada: "1950-1969",
      },
      {
        tipo: "Antecedente amateur",
        descripcion:
          "Obtuvo el título de División de Honor Amateur de 1949. Este campeonato se conserva como antecedente histórico y no se contabiliza dentro de los títulos profesionales.",
        dato: "Campeón amateur",
        temporada: "1949",
      },
    ],
    jugadoresHistoricos: [
      {
        nombre: "Luis Eyzaguirre",
        posicion: "Defensa",
        periodo: "1972",
        descripcion:
          "Integró el plantel de Ferroviarios que realizó una destacada campaña en Segunda División durante 1972. Fue seleccionado chileno y participó en la Copa Mundial de 1962.",
      },
      {
        nombre: "Leonel Sánchez",
        posicion: "Delantero",
        periodo: "1972",
        descripcion:
          "Histórico futbolista chileno que formó parte del plantel de Ferroviarios durante su campaña de Segunda División de 1972.",
      },
    ],
  },

  // =====================================================
  // 26. DEPORTES TEMUCO
  // =====================================================
  {
    id: "deportes-temuco",
    nombre: "Deportes Temuco",
    escudo: null,
    apodo: "Pije",
    fundacion: 1960,
    ciudad: "Temuco",
    pais: "Chile",
    estado: "Activo",
    historia:
      "Fundado el 26 de febrero de 1960 como una institución representativa de Temuco. En 1965 se fusionó con Green Cross, club que había obtenido el campeonato de Primera División de 1945 y los títulos de ascenso de 1960 y 1963. La institución fusionada mantuvo una trayectoria en el fútbol profesional y posteriormente adoptó el nombre de Deportes Temuco. Su palmarés histórico comprende un campeonato de Primera División y cinco títulos de Primera B, considerando los logros reconocidos de Green Cross dentro de la continuidad institucional.",
    totalTitulosOficiales: 6,
    palmares: [
      {
        competencia: "Primera División",
        cantidad: 1,
        temporadas: ["1945 (Green Cross, título incorporado mediante fusión)"],
      },
      {
        competencia: "Primera B",
        cantidad: 5,
        temporadas: ["1960", "1963", "1991", "2001", "2015-2016"],
      },
    ],
    estadio: {
      nombre: "Estadio Municipal Bicentenario Germán Becker",
      ciudad: "Temuco",
      capacidad: 18100,
      imagen: null,
      descripcion:
        "Estadio municipal de Temuco y recinto habitual de localía del club. Fue remodelado para la Copa Mundial Femenina Sub-20 de 2008 y es uno de los principales recintos deportivos de la Región de La Araucanía.",
    },
    rivalidades: [],
    records: [
      {
        tipo: "Campeonato de Primera División",
        descripcion:
          "El título de Primera División de 1945 fue obtenido por Green Cross y forma parte del palmarés histórico reconocido de la institución tras su fusión con Deportes Temuco.",
        dato: "Campeón",
        temporada: "1945",
      },
      {
        tipo: "Títulos de Primera B",
        descripcion:
          "La institución registra cinco campeonatos de Primera B: dos obtenidos por Green Cross en 1960 y 1963, y tres por Deportes Temuco en 1991, 2001 y 2015-2016.",
        dato: "5 títulos",
        temporada: "1960, 1963, 1991, 2001 y 2015-2016",
      },
      {
        tipo: "Fusión institucional",
        descripcion:
          "En 1965 se fusionó con Green Cross, institución que aportó su historia deportiva y títulos nacionales. La entidad fusionada pasó posteriormente a utilizar el nombre de Deportes Temuco.",
        dato: null,
        temporada: "1965",
      },
      {
        tipo: "Participación internacional",
        descripcion:
          "Clasificó a la Copa Sudamericana después de su campaña en Primera División.",
        dato: "Copa Sudamericana",
        temporada: "2018",
      },
    ],
    jugadoresHistoricos: [],
  },

  // =====================================================
  // 27. HUACHIPATO
  // =====================================================
  {
    id: "huachipato",
    nombre: "Huachipato",
    escudo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Escudo%20Huachipato%20FC.svg",
    apodo: "Acereros",
    fundacion: 1947,
    ciudad: "Talcahuano",
    pais: "Chile",
    estado: "Activo",
    historia:
      "Institución deportiva de Talcahuano fundada el 7 de junio de 1947, vinculada históricamente al desarrollo industrial de la zona y a la actividad de la siderúrgica Huachipato. Ingresó al fútbol profesional en 1965 y obtuvo el campeonato de Segunda División en 1966, logrando el ascenso a Primera División. Ha conquistado tres campeonatos de Primera División, en 1974, el Clausura 2012 y 2023. En 2025 obtuvo su primera Copa Chile al vencer a Deportes Limache en definición por penales. También ha representado al fútbol chileno en competiciones continentales como la Copa Libertadores y la Copa Sudamericana.",
    totalTitulosOficiales: 5,
    palmares: [
      {
        competencia: "Primera División",
        cantidad: 3,
        temporadas: ["1974", "2012 (Clausura)", "2023"],
      },
      {
        competencia: "Segunda División",
        cantidad: 1,
        temporadas: ["1966"],
      },
      {
        competencia: "Copa Chile",
        cantidad: 1,
        temporadas: ["2025"],
      },
    ],
    estadio: {
      nombre: "Estadio Huachipato-CAP Acero",
      ciudad: "Talcahuano",
      capacidad: 10500,
      imagen:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Estadio%20CAP.jpg",
      descripcion:
        "Estadio ubicado en el sector Las Higueras de Talcahuano, construido en el mismo terreno del antiguo Estadio Las Higueras. Fue inaugurado oficialmente el 4 de noviembre de 2009 y es el recinto habitual de localía del club. Su capacidad publicada es de 10.500 espectadores.",
    },
    rivalidades: [
      {
        clubId: "naval",
        nombre: "Naval",
        descripcion:
          "Clásico Chorero o Clásico de Talcahuano, enfrentamiento entre los clubes representativos de la ciudad. Sus antecedentes se remontan al Campeonato Regional de Concepción y posteriormente tuvo encuentros en el fútbol profesional. La rivalidad se reanudó en competiciones oficiales durante la Copa Chile 2013-2014.",
      },
      {
        clubId: "deportes-concepcion",
        nombre: "Deportes Concepción",
        descripcion:
          "Clásico del Gran Concepción, rivalidad regional entre Huachipato, representante de Talcahuano, y Deportes Concepción, representante de la capital regional. Ambos clubes han coincidido en competencias nacionales y sus enfrentamientos forman parte de las rivalidades del fútbol del Biobío.",
      },
    ],
    records: [
      {
        tipo: "Campeonatos de Primera División",
        descripcion:
          "Ha obtenido tres títulos de la máxima categoría del fútbol chileno: 1974, Clausura 2012 y 2023.",
        dato: "3 títulos",
        temporada: "1974, Clausura 2012 y 2023",
      },
      {
        tipo: "Campeonato de Segunda División",
        descripcion:
          "Se coronó campeón de Segunda División en 1966, un año después de ingresar al fútbol profesional, y consiguió el ascenso a Primera División.",
        dato: "Campeón",
        temporada: "1966",
      },
      {
        tipo: "Primera Copa Chile",
        descripcion:
          "Obtuvo por primera vez la Copa Chile tras empatar 1-1 con Deportes Limache en la final y ganar 4-3 en la definición por penales.",
        dato: "Campeón",
        temporada: "2025",
      },
      {
        tipo: "Final de Copa Chile",
        descripcion:
          "Disputó la final de la Copa Chile frente a Deportes Iquique y terminó como subcampeón.",
        dato: "Subcampeón",
        temporada: "2013-2014",
      },
      {
        tipo: "Copa Libertadores",
        descripcion:
          "Ha participado en cuatro ediciones de la Copa Libertadores. Alcanzó la fase de grupos en 1975, 2013 y 2024; en 2026 disputó la segunda fase preliminar.",
        dato: "4 participaciones",
        temporada: "1975, 2013, 2024 y 2026",
      },
      {
        tipo: "Copa Sudamericana",
        descripcion:
          "Ha participado en seis ediciones de la Copa Sudamericana. Sus mejores campañas fueron las de 2014 y 2024, cuando alcanzó los octavos de final.",
        dato: "6 participaciones",
        temporada: "2006, 2014, 2015, 2020, 2021 y 2024",
      },
      {
        tipo: "Máximo goleador histórico",
        descripcion:
          "Héctor Mancilla es reconocido como el máximo goleador histórico de Huachipato, con 72 anotaciones.",
        dato: "72 goles",
        temporada: "Trayectoria en Huachipato",
      },
      {
        tipo: "Jugador con más presencias",
        descripcion:
          "Claudio Sepúlveda superó el registro histórico de partidos disputados con la camiseta acerera y se convirtió en el jugador con más presencias del club en la era reciente.",
        dato: "Más de 335 partidos",
        temporada: "2015-presente",
      },
    ],
    jugadoresHistoricos: [
      {
        nombre: "Héctor Mancilla",
        posicion: "Delantero",
        periodo: "Etapa profesional en Huachipato",
        descripcion:
          "Máximo goleador histórico del club, con 72 goles. Su rendimiento en Huachipato lo proyectó a otros equipos del fútbol chileno y mexicano.",
      },
      {
        nombre: "Claudio Sepúlveda",
        posicion: "Mediocampista",
        periodo: "2015-presente",
        descripcion:
          "Capitán y referente del equipo en la etapa reciente. Superó el registro histórico de presencias con la camiseta acerera.",
      },
      {
        nombre: "Gabriel Sandoval",
        posicion: "Mediocampista",
        periodo: "Etapa profesional en Huachipato",
        descripcion:
          "Futbolista que mantuvo durante años el registro de mayor cantidad de partidos disputados por Huachipato, antes de ser superado por Claudio Sepúlveda.",
      },
      {
        nombre: "Cris Martínez",
        posicion: "Delantero",
        periodo: "2019-presente",
        descripcion:
          "Delantero paraguayo nacionalizado chileno y figura de la etapa reciente del club. Fue uno de los jugadores destacados en la campaña que culminó con el título de Primera División 2023.",
      },
      {
        nombre: "Fernando Vergara",
        posicion: "Delantero",
        periodo: "Década de 1990",
        descripcion:
          "Delantero chileno que integró planteles de Huachipato durante su trayectoria en el fútbol nacional.",
      },
      {
        nombre: "Mauricio Aros",
        posicion: "Defensa",
        periodo: "Década de 1990",
        descripcion:
          "Defensor chileno que vistió la camiseta de Huachipato antes de desarrollar una extensa carrera en clubes nacionales y en la selección chilena.",
      },
    ],
  },
   // =====================================================
  // 28. LOTA SCHWAGER
  // =====================================================
  {
    id: "lota-schwager",
    nombre: "Lota Schwager",
    escudo: "Por confirmar: incorporar archivo de escudo verificado",
    apodo: "Lamparita, Mineros, Carboníferos",
    fundacion: 1966,
    ciudad: "Coronel",
    pais: "Chile",
    estado: "Activo",
    historia:
      "Club fundado el 10 de mayo de 1966 mediante la fusión de Minas Lota y Federico Schwager, equipos vinculados a las empresas carboníferas de la zona. Ingresó a Segunda División ese mismo año y obtuvo el campeonato en 1969, logrando por primera vez el ascenso a Primera División, categoría en la que compitió hasta 1980. Volvió a ser campeón de Segunda División en 1986 y retornó a Primera. Tras una etapa de dificultades institucionales y la interrupción de su actividad, retomó la competencia en 2001 y ganó la Tercera División. Su historia está estrechamente relacionada con la identidad minera de Lota y Coronel.",
    totalTitulosOficiales: 2,
    palmares: [
      {
        competencia: "Segunda División",
        cantidad: 2,
        temporadas: ["1969", "1986"],
      },
    ],
    estadio: {
      nombre: "Estadio Municipal Federico Schwager",
      ciudad: "Coronel",
      capacidad: 2500,
      imagen: "Por confirmar: incorporar fotografía verificada del estadio",
      descripcion:
        "Recinto municipal de Coronel construido en 1945 y asociado históricamente a Lota Schwager y al fútbol de la zona minera. Su capacidad publicada tras remodelaciones recientes es de aproximadamente 2.500 espectadores. El club también ha utilizado el Estadio Bernardino Luna en determinados periodos.",
    },
    rivalidades: [
      {
        clubId: "deportes-concepcion",
        nombre: "Deportes Concepción",
        descripcion:
          "Rivalidad regional conocida como Clásico del Biobío, entre dos instituciones históricas del fútbol de la Región del Biobío.",
      },
      {
        clubId: "fernandez-vial",
        nombre: "Fernández Vial",
        descripcion:
          "Enfrentamiento entre clubes históricos de la zona del Gran Concepción, vinculados a la tradición futbolística e industrial del Biobío.",
      },
    ],
    records: [
      {
        tipo: "Primer título profesional",
        descripcion:
          "Obtuvo el campeonato de Segunda División de 1969, que le permitió ascender por primera vez a Primera División.",
        dato: "Campeón y ascenso",
        temporada: "1969",
      },
      {
        tipo: "Segundo título de Segunda División",
        descripcion:
          "Volvió a conquistar la Segunda División en 1986 y consiguió un nuevo ascenso a Primera División.",
        dato: "Campeón y ascenso",
        temporada: "1986",
      },
      {
        tipo: "Campeonato de Tercera División",
        descripcion:
          "Tras retomar su actividad competitiva en 2001, ganó la Tercera División. Este título corresponde a su etapa amateur y no se contabiliza en el total de títulos profesionales.",
        dato: "Campeón",
        temporada: "2001",
      },
      {
        tipo: "Final de Copa Chile",
        descripcion:
          "Alcanzó la final de la Copa Chile y terminó como subcampeón.",
        dato: "Subcampeón",
        temporada: "1975",
      },
      {
        tipo: "Trayectoria en Primera División",
        descripcion:
          "Participó en la máxima categoría en distintas etapas, incluyendo el periodo posterior a sus ascensos de 1969 y 1986.",
        dato: "Participaciones en Primera División",
        temporada: "1970-1980 y 1987",
      },
    ],
    jugadoresHistoricos: [],
  },

  // =====================================================
  // 29. MAGALLANES
  // =====================================================
  {
    id: "magallanes",
    nombre: "Magallanes",
    escudo: "Por confirmar: incorporar archivo de escudo oficial verificado",
    apodo: "La Academia, Carabeleros",
    fundacion: 1897,
    ciudad: "San Bernardo",
    pais: "Chile",
    estado: "Activo",
    historia:
      "Fundado el 27 de octubre de 1897 en Santiago, inicialmente como Club Atlético Escuela Normal, por estudiantes de la Escuela Normal de Preceptores. Adoptó el nombre Magallanes en 1904. Fue uno de los clubes fundadores del fútbol profesional chileno y el primer campeón de la Primera División profesional en 1933. Conquistó el tricampeonato entre 1933 y 1935 y obtuvo un cuarto título de Primera División en 1938. En la etapa reciente ganó la Primera B y la Copa Chile en 2022, además de la Supercopa de Chile en 2023.",
    totalTitulosOficiales: 7,
    palmares: [
      {
        competencia: "Primera División",
        cantidad: 4,
        temporadas: ["1933", "1934", "1935", "1938"],
      },
      {
        competencia: "Copa Chile",
        cantidad: 1,
        temporadas: ["2022"],
      },
      {
        competencia: "Supercopa de Chile",
        cantidad: 1,
        temporadas: ["2023"],
      },
      {
        competencia: "Primera B",
        cantidad: 1,
        temporadas: ["2022"],
      },
    ],
    estadio: {
      nombre: "Estadio Municipal de San Bernardo",
      ciudad: "San Bernardo",
      capacidad: 3500,
      imagen: "Por confirmar: incorporar fotografía verificada del estadio",
      descripcion:
        "Recinto municipal utilizado como local por Magallanes en su etapa reciente. Está ubicado en San Bernardo, comuna donde el club ha establecido su sede deportiva. La capacidad exacta debe contrastarse con la ficha municipal o del recinto antes de publicarla como dato definitivo.",
    },
    rivalidades: [
      {
        clubId: "colo-colo",
        nombre: "Colo-Colo",
        descripcion:
          "Enfrentamiento histórico entre dos clubes fundadores del profesionalismo chileno. Sus primeros duelos forman parte de los antecedentes del fútbol profesional nacional; no se presenta aquí como un clásico oficial con denominación única.",
      },
    ],
    records: [
      {
        tipo: "Primer campeón profesional",
        descripcion:
          "Fue el primer campeón de la Primera División profesional chilena, al ganar el torneo inaugural de 1933.",
        dato: "Primer campeón",
        temporada: "1933",
      },
      {
        tipo: "Tricampeonato",
        descripcion:
          "Conquistó tres campeonatos consecutivos de Primera División, una marca histórica del fútbol chileno.",
        dato: "3 títulos consecutivos",
        temporada: "1933-1935",
      },
      {
        tipo: "Cuarto campeonato de Primera División",
        descripcion:
          "Obtuvo su cuarto título de Primera División en 1938.",
        dato: "Campeón",
        temporada: "1938",
      },
      {
        tipo: "Doble título nacional",
        descripcion:
          "En 2022 ganó tanto la Primera B como la Copa Chile, consiguiendo el ascenso a Primera División y una clasificación internacional.",
        dato: "Primera B y Copa Chile",
        temporada: "2022",
      },
      {
        tipo: "Supercopa de Chile",
        descripcion:
          "Conquistó la Supercopa de Chile 2023 al derrotar a Colo-Colo en la definición por penales.",
        dato: "Campeón",
        temporada: "2023",
      },
    ],
    jugadoresHistoricos: [
      {
        nombre: "Arturo Torres",
        posicion: "Delantero",
        periodo: "Década de 1930",
        descripcion:
          "Integrante de la etapa histórica de Magallanes durante sus primeros campeonatos profesionales.",
      },
      {
        nombre: "Guillermo Ogaz",
        posicion: "Por confirmar",
        periodo: "Década de 1930",
        descripcion:
          "Vinculado a los planteles históricos de Magallanes que dominaron los primeros torneos profesionales.",
      },
      {
        nombre: "Nicolás Núñez",
        posicion: "Mediocampista",
        periodo: "2006-2011; 2014-2015",
        descripcion:
          "Referente de Magallanes en la etapa contemporánea y posteriormente entrenador del club, con participación en el proceso que culminó con los títulos de 2022.",
      },
      {
        nombre: "César Cortés",
        posicion: "Mediocampista",
        periodo: "2021-2023",
        descripcion:
          "Capitán y figura del plantel que consiguió la Primera B y la Copa Chile en 2022, además de la Supercopa de Chile en 2023.",
      },
      {
        nombre: "Alfredo Ábalos",
        posicion: "Delantero",
        periodo: "2021-2023",
        descripcion:
          "Delantero destacado del plantel que obtuvo los títulos nacionales de 2022 y la Supercopa de 2023.",
      },
    ],
  },

  // =====================================================
  // 30. METROPOLITANO
  // =====================================================
  {
    id: "metropolitano",
    nombre: "Metropolitano",
    escudo: "Por confirmar: no se encontró un archivo de escudo verificado",
    apodo: "Metropolitano",
    fundacion: 1933,
    ciudad: "Santiago",
    pais: "Chile",
    estado: "Desaparecido",
    historia:
      "Club de fútbol fundado el 23 de agosto de 1933 en el sector norte de Santiago. Sus primeros jugadores provenían del Club Deportivo Nacional de Recoleta. Participó en torneos de la Asociación Santiago y ganó los campeonatos de Apertura de 1936 y 1937, resultados que le permitieron ingresar a la Serie B profesional. En 1938 obtuvo el campeonato de Serie B y ascendió a Primera División para la temporada 1939. En su única campaña en Primera disputó nueve partidos, consiguió un empate y no logró victorias. En febrero de 1940 se fusionó con Juventus para formar Metropolitano-Juventus; posteriormente tuvo nuevas reorganizaciones institucionales y dejó de competir bajo su identidad original.",
    totalTitulosOficiales: 1,
    palmares: [
      {
        competencia: "Serie B Profesional",
        cantidad: 1,
        temporadas: ["1938"],
      },
    ],
    estadio: {
      nombre: "Estadio de Carabineros",
      ciudad: "Santiago",
      capacidad: 0,
      imagen: "Por confirmar: incorporar fotografía histórica verificada",
      descripcion:
        "El Estadio de Carabineros fue el recinto donde Metropolitano disputó su debut en Primera División el 16 de abril de 1939. No se ha confirmado en las fuentes consultadas que fuera su estadio habitual durante toda su trayectoria. Capacidad no confirmada; el valor 0 es un marcador técnico pendiente de reemplazo, no una capacidad real.",
    },
    rivalidades: [],
    records: [
      {
        tipo: "Campeonato de Serie B Profesional",
        descripcion:
          "Obtuvo el campeonato de Serie B de 1938 y consiguió el ascenso a Primera División.",
        dato: "Campeón",
        temporada: "1938",
      },
      {
        tipo: "Participación en Primera División",
        descripcion:
          "Disputó por primera y única vez la máxima categoría en 1939. Jugó nueve partidos, registró un empate y terminó en la última posición del campeonato.",
        dato: "9 partidos; 1 empate",
        temporada: "1939",
      },
      {
        tipo: "Campeonatos de Apertura de la Asociación Santiago",
        descripcion:
          "Ganó los torneos de Apertura de la Asociación Santiago en dos temporadas consecutivas, antes de ingresar a la Serie B profesional.",
        dato: "2 campeonatos",
        temporada: "1936 y 1937",
      },
      {
        tipo: "Fusión institucional",
        descripcion:
          "Se fusionó con Juventus en febrero de 1940 para formar Metropolitano-Juventus, una institución de corta duración.",
        dato: "Fusión con Juventus",
        temporada: "1940",
      },
    ],
    jugadoresHistoricos: [],
  },

   // =====================================================
  // 31. MORNING STAR
  // =====================================================
  {
    id: "morning-star",
    nombre: "Morning Star",
    escudo: "Por confirmar: archivo histórico del escudo no localizado",
    apodo: "Los Azules",
    fundacion: 1907,
    ciudad: "Santiago",
    pais: "Chile",
    estado: "Desaparecido",
    historia:
      "Fue fundado el 2 de abril de 1907 en el barrio Independencia de Santiago, inicialmente como Small Chile Football Club. En 1909 adoptó el nombre Morning Star Sport Club. Fue uno de los ocho clubes fundadores de la Liga Profesional de Football de Santiago en 1933 y disputó sus dos primeras temporadas de Primera División profesional. En 1936 se fusionó con el Club de Deportes Santiago, dando origen a Santiago Morning.",
    totalTitulosOficiales: 0,
    palmares: [],
    estadio: {
      nombre: "Por confirmar: estadio propio no identificado",
      ciudad: "Santiago",
      capacidad: 0,
      imagen: "Por confirmar: imagen histórica del estadio",
      descripcion:
        "No se ha confirmado un estadio propio específico para esta ficha. La capacidad se deja en 0 como marcador técnico, no como aforo real.",
    },
    rivalidades: [],
    records: [
      {
        tipo: "Club fundador",
        descripcion:
          "Integró el grupo de ocho clubes fundadores de la Liga Profesional de Football de Santiago, en 1933.",
        dato: "1 de 8 clubes fundadores",
        temporada: "1933",
      },
      {
        tipo: "Participación en Primera División",
        descripcion:
          "Disputó las temporadas profesionales de Primera División de 1933 y 1934. Su mejor ubicación fue el sexto lugar en 1933.",
        dato: "2 temporadas; mejor puesto: 6.º",
        temporada: "1933-1934",
      },
      {
        tipo: "Máximo goleador en Primera División",
        descripcion:
          "Humberto Roa fue señalado como máximo goleador del club en Primera División.",
        dato: "7 goles",
        temporada: "1933-1934",
      },
      {
        tipo: "Fusión institucional",
        descripcion:
          "Se fusionó con el Club de Deportes Santiago para formar Santiago Morning.",
        dato: "Fusión con Club de Deportes Santiago",
        temporada: "1936",
      },
      {
        tipo: "Subcampeonato",
        descripcion:
          "Fue subcampeón del Torneo de Consuelo del Campeonato de Apertura de Chile.",
        dato: "Subcampeón",
        temporada: "1933",
      },
    ],
    jugadoresHistoricos: [
      {
        nombre: "Humberto Roa",
        posicion: "Delantero",
        periodo: "Década de 1930",
        descripcion:
          "Registrado como máximo goleador del Morning Star en Primera División, con siete goles.",
      },
    ],
  },

  // =====================================================
  // 32. NAVAL
  // =====================================================
  {
    id: "naval",
    nombre: "Naval",
    escudo: "Por confirmar: archivo oficial del escudo",
    apodo: "Los Choreros",
    fundacion: 1944,
    ciudad: "Talcahuano",
    pais: "Chile",
    estado: "Por confirmar",
    historia:
      "Naval de Talcahuano fue fundado el 21 de mayo de 1944 como una institución vinculada a la Armada de Chile y al puerto de Talcahuano. Tuvo una extensa trayectoria en el fútbol regional y profesional, y fue campeón de Segunda División en 1971. La institución histórica fue disuelta por la Armada en 1991. Debido a que la denominación Naval también se ha utilizado en etapas posteriores del fútbol de Talcahuano, esta ficha debe distinguir la historia del club original de la continuidad institucional de las entidades posteriores.",
    totalTitulosOficiales: 1,
    palmares: [
      {
        competencia: "Segunda División de Chile",
        cantidad: 1,
        temporadas: ["1971"],
      },
    ],
    estadio: {
      nombre: "Estadio El Morro Ramón Unzaga Asla",
      ciudad: "Talcahuano",
      capacidad: 7200,
      imagen: "Por confirmar: imagen con licencia y URL verificada",
      descripcion:
        "Recinto histórico de Talcahuano conocido como Estadio El Morro. Fue utilizado como local por Naval y es reconocido por su larga relación con el fútbol del puerto.",
    },
    rivalidades: [
      {
        clubId: "huachipato",
        nombre: "Huachipato",
        descripcion:
          "Rivalidad local de Talcahuano, asociada a la competencia futbolística entre instituciones de la ciudad.",
      },
      {
        clubId: "lota-schwager",
        nombre: "Lota Schwager",
        descripcion:
          "Enfrentamientos entre clubes de la Región del Biobío; no se confirma aquí una denominación oficial específica para la rivalidad.",
      },
    ],
    records: [
      {
        tipo: "Campeón de Segunda División",
        descripcion:
          "Obtuvo el campeonato de Segunda División del fútbol profesional chileno.",
        dato: "Campeón",
        temporada: "1971",
      },
      {
        tipo: "Representación internacional",
        descripcion:
          "En 1952 fue designado para representar a Chile en el torneo de fútbol de los Juegos Olímpicos de Helsinki, según la historia institucional consultada.",
        dato: "Representante chileno en Helsinki",
        temporada: "1952",
      },
      {
        tipo: "Campeonatos regionales",
        descripcion:
          "La historia del club registra múltiples títulos del Campeonato Regional de Concepción durante su etapa amateur.",
        dato: "8 campeonatos regionales, según la fuente consultada",
        temporada: "Etapa amateur",
      },
      {
        tipo: "Disolución institucional",
        descripcion:
          "La Armada de Chile disolvió la institución histórica por problemas presupuestarios.",
        dato: "Disolución del club histórico",
        temporada: "1991",
      },
    ],
    jugadoresHistoricos: [
      {
        nombre: "Raúl Acevedo",
        posicion: "Por confirmar",
        periodo: "Décadas de 1940-1950",
        descripcion:
          "Mencionado entre los futbolistas de la etapa histórica de Naval en los campeonatos regionales.",
      },
      {
        nombre: "Isaac Carrasco",
        posicion: "Por confirmar",
        periodo: "Décadas de 1940-1950",
        descripcion:
          "Mencionado entre los jugadores destacados de la etapa regional del club.",
      },
      {
        nombre: "Rubén González",
        posicion: "Por confirmar",
        periodo: "Décadas de 1940-1950",
        descripcion:
          "Mencionado en la historia del club entre los futbolistas de su etapa regional.",
      },
      {
        nombre: "Manuel Roa",
        posicion: "Por confirmar",
        periodo: "Décadas de 1940-1950",
        descripcion:
          "Recordado con el apodo de “Candado” en la reseña histórica consultada.",
      },
    ],
  },

  // =====================================================
  // 33. O'HIGGINS
  // =====================================================
  {
    id: "ohiggins",
    nombre: "O'Higgins",
    escudo: "Por confirmar: utilizar el escudo oficial desde el sitio del club",
    apodo: "La Celeste",
    fundacion: 1955,
    ciudad: "Rancagua",
    pais: "Chile",
    estado: "Activo",
    historia:
      "O'Higgins fue fundado el 7 de abril de 1955 en Rancagua, producto de la fusión de los clubes O'Higgins Braden y América. La unión se realizó para que la ciudad contara con una institución que pudiera competir en Primera División. El club ha desarrollado su historia en el fútbol profesional chileno y obtuvo su primer título de Primera División en el Torneo de Apertura 2013-14. También ganó la Supercopa de Chile en 2014 y la Segunda División en 1964.",
    totalTitulosOficiales: 3,
    palmares: [
      {
        competencia: "Primera División de Chile",
        cantidad: 1,
        temporadas: ["Apertura 2013-14"],
      },
      {
        competencia: "Supercopa de Chile",
        cantidad: 1,
        temporadas: ["2014"],
      },
      {
        competencia: "Segunda División de Chile",
        cantidad: 1,
        temporadas: ["1964"],
      },
    ],
    estadio: {
      nombre: "Estadio Codelco El Teniente",
      ciudad: "Rancagua",
      capacidad: 12476,
      imagen: "Por confirmar: imagen con licencia y URL verificada",
      descripcion:
        "Estadio de localía de O'Higgins en Rancagua. Fue una de las sedes de la Copa Mundial de 1962 y recibió partidos de la Copa América 2015 tras su remodelación.",
    },
    rivalidades: [
      {
        clubId: "rangers",
        nombre: "Rangers de Talca",
        descripcion:
          "Rivalidad regional entre instituciones de las regiones de O'Higgins y Maule. Confirmar la denominación histórica específica antes de presentarla como clásico oficial.",
      },
    ],
    records: [
      {
        tipo: "Fundación por fusión",
        descripcion:
          "Nació de la fusión de O'Higgins Braden y América de Rancagua.",
        dato: "Fusión de dos clubes rancagüinos",
        temporada: "1955",
      },
      {
        tipo: "Primera participación internacional",
        descripcion:
          "Clasificó por primera vez a la Copa Libertadores tras su campaña de 1978.",
        dato: "Primera clasificación a Copa Libertadores",
        temporada: "1978",
      },
      {
        tipo: "Campeón de Primera División",
        descripcion:
          "Ganó el Torneo de Apertura y obtuvo su primer campeonato de la máxima categoría.",
        dato: "Campeón",
        temporada: "Apertura 2013-14",
      },
      {
        tipo: "Campeón de Supercopa",
        descripcion:
          "Venció a Deportes Iquique en definición por penales luego de empatar 1-1 en el tiempo reglamentario.",
        dato: "Victoria por penales",
        temporada: "2014",
      },
    ],
    jugadoresHistoricos: [
      {
        nombre: "Mario Desiderio",
        posicion: "Delantero",
        periodo: "Década de 1960",
        descripcion:
          "Figura histórica del club; anotó el gol que aseguró el campeonato de Segunda División de 1964.",
      },
      {
        nombre: "Juvenal Vargas",
        posicion: "Por confirmar",
        periodo: "Década de 1970",
        descripcion:
          "Autor del gol decisivo ante Unión Española en 1978 que permitió a O'Higgins disputar por primera vez la Copa Libertadores.",
      },
      {
        nombre: "Miguel Ángel Neira",
        posicion: "Mediocampista",
        periodo: "Décadas de 1970-1980",
        descripcion:
          "Mencionado por el club entre las figuras importantes de su historia deportiva.",
      },
      {
        nombre: "Mario Fernández",
        posicion: "Delantero",
        periodo: "Décadas de 1950-1960",
        descripcion:
          "Primer goleador destacado de O'Higgins; marcó 14 goles en la temporada de 1955.",
      },
      {
        nombre: "Pedro Pablo Hernández",
        posicion: "Mediocampista",
        periodo: "2013-2014",
        descripcion:
          "Integró la etapa del club que obtuvo el Torneo de Apertura 2013-14.",
      },
    ],
  },

  // =====================================================
  // 34. PALESTINO
  // =====================================================
  {
    id: "palestino",
    nombre: "Palestino",
    escudo: "Por confirmar: utilizar el escudo oficial desde el sitio del club",
    apodo: "Los Árabes",
    fundacion: 1920,
    ciudad: "La Cisterna, Santiago",
    pais: "Chile",
    estado: "Activo",
    historia:
      "Club Deportivo Palestino fue fundado en 1920 por miembros de la comunidad palestina en Chile. Su identidad institucional está estrechamente vinculada a esa comunidad y sus colores representan la bandera palestina. Ha sido campeón de Primera División en 1955 y 1978, además de ganar la Copa Chile en 1975, 1977 y 2018, y la Segunda División en 1952 y 1972.",
    totalTitulosOficiales: 7,
    palmares: [
      {
        competencia: "Primera División de Chile",
        cantidad: 2,
        temporadas: ["1955", "1978"],
      },
      {
        competencia: "Copa Chile",
        cantidad: 3,
        temporadas: ["1975", "1977", "2018"],
      },
      {
        competencia: "Segunda División de Chile",
        cantidad: 2,
        temporadas: ["1952", "1972"],
      },
    ],
    estadio: {
      nombre: "Estadio Municipal de La Cisterna",
      ciudad: "La Cisterna, Santiago",
      capacidad: 12000,
      imagen: "Por confirmar: imagen con licencia y URL verificada",
      descripcion:
        "Estadio donde Palestino disputa habitualmente sus partidos como local en competencias nacionales. Para algunos encuentros internacionales ha utilizado otros recintos de Santiago.",
    },
    rivalidades: [
      {
        clubId: "union-espanola",
        nombre: "Unión Española",
        descripcion:
          "Integra junto a Unión Española y Audax Italiano el denominado Clásico de Colonias, asociado a clubes vinculados históricamente a comunidades inmigrantes.",
      },
      {
        clubId: "audax-italiano",
        nombre: "Audax Italiano",
        descripcion:
          "Rivalidad tradicional incluida en el Clásico de Colonias, junto a Unión Española.",
      },
    ],
    records: [
      {
        tipo: "Fundación",
        descripcion:
          "Fue fundado por miembros de la comunidad palestina en Chile.",
        dato: "Fundación institucional",
        temporada: "1920",
      },
      {
        tipo: "Campeonato de Primera División",
        descripcion:
          "Obtuvo su primer título de la máxima categoría del fútbol chileno.",
        dato: "Campeón",
        temporada: "1955",
      },
      {
        tipo: "Campeonato de Primera División",
        descripcion:
          "Ganó su segundo título de Primera División, en una temporada en la que también conquistó la Copa Chile.",
        dato: "Campeón de Primera División y Copa Chile",
        temporada: "1978",
      },
      {
        tipo: "Récord de invicto",
        descripcion:
          "La campaña de 1978 es reconocida por una racha de 44 partidos consecutivos sin derrotas.",
        dato: "44 partidos invicto",
        temporada: "1978",
      },
      {
        tipo: "Copa Libertadores",
        descripcion:
          "Alcanzó las semifinales de la Copa Libertadores.",
        dato: "Semifinalista",
        temporada: "1979",
      },
      {
        tipo: "Copa Sudamericana",
        descripcion:
          "Llegó a los cuartos de final de la Copa Sudamericana.",
        dato: "Cuartofinalista",
        temporada: "2016",
      },
    ],
    jugadoresHistoricos: [
      {
        nombre: "Elías Figueroa",
        posicion: "Defensa",
        periodo: "1977-1980",
        descripcion:
          "Referente del equipo campeón de Primera División en 1978 y protagonista de la campaña internacional de 1979.",
      },
      {
        nombre: "Óscar Fabbiani",
        posicion: "Delantero",
        periodo: "Década de 1970",
        descripcion:
          "Delantero destacado de Palestino durante la etapa de crecimiento deportivo de los años setenta.",
      },
      {
        nombre: "Roberto Coll",
        posicion: "Por confirmar",
        periodo: "Década de 1950",
        descripcion:
          "Figura asociada al plantel campeón de Primera División de 1955.",
      },
      {
        nombre: "Luis Jiménez",
        posicion: "Mediocampista",
        periodo: "2002-2003; 2020-2022",
        descripcion:
          "Futbolista formado en Palestino que tuvo distintas etapas en el primer equipo.",
      },
    ],
  },

   // =====================================================
  // 35. PROVINCIAL OSORNO
  // =====================================================
  {
    id: "provincial-osorno",
    nombre: "Provincial Osorno",
    escudo: "Por confirmar: incorporar archivo oficial del escudo",
    apodo: "Los Toros",
    fundacion: 1983,
    ciudad: "Osorno",
    pais: "Chile",
    estado: "Activo",
    historia:
      "Provincial Osorno fue fundado el 5 de junio de 1983 y se incorporó al fútbol profesional chileno durante ese mismo año. El club representa a la ciudad de Osorno y ha desarrollado gran parte de su trayectoria en las divisiones de ascenso. Ganó la Primera B en 1990, 1992 y 2007, logrando ascensos a Primera División. Su historia también incluye etapas en categorías amateur y de ascenso posteriores.",
    totalTitulosOficiales: 3,
    palmares: [
      {
        competencia: "Primera B de Chile",
        cantidad: 3,
        temporadas: ["1990", "1992", "2007"],
      },
    ],
    estadio: {
      nombre: "Estadio Municipal Rubén Marcos Peralta",
      ciudad: "Osorno",
      capacidad: 10800,
      imagen: "Por confirmar: imagen con licencia y URL verificada",
      descripcion:
        "Recinto municipal de Osorno utilizado por Provincial Osorno como estadio local. La capacidad indicada corresponde a una cifra publicada por una base de datos futbolística y debe contrastarse con el aforo operativo vigente.",
    },
    rivalidades: [
      {
        clubId: "deportes-puerto-montt",
        nombre: "Deportes Puerto Montt",
        descripcion:
          "Enfrentamiento entre representantes de Osorno y Puerto Montt, ciudades de la Región de Los Lagos. Se suele identificar como un clásico regional; la denominación formal y su continuidad histórica pueden variar según la fuente.",
      },
    ],
    records: [
      {
        tipo: "Fundación",
        descripcion:
          "Fue constituido en Osorno el 5 de junio de 1983.",
        dato: "Fundación del club",
        temporada: "1983",
      },
      {
        tipo: "Campeón de Primera B",
        descripcion:
          "Obtuvo su primer campeonato de Primera B y ascendió a Primera División.",
        dato: "Campeón",
        temporada: "1990",
      },
      {
        tipo: "Campeón de Primera B",
        descripcion:
          "Consiguió su segundo título de la categoría y un nuevo ascenso a Primera División.",
        dato: "Campeón",
        temporada: "1992",
      },
      {
        tipo: "Campeón de Primera B",
        descripcion:
          "Ganó la categoría en 2007 y regresó a Primera División.",
        dato: "Campeón",
        temporada: "2007",
      },
    ],
    jugadoresHistoricos: [
      {
        nombre: "Washington Olivera",
        posicion: "Delantero",
        periodo: "Década de 1990",
        descripcion:
          "Futbolista uruguayo mencionado entre las figuras destacadas de Provincial Osorno en sus primeras etapas profesionales.",
      },
      {
        nombre: "Pedro González",
        posicion: "Delantero",
        periodo: "Década de 1990",
        descripcion:
          "Delantero argentino mencionado entre los jugadores destacados de la historia del club.",
      },
      {
        nombre: "Raúl Horacio Chaparro",
        posicion: "Por confirmar",
        periodo: "Década de 1990",
        descripcion:
          "Futbolista argentino citado entre las figuras de Provincial Osorno durante su etapa inicial en el profesionalismo.",
      },
      {
        nombre: "José Luis Sánchez",
        posicion: "Por confirmar",
        periodo: "Década de 1990",
        descripcion:
          "Jugador nacional mencionado entre los futbolistas destacados del club.",
      },
      {
        nombre: "Esteban Valencia",
        posicion: "Mediocampista",
        periodo: "Década de 1990",
        descripcion:
          "Integró la lista de figuras destacadas de Provincial Osorno en su historia inicial.",
      },
    ],
  },

  // =====================================================
  // 36. RANGERS
  // =====================================================
  {
    id: "rangers",
    nombre: "Rangers",
    escudo: "Por confirmar: incorporar archivo oficial del escudo",
    apodo: "Los Rojinegros",
    fundacion: 1902,
    ciudad: "Talca",
    pais: "Chile",
    estado: "Activo",
    historia:
      "Rangers de Talca fue fundado el 2 de noviembre de 1902 por un grupo de jóvenes vinculados al Liceo de Hombres de Talca y al club 18 de Septiembre. El nombre fue propuesto por Luis Greenstreet y su padre, seguidores del Rangers de Escocia. El equipo se identifica con los colores rojo y negro y representa a la ciudad de Talca y a la Región del Maule. Ha obtenido tres campeonatos de Primera B: 1988, 1993 y el Torneo de Apertura de 1997.",
    totalTitulosOficiales: 3,
    palmares: [
      {
        competencia: "Primera B de Chile",
        cantidad: 3,
        temporadas: ["1988", "1993", "Apertura 1997"],
      },
    ],
    estadio: {
      nombre: "Estadio Bicentenario Iván Azócar Bernales",
      ciudad: "Talca",
      capacidad: 16000,
      imagen: "Por confirmar: imagen con licencia y URL verificada",
      descripcion:
        "Estadio de Talca utilizado por Rangers como local. También es conocido históricamente como Estadio Fiscal de Talca. La capacidad exacta puede variar según la configuración del recinto y los requisitos de seguridad de cada evento.",
    },
    rivalidades: [
      {
        clubId: "curico-unido",
        nombre: "Curicó Unido",
        descripcion:
          "Rivalidad regional entre clubes de las ciudades de Talca y Curicó, en la Región del Maule. Sus enfrentamientos son conocidos como el Clásico del Maule.",
      },
    ],
    records: [
      {
        tipo: "Fundación",
        descripcion:
          "Fue fundado en Talca el 2 de noviembre de 1902 por exintegrantes del club 18 de Septiembre y jóvenes vinculados a establecimientos educacionales de la ciudad.",
        dato: "Fundación institucional",
        temporada: "1902",
      },
      {
        tipo: "Campeón de Primera B",
        descripcion:
          "Obtuvo su primer campeonato nacional de ascenso.",
        dato: "Campeón",
        temporada: "1988",
      },
      {
        tipo: "Campeón de Primera B",
        descripcion:
          "Consiguió su segundo campeonato de la categoría.",
        dato: "Campeón",
        temporada: "1993",
      },
      {
        tipo: "Campeón de Primera B",
        descripcion:
          "Ganó el Torneo de Apertura de Primera B.",
        dato: "Campeón",
        temporada: "Apertura 1997",
      },
      {
        tipo: "Participación en Copa Libertadores",
        descripcion:
          "Disputó la Copa Libertadores de América tras su campaña en el fútbol chileno de 1969.",
        dato: "Participación en fase de grupos",
        temporada: "1970",
      },
    ],
    jugadoresHistoricos: [
      {
        nombre: "Nicolás Peric",
        posicion: "Portero",
        periodo: "Diversas etapas; especialmente década de 2000",
        descripcion:
          "Arquero que se convirtió en uno de los referentes contemporáneos de Rangers.",
      },
      {
        nombre: "Heriberto Sturgess",
        posicion: "Por confirmar",
        periodo: "Década de 1910",
        descripcion:
          "Integró la primera delegación de la selección chilena en 1910 y es reconocido como uno de los primeros seleccionados nacionales vinculados a Rangers.",
      },
    ],
  },

  // =====================================================
  // 37. REGIONAL ATACAMA
  // =====================================================
  {
    id: "regional-atacama",
    nombre: "Regional Atacama",
    escudo: "Por confirmar: archivo histórico del escudo",
    apodo: "El Regional",
    fundacion: 1979,
    ciudad: "Copiapó",
    pais: "Chile",
    estado: "Desaparecido",
    historia:
      "Club de fútbol de Copiapó fundado el 9 de marzo de 1979, luego de una invitación de la Asociación Central de Fútbol a instituciones de la Región de Atacama para integrarse al profesionalismo. Debutó en Segunda División en 1980 y posteriormente compitió en Primera División. Tras la temporada 1998 descendió a Tercera División y desapareció por problemas económicos. En 1999 se fundó Deportes Copiapó, que tomó el lugar del club en la representación futbolística de la ciudad y heredó sus colores y estadio, aunque no debe asumirse continuidad jurídica automática entre ambas instituciones.",
    totalTitulosOficiales: 0,
    palmares: [],
    estadio: {
      nombre: "Estadio Luis Valenzuela Hermosilla",
      ciudad: "Copiapó",
      capacidad: 8000,
      imagen: "Por confirmar: imagen histórica con licencia y URL verificada",
      descripcion:
        "Estadio de Copiapó asociado históricamente a Regional Atacama y posteriormente utilizado por Deportes Copiapó. La capacidad consignada es una cifra referencial que debe verificarse contra el aforo habilitado actual.",
    },
    rivalidades: [
      {
        clubId: "cobresal",
        nombre: "Cobresal",
        descripcion:
          "Enfrentamiento entre clubes de la Región de Atacama que compartieron el ingreso al fútbol profesional en 1980. No se confirma una denominación histórica oficial para esta rivalidad.",
      },
    ],
    records: [
      {
        tipo: "Fundación",
        descripcion:
          "Fue fundado para representar a la Región de Atacama en el fútbol profesional chileno.",
        dato: "Fundación institucional",
        temporada: "1979",
      },
      {
        tipo: "Debut profesional",
        descripcion:
          "Debutó en Segunda División frente a Cobresal y ganó 2-1.",
        dato: "Victoria 2-1",
        temporada: "1980",
      },
      {
        tipo: "Participación en Primera División",
        descripcion:
          "Logró competir en la máxima categoría del fútbol chileno durante su trayectoria profesional.",
        dato: "Participación en Primera División",
        temporada: "Décadas de 1980-1990",
      },
      {
        tipo: "Descenso y desaparición",
        descripcion:
          "Descendió a Tercera División al término de la temporada y posteriormente desapareció por problemas económicos.",
        dato: "Descenso y desaparición institucional",
        temporada: "1998",
      },
      {
        tipo: "Legado deportivo local",
        descripcion:
          "Deportes Copiapó fue fundado en 1999 tras la desaparición de Regional Atacama y heredó sus colores y estadio.",
        dato: "Fundación de Deportes Copiapó",
        temporada: "1999",
      },
    ],
    jugadoresHistoricos: [
      {
        nombre: "Frank Lobos",
        posicion: "Por confirmar",
        periodo: "1980",
        descripcion:
          "Anotó uno de los goles en el triunfo de Regional Atacama sobre Cobresal en su debut profesional.",
      },
      {
        nombre: "Rubén González",
        posicion: "Por confirmar",
        periodo: "1980",
        descripcion:
          "Anotó uno de los goles en el primer partido profesional del club, ante Cobresal.",
      },
    ],
  },

  // =====================================================
  // 38. SANTIAGO
  // =====================================================
  {
    id: "santiago",
    nombre: "Santiago",
    escudo: "Por confirmar: archivo histórico del Club de Deportes Santiago",
    apodo: "Los Santiaguinos",
    fundacion: 1903,
    ciudad: "Santiago",
    pais: "Chile",
    estado: "Desaparecido",
    historia:
      "El origen de esta institución se remonta al Santiago Football Club, fundado el 16 de octubre de 1903 por estudiantes del Liceo Valentín Letelier. En 1926 se fusionó con Santiago Atlético y pasó a denominarse Club de Deportes Santiago. Participó en los primeros campeonatos profesionales de la capital y ganó el Campeonato de Apertura de Chile de 1934. El 17 de abril de 1936 se fusionó con Morning Star para formar Santiago Morning.",
    totalTitulosOficiales: 1,
    palmares: [
      {
        competencia: "Campeonato de Apertura de Chile",
        cantidad: 1,
        temporadas: ["1934"],
      },
    ],
    estadio: {
      nombre: "Por confirmar: recinto local histórico",
      ciudad: "Santiago",
      capacidad: 0,
      imagen: "Por confirmar: fotografía histórica del club o estadio",
      descripcion:
        "No se ha confirmado un estadio exclusivo o permanente del Club de Deportes Santiago para esta ficha. La capacidad 0 es un marcador técnico y no representa un aforo real.",
    },
    rivalidades: [
      {
        clubId: "morning-star",
        nombre: "Morning Star",
        descripcion:
          "Fue su contraparte en la fusión que dio origen a Santiago Morning en abril de 1936. Antes de la fusión ambos clubes se enfrentaron en el campeonato profesional de 1934.",
      },
    ],
    records: [
      {
        tipo: "Fundación",
        descripcion:
          "El Santiago Football Club fue fundado por estudiantes del Liceo Valentín Letelier.",
        dato: "Fundación del Santiago Football Club",
        temporada: "1903",
      },
      {
        tipo: "Fusión institucional",
        descripcion:
          "Se fusionó con Santiago Atlético y adoptó el nombre Club de Deportes Santiago.",
        dato: "Fusión con Santiago Atlético",
        temporada: "1926",
      },
      {
        tipo: "Campeón del Campeonato de Apertura",
        descripcion:
          "Derrotó a Colo-Colo por 4-2 en la final y obtuvo el Campeonato de Apertura de Chile.",
        dato: "Victoria 4-2 en la final",
        temporada: "1934",
      },
      {
        tipo: "Fusión con Morning Star",
        descripcion:
          "Se fusionó con Morning Star para formar Santiago Morning. La nueva institución adoptó la fecha de fundación más antigua, correspondiente a Santiago.",
        dato: "Fundación de Santiago Morning",
        temporada: "1936",
      },
    ],
    jugadoresHistoricos: [
      {
        nombre: "Rubén Guevara",
        posicion: "Por confirmar",
        periodo: "1903",
        descripcion:
          "Vinculado a la fundación del Santiago Football Club en el Liceo Valentín Letelier.",
      },
    ],
  },

  // =====================================================
  // 39. SANTIAGO MORNING
  // =====================================================
  {
    id: "santiago-morning",
    nombre: "Santiago Morning",
    escudo: "Por confirmar: utilizar el escudo oficial del club",
    apodo: "Los Microbuseros; El Chago",
    fundacion: 1903,
    ciudad: "Santiago",
    pais: "Chile",
    estado: "Activo",
    historia:
      "Santiago Morning es un club chileno originado por la fusión del Club de Deportes Santiago y Morning Star el 17 de abril de 1936. La institución conserva como fecha de fundación el 16 de octubre de 1903, correspondiente al origen del Santiago Football Club. Su etapa de mayor éxito en Primera División llegó en 1942, cuando obtuvo su único campeonato nacional de la máxima categoría. También ganó títulos de Primera B y torneos oficiales de Apertura durante las décadas de 1940 y 1950.",
    totalTitulosOficiales: 7,
    palmares: [
      {
        competencia: "Primera División de Chile",
        cantidad: 1,
        temporadas: ["1942"],
      },
      {
        competencia: "Primera B de Chile",
        cantidad: 3,
        temporadas: ["1958-59", "1974", "2005"],
      },
      {
        competencia: "Campeonato de Apertura de Chile",
        cantidad: 3,
        temporadas: ["1944", "1949", "1950"],
      },
    ],
    estadio: {
      nombre: "Estadio Municipal de La Pintana",
      ciudad: "La Pintana, Santiago",
      capacidad: 5000,
      imagen: "Por confirmar: imagen con licencia y URL verificada",
      descripcion:
        "Recinto utilizado por Santiago Morning como local. La capacidad publicada varía entre fuentes, por lo que debe verificarse con la información municipal o del administrador del estadio antes de presentarla como dato definitivo.",
    },
    rivalidades: [
      {
        clubId: "magallanes",
        nombre: "Magallanes",
        descripcion:
          "Enfrentamiento tradicional entre clubes históricos de Santiago. Ambos protagonizaron partidos relevantes durante las primeras décadas del fútbol profesional chileno.",
      },
    ],
    records: [
      {
        tipo: "Fundación reconocida por ANFP",
        descripcion:
          "La ANFP registra como fecha de fundación de Santiago Morning el 16 de octubre de 1903, correspondiente al origen del Santiago Football Club.",
        dato: "16 de octubre de 1903",
        temporada: "1903",
      },
      {
        tipo: "Fusión institucional",
        descripcion:
          "Santiago y Morning Star se unieron para formar Santiago Morning.",
        dato: "Fusión de dos clubes",
        temporada: "1936",
      },
      {
        tipo: "Campeón de Primera División",
        descripcion:
          "Ganó el campeonato nacional de Primera División, superando a Magallanes por un punto.",
        dato: "Campeón nacional",
        temporada: "1942",
      },
      {
        tipo: "Campeón de Primera B",
        descripcion:
          "Obtuvo tres campeonatos de la segunda categoría profesional chilena.",
        dato: "3 títulos de Primera B",
        temporada: "1958-59, 1974 y 2005",
      },
      {
        tipo: "Campeón de Apertura",
        descripcion:
          "Ganó tres ediciones del Campeonato de Apertura profesional.",
        dato: "3 títulos",
        temporada: "1944, 1949 y 1950",
      },
    ],
    jugadoresHistoricos: [
      {
        nombre: "Raúl Toro",
        posicion: "Delantero",
        periodo: "Década de 1940",
        descripcion:
          "Máximo ídolo histórico del club y goleador del equipo campeón de Primera División de 1942.",
      },
      {
        nombre: "Salvador Nocetti",
        posicion: "Delantero",
        periodo: "Década de 1940",
        descripcion:
          "Delantero argentino recordado por su participación en la etapa de mayor éxito deportivo del club.",
      },
      {
        nombre: "William Marín",
        posicion: "Portero",
        periodo: "1942",
        descripcion:
          "Integró el plantel campeón de Primera División de 1942.",
      },
      {
        nombre: "Raúl Battistone",
        posicion: "Por confirmar",
        periodo: "1942",
        descripcion:
          "Integró el plantel de Santiago Morning campeón del torneo nacional de 1942.",
      },
      {
        nombre: "Esteban Paredes",
        posicion: "Delantero",
        periodo: "Etapa contemporánea",
        descripcion:
          "Referente contemporáneo del club y posteriormente vinculado a su cuerpo técnico.",
      },
    ],
  },

  // =====================================================
  // 40. SANTIAGO NATIONAL
  // =====================================================
  {
    id: "santiago-national",
    nombre: "Santiago National",
    escudo: "Por confirmar: archivo histórico del escudo",
    apodo: "Los Nacionales",
    fundacion: 1900,
    ciudad: "Santiago",
    pais: "Chile",
    estado: "Desaparecido",
    historia:
      "Santiago National Football Club fue fundado el 10 de abril de 1900 en Santiago, inspirado en el National Football Club de Valparaíso. Fue uno de los clubes importantes del fútbol amateur capitalino y participó en la fundación de la Asociación de Football de Santiago en 1903. En 1933 se integró a la Liga Profesional de Football de Santiago. Ganó la Serie B Profesional de 1935 y el Campeonato de Apertura de 1942. En 1940 se fusionó con Juventus, formando Santiago National Juventus; la institución dejó posteriormente el profesionalismo y cesó sus actividades hacia comienzos de la década de 1960.",
    totalTitulosOficiales: 2,
    palmares: [
      {
        competencia: "Serie B Profesional de Chile",
        cantidad: 1,
        temporadas: ["1935"],
      },
      {
        competencia: "Campeonato de Apertura de Chile",
        cantidad: 1,
        temporadas: ["1942"],
      },
    ],
    estadio: {
      nombre: "Por confirmar: cancha local histórica",
      ciudad: "Santiago",
      capacidad: 0,
      imagen: "Por confirmar: fotografía histórica del club o recinto",
      descripcion:
        "El club disputó partidos en distintas canchas de Santiago, incluyendo encuentros en el Club Hípico. No se ha confirmado un estadio propio permanente ni un aforo histórico fiable. La capacidad 0 es un marcador técnico.",
    },
    rivalidades: [
      {
        clubId: "santiago",
        nombre: "Santiago",
        descripcion:
          "Ambos fueron clubes históricos de la capital y participaron en los primeros campeonatos profesionales. No se confirma una denominación oficial de clásico entre ambas instituciones.",
      },
    ],
    records: [
      {
        tipo: "Fundación",
        descripcion:
          "Fue fundado en Santiago por iniciativa de Alberto Sánchez, inspirado en el National Football Club de Valparaíso.",
        dato: "Fundación institucional",
        temporada: "1900",
      },
      {
        tipo: "Club fundador de asociación",
        descripcion:
          "Se inscribió como uno de los clubes fundadores de la Asociación de Football de Santiago.",
        dato: "Club fundador",
        temporada: "1903",
      },
      {
        tipo: "Club fundador del profesionalismo",
        descripcion:
          "Integró el grupo de clubes que abandonó la Asociación de Football de Santiago para crear la Liga de Football Profesional de Santiago.",
        dato: "Participante del grupo fundador",
        temporada: "1933",
      },
      {
        tipo: "Campeón de Serie B Profesional",
        descripcion:
          "Ganó invicto la primera edición de la Serie B Profesional chilena.",
        dato: "Campeón invicto",
        temporada: "1935",
      },
      {
        tipo: "Campeón de Apertura",
        descripcion:
          "Derrotó a Badminton por 3-2 y obtuvo el Campeonato de Apertura de Chile.",
        dato: "Campeón",
        temporada: "1942",
      },
      {
        tipo: "Fusión con Juventus",
        descripcion:
          "Se fusionó con Juventus y formó Santiago National Juventus.",
        dato: "Fusión institucional",
        temporada: "1940",
      },
      {
        tipo: "Fin de actividad",
        descripcion:
          "Tras dejar el profesionalismo, participó en competencias amateur y cesó sus actividades cerca de 1962.",
        dato: "Cese de actividades aproximado",
        temporada: "1962",
      },
    ],
    jugadoresHistoricos: [
      {
        nombre: "Alberto Sánchez",
        posicion: "Por confirmar",
        periodo: "1900",
        descripcion:
          "Impulsor de la fundación de Santiago National Football Club.",
      },
      {
        nombre: "Beltramí",
        posicion: "Por confirmar",
        periodo: "1940",
        descripcion:
          "Integró la alineación profesional de Santiago National Juventus durante el Campeonato de Apertura de 1940. Nombre completo por confirmar.",
      },
      {
        nombre: "Villablanca",
        posicion: "Defensa",
        periodo: "1940",
        descripcion:
          "Integró la alineación de Santiago National Juventus en el Campeonato de Apertura de 1940. Nombre completo por confirmar.",
      },
      {
        nombre: "Guerrieri",
        posicion: "Defensa",
        periodo: "1940",
        descripcion:
          "Integró la alineación de Santiago National Juventus en el Campeonato de Apertura de 1940. Nombre completo por confirmar.",
      },
    ],
  },

    // =====================================================
  // 41. SANTIAGO WANDERERS
  // =====================================================
  {
    id: "santiago-wanderers",
    nombre: "Santiago Wanderers",
    escudo: "Por confirmar: incorporar archivo oficial del escudo",
    apodo: "El Decano; Los Caturros",
    fundacion: 1892,
    ciudad: "Valparaíso",
    pais: "Chile",
    estado: "Activo",
    historia:
      "Santiago Wanderers fue fundado el 15 de agosto de 1892 en Valparaíso. Es uno de los clubes más antiguos del fútbol chileno y es conocido como El Decano. Se incorporó a la Football Association of Chile en 1900 y obtuvo títulos en distintas competencias amateur antes de ingresar definitivamente al profesionalismo de Santiago en 1944. Ganó sus primeros campeonatos nacionales de Primera División en 1958 y 1968, y consiguió un tercer título en 2001. También ha conquistado la Copa Chile en tres ocasiones y la Primera B en tres temporadas.",
    totalTitulosOficiales: 9,
    palmares: [
      {
        competencia: "Primera División de Chile",
        cantidad: 3,
        temporadas: ["1958", "1968", "2001"],
      },
      {
        competencia: "Copa Chile",
        cantidad: 3,
        temporadas: ["1959", "1961", "2017"],
      },
      {
        competencia: "Primera B de Chile",
        cantidad: 3,
        temporadas: ["1978", "1995", "2019"],
      },
    ],
    estadio: {
      nombre: "Estadio Elías Figueroa Brander",
      ciudad: "Valparaíso",
      capacidad: 0,
      imagen: "Por confirmar: imagen con licencia y URL verificada",
      descripcion:
        "Estadio ubicado en el sector de Playa Ancha, Valparaíso, donde Santiago Wanderers disputa habitualmente sus partidos como local. El recinto fue inaugurado originalmente como Estadio Municipal de Valparaíso en 1931 y fue remodelado y rebautizado en homenaje al futbolista Elías Figueroa. La capacidad queda pendiente de verificación; 0 es un marcador técnico, no un aforo real.",
    },
    rivalidades: [
      {
        clubId: "everton",
        nombre: "Everton de Viña del Mar",
        descripcion:
          "Rivalidad tradicional entre Santiago Wanderers, representante de Valparaíso, y Everton, de Viña del Mar. Sus enfrentamientos son conocidos como el Clásico Porteño.",
      },
    ],
    records: [
      {
        tipo: "Fundación",
        descripcion:
          "Fue fundado el 15 de agosto de 1892 en Valparaíso. La institución reconoce esa fecha como su origen.",
        dato: "15 de agosto de 1892",
        temporada: "1892",
      },
      {
        tipo: "Primer título amateur registrado",
        descripcion:
          "Ganó la competencia League de la Football Association of Chile.",
        dato: "Campeón",
        temporada: "1907",
      },
      {
        tipo: "Campeón de Primera División",
        descripcion:
          "Obtuvo su primer campeonato nacional de la máxima categoría tras empatar 2-2 con O'Higgins en Rancagua.",
        dato: "Primer título de Primera División",
        temporada: "1958",
      },
      {
        tipo: "Campeón de Primera División",
        descripcion:
          "Conquistó su segundo campeonato nacional, en una temporada que culminó en enero de 1969.",
        dato: "Segundo título de Primera División",
        temporada: "1968",
      },
      {
        tipo: "Copa Libertadores",
        descripcion:
          "En su debut en el torneo continental llegó a cuartos de final y fue el primer club chileno fuera de Santiago en disputar la competencia.",
        dato: "Cuartos de final",
        temporada: "1969",
      },
      {
        tipo: "Campeón de Primera División",
        descripcion:
          "Bajo la dirección técnica de Jorge Garcés, obtuvo su tercer campeonato nacional al vencer 4-2 a Audax Italiano en el último partido.",
        dato: "Tercer título de Primera División",
        temporada: "2001",
      },
      {
        tipo: "Copa Sudamericana",
        descripcion:
          "Alcanzó los cuartos de final de la primera edición del torneo y fue eliminado por Atlético Nacional en definición por penales.",
        dato: "Cuartos de final",
        temporada: "2002",
      },
      {
        tipo: "Copa Chile",
        descripcion:
          "Ganó su tercera Copa Chile al derrotar 3-1 a Universidad de Chile en la final disputada en Concepción.",
        dato: "Tercer título de Copa Chile",
        temporada: "2017",
      },
      {
        tipo: "Patrimonio de Valparaíso",
        descripcion:
          "La Municipalidad de Valparaíso reconoció al club como Patrimonio Intangible de la ciudad.",
        dato: "Patrimonio Intangible",
        temporada: "2007",
      },
    ],
    jugadoresHistoricos: [
      {
        nombre: "Raúl Sánchez",
        posicion: "Defensa",
        periodo: "Décadas de 1950-1960",
        descripcion:
          "Referente de la etapa de mayor éxito deportivo de los años cincuenta y parte del plantel campeón de 1958. Integró también la selección chilena que obtuvo el tercer lugar en el Mundial de 1962.",
      },
      {
        nombre: "Armando Tobar",
        posicion: "Delantero",
        periodo: "Décadas de 1950-1960",
        descripcion:
          "Integrante de los equipos campeones de Santiago Wanderers y de la selección chilena que alcanzó el tercer lugar en el Mundial de 1962.",
      },
      {
        nombre: "Elías Figueroa",
        posicion: "Defensa",
        periodo: "Etapa juvenil y primeros años de carrera",
        descripcion:
          "Futbolista nacido en Valparaíso y vinculado a Santiago Wanderers en sus inicios. El estadio de Playa Ancha lleva su nombre.",
      },
      {
        nombre: "Raúl Toro Julio",
        posicion: "Delantero",
        periodo: "Década de 1930",
        descripcion:
          "Delantero de Wanderers que fue goleador del Campeonato Sudamericano de 1937, convirtiéndose en el primer futbolista chileno en conseguir esa distinción.",
      },
      {
        nombre: "David Pizarro",
        posicion: "Mediocampista",
        periodo: "Década de 1990; regreso en 2015",
        descripcion:
          "Formado en Santiago Wanderers, desarrolló una extensa carrera internacional y regresó al club en 2015.",
      },
      {
        nombre: "Carlos Hoffmann",
        posicion: "Delantero",
        periodo: "Décadas de 1950-1960",
        descripcion:
          "Integrante de la generación campeona de 1958 y de los equipos que conquistaron títulos nacionales durante esa etapa.",
      },
    ],
  },

   // =====================================================
  // 42. SAN LUIS
  // =====================================================
  {
    id: "san-luis",
    nombre: "San Luis",
    escudo: "Por confirmar: incorporar escudo oficial desde el sitio del club",
    apodo: "Los Canarios",
    fundacion: 1919,
    ciudad: "Quillota",
    pais: "Chile",
    estado: "Activo",
    historia:
      "San Luis de Quillota fue fundado el 8 de diciembre de 1919 por alumnos y exalumnos del Instituto Quillota, hoy Instituto Rafael Ariztía. En sus primeros años se llamó Ex Alumnos del Instituto Quillota Football Club y en enero de 1921 adoptó el nombre San Luis Football Club, en homenaje al hermano marista Louis André Tiron. Se incorporó al fútbol profesional en 1953 y ha alternado entre Primera División y las categorías de ascenso. Entre sus hitos se encuentran los campeonatos de Segunda División de 1955, 1958 y 1980, y el título de Primera B de 2014-15.",
    totalTitulosOficiales: 5,
    palmares: [
      {
        competencia: "Segunda División de Chile / Primera B",
        cantidad: 4,
        temporadas: ["1955", "1958", "1980", "2014-15"],
      },
      {
        competencia: "Torneos de Apertura y Clausura de Primera B",
        cantidad: 1,
        temporadas: ["Clausura 2009"],
      },
    ],
    estadio: {
      nombre: "Estadio Municipal Lucio Fariña Fernández",
      ciudad: "Quillota",
      capacidad: 7703,
      imagen: "Por confirmar: imagen con licencia y URL verificada",
      descripcion:
        "Estadio municipal de Quillota donde San Luis disputa habitualmente sus partidos como local. Fue remodelado entre 2009 y 2010 y reinaugurado en septiembre de 2010. La capacidad publicada varía entre fuentes y configuraciones del recinto; la cifra consignada es referencial.",
    },
    rivalidades: [
      {
        clubId: "union-la-calera",
        nombre: "Unión La Calera",
        descripcion:
          "Rivalidad entre clubes de la provincia de Quillota y la zona interior de la Región de Valparaíso, conocida como el Clásico del Interior.",
      },
    ],
    records: [
      {
        tipo: "Fundación",
        descripcion:
          "Nació en una sala del Instituto Quillota, a partir de la iniciativa de alumnos y exalumnos asesorados por el hermano marista Louis André Tiron.",
        dato: "8 de diciembre de 1919",
        temporada: "1919",
      },
      {
        tipo: "Cambio de nombre",
        descripcion:
          "La institución adoptó el nombre San Luis Football Club en homenaje al hermano Louis André Tiron.",
        dato: "San Luis Football Club",
        temporada: "1921",
      },
      {
        tipo: "Ingreso al profesionalismo",
        descripcion:
          "Ingresó a la Asociación Central de Fútbol y comenzó a competir en Segunda División.",
        dato: "Ingreso al fútbol profesional",
        temporada: "1953",
      },
      {
        tipo: "Primer ascenso a Primera División",
        descripcion:
          "Se coronó campeón de Segunda División y consiguió su primer ascenso a la máxima categoría.",
        dato: "Campeón y ascenso",
        temporada: "1955",
      },
      {
        tipo: "Mejor ubicación en Primera División",
        descripcion:
          "Terminó en el tercer lugar de la máxima categoría.",
        dato: "3.º lugar",
        temporada: "1957",
      },
      {
        tipo: "Campeón de Segunda División",
        descripcion:
          "Obtuvo el título y regresó a Primera División.",
        dato: "Campeón",
        temporada: "1958",
      },
      {
        tipo: "Campeón de Segunda División",
        descripcion:
          "Venció a Unión La Calera y logró el ascenso a Primera División.",
        dato: "Campeón y ascenso",
        temporada: "1980",
      },
      {
        tipo: "Campeón de Tercera División",
        descripcion:
          "Obtuvo el campeonato y ascendió a Primera B tras trece temporadas en la categoría amateur.",
        dato: "Campeón y ascenso",
        temporada: "2003",
      },
      {
        tipo: "Campeón de Primera B",
        descripcion:
          "Ganó el campeonato de la temporada 2014-15 y consiguió el ascenso a Primera División.",
        dato: "Campeón y ascenso",
        temporada: "2014-15",
      },
    ],
    jugadoresHistoricos: [
      {
        nombre: "Víctor Hugo Cabrera",
        posicion: "Delantero",
        periodo: "1980-1983",
        descripcion:
          "Goleador de San Luis en la campaña del campeonato de Segunda División de 1980. También fue máximo anotador del equipo en Primera División en 1981.",
      },
      {
        nombre: "Patricio Yáñez",
        posicion: "Delantero",
        periodo: "1980",
        descripcion:
          "Integró el equipo campeón de Segunda División de 1980 y anotó en el partido decisivo frente a Unión La Calera.",
      },
      {
        nombre: "Freddy Bahamondes",
        posicion: "Mediocampista",
        periodo: "1978-1983",
        descripcion:
          "Referente de la campaña de ascenso de 1980 y jugador con una extensa trayectoria en el club.",
      },
      {
        nombre: "Jorge Muñoz Luna",
        posicion: "Delantero",
        periodo: "1980-1983; 1992",
        descripcion:
          "Integró el plantel campeón de Segunda División de 1980 y fue seleccionado nacional.",
      },
      {
        nombre: "Patricio Pérez",
        posicion: "Por confirmar",
        periodo: "2003",
        descripcion:
          "Anotó el gol del triunfo ante Iberia que aseguró el campeonato de Tercera División y el ascenso de San Luis en 2003.",
      },
    ],
  },

  // =====================================================
  // 43. SAN MARCOS
  // =====================================================
  {
    id: "san-marcos",
    nombre: "San Marcos de Arica",
    escudo: "Por confirmar: incorporar escudo oficial desde el sitio del club",
    apodo: "Los Bravos del Morro",
    fundacion: 1978,
    ciudad: "Arica",
    pais: "Chile",
    estado: "Activo",
    historia:
      "San Marcos de Arica fue fundado oficialmente el 14 de febrero de 1978, a partir de la unión de Arica Portuario y Norte Unido, para representar al extremo norte de Chile en el fútbol profesional. En sus primeros años compitió como Deportes Arica y logró el ascenso a Primera División en 1981. La institución actual adoptó el nombre San Marcos de Arica tras una refundación vinculada a la crisis deportiva de mediados de la década de 2000. Ha conseguido títulos de Primera B y de Segunda División Profesional, y disputa sus partidos como local en el Estadio Carlos Dittborn.",
    totalTitulosOficiales: 5,
    palmares: [
      {
        competencia: "Primera B de Chile",
        cantidad: 3,
        temporadas: ["1981", "2012", "2013-14"],
      },
      {
        competencia: "Segunda División Profesional de Chile",
        cantidad: 2,
        temporadas: ["2019", "2022"],
      },
    ],
    estadio: {
      nombre: "Estadio Carlos Dittborn",
      ciudad: "Arica",
      capacidad: 9625,
      imagen: "Por confirmar: imagen con licencia y URL verificada",
      descripcion:
        "Estadio municipal de Arica y uno de los recintos utilizados durante la Copa Mundial de 1962. Es el estadio habitual de San Marcos de Arica y lleva el nombre del dirigente deportivo Carlos Dittborn.",
    },
    rivalidades: [
      {
        clubId: "deportes-iquique",
        nombre: "Deportes Iquique",
        descripcion:
          "Rivalidad entre los principales clubes profesionales de las regiones de Arica y Parinacota y Tarapacá. Sus enfrentamientos son conocidos como el Clásico del Norte.",
      },
    ],
    records: [
      {
        tipo: "Fundación",
        descripcion:
          "La institución fue fundada oficialmente el 14 de febrero de 1978, a partir de la unión de Arica Portuario y Norte Unido.",
        dato: "Fundación institucional",
        temporada: "1978",
      },
      {
        tipo: "Primera etapa como Deportes Arica",
        descripcion:
          "El club ingresó al profesionalismo como Deportes Arica y obtuvo el campeonato de Segunda División, logrando el ascenso a Primera División.",
        dato: "Campeón y ascenso",
        temporada: "1981",
      },
      {
        tipo: "Primera División",
        descripcion:
          "Su mejor ubicación histórica en la máxima categoría fue el cuarto lugar.",
        dato: "4.º lugar",
        temporada: "1984",
      },
      {
        tipo: "Campeón de Primera B",
        descripcion:
          "Obtuvo el campeonato anual de Primera B y regresó a la máxima categoría después de una prolongada ausencia.",
        dato: "Campeón y ascenso",
        temporada: "2012",
      },
      {
        tipo: "Campeón de Primera B",
        descripcion:
          "Ganó el campeonato de Primera B y consiguió un nuevo ascenso a Primera División.",
        dato: "Campeón y ascenso",
        temporada: "2013-14",
      },
      {
        tipo: "Campeón de Segunda División Profesional",
        descripcion:
          "Se coronó campeón de la categoría y consiguió el ascenso a Primera B.",
        dato: "Campeón y ascenso",
        temporada: "2019",
      },
      {
        tipo: "Campeón de Segunda División Profesional",
        descripcion:
          "Obtuvo un segundo campeonato de Segunda División Profesional.",
        dato: "Campeón",
        temporada: "2022",
      },
      {
        tipo: "Campeón de Tercera División",
        descripcion:
          "La institución obtuvo el campeonato de Tercera División y logró el retorno al fútbol profesional.",
        dato: "Campeón y ascenso",
        temporada: "2007",
      },
    ],
    jugadoresHistoricos: [
      {
        nombre: "Jorge Cabrera",
        posicion: "Delantero",
        periodo: "1982-1985",
        descripcion:
          "Máximo goleador de San Marcos en Primera División, con 44 goles registrados durante su etapa en el club.",
      },
      {
        nombre: "Joel Estay",
        posicion: "Delantero",
        periodo: "2010-2014",
        descripcion:
          "Goleador destacado de San Marcos en Primera B, con 47 anotaciones registradas en la categoría durante su período en el club.",
      },
      {
        nombre: "Francisco Huaiquipán",
        posicion: "Mediocampista",
        periodo: "Etapa de ascenso de 2012",
        descripcion:
          "Integró el plantel de San Marcos durante la campaña que consiguió el campeonato de Primera B y el ascenso de 2012.",
      },
    ],
  },

  // =====================================================
  // 44. TRASANDINO
  // =====================================================
  {
    id: "trasandino",
    nombre: "Trasandino",
    escudo: "Por confirmar: incorporar escudo oficial desde el sitio del club",
    apodo: "El Cóndor; El Tra-Tra",
    fundacion: 1906,
    ciudad: "Los Andes",
    pais: "Chile",
    estado: "Activo",
    historia:
      "Trasandino de Los Andes fue fundado el 1 de abril de 1906 por trabajadores del Ferrocarril Trasandino Los Andes-Mendoza. Su historia está ligada al desarrollo ferroviario y deportivo de la ciudad. En 1985 obtuvo el campeonato de Segunda División y el ascenso a Primera División. Posteriormente compitió bajo el nombre Cobreandino durante parte de su trayectoria y recuperó la denominación Trasandino. En el fútbol amateur consiguió títulos de Tercera División A en 2012 y 2021, además de un campeonato de Cuarta División en 1992.",
    totalTitulosOficiales: 1,
    palmares: [
      {
        competencia: "Segunda División de Chile",
        cantidad: 1,
        temporadas: ["1985"],
      },
    ],
    estadio: {
      nombre: "Estadio Regional de Los Andes",
      ciudad: "Los Andes",
      capacidad: 3300,
      imagen: "Por confirmar: imagen con licencia y URL verificada",
      descripcion:
        "Estadio de Los Andes donde Trasandino disputa sus partidos como local. Fue inaugurado en 1996. Antes de su construcción, el club jugaba en el Estadio Ferroviario, recinto demolido en 1994. La capacidad publicada varía entre aproximadamente 2.800 y 3.300 espectadores, por lo que se recomienda confirmar el aforo oficial vigente.",
    },
    rivalidades: [
      {
        clubId: "union-san-felipe",
        nombre: "Unión San Felipe",
        descripcion:
          "Rivalidad entre los clubes de Los Andes y San Felipe, representantes de ciudades cercanas del valle del Aconcagua. Sus enfrentamientos son conocidos como el Clásico del Aconcagua.",
      },
    ],
    records: [
      {
        tipo: "Fundación",
        descripcion:
          "Fue fundado por trabajadores del Ferrocarril Trasandino Los Andes-Mendoza.",
        dato: "1 de abril de 1906",
        temporada: "1906",
      },
      {
        tipo: "Campeón de Segunda División",
        descripcion:
          "Obtuvo el campeonato de Segunda División y consiguió el ascenso a Primera División.",
        dato: "Campeón y ascenso",
        temporada: "1985",
      },
      {
        tipo: "Participación en Primera División",
        descripcion:
          "Trasandino logró competir en la máxima categoría durante la década de 1980. En 1983 finalizó séptimo en su grupo, según la reseña histórica local.",
        dato: "Participación en Primera División",
        temporada: "1983-1984",
      },
      {
        tipo: "Cambio de denominación",
        descripcion:
          "La institución pasó a llamarse Cobreandino tras el cambio de administración vinculado a Codelco.",
        dato: "Cobreandino",
        temporada: "1985-1992",
      },
      {
        tipo: "Campeón de Tercera División A",
        descripcion:
          "Obtuvo el título de Tercera División A, correspondiente al fútbol amateur.",
        dato: "Campeón",
        temporada: "2012",
      },
      {
        tipo: "Campeón de Tercera División A",
        descripcion:
          "Ganó nuevamente Tercera División A y consiguió el ascenso al fútbol profesional.",
        dato: "Campeón y ascenso",
        temporada: "2021",
      },
      {
        tipo: "Campeón de Cuarta División",
        descripcion:
          "Obtuvo el título de la categoría amateur que actualmente corresponde a Tercera División B.",
        dato: "Campeón",
        temporada: "1992",
      },
      {
        tipo: "Goleador histórico de Primera B",
        descripcion:
          "Iván Zamorano jugó por Trasandino en 1986 y fue máximo goleador del campeonato de Primera B.",
        dato: "27 goles en 29 partidos",
        temporada: "1986",
      },
      {
        tipo: "Campeonatos locales amateur",
        descripcion:
          "La historia del club registra numerosos campeonatos de la Asociación de Los Andes y un título del Campeonato Regional de Los Andes. Estos logros amateur no se incluyen en el total de títulos profesionales.",
        dato: "12 títulos de Asociación y 1 campeonato regional, según registro histórico",
        temporada: "1912-1950",
      },
    ],
    jugadoresHistoricos: [
      {
        nombre: "Iván Zamorano",
        posicion: "Delantero",
        periodo: "1986",
        descripcion:
          "Defendió a Trasandino antes de iniciar su trayectoria internacional. Fue goleador de Primera B con 27 tantos en 29 partidos.",
      },
    ],
  },

 // =====================================================
// 45. UNIÓN ESPAÑOLA
// =====================================================

{
  id: "union-espanola",
  nombre: "Unión Española",
  escudo: "Por confirmar: URL del escudo histórico de Unión Española",
  apodo: "Hispanos, Rojos",
  fundacion: 1897,
  ciudad: "Santiago",
  pais: "Chile",
  estado: "Activo",
  historia:
    "Unión Española tiene sus orígenes en el Centro Español de Instrucción y Recreación, fundado el 18 de mayo de 1897 por integrantes de la comunidad española en Chile. En 1922 se fusionaron instituciones vinculadas al Ibérico Balompié y al Ciclista Ibérico, dando origen a Unión Deportiva Española. El club adoptó el nombre Unión Española en 1934 y fue uno de los participantes de la primera competencia profesional de Santiago en 1933. Su estadio, Santa Laura, fue inaugurado en 1923. A lo largo de su historia ha ganado campeonatos nacionales y copas locales, y alcanzó la final de la Copa Libertadores en 1975.",
  totalTitulosOficiales: 11,
  palmares: [
    {
      competencia: "Primera División de Chile",
      cantidad: 7,
      temporadas: [
        "1943",
        "1951",
        "1973",
        "1975",
        "1977",
        "Apertura 2005",
        "Transición 2013"
      ]
    },
    {
      competencia: "Copa Chile",
      cantidad: 2,
      temporadas: ["1992", "1993"]
    },
    {
      competencia: "Supercopa de Chile",
      cantidad: 1,
      temporadas: ["2013"]
    },
    {
      competencia: "Primera B de Chile",
      cantidad: 1,
      temporadas: ["1999"]
    }
  ],
  estadio: {
    nombre: "Estadio Santa Laura - Universidad SEK",
    ciudad: "Santiago, comuna de Independencia",
    capacidad: 0,
    imagen: "Por confirmar: URL de fotografía del Estadio Santa Laura",
    descripcion:
      "Recinto deportivo histórico de Unión Española, construido en los terrenos adquiridos por el club en 1922 e inaugurado el 10 de mayo de 1923. Fue sede de encuentros relevantes del fútbol chileno, incluido uno de los primeros partidos del campeonato profesional de 1933."
  },
rivalidades: [
  {
    clubId: "audax-italiano",
    nombre: "Audax Italiano",
    descripcion:
      "Rivalidad tradicional conocida como el Clásico de Colonias, vinculada a la historia de ambas instituciones y a sus raíces en comunidades de inmigrantes italianos y españoles en Chile."
  },
  {
    clubId: "palestino",
    nombre: "Palestino",
    descripcion:
      "Rivalidad histórica entre Unión Española y Palestino, dos clubes vinculados a comunidades inmigrantes en Chile. Sus enfrentamientos también forman parte del tradicional Clásico de Colonias."
  }
],
  records: [
    {
      tipo: "Final internacional",
      descripcion:
        "Llegó a la final de la Copa Libertadores de América en 1975, donde enfrentó a Independiente de Argentina.",
      dato: "Subcampeón de la Copa Libertadores",
      temporada: "1975"
    },
    {
      tipo: "Goleador histórico",
      descripcion:
        "Honorino Landa es reconocido como uno de los máximos referentes goleadores de la historia del club.",
      dato: "134 goles",
      temporada: "Por confirmar: período exacto"
    },
    {
      tipo: "Fundación",
      descripcion:
        "El origen institucional se remonta al Centro Español de Instrucción y Recreación, antecedente histórico de Unión Española.",
      dato: "18 de mayo de 1897",
      temporada: "1897"
    }
  ],
  jugadoresHistoricos: [
    {
      nombre: "Honorino Landa",
      posicion: "Delantero",
      periodo: "Por confirmar: temporadas exactas",
      descripcion:
        "Ídolo histórico de Unión Española y reconocido por su aporte goleador al club."
    },
    {
      nombre: "José Luis Sierra",
      posicion: "Volante",
      periodo: "Por confirmar: temporadas exactas",
      descripcion:
        "Referente del club como futbolista y posteriormente entrenador. Formó parte del equipo campeón del Apertura 2005 y dirigió a Unión Española al título nacional de 2013."
    },
    {
      nombre: "Mario Soto",
      posicion: "Defensor",
      periodo: "Por confirmar: temporadas exactas",
      descripcion:
        "Futbolista destacado que integró la historia deportiva de Unión Española."
    },
    {
      nombre: "Fernando Astengo",
      posicion: "Defensor",
      periodo: "Por confirmar: temporadas exactas",
      descripcion:
        "Defensor de trayectoria en el fútbol chileno que vistió la camiseta hispana."
    },
    {
      nombre: "Manuel Neira",
      posicion: "Delantero",
      periodo: "Por confirmar: temporadas exactas",
      descripcion:
        "Delantero chileno que formó parte de la historia reciente del club."
    }
  ]
},

 // =====================================================
// 46. UNIÓN LA CALERA
// =====================================================

{
  id: "union-la-calera",
  nombre: "Unión La Calera",
  escudo: "Por confirmar: URL del escudo histórico de Unión La Calera",
  apodo: "Cementeros, Rojos",
  fundacion: 1954,
  ciudad: "La Calera",
  pais: "Chile",
  estado: "Activo",
  historia:
    "Unión La Calera tiene su origen en 1954, cuando se creó Deportes La Calera a partir de la unión de clubes locales. En 1955 se consolidó la institución bajo el nombre de Unión La Calera, como símbolo de la unión deportiva de la ciudad y de sus vínculos con la actividad cementera. El club obtuvo su primer título profesional en 1961 al ganar la Segunda División y ascender a Primera. Volvió a conseguir el campeonato de ascenso en 1984 y en 2017 ganó el Torneo de Transición de Primera B, logrando nuevamente el paso a la máxima categoría. Su estadio es el Municipal Nicolás Chahuán Nazar.",
  totalTitulosOficiales: 3,
  palmares: [
    {
      competencia: "Segunda División / Primera B de Chile",
      cantidad: 3,
      temporadas: ["1961", "1984", "Torneo de Transición 2017"]
    }
  ],
  estadio: {
    nombre: "Estadio Municipal Nicolás Chahuán Nazar",
    ciudad: "La Calera",
    capacidad: 0,
    imagen: "Por confirmar: URL de fotografía del Estadio Nicolás Chahuán Nazar",
    descripcion:
      "Estadio municipal de La Calera y recinto donde Unión La Calera ejerce su localía. El estadio lleva el nombre de Nicolás Chahuán Nazar, dirigente vinculado a la historia de la institución. La capacidad actual debe confirmarse antes de mostrarla en la aplicación."
  },
  rivalidades: [
    {
      clubId: "san-luis",
      nombre: "San Luis de Quillota",
      descripcion:
        "Rivalidad regional entre los clubes de La Calera y Quillota, conocida como el Clásico del Interior. Sus enfrentamientos representan una tradición futbolística de las ciudades vecinas de la zona interior de la Región de Valparaíso."
    }
  ],
  records: [
    {
      tipo: "Primer título profesional",
      descripcion:
        "Unión La Calera obtuvo su primer campeonato profesional al ganar la Segunda División y conseguir el ascenso a Primera División.",
      dato: "Campeón de Segunda División",
      temporada: "1961"
    },
    {
      tipo: "Campeonato de Tercera División",
      descripcion:
        "El club consiguió el título de Tercera División y el retorno al fútbol profesional.",
      dato: "Campeón de Tercera División",
      temporada: "1990"
    },
    {
      tipo: "Ascenso a Primera División",
      descripcion:
        "Ganó el Torneo de Transición de Primera B y obtuvo el ascenso a la máxima categoría.",
      dato: "Campeón de Primera B",
      temporada: "2017"
    },
    {
      tipo: "Máximo goleador histórico",
      descripcion:
        "Ariel Roberto Pereira es señalado por el Campeonato Chileno como máximo goleador histórico del club.",
      dato: "83 goles en 192 encuentros",
      temporada: "Por confirmar: período exacto"
    }
  ],
  jugadoresHistoricos: [
    {
      nombre: "Elías Figueroa",
      posicion: "Defensor",
      periodo: "1964",
      descripcion:
        "Debutó en el fútbol profesional defendiendo a Unión La Calera con 17 años, antes de desarrollar una destacada carrera nacional e internacional."
    },
    {
      nombre: "Manuel Saavedra",
      posicion: "Volante",
      periodo: "1964–1976",
      descripcion:
        "Referente histórico del club. La historia oficial destaca su permanencia durante 13 temporadas consecutivas en Primera División."
    },
    {
      nombre: "Osvaldo Castro",
      posicion: "Delantero",
      periodo: "Desde 1966",
      descripcion:
        "Conocido como el Pata Bendita, fue un destacado goleador que vistió la camiseta calerana y posteriormente desarrolló una extensa carrera en Chile y México."
    },
    {
      nombre: "Juan Carlos Vera",
      posicion: "Volante",
      periodo: "1984",
      descripcion:
        "Figura del equipo que obtuvo el campeonato de ascenso de 1984. Posteriormente destacó en el fútbol mexicano."
    },
    {
      nombre: "Ariel Roberto Pereira",
      posicion: "Delantero",
      periodo: "Por confirmar: temporadas exactas",
      descripcion:
        "Referente goleador de Unión La Calera. El Campeonato Chileno lo identifica como máximo goleador histórico del club, con 83 goles en 192 partidos."
    }
  ]
},

// =====================================================
// 47. UNIÓN SAN FELIPE
// =====================================================

{
  id: "union-san-felipe",
  nombre: "Unión San Felipe",
  escudo: "Por confirmar: URL del escudo histórico de Unión San Felipe",
  apodo: "Uní-Uní, Albirrojos",
  fundacion: 1956,
  ciudad: "San Felipe",
  pais: "Chile",
  estado: "Activo",
  historia:
    "Unión San Felipe fue fundado el 16 de octubre de 1956 en San Felipe, tras la fusión de los clubes amateur Internacional y Tarcisio. La institución se convirtió en representante futbolístico del valle de Aconcagua y se incorporó al fútbol profesional en la Segunda División. En 1970 ganó el campeonato de ascenso bajo la dirección técnica de Luis Santibáñez y al año siguiente obtuvo el título de Primera División, una secuencia histórica que lo convirtió en el primer club chileno en conseguir consecutivamente ambos campeonatos. En 1972 participó en la Copa Libertadores. Ejerce su localía en el Estadio Municipal de San Felipe, también conocido como Estadio Municipal de la Avenida Maipú.",
  totalTitulosOficiales: 5,
  palmares: [
    {
      competencia: "Primera División de Chile",
      cantidad: 1,
      temporadas: ["1971"]
    },
    {
      competencia: "Copa Chile",
      cantidad: 1,
      temporadas: ["2009"]
    },
    {
      competencia: "Segunda División / Primera B de Chile",
      cantidad: 3,
      temporadas: ["1970", "2000", "2009"]
    }
  ],
  estadio: {
    nombre: "Estadio Municipal de San Felipe",
    ciudad: "San Felipe",
    capacidad: 10000,
    imagen: "Por confirmar: URL de fotografía del Estadio Municipal de San Felipe",
    descripcion:
      "Recinto municipal ubicado en la avenida Maipú, en San Felipe. Unión San Felipe utiliza este estadio desde su incorporación al fútbol profesional en 1958. El club informa una capacidad de 10.000 espectadores."
  },
  rivalidades: [
    {
      clubId: "trasandino",
      nombre: "Trasandino de Los Andes",
      descripcion:
        "Rivalidad regional conocida como el Clásico del Aconcagua, entre los representantes futbolísticos de San Felipe y Los Andes."
    }
  ],
  records: [
    {
      tipo: "Ascenso y campeonato de Primera División consecutivos",
      descripcion:
        "Unión San Felipe ganó el campeonato de Segunda División en 1970 y el título de Primera División en 1971, bajo la dirección técnica de Luis Santibáñez.",
      dato: "Campeón de Segunda División y Primera División en temporadas consecutivas",
      temporada: "1970–1971"
    },
    {
      tipo: "Participación internacional",
      descripcion:
        "Representó a Chile en la Copa Libertadores de América.",
      dato: "Participación en Copa Libertadores",
      temporada: "1972"
    },
    {
      tipo: "Fundación",
      descripcion:
        "La institución nació de la fusión de los clubes amateur Internacional y Tarcisio, en una reunión realizada en el Cuerpo de Bomberos de San Felipe.",
      dato: "16 de octubre de 1956",
      temporada: "1956"
    }
  ],
  jugadoresHistoricos: [
    {
      nombre: "Roberto Bellomo",
      posicion: "Por confirmar: posición",
      periodo: "Por confirmar: temporadas exactas",
      descripcion:
        "Integrante de la generación histórica de Unión San Felipe que alcanzó la Primera División."
    },
    {
      nombre: "Julio Baldovinos",
      posicion: "Por confirmar: posición",
      periodo: "Por confirmar: temporadas exactas",
      descripcion:
        "Jugador mencionado en la historia oficial del club entre los futbolistas destacados de sus primeros años en la máxima categoría."
    },
    {
      nombre: "Felipe Bracamonte",
      posicion: "Por confirmar: posición",
      periodo: "Por confirmar: temporadas exactas",
      descripcion:
        "Futbolista destacado en la historia de Unión San Felipe durante su etapa en Primera División."
    },
    {
      nombre: "Salvador Gálvez",
      posicion: "Por confirmar: posición",
      periodo: "Por confirmar: temporadas exactas",
      descripcion:
        "Integrante de la generación histórica del club que compitió en la máxima categoría."
    },
    {
      nombre: "Florindo Abaceta",
      posicion: "Por confirmar: posición",
      periodo: "Por confirmar: temporadas exactas",
      descripcion:
        "Jugador recordado en la historia institucional de Unión San Felipe."
    }
  ]
},

 // =====================================================
// 48. UNIVERSIDAD CATÓLICA
// =====================================================

{
  id: "universidad-catolica",
  nombre: "Universidad Católica",
  escudo: "Por confirmar: URL del escudo oficial de Universidad Católica",
  apodo: "Los Cruzados, La UC, La Franja",
  fundacion: 1937,
  ciudad: "Santiago",
  pais: "Chile",
  estado: "Activo",
  historia:
    "El Club Deportivo Universidad Católica tiene sus raíces en las actividades deportivas vinculadas a la Universidad Católica de Chile y en equipos universitarios que participaron en competencias desde comienzos del siglo XX. Su refundación institucional y afiliación al fútbol profesional se concretó el 21 de abril de 1937. Desde entonces se consolidó como uno de los clubes históricos del fútbol chileno. Ha obtenido campeonatos de Primera División, Copa Chile, Supercopa, títulos de Segunda División y la Copa Interamericana. Su estadio histórico es San Carlos de Apoquindo, actualmente conocido como Claro Arena.",
  totalTitulosOficiales: 28,
  palmares: [
    {
      competencia: "Primera División de Chile",
      cantidad: 16,
      temporadas: [
        "1949",
        "1954",
        "1961",
        "1966",
        "1984",
        "1987",
        "Apertura 1997",
        "Apertura 2002",
        "Clausura 2005",
        "2010",
        "Clausura 2016",
        "Apertura 2016",
        "2018",
        "2019",
        "2020",
        "2021"
      ]
    },
    {
      competencia: "Copa Chile",
      cantidad: 4,
      temporadas: ["1983", "1991", "1995", "2011"]
    },
    {
      competencia: "Supercopa de Chile",
      cantidad: 4,
      temporadas: ["2016", "2019", "2020", "2021"]
    },
    {
      competencia: "Segunda División / Primera B de Chile",
      cantidad: 2,
      temporadas: ["1956", "1975"]
    },
    {
      competencia: "Copa Interamericana",
      cantidad: 1,
      temporadas: ["1994"]
    },
    {
      competencia: "Copa de la República",
      cantidad: 1,
      temporadas: ["1983"]
    }
  ],
  estadio: {
    nombre: "Claro Arena (históricamente Estadio San Carlos de Apoquindo)",
    ciudad: "Las Condes, Santiago",
    capacidad: 0,
    imagen: "Por confirmar: URL de fotografía del Claro Arena",
    descripcion:
      "Estadio de Universidad Católica ubicado en el sector de San Carlos de Apoquindo, comuna de Las Condes. Fue inaugurado originalmente en 1988 y posteriormente remodelado como Claro Arena. Es el recinto de localía del primer equipo de fútbol y de otras actividades deportivas del club. Confirmar la capacidad vigente antes de mostrarla en la aplicación."
  },
  rivalidades: [
    {
      clubId: "universidad-chile",
      nombre: "Universidad de Chile",
      descripcion:
        "Rivalidad conocida como el Clásico Universitario, uno de los enfrentamientos tradicionales del fútbol chileno. Sus antecedentes se remontan a encuentros universitarios de comienzos del siglo XX y su disputa profesional comenzó en 1937."
    },
    {
      clubId: "colo-colo",
      nombre: "Colo-Colo",
      descripcion:
        "Enfrentamiento tradicional entre dos de los clubes con mayor trayectoria y títulos del fútbol chileno, conocido como el Clásico entre Universidad Católica y Colo-Colo."
    }
  ],
  records: [
    {
      tipo: "Tetracampeonato nacional",
      descripcion:
        "Universidad Católica consiguió cuatro campeonatos nacionales consecutivos, una secuencia histórica para el fútbol chileno.",
      dato: "4 títulos consecutivos",
      temporada: "2018–2021"
    },
    {
      tipo: "Título internacional",
      descripcion:
        "Ganó la Copa Interamericana, torneo que enfrentaba a los campeones de la Copa Libertadores y la Copa de Campeones de la Concacaf.",
      dato: "Campeón de la Copa Interamericana",
      temporada: "1994"
    },
    {
      tipo: "Subcampeonato continental",
      descripcion:
        "Alcanzó la final de la Copa Libertadores, donde enfrentó a São Paulo de Brasil.",
      dato: "Subcampeón de Copa Libertadores",
      temporada: "1993"
    },
    {
      tipo: "Récord de participación en clásicos",
      descripcion:
        "Mario Lepe es reconocido por disputar la mayor cantidad de Clásicos Universitarios representando a Universidad Católica.",
      dato: "35 partidos",
      temporada: "Por confirmar: período exacto"
    },
    {
      tipo: "Máximo goleador histórico",
      descripcion:
        "Fernando Zampedri superó el registro goleador histórico del club durante su etapa como delantero cruzado.",
      dato: "Por confirmar: cifra actualizada de goles oficiales",
      temporada: "Desde 2020"
    }
  ],
  jugadoresHistoricos: [
    {
      nombre: "Sergio Livingstone",
      posicion: "Arquero",
      periodo: "1930–1950",
      descripcion:
        "Uno de los grandes referentes históricos del club y del fútbol chileno. Fue arquero de Universidad Católica y de la selección chilena, además de destacar posteriormente como comentarista deportivo."
    },
    {
      nombre: "Raimundo Infante",
      posicion: "Delantero",
      periodo: "Décadas de 1940 y 1950",
      descripcion:
        "Figura de los equipos campeones de Primera División de 1949 y 1954. Es uno de los goleadores históricos de Universidad Católica y anotó nueve goles en el Clásico Universitario."
    },
    {
      nombre: "Alberto Fouillioux",
      posicion: "Delantero / Volante",
      periodo: "Décadas de 1960 y 1970",
      descripcion:
        "Referente cruzado y seleccionado chileno. Integró el plantel que obtuvo el campeonato nacional de 1966 y participó en las Copas Mundiales de 1962 y 1966."
    },
    {
      nombre: "Mario Lepe",
      posicion: "Volante",
      periodo: "1982–2000",
      descripcion:
        "Capitán e ídolo histórico de Universidad Católica. Es reconocido por su extensa trayectoria en el club y por ser el jugador con más participaciones en el Clásico Universitario."
    },
    {
      nombre: "José Pedro Fuenzalida",
      posicion: "Volante / Lateral",
      periodo: "2004–2008 y 2016–2022",
      descripcion:
        "Capitán y referente de la etapa más laureada del club en la década de 2010. Formó parte de los equipos campeones del tetracampeonato nacional."
    },
    {
      nombre: "Fernando Zampedri",
      posicion: "Delantero",
      periodo: "Desde 2020",
      descripcion:
        "Delantero argentino nacionalizado chileno y referente de Universidad Católica en la década de 2020. Se convirtió en el máximo goleador histórico del club y fue parte de los planteles campeones de 2020 y 2021."
    },
    {
      nombre: "Milovan Mirosevic",
      posicion: "Volante",
      periodo: "1997–2002, 2004–2006 y 2013–2016",
      descripcion:
        "Mediocampista formado en el club, capitán y referente de distintas generaciones cruzadas. Destacó por su capacidad goleadora y su participación en Clásicos Universitarios."
    }
  ]
},

 // =====================================================
// 49. UNIVERSIDAD DE CHILE
// =====================================================

{
  id: "universidad-chile",
  nombre: "Universidad de Chile",
  escudo: "Por confirmar: URL del escudo oficial de Universidad de Chile",
  apodo: "La U, El Chuncho, El Romántico Viajero",
  fundacion: 1927,
  ciudad: "Santiago",
  pais: "Chile",
  estado: "Activo",
  historia:
    "El Club Universidad de Chile fue fundado el 24 de mayo de 1927, a partir de la unión del Internado Football Club y la Federación Universitaria de Deportes. Sus antecedentes deportivos se remontan a instituciones estudiantiles de fines del siglo XIX y comienzos del XX. En 1934 adoptó oficialmente el nombre Universidad de Chile y en 1938 ingresó al fútbol profesional de Primera División. Es uno de los clubes históricos del fútbol chileno, con títulos nacionales y copas locales. En 2011 ganó por primera vez la Copa Sudamericana, de manera invicta, bajo la dirección técnica de Jorge Sampaoli.",
  totalTitulosOficiales: 28,
  palmares: [
    {
      competencia: "Primera División de Chile",
      cantidad: 18,
      temporadas: [
        "1940",
        "1959",
        "1962",
        "1964",
        "1965",
        "1967",
        "1969",
        "1994",
        "1995",
        "1999",
        "2000",
        "Apertura 2004",
        "Apertura 2009",
        "Apertura 2011",
        "Clausura 2011",
        "Apertura 2012",
        "Apertura 2014",
        "Clausura 2017"
      ]
    },
    {
      competencia: "Copa Chile",
      cantidad: 6,
      temporadas: [
        "1979",
        "1998",
        "2000",
        "2012-2013",
        "2015",
        "2024"
      ]
    },
    {
      competencia: "Supercopa de Chile",
      cantidad: 2,
      temporadas: ["2015", "2024"]
    },
    {
      competencia: "Primera B de Chile",
      cantidad: 1,
      temporadas: ["1989"]
    },
    {
      competencia: "Copa Sudamericana",
      cantidad: 1,
      temporadas: ["2011"]
    }
  ],
  estadio: {
    nombre: "Estadio Nacional Julio Martínez Prádanos",
    ciudad: "Ñuñoa, Santiago",
    capacidad: 0,
    imagen: "Por confirmar: URL de fotografía del Estadio Nacional",
    descripcion:
      "Principal recinto donde Universidad de Chile ejerce su localía. Está ubicado en la comuna de Ñuñoa, Santiago. Es un estadio de propiedad estatal y ha sido escenario de importantes encuentros del fútbol chileno e internacional. La capacidad debe confirmarse según la configuración vigente del recinto antes de mostrarla en la aplicación."
  },
  rivalidades: [
    {
      clubId: "universidad-catolica",
      nombre: "Universidad Católica",
      descripcion:
        "Rivalidad conocida como el Clásico Universitario. Sus antecedentes se remontan a los enfrentamientos entre equipos universitarios de comienzos del siglo XX y es uno de los partidos tradicionales del fútbol chileno."
    },
    {
      clubId: "colo-colo",
      nombre: "Colo-Colo",
      descripcion:
        "Rivalidad conocida como el Superclásico del fútbol chileno, disputada entre dos de los clubes de mayor convocatoria e historia del país."
    }
  ],
  records: [
    {
      tipo: "Campeón internacional invicto",
      descripcion:
        "Universidad de Chile ganó la Copa Sudamericana 2011 sin perder partidos: registró diez victorias y dos empates en doce encuentros.",
      dato: "10 triunfos, 2 empates y 0 derrotas",
      temporada: "2011"
    },
    {
      tipo: "Primer título internacional",
      descripcion:
        "La Copa Sudamericana 2011 fue el primer título internacional oficial del primer equipo masculino de Universidad de Chile.",
      dato: "Campeón de Copa Sudamericana",
      temporada: "2011"
    },
    {
      tipo: "Tricampeonato nacional",
      descripcion:
        "El club ganó tres campeonatos nacionales consecutivos durante el ciclo de Jorge Sampaoli.",
      dato: "Apertura 2011, Clausura 2011 y Apertura 2012",
      temporada: "2011–2012"
    },
    {
      tipo: "Fundación institucional",
      descripcion:
        "La unión que dio origen al Club Universitario de Deportes fue ratificada en una reunión realizada en dependencias del Diario Ilustrado.",
      dato: "24 de mayo de 1927",
      temporada: "1927"
    }
  ],
  jugadoresHistoricos: [
    {
      nombre: "Leonel Sánchez",
      posicion: "Delantero",
      periodo: "1953–1969",
      descripcion:
        "Ídolo histórico de Universidad de Chile e integrante del equipo conocido como el Ballet Azul. Fue figura del club y de la selección chilena que obtuvo el tercer lugar en la Copa Mundial de 1962."
    },
    {
      nombre: "Carlos Campos",
      posicion: "Delantero",
      periodo: "1956–1969",
      descripcion:
        "Uno de los máximos referentes goleadores de la historia del club. Fue parte fundamental del Ballet Azul y de los campeonatos nacionales obtenidos durante las décadas de 1950 y 1960."
    },
    {
      nombre: "Marcelo Salas",
      posicion: "Delantero",
      periodo: "1993–1996 y 2005–2008",
      descripcion:
        "Delantero formado en Universidad de Chile y figura de los campeonatos nacionales de 1994 y 1995. Posteriormente desarrolló una destacada carrera internacional en Argentina e Italia."
    },
    {
      nombre: "Johnny Herrera",
      posicion: "Arquero",
      periodo: "1999–2005 y 2011–2019",
      descripcion:
        "Arquero y referente de Universidad de Chile. Fue protagonista de los títulos nacionales de la década de 2010 y de la campaña que culminó con la Copa Sudamericana 2011."
    },
    {
      nombre: "José Rojas",
      posicion: "Defensor",
      periodo: "2003–2015 y 2016–2017",
      descripcion:
        "Defensor y capitán de Universidad de Chile durante una etapa de importantes títulos nacionales e internacionales. Integró el equipo campeón de la Copa Sudamericana 2011."
    },
    {
      nombre: "Eduardo Vargas",
      posicion: "Delantero",
      periodo: "2010–2011",
      descripcion:
        "Figura de la campaña de Copa Sudamericana 2011. Fue el máximo goleador del torneo continental y uno de los jugadores más determinantes del equipo dirigido por Jorge Sampaoli."
    },
    {
      nombre: "Charles Aránguiz",
      posicion: "Volante",
      periodo: "2011–2013",
      descripcion:
        "Mediocampista clave en los títulos nacionales y en la obtención de la Copa Sudamericana 2011. Destacó por su despliegue, recuperación y aporte ofensivo."
    },
    {
      nombre: "Marcelo Díaz",
      posicion: "Volante",
      periodo: "2005–2012 y desde 2024",
      descripcion:
        "Mediocampista formado en el club e integrante del plantel campeón de la Copa Sudamericana 2011. Es reconocido por su capacidad de distribución y liderazgo en el mediocampo."
    }
  ]
},

// =====================================================
// 50. UNIVERSIDAD DE CONCEPCIÓN
// =====================================================

{
  id: "universidad-concepcion",
  nombre: "Universidad de Concepción",
  escudo: "Por confirmar: URL del escudo oficial de Universidad de Concepción",
  apodo: "El Campanil, Los del Foro, UdeC",
  fundacion: 1994,
  ciudad: "Concepción",
  pais: "Chile",
  estado: "Activo",
  historia:
    "El Club Deportivo Universidad de Concepción fue constituido el 8 de agosto de 1994 como parte de la Corporación Club Deportivo Universidad de Concepción, con antecedentes en el antiguo Club Deportivo Universitario. Su equipo de fútbol comenzó a competir en categorías nacionales y consiguió el ascenso al fútbol profesional en 1997. En 2003 debutó en Primera División. Ha ganado dos ediciones de la Copa Chile y dos campeonatos de Primera B, incluyendo el título de 2025 que le permitió regresar a Primera División para la temporada 2026. Sus colores tradicionales son el amarillo y el azul, y su escudo incorpora el Campanil de la Universidad de Concepción.",
  totalTitulosOficiales: 4,
  palmares: [
    {
      competencia: "Copa Chile",
      cantidad: 2,
      temporadas: ["2008-09", "2014-15"]
    },
    {
      competencia: "Primera B de Chile",
      cantidad: 2,
      temporadas: ["Transición 2013", "2025"]
    }
  ],
  estadio: {
    nombre: "Estadio Municipal Alcaldesa Ester Roa Rebolledo",
    ciudad: "Concepción",
    capacidad: 30448,
    imagen: "Por confirmar: URL de fotografía del Estadio Ester Roa Rebolledo",
    descripcion:
      "Recinto municipal ubicado en el sector de Collao, Concepción. Es el estadio donde Universidad de Concepción disputa habitualmente sus partidos como local. Fue remodelado para la Copa América 2015 y también ha albergado encuentros de otros clubes de la zona."
  },
  rivalidades: [
    {
      clubId: "deportes-concepcion",
      nombre: "Deportes Concepción",
      descripcion:
        "Rivalidad local entre los dos clubes profesionales de la ciudad de Concepción, cuyos enfrentamientos son conocidos como clásicos penquistas. Se han enfrentado en competencias de Primera División, Primera B y Copa Chile."
    },
    {
      clubId: "ñublense",
      nombre: "Ñublense",
      descripcion:
        "Enfrentamiento regional entre representantes de Concepción y Chillán, dentro del fútbol de la zona centro-sur de Chile."
    }
  ],
  records: [
    {
      tipo: "Campeonato de Primera B",
      descripcion:
        "Ganó el campeonato de Transición de Primera B y consiguió el ascenso a Primera División.",
      dato: "Campeón de Primera B",
      temporada: "2013"
    },
    {
      tipo: "Campeonato de Primera B",
      descripcion:
        "Se coronó campeón de la Liga de Ascenso 2025 y obtuvo el regreso a Primera División para la temporada siguiente.",
      dato: "Campeón y ascenso a Primera División",
      temporada: "2025"
    },
    {
      tipo: "Campeón de Copa Chile",
      descripcion:
        "Obtuvo su primera Copa Chile tras vencer a Deportes Ovalle en la final.",
      dato: "Campeón de Copa Chile",
      temporada: "2008-09"
    },
    {
      tipo: "Subcampeonato de Primera División",
      descripcion:
        "Consiguió el segundo lugar del campeonato nacional, una de sus mejores campañas en la máxima categoría.",
      dato: "Subcampeón",
      temporada: "2018"
    },
    {
      tipo: "Competición internacional",
      descripcion:
        "Ha participado en la Copa Libertadores y en la Copa Sudamericana, representando a Concepción en torneos continentales.",
      dato: "Participaciones en Copa Libertadores y Copa Sudamericana",
      temporada: "2004–2019"
    }
  ],
  jugadoresHistoricos: [
    {
      nombre: "Gabriel Vargas",
      posicion: "Delantero",
      periodo: "2006–2012 y 2015–2018",
      descripcion:
        "Delantero identificado con Universidad de Concepción y uno de los principales referentes ofensivos de la institución. Integró equipos que compitieron en Primera División y torneos internacionales."
    },
    {
      nombre: "Fernando Manríquez",
      posicion: "Volante",
      periodo: "Por confirmar: temporadas exactas",
      descripcion:
        "Mediocampista que formó parte de distintas etapas del club en el fútbol profesional."
    },
    {
      nombre: "Pedro Muñoz",
      posicion: "Delantero",
      periodo: "Por confirmar: temporadas exactas",
      descripcion:
        "Atacante que integró planteles destacados de Universidad de Concepción en el fútbol chileno."
    },
    {
      nombre: "Hugo Droguett",
      posicion: "Volante",
      periodo: "Por confirmar: temporadas exactas",
      descripcion:
        "Mediocampista ofensivo con trayectoria en el fútbol chileno que defendió a Universidad de Concepción."
    },
    {
      nombre: "Cristián Muñoz",
      posicion: "Arquero",
      periodo: "Por confirmar: temporadas exactas",
      descripcion:
        "Arquero que integró planteles del Campanil durante su participación en el fútbol profesional."
    }
  ]
},

 // =====================================================
// 51. ÑUBLENSE
// =====================================================

{
  id: "ñublense",
  nombre: "Ñublense",
  escudo: "Por confirmar: URL del escudo oficial de Ñublense",
  apodo: "Los Diablos Rojos, El Rojo",
  fundacion: 1916,
  ciudad: "Chillán",
  pais: "Chile",
  estado: "Activo",
  historia:
    "Ñublense fue fundado el 20 de agosto de 1916 en Chillán por un grupo de profesores y estudiantes del Liceo de Hombres, liderados por Manuel Lara Gutiérrez. Su nombre inicial fue Liceo Football Club y posteriormente adoptó la denominación Ñublense. Durante décadas compitió en el fútbol amateur regional y en 1959 ingresó al fútbol profesional. Ganó campeonatos de Segunda División y Primera B, además de títulos de Tercera División. En 2022 consiguió el subcampeonato de Primera División y clasificó por primera vez a la Copa Libertadores. Su estadio es el Bicentenario Municipal Nelson Oyarzún Arenas.",
  totalTitulosOficiales: 3,
  palmares: [
    {
      competencia: "Segunda División / Primera B de Chile",
      cantidad: 3,
      temporadas: ["1971", "1976", "2020"]
    }
  ],
  estadio: {
    nombre: "Estadio Bicentenario Municipal Nelson Oyarzún Arenas",
    ciudad: "Chillán",
    capacidad: 12000,
    imagen: "Por confirmar: URL de fotografía del Estadio Nelson Oyarzún Arenas",
    descripcion:
      "Estadio municipal de Chillán que Ñublense utiliza como local. El recinto original fue inaugurado en 1935 y recibió el nombre de Nelson Oyarzún en 1978, en homenaje al entrenador del club. Fue reconstruido y remodelado para la Copa Mundial Femenina Sub-20 de 2008. Su capacidad publicada históricamente es de aproximadamente 12.000 espectadores."
  },
  rivalidades: [
    {
      clubId: "universidad-concepcion",
      nombre: "Universidad de Concepción",
      descripcion:
        "Enfrentamiento regional entre Ñublense, representante de Chillán, y Universidad de Concepción, representante de la capital del Biobío. Ambos clubes han coincidido en Primera División, Primera B y otras competiciones nacionales."
    },
    {
      clubId: "curico-unido",
      nombre: "Curicó Unido",
      descripcion:
        "Rivalidad regional entre clubes del centro-sur de Chile, con enfrentamientos en distintas categorías del fútbol profesional."
    }
  ],
  records: [
    {
      tipo: "Primer campeonato profesional",
      descripcion:
        "Ñublense ganó el campeonato de Segunda División y consiguió el ascenso a Primera División.",
      dato: "Campeón de Segunda División",
      temporada: "1971"
    },
    {
      tipo: "Campeonato de Primera B",
      descripcion:
        "Obtuvo el título de la segunda categoría del fútbol chileno.",
      dato: "Campeón de Primera B",
      temporada: "1976"
    },
    {
      tipo: "Campeonato de Primera B",
      descripcion:
        "Volvió a coronarse campeón de la segunda categoría y logró el ascenso.",
      dato: "Campeón de Primera B",
      temporada: "2020"
    },
    {
      tipo: "Campeonatos de Tercera División",
      descripcion:
        "Consiguió tres títulos de Tercera División antes de consolidarse nuevamente en el fútbol profesional.",
      dato: "Campeón en 1985, 1992 y 2004",
      temporada: "1985, 1992 y 2004"
    },
    {
      tipo: "Mejor campaña en Primera División",
      descripcion:
        "Terminó como subcampeón del campeonato nacional y clasificó por primera vez a la Copa Libertadores.",
      dato: "Subcampeón de Primera División",
      temporada: "2022"
    },
    {
      tipo: "Primera participación en Copa Libertadores",
      descripcion:
        "Clasificó por primera vez al principal torneo de clubes de Sudamérica luego de su campaña de Primera División de 2022.",
      dato: "Debut en Copa Libertadores",
      temporada: "2023"
    }
  ],
  jugadoresHistoricos: [
    {
      nombre: "Nelson Oyarzún",
      posicion: "Director técnico",
      periodo: "Década de 1970",
      descripcion:
        "Entrenador histórico de Ñublense, recordado por su vínculo con Chillán y por su influencia en la identidad del club. El estadio de la institución lleva su nombre."
    },
    {
      nombre: "Manuel Lara Gutiérrez",
      posicion: "Fundador",
      periodo: "1916",
      descripcion:
        "Profesor que lideró, junto a estudiantes del Liceo de Hombres de Chillán, la fundación del club que inicialmente se llamó Liceo Football Club."
    },
    {
      nombre: "Patricio Rubio",
      posicion: "Delantero",
      periodo: "2022–2024",
      descripcion:
        "Delantero que fue una de las principales figuras ofensivas de Ñublense durante su etapa reciente en Primera División."
    },
    {
      nombre: "Mathias Riquero",
      posicion: "Volante",
      periodo: "Por confirmar: temporadas exactas",
      descripcion:
        "Mediocampista uruguayo que destacó en el fútbol chileno y defendió a Ñublense."
    },
    {
      nombre: "Manuel Villalobos",
      posicion: "Delantero",
      periodo: "Por confirmar: temporadas exactas",
      descripcion:
        "Atacante chileno que vistió la camiseta de Ñublense y desarrolló una trayectoria destacada en el fútbol nacional."
    }
  ]
},
];
// =====================================================
// FUNCIÓN PARA BUSCAR UN CLUB POR SU ID
// =====================================================

export function obtenerClubPorId(
  id: string
): ClubHistorico | undefined {
  return CLUBES_HISTORICOS.find((club) => club.id === id);
}