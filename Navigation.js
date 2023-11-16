//imports
//#region 
import React from "react";
//------------------------------------------------------------------
//4) import NavigationContainer
import { NavigationContainer } from "@react-navigation/native";
//1) import createNativeStackNavigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//3) import createBottomTabNavigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//------------------------------------------------------------------
//otros import 
//iconos
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
//navbar
import AppBar from "./src/components/AppBar";
//------------------------------------------------------------------
//screens
import FavoritosScreen from "./screens/FavoritosScreen";
import ConfiguracionesScreen from "./screens/ConfiguracionesScreen";
import BuscadorScreen from "./screens/BuscadorScreen";
import CamaraScreen from "./screens/CamaraScreen";
import Configuracion1Screen from "./screens/Configuracion1Screen";
import Configuracion2Screen from "./screens/Configuracion2Screen";
import Configuracion3Screen from "./screens/Configuracion3Screen";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegistrarseScreen from "./screens/RegistrarseScreen";
//------------------------------------------------------------------
//#endregion

//pantalla de login
//#region 
const Stack = createNativeStackNavigator();

function Login(){
    return(
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
                <Stack.Screen options={{headerShown: false}} name="Registrarse" component={RegistrarseScreen} />
                <Stack.Screen options={{headerShown: false}} name="Tabs" component={MyTabs} />
            </Stack.Navigator>
    )
}
// const TabLogin= createBottomTabNavigator()
// function Login() {
//     return(
//         <TabLogin.Navigator
//             initialRouteName="Login"
//             screenOptions={{
//                 tabBarActiveTintColor: '#519955',
//                 tabBarInactiveTintColor: '#6EE674',
//                 tabBarStyle: { backgroundColor:'#5C4999', height: 62}

//             }}
//         >
//             <TabLogin.Screen 
//                 name="Login" 
//                 component={LoginScreen}
//                 options={{
//                     tabBarLabel: "",
//                     tabBarIcon: ({color, size})=>(
                        
//                         <MaterialCommunityIcons name="star" size={size} color={color} />
//                     ),
//                     headerShown: false
//                 }}
//             />
//             <TabLogin.Screen 
//                 name="Registrarse" 
//                 component={RegistrarseScreen}
//                 options={{
//                     tabBarLabel: "",
//                     tabBarIcon: ({color, size})=>(
                        
//                         <MaterialCommunityIcons name="camera" size={size} color={color} />
//                     ),
//                     headerShown: false
//                 }}
//             />
//         </TabLogin.Navigator>
//     )
// }

//#endregion
//pantalla de configuraciones con su stack (pila) de configuraciones [hasta ahora hay tres que no hacen nada lol]
//#region 

//1) ----------------------createNativeStackNavigator-----------------------------------------
//1) "createNativeStackNavigatores" una función que devuelve un objeto que contiene 2 propiedades: Screen y Navigator.
const ConfiguracionStackNavigator= createNativeStackNavigator();


//2) ----------------------Screen y Navigator-----------------------------------------
function MyStack(){
    return(
        //2) Debe Navigator contener Screen elementos como sus hijos para definir la configuración de las rutas.
        /* 2) dentro de "Navigator" se definen todas las rutas que contendra este componente.
        Estas rutas se especifican utilizando "Screen"*/
        <ConfiguracionStackNavigator.Navigator initialRouteName="Configuraciones">
            {/*2) esta primer screen esta como ruta inicial (initialRouteName="Configuraciones") por lo que sera la que se vera al renderizar este componente.
            en este caso, esta primer screen renderiza en su componente (ConfiguracionesScreen) botones que te permiten navegar por las demas rutas definidas*/}
            <ConfiguracionStackNavigator.Screen
                //2) nombre de la ruta que usaremos para navegar
                name="Configuraciones"
                //2) component corresponde al componente que representará ese Screen
                component={ConfiguracionesScreen}
                //2)entonces, la Configuraciones ruta corresponde al ConfiguracionesScreen componente
                //-------------------------------------------------------
                //2) options sirve para configurar diversas opciones el navegador
                options={{ headerShown: false }}

            />
            <ConfiguracionStackNavigator.Screen
                name="Perfil"
                component={Configuracion1Screen}
            />
            <ConfiguracionStackNavigator.Screen
                name="Local"
                component={Configuracion2Screen}
            />
            {/* <ConfiguracionStackNavigator.Screen
                name="Configuracion3"
                component={Configuracion3Screen}
            /> */}

        </ConfiguracionStackNavigator.Navigator>
    )
}
//#endregion

//Navegador de pestañas inferior
//#region 
//3) ----------------------createBottomTabNavigator-----------------------------------------
//3) "createBottomTabNavigator" una función que devuelve un objeto que contiene 2 propiedades: Screen y Navigator. y crea Una barra de pestañas simple en la parte inferior de la pantalla que te permite cambiar entre diferentes rutas. 
const Tab= createBottomTabNavigator()
function MyTabs() {
    return(
        <Tab.Navigator
            initialRouteName="Buscar"
            screenOptions={{
                tabBarActiveTintColor: '#519955',
                tabBarInactiveTintColor: '#6EE674',
                tabBarStyle: { backgroundColor:'#5C4999', height: 62}

            }}
        >
            {/* <Tab.Screen 
                name="Favoritos" 
                component={FavoritosScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({color, size})=>(
                        
                        <MaterialCommunityIcons name="star" size={size} color={color} />
                    ),
                    headerShown: false
                }}
            /> */}
            <Tab.Screen 
                name="Camara" 
                component={CamaraScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({color, size})=>(
                        
                        <MaterialCommunityIcons name="camera" size={size} color={color} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name="Buscar" 
                component={BuscadorScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({color, size})=>(
                        
                        <FontAwesome name="search" size={size} color={color} />
                    ),
                    headerShown: false
                }}
            />
            {/*2) componente donde se encuentra la "ConfiguracionStackNavigator" que cree con createNativeStackNavigator (1) */}
            <Tab.Screen 
                name="Configuraciones" 
                
                component={MyStack}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({color, size})=>(
                        
                        <MaterialCommunityIcons name="cog" size={size} color={color} />
                    ),
                    headerShown: false
                }}
                />
        </Tab.Navigator>
    )
}
//#endregion

//Stack del login

export default function Navigation(){
    return(
        //4) ----------------------NavigationContainer-----------------------------------------     

        /*4)"NavigationContainer" es un contenedor especial de react navigation el cual debe envolver toda la applicacion.
        "NavigationContainer es un componente que gestiona nuestro árbol de navegación y contiene el estado de navegación . Este componente debe envolver toda la estructura de los navegadores."*/
        <NavigationContainer  theme={MyTheme}>
            {/* navbar */}
            <AppBar/>
            {/*3) componente donde se encuentra la "Tab" que cree con createBottomTabNavigator*/}
            <Login />
        </NavigationContainer>
    )
}
const MyTheme = {
    dark: true,
    colors: {
      background: '#5C4999'
    },
  };