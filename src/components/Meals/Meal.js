import styles from "./Meal.module.css";
import MealItemForm from "./MealItemForm";

const Meal = (props) => {
  const price = `$${props.price.toFixed(2)}`;
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
        <MealItemForm />
      </div>
    </li>
  );
};

export default Meal;
