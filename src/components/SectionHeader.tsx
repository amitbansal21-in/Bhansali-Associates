import React from "react";
import "./SectionHeader.css";

export interface SectionHeaderProps {
  eyebrow?: string;
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  divider?: boolean;
  animate?: boolean;
  id?: string;
  maxWidth?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  label,
  title,
  description,
  align = "center",
  divider = false,
  animate = false,
  id,
  maxWidth
}) => {
  const headerStyles: React.CSSProperties = {};
  if (maxWidth) {
    headerStyles.maxWidth = maxWidth;
  }

  return (
    <header 
      className={`section-header text-${align} ${animate ? "has-animate" : ""}`}
      id={id}
      style={headerStyles}
    >
      {/* Eyebrow Label (e.g. "WHO WE ARE") */}
      {eyebrow && (
        <span className="section-header-eyebrow uppercase tracking-wider font-semibold">
          {eyebrow}
        </span>
      )}

      {/* Label (alternate secondary label) */}
      {label && (
        <span className="section-header-label uppercase tracking-wider">
          {label}
        </span>
      )}

      {/* Title */}
      <h2 className="section-header-title text-h2 font-bold">
        {title}
      </h2>

      {/* Optional Gold Accent Divider */}
      {divider && (
        <div className="section-header-divider" aria-hidden="true"></div>
      )}

      {/* Description */}
      {description && (
        <p className="section-header-desc text-body">
          {description}
        </p>
      )}
    </header>
  );
};
