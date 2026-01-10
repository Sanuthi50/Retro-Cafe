import { useEffect, useState, useRef } from 'react';
import { Coffee, ChevronLeft, ChevronRight, Flame, Bean,CupSoda } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
  const [raindrops, setRaindrops] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [particles, setParticles] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const images = [
    { 
      title: "Artisan Espresso", 
      subtitle: "Double shot perfection",
      icon: Coffee,
      description: "Handcrafted with precision",
      color: "#8B4513"
    },
    { 
      title: "Fresh Roasted", 
      subtitle: "Daily small batches",
      icon: Flame,
      description: "Roasted to perfection",
      color: "#6B3410"
    },
    { 
      title: "Premium Beans", 
      subtitle: "Sourced globally",
      icon: Bean,
      description: "Single origin excellence",
      color: "#5C3317"
    },
    { 
      title: "Cozy Atmosphere", 
      subtitle: "Your daily escape",
      icon: CupSoda,
      description: "Where stories brew",
      color: "#704214"
    }
  ];

  useEffect(() => {
    // Rain effect
    const drops = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 1 + Math.random() * 2,
      delay: Math.random() * 2
    }));
    setRaindrops(drops);

    // Newspaper particles
    const parts = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 5 + Math.random() * 15,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 5,
      rotation: Math.random() * 360,
    }));
    setParticles(parts);

    // Auto-advance carousel
    const interval = setInterval(() => {
      nextImage();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    if (!isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setTimeout(() => setIsFlipping(false), 600);
      }, 300);
    }
  };

  const prevImage = () => {
    if (!isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
        setTimeout(() => setIsFlipping(false), 600);
      }, 300);
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const CurrentIcon = images[currentImage].icon;

  return (
    <section id="home" className="hero" onMouseMove={handleMouseMove}>
      {/* Animated background gradient */}
      <div 
        className="animatedBg"
        style={{
          background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, #f5eddd 0%, #d4c5aa 50%, #c4b59a 100%)`
        }} 
      />
      
      {/* Coffee bean pattern overlay */}
      <div className="beanPattern" />
      
      {/* Vintage newspaper texture */}
      <div className="newspaperOverlay" />
      
      {/* Floating newspaper particles */}
      <div className="particleContainer">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              transform: `rotate(${particle.rotation}deg)`,
            }}
          />
        ))}
      </div>
      
      {/* Rain effect */}
      <div className="rainContainer">
        {raindrops.map(drop => (
          <div
            key={drop.id}
            className="raindrop"
            style={{
              left: `${drop.left}%`,
              animationDuration: `${drop.duration}s`,
              animationDelay: `${drop.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Ornate corner decorations */}
      <div className="cornerTL" />
      <div className="cornerTR" />
      <div className="cornerBL" />
      <div className="cornerBR" />

      <div className="heroContent">
        {/* Vintage header with ornaments */}
        <div className="headerOrnament">
          <div className="ornamentLine" />
          <Coffee className="headerIcon" />
          <div className="ornamentLine" />
        </div>

        <h1 className="heroTitle">The Velvet Steam</h1>
        
        <div className="decorativeLine">
          <span className="decorativeDot">◆</span>
          <span className="decorativeDash">━━━━━━━━━━━━━</span>
          <span className="decorativeDot">◆</span>
        </div>
        
        <p className="heroSubtitle">Est. 2024 — Manhattan, New York</p>
        <p className="tagline">"Where Every Cup Tells a Story"</p>
        
        {/* Advanced carousel with page-flip effect */}
        <div className="carouselWrapper">
          <button 
            onClick={prevImage} 
            className="carouselButton"
            disabled={isFlipping}
          >
            <ChevronLeft size={32} />
          </button>

          <div className="bookContainer">
            {/* Book spine */}
            <div className="bookSpine" />
            
            {/* Left page (previous) */}
            <div 
              className="bookPage leftPage"
              style={{
                transform: isFlipping ? 'rotateY(-15deg)' : 'rotateY(0deg)',
              }}
            >
              <div className="pageContent">
                <div className="pageNumber">
                  {currentImage > 0 ? currentImage : images.length}
                </div>
              </div>
            </div>

            {/* Right page (current) - flipping page */}
            <div 
              className="bookPage rightPage"
              style={{
                transformOrigin: 'left center',
                transform: isFlipping ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                zIndex: isFlipping ? 10 : 5,
              }}
            >
              <div className="pageContent">
                {/* Vintage photo corners */}
                <div className="photoCorner" style={{ top: '10px', left: '10px' }} />
                <div className="photoCorner" style={{ top: '10px', right: '10px', transform: 'rotate(90deg)' }} />
                <div className="photoCorner" style={{ bottom: '10px', left: '10px', transform: 'rotate(270deg)' }} />
                <div className="photoCorner" style={{ bottom: '10px', right: '10px', transform: 'rotate(180deg)' }} />
                
                <div className="imageContent">
                  <div 
                    className="iconCircle"
                    style={{
                      background: images[currentImage].color,
                    }}
                  >
                    <CurrentIcon className="largeIcon" />
                  </div>
                  
                  <h2 className="imageTitle">{images[currentImage].title}</h2>
                  <div className="titleUnderline" />
                  <p className="imageSubtitle">{images[currentImage].subtitle}</p>
                  <p className="imageDescription">{images[currentImage].description}</p>
                  
                  {/* Coffee ring stain */}
                  <div className="coffeeRing" />
                  
                  {/* Vintage stamp */}
                  <div className="vintageStamp">
                    <div className="stampBorder">
                      <Coffee size={20} />
                      <span className="stampText">Premium</span>
                    </div>
                  </div>
                </div>

                <div className="pageNumber">
                  {currentImage + 1}
                </div>
              </div>
            </div>

            {/* Page indicators as book tabs */}
            <div className="bookTabs">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (idx !== currentImage && !isFlipping) {
                      setIsFlipping(true);
                      setTimeout(() => {
                        setCurrentImage(idx);
                        setTimeout(() => setIsFlipping(false), 600);
                      }, 300);
                    }
                  }}
                  className="bookTab"
                  style={{
                    background: currentImage === idx ? '#2c1810' : '#8B7355',
                    height: currentImage === idx ? '60px' : '40px',
                  }}
                >
                  <span className="tabText">{idx + 1}</span>
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={nextImage} 
            className="carouselButton"
            disabled={isFlipping}
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Progress bar */}
        <div className="progressContainer">
          <div className="progressBar">
            <div 
              className="progressFill"
              style={{
                width: `${((currentImage + 1) / images.length) * 100}%`,
              }}
            />
          </div>
          <span className="progressText">
            {currentImage + 1} / {images.length}
          </span>
        </div>

        {/* Steam effect with CTA */}
        <div className="steamContainer">
          {[0, 1, 2, 3, 4].map(i => (
            <div 
              key={i} 
              className="steam"
              style={{
                animationDelay: `${i * 0.4}s`,
                left: `calc(50% + ${(i - 2) * 15}px)`,
              }}
            />
          ))}
         <a 
          href="#menu" 
          className="ctaButton"
          style={{ textDecoration: 'none', display: 'inline-flex' }}
        >
          <span className="ctaText">Explore Our Menu</span>
          <Coffee className="ctaIcon" />
        </a>
        </div>

        {/* Vintage newspaper footer banner */}
        <div className="vintageFooter">
          <div className="footerBorder" />
          <div className="footerContent">
            <span className="footerText">Finest Artisan Coffee Since 2024 </span>
            <div className="footerSubtext">
              <span>Fresh Daily</span>
              <span className="footerDot">•</span>
              <span>Locally Roasted</span>
              <span className="footerDot">•</span>
              <span>Ethically Sourced</span>
            </div>
          </div>
          <div className="footerBorder" />
        </div>
      </div>
    </section>
  );
};

export default Hero;