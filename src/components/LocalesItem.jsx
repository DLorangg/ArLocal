import React, { useState, useEffect } from "react";
import * as Font from 'expo-font';
import { Text, View, StyleSheet, Image } from 'react-native';

const LocalesItem = (props) => {
  //#region 
  //fuentes zzZZZzz
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
  //#endregion

  return (
    <View key={props.id} style={styles.contenedor}>
      <Image style={styles.imagen} source={{ uri: props.img }} />
      <View style={styles.cuerpo}>
        <Text style={styles.titulo}>{props.nombre}</Text>
        <View style={styles.categoria}>
          <Text>{props.categoria}</Text>
        </View>
        <Text>{props.direccion}</Text>
      </View>
    </View>
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
    fontSize: 7,
    marginBottom: 5,
    color: '#FFF'
  },
  categoria: {
    backgroundColor: '#5C4999',
    // fontFamily: 'kraash-black',
    // fontSize: 7,
    padding: 4,
    alignSelf: 'flex-start',
    borderRadius: 4
  },
  imagen: {
    width: 150,
    height: 150,
    borderRadius: 4
  }
});
