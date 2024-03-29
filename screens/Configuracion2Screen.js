import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Image, TextInput, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { collection, query, where, getDocs, doc, setDoc, updateDoc, getDoc, deleteDoc } from 'firebase/firestore';
import { firestore, auth } from '../Firebase';

const Configuracion2Screen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [nombreLocal, setNombreLocal] = useState("");
  const [direccionLocal, setDireccionLocal] = useState("");
  const [categoriaLocal, setCategoriaLocal] = useState("");
  const [localCreado, setLocalCreado] = useState(false);

  const obtenerUIDUsuario = () => {
    const usuarioActual = auth.currentUser;
    if (usuarioActual) {
      return usuarioActual.uid;
    }
  }

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

  const guardarLocal = async () => {
    try {
      const localData = {
        Nombre: nombreLocal,
        Dirección: direccionLocal,
        Categoria: categoriaLocal,
        Img: selectedImage,
        UID: obtenerUIDUsuario()
      };

      const newLocalRef = doc(collection(firestore, 'local'));

      await setDoc(newLocalRef, localData);

      setNombreLocal("");
      setDireccionLocal("");
      setCategoriaLocal("");
      setSelectedImage(null);
      alert("Local creado correctamente");
      setLocalCreado(true);
    } catch (error) {
      alert("Error al crear local. Intente de nuevo en unos minutos");
      console.error('Error al guardar el local: ', error);
    }
  };

  const actualizarLocal = async () => {
    try {
      const uidUsuario = obtenerUIDUsuario();

      // Buscar el local correspondiente al UID del usuario
      const localesCollection = collection(firestore, 'local');
      const q = query(localesCollection, where('UID', '==', uidUsuario));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Obtener el ID del documento del primer resultado (debería haber solo uno)
        const localDocId = querySnapshot.docs[0].id;

        // Referenciar el documento del local
        const localDocRef = doc(localesCollection, localDocId);

        // Obtener los datos actuales del local
        const localDocSnap = await getDoc(localDocRef);
        const localData = localDocSnap.data();

        // Actualizar el local con los nuevos datos
        await updateDoc(localDocRef, {
          Nombre: nombreLocal || localData.Nombre,
          Dirección: direccionLocal || localData.Dirección,
          Categoria: categoriaLocal || localData.Categoria,
          Img: selectedImage || localData.Img,
        });

        alert("Local actualizado correctamente");
      } else {
        alert("No se encontró el local para actualizar");
      }
    } catch (error) {
      alert("Error al actualizar el local. Intente de nuevo en unos minutos");
      console.error('Error al actualizar el local: ', error);
    }
  };

  const borrarLocal = async () => {
    try {
      const uidUsuario = obtenerUIDUsuario();
  
      // Buscar el local correspondiente al UID del usuario
      const localesCollection = collection(firestore, 'local');
      const q = query(localesCollection, where('UID', '==', uidUsuario));
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        // Obtener el ID del documento del primer resultado (debería haber solo uno)
        const localDocId = querySnapshot.docs[0].id;
  
        // Referenciar y borrar el documento del local
        await deleteDoc(doc(localesCollection, localDocId));
  
        alert("Local borrado correctamente");
        setLocalCreado(false);
      } else {
        alert("No se encontró el local para borrar");
      }
    } catch (error) {
      alert("Error al borrar el local. Intente de nuevo en unos minutos");
      console.error('Error al borrar el local: ', error);
    }
  };
  
  const verificarUIDEnFirestore = async (UID) => {
    const localesCollection = collection(firestore, 'local');
    const q = query(localesCollection, where('UID', '==', UID));
  
    const querySnapshot = await getDocs(q);
  
    return !querySnapshot.empty;
  };
  

  useEffect(() => {
    verificarUIDEnFirestore(obtenerUIDUsuario())
      .then((existeUID) => {
        setLocalCreado(existeUID);
      })
      .catch((error) => {
        console.error('Error al verificar el UID en Firestore: ', error);
      });
  }, [obtenerUIDUsuario()]);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Se requieren permisos para acceder a la galería.');
      }
    })();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {localCreado ? (
        // Formulario para actualizar y borrar el local
        <>
          <Button title="Seleccionar nueva Imagen" onPress={seleccionarImagen} />

          {selectedImage && (
            <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />
          )}

          <TextInput
            style={styles.input}
            placeholder="Nuevo nombre del Local"
            value={nombreLocal}
            onChangeText={(text) => setNombreLocal(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Nueva dirección del Local"
            value={direccionLocal}
            onChangeText={(text) => setDireccionLocal(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Nueva categoria del Local"
            value={categoriaLocal}
            onChangeText={(text) => setCategoriaLocal(text)}
          />

          <Button title="Actualizar Local" onPress={actualizarLocal} />
          <Button title="Borrar Local" onPress={borrarLocal} />
        </>
      ) : (
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

          <Button title="Crear Local" onPress={guardarLocal} />
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
