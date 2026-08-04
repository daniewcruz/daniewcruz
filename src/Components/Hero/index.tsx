import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";
import { Link } from "react-scroll";
import profilePhoto from "../../assets/dc.webp";

const Hero = () => {
  const textColumnRef = useRef<HTMLDivElement>(null);
  const imageColumnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Efeito parallax: move a onda decorativa proporcionalmente ao scroll da página
    const handleScroll = () => {
      const waveSeparator = document.querySelector<HTMLElement>('.wave-separator svg');
      const scrollPosition = window.scrollY;
      if (waveSeparator) {
        waveSeparator.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Entrada suave do Hero ao carregar a página (texto primeiro, foto logo em seguida)
    const context = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power2.out" } })
        .fromTo(textColumnRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8 })
        .fromTo(imageColumnRef.current, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.8 }, "-=0.5");
    });

    return () => context.revert();
  }, []);

  return (
    <section id="hero">
      <div className="wrapper info-container">
        <div className="column" ref={textColumnRef}>
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
        <div className="column hero-image" ref={imageColumnRef}>
          <img src={profilePhoto} alt="hero-image" />
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
