# Quy tắc phát triển cho Trợ lý AI (Agent Guidelines)

Tài liệu này định nghĩa quy chuẩn hoạt động nhằm tối ưu token và chuẩn hóa quy trình đọc/hiểu các công cụ (Skills) trong dự án. Áp dụng cho mọi engine (Claude Code, Codex, Cursor).

## 1. Trật tự Skill (một skill design duy nhất)

Để tránh trùng lặp và lãng phí token, dự án chỉ giữ MỘT skill thiết kế frontend:

- **`impeccable`** (`.agents/skills/impeccable/`) là skill design/redesign/polish/audit duy nhất. Dùng nó cho mọi việc thuộc UI: landing page, dashboard, product UI, component, form, motion, copy, accessibility, redesign.
- Không thêm skill design khác chồng lấn scope của `impeccable` (ví dụ các bộ "taste/anti-slop" rời rạc). Nếu cần bổ sung, thêm dưới dạng file trong `impeccable/reference/`, không tạo skill mới.
- Skill mới chỉ được tạo khi giải quyết một domain KHÔNG phải design (ví dụ data, tracking, SEO) và phải theo cấu trúc ở mục 3.

## 2. Chuẩn hóa quy trình đọc Skill để tối ưu Token

Khi xử lý skill lớn như `impeccable`, mọi Agent phải tuân thủ:

1. **Tránh đọc lại file trùng lặp (No Redundant Loading)**
   * Chỉ đọc `SKILL.md` hoặc file trong `reference/` **tối đa một lần** mỗi phiên (session).
   * Không dùng công cụ đọc file (Claude Code: `Read`; Codex/Cursor: `view_file`) để load lại nội dung đã có trong lịch sử hội thoại của phiên hiện tại.

2. **Đọc đúng phân đoạn cần thiết (Targeted Reading)**
   * Không đọc toàn bộ file dài nếu chỉ cần tra cứu một quy tắc.
   * Dùng tham số đọc theo dòng để chỉ trích xuất phần cần thiết: Claude Code dùng `offset` + `limit` của `Read`; Codex/Cursor dùng `StartLine` + `EndLine` của `view_file`.

3. **Thu hẹp phạm vi theo lệnh thực tế (Scoped Reference Loading)**
   * Khi người dùng yêu cầu một lệnh cụ thể (ví dụ `critique`, `polish`), chỉ đọc đúng file tham chiếu tương ứng (`reference/critique.md` hoặc `reference/polish.md`) cộng file ngữ cảnh sản phẩm phù hợp (`reference/brand.md` cho marketing/landing, `reference/product.md` cho app/dashboard).
   * Không tự động đọc file hướng dẫn của lệnh khác khi không có yêu cầu.

4. **Tránh sao chép lại quy tắc vào phản hồi (Keep Responses Clean)**
   * Không sao chép/trích dẫn/tóm tắt các đoạn hướng dẫn dài của skill vào câu trả lời cho người dùng, trừ khi được yêu cầu giải thích. Tập trung vào giải pháp và kết quả thay đổi code.

## 3. Cấu trúc chuẩn cho skill mới (token-optimized)

Mọi skill mới phải theo kiến trúc router + reference (như `impeccable`):

- `SKILL.md` ngắn (mục tiêu < 200 dòng): chỉ chứa frontmatter (`name`, `description` súc tích để trigger đúng), setup, và bảng định tuyến tới `reference/`.
- Chi tiết dài đặt trong `reference/<chủ-đề>.md`, chỉ load khi cần.
- `description` trong frontmatter được nạp vào context MỖI session, nên viết ngắn và tập trung vào tín hiệu kích hoạt; chi tiết để trong body.
