# Bhansali Associates - Project Architecture (Phase 1, Part 1)

## 1. Directory Structure

The project strictly follows a scalable enterprise web architecture using modular PHP components and asset separation.

```
public_html/
├── index.php
├── about.php
├── services.php
├── industries.php
├── insights.php
├── contact.php
├── privacy-policy.php
├── terms-and-conditions.php
├── disclaimer.php
├── robots.txt
├── sitemap.xml
├── config.php                 (Global configuration and constants)
├── includes/                  (Reusable PHP components)
│   ├── seo.php                (Dynamic meta tags & schema configuration)
│   ├── header.php             (Global site header & top-level nav shell)
│   ├── navigation.php         (Primary responsive menu subsystem)
│   ├── footer.php             (Global 4-column footer)
│   ├── cta.php                (Global Call to Action components)
│   └── consultation-banner.php(Reusable consultation prompt)
└── assets/                    (Static resources)
    ├── css/
    │   ├── style.css          (Variables, Design Tokens, Global Styles)
    │   ├── responsive.css     (Media queries and fluid scaling rules)
    │   └── animations.css     (Transition utilities and AOS overrides)
    ├── js/
    │   ├── main.js            (Initialization and core logic)
    │   ├── navigation.js      (Menu accessibility and interactions)
    │   ├── animations.js      (AOS initialization & custom observers)
    │   └── slider.js          (Swiper.js instantiation code)
    ├── images/
    │   ├── logo/              (Brand assets, favicons, OG images)
    │   ├── hero/              (High-res hero banners, lazy-loaded defaults)
    │   ├── founders/          (Profile photography)
    │   ├── services/          (Service representation graphics)
    │   ├── industries/        (Industry-specific photography)
    │   ├── blog/              (Article thumbnails)
    │   └── icons/             (SVG base system)
    ├── fonts/                 (Self-hosted or pre-loaded font definitions)
    └── downloads/
        ├── pdf/               (Brochures, reports)
        └── insights/          (Whitepapers, case studies)
```

## 2. PHP Include Architecture

To adhere to the DRY (Don't Repeat Yourself) principle, the project operates around a predictable inclusion lifecycle for every `.php` page:

1. **`config.php`**: Injected at the top-level to establish environment vars and constants.
2. **Page Variables**: Declare `$page_title`, `$meta_description`, etc.
3. **`includes/seo.php`**: Hooked into the `<head>` after page variables.
4. **`includes/header.php`**: Opens `<body>`, includes `<header>` wrappers.
5. **`includes/navigation.php`**: Inserted within `header.php`.
6. **Main Content Array**: `<main class="site-main">` containing page-specific blocks.
7. **`includes/consultation-banner.php`**: Typically appended before the footer.
8. **`includes/footer.php`**: Completes the document structure, closes `<body>` and `<html>`, and injects `<script>` tags asynchronously.

## 3. Asset Organization & Linking

- **CSS:** Loaded sequentially in the `<head>` block via `header.php` (Style > Animations > Responsive).
- **JS:** Injected at the end of `footer.php` with `defer` attributes to avoid render blocking.
- **Paths:** All internal links and asset references use absolute paths dynamically resolved from `config.php` using the `asset_url()` utility function.

## 4. Naming Conventions

- **File Names:** Lowercase kebab-case (e.g., `privacy-policy.php`).
- **PHP Variables:** Snake_case (e.g., `$page_title`, `$schema_markup`).
- **CSS Classes:** BEM-inspired functional architecture using kebab-case (e.g., `btn-primary`, `card-service`, `text-center`).
- **JS Functions:** CamelCase (e.g., `initNavigation()`, `observeAnimations()`).
- **Image Names:** Descriptive kebab-case prioritized for SEO (e.g., `bhansali-associates-tax-audit-hero.jpg` instead of `bg2.jpg`).
