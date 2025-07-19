import React from 'react';
import './Header.css';

function Header({ isDarkMode, toggleTheme }) {
  const handleLogoClick = () => {
    const startY = window.scrollY;
    const duration = 300; // milliseconds (fast but noticeable)
    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      window.scrollTo(0, startY * (1 - easeOut));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };
  return (
    <header className="header">
      <h1 className="logo" onClick={handleLogoClick}>AE</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle color mode"
        >
          {isDarkMode ? '☀' : '☽'}
        </button>
      </nav>
    </header>
  );
}

export default Header; 