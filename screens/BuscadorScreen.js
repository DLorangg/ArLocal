import React, { useEffect } from "react";
import { View, Text} from 'react-native';
import LocalesList from '../src/components/LocalesList';
import { useNavigation } from "@react-navigation/native";

const BuscadorScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({

    });
  }, [navigation]);

  return (
    <View>

      <LocalesList />
    </View>
  );
};

export default BuscadorScreen;
