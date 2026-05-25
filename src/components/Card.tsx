import React from 'react';

interface CardProps {
  label: string;
  image: string;
  link?: string;
  description?: string;
  tags?: string[];
}

const getTechnologyColor = (tag: string): string => {
  const tagLower = tag.toLowerCase().replace(/\s+/g, '');

  const colorMap: { [key: string]: string } = {
    react: '#3A7A8F',
    reactnative: '#3A7A8F',
    vue: '#5A8A4A',
    angular: '#8B2F4E',
    svelte: '#B8654A',
    'next.js': '#5A4A7A',
    nextjs: '#5A4A7A',
    'node.js': '#6A8A3A',
    'node.ts': '#6A8A3A',
    express: '#6A5A8B',
    django: '#2A6A5A',
    flask: '#8A4A7A',
    fastapi: '#3A8A7A',
    javascript: '#B8A532',
    typescript: '#3A5A9F',
    python: '#5A7AAF',
    java: '#B87A4A',
    c: '#4A8A5A',
    'c++': '#356A3A',
    go: '#4A9AAA',
    rust: '#9B5A3A',
    php: '#7A5A9B',
    ruby: '#9B3A5A',
    swift: '#B8754A',
    kotlin: '#7A4AAB',
    mongodb: '#5A8A5A',
    postgresql: '#4A5A9F',
    mysql: '#6A8AAF',
    redis: '#9B5A4A',
    firebase: '#B8754A',
    supabase: '#3A9B7A',
    aws: '#B8844A',
    selenium: '#9B3A5A',
    azure: '#3A7AAA',
    gcp: '#5A7AC8',
    docker: '#3A8AC8',
    kubernetes: '#5A6AB8',
    git: '#B8654A',
    linux: '#AA9A5A',
    unix: '#9A8A6A',
    websockets: '#B8654A',
    graphql: '#AA5A9B',
    tensorflow: '#B87A4A',
    pytorch: '#B8604A',
    pandas: '#5A6A8A',
    networkx: '#3A8AAA',
    beautifulsoup4: '#5A7AAF',
    numpy: '#5A7AAF',
    cmake: '#6A5A8B',
  };

  return colorMap[tagLower] || '#7A6A8A';
};

export const Card: React.FC<CardProps> = ({
  label,
  image,
  link = '#',
  description,
  tags = [],
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={label} loading="lazy" />
        </a>
      </div>
      <div className="card-content">
        <a href={link} className="card-title" target="_blank" rel="noopener noreferrer">
          {label}
        </a>
        {description && <p className="card-description">{description}</p>}
        {tags.length > 0 && (
          <div className="card-tags">
            {tags.map((tag) => (
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
