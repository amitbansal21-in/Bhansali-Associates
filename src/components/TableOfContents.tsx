import React, { useEffect, useState } from "react";
import { BlogBlock } from "../data/insights";
import "./TableOfContents.css";

// Helper to generate clean DOM IDs from headings
export const slugifyHeading = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

interface TableOfContentsProps {
  blocks: BlogBlock[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ blocks }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const headings = blocks
    .filter((block) => block.type === "h2" || block.type === "h3")
    .map((block) => {
      const text = block.content || "";
      return {
        id: slugifyHeading(text),
        text,
        type: block.type as "h2" | "h3"
      };
    });

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // We find the elements intersecting in the top portion of the screen
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Highlight the first intersecting heading
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-100px 0px -70% 0px", // Active zone in the upper-mid viewport
        threshold: 0
      }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [blocks]);

  if (headings.length === 0) return null;

  const handleHeadingClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // Header margin offset
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
      // Set focus to the element for accessibility
      el.focus({ preventScroll: true });
    }
  };

  return (
    <nav className="table-of-contents-nav" aria-label="Table of Contents">
      <h4 className="toc-title font-semibold uppercase tracking-wider">On This Page</h4>
      <ul className="toc-list">
        {headings.map((heading) => (
          <li key={heading.id} className={`toc-item depth-${heading.type}`}>
            <a
              href={`#${heading.id}`}
              className={`toc-link ${activeId === heading.id ? "is-active" : ""}`}
              onClick={(e) => handleHeadingClick(e, heading.id)}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
