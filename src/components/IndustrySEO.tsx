import React, { useEffect } from "react";
import { IndustryItem } from "../data/industries";
import { SITE_CONFIG } from "../constants/config";

interface IndustrySEOProps {
  industry: IndustryItem;
}

export const IndustrySEO: React.FC<IndustrySEOProps> = ({ industry }) => {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const fullUrl = `${origin}${industry.route}`;

  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${industry.metaTitle} | Bhansali Associates`;

    const descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta?.getAttribute("content") || "";
    if (descMeta) {
      descMeta.setAttribute("content", industry.metaDescription);
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink?.getAttribute("href") || "";
    if (canonicalLink) {
      canonicalLink.setAttribute("href", fullUrl);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", industry.metaTitle);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", industry.metaDescription);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", fullUrl);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", industry.metaTitle);
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute("content", industry.metaDescription);

    return () => {
      document.title = prevTitle;
      if (descMeta) descMeta.setAttribute("content", prevDesc);
      if (canonicalLink) canonicalLink.setAttribute("href", prevCanonical);
    };
  }, [industry, fullUrl]);

  // Schema 1: BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": origin
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Industries",
        "item": `${origin}/#industries`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": industry.title,
        "item": fullUrl
      }
    ]
  };

  // Schema 2: WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${fullUrl}#webpage`,
    "url": fullUrl,
    "name": industry.metaTitle,
    "description": industry.metaDescription,
    "publisher": {
      "@type": "AccountingService",
      "name": SITE_CONFIG.siteName,
      "url": origin,
      "telephone": "+91-8369123198",
      "logo": {
        "@type": "ImageObject",
        "url": `${origin}/logo.png`
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "I 602, Ratna Heights CHSL, Planateria Complex, Near Maheshwari Bhavan, Bhayandar West",
        "addressLocality": "Thane, Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "401101",
        "addressCountry": "IN"
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Mira Road" },
        { "@type": "AdministrativeArea", "name": "Mira Bhayandar" },
        { "@type": "AdministrativeArea", "name": "Bhayandar" },
        { "@type": "AdministrativeArea", "name": "Thane" },
        { "@type": "AdministrativeArea", "name": "Mumbai" }
      ]
    }
  };

  // Schema 3: FAQPage Schema
  const faqSchema = industry.faqs && industry.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": industry.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
};
