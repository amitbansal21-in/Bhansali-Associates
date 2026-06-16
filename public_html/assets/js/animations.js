/**
 * Animations Module
 * GPU-friendly Reveal triggers and AOS global configuration placeholder.
 */

export const initAnimations = () => {
    // Strictly respect prefers-reduced-motion OS settings 
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
        return; // Halt logic to let CSS handle static fallback
    }

    // Placeholder for AOS Library Initialization
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 700,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)', // Matches CSS variable ease-premium
            once: true, // Animations fire exactly once per element
            offset: 50,
            disable: window.innerWidth < 768 // Optionally disable complex calculations on mobile hardware
        });
    }

    // Lightweight Custom Intersection Observer Reveal for utility classes (.fade-up, .scale-up, etc.)
    const revealElements = document.querySelectorAll('.fade-up, .fade-down, .fade-left, .fade-right, .fade-in, .scale-up');
    
    if (revealElements.length > 0 && 'IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Use requestAnimationFrame for compositing sync
                    requestAnimationFrame(() => {
                        entry.target.classList.add('is-visible');
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        });

        revealElements.forEach(el => revealObserver.observe(el));
    }
};
