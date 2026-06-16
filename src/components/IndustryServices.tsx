import React from "react";
import { RelatedServiceItem } from "../data/industries";
import { PageContainer } from "./PageContainer";
import { SectionHeader } from "./SectionHeader";
import "./IndustryServices.css";

interface IndustryServicesProps {
  services: RelatedServiceItem[];
}

export const IndustryServices: React.FC<IndustryServicesProps> = ({ services }) => {
  return (
    <PageContainer size="default" padding="comfortable" className="industry-services-section" as="section">
      <SectionHeader
        align="center"
        eyebrow="CORE PRACTICE ALIGNMENT"
        title="Associated Compliance Services"
        description="We align our core disciplines to protect your financial and statutory integrity."
        divider={true}
      />
      <div className="related-services-grid">
        {services.map((item, idx) => (
          <a key={idx} href={item.href} className="related-service-link-card" aria-label={`View our ${item.label} service page`}>
            <h3 className="related-service-card-title">
              {item.label}
              <span className="arrow-icon" aria-hidden="true">&rarr;</span>
            </h3>
            <p className="related-service-card-text">
              View details on how our Chartered Accountants execute professional audits and tax advisory under this service line.
            </p>
          </a>
        ))}
      </div>
    </PageContainer>
  );
};
