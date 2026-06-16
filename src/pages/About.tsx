import React from "react";
import { ABOUT_DATA, TimelineEvent, ValueItem, ApproachStep } from "../data/about";
import { FOUNDERS_DATA, FounderItem } from "../data/founders";
import { PageBanner } from "../components/PageBanner";
import { PageContainer } from "../components/PageContainer";
import { SectionHeader } from "../components/SectionHeader";
import { ConsultationCTA } from "../components/ConsultationCTA";
import "./About.css";

export const About: React.FC = () => {
  const origin = typeof window !== "undefined" ? window.location.origin : "";

  React.useEffect(() => {
    const prevTitle = document.title;
    document.title = "CA Firm Profile | Chartered Accountants in Mira Road | Bhansali Associates";

    const descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta?.getAttribute("content") || "";
    const pageDesc = "Learn about Bhansali Associates, a leading chartered accountancy practice in Mira Bhayandar & Mumbai. Led by experienced CAs delivering statutory audit and tax advisory.";
    if (descMeta) {
      descMeta.setAttribute("content", pageDesc);
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink?.getAttribute("href") || "";
    if (canonicalLink) {
      canonicalLink.setAttribute("href", window.location.origin + "/about");
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "CA Firm Profile | Chartered Accountants in Mira Road | Bhansali Associates");
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", pageDesc);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", window.location.origin + "/about");

    return () => {
      document.title = prevTitle;
      if (descMeta) descMeta.setAttribute("content", prevDesc);
      if (canonicalLink) canonicalLink.setAttribute("href", prevCanonical);
    };
  }, []);

  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Firm Profile" }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${origin}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Firm Profile",
        "item": `${origin}/about`
      }
    ]
  };

  const renderValueIcon = (iconName: ValueItem["iconName"]) => {
    const iconProps = {
      className: "value-icon",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
      "aria-hidden": "true"
    };

    switch (iconName) {
      case "integrity":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        );
      case "excellence":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        );
      case "fiduciary":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
            <path d="M12 6v6l4 2" />
          </svg>
        );
      case "client":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <main id="main-content" className="about-page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* 1. Page Banner Section */}
      <PageBanner
        theme="dark"
        badge="Firm Profile"
        title="Fiduciary Integrity & Compliance Excellence"
        subtitle="Bhansali Associates is a premier, partner-led chartered accountancy practice delivering statutory audit, direct tax representational advocacy, and corporate financial advisory."
        breadcrumbs={breadcrumbs}
        backgroundPattern={true}
      />

      {/* 2. Firm Introduction */}
      <PageContainer size="default" padding="comfortable" className="firm-intro-section">
        <div className="grid-2-col">
          <SectionHeader
            align="left"
            eyebrow="ESTABLISHED FAITH"
            title="A Meticulous Approach to Statutory Financial Diligence"
            description="Founded in the commercial capital of Mumbai, Bhansali Associates was established to bridge the gap between complex regulatory mandates and business growth. We maintain a strict focus on direct partner involvement, ensuring that every financial audit, ROC secretarial log, and tax assessment is reviewed by senior counsel."
          />
          <div className="firm-intro-secondary-text">
            <p>Our core practices support scale and statutory assurance across diverse economic sectors, including <a href="/industries/manufacturing" className="hover:underline text-primary">high-growth manufacturing</a>, <a href="/industries/real-estate-construction" className="hover:underline text-primary">commercial real estate</a>, <a href="/industries/startups-technology" className="hover:underline text-primary">startup ecosystems</a>, and <a href="/industries/nri-global-business" className="hover:underline text-primary">international NRI tax domains</a>.</p>
            <p>By securing compliance structures, optimizing working capital liquidity under our <a href="/services/virtual-cfo" className="hover:underline text-primary">Virtual CFO support</a>, and conducting rigorous <a href="/services/audit-assurance" className="hover:underline text-primary">statutory audits</a>, we protect our clients' financial integrity in an evolving regulatory market.</p>
          </div>
        </div>
      </PageContainer>

      {/* 3. Purpose & Commitment (Side-by-Side) */}
      <PageContainer size="default" padding="default" className="purpose-commitment-section">
        <div className="grid-2-col divider-grid">
          <div className="statement-card">
            <SectionHeader
              align="left"
              title="Our Purpose"
              description="To provide clear, stable, and accurate statutory accounting frameworks that help businesses scale safely and operate with complete confidence."
            />
          </div>
          <div className="statement-card commitment-card-side">
            <SectionHeader
              align="left"
              title="Our Commitment"
              description="We promise absolute transparency, professional diligence, and active partner engagement. We do not delegate critical compliance audits to junior staff — ensuring senior counsel directs every case."
            />
          </div>
        </div>
      </PageContainer>

      {/* 4. Brand Philosophy Block */}
      <PageContainer size="narrow" padding="compact" className="philosophy-quote-section">
        <blockquote className="editorial-philosophy-quote">
          <span className="quote-accent-mark" aria-hidden="true">&ldquo;</span>
          <p className="philosophy-quote-text">
            Compliance is not simply a legal requirement — it is a pillar of business trust, liquidity, and financial stability.
          </p>
        </blockquote>
      </PageContainer>

      {/* 5. Our Journey Timeline */}
      <PageContainer size="default" padding="comfortable" className="journey-timeline-section">
        <SectionHeader
          align="center"
          eyebrow="CHRONOLOGY"
          title="Our Journey of Fiduciary Diligence"
          description="A chronological timeline tracking our growth, assurance milestones, and core practice expansions."
          divider={true}
        />

        <div className="timeline-wrapper">
          <div className="timeline-center-line" aria-hidden="true"></div>
          
          <div className="timeline-grid">
            {ABOUT_DATA.timeline.map((event: TimelineEvent, idx) => (
              <div 
                key={idx} 
                className={`timeline-node ${idx % 2 === 0 ? "node-left" : "node-right"}`}
              >
                <div className="timeline-node-card">
                  <span className="timeline-node-year">{event.year}</span>
                  <h3 className="timeline-node-title">{event.title}</h3>
                  <p className="timeline-node-desc">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>

      {/* 6. Mission & Vision */}
      <PageContainer size="default" padding="default" className="mission-vision-section">
        <div className="grid-2-col">
          <div className="mission-card">
            <h3 className="mission-vision-title">{ABOUT_DATA.missionTitle}</h3>
            <p className="mission-vision-desc">{ABOUT_DATA.missionText}</p>
          </div>
          <div className="vision-card">
            <h3 className="mission-vision-title">{ABOUT_DATA.visionTitle}</h3>
            <p className="mission-vision-desc">{ABOUT_DATA.visionText}</p>
          </div>
        </div>
      </PageContainer>

      {/* 7. Core Values Grid */}
      <PageContainer size="default" padding="comfortable" className="values-section">
        <SectionHeader
          align="center"
          eyebrow="CORE PRINCIPLES"
          title="Fiduciary Integrity in Every Engagement"
          description="Our professional actions are directed by four core tenets of compliance execution."
          divider={true}
        />

        <div className="values-grid">
          {ABOUT_DATA.values.map((val: ValueItem) => (
            <article key={val.id} className="value-card">
              <div className="value-card-icon-wrapper" aria-hidden="true">
                {renderValueIcon(val.iconName)}
              </div>
              <h3 className="value-card-title">{val.title}</h3>
              <p className="value-card-desc">{val.description}</p>
            </article>
          ))}
        </div>
      </PageContainer>

      {/* 8. Leadership Overview */}
      <PageContainer size="default" padding="comfortable" className="about-leadership-section">
        <SectionHeader
          align="center"
          eyebrow="PARTNERS"
          title="Direct Partner Engagement"
          description="Bhansali Associates is directed by licensed chartered accountants who maintain hands-on management on every corporate ledger."
          divider={true}
        />

        <div className="about-founders-grid">
          {FOUNDERS_DATA.map((founder: FounderItem) => (
            <article key={founder.id} className="about-founder-card">
              <div className="about-founder-img-box">
                <img 
                  src={founder.image} 
                  alt={`${founder.name} - ${founder.designation}`}
                  className="about-founder-img"
                  loading="lazy"
                  width="400"
                  height="500"
                />
              </div>
              <div className="about-founder-info">
                <span className="about-founder-role uppercase tracking-wider">{founder.designation}</span>
                <h3 className="about-founder-name">{founder.name}</h3>
                <p className="about-founder-bio">{founder.shortDescription}</p>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>

      {/* 8.5 Professional Affiliation */}
      <PageContainer size="narrow" padding="compact" className="professional-affiliation-section">
        <div className="professional-affiliation-card">
          <div className="professional-affiliation-content">
            <h3 className="affiliation-heading">Professional Affiliation</h3>
            <p className="affiliation-text">
              Proudly associated with the Institute of Chartered Accountants of India (ICAI), upholding the highest standards of ethics, integrity and professional excellence.
            </p>
          </div>
          <div className="professional-affiliation-logo-box">
            <img 
              src="/assets/images/ca-india-logo.jpg" 
              alt="Institute of Chartered Accountants of India" 
              loading="lazy" 
              width="240"
              height="160"
              className="ca-india-img"
            />
          </div>
        </div>
      </PageContainer>

      {/* 9. Advisory Approach */}
      <PageContainer size="default" padding="comfortable" className="about-approach-section">
        <SectionHeader
          align="center"
          eyebrow="ENGAGEMENT METHODOLOGY"
          title="Our Advisory & Assurance Approach"
          description="We align with your corporate timeline to perform robust filing controls."
          divider={true}
        />

        <div className="approach-grid">
          {ABOUT_DATA.approach.map((step: ApproachStep, idx) => (
            <div key={idx} className="approach-step-card">
              <span className="approach-step-number">{step.stepNumber}</span>
              <h3 className="approach-step-title">{step.title}</h3>
              <p className="approach-step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </PageContainer>

      {/* 10. Final CTA Consultation Block */}
      <ConsultationCTA />

    </main>
  );
};
