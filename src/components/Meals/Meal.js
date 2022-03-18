import styles from "./Meal.module.css";

const Meal = (props) => {
  return (
    <li className={styles.meal}>
      <h3>{props.name}</h3>
      <p className={styles.description}>{props.description}</p>
      <p className={styles.price}>{props.price}</p>
    </li>
  );
};

export default Meal;
