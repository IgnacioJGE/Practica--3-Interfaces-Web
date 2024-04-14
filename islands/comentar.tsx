import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import axios from "npm:axios";
import { Handlers } from "$fresh/server.ts";

type Props = {
  ruta:string;
};

function Formcom({ ruta }: Props) {
  const [mensaje, setMensa] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [contra, setContra] = useState<string>("");

  const [error, setError] = useState<string>("false");



  return (
    <div>
      <form className="forms-center" action={ruta} method="POST">
<div className="form-input">
        <br />
        <input
          type="text"
          name="user"
          placeholder="Usuario al que Comentar"
          value={user}
          onInput={(e) => setUser(e.currentTarget.value)}
        />
        <br />
        <input
          type="text"
          name="mess"
          placeholder="Mensaje"
          value={mensaje}
          onInput={(e) => setMensa(e.currentTarget.value)}
        />
        <br />
        <input
          type="text"
          name="contra"
          placeholder="Contraseña de a quien quieres comentar"
          value={contra}
          onInput={(e) => setContra(e.currentTarget.value)}
        />
        </div>
        <br />
        <button className="button"  type="submit">
          Comentar
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

export default Formcom;
