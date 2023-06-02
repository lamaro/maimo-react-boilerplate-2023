import React from 'react';
import styles from './Header.module.css';

const Header = ({title}) => {
  return <header className={styles.header_container}>
    {/* <h1>
      <img src="/assets/logo512.png" alt="Logo" />
      <span>{title}</span>
    </h1>
 develop */}
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
