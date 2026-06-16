import React from "react";
import "./Breadcrumb.css";

export interface BreadcrumbItem {
  label: string;
  url?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  enableJsonLd?: boolean;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = <span className="breadcrumb-default-separator" aria-hidden="true">/</span>,
  enableJsonLd = true
}) => {
  if (!items || items.length === 0) return null;

  // Build JSON-LD Structured Data safely
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": item.label,
      ...(item.url ? { "item": `${origin}${item.url}` } : {})
    }))
  };

  return (
    <>
      {enableJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      )}

      <nav aria-label="Breadcrumb" className="breadcrumb-nav">
        <ol className="breadcrumb-list" itemscope itemtype="https://schema.org/BreadcrumbList">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li
                key={idx}
                className="breadcrumb-item"
                itemprop="itemListElement"
                itemscope
                itemtype="https://schema.org/ListItem"
              >
                {item.url && !isLast ? (
                  <a
                    href={item.url}
                    className="breadcrumb-link"
                    itemprop="item"
                  >
                    <span itemprop="name">{item.label}</span>
                  </a>
                ) : (
                  <span
                    className="breadcrumb-current"
                    aria-current="page"
                    itemprop="name"
                  >
                    {item.label}
                  </span>
                )}
                
                <meta itemprop="position" content={(idx + 1).toString()} />
                
                {!isLast && (
                  <span className="breadcrumb-separator-wrapper">
                    {separator}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
