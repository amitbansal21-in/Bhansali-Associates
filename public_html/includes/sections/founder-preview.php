<?php
/**
 * Homepage Founder & Leadership Preview Section
 * 
 * Renders the two principal partners of Bhansali Associates utilizing CLS-safe aspect 
 * ratio structures, dynamic configuration constants, an authoritative corporate 
 * quote block, and an accessible call to action.
 */
?>
<section class="founder-section" id="leadership" aria-labelledby="founder-section-heading">
    <div class="container container-narrow">
        <!-- Section Title with custom structural layout -->
        <?php 
        $label = 'Dedicated Partner Stewardship';
        $title = 'Leadership Built on Trust, Expertise & Long-Term Relationships';
        $description = 'At Bhansali Associates, we believe that high-quality corporate advisory cannot be mass-produced. Our practice remains selectively partner-led to secure absolute statutory compliance and proactive strategic direction for select growing enterprises.';
        $alignment = 'text-center';
        $heading_level = 'h2';
        require ROOT_DIR . '/includes/components/section-title.php'; 
        ?>
        
        <!-- Two-Column Founder Grid (Desktop: 2 Columns, Tablet: 2 Columns, Mobile: 1 Column) -->
        <div class="founder-grid mt-large" id="homepage-founder-grid">
            <!-- CA Ashish Bhansali -->
            <div class="founder-card-wrapper" role="article" aria-label="Professional Profile of CA Ashish Bhansali">
                <?php 
                $name = FOUNDER_1_NAME;
                $role = FOUNDER_1_ROLE;
                $image_url = FOUNDER_1_IMAGE;
                $positioning_line = FOUNDER_1_POSITIONING;
                $linkedin_url = FOUNDER_1_LINKEDIN;
                $image_alt = 'CA Ashish Bhansali, Leading Strategic Tax & Corporate Advisory Expert of Bhansali Associates';
                require ROOT_DIR . '/includes/components/card-founder.php';
                ?>
            </div>

            <!-- Rajani Bhansali -->
            <div class="founder-card-wrapper" role="article" aria-label="Professional Profile of Rajani Bhansali">
                <?php 
                $name = FOUNDER_2_NAME;
                $role = FOUNDER_2_ROLE;
                $image_url = FOUNDER_2_IMAGE;
                $positioning_line = FOUNDER_2_POSITIONING;
                $linkedin_url = FOUNDER_2_LINKEDIN;
                $image_alt = 'Rajani Bhansali, Principal Audit & Corporate Compliance Specialist of Bhansali Associates';
                require ROOT_DIR . '/includes/components/card-founder.php';
                ?>
            </div>
        </div>

        <!-- Premium Advisory Quote Section (Below Cards) -->
        <div class="premium-quote-card flex flex-column justify-center mt-56" data-aos="fade-up" role="region" aria-label="Leadership advisory quote">
            <div class="quote-icon-bg" aria-hidden="true">
                <!-- Golden quotation mark water footprint -->
                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" opacity="0.08">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
            </div>
            <p class="quote-text">
                "<?php echo escape_html(FOUNDER_QUOTE_TEXT); ?>"
            </p>
            <cite class="quote-author">
                &mdash; <?php echo escape_html(FOUNDER_QUOTE_AUTHOR); ?>
            </cite>
        </div>

        <!-- Call to Action -->
        <div class="founder-cta-wrapper text-center">
            <a href="<?php echo escape_html(SITE_URL); ?>/about.php#leadership" 
               class="btn btn-primary ripple-ready" 
               id="founder-meet-leadership-cta"
               aria-label="Navigate to discover the full firm history and complete leadership structure details">
                Meet Our Leadership
            </a>
        </div>
    </div>
</section>
