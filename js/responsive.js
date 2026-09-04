/**
 * Dantalaya Cosmetic Dental Clinic - Responsive Interaction Script
 * Standalone touch & responsive logic for mobile and tablet viewports
 */

(function () {
  'use strict';

  function initResponsiveNav() {
    const hamburger = document.querySelector('.jkit-hamburger-menu');
    const menuWrapper = document.querySelector('.jkit-menu-wrapper');
    const closeBtn = document.querySelector('.jkit-close-menu');
    let overlay = document.querySelector('.jkit-overlay');

    // Ensure overlay exists in the DOM
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'jkit-overlay';
      document.body.appendChild(overlay);
    }

    function openMenu(e) {
      if (e) e.preventDefault();
      if (menuWrapper) menuWrapper.classList.add('active');
      if (overlay) overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu(e) {
      if (e) e.preventDefault();
      if (menuWrapper) menuWrapper.classList.remove('active');
      if (overlay) overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (hamburger) {
      hamburger.addEventListener('click', function (e) {
        if (menuWrapper && menuWrapper.classList.contains('active')) {
          closeMenu(e);
        } else {
          openMenu(e);
        }
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closeMenu);
    }

    if (overlay) {
      overlay.addEventListener('click', closeMenu);
    }

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menuWrapper && menuWrapper.classList.contains('active')) {
        closeMenu(e);
      }
    });

    // Mobile Submenu Accordion (e.g. Treatments dropdown with 15 sub-items)
    const parentMenuItems = document.querySelectorAll('.jkit-menu .menu-item-has-children');
    parentMenuItems.forEach(function (parentItem) {
      const parentLink = parentItem.querySelector(':scope > a');
      const subMenu = parentItem.querySelector(':scope > .sub-menu');

      if (parentLink && subMenu) {
        parentLink.addEventListener('click', function (e) {
          if (window.innerWidth <= 1024) {
            // If already open, let the user follow link or toggle; first tap opens
            if (!subMenu.classList.contains('dropdown-open')) {
              e.preventDefault();
              subMenu.classList.add('dropdown-open');
              parentItem.classList.add('submenu-expanded');
            } else {
              // If tapped again on arrow or link, allow toggling or navigation
              if (e.target.tagName.toLowerCase() === 'i' || e.target.tagName.toLowerCase() === 'svg') {
                e.preventDefault();
                subMenu.classList.remove('dropdown-open');
                parentItem.classList.remove('submenu-expanded');
              }
            }
          }
        });
      }
    });

    // Close drawer when clicking a direct internal page link
    const regularLinks = document.querySelectorAll('.jkit-menu-wrapper .jkit-menu li:not(.menu-item-has-children) a');
    regularLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
      });
    });

    // Submenu links click closes drawer
    const subMenuLinks = document.querySelectorAll('.jkit-menu-wrapper .jkit-menu .sub-menu a');
    subMenuLinks.forEach(function (subLink) {
      subLink.addEventListener('click', function () {
        closeMenu();
      });
    });
  }

  function initFooterAccordion() {
    const toggleTitles = document.querySelectorAll('.elementor-230 .elementor-tab-title, .elementor-230 .elementor-toggle-title');
    toggleTitles.forEach(function (title) {
      title.addEventListener('click', function () {
        const parent = title.closest('.elementor-toggle-item, .elementor-accordion-item') || title.parentElement;
        const content = parent.querySelector('.elementor-tab-content');
        if (content) {
          const isHidden = window.getComputedStyle(content).display === 'none';
          content.style.display = isHidden ? 'block' : 'none';
        }
      });
    });
  }

  function injectMobileQuickBar() {
    if (document.querySelector('.mobile-quick-bar')) return;

    const bar = document.createElement('div');
    bar.className = 'mobile-quick-bar';
    bar.setAttribute('aria-label', 'Mobile Quick Contact');
    bar.innerHTML = `
      <a href="tel:9824252667" class="btn-call" aria-label="Call Clinic">
        <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"/></svg>
        <span>Call Now</span>
      </a>
      <a href="contact-us.html" class="btn-book" aria-label="Book Appointment">
        <svg viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
        <span>Appointment</span>
      </a>
    `;
    document.body.appendChild(bar);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initResponsiveNav();
      initFooterAccordion();
      injectMobileQuickBar();
    });
  } else {
    initResponsiveNav();
    initFooterAccordion();
    injectMobileQuickBar();
  }
})();
