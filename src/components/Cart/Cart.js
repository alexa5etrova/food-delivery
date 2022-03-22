import styles from "./Cart.module.css";
import Modal from "./../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  let cxt = useContext(CartContext);

  let arr = cxt.items;
  let hasItems = cxt.items.length > 0;
  let onRemoveItemFromCart = (id) => {
    cxt.removeItem(id)
  };
  let onAddingItemToCart = (item) => {
    cxt.addItem({...item, amount: 1});
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {arr.map((meal) => {
        return (
          <CartItem
            key={meal.id}
            name={meal.name}
            price={meal.price}
            amount={meal.amount}
            onRemove={onRemoveItemFromCart.bind(null, meal.id)}
            onAdd={onAddingItemToCart.bind(null, meal)}
          />
        );
      })}
    </ul>
  );

  let sum = `$${cxt.totalSum.toFixed(2)}`;

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{sum}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
        {!hasItems && <p>No items for order, please add</p>}
      </div>
    </Modal>
  );
};
export default Cart;
