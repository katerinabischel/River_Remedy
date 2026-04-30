(function () {
  'use strict';

  var LANG_KEY = 'rr_lang';

  function makeToggleHTML() {
    return '<div class="toggle-group">' +
      '<button class="toggle-btn" data-lang="en">EN</button>' +
      '<button class="toggle-btn" data-lang="es">ES</button>' +
      '</div>';
  }

  function bindButtons(container) {
    container.querySelectorAll('.toggle-btn[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () { applyLang(btn.dataset.lang); });
    });
  }

  function applyLang(lang) {
    document.querySelectorAll('[data-en]').forEach(function (el) {
      el.innerHTML = lang === 'es'
        ? el.getAttribute('data-es')
        : el.getAttribute('data-en');
    });
    document.querySelectorAll('.toggle-btn[data-lang]').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
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
