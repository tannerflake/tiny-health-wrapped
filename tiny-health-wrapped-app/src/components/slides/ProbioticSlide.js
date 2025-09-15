import React from 'react';
import './ProbioticSlide.css';

const ProbioticSlide = ({ data, onNext, onPrevious, isFirst, isLast }) => {
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
    <div className="probiotic-slide">
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
          <h2 className="slide-title">Probiotic Scorecard</h2>
        </div>
        
        <div className="probiotic-visual">
          <div className="probiotic-icon">🦠</div>
        </div>
        
        <div className="probiotic-content">
          <h1 className="probiotic-header">
            You're Low in Key Probiotics
          </h1>
          <h3 className="probiotic-subheader">
            Your levels of Lactobacillus and Bifidobacterium are low
          </h3>
          <p className="probiotic-description">
            These strains are foundational for gut health — they help produce SCFAs and regulate the immune system. Consider foods like kefir, yogurt, and kimchi to naturally increase your levels.
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

export default ProbioticSlide;
