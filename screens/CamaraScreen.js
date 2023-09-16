import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const CamaraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("No escaneado");

  const pedirPermisos = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === "granted");
  };

  // Preguntar por permisos de la cámara
  useEffect(() => {
    pedirPermisos();
  }, []);

  // Cuando escanea el código
  const handleBarCodeScanner = ({ type, data }) => {
    setScanned(true);
    setText(data);
    console.log("Tipo: " + type + "\nData: " + data);
  };

  // Confirmar permisos y retornar pantalla
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Preguntando por permisos de la cámara</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>Sin acceso a la cámara</Text>
        <Button title={"Permitir cámara"} onPress={() => pedirPermisos()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanner}
          style={{ height: 400, width: 400 }}
        />
      </View>
      <Text style={styles.mainText}>{text}</Text>

      {scanned && (
        <Button
          title={"Escanear de nuevo?"}
          onPress={() => setScanned(false)}
          color="tomato"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "tomato",
  },
  mainText: {
    fontSize: 16,
    margin: 20,
  },
});

export default CamaraScreen;
