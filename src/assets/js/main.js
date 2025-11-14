// Main JavaScript - Global functionality

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');

  if (navToggle && navMenu) {
    // Toggle menu on button click
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      
      navToggle.setAttribute('aria-expanded', !isOpen);
      navMenu.classList.toggle('is-open');
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = !isOpen ? 'hidden' : '';
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking outside (on overlay)
    navMenu.addEventListener('click', (e) => {
      if (e.target === navMenu) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });

    // Close menu on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
        document.body.style.overflow = '';
        navToggle.focus(); // Return focus to toggle button
      }
    });
  }
});
