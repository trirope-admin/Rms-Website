import React from "react";

interface SoftBackgroundProps {
  variant?: "hero" | "section";
  className?: string;
}

/*
  SoftBackground renders subtle, floating radial gradient blobs using design tokens.
  - Uses brand tokens defined in index.css (brand-1, brand-2, brand-3)
  - Extremely lightweight and GPU-friendly
*/
const SoftBackground: React.FC<SoftBackgroundProps> = ({ variant = "section", className }) => {
  const isHero = variant === "hero";
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}>
      {/* Top-left violet */}
      <i
        className={`absolute -top-24 -left-24 ${isHero ? "h-72 w-72" : "h-56 w-56"} rounded-full ambient-blur float-slower opacity-[0.35]`}
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(var(--brand-1) / 0.45), transparent 60%)",
        }}
      />
      {/* Top-right cyan */}
      <i
        className={`absolute -top-16 right-[-60px] ${isHero ? "h-64 w-64" : "h-48 w-48"} rounded-full ambient-blur float-slow opacity-[0.30]`}
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(var(--brand-2) / 0.45), transparent 60%)",
        }}
      />
      {/* Bottom-center orchid */}
      <i
        className={`absolute bottom-[-80px] left-1/2 -translate-x-1/2 ${isHero ? "h-80 w-80" : "h-60 w-60"} rounded-full ambient-blur float-slowest opacity-[0.28]`}
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(var(--brand-3) / 0.45), transparent 60%)",
        }}
      />
    </div>
  );
};

export default SoftBackground;
