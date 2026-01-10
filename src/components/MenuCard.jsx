import { useState } from 'react';
import '../styles/MenuCard.css';

// MenuCard Component
const MenuCard = ({ name, price, description, image }) => {
  return (
    <>
      <div className="menu-card">
        <div className="menu-card-image">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
            style={{ borderRadius: '4px' }} 
          />
        </div>
        <h3 className="menu-card-title">{name}</h3>
        <p className="menu-card-price">{price}</p>
        <p className="menu-card-desc">{description}</p>
      </div>
    </>
  );
};
export default MenuCard;