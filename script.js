/**
 * TantraKod Master Vanilla JavaScript Engine
 * Feature Set: Preloader, Navbar Scroll, Mobile Menu, Smooth Scroll, 
 * Button Ripples, Count-Up Counters, FAQ Accordion, Scroll Reveal, Back to Top
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Selectors
  const preloader = document.getElementById('preloader');
  const navbarHeader = document.getElementById('navbarHeader');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const navLinksList = document.querySelectorAll('.nav-link');
  const allNavAnchors = document.querySelectorAll('a[href^="#"]');
  const buttons = document.querySelectorAll('.btn');
  const sections = document.querySelectorAll('section[id]');
  const faqTriggers = document.querySelectorAll('.faq-trigger');
  const backToTopBtn = document.getElementById('backToTop');
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  /* ==========================================================================
     1. Preloader Screen Fade-Out
     ========================================================================== */
  const hidePreloader = () => {
    if (preloader && !preloader.classList.contains('hidden')) {
      preloader.classList.add('hidden');
    }
  };

  window.addEventListener('load', hidePreloader);
  // Fallback safety timeout (1.5 seconds)
  setTimeout(hidePreloader, 1500);

  /* ==========================================================================
     2. Mobile Navigation Toggle & Accessibility
     ========================================================================== */
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      menuToggle.classList.toggle('open');
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.classList.remove('open');
        navLinks.classList.remove('active');
      }
    });

    // Close menu when clicking link
    navLinksList.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.classList.remove('open');
        navLinks.classList.remove('active');
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.classList.remove('open');
        navLinks.classList.remove('active');
      }
    });
  }

  /* ==========================================================================
     3. Header Scroll Effect, Back to Top, & ScrollSpy
     ========================================================================== */
  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Header scrolled state
    if (navbarHeader) {
      if (scrollY > 50) {
        navbarHeader.classList.add('scrolled');
      } else {
        navbarHeader.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // ScrollSpy Active Link Update
    const scrollPosition = scrollY + 120;
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinksList.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ==========================================================================
     4. Smooth Scrolling for Internal Links & Back-to-Top
     ========================================================================== */
  allNavAnchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          e.preventDefault();
          const headerHeight = navbarHeader ? navbarHeader.offsetHeight : 80;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     5. Button Ripple Click Effect
     ========================================================================== */
  buttons.forEach(button => {
    button.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple-effect');

      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      const existing = this.querySelector('.ripple-effect');
      if (existing) existing.remove();

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 650);
    });
  });

  /* ==========================================================================
     6. Animated Count-Up Counters
     ========================================================================== */
  const counterElements = document.querySelectorAll('.counter, .stat-number');

  const animateCounter = (el) => {
    const target = parseFloat(el.getAttribute('data-target'));
    if (isNaN(target)) return;

    const duration = 2000; // 2 seconds animation
    const isFloat = target % 1 !== 0;
    const start = 0;
    const startTime = performance.now();

    const updateNumber = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out expo curve
      const currentVal = start + (target - start) * (1 - Math.pow(2, -10 * progress));

      el.textContent = isFloat ? currentVal.toFixed(1) : Math.floor(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      } else {
        el.textContent = isFloat ? target.toFixed(1) : target;
      }
    };

    requestAnimationFrame(updateNumber);
  };

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counterElements.forEach(el => counterObserver.observe(el));
  } else {
    counterElements.forEach(animateCounter);
  }

  /* ==========================================================================
     7. FAQ Accordion Toggle
     ========================================================================== */
  faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq-item');
      const isOpen = item.classList.contains('active');
      const content = item.querySelector('.faq-content');

      // Close all other accordion items
      document.querySelectorAll('.faq-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherTrigger = otherItem.querySelector('.faq-trigger');
          const otherContent = otherItem.querySelector('.faq-content');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = `${content.scrollHeight}px`;
      }
    });
  });

  /* ==========================================================================
     8. Scroll Reveal Animations (IntersectionObserver)
     ========================================================================== */
  const revealTargets = document.querySelectorAll(
    '.service-card, .product-card, .why-card, .tech-item, .portfolio-card, .process-step, .testimonial-card, .counter-card, .about-card, .section-header, .hero-content, .hero-image-wrapper'
  );

  revealTargets.forEach(el => {
    el.classList.add('reveal');
  });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach(el => {
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('active');
    });
  }

  /* ==========================================================================
     9. Contact Form Submission Validation & Feedback
     ========================================================================== */
  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const serviceInput = document.getElementById('service');
      const messageInput = document.getElementById('message');

      if (!nameInput.value.trim() || !emailInput.value.trim() || !serviceInput.value || !messageInput.value.trim()) {
        formStatus.textContent = 'Please complete all required fields before submitting.';
        formStatus.className = 'form-status error';
        return;
      }

      // Email format regex validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        formStatus.textContent = 'Please enter a valid work email address.';
        formStatus.className = 'form-status error';
        return;
      }

      formStatus.textContent = `Thank you, ${nameInput.value.trim()}! Your inquiry has been transmitted to our engineering team. We will contact you within 24 hours.`;
      formStatus.className = 'form-status success';

      contactForm.reset();

      setTimeout(() => {
        formStatus.className = 'form-status';
        formStatus.textContent = '';
      }, 7000);
    });
  }
});
