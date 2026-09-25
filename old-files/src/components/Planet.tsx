import React from 'react';

export const Planet: React.FC = () => {
  return (
    <div className="planet-scene">
      <div className="stars-container">
        <div className="stars">
          <div></div><div></div><div></div>
        </div>
        <div className="stars">
          <div></div><div></div><div></div>
        </div>
        <div className="stars">
          <div></div><div></div><div></div>
        </div>
        <div className="stars">
          <div></div><div></div><div></div>
        </div>
        <div className="stars">
          <div></div><div></div><div></div>
        </div>
        <div className="stars">
          <div></div><div></div><div></div>
        </div>

        <div className="stars-2"></div>
        <div className="stars-2"></div>
      </div>

      <div className="moon"></div>

      <div className="planet-container">
        <div className="planet-ring2"></div>
        <div className="planet"></div>	
        <div className="shine"></div>
        <div className="shine-2"></div>
        <div className="planet-ring"></div>
        <div className="planet-crater"></div>
      </div>
    </div>
  );
};

