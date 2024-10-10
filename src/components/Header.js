import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/logo.png'; // Ensure your logo is in the assets folder

const Header = () => {
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
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sustainability">
                  Sustainability
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
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
