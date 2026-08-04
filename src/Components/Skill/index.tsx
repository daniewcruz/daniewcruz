import { useRef } from "react";
import { animate } from "animejs";
import "./Skill.css";
import { skills } from "../../sources";
import { useScrollReveal } from "../../hooks/useScrollReveal";

// Seção de skills, organizadas por categoria. As barras de progresso enchem/esvaziam
// via anime.js (não CSS), disparadas pelos callbacks onEnter/onExit do reveal de scroll.
const Skill = () => {
    // Map (não array) porque a ref-callback do React roda fora de ordem entre
    // categorias; a chave "categoria-item" garante que cada barra é registrada uma vez.
    const barRefs = useRef(new Map<string, HTMLDivElement>());

    const registerBar = (key: string) => (el: HTMLDivElement | null) => {
        if (el) {
            barRefs.current.set(key, el);
        } else {
            barRefs.current.delete(key);
        }
    };

    const sectionRef = useScrollReveal<HTMLElement>({
        childSelector: ".skill-category",
        // Encher as barras com leve atraso e cascata, depois que as categorias já revelaram
        onEnter: () => {
            Array.from(barRefs.current.values()).forEach((bar, index) => {
                animate(bar, {
                    width: bar.dataset.targetWidth ?? "0%",
                    duration: 900,
                    delay: 300 + index * 45,
                    ease: "outQuad",
                });
            });
        },
        // Esvaziar de volta ao rolar pra cima e sair da seção, pra poder encher de novo (replay)
        onExit: () => {
            Array.from(barRefs.current.values()).forEach((bar) => {
                animate(bar, {
                    width: "0%",
                    duration: 400,
                    ease: "inQuad",
                });
            });
        },
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
                                                // Lido pelo anime.js no onEnter acima; começa em 0 e anima até aqui
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
