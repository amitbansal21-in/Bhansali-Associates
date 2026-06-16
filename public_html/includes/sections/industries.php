<?php
/**
 * Homepage Industries We Serve Section
 * 
 * Displays 6 corporate and strategic sector cards mapping specialized 
 * capabilities in a responsive grid layout. Fully accessible, clean, 
 * search-engine optimized, and completely dynamic.
 */

$industries_data = [
    [
        'id' => 'ind-mfg',
        'title' => 'Manufacturing',
        'link' => SITE_URL . '/industries.php#manufacturing',
        'link_text' => 'Read manufacturing compliance and costing advisory services',
        'description' => 'Optimizing multi-tier product costing models, fixed asset registers, complex warehouse inventory valuations, and statutory multi-state GST compliance.',
        'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-24 h-24" aria-hidden="true">
            <!-- Factory / Industrial profile -->
            <path d="M2 20V10l4-3 4 3 4-3 4 3 4-3v13H2Z" fill="rgba(197, 160, 89, 0.05)" stroke-width="1.8"/>
            <path d="M6 17v-3"/>
            <path d="M10 17v-3"/>
            <path d="M14 17v-3"/>
            <path d="M18 17v-3"/>
        </svg>'
    ],
    [
        'id' => 'ind-re',
        'title' => 'Real Estate & Construction',
        'link' => SITE_URL . '/industries.php#real-estate',
        'link_text' => 'Read RERA compliance and real estate taxation services',
        'description' => 'Structuring RERA audit frameworks, project-level cash flow modeling, Joint Development Agreement (JDA) taxation, and complex input tax credit verification.',
        'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-24 h-24" aria-hidden="true">
            <!-- Modular high rise building vectors -->
            <rect x="3" y="3" width="7" height="18" rx="1" fill="rgba(197, 160, 89, 0.05)"/>
            <rect x="14" y="9" width="7" height="12" rx="1" />
            <path d="M6 7h1"/>
            <path d="M6 11h1"/>
            <path d="M6 15h1"/>
            <path d="M17 13h1"/>
            <path d="M17 17h1"/>
        </svg>'
    ],
    [
        'id' => 'ind-tech',
        'title' => 'Startups & Technology',
        'link' => SITE_URL . '/industries.php#startups-tech',
        'link_text' => 'Read startup virtual CFO and cap table advisory services',
        'description' => 'Supporting high-growth teams with Virtual CFO services, robust cap table structuring, ESOP taxation architectures, and preparing for institutional funding rounds.',
        'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-24 h-24" aria-hidden="true">
            <!-- Rocket Launch / Fast Ascent path representing scale -->
            <path d="M4.5 16.5c-1.5 1.5-2.5 3.5-2.5 5.5C4 22 6 21 7.5 19.5" />
            <path d="M12 2C6 2 2 6 2 12c0 3 1.5 5.5 3.5 7.5l11-11C14.5 3.5 12 2 12 2Z" fill="rgba(197, 160, 89, 0.05)" />
            <path d="M19 5l-1.5 1.5M22 8l-2 2M15 2l1.5 1.5" />
            <circle cx="12" cy="8" r="1.5" fill="var(--color-accent)"/>
        </svg>'
    ],
    [
        'id' => 'ind-trading',
        'title' => 'Trading & Distribution',
        'link' => SITE_URL . '/industries.php#trading-distribution',
        'link_text' => 'Read supply chain inventory and logistics tax services',
        'description' => 'Streamlining high-velocity supply chain ledger audits, multi-region compliance mapping, inventory reconciliation controls, and robust internal audit oversight.',
        'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-24 h-24" aria-hidden="true">
            <!-- Distribution grid vector -->
            <rect x="3" y="14" width="7" height="7" rx="1"/>
            <rect x="14" y="3" width="7" height="7" rx="1"/>
            <path d="M10 17.5h4c2 0 3-1 3-3v-4.5" stroke-dasharray="2 2" stroke-width="1.5"/>
            <polygon points="10 17.5 7 15 7 20 10 17.5" fill="var(--color-primary)" stroke-width="1"/>
            <circle cx="17" cy="17" r="4" fill="rgba(197, 160, 89, 0.05)"/>
        </svg>'
    ],
    [
        'id' => 'ind-health',
        'title' => 'Healthcare & Professionals',
        'link' => SITE_URL . '/industries.php#healthcare-professionals',
        'link_text' => 'Read doctor and professional practice tax planning services',
        'description' => 'Maximizing operational efficiency with expert direct tax planning, customized medical/clinical practitioner consulting, and solid corporate governance guidance.',
        'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-24 h-24" aria-hidden="true">
            <!-- Activity/Practitioner signal -->
            <rect x="2" y="4" width="20" height="16" rx="2" fill="rgba(197, 160, 89, 0.05)" />
            <path d="M6 12h3l2-5 2 10 2-5h3" stroke-width="2"/>
        </svg>'
    ],
    [
        'id' => 'ind-nri',
        'title' => 'NRI & Global Business',
        'link' => SITE_URL . '/industries.php#nri-global',
        'link_text' => 'Read cross-border taxation and double tax avoidance treaty services',
        'description' => 'Navigating complex cross-border tax advisory channels, Double Taxation Avoidance Agreement (DTAA) compliance, and secure FCA/FEMA compliance setups.',
        'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-24 h-24" aria-hidden="true">
            <!-- Global / Cross border orbit coordinates -->
            <circle cx="12" cy="12" r="10" fill="rgba(197, 160, 89, 0.05)" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20M12 2a14.5 14.5 0 0 1 0 20" />
            <path d="M2 12h20" />
        </svg>'
    ]
];
?>
<section class="industries-section" id="sectors" aria-labelledby="industries-section-heading">
    <div class="container">
        <!-- Reusable Title Component -->
        <?php 
        $label = 'Tailored Sectional Practices';
        $title = 'Industries We Empower';
        $description = 'Operational resilience requires deep, sector-specific comprehension. We align our structural accounting, audit, and tax practices to support distinguished industries navigating complex compliance requirements.';
        $alignment = 'text-center';
        $heading_level = 'h2';
        require ROOT_DIR . '/includes/components/section-title.php'; 
        ?>
        
        <!-- Responsive Industry Grid (Desktop: 3 Columns, Tablet: 2 Columns, Mobile: 1 Column) -->
        <div class="grid grid-3 mt-large" id="homepage-industries-grid">
            <?php foreach ($industries_data as $industry): ?>
                <?php 
                $id = $industry['id'];
                $title = $industry['title'];
                $link = $industry['link'];
                $link_text = $industry['link_text'];
                $description = $industry['description'];
                $icon_svg = $industry['icon_svg'];
                require ROOT_DIR . '/includes/components/card-industry.php';
                ?>
            <?php endforeach; ?>
        </div>
    </div>
</section>
