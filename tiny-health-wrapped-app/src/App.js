import React, { useState } from 'react';
import './App.css';
import LoginScreen from './components/LoginScreen';
import WrappedReadyBanner from './components/WrappedReadyBanner';
import WrappedExperience from './components/WrappedExperience';
import LandingPage from './components/LandingPage';
import DemoBanner from './components/DemoBanner';

function App() {
  const [currentScreen, setCurrentScreen] = useState('login'); // 'login', 'banner', 'wrapped', 'results'
  const [hasCompletedWrapped, setHasCompletedWrapped] = useState(false);

  const handleLogin = () => {
    setCurrentScreen('banner');
  };

  const handleStartWrapped = () => {
    setCurrentScreen('wrapped');
  };

  const handleCompleteWrapped = () => {
    console.log('handleCompleteWrapped called');
    setHasCompletedWrapped(true);
    setCurrentScreen('results');
    console.log('Set hasCompletedWrapped to true and currentScreen to results');
  };

  const handleBackToResults = () => {
    setCurrentScreen('results');
  };

  const handleRewatchWrapped = () => {
    setCurrentScreen('wrapped');
  };


  return (
    <div className={`App ${currentScreen === 'wrapped' ? 'wrapped-mode' : ''}`}>
      {currentScreen === 'login' && (
        <LoginScreen onLogin={handleLogin} />
      )}
      
      {currentScreen === 'banner' && (
        <WrappedReadyBanner onStartWrapped={handleStartWrapped} />
      )}
      
      {currentScreen === 'wrapped' && (
        <WrappedExperience 
          onBack={handleBackToResults}
          onComplete={handleCompleteWrapped}
        />
      )}
      
      {currentScreen === 'results' && (
        <>
          <LandingPage 
            onStartWrapped={hasCompletedWrapped ? handleRewatchWrapped : handleStartWrapped}
            hasCompletedWrapped={hasCompletedWrapped}
          />
          {hasCompletedWrapped && (
            <>
              {console.log('Rendering DemoBanner, hasCompletedWrapped:', hasCompletedWrapped)}
              <DemoBanner />
            </>
          )}
          {/* Temporary: Always show banner for testing */}
          <DemoBanner />
        </>
      )}
    </div>
  );
}

export default App;