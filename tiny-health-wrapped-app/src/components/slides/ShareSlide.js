import React, { useState } from 'react';
import { downloadAllSlides, copyLink } from '../../utils/downloadSlides';
import './ShareSlide.css';

const ShareSlide = ({ data, onNext, onPrevious, isFirst, isLast }) => {
  // const { name } = data;
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleDownloadAllSlides = async () => {
    await downloadAllSlides();
    setHasDownloaded(true);
  };

  const handleButtonClick = () => {
    if (!hasDownloaded) {
      handleDownloadAllSlides();
    } else {
      onNext();
    }
  };

  const handleCopyLink = async () => {
    await copyLink(setShowToast);
  };

  return (
    <div className="share-slide">
      <div className="slide-background">
        <div className="background-celebration">
          <div className="confetti confetti-1">
            <img src="/Individual flora images (web)/Red 1.png" alt="Flora" />
          </div>
          <div className="confetti confetti-2">
            <img src="/Individual flora images (web)/Green 2.png" alt="Flora" />
          </div>
          <div className="confetti confetti-3">
            <img src="/Individual flora images (web)/Blue 1.png" alt="Flora" />
          </div>
          <div className="confetti confetti-4">
            <img src="/Individual flora images (web)/Yellow 1.png" alt="Flora" />
          </div>
          <div className="confetti confetti-5">
            <img src="/Individual flora images (web)/Red 2.png" alt="Flora" />
          </div>
        </div>
      </div>
      
      <div className="slide-content">
        <div className="slide-header">
          <h2 className="slide-title">Thanks for exploring your gut health story!</h2>
        </div>
        
        {!hasDownloaded && (
          <div className="share-visual" onClick={handleButtonClick}>
            <div className="share-phone">
              <div className="phone-screen">
                <div className="phone-content">
                  <div className="phone-brand">
                    <img src="/Instagram Icon.png" alt="Instagram" />
                    <img src="/tiktok_PNG2.png" alt="TikTok" />
                  </div>
                  <div className="phone-text">Tap here to download!</div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {hasDownloaded && (
          <div className="share-visual">
            <div className="microscope-icon">🔬</div>
          </div>
        )}
        
        <div className="share-content">
          {!hasDownloaded && (
            <h1 className="share-title">
              Share your gut story with your friends
            </h1>
          )}
          <p className="share-description">
            {hasDownloaded 
              ? "Check out your data to do a deeper dive into your gut microbiome"
              : "Download your personalized gut health summary and show off your gut health on social media!"
            }
          </p>
        </div>
        
        <div className="share-actions">
          <button className="cta-btn primary" onClick={handleButtonClick}>
            <span>{hasDownloaded ? "Let's Go!" : "Download ➡️"}</span>
          </button>
          {!hasDownloaded && (
            <button className="cta-btn secondary" onClick={handleCopyLink}>
              <span>🔗</span>
              <span>Get a Link</span>
            </button>
          )}
        </div>
      </div>
      
      <div className="slide-footer">
        <div className="branding">
          <span className="brand-text">tinyhealth.com</span>
        </div>
      </div>
      
      {/* Toast Notification */}
      {showToast && (
        <div className="toast-notification">
          <span>Link copied!</span>
        </div>
      )}
    </div>
  );
};

export default ShareSlide;
