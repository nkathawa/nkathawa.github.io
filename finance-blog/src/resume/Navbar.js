import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <a href="#">Navin Kathawa</a>
      <a href="#about">About Me</a>
      <div className="dropdown">
        <button className="dropbtn">
          <a href="#resume">Resume &#9660;</a>
        </button>
        <div className="dropdown-content">
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#skills">My Skills and Languages</a>
        </div>
      </div>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact Me</a>
    </div>
  );
}

export default Navbar;