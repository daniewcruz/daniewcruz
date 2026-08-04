import "./Experience.css";
import { experience, education } from "../../sources";
import { useScrollReveal } from "../../hooks/useScrollReveal";

// Seção de trajetória: card de experiência profissional + card de formação acadêmica.
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
                    <div className="experience-card">
                        <div className="experience-card-header">
                            <div>
                                <h3 className="experience-role">{experience.title}</h3>
                                <p className="experience-company">{experience.company}</p>
                            </div>
                            <span className="muted experience-period">{experience.period}</span>
                        </div>
                        <p className="muted experience-focus">{experience.focus}</p>
                        <ul className="experience-list">
                            {experience.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
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
