import React from "react";

const GeometricBackground: React.FC = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Radial gradient glow */}
      <div
        className="absolute left-1/2 top-[-20%] h-[60vh] w-[120vw] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,hsl(var(--primary)/0.25),transparent_70%)] blur-2xl"
      />

      {/* Subtle grid */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="hsl(var(--border))" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Accent shapes */}
      <div className="absolute right-[-10%] top-1/4 h-64 w-64 rotate-12 bg-gradient-to-tr from-primary/25 to-accent/20 blur-xl" />
      <div className="absolute left-[-10%] bottom-1/4 h-64 w-64 -rotate-12 bg-gradient-to-tr from-primary/20 to-accent/15 blur-xl" />
    </div>
  );
};

export default GeometricBackground;


