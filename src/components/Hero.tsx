import React, { useEffect, useState, useRef } from "react";
import { SITE_CONFIG } from "../constants/config";
import { HERO_IMAGES } from "../data/heroImages";
import "./Hero.css";

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);
  const slideCount = HERO_IMAGES.length;

  useEffect(() => {
    // Trigger lightweight entry transitions
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Autoplay intervals
  useEffect(() => {
    // Respect OS preference for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideCount);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, slideCount]);

  // Touch Swipe Gesture Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStart.current === null || touchEnd.current === null) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setActiveSlide((prev) => (prev + 1) % slideCount);
    } else if (isRightSwipe) {
      setActiveSlide((prev) => (prev - 1 + slideCount) % slideCount);
    }

    touchStart.current = null;
    touchEnd.current = null;
  };

  // Keyboard Arrows for Carousel
  const handleCarouselKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActiveSlide((prev) => (prev + 1) % slideCount);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActiveSlide((prev) => (prev - 1 + slideCount) % slideCount);
    }
  };

  const handleReviewClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("expertise");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className={`hero-section ${isVisible ? "is-visible" : ""}`} 
      id="hero-section" 
      aria-label="Introduction and key CTA area"
    >
      <div className="container hero-container grid-layout">
        
        {/* Content Column */}
        <div className="hero-content" id="hero-content-node">
          {/* Micro-accent label */}
          <p className="hero-accent uppercase tracking-wider font-medium mb-16">
            {SITE_CONFIG.siteName}
          </p>
          
          {/* Primary Page H1 */}
          <h1 className="hero-title text-h1 font-bold mb-24">
            {SITE_CONFIG.heroH1}
          </h1>
          
          {/* Supporting Pitch */}
          <p className="hero-description text-body-large mb-40">
            {SITE_CONFIG.heroSub}
          </p>
          
          {/* CTA Group */}
          <div className="hero-cta-group" id="hero-cta-triggers">
            <a 
              href={SITE_CONFIG.ctaHeroPrimary} 
              className="btn btn-primary hero-btn-primary"
              aria-label="Request a private consultation with managing partners to verify compliance structures"
            >
              Request Consultation
            </a>
            
            <a 
              href={SITE_CONFIG.ctaHeroSecondary} 
              onClick={handleReviewClick}
              className="btn btn-outline hero-btn-secondary"
              aria-label="Review our primary service domains and regulatory practices"
            >
              Review Expertise
            </a>
          </div>
          
          {/* Fiduciary Metrics Strip */}
          <div className="hero-trust-strip pt-24" id="hero-fiduciary-metrics">
            <p className="trust-strip-title uppercase tracking-wider mb-16">Core Principles of Partnership</p>
            <div className="trust-metrics" role="region" aria-label="Brand stability key indicators">
              {SITE_CONFIG.trustIndicators.map((metric, idx) => (
                <div key={idx} className="trust-metric-item">
                  <span className="trust-metric-value font-bold d-block mb-4">{metric.value}</span>
                  <span className="trust-metric-label text-small d-block">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Premium Image Carousel Column */}
        <div className="hero-carousel-container" id="hero-carousel-display">
          <div 
            className="carousel-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onKeyDown={handleCarouselKeyDown}
            tabIndex={0}
            role="region"
            aria-roletype="carousel"
            aria-label="Strategic financial advisory slideshow"
          >
            <div className="carousel-track">
              {HERO_IMAGES.map((slide, idx) => {
                const isActive = idx === activeSlide;
                return (
                  <div
                    key={slide.id}
                    className={`carousel-slide ${isActive ? "is-active" : ""}`}
                    role="group"
                    aria-roletype="slide"
                    aria-label={`Slide ${idx + 1} of ${slideCount}: ${slide.title}`}
                    aria-hidden={!isActive}
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="carousel-slide-img"
                      loading={idx === 0 ? "eager" : "lazy"}
                      {...(idx === 0 ? { fetchpriority: "high" } as any : {})}
                    />
                  </div>
                );
              })}
            </div>

            {/* Carousel Dot Indicators */}
            <div className="carousel-indicators" role="tablist" aria-label="Slide select controls">
              {HERO_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  className={`carousel-dot ${idx === activeSlide ? "is-active" : ""}`}
                  role="tab"
                  aria-selected={idx === activeSlide}
                  aria-label={`Display slide ${idx + 1}`}
                  onClick={() => setActiveSlide(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mouse Wheel Scroll Indicator */}
      <div 
        className="hero-scroll-indicator" 
        onClick={() => {
          const content = document.getElementById("hero-section");
          if (content) {
            window.scrollTo({
              top: content.getBoundingClientRect().bottom + window.scrollY - 88,
              behavior: "smooth"
            });
          }
        }}
        aria-hidden="true"
      >
        <span className="scroll-text uppercase tracking-wider mb-8">Discover</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
};
