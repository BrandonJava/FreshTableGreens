import React from 'react';
import '../styles/Hero.css';
import heroImage from '../assets/hero-image.jpg'; // Use the image you provided

const Hero = () => {
  return (
    <section className="hero">
      <div class="hero-content">
  <h1>Growing for a Greener Tomorrow</h1>
  <p>Nurturing Communities, Sustaining the Earth</p>
  <button class="cta-button">Learn More</button>
</div>
    </section>
  );
};

export default Hero;
