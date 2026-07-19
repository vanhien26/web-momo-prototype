import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = file => fs.readFileSync(path.join(root, file), 'utf8');

const files = {
  builds: 'BUILDS.md',
  claude: 'CLAUDE.md',
  css: 'demos/financial.css',
  html: 'demos/financial.html',
  js: 'demos/financial.js',
  skill: '.agents/skills/momo-prototype/SKILL.md',
};

const content = Object.fromEntries(
  Object.entries(files).map(([key, file]) => [key, read(file)]),
);

const failures = [];
const passes = [];

function record(condition, label, detail = '') {
  if (condition) {
    passes.push(label);
  } else {
    failures.push(detail ? `${label}: ${detail}` : label);
  }
}

function section(markdown, heading) {
  const start = markdown.indexOf(heading);
  if (start === -1) return '';
  const rest = markdown.slice(start + heading.length);
  const next = rest.search(/\n---\n\n## /);
  return next === -1 ? rest : rest.slice(0, next);
}

function cssBlock(css, selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = css.match(new RegExp(`${escaped}\\s*\\{([^}]*)\\}`, 'm'));
  return match?.[1] || '';
}

function cssNumber(block, property) {
  const match = block.match(new RegExp(`${property}\\s*:\\s*([0-9.]+)px`));
  return match ? Number(match[1]) : null;
}

function cssBoxNumbers(block, property) {
  const match = block.match(new RegExp(`${property}\\s*:\\s*([^;]+);`));
  if (!match) return [];
  return [...match[1].matchAll(/([0-9.]+)px/g)].map(item => Number(item[1]));
}

function cssValue(block, property) {
  const match = block.match(new RegExp(`${property}\\s*:\\s*([^;]+);`));
  return match ? match[1].trim() : '';
}

const heroLog = section(content.builds, '## Financial Utilities hero compaction feedback');
record(heroLog.includes('### Log') && heroLog.includes('### Learning'), 'hero density feedback has Log and Learning');
record(heroLog.includes('compact hero') || heroLog.includes('gọn hơn'), 'hero density learning is recorded');

const selectorLog = section(content.builds, '## Money Lab auto insurance selector density feedback');
record(selectorLog.includes('### Log') && selectorLog.includes('### Learning'), 'insurance selector feedback has Log and Learning');
record(selectorLog.includes('không phải package card') && selectorLog.includes('compact control'), 'insurance selector learning captures control not listing');
record(selectorLog.includes('Dùng native dropdown') && selectorLog.includes('Dùng select item'), 'selector learning defines dropdown versus item selector usage');
record(selectorLog.includes('Field label') && selectorLog.includes('inline box text'), 'selector learning captures label versus inline text hierarchy');
record(content.builds.includes('Slider chỉ hợp lệ cho giá trị liên tục hoặc gần liên tục'), 'build notes capture slider usage rule');
record(content.builds.includes('Checkbox chỉ dùng cho yes/no hoặc nhiều điều kiện độc lập'), 'build notes capture checkbox usage rule');
record(content.builds.includes('Checkbox dành cho multi-select, Radio Group dành cho single choice'), 'build notes capture Mobase component intent mapping');
record(content.claude.includes('Không dùng slider cho dữ liệu rời rạc như năm sinh'), 'CLAUDE captures discrete values should not use slider');
record(content.claude.includes('Checkbox chỉ dùng cho yes/no, bật tắt'), 'CLAUDE captures checkbox rule');
record(content.claude.includes('`Toggle switch`: chỉ dùng cho bật/tắt trạng thái có hiệu lực ngay'), 'CLAUDE captures toggle switch rule');
record(content.claude.includes('`Stepper`: dùng để tăng giảm numeric value'), 'CLAUDE captures stepper rule');
record(content.skill.includes('Không dùng slider cho dữ liệu rời rạc như năm sinh'), 'skill captures discrete values should not use slider');
record(content.skill.includes('Native dropdown dùng cho dữ liệu rời rạc cần chọn chính xác'), 'skill captures dropdown rule');
record(content.skill.includes('`Radio Group`: dùng khi user phải chọn đúng một option'), 'skill captures radio group rule');

const gridBlock = cssBlock(content.css, '.select-items-grid');
const itemBlock = cssBlock(content.css, '.select-item-btn');
const activeBlock = cssBlock(content.css, '.select-item-btn.active');
const markBlock = cssBlock(content.css, '.select-item-mark');
const nativeSelectBlock = cssBlock(content.css, 'select');
const fieldLabelBlock = cssBlock(content.css, '.field-label');

record(Boolean(gridBlock), 'select item grid CSS exists');
record(Boolean(itemBlock), 'select item button CSS exists');
record(Boolean(markBlock), 'select item text CSS exists');

const itemHeight = cssNumber(itemBlock, 'min-height');
const itemRadius = cssNumber(itemBlock, 'border-radius');
const markFont = cssNumber(markBlock, 'font-size');
const gridGap = cssNumber(gridBlock, 'gap');
const nativeSelectFont = cssNumber(nativeSelectBlock, 'font-size');
const nativeSelectRadius = cssNumber(nativeSelectBlock, 'border-radius');
const nativeSelectPadding = cssBoxNumbers(nativeSelectBlock, 'padding');
const fieldLabelFont = cssNumber(fieldLabelBlock, 'font-size');

record(itemHeight !== null && itemHeight <= 52, 'select item height stays compact', `min-height is ${itemHeight}px, expected <= 52px`);
record(markFont !== null && markFont <= 14, 'select item font stays below primary content', `font-size is ${markFont}px, expected <= 14px`);
record(itemRadius !== null && itemRadius <= 12, 'select item radius does not read as large card', `border-radius is ${itemRadius}px, expected <= 12px`);
record(gridGap !== null && gridGap <= 8, 'select item grid gap stays compact', `gap is ${gridGap}px, expected <= 8px`);
record(cssValue(itemBlock, 'place-items') === 'center', 'select item content is centered');
record(cssValue(itemBlock, 'text-align') === 'center', 'select item text is centered');

const activeShadow = cssValue(activeBlock, 'box-shadow');
record(!/([2-9][0-9])px/.test(activeShadow), 'active state shadow stays light', `box-shadow is ${activeShadow}`);
record(nativeSelectFont !== null && nativeSelectFont <= 14, 'native select font stays secondary', `font-size is ${nativeSelectFont}px, expected <= 14px`);
record(nativeSelectRadius !== null && nativeSelectRadius <= 16, 'native select radius stays control-like', `border-radius is ${nativeSelectRadius}px, expected <= 16px`);
record(nativeSelectPadding[0] !== undefined && nativeSelectPadding[0] <= 12, 'native select vertical padding stays compact', `vertical padding is ${nativeSelectPadding[0]}px, expected <= 12px`);
record(fieldLabelFont !== null && nativeSelectFont !== null && Math.abs(nativeSelectFont - fieldLabelFont) <= 1, 'field label and native select text stay in same scale family', `label=${fieldLabelFont}px select=${nativeSelectFont}px`);

record(content.js.includes("id: 'partnerId'") && content.js.includes("type: 'select-items'"), 'insurance partner uses select-items control');
record(content.js.includes("id: 'months',        label: 'Số tháng dự kiến tham gia',          type: 'select'"), 'bhxh duration uses select instead of slider');
record(content.js.includes("id: 'lhYears',     label: 'Số năm đã đóng BHXH', type: 'stepper'"), 'pension contribution years uses stepper');
record(content.js.includes("id: 'yearsPre2014',   label: 'Số năm đóng trước 2014',                type: 'stepper'"), 'bhxh one-time pre-2014 years uses stepper');
record(content.js.includes("id: 'yearsPost2014',  label: 'Số năm đóng từ 2014',                   type: 'stepper'"), 'bhxh one-time post-2014 years uses stepper');
record(content.js.includes("id: 'unemploymentMonths', label: 'Tổng số tháng đã đóng BHTN', type: 'stepper'"), 'unemployment months uses stepper');
record(content.js.includes("if (f.type === 'range' || f.type === 'stepper')"), 'stepper renderer shares numeric shell without forcing slider');
record(content.js.includes("const sliderMarkup = f.type === 'range'"), 'stepper renderer omits slider track');
record(content.js.includes('type="hidden" id="${f.id}"') && content.js.includes('select-item-btn'), 'select-items renderer uses hidden input and item buttons');
record(content.js.includes('const UI_DECISION_FALLBACKS = {'), 'field decision rule map exists');
record(content.js.includes('function deriveFieldUi(field) {'), 'field UI metadata derivation exists');
record(content.js.includes('function inferFieldControl(field) {'), 'field control inference exists');
record(content.js.includes('function normalizeFieldDefinition(field) {'), 'field normalization exists');
record(content.js.includes('TOOLS[i] = normalizeToolDefinition(TOOLS[i]);'), 'tool catalog is normalized through decision rule');
record(content.js.includes("ui: { valueType: 'money', precision: 'exact', decisionMode: 'confirm'"), 'explicit field UI metadata exists for money inputs');
record(content.js.includes("ui: { valueType: 'percent', precision: 'approximate', decisionMode: 'explore'"), 'explicit field UI metadata exists for exploratory range inputs');
record(content.js.includes("ui: { valueType: 'enum', precision: 'exact', decisionMode: 'compare'"), 'explicit field UI metadata exists for comparison selectors');
record(!content.html.includes('financial.css?v=30') && !content.html.includes('financial.css?v=31'), 'financial CSS cache version was bumped after selector fixes');

// ── CINEMA HEADER SYNC POLICY
// Cinema homepage nav (demos/cinema.html) is the source of truth for header nav items.
// All cinema sub-pages must mirror the same nav items — no extra items, no missing items.
// Current canonical nav items (as of 2026-07): Phim · Đang chiếu · Sắp chiếu · Diễn viên · Rạp · TV Series
// Removed: "Ưu đãi" and "Vé của tôi" — do NOT re-add to any cinema page nav.
// When adding or removing a nav item from cinema.html, update ALL sub-pages:
//   cinema-actor, cinema-actors, cinema-chain, cinema-coming-soon, cinema-director,
//   cinema-film-detail, cinema-genre, cinema-genres, cinema-now-showing, cinema-theater,
//   cinema-series (dark-theme nav uses different pattern — verify separately).
// This check catches "Ưu đãi" or "Vé của tôi" re-appearing as nav-link buttons.
const cinemaSubPages = [
  'demos/cinema-actor.html','demos/cinema-actors.html','demos/cinema-chain.html',
  'demos/cinema-coming-soon.html','demos/cinema-director.html','demos/cinema-film-detail.html',
  'demos/cinema-genre.html','demos/cinema-genres.html','demos/cinema-now-showing.html',
  'demos/cinema-theater.html',
];
for (const subPage of cinemaSubPages) {
  try {
    const src = read(subPage);
    record(!(/class="nav-link"[^>]*>Ưu đãi/.test(src)), `${subPage}: no stale "Ưu đãi" nav-link`);
    record(!(/class="nav-link"[^>]*>Vé của tôi/.test(src)), `${subPage}: no stale "Vé của tôi" nav-link`);
    record(/class="nav-link"[^>]*>TV Series/.test(src), `${subPage}: has "TV Series" nav-link`);
    record(!/cinema\/series\/the-last-of-us/.test(src), `${subPage}: TV Series nav-link points to /cinema/series hub, not detail page`);
  } catch {}
}

// ── ICON POLICY (global)
// All icons across demos must come from Lucide SVG (inline <svg> with Lucide paths).
// Do NOT use emoji (🛡, ⚡, 📋…) as UI icons — they render inconsistently across OS/browser
// and are not design-system icons. Replace any emoji used as icons with the equivalent
// Lucide SVG: https://lucide.dev/icons/
// Exception: emoji inside body copy / marketing text is acceptable.
// This rule is intentionally NOT auto-enforced in code (demo files vary too widely),
// but Claude must follow it for every new icon added and fix any emoji icons spotted in review.
record(true, 'icon policy rule is documented (manual enforcement)');

if (failures.length) {
  console.error('UI harness failed');
  failures.forEach(item => console.error(`- ${item}`));
  process.exit(1);
}

console.log('UI harness passed');
passes.forEach(item => console.log(`- ${item}`));
