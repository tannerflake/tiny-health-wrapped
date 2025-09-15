import React from 'react';
import './RetestSlide.css';

const RetestSlide = ({ data, onNext, onPrevious, isFirst, isLast }) => {
  // const { name } = data;

  return (
    <div className="retest-slide">
      <div className="slide-background">
        <div className="background-pattern"></div>
        <div className="floating-icons">
          <div className="icon icon-1">🔄</div>
          <div className="icon icon-2">📈</div>
          <div className="icon icon-3">🎯</div>
        </div>
      </div>
      
      <div className="slide-content">
        <div className="slide-header">
          <h2 className="slide-title">Your gut health is always evolving</h2>
        </div>
        
        <div className="retest-visual">
          <div className="retest-icon">🧬</div>
          <div className="progress-rings">
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <div className="ring ring-3"></div>
          </div>
        </div>
        
        <div className="retest-content">
          <h1 className="retest-title">
            Don't let your story end here
          </h1>
          <p className="retest-description">
            Come back in 6 months and we'll show you how your gut health has changed, improved, and evolved.
          </p>
        </div>
        
        <div className="retest-actions">
          <button className="retest-btn primary">
            Schedule Re-Test
          </button>
          <button className="retest-btn secondary">
            Remind Me Later
          </button>
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

export default RetestSlide;
