import React, { useState } from "react";
import { IndustryFaq } from "../data/industries";
import { PageContainer } from "./PageContainer";
import { SectionHeader } from "./SectionHeader";
import "./IndustryFAQ.css";

interface IndustryFAQProps {
  faqs: IndustryFaq[];
  industryTitle: string;
}

export const IndustryFAQ: React.FC<IndustryFAQProps> = ({ faqs, industryTitle }) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setActiveIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <PageContainer size="narrow" padding="comfortable" className="industry-faq-section" as="section">
      <SectionHeader
        align="center"
        eyebrow="FAQ"
        title="Sector-Specific Queries"
        description={`Common financial and compliance queries regarding our ${industryTitle} practice.`}
        divider={true}
      />
      <div className="industry-faq-accordion">
        {faqs.map((faq, idx) => {
          const isOpen = idx === activeIdx;
          return (
            <div key={idx} className={`industry-faq-item ${isOpen ? "is-open" : ""}`}>
              <button
                type="button"
                className="industry-faq-trigger"
                onClick={() => toggleAccordion(idx)}
                aria-expanded={isOpen}
                aria-controls={`industry-faq-panel-${idx}`}
                id={`industry-faq-trigger-${idx}`}
              >
                <span className="industry-faq-question">{faq.question}</span>
                <span className="industry-faq-chevron-wrapper" aria-hidden="true">
                  <svg className="industry-faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>
              <div
                id={`industry-faq-panel-${idx}`}
                className="industry-faq-panel"
                role="region"
                aria-labelledby={`industry-faq-trigger-${idx}`}
                aria-hidden={!isOpen}
              >
                <div className="industry-faq-answer">
                  <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </PageContainer>
  );
};
