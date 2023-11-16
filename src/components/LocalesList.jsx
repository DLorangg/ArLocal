import React, { useEffect, useState } from 'react';
import { Text, FlatList } from 'react-native';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { firestore } from '../../Firebase';
import LocalesItem from './LocalesItem';

const LocalesList = ({ busqueda, tipoSeleccionado, abrirDetalleLocal }) => {
  const [locales, setLocales] = useState([]);

  useEffect(() => {
    const localCollection = collection(firestore, 'local');
    const orderedQuery = query(localCollection, orderBy('Nombre'));

    const unsubscribe = onSnapshot(orderedQuery, (querySnapshot) => {
      const localesData = [];
      querySnapshot.forEach((doc) => {
        localesData.push(doc.data());
      });
      setLocales(localesData);
    });

    // Limpiar la suscripción cuando el componente se desmonta
    return () => unsubscribe();
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
