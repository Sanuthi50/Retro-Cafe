import '../styles/Navbar.css';
import React, { useState, useEffect } from 'react';
import { Coffee, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Menu', 'Gallery', 'About', 'Contact'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Coffee size={28} />
          <span className="logo-text">The Velvet Steam</span>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navItems.map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navItems.map(item => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;