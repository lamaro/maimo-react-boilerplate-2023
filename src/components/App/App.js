import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Section from '../Section/Section';
import CardContainer from '../CardContainer/CardContainer';
import ResultadosContainer from '../ResultadosContainer/ResultadosContainer';
import Footer from '../Footer/Footer';
import { Element } from 'react-scroll';


const App = () => {
  return (
    <div className='App'>
      
      <Header />
      
      <Element name="hero" className="element"> 
      <Hero/> 
      </Element>
      
      <Element name="plantel" className="element">
      <CardContainer/>
      </Element>

      <Element name="noticias" className="element">
      <Section/>
      </Element>

      <Element name="resultados" className="element">
      <ResultadosContainer/>
      </Element>

      <Footer />
    </div>
  );
};

export default App;
