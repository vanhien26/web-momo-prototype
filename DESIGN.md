---
version: alpha
name: MoMo Web Platform
description: Visual identity for MoMo Super App web prototypes — transactional fintech UI targeting Vietnamese users. Scope covers demos, landing pages, and utility tools in the prototype store.
colors:
  primary: "#EB2F96"
  primary-dark: "#C4177A"
  primary-light: "#FFF0F9"
  neutral-900: "#1C171A"
  neutral-700: "#4B4550"
  neutral-500: "#8C8594"
  neutral-300: "#D1CDD3"
  neutral-100: "#F5F4F6"
  neutral-50: "#FAFAFA"
  white: "#FFFFFF"
  success: "#00B14F"
  success-light: "#E6F9EE"
  warning: "#FF8C00"
  warning-light: "#FFF4E5"
  error: "#E5233D"
  error-light: "#FDEDF0"
  info: "#0071E3"
  info-light: "#E5F1FB"
  overlay: "rgba(28, 23, 26, 0.5)"
typography:
  h1:
    fontFamily: Be Vietnam Pro
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.02em
  h2:
    fontFamily: Be Vietnam Pro
    fontSize: 1.75rem
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.015em
  h3:
    fontFamily: Be Vietnam Pro
    fontSize: 1.375rem
    fontWeight: 600
    lineHeight: 1.3
  h4:
    fontFamily: Be Vietnam Pro
    fontSize: 1.125rem
    fontWeight: 600
    lineHeight: 1.4
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 0.875rem
    fontWeight: 500
    lineHeight: 1.4
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1.4
  caption:
    fontFamily: Be Vietnam Pro
    fontSize: 0.6875rem
    fontWeight: 400
    lineHeight: 1.4
  numeric:
    fontFamily: Be Vietnam Pro
    fontSize: 1.5rem
    fontWeight: 700
    lineHeight: 1.2
    fontFeature: "tnum"
rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "12px 20px"
  button-secondary:
    backgroundColor: "{colors.primary-light}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.neutral-700}"
    rounded: "{rounded.full}"
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  tag:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.neutral-700}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
  tag-primary:
    backgroundColor: "{colors.primary-light}"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-900}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
  bottom-sheet:
    backgroundColor: "{colors.white}"
    rounded: "20px 20px 0 0"
  hero-result:
    textColor: "{colors.primary}"
    typography: "{typography.numeric}"
---

## Overview

MoMo là Super App fintech tại Việt Nam — UI không phải lifestyle brand mà là **transactional platform**. Người dùng đến với mục đích cụ thể: chuyển tiền, trả hóa đơn, mua bảo hiểm, vay tiền. Mọi quyết định thiết kế phải phục vụ **tốc độ hoàn thành task** và **xây dựng tín nhiệm tài chính**, không phải aesthetic thuần túy.

Design language: **Warm precision** - nền trắng/xám nhẹ, typography rõ ràng, accent màu hồng MoMo đặt đúng chỗ (CTA, số kết quả, trạng thái thành công), không overuse.

Prototype store này (lab.html) là môi trường research-spec — demo không phải production UI nhưng phải đủ fidelity để stakeholder review và dev team estimate.

## Colors

Bảng màu xây quanh **2 trục**: neutral cho nền/text, primary hồng cho interaction.

- **Primary (#EB2F96)**: MoMo brand pink — chỉ dùng cho CTA button, kết quả số chính, active state, progress indicator. Không dùng làm background section lớn.
- **Primary Dark (#C4177A)**: hover/pressed state của primary button. Không dùng standalone.
- **Primary Light (#FFF0F9)**: background cho tag, chip, alert informational có liên quan đến action của MoMo.
- **Neutral-900 (#1C171A)**: body text chính, heading. Không dùng pure black.
- **Neutral-700 (#4B4550)**: subtext, label, placeholder khi active.
- **Neutral-500 (#8C8594)**: placeholder, caption thứ cấp, icon inactive.
- **Neutral-300 (#D1CDD3)**: border, divider, skeleton.
- **Neutral-100 (#F5F4F6)**: background section, input fill khi read-only.
- **Success (#00B14F)**: trạng thái thành công, số dương, tăng trưởng. Dùng trong context tài chính (lãi suất dương, giao dịch thành công).
- **Error (#E5233D)**: lỗi, cảnh báo rủi ro, số âm. Không dùng cho decorative.
- **Warning (#FF8C00)**: cảnh báo mức trung bình, chú ý nhưng không block action.

Semantic rule: `success/warning/error` chỉ dùng để truyền trạng thái thực, không dùng để phân màu category thuần decorative.

## Typography

Font duy nhất: **Be Vietnam Pro** (Google Fonts). Không mix font khác trong cùng một demo trừ khi có lý do rõ ràng (ví dụ: display numeric với tabular figures).

Hierarchy thực tế trong demo:

- `h1` — tên trang/tên tool, mỗi page chỉ có 1
- `h2` — section heading, group heading trong sidebar
- `h3` — card title, form section label lớn
- `body-md` — nội dung chính
- `label-md` — button text, input label, tab label
- `numeric` — kết quả tính toán (bật `tnum` để số không nhảy khi thay đổi)
- `caption` — footnote, source, metadata phụ

Rule: Không dùng font-weight dưới 400 trong UI tài chính — thin text giảm readability và perceived trust.

## Layout

Breakpoint (mobile-first):
- Base: < 768px — single column, bottom sheet thay modal
- `md`: 768px — 2 columns grid cho calculator panel
- `lg`: 1024px — sidebar show, 3 columns grid
- `xl`: 1280px — max-width 1200px, center

Wrapper: max-width 72rem (1152px), horizontal padding 1.25rem mobile / 2rem desktop.

Spacing scale dùng bội số 8px. Không dùng giá trị lẻ (5px, 7px, 11px).

Grid pattern trong demo:
- **Calculator/tool**: 2 cột — input panel trái (40%) + result panel phải (60%)
- **Listing**: 1 cột mobile, 2-3 cột desktop
- **Detail page**: 1 cột content + sticky sidebar (desktop)

## Elevation & Depth

3 mức shadow trong prototype:

- **Flat**: `border: 1px solid {colors.neutral-300}` — card thông tin, input field. Không có shadow.
- **Raised**: `box-shadow: 0 1px 4px rgba(28,23,26,0.08)` — card interactive, dropdown, popover nhỏ.
- **Floating**: `box-shadow: 0 8px 24px rgba(28,23,26,0.12)` — modal, bottom sheet, tooltip, sticky bar.

Overlay khi modal/sheet mở: `rgba(28, 23, 26, 0.5)` phủ lên content bên dưới.

Không dùng shadow trang trí — mỗi shadow phải signal mức elevation thực.

## Shapes

Border radius scale:
- `4px` — tag nhỏ, badge status
- `8px` — input field, small card
- `12px` — card standard, modal section
- `16px` — card lớn, bottom sheet inner section
- `20px` — bottom sheet top corners (xem component)
- `9999px` — button (pill), chip, avatar

Rule: button luôn dùng `border-radius: 9999px` (pill) — đây là pattern nhận diện của MoMo. Không dùng rounded-md hay sharp corner cho CTA.

## Components

### Button

- **Primary**: pink fill, white text, pill shape. Dùng cho 1 CTA chính duy nhất per screen.
- **Secondary**: pink-light fill, pink text. Dùng cho action phụ cùng màn hình với primary.
- **Ghost**: transparent, neutral text. Dùng cho destructive action nhẹ hoặc tertiary action.
- Không mix quá 2 loại button trên cùng 1 card.
- Disabled state: opacity 50%, không thay đổi màu nền.

### Card

Background trắng, border `1px solid neutral-300`, shadow raised, radius `16px`. Padding `16px` default, `20px` nếu card có content phức tạp.

Không dùng nền màu cho card trong context tài chính — màu nền gây distraction khỏi số liệu.

### Input

Border mỏng 1px neutral-300, focus 1.5px primary pink. Label nằm trên, không dùng placeholder-as-label. Error state đổi border sang error-color, thêm helper text đỏ bên dưới.

### Tag / Chip

Pill shape (radius 9999px). 2 loại:
- Neutral: `neutral-100` nền, `neutral-700` text — dùng cho filter, category
- Primary: `primary-light` nền, `primary` text — dùng cho selected state, active filter

### Result Display (Money Lab pattern)

Kết quả số chính: `numeric` typography, màu `primary`. Đặt ở vị trí đầu tiên trong result panel, không ẩn sau fold.

Hierarchy trong result panel:
1. Số kết quả chính (lớn, primary color)
2. Label giải thích (body-md, neutral-700)
3. Breakdown detail (body-sm, neutral-500)
4. Chart (chỉ nếu giúp user hiểu cơ cấu, không decorative)

### Bottom Sheet (mobile)

Top corners `20px`, drag handle `neutral-300` centered top. Animation: slide up từ bottom. Overlay phủ nền.

## Do's and Don'ts

**Do:**
- Đặt CTA button dưới cùng screen trên mobile (thumb-friendly zone)
- Dùng `tnum` font-feature cho mọi số tiền và phần trăm để tránh layout shift
- Show kết quả ngay khi user thay đổi input (real-time calculation, không cần nút "Tính")
- Dùng success green cho số/trạng thái tích cực trong tài chính
- Giữ density cao vừa phải — người dùng fintech muốn thấy nhiều thông tin, không phải whitespace

**Don't:**
- Không dùng primary pink cho background section rộng — chỉ dùng cho element nhỏ mang intent
- Không dùng pure black `#000000` — dùng `neutral-900 #1C171A`
- Không show chart nếu nó chỉ lặp lại số đã hiển thị dạng text
- Không dùng animation phức tạp trong prototype research — transition đơn giản 150-200ms là đủ
- Không đặt quá 2 CTA button primary trên cùng một view
- Không dùng font-weight 300 hay thin — giảm trust trong context tài chính
