import React, { useEffect, useRef } from "react";

/*
  ScrollBackground
  - Fixed, site-wide animated gradient layers that move on scroll (parallax)
  - Uses brand color tokens from index.css
  - Zero pointer events, GPU-friendly with transform + rAF
*/
const ScrollBackground: React.FC = () => {
  const layerA = useRef<HTMLDivElement>(null);
  const layerB = useRef<HTMLDivElement>(null);
  const layerC = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let mouseX = 0, mouseY = 0;

    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        // Parallax factors (subtle but visible):
        const a = y * -0.06; // slowest
        const b = y * -0.10;
        const c = y * -0.14; // fastest

        const cx = (mouseX / window.innerWidth - 0.5) * 24; // mouse parallax X
        const cy = (mouseY / window.innerHeight - 0.5) * 16; // mouse parallax Y

        if (layerA.current) layerA.current.style.transform = `translate3d(${cx * 0.4}px, ${a + cy * 0.2}px, 0)`;
        if (layerB.current) layerB.current.style.transform = `translate3d(${cx * 0.6}px, ${b + cy * 0.3}px, 0)`;
        if (layerC.current) layerC.current.style.transform = `translate3d(${cx * 0.8}px, ${c + cy * 0.4}px, 0)`;
      });
    };

    const onScroll = () => schedule();
    const onMouse = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; schedule(); };

    schedule();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouse, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Layer A - top gradient sweep */}
      <div
        ref={layerA}
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[70vh] w-[110vw] ambient-blur opacity-[0.32]"
        style={{
          background:
            "radial-gradient(65% 55% at 50% 0%, hsl(var(--brand-warm) / 0.55), transparent 70%), radial-gradient(40% 40% at 0% 40%, hsl(var(--brand-2) / 0.40), transparent 70%)",
        }}
      />

      {/* Layer B - mid ripples */}
      <div
        ref={layerB}
        className="absolute top-1/3 -left-40 h-[60vh] w-[70vw] ambient-blur opacity-[0.28]"
        style={{
          background:
            "radial-gradient(55% 60% at 30% 50%, hsl(var(--brand-1) / 0.50), transparent 70%), radial-gradient(45% 45% at 100% 50%, hsl(var(--brand-gold) / 0.50), transparent 70%)",
        }}
      />

      {/* Layer C - bottom glow */}
      <div
        ref={layerC}
        className="absolute bottom-[-25vh] right-[-12vw] h-[65vh] w-[80vw] ambient-blur opacity-[0.30]"
        style={{
          background:
            "radial-gradient(60% 60% at 60% 60%, hsl(var(--brand-3) / 0.55), transparent 70%), radial-gradient(40% 40% at 0% 100%, hsl(var(--brand-warm) / 0.45), transparent 70%)",
        }}
      />
    </div>
  );
};

export default ScrollBackground;
