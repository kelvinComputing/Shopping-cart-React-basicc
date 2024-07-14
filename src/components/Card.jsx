import { useState } from "react";
import "../styles/card.css";

export const Card = ({
  imagen,
  titulo,
  descripcion,
  price,
  handleAgregar,
  handleQuitar,
}) => {
  const [added, setAdded] = useState(false);

  const clickAgregar = () => {
    handleAgregar();
    setAdded(true);
  };

  const clickQuitar = () => {
    handleQuitar();
    setAdded(false);
  };

  return (
    <div className="tarjeta">
      <img src={imagen} alt={titulo} className="tarjeta-imagen" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <p className="tarjeta-precio">{price}</p>

        {added ? (
          <button type="button" className="boton-quitar" onClick={clickQuitar}>
            Quitar del carrito
          </button>
        ) : (
          <button
            type="button"
            className="boton-agregar"
            onClick={clickAgregar}
          >
            Agregar al Carrito
          </button>
        )}
      </div>
    </div>
  );
};