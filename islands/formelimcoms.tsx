import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import axios from "npm:axios";
import { Handlers } from "$fresh/server.ts";

type Props = {
  ruta:string;
};

function Elimcoms({ ruta }: Props) {
  const [mensaje, setMensa] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [contra, setContra] = useState<string>("");

  const [error, setError] = useState<string>("false");



  return (
    <div className="form-input">
      <form className="forms-center" action={ruta} method="POST">
      <div>
        <br />
        <input
          type="text"
          name="user"
          placeholder="Usuario al que Borrar "
          value={user}
          onInput={(e) => setUser(e.currentTarget.value)}
        />

        <br />
        </div>
        <button className="button"  type="submit">
          Eliminar Comentarios
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

export default Elimcoms;
