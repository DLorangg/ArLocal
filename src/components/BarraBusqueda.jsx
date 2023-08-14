import React from "react";
import {SafeAreaView, StyleSheet, TextInput, View, Text} from 'react-native';

const BarraBusqueda = () =>{
    const [text, onChangeText] = React.useState('');
  
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Text style={styles.text}>{text}</Text>
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
  });

export default BarraBusqueda;