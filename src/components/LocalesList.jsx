import React, { useEffect, useState } from 'react';
import { Text, FlatList } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../Firebase'; 
import LocalesItem from './LocalesItem';

const LocalesList = ({ busqueda }) => {
  const [locales, setLocales] = useState([]);

  useEffect(() => {
    const fetchLocalesFromFirestore = async () => {
      const localCollection = collection(firestore, 'local'); // Usar 'local' como nombre de la colección
      const querySnapshot = await getDocs(localCollection);

      const localesData = [];
      querySnapshot.forEach((doc) => {
        localesData.push(doc.data());
      });

      setLocales(localesData);
    };

    fetchLocalesFromFirestore();
  }, []);

  // Puedes agregar la lógica para filtrar locales basados en la búsqueda aquí

  return (
    <FlatList
      data={locales}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item: local }) => <LocalesItem {...local} />}
    />
  );
}

export default LocalesList;
