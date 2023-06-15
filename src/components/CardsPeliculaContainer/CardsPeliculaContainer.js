import React from 'react';
import styles from './CardsPeliculaContainer.module.css'
import CardPelicula from '../CardPelicula/CardPelicula';
import data from '../../utils/dummyData';

const CardsPeliculaCOntainer = () => {
  return (
    <section className={styles.cards_container}>
        <div className='grid'>
            {data.map(({ name, image, language}) => (
                <CardPelicula name={name} image = {image.original} language={language} />
            ))}
        </div>
    </section>
  )
}

export default CardsPeliculaCOntainer