import styles from "./HeaderCartButton.module.css";
import CartIcon from "./../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "./../../store/cart-context";

const HeaderCartButton = (props) => {
  const [buttonIsHighlighted, setButtonIsHighlighted]=useState(false);
  const ctx = useContext(CartContext);
  const {items} = ctx;
  const numberOfCartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${buttonIsHighlighted? styles.bump: ''}`;
  useEffect(()=>{
    if (ctx.items === 0){
      return;
    }
    setButtonIsHighlighted(true);
    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);
    return ()=>{
      clearTimeout(timer);
    }
  },[items])

  return (
    <button className={btnClasses} onClick={props.onCartOpening}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
