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

  function initHeroSlider() {
    const slider = document.getElementById('heroSlider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.hero-slide');
    const prevBtn = slider.querySelector('.hero-slider-prev');
    const nextBtn = slider.querySelector('.hero-slider-next');

    if (!slides || slides.length === 0) return;

    let currentIndex = 0;
    let autoplayTimer = null;
    const AUTOPLAY_INTERVAL = 5000;

    function goToSlide(index) {
      if (index < 0) {
        index = slides.length - 1;
      } else if (index >= slides.length) {
        index = 0;
      }

      currentIndex = index;

      slides.forEach((slide, i) => {
        if (i === currentIndex) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
    }

    function nextSlide() {
      goToSlide(currentIndex + 1);
    }

    function prevSlide() {
      goToSlide(currentIndex - 1);
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(nextSlide, AUTOPLAY_INTERVAL);
    }

    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        nextSlide();
        startAutoplay();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        prevSlide();
        startAutoplay();
      });
    }

    // Pause on hover
    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);

    // Touch Swipe Support for Mobile/Tablet
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;

    slider.addEventListener('touchstart', function (e) {
      stopAutoplay();
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    slider.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
      startAutoplay();
    }, { passive: true });

    function handleSwipe() {
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
      // Ensure horizontal swipe is dominant and passes threshold
      if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') {
        const rect = slider.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          prevSlide();
          startAutoplay();
        }
      } else if (e.key === 'ArrowRight') {
        const rect = slider.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          nextSlide();
          startAutoplay();
        }
      }
    });

    // Start on initial slide
    goToSlide(0);
    startAutoplay();
  }

  function initStatsCounters() {
    const statNumbers = document.querySelectorAll('.dantalaya-stat-number[data-target]');
    if (!statNumbers || statNumbers.length === 0) return;

    let animated = false;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          obs.disconnect();

          statNumbers.forEach(numEl => {
            const target = parseInt(numEl.getAttribute('data-target'), 10);
            if (isNaN(target)) return;

            const duration = 1800;
            const startTime = performance.now();

            function updateCount(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeProgress = 1 - (1 - progress) * (1 - progress);
              const currentVal = Math.floor(easeProgress * target);

              numEl.textContent = currentVal.toLocaleString('en-US');

              if (progress < 1) {
                requestAnimationFrame(updateCount);
              } else {
                numEl.textContent = target.toLocaleString('en-US');
              }
            }

            requestAnimationFrame(updateCount);
          });
        }
      });
    }, { threshold: 0.2 });

    const statsSection = document.querySelector('.dantalaya-stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }
  }

  function initServicesSlider() {
    const wrapper = document.getElementById('servicesSliderWrapper');
    const track = document.getElementById('servicesSliderTrack');

    if (!wrapper || !track) return;
    if (wrapper.dataset.sliderInitialized === 'true') return;
    wrapper.dataset.sliderInitialized = 'true';

    const originalCards = Array.from(track.children);
    const count = originalCards.length;
    if (count === 0) return;

    // Clone 7 elements at each end for continuous smooth infinite looping
    const cloneCount = 7;
    for (let i = count - cloneCount; i < count; i++) {
      const clone = originalCards[i].cloneNode(true);
      clone.classList.add('is-clone');
      clone.setAttribute('aria-hidden', 'true');
      track.insertBefore(clone, track.firstChild);
    }
    for (let i = 0; i < cloneCount; i++) {
      const clone = originalCards[i].cloneNode(true);
      clone.classList.add('is-clone');
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    }

    const allCards = Array.from(track.children);
    let currentIndex = cloneCount;
    let isTransitioning = false;
    let autoplayTimer = null;
    const AUTOPLAY_INTERVAL = 3800;

    function getStepWidth() {
      if (allCards.length === 0) return 0;
      const cardRect = allCards[0].getBoundingClientRect();
      const style = window.getComputedStyle(track);
      const gap = parseFloat(style.gap || style.columnGap) || 24;
      return cardRect.width + gap;
    }

    function setPosition(animate = true) {
      if (!animate) {
        track.classList.add('no-transition');
      } else {
        track.classList.remove('no-transition');
      }
      const step = getStepWidth();
      track.style.transform = `translate3d(-${currentIndex * step}px, 0, 0)`;
    }

    function goToIndex(index, animate = true) {
      isTransitioning = animate;
      currentIndex = index;
      setPosition(animate);
    }

    function slideNext() {
      if (isDragging) return;
      goToIndex(currentIndex + 1, true);
    }

    function slidePrev() {
      if (isDragging) return;
      goToIndex(currentIndex - 1, true);
    }

    track.addEventListener('transitionend', function (e) {
      if (e.target !== track) return;
      isTransitioning = false;

      let wrapped = false;
      while (currentIndex >= count + cloneCount) {
        currentIndex -= count;
        wrapped = true;
      }
      while (currentIndex < cloneCount) {
        currentIndex += count;
        wrapped = true;
      }

      if (wrapped) {
        track.classList.add('no-transition');
        const step = getStepWidth();
        track.style.transform = `translate3d(-${currentIndex * step}px, 0, 0)`;
        track.offsetHeight; // Force reflow
        setTimeout(() => {
          track.classList.remove('no-transition');
        }, 20);
      }
    });

    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(slideNext, AUTOPLAY_INTERVAL);
    }

    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    // Touch & Mouse Drag Implementation
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let touchStartTime = 0;
    let isHorizontalSwipe = false;
    let hasMoved = false;

    function getPositionX(e) {
      return e.touches && e.touches.length ? e.touches[0].clientX : (e.clientX !== undefined ? e.clientX : e.pageX);
    }

    function getPositionY(e) {
      return e.touches && e.touches.length ? e.touches[0].clientY : (e.clientY !== undefined ? e.clientY : e.pageY);
    }

    function getCurrentTranslateX() {
      const style = window.getComputedStyle(track);
      const matrix = style.transform || style.webkitTransform;
      if (matrix && matrix !== 'none') {
        const matrixValues = matrix.match(/matrix.*\((.+)\)/);
        if (matrixValues && matrixValues[1]) {
          const values = matrixValues[1].split(', ');
          if (values.length === 6) {
            return parseFloat(values[4]);
          } else if (values.length === 16) {
            return parseFloat(values[12]);
          }
        }
      }
      const step = getStepWidth();
      return -currentIndex * step;
    }

    function dragStart(e) {
      stopAutoplay();
      isDragging = true;
      hasMoved = false;
      isHorizontalSwipe = false;
      touchStartTime = Date.now();

      startX = getPositionX(e);
      startY = getPositionY(e);

      // Read current visual position directly from transform matrix
      prevTranslate = getCurrentTranslateX();
      currentTranslate = prevTranslate;
      isTransitioning = false;

      track.classList.add('no-transition');
      track.style.transform = `translate3d(${currentTranslate}px, 0, 0)`;
    }

    function dragMove(e) {
      if (!isDragging) return;

      const currentX = getPositionX(e);
      const currentY = getPositionY(e);
      const diffX = currentX - startX;
      const diffY = currentY - startY;

      if (!hasMoved) {
        if (Math.abs(diffX) > 6 || Math.abs(diffY) > 6) {
          hasMoved = true;
          isHorizontalSwipe = Math.abs(diffX) >= Math.abs(diffY);
        }
      }

      if (isHorizontalSwipe) {
        if (e.cancelable && e.type.startsWith('touch')) {
          e.preventDefault();
        }
        currentTranslate = prevTranslate + diffX;
        track.style.transform = `translate3d(${currentTranslate}px, 0, 0)`;
      }
    }

    function dragEnd(e) {
      if (!isDragging) return;
      isDragging = false;
      track.classList.remove('no-transition');

      const step = getStepWidth();
      if (step > 0 && hasMoved && isHorizontalSwipe) {
        const movedBy = currentTranslate - prevTranslate;
        const timeElapsed = Date.now() - touchStartTime;
        const isQuickSwipe = timeElapsed < 320 && Math.abs(movedBy) > 25;

        let targetIndex;
        if (isQuickSwipe) {
          if (movedBy < 0) {
            targetIndex = Math.max(currentIndex + 1, Math.round(-currentTranslate / step));
          } else {
            targetIndex = Math.min(currentIndex - 1, Math.round(-currentTranslate / step));
          }
        } else {
          // Snap directly to wherever user dragged closest
          targetIndex = Math.round(-currentTranslate / step);
        }

        goToIndex(targetIndex, true);
      } else {
        goToIndex(currentIndex, true);
      }

      startAutoplay();
    }

    // Touch events
    wrapper.addEventListener('touchstart', dragStart, { passive: true });
    wrapper.addEventListener('touchmove', dragMove, { passive: false });
    wrapper.addEventListener('touchend', dragEnd, { passive: true });
    wrapper.addEventListener('touchcancel', dragEnd, { passive: true });

    // Mouse events
    wrapper.addEventListener('mousedown', dragStart);
    window.addEventListener('mousemove', dragMove);
    window.addEventListener('mouseup', dragEnd);

    // Prevent clicking links when dragging
    wrapper.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function (e) {
        if (hasMoved && isHorizontalSwipe) {
          e.preventDefault();
          e.stopPropagation();
        }
      });
    });

    // Window resize handler
    let resizeTimer = null;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        setPosition(false);
      }, 80);
    });

    // Initial setup
    setTimeout(function () {
      setPosition(false);
      startAutoplay();
    }, 60);
  }

  function initStickyHeaderScroll() {
    const masthead = document.querySelector('header#masthead') || document.querySelector('.elementor-224');
    const headerSection = document.querySelector('.elementor-224 .elementor-element.elementor-element-7ecc71f2');

    function handleScroll() {
      const isScrolled = window.scrollY > 30;
      if (isScrolled) {
        document.body.classList.add('is-scrolled');
        if (masthead) masthead.classList.add('header-scrolled');
        if (headerSection) headerSection.classList.add('header-scrolled');
      } else {
        document.body.classList.remove('is-scrolled');
        if (masthead) masthead.classList.remove('header-scrolled');
        if (headerSection) headerSection.classList.remove('header-scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  function initHomeFAQ() {
    const faqSection = document.getElementById('faq-section');
    if (!faqSection) return;

    // Tab Switching
    const tabButtons = faqSection.querySelectorAll('.faq-tab-btn');
    const tabPanes = faqSection.querySelectorAll('.faq-tab-pane');

    tabButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        const targetId = this.getAttribute('data-faq-target');
        
        tabButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        tabPanes.forEach(p => p.classList.remove('active'));

        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');
        
        const targetPane = document.getElementById(targetId);
        if (targetPane) {
          targetPane.classList.add('active');
        }
      });
    });

    // Accordion Toggle
    const questionButtons = faqSection.querySelectorAll('.faq-question-btn');
    questionButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        const item = this.closest('.faq-item');
        const collapse = item.querySelector('.faq-answer-collapse');
        const isOpen = item.classList.contains('active');

        // Optional: close other open items in the same list
        const parentList = item.closest('.faq-accordion-list');
        if (parentList) {
          parentList.querySelectorAll('.faq-item.active').forEach(openItem => {
            if (openItem !== item) {
              openItem.classList.remove('active');
              openItem.querySelector('.faq-question-btn').setAttribute('aria-expanded', 'false');
              const c = openItem.querySelector('.faq-answer-collapse');
              if (c) c.style.maxHeight = null;
            }
          });
        }

        if (isOpen) {
          item.classList.remove('active');
          this.setAttribute('aria-expanded', 'false');
          collapse.style.maxHeight = null;
        } else {
          item.classList.add('active');
          this.setAttribute('aria-expanded', 'true');
          collapse.style.maxHeight = collapse.scrollHeight + 'px';
        }
      });
    });
  }

  function initFormHandling() {
    document.querySelectorAll('.wpcf7-form').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var nameInput = form.querySelector('[name="your-name"]');
        var phoneInput = form.querySelector('[name="tel-phone"]');
        var emailInput = form.querySelector('[name="your-email"]');
        var treatmentSelect = form.querySelector('[name="treatment-select"]');

        var name = nameInput ? nameInput.value.trim() : '';
        var phone = phoneInput ? phoneInput.value.trim() : '';
        var email = emailInput ? emailInput.value.trim() : '';
        var treatment = treatmentSelect ? treatmentSelect.value : 'Consultation';

        var output = form.querySelector('.wpcf7-response-output');
        if (!output) {
          output = document.createElement('div');
          output.className = 'wpcf7-response-output';
          form.appendChild(output);
        }

        if (!name || !phone) {
          output.style.display = 'block';
          output.style.padding = '12px 16px';
          output.style.marginTop = '15px';
          output.style.borderRadius = '6px';
          output.style.background = '#fef2f2';
          output.style.color = '#991b1b';
          output.style.border = '1px solid #f87171';
          output.innerText = 'Please provide your name and phone number so we can confirm your appointment.';
          return;
        }

        output.style.display = 'block';
        output.style.padding = '14px 18px';
        output.style.marginTop = '15px';
        output.style.borderRadius = '6px';
        output.style.background = '#f0fdf4';
        output.style.color = '#166534';
        output.style.border = '1px solid #86efac';
        output.innerHTML = '<strong>Thank you, ' + name + '!</strong> Your appointment request for <em>' + (treatment || 'Consultation') + '</em> has been received. Dr. Kavit Shah\'s team will contact you at ' + phone + ' shortly.';

        var submitBtn = form.querySelector('input[type="submit"], button[type="submit"]');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.value = 'Request Sent ✓';
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initResponsiveNav();
      initStickyHeaderScroll();
      initFooterAccordion();
      injectMobileQuickBar();
      initHeroSlider();
      initStatsCounters();
      initServicesSlider();
      initHomeFAQ();
      initFormHandling();
    });
  } else {
    initResponsiveNav();
    initStickyHeaderScroll();
    initFooterAccordion();
    injectMobileQuickBar();
    initHeroSlider();
    initStatsCounters();
    initServicesSlider();
    initHomeFAQ();
    initFormHandling();
  }
})();

