import React, { useState, useEffect, useRef } from "react";
import { SITE_CONFIG } from "../constants/config";
import { Logo } from "./Logo";
import "./Header.css";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolid, setIsSolid] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedEl = useRef<HTMLElement | null>(null);

  // Handle transparent-to-solid transitions on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSolid(true);
      } else {
        setIsSolid(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Keyboard accessibility: close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMenuOpen || !menuRef.current) return;

    const focusableEls = menuRef.current.querySelectorAll<HTMLElement>(
      'a[href]:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (focusableEls.length === 0) return;

    const firstFocusable = focusableEls[0];
    const lastFocusable = focusableEls[focusableEls.length - 1];

    const handleTabTrap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        // Shift + Tab: Wrap back to the last element
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        // Tab: Wrap to the first element
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    };

    menuRef.current.addEventListener("keydown", handleTabTrap);
    
    // Set initial focus to first link
    firstFocusable.focus();

    return () => {
      if (menuRef.current) {
        menuRef.current.removeEventListener("keydown", handleTabTrap);
      }
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const openMenu = () => {
    lastFocusedEl.current = document.activeElement as HTMLElement;
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden"; // Lock scroll
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = ""; // Unlock scroll
    // Return focus to menu toggle button
    setTimeout(() => {
      toggleButtonRef.current?.focus();
    }, 50);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && window.location.pathname === "/") {
      e.preventDefault();
      const targetId = href.substring(2);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    closeMenu();
    if (href.startsWith("/#") && window.location.pathname === "/") {
      e.preventDefault();
      const targetId = href.substring(2);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    <>
      <header className={`site-header ${isSolid ? "is-solid" : "is-transparent"}`}>
        <div className="header-container container">
          <div className="header-inner">
            
            {/* Logo */}
            <div className="header-logo">
              <a href="/" onClick={handleLogoClick} aria-label={`${SITE_CONFIG.siteName} Home`}>
                <Logo inverse={false} />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-navigation" aria-label="Main Navigation">
              <ul className="nav-list">
                {SITE_CONFIG.navLinks.map((link, idx) => (
                  <li 
                    key={idx} 
                    className={`nav-item ${link.hasDropdown ? "has-dropdown" : ""}`}
                  >
                    <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="nav-link">
                      {link.label}
                      {link.hasDropdown && (
                        <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M7 10l5 5 5-5z" fill="currentColor" />
                        </svg>
                      )}
                    </a>
                    
                    {link.hasDropdown && link.dropdownItems && (
                      <div className="dropdown-menu" aria-label={`${link.label} Submenu`}>
                        <ul className="dropdown-list">
                          {link.dropdownItems.map((subLink, sIdx) => (
                            <li key={sIdx}>
                              <a href={subLink.href} className="dropdown-link">
                                {subLink.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop CTAs */}
            <div className="header-ctas">
              <a 
                href={SITE_CONFIG.contactTextRaw} 
                className="header-phone-link"
                aria-label={SITE_CONFIG.contactText}
              >
                {SITE_CONFIG.contactText}
              </a>
              <a 
                href={SITE_CONFIG.ctaHeaderPrimary} 
                className="btn btn-primary header-cta-btn"
              >
                Book Consultation
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              ref={toggleButtonRef}
              className={`mobile-menu-toggle ${isMenuOpen ? "is-active" : ""}`}
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMenuOpen ? "Close menu" : "Open main menu"}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div 
        ref={menuRef}
        id="mobile-nav" 
        className={`mobile-nav-drawer ${isMenuOpen ? "is-active" : ""}`}
        aria-hidden={!isMenuOpen}
        aria-label="Mobile Navigation"
      >
        <div className="mobile-drawer-inner">
          <ul className="mobile-nav-list">
            {SITE_CONFIG.navLinks.map((link, idx) => (
              <li key={idx} className="mobile-nav-item">
                <a 
                  href={link.href} 
                  className="mobile-nav-link"
                  onClick={(e) => handleMobileNavClick(e, link.href)}
                >
                  {link.label}
                </a>
                
                {link.hasDropdown && link.dropdownItems && (
                  <ul className="mobile-submenu-list">
                    {link.dropdownItems.map((subLink, sIdx) => (
                      <li key={sIdx}>
                        <a 
                          href={subLink.href} 
                          className="mobile-submenu-link"
                          onClick={closeMenu}
                        >
                          {subLink.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-ctas">
            <a 
              href={SITE_CONFIG.contactTextRaw} 
              className="btn btn-outline mobile-phone-btn"
              onClick={closeMenu}
            >
              {SITE_CONFIG.contactText}
            </a>
            <a 
              href={SITE_CONFIG.ctaHeaderPrimary} 
              className="btn btn-primary mobile-cta-btn"
              onClick={closeMenu}
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`mobile-drawer-overlay ${isMenuOpen ? "is-active" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      ></div>
    </>
  );
};
