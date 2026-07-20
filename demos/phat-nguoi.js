(() => {
  const vehicleLabels = { oto: 'Ô tô', xemay: 'Xe máy', xedien: 'Xe máy điện' };

  // ── MOCK VIOLATION DATA ──────────────────────────────────────────────────────
  const MOCK_DATA = {
    '29A12345': {
      plate: '29A12345',
      violations: [
        {
          id: 'v1',
          type: 'Vượt đèn đỏ',
          severity: 'red',
          date: '15/06/2026',
          time: '08:23',
          road: 'Ngã tư Khuất Duy Tiến - Nguyễn Trãi',
          route: 'QL6, đoạn Km 8+400, Hà Nội',
          unit: 'Phòng CSGT - Công an TP. Hà Nội',
          status: 'Chưa xử lý',
          fine: { oto: '4.000.000 - 6.000.000', xemay: '800.000 - 1.000.000', xedien: '800.000 - 1.000.000' },
          article: {
            tag: 'Luật giao thông',
            title: 'Vượt đèn đỏ bị phạt bao nhiêu? Mức phạt ô tô, xe máy 2026',
            url: '/mospark-blog/vuot-den-do-bi-phat-bao-nhieu',
            readTime: '5 phút đọc',
          },
        },
        {
          id: 'v2',
          type: 'Quá tốc độ từ 20-35 km/h',
          severity: 'amber',
          date: '20/06/2026',
          time: '14:47',
          road: 'Đường Vành đai 3, đoạn Km 8+200',
          route: 'Vành đai 3 - Hoàng Mai, Hà Nội',
          unit: 'Phòng CSGT - Công an TP. Hà Nội',
          status: 'Chưa xử lý',
          fine: { oto: '3.000.000 - 5.000.000', xemay: '600.000 - 800.000', xedien: '600.000 - 800.000' },
          article: {
            tag: 'Mức phạt',
            title: 'Phạt quá tốc độ 2026: Bảng mức phạt chi tiết theo từng loại xe',
            url: '/mospark-blog/phat-qua-toc-do-2026',
            readTime: '6 phút đọc',
          },
        },
      ],
    },
  };

  // ── RENDER HELPERS ───────────────────────────────────────────────────────────
  function iconSvg(name) {
    const icons = {
      calendar: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
      location: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
      road: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 20L12 4l7 16"/><line x1="8" y1="13" x2="16" y2="13"/></svg>`,
      unit: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
      article: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
      arrow: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>`,
      momo: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      phone: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>`,
      inspect: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><polyline points="8 11 10 13 14 9"/></svg>`,
      shield: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
      car: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M9 17h6"/></svg>`,
      wrench: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
      card: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
      fuel: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="22" x2="15" y2="22"/><line x1="4" y1="9" x2="14" y2="9"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2 2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/></svg>`,
      parking: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>`,
    };
    return icons[name] || '';
  }

  function renderViolationCard(v, vehicle) {
    const fineRange = v.fine[vehicle] || v.fine.oto;
    return `
      <div class="vr-card">
        <div class="vr-card-main">
          <div class="vr-violation-bar${v.severity === 'red' ? ' is-red' : ''}"></div>
          <div class="vr-card-body">
            <div class="vr-name-block">
              <div class="vr-violation-name">${v.type}</div>
              <div class="vr-meta-line">${iconSvg('calendar')} ${v.date} ${v.time} &nbsp;·&nbsp; ${iconSvg('location')} ${v.road}</div>
            </div>
            <div class="vr-fine-block">
              <div class="vr-fine-amount">${fineRange}đ</div>
              <div class="vr-fine-unit">mức phạt tham khảo</div>
            </div>
            <span class="vr-status-pill">${v.status}</span>
          </div>
        </div>
        <div class="vr-card-footer">
          <a class="vr-guide-link" href="${v.article.url}">${v.article.title} ${iconSvg('arrow')}</a>
        </div>
      </div>`;
  }

  // ── CROSS-SELL theo trạng thái kết quả ─────────────────────────────────────
  // 2 case: 'has-violation' (chuỗi nghĩa vụ pháp lý) / 'clean' (giữ chân bằng hồ sơ xe)
  function renderCrossSell(state) {
    // Mỗi item phải giải quyết 1 job của người vừa tra phạt nguội - không phải directory dịch vụ.
    // Job có vi phạm: "xử lý xong nghĩa vụ để xe hợp lệ lưu thông".
    // Job sạch: "duy trì trạng thái sạch, không phải lo lần sau".
    const ALL = {
      nopphat:  { href: 'phat-nguoi-nop-qua-momo.html', icon: 'momo', name: 'Nộp phạt online', hint: 'Không cần đến kho bạc' },
      giaidap:  { href: 'phat-nguoi-giai-dap.html', icon: 'article', name: 'Mức phạt & khiếu nại', hint: 'Hiểu lỗi trước khi nộp' },
      dangkiem: { href: '/dang-kiem', icon: 'inspect', name: 'Đăng kiểm', hint: 'Vi phạm chưa nộp sẽ bị chặn' },
      tnds:     { href: '/bao-hiem-o-to', icon: 'shield', name: 'Bảo hiểm TNDS', hint: 'Bắt buộc khi đăng kiểm' },
      hoso:     { href: '/vehicle-hub#ho-so-xe', icon: 'car', name: 'Hồ sơ xe', hint: 'Tự quét vi phạm hàng tuần' },
      baoduong: { href: '/bao-duong-xe', icon: 'wrench', name: 'Bảo dưỡng xe', hint: 'Đèn hỏng, lốp mòn cũng bị phạt' },
      cuuho:    { href: '/vehicle-hub/cuu-ho', icon: 'phone', name: 'Cứu hộ 24/7', hint: 'Lưu sẵn trước chuyến đi xa' },
      epass:    { href: '/epass', icon: 'card', name: 'Nạp ePass', hint: 'Tự động nạp, không lo dừng trạm' },
    };
    // Cả 2 case đều show đủ bộ dịch vụ Vehicle hub, chỉ khác thứ tự ưu tiên theo job
    const order = state === 'has-violation'
      ? ['dangkiem', 'tnds', 'hoso', 'baoduong', 'cuuho', 'epass']
      : ['hoso', 'dangkiem', 'tnds', 'baoduong', 'cuuho', 'epass'];
    return `
      <div class="pn-xsell" data-xsell="${state}">
        <span class="vr-sub-badge">Dịch vụ dành cho xe bạn</span>
        <div class="pn-xsell-grid">
          ${order.map(k => { const c = ALL[k]; return `
            <a class="pn-xsell-card" href="${c.href}" data-xsell-item="${k}">
              <span class="pn-xsell-icon">${iconSvg(c.icon)}</span>
              <span class="pn-xsell-body">
                <strong>${c.name}</strong>
                <span class="pn-xsell-desc">${c.hint}</span>
              </span>
            </a>`; }).join('')}
        </div>
      </div>`;
  }

  function renderCleanSection(plate, vehicle) {
    const vLabel = vehicleLabels[vehicle] || 'Ô tô';
    const section = document.getElementById('violationResultSection');
    const inner = document.getElementById('violationResultInner');
    if (!section || !inner) return;

    inner.innerHTML = `
      <div class="vr-header">
        <div class="vr-header-left">
          <span class="vr-plate">${plate}</span>
          <span class="vr-vehicle-tag">${vLabel}</span>
        </div>
        <span class="vr-status-badge is-clean">
          Không có vi phạm chờ xử lý
        </span>
      </div>

      <div class="vr-clean-card">
        ${iconSvg('shield')}
        <div>
          <strong>Chưa thấy vi phạm trong dữ liệu mô phỏng</strong>
          <p>Dữ liệu có thể cần thời gian xác minh và đồng bộ. Nên kiểm tra lại định kỳ, đặc biệt sau chuyến đi dài hoặc trước kỳ đăng kiểm.</p>
        </div>
      </div>

      ${renderCrossSell('clean')}
    `;

    section.classList.add('is-open');
    section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function renderViolationSection(data, vehicle) {
    const vLabel = vehicleLabels[vehicle] || 'Ô tô';
    const count = data.violations.length;
    const section = document.getElementById('violationResultSection');
    const inner = document.getElementById('violationResultInner');
    if (!section || !inner) return;

    inner.innerHTML = `
      <div class="vr-header">
        <div class="vr-header-left">
          <span class="vr-plate">${data.plate}</span>
          <span class="vr-vehicle-tag">${vLabel}</span>
        </div>
        <span class="vr-status-badge">
          ${count} vi phạm chờ xử lý
        </span>
      </div>

      <div class="vr-list">
        ${data.violations.map(v => renderViolationCard(v, vehicle)).join('')}
      </div>

      <div class="vr-sub-card">
        <div class="vr-sub-top">
          <div class="vr-sub-badge">Cảnh báo sớm</div>
          <div class="vr-sub-title">Theo dõi biển số tự động</div>
          <div class="vr-sub-desc">Nhận thông báo ngay khi có vi phạm mới - không cần tra cứu thủ công.</div>
          <ul class="vr-sub-features">
            <li>Theo dõi không giới hạn biển số</li>
            <li>Cảnh báo qua MoMo (notification + inbox)</li>
            <li>Tra cứu ưu tiên, không giới hạn lượt</li>
          </ul>
        </div>
        <div class="vr-sub-plans">
          <label class="vr-sub-plan">
            <input type="radio" name="subPlan" value="month" checked>
            <div class="vr-sub-plan-body">
              <span class="vr-sub-plan-label">Tháng</span>
              <span class="vr-sub-plan-price">19.000đ<span>/tháng</span></span>
            </div>
          </label>
          <label class="vr-sub-plan is-featured">
            <input type="radio" name="subPlan" value="year">
            <div class="vr-sub-plan-body">
              <span class="vr-sub-plan-label">Năm <em>Tiết kiệm 33%</em></span>
              <span class="vr-sub-plan-price">152.000đ<span>/năm</span></span>
            </div>
          </label>
        </div>
        <button class="vr-sub-cta">Bật cảnh báo tự động</button>
      </div>

      <div class="vr-actions">
        <button class="vr-btn-primary" onclick="window.open('https://momo.vn','_blank')">
          ${iconSvg('momo')} Nộp phạt qua MoMo
        </button>
        <button class="vr-btn-secondary">
          ${iconSvg('phone')} Xem chi tiết trên App
        </button>
      </div>

      ${renderCrossSell('has-violation')}
    `;

    section.classList.add('is-open');
  }

  // ── LOOKUP FORMS ─────────────────────────────────────────────────────────────
  document.querySelectorAll('[data-lookup-form]').forEach(form => {
    let vehicle = 'oto';
    const buttons = [...form.querySelectorAll('[data-vehicle]')];
    const input = form.querySelector('[data-plate-input]');
    const result = form.querySelector('[data-lookup-result]');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        vehicle = button.dataset.vehicle;
        buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      });
    });

    form.addEventListener('submit', event => {
      event.preventDefault();
      const plate = (input?.value || '').replace(/[\s.\-]/g, '').toUpperCase();
      if (!plate || plate.length < 7) {
        result.className = 'lookup-result is-visible is-alert';
        result.innerHTML = '<strong>Biển số chưa đúng định dạng</strong><p>Nhập liền biển số, ví dụ 29A12345.</p>';
        input?.focus();
        return;
      }

      const location = form.dataset.location || 'toàn quốc';
      const mockData = MOCK_DATA[plate];

      if (mockData) {
        result.className = '';
        result.innerHTML = '';
        renderViolationSection(mockData, vehicle);
      } else {
        result.className = '';
        result.innerHTML = '';
        renderCleanSection(plate, vehicle);
      }
    });
  });

  // ── LOCATION SEARCH ──────────────────────────────────────────────────────────
  const search = document.querySelector('[data-location-search]');
  if (search) {
    const cards = [...document.querySelectorAll('[data-location-card]')];
    const count = document.querySelector('[data-location-count]');
    search.addEventListener('input', () => {
      const query = search.value.trim().toLocaleLowerCase('vi');
      let visible = 0;
      cards.forEach(card => {
        const matched = card.textContent.toLocaleLowerCase('vi').includes(query);
        card.classList.toggle('is-hidden', !matched);
        if (matched) visible += 1;
      });
      if (count) count.textContent = `${visible} địa phương`;
    });
  }
})();

// Trust counter animation
(function () {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  function animateCounter(el) {
    const target = parseInt(el.dataset.counter, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const startTime = performance.now();

    function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.round(easeOut(progress) * target);
      el.textContent = value.toLocaleString('vi-VN') + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(el => observer.observe(el));
})();

// ── Penalty Calculator ──
(function () {
  const VIOLATIONS = [
    { id: 'speed-1020', label: 'Vượt tốc độ 10–20 km/h', group: 'Tốc độ',
      data: { oto: { fine:[3e6,5e6], suspend:0 }, xemay: { fine:[400e3,600e3], suspend:0 }, xedien: { fine:[400e3,600e3], suspend:0 } } },
    { id: 'speed-2035', label: 'Vượt tốc độ 20–35 km/h', group: 'Tốc độ',
      data: { oto: { fine:[5e6,8e6], suspend:[1,3] }, xemay: { fine:[1e6,3e6], suspend:[1,3] }, xedien: { fine:[1e6,3e6], suspend:[1,3] } } },
    { id: 'speed-35plus', label: 'Vượt tốc độ trên 35 km/h', group: 'Tốc độ',
      data: { oto: { fine:[10e6,12e6], suspend:[2,4] }, xemay: { fine:[4e6,6e6], suspend:[2,4] }, xedien: { fine:[4e6,6e6], suspend:[2,4] } } },
    { id: 'red-light', label: 'Vượt đèn đỏ / tín hiệu giao thông', group: 'Đèn tín hiệu',
      data: { oto: { fine:[4e6,6e6], suspend:[1,3] }, xemay: { fine:[4e6,6e6], suspend:[1,3] }, xedien: { fine:[4e6,6e6], suspend:[1,3] } } },
    { id: 'alcohol-1', label: 'Nồng độ cồn mức 1 (< 0,25 mg/L)', group: 'Nồng độ cồn',
      data: { oto: { fine:[6e6,8e6], suspend:[10,12] }, xemay: { fine:[2e6,3e6], suspend:[10,12] }, xedien: { fine:[2e6,3e6], suspend:[10,12] } } },
    { id: 'alcohol-2', label: 'Nồng độ cồn mức 2 (0,25–0,4 mg/L)', group: 'Nồng độ cồn',
      data: { oto: { fine:[16e6,18e6], suspend:[16,18] }, xemay: { fine:[4e6,5e6], suspend:[16,18] }, xedien: { fine:[4e6,5e6], suspend:[16,18] } } },
    { id: 'alcohol-3', label: 'Nồng độ cồn mức 3 (> 0,4 mg/L)', group: 'Nồng độ cồn',
      data: { oto: { fine:[30e6,40e6], suspend:[22,24] }, xemay: { fine:[6e6,8e6], suspend:[22,24] }, xedien: { fine:[6e6,8e6], suspend:[22,24] } } },
    { id: 'wrong-way', label: 'Chạy ngược chiều / vào đường cấm', group: 'Làn đường',
      data: { oto: { fine:[16e6,18e6], suspend:[1,3] }, xemay: { fine:[4e6,5e6], suspend:[1,3] }, xedien: { fine:[4e6,5e6], suspend:[1,3] } } },
    { id: 'lane-vio', label: 'Lấn làn / không đúng phần đường', group: 'Làn đường',
      data: { oto: { fine:[300e3,400e3], suspend:0 }, xemay: { fine:[100e3,200e3], suspend:0 }, xedien: { fine:[100e3,200e3], suspend:0 } } },
    { id: 'phone', label: 'Dùng điện thoại khi lái xe', group: 'Phân tâm',
      data: { oto: { fine:[1e6,2e6], suspend:0 }, xemay: { fine:[800e3,1e6], suspend:0 }, xedien: { fine:[800e3,1e6], suspend:0 } } },
    { id: 'no-helmet', label: 'Không đội mũ bảo hiểm', group: 'Trang bị', only:['xemay','xedien'],
      data: { xemay: { fine:[400e3,600e3], suspend:0 }, xedien: { fine:[400e3,600e3], suspend:0 } } },
    { id: 'no-license', label: 'Không có GPLX / GPLX hết hạn', group: 'Giấy tờ', only:['oto','xemay'],
      data: { oto: { fine:[4e6,6e6], suspend:0 }, xemay: { fine:[1e6,2e6], suspend:0 } } },
    { id: 'no-insurance', label: 'Không có bảo hiểm TNDS', group: 'Giấy tờ',
      data: { oto: { fine:[400e3,600e3], suspend:0 }, xemay: { fine:[100e3,200e3], suspend:0 }, xedien: { fine:[100e3,200e3], suspend:0 } } },
  ];

  const vSelect = document.getElementById('pcViolation');
  const result  = document.getElementById('pcResult');
  const pills   = document.querySelectorAll('#pcVehiclePills .pc-vpill');
  if (!vSelect || !result) return;

  let currentVehicle = 'xemay';

  function fmtMoney(n) {
    return n.toLocaleString('vi-VN') + ' đ';
  }

  function severity(fine, vehicle) {
    const mid = (fine[0] + fine[1]) / 2;
    if (vehicle === 'oto') {
      if (mid < 2e6)  return { cls: 'sev-low',    label: 'Nhẹ' };
      if (mid < 8e6)  return { cls: 'sev-mid',    label: 'Trung bình' };
      if (mid < 18e6) return { cls: 'sev-high',   label: 'Nặng' };
      return                  { cls: 'sev-severe', label: 'Rất nặng' };
    } else {
      if (mid < 500e3) return { cls: 'sev-low',    label: 'Nhẹ' };
      if (mid < 2e6)   return { cls: 'sev-mid',    label: 'Trung bình' };
      if (mid < 5e6)   return { cls: 'sev-high',   label: 'Nặng' };
      return                   { cls: 'sev-severe', label: 'Rất nặng' };
    }
  }

  function buildOptions(vehicle) {
    const groups = {};
    VIOLATIONS.forEach(v => {
      if (v.only && !v.only.includes(vehicle)) return;
      if (!v.data[vehicle]) return;
      if (!groups[v.group]) groups[v.group] = [];
      groups[v.group].push(v);
    });
    vSelect.innerHTML = '<option value="">-- Chọn lỗi vi phạm --</option>';
    Object.entries(groups).forEach(([g, items]) => {
      const og = document.createElement('optgroup');
      og.label = g;
      items.forEach(v => {
        const o = document.createElement('option');
        o.value = v.id;
        o.textContent = v.label;
        og.appendChild(o);
      });
      vSelect.appendChild(og);
    });
    renderResult();
  }

  function renderResult() {
    const vid = vSelect.value;
    if (!vid) {
      result.innerHTML = `<div class="pc-placeholder"><i data-lucide="calculator" width="28" height="28"></i><p>Chọn loại xe và lỗi vi phạm<br>để xem ước tính</p></div>`;
      if (window.lucide) lucide.createIcons();
      return;
    }
    const vio = VIOLATIONS.find(v => v.id === vid);
    if (!vio) return;
    const d = vio.data[currentVehicle];
    const sv = severity(d.fine, currentVehicle);
    const fineMid = Math.round((d.fine[0] + d.fine[1]) / 2);
    const isAlcohol = vid.startsWith('alcohol');
    const isSuspended = d.suspend !== 0;

    // Processing fees
    const feeHoSo   = isSuspended ? 200000 : 0;
    const feeTest   = isAlcohol   ? 200000 : 0;
    const feeTravel = 200000;
    const totalEst  = fineMid + feeHoSo + feeTest + feeTravel;

    const suspendText = d.suspend === 0
      ? `<span class="is-clear">Không bị tước</span>`
      : `<span class="is-alert">${d.suspend[0]}–${d.suspend[1]} tháng</span>`;

    result.innerHTML = `
      <div class="pc-result-inner">
        <span class="pc-severity ${sv.cls}">${sv.label}</span>
        <div class="pc-metrics">
          <div class="pc-metric">
            <div class="pc-metric-label">Mức phạt</div>
            <div class="pc-metric-val is-alert">${fmtMoney(d.fine[0])}</div>
            <div class="pc-metric-sub">đến ${fmtMoney(d.fine[1])}</div>
          </div>
          <div class="pc-metric">
            <div class="pc-metric-label">Tước GPLX</div>
            <div class="pc-metric-val">${suspendText}</div>
            ${isSuspended ? `<div class="pc-metric-sub">tính từ ngày có quyết định</div>` : ''}
          </div>
        </div>
        <div class="pc-breakdown">
          <div class="pc-breakdown-title">Ước tính tổng chi phí xử lý</div>
          <div class="pc-breakdown-row"><span>Tiền phạt (trung bình)</span><span>${fmtMoney(fineMid)}</span></div>
          ${feeHoSo   ? `<div class="pc-breakdown-row is-muted"><span>Phí hồ sơ cấp lại GPLX</span><span>${fmtMoney(feeHoSo)}</span></div>` : ''}
          ${feeTest   ? `<div class="pc-breakdown-row is-muted"><span>Phí xét nghiệm nồng độ cồn</span><span>${fmtMoney(feeTest)}</span></div>` : ''}
          <div class="pc-breakdown-row is-muted"><span>Chi phí đi lại xử lý (ước tính)</span><span>${fmtMoney(feeTravel)}</span></div>
          <div class="pc-breakdown-row is-total"><span>Tổng ước tính</span><span>${fmtMoney(totalEst)}</span></div>
        </div>
        <p class="pc-ref">Căn cứ: Nghị định 100/2019/NĐ-CP, sửa đổi bởi 123/2021/NĐ-CP. Mức phạt có thể thay đổi theo thời điểm và tình tiết cụ thể. <a href="phat-nguoi-giai-dap.html">Xem giải đáp thêm →</a></p>
      </div>`;
  }

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('is-active'));
      pill.classList.add('is-active');
      currentVehicle = pill.dataset.v;
      buildOptions(currentVehicle);
    });
  });

  vSelect.addEventListener('change', renderResult);
  buildOptions(currentVehicle);
})();
