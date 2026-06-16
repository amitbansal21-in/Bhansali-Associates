/**
 * Main Initialization File
 * Enterprise architecture: Initializes all modular scripts sequentially via DOMContentLoaded.
 * No specific page logic lives here to ensure reusability.
 */

import { initNavigation } from './navigation.js';
import { initScroll } from './scroll.js';
import { initAnimations } from './animations.js';
import { initCounters } from './counter.js';
import { initFAQ } from './faq.js';
import { initForms } from './forms.js';
import { initLazyLoading } from './lazyload.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Foundation Level
    initNavigation();
    initScroll();

    // 2. Asset & Performance Level
    initLazyLoading();

    // 3. User Interface & State Management
    initFAQ();
    initForms();

    // 4. Transitions, Visuals & Enhancements
    initAnimations();
    initCounters();
    
    // Future expansion ready.
    console.info('Bhansali Associates Premium Architecture Core Initialized.');
});
