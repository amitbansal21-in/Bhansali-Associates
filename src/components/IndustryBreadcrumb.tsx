import React from "react";
import { Breadcrumb } from "./Breadcrumb";
import "./IndustryBreadcrumb.css";

interface IndustryBreadcrumbProps {
  industryTitle: string;
}

export const IndustryBreadcrumb: React.FC<IndustryBreadcrumbProps> = ({ industryTitle }) => {
  const items = [
    { label: "Home", url: "/" },
    { label: "Industries", url: "/#industries" },
    { label: industryTitle }
  ];

  return (
    <div className="industry-breadcrumb-wrapper" aria-label="Breadcrumb navigation">
      <Breadcrumb items={items} />
    </div>
  );
};
