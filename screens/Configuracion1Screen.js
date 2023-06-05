import React from "react";
import {Text, View, StyleSheet, } from 'react-native';
const Configuracion1Screen =()=>{

  return(

    <View style={styles.container}>
      <Text style={styles.title}>Configuracion1Screen</Text>

    </View>
  ) 
};

const styles = StyleSheet.create({
  container: {flex:1, justifyContent:'center', alignItems:'center', backgroundColor: "#292929"},
  title: {fontSize: 50, color: "#fff"},
  stacks: {backgroundColor: 'purple', width: "100%"}


})
export default Configuracion1Screen;