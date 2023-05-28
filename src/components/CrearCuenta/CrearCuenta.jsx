import { useState } from "react";
import { useAuth } from '../../context/authContext'

export function CrearCuenta() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const {signup} = useAuth()

  const handleChange = ({target: {name, value}}) => 
    setUser({...user, [name]: value})

  const handleSubmit = e => {
    e.preventDefault()
    signup(user.email, user.password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="youremail@company.com"
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={handleChange}
      />

      <button>Register</button>
    </form>
  );
}
