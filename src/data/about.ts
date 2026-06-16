export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  iconName: "integrity" | "excellence" | "fiduciary" | "client";
}

export interface ApproachStep {
  stepNumber: string;
  title: string;
  description: string;
}

export const ABOUT_DATA = {
  // Timeline journey
  timeline: [
    {
      year: "2012",
      title: "Establishment of Advisory Desk",
      description: "CA Ashish Bhansali founded the practice as a direct partner-led corporate consultancy in Mumbai, focusing on statutory audit compliance and complex direct tax assessments."
    },
    {
      year: "2016",
      title: "Assurance Practice Expansion",
      description: "Co-Founder Rajani Bhansali joined the firm, expanding secretarial audit audits, ROC filings, LLPs, and statutory corporate registrations under Peer-Reviewed ICAI standards."
    },
    {
      year: "2019",
      title: "GST Compliance & Indirect Tax Launch",
      description: "In response to national tax overhauls, launched dedicated GSTR-2B reconciliations and direct-to-partner representation for audit litigation."
    },
    {
      year: "2022",
      title: "Virtual CFO & Debt Syndication Desk",
      description: "Established corporate debt services, structuring bank term loan files, preparing Credit Monitoring Arrangements (CMA), and deploying board-level Virtual CFO advisories."
    },
    {
      year: "2026",
      title: "Enterprise Fiduciary Advisory",
      description: "Serving as a premier multi-disciplinary firm supporting statutory growth across manufacturing, real estate, technology, and global NRI sectors."
    }
  ] as TimelineEvent[],

  // Mission & Vision
  missionTitle: "Our Mission",
  missionText: "To deliver clear, disciplined, and statutory compliance frameworks that safeguard enterprise liquidity, secure statutory compliance, and establish boardroom confidence for growing businesses.",
  
  visionTitle: "Our Vision",
  visionText: "To stand as the absolute standard of corporate trust, professional assurance, and strategic advisory — empowering enterprises to scale confidently through sound compliance.",

  // Core Values
  values: [
    {
      id: "val-integrity",
      title: "Uncompromising Integrity",
      description: "We maintain absolute transparency, compliance ethics, and peer-reviewed professional diligence in every filing, audit, and representational assessment.",
      iconName: "integrity"
    },
    {
      id: "val-excellence",
      title: "Assurance Excellence",
      description: "Every balance sheet audit, ROC ledger review, and tax return is processed under strict partner oversight to ensure zero errors and zero compliance risks.",
      iconName: "excellence"
    },
    {
      id: "val-fiduciary",
      title: "Fiduciary Duty First",
      description: "We prioritize our clients' long-term business security above all, protecting working capital, resolving tax disputes, and structuring robust corporate finance.",
      iconName: "fiduciary"
    },
    {
      id: "val-client",
      title: "Direct Partner Contact",
      description: "We reject delegation. Every strategic corporate client is advised directly by a principal partner, ensuring board-level expertise is applied to every engagement.",
      iconName: "client"
    }
  ] as ValueItem[],

  // Advisory Approach steps
  approach: [
    {
      stepNumber: "01",
      title: "Statutory Gap Assessment",
      description: "We review your historical direct tax files, ROC records, and GST reconciliations to map compliance leaks."
    },
    {
      stepNumber: "02",
      title: "Strategic Advisory Structure",
      description: "Our partners design custom compliance frameworks, optimization structures, and capital projections."
    },
    {
      stepNumber: "03",
      title: "Disciplined Execution",
      description: "We manage direct filings, handle representation assessments, and structure corporate loan profiles with rigor."
    }
  ] as ApproachStep[]
};
