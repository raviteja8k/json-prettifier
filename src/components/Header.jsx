import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

function Header({ darkMode, onToggleDarkMode }) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <div className="d-flex align-items-center">
          <img
            src="/logo.png"
            alt="JSON Prettifier Logo"
            height="30"
            className="me-2"
          />
          
        </div>
        <button
          onClick={onToggleDarkMode}
          className="btn btn-outline-secondary"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <BsSun /> : <BsMoon />}
        </button>
      </div>
    </nav>
  );
}

export default Header;