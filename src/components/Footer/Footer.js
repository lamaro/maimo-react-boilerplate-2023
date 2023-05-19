import React from 'react'
import styles from "./Footer.module.css"

function Footer() {
  return (

    <footer className={styles.footer}>
      <img src='/assets/Image/Boca-logo.png' className={styles.logofoot} alt='image1' />
      <hr className={styles.lineafoot}></hr>

      <ul>
      <li><a href="# "> About Us </a></li>
      <li><a href="# "> Cookies Policy </a></li>
      <li><a href="# "> Terms of Service </a></li>
      <li><a href="# "> Support </a></li>
      </ul>
    

    <div className={styles.box}>
      <p>Copyright@2023Boca Juniors Studios. All right reserved</p>
    </div>

</footer>
  );
}


export default Footer