import React, { useState } from "react";
import { SITE_CONFIG } from "../constants/config";
import { PageBanner } from "../components/PageBanner";
import { PageContainer } from "../components/PageContainer";
import { SectionHeader } from "../components/SectionHeader";
import "./Contact.css";

export const Contact: React.FC = () => {
  const origin = typeof window !== "undefined" ? window.location.origin : "";

  React.useEffect(() => {
    const prevTitle = document.title;
    document.title = "Contact CA Firm in Mira Road | Bhansali Associates Office";

    const descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta?.getAttribute("content") || "";
    const pageDesc = "Get in touch with Bhansali Associates, Chartered Accountants in Mira Road, Bhayandar, & Mumbai. Schedule a private financial audit or tax consultation.";
    if (descMeta) {
      descMeta.setAttribute("content", pageDesc);
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink?.getAttribute("href") || "";
    if (canonicalLink) {
      canonicalLink.setAttribute("href", window.location.origin + "/contact");
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Contact CA Firm in Mira Road | Bhansali Associates Office");
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", pageDesc);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", window.location.origin + "/contact");

    return () => {
      document.title = prevTitle;
      if (descMeta) descMeta.setAttribute("content", prevDesc);
      if (canonicalLink) canonicalLink.setAttribute("href", prevCanonical);
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Contact Us" }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${origin}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact Us",
        "item": `${origin}/contact`
      }
    ]
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error dynamically when typing
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required.";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required.";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    
    if (!formData.service) {
      newErrors.service = "Please select a service domain.";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message details are required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Clean dynamic WhatsApp number from configuration
      const rawWhatsApp = SITE_CONFIG.contactWhatsApp || "8369123198";
      const cleanWhatsApp = rawWhatsApp.replace(/[^0-9]/g, "");
      // If it's a 10 digit number (standard Indian mobile format), prefix 91 country code
      const targetWhatsApp = cleanWhatsApp.length === 10 ? `91${cleanWhatsApp}` : cleanWhatsApp;

      // Map service values to user-friendly titles
      const serviceLabels: Record<string, string> = {
        audit: "Statutory Audit & Assurance",
        gst: "GST Advisory & Compliance",
        tax: "Direct Corporate Tax Planning",
        roc: "ROC & Company Incorporation",
        cfo: "Virtual CFO Advisory Support",
        consulting: "Bank Syndications & Capital CMA"
      };
      
      const selectedService = serviceLabels[formData.service] || formData.service;

      // Format Submission Date and Time in standard Indian Local format
      const now = new Date();
      const submissionDate = now.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      });
      const submissionTime = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      });

      // Construct WhatsApp message template exactly as requested
      const messageText = `New Website Enquiry

Name:
${formData.name.trim()}

Phone:
${formData.phone.trim()}

Email:
${formData.email.trim()}

Service:
${selectedService}

Message:
${formData.message.trim()}

Submitted from:
Bhansali Associates Website (Contact Page)

Date:
${submissionDate}

Time:
${submissionTime}`;

      // URL encode the message text safely to prevent any injection or URL breakage
      const encodedMessage = encodeURIComponent(messageText);
      const whatsAppUrl = `https://wa.me/${targetWhatsApp}?text=${encodedMessage}`;

      // Open in a new tab securely
      window.open(whatsAppUrl, "_blank", "noopener,noreferrer");

      // Render the existing success banner and clear the form inputs
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    }
  };

  return (
    <main id="main-content" className="contact-page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* 1. Page Banner Section */}
      <PageBanner
        theme="dark"
        badge="Contact Us"
        title="Partner-Led Advisory Desk"
        subtitle="Schedule a private financial advisory, tax planning, or audit consultation with CA Ashish Bhansali."
        breadcrumbs={breadcrumbs}
        backgroundPattern={true}
      />

      {/* 2. Contact Information & Methods Section */}
      <PageContainer size="default" padding="comfortable" className="contact-methods-section">
        <SectionHeader
          align="center"
          eyebrow="GET IN TOUCH"
          title="Direct Communication Channels"
          description="Speak directly with our partners to discuss your company's statutory filings, internal audit programs, and capital syndications."
          divider={true}
        />

        <div className="contact-grid">
          {/* Method 1: Office Address */}
          <article className="contact-info-card">
            <div className="contact-info-icon-wrapper" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 className="contact-info-card-title">Corporate Office</h3>
            <address className="contact-info-address-text">
              {SITE_CONFIG.officeAddress}
            </address>
          </article>

          {/* Method 2: Advisory Phone */}
          <article className="contact-info-card">
            <div className="contact-info-icon-wrapper" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3 className="contact-info-card-title">Direct Telephone</h3>
            <p className="contact-info-text-item">
              <a href={`tel:${SITE_CONFIG.contactPhone?.replace(/\s+/g, '')}`} className="contact-page-link">
                {SITE_CONFIG.contactPhone}
              </a>
            </p>
          </article>

          {/* Method 3: Direct Email */}
          <article className="contact-info-card">
            <div className="contact-info-icon-wrapper" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3 className="contact-info-card-title">Partnership Desk</h3>
            <p className="contact-info-text-item">
              <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="contact-page-link">
                {SITE_CONFIG.contactEmail}
              </a>
            </p>
          </article>

          {/* Method 4: Business Hours */}
          <article className="contact-info-card">
            <div className="contact-info-icon-wrapper" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 className="contact-info-card-title">Office Hours</h3>
            <p className="contact-info-text-item">
              {SITE_CONFIG.officeHours}
            </p>
          </article>
        </div>
      </PageContainer>

      {/* 3. Interactive Google Map & Layout */}
      <PageContainer size="default" padding="compact" className="contact-map-section">
        <div className="map-placeholder-box">
          <iframe
            src="https://maps.google.com/maps?q=19.290009785651783,72.85030021965089&z=17&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="Ratna Heights Planetaria Complex Location Map"
          ></iframe>
        </div>
      </PageContainer>

      {/* 4. Consultation Form Section */}
      <PageContainer size="narrow" padding="comfortable" className="contact-form-section" id="inquiry-form-container">
        <SectionHeader
          align="center"
          eyebrow="INQUIRY FORM"
          title="Schedule a Private Engagement Review"
          description="Please complete the private registry questionnaire below. A senior audit or tax partner will follow up within 24 business hours."
          divider={true}
        />

        {isSubmitted ? (
          <div className="form-success-banner" role="alert" aria-live="polite">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="success-icon" aria-hidden="true">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <h3 className="success-banner-title">Thank You</h3>
            <p className="success-banner-desc">Your consultation request has been logged successfully. A principal partner will contact you shortly.</p>
            <button 
              type="button" 
              className="btn btn-primary success-banner-btn"
              onClick={() => setIsSubmitted(false)}
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form className="contact-form-node" onSubmit={handleSubmit} noValidate>
            
            {/* Field 1: Name */}
            <div className="form-group-item">
              <label htmlFor="name" className="form-label-text">
                Full Name <span className="label-required-marker" aria-hidden="true">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`form-input-node ${errors.name ? "is-invalid" : ""}`}
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error-msg" : undefined}
                placeholder="e.g. Ashish Shah"
              />
              {errors.name && (
                <span className="form-error-message" id="name-error-msg" role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Field 2: Email */}
            <div className="form-group-item">
              <label htmlFor="email" className="form-label-text">
                Corporate Email <span className="label-required-marker" aria-hidden="true">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`form-input-node ${errors.email ? "is-invalid" : ""}`}
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error-msg" : undefined}
                placeholder="e.g. ashish@corporate.com"
              />
              {errors.email && (
                <span className="form-error-message" id="email-error-msg" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Field 3: Phone */}
            <div className="form-group-item">
              <label htmlFor="phone" className="form-label-text">
                Contact Phone <span className="label-required-marker" aria-hidden="true">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`form-input-node ${errors.phone ? "is-invalid" : ""}`}
                aria-required="true"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error-msg" : undefined}
                placeholder="e.g. +91 98765 43210"
              />
              {errors.phone && (
                <span className="form-error-message" id="phone-error-msg" role="alert">
                  {errors.phone}
                </span>
              )}
            </div>

            {/* Field 4: Service Required */}
            <div className="form-group-item">
              <label htmlFor="service" className="form-label-text">
                Service Domain <span className="label-required-marker" aria-hidden="true">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className={`form-input-node ${errors.service ? "is-invalid" : ""}`}
                aria-required="true"
                aria-invalid={!!errors.service}
                aria-describedby={errors.service ? "service-error-msg" : undefined}
              >
                <option value="">-- Select Audit/Advisory Domain --</option>
                <option value="audit">Statutory Audit & Assurance</option>
                <option value="gst">GST Advisory & Compliance</option>
                <option value="tax">Direct Corporate Tax Planning</option>
                <option value="roc">ROC & Company Incorporation</option>
                <option value="cfo">Virtual CFO Advisory Support</option>
                <option value="consulting">Bank Syndications & Capital CMA</option>
              </select>
              {errors.service && (
                <span className="form-error-message" id="service-error-msg" role="alert">
                  {errors.service}
                </span>
              )}
            </div>

            {/* Field 5: Message */}
            <div className="form-group-item">
              <label htmlFor="message" className="form-label-text">
                Inquiry Details <span className="label-required-marker" aria-hidden="true">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className={`form-input-node textarea-node ${errors.message ? "is-invalid" : ""}`}
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error-msg" : undefined}
                placeholder="Describe your statutory compliance gaps, timeline mandates, or company objectives..."
              ></textarea>
              {errors.message && (
                <span className="form-error-message" id="message-error-msg" role="alert">
                  {errors.message}
                </span>
              )}
            </div>

            {/* Submission Button */}
            <div className="form-action-wrapper">
              <button 
                type="submit" 
                className="btn btn-primary form-submit-btn"
                aria-label="Submit private inquiry request to partners desk"
              >
                Submit Consultation Request
              </button>
            </div>

          </form>
        )}
      </PageContainer>

      {/* 5. Trust Indicators Strip */}
      <section className="contact-trust-strip" aria-label="Fiduciary commitments">
        <div className="container contact-trust-container">
          <div className="contact-trust-grid">
            
            <div className="contact-trust-item">
              <span className="contact-trust-title">Partner-Led Advisory</span>
              <span className="contact-trust-desc">Consult directly with experienced chartered accountants.</span>
            </div>

            <div className="contact-trust-item">
              <span className="contact-trust-title">Confidential Consultation</span>
              <span className="contact-trust-desc">All regulatory disclosures are secured under rigid protocols.</span>
            </div>

            <div className="contact-trust-item">
              <span className="contact-trust-title">Timely Response</span>
              <span className="contact-trust-desc">Actionable replies delivered within 24 business hours.</span>
            </div>

            <div className="contact-trust-item">
              <span className="contact-trust-title">Long-Term Relationships</span>
              <span className="contact-trust-desc">Dedicated support spanning your company's life-cycle.</span>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};
