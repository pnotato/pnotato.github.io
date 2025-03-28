import "./Intro-Section.css"
import Profile from "../../../assets/images/tmp-logo.png"

function IntroSection() {

    return (
        <div className="sectionA">
            <div className="sectionA-body">
                <div className="sectionA-intro">
                    <h1>Who am I?</h1>
                    <p>I'm a computer science student based in Metro Vancouver. I was previously a co-op student at the <a href="https://www.bcgsc.ca/">Genome Sciences Centre</a>.</p>
                    <p>I want to learn how technology can be used to improve the lives of others.</p>
                </div>
                <img src={Profile} className="profile-picture"/>
            </div>
        </div>
    )
};

export default IntroSection;
