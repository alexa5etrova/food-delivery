import Card from "../UI/Card";
import styles from "./AvailableMeal.module.css";
import Meal from "./Meal";
import { useEffect, useState } from "react";

const AvailableMeal = (props) => {
  const [mealData, setMealData] = useState([]);
  const [isLoading, setIsLoadind] = useState(true);
  const [isError, setIsError] = useState();

  useEffect(() => {
    const fetchingMeal = async () => {
      const response = await fetch(
        "https://react-http-27168-default-rtdb.firebaseio.com/meal.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      let meals = [];
      for (let key in data) {
        meals.push({
          id: data[key],
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMealData(meals);
      setIsLoadind(false);
    };

    fetchingMeal().catch((error) => {
      setIsLoadind(false);
      setIsError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p className={styles.loading}>Loading...</p>
      </section>
    );
  }
  if (isError) {
    console.log(isError);
    return (
      <section>
        <p className={styles.loading}>{isError}</p>
      </section>
    );
  }

  const mealList = mealData.map((item) => {
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
        {isLoading && <p>Loading</p>}
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeal;
