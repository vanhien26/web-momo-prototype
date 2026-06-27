// ─── Prototype Registry (Auto-generated from assets/store.js) ────────────
// KHÔNG CHỈNH SỬA FILE NÀY TRỰC TIẾP. Hãy chỉnh sửa assets/store.js và chạy: node scripts/sync-registry.js

export interface Prototype {
  id: string;
  name: string;
  category: string;
  maturity?: string;
  description: string;
  jtbd?: string;
  northStar?: string;
  loop?: string;
  hypothesis?: string;
  value?: string;
  gate?: string;
  src?: string;
  address?: string;
  ownerGroup?: string;
  navigationOnly?: boolean;
  view?: string;
  tools?: Prototype[];
}

export type PrototypeTool = Prototype;

export const PROTOTYPES: Prototype[] = [
  {
    "id": "mini-web-overview",
    "name": "Mini Web Overview",
    "category": "MiniWeb",
    "maturity": "Inventory",
    "description": "Danh mục toàn bộ MiniWeb trên momo.vn, tổng hợp theo Division, Use Case, Product và Page Type.",
    "view": "mini-web-overview"
  },
  {
    "id": "financial",
    "name": "Widget Store",
    "category": "Widget",
    "navigationOnly": true,
    "maturity": "Interactive",
    "description": "Biến search intent tài chính thành trải nghiệm tính toán hữu ích, dẫn người dùng đến hành động phù hợp trong hệ sinh thái MoMo.",
    "jtbd": "Tính nhanh, hiểu rõ, hành động ngay",
    "northStar": "Qualified tool completion",
    "loop": "Search → Utility → App",
    "hypothesis": "Interactive utility tạo information gain tốt hơn content thuần và thu tín hiệu intent có giá trị cho funnel Web-to-App.",
    "value": "Mở rộng organic acquisition cho Credit, Insurance và Personal Finance với asset có khả năng tái sử dụng.",
    "gate": "Đo completion rate, CTA CTR, Web-to-App conversion và chất lượng traffic theo từng utility.",
    "src": "demos/financial.html",
    "address": "web-momo-prototype.vercel.app/financial-utilities",
    "tools": [
      {
        "id": "vay-nhanh",
        "name": "Vay Nhanh",
        "category": "Credit",
        "description": "Ước tính số tiền trả hằng tháng theo số tiền vay, lãi suất và kỳ hạn.",
        "jtbd": "Biết trước gánh nặng tài chính trước khi vay"
      },
      {
        "id": "tra-gop",
        "name": "Trả Góp Ví Trả Sau",
        "category": "Credit",
        "description": "Ước tính số tiền thanh toán hằng kỳ khi chuyển đổi trả góp dư nợ hoặc giao dịch qua Ví Trả Sau MoMo.",
        "jtbd": "Biết số tiền gốc và phí trả mỗi tháng qua Ví Trả Sau để cân đối chi tiêu."
      },
      {
        "id": "cic-score",
        "name": "CIC Score",
        "category": "Credit",
        "description": "Mô phỏng điểm tín dụng CIC theo các yếu tố thanh toán, sử dụng hạn mức và lịch sử.",
        "jtbd": "Biết điểm CIC hiện tại và cách cải thiện"
      },
      {
        "id": "cic-stimulator",
        "name": "CIC Stimulator",
        "category": "Credit",
        "description": "Mô phỏng tác động của các hành động tài chính đến điểm CIC theo thời gian.",
        "jtbd": "Lên kế hoạch cải thiện điểm CIC trước khi vay"
      },
      {
        "id": "net-worth",
        "name": "Giá Trị Tài Sản Ròng",
        "category": "Financial Health",
        "description": "Tổng hợp tài sản và nghĩa vụ nợ để tính giá trị tài sản ròng tại một thời điểm.",
        "jtbd": "Biết vị thế tài chính ròng để ưu tiên tăng tài sản hoặc giảm nợ"
      },
      {
        "id": "dti",
        "name": "Tỷ Lệ Nợ Trên Thu Nhập",
        "category": "Financial Health",
        "description": "Tính tỷ lệ thu nhập gộp hàng tháng đang dùng để thanh toán các nghĩa vụ nợ.",
        "jtbd": "Đánh giá áp lực nợ trước khi cân nhắc vay thêm"
      },
      {
        "id": "debt-payoff",
        "name": "Kế Hoạch Trả Nợ",
        "category": "Financial Health",
        "description": "So sánh chiến lược Avalanche và Snowball khi trả nhiều khoản nợ.",
        "jtbd": "Chọn thứ tự trả nợ và biết thời gian hoàn tất kế hoạch"
      },
      {
        "id": "bao-hiem-o-to",
        "name": "Bảo Hiểm Ô Tô",
        "category": "Insurance",
        "description": "Mô phỏng phí bảo hiểm ô tô theo giá trị xe và tỷ lệ phí.",
        "jtbd": "Ước tính phí bảo hiểm trước khi quyết định mua"
      },
      {
        "id": "bhxh",
        "name": "BHXH",
        "category": "Insurance",
        "description": "Mô phỏng tổng đóng BHXH dựa trên mức lương và số tháng tham gia.",
        "jtbd": "Hiểu quyền lợi BHXH để quyết định đóng tự nguyện"
      },
      {
        "id": "luong-huu",
        "name": "Lương Hưu",
        "category": "Insurance",
        "description": "Ước tính lương hưu hàng tháng theo số năm đóng BHXH, giới tính và mức bình quân lương.",
        "jtbd": "Biết trước lương hưu để lập kế hoạch nghỉ hưu"
      },
      {
        "id": "bhxh-1-lan",
        "name": "BHXH 1 Lần",
        "category": "Insurance",
        "description": "Ước tính số tiền nhận BHXH một lần theo Điều 70 Luật BHXH 2024: 1,5 tháng MBQTL/năm trước 2014, 2 tháng/năm từ 2014, auto trượt giá CPI.",
        "jtbd": "Cân nhắc rút BHXH một lần hay giữ tiếp để lương hưu"
      },
      {
        "id": "tiet-kiem",
        "name": "Tiết Kiệm",
        "category": "Savings",
        "description": "Tính số tiền nhận được khi gửi tiết kiệm theo kỳ hạn và lãi suất.",
        "jtbd": "Biết trước lợi tức để chọn kỳ hạn tiết kiệm phù hợp"
      },
      {
        "id": "nuoi-con",
        "name": "Kế Hoạch Nuôi Con",
        "category": "Savings",
        "description": "Ước tính chi phí nuôi dạy con đến 18 tuổi và số tiền cần tích lũy hằng tháng cho quỹ đại học.",
        "jtbd": "Biết trước chi phí nuôi con để lập kế hoạch tài chính gia đình vững vàng."
      },
      {
        "id": "lai-suat",
        "name": "Lãi Suất Ngân Hàng",
        "category": "Savings",
        "description": "So sánh lãi suất tiền gửi từ 6 ngân hàng lớn, tính lợi tức thực nhận theo số tiền và kỳ hạn.",
        "jtbd": "Chọn ngân hàng và kỳ hạn cho lãi suất tốt nhất"
      },
      {
        "id": "thue-tncn",
        "name": "Thuế TNCN",
        "category": "Tax",
        "description": "Ước tính thuế thu nhập cá nhân theo biểu lũy tiến 5 bậc và giảm trừ gia cảnh 15,5tr (Luật 2025).",
        "jtbd": "Tính nhanh thuế TNCN để lập kế hoạch tài chính"
      },
      {
        "id": "quyet-toan-tncn",
        "name": "Quyết Toán TNCN",
        "category": "Tax",
        "description": "Quyết toán thuế TNCN cuối năm: chênh lệch giữa thuế cả năm và thuế đã tạm đóng, biết phải nộp thêm hay được hoàn trước 30/04.",
        "jtbd": "Biết phải nộp thêm hay được hoàn cuối kỳ"
      },
      {
        "id": "thue-tndn-sme",
        "name": "Thuế TNDN SME",
        "category": "Tax",
        "description": "Tính thuế TNDN cho SME theo Luật 67/2025/QH15: 15% (DT ≤ 3 tỷ) / 17% (3-50 tỷ) / 20% (>50 tỷ), miễn 3 năm cho DN mới.",
        "jtbd": "Dự trù thuế TNDN năm cho doanh nghiệp SME"
      },
      {
        "id": "chung-chi-quy",
        "name": "Chứng Chỉ Quỹ",
        "category": "Investment",
        "description": "Mô phỏng giá trị đầu tư định kỳ vào chứng chỉ quỹ theo lợi suất giả định.",
        "jtbd": "Hiểu tốc độ tăng trưởng đầu tư định kỳ trước khi bắt đầu"
      },
      {
        "id": "gold",
        "name": "Giá Vàng",
        "category": "Investment",
        "description": "So sánh giá mua bán vàng SJC/PNJ, tính sức mua và hòa vốn theo kịch bản.",
        "jtbd": "Đánh giá có nên mua vàng tích lũy không"
      },
      {
        "id": "stock",
        "name": "Chứng Khoán",
        "category": "Investment",
        "description": "Mô phỏng đặt lệnh mua bán cổ phiếu HOSE bằng tiền ảo, theo dõi danh mục.",
        "jtbd": "Làm quen thị trường chứng khoán không rủi ro"
      },
      {
        "id": "ty-gia",
        "name": "Tỷ Giá",
        "category": "FX",
        "description": "Converter A/B: chọn cặp tiền, đảo chiều, xem chart, chênh lệch bank-mid, tỷ giá hiệu dụng và số nhận ròng.",
        "jtbd": "Biết đổi từ tiền nào sang tiền nào, rate đang biến động ra sao và nhận ròng bao nhiêu"
      },
      {
        "id": "fx-compare",
        "name": "So Sánh Tỷ Giá NH",
        "category": "FX",
        "description": "So sánh tỷ giá 7 ngân hàng + 2 venue chợ tự do cho 6 ngoại tệ, highlight rate tốt nhất / kém nhất, sort theo best rate.",
        "jtbd": "Chọn ngân hàng đổi tiền có rate tốt nhất"
      },
      {
        "id": "travel-budget",
        "name": "Budget Du Lịch",
        "category": "FX",
        "description": "Lập ngân sách chuyến đi cho 10 điểm đến × 3 tier (budget/mid/luxury) × N ngày, breakdown theo lưu trú / ăn / di chuyển / hoạt động / dự phòng.",
        "jtbd": "Biết cần mang bao nhiêu tiền cho chuyến đi"
      },
      {
        "id": "quy-du-phong",
        "name": "Quỹ Dự Phòng",
        "category": "Financial Health",
        "description": "Lập mục tiêu quỹ khẩn cấp theo chi tiêu, thời gian hoàn thành và lạm phát dự kiến.",
        "jtbd": "Xác định đúng mức quỹ dự phòng cần tích lũy"
      },
      {
        "id": "tu-do-tai-chinh",
        "name": "Tự Do Tài Chính",
        "category": "Planning",
        "description": "Lập kế hoạch FIRE với lạm phát, lợi suất đầu tư, tỷ lệ rút vốn an toàn và dòng tiền góp hàng tháng.",
        "jtbd": "Biết mình cần bao nhiêu, tốc độ góp có đủ không và thiếu ở đâu"
      },
      {
        "id": "dam-cuoi",
        "name": "Kế Hoạch Đám Cưới",
        "category": "Planning",
        "description": "Lập ngân sách cưới theo số khách, bàn tiệc, chi phí cố định, tiền mừng dự kiến, dự phòng và quỹ sau cưới.",
        "jtbd": "Biết cần chuẩn bị bao nhiêu tiền mặt để cưới xong không hụt dòng tiền"
      },
      {
        "id": "hoc-phi",
        "name": "Học Phí Tương Lai",
        "category": "Planning",
        "description": "Ước tính học phí thực tế theo lạm phát và tính số tiền cần chuẩn bị từ hôm nay.",
        "jtbd": "Tính trước chi phí học phí để chuẩn bị đủ vốn"
      }
    ]
  },
  {
    "id": "esim-du-lich",
    "name": "eSIM Du Lịch",
    "category": "Platform",
    "ownerGroup": "Cell Team",
    "maturity": "Interactive",
    "description": "Trip-first commerce flow giúp user chọn điểm đến, thời gian chuyến đi, gói data và kiểm tra thiết bị trước khi tiếp tục mua eSIM trên MoMo.",
    "jtbd": "Có mạng ngay khi hạ cánh mà không phải tìm SIM tại điểm đến",
    "northStar": "Qualified eSIM checkout rate",
    "loop": "Destination → Trip → Plan → Device check → Checkout",
    "hypothesis": "Đề xuất gói theo chuyến đi và kiểm tra tương thích trước checkout sẽ giảm sai gói, giảm lỗi kích hoạt và tăng tỷ lệ mua hoàn tất.",
    "value": "Biến trang thông tin eSIM thành acquisition surface có intent rõ, thu tín hiệu điểm đến và đưa user sang giao dịch trong ứng dụng MoMo.",
    "gate": "Đo destination selection, plan selection, compatibility check, checkout intent, activation support và purchase completion.",
    "src": "demos/esim-du-lich.html",
    "address": "web-momo-prototype.vercel.app/esim-du-lich",
    "tools": [
      {
        "id": "destination-detail",
        "name": "Destination Detail",
        "category": "Child Page",
        "description": "Một template trang con dùng query parameter để render quốc gia hoặc khu vực đã chọn.",
        "jtbd": "Chọn gói, kiểm tra thiết bị và hiểu cách kích hoạt tại điểm đến",
        "src": "demos/esim/destination.html?destination=thailand",
        "address": "web-momo-prototype.vercel.app/esim/destination?destination=thailand"
      }
    ]
  },
  {
    "id": "merchant",
    "name": "Merchant",
    "category": "Platform",
    "ownerGroup": "Web Platform",
    "maturity": "Hub",
    "description": "Hub Merchant của MoMo - cửa hàng chấp nhận Ví Trả Sau và voucher. Listing theo khu vực kèm bản đồ (Airbnb/Groupon style), kết nối tới Merchant Discovery (card stack swipe) và Merchant Detail (trang chi tiết). User vào Hub thấy nhanh quán quanh đây, deep-link xuống sub-page khi cần khám phá hoặc xem chi tiết.",
    "jtbd": "Tìm merchant phù hợp trong khu vực và dùng dịch vụ ngay",
    "northStar": "Voucher redeem rate per Hub session",
    "loop": "Browse hub map → Discovery/Detail → Redeem voucher → Pay",
    "hypothesis": "Hub gom 3 pattern khám phá (map listing, swipe stack, detail) vào một surface giúp user chuyển intent linh hoạt theo bối cảnh sử dụng, tăng coverage so với 3 trang đứng riêng.",
    "value": "Single hub cho toàn bộ Merchant journey: từ duyệt khu vực có voucher → swipe khám phá thêm → đọc detail → đi tới quán + thanh toán + redeem.",
    "gate": "Đo: Hub session length, sub-page CTR (Discovery + Detail), card→detail rate, voucher view-to-redeem rate, pin click vs swipe.",
    "src": "demos/merchants.html",
    "address": "web-momo-prototype.vercel.app/merchant",
    "tools": [
      {
        "id": "merchant-discovery",
        "name": "Merchant Discovery",
        "category": "Sub-page",
        "description": "Card stack mobile-first để swipe Merchant theo nhu cầu: bỏ qua hoặc lưu lựa chọn, xem nhanh rating, giá, địa chỉ, Ví Trả Sau và Sponsored Card từ Ads Placement.",
        "jtbd": "Lưu Merchant phù hợp mà không phải đọc danh sách dài",
        "src": "demos/merchant-discovery.html",
        "address": "web-momo-prototype.vercel.app/merchant/discovery"
      },
      {
        "id": "merchant-detail",
        "name": "Merchant Detail",
        "category": "Sub-page",
        "description": "Trang chi tiết một merchant (ví dụ Tiệm Mì Chú Cao): storefront signboard, menu, AI Summary từ Google Reviews, MoMo Review, FAQ, gợi ý merchant tương tự, CTA thanh toán.",
        "jtbd": "Đánh giá merchant trước khi đến và thanh toán bằng MoMo",
        "src": "demos/merchant.html",
        "address": "web-momo-prototype.vercel.app/merchant/detail"
      },
      {
        "id": "vts-merchant-finder",
        "name": "Listing Page (pSEO)",
        "category": "Sub-page",
        "description": "Listing page pSEO — tìm cửa hàng VTS theo địa điểm (mall, chợ, khu vực). Template data-driven: zone filter tự ẩn/hiện theo location_type. Demo: Crescent Mall với 5 tầng, 25 merchants, 34 tỉnh/TP từ vietnamese-provinces-database.",
        "jtbd": "Biết ngay cửa hàng nào tại địa điểm này nhận Ví Trả Sau và hoàn tiền bao nhiêu",
        "src": "demos/vts-merchant-finder.html",
        "address": "web-momo-prototype.vercel.app/merchant/listing"
      }
    ]
  },
  {
    "id": "cinema",
    "name": "Cinema",
    "category": "Platform",
    "ownerGroup": "Cell Team",
    "maturity": "PLG Page",
    "description": "Trang chủ Cinema momo.vn/cinema — SEO/organic entry point. Gồm hero campaign, film grid 2-col dạng ticket stub, genre filter, coming soon, rạp gần bạn và PLG block.",
    "jtbd": "Browse phim đang chiếu, nhận cashback, chọn rạp và mua vé nhanh qua MoMo",
    "northStar": "Film card click-through → ticket purchase",
    "loop": "Organic search → Film browse → Pick film → Showtime → Mua vé",
    "hypothesis": "Ticket stub card design tích hợp cashback benefit ngay trên poster tăng intent mua vé so với card thông thường.",
    "value": "SEO entry point cho toàn bộ Cinema use case — organic traffic 1M/quý. PLG hook: cashback gắn mỗi film card.",
    "gate": "Film card CTR, genre filter usage, coming soon notify rate, cinema row click.",
    "src": "demos/cinema.html",
    "address": "web-momo-prototype.vercel.app/cinema",
    "tools": [
      {
        "id": "cinema-film-detail",
        "name": "Film Detail",
        "category": "Spoke",
        "ownerGroup": "Cell Team",
        "maturity": "Campaign Page",
        "description": "Film Detail page cho Summer Campaign 2026 — tích hợp Hero campaign, Game Mở Khoá (Mua vé → Check-in → Review), Bundle Banner, Thông tin phim, Lịch chiếu và Đánh giá.",
        "jtbd": "Mua vé và tham gia campaign ngay từ trang phim",
        "northStar": "Game mission completion + ticket purchase",
        "loop": "Hero → Game block → Buy ticket → Check-in → Review",
        "hypothesis": "Tích hợp campaign gamification trực tiếp vào film detail tăng mission completion rate so với popup/banner riêng lẻ.",
        "value": "Tạo luồng campaign mới cho Cinema: từ organic traffic vào film detail → mua vé → check-in → review → cashback.",
        "gate": "Đo mission completion rate (1→2→3), ticket CTA CTR, check-in activation và review submission.",
        "src": "demos/cinema-film-detail.html",
        "address": "web-momo-prototype.vercel.app/cinema/nghi-he-so-nghi-huu"
      }
    ]
  },
  {
    "id": "ads-manager",
    "name": "Ads & Widget Manager",
    "category": "MoSpark",
    "maturity": "Interactive",
    "description": "Mô phỏng quy trình tạo chiến dịch quảng cáo trên MoMo Web: setup campaign, chọn vị trí, visualize real-time trên Desktop và Mobile.",
    "jtbd": "Chọn đúng vị trí, ước tính reach trước khi chạy",
    "northStar": "Placement selection completion",
    "loop": "Setup → Place → Preview → Publish",
    "hypothesis": "Visual placement preview giúp advertiser chọn vị trí tự tin hơn và giảm trial-and-error so với bảng giá thuần.",
    "value": "Tạo bề mặt self-serve cho ads booking trên Web Platform, giảm effort sales và tăng inventory utilization.",
    "gate": "Đo placement selection rate, preview interaction depth, campaign publish intent.",
    "src": "demos/ads.html",
    "address": "web-momo-prototype.vercel.app/ads-manager"
  },
  {
    "id": "chatbot",
    "name": "MoMo Project Assistant",
    "category": "MoSpark",
    "maturity": "Interactive",
    "description": "Hệ thống chatbot nhúng với 6 template UX, hỗ trợ Bubble, Popup, Standard và Proactive; trả lời từ project-scoped RAG rồi chuyển Typebot cho flow có trạng thái.",
    "jtbd": "Chọn đúng kiểu trợ lý cho từng Mini Web và hoàn thành nhu cầu ngay trong context",
    "northStar": "Assisted task success rate",
    "loop": "Choose template → Ask / Guide → RAG / Typebot → Complete CTA",
    "hypothesis": "Template theo JTBD giúp mỗi project dùng đúng interaction pattern thay vì ép mọi nhu cầu vào một chat bubble tổng quát.",
    "value": "Một embed system dùng lại cho nhiều Mini Web, nhưng tách template UX, knowledge scope, analytics và guardrail theo từng project.",
    "gate": "Đo template engagement, grounded answer rate, citation coverage, Typebot completion, assisted CTA và handoff rate.",
    "src": "demos/chatbot.html",
    "address": "web-momo-prototype.vercel.app/project-assistant"
  },
  {
    "id": "seo-geo-project",
    "name": "SEO/GEO Project Hub",
    "category": "MoSpark",
    "maturity": "Interactive",
    "description": "Tổng hành dinh quản lý Use Case SEO/GEO: cây Topic → Cluster → Keyword 3 tầng, Keyword Registry với quy tắc 1-1 anti-cannibalization, Business Context 12 trường làm nguồn sự thật cho GenAI content, và kick-off sản xuất nội dung.",
    "jtbd": "Quản lý toàn bộ Use Case, Cluster và Keyword trong một surface - không bỏ sót, không trùng lặp",
    "northStar": "Use case coverage rate và keyword uniqueness index",
    "loop": "Use Case → Cluster → Keyword → Business Context → GenAI Content",
    "hypothesis": "Tập trung quản lý keyword trong một registry duy nhất với quy tắc 1 keyword = 1 URL sẽ loại bỏ cannibalization và tạo nền tảng vững cho content production quy mô lớn.",
    "value": "Single source of truth cho toàn bộ SEO/GEO portfolio: SoV per use case, funnel TOFU/MOFU/BOFU, Business Context đủ 12 trường là gate bắt buộc trước khi GenAI sản xuất.",
    "gate": "Đo use case coverage (% có keyword đầy đủ), Business Context completeness rate, keyword uniqueness index và GenAI kickoff rate per cluster.",
    "src": "demos/seo-geo-project.html",
    "address": "web-momo-prototype.vercel.app/seo-geo-project"
  },
  {
    "id": "merchant-page-builder",
    "name": "Merchant Page Manager",
    "category": "MoSpark",
    "maturity": "Interactive",
    "description": "Quản lý Merchant record đã được khởi tạo từ SEO/GEO Content Plan: liên kết Merchant ID, enrich dữ liệu, kiểm tra Overview rồi mở Editor cho Logo, GenAI Content, Banner AI, Internal Links và Information Display.",
    "jtbd": "Hoàn thiện Merchant record và page content từ một Merchant đã có sẵn trong Content Plan",
    "northStar": "Verified Merchant Page draft completion",
    "loop": "Merchant List → Edit → Sync Merchant ID → Overview → Edit Content",
    "hypothesis": "Giữ SEO context từ Content Plan xuyên suốt Builder sẽ giảm nhập lại keyword, tránh sai mapping và tăng tốc tạo Merchant Page.",
    "value": "Nối trực tiếp SEO planning với CMS authoring trên cùng data contract của Merchant.",
    "gate": "Đo tỷ lệ scan Merchant ID thành công, verify completion, editor completion và thời gian từ Create đến draft.",
    "src": "demos/merchant-page-builder.html",
    "address": "web-momo-prototype.vercel.app/merchant-page-builder"
  },
  {
    "id": "merchant-list",
    "name": "Merchant List",
    "category": "MoSpark",
    "maturity": "Interactive",
    "description": "Danh sách toàn bộ merchants kéo trực tiếp từ Supabase — xem giờ mở cửa hôm nay, cashback, status và mở nhanh vào Page Builder.",
    "jtbd": "Xem toàn cảnh Merchant database và navigate vào từng record để build page",
    "northStar": "Merchant List → Builder navigation",
    "loop": "Load from Supabase → Filter/Search → Open in Builder",
    "hypothesis": "Xem list trước khi vào Builder giúp chọn đúng record và giảm nhập ID thủ công.",
    "value": "Kết nối trực tiếp Supabase database với prototype workflow.",
    "gate": "Đo thời gian từ mở list đến bắt đầu edit trong Builder.",
    "src": "demos/merchant-list.html",
    "address": "web-momo-prototype.vercel.app/merchant-list"
  },
  {
    "id": "supabase-editor",
    "name": "Supabase Table Editor",
    "category": "MoSpark",
    "maturity": "Interactive",
    "description": "Clone giao diện Supabase Table Editor — xem và filter toàn bộ data trong 3 tables: merchants, merchant_hours, merchant_promotions. Data load trực tiếp từ Supabase production.",
    "jtbd": "Inspect và debug data Merchant trực tiếp trong prototype mà không cần mở tab Supabase",
    "northStar": "Data visibility trong prototype workflow",
    "loop": "Switch table → Filter → Click FK → Navigate",
    "hypothesis": "Xem raw data ngay trong prototype giúp verify nhanh hơn mở dashboard riêng.",
    "value": "Supabase Table Editor experience embedded trong MoSpark prototype.",
    "gate": "Đo số lần dùng để debug vs mở Supabase dashboard trực tiếp.",
    "src": "demos/supabase-editor.html",
    "address": "web-momo-prototype.vercel.app/supabase-editor"
  },
  {
    "id": "seo-geo-score",
    "name": "SEO/GEO Content Score",
    "category": "MoSpark",
    "maturity": "Governance Gate",
    "description": "Pre-publish scoring system kiểm tra Technical SEO, Content, GEO và Trust. Mỗi rule có evidence, mức độ ưu tiên và hành động sửa; backend Hard Gate bảo vệ domain trước nội dung chưa đạt chuẩn.",
    "jtbd": "Biết chính xác bài viết đã đủ điều kiện Publish chưa, lỗi nằm ở đâu và cần sửa gì trước",
    "northStar": "First-pass publish readiness rate",
    "loop": "Draft → Auto-score → Fix evidence → Governance Gate → Publish",
    "hypothesis": "Một score có evidence và rule theo JTBD giúp Editor sửa đúng lỗi nhanh hơn checklist nhị phân hoặc review thủ công.",
    "value": "Chuẩn hóa quality gate cho mọi page type mà không khuyến khích keyword stuffing, wordcount máy móc hoặc số liệu không nguồn.",
    "gate": "Đo pass rate lần đầu, hard-gate failure, time-to-fix, rule failure distribution và publish override attempt.",
    "src": "demos/seo-geo-score.html",
    "address": "web-momo-prototype.vercel.app/seo-geo-score"
  },
  {
    "id": "universal-search",
    "name": "Universal Search",
    "category": "Other",
    "ownerGroup": "Web Platform",
    "maturity": "Interactive",
    "description": "Google-style federated search cho toàn bộ domain MoMo: dịch vụ, bài viết, merchant và công cụ tài chính trong một trang — với AI Answer box, content-type tabs và related queries.",
    "jtbd": "Tìm bất kỳ thứ gì trên MoMo mà không cần biết nó nằm ở đâu",
    "northStar": "Search-to-action conversion rate",
    "loop": "Query → Federated results → Action",
    "hypothesis": "Một điểm tìm kiếm duy nhất cho tất cả nội dung MoMo giảm friction discovery và tăng cross-sell giữa các use case.",
    "value": "Bề mặt entry point cho mọi intent — thay thế navigation phức tạp bằng một search bar duy nhất với kết quả multi-entity.",
    "gate": "Đo search-to-click, tab filter usage, AI box engagement, related query CTR và cross-entity discovery rate.",
    "src": "demos/universal-search.html",
    "address": "web-momo-prototype.vercel.app/search"
  },
  {
    "id": "worldcup",
    "name": "World Cup 2026 Predictor",
    "category": "Other",
    "maturity": "Data experience",
    "description": "Trải nghiệm dữ liệu thể thao dễ hiểu cho đại chúng, dùng sự kiện mùa vụ để tạo traffic, repeat visit và bề mặt activation.",
    "jtbd": "So sánh cơ hội đội tuyển yêu thích",
    "northStar": "Team analysis engagement",
    "loop": "Event → Explore → Return",
    "hypothesis": "Data storytelling trực quan giúp MoMo sở hữu seasonal search demand và tạo lý do quay lại trong suốt giải đấu.",
    "value": "Tạo engagement surface có khả năng gắn prediction game, voucher, mini app và campaign activation.",
    "gate": "Đo team views, comparison depth, returning users và campaign CTA conversion.",
    "src": "demos/world-cup.html",
    "address": "web-momo-prototype.vercel.app/world-cup-2026"
  },
  {
    "id": "widget-store",
    "name": "Widget Store Manager",
    "category": "Widget",
    "maturity": "Interactive",
    "description": "Trang quản lý toàn bộ Widget Store: 33 công cụ chia 3 category (Financial, Payments, Security) hiển thị với đa dạng UI/UX — domain color taxonomy, featured cards, service tile grid, threat monitor. Có domain filter, list/grid toggle và copy embed code.",
    "jtbd": "Xem tổng quan và quản lý toàn bộ widget có thể nhúng vào MoMo platform",
    "northStar": "Widget discovery và embed adoption rate",
    "src": "demos/widget-store.html",
    "address": "web-momo-prototype.vercel.app/widget-store"
  },
  {
    "id": "payments",
    "name": "Billpay",
    "category": "Widget",
    "maturity": "Interactive",
    "description": "Hub thanh toán đa dịch vụ kiểu Paytm: category tabs ngang (Điện thoại, Điện, Nước, Internet, Metro HCM), mỗi tab switch form/flow tương ứng - tra cứu hóa đơn, nạp tiền trả trước, và mua vé metro với QR output.",
    "jtbd": "Thanh toán đúng dịch vụ, đúng nhà cung cấp, trong một surface duy nhất",
    "northStar": "Service payment completion",
    "loop": "Select category → Input → Lookup/Buy → Pay",
    "hypothesis": "Hub đa dịch vụ với category nav giảm context switch so với từng mini-app riêng lẻ, tăng cross-service discovery và repeat usage.",
    "value": "Một surface phủ toàn bộ utility payments + transit - có thể mở rộng thêm category mà không cần page mới.",
    "gate": "Đo category switch rate, lookup success, pay CTA và Metro ticket purchase completion.",
    "src": "demos/payments.html",
    "address": "web-momo-prototype.vercel.app/payments",
    "tools": [
      {
        "id": "bill-lookup",
        "name": "Tra Cứu Hóa Đơn",
        "category": "Sub-page",
        "description": "Tra cứu hóa đơn điện, nước, internet theo mã khách hàng hoặc số điện thoại.",
        "jtbd": "Biết số tiền cần nộp trước khi thanh toán",
        "src": "demos/bill-lookup.html",
        "address": "web-momo-prototype.vercel.app/bill-lookup"
      },
      {
        "id": "metro-ticket",
        "name": "Mua Vé Metro HCM",
        "category": "Sub-page",
        "description": "Mua vé Metro TP.HCM: chọn tuyến, ga đi/đến, loại vé, số lượng và nhận QR.",
        "jtbd": "Mua vé metro nhanh không cần xếp hàng tại ga",
        "src": "demos/metro-ticket.html",
        "address": "web-momo-prototype.vercel.app/metro-ticket"
      }
    ]
  },
  {
    "id": "scam-check",
    "name": "Scam Check",
    "category": "Widget",
    "maturity": "Safety Hub",
    "description": "An Toàn MoMo - chống lừa đảo end-to-end: (1) Tra cứu rủi ro SĐT/STK/link/QR trước khi chuyển, (2) Báo cáo lừa đảo ẩn danh 3 bước, (3) Cơ chế 4 bước xử lý phối hợp ngân hàng & cơ quan chức năng, (4) Impact stats cộng đồng (1.245.678+ user bảo vệ, 320 tỷ chặn), (5) Feature bảo vệ bền vững (sinh trắc học, AI 24/7, cảnh báo số xấu).",
    "jtbd": "Phòng và chống lừa đảo: kiểm tra trước, báo cáo sau, bảo vệ cộng đồng",
    "northStar": "Anonymous report + risk-check completion combined",
    "loop": "Trigger → Lookup OR Report → Community alert → App download",
    "hypothesis": "Kết hợp lookup (defense) + report (community impact) trên cùng surface tăng cả conversion checking và submission rate so với tách 2 page.",
    "value": "Single safety hub: bảo vệ user trước transaction, thu fraud signals từ cộng đồng, cross-sell tải app cho lớp bảo mật sinh trắc/AI.",
    "gate": "Đo: lookup completion, scenario CTR, report 3-step funnel, abort vs submit ratio, app download CTR sau impact stats.",
    "src": "demos/scam-check.html",
    "address": "web-momo-prototype.vercel.app/scam-check"
  },
  {
    "id": "blog-category",
    "name": "MoSpark Blog",
    "category": "MoSpark",
    "maturity": "Listing",
    "description": "Blog Hub-and-Spoke: Category là cha (listing 8 danh mục Use Case + featured article + filter tabs), Article là child page chuyên sâu (full-width + quiz tương tác + floating TOC + inline ads). Pattern Cate → Article giống Investopedia/Cloudflare Learning.",
    "jtbd": "Khám phá nội dung blog theo danh mục Use Case rồi đi sâu vào bài cụ thể, kiểm tra hiểu biết qua quiz và chuyển đổi sang dịch vụ MoMo.",
    "northStar": "Category → Article CTR + Article completion + CTA conversion",
    "loop": "Browse Category → Filter → Click Article → Read → Quiz → Convert",
    "hypothesis": "Cấu trúc Category (cha) → Article (con) tập trung internal link equity về Hub Category cho từng Use Case, tăng entity authority. Article có quiz + contextual ad theo chủ đề tăng engagement và conversion so với blog phẳng.",
    "value": "Tạo bề mặt điều hướng nội dung 2 tầng (8 category × N article) cho SEO/GEO, mỗi Category là entity hub củng cố Link Equity, mỗi Article là content depth target từng query.",
    "gate": "Đo category filter usage, article CTR từ listing, scroll depth article, quiz completion, CTA conversion cả category lẫn article.",
    "src": "demos/blog-category.html",
    "address": "web-momo-prototype.vercel.app/mospark-blog",
    "tools": [
      {
        "id": "blog",
        "name": "Blog Article",
        "category": "Child Page",
        "description": "Article child page chuyên sâu: full-width + quiz tương tác + floating TOC + inline ads (Universal + Contextual) + static aggregate rating + progressive reading. Mỗi Article thuộc về 1 Category cha.",
        "jtbd": "Đọc bài chuyên sâu về chủ đề cụ thể, test hiểu biết qua quiz inline rồi chuyển sang app MoMo nếu phù hợp.",
        "src": "demos/blog.html",
        "address": "web-momo-prototype.vercel.app/mospark-blog/phạt-nguội"
      }
    ]
  },
  {
    "id": "blog-editor",
    "name": "Blog Editor (Tiptap)",
    "category": "MoSpark",
    "maturity": "Prototype",
    "description": "Tiptap-based rich text editor cho MoSpark CMS. Notion-style block editor với slash commands (/), bubble menu khi bôi chọn text, 12 block types (paragraph, heading, callout, list, table, codeblock, image, divider...) và AI assist inline. Pre-loaded bài mẫu Ví Trả Sau MoMo.",
    "jtbd": "Content editor viết và format bài blog trực quan — không cần biết HTML/Markdown. Slash commands + block types rich giúp tạo nội dung SEO-structured nhanh hơn 3x so với plain textarea.",
    "northStar": "Time-to-publish (draft → publish) giảm + Content quality score tăng (SEO checklist auto)",
    "loop": "Open draft → Write với slash commands → Insert blocks → Preview → Publish",
    "hypothesis": "Editor có block types rõ ràng (callout, table, structured list) giúp content creator tự nhiên tạo ra content structured data-rich, tăng khả năng được AI Overview / GEO citation so với plain text.",
    "value": "Giảm dependency vào dev cho content formatting. Editor enforce cấu trúc SEO (H1→H2→H3, callout cho FAQ, table cho comparison) ngay từ lúc viết.",
    "gate": "Đo: time-to-draft, block type diversity per article, slash command usage rate, article publish rate.",
    "src": "demos/blog-editor.html",
    "address": "web-momo-prototype.vercel.app/blog-editor"
  },
  {
    "id": "orchestrator",
    "name": "GenAI Orchestrator",
    "category": "MoSpark",
    "maturity": "Concept",
    "description": "Canvas workflow mô phỏng orchestrator nhận prompt, phân việc cho AI agents (Research/Brief/Content Writer/Video Script), truy vấn RAG knowledge base và stream output.",
    "jtbd": "Hiểu cách AI orchestrator phân tác vụ và tạo output có cấu trúc",
    "northStar": "Workflow completion rate",
    "loop": "Prompt → Dispatch → RAG → Assemble → Output",
    "hypothesis": "Visual canvas workflow giúp team và stakeholder tin tưởng vào hệ thống AI content — thấy được luồng xử lý thay vì chỉ thấy input/output.",
    "value": "Tạo bề mặt pitch cho GenAI Content/Report/Video platform, làm nền tảng BRD handoff cho Trọng build production version.",
    "gate": "Đo preset selections, workflow completions, output panel engagement và open-in-tab rate.",
    "src": "demos/orchestrator.html",
    "address": "web-momo-prototype.vercel.app/genai-orchestrator"
  },
  {
    "id": "genai-image",
    "name": "GenAI Image Studio",
    "category": "MoSpark",
    "maturity": "Interactive",
    "description": "Tạo key visual theo Page Type và template đã khóa size, vùng an toàn, logo, pattern, color token và responsive crop. Demo chi tiết dùng Landing Page Hero Banner 1920 x 600.",
    "jtbd": "Tạo ảnh campaign đúng brand và lắp được ngay vào Page Builder mà không phải sửa layout thủ công",
    "northStar": "Template compliant asset approval rate",
    "loop": "Page Type → Template Rules → Creative Brief → Generate → Quality Gate",
    "hypothesis": "Tách AI key visual khỏi lớp copy và brand cố định sẽ giảm lỗi logo, text, safe zone và rút ngắn vòng review giữa Content, Design và Dev.",
    "value": "Một image pipeline dùng lại cho nhiều Page Type, có template contract, mask, brand reference, variant scoring và audit trail trước khi đưa vào Asset Library.",
    "gate": "Đo generation completion, Brand Fit, rule pass rate, số vòng regenerate, approval time và tỷ lệ asset được dùng trong Page Builder.",
    "src": "demos/genai-image.html",
    "address": "web-momo-prototype.vercel.app/genai-image-studio"
  },
  {
    "id": "seo-geo-dashboard",
    "name": "SEO/GEO Dashboard",
    "category": "MoSpark",
    "maturity": "Interactive",
    "description": "Dashboard performance theo từng Use Case: GA4 (Pageviews, Users, Click to App), GSC (Position, Impressions, Keywords), BigQuery (Open in App, MAU, MEU) — với chart trend 6 tháng và funnel Web-to-App.",
    "jtbd": "Xem nhanh health của từng use case theo 3 nguồn dữ liệu trong một surface duy nhất",
    "northStar": "Use case coverage review rate",
    "loop": "Select use case → GA4 trend → GSC keywords → BQ funnel",
    "hypothesis": "Tập hợp GA4 + GSC + BigQuery trong một dashboard theo use case giúp team SEO audit nhanh hơn và phát hiện gap không cần mở 3 tool khác nhau.",
    "value": "Single-pane-of-glass cho Out-App Traffic team: xem performance organic, ranking keyword và funnel app theo từng product trong một lần review.",
    "gate": "Đo use case drill-down rate, panel engagement (GA4/GSC/BQ), keyword table interaction và funnel step CTR.",
    "src": "demos/seo-geo-dashboard.html",
    "address": "web-momo-prototype.vercel.app/seo-geo-dashboard"
  },
  {
    "id": "agentic-hub",
    "name": "Agentic Hub",
    "category": "MoSpark",
    "maturity": "Interactive",
    "description": "Multi-agent pipeline nâng cấp: per-agent model selection (Haiku/Sonnet/Opus theo complexity và cost), vector RAG knowledge injection, cost/token tracking theo thời gian thực và Inspector tab breakdown.",
    "jtbd": "Demo hệ thống agentic thực tế — chọn đúng model cho đúng tác vụ, kiểm soát cost",
    "northStar": "Pipeline run completion + model selection engagement",
    "loop": "Select preset → Assign models → Run pipeline → Inspect cost",
    "hypothesis": "Per-agent model selection và RAG chunk visibility giúp team hiểu trade-off cost/quality trong agentic system — nền tảng quyết định build production.",
    "value": "Bề mặt pitch cho AI Content Platform v2 với cost-awareness; làm rõ spec cho Trọng về model routing và RAG injection per agent.",
    "gate": "Đo preset selections, model override rate, Inspector tab views, pipeline completions và session cost distribution theo tier.",
    "src": "demos/agentic-hub.html",
    "address": "web-momo-prototype.vercel.app/agentic-hub"
  },
  {
    "id": "dich-vu-cong",
    "name": "Dịch Vụ Công",
    "category": "Platform",
    "ownerGroup": "Cell Team",
    "maturity": "Governance Hub",
    "description": "Knowledge và Governance Hub giúp người dùng tìm đúng thủ tục, kiểm tra điều kiện, tạo checklist hồ sơ và chuyển sang cổng chính thức để nộp hoặc theo dõi hồ sơ.",
    "jtbd": "Hiểu mình cần làm thủ tục nào, chuẩn bị gì và tiếp tục ở đâu mà không phải tự ghép thông tin từ nhiều nguồn",
    "northStar": "Qualified handoff rate đến đúng hướng dẫn hoặc cổng dịch vụ công chính thức",
    "loop": "Nhu cầu → Hướng dẫn → Checklist → Cổng chính thức → Theo dõi hồ sơ",
    "hypothesis": "Giải thích theo tình huống và chỉ rõ điểm chuyển giao giúp người dùng hoàn thành tác vụ tốt hơn một danh mục thủ tục hoặc bài viết thuần thông tin.",
    "value": "Tạo lớp điều hướng đáng tin cậy giữa nhu cầu tìm kiếm trên Web và hệ thống thực thi của cơ quan nhà nước.",
    "gate": "Đo search success, checklist completion, guide engagement, qualified handoff và return rate để tra cứu hồ sơ.",
    "src": "demos/dich-vu-cong.html",
    "address": "web-momo-prototype.vercel.app/dich-vu-cong",
    "tools": [
      {
        "id": "dvc-doi-gplx",
        "name": "Đổi Bằng Lái Xe",
        "category": "Service Guide",
        "description": "Hướng dẫn theo trường hợp hết hạn, mất, hỏng hoặc đổi thông tin GPLX.",
        "jtbd": "Biết mình thuộc trường hợp nào và chuẩn bị đúng hồ sơ trước khi nộp",
        "src": "demos/doi-bang-lai-xe.html",
        "address": "web-momo-prototype.vercel.app/dich-vu-cong/doi-bang-lai-xe"
      },
      {
        "id": "dvc-cccd",
        "name": "Cấp Đổi Căn Cước",
        "category": "Service Guide",
        "description": "Hướng dẫn theo tình huống hết hạn, mất thẻ hoặc thay đổi thông tin.",
        "jtbd": "Làm đúng thủ tục căn cước theo tình trạng thực tế",
        "src": "demos/gia-han-cccd.html",
        "address": "web-momo-prototype.vercel.app/dich-vu-cong/cap-doi-can-cuoc"
      },
      {
        "id": "dvc-ho-chieu",
        "name": "Cấp Hộ Chiếu",
        "category": "Service Guide",
        "description": "Hướng dẫn cấp mới hoặc cấp lại hộ chiếu, từ điều kiện đến kênh thực hiện.",
        "jtbd": "Chuẩn bị đủ thông tin và chọn đúng cách nộp hồ sơ hộ chiếu",
        "src": "demos/lam-ho-chieu.html",
        "address": "web-momo-prototype.vercel.app/dich-vu-cong/cap-ho-chieu"
      },
      {
        "id": "dvc-khai-sinh",
        "name": "Đăng Ký Khai Sinh",
        "category": "Service Guide",
        "description": "Hướng dẫn theo thời hạn, người thực hiện và tình trạng giấy tờ.",
        "jtbd": "Đăng ký khai sinh đúng thời hạn và không thiếu giấy tờ",
        "src": "demos/dang-ky-khai-sinh.html",
        "address": "web-momo-prototype.vercel.app/dich-vu-cong/dang-ky-khai-sinh"
      },
      {
        "id": "dvc-ket-hon",
        "name": "Đăng Ký Kết Hôn",
        "category": "Service Guide",
        "description": "Phân biệt thủ tục trong nước và trường hợp có yếu tố nước ngoài.",
        "jtbd": "Kiểm tra điều kiện và chuẩn bị đúng bộ hồ sơ kết hôn",
        "src": "demos/dang-ky-ket-hon.html",
        "address": "web-momo-prototype.vercel.app/dich-vu-cong/dang-ky-ket-hon"
      }
    ]
  },
  {
    "id": "onboarding",
    "name": "User Onboarding — Giới thiệu & Đăng ký",
    "category": "Other",
    "ownerGroup": "Web Platform",
    "maturity": "Interactive",
    "description": "Luồng onboarding 6 màn hướng dẫn người dùng mới hiểu MoMo: feature tour, social proof, download CTA và đăng ký số điện thoại với OTP.",
    "jtbd": "Hiểu MoMo làm được gì và bắt đầu ngay không mất công",
    "northStar": "Activation rate (register started)",
    "loop": "Discover → Educate → Register → Activate",
    "hypothesis": "Feature tour có visual rõ ràng + social proof giúp tăng tỷ lệ người mới hoàn thành đăng ký so với landing page dạng text truyền thống.",
    "value": "Tăng top-of-funnel conversion cho kênh web/paid, giảm churn ngay từ bước đầu tiên.",
    "gate": "Đo slide completion rate, CTA click rate, register started và OTP verify rate.",
    "src": "demos/onboarding.html",
    "address": "web-momo-prototype.vercel.app/welcome",
    "tools": [
      {
        "id": "kyc",
        "name": "eKYC — Xác Minh Danh Tính",
        "category": "Sub-flow",
        "description": "Luồng xác minh danh tính nâng cấp tài khoản MoMo Tier 2: so sánh quyền lợi, chụp CCCD, selfie liveness và kết quả.",
        "jtbd": "Nâng cấp tài khoản để giao dịch không giới hạn, vay và đầu tư",
        "src": "demos/kyc.html",
        "address": "web-momo-prototype.vercel.app/ekyc"
      }
    ]
  },
  {
    "id": "dashboard",
    "name": "Dashboard Analytics",
    "category": "Other",
    "ownerGroup": "Web Platform",
    "maturity": "Interactive",
    "description": "Dashboard phân tích vận hành: KPI cards, line chart giao dịch/doanh thu, donut phân loại, bar chart kênh acquisition, heatmap hoạt động, funnel chuyển đổi, top services table.",
    "jtbd": "Nắm tình hình kinh doanh và phát hiện vấn đề từ một màn hình",
    "northStar": "Time-to-insight",
    "loop": "Monitor → Detect → Investigate → Act",
    "hypothesis": "Dashboard tổng hợp đa chiều giúp team ra quyết định nhanh hơn so với xem từng báo cáo rời rạc.",
    "value": "Tăng tốc độ phát hiện sự cố, tối ưu sản phẩm dựa trên data và giảm thời gian họp báo cáo định kỳ.",
    "gate": "Đo time-on-page, chart interaction rate, export rate, alert action rate.",
    "src": "demos/dashboard.html",
    "address": "web-momo-prototype.vercel.app/analytics"
  },
  {
    "id": "search",
    "name": "Search & Discovery",
    "category": "Other",
    "ownerGroup": "Web Platform",
    "maturity": "Interactive",
    "description": "Tìm kiếm dịch vụ với autocomplete, gợi ý, lịch sử, bộ lọc đa chiều (category, ưu đãi, rating), sort, pagination và highlight từ khoá.",
    "jtbd": "Tìm đúng dịch vụ cần ngay, không mất công lướt",
    "northStar": "Search-to-action rate",
    "loop": "Search → Filter → Find → Act",
    "hypothesis": "Autocomplete + filter sidebar giúp người dùng tìm đúng dịch vụ trong ít bước hơn, tăng tỷ lệ chuyển đổi so với danh sách duyệt thủ công.",
    "value": "Tăng discoverability cho danh mục dịch vụ dài, giảm churn do không tìm thấy sản phẩm.",
    "gate": "Đo search volume, query → result click rate, filter usage rate, zero-results rate.",
    "src": "demos/search.html",
    "address": "web-momo-prototype.vercel.app/search"
  },
  {
    "id": "notification-center",
    "name": "Notification Center",
    "category": "Other",
    "ownerGroup": "Web Platform",
    "maturity": "Interactive",
    "description": "Component thông báo đầy đủ: bell icon + badge counter + dropdown + trang danh sách + settings. 5 loại thông báo: giao dịch, ưu đãi, hệ thống, xã hội, tài chính.",
    "jtbd": "Không bỏ sót thông báo quan trọng, kiểm soát được loại nào muốn nhận",
    "northStar": "Notification open rate",
    "loop": "Receive → Open → Act → Return",
    "hypothesis": "Nhóm thông báo theo loại và cho phép filter giúp người dùng tìm thấy thông tin cần thiết nhanh hơn và giảm notification fatigue.",
    "value": "Tăng engagement với các sự kiện quan trọng (giao dịch, ưu đãi hết hạn), giảm churn từ missed opportunities.",
    "gate": "Đo open rate, CTA click rate per type, settings change rate và unsubscribe rate.",
    "src": "demos/notification-center.html",
    "address": "web-momo-prototype.vercel.app/notifications"
  },
  {
    "id": "phat-nguoi",
    "name": "Phạt Nguội",
    "category": "Platform",
    "ownerGroup": "Cell Team",
    "maturity": "Hub",
    "description": "Hub Phạt Nguội toàn quốc: lookup biển số, định tuyến theo nhu cầu, directory tỉnh/thành và internal link tới Giải đáp, Nộp phạt cùng các Location Detail.",
    "jtbd": "Tra cứu vi phạm theo biển số và đi tiếp đến đúng hướng dẫn hoặc địa phương cần xử lý",
    "northStar": "Lookup completion rate",
    "loop": "Search → Hub lookup → Location/Guide → Result → App",
    "hypothesis": "Một Hub chung giữ utility và nội dung toàn quốc, còn Location Detail chỉ giữ context địa phương sẽ tạo kiến trúc dễ mở rộng và tránh trùng nội dung giữa các tỉnh thành.",
    "value": "Content model Hub + Location Detail có thể nhân rộng theo địa phương, đồng thời giữ Giải đáp và Nộp phạt như các content hub chuyên biệt.",
    "gate": "Đo lookup completion, location selection, child-page CTR, result engagement và Web-to-App conversion.",
    "src": "demos/phat-nguoi.html",
    "address": "web-momo-prototype.vercel.app/phat-nguoi",
    "tools": [
      {
        "id": "phat-nguoi-ha-noi",
        "name": "Phạt Nguội Hà Nội",
        "category": "Location Detail",
        "description": "Child-page đầu tiên của template Location: lookup dùng chung và content riêng về biển số, khu vực, quy trình xử lý tại Hà Nội.",
        "jtbd": "Tra cứu và hiểu cách xử lý vi phạm được ghi nhận tại Hà Nội",
        "src": "demos/phat-nguoi-ha-noi.html",
        "address": "web-momo-prototype.vercel.app/phat-nguoi/ha-noi"
      },
      {
        "id": "phat-nguoi-giai-dap",
        "name": "Phạt Nguội Giải Đáp",
        "category": "Content Hub",
        "maturity": "GEO",
        "description": "Hub Q&A Directory và Quiz Center cho cluster Phạt Nguội. Mỗi câu hỏi người dùng là một child page trả lời trực tiếp, hỗ trợ internal link và AI Citation.",
        "jtbd": "Khám phá câu trả lời theo tình huống hoặc kiểm tra hiểu biết về phạt nguội tại một thư viện tập trung",
        "northStar": "AI Citation Rate trên nhóm câu hỏi mục tiêu",
        "loop": "User Prompt → Q&A Hub → Child Answer → Quiz / App",
        "hypothesis": "Kiến trúc Hub và child Q&A giúp câu trả lời dễ tìm, dễ mở rộng và có ngữ cảnh rõ hơn một trang FAQ tổng hợp.",
        "value": "Content Hub chuyên biệt nằm trong dự án Phạt Nguội, bổ sung lớp giải đáp cho utility lookup và Location Detail.",
        "gate": "Đo child-page CTR, quiz completion, AI Citation Rate và Web-to-App conversion.",
        "src": "demos/phat-nguoi-giai-dap.html",
        "address": "web-momo-prototype.vercel.app/phat-nguoi/giai-dap",
        "tools": [
          {
            "id": "phat-nguoi-nop-qua-momo",
            "name": "Cách nộp phạt qua MoMo",
            "category": "Q&A Detail",
            "description": "Child Q&A đầu tiên: trả lời trực tiếp khả năng nộp phạt qua MoMo, hướng dẫn từng bước, so sánh kênh và CTA thực thi.",
            "jtbd": "Hiểu rõ cách nộp phạt qua MoMo và thực hiện ngay trong cùng một phiên",
            "src": "demos/phat-nguoi-nop-qua-momo.html",
            "address": "web-momo-prototype.vercel.app/phat-nguoi/giai-dap/nop-qua-momo"
          }
        ]
      }
    ]
  }
];

export const GROUP_ORDER = [
  "MiniWeb",
  "MoSpark",
  "Widget",
  "Platform",
  "Other"
] as const;

export const GROUP_LABEL: Record<string, string> = {
  "MoSpark": "MoSpark Platform",
  "MiniWeb": "Mini Web Overview",
  "Widget": "Widget Store",
  "Platform": "PLG Project",
  "Other": "Other"
};

export const GROUP_ITEM_ORDER: Record<string, string[]> = {
  "MoSpark": [
    "orchestrator",
    "genai-image",
    "agentic-hub",
    "supabase-editor",
    "blog-category",
    "blog-editor",
    "merchant-page-builder",
    "ads-manager",
    "seo-geo-dashboard",
    "seo-geo-project",
    "seo-geo-score",
    "chatbot",
    "merchant-list"
  ],
  "MiniWeb": [
    "mini-web-overview"
  ],
  "Widget": [
    "widget-store",
    "financial",
    "payments",
    "scam-check"
  ],
  "Platform": [
    "phat-nguoi",
    "esim-du-lich",
    "cinema",
    "merchant",
    "dich-vu-cong"
  ],
  "Other": [
    "worldcup",
    "universal-search",
    "onboarding",
    "dashboard",
    "search",
    "notification-center"
  ]
};

export const GROUP_SUMMARY: Record<string, { eyebrow: string; title: string; description: string; examples: string }> = {
  "MoSpark": {
    "eyebrow": "MoSpark Platform",
    "title": "MoSpark Platform",
    "description": "Chia thành 3 cụm: GenAI (năng lực tạo sinh & orchestration), Database (data layer & content tools), Modules (bề mặt vận hành & tăng trưởng).",
    "examples": "GenAI: Orchestrator · Agentic Hub | Database: Supabase · Blog · Merchant Builder | Modules: Ads · SEO/GEO"
  },
  "MiniWeb": {
    "eyebrow": "Mini Web Overview",
    "title": "Mini Web Overview",
    "description": "Inventory toàn bộ MiniWeb trên momo.vn, có thể lọc theo Division, Use Case và Page Type.",
    "examples": "113 MiniWeb thuộc 6 Division và 50 Use Case"
  },
  "Widget": {
    "eyebrow": "Widget Store",
    "title": "Widget Store",
    "description": "Nhóm tool và lookup ngắn để Dev implement nhanh, rõ input, output và trạng thái an toàn.",
    "examples": "Financial (18 tools) · Billpay (Điện · Nước · Internet · Metro) · Scam check"
  },
  "Other": {
    "eyebrow": "Other",
    "title": "Other",
    "description": "Prototype theo sự kiện mùa vụ hoặc không thuộc nhóm platform, widget hay PLG.",
    "examples": "World Cup 2026 Predictor"
  },
  "Platform": {
    "eyebrow": "PLG Project",
    "title": "PLG Project",
    "description": "Cell Team triển khai các use case theo ngành hàng; Web Platform xây các surface dùng chung cho Merchant và Search.",
    "examples": "Cell Team: Phạt Nguội · eSIM · Cinema | Web Platform: Search · Merchant Discovery · Merchant"
  }
};

export const CAT_COLOR: Record<string, { bg: string; text: string }> = {
  "MoSpark": {
    "bg": "#fff0f7",
    "text": "#a50064"
  },
  "MiniWeb": {
    "bg": "#eef2ff",
    "text": "#4338ca"
  },
  "Widget": {
    "bg": "#eff6ff",
    "text": "#1d4ed8"
  },
  "Platform": {
    "bg": "#f0f9ff",
    "text": "#0369a1"
  },
  "Credit": {
    "bg": "#eff6ff",
    "text": "#1d4ed8"
  },
  "Insurance": {
    "bg": "#f0fdf4",
    "text": "#15803d"
  },
  "Savings": {
    "bg": "#ecfeff",
    "text": "#0e7490"
  },
  "Tax": {
    "bg": "#fff7ed",
    "text": "#c2410c"
  },
  "Investment": {
    "bg": "#faf5ff",
    "text": "#7c3aed"
  },
  "Planning": {
    "bg": "#f8fafc",
    "text": "#475569"
  },
  "FX": {
    "bg": "#f0f9ff",
    "text": "#0369a1"
  },
  "Agentic": {
    "bg": "#f5f3ff",
    "text": "#6d28d9"
  },
  "Identity": {
    "bg": "#fdf2f8",
    "text": "#9d174d"
  },
  "Growth": {
    "bg": "#f0fdf4",
    "text": "#166534"
  },
  "Monetization": {
    "bg": "#fff7ed",
    "text": "#c2410c"
  },
  "Discovery": {
    "bg": "#fffbeb",
    "text": "#b45309"
  },
  "Engagement": {
    "bg": "#f5f3ff",
    "text": "#6d28d9"
  },
  "Transit": {
    "bg": "#eef2ff",
    "text": "#4338ca"
  },
  "Location Detail": {
    "bg": "#eff6ff",
    "text": "#1d4ed8"
  },
  "Service Guide": {
    "bg": "#ecfdf3",
    "text": "#067647"
  },
  "Content Hub": {
    "bg": "#faf5ff",
    "text": "#7c3aed"
  },
  "Q&A Detail": {
    "bg": "#fff0f7",
    "text": "#a50064"
  },
  "Other": {
    "bg": "#f1f5f9",
    "text": "#475569"
  },
  "Destination": {
    "bg": "#fff0f7",
    "text": "#a50064"
  },
  "Child Page": {
    "bg": "#fff0f7",
    "text": "#a50064"
  }
};

// ─── Helper: lấy đường dẫn demo gốc ──────────────────────────────────────────
export function getDemoSrc(proto: Prototype | PrototypeTool): string {
  if (proto.src) return `/${proto.src}`;
  return `/demos/${proto.id}.html`;
}

// ─── Helper: tìm prototype hoặc tool theo ID (đệ quy) ─────────────────────────
export function findPrototypeById(id: string): Prototype | PrototypeTool | undefined {
  function search(items: (Prototype | PrototypeTool)[]): Prototype | PrototypeTool | undefined {
    for (const item of items) {
      if (item.id === id) return item;
      if (item.tools && item.tools.length > 0) {
        const found = search(item.tools);
        if (found) return found;
      }
    }
    return undefined;
  }
  return search(PROTOTYPES);
}

// ─── Helper: lấy mảng phẳng toàn bộ IDs (cha + con) ──────────────────────────
export function getAllPrototypeIds(): string[] {
  const ids: string[] = [];
  function collect(items: (Prototype | PrototypeTool)[]) {
    for (const item of items) {
      ids.push(item.id);
      if (item.tools && item.tools.length > 0) {
        collect(item.tools);
      }
    }
  }
  collect(PROTOTYPES);
  return ids;
}

// ─── Helper: nhóm prototypes theo category đúng thứ tự ─────────────────────
export function getGroupedPrototypes() {
  const byCategory = new Map<string, Prototype[]>();
  PROTOTYPES.forEach((p) => {
    const list = byCategory.get(p.category) || [];
    list.push(p);
    byCategory.set(p.category, list);
  });

  return GROUP_ORDER.map((groupName) => {
    const items = byCategory.get(groupName) || [];
    const order = GROUP_ITEM_ORDER[groupName] || [];
    // Sắp xếp theo thứ tự đã định
    items.sort((a, b) => {
      const ai = order.indexOf(a.id);
      const bi = order.indexOf(b.id);
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    });
    return {
      name: groupName,
      label: GROUP_LABEL[groupName] || groupName,
      summary: GROUP_SUMMARY[groupName],
      items,
      color: CAT_COLOR[groupName] || CAT_COLOR.Other,
    };
  });
}
