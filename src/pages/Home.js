// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Sustainability from '../components/Sustainability';
import NewsList from '../components/NewsList';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Sustainability />
      <NewsList />
    </div>
  );
};

export default Home;
