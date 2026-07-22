# Build Log — web-momo-prototype

> Ghi lại mọi build session: decisions, issues, lessons learned.

---

## Cinema Genres Index + store.js Fix — 2026-07-04

**ID:** `cinema-genres` | **Category:** Platform (sub-tool của `cinema`) | **File:** `demos/cinema-genres.html`

### Brief
Trang index liệt kê toàn bộ thể loại phim (`/cinema/genres`) với featured section (hot genres), sort controls (Phổ biến nhất / A-Z / Nhiều phim nhất), genre grid 4-col với poster strip + count badges + sub-genre chips. Mục tiêu: SEO entry point cho toàn bộ genre cluster, tăng depth browsing.

### Decisions made
- **Poster strip design cho genre card**: 3 thumbnail nhỏ xếp ngang tạo collage thay vì single hero poster. Nhìn rõ "thể loại" hơn vì không bị dominated bởi 1 film cụ thể.
- **Featured section chỉ show 3 hot genres**: Chọn `hot: true` trong data - không phải tất cả genres. Giữ section focused, không clutter.
- **Sort stateless (no server)**: `sortedGenres()` function sort pure JS trên `GENRES` array - không cần API, fully offline.
- **Genre card CTA link sang `/cinema/genre/:slug`**: Connect trực tiếp sang genre detail page đã có.
- **Sub-tool trong cinema `tools` array**: Không cần GROUP_ITEM_ORDER entry mới, sidebar không thay đổi.

### Issues gặp phải
- **store.js Edit anchor collision**: Edit để thêm `cinema-genres` entry dùng `src: 'demos/cinema-director.html'` làm anchor nhưng cũng khớp với line trong cinema-director entry. Kết quả: cinema-genres fields bị inject vào cuối cinema-director object thay vì tạo entry riêng, đồng thời tạo duplicate cinema-director entry.
- **Fix**: Read store.js, xác định toàn bộ broken block (lines 214-245), dùng unique old_string bao toàn bộ 2 entries để replace bằng 1 cinema-genres entry đúng + 1 cinema-director entry đúng.

### Lessons
- Khi thêm entry mới vào `tools` array, dùng old_string bao toàn bộ object trước đó làm anchor (không chỉ dùng `src`/`address` lines riêng lẻ) - tránh partial match collision.
- Verify bằng `Read` trước khi Edit, confirm unique context đủ dài để anchor không khớp sai chỗ.

---

## Cinema Director / Actor / Genre Pages — 2026-07-04

**IDs:** `cinema-director`, `cinema-actor`, `cinema-genre` | **Category:** Platform (sub-tools của `cinema`) | **Files:** `demos/cinema-director.html`, `demos/cinema-actor.html`, `demos/cinema-genre.html`

### Brief
3 trang content taxonomy mới cho Cinema: profile page đạo diễn/diễn viên và filtered listing page theo thể loại. Mục tiêu SEO target branded query ("phim Trấn Thành", "phim kinh dị đang chiếu") và increase depth của cinema funnel.

### Decisions made
- **Sub-tools, không phải standalone entries**: 3 trang này là con của `cinema` entry trong store.js (`tools` array), không cần thêm vào `GROUP_ITEM_ORDER` - giữ sidebar gọn.
- **Shared UI template cho director + actor**: 90% giống nhau, chỉ khác role badge và "Known For" strip ở actor. Tách ra 2 file riêng (không shared template) để giảm complexity và dễ diverge độc lập sau này.
- **Genre page dùng filter-first UX**: Format pills + Sort toggle + Tab trạng thái - không chỉ đơn thuần là film grid. Giúp differentiate với homepage genre chip.
- **Avatar dùng initials + gradient**: Không cần external portrait photo URL. Reliable, offline-safe, đồng nhất design.
- **Related genres section**: Cuối genre page có 6 genre chips khác để cross-browse - tăng depth session.
- **Vercel rewrites order**: 3 rules mới phải đặt TRƯỚC `/cinema/:path*` catch-all. Devserver cần restart sau khi sửa vercel.json (vì đọc config 1 lần lúc startup).

### Issues gặp phải
- **Devserver không pick up vercel.json mới**: Server đọc vercel.json 1 lần lúc `require()` startup. Sau khi sửa vercel.json, phải stop → start server mới. `preview_start` với server đang chạy trả về "reused" mà không restart.
- **Preview redirect về film-detail thay vì director**: Do catch-all rule `/cinema/:path*` được cache từ session trước. Fix: stop server bằng preview_stop, rồi preview_start lại.

### Lessons
- `preview_start` reuses running server nếu port còn alive. Nếu cần force-restart do config change, dùng `preview_stop` trước rồi `preview_start`.
- Devserver (`.devserver.js`) parse `vercel.json` một lần tại startup bằng `fs.readFileSync` - không watch file changes. Luôn nhớ restart sau khi sửa vercel.json.
- 3 new cinema pages là sub-tools của cinema entry → không cần thêm vào `GROUP_ITEM_ORDER`; sidebar không thay đổi, không cần bump logic group.

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

---

## Lab.html Card/Elevation + Hero Redesign (Astryx-inspired) — 2026-07-05

**File:** `assets/store.css`, `lab.html` (version bump)

### Brief
User muốn "improve UI" của lab.html bằng cách mượn design pattern/token từ Astryx (Meta's open source design system: React+StyleX) nhưng viết lại thuần vanilla CSS - không cài React/npm, giữ nguyên kiến trúc zero-build của repo. Scope: card & elevation system + redesign hero từ neon black-pink sang flat/neutral.

### Decisions made
- Lấy token thực từ Astryx source code (không đoán): radius scale base×1/2/3/7 (inner=4/element=8/container=12/page=28), shadow 2-lớp mềm (low/med/high) thay vì shadow 3-lớp có viền cứng hiện tại
- Token mới (`--lab-shadow-*`, `--radius-element/container/page`) scope trong `.lab-page` only, không đụng global `--shadow-small/medium/large` vì các demo khác đang dùng chung
- Hero: bỏ nền đen + glow neon text-shadow, chuyển sang nền trắng flat + 1 blob radial pink rất nhạt (6% opacity) làm cue thương hiệu duy nhất, giữ đúng nguyên tắc "spend boldness ở 1 chỗ"
- Card hover: đổi từ "luôn hover ra viền pink" (xung đột màu khi card nằm trong section nền xanh/tím) sang viền neutral grey-300, giữ màu category chỉ ở badge

### Issues gặp phải
- **CSS chết (dead code) trong store.css**: `.hl-card`, `.hl-owner-section`, `.mh-cap-card`/`.mh-hero` tồn tại trong CSS và có vẻ là card component chính (tên gọi khớp semantic), nhưng khi verify bằng `document.querySelector` thì `.hl-card` và `.hl-owner-section` **không hề được render** — không có chỗ nào trong `store.js` tạo ra các class này. `.mh-cap-card` có được render bởi hàm `buildMoSparkHomeIntro()` trong store.js nhưng **hàm này cũng không được gọi ở đâu cả** → toàn bộ nhánh code đó chết.
- Class thật sự đang chạy cho lưới card ở trang "All Prototypes" là `.proto-card` / `.lab-card-grid` / `.lab-section` (định nghĩa ở cuối file, sau dòng 1600). Sửa nhầm `.hl-card` trước, không thấy đổi gì trên preview → mới phát hiện ra bằng DOM query.

### Lessons
- **Trước khi sửa CSS cho 1 trang cụ thể trong `store.css` (file rất dài, 2000+ dòng, nhiều thế hệ code chồng lấn), luôn verify bằng `document.querySelector('.class-name')` trong preview trước khi tin vào tên class "nhìn có vẻ đúng".** File này có ít nhất 2 lớp CSS cũ (`hl-*`, `mh-*`) không còn được `store.js` sử dụng nhưng chưa bị xóa - dễ đánh lừa khi chỉ đọc CSS mà không đối chiếu DOM thực tế.
- Nên cân nhắc dọn dẹp `.hl-card`, `.hl-owner-section`, `buildMoSparkHomeIntro()` và class liên quan trong lần sau nếu xác nhận chắc chắn không còn dùng, tránh nhầm lẫn tiếp.

**Update 2026-07-05 (cùng ngày):** Đã dọn dẹp theo đúng lesson trên, ngay trong session kế tiếp.
- Audit toàn bộ `.hl-*`, `.mh-*`, `.home-*`, `.mw-*` bằng subagent (grep literal từng class trong `store.js`/`lab.html`, không đoán)
- Xóa: toàn bộ `.hl-*` (trừ `.hl-total-count` - vẫn live), toàn bộ `.mh-*`, toàn bộ `.home-*`, 2 modifier mồ côi `.mw-chip-note`/`.mw-empty` — gồm cả phần rải rác trong media query và block "HYBRID theme override" ở cuối file
- Xóa JS: hàm `buildMoSparkHomeIntro()`, data array `MOSPARK_HOME_CAPABILITIES`, `MOSPARK_PRODUCTION_STEPS`, const `MOSPARK_LOGO_URL` (chỉ dùng trong hàm vừa xóa)
- **Không đụng** `MOSPARK_SOURCE_URL`, `MOSPARK_PAIN_POINTS`, `MOSPARK_STACK`, `MOSPARK_GROWTH_STEPS` dù cũng có vẻ không được gọi — đây là data cluster khác, cần audit riêng để confirm chắc chắn trước khi xóa, tránh phá vỡ `GROUP_SUMMARY.MoSpark` nếu nó đang dùng
- Kết quả: `store.css` 1908 → 1226 dòng, `store.js` 1927 → 1806 dòng. Verify: syntax check `node --check`, brace-balance check CSS, screenshot + console log trên preview, click qua Mini Web Overview để confirm `.mw-*` (live) không bị ảnh hưởng

---

## Roadmap 2026 (Phase 1 · H1/2026) — 2026-07-05

**File:** `assets/store.js` (data `ROADMAP_PHASES` + hàm `buildRoadmapSection()`), `assets/store.css` (`.rm-*`), `lab.html` (version bump v22/v69)

### Brief
Thêm section Roadmap 2026 lên đầu `lab.html`, trước cả hero "Prototype Lab.". Nội dung Phase 1 (H1/2026 - Foundation & Core Builders) do user cung cấp trực tiếp: 10 module đã hoàn thành (GenAI Content Engine, PLG Project Management, Merchant Page O2O Database, Microsite Builder, SEO Inventory Foundation, Blog Editor, Landing Page Builder, Chatbot & KB, Ads Manager, Utilities Tool).

### Decisions made
- Data-driven: `ROADMAP_PHASES` là array, mỗi phase 1 object — thêm Phase 2 (H2/2026) sau này chỉ cần push thêm object, không phải sửa hàm render
- Format: timeline ngang (dot done/future) + grid 10 module-card, click-to-expand tại chỗ (không dùng modal) để giữ layout đơn giản và không cần thêm state phức tạp
- Preview text rút gọn còn 1 câu cho mỗi module, giữ nguyên full text gốc của user khi expand — tránh wall-of-text khi chưa click
- Status "Đã hoàn thành" hiển thị dạng text + dot màu (giống pattern `.sidebar-footer-block` có sẵn), không dùng pill/badge nổi bật kiểu SaaS announcement (theo memory đã lưu trước đó)
- CSS dùng lại token `--lab-shadow-low`, `--radius-container` đã có sẵn trong `.lab-page` (từ lần cleanup trước), không tạo token mới trùng lặp

### Issues gặp phải
- Không có issue. Chèn thẳng `buildRoadmapSection()` vào đầu return string của `buildLabDirectory()`, wiring click-to-expand thêm vào `wireHome()` theo đúng pattern các handler khác (querySelectorAll + addEventListener, không dùng inline onclick)

### Lessons
- Pattern "card click-to-expand tại chỗ" (toggle class `.expanded`, ẩn/hiện `.rm-module-preview`/`.rm-module-full`) dùng lại được cho các danh sách nội dung dài khác trong tương lai (VD: khi thêm Phase 2, hoặc các list mô tả tính năng dài tương tự) thay vì luôn phải mở modal/drawer

**Update 2026-07-05 (cùng ngày):** User feedback ngay sau khi thấy bản đầu: bỏ code M1/M2/M5 (jargon nội bộ không cần thiết cho roadmap), và "UI không tạo cảm giác đây là Roadmap".
- **Root cause của feedback thứ 2**: bản đầu chỉ có 1 mini horizontal timeline (2 chấm decoration) tách rời hoàn toàn khỏi phase content/module grid bên dưới — không có liên kết thị giác giữa "timeline" và "nội dung", nên không đọc được như 1 roadmap thật.
- **Fix**: đổi sang vertical timeline pattern kinh điển — spine dọc bên trái chạy xuyên suốt, node tròn (đặc = done, rỗng = future) nằm trên spine, nội dung phase nằm bên phải node cùng hàng. Phase 2/H2 chưa có nội dung vẫn render như 1 "trạm" trên spine với placeholder text, giữ cảm giác hành trình liên tục thay vì cắt cụt sau Phase 1.
- **Lesson cho lần sau**: khi user brief "vẽ roadmap", đừng mặc định hiểu là "thêm timeline decoration + card grid" — roadmap thật cần timeline LÀ cấu trúc tổ chức chính (spine xuyên suốt nối các mốc), không phải một dải trang trí tách biệt phía trên nội dung. Nên hỏi rõ hoặc mock trước 1 hướng "timeline-as-structure" thay vì "timeline-as-header" ngay từ Phase 2 (Plan) của build-prototype skill.
- Xóa field `code` khỏi toàn bộ 10 module trong `ROADMAP_PHASES` data (không chỉ ẩn ở UI mà xóa hẳn khỏi data, tránh dead field).

---

## Product Roadmap tách file riêng + đăng ký vào Lab sidebar — 2026-07-05

**File mới:** `demos/product-roadmap.html` | **ID:** `product-roadmap` | **Category:** MoSpark (cụm Modules, cạnh `mospark-activity-log`)

### Brief
User yêu cầu: tách Roadmap 2026 (đã build trực tiếp trong `lab.html` ở lần trước) ra file riêng, trả lab.html về nguyên trạng (không còn roadmap trong hero), thêm 1 button trên trang Index mở trang Product Roadmap. Sau đó user clarify thêm: cũng muốn Product Roadmap xuất hiện trong Lab sidebar (ban đầu tưởng user muốn loại hẳn khỏi Lab, hỏi lại `AskUserQuestion` mới rõ ý).

### Decisions made
- File chuẩn theo pattern repo: `demos/product-roadmap.html` self-contained, `<link>` tới `../assets/mobase-tokens.css` thay vì tự định nghĩa lại toàn bộ token (nhẹ hơn, nhất quán màu/spacing với các demo khác cũng dùng pattern này như `news.html`)
- Giữ nguyên UI vertical timeline đã fix ở lần trước (spine dọc, node done/future), chỉ đổi elevation token cục bộ (`--rm-shadow-low`) vì `--lab-shadow-low` chỉ tồn tại scope trong `.lab-page` của `store.css`, không có ở đây
- Đăng ký vào `PROTOTYPES` + `GROUP_ITEM_ORDER.MoSpark` + `MOSPARK_CLUSTER_ITEMS.Modules`, đặt cạnh `mospark-activity-log` vì cùng là nội dung "Ops/meta" về chính Web Platform (không phải prototype sản phẩm customer-facing)
- Rewrite `/product-roadmap` → `/demos/product-roadmap.html` thêm vào `vercel.json`, cần restart devserver để load rewrite mới (theo lesson đã biết trong CLAUDE.md)
- Button trên Index đặt ở nav bar cạnh "Enter Lab", style outline (secondary) để không cạnh tranh với CTA chính

### Issues gặp phải
- Logo `logo-mospark-dark.svg` thiết kế cho nền đen (phần "Mo" gần như vô hình trên nền trắng của topbar mới) — phải bọc lại trong pill nền đen `#050505` giống pattern `hl-mospark-logo`/`mh-brand-row` đã dùng ở nơi khác trong repo, không đặt logo dark trực tiếp lên nền sáng.
- User feedback ban đầu ("bỏ Roadmap trong đây đi" kèm screenshot sidebar Lab) bị hiểu nhầm là "xóa khỏi Lab" trong khi thực ra Lab sidebar lúc đó không hề có entry Roadmap nào — hỏi lại mới rõ ý thật là "thêm vào Sidebar".

### Lessons
- Khi feedback của user kèm screenshot nhưng nội dung screenshot không khớp với state hiện tại của code (đã verify bằng grep + DOM query), đừng đoán ý — hỏi lại ngay bằng `AskUserQuestion` thay vì suy diễn theo hướng có vẻ hợp lý nhất. Lần này đoán sai hướng (remove) trong khi ý thật là ngược lại (add).

---

## Pin Product Roadmap 2026 lên đầu sidebar + home grid — 2026-07-05

**File:** `assets/store.js` (field `pinned: true`, `renderNav()`, `buildLabDirectory()`)

### Brief
User muốn "Product Roadmap 2026" nằm trên cùng sidebar, trên cả group "Mini Web Overview" (group đầu tiên theo `GROUP_ORDER`).

### Decisions made
- Thêm field `pinned: true` vào entry `product-roadmap` trong `PROTOTYPES`, giữ nguyên `category: 'MoSpark'` (không đổi) để không ảnh hưởng breadcrumb "MoSpark Platform / Product Roadmap 2026" khi mở workspace và không đổi số đếm badge "MoSpark Platform 12"
- Gỡ `product-roadmap` khỏi `GROUP_ITEM_ORDER.MoSpark` và `MOSPARK_CLUSTER_ITEMS.Modules` (không còn cần thứ tự trong group vì sẽ render pinned riêng)
- `renderNav()`: thêm `pinnedItems = PROTOTYPES.filter(p => p.pinned)`, render thành 1 section riêng (`.proto-nav-pinned`) chèn trước toàn bộ `GROUP_ORDER.map(...)`, đồng thời filter `!p.pinned` khỏi vòng lặp group chính để tránh render trùng 2 lần
- `buildLabDirectory()`: áp dụng pattern tương tự cho lưới card ở trang chủ Lab (section "Pinned" chèn trước các section theo `GROUP_ORDER`) - để nhất quán, tránh tình trạng item vừa pinned trên sidebar vừa nằm lẫn trong card grid MoSpark bên dưới
- Index badge sidebar dùng ký tự `★` thay vì số thứ tự `01/02` (vì đây là item pinned đứng riêng, không thuộc thứ tự trong group nào)

### Issues gặp phải
- Không có issue. Filter `!p.pinned` đơn giản, tái dùng đúng `buildProtoCard()`/`.proto-nav-btn` hiện có nên click-through, active state, breadcrumb đều hoạt động ngay không cần sửa thêm.

### Lessons
- Pattern `pinned: true` + filter `!p.pinned` trong các vòng lặp group là cách nhẹ nhàng để "ghim" 1 prototype lên đầu mà không phải tạo category mới hay đổi `GROUP_ORDER` (tránh side-effect lan sang toàn bộ hệ thống category/màu sắc/filter chip). Dùng lại pattern này nếu sau cần pin thêm item khác.

---

## Roadmap H1/2026 — nội dung chi tiết 11 module — 2026-07-05

**File:** `demos/product-roadmap.html` (data `ROADMAP_PHASES`, CSS `.rm-module-points`)

### Brief
User cung cấp nội dung Phase 1 (H1/2026) đầy đủ và chi tiết hơn nhiều: 11 module (thêm mới "Umami Tracking & User Identity" so với bản 10 module trước), mỗi module có 2-7 điểm chi tiết dạng "Tiêu đề: mô tả" thay vì 1 đoạn văn ngắn.

### Decisions made
- Đổi schema module từ `desc: string` sang `points: [{title, desc}]` — render thành `<ul class="rm-module-points">`, mỗi `<li>` có `<strong>title:</strong> desc`
- Nút toggle hiện số lượng điểm ngay trên label ("Xem chi tiết (7)") để user biết trước card nào dài trước khi click — dùng `data-count` trên button để giữ số khi toggle qua lại collapsed/expanded
- Merchant Page có 1 điểm dạng luồng 5 bước lồng nhau ("Luồng khởi tạo Merchant tự động") — không tạo thêm 1 cấp list con, thay vào đó nối các bước bằng "→" trong 1 câu `desc`, nhất quán với style "loop" đã dùng ở field `loop` của registry (VD: "Xem timeline → Chọn phase → ...")
- Đổi grid từ `repeat(5, minmax(0,1fr))` cố định sang `repeat(auto-fill, minmax(230px,1fr))` vì 11 module không chia hết cho 5 (sẽ để lại 1 card mồ côi ở hàng cuối) và nội dung mỗi card giờ dài hơn nhiều, cần rộng hơn 1/5 màn hình. Auto-fill cũng tự responsive, bỏ được media query ép cột cứng cho tablet.

### Issues gặp phải
- **Bug CSS specificity**: sau khi đổi `.rm-module-full` từ `<p>` sang `<ul class="rm-module-full rm-module-points">`, quy tắc `.rm-module-points { display: flex }` (khai báo SAU `.rm-module-full { display: none }` trong cùng file, cùng specificity 1 class) đã ghi đè, khiến toàn bộ nội dung chi tiết hiện ra ngay cả khi card chưa expand. Phát hiện qua screenshot verify (thấy preview + full list cùng hiện). Fix bằng cách gộp `display:flex` vào selector kết hợp `.rm-module-card.expanded .rm-module-full.rm-module-points` (specificity cao hơn), bỏ hẳn `display` ra khỏi `.rm-module-points` base rule.

### Lessons
- Khi 1 element mang nhiều class (`class="a b"`) và cả `.a` lẫn `.b` cùng khai báo `display`, thứ tự SOURCE ORDER trong CSS quyết định (không phải thứ tự class trong HTML) nếu specificity bằng nhau. Luôn kiểm tra bằng screenshot thực tế sau khi đổi tag/class của phần tử có logic show/hide qua class toggle — đừng chỉ tin logic JS đúng là đủ, CSS specificity có thể âm thầm phá vỡ nó.

---

## Roadmap card expand-to-full-width cho tool có mô tả dày — 2026-07-05

**File:** `demos/product-roadmap.html`

### Brief
User nhận xét card hẹp (230px) không đủ chỗ cho tool có 5-7 điểm chi tiết, hỏi ý kiến có nên "làm hàng ngang" không. Mình đề xuất: card expand thì span full width của grid (đẩy card khác xuống dòng), bên trong list chia 2 cột thay vì 1 cột dọc hẹp — user đồng ý ("ok").

### Decisions made
- `.rm-module-card.expanded { grid-column: 1 / -1; }` — card đang mở chiếm trọn hàng ngang của `.rm-module-grid`
- List điểm khi expand chuyển từ flex-column sang CSS `column-count: 2; column-gap: 28px;` (multi-column layout, không dùng CSS grid) vì các điểm có độ dài không đều nhau — multi-column tự flow top-down theo cột, không ép hàng bằng nhau như grid 2 cột thật sẽ làm
- `break-inside: avoid` trên mỗi `<li>` để tránh 1 điểm bị cắt ngang giữa 2 cột
- Mobile (`max-width:640px`): fallback về `column-count: 1` vì màn hẹp chia 2 cột sẽ quá chật

### Issues gặp phải
- Không có issue, verify ngay bằng screenshot: expand PLG Project (7 điểm) và Blog Editor (6 điểm) cùng lúc, layout không vỡ, card khác bị đẩy xuống đúng như dự tính. Mobile fallback 1 cột hoạt động đúng.

### Lessons
- CSS `column-count` (multi-column text layout) phù hợp hơn CSS Grid 2 cột khi các item trong list có độ dài không đều — tránh được khoảng trắng thừa mà grid 2 cột cân bằng hàng sẽ tạo ra. Cân nhắc dùng lại pattern này cho bất kỳ danh sách bullet dài, độ dài không đều nào cần hiển thị rộng.

---

## Đổi module grid → point row + single detail panel — 2026-07-05

**File:** `demos/product-roadmap.html`

### Brief
User feedback: "trình bày gì thấy ghê vậy" — 11 card cùng hiện tên + preview mặc định (dù đã expand-to-full-width) vẫn quá dày. Yêu cầu cụ thể: mỗi dự án trong Phase 1 chỉ nên là **một điểm** (point/tag nhỏ gọn), bấm vào mới xổ ngang chi tiết ra.

### Decisions made
- Bỏ hẳn `.rm-module-grid` (grid card luôn hiện tên+preview) → thay bằng `.rm-point-row`: hàng pill nhỏ gọn (chỉ tên, có dot marker), flex-wrap tự động
- Bỏ pattern "mỗi card tự expand tại chỗ" → chuyển thành **1 detail panel dùng chung** cho cả phase (`.rm-point-detail`, `hidden` mặc định). Bấm point nào thì panel hiện nội dung point đó, chỉ 1 point active tại 1 thời điểm (bấm point khác thì swap nội dung, bấm lại point đang active thì đóng panel) — tránh tình trạng nhiều panel dài cùng mở gây rối mắt
- Giữ nguyên layout 2-cột (`column-count:2`) bên trong panel detail vì vẫn đúng nhu cầu "mô tả dày cần đọc rộng" đã quyết định ở bước trước, chỉ đổi chỗ chứa (giờ là panel dùng chung thay vì từng card)
- JS: query `phase.modules[idx]` từ `ROADMAP_PHASES` theo `data-idx` lưu trên mỗi point, không cần đổi cấu trúc data (`points: [{title, desc}]` giữ nguyên)

### Issues gặp phải
- Không có issue mới. Verify bằng screenshot: bấm point A → panel hiện đúng nội dung A; bấm point B → panel swap sang B, point A tắt active; bấm lại B → panel đóng. Mobile: point tự wrap nhiều dòng, panel về 1 cột.

### Lessons
- Khi 1 trang có nhiều item cùng loại và mỗi item đều có nội dung dài, đừng mặc định "mỗi item = 1 card luôn hiện preview + tự expand độc lập" — dễ gây quá tải thị giác khi số lượng item lớn (ở đây là 11). Cân nhắc pattern "list điểm chọn + 1 vùng chi tiết dùng chung" (giống tabs/selector) để mặc định nhẹ, chỉ tốn không gian khi user chủ động chọn xem.

---

## Milestone rail dọc thay cho point-row ngang — 2026-07-05

**File:** `demos/product-roadmap.html`

### Brief
User gửi screenshot cận cảnh thanh spine dọc (đoạn nối giữa node Phase 1 và Phase 2) kèm giải thích: ý họ là 11 dự án nên nằm làm milestone TRÊN chính cái bar dọc đó (thứ tự bất kỳ), bấm vào mới mở nội dung chi tiết. Bản ngay trước (`.rm-point-row` hàng ngang các pill + 1 detail panel dùng chung bên dưới) chưa đúng ý — đó là hàng ngang, không phải bar dọc.

### Decisions made
- Đổi từ `.rm-point-row` (flex-wrap hàng ngang) sang `.rm-milestone-rail`: list dọc, mỗi milestone có node tròn + nhãn, nối nhau bằng đường dọc `::before` — dùng lại đúng pattern `.rm-stop`/`.rm-stop-node` của timeline Phase chính (spine + node), chỉ thu nhỏ lại làm sub-level
- Layout 2 cột ngang hàng: rail dọc bên trái (`flex: 0 0 220px`) + `.rm-milestone-detail` bên phải (`flex:1`) — bấm milestone nào thì panel bên phải "xổ ngang" hiện nội dung ngay, đúng nghĩa đen thay vì chỉ full-width bên dưới như bản trước
- Panel detail có state rỗng mặc định (`Chọn một dự án bên trái để xem chi tiết.`) thay vì ẩn hẳn — layout không bị nhảy cột khi chưa chọn gì
- Responsive: dưới 780px, `.rm-milestones` chuyển `flex-direction: column` (rail lên trên, panel xuống dưới, full width), điểm list bên trong panel cũng về 1 cột

### Issues gặp phải
- Không có issue mới, tái sử dụng gần như nguyên vẹn JS logic single-active-detail từ bản point-row trước (chỉ đổi tên class/selector), test lại toggle/swap/click vẫn đúng.

### Lessons
- Khi user mô tả UI kèm ảnh chụp, ưu tiên đọc đúng thành phần trong ảnh (ở đây là cái spine dọc) thay vì suy diễn ý tưởng tương tự nghe hợp lý (hàng ngang pill). Lần build trước đã đoán sai hướng (ngang thay vì dọc) dù cùng chung tinh thần "point + click mở chi tiết" — 2 lần liền cùng 1 tính năng bị hiểu sai theo 2 kiểu khác nhau, nên hỏi lại sớm hơn nếu còn mơ hồ về hướng bố cục (ngang/dọc) thay vì chọn đại 1 hướng rồi để user tự sửa.

---

## Thêm Phase 2 (H2/2026) — 12 module — 2026-07-05

**File:** `demos/product-roadmap.html`

### Brief
User cung cấp nội dung đầy đủ Phase 2 (H2/2026): 12 module (11 module trùng tên với H1 nhưng nội dung khác hẳn - đây là công việc MỚI trong H2 chứ không phải lặp lại, cộng thêm 1 module hoàn toàn mới "MoSpark Request"). Blog Editor có cấu trúc lồng phức tạp nhất: 1 feature cha "Tích hợp SEO/GEO Scoring Gate" (4 sub-bullet) + 1 nhóm "đề xuất tích hợp" riêng (4 bullet nữa) = 8 điểm tổng.

### Decisions made
- Thay comment placeholder `// Phase 2 sẽ thêm vào đây` bằng object phase thật, xóa luôn đoạn `.rm-stop-future` hard-code cuối `buildRoadmap()` (không cần placeholder nữa vì đã có nội dung thật) — `:last-child` CSS tự động xử lý việc ẩn đường nối sau Phase 2 vì giờ nó thực sự là stop cuối cùng
- Status Phase 2 = `'in-progress'` (không phải `'done'`) vì ngày hiện tại 2026-07-05 là mốc bắt đầu H2 - Phase 1 (H1) đã xong, Phase 2 vừa bắt đầu, chưa hoàn thành
- Thêm `PHASE_STATUS_LABELS` map (`done`/`in-progress`/`planned`) thay vì ternary cứng chỉ biết mỗi `'done'` - cho phép mở rộng thêm trạng thái khác sau này (VD Phase 3 `'planned'`)
- Thêm màu riêng cho status "Đang triển khai" (cam `#f79009`/`#fef0c7`) khác với "Đã hoàn thành" (xanh lá) để phân biệt nhanh bằng mắt ngay trên phase header, không cần đọc chữ
- Blog Editor (H2): gộp dòng "Tính năng: ..." vào làm desc của point cha "Tích hợp SEO/GEO Scoring Gate (Cải tiến H2)" thay vì tách thành 1 point riêng tên "Tính năng" (quá chung chung, không có ý nghĩa khi đứng một mình trong danh sách 8 điểm) — flatten toàn bộ cấu trúc lồng 2 cấp (feature cha + nhóm đề xuất) thành 1 list phẳng 8 điểm, nhất quán với toàn bộ module khác

### Issues gặp phải
- Không có issue. Verify: đếm số `name: '...'` trong file = 23 (11 H1 + 12 H2, khớp), JS syntax hợp lệ, click milestone "Blog Editor" ở H2 (8 điểm, dài nhất) hiển thị đúng 2 cột không vỡ, cả 2 phase hiện đúng badge trạng thái khác màu, spine nối liên tục không còn khúc "future" cụt ở cuối, mobile/desktop đều ổn.

### Lessons
- Khi 1 module cùng tên xuất hiện ở nhiều phase (VD "GenAI Content" ở cả H1 và H2) nhưng nội dung hoàn toàn khác, đừng nhầm là "cập nhật/merge" nội dung cũ — đây là 2 entry độc lập theo 2 giai đoạn thời gian khác nhau, giữ nguyên cả hai, không ghi đè.

---

## Checkmark cho milestone đã hoàn thành (Phase status = done) — 2026-07-06

**File:** `demos/product-roadmap.html`

### Brief
User feedback (kèm screenshot milestone rail toàn vòng tròn rỗng): UI bullet point cần "ấn tượng hơn", nhấn mạnh đây là "Goal đã đạt được" (Phase 1 status = done).

### Decisions made
- Thêm `data-status="${p.status}"` vào `.rm-milestone-rail` để CSS phân biệt được milestone thuộc phase nào đã "done" vs "in-progress"
- Phase `done`: node đổi từ vòng tròn rỗng xám sang nền hồng nhạt (`--pink-50`/`--pink-200`) + dấu `✓` bên trong (qua `::after`), đường spine nối cũng đổi sang hồng nhạt (`--pink-100`) thay vì xám trung tính — tạo cảm giác "cả chuỗi đã hoàn thành" ngay cả khi chưa click vào item nào
- Phase `in-progress` (H2): giữ nguyên node rỗng xám trung tính vì đây là công việc CHƯA đạt được, tránh gắn nhầm tín hiệu "đã xong" cho việc đang làm
- Trạng thái `active` (đang click xem chi tiết) vẫn giữ nguyên pink đặc + check trắng, không đổi hành vi tương tác cũ, chỉ đổi trạng thái mặc định (chưa click) của node theo phase status

### Issues gặp phải
- Không có issue, verify bằng screenshot: Phase 1 toàn bộ 11 node hiện ✓ hồng nhạt ngay khi load trang (chưa click gì), Phase 2 vẫn giữ vòng tròn rỗng đúng như kỳ vọng, click 1 node ở Phase 1 vẫn chuyển đúng sang pink đặc. Mobile hiển thị rõ, không vỡ layout.

### Lessons
- Khi 1 danh sách milestone có ý nghĩa trạng thái khác nhau theo ngữ cảnh cha (ở đây là "phase status"), nên gắn trạng thái đó trực tiếp lên DOM (data attribute) để CSS tự suy ra style thay vì hard-code cùng 1 kiểu node cho mọi trường hợp — tránh phải sửa JS mỗi khi cần thêm biến thể trạng thái mới (VD sau này thêm "blocked"/"delayed").

---

## Fix 2 bug UI checkpoint sau khi thêm checkmark — 2026-07-06

**File:** `demos/product-roadmap.html`

### Brief
User phát hiện ngay sau lần build checkmark trước: (1) đường line dọc nối các checkpoint bị lệch, không thẳng tâm; (2) bấm vào checkpoint (active state) thì bị "tô full màu" — thực chất là dấu ✓ biến mất/chìm màu.

### Root cause
1. **Lệch tâm**: khi đổi node từ 16px→18px lúc thêm checkmark, quên update lại `left` của `.rm-milestone::before` (đường line) theo tâm mới. Line vẫn để `left:9px` trong khi tâm node thực tế là `4px (padding-left) + 9px (bán kính 18/2) = 13px`.
2. **Checkmark chìm màu khi active**: `.rm-milestone.active .rm-milestone-node::after { color: #fff; }` và `.rm-milestone-rail[data-status="done"] .rm-milestone-node::after { color: var(--momo); }` có **specificity bằng nhau** (đều 3 class/attribute). Rule thứ 2 đứng SAU trong file nên thắng, khiến check mark active vẫn bị tô màu hồng (chìm trên nền hồng đặc) thay vì trắng — lặp lại đúng loại bug specificity đã gặp ở lần build trước (`.rm-module-full`/`.rm-module-points`).

### Decisions made
- Sửa `left: 9px` → `left: 13px` cho `.rm-milestone::before`, đồng thời chỉnh `top: 24px` → `26px` cho khớp kích thước node mới
- Thêm rule `.rm-milestone-rail[data-status="done"] .rm-milestone.active .rm-milestone-node::after { color: #fff; }` — combine thêm `.active` vào selector để specificity CAO HƠN rule đặt màu hồng mặc định, đảm bảo active luôn thắng bất kể thứ tự source

### Issues gặp phải
- Đã verify bằng `getComputedStyle(..., '::after').color` để chắc chắn giá trị runtime đúng `rgb(255,255,255)`, không chỉ tin mắt nhìn qua screenshot.

### Lessons
- **Bài học lặp lại lần 2 trong cùng file**: mỗi khi 2 rule CSS cùng target 1 pseudo-element/property với specificity ngang nhau, phải chủ động tăng specificity cho rule cần "thắng" (thường là rule biểu diễn trạng thái tương tác như `.active`/`.hover`) bằng cách nối thêm class vào selector, thay vì dựa vào thứ tự khai báo (dễ quên khi code được sửa nhiều lần qua nhiều buổi). Nên grep lại toàn bộ selector cùng target 1 property (`color`, `display`...) mỗi khi thêm 1 rule mới có khả năng đụng nhau.
- Khi đổi kích thước 1 element có phần tử phụ thuộc vị trí tuyệt đối (line nối, connector...), luôn rà lại TẤT CẢ giá trị `left/top/right/bottom` liên quan thay vì chỉ sửa phần tử chính — kích thước và vị trí thường đi cùng nhau, quên 1 chỗ sẽ gây lệch.

## Bãi Đỗ Xe — rebuild theo Listing Merchant Page — 2026-07-10

**ID:** `bai-do-xe` (giữ nguyên) | **Category:** Platform (child page của vehicle-hub) | **File:** `demos/bai-do-xe.html`

### Brief
UI cũ là layout tự chế (dark header, filter bar riêng, dark map, card accordion, section marketing dưới fold). User chỉ ra bản chất là listing merchant theo điều kiện nên phải theo pattern Listing Merchant Page (`vts-merchant-finder.html`).

### Decisions made
- Rebuild in-place, giữ nguyên route `/bai-do-xe`, không đụng store.js/vercel.json.
- Clone toàn bộ khung template: page-head glass + filter chips + split 400px list / map + detail slide-over; chỉ đổi ngữ nghĩa: badge tầng → badge khu vực, rating → khoảng cách, cashback badge → status pill chỗ trống, VTS overlay → "Thanh toán MoMo" overlay, marker pill "Hoàn X%" → "N chỗ" tô màu theo trạng thái.
- Bỏ 3 section SEO dưới fold (Đối tác / Bảng giá / FAQ) vì template là full-viewport app; content đó thuộc vehicle-hub.
- Giữ nguyên SPOTS data 8 bãi, thêm field `partner` + `overnight` để map logo và filter Qua đêm.
- Bỏ leaflet.markercluster (8 điểm không cần), quản lý marker thủ công qua markerMap để sync hover card ↔ pin.

### Issues gặp phải
- Dev server chết giữa session (curl 000, tab chrome-error) → `preview_start("node-devserver")` cấp port mới, phải navigate lại theo port mới.

### Lessons
- Khi repo đã có template pattern được đặt tên (Listing Merchant Page), mọi trang cùng bản chất "liệt kê merchant theo điều kiện" nên clone khung template rồi chỉ đổi dataset + ngữ nghĩa badge, không tự chế layout mới.

## Cứu Hộ Khẩn Cấp — trang riêng tách từ vehicle-hub — 2026-07-20

**ID:** `cuu-ho` | **Category:** Platform (child page của vehicle-hub, không vào lab sidebar) | **File:** `demos/cuu-ho.html`

### Brief
Tách section `#cuu-ho` trong vehicle-hub.html thành trang đầy đủ tại `/vehicle-hub/cuu-ho`: hero khẩn cấp + live tracking mock, flow 3 bước, 2 đối tác (Zuttoride + cứu hộ ô tô mock), 6 tình huống kèm chi phí tham khảo, coverage strip, FAQ accordion.

### Decisions made
- Clone shared nav "Tiện Ích Giao Thông" từ dang-kiem.html (mega menu, không gas strip) để nhất quán vehicle hub.
- Không thêm entry store.js — pattern child page giống bai-do-xe/dang-kiem, link từ hub.
- URL dạng nested `/vehicle-hub/cuu-ho` (khác các child page khác dạng flat) theo yêu cầu user.
- Đổi toàn bộ link `/vehicle-hub#cuu-ho` → `/vehicle-hub/cuu-ho` trên 15 file demos; section trong hub giữ nguyên + thêm "Xem chi tiết →".
- Hero right là live rescue tracking card (timeline 4 trạng thái) thay vì hình minh họa — bán được value "theo dõi thời gian thực".

### Issues gặp phải
- Devserver phải restart để nạp rewrite mới từ vercel.json (đã biết từ memory Widget Flow Pattern).

### Lessons
- Nested route `/vehicle-hub/:sub` hoạt động bình thường qua rewrite tĩnh, không cần pattern `:path*`.

## Định giá xe cũ (model page) + Cross-sell Phạt Nguội — 2026-07-20

**Files:** `demos/hang-xe.html` | `demos/phat-nguoi.js` + `demos/phat-nguoi.css`

### Brief
(1) Section "Định giá xe cũ" trên trang model detail (Fortuner đầu tiên): chọn năm SX + bin km → khoảng giá thị trường, curve khấu hao 8 năm, so sánh % giữ giá với phân khúc, CTA bảo hiểm thân vỏ tính phí theo giá trị vừa định (~1.5%/năm). (2) Cross-sell theo trạng thái kết quả tra phạt nguội: có vi phạm → đăng kiểm (vi phạm chặn đăng kiểm) + TNDS; không vi phạm → bật quét hàng tuần qua hồ sơ xe + nhắc hạn.

### Decisions made
- Valuation là module data-driven: chỉ render khi model có field `valuation` - thêm model mới chỉ cần thêm data, không sửa code.
- Control theo Money Lab rules: năm SX (8 option rời rạc) = native select, km = 4 bin pills; không dùng slider cho năm.
- Cross-sell phạt nguội có `data-xsell` + `data-xsell-item` attributes sẵn cho GA4 tracking sau này.
- Không đưa sản phẩm lifestyle (trip planner, cây xăng) vào cross-sell phạt nguội - sai intent.

### Lessons
- Section trong model page dùng scroll-reveal (class `rv`) - screenshot verify phải scroll để trigger IntersectionObserver.

## Hãng Xe Máy — 2026-07-22

**ID:** `hang-xe-may` | **Category:** Platform | **File:** `demos/hang-xe-may.html`

### Brief
Hub hãng xe máy cho trang Vehicle Hub - 8 thương hiệu chính VN (Honda, Yamaha, Suzuki, Kawasaki, SYM, Piaggio, Kymco, VinFast), gắn với sản phẩm BH xe máy của MoMo.

### Decisions made
- Clone structure 3-state từ hang-xe (Listing → Brand → Model): đồng nhất UX trong Vehicle Hub
- BH xe máy sidebar hiện cả BH bắt buộc (66k/năm) + tự nguyện range - phân biệt rõ 2 loại
- Sticky bar ở model detail dùng brand color để reinforce conversion intent
- bikeSVG() helper render inline SVG theo type (so/tayga/con/dien) thay vì dùng emoji/icon

### Issues gặp phải
- Không có issue đáng kể - pattern đã được establish từ hang-xe

### Lessons
- Reuse 3-state URL pattern (listing/:brand/:model) hoạt động tốt, nên apply cho mọi hub loại tương tự
