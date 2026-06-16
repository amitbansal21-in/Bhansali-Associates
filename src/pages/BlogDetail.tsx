import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { INSIGHTS_DATA, InsightItem, BlogBlock } from "../data/insights";
import { FOUNDERS_DATA } from "../data/founders";
import { PageBanner } from "../components/PageBanner";
import { PageContainer } from "../components/PageContainer";
import { Breadcrumb } from "../components/Breadcrumb";
import { StickyProgress } from "../components/StickyProgress";
import { AuthorBlock } from "../components/AuthorBlock";
import { ShareSection } from "../components/ShareSection";
import { BlogNavigation } from "../components/BlogNavigation";
import { TableOfContents, slugifyHeading } from "../components/TableOfContents";
import { ArticleCard } from "../components/ArticleCard";
import { ConsultationCTA } from "../components/ConsultationCTA";
import { SectionHeader } from "../components/SectionHeader";
import "./BlogDetail.css";

export const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Lookup article by slug matching route path ending
  const article = INSIGHTS_DATA.find(
    (item) => item.route.endsWith(`/${slug}`) || item.id === slug
  );

  // Dynamic Page Headers & SEO tag synchronization
  useEffect(() => {
    if (!article) return;

    const prevTitle = document.title;
    document.title = article.seoTitle || `${article.title} | Insights | Bhansali Associates`;

    const descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta?.getAttribute("content") || "";
    const currentDesc = article.metaDescription || article.description;
    if (descMeta) {
      descMeta.setAttribute("content", currentDesc);
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink?.getAttribute("href") || "";
    const fullCanonicalUrl = window.location.origin + `/insights/${slug}`;
    if (canonicalLink) {
      canonicalLink.setAttribute("href", fullCanonicalUrl);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", article.seoTitle || article.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", currentDesc);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", window.location.href);
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage && article.image) ogImage.setAttribute("content", window.location.origin + article.image);

    // Twitter Card support
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", article.seoTitle || article.title);
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute("content", currentDesc);

    return () => {
      document.title = prevTitle;
      if (descMeta) descMeta.setAttribute("content", prevDesc);
      if (canonicalLink) canonicalLink.setAttribute("href", prevCanonical);
    };
  }, [article, slug]);

  if (!article) {
    // Gracefully redirect to the main publication grid if article is not found
    return <Navigate to="/insights" replace={true} />;
  }

  // Related articles filter: display exactly 3 excluding the current one (sorted by category matches first)
  const getRelatedArticles = (currentArticle: InsightItem): InsightItem[] => {
    const pool = INSIGHTS_DATA.filter((item) => item.id !== currentArticle.id);
    const sorted = [...pool].sort((a, b) => {
      const aCatMatch = a.category === currentArticle.category ? 1 : 0;
      const bCatMatch = b.category === currentArticle.category ? 1 : 0;
      return bCatMatch - aCatMatch;
    });
    return sorted.slice(0, 3);
  };

  const relatedArticles = getRelatedArticles(article);

  // Content block rendering pipeline
  const renderBlock = (block: BlogBlock, index: number) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p 
            key={index} 
            className="blog-body-p text-body" 
            dangerouslySetInnerHTML={{ __html: block.content || "" }} 
          />
        );
      case "h2":
        return (
          <h2 key={index} id={slugifyHeading(block.content || "")} className="blog-body-h2 font-semibold" tabIndex={-1}>
            {block.content}
          </h2>
        );
      case "h3":
        return (
          <h3 key={index} id={slugifyHeading(block.content || "")} className="blog-body-h3 font-semibold" tabIndex={-1}>
            {block.content}
          </h3>
        );
      case "list":
        if (block.ordered) {
          return (
            <ol key={index} className="blog-body-ol text-body">
              {block.items?.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ol>
          );
        } else {
          return (
            <ul key={index} className="blog-body-ul text-body">
              {block.items?.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          );
        }
      case "table":
        if (!block.tableData) return null;
        return (
          <div key={index} className="blog-body-table-wrapper">
            <table className="blog-body-table">
              <thead>
                <tr>
                  {block.tableData.headers.map((header, i) => (
                    <th key={i}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.tableData.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "quote":
        return (
          <blockquote key={index} className="blog-body-blockquote">
            <p className="blockquote-text font-medium">"{block.content}"</p>
          </blockquote>
        );
      case "highlight":
        return (
          <div key={index} className="blog-body-highlight-box" role="note">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="highlight-icon" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <div className="highlight-content" dangerouslySetInnerHTML={{ __html: block.content || "" }} />
          </div>
        );
      case "faq":
        if (!block.faqData) return null;
        return (
          <div key={index} className="blog-body-faq-section">
            {block.faqData.map((faq, i) => (
              <div key={i} className="blog-body-faq-item">
                <h5 className="blog-body-faq-question font-semibold">{faq.question}</h5>
                <p className="blog-body-faq-answer text-body-small">{faq.answer}</p>
              </div>
            ))}
          </div>
        );
      case "code":
        return (
          <pre key={index} className="blog-body-pre">
            <code className={`language-${block.codeLanguage || "plaintext"}`}>
              {block.content}
            </code>
          </pre>
        );
      case "image":
        return (
          <figure key={index} className="blog-body-figure">
            <img 
              src={block.imageUrl} 
              alt={block.caption || ""} 
              className="blog-body-figure-image" 
              loading="lazy" 
            />
            {block.caption && (
              <figcaption className="blog-body-figcaption text-body-small">
                {block.caption}
              </figcaption>
            )}
          </figure>
        );
      default:
        return null;
    }
  };

  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Insights", url: "/insights" },
    { label: "Article View" }
  ];

  // Dynamic SEO JSON-LD structured schemas
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  
  const breadcrumbJsonLd = {
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
        "name": "Insights",
        "item": `${origin}/insights`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": `${origin}/insights/${slug}`
      }
    ]
  };

  const authorData = FOUNDERS_DATA.find((f) => f.id === article.authorId);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.description,
    "datePublished": new Date(article.publishedDate).toISOString().split("T")[0],
    "image": article.image ? `${origin}${article.image}` : undefined,
    "url": `${origin}/insights/${slug}`,
    "author": authorData ? {
      "@type": "Person",
      "name": authorData.name,
      "jobTitle": authorData.designation,
      "url": authorData.linkedin || `${origin}/about`
    } : {
      "@type": "Organization",
      "name": "Bhansali Associates"
    },
    "publisher": {
      "@type": "AccountingService",
      "name": "Bhansali Associates",
      "url": origin
    }
  };

  const faqBlock = article.contentBlocks?.find((b) => b.type === "faq");
  const hasFaqs = !!faqBlock && !!faqBlock.faqData;
  const faqJsonLd = hasFaqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqBlock.faqData?.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <div className="blog-detail-template-page">
      {/* 1. Dynamic JSON-LD structured schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* 2. Sticky Reading Progress Indicator */}
      <StickyProgress />

      {/* 3. Page Banner Banner */}
      <PageBanner
        theme="dark"
        badge={article.category}
        title={article.title}
        subtitle={`Published on ${article.publishedDate} • ${article.readingTime}`}
        breadcrumbs={breadcrumbs}
        backgroundPattern={true}
      />

      {/* 4. Article content grid wrapper */}
      <PageContainer size="default" padding="comfortable" className="blog-detail-container">
        
        {/* Article Layout Grid */}
        <div className="blog-layout-grid">
          
          {/* Main Content Area */}
          <article className="blog-main-content-column">
            
            {/* Featured Image (supports future CMS images) */}
            <div className="blog-featured-image-container">
              {article.image ? (
                <img
                  src={article.image}
                  alt=""
                  className="blog-featured-image"
                />
              ) : (
                <div className="blog-featured-image-placeholder" aria-hidden="true">
                  <span>{article.category}</span>
                </div>
              )}
            </div>

            {/* Dynamic content rendering case */}
            <div className="blog-article-body-content">
              {article.contentBlocks && article.contentBlocks.length > 0 ? (
                article.contentBlocks.map((block, idx) => renderBlock(block, idx))
              ) : (
                <p className="blog-body-p">{article.description}</p>
              )}
            </div>

            {/* Key Takeaways block */}
            <div className="blog-takeaways-card">
              <h4 className="takeaways-title font-semibold uppercase tracking-wider">Key Takeaways</h4>
              <ul className="takeaways-list text-body-small">
                <li>Strict CGST Section 16 compliance is mandatory for input credit audits.</li>
                <li>Weekly GSTR-2B reconciliations prevent vendor payment defaults and cash leakages.</li>
                <li>Professional CA-led audits safeguard operations against department investigations.</li>
              </ul>
            </div>

            {/* Related Services & Industries Map */}
            {(article.relatedServices || article.relatedIndustries) && (
              <div className="blog-relations-card">
                {article.relatedServices && article.relatedServices.length > 0 && (
                  <div className="relations-group">
                    <span className="relations-label uppercase tracking-wider font-semibold">Related Expertise</span>
                    <div className="relations-links">
                      {article.relatedServices.map((srv, idx) => (
                        <a key={idx} href={srv.href} className="relation-link-btn">{srv.label}</a>
                      ))}
                    </div>
                  </div>
                )}
                {article.relatedIndustries && article.relatedIndustries.length > 0 && (
                  <div className="relations-group">
                    <span className="relations-label uppercase tracking-wider font-semibold">Industry Focus</span>
                    <div className="relations-links">
                      {article.relatedIndustries.map((ind, idx) => (
                        <a key={idx} href={ind.href} className="relation-link-btn">{ind.label}</a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Share Buttons Strip */}
            <ShareSection title={article.title} />

            {/* Author Information Block */}
            <AuthorBlock authorId={article.authorId} />

            {/* Previous / Next Navigation */}
            <BlogNavigation currentSlug={slug || ""} />

          </article>

          {/* Sidebar Area: Sticky Table of Contents */}
          <aside className="blog-sidebar-column" aria-label="Article Sidebar">
            {article.contentBlocks && (
              <TableOfContents blocks={article.contentBlocks} />
            )}
          </aside>

        </div>

      </PageContainer>

      {/* 5. Related Articles Grid */}
      {relatedArticles.length > 0 && (
        <section className="related-articles-outer-section" aria-labelledby="related-articles-heading">
          <PageContainer size="default" padding="comfortable">
            <SectionHeader
              align="left"
              eyebrow="PERSPECTIVES"
              title="Related Publications"
              description="Explore complementary statutory updates and financial planning insights."
              divider={true}
            />
            <div className="blog-related-grid">
              {relatedArticles.map((relItem) => (
                <div key={relItem.id} className="related-grid-item">
                  <ArticleCard article={relItem} />
                </div>
              ))}
            </div>
          </PageContainer>
        </section>
      )}

      {/* 6. Consultation CTA */}
      <ConsultationCTA />
    </div>
  );
};
export default BlogDetail;
