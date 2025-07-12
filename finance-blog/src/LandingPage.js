// LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/LandingPage.css';  // Add this line to import your CSS

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="LandingPage">
      <nav className="navbar">
        <h1>navinkathawa.com</h1>
      </nav>
      <div className="content">
        <div className="button-group">
          <button onClick={() => navigate('/finances')}>Personal Finance</button>
          <button onClick={() => navigate('/resume')}>Resume & Experience</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;