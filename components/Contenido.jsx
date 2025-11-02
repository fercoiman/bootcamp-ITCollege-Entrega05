/*El otro componente deberá guardar estado (statefull) 
y se llamará Contenido. Representará
un texto que recibirá por la prop ‘texto’

, en un elemento de párrafo y dispondrá de un botón
que permita cambiar el fondo de dicho texto entre los colores amarillo, 
cyan y naranja de
manera rotativa */

import { useState } from "react";
import Boton from "./Boton";

function Contenido(props) {
  const [color, setColor] = useState("yellow");
  const [index, setIndex] = useState(0);
  const vectorColores = ["yellow", "orange", "cyan"];

  function changeTextColor() {
    const nextIndex = (index + 1) % vectorColores.length;
    setIndex(nextIndex);
    setColor(vectorColores[index]);
  }

  const paragraphStyle = {
    color: color,
    backgroundColor: props.color,
    fontSize: "60px",
  };

  const buttonStyle = {
    color: "white",
    backgroundColor: "black",
    fontSize: "30px",
  };

  return (
    <>
      <p style={paragraphStyle}>{props.texto}</p>
      <br />
      <button onClick={changeTextColor} style={buttonStyle}>
        {props.texto}
      </button>
    </>
  );
}

export default Contenido;
