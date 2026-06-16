<?php
/**
 * Global Footer Architecture
 * Premium 4-column layout, mobile-first, ARIA compliant, future-ready.
 */

// Ensure config is accessible if accessed partially
require_once dirname(__DIR__) . '/config.php';
?>

<!-- Newsletter Placeholder / Additional CTA (Future implementation) -->
<!--
<section class="newsletter-section section-padding-sm background-surface-alt fade-up" aria-label="Newsletter Box">
    <div class="container container-fluid text-center">
        <h3 class="text-h3 text-primary">Stay Informed on Financial Regulatory Changes</h3>
        <form class="newsletter-form flex-center gap-16 mt-large max-width-600 mx-auto" aria-label="Subscribe to our newsletter">
            <label for="newsletter-email" class="visually-hidden">Email Address</label>
            <input type="email" id="newsletter-email" name="email" placeholder="Enter your email address" required aria-required="true" class="form-control radius-sm">
            <button type="submit" class="btn btn-primary radius-sm shadow-soft hover-button">Subscribe</button>
        </form>
    </div>
</section>
-->

<footer class="site-footer section-padding pb-0" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="visually-hidden">Site Footer</h2>
    
    <div class="container container-fluid">
        <!-- Main Footer Top (4 Columns) -->
        <div class="footer-widgets grid grid-4">
            
            <!-- Column 1: Brand & Philosophy -->
            <div class="footer-widget brand-widget">
                <a href="<?php echo escape_html(SITE_URL); ?>/" class="footer-logo d-block mb-24" aria-label="<?php echo escape_html(SITE_NAME); ?> Home">
                    <img src="<?php echo get_logo_url('inverse'); ?>" 
                         alt="<?php echo escape_html(SITE_NAME); ?>" 
                         width="200" 
                         height="40" 
                         class="logo-image-inverse">
                </a>
                <h3 class="visually-hidden"><?php echo escape_html(SITE_NAME); ?></h3>
                <p class="text-accent text-small font-medium uppercase tracking-wider mb-24">
                    <?php echo escape_html(SITE_TAGLINE); ?>
                </p>
                <p class="footer-intro text-body-small text-inverse-muted mb-32">
                    A premium Chartered Accountant firm providing strategic financial consulting, tax advisory, and enterprise audit services. We turn complex numbers into clear business advantages.
                </p>
                
                <!-- Trust Strip -->
                <ul class="trust-strip text-caption flex flex-column gap-12 text-inverse-alpha">
                    <li class="flex align-center gap-8">
                        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" class="text-accent"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                        Confidential Advisory
                    </li>
                    <li class="flex align-center gap-8">
                        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" class="text-accent"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>
                        Professional Excellence
                    </li>
                    <li class="flex align-center gap-8">
                        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" class="text-accent"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
                        Timely Compliance
                    </li>
                    <li class="flex align-center gap-8">
                        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" class="text-accent"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                        Client-Centric Approach
                    </li>
                </ul>
            </div>

            <!-- Column 2: Quick Links -->
            <div class="footer-widget links-widget">
                <h3 class="widget-title text-h4 text-inverse mb-24 font-secondary">Quick Links</h3>
                <ul class="widget-list flex flex-column gap-12">
                    <li><a href="<?php echo escape_html(SITE_URL); ?>/" class="footer-link">Home</a></li>
                    <li><a href="<?php echo escape_html(SITE_URL); ?>/about.php" class="footer-link">About</a></li>
                    <li><a href="<?php echo escape_html(SITE_URL); ?>/services.php" class="footer-link">Services</a></li>
                    <li><a href="<?php echo escape_html(SITE_URL); ?>/industries.php" class="footer-link">Industries</a></li>
                    <li><a href="<?php echo escape_html(SITE_URL); ?>/insights.php" class="footer-link">Insights</a></li>
                    <li><a href="<?php echo escape_html(SITE_URL); ?>/contact.php" class="footer-link">Contact</a></li>
                    <!-- Footer-only Legal Links -->
                    <li class="mt-16"><a href="<?php echo escape_html(SITE_URL); ?>/privacy-policy.php" class="footer-link text-small">Privacy Policy</a></li>
                    <li><a href="<?php echo escape_html(SITE_URL); ?>/terms-and-conditions.php" class="footer-link text-small">Terms & Conditions</a></li>
                    <li><a href="<?php echo escape_html(SITE_URL); ?>/disclaimer.php" class="footer-link text-small">Disclaimer</a></li>
                </ul>
            </div>

            <!-- Column 3: Core Services -->
            <div class="footer-widget services-widget">
                <h3 class="widget-title text-h4 text-inverse mb-24 font-secondary">Core Services</h3>
                <ul class="widget-list flex flex-column gap-12">
                    <li><a href="<?php echo escape_html(SITE_URL); ?>/services.php#audit" class="footer-link">Audit & Assurance</a></li>
                    <li><a href="<?php echo escape_html(SITE_URL); ?>/services.php#gst" class="footer-link">GST Services</a></li>
                    <li><a href="<?php echo escape_html(SITE_URL); ?>/services.php#income-tax" class="footer-link">Income Tax</a></li>
                    <li><a href="<?php echo escape_html(SITE_URL); ?>/services.php#roc" class="footer-link">ROC Compliance</a></li>
                    <li><a href="<?php echo escape_html(SITE_URL); ?>/services.php#incorporation" class="footer-link">Company Incorporation</a></li>
                    <li><a href="<?php echo escape_html(SITE_URL); ?>/services.php#startup" class="footer-link">Startup Advisory</a></li>
                    <li><a href="<?php echo escape_html(SITE_URL); ?>/services.php#cfoservices" class="footer-link">Virtual CFO</a></li>
                    <li><a href="<?php echo escape_html(SITE_URL); ?>/services.php#accounting" class="footer-link">Accounting</a></li>
                    <li><a href="<?php echo escape_html(SITE_URL); ?>/services.php#nri" class="footer-link">NRI Taxation</a></li>
                    <li><a href="<?php echo escape_html(SITE_URL); ?>/services.php#finance" class="footer-link">Project Finance</a></li>
                </ul>
            </div>

            <!-- Column 4: Contact Information -->
            <div class="footer-widget contact-widget">
                <h3 class="widget-title text-h4 text-inverse mb-24 font-secondary">Connect With Us</h3>
                <ul class="widget-contact flex flex-column gap-16">
                    <!-- Office Address -->
                    <li class="flex align-start gap-12 text-inverse-muted">
                        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" class="text-accent mt-4 shrink-0"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                        <span><?php echo escape_html(OFFICE_ADDRESS); ?></span>
                    </li>
                    <!-- Phone -->
                    <li class="flex align-center gap-12 text-inverse-muted">
                        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" class="text-accent shrink-0"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                        <div class="flex flex-column gap-4">
                            <a href="tel:<?php echo str_replace(' ', '', CONTACT_PHONE); ?>" class="footer-link text-inverse"><?php echo escape_html(CONTACT_PHONE); ?></a>
                            <a href="tel:<?php echo str_replace(' ', '', PHONE_SECONDARY); ?>" class="footer-link text-small"><?php echo escape_html(PHONE_SECONDARY); ?></a>
                        </div>
                    </li>
                    <!-- Email -->
                    <li class="flex align-center gap-12 text-inverse-muted">
                        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" class="text-accent shrink-0"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                        <a href="mailto:<?php echo escape_html(CONTACT_EMAIL); ?>" class="footer-link hover-glow-soft">
                            <?php echo escape_html(CONTACT_EMAIL); ?>
                        </a>
                    </li>
                    <!-- WhatsApp -->
                    <li class="flex align-center gap-12 text-inverse-muted">
                        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" class="text-success shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        <a href="https://wa.me/<?php echo str_replace('+', '', str_replace(' ', '', WHATSAPP_NUMBER)); ?>" target="_blank" rel="noopener noreferrer" class="footer-link hover-glow-soft">
                            Message on WhatsApp
                        </a>
                    </li>
                </ul>

                <!-- Office Hours -->
                <div class="office-hours mt-24">
                    <h4 class="text-caption text-inverse uppercase tracking-wider mb-8">Office Hours</h4>
                    <p class="text-small text-inverse-muted mb-0"><?php echo escape_html(OFFICE_HOURS); ?></p>
                </div>

                <!-- Social Icons / Future Integration Architecture -->
                <div class="social-links flex gap-12 mt-24">
                    <a href="<?php echo escape_html(SOCIAL_INSTAGRAM); ?>" class="social-icon flex-center hover-lift" aria-label="Follow us on Instagram">
                        <svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>
                </div>
            </div>

        </div>

        <!-- Main Footer Bottom (Copyright & Info) -->
        <div class="footer-bottom flex justify-between align-center section-padding-sm pb-16 pt-32 mt-48 text-small">
            <p class="copyright text-inverse-muted mb-0">
                &copy; <?php echo date('Y'); ?> <?php echo escape_html(SITE_NAME); ?>. All rights reserved.
            </p>
            
            <div class="footer-legal-links flex gap-24 font-medium">
                <!-- Future Language Switch Placeholder -->
                <!-- <div class="lang-switcher text-accent mr-16">Eng | <a href="?lang=hi" class="text-inverse-muted">Hi</a></div> -->
                
                <a href="<?php echo escape_html(SITE_URL); ?>/privacy-policy.php" class="footer-link">Privacy</a>
                <a href="<?php echo escape_html(SITE_URL); ?>/terms-and-conditions.php" class="footer-link">Terms</a>
                <a href="<?php echo escape_html(SITE_URL); ?>/sitemap.xml" class="footer-link">Sitemap</a>
            </div>
        </div>
    </div>
</footer>

<!-- Defer JavaScript Modules -->
<script type="module" src="<?php echo asset_url('js/main.js'); ?>"></script>
