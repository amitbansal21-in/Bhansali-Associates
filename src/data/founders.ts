export interface FounderItem {
  id: string;
  name: string;
  designation: string;
  shortDescription: string;
  image: string; // Dynamic path or inline SVG Data URI placeholder
  linkedin: string; // LinkedIn profile URL or empty string if unavailable
  futureReplacement: string; // Filename of final photograph
}

const placeholderSilhouette = `data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Crect width='100%25' height='100%25' fill='%23F3F5F7'/%3E%3Ccircle cx='200' cy='185' r='75' fill='%230A192F' opacity='0.12'/%3E%3Cpath d='M80 430 C80 310, 320 310, 320 430 Z' fill='%230A192F' opacity='0.12'/%3E%3Crect x='198' y='250' width='4' height='50' fill='%23C5A059' opacity='0.4'/%3E%3Crect x='16' y='16' width='368' height='468' fill='none' stroke='%23C5A059' stroke-width='1' opacity='0.15'/%3E%3C/svg%3E`;

export const LEADERSHIP_CONFIG = {
  sectionLabel: "LEADERSHIP",
  sectionTitle: "Meet the Leadership Behind Bhansali Associates",
  supportingText: "Every client relationship is built on integrity, professional excellence, and direct partner involvement.",
  editorialQuote: "Professional excellence is not measured by transactions completed, but by the trust sustained over time.",
  purposeTitle: "Our Purpose",
  purposeContent: "Bhansali Associates was built on the belief that financial compliance should not merely satisfy regulations—it should strengthen business confidence, support sustainable growth, and create lasting trust.",
  commitmentTitle: "Our Commitment",
  commitmentContent: "Our commitment is simple — to deliver clarity where there is complexity, confidence where there is uncertainty, and disciplined financial guidance that supports sustainable business growth.\n\nEvery engagement is approached with professional integrity, careful attention to detail, and a long-term perspective that prioritizes our clients' interests above all else."
};

export const FOUNDERS_DATA: FounderItem[] = [
  {
    id: "founder-ashish",
    name: "CA Ashish Bhansali, FCA",
    designation: "Founder",
    shortDescription: "CA Ashish Bhansali is a Fellow Chartered Accountant (FCA) with over 15 years of comprehensive expertise in tax planning, corporate finance modeling, and company compliance advisory. He directs the strategic roadmap of the firm and maintains hands-on involvement in every corporate advisory engagement.",
    image: "/ca_ashish_bhansali.jpg",
    linkedin: "", // Currently unavailable; will be populated with direct URL later
    futureReplacement: "ca_ashish_bhansali.jpg"
  },
  {
    id: "founder-rajani",
    name: "Rajani Bhansali",
    designation: "Co-Founder",
    shortDescription: "Rajani Bhansali co-leads the firm's statutory compliance audits and secretarial audit practices. With a focus on regulatory precision and internal controls, she ensures that every statutory audit is executed under rigid peer-reviewed standards for absolute client confidence.",
    image: "/rajani_bhansali.jpg",
    linkedin: "", // Currently unavailable; will be populated with direct URL later
    futureReplacement: "rajani_bhansali.jpg"
  }
];
