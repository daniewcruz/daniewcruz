import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./CustomCursor.css";

const INTERACTIVE_SELECTOR = "a, .btn, .icon-wrapper, .project-card, .service-card, [role='button']";

/** Cursor customizado (ponto + anel com atraso) — só em dispositivos com mouse de precisão. */
const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // "pointer: fine" = mouse/trackpad de precisão; em touch (coarse) o cursor
    // customizado não faz sentido, então nem monta os listeners nem esconde o cursor real
    const hasPrecisePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasPrecisePointer) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add("custom-cursor-active");
    // Centraliza o ponto/anel no cursor (senão fica com o canto superior esquerdo embaixo do mouse)
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    const moveDotX = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power2.out" });
    const moveDotY = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power2.out" });
    const moveRingX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
    const moveRingY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });

    // Some até o primeiro movimento real do mouse, evitando um "flash" no canto (0,0) ao carregar
    let hasMoved = false;

    const handleMove = (event: MouseEvent) => {
      if (!hasMoved) {
        hasMoved = true;
        gsap.set([dot, ring], { opacity: 1 });
      }
      moveDotX(event.clientX);
      moveDotY(event.clientY);
      moveRingX(event.clientX);
      moveRingY(event.clientY);
    };

    const handleOver = (event: Event) => {
      if (event.target instanceof Element && event.target.closest(INTERACTIVE_SELECTOR)) {
        ring.classList.add("cursor-ring--active");
      }
    };

    const handleOut = (event: Event) => {
      if (event.target instanceof Element && event.target.closest(INTERACTIVE_SELECTOR)) {
        ring.classList.remove("cursor-ring--active");
      }
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};

export default CustomCursor;
