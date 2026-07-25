# MoMo Web Platform — Prototype Store (MoSpark Lab)

> **Research-spec Prototype Lab** cho MoMo Web Platform (Out-App Traffic / GPD). Mọi tính toán, dữ liệu mô phỏng và luồng tương tác trong repository này phục vụ mục đích thiết kế, kiểm chứng ý tưởng (Proof of Concept) và thống nhất yêu cầu (BRD alignment) — không phải code sản phẩm (Production code) và không cấu thành tư vấn tài chính.

- **Live Store:** [web-momo-prototype.vercel.app](https://web-momo-prototype.vercel.app)
- **Owner:** Văn Hiến — SEO & GEO Lead, Out-App Traffic / GPD
- **Phạm vi áp dụng:** Step 04 trong MoMo Web Build Workflow (Build Demo Website — Research-Spec). Output từ repo được sử dụng để trình bày với Leadership (Pitching), thống nhất giữa PO/PM/Design và brief cho đội ngũ Engineering trước Sprint.

---

## 1. Kiến Trúc & Điểm Cắm (Entry Points)

Dự án ưu tiên tốc độ thử nghiệm với mô hình **Static HTML Self-contained** (mỗi demo là một file độc lập, không build step) kết hợp **Next.js App Router** cho các mô-đun phức tạp.

```
web-momo-prototype/
├── index.html                  # MoSpark Brand Landing Page (Pitching cho Leadership)
├── lab.html                    # Prototype Store Hub (Giao diện điều hướng toàn bộ Lab)
├── viewer.html                 # Device Frame Viewer (Preview mobile/desktop responsive)
├── assets/
│   ├── store.js                # Central Registry: quản lý 110+ prototypes, category & sidebar
│   ├── store.css               # Design system & styles cho lab.html
│   └── app.js                  # Script xử lý tương tác cho index.html
├── demos/                      # Thư mục chứa 110+ HTML prototypes self-contained
│   ├── seo-geo-project.html    # PLG Project Hub
│   ├── merchant-page-builder.html
│   ├── bao-hiem-o-to.html
│   └── ...
├── apps/
│   └── seo-geo-project/        # Next.js 15 App (SEO/GEO Project System)
├── vercel.json                 # Cấu hình Clean URL Rewrites cho Production (Vercel)
└── .devserver.js               # Local Dev Server (Node.js) giả lập URL routing từ vercel.json
```

### Các Entry Point chính

| Entry Point | Đường dẫn Local | Mục đích & Vai trò |
|---|---|---|
| **MoSpark Landing** | `/` (`index.html`) | Trang Brand & Pitching chính thức của MoSpark Web Growth Platform cho Leadership & PMs. |
| **Prototype Store** | `/lab` (`lab.html`) | Hub điều hướng tập trung toàn bộ danh mục prototypes, tools, child pages và activity logs. |
| **Device Viewer** | `/viewer.html` | Đóng khung xem demo theo tỉ lệ thiết bị (Mobile / Tablet / Desktop). |
| **Next.js App** | `apps/seo-geo-project` | Ứng dụng Next.js 15 quản lý dự án SEO/GEO chuyên sâu. |

---

## 2. Danh Mục Prototype (Prototype Catalog)

Toàn bộ prototype được phân nhóm rõ ràng theo 4 danh mục chính trong Registry ([`assets/store.js`](file:///Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/assets/store.js)):

### 🚀 Category 1: MoSpark (Web Growth Platform & GenAI Tools)

Tập hợp các hệ thống quản trị, công cụ tự động hóa nội dung bằng GenAI và dashboard đo lường:

| Prototype / Tool | Route Clean URL | File Nguồn | Mô tả tóm tắt |
|---|---|---|---|
| **PLG Project Hub** | `/plg-project` | `demos/seo-geo-project.html` | Quản lý Topic-Cluster-Keyword 3 tầng, Keyword Registry chống ăn thịt từ khóa, Business Context 12 trường cho GenAI. |
| **GenAI Orchestrator** | `/genai-orchestrator` | `demos/orchestrator.html` | Canvas trực quan hóa 9 nodes multi-agent pipeline xử lý bài viết & brief. |
| **Agentic Hub** | `/agentic-hub` | `demos/agentic-hub.html` | Mô phỏng quản lý model AI (Haiku/Sonnet/Opus), RAG simulation và tracking chi phí token. |
| **GenAI Image Studio** | `/genai-image-studio` | `demos/genai-image.html` | Tạo key visual tự động theo quy chuẩn thương hiệu, safe-zone và kích thước responsive. |
| **Merchant Page Manager** | `/merchant-page-builder` | `demos/merchant-page-builder.html` | Quản lý Merchant record từ Content Plan, liên kết M4B ID và GenAI content builder. |
| **Microsite Manager** | `/microsite-manager` | `demos/microsite-manager.html` | Admin panel quản lý Microsite: live preview, sitemap, analytics, blog inventory & LLMS.txt editor. |
| **PLG Content Score** | `/plg-score` | `demos/seo-geo-score.html` | Hard Governance Gate chấm điểm Technical SEO, GEO, Content & Trust trước khi publish. |
| **SEO/GEO Dashboard** | `/seo-geo-dashboard` | `demos/seo-geo-dashboard.html` | Dashboard hợp nhất 3 nguồn dữ liệu: GA4, Google Search Console và BigQuery theo Use Case. |
| **MoMo Project Assistant** | `/project-assistant` | `demos/chatbot.html` | Trợ lý Chatbot nhúng với 6 template UX (Bubble, Popup, Standard, Proactive) + RAG knowledge. |
| **Ads & Widget Manager** | `/ads-manager` | `demos/ads.html` | Setup campaign quảng cáo, chọn placement và preview real-time trên Web/Mobile. |
| **MoSpark Activity Log** | `/mospark-activity-log` | `demos/mospark-activity-log.html` | Audit trail ghi nhận mọi tác vụ thay đổi trên Blog, Microsite và PLG Projects. |

---

### 💡 Category 2: Widget (PLG & Utility Calculators)

Tập hợp 27+ công cụ tương tác (Calculators/Simulators) hỗ trợ giữ chân người dùng và tạo phễu Web-to-App (W2A):

- **Utilities Tool Hub (`/utilities-tool` · `demos/utilities-tool.html`):**
  - **Credit & Loan:** Vay Nhanh, Trả Góp Ví Trả Sau, Vay Mua Nhà, Điều Kiện Vay Mua Nhà, Lãi Thẻ Tín Dụng, CIC Score, CIC Stimulator.
  - **Financial Health & Planning:** Giá Trị Tài Sản Ròng, Tỷ Lệ Nợ Trên Thu Nhập (DTI), Kế Hoạch Trả Nợ (Avalanche vs Snowball), Quỹ Dự Phòng, Kế Hoạch FIRE (Tự Do Tài Chính), Kế Hoạch Đám Cưới, Mua hay Thuê Nhà.
  - **Tax & Insurance:** Thuế TNCN (Luật mới 2025), Quyết Toán TNCN, Thuế TNDN SME, Bảo Hiểm Ô Tô, BHXH, Lương Hưu, BHXH 1 Lần (Luật 2024), Trợ Cấp Thất Nghiệp.
  - **Savings & Investment:** Tiết Kiệm Ngân Hàng, Lãi Suất Ngân Hàng, Kế Hoạch Nuôi Con, Học Phí Tương Lai, Chứng Chỉ Quỹ, Giá Vàng, Chứng Khoán HOSE.
  - **FX & Overseas:** Converter Tỷ Giá Ngoại Tệ, So Sánh Tỷ Giá Ngân Hàng, Budget Du Lịch Quốc Tế, Kiều Hối.
- **Utilities Flow Hub (`/utilities-flow` · `demos/utilities-flow.html`):** Chuỗi wizard 3 bước lập kế hoạch dòng tiền, chi phí xe máy, chi phí ô tô, thoát nợ thẻ...
- **Daily Utilities:** Tra Cứu Hóa Đơn (`/bill-lookup`), Kiểm Tra Lừa Đảo (`/scam-check`), Mua Vé Metro HCM (`/metro-ticket`), Dự Đoán World Cup 2026 (`/world-cup-2026`).

---

### 🌐 Category 3: Platform (Ecosystem & Vertical Surfaces)

Các trang sản phẩm, hub chuyên ngành và phễu dịch vụ của MoMo:

- **Tiện Ích Giao Thông (MoXe):**
  - Hub Hãng Xe Máy (`/hang-xe-may`): Tra cứu 8 thương hiệu xe máy, chi phí bảo hiểm bắt buộc/tự nguyện, đại lý & garage.
  - Bảo Hiểm Ô Tô (`/bao-hiem-o-to`): Luồng mua bảo hiểm thân vỏ ô tô end-to-end (so sánh báo giá 9 nhà bảo hiểm, tính phí & cấp đơn). Tích hợp Hub Tình Huống Bồi Thường (`/bao-hiem-o-to/tinh-huong`).
  - Hub Hãng Xe Ô Tô (`/hang-xe`), ePass x MoMo (`/epass`), Tiện Ích Giao Thông Hub (`/vehicle-hub`), Phạt Nguội Hub (`/phat-nguoi`) & các trang con (Hà Nội, Q&A, Hướng dẫn nộp phạt).
  - Tra cứu Đăng kiểm, Giá xăng, Cứu hộ, Trạm sạc, Bãi đỗ xe...
- **OTA & Du Lịch (Cell Team):**
  - Hub Điểm Đến Quốc Tế (`/diem-den`), Country Hub Thái Lan (`/destination-hub`), Vé Máy Bay (`/ve-may-bay`), Khách Sạn (`/khach-san`), eSIM Du Lịch (`/esim-du-lich`), QR Roaming Quốc Tế (`/thanh-toan-quoc-te`), Trip Planner (`/trip-planner`).
- **Merchant & Commerce:**
  - Merchant Hub (`/merchant`), Merchant Discovery (`/merchant-discovery` — swipe card stack), Merchant List (`/listing-merchant-page`).
- **Phim Ảnh & Giải Trí (Cinema):**
  - Cinema Hub (`/cinema`), Chuỗi rạp CGV / Lotte / BHD / Galaxy (`/cinema/cgv`), Chi tiết phim (`/cinema-film-detail`), Đạo diễn/Diễn viên, Phim bộ (`/cinema/series`).
- **Dịch Vụ Công & Thủ Tục:**
  - Dịch Vụ Công Hub (`/dich-vu-cong`), Hướng dẫn Đổi bằng lái, Khai sinh, Kết hôn, Làm hộ chiếu, Gia hạn CCCD...
- **Core System Surfaces:**
  - Universal Search (`/search`), News Room (`/news`), Notification Center (`/notifications`), Onboarding (`/welcome`), Blog Hub (`/mospark-blog`).

---

### 📋 Category 4: MiniWeb Inventory

- **Mini Web Overview (`/mini-web-overview`):** Danh mục tổng hợp toàn bộ các MiniWeb hiện có trên `momo.vn`, phân loại theo Division, Use Case, Product và Page Type.

---

## 3. Hướng Dẫn Phát Triển & Chạy Local (Local Development)

### Yêu cầu môi trường
- **Node.js**: v18.0 trở lên (bắt buộc để chạy dev server tích hợp clean URL rewrites).

### Khởi chạy dự án

1. **Khởi động Dev Server chính (Port 3000):**
   ```bash
   node .devserver.js
   ```
   > ⚠️ **Lưu ý quan trọng:** Không dùng `python3 -m http.server` để test routing vì Python không hỗ trợ rewrite các Clean URL (như `/seo-geo-project` hay `/bao-hiem-o-to`). `.devserver.js` đọc trực tiếp quy tắc từ `vercel.json`.

2. **Truy cập ứng dụng:**
   - **Prototype Store:** `http://localhost:3000/lab`
   - **MoSpark Pitch Landing:** `http://localhost:3000/`
   - **Mỗi clean URL:** `http://localhost:3000/<route-name>` (Ví dụ: `http://localhost:3000/plg-project`)

3. **Khởi chạy ứng dụng Next.js (nếu phát triển module `apps/seo-geo-project`):**
   ```bash
   cd apps/seo-geo-project
   npm install
   npm run dev
   ```
   Truy cập tại `http://localhost:3001`.

---

## 4. Quy Trình Thêm Prototype Mới Về Store

Khi tạo một prototype mới, hãy tuân thủ 5 bước sau để prototype xuất hiện chính xác trên `lab.html` và Vercel:

1. **Tạo File HTML Demo:**
   Tạo file HTML mới trong thư mục `demos/` (Ví dụ: `demos/my-new-feature.html`). Sử dụng cấu trúc HTML/CSS/JS self-contained chuẩn.

2. **Khai Báo Dữ Liệu Trong Central Registry ([`assets/store.js`](file:///Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/assets/store.js)):**
   Thêm object cấu hình vào mảng `PROTOTYPES`:
   ```javascript
   {
     id: 'my-new-feature',
     name: 'Tên Prototype Mới',
     category: 'MoSpark', // hoặc 'Widget', 'Platform', 'MiniWeb'
     maturity: 'Interactive',
     description: 'Mô tả chi tiết bài toán và giải pháp của prototype.',
     jtbd: 'Nhu cầu cụ thể của người dùng',
     src: 'demos/my-new-feature.html',
     address: 'web-momo-prototype.vercel.app/my-new-feature'
   }
   ```

3. **Phân Nhóm Cấu Trúc (Sidebar & Layout):**
   - Thêm `id` vào danh sách nhóm tương ứng trong `GROUP_ITEM_ORDER[category]`.
   - Nếu thuộc category `MoSpark`, bổ sung `id` vào `MOSPARK_CLUSTER_ITEMS.GenAI` hoặc `MOSPARK_CLUSTER_ITEMS.Modules`.

4. **Cấu Hình Routing Clean URL:**
   - Thêm đường dẫn vào [`vercel.json`](file:///Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/vercel.json):
     ```json
     { "source": "/my-new-feature", "destination": "/demos/my-new-feature.html" }
     ```
   - Thêm đường dẫn tương ứng vào [`.devserver.js`](file:///Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/.devserver.js) để hỗ trợ local testing.

5. **Làm Mới Cache (Cache Busting):**
   Cập nhật query param version trong [`lab.html`](file:///Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/lab.html) (ví dụ `assets/store.js?v=XX`) để trình duyệt load đúng registry mới nhất.

---

## 5. Quy Chuẩn Kỹ Thuật (Tech Stack & Coding Standards)

- **Frontend core:** Pure Vanilla HTML5, CSS3, JavaScript (ES6+). Zero build step cho các file trong `demos/`.
- **CSS Styling:** Tailwind CSS via CDN + Custom CSS variables (`<style>` block per demo) đảm bảo tính linh hoạt cao nhất.
- **State Management:** Plain JavaScript state pattern (`const state = {...}` + `render()`).
- **Typography:** MoMo Brand Font (MoMoTrustDisplay / Inter / Outfit).
- **Hosting & Deployment:** Auto-deploy lên Vercel khi push vào branch `main`.

---

## 6. Tài Liệu Tham Chiếu Nội Bộ

- **[AGENTS.md](file:///Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/AGENTS.md):** Source of truth về kiến trúc, danh sách ID và quy tắc phát triển dành cho AI Agents.
- **[PRODUCT.md](file:///Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/PRODUCT.md):** Brand personality, nguyên tắc thiết kế và đối tượng người dùng của MoSpark.
- **[DESIGN.md](file:///Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/DESIGN.md):** Design System, Color Tokens và UI Guidelines.
- **[BUILDS.md](file:///Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/BUILDS.md):** Lịch sử các phiên bản build và thay đổi nâng cấp qua từng giai đoạn.
