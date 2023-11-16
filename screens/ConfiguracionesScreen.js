import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const ConfiguracionesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Perfil")}
      >
        <Text style={styles.buttonText}>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Local")}
      >
        <Text style={styles.buttonText}>Local</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#5c4999", // Cambiar color de fondo a violeta
  },
  button: {
    backgroundColor: '#6ee674',
    width: 200,
    height: 50,
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white', // Cambiar color del texto a violeta
    fontWeight: 'bold',
  },
});

export default ConfiguracionesScreen;
