import React, { useState } from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import CardsContainer from '../CardsContainer/CardsContainer';
import axios from 'axios';

const App = () => {
   /* const [title, setTitle] = useState('Mi titulo'); */
  return (
    <div className='App'>
      <Header title={`mi titulo`} />
      <div className='wrapper'>
        <Hero />
        <CardsContainer />
      </div>
      <Footer />
    </div>
  );
};

export default App;
