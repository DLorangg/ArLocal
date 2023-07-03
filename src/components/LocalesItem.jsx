import react from "react";
import {Text, View, StyleSheet,Image} from 'react-native';
const styles = StyleSheet.create({
    contenedor: {
        padding:15,
        marginLeft: 15,
        marginRight: 15,
        flexDirection:'row',
        backgroundColor: '#9C85E6',
        borderRadius: 5
    },
    cuerpo:{
        padding:20,
        paddingBottom:5,
        paddingTop:5,
    },
    titulo:{
        fontWeight:'bold', 
        marginBottom:5,
        color:'#0945'
    },
    categoria: {
        backgroundColor:'#0945',
        padding: 4,
        alignSelf:'flex-start',
        borderRadius:4

    },
    imagen:{
        width:150,
        height:150,
        borderRadius:4
    }
})
const LocalesItem=(props)=>(
<View key={props.id} style={styles.contenedor}>
    <Image style={styles.imagen} source={{uri: props.img}}/>
    <View style={styles.cuerpo}>
        <Text style={styles.titulo}>{props.nombre}</Text>
        <View style={styles.categoria}>
            <Text >{props.categoria}</Text>
        </View>
        <Text>{props.direccion}</Text>
    </View>

</View>
)
export default LocalesItem