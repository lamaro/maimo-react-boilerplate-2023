import React from "react";
import Card from "../Card/Card";
import Styles from "./CardsContainer.module.css"

const data = [
  {
    name: 'Colombia',
    image: {
      medium:
        '/assets/img/cafe1.jpg',
      original:
        '/assets/img/cafe1.jpg',
    },
    description: "Esta región, ubicada al suroeste de Colombia en el Nudo de los Pastos, se caracteriza por su diversidad topográfica y su riqueza de vertientes."
  },
  {
    name: 'Brasil',
    image: {
      medium:
        '/assets/img/cafe2.jpg',
      original:
        '/assets/img/cafe2.jpg',
    },
    description: "Proviene de los departamentos de Caquetá y Putumayo, ubicados en la región sur oriental de Colombia, específicamente donde se observa el pie de monte amazónico."
  },
  {
    name: 'Expreso',
    image: {
      medium: "/assets/img/cafe3.jpg",
      original: "/assets/img/cafe3.jpg"
    },
    description: "Se caracteriza por su rápida preparación a una alta presión y por un sabor y textura más concentrados."
  },
];

const CardsContainer = () => {
  return (
    <section className={Styles.cardsContainer}>
       {data.map((cafe) => (
        <Card name={cafe.name} image={cafe.image.original} description={cafe.description} />
      ))}
    </section>
  );
};

export default CardsContainer;
