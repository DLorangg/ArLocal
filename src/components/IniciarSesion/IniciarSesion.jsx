import { useState } from "react";

export function IniciarSesion(){
  return <div>
    <form>

      <input type="email" name="email" id="email" />
      <input type="password" name="password" id="password" />

    </form>
  </div>;
}