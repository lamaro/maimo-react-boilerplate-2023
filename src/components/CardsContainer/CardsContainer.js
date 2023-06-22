import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import styles from './CardsContainer.module.css';

const CardsContainer = ({ data }) => {
  const [featured, setFeatured] = useState(2);

  const handleFeaturedSelect = (cardId) => {
    console.log('SELECTED', cardId);
    setFeatured(cardId);
  };

  return (
    <section className={styles.cards_container}>
      <div className='grid'>
        {data.map((movie, index) => {
          const {name, image, language} = movie.show
          return (
            <Card
              name={name}
              image={image?.original}
              language={language}
              featured={featured}
              handleFeatured={handleFeaturedSelect}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CardsContainer;
