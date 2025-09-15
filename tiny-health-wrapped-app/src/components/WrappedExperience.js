import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './WrappedExperience.css';
import ArchetypeSlide from './slides/ArchetypeSlide';
import PercentileSlide from './slides/PercentileSlide';
import KeyInsightSlide from './slides/KeyInsightSlide';
import GutGoalSlide from './slides/GutGoalSlide';
import OvergrowthSlide from './slides/OvergrowthSlide';
import GutGuardSlide from './slides/GutGuardSlide';
import InflammationSlide from './slides/InflammationSlide';
import ProbioticSlide from './slides/ProbioticSlide';
import TwinsSlide from './slides/TwinsSlide';
import ShareSlide from './slides/ShareSlide';

const WrappedExperience = ({ onBack, onComplete }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample data for the wrapped experience
  const userData = {
    name: "Madeline",
    archetype: "The Fermentation Front-Runner",
    archetypeDescription: "Your gut is loaded with fermenters like Faecalibacterium and Roseburia, producing high levels of short-chain fatty acids — the VIP fuel for your gut lining. You also respond especially well to prebiotics, meaning fibers don't just pass through — they power up your ecosystem.\n\nYou're not just well-fed — your gut is in gear and taking the lead.",
    diversityPercentile: 86,
    akkermansiaLevel: "High",
    akkermansiaDescription: "This strain is linked to better glucose control and improved gut barrier function."
  };

  const slides = [
    { component: ArchetypeSlide, data: { archetype: userData.archetype, description: userData.archetypeDescription } },
    { component: PercentileSlide, data: { percentile: userData.diversityPercentile } },
    { component: KeyInsightSlide, data: { level: userData.akkermansiaLevel, description: userData.akkermansiaDescription } },
    { component: GutGoalSlide, data: {} },
    { component: OvergrowthSlide, data: {} },
    { component: GutGuardSlide, data: {} },
    { component: InflammationSlide, data: {} },
    { component: ProbioticSlide, data: {} },
    { component: TwinsSlide, data: {} },
    { component: ShareSlide, data: { name: userData.name } }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // Last slide - complete the wrapped experience
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrevious();
    } else if (e.key === 'Escape') {
      onBack();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, handleKeyPress]);

  const CurrentSlideComponent = slides[currentSlide].component;
  const slideData = slides[currentSlide].data;

  return (
    <div className="wrapped-experience">
      {/* Mobile Container */}
      <div className="mobile-container">
        {/* Progress Breadcrumbs */}
        <div className="progress-breadcrumbs">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`breadcrumb-line ${index <= currentSlide ? 'active' : ''}`}
            />
          ))}
        </div>

        {/* Slide Content with Click Zones */}
        <div className="slide-container">
          {/* Left Click Zone (40%) - Go Back */}
          {currentSlide > 0 && (
            <div 
              className="click-zone click-zone-left" 
              onClick={handlePrevious}
              title="Go back"
            />
          )}
          
          {/* Right Click Zone (60%) - Go Forward */}
          <div 
            className="click-zone click-zone-right" 
            onClick={handleNext}
            title="Continue"
          />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="slide-content"
            >
              <CurrentSlideComponent 
                data={slideData} 
                onNext={handleNext}
                onPrevious={handlePrevious}
                isFirst={currentSlide === 0}
                isLast={currentSlide === slides.length - 1}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default WrappedExperience;
