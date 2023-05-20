import React from "react";
/* import cafe1 from "C:/Users/agust/Documents/umai-multimedia/2023/anuales/programacion-3/maimo-react-boilerplate-2023/src/img/cafe1.jpg"; */
import Styles from "./Card.module.css";
import Button from "../Button/Button";

const Card = ({name, image, description}) => {
  return (
    <article className={Styles.card}>
      <h2>{name}</h2>
      <img src={image} alt={name} className={Styles.cafe_image} />
      <p>{description}</p>
      <Button />
    </article>
  );
};

export default Card;
