import React, { useEffect, useState } from "react";
import "./StickyProgress.css";

export const StickyProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const scrolled = (window.scrollY / totalHeight) * 100;
        setProgress(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run initial offset check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (isReducedMotion) return null;

  return (
    <div className="sticky-progress-container" aria-hidden="true">
      <div
        className="sticky-progress-bar"
        style={{ transform: `scaleX(${progress / 100})` }}
      ></div>
    </div>
  );
};
