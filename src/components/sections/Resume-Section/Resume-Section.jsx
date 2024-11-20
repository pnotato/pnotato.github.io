import "./Resume-Section.css";
import ResumeTimeline from "../../Timeline/Timeline.jsx";
import ReactMarkdown from 'react-markdown';

function ResumeSection() {
    return (
        <>
            <div className="sectionB">
                <div className="sectionB-body">
                    <h1> Work Experience</h1>
                    <ResumeTimeline />
                    <p>View my resume <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">here</a>.</p>
                </div>
            </div>
        </>
    )
}

export default ResumeSection;