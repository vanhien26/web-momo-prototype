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
    name: 'Utilities Tool',
    category: 'Widget',
    utilitiesPage: true,
    maturity: 'Interactive',
    description: 'Biến search intent thành hệ MoMo Widget đa dạng cho nhiều industry, từ utility, mô phỏng đến trải nghiệm tương tác có thể nhúng.',
    jtbd: 'Tính nhanh, hiểu rõ, hành động ngay',
    northStar: 'Qualified tool completion',
    loop: 'Search → Utility → App',
    hypothesis: 'Interactive utility tạo information gain tốt hơn content thuần và thu tín hiệu intent có giá trị cho funnel Web-to-App.',
    value: 'Mở rộng bề mặt acquisition và activation bằng các widget có thể tái sử dụng qua nhiều industry và entry point.',
    gate: 'Đo completion rate, CTA CTR, Web-to-App conversion và chất lượng traffic theo từng utility.',
    src: '/utilities-tool',
    address: 'web-momo-prototype.vercel.app/utilities-tool',
    tools: [
      { id: 'vay-nhanh',       name: 'Vay Nhanh',          category: 'Credit',     description: 'Ước tính số tiền trả hằng tháng theo số tiền vay, lãi suất và kỳ hạn.',               jtbd: 'Biết trước gánh nặng tài chính trước khi vay' },
      { id: 'tra-gop',         name: 'Trả Góp Ví Trả Sau', category: 'Credit',     description: 'Ước tính số tiền thanh toán hằng kỳ khi chuyển đổi trả góp dư nợ hoặc giao dịch qua Ví Trả Sau MoMo.', jtbd: 'Biết số tiền gốc và phí trả mỗi tháng qua Ví Trả Sau để cân đối chi tiêu.' },
      { id: 'vay-mua-nha',     name: 'Vay Mua Nhà',        category: 'Credit',     description: 'Ước tính khoản vay mua nhà, số tiền trả hàng tháng, tổng lãi và áp lực DTI sau khi vay.', jtbd: 'Biết mình vay mua nhà được bao nhiêu và trả mỗi tháng ra sao' },
      { id: 'dieu-kien-vay-mua-nha', name: 'Điều Kiện Vay Mua Nhà', category: 'Credit', description: 'Pre-check khả năng vay mua nhà theo thu nhập, vốn tự có và hệ số DTI.', jtbd: 'Biết hồ sơ có đủ điều kiện vay sơ bộ trước khi gặp ngân hàng' },
      { id: 'lai-the-tin-dung', name: 'Lãi Thẻ Tín Dụng', category: 'Credit', description: 'Ước tính lãi thẻ tín dụng nếu chỉ trả tối thiểu và số tiền cần trả để dứt nợ nhanh hơn.', jtbd: 'Biết cái giá của việc trả tối thiểu và cách thoát nợ thẻ' },
      { id: 'cic-score',       name: 'CIC Score',          category: 'Credit',     description: 'Mô phỏng điểm tín dụng CIC theo các yếu tố thanh toán, sử dụng hạn mức và lịch sử.', jtbd: 'Biết điểm CIC hiện tại và cách cải thiện' },
      { id: 'cic-stimulator',  name: 'CIC Stimulator',     category: 'Credit',     description: 'Mô phỏng tác động của các hành động tài chính đến điểm CIC theo thời gian.',        jtbd: 'Lên kế hoạch cải thiện điểm CIC trước khi vay' },
      { id: 'net-worth',       name: 'Giá Trị Tài Sản Ròng', category: 'Financial Health', description: 'Tổng hợp tài sản và nghĩa vụ nợ để tính giá trị tài sản ròng tại một thời điểm.', jtbd: 'Biết vị thế tài chính ròng để ưu tiên tăng tài sản hoặc giảm nợ' },
      { id: 'dti',             name: 'Tỷ Lệ Nợ Trên Thu Nhập', category: 'Financial Health', description: 'Tính tỷ lệ thu nhập gộp hàng tháng đang dùng để thanh toán các nghĩa vụ nợ.', jtbd: 'Đánh giá áp lực nợ trước khi cân nhắc vay thêm' },
      { id: 'debt-payoff',     name: 'Kế Hoạch Trả Nợ', category: 'Financial Health', description: 'So sánh chiến lược Avalanche và Snowball khi trả nhiều khoản nợ.', jtbd: 'Chọn thứ tự trả nợ và biết thời gian hoàn tất kế hoạch' },
      { id: 'bao-hiem-o-to',   name: 'Bảo Hiểm Ô Tô',     category: 'Insurance',  description: 'Mô phỏng phí bảo hiểm ô tô theo giá trị xe và tỷ lệ phí.',                          jtbd: 'Ước tính phí bảo hiểm trước khi quyết định mua' },
      { id: 'bhxh',            name: 'BHXH',               category: 'Insurance',  description: 'Mô phỏng tổng đóng BHXH dựa trên mức lương và số tháng tham gia.',                  jtbd: 'Hiểu quyền lợi BHXH để quyết định đóng tự nguyện' },
      { id: 'luong-huu',       name: 'Lương Hưu',          category: 'Insurance',  description: 'Ước tính lương hưu hàng tháng theo số năm đóng BHXH, giới tính và mức bình quân lương.', jtbd: 'Biết trước lương hưu để lập kế hoạch nghỉ hưu' },
      { id: 'bhxh-1-lan',      name: 'BHXH 1 Lần',         category: 'Insurance',  description: 'Ước tính số tiền nhận BHXH một lần theo Điều 70 Luật BHXH 2024: 1,5 tháng MBQTL/năm trước 2014, 2 tháng/năm từ 2014, auto trượt giá CPI.', jtbd: 'Cân nhắc rút BHXH một lần hay giữ tiếp để lương hưu' },
      { id: 'tro-cap-that-nghiep', name: 'Trợ Cấp Thất Nghiệp', category: 'Insurance', description: 'Ước tính mức hưởng và thời gian nhận trợ cấp thất nghiệp theo lương đóng và số tháng tham gia.', jtbd: 'Biết mình được nhận bao nhiêu và trong bao lâu khi nghỉ việc' },
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
      { id: 'kieu-hoi',        name: 'Kiều Hối',           category: 'FX',         description: 'So sánh phí và tỷ giá của 5 kênh chuyển tiền quốc tế (MoMo, Wise, Western Union, Remitly, NH) theo corridor VN → US/AU/KR/JP/DE/TW.', jtbd: 'Biết người nhận thực nhận bao nhiêu và chọn kênh chuyển tiền tốt nhất' },
      { id: 'quy-du-phong',    name: 'Quỹ Dự Phòng',      category: 'Financial Health', description: 'Lập mục tiêu quỹ khẩn cấp theo chi tiêu, thời gian hoàn thành và lạm phát dự kiến.', jtbd: 'Xác định đúng mức quỹ dự phòng cần tích lũy' },
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
    id: 'ota',
    name: 'OTA · Du lịch Quốc tế',
    category: 'Platform',
    ownerGroup: 'Cell Team',
    maturity: 'Interactive',
    description: 'Dự án OTA của Cell Team: toàn bộ travel funnel từ khám phá điểm đến → đặt vé bay → đặt khách sạn → mua eSIM → thanh toán QR quốc tế. Tập trung vào Thái Lan giai đoạn v1.',
    jtbd: 'Lập kế hoạch và hoàn tất toàn bộ chuyến du lịch quốc tế từ một nơi duy nhất',
    northStar: 'Web-to-App conversion rate across travel funnel (flight + hotel + eSIM bundle)',
    loop: 'Điểm Đến → Country Hub → Vé Bay / Khách Sạn / eSIM / QR → App MoMo',
    hypothesis: 'Gộp toàn bộ travel surface trong một dự án Cell Team cho phép cross-sell tự nhiên: user xem vé bay → cross-sell eSIM → cross-sell QR Roaming.',
    value: 'Acquisition platform cho Cell Team OTA: SEO intent từ nhiều query (vé bay, khách sạn, esim, tỷ giá) đều dẫn về cùng một funnel.',
    gate: 'Đo funnel completion rate (bao nhiêu user đi từ điểm đến đến ít nhất 1 W2A action), cross-sell rate eSIM/QR per flight session.',
    src: 'demos/diem-den.html',
    address: 'web-momo-prototype.vercel.app/diem-den',
    tools: [
      {id:'diem-den',        name:'Điểm Đến Du Lịch',      category:'Hub Page',    description:'Landing hub danh sách điểm đến. Filter theo khu vực, tìm kiếm, country card với giá vé từ.', jtbd:'Khám phá và chọn điểm đến quốc tế phù hợp', src:'demos/diem-den.html',            address:'web-momo-prototype.vercel.app/diem-den'},
      {id:'destination-hub', name:'Du lịch Thái Lan',       category:'Country Hub', description:'Hub Thái Lan: 4 tabs Vé bay / Khách sạn / eSIM / Thanh toán QR. Cross-sell banner eSIM sau flight cards.', jtbd:'Xem toàn bộ thông tin và đặt cho chuyến đi Thái', src:'demos/destination-hub.html?country=thai-lan', address:'web-momo-prototype.vercel.app/destination-hub?country=thai-lan'},
      {id:'ve-may-bay',      name:'Vé Máy Bay',              category:'Commerce',    description:'Tìm kiếm vé bay quốc tế: search form, filter sidebar, flight cards với đủ thông tin hãng/giờ/hành lý.', jtbd:'So sánh và chọn vé máy bay phù hợp', src:'demos/ve-may-bay.html',          address:'web-momo-prototype.vercel.app/ve-may-bay'},
      {id:'khach-san',       name:'Khách Sạn',               category:'Commerce',    description:'Tìm kiếm khách sạn quốc tế: city tabs, filter sao/giá, hotel cards, combo banner vé bay + khách sạn.', jtbd:'Tìm và đặt khách sạn phù hợp tại điểm đến', src:'demos/khach-san.html',          address:'web-momo-prototype.vercel.app/khach-san'},
      {id:'ty-gia',          name:'Tỷ Giá Ngoại Tệ',        category:'PLG Tool',    description:'Calculator quy đổi ngoại tệ, bảng tỷ giá 8 đồng tiền, so sánh phí MoMo 0% vs thẻ tín dụng 3.5%.', jtbd:'Biết tiết kiệm bao nhiêu khi dùng MoMo thay thẻ ở nước ngoài', src:'demos/ty-gia.html',   address:'web-momo-prototype.vercel.app/ty-gia'},
      {id:'thanh-toan-quoc-te', name:'Thanh Toán QR Quốc Tế', category:'Guide',    description:'Hướng dẫn QR Roaming theo quốc gia: PromptPay (Thái), NETS/PayNow (SG), PayPay (NHật), Kakao (Hàn). Coverage 12 quốc gia.', jtbd:'Hiểu cách dùng QR MoMo tại điểm đến và kích hoạt trước khi đi', src:'demos/thanh-toan-quoc-te.html', address:'web-momo-prototype.vercel.app/thanh-toan-quoc-te'},
    ],
  },
  {
    id: 'merchant',
    name: 'Merchant',
    category: 'Platform',
    ownerGroup: 'Web Platform',
    maturity: 'Hub',
    description: 'Hub Merchant của MoMo - tổng hợp các merchant chấp nhận Ví Trả Sau, phân nhóm theo bối cảnh và dẫn sang Merchant Discovery hoặc Merchant Detail khi user cần xem sâu hơn.',
    jtbd: 'Xem nhanh danh sách merchant có Ví Trả Sau theo nhu cầu và chọn nơi phù hợp',
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
      {
        id: 'vts-merchant-finder',
        name: 'Listing Merchant Page',
        category: 'Sub-page',
        description: 'Listing Merchant Page — tổng hợp merchant có Ví Trả Sau theo địa điểm (mall, chợ, khu vực). Template data-driven: zone filter tự ẩn/hiện theo location_type. Demo: Crescent Mall với 5 tầng, 25 merchants, 34 tỉnh/TP từ vietnamese-provinces-database.',
        jtbd: 'Biết ngay merchant nào tại địa điểm này nhận Ví Trả Sau và hoàn tiền bao nhiêu',
        src: 'demos/vts-merchant-finder.html',
        address: 'web-momo-prototype.vercel.app/listing-merchant-page',
      },
    ],
  },
  {
    id: 'cinema',
    name: 'Cinema',
    category: 'Platform',
    ownerGroup: 'Cell Team',
    maturity: 'PLG Page',
    description: 'Trang chủ Cinema momo.vn/cinema — SEO/organic entry point. Gồm hero film, film grid 2-col dạng ticket stub, genre filter, coming soon, rạp gần bạn và PLG block.',
    jtbd: 'Browse phim đang chiếu, nhận cashback, chọn rạp và mua vé nhanh qua MoMo',
    northStar: 'Film card click-through → ticket purchase',
    loop: 'Organic search → Film browse → Pick film → Showtime → Mua vé',
    hypothesis: 'Ticket stub card design tích hợp cashback benefit ngay trên poster tăng intent mua vé so với card thông thường.',
    value: 'SEO entry point cho toàn bộ Cinema use case — organic traffic 1M/quý. PLG hook: cashback gắn mỗi film card.',
    gate: 'Film card CTR, genre filter usage, coming soon notify rate, cinema row click.',
    src: 'demos/cinema.html',
    address: 'web-momo-prototype.vercel.app/cinema',
    tools: [
      {
        id: 'cinema-film-detail',
        name: 'Film Detail',
        category: 'Film Detail',
        ownerGroup: 'Cell Team',
        maturity: 'Detail Page',
        description: 'Film Detail page cho MoMo Cinema tập trung vào Supergirl: poster, rating, casting, cụm rạp, showtime tactics, seat popup, popcorn popup và payment popup.',
        jtbd: 'Chọn suất chiếu, giữ ghế, thêm bắp nước và thanh toán nhanh',
        northStar: 'Ticket purchase completion',
        loop: 'Film detail → Showtime → Seat popup → Popcorn popup → Payment',
        hypothesis: 'Đặt vé theo chuỗi popup ngắn giảm ma sát so với campaign flow và giúp user đi thẳng tới checkout.',
        value: 'Trang detail bám intent đặt vé, dẫn người dùng từ film overview tới seat, snack và payment trong một luồng rõ ràng.',
        gate: 'Đo showtime CTR, seat selection, snack attach rate và payment completion.',
        src: 'demos/cinema-film-detail.html',
        address: 'web-momo-prototype.vercel.app/cinema/supergirl-24851',
      },
      {
        id: 'cinema-chain',
        name: 'Trang Hệ Thống Rạp',
        category: 'Chain Page',
        ownerGroup: 'Cell Team',
        maturity: 'Detail Page',
        description: 'Trang hệ thống rạp (e.g. /cinema/cgv) — brand hero với màu riêng, lịch chiếu phim, danh sách rạp theo thành phố, định dạng chiếu, membership block.',
        jtbd: 'Khám phá toàn bộ rạp trong một chuỗi, so sánh định dạng, chọn ngày và tìm suất chiếu phù hợp',
        northStar: 'Theater card click → Theater detail page',
        loop: 'Chain landing → Film schedule → Theater list → Theater detail',
        hypothesis: 'Brand-colored chain page tạo trust và giúp user lọc nhanh theo chuỗi rạp ưa thích thay vì scroll toàn bộ rạp.',
        value: 'SEO target cho branded query "rạp CGV", "lịch chiếu Lotte Cinema" — 11 chains × N thành phố.',
        gate: 'Theater card CTR, date strip usage, city tab filter rate.',
        src: 'demos/cinema-chain.html',
        address: 'web-momo-prototype.vercel.app/cinema/cgv',
      },
      {
        id: 'cinema-theater',
        name: 'Trang Rạp Chi Tiết',
        category: 'Theater Page',
        ownerGroup: 'Cell Team',
        maturity: 'Detail Page',
        description: 'Trang rạp chi tiết (e.g. /cinema/cgv/cgv-crescent-mall) — hero stats, lịch chiếu 6 phim với format tabs + showtime pills, thông tin + map, rạp lân cận, LocalBusiness schema.',
        jtbd: 'Xem toàn bộ lịch chiếu tại một rạp cụ thể, chọn phim + suất giờ + format và đặt vé ngay',
        northStar: 'Showtime pill click → Film detail → Ticket purchase',
        loop: 'Theater landing → Pick film → Pick format → Pick showtime → Film detail',
        hypothesis: 'Format tabs per film (2D / 3D / IMAX) trên theater page giảm click so với filter riêng biệt.',
        value: 'SEO target "CGV Crescent Mall lịch chiếu", LocalBusiness schema tăng rich result trên Google Maps.',
        gate: 'Film card CTR, showtime pill click, format tab switch rate, nearby theater click.',
        src: 'demos/cinema-theater.html',
        address: 'web-momo-prototype.vercel.app/cinema/cgv/cgv-crescent-mall',
      },
      {
        id: 'cinema-genres',
        name: 'Thể loại - Index',
        category: 'Genre Index',
        ownerGroup: 'Cell Team',
        maturity: 'Index Page',
        description: 'Trang liệt kê tất cả thể loại phim (/cinema/genres) — featured genres, sort controls, genre grid với poster strip, count badges, sub-genre chips.',
        jtbd: 'Browse tất cả thể loại phim, so sánh nhanh và chọn thể loại phù hợp',
        northStar: 'Genre card click → genre detail page → film card → ticket purchase',
        src: 'demos/cinema-genres.html',
        address: 'web-momo-prototype.vercel.app/cinema/genres',
      },
      {
        id: 'cinema-director',
        name: 'Đạo diễn',
        category: 'Director Page',
        ownerGroup: 'Cell Team',
        maturity: 'Detail Page',
        description: 'Trang profile đạo diễn (e.g. /cinema/director/christopher-nolan) — avatar, bio, stats, awards, filmography tabs: Đang chiếu / Sắp chiếu / Đã chiếu.',
        jtbd: 'Tìm phim của đạo diễn yêu thích, xem lịch chiếu và đặt vé ngay',
        northStar: 'Film card click → ticket purchase',
        loop: 'Search đạo diễn → Director page → Film grid → Film detail → Đặt vé',
        hypothesis: 'Trang đạo diễn tập hợp toàn bộ phim đang chiếu của một tên tuổi giúp fan movie không bỏ sót và tăng CTR sang film detail.',
        value: 'SEO target branded query "phim của Christopher Nolan", "phim Trấn Thành đang chiếu" — high-intent filmmaker search.',
        gate: 'Tab switch rate, film card CTR, ticket CTA click per director.',
        src: 'demos/cinema-director.html',
        address: 'web-momo-prototype.vercel.app/cinema/director/christopher-nolan',
      },
      {
        id: 'cinema-actor',
        name: 'Diễn viên',
        category: 'Actor Page',
        ownerGroup: 'Cell Team',
        maturity: 'Detail Page',
        description: 'Trang profile diễn viên (e.g. /cinema/actor/tran-thanh) — avatar, bio, stats, Known For strip, role badge per film, filmography tabs.',
        jtbd: 'Tìm phim của diễn viên yêu thích, xem vai diễn và đặt vé ngay',
        northStar: 'Film card click → ticket purchase',
        loop: 'Search diễn viên → Actor page → Known For → Film grid → Film detail → Đặt vé',
        hypothesis: '"Known For" poster strip ngay dưới hero giúp user nhận ra diễn viên đúng và tăng trust trước khi scroll filmography.',
        value: 'SEO target "phim Trấn Thành 2025", "Kaity Nguyễn đang chiếu" — fan-driven search intent.',
        gate: 'Known For click rate, tab switch rate, film card CTR, role badge hover.',
        src: 'demos/cinema-actor.html',
        address: 'web-momo-prototype.vercel.app/cinema/actor/tran-thanh',
      },
      {
        id: 'cinema-genre',
        name: 'Thể loại phim',
        category: 'Genre Page',
        ownerGroup: 'Cell Team',
        maturity: 'Category Page',
        description: 'Trang phim theo thể loại (e.g. /cinema/genre/kinh-di) — header genre, filter format + sort, tabs Đang chiếu / Sắp chiếu / Tất cả, film grid + MoMo Score, Related genres.',
        jtbd: 'Browse phim trong thể loại yêu thích, lọc format và chọn suất chiếu',
        northStar: 'Film card click → ticket purchase',
        loop: 'Search thể loại → Genre page → Filter → Film card → Film detail → Đặt vé',
        hypothesis: 'Genre landing page với filter format và tab trạng thái (đang/sắp/tất cả) phục vụ nhóm user intent cao hơn homepage genre chip — tăng funnel depth.',
        value: 'SEO target "phim kinh dị đang chiếu", "phim hoạt hình 2025" — 8 genres × intent query volume.',
        gate: 'Format filter usage, tab switch rate, Related genre click, film card CTR.',
        src: 'demos/cinema-genre.html',
        address: 'web-momo-prototype.vercel.app/cinema/genre/kinh-di',
      },
    ],
  },
  {
    id: 'ads-manager',
    name: 'Ads Manager',
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
    id: 'widget-manager',
    name: 'Widget & Utilities Manager',
    category: 'MoSpark',
    maturity: 'Interactive',
    description: 'Màn vận hành để cấu hình Utilities Tool và quản lý Widget (Number Card, Content Card, Score Card): sửa CTA, disclaimer, field copy, title utility và tạo widget content.',
    jtbd: 'Quản trị nội dung và cấu hình widget mà không phải chỉnh trực tiếp source utility',
    northStar: 'Widget config publish readiness',
    loop: 'Chọn widget → Cập nhật copy / CTA → Preview → Lưu draft',
    hypothesis: 'Tách widget operations khỏi ads campaign flow giúp team vận hành widget nhanh hơn và giảm nhầm lẫn giữa inventory ads với inventory widget.',
    value: 'Tạo lớp CMS nhẹ cho Utilities Tool và các Widget (Number/Content/Score Card) để team PLG hoặc vận hành có thể cập nhật nhanh copy phân phối.',
    gate: 'Đo số widget được cấu hình, thời gian cập nhật copy, tỷ lệ draft-to-publish và độ nhất quán CTA / disclaimer.',
    src: '/widget-manager',
    address: 'web-momo-prototype.vercel.app/widget-manager',
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
    name: 'PLG Project Hub',
    category: 'MoSpark',
    maturity: 'Interactive',
    description: 'Tổng hành dinh quản lý PLG Project: cây Topic → Cluster → Keyword 3 tầng, Keyword Registry với quy tắc 1-1 anti-cannibalization, Business Context 12 trường làm nguồn sự thật cho GenAI content, và kick-off sản xuất nội dung.',
    jtbd: 'Quản lý toàn bộ Use Case, Cluster và Keyword trong một surface - không bỏ sót, không trùng lặp',
    northStar: 'Use case coverage rate và keyword uniqueness index',
    loop: 'Use Case → Cluster → Keyword → Business Context → GenAI Content',
    hypothesis: 'Tập trung quản lý keyword trong một registry duy nhất với quy tắc 1 keyword = 1 URL sẽ loại bỏ cannibalization và tạo nền tảng vững cho content production quy mô lớn.',
    value: 'Single source of truth cho toàn bộ PLG Project portfolio: SoV per use case, funnel TOFU/MOFU/BOFU, Business Context đủ 12 trường là gate bắt buộc trước khi GenAI sản xuất.',
    gate: 'Đo use case coverage (% có keyword đầy đủ), Business Context completeness rate, keyword uniqueness index và GenAI kickoff rate per cluster.',
    src: '/plg-project',
    address: 'web-momo-prototype.vercel.app/plg-project',
  },
  {
    id: 'merchant-page-builder',
    name: 'Merchant Page Manager',
    category: 'MoSpark',
    maturity: 'Interactive',
    description: 'Quản lý Merchant record đã được khởi tạo từ PLG Content Plan: liên kết Merchant ID, enrich dữ liệu, kiểm tra Overview rồi mở Editor cho Logo, GenAI Content, Banner AI, Internal Links và Information Display.',
    jtbd: 'Hoàn thiện Merchant record và page content từ một Merchant đã có sẵn trong Content Plan',
    northStar: 'Verified Merchant Page draft completion',
    loop: 'Merchant List → Edit → Sync Merchant ID → Overview → Edit Content',
    hypothesis: 'Giữ SEO context từ Content Plan xuyên suốt Builder sẽ giảm nhập lại keyword, tránh sai mapping và tăng tốc tạo Merchant Page.',
    value: 'Nối trực tiếp SEO planning với CMS authoring trên cùng data contract của Merchant.',
    gate: 'Đo tỷ lệ scan Merchant ID thành công, verify completion, editor completion và thời gian từ Create đến draft.',
    src: 'demos/merchant-page-builder.html',
    address: 'web-momo-prototype.vercel.app/merchant-page-builder',
  },
  {
    id: 'seo-geo-score',
    name: 'PLG Content Score',
    category: 'MoSpark',
    maturity: 'Governance Gate',
    description: 'Pre-publish scoring system kiểm tra Technical SEO, Content, GEO và Trust. Mỗi rule có evidence, mức độ ưu tiên và hành động sửa; backend Hard Gate bảo vệ domain trước nội dung chưa đạt chuẩn.',
    jtbd: 'Biết chính xác bài viết đã đủ điều kiện Publish chưa, lỗi nằm ở đâu và cần sửa gì trước',
    northStar: 'First-pass publish readiness rate',
    loop: 'Draft → Auto-score → Fix evidence → Governance Gate → Publish',
    hypothesis: 'Một score có evidence và rule theo JTBD giúp Editor sửa đúng lỗi nhanh hơn checklist nhị phân hoặc review thủ công.',
    value: 'Chuẩn hóa quality gate cho mọi page type mà không khuyến khích keyword stuffing, wordcount máy móc hoặc số liệu không nguồn.',
    gate: 'Đo pass rate lần đầu, hard-gate failure, time-to-fix, rule failure distribution và publish override attempt.',
    src: '/plg-score',
    address: 'web-momo-prototype.vercel.app/plg-score',
  },
  {
    id: 'universal-search',
    name: 'Universal Search',
    category: 'Other',
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
    category: 'Platform',
    ownerGroup: 'Cell Team',
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
    tools: [
      { id: 'bill-lookup', name: 'Tra Cứu Hóa Đơn', category: 'Sub-page', description: 'Tra cứu hóa đơn điện, nước, internet theo mã khách hàng hoặc số điện thoại.', jtbd: 'Biết số tiền cần nộp trước khi thanh toán', src: 'demos/bill-lookup.html', address: 'web-momo-prototype.vercel.app/bill-lookup' },
      { id: 'metro-ticket', name: 'Mua Vé Metro HCM', category: 'Sub-page', description: 'Mua vé Metro TP.HCM: chọn tuyến, ga đi/đến, loại vé, số lượng và nhận QR.', jtbd: 'Mua vé metro nhanh không cần xếp hàng tại ga', src: 'demos/metro-ticket.html', address: 'web-momo-prototype.vercel.app/metro-ticket' },
    ],
  },
  {
    id: 'utilities-flow',
    name: 'Utilities Flow',
    category: 'Widget',
    navTagline: 'Flow Hub',
    maturity: 'Hub Page',
    description: 'Trang chủ tập hợp các Utility Flow: Kế hoạch dòng tiền, Chi phí xe máy, Chi phí xe ô tô. Mỗi Flow là wizard 3 bước shared-state kết thúc bằng CTA W2A.',
    jtbd: 'Xem toàn bộ Flow đang có, chọn và bắt đầu ngay',
    src: 'demos/utilities-flow.html',
    address: 'web-momo-prototype.vercel.app/utilities-flow',
    tools: [
      { id: 'financial-flow',   name: 'Kế hoạch dòng tiền',    category: 'Planning', src: 'demos/financial-flow.html',   address: 'web-momo-prototype.vercel.app/financial-flow' },
      { id: 'chi-phi-xe-may',   name: 'Chi phí xe máy',         category: 'Planning', src: 'demos/chi-phi-xe-may.html',   address: 'web-momo-prototype.vercel.app/chi-phi-xe-may' },
      { id: 'chi-phi-xe-oto',   name: 'Chi phí xe ô tô',        category: 'Planning', src: 'demos/chi-phi-xe-oto.html',   address: 'web-momo-prototype.vercel.app/chi-phi-xe-oto' },
      { id: 'thoat-no-the',     name: 'Thoát nợ thẻ & trả góp', category: 'Planning', src: 'demos/thoat-no-the.html',     address: 'web-momo-prototype.vercel.app/thoat-no-the' },
      { id: 'ke-hoach-fire',    name: 'Kế hoạch FIRE',          category: 'Planning', src: 'demos/ke-hoach-fire.html',    address: 'web-momo-prototype.vercel.app/ke-hoach-fire' },
      { id: 'mua-hay-thue',     name: 'Mua hay Thuê nhà?',      category: 'Planning', src: 'demos/mua-hay-thue.html',     address: 'web-momo-prototype.vercel.app/mua-hay-thue' },
      { id: 'chi-phi-du-lich',  name: 'Chi phí du lịch',        category: 'Planning', src: 'demos/chi-phi-du-lich.html',  address: 'web-momo-prototype.vercel.app/chi-phi-du-lich' },
    ],
  },
  {
    id: 'scam-check',
    name: 'Scam Check',
    category: 'Other',
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
    id: 'news',
    name: 'News',
    category: 'Platform',
    ownerGroup: 'Web Platform',
    maturity: 'News Hub',
    description: 'News là dự án PLG của Web Platform cho thông tin mới, thông cáo, cập nhật sản phẩm và chiến dịch. Surface ưu tiên tính thời sự, newsroom feed, topic filters và CTA theo từng bản tin.',
    jtbd: 'Nắm nhanh thông tin mới từ MoMo và đi tiếp đến sản phẩm, chiến dịch hoặc bài viết liên quan.',
    northStar: 'News engagement -> product CTA conversion',
    loop: 'Browse News -> Filter Topic -> Read Update -> Follow CTA',
    hypothesis: 'Một News Hub tách khỏi Blog giúp nội dung thời sự không bị lẫn với bài evergreen, tăng khả năng quét tin nhanh và giảm nhiễu intent.',
    value: 'Tạo surface PLG riêng cho update chính thức, launch notes, campaign brief và thông cáo, phù hợp traffic cần thông tin mới.',
    gate: 'Đo news card CTR, topic filter usage, update read depth, product CTA conversion và return visits.',
    src: 'demos/news.html',
    address: 'web-momo-prototype.vercel.app/news',
    tools: [
      {
        id: 'news-detail',
        name: 'News Detail',
        category: 'Child Page',
        description: 'Trang detail cho newsroom update: hero, tóm tắt, thay đổi chính, related updates và CTA theo slug bản tin.',
        jtbd: 'Đọc bản tin chi tiết và chuyển ngay sang hành động hoặc surface liên quan.',
        src: 'demos/news-detail.html',
        address: 'web-momo-prototype.vercel.app/news/cinema-update',
      },
    ],
  },
  {
    id: 'blog-category',
    name: 'Blog',
    category: 'Platform',
    ownerGroup: 'Web Platform',
    maturity: 'Content Hub',
    description: 'Blog là dự án PLG của Web Platform theo mô hình Hub-and-Spoke: Category là parent project, Blog Article là child page front-end cho reader, và Blog Editor là child page back-end cho CMS authoring. Pattern Category -> Article/Editor giúp Dev và PO nhìn rõ lớp reader-facing và lớp vận hành nội dung.',
    jtbd: 'Khám phá nội dung evergreen theo danh mục Use Case, đọc bài chi tiết ở front-end, đồng thời quản trị draft và publish flow ở back-end trên cùng một project.',
    northStar: 'Blog category -> Article CTR + Article completion + publish throughput',
    loop: 'Browse Category -> Open Article -> Read/Convert -> Edit Draft -> Preview -> Publish',
    hypothesis: 'Gom front-end reader và back-end authoring vào cùng Blog project giúp team giữ chung content contract, giảm handoff rời rạc giữa content, SEO và Dev.',
    value: 'Tạo bề mặt nội dung 2 tầng cho SEO/GEO, đồng thời cho thấy rõ cặp child page front-end/back-end đang vận hành cùng một Blog architecture.',
    gate: 'Đo category filter usage, article CTR từ listing, scroll depth article, preview-to-publish rate và publish cycle time.',
    src: 'demos/blog-category.html',
    address: 'web-momo-prototype.vercel.app/mospark-blog',
    tools: [
      {
        id: 'blog',
        name: 'Blog Article',
        category: 'Front-end',
        description: 'Blog article child page ở lớp front-end: reader experience full-width với floating TOC, quiz tương tác, inline ads và progressive reading. Đây là bề mặt user-facing sau khi draft được publish từ CMS.',
        jtbd: 'Đọc bài chuyên sâu về chủ đề cụ thể, test hiểu biết qua quiz inline và chuyển sang dịch vụ MoMo nếu phù hợp.',
        src: 'demos/blog.html',
        address: 'web-momo-prototype.vercel.app/mospark-blog/phat-nguoi',
      },
      {
        id: 'blog-editor',
        name: 'Blog Editor (Tiptap)',
        category: 'Back-end',
        description: 'Child page ở lớp back-end cho CMS authoring: editor Tiptap để tạo, format, preview và publish draft sang Blog Article front-end trên cùng data contract.',
        jtbd: 'Soạn thảo và quản trị draft blog trực quan, sau đó preview và publish ra Blog Article mà không cần chạm HTML.',
        src: 'demos/blog-editor.html',
        address: 'web-momo-prototype.vercel.app/mospark-blog/editor',
      },
    ],
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
    id: 'mospark-activity-log',
    name: 'MoSpark Activity Log',
    category: 'MoSpark',
    navTagline: 'Ops Log',
    maturity: 'Interactive',
    description: 'Dashboard audit trail cho MoSpark: ghi lại create, update, remove trên Blog, PLG Project, News, Microsite và các project của Cell Team để team nhìn rõ ai đổi gì, ở đâu, khi nào.',
    jtbd: 'Theo dõi nhanh mọi thay đổi nội dung và truy vết đúng người phụ trách khi cần review hoặc rollback.',
    northStar: 'Time-to-trace change',
    loop: 'Capture event → Filter by surface → Inspect diff → Act',
    hypothesis: 'Một activity log tập trung giúp PM, content và ops phát hiện thay đổi bất thường nhanh hơn so với đọc từng hệ thống riêng lẻ.',
    value: 'Single audit surface cho toàn bộ MoSpark content ops, giảm thời gian tìm log và tăng độ tin cậy khi review release.',
    gate: 'Đo filter usage, trace completion, export rate và action-to-review time.',
    src: 'demos/mospark-activity-log.html',
    address: 'web-momo-prototype.vercel.app/mospark-activity-log',
  },
  {
    id: 'product-roadmap',
    name: 'Product Roadmap 2026',
    category: 'MoSpark',
    pinned: true,
    navTagline: 'Roadmap',
    maturity: 'Static',
    description: 'Roadmap các dự án Web Platform theo từng giai đoạn trong năm 2026 (H1, H2...), bắt đầu từ Phase 1 - Foundation & Core Builders đã hoàn thành trong H1/2026.',
    jtbd: 'Nắm nhanh module nào đã hoàn thành trong từng giai đoạn để báo cáo stakeholder hoặc lên kế hoạch phase tiếp theo.',
    northStar: 'Phase completion clarity',
    loop: 'Xem timeline → Chọn phase → Xem module → Expand chi tiết',
    hypothesis: 'Một timeline tập trung giúp team và stakeholder nắm tiến độ platform nhanh hơn so với đọc rời rạc từng báo cáo.',
    value: 'Single source of truth cho roadmap Web Platform, dùng chung cho báo cáo nội bộ và cập nhật stakeholder.',
    gate: 'Đo module expand rate và thời gian đọc hết 1 phase.',
    src: 'demos/product-roadmap.html',
    address: 'web-momo-prototype.vercel.app/product-roadmap',
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
    id: 'dich-vu-cong',
    name: 'Dịch Vụ Công',
    category: 'Platform',
    ownerGroup: 'Cell Team',
    maturity: 'Governance Hub',
    description: 'Knowledge và Governance Hub giúp người dùng tìm đúng thủ tục, kiểm tra điều kiện, tạo checklist hồ sơ và chuyển sang cổng chính thức để nộp hoặc theo dõi hồ sơ.',
    jtbd: 'Hiểu mình cần làm thủ tục nào, chuẩn bị gì và tiếp tục ở đâu mà không phải tự ghép thông tin từ nhiều nguồn',
    northStar: 'Qualified handoff rate đến đúng hướng dẫn hoặc cổng dịch vụ công chính thức',
    loop: 'Nhu cầu → Hướng dẫn → Checklist → Cổng chính thức → Theo dõi hồ sơ',
    hypothesis: 'Giải thích theo tình huống và chỉ rõ điểm chuyển giao giúp người dùng hoàn thành tác vụ tốt hơn một danh mục thủ tục hoặc bài viết thuần thông tin.',
    value: 'Tạo lớp điều hướng đáng tin cậy giữa nhu cầu tìm kiếm trên Web và hệ thống thực thi của cơ quan nhà nước.',
    gate: 'Đo search success, checklist completion, guide engagement, qualified handoff và return rate để tra cứu hồ sơ.',
    src: 'demos/dich-vu-cong.html',
    address: 'web-momo-prototype.vercel.app/dich-vu-cong',
    tools: [
      {id:'dvc-doi-gplx',name:'Đổi Bằng Lái Xe',category:'Service Guide',description:'Hướng dẫn theo trường hợp hết hạn, mất, hỏng hoặc đổi thông tin GPLX.',jtbd:'Biết mình thuộc trường hợp nào và chuẩn bị đúng hồ sơ trước khi nộp',src:'demos/doi-bang-lai-xe.html',address:'web-momo-prototype.vercel.app/dich-vu-cong/doi-bang-lai-xe'},
      {id:'dvc-cccd',name:'Cấp Đổi Căn Cước',category:'Service Guide',description:'Hướng dẫn theo tình huống hết hạn, mất thẻ hoặc thay đổi thông tin.',jtbd:'Làm đúng thủ tục căn cước theo tình trạng thực tế',src:'demos/gia-han-cccd.html',address:'web-momo-prototype.vercel.app/dich-vu-cong/cap-doi-can-cuoc'},
      {id:'dvc-ho-chieu',name:'Cấp Hộ Chiếu',category:'Service Guide',description:'Hướng dẫn cấp mới hoặc cấp lại hộ chiếu, từ điều kiện đến kênh thực hiện.',jtbd:'Chuẩn bị đủ thông tin và chọn đúng cách nộp hồ sơ hộ chiếu',src:'demos/lam-ho-chieu.html',address:'web-momo-prototype.vercel.app/dich-vu-cong/cap-ho-chieu'},
      {id:'dvc-khai-sinh',name:'Đăng Ký Khai Sinh',category:'Service Guide',description:'Hướng dẫn theo thời hạn, người thực hiện và tình trạng giấy tờ.',jtbd:'Đăng ký khai sinh đúng thời hạn và không thiếu giấy tờ',src:'demos/dang-ky-khai-sinh.html',address:'web-momo-prototype.vercel.app/dich-vu-cong/dang-ky-khai-sinh'},
      {id:'dvc-ket-hon',name:'Đăng Ký Kết Hôn',category:'Service Guide',description:'Phân biệt thủ tục trong nước và trường hợp có yếu tố nước ngoài.',jtbd:'Kiểm tra điều kiện và chuẩn bị đúng bộ hồ sơ kết hôn',src:'demos/dang-ky-ket-hon.html',address:'web-momo-prototype.vercel.app/dich-vu-cong/dang-ky-ket-hon'},
    ],
  },
  {
    id: 'onboarding',
    name: 'User Onboarding — Giới thiệu & Đăng ký',
    category: 'Other',
    ownerGroup: 'Web Platform',
    maturity: 'Interactive',
    description: 'Luồng onboarding 6 màn hướng dẫn người dùng mới hiểu MoMo: feature tour, social proof, download CTA và đăng ký số điện thoại với OTP.',
    jtbd: 'Hiểu MoMo làm được gì và bắt đầu ngay không mất công',
    northStar: 'Activation rate (register started)',
    loop: 'Discover → Educate → Register → Activate',
    hypothesis: 'Feature tour có visual rõ ràng + social proof giúp tăng tỷ lệ người mới hoàn thành đăng ký so với landing page dạng text truyền thống.',
    value: 'Tăng top-of-funnel conversion cho kênh web/paid, giảm churn ngay từ bước đầu tiên.',
    gate: 'Đo slide completion rate, CTA click rate, register started và OTP verify rate.',
    src: 'demos/onboarding.html',
    address: 'web-momo-prototype.vercel.app/welcome',
    tools: [
      { id: 'kyc', name: 'eKYC — Xác Minh Danh Tính', category: 'Sub-flow', description: 'Luồng xác minh danh tính nâng cấp tài khoản MoMo Tier 2: so sánh quyền lợi, chụp CCCD, selfie liveness và kết quả.', jtbd: 'Nâng cấp tài khoản để giao dịch không giới hạn, vay và đầu tư', src: 'demos/kyc.html', address: 'web-momo-prototype.vercel.app/ekyc' },
    ],
  },
  {
    id: 'dashboard',
    name: 'Dashboard Analytics',
    category: 'Other',
    ownerGroup: 'Web Platform',
    maturity: 'Interactive',
    description: 'Dashboard phân tích vận hành: KPI cards, line chart giao dịch/doanh thu, donut phân loại, bar chart kênh acquisition, heatmap hoạt động, funnel chuyển đổi, top services table.',
    jtbd: 'Nắm tình hình kinh doanh và phát hiện vấn đề từ một màn hình',
    northStar: 'Time-to-insight',
    loop: 'Monitor → Detect → Investigate → Act',
    hypothesis: 'Dashboard tổng hợp đa chiều giúp team ra quyết định nhanh hơn so với xem từng báo cáo rời rạc.',
    value: 'Tăng tốc độ phát hiện sự cố, tối ưu sản phẩm dựa trên data và giảm thời gian họp báo cáo định kỳ.',
    gate: 'Đo time-on-page, chart interaction rate, export rate, alert action rate.',
    src: 'demos/dashboard.html',
    address: 'web-momo-prototype.vercel.app/analytics',
  },
  {
    id: 'search',
    name: 'Search & Discovery',
    category: 'Other',
    ownerGroup: 'Web Platform',
    maturity: 'Interactive',
    description: 'Tìm kiếm dịch vụ với autocomplete, gợi ý, lịch sử, bộ lọc đa chiều (category, ưu đãi, rating), sort, pagination và highlight từ khoá.',
    jtbd: 'Tìm đúng dịch vụ cần ngay, không mất công lướt',
    northStar: 'Search-to-action rate',
    loop: 'Search → Filter → Find → Act',
    hypothesis: 'Autocomplete + filter sidebar giúp người dùng tìm đúng dịch vụ trong ít bước hơn, tăng tỷ lệ chuyển đổi so với danh sách duyệt thủ công.',
    value: 'Tăng discoverability cho danh mục dịch vụ dài, giảm churn do không tìm thấy sản phẩm.',
    gate: 'Đo search volume, query → result click rate, filter usage rate, zero-results rate.',
    src: 'demos/search.html',
    address: 'web-momo-prototype.vercel.app/search',
  },
  {
    id: 'notification-center',
    name: 'Notification Center',
    category: 'Other',
    ownerGroup: 'Web Platform',
    maturity: 'Interactive',
    description: 'Component thông báo đầy đủ: bell icon + badge counter + dropdown + trang danh sách + settings. 5 loại thông báo: giao dịch, ưu đãi, hệ thống, xã hội, tài chính.',
    jtbd: 'Không bỏ sót thông báo quan trọng, kiểm soát được loại nào muốn nhận',
    northStar: 'Notification open rate',
    loop: 'Receive → Open → Act → Return',
    hypothesis: 'Nhóm thông báo theo loại và cho phép filter giúp người dùng tìm thấy thông tin cần thiết nhanh hơn và giảm notification fatigue.',
    value: 'Tăng engagement với các sự kiện quan trọng (giao dịch, ưu đãi hết hạn), giảm churn từ missed opportunities.',
    gate: 'Đo open rate, CTA click rate per type, settings change rate và unsubscribe rate.',
    src: 'demos/notification-center.html',
    address: 'web-momo-prototype.vercel.app/notifications',
  },
  {
    id: 'phat-nguoi',
    name: 'Phạt Nguội',
    category: 'Platform',
    ownerGroup: 'Cell Team',
    maturity: 'Hub',
    description: 'Hub Phạt Nguội toàn quốc: lookup biển số, định tuyến theo nhu cầu, directory tỉnh/thành và internal link tới Giải đáp, Nộp phạt cùng các Location Detail.',
    jtbd: 'Tra cứu vi phạm theo biển số và đi tiếp đến đúng hướng dẫn hoặc địa phương cần xử lý',
    northStar: 'Lookup completion rate',
    loop: 'Search → Hub lookup → Location/Guide → Result → App',
    hypothesis: 'Một Hub chung giữ utility và nội dung toàn quốc, còn Location Detail chỉ giữ context địa phương sẽ tạo kiến trúc dễ mở rộng và tránh trùng nội dung giữa các tỉnh thành.',
    value: 'Content model Hub + Location Detail có thể nhân rộng theo địa phương, đồng thời giữ Giải đáp và Nộp phạt như các content hub chuyên biệt.',
    gate: 'Đo lookup completion, location selection, child-page CTR, result engagement và Web-to-App conversion.',
    src: 'demos/phat-nguoi.html',
    address: 'web-momo-prototype.vercel.app/phat-nguoi',
    tools: [
      {
        id: 'phat-nguoi-ha-noi',
        name: 'Phạt Nguội Hà Nội',
        category: 'Location Detail',
        description: 'Child-page đầu tiên của template Location: lookup dùng chung và content riêng về biển số, khu vực, quy trình xử lý tại Hà Nội.',
        jtbd: 'Tra cứu và hiểu cách xử lý vi phạm được ghi nhận tại Hà Nội',
        src: 'demos/phat-nguoi-ha-noi.html',
        address: 'web-momo-prototype.vercel.app/phat-nguoi/ha-noi',
      },
      {
        id: 'phat-nguoi-giai-dap',
        name: 'Phạt Nguội Giải Đáp',
        category: 'Content Hub',
        maturity: 'GEO',
        description: 'Hub Q&A Directory và Quiz Center cho cluster Phạt Nguội. Mỗi câu hỏi người dùng là một child page trả lời trực tiếp, hỗ trợ internal link và AI Citation.',
        jtbd: 'Khám phá câu trả lời theo tình huống hoặc kiểm tra hiểu biết về phạt nguội tại một thư viện tập trung',
        northStar: 'AI Citation Rate trên nhóm câu hỏi mục tiêu',
        loop: 'User Prompt → Q&A Hub → Child Answer → Quiz / App',
        hypothesis: 'Kiến trúc Hub và child Q&A giúp câu trả lời dễ tìm, dễ mở rộng và có ngữ cảnh rõ hơn một trang FAQ tổng hợp.',
        value: 'Content Hub chuyên biệt nằm trong dự án Phạt Nguội, bổ sung lớp giải đáp cho utility lookup và Location Detail.',
        gate: 'Đo child-page CTR, quiz completion, AI Citation Rate và Web-to-App conversion.',
        src: 'demos/phat-nguoi-giai-dap.html',
        address: 'web-momo-prototype.vercel.app/phat-nguoi/giai-dap',
        tools: [
          {
            id: 'phat-nguoi-nop-qua-momo',
            name: 'Cách nộp phạt qua MoMo',
            category: 'Q&A Detail',
            description: 'Child Q&A đầu tiên: trả lời trực tiếp khả năng nộp phạt qua MoMo, hướng dẫn từng bước, so sánh kênh và CTA thực thi.',
            jtbd: 'Hiểu rõ cách nộp phạt qua MoMo và thực hiện ngay trong cùng một phiên',
            src: 'demos/phat-nguoi-nop-qua-momo.html',
            address: 'web-momo-prototype.vercel.app/phat-nguoi/giai-dap/nop-qua-momo',
          },
        ],
      },
    ],
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
  'Location Detail': { bg: '#eff6ff', text: '#1d4ed8' },
  'Service Guide': { bg: '#ecfdf3', text: '#067647' },
  'Content Hub': { bg: '#faf5ff', text: '#7c3aed' },
  'Q&A Detail': { bg: '#fff0f7', text: '#a50064' },
  'Other':      { bg: '#f1f5f9', text: '#475569' },
  'Destination':{ bg: '#fff0f7', text: '#a50064' },
  'Child Page':  { bg: '#fff0f7', text: '#a50064' },
  'Front-end':  { bg: '#eefbf3', text: '#15803d' },
  'Back-end':   { bg: '#eff6ff', text: '#1d4ed8' },
};

const GROUP_LABEL = {
  MoSpark: 'MoSpark Platform',
  MiniWeb: 'Mini Web Overview',
  Widget: 'Utilities Tool',
  Platform: 'PLG Project',
  Other: 'Other',
};

function displayGroupName(groupName) {
  return GROUP_LABEL[groupName] || groupName;
}

const GROUP_ORDER = ['MiniWeb', 'MoSpark', 'Widget', 'Platform', 'Other'];
const GROUP_DOT_COLORS = {
  MiniWeb: '#60a5fa', MoSpark: '#f472b6', Widget: '#34d399', Platform: '#fb923c', Other: '#9ca3af',
};
const GROUP_META = {
  MoSpark:  { eyebrow: 'MoSpark Platform',  title: 'AI & Content Tools',    desc: 'GenAI orchestration, landing page builder, SEO/GEO scoring và content management.', chipCls: 'pill-pink'  },
  Widget:   { eyebrow: 'Utilities Tool',    title: 'Financial Calculators', desc: 'PLG tools, calculators và checker phục vụ organic SEO và user engagement.',         chipCls: 'pill-green' },
  Platform: { eyebrow: 'Platform',          title: 'Product Screens',       desc: 'Full-flow prototypes: Phạt Nguội, Cinema, eSIM, Dịch vụ công và Onboarding.',       chipCls: 'pill-amber' },
  MiniWeb:  { eyebrow: 'Mini Web Overview', title: 'SEO Inventory',         desc: '113 MiniWeb pages - inventory theo Division, Use Case, URL và traffic volume.',      chipCls: 'pill-blue'  },
  Other:    { eyebrow: 'Other',             title: 'Miscellaneous',         desc: 'Prototype thử nghiệm và concept khác.',                                              chipCls: 'pill-gray'  },
};

const LAB_ACTIVITY_EVENTS = [
  { time: '09:42', user: 'Mai Phạm', team: 'Web Platform', action: 'update', project: 'Blog', surface: 'Article', subject: 'Gói bảo hiểm xe', detail: 'Chỉnh intro, CTA cuối bài và gắn link sang flow bảo hiểm.' },
  { time: '09:28', user: 'Khánh Trần', team: 'Web Platform', action: 'create', project: 'News', surface: 'News Detail', subject: 'Q3 campaign note', detail: 'Tạo bản tin mới cho release note và campaign summary.' },
  { time: '09:05', user: 'Đức Huy', team: 'Cell Team', action: 'update', project: 'Cinema', surface: 'Film Detail', subject: 'Supergirl 24851', detail: 'Cập nhật showtime copy và badge suất chiếu ưu tiên.' },
  { time: '08:53', user: 'Hà Linh', team: 'Cell Team', action: 'create', project: 'Microsite', surface: 'Campaign Page', subject: 'Go-live checklist', detail: 'Khởi tạo microsite mới cho campaign voucher.' },
  { time: '08:41', user: 'Quang Minh', team: 'Web Platform', action: 'update', project: 'PLG Project', surface: 'Keyword Registry', subject: 'Travel insurance', detail: 'Đổi mapping keyword và thêm business context.' },
  { time: '08:19', user: 'Phúc Long', team: 'Cell Team', action: 'remove', project: 'Phạt Nguội', surface: 'Guide', subject: 'Old province guide', detail: 'Remove địa phương lỗi thời sau khi gộp nội dung.' },
];

function buildLabActivityDashboard() {
  const totals = LAB_ACTIVITY_EVENTS.reduce((acc, event) => {
    acc[event.action] = (acc[event.action] || 0) + 1;
    acc.projects[event.project] = (acc.projects[event.project] || 0) + 1;
    return acc;
  }, { create: 0, update: 0, remove: 0, projects: {} });
  const hotProject = Object.entries(totals.projects).sort((a, b) => b[1] - a[1])[0];

  return `
    <section class="lab-dashboard" aria-label="MoSpark activity dashboard">
      <div class="lab-dashboard-top">
        <div>
          <p class="lab-dashboard-eyebrow">MoSpark Activity Dashboard</p>
          <h2 class="lab-dashboard-title">Dashboard log cho Blog, News, PLG Project và Microsite.</h2>
          <p class="lab-dashboard-desc">Bề mặt này giúp bạn nhìn nhanh create, update, remove trong MoSpark và các project của Cell Team, rồi mở log chi tiết nếu cần audit sâu hơn.</p>
        </div>
        <div class="lab-dashboard-actions">
          <a class="lab-dashboard-link" href="demos/mospark-activity-log.html">Open full log ↗</a>
        </div>
      </div>

      <div class="lab-dashboard-grid">
        <article class="lab-dash-card">
          <span class="lab-dash-label">Create</span>
          <strong>${totals.create}</strong>
          <small>nội dung mới được tạo trong batch gần nhất</small>
        </article>
        <article class="lab-dash-card">
          <span class="lab-dash-label">Update</span>
          <strong>${totals.update}</strong>
          <small>thay đổi đang chờ review hoặc đã được approve</small>
        </article>
        <article class="lab-dash-card">
          <span class="lab-dash-label">Remove</span>
          <strong>${totals.remove}</strong>
          <small>event rủi ro cần nhìn kỹ trước khi release</small>
        </article>
        <article class="lab-dash-card lab-dash-card-wide">
          <span class="lab-dash-label">Hot project</span>
          <strong>${hotProject?.[0] || 'Blog'}</strong>
          <small>${hotProject?.[1] || 0} change${(hotProject?.[1] || 0) > 1 ? 's' : ''} trong tập log này</small>
        </article>
      </div>

      <div class="lab-dashboard-feed">
        ${LAB_ACTIVITY_EVENTS.map(event => `
          <div class="lab-feed-item">
            <span class="lab-feed-time">${event.time}</span>
            <span class="lab-feed-action lab-feed-${event.action}">${event.action}</span>
            <div class="lab-feed-meta">
              <strong class="lab-feed-user">${event.user}</strong>
              <span class="lab-feed-project">${event.project}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </section>`;
}
const PLG_OWNER_ORDER = ['Cell Team', 'Web Platform'];
const MOSPARK_CLUSTER_ORDER = ['GenAI', 'Database', 'Modules'];
const MOSPARK_CLUSTER_ITEMS = {
  GenAI:    ['orchestrator', 'genai-image', 'agentic-hub'],
  Database: ['merchant-page-builder'],
  Modules:  ['ads-manager', 'widget-manager', 'seo-geo-dashboard', 'seo-geo-project', 'mospark-activity-log', 'seo-geo-score', 'chatbot'],
};

function getMoSparkCluster(protoId) {
  return MOSPARK_CLUSTER_ORDER.find(cluster => MOSPARK_CLUSTER_ITEMS[cluster].includes(protoId)) || 'Modules';
}

const WIDGET_CLUSTER_ORDER = ['Flow', 'Tools'];
const WIDGET_CLUSTER_ITEMS = {
  Flow:  ['utilities-flow'],
  Tools: ['financial'],
};

function getWidgetCluster(protoId) {
  return WIDGET_CLUSTER_ORDER.find(cluster => WIDGET_CLUSTER_ITEMS[cluster].includes(protoId)) || 'Tools';
}

const GROUP_ITEM_ORDER = {
  MoSpark: ['orchestrator', 'genai-image', 'agentic-hub', 'merchant-page-builder', 'ads-manager', 'widget-manager', 'seo-geo-dashboard', 'seo-geo-project', 'mospark-activity-log', 'seo-geo-score', 'chatbot'],
  MiniWeb: ['mini-web-overview'],
  Widget: ['utilities-flow', 'financial'],
  Platform: ['phat-nguoi', 'esim-du-lich', 'ota', 'cinema', 'dich-vu-cong', 'news', 'blog-category', 'merchant', 'payments'],
  Other: ['worldcup', 'universal-search', 'onboarding', 'dashboard', 'search', 'notification-center', 'scam-check'],
};

const GROUP_SUMMARY = {
  MoSpark: {
    eyebrow: 'MoSpark Platform',
    title: 'MoSpark Platform',
    description: 'Chia thành 3 cụm: GenAI (năng lực tạo sinh & orchestration), Database (data layer & content tools), Modules (bề mặt vận hành & tăng trưởng).',
    examples: 'GenAI: Orchestrator · Agentic Hub | Database: Merchant Builder | Modules: Ads · PLG Project',
  },
  MiniWeb: {
    eyebrow: 'Mini Web Overview',
    title: 'Mini Web Overview',
    description: 'Inventory toàn bộ MiniWeb trên momo.vn, có thể lọc theo Division, Use Case và Page Type.',
    examples: '113 MiniWeb thuộc 6 Division và 50 Use Case',
  },
  Widget: {
    eyebrow: 'Utilities Tool',
    title: 'Utilities Tool',
    description: 'Chia thành 2 cụm: Flow (multi-step journey có shared state, kết thúc bằng CTA W2A) và Tools (interactive utility, lookup ngắn để Dev implement nhanh).',
    examples: 'Flow: Kế hoạch dòng tiền · Bảo hiểm xe | Tools: Financial (37 tools) · Billpay · Scam check',
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
    description: 'Cell Team triển khai các use case theo ngành hàng; Web Platform xây các surface PLG dùng chung cho News, Blog, Merchant và Search.',
    examples: 'Cell Team: Phạt Nguội · eSIM · Cinema | Web Platform: News · Blog · Merchant Discovery · Merchant',
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
    title: 'PLG Project Inventory',
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

function findToolPath(proto, toolId, tools = proto?.tools || [], ancestors = []) {
  for (const tool of tools) {
    const path = [...ancestors, tool];
    if (tool.id === toolId) return path;
    const nestedPath = findToolPath(proto, toolId, tool.tools || [], path);
    if (nestedPath) return nestedPath;
  }
  return null;
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function renderNav() {
  const nav = document.getElementById('protoNav');
  if (!nav) return;

  const pinnedItems = PROTOTYPES.filter(p => p.pinned);
  const pinnedHtml = pinnedItems.length ? `
    <section class="proto-nav-section proto-nav-pinned" data-group="pinned">
      ${pinnedItems.map(p => {
        const isActive = activeProtoId === p.id && !activeToolId;
        return `<div class="proto-nav-group">
          <button class="proto-nav-btn${isActive ? ' active' : ''}" data-id="${p.id}">
            <span class="nav-index">★</span>
            <span class="proto-nav-label">
              <strong>${p.name}</strong>
              <small>${p.navTagline || displayGroupName(p.category)}</small>
            </span>
          </button>
        </div>`;
      }).join('')}
    </section>` : '';

  nav.innerHTML = pinnedHtml + GROUP_ORDER.map(groupName => {
    const desiredOrder = GROUP_ITEM_ORDER[groupName] || [];
    const groupItems = PROTOTYPES
      .filter(p => p.category === groupName && !p.pinned)
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
      const activePath = activeProtoId === p.id && activeToolId ? findToolPath(p, activeToolId) : null;

      const renderToolNavItems = (tools, depth = 0) => tools.map(t => {
        const tc = CAT_COLOR[t.category] || CAT_COLOR['Planning'];
        const isTA = activeProtoId === p.id && activeToolId === t.id;
        const isAncestor = activePath?.some(item => item.id === t.id) && !isTA;
        return `<div class="tool-nav-node" style="--tool-depth:${depth}">
          <button class="tool-nav-btn${isTA ? ' active' : ''}${isAncestor ? ' ancestor' : ''}" data-proto="${p.id}" data-tool="${t.id}">
            <span class="tool-nav-cat" style="color:${tc.text}">${t.category}</span>
            <span class="tool-nav-lbl">${t.name}</span>
          </button>
          ${t.tools?.length ? `<div class="tool-nav-children">${renderToolNavItems(t.tools, depth + 1)}</div>` : ''}
        </div>`;
      }).join('');

      const toolsHtml = p.tools ? `
        <div class="tool-nav-list${isExpanded ? '' : ' hidden'}" id="tnl-${p.id}">
          ${renderToolNavItems(p.tools)}
        </div>` : '';

      return `<div class="proto-nav-group">
        <button class="proto-nav-btn${isActive ? ' active' : ''}" data-id="${p.id}">
          <span class="nav-index">${String(i + 1).padStart(2, '0')}</span>
          <span class="proto-nav-label">
            <strong>${p.name}</strong>
            <small>${p.navTagline || (p.utilitiesPage ? `${p.tools.length} utilities` : (groupName === 'MoSpark' ? getMoSparkCluster(p.id) : (p.ownerGroup || displayGroupName(p.category))))}</small>
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

    return `<section class="proto-nav-section" data-group="${groupName}">
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
        renderNav();
        if (proto.navigationOnly) return;
        // On mobile, keep sidebar open so user can pick a sub-tool
        if (window.innerWidth <= 720) return;
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

// ─── Lab Directory (home view) ────────────────────────────────────────────────

function buildProtoCard(proto, chipCls) {
  const children = proto.tools || [];
  const searchText = [proto.name, ...children.map(t => t.name)].join(' ').toLowerCase();
  const MAX_SHOW = 8;
  const shown = children.slice(0, MAX_SHOW);
  const rest = children.length - shown.length;
  const chipsHtml = children.length ? `<div class="proto-chips">${
    shown.map(t => `<button class="child-pill ${chipCls}" data-open-proto="${proto.id}" data-open-tool="${t.id}">${t.name}</button>`).join('')
  }${rest > 0 ? `<span class="child-pill-more">+${rest} nữa</span>` : ''}</div>` : '';
  return `
    <div class="proto-card" data-open-proto="${proto.id}" data-search="${searchText}">
      <div class="proto-card-head">
        <span class="proto-card-name">${proto.name}</span>
        <button class="proto-card-arrow" data-open-proto="${proto.id}" tabindex="-1">↗</button>
      </div>
      ${chipsHtml}
    </div>`;
}

function buildLabSectionRows(groupName, groupItems) {
  const meta = GROUP_META[groupName] || {};
  const chipCls = meta.chipCls || 'pill-gray';
  const dot = GROUP_DOT_COLORS[groupName] || '#9ca3af';

  if (groupName === 'MoSpark') {
    const inner = MOSPARK_CLUSTER_ORDER.map(cluster => {
      const items = groupItems.filter(p => getMoSparkCluster(p.id) === cluster);
      if (!items.length) return '';
      return `<div class="lab-cluster-sep" style="color:${dot}">${cluster}</div>${items.map(p => buildProtoCard(p, chipCls)).join('')}`;
    }).join('');
    return `<div class="lab-card-grid">${inner}</div>`;
  }
  if (groupName === 'Platform') {
    const inner = PLG_OWNER_ORDER.map(owner => {
      const items = groupItems.filter(p => p.ownerGroup === owner);
      if (!items.length) return '';
      return items.map(p => buildProtoCard(p, chipCls)).join('');
    }).join('');
    return `<div class="lab-card-grid">${inner}</div>`;
  }
  return `<div class="lab-card-grid">${groupItems.map(p => buildProtoCard(p, chipCls)).join('')}</div>`;
}

function buildLabDirectory() {
  const pinnedItems = PROTOTYPES.filter(p => p.pinned);
  const pinnedSection = pinnedItems.length ? `
    <div class="lab-section lab-section-pinned" data-group="pinned">
      <div class="lab-section-intro">
        <p class="lab-section-eyebrow">Pinned <span class="lab-section-cnt">${pinnedItems.length}</span></p>
        <h2 class="lab-section-title">Ghim đầu trang</h2>
      </div>
      <div class="lab-card-grid">${pinnedItems.map(p => buildProtoCard(p, 'pill-pink')).join('')}</div>
    </div>` : '';

  const sections = GROUP_ORDER.map(groupName => {
    const desiredOrder = GROUP_ITEM_ORDER[groupName] || [];
    const groupItems = PROTOTYPES
      .filter(p => p.category === groupName && !p.pinned)
      .slice()
      .sort((a, b) => {
        const ia = desiredOrder.indexOf(a.id), ib = desiredOrder.indexOf(b.id);
        if (ia === -1 && ib === -1) return 0;
        return ia === -1 ? 1 : ib === -1 ? -1 : ia - ib;
      });
    if (!groupItems.length) return '';
    const meta = GROUP_META[groupName] || {};
    const count = getGroupCount(groupName);
    const grpLow = groupName.toLowerCase();
    return `
      <div class="lab-section lab-section-${grpLow}" data-group="${groupName}">
        <div class="lab-section-intro">
          <p class="lab-section-eyebrow">${meta.eyebrow || groupName} <span class="lab-section-cnt">${count}</span></p>
          <h2 class="lab-section-title">${meta.title || displayGroupName(groupName)}</h2>
          <p class="lab-section-desc">${meta.desc || ''}</p>
        </div>
        ${buildLabSectionRows(groupName, groupItems)}
      </div>`;
  }).join('');

  const filterChips = [
    `<button class="lab-chip active" data-filter="">All <b>${getTotalSurfaceCount()}</b></button>`,
    ...GROUP_ORDER.map(g => {
      const meta = GROUP_META[g] || {};
      const col = CAT_COLOR[g] || { bg: '#f1f5f9', text: '#475569' };
      return `<button class="lab-chip" data-filter="${g}" style="--chip-bg:${col.bg};--chip-col:${col.text}">${meta.eyebrow || displayGroupName(g)} <b>${getGroupCount(g)}</b></button>`;
    }),
  ].join('');

  return `
    <div class="lab-page">
      <div class="lab-hero">
        <p class="lab-kicker">Internal · Web Platform · ${getTotalSurfaceCount()} surfaces</p>
        <h1 class="lab-title">Prototype<br><span class="lab-title-accent">Lab.</span></h1>
        <p class="lab-sub">All prototypes, demos và tools được build bởi Web Platform.</p>
        <div class="lab-hero-search">
          <div class="lab-search-wrap">
            <svg class="lab-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input class="lab-search-input" id="labSearchInput" type="search" placeholder="Tìm prototype, tool, child page..." autocomplete="off" spellcheck="false">
            <kbd class="lab-search-kbd">⌘K</kbd>
          </div>
        </div>
      </div>

      <div class="lab-filterbar">
        <div class="lab-chips" id="labFilterChips">${filterChips}</div>
      </div>

      <div class="lab-body" id="labBody">${pinnedSection}${sections}</div>
      <p class="lab-empty" id="labEmpty" style="display:none">Không tìm thấy prototype nào.</p>
      ${buildLabActivityDashboard()}
    </div>`;
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
    ${buildLabDirectory()}`;
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
        <a href="/mini-web-overview" target="_blank" rel="noopener" class="open-ext-btn">Mở tab ↗</a>
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
    const toolPath = findToolPath(proto, activeToolId);
    const tool = toolPath?.at(-1);
    if (tool) { ws.innerHTML = buildToolView(proto, tool, toolPath); wireWs(ws, proto, tool); return; }
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

  <div class="ws-mobile-cta">
    <div class="ws-mobile-cta-label">Live Demo</div>
    <div class="ws-mobile-cta-title">${proto.name}</div>
    <div class="ws-mobile-cta-desc">Mở prototype trên tab mới để trải nghiệm đầy đủ trên màn hình lớn hơn.</div>
    <a href="${proto.src}" target="_blank" rel="noopener" class="ws-mobile-cta-btn">Mở Demo ↗</a>
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

function buildToolView(proto, tool, toolPath = [tool]) {
  const tc  = CAT_COLOR[tool.category] || CAT_COLOR['Planning'];
  const src = tool.src || `${proto.src}#${tool.id}`;
  const preview = previewSrc(src);
  const address = tool.address || `${proto.address}#${tool.id}`;
  const parentTool = toolPath.length > 1 ? toolPath.at(-2) : null;

  return `
  <div class="ws-topbar">
    <div class="ws-breadcrumb">
      <button class="menu-toggle" id="menuToggle">☰</button>
      <button class="ws-back-btn" data-proto="${proto.id}"${parentTool ? ` data-parent-tool="${parentTool.id}"` : ''}>← ${parentTool?.name || proto.name}</button>
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

  <div class="ws-mobile-cta">
    <div class="ws-mobile-cta-label">Live Demo</div>
    <div class="ws-mobile-cta-title">${tool.name}</div>
    <div class="ws-mobile-cta-desc">Mở prototype trên tab mới để trải nghiệm đầy đủ trên màn hình lớn hơn.</div>
    <a href="${src}" target="_blank" rel="noopener" class="ws-mobile-cta-btn">Mở Demo ↗</a>
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
  if (back) back.addEventListener('click', () => {
    if (back.dataset.parentTool) selectTool(back.dataset.proto, back.dataset.parentTool);
    else selectProto(back.dataset.proto);
  });

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
    btn.addEventListener('click', () => {
      if (btn.dataset.openTool) selectTool(btn.dataset.openProto, btn.dataset.openTool);
      else selectProto(btn.dataset.openProto);
    });
  });

  const mt = ws.querySelector('#menuToggle');
  if (mt) mt.addEventListener('click', openSidebar);

  // ── Search + filter ──────────────────────────────────────
  const searchInput = ws.querySelector('#labSearchInput');
  const filterChips = ws.querySelectorAll('.lab-chip');
  const sections    = ws.querySelectorAll('.lab-section');
  const empty       = ws.querySelector('#labEmpty');
  if (!searchInput) return;

  let activeFilter = '';

  function applyLabFilter() {
    const q = searchInput.value.trim().toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/gi, 'd');
    let anyVisible = false;

    sections.forEach(sec => {
      const group = sec.dataset.group;
      const matchGroup = !activeFilter || group === activeFilter;
      if (!matchGroup) { sec.style.display = 'none'; return; }

      const rows = sec.querySelectorAll('.proto-card');
      let secVisible = false;
      rows.forEach(row => {
        const name = (row.dataset.search || '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/gi, 'd');
        const show = !q || name.includes(q);
        row.style.display = show ? '' : 'none';
        if (show) secVisible = true;
      });

      const clusterHeads = sec.querySelectorAll('.lab-cluster-sep');
      clusterHeads.forEach(ch => {
        let hasVisible = false;
        let sib = ch.nextElementSibling;
        while (sib && !sib.classList.contains('lab-cluster-sep')) {
          if (sib.style.display !== 'none') hasVisible = true;
          sib = sib.nextElementSibling;
        }
        ch.style.display = hasVisible ? '' : 'none';
      });

      sec.style.display = secVisible ? '' : 'none';
      if (secVisible) anyVisible = true;
    });

    if (empty) empty.style.display = anyVisible ? 'none' : '';
  }

  searchInput.addEventListener('input', applyLabFilter);

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.dataset.filter;
      applyLabFilter();
    });
  });

  // ⌘K focus shortcut
  document.addEventListener('keydown', function onKey(e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
  });
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

  // ── Sidebar collapse / reveal ────────────────────────────
  const collapseBtn = document.getElementById('sidebarCollapseBtn');
  const revealBtn   = document.getElementById('sidebarRevealBtn');

  function collapseSidebar() {
    document.body.classList.add('sidebar-collapsed');
    localStorage.setItem('proto-sidebar-collapsed', '1');
  }
  function expandSidebar() {
    document.body.classList.remove('sidebar-collapsed');
    localStorage.removeItem('proto-sidebar-collapsed');
  }

  collapseBtn?.addEventListener('click', collapseSidebar);
  revealBtn?.addEventListener('click', expandSidebar);

  if (localStorage.getItem('proto-sidebar-collapsed')) collapseSidebar();
});
