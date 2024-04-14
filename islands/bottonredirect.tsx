import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import axios from "npm:axios";
import {
  NamespaceExport,
  NotSupportedError,
} from "https://deno.land/x/ts_morph@20.0.0/ts_morph.js";
type Props = {
  direccion: string;
  children?: any;
};
const Redirectbutton: FunctionalComponent<({ direccion:string ; children?:any })>=({direccion,children},)=> {
 const redirect = ()=>{
 window.location.href=direccion;
 }
  return (
    <div>
        <button className="button" onClick={redirect}>
        {children}
        </button>
        
    </div>
  );
}

export default Redirectbutton;
