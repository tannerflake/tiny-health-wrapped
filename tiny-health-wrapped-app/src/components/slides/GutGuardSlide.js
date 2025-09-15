import React from 'react';
import './GutGuardSlide.css';

const GutGuardSlide = ({ data, onNext, onPrevious, isFirst, isLast }) => {
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
    <div className="gut-guard-slide">
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
          <h2 className="slide-title">Your Gut Guard Score</h2>
        </div>
        
        <div className="guard-visual">
          <div className="guard-icon">🛡️</div>
        </div>
        
        <div className="guard-content">
          <h1 className="guard-header">
            Gut Barrier Strength: ⚠️ Medium-Low
          </h1>
          <h3 className="guard-subheader">
            Your gut lining may be a little leaky
          </h3>
          <p className="guard-description">
            Markers suggest your gut lining is more permeable than average. This can be improved by managing stress, reducing ultra-processed foods, and increasing polyphenol-rich plants (like berries and olive oil).
          </p>
          <div className="insight-tip">
            This is commonly called "leaky gut" — and it's reversible.
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

export default GutGuardSlide;
