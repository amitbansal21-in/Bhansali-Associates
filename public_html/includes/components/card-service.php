<?php
/**
 * Reusable Service Card Component
 * 
 * Variables:
 * @param string $icon_svg
 * @param string $title
 * @param string $description
 * @param string $link (Optional)
 * @param string $link_text (Optional)
 */
?>
<div class="card card-service hover-card bg-surface radius-lg transition-all" data-aos="fade-up">
    <?php if (!empty($icon_svg)): ?>
    <div class="card-icon text-accent mb-24 flex-center">
        <?php echo $icon_svg; // Render raw SVG ?>
    </div>
    <?php endif; ?>
    
    <h3 class="text-h4 mb-16 text-primary"><?php echo escape_html($title); ?></h3>
    <p class="text-body text-secondary mb-24 flex-grow-1"><?php echo escape_html($description); ?></p>
    
    <?php if (!empty($link)): ?>
    <div class="card-action mt-auto">
        <a href="<?php echo escape_html($link); ?>" class="btn btn-outline radius-sm hover-border-gold">
            <?php echo escape_html($link_text ?? 'Explore Service'); ?>
        </a>
    </div>
    <?php endif; ?>
</div>
