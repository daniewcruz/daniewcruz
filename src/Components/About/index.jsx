import React from "react";
import "./About.css";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact, FaPython } from 'react-icons/fa';  // Importando ícones
import Cube3D from "../Cube3D/Cube3D";
const About = () => {
    return (
        <section className="about">
            <div className="wrapper">
                <div className="section-header">
                    <h1 className="heading-1">
                        <span className="gradient-text">Sobre mim</span>
                    </h1>
                </div>
                <div className="about-container">
                    <div className="about-text">
                        <h5 className="sub-title">
                            Estou finalizando o curso técnico em <strong className="highlight">Desenvolvimento de Sistemas</strong> no <strong className="highlight">SENAC RN</strong> (fevereiro de 2025). Ao longo da minha jornada, adquiri experiência em <strong className="highlight">front-end</strong>, <strong className="highlight">back-end</strong> e <strong className="highlight">mobile</strong>, adquirindo uma visão completa do ciclo de desenvolvimento de software. Minha experiência abrange <strong className="highlight">análise de requisitos</strong>, <strong className="highlight">documentação técnica</strong>, <strong className="highlight">banco de dados</strong>, <strong className="highlight">testes e metodologias ágeis</strong>.
                        </h5>
                        <h5 className="sub-title">
                            Apesar de minha trajetória ser multifacetada, minha verdadeira paixão é o lado <strong className="highlight">criativo e visual</strong> do desenvolvimento, especialmente em <strong className="highlight">web</strong> e <strong className="highlight">mobile</strong>. Busco criar soluções <strong className="highlight">impactantes</strong>, priorizando uma <strong className="highlight">experiência de usuário</strong> fluída e utilizando ferramentas como <strong className="highlight">Figma</strong> para prototipagem e design de interfaces, sempre com foco na harmonia entre estética e funcionalidade. Com foco em <strong className="highlight">inovação</strong> e <strong className="highlight">design criativo</strong>, estou pronto para contribuir com projetos que entreguem <strong className="highlight">resultados significativos</strong>.
                        </h5>
                    </div>
                </div>

                
            </div>
        </section>
    );
}

export default About;
