import { useEffect } from "react";

type Tilt3DOptions = {
  selector: string;
  maxTilt?: number;
  scale?: number;
};

/**
 * Inclina em perspectiva 3D o elemento sob o cursor, proporcional à posição do mouse dentro dele.
 * Usa CSS puro (custom properties + transition no CSS do componente) em vez de GSAP: uma animação
 * de rotação via JS aqui se mostrou frágil (a rotação era desfeita sempre que um mouseleave real
 * disparava por reflow de layout, ex. troca de fonte); CSS transition não tem esse problema.
 */
export function useTilt3D({ selector, maxTilt = 10, scale = 1.03 }: Tilt3DOptions) {
  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest<HTMLElement>(selector);
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const relativeX = (event.clientX - rect.left) / rect.width;
      const relativeY = (event.clientY - rect.top) / rect.height;

      const rotateX = (0.5 - relativeY) * maxTilt * 2;
      const rotateY = (relativeX - 0.5) * maxTilt * 2;

      target.style.setProperty("--tilt-x", `${rotateX}deg`);
      target.style.setProperty("--tilt-y", `${rotateY}deg`);
      target.style.setProperty("--tilt-scale", `${scale}`);
    };

    const handleLeave = (event: Event) => {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest<HTMLElement>(selector);
      if (!target) return;

      target.style.setProperty("--tilt-x", "0deg");
      target.style.setProperty("--tilt-y", "0deg");
      target.style.setProperty("--tilt-scale", "1");
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave, true);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave, true);
    };
  }, [selector, maxTilt, scale]);
}
