import React from "react";
import { PageBanner } from "./PageBanner";
import "./ServiceHero.css";

interface ServiceHeroProps {
  badge: string;
  title: string;
  subtitle: string;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({
  badge,
  title,
  subtitle
}) => {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Expertise", url: "/#expertise" },
    { label: badge }
  ];

  return (
    <div className="service-hero-wrapper">
      <PageBanner
        theme="dark"
        badge={badge}
        title={title}
        subtitle={subtitle}
        breadcrumbs={breadcrumbs}
        backgroundPattern={true}
      />
    </div>
  );
};
