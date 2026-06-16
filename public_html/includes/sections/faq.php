<?php
/**
 * Homepage Frequently Asked Questions Section
 * 
 * Renders exactly 6 premium FAQ accordions under standard structural categories:
 * Audit, GST, Income Tax, Corporate Setup, CFO, and Strategy. Auto-generates
 * a dynamic structured JSON-LD FAQPage schema block for enhanced SEO indexing.
 */

$faq_list = [
    [
        'faq_id' => FAQ_1_ID,
        'question' => FAQ_1_Q,
        'answer' => FAQ_1_A
    ],
    [
        'faq_id' => FAQ_2_ID,
        'question' => FAQ_2_Q,
        'answer' => FAQ_2_A
    ],
    [
        'faq_id' => FAQ_3_ID,
        'question' => FAQ_3_Q,
        'answer' => FAQ_3_A
    ],
    [
        'faq_id' => FAQ_4_ID,
        'question' => FAQ_4_Q,
        'answer' => FAQ_4_A
    ],
    [
        'faq_id' => FAQ_5_ID,
        'question' => FAQ_5_Q,
        'answer' => FAQ_5_A
    ],
    [
        'faq_id' => FAQ_6_ID,
        'question' => FAQ_6_Q,
        'answer' => FAQ_6_A
    ]
];

// Compile structured JSON-LD FAQ Page metadata for premium search performance
$schema_data = [
    "@context" => "https://schema.org",
    "@type" => "FAQPage",
    "mainEntity" => []
];

foreach ($faq_list as $item) {
    $schema_data["mainEntity"][] = [
        "@type" => "Question",
        "name" => $item['question'],
        "acceptedAnswer" => [
            "@type" => "Answer",
            "text" => $item['answer']
        ]
    ];
}
?>

<!-- Schema Payload injection -->
<script type="application/ld+json">
<?php echo json_encode($schema_data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE); ?>
</script>

<section class="faq-section" id="faq" aria-labelledby="faq-section-heading">
    <div class="container">
        <!-- Reusable Section Title -->
        <?php 
        $label = 'Regulatory Intelligence FAQ';
        $title = 'Frequently Asked Questions';
        $description = 'Clear answers resolving statutory oversight parameters, corporate structures, and partner-led working capital support.';
        $alignment = 'text-center';
        $heading_level = 'h2';
        require ROOT_DIR . '/includes/components/section-title.php'; 
        ?>
        
        <!-- Accordion Segment wrapper -->
        <div class="faq-narrow-container mt-large">
            <div class="faq-container" id="homepage-faq-accordion" role="presentation">
                <?php foreach ($faq_list as $faq): ?>
                    <?php 
                    $faq_id = $faq['faq_id'];
                    $question = $faq['question'];
                    $answer = $faq['answer'];
                    require ROOT_DIR . '/includes/components/faq-item.php';
                    ?>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>
