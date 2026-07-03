# Build Log — web-momo-prototype

> Ghi lại mọi build session: decisions, issues, lessons learned.

---

## Cinema UI Overhaul (Fandango/Maoyan style) — 2026-06-28

**ID:** `cinema` + `cinema-film-detail` | **Category:** Platform | **Files:** `demos/cinema.html`, `demos/cinema-film-detail.html`

### Brief
Rebuild toàn bộ UI 2 prototype Cinema theo phong cách Booking Cinema Platform lớn (Fandango, Maoyan). Mục đích: prototype UI/UX + User Flow demo cho Web Platform stakeholder (Bảo, Công). Scope: responsive mobile-first, dark cinematic theme.

### Decisions made
- **Dark cinematic theme** (`#0D0D12` bg, `#16161F` surface, `#AF0171` accent): Đây là convention của mọi cinema platform lớn - tạo immersive experience, poster nổi bật hơn trên nền tối.
- **5-step booking flow** (Seat → F&B → Payment → Confirm → Ticket): Thêm 2 step so với version cũ (chỉ có 3 step). Step "Confirm" là gate quan trọng để user review trước khi commit payment.
- **Seat type system** (Standard/VIP/Couple với màu riêng): Blue=Standard, Purple=VIP, Pink=Couple - visual language phổ biến trên CGV và Fandango.
- **Isolated seat rule**: Implement check ngăn user tạo ghế lẻ đơn giữa các ghế đã chọn - đây là business rule thực tế của rạp chiếu phim.
- **Source of fund** thay vì "Payment method": Terminology phù hợp hơn với MoMo ecosystem (wallet/card/BNPL).
- **Rebuild in-place** (không tạo file mới): Vì ID/routes đã tồn tại trong store.js và vercel.json, rebuild in-place là approach đúng, không cần update registry.

### Issues gặp phải
- **Stepper 5 steps trên mobile hẹp**: Giải quyết bằng compact stepper - chỉ hiện text label cho step đang active, các step khác chỉ hiện number/checkmark.
- **Isolated seat rule logic**: Phải check từ góc nhìn "neighbor seat bị isolate" thay vì check seat đang chọn - tức là check mọi seat chưa được chọn/taken xem nó có bị kẹp không sau khi add seat mới.
- **Couple seat với 2 col**: Couple seat ID dùng format `G1G2`, `G3G4` (ghép cả pair vào 1 ID) thay vì 2 seat riêng để tránh phức tạp trong isolation check.

### Lessons
- Rebuild in-place cho existing prototype không cần update store.js/vercel.json - chỉ cần giữ nguyên filename.
- Dark theme cho cinema cần backdrop-filter blur trên nav để sticky nav không clash với hero content khi scroll.
- 5-step booking sheet với max-height + overflow-y scroll cho body là pattern đúng để handle content dài trên mobile mà không bị clip.
- Seat map dùng CSS grid với `gap` cho phép aisle (khoảng cách giữa 2 nhóm ghế) bằng cách thêm `<div class="seat-gap">` vào DOM thay vì CSS tricks.

---

## Cinema Social/JTBD Feature Pack — 2026-06-29

**ID:** `cinema` + `cinema-film-detail` | **Phase:** 2 — Social & Discovery Layer

### Brief
Bổ sung 4 tính năng inspired by Maoyan (Trung Quốc) và BookMyShow (Ấn Độ) vào prototype cinema. Mục đích: demo "social cinema" concept cho stakeholder Bảo/Công — differentiating MoMo Cinema vs CGV/Galaxy booking flow thông thường.

### Features implemented
1. **Composite Score (Maoyan-style)**: CRITIC + KH.GIÁ + BUZZ score bars trên film card và hero. Data object `FILM_SCORES` với presale count cho mỗi phim.
2. **Presale FOMO Strip**: Ticker strip "Đặt vé trước" với ranking + animated counter trong hero (setInterval +random increment mỗi 3.5s).
3. **Group Invite ("Mời bạn")**: Button trên film card (copy link + toast), full Group Panel trong seat step khi active.
4. **Social Ghost Seats**: Friend seats (Minh: D5/D6, Linh: E7) render trên seat map với amber border + initial, suggestion strip "Ngồi cạnh Minh? → Chọn D7, D8".

### Decisions made
- **Friend seats dùng `.seat.friend` class riêng biệt**, không tham gia `_toggleSeat` flow - tránh conflict với isolation rule và không thể click nhầm.
- **GROUP state object** tách biệt khỏi `state` - để group logic không ảnh hưởng seat selection logic hiện có.
- **Presale counter dùng IIFE** (immediately invoked) - tránh pollute global scope, tự chạy sau khi DOM ready.
- **mobase light theme** (Pink #EB2F96, white surface) thay dark cinematic - phù hợp hơn cho demo Web Platform context; dark theme chỉ hợp lý cho in-app experience.

### Issues gặp phải
- `openBooking()` không nhận session params - phải set `state.cinema`, `state.showtime`, `state.format` trực tiếp rồi gọi `renderStep()` để test booking flow.
- `preview_eval` yêu cầu param tên là `expression` không phải `js` - lỗi InputValidationError khi dùng sai tên.
- Write tool thất bại nếu chưa Read file trước - luôn Read ít nhất vài dòng trước khi Write lớn.

### Lessons
- Friend/ghost seats phải render như display-only element (không `onclick`, `cursor:default`) - tách hẳn khỏi seat selection state machine.
- IIFE pattern cho animation counters là best practice trong static HTML - không cần cleanup, không leak global.
- Để test booking flow trong preview: set state fields trực tiếp qua `preview_eval` rồi gọi `renderStep()` - không cần click qua UI flow.

---

## Financial Utilities hero compaction feedback — 2026-06-29

**ID:** `financial` | **Category:** Widget | **Files:** `demos/financial.css`, `demos/financial.html`

### Brief
User feedback yêu cầu hero của Financial Utilities phải gọn hơn: giảm font size, giảm chiều cao khối đầu trang, và log lại correction này để các bước iteration sau không quay lại kiểu hero quá lớn.

### Log
- Vấn đề cụ thể: hero headline, body copy, CTA và stats ở đầu trang đang quá lớn, chiếm nhiều vertical space và đẩy phần tool xuống sâu hơn mức cần thiết.
- Correction từ user: ưu tiên compact layout, giảm typography và giảm khoảng đệm cho phần hero thay vì giữ kiểu landing page oversized.
- Revised expectation: với surface dạng utility hub, hero chỉ nên đóng vai trò intro ngắn, không được lấn át phần tool content bên dưới.

### Decisions made
- Giảm `main` top padding, giảm `tools-hero-main` padding và giảm khoảng cách giữa hero với catalog.
- Giảm scale của `h1` từ vùng `40-72px` xuống `32-56px`, đồng thời nới line-height để block chữ bớt nặng thị giác.
- Giảm font size của copy, CTA và stats để khối đầu trang đọc nhanh hơn và bớt chiếm chỗ trên desktop lẫn mobile.

### Learning
- Với prototype dạng calculator hoặc utility listing, default nên là compact hero trước, không dùng oversized marketing headline trừ khi user yêu cầu rõ.
- Khi user góp ý về UI density, phải ghi lại correction ngay trong log cùng cùng ngày để tránh lặp lại cùng một lỗi visual hierarchy ở các màn tương tự.

---

## Money Lab auto insurance selector density feedback - 2026-06-30

**ID:** `financial-bao-hiem-o-to` | **Category:** Utility UI | **Files:** `demos/financial.css`, `demos/financial.js`, `demos/financial.html`

### Brief
User feedback yêu cầu selector đối tác bảo hiểm trong tool `BH Ô Tô` không được nhìn như card listing lớn. Đây là input chọn đối tác trong utility, nên phải gọn, chữ nằm center và không được dùng font size lớn hơn các item quan trọng khác.

### Log
- Vấn đề cụ thể: các item chọn đối tác đang quá to, cao như card listing, text không nằm center và font size quá lớn so với vai trò input phụ trong form.
- Correction từ user: không lạm dụng UI listing xuống dưới hoặc card lớn cho selector. Dùng item chọn gọn, rõ trạng thái active, nhưng visual weight phải thấp hơn result và các input chính.
- Revised expectation: selector trong calculator là control, không phải package card. Item chọn phải compact, text center, font nhỏ hơn và không lấn át nội dung kết quả.
- Follow-up correction: cần xác định rõ khi nào dùng native dropdown, khi nào dùng select item. Text tiêu đề field và text trong inline box không được chênh scale quá mạnh làm mất hierarchy.

### Decisions made
- Giảm chiều cao item chọn đối tác từ vùng card lớn xuống compact control.
- Center text bằng layout grid `place-items:center` và `text-align:center`.
- Giảm font size và font weight của label hãng, giảm border radius và shadow để active state nhẹ hơn.
- Giữ logic `select-items` bằng hidden input để click item vẫn recompute kết quả tức thì.
- Thêm harness `node scripts/ui-harness-check.mjs` để fail nếu selector quay lại card lớn, font lớn, text không center, shadow nặng hoặc thiếu Log/Learning.
- Giảm native `select` xuống scale secondary control: font 13px, padding 11px 14px, radius 14px để không lấn át field label và result card.

### Learning
- Với utility form, mọi selector dạng item phải được thiết kế như control trước, không như listing/card, trừ khi user yêu cầu so sánh nhiều package.
- Đối với secondary input như chọn đối tác, font size và visual weight phải thấp hơn result card, primary numeric input và nhãn section.
- Khi user nói item/card quá to hoặc font lấn hierarchy, xử lý bằng giảm height, giảm type scale, center alignment và shadow nhẹ trước khi thêm chi tiết UI khác.
- Dùng native dropdown khi option dài, nhiều hơn khoảng 5 lựa chọn, hoặc không cần nhìn toàn bộ option cùng lúc. Dùng select item khi option ngắn, số lượng ít đến vừa, cần so sánh nhanh hoặc cần chọn brand/đối tác thường xuyên.
- Field label và inline box text phải cùng một scale family: label có thể đậm hơn để định danh field, nhưng text trong box không được lớn hơn label quá rõ nếu đó là secondary select.

### Harness
- Command: `node scripts/ui-harness-check.mjs`
- Coverage: kiểm tra `BUILDS.md` có Log/Learning cho hero density và insurance selector density; kiểm tra CSS selector item có height <= 52px, font <= 14px, radius <= 12px, gap <= 8px, text center, active shadow nhẹ; kiểm tra native select không vượt font 14px, radius 16px, padding dọc 12px; kiểm tra `partnerId` vẫn dùng `select-items` thay vì dropdown native.

---

## Money Lab field control and result-side rules - 2026-06-30

**ID:** `financial` | **Category:** Utility System | **Files:** `demos/financial.js`, `demos/financial.css`, `demos/financial.html`, `scripts/ui-harness-check.mjs`, `CLAUDE.md`

### Brief
User yêu cầu package lại logic chọn input UI và logic hiển thị result side cho Money Lab, đồng thời phải để Claude và các agent khác nắm được như một rule tái sử dụng, không phụ thuộc trí nhớ chat.

### Log
- Vấn đề gốc: field control đang chủ yếu khai báo thủ công bằng `type`, nên utility mới có thể chọn sai UI như dropdown thay vì pills hoặc selector card thay vì control compact.
- Vấn đề tiếp theo: result side dễ lặp thông tin giữa formula, detail rows, chart legend và chart center; ngoài ra chart legend có thể vỡ layout và chồng chữ khi panel hẹp.
- User expectation: phải package rule thành guidance cấp repo và skill, đồng thời để harness bắt được ít nhất các rule nền quan trọng.

### Decisions made
- Thêm `field decision layer` trong `financial.js` để normalize control từ `ui metadata` như `valueType`, `precision`, `decisionMode`, `compareOptions`, `optionCount`, `sampleNumbers`.
- Viết guideline rõ ràng trong `CLAUDE.md` và `.agents/skills/momo-prototype/SKILL.md` cho 2 bài toán:
  - chọn input control
  - quyết định khi nào result side được show detail hoặc chart
- Giữ backward compatibility bằng fallback từ `type` cũ, nhưng khuyến khích utility mới phải khai báo `ui`.
- Mở rộng `ui-harness-check.mjs` để kiểm tra decision map, normalization và sự tồn tại của explicit metadata cho các field đại diện.

### Learning
- Với utility system, đừng chỉ package component; phải package luôn `decision rule` cho component selection, nếu không UI sẽ drift sau vài vòng thêm tool.
- Result side phải được xem như một information hierarchy system: result là lớp 1, detail là lớp 2, chart là lớp 3. Không được để 3 lớp này kể lại cùng một meaning.
- Chart chỉ hợp lệ khi giúp user hiểu `breakdown`, `trend` hoặc `comparison`; nếu không đổi quyết định thì bỏ.
- Legend, chart center và badge phải có responsive constraints ngay từ đầu; không chờ đến khi user thấy chồng chữ mới sửa.
- Slider chỉ hợp lệ cho giá trị liên tục hoặc gần liên tục mang tính explore. Dữ liệu rời rạc như năm sinh, mốc luật, danh mục hành chính hoặc kỳ hạn pháp lý phải dùng dropdown hoặc control rời rạc tương đương.
- Checkbox chỉ dùng cho yes/no hoặc nhiều điều kiện độc lập. Nếu các lựa chọn loại trừ nhau, phải dùng pills, segmented hoặc dropdown.
- Theo Mobase: Checkbox dành cho multi-select, Radio Group dành cho single choice nhiều hơn 2 option, Toggle switch dành cho bật tắt có hiệu lực ngay, Stepper dành cho numeric adjustment quanh giá trị mặc định, Slider dành cho preset range.

### Harness
- Command: `node scripts/ui-harness-check.mjs`
- New coverage:
  - decision rule map tồn tại trong `financial.js`
  - field UI metadata derivation và control inference tồn tại
  - tool catalog đi qua normalization layer
  - có explicit `ui` metadata mẫu cho money input, exploratory range input và comparison selector

## Bảo hiểm xe Flow — 2026-07-02

**ID:** `bao-hiem-xe-flow` | **Category:** Widget (cluster Flow) | **File:** `demos/bao-hiem-xe-flow.html`

### Brief
Flow demo thứ 2 của mô hình Widget Flow (sau financial-flow): Thông tin xe → BHTNDS bắt buộc + mức phạt → Gói tự nguyện (vật chất ô tô / trộm cắp xe máy) → Tổng chi phí + CTA W2A. Kèm theo: tách nhóm Utilities Tool trong sidebar lab.html thành 2 cluster Flow / Tools (pattern giống MoSpark cluster), item flow có tagline riêng qua field `navTagline`.

### Decisions made
- Branching xe máy / ô tô trên cùng 1 wizard: field hiển thị theo `S.vt`, section 3 có 2 khối UI riêng (`volCar` / `volMoto`) thay vì 2 file demo
- Framing "phí TNDS = 1/X mức phạt" đặt ngay từ bước 1 (penalty strip live) thay vì đợi summary - đây là hypothesis chính của flow
- Cluster Widget dùng lại markup `proto-owner-group` + `proto-owner-label` của MoSpark/Platform nên không cần CSS mới
- Tagline per-item qua `navTagline` field trong PROTOTYPES, ưu tiên trước mọi fallback trong renderNav
- Fix 2 lỗi kế thừa từ financial-flow ngay trong file mới: input xóa trắng vẫn validate khi confirm, CTA là thẻ `<a>` có href onelink placeholder

### Issues gặp phải
- financial-flow chưa có rewrite trong vercel.json → 404 production. Fix: thêm cả `/financial-flow` và `/bao-hiem-xe-flow` cùng lúc
- `.devserver.js` đọc rewrites từ vercel.json chỉ lúc startup → route mới 404 cho tới khi restart server. Fix: preview_stop + preview_start

### Lessons
- Khi thêm rewrite mới, luôn restart node-devserver, curl check 200 trước khi test UI
- Mô hình flow wizard (accordion 3 bước + result panel unlock dần) copy được nguyên CSS giữa các flow; nếu có flow thứ 3 nên tách thành template chung để tránh drift

---

## Thoát nợ thẻ & trả góp + Kế hoạch FIRE — 2026-07-03

**ID:** `thoat-no-the`, `ke-hoach-fire` | **Category:** Widget (cluster Flow) | **Files:** `demos/thoat-no-the.html`, `demos/ke-hoach-fire.html`

### Brief
Mở rộng Utilities Flow hub với 2 flow tài chính/thanh toán: kế hoạch thoát nợ thẻ tín dụng (Payment/BNPL angle, cross-sell VTS) và kế hoạch FIRE (PFM query trong GEO North Star).

### Decisions made
- Port logic từ 4 tool có sẵn trong financial.js (lai-the-tin-dung, tra-gop, debt-payoff, tu-do-tai-chinh) thay vì viết mới - đảm bảo công thức nhất quán giữa tool đơn lẻ và flow
- Trả góp VTS xử lý là nghĩa vụ cố định (gốc/kỳ + 3% phí), trừ khỏi ngân sách trước khi simulate nợ revolving - vì VTS không lãi kép, không thuộc bài toán avalanche/snowball
- Bảng so sánh 3 phương án (chiến lược chọn / chiến lược kia / chỉ trả tối thiểu) để scare number "14 năm, 34tr lãi" tự thuyết phục user
- FIRE flow: bước 3 là SWR (độ an toàn) thay vì gộp vào bước 1 - giữ mỗi bước một quyết định rõ ràng
- FLOWS array trong utilities-flow.html: đổi ke-hoach-fire từ coming sang live, thêm thoat-no-the với icon 07_credittech

### Issues gặp phải
- Không có issue mới. Restart devserver sau khi thêm rewrite (đã biết từ build trước), curl 200 pass ngay

### Lessons
- CSS flow wizard đã copy lần thứ 4 (financial-flow → xe-may → xe-oto → 2 flow mới). Đến lúc cân nhắc tách `assets/flow-wizard.css` chung nếu build thêm flow
