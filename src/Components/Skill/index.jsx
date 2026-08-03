import "./Skill.css";
import { skills } from "../../sources";

const Skill = () => {
    return (
        <section id="skill" className="skill">
            <div className="wrapper">
                <div className="section-header">
                    <h1 className="heading-1">
                        <span className="gradient-text">Skills</span>
                    </h1>
                    <p className="sub-title muted">
                        Tecnologias e ferramentas que utilizo para desenvolver soluções completas, do design à produção.
                    </p>
                </div>
                <div className="skill-container">
                    {skills.map((category, index) => (
                        <div className="skill-category" key={index}>
                            <h3 className="skill-category-title">{category.title}</h3>
                            <div className="skill-list">
                                {category.items.map((item, itemIndex) => (
                                    <div className="skill-item" key={itemIndex}>
                                        <div className="skill-item-header">
                                            <span>{item.skill}</span>
                                            <span className="muted">{item.level}</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-bar-fill"
                                                style={{
                                                    width: item.level === "Experienced" ? "90%" : "65%",
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skill
