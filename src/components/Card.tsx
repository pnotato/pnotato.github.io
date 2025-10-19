import React from 'react';

interface CardProps {
  label: string;
  image: string;
  link?: string;
}

export const Card: React.FC<CardProps> = ({ label, image, link = '#' }) => {
  return (
    <div className="card">
      <div className="card-label">
        <div className="card-label-bg"></div>
        <a href={link} className="card-label-text button">{label}</a>
      </div>
      <div className="card-image">
        <img src={image} alt={label} loading="lazy" />
      </div>
    </div>
  );
};

