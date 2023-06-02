import React from 'react'
import Styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={Styles.hero}>
    <h1><span className={Styles.hero_cafe}>café</span><span class={Styles.hero_lovers}>Lovers</span></h1>
    </section>
  )
}

export default Hero