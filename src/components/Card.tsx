import React from 'react';

interface CardProps {
  label: string;
  image: string;
  link?: string;
  description?: string;
  tags?: string[];
}

// Technology color mapping with muted, creative colors and better contrast
const getTechnologyColor = (tag: string): string => {
  const tagLower = tag.toLowerCase().replace(/\s+/g, '');
  
  const colorMap: { [key: string]: string } = {
    // JavaScript frameworks & libraries
    'react': '#3A7A8F',      // muted cyan
    'vue': '#5A8A4A',        // muted lime green (brighter green)
    'angular': '#8B2F4E',    // muted crimson
    'svelte': '#B8654A',     // muted coral (more orange)
    'next.js': '#5A4A7A',    // muted purple
    'nextjs': '#5A4A7A',     // muted purple
    
    // Backend & Runtime
    'node.js': '#6A8A3A',    // muted olive green (yellower)
    'nodejs': '#6A8A3A',     // muted olive green (yellower)
    'express': '#6A5A8B',    // muted indigo
    'django': '#2A6A5A',     // muted teal (bluer)
    'flask': '#8A4A7A',      // muted plum (more purple)
    'fastapi': '#3A8A7A',    // muted sea green (brighter)
    
    // Languages
    'javascript': '#B8A532',  // muted gold (brighter)
    'typescript': '#3A5A9F',  // muted blue (more saturated)
    'python': '#5A7AAF',      // muted sky blue (lighter)
    'java': '#B87A4A',        // muted burnt orange (more orange)
    'c': '#4A8A5A',           // muted forest green (brighter)
    'c++': '#356A3A',         // muted deep green (darker, more contrast)
    'go': '#4A9AAA',          // muted turquoise (brighter)
    'rust': '#9B5A3A',        // muted rust (more red-orange)
    'php': '#7A5A9B',         // muted violet (more purple)
    'ruby': '#9B3A5A',        // muted ruby (more pink)
    'swift': '#B8754A',       // muted tangerine (brighter)
    'kotlin': '#7A4AAB',      // muted royal purple (brighter)
    
    // Databases
    'mongodb': '#5A8A5A',     // muted grass green (brighter, yellower)
    'postgresql': '#4A5A9F',  // muted royal blue
    'mysql': '#6A8AAF',       // muted steel blue (lighter)
    'redis': '#9B5A4A',       // muted brick red (more orange)
    'firebase': '#B89F4A',    // muted amber (brighter)
    'supabase': '#3A9B7A',    // muted jade (more saturated)
    
    // Cloud & DevOps
    'aws': '#B8844A',         // muted orange (brighter)
    'azure': '#3A7AAA',       // muted azure (brighter)
    'gcp': '#5A7AC8',         // muted periwinkle (brighter)
    'docker': '#3A8AC8',      // muted dodger blue (brighter)
    'kubernetes': '#5A6AB8',  // muted iris (more contrast)
    
    // Tools & Others
    'git': '#B8654A',         // muted terracotta (brighter)
    'linux': '#AA9A5A',       // muted khaki (more yellow)
    'unix': '#9A8A6A',        // muted tan (more brown)
    'websockets': '#5A7A8A',  // muted slate blue (more blue)
    'graphql': '#AA5A9B',     // muted magenta (brighter)
    'tensorflow': '#B87A4A',  // muted pumpkin (more orange)
    'pytorch': '#B8604A',     // muted vermillion (brighter)
    'pandas': '#5A6A8A',      // muted denim (more saturated)
    'networkx': '#3A8AAA',    // muted cerulean (brighter)
  };
  
  return colorMap[tagLower] || '#7A6A8A'; // Default muted purple for unknown tags
};

export const Card: React.FC<CardProps> = ({ label, image, link = '#', description, tags = [] }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={label} loading="lazy" />
      </div>
      <div className="card-content">
        <a href={link} className="card-title">{label}</a>
        {description && <p className="card-description">{description}</p>}
        {tags.length > 0 && (
          <div className="card-tags">
            {tags.map(tag => (
              <span 
                key={tag} 
                className="card-tag"
                style={{ backgroundColor: getTechnologyColor(tag) }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

