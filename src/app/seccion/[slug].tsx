import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CONTENIDO: Record<string, { titulo: string; bajada: string; detalle: string }> = {
  "en-vivo": { titulo: "FÚTBOL EN VIVO", bajada: "Partidos, resultados y actualidad", detalle: "Esta sección reunirá encuentros, marcadores y novedades del fútbol chileno. Los datos en vivo se incorporarán en una próxima etapa." },
  "el-tunel": { titulo: "EL TÚNEL", bajada: "Revive temporadas del fútbol chileno", detalle: "Un recorrido por temporadas, campañas y momentos que forman parte de la memoria del fútbol nacional." },
  competiciones: { titulo: "COMPETICIONES", bajada: "Campeones, estadísticas y récords", detalle: "Consulta información histórica de torneos, campeones y estadísticas de las competiciones chilenas." },
  historiales: { titulo: "HISTORIALES ENTRE CLUBES", bajada: "Enfrentamientos y estadísticas históricas", detalle: "En esta sección podrás explorar los enfrentamientos y registros históricos entre clubes." },
};
export default function SeccionScreen() {
 const router = useRouter(); const { slug } = useLocalSearchParams<{slug:string}>();
 const data = CONTENIDO[String(slug)] ?? { titulo: "FUTPEDIA", bajada: "Historia del fútbol chileno", detalle: "Estamos preparando esta sección." };
 return <SafeAreaView style={{flex:1,backgroundColor:"#FFFFFF"}}>
  <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF"/>
  <View style={{paddingHorizontal:20,paddingTop:12,flex:1}}>
   <TouchableOpacity onPress={()=>router.back()} accessibilityRole="button" style={{paddingVertical:12}}><Text style={{fontFamily:"Cabin-Bold",fontSize:15,color:"#D21F26"}}>‹ VOLVER</Text></TouchableOpacity>
   <View style={{height:5,width:62,backgroundColor:"#D21F26",marginTop:28,marginBottom:20}}/>
   <Text style={{fontFamily:"Cabin-Bold",fontSize:26,color:"#0033A0",letterSpacing:0.4}}>{data.titulo}</Text>
   <Text style={{fontFamily:"Cabin",fontSize:16,color:"#0033A0",marginTop:8}}>{data.bajada}</Text>
   <View style={{height:1,backgroundColor:"#DCE4F2",marginVertical:22}}/>
   <Text style={{fontFamily:"Cabin",fontSize:16,lineHeight:25,color:"#0033A0"}}>{data.detalle}</Text>
   <View style={{flex:1}}/>
   <TouchableOpacity onPress={()=>router.replace("/")} style={{backgroundColor:"#0033A0",padding:16,borderRadius:10,alignItems:"center",marginBottom:24}}><Text style={{fontFamily:"Cabin-Bold",color:"#FFFFFF",fontSize:15}}>VOLVER AL INICIO</Text></TouchableOpacity>
  </View></SafeAreaView>;
}
