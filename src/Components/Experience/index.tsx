import "./Experience.css";
import { experiences, education } from "../../sources";
import { useScrollReveal } from "../../hooks/useScrollReveal";

// Seção de trajetória: lista de experiências profissionais + card de formação acadêmica.
const Experience = () => {
    const sectionRef = useScrollReveal<HTMLElement>({ childSelector: ".experience-card, .education-card" });

    return (
        <section id="experience" className="experience" ref={sectionRef}>
            <div className="wrapper">
                <div className="section-header">
                    <h1 className="heading-1">
                        <span className="gradient-text">Experiência</span>
                    </h1>
                    <p className="sub-title muted">
                        Trajetória profissional e formação acadêmica.
                    </p>
                </div>
                <div className="experience-container">
                    <div className="experience-list-column">
                        {experiences.map((job, index) => (
                            <div className="experience-card" key={index}>
                                <div className="experience-card-header">
                                    <div>
                                        <h3 className="experience-role">{job.title}</h3>
                                        <p className="experience-company">{job.company}</p>
                                    </div>
                                    <span className="muted experience-period">{job.period}</span>
                                </div>
                                {job.location && (
                                    <p className="muted experience-location">{job.location}</p>
                                )}
                                <p className="muted experience-focus">{job.focus}</p>
                                <ul className="experience-list">
                                    {job.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="education-card">
                        <h3 className="experience-role">Formação</h3>
                        <ul className="education-list">
                            {education.map((edu, index) => (
                                <li key={index}>
                                    <span className="education-course">{edu.course}</span>
                                    <span className="muted">
                                        {edu.institution}{edu.period ? ` · ${edu.period}` : ""}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
