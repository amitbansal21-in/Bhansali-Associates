export interface LegalSection {
  id: string;
  title: string;
  content: string;
}

export interface LegalPageData {
  title: string;
  badge: string;
  subtitle: string;
  lastUpdated: string;
  metaTitle: string;
  metaDescription: string;
  sections: LegalSection[];
}

export const LEGAL_DATA: Record<string, LegalPageData> = {
  privacy: {
    title: "Privacy Policy",
    badge: "Privacy",
    subtitle: "Bhansali Associates is committed to protecting your personal information and statutory compliance records. This policy describes how we collect, use, and secure your data.",
    lastUpdated: "June 15, 2026",
    metaTitle: "Privacy Policy | Bhansali Associates",
    metaDescription: "Read the Privacy Policy of Bhansali Associates. Learn how we collect, manage, and safeguard your corporate financial files and personal compliance data.",
    sections: [
      {
        id: "information-collection",
        title: "Information Collection",
        content: `
          <p>We collect information directly from you when you engage our professional services, register on our platforms, subscribe to our insights, or submit forms via our website. The categories of information we collect include:</p>
          <ul>
            <li><strong>Client Identifier Data:</strong> Full name, corporate email address, contact numbers, and professional designations.</li>
            <li><strong>Entity Metadata:</strong> Company name, incorporation details, registered office address, and registration credentials (such as GSTIN and PAN).</li>
            <li><strong>Statutory Datasets:</strong> Financial ledgers, transaction records, tax assessments, board resolutions, and other disclosures required to perform auditing and compliance.</li>
          </ul>
        `
      },
      {
        id: "personal-information",
        title: "Personal Information",
        content: `
          <p>We process your personal and entity information for specific professional purposes. Specifically, we utilize your information to:</p>
          <ul>
            <li>Perform statutory audit, tax planning, and ROC secretarial compliance engagements in accordance with professional standards.</li>
            <li>Manage your client relationship account and provide partner-led advisory support.</li>
            <li>Respond to your technical queries, consultation requests, and customer support tickets.</li>
            <li>Distribute regulatory updates, statutory newsletters, and insights publications if you have opted in to receive them.</li>
          </ul>
        `
      },
      {
        id: "cookies",
        title: "Cookies",
        content: `
          <p>Our website utilizes cookies and similar tracking identifiers to distinguish you from other users. This helps us provide a premium, smooth browsing experience and allows us to continuously optimize our user interfaces. Cookies are small alphanumeric files stored on your device's browser directory.</p>
          <p>We use both session cookies (which expire when you close your web browser) and persistent cookies (which remain on your device until deleted) to maintain responsive layouts and active state parameters. For detailed information on our cookie usage, please refer to our dedicated <a href="/cookie-policy">Cookie Policy</a>.</p>
        `
      },
      {
        id: "analytics",
        title: "Analytics",
        content: `
          <p>We employ website analytics services to monitor visitor traffic patterns, geographic locations, and page interaction metrics. This analytics data is compiled collectively and anonymized, meaning it cannot be used to identify any individual user. We use this critical intelligence to identify which services receive the most interaction and to enhance site performance, eliminating layout latency or Cumulative Layout Shifts (CLS).</p>
        `
      },
      {
        id: "third-party-services",
        title: "Third Party Services",
        content: `
          <p>We do not sell, trade, or transfer your personal or entity datasets to outside commercial brokers. We may share information with trusted third-party service providers who assist us in operating our website or conducting our business, subject to strict confidentiality agreements. In addition, to fulfill statutory mandates, we may submit necessary tax and filing details to authorized government portals, including:</p>
          <ul>
            <li>The Income Tax Department (Government of India) for corporate assessments.</li>
            <li>The Goods and Services Tax Network (GSTN) for ITC reconciliations and compliance.</li>
            <li>The Ministry of Corporate Affairs (MCA) and Registrar of Companies (ROC) for incorporation and compliance.</li>
          </ul>
        `
      },
      {
        id: "data-security",
        title: "Data Security",
        content: `
          <p>We implement rigorous technical and administrative security measures to protect the confidentiality of your financial data and personal records. All data transfers across our networks are protected using Secure Sockets Layer (SSL) encryption protocol. Furthermore, access to sensitive client files is strictly restricted, allowing only authorized partner accountants and designated counsel access to your ledgers.</p>
          <p>Please note, however, that no method of transmission over the internet or system of electronic storage can be guaranteed to be 100% secure. While we apply institutional-grade safeguards, we cannot guarantee absolute security.</p>
        `
      },
      {
        id: "user-rights",
        title: "User Rights",
        content: `
          <p>Under applicable data protection frameworks, you have specific rights regarding your personal data. You are entitled to:</p>
          <ul>
            <li>Request access to the personal or entity data we hold about you.</li>
            <li>Request rectification or correction of inaccurate, outdated, or incomplete compliance records.</li>
            <li>Request erasure of your personal data from our active marketing databases, subject to our statutory record-keeping obligations.</li>
            <li>Withdraw consent at any time where we rely on your consent to process information (such as for newsletter subscriptions).</li>
          </ul>
        `
      },
      {
        id: "data-retention",
        title: "Data Retention",
        content: `
          <p>We retain your personal and entity compliance data only for as long as necessary to fulfill the purposes outlined in this policy and to satisfy our statutory, legal, and professional auditing obligations.</p>
          <p>In accordance with the guidelines established by the Institute of Chartered Accountants of India (ICAI) and relevant tax legislation, audit working papers, tax records, and official filing logs are retained for a minimum mandatory period of eight (8) years from the end of the relevant assessment year, after which they are securely archived or destroyed.</p>
        `
      },
      {
        id: "contact-details",
        title: "Contact Details",
        content: `
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy, our data processing practices, or your user rights, please write to our privacy officer at:</p>
          <p>
            <strong>Bhansali Associates</strong><br>
            Attn: Compliance &amp; Privacy Officer<br>
            Email: <a href="mailto:bhansaliassociates99@gmail.com">bhansaliassociates99@gmail.com</a><br>
            Phone: <a href="tel:8369123198">8369123198</a> / <a href="tel:8689812481">8689812481</a>
          </p>
        `
      }
    ]
  },
  terms: {
    title: "Terms & Conditions",
    badge: "Terms",
    subtitle: "Please read these terms and conditions carefully before engaging our professional services or accessing our advisory platform.",
    lastUpdated: "June 15, 2026",
    metaTitle: "Terms & Conditions | Bhansali Associates",
    metaDescription: "Read the Terms & Conditions of Bhansali Associates. Understand the terms of service, client responsibilities, and legal framework governing our engagements.",
    sections: [
      {
        id: "acceptance-of-terms",
        title: "Acceptance of Terms",
        content: `
          <p>By accessing this website, subscribing to our publications, or engaging the services of Bhansali Associates, you agree to be bound by these Terms &amp; Conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
          <p>If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable intellectual property law.</p>
        `
      },
      {
        id: "services",
        title: "Services",
        content: `
          <p>Bhansali Associates provides professional chartered accountancy, corporate secretarial, and business advisory services. The scope of any engagement is strictly defined in a separate written Engagement Letter signed by an authorized partner of the firm and the client.</p>
          <p>No advice or information obtained by you from this website shall create any warranty or contractual obligations not expressly stated in such an Engagement Letter. We reserve the right to modify or withdraw services described on this website at any time without notice.</p>
        `
      },
      {
        id: "user-responsibilities",
        title: "User Responsibilities",
        content: `
          <p>Clients and website users agree to act in good faith and provide accurate, complete, and timely information when requested. Specifically, you agree:</p>
          <ul>
            <li>To compile and deliver complete financial records, bank statements, invoices, and vouchers necessary for us to perform audit or tax filings within agreed timelines.</li>
            <li>That you are solely responsible for the accuracy and authenticity of the records, documents, and representations provided to us.</li>
            <li>Not to use this website or our service channels for any unlawful, fraudulent, or malicious purpose.</li>
          </ul>
        `
      },
      {
        id: "intellectual-property",
        title: "Intellectual Property",
        content: `
          <p>All content, branding, logos, graphics, custom calculators, templates, and text presented on this website are the intellectual property of Bhansali Associates and are protected by copyright, trademark, and other proprietary laws. You may read, print, or download materials for your own personal, non-commercial educational use.</p>
          <p>You must not republish, distribute, sell, modify, or create derivative works from any material found on this website without obtaining prior written consent from our senior partners.</p>
        `
      },
      {
        id: "limitation-of-liability",
        title: "Limitation of Liability",
        content: `
          <p>In no event shall Bhansali Associates or its partners, associates, or employees be liable for any damages (including, without limitation, damages for loss of data, lost profits, or business interruption) arising out of the use or inability to use the materials on this website, even if notified orally or in writing of the possibility of such damage.</p>
          <p>For contracted professional engagements, our liability is strictly limited as set forth in the signed Engagement Letter, and in no event shall it exceed the professional fees paid to us for the specific engagement giving rise to the claim.</p>
        `
      },
      {
        id: "governing-law",
        title: "Governing Law",
        content: `
          <p>These Terms &amp; Conditions, and any claim or dispute arising out of or in connection with them or the use of this website, shall be governed by and construed in accordance with the laws of India.</p>
          <p>You agree that any legal action or proceeding arising out of these terms shall be brought exclusively in the courts of competent jurisdiction located in Mumbai, Maharashtra, India.</p>
        `
      },
      {
        id: "contact",
        title: "Contact",
        content: `
          <p>If you have any questions or require clarification regarding these Terms &amp; Conditions, please contact us at:</p>
          <p>
            <strong>Bhansali Associates</strong><br>
            Email: <a href="mailto:bhansaliassociates99@gmail.com">bhansaliassociates99@gmail.com</a><br>
            Phone: <a href="tel:8369123198">8369123198</a> / <a href="tel:8689812481">8689812481</a>
          </p>
        `
      }
    ]
  },
  disclaimer: {
    title: "Disclaimer",
    badge: "Disclaimer",
    subtitle: "Important legal limitations regarding the advisory and statutory information provided on this website.",
    lastUpdated: "June 15, 2026",
    metaTitle: "Legal Disclaimer | Bhansali Associates",
    metaDescription: "Read the Legal Disclaimer of Bhansali Associates. Learn about the scope of information, professional advice limitations, and financial disclosures on our site.",
    sections: [
      {
        id: "professional-advice-disclaimer",
        title: "Professional Advice Disclaimer",
        content: `
          <p>The information contained on this website is for general educational and informational purposes only. It is not intended to, and does not, constitute professional, legal, tax, financial, or auditing advice.</p>
          <p>Accessing, reading, or interacting with this website, its publications, or forms does not create a professional chartered accountant-client relationship between you and Bhansali Associates. You should not act or rely upon any information on this site without seeking the advice of a qualified professional who is familiar with your specific financial circumstances.</p>
        `
      },
      {
        id: "accuracy-disclaimer",
        title: "Accuracy Disclaimer",
        content: `
          <p>While we make reasonable efforts to compile accurate and up-to-date information on this website, tax laws, regulatory compliance procedures, and judicial rulings change rapidly. All content, articles, and calculators on this website are provided "as is" and "as available" without warranties of any kind, either express or implied.</p>
          <p>Bhansali Associates makes no representations or warranties regarding the completeness, accuracy, reliability, suitability, or availability of the information, services, or related graphics contained on the website for any purpose.</p>
        `
      },
      {
        id: "external-links-disclaimer",
        title: "External Links Disclaimer",
        content: `
          <p>Through this website, you may be able to link to other websites that are not under the control of Bhansali Associates. These links are provided solely for your convenience and reference. We have no control over the nature, content, security, and availability of those sites.</p>
          <p>The inclusion of any external links does not imply a recommendation or endorse the views expressed within them. We assume no responsibility or liability for any content, advertising, products, or other materials on or available from such external websites.</p>
        `
      },
      {
        id: "financial-tax-disclaimer",
        title: "Financial & Tax Disclaimer",
        content: `
          <p>Any tax planning guidelines, corporate structures, or financial case studies published on our insights pages represent generic educational analysis. Because tax planning is highly dependent on factual nuances, local regulations, and corporate structures, you must obtain a formal, partner-signed tax opinion from qualified advisors before implementing any strategies described on this site.</p>
        `
      },
      {
        id: "limitation-of-responsibility",
        title: "Limitation of Responsibility",
        content: `
          <p>Bhansali Associates, its partners, and employees will not be held responsible or liable for any loss, damage, or expense (including, without limitation, direct, indirect, special, consequential, or incidental loss or damage) arising from the use of, or reliance on, the information on this website or any websites linked to it.</p>
        `
      }
    ]
  },
  cookie: {
    title: "Cookie Policy",
    badge: "Cookies",
    subtitle: "How Bhansali Associates uses cookies and browser storage to optimize your browsing experience and analyze site traffic.",
    lastUpdated: "June 15, 2026",
    metaTitle: "Cookie Policy | Bhansali Associates",
    metaDescription: "Read the Cookie Policy of Bhansali Associates. Understand how we use cookies, tracking technologies, and how you can manage browser preferences.",
    sections: [
      {
        id: "essential-cookies",
        title: "Essential Cookies",
        content: `
          <p>Essential cookies are strictly necessary for the core operations of our website. They enable basic security settings, allow smooth routing navigation between pages, and maintain your interface layout preferences as you move through our site. Without these cookies, basic parts of our website cannot function correctly.</p>
          <p>These cookies do not gather any marketing information about you and are automatically deleted when your browser session terminates.</p>
        `
      },
      {
        id: "analytics-cookies",
        title: "Analytics Cookies",
        content: `
          <p>We use analytics cookies to collect information about how visitors interact with our website. This includes tracking which pages are visited most frequently, how much time is spent on each page, and whether visitors encounter any error messages.</p>
          <p>The data collected by these cookies is aggregated and completely anonymized. We use it solely to improve our website's structure, refine our content, and optimize page load speeds. We do not use this data for targeted commercial advertising.</p>
        `
      },
      {
        id: "preference-cookies",
        title: "Preference Cookies",
        content: `
          <p>Preference cookies allow our website to remember choices you make (such as your preferred language, text sizing, or default filters) to provide a more personalized, premium user experience. These cookies can be set by us or by third-party providers whose services we have integrated into our pages.</p>
        `
      },
      {
        id: "managing-cookies",
        title: "Managing Cookies",
        content: `
          <p>Most modern web browsers are set to accept cookies by default. However, you can choose to configure your browser settings to reject cookies or to alert you when cookies are being sent to your device. Please consult your browser's "Help" or "Settings" menu to learn how to manage cookie parameters.</p>
          <p>Please note that if you choose to disable or block all cookies (including essential cookies), you may lose access to some of the features or interactive tools available on our website, and some layouts may not render with optimal responsiveness.</p>
        `
      }
    ]
  }
};
