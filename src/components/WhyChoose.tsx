import React from "react";
import { WHY_CHOOSE_DATA, TrustPillar } from "../data/whyChoose";
import "./WhyChoose.css";

export const WhyChoose: React.FC = () => {
  const renderIcon = (iconKey: string) => {
    const iconProps = {
      className: "why-choose-card-icon",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
      "aria-hidden": "true"
    };

    switch (iconKey) {
      case "expertise":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="rgba(197, 160, 89, 0.05)" />
            <path d="M2 12h20" />
          </svg>
        );
      case "precision":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" fill="rgba(197, 160, 89, 0.05)" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2" />
          </svg>
        );
      case "advisory":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="rgba(197, 160, 89, 0.08)" />
          </svg>
        );
      case "partnership":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M5 12h14" />
            <path d="M12 5v14" />
            <circle cx="12" cy="12" r="6" fill="rgba(197, 160, 89, 0.05)" strokeWidth="2" />
            <circle cx="12" cy="12" r="9" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="why-choose-section" id="why-choose-us" aria-labelledby="why-choose-heading">
      <div className="container">
        
        {/* Section Header */}
        <div className="why-choose-header">
          <span className="why-choose-label">{WHY_CHOOSE_DATA.sectionLabel}</span>
          <h2 className="why-choose-title" id="why-choose-heading">
            {WHY_CHOOSE_DATA.sectionTitle}
          </h2>
          <p className="why-choose-desc">
            {WHY_CHOOSE_DATA.sectionDescription}
          </p>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="why-choose-grid" id="why-choose-pillars-grid">
          {WHY_CHOOSE_DATA.pillars.map((pillar: TrustPillar) => (
            <div 
              key={pillar.id} 
              className="why-choose-card" 
              id={pillar.id}
            >
              {/* SVG Icon */}
              <div className="why-choose-card-icon-container">
                {renderIcon(pillar.icon)}
              </div>
              
              {/* Pillar Title */}
              <h3 className="why-choose-card-title">{pillar.title}</h3>
              
              {/* Pillar Description */}
              <p className="why-choose-card-desc">{pillar.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
