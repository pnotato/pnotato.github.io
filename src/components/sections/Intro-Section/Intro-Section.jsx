import "./Intro-Section.css"
import Profile from "../../../assets/images/tmp-logo.png"

function IntroSection() {

    return (
        <div className="sectionA">
            <div className="sectionA-body">
                <div className="sectionA-intro">
                    <h1>Who am I?</h1>
                    <p>I'm a computer science student based in Metro Vancouver. Currently, I'm a co-op student at the <a href="https://www.bcgsc.ca/">Genome Sciences Centre</a>.</p>
                    <p>I want to learn how technology can be used to better our healthcare system.</p>
                </div>
                <img src={Profile} className="profile-picture"/>
            </div>
        </div>
    )
};

export default IntroSection;