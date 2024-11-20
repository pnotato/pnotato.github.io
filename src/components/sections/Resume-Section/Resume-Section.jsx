import "./Resume-Section.css";
import CustomizedTimeline from "../../Timeline/Timeline.jsx";

function ResumeSection() {
    return (
        <>
            <div className="sectionB">
                <div className="sectionB-body">
                    <h1>My Experience</h1>
                    <CustomizedTimeline />
                </div>
            </div>
        </>
    )
}

export default ResumeSection;