import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../../Firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text => setEmail(text))}></TextInput>
      <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder='Password' autoCapitalize='none' onChangeText={(text => setPassword(text))}></TextInput>
    </View>
  );
};

export default Login

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    }
});

