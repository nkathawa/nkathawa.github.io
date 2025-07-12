// Navbar.js
import React from 'react';
import './css/Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><NavLink exact to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
        <li><NavLink to="/finances" end className={({ isActive }) => isActive ? "active" : ""}>Finances Home</NavLink></li>
        <li><NavLink to="/finances/blog" className={({ isActive }) => isActive ? "active" : ""}>Blog</NavLink></li>
        <li><NavLink to="/finances/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;