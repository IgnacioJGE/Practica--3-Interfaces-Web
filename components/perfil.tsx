import { FunctionComponent } from "preact";

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

const Perfil: FunctionComponent<PerfilProps> = (props) => {
  const { name, age, sex,description,hobbies,photo,comments } = props;
  return (
    <div className="perfil-container">
      <h2>{name}</h2>
      <img src={photo} alt={name} style={{ width: "200px", height: "200px" }} />
      <div>
      <p>Age: {age}</p>
      <p>Sex: {sex}</p>
      <p>Description: {description}</p>
      <p>Hobbies:</p>
      <ul>
          {hobbies.map((char)=>(
            <li>
                         <p> {char}</p>
            </li>

          ))}
      </ul>
      <p>Coments:</p>
              <ul>
          {Array.isArray(comments) &&comments.map((comment) => (
            <li>
              <p>User: {comment.user}</p>
              <p>Message: {comment.message}</p>
            </li>
          ))}
        </ul>
      </div>

</div>
  );
};

export default Perfil;
