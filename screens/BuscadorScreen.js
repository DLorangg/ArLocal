import React, { useEffect } from "react";
import { View, Text} from 'react-native';
import LocalesList from '../src/components/LocalesList';
import { useNavigation } from "@react-navigation/native";
import BarraBusqueda from "../src/components/BarraBusqueda";

const BuscadorScreen = () => {
  const [textoBusqueda, setTextoBusqueda] = React.useState(''); //estado para el texto de la barra de busqueda
  
  const handleActualizarTextoBusqueda = (nuevoTexto) => { //funcion para cuando cambie el texto dentro del componente hijo
    setTextoBusqueda(nuevoTexto); // Actualiza el estado con el nuevo texto en el componente padre, osea este 

  };




  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({

    });
  }, [navigation]);

  return (
    <View>
      <BarraBusqueda actualizarTextoBusqueda={handleActualizarTextoBusqueda}/>

      <LocalesList busqueda={textoBusqueda}/>
    </View>
  );
};

export default BuscadorScreen;