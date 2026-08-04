import { useRef } from "react";
import { animate } from "animejs";
import "./Skill.css";
import { skills } from "../../sources";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const Skill = () => {
    const barRefs = useRef(new Map<string, HTMLDivElement>());

    const registerBar = (key: string) => (el: HTMLDivElement | null) => {
        if (el) {
            barRefs.current.set(key, el);
        } else {
            barRefs.current.delete(key);
        }
    };

    const sectionRef = useScrollReveal<HTMLElement>(() => {
        Array.from(barRefs.current.values()).forEach((bar, index) => {
            animate(bar, {
                width: bar.dataset.targetWidth ?? "0%",
                duration: 900,
                delay: index * 60,
                ease: "outQuad",
            });
        });
    });

    return (
        <section id="skill" className="skill" ref={sectionRef}>
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
                                                ref={registerBar(`${index}-${itemIndex}`)}
                                                data-target-width={item.level === "Experienced" ? "90%" : "65%"}
                                                style={{ width: 0 }}
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
