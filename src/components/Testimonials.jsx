import '../styles/Testimonials.css';

import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';


const Testimonials = () => {
  const testimonials = [
    { name: 'Sarah Mitchell', text: 'The perfect spot for a rainy afternoon. The atmosphere is unmatched.', rating: 5 },
    { name: 'James Chen', text: 'Best espresso in Manhattan. Period.', rating: 5 },
    { name: 'Emily Rodriguez', text: 'Feels like stepping back in time. Love the vintage newspaper aesthetic.', rating: 5 },
  ];

  return (
    <>
      <section id="testimonials" className="testimonials-section">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What Our Patrons Say</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <Quote className="quote-icon w-16 h-16" />
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">— {testimonial.name}</p>
              <div className="testimonial-rating">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#2c1810' }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;