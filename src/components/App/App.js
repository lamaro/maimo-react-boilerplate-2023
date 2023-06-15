import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import CardsContainer from '../CardsContainer/CardsContainer';
import { Element } from 'react-scroll';
import Loading from '../Loading/Loading';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Hacemos request a nuestra API
    const getData = async () => {
      setLoading(true);
      try {
        const movies = await axios.get(
          `https://api.tvmaze.com/search/shows?q=batman`
        );
        setData(movies.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className='App'>
      <Header title={`FETCHING BATMANS`} />
      <Element name='hero' className='element'>
        <Hero />
      </Element>

      {/* Opcion 1: Recommended */}
      {loading && <Loading />}
      {!loading && <CardsContainer data={data} />}

      {/* Opcion 2 */}
      {/* {loading ? <Loading /> : <CardsContainer data={data} />} */}

      <Element name='footer' className='element'>
        <Footer />
      </Element>
    </div>
  );
};

export default App;
