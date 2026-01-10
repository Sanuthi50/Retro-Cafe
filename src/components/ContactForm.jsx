import { useState } from 'react';
import '../styles/ContactForm.css';
import { MapPin, Phone, Mail } from 'lucide-react';
// ContactForm Component
const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-subtitle">We'd love to hear from you</p>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                className="form-input"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-input form-textarea"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>

          <div className="contact-info">
            <div className="info-card">
              <MapPin className="info-icon w-12 h-12" style={{ color: '#2c1810' }} />
              <h3 className="info-title">Location</h3>
              <p className="info-text">123 Newspaper Row<br />Lower Manhattan, NY 10038</p>
            </div>
            <div className="info-card">
              <Phone className="info-icon w-12 h-12" style={{ color: '#2c1810' }} />
              <h3 className="info-title">Phone</h3>
              <p className="info-text">(212) 555-BREW<br />Mon-Sun: 6AM - 10PM</p>
            </div>
            <div className="info-card">
              <Mail className="info-icon w-12 h-12" style={{ color: '#2c1810' }} />
              <h3 className="info-title">Email</h3>
              <p className="info-text">hello@velvetsteam.com<br />info@velvetsteam.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactForm;