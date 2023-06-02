import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export function Bienvenida() {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <h1>cargando...</h1>;

  return (
    <div>
      <h1>Bienvenido {user.displayName || user.email}</h1>

      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}
