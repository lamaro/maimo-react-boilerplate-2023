import React from 'react';
import styles from './Card.module.css';

const Card = ({ index, name, image, language, featured, handleFeatured }) => {

  return (
    <article
      className={`col_4 ${styles.card_wrapper} ${
        index === featured ? styles.selected : ''
      }`}
    >
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>
        {language} {index}
      </p>
      <button onClick={() => handleFeatured(index)}>Select</button>
    </article>
  );
};

export default Card;
