<?php
/**
 * Featured Services Preview Section
 * 
 * Displays 6 core corporate services in an elegant grid with custom gold vector icons,
 * pristine copywriting, clear typographic hierarchy, and optimized accessible indicators.
 */

$featured_services = [
    [
        'id' => 'service-audit',
        'title' => 'Audit & Assurance',
        'link' => SITE_URL . '/services.php#audit',
        'link_text' => 'Explore Audits',
        'description' => 'Meticulous statutory, tax, and internal audits designed to ensure pristine compliance, financial soundness, and absolute stakeholder certitude.',
        'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-24 h-24" aria-hidden="true">
            <!-- Shield structure representation of asset protection -->
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(197, 160, 89, 0.05)" />
            <path d="m9 12 2 2 4-4" stroke-width="2" />
        </svg>'
    ],
    [
        'id' => 'service-gst',
        'title' => 'GST Services',
        'link' => SITE_URL . '/services.php#gst',
        'link_text' => 'Explore GST',
        'description' => 'End-to-end Indirect Tax advisory, systemic GST compliance, credit optimization, and representation before statutory authorities.',
        'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-24 h-24" aria-hidden="true">
            <!-- Interconnected flow loops representing compliance flow -->
            <rect x="3" y="3" width="18" height="18" rx="2" stroke-width="1.5" />
            <path d="M21 12H3" />
            <path d="M12 3v18" />
            <circle cx="12" cy="12" r="4" fill="rgba(197, 160, 89, 0.1)" stroke-width="2" />
        </svg>'
    ],
    [
        'id' => 'service-tax',
        'title' => 'Income Tax',
        'link' => SITE_URL . '/services.php#tax',
        'link_text' => 'Explore Income Tax',
        'description' => 'Strategic direct tax planning, high-accuracy filing services, and structured legal advisory tailored for corporate and executive security.',
        'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-24 h-24" aria-hidden="true">
            <!-- Vault/Growth Pillar -->
            <path d="M12 1v22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            <circle cx="12" cy="12" r="10" stroke-opacity="0.1" />
        </svg>'
    ],
    [
        'id' => 'service-roc',
        'title' => 'ROC Compliance',
        'link' => SITE_URL . '/services.php#roc',
        'link_text' => 'Explore ROC',
        'description' => 'Accurate filing of annual statutory returns, seamless director mandates, corporate governance oversight, and legal record maintenance.',
        'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-24 h-24" aria-hidden="true">
            <!-- Corporate temple stability structure -->
            <path d="M3 21h18" stroke-width="2" />
            <path d="M5 21V10h14v11" />
            <path d="M12 3 3 10h18Z" fill="rgba(197, 160, 89, 0.05)" />
            <path d="M9 14v3" />
            <path d="M15 14v3" />
        </svg>'
    ],
    [
        'id' => 'service-cfo',
        'title' => 'Virtual CFO',
        'link' => SITE_URL . '/services.php#cfo',
        'link_text' => 'Explore Virtual CFO',
        'description' => 'Board-level strategic financial leadership, continuous cash flow modeling, analytical capital structures, and tactical growth consulting.',
        'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-24 h-24" aria-hidden="true">
            <!-- Advanced dynamic compass / navigation graph -->
            <path d="M3 3v18h18" stroke-width="2" />
            <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
            <circle cx="18.7" cy="8" r="2" fill="var(--color-accent)" />
            <circle cx="10.8" cy="10.5" r="2" fill="var(--color-accent)" />
        </svg>'
    ],
    [
        'id' => 'service-finance',
        'title' => 'Loan & Project Finance',
        'link' => SITE_URL . '/services.php#finance',
        'link_text' => 'Explore Financing',
        'description' => 'Expert loan syndication, institutional CMA preparation, project appraisals, and strategic corporate capital structuring.',
        'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-24 h-24" aria-hidden="true">
            <!-- Bridge / Building block showing structural support -->
            <path d="M22 17H2" stroke-width="2" />
            <path d="M4 17a4 4 0 0 1 8 0h8a4 4 0 0 1 8 0" stroke-opacity="0.3" />
            <path d="M12 4v13" />
            <path d="M7 8.5 12 4l5 4.5" />
        </svg>'
    ]
];
?>
<section class="services-section" id="expertise" aria-labelledby="services-section-heading">
    <div class="container">
        <!-- Title component insertion -->
        <?php 
        $label = 'Distinguished Corporate Practices';
        $title = 'Specialized Advisory & Assurance Services';
        $description = 'Operational resilience begins with robust corporate governance. We deliver a cohesive suite of professional tax, compliance, and strategic financial advisory services led by dedicated leadership partners.';
        $alignment = 'text-center';
        $heading_level = 'h2';
        require ROOT_DIR . '/includes/components/section-title.php'; 
        ?>
        
        <div class="grid grid-3 mt-large" id="featured-services-grid">
            <?php foreach ($featured_services as $service): ?>
                <div class="card card-service hover-card bg-surface radius-lg transition-all" id="<?php echo escape_html($service['id']); ?>" data-aos="fade-up">
                    <div class="card-icon text-accent mb-24 flex-center">
                        <?php echo $service['icon_svg']; ?>
                    </div>
                    
                    <h3 class="text-h4 mb-16 text-primary">
                        <?php echo escape_html($service['title']); ?>
                    </h3>
                    
                    <p class="text-body text-secondary mb-24 flex-grow-1">
                        <?php echo escape_html($service['description']); ?>
                    </p>
                    
                    <div class="card-action mt-auto">
                        <a href="<?php echo escape_html($service['link']); ?>" 
                           class="btn btn-outline radius-sm hover-border-gold transition-all"
                           aria-label="Access dedicated resources and services for <?php echo escape_html($service['title']); ?>">
                            <?php echo escape_html($service['link_text']); ?>
                        </a>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
