import '../styles/Footer.css';
import { Coffee } from 'lucide-react';

// Footer Component
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Coffee className="w-8 h-8" />
              <span className="footer-logo-text">The Velvet Steam</span>
            </div>
            <p>Where every cup tells a story. Experience the finest handcrafted coffee in a timeless atmosphere.</p>
            <div className="social-links">
              <div className="social-link">f</div>
              <div className="social-link">t</div>
              <div className="social-link">i</div>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#menu">Menu</a>
              <a href="#gallery">Gallery</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Hours</h3>
            <ul className="hours-list">
              <li><span>Monday - Friday</span><span>6AM - 10PM</span></li>
              <li><span>Saturday</span><span>7AM - 11PM</span></li>
              <li><span>Sunday</span><span>7AM - 9PM</span></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <p>123 Newspaper Row<br />Lower Manhattan, NY 10038</p>
            <p style={{ marginTop: '1rem' }}>
              Phone: (212) 555-BREW<br />
              Email: hello@velvetsteam.com
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 The Velvet Steam. All rights reserved. Crafted with passion in New York City.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;