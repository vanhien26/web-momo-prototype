# MoSpark Prototype Store

Next.js app dùng để host toàn bộ prototype UI của **MoMo Web Platform**. Mỗi prototype là một demo tương tác, tự chứa, phục vụ mục đích Research-Spec nội bộ trước khi handoff sang Dev.

> **Internal only** - Không phải production code. Không deploy ra ngoài.

---

## Cấu trúc

```
apps/prototypes/
├── src/
│   ├── app/
│   │   ├── page.tsx              # MoSpark landing page (homepage)
│   │   ├── layout.tsx            # Root layout + ThemeProvider
│   │   ├── globals.css           # Design tokens + dark/contrast mode vars
│   │   ├── mospark.css           # MoSpark-specific animations & section styles
│   │   └── (store)/
│   │       ├── lab/page.tsx      # Prototype Lab (sidebar + workspace)
│   │       └── demo/             # Các route demo cụ thể (blog, slug...)
│   ├── components/
│   │   ├── mospark/              # Sections của MoSpark landing
│   │   ├── Sidebar.tsx           # Sidebar điều hướng prototype
│   │   ├── DemoFrame.tsx         # iFrame wrapper cho demo
│   │   └── ThemeProvider.tsx     # next-themes (light / dark / contrast)
│   └── data/
│       └── prototypes.ts         # Registry toàn bộ prototype (auto-sync từ store.js)
├── public/
│   └── assets/
│       ├── mobase-tokens.css     # Design tokens MoMo brand
│       └── fonts/momo-trust/     # MoMoTrustDisplay + MoMoTrustSans
└── package.json
```

---

## Dev

```bash
cd apps/prototypes
npm install
npm run dev
```

Server chạy tại `http://localhost:3001` (port mặc định Next.js khi 3000 bị chiếm).

**Routes chính:**

| URL | Nội dung |
|-----|----------|
| `/` | MoSpark landing page |
| `/lab` | Prototype Store (sidebar + iframe) |
| `/demo/blog` | Blog article demo |
| `/demo/[slug]` | Các demo khác theo slug |

---

## Design System

Dùng **MoBase Next** (`@momo-webplatform/mobase-next`) — design system nội bộ của MoMo.

**Brand color (product UI):** `#a50064` (MoMo pink)
**Typography:** MoMoTrustDisplay (heading) + MoMoTrustSans (body)
**Tailwind:** v4 với custom CSS variables theo 3 theme mode:

| Theme | Trigger | Dùng khi |
|-------|---------|----------|
| `light` | `.light` trên `<html>` | Default |
| `dark` | `.dark` trên `<html>` | Dark mode |
| `contrast` | `.contrast` trên `<html>` | High contrast / accessibility |

> **Lưu ý CSS gotcha:** Turbopack/Lightning CSS split `.dark {}` block tại comment lines. Không đặt comment block (`/* ... */`) giữa các CSS variable declarations trong cùng một theme block - các vars sau comment sẽ bị drop khỏi compiled output.

---

## Prototype Registry

File `src/data/prototypes.ts` được **auto-sync** từ `../../assets/store.js` (root repo). Không chỉnh sửa trực tiếp.

Để thêm prototype mới: chỉnh `assets/store.js` ở root, sau đó:

```bash
node ../../scripts/sync-registry.js
```

---

## Skill tích hợp

Repo này có 2 Claude Code skill được cài:

- **`mobase`** — Component API, token reference, composition patterns cho MoBase Next
- **`ui-ux-pro-max`** — 67 styles, 161 palettes, UX guidelines, animation rules, accessibility checklist

Skill được install tại `~/.claude/skills/` (global).

---

## Tech Stack

| Thư viện | Phiên bản | Dùng cho |
|----------|-----------|----------|
| Next.js | 16.2.9 | Framework |
| React | 19.2.4 | UI |
| Tailwind CSS | v4 | Styling |
| MoBase Next | ^1.0.5 | Design system |
| next-themes | ^0.4.6 | Theme switching |
| motion | ^12 | Animation |
| recharts | ^3 | Charts |
| react-hook-form | ^7 | Forms |
| embla-carousel | ^8 | Carousel |
| lucide-react | ^1 | Icons |
