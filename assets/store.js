// ─── Prototypes registry ──────────────────────────────────────────────────────

const PROTOTYPES = [
  {
    id: 'financial',
    name: 'Financial Utilities Lab',
    category: 'Widget',
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
    name: 'MoMo Deal',
    category: 'Platform',
    maturity: 'Interaction',
    description: 'Merchant network đa ngành của MoMo: khám phá nơi ăn uống, mua sắm, sức khỏe, giải trí và di chuyển; xem dịch vụ, chi nhánh, ưu đãi, phương thức thanh toán rồi đi tới hành động phù hợp.',
    jtbd: 'Tìm merchant phù hợp, biết có gì và dùng dịch vụ ngay',
    northStar: 'Qualified merchant action rate',
    loop: 'Discover → Evaluate merchant → Use service → Pay',
    hypothesis: 'Trang merchant có cấu trúc theo loại hình giúp MoMo chuyển từ danh sách deal sang lớp discovery và transaction cho toàn bộ mạng lưới chấp nhận thanh toán.',
    value: 'Tăng khả năng khám phá merchant, sử dụng dịch vụ, redemption ưu đãi và payment volume trên nhiều ngành hàng.',
    gate: 'Đo merchant detail view, service CTA, direction, save, deal eligibility check và payment initiation theo loại hình merchant.',
    src: 'demos/merchant.html',
    address: 'prototype.momo.vn/momo-deals',
  },
  {
    id: 'planning-tools',
    name: 'Life Planning Tools',
    category: 'Widget',
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
    category: 'MoSpark',
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
    id: 'chatbot',
    name: 'MoMo Project Assistant',
    category: 'MoSpark',
    maturity: 'Architecture prototype',
    description: 'Chatbot nhúng cho từng Mini Web hoặc Microsite, trả lời câu hỏi mở từ RAG của đúng project và chuyển sang Typebot khi cần chạy kịch bản có trạng thái.',
    jtbd: 'Hỏi bất kỳ điều gì về project đang xem và nhận câu trả lời có nguồn',
    northStar: 'Grounded answer success rate',
    loop: 'Question → Project RAG → Answer / Typebot flow',
    hypothesis: 'Project-scoped RAG có citation giúp user hiểu sản phẩm ngay tại trang, còn Typebot giữ các flow xác định và an toàn hơn cho dữ liệu có cấu trúc.',
    value: 'Một embed component dùng lại cho nhiều Mini Web và Microsite, nhưng cô lập knowledge, analytics và guardrail theo từng project.',
    gate: 'Đo grounded answer rate, citation coverage, low-confidence fallback, Typebot completion và assisted CTA.',
    src: 'demos/chatbot.html',
    address: 'prototype.momo.vn/project-assistant',
  },
  {
    id: 'seo-geo-score',
    name: 'SEO/GEO Project Hub',
    category: 'MoSpark',
    maturity: 'Interactive',
    description: 'Tổng hành dinh quản lý Use Case SEO/GEO: cây Topic → Cluster → Keyword 3 tầng, Keyword Registry với quy tắc 1-1 anti-cannibalization, Business Context 12 trường làm nguồn sự thật cho GenAI content, và kick-off sản xuất nội dung.',
    jtbd: 'Quản lý toàn bộ Use Case, Cluster và Keyword trong một surface - không bỏ sót, không trùng lặp',
    northStar: 'Use case coverage rate và keyword uniqueness index',
    loop: 'Use Case → Cluster → Keyword → Business Context → GenAI Content',
    hypothesis: 'Tập trung quản lý keyword trong một registry duy nhất với quy tắc 1 keyword = 1 URL sẽ loại bỏ cannibalization và tạo nền tảng vững cho content production quy mô lớn.',
    value: 'Single source of truth cho toàn bộ SEO/GEO portfolio: SoV per use case, funnel TOFU/MOFU/BOFU, Business Context đủ 12 trường là gate bắt buộc trước khi GenAI sản xuất.',
    gate: 'Đo use case coverage (% có keyword đầy đủ), Business Context completeness rate, keyword uniqueness index và GenAI kickoff rate per cluster.',
    src: 'demos/seo-geo-score.html',
    address: 'prototype.momo.vn/seo-geo-hub',
  },
  {
    id: 'momo-services',
    name: 'MoMo Services',
    category: 'Platform',
    maturity: 'Reference',
    description: 'Landing cho người chưa có MoMo: đọc thông tin dịch vụ, xem use case quan trọng, rồi đi tiếp tới download và quà cho user mới.',
    jtbd: 'Hiểu MoMo làm gì trước khi cài app',
    northStar: 'Landing to install intent',
    loop: 'Read → Explore → Download → Claim gift',
    hypothesis: 'Một landing thiên về brand love và use case sẽ giúp user mới hiểu giá trị MoMo nhanh hơn so với danh sách tính năng rời rạc.',
    value: 'Tạo trang đích cho các dịch vụ cốt lõi như Loan, Pay Later và Thanh toán số.',
    gate: 'Đo scroll depth, use case click, download CTA và gift CTA.',
    src: 'demos/search.html',
    address: 'prototype.momo.vn/services',
    tools: [
      {
        name: 'Search & Discovery',
        category: 'Discovery',
        description: 'Trang tìm dịch vụ MoMo với autocomplete, category chips, highlight use case và filter để user chưa cài app dễ khám phá.',
        jtbd: 'Tìm đúng dịch vụ và use case của MoMo nhanh',
        src: 'demos/search.html',
      },
    ],
  },
  {
    id: 'worldcup',
    name: 'World Cup 2026 Predictor',
    category: 'Widget',
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
    id: 'metro',
    name: 'Mua Vé Metro HCM',
    category: 'Widget',
    maturity: 'Flow prototype',
    description: 'Prototype luồng mua vé Metro Hồ Chí Minh: chọn tuyến, chọn vé, thanh toán và nhận QR để vào cổng.',
    jtbd: 'Mua vé nhanh trước khi lên tàu',
    northStar: 'Ticket purchase completion',
    loop: 'Search route -> Buy ticket -> Scan QR',
    hypothesis: 'Một luồng mua vé rõ ràng giúp Dev thấy ngay cấu trúc màn hình cần dựng cho transit payment.',
    value: 'Làm rõ các module cần có cho transit purchase: route select, ticket select, payment và ticket wallet.',
    gate: 'Đo completion rate, payment success state và QR ticket handoff.',
    src: 'demos/metro-ticket.html',
    address: 'prototype.momo.vn/metro-ticket',
  },
  {
    id: 'bill-lookup',
    name: 'Bill Lookup',
    category: 'Widget',
    maturity: 'Lookup',
    description: 'Tra cứu hóa đơn điện, nước, internet và di động theo mã khách hàng hoặc số hợp đồng, rồi đi thẳng tới bước thanh toán.',
    jtbd: 'Biết cần trả gì, khi nào đến hạn, và trả ngay',
    northStar: 'Bill lookup completion',
    loop: 'Lookup → Verify → Pay',
    hypothesis: 'Bill lookup surface giảm friction cho thanh toán định kỳ và tạo intent rõ trước khi chuyển đổi.',
    value: 'Mở bề mặt cho utilities, recurring payment và nhắc hạn thanh toán.',
    gate: 'Đo lookup success, pay CTA, reminder opt-in và repeat usage.',
    src: 'demos/bill-lookup.html',
    address: 'prototype.momo.vn/bill-lookup',
  },
  {
    id: 'scam-check',
    name: 'Scam Check',
    category: 'Widget',
    maturity: 'Lookup',
    description: 'Tra cứu số điện thoại, tài khoản, link hoặc QR để phát hiện tín hiệu lừa đảo trước khi chuyển tiền.',
    jtbd: 'Biết có nên tin trước khi bấm chuyển',
    northStar: 'Risk check completion',
    loop: 'Paste → Score → Warn',
    hypothesis: 'Safety lookup surface giúp giảm gian lận và tăng niềm tin cho thanh toán số.',
    value: 'Tạo lớp bảo vệ cho P2P, QR, chuyển khoản và social payment.',
    gate: 'Đo risk-check completion, warning CTR, abort rate và report intent.',
    src: 'demos/scam-check.html',
    address: 'prototype.momo.vn/scam-check',
  },
  {
    id: 'blog-category',
    name: 'MoSpark Blog Category',
    category: 'MoSpark',
    maturity: 'Listing',
    description: 'Blog category listing với 8 danh mục Use Case MoMo, featured article, article grid 2-col, category filter tabs với live count và inline contextual ad.',
    jtbd: 'Khám phá nội dung theo chủ đề, tìm bài phù hợp nhanh',
    northStar: 'Article click-through rate',
    loop: 'Browse → Filter → Read → Convert',
    hypothesis: 'Category listing có filter theo use case giúp user tìm đúng nội dung nhanh hơn và tăng engagement depth trong content hub MoSpark.',
    value: 'Tạo bề mặt điều hướng nội dung theo 8 danh mục MoMo, tăng internal linking và time-on-site.',
    gate: 'Đo category filter usage, article CTR, scroll depth và CTA conversion từ listing sang bài viết.',
    src: 'demos/blog-category.html',
    address: 'prototype.momo.vn/mospark-blog',
  },
  {
    id: 'blog',
    name: 'MoSpark Blog Article',
    category: 'MoSpark',
    maturity: 'Article',
    description: 'Full-width blog article với quiz tương tác, floating TOC, inline ads (Universal + Contextual), static aggregate rating và progressive reading experience.',
    jtbd: 'Đọc bài chuyên sâu, kiểm tra kiến thức và chuyển đổi sang dịch vụ MoMo',
    northStar: 'Article completion + CTA conversion',
    loop: 'Read → Quiz → Convert',
    hypothesis: 'Blog article tích hợp quiz và contextual ads theo đúng chủ đề tăng engagement và conversion so với bài viết thuần.',
    value: 'Tạo bề mặt nội dung chiều sâu cho SEO/GEO, quiz tăng time-on-page, contextual ad phục vụ monetization.',
    gate: 'Đo scroll depth, quiz completion, CTA CTR từ inline ad và fixed bar, Web-to-App conversion.',
    src: 'demos/blog.html',
    address: 'prototype.momo.vn/mospark-blog/phạt-nguội',
  },
  {
    id: 'orchestrator',
    name: 'GenAI Orchestrator',
    category: 'MoSpark',
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
  'MoSpark':    { bg: '#fff0f7', text: '#a50064' },
  'Widget':     { bg: '#eff6ff', text: '#1d4ed8' },
  'Platform':   { bg: '#f0f9ff', text: '#0369a1' },
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
  'Monetization':{ bg: '#fff7ed', text: '#c2410c' },
  'Discovery':  { bg: '#fffbeb', text: '#b45309' },
  'Engagement': { bg: '#f5f3ff', text: '#6d28d9' },
  'Transit':    { bg: '#eef2ff', text: '#4338ca' },
};

const GROUP_ORDER = ['MoSpark', 'Widget', 'Platform'];
const GROUP_ITEM_ORDER = {
  MoSpark: ['orchestrator', 'seo-geo-score', 'chatbot', 'ads-manager', 'blog-category', 'blog'],
  Widget: ['financial', 'bill-lookup', 'scam-check', 'planning-tools', 'worldcup', 'metro'],
  Platform: ['merchant', 'momo-services'],
};

const GROUP_SUMMARY = {
  MoSpark: {
    eyebrow: 'MoSpark',
    title: 'GenAI / Content / Chatbot / Ads',
    description: 'Nhóm prototype cho hệ sinh thái tạo nội dung, quality gate, hội thoại và monetization surfaces.',
    examples: 'GenAI Orchestrator · SEO/GEO Project Hub · MoMo Project Assistant · Ads Placement Manager · Blog Category · Blog Article',
  },
  Widget: {
    eyebrow: 'Widget',
    title: 'Financial / Planning / Transit',
    description: 'Nhóm tool và lookup ngắn để Dev implement nhanh, rõ input, output và trạng thái an toàn.',
    examples: 'Financial · Bill lookup · Scam check · Life planning · Metro',
  },
  Platform: {
    eyebrow: 'Platform',
    title: 'MoMo Services',
    description: 'Nhóm điều hướng vào các surface dịch vụ và discovery của MoMo.',
    examples: 'MoMo Deal · Search & Discovery',
  },
};

const MAT_COLOR = {
  'Interactive':    { bg: '#f0fdf4', text: '#15803d' },
  'Interaction':    { bg: '#f0fdf4', text: '#15803d' },
  'Data experience':{ bg: '#eff6ff', text: '#1d4ed8' },
};

const MOSPARK_SOURCE_URL = 'https://mospark-intro.vercel.app/';

const MOSPARK_PAIN_POINTS = [
  {
    code: 'P-01',
    title: 'Phụ thuộc Dev cho mọi thứ',
    text: 'Một landing campaign có thể kéo dài 1-2 tuần chờ sprint, khiến ý tưởng tăng trưởng bị chậm ngay từ khâu thử nghiệm.',
  },
  {
    code: 'P-02',
    title: 'Content không chuẩn hóa',
    text: 'Nội dung do AI hoặc thủ công tạo ra cần quality gate rõ ràng trước khi publish, nếu không chất lượng sẽ trôi về phía thấp nhất.',
  },
  {
    code: 'P-03',
    title: 'Không đo được đến cùng',
    text: 'Pageview là chưa đủ. Cần nhìn được đóng góp đến New User, MAU và Transaction theo từng use case.',
  },
];

const MOSPARK_STACK = [
  {
    title: 'Landing Page Builder',
    text: 'BU/PM tự dựng landing bằng AI, chọn template theo use case và preview mobile trước khi publish.',
  },
  {
    title: 'Product Growth',
    text: 'Inventory, content plan, GenAI content và performance chạy trong một vòng lặp khép kín.',
  },
  {
    title: 'Ads / Widget Management',
    text: 'Phân phối đúng surface theo ngữ cảnh trang, không hardcode và không chờ Dev chỉnh tay.',
  },
  {
    title: 'Chatbot',
    text: 'Giải đáp người dùng ngay trong hành trình trên web để giảm friction trước khi họ rời đi.',
  },
  {
    title: 'Full Funnel Tracking',
    text: 'Đo từ Out-App đến Open/Download App rồi tới giao dịch cuối cùng, theo từng use case.',
  },
];

const MOSPARK_GROWTH_STEPS = [
  {
    index: '01',
    title: 'SEO/GEO Inventory',
    text: 'Nhìn thị trường tìm kiếm theo từng use case để biết cơ hội lớn ở đâu, MoMo đang đứng ở đâu và gap nằm ở đâu.',
    tag: 'market data',
  },
  {
    index: '02',
    title: 'Content Plan',
    text: 'Chuyển inventory thành kế hoạch nội dung, xác định cụm chủ đề và ưu tiên sản xuất theo cơ hội thật.',
    tag: 'plan',
  },
  {
    index: '03',
    title: 'GenAI Content',
    text: 'AI sản xuất nội dung theo plan đã duyệt, trong business context và qua quality gate trước khi publish.',
    tag: 'production',
  },
  {
    index: '04',
    title: 'Content / AI Performance',
    text: 'Đo hiệu suất từng bài trên Google và AI Search rồi đẩy dữ liệu quay ngược về inventory cho chu kỳ sau.',
    tag: 'measure',
  },
];

const MOSPARK_PLACEMENTS = [
  {
    title: 'Native Widget',
    text: 'Widget nhúng trực tiếp vào nội dung, cho trải nghiệm tự nhiên và chuyển đổi Web-to-App cao nhất.',
    level: 'rất thấp',
  },
  {
    title: 'Balloon',
    text: 'Biểu tượng nổi nhẹ trên mọi trang, giữ thông điệp hiện diện mà không cắt ngang hành trình đọc.',
    level: 'thấp',
  },
  {
    title: 'Inline Banner',
    text: 'Banner đặt giữa bài viết hoặc tin tức, phù hợp hơn cho mục tiêu awareness.',
    level: 'trung bình',
  },
  {
    title: 'Popup',
    text: 'Chỉ dùng cho landing promotion và cần guardrail rõ ràng để bảo vệ trải nghiệm.',
    level: 'cao',
  },
];

const MOSPARK_TRACKING = [
  {
    label: 'Out-App',
    text: 'Người dùng đến từ Search, AI Search, Social và các kênh ngoài App.',
    stage: 'Acquisition',
  },
  {
    label: 'Web - momo.vn',
    text: 'Tương tác với landing page, nội dung, công cụ và widget.',
    stage: 'Engagement',
  },
  {
    label: 'Open App / Download App',
    text: 'Chuyển đổi Web-to-App qua deep link - mở app hoặc cài đặt mới.',
    stage: 'Conversion',
  },
  {
    label: 'Make Transaction',
    text: 'Giao dịch theo từng use case của MoMo, là business outcome cuối cùng.',
    stage: 'Outcome',
  },
];

const MOSPARK_AUDIENCE = [
  {
    title: 'BU / PM',
    text: 'Có mục tiêu MAU, MEU, New User trên Web và tự chủ landing, content plan, Ads/Widget, cũng như dữ liệu thị trường.',
  },
  {
    title: 'Content Team',
    text: 'Sản xuất nội dung trên một pipeline duy nhất, có AI hỗ trợ và quality gate bảo vệ.',
  },
  {
    title: 'Growth / Web Product',
    text: 'Nhìn toàn cảnh market, đo hiệu suất content/AI và full funnel Web-to-App để trả lời ROI theo use case.',
  },
];

// ─── State ────────────────────────────────────────────────────────────────────

let activeProtoId = null;
let activeToolId  = null;
const expanded    = new Set();

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function renderNav() {
  const nav = document.getElementById('protoNav');
  if (!nav) return;

  nav.innerHTML = GROUP_ORDER.map(groupName => {
    const desiredOrder = GROUP_ITEM_ORDER[groupName] || [];
    const groupItems = PROTOTYPES
      .filter(p => p.category === groupName)
      .slice()
      .sort((a, b) => {
        const ia = desiredOrder.indexOf(a.id);
        const ib = desiredOrder.indexOf(b.id);
        if (ia === -1 && ib === -1) return 0;
        if (ia === -1) return 1;
        if (ib === -1) return -1;
        return ia - ib;
      });
    if (!groupItems.length) return '';

    const itemsHtml = groupItems.map((p, i) => {
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

    return `<section class="proto-nav-section">
      <p class="nav-section-label">${groupName}</p>
      ${itemsHtml}
    </section>`;
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

function getGroupCount(groupName) {
  return PROTOTYPES.filter(proto => proto.category === groupName).length;
}

const GROUP_PRIMARY = {
  MoSpark: 'orchestrator',
  Widget: 'financial',
  Platform: 'momo-services',
};

function buildHomeHero() {
  return `
    <section class="home-hero">
      <div class="home-hero-copy">
        <span class="home-kicker">Prototype home</span>
        <h1>Trang chủ prototype cho đội Dev</h1>
        <p>
          Đây là trang điều hướng nội bộ. Chọn một nhóm để mở demo tương ứng, không phải landing
          content hay page kể chuyện.
        </p>
        <div class="home-highlights">
          <div>
            <strong>3</strong>
            <span>project groups</span>
          </div>
          <div>
            <strong>${PROTOTYPES.length}</strong>
            <span>prototype surfaces</span>
          </div>
          <div>
            <strong>1</strong>
            <span>shared shell</span>
          </div>
        </div>
      </div>

      <div class="home-group-grid">
        ${GROUP_ORDER.map(groupName => {
          const info = GROUP_SUMMARY[groupName];
          const count = getGroupCount(groupName);
          const primaryId = GROUP_PRIMARY[groupName];
          return `
            <article class="home-group-card">
              <div class="home-group-card-top">
                <span>${info.eyebrow}</span>
                <b>${count} project${count > 1 ? 's' : ''}</b>
              </div>
              <h2>${info.title}</h2>
              <p>${info.description}</p>
              <small>${info.examples}</small>
              <button class="home-open-btn" type="button" data-open-proto="${primaryId}">Open ${info.eyebrow}</button>
            </article>
          `;
        }).join('')}
      </div>
    </section>
  `;
}

function buildHomeView() {
  return `
    <div class="ws-topbar ws-topbar-home">
      <div class="ws-breadcrumb">
        <button class="menu-toggle" id="menuToggle">☰</button>
        <span class="ws-cat-tag ws-cat-home">Home</span>
        <span class="ws-bc-sep">/</span>
        <span class="ws-bc-cur">Project groups</span>
      </div>
      <div class="ws-topbar-right">
        <span class="home-hint">Chọn nhóm để mở demo window</span>
      </div>
    </div>

    ${buildHomeHero()}
  `;
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

  if (!activeProtoId) {
    ws.innerHTML = buildHomeView();
    wireHome(ws);
    return;
  }

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
  const preview = previewSrc(proto.src);

  return `
  <div class="ws-topbar">
    <div class="ws-breadcrumb">
      <button class="menu-toggle" id="menuToggle">☰</button>
      <button class="ws-back-btn" id="backHomeBtn">← Home</button>
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
        <iframe id="demoFrame" src="${preview}" data-src="${proto.src}" title="${proto.name}"></iframe>
      </div>
    </div>
  </div>`;
}

function buildToolView(proto, tool) {
  const tc  = CAT_COLOR[tool.category]  || {};
  const src = tool.src || `demos/financial.html#${tool.id}`;
  const preview = previewSrc(src);

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
        <iframe id="demoFrame" src="${preview}" data-src="${src}" title="${tool.name}"></iframe>
      </div>
    </div>
  </div>`;
}

function wireWs(ws, proto, tool) {
  // Reload
  const rb = ws.querySelector('#reloadBtn');
  if (rb) rb.addEventListener('click', () => {
    const f = ws.querySelector('#demoFrame');
    if (f) f.src = previewSrc(f.dataset.src || f.src);
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

  const homeBtn = ws.querySelector('#backHomeBtn');
  if (homeBtn) homeBtn.addEventListener('click', () => {
    activeProtoId = null;
    activeToolId = null;
    renderNav();
    renderWorkspace();
    closeSidebar();
  });
}

function previewSrc(src) {
  const [path, hash = ''] = src.split('#');
  const separator = path.includes('?') ? '&' : '?';
  return `${path}${separator}_preview=${Date.now()}${hash ? `#${hash}` : ''}`;
}

function wireHome(ws) {
  ws.querySelectorAll('[data-open-proto]').forEach(btn => {
    btn.addEventListener('click', () => selectProto(btn.dataset.openProto));
  });

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
