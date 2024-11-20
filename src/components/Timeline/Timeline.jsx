import './Timeline.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function ResumeTimeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="May - December 2024"
        iconStyle={{ background: '#ffc371', color: '#fff' }}
        contentStyle={{ background: '#0F2F45', color: '#fff' }}
        contentArrowStyle={{ opacity: 0 }}
      >

        <h3 className="vertical-timeline-element-title">BC Cancer Foundation - BCGSC</h3>
        <h4 className="vertical-timeline-element-subtitle">Systems Co-op Student</h4>
        <p>
          I was involved in creating Python Scripts for our account onboarding/offboarding process. I also worked on a web interface for our purchasing database.
        </p>
        <p className="tools">Python, Bash, Powershell, JavaScript, Node.js</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="October 2023 - January 2024"
        iconStyle={{ background: '#ffc371', color: '#fff' }}
        contentStyle={{ background: '#0F2F45', color: '#fff' }}
        contentArrowStyle={{ opacity: 0 }}
      >

        <h3 className="vertical-timeline-element-title">AumOui</h3>
        <h4 className="vertical-timeline-element-subtitle">Website Developer</h4>
        <p>
          I was in charge of building and integrating custom HTML and CSS elements into a Shopify website.
        </p>
        <p className="tools">Liquid, HTML, CSS</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="May 2023 - May 2024"
        iconStyle={{ background: '#ffc371', color: '#fff' }}
        contentStyle={{ background: '#0F2F45', color: '#fff' }}
        contentArrowStyle={{ opacity: 0 }}
      >
        <h3 className="vertical-timeline-element-title">The TJX Companies, Inc.</h3>
        <h4 className="vertical-timeline-element-subtitle">Sales Associate</h4>
      </VerticalTimelineElement>

    </VerticalTimeline>
  );
}