import React from "react";
import {SafeAreaView, StyleSheet, TextInput, View, Text} from 'react-native';

const BarraBusqueda = ({ actualizarTextoBusqueda }) =>{
  const [texto, setTexto] = React.useState('');

  const handleActualizarTexto = (nuevoTexto) => { //funcion para cuando se actualice el texto

  };
  
    return (
      <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={handleActualizarTexto} // Usa la nueva función de cambio de texto
        value={texto}
      />
      {/* <Text style={styles.text}>{texto}</Text> */}
    </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    text: {
        margin: 12,
        fontSize: 16,
      },
  });

export default BarraBusqueda;

