// Landing Page Interactive Features

// Animation and timing constants
const ANIMATION_DELAYS = {
  FADE_IN: 150,
  FADE_OUT: 300,
  TOOLTIP: 1000,
  SWATCH_STAGGER: 50,
};

const SCROLL_CONFIG = {
  THRESHOLD: 0.1,
  ROOT_MARGIN: '0px 0px -50px 0px',
};

const API_SIMULATE_DELAY = 1500;

/**
 * Color Palette Generator - Mini Preview
 * Provides interactive color palette generation and copying functionality
 */
class ColorPalettePreview {
  /**
   * Initialize the color palette preview component
   * Sets up event listeners and prepares color palettes data
   */
  constructor() {
    this.previewEl = document.querySelector('[data-color-preview]');
    if (!this.previewEl) {
      return;
    }

    this.generateBtn = this.previewEl.querySelector('[data-generate-palette]');
    this.swatchesContainer = this.previewEl.querySelector('[data-swatches]');

    // MCM Color Palettes Database
    this.palettes = [
      {
        name: 'Warm Sunset',
        colors: [
          { name: 'Burnt Orange', hex: '#FF6B35' },
          { name: 'Teal', hex: '#1FB7C8' },
          { name: 'Mustard', hex: '#F4C542' },
          { name: 'Walnut', hex: '#6B4D3D' },
          { name: 'Cream', hex: '#FAF8F6' },
        ],
      },
      {
        name: 'Cool Retro',
        colors: [
          { name: 'Avocado', hex: '#6B8E23' },
          { name: 'Tangerine', hex: '#FF8C42' },
          { name: 'Sky Blue', hex: '#8ECAE6' },
          { name: 'Chocolate', hex: '#5C4A42' },
          { name: 'Beige', hex: '#F2EDE8' },
        ],
      },
      {
        name: 'Atomic Age',
        colors: [
          { name: 'Cherry Red', hex: '#E63946' },
          { name: 'Turquoise', hex: '#2A9D8F' },
          { name: 'Lemon', hex: '#F9C74F' },
          { name: 'Charcoal', hex: '#2C1810' },
          { name: 'White', hex: '#FFFFFF' },
        ],
      },
      {
        name: 'Earthy Tones',
        colors: [
          { name: 'Terracotta', hex: '#D4694C' },
          { name: 'Sage', hex: '#9CAA9C' },
          { name: 'Ochre', hex: '#CC9544' },
          { name: 'Dark Brown', hex: '#3E302A' },
          { name: 'Cream', hex: '#FAF8F6' },
        ],
      },
      {
        name: 'Bold Primary',
        colors: [
          { name: 'Primary Red', hex: '#E74C3C' },
          { name: 'Primary Blue', hex: '#3498DB' },
          { name: 'Primary Yellow', hex: '#F1C40F' },
          { name: 'Black', hex: '#2C1810' },
          { name: 'White', hex: '#FFFFFF' },
        ],
      },
      {
        name: 'Pastel Dream',
        colors: [
          { name: 'Blush Pink', hex: '#FFB4A2' },
          { name: 'Mint', hex: '#B8E0D2' },
          { name: 'Butter', hex: '#F9E79F' },
          { name: 'Gray', hex: '#95A5A6' },
          { name: 'Cream', hex: '#FFF5EE' },
        ],
      },
    ];

    this.currentPaletteIndex = 0;
    this.init();
  }

  /**
   * Initialize event listeners for palette generation and color copying
   * @private
   */
  init() {
    this.generateBtn.addEventListener('click', () => this.generateNewPalette());

    // Add click to copy functionality
    this.swatchesContainer.addEventListener('click', (e) => {
      const swatch = e.target.closest('[data-swatch]');
      if (swatch) {
        this.copyColor(swatch);
      }
    });
  }

  /**
   * Generate and display a new color palette
   * Cycles through predefined MCM color palettes with animation
   */
  generateNewPalette() {
    // Animate button
    this.generateBtn.style.transform = 'rotate(360deg)';
    setTimeout(() => {
      this.generateBtn.style.transform = 'rotate(0deg)';
    }, ANIMATION_DELAYS.FADE_OUT);

    // Get next palette (cycle through)
    this.currentPaletteIndex = (this.currentPaletteIndex + 1) % this.palettes.length;
    const palette = this.palettes[this.currentPaletteIndex];

    // Update swatches with animation
    const swatches = this.swatchesContainer.querySelectorAll('[data-swatch]');
    swatches.forEach((swatch, index) => {
      setTimeout(() => {
        this.updateSwatch(swatch, palette.colors[index]);
      }, index * ANIMATION_DELAYS.SWATCH_STAGGER);
    });
  }

  /**
   * Update a color swatch with new color data
   * @param {HTMLElement} swatchEl - The swatch element to update
   * @param {{name: string, hex: string}} colorData - Color information
   * @private
   */
  updateSwatch(swatchEl, colorData) {
    const colorBox = swatchEl.querySelector('.swatch__color');
    const nameEl = swatchEl.querySelector('.swatch__name');
    const hexEl = swatchEl.querySelector('.swatch__hex');

    // Fade out
    swatchEl.style.opacity = '0';
    swatchEl.style.transform = 'translateY(10px)';

    setTimeout(() => {
      // Update content
      colorBox.style.background = colorData.hex;
      nameEl.textContent = colorData.name;
      hexEl.textContent = colorData.hex;

      // Fade in
      swatchEl.style.opacity = '1';
      swatchEl.style.transform = 'translateY(0)';
    }, ANIMATION_DELAYS.FADE_IN);
  }

  /**
   * Copy color hex code to clipboard
   * @param {HTMLElement} swatchEl - The swatch element clicked
   * @private
   */
  copyColor(swatchEl) {
    const hex = swatchEl.querySelector('.swatch__hex').textContent;

    // Copy to clipboard
    navigator.clipboard
      .writeText(hex)
      .then(() => {
        // Show feedback
        this.showCopyFeedback(swatchEl);
      })
      .catch((err) => {
        console.error('Failed to copy:', err);
      });
  }

  /**
   * Show visual feedback when color is copied
   * @param {HTMLElement} swatchEl - The swatch element to show feedback for
   * @private
   */
  showCopyFeedback(swatchEl) {
    const colorBox = swatchEl.querySelector('.swatch__color');
    const originalTransform = colorBox.style.transform;

    // Animate
    colorBox.style.transform = 'scale(1.1)';

    // Create tooltip
    const tooltip = document.createElement('div');
    tooltip.textContent = 'Copied!';
    tooltip.style.cssText = `
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      padding: 4px 8px;
      background: var(--color-charcoal);
      color: white;
      font-size: 12px;
      border-radius: 4px;
      pointer-events: none;
      animation: fadeIn 0.2s ease;
    `;

    swatchEl.style.position = 'relative';
    swatchEl.appendChild(tooltip);

    // Remove after delay
    setTimeout(() => {
      colorBox.style.transform = originalTransform;
      tooltip.remove();
    }, ANIMATION_DELAYS.TOOLTIP);
  }
}

/**
 * Newsletter Form Handler
 * Manages newsletter subscription form validation and submission
 */
class NewsletterForm {
  /**
   * Initialize the newsletter form component
   * Sets up form elements and event listeners
   */
  constructor() {
    this.form = document.querySelector('[data-newsletter-form]');
    if (!this.form) {
      return;
    }

    this.emailInput = this.form.querySelector('input[type="email"]');
    this.submitBtn = this.form.querySelector('button[type="submit"]');
    this.originalBtnText = this.submitBtn.innerHTML;

    this.init();
  }

  /**
   * Initialize form submit event listener
   * @private
   */
  init() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  /**
   * Handle form submission
   * @param {Event} e - Submit event
   * @private
   */
  async handleSubmit(e) {
    e.preventDefault();

    const email = this.emailInput.value.trim();

    if (!this.validateEmail(email)) {
      this.showError('Please enter a valid email address');
      return;
    }

    // Show loading state
    this.setLoading(true);

    try {
      // In production, this would POST to your newsletter API
      await this.simulateAPICall();

      // Success
      this.showSuccess();
    } catch {
      this.showError('Something went wrong. Please try again.');
    } finally {
      this.setLoading(false);
    }
  }

  /**
   * Validate email address format
   * @param {string} email - Email address to validate
   * @returns {boolean} True if valid email format
   * @private
   */
  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  /**
   * Toggle loading state on submit button
   * @param {boolean} isLoading - Whether form is in loading state
   * @private
   */
  setLoading(isLoading) {
    this.submitBtn.disabled = isLoading;
    if (isLoading) {
      this.submitBtn.innerHTML = 'Subscribing...';
    } else {
      this.submitBtn.innerHTML = this.originalBtnText;
    }
  }

  /**
   * Display success message after form submission
   * @private
   */
  showSuccess() {
    this.form.innerHTML = `
      <div style="text-align: center; padding: 2rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">✓</div>
        <p style="font-size: 1.25rem; font-weight: 600; color: var(--color-success); margin-bottom: 0.5rem;">
          Thanks for subscribing!
        </p>
        <p style="color: var(--color-text-secondary);">
          Check your inbox for a confirmation email.
        </p>
      </div>
    `;
  }

  /**
   * Display error message below form
   * @param {string} message - Error message to display
   * @private
   */
  showError(message) {
    // Create or update error message
    let errorEl = this.form.querySelector('.form-error');
    if (!errorEl) {
      errorEl = document.createElement('div');
      errorEl.className = 'form-error';
      errorEl.style.cssText = `
        color: var(--color-error);
        font-size: var(--text-sm);
        margin-top: var(--space-2);
        text-align: center;
      `;
      this.form.appendChild(errorEl);
    }

    errorEl.textContent = message;
    this.emailInput.focus();

    // Remove error after 3 seconds
    setTimeout(() => {
      errorEl.remove();
    }, 3000);
  }

  /**
   * Simulate API call for newsletter subscription
   * In production, this would make a real POST request
   * @returns {Promise<void>} Resolves after simulated delay
   * @private
   */
  simulateAPICall() {
    // Simulate API delay
    return new Promise((resolve) => {
      setTimeout(resolve, API_SIMULATE_DELAY);
    });
  }
}

/**
 * Smooth Scroll for Anchor Links
 * Enables smooth scrolling behavior for all internal anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
}

/**
 * Scroll-triggered Animations
 * Uses IntersectionObserver to animate elements as they enter the viewport
 */
class ScrollAnimations {
  /**
   * Initialize scroll animations
   * Sets up IntersectionObserver for fade-in animations
   */
  constructor() {
    this.animatedElements = document.querySelectorAll('.pillar, .card, .stat-badge');
    this.observer = null;
    this.init();
  }

  /**
   * Set up IntersectionObserver and apply initial styles
   * @private
   */
  init() {
    if (!('IntersectionObserver' in window)) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: SCROLL_CONFIG.THRESHOLD,
        rootMargin: SCROLL_CONFIG.ROOT_MARGIN,
      },
    );

    this.animatedElements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      this.observer.observe(el);
    });
  }
}

/**
 * Initialize all landing page features
 */
document.addEventListener('DOMContentLoaded', () => {
  new ColorPalettePreview();
  new NewsletterForm();
  new ScrollAnimations();
  initSmoothScroll();
});
