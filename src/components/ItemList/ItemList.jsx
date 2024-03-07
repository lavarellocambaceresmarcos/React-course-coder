import Item from '../Item/Item'
import '../ItemList/Style.css'

const ItemList = ({products}) => {
    return (
        <div className='cardsCont'>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
        // prod => <Item key={prod.id} {...prod}/>
    )
}

export default ItemList