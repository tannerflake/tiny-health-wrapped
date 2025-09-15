import React from 'react';
import './TwinsSlide.css';

const TwinsSlide = ({ data, onNext, onPrevious, isFirst, isLast }) => {
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
    <div className="twins-slide">
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
          <h2 className="slide-title">You're Gut Twins With…</h2>
        </div>
        
        <div className="twins-visual">
          <div className="twins-icon">👯</div>
        </div>
        
        <div className="twins-content">
          <h1 className="twins-header">
            You're microbiome twins with 6.2% of other Tiny Health users
          </h1>
          <h3 className="twins-subheader">
            Your gut is in good company
          </h3>
          <p className="twins-description">
            Users with similar profiles tend to report better mood, fewer cravings, and less bloating. You're in a great spot to optimize further.
          </p>
          <div className="tagline">
            Your gut is part of a bigger community.
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

export default TwinsSlide;
