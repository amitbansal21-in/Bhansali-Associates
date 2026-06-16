import React from "react";
import { SITE_CONFIG } from "../constants/config";
import "./ServiceCTA.css";

interface ServiceCTAProps {
  serviceName: string;
}

export const ServiceCTA: React.FC<ServiceCTAProps> = ({ serviceName }) => {
  return (
    <section className="service-cta-section" id="service-engagement-cta" aria-labelledby="service-cta-heading">
      <div className="container">
        
        <div className="service-cta-card">
          <div className="service-cta-bg-pattern" aria-hidden="true"></div>

          <div className="service-cta-content">
            <span className="service-cta-label uppercase tracking-wider">CONSULTATION</span>
            <h2 id="service-cta-heading" className="service-cta-title">
              Let's Align Your {serviceName} Compliance Requirements
            </h2>
            <p className="service-cta-desc">
              Schedule a private engagement review with Ashish Bhansali. We will assess your corporate records, outline statutory optimizations, and secure filing schedules.
            </p>
            
            <div className="service-cta-action-group">
              <a 
                href={SITE_CONFIG.ctaHeaderPrimary}
                className="btn btn-primary service-cta-btn-primary"
                aria-label={`Request a private consultation for ${serviceName}`}
              >
                Request a Consultation
              </a>
              <a 
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="btn btn-outline service-cta-btn-secondary"
                aria-label={`Email our advisory desk at ${SITE_CONFIG.contactEmail}`}
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
