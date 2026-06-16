import React from "react";
import { INSIGHTS_CONFIG, INSIGHTS_DATA, InsightItem } from "../data/insights";
import "./Insights.css";

export const Insights: React.FC = () => {
  const handleReadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Intercept navigation smoothly, scrolling to consultation CTA
    const contactSection = document.getElementById("hero-cta-triggers");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="insights-section" id="insights" aria-labelledby="insights-heading">
      <div className="container">
        
        {/* Section Header */}
        <header className="insights-header">
          <span className="insights-label">{INSIGHTS_CONFIG.sectionLabel}</span>
          <h2 id="insights-heading" className="insights-title">
            {INSIGHTS_CONFIG.sectionTitle}
          </h2>
          <p className="insights-desc">
            {INSIGHTS_CONFIG.supportingText}
          </p>
        </header>

        {/* 3-Card Grid */}
        <div className="insights-grid" id="insights-preview-cards">
          {INSIGHTS_DATA.map((article: InsightItem) => (
            <article 
              key={article.id} 
              className="insight-card"
              id={article.id}
            >
              {/* Article Featured Image */}
              <div className="insight-card-image-wrapper">
                {article.image ? (
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    loading="lazy"
                    width="800"
                    height="600"
                    className="insight-card-image" 
                  />
                ) : (
                  <div className="insight-card-banner" aria-hidden="true">
                    <div className="insight-banner-pattern"></div>
                    <span className="insight-banner-tag">BA INSIGHTS</span>
                  </div>
                )}
              </div>

              <div className="insight-card-content">
                {/* Category Badge */}
                <div className="insight-category-wrapper">
                  <span className="insight-category-badge uppercase">
                    {article.category}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="insight-card-title">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="insight-card-desc">
                  {article.description}
                </p>

                {/* Metadata Row */}
                <div className="insight-metadata">
                  <span className="insight-date">{article.publishedDate}</span>
                  <span className="insight-metadata-divider" aria-hidden="true">&bull;</span>
                  <span className="insight-read-time">{article.readingTime}</span>
                </div>

                {/* Read Link */}
                <div className="insight-action">
                  <a 
                    href={article.route}
                    className="insight-card-link"
                    onClick={handleReadClick}
                    aria-label={`Read article about ${article.title}`}
                  >
                    Read Article 
                    <span className="arrow-icon" aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
