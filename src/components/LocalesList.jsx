import React, { useEffect, useState } from 'react';
import { Text, FlatList, query } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../Firebase'; 
import LocalesItem from './LocalesItem';

const LocalesList = ({ busqueda }) => {
  const [locales, setLocales] = useState([]);

  useEffect(() => {
    const fetchLocalesFromFirestore = async () => {
      const localCollection = collection(firestore, 'local');
      const querySnapshot = await getDocs(localCollection);

      const localesData = [];
      querySnapshot.forEach((doc) => {
        localesData.push(doc.data());
      });

      setLocales(localesData);
    };

    fetchLocalesFromFirestore();
  }, []);

  //Logica para filtrar locales
  const localesFiltrados = locales.filter((local) => {
    if (busqueda === '') {
      return true;
    } else {
      return local.Categoria.toLowerCase().includes(busqueda.toLowerCase());
    }
  });

  //Mostrar Locales
  return (
    <FlatList
      data={localesFiltrados}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item: local }) => <LocalesItem {...local} />}
    />
  );
}

export default LocalesList;
