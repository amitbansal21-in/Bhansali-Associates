import React from "react";
import { STATISTICS_CONFIG, TRUST_CARDS_DATA, TrustCard } from "../data/statistics";
import "./Statistics.css";

export const Statistics: React.FC = () => {
  const renderIcon = (iconName: TrustCard["iconName"]) => {
    const iconProps = {
      className: "trust-card-icon",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
      "aria-hidden": "true"
    };

    switch (iconName) {
      case "partner":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case "regulatory":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <polyline points="9 11 11 13 15 9" />
          </svg>
        );
      case "relationship":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        );
      case "guidance":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="statistics-section" id="commitment" aria-labelledby="commitment-heading">
      <div className="container">
        
        {/* Section Header */}
        <header className="statistics-header">
          <span className="statistics-label">{STATISTICS_CONFIG.sectionLabel}</span>
          <h2 id="commitment-heading" className="statistics-title">
            {STATISTICS_CONFIG.sectionTitle}
          </h2>
          <p className="statistics-desc">
            {STATISTICS_CONFIG.supportingText}
          </p>
        </header>

        {/* 4-Card Responsive Grid */}
        <div className="statistics-grid" id="trust-cards-grid">
          {TRUST_CARDS_DATA.map((card: TrustCard) => (
            <article 
              key={card.id} 
              className="trust-card"
              id={card.id}
              tabIndex={0}
              aria-labelledby={`${card.id}-title`}
            >
              {/* Premium Icon Container */}
              <div className="trust-card-icon-container">
                {renderIcon(card.iconName)}
              </div>
              
              {/* Card Title */}
              <h3 id={`${card.id}-title`} className="trust-card-title">
                {card.title}
              </h3>
              
              {/* Card Divider line */}
              <hr className="trust-card-divider" aria-hidden="true" />
              
              {/* Card Description */}
              <p className="trust-card-desc">
                {card.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
