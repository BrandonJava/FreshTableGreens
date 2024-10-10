import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <section className="hero">
        <div className="hero-content">
          <h1>Growing for a Greener Tomorrow</h1>
          <p>Nurturing Communities, Sustaining the Earth</p>
          <button className="cta-button">Learn More</button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
