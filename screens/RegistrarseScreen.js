import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import { auth, createUser } from '../Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const RegistrarseScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log('Registrado con:', user.email);
          navigation.navigate('Tabs');
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/email-already-in-use':
              alert('La dirección de correo electrónico ya está en uso. Inicie sesión en su cuenta o use una dirección de correo electrónico diferente.');
              break;
            case 'auth/invalid-email':
              alert('La dirección de correo electrónico es inválida. Debe contener "@".');
              break;
            case 'auth/weak-password':
              alert('La contraseña es demasiado débil. Intente con una contraseña más segura.');
              break;
            default:
              alert('Error desconocido: ' + error.message);
          }
        });
    };    
    
    return (
      <KeyboardAvoidingView
        styles={styles.container}
        behavior="padding"
      >
        <View style={styles.inputContainer}> 
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
            autoCapitalize='none'
          />
          <TextInput
            placeholder="Password "
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>
  
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleSignUp}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,  
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40%',
  },
  button: {
    backgroundColor: '#6ee674',
    width: '100%',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  }
})

export default RegistrarseScreen