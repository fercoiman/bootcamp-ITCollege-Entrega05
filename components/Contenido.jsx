/*El otro componente deberá guardar estado (statefull) 
y se llamará Contenido. Representará
un texto que recibirá por la prop ‘texto’

, en un elemento de párrafo y dispondrá de un botón
que permita cambiar el fondo de dicho texto entre los colores amarillo, 
cyan y naranja de
manera rotativa */

function Contenido(props) {
  const paragraphStyle = {
    color: "white",
    backgroundColor: props.color,
    fontSize: "60px",
  };

  return <p style={paragraphStyle}>{props.texto}</p>;
}

export default Contenido;
