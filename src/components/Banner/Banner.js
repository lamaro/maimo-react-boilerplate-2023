import React from 'react'
import styles from './Banner.module.css'

const Banner = () => {
  return (
    <div className={styles.Banner}>
      <img src="/assets/Image/Boca blanco.png" className={styles.logoban} alt='image2'/>
          <div classname={styles.content}> 
              <h4>CLUB ATLETICO BOCA JUNIORS</h4>
              <h1>La Mitad Más Uno</h1>
          </div>
    </div>
  )
};

export default Banner