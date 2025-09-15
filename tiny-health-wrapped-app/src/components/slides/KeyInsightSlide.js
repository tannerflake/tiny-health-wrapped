import React from 'react';
import './KeyInsightSlide.css';

const KeyInsightSlide = ({ data, onNext, onPrevious, isFirst, isLast }) => {
  const { level, description } = data;

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
    <div className="key-insight-slide">
      <div className="slide-background">
        <div className="background-pattern"></div>
        {/* Random floating flora images */}
        {randomFlora.map((flora, index) => (
          <div key={index} className={`floating-flora flora-${index + 1}`}>
            <img src={flora} alt="Flora" />
          </div>
        ))}
      </div>
      
      <div className="slide-content">
        <div className="slide-header">
          <h2 className="slide-title">Key Insight</h2>
        </div>
        
        <div className="insight-visual">
          <div className="insight-icon">🧬</div>
          <div className="level-badge">{level}</div>
        </div>
        
        <div className="insight-content">
          <h1 className="insight-title">
            You're high in Akkermansia!
          </h1>
          <p className="insight-description">
            {description}
          </p>
        </div>
        
        <div className="insight-details">
          <div className="detail-card">
            <div className="detail-icon">💪</div>
            <div className="detail-text">
              <h3>Gut Barrier</h3>
              <p>Strengthens intestinal lining</p>
            </div>
          </div>
          <div className="detail-card">
            <div className="detail-icon">🍯</div>
            <div className="detail-text">
              <h3>Glucose Control</h3>
              <p>Helps regulate blood sugar</p>
            </div>
          </div>
          <div className="detail-card">
            <div className="detail-icon">🛡️</div>
            <div className="detail-text">
              <h3>Inflammation</h3>
              <p>Reduces chronic inflammation</p>
            </div>
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

export default KeyInsightSlide;
