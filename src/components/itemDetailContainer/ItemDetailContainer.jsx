import { useState, useEffect } from "react";
import getProduct from "../../data/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { idProduct } = useParams()

  useEffect(() => {
    getProduct()
      .then((respuesta) => {
        const productFind = respuesta.find( (productRes) => productRes.id === idProduct );
        setProduct(productFind);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("Finalo la promesa");
      });
  }, [idProduct]);

  return (
    <ItemDetail product={product} />
  );
};
export default ItemDetailContainer;