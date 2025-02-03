// src/components/Footer.js
import React from 'react';
import logo from '../assets/images/logo.png';

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="AI Solutions Logo" className="footer-logo" />
      <p>© {new Date().getFullYear()} AI Solutions. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
