import React from "react";

import Header from "./components/Layout/Header";
import AvailableMeal from "./components/Meals/AvailableMeal";
import MealsSummary from "./components/Meals/MealsSummary";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <MealsSummary />
        <AvailableMeal />
      </main>
    </React.Fragment>
  );
}

export default App;
