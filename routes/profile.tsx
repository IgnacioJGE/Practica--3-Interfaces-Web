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
    let  lover:PerfilProps|undefined=undefined;
    const username= localStorage.getItem("username")
if(username!=undefined){
    const respuesta = await axios.get(`https://lovers.deno.dev/${username}`);
     lover=respuesta.data;

}


    
  return (
    <div>
        {lover!=undefined&&(
                    <Perfil 
                    name={lover.name}
                    sex={lover.sex} 
                    description={lover.description}
                    age={lover.age}
                    photo={lover.photo}
                    hobbies={lover.hobbies}
                    comments={lover.comments}/>
        )}
                {lover==undefined&&(
                    <h2>Tienes que Loguearte Primero</h2>
        )}

    </div>
  );
}
