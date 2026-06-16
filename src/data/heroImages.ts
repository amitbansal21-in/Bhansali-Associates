export interface HeroImage {
  id: string;
  title: string;
  image: string; // Base64 or URL-encoded SVG placeholder / Image asset path
  alt: string;
  futureReplacement: string; // Name of production file for future integration
}

export const HERO_IMAGES: HeroImage[] = [
  {
    id: "hero-slide-1",
    title: "Executive Financial Advisory",
    image: "/financial_advisory_boardroom.jpg",
    alt: "Executive Financial Advisory - Partner-led Corporate Consultancy",
    futureReplacement: "financial_advisory_boardroom.jpg"
  },
  {
    id: "hero-slide-2",
    title: "Corporate Audit & Tax Strategy",
    image: "/audit_tax_compliance.jpg",
    alt: "Corporate Audit & Tax Strategy - Statutory Compliance Excellence",
    futureReplacement: "audit_tax_compliance.jpg"
  },
  {
    id: "hero-slide-3",
    title: "Business Growth & Boardroom Consulting",
    image: "/boardroom_business_growth.jpg",
    alt: "Business Growth & Boardroom Consulting - Enterprise Strategic Advice",
    futureReplacement: "boardroom_business_growth.jpg"
  }
];
