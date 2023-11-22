import React, { useEffect, useState } from 'react';
import { Text, FlatList } from 'react-native';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { firestore } from '../../Firebase';
import LocalesItem from './LocalesItem';
import { useNavigation } from '@react-navigation/native';

const LocalesList = ({ busqueda, tipoSeleccionado }) => {
  const [locales, setLocales] = useState([]);

  useEffect(() => {
    const localCollection = collection(firestore, 'local');
    const orderedQuery = query(localCollection, orderBy('Nombre'));
  
    const unsubscribe = onSnapshot(orderedQuery, (querySnapshot) => {
      const localesData = [];
      querySnapshot.forEach((doc) => {
        const codigoQR = doc.id;  // Utiliza el ID único de Firestore como valor del código QR
        localesData.push({ ...doc.data(), id: doc.id, codigoQR });
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

  const navigation = useNavigation();

  const abrirDetalleLocal = (local) => {
    navigation.navigate('LocalScreen', { local });
  };

  return (
    <FlatList
      data={localesFiltrados}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item: local }) => (
        <LocalesItem abrirDetalleLocal={() => abrirDetalleLocal(local)} {...local} />
      )}
    />
  );
};

export default LocalesList;
