import { useContext } from "react"
import { context } from "../../context/authContext"

export function Bienvenida () {

  const authContext = useContext(context)
  console.log(authContext);

  return <div>Bienvenida</div>;
}
