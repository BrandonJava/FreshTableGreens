// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ProductsCarousel from '../components/ProductsCarousel';
import NewsList from '../components/NewsList';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <ProductsCarousel />
      <NewsList />
    </div>
  );
};

export default Home;
