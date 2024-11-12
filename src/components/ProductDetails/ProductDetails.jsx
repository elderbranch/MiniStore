import { useParams } from 'react-router-dom';
import { useProducts } from '../ProductsContext';

import styles from './ProductDetails.module.scss'
import BuyItemModal from '../Modals/BuyItemModal';
import { useState } from 'react';


const ProductDetails = () => {
    const { id } = useParams();
    const products = useProducts();
    const product = products.filter((p) => p.id == id);
    console.log(product)

    if (!product) {
        return <p>Товар не найден</p>;
    }

    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
      setModalOpen((prev) => !prev);
    };
  

    return (
        <>
          <h1 className={styles.title}>Корзина товаров</h1>
          <div className={styles.product__details}>
              <img src={product[0].image} alt={product[0].title} />
              <div className={styles.product__info}>
                <h2>{product[0].name}</h2>
                <p className={styles.product__desc}>{product[0].description}</p>
                <p className={styles.product__price}>{product[0].price} Сом</p>
                <button onClick={toggleModal} className={styles.product__details_button}>Заказать</button>
                {isModalOpen? <BuyItemModal toggleModal={toggleModal}/> : null}
              </div>
          </div>
        </>
    );
};

export default ProductDetails;