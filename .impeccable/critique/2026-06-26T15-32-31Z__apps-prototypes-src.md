---
target: apps/prototypes/src
total_score: 28
p0_count: 0
p1_count: 2
timestamp: 2026-06-26T15-32-31Z
slug: apps-prototypes-src
---
# Critique: NextJS Prototype Store UI

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Thiếu loading indicator/skeleton khi iframe tải demo tĩnh gây cảm giác đơ |
| 2 | Match System / Real World | 4 | Phân nhóm và sắp xếp theo category trực quan, dễ hiểu |
| 3 | User Control and Freedom | 2 | Không thể ẩn/thu gọn Sidebar để xem các demo ở chế độ toàn màn hình (Full Screen) |
| 4 | Consistency and Standards | 3 | Dùng active state dạng side-stripe border 3px (anti-pattern) |
| 5 | Error Prevention | 4 | Giao diện điều hướng đơn giản, không có nguy cơ gây lỗi nhập liệu |
| 6 | Recognition Rather Than Recall | 3 | Danh sách hiển thị trực diện nhưng hover item thiếu tooltip mô tả chi tiết nhanh |
| 7 | Flexibility and Efficiency | 2 | Thiếu nút chuyển nhanh giữa các demo (Next/Prev) và phím tắt điều hướng nhanh |
| 8 | Aesthetic and Minimalist Design | 2 | H1 dùng gradient text (anti-pattern). Hover card dùng shadow kết hợp border (ghost-card) |
| 9 | Error Recovery | 4 | Hệ thống điều hướng an toàn, phục hồi nhanh |
| 10 | Help and Documentation | 2 | Thiếu phần hướng dẫn tương tác hoặc phím tắt nhanh |
| **Total** | | **28/40** | **Good (Khá tốt)** |

---

## Anti-Patterns Verdict

### LLM Assessment
Giao diện của Prototype Store Next.js được xây dựng sạch sẽ, layout rõ ràng và hiện đại. Tuy nhiên, giao diện vẫn vướng phải một số "tấn công AI slop" (AI-generated tells) được chỉ rõ trong cẩm nang thiết kế:
1. **Gradient Text (Tiêu đề H1)**: H1 ở trang chủ đang dùng `-webkit-background-clip: text` kết hợp gradient chéo Pink -> Purple. Đây là một SaaS cliché điển hình. Thiết kế của MoMo cần tự tin và vững chãi, việc sử dụng font chữ `MoMoTrustDisplay` thuần túy với một màu sắc đồng nhất (ví dụ màu Ink/Charcoal tối) sẽ tạo ra cảm giác cao cấp và chuyên nghiệp hơn rất nhiều.
2. **Side-stripe Border (Sidebar active item)**: Khi một item được active trong Sidebar, nó hiển thị một vạch dọc màu hồng 3px ở cạnh trái (`border-left-color: var(--primary)`). Đây là kiểu đánh dấu active kinh điển và lạm dụng trong các template AI. Nên thay thế bằng cách thay đổi nền nhẹ và màu chữ.
3. **Ghost-card hover**: Card ở trang chủ khi hover kết hợp cả đổi màu border Pink và thêm shadow tỏa rộng (`box-shadow: 0 0 20px ...`). Theo cẩm nang `impeccable`, việc kết hợp cả border 1px và shadow mềm trên cùng một card tạo cảm giác thiếu dứt khoát. Nên chọn một trong hai (hoặc chỉ đổi màu nền/border nhẹ, hoặc chỉ dùng shadow nhẹ).

---

## Overall Impression
Giao diện đã thiết lập một hệ thống điều hướng rất khoa học và dễ chịu nhờ font chữ Inter/MoMoTrust và palette màu sắc Mobase. Cơ chế tìm kiếm hoạt động tức thì. Tuy nhiên, trải nghiệm xem demo bị hạn chế đáng kể do không gian hiển thị của iframe bị Sidebar cố định 300px thu hẹp, và chuyển động chuyển trang thiếu sự phản hồi trạng thái (loading).

---

## What's Working
1. **Cơ cấu phân cụm và tìm kiếm**: Phân chia 5 nhóm (MoSpark, MiniWeb, Widget, Platform, Other) kết hợp với màu sắc dot chỉ thị trạng thái rất khoa học. Input tìm kiếm phản hồi lập tức.
2. **Typography đồng bộ**: Font chữ MoMoTrust đã được tích hợp thành công, hiển thị ở các tiêu đề và nhãn, giúp tăng tính nhận diện thương hiệu MoMo rõ rệt.
3. **Màu sắc Signal chính xác**: Màu Pink `#a50064` chỉ xuất hiện ở active state và CTA chính xác theo nguyên tắc "Pink as signal, not decoration".

---

## Priority Issues

### [P1] Thiếu Loading State cho Iframe demo
* **Why it matters**: Khi click chuyển giữa các demo, iframe mất một khoảng thời gian để tải trang HTML tĩnh từ `public/demos/`. Việc màn hình bị trống trắng hoặc đơ trong 0.5s - 2s mà không có bất kỳ loading indicator nào làm giảm độ mượt mà của hệ thống.
* **Fix**: Thêm một biến state `isLoading` trong `DemoFrame.tsx`. Khi `src` thay đổi, đặt `isLoading = true`. Lắng nghe sự kiện `onLoad` của `iframe` để đặt lại `isLoading = false`. Trong khi loading, hiển thị một Spinner nhỏ màu Pink hoặc Skeleton khéo léo.
* **Suggested command**: `$impeccable polish` hoặc `$impeccable animate`

### [P1] Sidebar cố định 300px chiếm dụng không gian hiển thị demo
* **Why it matters**: Đối với Prototype Store, nội dung quan trọng nhất là các bản demo chạy trong iframe. Sidebar rộng 300px cố định bên trái chiếm dụng 20-30% không gian màn hình, gây khó khăn khi PM/Leadership muốn xem các layout dashboard rộng hoặc giao diện giả lập mobile.
* **Fix**: Thêm một nút thu gọn Sidebar toàn cục (Collapse Sidebar). Khi thu gọn, Sidebar sẽ trượt ra ngoài màn hình (slide out) hoặc thu nhỏ về dạng mini-bar chỉ rộng 64px (chỉ hiện icon hoặc chữ cái đầu). Một nút toggle nổi (Floating Action Button) hoặc một chevron nhỏ ở mép sidebar sẽ giúp người dùng đóng mở dễ dàng.
* **Suggested command**: `$impeccable layout` hoặc `$impeccable adapt`

### [P2] Sử dụng Gradient Text ở Hero Title trang chủ
* **Why it matters**: H1 tại trang chủ dùng text gradient. Điều này làm giảm độ tinh khiết và uy tín của font chữ `MoMoTrustDisplay` thương hiệu. Font chữ Display bản thân nó đã rất cá tính và chắc chắn (Typography is the design), không cần dùng gradient trang trí.
* **Fix**: Xóa gradient text trong CSS của `.home-hero h1`. Dùng màu Ink đậm đồng nhất (`color: var(--foreground)` hoặc một màu charcoal tối) để tôn vinh trọn vẹn đường nét của font chữ MoMoTrustDisplay.
* **Suggested command**: `$impeccable typeset` hoặc `$impeccable quieter`

### [P2] Vạch active bên lề (Side-stripe Border) ở Sidebar
* **Why it matters**: Vạch dọc `border-left: 3px solid var(--primary)` là anti-pattern quen thuộc của AI template. Nó làm giao diện trông vụn vặt và thiếu tự nhiên.
* **Fix**: Loại bỏ `border-left` trong `.sidebar-item.active`. Chỉ sử dụng màu nền mềm mại `background: color-mix(in srgb, var(--primary) 8%, transparent)`, chuyển màu text sang `var(--primary)` và đặt `font-weight: 600`.
* **Suggested command**: `$impeccable polish` hoặc `$impeccable quieter`

---

## Persona Red Flags

### Alex (Power User / Tech Lead)
* **Red Flag**: Không có keyboard shortcuts để thu gọn nhanh Sidebar hoặc di chuyển lên/xuống giữa các demo. Việc phải liên tục rê chuột vào sidebar để click chọn từng demo trong danh sách 29 items làm giảm hiệu suất review sản phẩm.
* **Fix**: Tích hợp phím tắt đơn giản (ví dụ: `[` hoặc `]` để ẩn/hiện sidebar; phím `ArrowUp` / `ArrowDown` kết hợp modifier để Next/Prev demo).

### Jordan (First-Time Viewer / Leadership)
* **Red Flag**: Khi click vào một link demo, không gian hiển thị quá hẹp (bị sidebar chiếm 300px), các dashboard phức tạp trong demo bị bóp méo layout hoặc xuất hiện thanh scroll ngang, khiến Jordan đánh giá sai năng lực hiển thị của platform.
* **Fix**: Có nút chuyển sang chế độ "Full Preview" (Toàn màn hình) để Jordan có thể xem trọn vẹn demo không bị ảnh hưởng bởi sidebar của Store.

---

## Minor Observations
1. **Thiếu nút "Home" rõ ràng**: Khi đang ở trang demo, không có cách nào nhanh chóng để quay lại trang chủ Store (danh sách các card) ngoại trừ việc click vào logo "M" vốn nhỏ và không rõ chức năng quay về. Nên thêm nút "Home" hoặc text link quay về trang danh sách ở đầu Sidebar.
2. **Scrollbar Sidebar hơi thô**: Scrollbar mặc định của Chrome/Safari trên MacOS đôi khi bị đè lên nhãn chữ của sidebar item nếu thanh scrollbar rộng. Nên dùng class custom scrollbar mỏng 4px và ẩn đi khi không cuộn.

---

## Questions to Consider
1. Chúng ta có nên hiển thị các phím tắt nhanh ngay dưới thanh tìm kiếm của Sidebar để tăng tính hướng dẫn?
2. Trong tương lai, chúng ta có nên tích hợp chế độ giả lập thiết bị (Mobile, Tablet, Desktop preview) ngay trên thanh công cụ của iframe để PM dễ dàng test responsive của demo không?
