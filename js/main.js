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

  function initGlossaryTooltips() {
    var terms = document.querySelectorAll('dfn.term');
    if (!terms.length) return;
    terms.forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.stopPropagation();
        var isOpen = el.getAttribute('data-open') === 'true';
        document.querySelectorAll('dfn.term[data-open="true"]').forEach(function (o) {
          if (o !== el) o.removeAttribute('data-open');
        });
        if (isOpen) {
          el.removeAttribute('data-open');
        } else {
          el.setAttribute('data-open', 'true');
        }
      });
    });
    document.addEventListener('click', function () {
      document.querySelectorAll('dfn.term[data-open="true"]').forEach(function (el) {
        el.removeAttribute('data-open');
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        document.querySelectorAll('dfn.term[data-open="true"]').forEach(function (el) {
          el.removeAttribute('data-open');
        });
      }
    });
  }

  function initMobileNav() {
    var sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    var toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'mobile-nav-toggle';
    toggle.setAttribute('aria-label', 'Open navigation menu');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'site-sidebar');
    toggle.innerHTML =
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" ' +
      'stroke="currentColor" stroke-width="2.2" stroke-linecap="round" ' +
      'stroke-linejoin="round" aria-hidden="true" focusable="false">' +
      '<line x1="3" y1="6" x2="21" y2="6"></line>' +
      '<line x1="3" y1="12" x2="21" y2="12"></line>' +
      '<line x1="3" y1="18" x2="21" y2="18"></line>' +
      '</svg>';
    document.body.appendChild(toggle);

    var backdrop = document.createElement('div');
    backdrop.className = 'mobile-nav-backdrop';
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.appendChild(backdrop);

    if (!sidebar.id) sidebar.id = 'site-sidebar';

    var close = document.createElement('button');
    close.type = 'button';
    close.className = 'mobile-nav-close';
    close.setAttribute('aria-label', 'Close navigation menu');
    close.innerHTML =
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" ' +
      'stroke="currentColor" stroke-width="2.2" stroke-linecap="round" ' +
      'stroke-linejoin="round" aria-hidden="true" focusable="false">' +
      '<line x1="18" y1="6" x2="6" y2="18"></line>' +
      '<line x1="6" y1="6" x2="18" y2="18"></line>' +
      '</svg>';
    sidebar.insertBefore(close, sidebar.firstChild);

    function openDrawer() {
      document.body.setAttribute('data-mobile-nav', 'open');
      toggle.setAttribute('aria-expanded', 'true');
      setTimeout(function () { close.focus(); }, 60);
    }

    function closeDrawer() {
      if (document.body.getAttribute('data-mobile-nav') !== 'open') return;
      document.body.removeAttribute('data-mobile-nav');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }

    toggle.addEventListener('click', openDrawer);
    close.addEventListener('click', closeDrawer);
    backdrop.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDrawer();
    });

    sidebar.querySelectorAll('.sb-link').forEach(function (link) {
      link.addEventListener('click', function () {
        closeDrawer();
      });
    });

    var mq = window.matchMedia('(min-width: 901px)');
    if (mq.addEventListener) {
      mq.addEventListener('change', function (e) { if (e.matches) closeDrawer(); });
    } else if (mq.addListener) {
      mq.addListener(function (e) { if (e.matches) closeDrawer(); });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    setActiveLink();
    initLightbox();
    initIframeModal();
    initTabs();
    initMapOverlay();
    initGlossaryTooltips();
    initMobileNav();
  });
}());
