import React, { useEffect, useRef, useState } from 'react';

export const Rocket: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [starCount, setStarCount] = useState(5);

  // Determine star count based on window width
  useEffect(() => {
    const updateStarCount = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setStarCount(3); // Mobile
      } else if (width <= 1920) {
        setStarCount(5); // 15 inch and similar
      } else {
        setStarCount(8); // 27 inch and larger
      }
    };

    updateStarCount();
    window.addEventListener('resize', updateStarCount);

    return () => {
      window.removeEventListener('resize', updateStarCount);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const createStar = () => {
      const starWrapper = document.createElement('div');
      starWrapper.className = 'rocket-star';
      
      // Create horizontal bar
      const horizontal = document.createElement('div');
      horizontal.className = 'rocket-star-horizontal';
      
      // Create vertical bar
      const vertical = document.createElement('div');
      vertical.className = 'rocket-star-vertical';
      
      // Create center circle
      const center = document.createElement('div');
      center.className = 'rocket-star-center';
      
      starWrapper.appendChild(horizontal);
      starWrapper.appendChild(vertical);
      starWrapper.appendChild(center);
      
      // Random positioning - keep stars within safe bounds (10% to 90% to avoid cutoff)
      // More dispersed distribution
      const leftPos = 10 + Math.random() * 80;
      const topPos = 10 + Math.random() * 80;
      
      starWrapper.style.left = leftPos + '%';
      starWrapper.style.top = topPos + '%';
      starWrapper.style.animationDelay = Math.random() * 2 + 's';
      
      // Random scale for variety - more varied distribution
      const scale = 0.4 + Math.random() * 0.8;
      starWrapper.style.transform = `scale(${scale})`;
      
      container.appendChild(starWrapper);
    };

    for (let i = 0; i < starCount; i++) {
      createStar();
    }

    // Cleanup function to remove stars
    return () => {
      const stars = container.querySelectorAll('.rocket-star');
      stars.forEach(star => star.remove());
    };
  }, [starCount]);

  return (
    <div className="space-container" ref={containerRef}>
      <div className="rocket">
        <div className="rocket-body">
          <div className="rocket-main">
            <div className="rocket-nose"></div>
            <div className="rocket-window">
              <div className="rocket-window-highlight"></div>
            </div>
            <div className="rocket-stripe"></div>
            <div className="rocket-booster"></div>
            <div className="rocket-thruster"></div>
          </div>
          <div className="rocket-wing left"></div>
          <div className="rocket-wing right"></div>
          <div className="rocket-flame">
            <div className="flame-part"></div>
            <div className="flame-part"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

