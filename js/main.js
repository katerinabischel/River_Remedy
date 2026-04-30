/* River Remedy — Navigation & Interactions */
(function () {
  'use strict';

  function setActiveLink() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.sb-link').forEach(function (a) {
      const href = a.getAttribute('href');
      if (href === page || (page === '' && href === 'index.html')) {
        a.classList.add('active');
      }
    });
  }

  function initLightbox() {
    const lb = document.getElementById('lightbox');
    if (!lb) return;
    const lbImg = lb.querySelector('img');
    const lbClose = lb.querySelector('.lightbox-close');

    document.querySelectorAll('.viz-img-wrap img, .lightbox-trigger').forEach(function (img) {
      img.addEventListener('click', function () {
        lbImg.src = img.src || img.dataset.src;
        lb.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeLb() {
      lb.classList.remove('open');
      document.body.style.overflow = '';
      setTimeout(function () { lbImg.src = ''; }, 200);
    }

    lbClose && lbClose.addEventListener('click', closeLb);
    lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLb(); });
  }

  function initTabs() {
    document.querySelectorAll('.tab-bar').forEach(function (bar) {
      const tabs = bar.querySelectorAll('[data-tab]');
      const panelParent = bar.closest('[data-tabs-parent]') || document;
      tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          tabs.forEach(function (t) { t.classList.remove('active'); });
          panelParent.querySelectorAll('[data-panel]').forEach(function (p) { p.hidden = true; });
          tab.classList.add('active');
          const panel = panelParent.querySelector('[data-panel="' + tab.dataset.tab + '"]');
          if (panel) panel.hidden = false;
        });
      });
      if (tabs[0]) tabs[0].click();
    });
  }

  function initIframeModal() {
    const modal = document.getElementById('iframe-modal');
    if (!modal) return;
    const frame = modal.querySelector('.iframe-modal-frame');
    const titleEl = modal.querySelector('.iframe-modal-title');
    const expandButtons = document.querySelectorAll('.viz-expand-btn');
    if (!expandButtons.length) return;

    let lastFocused = null;

    function openModal(triggerBtn) {
      const src = triggerBtn.getAttribute('data-iframe-src');
      const title = triggerBtn.getAttribute('data-iframe-title') || '';
      if (!src) return;
      lastFocused = triggerBtn;
      titleEl.textContent = title;
      frame.setAttribute('title', title);
      frame.src = src;
      modal.hidden = false;
      requestAnimationFrame(function () {
        modal.setAttribute('data-open', 'true');
      });
      document.body.style.overflow = 'hidden';
      const closeBtn = modal.querySelector('.iframe-modal-close');
      if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
      if (modal.getAttribute('data-open') !== 'true') return;
      modal.removeAttribute('data-open');
      setTimeout(function () {
        modal.hidden = true;
        frame.src = '';
        titleEl.textContent = '';
        document.body.style.overflow = '';
        if (lastFocused && typeof lastFocused.focus === 'function') {
          lastFocused.focus();
        }
        lastFocused = null;
      }, 200);
    }

    expandButtons.forEach(function (btn) {
      btn.addEventListener('click', function () { openModal(btn); });
    });

    modal.querySelectorAll('[data-iframe-modal-close]').forEach(function (el) {
      el.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.getAttribute('data-open') === 'true') {
        closeModal();
      }
    });

    modal.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab') return;
      if (modal.getAttribute('data-open') !== 'true') return;
      const focusables = modal.querySelectorAll(
        'button, [href], input, select, textarea, iframe, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  function initMapOverlay() {
    document.querySelectorAll('.map-interactive').forEach(function (wrap) {
      wrap.addEventListener('click', function () {
        wrap.classList.add('active');
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        document.querySelectorAll('.map-interactive.active').forEach(function (wrap) {
          wrap.classList.remove('active');
        });
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    setActiveLink();
    initLightbox();
    initIframeModal();
    initTabs();
    initMapOverlay();
  });
}());
