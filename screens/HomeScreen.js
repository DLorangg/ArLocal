import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../Firebase'
import { signOut } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()
  
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      console.log('Cerro sesión correctamente')
      navigation.navigate('Login')
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <View>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={(handleSignOut)}
      >
        <Text>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})

export default HomeScreen