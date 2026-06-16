import React from "react";
import { PageBanner } from "./PageBanner";
import { IndustryItem } from "../data/industries";
import "./IndustryHero.css";

interface IndustryHeroProps {
  industry: IndustryItem;
}

export const IndustryHero: React.FC<IndustryHeroProps> = ({ industry }) => {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Industries", url: "/#industries" },
    { label: industry.title }
  ];

  return (
    <div className="industry-hero-wrapper">
      <PageBanner
        theme="dark"
        badge={industry.badge}
        title={`${industry.title} Industry Practice`}
        subtitle={industry.subtitle}
        breadcrumbs={breadcrumbs}
        backgroundPattern={true}
      />
    </div>
  );
};
