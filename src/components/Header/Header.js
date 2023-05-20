import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-scroll';

const Header = ({ title }) => {
  return (
    <header className={styles.header_container}>
      <h1>
        <img src='/assets/logo512.png' alt='Logo' />
        <span>{title}</span>
      </h1>
      <nav>
        <ul>
          <li>
            <Link
              activeClass='active'
              className='anchor_link'
              to={'footer'}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
              HERO
            </Link>
          </li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
