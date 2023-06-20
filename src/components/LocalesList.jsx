import react from "react";
import { View, Text, Image } from "react-native";
import locales from "./data/Locales";

const LocalesList = () =>{
    return(
        <View>
            {locales.map(local =>(
                <View key={local.id}>
                    <Text>{local.nombre}</Text>

                </View>
            )
            )}
        </View>
    )
}

export default LocalesList