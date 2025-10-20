import React, { useState, useEffect, useRef } from 'react';
import { Planet } from './components/Planet';
import { Card } from './components/Card';
import { Rocket } from './components/Rocket';
import { Project, ProjectCollection } from './types/project';
import projectsData1 from './data/projects-1.json';
import projectsData2 from './data/projects-2.json';

// Define allowed tags in specific order
const ALLOWED_TAGS = ['Hackathon', 'Personal', 'Full Stack', 'Systems Programming', 'Data Analysis'];

export const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>('all');
  
  // Refs for scroll animations
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load and combine projects from both JSON files
    const collection1 = projectsData1 as ProjectCollection;
    const collection2 = projectsData2 as ProjectCollection;
    const allProjects = [...collection1.projects, ...collection2.projects];
    
    setProjects(allProjects);
  }, []);
  
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe hero section elements
    if (heroRef.current) {
      const heroElements = heroRef.current.querySelectorAll('.hidden-until-scroll');
      heroElements.forEach(el => observer.observe(el));
    }
    
    // Observe project cards
    if (projectsRef.current) {
      const projectCards = projectsRef.current.querySelectorAll('.project-item');
      projectCards.forEach(el => observer.observe(el));
    }

    return () => {
      observer.disconnect();
    };
  }, [projects]);

  const filteredProjects = selectedTag === 'all' 
    ? projects 
    : projects.filter(project => 
        project.internalTags.some(tag => ALLOWED_TAGS.includes(tag)) && 
        project.internalTags.includes(selectedTag)
      );

  return (
    <>
      {/* Navbar */}
      <nav className="Navbar">
        <div className="brand">
          <span className="name">Nicholas Chan</span>
        </div>
        <div className="nav-links">
          <a className="button" href="#about">About</a>
          <a className="button" href="#portfolio">Portfolio</a>
        </div>
      </nav>

      <div className="border" aria-hidden="true"></div>
      
      <div className="content-wrapper">
        {/* Intro Section */}
        <div className="intro-section">
          <div className="intro-content">
            <h1 className="fade-in">Hi, I'm Nick.</h1>
            <p className="fade-in-delayed">I'm a computer science student based in Vancouver, BC. I'm currently interning at <a href="https://www.blaisetransit.com/">Blaise Transit</a>!</p>
            <p className="fade-in-delayed-2">I'm interested in backend development, distributed systems, and data engineering.</p>
          </div>
          <div id="planet-container">
            <Planet />
          </div>
        </div>
        
        {/* Rocket Animation */}
        <Rocket />
        
        <div className="wave-gap"></div>
        
        {/* Wave */}
        <div className="wave">
          <img src="/assets/waves_long.svg" alt="" />
        </div>
        
        {/* Hero Section */}
        <div id="about" className="hero" ref={heroRef}>
          <div className="intro-content">
            <p className="hidden-until-scroll"></p>
            <p className="hidden-until-scroll">At <a href="https://www.sfu.ca/">Simon Fraser University</a>, I'm also a Software Developer for our <a href="https://www.sfurobotsoccer.com/">Robot Soccer Team</a>.</p>
            <p className="hidden-until-scroll">I was also previously a systems intern at <a href="https://www.bcgsc.ca">BC Cancer</a>.</p>
            <p className="hidden-until-scroll">Take a look at my <a href="/assets/Resume_Sept_2025.pdf">resume</a> or reach out to me on any of the following platforms.</p>
            
            <div className="socials hidden-until-scroll">
              <div className="link">
                <a href="https://www.linkedin.com/in/nicholasch-an/">
                  <img src="/assets/icons/linkedin.svg" alt="LinkedIn" />
                </a>
                <a href="https://www.linkedin.com/in/nicholasch-an/">nicholasch-an</a>
              </div>
              <div className="link">
                <a href="https://github.com/pnotato/">
                  <img src="/assets/icons/github.svg" alt="GitHub" />
                </a>
                <a href="https://github.com/pnotato/">github.com/pnotato</a>
              </div>
              <div className="link">
                <a href="mailto:nicholasch.an@outlook.com">
                  <img src="/assets/icons/mail.svg" alt="Email" />
                </a>
                <a href="mailto:nicholasch.an@outlook.com">nicholasch.an@outlook.com</a>
              </div>
            </div>
          </div>
          
          <div className="hero-images">
            <a className="hero-image-box hidden-until-scroll">
              <img src="/assets/images/sfu.jpg" alt="SFU Campus" />
            </a>
            <a  className="hero-image-box hidden-until-scroll">
              <img src="/assets/images/van.jpg" alt="Vancouver, BC" />
            </a>
          </div>
        </div>
        
        {/* Wave Reverse */}
        <div className="wave reverse">
          <img src="/assets/waves_long.svg" alt="" />
        </div>
        
        {/* Projects Section */}
        <div id="portfolio" className="projects-section" ref={projectsRef}>
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
              {ALLOWED_TAGS.map(tag => (
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
                  description={project.description}
                  tags={project.externalTags}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

