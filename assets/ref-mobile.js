(function () {
  const layout = document.querySelector('.ref-layout');
  const sidebar = document.querySelector('.ref-sidebar');
  if (!layout || !sidebar) return;

  const mq = window.matchMedia('(max-width: 900px)');

  const backdrop = document.createElement('button');
  backdrop.type = 'button';
  backdrop.className = 'ref-nav-backdrop';
  backdrop.setAttribute('aria-label', 'Закрыть оглавление');
  backdrop.hidden = true;

  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'ref-mobile-nav-btn';
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'ref-sidebar');
  toggle.textContent = 'Оглавление';

  sidebar.id = 'ref-sidebar';

  function closeNav() {
    layout.classList.remove('ref-nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    backdrop.hidden = true;
    document.body.classList.remove('ref-nav-lock');
  }

  function openNav() {
    layout.classList.add('ref-nav-open');
    toggle.setAttribute('aria-expanded', 'true');
    backdrop.hidden = false;
    document.body.classList.add('ref-nav-lock');
  }

  function onToggle() {
    if (layout.classList.contains('ref-nav-open')) {
      closeNav();
    } else {
      openNav();
    }
  }

  toggle.addEventListener('click', onToggle);
  backdrop.addEventListener('click', closeNav);

  sidebar.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
      if (mq.matches) closeNav();
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNav();
  });

  mq.addEventListener('change', (event) => {
    if (!event.matches) closeNav();
  });

  layout.insertBefore(backdrop, sidebar);
  layout.insertBefore(toggle, backdrop);

  document.querySelectorAll('.ref-content table').forEach((table) => {
    if (table.parentElement?.classList.contains('table-scroll')) return;
    const wrap = document.createElement('div');
    wrap.className = 'table-scroll';
    table.parentNode?.insertBefore(wrap, table);
    wrap.appendChild(table);
  });
})();
