import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const tabs = [
    { path: '/', label: 'Home' },
    { path: '/resume', label: 'Resume' },
    { path: '/finances', label: 'Finances' },
    { path: '/contact', label: 'Contact' },
    { path: '/blog', label: 'Blog' },
  ];

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => { navigate('/'); window.scrollTo(0, 0); }}>
          <h1>Navin Kathawa</h1>
          <span className="brand-subtitle">Software Developer & Personal Finance Enthusiast</span>
        </div>

        <div className="navbar-tabs">
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              end={tab.path === '/'}
              className={({ isActive }) =>
                `nav-tab ${isActive ? 'active' : ''}`
              }
              onClick={handleClick}
            >
              <span className="tab-label">{tab.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;