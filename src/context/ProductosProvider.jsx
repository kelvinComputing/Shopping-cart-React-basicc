import { useEffect, useState } from "react";
import { ProductosContext } from "./ProductosContext";

export const ProductosProvider= ({ children }) => {

  const [product, setProduct] = useState([])

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    setProduct(data);
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  return (
    <ProductosContext.Provider value={{product}}>
      {children}
    </ProductosContext.Provider>
  )
}
