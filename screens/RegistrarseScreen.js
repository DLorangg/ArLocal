import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import LoginScreen from "./LoginScreen";

const RegistrarseScreen = () => {
    const navigation = useNavigation();
    
    return (
      <KeyboardAvoidingView
        styles={styles.container}
        behavior="padding"
      >
        <View style={styles.inputContainer}> 
          <TextInput
            placeholder="Email"
            //value={ }
            //onChangeText={text => }
            style={styles.input}
          />
          <TextInput
            placeholder="Password "
            //value={ }
            //onChangeText={text => }
            style={styles.input}
            secureTextEntry
          />
        </View>
  
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => { }}
            style={styles.button}
          >
            <Text style={styles.button}>Registrarse</Text>
          </TouchableOpacity>
          <Text>
          Ya tienes una cuenta?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.registerLink}>Inicia sesión!</Text>
          </TouchableOpacity>
        </Text>
        </View>
      </KeyboardAvoidingView>
    )
  }

export default RegistrarseScreen

const styles = StyleSheet.create({})