import React, { useEffect } from "react";
import { View, Text} from 'react-native';
import LocalesList from '../src/components/LocalesList';
import { useNavigation } from "@react-navigation/native";
import BarraBusqueda from "../src/components/BarraBusqueda";

const BuscadorScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({

    });
  }, [navigation]);

  return (
    <View>
      <BarraBusqueda/>
      <LocalesList />
    </View>
  );
};

export default BuscadorScreen;
