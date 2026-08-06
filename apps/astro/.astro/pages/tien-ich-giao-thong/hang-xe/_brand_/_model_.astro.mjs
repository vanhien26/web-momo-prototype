import { c as createComponent, e as renderComponent, b as renderTemplate, d as createAstro } from '../../../../chunks/astro/server_BMOddyS3.mjs';
import 'piccolore';
import { $ as $$HangXeApp } from '../../../../chunks/HangXeApp_DUeVwAdr.mjs';
import { B as BRANDS, a as BRAND_LIST } from '../../../../chunks/hang-xe-data_B27FVflR.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
function getStaticPaths() {
  const paths = [];
  BRAND_LIST.forEach((brandId) => {
    const b = BRANDS[brandId];
    if (!b) return;
    b.models.forEach((m) => {
      if (m.slug) paths.push({ params: { brand: brandId, model: m.slug } });
    });
  });
  return paths;
}
const $$model = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$model;
  const { brand, model } = Astro2.params;
  const b = BRANDS[brand];
  const m = b?.models?.find((x) => x.slug === model);
  const brandName = b?.name ?? brand;
  const modelName = m?.name ?? model;
  return renderTemplate`${renderComponent($$result, "HangXeApp", $$HangXeApp, { "title": `${brandName} ${modelName} - Chi Ti\u1EBFt D\xF2ng Xe | MoMo` })}`;
}, "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/hang-xe/[brand]/[model].astro", void 0);

const $$file = "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/hang-xe/[brand]/[model].astro";
const $$url = "/tien-ich-giao-thong/hang-xe/[brand]/[model]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$model,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
