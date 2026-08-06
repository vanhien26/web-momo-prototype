// proto-nav.js — shared top nav bar for Flow/Tool prototype pages
(function () {
  const style = document.createElement('style');
  style.textContent = `
    #proto-top-nav {
      position: sticky; top: 0; z-index: 300;
      background: #fff; border-bottom: 1px solid #D1CDD3;
      display: flex; align-items: center; gap: 8px;
      padding: 0 24px; height: 44px;
      font-family: 'MoMoTrustSans', system-ui, sans-serif;
      -webkit-font-smoothing: antialiased;
    }
    #proto-top-nav .pn-back {
      display: inline-flex; align-items: center; gap: 5px;
      font-size: 12px; font-weight: 700; color: #8C8594;
      text-decoration: none; padding: 4px 0;
      transition: color .15s; white-space: nowrap;
    }
    #proto-top-nav .pn-back:hover { color: #EB2F96; }
    #proto-top-nav .pn-sep {
      font-size: 12px; font-weight: 500; color: #D1CDD3;
    }
    #proto-top-nav .pn-title {
      font-size: 13px; font-weight: 700; color: #1C171A;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    #proto-top-nav .pn-badge {
      font-size: 10px; font-weight: 800; letter-spacing: .05em;
      text-transform: uppercase; color: #EB2F96;
      background: #FFF0F9; border-radius: 9999px;
      padding: 2px 8px; margin-left: 4px; white-space: nowrap;
    }
  `;
  document.head.appendChild(style);

  const pageTitle = (document.querySelector('meta[name="proto-name"]')?.content
    || document.title.split(/\s[—–-]\s/)[0]).trim();

  const badge = document.querySelector('meta[name="proto-badge"]')?.content || '';

  const nav = document.createElement('nav');
  nav.id = 'proto-top-nav';
  nav.setAttribute('aria-label', 'Prototype navigation');
  nav.innerHTML = `
    <a class="pn-back" href="/lab.html" target="_top">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      Lab
    </a>
    <span class="pn-sep">/</span>
    <span class="pn-title">${pageTitle}</span>
    ${badge ? `<span class="pn-badge">${badge}</span>` : ''}
  `;

  document.body.insertBefore(nav, document.body.firstChild);
})();
