import {useState, useEffect} from 'react'
import { getProdcuts, getProductsByCategory } from '../../../asyncMock'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {

    const[products, setProducts] = useState([]);

    const {categoryId} = useParams()

    useEffect(() => {

        const asyncFunc = categoryId ? getProductsByCategory : getProdcuts

        asyncFunc(categoryId)
        .then(response => {
            setProducts(response)
        })
        .catch(error =>{
            console.error(error)
        })
    },[categoryId])

    return(
        <div>
            {/* llamo a Item list */}
            <h1>{greeting}</h1>
            <ItemList products={products}></ItemList>
        </div>
    )
}

export default ItemListContainer