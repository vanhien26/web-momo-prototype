# MoMo Web Platform - Prototype Store

Research-spec prototype lab cho MoMo Web Platform. Mọi tính toán, dữ liệu và luồng trong repo này là minh họa - không phải production code, không phải tư vấn tài chính.

**Live:** [web-momo-prototype.vercel.app](https://web-momo-prototype.vercel.app)
**Owner:** Văn Hiến - SEO & GEO Lead, Out-App Traffic / GPD

---

## Entry points

| File | Mục đích |
|---|---|
| `index.html` | MoSpark brand page - pitch platform cho leadership |
| `lab.html` | Prototype Store - navigation toàn bộ demo |
| `demos/` | 18+ prototype HTML độc lập |

---

## Prototype catalog

### MoSpark (Web Growth Platform)

| Prototype | File | Mô tả |
|---|---|---|
| Ads & Widget Manager | `demos/ads.html` | Setup campaign, chọn placement, preview real-time Desktop/Mobile |
| MoMo Project Assistant | `demos/chatbot.html` | Chatbot nhúng 6 template UX (Bubble/Popup/Standard/Proactive) + RAG |
| SEO/GEO Project Hub | `demos/seo-geo-score.html` | Topic-Cluster-Keyword 3 tầng, Keyword Registry, Business Context |
| SEO/GEO Dashboard | `demos/seo-geo-dashboard.html` | Dashboard theo dõi performance SEO/GEO theo Use Case |
| GenAI Orchestrator | `demos/orchestrator.html` | Multi-agent pipeline visualization (9 nodes) |
| Agentic Hub | `demos/agentic-hub.html` | Per-agent model selection (Haiku/Sonnet/Opus), RAG simulation, cost tracking |
| Blog Category | `demos/blog-category.html` | Listing page chuẩn MoSpark blog |
| Blog Article | `demos/blog.html` | Article page chuẩn MoSpark blog |

### Widget (PLG / Utility Tools)

| Prototype | File | Mô tả |
|---|---|---|
| Financial Utilities | `demos/financial.html` | 18 công cụ tài chính: Credit, Insurance, Savings, Investment, Tax, Planning |
| Bill Lookup | `demos/bill-lookup.html` | Tra cứu hóa đơn điện/nước/internet |
| Scam Check | `demos/scam-check.html` | Kiểm tra số tài khoản/SĐT lừa đảo |
| World Cup 2026 Predictor | `demos/world-cup.html` | Dự đoán kết quả World Cup 2026 |
| Mua Vé Metro HCM | `demos/metro-ticket.html` | Flow mua vé metro tích hợp MoMo |

### Platform

| Prototype | File | Mô tả |
|---|---|---|
| Phạt Nguội Hà Nội | `demos/phat-nguoi-ha-noi.html` | Tra cứu phạt nguội pSEO (P0 - CEO mandate) |
| Merchant | `demos/merchant.html` | Merchant detail page đa ngành |
| Merchant Discovery | `demos/merchant-discovery.html` | Card stack swipe để khám phá merchant |
| Cinema Film Detail | `demos/cinema-film-detail.html` | Film detail tích hợp Summer Campaign 2026 + Game Mở Khoá |
| Universal Search | `demos/universal-search.html` | Search thống nhất cross-category |

---

## Run locally

```bash
# Python (no deps)
python3 -m http.server 3000

# Hoặc bất kỳ static server nào
npx serve -p 3000 .
```

Mở `http://localhost:3000`.

---

## Tech stack

- Static HTML/CSS/JS - không có build step, không có framework
- Tailwind CSS (CDN) + custom `<style>` per file
- Vanilla JS cho simulation logic
- `assets/store.js` - prototype registry, render sidebar và workspace
- Vercel - static hosting

---

## Scope

Repo này phục vụ Step 04 trong Web Build Workflow của MoMo (Build Demo Website - Research-Spec). Output dùng để align stakeholder và brief Dev trước khi vào Sprint. Không deploy production từ repo này.
