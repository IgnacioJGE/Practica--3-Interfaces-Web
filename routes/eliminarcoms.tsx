import { useSignal } from "@preact/signals";
import Perfil from "../components/perfil.tsx"
import Redirectbutton from "../islands/bottonredirect.tsx";
import Formdelete from "../islands/formdelete.tsx"
import { Handlers } from "$fresh/server.ts";
import Elimcoms from "../islands/formelimcoms.tsx"
import axios from "npm:axios";

let user: string | undefined = undefined;
let errores: string = "";
let exitoso: boolean = false;
export const handler: Handlers<Data> = {
    POST: async (req, ctx) => {
      const formData = await req.formData();
      const nombre: string = (await formData).get("user");
      user = nombre;
  
      return ctx.render({ nombre,  });
    },
  };
export default async function Home() {
    const username= localStorage.getItem("username")
    const contra= localStorage.getItem("password")

    if (user != undefined &&  user!="" ) {

        console.log(user)
        const response = await fetch(
            `https://lovers.deno.dev/${user}/comment`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ user:username, password:contra  }),
            },
          );


   if(response.ok){
    console.log(response)
    exitoso = true;

   }else{
    errores = "error1";
    console.log("caca");
   }
  

      
    }else{
      if(user != undefined && contra != undefined ){
          errores="error2";
      }
  
    }
  return (
    <div>
        <h1>Elminar Comenetarios</h1>
      <Elimcoms ruta="/eliminarcoms"/>
      {errores == "error1" && (
        <div>
          <h2>Error al Borrar los comentarios</h2>
          {errores = ""}
          {user = undefined}
        </div>
      )}
            {errores == "error2" && (
        <div>
          <h2>Campos Incompletos</h2>
          {errores = ""}
          {user = undefined}

        </div>
      )}
      {exitoso != false && (
        <div>
          <h2>Comentarios eliminados correctamente</h2>
          {exitoso = false}
          {user = undefined}

          <Redirectbutton direccion="/profile">
            Perfil
            </Redirectbutton>
        </div>
      )}

    </div>
  );
}