import { useSignal } from "@preact/signals";
import axios from "npm:axios";
import Perfil from "../components/perfil.tsx"

export type PerfilProps = {
    name: string;
    age: number;
    sex: string;
    description: string;
    hobbies:string[];
    photo: string;
    comments: comentario[];
  };
  export type comentario={
    user:string;
    message:string;
  }

export default async function Home() {
  const respuesta = await axios.get("https://lovers.deno.dev/");
    const lovers:PerfilProps[]=respuesta.data;
  return (
    <div className="personajes-container">
    <h1>Todos los pretendientes</h1>
    <div className="personajes-grid">
        {lovers.map((char)=>(<Perfil 
        name={char.name}
        sex={char.sex} 
        description={char.description}
        age={char.age}
        photo={char.photo}
        hobbies={char.hobbies}
        comments={char.comments}/>))}
    </div>
    </div>
  );
}
