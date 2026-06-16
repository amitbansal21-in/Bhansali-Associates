import React from "react";
import { INDUSTRIES_CONFIG, INDUSTRIES_DATA, IndustryItem } from "../data/industries";
import "./Industries.css";

export const Industries: React.FC = () => {
  const renderIcon = (iconName: IndustryItem["iconName"]) => {
    const iconProps = {
      className: "industry-icon",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
      "aria-hidden": "true"
    };

    switch (iconName) {
      case "manufacturing":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M22 21H2V3l7 4v3l7-4v3l6-4v18Z" />
            <line x1="6" y1="14" x2="8" y2="14" />
            <line x1="6" y1="17" x2="8" y2="17" />
            <line x1="14" y1="14" x2="16" y2="14" />
            <line x1="14" y1="17" x2="16" y2="17" />
          </svg>
        );
      case "construction":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="9" y1="3" x2="9" y2="21" />
            <line x1="15" y1="3" x2="15" y2="21" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="3" y1="15" x2="21" y2="15" />
          </svg>
        );
      case "technology":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <rect x="2" y="2" width="20" height="8" rx="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" />
            <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="2.5" />
            <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="2.5" />
            <line x1="12" y1="10" x2="12" y2="14" />
            <line x1="12" y1="6" x2="18" y2="6" />
            <line x1="12" y1="18" x2="18" y2="18" />
          </svg>
        );
      case "distribution":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <polyline points="21 16 12 21 3 16 12 11 21 16" />
            <polyline points="3 16 3 8 12 3 21 8 21 16" />
            <line x1="12" y1="3" x2="12" y2="11" />
            <line x1="12" y1="21" x2="12" y2="11" />
          </svg>
        );
      case "healthcare":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        );
      case "nri":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            <line x1="2" y1="12" x2="22" y2="12" />
          </svg>
        );
      default:
        return null;
    }
  };

  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById("industries");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="industries-section" id="industries" aria-labelledby="industries-heading">
      <div className="container">
        
        {/* Section Header */}
        <header className="industries-header">
          <span className="industries-label">{INDUSTRIES_CONFIG.sectionLabel}</span>
          <h2 id="industries-heading" className="industries-title">
            {INDUSTRIES_CONFIG.sectionTitle}
          </h2>
          <p className="industries-desc">
            {INDUSTRIES_CONFIG.supportingText}
          </p>
        </header>

        {/* 6-Card Responsive Grid */}
        <div className="industries-grid" id="industries-grid-cards">
          {INDUSTRIES_DATA.map((industry: IndustryItem) => (
            <article 
              key={industry.id} 
              className="industry-card"
              id={industry.id}
            >
              {/* Premium Icon Container */}
              <div className="industry-icon-container">
                {renderIcon(industry.iconName)}
              </div>

              {/* Industry Title */}
              <h3 className="industry-card-title">
                {industry.title}
              </h3>

              {/* Short Description */}
              <p className="industry-card-desc">
                {industry.shortDescription}
              </p>

              {/* Configurable routing explore trigger */}
              <div className="industry-card-action">
                <a 
                  href={industry.route}
                  className="industry-card-link"
                  aria-label={`Learn more about our advisory services for the ${industry.title} industry`}
                >
                  Explore More
                  <span className="arrow-icon" aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
