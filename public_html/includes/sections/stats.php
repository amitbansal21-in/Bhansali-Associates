<?php
/**
 * Corporate Operations Statistics Section
 * 
 * Showcases 4 premium statistics counters with intersection observer triggers,
 * customized vector iconography, and descriptive business labels. All values 
 * are configurable in the global configuration layer.
 */

$stats_data = [
    [
        'target_number' => STAT_1_TARGET,
        'suffix' => STAT_1_SUFFIX,
        'label' => STAT_1_LABEL,
        'supporting_text' => STAT_1_SUB,
        'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-24 h-24" aria-hidden="true">
            <!-- Dynamic network hub representing clients served -->
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" fill="rgba(197, 160, 89, 0.05)" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>'
    ],
    [
        'target_number' => STAT_2_TARGET,
        'suffix' => STAT_2_SUFFIX,
        'label' => STAT_2_LABEL,
        'supporting_text' => STAT_2_SUB,
        'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-24 h-24" aria-hidden="true">
            <!-- Folder stamp representation for compliance -->
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" fill="rgba(197, 160, 89, 0.05)" />
            <path d="m9 14 2 2 4-4" stroke-width="1.8" />
        </svg>'
    ],
    [
        'target_number' => STAT_3_TARGET,
        'suffix' => STAT_3_SUFFIX,
        'label' => STAT_3_LABEL,
        'supporting_text' => STAT_3_SUB,
        'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-24 h-24" aria-hidden="true">
            <!-- Document seal representing legal status -->
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="rgba(197, 160, 89, 0.05)" />
            <polyline points="14 2 14 8 20 8" />
            <circle cx="10" cy="15" r="2" />
            <path d="M16 13a4 4 0 0 0-8 0" />
        </svg>'
    ],
    [
        'target_number' => STAT_4_TARGET,
        'suffix' => STAT_4_SUFFIX,
        'label' => STAT_4_LABEL,
        'supporting_text' => STAT_4_SUB,
        'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-24 h-24" aria-hidden="true">
            <!-- Shield with standard check representing track record -->
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(197, 160, 89, 0.05)" />
            <circle cx="12" cy="12" r="3" />
        </svg>'
    ]
];
?>
<section class="stats-section bg-surface-alt" id="stats-overview" aria-labelledby="stats-section-heading">
    <div class="container">
        <!-- Reusable Title Component -->
        <?php 
        $label = 'Validating Proven Leadership';
        $title = 'Integrity in Quantifiable Outcomes';
        $description = 'Operational security isn’t asserted; it is demonstrated. Across decades of client practice, we deliver statutory adherence and advisory depth.';
        $alignment = 'text-center';
        $heading_level = 'h2';
        require ROOT_DIR . '/includes/components/section-title.php'; 
        ?>
        
        <!-- Stats Cards Grid: Desktop (4 Columns), Tablet (2 Columns), Mobile (1 Column) -->
        <div class="grid grid-4 mt-large" id="stats-cards-grid">
            <?php foreach ($stats_data as $stat): ?>
                <?php 
                $target_number = $stat['target_number'];
                $suffix = $stat['suffix'];
                $label = $stat['label'];
                $supporting_text = $stat['supporting_text'];
                $icon_svg = $stat['icon_svg'];
                require ROOT_DIR . '/includes/components/card-stat.php';
                ?>
            <?php endforeach; ?>
        </div>
    </div>
</section>
