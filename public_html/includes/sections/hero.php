<?php
/**
 * Homepage Hero Section Component
 * 
 * Implements a premium, 60/40 structural layout on desktop, collapsing gracefully 
 * on mobile. Displays primary H1 brand messaging, supporting paragraphs, gold-standard 
 * CTAs, trust indicator metrics, and a stunning modular vector illustration representing 
 * stability and security.
 */
?>
<section class="hero-section flex items-center position-relative" id="hero-section" aria-label="Introduction and Navigation Key CTA area">
    <!-- Fluid layout framework for absolute alignment -->
    <div class="container hero-container grid grid-2 align-center">
        
        <!-- Content Column (62% desktop column scale target) -->
        <div class="hero-content flex flex-column justify-center" id="hero-content-node">
            <!-- Micro-accent label indicating elite standing -->
            <p class="hero-accent text-caption uppercase tracking-wider font-medium mb-16 anim-fade-in">
                Bhansali Associates
            </p>
            
            <!-- Principal Page H1 - Formulated cleanly for Search crawler entity discovery -->
            <h1 class="hero-title text-h1 font-secondary font-bold mb-24 anim-fade-in" id="primary-hero-heading">
                Strategic Chartered Accountants & Business Advisors for Growing Enterprises
            </h1>
            
            <!-- Authoritative Supporting Pitch -->
            <p class="hero-description text-lead mb-40 anim-fade-in-delayed">
                Beyond Numbers, Building Trust Through Expert Audit, Tax & Business Advisory
            </p>
            
            <!-- Premium CTA Placement Ecosystem -->
            <div class="hero-cta-group flex flex-wrap gap-16 mb-48 anim-fade-in-delayed" id="hero-cta-triggers">
                <!-- Primary Action Hub -->
                <a href="<?php echo escape_html(SITE_URL); ?>/contact.php" 
                   class="btn btn-primary ripple-ready" 
                   id="hero-primary-cta"
                   aria-label="Request a private static consultation with managing partners to verify compliance structures">
                    Request Consultation
                </a>
                
                <!-- Secondary Review Hub -->
                <a href="<?php echo escape_html(SITE_URL); ?>/#expertise" 
                   class="btn btn-secondary ripple-ready" 
                   id="hero-secondary-cta"
                   aria-label="Review our primary service domains and regulatory practices">
                    Review Expertise
                </a>
            </div>
            
            <!-- Business Trust Pillar Strip -->
            <div class="hero-trust-strip pt-24 anim-fade-in-delayed" id="hero-fiduciary-metrics">
                <p class="text-caption uppercase tracking-wider text-secondary mb-16">Core Principles of Partnership</p>
                <div class="trust-metrics" role="region" aria-label="Brand stability key indicators">
                    <!-- Stat Segment 1 -->
                    <div class="trust-metric-item">
                        <span class="trust-metric-value text-accent font-secondary font-bold d-block mb-4">Advisory</span>
                        <span class="trust-metric-label text-small text-secondary d-block">Partner-Led Client Support</span>
                    </div>
                    <!-- Stat Segment 2 -->
                    <div class="trust-metric-item">
                        <span class="trust-metric-value text-accent font-secondary font-bold d-block mb-4">Precision</span>
                        <span class="trust-metric-label text-small text-secondary d-block">Accurate Statutory Compliance</span>
                    </div>
                    <!-- Stat Segment 3 -->
                    <div class="trust-metric-item">
                        <span class="trust-metric-value text-accent font-secondary font-bold d-block mb-4">Growth</span>
                        <span class="trust-metric-label text-small text-secondary d-block">Serving Scale & Success</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Premium Abstract Illustration Section (38% desktop column scale target) -->
        <div class="hero-illustration flex flex-center position-relative anim-fade-in" id="hero-vector-display">
            <!-- Precise CLS-safe container mapping aspect-ratio 1:1 and overflow hidden bounds -->
            <div class="illustration-wrapper w-full aspect-square border-radius-lg bg-surface flex flex-center shadow-lg overflow-hidden position-relative" style="aspect-ratio: 1/1;" aria-label="Abstract luxury diagram illustrating fiduciary balance and enterprise advisory shields">
                <!-- Custom Geometric SVG representation for premium corporate identity -->
                <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" class="hero-svg w-full h-full" aria-hidden="true" role="img" style="max-height: 480px;">
                    <!-- Elegant Defs for Rich Ambient Illumination -->
                    <defs>
                        <!-- Radial backdrop glow representing luxury & prosperity -->
                        <radialGradient id="lux-glow-svg" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stop-color="var(--color-accent)" stop-opacity="0.14" />
                            <stop offset="100%" stop-color="var(--color-accent)" stop-opacity="0" />
                        </radialGradient>
                        <!-- Premium metallic gold gradient sequence -->
                        <linearGradient id="g-gold-svg" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="var(--color-accent)" />
                            <stop offset="50%" stop-color="#E2C17D" />
                            <stop offset="100%" stop-color="#9C7733" />
                        </linearGradient>
                        <!-- Rich corporate navy gradient depth -->
                        <linearGradient id="g-navy-svg" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="var(--color-primary)" stop-opacity="0.15" />
                            <stop offset="100%" stop-color="var(--color-primary)" stop-opacity="0.8" />
                        </linearGradient>
                        <!-- Solid support shading structure -->
                        <linearGradient id="g-shading-svg" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="#1E3A63" />
                            <stop offset="100%" stop-color="var(--color-primary)" />
                        </linearGradient>
                    </defs>
                    
                    <!-- Atmospheric Background Aura -->
                    <circle cx="250" cy="250" r="220" fill="url(#lux-glow-svg)" />
                    
                    <!-- Axis gridlines illustrating organizational balance and compliance structure -->
                    <g opacity="0.12">
                        <circle cx="250" cy="250" r="180" stroke="var(--color-primary)" stroke-width="1" stroke-dasharray="4 4" />
                        <circle cx="250" cy="250" r="130" stroke="var(--color-primary)" stroke-width="1" />
                        <line x1="70" y1="250" x2="430" y2="250" stroke="var(--color-primary)" stroke-width="1" />
                        <line x1="250" y1="70" x2="250" y2="430" stroke="var(--color-primary)" stroke-width="1" />
                        <line x1="122.7" y1="122.7" x2="377.3" y2="377.3" stroke="var(--color-primary)" stroke-width="1" stroke-dasharray="4 4" />
                    </g>
                    
                    <!-- Safeguard Shield Arc — Emblem of structural asset fortification -->
                    <path d="M 110,180 A 180,180 0 0,0 390,180 L 250,420 Z" stroke="url(#g-gold-svg)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.85" />
                    
                    <!-- Fiduciary Core Crystal Prism (Absolute Alignment) -->
                    <path d="M 250,130 L 370,250 L 250,370 L 130,250 Z" fill="url(#g-navy-svg)" stroke="var(--color-primary)" stroke-width="1.5" />
                    
                    <!-- Balanced Isometric Pillar Structure -->
                    <g transform="translate(250, 250)">
                        <!-- Top Hexagonal Face in rich luxury gold -->
                        <path d="M 0,-40 L 35,-20 L 0,0 L -35,-20 Z" fill="url(#g-gold-svg)" opacity="0.95" />
                        <!-- Shadow Shaded left quadrant of stability -->
                        <path d="M -35,-20 L 0,0 L 0,40 L -35,20 Z" fill="url(#g-shading-svg)" />
                        <!-- Core right facet -->
                        <path d="M 35,-20 L 0,0 L 0,40 L 35,20 Z" fill="var(--color-primary)" />
                        
                        <!-- Orbital gold balance rings -->
                        <circle cx="0" cy="0" r="55" stroke="url(#g-gold-svg)" stroke-width="2" fill="none" opacity="0.5" transform="rotate(-15)scale(1, 0.5)" />
                    </g>
                    
                    <!-- Pivot nodes depicting structural cross-collaboration -->
                    <circle cx="130" cy="250" r="6" fill="var(--color-primary)" stroke="var(--color-surface)" stroke-width="2" />
                    <circle cx="370" cy="250" r="6" fill="var(--color-accent)" stroke="var(--color-surface)" stroke-width="2" />
                    <circle cx="250" cy="130" r="6" fill="var(--color-accent)" stroke="var(--color-surface)" stroke-width="2" />
                    <circle cx="250" cy="370" r="6" fill="var(--color-primary)" stroke="var(--color-surface)" stroke-width="2" />
                </svg>
            </div>
        </div>
    </div>
    
    <!-- Micro mouse-wheel visual scroll indicator -->
    <div class="hero-scroll-indicator flex flex-column align-center position-absolute" id="hero-scroll-indicator" aria-hidden="true" onclick="document.getElementById('primary-hero-heading').getBoundingClientRect() ? window.scrollTo({ top: document.getElementById('hero-section').getBoundingClientRect().bottom + window.scrollY - 80, behavior: 'smooth' }) : null">
        <span class="scroll-text text-caption uppercase tracking-wider mb-8">Discover</span>
        <div class="scroll-mouse">
            <div class="scroll-wheel"></div>
        </div>
    </div>
</section>
