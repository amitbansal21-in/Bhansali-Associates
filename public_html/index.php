<?php
// 1. Initialize Configuration
require_once __DIR__ . '/config.php';

// 2. Define Page-Specific SEO Variables
$page_title = 'Home';
$meta_description = 'Bhansali Associates is a premium Chartered Accountant firm providing strategic financial consulting, tax advisory, and audit services for enterprises.';
$canonical_url = SITE_URL . '/';

// Open Graph specifics can optionally be overridden here, 
// otherwise they fall back to default logic in seo.php.

// Local Business Schema Example for the homepage
$schema_markup = '{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "' . SITE_NAME . '",
  "image": "' . asset_url('images/logo/bhansali-logo-large.jpg') . '",
  "@id": "' . SITE_URL . '",
  "url": "' . SITE_URL . '",
  "telephone": "' . CONTACT_PHONE . '",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Luxury Corporate Park, Platinum Tower",
    "addressLocality": "Mumbai",
    "postalCode": "400001",
    "addressCountry": "IN"
  }
}';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Includes Meta tags, title, Open Graph, Twitter cards, and Schema -->
    <?php require_once ROOT_DIR . '/includes/seo.php'; ?>
    
    <!-- CSS Dependencies -->
    <link rel="stylesheet" href="<?php echo asset_url('css/style.css'); ?>">
    <link rel="stylesheet" href="<?php echo asset_url('css/animations.css'); ?>">
    <link rel="stylesheet" href="<?php echo asset_url('css/responsive.css'); ?>">
</head>
<body>
    <!-- Accessibility Skip Link -->
    <a href="#main-content" class="skip-link">Skip to content</a>

    <!-- Header & Navigation Include -->
    <?php require_once ROOT_DIR . '/includes/header.php'; ?>

    <!-- Main Content Area -->
    <main id="main-content" class="site-main">
        <!-- Homepage Hero Section -->
        <?php require_once ROOT_DIR . '/includes/sections/hero.php'; ?>

        <!-- Featured Services Preview Section -->
        <?php require_once ROOT_DIR . '/includes/sections/services-preview.php'; ?>

        <!-- Why Choose Us Section -->
        <?php require_once ROOT_DIR . '/includes/sections/why-choose.php'; ?>

        <!-- Statistics Counter Section -->
        <?php require_once ROOT_DIR . '/includes/sections/stats.php'; ?>

        <!-- Leadership Founder Preview Section -->
        <?php require_once ROOT_DIR . '/includes/sections/founder-preview.php'; ?>

        <!-- Industries We Serve Section -->
        <?php require_once ROOT_DIR . '/includes/sections/industries.php'; ?>

        <!-- Work Process Section -->
        <?php require_once ROOT_DIR . '/includes/sections/work-process.php'; ?>

        <!-- Insights Preview Section -->
        <?php require_once ROOT_DIR . '/includes/sections/insights.php'; ?>

        <!-- Frequently Asked Questions Section -->
        <?php require_once ROOT_DIR . '/includes/sections/faq.php'; ?>

        <!-- Final Consultation CTA Section -->
        <?php require_once ROOT_DIR . '/includes/sections/consultation-cta.php'; ?>
    </main>

    <!-- Footer & Scripts Include -->
    <?php require_once ROOT_DIR . '/includes/footer.php'; ?>
</body>
</html>
