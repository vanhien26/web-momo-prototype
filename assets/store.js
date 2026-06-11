// ─── Prototypes registry ──────────────────────────────────────────────────────

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
    tools: [
      { id: 'vay-nhanh',       name: 'Vay Nhanh Calculator',      category: 'Credit',     description: 'Ước tính số tiền trả hằng tháng theo số tiền vay, lãi suất và kỳ hạn.',               jtbd: 'Biết trước gánh nặng tài chính trước khi vay' },
      { id: 'tra-gop',         name: 'Trả Góp Simulator',         category: 'Credit',     description: 'Ước tính số tiền cần trả mỗi tháng khi mua hàng trả góp với các kỳ hạn khác nhau.', jtbd: 'So sánh gói trả góp để chọn phương án tối ưu' },
      { id: 'bao-hiem-o-to',   name: 'Bảo Hiểm Ô Tô Quote',      category: 'Insurance',  description: 'Mô phỏng phí bảo hiểm ô tô theo giá trị xe và tỷ lệ phí.',                          jtbd: 'Ước tính phí bảo hiểm trước khi quyết định mua' },
      { id: 'bhxh',            name: 'BHXH Simulator',            category: 'Insurance',  description: 'Mô phỏng tổng đóng BHXH dựa trên mức lương và số tháng tham gia.',                  jtbd: 'Hiểu quyền lợi BHXH để quyết định đóng tự nguyện' },
      { id: 'luong-huu',      name: 'Lương Hưu Planner',         category: 'Insurance',  description: 'Ước tính lương hưu hàng tháng theo số năm đóng BHXH, giới tính và mức bình quân lương.', jtbd: 'Biết trước lương hưu để lập kế hoạch nghỉ hưu' },
      { id: 'tiet-kiem',       name: 'Tiết Kiệm Simulator',       category: 'Savings',    description: 'Tính số tiền nhận được khi gửi tiết kiệm theo kỳ hạn và lãi suất.',                 jtbd: 'Biết trước lợi tức để chọn kỳ hạn tiết kiệm phù hợp' },
      { id: 'thue-tncn',       name: 'Thuế TNCN Calculator',      category: 'Tax',        description: 'Ước tính thuế thu nhập cá nhân theo biểu lũy tiến, chiết khấu gia cảnh.',           jtbd: 'Tính nhanh thuế TNCN để lập kế hoạch tài chính' },
      { id: 'chung-chi-quy',   name: 'Chứng Chỉ Quỹ Explorer',   category: 'Investment', description: 'Mô phỏng giá trị đầu tư định kỳ vào chứng chỉ quỹ theo lợi suất giả định.',        jtbd: 'Hiểu tốc độ tăng trưởng đầu tư định kỳ trước khi bắt đầu' },
      { id: 'gold',            name: 'Giá Vàng & Sức Mua',        category: 'Investment', description: 'So sánh giá mua bán vàng SJC/PNJ, tính sức mua và hòa vốn theo kịch bản.',          jtbd: 'Đánh giá có nên mua vàng tích lũy không' },
      { id: 'stock',           name: 'Tập Đầu Tư Chứng Khoán',   category: 'Investment', description: 'Mô phỏng đặt lệnh mua bán cổ phiếu HOSE bằng tiền ảo, theo dõi danh mục.',         jtbd: 'Làm quen thị trường chứng khoán không rủi ro' },
      { id: 'quy-du-phong',    name: 'Quỹ Dự Phòng Planner',     category: 'Planning',   description: 'Tính quy mô quỹ khẩn cấp cần có theo chi tiêu và số tháng an toàn mục tiêu.',       jtbd: 'Xác định đúng mức quỹ dự phòng cần tích lũy' },
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
  },
];

// ─── Color maps ───────────────────────────────────────────────────────────────

const CAT_COLOR = {
  'PLG / SEO':  { bg: '#fff0f7', text: '#a50064' },
  'Discovery':  { bg: '#fffbeb', text: '#b45309' },
  'Engagement': { bg: '#f5f3ff', text: '#6d28d9' },
  'Credit':     { bg: '#eff6ff', text: '#1d4ed8' },
  'Insurance':  { bg: '#f0fdf4', text: '#15803d' },
  'Savings':    { bg: '#ecfeff', text: '#0e7490' },
  'Tax':        { bg: '#fff7ed', text: '#c2410c' },
  'Investment': { bg: '#faf5ff', text: '#7c3aed' },
  'Planning':   { bg: '#f8fafc', text: '#475569' },
};

const MAT_COLOR = {
  'Interactive':    { bg: '#f0fdf4', text: '#15803d' },
  'Interaction':    { bg: '#f0fdf4', text: '#15803d' },
  'Data experience':{ bg: '#eff6ff', text: '#1d4ed8' },
};

// ─── State ────────────────────────────────────────────────────────────────────

let activeProtoId = PROTOTYPES[0].id;
let activeToolId  = null;
const expanded    = new Set([PROTOTYPES[0].id]);

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function renderNav() {
  const nav = document.getElementById('protoNav');
  if (!nav) return;

  nav.innerHTML = PROTOTYPES.map((p, i) => {
    const isActive   = activeProtoId === p.id && !activeToolId;
    const isExpanded = expanded.has(p.id);

    const toolsHtml = p.tools ? `
      <div class="tool-nav-list${isExpanded ? '' : ' hidden'}" id="tnl-${p.id}">
        ${p.tools.map(t => {
          const tc = CAT_COLOR[t.category] || CAT_COLOR['Planning'];
          const isTA = activeProtoId === p.id && activeToolId === t.id;
          return `<button class="tool-nav-btn${isTA ? ' active' : ''}" data-proto="${p.id}" data-tool="${t.id}">
            <span class="tool-nav-cat" style="color:${tc.text}">${t.category}</span>
            <span class="tool-nav-lbl">${t.name}</span>
          </button>`;
        }).join('')}
      </div>` : '';

    return `<div class="proto-nav-group">
      <button class="proto-nav-btn${isActive ? ' active' : ''}" data-id="${p.id}">
        <span class="nav-index">${String(i + 1).padStart(2, '0')}</span>
        <span class="proto-nav-label">
          <strong>${p.name}</strong>
          <small>${p.category}</small>
        </span>
        ${p.tools ? `<span class="expand-caret${isExpanded ? ' open' : ''}">›</span>` : ''}
      </button>
      ${toolsHtml}
    </div>`;
  }).join('');

  nav.querySelectorAll('.proto-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const proto = PROTOTYPES.find(p => p.id === id);
      if (proto && proto.tools) {
        if (expanded.has(id)) expanded.delete(id); else expanded.add(id);
      }
      selectProto(id);
    });
  });

  nav.querySelectorAll('.tool-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => selectTool(btn.dataset.proto, btn.dataset.tool));
  });
}

// ─── Selection ────────────────────────────────────────────────────────────────

function selectProto(id) {
  activeProtoId = id;
  activeToolId  = null;
  renderNav();
  renderWorkspace();
  closeSidebar();
}

function selectTool(protoId, toolId) {
  activeProtoId = protoId;
  activeToolId  = toolId;
  renderNav();
  renderWorkspace();
  closeSidebar();
}

// ─── Workspace ────────────────────────────────────────────────────────────────

function renderWorkspace() {
  const ws = document.getElementById('protoWorkspace');
  if (!ws) return;

  const proto = PROTOTYPES.find(p => p.id === activeProtoId);
  if (!proto) return;

  if (activeToolId && proto.tools) {
    const tool = proto.tools.find(t => t.id === activeToolId);
    if (tool) { ws.innerHTML = buildToolView(proto, tool); wireWs(ws, proto, tool); return; }
  }

  ws.innerHTML = buildProtoView(proto);
  wireWs(ws, proto, null);
}

function buildProtoView(proto) {
  const cat = CAT_COLOR[proto.category] || {};

  return `
  <div class="ws-topbar">
    <div class="ws-breadcrumb">
      <button class="menu-toggle" id="menuToggle">☰</button>
      <span class="ws-cat-tag" style="background:${cat.bg};color:${cat.text}">${proto.category}</span>
      <span class="ws-bc-sep">/</span>
      <span class="ws-bc-cur">${proto.name}</span>
    </div>
    <div class="ws-topbar-right">
      <div class="vp-switcher">
        <button class="vp-btn active" data-vp="">D</button>
        <button class="vp-btn" data-vp="tablet">T</button>
        <button class="vp-btn" data-vp="mobile">M</button>
      </div>
      <a href="${proto.src}" target="_blank" rel="noopener" class="open-ext-btn">Mở tab ↗</a>
    </div>
  </div>

  <div class="ws-preview expanded">
    <div class="preview-stage">
      <div class="browser-frame" id="browserFrame">
        <div class="browser-bar">
          <div class="browser-dots"><i></i><i></i><i></i></div>
          <div class="address-pill">🔒 ${proto.address}</div>
          <button class="reload-btn" id="reloadBtn">↺</button>
        </div>
        <iframe id="demoFrame" src="${proto.src}" title="${proto.name}"></iframe>
      </div>
    </div>
  </div>`;
}

function buildToolView(proto, tool) {
  const tc  = CAT_COLOR[tool.category]  || {};
  const src = `demos/financial.html#${tool.id}`;

  return `
  <div class="ws-topbar">
    <div class="ws-breadcrumb">
      <button class="menu-toggle" id="menuToggle">☰</button>
      <button class="ws-back-btn" data-proto="${proto.id}">← ${proto.name}</button>
      <span class="ws-bc-sep">/</span>
      <span class="ws-cat-tag" style="background:${tc.bg};color:${tc.text}">${tool.category}</span>
      <span class="ws-bc-sep">/</span>
      <span class="ws-bc-cur">${tool.name}</span>
    </div>
    <a href="${src}" target="_blank" rel="noopener" class="open-ext-btn">Mở tab ↗</a>
  </div>

  <div class="ws-overview compact">
    <div class="ws-overview-left">
      <h1 class="ws-title">${tool.name}</h1>
      <p class="ws-desc">${tool.description}</p>
    </div>
    <dl class="ws-metrics two-col">
      <div><dt>JTBD</dt><dd>${tool.jtbd}</dd></div>
      <div><dt>Category</dt><dd>${tool.category}</dd></div>
    </dl>
  </div>

  <div class="ws-preview expanded">
    <div class="preview-stage">
      <div class="browser-frame" id="browserFrame">
        <div class="browser-bar">
          <div class="browser-dots"><i></i><i></i><i></i></div>
          <div class="address-pill">🔒 prototype.momo.vn/financial-utilities#${tool.id}</div>
          <button class="reload-btn" id="reloadBtn">↺</button>
        </div>
        <iframe id="demoFrame" src="${src}" title="${tool.name}"></iframe>
      </div>
    </div>
  </div>`;
}

function wireWs(ws, proto, tool) {
  // Reload
  const rb = ws.querySelector('#reloadBtn');
  if (rb) rb.addEventListener('click', () => {
    const f = ws.querySelector('#demoFrame');
    if (f) f.src = f.src;
  });

  // Viewport
  ws.querySelectorAll('.vp-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      ws.querySelectorAll('.vp-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const bf = ws.querySelector('#browserFrame');
      if (bf) bf.className = 'browser-frame ' + (btn.dataset.vp || '');
    });
  });

  // Back button
  const back = ws.querySelector('.ws-back-btn');
  if (back) back.addEventListener('click', () => selectProto(back.dataset.proto));

  // Mobile menu toggle
  const mt = ws.querySelector('#menuToggle');
  if (mt) mt.addEventListener('click', openSidebar);
}

// ─── Mobile sidebar ───────────────────────────────────────────────────────────

function openSidebar() {
  document.getElementById('protoSidebar').classList.add('open');
  document.getElementById('sidebarOverlay').classList.add('open');
}
function closeSidebar() {
  document.getElementById('protoSidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('open');
}

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);
  renderNav();
  renderWorkspace();
});
