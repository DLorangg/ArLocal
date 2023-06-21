import react from "react";
import {ViewPropTypes, StyleSheet, Text, Image} from 'react-native'
import Constants from 'expo-constants'
import { View } from "react-native";
import {useFonts} from 'expo-font'
const styles = StyleSheet.create({
    contenedor:{
        backgroundColor:'#5C4999',
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 10,
        paddingLeft: 10,
        flexDirection: 'row'

    },
    img:{
        width:45,
        height:45,


    }
})

const AppBar = ()=>{
    return(
        <View style={styles.contenedor}>
            <Image
            style={styles.img}
            source={require('../components/../../assets/logos/7.png')}/>
            <Text style={styles.tex}>
                ArLocal
            </Text>


        </View>

    )
}
export default AppBar
// background: #5C4999;