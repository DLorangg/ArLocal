import React from "react";
import {Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { auth } from '../Firebase';
import { signOut } from 'firebase/auth'

const Configuracion1Screen =()=>{
  
  const navigation = useNavigation();
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      console.log('Cerro sesión correctamente')
      navigation.navigate('Login')
    }).catch((error) => {
      console.log(error)
    });
  }

  return(

    <View style={styles.container}>
      <Text style={styles.title}>Email asociado: {auth.currentUser?.email}</Text>
      <Button
        title="Cerrar sesión"
        onPress={() => handleSignOut()}
      />
    </View>
  ) 
};

const styles = StyleSheet.create({
  container: {flex:1, justifyContent:'center', alignItems:'center', backgroundColor: "#292929"},
  title: {fontSize: 50, color: "#fff"},
  stacks: {backgroundColor: 'purple', width: "100%"}


})
export default Configuracion1Screen;