import React from 'react';
import './PercentileSlide.css';

const PercentileSlide = ({ data, onNext, onPrevious, isFirst, isLast }) => {
  const { percentile } = data;

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
    <div className="percentile-slide">
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
          <h2 className="slide-title">Your Microbiome Diversity</h2>
        </div>
        
        <div className="percentile-content">
          <div className="percentile-number">{percentile}</div>
          <div className="percentile-label">percentile</div>
          <h1 className="percentile-title">
            You're in the {percentile}th percentile for microbiome diversity
          </h1>
          <p className="percentile-description">
            Your gut microbiome shows excellent diversity, which is associated with better overall health and resilience.
          </p>
        </div>
        
        <div className="comparison-bar">
          <div className="bar-label">vs. other Tiny Health users</div>
          <div className="bar-container">
            <div className="bar-fill" style={{ width: `${percentile}%` }}></div>
            <div className="bar-marker" style={{ left: `${percentile}%` }}>
              <div className="marker-dot"></div>
              <div className="marker-label">You</div>
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

export default PercentileSlide;
