import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollRevealOptions = {
  /** Roda uma vez, quando o elemento entra na tela. */
  onEnter?: () => void;
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
 * opcional) quando ela cruza a viewport, uma única vez — o conteúdo fica
 * visível pra sempre depois disso, não reverte ao rolar pra cima. (Uma versão
 * anterior revertia ao rolar pra cima, pra permitir "replay", mas isso se
 * mostrou frágil: um reflow de layout depois do cálculo inicial — ex. troca
 * de fonte carregando da rede — podia deixar o trigger recalculando pro lado
 * errado do limite, e o conteúdo ficava preso invisível pra sempre, mesmo já
 * visível na tela.)
 */
export function useScrollReveal<T extends HTMLElement>({
  onEnter,
  childSelector,
  y = 40,
  stagger = 0.08,
  blur = 4,
}: ScrollRevealOptions = {}) {
  const ref = useRef<T>(null);
  // Guarda o callback mais recente numa ref (atualizada após cada render, nunca
  // durante) pra que o ScrollTrigger — criado só uma vez no efeito abaixo — sempre
  // chame a versão atual, sem precisar recriar o trigger a cada novo callback.
  const onEnterRef = useRef(onEnter);

  useEffect(() => {
    onEnterRef.current = onEnter;
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
            // Margem de segurança em relação ao limite exato da viewport (100%):
            // absorve pequenos deslocamentos de layout (troca de fonte, imagens)
            // sem o gatilho cair pro lado errado do limite.
            start: "top 92%",
            once: true,
            onEnter: () => onEnterRef.current?.(),
          },
        },
      );
    }, element);

    return () => context.revert();
  }, [childSelector, y, stagger, blur]);

  return ref;
}
