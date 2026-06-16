<?php
/**
 * Why Choose Bhansali Associates Section
 * 
 * Showcases 4 main brand pillars (Trust, Expertise, Precision, Partnership) 
 * in a responsive 4-column grid with premium typography and accessible vectors.
 */

$trust_pillars = [
    [
        'title' => 'Integrated Financial Expertise',
        'description' => 'Our highly qualified team synchronizes tax, compliance, audits, and business planning to optimize financial operations seamlessly.',
        'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12" aria-hidden="true">
            <!-- Overlocking concentric circles representing integrated specialties -->
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="rgba(197, 160, 89, 0.05)" />
            <path d="M2 12h20" />
        </svg>'
    ],
    [
        'title' => 'Precision & Compliance',
        'description' => 'A methodical dual-layered partner review on every single audit and statutory submission ensures flawless accuracy in every report.',
        'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12" aria-hidden="true">
            <!-- Classic calibration node representing regulatory precision -->
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" fill="rgba(197, 160, 89, 0.05)" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" stroke-width="2" />
        </svg>'
    ],
    [
        'title' => 'Strategic Business Advisory',
        'description' => 'Proactive guidance on structuring operations, optimizing working capital, and designing modern corporate legal frameworks.',
        'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12" aria-hidden="true">
            <!-- Compass representing direction and business scaling -->
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="rgba(197, 160, 89, 0.08)" />
        </svg>'
    ],
    [
        'title' => 'Long-Term Client Partnership',
        'description' => 'Our partners act as quiet, advisory stewards of your firm, protecting your corporate legacy and operations for decades.',
        'icon_svg' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12" aria-hidden="true">
            <!-- Interlocked shield/handshake nodes -->
            <path d="M5 12h14" />
            <path d="M12 5v14" />
            <circle cx="12" cy="12" r="6" fill="rgba(197, 160, 89, 0.05)" stroke-width="2" />
            <circle cx="12" cy="12" r="9" />
        </svg>'
    ]
];
?>
<section class="why-choose-section" id="why-choose-us" aria-labelledby="why-choose-heading">
    <div class="container">
        <!-- Reusable Title Component -->
        <?php 
        $label = 'The Foundation of Our Care';
        $title = 'Why Prominent Enterprises Select Us';
        $description = 'Integrity and quiet excellence structure everything we do. We align our multi-disciplinary practices to secure and streamline your financial operations.';
        $alignment = 'text-center';
        $heading_level = 'h2';
        require ROOT_DIR . '/includes/components/section-title.php'; 
        ?>
        
        <!-- Trust Cards Grid: Desktop (4 Columns), Tablet (2 Columns), Mobile (1 Column) -->
        <div class="grid grid-4 mt-large" id="why-choose-grid">
            <?php foreach ($trust_pillars as $pillar): ?>
                <div class="card-trust bg-surface border-radius-md" data-aos="fade-up">
                    <?php if (!empty($pillar['icon_svg'])): ?>
                    <div class="trust-icon text-accent mb-20 flex-center">
                        <?php echo $pillar['icon_svg']; ?>
                    </div>
                    <?php endif; ?>
                    
                    <h3 class="text-h4 mb-16 text-primary"><?php echo escape_html($pillar['title']); ?></h3>
                    <p class="text-body text-secondary mb-0"><?php echo escape_html($pillar['description']); ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
