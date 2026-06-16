import React from "react";
import { InsightItem } from "../data/insights";
import "./FeaturedArticle.css";

interface FeaturedArticleProps {
  article: InsightItem;
  onLinkClick?: (e: React.MouseEvent<HTMLAnchorElement>, route: string) => void;
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article, onLinkClick }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onLinkClick) {
      onLinkClick(e, article.route);
    }
  };

  return (
    <section className="featured-article-section" aria-labelledby="featured-article-heading">
      <h2 className="featured-article-section-title" id="featured-article-heading">Featured Publication</h2>
      
      <div className="featured-article-card">
        {/* Image / Thumbnail */}
        <div className="featured-article-image-wrapper">
          {article.image ? (
            <img
              src={article.image}
              alt=""
              className="featured-article-image"
              loading="eager"
            />
          ) : (
            <div className="featured-article-image-placeholder" aria-hidden="true">
              <span>{article.category}</span>
            </div>
          )}
          <span className="featured-badge">Latest Insight</span>
        </div>

        {/* Content */}
        <div className="featured-article-content">
          <div className="featured-article-meta">
            <span className="featured-article-category">{article.category}</span>
            <span className="featured-article-separator" aria-hidden="true">•</span>
            <span className="featured-article-date">{article.publishedDate}</span>
            <span className="featured-article-separator" aria-hidden="true">•</span>
            <span className="featured-article-time">{article.readingTime}</span>
          </div>

          <h3 className="featured-article-title">
            <a href={article.route} onClick={handleLinkClick} className="featured-article-title-link">
              {article.title}
            </a>
          </h3>

          <p className="featured-article-desc">{article.description}</p>

          <div className="featured-article-action">
            <a
              href={article.route}
              className="btn btn-primary featured-article-btn"
              onClick={handleLinkClick}
              aria-label={`Read featured article: ${article.title}`}
            >
              Read Article
              <span className="arrow-icon" aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
