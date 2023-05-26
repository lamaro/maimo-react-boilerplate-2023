import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return <header className={styles.header_container}>
    <nav>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>Contact2</li>
      </ul>
    </nav>
  </header>;
};


export default Header;
