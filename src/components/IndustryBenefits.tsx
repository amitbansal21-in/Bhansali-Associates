import React from "react";
import { BenefitItem } from "../data/industries";
import { PageContainer } from "./PageContainer";
import { SectionHeader } from "./SectionHeader";
import "./IndustryBenefits.css";

interface IndustryBenefitsProps {
  benefits: BenefitItem[];
}

export const IndustryBenefits: React.FC<IndustryBenefitsProps> = ({ benefits }) => {
  return (
    <PageContainer size="default" padding="comfortable" className="industry-benefits-section" as="section">
      <SectionHeader
        align="center"
        eyebrow="ADVANTAGES"
        title="Fiduciary Value Delivered"
        description="We combine structural tax planning with absolute filing transparency."
        divider={true}
      />
      <div className="benefits-grid">
        {benefits.map((item, idx) => (
          <article key={idx} className="benefit-card">
            <span className="benefit-dot" aria-hidden="true">&bull;</span>
            <h3 className="benefit-card-title">{item.title}</h3>
            <p className="benefit-card-desc">{item.description}</p>
          </article>
        ))}
      </div>
    </PageContainer>
  );
};
