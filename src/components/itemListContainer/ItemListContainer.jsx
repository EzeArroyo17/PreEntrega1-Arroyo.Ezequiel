import getProduct from "../../data/data";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList"
import "./itemListContainer.css"

const ItemListContainer = () => {


  const [products, setProducts] = useState([])

  const { idCategory } = useParams()


  useEffect(() => {
    getProduct()
      .then((respuesta) => {
        if (idCategory) {
          const productsFilter = respuesta.filter((productRes) => productRes.category === idCategory)
          setProducts(productsFilter)
        } else {
          setProducts(respuesta)
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("finaliza");
      });
  }, [idCategory])



  return (
    <div className="item-list-container">
      <h2 className="title-item-list-container">{saludo}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer