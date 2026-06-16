import React from "react";
import { SERVICES_DETAIL_DATA, ServiceDetailData } from "../data/serviceTemplate";
import { ServiceHero } from "../components/ServiceHero";
import { ServiceOverview } from "../components/ServiceOverview";
import { ServiceBenefits } from "../components/ServiceBenefits";
import { ServiceFeatures } from "../components/ServiceFeatures";
import { ServiceProcess } from "../components/ServiceProcess";
import { ServiceFAQ } from "../components/ServiceFAQ";
import { RelatedServices } from "../components/RelatedServices";
import { ServiceCTA } from "../components/ServiceCTA";
import { PageContainer } from "../components/PageContainer";
import { SectionHeader } from "../components/SectionHeader";
import "./ServiceTemplate.css";

export interface ServiceTemplateProps {
  serviceSlug: string;
}

export const ServiceTemplate: React.FC<ServiceTemplateProps> = ({ serviceSlug }) => {
  // Lookup service configuration by slug
  const serviceData: ServiceDetailData | undefined = SERVICES_DETAIL_DATA[serviceSlug];

  React.useEffect(() => {
    if (!serviceData) return;

    // 1. Update Title
    const prevTitle = document.title;
    document.title = serviceData.metaTitle;

    // 2. Update Description
    const descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta?.getAttribute("content") || "";
    if (descMeta) {
      descMeta.setAttribute("content", serviceData.metaDescription);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = serviceData.metaDescription;
      document.head.appendChild(newMeta);
    }

    // 3. Update Canonical link
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink?.getAttribute("href") || "";
    const fullCanonicalUrl = window.location.origin + serviceData.canonicalUrl;
    if (canonicalLink) {
      canonicalLink.setAttribute("href", fullCanonicalUrl);
    } else {
      const newLink = document.createElement("link");
      newLink.rel = "canonical";
      newLink.href = fullCanonicalUrl;
      document.head.appendChild(newLink);
    }

    // 4. Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", serviceData.metaTitle);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", serviceData.metaDescription);
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute("content", serviceData.ogImage);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", window.location.href);

    return () => {
      document.title = prevTitle;
      if (descMeta) descMeta.setAttribute("content", prevDesc);
      if (canonicalLink) canonicalLink.setAttribute("href", prevCanonical);
    };
  }, [serviceData]);

  if (!serviceData) {
    return (
      <PageContainer size="default" padding="comfortable" className="service-not-found-block">
        <SectionHeader
          align="center"
          title="Service Record Not Found"
          description="The requested statutory practice or corporate advisory domain could not be loaded."
          divider={true}
        />
        <div className="flex-center pt-24">
          <a href="/" className="btn btn-primary">Return to Homepage</a>
        </div>
      </PageContainer>
    );
  }

  const handleRelatedClick = (e: React.MouseEvent<HTMLAnchorElement>, targetSlug: string) => {
    // If the target is the current page, scroll to top smoothly.
    // Otherwise, allow native browser navigation to the new service route.
    if (targetSlug === serviceSlug) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="service-detail-page-node" id={`service-detail-${serviceSlug}`}>
      
      {/* 1. Page Banner Banner */}
      <ServiceHero
        badge={serviceData.badge}
        title={serviceData.title}
        subtitle={serviceData.subtitle}
      />

      {/* 2. Practice Overview & Narrative Summary */}
      <ServiceOverview
        title="Practice Overview &amp; Compliance Mandates"
        paragraphs={[
          ...(serviceData.overview || []),
          ...(serviceData.importance && serviceData.importance.length > 0 
            ? ["<strong class=\"service-expanded-header\">Business Importance</strong>", ...serviceData.importance] 
            : []),
          ...(serviceData.challengesText && serviceData.challengesText.length > 0 
            ? ["<strong class=\"service-expanded-header\">Common Compliance Challenges</strong>", ...serviceData.challengesText] 
            : []),
          ...(serviceData.ourApproach && serviceData.ourApproach.length > 0 
            ? ["<strong class=\"service-expanded-header\">Our Professional Approach</strong>", ...serviceData.ourApproach] 
            : []),
          ...(serviceData.timelyCompliance && serviceData.timelyCompliance.length > 0 
            ? ["<strong class=\"service-expanded-header\">Why Timely Compliance Matters</strong>", ...serviceData.timelyCompliance] 
            : []),
          ...(serviceData.whyChooseDetail && serviceData.whyChooseDetail.length > 0 
            ? ["<strong class=\"service-expanded-header\">Why Choose Bhansali Associates</strong>", ...serviceData.whyChooseDetail] 
            : [])
        ]}
      />

      {/* 3. Key Benefits & Fiduciary Safeguards */}
      <ServiceBenefits
        benefits={serviceData.benefits}
        whyChoose={serviceData.whyChoose}
      />

      {/* 4. Core Features & Service Expertise */}
      <ServiceFeatures
        features={serviceData.features}
      />

      {/* 5. Operational Process Steps */}
      <ServiceProcess steps={serviceData.processSteps} />

      {/* 6. Service FAQ Accordion + Dynamic JSON-LD Schema injection */}
      <ServiceFAQ
        faqs={serviceData.faqs}
        serviceTitle={serviceData.title}
        serviceDescription={serviceData.metaDescription}
      />

      {/* 7. Complementary related services */}
      <RelatedServices
        relatedSlugs={serviceData.relatedServiceSlugs}
        onRelatedClick={handleRelatedClick}
      />

      {/* 8. Service Engagement CTA Panel */}
      <ServiceCTA serviceName={serviceData.badge} />

    </div>
  );
};
