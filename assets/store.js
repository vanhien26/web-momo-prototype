// ─── Prototypes registry ──────────────────────────────────────────────────────

const PROTOTYPES = [
  {
    id: 'mini-web-overview',
    name: 'Mini Web Overview',
    category: 'MiniWeb',
    maturity: 'Inventory',
    description: 'Danh mục toàn bộ MiniWeb trên momo.vn, tổng hợp theo Division, Use Case, Product và Page Type.',
    view: 'mini-web-overview',
  },
  {
    id: 'financial',
    name: 'Financial Utilities',
    category: 'Widget',
    navigationOnly: true,
    maturity: 'Interactive',
    description: 'Biến search intent tài chính thành trải nghiệm tính toán hữu ích, dẫn người dùng đến hành động phù hợp trong hệ sinh thái MoMo.',
    jtbd: 'Tính nhanh, hiểu rõ, hành động ngay',
    northStar: 'Qualified tool completion',
    loop: 'Search → Utility → App',
    hypothesis: 'Interactive utility tạo information gain tốt hơn content thuần và thu tín hiệu intent có giá trị cho funnel Web-to-App.',
    value: 'Mở rộng organic acquisition cho Credit, Insurance và Personal Finance với asset có khả năng tái sử dụng.',
    gate: 'Đo completion rate, CTA CTR, Web-to-App conversion và chất lượng traffic theo từng utility.',
    src: 'demos/financial.html',
    address: 'web-momo-prototype.vercel.app/financial-utilities',
    tools: [
      { id: 'vay-nhanh',       name: 'Vay Nhanh',          category: 'Credit',     description: 'Ước tính số tiền trả hằng tháng theo số tiền vay, lãi suất và kỳ hạn.',               jtbd: 'Biết trước gánh nặng tài chính trước khi vay' },
      { id: 'tra-gop',         name: 'Trả Góp Ví Trả Sau', category: 'Credit',     description: 'Ước tính số tiền thanh toán hằng kỳ khi chuyển đổi trả góp dư nợ hoặc giao dịch qua Ví Trả Sau MoMo.', jtbd: 'Biết số tiền gốc và phí trả mỗi tháng qua Ví Trả Sau để cân đối chi tiêu.' },
      { id: 'cic-score',       name: 'CIC Score',          category: 'Credit',     description: 'Mô phỏng điểm tín dụng CIC theo các yếu tố thanh toán, sử dụng hạn mức và lịch sử.', jtbd: 'Biết điểm CIC hiện tại và cách cải thiện' },
      { id: 'cic-stimulator',  name: 'CIC Stimulator',     category: 'Credit',     description: 'Mô phỏng tác động của các hành động tài chính đến điểm CIC theo thời gian.',        jtbd: 'Lên kế hoạch cải thiện điểm CIC trước khi vay' },
      { id: 'bao-hiem-o-to',   name: 'Bảo Hiểm Ô Tô',     category: 'Insurance',  description: 'Mô phỏng phí bảo hiểm ô tô theo giá trị xe và tỷ lệ phí.',                          jtbd: 'Ước tính phí bảo hiểm trước khi quyết định mua' },
      { id: 'bhxh',            name: 'BHXH',               category: 'Insurance',  description: 'Mô phỏng tổng đóng BHXH dựa trên mức lương và số tháng tham gia.',                  jtbd: 'Hiểu quyền lợi BHXH để quyết định đóng tự nguyện' },
      { id: 'luong-huu',       name: 'Lương Hưu',          category: 'Insurance',  description: 'Ước tính lương hưu hàng tháng theo số năm đóng BHXH, giới tính và mức bình quân lương.', jtbd: 'Biết trước lương hưu để lập kế hoạch nghỉ hưu' },
      { id: 'bhxh-1-lan',      name: 'BHXH 1 Lần',         category: 'Insurance',  description: 'Ước tính số tiền nhận BHXH một lần theo Điều 70 Luật BHXH 2024: 1,5 tháng MBQTL/năm trước 2014, 2 tháng/năm từ 2014, auto trượt giá CPI.', jtbd: 'Cân nhắc rút BHXH một lần hay giữ tiếp để lương hưu' },
      { id: 'tiet-kiem',       name: 'Tiết Kiệm',          category: 'Savings',    description: 'Tính số tiền nhận được khi gửi tiết kiệm theo kỳ hạn và lãi suất.',                 jtbd: 'Biết trước lợi tức để chọn kỳ hạn tiết kiệm phù hợp' },
      { id: 'nuoi-con',        name: 'Kế Hoạch Nuôi Con',  category: 'Savings',    description: 'Ước tính chi phí nuôi dạy con đến 18 tuổi và số tiền cần tích lũy hằng tháng cho quỹ đại học.', jtbd: 'Biết trước chi phí nuôi con để lập kế hoạch tài chính gia đình vững vàng.' },
      { id: 'lai-suat',        name: 'Lãi Suất Ngân Hàng', category: 'Savings',    description: 'So sánh lãi suất tiền gửi từ 6 ngân hàng lớn, tính lợi tức thực nhận theo số tiền và kỳ hạn.', jtbd: 'Chọn ngân hàng và kỳ hạn cho lãi suất tốt nhất' },
      { id: 'thue-tncn',       name: 'Thuế TNCN',          category: 'Tax',        description: 'Ước tính thuế thu nhập cá nhân theo biểu lũy tiến 5 bậc và giảm trừ gia cảnh 15,5tr (Luật 2025).', jtbd: 'Tính nhanh thuế TNCN để lập kế hoạch tài chính' },
      { id: 'quyet-toan-tncn', name: 'Quyết Toán TNCN',    category: 'Tax',        description: 'Quyết toán thuế TNCN cuối năm: chênh lệch giữa thuế cả năm và thuế đã tạm đóng, biết phải nộp thêm hay được hoàn trước 30/04.', jtbd: 'Biết phải nộp thêm hay được hoàn cuối kỳ' },
      { id: 'thue-tndn-sme',   name: 'Thuế TNDN SME',      category: 'Tax',        description: 'Tính thuế TNDN cho SME theo Luật 67/2025/QH15: 15% (DT ≤ 3 tỷ) / 17% (3-50 tỷ) / 20% (>50 tỷ), miễn 3 năm cho DN mới.', jtbd: 'Dự trù thuế TNDN năm cho doanh nghiệp SME' },
      { id: 'chung-chi-quy',   name: 'Chứng Chỉ Quỹ',     category: 'Investment', description: 'Mô phỏng giá trị đầu tư định kỳ vào chứng chỉ quỹ theo lợi suất giả định.',        jtbd: 'Hiểu tốc độ tăng trưởng đầu tư định kỳ trước khi bắt đầu' },
      { id: 'gold',            name: 'Giá Vàng',           category: 'Investment', description: 'So sánh giá mua bán vàng SJC/PNJ, tính sức mua và hòa vốn theo kịch bản.',          jtbd: 'Đánh giá có nên mua vàng tích lũy không' },
      { id: 'stock',           name: 'Chứng Khoán',        category: 'Investment', description: 'Mô phỏng đặt lệnh mua bán cổ phiếu HOSE bằng tiền ảo, theo dõi danh mục.',         jtbd: 'Làm quen thị trường chứng khoán không rủi ro' },
      { id: 'ty-gia',          name: 'Tỷ Giá',             category: 'FX',         description: 'Converter A/B: chọn cặp tiền, đảo chiều, xem chart, chênh lệch bank-mid, tỷ giá hiệu dụng và số nhận ròng.', jtbd: 'Biết đổi từ tiền nào sang tiền nào, rate đang biến động ra sao và nhận ròng bao nhiêu' },
      { id: 'fx-compare',      name: 'So Sánh Tỷ Giá NH',  category: 'FX',         description: 'So sánh tỷ giá 7 ngân hàng + 2 venue chợ tự do cho 6 ngoại tệ, highlight rate tốt nhất / kém nhất, sort theo best rate.', jtbd: 'Chọn ngân hàng đổi tiền có rate tốt nhất' },
      { id: 'travel-budget',   name: 'Budget Du Lịch',     category: 'FX',         description: 'Lập ngân sách chuyến đi cho 10 điểm đến × 3 tier (budget/mid/luxury) × N ngày, breakdown theo lưu trú / ăn / di chuyển / hoạt động / dự phòng.', jtbd: 'Biết cần mang bao nhiêu tiền cho chuyến đi' },
      { id: 'quy-du-phong',    name: 'Quỹ Dự Phòng',      category: 'Planning',   description: 'Tính quy mô quỹ khẩn cấp cần có theo chi tiêu và số tháng an toàn mục tiêu.',       jtbd: 'Xác định đúng mức quỹ dự phòng cần tích lũy' },
      { id: 'tu-do-tai-chinh', name: 'Tự Do Tài Chính',   category: 'Planning',   description: 'Lập kế hoạch FIRE với lạm phát, lợi suất đầu tư, tỷ lệ rút vốn an toàn và dòng tiền góp hàng tháng.', jtbd: 'Biết mình cần bao nhiêu, tốc độ góp có đủ không và thiếu ở đâu' },
      { id: 'dam-cuoi',        name: 'Kế Hoạch Đám Cưới', category: 'Planning',   description: 'Lập ngân sách cưới theo số khách, bàn tiệc, chi phí cố định, tiền mừng dự kiến, dự phòng và quỹ sau cưới.', jtbd: 'Biết cần chuẩn bị bao nhiêu tiền mặt để cưới xong không hụt dòng tiền' },
      { id: 'hoc-phi',         name: 'Học Phí Tương Lai',  category: 'Planning',   description: 'Ước tính học phí thực tế theo lạm phát và tính số tiền cần chuẩn bị từ hôm nay.',      jtbd: 'Tính trước chi phí học phí để chuẩn bị đủ vốn' },
    ],
  },
  {
    id: 'esim-du-lich',
    name: 'eSIM Du Lịch',
    category: 'Platform',
    ownerGroup: 'Cell Team',
    maturity: 'Interactive',
    description: 'Trip-first commerce flow giúp user chọn điểm đến, thời gian chuyến đi, gói data và kiểm tra thiết bị trước khi tiếp tục mua eSIM trên MoMo.',
    jtbd: 'Có mạng ngay khi hạ cánh mà không phải tìm SIM tại điểm đến',
    northStar: 'Qualified eSIM checkout rate',
    loop: 'Destination → Trip → Plan → Device check → Checkout',
    hypothesis: 'Đề xuất gói theo chuyến đi và kiểm tra tương thích trước checkout sẽ giảm sai gói, giảm lỗi kích hoạt và tăng tỷ lệ mua hoàn tất.',
    value: 'Biến trang thông tin eSIM thành acquisition surface có intent rõ, thu tín hiệu điểm đến và đưa user sang giao dịch trong ứng dụng MoMo.',
    gate: 'Đo destination selection, plan selection, compatibility check, checkout intent, activation support và purchase completion.',
    src: 'demos/esim-du-lich.html',
    address: 'web-momo-prototype.vercel.app/esim-du-lich',
    tools: [
      {id:'destination-detail',name:'Destination Detail',category:'Child Page',description:'Một template trang con dùng query parameter để render quốc gia hoặc khu vực đã chọn.',jtbd:'Chọn gói, kiểm tra thiết bị và hiểu cách kích hoạt tại điểm đến',src:'demos/esim/destination.html?destination=thailand',address:'web-momo-prototype.vercel.app/esim/destination?destination=thailand'},
    ],
  },
  {
    id: 'merchant',
    name: 'Merchant',
    category: 'Platform',
    ownerGroup: 'Web Platform',
    maturity: 'Hub',
    description: 'Hub Merchant của MoMo - cửa hàng chấp nhận Ví Trả Sau và voucher. Listing theo khu vực kèm bản đồ (Airbnb/Groupon style), kết nối tới Merchant Discovery (card stack swipe) và Merchant Detail (trang chi tiết). User vào Hub thấy nhanh quán quanh đây, deep-link xuống sub-page khi cần khám phá hoặc xem chi tiết.',
    jtbd: 'Tìm merchant phù hợp trong khu vực và dùng dịch vụ ngay',
    northStar: 'Voucher redeem rate per Hub session',
    loop: 'Browse hub map → Discovery/Detail → Redeem voucher → Pay',
    hypothesis: 'Hub gom 3 pattern khám phá (map listing, swipe stack, detail) vào một surface giúp user chuyển intent linh hoạt theo bối cảnh sử dụng, tăng coverage so với 3 trang đứng riêng.',
    value: 'Single hub cho toàn bộ Merchant journey: từ duyệt khu vực có voucher → swipe khám phá thêm → đọc detail → đi tới quán + thanh toán + redeem.',
    gate: 'Đo: Hub session length, sub-page CTR (Discovery + Detail), card→detail rate, voucher view-to-redeem rate, pin click vs swipe.',
    src: 'demos/merchants.html',
    address: 'web-momo-prototype.vercel.app/merchant',
    tools: [
      {
        id: 'merchant-discovery',
        name: 'Merchant Discovery',
        category: 'Sub-page',
        description: 'Card stack mobile-first để swipe Merchant theo nhu cầu: bỏ qua hoặc lưu lựa chọn, xem nhanh rating, giá, địa chỉ, Ví Trả Sau và Sponsored Card từ Ads Placement.',
        jtbd: 'Lưu Merchant phù hợp mà không phải đọc danh sách dài',
        src: 'demos/merchant-discovery.html',
        address: 'web-momo-prototype.vercel.app/merchant/discovery',
      },
      {
        id: 'merchant-detail',
        name: 'Merchant Detail',
        category: 'Sub-page',
        description: 'Trang chi tiết một merchant (ví dụ Tiệm Mì Chú Cao): storefront signboard, menu, AI Summary từ Google Reviews, MoMo Review, FAQ, gợi ý merchant tương tự, CTA thanh toán.',
        jtbd: 'Đánh giá merchant trước khi đến và thanh toán bằng MoMo',
        src: 'demos/merchant.html',
        address: 'web-momo-prototype.vercel.app/merchant/detail',
      },
    ],
  },
  {
    id: 'cinema-film-detail',
    name: 'Cinema Film Detail',
    category: 'Platform',
    ownerGroup: 'Cell Team',
    maturity: 'Campaign Page',
    description: 'Film Detail page cho Summer Campaign 2026 — tích hợp Hero campaign, Game Mở Khoá (Mua vé → Check-in → Review), Bundle Banner, Thông tin phim, Lịch chiếu và Đánh giá.',
    jtbd: 'Mua vé và tham gia campaign ngay từ trang phim',
    northStar: 'Game mission completion + ticket purchase',
    loop: 'Hero → Game block → Buy ticket → Check-in → Review',
    hypothesis: 'Tích hợp campaign gamification trực tiếp vào film detail tăng mission completion rate so với popup/banner riêng lẻ.',
    value: 'Tạo luồng campaign mới cho Cinema: từ organic traffic vào film detail → mua vé → check-in → review → cashback.',
    gate: 'Đo mission completion rate (1→2→3), ticket CTA CTR, check-in activation và review submission.',
    src: 'demos/cinema-film-detail.html',
    address: 'web-momo-prototype.vercel.app/cinema/nghi-he-so-nghi-huu',
  },
  {
    id: 'ads-manager',
    name: 'Ads & Widget Manager',
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
    address: 'web-momo-prototype.vercel.app/ads-manager',
  },
  {
    id: 'chatbot',
    name: 'MoMo Project Assistant',
    category: 'MoSpark',
    maturity: 'Interactive',
    description: 'Hệ thống chatbot nhúng với 6 template UX, hỗ trợ Bubble, Popup, Standard và Proactive; trả lời từ project-scoped RAG rồi chuyển Typebot cho flow có trạng thái.',
    jtbd: 'Chọn đúng kiểu trợ lý cho từng Mini Web và hoàn thành nhu cầu ngay trong context',
    northStar: 'Assisted task success rate',
    loop: 'Choose template → Ask / Guide → RAG / Typebot → Complete CTA',
    hypothesis: 'Template theo JTBD giúp mỗi project dùng đúng interaction pattern thay vì ép mọi nhu cầu vào một chat bubble tổng quát.',
    value: 'Một embed system dùng lại cho nhiều Mini Web, nhưng tách template UX, knowledge scope, analytics và guardrail theo từng project.',
    gate: 'Đo template engagement, grounded answer rate, citation coverage, Typebot completion, assisted CTA và handoff rate.',
    src: 'demos/chatbot.html',
    address: 'web-momo-prototype.vercel.app/project-assistant',
  },
  {
    id: 'seo-geo-project',
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
    src: 'demos/seo-geo-project.html',
    address: 'web-momo-prototype.vercel.app/seo-geo-project',
  },
  {
    id: 'universal-search',
    name: 'Universal Search',
    category: 'Platform',
    ownerGroup: 'Web Platform',
    maturity: 'Interactive',
    description: 'Google-style federated search cho toàn bộ domain MoMo: dịch vụ, bài viết, merchant và công cụ tài chính trong một trang — với AI Answer box, content-type tabs và related queries.',
    jtbd: 'Tìm bất kỳ thứ gì trên MoMo mà không cần biết nó nằm ở đâu',
    northStar: 'Search-to-action conversion rate',
    loop: 'Query → Federated results → Action',
    hypothesis: 'Một điểm tìm kiếm duy nhất cho tất cả nội dung MoMo giảm friction discovery và tăng cross-sell giữa các use case.',
    value: 'Bề mặt entry point cho mọi intent — thay thế navigation phức tạp bằng một search bar duy nhất với kết quả multi-entity.',
    gate: 'Đo search-to-click, tab filter usage, AI box engagement, related query CTR và cross-entity discovery rate.',
    src: 'demos/universal-search.html',
    address: 'web-momo-prototype.vercel.app/search',
  },
  {
    id: 'worldcup',
    name: 'World Cup 2026 Predictor',
    category: 'Other',
    maturity: 'Data experience',
    description: 'Trải nghiệm dữ liệu thể thao dễ hiểu cho đại chúng, dùng sự kiện mùa vụ để tạo traffic, repeat visit và bề mặt activation.',
    jtbd: 'So sánh cơ hội đội tuyển yêu thích',
    northStar: 'Team analysis engagement',
    loop: 'Event → Explore → Return',
    hypothesis: 'Data storytelling trực quan giúp MoMo sở hữu seasonal search demand và tạo lý do quay lại trong suốt giải đấu.',
    value: 'Tạo engagement surface có khả năng gắn prediction game, voucher, mini app và campaign activation.',
    gate: 'Đo team views, comparison depth, returning users và campaign CTA conversion.',
    src: 'demos/world-cup.html',
    address: 'web-momo-prototype.vercel.app/world-cup-2026',
  },
  {
    id: 'payments',
    name: 'Billpay',
    category: 'Widget',
    maturity: 'Interactive',
    description: 'Hub thanh toán đa dịch vụ kiểu Paytm: category tabs ngang (Điện thoại, Điện, Nước, Internet, Metro HCM), mỗi tab switch form/flow tương ứng - tra cứu hóa đơn, nạp tiền trả trước, và mua vé metro với QR output.',
    jtbd: 'Thanh toán đúng dịch vụ, đúng nhà cung cấp, trong một surface duy nhất',
    northStar: 'Service payment completion',
    loop: 'Select category → Input → Lookup/Buy → Pay',
    hypothesis: 'Hub đa dịch vụ với category nav giảm context switch so với từng mini-app riêng lẻ, tăng cross-service discovery và repeat usage.',
    value: 'Một surface phủ toàn bộ utility payments + transit - có thể mở rộng thêm category mà không cần page mới.',
    gate: 'Đo category switch rate, lookup success, pay CTA và Metro ticket purchase completion.',
    src: 'demos/payments.html',
    address: 'web-momo-prototype.vercel.app/payments',
  },
  {
    id: 'scam-check',
    name: 'Scam Check',
    category: 'Widget',
    maturity: 'Safety Hub',
    description: 'An Toàn MoMo - chống lừa đảo end-to-end: (1) Tra cứu rủi ro SĐT/STK/link/QR trước khi chuyển, (2) Báo cáo lừa đảo ẩn danh 3 bước, (3) Cơ chế 4 bước xử lý phối hợp ngân hàng & cơ quan chức năng, (4) Impact stats cộng đồng (1.245.678+ user bảo vệ, 320 tỷ chặn), (5) Feature bảo vệ bền vững (sinh trắc học, AI 24/7, cảnh báo số xấu).',
    jtbd: 'Phòng và chống lừa đảo: kiểm tra trước, báo cáo sau, bảo vệ cộng đồng',
    northStar: 'Anonymous report + risk-check completion combined',
    loop: 'Trigger → Lookup OR Report → Community alert → App download',
    hypothesis: 'Kết hợp lookup (defense) + report (community impact) trên cùng surface tăng cả conversion checking và submission rate so với tách 2 page.',
    value: 'Single safety hub: bảo vệ user trước transaction, thu fraud signals từ cộng đồng, cross-sell tải app cho lớp bảo mật sinh trắc/AI.',
    gate: 'Đo: lookup completion, scenario CTR, report 3-step funnel, abort vs submit ratio, app download CTR sau impact stats.',
    src: 'demos/scam-check.html',
    address: 'web-momo-prototype.vercel.app/scam-check',
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
    address: 'web-momo-prototype.vercel.app/mospark-blog',
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
    address: 'web-momo-prototype.vercel.app/mospark-blog/phạt-nguội',
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
    address: 'web-momo-prototype.vercel.app/genai-orchestrator',
  },
  {
    id: 'genai-image',
    name: 'GenAI Image Studio',
    category: 'MoSpark',
    maturity: 'Interactive',
    description: 'Tạo key visual theo Page Type và template đã khóa size, vùng an toàn, logo, pattern, color token và responsive crop. Demo chi tiết dùng Landing Page Hero Banner 1920 x 600.',
    jtbd: 'Tạo ảnh campaign đúng brand và lắp được ngay vào Page Builder mà không phải sửa layout thủ công',
    northStar: 'Template compliant asset approval rate',
    loop: 'Page Type → Template Rules → Creative Brief → Generate → Quality Gate',
    hypothesis: 'Tách AI key visual khỏi lớp copy và brand cố định sẽ giảm lỗi logo, text, safe zone và rút ngắn vòng review giữa Content, Design và Dev.',
    value: 'Một image pipeline dùng lại cho nhiều Page Type, có template contract, mask, brand reference, variant scoring và audit trail trước khi đưa vào Asset Library.',
    gate: 'Đo generation completion, Brand Fit, rule pass rate, số vòng regenerate, approval time và tỷ lệ asset được dùng trong Page Builder.',
    src: 'demos/genai-image.html',
    address: 'web-momo-prototype.vercel.app/genai-image-studio',
  },
  {
    id: 'seo-geo-dashboard',
    name: 'SEO/GEO Dashboard',
    category: 'MoSpark',
    maturity: 'Interactive',
    description: 'Dashboard performance theo từng Use Case: GA4 (Pageviews, Users, Click to App), GSC (Position, Impressions, Keywords), BigQuery (Open in App, MAU, MEU) — với chart trend 6 tháng và funnel Web-to-App.',
    jtbd: 'Xem nhanh health của từng use case theo 3 nguồn dữ liệu trong một surface duy nhất',
    northStar: 'Use case coverage review rate',
    loop: 'Select use case → GA4 trend → GSC keywords → BQ funnel',
    hypothesis: 'Tập hợp GA4 + GSC + BigQuery trong một dashboard theo use case giúp team SEO audit nhanh hơn và phát hiện gap không cần mở 3 tool khác nhau.',
    value: 'Single-pane-of-glass cho Out-App Traffic team: xem performance organic, ranking keyword và funnel app theo từng product trong một lần review.',
    gate: 'Đo use case drill-down rate, panel engagement (GA4/GSC/BQ), keyword table interaction và funnel step CTR.',
    src: 'demos/seo-geo-dashboard.html',
    address: 'web-momo-prototype.vercel.app/seo-geo-dashboard',
  },
  {
    id: 'agentic-hub',
    name: 'Agentic Hub',
    category: 'MoSpark',
    maturity: 'Interactive',
    description: 'Multi-agent pipeline nâng cấp: per-agent model selection (Haiku/Sonnet/Opus theo complexity và cost), vector RAG knowledge injection, cost/token tracking theo thời gian thực và Inspector tab breakdown.',
    jtbd: 'Demo hệ thống agentic thực tế — chọn đúng model cho đúng tác vụ, kiểm soát cost',
    northStar: 'Pipeline run completion + model selection engagement',
    loop: 'Select preset → Assign models → Run pipeline → Inspect cost',
    hypothesis: 'Per-agent model selection và RAG chunk visibility giúp team hiểu trade-off cost/quality trong agentic system — nền tảng quyết định build production.',
    value: 'Bề mặt pitch cho AI Content Platform v2 với cost-awareness; làm rõ spec cho Trọng về model routing và RAG injection per agent.',
    gate: 'Đo preset selections, model override rate, Inspector tab views, pipeline completions và session cost distribution theo tier.',
    src: 'demos/agentic-hub.html',
    address: 'web-momo-prototype.vercel.app/agentic-hub',
  },
  {
    id: 'phat-nguoi-ha-noi',
    name: 'Phạt Nguội Hà Nội',
    category: 'Platform',
    ownerGroup: 'Cell Team',
    maturity: 'pSEO',
    description: 'Trang pSEO Tra cứu Phạt Nguội theo Tỉnh/Thành — demo Hà Nội: Hero H1 + Lookup biển số, kết quả CSGT có/không vi phạm, Đề xuất tỉnh/thành + dịch vụ liên quan, Content SEO dạng card (mức phạt, quy trình, timeline, FAQ).',
    jtbd: 'Tra cứu vi phạm giao thông theo biển số xe tại Hà Nội, biết mức phạt và quy trình xử lý',
    northStar: 'Lookup completion rate',
    loop: 'Search → Lookup → Result → Related CTA',
    hypothesis: 'Trang pSEO theo tỉnh/thành tạo organic entry point riêng cho từng địa phương — mỗi trang là một keyword cluster với lookup tool + content SEO địa phương hóa.',
    value: 'Template nhân rộng cho 63 tỉnh/thành: mỗi URL /phat-nguoi/{tinh} là một pSEO page độc lập, tăng SoV phạt nguội và cross-sell dịch vụ liên quan.',
    gate: 'Đo lookup completion, result engagement (found/not-found rate), related service CTR, CTA conversion và Web-to-App từ pSEO page.',
    src: 'demos/phat-nguoi-ha-noi.html',
    address: 'web-momo-prototype.vercel.app/phat-nguoi/ha-noi',
  },
];

// ─── Color maps ───────────────────────────────────────────────────────────────

const CAT_COLOR = {
  'MoSpark':    { bg: '#fff0f7', text: '#a50064' },
  'MiniWeb':    { bg: '#eef2ff', text: '#4338ca' },
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
  'Other':      { bg: '#f1f5f9', text: '#475569' },
  'Destination':{ bg: '#fff0f7', text: '#a50064' },
  'Child Page':  { bg: '#fff0f7', text: '#a50064' },
};

const GROUP_LABEL = {
  MoSpark: 'MoSpark Platform',
  MiniWeb: 'Mini Web Overview',
  Widget: 'Widget Store',
  Platform: 'PLG Project',
  Other: 'Other',
};

function displayGroupName(groupName) {
  return GROUP_LABEL[groupName] || groupName;
}

const GROUP_ORDER = ['MiniWeb', 'MoSpark', 'Widget', 'Platform', 'Other'];
const PLG_OWNER_ORDER = ['Cell Team', 'Web Platform'];
const MOSPARK_CLUSTER_ORDER = ['GenAI', 'Modules'];
const MOSPARK_CLUSTER_ITEMS = {
  GenAI: ['orchestrator', 'genai-image', 'agentic-hub'],
  Modules: ['seo-geo-dashboard', 'seo-geo-project', 'chatbot', 'ads-manager', 'blog-category', 'blog'],
};

function getMoSparkCluster(protoId) {
  return MOSPARK_CLUSTER_ORDER.find(cluster => MOSPARK_CLUSTER_ITEMS[cluster].includes(protoId)) || 'Modules';
}

const GROUP_ITEM_ORDER = {
  MoSpark: ['orchestrator', 'genai-image', 'agentic-hub', 'seo-geo-dashboard', 'seo-geo-project', 'chatbot', 'ads-manager', 'blog-category', 'blog'],
  MiniWeb: ['mini-web-overview'],
  Widget: ['financial', 'payments', 'scam-check'],
  Platform: ['phat-nguoi-ha-noi', 'esim-du-lich', 'cinema-film-detail', 'universal-search', 'merchant'],
  Other: ['worldcup'],
};

const GROUP_SUMMARY = {
  MoSpark: {
    eyebrow: 'MoSpark Platform',
    title: 'MoSpark Platform',
    description: 'Chia thành 2 cụm rõ vai trò: GenAI cung cấp năng lực tạo sinh và orchestration; Modules cung cấp các bề mặt vận hành, tăng trưởng và phân phối trên Web.',
    examples: 'GenAI: Orchestrator · Image Studio · Agentic Hub | Modules: SEO/GEO · Assistant · Ads · Blog',
  },
  MiniWeb: {
    eyebrow: 'Mini Web Overview',
    title: 'Mini Web Overview',
    description: 'Inventory toàn bộ MiniWeb trên momo.vn, có thể lọc theo Division, Use Case và Page Type.',
    examples: '113 MiniWeb thuộc 6 Division và 50 Use Case',
  },
  Widget: {
    eyebrow: 'Widget Store',
    title: 'Widget Store',
    description: 'Nhóm tool và lookup ngắn để Dev implement nhanh, rõ input, output và trạng thái an toàn.',
    examples: 'Financial (18 tools) · Billpay (Điện · Nước · Internet · Metro) · Scam check',
  },
  Other: {
    eyebrow: 'Other',
    title: 'Other',
    description: 'Prototype theo sự kiện mùa vụ hoặc không thuộc nhóm platform, widget hay PLG.',
    examples: 'World Cup 2026 Predictor',
  },
  Platform: {
    eyebrow: 'PLG Project',
    title: 'PLG Project',
    description: 'Cell Team triển khai các use case theo ngành hàng; Web Platform xây các surface dùng chung cho Merchant và Search.',
    examples: 'Cell Team: Phạt Nguội · eSIM · Cinema | Web Platform: Search · Merchant Discovery · Merchant',
  },
};

const MAT_COLOR = {
  'Interactive':    { bg: '#f0fdf4', text: '#15803d' },
  'Interaction':    { bg: '#f0fdf4', text: '#15803d' },
  'Data experience':{ bg: '#eff6ff', text: '#1d4ed8' },
  'Inventory':      { bg: '#eef2ff', text: '#4338ca' },
};

const MINI_WEB_ROWS = Array.isArray(window.MINI_WEB_DATA) ? window.MINI_WEB_DATA : [];
const MINI_WEB_SEARCH_MARKETS = Array.isArray(window.MINI_WEB_SEARCH_MARKETS) ? window.MINI_WEB_SEARCH_MARKETS : [];
const MINI_WEB_VOLUME_BY_URL = new Map();
MINI_WEB_SEARCH_MARKETS.forEach(item => {
  item.urls.forEach(url => MINI_WEB_VOLUME_BY_URL.set(url, { market: item.market, volume: item.volume }));
});
const MINI_WEB_VOLUME_FORMATTER = new Intl.NumberFormat('en-US');

const MOSPARK_SOURCE_URL = 'https://mospark-intro.vercel.app/';
const MOSPARK_LOGO_URL = 'https://static.momocdn.net/app/img/web-platform/logo-mospark-dark.svg';

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

    const renderNavItem = (p, i) => {
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
            <small>${p.navigationOnly ? `${p.tools.length} utilities` : (groupName === 'MoSpark' ? getMoSparkCluster(p.id) : (p.ownerGroup || displayGroupName(p.category)))}</small>
          </span>
          ${p.tools ? `<span class="expand-caret${isExpanded ? ' open' : ''}">›</span>` : ''}
        </button>
        ${toolsHtml}
      </div>`;
    };

    const itemsHtml = groupName === 'Platform'
      ? PLG_OWNER_ORDER.map(owner => {
          const ownerItems = groupItems.filter(item => item.ownerGroup === owner);
          if (!ownerItems.length) return '';
          return `<div class="proto-owner-group">
            <p class="proto-owner-label">${owner}</p>
            ${ownerItems.map(item => renderNavItem(item, groupItems.indexOf(item))).join('')}
          </div>`;
        }).join('')
      : groupName === 'MoSpark'
        ? MOSPARK_CLUSTER_ORDER.map(cluster => {
            const clusterItems = groupItems.filter(item => getMoSparkCluster(item.id) === cluster);
            if (!clusterItems.length) return '';
            return `<div class="proto-owner-group proto-mospark-cluster cluster-${cluster.toLowerCase()}">
              <p class="proto-owner-label">${cluster}</p>
              ${clusterItems.map((item, index) => renderNavItem(item, index)).join('')}
            </div>`;
          }).join('')
        : groupItems.map((item, index) => renderNavItem(item, index)).join('');

    return `<section class="proto-nav-section">
      <p class="nav-section-label">${displayGroupName(groupName)}</p>
      ${itemsHtml}
    </section>`;
  }).join('');

  nav.querySelectorAll('.proto-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const proto = PROTOTYPES.find(p => p.id === id);
      if (proto && proto.tools) {
        if (expanded.has(id)) expanded.delete(id); else expanded.add(id);
        if (proto.navigationOnly) {
          renderNav();
          return;
        }
      }
      selectProto(id);
    });
  });

  nav.querySelectorAll('.tool-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => selectTool(btn.dataset.proto, btn.dataset.tool));
  });
}

function getGroupCount(groupName) {
  if (groupName === 'MiniWeb') return MINI_WEB_ROWS.length;
  return PROTOTYPES.filter(proto => proto.category === groupName).length;
}

function getTotalSurfaceCount() {
  return PROTOTYPES.length - 1 + MINI_WEB_ROWS.length;
}

const GROUP_PRIMARY = {
  MoSpark: 'orchestrator',
  MiniWeb: 'mini-web-overview',
  Widget: 'financial',
  Platform: 'momo-services',
  Other: 'worldcup',
};

const MOSPARK_HOME_CAPABILITIES = [
  {
    title: 'GenAI Image',
    text: 'Sinh key visual theo Page Type và template contract, khóa logo, copy, pattern, safe zone và chỉ mở vùng ảnh cho AI.',
    proto: 'genai-image',
  },
  {
    title: 'GenAI Content',
    text: 'Sản xuất outline, article, FAQ và product embed từ Content Plan đã duyệt, có Business Context và quality gate.',
    proto: 'blog',
  },
  {
    title: 'Ads & Widget',
    text: 'Quản lý Native Widget, Balloon, Inline Banner và product component theo đúng ngữ cảnh trang.',
    proto: 'ads-manager',
  },
  {
    title: 'Landing Page Builder',
    text: 'BU/PM mô tả mục tiêu, chọn template theo use case, preview mobile và publish không phải chờ Dev cho thay đổi thường ngày.',
    proto: 'blog-category',
  },
  {
    title: 'SEO/GEO Project',
    text: 'Quản lý Use Case, Cluster, Keyword Registry, Business Context và performance trên Google Search lẫn AI Search.',
    proto: 'seo-geo-project',
  },
  {
    title: 'Chatbot',
    text: 'Nhúng trợ lý theo project, trả lời từ RAG và chuyển Typebot cho flow có trạng thái.',
    proto: 'chatbot',
  },
];

const MOSPARK_PRODUCTION_STEPS = [
  { icon: '💡', name: 'Ideation', oldTime: '1 week', oldText: 'Brief thủ công', newTime: '2 days', newText: 'AI concept từ market gap' },
  { icon: '🔎', name: 'Research', oldTime: '2 weeks', oldText: 'Keyword rời rạc', newTime: '1 week', newText: 'Inventory và registry' },
  { icon: '✍️', name: 'Production', oldTime: '7 weeks', oldText: 'Viết tay, sửa nhiều vòng', newTime: '2 weeks', newText: 'Outline, draft, FAQ, embed' },
  { icon: '🛡️', name: 'Gate', oldTime: '1 week', oldText: 'Review không nhất quán', newTime: '2 days', newText: 'SEO/GEO score và PM approve' },
  { icon: '🧩', name: 'Widget Sync', oldTime: '2 weeks', oldText: 'Nhờ Dev nhúng CTA', newTime: '3 days', newText: 'Component sẵn để embed' },
  { icon: '📊', name: 'Measure', oldTime: '3 weeks', oldText: 'Pageview rời rạc', newTime: '1 week', newText: 'Web-to-App và transaction' },
];

function buildMoSparkHomeIntro() {
  return `
    <section class="mh-hero">
      <div class="mh-copy">
        <div class="mh-brand-row">
          <img src="${MOSPARK_LOGO_URL}" alt="MoSpark" class="mh-logo" decoding="async">
          <span>Web Growth Platform</span>
        </div>
        <h1>Product Led Growth trên Web MoMo</h1>
        <p>MoSpark giúp BU/PM tự tạo landing, sản xuất nội dung bằng GenAI, nhúng Widget, chạy Ads, bật Chatbot và đo full-funnel từ Web đến giao dịch trong App.</p>
        <div class="mh-actions">
          <button type="button" class="mh-primary" data-open-proto="blog">Mở demo Phạt Nguội</button>
          <button type="button" class="mh-secondary" data-open-proto="seo-geo-project">Xem SEO/GEO Project</button>
        </div>
      </div>
      <div class="mh-stack">
        <div><strong>6</strong><span>capabilities</span></div>
        <div><strong>&lt;1 ngày</strong><span>landing page self-serve</span></div>
        <div><strong>0 ticket</strong><span>cho thay đổi content thường ngày</span></div>
      </div>
    </section>

    <section class="mh-section">
      <div class="mh-section-head">
        <span>Capabilities</span>
        <h2>MoSpark build bằng Widget và Component</h2>
        <p>Homepage vẫn là nơi navigate prototype, nhưng cần cho Dev/PO hiểu platform đang gom những module nào.</p>
      </div>
      <div class="mh-cap-grid">
        ${MOSPARK_HOME_CAPABILITIES.map(cap => `
          <article class="mh-cap-card" data-open-proto="${cap.proto}">
            <h3>${cap.title}</h3>
            <p>${cap.text}</p>
            <button type="button">Open prototype ↗</button>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="mh-section">
      <div class="mh-section-head">
        <span>GenAI Content Production · Phạt Nguội</span>
        <h2>Trước và sau khi có MoSpark</h2>
        <p>Minh họa workflow từ keyword “phạt nguội” đến bài viết có product embed, audio, feedback cuối bài và CTA Web-to-App.</p>
      </div>
      <div class="mh-timeline">
        <div class="mh-timeline-head">
          <b>Without MoSpark</b>
          <strong>Total time: 16 weeks → 5 weeks · 69% faster</strong>
        </div>
        <div class="mh-lane mh-lane-old">
          <div class="mh-lane-label">Cách cũ</div>
          ${MOSPARK_PRODUCTION_STEPS.map(step => `
            <div class="mh-step">
              <i>${step.icon}</i>
              <b>${step.name}</b>
              <strong>${step.oldTime}</strong>
              <span>${step.oldText}</span>
            </div>
          `).join('')}
        </div>
        <div class="mh-lane mh-lane-new">
          <div class="mh-lane-label">Với MoSpark</div>
          ${MOSPARK_PRODUCTION_STEPS.map(step => `
            <div class="mh-step">
              <i>${step.icon}</i>
              <b>${step.name}</b>
              <strong>${step.newTime}</strong>
              <span>${step.newText}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function buildHomeCard(proto) {
  const matCol = MAT_COLOR[proto.maturity] || { bg: '#f1f5f9', text: '#475569' };
  return `<article class="hl-card" data-open-proto="${proto.id}">
    <span class="hl-mat-badge" style="background:${matCol.bg};color:${matCol.text}">${proto.maturity}</span>
    <h3 class="hl-card-name">${proto.name}</h3>
    <button class="hl-open-btn" type="button">${proto.navigationOnly ? `Xem ${proto.tools.length} utilities ↓` : 'Preview ↗'}</button>
  </article>`;
}

function buildHomeGroupCards(groupName, groupItems) {
  if (groupName === 'MoSpark') {
    return `<div class="hl-owner-layout hl-mospark-layout">${MOSPARK_CLUSTER_ORDER.map(cluster => {
      const clusterItems = groupItems.filter(item => getMoSparkCluster(item.id) === cluster);
      if (!clusterItems.length) return '';
      return `<section class="hl-owner-section hl-mospark-cluster cluster-${cluster.toLowerCase()}">
        <div class="hl-owner-heading"><span>${cluster}</span><strong>${clusterItems.length} ${cluster === 'GenAI' ? 'products' : 'modules'}</strong></div>
        <div class="hl-cards">${clusterItems.map(buildHomeCard).join('')}</div>
      </section>`;
    }).join('')}</div>`;
  }
  if (groupName !== 'Platform') {
    return `<div class="hl-cards">${groupItems.map(buildHomeCard).join('')}</div>`;
  }
  return `<div class="hl-owner-layout">${PLG_OWNER_ORDER.map(owner => {
    const ownerItems = groupItems.filter(item => item.ownerGroup === owner);
    if (!ownerItems.length) return '';
    return `<section class="hl-owner-section">
      <div class="hl-owner-heading"><span>${owner}</span><strong>${ownerItems.length} projects</strong></div>
      <div class="hl-cards">${ownerItems.map(buildHomeCard).join('')}</div>
    </section>`;
  }).join('')}</div>`;
}

function buildHomeHero() {
  return `
    <div class="hl-page-wrap">
      <div class="hl-page-header">
        <div class="hl-page-header-left">
          <div class="hl-brand-line">
            <img src="${MOSPARK_LOGO_URL}" alt="MoSpark" class="hl-mospark-logo" decoding="async">
            <span class="hl-page-kicker">Internal · Prototype Directory</span>
          </div>
          <h1 class="hl-page-title">Prototype Lab</h1>
          <p class="hl-page-sub">${getTotalSurfaceCount()} surfaces · ${GROUP_ORDER.length} groups · MoMo Out-App &amp; Growth Platform</p>
        </div>
        <div class="hl-page-header-stats">
          ${GROUP_ORDER.map(g => {
            const count = getGroupCount(g);
            const col = CAT_COLOR[g] || { bg: '#f1f5f9', text: '#475569' };
            return `<div class="hl-stat-chip" style="background:${col.bg};color:${col.text}">
              <strong>${count}</strong>${displayGroupName(g)}
            </div>`;
          }).join('')}
        </div>
      </div>

      ${GROUP_ORDER.map(groupName => {
        const info = GROUP_SUMMARY[groupName];
        const col = CAT_COLOR[groupName] || { bg: '#f1f5f9', text: '#475569' };
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
        const count = getGroupCount(groupName);

        return `
          <section class="hl-section">
            <div class="hl-sec-head">
              <span class="hl-sec-badge" style="background:${col.bg};color:${col.text}">${displayGroupName(groupName)}</span>
              <h2 class="hl-sec-title">${info.title}</h2>
              <span class="hl-sec-count">${groupName === 'MiniWeb' ? `${count} MiniWeb` : `${count} project${count !== 1 ? 's' : ''}`}</span>
              <p class="hl-sec-desc">${info.description}</p>
            </div>
            ${buildHomeGroupCards(groupName, groupItems)}
          </section>
        `;
      }).join('')}
    </div>
  `;
}

function buildHomeView() {
  return `
    <div class="ws-topbar ws-topbar-home">
      <div class="ws-breadcrumb">
        <button class="menu-toggle" id="menuToggle">☰</button>
        <span class="ws-cat-tag ws-cat-home">Lab</span>
        <span class="ws-bc-sep">/</span>
        <span class="ws-bc-cur">All Prototypes</span>
      </div>
      <div class="ws-topbar-right">
        <span class="hl-total-count">${getTotalSurfaceCount()} surfaces</span>
      </div>
    </div>

    ${buildHomeHero()}
  `;
}

// ─── Selection ────────────────────────────────────────────────────────────────

function selectProto(id) {
  const proto = PROTOTYPES.find(item => item.id === id);
  if (proto?.navigationOnly) {
    expanded.add(id);
    renderNav();
    if (window.matchMedia('(max-width: 720px)').matches) openSidebar();
    return;
  }
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

function escapeMiniWebHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;',
  })[char]);
}

function normalizeMiniWebText(value) {
  return String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLocaleLowerCase('vi');
}

function miniWebOptions(field) {
  return [...new Set(MINI_WEB_ROWS.map(row => row[field]).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, 'vi'))
    .map(value => `<option value="${escapeMiniWebHtml(value)}">${escapeMiniWebHtml(value)}</option>`)
    .join('');
}

function buildMiniWebOverviewView() {
  const divisions = new Set(MINI_WEB_ROWS.map(row => row.Division).filter(Boolean)).size;
  const useCases = new Set(MINI_WEB_ROWS.map(row => row['Use Case']).filter(Boolean)).size;
  const totalVolume = MINI_WEB_SEARCH_MARKETS.reduce((sum, item) => sum + item.volume, 0);

  return `
    <div class="ws-topbar">
      <div class="ws-breadcrumb">
        <button class="menu-toggle" id="menuToggle">☰</button>
        <button class="ws-back-btn" id="backHomeBtn">← Home</button>
        <span class="ws-cat-tag" style="background:#eef2ff;color:#4338ca">Mini Web Overview</span>
      </div>
      <div class="ws-topbar-right">
        <span class="hl-total-count">${MINI_WEB_ROWS.length} MiniWeb</span>
      </div>
    </div>

    <main class="mw-page">
      <header class="mw-header">
        <div>
          <span class="mw-kicker">Web inventory 2026</span>
          <h1>Mini Web Overview</h1>
          <p>Danh mục MiniWeb trên momo.vn được nhập đầy đủ từ file CSV nguồn.</p>
        </div>
        <dl class="mw-stats" aria-label="Thống kê Mini Web">
          <div><dt>MiniWeb</dt><dd>${MINI_WEB_ROWS.length}</dd></div>
          <div><dt>Division</dt><dd>${divisions}</dd></div>
          <div><dt>Use Case</dt><dd>${useCases}</dd></div>
          <div class="mw-total-volume"><dt>Total Volume</dt><dd title="${MINI_WEB_VOLUME_FORMATTER.format(totalVolume)} lượt tìm kiếm mỗi tháng">${MINI_WEB_VOLUME_FORMATTER.format(totalVolume)}</dd></div>
        </dl>
      </header>

      <section class="mw-panel" aria-labelledby="miniWebTableTitle">
        <div class="mw-filter-bar">
          <label class="mw-search">
            <span>Tìm MiniWeb</span>
            <input id="miniWebSearch" type="search" placeholder="Tên dịch vụ, product hoặc URL" autocomplete="off">
          </label>
          <label>
            <span>Division</span>
            <select id="miniWebDivision"><option value="">Tất cả Division</option>${miniWebOptions('Division')}</select>
          </label>
          <label>
            <span>Use Case</span>
            <select id="miniWebUseCase"><option value="">Tất cả Use Case</option>${miniWebOptions('Use Case')}</select>
          </label>
          <label>
            <span>Page Type</span>
            <select id="miniWebPageType"><option value="">Tất cả Page Type</option>${miniWebOptions('Page Type')}</select>
          </label>
          <button class="mw-clear" id="miniWebClear" type="button">Xóa filter</button>
        </div>

        <div class="mw-result-bar">
          <h2 id="miniWebTableTitle">Danh sách MiniWeb</h2>
          <p id="miniWebResultCount" aria-live="polite"></p>
        </div>

        <div class="mw-table-wrap">
          <table class="mw-table">
            <thead>
              <tr>
                <th scope="col">Division</th>
                <th scope="col">Use Case</th>
                <th scope="col">Product</th>
                <th scope="col">Service Name</th>
                <th scope="col">URL</th>
                <th scope="col">Page Type</th>
                <th scope="col">Volume/tháng</th>
              </tr>
            </thead>
            <tbody id="miniWebRows"></tbody>
          </table>
        </div>
      </section>
    </main>
  `;
}

function wireMiniWebOverview(ws) {
  const search = ws.querySelector('#miniWebSearch');
  const division = ws.querySelector('#miniWebDivision');
  const useCase = ws.querySelector('#miniWebUseCase');
  const pageType = ws.querySelector('#miniWebPageType');
  const rowsTarget = ws.querySelector('#miniWebRows');
  const resultCount = ws.querySelector('#miniWebResultCount');
  let filterFrame = null;

  const renderRows = () => {
    const query = normalizeMiniWebText(search.value.trim());
    const filtered = MINI_WEB_ROWS.filter(row => {
      const volumeInfo = MINI_WEB_VOLUME_BY_URL.get(row.URL);
      const matchesQuery = !query || normalizeMiniWebText(`${Object.values(row).join(' ')} ${volumeInfo?.market || ''}`).includes(query);
      return matchesQuery
        && (!division.value || row.Division === division.value)
        && (!useCase.value || row['Use Case'] === useCase.value)
        && (!pageType.value || row['Page Type'] === pageType.value);
    });

    resultCount.textContent = `Hiển thị ${filtered.length} / ${MINI_WEB_ROWS.length}`;
    rowsTarget.innerHTML = filtered.length ? filtered.map(row => {
      const url = String(row.URL || '');
      const safeHref = /^https?:\/\//i.test(url) ? escapeMiniWebHtml(url) : '#';
      const displayUrl = escapeMiniWebHtml(url.replace(/^https?:\/\//i, ''));
      const volumeInfo = MINI_WEB_VOLUME_BY_URL.get(url);
      const volumeCell = volumeInfo
        ? `<span class="mw-volume"><strong>${MINI_WEB_VOLUME_FORMATTER.format(volumeInfo.volume)}</strong><small>${escapeMiniWebHtml(volumeInfo.market)}</small></span>`
        : '<span class="mw-volume-pending">Đang cập nhật</span>';
      return `<tr>
        <td><span class="mw-division">${escapeMiniWebHtml(row.Division)}</span></td>
        <td>${escapeMiniWebHtml(row['Use Case'])}</td>
        <td>${escapeMiniWebHtml(row.Product)}</td>
        <td><strong>${escapeMiniWebHtml(row['Service Name'])}</strong></td>
        <td><a class="mw-url" href="${safeHref}" target="_blank" rel="noopener" title="${escapeMiniWebHtml(url)}">${displayUrl}<span aria-hidden="true"> ↗</span></a></td>
        <td><span class="mw-chip">${escapeMiniWebHtml(row['Page Type'])}</span></td>
        <td>${volumeCell}</td>
      </tr>`;
    }).join('') : '<tr><td class="mw-no-results" colspan="7">Không có MiniWeb phù hợp với bộ lọc hiện tại.</td></tr>';
  };

  const scheduleRender = () => {
    if (filterFrame) cancelAnimationFrame(filterFrame);
    filterFrame = requestAnimationFrame(renderRows);
  };

  search.addEventListener('input', scheduleRender);
  [division, useCase, pageType].forEach(select => select.addEventListener('change', renderRows));
  ws.querySelector('#miniWebClear').addEventListener('click', () => {
    search.value = '';
    division.value = '';
    useCase.value = '';
    pageType.value = '';
    renderRows();
    search.focus();
  });

  ws.querySelector('#menuToggle')?.addEventListener('click', openSidebar);
  ws.querySelector('#backHomeBtn')?.addEventListener('click', () => {
    activeProtoId = null;
    activeToolId = null;
    renderNav();
    renderWorkspace();
    closeSidebar();
  });

  renderRows();
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

  if (proto.view === 'mini-web-overview') {
    ws.innerHTML = buildMiniWebOverviewView();
    wireMiniWebOverview(ws);
    return;
  }

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
      <span class="ws-cat-tag" style="background:${cat.bg};color:${cat.text}">${displayGroupName(proto.category)}</span>
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
  const address = tool.address || `${proto.address}#${tool.id}`;

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
          <div class="address-pill">🔒 ${address}</div>
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
