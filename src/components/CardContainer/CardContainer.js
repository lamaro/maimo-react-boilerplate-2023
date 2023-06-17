import React from "react";
import Card from '../Cards/Card'
import { Link } from 'react-scroll'
import styles from './CardContainer.module.css'



const data = [
    {
        name:"Sergio Romero",
        position: "Portero",
        edad: "36 años",
        Image: {
           original:'assets/Image/sergio-romero-1.jpg',
        }, 
    },

    {
        name:"Marcos Rojo",
        position: "Defensor",
        edad: "33 años",
        Image: {
           original:'assets/Image/marcos-rojo-1.jpg',
        }, 
    },

    {
        name:"Nicolas Figal",
        position: "Defensor",
        edad: "29 años",
        Image: {
           original:'assets/Image/nico-figal-1.jpg',
        }, 
    },

    {
        name:"Valentín Barco",
        position: "Defensor",
        edad: "18 años",
        Image: {
           original:'assets/Image/valentin-barco-1.jpg',
        }, 
    },

    {
        name:"Alan Varela",
        position: "Mediocampista",
        edad: "21 años",
        Image: {
           original:'assets/Image/alan-varela-1.jpg',
        }, 
    },

    {
        name:"Cristian Medina",
        position: "Mediocampista",
        edad: "20 años",
        Image: {
           original:'assets/Image/cris-medina-1.jpg',
        }, 
    },

    {
        name:"Oscar Romero",
        position: "Mediocampista",
        edad: "30 años",
        Image: {
           original:'assets/Image/oscar-romero-1.jpg',
        }, 
    },

    {
        name:"Equi Fernandez",
        position: "Mediocampista",
        edad: "20 años",
        Image: {
           original:'assets/Image/equi-fernandez-1.jpg',
        }, 
    },

    {
        name:"Luis Advincula",
        position: "Extremo",
        edad: "33 años",
        Image: {
           original:'assets/Image/luis-advincula-1.jpg',
        }, 
    },

    {
        name:"Luca Langoni",
        position: "Extremo",
        edad: "21 años",
        Image: {
           original:'assets/Image/luca-langoni-1.jpg',
        }, 
    },

    {
        name:"Miguel Merentiel",
        position: "Delantero",
        edad: "27 años",
        Image: {
           original:'assets/Image/miguel-merentiel-1.jpg',
        }, 
    },

    {
        name:"Sebastian Villa",
        position: "Extremo",
        edad: "27 años",
        Image: {
           original:'assets/Image/sebastian-villa-1.jpg',
        }, 
    },
]

const CardContainer = () => {
  return (
    <Link id="plantel">
      <section className={styles.card_container}>
        <h1 className={styles.tituloplant}> Plantel </h1>
        <div className="grid">
          {data.map((player) => (
            <Card
              name={player.name}
              image={player.Image.original}
              position={player.position}
              edad={player.edad}
            />
          ))}
        </div>
      </section>
    </Link>
  );
};

export default CardContainer