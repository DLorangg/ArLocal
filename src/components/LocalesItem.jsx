import React, { useState, useEffect } from "react";
import * as Font from 'expo-font';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

const LocalesItem = (props) => {
  // Fuentes
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'kraash': require("../../assets/fuentes/Kraash.ttf"),
        'kraash-black': require("../../assets/fuentes/Kraash-Black.ttf")
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableOpacity
     onPress={props.abrirDetalleLocal}
    >
    <View key={props.DocumentID} style={styles.contenedor}>
      <Image style={styles.imagen} source={{ uri: props.Img }} />
      <View style={styles.cuerpo}>
        <Text style={styles.titulo}>{props.Nombre}</Text>
        <View style={styles.categoria}>
          <Text style={styles.textoCategoria}>{props.Categoria}</Text>
        </View>
        <Text style={styles.direccion}>{props.Dirección}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
}

export default LocalesItem;

const styles = StyleSheet.create({
  contenedor: {
    padding: 15,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    backgroundColor: '#9C85E6',
    borderRadius: 5
  },
  cuerpo: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  titulo: {
    fontFamily: 'kraash-black',
    fontSize: 9,
    marginBottom: 5,
    marginTop: 5,
    color: '#FFF',
  },
  categoria: {
    backgroundColor: '#5C4999',
    padding: 7,
    alignSelf: 'flex-start',
    borderRadius: 4
  },
  textoCategoria: {
    fontFamily: 'kraash-black',
    fontSize: 6,
    color: '#9C85E6'
  },
  direccion: {
    fontSize: 12,
    color: '#FFF',
  },
  imagen: {
    width: 150,
    height: 150,
    borderRadius: 4
  }
});

