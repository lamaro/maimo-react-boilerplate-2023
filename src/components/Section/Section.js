import React from 'react'
import styles from './Section.module.css'

function Section() {
  return (
    <div className={styles.section}>

<h2 className={styles.notitulo3}> Noticias </h2>
<hr></hr>


        <article> 
        <h1> <strong> Boca vence a Belgrano </strong></h1>
        <p> Boca derrotó a los piratas por 2 goles a 0. Fue una gran actuación del equipo, con goles del Pipa Benedetto, quien marco el segundo gol, que fue revisado en el VAR y Martín Payero, que hizo el primero de la noche. El equipo de Almiron se posiciona en el puesto numero 13. Su proximo partido será frente a Argentinos Juniors en el Estadio Diego Armando Maradona.</p>
        <a href="# " className={styles.btn3}>Leer más</a>
      </article>

      <aside>
       <img src="/assets/Image/triunfo-ante-belgrano.png" alt="imagen1" class="festejo"/> 
      </aside>

      <h2 className={styles.notitulo2}> Torneo Local </h2>

      <div className={styles.partido}>
        <img src="/assets/Image/rosario-central-logo.png" alt="logo1" className={styles.logorival}/>
        <h1 className={styles.resultado}> 2 - 2</h1>
        <img src="/assets/Image/Boca-logo.png" alt="logo2" className={styles.logoboca}/>
        <a href=" # " className={styles.btn4}>Ver partido</a>
      </div>

      <div className={styles.partido}>
        <img src="/assets/Image/Boca-logo.png" alt="logo2" className={styles.logoboca}/>
        <h1 className={styles.resultado}> 3 - 1</h1>
        <img src="/assets/Image/racing-logo.png" alt="logo3" className={styles.logorival}/>
        <a href=" # " className={styles.btn4}>Ver partido</a>
      </div>

      <div className={styles.partido}>
        <img src="/assets/Image/river-plate-logo.png" alt="logo4" className={styles.logorival}/>
        <h1 className={styles.resultado}> 1 - 0</h1>
        <img src="/assets/Image/Boca-logo.png" alt="logo2" className={styles.logoboca}/>
        <a href=" # " className={styles.btn4}>Ver partido</a>
      </div>

      <div className={styles.partido}>
        <img src="/assets/Image/Boca-logo.png" alt="logo2" className={styles.logoboca}/>
        <h1 className={styles.resultado}> 2 - 0</h1>
        <img src="/assets/Image/Belgrano-logo.png" alt="logo5" className={styles.logorival}/>
        <a href=" # " className={styles.btn4}>Ver partido</a>
      </div>

      <div className={styles.partido}>
        <img src="/assets/Image/argentinos-logo.png" alt="logo6" className={styles.logorival}/>
        <h1 className={styles.resultado}> VS. </h1>
        <img src="/assets/Image/Boca-logo.png" alt="logo2" className={styles.logoboca}/>
        <a href=" # " className={styles.btn4}> Ver Información </a>
      </div>

      <div className={styles.partido}>
        <img src="/assets/Image/Boca-logo.png" alt="logo2" className={styles.logoboca}/>
        <h1 className={styles.resultado}> VS. </h1>
        <img src="/assets/Image/tigre-logo.png" alt="logo7" className={styles.logorival}/>
        <a href=" # " className={styles.btn4}> Ver Información </a>
      </div>

      <h2 className={styles.notitulo}> Copa Libertadores </h2>

      <div className={styles.partido}>
        <img src="/assets/Image/monagas-logo.png" alt="logo8" className={styles.logorival}/>
        <h1 className={styles.resultado}> 0 - 0</h1>
        <img src="/assets/Image/Boca-logo.png" alt="logo2" className={styles.logoboca}/>
        <a href=" # " className={styles.btn4}>Ver partido</a>
      </div>

      <div className={styles.partido}>
        <img src="/assets/Image/Boca-logo.png" alt="logo2" className={styles.logoboca}/>
        <h1 className={styles.resultado}> 2 - 1</h1>
        <img src="/assets/Image/deportivo-Pereira-logo.png" alt="logo9" className={styles.logorival}/>
        <a href=" # " className={styles.btn4}>Ver partido</a>
      </div>

      <div className={styles.partido}>
        <img src="/assets/Image/colo-colo-logo.png" alt="logo10" className={styles.logorival}/>
        <h1 className={styles.resultado}> 0 - 2 </h1>
        <img src="/assets/Image/Boca-logo.png" alt="logo2" className={styles.logoboca}/>
        <a href=" # " className={styles.btn4}>Ver partido</a>
      </div>

      <div className={styles.partido}>
        <img src="/assets/Image/deportivo-Pereira-logo.png" alt="logo9" className={styles.logorival}/>
        <h1 className={styles.resultado}> VS. </h1>
        <img src="/assets/Image/Boca-logo.png" alt="logo2" className={styles.logoboca}/>
        <a href=" # " className={styles.btn4}> Ver Información </a>
      </div>

      <div className={styles.partido}>
        <img src="/assets/Image/Boca-logo.png" alt="logo2" className={styles.logoboca}/>
        <h1 className={styles.resultado}> VS. </h1>
        <img src="/assets/Image/colo-colo-logo.png" alt="logo10" className={styles.logorival}/>
        <a href=" # " className={styles.btn4}> Ver Información </a>
      </div>

    </div>

  )
}

export default Section
