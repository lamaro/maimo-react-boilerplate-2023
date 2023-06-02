import React from 'react'
import Styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section >
    <img src='/assets/img/hero-img.jpg' alt='Abstract scene with a coffe-like sensation' className={Styles.image} />
    <h1>caféLovers</h1>
    </section>
  )
}

export default Hero