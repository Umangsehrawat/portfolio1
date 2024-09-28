import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import logo from '../assets/logo.avif'; 

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <div className="logo-container">
        <img src={logo} alt="Custom Logo" className="logo" />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default NavigationBar;