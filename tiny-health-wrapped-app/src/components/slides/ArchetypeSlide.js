import React from 'react';
import './ArchetypeSlide.css';

const ArchetypeSlide = ({ data, onNext, onPrevious, isFirst, isLast }) => {
  const { archetype, description } = data;

  // Flora images for floating background
  const floraImages = [
    '/Individual flora images (web)/Blue 1.png',
    '/Individual flora images (web)/Blue 2.png',
    '/Individual flora images (web)/Green 1.png',
    '/Individual flora images (web)/Green 2.png',
    '/Individual flora images (web)/Green 3.png',
    '/Individual flora images (web)/Red 1.png',
    '/Individual flora images (web)/Red 2.png',
    '/Individual flora images (web)/Red 3.png',
    '/Individual flora images (web)/Yellow 1.png'
  ];

  // Generate random flora images for this slide
  const getRandomFlora = () => {
    const shuffled = [...floraImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6); // Show 6 random flora images
  };

  const randomFlora = getRandomFlora();

  return (
        <div className="archetype-slide">
          <div className="slide-background">
            <div className="floating-logo">
              <img src="/Tiny+Health+-+Dark+(full).webp" alt="Tiny Health" />
            </div>
            {/* Random floating flora images */}
            {randomFlora.map((flora, index) => (
              <div key={index} className={`floating-flora flora-${index + 1}`}>
                <img src={flora} alt="Flora" />
              </div>
            ))}
          </div>
      
      <div className="slide-content">
        <div className="slide-header">
          <h2 className="slide-title">Me in 2023:</h2>
        </div>
        
        <div className="archetype-visual">
          <div className="archetype-icon">🧬</div>
          <div className="archetype-pattern">
            <div className="pattern-dot"></div>
            <div className="pattern-dot"></div>
            <div className="pattern-dot"></div>
            <div className="pattern-dot"></div>
            <div className="pattern-dot"></div>
          </div>
        </div>
        
        <div className="archetype-content">
          <h1 className="archetype-name">{archetype}</h1>
          <p className="archetype-description">{description}</p>
        </div>
      </div>
      
      <div className="slide-footer">
              <button className="share-story-btn">
                <span>📤</span>
                <span>Share your results</span>
              </button>
          <div className="branding">
            <span className="brand-text">tinyhealth.com</span>
          </div>
        </div>
    </div>
  );
};

export default ArchetypeSlide;
