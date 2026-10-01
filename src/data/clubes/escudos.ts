import { ImageSourcePropType } from "react-native";

export type EscudoHistorico = {
  source: ImageSourcePropType;
  periodo: string;
};

export const ESCUDOS_CLUBES: Record<string, ImageSourcePropType> = {
  "aleman": require("../../../assets/images/clubes/Aleman/Depor_Aleman_1934.png"),
  "antofagasta": require("../../../assets/images/clubes/Antofagasta/antofagasta_2005.png"),
  "audax-italiano": require("../../../assets/images/clubes/Audax_Italiano/Audax_Italiano_2022.webp"),
  "aviacion": require("../../../assets/images/clubes/Aviacion/Aviacion.png"),
  "badminton": require("../../../assets/images/clubes/Badminton/Badminton.png"),
  "barnechea": require("../../../assets/images/clubes/Barnechea/Athletic_Club_Barnechea.png"),
  "carlos-walker": require("../../../assets/images/clubes/C_Walker/Carlos_Walker_1934.png"),
  "cobreloa": require("../../../assets/images/clubes/Cobreloa/Cobreloa_2013.webp"),
  "cobresal": require("../../../assets/images/clubes/Cobresal/Escudo_Cobresal.webp"),
  "colo-colo": require("../../../assets/images/clubes/ColoColo/Colo_Colo_2023.webp"),
  "coquimbo-unido": require("../../../assets/images/clubes/Coquimbo_Unido/coquimbo_unido_2007.png"),
  "curico-unido": require("../../../assets/images/clubes/Curico_Unido/Curico_Unido.png"),
  "deportes-concepcion": require("../../../assets/images/clubes/Depor_Conce/deportes-concepcion_2020.jpg"),
  "deportes-copiapo": require("../../../assets/images/clubes/Depor_Copiapo/Deportes_Copiapo_2015.webp"),
  "deportes-iberia": require("../../../assets/images/clubes/Depor_Iberia/Deportes_Iberia.webp"),
  "deportes-iquique": require("../../../assets/images/clubes/Depor_iquique/Deportes_Iquique_2008.webp"),
  "deportes-la-serena": require("../../../assets/images/clubes/Depor_Serena/la_serena_1974.webp"),
  "deportes-limache": require("../../../assets/images/clubes/Depor_Limache/limache.png"),
  "deportes-melipilla": require("../../../assets/images/clubes/Depor_Melipilla/Deportes-Melipilla.webp"),
  "deportes-puerto-montt": require("../../../assets/images/clubes/Depor_PuertoMontt/Club_de_Deportes_Puerto_Montt_2016.webp"),
  "deportes-valdivia": require("../../../assets/images/clubes/Depor_Valdivia/Deportes_Valdivia_2003.webp"),
  "everton": require("../../../assets/images/clubes/Everton/Everton_2014.png"),
  "fernandez-vial": require("../../../assets/images/clubes/Vial/ESCUDO_VIAL.png"),
  "ferrobadminton": require("../../../assets/images/clubes/FerroBadminton/FerroBadminton.png"),
  "ferroviarios": require("../../../assets/images/clubes/Ferroviarios/Ferroviarios_1934.png"),
  "deportes-temuco": require("../../../assets/images/clubes/Green_Cross/Deportes_Temuco_1965.png"),
  "huachipato": require("../../../assets/images/clubes/Huachipato/Huachipato_2017.png"),
  "lota-schwager": require("../../../assets/images/clubes/Lota_Schwager/Logo_Lota_Schwager.webp"),
  "magallanes": require("../../../assets/images/clubes/Magallanes/Magallanes_2011.png"),
  "metropolitano": require("../../../assets/images/clubes/Metropolitano/Metropolitano.png"),
  "morning-star": require("../../../assets/images/clubes/M_Star/Morning_Star.gif"),
  "naval": require("../../../assets/images/clubes/Naval/Naval_2023.png"),
  "ohiggins": require("../../../assets/images/clubes/Ohiggins/o-higgins-2014.png"),
  "palestino": require("../../../assets/images/clubes/Palestino/cd-palestino-2014-logo.png"),
  "provincial-osorno": require("../../../assets/images/clubes/Provincial_Osorno/Osorno_2013.png"),
  "rangers": require("../../../assets/images/clubes/Rangers/Rangers_1977.webp"),
  "regional-atacama": require("../../../assets/images/clubes/Regional_Atacama/Regional_Atacama_1979.png"),
  "santiago": require("../../../assets/images/clubes/Santiago/Santiago_1934.png"),
  "santiago-morning": require("../../../assets/images/clubes/Santiago_Morning/Santiago_Morning_2014.png"),
  "santiago-national": require("../../../assets/images/clubes/S_National/Santiago_National.png"),
  "santiago-wanderers": require("../../../assets/images/clubes/Santiago_Wanders/Waanders_2002.png"),
  "san-luis": require("../../../assets/images/clubes/San_Luis/LOGO_SAN_LUIS_DE_QUILLOTA_OFICIAL.png"),
  "san-marcos": require("../../../assets/images/clubes/San_Marcos/LogoSanMarcosArica.webp"),
  "trasandino": require("../../../assets/images/clubes/Trasandino/Escudo_Trasandino_Los_Andes.webp"),
  "union-espanola": require("../../../assets/images/clubes/Union_Española/Union_1945.webp"),
  "union-la-calera": require("../../../assets/images/clubes/Union_La-Calera/Union_Calera_2020.webp"),
  "union-san-felipe": require("../../../assets/images/clubes/Union_San-Felipe/Unión_San_Felipe_2019.png"),
  "universidad-catolica": require("../../../assets/images/clubes/U_Catolica/Club_UC_1977.webp"),
  "universidad-chile": require("../../../assets/images/clubes/U_de-Chile/1995udechile.webp"),
  "universidad-concepcion": require("../../../assets/images/clubes/U_Concepcion/universidad-de-concepcion-2010-2025-logo.png"),
  "ñublense": require("../../../assets/images/clubes/Ñublense/Ñublense_2005.png"),
};

export const HISTORIAL_ESCUDOS: Record<string, EscudoHistorico[]> = {
  "aleman": [
    { source: require("../../../assets/images/clubes/Aleman/Depor_Aleman_1934.png"), periodo: "1934" },
  ],
  "antofagasta": [
    { source: require("../../../assets/images/clubes/Antofagasta/antofagasta_1966.jpg"), periodo: "1966" },
    { source: require("../../../assets/images/clubes/Antofagasta/antofagasta_1975.jpg"), periodo: "1975" },
    { source: require("../../../assets/images/clubes/Antofagasta/antofagasta_1997.jpg"), periodo: "1997" },
    { source: require("../../../assets/images/clubes/Antofagasta/antofagasta_2005.png"), periodo: "2005" },
  ],
  "audax-italiano": [
    { source: require("../../../assets/images/clubes/Audax_Italiano/Audax_Italiano_1921.webp"), periodo: "1921" },
    { source: require("../../../assets/images/clubes/Audax_Italiano/Audax_Italiano_1946.webp"), periodo: "1946" },
    { source: require("../../../assets/images/clubes/Audax_Italiano/Audax_Italiano_1977.webp"), periodo: "1977" },
    { source: require("../../../assets/images/clubes/Audax_Italiano/Audax_Italiano_2000.webp"), periodo: "2000" },
    { source: require("../../../assets/images/clubes/Audax_Italiano/Audax_Italiano_2022.webp"), periodo: "2022" },
  ],
  "aviacion": [
    { source: require("../../../assets/images/clubes/Aviacion/Aviacion.png"), periodo: "Periodo no identificado" },
  ],
  "badminton": [
    { source: require("../../../assets/images/clubes/Badminton/Badminton.png"), periodo: "Periodo no identificado" },
  ],
  "barnechea": [
    { source: require("../../../assets/images/clubes/Barnechea/Athletic_Club_Barnechea.png"), periodo: "Periodo no identificado" },
  ],
  "carlos-walker": [
    { source: require("../../../assets/images/clubes/C_Walker/Carlos_Walker_1934.png"), periodo: "1934" },
  ],
  "cobreloa": [
    { source: require("../../../assets/images/clubes/Cobreloa/Cobreloa_1979.png"), periodo: "1979" },
    { source: require("../../../assets/images/clubes/Cobreloa/Cobreloa_1995.png"), periodo: "1995" },
    { source: require("../../../assets/images/clubes/Cobreloa/Cobreloa_2000.png"), periodo: "2000" },
    { source: require("../../../assets/images/clubes/Cobreloa/Cobreloa_2005.png"), periodo: "2005" },
    { source: require("../../../assets/images/clubes/Cobreloa/Cobreloa_2013.webp"), periodo: "2013" },
  ],
  "cobresal": [
    { source: require("../../../assets/images/clubes/Cobresal/Escudo_Cobresal.webp"), periodo: "Periodo no identificado" },
  ],
  "colo-colo": [
    { source: require("../../../assets/images/clubes/ColoColo/Colo_Colo_1925.webp"), periodo: "1925" },
    { source: require("../../../assets/images/clubes/ColoColo/Colo_Colo_1951.webp"), periodo: "1951" },
    { source: require("../../../assets/images/clubes/ColoColo/Colo_Colo_1973.webp"), periodo: "1973" },
    { source: require("../../../assets/images/clubes/ColoColo/Colo_Colo_1980.webp"), periodo: "1980" },
    { source: require("../../../assets/images/clubes/ColoColo/Colo_Colo_2004.webp"), periodo: "2004" },
    { source: require("../../../assets/images/clubes/ColoColo/Colo_Colo_2023.webp"), periodo: "2023" },
  ],
  "coquimbo-unido": [
    { source: require("../../../assets/images/clubes/Coquimbo_Unido/coquimbo_unido_1958.png"), periodo: "1958" },
    { source: require("../../../assets/images/clubes/Coquimbo_Unido/coquimbo_unido_1989.png"), periodo: "1989" },
    { source: require("../../../assets/images/clubes/Coquimbo_Unido/coquimbo_unido_2007.png"), periodo: "2007" },
  ],
  "curico-unido": [
    { source: require("../../../assets/images/clubes/Curico_Unido/Curico_Unido.png"), periodo: "Periodo no identificado" },
  ],
  "deportes-concepcion": [
    { source: require("../../../assets/images/clubes/Depor_Conce/deportes-concepcion_1966.png"), periodo: "1966" },
    { source: require("../../../assets/images/clubes/Depor_Conce/deportes-concepcion_1998.png"), periodo: "1998" },
    { source: require("../../../assets/images/clubes/Depor_Conce/deportes-concepcion_2020.jpg"), periodo: "2020" },
  ],
  "deportes-copiapo": [
    { source: require("../../../assets/images/clubes/Depor_Copiapo/Deportes_Copiapo_1999.webp"), periodo: "1999" },
    { source: require("../../../assets/images/clubes/Depor_Copiapo/Deportes_Copiapo_2010.webp"), periodo: "2010" },
    { source: require("../../../assets/images/clubes/Depor_Copiapo/Deportes_Copiapo_2015.webp"), periodo: "2015" },
  ],
  "deportes-iberia": [
    { source: require("../../../assets/images/clubes/Depor_Iberia/Deportes_Iberia.webp"), periodo: "Periodo no identificado" },
  ],
  "deportes-iquique": [
    { source: require("../../../assets/images/clubes/Depor_iquique/deportes-iquique-1978.png"), periodo: "1978" },
    { source: require("../../../assets/images/clubes/Depor_iquique/deportes-iquique-2000.png"), periodo: "2000" },
    { source: require("../../../assets/images/clubes/Depor_iquique/Deportes_Iquique_2008.webp"), periodo: "2008" },
  ],
  "deportes-la-serena": [
    { source: require("../../../assets/images/clubes/Depor_Serena/la_serena_1955.png"), periodo: "1955" },
    { source: require("../../../assets/images/clubes/Depor_Serena/la_serena_1974.webp"), periodo: "1974" },
  ],
  "deportes-limache": [
    { source: require("../../../assets/images/clubes/Depor_Limache/limache.png"), periodo: "Periodo no identificado" },
  ],
  "deportes-melipilla": [
    { source: require("../../../assets/images/clubes/Depor_Melipilla/Deportes-Melipilla.webp"), periodo: "Periodo no identificado" },
  ],
  "deportes-puerto-montt": [
    { source: require("../../../assets/images/clubes/Depor_PuertoMontt/Club_de_Deportes_Puerto_Montt_1983.png"), periodo: "1983" },
    { source: require("../../../assets/images/clubes/Depor_PuertoMontt/Club_de_Deportes_Puerto_Montt_2003.webp"), periodo: "2003" },
    { source: require("../../../assets/images/clubes/Depor_PuertoMontt/Club_de_Deportes_Puerto_Montt_2016.webp"), periodo: "2016" },
  ],
  "deportes-valdivia": [
    { source: require("../../../assets/images/clubes/Depor_Valdivia/Deportes_Valdivia_1983-1991.webp"), periodo: "1983–1991" },
    { source: require("../../../assets/images/clubes/Depor_Valdivia/Deportes_Valdivia_2003.webp"), periodo: "2003" },
  ],
  "everton": [
    { source: require("../../../assets/images/clubes/Everton/Everton_1944.png"), periodo: "1944" },
    { source: require("../../../assets/images/clubes/Everton/Everton_1962.png"), periodo: "1962" },
    { source: require("../../../assets/images/clubes/Everton/Everton_1979.png"), periodo: "1979" },
    { source: require("../../../assets/images/clubes/Everton/Everton_1991.png"), periodo: "1991" },
    { source: require("../../../assets/images/clubes/Everton/Everton_2014.png"), periodo: "2014" },
  ],
  "fernandez-vial": [
    { source: require("../../../assets/images/clubes/Vial/ESCUDO_VIAL.png"), periodo: "Periodo no identificado" },
  ],
  "ferrobadminton": [
    { source: require("../../../assets/images/clubes/FerroBadminton/FerroBadminton.png"), periodo: "Periodo no identificado" },
  ],
  "ferroviarios": [
    { source: require("../../../assets/images/clubes/Ferroviarios/Ferroviarios_1934.png"), periodo: "1934" },
  ],
  "deportes-temuco": [
    { source: require("../../../assets/images/clubes/Green_Cross/Green_Cross_1933.webp"), periodo: "1933" },
    { source: require("../../../assets/images/clubes/Green_Cross/Deportes_Temuco_1965.png"), periodo: "1965" },
  ],
  "huachipato": [
    { source: require("../../../assets/images/clubes/Huachipato/Huachipato_1963.png"), periodo: "1963" },
    { source: require("../../../assets/images/clubes/Huachipato/Huachipato_1964.png"), periodo: "1964" },
    { source: require("../../../assets/images/clubes/Huachipato/Huachipato_1967.png"), periodo: "1967" },
    { source: require("../../../assets/images/clubes/Huachipato/Huachipato_2017.png"), periodo: "2017" },
  ],
  "lota-schwager": [
    { source: require("../../../assets/images/clubes/Lota_Schwager/Logo_Lota_Schwager.webp"), periodo: "Periodo no identificado" },
  ],
  "magallanes": [
    { source: require("../../../assets/images/clubes/Magallanes/Magallanes_1933.png"), periodo: "1933" },
    { source: require("../../../assets/images/clubes/Magallanes/Magallanes_1940.png"), periodo: "1940" },
    { source: require("../../../assets/images/clubes/Magallanes/Magallanes_1950.png"), periodo: "1950" },
    { source: require("../../../assets/images/clubes/Magallanes/Magallanes_1990.png"), periodo: "1990" },
    { source: require("../../../assets/images/clubes/Magallanes/Magallanes_2006.webp"), periodo: "2006" },
    { source: require("../../../assets/images/clubes/Magallanes/Magallanes_2011.png"), periodo: "2011" },
  ],
  "metropolitano": [
    { source: require("../../../assets/images/clubes/Metropolitano/Metropolitano.png"), periodo: "Periodo no identificado" },
  ],
  "morning-star": [
    { source: require("../../../assets/images/clubes/M_Star/Morning_Star.gif"), periodo: "Periodo no identificado" },
  ],
  "naval": [
    { source: require("../../../assets/images/clubes/Naval/Naval_1er-escudo.png"), periodo: "Periodo no identificado" },
    { source: require("../../../assets/images/clubes/Naval/Naval_2005.png"), periodo: "2005" },
    { source: require("../../../assets/images/clubes/Naval/Naval_2023.png"), periodo: "2023" },
  ],
  "ohiggins": [
    { source: require("../../../assets/images/clubes/Ohiggins/o-higgins_1955.png"), periodo: "1955" },
    { source: require("../../../assets/images/clubes/Ohiggins/o-higgins_1960.png"), periodo: "1960" },
    { source: require("../../../assets/images/clubes/Ohiggins/o-higgins_1980.png"), periodo: "1980" },
    { source: require("../../../assets/images/clubes/Ohiggins/o-higgins-1990.png"), periodo: "1990" },
    { source: require("../../../assets/images/clubes/Ohiggins/o-higgins-2014.png"), periodo: "2014" },
  ],
  "palestino": [
    { source: require("../../../assets/images/clubes/Palestino/cd-palestino-1920-1949-logo.png"), periodo: "1920–1949" },
    { source: require("../../../assets/images/clubes/Palestino/cd-palestino-1949-1984-logo.png"), periodo: "1949–1984" },
    { source: require("../../../assets/images/clubes/Palestino/cd-palestino-1984-1991-logo.png"), periodo: "1984–1991" },
    { source: require("../../../assets/images/clubes/Palestino/cd-palestino-1991-2005-logo.png"), periodo: "1991–2005" },
    { source: require("../../../assets/images/clubes/Palestino/cd-palestino-2005-2008-logo.png"), periodo: "2005–2008" },
    { source: require("../../../assets/images/clubes/Palestino/cd-palestino-2008-2014-logo.png"), periodo: "2008–2014" },
    { source: require("../../../assets/images/clubes/Palestino/cd-palestino-2014-logo.png"), periodo: "2014" },
  ],
  "provincial-osorno": [
    { source: require("../../../assets/images/clubes/Provincial_Osorno/Osorno_1983.png"), periodo: "1983" },
    { source: require("../../../assets/images/clubes/Provincial_Osorno/Osorno_1996.png"), periodo: "1996" },
    { source: require("../../../assets/images/clubes/Provincial_Osorno/Osorno_2007.png"), periodo: "2007" },
    { source: require("../../../assets/images/clubes/Provincial_Osorno/Osorno_2013.png"), periodo: "2013" },
  ],
  "rangers": [
    { source: require("../../../assets/images/clubes/Rangers/Rangers_1er-escudo.webp"), periodo: "Periodo no identificado" },
    { source: require("../../../assets/images/clubes/Rangers/Rangers_1977.webp"), periodo: "1977" },
  ],
  "regional-atacama": [
    { source: require("../../../assets/images/clubes/Regional_Atacama/Regional_Atacama_1979.png"), periodo: "1979" },
  ],
  "santiago": [
    { source: require("../../../assets/images/clubes/Santiago/Santiago_1934.png"), periodo: "1934" },
  ],
  "santiago-morning": [
    { source: require("../../../assets/images/clubes/Santiago_Morning/Santiago_Morning_1936.png"), periodo: "1936" },
    { source: require("../../../assets/images/clubes/Santiago_Morning/Santiago_Morning_1942.png"), periodo: "1942" },
    { source: require("../../../assets/images/clubes/Santiago_Morning/Santiago_Morning_1966.png"), periodo: "1966" },
    { source: require("../../../assets/images/clubes/Santiago_Morning/Santiago_Morning_1979.png"), periodo: "1979" },
    { source: require("../../../assets/images/clubes/Santiago_Morning/Santiago_Morning_2014.png"), periodo: "2014" },
  ],
  "santiago-national": [
    { source: require("../../../assets/images/clubes/S_National/Santiago_National.png"), periodo: "Periodo no identificado" },
  ],
  "santiago-wanderers": [
    { source: require("../../../assets/images/clubes/Santiago_Wanders/Wanders_1937.png"), periodo: "1937" },
    { source: require("../../../assets/images/clubes/Santiago_Wanders/Wanders_1945.png"), periodo: "1945" },
    { source: require("../../../assets/images/clubes/Santiago_Wanders/Waanders_2002.png"), periodo: "2002" },
  ],
  "san-luis": [
    { source: require("../../../assets/images/clubes/San_Luis/LOGO_SAN_LUIS_DE_QUILLOTA_OFICIAL.png"), periodo: "Periodo no identificado" },
  ],
  "san-marcos": [
    { source: require("../../../assets/images/clubes/San_Marcos/LogoSanMarcosArica.webp"), periodo: "Periodo no identificado" },
  ],
  "trasandino": [
    { source: require("../../../assets/images/clubes/Trasandino/Escudo_Trasandino_Los_Andes.webp"), periodo: "Periodo no identificado" },
  ],
  "union-espanola": [
    { source: require("../../../assets/images/clubes/Union_Española/Union_1933.png"), periodo: "1933" },
    { source: require("../../../assets/images/clubes/Union_Española/Union_1935.png"), periodo: "1935" },
    { source: require("../../../assets/images/clubes/Union_Española/Union_1945.webp"), periodo: "1945" },
  ],
  "union-la-calera": [
    { source: require("../../../assets/images/clubes/Union_La-Calera/Union_Calera_1954.png"), periodo: "1954" },
    { source: require("../../../assets/images/clubes/Union_La-Calera/Union_Calera_1964.png"), periodo: "1964" },
    { source: require("../../../assets/images/clubes/Union_La-Calera/Union_Calera_2020.webp"), periodo: "2020" },
  ],
  "union-san-felipe": [
    { source: require("../../../assets/images/clubes/Union_San-Felipe/Unión_San_Felipe_1956.png"), periodo: "1956" },
    { source: require("../../../assets/images/clubes/Union_San-Felipe/Unión_San_Felipe_2000.png"), periodo: "2000" },
    { source: require("../../../assets/images/clubes/Union_San-Felipe/Unión_San_Felipe_2019.png"), periodo: "2019" },
  ],
  "universidad-catolica": [
    { source: require("../../../assets/images/clubes/U_Catolica/Club_UC_1937.webp"), periodo: "1937" },
    { source: require("../../../assets/images/clubes/U_Catolica/Club_UC_1977.webp"), periodo: "1977" },
  ],
  "universidad-chile": [
    { source: require("../../../assets/images/clubes/U_de-Chile/1935udechile.webp"), periodo: "1935" },
    { source: require("../../../assets/images/clubes/U_de-Chile/1941udechile.webp"), periodo: "1941" },
    { source: require("../../../assets/images/clubes/U_de-Chile/1947udechile.webp"), periodo: "1947" },
    { source: require("../../../assets/images/clubes/U_de-Chile/1985udechile.webp"), periodo: "1985" },
    { source: require("../../../assets/images/clubes/U_de-Chile/1995udechile.webp"), periodo: "1995" },
  ],
  "universidad-concepcion": [
    { source: require("../../../assets/images/clubes/U_Concepcion/universidad-de-concepcion-1998-2009-logo.png"), periodo: "1998–2009" },
    { source: require("../../../assets/images/clubes/U_Concepcion/universidad-de-concepcion-2010-2025-logo.png"), periodo: "2010–2025" },
  ],
  "ñublense": [
    { source: require("../../../assets/images/clubes/Ñublense/1er_escudo.png"), periodo: "Periodo no identificado" },
    { source: require("../../../assets/images/clubes/Ñublense/Ñublense_1983.png"), periodo: "1983" },
    { source: require("../../../assets/images/clubes/Ñublense/Ñublense_2005.png"), periodo: "2005" },
  ],
};
