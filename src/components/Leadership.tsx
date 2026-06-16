import React from "react";
import { LEADERSHIP_CONFIG, FOUNDERS_DATA, FounderItem } from "../data/founders";
import "./Leadership.css";

export const Leadership: React.FC = () => {
  return (
    <section className="leadership-section" id="leadership" aria-labelledby="leadership-heading">
      <div className="container">
        
        {/* Section Header */}
        <header className="leadership-header">
          <span className="leadership-label">{LEADERSHIP_CONFIG.sectionLabel}</span>
          <h2 id="leadership-heading" className="leadership-title">
            {LEADERSHIP_CONFIG.sectionTitle}
          </h2>
          <p className="leadership-desc">
            {LEADERSHIP_CONFIG.supportingText}
          </p>
        </header>

        {/* 2-Column Founder Grid */}
        <div className="founders-grid" id="founders-grid-container">
          {FOUNDERS_DATA.map((founder: FounderItem) => (
            <article 
              key={founder.id} 
              className="founder-card" 
              id={founder.id}
            >
              {/* Aspect-Ratio Locked Image Box */}
              <div className="founder-image-box">
                <img 
                  src={founder.image} 
                  alt={`${founder.name} - ${founder.designation}`}
                  className="founder-img"
                  loading="lazy"
                  width="400"
                  height="500"
                />
              </div>

              {/* Founder Information */}
              <div className="founder-info">
                <span className="founder-designation uppercase tracking-wider font-semibold">
                  {founder.designation}
                </span>
                <h3 className="founder-name">
                  {founder.name}
                </h3>
                <p className="founder-bio">
                  {founder.shortDescription}
                </p>

                {/* LinkedIn Link (Hidden dynamically if URL is blank) */}
                {founder.linkedin && (
                  <div className="founder-social">
                    <a 
                      href={founder.linkedin}
                      className="founder-linkedin-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${founder.name}'s LinkedIn Profile`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Editorial Quote Block */}
        <div className="editorial-quote-container" id="leadership-quote-block">
          <blockquote className="editorial-quote">
            <span className="quote-mark open-quote" aria-hidden="true">&ldquo;</span>
            <p className="quote-text">{LEADERSHIP_CONFIG.editorialQuote}</p>
            <span className="quote-mark close-quote" aria-hidden="true">&rdquo;</span>
          </blockquote>
        </div>

        {/* Purpose & Commitment Blocks */}
        <div className="purpose-commitment-grid" id="purpose-commitment-statements">
          {/* Our Purpose Column */}
          <div className="statement-block purpose-block">
            <h4 className="statement-title">{LEADERSHIP_CONFIG.purposeTitle}</h4>
            <p className="statement-content">{LEADERSHIP_CONFIG.purposeContent}</p>
          </div>
          
          {/* Mobile Divider (handled in CSS, but visually separating the grid) */}
          <div className="statement-divider" aria-hidden="true"></div>

          {/* Our Commitment Column */}
          <div className="statement-block commitment-block">
            <h4 className="statement-title">{LEADERSHIP_CONFIG.commitmentTitle}</h4>
            <p className="statement-content">{LEADERSHIP_CONFIG.commitmentContent}</p>
          </div>
        </div>

      </div>
    </section>
  );
};
