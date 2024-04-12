import React from 'react';
import './css/Navbar.css'
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;