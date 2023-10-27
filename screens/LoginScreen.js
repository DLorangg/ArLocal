import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../Firebase';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

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
        navigation.navigate('Tabs');
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
            alert('Email inválido. Debe contener "@".');
            break;
          case 'auth/wrong-password':
            alert('Contraseña incorrecta.');
            break;
          case 'auth/user-not-found':
            alert('Usuario no encontrado. Regístrate primero.');
            break;
          case 'auth/too-many-requests':
            alert('Demasiados intentos fallidos. La cuenta se ha bloqueado, cambia la contraseña.');
            break;
          default:
            alert('Error desconocido: ' + error.message);
        }
      });
  }  
  
  const handleChangePassword = () => {
    if (!email) {
      alert('Por favor, ingrese su dirección de correo electrónico antes de solicitar el restablecimiento de contraseña.');
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert('Se ha enviado un correo para restablecer la contraseña. Revise su bandeja de entrada.');
        })
        .catch((error) => {
          alert('Error al enviar el correo para restablecer la contraseña: ' + error.message);
        });
    }
  };

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
        <TouchableOpacity
          onPress={handleChangePassword}
          style={styles.changePasswordButton}
        >
          <Text style={styles.changePasswordButtonText}>Cambiar contraseña</Text>
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
  changePasswordLink: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default LoginScreen