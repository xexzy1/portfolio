import React from 'react';
import './Contact.css';

function Contact() {
  const handleGitHubClick = () => {
    window.open('https://github.com/xexzy1', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="contact">
      <h3>Get In Touch</h3>

      <div className="contact-buttons">
        {/* Email Button */}
        <a
          href="mailto:arinengintepe@gmail.com"
          className="contact-btn"
          aria-label="Send me an email"
        >
          {/* Gmail M logo image */}
          <img
            src="https://www.gstatic.com/images/branding/product/1x/gmail_48dp.png"
            width="24"
            height="24"
            alt="Gmail logo"
          />
        </a>

        {/* GitHub Button */}
        <button
          className="contact-btn"
          onClick={handleGitHubClick}
          aria-label="Visit my GitHub profile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.43c.6.11.82-.26.82-.58v-2.01c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.24-.13-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.05.14 3 .4 2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.92 1.24 3.24 0 4.64-2.81 5.66-5.48 5.96.43.38.81 1.12.81 2.25v3.34c0 .32.22.7.82.58A12 12 0 0 0 24 12C24 5.37 18.63 0 12 0z"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Contact; 