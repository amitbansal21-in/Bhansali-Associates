/**
 * Scroll Module
 * Smooth scrolling, back-to-top, and scroll direction detection.
 */

import { throttle } from './utils.js';

export const initScroll = () => {
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.site-header');
    const backToTop = document.querySelector('.back-to-top');

    const handleScroll = throttle(() => {
        const currentScrollY = window.scrollY;
        
        // Scroll direction detection logic for header manipulation
        if (header) {
            // Add hysteresis (only trigger after reasonable scroll distance)
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                header.classList.add('is-scrolling-down');
                header.classList.remove('is-scrolling-up');
            } else if (currentScrollY < lastScrollY) {
                header.classList.remove('is-scrolling-down');
                header.classList.add('is-scrolling-up');
            }
        }

        // Back to top visibility check
        if (backToTop) {
            if (currentScrollY > 500) {
                backToTop.classList.add('is-visible');
            } else {
                backToTop.classList.remove('is-visible');
            }
        }

        lastScrollY = currentScrollY;
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Enterprise smooth scroll wrapper for ID anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
};
