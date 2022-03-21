import styles from "./Header.module.css";
import React from "react";
import mealsImage from "./../../assets/images/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Mealdelivery</h1>
        <HeaderCartButton onCartOpening={props.onCartOpening} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="meal"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
