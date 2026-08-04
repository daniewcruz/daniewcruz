import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Recalcula as posições de todos os ScrollTriggers depois que imagens e fontes
 * terminam de carregar. Sem isso, o layout muda de altura após o cálculo inicial
 * (ex.: imagens remotas dos projetos) e os reveals disparam fora de sincronia
 * com a posição real do scroll.
 */
export function useScrollTriggerRefresh() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();

    if (document.readyState === "complete") {
      refresh();
    } else {
      window.addEventListener("load", refresh);
    }

    document.fonts?.ready.then(refresh).catch(() => {});

    return () => {
      window.removeEventListener("load", refresh);
    };
  }, []);
}
