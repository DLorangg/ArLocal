import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome as Icon } from "@expo/vector-icons"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';
import { signInAnonymously } from 'firebase/auth';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';


const LoginScreen = () => {
  const navigation = useNavigation(); // Obtiene la instancia de navegación
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleCrearCuenta = () =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const usuario = userCredential.user
        console.log('cuenta creada! Bj', usuario)
        navigation.navigate('Tabs');
    })
    .catch(error=>{
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
            })
  }
  const handleIniciarSesion = () =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const usuario = userCredential.user
        console.log('cuenta creada! Bj', usuario)
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
        })           
  }

  const handleInvitado = () => {
    signInAnonymously(auth)
      .then((userCredential) => {
        const usuario = userCredential.user;
        console.log('Usuario invitado creado:', usuario);
        navigation.navigate('Tabs');
      })
      .catch((error) => {
        // Manejo de errores si la autenticación anónima falla
        console.error('Error al crear usuario invitado:', error);
        // Aquí puedes mostrar una alerta u otro mensaje al usuario sobre el fallo en la autenticación
      });
  };

  

    // Login con Google sin Firebase 

    // const [accessToken, setAccessToken] = React.useState(null);
    // const [user, setUser] = React.useState(null);
    // const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    //   clientId: " ",
    //   iosClientId: " ",
    //   androidClientId: " "
    // });
  
    // React.useEffect(() => {
    //   if(response?.type === "success"){
    //     setAccessToken(response.authentication.accessToken);
    //     accessToken && fetchUserInfo();
    //   }
    // }, [response, accessToken])

    // Este es el otro login Con Google Siguiendo la Documentacion de Firebase que tiene Expo

    // GoogleSignin.configure ({
    //   webClienId: '',
    // });

    // const onGoogleButtonPress = async () => {
    //   // Check if your device supports Google play
    //   await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    //   // Get the users Id token
    //   const { id_token } = await GoogleSignin.signIn();

    //   // Create a Google credential with the token
    //   const user_sing_in = auth().signWithCredential(googleCredential);
    //   user_sing_in
    //     .then((user) => {
    //       console.log(user);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     })
    // }
    


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
          onPress={() => navigation.navigate('Registrarse')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Crear Cuenta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleInvitado}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Invitado</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{}}
          style={styles.button}
        >
          <Text style={styles.buttonText}><Icon name='github' style={styles.icon} /> Login with GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{}}
          style={styles.button}
        >
          <Text style={styles.buttonText}><Icon name='google' style={styles.icon}/> Login with Google</Text>
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
    backgroundColor: '#5c4999',
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
    marginBottom: 10,
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



export default LoginScreen