import { c as createComponent, r as renderHead, a as addAttribute, b as renderTemplate, d as createAstro } from '../chunks/astro/server_BMOddyS3.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pages = [
    {
      id: "tien-ich-giao-thong",
      name: "Ti\u1EC7n \xCDch Giao Th\xF4ng",
      group: "Platform",
      groupColor: "#3B82F6",
      maturity: "Concept",
      description: "Mini App qu\u1EA3n l\xFD ph\u01B0\u01A1ng ti\u1EC7n to\xE0n di\u1EC7n: tra ph\u1EA1t ngu\u1ED9i, n\u1EA1p ePass, \u0111\u0103ng ki\u1EC3m, t\xECm c\xE2y x\u0103ng v\xE0 qu\u1EA3n l\xFD xe trong m\u1ED9t surface.",
      href: "/tien-ich-giao-thong",
      children: [
        { name: "B\xE3i \u0110\u1EADu Xe", href: "/tien-ich-giao-thong/bai-do-xe" }
      ]
    }
  ];
  const maturityColor = {
    Concept: "#8B5CF6",
    Interactive: "#16A34A",
    Hub: "#0284C7",
    Static: "#9CA3AF"
  };
  return renderTemplate`<html lang="vi" data-astro-cid-j7pv25f6> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Prototype Lab — MoMo Astro</title><link rel="icon" href="/images/momo-logo.svg" type="image/svg+xml">${renderHead()}</head> <body data-astro-cid-j7pv25f6> <header class="lab-header" data-astro-cid-j7pv25f6> <div class="lab-header-inner" data-astro-cid-j7pv25f6> <div class="lab-logo" data-astro-cid-j7pv25f6> <div class="lab-logo-icon" data-astro-cid-j7pv25f6> <img src="/images/momo-logo.svg" alt="MoMo" data-astro-cid-j7pv25f6> </div> <span class="lab-logo-name" data-astro-cid-j7pv25f6>Mo<em data-astro-cid-j7pv25f6>Mo</em></span> </div> <div class="lab-header-sep" data-astro-cid-j7pv25f6></div> <span class="lab-header-tag" data-astro-cid-j7pv25f6>Prototype Lab</span> <div class="lab-header-right" data-astro-cid-j7pv25f6>Astro · Next.js</div> </div> </header> <section class="lab-hero" data-astro-cid-j7pv25f6> <p class="lab-hero-eyebrow" data-astro-cid-j7pv25f6>Web Platform · Out-App Traffic</p> <h1 class="lab-hero-title" data-astro-cid-j7pv25f6>Prototype Lab</h1> <p class="lab-hero-desc" data-astro-cid-j7pv25f6>
Các prototype đang được migrate sang Astro - chạy trên Next.js với routing thực, component reuse và design system chuẩn.
</p> <div class="lab-hero-meta" data-astro-cid-j7pv25f6> <span class="lab-count" data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>${pages.length}</strong> prototype</span> <a class="lab-static-link" href="/lab.html" target="_blank" data-astro-cid-j7pv25f6>
Static Lab ↗
</a> </div> </section> <div class="lab-grid-wrap" data-astro-cid-j7pv25f6> <p class="lab-section-label" data-astro-cid-j7pv25f6>Prototypes</p> <div class="lab-grid" data-astro-cid-j7pv25f6> ${pages.map((p) => renderTemplate`<article class="lab-card" data-astro-cid-j7pv25f6> <a class="lab-card-link"${addAttribute(p.href, "href")}${addAttribute(p.name, "aria-label")} data-astro-cid-j7pv25f6></a> <div class="lab-card-top" data-astro-cid-j7pv25f6> <span class="lab-card-group"${addAttribute(`background: ${p.groupColor}18; color: ${p.groupColor}`, "style")} data-astro-cid-j7pv25f6> ${p.group} </span> <span class="lab-card-maturity"${addAttribute(`background: ${maturityColor[p.maturity]}15; color: ${maturityColor[p.maturity]}`, "style")} data-astro-cid-j7pv25f6> ${p.maturity} </span> </div> <h2 class="lab-card-name" data-astro-cid-j7pv25f6>${p.name}</h2> <p class="lab-card-desc" data-astro-cid-j7pv25f6>${p.description}</p> <div class="lab-card-footer" data-astro-cid-j7pv25f6> <div class="lab-card-children" data-astro-cid-j7pv25f6> ${p.children?.map((c) => renderTemplate`<a class="lab-child-chip"${addAttribute(c.href, "href")} style="position: relative; z-index: 1;" data-astro-cid-j7pv25f6>${c.name}</a>`)} </div> <span class="lab-card-cta" data-astro-cid-j7pv25f6>Xem →</span> </div> </article>`)} </div> ${pages.length === 0 && renderTemplate`<div class="lab-empty" data-astro-cid-j7pv25f6> <div class="lab-empty-icon" data-astro-cid-j7pv25f6>🧪</div> <p data-astro-cid-j7pv25f6>Chưa có prototype nào.</p> </div>`} </div> </body></html>`;
}, "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/index.astro", void 0);

const $$file = "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
