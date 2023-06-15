import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
    <div className={styles.containerFooter}>
       <h6 className={styles.center}>Av. Córdoba 3515 1°C <br />CABA, Argentina </h6>
       <div className={styles.verticalLine}></div>
       <h6 className={styles.center}>Follow us on Instagram and Twitter</h6>
       <div className={styles.icon}></div>
    </div> 
   

    </footer>
  )
}

export default Footer