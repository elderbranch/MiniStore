import styles from "./Header.module.scss";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__icon}>
        <a href="/">IT-Academy</a>
      </div>
        <nav>
          <Link to={`/catalog`}>Корзина товаров</Link>
          <button>Войти</button>
          <a href=""><img src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png"/></a>
        </nav>
    </header>  
  )
}

export default Header;