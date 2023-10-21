import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = () => {
  const navigation = useNavigation(); // Obtiene la instancia de navegación
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const noAutenticado = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace('Tabs')
      }
    })

    return noAutenticado
  }, [])

  const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Inicio sesión con:', user.email);
        navigation.navigate('Tabs')
      })
      .catch(error => alert(error.message))
  }

  return (

    <KeyboardAvoidingView
      styles={styles.container}
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
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text>
          No tienes una cuenta?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Registrarse')}>
            <Text style={styles.registerLink}>Regístrate!</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

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

export default LoginScreen