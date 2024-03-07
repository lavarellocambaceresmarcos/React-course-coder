import '../Item/Style.css'
import {NavLink, Link } from "react-router-dom"


const Item = ({id, name, img, price, stock, descp}) => {
    return (
        <div className="card">
        <img src={img} className="card-img-top" alt={name}/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>${price}</p>
          <p>Cantidad disponible: {stock}</p>
          <p className="card-text">{descp}</p>
          <Link to={`/item/${id}`} className="btn btn-primary">Ver detalle</Link>
        </div>
      </div>

        
    )
}

export default Item