export interface TrustPillar {
  id: string;
  title: string;
  description: string;
  icon: string; // Key mapped to SVG component in the view
}

export interface WhyChooseContent {
  sectionLabel: string;
  sectionTitle: string;
  sectionDescription: string;
  pillars: TrustPillar[];
}

export const WHY_CHOOSE_DATA: WhyChooseContent = {
  sectionLabel: "The Foundation of Our Care",
  sectionTitle: "Why Prominent Enterprises Select Us",
  sectionDescription: "Integrity and quiet excellence structure everything we do. We align our multi-disciplinary practices to secure and streamline your financial operations.",
  pillars: [
    {
      id: "pillar-expertise",
      title: "Integrated Financial Expertise",
      description: "Our highly qualified team synchronizes tax, compliance, audits, and business planning to optimize financial operations seamlessly.",
      icon: "expertise"
    },
    {
      id: "pillar-precision",
      title: "Precision & Compliance",
      description: "A methodical dual-layered partner review on every single audit and statutory submission ensures flawless accuracy in every report.",
      icon: "precision"
    },
    {
      id: "pillar-advisory",
      title: "Strategic Business Advisory",
      description: "Proactive guidance on structuring operations, optimizing working capital, and designing modern corporate legal frameworks.",
      icon: "advisory"
    },
    {
      id: "pillar-partnership",
      title: "Long-Term Client Partnership",
      description: "Our partners act as quiet, advisory stewards of your firm, protecting your corporate legacy and operations for decades.",
      icon: "partnership"
    }
  ]
};
