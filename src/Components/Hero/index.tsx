import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";
import { Link } from "react-scroll";
import profilePhoto from "../../assets/dc.webp";

// Primeira seção da página: título + CTA à esquerda, foto à direita, com
// animação de entrada própria (não usa useScrollReveal, já que está acima da dobra).
const Hero = () => {
  const greetingRef = useRef<HTMLHeadingElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
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
    // Entrada em cascata ao carregar a página: cada linha de texto surge em sequência,
    // a foto chega com um leve "bounce" e depois flutua continuamente.
    const context = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .fromTo(greetingRef.current, { opacity: 0, y: 30, filter: "blur(4px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7 })
        .fromTo(headingRef.current, { opacity: 0, y: 40, filter: "blur(4px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 }, "-=0.45")
        .fromTo(paragraphRef.current, { opacity: 0, y: 30, filter: "blur(4px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7 }, "-=0.5")
        .fromTo(buttonsRef.current, { opacity: 0, y: 24, filter: "blur(4px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6 }, "-=0.4")
        .fromTo(
          imageColumnRef.current,
          { opacity: 0, scale: 0.88, rotate: -4, filter: "blur(12px)" },
          { opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)", duration: 1, ease: "back.out(1.4)" },
          "-=0.6",
        )
        // Flutuação contínua da foto (sobe/desce em loop) depois que a entrada termina
        .to(imageColumnRef.current, {
          y: "+=14",
          duration: 2.6,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
    });

    return () => context.revert();
  }, []);

  return (
    <section id="hero">
      <div className="wrapper info-container">
        <div className="column">
          <h3 className="sub-title" ref={greetingRef}>
            Bem-vindo! Eu sou <span style={{ color: "var(--primary)" }}><b>Daniew Cruz.</b></span>
          </h3>
          <h1 className="heading-1" ref={headingRef}>
            Desenvolvedor<br />
            <span className="gradient-text">Full Stack & Mobile</span>
          </h1>
          <p className="muted" ref={paragraphRef}>
            React Native · ODOO · UI/UX Design · Automação Empresarial. Transformo ideias em soluções digitais completas — do design no Figma à implementação técnica, com foco em resultados reais para o negócio.
          </p>
          <div className="flex-center buttons-wrapper" ref={buttonsRef}>
            <Link to="services" smooth={true} spy={true} offset={-90} className="btn primary">Ver Projetos</Link>
            <a href="/docs/curriculo-daniel-lucas.pdf" download="Curriculo_Daniel_Lucas_da_Silva_Cruz.pdf" className="btn">Baixar CV</a>
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
