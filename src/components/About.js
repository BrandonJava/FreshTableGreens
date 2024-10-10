import React from 'react';
import '../styles/About.css';
import icon1 from '../assets/icon1.gif'; // Placeholder for actual icons
import icon2 from '../assets/icon2.gif';
import icon3 from '../assets/icon3.gif';
import icon4 from '../assets/icon4.gif';

const About = () => {
  return (
    <section className="about-section">
      <h2>Our Culture</h2>
      <div className="culture-container">
        <div className="culture-card">
          <img src={icon1} alt="Innovation Icon" className="icon"/>
          <h3>Innovation</h3>
          <p>We strive to bring new technologies and sustainable practices to improve agriculture and deliver high-quality produce.</p>
          <button className="cta-button">Read More</button>
        </div>
        <div className="culture-card">
          <img src={icon2} alt="Sustainability Icon" className="icon"/>
          <h3>Sustainability</h3>
          <p>Our commitment to environmental responsibility ensures we protect natural resources for future generations.</p>
          <button className="cta-button">Read More</button>
        </div>
        <div className="culture-card">
          <img src={icon3} alt="Community Icon" className="icon"/>
          <h3>Community</h3>
          <p>We invest in our local communities, providing jobs, training, and opportunities for growth.</p>
          <button className="cta-button">Read More</button>
        </div>
        <div className="culture-card">
          <img src={icon4} alt="Excellence Icon" className="icon"/>
          <h3>Excellence</h3>
          <p>Through continuous improvement, we aim to achieve the highest standards in quality and production.</p>
          <button className="cta-button">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
