<?php
/**
 * Global Header Architecture
 * Includes preloading, announcement bar placeholder, and primary navigation integration.
 */

// Include config if not loaded
require_once dirname(__DIR__) . '/config.php';
?>

<!-- ========================================== -->
<!-- 1. PRELOAD & CRITICAL SETUP                -->
<!-- ========================================== -->
<!-- Preload critical fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<!-- DNS Prefetch for external assets -->
<link rel="dns-prefetch" href="https://www.google-analytics.com">

<!-- Theme Color for mobile browsers -->
<meta name="theme-color" content="#0A192F"> <!-- var(--color-primary) -->

<!-- ========================================== -->
<!-- 2. SCROLL PROGRESS (Optional/Disabled)     -->
<!-- ========================================== -->
<!-- Disabled by default. Can be enabled via JS scroll module -->
<div id="scroll-progress" class="scroll-progress-bar visually-hidden" aria-hidden="true"></div>

<!-- ========================================== -->
<!-- 3. ANNOUNCEMENT BAR (Optional)             -->
<!-- ========================================== -->
<!-- Min-height reserved in CSS to prevent CLS -->
<?php if (isset($show_announcement) && $show_announcement === true): ?>
<div class="announcement-bar flex flex-center" id="announcement-bar">
    <div class="container-fluid text-center">
        <p class="text-caption color-inverse mb-0">
            Important: Premium consultation slots are now open for this quarter. 
            <a href="<?php echo escape_html(SITE_URL); ?>/contact.php" class="text-accent hover-border-gold underline">Book now</a>
        </p>
    </div>
</div>
<?php endif; ?>

<!-- ========================================== -->
<!-- 4. SITE HEADER                             -->
<!-- ========================================== -->
<!-- Uses fixed height to prevent CLS. Starts transparent, transitions to solid -->
<header class="site-header" id="site-header">
    <div class="container container-fluid header-container">
        <div class="header-inner flex justify-between align-center">
            
            <!-- Logo Section -->
            <!-- Support both PNG and SVG assets with perfect responsiveness and theme compatibility -->
            <div class="header-logo">
                <a href="<?php echo escape_html(SITE_URL); ?>/" aria-label="Bhansali Associates Home">
                    <img src="<?php echo get_logo_url('main'); ?>" 
                         alt="Bhansali Associates" 
                         width="240" 
                         height="48" 
                         class="logo-image logo-image-main">
                    <img src="<?php echo get_logo_url('inverse'); ?>" 
                         alt="Bhansali Associates" 
                         width="240" 
                         height="48" 
                         class="logo-image logo-image-inverse">
                </a>
            </div>

            <!-- Primary Navigation (Desktop + Mobile Shell) -->
            <?php require_once ROOT_DIR . '/includes/navigation.php'; ?>

            <!-- Desktop CTAs -->
            <div class="header-ctas hidden-mobile flex align-center gap-24">
                
                <!-- Search Trigger (Optional/Disabled) -->
                <button type="button" class="btn-icon search-trigger visually-hidden" aria-label="Open Search">
                    <svg width="24" height="24" viewBox="0 0 24 24" class="icon-hover-rotate">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    </svg>
                </button>

                <!-- Phone CTA (Secondary) -->
                <a href="tel:<?php echo str_replace(' ', '', CONTACT_PHONE); ?>" 
                   class="nav-link nav-link-premium text-primary font-medium" 
                   aria-label="Call Us at <?php echo escape_html(CONTACT_PHONE); ?>">
                    <?php echo escape_html(CONTACT_PHONE); ?>
                </a>
                
                <!-- Book Consultation CTA (Primary) -->
                <a href="<?php echo escape_html(SITE_URL); ?>/contact.php" 
                   class="btn btn-primary btn-cta shadow-soft hover-button ripple-ready">
                    Book Consultation
                </a>
            </div>

            <!-- Mobile Hamburger Toggle -->
            <button class="mobile-menu-toggle" 
                    id="mobile-menu-toggle" 
                    aria-expanded="false" 
                    aria-controls="primary-nav" 
                    aria-label="Open main menu">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>

        </div>
    </div>
</header>
<!-- Header CLS Spacer (used in CSS) -->
<!-- CSS ensures body padding-top matches header height natively, no spacer div needed -->
