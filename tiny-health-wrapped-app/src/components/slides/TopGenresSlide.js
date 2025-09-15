import React from 'react';
import './TopGenresSlide.css';

const TopGenresSlide = ({ data, onNext, onPrevious, isFirst, isLast }) => {
  const { genres } = data;

  return (
    <div className="genres-slide">
      <div className="slide-background">
        <div className="background-pattern"></div>
      </div>
      
      <div className="slide-content">
        <div className="slide-header">
          <h2 className="slide-title">Your top genres</h2>
        </div>
        
        <div className="burger-visual">
          <div className="burger">
            <div className="bun top-bun"></div>
            <div className="ingredient hip-hop">{genres[0]}</div>
            <div className="ingredient reggaeton">{genres[1]}</div>
            <div className="ingredient indie">{genres[2]}</div>
            <div className="ingredient pop">{genres[3]}</div>
            <div className="ingredient rap">{genres[4]}</div>
            <div className="bun bottom-bun"></div>
          </div>
        </div>
        
        <div className="genres-content">
          <h1 className="genres-title">Delicious.</h1>
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

export default TopGenresSlide;
