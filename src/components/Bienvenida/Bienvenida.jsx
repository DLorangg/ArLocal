import { useNavigate } from 'react-router-dom'
import {useAuth} from '../../context/authContext'

export function Bienvenida () {

  const {user, logout} = useAuth()
   const navigate = useNavigate()
  
  const handleLogout = async () => {
    await logout();
    navigate("/");
  }

  return <div>
    <h1>Bienvenido {user.email}</h1>

    <button onClick={handleLogout}>
      Cerrar sesión
    </button>
  </div>;
}
