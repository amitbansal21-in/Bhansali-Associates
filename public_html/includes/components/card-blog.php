<?php
/**
 * Insights Blog Card Component (Premium)
 * 
 * Variables:
 * @param string $id Unique element string identification
 * @param string $title Article title
 * @param string $category Article category label
 * @param string $excerpt Short article abstract/excerpt
 * @param string $date Published date formatted string
 * @param string $reading_time Read duration estimation (e.g., '5 Min Read')
 * @param string $author Author full name
 * @param string $author_initials Short author visual watermark initials (e.g., 'AB')
 * @param string $image_url Path to the visual blog backdrop
 * @param string $link Destination routing target
 */
?>
<article class="card-blog-premium h-full" id="<?php echo escape_html($id); ?>" data-aos="fade-up">
    <!-- CLS-Safe Dynamic Header Image -->
    <div class="blog-media">
        <span class="blog-category-badge" aria-label="Category: <?php echo escape_html($category); ?>">
            <?php echo escape_html($category); ?>
        </span>
        <!-- Vector placeholders and real files loaded safely with 16:10 box -->
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10'%3E%3C/svg%3E" 
             data-src="<?php echo escape_html($image_url); ?>" 
             alt="Vignette banner illustrating <?php echo escape_html($title); ?>" 
             class="lazy-image">
    </div>

    <!-- Article Content -->
    <div class="blog-body">
        <!-- Article Meta -->
        <div class="blog-meta">
            <span class="blog-date">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <time datetime="<?php echo date('Y-m-d', strtotime($date)); ?>"><?php echo escape_html($date); ?></time>
            </span>
            <span class="blog-read-time">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <?php echo escape_html($reading_time); ?>
            </span>
        </div>

        <!-- Semantic Title with Anchor Links -->
        <h3 class="blog-title text-h4 font-bold" id="<?php echo escape_html($id); ?>-title">
            <a href="<?php echo escape_html($link); ?>" aria-describedby="<?php echo escape_html($id); ?>-title" class="link-premium">
                <?php echo escape_html($title); ?>
            </a>
        </h3>

        <!-- Article abstract placeholder with elegant limit spacing -->
        <p class="blog-excerpt text-secondary mb-24 font-light">
            <?php echo escape_html($excerpt); ?>
        </p>

        <!-- Dynamic card footer displaying writers and quick navigation links -->
        <div class="blog-footer">
            <div class="blog-author" aria-label="Article Author">
                <span class="blog-author-avatar" aria-hidden="true">
                    <?php echo escape_html($author_initials); ?>
                </span>
                <span class="blog-author-name">
                    <?php echo escape_html($author); ?>
                </span>
            </div>

            <!-- Focus and screen reader action triggers -->
            <a href="<?php echo escape_html($link); ?>" 
               class="blog-btn-more uppercase" 
               aria-labelledby="<?php echo escape_html($id); ?>-title"
               aria-label="Read complete publication: <?php echo escape_html($title); ?>">
                <span>Read More</span>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
    </div>
</article>
