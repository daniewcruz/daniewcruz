import React, { useEffect } from "react";
import "./Hero.css";
import { Link } from "react-scroll";
import me from "../../assets/dc.png";

const Hero = () => {
  useEffect(() => {
    // Criar uma função para o scroll
    const handleScroll = () => {
      const waveSeparator = document.querySelector('.wave-separator svg');
      let scrollPosition = window.scrollY;
      
      // Movimento da onda baseado na rolagem
      waveSeparator.style.transform = `translateY(${scrollPosition * 0.1}px)`; // Controle da velocidade do movimento da onda
    };

    // Adicionar o evento de scroll
    window.addEventListener('scroll', handleScroll);
    
    // Remover o evento ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="hero">
      <div className="wrapper info-container">
        <div className="column">
          <h3 className="sub-title">
            Bem-vindo! Eu sou <span style={{ color: "var(--primary)" }}><b>Daniew Cruz.</b></span>
          </h3>
          <h1 className="heading-1">
            Desenvolvedor <span className="gradient-text">Web & Mobile</span>
          </h1>
          <p className="muted">
            Especialista em criar soluções digitais inovadoras e ágeis, com foco em gerar resultados reais. Transformo desafios em oportunidades, desenvolvendo experiências intuitivas que conectam pessoas e impulsionam o crescimento estratégico dos negócios.
          </p>
          <div className="flex-center buttons-wrapper">
            <Link to="services" smooth={true} spy={true} className="btn primary">Ver Projetos</Link>
            <Link to="contact" smooth={true} spy={true} className="btn">Baixar CV</Link>
          </div>
        </div>
        <div className="column hero-image">
          <img src={me} alt="hero-image" />
        </div>
      </div>
     
      <div className="wave-separator">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 28">
          <path fill="var(--primary)" d="M0 0 C30 10, 90 10, 120 0 L120 28 L0 28 Z" />
        </svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 28">
          <path fill="var(--primary)" d="M0 0 C30 10, 90 10, 120 0 L120 28 L0 28 Z" />
        </svg>
      </div>

    </section>
  );
};

export default Hero;
