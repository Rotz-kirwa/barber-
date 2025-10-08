import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/booking', label: 'Book Now' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo">
            <h2>Elite Cuts</h2>
          </Link>
          
          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="theme-toggle" onClick={toggleDarkMode}>
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>

          <button 
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;