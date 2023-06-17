import React from 'react'
import { Link } from 'react-scroll'
import styles from './Section.module.css'

function Section() {
  return (
    <Link id='noticias'>
    <div className={styles.section}>

<h1 className={styles.notitulo3}> Noticias </h1>
<hr></hr>


        <article> 
        <h1> <strong> Boca vence a Tigre </strong></h1>
        <p> Boca derrotó a Tigre con un gol de Merentiel. Fue una gran actuación del equipo, con un gran rendimiento en el mediocampo por parte de Ezequiel Fernandez y Cristian Medina. El Xeneize sumó su tercer partido seguido manteniendo su valla invicta en La Bombonera.</p>
        <a href="# " className={styles.btn3}>Leer más</a>
      </article>

      <aside>
       <img src="/assets/Image/triunfo-ante-tigre.png" alt="imagen1" className={styles.festejo}/>
      </aside>

    </div>
    </Link>
  )
}

export default Section
