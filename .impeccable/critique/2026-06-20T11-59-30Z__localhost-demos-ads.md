---
timestamp: 2026-06-20T11-59-30Z
slug: localhost-demos-ads
---
---
target: http://localhost:4321/demos/ads
total_score: 21
p0_count: 0
p1_count: 4
timestamp: 2026-06-20T11-58-54Z
slug: localhost-demos-ads
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---:|---|
| 1 | Visibility of System Status | 2/4 | Stepper rõ hơn, nhưng readiness, approval outcome và forecast tổng vẫn không xuất hiện ở bước cuối |
| 2 | Match System / Real World | 2/4 | Dùng đúng thuật ngữ Campaign, Group, Ads Content nhưng state vẫn là một object phẳng |
| 3 | User Control and Freedom | 2/4 | Có Back và Edit, nhưng không Add, Duplicate, Delete nhiều Group hoặc Ads Content |
| 4 | Consistency and Standards | 1/4 | Project tiếp tục ghi đè Division, slot nhiều format vẫn tự chọn format đầu tiên |
| 5 | Error Prevention | 1/4 | Validation field có hoạt động, nhưng không chặn ownership sai hoặc yêu cầu xác nhận format |
| 6 | Recognition Rather Than Recall | 3/4 | Sidebar và context Preview tốt, inventory đã nhóm theo surface |
| 7 | Flexibility and Efficiency | 1/4 | Chỉ hỗ trợ một Group và một Ads Content, không bulk, duplicate hoặc shortcut |
| 8 | Aesthetic and Minimalist Design | 4/4 | Layout hai cột sạch hơn rõ, hierarchy thị giác ổn định |
| 9 | Error Recovery | 2/4 | Có error bar và conflict copy, nhưng không aria-live, field focus hoặc recovery action cụ thể |
| 10 | Help and Documentation | 3/4 | Helper copy tốt, nhưng forecast thiếu basis, confidence và source |
| **Total** | | **21/40** | **Cải thiện phần trình bày, chưa sửa kiến trúc dữ liệu và submission** |

## Overall Impression

Phiên bản localhost 4321 tốt hơn bản 3000 ở layout sidebar, nhóm inventory theo surface, Preview context và độ gọn của bước cuối. Tuy nhiên các lỗi P1 từ review trước vẫn còn nguyên trong logic. UI đang mô tả hierarchy ba cấp nhưng code vẫn lưu một Campaign, một Group và một Ads Content.

## What's Working

1. Sidebar dọc giúp scan 5 bước nhanh và giảm chiều cao phần đầu.
2. Slot được nhóm theo surface, có status, estimated Impression và CTR ngay trong card.
3. Preview đã hiển thị Group, Ads Content, Format, Slot và Project trước khi render.
4. Step 5 có card recheck gọn, Edit action theo section và thông tin reservation 24 giờ.

## Priority Issues

### [P1] Campaign hierarchy vẫn là state phẳng

`builderState` chỉ có `groupName`, `adName`, `placementId` và `format`. `saveCampaign()` vẫn đẩy một object Campaign phẳng. Không thể tạo nhiều Group hoặc nhiều Ads Content như product flow đã định nghĩa.

Fix: chuyển sang `campaign.groups[]` và `group.ads[]`, thêm entity tree hoặc list CRUD ở sidebar.

### [P1] Project ghi đè Division của Campaign

Browser test chọn Campaign Division là GPD, sau đó chọn Project Bảo hiểm Xe Máy. Step 5 hiển thị Division thành Insurance. Source xác nhận `selectBuilderProject()` gán `builderState.division = proj.div`.

Fix: tách `campaign.ownerDivision` và `ad.projectDivision`. Project không được mutate owner của Campaign.

### [P1] Slot nhiều format tự chọn format đầu tiên

Slot Article Top Banner hỗ trợ Display Banner và Masthead Banner, nhưng `onclick` gọi `pickSlotWithFormat('p11', 'banner')`. Sau click, UI lại hiển thị Format là Masthead Banner do state trước đó. Người dùng không có control chọn format, kết quả phụ thuộc state và thứ tự dữ liệu.

Fix: sau khi chọn slot có nhiều format, bắt buộc hiển thị radio hoặc segmented control và yêu cầu xác nhận.

### [P1] Submission readiness vẫn là code chết

Source có hai `buildReviewPublishStepHtml()`. Definition phía sau ghi đè definition gọi `stepOverview()` và `stepSubmission()`. Vì vậy browser chỉ thấy recheck card và conflict copy, không có readiness card, submission package, forecast hoặc approval owner.

Fix: xóa duplicate definition và hợp nhất một submission gate duy nhất. CTA phải phản ánh outcome thật: Gửi duyệt hoặc Kích hoạt, không dùng chung Xuất bản chiến dịch.

### [P2] Forecast chưa đủ để ra quyết định

Estimated Impression và CTR chỉ nằm trên từng slot. Thiếu period, traffic source, confidence, overlap, group aggregate và campaign aggregate.

Fix: thêm Forecast stage hoặc panel cố định sau khi chọn inventory, hiển thị range và assumptions ở cấp Ads Content, Group, Campaign.

### [P2] Accessibility và performance chưa đạt

Objective, audience và slot vẫn là `div onclick` không role hoặc tabIndex. Label không liên kết qua `for`, error bar không aria-live và không có `prefers-reduced-motion`. Detector tìm thấy hai layout transition theo width có thể gây layout thrash và hai bounce easing.

Fix: dùng button, radio hoặc checkbox thật, liên kết label, thêm focus-visible, aria-live, reduced motion. Chuyển width animation sang transform nếu chỉ là progress hoặc visual motion.

## Anti-Patterns Verdict

Detector chính lỗi vì thiếu `.agents/skills/impeccable/scripts/lib/impeccable-config.mjs`. Fallback detector chạy thành công và trả 12 warning: 5 side-tab, 2 overused-font, 2 bounce-easing, 2 layout-transition, 1 dark-glow. Dark-glow là false positive vì UI thực tế là light. Layout-transition là cảnh báo hiệu suất có giá trị.

## Run Notes

- Browser walkthrough chạy trên `http://localhost:4321/demos/ads` qua đủ 5 bước, không bấm CTA cuối để tránh tạo Campaign.
- Không có console error hoặc warning trong flow đã kiểm tra.
- Assessment được thực hiện tuần tự vì hai reviewer độc lập trước đó đã chạm usage limit, nên độ độc lập của bằng chứng thấp hơn quy trình hai reviewer.
