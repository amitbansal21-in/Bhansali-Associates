import React from "react";
import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb";
import "./PageBanner.css";

export interface PageBannerProps {
  badge?: string;
  label?: string;
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  cta?: {
    label: string;
    url: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  };
  theme?: "dark" | "light" | "gold-gradient" | "navy-gradient" | "minimal";
  backgroundImage?: string;
  backgroundGradient?: string;
  backgroundPattern?: boolean;
  backgroundColor?: string;
  overlayOpacity?: number;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  badge,
  label,
  title,
  subtitle,
  breadcrumbs,
  cta,
  theme = "dark",
  backgroundImage,
  backgroundGradient,
  backgroundPattern = true,
  backgroundColor,
  overlayOpacity = 0.5
}) => {
  // Determine inline styles for customizable background configurations
  const bannerStyles: React.CSSProperties = {};
  const overlayStyles: React.CSSProperties = {};

  if (backgroundImage) {
    bannerStyles.backgroundImage = `url(${backgroundImage})`;
  } else if (backgroundGradient) {
    bannerStyles.background = backgroundGradient;
  } else if (backgroundColor) {
    bannerStyles.backgroundColor = backgroundColor;
  }

  if (overlayOpacity !== undefined) {
    overlayStyles.backgroundColor = `rgba(10, 25, 47, ${overlayOpacity})`;
  }

  return (
    <section 
      className={`page-banner theme-${theme}`} 
      style={bannerStyles}
      aria-labelledby="banner-title"
    >
      {/* Banner background overlay (for image backdrops) */}
      {backgroundImage && (
        <div className="banner-overlay" style={overlayStyles} aria-hidden="true"></div>
      )}

      {/* Decorative vector grid pattern overlay */}
      {backgroundPattern && (
        <div className="banner-pattern" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.05" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
      )}

      <div className="container banner-container">
        <div className="banner-content">
          
          {/* Badge indicator */}
          {badge && (
            <span className="banner-badge uppercase tracking-wider font-semibold">
              {badge}
            </span>
          )}

          {/* Micro-label */}
          {label && (
            <span className="banner-label uppercase tracking-wider">
              {label}
            </span>
          )}

          {/* Main heading */}
          <h1 id="banner-title" className="banner-title text-h1 font-bold">
            {title}
          </h1>

          {/* Supporting paragraph text */}
          {subtitle && (
            <p className="banner-subtitle text-body-large">
              {subtitle}
            </p>
          )}

          {/* CTA Action button */}
          {cta && (
            <div className="banner-cta">
              <a 
                href={cta.url} 
                className="btn btn-primary banner-cta-btn"
                onClick={cta.onClick}
              >
                {cta.label}
              </a>
            </div>
          )}

          {/* Standardized Breadcrumbs container */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="banner-breadcrumbs">
              <Breadcrumb items={breadcrumbs} />
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
