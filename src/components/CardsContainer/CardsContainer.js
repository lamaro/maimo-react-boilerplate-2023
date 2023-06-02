import React from "react";
import Card from "../Card/Card";
import Styles from "./CardsContainer.module.css"

const data = [
  {
    name: 'Colombia',
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/6/16463.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/6/16463.jpg',
    },
    description: "Esta región, ubicada al suroeste de Colombia en el Nudo de los Pastos, se caracteriza por su diversidad topográfica y su riqueza de vertientes."
  },
  {
    name: 'Brasil',
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/38/96515.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/38/96515.jpg',
    },
    description: "Proviene de los departamentos de Caquetá y Putumayo, ubicados en la región sur oriental de Colombia, específicamente donde se observa el pie de monte amazónico."
  },
  {
    name: 'Expreso',
    image: {
      medium: "https://static.tvmaze.com/uploads/images/medium_portrait/295/738675.jpg",
      original: "https://static.tvmaze.com/uploads/images/original_untouched/295/738675.jpg"
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
