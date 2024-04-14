import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import axios from "npm:axios";
import { Handlers } from "$fresh/server.ts";
import comentario from"../components/perfil.tsx"
type Props = {
  ruta:string;
};

function Formregister ({ ruta }: Props) {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("false");
  const [age, setage] = useState<string>();
  const [sex, setSex] = useState<string>("");
  const [description, setDes] = useState<string>("");
  const [hobbies, setHobbies] = useState<string>();
  const [foto, setFoto] = useState<string>("");


  return (
    <div>
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

                <input
          type="text"
          name="edad"
          placeholder="Edad"
          value={age}
          onInput={(e) => setage(e.currentTarget.value)}
        />
                <br />

                <input
          type="text"
          name="sexo"
          placeholder="Sexo"
          value={sex}
          onInput={(e) => setSex(e.currentTarget.value)}
        />
                <br />

                <input
          type="text"
          name="descripcion"
          placeholder="Descripcion"
          value={description}
          onInput={(e) => setDes(e.currentTarget.value)}
        />
                <br />

                <input
          type="text"
          name="hobbies"
          placeholder="Hobbies"
          value={hobbies}
          onInput={(e) => setHobbies(e.currentTarget.value)}
        />
                <br />

                <input
          type="text"
          name="foto"
          placeholder="Foto"
          value={foto}
          onInput={(e) => setFoto(e.currentTarget.value)}
        />
        <br />
        </div>
        <button className="button"  type="submit">
          Registrar
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

export default Formregister;
