/* Interactions for the minimal reading theme. No decorative background loops. */
(() => {
  function initialize() {
    const root = document.documentElement;
    const toggle = document.getElementById('nightmode-button');
    if (toggle && !toggle.dataset.bound) {
      toggle.dataset.bound = 'true';
      toggle.addEventListener('click', () => {
        const dark = root.dataset.theme !== 'dark';
        if (dark) activateDarkMode();
        else activateLightMode();
        saveToLocal.set('theme', dark ? 'dark' : 'light', 365);
        updateThemeLabel();
      });
    }
    updateThemeLabel();

    document.querySelectorAll('#nav a.site-page').forEach(link => {
      if (new URL(link.href, location.origin).pathname === location.pathname) {
        link.setAttribute('aria-current', 'page');
      }
    });

    const sidebar = document.querySelector('[data-knowledge-sidebar]');
    const close = document.querySelector('[data-knowledge-sidebar-close]');
    const open = document.querySelector('[data-knowledge-sidebar-open]');
    const wrap = document.getElementById('body-wrap');
    if (sidebar && close && open && wrap) {
      const collapse = (value, persist = true) => {
        wrap.classList.toggle('knowledge-sidebar-collapsed', value);
        open.hidden = !value;
        close.setAttribute('aria-expanded', String(!value));
        open.setAttribute('aria-expanded', String(!value));
        if (persist) {
          try { localStorage.setItem('knowledge-post-sidebar-collapsed', value ? '1' : '0'); } catch (_) {}
        }
      };
      if (!close.dataset.bound) {
        close.dataset.bound = 'true';
        close.addEventListener('click', () => collapse(true));
        open.addEventListener('click', () => collapse(false));
      }
      try {
        const saved = localStorage.getItem('knowledge-post-sidebar-collapsed');
        collapse(innerWidth < 1400 || saved === '1', false);
      } catch (_) { collapse(innerWidth < 1400, false); }
    }
  }

  function updateThemeLabel() {
    const toggle = document.getElementById('nightmode-button');
    if (!toggle) return;
    const dark = document.documentElement.dataset.theme === 'dark';
    toggle.setAttribute('aria-label', dark ? '切换浅色模式' : '切换深色模式');
    toggle.title = toggle.getAttribute('aria-label');
    toggle.querySelector('i').className = dark ? 'fas fa-sun' : 'fas fa-moon';
  }

  document.addEventListener('DOMContentLoaded', initialize);
  document.addEventListener('pjax:complete', initialize);
  if (document.readyState !== 'loading') initialize();
})();
