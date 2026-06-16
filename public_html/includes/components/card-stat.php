<?php
/**
 * Statistics Counter Card Component (Premium)
 * 
 * Variables:
 * @param int $target_number
 * @param string $suffix (Optional) e.g., '+', 'M'
 * @param string $label
 * @param string $supporting_text (Optional)
 * @param string $icon_svg (Optional)
 */
?>
<div class="card-stat-premium" data-aos="fade-up">
    <?php if (!empty($icon_svg)): ?>
    <div class="stat-icon-wrapper" aria-hidden="true">
        <?php echo $icon_svg; ?>
    </div>
    <?php endif; ?>

    <div class="stat-value font-secondary mb-12">
        <!-- The JS counter targets the direct class below -->
        <span class="stat-counter text-display-lg font-bold" data-target="<?php echo (int) $target_number; ?>">0</span>
        <?php if (!empty($suffix)): ?>
            <span class="stat-suffix text-h2 ml-4 text-accent font-bold"><?php echo escape_html($suffix); ?></span>
        <?php endif; ?>
    </div>
    
    <h3 class="text-h4 text-primary font-semi-bold mb-8"><?php echo escape_html($label); ?></h3>
    
    <?php if (!empty($supporting_text)): ?>
        <p class="text-caption text-secondary mb-0"><?php echo escape_html($supporting_text); ?></p>
    <?php endif; ?>
</div>
