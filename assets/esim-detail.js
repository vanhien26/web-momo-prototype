(function () {
  const destinations = window.ESIM_DESTINATIONS || [];
  const devices = window.ESIM_DEVICES || {};
  const params = new URLSearchParams(window.location.search);
  const destinationId = params.get('destination') || document.body.dataset.destination || 'thailand';
  const destination = destinations.find((item) => item.id === destinationId) || destinations[0];
  const app = document.getElementById('app');
  const money = (value) => new Intl.NumberFormat('vi-VN').format(value) + 'đ';

  const dayOptions = [5, 7, 10, 15, 30];
  let mode = params.get('mode') === 'data' ? 'data' : 'days';
  let tripDays = Number(params.get('days')) || 10;
  let targetDataGb = Number(params.get('data')) || 10;
  let filterValue = null;
  let selectedPlan = recommendPlan(destination.plans, mode, tripDays, targetDataGb);

  document.title = `eSIM ${destination.name} | MoMo`;
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.content = `Chọn gói eSIM ${destination.name} theo số ngày hoặc dung lượng data trước khi mua trên MoMo.`;
  }

  function parseDataValue(planData) {
    const text = String(planData).toLowerCase();
    if (text.includes('không giới hạn') || text.includes('khong gioi han')) return Number.POSITIVE_INFINITY;
    const match = text.match(/(\d+(?:[.,]\d+)?)\s*gb/);
    return match ? Number(match[1].replace(',', '.')) : 0;
  }

  function tripMetric(plan, currentMode) {
    return currentMode === 'data' ? parseDataValue(plan.data) : plan.days;
  }

  function getTargetValue(currentMode) {
    return currentMode === 'data' ? targetDataGb : tripDays;
  }

  function recommendPlan(plans, currentMode, days, dataGb) {
    const target = currentMode === 'data' ? dataGb : days;
    const sorted = [...plans].sort((a, b) => {
      const aMetric = tripMetric(a, currentMode);
      const bMetric = tripMetric(b, currentMode);
      const aOver = aMetric >= target ? 0 : 1;
      const bOver = bMetric >= target ? 0 : 1;
      if (aOver !== bOver) return aOver - bOver;
      const aGap = Math.abs(aMetric - target);
      const bGap = Math.abs(bMetric - target);
      if (aGap !== bGap) return aGap - bGap;
      return a.price - b.price;
    });
    return sorted[0] || plans[0];
  }

  function formatModeLabel(currentMode) {
    return currentMode === 'data' ? `${targetDataGb}GB` : `${tripDays} ngày`;
  }

  function planFitLabel(plan, rec) {
    if (plan.id === rec.id) return { text: 'Phù hợp nhất', cls: 'best' };
    const planM = tripMetric(plan, mode);
    const recM = tripMetric(rec, mode);
    if (planM > recM) return { text: 'Dư dả hơn', cls: 'generous' };
    // Same primary metric but more expensive = more capacity (e.g. Unlimited vs 5GB, same days)
    if (planM === recM && plan.price > rec.price) return { text: 'Dư dả hơn', cls: 'generous' };
    return { text: 'Tiết kiệm hơn', cls: 'save' };
  }

  function planFitText(plan) {
    if (mode === 'data') {
      const planData = parseDataValue(plan.data);
      if (!Number.isFinite(planData)) return 'Không lo hết data';
      if (planData === targetDataGb) return 'Đúng nhu cầu data';
      if (planData > targetDataGb) return `Dư ${planData - targetDataGb}GB`;
      return `Có thể thiếu ${targetDataGb - planData}GB`;
    }
    if (plan.days === tripDays) return 'Khớp đúng lịch trình';
    if (plan.days > tripDays) return `Còn hiệu lực dư ${plan.days - tripDays} ngày`;
    return `Thiếu ${tripDays - plan.days} ngày`;
  }

  function buildSelectorOptions() {
    if (mode === 'data') {
      const options = destination.plans
        .map((plan) => ({ value: parseDataValue(plan.data), label: plan.data }))
        .filter((item, index, array) => array.findIndex((other) => other.label === item.label) === index)
        .sort((a, b) => a.value - b.value);
      return options;
    }
    return dayOptions
      .filter((day) => destination.plans.some((plan) => plan.days >= day) || day === tripDays)
      .map((day) => ({ value: day, label: `${day} ngày` }));
  }

  function selectorValueLabel(value) {
    if (mode === 'data') {
      if (!Number.isFinite(value)) return 'Không giới hạn';
      return `${value}GB`;
    }
    return `${value} ngày`;
  }

  function mobaseIcon(name) {
    const paths = {
      store: '<path d="M4 10h16"/><path d="M6 10v10h12V10"/><path d="M8 20v-6h8v6"/><path d="M5 6h14l-1 4H6L5 6z"/>',
      shopping: '<path d="M5 7h14l-1 4H6L5 7z"/><path d="M7 11v8h10v-8"/><path d="M9 11V8a3 3 0 0 1 6 0v3"/>',
      coffee: '<path d="M6 9h10v4a5 5 0 0 1-5 5H9a3 3 0 0 1-3-3V9z"/><path d="M16 10h2a2 2 0 0 1 0 4h-2"/><path d="M8 3v3M11 2v4M14 3v3"/>',
      delivery: '<path d="M3 14h10V7H5a2 2 0 0 0-2 2z"/><path d="M13 10h3l3 3v1h-6z"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>',
      pharmacy: '<path d="M10 5h4v4h4v4h-4v4h-4v-4H6V9h4z"/>',
      food: '<path d="M6 4v8M6 4c2 0 3 1.5 3 4 0 2.5-1 4-3 4"/><path d="M12 4v12"/><path d="M16 4v12"/><path d="M20 4c-1.5 0-3 1.5-3 4v8"/>',
      landmark: '<path d="M4 20h16"/><path d="M6 20V8l6-4 6 4v12"/><path d="M9 20v-6h6v6"/><path d="M12 4v4"/>',
      beach: '<path d="M4 15c3-4 7-4 10 0s7 4 10 0"/><path d="M7 20c1.5-3 3-5 5-5s3.5 2 5 5"/><circle cx="18" cy="7" r="2"/>',
      mountain: '<path d="M3 19 10 8l4 6 3-4 4 9H3z"/><path d="M10 8l2-3 2 3"/>',
      city: '<path d="M4 20V8l5-3v15"/><path d="M9 20V5l5 3v12"/><path d="M14 20V9l6 4v7"/><path d="M6 10h1M6 13h1M6 16h1M11 8h1M11 11h1M11 14h1M16 12h1M16 15h1"/>',
      trail: '<path d="M4 20c4-8 8-8 12 0"/><path d="M6 14l4-8 3 5 3-3"/>',
      flight: '<path d="M2 12h20"/><path d="M12 2 9 12l3 10"/><path d="M12 2l3 10-3 10"/>',
      savings: '<circle cx="12" cy="12" r="8"/><path d="M8 12h8"/><path d="M12 8v8"/><path d="M10 10c0-1.1.9-2 2-2s2 .7 2 1.8c0 2.7-4 1.8-4 4.2 0 1.1.9 2 2 2s2-.7 2-1.8"/>',
      phone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M10 18h4"/>',
      support: '<path d="M4 12a8 8 0 1 1 16 0"/><path d="M6 12h2a4 4 0 0 1 8 0h2"/><path d="M12 20v-2"/>',
      shield: '<path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6z"/><path d="M9 12l2 2 4-4"/>',
      qr: '<path d="M4 4h6v6H4z"/><path d="M14 4h6v6h-6z"/><path d="M4 14h6v6H4z"/><path d="M14 14h3v3h-3z"/><path d="M18 18h2v2h-2z"/>',
      map: '<path d="M4 6l5-2 6 2 5-2v14l-5 2-6-2-5 2z"/><path d="M9 4v14M15 6v14"/><circle cx="12" cy="11" r="1.5"/>',
      video: '<rect x="4" y="6" width="11" height="12" rx="2"/><path d="m15 10 5-3v10l-5-3z"/>',
      social: '<path d="M18 8a4 4 0 0 1-4 4H8l-4 4V8a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4z"/><circle cx="9" cy="10" r="1"/><circle cx="12" cy="10" r="1"/><circle cx="15" cy="10" r="1"/>',
      wifi: '<path d="M4 9c5-5 11-5 16 0"/><path d="M7 12c3.5-3.5 6.5-3.5 10 0"/><path d="M10 15c2-2 2-2 4 0"/><circle cx="12" cy="18" r="1"/>',
      check: '<path d="M4 12l4 4 12-12"/>',
      spark: '<path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8z"/>',
      star: '<path d="M12 3.5l2.7 5.47 6.03.88-4.36 4.26 1.03 6.01L12 17.99l-5.4 2.83 1.03-6.01-4.36-4.26 6.03-.88z"/>',
      camera: '<rect x="4" y="7" width="16" height="11" rx="2"/><path d="M8 7l1.4-2h5.2L16 7"/><circle cx="12" cy="12.5" r="3"/>'
    };
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.spark}</svg>`;
  }

  function iconWrap(name, extraClass = '') {
    return `<span class="mobase-icon ${extraClass}">${mobaseIcon(name)}</span>`;
  }

  function merchantIcon(cat) {
    if (cat === 'Nhà hàng & Café') return 'coffee';
    if (cat === 'Mua sắm') return 'shopping';
    if (cat === 'Siêu thị & Tiện lợi') return 'store';
    if (cat === 'Di chuyển') return 'delivery';
    if (cat === 'Làm đẹp') return 'pharmacy';
    return 'store';
  }

  function categoryIcon(cat) {
    if (cat === 'Tất cả') return 'spark';
    if (cat === 'Nhà hàng & Café') return 'coffee';
    if (cat === 'Mua sắm') return 'shopping';
    if (cat === 'Siêu thị & Tiện lợi') return 'store';
    if (cat === 'Di chuyển') return 'delivery';
    return 'pharmacy';
  }

  function spotIcon(spotType) {
    const t = String(spotType).toLowerCase();
    if (t.includes('biển') || t.includes('đảo')) return 'beach';
    if (t.includes('núi') || t.includes('thiên nhiên') || t.includes('phong cảnh')) return 'mountain';
    if (t.includes('ẩm thực') || t.includes('café') || t.includes('street')) return 'food';
    if (t.includes('lịch sử') || t.includes('cung điện') || t.includes('di sản')) return 'landmark';
    if (t.includes('kiến trúc') || t.includes('thành phố') || t.includes('đô thị')) return 'city';
    return 'trail';
  }

  function appIcon(appName) {
    const n = String(appName).toLowerCase();
    if (n.includes('google maps') || n.includes('baidu maps') || n.includes('apple maps')) return 'map';
    if (n.includes('youtube') || n.includes('tiktok') || n.includes('douyin') || n.includes('video')) return 'video';
    if (n.includes('instagram') || n.includes('facebook') || n.includes('wechat') || n.includes('whatsapp') || n.includes('x')) return 'social';
    if (n.includes('gmail') || n.includes('mail')) return 'phone';
    if (n.includes('alipay') || n.includes('didi')) return 'delivery';
    return 'spark';
  }

  function benefitIcon(title) {
    const t = String(title).toLowerCase();
    if (t.includes('hạ cánh') || t.includes('bay')) return 'flight';
    if (t.includes('roaming') || t.includes('rẻ hơn')) return 'savings';
    if (t.includes('số việt nam') || t.includes('sim')) return 'phone';
    if (t.includes('hỗ trợ')) return 'support';
    return 'spark';
  }

  function buildPresetHref(nextMode, value) {
    const url = new URL(window.location.href);
    url.searchParams.set('destination', destination.id);
    url.searchParams.set('mode', nextMode);
    if (nextMode === 'days') {
      url.searchParams.set('days', String(value));
      url.searchParams.delete('data');
    } else {
      url.searchParams.set('data', String(value));
      url.searchParams.delete('days');
    }
    url.hash = 'booking';
    return `${url.pathname}${url.search}${url.hash}`;
  }

  function renderQuickPresets() {
    return `
      <div class="preset-links" aria-label="Preset links">
        <a class="preset-chip" href="${buildPresetHref('days', 10)}">Đi 10 ngày</a>
        <a class="preset-chip" href="${buildPresetHref('data', 10)}">Cần 10GB</a>
        <a class="preset-chip" href="${buildPresetHref('days', 7)}">Ngắn ngày 7 ngày</a>
      </div>`;
  }

  function syncUrl() {
    const url = new URL(window.location.href);
    url.searchParams.set('destination', destination.id);
    url.searchParams.set('mode', mode);
    if (mode === 'days') {
      url.searchParams.set('days', String(tripDays));
      url.searchParams.delete('data');
    } else {
      url.searchParams.set('data', String(targetDataGb));
      url.searchParams.delete('days');
    }
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  }

  function renderRecommendModule() {
    const rec = recommendPlan(destination.plans, mode, tripDays, targetDataGb);
    const gbVal = parseDataValue(rec.data);
    const isUnlimited = rec.type === 'unlimited';
    const specLabel = mode === 'days'
      ? `${rec.days} ngày · ${isUnlimited ? 'Không giới hạn' : rec.data}`
      : `${isUnlimited ? 'Không giới hạn' : rec.data} · ${rec.days} ngày`;
    const fitNote = planFitText(rec);
    const targetLabel = mode === 'days' ? `${tripDays} ngày` : `${targetDataGb}GB`;
    return `
      <div class="rec-module" id="recModule">
        <div class="rec-input-row">
          <span class="rec-label">Hành trình của bạn</span>
          <div class="rec-stepper">
            <button class="rec-btn" id="recMinus" type="button" aria-label="Giảm">−</button>
            <span class="rec-val" id="recVal">${targetLabel}</span>
            <button class="rec-btn" id="recPlus" type="button" aria-label="Tăng">+</button>
          </div>
        </div>
        <div class="rec-result">
          <div class="rec-result-label">Gợi ý phù hợp</div>
          <div class="rec-result-body" id="recBody">
            <div class="rec-plan-spec"><strong>${specLabel}</strong><span class="rec-fit-note">${fitNote}</span></div>
            <div class="rec-plan-price">${rec.discount > 0 ? `<span class="badge-discount">-${rec.discount}%</span>` : ''}<strong>${money(rec.price)}</strong></div>
          </div>
        </div>
      </div>`;
  }

  function bindRecommendModule() {
    const minus = document.getElementById('recMinus');
    const plus = document.getElementById('recPlus');
    if (!minus || !plus) return;
    function updateRec() {
      const targetLabel = mode === 'days' ? `${tripDays} ngày` : `${targetDataGb}GB`;
      document.getElementById('recVal').textContent = targetLabel;
      const rec = recommendPlan(destination.plans, mode, tripDays, targetDataGb);
      selectedPlan = rec;
      const isUnlimited = rec.type === 'unlimited';
      const specLabel = mode === 'days'
        ? `${rec.days} ngày · ${isUnlimited ? 'Không giới hạn' : rec.data}`
        : `${isUnlimited ? 'Không giới hạn' : rec.data} · ${rec.days} ngày`;
      const fitNote = planFitText(rec);
      document.getElementById('recBody').innerHTML = `
        <div class="rec-plan-spec"><strong>${specLabel}</strong><span class="rec-fit-note">${fitNote}</span></div>
        <div class="rec-plan-price">${rec.discount > 0 ? `<span class="badge-discount">-${rec.discount}%</span>` : ''}<strong>${money(rec.price)}</strong></div>`;
      renderPlansIntoDOM();
      updateSummary();
      bindPlanButtons();
    }
    minus.addEventListener('click', () => {
      if (mode === 'days') tripDays = Math.max(1, tripDays - 1);
      else targetDataGb = Math.max(1, targetDataGb - 1);
      updateRec();
    });
    plus.addEventListener('click', () => {
      if (mode === 'days') tripDays = Math.min(60, tripDays + 1);
      else targetDataGb = Math.min(100, targetDataGb + 1);
      updateRec();
    });
  }

  function renderSelectorButtons() {
    const all = `<button class="switch-btn${filterValue === null ? ' active' : ''}" type="button" data-value="all">Tất cả</button>`;
    const opts = buildSelectorOptions()
      .map((item) => `<button class="switch-btn${filterValue === item.value ? ' active' : ''}" type="button" data-value="${item.value}">${selectorValueLabel(item.value)}</button>`)
      .join('');
    return all + opts;
  }

  function renderPlans() {
    const rec = recommendPlan(destination.plans, mode, tripDays, targetDataGb);
    const plans = filterValue === null
      ? destination.plans
      : destination.plans.filter((p) => (mode === 'days' ? p.days === filterValue : parseDataValue(p.data) === filterValue));
    return plans
      .map((plan) => {
        const isActive = plan.id === selectedPlan.id;
        const fitTag = planFitLabel(plan, rec);
        const gbVal = parseDataValue(plan.data);
        const isUnlimited = plan.type === 'unlimited';
        const primaryVal = mode === 'days'
          ? plan.days
          : (isUnlimited ? '∞' : (Number.isFinite(gbVal) ? gbVal : '∞'));
        const primaryUnit = mode === 'days' ? 'ngày' : (isUnlimited ? '' : 'GB');
        const secondary = mode === 'days'
          ? (isUnlimited ? 'Không giới hạn data' : plan.data)
          : `${plan.days} ngày`;
        const fitNote = planFitText(plan);

        const bestsellerBadge = plan.bestseller
          ? `<span class="badge-bestseller">🔥 Bán chạy</span>`
          : '';
        const discountBadge = plan.discount > 0
          ? `<span class="badge-discount">-${plan.discount}%</span>`
          : '';
        const originalPriceHtml = plan.originalPrice
          ? `<div class="plan-original">${money(plan.originalPrice)}</div>`
          : '';

        const specLabel = mode === 'days'
          ? `${plan.days} ngày · ${isUnlimited ? 'Không giới hạn' : plan.data}`
          : `${isUnlimited ? 'Không giới hạn' : plan.data} · ${plan.days} ngày`;

        return `
          <button class="plan${isActive ? ' active' : ''}${plan.bestseller ? ' is-bestseller' : ''}" type="button" data-plan="${plan.id}">
            <div class="plan-col-tag"><span class="plan-fit-tag tag-${fitTag.cls}">${fitTag.text}</span></div>
            <div class="plan-col-spec">
              <strong>${specLabel}</strong>
              ${plan.bestseller ? `<span class="badge-bestseller-sm">🔥 Bán chạy</span>` : ''}
            </div>
            <div class="plan-col-price">
              ${plan.discount > 0 ? `<span class="badge-discount">-${plan.discount}%</span>` : ''}
              <span class="plan-price">${money(plan.price)}</span>
              ${plan.originalPrice ? `<s class="plan-original">${money(plan.originalPrice)}</s>` : ''}
            </div>
          </button>`;
      })
      .join('');
  }

  function updateSummary() {
    document.getElementById('sumData').textContent = selectedPlan.data;
    document.getElementById('sumDays').textContent = `${selectedPlan.days} ngày`;
    document.getElementById('sumPrice').textContent = money(selectedPlan.price);
    document.getElementById('summaryModeSide').textContent = mode === 'data' ? 'Theo dung lượng' : 'Theo số ngày';
    document.getElementById('summaryTargetSide').textContent = formatModeLabel(mode);
    const roamingPerDay = 150000;
    const roamingTotal = selectedPlan.days * roamingPerDay;
    const savings = roamingTotal - selectedPlan.price;
    const pct = Math.round((savings / roamingTotal) * 100);
    const el = document.getElementById('roamingCompare');
    if (el && savings > 0) {
      el.innerHTML = `
        <div class="roaming-row"><span>Roaming nhà mạng Việt (~150k/ngày)</span><s>${money(roamingTotal)}</s></div>
        <div class="roaming-save">Bạn tiết kiệm khoảng <strong>${money(savings)}</strong> · ${pct}% rẻ hơn</div>`;
    }
    syncUrl();
  }

  function updateModels() {
    const brand = document.getElementById('brandSelect').value;
    document.getElementById('modelSelect').innerHTML = (devices[brand] || []).map((model) => `<option>${model}</option>`).join('');
    document.getElementById('compatResult').classList.remove('show');
  }

  function signal(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => toast.classList.remove('show'), 1800);
  }

  function renderPlansIntoDOM() {
    document.getElementById('planCards').innerHTML = renderPlans();
  }

  function syncSelectionFromMode() {
    selectedPlan = recommendPlan(destination.plans, mode, tripDays, targetDataGb);
    renderPlansIntoDOM();
    updateSummary();
    bindPlanButtons();
  }

  function bindModeButtons() {
    document.querySelectorAll('.mode-btn').forEach((button) => {
      button.addEventListener('click', () => {
        mode = button.dataset.mode;
        filterValue = null;
        document.querySelectorAll('.mode-btn').forEach((item) => item.classList.toggle('active', item === button));
        document.getElementById('selectorRow').innerHTML = renderSelectorButtons();
        document.getElementById('recModule').outerHTML = renderRecommendModule();
        syncSelectionFromMode();
        bindSelectorButtons();
        bindRecommendModule();
        signal(mode === 'data' ? 'Chuyển sang chọn theo dung lượng' : 'Chuyển sang chọn theo số ngày');
      });
    });
  }

  function bindSelectorButtons() {
    document.querySelectorAll('.switch-btn').forEach((button) => {
      button.addEventListener('click', () => {
        if (button.dataset.value === 'all') {
          filterValue = null;
        } else {
          const value = Number(button.dataset.value);
          filterValue = filterValue === value ? null : value;
        }
        document.getElementById('selectorRow').innerHTML = renderSelectorButtons();
        document.getElementById('planCards').innerHTML = renderPlans();
        bindSelectorButtons();
        bindPlanButtons();
      });
    });
  }

  function bindPlanButtons() {
    document.querySelectorAll('.plan').forEach((button) => {
      button.addEventListener('click', () => {
        selectedPlan = destination.plans.find((plan) => plan.id === button.dataset.plan);
        renderPlansIntoDOM();
        updateSummary();
        bindPlanButtons();
        signal(`Đã chọn ${selectedPlan.data} · ${selectedPlan.days} ngày`);
      });
    });
  }

  function bindActivationGuide() {
    document.querySelectorAll('.act-phase').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.act-phase').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.act-content').forEach(c => c.classList.remove('visible'));
        tab.classList.add('active');
        document.getElementById('act-' + tab.dataset.phase)?.classList.add('visible');
      });
    });
    document.querySelectorAll('.act-os-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const phase = btn.dataset.phase;
        const os = btn.dataset.os;
        document.querySelectorAll(`.act-os-btn[data-phase="${phase}"]`).forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const iosWrap = document.getElementById('steps-ios-' + phase);
        const andWrap = document.getElementById('steps-android-' + phase);
        if (iosWrap) iosWrap.classList.toggle('hidden', os !== 'ios');
        if (andWrap) andWrap.classList.toggle('hidden', os !== 'android');
      });
    });
  }

  function bindEvents() {
    bindModeButtons();
    bindSelectorButtons();
    bindPlanButtons();
    bindRecommendModule();
    bindActivationGuide();
    if (destination.merchants) {
      const { items } = destination.merchants;
      document.querySelectorAll('.mc-pill').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.mc-pill').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const cat = btn.dataset.cat;
          const filtered = cat === 'Tất cả' ? items : items.filter(m => m.cat === cat);
          document.getElementById('mcGrid').innerHTML = filtered.map(m => `
            <div class="mc-card">
              <div class="mc-logo" style="background:${m.color}">
                ${iconWrap(merchantIcon(m.cat), 'mobase-icon--logo')}
              </div>
              <div class="mc-info">
                <strong>${m.name}</strong>
                <small>${m.address}</small>
                ${m.rating ? `<div class="mc-rating">${iconWrap('star', 'mobase-icon--tiny')} ${m.rating} (${m.reviews} đánh giá)</div>` : ''}
              </div>
            </div>`).join('');
        });
      });
    }
    document.getElementById('brandSelect').addEventListener('change', updateModels);
    document.getElementById('checkDevice').addEventListener('click', () => {
      const result = document.getElementById('compatResult');
      result.textContent = `✓ ${document.getElementById('modelSelect').value} thuộc nhóm thiết bị hỗ trợ eSIM. Hãy kiểm tra thêm phiên bản theo thị trường.`;
      result.classList.add('show');
      signal('Đã kiểm tra thiết bị');
    });
    document.getElementById('buyButton').addEventListener('click', () => {
      signal(`Prototype: checkout gói ${selectedPlan.data} tại ${destination.name}`);
    });
  }

  function renderMerchantsSection() {
    if (!destination.merchants) return '';
    const { categories, items, note } = destination.merchants;

    function merchantCards(list) {
      return list.map(m => `
        <div class="mc-card">
          <div class="mc-logo" style="background:${m.color}">
            ${iconWrap(merchantIcon(m.cat), 'mobase-icon--logo')}
          </div>
          <div class="mc-info">
            <strong>${m.name}</strong>
            <small>${m.address}</small>
            ${m.rating ? `<div class="mc-rating">${iconWrap('star', 'mobase-icon--tiny')} ${m.rating} (${m.reviews} đánh giá)</div>` : ''}
          </div>
        </div>`).join('');
    }

    return `
      <section class="merchant-section">
        <div class="shell">
          <div class="mc-header">
            <div>
              <div class="section-label">Thanh toán MoMo tại ${destination.name}</div>
              <h2>Quét QR, không cần tiền mặt</h2>
            </div>
          </div>

          <div class="mc-filters" id="mcFilters">
            ${categories.map((cat, i) => `
              <button class="mc-pill${i === 0 ? ' active' : ''}" type="button" data-cat="${cat}">
                ${iconWrap(categoryIcon(cat), 'mobase-icon--tiny')}
                ${cat}
              </button>`).join('')}
          </div>

          <div class="mc-grid" id="mcGrid">
            ${merchantCards(items)}
          </div>

          <div class="mc-footer">
            <div class="mc-actions">
              <button class="mc-more-btn" type="button" id="mcMoreBtn">Xem thêm ∨</button>
              <a class="mc-link" href="https://www.momo.vn/thanh-toan-quoc-te" target="_blank">Tất cả tại MoMo →</a>
            </div>
          </div>
        </div>
      </section>`;
  }

  function renderActivationGuide() {
    const phases = [
      {
        id: 'install',
        label: 'Cài eSIM trước khi bay',
        icon: 'qr',
        timing: 'Cần Wi-Fi · Làm tại Việt Nam',
        ios: [
          { step: '01', title: 'Mở Cài đặt', desc: 'Vào Settings → Cellular (Dữ liệu di động)' },
          { step: '02', title: 'Thêm eSIM', desc: 'Chọn "Add eSIM" hoặc "Thêm gói dữ liệu di động"' },
          { step: '03', title: 'Quét mã QR', desc: 'Chọn "Use QR Code" và quét mã nhận qua email từ MoMo' },
          { step: '04', title: 'Đặt tên eSIM', desc: 'Đặt tên dễ nhận biết, ví dụ "' + destination.name + ' 2025"' },
          { step: '05', title: 'Hoàn tất', desc: 'eSIM đã cài xong. Chưa bật — chỉ bật khi hạ cánh tại điểm đến' },
        ],
        android: [
          { step: '01', title: 'Mở Cài đặt', desc: 'Vào Settings → Connections → SIM Card Manager (Samsung) hoặc Network & Internet → SIMs (Pixel)' },
          { step: '02', title: 'Thêm eSIM', desc: 'Chọn "Add eSIM" hoặc "Download a SIM instead"' },
          { step: '03', title: 'Quét mã QR', desc: 'Chọn "Scan QR code" và quét mã từ email MoMo' },
          { step: '04', title: 'Xác nhận', desc: 'Xác nhận thông tin gói và hoàn tất cài đặt' },
          { step: '05', title: 'Hoàn tất', desc: 'eSIM đã cài xong. Chưa bật — chỉ kích hoạt khi hạ cánh' },
        ],
        warning: 'Không xóa email chứa QR code. Không bật eSIM khi còn ở Việt Nam — thời hạn sẽ bắt đầu tính ngay khi kích hoạt.',
      },
      {
        id: 'activate',
        label: 'Kích hoạt khi hạ cánh',
        icon: 'flight',
        timing: 'Tại ' + destination.name + ' · Tắt Wi-Fi trước',
        ios: [
          { step: '01', title: 'Tắt Wi-Fi', desc: 'Đảm bảo đang dùng mạng di động, không phải Wi-Fi sân bay' },
          { step: '02', title: 'Mở Cài đặt', desc: 'Vào Settings → Cellular (Dữ liệu di động)' },
          { step: '03', title: 'Bật eSIM du lịch', desc: 'Tìm eSIM theo tên đã đặt → bật "Turn On This Line"' },
          { step: '04', title: 'Chọn SIM dữ liệu', desc: 'Vào "Cellular Data" → chọn eSIM du lịch làm SIM dữ liệu' },
          { step: '05', title: 'Bật Data Roaming', desc: 'Vào eSIM du lịch → bật "Data Roaming". Kết nối xuất hiện sau 1-3 phút' },
        ],
        android: [
          { step: '01', title: 'Tắt Wi-Fi', desc: 'Đảm bảo đang dùng mạng di động để kiểm tra kết nối thực tế' },
          { step: '02', title: 'Mở Cài đặt', desc: 'Vào Settings → Connections → SIM Card Manager' },
          { step: '03', title: 'Bật eSIM du lịch', desc: 'Chọn eSIM du lịch → Toggle ON' },
          { step: '04', title: 'Đặt SIM dữ liệu', desc: 'Chọn eSIM du lịch làm "Mobile data" mặc định' },
          { step: '05', title: 'Bật Data Roaming', desc: 'Vào Mobile Networks → bật "Data Roaming". Kiểm tra sóng trên thanh trạng thái' },
        ],
        warning: 'Nếu sau 5 phút vẫn không có sóng: tắt máy và bật lại. Nếu vẫn lỗi, liên hệ hỗ trợ MoMo 24/7.',
      },
    ];

    return `
      <section class="section activation-section">
        <div class="shell">
          <div class="section-head">
            <div class="section-label">Hướng dẫn kích hoạt</div>
            <h2>Cài trước, bật khi đến nơi</h2>
            <p>Hai bước tách biệt để tránh tính nhầm thời hạn — cài eSIM tại Việt Nam khi còn có Wi-Fi, chỉ bật data roaming khi hạ cánh tại ${destination.name}.</p>
          </div>

          <div class="act-phases">
            ${phases.map((phase, i) => `
              <div class="act-phase${i === 0 ? ' active' : ''}" data-phase="${phase.id}">
                <div class="act-phase-icon">${iconWrap(phase.icon, 'mobase-icon--phase')}</div>
                <div>
                  <strong>${phase.label}</strong>
                  <small>${phase.timing}</small>
                </div>
              </div>`).join('')}
          </div>

          ${phases.map((phase, i) => `
            <div class="act-content${i === 0 ? ' visible' : ''}" id="act-${phase.id}">
              <div class="act-os-tabs">
                <button class="act-os-btn active" data-os="ios" data-phase="${phase.id}">iOS · iPhone / iPad</button>
                <button class="act-os-btn" data-os="android" data-phase="${phase.id}">Android</button>
              </div>
              <div class="act-steps-wrap" id="steps-ios-${phase.id}">
                ${phase.ios.map(s => `
                  <div class="act-step">
                    <div class="act-step-num">${s.step}</div>
                    <div class="act-step-body"><strong>${s.title}</strong><span>${s.desc}</span></div>
                  </div>`).join('')}
              </div>
              <div class="act-steps-wrap hidden" id="steps-android-${phase.id}">
                ${phase.android.map(s => `
                  <div class="act-step">
                    <div class="act-step-num">${s.step}</div>
                    <div class="act-step-body"><strong>${s.title}</strong><span>${s.desc}</span></div>
                  </div>`).join('')}
              </div>
              <div class="act-warning">⚠ ${phase.warning}</div>
            </div>`).join('')}
        </div>
      </section>`;
  }

  function renderSpotsSection() {
    if (!destination.spots || !destination.spots.length) return '';
    return `
      <section class="section spots-section">
        <div class="shell">
          <div class="section-head">
            <div class="section-label">Địa điểm check-in</div>
            <h2>Những nơi đáng sống ảo</h2>
            <p>Lưu trữ và chia sẻ những khoảnh khắc này cần internet ổn định — đặc biệt khi đăng story và reels trực tiếp.</p>
          </div>
          <div class="spots-grid">
            ${destination.spots.map(s => `
              <div class="spot">
                <div class="spot-emoji">${iconWrap(spotIcon(s.type), 'mobase-icon--spot')}</div>
                <strong>${s.name}</strong>
                <small>${s.type}</small>
              </div>`).join('')}
          </div>
          <div class="social-data-note">
            <span class="social-icon">${iconWrap('camera', 'mobase-icon--social')}</span>
            <div>
              <strong>Ước tính tiêu thụ data</strong>
              <span>Story + Reels + Maps ≈ ${destination.socialTip}. Gói Không giới hạn để không cần tính toán.</span>
            </div>
          </div>
        </div>
      </section>`;
  }

  function renderAppRestrictions() {
    const r = destination.appRestrictions;
    if (!r) return '';
    return `
      <section class="section app-section">
        <div class="shell">
          <div class="app-header">
            <div>
              <div class="section-label app-label">🔥 Firewall ${destination.name}</div>
              <h2>Chuẩn bị trước khi bay</h2>
            </div>
            <p class="app-header-sub">Một số dịch vụ quen thuộc không hoạt động tại đây. Cài app thay thế và VPN trước khi rời Việt Nam.</p>
          </div>

          <div class="app-zones">
            <div class="app-zone app-zone-blocked">
              <div class="app-zone-head"><span class="app-zone-dot dot-blocked"></span>Bị chặn — cần chuẩn bị thay thế</div>
              <div class="app-chips">
                ${r.blocked.map(a => `
                  <div class="app-chip chip-blocked">
                    <span class="chip-icon">${iconWrap(appIcon(a.name), 'mobase-icon--chip')}</span>
                    <div class="chip-body">
                      <strong>${a.name}</strong>
                      <span class="chip-alt">→ ${a.alt}</span>
                    </div>
                  </div>`).join('')}
              </div>
            </div>

            <div class="app-zone app-zone-ok">
              <div class="app-zone-head"><span class="app-zone-dot dot-ok"></span>Hoạt động bình thường</div>
              <div class="app-chips">
                ${r.available.map(a => `
                  <div class="app-chip chip-ok">
                    <span class="chip-icon">${iconWrap(appIcon(a.name), 'mobase-icon--chip')}</span>
                    <div class="chip-body">
                      <strong>${a.name}</strong>
                      <span class="chip-note">${a.note}</span>
                    </div>
                  </div>`).join('')}
              </div>
            </div>
          </div>

          <div class="vpn-callout">
            <div class="vpn-callout-icon">${iconWrap('shield', 'mobase-icon--vpn')}</div>
            <div class="vpn-callout-body">
              <strong>Cài VPN trước khi đến ${destination.name}</strong>
              <p>${r.vpnNote}</p>
              <div class="vpn-data-tip">${iconWrap('wifi', 'mobase-icon--tiny')} ${r.dataNote}</div>
            </div>
          </div>
        </div>
      </section>`;
  }

  function render() {
    document.documentElement.style.setProperty('--accent', destination.accent);
    app.innerHTML = `
      <header class="topbar">
        <div class="shell topbar-inner">
          <a class="brand" href="../esim-du-lich.html">
            <img src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg" alt="MoMo">
            <span>
              <strong>eSIM ${destination.name}</strong>
              <small>eSIM Du Lịch</small>
            </span>
          </a>
          <nav class="top-links">
            <a href="../../lab.html">Prototype Lab</a>
            <a href="#booking" class="button">Chọn gói</a>
          </nav>
        </div>
      </header>
      <main>
        <section class="hero">
          <div class="shell">
            <div class="breadcrumb"><a href="../esim-du-lich.html">eSIM Du Lịch</a><span>/</span><strong>${destination.name}</strong></div>
            <div class="hero-grid">
              <div>
                <div class="eyebrow">${destination.region} · Trang điểm đến</div>
                <div class="savings-claim">Rẻ hơn roaming quốc tế đến 80%</div>
                <div class="flag">${destination.flag}</div>
                <h1>eSIM ${destination.name}</h1>
                <p class="hero-copy">${destination.intro}</p>
                <div class="hero-actions">
                  <a class="button" href="#booking">Xem gói data</a>
                  <a class="button secondary" href="#compatibility">Kiểm tra thiết bị</a>
                </div>
                ${renderQuickPresets()}
                <div class="trust">
                  <span>4G/5G</span>
                  <span>${destination.network}</span>
                  <span>Nhận QR 1-5 phút</span>
                  <span>Hỗ trợ 24/7</span>
                </div>
              </div>
              <div class="hero-card">
                <img src="${destination.heroImg || 'https://homepage.momocdn.net/img/1920x640_desktop-260408103921.jpg'}" alt="Du lịch ${destination.name}">
                <div class="hero-card-copy">
                  <small>Khu vực phủ sóng phổ biến</small>
                  <strong>${destination.hero}</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        ${renderAppRestrictions()}

        <section class="booking-wrap" id="booking">
          <div class="shell booking">
            <div class="booking-main">
              <div class="section-label">Gói data ${destination.name}</div>
              <h2>Chọn gói phù hợp</h2>

              <div class="plan-controls">
                <div class="mode-switch">
                  <button class="mode-btn${mode === 'days' ? ' active' : ''}" type="button" data-mode="days">Theo số ngày</button>
                  <button class="mode-btn${mode === 'data' ? ' active' : ''}" type="button" data-mode="data">Theo dung lượng</button>
                </div>
<div class="selector-row" id="selectorRow">${renderSelectorButtons()}</div>
              </div>

              ${renderRecommendModule()}

              <div class="social-tip">
                ${iconWrap('camera', 'mobase-icon--social')}
                <span>Story + Reels + Maps ≈ <strong>${destination.socialTip}</strong> · Chọn gói Không giới hạn để không cần tính toán</span>
              </div>

              <div class="plans" id="planCards">${renderPlans()}</div>
            </div>

            <aside class="checkout">
              <div class="section-label">Tóm tắt</div>
              <h3>Gói eSIM đã chọn</h3>
              <div class="route">
                <b>${destination.flag}</b>
                <div>
                  <strong>${destination.name}</strong>
                  <small>${destination.network}</small>
                </div>
              </div>
              <div class="summary-list">
                <div class="summary-row"><span>Cách chọn</span><strong id="summaryModeSide">${mode === 'data' ? 'Theo dung lượng' : 'Theo số ngày'}</strong></div>
                <div class="summary-row"><span>Mốc chọn</span><strong id="summaryTargetSide">${formatModeLabel(mode)}</strong></div>
                <div class="summary-row"><span>Data</span><strong id="sumData"></strong></div>
                <div class="summary-row"><span>Hiệu lực</span><strong id="sumDays"></strong></div>
                <div class="summary-row"><span>Loại gói</span><strong>Data-only</strong></div>
                <div class="summary-row"><span>Nhận eSIM</span><strong>QR qua email</strong></div>
              </div>
              <div class="total">
                <span>Tạm tính<small style="display:block">Giá mock</small></span>
                <strong id="sumPrice"></strong>
              </div>
              <div class="roaming-compare" id="roamingCompare"></div>
              <div class="trust-mini">
                <span>✓ Hoàn tiền 7 ngày</span>
                <span>✓ Nhận QR ngay</span>
                <span>✓ Hỗ trợ 24/7</span>
              </div>
              <button class="button full" id="buyButton" type="button">Tiếp tục trên MoMo</button>
              <p class="fineprint">Giá và inventory trong prototype cần được thay bằng plan feed production trước khi triển khai.</p>
            </aside>
          </div>
        </section>

        <section class="section">
          <div class="shell">
            <div class="section-head">
              <div class="section-label">Lợi ích theo điểm đến</div>
              <h2>Đủ mạng cho toàn bộ hành trình</h2>
              <p>Thông tin quan trọng được đặt trước checkout để user hiểu rõ cách nhận, cài và kích hoạt eSIM.</p>
            </div>
            <div class="benefits">
              <article class="card"><div class="card-icon">${iconWrap(benefitIcon('Mua trước, dùng ngay khi hạ cánh'), 'mobase-icon--card')}</div><h3>Mua trước, dùng ngay khi hạ cánh</h3><p>Không xếp hàng quầy SIM sân bay. Cài eSIM trước khi bay, bật data roaming khi đặt chân đến ${destination.name}.</p></article>
              <article class="card"><div class="card-icon">${iconWrap(benefitIcon('Rẻ hơn roaming đến 80%'), 'mobase-icon--card')}</div><h3>Rẻ hơn roaming đến 80%</h3><p>Roaming quốc tế của nhà mạng Việt thường 100-200k/ngày. eSIM MoMo dùng mạng địa phương ${destination.network} với giá thấp hơn nhiều.</p></article>
              <article class="card"><div class="card-icon">${iconWrap(benefitIcon('Giữ nguyên số Việt Nam'), 'mobase-icon--card')}</div><h3>Giữ nguyên số Việt Nam</h3><p>Không tháo SIM chính. Vẫn nhận cuộc gọi, SMS OTP và dùng mọi ứng dụng liên kết số điện thoại như bình thường.</p></article>
              <article class="card"><div class="card-icon">${iconWrap(benefitIcon('Hỗ trợ 24/7 - hoàn tiền 7 ngày'), 'mobase-icon--card')}</div><h3>Hỗ trợ 24/7 - hoàn tiền 7 ngày</h3><p>Nếu chuyến đi thay đổi hoặc gặp sự cố kỹ thuật, MoMo hỗ trợ hoàn tiền trong 7 ngày kể từ ngày mua.</p></article>
            </div>
          </div>
        </section>

        ${renderSpotsSection()}

        ${renderMerchantsSection()}

        <section class="section soft" id="compatibility">
          <div class="shell">
            <div class="section-head">
              <div class="section-label">Compatibility gate</div>
              <h2>Kiểm tra trước khi mua</h2>
              <p>Model và phiên bản theo thị trường có thể khác nhau. Đây là gate bắt buộc trước checkout.</p>
            </div>
            <div class="compat">
              <select id="brandSelect">${Object.keys(devices).map((brand) => `<option>${brand}</option>`).join('')}</select>
              <select id="modelSelect"></select>
              <button id="checkDevice" type="button">Kiểm tra thiết bị</button>
              <div class="compat-result" id="compatResult"></div>
            </div>
          </div>
        </section>

        ${renderActivationGuide()}

        <section class="section soft">
          <div class="shell">
            <div class="section-head">
              <div class="section-label">FAQ ${destination.name}</div>
              <h2>Câu hỏi trước chuyến đi</h2>
            </div>
            <div class="faq">
              <details open><summary>Khi nào gói eSIM bắt đầu tính thời hạn?</summary><p>Thời điểm bắt đầu tùy chính sách của từng gói và nhà mạng. User cần đọc điều kiện gói trước khi cài hoặc bật data roaming.</p></details>
              <details><summary>Gói eSIM ${destination.name} có gọi thoại không?</summary><p>Các gói trong prototype được mô tả là data-only. User có thể gọi qua ứng dụng Internet. Thoại và SMS cần kiểm tra theo plan feed thực tế.</p></details>
              <details><summary>Nếu có sóng nhưng chưa vào mạng thì làm gì?</summary><p>Kiểm tra eSIM đã được chọn cho dữ liệu di động, bật data roaming, tắt Wi-Fi và khởi động lại thiết bị. Nếu vẫn lỗi, liên hệ hỗ trợ 24/7.</p></details>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="shell">
            <div class="section-head">
              <div class="section-label">Điểm đến khác</div>
              <h2>Tiếp tục hành trình</h2>
            </div>
            <div class="related">
              ${destinations
                .filter((item) => item.id !== destination.id)
                .slice(0, 4)
                .map((item) => `<a href="destination.html?destination=${item.id}"><b>${item.flag}</b><strong>${item.name}</strong><small>${item.region}</small></a>`)
                .join('')}
            </div>
          </div>
        </section>
      </main>
      <footer class="footer">
        <div class="shell footer-inner">
          <p>Dữ liệu dịch vụ theo MoMo eSIM Du Lịch. Giá và inventory là mock cho prototype.</p>
          <a class="button secondary" href="https://www.momo.vn/esim-du-lich" target="_blank" rel="noreferrer">Xem nguồn MoMo</a>
        </div>
      </footer>
      <div class="toast" id="toast" role="status" aria-live="polite"></div>`;
    bindEvents();
    updateModels();
    updateSummary();
  }

  render();
})();
