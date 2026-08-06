import { c as createComponent, e as renderComponent, b as renderTemplate, d as createAstro } from '../../../chunks/astro/server_BMOddyS3.mjs';
import 'piccolore';
import { $ as $$HangXeApp } from '../../../chunks/HangXeApp_DUeVwAdr.mjs';
import { B as BRANDS, a as BRAND_LIST } from '../../../chunks/hang-xe-data_B27FVflR.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
function getStaticPaths() {
  return BRAND_LIST.filter((id) => BRANDS[id]).map((id) => ({ params: { brand: id } }));
}
const $$brand = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$brand;
  const { brand } = Astro2.params;
  const b = BRANDS[brand];
  const brandName = b?.name ?? brand;
  return renderTemplate`${renderComponent($$result, "HangXeApp", $$HangXeApp, { "title": `${brandName} - H\xE3ng Xe | Ti\u1EC7n \xCDch Giao Th\xF4ng MoMo` })}`;
}, "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/hang-xe/[brand].astro", void 0);

const $$file = "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/hang-xe/[brand].astro";
const $$url = "/tien-ich-giao-thong/hang-xe/[brand]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$brand,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
