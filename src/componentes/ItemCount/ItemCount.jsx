import itemclass from './ItemCount.module.css'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd})=>{
    const [quantity, setQuantity] = useState(initial)

    const increment = () =>{
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }
    const decrement = () =>{
        if(quantity < stock){
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className={itemclass.counter}>
            <div className={itemclass.controls}>
                <button className={itemclass.button} onClick={decrement}>-</button>
                <h4 className={itemclass.number}>{quantity}</h4>
                <button className={itemclass.button} onClick={increment}>-</button>
            </div>
            <div>
                <button className={itemclass.button} onClick={() => onAdd(quantity)} disabled={!stock}>
                Agregar al carrito
                </button>   
            </div>
        </div>
    )
}

export default ItemCount