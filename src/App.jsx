import "./App.css";
import Encabezado from "../components/Encabezado";
import Contenido from "../components/Contenido";

function App() {
  return (
    <>
      <Encabezado
        titulo="Este es un componente Stateless"
        estilo={{ color: "blue" }}
      />
      <Contenido />
    </>
  );
}

export default App;
