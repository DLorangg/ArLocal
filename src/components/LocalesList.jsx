import react from "react";
import { View, Text, Image, FlatList } from "react-native";
import locales from "./data/locales";

const LocalesList = () =>{
    return(
        <FlatList
        data={locales}
        renderItem={({item: local})=>(
            <View key={local.id}>
                    <Text>{local.nombre}</Text>
                    <Text>{local.categoria}</Text>
                    <Text>{local.direccion}</Text>
                    {/* <Image
                    source={local.img}/> */}
                    
                    
                </View>
        )}/>
    )
}

export default LocalesList