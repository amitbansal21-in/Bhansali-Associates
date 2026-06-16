import React from "react";
import { ServiceBenefit } from "../data/serviceTemplate";
import { PageContainer } from "./PageContainer";
import { SectionHeader } from "./SectionHeader";
import "./ServiceBenefits.css";

interface ServiceBenefitsProps {
  benefits: ServiceBenefit[];
  whyChoose: string[];
}

export const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({
  benefits,
  whyChoose
}) => {
  const renderBenefitIcon = (iconName: ServiceBenefit["iconName"]) => {
    const iconProps = {
      className: "benefit-icon",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
      "aria-hidden": "true"
    };

    switch (iconName) {
      case "shield":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        );
      case "trending":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
        );
      case "clock":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        );
      case "users":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case "settings":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        );
      case "file-text":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <PageContainer size="default" padding="comfortable" className="service-benefits-section">
      <SectionHeader
        align="center"
        eyebrow="VALUE DELIVERED"
        title="Key Practice Benefits & Core Advantages"
        description="Establishing sound statutory reporting and liquidity safeguards that secure corporate operations."
        divider={true}
      />

      <div className="benefits-layout-grid">
        {/* Left Grid: 3 Benefits Cards */}
        <div className="benefits-cards-col">
          {benefits.map((benefit, index) => (
            <article key={index} className="benefit-detail-card">
              <div className="benefit-card-icon-box" aria-hidden="true">
                {renderBenefitIcon(benefit.iconName)}
              </div>
              <div className="benefit-card-info">
                <h3 className="benefit-card-title">{benefit.title}</h3>
                <p className="benefit-card-desc">{benefit.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Right Card: Why Choose Bhansali Associates List */}
        <div className="why-choose-advisory-box">
          <h3 className="why-choose-advisory-title">Fiduciary Diligence Safeguards</h3>
          <ul className="why-choose-advisory-list">
            {whyChoose.map((point, index) => (
              <li key={index} className="why-choose-advisory-item">
                <svg className="why-choose-checkmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="why-choose-text">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageContainer>
  );
};
