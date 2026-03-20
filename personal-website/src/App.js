import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Article from './components/Article';
import Finances from './components/Finances';
import Contact from './components/Contact';
import './css/App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/article/:id" element={<Article />} />
          <Route path="/finances" element={<Finances />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;