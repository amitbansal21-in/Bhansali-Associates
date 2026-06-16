import React from "react";
import { SolutionItem } from "../data/industries";
import { PageContainer } from "./PageContainer";
import { SectionHeader } from "./SectionHeader";
import "./IndustrySolutions.css";

interface IndustrySolutionsProps {
  solutions: SolutionItem[];
  industryTitle: string;
}

export const IndustrySolutions: React.FC<IndustrySolutionsProps> = ({ solutions, industryTitle }) => {
  return (
    <PageContainer size="default" padding="comfortable" className="industry-solutions-section" as="section">
      <SectionHeader
        align="center"
        eyebrow="SOLUTIONS"
        title="Our Compliance & Advisory Resolution"
        description={`We address the core challenges of the ${industryTitle} vertical through partner-led execution.`}
        divider={true}
      />
      <div className="solutions-grid">
        {solutions.map((item, idx) => (
          <article key={idx} className="solution-card">
            <div className="solution-icon-box" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 className="solution-card-title">{item.title}</h3>
            <p className="solution-card-desc">{item.description}</p>
          </article>
        ))}
      </div>
    </PageContainer>
  );
};
