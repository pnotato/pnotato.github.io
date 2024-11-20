import './Home.css';
import WaveDivider from './components/WaveDivider/WaveDivider.jsx';
import IntroSection from './components/sections/Intro-Section/Intro-Section.jsx';
import ResumeSection from './components/sections/Resume-Section/Resume-Section.jsx';
import ProjectsSection from './components/sections/Projects-Section/Projects-Section.jsx';
import githubIcon from './assets/github-mark.svg';
import linkedinIcon from './assets/icons8-linkedin-100.svg';
import IntroImage from './assets/tmp-logo.png';

function Home() {
  return (
    <>
      <div className="title">
        <h1> Hi, I'm</h1>
        <div className="title-text">
          Nicholas Chan
        </div>
        
        <div className="socials">
          <a href="https://github.com/pnotato/">
            <img className="social-icons" src={githubIcon} alt="GitHub Icon" />
          </a>
          <a href="https://www.linkedin.com/in/nicholasch-an/">
            <img className="social-icons-linkedin" src={linkedinIcon} alt="GitHub Icon" />
          </a>
        </div>
      </div>
      
      <WaveDivider />
      <IntroSection />
      <div style={{ transform: 'translateY(-20px) rotate(180deg) ' }}>
        <WaveDivider />
      </div>
      <ResumeSection />
      <WaveDivider />
      <ProjectsSection />
    </>
  );
}

export default Home;
