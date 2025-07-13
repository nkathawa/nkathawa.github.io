import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './css/App.css';
import Home from './components/Home';
import Resume from './components/Resume';
import Finances from './components/Finances';
import Contact from './components/Contact';
import Article from './components/Article';
import Navbar from './components/Navbar';

function AppContent() {
  const [activeTab, setActiveTab] = useState('home');
  const location = useLocation();

  // Check if we're on an article page
  const isArticlePage = location.pathname.startsWith('/article/');

  // Scroll to top on page load and location changes
  useEffect(() => {
    // Prevent scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Scroll to top immediately
    window.scrollTo(0, 0);
    
    return () => {};
  }, [location.pathname]);

  // Additional effect to handle page reloads
  useEffect(() => {
    const handleBeforeUnload = () => {
      // Clear any stored scroll position
      sessionStorage.removeItem('scrollPosition');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'resume':
        return <Resume />;
      case 'finances':
        return <Finances />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="App">
      {!isArticlePage && <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={renderContent()} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;