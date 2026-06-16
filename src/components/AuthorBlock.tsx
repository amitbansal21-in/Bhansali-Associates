import React from "react";
import { FOUNDERS_DATA } from "../data/founders";
import "./AuthorBlock.css";

interface AuthorBlockProps {
  authorId?: string;
}

export const AuthorBlock: React.FC<AuthorBlockProps> = ({ authorId }) => {
  if (!authorId) return null;
  const author = FOUNDERS_DATA.find((f) => f.id === authorId);
  if (!author) return null;

  return (
    <div className="author-information-block" id="author-block">
      <div className="author-photo-wrapper">
        {author.image ? (
          <img
            src={author.image}
            alt={author.name}
            className="author-photo"
          />
        ) : (
          <div className="author-photo-placeholder" aria-hidden="true">
            {author.name[0]}
          </div>
        )}
      </div>
      <div className="author-details">
        <div className="author-info-header">
          <h4 className="author-name font-semibold">{author.name}</h4>
          <span className="author-designation">{author.designation}</span>
        </div>
        <p className="author-bio text-body-small">{author.shortDescription}</p>
        
        {author.linkedin && (
          <div className="author-actions">
            <a
              href={author.linkedin}
              className="author-linkedin-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${author.name} LinkedIn profile opens in a new tab`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
