import React from "react";
import { Navigate } from "react-router-dom";
import { INDUSTRIES_DATA, IndustryItem } from "../data/industries";
import { IndustrySEO } from "../components/IndustrySEO";
import { IndustryHero } from "../components/IndustryHero";
import { IndustryChallenges } from "../components/IndustryChallenges";
import { IndustrySolutions } from "../components/IndustrySolutions";
import { IndustryServices } from "../components/IndustryServices";
import { IndustryBenefits } from "../components/IndustryBenefits";
import { IndustryFAQ } from "../components/IndustryFAQ";
import { IndustryCTA } from "../components/IndustryCTA";
import { PageContainer } from "../components/PageContainer";
import "./IndustryTemplate.css";

interface IndustryTemplateProps {
  industrySlug: string;
}

export const IndustryTemplate: React.FC<IndustryTemplateProps> = ({ industrySlug }) => {
  // Find matching industry data by comparing slug ending
  const industry: IndustryItem | undefined = INDUSTRIES_DATA.find(
    (item) => item.route.endsWith(`/${industrySlug}`)
  );

  // Fallback redirection if the industry vertical slug is not found in database
  if (!industry) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="industry-detail-page-wrapper">
      {/* 1. Dynamic SEO tags and schemas injection */}
      <IndustrySEO industry={industry} />

      {/* 2. Page Hero Banner */}
      <IndustryHero industry={industry} />

      {/* 3. Industry Overview Description */}
      <PageContainer size="default" padding="comfortable" className="industry-overview-section" as="section">
        <div className="industry-overview-inner">
          <div className="overview-header-group">
            <span className="overview-badge uppercase tracking-wider">Overview</span>
            <h2 className="overview-title font-semibold">Statutory Oversight &amp; Strategic Advisory</h2>
          </div>
          <div className="overview-text-content">
            <p dangerouslySetInnerHTML={{ __html: industry.overview }} />
            {industry.complianceRisks && (
              <div className="expanded-industry-block">
                <h3 className="expanded-block-title">Compliance Risks &amp; Regulatory Exposure</h3>
                <p dangerouslySetInnerHTML={{ __html: industry.complianceRisks }} />
              </div>
            )}
            {industry.growthOpportunities && (
              <div className="expanded-industry-block">
                <h3 className="expanded-block-title">Growth &amp; Scaling Opportunities</h3>
                <p dangerouslySetInnerHTML={{ __html: industry.growthOpportunities }} />
              </div>
            )}
            {industry.sectorTaxation && (
              <div className="expanded-industry-block">
                <h3 className="expanded-block-title">Sector-Specific Taxation &amp; Corporate Structures</h3>
                <p dangerouslySetInnerHTML={{ __html: industry.sectorTaxation }} />
              </div>
            )}
            {industry.industryBestPractices && (
              <div className="expanded-industry-block">
                <h3 className="expanded-block-title">Industry-Specific Financial Best Practices</h3>
                <p dangerouslySetInnerHTML={{ __html: industry.industryBestPractices }} />
              </div>
            )}
            <p>Our Chartered Accountants compile precise audits and implement structured compliance workflows that allow businesses to navigate complex legal parameters seamlessly while focusing on scaling their market footprint.</p>
          </div>
        </div>
      </PageContainer>

      {/* 4. Common Challenges */}
      <IndustryChallenges challenges={industry.challenges} industryTitle={industry.title} />

      {/* 5. Bhansali Associates Solutions */}
      <IndustrySolutions solutions={industry.solutions} industryTitle={industry.title} />

      {/* 6. Related Services */}
      <IndustryServices services={industry.relatedServices} />

      {/* 7. Benefits of Working With Us */}
      <IndustryBenefits benefits={industry.benefits} />

      {/* 8. Frequently Asked Questions */}
      <IndustryFAQ faqs={industry.faqs} industryTitle={industry.title} />

      {/* 9. Consultation CTA */}
      <IndustryCTA />
    </div>
  );
};
