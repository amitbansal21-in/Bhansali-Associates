export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  icon: string; // Matches a specific SVG path key in the component
  link: string; // Keeps backward compatibility
  route: string; // Future-ready routing path
  futureComponent: string; // Component name placeholder for future navigation
  features: string[]; // List of specific features for detailed view
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "service-audit",
    slug: "audit",
    title: "Audit & Assurance",
    shortDescription: "Independent audits designed to strengthen governance, transparency and stakeholder confidence.",
    description: "Our comprehensive audit and assurance services deliver independent, rigorous evaluations designed to enhance transparency, build trust, and ensure robust corporate governance under statutory mandates.",
    seoTitle: "Statutory Audit & Assurance Services - Bhansali Associates",
    seoDescription: "Exhaustive statutory, internal, and peer-reviewed audits to ensure compliance and corporate governance.",
    icon: "audit",
    link: "/services/audit",
    route: "/services/audit",
    futureComponent: "AuditDetail",
    features: [
      "Statutory Audits under the Companies Act, 2013",
      "Internal Audits & Management Control Reviews",
      "Tax Audits (Income Tax Act & GST Audits)",
      "Internal Financial Controls (ICFR) Compliance & Certification"
    ]
  },
  {
    id: "service-gst",
    slug: "gst",
    title: "GST Advisory",
    shortDescription: "Strategic GST planning, compliance management and litigation support.",
    description: "We provide strategic indirect taxation advisory, compliance management, and representational advocacy to optimize your business transaction structures and secure input tax credits.",
    seoTitle: "GST Compliance & Indirect Tax Advisory - Bhansali Associates",
    seoDescription: "Comprehensive GST consultation, multi-party reconciliation, dynamic input credit optimization, and litigation support.",
    icon: "gst",
    link: "/services/gst",
    route: "/services/gst",
    futureComponent: "GSTDetail",
    features: [
      "GST Registration & Monthly Compliance Filing",
      "Multi-Party Reconciliations (GSTR-2B matching)",
      "Strategic Transaction Advisory & Credit Optimization",
      "GST Audit, Refund Applications & Litigation Representation"
    ]
  },
  {
    id: "service-tax",
    slug: "income-tax",
    title: "Income Tax",
    shortDescription: "Tax planning, assessments, representation and long-term optimization.",
    description: "Our direct tax practice assists corporate and individual clients in navigating tax planning, compliance filings, transfer pricing audits, and representation before tax authorities.",
    seoTitle: "Direct Tax Planning & Representation - Bhansali Associates",
    seoDescription: "Advanced direct taxation advisory, corporate tax assessments, and representational advocacy before tax authorities.",
    icon: "tax",
    link: "/services/income-tax",
    route: "/services/income-tax",
    futureComponent: "IncomeTaxDetail",
    features: [
      "Corporate & Individual Tax Planning & Optimization",
      "Income Tax Return (ITR) Filing & Compliance Support",
      "Tax Assessments & Scrutiny Representation",
      "TDS Compliance, Certifications & Double Tax Avoidance (DTAA)"
    ]
  },
  {
    id: "service-roc",
    slug: "roc",
    title: "ROC Compliance",
    shortDescription: "Corporate filings, annual compliance and secretarial coordination.",
    description: "Ensure flawless compliance with corporate laws and Ministry of Corporate Affairs (MCA) regulations through our corporate secretarial and annual ROC filing services.",
    seoTitle: "Corporate Secretarial & ROC Filing Compliance - Bhansali Associates",
    seoDescription: "Filing of annual corporate returns, structural director mandates, and meticulous MCA registry compliance.",
    icon: "roc",
    link: "/services/roc",
    route: "/services/roc",
    futureComponent: "ROCComplianceDetail",
    features: [
      "Company & LLP Registration and Incorporation",
      "Annual ROC Return Filings & Statutory Records Maintenance",
      "Director Appointment, Resignation, and DIN Compliance",
      "Secretarial Audits & Board Resolutions Management"
    ]
  },
  {
    id: "service-cfo",
    slug: "virtual-cfo",
    title: "Virtual CFO",
    shortDescription: "Financial planning, MIS reporting, budgeting and strategic decision support.",
    description: "Get ongoing corporate-level financial advisory, strategic budgeting, working capital control, and decision support without the overhead of a full-time financial executive.",
    seoTitle: "Strategic Virtual CFO & Financial Advisory - Bhansali Associates",
    seoDescription: "Board-level ongoing financial modeling, working capital planning, cash flow budgeting, and strategic growth advice.",
    icon: "cfo",
    link: "/services/virtual-cfo",
    route: "/services/virtual-cfo",
    futureComponent: "VirtualCFODetail",
    features: [
      "Strategic Cash Flow Forecasting & Capital Budgeting",
      "Detailed MIS Reporting & Dashboard Implementations",
      "Working Capital Analysis & Profitability Reviews",
      "Principal-led Advisory for Business Expansion Strategy"
    ]
  },
  {
    id: "service-finance",
    slug: "project-finance",
    title: "Loan & Project Finance",
    shortDescription: "Project reports, funding advisory and banking documentation assistance.",
    description: "Accelerate your capital expansion with professionally engineered project feasibility reports, CMA credit data calculations, and expert representation before banking institutions.",
    seoTitle: "Corporate Loan Syndication & Project Financing - Bhansali Associates",
    seoDescription: "Banking project reports, detailed CMA calculations, corporate loan syndication, and financial preparation.",
    icon: "finance",
    link: "/services/project-finance",
    route: "/services/project-finance",
    futureComponent: "ProjectFinanceDetail",
    features: [
      "Detailed Project Feasibility & Financial Projections Reports",
      "Credit Monitoring Arrangement (CMA) Data Compilation",
      "Working Capital Limits & Term Loan Syndication Assistance",
      "Banking Documentation Preparation & Institutional Representation"
    ]
  }
];
