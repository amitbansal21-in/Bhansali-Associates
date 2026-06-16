import React from "react";
import { SITE_CONFIG } from "../constants/config";
import "./ConsultationCTA.css";

export const ConsultationCTA: React.FC = () => {
  return (
    <section className="cta-section" id="consultation-cta" aria-labelledby="cta-section-heading">
      <div className="container">
        
        <div className="cta-card">
          {/* Subtle decorative background pattern */}
          <div className="cta-bg-pattern" aria-hidden="true"></div>

          {/* CTA Content */}
          <div className="cta-content">
            <span className="cta-label uppercase tracking-wider">CONSULTATION</span>
            <h2 id="cta-section-heading" className="cta-title">
              Let's Build Long-Term Financial Confidence Together
            </h2>
            <p className="cta-desc">
              Partner with a dedicated advisory team to secure your statutory compliance, optimize your institutional capital structures, and establish robust corporate governance foundations.
            </p>
            
            {/* CTA Buttons */}
            <div className="cta-action-group">
              <a 
                href={SITE_CONFIG.ctaHeaderPrimary}
                className="btn btn-primary cta-btn-primary"
                aria-label="Request a private consultation with partner accountants"
              >
                Request a Consultation
              </a>
              <a 
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="btn btn-outline cta-btn-secondary"
                aria-label={`Send an email to speak with our team at ${SITE_CONFIG.contactEmail}`}
              >
                Speak With Our Team
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
