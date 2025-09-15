import React from 'react';
import './DemoBanner.css';

const DemoBanner = () => {
  console.log('DemoBanner component rendering');
  
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="demo-banner">
      <div className="banner-content">
        <span className="banner-text">
          <span className="whisper">Psssst!</span> This is just a demo. If you want to restart the experience from login, <button className="refresh-link" onClick={handleRefresh}>refresh your page</button>.
        </span>
      </div>
    </div>
  );
};

export default DemoBanner;
