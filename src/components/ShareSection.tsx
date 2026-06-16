import React from "react";
import "./ShareSection.css";

interface ShareSectionProps {
  title: string;
}

export const ShareSection: React.FC<ShareSectionProps> = ({ title }) => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`
  };

  const handleShareClick = (e: React.MouseEvent<HTMLAnchorElement>, platform: string) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      window.open(href, `share-${platform}`, "width=600,height=400,resizable=yes,scrollbars=yes,status=yes");
    }
  };

  return (
    <div className="share-article-component">
      <span className="share-label font-semibold uppercase tracking-wider">Share Publication</span>
      <div className="share-buttons-container">
        {/* WhatsApp */}
        <a
          href={shareLinks.whatsapp}
          onClick={(e) => handleShareClick(e, "whatsapp")}
          className="share-btn whatsapp-share"
          aria-label="Share this publication on WhatsApp"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          <span>WhatsApp</span>
        </a>

        {/* LinkedIn */}
        <a
          href={shareLinks.linkedin}
          onClick={(e) => handleShareClick(e, "linkedin")}
          className="share-btn linkedin-share"
          aria-label="Share this publication on LinkedIn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          <span>LinkedIn</span>
        </a>

        {/* Facebook */}
        <a
          href={shareLinks.facebook}
          onClick={(e) => handleShareClick(e, "facebook")}
          className="share-btn facebook-share"
          aria-label="Share this publication on Facebook"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
          <span>Facebook</span>
        </a>

        {/* X (Twitter) */}
        <a
          href={shareLinks.twitter}
          onClick={(e) => handleShareClick(e, "twitter")}
          className="share-btn twitter-share"
          aria-label="Share this publication on X (formerly Twitter)"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
          </svg>
          <span>X / Twitter</span>
        </a>
      </div>
    </div>
  );
};
