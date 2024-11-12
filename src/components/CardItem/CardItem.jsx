import { Link } from "react-router-dom";
import styles from "./CardItem.module.scss"

const CardItem = ({ id, title, image }) => {
  const handleButtonClick = (e) => {
    e.stopPropagation();
    console.log("Button clicked!");
};

  return (
    <Link to={`/product/${id}`}>
      <div className={styles.CardItem} key={id}>
        <img src={image} />
        <h2>{title}</h2>
        <button onClick={handleButtonClick}>В корзину</button>
      </div>
    </Link>
  )
}

export default CardItem;