import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
const FavoritosScreen =()=>{

  return(

    <View style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>

    </View>
  ) 
};

const styles = StyleSheet.create({
  container: {flex:1, justifyContent:'center', alignItems:'center', backgroundColor: "#292929"},
  title: {fontSize: 50, color: "#fff"}



})
export default FavoritosScreen;