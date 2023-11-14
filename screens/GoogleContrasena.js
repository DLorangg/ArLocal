import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome as Icon } from "@expo/vector-icons"

const LoginScreen = () => {

  return (
    <KeyboardAvoidingView
      style={styles.container} // Cambia "styles" por "style"
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
          autoCapitalize='none'
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          autoCapitalize='none'
          placeholder="Contraseña"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>

        <TouchableOpacity
          onPress={handleIniciarSesion}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleCrearCuenta}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Crear Cuenta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=>{navigation.navigate('Tabs')}}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Invitado</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{promptAsync();}}
          style={styles.button}
        >
          <Text style={styles.buttonText}><Icon name='github' style={styles.icon}/> Iniciar Sesión Con GitHub</Text>
        </TouchableOpacity>


        {/* 
        <TouchableOpacity
          onPress={handleChangePassword}
          style={styles.changePasswordButton}
        >
          <Text style={styles.changePasswordButtonText}>Cambiar contraseña</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleGoogleLogin}
          style={styles.googleButton} // Agrega un estilo para el botón de Google
        >
          <Text style={styles.googleButtonText}>Iniciar sesión con Google</Text>
        </TouchableOpacity>
        <Text>
          No tienes una cuenta?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Registrarse')}>
            <Text style={styles.registerLink}>Regístrate!</Text>
          </TouchableOpacity>
        </Text> */}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
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
    marginTop: 20,
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
    textAlign: 'center',
  },
  changePasswordButton: {
    // Estilos para el botón de cambiar contraseña
  },
  changePasswordButtonText: {
    // Estilos para el texto del botón de cambiar contraseña
  },
  googleButton: {
    backgroundColor: 'red', // Puedes personalizar el color del botón de Google
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  googleButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
  registerLink: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 10,
  },
  icon:{
    fontSize: 20,
  }
});

export default LoginScreen;
