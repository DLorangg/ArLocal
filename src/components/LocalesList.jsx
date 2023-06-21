import react from "react";
import {Text, FlatList } from "react-native";
import locales from "./data/locales";
import LocalesItem from "./LocalesItem";

const LocalesList = () =>{
    return(
        <FlatList
        data={locales}
        ItemSeparatorComponent={()=><Text></Text>}
        renderItem={({item: local})=>(
            <LocalesItem {... local}/>

        )}/>
    )
}

export default LocalesList