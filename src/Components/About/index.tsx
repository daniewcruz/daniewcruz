import "./About.css";
import { useScrollReveal } from "../../hooks/useScrollReveal";

// Seção "Sobre mim": bio curta, com cada parágrafo revelado em cascata ao entrar na tela.
const About = () => {
    const sectionRef = useScrollReveal<HTMLElement>({ childSelector: ".about-text .sub-title" });

    return (
        <section id="about" className="about" ref={sectionRef}>
            <div className="wrapper">
                <div className="section-header">
                    <h1 className="heading-1">
                        <span className="gradient-text">Sobre mim</span>
                    </h1>
                </div>
                <div className="about-container">
                    <div className="about-text">
                        <h5 className="sub-title">
                            Desenvolvedor apaixonado por transformar ideias criativas em soluções <strong className="highlight">impactantes</strong>. Especializado em aplicações <strong className="highlight">mobile offline-first</strong>, backend <strong className="highlight">ODOO</strong>, <strong className="highlight">automação empresarial</strong> e <strong className="highlight">design de interfaces</strong>.
                        </h5>
                        <h5 className="sub-title">
                            <strong className="highlight">2 anos de experiência</strong> com aplicações em produção, responsável por design e implementação técnica em todos os projetos freelancer — da prototipagem no <strong className="highlight">Figma</strong> ao código em produção.
                        </h5>
                    </div>
                </div>

                
            </div>
        </section>
    );
}

export default About;
