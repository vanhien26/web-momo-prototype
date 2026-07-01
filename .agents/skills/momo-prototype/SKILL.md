---
name: momo-prototype
description: Use for any coding, styling, routing, or debugging tasks on the Web MoMo Prototype workspace (including NextJS app at apps/prototypes and static HTML/CSS/JS files in root or public/demos).
---

# Web MoMo Prototype - Developer Guide for AI Agents

> Tài liệu này là nguồn dữ liệu chuẩn (Source of Truth) bắt buộc dành cho mọi AI Agent (Claude, Codex, Antigravity...) trước khi thực hiện bất kỳ tác vụ nào trong workspace này.

---

## 1. Cấu Trúc Kiến Trúc Dự Án

Dự án là một hệ thống song hành giữa ứng dụng **Next.js** và các **Trang demo HTML tĩnh (self-contained)**:

```
/
├── apps/
│   └── prototypes/             ← Thư mục dự án Next.js (App Router, TS, Tailwind v4)
│       ├── public/
│       │   ├── assets/         ← Thư mục tài nguyên dùng chung (Fonts, CSS Tokens, Images)
│       │   │   ├── fonts/momo-trust/  ← Font MoMoTrustDisplay & MoMoTrustSans chính thức
│       │   │   └── mobase-tokens.css  ← CSS Design Tokens của Mobase Design System
│       │   └── demos/          ← Chứa toàn bộ 29+ file HTML demo tĩnh chạy trong iframe
│       └── src/
│           ├── app/            ← Cấu trúc routing Next.js (Store Homepage, /demo/[slug] page)
│           ├── components/     ← Các React components (Sidebar, DemoFrame)
│           └── data/
│               └── prototypes.ts  ← File định nghĩa dữ liệu registry của các prototypes (Auto-generated)
├── assets/                     ← Thư mục tài nguyên gốc (Source of Truth cho static)
│   ├── store.js                ← Registry gốc của các prototypes (QUAN TRỌNG NHẤT)
│   └── images/momo-logo.svg    ← Logo MoMo chính thức dạng SVG
├── scripts/
│   └── sync-registry.js        ← Script Node.js tự động đồng bộ từ assets/store.js sang Next.js
├── vercel.json                 ← Cấu hình URL rewrite rules phục vụ trên Vercel production
└── CLAUDE.md                   ← Chỉ dẫn vận hành chung của dự án
```

---

## 2. Quy Trình Đồng Bộ Registry (BẮT BUỘC)

File `assets/store.js` ở root là nơi lưu trữ duy nhất danh sách prototype, phân nhóm, thứ tự hiển thị và các trang con (child-pages lồng trong thuộc tính `tools`).

Khi bạn thay đổi danh mục prototype, thêm trang mới hoặc chỉnh sửa cấu trúc:
1. Chỉnh sửa thông tin trong `assets/store.js`.
2. **Bắt buộc chạy lệnh sau ở root folder để đồng bộ hóa**:
   ```bash
   node scripts/sync-registry.js
   ```
3. Lệnh này sẽ tự động parse `store.js` và ghi đè file `apps/prototypes/src/data/prototypes.ts` với đầy đủ kiểu dữ liệu TypeScript đệ quy và helper functions (`findPrototypeById`, `getAllPrototypeIds`...).
4. **Không bao giờ chỉnh sửa file `prototypes.ts` một cách thủ công.**

---

## 3. Quy Tắc Thiết Kế & Định Hướng Giao Diện (Mobase Alignment)

Dự án áp dụng **Mobase Design System** để tạo ra trải nghiệm cao cấp, chuyên nghiệp và đồng bộ:

### A. Next.js App UI (Layout bao quanh, Sidebar, Store Homepage)
*   **Màu sắc**: Sử dụng biến màu của Mobase nạp từ `@momo-webplatform/mobase-next/styles`. Màu hồng thương hiệu MoMo là màu Pink `#a50064` (`--primary`). Dùng màu hồng làm tín hiệu (`signal`), không dùng làm màu nền trang trí tràn lan.
*   **Sidebar**: Giữ thiết kế tối giản, sạch sẽ. Chữ item xám nhẹ (`muted-foreground`), hover đổi đậm, active đổi màu hồng MoMo và có nền hồng nhạt mỏng. Tránh dùng vạch dọc hồng bên lề (side-stripe border) và các badge trạng thái gây rối mắt (chaos).
*   **Logo**: Sử dụng logo MoMo chính thức dạng SVG tại `/assets/images/momo-logo.svg` bọc trong thẻ Link quay về trang chủ.

### B. Các trang demo tĩnh (trong `public/demos/`)
*   **Logo Header**: Mọi trang con có header chứa logo MoMo đều phải trỏ đường dẫn thống nhất về `../assets/images/momo-logo.svg` (logo vuông hồng bo góc chữ trắng) để đảm bảo đồng điệu thiết kế.
*   **Design Tokens**: Mọi trang HTML tĩnh khi xây dựng giao diện mới hoặc chỉnh sửa (như `mini-web-overview.html`) phải liên kết file CSS tokens:
    ```html
    <link rel="stylesheet" href="../assets/mobase-tokens.css">
    ```
    Sử dụng các biến CSS `--momo` (màu hồng), `--grey-50` đến `--grey-900`, và các token bo góc `var(--rounded-md)`, `var(--rounded-lg)`, `var(--rounded-xl)` thay vì dùng các mã màu Indigo hay bo góc ngẫu nhiên.

---

## 4. Lệnh Thường Dùng & Vận Hành Dev Server

```bash
# 1. Chạy dev server Next.js (CWD: apps/prototypes) - chạy mặc định tại port 3001
cd apps/prototypes
npx next dev --port 3001

# 2. Chạy build kiểm tra lỗi compile và typecheck trước khi commit/deploy
npx next build
```

*Lưu ý: Next.js serve trực tiếp mọi file tĩnh (demo HTML và assets) từ thư mục `public/` nên bạn không cần chạy thêm server tĩnh port 3000 ở root nữa.*

---

## 5. Money Lab Utility Rules

Khi làm việc với Money Lab (`financial`), dùng các rule sau:

### Input control decision

- `money + exact` → money input + sample chips
- `percent/score + explore` → range/slider
- `enum + few options + compare quickly` → pills hoặc segmented
- `enum + many options` → native select
- `enum + partner/brand options cần nhìn cùng lúc` → `select-items`

Rule bổ sung để tránh lạm dụng control:

- Slider chỉ dùng cho giá trị liên tục hoặc gần liên tục khi user đang explore tradeoff, không cần chốt giá trị tuyệt đối chính xác ngay.
- Không dùng slider cho dữ liệu rời rạc như năm sinh, tháng sinh, quận huyện, nhóm nghề, mốc luật, kỳ hạn pháp lý hoặc mã phân loại.
- Checkbox chỉ dùng cho yes/no, bật tắt, hoặc nhiều điều kiện độc lập có thể cùng đúng một lúc.
- Không dùng checkbox nếu các lựa chọn loại trừ nhau và user chỉ được chọn một phương án.
- Native dropdown dùng cho dữ liệu rời rạc cần chọn chính xác, đặc biệt khi option dài hoặc nhiều hơn khoảng 5 lựa chọn.
- Nếu chỉ có 2 đến 4 lựa chọn ngắn và cần so nhanh, ưu tiên pills hoặc segmented thay vì dropdown.

### Mobase component intent mapping

- `Button`: CTA hoặc action rõ ràng, có variant, size, state. Không dùng button để giả lập select hay toggle.
- `Checkbox`: chỉ dùng khi user có thể chọn nhiều option trong một list, hoặc một điều kiện yes/no độc lập.
- `Radio Group`: dùng khi user phải chọn đúng một option từ danh sách nhiều hơn 2 lựa chọn.
- `Toggle switch`: chỉ dùng cho bật/tắt trạng thái có hiệu lực ngay. Không thêm label trạng thái dư thừa kiểu `On/Off` lặp lại bên cạnh.
- `Select`: dùng khi hiển thị một danh sách option để user chọn chính xác, đặc biệt khi option dài hoặc nhiều.
- `Slider`: chỉ dùng để chọn một giá trị hoặc một khoảng giá trị trong một range preset.
- `Stepper`: dùng để tăng giảm numeric value khi độ lệch quanh default nhỏ và user cần bấm tăng giảm thay vì kéo.

Ưu tiên khai báo `ui` metadata trên field:

```js
ui: {
  valueType: 'money' | 'percent' | 'number' | 'enum' | 'score',
  precision: 'exact' | 'approximate',
  decisionMode: 'confirm' | 'explore' | 'compare',
  compareOptions: true | false,
  optionCount: number,
  sampleNumbers: true | false,
}
```

### Result-side rendering

- result chính luôn đứng đầu
- details chỉ giữ driver, risk, threshold, delta
- chart chỉ dùng cho breakdown, trend hoặc comparison
- không duplicate cùng meaning giữa formula, detail rows, legend và chart center

### UI quality bar

- selector là control, không là listing card lớn
- legend/chart phải có responsive constraints, không để text đè nhau
- tooltip chỉ dùng để định nghĩa field hoặc metric, không đọc lại label

### Verification

Sau khi sửa Money Lab UI:

```bash
node scripts/ui-harness-check.mjs
```
