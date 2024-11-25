import "./Projects-Section.css";
import ProjectCard from "../../ProjectCard/ProjectCard.jsx";
import hireHigher from "../../../assets/images/hirehigher.png";
import quackii from "../../../assets/images/quackii.png";
import wecycle from "../../../assets/images/wecycle.png";
import aslingo from "../../../assets/images/aslingo.png";
import Blackjack from "../../../assets/images/Blackjack.png";
import electric from "../../../assets/images/electric.png";
import rainy from "../../../assets/images/rainy.jpg";

function ProjectsSection() {
    return (
        <>
            <div className="sectionC">
                <div className="sectionC-body">
                    <h1>Projects</h1>
                    <div className="sectionC-content">
                        <ProjectCard 
                            imgsource={hireHigher}
                            alt="HireHigher"
                            title="HireHigher"
                            hreflink="https://github.com/Jordan-SFU/HireHigher"
                        />
                        <ProjectCard 
                            imgsource={quackii}
                            alt="Quackii"
                            title="Quackii"
                            hreflink="https://github.com/pnotato/ducky"
                        />
                        <ProjectCard 
                            imgsource={electric}
                            alt="Electrical Data Anomaly Detection"
                            title="Electrical Data Anomaly Detection"
                            hreflink="https://github.com/pnotato/ElectricAnomalies"
                        />
                        <ProjectCard 
                            imgsource={aslingo}
                            alt="ASLingo"
                            title="ASLingo"
                            hreflink="https://github.com/Jordan-SFU/ASLingo"
                        />
                        <ProjectCard 
                            imgsource={wecycle}
                            alt="WeCycle"
                            title="WeCycle"
                            hreflink="https://github.com/Jordan-SFU/WeCycle"
                        />
                        <ProjectCard 
                            imgsource={Blackjack}
                            alt="Blackjack"
                            title="Blackjack"
                            hreflink="https://github.com/pnotato/Blackjack"
                        />

                        <ProjectCard 
                            imgsource={rainy}
                            alt="Umbrella"
                            title="Umbrella"
                            hreflink="https://github.com/pnotato/Umbrella"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectsSection;