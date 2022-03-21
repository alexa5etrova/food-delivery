import styles from "./HeaderCartButton.module.css";
import CartIcon from "./../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "./../../store/cart-context";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const numberOfCartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onCartOpening}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
