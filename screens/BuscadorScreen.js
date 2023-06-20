import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import LocalesList from '../src/components/LocalesList'
const BuscadorScreen =()=>{

  return(

    <View style={styles.container}>

      <LocalesList/>
    </View>
  ) 
};

const styles = StyleSheet.create({
  container: {flex:1, justifyContent:'center', alignItems:'center', backgroundColor: "#292929"},
  title: {fontSize: 50, color: "#fff"}



})
export default BuscadorScreen;