import { useContext } from "react";
import { Card } from "../components/Card";
import { ProductosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContext";

export const ComprasPage = () => {
  const { product } = useContext(ProductosContext);

  const { agregarCompras, eliminarCompra } = useContext(CarritoContext);

  const handleAgregar = (compra) => {
    agregarCompras(compra);
  };
  
  const handleQuitar = (id) => {
    eliminarCompra(id);
  };

  return (
    <>
      <h1>Compras: </h1>
      <hr />
      {product.map((products) => (
        <Card
          key={products.id}
          imagen={products.image}
          titulo={products.title}
          descripcion={products.description}
          price={products.price}
          handleAgregar={() => handleAgregar(products)}
          handleQuitar={() => handleQuitar(products.id)}
        ></Card>
      ))}
    </>
  );
};
