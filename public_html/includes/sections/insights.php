<?php
/**
 * Homepage Insights & Knowledge Centre Preview Section
 * 
 * Renders exactly 3 premium blog summaries with semantic article elements,
 * custom-styled badges, author attribution tags, and full ARIA support.
 */

$insights_posts = [
    [
        'id' => BLOG_1_ID,
        'title' => BLOG_1_TITLE,
        'category' => BLOG_1_CATEGORY,
        'excerpt' => BLOG_1_EXCERPT,
        'date' => BLOG_1_DATE,
        'reading_time' => BLOG_1_READ,
        'author' => BLOG_1_AUTHOR,
        'author_initials' => BLOG_1_INITIALS,
        'image_url' => BLOG_1_IMAGE,
        'link' => SITE_URL . '/insights.php#' . BLOG_1_ID
    ],
    [
        'id' => BLOG_2_ID,
        'title' => BLOG_2_TITLE,
        'category' => BLOG_2_CATEGORY,
        'excerpt' => BLOG_2_EXCERPT,
        'date' => BLOG_2_DATE,
        'reading_time' => BLOG_2_READ,
        'author' => BLOG_2_AUTHOR,
        'author_initials' => BLOG_2_INITIALS,
        'image_url' => BLOG_2_IMAGE,
        'link' => SITE_URL . '/insights.php#' . BLOG_2_ID
    ],
    [
        'id' => BLOG_3_ID,
        'title' => BLOG_3_TITLE,
        'category' => BLOG_3_CATEGORY,
        'excerpt' => BLOG_3_EXCERPT,
        'date' => BLOG_3_DATE,
        'reading_time' => BLOG_3_READ,
        'author' => BLOG_3_AUTHOR,
        'author_initials' => BLOG_3_INITIALS,
        'image_url' => BLOG_3_IMAGE,
        'link' => SITE_URL . '/insights.php#' . BLOG_3_ID
    ]
];
?>
<section class="insights-section bg-surface-alt" id="insights" aria-labelledby="insights-section-heading">
    <div class="container">
        <!-- Reusable Section Title Component -->
        <?php 
        $label = 'Regulatory Intelligence & Advisory';
        $title = 'Insights & Knowledge Centre';
        $description = 'Operational resilience relies on deep, proactive understanding. Explore curated briefs detailing immediate tax reforms, corporate compliance updates, and Virtal CFO strategical guidance.';
        $alignment = 'text-center';
        $heading_level = 'h2';
        require ROOT_DIR . '/includes/components/section-title.php'; 
        ?>
        
        <!-- 3-Column Blog Grid (Desktop: 3 Columns, Tablet: 2 Columns, Mobile: 1 Column) -->
        <div class="insights-grid" id="homepage-insights-grid">
            <?php foreach ($insights_posts as $post): ?>
                <?php 
                $id = $post['id'];
                $title = $post['title'];
                $category = $post['category'];
                $excerpt = $post['excerpt'];
                $date = $post['date'];
                $reading_time = $post['reading_time'];
                $author = $post['author'];
                $author_initials = $post['author_initials'];
                $image_url = $post['image_url'];
                $link = $post['link'];
                require ROOT_DIR . '/includes/components/card-blog.php';
                ?>
            <?php endforeach; ?>
        </div>
    </div>
</section>
