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
