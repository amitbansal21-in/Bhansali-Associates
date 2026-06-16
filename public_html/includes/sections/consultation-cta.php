<?php
/**
 * Homepage Final Consultation Call-to-Action Section
 * 
 * Invokes the final interactive corporate interface on the homepage. Emphasizes
 * long-term growth and compliance clarity with partner-led trust signals,
 * dual high-contrast accessible buttons, and graceful transitions.
 */
?>
<section class="cta-consultation-section" id="consultation" aria-labelledby="cta-section-heading">
    <div class="container">
        <div class="cta-content-wrapper" data-aos="fade-up">
            <!-- Accessibility: Descriptive H2 heading for semantic outline -->
            <h2 class="cta-heading" id="cta-section-heading">
                <?php echo escape_html(CTA_HEADING); ?>
            </h2>
            
            <p class="cta-description">
                <?php echo escape_html(CTA_DESCRIPTION); ?>
            </p>
            
            <!-- CTA Button Pair, with robust keyboard focus styling & custom hover lift limits -->
            <div class="cta-btn-group">
                <a href="<?php echo escape_html(SITE_URL); ?>/contact.php" 
                   class="btn btn-primary ripple-ready" 
                   id="cta-primary-action"
                   aria-label="Request a formal corporate consultation with our principal partners">
                    Request Consultation
                </a>
                
                <a href="<?php echo escape_html(SITE_URL); ?>/contact.php#queries" 
                   class="btn btn-outline ripple-ready" 
                   id="cta-secondary-action"
                   aria-label="Contact our team directly for statutory queries or general coordination">
                    Contact Our Team
                </a>
            </div>
            
            <!-- Subtle Gold Accent Trust Indicators Grid (Desktop 4 cols, Tablet 2 cols, Mobile 1 col) -->
            <div class="cta-indicators-grid" role="list" aria-label="Our Core Advisory Guarantees">
                <!-- Indicator 1 -->
                <div class="cta-indicator-card" role="listitem">
                    <div class="cta-indicator-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" fill="rgba(197, 160, 89, 0.05)"/>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                    </div>
                    <span class="cta-indicator-label"><?php echo escape_html(CTA_INDICATOR_1); ?></span>
                </div>

                <!-- Indicator 2 -->
                <div class="cta-indicator-card" role="listitem">
                    <div class="cta-indicator-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10" fill="rgba(197, 160, 89, 0.05)"/>
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                    </div>
                    <span class="cta-indicator-label"><?php echo escape_html(CTA_INDICATOR_2); ?></span>
                </div>

                <!-- Indicator 3 -->
                <div class="cta-indicator-card" role="listitem">
                    <div class="cta-indicator-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="rgba(197, 160, 89, 0.05)"/>
                        </svg>
                    </div>
                    <span class="cta-indicator-label"><?php echo escape_html(CTA_INDICATOR_3); ?></span>
                </div>

                <!-- Indicator 4 -->
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
