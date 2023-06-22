import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import { Element } from 'react-scroll';

const App = () => {
  return (
    <div className='App'>
      
      <Header />
      
      <Element name="hero" className="element"> 
      <Hero/> 
      </Element>
      

      <Footer />
    </div>
  );
};

export default App;
