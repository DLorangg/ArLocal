import React, { useEffect, useState } from "react";
import { ViewPropTypes, StyleSheet, Text, Image } from 'react-native'
import Constants from 'expo-constants'
import { View } from "react-native";
import * as Font from 'expo-font';

const AppBar = () => {
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
    <View style={styles.contenedor}>
      <Image
        style={styles.img}
        source={require('../components/../../assets/logos/7.png')}
      />
      <View style={styles.containerTexto1}>      
      <Text style={styles.texto1}>
        ArLocal
      </Text>
      </View>
      <View style={styles.containerTexto2}>      
      <Text style={styles.texto2}>
        ArLocal
      </Text>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#5C4999',
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    paddingLeft: 10,
    flexDirection: 'row'
  },
  img: {
    width: 45,
    height: 45,
  },
  containerTexto1: {
    position: 'absolute',
    width: 168,
    height: 30,
    left: 51,
    top: Constants.statusBarHeight+10,
  },
  texto1: {
    fontFamily: 'kraash-black',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 25,
    color: '#519955',
  },
  containerTexto2: {
    position: 'absolute',
    width: 168,
    height: 30,
    left: 57,
    top: Constants.statusBarHeight+10,
  },
  texto2: {
    fontFamily: 'kraash-black',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 30,
    color: '#6EE674',
  },
});

export default AppBar;
