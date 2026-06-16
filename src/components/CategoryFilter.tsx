import React from "react";
import "./CategoryFilter.css";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange
}) => {
  return (
    <nav className="category-filter-nav" aria-label="Filter Insights by Category">
      <ul className="category-filter-list">
        <li>
          <button
            type="button"
            className={`category-filter-btn ${selectedCategory === null ? "is-active" : ""}`}
            onClick={() => onCategoryChange(null)}
            aria-current={selectedCategory === null ? "page" : undefined}
          >
            All Publications
          </button>
        </li>
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <li key={category}>
              <button
                type="button"
                className={`category-filter-btn ${isActive ? "is-active" : ""}`}
                onClick={() => onCategoryChange(category)}
                aria-current={isActive ? "page" : undefined}
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
