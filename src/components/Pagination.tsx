import React from "react";
import "./Pagination.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, idx) => idx + 1);

  return (
    <nav className="pagination-nav" aria-label="Pagination Navigation">
      <ul className="pagination-list">
        {/* Previous Page */}
        <li>
          <button
            type="button"
            className="pagination-arrow-btn"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Go to previous page"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        </li>

        {/* Page Numbers */}
        {pages.map((page) => {
          const isActive = page === currentPage;
          return (
            <li key={page}>
              <button
                type="button"
                className={`pagination-number-btn ${isActive ? "is-active" : ""}`}
                onClick={() => onPageChange(page)}
                aria-current={isActive ? "page" : undefined}
                aria-label={`Go to page ${page}`}
              >
                {page}
              </button>
            </li>
          );
        })}

        {/* Next Page */}
        <li>
          <button
            type="button"
            className="pagination-arrow-btn"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Go to next page"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};
