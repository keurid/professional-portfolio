// Project.js
import React from 'react';

const Project = ({ title, description, liveLink, repoLink }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default Project;
