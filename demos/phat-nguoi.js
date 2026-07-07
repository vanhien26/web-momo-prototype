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
        // Hide result section if previously shown
        const section = document.getElementById('violationResultSection');
        if (section) section.classList.remove('is-open');

        result.className = 'lookup-result is-visible';
        result.innerHTML = `<strong>Chưa thấy vi phạm trong dữ liệu mô phỏng</strong><p>${plate} · ${vehicleLabels[vehicle]}. Hãy kiểm tra lại định kỳ vì dữ liệu có thể cần thời gian xác minh.</p>`;
        result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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
