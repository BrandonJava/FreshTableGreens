import React from 'react';
import '../styles/Sustainability.css';

const Sustainability = () => {
  return (
    <section className="sustainability">
      <h2>Corporate Sustainability</h2>
      <p>
        We have developed a business model based on Corporate Sustainability. We generate value and balance among economic growth, conservation of natural resources, and the welfare of our stakeholders.
      </p>
      <div className="sustainability-cards">
        <div className="card">
          <h3>Our Governance</h3>
        </div>
        <div className="card">
          <h3>Our Operations</h3>
        </div>
        <div className="card">
          <h3>Our Planet</h3>
        </div>
        <div className="card">
          <h3>Our People</h3>
        </div>
        <div className="card">
          <h3>Our Communities</h3>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
