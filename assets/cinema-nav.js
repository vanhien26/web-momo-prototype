/* =========================================================
   cinema-nav.js
   Injects shared nav + mobile bottom nav into all Cinema pages
   Usage: injectCinemaNav('dang-chieu') — call after DOMContentLoaded
   activeTab options: 'phim' | 'dang-chieu' | 'sap-chieu' | 'person' | 'rap' | 'top-phim' | 'the-loai' | 'series'
   ========================================================= */

(function() {
  const MOMO_LOGO = 'https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg';
  const CINEMA_ICON = 'https://homepage.momocdn.net/img/momo-amazone-s3-api-240808153440-638587280804204391.svg';

  const NAV_LINKS = [
    { id: 'dang-chieu', label: 'Đang chiếu',  href: '/cinema/dang-chieu' },
    { id: 'sap-chieu',  label: 'Sắp chiếu',   href: '/cinema/sap-chieu' },
    { id: 'person',     label: 'Diễn viên',    href: '/cinema/person' },
    { id: 'rap',        label: 'Rạp',          href: '/cinema/rap' },
    { id: 'top-phim',  label: 'Top phim',      href: '/cinema/top-phim' },
    { id: 'the-loai',  label: 'Thể loại',      href: '/cinema/genres' },
    { id: 'series',    label: 'TV Series',      href: '/cinema/series' },
  ];

  // SVG icons for bottom nav
  const BNAV_ICONS = {
    phim: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/></svg>',
    'dang-chieu': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>',
    'sap-chieu': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>',
    person: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    rap: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
  };

  const BNAV_TABS = [
    { id: 'phim',       label: 'Phim',       href: '/cinema' },
    { id: 'dang-chieu', label: 'Đang chiếu', href: '/cinema/dang-chieu' },
    { id: 'sap-chieu',  label: 'Sắp chiếu',  href: '/cinema/sap-chieu' },
    { id: 'person',     label: 'Diễn viên',  href: '/cinema/person' },
    { id: 'rap',        label: 'Rạp',        href: '/cinema/rap' },
  ];

  window.injectCinemaNav = function(activeTab) {
    // Build desktop nav links
    const linksHtml = NAV_LINKS.map(l =>
      `<button class="nav-link${l.id === activeTab ? ' on' : ''}" onclick="location.href='${l.href}'">${l.label}</button>`
    ).join('');

    // Build nav HTML
    const navHtml = `
<nav class="site-nav" id="cinemaNav">
  <div class="nav-inner">
    <a class="nav-lab-link" href="../lab.html" style="font-size:12px;font-weight:700;color:var(--gray-400);text-decoration:none;display:flex;align-items:center;gap:4px;flex-shrink:0;padding:4px 8px;border-radius:var(--r-sm);transition:all .15s" onmouseover="this.style.background='var(--gray-100)';this.style.color='var(--gray-700)'" onmouseout="this.style.background='';this.style.color='var(--gray-400)'">← Lab</a>
    <a class="nav-logo" href="/cinema" style="display:flex;align-items:center;gap:0;text-decoration:none;flex-shrink:0">
      <img src="${MOMO_LOGO}" alt="MoMo" height="28" style="display:block">
      <span style="width:1px;height:18px;background:var(--gray-200);margin:0 8px;flex-shrink:0;display:inline-block"></span>
      <span style="display:flex;align-items:center;gap:5px">
        <img src="${CINEMA_ICON}" alt="" height="22" style="display:block;flex-shrink:0">
        <span style="font-size:14px;font-weight:800;color:var(--pink-500);letter-spacing:-.01em;line-height:1">Cinema</span>
      </span>
    </a>
    <div class="nav-links">${linksHtml}</div>
    <div class="nav-search">
      <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;color:var(--gray-400)"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      <input type="text" placeholder="Tìm phim, rạp..." autocomplete="off">
    </div>
    <div class="nav-right"></div>
  </div>
</nav>`;

    // Build bottom nav HTML
    const bnavHtml = `
<nav class="mobile-bnav" id="cinemaBnav">
  ${BNAV_TABS.map(t =>
    `<a class="mbn-item${t.id === activeTab ? ' on' : ''}" href="${t.href}">${BNAV_ICONS[t.id]}<span>${t.label}</span></a>`
  ).join('')}
</nav>`;

    // Insert nav at top of body
    document.body.insertAdjacentHTML('afterbegin', navHtml);

    // Insert bottom nav at end of body (before toast)
    const toast = document.getElementById('toastEl');
    if (toast) {
      toast.insertAdjacentHTML('beforebegin', bnavHtml);
    } else {
      document.body.insertAdjacentHTML('beforeend', bnavHtml);
    }

    // Init lucide icons if available
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  };

  // Inject ONLY the mobile bottom nav (for pages with their own desktop nav)
  window.injectCinemaBnav = function(activeTab) {
    const bnavHtml = `
<nav class="mobile-bnav" id="cinemaBnav">
  ${BNAV_TABS.map(t =>
    `<a class="mbn-item${t.id === activeTab ? ' on' : ''}" href="${t.href}">${BNAV_ICONS[t.id]}<span>${t.label}</span></a>`
  ).join('')}
</nav>`;
    const toast = document.getElementById('toastEl');
    if (toast) {
      toast.insertAdjacentHTML('beforebegin', bnavHtml);
    } else {
      document.body.insertAdjacentHTML('beforeend', bnavHtml);
    }
  };
})();
