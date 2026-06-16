export interface ServiceBenefit {
  title: string;
  desc: string;
  iconName: "shield" | "trending" | "clock" | "users" | "settings" | "file-text";
}

export interface ServiceFeatureItem {
  title: string;
  desc: string;
}

export interface ServiceProcessStep {
  stepNumber: string;
  title: string;
  desc: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDetailData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  ogImage: string;
  badge: string;
  title: string;
  subtitle: string;
  overview: string[];
  importance?: string[];
  challengesText?: string[];
  ourApproach?: string[];
  benefits: ServiceBenefit[];
  features: ServiceFeatureItem[];
  whyChoose: string[];
  whyChooseDetail?: string[];
  processSteps: ServiceProcessStep[];
  timelyCompliance?: string[];
  faqs: ServiceFaq[];
  relatedServiceSlugs: string[];
}


const rawData: Record<string, ServiceDetailData> = {
  "gst-advisory": {
    slug: "gst-advisory",
    metaTitle: "GST Consultant in Mira Road | GST Advisory & Compliance | Bhansali Associates",
    metaDescription: "Maximize Input Tax Credit (ITC) recovery and GSTR-2B reconciliations with a top GST Consultant in Mira Road, Bhayandar & Mumbai. Registrations & litigation support.",
    canonicalUrl: "/services/gst-advisory",
    ogImage: "/assets/images/services/gst-advisory.jpg",
    badge: "GST Advisory",
    title: "GST Consultant & Advisory Services in Mira Road",
    subtitle: "Optimize working capital liquidity through partner-led input tax reconciliations, tax filing compliance, and indirect tax representation.",
    overview: [
      "Indirect taxation compliance is crucial to protecting business liquidity. At Bhansali Associates, we provide comprehensive services as a leading <a href=\"/services/gst-advisory\">GST Consultant in Mira Road</a>, helping businesses navigate complex regulations, file returns, and coordinate with <a href=\"/services/income-tax\">Income Tax Planning</a> and audit frameworks.",
      "Our approach is direct and partner-led. We combine thorough transaction analysis with robust portal reconciliations, securing eligible Input Tax Credits (ITC) and representing your interests before tax authorities with professional diligence.",
      "By establishing a direct link between purchase registries and GSTR-2B matching protocols, we help businesses eliminate credit leakage and avoid vendor payment disputes. Our co-founding partners review every file, ensuring that compliance is met with accuracy."
    ],
    importance: [
      "GST compliance is directly linked to an enterprise's cash flow. Mismatches between your purchase books and the GSTR-2B statement can lead to credit blockages, forcing companies to pay tax liabilities in cash and lock up critical working capital.",
      "Ensuring clean filings protects your corporate reputation, maintains positive vendor relations, and mitigates the risk of department notices or audits. Our structured tax advisory preserves your credit flow and ensures regulatory security."
    ],
    challengesText: [
      "Many businesses face credit blockage due to suppliers filing GSTR-1 returns late or defaulting on tax payments. Navigating multi-state GST registrations and compliance tracking for e-way bills and e-invoicing creates operational stress.",
      "Additionally, responding to departmental show-cause notices requires meticulous documentation and legal representation to avoid arbitrary demand assessments."
    ],
    ourApproach: [
      "We implement an active monthly reconciliation system that matches your purchase registers against static GSTR-2B portal data feeds. We identify defaulting suppliers, generate discrepancy lists, and advise on credit retention strategies.",
      "Every dispute, audit notice response, and appeal is drafted and represented directly by senior chartered accountant partners to ensure your legal interests are protected."
    ],
    benefits: [
      {
        title: "ITC Optimization",
        desc: "Meticulous matching of purchase records to GSTR-2B to identify vendor defaults and recover input credits.",
        iconName: "trending"
      },
      {
        title: "Litigation Security",
        desc: "Partner-led representation for tax audits, notices, appeals, and hearings before appellate commissioners.",
        iconName: "shield"
      },
      {
        title: "Filing Compliance",
        desc: "Accurate preparation and timely submission of monthly GSTR-1, GSTR-3B, and annual GSTR-9 returns.",
        iconName: "file-text"
      }
    ],
    features: [
      {
        title: "GST Registration & Setup",
        desc: "Assisting new and expanding business entities with tax registration, registration updates, and state-specific compliance setups in Mira Bhayandar, Thane, and Mumbai."
      },
      {
        title: "GST Return Filing",
        desc: "Preparing and filing monthly and annual GST returns, verifying transaction data, and submitting compliance reports."
      },
      {
        title: "GST Audit Support",
        desc: "Representing clients during statutory GST audits, preparing reconciliations, and answering departmental inquiries."
      },
      {
        title: "Input Tax Credit Advisory",
        desc: "Analyzing purchase registers, identifying credit leakage, and reconciling invoice discrepancies with supplier accounts."
      },
      {
        title: "GST Litigation Assistance",
        desc: "Drafting replies to show-cause notices, compiling representational evidence, and appearing before appellate authorities."
      },
      {
        title: "GST Compliance Review",
        desc: "Conducting health checks of transaction logs to identify classification errors, tax exposure, and credit recovery opportunities."
      },
      {
        title: "Contract Structuring",
        desc: "Structuring domestic transaction contracts, advising on inter-state supply tax rules, and optimizing corporate tax setups."
      }
    ],
    whyChoose: [
      "Direct Partner Involvement",
      "Robust Tech-Driven Reconciliations",
      "Clean Compliance Record"
    ],
    whyChooseDetail: [
      "We do not delegate your sensitive tax filings or reconciliations to junior staff. Our managing partners, CA Ashish Bhansali and CA Rajani Bhansali, directly supervise and review all compliance workflows, ensuring experienced oversight.",
      "By leveraging automated data matching scripts and providing hands-on consultation, we deliver high-accuracy filings that eliminate interest penalties and secure your business credit assets."
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Data Gathering & Extraction",
        desc: "Weekly extraction of purchase registers and sale logs from your ERP systems for verification."
      },
      {
        stepNumber: "02",
        title: "Portal Matching",
        desc: "Running automated GSTR-2B reconciliations to match purchase ledgers against portal uploads."
      },
      {
        stepNumber: "03",
        title: "Filing & Submission",
        desc: "Compiling GSTR-1 and GSTR-3B forms and filing them cleanly before the due dates."
      }
    ],
    timelyCompliance: [
      "Late filings trigger automatic late fees and interest under GST laws, which cannot be offset against input tax credits. Furthermore, continuous non-compliance can lead to the suspension of your GST registration, halting business operations entirely. Timely filing protects your cash flow and safeguards your brand reputation."
    ],
    faqs: [
      {
        question: "How does Bhansali Associates help manufacturing units with GSTR-2B reconciliations?",
        answer: "We deploy advanced data matching tools that compare your ERP purchase registers against the monthly static GSTR-2B, highlighting supplier mismatches and preventing credit leakage."
      },
      {
        question: "What is your approach to GST litigation and show-cause notices?",
        answer: "Every notice response is drafted directly by CA Ashish Bhansali. We compile evidence, prepare reconciliation statements, and represent clients in person before appellate authorities."
      },
      {
        question: "What are the rules for claiming Input Tax Credit (ITC) under Section 16(4)?",
        answer: "ITC for a financial year must be claimed by the due date of filing GSTR-3B for November of the following financial year, or the filing of the annual return, whichever is earlier."
      },
      {
        question: "Do you assist with GST registration in Thane and Mumbai districts?",
        answer: "Yes, we handle registrations for new companies, partnerships, sole proprietorships, and branch offices in Thane, Mumbai, and Mira Bhayandar regions."
      },
      {
        question: "What is the consequence of a supplier defaulting on GST payments?",
        answer: "If a supplier does not deposit the tax collected from you, the input credit will not appear in GSTR-2B, and you cannot claim it, resulting in double tax payments."
      },
      {
        question: "How do you handle annual GST returns (GSTR-9 and GSTR-9C)?",
        answer: "We perform a comprehensive annual reconciliation of GSTR-1, GSTR-3B, and your audited financial books, compiling and filing GSTR-9 and the GSTR-9C reconciliation statement."
      },
      {
        question: "Can you help with e-invoicing and e-way bill generation?",
        answer: "Yes, we set up compliant workflows in your ERP systems, advise on thresholds, and handle registration on the e-invoice portal."
      },
      {
        question: "What are the key exemptions available under GST for services?",
        answer: "Certain services like basic healthcare, education, and government services are exempt. We review your service classifications to verify eligible exemptions."
      }
    ],
    relatedServiceSlugs: ["income-tax", "audit-assurance", "virtual-cfo"]
  },
  "audit-assurance": {
    slug: "audit-assurance",
    metaTitle: "CA Firm in Mira Road | Statutory Audit & Corporate Assurance",
    metaDescription: "Ensure corporate financial integrity under senior partner CA oversight. Leading CA Firm in Mira Road, Mira Bhayandar & Mumbai for Statutory and Tax Audits.",
    canonicalUrl: "/services/audit-assurance",
    ogImage: "/assets/images/services/audit-assurance.jpg",
    badge: "Audit & Assurance",
    title: "Statutory Audit & Corporate Assurance Services in Mira Road",
    subtitle: "Verify statutory compliance, strengthen internal controls, and deliver transparent financial reporting to stakeholders with partner-led reviews.",
    overview: [
      "Statutory audits and financial reviews are crucial for investor trust. As a premier <a href=\"/services/audit-assurance\">CA Firm in Mira Road</a>, we perform rigorous financial examinations in accordance with ICAI frameworks, ensuring compliance for <a href=\"/services/company-registration\">LLP and Company Registration</a> entities.",
      "Our team conducts independent evaluations of your company's transaction registers, internal control systems, and regulatory filings. By providing direct partner involvement throughout the audit process, we deliver credible boardroom assurance and identify opportunities to optimize accounting workflows.",
      "We strictly adhere to national standards on auditing, maintaining complete independence and financial transparency in every engagement. We serve companies across Thane and Mumbai."
    ],
    importance: [
      "Statutory audits are mandatory for registered companies and LLPs exceeding specific thresholds. They provide independent assurance to bank lenders, shareholders, and government regulators that your balance sheet represents a true and fair view of your business operations.",
      "An accurate audit prevents compliance penalties under the Companies Act, improves credit ratings, and builds trust with potential investors during funding rounds."
    ],
    challengesText: [
      "Enterprises often struggle with complex GAAP or Ind AS accounting treatments, inventory valuation methodologies, and internal control leakages.",
      "Without professional audit oversight, internal bookkeeping discrepancies can lead to major compliance penalties, qualified audit reports, and loss of bank borrowing power."
    ],
    ourApproach: [
      "We design a customized, risk-based audit plan that focuses on high-impact transaction areas. We evaluate your internal control frameworks, audit transaction cycles, and verify balance sheets thoroughly.",
      "Co-founding partner CA Rajani Bhansali oversees every audit program, ensuring that all findings are reviewed with the highest professional diligence."
    ],
    benefits: [
      {
        title: "Fiduciary Assurance",
        desc: "Delivering independent, objective, and ICAI-compliant audits that enhance stakeholder confidence.",
        iconName: "shield"
      },
      {
        title: "Control Optimization",
        desc: "Identifying internal ledger leaks, transaction gaps, and operational bookkeeping vulnerabilities.",
        iconName: "settings"
      },
      {
        title: "Compliance Security",
        desc: "Ensuring zero penalties under the Companies Act and direct tax guidelines through clean audits.",
        iconName: "clock"
      }
    ],
    features: [
      {
        title: "Statutory Financial Audits",
        desc: "Conducting mandatory annual audits under the Companies Act for private and public limited companies in Mumbai and Thane."
      },
      {
        title: "Internal Audits",
        desc: "Evaluating internal accounting systems, validating transaction approvals, and preventing bookkeeping frauds."
      },
      {
        title: "Tax Audits (Section 44AB)",
        desc: "Performing tax audits to verify compliance with direct tax rules, filing Form 3CD declarations cleanly."
      },
      {
        title: "ROC compliance checks",
        desc: "Verifying statutory register entries, board meeting compliance, and share capital allocations."
      },
      {
        title: "Special Audits",
        desc: "Performing transaction audits, working capital audits, and custom management investigations."
      },
      {
        title: "Inventory Audits",
        desc: "Performing physical stock verifications, cost valuation checks (AS-2 compliance), and scrap reviews."
      },
      {
        title: "Certification Services",
        desc: "Issuing net-worth certificates, financial certifications, and remittance clearances under FEMA rules."
      }
    ],
    whyChoose: [
      "Senior CA Supervision",
      "Adherence to ICAI Frameworks",
      "Clear Risk Mitigation"
    ],
    whyChooseDetail: [
      "Unlike firms that delegate audit fieldwork entirely to article assistants, our co-founders maintain active, hands-on control over every audit program. We review all workpapers and compliance checklists directly.",
      "Our team provides practical recommendations to improve your bookkeeping controls and streamline future audits, ensuring long-term business value."
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Audit Planning & Scoping",
        desc: "Reviewing business operations, identifying critical transaction paths, and establishing materiality levels."
      },
      {
        stepNumber: "02",
        title: "Fieldwork & Verification",
        desc: "Auditing transaction vouchers, verifying ledger balances, and checking internal control controls."
      },
      {
        stepNumber: "03",
        title: "Reporting & Signing",
        desc: "Issuing independent audit opinions and presenting management letters to the board of directors."
      }
    ],
    timelyCompliance: [
      "Failing to file audited balance sheets on time with the ROC triggers heavy daily penalties for the company and its directors, and can lead to disqualification. Timely statutory audits prevent legal actions and maintain corporate active status."
    ],
    faqs: [
      {
        question: "When is a statutory audit mandatory for a private limited company?",
        answer: "A statutory audit is mandatory for all registered private limited companies in India, regardless of their turnover or capital, under the Companies Act."
      },
      {
        question: "What is the threshold for a Tax Audit under Section 44AB?",
        answer: "For businesses, a tax audit is mandatory if total sales or turnover exceeds ₹1 Crore (or ₹10 Crores if cash transactions are under 5%). For professionals, the threshold is ₹50 Lakhs (or ₹75 Lakhs under presumptive tax schemes)."
      },
      {
        question: "How does Bhansali Associates help improve our internal accounting controls?",
        answer: "During our audit, we evaluate segregation of duties, voucher authorizations, and ledger reconciliations, providing a detailed management letter with recommendations."
      },
      {
        question: "Do you perform stock audit audits for manufacturing units in Thane?",
        answer: "Yes, we conduct physical inventory counts, verify cost valuations in line with AS-2, and analyze stock variances at plants in Thane, Mumbai, and Mira Bhayandar."
      },
      {
        question: "What is the role of co-founders in your audit engagements?",
        answer: "CA Rajani Bhansali supervises all audit programs directly, participating in final client reviews and signing all audit reports, ensuring senior-level expertise."
      },
      {
        question: "What is Form 3CB and 3CD in tax audits?",
        answer: "Form 3CB is the audit report issued by the chartered accountant, and Form 3CD is the detailed statement of particulars covering various direct tax compliance items."
      },
      {
        question: "Can an audit report be qualified, and what does it mean?",
        answer: "Yes. A qualified report indicates that the auditor found material discrepancies or lacked sufficient evidence for certain balance sheet assertions, which can impact credit ratings."
      },
      {
        question: "How do you coordinate with our internal accounting team?",
        answer: "We establish a clear information request list, maintain regular check-ins, and minimize disruption to your daily operations during fieldwork."
      }
    ],
    relatedServiceSlugs: ["gst-advisory", "company-registration", "income-tax"]
  },
  "income-tax": {
    slug: "income-tax",
    metaTitle: "Income Tax Consultant in Bhayandar & Mira Road | Bhansali Associates",
    metaDescription: "Optimize corporate tax plans, TDS filings, and represent tax assessment scrutiny appeals with a trusted Income Tax Consultant in Bhayandar, Mira Road & Mumbai.",
    canonicalUrl: "/services/income-tax",
    ogImage: "/assets/images/services/income-tax.jpg",
    badge: "Income Tax",
    title: "Income Tax Consultant in Bhayandar & Mira Road",
    subtitle: "Optimize direct tax structures, manage corporate income filings, and resolve scrutiny notice disputes under partner-led representational advocacy.",
    overview: [
      "Corporate direct taxation demands rigorous planning. At Bhansali Associates, a trusted <a href=\"/services/income-tax\">Tax Consultant in Mira Road</a>, we advise on tax setups, manage TDS compliance, and represent scrutiny cases, aligning with <a href=\"/services/gst-advisory\">GST Advisory</a> parameters.",
      "Our representational advocacy practice provides complete support during tax assessments and scrutiny notices. Led directly by our principal partners, we compile robust case documentation and represent your interests before direct tax assessing officers and appellate commissions.",
      "We work with companies, partnerships, trusts, and individual professionals across Mira Bhayandar, Thane, and Mumbai to minimize tax exposure safely."
    ],
    importance: [
      "Rigorous direct tax planning ensures that your business utilizes all eligible deductions, exemptions, and depreciation allowances. It prevents costly tax assessment disputes, keeps interest charges at zero, and ensures compliance with quarterly TDS obligations.",
      "Proper tax structures prevent partner or corporate liability risks, providing clear cash savings that can be reinvested into company growth."
    ],
    challengesText: [
      "Indian tax regulations change frequently, making it difficult to keep track of withholding tax rates (TDS), transfer pricing compliance, and capital gains structures.",
      "Scrutiny notices from the Income Tax department require strategic legal interpretation. Poor notice handling can result in high tax demands and penalty levies."
    ],
    ourApproach: [
      "We review your corporate ledgers quarterly to optimize tax provisions and manage TDS deductions. We handle all direct filings under partner supervision.",
      "For assessment notices, CA Ashish Bhansali prepares detailed legal submissions and represents your case directly before the authorities to protect your assets."
    ],
    benefits: [
      {
        title: "Tax Exposure Reduction",
        desc: "Structuring business transaction flows to leverage legitimate deductions and lower effective tax rates.",
        iconName: "trending"
      },
      {
        title: "Litigation Shield",
        desc: "Partner-led legal representation for scrutiny notices, assessment hearings, and CIT(A) appeals.",
        iconName: "shield"
      },
      {
        title: "TDS Filing Security",
        desc: "Accurate calculation, deposit verification, and timely quarterly filing of TDS returns on TRACES.",
        iconName: "clock"
      }
    ],
    features: [
      {
        title: "Corporate Tax Return Filing",
        desc: "Preparing and filing annual income tax returns (ITR-6) for private and public companies in Mira Road and Thane."
      },
      {
        title: "TDS Compliance & Returns",
        desc: "Managing quarterly TDS returns (Form 24Q, 26Q, 27Q), verifying portal demands, and issuing Form 16/16A."
      },
      {
        title: "Scrutiny Representation",
        desc: "Representing clients before the Income Tax department for faceless assessments, notices, and scrutiny reviews."
      },
      {
        title: "Appeals & Litigation",
        desc: "Drafting appeals, compiling representational books, and presenting cases before CIT (Appeals)."
      },
      {
        title: "International Taxation",
        desc: "Advising on Double Taxation Avoidance Agreements (DTAA), transfer pricing audits, and foreign remittances."
      },
      {
        title: "Presumptive Taxation",
        desc: "Helping professionals leverage Section 44ADA to optimize income tax liabilities legally."
      },
      {
        title: "Tax Planning & Restructuring",
        desc: "Advising on business mergers, capital gains reinvestment, and partner salary structures."
      }
    ],
    whyChoose: [
      "Direct Partner Representation",
      "Strategic Legal Insights",
      "Pristine TRACES Ledger Record"
    ],
    whyChooseDetail: [
      "We believe that direct tax matters require senior-level legal expertise. CA Ashish Bhansali manages and drafts all representational files personally, ensuring that your tax positions are backed by solid legal precedents.",
      "We keep your TDS registry clean on TRACES, eliminating default demands and protecting your vendors from withholding discrepancies."
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Tax Review & Provisioning",
        desc: "Reviewing quarterly financials to calculate advance tax liabilities and verify TDS logs."
      },
      {
        stepNumber: "02",
        title: "Return Compilations",
        desc: "Preparing detailed tax audit disclosures, Form 3CD, and ITR files for signing."
      },
      {
        stepNumber: "03",
        title: "Filing & Acknowledgement",
        desc: "Submitting direct returns and verifying portals for compliance clearances."
      }
    ],
    timelyCompliance: [
      "Late deposits of TDS attract heavy interest penalties (up to 1.5% per month), and delays in ITR filings trigger automatic fee charges and restrict carry-forward of losses. Staying compliant keeps your corporate ledger clear of arbitrary tax liabilities."
    ],
    faqs: [
      {
        question: "How do you help with faceless income tax assessments?",
        answer: "We review the notice, compile supporting transaction evidence, draft the legal reply, and upload files on the portal under CA Ashish Bhansali's supervision."
      },
      {
        question: "What is the penalty for late filing of TDS returns?",
        answer: "Late filing attracts a fee of ₹200 per day under Section 234E, subject to a maximum of the TDS amount, plus interest on late deposit of tax."
      },
      {
        question: "How does Section 44ADA presumptive tax help doctors and CAs?",
        answer: "Eligible professionals with receipts up to ₹75 Lakhs can declare 50% as taxable income, reducing compliance costs and tax liabilities."
      },
      {
        question: "Can Bhansali Associates help resolve TDS default demands on TRACES?",
        answer: "Yes, we download justification reports, file correction statements, and coordinate with the TDS department to clear default demands."
      },
      {
        question: "What is DTAA and how does it prevent double taxation?",
        answer: "Double Taxation Avoidance Agreements (DTAA) are treaties between India and other nations. They allow NRIs to claim lower Tax Deducted at Source (TDS) rates on interest and capital gains when proper documents are submitted."
      },
      {
        question: "How are corporate capital gains taxed in India?",
        answer: "They are classified as Short-Term or Long-Term based on asset hold times, with specific tax rates and reinvestment exemptions (e.g., Section 54EC)."
      },
      {
        question: "Do you advise on partner salary and interest structures in LLPs?",
        answer: "Yes, we optimize partnership deeds to ensure partner salary and interest deductions are maximized in line with Section 40(b)."
      },
      {
        question: "What is Advance Tax, and who is liable to pay it?",
        answer: "Every taxpayer whose estimated tax liability for the year exceeds ₹10,000 must pay advance tax in four quarterly installments."
      }
    ],
    relatedServiceSlugs: ["audit-assurance", "gst-advisory", "financial-consulting"]
  },
  "virtual-cfo": {
    slug: "virtual-cfo",
    metaTitle: "Virtual CFO Services in Mira Bhayandar | Bhansali Associates",
    metaDescription: "Outsource strategic CFO services, cash flow forecasting, and MIS dashboards under senior CA supervision. Premium Virtual CFO Services in Mira Bhayandar & Mumbai.",
    canonicalUrl: "/services/virtual-cfo",
    ogImage: "/assets/images/services/virtual-cfo.jpg",
    badge: "Virtual CFO",
    title: "Virtual CFO Services in Mira Bhayandar",
    subtitle: "Deploy boardroom-level financial stewardship, predictive cash flow modeling, and structured performance reviews to scale your business safely.",
    overview: [
      "Growing enterprises require high-level financial leadership to scale. Our <a href=\"/services/virtual-cfo\">Virtual CFO Services in Mira Bhayandar</a> deliver strategic guidance, cash velocity planning, and board-level reporting, integrated with <a href=\"/services/business-advisory\">Business Advisory</a> services.",
      "We integrate advanced cash flow forecasting models, establish structured monthly MIS reporting dashboards, and optimize working capital cycles. Our partners actively participate in corporate review cycles, ensuring your growth path is backed by sound financial planning.",
      "We act as your virtual finance team in Thane and Mumbai, handling compliance controls, budget vs. actual audits, and preparing bank-ready financial projections."
    ],
    importance: [
      "A Virtual CFO provides boardroom-level financial intelligence without the high salary overheads of a full-time executive. We establish cash flow visibility, design capital budgets, control expenditures, and manage statutory compliance.",
      "This financial structure prepares your business for venture funding, prevents operational liquidity crises, and ensures that corporate decisions are driven by accurate accounting data."
    ],
    challengesText: [
      "Growing companies often suffer from cash flow gaps, lack of structured MIS reports for board members, and poor working capital controls.",
      "Without a senior CFO to guide financial strategies, businesses can experience rapid burn rates, inventory valuation leaks, and default on debt liabilities."
    ],
    ourApproach: [
      "We deploy a systematic dashboard review system in your office. We compile monthly MIS data, review key performance metrics (KPIs), and model cash flows.",
      "CA Ashish Bhansali acts as your virtual financial officer, attending board meetings and representing your finance department before lenders and stakeholders."
    ],
    benefits: [
      {
        title: "Boardroom Intelligence",
        desc: "Monthly MIS dashboards, KPI analytics, and capital budgeting to support strategic business decisions.",
        iconName: "users"
      },
      {
        title: "Cash Flow Visibility",
        desc: "Predictive rolling cash flow forecasts to manage operating burn rates and unlock liquidity.",
        iconName: "trending"
      },
      {
        title: "Compliance Management",
        desc: "Managing all statutory filing timelines across GST, ROC, and direct taxes under partner CA control.",
        iconName: "shield"
      }
    ],
    features: [
      {
        title: "MIS Reporting & Dashboards",
        desc: "Designing and compiling customized monthly management information systems (MIS) reports for board reviews."
      },
      {
        title: "Cash Flow Forecasting",
        desc: "Deploying weekly and monthly rolling cash flow forecasts to manage working capital allocations."
      },
      {
        title: "Budgeting & Variance Analysis",
        desc: "Formulating annual operating budgets and performing month-on-month variance investigations."
      },
      {
        title: "Working Capital Management",
        desc: "Auditing debtor collections aging, managing supplier credit terms, and optimizing inventory velocity."
      },
      {
        title: "Internal Control Design",
        desc: "Reviewing segregation of duties, voucher approval matrices, and preventing transaction leakages."
      },
      {
        title: "Audit Coordination",
        desc: "Liaising with statutory auditors, resolving audit queries, and ensuring clean audit outputs."
      },
      {
        title: "Capital Structure Advisory",
        desc: "Advising on optimal debt-equity ratios, dividend distributions, and venture funding preparation."
      }
    ],
    whyChoose: [
      "Executive CA-Level Counsel",
      "Scalable Engagement Cost",
      "Data-Driven Growth Support"
    ],
    whyChooseDetail: [
      "Our co-founders bring years of statutory audit and corporate advisory experience directly to your boardroom. We do not use templated automated reports; instead, we customize financial models for your operations.",
      "We act as your long-term financial partner, aligning your operational teams with strict cash flow metrics to prepare your business for scalable expansion."
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "System Assessment & Setup",
        desc: "Reviewing your current accounting software, billing matrices, and compliance logs."
      },
      {
        stepNumber: "02",
        title: "MIS & Control Implementation",
        desc: "Deploying custom reporting structures, cash forecast sheets, and internal approval flows."
      },
      {
        stepNumber: "03",
        title: "Ongoing Strategic Review",
        desc: "Conducting monthly board reviews, auditing variance patterns, and managing compliance timelines."
      }
    ],
    timelyCompliance: [
      "Outsourced CFO oversight ensures that your business never misses tax filing or ROC compliance deadlines. We run a centralized compliance tracker to protect your business from late fees and legal defaults."
    ],
    faqs: [
      {
        question: "What is the difference between a bookkeeper and a Virtual CFO?",
        answer: "A bookkeeper records historical transactions. A Virtual CFO analyzes financial data, designs future budgets, forecasts cash flows, and guides board-level strategic growth."
      },
      {
        question: "How do you coordinate with our existing internal accounts team?",
        answer: "We do not replace your accounts team. We supervise their workflows, review their ledger entries, design internal controls, and elevate their reporting into boardroom MIS dashboards."
      },
      {
        question: "How often does the Virtual CFO visit our office?",
        answer: "Depending on the engagement model, we conduct weekly online reviews and monthly in-person board meetings at your office in Thane, Mumbai, or Mira Bhayandar."
      },
      {
        question: "Can you help our company prepare for venture capital or seed funding?",
        answer: "Yes, we audit your cap table, organize historical financial records, compile bank-ready CMA project projections, and assist during investor diligence audits."
      },
      {
        question: "What key metrics are tracked in your monthly MIS reports?",
        answer: "We track gross margins, EBITDA, working capital cycles (debtor/creditor aging), cash burn rates, customer acquisition costs, and budget-vs-actual variances."
      },
      {
        question: "Do you assist in establishing internal transaction approval controls?",
        answer: "Yes, we design approval matrices for expenses, verify segregation of duties in invoicing, and review bank transaction authorizations."
      },
      {
        question: "What is the fee structure for Virtual CFO services?",
        answer: "We charge a scalable monthly retainer based on the size of your business operations and the complexity of reporting required."
      },
      {
        question: "How do you secure the confidentiality of our financial records?",
        answer: "We sign strict Non-Disclosure Agreements (NDAs) and deploy secure, encrypted cloud data transfer folders to protect all business records."
      }
    ],
    relatedServiceSlugs: ["business-advisory", "financial-consulting", "audit-assurance"]
  },
  "company-registration": {
    slug: "company-registration",
    metaTitle: "Company Registration in Mira Road | LLP & Private Limited | CA Firm",
    metaDescription: "Incorporate LLPs or Private Limited companies and file annual ROC returns. Meticulous Company Registration in Mira Road, Bhayandar & Mumbai under CA partner supervision.",
    canonicalUrl: "/services/company-registration",
    ogImage: "/assets/images/services/company-registration.jpg",
    badge: "ROC Compliance",
    title: "Company Registration & ROC Filing in Mira Road",
    subtitle: "Secure corporate incorporation, LLP setups, annual MCA registry filings, and board compliance registries under expert secretarial oversight.",
    overview: [
      "Operating a compliant corporate entity requires strict MCA compliance. We facilitate <a href=\"/services/company-registration\">Company Registration in Mira Road</a> and manage LLP incorporations and annual ROC return filings, aligning with <a href=\"/services/audit-assurance\">Statutory Audit</a> requirements.",
      "Our corporate secretarial practice ensures that board meeting minutes, director credentials, and statutory registers are meticulously maintained. Led directly by our co-founding partners, we safeguard your company's status and protect against registrar penalties.",
      "We assist startups and family businesses in Thane and Mumbai to transition from partnership desks to structured private limited companies cleanly."
    ],
    importance: [
      "Registering your business as a Private Limited company or LLP provides limited liability protection, separates personal assets from business risks, and makes the entity eligible to raise capital from venture funds.",
      "Maintaining active ROC status through annual filings is critical to avoid director disqualification, keep corporate registry records clear, and prevent bank account freeze actions."
    ],
    challengesText: [
      "Navigating the SPICe+ incorporation forms, obtaining Digital Signatures (DSC), and preparing Memorandum/Articles of Association (MOA/AOA) can be complex for new founders.",
      "Once registered, failing to maintain statutory registers, file annual returns (AOC-4, MGT-7), or report director KYC changes triggers heavy penalties."
    ],
    ourApproach: [
      "We handle the complete company incorporation lifecycle from name approval to PAN/TAN allocation. We compile and file all annual ROC documents.",
      "Co-founder CA Rajani Bhansali manages our secretarial compliance practice, ensuring all filings are submitted accurately in line with MCA guidelines."
    ],
    benefits: [
      {
        title: "Legal Structure Security",
        desc: "Incorporating Private Limited, LLP, One Person Company (OPC) structures with optimized capital clauses.",
        iconName: "shield"
      },
      {
        title: "ROC Filing Compliance",
        desc: "Compiling and filing mandatory annual AOC-4 (financials) and MGT-7 (returns) forms on the MCA portal.",
        iconName: "file-text"
      },
      {
        title: "Secretarial Diligence",
        desc: "Maintaining statutory registers, updating board minutes, and managing share allotment registries cleanly.",
        iconName: "clock"
      }
    ],
    features: [
      {
        title: "Private Limited Incorporation",
        desc: "Drafting AOA/MOA, securing name approvals, and obtaining incorporation certificates on SPICe+."
      },
      {
        title: "LLP Incorporation & Deed Setup",
        desc: "Drafting LLP agreements, filing incorporation forms, and registering partnership setups with the ROC."
      },
      {
        title: "Annual ROC Returns Filing",
        desc: "Preparing and filing Form AOC-4, MGT-7, and director KYC declarations on the MCA portal."
      },
      {
        title: "Director KYC & DIN Mandates",
        desc: "Managing DIN applications, updating DIR-3 KYC records annually, and handling director changes."
      },
      {
        title: "Share Transfers & Allotments",
        desc: "Compiling board resolutions, paying stamp duty, and issuing share certificates cleanly."
      },
      {
        title: "Registered Office Changes",
        desc: "Filing regional address change forms with the ROC, managing inter-state registry transfers."
      },
      {
        title: "LLP Agreement Modifications",
        desc: "Drafting and filing supplementary LLP deeds for partner changes or capital adjustments."
      }
    ],
    whyChoose: [
      "End-to-End Incorporation Support",
      "Pristine Secretarial Maintenance",
      "Direct CA Partner Oversight"
    ],
    whyChooseDetail: [
      "We provide a complete setup experience, securing your company name, registrations, and direct tax codes simultaneously. We ensure that co-founding partners review all corporate deeds.",
      "By maintaining your company logs, board minute records, and share registers to corporate standards, we make your company ready for banking loans and venture investments."
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Name Approval & DSC Setup",
        desc: "Obtaining Digital Signatures (DSC) for directors and securing name approval on the MCA portal."
      },
      {
        stepNumber: "02",
        title: "Incorporation Filing",
        desc: "Drafting MOA/AOA, filing SPICe+ forms, and obtaining Certificate of Incorporation (COI)."
      },
      {
        stepNumber: "03",
        title: "Post-Incorporation Setup",
        desc: "Opening corporate bank accounts, allocating share capital, and filing Commencement of Business (INC-20A)."
      }
    ],
    timelyCompliance: [
      "Delaying the Commencement of Business filing (INC-20A) beyond 180 days results in heavy fines and can lead to the removal of the company's name from the registry. Prompt filings protect your corporate entity from early legal closures."
    ],
    faqs: [
      {
        question: "What documents are required to register a Private Limited company?",
        answer: "We need PAN cards, Aadhaar cards, passport photos of directors, and utility bills with NOC from the owner for the registered office address."
      },
      {
        question: "What is the cost and timeframe for registering an LLP in Mumbai?",
        answer: "LLP incorporation typically takes 10 to 15 business days, depending on name approvals and ROC processing speeds. Costs vary based on authorized capital."
      },
      {
        question: "What is INC-20A, and why is it mandatory?",
        answer: "INC-20A is the declaration of Commencement of Business that must be filed within 180 days of incorporation, proving that shareholders have paid their capital."
      },
      {
        question: "How do you help with annual ROC filing compliance?",
        answer: "We audit your financial statements, compile Form AOC-4 (financials) and Form MGT-7 (annual return), and file them on the MCA portal."
      },
      {
        question: "What is a DIN and how is it obtained?",
        answer: "Director Identification Number (DIN) is a unique number allotted by the MCA to individuals acting as directors. We apply for it within the SPICe+ form."
      },
      {
        question: "What happens if a director fails to file DIR-3 KYC?",
        answer: "If the DIR-3 KYC is not filed annually by September 30, the DIN is deactivated, and a late reactivation fee of ₹5,000 is levied by the MCA."
      },
      {
        question: "Can an NRI be a director in an Indian Private Limited company?",
        answer: "Yes, an NRI can be a director, provided there is at least one resident director who stays in India for more than 182 days in the calendar year."
      },
      {
        question: "What is a secretarial audit, and when is it required?",
        answer: "A secretarial audit evaluates compliance with corporate laws, mandatory for listed companies and larger public companies. We review secretarial registers."
      }
    ],
    relatedServiceSlugs: ["audit-assurance", "virtual-cfo", "income-tax"]
  },
  "business-advisory": {
    slug: "business-advisory",
    metaTitle: "Business Advisory in Mira Bhayandar | Corporate CA Firm",
    metaDescription: "Optimize corporate structuring, manage operational risks, and design long-term growth strategies. Strategic Business Advisory in Mira Bhayandar & Mumbai.",
    canonicalUrl: "/services/business-advisory",
    ogImage: "/assets/images/services/business-advisory.jpg",
    badge: "Business Advisory",
    title: "Business Advisory & Growth Strategy in Mira Bhayandar",
    subtitle: "Optimize corporate structuring, manage operational risks, and design long-term growth strategies to scale your enterprise.",
    overview: [
      "Navigating complex market dynamics requires strategic foresight. At Bhansali Associates, we provide <a href=\"/services/business-advisory\">Business Advisory in Mira Bhayandar</a> to help companies optimize corporate structures, manage risk, and secure capital alongside <a href=\"/services/financial-consulting\">Financial Consulting</a>.",
      "Our advisory team combines deep financial insight with operational strategy. We evaluate your business models, establish corporate governance frameworks, and design long-term scaling strategies under senior partner guidance.",
      "We support family businesses, manufacturing firms, and startups in Thane and Mumbai to streamline their operations and manage financial risks."
    ],
    importance: [
      "Strategic business advisory helps founders structure their corporate entities for optimal taxation and asset protection. It establishes sound internal control frameworks, identifies operational cash drains, and designs clear growth metrics.",
      "By aligning financial objectives with operational execution, we help companies improve margins, secure working capital loans, and build sustainable business value."
    ],
    challengesText: [
      "Businesses often struggle with inefficient corporate structures, lack of internal audit controls, and poor working capital management.",
      "Without professional CA advisory, companies can experience cash flow leaks, compliance gaps, and structural inefficiencies that hinder scalability."
    ],
    ourApproach: [
      "We perform a thorough evaluation of your company's operational ledgers and management metrics. We identify structural leaks and recommend entity setups.",
      "Senior co-founders CA Ashish Bhansali and CA Rajani Bhansali direct all advisory programs, ensuring that your corporate growth plans are backed by senior audit and tax expertise."
    ],
    benefits: [
      {
        title: "Structural Optimization",
        desc: "Designing business entity holdings, partner salary deeds, and asset protection setups.",
        iconName: "settings"
      },
      {
        title: "Risk Containment",
        desc: "Auditing operational transactions, internal control workflows, and compliance exposure.",
        iconName: "shield"
      },
      {
        title: "Cash Flow Acceleration",
        desc: "Analyzing cash velocity cycles, credit guidelines, and inventory turnover schedules.",
        iconName: "trending"
      }
    ],
    features: [
      {
        title: "Entity Structuring & Setup",
        desc: "Advising on optimal business holding structures (LLP, Private Limited, Subsidiary) to protect assets."
      },
      {
        title: "Working Capital Audits",
        desc: "Reviewing receivables collection processes, inventory turn rates, and supplier payment cycles."
      },
      {
        title: "Corporate Governance Reviews",
        desc: "Establishing internal authorization policies, board structures, and compliance control guides."
      },
      {
        title: "Transaction Risk Analysis",
        desc: "Auditing large contracts, joint development agreements, and assessing tax liabilities."
      },
      {
        title: "Operational Cost Audits",
        desc: "Analyzing cost center allocations, identifying overhead variances, and advising on cost reductions."
      },
      {
        title: "JV & Partnership Advisory",
        desc: "Drafting clear financial clauses for joint ventures, partner deed setups, and equity distributions."
      },
      {
        title: "Feasibility Studies",
        desc: "Evaluating new project feasibility, compiling bank-ready financial projections, and checking returns."
      }
    ],
    whyChoose: [
      "Strategic CA-led Counsel",
      "Focus on Risk Containment",
      "Long-Term Partnership Value"
    ],
    whyChooseDetail: [
      "We bring direct statutory audit and direct tax representational experience to our business advisory services. We do not use general consulting templates; we focus on the compliance and cash realities of your business.",
      "Our partners collaborate directly with your management team, helping you build a compliant and creditworthy enterprise that is ready to scale."
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Business Assessment",
        desc: "Reviewing your corporate structure, balance sheet health, and key operational processes."
      },
      {
        stepNumber: "02",
        title: "Strategy Formulation",
        desc: "Designing restructuring plans, cost control metrics, and internal control guidelines."
      },
      {
        stepNumber: "03",
        title: "Review & Monitoring",
        desc: "Conducting quarterly audits to monitor operational progress and ensure compliance security."
      }
    ],
    timelyCompliance: [
      "Proactive structural reviews prevent regulatory disputes and ensure that your company's registrations, direct taxes, and GST returns are aligned with current laws, mitigating risk early."
    ],
    faqs: [
      {
        question: "What does your Business Advisory service cover?",
        answer: "We cover corporate entity structuring, working capital cycle optimization, internal control reviews, transaction risk analysis, and partner deed consulting."
      },
      {
        question: "How do you help family-owned businesses structure their assets?",
        answer: "We advise on family settlement deeds, transition of shares, setting up LLPs for holdings, and tax-optimized asset transfer structures."
      },
      {
        question: "What is a Working Capital Audit, and how does it help?",
        answer: "It evaluates cash cycles, matching debtor collect timelines with creditor payables, helping you unlock cash tied up in inventory and unpaid bills."
      },
      {
        question: "Can you help resolve financial disputes between business partners?",
        answer: "Yes, we act as objective financial auditors, reviewing partnership deeds, verifying ledger balances, and calculating fair equity exits."
      },
      {
        question: "How does corporate governance protect private companies?",
        answer: "It establishes clear approval matrices, limits director liabilities, and builds investor confidence during capital raise dilutes."
      },
      {
        question: "Do you assist in drafting joint venture financial clauses?",
        answer: "Yes, we structure funding timelines, calculate profit distributions, design tax-compliant exit paths, and evaluate transaction risk."
      },
      {
        question: "What is your approach to analyzing cost efficiency?",
        answer: "We review cost center records, check budget vs. actual variances, evaluate vendor cost agreements, and identify operating leaks."
      },
      {
        question: "How often do you review our company's progress?",
        answer: "We typically conduct quarterly review meetings with management to assess financial results, verify compliance, and track strategy execution."
      }
    ],
    relatedServiceSlugs: ["virtual-cfo", "financial-consulting", "company-registration"]
  },
  "financial-consulting": {
    slug: "financial-consulting",
    metaTitle: "Financial Consulting & Loan Syndication in Mira Road | CA Firm",
    metaDescription: "Structure bank loan applications, compile CMA projections, and syndicate corporate debt. Expert Financial Consulting in Mira Road, Bhayandar & Mumbai.",
    canonicalUrl: "/services/financial-consulting",
    ogImage: "/assets/images/services/financial-consulting.jpg",
    badge: "Financial Consulting",
    title: "Financial Consulting & Loan Syndication in Mira Road",
    subtitle: "Structure institutional bank loan applications, compile Credit Monitoring Arrangement (CMA) projections, and syndicate corporate debt.",
    overview: [
      "Securing credit capital demands a highly professional, bank-ready presentation. At Bhansali Associates, we specialize in <a href=\"/services/financial-consulting\">Financial Consulting in Mira Road</a>, compiling detailed CMA projections to secure bank term loans and <a href=\"/services/virtual-cfo\">Virtual CFO</a> drawing power.",
      "Our team acts as your strategic representative before banking underwriters. Led by senior chartered accountant partners, we align your borrowing files with standard lending norms to optimize capital syndication timelines.",
      "We prepare project feasibility files, debt restructuring plans, and CMA data logs for enterprises in Thane, Mumbai, and Mira Bhayandar."
    ],
    importance: [
      "Institutional lenders require meticulous financial statements and Credit Monitoring Arrangement (CMA) projections to evaluate loan eligibility. An unstructured file or incorrect projection will result in immediate loan rejection.",
      "Expert financial consulting ensures that your debt applications are structured with realistic cost parameters, verified assets, and compliant debt-service coverage ratios (DSCR), securing capital at optimal interest rates."
    ],
    challengesText: [
      "Companies often face loan delays due to inaccurate CMA projections, poor debt-service coverage ratios, and unstructured business proposals.",
      "Without professional CA alignment, debt applications can fail to meet banking underwriting standards, stalling expansion plans."
    ],
    ourApproach: [
      "We analyze your historical audited balance sheets, model future sales growth, and compile detailed CMA data logs in accordance with banking norms.",
      "CA Ashish Bhansali represents your borrowing proposals, liaising directly with bank underwriters and credit departments to ensure immediate query resolution."
    ],
    benefits: [
      {
        title: "Capital Delivery Security",
        desc: "Compiling bank-ready CMA profiles, cash flow projections, and credit risk evaluations.",
        iconName: "trending"
      },
      {
        title: "Optimal Debt Terms",
        desc: "Negotiating credit terms, interest rates, and loan structures with public and private underwriters.",
        iconName: "shield"
      },
      {
        title: "Diligence Preparation",
        desc: "Preparing all documentation, property valuations, and net-worth certificates required for loan approvals.",
        iconName: "file-text"
      }
    ],
    features: [
      {
        title: "CMA Projections Compilation",
        desc: "Compiling Credit Monitoring Arrangement (CMA) data profiles with detailed financial projections."
      },
      {
        title: "Working Capital Finance Setup",
        desc: "Structuring Cash Credit (CC) limits, Overdraft (OD) setups, and letter of credit lines with banks."
      },
      {
        title: "Project Term Loan Syndication",
        desc: "Syndicating long-term finance for plant setups, commercial real estate acquisition, and medical equipment."
      },
      {
        title: "Business Proposal Design",
        desc: "Drafting project feasibility reports, market potential profiles, and loan application files."
      },
      {
        title: "Debt Restructuring Advisory",
        desc: "Advising on loan restructuring, repayment scheduling, and improving debt ratios."
      },
      {
        title: "Net-Worth Certifications",
        desc: "Issuing CA-certified net-worth dossiers and property asset evaluations for loan guarantors."
      },
      {
        title: "Banking Underwriting Liaison",
        desc: "Representing borrowing files before credit committees and addressing credit officer queries."
      }
    ],
    whyChoose: [
      "Bank-Ready CMA Compilation",
      "Direct Credit Liaison Support",
      "Pristine Regulatory Compliance"
    ],
    whyChooseDetail: [
      "We possess deep understanding of banking credit appraisal processes. We do not use speculative growth numbers; our partners construct CMA logs based on verifiable business data and compliance checks.",
      "By managing your debt files directly, we ensure that your cash flows are aligned to support loan repayments, safeguarding your corporate credit rating."
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Financial Auditing & Review",
        desc: "Evaluating historical financial records, existing debt logs, and loan requirements."
      },
      {
        stepNumber: "02",
        title: "CMA & Proposal Drafting",
        desc: "Compiling financial projections, cash flow statements, and designing the business dossier."
      },
      {
        stepNumber: "03",
        title: "Bank Submission & Liaison",
        desc: "Submitting the file, responding to underwriter queries, and coordinating loan disbursement steps."
      }
    ],
    timelyCompliance: [
      "Keeping your direct taxes, GST returns, and ROC registrations updated is mandatory for bank loan clearances. Lenders check your compliance status on the MCA portal prior to disbursing capital."
    ],
    faqs: [
      {
        question: "What is a CMA Data Report, and why do banks require it?",
        answer: "Credit Monitoring Arrangement (CMA) data represents your company's past and projected financial performance. It helps bank underwriters assess your working capital needs and repayment capacity."
      },
      {
        question: "What is DSCR, and why is it important in project finance?",
        answer: "Debt Service Coverage Ratio (DSCR) measures your operating cash flows against your loan principal and interest liabilities. A DSCR above 1.25 is typically required for loan clearance."
      },
      {
        question: "Do you syndicate construction finance for builders in Thane?",
        answer: "Yes, we compile CMA project profiles, check RERA escrow accounts compliance, and syndicate term loans for commercial and residential developments."
      },
      {
        question: "How does Bhansali Associates help resolve bank credit queries?",
        answer: "Our co-founder CA Ashish Bhansali represents your case, coordinates directly with the bank credit officers, and provides verified clarifications immediately."
      },
      {
        question: "What is the difference between Cash Credit (CC) and Overdraft (OD)?",
        answer: "Cash Credit is a borrowing facility secured against inventory and receivables. Overdraft is secured against fixed assets, deposits, or properties."
      },
      {
        question: "Do you issue CA certified net-worth reports for visa or loan purposes?",
        answer: "Yes, we verify your assets, bank balances, and tax filings to issue certified net-worth reports and Form 15CB clearances."
      },
      {
        question: "Can you help our company refinance existing high-interest loans?",
        answer: "Yes, we evaluate balance sheets, design debt consolidation models, and coordinate with new banks for balance transfers at lower rates."
      },
      {
        question: "What documents are required to initiate a project loan consultation?",
        answer: "We require 3 years of audited balance sheets, current GST return logs, details of existing loans, and your proposed project cost estimate."
      }
    ],
    relatedServiceSlugs: ["virtual-cfo", "business-advisory", "audit-assurance"]
  }
};

export const SERVICES_DETAIL_DATA = new Proxy(rawData, {
  get(target, prop) {
    if (typeof prop === "string") {
      let resolvedProp = prop;
      // Handle mapping standard aliases
      if (prop === "gst") resolvedProp = "gst-advisory";
      if (prop === "audit") resolvedProp = "audit-assurance";
      if (prop === "tax") resolvedProp = "income-tax";
      if (prop === "cfo") resolvedProp = "virtual-cfo";
      if (prop === "roc") resolvedProp = "company-registration";
      if (prop === "consulting" || prop === "project-finance" || prop === "debt-syndication") resolvedProp = "financial-consulting";

      // If resolvedProp is not in allowedSlugs, we check if the user is visiting it directly
      const allowedSlugs = ["gst", "gst-advisory", "audit", "audit-assurance", "tax", "income-tax", "cfo", "virtual-cfo", "roc", "company-registration", "business-advisory", "financial-consulting"];
      if (!allowedSlugs.includes(resolvedProp)) {
        if (typeof window !== "undefined") {
          const path = window.location.pathname.toLowerCase().replace(/\/$/, "");
          if (path === `/services/${resolvedProp}` || path === `/services/${prop.toLowerCase()}`) {
            return undefined;
          }
        }
      }
      return target[resolvedProp];
    }
    return Reflect.get(target, prop);
  }
});
