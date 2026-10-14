/* Writing dates come from published posts, independent of homepage pagination. */
(() => {
  function initialize() {
    const root = document.querySelector('[data-writing-calendar]');
    if (!root || root.dataset.bound) return;
    root.dataset.bound = 'true';
    const posts = JSON.parse(root.querySelector('.writing-calendar-data').textContent);
    const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
    const currentYear = Number(today.slice(0, 4));
    const years = [...new Set([currentYear, ...posts.map(p => Number(p.date.slice(0, 4)))])].sort((a, b) => b - a);
    const select = root.querySelector('#writing-calendar-year');
    years.forEach(year => {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year + ' 年';
      select.appendChild(option);
    });
    function render() {
      const year = Number(select.value);
      const grid = root.querySelector('.home-writing-grid');
      const months = root.querySelector('.home-writing-months');
      const detail = root.querySelector('#writing-calendar-detail');
      grid.replaceChildren(); months.replaceChildren(); detail.replaceChildren();
      const byDate = new Map();
      const annualPosts = posts.filter(p => p.date.startsWith(year + '-'));
      annualPosts.forEach(post => byDate.set(post.date, [...(byDate.get(post.date) || []), post]));
      root.querySelector('#writing-calendar-summary').textContent = year + ' 年 · ' + annualPosts.length + ' 篇文章 · ' + byDate.size + ' 个写作日';
      const start = Date.UTC(year, 0, 1);
      const leading = (new Date(start).getUTCDay() + 6) % 7;
      const days = (Date.UTC(year + 1, 0, 1) - start) / 86400000;
      const columns = Math.ceil((leading + days) / 7);
      root.style.setProperty('--writing-columns', columns);
      for (let i = 0; i < leading; i++) grid.appendChild(document.createElement('span'));
      for (let i = 0; i < days; i++) {
        const date = new Date(start + i * 86400000);
        const key = date.toISOString().slice(0, 10);
        const entries = byDate.get(key) || [];
        if (date.getUTCDate() === 1) {
          const label = document.createElement('span');
          label.textContent = date.getUTCMonth() + 1 + '月';
          label.style.gridColumn = Math.floor((leading + i) / 7) + 1;
          months.appendChild(label);
        }
        const cell = document.createElement(entries.length ? 'button' : 'span');
        cell.className = 'home-writing-cell';
        cell.dataset.date = key;
        cell.dataset.level = Math.min(entries.length, 4);
        cell.title = key + ' · ' + entries.length + ' 篇文章';
        if (key === today) cell.classList.add('is-today');
        if (key > today) cell.classList.add('is-future');
        if (entries.length) {
          cell.type = 'button';
          cell.setAttribute('aria-label', cell.title);
          cell.addEventListener('click', () => {
            grid.querySelectorAll('.is-selected').forEach(el => el.classList.remove('is-selected'));
            cell.classList.add('is-selected');
            detail.replaceChildren();
            const heading = document.createElement('p');
            heading.textContent = cell.title;
            detail.appendChild(heading);
            entries.forEach(post => {
              const link = document.createElement('a');
              link.href = post.path;
              link.textContent = post.title;
              detail.appendChild(link);
            });
          });
        } else cell.setAttribute('aria-hidden', 'true');
        grid.appendChild(cell);
      }
    }
    select.addEventListener('change', render);
    render();
  }
  document.addEventListener('DOMContentLoaded', initialize, { once: true });
  document.addEventListener('pjax:complete', initialize);
  if (document.readyState !== 'loading') initialize();
})();
