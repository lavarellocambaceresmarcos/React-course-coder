import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, name, price, category,img, stock, descp }) => {
    return (
        <div className="card">
        <img src={img} className="card-img-top" alt={name}/>
        <div className="card-body">
            <p>Product ID: {id}</p>
          <h5 className="card-title">{name}</h5>
          <h6>Categoría: {category}</h6>
          <p>${price}</p>
          <p>Cantidad disponible: {stock}</p>
          <p className="card-text">{descp}</p>
          {/* Invoco ItemCount */}
        < ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Se agregaron ', quantity, 'cursos al carrito, correspondientes a la temática: ', name )}/>
        </div>
      </div>
    )
}

export default ItemDetail