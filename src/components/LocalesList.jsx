import React, { useEffect, useState } from 'react';
import { Text, FlatList } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../Firebase';
import LocalesItem from './LocalesItem';

const LocalesList = ({ busqueda, tipoSeleccionado, abrirDetalleLocal }) => {
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

  // Lógica para filtrar por nombre o categoría
  const localesFiltrados = locales.filter((local) => {
    if (busqueda === '') {
      return true;
    } else {
      // Filtrar si el nombre o la categoría incluyen la búsqueda
      return (
        local.Nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        local.Categoria.toLowerCase().includes(busqueda.toLowerCase())
      );
    }
  });

  return (
    <FlatList
      data={localesFiltrados}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item: local }) => <LocalesItem abrirDetalleLocal={abrirDetalleLocal} {...local} />}
    />
  );
};

export default LocalesList;

