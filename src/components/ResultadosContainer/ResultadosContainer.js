import React from 'react'
import Resultados from '../Resultados/Resultados'
import { Link } from 'react-scroll'
import styles from './ResultadosContainer.module.css'



const data = [
    {
        Image1: {
            original:'assets/Image/deportivo-pereira-logo.png',
         },
        logo1: "Boca", 
        resultado: "1 - 0",
        Image2: {
           original:'assets/Image/Boca-logo.png',
        },
        logo2: "rival", 
    },

    {
        Image1: {
            original:'assets/Image/Boca-logo.png',
         },
        logo2: "rival",
        resultado: "1 - 0",
        Image2: {
           original:'assets/Image/tigre-logo.png',
        },
        logo1: "Boca", 
    },

    {
        Image1: {
            original:'assets/Image/arsenal-logo.png',
         },
        logo2: "rival",
        resultado: "1 - 0",
        Image2: {
           original:'assets/Image/Boca-logo.png',
        },
        logo1: "Boca", 
    },

   


    {
        Image1: {
            original:'assets/Image/Boca-logo.png',
         },
        logo2: "rival",
        resultado: "1 - 0",
        Image2: {
           original:'assets/Image/colo-colo-logo.png',
        },
        logo1: "Boca", 
    },

 {
        Image1: {
            original:'assets/Image/Boca-logo.png',
         },
        logo2: "rival",
        resultado: "1 - 1",
        Image2: {
           original:'assets/Image/lanus-logo.png',
        },
        logo1: "Boca", 
    },
]

const ResultadosContainer = () => {
    return (
      <Link id="resultados">
        <section className={styles.resultados}>
          <h1 className={styles.tituloresult}> Resultados </h1>
            {data.map((resultados) => (
              <Resultados
              name={resultados.name}
              image1={resultados.Image1.original}
              resultado={resultados.resultado}
              image2={resultados.Image2.original}
              logo1={resultados.logo1}
              logo2={resultados.logo2}
              />
            ))}
        </section>
      </Link>
    );
  };


export default ResultadosContainer
