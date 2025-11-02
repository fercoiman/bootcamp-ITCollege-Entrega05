import { useState } from "react";

function Contenido(props) {
  const [color, setColor] = useState("yellow");
  const [index, setIndex] = useState(0);
  const vectorColores = ["yellow", "cyan", "orange"];

  function changeTextBackgroundColor() {
    const nextIndex = (index + 1) % vectorColores.length;
    setIndex(nextIndex);
    setColor(vectorColores[nextIndex]);
  }

  const paragraphStyle = {
    color: "white",
    backgroundColor: color,
    fontSize: "60px",
    fontWeight: "700",
  };

  const buttonStyle = {
    color: "white",
    backgroundColor: "black",
    fontSize: "30px",
  };

  return (
    <>
      <p style={paragraphStyle}>{props.textoEncabezado}</p>
      <br />
      <button onClick={changeTextBackgroundColor} style={buttonStyle}>
        {props.textoBoton}
      </button>
    </>
  );
}

export default Contenido;
