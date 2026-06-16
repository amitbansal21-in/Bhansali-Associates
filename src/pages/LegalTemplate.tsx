import React, { useEffect, useState } from "react";
import { LEGAL_DATA, LegalPageData } from "../data/legal";
import { SITE_CONFIG } from "../constants/config";
import { PageBanner } from "../components/PageBanner";
import { PageContainer } from "../components/PageContainer";
import { ConsultationCTA } from "../components/ConsultationCTA";
import "./LegalTemplate.css";

interface LegalTemplateProps {
  type: "privacy" | "terms" | "disclaimer" | "cookie";
}

export const LegalTemplate: React.FC<LegalTemplateProps> = ({ type }) => {
  const pageData: LegalPageData = LEGAL_DATA[type];
  const [activeSection, setActiveSection] = useState<string>("");

  // Scroll tracking active section highlight via IntersectionObserver
  useEffect(() => {
    if (!pageData) return;

    const observerOptions = {
      root: null,
      rootMargin: "-120px 0px -50% 0px", // High precision midpoint checking
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    pageData.sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    const contactBlock = document.getElementById("contact-info-block");
    if (contactBlock) observer.observe(contactBlock);

    return () => {
      observer.disconnect();
    };
  }, [pageData, type]);

  // Dynamic SEO metadata updates
  useEffect(() => {
    if (!pageData) return;

    const prevTitle = document.title;
    document.title = pageData.metaTitle;

    const descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta?.getAttribute("content") || "";
    if (descMeta) {
      descMeta.setAttribute("content", pageData.metaDescription);
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink?.getAttribute("href") || "";
    const path = type === "privacy" ? "/privacy-policy" :
                 type === "terms" ? "/terms-and-conditions" :
                 type === "disclaimer" ? "/disclaimer" :
                 "/cookie-policy";
    const fullCanonicalUrl = window.location.origin + path;
    if (canonicalLink) {
      canonicalLink.setAttribute("href", fullCanonicalUrl);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", pageData.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", pageData.metaDescription);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", window.location.href);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", pageData.title);
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute("content", pageData.metaDescription);

    return () => {
      document.title = prevTitle;
      if (descMeta) descMeta.setAttribute("content", prevDesc);
      if (canonicalLink) canonicalLink.setAttribute("href", prevCanonical);
    };
  }, [pageData, type]);

  if (!pageData) {
    return (
      <div className="legal-error-container flex-center flex-column pt-24">
        <h1>Page Configuration Error</h1>
        <p>The requested legal document could not be resolved.</p>
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: pageData.title }
  ];

  // Dynamic anchor section scrolling with offset for sticky header and focus redirection
  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90; // Height of sticky navigation header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Shift keyboard focus to target element for WCAG screen reader accessibility
      element.focus({ preventScroll: true });
      setActiveSection(id);
      window.history.pushState(null, "", `#${id}`);
    }
  };

  // Structured Schema data for WebPage schema
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const pagePath = type === "privacy" ? "/privacy-policy" :
                   type === "terms" ? "/terms-and-conditions" :
                   type === "disclaimer" ? "/disclaimer" :
                   "/cookie-policy";
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${origin}${pagePath}#webpage`,
    "url": `${origin}${pagePath}`,
    "name": pageData.metaTitle,
    "description": pageData.metaDescription,
    "lastReviewed": pageData.lastUpdated,
    "publisher": {
      "@type": "AccountingService",
      "name": SITE_CONFIG.siteName,
      "logo": {
        "@type": "ImageObject",
        "url": `${origin}/logo.png`
      }
    }
  };

  return (
    <div className="legal-page-wrapper">
      {/* WebPage JSON-LD schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* 1. Page Banner Section */}
      <PageBanner
        theme="dark"
        badge={pageData.badge}
        title={pageData.title}
        subtitle={pageData.subtitle}
        breadcrumbs={breadcrumbs}
        backgroundPattern={true}
      />

      {/* 2. Main Page Grid */}
      <PageContainer size="default" padding="comfortable" className="legal-layout-container">
        <div className="legal-grid">
          
          {/* Left Sticky Navigation Sidebar */}
          <aside className="legal-sidebar" aria-label="Document Navigation Sidebar">
            <nav className="legal-nav" aria-label="Legal policy sections navigation">
              <h2 className="legal-nav-title">On This Page</h2>
              <ul className="legal-nav-list">
                {pageData.sections.map((sec) => (
                  <li key={sec.id} className="legal-nav-item">
                    <a
                      href={`#${sec.id}`}
                      onClick={(e) => handleSectionClick(e, sec.id)}
                      className={`legal-nav-link ${activeSection === sec.id ? "active-link" : ""}`}
                      aria-current={activeSection === sec.id ? "location" : undefined}
                    >
                      {sec.title}
                    </a>
                  </li>
                ))}
                <li className="legal-nav-item">
                  <a
                    href="#contact-info-block"
                    onClick={(e) => handleSectionClick(e, "contact-info-block")}
                    className={`legal-nav-link ${activeSection === "contact-info-block" ? "active-link" : ""}`}
                    aria-current={activeSection === "contact-info-block" ? "location" : undefined}
                  >
                    Contact Info
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Right Main Content Panel */}
          <article className="legal-main-content">
            <div className="legal-meta-info">
              <span className="legal-last-updated" aria-label={`Last updated on ${pageData.lastUpdated}`}>
                Last Updated: {pageData.lastUpdated}
              </span>
            </div>

            {/* Render dynamic policy sections */}
            <div className="legal-sections-container">
              {pageData.sections.map((sec) => (
                <section
                  key={sec.id}
                  id={sec.id}
                  className="legal-section-block"
                  tabIndex={-1} // Enable keyboard focus transfer
                  aria-labelledby={`heading-${sec.id}`}
                >
                  <h2 id={`heading-${sec.id}`} className="legal-section-heading font-semibold">
                    {sec.title}
                  </h2>
                  <div
                    className="legal-section-text"
                    dangerouslySetInnerHTML={{ __html: sec.content }}
                  />
                </section>
              ))}

              {/* Contact Information Block */}
              <section
                id="contact-info-block"
                className="legal-section-block contact-info-block"
                tabIndex={-1}
                aria-labelledby="heading-contact-info-block"
              >
                <h2 id="heading-contact-info-block" className="legal-section-heading font-semibold">
                  Contact Information Block
                </h2>
                <div className="contact-info-card">
                  <p className="contact-card-intro">
                    For any questions regarding these legal terms, policies, or our data handling practices, please reach out to us:
                  </p>
                  
                  <div className="contact-card-table" role="table" aria-label="Bhansali Associates Corporate Contact Details">
                    <div className="contact-card-row" role="row">
                      <div className="contact-card-cell cell-label" role="rowheader">Firm Name</div>
                      <div className="contact-card-cell cell-value" role="cell">{SITE_CONFIG.siteName}</div>
                    </div>
                    <div className="contact-card-row" role="row">
                      <div className="contact-card-cell cell-label" role="rowheader">Office Address</div>
                      <div className="contact-card-cell cell-value" role="cell">{SITE_CONFIG.officeAddress}</div>
                    </div>
                    <div className="contact-card-row" role="row">
                      <div className="contact-card-cell cell-label" role="rowheader">Email Address</div>
                      <div className="contact-card-cell cell-value" role="cell">
                        <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="contact-card-link">
                          {SITE_CONFIG.contactEmail}
                        </a>
                      </div>
                    </div>
                    <div className="contact-card-row" role="row">
                      <div className="contact-card-cell cell-label" role="rowheader">Phone Numbers</div>
                      <div className="contact-card-cell cell-value" role="cell">
                        {SITE_CONFIG.contactPhone.split(" / ").map((num, idx) => (
                          <React.Fragment key={idx}>
                            {idx > 0 && " / "}
                            <a href={`tel:${num.trim()}`} className="contact-card-link">
                              {num.trim()}
                            </a>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    <div className="contact-card-row" role="row">
                      <div className="contact-card-cell cell-label" role="rowheader">Business Hours</div>
                      <div className="contact-card-cell cell-value" role="cell">{SITE_CONFIG.officeHours}</div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </article>

        </div>
      </PageContainer>

      {/* 3. Consultation CTA Section */}
      <ConsultationCTA />
    </div>
  );
};
