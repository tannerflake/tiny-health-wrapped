import React from 'react';
import './OvergrowthSlide.css';

const OvergrowthSlide = ({ data, onNext, onPrevious, isFirst, isLast }) => {
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
    <div className="overgrowth-slide">
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
          <h2 className="slide-title">The Overgrowth Radar</h2>
        </div>
        
        <div className="overgrowth-visual">
          <div className="overgrowth-icon">🌈</div>
        </div>
        
        <div className="overgrowth-content">
          <h1 className="overgrowth-header">
            One strain is dominating…
          </h1>
          <h3 className="overgrowth-subheader">
            Your Bacteroides levels are unusually high
          </h3>
          <p className="overgrowth-description">
            When one bacteria species overgrows, it can throw off your gut balance. Right now, your levels of Bacteroides are higher than 92% of other users. This could be linked to stress, high animal protein intake, or low fiber.
          </p>
          <div className="tagline">
            Balance is the name of the gut game.
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

export default OvergrowthSlide;
