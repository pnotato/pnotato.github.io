import './Home.css';
import WaveDivider from './components/WaveDivider/WaveDivider.jsx';
import WaveDividerGrey from './components/WaveDivider/WaveDividerGrey.jsx';
import IntroSection from './components/sections/Intro-Section/Intro-Section.jsx';
import ResumeSection from './components/sections/Resume-Section/Resume-Section.jsx';
import ProjectsSection from './components/sections/Projects-Section/Projects-Section.jsx';
import TitleSection from './components/sections/Title-Section/Title-Section.jsx';
import ContactSection from './components/sections/Contact-Section/Contact-Section.jsx';

function Home() {
  return (
    <>
      <TitleSection />
      <WaveDivider />
      <IntroSection />
      <div style={{ transform: 'translateY(-20px) rotate(180deg) ' }}>
        <WaveDivider />
      </div>
      <ResumeSection />
      <WaveDividerGrey />
      <ProjectsSection />
    </>
  );
}

export default Home;
