import React from "react";
import { ChallengeItem } from "../data/industries";
import { PageContainer } from "./PageContainer";
import { SectionHeader } from "./SectionHeader";
import "./IndustryChallenges.css";

interface IndustryChallengesProps {
  challenges: ChallengeItem[];
  industryTitle: string;
}

export const IndustryChallenges: React.FC<IndustryChallengesProps> = ({ challenges, industryTitle }) => {
  return (
    <PageContainer size="default" padding="comfortable" className="industry-challenges-section" as="section">
      <SectionHeader
        align="center"
        eyebrow="CHALLENGES"
        title={`Common Impediments in ${industryTitle}`}
        description="Firms operating in this sector face complex operational bottlenecks, direct taxation risks, and accounting scrutiny."
        divider={true}
      />
      <div className="challenges-grid">
        {challenges.map((item, idx) => (
          <article key={idx} className="challenge-card">
            <span className="challenge-number" aria-hidden="true">0{idx + 1}</span>
            <h3 className="challenge-card-title">{item.title}</h3>
            <p className="challenge-card-desc">{item.description}</p>
          </article>
        ))}
      </div>
    </PageContainer>
  );
};
