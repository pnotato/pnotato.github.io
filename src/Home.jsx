import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import { Tabs, rem } from '@mantine/core';
import './Home.css';
import Wave from 'react-wavify'
import WaveDivider from './components/WaveDivider/WaveDivider.jsx';
import githubIcon from './assets/github-mark.svg';
import linkedinIcon from './assets/icons8-linkedin-100.svg';

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
      <div className="sectionA">
            <div className="sectionA-body">
              <div className="sectionA-intro">
                <h1>Who am I?</h1>
                <p>I'm a computer science student based in Metro Vancouver. Currently, I'm a co-op student at the <a href="https://www.bcgsc.ca/">Genome Sciences Centre</a>.</p>
                <p>I want to learn how technology can be used to better our healthcare system.</p>
                </div>
            </div>
      </div>
      <div style={{ transform: 'translateY(-20px) rotate(180deg) ' }}>
        <WaveDivider />
      </div>
      <div className="sectionB"></div>
    </>
  );
}

export default Home;
