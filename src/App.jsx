import "./App.css";
import Encabezado from "../components/Encabezado";
import Contenido from "../components/Contenido";

function App() {
  const estiloEncabezado = { color: "red" };
  const textoEncabezado = "Este componente es STATELESS.";

  const contenidoTexto = "Recibi este texto";
  const botonTexto = "Cambiar Color";

  return (
    <>
      <Encabezado titulo={textoEncabezado} estilo={estiloEncabezado} />
      <br />

      <Contenido textoEncabezado={contenidoTexto} textoBoton={botonTexto} />
      <br />
    </>
  );
}

export default App;
