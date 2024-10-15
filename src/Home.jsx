import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import { Tabs, rem } from '@mantine/core';
import ReactFloaterJs from 'react-floaterjs'
import './Home.css';
import Wave from 'react-wavify'
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
    <div className="wave">
      <Wave fill='#ffc371'
        paused={false}
        style={{ display: 'flex' }}
        options={{
          height: 20,
          amplitude: 50,
          speed: 0.15,
          points: 7
        }}
      />
    </div>
    <div className="wave">
      <Wave fill='#ff8a6f'
        paused={false}
        style={{ display: 'flex' }}
        options={{
          height: 100,
          amplitude: 30,
          speed: 0.20,
          points: 5
        }}
      />
    </div>
    <div className="wave">
      <Wave fill='#ff5f6d'
        paused={false}
        style={{ display: 'flex' }}
        options={{
          height: 200,
          amplitude: 30,
          speed: 0.20,
          points: 3
        }}
      />
    </div>
    </>
  );
}

export default Home;
