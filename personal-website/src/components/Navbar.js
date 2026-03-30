import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { path: '/', label: 'Home' },
    { path: '/resume', label: 'Resume' },
    { path: '/finances', label: 'Finances' },
    { path: '/contact', label: 'Contact' },
    { path: '/blog', label: 'Blog' },
  ];

  const handleClick = () => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div
          className="navbar-brand"
          onClick={() => {
            navigate('/');
            setMenuOpen(false);
            window.scrollTo(0, 0);
          }}
        >
          <h1>Navin Kathawa</h1>
          <span className="brand-subtitle">Software Engineer</span>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <div className={`navbar-tabs ${menuOpen ? 'open' : ''}`}>
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

      {/* Overlay to close menu when clicking outside */}
      {menuOpen && (
        <div className="navbar-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;