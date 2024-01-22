// ItemDetailContainer.jsx
import itemdetailconclass from './ItemDetailContainer.module.css';
import { useState, useEffect } from 'react';
import { getProductsById } from '../../AsyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [products, setProducts] = useState({});

    const { itemId } = useParams();

    useEffect(() => {
        getProductsById(itemId)
            .then(response => {
                setProducts(response); // Ahora siempre es un array
            })
            .catch(error => {
                console.error(error);
            });
    }, [itemId]);

    return (
        <div className={itemdetailconclass.detail}>
            {products ? <ItemDetail {...products} /> : <p>Cargando...</p>}
        </div>
    );
}

export default ItemDetailContainer;
