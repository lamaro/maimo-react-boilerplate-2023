import React from 'react'
import styles from './Banner.module.css'


const Banner = () => {
    return (
      <div className={styles.Banner}>
        <img src="/assets/Clay-hero.png" className={styles.logoban} alt='image2'/>
            
            <a href=" # " className={styles.btn}>
            Iniciar Sesión
            </a>
      </div>
    )
  };
  
  export default Banner