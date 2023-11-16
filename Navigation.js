import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import AppBar from "./src/components/AppBar";
import FavoritosScreen from "./screens/FavoritosScreen";
import ConfiguracionesScreen from "./screens/ConfiguracionesScreen";
import BuscadorScreen from "./screens/BuscadorScreen";
import CamaraScreen from "./screens/CamaraScreen";
import Configuracion1Screen from "./screens/Configuracion1Screen";
import Configuracion2Screen from "./screens/Configuracion2Screen";
import LocalScreen from "./screens/LocalScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegistrarseScreen from "./screens/RegistrarseScreen";
//------------------------------------------------------------------
//#endregion
//todas las hueas de locales ya estoy re mareada zzzzZz
//#region 
const HadleLocales = createNativeStackNavigator();
function Locales(){
    return(
            <HadleLocales.Navigator initialRouteName="BuscadorScreen">
                <HadleLocales.Screen options={{headerShown: false}} name="BuscadorScreen" component={BuscadorScreen} />
                <HadleLocales.Screen options={{headerShown: false}} name="LocalScreen" component={LocalScreen} />
            </HadleLocales.Navigator>
    )
}
//#endregion


//pantalla de login!
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

//pantalla de configuraciones con su stack (pila) de configuraciones! [hasta ahora hay tres que no hacen nada lol]
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
                name="ConfiguracionPrincipal"
                component={ConfiguracionesScreen}
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
    );
}

//Navegador de pestañas inferior!
//#region 
//3) ----------------------createBottomTabNavigator-----------------------------------------
//3) "createBottomTabNavigator" una función que devuelve un objeto que contiene 2 propiedades: Screen y Navigator. y crea Una barra de pestañas simple en la parte inferior de la pantalla que te permite cambiar entre diferentes rutas. 
const Tab= createBottomTabNavigator()
function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Buscar"
            screenOptions={{
                tabBarActiveTintColor: '#519955',
                tabBarInactiveTintColor: '#6EE674',
                tabBarStyle: { backgroundColor: '#5C4999', height: 62 }
            }}
        >
            <Tab.Screen
                name="Favoritos"
                component={FavoritosScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="star" size={size} color={color} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Camara"
                component={CamaraScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="camera" size={size} color={color} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name="Buscar" 
                component={Locales}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="search" size={size} color={color} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Configuraciones"
                component={ConfiguracionStack}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cog" size={size} color={color} />
                    ),
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    );
}

function Login() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Registrarse" component={RegistrarseScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Tabs" component={MyTabs} />
        </Stack.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer theme={MyTheme}>
            <AppBar />
            <Login />
        </NavigationContainer>
    );
}

const MyTheme = {
    dark: true,
    colors: {
      background: '#5C4999'
    },
  };
