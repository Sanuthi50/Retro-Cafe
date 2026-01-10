import React, { useState, useEffect } from 'react';
import { Coffee, Cloud, Droplets, Clock, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import About from '../components/About';

// Main Home Page Component
const Home = () => {
  return (
    <div style={{ fontFamily: 'Georgia, serif' }}>
      <Navbar />
      <Hero />
      <MenuSection />
      <Gallery />
      <About />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;