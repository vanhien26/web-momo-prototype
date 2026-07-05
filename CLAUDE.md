# CLAUDE.md — Web MoMo Prototype

> Đọc file này trước khi làm bất cứ việc gì. Đây là source of truth để tránh re-explore codebase.

---

## 1. KIẾN TRÚC TỔNG QUAN

**Đây là static HTML prototype store** - không có build step, không có framework. Mỗi demo là một file `.html` độc lập với inline CSS + JS.

```
lab.html          ← Trang điều hướng chính (Prototype Store)
index.html        ← Homepage marketing
assets/
  store.js        ← Registry toàn bộ prototypes + sidebar logic (QUAN TRỌNG NHẤT)
  store.css       ← CSS cho lab.html sidebar/layout
  app.js          ← Dùng riêng cho index.html (khác data structure với store.js)
demos/
  *.html          ← Từng prototype (self-contained, inline CSS+JS)
vercel.json       ← URL rewrite rules (production routing)
.devserver.js     ← Node.js dev server (port 3000)
.claude/launch.json ← Dev server configs
```

---

## 2. DEV SERVER

**Dùng `preview_start` với name `node-devserver`** (port 3000) - đây là server chính.

- Serve toàn bộ file tĩnh từ project root
- URL routing theo `vercel.json` rewrite (xem mục 4)
- **Không dùng python-devserver** cho routing tests vì nó 404 với `/seo-geo-project` style URLs

```bash
# Khởi động nếu chết
preview_start("node-devserver")
```

---

## 3. PROTOTYPE REGISTRY — `assets/store.js`

**File này kiểm soát sidebar và workspace của `lab.html`. Khi thêm/sửa prototype phải chỉnh ở đây.**

### Cấu trúc dữ liệu

```js
const PROTOTYPES = [        // line 3 — mảng toàn bộ prototype entries
  { id, name, category, src, address, description, ... }
]

const MOSPARK_CLUSTER_ITEMS = {   // line 533 — phân cụm trong group MoSpark
  GenAI: ['orchestrator', 'genai-image', 'agentic-hub'],
  Modules: ['seo-geo-dashboard', 'seo-geo-project', 'merchant-page-builder', 'seo-geo-score', ...]
}

const GROUP_ITEM_ORDER = {        // line 542 — thứ tự item trong sidebar group
  MoSpark: [...],
  MiniWeb: ['mini-web-overview'],
  Widget:  ['financial', 'payments', 'scam-check'],
  Platform: ['phat-nguoi', 'esim-du-lich', ..., 'onboarding', 'dashboard', 'search', 'notification-center'],
  Other:   ['worldcup'],
}

const GROUP_SUMMARY = {           // line 550 — text mô tả cho từng group card
  MoSpark: { eyebrow, title, description, examples }
}
```

### IDs hiện có (theo category)

| Category | IDs |
|----------|-----|
| MiniWeb | `mini-web-overview` |
| Widget (Financial) | `financial` (nested tools: 25+ calculators) |
| Widget (Other) | `payments` (sub-tools: `bill-lookup`, `metro-ticket`), `scam-check` |
| MoSpark/GenAI | `orchestrator`, `genai-image`, `agentic-hub` |
| MoSpark/Modules | `seo-geo-dashboard`, `seo-geo-project`, `merchant-page-builder`, `seo-geo-score`, `chatbot`, `ads-manager`, `blog-category` |
| Platform | `phat-nguoi` (sub-tools: ha-noi, giai-dap, nop-qua-momo), `esim-du-lich`, `cinema-film-detail`, `universal-search`, `merchant` (sub-tools: merchant-discovery), `dich-vu-cong` (sub-tools: 5 DVC guides), `onboarding` (sub-tools: `kyc`), `dashboard`, `search`, `notification-center` |
| Other | `worldcup` |

**QUAN TRỌNG - category phải match GROUP_ORDER:**
- `GROUP_ORDER = ['MiniWeb', 'MoSpark', 'Widget', 'Platform', 'Other']`
- Prototype có `category` không nằm trong GROUP_ORDER sẽ KHÔNG hiện trong sidebar
- `onboarding` phải là `category: 'Platform'` (không phải 'Growth')

### Quy tắc khi thêm prototype mới

1. Thêm entry vào `PROTOTYPES` array với đầy đủ: `id`, `name`, `category`, `src`, `address`
2. Thêm `id` vào đúng slot trong `GROUP_ITEM_ORDER[category]`
3. Nếu category là `MoSpark` → thêm vào `MOSPARK_CLUSTER_ITEMS.GenAI` hoặc `.Modules`
4. Bump version query param trong `lab.html`: `store.js?v=XX`

---

## 4. URL ROUTING — `vercel.json`

**Production (Vercel):** Rewrites từ clean URL → file HTML

```json
"/seo-geo-project"       → "/demos/seo-geo-project.html"
"/merchant-page-builder" → "/demos/merchant-page-builder.html"
"/mospark-blog/:path*"   → "/demos/blog.html"
"/mospark-blog"          → "/demos/blog-category.html"
// ...xem file vercel.json cho đầy đủ
```

**Lưu ý quan trọng:** Khi navigate giữa các demo trên Vercel, **luôn dùng absolute path** (`/merchant-page-builder`) không dùng relative (`merchant-page-builder`) vì relative sẽ resolve sai context.

**Local dev:** Node devserver tự map URL theo cùng rules trong `.devserver.js`.

---

## 5. TỪNG DEMO — KEY FILES

| Demo | File | Ghi chú quan trọng |
|------|------|--------------------|
| SEO/GEO Project Hub | `demos/seo-geo-project.html` | `PROJECTS` array (line ~1960), `DEMO_PROJECT_IDS` đã bị xóa - hiện show all 10 projects |
| Merchant Page Builder | `demos/merchant-page-builder.html` | `SAMPLE_M4B` object chứa demo data; format regex `/^M4B\d+$/i`; `M4B1234` là demo ID |
| Blog Article | `demos/blog.html` | TOC: desktop=`.toc-float` (fixed sidebar), mobile=`.toc-fab`+`.toc-drawer` (FAB top-right + bottom sheet) |
| SEO/GEO Dashboard | `demos/seo-geo-dashboard.html` | |
| SEO/GEO Score | `demos/seo-geo-score.html` | |
| Blog Category | `demos/blog-category.html` | |

---

## 6. PATTERN CHUNG CỦA DEMO

Mọi demo HTML đều theo cấu trúc:

```html
<head>
  <style>/* Inline CSS */</style>
</head>
<body>
  <!-- HTML -->
  <script>
    // State object
    const state = { ... }

    // Render functions
    function render() { ... }
    function renderXxx() { ... }

    // Event handlers inline trong HTML: onclick="fnName()"
  </script>
</body>
```

**State management:** Pure JS, không dùng framework. State là plain object, `render()` re-renders toàn bộ hoặc section cụ thể.

**Update pattern:** Nếu `render()` quá nặng, dùng targeted update: `document.getElementById('x').innerHTML = ...`

---

## 7. SIDEBAR `lab.html` — CÁCH HOẠT ĐỘNG

`lab.html` load `assets/store.js` và render sidebar + workspace:

- Sidebar: nhóm theo `category` → sort theo `GROUP_ITEM_ORDER`
- Click item → workspace iframe hoặc embedded content
- Version query: `store.js?v=31` — bump khi thay đổi store.js để bust cache

**Nếu prototype không hiện trong sidebar:** Kiểm tra theo thứ tự:
1. `id` đã có trong `PROTOTYPES` array chưa?
2. `category` đúng chưa?
3. `id` đã có trong `GROUP_ITEM_ORDER[category]` chưa?
4. Version `?v=XX` có cần bump không?
5. Dev server đang chạy từ đúng thư mục không? (`lsof -p PID | grep cwd`)

---

## 8. GIT & DEPLOY

- **Remote:** `https://github.com/vanhien26/web-momo-prototype.git`
- **Auto-deploy:** Push lên `main` → Vercel auto build (không cần `vercel --prod`)
- **Network:** Git push đôi khi timeout (Recv failure) — thử lại là được
- **Worktrees:** `.claude/worktrees/` — không bao giờ chạy dev server từ worktree

---

## 9. NHỮNG LỖI HAY GẶP

| Lỗi | Nguyên nhân | Fix |
|-----|-------------|-----|
| Prototype không hiện trong sidebar | `id` thiếu trong `GROUP_ITEM_ORDER` hoặc `MOSPARK_CLUSTER_ITEMS` | Thêm đúng slot |
| Browser serve file cũ | Cache từ worktree-served version | Hard reload + bump `?v=XX` |
| Vercel 404 khi navigate giữa demo | Dùng relative URL | Đổi sang absolute `/path` |
| Dev server 404 | Server đang chạy từ worktree CWD | Kill & restart với `preview_start` |
| `updateMerchant()` không re-render đầy đủ | Nó chỉ gọi `renderInfoCard()`, không gọi `render()` | Dùng inline DOM update `document.getElementById(id).innerHTML = ...` |
| Sửa CSS class trong `store.css` không thấy đổi gì trên preview | `store.css` (2000+ dòng) có class chết (`.hl-card`, `.hl-owner-section`, `.mh-cap-card`, `.mh-hero` và hàm `buildMoSparkHomeIntro()` trong `store.js`) từ thế hệ code cũ, không còn được render. Class thật đang chạy cho lưới card trang chủ lab.html là `.proto-card` / `.lab-card-grid` / `.lab-section` | Trước khi sửa, verify bằng `document.querySelector('.class-name')` trong preview để chắc class đó thực sự có trong DOM, đừng tin tên class "nghe có vẻ đúng" |

---

## 10. LINTING / TEST

Không có test suite, không có TypeScript, không có build. **Verify bằng `preview_screenshot` sau mỗi thay đổi UI.**

Kiểm tra nhanh:
```bash
# Syntax error check
node -e "require('./assets/store.js')"

# Serve test
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/seo-geo-project
```

---

## 11. MONEY LAB UTILITY UI RULES

Áp dụng cho `demos/financial.html`, `demos/financial.js`, `demos/financial.css` và mọi utility mới trong Money Lab.

### A. Chọn input control theo bản chất quyết định

Không chọn UI control theo cảm tính. Dùng rule này:

- `money + exact + confirm` → numeric money input + sample chips
- `percent/score + explore` → range/slider + numeric steppers
- `integer/step-based` → stepper `+/-`, chỉ dùng slider nếu user cần thử nhiều kịch bản nhanh
- `enum + many options + không cần so sánh trực diện` → native select
- `enum + few options + cần so sánh nhanh` → pills / segmented control
- `enum + brand/partner/options cần nhìn cùng lúc` → `select-items`, không dùng listing card lớn

Rule bổ sung để tránh lạm dụng control:

- Slider chỉ dùng cho giá trị liên tục hoặc gần liên tục khi user đang explore tradeoff, không cần chốt giá trị tuyệt đối chính xác ngay.
- Không dùng slider cho dữ liệu rời rạc như năm sinh, tháng sinh, quận huyện, nhóm nghề, mốc luật, kỳ hạn pháp lý hoặc mã phân loại.
- Checkbox chỉ dùng cho yes/no, bật tắt, hoặc nhiều điều kiện độc lập có thể cùng đúng một lúc.
- Không dùng checkbox nếu các lựa chọn loại trừ nhau và user chỉ được chọn một phương án.
- Native dropdown dùng cho dữ liệu rời rạc cần chọn chính xác, đặc biệt khi option dài hoặc nhiều hơn khoảng 5 lựa chọn.
- Nếu chỉ có 2 đến 4 lựa chọn ngắn và cần so nhanh, ưu tiên pills hoặc segmented control thay vì dropdown.

### A2. Mobase component intent mapping

Khi dùng component theo Mobase, map intent như sau:

- `Button`: CTA hoặc action rõ ràng, có variant, size, state. Không dùng button để giả lập select hay toggle.
- `Checkbox`: chỉ dùng khi user có thể chọn nhiều option trong một list, hoặc một điều kiện yes/no độc lập.
- `Radio Group`: dùng khi user phải chọn đúng một option từ danh sách nhiều hơn 2 lựa chọn.
- `Toggle switch`: chỉ dùng cho bật/tắt trạng thái có hiệu lực ngay. Không thêm label trạng thái dư thừa kiểu `On/Off` lặp lại bên cạnh.
- `Select`: dùng khi hiển thị một danh sách option để user chọn chính xác, đặc biệt khi option dài hoặc nhiều.
- `Slider`: chỉ dùng để chọn một giá trị hoặc một khoảng giá trị trong một range preset.
- `Stepper`: dùng để tăng giảm numeric value khi độ lệch quanh default nhỏ và user cần bấm tăng giảm thay vì kéo.

Field schema nên có `ui` metadata nếu field quan trọng:

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

`financial.js` hiện có decision layer để normalize field control từ metadata này. Khi thêm utility mới, ưu tiên khai báo `ui` thay vì chỉ khai báo `type`.

### B. Result panel hierarchy

Mỗi utility luôn có 1 result chính ở cột phải. Các lớp khác chỉ được show khi giúp user ra quyết định tốt hơn:

- `Result only`: khi chỉ cần 1 kết luận, chart không tăng insight
- `Result + details`: khi cần 1 đến 3 driver bổ sung
- `Result + breakdown chart`: khi user cần hiểu tỷ trọng hoặc cơ cấu thành phần
- `Result + trend/comparison chart`: khi user cần thấy xu hướng hoặc tradeoff

Không được lặp lại cùng một meaning giữa:

- formula
- detail rows
- chart legend
- chart center summary
- insight copy

Nếu chart đã giải thích cơ cấu, `details` chỉ giữ phần bổ sung như total fee, risk, delta, threshold hoặc recommendation. Không đọc lại legend bằng text lần thứ hai.

### C. Chart rules

Chỉ show chart khi nó trả lời một trong các câu hỏi sau:

- cơ cấu gồm những phần nào
- thành phần nào đang chiếm tỷ trọng lớn
- xu hướng đang đi lên hay đi xuống
- 2 chiến lược khác nhau lệch nhau ra sao

Không show chart nếu:

- chỉ minh họa lại đúng con số đã có
- không làm đổi quyết định
- legend, label, summary gây chồng chữ hoặc lặp thông tin

### D. Layout rules cho chart và legend

- Text trong legend phải có khung ổn định, không đặt `label` và `value` vào layout gây đè nhau khi panel hẹp
- Khi panel hẹp, legend và chart phải tự chuyển từ ngang sang dọc
- Text trong donut/pie center phải giữ `value + unit` trên một dòng nếu khả thi
- Không để chart center, legend hoặc badge phá hierarchy của result chính

### E. Tooltips cho field

Tooltip chỉ thêm khi user có thể không hiểu con số đại diện cho gì. Tooltip giải thích định nghĩa hoặc phạm vi dữ liệu, không lặp label theo cách khác.

### F. Harness expectation

Khi sửa Money Lab UI, chạy:

```bash
node scripts/ui-harness-check.mjs
```

Harness phải tiếp tục bao phủ:

- decision rule layer tồn tại
- selector density rules
- label/input hierarchy
- future additions không quay lại dropdown/card sai loại
