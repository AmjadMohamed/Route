import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../index.css'

export default function NavBar() {
  const location = useLocation();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg Bg-Secondary-Color fixed-top">
      <div className="container">
        <Link className="navbar-brand text-white fw-bold fs-2 py-3" to="/">
          START FRAMEWORK
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link fw-bold me-3 text-white px-3 py-2 ${location.pathname === '/about' ? 'active-nav-link' : ''}`} 
                to="/about"
                onClick={() => setIsNavCollapsed(true)}
              >
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link fw-bold me-3 text-white px-3 py-2 ${location.pathname === '/portfolio' ? 'active-nav-link' : ''}`} 
                to="/portfolio"
                onClick={() => setIsNavCollapsed(true)}
              >
                PORTFOLIO
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link fw-bold me-3 text-white px-3 py-2 ${location.pathname === '/contact' ? 'active-nav-link' : ''}`} 
                to="/contact"
                onClick={() => setIsNavCollapsed(true)}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

