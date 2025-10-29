/*El otro componente deberá guardar estado (statefull) 
y se llamará Contenido. Representará
un texto que recibirá por la prop ‘texto’

, en un elemento de párrafo y dispondrá de un botón
que permita cambiar el fondo de dicho texto entre los colores amarillo, 
cyan y naranja de
manera rotativa */

import React, { useState } from "react";

function Contenido(text) {
  const [color, setColor] = useState("yellow");

  let indexColor = 0;

  function setColor() {
    const vectorColores = ["yellow", "cyan", "orange"];
    if (indexColor >= 0 && indexColor < 3) {
      indexColor++;
    } else {
      indexColor = 0;
    }
    return vectorColores[indexColor];
  }

  return <button onClick={setColor()}>{text}</button>;
}

export default Contenido;
