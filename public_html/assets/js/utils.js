/**
 * Utility Functions
 * Reusable helper methods across the application.
 */

export const debounce = (func, wait = 100) => {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

export const throttle = (func, limit = 100) => {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

export const $ = (selector, parent = document) => parent.querySelector(selector);
export const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

export const lockScroll = () => {
    document.body.style.overflow = 'hidden';
};

export const unlockScroll = () => {
    document.body.style.overflow = '';
};

export const delegate = (el, selector, event, handler) => {
    el.addEventListener(event, (e) => {
        if (e.target.closest(selector)) {
            handler(e);
        }
    });
};

/**
 * Focus Trap Utility for Modals & Mobile Menus
 * Prevents tab navigation from leaving the active container (keyboard accessibility).
 */
export const trapFocus = (element) => {
    const focusableEls = element.querySelectorAll(
        'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!focusableEls.length) return;
    
    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];
    const KEYCODE_TAB = 9;

    element.addEventListener('keydown', function (e) {
        const isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
        if (!isTabPressed) return;

        if (e.shiftKey) { // Shift + Tab
            if (document.activeElement === firstFocusableEl) {
                lastFocusableEl.focus();
                e.preventDefault();
            }
        } else { // Tab
            if (document.activeElement === lastFocusableEl) {
                firstFocusableEl.focus();
                e.preventDefault();
            }
        }
    });
};

