import { useEffect } from "react";
import { animate } from "animejs";

type MagneticHoverConfig = {
  selector: string;
  scale?: number;
  rotate?: number;
};

/**
 * Dá um "bounce" via anime.js a qualquer elemento que combine com `selector`,
 * usando delegação de evento (um único listener para todo o site).
 */
export function useMagneticHover({ selector, scale = 1.06, rotate = 0 }: MagneticHoverConfig) {
  useEffect(() => {
    // event.target pode ser `document` (sem .closest) no 1º mouseenter da página; o guard evita um crash
    const handleEnter = (event: Event) => {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest<HTMLElement>(selector);
      if (!target) return;
      animate(target, { scale, rotate, duration: 320, ease: "outBack" });
    };

    const handleLeave = (event: Event) => {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest<HTMLElement>(selector);
      if (!target) return;
      animate(target, { scale: 1, rotate: 0, duration: 320, ease: "outQuad" });
    };

    // mouseenter/mouseleave não borbulham; capturar na fase de captura permite delegar num só listener
    document.addEventListener("mouseenter", handleEnter, true);
    document.addEventListener("mouseleave", handleLeave, true);

    return () => {
      document.removeEventListener("mouseenter", handleEnter, true);
      document.removeEventListener("mouseleave", handleLeave, true);
    };
  }, [selector, scale, rotate]);
}
