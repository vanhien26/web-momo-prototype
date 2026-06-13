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
      { id: 'vay-nhanh',       name: 'Vay Nhanh',          category: 'Credit',     description: 'Ước tính số tiền trả hằng tháng theo số tiền vay, lãi suất và kỳ hạn.',               jtbd: 'Biết trước gánh nặng tài chính trước khi vay' },
      { id: 'tra-gop',         name: 'Trả Góp',            category: 'Credit',     description: 'Ước tính số tiền cần trả mỗi tháng khi mua hàng trả góp với các kỳ hạn khác nhau.', jtbd: 'So sánh gói trả góp để chọn phương án tối ưu' },
      { id: 'cic-score',       name: 'CIC Score',          category: 'Credit',     description: 'Mô phỏng điểm tín dụng CIC theo các yếu tố thanh toán, sử dụng hạn mức và lịch sử.', jtbd: 'Biết điểm CIC hiện tại và cách cải thiện' },
      { id: 'cic-stimulator',  name: 'CIC Stimulator',     category: 'Credit',     description: 'Mô phỏng tác động của các hành động tài chính đến điểm CIC theo thời gian.',        jtbd: 'Lên kế hoạch cải thiện điểm CIC trước khi vay' },
      { id: 'bao-hiem-o-to',   name: 'Bảo Hiểm Ô Tô',     category: 'Insurance',  description: 'Mô phỏng phí bảo hiểm ô tô theo giá trị xe và tỷ lệ phí.',                          jtbd: 'Ước tính phí bảo hiểm trước khi quyết định mua' },
      { id: 'bhxh',            name: 'BHXH',               category: 'Insurance',  description: 'Mô phỏng tổng đóng BHXH dựa trên mức lương và số tháng tham gia.',                  jtbd: 'Hiểu quyền lợi BHXH để quyết định đóng tự nguyện' },
      { id: 'luong-huu',       name: 'Lương Hưu',          category: 'Insurance',  description: 'Ước tính lương hưu hàng tháng theo số năm đóng BHXH, giới tính và mức bình quân lương.', jtbd: 'Biết trước lương hưu để lập kế hoạch nghỉ hưu' },
      { id: 'tiet-kiem',       name: 'Tiết Kiệm',          category: 'Savings',    description: 'Tính số tiền nhận được khi gửi tiết kiệm theo kỳ hạn và lãi suất.',                 jtbd: 'Biết trước lợi tức để chọn kỳ hạn tiết kiệm phù hợp' },
      { id: 'lai-suat',        name: 'Lãi Suất Ngân Hàng', category: 'Savings',    description: 'So sánh lãi suất tiền gửi từ 6 ngân hàng lớn, tính lợi tức thực nhận theo số tiền và kỳ hạn.', jtbd: 'Chọn ngân hàng và kỳ hạn cho lãi suất tốt nhất' },
      { id: 'thue-tncn',       name: 'Thuế TNCN',          category: 'Tax',        description: 'Ước tính thuế thu nhập cá nhân theo biểu lũy tiến, chiết khấu gia cảnh.',           jtbd: 'Tính nhanh thuế TNCN để lập kế hoạch tài chính' },
      { id: 'chung-chi-quy',   name: 'Chứng Chỉ Quỹ',     category: 'Investment', description: 'Mô phỏng giá trị đầu tư định kỳ vào chứng chỉ quỹ theo lợi suất giả định.',        jtbd: 'Hiểu tốc độ tăng trưởng đầu tư định kỳ trước khi bắt đầu' },
      { id: 'gold',            name: 'Giá Vàng',           category: 'Investment', description: 'So sánh giá mua bán vàng SJC/PNJ, tính sức mua và hòa vốn theo kịch bản.',          jtbd: 'Đánh giá có nên mua vàng tích lũy không' },
      { id: 'stock',           name: 'Chứng Khoán',        category: 'Investment', description: 'Mô phỏng đặt lệnh mua bán cổ phiếu HOSE bằng tiền ảo, theo dõi danh mục.',         jtbd: 'Làm quen thị trường chứng khoán không rủi ro' },
      { id: 'ty-gia',          name: 'Tỷ Giá',             category: 'FX',         description: 'Quy đổi VND sang 6 ngoại tệ phổ biến theo tỷ giá mua bán tham chiếu, xem chênh lệch spread.', jtbd: 'Biết trước được bao nhiêu khi đổi tiền' },
      { id: 'quy-du-phong',    name: 'Quỹ Dự Phòng',      category: 'Planning',   description: 'Tính quy mô quỹ khẩn cấp cần có theo chi tiêu và số tháng an toàn mục tiêu.',       jtbd: 'Xác định đúng mức quỹ dự phòng cần tích lũy' },
    ],
  },
  {
    id: 'merchant',
    name: 'MoMo Deals',
    category: 'Discovery',
    maturity: 'Interaction',
    description: 'Deal-first merchant discovery: khám phá ưu đãi cross-category (Ăn uống, Siêu thị, Giải trí, Sức khỏe, Di chuyển...) từ 300K merchant qua swipe UI. Deal là hero, merchant là context.',
    jtbd: 'Tìm và lưu deal gần tôi nhanh nhất, không cần biết mình muốn gì',
    northStar: 'Saved deal → payment initiation rate',
    loop: 'Discover deal → Save → Pay',
    hypothesis: 'Deal-first framing tạo ra differentiation rõ ràng vs Google Maps/Grab — MoMo là nơi duy nhất khám phá ưu đãi cross-category từ 300K merchant trong một surface.',
    value: 'Tăng deal engagement, merchant payment volume và tạo preference signal có giá trị cho personalization.',
    gate: 'Đo swipe-to-save rate, deal type distribution, saved deal → payment initiation và tiết kiệm ước tính per session.',
    src: 'demos/merchant.html',
    address: 'prototype.momo.vn/momo-deals',
  },
  {
    id: 'planning-tools',
    name: 'Life Planning Tools',
    category: 'PLG / SEO',
    maturity: 'Interactive',
    description: 'Bộ công cụ lập kế hoạch tài chính cá nhân dài hạn: tự do tài chính, đám cưới, học phí. Mỗi tool là một standalone page tối ưu SEO.',
    jtbd: 'Lên kế hoạch tài chính cho mục tiêu lớn',
    northStar: 'Goal completion rate',
    loop: 'Search → Plan → Save',
    hypothesis: 'Life planning tools thu hút long-tail search intent có conversion cao hơn generic financial content.',
    value: 'Tạo SEO surface cho các mục tiêu tài chính dài hạn, mở rộng phễu Web-to-App ngoài Credit và Insurance.',
    gate: 'Đo tool completion, CTA CTR, organic traffic theo từng goal keyword.',
    src: 'tools/tu-do-tai-chinh.html',
    address: 'prototype.momo.vn/life-planning',
    tools: [
      { id: 'tu-do-tai-chinh', name: 'Tự Do Tài Chính', category: 'Planning', description: 'Ước tính số tiền cần có để đạt FIRE theo quy tắc 4% an toàn rút vốn.',        jtbd: 'Biết mình cần bao nhiêu để nghỉ hưu sớm', src: 'tools/tu-do-tai-chinh.html' },
      { id: 'de-danh-dam-cuoi', name: 'Đám Cưới',        category: 'Planning', description: 'Tính số tiền cần để dành mỗi tháng cho kế hoạch cưới theo ngân sách và thời hạn.', jtbd: 'Lên kế hoạch tích lũy cho đám cưới không thiếu hụt', src: 'tools/de-danh-dam-cuoi.html' },
      { id: 'hoc-phi',          name: 'Học Phí',          category: 'Planning', description: 'Ước tính số tiền cần chuẩn bị cho học phí tương lai theo lộ trình tích lũy.',    jtbd: 'Tính trước chi phí học phí để chuẩn bị đủ vốn', src: 'tools/hoc-phi.html' },
    ],
  },
  {
    id: 'ads-manager',
    name: 'Ads Placement Manager',
    category: 'Monetization',
    maturity: 'Interactive',
    description: 'Mô phỏng quy trình tạo chiến dịch quảng cáo trên MoMo Web: setup campaign, chọn vị trí, visualize real-time trên Desktop và Mobile.',
    jtbd: 'Chọn đúng vị trí, ước tính reach trước khi chạy',
    northStar: 'Placement selection completion',
    loop: 'Setup → Place → Preview → Publish',
    hypothesis: 'Visual placement preview giúp advertiser chọn vị trí tự tin hơn và giảm trial-and-error so với bảng giá thuần.',
    value: 'Tạo bề mặt self-serve cho ads booking trên Web Platform, giảm effort sales và tăng inventory utilization.',
    gate: 'Đo placement selection rate, preview interaction depth, campaign publish intent.',
    src: 'demos/ads.html',
    address: 'prototype.momo.vn/ads-manager',
  },
  {
    id: 'onboarding',
    name: 'User Onboarding — Giới thiệu & Đăng ký',
    category: 'Growth',
    maturity: 'Interactive',
    description: 'Luồng onboarding 6 màn hướng dẫn người dùng mới hiểu MoMo: feature tour, social proof, download CTA và đăng ký số điện thoại với OTP.',
    jtbd: 'Hiểu MoMo làm được gì và bắt đầu ngay không mất công',
    northStar: 'Activation rate (register started)',
    loop: 'Discover → Educate → Register → Activate',
    hypothesis: 'Feature tour có visual rõ ràng + social proof giúp tăng tỷ lệ người mới hoàn thành đăng ký so với landing page dạng text truyền thống.',
    value: 'Tăng top-of-funnel conversion cho kênh web/paid, giảm churn ngay từ bước đầu tiên.',
    gate: 'Đo slide completion rate, CTA click rate, register started và OTP verify rate.',
    src: 'demos/onboarding.html',
    address: 'prototype.momo.vn/welcome',
  },
  {
    id: 'platform-components',
    name: 'Platform Components',
    category: 'Platform',
    maturity: 'Reference',
    description: 'Components nền tảng dùng làm reference cho Web Platform build: analytics dashboard, unified search và eKYC flow.',
    jtbd: 'Demo UI pattern và interaction standard cho team build production',
    northStar: 'Component adoption rate',
    loop: 'Design → Reference → Spec → Build',
    hypothesis: 'Prototype rõ ràng giúp Dev và PO align nhanh hơn so với mô tả text trong BRD.',
    value: 'Rút ngắn thời gian handoff design → dev, giảm revision cycle.',
    gate: 'Đo demo session time, Dev reference count và spec adoption rate.',
    src: 'demos/dashboard.html',
    address: 'prototype.momo.vn/platform',
    tools: [
      {
        id: 'dashboard',
        name: 'Analytics Dashboard',
        category: 'Platform',
        description: 'Dashboard phân tích vận hành: KPI cards, line chart, donut, bar chart acquisition, heatmap, funnel và top services table.',
        jtbd: 'Reference cho internal analytics UI',
        src: 'demos/dashboard.html',
      },
      {
        id: 'search',
        name: 'Search & Discovery',
        category: 'Platform',
        description: 'Search với autocomplete, highlight từ khoá, filter sidebar, sort và pagination.',
        jtbd: 'Reference cho unified search component',
        src: 'demos/search.html',
      },
      {
        id: 'ekyc',
        name: 'eKYC Flow',
        category: 'Identity',
        description: 'Luồng xác minh danh tính 4 bước: thông tin cá nhân → CCCD → selfie → review.',
        jtbd: 'Reference cho KYC step-by-step UI',
        src: 'demos/kyc.html',
      },
    ],
  },
  {
    id: 'notification-center',
    name: 'Notification Center',
    category: 'Platform',
    maturity: 'Interactive',
    description: 'Component thông báo đầy đủ: bell icon + badge counter + dropdown + trang danh sách + settings. 5 loại thông báo: giao dịch, ưu đãi, hệ thống, xã hội, tài chính.',
    jtbd: 'Không bỏ sót thông báo quan trọng, kiểm soát được loại nào muốn nhận',
    northStar: 'Notification open rate',
    loop: 'Receive → Open → Act → Return',
    hypothesis: 'Nhóm thông báo theo loại và cho phép filter giúp người dùng tìm thấy thông tin cần thiết nhanh hơn và giảm notification fatigue.',
    value: 'Tăng engagement với các sự kiện quan trọng (giao dịch, ưu đãi hết hạn), giảm churn từ missed opportunities.',
    gate: 'Đo open rate, CTA click rate per type, settings change rate và unsubscribe rate.',
    src: 'demos/notification-center.html',
    address: 'prototype.momo.vn/notifications',
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
  {
    id: 'orchestrator',
    name: 'GenAI Orchestrator',
    category: 'Agentic',
    maturity: 'Concept',
    description: 'Canvas workflow mô phỏng orchestrator nhận prompt, phân việc cho AI agents (Research/Brief/Content Writer/Video Script), truy vấn RAG knowledge base và stream output.',
    jtbd: 'Hiểu cách AI orchestrator phân tác vụ và tạo output có cấu trúc',
    northStar: 'Workflow completion rate',
    loop: 'Prompt → Dispatch → RAG → Assemble → Output',
    hypothesis: 'Visual canvas workflow giúp team và stakeholder tin tưởng vào hệ thống AI content — thấy được luồng xử lý thay vì chỉ thấy input/output.',
    value: 'Tạo bề mặt pitch cho GenAI Content/Report/Video platform, làm nền tảng BRD handoff cho Trọng build production version.',
    gate: 'Đo preset selections, workflow completions, output panel engagement và open-in-tab rate.',
    src: 'demos/orchestrator.html',
    address: 'prototype.momo.vn/genai-orchestrator',
  },
];

// ─── Color maps ───────────────────────────────────────────────────────────────

const CAT_COLOR = {
  'PLG / SEO':  { bg: '#fff0f7', text: '#a50064' },
  'Monetization':{ bg: '#fff7ed', text: '#c2410c' },
  'Discovery':  { bg: '#fffbeb', text: '#b45309' },
  'Engagement': { bg: '#f5f3ff', text: '#6d28d9' },
  'Credit':     { bg: '#eff6ff', text: '#1d4ed8' },
  'Insurance':  { bg: '#f0fdf4', text: '#15803d' },
  'Savings':    { bg: '#ecfeff', text: '#0e7490' },
  'Tax':        { bg: '#fff7ed', text: '#c2410c' },
  'Investment': { bg: '#faf5ff', text: '#7c3aed' },
  'Planning':   { bg: '#f8fafc', text: '#475569' },
  'FX':         { bg: '#f0f9ff', text: '#0369a1' },
  'Agentic':    { bg: '#f5f3ff', text: '#6d28d9' },
  'Identity':   { bg: '#fdf2f8', text: '#9d174d' },
  'Growth':     { bg: '#f0fdf4', text: '#166534' },
  'Identity':   { bg: '#fdf2f8', text: '#9d174d' },
  'Platform':   { bg: '#f0f9ff', text: '#0369a1' },
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
  const src = tool.src || `demos/financial.html#${tool.id}`;

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
          <div class="address-pill">🔒 ${proto.address}#${tool.id}</div>
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
