import React, { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('About Me');


  return (
    <div className="App">
      <Header />
      {currentSection === 'About Me' && <AboutMe />}
      {currentSection === 'Portfolio' && <Portfolio />}
      {currentSection === 'Contact' && <Contact />}
      {currentSection === 'Resume' && <Resume />}
      <Footer />
    </div>
  );
}

export default App;
