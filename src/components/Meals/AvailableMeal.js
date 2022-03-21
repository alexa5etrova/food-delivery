import Card from "../UI/Card";
import styles from "./AvailableMeal.module.css";
import Meal from "./Meal";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeal = (props) => {
  const mealList = DUMMY_MEALS.map((item) => {
    return (
      <Meal
        key={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
        id={item.id}
      />
    );
  });
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeal;
