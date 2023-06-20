import react from "react";
import {Text, View, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    contenedor: {
        padding:20,
        paddingBottom:5,
        paddingTop:5
    },
    titulo:{
        fontWeight:'bold', 
        marginBottom:5,
        color:'#0945'
    }
})
const LocalesItem=(props)=>(
    <View key={props.id} style={styles.contenedor}>
    <Text style={styles.titulo}>{props.nombre}</Text>
    <Text>@{props.id}</Text>
    <Text>{props.categoria}</Text>
    <Text>{props.direccion}!</Text>
    {/* <Image
    source={local.img}/> */}
    
    
</View>
)
export default LocalesItem