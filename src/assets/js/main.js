// Main JavaScript - Global functionality
// Cross-browser compatible implementation

/**
 * Browser-safe initialization
 * Ensures code runs after polyfills are loaded
 */
(function initializeApp() {
  'use strict';

  // Mobile menu toggle with cross-browser support
  const initMobileMenu = function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (!navToggle || !navMenu) {
      return; // Early exit if elements don't exist
    }

    /**
     * Toggle menu state
     * Compatible with all browsers
     */
    const toggleMenu = function () {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      const newState = !isOpen;

      // Use setAttribute for better IE compatibility
      navToggle.setAttribute('aria-expanded', String(newState));

      // classList.toggle has better browser support than classList.add/remove
      if (newState) {
        navMenu.classList.add('is-open');
      } else {
        navMenu.classList.remove('is-open');
      }

      // Prevent body scroll when menu is open (cross-browser)
      try {
        document.body.style.overflow = newState ? 'hidden' : '';
        // Fallback for iOS Safari
        if (newState) {
          document.documentElement.style.overflow = 'hidden';
        } else {
          document.documentElement.style.overflow = '';
        }
      } catch (e) {
        console.warn('Could not toggle scroll:', e);
      }
    };

    // Toggle menu on button click
    navToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking on a link
    // Convert NodeList to Array for better browser support
    const navLinksArray = Array.prototype.slice.call(navLinks);
    navLinksArray.forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
        document.body.style.overflow = '';
        // iOS Safari fix
        try {
          document.documentElement.style.overflow = '';
        } catch (e) {
          console.warn('Scroll restoration failed:', e);
        }
      });
    });

    // Close menu when clicking outside (on overlay)
    // Use event delegation for better performance
    navMenu.addEventListener('click', function (e) {
      if (e.target === navMenu) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
        document.body.style.overflow = '';
        try {
          document.documentElement.style.overflow = '';
        } catch (e) {
          console.warn('Scroll restoration failed:', e);
        }
      }
    });

    // Close menu on ESC key
    // Handle both 'Escape' (modern) and 'Esc' (legacy) key values
    document.addEventListener('keydown', function (e) {
      const key = e.key || e.keyCode;
      const isEscape = key === 'Escape' || key === 'Esc' || key === 27;

      if (isEscape && navMenu.classList.contains('is-open')) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
        document.body.style.overflow = '';
        try {
          document.documentElement.style.overflow = '';
          navToggle.focus(); // Return focus to toggle button
        } catch (e) {
          console.warn('Focus/scroll restoration failed:', e);
        }
      }
    });
  };

  /**
   * Initialize all features when DOM is ready
   * Cross-browser DOMContentLoaded handling
   */
  const init = function () {
    initMobileMenu();
  };

  // Cross-browser DOM ready detection
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOMContentLoaded already fired
    init();
  }
})();
