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
