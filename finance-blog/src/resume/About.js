import React from 'react';

function About() {
  return (
    <section id="about">
      <div>
        <p className="title-first">About Me</p>
      </div>
      <div className="divIndex">
        <img className="introImg" src="static/navin_headshot.jpg" alt="" style={{ height: '100%', width: '100%' }} />
        <div className="introText">
          <p>My name is Navin Kathawa, and I'm a software engineering professional with several years of experience...</p>
          {/* Additional paragraph content */}
        </div>
      </div>
    </section>
  );
}

export default About;