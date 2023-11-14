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
import LoginScreen from "./screens/LoginScreen";
import RegistrarseScreen from "./screens/RegistrarseScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ConfiguracionStackNavigator = createNativeStackNavigator();

function ConfiguracionStack() {
    return (
        <ConfiguracionStackNavigator.Navigator initialRouteName="ConfiguracionPrincipal">
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
        </ConfiguracionStackNavigator.Navigator>
    );
}

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
                component={BuscadorScreen}
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