document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    });
  }

  // 2. Booking Modal Logic
  const modal = document.getElementById('bookingModal');
  const modalClose = document.querySelector('.modal-close');
  const bookButtons = document.querySelectorAll('.open-booking-modal');

  if (modal) {
    bookButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
      });
    });

    if (modalClose) {
      modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  // 3. Appointment Form Submission -> WhatsApp Link
  const forms = document.querySelectorAll('.appointment-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = form.querySelector('[name="name"]')?.value || '';
      const phone = form.querySelector('[name="phone"]')?.value || '';
      const treatment = form.querySelector('[name="treatment"]')?.value || 'General Consultation';
      const date = form.querySelector('[name="date"]')?.value || '';
      const message = form.querySelector('[name="message"]')?.value || '';

      if (!name || !phone) {
        alert('Please fill in your name and phone number.');
        return;
      }

      const clinicPhone = '919824252667';
      let text = `Hello Dantalaya Dental Clinic,\nI would like to book an appointment.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Treatment:* ${treatment}`;
      if (date) text += `\n*Preferred Date:* ${date}`;
      if (message) text += `\n*Notes:* ${message}`;

      const waUrl = `https://wa.me/${clinicPhone}?text=${encodeURIComponent(text)}`;
      
      // Close modal if open
      if (modal) modal.classList.remove('active');

      // Confirmation feedback
      alert(`Thank you, ${name}! Redirecting you to WhatsApp to confirm your appointment booking.`);
      window.open(waUrl, '_blank');
      form.reset();
    });
  });

  // 4. Animated Stats Counter
  const stats = document.querySelectorAll('.stat-number');
  let animated = false;

  const animateStats = () => {
    stats.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target') || stat.innerText.replace(/[^0-9]/g, ''));
      if (!target) return;
      
      let current = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
          stat.innerText = target.toLocaleString() + '+';
        } else {
          stat.innerText = current.toLocaleString();
        }
      }, 30);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateStats();
      }
    });
  }, { threshold: 0.2 });

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    observer.observe(statsSection);
  }

  // 5. FAQ Accordion Toggle
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      item.classList.toggle('active');
    });
  });
});
