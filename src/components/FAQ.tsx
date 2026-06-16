import React, { useState } from "react";
import { FAQ_CONFIG, FAQ_DATA, FaqItem } from "../data/faq";
import "./FAQ.css";

export const FAQ: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIdx((prev) => (prev === index ? null : index));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/<[^>]*>/g, "") // strip tags for schema text
      }
    }))
  };

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container">
        
        {/* Section Header */}
        <header className="faq-header">
          <span className="faq-label">{FAQ_CONFIG.sectionLabel}</span>
          <h2 id="faq-heading" className="faq-title">
            {FAQ_CONFIG.sectionTitle}
          </h2>
          <p className="faq-desc">
            {FAQ_CONFIG.supportingText}
          </p>
        </header>

        {/* FAQ Accordion List */}
        <div className="faq-accordion" id="faq-accordion-group">
          {FAQ_DATA.map((faq: FaqItem, idx) => {
            const isOpen = idx === activeIdx;
            return (
              <div 
                key={faq.id} 
                className={`faq-item ${isOpen ? "is-open" : ""}`}
              >
                {/* Accordion Trigger Button */}
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`${faq.id}-content`}
                  id={`${faq.id}-trigger`}
                >
                  <span className="faq-question">{faq.question}</span>
                  
                  {/* Chevron Icon */}
                  <span className="faq-icon-wrapper" aria-hidden="true">
                    <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                {/* Accordion Panel Content */}
                <div
                  id={`${faq.id}-content`}
                  className="faq-panel"
                  role="region"
                  aria-labelledby={`${faq.id}-trigger`}
                  aria-hidden={!isOpen}
                >
                  <div className="faq-answer">
                    <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
