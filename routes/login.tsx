import { useSignal } from "@preact/signals";
import Perfil from "../components/perfil.tsx";
import Formlogin from "../islands/formlog.tsx";
import axios from "npm:axios";
import { error } from "$fresh/src/dev/error.ts";
import Redirectbutton from "../islands/bottonredirect.tsx";

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

export default async function Page() {
  if (name != undefined && contra != undefined && name!="" && contra!="") {
    try {
      const respuesta = await axios.post("https://lovers.deno.dev/login", {
        name: name,
        password: contra,
      });
      exitoso = true;
      localStorage.setItem("username", name);
      localStorage.setItem("password", contra);
      const timeoutId = setTimeout(() => {
        localStorage.removeItem("username");
      }, 1 * 60 * 1000); 
      const timeoutId2 = setTimeout(() => {
        localStorage.removeItem("password");
      }, 10 * 60 * 1000); 
    } catch (error) {

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
      <h1>Log in</h1>
      <Formlogin ruta="/login" />

      {errores == "error1" && (
        <div>
          <h2>Failed Login</h2>
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
          <h2>Login Succesfull</h2>
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
