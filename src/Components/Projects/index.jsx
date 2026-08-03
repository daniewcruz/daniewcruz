import "./Projects.css";
import { projects } from "../../sources";

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="wrapper">
                <div className="section-header">
                    <h1 className="heading-1">
                        <span className="gradient-text">Projetos</span>
                    </h1>
                    <p className="sub-title muted">
                        Sistemas reais em produção, do design à entrega técnica.
                    </p>
                </div>
                <div className="projects-container">
                    {projects.map((project) => (
                        <div className="project-card" key={project.id}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <span className="project-category">{project.category}</span>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="muted project-description">{project.description}</p>
                                <div className="project-stack">
                                    {project.stack.map((tech, techIndex) => (
                                        <div className="flex-center icon-wrapper" key={techIndex} title={tech.name} style={{ color: tech.iconColor }}>
                                            {tech.icon}
                                        </div>
                                    ))}
                                </div>
                                <a href={project.demoLink} target="_blank" rel="noreferrer" className="btn primary project-link">
                                    Ver Mais
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
