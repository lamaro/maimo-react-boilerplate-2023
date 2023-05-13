import React from "react";
import cafe1 from "C:/Users/agust/Documents/umai-multimedia/2023/anuales/programacion-3/maimo-react-boilerplate-2023/src/img/cafe1.jpg";
import Styles from "C:/Users/agust/Documents/umai-multimedia/2023/anuales/programacion-3/maimo-react-boilerplate-2023/src/components/Card/Card.module.css";

const Card = () => {
  return (
      <li className="card">
        <img src={cafe1} alt="cafe1" className={Styles.cafe1}></img>
        <a href="https://google.com" target="blank">Ver mas</a>
      </li>
  );
};

export default Card;
