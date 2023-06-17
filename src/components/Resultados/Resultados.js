import React from 'react'
import styles from './Resultados.module.css'

const Resultados = ({image1, resultado , image2, logo1, logo2}) => {
  return (
    <div className={styles.partido}>
    <img src={image1} className={styles.logoboca} alt={logo1} />
    <h2>{resultado}</h2>
    <img src={image2} className={styles.logorival} alt={logo2} />
    <a href=" # " className={styles.btn4}>Ver partido</a>
    </div>
  )
}

export default Resultados