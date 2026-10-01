import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./clubes.styles";

type Zona = "Norte" | "Centro" | "Sur";

type EstadoClub = "Activo" | "Desaparecido";

type Categoria =
  | "Primera División"
  | "Ascenso"
  | "Segunda División"
  | "Tercera A"
  | "Tercera B";

type Club = {
  id: string;
  nombre: string;
  ciudad: string;
  logo?: ImageSourcePropType;
  fundacion: number;
  zona: Zona;
  estado: EstadoClub;
  categoria: Categoria | null;
};

type DatosClub = Omit<
  Club,
  "id" | "nombre" | "ciudad" | "logo"
>;

const CLUBES_BASE: Omit<
  Club,
  "fundacion" | "zona" | "estado" | "categoria" | "ciudad"
>[] = [
  {
    id: "aleman",
    nombre: "Alemán",
    logo: require("../../assets/images/clubes/Aleman/Depor_Aleman_1934.png"),
  },
  {
    id: "antofagasta",
    nombre: "Antofagasta",
    logo: require("../../assets/images/clubes/Antofagasta/antofagasta_2005.png"),
  },
  {
    id: "audax-italiano",
    nombre: "Audax Italiano",
    logo: require("../../assets/images/clubes/Audax_Italiano/Audax_Italiano_2022.webp"),
  },
  {
    id: "aviacion",
    nombre: "Aviación",
    logo: require("../../assets/images/clubes/Aviacion/Aviacion.png"),
  },
  {
    id: "badminton",
    nombre: "Badminton",
    logo: require("../../assets/images/clubes/Badminton/Badminton.png"),
  },
  {
    id: "barnechea",
    nombre: "Barnechea",
    logo: require("../../assets/images/clubes/Barnechea/Athletic_Club_Barnechea.png"),
  },
  {
    id: "carlos-walker",
    nombre: "Carlos Walker",
    logo: require("../../assets/images/clubes/C_Walker/Carlos_Walker_1934.png"),
  },
  {
    id: "cobreloa",
    nombre: "Cobreloa",
    logo: require("../../assets/images/clubes/Cobreloa/Cobreloa_2013.webp"),
  },
  {
    id: "cobresal",
    nombre: "Cobresal",
    logo: require("../../assets/images/clubes/Cobresal/Escudo_Cobresal.webp"),
  },
  {
    id: "colo-colo",
    nombre: "Colo-Colo",
    logo: require("../../assets/images/clubes/ColoColo/Colo_Colo_2023.webp"),
  },
  {
    id: "coquimbo-unido",
    nombre: "Coquimbo Unido",
    logo: require("../../assets/images/clubes/Coquimbo_Unido/coquimbo_unido_2007.png"),
  },
  {
    id: "curico-unido",
    nombre: "Curicó Unido",
    logo: require("../../assets/images/clubes/Curico_Unido/Curico_Unido.png"),
  },
  {
    id: "deportes-concepcion",
    nombre: "Deportes Concepción",
    logo: require("../../assets/images/clubes/Depor_Conce/deportes-concepcion_2020.jpg"),
  },
  {
    id: "deportes-copiapo",
    nombre: "Deportes Copiapó",
    logo: require("../../assets/images/clubes/Depor_Copiapo/Deportes_Copiapo_2015.webp"),
  },
  {
    id: "deportes-iberia",
    nombre: "Deportes Iberia",
    logo: require("../../assets/images/clubes/Depor_Iberia/Deportes_Iberia.webp"),
  },
  {
    id: "deportes-iquique",
    nombre: "Deportes Iquique",
    logo: require("../../assets/images/clubes/Depor_iquique/Deportes_Iquique_2008.webp"),
  },
  {
    id: "deportes-la-serena",
    nombre: "Deportes La Serena",
    logo: require("../../assets/images/clubes/Depor_Serena/la_serena_1974.webp"),
  },
  {
    id: "deportes-limache",
    nombre: "Deportes Limache",
    logo: require("../../assets/images/clubes/Depor_Limache/limache.png"),
  },
  {
    id: "deportes-melipilla",
    nombre: "Deportes Melipilla",
    logo: require("../../assets/images/clubes/Depor_Melipilla/Deportes-Melipilla.webp"),
  },
  {
    id: "deportes-puerto-montt",
    nombre: "Deportes Puerto Montt",
    logo: require("../../assets/images/clubes/Depor_PuertoMontt/Club_de_Deportes_Puerto_Montt_2016.webp"),
  },
  {
    id: "deportes-valdivia",
    nombre: "Deportes Valdivia",
    logo: require("../../assets/images/clubes/Depor_Valdivia/Deportes_Valdivia_2003.webp"),
  },
  {
    id: "everton",
    nombre: "Everton",
    logo: require("../../assets/images/clubes/Everton/Everton_2014.png"),
  },
  {
    id: "fernandez-vial",
    nombre: "Fernández Vial",
    logo: require("../../assets/images/clubes/Vial/ESCUDO_VIAL.png"),
  },
  {
    id: "ferrobadminton",
    nombre: "Ferrobadminton",
    logo: require("../../assets/images/clubes/FerroBadminton/FerroBadminton.png"),
  },
  {
    id: "ferroviarios",
    nombre: "Ferroviarios",
    logo: require("../../assets/images/clubes/Ferroviarios/Ferroviarios_1934.png"),
  },
  {
    id: "deportes-temuco",
    nombre: "Deportes Temuco",
    logo: require("../../assets/images/clubes/Green_Cross/Deportes_Temuco_1965.png"),
  },
  {
    id: "huachipato",
    nombre: "Huachipato",
    logo: require("../../assets/images/clubes/Huachipato/Huachipato_2017.png"),
  },
  {
    id: "lota-schwager",
    nombre: "Lota Schwager",
    logo: require("../../assets/images/clubes/Lota_Schwager/Logo_Lota_Schwager.webp"),
  },
  {
    id: "magallanes",
    nombre: "Magallanes",
    logo: require("../../assets/images/clubes/Magallanes/Magallanes_2011.png"),
  },
  {
    id: "metropolitano",
    nombre: "Metropolitano",
    logo: require("../../assets/images/clubes/Metropolitano/Metropolitano.png"),
  },
  {
    id: "morning-star",
    nombre: "Morning Star",
    logo: require("../../assets/images/clubes/M_Star/Morning_Star.gif"),
  },
  {
    id: "naval",
    nombre: "Naval",
    logo: require("../../assets/images/clubes/Naval/Naval_2023.png"),
  },
  {
    id: "ohiggins",
    nombre: "O'Higgins",
    logo: require("../../assets/images/clubes/Ohiggins/o-higgins-2014.png"),
  },
  {
    id: "palestino",
    nombre: "Palestino",
    logo: require("../../assets/images/clubes/Palestino/cd-palestino-2014-logo.png"),
  },
  {
    id: "provincial-osorno",
    nombre: "Provincial Osorno",
    logo: require("../../assets/images/clubes/Provincial_Osorno/Osorno_2013.png"),
  },
  {
    id: "rangers",
    nombre: "Rangers",
    logo: require("../../assets/images/clubes/Rangers/Rangers_1977.webp"),
  },
  {
    id: "regional-atacama",
    nombre: "Regional Atacama",
    logo: require("../../assets/images/clubes/Regional_Atacama/Regional_Atacama_1979.png"),
  },
  {
    id: "santiago",
    nombre: "Santiago",
    logo: require("../../assets/images/clubes/Santiago/Santiago_1934.png"),
  },
  {
    id: "santiago-morning",
    nombre: "Santiago Morning",
    logo: require("../../assets/images/clubes/Santiago_Morning/Santiago_Morning_2014.png"),
  },
  {
    id: "santiago-national",
    nombre: "Santiago National",
    logo: require("../../assets/images/clubes/S_National/Santiago_National.png"),
  },
  {
    id: "santiago-wanderers",
    nombre: "Santiago Wanderers",
    logo: require("../../assets/images/clubes/Santiago_Wanders/Waanders_2002.png"),
  },
  {
    id: "san-luis",
    nombre: "San Luis",
    logo: require("../../assets/images/clubes/San_Luis/LOGO_SAN_LUIS_DE_QUILLOTA_OFICIAL.png"),
  },
  {
    id: "san-marcos",
    nombre: "San Marcos",
    logo: require("../../assets/images/clubes/San_Marcos/LogoSanMarcosArica.webp"),
  },
  {
    id: "trasandino",
    nombre: "Trasandino",
    logo: require("../../assets/images/clubes/Trasandino/Escudo_Trasandino_Los_Andes.webp"),
  },
  {
    id: "union-espanola",
    nombre: "Unión Española",
    logo: require("../../assets/images/clubes/Union_Española/Union_1945.webp"),
  },
  {
    id: "union-la-calera",
    nombre: "Unión La Calera",
    logo: require("../../assets/images/clubes/Union_La-Calera/Union_Calera_2020.webp"),
  },
  {
    id: "union-san-felipe",
    nombre: "Unión San Felipe",
    logo: require("../../assets/images/clubes/Union_San-Felipe/Unión_San_Felipe_2019.png"),
  },
  {
    id: "universidad-catolica",
    nombre: "Universidad Católica",
    logo: require("../../assets/images/clubes/U_Catolica/Club_UC_1977.webp"),
  },
  {
    id: "universidad-chile",
    nombre: "Universidad de Chile",
    logo: require("../../assets/images/clubes/U_de-Chile/1995udechile.webp"),
  },
  {
    id: "universidad-concepcion",
    nombre: "Universidad de Concepción",
    logo: require("../../assets/images/clubes/U_Concepcion/universidad-de-concepcion-2010-2025-logo.png"),
  },
  {
    id: "ñublense",
    nombre: "Ñublense",
    logo: require("../../assets/images/clubes/Ñublense/Ñublense_2005.png"),
  },
];

const DATOS_CLUBES: Record<string, DatosClub> = {
  aleman: {
    fundacion: 1916,
    zona: "Centro",
    estado: "Desaparecido",
    categoria: null,
  },
  antofagasta: {
    fundacion: 1966,
    zona: "Norte",
    estado: "Activo",
    categoria: "Ascenso",
  },
  "audax-italiano": {
    fundacion: 1910,
    zona: "Centro",
    estado: "Activo",
    categoria: "Primera División",
  },
  aviacion: {
    fundacion: 1957,
    zona: "Centro",
    estado: "Desaparecido",
    categoria: null,
  },
  badminton: {
    fundacion: 1912,
    zona: "Centro",
    estado: "Desaparecido",
    categoria: null,
  },
  barnechea: {
    fundacion: 1929,
    zona: "Centro",
    estado: "Activo",
    categoria: null,
  },
  "carlos-walker": {
    fundacion: 1907,
    zona: "Centro",
    estado: "Desaparecido",
    categoria: null,
  },
  cobreloa: {
    fundacion: 1977,
    zona: "Norte",
    estado: "Activo",
    categoria: "Ascenso",
  },
  cobresal: {
    fundacion: 1979,
    zona: "Norte",
    estado: "Activo",
    categoria: "Primera División",
  },
  "colo-colo": {
    fundacion: 1925,
    zona: "Centro",
    estado: "Activo",
    categoria: "Primera División",
  },
  "coquimbo-unido": {
    fundacion: 1957,
    zona: "Norte",
    estado: "Activo",
    categoria: "Primera División",
  },
  "curico-unido": {
    fundacion: 1973,
    zona: "Centro",
    estado: "Activo",
    categoria: "Ascenso",
  },
  "deportes-concepcion": {
    fundacion: 1966,
    zona: "Sur",
    estado: "Activo",
    categoria: "Primera División",
  },
  "deportes-copiapo": {
    fundacion: 1999,
    zona: "Norte",
    estado: "Activo",
    categoria: "Ascenso",
  },
  "deportes-iberia": {
    fundacion: 1933,
    zona: "Sur",
    estado: "Activo",
    categoria: "Tercera B",
  },
  "deportes-iquique": {
    fundacion: 1978,
    zona: "Norte",
    estado: "Activo",
    categoria: "Ascenso",
  },
  "deportes-la-serena": {
    fundacion: 1955,
    zona: "Norte",
    estado: "Activo",
    categoria: "Primera División",
  },
  "deportes-limache": {
    fundacion: 2012,
    zona: "Centro",
    estado: "Activo",
    categoria: "Primera División",
  },
  "deportes-melipilla": {
    fundacion: 1963,
    zona: "Centro",
    estado: "Activo",
    categoria: null,
  },
  "deportes-puerto-montt": {
    fundacion: 1983,
    zona: "Sur",
    estado: "Activo",
    categoria: "Ascenso",
  },
  "deportes-valdivia": {
    fundacion: 1983,
    zona: "Sur",
    estado: "Activo",
    categoria: "Tercera B",
  },
  everton: {
    fundacion: 1909,
    zona: "Centro",
    estado: "Activo",
    categoria: "Primera División",
  },
  "fernandez-vial": {
    fundacion: 1903,
    zona: "Sur",
    estado: "Activo",
    categoria: "Tercera B",
  },
  ferrobadminton: {
    fundacion: 1950,
    zona: "Centro",
    estado: "Desaparecido",
    categoria: null,
  },
  ferroviarios: {
    fundacion: 1916,
    zona: "Centro",
    estado: "Activo",
    categoria: null,
  },
  "deportes-temuco": {
    fundacion: 1960,
    zona: "Sur",
    estado: "Activo",
    categoria: "Ascenso",
  },
  huachipato: {
    fundacion: 1947,
    zona: "Sur",
    estado: "Activo",
    categoria: "Primera División",
  },
  "lota-schwager": {
    fundacion: 1966,
    zona: "Sur",
    estado: "Activo",
    categoria: "Segunda División",
  },
  magallanes: {
    fundacion: 1897,
    zona: "Centro",
    estado: "Activo",
    categoria: "Ascenso",
  },
  metropolitano: {
    fundacion: 1933,
    zona: "Centro",
    estado: "Desaparecido",
    categoria: null,
  },
  "morning-star": {
    fundacion: 1907,
    zona: "Centro",
    estado: "Desaparecido",
    categoria: null,
  },
  naval: {
    fundacion: 1942,
    zona: "Sur",
    estado: "Activo",
    categoria: "Tercera A",
  },
  ohiggins: {
    fundacion: 1955,
    zona: "Centro",
    estado: "Activo",
    categoria: "Primera División",
  },
  palestino: {
    fundacion: 1920,
    zona: "Centro",
    estado: "Activo",
    categoria: "Primera División",
  },
  "provincial-osorno": {
    fundacion: 1983,
    zona: "Sur",
    estado: "Activo",
    categoria: "Segunda División",
  },
  rangers: {
    fundacion: 1902,
    zona: "Centro",
    estado: "Activo",
    categoria: "Ascenso",
  },
  "regional-atacama": {
    fundacion: 1979,
    zona: "Norte",
    estado: "Desaparecido",
    categoria: null,
  },
  santiago: {
    fundacion: 1903,
    zona: "Centro",
    estado: "Desaparecido",
    categoria: null,
  },
  "santiago-morning": {
    fundacion: 1903,
    zona: "Centro",
    estado: "Activo",
    categoria: "Segunda División",
  },
  "santiago-national": {
    fundacion: 1903,
    zona: "Centro",
    estado: "Desaparecido",
    categoria: null,
  },
  "santiago-wanderers": {
    fundacion: 1892,
    zona: "Centro",
    estado: "Activo",
    categoria: "Ascenso",
  },
  "san-luis": {
    fundacion: 1919,
    zona: "Centro",
    estado: "Activo",
    categoria: "Ascenso",
  },
  "san-marcos": {
    fundacion: 1978,
    zona: "Norte",
    estado: "Activo",
    categoria: "Ascenso",
  },
  trasandino: {
    fundacion: 1992,
    zona: "Centro",
    estado: "Activo",
    categoria: "Segunda División",
  },
  "union-espanola": {
    fundacion: 1897,
    zona: "Centro",
    estado: "Activo",
    categoria: "Ascenso",
  },
  "union-la-calera": {
    fundacion: 1949,
    zona: "Centro",
    estado: "Activo",
    categoria: "Primera División",
  },
  "union-san-felipe": {
    fundacion: 1958,
    zona: "Centro",
    estado: "Activo",
    categoria: "Ascenso",
  },
  "universidad-catolica": {
    fundacion: 1937,
    zona: "Centro",
    estado: "Activo",
    categoria: "Primera División",
  },
  "universidad-chile": {
    fundacion: 1928,
    zona: "Centro",
    estado: "Activo",
    categoria: "Primera División",
  },
  "universidad-concepcion": {
    fundacion: 1994,
    zona: "Sur",
    estado: "Activo",
    categoria: "Primera División",
  },
  "ñublense": {
    fundacion: 1916,
    zona: "Sur",
    estado: "Activo",
    categoria: "Primera División",
  },
};

const CIUDADES_CLUBES: Record<string, string> = {
  aleman: "Santiago",
  antofagasta: "Antofagasta",
  "audax-italiano": "La Florida, Santiago",
  aviacion: "Santiago",
  badminton: "Santiago",
  barnechea: "Lo Barnechea",
  "carlos-walker": "Santiago",
  cobreloa: "Calama",
  cobresal: "El Salvador",
  "colo-colo": "Macul, Santiago",
  "coquimbo-unido": "Coquimbo",
  "curico-unido": "Curicó",
  "deportes-concepcion": "Concepción",
  "deportes-copiapo": "Copiapó",
  "deportes-iberia": "Los Ángeles",
  "deportes-iquique": "Iquique",
  "deportes-la-serena": "La Serena",
  "deportes-limache": "Limache",
  "deportes-melipilla": "Melipilla",
  "deportes-puerto-montt": "Puerto Montt",
  "deportes-valdivia": "Valdivia",
  everton: "Viña del Mar",
  "fernandez-vial": "Concepción",
  ferrobadminton: "Santiago",
  ferroviarios: "Santiago",
  "deportes-temuco": "Temuco",
  huachipato: "Talcahuano",
  "lota-schwager": "Lota",
  magallanes: "San Bernardo",
  metropolitano: "Santiago",
  "morning-star": "Santiago",
  naval: "Talcahuano",
  ohiggins: "Rancagua",
  palestino: "La Cisterna, Santiago",
  "provincial-osorno": "Osorno",
  rangers: "Talca",
  "regional-atacama": "Copiapó",
  santiago: "Santiago",
  "santiago-morning": "Recoleta, Santiago",
  "santiago-national": "Santiago",
  "santiago-wanderers": "Valparaíso",
  "san-luis": "Quillota",
  "san-marcos": "Arica",
  trasandino: "Los Andes",
  "union-espanola": "Independencia, Santiago",
  "union-la-calera": "La Calera",
  "union-san-felipe": "San Felipe",
  "universidad-catolica": "Las Condes, Santiago",
  "universidad-chile": "Ñuñoa, Santiago",
  "universidad-concepcion": "Concepción",
  "ñublense": "Chillán",
};

const CLUBES: Club[] = CLUBES_BASE.map((club) => ({
  ...club,
  ciudad: CIUDADES_CLUBES[club.id] ?? "Chile",
  ...DATOS_CLUBES[club.id],
}));

const OPCIONES_FUNDACION = [
  "Todas",
  "Antes de 1930",
  "1930–1950",
  "1951–1970",
  "1971–1990",
  "1991–2010",
  "2011–Actualidad",
];

const OPCIONES_CATEGORIA = [
  "Todas",
  "Primera División",
  "Ascenso",
  "Segunda División",
  "Tercera A",
  "Tercera B",
];

const normalizar = (texto: string) =>
  texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es-CL");

function OpcionFiltro({
  valor,
  seleccionado,
  onPress,
}: {
  valor: string;
  seleccionado: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      style={[
        estilosFiltros.opcion,
        seleccionado && estilosFiltros.opcionSeleccionada,
      ]}
      accessibilityRole="button"
      accessibilityState={{ selected: seleccionado }}
    >
      <Text
        style={[
          estilosFiltros.opcionTexto,
          seleccionado && estilosFiltros.opcionTextoSeleccionada,
        ]}
      >
        {valor}
      </Text>
    </TouchableOpacity>
  );
}

const estilosFiltros = StyleSheet.create({
  boton: {
    minHeight: 38,
    paddingHorizontal: 13,
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0033A0",
    borderRadius: 8,
  },
  botonTexto: { fontFamily: "Cabin",
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 0.4,
  },
  panel: {
    maxHeight: 340,
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 14,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DCE4F2",
    borderRadius: 8,
  },
  scroll: {
    flexGrow: 0,
  },
  scrollContenido: {
    paddingBottom: 4,
  },
  encabezado: { fontFamily: "Cabin",
    color: "#0033A0",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 8,
    marginTop: 4,
  },
  grupo: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 7,
    marginBottom: 8,
  },
  opcion: {
    paddingHorizontal: 11,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#DCE4F2",
    backgroundColor: "#FFFFFF",
  },
  opcionSeleccionada: {
    backgroundColor: "#0033A0",
    borderColor: "#0033A0",
  },
  opcionTexto: { fontFamily: "Cabin",
    color: "#0033A0",
    fontSize: 12,
    fontWeight: "600",
  },
  opcionTextoSeleccionada: {
    color: "#FFFFFF",
  },
  limpiar: {
    alignSelf: "flex-end",
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  limpiarTexto: { fontFamily: "Cabin",
    color: "#D21F26",
    fontWeight: "700",
    fontSize: 12,
  },
  resultados: {
    marginHorizontal: 18,
    marginTop: 2,
    marginBottom: 8,
  },
  resultadosTexto: { fontFamily: "Cabin",
    color: "#536A91",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 0.7,
  },
});

export default function ClubesScreen() {
  const router = useRouter();

  const [busqueda, setBusqueda] = useState("");
  const [filtrosVisibles, setFiltrosVisibles] = useState(false);

  const [filtroTipo, setFiltroTipo] = useState("Todos");
  const [filtroZona, setFiltroZona] = useState("Todas");
  const [filtroFundacion, setFiltroFundacion] = useState("Todas");
  const [filtroCategoria, setFiltroCategoria] = useState("Todas");

  const clubesFiltrados = useMemo(() => {
    const texto = normalizar(busqueda.trim());

    return CLUBES.filter((club) => {
      const coincideBusqueda = normalizar(club.nombre).includes(texto);

      const coincideTipo =
        filtroTipo === "Todos" || club.estado === filtroTipo;

      const coincideZona =
        filtroZona === "Todas" || club.zona === filtroZona;

      const coincideCategoria =
        filtroCategoria === "Todas" ||
        club.categoria === filtroCategoria;

      let coincideFundacion = true;

      switch (filtroFundacion) {
        case "Antes de 1930":
          coincideFundacion = club.fundacion < 1930;
          break;

        case "1930–1950":
          coincideFundacion =
            club.fundacion >= 1930 && club.fundacion <= 1950;
          break;

        case "1951–1970":
          coincideFundacion =
            club.fundacion >= 1951 && club.fundacion <= 1970;
          break;

        case "1971–1990":
          coincideFundacion =
            club.fundacion >= 1971 && club.fundacion <= 1990;
          break;

        case "1991–2010":
          coincideFundacion =
            club.fundacion >= 1991 && club.fundacion <= 2010;
          break;

        case "2011–Actualidad":
          coincideFundacion = club.fundacion >= 2011;
          break;
      }

      return (
        coincideBusqueda &&
        coincideTipo &&
        coincideZona &&
        coincideFundacion &&
        coincideCategoria
      );
    }).sort((a, b) =>
      a.nombre.localeCompare(b.nombre, "es", {
        sensitivity: "base",
      })
    );
  }, [
    busqueda,
    filtroTipo,
    filtroZona,
    filtroFundacion,
    filtroCategoria,
  ]);

  const limpiarFiltros = () => {
    setFiltroTipo("Todos");
    setFiltroZona("Todas");
    setFiltroFundacion("Todas");
    setFiltroCategoria("Todas");
  };

  const renderClub = ({ item }: { item: Club }) => (
    <TouchableOpacity
      style={styles.clubCard}
      activeOpacity={0.75}
      onPress={() => {
        router.push({ pathname: "/club/[id]", params: { id: item.id } });
      }}
      accessibilityRole="button"
      accessibilityLabel={`Abrir ficha de ${item.nombre}`}
    >
      <View style={styles.escudoContainer}>
        {item.logo ? (
          <Image
            source={item.logo}
            style={styles.escudo}
            resizeMode="contain"
          />
        ) : (
          <Text style={styles.escudoPlaceholder}>⚽</Text>
        )}
      </View>

      <Text style={styles.clubNombre} numberOfLines={2}>
        {item.nombre}
      </Text>
      <Text style={styles.clubCiudad} numberOfLines={1}>
        {item.ciudad}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* ENCABEZADO */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.volverButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
          accessibilityRole="button"
          accessibilityLabel="Volver al inicio"
        >
          <Text style={styles.volverTexto}>‹ VOLVER</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitulo}>CLUBES</Text>

        <View style={styles.headerEspaciador} />
      </View>

      {/* LOGO FUTPEDIA */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/futpedia-logo.png")}
          style={styles.logo}
          resizeMode="contain"
          accessibilityLabel="Logo FUTpedia Chilena"
        />
      </View>

      {/* BUSCADOR */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>⌕</Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Buscar club..."
          placeholderTextColor="#858585"
          value={busqueda}
          onChangeText={setBusqueda}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="search"
          accessibilityLabel="Buscar club por nombre"
        />

        {busqueda.length > 0 && (
          <TouchableOpacity
            onPress={() => setBusqueda("")}
            style={styles.clearButton}
            accessibilityRole="button"
            accessibilityLabel="Limpiar búsqueda"
          >
            <Text style={styles.clearText}>×</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          onPress={() => setFiltrosVisibles((visible) => !visible)}
          style={estilosFiltros.boton}
          activeOpacity={0.75}
          accessibilityRole="button"
          accessibilityLabel={
            filtrosVisibles ? "Ocultar filtros" : "Activar filtros"
          }
        >
          <Text style={estilosFiltros.botonTexto}>
            {filtrosVisibles ? "OCULTAR ˄" : "FILTROS ☷"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* PANEL DE FILTROS */}
      {filtrosVisibles && (
        <View style={estilosFiltros.panel}>
          <ScrollView
            style={estilosFiltros.scroll}
            contentContainerStyle={estilosFiltros.scrollContenido}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <Text style={estilosFiltros.encabezado}>
              TIPO DE CLUB
            </Text>

            <View style={estilosFiltros.grupo}>
              {["Todos", "Activo", "Desaparecido"].map((opcion) => (
                <OpcionFiltro
                  key={opcion}
                  valor={opcion}
                  seleccionado={filtroTipo === opcion}
                  onPress={() => setFiltroTipo(opcion)}
                />
              ))}
            </View>

            <Text style={estilosFiltros.encabezado}>ZONA</Text>

            <View style={estilosFiltros.grupo}>
              {["Todas", "Norte", "Centro", "Sur"].map((opcion) => (
                <OpcionFiltro
                  key={opcion}
                  valor={opcion}
                  seleccionado={filtroZona === opcion}
                  onPress={() => setFiltroZona(opcion)}
                />
              ))}
            </View>

            <Text style={estilosFiltros.encabezado}>
              AÑO DE FUNDACIÓN
            </Text>

            <View style={estilosFiltros.grupo}>
              {OPCIONES_FUNDACION.map((opcion) => (
                <OpcionFiltro
                  key={opcion}
                  valor={opcion}
                  seleccionado={filtroFundacion === opcion}
                  onPress={() => setFiltroFundacion(opcion)}
                />
              ))}
            </View>

            <Text style={estilosFiltros.encabezado}>
              CATEGORÍA 2026
            </Text>

            <View style={estilosFiltros.grupo}>
              {OPCIONES_CATEGORIA.map((opcion) => (
                <OpcionFiltro
                  key={opcion}
                  valor={opcion}
                  seleccionado={filtroCategoria === opcion}
                  onPress={() => setFiltroCategoria(opcion)}
                />
              ))}
            </View>

            <TouchableOpacity
              style={estilosFiltros.limpiar}
              onPress={limpiarFiltros}
              activeOpacity={0.7}
            >
              <Text style={estilosFiltros.limpiarTexto}>
                LIMPIAR FILTROS
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}

      {/* RESULTADOS */}
      <View style={estilosFiltros.resultados}>
        <Text style={estilosFiltros.resultadosTexto}>
          {clubesFiltrados.length} CLUBES
        </Text>
      </View>

      {/* CUADRÍCULA DE CLUBES */}
      <FlatList
        data={clubesFiltrados}
        renderItem={renderClub}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.listaContainer}
        columnWrapperStyle={styles.filaClubes}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>
              No encontramos ese club
            </Text>

            <Text style={styles.emptySubtitle}>
              Revisa el nombre o intenta otra búsqueda.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}