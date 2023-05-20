import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import CardsContainer from '../CardsContainer/CardsContainer';
import { Element } from 'react-scroll';

const App = () => {
  return (
    <div className='App'>
      <Header title={`mi titulo 2`} />
      <Element name='hero' className='element'>
        <Hero />
      </Element>
      <CardsContainer />
      <Element name='footer' className='element'>
        <Footer />
      </Element>
    </div>
  );
};

export default App;
