import "./App.css";
import Encabezado from "../components/Encabezado";
import Contenido from "../components/Contenido";
import Boton from "../components/Boton";

function App() {
  const estiloEncabezado = { color: "red" };
  const textoEncabezado = "Este componente es STATELESS.";

  const contenidoTexto = "Recibi este texto";

  return (
    <>
      <Encabezado titulo={textoEncabezado} estilo={estiloEncabezado} />
      <br />
      <Contenido texto={contenidoTexto} />
      <br />
    </>
  );
}

export default App;
