import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './WrappedReadyBanner.css';

const WrappedReadyBanner = ({ onStartWrapped }) => {
  const [showContent, setShowContent] = useState(false);

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

  // Generate random flora images for this screen
  const getRandomFlora = () => {
    const shuffled = [...floraImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6); // Show 6 random flora images
  };

  const randomFlora = getRandomFlora();

  useEffect(() => {
    // Stagger the animations
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wrapped-banner">
      <div className="banner-background">
        <div className="bg-gradient"></div>
        {/* Random floating flora images */}
        {randomFlora.map((flora, index) => (
          <div key={index} className={`floating-flora flora-${index + 1}`}>
            <img src={flora} alt="Flora" />
          </div>
        ))}
      </div>

      <div className="banner-content">
        <motion.div
          className="gift-icon"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 15,
            delay: 0.2
          }}
        >
          🎁
        </motion.div>

        <AnimatePresence>
          {showContent && (
            <motion.div
              className="banner-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="banner-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Your Gut Health Wrapped is ready!
              </motion.h1>

              <motion.p
                className="banner-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Discover your personalized microbiome story and see how your gut health journey unfolded this year.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showContent && (
            <motion.div
              className="banner-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <motion.button
                className="wrapped-cta-btn"
                onClick={onStartWrapped}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
              >
                View My Wrapped
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        className="banner-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="branding">
          <span className="brand-text">tinyhealth.com</span>
        </div>
      </motion.div>
    </div>
  );
};

export default WrappedReadyBanner;
