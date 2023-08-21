import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native';
import { auth } from '../../Firebase';

interface routerProps {
    navigation: NavigationProp<any, any>;
}

const List = ({ navigation }: routerProps) => {
  return (
    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
      <Button onPress={() => navigation.navigate('Details')} title='Abrir detalles' />
      <Button onPress={() => auth.signOut()} title='Cerrar Sesión' />
    </View>
  )
}

export default List