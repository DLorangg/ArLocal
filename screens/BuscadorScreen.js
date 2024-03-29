import React, { useEffect, useState } from "react";
import { View, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import LocalesList from '../src/components/LocalesList';
import BarraBusqueda from "../src/components/BarraBusqueda";

const BuscadorScreen = () => {
  const [textoBusqueda, setTextoBusqueda] = useState('');
  const [tipoSeleccionado, setTipoSeleccionado] = useState('nombre');

  const abrirDetalleLocal = ()=>{
    navigation.navigate('LocalScreen');
  }

  const handleActualizarTextoBusqueda = (nuevoTexto) => {
    setTextoBusqueda(nuevoTexto);
  };

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      // Configura las opciones de navegación si es necesario
    });
  }, [navigation]);

  return (
    <View>
      <BarraBusqueda actualizarTextoBusqueda={handleActualizarTextoBusqueda} />
      {/* Agrega elementos para permitir al usuario seleccionar el tipo de búsqueda */}
      <LocalesList busqueda={textoBusqueda} tipoBusqueda={tipoSeleccionado} abrirDetalleLocal={abrirDetalleLocal}/>
    </View>
  );
};

export default BuscadorScreen;
