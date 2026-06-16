import React from "react";
import { SITE_CONFIG } from "../constants/config";
import { Logo } from "./Logo";
import "./Footer.css";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="site-footer" aria-label="Bhansali Associates Site Footer">
      <div className="container footer-container">
        
        {/* 4-Column Grid */}
        <div className="footer-grid">
          
          {/* Column 1: Company Profile */}
          <div className="footer-col company-info-col">
            <div className="footer-logo-wrapper">
              <a href="/" onClick={handleLogoClick} aria-label="Bhansali Associates Home">
                <Logo inverse={true} />
              </a>
            </div>
            <p className="footer-tagline">
              Beyond Numbers, Building Trust Through Expert Audit, Tax &amp; Business Advisory
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <nav className="footer-col footer-nav-col" aria-label="Footer Quick Links">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <a href="/" onClick={handleLogoClick} className="footer-link">Home</a>
              </li>
              <li>
                <a href="/about" className="footer-link">Firm Profile</a>
              </li>
              <li>
                <a href="/#expertise" onClick={(e) => handleHashLinkClick(e, "expertise")} className="footer-link">Expertise</a>
              </li>
              <li>
                <a href="/#industries" onClick={(e) => handleHashLinkClick(e, "industries")} className="footer-link">Industries</a>
              </li>
              <li>
                <a href="/insights" className="footer-link">Insights</a>
              </li>
              <li>
                <a href="/contact" className="footer-link">Contact Us</a>
              </li>
            </ul>
          </nav>

          {/* Column 3: Top Services */}
          <nav className="footer-col footer-nav-col" aria-label="Footer Services Links">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links-list">
              <li>
                <a href="/services/audit-assurance" className="footer-link">Audit &amp; Assurance</a>
              </li>
              <li>
                <a href="/services/gst-advisory" className="footer-link">GST Advisory</a>
              </li>
              <li>
                <a href="/services/income-tax" className="footer-link">Income Tax Planning</a>
              </li>
              <li>
                <a href="/services/company-registration" className="footer-link">ROC &amp; Corporate Compliance</a>
              </li>
              <li>
                <a href="/services/virtual-cfo" className="footer-link">Virtual CFO Support</a>
              </li>
              <li>
                <a href="/services/business-advisory" className="footer-link">Business Advisory</a>
              </li>
              <li>
                <a href="/services/financial-consulting" className="footer-link">Financial Consulting</a>
              </li>
            </ul>
          </nav>

          {/* Column 4: Contact Info & Socials */}
          <div className="footer-col contact-info-col">
            <h4 className="footer-col-title">Contact</h4>
            <address className="footer-address-details">
              <p className="footer-address-item">
                <span className="address-label">Address:</span>
                <span className="address-value">{SITE_CONFIG.officeAddress}</span>
              </p>
              <p className="footer-address-item">
                <span className="address-label">Email:</span>
                <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="footer-contact-link">
                  {SITE_CONFIG.contactEmail}
                </a>
              </p>
              <p className="footer-address-item">
                <span className="address-label">Phone:</span>
                <span className="address-value">
                  {SITE_CONFIG.contactPhone.split(" / ").map((num, idx) => (
                    <React.Fragment key={idx}>
                      {idx > 0 && " / "}
                      <a href={`tel:${num.trim()}`} className="footer-contact-link">
                        {num.trim()}
                      </a>
                    </React.Fragment>
                  ))}
                </span>
              </p>
              {SITE_CONFIG.contactWhatsApp && (
                <p className="footer-address-item">
                  <span className="address-label">WhatsApp:</span>
                  <a 
                    href={`https://wa.me/91${SITE_CONFIG.contactWhatsApp}`} 
                    className="footer-contact-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {SITE_CONFIG.contactWhatsApp}
                  </a>
                </p>
              )}
              <p className="footer-address-item">
                <span className="address-label">Hours:</span>
                <span className="address-value">{SITE_CONFIG.officeHours}</span>
              </p>
            </address>

            {/* Social Media Strip */}
            <div className="footer-social-strip" role="region" aria-label="Social media profiles">
              {SITE_CONFIG.socialFacebook && (
                <a 
                  href={SITE_CONFIG.socialFacebook}
                  className="social-icon-link facebook-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              )}
              {SITE_CONFIG.socialInstagram && (
                <a 
                  href={SITE_CONFIG.socialInstagram}
                  className="social-icon-link instagram-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              )}
              {SITE_CONFIG.socialLinkedin && (
                <a 
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="social-icon-link linkedin-link"
                  aria-label="Follow us on LinkedIn (Coming soon)"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              )}
              {SITE_CONFIG.socialTwitter && (
                <a 
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="social-icon-link twitter-link"
                  aria-label="Follow us on Twitter (Coming soon)"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright area */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="footer-copyright-text">
              &copy; {currentYear} {SITE_CONFIG.siteName}. All Rights Reserved.
            </p>
            <nav className="footer-legal-nav" aria-label="Legal &amp; Privacy links">
              <ul className="footer-legal-links-list">
                <li><a href="/privacy-policy" className="footer-legal-link">Privacy Policy</a></li>
                <li><a href="/terms-and-conditions" className="footer-legal-link">Terms &amp; Conditions</a></li>
                <li><a href="/disclaimer" className="footer-legal-link">Disclaimer</a></li>
                <li><a href="/cookie-policy" className="footer-legal-link">Cookie Policy</a></li>
              </ul>
            </nav>
          </div>
          <p className="footer-designation-text">
            Designed for Fiduciary Excellence &amp; Statutory Compliance.
          </p>
        </div>

      </div>
    </footer>
  );
};
