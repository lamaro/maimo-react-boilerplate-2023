import React from 'react';
import Card from '../Card/Card';
import styles from './CardsContainer.module.css';
import data from '../../utils/dummyData'

const CardsContainer = () => {
  return (
    <section className={styles.cards_container}>
      <div className='grid'>
        {data.map(({ name, image, language }) => (
          <Card name={name} image={image.original} language={language} />
        ))}
      </div>
    </section>
  );
};

export default CardsContainer;
