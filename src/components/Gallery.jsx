import { useState, useEffect, useRef } from 'react';
import { Coffee, X, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const galleryImages = [
    {
      id: 1,
      title: 'Morning Brew',
      description: 'Start your day with our signature blend',
      image: '/brew.jpg' 
    },
    {
      id: 2,
      title: 'Latte Art',
      description: 'Every cup is a masterpiece',
      image: '/latteart.jpg' 
    },
    {
      id: 3,
      title: 'Cozy Corner',
      description: 'Your favorite reading spot',
      image: '/cozycorner.jpg'
    },
    {
      id: 4,
      title: 'Fresh Pastries',
      description: 'Baked fresh daily',
      image: '/pastry.jpg'
    },
    {
      id: 5,
      title: 'Bean Selection',
      description: 'Sourced from around the world',
      image: '/Coffee & beans.jpg' 
    },
    {
      id: 6,
      title: 'Craftsmanship',
      description: 'The art of coffee making',
      image: '/workstation.jpg' 
    }
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...galleryImages, ...galleryImages];

  const openLightbox = (index) => {
    setSelectedImage(index % galleryImages.length);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (selectedImage === null) return;
    const newIndex = (selectedImage + direction + galleryImages.length) % galleryImages.length;
    setSelectedImage(newIndex);
  };

  const floatingBeans = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 15 + Math.random() * 10,
    size: 20 + Math.random() * 30
  }));

  return (
    <>

      <section id="gallery" className="gallery-section">
        {/* Floating Coffee Beans */}
        {floatingBeans.map((bean) => (
          <Coffee
            key={bean.id}
            className="floating-bean"
            size={bean.size}
            style={{
              left: `${bean.left}%`,
              animationDelay: `${bean.delay}s`,
              animationDuration: `${bean.duration}s`
            }}
          />
        ))}
        
        {/* Steam Effects */}
        <div className="steam-container">
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={i}
              className="steam"
              style={{
                left: `${(i * 7) % 100}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        <div className="gallery-header">
          <h2 className="gallery-title">Our Gallery</h2>
          <p className="gallery-subtitle">Moments worth savoring</p>
        </div>
        
        <div className="gallery-carousel-wrapper">
          <div 
            className={`gallery-carousel-track ${isPaused ? 'paused' : ''}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedImages.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="gallery-item"
                onClick={() => openLightbox(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="gallery-image-container">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="gallery-image"
                  />
                  <div className="gallery-overlay">
                    <h3 className="gallery-title-text">{item.title}</h3>
                    <p className="gallery-description">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className="pause-button"
            onClick={() => setIsPaused(!isPaused)}
          >
            {isPaused ? 'Resume Carousel' : 'Pause Carousel'}
          </button>
        </div>

        {selectedImage !== null && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}>
                <X size={24} />
              </button>
              
              <button className="lightbox-nav lightbox-nav-left" onClick={() => navigateImage(-1)}>
                <ChevronLeft size={24} />
              </button>
              
              <button className="lightbox-nav lightbox-nav-right" onClick={() => navigateImage(1)}>
                <ChevronRight size={24} />
              </button>
              
              <div className="lightbox-image-wrapper">
                <img 
                  src={galleryImages[selectedImage].image} 
                  alt={galleryImages[selectedImage].title}
                  className="lightbox-image"
                />
              </div>
              
              <div className="lightbox-details">
                <h3 className="lightbox-title">{galleryImages[selectedImage].title}</h3>
                <p className="lightbox-description">{galleryImages[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Gallery;