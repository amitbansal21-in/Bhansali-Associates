import React, { useEffect } from "react";
import { PageBanner } from "../components/PageBanner";
import { PageContainer } from "../components/PageContainer";
import { SITE_CONFIG } from "../constants/config";
import "./NotFound.css";

export const NotFound: React.FC = () => {
  // Sync page metadata for search crawler and browser tabs
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Page Not Found (404) | Bhansali Associates";

    const descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta?.getAttribute("content") || "";
    if (descMeta) {
      descMeta.setAttribute(
        "content",
        "The page you requested could not be found. Return to Bhansali Associates homepage, contact partner desk, or search insights."
      );
    }

    return () => {
      document.title = prevTitle;
      if (descMeta) descMeta.setAttribute("content", prevDesc);
    };
  }, []);

  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "404 Error" }
  ];

  return (
    <div className="not-found-page-wrapper">
      {/* 1. Page Banner Section */}
      <PageBanner
        theme="dark"
        badge="Filing Error"
        title="404 - Page Not Found"
        subtitle="The requested URL does not map to any statutory service page, legal statement, or insights publication."
        breadcrumbs={breadcrumbs}
        backgroundPattern={true}
      />

      {/* 2. Main Error Message Grid */}
      <PageContainer size="narrow" padding="comfortable" className="not-found-content-container">
        <div className="not-found-card" tabIndex={-1}>
          {/* Large Stylized 404 Display */}
          <div className="error-code-badge" aria-hidden="true">
            404
          </div>
          
          <h2 className="not-found-heading font-semibold">
            We apologize for the inconvenience.
          </h2>
          
          <p className="not-found-text">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. As Chartered Accountants, we value precision — let us help you find the correct path:
          </p>

          {/* Action Call to Action (CTA) Group */}
          <div className="not-found-actions">
            <a 
              href="/" 
              className="btn btn-primary action-btn-home"
              aria-label="Return to the Bhansali Associates homepage"
            >
              Back to Home
            </a>
            <a 
              href="/contact" 
              className="btn btn-outline action-btn-contact"
              aria-label="Contact the partner consultation desk"
            >
              Contact Partner Desk
            </a>
            <a 
              href="/insights" 
              className="btn btn-outline action-btn-search"
              aria-label="Search the insights and knowledge centre articles"
            >
              Search Insights
            </a>
          </div>

          <div className="contact-assistance-note">
            <p className="text-small">
              Need immediate assistance? Speak directly with partner accountants at <a href={`tel:${SITE_CONFIG.contactPhone.split(" / ")[0]}`}>{SITE_CONFIG.contactPhone.split(" / ")[0]}</a> or email us at <a href={`mailto:${SITE_CONFIG.contactEmail}`}>{SITE_CONFIG.contactEmail}</a>.
            </p>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};
export default NotFound;
