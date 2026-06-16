import React, { useState } from "react";
import { ServiceFaq } from "../data/serviceTemplate";
import { PageContainer } from "./PageContainer";
import { SectionHeader } from "./SectionHeader";
import "./ServiceFAQ.css";

interface ServiceFAQProps {
  faqs: ServiceFaq[];
  serviceTitle: string;
  serviceDescription: string;
}

export const ServiceFAQ: React.FC<ServiceFAQProps> = ({
  faqs,
  serviceTitle,
  serviceDescription
}) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setActiveIdx((prev) => (prev === idx ? null : idx));
  };

  const origin = typeof window !== "undefined" ? window.location.origin : "";

  // Schema 1: FAQPage JSON-LD
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Schema 2: Service JSON-LD
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceTitle,
    "description": serviceDescription,
    "serviceType": "Accounting, Auditing, and Tax Consulting Services",
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Mira Road"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Mira Bhayandar"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Bhayandar"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Thane"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Mumbai"
      }
    ],
    "provider": {
      "@type": "AccountingService",
      "name": "Bhansali Associates",
      "url": origin,
      "telephone": "+91-8369123198",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "I 602, Ratna Heights CHSL, Planateria Complex, Near Maheshwari Bhavan, Bhayandar West",
        "addressLocality": "Thane, Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "401101",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      {/* Dynamic SEO JSON-LD Injections */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <PageContainer size="narrow" padding="comfortable" className="service-faq-container">
        <SectionHeader
          align="center"
          eyebrow="FAQ"
          title="Practice Queries"
          description="Find answers to key procedural questions regarding our compliance reviews and filing cycles."
          divider={true}
        />

        <div className="service-faq-accordion">
          {faqs.map((faq, idx) => {
            const isOpen = idx === activeIdx;
            return (
              <div 
                key={idx} 
                className={`service-faq-item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="service-faq-trigger"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`service-faq-panel-${idx}`}
                  id={`service-faq-trigger-${idx}`}
                >
                  <span className="service-faq-question">{faq.question}</span>
                  <span className="service-faq-chevron-wrapper" aria-hidden="true">
                    <svg className="service-faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                <div
                  id={`service-faq-panel-${idx}`}
                  className="service-faq-panel"
                  role="region"
                  aria-labelledby={`service-faq-trigger-${idx}`}
                  aria-hidden={!isOpen}
                >
                  <div className="service-faq-answer">
                    <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </PageContainer>
    </>
  );
};
