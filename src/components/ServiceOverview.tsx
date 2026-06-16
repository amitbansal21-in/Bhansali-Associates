import React from "react";
import { PageContainer } from "./PageContainer";
import "./ServiceOverview.css";

export interface ServiceOverviewProps {
  title: string;
  paragraphs: string[];
}

export const ServiceOverview: React.FC<ServiceOverviewProps> = ({
  title,
  paragraphs
}) => {
  return (
    <PageContainer size="default" padding="comfortable" className="service-overview-container">
      <div className="service-overview-grid">
        <div className="overview-headline">
          <h2 className="overview-h2 text-h2 font-bold">
            {title}
          </h2>
          <div className="overview-accent-bar" aria-hidden="true"></div>
        </div>
        <div className="overview-narrative text-body">
          {paragraphs.map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
};
