import Input from "../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  let addingMealHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form className={styles.form} onSubmit={addingMealHandler}>
      <Input
        label="Amount"
        input={{
          type: "number",
          id: "amount_" + props.mealId,
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
    </form>
  );
};

export default MealItemForm;
