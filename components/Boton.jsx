/*El otro componente deberá guardar estado (statefull) 
y se llamará Contenido. Representará
un texto que recibirá por la prop ‘texto’

, en un elemento de párrafo y dispondrá de un botón
que permita cambiar el fondo de dicho texto entre los colores amarillo, 
cyan y naranja de
manera rotativa */

import { useState } from "react";
import Contenido from "./Contenido";
export default Boton;

function Boton(props) {
  //const [color, setColor] = useState("yellow");
  const [index, setIndex] = useState(0);
  const vectorColores = ["yellow", "orange", "cyan"];

  function changeColor() {
    const nextIndex = (index + 1) % vectorColores.length;
    setIndex(nextIndex);
    //setColor(vectorColores[nextIndex]);
  }

  const buttonStyle = {
    color: "white",
    backgroundColor: "black",
    fontSize: "30px",
  };

  return (
    <>
      <button onClick={changeColor} style={buttonStyle}>
        {props.texto}
      </button>
    </>
  );
}
