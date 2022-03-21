import styles from "./Meal.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Meal = (props) => {
  let ctx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addItemToCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      price: props.price,
      name: props.name,
      amount: amount,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div>
          <p className={styles.description}>{props.description}</p>
        </div>
        <div>
          <p className={styles.price}>{price}</p>
        </div>
      </div>
      <div>
        <MealItemForm onAddToCart={addItemToCartHandler} mealId={props.id} />
      </div>
    </li>
  );
};

export default Meal;
