<?php
/**
 * Advisory Process Step Card Component (Premium)
 * 
 * Variables:
 * @param string $step_num (e.g., '01', '02')
 * @param string $icon_svg Raw SVG vector string
 * @param string $title Step semantic title
 * @param string $description High-level premium copy supporting the step outcomes
 */
?>
<div class="card-process-wrapper" id="process-step-wrapper-<?php echo escape_html($step_num); ?>">
    <div class="card-process hover-card bg-surface w-full h-full" 
         role="article" 
         aria-labelledby="process-heading-<?php echo escape_html($step_num); ?>"
         data-aos="fade-up">
        
        <div class="process-step-num font-mono text-accent">
            Step <?php echo escape_html($step_num); ?>
        </div>
        
        <?php if (!empty($icon_svg)): ?>
        <div class="process-icon text-accent" aria-hidden="true">
            <?php echo $icon_svg; ?>
        </div>
        <?php endif; ?>
        
        <h3 class="process-title text-h4 text-primary font-secondary font-bold" id="process-heading-<?php echo escape_html($step_num); ?>">
            <?php echo escape_html($title); ?>
        </h3>
        
        <p class="process-desc text-secondary font-light">
            <?php echo escape_html($description); ?>
        </p>
    </div>
</div>
