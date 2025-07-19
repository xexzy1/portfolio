import React from 'react';
import './Projects.css';

const projectList = [
  {
    title: 'Project One',
    description: 'A brief description of project one.',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'A brief description of project two.',
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'A brief description of project three.',
    link: '#',
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h3>Projects</h3>
      <div className="project-grid">
        {projectList.map((proj) => (
          <a
            className="project-card"
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            key={proj.title}
          >
            <h4>{proj.title}</h4>
            <p>{proj.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects; 