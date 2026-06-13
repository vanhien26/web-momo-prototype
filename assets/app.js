const demos = {
  financial: {
    name: 'Money Lab',
    title: 'Money Lab',
    type: 'PLG / SEO',
    maturity: 'Interactive prototype',
    src: 'demos/financial.html',
    address: 'prototype.momo.vn/financial-utilities',
    description: 'Workspace gọn cho quyết định tài chính: vay, tiết kiệm, đầu tư, bảo hiểm và tỷ giá.',
    jtbd: 'Tính nhanh, hiểu rõ, hành động ngay',
    northStar: 'Qualified tool completion',
    loop: 'Search → Utility → App',
    hypothesis: 'Interactive utility tạo information gain tốt hơn content thuần và thu tín hiệu intent có giá trị cho funnel Web-to-App.',
    value: 'Mở rộng organic acquisition cho Credit, Insurance và Personal Finance với asset có khả năng tái sử dụng.',
    gate: 'Đo completion rate, CTA CTR, Web-to-App conversion và chất lượng traffic theo từng utility.'
  },
  merchant: {
    name: 'Merchant Discovery',
    title: 'Quán Ngon Finder',
    type: 'Local Discovery',
    maturity: 'Interaction prototype',
    src: 'demos/merchant.html',
    address: 'prototype.momo.vn/quan-ngon',
    description: 'Khám phá merchant theo vị trí bằng interaction dạng swipe, kết hợp ưu đãi MoMo để rút ngắn hành trình từ discovery đến transaction.',
    jtbd: 'Chọn nhanh quán phù hợp ở gần',
    northStar: 'Saved merchant intent',
    loop: 'Discover → Save → Pay',
    hypothesis: 'Interaction thiên về lựa chọn giúp giảm cognitive load và tạo tín hiệu preference rõ hơn danh sách truyền thống.',
    value: 'Tăng merchant exposure, deal discovery và khả năng chuyển đổi sang thanh toán tại điểm bán.',
    gate: 'Đo swipe depth, save rate, deal engagement và payment initiation từ merchant đã lưu.'
  },
  worldcup: {
    name: 'World Cup Predictor',
    title: 'World Cup 2026 Predictor',
    type: 'Engagement',
    maturity: 'Data experience prototype',
    src: 'demos/world-cup.html',
    address: 'prototype.momo.vn/world-cup-2026',
    description: 'Trải nghiệm dữ liệu thể thao dễ hiểu cho đại chúng, dùng sự kiện mùa vụ để tạo traffic, repeat visit và bề mặt activation.',
    jtbd: 'So sánh cơ hội đội tuyển yêu thích',
    northStar: 'Team analysis engagement',
    loop: 'Event → Explore → Return',
    hypothesis: 'Data storytelling trực quan giúp MoMo sở hữu seasonal search demand và tạo lý do quay lại trong suốt giải đấu.',
    value: 'Tạo engagement surface có khả năng gắn prediction game, voucher, mini app và campaign activation.',
    gate: 'Đo team views, comparison depth, returning users và campaign CTA conversion.'
  }
};

const $ = selector => document.querySelector(selector);
const frame = $('#demoFrame');
const browserFrame = $('#browserFrame');

function closeMenu() {
  $('#sidebar').classList.remove('open');
  $('#overlay').classList.remove('open');
}

function selectDemo(key) {
  const demo = demos[key];
  document.querySelectorAll('.prototype-link').forEach(button => {
    button.classList.toggle('active', button.dataset.demo === key);
  });
  $('#breadcrumbName').textContent = demo.name;
  $('#demoType').textContent = demo.type;
  $('#demoMaturity').textContent = demo.maturity;
  $('#demoTitle').textContent = demo.title;
  $('#demoDescription').textContent = demo.description;
  $('#demoJtbd').textContent = demo.jtbd;
  $('#demoNorthStar').textContent = demo.northStar;
  $('#demoLoop').textContent = demo.loop;
  $('#demoHypothesis').textContent = demo.hypothesis;
  $('#demoValue').textContent = demo.value;
  $('#demoGate').textContent = demo.gate;
  $('#addressText').textContent = demo.address;
  $('#openDemo').href = demo.src;
  frame.src = demo.src;
  frame.title = `${demo.title} prototype`;
  closeMenu();
}

document.querySelectorAll('.prototype-link').forEach(button => {
  button.addEventListener('click', () => selectDemo(button.dataset.demo));
});

// Auto-select demo from ?demo= URL param
const urlDemo = new URLSearchParams(location.search).get('demo');
if (urlDemo && demos[urlDemo]) selectDemo(urlDemo);

document.querySelectorAll('.viewport-button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.viewport-button').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    browserFrame.className = `browser-frame ${button.dataset.viewport}`;
    $('#viewportLabel').textContent = `${button.dataset.viewport[0].toUpperCase()}${button.dataset.viewport.slice(1)} preview`;
  });
});

$('#reloadButton').addEventListener('click', () => {
  frame.src = frame.src;
});
$('#menuButton').addEventListener('click', () => {
  $('#sidebar').classList.add('open');
  $('#overlay').classList.add('open');
});
$('#overlay').addEventListener('click', closeMenu);
