import { Routes, Route } from 'react-router-dom';
import { Bienvenida } from './components/Bienvenida/Bienvenida';
import { IniciarSesion } from './components/IniciarSesion/IniciarSesion';
import { CrearCuenta } from './components/CrearCuenta/CrearCuenta';

function App() {
  return(
    <div className='bg-slate-300 h-screen text-white flex'>
      <Routes>
        <Route path="/" element={<Bienvenida/>} />
        <Route path="/login" element={<IniciarSesion/>} />
        <Route path="/register" element={<CrearCuenta/>} />
      </Routes>
    </div>
  )
}

export default App;
