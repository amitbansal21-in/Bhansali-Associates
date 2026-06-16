/**
 * Navigation Module
 * Mobile menu state management, sticky header transitions, and accessibility.
 */

import { lockScroll, unlockScroll, delegate, trapFocus } from './utils.js';

export const initNavigation = () => {
    const header = document.querySelector('.site-header');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const primaryNav = document.querySelector('.primary-navigation');
    const navOverlay = document.querySelector('.nav-overlay');
    
    // Store last focused element to return focus after menu closes
    let lastFocusedElement = null;

    if (!header || !menuToggle || !primaryNav) return;

    const openMenu = () => {
        lastFocusedElement = document.activeElement; // Remember where we were
        
        menuToggle.setAttribute('aria-expanded', 'true');
        primaryNav.classList.add('is-active');
        menuToggle.classList.add('is-active');
        if (navOverlay) {
            navOverlay.classList.add('is-active');
            navOverlay.setAttribute('aria-hidden', 'false');
        }
        lockScroll();
        
        // Setup focus trap for menu
        trapFocus(primaryNav);
        
        // Set focus to the first item for AT users
        setTimeout(() => {
            const firstLink = primaryNav.querySelector('a');
            if (firstLink) firstLink.focus();
        }, 50); // slight delay to allow display:block/transform
    };

    const closeMenu = () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        primaryNav.classList.remove('is-active');
        menuToggle.classList.remove('is-active');
        if (navOverlay) {
            navOverlay.classList.remove('is-active');
            navOverlay.setAttribute('aria-hidden', 'true');
        }
        unlockScroll();

        // Return focus to trigger button
        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    };

    const toggleMenu = () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        if (!isExpanded) {
            openMenu();
        } else {
            closeMenu();
        }
    };

    // Primary invocation
    menuToggle.addEventListener('click', toggleMenu);

    // Keyboard Accessibility: Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && primaryNav.classList.contains('is-active')) {
            closeMenu();
        }
    });

    // UX: Close on overlay click
    if (navOverlay) {
        navOverlay.addEventListener('click', closeMenu);
    }

    // Sub-menu generic handler (future mega-menu compatibility)
    delegate(primaryNav, '.has-dropdown > a', 'click', (e) => {
        if (window.innerWidth < 992) {
            e.preventDefault();
            const parent = e.target.closest('.has-dropdown');
            const subMenu = parent.querySelector('.dropdown-menu');
            const isExpanded = parent.classList.contains('is-expanded');
            
            parent.classList.toggle('is-expanded');
            e.target.setAttribute('aria-expanded', !isExpanded);
        }
    });

    // Premium Transparent to Solid architectural transition
    const handleHeaderState = () => {
        if (window.scrollY > 20) {
            header.classList.add('is-solid');
            // Check if transparent theme is configured, if so remove it on scroll
            header.classList.remove('is-transparent-top');
        } else {
            header.classList.remove('is-solid');
            header.classList.add('is-transparent-top');
        }
    };

    // Passive listener for high performance scroll reading
    window.addEventListener('scroll', handleHeaderState, { passive: true });
    
    // Initial evaluation on load
    handleHeaderState();
};

