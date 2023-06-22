import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-scroll';

const Header = ({ title }) => {
  return (
    <header className={styles.header_container}>
      <h1>
        <img src='/assets/claypole-logo.png' alt='Logo' />
      </h1>
      <nav>
        <ul>
          <li>
            <Link
              activeClass='active'
              className='anchor_link'
              to={'hero'}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              className='anchor_link'
              to={'Resultados'}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
              Resultados
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              className='anchor_link'
              to={'Resultados'}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
              Imagenes
            </Link>
          </li>
        </ul>
      </nav>
      <a href=" # " className={styles.btn}>
        Iniciar Sesión
      </a>
    </header>
  );
};

export default Header;
