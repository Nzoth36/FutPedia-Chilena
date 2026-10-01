import { useRouter } from "expo-router";
import { useMemo } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORES, styles } from "./index.styles";

const curiosidades = [
  "¡Hola, hincha! ¿Sabías que Chile fue sede del Mundial de 1962 y terminó en el tercer lugar?",
  "¡Bienvenido a FUTpedia! El Estadio Nacional fue inaugurado en 1938 y desde 1939 es casa de la Selección Chilena.",
  "¡Qué bueno tenerte aquí! Colo-Colo ganó la Copa Libertadores en 1991, el primer y hasta ahora único título chileno en ese torneo.",
  "¡Hola, futbolero! La Roja ganó su primera Copa América en 2015, jugando el torneo como anfitriona.",
  "¡Bienvenido! Chile volvió a ganar la Copa América en 2016, en la edición Centenario, logrando títulos consecutivos.",
  "¡Un dato para comenzar! En el Mundial de 1962, Chile venció 2-1 a la Unión Soviética en los cuartos de final.",
  "¡Hola, hincha! Chile aseguró el tercer puesto del Mundial de 1962 al vencer 1-0 a Yugoslavia.",
  "¡Bienvenido a la historia! Chile fue una de las 13 selecciones que participaron en la primera Copa Mundial, Uruguay 1930.",
  "¡A explorar! El Estadio Nacional albergó diez partidos durante el Mundial de 1962.",
  "¡Hola! La Roja consiguió su primera Copa América al derrotar a Argentina en la final de 2015, definida por penales.",
];

const secciones = [
  {
    numero: "01",
    titulo: "FÚTBOL EN VIVO",
    descripcion: "Partidos, resultados y actualidad",
    icono: "◉",
    imagen: "VISTA EN VIVO",
  },
  {
    numero: "02",
    titulo: "EL TÚNEL",
    descripcion: "Revive temporadas del fútbol chileno",
    icono: "◷",
    imagen: "ARCHIVO HISTÓRICO",
  },
  {
    numero: "03",
    titulo: "COMPETICIONES",
    descripcion: "Campeones, estadísticas y récords",
    icono: "♜",
    imagen: "TROFEOS Y TORNEOS",
  },
  {
    numero: "04",
    titulo: "CLUBES",
    descripcion: "Escudos, historia y temporadas",
    icono: "⬡",
    imagen: "CLUBES CHILENOS",
  },
  {
    numero: "05",
    titulo: "HISTORIALES ENTRE CLUBES",
    descripcion: "Enfrentamientos y estadísticas históricas",
    icono: "▥",
    imagen: "CARA A CARA",
  },
];

export default function InicioScreen() {
  const router = useRouter();

  const curiosidad = useMemo(
    () => curiosidades[Math.floor(Math.random() * curiosidades.length)],
    []
  );

  const abrirSeccion = (titulo: string) => {
    const rutas: Record<string, string> = {
      "FÚTBOL EN VIVO": "en-vivo",
      "EL TÚNEL": "el-tunel",
      "COMPETICIONES": "competiciones",
      "CLUBES": "clubes",
      "HISTORIALES ENTRE CLUBES": "historiales",
    };
    const slug = rutas[titulo];
    if (slug === "clubes") router.push("/clubes");
    else if (slug) router.push((`/seccion/${slug}`) as any);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORES.blanco}
      />

      <ScrollView
        style={styles.contenedor}
        contentContainerStyle={styles.contenido}
        showsVerticalScrollIndicator={false}
      >
        {/* LOGO OFICIAL */}
        <View style={styles.logoWrap}>
          <Image
            source={require("../../assets/images/futpedia-logo.png")}
            style={styles.logo}
            resizeMode="contain"
            accessibilityLabel="Logo FUTpedia Chilena"
          />
        </View>

        <Text style={styles.lema}>
          Un patrimonio de goles, clubes e historias.
        </Text>

        {/* DATO CURIOSO ALEATORIO AL ABRIR LA APP */}
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeEyebrow}>
            TU DATO FUTBOLERO DE HOY
          </Text>

          <Text style={styles.welcomeText}>
            {curiosidad}
          </Text>
        </View>

        {/* ESPACIO PARA FOTOGRAFÍA HISTÓRICA */}
        <View style={styles.heroImage}>
          <View style={styles.heroOverlay}>
            <Text style={styles.heroEyebrow}>
              FUTPEDIA CHILENA PRESENTA
            </Text>

            <Text style={styles.heroTitle}>
              LA HISTORIA{"\n"}
              DEL FÚTBOL CHILENO{"\n"}
              EN UN SOLO LUGAR.
            </Text>
          </View>

          <Text style={styles.imagePlaceholder}>
            ESPACIO PARA FOTOGRAFÍA HISTÓRICA
          </Text>
        </View>

        {/* ÚLTIMO RESULTADO - CONTENIDO ILUSTRATIVO */}
        <View style={styles.resultCard}>
          <View style={styles.resultHeading}>
            <View>
              <Text style={styles.resultTitle}>
                ÚLTIMO RESULTADO
              </Text>

              <Text style={styles.resultSubtitle}>
                Campeonato Nacional · Fecha 26
              </Text>
            </View>

            <View style={styles.finishedBadge}>
              <Text style={styles.finishedText}>
                FINALIZADO
              </Text>
            </View>
          </View>

          <View style={styles.resultBody}>
            <View style={styles.team}>
              <View style={styles.teamBadge}>
                <Text style={styles.teamBadgeText}>CC</Text>
              </View>

              <Text style={styles.teamName}>
                Colo-Colo
              </Text>
            </View>

            <Text style={styles.score}>
              2 - 1
            </Text>

            <View style={styles.team}>
              <View style={styles.teamBadge}>
                <Text style={styles.teamBadgeText}>UC</Text>
              </View>

              <Text style={styles.teamName}>
                U. Católica
              </Text>
            </View>
          </View>

          <Text style={styles.resultFootnote}>
            Marcador de muestra · Reemplazar con resultado verificado
          </Text>
        </View>

        {/* MÓDULOS */}
        <View style={styles.exploreHeading}>
          <Text style={styles.exploreTitle}>
            EXPLORA FUTPEDIA
          </Text>

          <View style={styles.headingRule} />
        </View>

        {secciones.map((seccion) => (
          <TouchableOpacity
            key={seccion.numero}
            style={styles.moduleCard}
            activeOpacity={0.78}
            onPress={() => abrirSeccion(seccion.titulo)}
            accessibilityRole="button"
            accessibilityLabel={`${seccion.titulo}. ${seccion.descripcion}`}
          >
            <View style={styles.moduleNumber}>
              <Text style={styles.moduleNumberText}>
                {seccion.numero}
              </Text>
            </View>

            <View style={styles.moduleIcon}>
              <Text style={styles.moduleIconText}>
                {seccion.icono}
              </Text>
            </View>

            <View style={styles.moduleCopy}>
              <Text style={styles.moduleTitle}>
                {seccion.titulo}
              </Text>

              <Text style={styles.moduleDescription}>
                {seccion.descripcion}
              </Text>
            </View>

            <View style={styles.moduleImagePlaceholder}>
              <Text style={styles.moduleImageText}>
                {seccion.imagen}
              </Text>
            </View>

            <Text style={styles.moduleArrow}>
              ›
            </Text>
          </TouchableOpacity>
        ))}

        {/* PIE DE PÁGINA */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            La historia también se juega.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}