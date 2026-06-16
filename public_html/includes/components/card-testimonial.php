<?php
/**
 * Testimonial Card Component
 * 
 * Variables:
 * @param string $quote
 * @param string $author_name
 * @param string $author_title
 */
?>
<div class="card card-testimonial hover-lift shadow-sm bg-surface-alt" data-aos="fade-up">
    <svg class="quote-icon" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
    </svg>
    <div class="testimonial-content position-relative z-1">
        <p class="text-body-large text-primary font-secondary font-italic mb-32 lh-loose">
            "<?php echo escape_html($quote); ?>"
        </p>
        <div class="testimonial-author flex align-center gap-16">
            <div class="author-avatar bg-primary radius-full flex-center text-surface font-bold text-small shrink-0" style="width: 48px; height: 48px;">
                <?php echo strtoupper(substr($author_name, 0, 1)); ?>
            </div>
            <div class="author-meta">
                <h4 class="text-h6 text-primary mb-4"><?php echo escape_html($author_name); ?></h4>
                <p class="text-caption text-secondary uppercase tracking-wider mb-0"><?php echo escape_html($author_title); ?></p>
            </div>
        </div>
    </div>
</div>
