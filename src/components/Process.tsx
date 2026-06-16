import React from "react";
import { PROCESS_CONFIG, PROCESS_STEPS_DATA, ProcessStep } from "../data/process";
import "./Process.css";

export const Process: React.FC = () => {
  const renderIcon = (iconName: ProcessStep["iconName"]) => {
    const iconProps = {
      className: "process-icon",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
      "aria-hidden": "true"
    };

    switch (iconName) {
      case "discovery":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        );
      case "review":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        );
      case "planning":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </svg>
        );
      case "execution":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        );
      case "support":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="process-section" id="process" aria-labelledby="process-heading">
      <div className="container">
        
        {/* Section Header */}
        <header className="process-header">
          <span className="process-label">{PROCESS_CONFIG.sectionLabel}</span>
          <h2 id="process-heading" className="process-title">
            {PROCESS_CONFIG.sectionTitle}
          </h2>
          <p className="process-desc">
            {PROCESS_CONFIG.supportingText}
          </p>
        </header>

        {/* Timeline Layout */}
        <div className="process-timeline" id="process-timeline-container">
          {/* Connector Line in Background */}
          <div className="timeline-connector-line" aria-hidden="true"></div>

          <div className="process-grid">
            {PROCESS_STEPS_DATA.map((step: ProcessStep) => (
              <article 
                key={step.id} 
                className="process-card"
                id={step.id}
              >
                {/* Gold Step Number Indicator */}
                <div className="process-number-badge">
                  <span className="process-number">{step.stepNumber}</span>
                </div>

                {/* Card Icon Wrapper */}
                <div className="process-icon-container">
                  {renderIcon(step.iconName)}
                </div>

                {/* Step Title */}
                <h3 className="process-card-title">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="process-card-desc">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
