import React, { useState } from 'react';
import { downloadAllSlides, copyLink } from '../../utils/downloadSlides';
import './GutGoalSlide.css';

const GutGoalSlide = ({ data, onNext, onPrevious, isFirst, isLast }) => {
  const [showToast, setShowToast] = useState(false);
  
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

  const handleTinyPlusClick = () => {
    window.open('https://www.tinyhealth.com/memberships/tiny-adult-membership', '_blank');
  };

  const handleShareClick = async () => {
    console.log('Share button clicked, starting download...');
    await downloadAllSlides(setShowToast);
    console.log('Download completed, toast should show');
  };

  return (
    <div className="gut-goal-slide">
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
          <h2 className="slide-title">Your Gut Goal for 2025</h2>
        </div>
        
        <div className="goal-visual">
          <div className="goal-icon">🎯</div>
        </div>
        
        <div className="goal-content">
          <h1 className="goal-subheader">
            Balance your short-chain fatty acids (SCFAs)
          </h1>
          <p className="goal-description">
            Your SCFAs are a bit low — and these are crucial for gut lining integrity, mood regulation, and energy production.
          </p>
          <p className="goal-description">
            Focus on adding prebiotic fibers to your diet (think: garlic, onions, oats) and check back in 6 months to track improvement.
          </p>
        </div>
        
        <div className="goal-actions">
          <button className="cta-btn primary" onClick={handleTinyPlusClick}>
            <span>Sign up for Tiny+ for Adults to get a discount on your next test!</span>
          </button>
        </div>
      </div>
      
      <div className="slide-footer">
        <button className="share-story-btn" onClick={handleShareClick}>
          <span>📤</span>
          <span>Share your results</span>
        </button>
        <div className="branding">
          <span className="brand-text">tinyhealth.com</span>
        </div>
      </div>
      
      {/* Toast Notification */}
      {showToast && (
        <div className="toast-notification">
          <span>Downloaded!</span>
        </div>
      )}
    </div>
  );
};

export default GutGoalSlide;
