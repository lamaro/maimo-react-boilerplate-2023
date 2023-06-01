import React from 'react'
import { Link } from 'react-scroll'
import styles from './Resultados.module.css'

function Resultados() {
  return (
    <Link id='resultados'>
      <h1 className={styles.notitulo2}> Torneo Local </h1>

<div className={styles.partido}>
  <img src="/assets/Image/river-plate-logo.png" alt="logo4" className={styles.logorival}/>
  <h1 className={styles.resultado}> 1 - 0</h1>
  <img src="/assets/Image/Boca-logo.png" alt="logo2" className={styles.logoboca}/>
  <a href=" # " className={styles.btn4}>Ver partido</a>
</div>

<div className={styles.partido}>
  <img src="/assets/Image/Boca-logo.png" alt="logo2" className={styles.logoboca}/>
  <h1 className={styles.resultado}> 2 - 0 </h1>
  <img src="/assets/Image/Belgrano-logo.png" alt="logo5" className={styles.logorival}/>
  <a href=" # " className={styles.btn4}>Ver partido</a>
</div>

<div className={styles.partido}>
  <img src="/assets/Image/argentinos-logo.png" alt="logo6" className={styles.logorival}/>
  <h1 className={styles.resultado}> 0 - 1 </h1>
  <img src="/assets/Image/Boca-logo.png" alt="logo2" className={styles.logoboca}/>
  <a href=" # " className={styles.btn4}> Ver partido </a>
</div>

<div className={styles.partido}>
  <img src="/assets/Image/Boca-logo.png" alt="logo2" className={styles.logoboca}/>
  <h1 className={styles.resultado}> 1 - 0 </h1>
  <img src="/assets/Image/tigre-logo.png" alt="logo7" className={styles.logorival}/>
  <a href=" # " className={styles.btn4}> Ver partido </a>
</div>

<div className={styles.partido}>
  <img src="/assets/Image/arsenal-logo.png" alt="logo11" className={styles.logorival}/>
  <h1 className={styles.resultado}> VS. </h1>
  <img src="/assets/Image/Boca-logo.png" alt="logo2" className={styles.logoboca}/>
  <a href=" # " className={styles.btn4}> Ver Información </a>
</div>

<div className={styles.partido}>
  <img src="/assets/Image/Boca-logo.png" alt="logo11" className={styles.logoboca}/>
  <h1 className={styles.resultado}> VS. </h1>
  <img src="/assets/Image/lanus-logo.png" alt="logo2" className={styles.logorival}/>
  <a href=" # " className={styles.btn4}> Ver Información </a>
</div>

<h1 className={styles.notitulo}> Copa Libertadores </h1>


<div className={styles.partido}>
  <img src="/assets/Image/Boca-logo.png" alt="logo2" className={styles.logoboca}/>
  <h1 className={styles.resultado}> 2 - 1 </h1>
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
  <img src="/assets/Image/deportivo-Pereira-logo.png" alt="logo2" className={styles.logorival}/>
  <h1 className={styles.resultado}> 1 - 0 </h1>
  <img src="/assets/Image/Boca-logo.png" alt="logo9" className={styles.logoboca}/>
  <a href=" # " className={styles.btn4}>Ver partido</a>
</div>


<div className={styles.partido}>
  <img src="/assets/Image/Boca-logo.png" alt="logo2" className={styles.logoboca}/>
  <h1 className={styles.resultado}> VS. </h1>
  <img src="/assets/Image/colo-colo-logo.png" alt="logo10" className={styles.logorival}/>
  <a href=" # " className={styles.btn4}> Ver Información </a>
</div>

<div className={styles.partido}>
  <img src="/assets/Image/Boca-logo.png" alt="logo2" className={styles.logoboca}/>
  <h1 className={styles.resultado}> VS. </h1>
  <img src="/assets/Image/monagas-logo.png" alt="logo8" className={styles.logorival}/>
  <a href=" # " className={styles.btn4}> Ver Información </a>
</div>
    </Link>
  )
}

export default Resultados