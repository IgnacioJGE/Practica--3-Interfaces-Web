import { useSignal } from "@preact/signals";
import Perfil from "../components/perfil.tsx";
import Formregister from "../islands/formregister.tsx";
import { Handlers } from "$fresh/server.ts";
import axios from "npm:axios";
let name: string | undefined = undefined;
let contra: string | undefined = undefined;
let error: string | undefined;
let sex: string | undefined = undefined;
let age: string | undefined = undefined;
let descripcion: string | undefined = undefined;
let hobbies: string | undefined = undefined;
let foto: string | undefined = undefined;
let exitoso: boolean=false;

export const handler: Handlers<Data> = {
  POST: async (req, ctx) => {
    const formData = await req.formData();
    const nombre: string = (await formData).get("name");
    const password: string = (await formData).get("password");
    const descrip: string = (await formData).get("descripcion");
    const edad: string = (await formData).get("edad");
    const hobb: string = (await formData).get("hobbies");
    const fhoto: string = (await formData).get("foto");
    const Sexo: string = (await formData).get("sexo");
    name = nombre;
    contra = password;
    sex = Sexo;
    age = edad;
    foto = fhoto;
    descripcion = descrip;
    hobbies = hobb;

    return ctx.render({ nombre, password });
  },
};
export default async function Home() {
  if (
    name != "" && contra != "" && sex != "" &&
    age != "" && foto != "" && descripcion != "" && hobbies != "" &&
    name != undefined && contra != undefined && sex != undefined &&
    age != undefined && foto != undefined && descripcion != undefined &&
    hobbies != undefined
    //guarrada historica esto
  ) {
    console.log(name);
    console.log(contra);
    console.log(sex);
    console.log(age);
    console.log(foto);
    console.log(descripcion);
    console.log(hobbies.split(" "));
    await axios.post("https://lovers.deno.dev/", {
      name: name,
      password: contra,
      age: parseInt(age),
      sex: sex,
      description: descripcion,
      hobbies: hobbies.split(" "),
      photo: foto,
      comments: [],
    })
      .then(function (response) {
        console.log(response.data);
        exitoso = true;
      })
      .catch(function (error) {
        console.error(error);
      });
  } else {
    if (
      name != undefined && contra != undefined && sex != undefined &&
      age != undefined && foto != undefined && descripcion != undefined &&
      hobbies != undefined
    ) {
      console.log("Campos incompletos");
      error = "error1";
    }
  }

  return (
    <div>
      <h1>Registro</h1>
      <Formregister ruta="/register" />
      {error == "error1" && (
        <div>
          <h2>Datos incompletos</h2>
          {error = undefined}
        </div>
      )}
      {exitoso == true && (
        <div>
        <Perfil
        name={name} sex={sex} description={descripcion}
        age={age} hobbies={hobbies?.split(" ")} photo={foto}
        coments={[]}/>
          {exitoso=false}
        </div>
      )}
    </div>
  );
}
