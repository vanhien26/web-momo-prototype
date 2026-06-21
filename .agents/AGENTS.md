# Quy tắc phát triển cho Trợ lý AI (Agent Guidelines)

Tài liệu này định nghĩa các quy chuẩn hoạt động nhằm tối ưu hóa lượng token tiêu thụ và chuẩn hóa quy trình đọc/hiểu các công cụ (Skills) trong dự án.

## 1. Chuẩn hóa quy trình đọc Skill để tối ưu Token

Để tránh làm quá tải cửa sổ ngữ cảnh (Context Window) và lãng phí token khi xử lý các Skill lớn như `impeccable`, tất cả các Agent hoạt động trong dự án này phải tuân thủ các quy tắc sau:

1. **Tránh đọc lại file trùng lặp (No Redundant Loading)**:
   * Chỉ đọc file hướng dẫn chính `SKILL.md` hoặc các file trong `reference/` **tối đa một lần** trong mỗi phiên làm việc (session).
   * Không sử dụng công cụ đọc file (`view_file`) để load lại toàn bộ nội dung hướng dẫn nếu thông tin đó đã có sẵn trong lịch sử hội thoại của phiên hiện tại.

2. **Đọc đúng phân đoạn cần thiết (Targeted Reading)**:
   * Không đọc toàn bộ file hướng dẫn dài nếu chỉ cần tra cứu một quy tắc cụ thể.
   * Sử dụng tham số `StartLine` và `EndLine` trong công cụ `view_file` để chỉ trích xuất các dòng cấu hình hoặc bảng quy tắc cần thiết.

3. **Thu hẹp phạm vi theo lệnh thực tế (Scoped Reference Loading)**:
   * Khi người dùng yêu cầu thực hiện một hành động cụ thể thuộc tập lệnh (ví dụ: `critique` hoặc `polish`), Agent **chỉ được phép** đọc duy nhất file tham chiếu tương ứng (`reference/critique.md` hoặc `reference/polish.md`) và file ngữ cảnh sản phẩm tương ứng (`reference/brand.md` hoặc `reference/product.md`).
   * Không tự động đọc các file hướng dẫn của lệnh khác khi không có yêu cầu.

4. **Tránh sao chép lại quy tắc vào phản hồi (Keep Responses Clean)**:
   * Không sao chép, trích dẫn hoặc tóm tắt lại các đoạn hướng dẫn dài của Skill vào phần trả lời hiển thị cho người dùng, trừ khi người dùng yêu cầu giải thích chi tiết. Chỉ tập trung trả lời thẳng vào giải pháp và kết quả thay đổi code.
