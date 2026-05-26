/* ============================================================
   FRATELLI MORELLO — main.js v2
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     HAMBURGER + MOBILE DRAWER
  ---------------------------------------------------------- */
  const burger = document.querySelector('.burger');
  const drawer = document.querySelector('.drawer');

  if (burger && drawer) {
    // Drawer starts hidden from AT
    drawer.setAttribute('aria-hidden', 'true');

    function openDrawer() {
      burger.classList.add('is-open');
      drawer.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      burger.setAttribute('aria-expanded', 'true');
      document.body.classList.add('drawer-open');
      // Move focus to first interactive element inside drawer
      var firstLink = drawer.querySelector('a, button');
      if (firstLink) firstLink.focus();
    }

    function closeDrawer() {
      burger.classList.remove('is-open');
      drawer.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      burger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('drawer-open');
      burger.focus();
    }

    burger.addEventListener('click', function () {
      if (drawer.classList.contains('is-open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeDrawer);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
        closeDrawer();
      }
    });
  }

  /* ----------------------------------------------------------
     STICKY HEADER
  ---------------------------------------------------------- */
  const header = document.querySelector('.header');

  if (header) {
    function onScroll() {
      const y = window.scrollY;
      header.classList.toggle('scrolled', y > 30);
      header.classList.toggle('shrunk', y > 80);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ----------------------------------------------------------
     ACTIVE NAV LINK
  ---------------------------------------------------------- */
  const path = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav__link, .drawer__link').forEach(function (a) {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (
      href === path ||
      (path === '' && href === 'index.html') ||
      (path === 'index.html' && href === 'index.html')
    ) {
      a.classList.add('is-active');
    }
  });

  /* ----------------------------------------------------------
     SCROLL REVEAL
  ---------------------------------------------------------- */
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px 5% 0px' }
    );

    document.querySelectorAll('.reveal, .stagger').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal, .stagger').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // Safety fallback: ensure everything is revealed eventually
  setTimeout(function () {
    document.querySelectorAll('.reveal:not(.is-visible), .stagger:not(.is-visible)').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }, 2500);

  /* ----------------------------------------------------------
     COUNTER ANIMATION
  ---------------------------------------------------------- */
  function animateCount(el) {
    const target = parseFloat(el.dataset.count);
    if (isNaN(target)) return;
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const start = performance.now();

    function step(now) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      const value = Math.round(eased * target);
      el.textContent = value + suffix;
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window) {
    const counterObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            counterObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll('[data-count]').forEach(function (el) {
      counterObs.observe(el);
    });
  } else {
    document.querySelectorAll('[data-count]').forEach(function (el) {
      el.textContent = (parseFloat(el.dataset.count) || 0) + (el.dataset.suffix || '');
    });
  }

  /* ----------------------------------------------------------
     SMOOTH SCROLL for anchors
  ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const id = a.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10) || 88;
        const top = target.getBoundingClientRect().top + window.pageYOffset - headerH - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ----------------------------------------------------------
     SUBTLE PARALLAX on hero visual
  ---------------------------------------------------------- */
  const heroVisual = document.querySelector('.hero__visual');
  if (heroVisual && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          const y = window.scrollY;
          if (y < window.innerHeight) {
            heroVisual.style.transform = 'translateY(' + (y * 0.08) + 'px)';
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

})();
