// FinanceApp.js
import './css/App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import Article from './Article';

function FinanceApp() {
  return (
    <div className="FinanceApp">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/article/:id" element={<Article />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default FinanceApp;