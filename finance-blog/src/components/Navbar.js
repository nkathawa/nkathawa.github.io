import React from 'react';
import './Navbar.css';

const Navbar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'resume', label: 'Resume', icon: '📄' },
    { id: 'finances', label: 'Finances', icon: '💰' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    // Instantly scroll to top of the page
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>Navin Kathawa</h1>
          <span className="brand-subtitle">Software Developer1 & Personal Finance Enthusiast</span>
        </div>
        
        <div className="navbar-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 