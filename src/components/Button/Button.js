import React from "react";
import Styles from "./Button.module.css";

const Button = () => {
  return (
    <a href="https://google.com" target="blank" className={Styles.button}>
      Ver mas
    </a>
  );
};

//button en lugar de a, aplicar props para los links, repasar

export default Button;
