import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import AvailableMeal from "./components/Meals/AvailableMeal";
import MealsSummary from "./components/Meals/MealsSummary";
import CartProvider from "./store/CartProvider";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCartToggling = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <CartProvider>
      {isModalOpen && <Cart onClose={onCartToggling} />}
      <Header onCartOpening={onCartToggling} />
      <main>
        <MealsSummary />
        <AvailableMeal />
      </main>
    </CartProvider>
  );
}

export default App;
