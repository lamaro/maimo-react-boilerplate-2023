import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import CardsContainer from '../CardsContainer/CardsContainer';

const App = () => {
  return (
    <div className='App'>
      <header />
      <Hero />
      <CardsContainer />
      <Footer />
    </div>
  );
};

export default App;
