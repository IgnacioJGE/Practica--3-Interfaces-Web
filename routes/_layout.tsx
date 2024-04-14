import { PageProps } from "$fresh/server.ts";
import Redirectbutton from "../islands/bottonredirect.tsx"

const Layout = (props: PageProps) => {
  const Component = props.Component;
  return (
    <div className="layout-container">
    <div className="button-container">
      <Redirectbutton direccion="/login">
        Login
        </Redirectbutton>
        <Redirectbutton direccion="/register">
        Register
        </Redirectbutton>
        <Redirectbutton direccion="/alllover">
        Todos Los Amantes
        </Redirectbutton>
        <Redirectbutton direccion="/delete">
        Eliminar Perfil
        </Redirectbutton>
        <Redirectbutton direccion="/comment">
        Comentar
        </Redirectbutton>
        <Redirectbutton direccion="/eliminarcoms">
        Eliminar Comentarios
        </Redirectbutton>

    </div>
    <Component />
    </div>
  );
};
export default Layout;
