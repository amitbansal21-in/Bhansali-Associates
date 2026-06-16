import React from "react";
import { InsightItem } from "../data/insights";
import "./ArticleCard.css";

interface ArticleCardProps {
  article: InsightItem;
  onLinkClick?: (e: React.MouseEvent<HTMLAnchorElement>, route: string) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onLinkClick }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onLinkClick) {
      onLinkClick(e, article.route);
    }
  };

  return (
    <article className="article-card" id={article.id}>
      <div className="article-card-image-wrapper">
        {article.image ? (
          <img
            src={article.image}
            alt=""
            className="article-card-image"
            loading="lazy"
          />
        ) : (
          <div className="article-card-image-placeholder" aria-hidden="true">
            <span>{article.category[0]}</span>
          </div>
        )}
      </div>
      <div className="article-card-content">
        <div className="article-card-meta">
          <span className="article-card-category">{article.category}</span>
          <span className="article-card-separator" aria-hidden="true">•</span>
          <span className="article-card-date">{article.publishedDate}</span>
          <span className="article-card-separator" aria-hidden="true">•</span>
          <span className="article-card-time">{article.readingTime}</span>
        </div>
        <h3 className="article-card-title">{article.title}</h3>
        <p className="article-card-desc">{article.description}</p>
        <div className="article-card-action">
          <a
            href={article.route}
            className="article-card-link"
            onClick={handleLinkClick}
            aria-label={`Read more about ${article.title}`}
          >
            Read Article
            <span className="arrow-icon" aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </article>
  );
};
