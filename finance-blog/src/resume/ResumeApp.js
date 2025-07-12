import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import './css/App.css';

function ResumeApp() {
  return (
    <div className="ResumeApp">
      <Navbar />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default ResumeApp;