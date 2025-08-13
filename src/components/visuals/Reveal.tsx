import React, { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/*
  Reveal - IntersectionObserver-powered entrance animation wrapper
  - Adds visibility-triggered fade/scale using animation utilities defined in index.css
*/
const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.animationDelay = `${delay}s`;
            el.classList.add("animate-enter");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`opacity-0 will-change-transform ${className ?? ""}`}>
      {children}
    </div>
  );
};

export default Reveal;
