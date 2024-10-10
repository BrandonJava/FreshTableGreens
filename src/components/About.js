import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about">
      <h2>Our Essence</h2>
      <div className="essence-cards">
        <div className="card">
          <h3>Responsible Production</h3>
          <p>We produce and commercialize bananas, food ingredients, and tropical oils, using sustainable and responsible farming methods.</p>
        </div>
        <div className="card">
          <h3>Our Heritage</h3>
          <p>Since our inception in 1958, we have become leaders in agribusiness, supplying bananas and tropical oil to large stores.</p>
        </div>
        <div className="card">
          <h3>Our Purpose</h3>
          <p>We are committed to the welfare of the people we employ and the communities near our operations.</p>
        </div>
        <div className="card">
          <h3>Good Practices</h3>
          <p>We have received various awards for excellence in implementing high-quality practices in all of our operations.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
