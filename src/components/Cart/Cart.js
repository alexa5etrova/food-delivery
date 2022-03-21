import styles from "./Cart.module.css";
import Modal from "./../UI/Modal";

const Cart = (props) => {
  let arr = [
    { id: "2", name: "Sushi", price: "12.99" },
    { id: "3", name: "Pizza", price: "14.959" },
  ];
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {arr.map((meal) => {
        return <li key={meal.id}>{meal.name}</li>;
      })}
    </ul>
  );

  let sum = 0;
  let sumArr = arr.map((meal) => meal.price);
  for (let i = 0; i < sumArr.length; i++) {
    sum += +sumArr[i];
  }

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{sum.toFixed(2)}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
