<<<<<<< HEAD
import { Button_Next } from './components/Boton/Boton';
import { CrearCuenta } from './components/CrearCuenta/CrearCuenta';
import { Login } from './components/IniciarSesion/IniciarSesion'
function App() {
  return (
    <div className="App">
      <CrearCuenta/>
    </div>
=======
import { Routes, Route } from "react-router-dom";
import { Bienvenida } from "./components/Bienvenida/Bienvenida";
import { IniciarSesion } from "./components/IniciarSesion/IniciarSesion";
import { CrearCuenta } from "./components/CrearCuenta/CrearCuenta";
import { AuthProvider } from "./context/authContext";
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <RutaProtegida>
              <Bienvenida />
            </RutaProtegida>
          }
        />
        <Route path="/login" element={<IniciarSesion />} />
        <Route path="/register" element={<CrearCuenta />} />
      </Routes>
    </AuthProvider>
>>>>>>> e4a4b0abe64c02a5c4f61769bacc63541ba54d69
  );
}

export default App;
