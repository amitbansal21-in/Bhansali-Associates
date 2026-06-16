import React from "react";
import { ServiceProcessStep } from "../data/serviceTemplate";
import { PageContainer } from "./PageContainer";
import { SectionHeader } from "./SectionHeader";
import "./ServiceProcess.css";

interface ServiceProcessProps {
  steps: ServiceProcessStep[];
}

export const ServiceProcess: React.FC<ServiceProcessProps> = ({ steps }) => {
  return (
    <PageContainer size="default" padding="comfortable" className="service-process-section-block">
      <SectionHeader
        align="center"
        eyebrow="EXECUTION SCHEDULE"
        title="Engagement Flow & Review Timelines"
        description="Every project follows a transparent methodology designed to guarantee filing accuracies."
        divider={true}
      />

      <div className="service-process-cards-grid">
        {steps.map((step, index) => (
          <div key={index} className="service-process-card-node">
            <div className="process-step-indicator-wrapper">
              <span className="process-step-number-value">{step.stepNumber}</span>
            </div>
            <h3 className="process-step-card-title">{step.title}</h3>
            <p className="process-step-card-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};
