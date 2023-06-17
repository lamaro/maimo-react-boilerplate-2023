import React from "react";
import { Link } from "react-scroll";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header_container}>
      <nav>
        <img
          src="/assets/image/Boca-logo.png"
          className={styles.logoimg}
          alt="image1"
        />
        <ul className={styles.menu}>
          <li>
            <Link
              activeClass="active"
              className="anchor-link"
              to={"hero"}
              spy={true}
              smooth={true}
              duration={500}
              offset={50}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="anchor-link"
              to={"plantel"}
              spy={true}
              smooth={true}
              offset={50}
            >
              Plantel
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="anchor-link"
              to={"noticias"}
              spy={true}
              smooth={true}
              offset={50}
            >
              Noticias
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="anchor-link"
              to={"resultados"}
              spy={true}
              smooth={true}
              offset={50}
            >
              Resultados
            </Link>
          </li>
        </ul>
      </nav>
      <a href="# " className={styles.btn}>
        Iniciar Sesión
      </a>
    </header>
  );
};
export default Header;
