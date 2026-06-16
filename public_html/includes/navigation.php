<?php
/**
 * Primary Navigation Architecture
 * Fully accessible, mobile-first, and mega-menu ready.
 */

// Helper to determine the current active page for ARIA and visual states
$current_page = basename($_SERVER['PHP_SELF']);
?>

<nav id="primary-nav" class="primary-navigation" aria-label="Main Navigation">
    <div class="nav-inner">
        <ul class="nav-list flex">
            <!-- Home -->
            <li class="nav-item">
                <a href="<?php echo escape_html(SITE_URL); ?>/" 
                   class="nav-link nav-link-premium <?php echo $current_page == 'index.php' ? 'is-active' : ''; ?>"
                   <?php echo $current_page == 'index.php' ? 'aria-current="page"' : ''; ?>>
                    Home
                </a>
            </li>

            <!-- About -->
            <li class="nav-item">
                <a href="<?php echo escape_html(SITE_URL); ?>/about.php" 
                   class="nav-link nav-link-premium <?php echo $current_page == 'about.php' ? 'is-active' : ''; ?>"
                   <?php echo $current_page == 'about.php' ? 'aria-current="page"' : ''; ?>>
                    Firm Profile
                </a>
            </li>

            <!-- Services (Mega Menu Ready) -->
            <li class="nav-item has-dropdown">
                <a href="<?php echo escape_html(SITE_URL); ?>/services.php" 
                   class="nav-link nav-link-premium dropdown-trigger <?php echo $current_page == 'services.php' ? 'is-active' : ''; ?>"
                   aria-haspopup="true" 
                   aria-expanded="false"
                   <?php echo $current_page == 'services.php' ? 'aria-current="page"' : ''; ?>>
                    Expertise
                    <svg class="dropdown-icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M7 10l5 5 5-5z"/>
                    </svg>
                </a>
                
                <!-- Future Mega Menu Placeholder (GPU translated, not max-height) -->
                <div class="dropdown-menu shadow-lg radius-md" aria-label="Expertise Submenu">
                    <ul class="dropdown-list">
                        <li><a href="<?php echo escape_html(SITE_URL); ?>/services.php#audit" class="dropdown-link nav-link-premium">Audit & Assurance</a></li>
                        <li><a href="<?php echo escape_html(SITE_URL); ?>/services.php#tax" class="dropdown-link nav-link-premium">Tax Advisory</a></li>
                        <li><a href="<?php echo escape_html(SITE_URL); ?>/services.php#consulting" class="dropdown-link nav-link-premium">Financial Consulting</a></li>
                    </ul>
                </div>
            </li>

            <!-- Industries -->
            <li class="nav-item">
                <a href="<?php echo escape_html(SITE_URL); ?>/industries.php" 
                   class="nav-link nav-link-premium <?php echo $current_page == 'industries.php' ? 'is-active' : ''; ?>"
                   <?php echo $current_page == 'industries.php' ? 'aria-current="page"' : ''; ?>>
                    Industries
                </a>
            </li>

            <!-- Insights -->
            <li class="nav-item">
                <a href="<?php echo escape_html(SITE_URL); ?>/insights.php" 
                   class="nav-link nav-link-premium <?php echo $current_page == 'insights.php' ? 'is-active' : ''; ?>"
                   <?php echo $current_page == 'insights.php' ? 'aria-current="page"' : ''; ?>>
                    Insights
                </a>
            </li>
        </ul>

        <!-- Mobile CTAs (Only visible on mobile drawer) -->
        <div class="mobile-nav-ctas flex flex-column gap-16 hidden-desktop mt-large">
            <a href="tel:<?php echo str_replace(' ', '', CONTACT_PHONE); ?>" 
               class="btn btn-outline mobile-phone-cta flex-center radius-sm" 
               aria-label="Call Us at <?php echo escape_html(CONTACT_PHONE); ?>">
                <?php echo escape_html(CONTACT_PHONE); ?>
            </a>
            <a href="<?php echo escape_html(SITE_URL); ?>/contact.php" 
               class="btn btn-primary mobile-consultation-cta flex-center radius-sm shadow-md">
                Book Consultation
            </a>
        </div>
    </div>
</nav>

<!-- Nav Overlay for Focus Trapping & Obscuring Content -->
<div class="nav-overlay fade-in" id="nav-overlay" aria-hidden="true" tabindex="-1"></div>
