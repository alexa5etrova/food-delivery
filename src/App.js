import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import AvailableMeal from "./components/Meals/AvailableMeal";
import MealsSummary from "./components/Meals/MealsSummary";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCartToggling = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <React.Fragment>
      {isModalOpen && <Cart onClose={onCartToggling} />}
      <Header onCartOpening={onCartToggling} />
      <main>
        <MealsSummary />
        <AvailableMeal />
      </main>
    </React.Fragment>
  );
}

export default App;
