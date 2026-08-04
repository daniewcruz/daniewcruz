import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollRevealOptions = {
  /** Roda toda vez que o elemento entra na tela (rolando pra baixo ou de volta pra cima). */
  onEnter?: () => void;
  /** Roda quando o elemento é escondido de novo (só ao rolar de volta pra cima, passando da seção). */
  onExit?: () => void;
  /** Se definido, anima cada filho que casa com o seletor em cascata, em vez da seção inteira de uma vez. */
  childSelector?: string;
  /** Distância (px) de onde os elementos partem verticalmente. */
  y?: number;
  /** Intervalo (s) entre a entrada de cada filho, quando childSelector é usado. */
  stagger?: number;
  /** Desfoque inicial (px); anima até ficar nítido junto com o fade + subida. */
  blur?: number;
};

/**
 * Anima a entrada de uma seção (blur → foco + fade + subida, com cascata
 * opcional) quando ela cruza a viewport. Ao contrário de uma animação amarrada
 * ao scroll (`scrub`), aqui a animação toca uma vez, com duração própria, e o
 * conteúdo permanece visível enquanto você continua rolando por ele — só
 * esconde de novo se você voltar pra cima e passar da seção inteira, e reaparece
 * ao descer de novo (replay), sem sumir no meio da leitura.
 */
export function useScrollReveal<T extends HTMLElement>({
  onEnter,
  onExit,
  childSelector,
  y = 40,
  stagger = 0.08,
  blur = 4,
}: ScrollRevealOptions = {}) {
  const ref = useRef<T>(null);
  // Guarda os callbacks mais recentes em refs (atualizadas após cada render, nunca
  // durante) pra que o ScrollTrigger — criado só uma vez no efeito abaixo — sempre
  // chame a versão atual, sem precisar recriar o trigger a cada novo callback.
  const onEnterRef = useRef(onEnter);
  const onExitRef = useRef(onExit);

  useEffect(() => {
    onEnterRef.current = onEnter;
    onExitRef.current = onExit;
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const context = gsap.context(() => {
      const targets = childSelector ? element.querySelectorAll(childSelector) : element;

      gsap.fromTo(
        targets,
        { opacity: 0, y, filter: `blur(${blur}px)` },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.5,
          ease: "power3.out",
          stagger: childSelector ? stagger : 0,
          scrollTrigger: {
            trigger: element,
            start: "top 100%",
            // onLeave (rolando pra baixo, passando da seção) não faz nada: o
            // conteúdo continua visível. Só reverte ao voltar pra cima.
            toggleActions: "play none play reverse",
            onEnter: () => onEnterRef.current?.(),
            onEnterBack: () => onEnterRef.current?.(),
            onLeaveBack: () => onExitRef.current?.(),
          },
        },
      );
    }, element);

    return () => context.revert();
  }, [childSelector, y, stagger, blur]);

  return ref;
}
