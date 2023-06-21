import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//screens
import FavoritosScreen from "./screens/FavoritosScreen";
import ConfiguracionesScreen from "./screens/ConfiguracionesScreen";
import BuscadorScreen from "./screens/BuscadorScreen";
import CamaraScreen from "./screens/CamaraScreen";
import Configuracion1Screen from "./screens/Configuracion1Screen";
import Configuracion2Screen from "./screens/Configuracion2Screen";
import Configuracion3Screen from "./screens/Configuracion3Screen";
const Tab= createBottomTabNavigator()
const ConfiguracionStackNavigator= createNativeStackNavigator();
function MyStack(){
    return(
        <ConfiguracionStackNavigator.Navigator initialRouteName="Configuraciones">
            
            <ConfiguracionStackNavigator.Screen
                name="Configuraciones"
                component={ConfiguracionesScreen}
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
                tabBarActiveTintColor: 'purple'
                
            }}
        >
            <Tab.Screen 
                name="Favoritos" 
                component={FavoritosScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({color, size})=>(
                        
                        <MaterialCommunityIcons name="star" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen 
                name="Camara" 
                component={CamaraScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({color, size})=>(
                        
                        <MaterialCommunityIcons name="camera" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen 
                name="Buscar" 
                component={BuscadorScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({color, size})=>(
                        
                        <FontAwesome name="search" size={size} color={color} />
                    )
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
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}