import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Anima a entrada de uma seção (fade + leve subida) quando ela cruza a viewport.
 * `onEnter` roda junto (ex.: disparar uma animação anime.js de um filho).
 */
export function useScrollReveal<T extends HTMLElement>(onEnter?: () => void) {
  const ref = useRef<T>(null);
  const onEnterRef = useRef(onEnter);

  useEffect(() => {
    onEnterRef.current = onEnter;
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },
          onStart: () => onEnterRef.current?.(),
        },
      );
    }, element);

    return () => context.revert();
  }, []);

  return ref;
}
