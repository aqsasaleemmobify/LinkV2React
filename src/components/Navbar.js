import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../index.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src="/images/main_logo.png" width="70" height="60" alt="logo" />
        </Link>

        <nav className="nav-links">
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="#how-it-works" className="nav-link">
            How It Works
          </Link>
          <Link to="/developerSubmission" className="nav-link">
            Developers
          </Link>
          <Link to="/login" className="nav-button">
            🔒 Login
          </Link>
        </nav>

        <button className="burger-button" onClick={toggleMenu}>
          <svg
            className="burger-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <Link to="/about" className="mobile-link" onClick={toggleMenu}>
            About
          </Link>
          <Link to="#how-it-works" className="mobile-link" onClick={toggleMenu}>
            How It Works
          </Link>
          <Link
            to="/developerSubmission"
            className="mobile-link"
            onClick={toggleMenu}
          >
            Developers
          </Link>
          <Link to="/login" className="mobile-button" onClick={toggleMenu}>
            🔒 Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
