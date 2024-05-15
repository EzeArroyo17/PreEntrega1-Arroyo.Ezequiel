import { Link } from "react-router-dom"

const Item = ({ product }) => {

  return (
    <div className="item">
          <img src={product.image}
            className="image-item" />
            
          <div className="content-item">
            <p>{product.name}</p>
            <p>Precio:{product.price}</p>
            <Link to={`/detail/${product.id}`} className="button-item" > ver detalles </Link>
          </div>
        </div>
  )
}

export default Item