import React from "react";
import { SITE_CONFIG } from "../constants/config";

interface IllustrationProps {
  className?: string;
}

export const Illustration: React.FC<IllustrationProps> = ({ className = "" }) => {
  const illustrationSrc = SITE_CONFIG.heroIllustrationSrc;

  if (illustrationSrc) {
    return (
      <img
        src={illustrationSrc}
        alt="Bhansali Associates Fiduciary Illustration"
        width="480"
        height="480"
        className={`hero-svg ${className}`}
        loading="eager"
        style={{ aspectRatio: "1 / 1", objectFit: "contain" }}
      />
    );
  }

  return (
    <svg 
      viewBox="0 0 500 500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`hero-svg ${className}`} 
      aria-hidden="true" 
      role="img"
    >
      <defs>
        {/* Radial backdrop glow representing luxury & prosperity */}
        <radialGradient id="lux-glow-svg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity={0.14} />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity={0} />
        </radialGradient>
        
        {/* Premium metallic gold gradient sequence */}
        <linearGradient id="g-gold-svg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-accent)" />
          <stop offset="50%" stopColor="#E2C17D" />
          <stop offset="100%" stopColor="#9C7733" />
        </linearGradient>
        
        {/* Rich corporate navy gradient depth */}
        <linearGradient id="g-navy-svg" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.15} />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0.8} />
        </linearGradient>
        
        {/* Solid support shading structure */}
        <linearGradient id="g-shading-svg" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E3A63" />
          <stop offset="100%" stopColor="var(--color-primary)" />
        </linearGradient>
      </defs>
      
      {/* Atmospheric Background Aura */}
      <circle cx="250" cy="250" r="220" fill="url(#lux-glow-svg)" />
      
      {/* Axis gridlines illustrating organizational balance and compliance structure */}
      <g opacity="0.12">
        <circle cx="250" cy="250" r="180" stroke="var(--color-primary)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="250" cy="250" r="130" stroke="var(--color-primary)" strokeWidth="1" />
        <line x1="70" y1="250" x2="430" y2="250" stroke="var(--color-primary)" strokeWidth="1" />
        <line x1="250" y1="70" x2="250" y2="430" stroke="var(--color-primary)" strokeWidth="1" />
        <line x1="122.7" y1="122.7" x2="377.3" y2="377.3" stroke="var(--color-primary)" strokeWidth="1" strokeDasharray="4 4" />
      </g>
      
      {/* Safeguard Shield Arc — Emblem of structural asset fortification */}
      <path 
        d="M 110,180 A 180,180 0 0,0 390,180 L 250,420 Z" 
        stroke="url(#g-gold-svg)" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        opacity="0.85" 
      />
      
      {/* Fiduciary Core Crystal Prism (Absolute Alignment) */}
      <path 
        d="M 250,130 L 370,250 L 250,370 L 130,250 Z" 
        fill="url(#g-navy-svg)" 
        stroke="var(--color-primary)" 
        strokeWidth="1.5" 
      />
      
      {/* Balanced Isometric Pillar Structure */}
      <g transform="translate(250, 250)" className="pillar-group">
        {/* Top Hexagonal Face in rich luxury gold */}
        <path d="M 0,-40 L 35,-20 L 0,0 L -35,-20 Z" fill="url(#g-gold-svg)" opacity="0.95" />
        {/* Shadow Shaded left quadrant of stability */}
        <path d="M -35,-20 L 0,0 L 0,40 L -35,20 Z" fill="url(#g-shading-svg)" />
        {/* Core right facet */}
        <path d="M 35,-20 L 0,0 L 0,40 L 35,20 Z" fill="var(--color-primary)" />
        
        {/* Orbital gold balance rings */}
        <circle 
          cx="0" 
          cy="0" 
          r="55" 
          stroke="url(#g-gold-svg)" 
          strokeWidth="2" 
          fill="none" 
          opacity="0.5" 
          transform="rotate(-15) scale(1, 0.5)" 
        />
      </g>
      
      {/* Pivot nodes depicting structural cross-collaboration */}
      <circle cx="130" cy="250" r="6" fill="var(--color-primary)" stroke="var(--color-surface)" strokeWidth="2" />
      <circle cx="370" cy="250" r="6" fill="var(--color-accent)" stroke="var(--color-surface)" strokeWidth="2" />
      <circle cx="250" cy="130" r="6" fill="var(--color-accent)" stroke="var(--color-surface)" strokeWidth="2" />
      <circle cx="250" cy="370" r="6" fill="var(--color-primary)" stroke="var(--color-surface)" strokeWidth="2" />
    </svg>
  );
};
