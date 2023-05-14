import React from "react";
import cafe1 from "C:/Users/agust/Documents/umai-multimedia/2023/anuales/programacion-3/maimo-react-boilerplate-2023/src/img/cafe1.jpg";
import Styles from "./Card.module.css";
import Button from "../Button/Button";

const Card = () => {
  return (
    <li className={Styles.card}>
      <img src={cafe1} alt="cafe1" className={Styles.cafe1}></img>
      <Button />
    </li>
  );
};

export default Card;
