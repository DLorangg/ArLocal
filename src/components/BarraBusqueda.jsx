import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BarraBusqueda = ({ actualizarTextoBusqueda }) => {
  const [nombre, setNombre] = React.useState('');

  const handleActualizarTexto = (nuevoTexto) => {
    setNombre(nuevoTexto);
    actualizarTextoBusqueda(nuevoTexto);
  };

  return (
    <SafeAreaView>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="magnify" size={24} color="#9C85E6" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Buscar por nombre"
          onChangeText={handleActualizarTexto}
          value={nombre}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#9C85E6',
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  icon: {
    marginLeft: 10,
  }
});

export default BarraBusqueda;
