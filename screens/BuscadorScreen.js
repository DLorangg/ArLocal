import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import LocalesList from "../src/components/localesList";
const BuscadorScreen =()=>{

  return(

    <View style={styles.container}>
      <Text style={styles.title}>BuscadorScreen</Text>
      <LocalesList/>
    </View>
  ) 
};

const styles = StyleSheet.create({
  container: {flex:1, justifyContent:'center', alignItems:'center', backgroundColor: "#292929"},
  title: {fontSize: 50, color: "#fff"}



})
export default BuscadorScreen;