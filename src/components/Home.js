// src/components/Home.js
import React from 'react';
import logo from '../assets/images/logo.png'; // Ensure the correct path

function Home() {
  return (
    <section className="home">
      <div className="hero-content">
        <img src={logo} alt="AI Solutions Logo" className="hero-logo" />
        <h1>Welcome to AI SOLUTIONS</h1>
        <p>Data Scientist | Machine Learning | Analytics</p>
        <div className="cta-buttons">
          <a href="/projects" className="btn primary">View Projects</a>
          <a href="/contact" className="btn secondary">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
