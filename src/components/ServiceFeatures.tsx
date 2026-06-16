import React from "react";
import { ServiceFeatureItem } from "../data/serviceTemplate";
import { PageContainer } from "./PageContainer";
import { SectionHeader } from "./SectionHeader";
import "./ServiceFeatures.css";

export interface ServiceFeaturesProps {
  title?: string;
  features: ServiceFeatureItem[];
}

export const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({
  title = "Our Core Expertise",
  features
}) => {
  return (
    <PageContainer size="default" padding="comfortable" className="service-features-section">
      <SectionHeader
        align="center"
        eyebrow="OUR EXPERTISE"
        title={title}
        description="Review our primary service domains and regulatory practices below."
        divider={true}
      />

      <div className="service-features-grid">
        {features.map((feature, index) => (
          <article key={index} className="service-feature-card">
            <h3 className="service-feature-card-title">{feature.title}</h3>
            <p className="service-feature-card-desc">{feature.desc}</p>
          </article>
        ))}
      </div>
    </PageContainer>
  );
};
