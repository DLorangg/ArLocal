import {useAuth} from '../../context/authContext'

export function Bienvenida () {

  const {user} = useAuth()
  console.log(user);

  return <div>
    <h1>Bienvenido {user.email}</h1>
  </div>;
}
