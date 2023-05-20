import React from 'react'
import styles from './Card.module.css'

const Card = ({name, image, language}) => {
  return (
    <article className={`col_4 ${styles.card_wrapper}`}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{language}</p>
    </article>
  )
}

export default Card