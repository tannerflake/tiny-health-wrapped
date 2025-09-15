import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './WrappedExperience.css';
import ArchetypeSlide from './slides/ArchetypeSlide';
import PercentileSlide from './slides/PercentileSlide';
import KeyInsightSlide from './slides/KeyInsightSlide';
import MinutesListenedSlide from './slides/MinutesListenedSlide';
import TopGenresSlide from './slides/TopGenresSlide';
import EvolutionSlide from './slides/EvolutionSlide';
import RetestSlide from './slides/RetestSlide';
import ShareSlide from './slides/ShareSlide';

const WrappedExperience = ({ onBack, onComplete }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample data for the wrapped experience
  const userData = {
    name: "Madeline",
    archetype: "The Symbiotic Stoic",
    archetypeDescription: "You've got high diversity, low inflammation, and a rare strain that sets you apart. You're the rare kombucha in a fridge full of colas.",
    diversityPercentile: 86,
    akkermansiaLevel: "High",
    akkermansiaDescription: "This strain is linked to better glucose control and improved gut barrier function.",
    minutesListened: 63901,
    topGenres: ["Hip-Hop", "Reggaeton", "Alternative Indie", "Pop", "Rap"],
    evolution: {
      january: "After Hours Football Rap",
      may: "Heatwave Beach Reggaeton",
      october: "Pink Pilates Princess Strut Pop"
    }
  };

  const slides = [
    { component: ArchetypeSlide, data: { archetype: userData.archetype, description: userData.archetypeDescription } },
    { component: PercentileSlide, data: { percentile: userData.diversityPercentile } },
    { component: KeyInsightSlide, data: { level: userData.akkermansiaLevel, description: userData.akkermansiaDescription } },
    { component: MinutesListenedSlide, data: { minutes: userData.minutesListened } },
    { component: TopGenresSlide, data: { genres: userData.topGenres } },
    { component: EvolutionSlide, data: { evolution: userData.evolution } },
    { component: RetestSlide, data: { name: userData.name } },
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

        {/* Left Navigation Arrow */}
        {currentSlide > 0 && (
          <button className="nav-arrow nav-arrow-left" onClick={handlePrevious}>
            ←
          </button>
        )}

        {/* Slide Content */}
        <div className="slide-container" onClick={handleNext}>
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

        {/* Right Navigation Arrow */}
        {currentSlide < slides.length - 1 && (
          <button className="nav-arrow nav-arrow-right" onClick={handleNext}>
            →
          </button>
        )}
      </div>
    </div>
  );
};

export default WrappedExperience;
