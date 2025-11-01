import "./App.css";
import Encabezado from "../components/Encabezado";
import Contenido from "../components/Contenido";
import Boton from "../components/Boton";
import { useState } from "react";

function App() {
  const [colorFondo, setColorFondo] = useState("Yellow");

  function cambiarColor(color) {
    setColorFondo(color);
  }

  const estiloEncabezado = { color: "red" };
  const textoEncabezado = "Este componente es STATELESS.";

  const contenidoTexto = "Recibi este texto";

  return (
    <>
      <Encabezado titulo={textoEncabezado} estilo={estiloEncabezado} />
      <br />
      <Contenido texto={contenidoTexto} />
      <br />
      <Boton texto="Cambiar Color" />
    </>
  );
}

export default App;
