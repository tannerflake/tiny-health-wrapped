import React from 'react';
import './InflammationSlide.css';

const InflammationSlide = ({ data, onNext, onPrevious, isFirst, isLast }) => {
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
    <div className="inflammation-slide">
      <div className="slide-background">
        <div className="background-gradient"></div>
        {/* Random floating flora images */}
        {randomFlora.map((flora, index) => (
          <div key={index} className={`floating-flora flora-${index + 1}`}>
            <img src={flora} alt="Flora" />
          </div>
        ))}
      </div>
      
      <div className="slide-content">
        <div className="slide-header">
          <h2 className="slide-title">Inflammation Insight</h2>
        </div>
        
        <div className="inflammation-visual">
          <div className="inflammation-icon">🔥</div>
        </div>
        
        <div className="inflammation-content">
          <h1 className="inflammation-header">
            Low Inflammation Markers — Nice!
          </h1>
          <h3 className="inflammation-subheader">
            You're in the calm zone
          </h3>
          <p className="inflammation-description">
            Your gut doesn't show signs of active inflammation. That's great news — low inflammation is linked to better digestion, clearer skin, and better energy. Let's keep it that way.
          </p>
          <div className="tagline">
            Stay cool, microbiome-wise.
          </div>
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

export default InflammationSlide;
