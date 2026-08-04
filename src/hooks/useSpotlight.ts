import { useEffect } from "react";

/** Atualiza --spot-x/--spot-y no elemento sob o cursor, para um brilho radial via CSS acompanhar o mouse. */
export function useSpotlight(selector: string) {
  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest<HTMLElement>(selector);
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      target.style.setProperty("--spot-x", `${x}%`);
      target.style.setProperty("--spot-y", `${y}%`);
    };

    document.addEventListener("mousemove", handleMove);
    return () => document.removeEventListener("mousemove", handleMove);
  }, [selector]);
}
