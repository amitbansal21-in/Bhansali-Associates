<?php
/**
 * Homepage Work Process (Our Advisory Process) Section
 * 
 * Renders exactly 5 sequential advisory phases in a highly customizable,
 * responsive visual timeline. Supports linear timeline layouts on desktops,
 * 2+2+1 wrapping blocks on tablets, and vertical timelines on mobiles.
 */

$process_steps = [
    [
        'step_num' => '01',
        'title' => 'Understand Your Requirements',
        'description' => 'Meticulous discovery sessions to map your operational footprint, corporate structure, and overarching compliance necessities with dedicated partner attention.',
        'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-24 h-24" aria-hidden="true">
            <circle cx="11" cy="11" r="8" fill="rgba(197, 160, 89, 0.05)" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" stroke-width="2" />
            <line x1="8" y1="11" x2="14" y2="11" stroke-width="1.5" />
        </svg>'
    ],
    [
        'step_num' => '02',
        'title' => 'Analyze & Plan',
        'description' => 'A methodical diagnostic review of historical filing records, statutory registries, and tax liabilities to design secure and legal execution runways.',
        'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-24 h-24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" fill="rgba(197, 160, 89, 0.05)" />
            <line x1="9" y1="17" x2="9" y2="9" stroke-width="2" />
            <line x1="12" y1="17" x2="12" y2="11" stroke-width="2" />
            <line x1="15" y1="17" x2="15" y2="13" stroke-width="2" />
        </svg>'
    ],
    [
        'step_num' => '03',
        'title' => 'Strategic Advisory',
        'description' => 'Formulating precise structural solutions, tax optimization pathways, working capital strategies, and corporate legal safety nets.',
        'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-24 h-24" aria-hidden="true">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke-width="1.8" />
            <circle cx="12" cy="12" r="10" stroke-opacity="0.1" fill="rgba(197, 160, 89, 0.03)" />
        </svg>'
    ],
    [
        'step_num' => '04',
        'title' => 'Execution & Compliance',
        'description' => 'Flawless performance of statutory audits, GST submissions, direct tax filings, and corporate returns under tight peer-review checks.',
        'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-24 h-24" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(197, 160, 89, 0.05)" />
            <polyline points="9 11 11 13 15 9" stroke-width="2" />
        </svg>'
    ],
    [
        'step_num' => '05',
        'title' => 'Continuous Support',
        'description' => 'Sustained stewardship, periodic sanity reviews, regular updates on compliance modifications, and representational advocacy whenever needed.',
        'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-24 h-24" aria-hidden="true">
            <circle cx="12" cy="12" r="10" fill="rgba(197, 160, 89, 0.05)" />
            <path d="m12 8-4 4 4 4" stroke-width="1.5" />
            <path d="M16 12H8" stroke-width="1.5" />
        </svg>'
    ]
];
?>
<section class="process-section" id="advisory-process" aria-labelledby="process-section-heading">
    <div class="container">
        <!-- Section title utilizing premium reusable framework -->
        <?php 
        $label = 'Linear Advisory Framework';
        $title = 'Our Advisory Process';
        $description = 'Excellence is guided by systematic rigor. We coordinate your statutory filings, compliance pathways, and corporate goals through our meticulously peer-reviewed advisory framework.';
        $alignment = 'text-center';
        $heading_level = 'h2';
        require ROOT_DIR . '/includes/components/section-title.php'; 
        ?>
        
        <!-- Structural timeline connector wrapper -->
        <div class="process-timeline-container">
            <!-- Absolute background path connector on Desktop -->
            <div class="process-timeline-line" aria-hidden="true"></div>
            
            <!-- Flexible timeline grid -->
            <div class="process-grid" id="homepage-process-grid">
                <?php foreach ($process_steps as $step): ?>
                    <?php 
                    $step_num = $step['step_num'];
                    $title = $step['title'];
                    $description = $step['description'];
                    $icon_svg = $step['icon_svg'];
                    require ROOT_DIR . '/includes/components/card-process.php';
                    ?>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>
