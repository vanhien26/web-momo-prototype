// ─── Main Prototypes (3 top-level) ───────────────────────────────────────────

const PROTOTYPES = [
  {
    id: 'financial',
    name: 'Financial Utilities Lab',
    category: 'PLG / SEO',
    maturity: 'Interactive',
    description: 'Biến search intent tài chính thành trải nghiệm tính toán hữu ích, dẫn người dùng đến hành động phù hợp trong hệ sinh thái MoMo.',
    jtbd: 'Tính nhanh, hiểu rõ, hành động ngay',
    northStar: 'Qualified tool completion',
    loop: 'Search → Utility → App',
    hypothesis: 'Interactive utility tạo information gain tốt hơn content thuần và thu tín hiệu intent có giá trị cho funnel Web-to-App.',
    value: 'Mở rộng organic acquisition cho Credit, Insurance và Personal Finance với asset có khả năng tái sử dụng.',
    gate: 'Đo completion rate, CTA CTR, Web-to-App conversion và chất lượng traffic theo từng utility.',
    src: 'demos/financial.html',
    address: 'prototype.momo.vn/financial-utilities',
    viewer: true,
    tools: [
      {
        id: 'vay-nhanh',
        name: 'Vay Nhanh Calculator',
        category: 'Credit',
        description: 'Ước tính số tiền trả hằng tháng theo số tiền vay, lãi suất và kỳ hạn.',
        jtbd: 'Biết trước gánh nặng tài chính trước khi vay',
        src: 'tools/vay-nhanh.html',
      },
      {
        id: 'tra-gop',
        name: 'Trả Góp Simulator',
        category: 'Credit',
        description: 'Ước tính số tiền cần trả mỗi tháng khi mua hàng trả góp với các kỳ hạn khác nhau.',
        jtbd: 'So sánh gói trả góp để chọn phương án tối ưu',
        src: 'tools/tra-gop.html',
      },
      {
        id: 'bao-hiem-o-to',
        name: 'Bảo Hiểm Ô Tô Quote',
        category: 'Insurance',
        description: 'Mô phỏng phí bảo hiểm ô tô theo giá trị xe và tỷ lệ phí.',
        jtbd: 'Ước tính phí bảo hiểm trước khi quyết định mua',
        src: 'tools/bao-hiem-o-to.html',
      },
      {
        id: 'bao-hiem-xa-hoi',
        name: 'BHXH Simulator',
        category: 'Insurance',
        description: 'Mô phỏng tổng đóng BHXH dựa trên mức lương và số tháng tham gia.',
        jtbd: 'Hiểu quyền lợi BHXH để quyết định đóng tự nguyện',
        src: 'tools/bao-hiem-xa-hoi.html',
      },
      {
        id: 'tiet-kiem',
        name: 'Tiết Kiệm Simulator',
        category: 'Savings',
        description: 'Tính số tiền nhận được khi gửi tiết kiệm theo kỳ hạn và lãi suất.',
        jtbd: 'Biết trước lợi tức để chọn kỳ hạn tiết kiệm phù hợp',
        src: 'tools/tiet-kiem.html',
      },
      {
        id: 'thue-tncn',
        name: 'Thuế TNCN Calculator',
        category: 'Tax',
        description: 'Ước tính thuế thu nhập cá nhân theo biểu lũy tiến, chiết khấu gia cảnh và người phụ thuộc.',
        jtbd: 'Tính nhanh thuế TNCN để lập kế hoạch tài chính',
        src: 'tools/thue-tncn.html',
      },
      {
        id: 'chung-chi-quy',
        name: 'Chứng Chỉ Quỹ Explorer',
        category: 'Investment',
        description: 'Mô phỏng giá trị đầu tư định kỳ vào chứng chỉ quỹ theo lợi suất giả định.',
        jtbd: 'Hiểu tốc độ tăng trưởng đầu tư định kỳ trước khi bắt đầu',
        src: 'tools/chung-chi-quy.html',
      },
      {
        id: 'luong-huu',
        name: 'Lương Hưu Planner',
        category: 'Planning',
        description: 'Ước tính dòng tiền hưu trí cần chuẩn bị theo chi phí sống và lạm phát.',
        jtbd: 'Biết mình cần chuẩn bị bao nhiêu để nghỉ hưu đủ sống',
        src: 'tools/luong-huu.html',
      },
      {
        id: 'quy-du-phong',
        name: 'Quỹ Dự Phòng Planner',
        category: 'Planning',
        description: 'Tính quy mô quỹ khẩn cấp cần có theo chi tiêu và số tháng an toàn mục tiêu.',
        jtbd: 'Xác định đúng mức quỹ dự phòng cần tích lũy',
        src: 'tools/quy-du-phong.html',
      },
      {
        id: 'tu-do-tai-chinh',
        name: 'Tự Do Tài Chính Planner',
        category: 'Planning',
        description: 'Ước tính số tiền cần có để đạt FIRE theo quy tắc 4% và thời gian đạt mục tiêu.',
        jtbd: 'Lập lộ trình cụ thể để đạt tự do tài chính',
        src: 'tools/tu-do-tai-chinh.html',
      },
      {
        id: 'hoc-phi',
        name: 'Học Phí Planner',
        category: 'Planning',
        description: 'Ước tính số tiền cần tiết kiệm mỗi tháng để đủ học phí tương lai với tác động lạm phát.',
        jtbd: 'Biết cần tiết kiệm bao nhiêu để không lo học phí cho con',
        src: 'tools/hoc-phi.html',
      },
      {
        id: 'dam-cuoi',
        name: 'Đám Cưới Planner',
        category: 'Planning',
        description: 'Tính số tiền cần để dành mỗi tháng cho kế hoạch cưới theo ngân sách và thời gian.',
        jtbd: 'Lập ngân sách đám cưới không bị thâm hụt',
        src: 'tools/de-danh-dam-cuoi.html',
      },
    ],
  },
  {
    id: 'merchant',
    name: 'Merchant Discovery',
    category: 'Discovery',
    maturity: 'Interaction',
    description: 'Khám phá merchant theo vị trí bằng interaction dạng swipe, kết hợp ưu đãi MoMo để rút ngắn hành trình từ discovery đến transaction.',
    jtbd: 'Chọn nhanh quán phù hợp ở gần',
    northStar: 'Saved merchant intent',
    loop: 'Discover → Save → Pay',
    hypothesis: 'Interaction thiên về lựa chọn giúp giảm cognitive load và tạo tín hiệu preference rõ hơn danh sách truyền thống.',
    value: 'Tăng merchant exposure, deal discovery và khả năng chuyển đổi sang thanh toán tại điểm bán.',
    gate: 'Đo swipe depth, save rate, deal engagement và payment initiation từ merchant đã lưu.',
    src: 'demos/merchant.html',
    address: 'prototype.momo.vn/quan-ngon',
    viewer: true,
  },
  {
    id: 'worldcup',
    name: 'World Cup 2026 Predictor',
    category: 'Engagement',
    maturity: 'Data experience',
    description: 'Trải nghiệm dữ liệu thể thao dễ hiểu cho đại chúng, dùng sự kiện mùa vụ để tạo traffic, repeat visit và bề mặt activation.',
    jtbd: 'So sánh cơ hội đội tuyển yêu thích',
    northStar: 'Team analysis engagement',
    loop: 'Event → Explore → Return',
    hypothesis: 'Data storytelling trực quan giúp MoMo sở hữu seasonal search demand và tạo lý do quay lại trong suốt giải đấu.',
    value: 'Tạo engagement surface có khả năng gắn prediction game, voucher, mini app và campaign activation.',
    gate: 'Đo team views, comparison depth, returning users và campaign CTA conversion.',
    src: 'demos/world-cup.html',
    address: 'prototype.momo.vn/world-cup-2026',
    viewer: true,
  },
];

// ─── Category colors ─────────────────────────────────────────────────────────

const CAT_COLOR = {
  'PLG / SEO':  { bg: '#fff0f7', text: '#a50064', dot: '#a50064' },
  'Discovery':  { bg: '#fffbeb', text: '#b45309', dot: '#d97706' },
  'Engagement': { bg: '#f5f3ff', text: '#6d28d9', dot: '#7c3aed' },
  'Credit':     { bg: '#eff6ff', text: '#1d4ed8', dot: '#2563eb' },
  'Insurance':  { bg: '#f0fdf4', text: '#15803d', dot: '#16a34a' },
  'Savings':    { bg: '#f0fdf4', text: '#0e7490', dot: '#0891b2' },
  'Tax':        { bg: '#fff7ed', text: '#c2410c', dot: '#ea580c' },
  'Investment': { bg: '#faf5ff', text: '#7c3aed', dot: '#9333ea' },
  'Planning':   { bg: '#f8fafc', text: '#475569', dot: '#64748b' },
};

const MATURITY_COLOR = {
  'Interactive':    { bg: '#f0fdf4', text: '#15803d' },
  'Interaction':    { bg: '#f0fdf4', text: '#15803d' },
  'Data experience':{ bg: '#eff6ff', text: '#1d4ed8' },
};

// ─── Render tool mini-cards ───────────────────────────────────────────────────

function renderTools(tools) {
  return tools.map(t => {
    const c = CAT_COLOR[t.category] || CAT_COLOR['Planning'];
    return `
    <a class="tool-card" href="${t.src}" target="_blank" rel="noopener"
       style="--tc-bg:${c.bg};--tc-text:${c.text};--tc-dot:${c.dot}">
      <span class="tool-cat">${t.category}</span>
      <strong class="tool-name">${t.name}</strong>
      <p class="tool-desc">${t.description}</p>
      <span class="tool-jtbd">${t.jtbd}</span>
    </a>`;
  }).join('');
}

// ─── Render main cards ────────────────────────────────────────────────────────

function renderCards() {
  const grid = document.getElementById('protoGrid');
  if (!grid) return;

  grid.innerHTML = PROTOTYPES.map((p, i) => {
    const cat  = CAT_COLOR[p.category]    || CAT_COLOR['PLG / SEO'];
    const mat  = MATURITY_COLOR[p.maturity] || MATURITY_COLOR['Interactive'];
    const href = p.viewer ? `viewer.html?demo=${p.id}` : p.src;
    const toolCount = p.tools ? p.tools.length : 0;

    const toolsSection = toolCount ? `
      <div class="tools-toggle" data-proto="${p.id}">
        <button class="tools-toggle-btn" aria-expanded="false" aria-controls="tools-${p.id}">
          <span class="toggle-label">Xem công cụ (${toolCount})</span>
          <span class="toggle-icon">↓</span>
        </button>
        <div class="tools-panel" id="tools-${p.id}" hidden>
          <div class="tools-grid">${renderTools(p.tools)}</div>
        </div>
      </div>` : '';

    return `
    <article class="proto-card" style="--cat-bg:${cat.bg};--cat-text:${cat.text};--cat-dot:${cat.dot}">
      <header class="card-header">
        <span class="cat-badge">${p.category}</span>
        <span class="mat-pill" style="background:${mat.bg};color:${mat.text}">${p.maturity}</span>
      </header>
      <div class="card-body">
        <span class="card-index">${String(i + 1).padStart(2, '0')}</span>
        <h2 class="card-title">${p.name}</h2>
        <p class="card-desc">${p.description}</p>
      </div>
      <dl class="card-meta">
        <div><dt>JTBD</dt><dd>${p.jtbd}</dd></div>
        <div><dt>North Star</dt><dd>${p.northStar}</dd></div>
        <div><dt>Growth Loop</dt><dd>${p.loop}</dd></div>
      </dl>
      ${toolsSection}
      <footer class="card-footer">
        <span class="card-loop-note">Hypothesis: ${p.hypothesis.slice(0, 72)}…</span>
        <a class="preview-btn" href="${href}">Preview ↗</a>
      </footer>
    </article>`;
  }).join('');

  // Wire expand toggles
  document.querySelectorAll('.tools-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = document.getElementById(`tools-${btn.closest('[data-proto]').dataset.proto}`);
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
      btn.querySelector('.toggle-icon').textContent = expanded ? '↓' : '↑';
      btn.querySelector('.toggle-label').textContent = expanded
        ? `Xem công cụ (${panel.querySelectorAll('.tool-card').length})`
        : `Ẩn công cụ`;
      panel.hidden = expanded;
    });
  });
}

// Update header badge count
document.addEventListener('DOMContentLoaded', () => {
  const countEl = document.getElementById('totalCount');
  if (countEl) countEl.textContent = PROTOTYPES.length;
  renderCards();
});
