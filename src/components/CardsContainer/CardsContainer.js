import React from 'react'
import Cards from '../Cards/Cards'
import data from '../../utils/dummyData';
import CardGroup from 'react-bootstrap/CardGroup';
import styles from './CardsContainer.module.css';


const CardsContainer = () => {

  return (
    <div className={styles.cards}>
     <h5 className={styles.center}> Our Latest Products</h5>
       <CardGroup  >
         
            {data.map(({ name, image, information}) => (
                <Cards name={name} image = {image} information={information} />
            ))}
        </CardGroup>

    </div>
  )
}

export default CardsContainer