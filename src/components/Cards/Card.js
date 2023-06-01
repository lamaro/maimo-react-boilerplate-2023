import React from 'react'
import styles from './Cards.module.css'

const Card = ({name, image, edad, position}) => {
  return (
    <div className={`col_4 ${styles.card_wrapper}`}>
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <p className={styles.datos}>{edad}</p>
    <p className={styles.datos}>{position}</p>
    </div>
  )
}

export default Card