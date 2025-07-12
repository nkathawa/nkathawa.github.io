import React from 'react';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';

function Resume() {
  return (
    <section id="resume">
      <p className="title">My Resume</p>
      <Experience />
      <Education />
      <Skills />
    </section>
  );
}

export default Resume;