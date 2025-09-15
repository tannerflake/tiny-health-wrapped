import React from 'react';
import html2canvas from 'html2canvas';
import './ShareSlide.css';

const ShareSlide = ({ data, onNext, onPrevious, isFirst, isLast }) => {
  // const { name } = data;

  const handleDownloadSlide = async () => {
    try {
      const element = document.querySelector('.share-slide');
      const canvas = await html2canvas(element, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
        allowTaint: true
      });
      
      const link = document.createElement('a');
      link.download = 'my-gut-health-wrapped.png';
      link.href = canvas.toDataURL();
      link.click();
    } catch (error) {
      console.error('Error downloading slide:', error);
    }
  };

  return (
    <div className="share-slide">
      <div className="slide-background">
        <div className="background-celebration">
          <div className="confetti confetti-1">🎉</div>
          <div className="confetti confetti-2">🎊</div>
          <div className="confetti confetti-3">✨</div>
          <div className="confetti confetti-4">🌟</div>
          <div className="confetti confetti-5">🎈</div>
        </div>
      </div>
      
      <div className="slide-content">
        <div className="slide-header">
          <h2 className="slide-title">Thanks for exploring your gut health story!</h2>
        </div>
        
        <div className="share-visual">
          <div className="share-icon">📱</div>
          <div className="share-phone">
            <div className="phone-screen">
              <div className="phone-content">
                <div className="phone-brand">🧬</div>
                <div className="phone-text">My Gut Health Wrapped</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="share-content">
          <h1 className="share-title">
            Share your story with friends
          </h1>
          <p className="share-description">
            Download your personalized gut health summary and share it on social media to inspire others to take care of their microbiome.
          </p>
        </div>
        
        <div className="share-actions">
          <button className="cta-btn primary" onClick={onNext}>
            <span>🔬</span>
            <span>Let's dive deeper into your results!</span>
          </button>
        </div>
      </div>
      
      <div className="slide-footer">
        <div className="branding">
          <span className="brand-text">tinyhealth.com</span>
        </div>
      </div>
    </div>
  );
};

export default ShareSlide;
