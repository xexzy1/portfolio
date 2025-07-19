import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Arın Engintepe. All rights reserved.</p>
    </footer>
  );
}

export default Footer; 