// Landing Page Interactive Features

// ============================================
// TIMING CONSTANTS - Centralized for consistency
// ============================================

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

    this.generateBtn = this.previewEl?.querySelector('[data-generate-palette]');
    this.swatchesContainer = this.previewEl?.querySelector('[data-swatches]');

    // Defensive check - ensure required elements exist
    if (!this.generateBtn || !this.swatchesContainer) {
      console.warn('ColorPalettePreview: Required elements not found');
      return;
    }

    // Animation timing constants
    this.ANIMATION_DELAYS = {
      FADE_IN: 150,
      FADE_OUT: 300,
      TOOLTIP: 2000,
      SWATCH_STAGGER: 50,
    };

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
    }, this.ANIMATION_DELAYS.FADE_OUT);

    // Get next palette (cycle through)
    this.currentPaletteIndex = (this.currentPaletteIndex + 1) % this.palettes.length;
    const palette = this.palettes[this.currentPaletteIndex];

    // Update swatches with animation
    const swatches = this.swatchesContainer.querySelectorAll('[data-swatch]');
    swatches.forEach((swatch, index) => {
      setTimeout(() => {
        this.updateSwatch(swatch, palette.colors[index]);
      }, index * this.ANIMATION_DELAYS.SWATCH_STAGGER);
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
    }, this.ANIMATION_DELAYS.FADE_IN);
  }

  /**
   * Copy color hex code to clipboard
   * Cross-browser compatible with fallback
   * @param {HTMLElement} swatchEl - The swatch element clicked
   * @private
   */
  copyColor(swatchEl) {
    const hex = swatchEl.querySelector('.swatch__hex').textContent;

    // Modern Clipboard API with fallback for older browsers
    if (navigator.clipboard && navigator.clipboard.writeText) {
      // Modern browsers (Chrome 63+, Firefox 53+, Safari 13.1+)
      navigator.clipboard
        .writeText(hex)
        .then(() => {
          this.showCopyFeedback(swatchEl);
        })
        .catch((err) => {
          console.error('Failed to copy:', err);
          this.fallbackCopyToClipboard(hex, swatchEl);
        });
    } else {
      // Fallback for older browsers (IE11, Safari < 13.1)
      this.fallbackCopyToClipboard(hex, swatchEl);
    }
  }

  /**
   * Fallback clipboard copy for older browsers
   * @param {string} text - Text to copy
   * @param {HTMLElement} swatchEl - The swatch element
   * @private
   */
  fallbackCopyToClipboard(text, swatchEl) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        this.showCopyFeedback(swatchEl);
      } else {
        console.error('Fallback copy failed');
      }
    } catch (err) {
      console.error('Fallback copy error:', err);
    }

    document.body.removeChild(textArea);
  }

  /**
   * Show visual feedback when color is copied
   * @param {HTMLElement} swatchEl - The swatch element to show feedback for
   * @private
   */
  showCopyFeedback(swatchEl) {
    if (!swatchEl) {
      return;
    }

    const colorBox = swatchEl?.querySelector('.swatch__color');
    if (!colorBox) {
      return;
    }

    const originalTransform = colorBox.style.transform;

    // Animate
    colorBox.style.transform = 'scale(1.1)';

    // Create tooltip
    const tooltip = document.createElement('div');
    tooltip.textContent = 'Copied!';
    tooltip.className = 'swatch__tooltip';

    if (!swatchEl.style.position) {
      swatchEl.style.position = 'relative';
    }
    swatchEl.appendChild(tooltip);

    // Remove after delay
    setTimeout(() => {
      colorBox.style.transform = originalTransform;
      tooltip.remove();
    }, this.ANIMATION_DELAYS.TOOLTIP);
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

    // Scroll config constants
    this.SCROLL_CONFIG = {
      THRESHOLD: 0.1,
      ROOT_MARGIN: '0px 0px -50px 0px',
    };

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

    // Apply CSS class for initial styles instead of inline styles
    this.animatedElements.forEach((el) => {
      el.classList.add('scroll-animate');
    });

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animate--visible');
            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: this.SCROLL_CONFIG.THRESHOLD,
        rootMargin: this.SCROLL_CONFIG.ROOT_MARGIN,
      },
    );

    this.animatedElements.forEach((el) => {
      this.observer.observe(el);
    });
  }
}

/**
 * Initialize all landing page features
 */
document.addEventListener('DOMContentLoaded', () => {
  new ColorPalettePreview();
  new ScrollAnimations();
  initSmoothScroll();
});
