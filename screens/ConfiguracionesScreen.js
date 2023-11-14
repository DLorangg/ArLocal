import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
const ConfiguracionesScreen =()=>{
  const navigation=useNavigation()
  return(

    <View style={styles.container}>

      <TouchableOpacity style={styles.stacks}
        //al usar "navigation.navigate("")" se busca una ruta existente en la stack con el nombre que se le pide y se le envia a la correspondiente pantalla
        onPress={()=>navigation.navigate("Perfil")}
      >
        <Text style={styles.title}>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.stacks}
      onPress={()=>navigation.navigate("Local")}>
        <Text style={styles.title}>Local</Text>
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