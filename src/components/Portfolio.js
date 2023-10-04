// Portfolio.js
import React from 'react';
import Project from './Project';  // Make sure the import statement is correct

const Portfolio = () => {
  // Sample project data, replace with your own
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1.',
      liveLink: 'https://project1-live-link.com',
      repoLink: 'https://github.com/keurid/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2.',
      liveLink: 'https://project2-live-link.com',
      repoLink: 'https://github.com/keurid/project2',
    },
    // Add more projects as needed
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
