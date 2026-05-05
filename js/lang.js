(function () {
  'use strict';

  var LANG_KEY = 'rr_lang';

  function makeToggleHTML() {
    return '' +
      '<div class="lang-pill" role="group" aria-label="Language" data-lang="en">' +
        '<svg class="lang-pill__globe" width="14" height="14" viewBox="0 0 24 24" fill="none" ' +
             'stroke="currentColor" stroke-width="2" stroke-linecap="round" ' +
             'stroke-linejoin="round" aria-hidden="true" focusable="false">' +
          '<circle cx="12" cy="12" r="10"></circle>' +
          '<line x1="2" y1="12" x2="22" y2="12"></line>' +
          '<path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1 -4 10 15 15 0 0 1 -4 -10 15 15 0 0 1 4 -10 z"></path>' +
        '</svg>' +
        '<div class="lang-pill__track">' +
          '<div class="lang-pill__thumb" aria-hidden="true"></div>' +
          '<button class="lang-pill__opt" data-lang="en" aria-pressed="false" type="button">EN</button>' +
          '<button class="lang-pill__opt" data-lang="es" aria-pressed="false" type="button">ES</button>' +
        '</div>' +
      '</div>';
  }

  function bindButtons(container) {
    container.querySelectorAll('.lang-pill__opt[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () { applyLang(btn.dataset.lang); });
    });
  }

  function applyLang(lang) {
    document.querySelectorAll('[data-en]').forEach(function (el) {
      el.innerHTML = lang === 'es'
        ? el.getAttribute('data-es')
        : el.getAttribute('data-en');
    });

    // Sliding-pill state + thumb position
    document.querySelectorAll('.lang-pill').forEach(function (pill) {
      pill.setAttribute('data-lang', lang);
      pill.querySelectorAll('.lang-pill__opt[data-lang]').forEach(function (btn) {
        btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
      });
    });

    var titleEl = document.querySelector('title[data-en]');
    if (titleEl) {
      document.title = lang === 'es'
        ? titleEl.getAttribute('data-es')
        : titleEl.getAttribute('data-en');
    }
    document.documentElement.lang = lang;
    localStorage.setItem(LANG_KEY, lang);
  }

  function injectWidget() {
    var sbBottom = document.querySelector('.sb-bottom');
    if (sbBottom && !sbBottom.querySelector('.lang-toggle-widget')) {
      var w = document.createElement('div');
      w.className = 'lang-toggle-widget';
      w.innerHTML = makeToggleHTML();
      sbBottom.insertBefore(w, sbBottom.firstChild);
      bindButtons(w);
    }
    if (!document.querySelector('.lang-toggle-mobile')) {
      var wm = document.createElement('div');
      wm.className = 'lang-toggle-widget lang-toggle-mobile';
      wm.innerHTML = makeToggleHTML();
      document.body.appendChild(wm);
      bindButtons(wm);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    injectWidget();
    applyLang(localStorage.getItem(LANG_KEY) || 'en');
  });
}());
