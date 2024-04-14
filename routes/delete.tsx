import { useSignal } from "@preact/signals";
import Perfil from "../components/perfil.tsx"
import Redirectbutton from "../islands/bottonredirect.tsx";
import Formdelete from "../islands/formdelete.tsx"
import { Handlers } from "$fresh/server.ts";
import axios from "npm:axios";

let name: string | undefined = undefined;
let contra: string | undefined = undefined;
let errores: string = "";
let exitoso: boolean = false;
export const handler: Handlers<Data> = {
    POST: async (req, ctx) => {
      const formData = await req.formData();
      const nombre: string = (await formData).get("name");
      const password: string = (await formData).get("password");
      name = nombre;
      contra = password;
  
      return ctx.render({ nombre, password });
    },
  };
export default async function Home() {
    if (name != undefined && contra != undefined && name!="" && contra!="") {

        console.log(name,contra)
        const response = await fetch(
            `https://lovers.deno.dev/${name}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ password:contra  }),
            },
          );


   if(response.ok){
    console.log(response)
    exitoso = true;
      localStorage.removeItem("username");
 
      localStorage.removeItem("password");
   }else{
    errores = "error1";
    console.log("caca");
   }
  

      
    }else{
      if(name != undefined && contra != undefined ){
          errores="error2";
      }
  
    }
  return (
    <div>
        <h1>Elminar Perfil</h1>
      <Formdelete ruta="/delete"/>
      {errores == "error1" && (
        <div>
          <h2>Error al eliminar Perfil</h2>
          {errores = ""}
          {name = undefined}
          {contra = undefined}
        </div>
      )}
            {errores == "error2" && (
        <div>
          <h2>Campos Incompletos</h2>
          {errores = ""}
          {name = undefined}
          {contra = undefined}
        </div>
      )}
      {exitoso != false && (
        <div>
          <h2>Perfil eliminado correctamente</h2>
          {exitoso = false}
          {name = undefined}
          {contra = undefined}
          <Redirectbutton direccion="/profile">
            Perfil
            </Redirectbutton>
        </div>
      )}

    </div>
  );
}