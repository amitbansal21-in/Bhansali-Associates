/**
 * Lazy Loading Module
 * Enhances native lazy loading with Intersection Observer for fade-in effects.
 */

import { $$ } from './utils.js';

export const initLazyLoading = () => {
    const lazyImages = $$('img[data-src], .lazy-image');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    img.classList.add('is-loaded');
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });

        lazyImages.forEach((img) => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach((img) => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
            }
            img.classList.add('is-loaded');
        });
    }
};
