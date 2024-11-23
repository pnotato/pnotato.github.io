import "./Projects-Section.css";
import ProjectCard from "../../ProjectCard/ProjectCard.jsx";

function ProjectsSection() {
    return (
        <>
            <div className="sectionC">
                <div className="sectionC-body">
                    <h1>Selected Projects</h1>
                    <div className="sectionC-content">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectsSection;