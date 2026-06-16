<?php
/**
 * Reusable Section Title Component
 * 
 * Variables:
 * @param string $label (Optional)
 * @param string $title
 * @param string $description (Optional)
 * @param string $alignment (Optional) - 'text-left', 'text-center', 'text-right'
 * @param string $heading_level (Optional) - 'h2', 'h1', etc. Default 'h2'.
 */
$align_class = $alignment ?? 'text-left';
$tag = $heading_level ?? 'h2';
?>
<div class="section-header <?php echo escape_html($align_class); ?>">
    <?php if (!empty($label)): ?>
        <span class="section-label"><?php echo escape_html($label); ?></span>
    <?php endif; ?>
    
    <<?php echo $tag; ?> class="section-title text-display-lg text-primary mb-16">
        <?php echo escape_html($title); ?>
    </<?php echo $tag; ?>>
    
    <?php if (!empty($description)): ?>
        <p class="section-description text-body-large text-secondary max-width-800 <?php echo $align_class === 'text-center' ? 'mx-auto' : ''; ?>">
            <?php echo escape_html($description); ?>
        </p>
    <?php endif; ?>
</div>
