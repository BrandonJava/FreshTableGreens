import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Hamburger Icon from FontAwesome
import '../styles/Header.css';
import logo from '../assets/logo.png'; // Ensure your logo is in the assets folder

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      {/* Top Section with Logo and Company Name */}
      <div className="top-bar">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img src={logo} alt="FreshTableGreens Logo" className="logo" />
            <h1 className="company-name">FreshTableGreens</h1>
          </div>
        </div>
      </div>

      {/* Main Navigation Section with Search Bar */}
      <nav className="navbar">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Hamburger Menu Icon */}
          <div className="hamburger-menu" onClick={toggleMenu}>
            <FaBars className="hamburger-icon" />
          </div>

          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sustainability" onClick={toggleMenu}>
                  Sustainability
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products" onClick={toggleMenu}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button type="submit">🔍</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
