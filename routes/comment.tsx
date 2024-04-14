import { useSignal } from "@preact/signals";
import Perfil from "../components/perfil.tsx";
import axios from "npm:axios";
import { error } from "$fresh/src/dev/error.ts";
import Formcom from "../islands/comentar.tsx"
let errores: string = "";
let exitoso: boolean = false;
let name: string | undefined = undefined;
let men: string | undefined = undefined;
let pass: string | undefined = undefined;


export const handler: Handlers<Data> = {
  POST: async (req, ctx) => {
    const formData = await req.formData();
    const usuario: string = (await formData).get("user");
    const mensaje: string = (await formData).get("mess");
    const contraseña: string = (await formData).get("contra");

pass=contraseña;
    name=usuario;
    men=mensaje;

    return ctx.render({ name, men });
  },
};

export default async function Page() {
  if (name != undefined && men != undefined && name!="" && men!="") {
    const username= localStorage.getItem("username")

    if(username!=undefined){
        try {
            const respuesta = await axios.post(`https://lovers.deno.dev/${name}/comment`, {
              user:username,
              password:pass,
              message:men
            });
            exitoso = true;
          } catch (error) {
      
            errores = "error1";
            console.log("caca");
          }
    
    }

  }else{
    if(name != undefined && men != undefined ){
        errores="error2";
    }

  }
  return (
    <div>
      <h1>Comentar</h1>
      <Formcom ruta="/comment" />

      {errores == "error1" && (
        <div>
          <h2>Error al Comentar</h2>
          {errores = ""}
          {name = undefined}
          {men = undefined}
        </div>
      )}
            {errores == "error2" && (
        <div>
          <h2>Campos Incompletos</h2>
          {errores = ""}
          {name = undefined}
          {men = undefined}
        </div>
      )}
      {exitoso != false && (
        <div>
          <h2>Comentario Enviado</h2>
          {exitoso = false}
          {name = undefined}
          {men = undefined}
        </div>
      )}
      
    </div>
  );
}
