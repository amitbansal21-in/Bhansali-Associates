<?php
// 1. Initialize Configuration
require_once __DIR__ . '/config.php';

// 2. Define Page-Specific SEO Variables
$page_title = 'About Bhansali Associates';
$meta_description = 'Partner-led Chartered Accountants and Business Advisors dedicated to providing precise statutory audit, active direct tax planning, and strategic virtual CFO expertise for corporate stability.';
$canonical_url = SITE_URL . '/about.php';

// About Page Structured Schema Data
$schema_markup = '{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "' . SITE_NAME . ' - About Us",
  "description": "' . $meta_description . '",
  "url": "' . $canonical_url . '",
  "mainEntity": {
    "@type": "AccountingService",
    "name": "' . SITE_NAME . '",
    "image": "' . asset_url('images/logo/logo-main.svg') . '",
    "telephone": "' . CONTACT_PHONE . '",
    "email": "' . CONTACT_EMAIL . '",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Luxury Corporate Park, Platinum Tower",
      "addressLocality": "Mumbai",
      "postalCode": "400001",
      "addressCountry": "IN"
    }
  }
}';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Includes Meta tags, title, Open Graph, Twitter cards, and Schema -->
    <?php require_once ROOT_DIR . '/includes/seo.php'; ?>
    
    <!-- CSS Dependencies -->
    <link rel="stylesheet" href="<?php echo asset_url('css/style.css'); ?>">
    <link rel="stylesheet" href="<?php echo asset_url('css/animations.css'); ?>">
    <link rel="stylesheet" href="<?php echo asset_url('css/responsive.css'); ?>">
</head>
<body>
    <!-- Accessibility Skip Link -->
    <a href="#main-content" class="skip-link">Skip to content</a>

    <!-- Header & Navigation Include -->
    <?php require_once ROOT_DIR . '/includes/header.php'; ?>

    <!-- Main Content Area -->
    <main id="main-content" class="site-main">

        <!-- SECTION 1: Premium Page Banner / Hero -->
        <section class="about-hero" aria-labelledby="about-page-heading">
            <div class="container animate-item">
                <div class="about-hero-content" data-aos="fade-up">
                    <span class="about-hero-label">Corporate Profile</span>
                    <!-- Refinement 1: EXACT requested H1 -->
                    <h1 class="about-hero-title" id="about-page-heading">
                        About Bhansali Associates – Partner-Led Chartered Accountants & Business Advisors
                    </h1>
                    <p class="about-hero-desc">
                        Fostering statutory correctness, financial clarity, and absolute corporate alignment through professional partner-led oversight.
                    </p>
                </div>
            </div>
        </section>

        <!-- SECTION 2: Firm Introduction -->
        <section class="about-profile-section" id="firm-profile" aria-labelledby="profile-section-heading">
            <div class="container">
                <div class="about-grid-2">
                    <div class="profile-text-content" data-aos="fade-right">
                        <h2 class="text-h2 text-primary font-bold mb-24" id="profile-section-heading">
                            Our Commitment to Fiduciary Integrity
                        </h2>
                        <p class="about-profile-lead">
                            Bhansali Associates operates on a foundational discipline: providing direct partner-led corporate advisory, precise audit reporting, and advanced taxation solutions for enterprises navigating dynamic statutory environments.
                        </p>
                        <div class="about-profile-body">
                            <p>
                                Founded to address the complexity of modern compliance landscapes, we align statutory audits, indirect tax optimization (GST), and direct tax planning under a single standard of excellence. We operate deliberately with selected partner portfolios, ensuring every client receives tailored partner expertise.
                            </p>
                            <p>
                                Rather than standard high-volume processing, we maintain detailed peer-reviewed quality frameworks. This provides private corporate boards, fast-growing startup founders, and global entities with absolute operational peace of mind.
                            </p>
                        </div>
                    </div>

                    <!-- Brand Philosophy Aside Box -->
                    <div class="profile-aside-wrapper" data-aos="fade-left">
                        <aside class="about-intro-aside">
                            <div class="philosophy-quote-item">
                                <span class="philosophy-quote-icon" aria-hidden="true">“</span>
                                <blockquote class="philosophy-quote-text">
                                    <?php echo escape_html(FOUNDER_QUOTE_TEXT); ?>
                                </blockquote>
                                <cite class="text-caption font-bold text-accent font-mono block">
                                    — <?php echo escape_html(FOUNDER_QUOTE_AUTHOR); ?>
                                </cite>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 2.5: Our Purpose -->
        <section class="about-purpose-section" id="our-purpose" aria-labelledby="purpose-section-heading">
            <div class="container">
                <div class="about-purpose-container" data-aos="fade-up">
                    <div class="text-center mb-32">
                        <span class="about-hero-label">Fiduciary Focus</span>
                        <h2 class="text-h2 text-primary font-bold" id="purpose-section-heading">Our Purpose</h2>
                    </div>
                    <div class="about-purpose-lead-text text-center">
                        Bhansali Associates was founded with a simple yet enduring belief — financial compliance should be more than a regulatory obligation; it should become a foundation for stronger businesses, informed decisions, and lasting confidence.
                    </div>
                    <div class="about-purpose-divider mx-auto"></div>
                    <div class="about-purpose-body-text">
                        <p>
                            We believe that every audit, every tax strategy, and every compliance milestone should contribute to sustainable growth, operational clarity, and long-term value creation.
                        </p>
                        <p>
                            Our role extends beyond professional services. We strive to be trusted advisors who help businesses navigate complexity with integrity, precision, and a forward-looking perspective.
                        </p>
                        <p class="about-purpose-tagline">
                            Beyond numbers, we are committed to building trust that empowers businesses to move ahead with confidence.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 2.75: Our Commitment -->
        <section class="about-commitment-section" id="our-commitment" aria-labelledby="commitment-section-heading">
            <div class="container">
                <div class="about-commitment-container" data-aos="fade-up">
                    <div class="about-commitment-card">
                        <span class="about-commitment-subtitle">Fiduciary Pledge</span>
                        <h2 class="about-commitment-title" id="commitment-section-heading">Our Commitment</h2>
                        <div class="about-commitment-body">
                            <p>
                                Our commitment is simple — to deliver clarity where there is complexity, confidence where there is uncertainty, and disciplined financial guidance that supports sustainable business growth.
                            </p>
                            <p>
                                Every engagement is approached with professional integrity, careful attention to detail, and a long-term perspective that prioritizes our clients' interests above all else.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 3: Brand Philosophy -->
        <section class="brand-philosophy-section" id="philosophy" aria-labelledby="philosophy-section-heading">
            <div class="container animate-item">
                <?php 
                $label = 'Fiduciary Principles';
                $title = 'Our Operational Philosophy';
                $description = 'We construct our practices around three architectural pillars designed to secure corporate stability, maximize fiscal efficiency, and reduce operational friction.';
                $alignment = 'text-center';
                $heading_level = 'h2';
                require ROOT_DIR . '/includes/components/section-title.php'; 
                ?>

                <div class="grid grid-3 mt-large">
                    <!-- Pillar 1 -->
                    <div class="philosophy-feature-card" data-aos="fade-up" data-aos-delay="100">
                        <div class="philosophy-card-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                        </div>
                        <h3 class="philosophy-card-title">Statutory Certitude</h3>
                        <p class="philosophy-card-desc">
                            We execute exhaustive, peer-reviewed statutory checks to ensure absolute audit compliance, preventing regulatory risk and ensuring pristine corporate records.
                        </p>
                    </div>

                    <!-- Pillar 2 -->
                    <div class="philosophy-feature-card" data-aos="fade-up" data-aos-delay="200">
                        <div class="philosophy-card-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </div>
                        <h3 class="philosophy-card-title">Client-Centric Steering</h3>
                        <p class="philosophy-card-desc">
                            Enterprise leadership requires deep, continuous attention. Every client portfolio is directly overseen by a dedicated principal partner.
                        </p>
                    </div>

                    <!-- Pillar 3 -->
                    <div class="philosophy-feature-card" data-aos="fade-up" data-aos-delay="300">
                        <div class="philosophy-card-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24">
                                <line x1="18" y1="20" x2="18" y2="10" />
                                <line x1="12" y1="20" x2="12" y2="4" />
                                <line x1="6" y1="20" x2="6" y2="14" />
                            </svg>
                        </div>
                        <h3 class="philosophy-card-title">Proactive Foresight</h3>
                        <p class="philosophy-card-desc">
                            We anticipate tax trends, regulatory adjustments, and reporting upgrades to align corporate frameworks long before statutory change deadlines.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 4: Our Journey -->
        <section class="journey-section" id="journey" aria-labelledby="journey-section-heading">
            <div class="container animate-item">
                <?php 
                $label = 'Firm Milestones';
                $title = 'Our Journey of Fiduciary Quality';
                $description = 'We have built a reputation on solid foundations of statutory diligence, steady advisory expansion, and partner-led corporate governance.';
                $alignment = 'text-center';
                $heading_level = 'h2';
                require ROOT_DIR . '/includes/components/section-title.php'; 
                ?>

                <div class="journey-timeline-wrapper">
                    <!-- Milestone 1 -->
                    <div class="journey-item" data-aos="fade-right">
                        <div class="journey-dot" aria-hidden="true"></div>
                        <div class="journey-date">Firm Foundation</div>
                        <h3 class="journey-title">Regulatory Framework Inception</h3>
                        <p class="journey-desc">
                            Established to serve the corporate landscape with rigorous tax, company law filings, and auditing structures designed for direct partner oversight.
                        </p>
                    </div>

                    <!-- Milestone 2 -->
                    <div class="journey-item" data-aos="fade-left">
                        <div class="journey-dot" aria-hidden="true"></div>
                        <div class="journey-date">Service Integration</div>
                        <h3 class="journey-title">Robust Auditing Systems</h3>
                        <p class="journey-desc">
                            Integrated complete statutory peer-review frameworks and advanced reconciliations to prevent input credit losses during substantial tax updates.
                        </p>
                    </div>

                    <!-- Milestone 3 -->
                    <div class="journey-item" data-aos="fade-right">
                        <div class="journey-dot" aria-hidden="true"></div>
                        <div class="journey-date">Strategic Mastery</div>
                        <h3 class="journey-title">Advanced Advisory & Virtual CFO</h3>
                        <p class="journey-desc">
                            Launched corporate advisory and Virtual CFO options to guide mid-market capital preparations, RERA audits, and international structures safely.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 5: Mission & Vision -->
        <section class="mission-vision-section" id="mission-vision" aria-labelledby="mission-vision-section-heading">
            <div class="container">
                <div class="mission-vision-grid">
                    <!-- Mission -->
                    <div class="mission-vision-card" data-aos="fade-right">
                        <span class="value-badge" aria-hidden="true">01</span>
                        <h2 class="text-h3 text-primary font-bold mb-16" id="mission-heading">Our Mission</h2>
                        <p class="text-secondary line-base font-light">
                            To establish permanent structural correctness, audit transparency, and proactive statutory defense for our corporate partners, allowing them to scale with regulatory assurance.
                        </p>
                    </div>

                    <!-- Vision -->
                    <div class="mission-vision-card" data-aos="fade-left">
                        <span class="value-badge" aria-hidden="true">02</span>
                        <h2 class="text-h3 text-primary font-bold mb-16" id="vision-heading">Our Vision</h2>
                        <p class="text-secondary line-base font-light">
                            To remain the premier trusted advisory partner for growth-minded private boards, providing impeccable, peer-reviewed financial compliance standards and strategic fiduciary oversight.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 6: Core Values -->
        <section class="values-section" id="core-values" aria-labelledby="values-section-heading">
            <div class="container animate-item">
                <?php 
                $label = 'Fiduciary Safeguards';
                $title = 'Our Core Professional Values';
                $description = 'Every advisory engagement, compliance filing, and statutory audit at Bhansali Associates is directed by four fundamental values.';
                $alignment = 'text-center';
                $heading_level = 'h2';
                require ROOT_DIR . '/includes/components/section-title.php'; 
                ?>

                <div class="values-grid">
                    <!-- Value 1 -->
                    <div class="value-card" data-aos="fade-up" data-aos-delay="100">
                        <span class="value-badge">01. Accuracy</span>
                        <h3 class="value-title">Meticulous Verification</h3>
                        <p class="value-desc">
                            We execute extensive reconciliations and reviews. Loose estimations are avoided in favor of rigorous audit tracks.
                        </p>
                    </div>

                    <!-- Value 2 -->
                    <div class="value-card" data-aos="fade-up" data-aos-delay="200">
                        <span class="value-badge">02. Accountability</span>
                        <h3 class="value-title">Direct Partner Directives</h3>
                        <p class="value-desc">
                            We decline mass transactional processing. Your core compliance structures are steered and guaranteed directly by an experienced partner.
                        </p>
                    </div>

                    <!-- Value 3 -->
                    <div class="value-card" data-aos="fade-up" data-aos-delay="300">
                        <span class="value-badge">03. Correctness</span>
                        <h3 class="value-title">Absolute Transparency</h3>
                        <p class="value-desc">
                            We maintain high ethical standards and direct communication with audit committees and corporate boards to secure compliance certitude.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 7: Leadership Section -->
        <section class="about-leadership-section" id="leadership" aria-labelledby="leadership-section-heading">
            <div class="container animate-item">
                <?php 
                $label = 'Advisory Sovereignty';
                $title = 'Our Principal Leadership';
                $description = 'Under experienced partner leadership, we design complete direct tax planning, statutory risk metrics, and audit frameworks.';
                $alignment = 'text-center';
                $heading_level = 'h2';
                require ROOT_DIR . '/includes/components/section-title.php'; 
                ?>

                <div class="leadership-grid">
                    <!-- Founder Card 1: CA Ashish Bhansali -->
                    <article class="founder-card-premium" data-aos="fade-up">
                        <!-- Dynamic image ratio -->
                        <div class="blog-media">
                            <img src="<?php echo escape_html(FOUNDER_1_IMAGE); ?>" 
                                 alt="<?php echo escape_html(FOUNDER_1_NAME); ?> - Founder of Bhansali Associates" 
                                 class="founder-img lazy-image">
                        </div>
                        <div class="blog-body">
                            <span class="about-hero-label text-accent font-semibold"><?php echo escape_html(FOUNDER_1_ROLE); ?></span>
                            <h3 class="text-h3 text-primary font-bold mb-16"><?php echo escape_html(FOUNDER_1_NAME); ?></h3>
                            <p class="text-secondary font-light line-base mb-24">
                                <?php echo escape_html(FOUNDER_1_POSITIONING); ?>
                            </p>
                            
                            <!-- Strategic Trust Indicator Block and NO hardcoded linkedin links -->
                            <div class="flex align-center gap-16 border-top pt-20 mt-auto">
                                <span class="text-caption font-mono uppercase text-secondary">Avenue: Tax & Corporate Restructuring</span>
                            </div>
                        </div>
                    </article>

                    <!-- Founder Card 2: Rajani Bhansali -->
                    <article class="founder-card-premium" data-aos="fade-up">
                        <!-- Dynamic image ratio -->
                        <div class="blog-media">
                            <img src="<?php echo escape_html(FOUNDER_2_IMAGE); ?>" 
                                 alt="<?php echo escape_html(FOUNDER_2_NAME); ?> - Co-Founder of Bhansali Associates" 
                                 class="founder-img lazy-image">
                        </div>
                        <div class="blog-body">
                            <span class="about-hero-label text-accent font-semibold"><?php echo escape_html(FOUNDER_2_ROLE); ?></span>
                            <h3 class="text-h3 text-primary font-bold mb-16"><?php echo escape_html(FOUNDER_2_NAME); ?></h3>
                            <p class="text-secondary font-light line-base mb-24">
                                <?php echo escape_html(FOUNDER_2_POSITIONING); ?>
                            </p>
                            
                            <!-- Strategic Trust Indicator Block and NO hardcoded linkedin links -->
                            <div class="flex align-center gap-16 border-top pt-20 mt-auto">
                                <span class="text-caption font-mono uppercase text-secondary">Avenue: Statutory Audit & ROC Controls</span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- SECTION 8: Why Clients Trust Us -->
        <section class="about-industries-section bg-surface-alt" id="trust-factors" aria-labelledby="trust-section-heading">
            <div class="container animate-item">
                <div class="text-center mb-48">
                    <span class="about-hero-label">Uncompromised Quality</span>
                    <h2 class="text-h2 text-primary font-bold" id="trust-section-heading">Why Mid-Market Corporations Choose Us</h2>
                </div>

                <div class="grid grid-2">
                    <div class="value-card" data-aos="fade-right">
                        <h3 class="text-body-large text-primary font-bold mb-12">Absolute Zero-Delegation Quality</h3>
                        <p class="text-secondary text-body-small">
                            Unlike larger corporate operations that delegate complex audit work to entry-level trainees, your business structures, tax filings, and RERA accounts are directed and signed only by our experienced corporate partners.
                        </p>
                    </div>

                    <div class="value-card" data-aos="fade-left">
                        <h3 class="text-body-large text-primary font-bold mb-12">ICAI Peer-Reviewed Compliance</h3>
                        <p class="text-secondary text-body-small">
                            We execute exhaustive multi-state reconciliations, peer-review loops, and dual-authorization verification processes, ensuring every filing and audit statement is secure against audit assessments.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 9: Our Approach -->
        <section class="journey-section" id="our-approach" aria-labelledby="approach-section-heading">
            <div class="container animate-item">
                <div class="text-center mb-48">
                    <span class="about-hero-label">Methodological Focus</span>
                    <h2 class="text-h2 text-primary font-bold" id="approach-section-heading">Our Three-Step Methodology</h2>
                </div>

                <div class="grid grid-3">
                    <!-- Step 1 -->
                    <div class="value-card text-center" data-aos="fade-up" data-aos-delay="100">
                        <div class="philosophy-card-icon mx-auto" aria-hidden="true">
                            <span class="font-mono text-body font-bold text-accent">01</span>
                        </div>
                        <h3 class="value-title">Diagnose & Audit</h3>
                        <p class="value-desc">
                            We map out existing structural gaps, tax credit logs, ROC filings, and auditing vulnerabilities thoroughly.
                        </p>
                    </div>

                    <!-- Step 2 -->
                    <div class="value-card text-center" data-aos="fade-up" data-aos-delay="200">
                        <div class="philosophy-card-icon mx-auto" aria-hidden="true">
                            <span class="font-mono text-body font-bold text-accent">02</span>
                        </div>
                        <h3 class="value-title">Structure & Reconcile</h3>
                        <p class="value-desc">
                            We resolve discrepancies, match dynamical logs against direct registers, and optimize corporate frameworks.
                        </p>
                    </div>

                    <!-- Step 3 -->
                    <div class="value-card text-center" data-aos="fade-up" data-aos-delay="300">
                        <div class="philosophy-card-icon mx-auto" aria-hidden="true">
                            <span class="font-mono text-body font-bold text-accent">03</span>
                        </div>
                        <h3 class="value-title">Oversee & Defend</h3>
                        <p class="value-desc">
                            We provide partner-directed representations before statutory Tax Authorities, ensuring long-term corporate security.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 10: Industries We Serve (Compact version matching homepage) -->
        <section class="about-industries-section" id="industries-serve" aria-labelledby="ind-section-heading">
            <div class="container animate-item">
                <div class="text-center mb-48">
                    <span class="about-hero-label">Industry Competence</span>
                    <h2 class="text-h2 text-primary font-bold" id="ind-section-heading">Sectors We Empower</h2>
                    <p class="text-secondary text-body-small mt-12 max-width-600 mx-auto">
                        We deploy custom accounting and audit practices for industries facing complex compliance guidelines.
                    </p>
                </div>

                <!-- same approved Industries list in compact styling -->
                <div class="about-ind-grid">
                    <!-- Industry 1 -->
                    <div class="ind-compact-item" data-aos="fade-up" data-aos-delay="50">
                        <div class="ind-compact-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M2 20V10l4-3 4 3 4-3 4 3 4-3v13H2Z" />
                                <path d="M6 17v-3"/><path d="M10 17v-3"/><path d="M14 17v-3"/><path d="M18 17v-3"/>
                            </svg>
                        </div>
                        <div class="ind-compact-text">
                            <span class="ind-compact-title">Manufacturing</span>
                            <span class="ind-compact-desc">Fixed asset valuation, complex costing models, and multi-state GST audit reconciliations.</span>
                        </div>
                    </div>

                    <!-- Industry 2 -->
                    <div class="ind-compact-item" data-aos="fade-up" data-aos-delay="100">
                        <div class="ind-compact-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="3" width="7" height="18" rx="1" />
                                <rect x="14" y="9" width="7" height="12" rx="1" />
                            </svg>
                        </div>
                        <div class="ind-compact-text">
                            <span class="ind-compact-title">Real Estate & Construction</span>
                            <span class="ind-compact-desc">RERA compliance audits, cash flow projections, and Joint Development tax.</span>
                        </div>
                    </div>

                    <!-- Industry 3 -->
                    <div class="ind-compact-item" data-aos="fade-up" data-aos-delay="150">
                        <div class="ind-compact-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4.5 16.5c-1.5 1.5-2.5 3.5-2.5 5.5C4 22 6 21 7.5 19.5" />
                                <path d="M12 2C6 2 2 6 2 12c0 3 1.5 5.5 3.5 7.5l11-11C14.5 3.5 12 2 12 2Z" />
                            </svg>
                        </div>
                        <div class="ind-compact-text">
                            <span class="ind-compact-title">Startups & Technology</span>
                            <span class="ind-compact-desc">Virtual CFO governance, capital cap tables, institutional preparedness, and ESOP models.</span>
                        </div>
                    </div>

                    <!-- Industry 4 -->
                    <div class="ind-compact-item" data-aos="fade-up" data-aos-delay="200">
                        <div class="ind-compact-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="14" width="7" height="7" rx="1"/>
                                <rect x="14" y="3" width="7" height="7" rx="1"/>
                            </svg>
                        </div>
                        <div class="ind-compact-text">
                            <span class="ind-compact-title">Trading & Distribution</span>
                            <span class="ind-compact-desc">High-velocity ledger audits, logistics compliance tracking, and inventory reconciliations.</span>
                        </div>
                    </div>

                    <!-- Industry 5 -->
                    <div class="ind-compact-item" data-aos="fade-up" data-aos-delay="250">
                        <div class="ind-compact-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="M6 12h3l2-5 2 10 2-5h3" />
                            </svg>
                        </div>
                        <div class="ind-compact-text">
                            <span class="ind-compact-title">Healthcare & Professionals</span>
                            <span class="ind-compact-desc">Clinics direct tax structuring, private practitioner audits, and annual regulatory files.</span>
                        </div>
                    </div>

                    <!-- Industry 6 -->
                    <div class="ind-compact-item" data-aos="fade-up" data-aos-delay="300">
                        <div class="ind-compact-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14.5 14.5 0 0 0 0 20M12 2a14.5 14.5 0 0 1 0 20" />
                            </svg>
                        </div>
                        <div class="ind-compact-text">
                            <span class="ind-compact-title">NRI & Global Business</span>
                            <span class="ind-compact-desc">Cross-border consulting channels, DTAA compliance structuring, and FEMA advisory.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 11: Call to Action -->
        <section class="cta-consultation-section bg-surface-alt" id="about-cta" aria-labelledby="about-cta-heading">
            <div class="container">
                <div class="cta-content-wrapper" data-aos="fade-up">
                    <h2 class="cta-heading" id="about-cta-heading">
                        <?php echo escape_html(CTA_HEADING); ?>
                    </h2>
                    <p class="cta-description">
                        <?php echo escape_html(CTA_DESCRIPTION); ?>
                    </p>
                    <div class="cta-btn-group">
                        <a href="<?php echo escape_html(SITE_URL); ?>/contact.php" 
                           class="btn btn-primary ripple-ready" 
                           aria-label="Request a formal corporate consultation with our principal partners">
                            Request Consultation
                        </a>
                        <a href="<?php echo escape_html(SITE_URL); ?>/contact.php#queries" 
                           class="btn btn-outline ripple-ready" 
                           aria-label="Contact our team directly for general coordination">
                            Contact Our Team
                        </a>
                    </div>
                    <div class="cta-indicators-grid" role="list" aria-label="Our Core Advisory Guarantees">
                        <div class="cta-indicator-card" role="listitem">
                            <div class="cta-indicator-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4"/>
                                </svg>
                            </div>
                            <span class="cta-indicator-label"><?php echo escape_html(CTA_INDICATOR_1); ?></span>
                        </div>
                        <div class="cta-indicator-card" role="listitem">
                            <div class="cta-indicator-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <span class="cta-indicator-label"><?php echo escape_html(CTA_INDICATOR_2); ?></span>
                        </div>
                        <div class="cta-indicator-card" role="listitem">
                            <div class="cta-indicator-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                                </svg>
                            </div>
                            <span class="cta-indicator-label"><?php echo escape_html(CTA_INDICATOR_3); ?></span>
                        </div>
                        <div class="cta-indicator-card" role="listitem">
                            <div class="cta-indicator-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                </svg>
                            </div>
                            <span class="cta-indicator-label"><?php echo escape_html(CTA_INDICATOR_4); ?></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <!-- Footer & Scripts Include -->
    <?php require_once ROOT_DIR . '/includes/footer.php'; ?>
</body>
</html>
