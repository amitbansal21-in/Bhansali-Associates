<?php
/**
 * Founder / Team Profile Card Component
 * 
 * Variables:
 * @param string $image_url
 * @param string $image_alt
 * @param string $name
 * @param string $role
 * @param string $positioning_line (Optional) Short premium positioning line for the founder
 * @param string $linkedin_url (Optional)
 */
?>
<div class="card card-founder radius-lg hover-card bg-surface shadow-soft flex flex-column h-full" data-aos="fade-up" style="border: 1px solid var(--color-border);">
    <div class="founder-image zoom-soft" style="aspect-ratio: 4/5; overflow: hidden; position: relative;">
        <!-- CLS-safe lazy loader image pattern -->
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3C/svg%3E" 
             data-src="<?php echo escape_html($image_url); ?>" 
             alt="<?php echo escape_html($image_alt ?? $name); ?>" 
             class="lazy-image w-full h-full object-cover"
             style="transition: transform var(--trans-normal) var(--ease-premium);">
    </div>
    <div class="founder-info text-center pt-24 pb-32 px-24 flex-grow-1 flex flex-column justify-between">
        <div>
            <h3 class="text-h4 text-primary mb-4 font-secondary font-bold" style="font-size: var(--text-h4);"><?php echo escape_html($name); ?></h3>
            <p class="text-accent text-small font-medium uppercase tracking-wider mb-12" style="font-size: var(--text-caption); letter-spacing: 0.1em;"><?php echo escape_html($role); ?></p>
            
            <?php if (!empty($positioning_line)): ?>
            <p class="text-secondary text-body mb-20 italic font-light" style="font-size: var(--text-body-small); line-height: var(--lh-base);">
                "<?php echo escape_html($positioning_line); ?>"
            </p>
            <?php endif; ?>
        </div>
        
        <?php if (!empty($linkedin_url) && $linkedin_url !== '#'): ?>
        <div class="mt-auto">
            <a href="<?php echo escape_html($linkedin_url); ?>" 
               target="_blank" rel="noopener noreferrer" 
               class="social-icon inline-flex flex-center hover-lift text-primary border-primary transition-all radius-full" 
               style="width:36px; height:36px; border:1px solid var(--color-border); margin:0 auto; display: inline-flex;"
               aria-label="<?php echo escape_html($name); ?> LinkedIn profile">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
        </div>
        <?php else: ?>
        <div class="mt-auto">
            <span class="social-icon inline-flex flex-center text-secondary radius-full opacity-40 cursor-not-allowed" 
                  style="width:36px; height:36px; border:1px solid var(--color-border); margin:0 auto; display: inline-flex;" 
                  title="Profile private"
                  aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="opacity-30"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </span>
        </div>
        <?php endif; ?>
    </div>
</div>
