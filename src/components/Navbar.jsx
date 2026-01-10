import '../styles/Navbar.css';
import React, { useState, useEffect } from 'react';
import { Coffee } from 'lucide-react';

// Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Coffee className="w-8 h-8" style={{ color: '#2c1810' }} />
              <h1 className="logo-text">The Velvet Steam</h1>
            </div>
            <div className="flex gap-2">
              {['Home', 'Menu', 'Gallery', 'About', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;