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
      navLogo.innerHTML = '<img src="wp-content/uploads/2024/07/Dantalaya-01-e1720875225881.png" alt="Dantalaya Cosmetic Dental Clinic" style="max-height: 38px; width: auto; display: block;">';
    }

    // Ensure close button has a crisp SVG 'X' icon if font-awesome is missing
    if (closeBtn && !closeBtn.querySelector('svg') && !closeBtn.innerText.trim()) {
      closeBtn.innerHTML = '<svg viewBox="0 0 24 24" style="width:20px;height:20px;fill:none;stroke:#1e293b;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
    }

    // Ensure CTA action buttons exist inside the drawer
    if (menuWrapper && !menuWrapper.querySelector('.jkit-drawer-actions')) {
      const drawerActions = document.createElement('div');
      drawerActions.className = 'jkit-drawer-actions';
      drawerActions.innerHTML = `
        <a href="contact-us.html" class="drawer-btn-book">Book Appointment</a>
        <a href="tel:9824252667" class="drawer-btn-call">
          <svg viewBox="0 0 24 24" style="width:16px;height:16px;fill:currentColor;margin-right:8px;vertical-align:middle;flex-shrink:0;"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"/></svg>
          <span>Call: +91 98242 52667</span>
        </a>
      `;
      menuWrapper.appendChild(drawerActions);
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
            const isOpen = subMenu.classList.contains('dropdown-open');
            if (!isOpen) {
              subMenu.classList.add('dropdown-open');
              parentItem.classList.add('submenu-expanded');
            } else {
              subMenu.classList.remove('dropdown-open');
              parentItem.classList.remove('submenu-expanded');
            }
          }
        });
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
