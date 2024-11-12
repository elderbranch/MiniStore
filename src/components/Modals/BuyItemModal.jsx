import styles from "./BuyItemModal.module.scss"

function BuyItemModal({ toggleModal }) {
  return (
    <form className={styles.overlay} onClick={toggleModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>Купить</h2>
        <label htmlFor="phone">Номер</label>
        <input className={styles.input}type="text" id="phone" required/>
        <label htmlFor="addres">Адрес</label>
        <input className={styles.input}type="text" id="addres" required/>
        <button className={styles.button}>Купить</button>
      </div>
    </form>
  );
}
export default BuyItemModal;