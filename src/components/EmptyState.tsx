import React from "react";
import "./EmptyState.css";

interface EmptyStateProps {
  onReset: () => void;
  message?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  onReset,
  message = "No articles match your active search terms or category filters."
}) => {
  return (
    <div className="empty-state-card" role="alert" aria-live="polite">
      <div className="empty-state-icon-wrapper" aria-hidden="true">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="8" y1="11" x2="14" y2="11" strokeWidth="2"></line>
        </svg>
      </div>
      <h3 className="empty-state-title">No Publications Found</h3>
      <p className="empty-state-desc">{message}</p>
      <button
        type="button"
        className="btn btn-outline empty-state-reset-btn"
        onClick={onReset}
      >
        Reset Filters &amp; Search
      </button>
    </div>
  );
};
