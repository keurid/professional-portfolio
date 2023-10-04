// Navigation.js
import React from 'react';

const NavLink = ({ section, currentSection, onNavigationClick }) => (
  <li
    onClick={() => onNavigationClick(section)}
    className={currentSection === section ? 'active' : ''}
  >
    {section}
  </li>
);

const Navigation = ({ currentSection, onNavigationClick }) => {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      <ul>
        {sections.map((section) => (
          <NavLink
            key={section}
            section={section}
            currentSection={currentSection}
            onNavigationClick={onNavigationClick}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
