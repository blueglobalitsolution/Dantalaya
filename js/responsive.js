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

    // Ensure overlay exists in DOM and is placed in body for proper stacking
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'jkit-overlay';
      document.body.appendChild(overlay);
    }

    // Ensure logo image is present inside drawer identity panel
    const navLogo = document.querySelector('.jkit-nav-identity-panel .jkit-nav-logo');
    if (navLogo && (!navLogo.querySelector('img') || navLogo.innerHTML.trim() === '')) {
      navLogo.innerHTML = '<img src="/wp-content/uploads/2021/04/final-logo-300x289.png" alt="Dantalaya Cosmetic Dental Clinic" style="max-height: 38px; width: auto; display: block;">';
    }

    // Ensure close button has a crisp SVG 'X' icon if font-awesome is missing
    if (closeBtn && !closeBtn.querySelector('svg') && !closeBtn.innerText.trim()) {
      closeBtn.innerHTML = '<svg viewBox="0 0 24 24" style="width:20px;height:20px;fill:none;stroke:#1e293b;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
    }



    function openMenu() {
      if (menuWrapper) menuWrapper.classList.add('active');
      if (overlay) overlay.classList.add('active');
      document.body.classList.add('mobile-nav-open');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      if (menuWrapper) menuWrapper.classList.remove('active');
      if (overlay) overlay.classList.remove('active');
      document.body.classList.remove('mobile-nav-open');
      document.body.style.overflow = '';
    }

    function toggleMenu() {
      const isOpen = document.body.classList.contains('mobile-nav-open') || 
                     (menuWrapper && menuWrapper.classList.contains('active'));
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    // Unbind any conflicting jQuery click handlers attached by JKit
    function unbindJQueryHandlers() {
      if (window.jQuery) {
        window.jQuery(document).off('click', '.jkit-hamburger-menu');
        window.jQuery('.jkit-hamburger-menu').off('click');
        window.jQuery('.jkit-close-menu').off('click');
      }
    }
    unbindJQueryHandlers();
    setTimeout(unbindJQueryHandlers, 500);
    setTimeout(unbindJQueryHandlers, 1500);

    // Use capturing phase (true) and stopImmediatePropagation to completely prevent JKit's toggle conflict
    if (hamburger) {
      hamburger.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.stopImmediatePropagation) e.stopImmediatePropagation();
        toggleMenu();
      }, true);
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.stopImmediatePropagation) e.stopImmediatePropagation();
        closeMenu();
      }, true);
    }

    if (overlay) {
      overlay.addEventListener('click', function (e) {
        e.preventDefault();
        closeMenu();
      });
    }

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.body.classList.contains('mobile-nav-open')) {
        closeMenu();
      }
    });

    // Submenu accordion (Treatments) for Phone & Tablet (<= 1024px)
    const parentMenuItems = document.querySelectorAll('.jkit-menu .menu-item-has-children');
    parentMenuItems.forEach(function (parentItem) {
      const parentLink = parentItem.querySelector(':scope > a');
      const subMenu = parentItem.querySelector(':scope > .sub-menu');

      if (parentLink && subMenu) {
        parentLink.addEventListener('click', function (e) {
          if (window.innerWidth <= 1024) {
            e.preventDefault();
            e.stopPropagation();
            if (e.stopImmediatePropagation) e.stopImmediatePropagation();
            const isOpen = subMenu.classList.contains('dropdown-open');
            if (!isOpen) {
              subMenu.classList.add('dropdown-open');
              parentItem.classList.add('submenu-expanded');
            } else {
              subMenu.classList.remove('dropdown-open');
              parentItem.classList.remove('submenu-expanded');
            }
          }
        }, true);
      }
    });

    // Close drawer when clicking regular internal links
    const allDrawerLinks = document.querySelectorAll('.jkit-menu-wrapper a');
    allDrawerLinks.forEach(function (link) {
      if (!link.parentElement.classList.contains('menu-item-has-children')) {
        link.addEventListener('click', function () {
          closeMenu();
        });
      }
    });

    // Auto-close if screen is resized to desktop (> 1024px)
    window.addEventListener('resize', function () {
      if (window.innerWidth > 1024 && document.body.classList.contains('mobile-nav-open')) {
        closeMenu();
      }
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initResponsiveNav();
      initFooterAccordion();
    });
  } else {
    initResponsiveNav();
    initFooterAccordion();
  }
})();
