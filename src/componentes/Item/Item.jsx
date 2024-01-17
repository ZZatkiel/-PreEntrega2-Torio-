import itemclass from './Item.module.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price, stock }) => {
    return (
            <article className={itemclass.CardItem}>
                <header className={itemclass.Header}>
                    <h2 className={itemclass.Item}>{name}</h2>
                </header>
                <picture>
                    <img src={img} alt={name} className={itemclass.img} />
                </picture>
                <section>
                    <p className={itemclass.Info}>Precio: ${price}</p>
                    <p className={itemclass.Info}>Stock disponible: {stock}</p>
                </section>
                <footer className={itemclass.ItemFooter}>
                    <Link to={'/item/${id}'} className={itemclass.option}> Ver detalles </Link>
                </footer>
            </article>
    )
}

export default Item