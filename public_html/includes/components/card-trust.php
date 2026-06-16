<?php
/**
 * Why Choose Us Trust Card Component
 * 
 * Variables:
 * @param string $icon_svg
 * @param string $title
 * @param string $description
 */
?>
<div class="card-trust bg-surface border-radius-md" data-aos="fade-up">
    <?php if (!empty($icon_svg)): ?>
    <div class="trust-icon text-accent mb-20 flex-center">
        <?php echo $icon_svg; // Render raw SVG ?>
    </div>
    <?php endif; ?>
    
    <h3 class="text-h4 mb-16 text-primary"><?php echo escape_html($title); ?></h3>
    <p class="text-body text-secondary mb-0"><?php echo escape_html($description); ?></p>
</div>
