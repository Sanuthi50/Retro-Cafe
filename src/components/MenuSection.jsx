import { useState } from 'react';
import MenuCard from './MenuCard';
import '../styles/MenuSection.css';

// MenuSection Component
const MenuSection = () => {
  const menuItems = [
    { name: 'Espresso', price: '$3.50', description: 'Bold and rich, the foundation of great coffee', image: '/Espresso.jpg' },
    { name: 'Cappuccino', price: '$4.75', description: 'Velvety smooth with perfect foam artistry', image: '/Cappuccino.jpg' },
    { name: 'Cold Brew', price: '$4.25', description: 'Slow steeped for 18 hours, smooth finish', image: '/ColdBrew.jpg' },
    { name: 'Latte', price: '$5.00', description: 'Creamy classic with your choice of milk', image: '/latte.jpg' },
    { name: 'Macchiato', price: '$4.00', description: 'Marked perfection in every sip', image: '/Macchiato.jpg' },
    { name: 'Americano', price: '$3.75', description: 'Strong and simple, pure coffee essence', image: '/Americano.jpg' },
  ];

  return (
    <>
      <section id="menu" className="menu-section">
        <div className="menu-header">
          <h2 className="menu-title">Our Coffee Menu</h2>
          <p className="menu-subtitle">Handcrafted with love and precision</p>
        </div>
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default MenuSection;