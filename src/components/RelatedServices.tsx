import React from "react";
import { SERVICES_DETAIL_DATA } from "../data/serviceTemplate";
import { PageContainer } from "./PageContainer";
import { SectionHeader } from "./SectionHeader";
import "./RelatedServices.css";

export interface RelatedServicesProps {
  relatedSlugs: string[];
  onRelatedClick?: (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => void;
}

export const RelatedServices: React.FC<RelatedServicesProps> = ({
  relatedSlugs,
  onRelatedClick
}) => {
  if (!relatedSlugs || relatedSlugs.length === 0) return null;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    if (onRelatedClick) {
      onRelatedClick(e, slug);
    } else {
      e.preventDefault();
      // Graceful default fallback: smooth scrolls to the consultation desk
      const ctaBlock = document.getElementById("service-engagement-cta");
      if (ctaBlock) {
        ctaBlock.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <PageContainer size="default" padding="comfortable" className="related-services-section">
      <SectionHeader
        align="center"
        eyebrow="DOMAINS"
        title="Related Practice Areas"
        description="Explore our complementary statutory compliance and working capital syndication advisories."
        divider={true}
      />

      <div className="related-services-grid">
        {relatedSlugs.map((slug) => {
          const relatedData = SERVICES_DETAIL_DATA[slug];
          if (!relatedData) return null;
          return (
            <article key={slug} className="related-card">
              <div className="related-card-content-inner">
                <span className="related-card-badge-label uppercase tracking-wider">{relatedData.badge}</span>
                <h3 className="related-card-headline">{relatedData.title}</h3>
                <p className="related-card-supporting-text">{relatedData.subtitle}</p>
                
                <div className="related-card-action-trigger">
                  <a 
                    href={`/services/${slug}`}
                    onClick={(e) => handleLinkClick(e, slug)}
                    className="related-card-action-link"
                    aria-label={`Explore our ${relatedData.badge} service`}
                  >
                    Explore Practice 
                    <span className="related-card-arrow" aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </PageContainer>
  );
};
