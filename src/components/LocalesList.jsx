import react from "react";
import { View, Text, Image, FlatList } from "react-native";
import locales from "./data/locales";

const LocalesList = () =>{
    return(
        <FlatList
        data={locales}
        ItemSeparatorComponent={()=><Text></Text>}
        renderItem={({item: local})=>(
            <View key={local.id} style={{padding:20, paddingBottom:5, paddingTop:5}}>
                    <Text style={{fontWeight:'bold', marginBottom:5}}>{local.nombre}</Text>
                    <Text>@{local.id}</Text>
                    <Text>{local.categoria}</Text>
                    <Text>{local.direccion}</Text>
                    {/* <Image
                    source={local.img}/> */}
                    
                    
                </View>
        )}/>
    )
}

export default LocalesList