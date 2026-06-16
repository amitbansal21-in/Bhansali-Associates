/**
 * Counter Module
 * High performance Intersection Observer based number counting.
 */

import { $$ } from './utils.js';

export const initCounters = () => {
    const counters = $$('.stat-counter');
    if (counters.length === 0) return;

    const animateCounter = (counter) => {
        const target = +counter.dataset.target;
        const duration = 2000; // Animation duration in milliseconds
        const startTime = performance.now();

        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out quad calculation for smooth deceleration
            const easeProgress = progress * (2 - progress);
            counter.innerText = Math.floor(easeProgress * target);

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                counter.innerText = target;
            }
        };

        requestAnimationFrame(update);
    };

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    // Crucial: Unobserve after single execution to prevent infinite loop/repeats
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    } else {
         // Fallback directly to end state if observer unsupported
         counters.forEach(counter => counter.innerText = counter.dataset.target);
    }
};
