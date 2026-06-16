/**
 * Bhansali Associates - Global Configuration Constants
 * Handles all dynamic text, links, phone numbers, and placeholder variables.
 * Allows easy modification of brand identity without editing components.
 */

export const SITE_CONFIG = {
  siteName: "Bhansali Associates",
  siteTagline: "Beyond Numbers, Building Trust",
  
  // Hero Specific Typography
  heroH1: "Chartered Accountant in Mira Road & CA Firm for Growing Enterprises",
  heroSub: "Beyond Numbers, Building Trust Through Expert Audit, Tax & Business Advisory in Mira Bhayandar, Thane, and Mumbai.",
  
  // Contact details & Placeholders
  contactText: "Partner Desk",
  contactTextRaw: "/contact",
  contactPhone: "8369123198 / 8689812481",
  contactWhatsApp: "8369123198",
  contactEmail: "bhansaliassociates99@gmail.com",
  officeAddress: "I 602, Ratna Heights CHSL, Planateria Complex, Near Maheshwari Bhavan, Bhayandar West, Thane - 401101",
  officeHours: "9.30 AM to 6 PM",
  socialFacebook: "https://www.facebook.com/profile.php?id=61590636067736",
  socialInstagram: "https://www.instagram.com/bhansaliassociates99?igsh=aG9iZXgwbDFtYmw4",
  socialLinkedin: "/",
  socialTwitter: "/",
  
  // Navigation Links
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Firm Profile", href: "/about" },
    { label: "Expertise", href: "/#expertise", hasDropdown: true, dropdownItems: [
      { label: "Audit & Assurance", href: "/services/audit-assurance" },
      { label: "GST Advisory", href: "/services/gst-advisory" },
      { label: "Income Tax", href: "/services/income-tax" },
      { label: "Company Registration & ROC", href: "/services/company-registration" },
      { label: "Virtual CFO", href: "/services/virtual-cfo" },
      { label: "Business Advisory", href: "/services/business-advisory" },
      { label: "Financial Consulting", href: "/services/financial-consulting" }
    ]},
    { label: "Industries", href: "/#industries", hasDropdown: true, dropdownItems: [
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Real Estate & Construction", href: "/industries/real-estate-construction" },
      { label: "Startups & Technology", href: "/industries/startups-technology" },
      { label: "Trading & Distribution", href: "/industries/trading-distribution" },
      { label: "Healthcare Professionals", href: "/industries/healthcare-professionals" },
      { label: "NRI & Global Business", href: "/industries/nri-global-business" }
    ]},
    { label: "Insights", href: "/insights" }
  ],
  
  // CTA Destinations (Configurable targets)
  ctaHeroPrimary: "/contact",
  ctaHeroSecondary: "#expertise",
  ctaHeaderPrimary: "/contact",
  
  // Logo Configuration
  logoSrc: "/logo.png",
  logoInverseSrc: "/logo.png",
  
  // Hero Illustration Config (Allows easy replacement with static images)
  heroIllustrationSrc: "", // Empty so it falls back to the premium SVG vector
  
  // Trust Indicators on Hero
  trustIndicators: [
    { value: "Advisory", label: "Partner-Led Client Support" },
    { value: "Precision", label: "Accurate Statutory Compliance" },
    { value: "Growth", label: "Serving Scale & Success" }
  ]
};
