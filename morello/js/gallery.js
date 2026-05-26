/* ============================================================
   FRATELLI MORELLO — Gallery v2
   Layout continuo · Lightbox · Touch swipe · Keyboard nav
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     DATI GALLERIA
     Tutte le foto nella cartella galleria/
     Per aggiungere foto: copia il file in galleria/ e aggiungi
     un oggetto nell'array qui sotto.
  ---------------------------------------------------------- */
  var GALLERY = [
    { src: 'galleria/3S7A0013bn.webp',           alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A0042.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A0071.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A0080.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A0082.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A0099bn.webp',            alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A0149bn%20copia.webp',    alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A0159%20copia.webp',      alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A0173.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A0452.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A0723bn.webp',            alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A0815bn.webp',            alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A0970.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A1084.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A1094.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A1171.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A2420.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A2832.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A3122%20copia.webp',      alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A3125.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A3152%20copia.webp',      alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A3195%20copia.webp',      alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A3207.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A3219%20copia.webp',      alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A3244%20copia%202.webp',  alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A6874.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A6875.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A6941.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A7074.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A7247.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A8072.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A8081.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A8160.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A8354.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A8375.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A8397.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A8548.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A8954%20copia.webp',      alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A8961%20copia.webp',      alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A9126.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A9231%20copia%202.webp',  alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A9248%20copia.webp',      alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A9270%20copia.webp',      alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A9276%20copia.webp',      alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A9288.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A9293bn.webp',            alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A9337%20copia.webp',      alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A9443%20copia%202.webp',  alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A9501%20copia.webp',      alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A9861.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A9917.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/3S7A9991.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/IMG_8045.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/IMG_8049.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/IMG_8070.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/IMG_9558.webp',              alt: 'Azienda Agricola Fratelli Morello' },
    { src: 'galleria/IMG_9952.webp',              alt: 'Azienda Agricola Fratelli Morello' }
  ];

  /* ----------------------------------------------------------
     STATO INTERNO
  ---------------------------------------------------------- */
  var currentIndex = 0;
  var triggerEl    = null; // elemento che ha aperto il lightbox

  /* ----------------------------------------------------------
     RIFERIMENTI DOM
  ---------------------------------------------------------- */
  var grid     = document.querySelector('.gallery-grid');
  var lightbox = document.getElementById('lightbox');

  if (!grid || !lightbox) return;

  var lbImg     = lightbox.querySelector('.lightbox__img');
  var lbCounter = lightbox.querySelector('.lightbox__counter');
  var lbClose   = lightbox.querySelector('.lightbox__close');
  var lbPrev    = lightbox.querySelector('.lightbox__nav--prev');
  var lbNext    = lightbox.querySelector('.lightbox__nav--next');

  /* ----------------------------------------------------------
     RENDER GRIGLIA
  ---------------------------------------------------------- */
  function renderGrid() {
    grid.innerHTML = '';
    GALLERY.forEach(function (item, i) {
      var btn = document.createElement('button');
      btn.className = 'gallery-item reveal';
      btn.setAttribute('aria-label', 'Apri foto ' + (i + 1));
      btn.dataset.index = i;

      btn.innerHTML = [
        '<div class="gallery-item__inner">',
          '<img',
            ' src="' + item.src + '"',
            ' alt="' + item.alt + '"',
            ' loading="lazy"',
            ' decoding="async"',
          ' />',
          '<div class="gallery-item__overlay" aria-hidden="true">',
            '<svg class="gallery-item__icon" viewBox="0 0 24 24" fill="none"',
              ' stroke="currentColor" stroke-width="1.75"',
              ' stroke-linecap="round" stroke-linejoin="round">',
              '<circle cx="11" cy="11" r="8"/>',
              '<line x1="21" y1="21" x2="16.65" y2="16.65"/>',
              '<line x1="11" y1="8" x2="11" y2="14"/>',
              '<line x1="8" y1="11" x2="14" y2="11"/>',
            '</svg>',
          '</div>',
        '</div>'
      ].join('');

      btn.addEventListener('click', function () {
        openLightbox(i);
      });

      grid.appendChild(btn);
    });

    /* Scroll-reveal con IntersectionObserver */
    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.05, rootMargin: '0px 0px 5% 0px' });

      grid.querySelectorAll('.reveal').forEach(function (el) {
        obs.observe(el);
      });
    } else {
      grid.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('is-visible');
      });
    }
  }

  /* Render iniziale */
  renderGrid();

  /* ----------------------------------------------------------
     LIGHTBOX — APERTURA
  ---------------------------------------------------------- */
  function openLightbox(index) {
    currentIndex = index;
    triggerEl = document.activeElement;
    updateLightboxContent(index, false);

    lightbox.setAttribute('aria-hidden', 'false');
    lightbox.classList.add('is-open');
    document.body.classList.add('lightbox-open');

    setTimeout(function () { lbClose.focus(); }, 50);
  }

  /* ----------------------------------------------------------
     LIGHTBOX — CHIUSURA
  ---------------------------------------------------------- */
  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.classList.add('is-closing');

    setTimeout(function () {
      lightbox.setAttribute('aria-hidden', 'true');
      lightbox.classList.remove('is-closing');
      document.body.classList.remove('lightbox-open');
      if (triggerEl) triggerEl.focus();
    }, 300);
  }

  /* ----------------------------------------------------------
     LIGHTBOX — AGGIORNA CONTENUTO
  ---------------------------------------------------------- */
  function updateLightboxContent(index, animate) {
    var item = GALLERY[index];
    if (!item) return;

    if (animate) {
      lbImg.style.opacity   = '0';
      lbImg.style.transform = 'scale(0.97)';
    }

    setTimeout(function () {
      lbImg.src = item.src;
      lbImg.alt = item.alt;
      lbCounter.textContent = (index + 1) + ' / ' + GALLERY.length;

      lbPrev.disabled = (index === 0);
      lbNext.disabled = (index === GALLERY.length - 1);

      if (animate) {
        requestAnimationFrame(function () {
          lbImg.style.transition = 'opacity 0.3s var(--ease), transform 0.3s var(--ease)';
          lbImg.style.opacity    = '1';
          lbImg.style.transform  = 'scale(1)';
        });
      }
    }, animate ? 150 : 0);
  }

  /* ----------------------------------------------------------
     NAVIGAZIONE LIGHTBOX
  ---------------------------------------------------------- */
  function navigate(direction) {
    var next = currentIndex + direction;
    if (next < 0 || next >= GALLERY.length) return;
    currentIndex = next;
    updateLightboxContent(currentIndex, true);
  }

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', function () { navigate(-1); });
  lbNext.addEventListener('click', function () { navigate(+1); });

  /* Click su overlay chiude */
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  /* ----------------------------------------------------------
     TASTIERA
  ---------------------------------------------------------- */
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('is-open')) return;
    switch (e.key) {
      case 'Escape':     closeLightbox(); break;
      case 'ArrowLeft':  navigate(-1);   break;
      case 'ArrowRight': navigate(+1);   break;
    }
  });

  /* ----------------------------------------------------------
     FOCUS TRAP nel lightbox
  ---------------------------------------------------------- */
  lightbox.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab') return;
    var focusable = lightbox.querySelectorAll('button:not([disabled])');
    var first = focusable[0];
    var last  = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
    }
  });

  /* ----------------------------------------------------------
     TOUCH SWIPE (mobile)
  ---------------------------------------------------------- */
  var touchStartX = null;
  var touchStartY = null;

  lightbox.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  lightbox.addEventListener('touchend', function (e) {
    if (touchStartX === null) return;
    var dx = e.changedTouches[0].clientX - touchStartX;
    var dy = e.changedTouches[0].clientY - touchStartY;

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      navigate(dx < 0 ? +1 : -1);
    }
    touchStartX = null;
    touchStartY = null;
  }, { passive: true });

})();
