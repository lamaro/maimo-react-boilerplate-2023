import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return <header className={styles.header_container}>
          <nav>
          <img src="/assets/image/Boca-logo.png" className={styles.logoimg} alt='image1'/>
              <ul className={styles.menu}>
                  <li><a href="# ">Home</a></li>
                  <li><a href="# ">Plantel</a></li>
                  <li><a href="# ">Noticias</a></li>
                  <li><a href="# ">Calendario</a></li>
              </ul>
          </nav>
          <a href="# " className={styles.btn}>Iniciar Sesión</a>
 
 </header>
};
export default Header;
