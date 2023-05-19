import React from 'react'
import styles from './Banner.module.css'

const Banner = () => {
  return (
    <div class="banner" className={styles.banner}>
      <img src="/assets/Image/Boca blanco.png" class="logoban" alt='image2'/>
          <div class="content"> 
              <h4>CLUB ATLETICO BOCA JUNIORS</h4>
              <h1>La Mitad Más Uno</h1>
          </div>
    </div>
  )
};

export default Banner