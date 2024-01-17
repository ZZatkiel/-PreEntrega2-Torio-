import itemdetailclass from './ItemDetail.module.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ id, name, img, price, stock, category, description }) => {
  return (
    <article className={itemdetailclass.CardItem}>
      <header className={itemdetailclass.Header}>
        <h2 className={itemdetailclass.Item}>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className={itemdetailclass.img} />
      </picture>
      <section>
        <p className={itemdetailclass.Info}>Categoría: {category}</p>
        <p className={itemdetailclass.Info}>Precio: ${price}</p>
        <p className={itemdetailclass.Info}>Stock disponible: {stock}</p>
        <p className={itemdetailclass.Info}>Descripción: {description}</p>
      </section>
      <footer className={itemdetailclass.ItemFooter}>
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
      </footer>
    </article>
  );
};

export default ItemDetail;
