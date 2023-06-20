import react from "react";
import {Text, View, StyleSheet} from 'react-native';

const LocalesItem=(props)=>(
    <View key={props.id} style={{padding:20, paddingBottom:5, paddingTop:5}}>
    <Text style={{fontWeight:'bold', marginBottom:5}}>{props.nombre}</Text>
    <Text>@{props.id}</Text>
    <Text>{props.categoria}</Text>
    <Text>{props.direccion}!</Text>
    {/* <Image
    source={local.img}/> */}
    
    
</View>
)
export default LocalesItem