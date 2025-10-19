import React, { useState, useEffect } from 'react';
import { Planet } from './components/Planet';
import { Card } from './components/Card';
import { Project, ProjectCollection } from './types/project';
import projectsData1 from './data/projects-1.json';
import projectsData2 from './data/projects-2.json';

export const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [allTags, setAllTags] = useState<string[]>([]);

  useEffect(() => {
    // Load and combine projects from both JSON files
    const collection1 = projectsData1 as ProjectCollection;
    const collection2 = projectsData2 as ProjectCollection;
    const allProjects = [...collection1.projects, ...collection2.projects];
    
    setProjects(allProjects);

    // Extract unique tags
    const tagsSet = new Set<string>();
    allProjects.forEach(project => {
      project.tags.forEach(tag => tagsSet.add(tag));
    });
    setAllTags(Array.from(tagsSet).sort());
  }, []);

  const filteredProjects = selectedTag === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedTag));

  return (
    <>
      {/* Navbar */}
      <nav className="Navbar">
        <div className="brand">
          <span className="name">Nicholas Chan</span>
        </div>
        <div className="nav-links">
          <a className="button" href="/">About</a>
          <a className="button" href="/">Portfolio</a>
          <a className="button" href="/">Contact</a>
        </div>
      </nav>

      <div className="border" aria-hidden="true"></div>
      
      <div className="content-wrapper">
        {/* Intro Section */}
        <div className="intro-section">
          <div className="intro-content">
            <h1>Hi, I'm Nick.</h1>
            <p>I'm a computer science student based in Vancouver, BC. I'm currently interning at <a href="https://www.blaisetransit.com/">Blaise Transit</a>!</p>
            <p>I'm interested in backend development, embedded systems and data science.</p>
          </div>
          <div id="planet-container">
            <Planet />
          </div>
        </div>
        
        <div className="wave-gap"></div>
        
        {/* Wave */}
        <div className="wave">
          <img src="/assets/waves_long.svg" alt="" />
        </div>
        
        {/* Hero Section */}
        <div className="hero">
          <div className="intro-content">
            <p>At <a href="https://www.sfu.ca/">Simon Fraser University</a>, I'm a Software Developer for our Robot Soccer Team.</p>
            <p>I was also previously a systems intern at <a>BC Cancer</a>.</p>
            <p>Take a look at my <a>resume</a>, or read more about my experiences <a>here</a>.</p>
            
            <div className="socials">
              <div className="link">
                <img src="/assets/icons/linkedin.svg" alt="LinkedIn" />
                <a href="https://www.linkedin.com/in/nicholasch-an/">nicholasch-an</a>
              </div>
              <div className="link">
                <img src="/assets/icons/github.svg" alt="GitHub" />
                <a href="https://github.com/pnotato/">github.com/pnotato</a>
              </div>
              <div className="link">
                <img src="/assets/icons/mail.svg" alt="Email" />
                <a href="mailto:nicholasch.an@outlook.com">nicholasch.an@outlook.com</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Reverse */}
        <div className="wave reverse">
          <img src="/assets/waves_long.svg" alt="" />
        </div>
        
        {/* Projects Section */}
        <div className="projects-section">
          <h1>Projects</h1>
          
          {/* Filter Buttons */}
          <div className="filter-section">
            <div className="filter-buttons">
              <button 
                className={`filter-btn ${selectedTag === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedTag('all')}
              >
                All
              </button>
              {allTags.map(tag => (
                <button 
                  key={tag}
                  className={`filter-btn ${selectedTag === tag ? 'active' : ''}`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-item">
                <Card 
                  label={project.label}
                  image={project.image}
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

