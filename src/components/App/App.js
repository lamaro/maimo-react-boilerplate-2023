import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import CardsContainer from "../CardsContainer/CardsContainer";
import Form from "../Form/Form";
import { Element } from "react-scroll";
import styles from "./App.module.css";

//import CardsPeliculaContainer from '../CardsPeliculaContainer/CardsPeliculaContainer';
const App = () => {
  return (
    <div className="bg-dark text-white">
      <Header />
      <Element name="hero" className="element">
        <Hero />
        <div className={styles.line}></div>
      </Element>
      <Element name="cards" className="element">
        <CardsContainer />
      </Element>
      <div className={styles.line}></div>
      <Element name="form" className="element">
        <Form />
      </Element>
      {/* <CardsPeliculaContainer  /> */}
      <div className={styles.line}></div>
    <Footer /> 
    </div>
  );
};

export default App;
