import React, { useState, useEffect, useRef } from "react";
import { SERVICES_DATA, ServiceItem } from "../data/services";
import { SITE_CONFIG } from "../constants/config";
import "./Services.css";

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLAnchorElement | null>(null);

  const openDrawer = (service: ServiceItem, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    triggerRef.current = e.currentTarget;
    setSelectedService(service);
    setIsDrawerOpen(true);
    document.body.style.overflow = "hidden"; // Lock scroll
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    document.body.style.overflow = ""; // Unlock scroll
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 50);
  };

  // Keyboard accessibility: Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isDrawerOpen) {
        closeDrawer();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isDrawerOpen]);

  // Focus trap inside the drawer
  useEffect(() => {
    if (!isDrawerOpen || !drawerRef.current) return;

    const focusableEls = drawerRef.current.querySelectorAll<HTMLElement>(
      'a[href]:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (focusableEls.length === 0) return;

    const firstFocusable = focusableEls[0];
    const lastFocusable = focusableEls[focusableEls.length - 1];

    const handleTabTrap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        // Tab
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    };

    const currentDrawer = drawerRef.current;
    currentDrawer.addEventListener("keydown", handleTabTrap);
    
    // Auto-focus close button
    closeBtnRef.current?.focus();

    return () => {
      currentDrawer.removeEventListener("keydown", handleTabTrap);
    };
  }, [isDrawerOpen, selectedService]);

  const renderIcon = (iconKey: string, className = "service-card-icon") => {
    const iconProps = {
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
      "aria-hidden": "true"
    };

    switch (iconKey) {
      case "audit":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" strokeWidth="2" />
          </svg>
        );
      case "gst":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M21 12H3" />
            <path d="M12 3v18" />
            <circle cx="12" cy="12" r="4" strokeWidth="2" />
          </svg>
        );
      case "tax":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M12 1v22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            <circle cx="12" cy="12" r="10" strokeOpacity="0.1" />
          </svg>
        );
      case "roc":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M3 21h18" strokeWidth="2" />
            <path d="M5 21V10h14v11" />
            <path d="M12 3 3 10h18Z" />
            <path d="M9 14v3" />
            <path d="M15 14v3" />
          </svg>
        );
      case "cfo":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M3 3v18h18" strokeWidth="2" />
            <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
            <circle cx="18.7" cy="8" r="2" fill="var(--color-accent)" />
            <circle cx="10.8" cy="10.5" r="2" fill="var(--color-accent)" />
          </svg>
        );
      case "finance":
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path d="M22 17H2" strokeWidth="2" />
            <path d="M4 17a4 4 0 0 1 8 0h8a4 4 0 0 1 8 0" strokeOpacity="0.3" />
            <path d="M12 4v13" />
            <path d="M7 8.5 12 4l5 4.5" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="services-section" id="expertise" aria-labelledby="services-section-heading">
      <div className="container">
        
        {/* Section Title Header */}
        <div className="services-header">
          <span className="services-label">OUR EXPERTISE</span>
          <h2 className="services-title" id="services-section-heading">
            Specialized Advisory & Assurance Services
          </h2>
          <p className="services-desc">
            Delivering structured financial, taxation, compliance and strategic advisory solutions with partner-led attention and long-term business value.
          </p>
        </div>

        {/* Services Grid Layout */}
        <div className="services-grid" id="services-cards-grid">
          {SERVICES_DATA.map((service: ServiceItem) => (
            <div 
              key={service.id} 
              className="service-card" 
              id={service.id}
            >
              {/* SVG Icon wrapper */}
              <div className="service-card-icon-container">
                {renderIcon(service.icon)}
              </div>
              
              {/* Service Title */}
              <h3 className="service-card-title">{service.title}</h3>
              
              {/* Service Description */}
              <p className="service-card-desc">{service.shortDescription}</p>
              
              {/* Learn More Link */}
              <div className="service-card-action">
                <a 
                  href={service.route} 
                  className="service-card-link"
                  onClick={(e) => openDrawer(service, e)}
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More 
                  <span className="arrow-icon" aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightweight Slide-in Service Detail Drawer */}
      {selectedService && (
        <>
          <div 
            className={`service-drawer-overlay ${isDrawerOpen ? "is-active" : ""}`}
            onClick={closeDrawer}
            aria-hidden="true"
          />
          <div 
            ref={drawerRef}
            className={`service-drawer ${isDrawerOpen ? "is-active" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
          >
            <div className="drawer-header">
              <div className="drawer-title-group">
                <div className="drawer-icon-container">
                  {renderIcon(selectedService.icon, "drawer-service-icon")}
                </div>
                <h3 id="drawer-title" className="drawer-title">{selectedService.title}</h3>
              </div>
              <button 
                ref={closeBtnRef}
                className="drawer-close-btn"
                onClick={closeDrawer}
                aria-label="Close panel"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="drawer-body">
              <p className="drawer-desc">{selectedService.description}</p>
              
              <h4 className="drawer-section-heading">Key Offerings & Compliance Scope</h4>
              <ul className="drawer-offerings-list">
                {selectedService.features.map((feature, idx) => (
                  <li key={idx} className="drawer-offering-item">
                    <svg className="drawer-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="drawer-cta-section">
                <a 
                  href={SITE_CONFIG.ctaHeaderPrimary}
                  className="btn btn-primary drawer-cta-btn"
                  onClick={closeDrawer}
                >
                  Book Consultation for {selectedService.title}
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
