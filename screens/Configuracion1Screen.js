import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
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
      <Text style={styles.title}>Email asociado: {auth.currentUser?.email}</Text>

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

      <Button
        title={showForm ? "Confirmar cambio" : "Cambiar contraseña"}
        onPress={() => {
          if (showForm) {
            handleChangePassword(); // Ejecuta la función si se muestra el formulario
          } else {
            setShowForm(true); // Muestra el formulario si no está visible
          }
        }}
      />

      <Button
        title="Cerrar sesión"
        onPress={() => handleSignOut()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#292929" },
  title: { fontSize: 25, color: "#fff" },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 10,
    paddingLeft: 10,
    color: "#fff", 
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  }
});

export default Configuracion1Screen;
