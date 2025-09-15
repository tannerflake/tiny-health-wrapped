import React from 'react';
import './EvolutionSlide.css';

const EvolutionSlide = ({ data, onNext, onPrevious, isFirst, isLast }) => {
  // const { evolution } = data;

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
    <div className="evolution-slide">
      <div className="slide-background">
        {/* Random floating flora images */}
        {randomFlora.map((flora, index) => (
          <div key={index} className={`floating-flora flora-${index + 1}`}>
            <img src={flora} alt="Flora" />
          </div>
        ))}
      </div>
      
      <div className="slide-content">
        <div className="slide-header">
          <h2 className="slide-title">My 2024 Music Evolution</h2>
          <h3 className="slide-subtitle">My May</h3>
        </div>
        
        <div className="evolution-visual">
          <div className="evolution-icon">🌊</div>
        </div>
        
        <div className="evolution-content">
          <h1 className="evolution-title">Heatwave Beach Reggaeton</h1>
          <p className="evolution-description">
            Listening to Karol G, Bad Bunny, and Maluma.
          </p>
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

export default EvolutionSlide;
