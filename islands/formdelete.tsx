import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import axios from "npm:axios";
import { Handlers } from "$fresh/server.ts";

type Props = {
  ruta:string;
};

function Formdelete({ ruta }: Props) {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("false");



  return (
    <div className="form-input">
      <form className="forms-center" action={ruta} method="POST">
    <div className="form-input">
        
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={name}
          onInput={(e) => setName(e.currentTarget.value)}
        />
        <br />
        <input
          type="text"
          name="password"
          placeholder="Contraseña"
          value={password}
          onInput={(e) => setPassword(e.currentTarget.value)}
        />
        <br />
        </div>
        <button className="button"   type="submit">
          Eliminar
        </button>
        {error == "error2" && (
          <div class="forms-center">
            <p>Error en el login</p>
          </div>
        )}
            </form>

    </div>

  );
}

export default Formdelete;
