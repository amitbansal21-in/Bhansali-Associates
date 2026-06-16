import React from "react";
import "./PageContainer.css";

export interface PageContainerProps {
  children: React.ReactNode;
  size?: "narrow" | "default" | "wide";
  padding?: "compact" | "default" | "comfortable";
  className?: string;
  as?: "div" | "section" | "article" | "main";
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  size = "default",
  padding = "default",
  className = "",
  as = "section"
}) => {
  const Component = as;
  return (
    <Component className={`page-container container-size-${size} container-padding-${padding} ${className}`}>
      <div className="container container-inner">
        {children}
      </div>
    </Component>
  );
};
