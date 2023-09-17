import React from "react";
//3) NavigationContainer
import { NavigationContainer } from "@react-navigation/native";
//1) createNativeStackNavigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";



import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

//navbar
import AppBar from "./src/components/AppBar";
//screens
import FavoritosScreen from "./screens/FavoritosScreen";
import ConfiguracionesScreen from "./screens/ConfiguracionesScreen";
import BuscadorScreen from "./screens/BuscadorScreen";
import CamaraScreen from "./screens/CamaraScreen";
import Configuracion1Screen from "./screens/Configuracion1Screen";
import Configuracion2Screen from "./screens/Configuracion2Screen";
import Configuracion3Screen from "./screens/Configuracion3Screen";


const Tab= createBottomTabNavigator()


//1) "createNativeStackNavigatores" una función que devuelve un objeto que contiene 2 propiedades: Screen y Navigator.
const ConfiguracionStackNavigator= createNativeStackNavigator();

function MyStack(){
    return(
        //2) Debe Navigator contener Screen elementos como sus hijos para definir la configuración de las rutas.
        <ConfiguracionStackNavigator.Navigator initialRouteName="Configuraciones">
            
            <ConfiguracionStackNavigator.Screen
                name="Configuraciones"
                component={ConfiguracionesScreen}
                options={{ headerShown: false }}

            />
            <ConfiguracionStackNavigator.Screen
                name="Configuracion1"
                component={Configuracion1Screen}
            />
            <ConfiguracionStackNavigator.Screen
                name="Configuracion2"
                component={Configuracion2Screen}
            />
            <ConfiguracionStackNavigator.Screen
                name="Configuracion3"
                component={Configuracion3Screen}
            />

        </ConfiguracionStackNavigator.Navigator>
    )
}
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
            <Tab.Screen 
                name="Favoritos" 
                component={FavoritosScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({color, size})=>(
                        
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

export default function Navigation(){
    return(
        //3)"NavigationContainer" es un contenedor especial de react navigation el cual debe envolver toda la applicacion 
        //3) "NavigationContainer es un componente que gestiona nuestro árbol de navegación y 
        //3) contiene el estado de navegación . Este componente debe envolver toda la estructura de los navegadores."
        <NavigationContainer  theme={MyTheme}>
            {/* navbar */}
            <AppBar/>
            <MyTabs />
        </NavigationContainer>
    )
}
const MyTheme = {
    dark: true,
    colors: {
      background: '#5C4999'
    },
  };