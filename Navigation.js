import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
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


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();

function MyStack(){
    return(
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
                <Stack.Screen options={{headerShown: false}} name="Registrarse" component={RegistrarseScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

/*function MyTabs() {
    return(
        <Tab.Navigator
            initialRouteName="Home"
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
                name="Home" 
                component={HomeScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({color, size})=>(
                        
                        <MaterialCommunityIcons name="home" size={size} color={color} />
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
                component={ConfiguracionesScreen}
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
}*/

export default function Navigation(){
    return(
            <MyStack />
    )
}
const MyTheme = {
    dark: true,
    colors: {
      background: '#5C4999'
    },
};