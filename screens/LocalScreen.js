import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../Firebase';

const LocalScreen = ({ route }) => {
  const navigation = useNavigation();
  const { localId, local } = route.params || {};
  const [localData, setLocalData] = useState(null);

  useEffect(() => {
    const obtenerInformacionLocal = async () => {
      if (local) {
        // Caso de navegación desde el escaneo
        setLocalData(local);
      } else if (localId) {
        // Caso de navegación manual
        const localDocRef = doc(firestore, 'local', localId);
        const localDocSnap = await getDoc(localDocRef);

        if (localDocSnap.exists()) {
          setLocalData(localDocSnap.data());
        } else {
          console.log('No se encontró el local con el ID proporcionado');
        }
      } else {
        console.log('No se proporcionó ni el objeto local ni el ID del local');
      }
    };

    obtenerInformacionLocal();
  }, [localId, local]);

  if (!localData) {
    return (
      <View>
        <Text>Cargando...</Text>
      </View>
    );
  }

  if (!local) {
    return (
      <View>
        <Text>Cargando...</Text>
      </View>
    );
  }

  // Renderizar la información del local
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: local.Img }} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Nombre: <Text style={styles.text}>{local.Nombre}</Text></Text>
        <Text style={styles.label}>Categoría: <Text style={styles.text}>{local.Categoria}</Text></Text>
        <Text style={styles.label}>Dirección: <Text style={styles.text}>{local.Dirección}</Text></Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'normal',
  },
  button: {
    backgroundColor: '#6ee674',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LocalScreen;
