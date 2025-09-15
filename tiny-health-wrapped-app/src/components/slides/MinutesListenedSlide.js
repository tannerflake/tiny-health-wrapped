import React from 'react';
import './MinutesListenedSlide.css';

const MinutesListenedSlide = ({ data, onNext, onPrevious, isFirst, isLast }) => {
  const { minutes } = data;

  return (
    <div className="minutes-slide">
      <div className="slide-background">
      </div>
      
      <div className="slide-content">
        <div className="slide-header">
          <h2 className="slide-title">All that listening added up.</h2>
        </div>
        
        <div className="minutes-visual">
          <div className="minutes-number">{minutes.toLocaleString()}</div>
          <div className="minutes-label">minutes</div>
        </div>
        
        <div className="minutes-content">
          <p className="minutes-description">
            In 2023, your total play time was {minutes.toLocaleString()} minutes. 
            That's more than 65% of other listeners in New York City.
          </p>
        </div>
        
        <div className="comparison-stats">
          <div className="stat-item">
            <div className="stat-number">65%</div>
            <div className="stat-label">vs NYC listeners</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">44</div>
            <div className="stat-label">days of listening</div>
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

export default MinutesListenedSlide;
