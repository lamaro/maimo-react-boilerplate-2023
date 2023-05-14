import React from "react";
import Card from "../Card/Card";
import Styles from "./CardsContainer.module.css"

const CardsContainer = () => {
  return (
    <ul className={Styles.cardsContainer}>
      <Card />
      <Card />
      <Card />
      <Card />
    </ul>
  );
};

export default CardsContainer;
