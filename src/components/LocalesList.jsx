import react from "react";
import {Text, FlatList } from "react-native";
import locales from "./data/locales";
import LocalesItem from "./LocalesItem";

const LocalesList = ({textoBusqueda}) =>{
// weas->
const busqueda= (locales, input) =>{ 
    const coincidencia= ""
    locales.forEach( (local)=> { 
        if (input === local.nombre){
            return local

        }
    } )
}

// function filtrarNombre(productos) {
//     const inputFiltrado = document.getElementById('inputFiltrado')
//     let busqueda
//     let rta;
//     inputFiltrado.addEventListener('keyup', function() {
//         busqueda = inputFiltrado.value;
//         rta = productos.filter((producto) => producto.nombre.toLowerCase().includes(busqueda.toLowerCase()))
//         listarProductos(rta, menu, true)
//     })

// }
//<-weas
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