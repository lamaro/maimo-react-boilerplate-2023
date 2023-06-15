import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";
import Scroll from "react-scroll";
import styles from './Header.module.css'
/* react scroll */

const Header = () => {
  return (
    <Navbar className={styles.shadow} sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className={styles.navBar} >
        <Navbar.Brand href="#home">
          <img
            src="/assets/img/cropped-logo-carthage.png"
            height="40"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link
              activeClass="active"
              className={styles.anchor_link}
              to={"hero"}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
              New In
            </Link>
            <Link
              activeClass="active"
              className={styles.anchor_link}
              to={"cards"}
              spy={true}
              smooth={true}
              duration={200}
              offset={-90}
            >
              Products
            </Link>
            <Link
              activeClass="active"
              className={styles.anchor_link}
              to={"form"}
              spy={true}
              smooth={true}
              duration={200}
              offset={-90}
            >
              Information
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
