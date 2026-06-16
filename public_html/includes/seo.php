<?php
/**
 * SEO & Metadata Architecture
 * 
 * Included within the <head> of every page.
 * Requires variable declaration BEFORE inclusion.
 */

// Include config if not already loaded
require_once dirname(__DIR__) . '/config.php';

// Dynamically handle variables with fallbacks to defaults
$seo_title       = isset($page_title) ? $page_title . ' | ' . SITE_NAME : SITE_NAME . ' | ' . SITE_TAGLINE;
$seo_description = isset($meta_description) ? $meta_description : 'Bhansali Associates is a premium Chartered Accountant firm providing strategic financial consulting, tax advisory, and audit services.';

$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
$http_host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'localhost';
$request_uri = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '/';
$seo_canonical   = isset($canonical_url) ? $canonical_url : $protocol . '://' . $http_host . $request_uri;

// Open Graph Data
$og_title       = isset($open_graph_title) ? $open_graph_title : $seo_title;
$og_description = isset($open_graph_description) ? $open_graph_description : $seo_description;
$og_image       = isset($open_graph_image) ? $open_graph_image : asset_url('images/logo/og-default.jpg');

// Twitter Card
$twitter_card_type = isset($twitter_card) ? $twitter_card : 'summary_large_image';

?>

<!-- Basic Meta Tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
<title><?php echo escape_html($seo_title); ?></title>
<meta name="description" content="<?php echo escape_html($seo_description); ?>">
<meta name="author" content="<?php echo escape_html(SITE_NAME); ?>">
<link rel="canonical" href="<?php echo escape_html($seo_canonical); ?>">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="<?php echo escape_html($seo_canonical); ?>">
<meta property="og:title" content="<?php echo escape_html($og_title); ?>">
<meta property="og:description" content="<?php echo escape_html($og_description); ?>">
<meta property="og:image" content="<?php echo escape_html($og_image); ?>">

<!-- Twitter -->
<meta name="twitter:card" content="<?php echo escape_html($twitter_card_type); ?>">
<meta name="twitter:url" content="<?php echo escape_html($seo_canonical); ?>">
<meta name="twitter:title" content="<?php echo escape_html($og_title); ?>">
<meta name="twitter:description" content="<?php echo escape_html($og_description); ?>">
<meta name="twitter:image" content="<?php echo escape_html($og_image); ?>">

<!-- Favicon System (Placeholders for future generation) -->
<link rel="icon" type="image/svg+xml" href="<?php echo asset_url('images/logo/favicon.svg'); ?>">
<link rel="icon" type="image/png" sizes="32x32" href="<?php echo asset_url('images/logo/favicon-32x32.png'); ?>">
<link rel="icon" type="image/png" sizes="16x16" href="<?php echo asset_url('images/logo/favicon-16x16.png'); ?>">
<link rel="apple-touch-icon" sizes="180x180" href="<?php echo asset_url('images/logo/apple-touch-icon.png'); ?>">
<?php 
$manifest_base = rtrim(dirname(isset($_SERVER['SCRIPT_NAME']) ? $_SERVER['SCRIPT_NAME'] : '/index.php'), '/\\');
?>
<link rel="manifest" href="<?php echo $manifest_base; ?>/site.webmanifest">

<!-- Dynamic Schema Markup Placeholder -->
<?php if (isset($schema_markup)): ?>
<!-- Page Specific Schema -->
<script type="application/ld+json">
<?php echo $schema_markup; ?>
</script>
<?php endif; ?>
