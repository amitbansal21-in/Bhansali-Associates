/**
 * FAQ Module
 * Accordion logic with ARIA accessibility.
 */

import { $$, delegate } from './utils.js';

export const initFAQ = () => {
    const faqContainer = document.querySelector('.faq-container');
    if (!faqContainer) return;

    const items = $$('.faq-item', faqContainer);

    delegate(faqContainer, '.faq-trigger', 'click', (e) => {
        const trigger = e.target.closest('.faq-trigger');
        const item = trigger.closest('.faq-item');
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

        // Single open mode logic (closes other items)
        items.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('is-open');
                const otherTrigger = otherItem.querySelector('.faq-trigger');
                if (otherTrigger) {
                    otherTrigger.setAttribute('aria-expanded', 'false');
                }
            }
        });

        // Toggle current item
        if (isExpanded) {
            item.classList.remove('is-open');
            trigger.setAttribute('aria-expanded', 'false');
        } else {
            item.classList.add('is-open');
            trigger.setAttribute('aria-expanded', 'true');
        }
    });
};
