import { useAuth } from "../../context/authContext"

export function Bienvenida () {

  const {user} = useAuth()
  console.log(user);

  return <div>Bienvenida</div>;
}
