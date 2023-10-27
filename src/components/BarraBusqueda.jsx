import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BarraBusqueda = ({ actualizarTextoBusqueda, locales }) => {
  const [texto, setTexto] = React.useState('');

  const handleActualizarTexto = (nuevoTexto) => {
    setTexto(nuevoTexto);
    actualizarTextoBusqueda(nuevoTexto);
  };

  return (
    <SafeAreaView>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="magnify" size={24} color="#9C85E6" style={styles.icon} />
        <TextInput
          style={styles.input}
          onChangeText={handleActualizarTexto}
          value={texto}
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
    borderColor: '#9C85E6', // Establece el color del borde
    flex: 1,
  },
  text: {
    margin: 12,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 5, // Agrega espacio en los lados
  },
  icon: {
    marginLeft: 10,
  }
});

export default BarraBusqueda;
