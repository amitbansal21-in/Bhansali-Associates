import React from "react";
import { INSIGHTS_DATA, InsightItem } from "../data/insights";
import "./BlogNavigation.css";

interface BlogNavigationProps {
  currentSlug: string;
}

export const BlogNavigation: React.FC<BlogNavigationProps> = ({ currentSlug }) => {
  // Find current index based on route slug match
  const currentIndex = INSIGHTS_DATA.findIndex((article) => article.route.endsWith(currentSlug));
  
  if (currentIndex === -1) return null;

  const prevArticle: InsightItem | undefined = currentIndex > 0 ? INSIGHTS_DATA[currentIndex - 1] : undefined;
  const nextArticle: InsightItem | undefined = currentIndex < INSIGHTS_DATA.length - 1 ? INSIGHTS_DATA[currentIndex + 1] : undefined;

  if (!prevArticle && !nextArticle) return null;

  return (
    <nav className="blog-navigation-control" aria-label="Article Navigation">
      <div className="blog-nav-container">
        {/* Previous Link */}
        <div className="blog-nav-item prev-item">
          {prevArticle ? (
            <a href={prevArticle.route} className="blog-nav-link">
              <span className="blog-nav-direction">
                <span className="arrow" aria-hidden="true">&larr;</span> Previous Article
              </span>
              <span className="blog-nav-title">{prevArticle.title}</span>
            </a>
          ) : (
            <div className="blog-nav-empty"></div>
          )}
        </div>

        {/* Separator Line */}
        <div className="blog-nav-divider" aria-hidden="true"></div>

        {/* Next Link */}
        <div className="blog-nav-item next-item">
          {nextArticle ? (
            <a href={nextArticle.route} className="blog-nav-link">
              <span className="blog-nav-direction">
                Next Article <span className="arrow" aria-hidden="true">&rarr;</span>
              </span>
              <span className="blog-nav-title">{nextArticle.title}</span>
            </a>
          ) : (
            <div className="blog-nav-empty"></div>
          )}
        </div>
      </div>
    </nav>
  );
};
