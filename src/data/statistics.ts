export interface TrustCard {
  id: string;
  title: string;
  description: string;
  iconName: "partner" | "regulatory" | "relationship" | "guidance";
}

export const STATISTICS_CONFIG = {
  sectionLabel: "OUR COMMITMENT",
  sectionTitle: "Integrity Measured Through Consistency & Trust",
  supportingText: "Professional excellence is reflected not only through outcomes but through disciplined processes, enduring relationships, and partner-led guidance."
};

export const TRUST_CARDS_DATA: TrustCard[] = [
  {
    id: "trust-partner",
    title: "Partner-Led Advisory",
    description: "Every engagement receives direct senior-level attention.",
    iconName: "partner"
  },
  {
    id: "trust-regulatory",
    title: "Regulatory Excellence",
    description: "Structured compliance built on discipline and precision.",
    iconName: "regulatory"
  },
  {
    id: "trust-relationship",
    title: "Long-Term Relationships",
    description: "Focused on sustainable partnerships and enduring trust.",
    iconName: "relationship"
  },
  {
    id: "trust-guidance",
    title: "Strategic Business Guidance",
    description: "Helping enterprises make confident financial decisions.",
    iconName: "guidance"
  }
];
