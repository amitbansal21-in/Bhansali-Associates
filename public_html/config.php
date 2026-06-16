<?php
/**
 * Global Configuration File
 * Bhansali Associates - Premium CA Firm
 * 
 * This file contains global variables, site-wide constants, 
 * environment settings, and basic utility functions used across all pages.
 */

// Define absolute path constant for consistent root-based includes
define('ROOT_DIR', __DIR__);

// Site Identity
define('SITE_NAME', 'Bhansali Associates');
define('SITE_TAGLINE', 'Beyond Numbers, Building Trust');

$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
$http_host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'localhost';
$script_name = isset($_SERVER['SCRIPT_NAME']) ? $_SERVER['SCRIPT_NAME'] : '/index.php';

define(
    'SITE_URL',
    $protocol . '://' . $http_host . rtrim(dirname($script_name), '/\\')
);

// Contact Information
define('CONTACT_PHONE', '+91 98765 43210');
define('PHONE_SECONDARY', '+91 98765 00000');
define('WHATSAPP_NUMBER', '+91 98765 43210');
define('CONTACT_EMAIL', 'consult@bhansaliassociates.com');
define('OFFICE_ADDRESS', '123 Luxury Corporate Park, Platinum Tower, Mumbai, 400001, India');
define('OFFICE_HOURS', 'Mon - Sat: 9:00 AM - 7:00 PM');
define('GOOGLE_MAP_URL', 'https://goo.gl/maps/placeholder');

// Social Media Links (Empty placeholders for future integration)
define('SOCIAL_LINKEDIN', '#');
define('SOCIAL_TWITTER', '#');
define('SOCIAL_FACEBOOK', '#');
define('SOCIAL_INSTAGRAM', '#');

// Dynamic Operational Stat Variables to avoid hardcoding inside templates
define('STAT_1_TARGET', 500);
define('STAT_1_SUFFIX', '+');
define('STAT_1_LABEL', 'Business Clients Supported');
define('STAT_1_SUB', 'Active corporate partnerships and enterprises');

define('STAT_2_TARGET', 1200);
define('STAT_2_SUFFIX', '+');
define('STAT_2_LABEL', 'Tax & Compliance Engagements');
define('STAT_2_SUB', 'Statutory filings and annual certifications');

define('STAT_3_TARGET', 350);
define('STAT_3_SUFFIX', '+');
define('STAT_3_LABEL', 'Corporate Registrations Assisted');
define('STAT_3_SUB', 'Company formations and regulatory setups');

define('STAT_4_TARGET', 15);
define('STAT_4_SUFFIX', '+');
define('STAT_4_LABEL', 'Years of Professional Commitment');
define('STAT_4_SUB', 'Delivering partner-led advisory stability');

// Dynamic Founder Configurations (Dynamic paths and placeholders)
define('FOUNDER_1_NAME', 'CA Ashish Bhansali');
define('FOUNDER_1_ROLE', 'Founder');
define('FOUNDER_1_IMAGE', 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" fill="%230d111e"%3E%3Crect width="100%25" height="100%25" fill="%230c111e"/%3E%3Cpath d="M120,220 C160,250 240,250 280,220 C280,220 280,380 280,380 L120,380 Z" fill="%23c5a059" opacity="0.15"/%3E%3Ccircle cx="200" cy="170" r="60" fill="%23c5a059" opacity="0.25"/%3E%3Ctext x="50%25" y="85%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" fill="%23c5a059" opacity="0.75"%3ECA ASHISH BHANSALI%3C/text%3E%3C/svg%3E');
define('FOUNDER_1_LINKEDIN', '#'); // Safe empty placeholder or # to disable securely
define('FOUNDER_1_POSITIONING', 'Dedicated to engineering robust compliance frameworks and strategic corporate structures.');

define('FOUNDER_2_NAME', 'Rajani Bhansali');
define('FOUNDER_2_ROLE', 'Co-Founder');
define('FOUNDER_2_IMAGE', 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" fill="%230d111e"%3E%3Crect width="100%25" height="100%25" fill="%230c111e"/%3E%3Cpath d="M120,220 C160,250 240,250 280,220 C280,220 280,380 280,380 L120,380 Z" fill="%23c5a059" opacity="0.15"/%3E%3Ccircle cx="200" cy="170" r="60" fill="%23c5a059" opacity="0.25"/%3E%3Ctext x="50%25" y="85%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" fill="%23c5a059" opacity="0.75"%3ERAJANI BHANSALI%3C/text%3E%3C/svg%3E');
define('FOUNDER_2_LINKEDIN', '#'); // Safe empty placeholder or # to disable securely
define('FOUNDER_2_POSITIONING', 'Committed to meticulous peer-reviewed statutory audits and precise corporate governance guidance.');

define('FOUNDER_QUOTE_TEXT', 'The character of a premium practice resides not in mass operations, but in dedicated partner attention, meticulous statutory accuracy, and permanent corporate alignment.');
define('FOUNDER_QUOTE_AUTHOR', 'Bhansali Associates Leadership Council');

// Dynamic Blog Insights Configurations (Dynamic categories, authors, and dates)
define('BLOG_1_ID', 'post-gst-reforms');
define('BLOG_1_TITLE', 'Navigating Indirect Tax: Strategic GST Input Credit Management');
define('BLOG_1_CATEGORY', 'Taxation & Statutory');
define('BLOG_1_EXCERPT', 'Maximize enterprise liquidity through rigorous reconciliations, structured compliance audits, and proactive vendor risk assessments.');
define('BLOG_1_DATE', 'June 10, 2026');
define('BLOG_1_READ', '6 Min Read');
define('BLOG_1_AUTHOR', 'CA Ashish Bhansali');
define('BLOG_1_INITIALS', 'AB');
define('BLOG_1_IMAGE', 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="%230d111e"%3E%3Crect width="100%25" height="100%25" fill="%230c111e"/%3E%3Cpath d="M100,400 L300,200 L500,350 L700,100 L700,400 Z" fill="%23c5a059" opacity="0.08"/%3E%3Ccircle cx="400" cy="250" r="100" fill="%23c5a059" opacity="0.05"/%3E%3Ctext x="50%25" y="85%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%23c5a059" opacity="0.65"%3ETax & Credit Optimization%3C/text%3E%3C/svg%3E');

define('BLOG_2_ID', 'post-corporate-governance');
define('BLOG_2_TITLE', 'Strengthening Board Governance: Annual ROC Auditing Standards');
define('BLOG_2_CATEGORY', 'Corporate Governance');
define('BLOG_2_EXCERPT', 'Ensure pristine legal structures and compliance tracking. Detailed strategies to organize corporate registers and fulfill annual director mandates.');
define('BLOG_2_DATE', 'May 28, 2026');
define('BLOG_2_READ', '8 Min Read');
define('BLOG_2_AUTHOR', 'Rajani Bhansali');
define('BLOG_2_INITIALS', 'RB');
define('BLOG_2_IMAGE', 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="%230d111e"%3E%3Crect width="100%25" height="100%25" fill="%230c111e"/%3E%3Cpath d="M100,400 C300,150 500,450 700,200 L700,400 Z" fill="%23c5a059" opacity="0.08"/%3E%3Ccircle cx="400" cy="250" r="100" fill="%23c5a059" opacity="0.05"/%3E%3Ctext x="50%25" y="85%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%23c5a059" opacity="0.65"%3ECompliance & Audit Security%3C/text%3E%3C/svg%3E');

define('BLOG_3_ID', 'post-financial-modeling');
define('BLOG_3_TITLE', 'The Virtual CFO Blueprint: Scaling Capital Structures Safely');
define('BLOG_3_CATEGORY', 'Strategic Finance');
define('BLOG_3_EXCERPT', 'Navigate cash flow modeling, institutional CMA preparations, and debt syndication strategies designed for growing mid-market enterprises.');
define('BLOG_3_DATE', 'May 15, 2026');
define('BLOG_3_READ', '5 Min Read');
define('BLOG_3_AUTHOR', 'CA Ashish Bhansali');
define('BLOG_3_INITIALS', 'AB');
define('BLOG_3_IMAGE', 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="%230d111e"%3E%3Crect width="100%25" height="100%25" fill="%230c111e"/%3E%3Cpath d="M200,400 L200,150 L400,150 L400,400 L600,400 L600,250 Z" fill="%23c5a059" opacity="0.08"/%3E%3Ccircle cx="400" cy="250" r="100" fill="%23c5a059" opacity="0.05"/%3E%3Ctext x="50%25" y="85%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%23c5a059" opacity="0.65"%3EScalable Capital Modeling%3C/text%3E%3C/svg%3E');

// Dynamic FAQ Items
define('FAQ_1_ID', 'audit-reliability');
define('FAQ_1_Q', 'How does your peer-reviewed audit approach ensure statutory reliability?');
define('FAQ_1_A', 'Every statutory audit is directed by a principal partner under strict internal peer-review guidelines. We verify transactional authenticity, evaluate internal controls, and align auditing methodologies with current ICAI standards, ensuring absolute transparency.');

define('FAQ_2_ID', 'gst-credit-compliance');
define('FAQ_2_Q', 'What strategies do you implement for maximizing GST Credit compliance?');
define('FAQ_2_A', 'We execute exhaustive multi-party mismatches analysis, matching dynamic Input Tax Credit (ITC) logs against GSTR-2B and GSTR-3B records. This proactive reconciliation minimizes compliance risks and prevents ledger freezes or unexpected dry liquidity.');

define('FAQ_3_ID', 'direct-tax-planning');
define('FAQ_3_Q', 'How do you assist mid-market companies in direct tax planning and litigation?');
define('FAQ_3_A', 'We coordinate proactive annual tax projections, structuring compliant tax avenues (under the Income Tax Act) and providing representational advocacy before statutory Tax Authorities. Each case is curated carefully to secure your fiscal interests.');

define('FAQ_4_ID', 'company-registration-structures');
define('FAQ_4_Q', 'What corporate structures do you recommend for scaling enterprises?');
define('FAQ_4_A', 'Depending on your capital structure and scale roadmap, we assist you in registering Private Limited companies, Limited Liability Partnerships (LLP), or specialized subsidiaries for overseas holding structures. This ensures long-term operational flexibility.');

define('FAQ_5_ID', 'virtual-cfo-capital');
define('FAQ_5_Q', 'How does your Virtual CFO service support working capital management?');
define('FAQ_5_A', 'Our virtual CFO solutions embed institutional financial reporting, rigorous budget mapping, real-world CMA preparations, and capital syndication strategy on an ongoing, selective-partner advisory basis without the overhead of full-time hiring.');

define('FAQ_6_ID', 'business-advisory-differences');
define('FAQ_6_Q', 'What distinguishes your long-term corporate advisory from standard audits?');
define('FAQ_6_A', 'We prioritize private enterprise stability through dedicated, partner-led advisory. We do not just run statutory checklist processes; we align your financial plans with compliance and regulatory trends for permanent peace of mind.');

// Dynamic Final Consultation CTA Configurations
define('CTA_HEADING', "Let's Build Financial Confidence Together");
define('CTA_DESCRIPTION', 'Partner with a dedicated advisory team to secure your statutory compliance, optimize your institutional capital structures, and establish robust corporate governance foundations.');
define('CTA_INDICATOR_1', 'Partner-led Advisory');
define('CTA_INDICATOR_2', 'Timely Compliance');
define('CTA_INDICATOR_3', 'Strategic Business Guidance');
define('CTA_INDICATOR_4', 'Long-Term Relationships');

// Localization
define('SITE_LANG', 'en_US');
define('DEFAULT_TIMEZONE', 'Asia/Kolkata');
date_default_timezone_set(DEFAULT_TIMEZONE);

// Environment setup (Toggle based on dev/prod)
define('ENVIRONMENT', 'development'); // Options: 'development' or 'production'

if (ENVIRONMENT === 'development') {
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
} else {
    ini_set('display_errors', 0);
    error_reporting(0);
}

/**
 * Utility: Safely escape strings for HTML output
 */
function escape_html($string) {
    return htmlspecialchars($string, ENT_QUOTES, 'UTF-8');
}

/**
 * Utility: Helper function to generate absolute URLs for assets
 */
function asset_url($path) {
    $path = ltrim($path, '/');
    $script_name = isset($_SERVER['SCRIPT_NAME']) ? $_SERVER['SCRIPT_NAME'] : '/index.php';
    $base = rtrim(dirname($script_name), '/\\');
    return $base . '/assets/' . $path;
}

/**
 * Utility: Dynamically determine the correct logo URL.
 * Automatically checks for manually uploaded user PNG files, and falls back to SVG if not present.
 * Accepts 'main' or 'inverse'.
 */
function get_logo_url($type = 'main') {
    $png_filename = $type === 'inverse' ? 'logo-inverse.png' : 'logo-main.png';
    $svg_filename = $type === 'inverse' ? 'logo-inverse.svg' : 'logo-main.svg';
    
    $png_path = ROOT_DIR . '/assets/images/logo/' . $png_filename;
    
    if (file_exists($png_path)) {
        return asset_url('images/logo/' . $png_filename);
    } else {
        return asset_url('images/logo/' . $svg_filename);
    }
}
?>
