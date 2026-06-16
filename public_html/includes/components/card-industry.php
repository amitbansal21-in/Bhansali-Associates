<?php
/**
 * Industry Card Component (Premium)
 * 
 * Renders a specialized industry sector card containing key vectors, semantic 
 * headers, custom descriptions, and accessible internal link anchors.
 * 
 * Variables:
 * @param string $id Unique string ID mapping for screen reader context
 * @param string $icon_svg Raw vector icon content
 * @param string $title Sector official branding label
 * @param string $description High-level premium copy describing industry expertise
 * @param string $link Destination routing parameter
 * @param string $link_text Accessibility-centric actionable label
 */
?>
<div class="card card-industry bg-surface border-radius-md" id="<?php echo escape_html($id); ?>" data-aos="fade-up">
    <!-- Icon representing Sector Domain -->
    <?php if (!empty($icon_svg)): ?>
    <div class="industry-icon-wrapper" aria-hidden="true">
        <?php echo $icon_svg; ?>
    </div>
    <?php endif; ?>

    <!-- Section Heading H3 for semantic crawlers -->
    <h3 class="industry-title text-h4 mb-16 text-primary" id="<?php echo escape_html($id); ?>-heading">
        <?php echo escape_html($title); ?>
    </h3>

    <!-- Premium Description -->
    <p class="text-body text-secondary mb-32 flex-grow-1">
        <?php echo escape_html($description); ?>
    </p>

    <!-- Accessible Link -->
    <a href="<?php echo escape_html($link); ?>" 
       class="industry-link link-premium" 
       aria-labelledby="<?php echo escape_html($id); ?>-heading"
       aria-label="<?php echo escape_html($link_text ?? 'Read sector capabilities for ' . $title); ?>">
        <span>Explore Sector</span>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
    </a>
</div>
