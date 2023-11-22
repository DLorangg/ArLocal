import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../Firebase';
import { getAuth, updatePassword, signOut } from "firebase/auth";

const Configuracion1Screen = () => {
  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState(""); // Estado para la nueva contraseña
  const [confirmPassword, setConfirmPassword] = useState(""); // Estado para confirmar la contraseña
  const [error, setError] = useState(""); 
  const [showForm, setShowForm] = useState(false); 

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Cerró sesión correctamente');
        navigation.navigate('Login');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleChangePassword = () => {
    if (newPassword === confirmPassword) {
      updatePassword(auth.currentUser, newPassword)
        .then(() => {
          console.log('Contraseña actualizada correctamente');
          setNewPassword(""); // Reiniciar los campos del formulario
          setConfirmPassword("");
          setError("");
          setShowForm(false); // Ocultar el formulario después de cambiar la contraseña
        })
        .catch((error) => {
          setError('Error al actualizar la contraseña: ' + error.message);
        });
    } else {
      setError("Las contraseñas no coinciden.");
    }
  };

  return (
    <View style={styles.container}>
    <Text style={styles.emailTitle}>Correo Electrónico Asociado:</Text>
    <Text style={styles.emailText}>{auth.currentUser?.email}</Text>

    {showForm ? (
      <View>
        {/* Formulario para cambiar la contraseña */}
        <TextInput
          placeholder="Nueva contraseña"
          secureTextEntry
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Confirmar nueva contraseña"
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          style={styles.input} 
        />
        <Text style={styles.errorText}>{error}</Text>
      </View>
    ) : null}

    <TouchableOpacity
      style={showForm ? styles.confirmButton : styles.changePasswordButton}
      onPress={() => {
        if (showForm) {
          handleChangePassword(); // Ejecuta la función si se muestra el formulario
        } else {
          setShowForm(true); // Muestra el formulario si no está visible
        }
      }}
    >
      <Text style={styles.buttonText}>{showForm ? "Confirmar Cambio" : "Cambiar Contraseña"}</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.signOutButton}
      onPress={() => handleSignOut()}
    >
      <Text style={styles.buttonText}>Cerrar Sesión</Text>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#5c4999", // Cambio del color de fondo
    padding: 20,
  },
  emailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff', // Cambio de color del texto
  },
  emailText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#fff', // Cambio de color del texto
  },
  input: {
    width: 300,
    marginBottom: 10,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    color: '#fff', // Cambio de color del texto
  },
  confirmButton: {
    backgroundColor: '#6ee674', // Color de fondo para Confirmar Cambio
    width: 300,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  changePasswordButton: {
    backgroundColor: '#4a90e2', // Color de fondo para Cambiar Contraseña
    width: 300,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  signOutButton: {
    backgroundColor: '#e24a4a', // Color de fondo para Cerrar Sesión
    width: 300,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default Configuracion1Screen;
