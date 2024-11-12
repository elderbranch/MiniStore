import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__icon}>
        <a href="/">IT-Academy</a>
      </div>
        <nav>
          <a href="/catalog">Корзина товаров</a>
          <button>Войти</button>
          <a href=""><img src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png"/></a>
        </nav>
    </header>  
  )
}

export default Header;