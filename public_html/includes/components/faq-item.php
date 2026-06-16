<?php
/**
 * Reusable FAQ Item Component
 * 
 * Variables:
 * @param string $faq_id - Unique string for ARIA tying
 * @param string $question
 * @param string $answer
 */
?>
<div class="faq-item" id="faq-<?php echo escape_html($faq_id); ?>">
    <button type="button" class="faq-trigger" aria-expanded="false" aria-controls="faq-content-<?php echo escape_html($faq_id); ?>">
        <span class="faq-question"><?php echo escape_html($question); ?></span>
        <span class="faq-icon text-accent flex-center ml-16 shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 9l6 6 6-6"/>
            </svg>
        </span>
    </button>
    <div class="faq-content" id="faq-content-<?php echo escape_html($faq_id); ?>" role="region" aria-labelledby="faq-<?php echo escape_html($faq_id); ?>">
        <div class="faq-content-inner text-body lh-loose text-secondary pb-24">
            <?php echo escape_html($answer); ?>
        </div>
    </div>
</div>
