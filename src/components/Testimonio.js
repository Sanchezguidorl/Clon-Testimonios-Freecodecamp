import '../styles/Testimonio.css';
import React from "react";


function Testimonio(props) {
  return (
    <div className="contenedor-testimonios">
      <img
        className="imagen-testimonio"
        src={require(`../images/testimonio-${props.imagen}.png`)}
        alt={"imagen de "+props.nombre}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="puesto-testimonio" >{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">
        {props.testimonio}
        </p>
      </div>
    </div>
  );
}
export default Testimonio;
