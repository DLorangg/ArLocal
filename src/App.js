import { Routes, Route } from 'react-router-dom';
import { Bienvenida } from './components/Bienvenida/Bienvenida';
import { IniciarSesion } from './components/IniciarSesion/IniciarSesion';
import { CrearCuenta } from './components/CrearCuenta/CrearCuenta';
import {AuthProvider} from './context/authContext';

function App() {
  return(
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Bienvenida/>} />
        <Route path="/login" element={<IniciarSesion/>} />
        <Route path="/register" element={<CrearCuenta/>} />
      </Routes>
      </AuthProvider>
  )
}

export default App;
