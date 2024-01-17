import { useEffect, useState } from 'react'
import itemlistConclass from './ItemListContainer.module.css'
import { getProducts, getProductsByCategory } from '../../AsyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemlistContainer = ({label}) => {
    const[products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
        .then(response =>{
            setProducts(response)
        })
        .catch(error =>{
            console.error(error)
        })
    }, [categoryId])

    return(
        <div className={itemlistConclass.bn}>
            <h1>{label}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemlistContainer