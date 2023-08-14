import React from "react";
import {SafeAreaView, StyleSheet, TextInput, View, Text} from 'react-native';

const BarraBusqueda = () =>{
    const [text, onChangeText] = React.useState('Useless Text');

    return (
        <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />

      </SafeAreaView>
    )


}

export default BarraBusqueda;