import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
const ConfiguracionesScreen =()=>{
  const navigation=useNavigation()
  return(

    <View style={styles.container}>

      <TouchableOpacity style={styles.stacks}
        onPress={()=>navigation.navigate("Configuracion1")}
      >
        <Text style={styles.title}>Configuracion1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.stacks}
      onPress={()=>navigation.navigate("Configuracion2")}>
        <Text style={styles.title}>Configuracion2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.stacks}
      onPress={()=>navigation.navigate("Configuracion3")}>
        <Text style={styles.title}>Configuracion3</Text>
      </TouchableOpacity>
    </View>
  ) 
};

const styles = StyleSheet.create({
  container: {flex:1, justifyContent:'center', alignItems:'center', backgroundColor: "#292929"},
  title: {fontSize: 50, color: "#fff"},
  stacks: {backgroundColor: 'purple', width: "100%"}


})
export default ConfiguracionesScreen;