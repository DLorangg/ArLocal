import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Image, TextInput, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { collection, query, where, getDocs, doc, setDoc } from 'firebase/firestore';
import { firestore, auth } from '../Firebase'; 

const Configuracion2Screen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [nombreLocal, setNombreLocal] = useState("");
  const [direccionLocal, setDireccionLocal] = useState("");
  const [categoriaLocal, setCategoriaLocal] = useState("");
  const [permitirCreacion, setPermitirCreacion] = useState("");

  //Funcion para obtener UID de usuario
  const obtenerUIDUsuario = () => {
    const usuarioActual = auth.currentUser;
    if (usuarioActual) {
      return usuarioActual.uid;
    }
  }

  // Función para abrir el selector de imágenes de la galería
  const seleccionarImagen = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };  

  // Función para guardar los datos en Firestore
  const guardarLocal = async () => {
    try {
      const localData = {
        Nombre: nombreLocal,
        Dirección: direccionLocal,
        Categoria: categoriaLocal,
        Img: selectedImage, 
        UID: obtenerUIDUsuario()
      };

      // Crea una referencia al documento del nuevo local
      const newLocalRef = doc(collection(firestore, 'local'));

      // Agrega los datos del nuevo local al documento
      await setDoc(newLocalRef, localData);

      // Limpia los campos y la imagen seleccionada
      setNombreLocal("");
      setDireccionLocal("");
      setCategoriaLocal("");
      setSelectedImage(null);
      alert("Local creado correctamente")
    } catch (error) {
      alert("Error al crear local. Intente de nuevo en unos minutos")
      console.error('Error al guardar el local: ', error);
    }
  };

  //Funcion para verificar si el usuario creó un local
  const verificarUIDEnFirestore = async (UID) => {
    const localesCollection = collection(firestore, 'local'); 
    const q = query(localesCollection, where('uid', '==', UID)); 
  
    const querySnapshot = await getDocs(q);
  
    return !querySnapshot.empty; // Retorna true si el UID existe en algún objeto de la colección
  };

  useEffect(() => {
    verificarUIDEnFirestore(obtenerUIDUsuario())
      .then((existeUID) => {
        if (existeUID) {
          setPermitirCreacion(false);
        }
      })
      .catch((error) => {
        console.error('Error al verificar el UID en Firestore: ', error);
      });
  }, [obtenerUIDUsuario()]);

  //Permisos para fotos
  useEffect(() => {
    (async () => {
      // Solicitar permiso de acceso a la galería
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Se requieren permisos para acceder a la galería.');
      }
    })();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {permitirCreacion ? ( //Al no tener creado un local
        <>
          <Button title="Seleccionar Imagen" onPress={seleccionarImagen} />
  
          {selectedImage && (
            <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />
          )}
  
          <TextInput
            style={styles.input}
            placeholder="Nombre del Local"
            value={nombreLocal}
            onChangeText={(text) => setNombreLocal(text)}
          />
  
          <TextInput
            style={styles.input}
            placeholder="Dirección del Local"
            value={direccionLocal}
            onChangeText={(text) => setDireccionLocal(text)}
          />
  
          <TextInput
            style={styles.input}
            placeholder="Categoría del Local"
            value={categoriaLocal}
            onChangeText={(text) => setCategoriaLocal(text)}
          />
  
          <Button title="Guardar Local" onPress={guardarLocal} />
        </>
      ) : (
        //Al tener creado un local
        <>
        </>
      )}
    </ScrollView>
  );  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#292929",
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
});

export default Configuracion2Screen;
