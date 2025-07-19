import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <h3>About Me</h3>
      <p>
        Hey there! I'm <strong>Arın</strong>, a junior developer who recently traded biomedical engineering lectures for lines of code. Front-end work hooked me because I get to turn ideas into real, clickable experiences.
      </p>

      <p>
        I’ve been learning through Codecademy and a bunch of tiny side projects, each teaching me a new JavaScript or CSS trick. I love teaming up, asking questions, and sharing whatever I discover along the way.
      </p>

      <ul>
        <li>Built mini React apps to practice component thinking and styling.</li>
        <li>Speak <strong>English</strong> and <strong>Turkish</strong>.</li>
        <li>Always curious about new web tools and better user experiences.</li>
      </ul>

      <p>
        I’m excited to join a team where I can learn, contribute, and see my work help real users.
      </p>
    </section>
  );
}

export default About; 