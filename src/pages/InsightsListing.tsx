import React, { useState, useEffect } from "react";
import { INSIGHTS_DATA, InsightItem } from "../data/insights";
import { PageBanner } from "../components/PageBanner";
import { PageContainer } from "../components/PageContainer";
import { FeaturedArticle } from "../components/FeaturedArticle";
import { SearchBar } from "../components/SearchBar";
import { CategoryFilter } from "../components/CategoryFilter";
import { ArticleCard } from "../components/ArticleCard";
import { Pagination } from "../components/Pagination";
import { NewsletterCTA } from "../components/NewsletterCTA";
import { EmptyState } from "../components/EmptyState";
import "./InsightsListing.css";

export const InsightsListing: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce search query changes to prevent over-rendering
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
      setCurrentPage(1); // Reset page to 1 on new query search
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Dynamic Page Headers & SEO tag synchronization
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Taxation & Corporate Insights | CA Firm in Mira Road | Bhansali Associates";

    const descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta?.getAttribute("content") || "";
    const metaDescription = "Stay updated with statutory tax alerts, GST compliance briefs, internal control audits, and corporate finance insights written by CAs in Mira Bhayandar, Mumbai.";
    if (descMeta) {
      descMeta.setAttribute("content", metaDescription);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = metaDescription;
      document.head.appendChild(newMeta);
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink?.getAttribute("href") || "";
    const fullCanonicalUrl = window.location.origin + "/insights";
    if (canonicalLink) {
      canonicalLink.setAttribute("href", fullCanonicalUrl);
    } else {
      const newLink = document.createElement("link");
      newLink.rel = "canonical";
      newLink.href = fullCanonicalUrl;
      document.head.appendChild(newLink);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Insights & Knowledge Centre | Bhansali Associates");
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", metaDescription);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", window.location.href);

    return () => {
      document.title = prevTitle;
      if (descMeta) descMeta.setAttribute("content", prevDesc);
      if (canonicalLink) canonicalLink.setAttribute("href", prevCanonical);
    };
  }, []);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset page to 1 on category filter change
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setCurrentPage(1);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, route: string) => {
    // Allow standard browser navigation to the article route
  };

  // Categories list extracted dynamically
  const categories = Array.from(new Set(INSIGHTS_DATA.map((article) => article.category)));

  // Master Filter Pipeline
  const filteredArticles = INSIGHTS_DATA.filter((article) => {
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    const matchesSearch =
      !debouncedQuery ||
      article.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(debouncedQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const isFiltered = selectedCategory !== null || debouncedQuery !== "";

  // Splitting Featured vs. Grid articles when no filters are active
  let featuredArticle: InsightItem | null = null;
  let gridArticles: InsightItem[] = [];

  if (!isFiltered && INSIGHTS_DATA.length > 0) {
    featuredArticle = INSIGHTS_DATA[0];
    gridArticles = INSIGHTS_DATA.slice(1);
  } else {
    gridArticles = filteredArticles;
  }

  // Pagination calculation
  const ITEMS_PER_PAGE = 6;
  const totalItems = gridArticles.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedArticles = gridArticles.slice(startIndex, endIndex);

  // Breadcrumbs config
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Insights" }
  ];

  // Dynamic SEO JSON-LD Injections
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
      }
    ]
  };

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Insights & Knowledge Centre | Bhansali Associates",
    "description": "Professional statutory updates, tax guidelines, and financial consulting insights.",
    "publisher": {
      "@type": "AccountingService",
      "name": "Bhansali Associates",
      "url": origin
    },
    "hasPart": filteredArticles.map((article) => ({
      "@type": "Article",
      "headline": article.title,
      "description": article.description,
      "datePublished": new Date(article.publishedDate).toISOString().split("T")[0],
      "url": `${origin}${article.route}`,
      "author": {
        "@type": "Organization",
        "name": "Bhansali Associates"
      }
    }))
  };

  return (
    <div className="insights-listing-page">
      {/* 1. Dynamic SEO schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />

      {/* 2. Page Banner Banner */}
      <PageBanner
        theme="dark"
        badge="Knowledge Centre"
        title="Perspectives &amp; Analysis"
        subtitle="Strategic insights on Indian direct tax, GST compliance, audits, registry policies, and CFO guidelines."
        breadcrumbs={breadcrumbs}
        backgroundPattern={true}
      />

      {/* Main content grid wrapper */}
      <PageContainer size="default" padding="comfortable" className="insights-listing-container">
        {/* 3. Featured Article block (when not searching or filtering) */}
        {!isFiltered && featuredArticle && (
          <FeaturedArticle article={featuredArticle} onLinkClick={handleLinkClick} />
        )}

        {/* 4. Controls section: Search + Category Filter */}
        <div className="insights-controls-panel">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {/* 5. Article Grid or Empty State */}
        {filteredArticles.length === 0 ? (
          <EmptyState onReset={handleResetFilters} />
        ) : (
          <>
            <div className="insights-grid-title-wrapper">
              <h2 className="insights-grid-heading">
                {isFiltered ? "Search Results" : "Recent Publications"}
                <span className="insights-count">({filteredArticles.length})</span>
              </h2>
            </div>
            
            <div className="insights-articles-grid" id="insights-grid">
              {paginatedArticles.map((article) => (
                <div key={article.id} className="grid-item-col">
                  <ArticleCard article={article} onLinkClick={handleLinkClick} />
                </div>
              ))}
            </div>

            {/* 6. Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}

        {/* 7. Newsletter Subscription CTA */}
        <NewsletterCTA />
      </PageContainer>
    </div>
  );
};
