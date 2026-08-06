import { c as createComponent, e as renderComponent, b as renderTemplate, d as createAstro, m as maybeRenderHead, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_BMOddyS3.mjs';
import 'piccolore';
import { $ as $$VehicleHub } from '../chunks/VehicleHub_Msovdq2n.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const rawCss = `
html, body { overflow: auto !important; height: auto !important; }
body { display: block !important; }
/* Hide duplicate nav elements - VehicleHub SiteNav provides these */
#navSearch, .nav-search { display: none !important; }
.nav-search-icon-btn, .nav-menu-btn { display: none !important; }
/* Reset .site-nav overrides from original HTML - VehicleHub layout owns nav styles */
.site-nav { background: rgba(255,255,255,.97) !important; transition: none !important; }
.site-nav.scrolled { background: rgba(255,255,255,.97) !important; box-shadow: 0 1px 3px rgba(0,0,0,.04) !important; }
.site-nav:has(.nav-item:hover) { background: rgba(255,255,255,.97) !important; border-bottom-color: rgba(0,0,0,.06) !important; box-shadow: 0 1px 3px rgba(0,0,0,.04) !important; }
.site-nav:has(.nav-item:hover) .nav-trigger { color: var(--gray-600) !important; }
.site-nav:has(.nav-item:hover) .nav-item:hover .nav-trigger { color: var(--gray-900) !important; }
.site-nav:has(.nav-item:hover) .nav-back { color: var(--gray-400) !important; }
.site-nav:has(.nav-item:hover) .nav-sep { background: var(--gray-200) !important; }
.site-nav:has(.nav-item:hover) .logo-text { color: var(--gray-900) !important; }
.site-nav:has(.nav-item:hover) .logo-text em { color: var(--pink-500) !important; }

:root {
  --bg:        #F7F5FA;
  --white:     #FFFFFF;
  --pink-500:  #EB2F96;
  --pink-600:  #C22181;
  --pink-400:  #F472B6;
  --pink-50:   #FFF0F8;
  --pink-100:  #FFD6EE;
  --gray-900:  #1C171A;
  --gray-700:  #3D3040;
  --gray-600:  #5C5060;
  --gray-500:  #7A6E7F;
  --gray-400:  #A09AA5;
  --gray-300:  #C8C3CC;
  --gray-200:  #E5E0E9;
  --gray-100:  #F0EBF4;
  --gray-50:   #F7F3FA;
  --amber-500: #D97706;
  --amber-50:  #FFFBEB;
  --green-500: #16A34A;
  --green-50:  #F0FDF4;
  --blue-50:   #EFF6FF;
  --blue-500:  #2563EB;
  --red-500:   #DC2626;
  --red-50:    #FEF2F2;
  --shadow-s:  0 1px 3px rgba(28,23,26,.08), 0 1px 2px rgba(28,23,26,.06);
  --shadow-m:  0 4px 12px rgba(28,23,26,.1), 0 2px 4px rgba(28,23,26,.06);
  --shadow-l:  0 8px 28px rgba(28,23,26,.14), 0 4px 8px rgba(28,23,26,.06);
  --r-sm:      8px;
  --r-md:      12px;
  --r-lg:      16px;
  --r-xl:      20px;
  --content:   1240px;
}
* { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
html { background: var(--bg); scroll-behavior: smooth; overflow-x: hidden; }
body {
  font-family: 'MoMoTrustSans', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--bg); color: var(--gray-900); min-height: 100vh;
  overflow-x: hidden;
}

/* \u2500\u2500 NAV \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* \u2500\u2500 SITE NAV \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.site-nav {
  position: sticky; top: 36px; z-index: 200;
  background: #fff; border-bottom: 1px solid var(--gray-200);
  box-shadow: 0 1px 3px rgba(0,0,0,.06);
  transition: background .2s, border-color .2s, box-shadow .2s;
}
.site-nav:has(.nav-item:hover) {
  background: #1a2535;
  border-bottom-color: transparent;
  box-shadow: none;
}
.site-nav:has(.nav-item:hover) .nav-trigger { color: rgba(255,255,255,.6); }
.site-nav:has(.nav-item:hover) .nav-item:hover .nav-trigger { color: #fff; }
.site-nav:has(.nav-item:hover) .nav-back { color: rgba(255,255,255,.9); }
.site-nav:has(.nav-item:hover) .nav-back:hover { color: #fff; background: rgba(255,255,255,.12); }
.site-nav:has(.nav-item:hover) .nav-sep { background: rgba(255,255,255,.15); }
.site-nav:has(.nav-item:hover) .logo-text { color: #fff; }
.site-nav:has(.nav-item:hover) .logo-text em { color: rgba(255,255,255,.7); }
.nav-inner {
  max-width: var(--content); margin: 0 auto;
  height: 56px; padding: 0 20px;
  display: flex; align-items: center; gap: 16px;
  overflow: visible;
}
.nav-left { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
.nav-back {
  display: inline-flex; align-items: center; gap: 4px;
  font-size: 12px; font-weight: 600; color: var(--gray-400);
  text-decoration: none; padding: 5px 8px; border-radius: 7px;
  transition: color .15s, background .15s;
}
.nav-back:hover { color: var(--gray-700); background: var(--gray-100); }
.nav-sep { width: 1px; height: 18px; background: var(--gray-200); flex-shrink: 0; }
/* MoMo logo (square icon only) */
.nav-momo-logo { display: flex; align-items: center; text-decoration: none; flex-shrink: 0; }
.nav-momo-icon { width: 30px; height: 30px; border-radius: 8px; overflow: hidden; flex-shrink: 0; }
.nav-momo-icon img { width: 100%; height: 100%; display: block; }
.site-nav:has(.nav-item:hover) .nav-sep { background: rgba(255,255,255,.15); }
/* Vehicle hub brand */
.nav-logo { display: flex; align-items: center; gap: 8px; text-decoration: none; }
.logo-icon { width: 30px; height: 30px; border-radius: 8px; overflow: hidden; flex-shrink: 0; }
.logo-icon img { width: 100%; height: 100%; display: block; }
.logo-text { font-size: 13.5px; font-weight: 800; color: var(--gray-900); }
.logo-text em { color: var(--pink-500); font-style: normal; }
.site-nav:has(.nav-item:hover) .logo-text { color: #fff; }
.site-nav:has(.nav-item:hover) .logo-text em { color: rgba(255,255,255,.7); }

/* Mobile search icon btn */
.nav-search-icon-btn {
  display: none; align-items: center; justify-content: center;
  width: 36px; height: 36px; border-radius: 8px;
  background: none; border: 1.5px solid var(--gray-200);
  color: var(--gray-600); cursor: pointer; flex-shrink: 0;
  transition: background .15s, color .15s;
}
.nav-search-icon-btn:hover { background: var(--gray-100); color: var(--gray-900); }

/* Mobile search overlay */
.nav-search-overlay {
  display: none; position: sticky; top: 84px; left: 0; right: 0;
  z-index: 199; padding: 8px 12px 10px;
  background: #fff; border-bottom: 1px solid var(--gray-200);
  box-shadow: 0 4px 12px rgba(28,23,26,.08);
}
.nav-search-overlay.open { display: block; }
.nav-search-overlay .nav-search-box {
  width: 100%; min-width: 0; border-color: var(--pink-500);
  background: #fff; box-shadow: 0 0 0 3px rgba(235,47,150,.1);
}
.nav-search-overlay .nav-search-drop {
  position: static; width: 100%; margin-top: 8px;
  max-height: 320px; border-radius: 10px;
}

/* top-level items */
.nav-links { display: flex; gap: 0; margin-left: 8px; }
.nav-item { position: relative; }
.nav-trigger {
  display: inline-flex; align-items: center; gap: 5px;
  height: 56px; padding: 0 14px;
  font-size: 13px; font-weight: 600; color: var(--gray-600);
  background: none; border: none; cursor: pointer; text-decoration: none;
  white-space: nowrap; transition: color .15s;
  font-family: inherit;
}
.nav-trigger:hover, .nav-item:hover .nav-trigger { color: var(--gray-900); }
.nav-trigger svg { transition: transform .2s; flex: none; }
.nav-item:hover .nav-trigger svg { transform: rotate(180deg); }

/* \u2500\u2500 MEGA DROPDOWN (Revolut style) \u2500\u2500 */
.nav-item { position: static; }
.mega {
  position: absolute; top: 100%; left: 0; right: 0;
  z-index: 400;
  background: #1a2535;
  border-radius: 0 0 20px 20px;
  padding: 0;
  opacity: 0; transform: translateY(-6px); pointer-events: none;
  transition: opacity .18s, transform .18s;
  box-shadow: 0 20px 48px rgba(0,0,0,.28);
}
.mega-body {
  max-width: var(--content); margin: 0 auto;
  padding: 28px 20px 36px;
}
.nav-item:hover .mega { opacity: 1; transform: translateY(0); pointer-events: auto; }

.mega-header {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 15px; font-weight: 700; color: #fff;
  text-decoration: none; margin-bottom: 24px;
  opacity: .9;
  transition: opacity .12s;
}
.mega-header:hover { opacity: 1; }
.mega-header svg { flex: none; }

.mega-cols { display: flex; gap: 48px; }
.mega-col { display: flex; flex-direction: column; gap: 0; min-width: 140px; }
.mega-col-label {
  font-size: 11px; font-weight: 600;
  color: rgba(255,255,255,.4);
  letter-spacing: .04em;
  margin-bottom: 10px;
}
.mega-item {
  display: flex; align-items: center; gap: 9px;
  padding: 7px 0;
  font-size: 15px; font-weight: 500;
  color: rgba(255,255,255,.85);
  text-decoration: none;
  transition: color .12s;
  white-space: nowrap;
}
.mega-item svg { flex-shrink: 0; opacity: .7; transition: opacity .12s; }
.mega-item:hover { color: #fff; }
.mega-item:hover svg { opacity: 1; }

.mega-footer {
  margin-top: 24px; padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,.1);
  display: flex; gap: 10px;
}
.mega-tag {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 12px; font-weight: 700;
  color: rgba(255,255,255,.9);
  background: rgba(255,255,255,.1);
  padding: 6px 14px; border-radius: 20px;
  text-decoration: none;
  transition: background .12s;
}
.mega-tag:hover { background: rgba(255,255,255,.18); }

/* \u2500\u2500 NAV SEARCH \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.nav-search {
  position: relative; margin-left: auto; flex-shrink: 0;
}
.nav-search-box {
  display: flex; align-items: center; gap: 7px;
  height: 34px; padding: 0 10px 0 11px;
  background: var(--gray-100); border: 1.5px solid var(--gray-200);
  border-radius: 9px; cursor: text; min-width: 200px;
  transition: border-color .18s, background .18s, min-width .25s cubic-bezier(.4,0,.2,1), box-shadow .18s;
}
.nav-search-box:focus-within {
  border-color: var(--pink-500); background: #fff;
  box-shadow: 0 0 0 3px rgba(235,47,150,.12);
  min-width: 260px;
}
.nav-search-box svg { flex-shrink: 0; color: var(--gray-400); transition: color .15s; }
.nav-search-box:focus-within svg { color: var(--pink-500); }
.nav-search-inp {
  flex: 1; border: none; background: none; outline: none;
  font-family: inherit; font-size: 13px; font-weight: 500; color: var(--gray-900);
  min-width: 0;
}
.nav-search-inp::placeholder { color: var(--gray-400); }
.nav-search-kbd {
  font-size: 10px; font-weight: 700; color: var(--gray-400);
  background: var(--gray-200); border-radius: 4px;
  padding: 1px 5px; flex-shrink: 0; font-family: inherit;
  pointer-events: none; transition: opacity .15s;
}
.nav-search-box:focus-within .nav-search-kbd { opacity: 0; }

/* Dark mode when mega nav hovered */
.site-nav:has(.nav-item:hover) .nav-search-box {
  background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.16);
}
.site-nav:has(.nav-item:hover) .nav-search-inp { color: #fff; }
.site-nav:has(.nav-item:hover) .nav-search-inp::placeholder { color: rgba(255,255,255,.38); }
.site-nav:has(.nav-item:hover) .nav-search-box svg { color: rgba(255,255,255,.4); }
.site-nav:has(.nav-item:hover) .nav-search-kbd { background: rgba(255,255,255,.12); color: rgba(255,255,255,.4); }
.site-nav:has(.nav-item:hover) .nav-search-box:focus-within {
  background: rgba(255,255,255,.12); border-color: rgba(235,47,150,.6);
}

/* Dropdown */
.nav-search-drop {
  position: absolute; top: calc(100% + 10px); right: 0;
  width: 320px; max-height: 400px; overflow-y: auto;
  background: #fff; border: 1px solid var(--gray-200);
  border-radius: 14px; box-shadow: 0 12px 40px rgba(28,23,26,.16), 0 2px 8px rgba(28,23,26,.07);
  z-index: 600; display: none; flex-direction: column;
  scrollbar-width: thin; scrollbar-color: var(--gray-200) transparent;
}
.nav-search-drop.open { display: flex; }
.nav-search-drop::-webkit-scrollbar { width: 4px; }
.nav-search-drop::-webkit-scrollbar-thumb { background: var(--gray-200); border-radius: 99px; }

.nsd-section-label {
  font-size: 10px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase;
  color: var(--gray-400); padding: 12px 14px 6px; flex-shrink: 0;
}
.nsd-item {
  display: flex; align-items: center; gap: 11px;
  padding: 9px 14px; cursor: pointer; text-decoration: none;
  transition: background .12s;
}
.nsd-item:hover, .nsd-item.nsd-active { background: var(--gray-50); }
.nsd-dot {
  width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;
}
.nsd-info { flex: 1; min-width: 0; }
.nsd-model {
  font-size: 13.5px; font-weight: 700; color: var(--gray-900);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.nsd-brand {
  font-size: 11.5px; color: var(--gray-500); margin-top: 1px;
}
.nsd-type {
  font-size: 10px; font-weight: 700; letter-spacing: .03em;
  padding: 3px 7px; border-radius: 5px; flex-shrink: 0;
  background: var(--gray-100); color: var(--gray-600);
}
.nsd-type.ev { background: var(--green-50); color: var(--green-500); }
.nsd-type.motorbike { background: var(--blue-50); color: var(--blue-500); }
.nsd-divider { height: 1px; background: var(--gray-100); margin: 4px 0; flex-shrink: 0; }
.nsd-empty {
  padding: 28px 14px; text-align: center;
  font-size: 13px; color: var(--gray-400);
}
.nsd-empty strong { display: block; font-size: 14px; font-weight: 700; color: var(--gray-600); margin-bottom: 4px; }

/* \u2500\u2500 HAMBURGER SIDEBAR NAV \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.nav-menu-btn{display:none;margin-left:auto;width:36px;height:36px;border-radius:8px;background:none;border:none;color:var(--gray-700);cursor:pointer;align-items:center;justify-content:center;flex-shrink:0;transition:background .15s,color .15s}
.nav-menu-btn:hover{background:var(--gray-100)}
.nav-sidebar-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:800;backdrop-filter:blur(2px)}
.nav-sidebar-overlay.open{display:block}
.nav-sidebar{position:fixed;top:0;right:0;width:280px;height:100dvh;background:#fff;z-index:900;transform:translateX(100%);transition:transform .28s cubic-bezier(.4,0,.2,1);overflow-y:auto;display:flex;flex-direction:column}
.nav-sidebar.open{transform:translateX(0)}
.nav-sidebar-top{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid var(--gray-100);flex:none}
.nav-sidebar-logo{font-size:13px;font-weight:800;color:var(--gray-900)}
.nav-sidebar-logo em{color:var(--pink-500);font-style:normal}
.nav-sidebar-close{width:32px;height:32px;border-radius:8px;border:1px solid var(--gray-200);background:#fff;display:grid;place-items:center;color:var(--gray-500);cursor:pointer}
.nav-sidebar-body{flex:1;padding:8px 0 24px;overflow-y:auto}
.nav-sidebar-section{padding:12px 16px 4px}
.nav-sidebar-section-label{font-size:10.5px;font-weight:800;color:var(--gray-400);text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px}
.nav-sidebar-link{display:flex;align-items:center;padding:9px 10px;border-radius:8px;font-size:13.5px;font-weight:600;color:var(--gray-700);text-decoration:none;transition:.12s;gap:8px}
.nav-sidebar-link:hover{background:var(--gray-50);color:var(--gray-900)}
.nav-sidebar-divider{height:1px;background:var(--gray-100);margin:8px 16px}

@media(max-width: 768px) {
  .nav-inner { height: 48px; padding: 0 10px; gap: 6px; }
  .nav-back span { display: none; }
  .nav-back { padding: 5px 6px; }
  .nav-sep { display: none; }
  .logo-text { font-size: 12.5px; }
  .logo-icon { width: 26px; height: 26px; }
  .nav-momo-icon { width: 26px; height: 26px; }
  .nav-links { display: none; }
  .mega { display: none; }
  .nav-menu-btn { display: flex; }
  .nav-search { display: none; }
  .nav-search-icon-btn { display: flex; margin-left: auto; }
  .nav-menu-btn { margin-left: 0; }
}

/* \u2500\u2500 HERO: VEHICLE HUB \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.hero {
  background: #0B0A12;
  position: relative; overflow: hidden;
  padding-bottom: 0;
}
.hero::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 80% 70% at 10% 40%, rgba(235,47,150,.18) 0%, transparent 60%),
    radial-gradient(ellipse 60% 80% at 90% 20%, rgba(37,99,235,.14) 0%, transparent 55%),
    radial-gradient(ellipse 50% 60% at 55% 100%, rgba(139,92,246,.10) 0%, transparent 55%);
  pointer-events: none;
}
/* speed-line decorations */
.hero::after {
  content: ''; position: absolute;
  top: 0; right: -60px; width: 420px; height: 100%;
  background:
    repeating-linear-gradient(
      108deg,
      transparent 0, transparent 38px,
      rgba(235,47,150,.06) 38px, rgba(235,47,150,.06) 40px
    );
  pointer-events: none;
}
.hero-inner {
  position: relative; max-width: var(--content); margin: 0 auto;
  padding: 64px 20px 80px;
  display: grid; grid-template-columns: 1fr 440px; gap: 48px; align-items: center;
}
/* wave divider */
.hero-wave {
  position: relative; line-height: 0; margin-top: -2px;
}
.hero-wave svg { display: block; width: 100%; }
/* dark stats bar */
.stats-bar {
  background: #0B0A12;
  padding: 36px 20px;
}
.stats-bar-inner {
  max-width: var(--content); margin: 0 auto;
  display: grid; grid-template-columns: repeat(4,1fr);
  gap: 1px; background: rgba(255,255,255,.08);
  border-radius: 16px; overflow: hidden;
}
.stat-cell {
  padding: 28px 24px;
  background: rgba(255,255,255,.03);
  display: flex; flex-direction: column; gap: 6px;
  transition: background .2s;
}
.stat-cell:hover { background: rgba(235,47,150,.07); }
.stat-num {
  font-size: 36px; font-weight: 900; color: #fff;
  letter-spacing: -.03em; line-height: 1;
  font-variant-numeric: tabular-nums;
}
.stat-num em { font-style: normal; color: var(--pink-400); font-size: .6em; vertical-align: super; }
.stat-label { font-size: 13px; color: rgba(255,255,255,.45); font-weight: 500; }
.stat-tag {
  display: inline-flex; align-items: center; gap: 4px;
  font-size: 10.5px; font-weight: 700; color: #4ade80;
  background: rgba(74,222,128,.1); border-radius: 4px;
  padding: 2px 7px; margin-top: 2px; width: fit-content;
}
@media(max-width:860px) {
  .stats-bar-inner { grid-template-columns: repeat(2,1fr); }
}
@media(max-width:480px) {
  .stats-bar-inner { grid-template-columns: 1fr 1fr; }
  .stat-num { font-size: 28px; }
  .stat-cell { padding: 20px 16px; }
}
.hero-eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
  color: rgba(255,255,255,.4); margin-bottom: 18px;
}
.hero-eyebrow span { color: var(--pink-400); }
.hero-title {
  font-family: 'MoMoTrustDisplay', 'MoMoTrustSans', sans-serif;
  font-size: 46px; font-weight: 800; line-height: 1.1; color: #fff;
  letter-spacing: -.02em; margin-bottom: 18px;
}
.hero-title em { font-style: normal; color: var(--pink-400); }
.hero-desc { font-size: 15px; line-height: 1.65; color: rgba(255,255,255,.6); max-width: 100%; margin-bottom: 28px; }
.hero-service-pills { display: flex; flex-wrap: wrap; gap: 8px; }
.hero-usp {
  list-style: none; padding: 0; margin: 0;
  display: flex; flex-direction: column; gap: 10px;
}
.hero-usp li {
  display: flex; align-items: flex-start; gap: 10px;
  font-size: 14px; line-height: 1.5; color: rgba(255,255,255,.75);
}
.usp-check {
  flex-shrink: 0; width: 18px; height: 18px; border-radius: 50%;
  background: rgba(34,197,94,.2); color: #4ade80;
  font-size: 11px; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  margin-top: 2px;
}
.hero-service-pill {
  display: flex; align-items: center; gap: 6px;
  padding: 7px 14px; border-radius: 999px;
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.06);
  color: rgba(255,255,255,.65); font-size: 12.5px; font-weight: 600;
  text-decoration: none; transition: border-color .15s, background .15s, color .15s;
}
.hero-service-pill:hover { border-color: rgba(235,47,150,.5); background: rgba(235,47,150,.08); color: #fff; }
.hero-service-pill .pill-icon { display: flex; align-items: center; }
.hero-service-pill .pill-icon svg { width: 14px; height: 14px; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; fill: none; }

/* \u2500\u2500 PLATE MOTIVATION \u2500\u2500 */
.plate-motivation {
  padding: 16px 20px 12px;
  border-bottom: 1px solid rgba(255,255,255,.08);
  margin-bottom: 4px;
}
.pm-title {
  font-size: 15px; font-weight: 800; color: #fff;
  margin-bottom: 6px; letter-spacing: -.01em;
}
.pm-items {
  display: flex; align-items: center; gap: 6px; flex-wrap: wrap;
}
.pm-item {
  display: inline-flex; align-items: center; gap: 4px;
  font-size: 11.5px; font-weight: 600; color: rgba(255,255,255,.5);
}
.pm-item svg { stroke: rgba(255,255,255,.35); flex-shrink: 0; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; fill: none; }
.pm-sep { color: rgba(255,255,255,.2); font-size: 11px; }

/* \u2500\u2500 PLATE PANEL \u2500\u2500 */
.plate-panel {
  background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.1);
  border-radius: 20px; overflow: hidden; backdrop-filter: blur(8px);
}
#plateInputArea { padding: 16px 20px 20px; }
.plate-panel-label {
  font-size: 11px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase;
  color: rgba(255,255,255,.35); margin-bottom: 14px;
}

/* Entry use-case cards */
.plate-entry-cards { display: grid; grid-template-columns: repeat(2,1fr); gap: 8px; margin-bottom: 16px; }
.pec-card[data-use="gia-xang"] { border-color: rgba(251,146,60,.25); }
.pec-card[data-use="gia-xang"]:hover,.pec-card[data-use="gia-xang"].pec-active { border-color: rgba(251,146,60,.5); background: rgba(251,146,60,.1); color:#fff; }
.pec-card[data-use="bao-hiem"] { border-color: rgba(34,197,94,.15); }
.pec-card[data-use="bao-hiem"]:hover,.pec-card[data-use="bao-hiem"].pec-active { border-color: rgba(34,197,94,.4); background: rgba(34,197,94,.08); color:#fff; }

/* Inline panels */
.pec-inline { padding-top: 4px; }
.pec-inline-label { font-size: 10px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: rgba(255,255,255,.35); margin-bottom: 12px; }
.pec-fuel-rows { display: flex; flex-direction: column; gap: 0; margin-bottom: 14px; }
.pec-fuel-row { display: flex; align-items: center; gap: 8px; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,.07); }
.pec-fuel-row:last-child { border-bottom: none; }
.pec-fuel-name { flex: 1; font-size: 13px; font-weight: 600; color: rgba(255,255,255,.8); }
.pec-fuel-price { font-size: 14px; font-weight: 800; color: #fff; }
.pec-fuel-change { font-size: 11px; font-weight: 700; min-width: 52px; text-align: right; }
.pec-down { color: #4ade80; }
.pec-up { color: #f87171; }
.pec-inline-cta { display: block; font-size: 12.5px; font-weight: 700; color: var(--pink-400); text-decoration: none; padding: 10px 0 2px; }
.pec-inline-cta:hover { color: #fff; }
.pec-bh-row { display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 10px; border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.05); text-decoration: none; margin-bottom: 8px; transition: background .15s, border-color .15s; color: rgba(255,255,255,.7); }
.pec-bh-row:hover { background: rgba(255,255,255,.09); border-color: rgba(255,255,255,.2); color: #fff; }
.pec-bh-row svg { flex-shrink: 0; }
.pec-bh-info { flex: 1; }
.pec-bh-name { font-size: 13px; font-weight: 700; color: #fff; margin-bottom: 2px; }
.pec-bh-desc { font-size: 11.5px; color: rgba(255,255,255,.45); }
.pec-bh-arrow { opacity: .4; flex-shrink: 0; }
.pec-card {
  display: flex; flex-direction: column; align-items: center; gap: 6px;
  padding: 12px 8px 10px; border-radius: 12px; border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.06); color: rgba(255,255,255,.55);
  cursor: pointer; transition: all .15s; font-family: inherit; text-align: center;
}
.pec-card:hover { border-color: rgba(235,47,150,.4); color: rgba(255,255,255,.85); background: rgba(235,47,150,.08); }
.pec-card.pec-active { border-color: var(--pink-500); background: rgba(235,47,150,.15); color: #fff; }
.pec-card svg { width: 16px; height: 16px; }
.pec-label { font-size: 11px; font-weight: 600; line-height: 1.3; }

/* The plate input \u2014 styled as a Vietnamese license plate */
.plate-input-wrap {
  display: flex; flex-direction: column; gap: 12px;
}
.plate-box {
  background: rgba(255,255,255,.07); border: 1.5px solid rgba(255,255,255,.14); border-radius: 12px;
  padding: 6px 10px 10px; display: flex; flex-direction: column; align-items: center;
  gap: 0; cursor: text; transition: box-shadow .15s, border-color .15s;
  box-shadow: 0 2px 12px rgba(0,0,0,.3);
}
.plate-box:focus-within {
  border-color: rgba(235,47,150,.5);
  box-shadow: 0 2px 12px rgba(0,0,0,.3), 0 0 0 3px rgba(235,47,150,.25);
}
.plate-vn-strip { display: none; }
.plate-input {
  background: transparent; border: none; outline: none; width: 100%;
  text-align: center; font-size: 32px; font-weight: 900;
  color: #fff; letter-spacing: .08em; text-transform: uppercase;
  line-height: 1.15; font-family: 'MoMoTrustDisplay', 'MoMoTrustSans', monospace;
  padding: 0;
}
.plate-input::placeholder { color: rgba(255,255,255,.55); font-weight: 600; font-size: 18px; letter-spacing: .04em; }
.plate-province {
  font-size: 10px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
  color: rgba(255,255,255,.6); height: 0; overflow: hidden; opacity: 0;
  transition: height .18s ease, opacity .18s ease, margin-top .18s ease;
  margin-top: 0;
}
.plate-province.is-visible {
  height: 14px; opacity: .7; margin-top: 2px;
}

.vtype-toggle { display: flex; gap: 6px; margin-bottom: 14px; }
.vtype-btn { display: flex; align-items: center; gap: 6px; height: 34px; padding: 0 14px; border-radius: 20px; border: 1.5px solid rgba(255,255,255,.15); background: transparent; color: rgba(255,255,255,.5); font-size: 13px; font-weight: 600; cursor: pointer; transition: all .15s; }
.vtype-btn.active { border-color: var(--pink-500); background: rgba(235,47,150,.15); color: #fff; }
.vtype-btn:hover:not(.active) { border-color: rgba(255,255,255,.3); color: rgba(255,255,255,.8); }
.plate-submit {
  width: 100%; height: 50px; border: none; border-radius: 12px;
  background: var(--pink-500); color: #fff;
  font-size: 15px; font-weight: 800; font-family: inherit; cursor: pointer;
  transition: background .15s, transform .1s;
}
.plate-submit:hover { background: var(--pink-600); }
.plate-submit:active { transform: scale(.98); }

.plate-result {
  margin-top: 14px; border-radius: 12px; overflow: hidden;
  display: none;
}
.plate-result.is-visible { display: block; }

/* mini dashboard after plate submit */
.hub-dash { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.hub-dash-header {
  grid-column: 1 / -1; display: flex; align-items: center; justify-content: space-between;
  padding: 8px 12px 0; margin-bottom: -2px;
}
.hub-dash-plate-tag {
  font-size: 13px; font-weight: 900; letter-spacing: .06em;
  color: var(--gray-900); background: #F5D629; border-radius: 6px; padding: 2px 8px;
}
.hub-dash-reset {
  font-size: 11.5px; color: var(--gray-500); background: none; border: 1px solid var(--gray-200);
  border-radius: 999px; cursor: pointer; font-family: inherit; font-weight: 600;
  padding: 4px 10px; display: inline-flex; align-items: center; gap: 4px;
  transition: color .15s, border-color .15s;
}
.hub-dash-reset:hover { color: var(--gray-900); border-color: var(--gray-400); }
.hub-dash-reset svg { width: 11px; height: 11px; stroke: currentColor; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
.hub-dash-tile {
  background: #fff; border-radius: 14px; padding: 14px 14px 12px;
  display: flex; flex-direction: column; gap: 3px;
  border: 1px solid var(--gray-100);
  box-shadow: 0 1px 4px rgba(0,0,0,.06);
}
.hub-dash-tile-icon {
  width: 34px; height: 34px; border-radius: 9px; margin-bottom: 8px;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.hub-dash-tile-icon svg { width: 16px; height: 16px; stroke-width: 2.25; stroke-linecap: round; stroke-linejoin: round; fill: none; }
.hub-dash-tile-icon.icon-alert { background: #fef2f2; color: #ef4444; }
.hub-dash-tile-icon.icon-warn  { background: #fffbeb; color: #d97706; }
.hub-dash-tile-icon.icon-ok    { background: #f0fdf4; color: #16a34a; }
.hub-dash-tile-icon.icon-blue  { background: #eff6ff; color: #2563eb; }
.hub-dash-tile-icon.icon-pink  { background: var(--pink-50); color: var(--pink-500); }
.hub-dash-tile-label { font-size: 11px; font-weight: 600; color: var(--gray-500); letter-spacing: .01em; }
.hub-dash-tile-value { font-size: 17px; font-weight: 800; color: var(--gray-900); line-height: 1.2; margin-top: 1px; }
.hub-dash-tile-sub { font-size: 10.5px; color: var(--gray-400); margin-top: 1px; }
.hub-dash-tile-value.is-warn { color: #d97706; }
.hub-dash-tile-value.is-alert { color: #ef4444; }
.hub-dash-tile-value.is-ok { color: #16a34a; }
.hub-dash-tile-value.is-cta { color: var(--gray-400); font-size: 15px; font-weight: 500; }
.hub-dash-tile-action {
  margin-top: 10px; display: inline-flex; align-items: center; gap: 3px;
  font-size: 11.5px; font-weight: 700; color: var(--pink-500); text-decoration: none;
  background: none; border: none; cursor: pointer; font-family: inherit; padding: 0;
  border-top: 1px solid var(--gray-100); padding-top: 8px;
}
.hub-dash-tile-action svg { width: 12px; height: 12px; stroke-width: 2.5; flex-shrink: 0; }

/* demo state \u2014 show data but signal it's example */
.hub-dash--demo .hub-dash-plate-tag {
  background: rgba(255,255,255,.08); color: rgba(255,255,255,.65);
  border: 1px solid rgba(255,255,255,.14);
}
.hub-dash--demo .hub-dash-plate-tag::after { content: ' \xB7 Nh\u1EADp BSX \u0111\u1EC3 xem xe b\u1EA1n'; font-weight: 400; opacity: .6; font-size: 10px; }
.hub-dash--demo .hub-dash-tile { background: rgba(255,255,255,.92); }
.hub-dash--demo .hub-dash-reset { display: none; }
.hub-dash--demo .hub-dash-tile-action { display: none; }
@keyframes skel-pulse { 0%,100%{opacity:.4} 50%{opacity:.85} }
@keyframes plate-shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-6px)} 40%{transform:translateX(6px)} 60%{transform:translateX(-4px)} 80%{transform:translateX(4px)} }
@keyframes plate-glow { 0%,100%{box-shadow:0 0 0 0 rgba(235,47,150,0)} 40%{box-shadow:0 0 0 4px rgba(235,47,150,.35)} }
.plate-box.is-triggered { animation: plate-glow .6s ease 2; }
.plate-panel-label.is-triggered { color: var(--pink-400); }
.skel-bar {
  display: inline-block; height: 18px; width: 72px; border-radius: 6px;
  background: var(--gray-200); animation: skel-pulse 1.4s ease-in-out infinite;
  vertical-align: middle;
}
.hub-dash--preview { display: none; } /* \u1EA9n ho\xE0n to\xE0n tr\u01B0\u1EDBc khi submit \u2014 entry cards \u0111\xE3 \u0111\u1EE7 h\u01B0\u1EDBng d\u1EABn */

/* \u2500\u2500 UNIFIED RESULT SECTIONS \u2500\u2500 */
/* \u2500\u2500 UNIFIED RESULT LAYOUT \u2500\u2500 */
.ur-sections { display: flex; flex-direction: column; gap: 12px; }

/* Status summary banner */
.ur-summary {
  border-radius: 14px; padding: 14px 16px;
  display: flex; align-items: center; gap: 12px;
}
.ur-summary.is-alert { background: #fff5f5; border: 1.5px solid #fecaca; }
.ur-summary.is-ok    { background: #f0fdf4; border: 1.5px solid #bbf7d0; }
.ur-summary-icon {
  width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.ur-summary.is-alert .ur-summary-icon { background: #fee2e2; color: #dc2626; }
.ur-summary.is-ok    .ur-summary-icon { background: #dcfce7; color: #16a34a; }
.ur-summary-icon svg { width: 20px; height: 20px; stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; }
.ur-summary-body { flex: 1; min-width: 0; }
.ur-summary-title {
  font-size: 14px; font-weight: 800; line-height: 1.3;
}
.ur-summary.is-alert .ur-summary-title { color: #991b1b; }
.ur-summary.is-ok    .ur-summary-title { color: #166534; }
.ur-summary-sub { font-size: 12px; margin-top: 2px; }
.ur-summary.is-alert .ur-summary-sub { color: #dc2626; }
.ur-summary.is-ok    .ur-summary-sub  { color: #16a34a; }

/* Main section wrapper (ph\u1EA1t ngu\u1ED9i) */
.ur-main-section {
  background: var(--gray-50); border: 1px solid var(--gray-200);
  border-radius: 16px; overflow: hidden;
}
.ur-main-head {
  display: flex; align-items: center; gap: 10px;
  padding: 14px 16px 12px;
  border-bottom: 1px solid var(--gray-150, #efefef);
}
.ur-section-icon {
  width: 32px; height: 32px; border-radius: 8px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.ur-section-icon svg { width: 16px; height: 16px; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; fill: none; }
.ur-section-icon.ok    { background: #f0fdf4; color: #16a34a; }
.ur-section-icon.alert { background: #fef2f2; color: #ef4444; }
.ur-section-icon.blue  { background: #eff6ff; color: #2563eb; }
.ur-section-icon.gray  { background: var(--gray-100); color: var(--gray-500); }
.ur-section-title {
  font-size: 13px; font-weight: 700; color: var(--gray-700); letter-spacing: .01em;
}
.ur-section-badge {
  margin-left: auto; font-size: 11px; font-weight: 700;
  border-radius: 999px; padding: 3px 10px;
}
.ur-section-badge.ok    { background: #f0fdf4; color: #16a34a; }
.ur-section-badge.alert { background: #fef2f2; color: #ef4444; }
.ur-section-badge.blue  { background: #eff6ff; color: #2563eb; }
.ur-section-badge.gray  { background: var(--gray-100); color: var(--gray-500); }
.ur-main-body { padding: 12px 16px 14px; }
.ur-section-desc { font-size: 13px; color: var(--gray-600); line-height: 1.5; }
.ur-section-note { font-size: 11px; color: var(--gray-400); margin-top: 6px; }

/* Violation cards */
.ur-violations { display: flex; flex-direction: column; gap: 8px; }
.ur-violation {
  border: 1px solid var(--gray-200); border-radius: 12px; overflow: hidden;
  background: #fff;
}
.ur-v-main { display: flex; align-items: stretch; }
.ur-v-bar { width: 4px; flex: none; background: #f59e0b; }
.ur-v-bar.is-red { background: #ef4444; }
.ur-v-body { flex: 1; padding: 12px 14px; display: flex; align-items: flex-start; gap: 12px; }
.ur-v-info { flex: 1; min-width: 0; }
.ur-v-type { font-size: 13.5px; font-weight: 800; color: var(--gray-900); margin-bottom: 4px; }
.ur-v-meta { font-size: 11px; color: var(--gray-500); display: flex; align-items: center; gap: 4px; margin-bottom: 2px; }
.ur-v-meta svg { display: inline; flex-shrink: 0; }
.ur-v-unit { font-size: 11px; color: var(--gray-500); display: flex; align-items: center; gap: 4px; font-weight: 600; }
.ur-v-unit svg { display: inline; flex-shrink: 0; }
.ur-v-fine-block { text-align: right; flex-shrink: 0; }
.ur-v-fine { font-size: 13px; font-weight: 900; color: var(--gray-900); white-space: nowrap; }
.ur-v-fine-label { font-size: 10px; color: var(--gray-400); margin-top: 1px; }
.ur-v-footer {
  border-top: 1px solid var(--gray-100); background: var(--gray-50);
  padding: 8px 14px;
}
.ur-v-blog {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 11.5px; color: var(--pink-500); font-weight: 600; text-decoration: none;
}
.ur-v-blog svg { width: 11px; height: 11px; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; fill: none; flex-shrink: 0; }
.ur-v-blog:hover { text-decoration: underline; }

/* CTA buttons */
.ur-v-actions { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 12px; }
.ur-btn-primary {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 13px; font-weight: 700; color: #fff;
  background: var(--pink-500); border-radius: 999px;
  padding: 10px 20px; text-decoration: none; transition: background .15s;
}
.ur-btn-primary:hover { background: var(--pink-600); }
.ur-btn-primary svg { width: 13px; height: 13px; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; fill: none; }
.ur-btn-ghost {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 13px; font-weight: 700; color: var(--gray-700);
  border: 1px solid var(--gray-300); background: #fff; border-radius: 999px;
  padding: 9px 16px; text-decoration: none; transition: border-color .15s;
}
.ur-btn-ghost:hover { border-color: var(--gray-500); }
.ur-btn-ghost svg { width: 13px; height: 13px; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; fill: none; }

/* Mini 2-col cards (\u0110\u0103ng ki\u1EC3m + \u0110\u1ECBnh gi\xE1) */
.ur-mini-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.ur-mini-card {
  border: 1px solid var(--gray-200); border-radius: 14px;
  background: #fff; padding: 14px; display: flex; flex-direction: column; gap: 8px;
  text-decoration: none;
}
.ur-mini-card:hover { border-color: var(--gray-400); }
.ur-mini-head { display: flex; align-items: center; gap: 8px; }
.ur-mini-icon {
  width: 30px; height: 30px; border-radius: 8px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.ur-mini-icon svg { width: 15px; height: 15px; stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; }
.ur-mini-icon.blue  { background: #eff6ff; color: #2563eb; }
.ur-mini-icon.gray  { background: var(--gray-100); color: var(--gray-500); }
.ur-mini-icon.pink  { background: #fdf2f8; color: var(--pink-500); }
.ur-mini-label { font-size: 12px; font-weight: 700; color: var(--gray-700); }
.ur-mini-desc { font-size: 11.5px; color: var(--gray-500); line-height: 1.45; flex: 1; }
.ur-mini-cta {
  display: inline-flex; align-items: center; gap: 4px;
  font-size: 12px; font-weight: 700; text-decoration: none;
  margin-top: auto;
}
.ur-mini-cta.blue { color: #2563eb; }
.ur-mini-cta.pink { color: var(--pink-500); }
.ur-mini-cta svg { width: 12px; height: 12px; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }

/* \u2500\u2500 PLATE RESULT SECTION \u2500\u2500 */
.prs-wrap {
  background: #fff; border-bottom: 1px solid var(--gray-200);
  animation: prs-in .25s ease;
}
@keyframes prs-in { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
.prs-inner {
  max-width: var(--content); margin: 0 auto; padding: 20px 20px 24px;
}
/* \u2500\u2500 K\u1EBET QU\u1EA2 TRA C\u1EE8U \u2500\u2500 */
.vr-wrap { display: flex; flex-direction: column; gap: 16px; }

/* Top header */
/* \u2500\u2500 Vehicle Result Header \u2500\u2500 */
.vr-head { display: flex; align-items: flex-start; gap: 14px; }
.vr-car-icon {
  width: 52px; height: 52px; border-radius: 14px; flex-shrink: 0;
  background: #fdf2f8; display: flex; align-items: center; justify-content: center;
}
.vr-car-icon svg { width: 28px; height: 28px; fill: none; stroke: var(--pink-500); stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
.vr-head-body { flex: 1; min-width: 0; }
.vr-head-label { font-size: 11px; font-weight: 600; color: var(--gray-500); margin-bottom: 2px; }
.vr-plate-big {
  font-size: 28px; font-weight: 900; letter-spacing: .06em; color: var(--gray-900);
  line-height: 1.1;
}
.vr-vehicle-model { font-size: 13px; font-weight: 600; color: var(--gray-600); margin-top: 4px; }
.vr-head-sub { font-size: 13px; font-weight: 500; color: var(--gray-500); margin-top: 5px; }
.vr-head-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 8px; }
.vr-htag {
  display: inline-flex; align-items: center; gap: 4px;
  font-size: 11px; font-weight: 700; color: var(--gray-600);
  background: var(--gray-100); border-radius: 999px; padding: 3px 10px;
}
.vr-htag svg { width: 11px; height: 11px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.vr-head-right { flex-shrink: 0; display: flex; flex-direction: column; align-items: flex-end; gap: 6px; margin-top: 2px; }
.vr-status-pill {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 12px; font-weight: 700; border-radius: 999px;
  padding: 6px 14px; border: 1.5px solid;
}
.vr-status-pill.ok    { color: #16a34a; border-color: #bbf7d0; background: #f0fdf4; }
.vr-status-pill.alert { color: #dc2626; border-color: #fecaca; background: #fef2f2; }
.vr-status-pill svg { width: 13px; height: 13px; fill: none; stroke: currentColor; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }
.vr-reset {
  font-size: 11px; color: var(--gray-500); background: none; border: 1px solid var(--gray-200);
  border-radius: 999px; cursor: pointer; font-family: inherit; font-weight: 600;
  padding: 5px 12px; display: inline-flex; align-items: center; gap: 4px;
  transition: color .15s, border-color .15s;
}
.vr-reset:hover { color: var(--gray-800); border-color: var(--gray-400); }
.vr-reset svg { width: 10px; height: 10px; fill: none; stroke: currentColor; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }

/* Vehicle info card (legacy grid \u2014 hidden, replaced by tags) */
.vr-info-card { display: none; }
.vr-plate-prefix {
  font-size: 13px; font-weight: 900; color: #d97706;
  background: #fef3c7; border-radius: 6px; padding: 3px 8px; letter-spacing: .04em;
}
.vr-info-sub { font-size: 11px; color: var(--gray-500); margin-bottom: 2px; font-weight: 500; }
.vr-info-val { font-size: 14px; font-weight: 800; color: var(--gray-900); }
.vr-head-ts { font-size: 11px; color: var(--gray-400); }

/* Violations section */
.vr-section-head {
  display: flex; align-items: center; gap: 8px; margin-bottom: 10px;
}
.vr-section-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.vr-section-dot.red { background: #ef4444; }
.vr-section-dot.ok  { background: #22c55e; }
.vr-section-dot.blue { background: #3b82f6; }
.vr-section-dot.gray { background: var(--gray-400); }
.vr-section-title { font-size: 16px; font-weight: 800; color: var(--gray-900); }
.vr-count-pill {
  font-size: 11px; font-weight: 800; background: #ef4444; color: #fff;
  border-radius: 999px; padding: 1px 8px; min-width: 22px; text-align: center;
}

/* Violation cards */
.vr-violations-wrap {
  background: #fff; border: 1px solid var(--gray-200); border-radius: 14px;
  overflow: hidden;
}
.vr-violations {
  display: flex; flex-direction: column;
}
.vr-violations-footer {
  border-top: 1px solid var(--gray-200); padding: 12px 14px;
  background: var(--gray-50);
}
.vr-violation {
  display: flex; align-items: stretch;
}
.vr-violation + .vr-violation { border-top: 1px solid var(--gray-100); }
.vr-v-bar { width: 5px; flex-shrink: 0; }
.vr-v-bar.red    { background: #ef4444; }
.vr-v-bar.amber  { background: #f59e0b; }
.vr-v-content {
  flex: 1; padding: 14px 14px 14px 16px;
  display: flex; align-items: center; gap: 14px;
}
.vr-v-icon {
  width: 40px; height: 40px; border-radius: 12px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.vr-v-icon.red   { background: #fef2f2; }
.vr-v-icon.amber { background: #fffbeb; }
.vr-v-icon svg { width: 20px; height: 20px; fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
.vr-v-icon.red svg   { stroke: #ef4444; }
.vr-v-icon.amber svg { stroke: #d97706; }
.vr-v-info { flex: 1; min-width: 0; }
.vr-v-title { font-size: 14px; font-weight: 800; color: var(--gray-900); margin-bottom: 5px; }
.vr-v-meta { font-size: 11.5px; color: var(--gray-500); display: flex; align-items: center; gap: 5px; margin-bottom: 3px; }
.vr-v-meta svg { width: 11px; height: 11px; fill: none; stroke: currentColor; stroke-width: 2; flex-shrink: 0; }
.vr-v-unit { font-size: 11.5px; color: var(--gray-500); display: flex; align-items: center; gap: 5px; }
.vr-v-unit svg { width: 11px; height: 11px; fill: none; stroke: currentColor; stroke-width: 2; flex-shrink: 0; }
.vr-v-right { text-align: right; flex-shrink: 0; display: flex; align-items: center; gap: 10px; }
.vr-v-fine-block { text-align: right; }
.vr-v-fine { font-size: 13px; font-weight: 800; color: #dc2626; white-space: nowrap; }
.vr-v-fine-label { font-size: 10px; color: var(--gray-400); margin-top: 2px; }
.vr-v-chevron { color: var(--gray-300); }
.vr-v-chevron svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }

/* Violation card footer */
.vr-v-footer {
  border-top: 1px solid var(--gray-100); padding: 9px 14px 9px 20px;
  display: flex; align-items: center; justify-content: space-between; gap: 10px;
  background: var(--gray-50);
}
.vr-v-guide {
  font-size: 12px; font-weight: 600; color: var(--gray-500); text-decoration: none;
  display: flex; align-items: center; gap: 4px; flex: 1; min-width: 0;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  transition: color .15s;
}
.vr-v-guide:hover { color: var(--gray-900); }
.vr-v-guide svg { width: 12px; height: 12px; flex-shrink: 0; fill: none; stroke: currentColor; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
.vr-v-pay-btn {
  display: inline-flex; align-items: center; gap: 5px; flex-shrink: 0;
  font-size: 12px; font-weight: 800; color: #fff; background: var(--pink-500);
  border: none; border-radius: 999px; padding: 6px 14px; cursor: pointer;
  text-decoration: none; font-family: inherit; transition: background .15s;
}
.vr-v-pay-btn:hover { background: #c71f82; }
.vr-v-pay-btn svg { width: 12px; height: 12px; fill: none; stroke: #fff; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }

/* Payment CTA bar (legacy, hidden) */
.vr-pay-bar { display: none; }

/* Clean state \u2014 no violation */
.vr-clean-card {
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border: 1.5px solid #86efac; border-radius: 14px;
  padding: 18px 16px 16px; display: flex; align-items: flex-start; gap: 14px;
}
.vr-clean-icon {
  width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
  background: #fff; border: 1.5px solid #86efac;
  display: flex; align-items: center; justify-content: center;
}
.vr-clean-icon svg { width: 22px; height: 22px; fill: none; stroke: #16a34a; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.vr-clean-body { flex: 1; min-width: 0; }
.vr-clean-title { font-size: 15px; font-weight: 800; color: #087a55; margin-bottom: 3px; }
.vr-clean-sub { font-size: 12.5px; color: #166534; line-height: 1.5; margin-bottom: 14px; }
.vr-clean-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.vr-clean-cta-main {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 9px 18px; background: #16a34a; color: #fff;
  border-radius: 9px; font-size: 13px; font-weight: 700;
  text-decoration: none; border: none; cursor: pointer; font-family: inherit;
  transition: background .15s;
}
.vr-clean-cta-main:hover { background: #15803d; }
.vr-clean-cta-main svg { width: 13px; height: 13px; fill: none; stroke: #fff; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
.vr-clean-cta-sec {
  display: inline-flex; align-items: center; gap: 4px;
  font-size: 12.5px; font-weight: 700; color: #166534;
  text-decoration: none; padding: 9px 0;
}
.vr-clean-cta-sec:hover { text-decoration: underline; }

/* \u2500\u2500 Consent Sheet \u2500\u2500 */
.cs-overlay {
  display: none; position: fixed; inset: 0; z-index: 1100;
  background: rgba(0,0,0,.5); backdrop-filter: blur(3px);
  align-items: flex-end; justify-content: center;
}
.cs-overlay.open { display: flex; }
.cs-sheet {
  background: #fff; border-radius: 20px 20px 0 0;
  width: 100%; max-width: 560px; padding: 0 0 env(safe-area-inset-bottom,0);
  transform: translateY(100%); transition: transform .3s cubic-bezier(.4,0,.2,1);
  overflow: hidden;
}
.cs-overlay.open .cs-sheet { transform: translateY(0); }
.cs-drag { width: 36px; height: 4px; border-radius: 2px; background: var(--gray-200); margin: 12px auto 0; }
.cs-head { padding: 16px 20px 12px; border-bottom: 1px solid var(--gray-100); }
.cs-plate-row { display: flex; align-items: center; gap: 10px; margin-bottom: 6px; }
.cs-plate-icon { width: 36px; height: 36px; border-radius: 10px; background: var(--pink-50); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.cs-plate-icon svg { width: 18px; height: 18px; fill: none; stroke: var(--pink-500); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.cs-plate-num { font-size: 17px; font-weight: 900; color: var(--gray-900); letter-spacing: .02em; }
.cs-plate-type { font-size: 12px; color: var(--gray-500); font-weight: 500; }
.cs-title { font-size: 16px; font-weight: 800; color: var(--gray-900); margin-bottom: 3px; }
.cs-sub { font-size: 13px; color: var(--gray-500); line-height: 1.5; }
.cs-perms { padding: 14px 20px; display: flex; flex-direction: column; gap: 10px; }
.cs-perm-row { display: flex; align-items: flex-start; gap: 10px; }
.cs-perm-icon { width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
.cs-perm-icon svg { width: 15px; height: 15px; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.cs-perm-icon.amber { background: #fffbeb; } .cs-perm-icon.amber svg { stroke: #d97706; }
.cs-perm-icon.blue  { background: #eff6ff; } .cs-perm-icon.blue svg  { stroke: #2563eb; }
.cs-perm-icon.green { background: #f0fdf4; } .cs-perm-icon.green svg { stroke: #16a34a; }
.cs-perm-icon.pink  { background: var(--pink-50); } .cs-perm-icon.pink svg { stroke: var(--pink-500); }
.cs-perm-text strong { font-size: 13px; font-weight: 700; color: var(--gray-900); display: block; }
.cs-perm-text span { font-size: 12px; color: var(--gray-500); line-height: 1.45; }
.cs-legal { margin: 0 20px 14px; padding: 10px 12px; background: var(--gray-50); border-radius: 8px; font-size: 11.5px; color: var(--gray-400); line-height: 1.5; }
.cs-legal a { color: var(--pink-500); text-decoration: none; }
.cs-legal a:hover { text-decoration: underline; }
.cs-footer { padding: 12px 20px 20px; display: flex; flex-direction: column; gap: 8px; border-top: 1px solid var(--gray-100); }
.cs-confirm-btn {
  display: flex; align-items: center; justify-content: center; gap: 7px;
  padding: 14px; background: var(--pink-500); color: #fff;
  border: none; border-radius: 12px; font-size: 15px; font-weight: 700;
  cursor: pointer; font-family: inherit; transition: background .15s; width: 100%;
}
.cs-confirm-btn:hover { background: var(--pink-600); }
.cs-confirm-btn svg { width: 16px; height: 16px; fill: none; stroke: #fff; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
.cs-skip-btn {
  display: block; text-align: center; padding: 8px;
  font-size: 13px; font-weight: 600; color: var(--gray-500);
  background: none; border: none; cursor: pointer; font-family: inherit; transition: color .15s;
}
.cs-skip-btn:hover { color: var(--gray-700); }

/* success state */
.cs-success { display: none; flex-direction: column; align-items: center; padding: 32px 20px 28px; text-align: center; }
.cs-success-icon { width: 56px; height: 56px; border-radius: 50%; background: #f0fdf4; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
.cs-success-icon svg { width: 28px; height: 28px; fill: none; stroke: #16a34a; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.cs-success h3 { font-size: 16px; font-weight: 800; color: var(--gray-900); margin-bottom: 6px; }
.cs-success p { font-size: 13px; color: var(--gray-500); line-height: 1.55; margin-bottom: 20px; }
.cs-success-close { padding: 12px 32px; background: var(--gray-100); border: none; border-radius: 10px; font-size: 14px; font-weight: 700; color: var(--gray-700); cursor: pointer; font-family: inherit; transition: background .15s; }
.cs-success-close:hover { background: var(--gray-200); }

.vr-clean-price-tag {
  display: inline-flex; align-items: center;
  font-size: 11px; font-weight: 700; color: #16a34a;
  background: #fff; border-radius: 999px; padding: 2px 9px; line-height: 1.4; letter-spacing: .2px;
}
.vr-pay-single {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  padding: 11px 20px;
  background: var(--pink-500); color: #fff;
  font-size: 14px; font-weight: 700; border-radius: 10px;
  text-decoration: none; transition: background .15s;
}
.vr-pay-single:hover { background: var(--pink-600); }
.vr-pay-single svg { width: 15px; height: 15px; fill: none; stroke: #fff; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
.vr-pay-btn {
  display: inline-flex; align-items: center; gap: 6px; flex-shrink: 0;
  font-size: 13px; font-weight: 800; color: #fff; background: var(--pink-500);
  border-radius: 999px; padding: 10px 18px; text-decoration: none;
  transition: background .15s; white-space: nowrap;
}
.vr-pay-btn:hover { background: var(--pink-600); }
.vr-pay-btn svg { width: 13px; height: 13px; fill: none; stroke: currentColor; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }

/* Other services row */
.vr-services {
  display: flex; flex-direction: column;
  background: #fff; border: 1px solid var(--gray-200); border-radius: 14px;
  overflow: hidden;
}
.vr-service {
  display: flex; align-items: center; gap: 14px;
  padding: 14px 16px; text-decoration: none;
  transition: background .12s;
}
.vr-service + .vr-service { border-top: 1px solid var(--gray-100); }
.vr-service:hover { background: var(--gray-50); }
.vr-svc-icon {
  width: 40px; height: 40px; border-radius: 12px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.vr-svc-icon svg { width: 20px; height: 20px; fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
.vr-svc-icon.blue  { background: #eff6ff; }
.vr-svc-icon.blue svg { stroke: #2563eb; }
.vr-svc-icon.pink  { background: #fdf2f8; }
.vr-svc-icon.pink svg { stroke: var(--pink-500); }
.vr-svc-icon.green { background: #f0fdf4; }
.vr-svc-icon.green svg { stroke: #16a34a; }
.vr-svc-icon.amber { background: #fffbeb; }
.vr-svc-icon.amber svg { stroke: #d97706; }
.vr-svc-icon.purple { background: #f5f3ff; }
.vr-svc-icon.purple svg { stroke: #7c3aed; }
.vr-svc-badge.amber { background: #fffbeb; color: #d97706; }
.vr-svc-badge.purple { background: #f5f3ff; color: #7c3aed; }

/* Result panel entry animation */
@keyframes vr-result-in {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
.vr-wrap > * {
  animation: vr-result-in .4s cubic-bezier(.22,1,.36,1) both;
}
.vr-wrap > *:nth-child(1) { animation-delay: 0ms; }
.vr-wrap > *:nth-child(2) { animation-delay: 60ms; }
.vr-wrap > *:nth-child(3) { animation-delay: 120ms; }
.vr-wrap > *:nth-child(4) { animation-delay: 180ms; }
.vr-wrap > *:nth-child(5) { animation-delay: 240ms; }
.vr-service {
  transition: background .12s, transform .2s cubic-bezier(.22,1,.36,1);
}
.vr-service:hover { background: var(--gray-50); transform: translateX(3px); }
.vr-svc-body { flex: 1; min-width: 0; }
.vr-svc-label { font-size: 13.5px; font-weight: 800; color: var(--gray-900); }
.vr-svc-sub { font-size: 11.5px; color: var(--gray-500); margin-top: 2px; }
.vr-svc-right { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
.vr-svc-badge {
  font-size: 11px; font-weight: 700; border-radius: 999px; padding: 3px 10px;
}
.vr-svc-badge.blue { background: #eff6ff; color: #2563eb; }
.vr-svc-badge.gray { background: var(--gray-100); color: var(--gray-600); }
.vr-svc-chevron svg { width: 15px; height: 15px; fill: none; stroke: var(--gray-400); stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }

.prs-reset {
  font-size: 11.5px; color: var(--gray-500); background: none; border: 1px solid var(--gray-200);
  border-radius: 999px; cursor: pointer; font-family: inherit; font-weight: 600;
  padding: 4px 12px; display: inline-flex; align-items: center; gap: 4px;
  transition: color .15s, border-color .15s; margin-left: auto;
}
.prs-reset:hover { color: var(--gray-900); border-color: var(--gray-400); }
.prs-reset svg { width: 11px; height: 11px; stroke: currentColor; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
/* Result card */
.prs-card {
  border: 1px solid var(--gray-200); border-radius: 16px; overflow: hidden;
}
.prs-status-block {
  display: flex; align-items: flex-start; gap: 14px;
  padding: 20px 20px 16px;
}
.prs-icon {
  width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.prs-icon svg { width: 22px; height: 22px; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; fill: none; }
.prs-icon.ok  { background: #f0fdf4; color: #16a34a; }
.prs-icon.warn{ background: #fffbeb; color: #d97706; }
.prs-icon.alert{ background: #fef2f2; color: #ef4444; }
.prs-icon.info { background: var(--blue-50); color: var(--blue-500); }
.prs-title { font-size: 17px; font-weight: 800; color: var(--gray-900); line-height: 1.3; }
.prs-title.ok   { color: #16a34a; }
.prs-title.warn { color: #d97706; }
.prs-title.alert{ color: #ef4444; }
.prs-sub { font-size: 13px; color: var(--gray-500); margin-top: 4px; line-height: 1.5; }
.prs-remain { font-size: 13px; font-weight: 700; margin-top: 6px; }
.prs-remain.ok   { color: #16a34a; }
.prs-remain.warn { color: #d97706; }
.prs-remain.alert{ color: #ef4444; }
.prs-footer {
  border-top: 1px solid var(--gray-100); background: var(--gray-50);
  padding: 12px 20px; display: flex; align-items: center; justify-content: space-between; gap: 8px;
  flex-wrap: wrap;
}
.prs-note { font-size: 11px; color: var(--gray-400); }
.prs-cta {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 12.5px; font-weight: 700; color: var(--pink-500);
  text-decoration: none; background: none; border: none; cursor: pointer; font-family: inherit; padding: 0;
}
.prs-cta svg { width: 13px; height: 13px; stroke-width: 2.5; }
.prs-cta-btn {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 13px; font-weight: 700; color: #fff;
  background: var(--pink-500); border: none; border-radius: 999px;
  padding: 8px 18px; cursor: pointer; font-family: inherit;
  text-decoration: none; transition: background .15s;
}
.prs-cta-btn:hover { background: var(--pink-600); }
.prs-cta-btn svg { width: 13px; height: 13px; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; fill: none; }
/* Violation items inside result */
.prs-violations { padding: 0 20px 16px; border-top: 1px solid var(--gray-100); }
.prs-violations-title { font-size: 11px; font-weight: 700; color: var(--gray-400); letter-spacing: .04em; text-transform: uppercase; padding: 12px 0 8px; }
.prs-v-item {
  display: flex; gap: 10px; align-items: flex-start;
  padding: 10px 0; border-bottom: 1px solid var(--gray-100);
}
.prs-v-item:last-child { border-bottom: none; }
.prs-v-dot {
  width: 8px; height: 8px; border-radius: 50%; margin-top: 5px; flex-shrink: 0;
}
.prs-v-dot.red   { background: #ef4444; }
.prs-v-dot.amber { background: #d97706; }
.prs-v-type { font-size: 13.5px; font-weight: 700; color: var(--gray-900); }
.prs-v-meta { font-size: 11.5px; color: var(--gray-500); margin-top: 2px; }
/* \u2500\u2500 VR PANEL (violations detail) \u2500\u2500 */
.vr-section { max-height: 0; overflow: hidden; transition: max-height .45s cubic-bezier(0.4,0,0.2,1); }
.vr-section.is-open { max-height: 1400px; }
.vr-header { display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; padding: 16px 0 12px; border-top: 1px solid var(--gray-200); margin-top: 14px; }
.vr-header-left { display: flex; align-items: center; gap: 10px; }
.vr-plate { font-size: 18px; font-weight: 900; letter-spacing: .05em; color: var(--gray-900); }
.vr-vehicle-tag { font-size: 10.5px; font-weight: 700; color: var(--gray-500); background: var(--gray-50); border: 1px solid var(--gray-200); border-radius: 999px; padding: 2px 9px; }
.vr-status-badge { display: inline-flex; align-items: center; gap: 5px; font-size: 10.5px; font-weight: 800; background: #fff3cd; border: 1px solid #ffc107; color: #7a4f00; border-radius: 999px; padding: 3px 10px; }
.vr-status-badge.is-clear { background: var(--green-50); border-color: #86efac; color: #087a55; }
.vr-status-badge::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: currentColor; display: block; }
.vr-list { display: flex; flex-direction: column; gap: 8px; margin-bottom: 8px; }
.vr-card { border: 1px solid var(--gray-200); border-radius: 12px; background: #fff; overflow: hidden; }
.vr-card-main { display: flex; align-items: stretch; }
.vr-violation-bar { width: 4px; background: #f59e0b; flex: none; }
.vr-violation-bar.is-red { background: #ef4444; }
.vr-card-body { flex: 1; min-width: 0; display: flex; align-items: center; gap: 12px; padding: 11px 14px; }
.vr-name-block { flex: 1; min-width: 0; }
.vr-violation-name { font-size: 13.5px; font-weight: 800; color: var(--gray-900); line-height: 1.3; }
.vr-meta-line { margin-top: 3px; font-size: 11px; color: var(--gray-500); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.vr-meta-line svg { display: inline; vertical-align: middle; margin-right: 3px; }
.vr-fine-block { text-align: right; flex: none; }
.vr-fine-amount { font-size: 13px; font-weight: 900; color: var(--gray-900); white-space: nowrap; }
.vr-fine-unit { font-size: 10px; color: var(--gray-500); }
.vr-status-pill { font-size: 10px; font-weight: 700; background: #fff3cd; border: 1px solid #ffc107; color: #7a4f00; border-radius: 999px; padding: 3px 9px; white-space: nowrap; flex: none; }
.vr-card-footer { border-top: 1px solid var(--gray-100); padding: 8px 14px; background: var(--gray-50); }
.vr-guide-link { display: inline-flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 600; color: var(--pink-500); text-decoration: none; transition: gap .15s; }
.vr-guide-link:hover { gap: 7px; text-decoration: underline; }
.vr-sub-card { margin-top: 12px; border: 1.5px solid #e0c8da; border-radius: 14px; background: linear-gradient(135deg, #fff0f7 0%, #fff 60%); overflow: hidden; }
.vr-sub-top { padding: 14px 16px 0; }
.vr-sub-badge { display: inline-block; font-size: 9.5px; font-weight: 800; letter-spacing: .07em; text-transform: uppercase; color: var(--pink-500); background: var(--pink-50); border-radius: 999px; padding: 3px 9px; margin-bottom: 8px; }
.vr-sub-title { font-size: 15px; font-weight: 900; color: var(--gray-900); margin-bottom: 4px; }
.vr-sub-desc { font-size: 12px; color: var(--gray-500); line-height: 1.55; }
.vr-sub-features { display: flex; flex-wrap: wrap; gap: 5px 14px; margin: 10px 0 0; padding: 0; list-style: none; }
.vr-sub-features li { font-size: 11px; font-weight: 600; color: var(--gray-900); display: flex; align-items: center; gap: 5px; }
.vr-sub-features li::before { content: '\u2713'; width: 16px; height: 16px; border-radius: 50%; background: var(--pink-50); color: var(--pink-500); font-size: 9px; font-weight: 900; display: grid; place-items: center; flex: none; }
.vr-sub-plans { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; padding: 12px 16px; }
.vr-sub-plan { border: 1.5px solid var(--gray-200); border-radius: 10px; background: #fff; cursor: pointer; transition: border-color .15s, background .15s; display: block; position: relative; }
.vr-sub-plan input { position: absolute; opacity: 0; pointer-events: none; }
.vr-sub-plan:has(input:checked) { border-color: var(--pink-500); background: var(--pink-50); }
.vr-sub-plan.is-featured { border-color: #d4a0c0; }
.vr-sub-plan.is-featured:has(input:checked) { border-color: var(--pink-500); }
.vr-sub-plan-body { padding: 10px 12px; display: grid; gap: 2px; }
.vr-sub-plan-label { font-size: 11px; font-weight: 700; color: var(--gray-500); display: flex; align-items: center; gap: 5px; }
.vr-sub-plan-label em { font-style: normal; font-size: 9.5px; font-weight: 800; background: #ffd700; color: #5a3d00; border-radius: 999px; padding: 1px 6px; }
.vr-sub-plan-price { font-size: 16px; font-weight: 900; color: var(--gray-900); }
.vr-sub-plan-price span { font-size: 11px; font-weight: 500; color: var(--gray-500); }
.vr-sub-cta { width: calc(100% - 32px); margin: 0 16px 14px; background: var(--pink-500); color: #fff; border: none; border-radius: 10px; padding: 12px; font-size: 13px; font-weight: 800; font-family: inherit; cursor: pointer; transition: background .15s; }
.vr-sub-cta:hover { background: var(--pink-600); }
.vr-actions { display: flex; gap: 8px; flex-wrap: wrap; padding: 12px 0 16px; }
.vr-btn-primary { flex: 1; min-width: 160px; background: var(--pink-500); color: #fff; border: none; border-radius: 10px; padding: 11px 16px; font-size: 13px; font-weight: 800; font-family: inherit; display: flex; align-items: center; justify-content: center; gap: 7px; cursor: pointer; transition: background .15s; }
.vr-btn-primary:hover { background: var(--pink-600); }
.vr-btn-secondary { flex: 1; min-width: 140px; background: #fff; color: var(--gray-900); border: 1.5px solid var(--gray-200); border-radius: 10px; padding: 11px 16px; font-size: 13px; font-weight: 700; font-family: inherit; display: flex; align-items: center; justify-content: center; gap: 7px; cursor: pointer; transition: background .15s, border-color .15s; }
.vr-btn-secondary:hover { background: var(--gray-50); border-color: #ccc; }

/* \u2500\u2500 GAS STRIP \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.gas-strip {
  background: var(--gray-900);
  position: sticky; top: 0; z-index: 201;
  overflow: hidden; height: 36px;
  display: flex; align-items: center;
}
.gs-label {
  padding: 0 16px 0 20px; flex-shrink: 0;
  font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;
  color: var(--pink-400); white-space: nowrap;
  display: flex; align-items: center; gap: 7px;
  border-right: 1px solid rgba(255,255,255,.1);
  background: var(--gray-900); z-index: 1;
}
.gs-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--green-500); animation: pulse 2s infinite; }
@keyframes pulse { 50% { opacity: .35; } }
/* ticker */
.gs-ticker-wrap { flex: 1; overflow: hidden; }
.gs-ticker {
  display: flex; align-items: center; gap: 0;
  width: max-content;
  animation: ticker-run 18s linear infinite;
}
.gs-ticker:hover { animation-play-state: paused; }
@keyframes ticker-run {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.gs-item {
  display: flex; align-items: baseline; gap: 7px;
  white-space: nowrap; flex-shrink: 0;
  padding: 0 28px; border-right: 1px solid rgba(255,255,255,.08);
}
.gs-name { font-size: 12px; color: rgba(255,255,255,.5); }
.gs-price { font-size: 13.5px; font-weight: 800; color: #fff; font-variant-numeric: tabular-nums; }
.gs-change { font-size: 10.5px; font-weight: 700; }
.gs-change.down { color: #4ADE80; }
.gs-change.up { color: #F87171; }
.gs-change.same { color: rgba(255,255,255,.35); }
/* right fade + link */
.gs-link-wrap {
  flex-shrink: 0; padding: 0 16px; background: var(--gray-900); z-index: 1;
  border-left: 1px solid rgba(255,255,255,.1);
}
.gs-link { font-size: 11.5px; font-weight: 700; color: var(--pink-400); text-decoration: none; white-space: nowrap; }
.gs-link:hover { color: #fff; }

/* \u2500\u2500 BRAND STRIP \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.brand-strip-wrap{background:var(--white);border-bottom:1px solid var(--gray-200)}
.brand-strip-inner{max-width:var(--content);margin:0 auto;padding:14px 20px;display:flex;align-items:center;gap:20px}
.brand-strip-label{font-size:11px;font-weight:700;color:var(--gray-400);white-space:nowrap;text-transform:uppercase;letter-spacing:.6px;flex-shrink:0}
@media(max-width:768px){
  .brand-strip-inner{flex-direction:column;align-items:flex-start;gap:10px;padding:12px 16px}
  .brand-strip-label{font-size:10px}
  .brand-strip-scroll{width:100%}
}
.brand-strip-scroll{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none;padding-bottom:2px}
.brand-strip-scroll::-webkit-scrollbar{display:none}
.brand-chip{display:flex;flex-direction:column;align-items:center;gap:6px;padding:10px 14px;border-radius:var(--r-lg);border:1.5px solid var(--gray-200);background:var(--white);text-decoration:none;flex-shrink:0;transition:all .15s;cursor:pointer}
.brand-chip:hover{border-color:var(--pink-400);box-shadow:var(--shadow-s);transform:translateY(-1px)}
.brand-chip-logo{width:44px;height:44px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.brand-chip-name{font-size:10.5px;font-weight:700;color:var(--gray-700);white-space:nowrap}

/* \u2500\u2500 PAGE / SECTIONS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.page-wrap { max-width: var(--content); margin: 0 auto; padding: 0 20px; }
.section { padding: 56px 0 8px; }
.section-eyebrow {
  font-size: 11px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase;
  color: var(--pink-500); margin-bottom: 10px; display: flex; align-items: center; gap: 8px;
}
.section-eyebrow::before {
  content: ''; display: inline-block; width: 24px; height: 2px; background: var(--pink-500); border-radius: 2px;
}
.section-title {
  font-family: 'MoMoTrustDisplay', 'MoMoTrustSans', sans-serif;
  font-size: 34px; font-weight: 900; letter-spacing: -.02em; margin-bottom: 10px; line-height: 1.1;
}
.section-desc { font-size: 14.5px; color: var(--gray-500); max-width: 520px; line-height: 1.65; }
.section-head { margin-bottom: 32px; display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; }
.section-more { font-size: 13px; font-weight: 700; color: var(--pink-500); cursor: pointer; white-space: nowrap; text-decoration: none; }

/* cluster groups (kept for other sections) */
.cluster-block { margin-bottom: 44px; }
.cluster-block:last-child { margin-bottom: 0; }
.cluster-head { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 2px solid var(--gray-100); }
.cluster-icon { width: 40px; height: 40px; border-radius: 12px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 18px; }
.cluster-label { font-size: 15px; font-weight: 800; color: var(--gray-900); line-height: 1.2; }
.cluster-sub { font-size: 12px; color: var(--gray-500); margin-top: 2px; line-height: 1.4; }

/* \u2500\u2500 FLIP CARD SECTION \u2500\u2500 */
.fc-tabs { display: flex; gap: 8px; margin-bottom: 28px; }
.fc-tab {
  height: 36px; padding: 0 18px; border-radius: 999px;
  font-size: 13px; font-weight: 700; border: none; cursor: pointer;
  font-family: inherit; transition: all .18s;
  background: var(--gray-100); color: var(--gray-600);
}
.fc-tab.on { background: var(--gray-900); color: #fff; }
.fc-tab:hover:not(.on) { background: var(--gray-200); }

.fc-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
@media(max-width: 860px) { .fc-grid { grid-template-columns: repeat(2, 1fr); } }
@media(max-width: 480px) { .fc-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; } }
@media(max-width: 340px) { .fc-grid { grid-template-columns: 1fr; } }

/* Card flip container */
.fc-card {
  aspect-ratio: 3/4;
  perspective: 1000px;
  cursor: pointer;
  border-radius: 20px;
}
.fc-inner {
  position: relative; width: 100%; height: 100%;
  transition: transform .55s cubic-bezier(.4,0,.2,1);
  transform-style: preserve-3d;
  border-radius: 20px;
}
.fc-card.flipped .fc-inner { transform: rotateY(180deg); }
/* backface-visibility kh\xF4ng ch\u1EB7n hit-test \u1ED5n \u0111\u1ECBnh tr\xEAn m\u1ECDi browser - toggle pointer-events theo tr\u1EA1ng th\xE1i l\u1EADt */
.fc-back { pointer-events: none; }
.fc-card.flipped .fc-back { pointer-events: auto; }
.fc-card.flipped .fc-front { pointer-events: none; }

.fc-front, .fc-back {
  position: absolute; inset: 0;
  border-radius: 20px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  overflow: hidden;
}

/* FRONT */
.fc-front {
  display: flex; flex-direction: column; justify-content: flex-end;
  padding: 20px;
}
.fc-front-bg {
  position: absolute; inset: 0; border-radius: 20px;
  display: flex; align-items: center; justify-content: center;
}
.fc-front-icon {
  position: absolute; bottom: -8px; right: -8px;
  color: rgba(255,255,255,.12);
  pointer-events: none;
}
.fc-back-icon-wrap { margin-bottom: 12px; color: var(--gray-500); }
.fc-arrow-btn {
  position: absolute; top: 14px; right: 14px;
  width: 28px; height: 28px; border-radius: 50%;
  background: rgba(255,255,255,.15); border: 1px solid rgba(255,255,255,.25);
  color: #fff; font-size: 13px; display: flex; align-items: center; justify-content: center;
  transition: background .15s; cursor: pointer; z-index: 2;
}
.fc-front-content { position: relative; z-index: 1; }
.fc-front-title {
  font-size: 20px; font-weight: 900; color: #fff; line-height: 1.2;
  margin-bottom: 6px; text-shadow: 0 2px 8px rgba(0,0,0,.25);
}
.fc-front-desc {
  font-size: 12.5px; color: rgba(255,255,255,.8); line-height: 1.5;
  font-weight: 500;
}
/* gradient overlay so text is always readable */
.fc-front::after {
  content: '';
  position: absolute; inset: 0; border-radius: 20px;
  background: linear-gradient(to top, rgba(0,0,0,.55) 0%, rgba(0,0,0,0) 55%);
  pointer-events: none;
}

/* BACK */
.fc-back {
  transform: rotateY(180deg);
  background: #fff;
  display: flex; flex-direction: column;
  padding: 24px;
  border: 1px solid var(--gray-100);
}
.fc-back-close {
  position: absolute; top: 14px; right: 14px;
  width: 30px; height: 30px; border-radius: 50%;
  background: var(--gray-100); border: none; cursor: pointer;
  font-size: 13px; color: var(--gray-500); display: flex; align-items: center; justify-content: center;
  transition: background .12s;
}
.fc-back-close:hover { background: var(--gray-200); }
.fc-back-icon { font-size: 40px; margin-bottom: 16px; line-height: 1; }
.fc-back-title { font-size: 18px; font-weight: 900; color: var(--gray-900); margin-bottom: 8px; line-height: 1.25; }
.fc-back-desc { font-size: 13px; color: var(--gray-500); line-height: 1.6; flex: 1; }
.fc-back-cta {
  display: flex; align-items: center; justify-content: center; gap: 6px;
  margin-top: 20px; padding: 12px; border-radius: 12px;
  background: var(--pink-500); color: #fff;
  font-size: 13.5px; font-weight: 800; text-decoration: none;
  transition: background .15s; font-family: inherit;
}
.fc-back-cta:hover { background: var(--pink-600); }

/* fc mobile: horizontal list rows */
@media(max-width: 480px) {
  .fc-tabs { flex-wrap: nowrap; overflow-x: auto; padding-bottom: 2px; -webkit-overflow-scrolling: touch; }
  .fc-tab { flex-shrink: 0; font-size: 12px; height: 34px; padding: 0 14px; }

  .fc-grid { grid-template-columns: 1fr; gap: 8px; }

  /* Disable 3d flip */
  .fc-card { aspect-ratio: unset; min-height: unset; perspective: none; border-radius: 14px; }
  .fc-inner { position: static; min-height: unset; transform: none !important; transition: none; transform-style: flat; }
  .fc-card.flipped .fc-inner { transform: none !important; }

  /* Horizontal row */
  .fc-front {
    position: relative;
    flex-direction: row; align-items: center;
    padding: 12px 14px; border-radius: 14px;
    gap: 12px; min-height: 64px;
  }
  .fc-front::after {
    background: linear-gradient(to right, rgba(0,0,0,.3) 0%, rgba(0,0,0,.05) 70%, transparent 100%);
  }

  /* Repurpose the watermark icon as a small icon swatch on the left */
  .fc-front-icon {
    display: flex; position: static; order: 1;
    flex-shrink: 0; width: 44px; height: 44px;
    border-radius: 11px; background: rgba(255,255,255,.18);
    align-items: center; justify-content: center;
    color: rgba(255,255,255,.85);
  }
  .fc-front-icon svg { width: 22px !important; height: 22px !important; }

  .fc-front-content { order: 2; flex: 1; position: relative; z-index: 1; }
  .fc-front-title { font-size: 14px; font-weight: 800; margin-bottom: 2px; }
  .fc-front-desc { font-size: 12px; line-height: 1.4; }

  .fc-arrow-btn { order: 3; position: static; flex-shrink: 0; z-index: 2; }

  /* Back not needed on mobile \u2014 tap navigates directly */
  .fc-back { display: none !important; }

}

/* utility cards grid */
.util-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.svc-rows { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
.svc-row { display: flex; align-items: center; gap: 12px; padding: 14px 16px; background: var(--white); border-radius: var(--r-lg); border: 1px solid transparent; box-shadow: var(--shadow-s); text-decoration: none; color: inherit; transition: all .15s; }
.svc-row:hover { border-color: var(--pink-100); box-shadow: var(--shadow-m); }
.svc-row .svc-ico { width: 36px; height: 36px; border-radius: 10px; overflow: hidden; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
.svc-row .svc-ico img { width: 100%; height: 100%; object-fit: contain; }
.svc-row .svc-info { flex: 1; min-width: 0; }
.svc-row .svc-name { font-size: 13.5px; font-weight: 700; color: var(--gray-900); line-height: 1.3; }
.svc-row .svc-tag { display: inline-block; font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 20px; margin-top: 3px; }
.svc-row .svc-arr { font-size: 13px; font-weight: 800; color: var(--pink-500); flex-shrink: 0; }
.util-card {
  background: var(--white); border-radius: var(--r-lg); padding: 22px;
  box-shadow: var(--shadow-s); border: 1px solid transparent;
  cursor: pointer; transition: all .18s; text-decoration: none; color: inherit;
  display: block;
}
.util-card:hover { border-color: var(--pink-100); box-shadow: var(--shadow-m); transform: translateY(-2px); }
.util-icon {
  width: 44px; height: 44px; border-radius: var(--r-md);
  display: flex; align-items: center; justify-content: center; font-size: 22px;
  margin-bottom: 14px; overflow: hidden; flex-shrink: 0;
}
.util-icon img { width: 100%; height: 100%; object-fit: contain; }
.util-card.is-disabled { opacity: .5; pointer-events: none; cursor: default; }
.util-card.is-disabled:hover { transform: none; box-shadow: var(--shadow-s); border-color: transparent; }
.util-badge-off {
  font-size: 9.5px; font-weight: 800; padding: 2px 8px; border-radius: 20px;
  background: var(--gray-100); color: var(--gray-500); letter-spacing: .04em;
}
.util-name { font-size: 15.5px; font-weight: 800; margin-bottom: 5px; }
.util-desc { font-size: 13px; color: var(--gray-500); line-height: 1.55; margin-bottom: 12px; }
.util-foot { display: flex; align-items: center; justify-content: space-between; }
.util-tag { font-size: 10.5px; font-weight: 700; padding: 3px 9px; border-radius: 20px; }
.util-arrow { font-size: 14px; font-weight: 800; color: var(--pink-500); }

/* \u2500\u2500 GAS SECTION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.gas-panel {
  background: var(--white); border-radius: var(--r-lg); box-shadow: var(--shadow-s);
  overflow: hidden;
  display: grid; grid-template-columns: 1.2fr 1fr;
}
.gas-table { padding: 6px 0; }
.gas-row {
  display: flex; align-items: center; justify-content: space-between;
  padding: 15px 24px; border-bottom: 1px solid var(--gray-100);
}
.gas-row:last-child { border-bottom: none; }
.gr-name { font-size: 14px; font-weight: 700; }
.gr-sub { font-size: 11.5px; color: var(--gray-400); }
.gr-right { display: flex; align-items: center; gap: 14px; }
.gr-price { font-size: 19px; font-weight: 800; font-variant-numeric: tabular-nums; }
.gr-unit { font-size: 11px; color: var(--gray-400); font-weight: 400; }
.gr-badge { font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 20px; }
.gr-badge.down { background: var(--green-50); color: var(--green-500); }
.gr-badge.up { background: var(--red-50); color: var(--red-500); }
.gr-badge.same { background: var(--gray-100); color: var(--gray-400); }
.gas-side {
  background: var(--gray-50); border-left: 1px solid var(--gray-100);
  padding: 24px; display: flex; flex-direction: column;
}
.gas-side-title { font-size: 13px; font-weight: 800; margin-bottom: 14px; }
.trend-chart { height: 110px; margin-bottom: 10px; }
.trend-x { display: flex; justify-content: space-between; font-size: 10px; color: var(--gray-400); margin-bottom: 16px; }
.gas-note {
  font-size: 12px; color: var(--gray-600); line-height: 1.6;
  background: var(--white); border: 1px solid var(--gray-200);
  border-radius: var(--r-sm); padding: 12px 14px; margin-top: auto;
}
.gas-note strong { color: var(--gray-900); }
.gas-region-tabs { display: flex; gap: 8px; padding: 18px 24px 0; }
.grt {
  font-size: 12.5px; font-weight: 700; padding: 7px 16px; border-radius: 20px;
  border: 1.5px solid var(--gray-200); background: none; cursor: pointer;
  color: var(--gray-500); transition: all .15s; font-family: inherit;
}
.grt.on { border-color: var(--pink-500); background: var(--pink-50); color: var(--pink-500); }

/* \u2500\u2500 EPASS SECTION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.epass-panel {
  background: linear-gradient(120deg, #0B0A12 0%, #171226 100%);
  border-radius: var(--r-xl); overflow: hidden; position: relative;
  display: grid; grid-template-columns: 1fr 1fr; align-items: center;
}
.epass-panel::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse 60% 80% at 85% 30%, rgba(235,47,150,.15) 0%, transparent 60%);
  pointer-events: none;
}
.epass-copy { padding: 44px 20px 44px 44px; position: relative; }
.epass-copy .section-eyebrow { color: var(--pink-400); }
.epass-copy h2 {
  font-family: 'MoMoTrustDisplay', 'MoMoTrustSans', sans-serif;
  font-size: 26px; font-weight: 800; color: #fff; line-height: 1.2; margin-bottom: 12px;
}
.epass-copy p { font-size: 13.5px; color: rgba(255,255,255,.55); line-height: 1.65; margin-bottom: 20px; max-width: 400px; }
.epass-steps { list-style: none; display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; }
.epass-steps li { display: flex; gap: 12px; align-items: flex-start; font-size: 13px; color: rgba(255,255,255,.8); }
.ep-step-num {
  width: 22px; height: 22px; border-radius: 50%; flex-shrink: 0;
  background: rgba(235,47,150,.25); color: var(--pink-400);
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 800;
}
.btn-fill {
  display: inline-block; padding: 12px 26px; border: none; border-radius: var(--r-md);
  background: var(--pink-500); color: #fff; font-size: 14px; font-weight: 800;
  cursor: pointer; transition: background .15s; font-family: inherit;
}
.btn-fill:hover { background: var(--pink-600); }
.epass-visual { padding: 40px 44px 40px 20px; position: relative; }
.ep-mock {
  background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1);
  border-radius: var(--r-lg); padding: 22px; display: flex; flex-direction: column; gap: 0;
}
/* balance row */
.ep-head-row { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 14px; }
.ep-mock-label { font-size: 10px; color: rgba(255,255,255,.35); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
.ep-mock-balance { font-size: 36px; font-weight: 900; color: #fff; font-variant-numeric: tabular-nums; letter-spacing: -.02em; line-height: 1; }
.ep-mock-balance small { font-size: 16px; font-weight: 500; opacity: .5; }
.ep-provider { background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.12); border-radius: 6px; padding: 3px 8px; font-size: 11px; font-weight: 700; color: rgba(255,255,255,.6); flex-shrink: 0; margin-top: 2px; }
/* balance bar */
.ep-bar-wrap { margin-bottom: 16px; }
.ep-bar { height: 5px; background: rgba(255,255,255,.1); border-radius: 3px; overflow: hidden; margin-bottom: 5px; }
.ep-bar-fill { height: 100%; border-radius: 3px; background: linear-gradient(90deg, var(--green-500), #86efac); transition: width .4s ease; }
.ep-bar-meta { display: flex; justify-content: space-between; }
.ep-bar-meta span { font-size: 10.5px; color: rgba(255,255,255,.35); }
/* divider */
.ep-divider { height: 1px; background: rgba(255,255,255,.08); margin: 4px 0 14px; }
/* auto-topup row */
.ep-auto-row { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; margin-bottom: 4px; }
.ep-auto-info { flex: 1; min-width: 0; }
.ep-auto-head { display: flex; align-items: center; gap: 6px; margin-bottom: 2px; }
.ep-auto-badge { font-size: 10px; font-weight: 800; background: rgba(235,47,150,.2); color: var(--pink-400); padding: 2px 7px; border-radius: 20px; letter-spacing: .03em; }
.ep-auto-rule { font-size: 12.5px; color: rgba(255,255,255,.7); font-weight: 600; }
.ep-auto-last { font-size: 11px; color: rgba(255,255,255,.3); margin-top: 3px; }
.ep-toggle { width: 38px; height: 21px; background: var(--pink-500); border-radius: 12px; position: relative; flex-shrink: 0; margin-top: 1px; cursor: pointer; }
.ep-toggle::after { content: ''; position: absolute; top: 2px; right: 2px; width: 17px; height: 17px; background: #fff; border-radius: 50%; transition: right .2s; }
/* quick topup */
.ep-topup-wrap { margin-top: 14px; padding-top: 14px; border-top: 1px solid rgba(255,255,255,.08); }
.ep-topup-label { font-size: 10.5px; color: rgba(255,255,255,.4); font-weight: 600; text-transform: uppercase; letter-spacing: .06em; margin-bottom: 8px; }
.ep-amount-chips { display: flex; gap: 6px; margin-bottom: 10px; }
.ep-chip {
  flex: 1; height: 32px; border-radius: 8px; font-size: 12.5px; font-weight: 700;
  background: rgba(255,255,255,.08); color: rgba(255,255,255,.6);
  border: 1.5px solid rgba(255,255,255,.1); transition: all .15s; cursor: pointer;
  font-family: inherit;
}
.ep-chip:hover { background: rgba(255,255,255,.14); color: rgba(255,255,255,.9); }
.ep-chip.on { background: rgba(235,47,150,.2); border-color: rgba(235,47,150,.5); color: var(--pink-400); }
.ep-topup-btn {
  width: 100%; height: 38px; background: var(--pink-500); color: #fff; border-radius: 9px;
  font-size: 13px; font-weight: 800; font-family: inherit; transition: background .15s; cursor: pointer;
  border: none;
}
.ep-topup-btn:hover { background: var(--pink-600); }

@media(max-width:480px) {
  .epass-copy { padding: 20px 16px 14px; }
  .epass-visual { padding: 0 16px 20px; }
  .epass-copy h2 { font-size: 22px; margin-bottom: 12px; }
  .epass-copy > p { display: none; }
  .epass-steps { flex-direction: row; gap: 6px; margin-bottom: 18px; }
  .epass-steps li {
    flex: 1; flex-direction: column; align-items: center; justify-content: center;
    text-align: center; font-size: 10px; gap: 5px; line-height: 1.3;
    background: rgba(255,255,255,.05); border-radius: 10px; padding: 10px 5px;
  }
  .ep-route-teaser { display: none !important; }
  .ep-full-link { display: none !important; }
  .ep-footnote { display: none !important; }
  .ep-auto-row-wrap { display: none !important; }
  .btn-fill { display: block; width: 100%; text-align: center; box-sizing: border-box; }
}

/* \u2500\u2500 INSURANCE SECTION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.ins-wrap { display: grid; grid-template-columns: 340px 1fr; gap: 16px; align-items: start; }
.ins-edu {
  background: var(--amber-50); border: 1px solid #FDE68A;
  border-radius: var(--r-lg); padding: 22px;
}
.ins-edu-icon { font-size: 26px; margin-bottom: 10px; }
.ins-edu h3 { font-size: 15.5px; font-weight: 800; margin-bottom: 8px; }
.ins-edu p { font-size: 13px; color: var(--gray-600); line-height: 1.6; margin-bottom: 12px; }
.ins-edu p strong { color: var(--amber-500); }
.ins-compare { background: var(--white); border-radius: var(--r-lg); box-shadow: var(--shadow-s); overflow: hidden; }
.ins-compare-head {
  padding: 16px 22px; border-bottom: 1px solid var(--gray-100);
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
}
.ins-compare-head strong { font-size: 14px; font-weight: 800; }
.ins-compare-head span { font-size: 12px; color: var(--gray-400); }
.ins-row {
  display: flex; align-items: center; gap: 14px;
  padding: 14px 22px; border-bottom: 1px solid var(--gray-100);
  transition: background .12s;
}
.ins-row:last-child { border-bottom: none; }
.ins-row:hover { background: var(--gray-50); }
.ins-logo {
  width: 38px; height: 38px; border-radius: var(--r-sm); flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 800; color: #fff;
}
.ins-info { flex: 1; min-width: 0; }
.ins-name { font-size: 14px; font-weight: 700; display: flex; align-items: center; gap: 5px; flex-wrap: nowrap; white-space: nowrap; }
.ins-perk { font-size: 12px; color: var(--gray-500); }
.ins-price { font-size: 16px; font-weight: 800; font-variant-numeric: tabular-nums; white-space: nowrap; }
.ins-price small { font-size: 11px; color: var(--gray-400); font-weight: 400; }
.ins-buy {
  padding: 7px 16px; border-radius: 20px; border: 1.5px solid var(--pink-500);
  background: none; color: var(--pink-500); font-size: 12.5px; font-weight: 700;
  cursor: pointer; transition: all .15s; white-space: nowrap; font-family: inherit;
}
.ins-buy:hover { background: var(--pink-500); color: #fff; }
.ins-best { font-size: 10px; font-weight: 800; background: var(--pink-500); color: #fff; padding: 2px 8px; border-radius: 20px; margin-left: 6px; vertical-align: 2px; }
.ins-tabs { display: flex; gap: 4px; margin-bottom: 16px; }
.ins-tab { padding: 8px 18px; border-radius: 20px; font-size: 13px; font-weight: 700; border: 1.5px solid var(--gray-200); background: var(--white); color: var(--gray-500); cursor: pointer; transition: all .15s; }
.ins-tab.active { background: var(--pink-500); border-color: var(--pink-500); color: #fff; }
.ins-tab:hover:not(.active) { border-color: var(--pink-500); color: var(--pink-500); }

/* \u2500\u2500 TH\xC2N V\u1ECE CROSS-SELL \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.thanvo-card {
  display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
  margin-top: 20px; background: linear-gradient(135deg, #fff0f8 0%, #fff 60%);
  border: 1.5px solid var(--pink-100); border-radius: var(--r-lg);
  padding: 24px; align-items: center;
}
.thanvo-tag { font-size: 11px; font-weight: 800; color: var(--pink-500); text-transform: uppercase; letter-spacing: .8px; margin-bottom: 6px; }
.thanvo-title { font-size: 20px; font-weight: 900; color: var(--gray-900); margin-bottom: 8px; }
.thanvo-desc { font-size: 13px; color: var(--gray-600); line-height: 1.6; margin-bottom: 16px; }
.thanvo-stats { display: flex; gap: 20px; margin-bottom: 18px; }
.thanvo-stat { display: flex; flex-direction: column; }
.thanvo-num { font-size: 20px; font-weight: 900; color: var(--pink-500); line-height: 1; }
.thanvo-label { font-size: 10px; color: var(--gray-500); margin-top: 2px; }
.thanvo-cta {
  display: inline-flex; align-items: center; background: var(--pink-500); color: #fff;
  font-size: 13px; font-weight: 800; padding: 11px 20px; border-radius: 999px;
  text-decoration: none; transition: .15s;
}
.thanvo-cta:hover { background: var(--pink-600); transform: translateY(-1px); }
.thanvo-compare { background: #fff; border-radius: var(--r-md); overflow: hidden; border: 1px solid var(--gray-100); }
.thanvo-compare-row {
  display: grid; grid-template-columns: 1fr 60px 80px;
  padding: 10px 14px; border-bottom: 1px solid var(--gray-100);
  font-size: 12.5px; align-items: center;
}
.thanvo-compare-row:last-child { border-bottom: none; }
.thanvo-compare-row.header { background: var(--gray-50); font-weight: 800; font-size: 11px; color: var(--gray-500); text-transform: uppercase; letter-spacing: .5px; }
.thanvo-compare-row.header span:nth-child(3) { color: var(--pink-500); }
.thanvo-compare-row .yes { color: #22863a; font-weight: 800; text-align: center; }
.thanvo-compare-row .no { color: var(--gray-300); text-align: center; }
.thanvo-compare-row .highlight { color: var(--pink-500); font-weight: 800; text-align: center; }
.thanvo-compare-row span:nth-child(2), .thanvo-compare-row span:nth-child(3) { text-align: center; }

/* \u2500\u2500 STATIONS SECTION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.station-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
.station-card {
  background: var(--white); border-radius: var(--r-lg); padding: 18px;
  box-shadow: var(--shadow-s); transition: all .18s; cursor: pointer;
  border: 1px solid transparent;
}
.station-card:hover { border-color: var(--pink-100); box-shadow: var(--shadow-m); transform: translateY(-2px); }
.st-head { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.st-logo {
  width: 36px; height: 36px; border-radius: var(--r-sm);
  display: flex; align-items: center; justify-content: center;
  font-size: 10px; font-weight: 800; color: #fff; flex-shrink: 0;
}
.st-name { font-size: 13.5px; font-weight: 800; line-height: 1.25; }
.st-dist { font-size: 11px; color: var(--gray-400); }
.st-addr { font-size: 12px; color: var(--gray-500); line-height: 1.5; margin-bottom: 10px; min-height: 36px; }
.st-tags { display: flex; gap: 5px; flex-wrap: wrap; }
.st-tag { font-size: 9.5px; font-weight: 700; padding: 2.5px 8px; border-radius: 20px; }
.tag-pink { background: var(--pink-50); color: var(--pink-500); }
.tag-blue { background: var(--blue-50); color: var(--blue-500); }
.tag-green { background: var(--green-50); color: var(--green-500); }
.o2o-note {
  margin-top: 16px; padding: 16px 20px;
  background: var(--pink-50); border: 1px dashed var(--pink-100); border-radius: var(--r-md);
  display: flex; align-items: center; gap: 14px;
  font-size: 13px; color: var(--gray-700);
}
.o2o-note strong { color: var(--pink-600); }
.o2o-qr { font-size: 26px; }

/* \u2500\u2500 CUU HO SECTION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.rescue-panel { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items: start; }
.rescue-card {
  background: var(--white); border-radius: var(--r-xl); padding: 24px;
  box-shadow: var(--shadow-s); display: flex; flex-direction: column; gap: 16px;
}
.rescue-logo { width: 56px; height: 56px; border-radius: var(--r-md); overflow: hidden; border: 1px solid var(--gray-200); }
.rescue-logo img { width: 100%; height: 100%; object-fit: contain; }
.rescue-name { font-size: 17px; font-weight: 800; margin-bottom: 4px; }
.rescue-meta { font-size: 13px; color: var(--gray-500); }
.rescue-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
.rescue-tag { font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 20px; background: var(--amber-50); color: var(--amber-500); }
.rescue-cta {
  width: 100%; padding: 13px; border: 0; border-radius: var(--r-md);
  background: var(--pink-500); color: #fff; font-size: 14px; font-weight: 800;
  font-family: inherit; cursor: pointer; transition: background .15s;
}
.rescue-cta:hover { background: var(--pink-600); }
.rescue-steps { display: flex; flex-direction: column; gap: 18px; padding: 8px 0; }
.rescue-step { display: flex; gap: 14px; align-items: flex-start; }
.rs-num {
  width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
  background: var(--pink-500); color: #fff; font-size: 13px; font-weight: 800;
  display: flex; align-items: center; justify-content: center;
}
.rescue-step strong { font-size: 14px; font-weight: 800; display: block; margin-bottom: 3px; }
.rescue-step p { margin: 0; font-size: 13px; color: var(--gray-500); line-height: 1.55; }

/* \u2500\u2500 PARKING SECTION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.parking-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.parking-card {
  background: var(--white); border-radius: var(--r-xl); padding: 24px;
  box-shadow: var(--shadow-s); display: flex; flex-direction: column; gap: 14px;
}
.parking-card-top { display: flex; gap: 14px; align-items: center; }
.parking-logo { width: 48px; height: 48px; border-radius: var(--r-md); overflow: hidden; border: 1px solid var(--gray-200); flex-shrink: 0; }
.parking-logo img { width: 100%; height: 100%; object-fit: contain; }
.parking-name { font-size: 16px; font-weight: 800; }
.parking-sub { font-size: 12px; color: var(--gray-500); margin-top: 2px; }
.parking-desc { font-size: 13px; color: var(--gray-500); line-height: 1.6; margin: 0; }
.parking-feats { display: flex; flex-wrap: wrap; gap: 8px; font-size: 12px; color: var(--gray-600); }
.parking-btn {
  width: 100%; padding: 11px; border: 1.5px solid var(--gray-200); border-radius: var(--r-md);
  background: #fff; color: var(--gray-900); font-size: 13px; font-weight: 800;
  font-family: inherit; cursor: pointer; transition: all .15s; margin-top: auto;
}
.parking-btn:hover { border-color: var(--pink-500); color: var(--pink-500); }

@media(max-width:768px) {
  .rescue-panel { grid-template-columns: 1fr; }
  .parking-grid { grid-template-columns: 1fr; }
  .ins-wrap { grid-template-columns: 1fr; }
  .ins-row { padding: 11px 14px; gap: 10px; }
  .ins-perk { display: none; }
  .ins-name { font-size: 13px; }
  .ins-price { font-size: 14px; }
  .ins-buy { padding: 6px 12px; font-size: 12px; }
  .ins-logo { width: 32px; height: 32px; font-size: 10px; }
  .ins-compare-head { flex-wrap: wrap; gap: 4px; }
  .section-eyebrow { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .section-head { flex-wrap: wrap; gap: 8px; align-items: flex-start; }
  .section { padding: 40px 0 8px; }
  .gas-row { padding: 13px 16px; }
  .gas-region-tabs { padding: 12px 16px 0; }
  .w2a-panel { grid-template-columns: 1fr; }
  .w2a-copy { padding: 28px 20px; }
  .epass-panel { grid-template-columns: 1fr; }
  .epass-copy { padding: 28px 20px 16px; }
  .epass-visual { padding: 0 20px 28px; }
}

/* \u2500\u2500 W2A SECTION (profile / MoXe) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.w2a-panel {
  background: var(--white); border-radius: var(--r-xl); box-shadow: var(--shadow-s);
  display: grid; grid-template-columns: 1fr 380px; overflow: hidden;
}
.w2a-copy { padding: 40px 44px; }
.w2a-copy h2 {
  font-family: 'MoMoTrustDisplay', 'MoMoTrustSans', sans-serif;
  font-size: 26px; font-weight: 800; line-height: 1.2; margin-bottom: 12px;
}
.w2a-copy > p { font-size: 14px; color: var(--gray-500); line-height: 1.65; margin-bottom: 22px; max-width: 460px; }
.w2a-feats { display: grid; grid-template-columns: 1fr 1fr; gap: 14px 20px; margin-bottom: 26px; }
.w2a-feat { display: flex; gap: 10px; align-items: flex-start; }
.w2a-feat-icon { font-size: 18px; line-height: 1.3; display: flex; align-items: center; justify-content: center; }
.w2a-feat-icon svg { width: 20px; height: 20px; flex-shrink: 0; }
.w2a-feat strong { display: block; font-size: 13px; font-weight: 700; }
.w2a-feat span { font-size: 12px; color: var(--gray-500); line-height: 1.45; }
.w2a-visual {
  background: linear-gradient(150deg, var(--pink-50), #F3E8FF);
  display: flex; align-items: center; justify-content: center; padding: 30px;
}
.mini-plate {
  background: #fff; border: 2.5px solid var(--gray-900); border-radius: 12px;
  padding: 16px 22px 14px 18px; box-shadow: var(--shadow-l);
  position: relative; overflow: hidden;
  transform: rotate(-2deg);
  transition: transform .25s;
}
.mini-plate:hover { transform: rotate(0deg) scale(1.03); }
.mini-plate::before {
  content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 26px;
  background: linear-gradient(180deg, #1565C0, #0D47A1);
}
.mp-body { padding-left: 24px; }
.mp-num { font-family: 'Courier New', monospace; font-size: 30px; font-weight: 700; letter-spacing: 2px; }
.mp-tier {
  display: inline-flex; align-items: center; gap: 5px;
  margin-top: 8px; font-size: 11px; font-weight: 800;
  background: var(--pink-50); color: var(--pink-600);
  padding: 4px 10px; border-radius: 20px;
}

/* \u2500\u2500 MOXE TIERS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.moxe-tier-header { margin: 32px 0 16px; }
.moxe-tier-label {
  font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
  color: var(--gray-400); margin-bottom: 6px;
}
.moxe-tier-title {
  font-family: 'MoMoTrustDisplay', 'MoMoTrustSans', sans-serif;
  font-size: 20px; font-weight: 900; color: var(--gray-900); letter-spacing: -.015em;
}
.moxe-tiers {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;
}
@media (max-width: 860px) { .moxe-tiers { grid-template-columns: 1fr 1fr; } }
@media (max-width: 480px) { .moxe-tiers { grid-template-columns: 1fr; } }
.moxe-tier-card {
  border-radius: 16px; padding: 20px;
  display: flex; flex-direction: column; gap: 14px;
  border: 1.5px solid transparent;
}
.moxe-tier-card.dong  { background: linear-gradient(135deg,#FDF6EC,#FEF3E2); border-color: #E8C97A; }
.moxe-tier-card.bac   { background: linear-gradient(135deg,#F5F5F7,#EAEAEE); border-color: #C0C0CC; }
.moxe-tier-card.vang  { background: linear-gradient(135deg,#FFFBEB,#FEF3C7); border-color: #F59E0B; }
.moxe-tier-card.bachkim { background: linear-gradient(135deg,#F0F4FF,#E8EEFF); border-color: #818CF8; }
.moxe-tier-icon {
  width: 40px; height: 40px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-size: 20px; flex-shrink: 0;
}
.dong .moxe-tier-icon   { background: rgba(180,110,30,.12); }
.bac  .moxe-tier-icon   { background: rgba(100,100,120,.1); }
.vang .moxe-tier-icon   { background: rgba(245,158,11,.12); }
.bachkim .moxe-tier-icon { background: rgba(99,102,241,.12); }
.moxe-tier-name { font-size: 15px; font-weight: 900; letter-spacing: -.01em; }
.dong .moxe-tier-name    { color: #92600A; }
.bac  .moxe-tier-name    { color: #4B5563; }
.vang .moxe-tier-name    { color: #92400E; }
.bachkim .moxe-tier-name  { color: #3730A3; }
.moxe-tier-cond {
  font-size: 11px; color: var(--gray-500); line-height: 1.5;
  padding: 8px 10px; background: rgba(255,255,255,.6);
  border-radius: 8px; font-weight: 500;
}
.moxe-tier-cond strong { color: var(--gray-700); font-weight: 700; display: block; margin-bottom: 2px; font-size: 10px; text-transform: uppercase; letter-spacing: .06em; }
.moxe-tier-benefits { display: flex; flex-direction: column; gap: 6px; }
.moxe-tier-benefit {
  display: flex; align-items: flex-start; gap: 7px;
  font-size: 12px; color: var(--gray-700); line-height: 1.45; font-weight: 500;
}
.moxe-tier-benefit::before { content: '\u2713'; font-weight: 800; flex-shrink: 0; margin-top: 1px; font-size: 11px; }
.dong .moxe-tier-benefit::before    { color: #B45309; }
.bac  .moxe-tier-benefit::before    { color: #6B7280; }
.vang .moxe-tier-benefit::before    { color: #D97706; }
.bachkim .moxe-tier-benefit::before  { color: #4F46E5; }

/* \u2500\u2500 FAQ \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.faq-list { max-width: 760px; }
.faq-item { background: var(--white); border-radius: var(--r-md); box-shadow: var(--shadow-s); margin-bottom: 10px; overflow: hidden; }
.faq-q {
  width: 100%; text-align: left; padding: 16px 20px;
  font-size: 14px; font-weight: 700; color: var(--gray-900);
  background: none; border: none; cursor: pointer; font-family: inherit;
  display: flex; justify-content: space-between; align-items: center; gap: 14px;
}
.faq-q::after { content: '+'; font-size: 18px; color: var(--gray-400); font-weight: 400; flex-shrink: 0; }
.faq-item.open .faq-q::after { content: '\u2212'; }
.faq-a { display: none; padding: 0 20px 16px; font-size: 13.5px; color: var(--gray-600); line-height: 1.7; }
.faq-item.open .faq-a { display: block; }

/* \u2500\u2500 VEHICLE COST CALCULATOR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.vc-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: start; }
.vc-form { background: var(--white); border-radius: var(--r-xl); border: 1px solid var(--gray-200); padding: 24px; }
.vc-result { background: var(--white); border-radius: var(--r-xl); border: 1px solid var(--gray-200); padding: 24px; position: sticky; top: 72px; }
.vc-field { margin-bottom: 18px; }
.vc-label { font-size: 12px; font-weight: 700; color: var(--gray-600); letter-spacing: .3px; display: flex; align-items: center; gap: 5px; margin-bottom: 7px; }
.vc-pills { display: flex; gap: 6px; flex-wrap: wrap; }
.vc-pill { padding: 6px 13px; border-radius: 20px; border: 1.5px solid var(--gray-200); font-size: 12.5px; font-weight: 600; color: var(--gray-600); background: var(--white); cursor: pointer; transition: all .15s; }
.vc-pill.on { border-color: var(--pink-500); background: var(--pink-50); color: var(--pink-500); }
.vc-slider-row { display: flex; align-items: center; gap: 10px; }
.vc-slider { flex: 1; -webkit-appearance: none; height: 4px; border-radius: 4px; background: var(--gray-200); outline: none; }
.vc-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 18px; height: 18px; border-radius: 50%; background: var(--pink-500); cursor: pointer; border: 2px solid var(--white); box-shadow: 0 0 0 2px var(--pink-100); }
.vc-slider-val { min-width: 72px; text-align: right; font-size: 13px; font-weight: 700; color: var(--gray-900); }
.vc-toggle-row { display: flex; align-items: center; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid var(--gray-100); }
.vc-toggle-row:last-child { border-bottom: none; }
.vc-toggle-label { font-size: 13px; color: var(--gray-700); }
.vc-toggle { position: relative; width: 36px; height: 20px; }
.vc-toggle input { opacity: 0; width: 0; height: 0; }
.vc-toggle-track { position: absolute; inset: 0; border-radius: 20px; background: var(--gray-200); cursor: pointer; transition: background .2s; }
.vc-toggle input:checked + .vc-toggle-track { background: var(--pink-500); }
.vc-toggle-track::after { content: ''; position: absolute; left: 2px; top: 2px; width: 16px; height: 16px; border-radius: 50%; background: #fff; transition: transform .2s; }
.vc-toggle input:checked + .vc-toggle-track::after { transform: translateX(16px); }
/* result panel */
.vc-total { text-align: center; padding: 18px 0 20px; border-bottom: 1px solid var(--gray-100); margin-bottom: 18px; }
.vc-total-label { font-size: 11.5px; font-weight: 700; color: var(--gray-500); letter-spacing: .5px; text-transform: uppercase; margin-bottom: 4px; }
.vc-total-num { font-size: 32px; font-weight: 800; color: var(--gray-900); letter-spacing: -1px; }
.vc-total-unit { font-size: 13px; color: var(--gray-500); margin-top: 2px; }
.vc-chart-wrap { position: relative; width: 140px; height: 140px; margin: 0 auto 20px; }
.vc-chart-wrap svg { width: 100%; height: 100%; }
.vc-chart-center { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; pointer-events: none; }
.vc-chart-center-num { font-size: 18px; font-weight: 800; color: var(--gray-900); }
.vc-chart-center-sub { font-size: 10px; color: var(--gray-500); margin-top: 1px; }
.vc-breakdown { display: flex; flex-direction: column; gap: 0; }
.vc-row { display: flex; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px solid var(--gray-50); }
.vc-row:last-child { border-bottom: none; }
.vc-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.vc-row-name { flex: 1; font-size: 12.5px; color: var(--gray-600); }
.vc-row-pct { font-size: 11px; color: var(--gray-400); width: 32px; text-align: right; }
.vc-row-val { font-size: 13px; font-weight: 700; color: var(--gray-900); text-align: right; min-width: 80px; }
.vc-insight { margin-top: 16px; background: var(--pink-50); border-radius: var(--r-md); padding: 12px 14px; font-size: 12.5px; color: var(--gray-700); line-height: 1.55; border: 1px solid var(--pink-100); }
.vc-insight strong { color: var(--pink-500); }
.vc-cta { display: block; width: 100%; margin-top: 16px; padding: 13px; background: var(--pink-500); color: #fff; font-size: 14px; font-weight: 700; border-radius: var(--r-lg); border: none; cursor: pointer; text-align: center; }
.vc-cta:hover { background: var(--pink-600); }
@media(max-width:768px){
  .vc-wrap { grid-template-columns: 1fr; }
  .vc-result { position: static; }
}
/* \u2500\u2500 DANG KIEM SECTION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.dk-wrap { display: grid; grid-template-columns: 1fr 360px; gap: 24px; align-items: start; }
.dk-search-panel { display: flex; flex-direction: column; gap: 0; }
.dk-input-row { display: flex; gap: 8px; margin-bottom: 14px; }
.dk-plate-input { flex: 1; height: 48px; border: 1.5px solid var(--gray-200); border-radius: 10px; padding: 0 14px; font-size: 15px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; color: var(--gray-900); background: var(--white); transition: border-color .15s; }
.dk-plate-input::placeholder { font-weight: 400; letter-spacing: 0; text-transform: none; color: var(--gray-400); }
.dk-plate-input:focus { outline: none; border-color: var(--pink-500); }
.dk-search-btn { height: 48px; padding: 0 22px; background: var(--pink-500); color: #fff; border: none; border-radius: 10px; font-size: 14px; font-weight: 700; cursor: pointer; white-space: nowrap; transition: background .15s; }
.dk-search-btn:hover { background: var(--pink-600); }
.dk-result { background: var(--gray-50); border: 1.5px solid var(--gray-100); border-radius: 14px; padding: 20px 22px; }
.dk-result-plate { font-size: 22px; font-weight: 900; letter-spacing: .07em; color: var(--gray-900); margin-bottom: 12px; font-variant-numeric: tabular-nums; }
.dk-result-status { display: inline-flex; align-items: center; gap: 6px; padding: 5px 12px; border-radius: 20px; font-size: 13px; font-weight: 700; margin-bottom: 14px; }
.dk-result-status.ok { background: #dcfce7; color: #166534; }
.dk-result-status.warning { background: #fef9c3; color: #854d0e; }
.dk-result-status.expired { background: #fee2e2; color: #991b1b; }
.dk-result-details { font-size: 13.5px; color: var(--gray-600); line-height: 1.9; margin-bottom: 16px; }
.dk-result-details strong { color: var(--gray-800); }
.dk-result-actions { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
.dk-remind-btn { display: inline-flex; align-items: center; gap: 6px; height: 36px; padding: 0 16px; border-radius: 20px; border: 1.5px solid var(--pink-500); color: var(--pink-500); background: transparent; font-size: 13px; font-weight: 700; cursor: pointer; transition: background .15s; }
.dk-remind-btn:hover { background: rgba(235,47,150,.06); }
.dk-detail-link { font-size: 13px; font-weight: 600; color: var(--gray-400); text-decoration: none; padding: 0 6px; }
.dk-detail-link:hover { color: var(--pink-500); }
.dk-info-panel { background: var(--white); border: 1.5px solid var(--gray-100); border-radius: 14px; padding: 22px 24px; }
.dk-info-title { font-size: 11px; font-weight: 700; color: var(--gray-400); text-transform: uppercase; letter-spacing: .06em; margin-bottom: 14px; }
.dk-schedule-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid var(--gray-100); font-size: 13.5px; }
.dk-schedule-row:last-of-type { border-bottom: none; margin-bottom: 10px; }
.dk-schedule-label { color: var(--gray-600); }
.dk-schedule-val { font-weight: 700; color: var(--gray-900); }
.dk-law-note { font-size: 11.5px; color: var(--gray-400); line-height: 1.5; margin-bottom: 16px; }
.dk-empty { display: flex; align-items: center; gap: 10px; padding: 18px; background: var(--gray-50); border: 1.5px dashed var(--gray-200); border-radius: 12px; font-size: 13.5px; color: var(--gray-400); }
@media(max-width:768px){ .dk-wrap { grid-template-columns: 1fr; } }
/* \u2500\u2500 KNOWLEDGE HUB \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.section-inner { max-width: var(--content); margin: 0 auto; padding: 0 20px; }
.kh-see-all { display: flex; align-items: center; gap: 4px; font-size: 13.5px; font-weight: 600; color: var(--pink-500); text-decoration: none; white-space: nowrap; }
.kh-see-all svg { width: 15px; height: 15px; }
.kh-see-all:hover { color: var(--pink-600); }
.kh-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
.kh-side-stack { display: flex; flex-direction: column; gap: 12px; }
.kh-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.kh-card { display: flex; flex-direction: column; background: var(--gray-50); border: 1px solid var(--gray-100); border-radius: 14px; overflow: hidden; text-decoration: none; color: inherit; transition: box-shadow .18s, transform .18s; }
.kh-card:hover { box-shadow: 0 6px 24px rgba(0,0,0,.09); transform: translateY(-2px); }
.kh-card--compact { flex-direction: row; border-radius: 12px; }
.kh-card--compact .kh-card-body { padding: 14px 16px; }
.kh-card--row .kh-card-body { padding: 16px 18px; }
.kh-card-img { height: 160px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.kh-card-img-icon svg { width: 56px; height: 56px; stroke: rgba(255,255,255,.35); }
.kh-card-body { padding: 18px 20px 16px; display: flex; flex-direction: column; gap: 8px; flex: 1; }
.kh-tag { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; padding: 3px 8px; border-radius: 20px; background: var(--pink-50); color: var(--pink-500); width: fit-content; }
.kh-tag--insurance { background: #eff6ff; color: #2563eb; }
.kh-tag--fuel { background: #fffbeb; color: #d97706; }
.kh-tag--epass { background: #f0fdf4; color: #16a34a; }
.kh-tag--cost { background: #faf5ff; color: #7c3aed; }
.kh-card-title { font-size: 14.5px; font-weight: 700; line-height: 1.45; color: var(--gray-900); margin: 0; }
.kh-card--featured .kh-card-title { font-size: 16px; }
.kh-card-desc { font-size: 13px; color: var(--gray-500); line-height: 1.6; margin: 0; }
.kh-card-meta { display: flex; align-items: center; gap: 5px; font-size: 12px; color: var(--gray-400); margin-top: auto; padding-top: 4px; }
.kh-card-meta svg { width: 13px; height: 13px; }
@media(max-width:900px){ .kh-grid { grid-template-columns: 1fr; } .kh-side-stack { flex-direction: row; flex-wrap: wrap; } .kh-side-stack .kh-card { flex: 1; min-width: 280px; } }
@media(max-width:768px){ .kh-row { grid-template-columns: 1fr; } .section-head { flex-direction: row; align-items: center; } }
/* \u2500\u2500 FOOTER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.site-footer { background: var(--gray-900); margin-top: 64px; }
.footer-inner { max-width: var(--content); margin: 0 auto; padding: 44px 20px 30px; }
.footer-cols { display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 32px; margin-bottom: 32px; }
.footer-brand { font-size: 15px; font-weight: 800; color: #fff; margin-bottom: 10px; }
.footer-brand em { color: var(--pink-400); font-style: normal; }
.footer-about { font-size: 12.5px; color: rgba(255,255,255,.45); line-height: 1.65; max-width: 280px; }
.footer-col h4 { font-size: 11.5px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: rgba(255,255,255,.4); margin-bottom: 14px; }
.footer-col a { display: block; font-size: 13px; color: rgba(255,255,255,.65); text-decoration: none; margin-bottom: 9px; }
.footer-col a:hover { color: var(--pink-400); }
.footer-legal {
  border-top: 1px solid rgba(255,255,255,.08); padding-top: 20px;
  font-size: 11.5px; color: rgba(255,255,255,.3);
  display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap;
}

/* toast */
#toast {
  position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%) translateY(80px);
  background: var(--gray-900); color: #fff; font-size: 13px; font-weight: 600;
  padding: 11px 22px; border-radius: 24px; box-shadow: var(--shadow-l);
  transition: transform .25s; z-index: 500; pointer-events: none;
}
#toast.show { transform: translateX(-50%) translateY(0); }

/* \u2500\u2500 RESPONSIVE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@media(max-width: 980px) {
  .hero-inner { grid-template-columns: minmax(0, 1fr); padding: 44px 20px 60px; gap: 32px; }
  .hero-content { min-width: 0; overflow: hidden; }
  .hero-title { font-size: 34px; overflow-wrap: break-word; word-break: break-word; }
  .util-grid { grid-template-columns: 1fr 1fr; }
  .gas-panel { grid-template-columns: 1fr; }
  .gas-side { border-left: none; border-top: 1px solid var(--gray-100); }
  .epass-panel { grid-template-columns: 1fr; }
  .epass-visual { padding: 0 32px 36px; }
  .epass-copy { padding: 36px 32px 24px; }
  .ins-wrap { grid-template-columns: 1fr; }
  .thanvo-card { grid-template-columns: 1fr; }
  .station-grid { grid-template-columns: 1fr 1fr; }
  .w2a-panel { grid-template-columns: 1fr; }
  .w2a-visual { padding: 34px; }
  .footer-cols { grid-template-columns: 1fr 1fr; }
}
@media(max-width: 560px) {
  .hero-title { font-size: 26px; overflow-wrap: break-word; word-break: break-word; }
  .hero-content { max-width: 100%; min-width: 0; overflow: hidden; }
  .hero-desc { font-size: 14px; }
  .plate-panel { padding: 20px 16px 18px; }
  .plate-input { font-size: 26px; }
  .hub-dash { grid-template-columns: 1fr 1fr; }
  .util-grid { grid-template-columns: 1fr; }
  .station-grid { grid-template-columns: 1fr; }
  .rescue-panel { grid-template-columns: 1fr; }
  .parking-grid { grid-template-columns: 1fr; }
  .section-title { font-size: 23px; }
  .w2a-feats { grid-template-columns: 1fr; }
  .w2a-copy { padding: 28px 22px; }
  .epass-copy { padding: 28px 20px; }
  .plate-input { font-size: 21px; letter-spacing: 2px; }
  .footer-cols { grid-template-columns: 1fr; }
  /* ins-compare table: tighter columns */
  .ins-row { padding: 10px 12px; gap: 8px; }
  .ins-perk { display: none; }
  .ins-name { font-size: 12px; }
  .ins-price { font-size: 13px; }
  .ins-buy { padding: 5px 10px; font-size: 11.5px; }
  .ins-logo { width: 30px; height: 30px; font-size: 9px; }
  /* thanvo compare: fix column widths for small screens */
  .thanvo-compare-row { grid-template-columns: 1fr 52px 68px; font-size: 11.5px; padding: 9px 10px; }
  .thanvo-stats { gap: 14px; }
  .thanvo-num { font-size: 18px; }
}

/* \u2500\u2500 TRIP PLANNER ROUTE GRID \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tp-route-grid {
  display: grid; grid-template-columns: repeat(3,1fr); gap: 12px;
}
.tp-route-card {
  display: flex; flex-direction: column; gap: 12px;
  padding: 18px; border: 1px solid var(--gray-100); border-radius: 16px;
  background: #fff; text-decoration: none; color: inherit;
  transition: border-color .18s, box-shadow .18s;
}
.tp-route-card:hover { border-color: var(--pink-300); box-shadow: 0 2px 14px rgba(0,0,0,.07); }
.tp-rc-route { display: flex; align-items: center; gap: 8px; }
.tp-rc-from { font-size: 14px; font-weight: 800; color: var(--gray-900); }
.tp-rc-to { font-size: 14px; font-weight: 800; color: var(--pink-500); }
.tp-rc-arrow { flex: none; color: var(--gray-300); }
.tp-rc-meta { display: flex; flex-direction: column; gap: 3px; }
.tp-rc-km { font-size: 12px; font-weight: 700; color: var(--gray-700); }
.tp-rc-road { font-size: 10.5px; color: var(--gray-400); line-height: 1.4; }
.tp-rc-footer {
  display: flex; align-items: center; justify-content: space-between;
  padding-top: 10px; border-top: 1px solid var(--gray-100); margin-top: auto;
}
.tp-rc-est { font-size: 11px; color: var(--gray-400); }
.tp-rc-est strong { color: var(--gray-700); font-weight: 800; }
.tp-rc-cta { font-size: 12px; font-weight: 800; color: var(--pink-500); }
@media (max-width: 860px) { .tp-route-grid { grid-template-columns: repeat(2,1fr); } }
@media (max-width: 540px) { .tp-route-grid { grid-template-columns: 1fr; } }

/* \u2500\u2500 ANIMATION KEYFRAMES \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes hero-fade-up {
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes hero-fade-right {
  from { opacity: 0; transform: translateX(-16px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes plate-pulse {
  0%,100% { box-shadow: 0 0 0 0 rgba(235,47,150,.0); }
  50%      { box-shadow: 0 0 0 6px rgba(235,47,150,.18); }
}
@keyframes count-pop {
  0%   { transform: scale(1); }
  40%  { transform: scale(1.12); }
  100% { transform: scale(1); }
}
@keyframes wave-draw {
  from { stroke-dashoffset: 1600; opacity: 0; }
  to   { stroke-dashoffset: 0;    opacity: 1; }
}
@keyframes pin-bob {
  0%,100% { transform: translateY(0) scale(1); }
  35%     { transform: translateY(-6px) scale(1.08); }
  65%     { transform: translateY(-2px) scale(1.03); }
}
@keyframes beam-in {
  from { opacity: 0; transform: scale(.88); filter: blur(6px); }
  to   { opacity: 1; transform: scale(1);   filter: blur(0); }
}
@keyframes slide-up-fade {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes spring-pop {
  0%   { opacity: 0; transform: scale(.7) translateY(14px); }
  60%  { transform: scale(1.06) translateY(-3px); }
  80%  { transform: scale(.97) translateY(1px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}
@keyframes shimmer-once {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes road-car {
  from { left: -32px; }
  to   { left: calc(100% + 32px); }
}

/* Hero staggered entry */
.hero-eyebrow { animation: hero-fade-right .5s ease both .1s; }
.hero-title    { animation: hero-fade-up .6s cubic-bezier(.22,1,.36,1) both .2s; }
.hero-usp li:nth-child(1) { animation: hero-fade-right .45s ease both .35s; }
.hero-usp li:nth-child(2) { animation: hero-fade-right .45s ease both .45s; }
.hero-usp li:nth-child(3) { animation: hero-fade-right .45s ease both .55s; }
.hero-usp li:nth-child(4) { animation: hero-fade-right .45s ease both .65s; }
.plate-panel               { animation: beam-in .6s cubic-bezier(.22,1,.36,1) both .3s; }

/* Hero pill hover */
.hero-service-pill { transition: transform .18s cubic-bezier(.22,1,.36,1), border-color .15s, background .15s, color .15s; }
.hero-service-pill:hover { transform: translateY(-2px) scale(1.03); }

/* Section eyebrow reveal */
.section-eyebrow { opacity: 0; animation: none; }
.section-eyebrow.is-visible { animation: hero-fade-right .45s ease both; }

/* Section title reveal */
.section-title { opacity: 0; animation: none; }
.section-title.is-visible { animation: slide-up-fade .55s cubic-bezier(.22,1,.36,1) both; }

/* Feature cards spring pop */
.fc-card { opacity: 0; }
.fc-card.is-visible { animation: spring-pop .5s cubic-bezier(.22,1,.36,1) both; }

/* Section cards generic */
[data-anim="slide-up"] { opacity: 0; transform: translateY(20px); transition: opacity .5s ease, transform .5s cubic-bezier(.22,1,.36,1); }
[data-anim="slide-up"].is-visible { opacity: 1; transform: translateY(0); }

/* Stat cell count-pop */
.stat-cell.did-count .stat-num { animation: count-pop .4s cubic-bezier(.22,1,.36,1); }

/* Road car easter egg */
.road-car-wrap {
  position: relative; height: 0; overflow: visible; pointer-events: none;
}
.road-car {
  position: absolute; top: -18px;
  font-size: 20px; line-height: 1;
  animation: road-car 4s linear infinite;
  will-change: left;
}

/* Plate pulse on result */
.plate-box.has-result { animation: plate-pulse 1.5s ease-in-out 2; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition-duration: .01ms !important; }
}

/* \u2500\u2500 TRIP SEARCH WIDGET \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* \u2500\u2500 TRIP PLANNER WIDGET (1-row search bar) \u2500\u2500 */
.tp-widget {
  background: #fff; border: 1px solid var(--gray-100); border-radius: 16px;
  display: flex; align-items: stretch;
  box-shadow: 0 4px 24px rgba(0,0,0,.08);
  overflow: visible; position: relative;
}
.tp-cell {
  flex: 1; display: flex; flex-direction: column; justify-content: center;
  padding: 14px 18px; position: relative; min-width: 0;
}
.tp-cell + .tp-cell { border-left: 1px solid var(--gray-100); }
.tp-cell-vehicle { flex: 0 0 auto; }
.tp-city-label {
  font-size: 10px; font-weight: 800; color: var(--gray-400); text-transform: uppercase;
  letter-spacing: .06em; margin-bottom: 4px; display: block;
}
.tp-city-row { display: flex; align-items: center; gap: 6px; }
.tp-city-icon { color: var(--gray-400); flex-shrink: 0; display: flex; align-items: center; }
.tp-city-input {
  flex: 1; min-width: 0; border: none; outline: none; background: transparent;
  font-size: 14px; font-weight: 600; color: var(--gray-900); font-family: inherit;
  padding: 0;
}
.tp-city-input::placeholder { color: var(--gray-400); font-weight: 500; }
.tp-swap-btn {
  position: absolute; right: -16px; top: 50%; transform: translateY(-50%);
  width: 30px; height: 30px; border-radius: 50%;
  border: 1.5px solid var(--gray-200); background: #fff;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; color: var(--gray-500); transition: all .15s; z-index: 10;
  flex-shrink: 0;
}
.tp-swap-btn:hover { border-color: var(--pink-400); color: var(--pink-500); }
.tp-autocomplete {
  position: absolute; top: calc(100% + 6px); left: 0; right: 0;
  background: #fff; border: 1.5px solid var(--gray-200); border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,.1); z-index: 200; overflow: hidden;
  display: none;
}
.tp-autocomplete.open { display: block; }
.tp-ac-item {
  padding: 10px 14px; font-size: 13px; font-weight: 600; color: var(--gray-800);
  cursor: pointer; display: flex; align-items: center; gap: 8px; transition: background .1s;
}
.tp-ac-item:hover, .tp-ac-item.focused { background: var(--pink-50); color: var(--pink-600); }
.tp-ac-region { font-size: 10px; font-weight: 600; color: var(--gray-400); margin-left: auto; }
/* vehicle select cell */
.tp-vpills-row { display: flex; gap: 4px; align-items: center; }
.tp-vpill2 {
  display: flex; align-items: center; gap: 5px;
  height: 34px; padding: 0 11px; border-radius: 8px;
  border: none; background: var(--gray-100);
  cursor: pointer; font-size: 12px; font-weight: 700;
  color: var(--gray-500); transition: all .15s; white-space: nowrap; font-family: inherit;
}
.tp-vpill2:hover { background: var(--gray-200); color: var(--gray-700); }
.tp-vpill2.on { background: var(--gray-900); color: #fff; }
.tp-vpill2 .vp-icon { font-size: 14px; line-height: 1; }
/* go button */
.tp-go-btn {
  flex-shrink: 0; margin: 8px; padding: 0 24px;
  background: var(--pink-500); color: #fff;
  font-size: 14px; font-weight: 800; border: none; border-radius: 10px;
  cursor: pointer; transition: background .15s; font-family: inherit; white-space: nowrap;
}
.tp-go-btn:hover { background: var(--pink-600); }
.tp-go-btn:disabled { background: var(--gray-300); cursor: not-allowed; }

/* DEAD CODE BELOW \u2014 kept for reference */
.tp-route-pill-UNUSED {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 7px 14px; border-radius: 999px;
  border: 1.5px solid var(--gray-200); background: var(--white);
  font-size: 12px; font-weight: 700; color: var(--gray-600);
  cursor: pointer; transition: all .15s; white-space: nowrap;
}
.tp-route-pill span { font-weight: 500; color: var(--gray-400); font-size: 11px; }
.tp-route-pill:hover { border-color: var(--pink-400); color: var(--gray-900); }
.tp-route-pill.on { background: var(--gray-900); border-color: var(--gray-900); color: #fff; }
.tp-route-pill.on span { color: rgba(255,255,255,.6); }

.tp-layout {
  display: grid; grid-template-columns: 340px 1fr; gap: 20px; align-items: start;
}
.tp-input-panel {
  background: var(--white); border-radius: var(--r-lg); border: 1.5px solid var(--gray-200);
  padding: 20px; display: flex; flex-direction: column; gap: 16px;
  box-shadow: var(--shadow-s);
}
.tp-input-group { display: flex; flex-direction: column; gap: 10px; position: relative; }
.tp-field { display: flex; flex-direction: column; gap: 5px; }
.tp-label { font-size: 10.5px; font-weight: 700; color: var(--gray-500); text-transform: uppercase; letter-spacing: .04em; }
.tp-city-select {
  display: flex; align-items: center; gap: 8px; padding: 10px 12px;
  border: 1.5px solid var(--gray-200); border-radius: var(--r-sm);
  background: var(--gray-50); font-size: 13px; font-weight: 700; color: var(--gray-900);
  cursor: pointer; transition: border-color .15s;
}
.tp-city-select:hover { border-color: var(--gray-300); }
.tp-city-select svg { flex: none; color: var(--gray-400); }
.tp-swap {
  position: absolute; right: -14px; top: 50%; transform: translateY(-50%);
  width: 28px; height: 28px; border-radius: 50%; background: var(--white);
  border: 1.5px solid var(--gray-200); display: grid; place-items: center;
  cursor: pointer; color: var(--gray-500); transition: all .15s; z-index: 2;
  box-shadow: var(--shadow-s);
}
.tp-swap:hover { border-color: var(--pink-400); color: var(--pink-500); transform: translateY(-50%) rotate(180deg); }

.tp-vehicle-section { display: flex; flex-direction: column; gap: 8px; }
.tp-vehicle-pills { display: flex; gap: 8px; }
.tp-vpill {
  flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px;
  padding: 10px 8px; border-radius: var(--r-md); border: 1.5px solid var(--gray-200);
  background: var(--white); cursor: pointer; transition: all .15s;
}
.tp-vpill:hover { border-color: var(--gray-300); }
.tp-vpill.on { border-color: var(--pink-500); background: var(--pink-50); }
.tp-vpill-icon { font-size: 22px; line-height: 1; }
.tp-vpill-name { font-size: 11px; font-weight: 700; color: var(--gray-600); white-space: nowrap; }
.tp-vpill.on .tp-vpill-name { color: var(--pink-500); }

.tp-select {
  width: 100%; padding: 9px 12px; border-radius: var(--r-sm);
  border: 1.5px solid var(--gray-200); background: var(--white);
  font-size: 12.5px; font-weight: 600; color: var(--gray-900);
  font-family: inherit; cursor: pointer; outline: none;
}
.tp-select:focus { border-color: var(--pink-400); }
.tp-distance-row { padding-top: 4px; }
.tp-distance-badge {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 11px; font-weight: 600; color: var(--gray-500);
  background: var(--gray-50); border: 1px solid var(--gray-200);
  padding: 5px 10px; border-radius: 6px;
}
.tp-distance-badge svg { flex: none; color: var(--gray-400); }

/* Result panel */
.tp-result-panel { display: flex; flex-direction: column; gap: 12px; }
.tp-card {
  background: var(--white); border-radius: var(--r-lg); border: 1.5px solid var(--gray-200);
  overflow: hidden; box-shadow: var(--shadow-s);
}
.tp-card-head {
  display: flex; align-items: center; gap: 12px; padding: 14px 16px;
  border-bottom: 1px solid var(--gray-100);
}
.tp-card-icon {
  width: 36px; height: 36px; border-radius: 10px; flex: none;
  display: grid; place-items: center;
}
.tp-card-title { font-size: 13px; font-weight: 800; color: var(--gray-900); }
.tp-card-sub { font-size: 11px; color: var(--gray-400); font-weight: 600; margin-top: 1px; }
.tp-card-total { margin-left: auto; font-size: 20px; font-weight: 900; color: var(--green-500); }

/* Cost rows */
.tp-cost-rows { padding: 12px 16px; display: flex; flex-direction: column; gap: 8px; }
.tp-cost-row { display: flex; align-items: center; justify-content: space-between; }
.tp-cost-label { font-size: 12px; color: var(--gray-600); font-weight: 600; display: flex; align-items: center; gap: 6px; }
.tp-cost-label svg { flex: none; }
.tp-cost-val { font-size: 12px; font-weight: 800; color: var(--gray-900); }
.tp-cost-sep { height: 1px; background: var(--gray-100); margin: 4px 0; }
.tp-cost-total-row { display: flex; align-items: center; justify-content: space-between; padding-top: 4px; }
.tp-cost-total-label { font-size: 12px; font-weight: 700; color: var(--gray-700); }
.tp-cost-total-val { font-size: 15px; font-weight: 900; color: var(--green-500); }
.tp-roundtrip-note { font-size: 10.5px; color: var(--gray-400); margin-top: 6px; }

/* Checklist */
.tp-checklist { padding: 12px 16px; display: flex; flex-direction: column; gap: 8px; }
.tp-check-item {
  display: flex; align-items: center; gap: 10px; padding: 8px 10px;
  border-radius: 8px; border: 1px solid transparent; cursor: pointer; transition: background .15s;
}
.tp-check-item:hover { background: var(--gray-50); }
.tp-check-item.done { background: #F0FDF4; border-color: #bbf7d0; }
.tp-check-box {
  width: 18px; height: 18px; border-radius: 50%; border: 2px solid var(--gray-300);
  display: grid; place-items: center; flex: none; transition: all .2s; cursor: pointer;
}
.tp-check-item.done .tp-check-box { background: var(--green-500); border-color: var(--green-500); }
.tp-check-info { flex: 1; min-width: 0; }
.tp-check-name { font-size: 12px; font-weight: 700; color: var(--gray-900); }
.tp-check-item.done .tp-check-name { color: var(--gray-500); text-decoration: line-through; }
.tp-check-hint { font-size: 10.5px; color: var(--gray-400); margin-top: 1px; }
.tp-check-cta {
  font-size: 11px; font-weight: 700; color: var(--pink-500); white-space: nowrap;
  text-decoration: none; flex: none; background: var(--pink-50);
  padding: 3px 8px; border-radius: 6px; transition: background .15s;
}
.tp-check-cta:hover { background: var(--pink-100); }

/* Stops */
.tp-stops-list { padding: 12px 16px; display: flex; flex-direction: column; gap: 8px; }
.tp-stop-item { display: flex; align-items: flex-start; gap: 10px; }
.tp-stop-km {
  font-size: 10px; font-weight: 800; color: var(--gray-400); white-space: nowrap;
  background: var(--gray-50); border: 1px solid var(--gray-200);
  padding: 3px 7px; border-radius: 5px; flex: none; margin-top: 2px;
}
.tp-stop-info { flex: 1; }
.tp-stop-name { font-size: 12px; font-weight: 700; color: var(--gray-900); }
.tp-stop-type { font-size: 10.5px; color: var(--gray-500); margin-top: 1px; }
.tp-stop-link { font-size: 11px; font-weight: 700; color: var(--pink-500); text-decoration: none; }
.tp-stop-link:hover { text-decoration: underline; }

@media(max-width:900px){
  .tp-layout { grid-template-columns: 1fr; }
  .tp-quick-routes { gap: 6px; }
}
@media(max-width:768px){
  .tp-widget { flex-direction: column; border-radius: 14px; }
  .tp-cell + .tp-cell { border-left: none; border-top: 1px solid var(--gray-100); }
  .tp-cell-vehicle { flex: 0 0 auto; }
  .tp-swap-btn { display: none; }
  .tp-go-btn { margin: 8px; border-radius: 10px; padding: 14px; font-size: 15px; }
  .tp-vpills-row { flex-wrap: wrap; gap: 6px; }
}
@media(max-width:480px){
  .tp-vehicle-pills { gap: 6px; }
  .tp-vpill { padding: 8px 4px; }
  .tp-vpill-icon { font-size: 18px; }
  .tp-swap { display: none; }
}
`;
  return renderTemplate`${renderComponent($$result, "VehicleHub", $$VehicleHub, { "title": "Ti\u1EC7n \xCDch Giao Th\xF4ng - MoMo", "description": "Tra ph\u1EA1t ngu\u1ED9i, gi\xE1 x\u0103ng, ePass, b\u1EA3o hi\u1EC3m xe, \u0111\u0103ng ki\u1EC3m v\xE0 nhi\u1EC1u d\u1ECBch v\u1EE5 giao th\xF4ng kh\xE1c tr\xEAn MoMo.", "theme": "momo", "navProps": {
    backLabel: "Lab Astro",
    backHref: "/lab.html"
  } }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", `<div class="nav-search" id="navSearch"> <div class="nav-search-box"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg> <input id="navSearchInp" class="nav-search-inp" type="text" placeholder="T\xECm xe c\u1EE7a b\u1EA1n..." autocomplete="off" spellcheck="false"> <kbd class="nav-search-kbd">/</kbd> </div> <div class="nav-search-drop" id="navSearchDrop"></div> </div>  <button class="nav-search-icon-btn" onclick="toggleMobileSearch()" aria-label="T\xECm xe"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg> </button>  <button class="nav-menu-btn" onclick="openNavSidebar()" aria-label="Menu"> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="7" x2="21" y2="7"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="17" x2="21" y2="17"></line></svg> </button>  <div class="nav-search-overlay" id="mobileSearchOverlay"> <div class="nav-search-box"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg> <input id="mobileSearchInp" class="nav-search-inp" type="text" placeholder="T\xECm xe c\u1EE7a b\u1EA1n..." autocomplete="off" spellcheck="false"> <button onclick="closeMobileSearch()" style="background:none;border:none;cursor:pointer;color:var(--gray-400);padding:0;display:flex;align-items:center;"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> </button> </div> <div class="nav-search-drop" id="mobileSearchDrop"></div> </div>  <div class="nav-sidebar-overlay" id="navSidebarOverlay" onclick="closeNavSidebar()"></div>  <div class="cs-overlay" id="consentSheet" onclick="e => { if(e.target===this) closeConsentSheet(); }"> <div class="cs-sheet" id="csSheetInner"> <div class="cs-drag"></div> <!-- Default view --> <div id="csDefault"> <div class="cs-head"> <div class="cs-plate-row"> <div class="cs-plate-icon" id="csPlateIcon"></div> <div> <div class="cs-plate-num" id="csPlateNum"></div> <div class="cs-plate-type" id="csPlateType"></div> </div> </div> <div class="cs-title">L\u01B0u xe v\xE0o h\u1ED3 s\u01A1 c\u1EE7a b\u1EA1n?</div> <div class="cs-sub">MoMo s\u1EBD d\xF9ng th\xF4ng tin n\xE0y \u0111\u1EC3 h\u1ED7 tr\u1EE3 b\u1EA1n t\u1ED1t h\u01A1n:</div> </div> <div class="cs-perms"> <div class="cs-perm-row"> <div class="cs-perm-icon amber"><svg viewBox="0 0 24 24"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></div> <div class="cs-perm-text"><strong>C\u1EA3nh b\xE1o ph\u1EA1t ngu\u1ED9i</strong><span>Th\xF4ng b\xE1o ngay khi bi\u1EC3n s\u1ED1 ph\xE1t sinh vi ph\u1EA1m m\u1EDBi \u2014 kh\xF4ng c\u1EA7n tra th\u1EE7 c\xF4ng</span></div> </div> <div class="cs-perm-row"> <div class="cs-perm-icon blue"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div> <div class="cs-perm-text"><strong>Nh\u1EAFc l\u1ECBch \u0111\u0103ng ki\u1EC3m</strong><span>B\xE1o tr\u01B0\u1EDBc 30 ng\xE0y tr\u01B0\u1EDBc khi h\u1EBFt h\u1EA1n, tr\xE1nh ph\u1EA1t 800K\u20134 tri\u1EC7u</span></div> </div> <div class="cs-perm-row"> <div class="cs-perm-icon pink"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div> <div class="cs-perm-text"><strong>Nh\u1EAFc gia h\u1EA1n b\u1EA3o hi\u1EC3m</strong><span>Th\xF4ng b\xE1o tr\u01B0\u1EDBc khi TNDS h\u1EBFt h\u1EA1n \u0111\u1EC3 xe lu\xF4n \u0111\u01B0\u1EE3c b\u1EA3o v\u1EC7</span></div> </div> <div class="cs-perm-row"> <div class="cs-perm-icon green"><svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div> <div class="cs-perm-text"><strong>C\xE1 nh\xE2n h\xF3a d\u1ECBch v\u1EE5</strong><span>Gi\xE1 b\u1EA3o hi\u1EC3m, l\u1ECBch b\u1EA3o d\u01B0\u1EE1ng v\xE0 \u01B0u \u0111\xE3i ph\xF9 h\u1EE3p v\u1EDBi xe c\u1EE7a b\u1EA1n</span></div> </div> </div> <div class="cs-legal">
Th\xF4ng tin bi\u1EC3n s\u1ED1 \u0111\u01B0\u1EE3c m\xE3 h\xF3a v\xE0 l\u01B0u tr\u1EEF b\u1EA3o m\u1EADt. B\u1EA1n c\xF3 th\u1EC3 x\xF3a b\u1EA5t c\u1EE9 l\xFAc n\xE0o trong <a href="/xe-cua-toi">Xe c\u1EE7a t\xF4i</a>. Xem th\xEAm <a href="/chinh-sach-bao-mat">Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt</a>.
</div> <div class="cs-footer"> <button class="cs-confirm-btn" onclick="confirmAddVehicle()"> <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
\u0110\u1ED3ng \xFD &amp; L\u01B0u xe
</button> <button class="cs-skip-btn" onclick="closeConsentSheet()">B\u1ECF qua, kh\xF4ng l\u01B0u</button> </div> </div> <!-- Success view --> <div class="cs-success" id="csSuccess"> <div class="cs-success-icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></div> <h3>\u0110\xE3 l\u01B0u xe th\xE0nh c\xF4ng!</h3> <p>MoMo s\u1EBD t\u1EF1 \u0111\u1ED9ng theo d\xF5i v\xE0 nh\u1EAFc b\u1EA1n khi c\xF3 c\u1EADp nh\u1EADt quan tr\u1ECDng v\u1EC1 xe.</p> <button class="cs-success-close" onclick="closeConsentSheet()">Xong</button> </div> </div> </div> <div class="nav-sidebar" id="navSidebar"> <div class="nav-sidebar-top"> <span class="nav-sidebar-logo">Ti\u1EC7n \xCDch <em>Giao Th\xF4ng</em></span> <button class="nav-sidebar-close" onclick="closeNavSidebar()"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> </button> </div> <div class="nav-sidebar-body"> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">Di chuy\u1EC3n</div> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/gia-xang">Gi\xE1 x\u0103ng d\u1EA7u h\xF4m nay</a> <a class="nav-sidebar-link" href="/cay-xang">T\xECm c\xE2y x\u0103ng g\u1EA7n \u0111\xE2y</a> <a class="nav-sidebar-link" href="/tram-sac">Tr\u1EA1m s\u1EA1c xe \u0111i\u1EC7n</a> <a class="nav-sidebar-link" href="/epass/tinh-phi-etc">T\xEDnh ph\xED ETC theo tuy\u1EBFn</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/chuyen-di">T\xEDnh chi ph\xED chuy\u1EBFn \u0111i</a> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">B\u1EA3o hi\u1EC3m</div> <a class="nav-sidebar-link" href="/bao-hiem-o-to">B\u1EA3o hi\u1EC3m TNDS b\u1EAFt bu\u1ED9c</a> <a class="nav-sidebar-link" href="/bao-hiem-o-to">B\u1EA3o hi\u1EC3m th\xE2n v\u1ECF</a> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">Ph\xE1p l\xFD &amp; B\u1EA3o d\u01B0\u1EE1ng</div> <a class="nav-sidebar-link" href="/phat-nguoi">Tra ph\u1EA1t ngu\u1ED9i</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/dang-kiem">Ki\u1EC3m tra \u0111\u0103ng ki\u1EC3m</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/bao-duong">L\u1ECBch b\u1EA3o d\u01B0\u1EE1ng xe</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/cuu-ho">C\u1EE9u h\u1ED9 kh\u1EA9n c\u1EA5p</a> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">Xe c\u1EE7a t\xF4i</div> <a class="nav-sidebar-link" href="/tien-ich-giao-thong#ho-so-xe">H\u1ED3 s\u01A1 ph\u01B0\u01A1ng ti\u1EC7n</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong#chi-phi-xe">Chi ph\xED nu\xF4i xe / n\u0103m</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/hang-xe">Nh\xE3n xe &amp; D\xF2ng xe</a> <a class="nav-sidebar-link" href="/epass">ePass &amp; T\u1EF1 \u0111\u1ED9ng n\u1EA1p</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/bai-do-xe">T\xECm b\xE3i \u0111\u1ED7 xe</a> </div> </div> </div>  <section class="hero" id="vehicle-hub"> <div class="hero-inner"> <div class="hero-content"> <h1 class="hero-title">M\u1ECDi th\u1EE9 v\u1EC1 chi\u1EBFc xe<br><em>c\u1EE7a b\u1EA1n, m\u1ED9t n\u01A1i.</em></h1> <ul class="hero-usp"> <li><span class="usp-check">\u2713</span>Tra ph\u1EA1t ngu\u1ED9i theo bi\u1EC3n s\u1ED1 \u2014 kh\xF4ng CAPTCHA, k\u1EBFt qu\u1EA3 ngay</li> <li><span class="usp-check">\u2713</span>T\xEDnh ph\xED ETC t\u1EEBng tuy\u1EBFn + li\xEAn k\u1EBFt ePass qua tr\u1EA1m t\u1EF1 \u0111\u1ED9ng</li> <li><span class="usp-check">\u2713</span>Gi\xE1 x\u0103ng c\u1EADp nh\u1EADt m\u1ED7i k\u1EF3 \u0111i\u1EC1u h\xE0nh \xB7 T\xECm c\xE2y x\u0103ng MoMo g\u1EA7n b\u1EA1n</li> <li><span class="usp-check">\u2713</span>Mua b\u1EA3o hi\u1EC3m xe, \u0111\u1EB7t l\u1ECBch b\u1EA3o d\u01B0\u1EE1ng, g\u1ECDi c\u1EE9u h\u1ED9 \u2014 t\u1EA5t c\u1EA3 trong MoMo</li> </ul> </div> <div class="plate-panel"> <div class="plate-motivation"> <div class="pm-title">T\xECnh tr\u1EA1ng xe b\u1EA1n th\u1EBF n\xE0o</div> <div class="pm-items"> <span class="pm-item"><i data-lucide="alert-circle" width="12" height="12"></i> Ph\u1EA1t ngu\u1ED9i</span> <span class="pm-sep">\xB7</span> <span class="pm-item"><i data-lucide="clipboard-check" width="12" height="12"></i> \u0110\u0103ng ki\u1EC3m</span> <span class="pm-sep">\xB7</span> <span class="pm-item"><i data-lucide="trending-down" width="12" height="12"></i> \u0110\u1ECBnh gi\xE1</span> <span class="pm-sep">\xB7</span> <span class="pm-item"><i data-lucide="milestone" width="12" height="12"></i> ETC</span> </div> </div> <div id="plateInputArea"> <div class="plate-panel-label" id="platePanelLabel">Nh\u1EADp bi\u1EC3n s\u1ED1 \u0111\u1EC3 ki\u1EC3m tra xe</div> <div class="vtype-toggle" id="vtypeToggle"> <button class="vtype-btn active" id="vtype-oto" onclick="setVtype('oto')"> <i data-lucide="car" width="15" height="15"></i>
\xD4 t\xF4
</button> <button class="vtype-btn" id="vtype-xemay" onclick="setVtype('xemay')"> <i data-lucide="bike" width="15" height="15"></i>
Xe m\xE1y
</button> </div> <div class="plate-input-wrap"> <div class="plate-box" id="plateBox"> <div class="plate-vn-strip">\u{1F1FB}\u{1F1F3} VI\u1EC6T NAM</div> <input class="plate-input" id="plateInput" autocomplete="off" placeholder="51A \xB7 12345" maxlength="10" aria-label="Bi\u1EC3n s\u1ED1 xe" inputmode="text"> <div class="plate-province" id="plateProvince"></div> </div> <button class="plate-submit" id="plateSubmit" type="button">Ki\u1EC3m tra xe \u2192</button> </div> </div> </div> </div> <!-- wave divider --> <div class="hero-wave"> <svg viewBox="0 0 1440 72" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0,0 C240,72 480,20 720,40 C960,60 1200,8 1440,48 L1440,72 L0,72 Z" fill="#F7F5FA"></path> </svg> </div> </section>  <div id="plateResultSection" class="prs-wrap" style="display:none" aria-live="polite"> <div class="prs-inner" id="plateResultInner"></div> </div>  <div class="stats-bar"> <div class="stats-bar-inner"> <div class="stat-cell"> <div class="stat-num">1.2<em>M+</em></div> <div class="stat-label">L\u01B0\u1EE3t tra c\u1EE9u ph\u1EA1t ngu\u1ED9i</div> <div class="stat-tag">\u2191 M\u1ED7i th\xE1ng</div> </div> <div class="stat-cell"> <div class="stat-num">63</div> <div class="stat-label">T\u1EC9nh th\xE0nh ph\u1EE7 s\xF3ng</div> <div class="stat-tag">To\xE0n qu\u1ED1c</div> </div> <div class="stat-cell"> <div class="stat-num">10<em>+</em></div> <div class="stat-label">D\u1ECBch v\u1EE5 trong m\u1ED9t n\u01A1i</div> <div class="stat-tag">Kh\xF4ng c\u1EA7n nhi\u1EC1u app</div> </div> <div class="stat-cell"> <div class="stat-num">0\u0111</div> <div class="stat-label">Ph\xED s\u1EED d\u1EE5ng t\u1EA5t c\u1EA3 t\xEDnh n\u0103ng</div> <div class="stat-tag">Mi\u1EC5n ph\xED ho\xE0n to\xE0n</div> </div> </div> </div>  <div class="brand-strip-wrap"> <div class="brand-strip-inner"> <div class="brand-strip-label">Th\xF4ng tin theo h\xE3ng xe</div> <div class="brand-strip-scroll"> <a class="brand-chip" href="/tien-ich-giao-thong/hang-xe/toyota"> <div class="brand-chip-logo" style="background:#fff1f1"><svg viewBox="0 0 60 60" width="32" height="32" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="30" rx="28" ry="28" fill="none" stroke="#EB0A1E" stroke-width="3"></ellipse><ellipse cx="30" cy="30" rx="17" ry="10" fill="none" stroke="#EB0A1E" stroke-width="3"></ellipse><ellipse cx="30" cy="30" rx="10" ry="28" fill="none" stroke="#EB0A1E" stroke-width="3"></ellipse></svg></div> <div class="brand-chip-name">Toyota</div> </a> <a class="brand-chip" href="/tien-ich-giao-thong/hang-xe/honda"> <div class="brand-chip-logo" style="background:#fff1f1"><svg viewBox="0 0 60 40" width="36" height="24" xmlns="http://www.w3.org/2000/svg"><text x="2" y="33" font-family="Arial Black,sans-serif" font-size="36" font-weight="900" fill="#CC0000">H</text></svg></div> <div class="brand-chip-name">Honda</div> </a> <a class="brand-chip" href="/tien-ich-giao-thong/hang-xe/hyundai"> <div class="brand-chip-logo" style="background:#f0f4ff"><svg viewBox="0 0 60 40" width="36" height="24" xmlns="http://www.w3.org/2000/svg"><text x="4" y="33" font-family="Arial Black,sans-serif" font-size="36" font-weight="900" fill="#002C5F" font-style="italic">H</text></svg></div> <div class="brand-chip-name">Hyundai</div> </a> <a class="brand-chip" href="/tien-ich-giao-thong/hang-xe/kia"> <div class="brand-chip-logo" style="background:#f5f5f5"><svg viewBox="0 0 70 28" width="42" height="17" xmlns="http://www.w3.org/2000/svg"><text x="0" y="24" font-family="Arial Black,sans-serif" font-size="26" font-weight="900" fill="#05141F" letter-spacing="-1">KIA</text></svg></div> <div class="brand-chip-name">KIA</div> </a> <a class="brand-chip" href="/tien-ich-giao-thong/hang-xe/mazda"> <div class="brand-chip-logo" style="background:#fff1f1"><svg viewBox="0 0 60 42" width="36" height="25" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="21" rx="28" ry="14" fill="none" stroke="#910000" stroke-width="3"></ellipse><ellipse cx="30" cy="21" rx="14" ry="20" fill="none" stroke="#910000" stroke-width="3"></ellipse></svg></div> <div class="brand-chip-name">Mazda</div> </a> <a class="brand-chip" href="/tien-ich-giao-thong/hang-xe/ford"> <div class="brand-chip-logo" style="background:#f0f4ff"><svg viewBox="0 0 80 36" width="46" height="21" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="76" height="32" rx="16" fill="none" stroke="#003478" stroke-width="3"></rect><text x="40" y="27" font-family="Arial,sans-serif" font-size="20" font-weight="900" fill="#003478" text-anchor="middle" font-style="italic">Ford</text></svg></div> <div class="brand-chip-name">Ford</div> </a> <a class="brand-chip" href="/tien-ich-giao-thong/hang-xe/mitsubishi"> <div class="brand-chip-logo" style="background:#fff1f1"><svg viewBox="0 0 56 52" width="30" height="28" xmlns="http://www.w3.org/2000/svg"><polygon points="28,2 54,48 2,48" fill="none" stroke="#ED1B2F" stroke-width="3"></polygon><polygon points="28,18 48,48 8,48" fill="none" stroke="#ED1B2F" stroke-width="3"></polygon><polygon points="28,34 42,48 14,48" fill="none" stroke="#ED1B2F" stroke-width="3"></polygon></svg></div> <div class="brand-chip-name">Mitsubishi</div> </a> <a class="brand-chip" href="/tien-ich-giao-thong/hang-xe/vinfast"> <div class="brand-chip-logo" style="background:#f0fdf4"><svg viewBox="0 0 70 36" width="42" height="22" xmlns="http://www.w3.org/2000/svg"><text x="2" y="28" font-family="Arial Black,sans-serif" font-size="22" font-weight="900" fill="#00953B" letter-spacing="-0.5">VinFast</text></svg></div> <div class="brand-chip-name">VinFast</div> </a> <a class="brand-chip" href="/tien-ich-giao-thong/hang-xe/mercedes"> <div class="brand-chip-logo" style="background:#f5f5f5"><svg viewBox="0 0 56 56" width="32" height="32" xmlns="http://www.w3.org/2000/svg"><circle cx="28" cy="28" r="26" fill="none" stroke="#1a1a1a" stroke-width="2.5"></circle><line x1="28" y1="4" x2="28" y2="28" stroke="#1a1a1a" stroke-width="2.5"></line><line x1="28" y1="28" x2="7" y2="44" stroke="#1a1a1a" stroke-width="2.5"></line><line x1="28" y1="28" x2="49" y2="44" stroke="#1a1a1a" stroke-width="2.5"></line></svg></div> <div class="brand-chip-name">Mercedes</div> </a> <a class="brand-chip" href="/tien-ich-giao-thong/hang-xe/bmw"> <div class="brand-chip-logo" style="background:#f0f4ff"><svg viewBox="0 0 56 56" width="32" height="32" xmlns="http://www.w3.org/2000/svg"><circle cx="28" cy="28" r="26" fill="none" stroke="#1C1C1C" stroke-width="2.5"></circle><circle cx="28" cy="28" r="13" fill="none" stroke="#1C1C1C" stroke-width="2"></circle><path d="M28 2 L28 28 L2 28" fill="#003A99"></path><path d="M54 28 L28 28 L28 54" fill="#003A99"></path></svg></div> <div class="brand-chip-name">BMW</div> </a> </div> </div> </div> <div class="page-wrap"> <!-- UTILITIES OVERVIEW \u2014 grouped by JTBD --> <section class="section" id="tinh-nang"> <div class="section-head"> <div> <p class="section-eyebrow">T\xEDnh n\u0103ng n\u1ED5i b\u1EADt</p> <h2 class="section-title">T\u1EEB ph\xE1p l\xFD \u0111\u1EBFn h\xE0nh tr\xECnh</h2> <p class="section-desc">Ba nh\xF3m vi\u1EC7c m\xE0 m\u1ECDi ng\u01B0\u1EDDi c\xF3 xe \u0111\u1EC1u c\u1EA7n - MoMo lo tr\u1ECDn, kh\xF4ng c\u1EA7n m\u1EDF nhi\u1EC1u app.</p> </div> </div> <div class="fc-tabs" id="fcTabs"></div> <div class="fc-grid" id="fcGrid"></div> </section> <!-- TRIP PLANNER --> <section class="section" id="chuyen-di"> <div class="page-wrap"> <div class="section-head"> <div> <h2 class="section-title">T\xEDnh chi ph\xED chuy\u1EBFn \u0111i</h2> <p class="section-desc">Nh\u1EADp \u0111i\u1EC3m xu\u1EA5t ph\xE1t v\xE0 \u0111i\u1EC3m \u0111\u1EBFn - h\u1EC7 th\u1ED1ng t\xEDnh chi ph\xED nhi\xEAn li\u1EC7u, ph\xED ETC v\xE0 checklist tr\u01B0\u1EDBc khi xu\u1EA5t ph\xE1t.</p> </div> </div> <div class="tp-widget"> <!-- \u0110i\u1EC3m \u0111i --> <div class="tp-cell" style="position:relative"> <span class="tp-city-label">\u0110i\u1EC3m xu\u1EA5t ph\xE1t</span> <div class="tp-city-row"> <span class="tp-city-icon" id="tp-icon-from"></span> <input class="tp-city-input" id="tpFrom" placeholder="VD: TP. H\u1ED3 Ch\xED Minh" autocomplete="off" oninput="showAC('tpFrom','acFrom')" onfocus="showAC('tpFrom','acFrom')" onblur="hideAC('acFrom')"> </div> <div class="tp-autocomplete" id="acFrom"></div> <button class="tp-swap-btn" onclick="swapCities()" title="\u0110\u1ED5i chi\u1EC1u"> <i data-lucide="arrow-up-down" width="13" height="13"></i> </button> </div> <!-- \u0110i\u1EC3m \u0111\u1EBFn --> <div class="tp-cell" style="position:relative"> <span class="tp-city-label">\u0110i\u1EC3m \u0111\u1EBFn</span> <div class="tp-city-row"> <span class="tp-city-icon" id="tp-icon-to"></span> <input class="tp-city-input" id="tpTo" placeholder="VD: \u0110\xE0 L\u1EA1t, V\u0169ng T\xE0u, H\u1EA3i Ph\xF2ng..." autocomplete="off" oninput="showAC('tpTo','acTo')" onfocus="showAC('tpTo','acTo')" onblur="hideAC('acTo')"> </div> <div class="tp-autocomplete" id="acTo"></div> </div> <!-- Ph\u01B0\u01A1ng ti\u1EC7n --> <div class="tp-cell tp-cell-vehicle"> <span class="tp-city-label">Ph\u01B0\u01A1ng ti\u1EC7n</span> <div class="tp-vpills-row"> <button class="tp-vpill2" data-v="motorbike" onclick="selectVP(this)"> <span class="vp-icon" id="vp-icon-motorbike"></span> Xe m\xE1y
</button> <button class="tp-vpill2 on" data-v="car-gas" onclick="selectVP(this)"> <span class="vp-icon" id="vp-icon-car-gas"></span> \xD4 t\xF4 x\u0103ng
</button> <button class="tp-vpill2" data-v="car-ev" onclick="selectVP(this)"> <span class="vp-icon" id="vp-icon-car-ev"></span> \xD4 t\xF4 \u0111i\u1EC7n
</button> </div> </div> <button class="tp-go-btn" id="tpGoBtn" onclick="goTrip()" disabled>
T\xEDnh chi ph\xED \u2192
</button> </div> </div> </section> <!-- GAS PRICES --> <section class="section" id="gia-xang"> <div class="section-head"> <div> <p class="section-eyebrow">C\u1EADp nh\u1EADt m\u1ED7i k\u1EF3 \u0111i\u1EC1u h\xE0nh</p> <h2 class="section-title">Gi\xE1 x\u0103ng d\u1EA7u h\xF4m nay</h2> <p class="section-desc">K\u1EF3 \u0111i\u1EC1u h\xE0nh g\u1EA7n nh\u1EA5t: 15:00 ng\xE0y 31/07/2026 theo B\u1ED9 C\xF4ng Th\u01B0\u01A1ng.</p> </div> <a class="section-more" href="/tien-ich-giao-thong/gia-xang">Trang gi\xE1 x\u0103ng \u0111\u1EA7y \u0111\u1EE7 \u2192</a> </div> <div class="gas-panel"> <div> <div class="gas-region-tabs"> <button class="grt on" onclick="setRegion(this, 1)">V\xF9ng 1 \xB7 \u0110\u1ED3ng b\u1EB1ng</button> <button class="grt" onclick="setRegion(this, 2)">V\xF9ng 2 \xB7 Mi\u1EC1n n\xFAi, h\u1EA3i \u0111\u1EA3o</button> </div> <div class="gas-table" id="gasTable"></div> </div> <div class="gas-side"> <div class="gas-side-title">Xu h\u01B0\u1EDBng RON 95-III \xB7 90 ng\xE0y</div> <div class="trend-chart"> <svg viewBox="0 0 320 100" style="width:100%;height:100%" preserveAspectRatio="none"> <defs> <linearGradient id="tg" x1="0" y1="0" x2="0" y2="1"> <stop offset="0%" stop-color="#EB2F96" stop-opacity=".22"></stop> <stop offset="100%" stop-color="#EB2F96" stop-opacity="0"></stop> </linearGradient> </defs> <path d="M0,60 L40,55 L80,48 L110,57 L140,44 L170,40 L200,47 L230,35 L260,29 L295,25 L320,22" fill="none" stroke="#EB2F96" stroke-width="2.5" stroke-linejoin="round"></path> <path d="M0,60 L40,55 L80,48 L110,57 L140,44 L170,40 L200,47 L230,35 L260,29 L295,25 L320,22 L320,100 L0,100Z" fill="url(#tg)"></path> <circle cx="320" cy="22" r="4" fill="#EB2F96"></circle> </svg> </div> <div class="trend-x"><span>04/2026</span><span>05/2026</span><span>06/2026</span><span>Nay</span></div> <div class="gas-note"><strong>Gi\xE1 gi\u1EA3m 3 k\u1EF3 li\xEAn ti\u1EBFp.</strong> \u0110\u1ED5 \u0111\u1EA7y b\xECnh 45 l\xEDt RON 95 h\xF4m nay ti\u1EBFt ki\u1EC7m ~7.650\u0111 so v\u1EDBi \u0111\u1EC9nh th\xE1ng 4.</div> </div> </div> </section> <!-- EPASS --> <section class="section" id="epass"> <div class="epass-panel"> <div class="epass-copy"> <h2>Qua tr\u1EA1m kh\xF4ng lo h\u1EBFt ti\u1EC1n,<br>n\u1EA1p ePass t\u1EF1 \u0111\u1ED9ng</h2> <p>Li\xEAn k\u1EBFt t\xE0i kho\u1EA3n ePass v\u1EDBi MoMo m\u1ED9t l\u1EA7n. Khi s\u1ED1 d\u01B0 xu\u1ED1ng d\u01B0\u1EDBi ng\u01B0\u1EE1ng b\u1EA1n ch\u1ECDn, h\u1EC7 th\u1ED1ng t\u1EF1 n\u1EA1p t\u1EEB V\xED MoMo ho\u1EB7c V\xED Tr\u1EA3 Sau - k\u1EC3 c\u1EA3 l\xFAc 5 gi\u1EDD s\xE1ng tr\xEAn cao t\u1ED1c.</p> <ul class="epass-steps"> <li><span class="ep-step-num">1</span>Li\xEAn k\u1EBFt ePass b\u1EB1ng s\u1ED1 \u0111i\u1EC7n tho\u1EA1i \u0111\u0103ng k\xFD th\u1EBB</li> <li><span class="ep-step-num">2</span>Ch\u1ECDn ng\u01B0\u1EE1ng k\xEDch ho\u1EA1t v\xE0 s\u1ED1 ti\u1EC1n n\u1EA1p m\u1ED7i l\u1EA7n</li> <li><span class="ep-step-num">3</span>Xong - MoMo t\u1EF1 canh s\u1ED1 d\u01B0 cho b\u1EA1n</li> </ul> <button class="btn-fill" onclick="toast('M\u1EDF MoMo App \u0111\u1EC3 li\xEAn k\u1EBFt ePass...')">Li\xEAn k\u1EBFt ePass trong App</button> <a class="section-more ep-full-link" href="/epass" style="display:inline-block;margin-top:12px">Xem trang ePass \u0111\u1EA7y \u0111\u1EE7 \u2192</a> <!-- Route toll teaser --> <div class="ep-route-teaser" style="margin-top:18px;padding:14px 16px;background:rgba(235,47,150,.06);border:1.5px solid rgba(235,47,150,.15);border-radius:12px;"> <div style="font-size:11px;font-weight:700;color:var(--pink-500);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px;">\u{1F6E3}\uFE0F T\xEDnh ph\xED tr\u1EA1m ETC tr\u01B0\u1EDBc khi \u0111i</div> <div style="font-size:12.5px;color:var(--gray-600);margin-bottom:10px;line-height:1.5">C\u1EA7n n\u1EA1p bao nhi\xEAu ti\u1EC1n ePass cho chuy\u1EBFn HCM\u2192\u0110\xE0 L\u1EA1t? T\xEDnh ngay.</div> <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px"> <a href="/epass/tinh-phi-etc?r=hcm-dalat" style="height:28px;padding:0 12px;line-height:28px;border-radius:20px;font-size:12px;font-weight:600;background:rgba(235,47,150,.1);color:var(--pink-500);border:1px solid rgba(235,47,150,.2);">HCM \u2192 \u0110\xE0 L\u1EA1t</a> <a href="/epass/tinh-phi-etc?r=hcm-vung-tau" style="height:28px;padding:0 12px;line-height:28px;border-radius:20px;font-size:12px;font-weight:600;background:var(--gray-50);color:var(--gray-600);border:1px solid var(--gray-200);">HCM \u2192 V\u0169ng T\xE0u</a> <a href="/epass/tinh-phi-etc?r=hn-ha-long" style="height:28px;padding:0 12px;line-height:28px;border-radius:20px;font-size:12px;font-weight:600;background:var(--gray-50);color:var(--gray-600);border:1px solid var(--gray-200);">HN \u2192 H\u1EA1 Long</a> </div> <a href="/epass/tinh-phi-etc" style="font-size:12.5px;font-weight:700;color:var(--pink-500);">T\xEDnh tuy\u1EBFn kh\xE1c \u2192</a> </div> </div> <div class="epass-visual"> <div class="ep-mock"> <div class="ep-mock-label" style="margin-bottom:16px">Ch\u1ECDn s\u1ED1 ti\u1EC1n mu\u1ED1n n\u1EA1p v\xE0o ePass</div> <div class="ep-amount-chips" style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px"> <button class="ep-chip" style="height:52px;font-size:15px;font-weight:800" onclick="selectEpChip(this,50)">50.000\u0111</button> <button class="ep-chip on" style="height:52px;font-size:15px;font-weight:800" onclick="selectEpChip(this,100)">100.000\u0111</button> <button class="ep-chip" style="height:52px;font-size:15px;font-weight:800" onclick="selectEpChip(this,200)">200.000\u0111</button> <button class="ep-chip" style="height:52px;font-size:15px;font-weight:800" onclick="selectEpChip(this,300)">300.000\u0111</button> </div> <button class="ep-topup-btn" id="epTopupBtn" onclick="toast('M\u1EDF MoMo App \u0111\u1EC3 n\u1EA1p ePass...')">N\u1EA1p 100.000\u0111 v\xE0o ePass</button> <div class="ep-footnote" style="margin-top:12px;font-size:11.5px;color:rgba(255,255,255,.35);text-align:center;line-height:1.5">
N\u1EA1p qua MoMo App \xB7 Li\xEAn k\u1EBFt ePass VTTI<br>S\u1ED1 d\u01B0 hi\u1EC3n th\u1ECB sau khi \u0111\u0103ng nh\u1EADp
</div> <div class="ep-divider ep-auto-row-wrap" style="margin-top:16px"></div> <div class="ep-auto-row-wrap" style="display:flex;align-items:center;gap:8px;margin-top:14px"> <span class="ep-auto-badge">\u26A1 AUTO-TOPUP</span> <span style="font-size:12px;color:rgba(255,255,255,.5)">T\u1EF1 n\u1EA1p khi s\u1ED1 d\u01B0 xu\u1ED1ng th\u1EA5p \xB7 Li\xEAn k\u1EBFt 1 l\u1EA7n</span> </div> </div> </div> </div> </section> <!-- INSURANCE --> <section class="section" id="bao-hiem"> <div class="section-head"> <div> <h2 class="section-title" id="ins-title">B\u1EA3o hi\u1EC3m TNDS</h2> <p class="section-desc" id="ins-desc">Ph\xED tham kh\u1EA3o cho \xF4 t\xF4 con d\u01B0\u1EDBi 6 ch\u1ED7.</p> </div> </div> <div class="ins-tabs"> <button class="ins-tab active" onclick="switchInsTab('tnds', this)">B\u1EA3o hi\u1EC3m TNDS</button> <button class="ins-tab" onclick="switchInsTab('vcx', this)">B\u1EA3o hi\u1EC3m th\xE2n v\u1ECF</button> </div> <div class="ins-wrap"> <div class="ins-edu" id="ins-edu"> <div class="ins-edu-icon"><i data-lucide="triangle-alert" width="28" height="28" style="color:#D97706"></i></div> <h3 id="ins-edu-title">Kh\xF4ng c\xF3 TNDS b\u1ECB ph\u1EA1t bao nhi\xEAu?</h3> <p id="ins-edu-body1">\xD4 t\xF4 kh\xF4ng c\xF3 b\u1EA3o hi\u1EC3m TNDS b\u1EAFt bu\u1ED9c b\u1ECB ph\u1EA1t <strong>400.000 - 600.000\u0111</strong> theo Ngh\u1ECB \u0111\u1ECBnh 100/2019, v\xE0 kh\xF4ng th\u1EC3 \u0111\u0103ng ki\u1EC3m.</p> <p id="ins-edu-body2">Gi\u1EA5y ch\u1EE9ng nh\u1EADn \u0111i\u1EC7n t\u1EED mua qua MoMo c\xF3 gi\xE1 tr\u1ECB ph\xE1p l\xFD t\u01B0\u01A1ng \u0111\u01B0\u01A1ng b\u1EA3n gi\u1EA5y theo Ngh\u1ECB \u0111\u1ECBnh 67/2023.</p> </div> <div class="ins-compare"> <div class="ins-compare-head"> <strong id="ins-compare-title">Ph\xED TNDS 1 n\u0103m \xB7 \xD4 t\xF4 d\u01B0\u1EDBi 6 ch\u1ED7</strong> <span>\u0110\xE3 g\u1ED3m VAT</span> </div> <div id="insList"></div> </div> </div> </section> <!-- STATIONS --> <section class="section" id="cay-xang"> <div class="section-head"> <div> <h2 class="section-title">C\xE2y x\u0103ng & garage g\u1EA7n b\u1EA1n</h2> <p class="section-desc">Qu\xE9t QR MoMo t\u1EA1i v\xF2i b\u01A1m - nh\u1EADn voucher 20.000\u0111 l\u1EA7n \u0111\u1EA7u, kh\xF4ng x\u1EBFp h\xE0ng thanh to\xE1n. T\xECm tr\u1EA1m \u0111\u1ED1i t\xE1c g\u1EA7n b\u1EA1n.</p> </div> <a class="section-more" href="/cay-xang">Xem b\u1EA3n \u0111\u1ED3 \u0111\u1EA7y \u0111\u1EE7 \u2192</a> </div> <div class="station-grid"> <div class="station-card" onclick="toast('Ch\u1EC9 \u0111\u01B0\u1EDDng t\u1EDBi Petrolimex 101...')"> <div class="st-head"> <div class="st-logo" style="background:#fff1f1;padding:0"><img src="https://homepage.momocdn.net/img/iconholder-260730132529.png" width="32" height="32" alt="C\xE2y x\u0103ng" style="display:block"></div> <div><div class="st-name">Petrolimex 101</div><div class="st-dist">0.4 km \xB7 M\u1EDF 24/7</div></div> </div> <div class="st-addr">101 Nguy\u1EC5n Th\u1ECB Th\u1EADp, Q.7, TP.HCM</div> </div> <div class="station-card" onclick="toast('Ch\u1EC9 \u0111\u01B0\u1EDDng t\u1EDBi PV Oil L\xEA V\u0103n L\u01B0\u01A1ng...')"> <div class="st-head"> <div class="st-logo" style="background:#fff1f1;padding:0"><img src="https://homepage.momocdn.net/img/iconholder-260730132529.png" width="32" height="32" alt="C\xE2y x\u0103ng" style="display:block"></div> <div><div class="st-name">PV Oil L\xEA V\u0103n L\u01B0\u01A1ng</div><div class="st-dist">1.1 km \xB7 M\u1EDF 24/7</div></div> </div> <div class="st-addr">288 L\xEA V\u0103n L\u01B0\u01A1ng, Q.7, TP.HCM</div> </div> <div class="station-card" onclick="toast('Ch\u1EC9 \u0111\u01B0\u1EDDng t\u1EDBi Garage Tu\u1EA5n Auto...')"> <div class="st-head"> <div class="st-logo" style="background:#f0fdf4;padding:0"><img src="https://homepage.momocdn.net/img/logo-260730132528.png" width="32" height="32" alt="Garage" style="display:block"></div> <div><div class="st-name">Garage Tu\u1EA5n Auto</div><div class="st-dist">1.8 km \xB7 T2 - T7</div></div> </div> <div class="st-addr">45 Tr\u1EA7n Xu\xE2n So\u1EA1n, Q.7, TP.HCM</div> </div> <div class="station-card" onclick="toast('Ch\u1EC9 \u0111\u01B0\u1EDDng t\u1EDBi Petrolimex Hu\u1EF3nh T\u1EA5n Ph\xE1t...')"> <div class="st-head"> <div class="st-logo" style="background:#fff1f1;padding:0"><img src="https://homepage.momocdn.net/img/iconholder-260730132529.png" width="32" height="32" alt="C\xE2y x\u0103ng" style="display:block"></div> <div><div class="st-name">Petrolimex HTP</div><div class="st-dist">2.3 km \xB7 M\u1EDF 24/7</div></div> </div> <div class="st-addr">500 Hu\u1EF3nh T\u1EA5n Ph\xE1t, Q.7, TP.HCM</div> </div> </div> <div class="o2o-note"> <span class="o2o-qr"><i data-lucide="smartphone" width="28" height="28"></i></span> <div><strong>Qu\xE9t QR t\u1EA1i v\xF2i b\u01A1m</strong> \u0111\u1EC3 k\xEDch ho\u1EA1t h\u1ED3 s\u01A1 xe v\xE0 nh\u1EADn ngay voucher 20.000\u0111 cho l\u1EA7n \u0111\u1ED5 x\u0103ng \u0111\u1EA7u ti\xEAn qua MoMo.</div> </div> </section> <!-- CUU HO --> <section class="section" id="cuu-ho"> <div class="section-head"> <div> <h2 class="section-title">C\u1EE9u h\u1ED9 xe m\xE1y to\xE0n qu\u1ED1c</h2> <p class="section-desc">H\u1ECFng xe gi\u1EEFa \u0111\u01B0\u1EDDng, g\u1ECDi c\u1EE9u h\u1ED9 ngay tr\xEAn MoMo. Zuttoride ph\u1EE7 s\xF3ng 63 t\u1EC9nh th\xE0nh, \u0111\u1EBFn trong 30 ph\xFAt, thanh to\xE1n kh\xF4ng ti\u1EC1n m\u1EB7t.</p> </div> <a class="section-more" href="/tien-ich-giao-thong/cuu-ho">Xem chi ti\u1EBFt \u2192</a> </div> <div class="rescue-panel"> <div class="rescue-card" onclick="toast('M\u1EDF MoMo App \u0111\u1EC3 g\u1ECDi c\u1EE9u h\u1ED9...')"> <div class="rescue-logo"><img src="https://static.momocdn.net/app/img/publicservice/logo_zuttoride.png" alt="Zuttoride"></div> <div class="rescue-body"> <div class="rescue-name">Zuttoride Rescue</div> <div class="rescue-meta"><i data-lucide="bike" style="width:13px;height:13px;display:inline;vertical-align:middle;margin-right:4px"></i>Xe m\xE1y m\u1ECDi h\xE3ng \xB7 C\u1EE9u h\u1ED9 t\u1EA1i ch\u1ED7 ho\u1EB7c k\xE9o v\u1EC1 garage</div> <div class="rescue-tags"> <span class="rescue-tag">\u0110\u1EBFn trong 30 ph\xFAt</span> <span class="rescue-tag">63 t\u1EC9nh th\xE0nh</span> <span class="rescue-tag">Thanh to\xE1n MoMo</span> </div> </div> <button class="rescue-cta">G\u1ECDi c\u1EE9u h\u1ED9 ngay</button> </div> <div class="rescue-steps"> <div class="rescue-step"><span class="rs-num">1</span><div><strong>M\u1EDF MoMo</strong><p>T\xECm "C\u1EE9u h\u1ED9 xe m\xE1y" trong m\u1EE5c D\u1ECBch v\u1EE5 giao th\xF4ng</p></div></div> <div class="rescue-step"><span class="rs-num">2</span><div><strong>X\xE1c nh\u1EADn v\u1ECB tr\xED</strong><p>GPS t\u1EF1 \u0111\u1ECBnh v\u1ECB, \u0111i\u1EC1u ch\u1EC9nh n\u1EBFu c\u1EA7n - chia s\u1EBB v\u1ECB tr\xED cho t\xE0i x\u1EBF c\u1EE9u h\u1ED9</p></div></div> <div class="rescue-step"><span class="rs-num">3</span><div><strong>Theo d\xF5i & thanh to\xE1n</strong><p>Xem t\xE0i x\u1EBF di chuy\u1EC3n theo th\u1EDDi gian th\u1EF1c, thanh to\xE1n khi xong</p></div></div> </div> </div> </section> <!-- PARKING --> <section class="section" id="parking"> <div class="section-head"> <div> <h2 class="section-title">T\xECm b\xE3i \u0111\u1ED7 xe</h2> <p class="section-desc">Hai \u0111\u1ED1i t\xE1c b\xE3i \u0111\u1ED7 t\xEDch h\u1EE3p MoMo - t\xECm v\u1ECB tr\xED v\xE0 thanh to\xE1n kh\xF4ng ti\u1EC1n m\u1EB7t ngay trong App.</p> </div> <a class="section-more" href="/tien-ich-giao-thong/bai-do-xe">Xem demo \u2192</a> </div> <div class="parking-grid"> <div class="parking-card"> <div class="parking-card-top"> <div class="parking-logo"><img src="https://static.momocdn.net/app/img/transportcenter/ic_VETC_parking.png" alt="VETC Parking"></div> <div> <div class="parking-name">VETC Parking</div> <div class="parking-sub">B\xE3i \u0111\u1ED7 t\xEDch h\u1EE3p th\u1EBB VETC</div> </div> </div> <p class="parking-desc">V\xE0o c\u1ED5ng b\u1EB1ng th\u1EBB VETC, ph\xED t\u1EF1 tr\u1EEB qua li\xEAn k\u1EBFt MoMo. Kh\xF4ng c\u1EA7n l\u1EA5y v\xE9 gi\u1EA5y, kh\xF4ng c\u1EA7n ch\u1EDD.</p> <div class="parking-feats"> <span><i data-lucide="table-2" style="width:12px;height:12px;vertical-align:middle;margin-right:4px"></i>50+ b\xE3i \u0111\u1ED7</span> <span><i data-lucide="car" style="width:12px;height:12px;vertical-align:middle;margin-right:4px"></i>\xD4 t\xF4 & xe m\xE1y</span> <span><i data-lucide="smartphone" style="width:12px;height:12px;vertical-align:middle;margin-right:4px"></i>Thanh to\xE1n t\u1EF1 \u0111\u1ED9ng</span> </div> </div> <div class="parking-card"> <div class="parking-card-top"> <div class="parking-logo"><img src="https://static.momocdn.net/app/img/publicservice/eparking_topup.png" alt="eParking"></div> <div> <div class="parking-name">eParking</div> <div class="parking-sub">B\xE3i \u0111\u1ED7 th\xF4ng minh</div> </div> </div> <p class="parking-desc">T\xECm v\xE0 thanh to\xE1n t\u1EA1i c\xE1c b\xE3i \u0111\u1ED7 th\xF4ng minh trong to\xE0 nh\xE0, TTTM, b\u1EC7nh vi\u1EC7n qua MoMo.</p> <div class="parking-feats"> <span><i data-lucide="building-2" style="width:12px;height:12px;vertical-align:middle;margin-right:4px"></i>TTTM, b\u1EC7nh vi\u1EC7n</span> <span><i data-lucide="car" style="width:12px;height:12px;vertical-align:middle;margin-right:4px"></i>\xD4 t\xF4 & xe m\xE1y</span> <span><i data-lucide="activity" style="width:12px;height:12px;vertical-align:middle;margin-right:4px"></i>L\u1ECBch s\u1EED \u0111\u1ED7 xe</span> </div> </div> </div> </section> <!-- W2A: VEHICLE PROFILE + MOXE --> <section class="section" id="ho-so-xe"> <div class="w2a-panel"> <div class="w2a-copy"> <h2>L\u01B0u xe m\u1ED9t l\u1EA7n,<br>MoMo lo ph\u1EA7n c\xF2n l\u1EA1i</h2> <p>T\u1EA1o h\u1ED3 s\u01A1 xe trong App \u0111\u1EC3 m\u1EDF kh\xF3a tr\u1EA3i nghi\u1EC7m \u0111\u1EA7y \u0111\u1EE7: m\u1ECDi ti\u1EC7n \xEDch tr\xEAn trang n\xE0y \u0111\u01B0\u1EE3c \u0111i\u1EC1n s\u1EB5n th\xF4ng tin xe c\u1EE7a b\u1EA1n, k\xE8m c\u1EA3nh b\xE1o t\u1EF1 \u0111\u1ED9ng cho m\u1ECDi deadline.</p> <div class="w2a-feats"> <div class="w2a-feat"><span class="w2a-feat-icon"><i data-lucide="bell" style="width:20px;height:20px"></i></span><div><strong>Qu\xE9t ph\u1EA1t ngu\u1ED9i h\xE0ng tu\u1EA7n</strong><span>T\u1EF1 \u0111\u1ED9ng ki\u1EC3m tra 03:00 th\u1EE9 Hai, b\xE1o ngay khi c\xF3 vi ph\u1EA1m m\u1EDBi</span></div></div> <div class="w2a-feat"><span class="w2a-feat-icon"><i data-lucide="calendar-clock" style="width:20px;height:20px"></i></span><div><strong>Nh\u1EAFc h\u1EA1n \u0111\u0103ng ki\u1EC3m & TNDS</strong><span>Tr\u01B0\u1EDBc 45, 30 v\xE0 7 ng\xE0y - kh\xF4ng bao gi\u1EDD qu\xEAn gia h\u1EA1n</span></div></div> <div class="w2a-feat"><span class="w2a-feat-icon"><i data-lucide="camera" style="width:20px;height:20px"></i></span><div><strong>Th\xEAm xe b\u1EB1ng OCR</strong><span>Ch\u1EE5p \u0111\u0103ng k\xFD xe, th\xF4ng tin t\u1EF1 \u0111i\u1EC1n trong 5 gi\xE2y</span></div></div> <div class="w2a-feat"><span class="w2a-feat-icon"><i data-lucide="award" style="width:20px;height:20px"></i></span><div><strong>H\u1EA1ng MoXe</strong><span>T\xEDch \u0111i\u1EC3m m\u1ED7i giao d\u1ECBch, \u0111\u1ED5i voucher r\u1EEDa xe, gi\u1EA3m ph\xED b\u1EA3o hi\u1EC3m</span></div></div> </div> <button class="btn-fill" onclick="toast('M\u1EDF MoMo App \u0111\u1EC3 t\u1EA1o h\u1ED3 s\u01A1 xe...')">T\u1EA1o h\u1ED3 s\u01A1 xe mi\u1EC5n ph\xED</button> </div> <div class="w2a-visual"> <div class="mini-plate"> <div class="mp-body"> <div class="mp-num">51F-123.45</div> <div class="mp-tier">\u{1F948} H\u1EA1ng B\u1EA1c \xB7 420 \u0111i\u1EC3m</div> </div> </div> </div> </div> <!-- MoXe Tier breakdown --> <div class="moxe-tier-header"> <div class="moxe-tier-label">Ch\u01B0\u01A1ng tr\xECnh h\u1EA1ng th\xE0nh vi\xEAn</div> <div class="moxe-tier-title">H\u1EA1ng MoXe - c\xE0ng d\xF9ng, c\xE0ng c\xF3 l\u1EE3i</div> </div> <div class="moxe-tiers"> <div class="moxe-tier-card dong"> <div class="moxe-tier-icon">\u{1F949}</div> <div class="moxe-tier-name">MoXe \u0110\u1ED3ng</div> <div class="moxe-tier-cond"><strong>\u0110i\u1EC1u ki\u1EC7n</strong>Add xe v\xE0o Vehicle Hub</div> <div class="moxe-tier-benefits"> <div class="moxe-tier-benefit">Tra ph\u1EA1t ngu\u1ED9i</div> <div class="moxe-tier-benefit">ePass t\u1EF1 \u0111\u1ED9ng n\u1EA1p</div> <div class="moxe-tier-benefit">\u0110\u0103ng ki\u1EC3m c\u01A1 b\u1EA3n</div> </div> </div> <div class="moxe-tier-card bac"> <div class="moxe-tier-icon">\u{1F948}</div> <div class="moxe-tier-name">MoXe B\u1EA1c</div> <div class="moxe-tier-cond"><strong>\u0110i\u1EC1u ki\u1EC7n</strong>D\xF9ng 3+ ti\u1EC7n \xEDch/th\xE1ng li\xEAn t\u1EE5c 3 th\xE1ng</div> <div class="moxe-tier-benefits"> <div class="moxe-tier-benefit">T\u1EA5t c\u1EA3 quy\u1EC1n l\u1EE3i \u0110\u1ED3ng</div> <div class="moxe-tier-benefit">Gi\u1EA3m th\xEAm 5% ph\xED b\u1EA3o hi\u1EC3m</div> <div class="moxe-tier-benefit">Voucher r\u1EEDa xe h\xE0ng qu\xFD</div> </div> </div> <div class="moxe-tier-card vang"> <div class="moxe-tier-icon">\u{1F947}</div> <div class="moxe-tier-name">MoXe V\xE0ng</div> <div class="moxe-tier-cond"><strong>\u0110i\u1EC1u ki\u1EC7n</strong>3+ ti\u1EC7n \xEDch \xD7 3 th\xE1ng + mua 1 s\u1EA3n ph\u1EA9m b\u1EA3o hi\u1EC3m</div> <div class="moxe-tier-benefits"> <div class="moxe-tier-benefit">T\u1EA5t c\u1EA3 quy\u1EC1n l\u1EE3i B\u1EA1c</div> <div class="moxe-tier-benefit">Gi\u1EA3m th\xEAm 10% ph\xED b\u1EA3o hi\u1EC3m</div> <div class="moxe-tier-benefit">Mi\u1EC5n ph\xED c\u1EE9u h\u1ED9 1 l\u1EA7n/n\u0103m</div> </div> </div> <div class="moxe-tier-card bachkim"> <div class="moxe-tier-icon">\u{1F48E}</div> <div class="moxe-tier-name">MoXe B\u1EA1ch Kim</div> <div class="moxe-tier-cond"><strong>\u0110i\u1EC1u ki\u1EC7n</strong>3+ ti\u1EC7n \xEDch \xD7 3 th\xE1ng + mua VCX &amp; CTPL</div> <div class="moxe-tier-benefits"> <div class="moxe-tier-benefit">T\u1EA5t c\u1EA3 quy\u1EC1n l\u1EE3i V\xE0ng</div> <div class="moxe-tier-benefit">Gi\u1EA3m th\xEAm 15% ph\xED b\u1EA3o hi\u1EC3m</div> <div class="moxe-tier-benefit">\u01AFu ti\xEAn h\u1ED7 tr\u1EE3 24/7</div> </div> </div> </div> </section> <!-- FAQ --> <section class="section"> <div class="section-head"> <div> <p class="section-eyebrow">C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p</p> <h2 class="section-title">V\u1EC1 ph\u1EA1t ngu\u1ED9i & ti\u1EC7n \xEDch xe</h2> </div> </div> <div class="faq-list"> <div class="faq-item"> <button class="faq-q" onclick="toggleFaq(this)">Ph\u1EA1t ngu\u1ED9i l\xE0 g\xEC? Bao l\xE2u th\xEC c\xF3 k\u1EBFt qu\u1EA3 tr\xEAn h\u1EC7 th\u1ED1ng?</button> <div class="faq-a">Ph\u1EA1t ngu\u1ED9i l\xE0 h\xECnh th\u1EE9c x\u1EED ph\u1EA1t vi ph\u1EA1m giao th\xF4ng qua h\xECnh \u1EA3nh t\u1EEB camera gi\xE1m s\xE1t, kh\xF4ng d\u1EEBng xe t\u1EA1i ch\u1ED7. Vi ph\u1EA1m th\u01B0\u1EDDng xu\u1EA5t hi\u1EC7n tr\xEAn h\u1EC7 th\u1ED1ng c\u1EE7a C\u1EE5c CSGT sau 3 - 10 ng\xE0y k\u1EC3 t\u1EEB th\u1EDDi \u0111i\u1EC3m vi ph\u1EA1m. MoMo \u0111\u1ED3ng b\u1ED9 d\u1EEF li\u1EC7u n\xE0y h\xE0ng tu\u1EA7n.</div> </div> <div class="faq-item"> <button class="faq-q" onclick="toggleFaq(this)">Tra ph\u1EA1t ngu\u1ED9i tr\xEAn MoMo c\xF3 m\u1EA5t ph\xED kh\xF4ng?</button> <div class="faq-a">Ho\xE0n to\xE0n mi\u1EC5n ph\xED v\xE0 kh\xF4ng gi\u1EDBi h\u1EA1n s\u1ED1 l\u1EA7n tra c\u1EE9u. MoMo c\u0169ng kh\xF4ng y\xEAu c\u1EA7u \u0111\u0103ng nh\u1EADp v\xE0 kh\xF4ng l\u01B0u bi\u1EC3n s\u1ED1 b\u1EA1n nh\u1EADp khi tra c\u1EE9u tr\xEAn web.</div> </div> <div class="faq-item"> <button class="faq-q" onclick="toggleFaq(this)">C\xF3 n\u1ED9p ph\u1EA1t ngu\u1ED9i online \u0111\u01B0\u1EE3c kh\xF4ng?</button> <div class="faq-a">\u0110\u01B0\u1EE3c. Sau khi x\xE1c nh\u1EADn vi ph\u1EA1m v\xE0 nh\u1EADn quy\u1EBFt \u0111\u1ECBnh x\u1EED ph\u1EA1t, b\u1EA1n c\xF3 th\u1EC3 n\u1ED9p ph\u1EA1t tr\u1EF1c tuy\u1EBFn qua MoMo (k\u1EBFt n\u1ED1i C\u1ED5ng D\u1ECBch v\u1EE5 c\xF4ng) m\xE0 kh\xF4ng c\u1EA7n \u0111\u1EBFn kho b\u1EA1c.</div> </div> <div class="faq-item"> <button class="faq-q" onclick="toggleFaq(this)">Kh\xF4ng mua b\u1EA3o hi\u1EC3m TNDS c\xF3 sao kh\xF4ng?</button> <div class="faq-a">\xD4 t\xF4 kh\xF4ng c\xF3 TNDS b\u1EAFt bu\u1ED9c b\u1ECB ph\u1EA1t 400.000 - 600.000\u0111 (xe m\xE1y 100.000 - 200.000\u0111) v\xE0 \xF4 t\xF4 s\u1EBD kh\xF4ng \u0111\u1EE7 \u0111i\u1EC1u ki\u1EC7n \u0111\u0103ng ki\u1EC3m. Gi\u1EA5y ch\u1EE9ng nh\u1EADn \u0111i\u1EC7n t\u1EED mua qua MoMo c\xF3 gi\xE1 tr\u1ECB ph\xE1p l\xFD \u0111\u1EA7y \u0111\u1EE7.</div> </div> <div class="faq-item"> <button class="faq-q" onclick="toggleFaq(this)">Auto-Topup ePass tr\u1EEB ti\u1EC1n t\u1EEB \u0111\xE2u?</button> <div class="faq-a">B\u1EA1n ch\u1ECDn ngu\u1ED3n ti\u1EC1n khi c\u1EA5u h\xECnh: V\xED MoMo ho\u1EB7c V\xED Tr\u1EA3 Sau. Khi s\u1ED1 d\u01B0 ePass xu\u1ED1ng d\u01B0\u1EDBi ng\u01B0\u1EE1ng \u0111\xE3 \u0111\u1EB7t, h\u1EC7 th\u1ED1ng t\u1EF1 n\u1EA1p \u0111\xFAng s\u1ED1 ti\u1EC1n b\u1EA1n ch\u1ECDn v\xE0 g\u1EEDi th\xF4ng b\xE1o x\xE1c nh\u1EADn sau m\u1ED7i l\u1EA7n n\u1EA1p.</div> </div> </div> </section> </div>  <section class="section" id="chi-phi-xe"> <div style="max-width:var(--content);margin:0 auto;padding:0 20px"> <div class="section-head"> <div> <h2 class="section-title">Nu\xF4i xe t\u1ED1n bao nhi\xEAu m\u1ED7i th\xE1ng?</h2> <p class="section-desc">Nh\u1EADp th\xF3i quen di chuy\u1EC3n, h\u1EC7 th\u1ED1ng t\xEDnh t\u1ED5ng chi ph\xED th\u1EF1c t\u1EBF g\u1ED3m x\u0103ng, b\u1EA3o hi\u1EC3m, b\u1EA3o d\u01B0\u1EE1ng, \u0111\u0103ng ki\u1EC3m v\xE0 ph\xED ETC.</p> </div> </div> <div class="vc-wrap"> <!-- FORM --> <div class="vc-form"> <div class="vc-field"> <div class="vc-label">Lo\u1EA1i ph\u01B0\u01A1ng ti\u1EC7n</div> <div class="vc-pills" id="vc-vehicle-pills"> <button class="vc-pill on" data-vc-vehicle="oto"><i data-lucide="car" width="14" height="14" style="vertical-align:middle;margin-right:5px"></i>Sedan</button> <button class="vc-pill" data-vc-vehicle="oto" data-vc-subtype="suv"><i data-lucide="car" width="14" height="14" style="vertical-align:middle;margin-right:5px"></i>SUV / Crossover</button> <button class="vc-pill" data-vc-vehicle="oto" data-vc-subtype="hybrid"><i data-lucide="zap" width="14" height="14" style="vertical-align:middle;margin-right:5px"></i>Hybrid / EV</button> <button class="vc-pill" data-vc-vehicle="xemay"><i data-lucide="bike" width="14" height="14" style="vertical-align:middle;margin-right:5px"></i>Xe m\xE1y</button> </div> </div> <div class="vc-field" id="vc-fuel-field"> <div class="vc-label">Lo\u1EA1i nhi\xEAn li\u1EC7u</div> <div class="vc-pills" id="vc-fuel-pills"> <button class="vc-pill on" data-vc-fuel="ron95">E10 RON 95</button> <button class="vc-pill" data-vc-fuel="e5">E5 RON 92</button> <button class="vc-pill" data-vc-fuel="diesel">Diesel</button> </div> </div> <div class="vc-field"> <div class="vc-label">Km \u0111i m\u1ED7i th\xE1ng</div> <div class="vc-slider-row"> <input class="vc-slider" type="range" id="vc-km" min="200" max="5000" step="100" value="1500"> <span class="vc-slider-val" id="vc-km-val">1.500 km</span> </div> </div> <div class="vc-field" id="vc-consumption-field"> <div class="vc-label">M\u1EE9c ti\xEAu th\u1EE5 nhi\xEAn li\u1EC7u</div> <div class="vc-slider-row"> <input class="vc-slider" type="range" id="vc-consume" min="4" max="20" step="0.5" value="10"> <span class="vc-slider-val" id="vc-consume-val">10 L/100km</span> </div> </div> <div class="vc-field"> <div class="vc-label">C\xE1c chi ph\xED c\u1ED1 \u0111\u1ECBnh</div> <div class="vc-toggle-row"> <span class="vc-toggle-label">B\u1EA3o hi\u1EC3m TNDS</span> <label class="vc-toggle"><input type="checkbox" id="vc-tnds" checked><span class="vc-toggle-track"></span></label> </div> <div class="vc-toggle-row"> <span class="vc-toggle-label">B\u1EA3o hi\u1EC3m v\u1EADt ch\u1EA5t xe</span> <label class="vc-toggle"><input type="checkbox" id="vc-vcx"><span class="vc-toggle-track"></span></label> </div> <div class="vc-toggle-row"> <span class="vc-toggle-label">Ph\xED \u0111\u01B0\u1EDDng b\u1ED9 (theo n\u0103m)</span> <label class="vc-toggle"><input type="checkbox" id="vc-road" checked><span class="vc-toggle-track"></span></label> </div> <div class="vc-toggle-row"> <span class="vc-toggle-label">ETC / ph\xED cao t\u1ED1c</span> <label class="vc-toggle"><input type="checkbox" id="vc-etc" checked><span class="vc-toggle-track"></span></label> </div> <div class="vc-toggle-row"> <span class="vc-toggle-label">B\u1EA3o d\u01B0\u1EE1ng \u0111\u1ECBnh k\u1EF3</span> <label class="vc-toggle"><input type="checkbox" id="vc-maintenance" checked><span class="vc-toggle-track"></span></label> </div> <div class="vc-toggle-row"> <span class="vc-toggle-label">\u0110\u0103ng ki\u1EC3m (ph\xE2n b\u1ED5 theo th\xE1ng)</span> <label class="vc-toggle"><input type="checkbox" id="vc-inspection" checked><span class="vc-toggle-track"></span></label> </div> </div> </div> <!-- RESULT --> <div class="vc-result"> <div class="vc-total"> <div class="vc-total-label">T\u1ED5ng chi ph\xED \u01B0\u1EDBc t\xEDnh</div> <div class="vc-total-num" id="vc-total-num">\u2014</div> <div class="vc-total-unit">/th\xE1ng &nbsp;\xB7&nbsp; <span id="vc-total-year">\u2014</span>/n\u0103m</div> </div> <div class="vc-chart-wrap"> <svg id="vc-donut" viewBox="0 0 140 140"></svg> <div class="vc-chart-center"> <div class="vc-chart-center-num" id="vc-chart-center-num">\u2014</div> <div class="vc-chart-center-sub">\u0111/km</div> </div> </div> <div class="vc-breakdown" id="vc-breakdown"></div> <div class="vc-insight" id="vc-insight"></div> <button class="vc-cta" onclick="window.open('https://momo.vn','_blank')">T\u1ED1i \u01B0u chi ph\xED xe v\u1EDBi MoMo \u2192</button> </div> </div> </div> </section>  <section class="section" id="knowledge-hub"> <div class="section-inner"> <div class="section-head"> <div> <h2 class="section-title">Ch\u1EE7 xe c\u1EA7n bi\u1EBFt</h2> </div> <a class="kh-see-all" href="https://momo.vn/tin-tuc" target="_blank" rel="noreferrer">Xem t\u1EA5t c\u1EA3 b\xE0i vi\u1EBFt
<i data-lucide="chevron-right" style="width:16px;height:16px"></i> </a> </div> <div class="kh-grid"> <a class="kh-card kh-card--featured" href="https://momo.vn/tin-tuc" target="_blank" rel="noreferrer"> <div class="kh-card-img" style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%);"> <div class="kh-card-img-icon"> <i data-lucide="info" style="width:14px;height:14px"></i> </div> </div> <div class="kh-card-body"> <span class="kh-tag">Ph\u1EA1t ngu\u1ED9i</span> <h3 class="kh-card-title">B\u1ECB ph\u1EA1t ngu\u1ED9i ph\u1EA3i l\xE0m g\xEC? Quy tr\xECnh n\u1ED9p ph\u1EA1t v\xE0 kh\xE1ng ngh\u1ECB m\u1EDBi nh\u1EA5t 2026</h3> <p class="kh-card-desc">H\u01B0\u1EDBng d\u1EABn \u0111\u1EA7y \u0111\u1EE7 t\u1EEB khi nh\u1EADn th\xF4ng b\xE1o \u0111\u1EBFn thanh to\xE1n: tra c\u1EE9u tr\u1EF1c tuy\u1EBFn, x\xE1c minh \u0111\xFAng l\u1ED7i, n\u1ED9p ph\u1EA1t qua MoMo v\xE0 c\xE1ch kh\xE1ng ngh\u1ECB khi sai.</p> <div class="kh-card-meta"> <i data-lucide="clock" style="width:14px;height:14px"></i>
5 ph\xFAt \u0111\u1ECDc
</div> </div> </a> <div class="kh-side-stack"> <a class="kh-card kh-card--compact" href="https://momo.vn/tin-tuc" target="_blank" rel="noreferrer"> <div class="kh-card-body"> <span class="kh-tag kh-tag--insurance">B\u1EA3o hi\u1EC3m</span> <h3 class="kh-card-title">B\u1EA3o hi\u1EC3m TNDS xe m\xE1y 2026: Gi\xE1, quy\u1EC1n l\u1EE3i v\xE0 c\xE1ch mua online trong 2 ph\xFAt</h3> <div class="kh-card-meta"> <i data-lucide="clock" style="width:14px;height:14px"></i>
4 ph\xFAt \u0111\u1ECDc
</div> </div> </a> <a class="kh-card kh-card--compact" href="https://momo.vn/tin-tuc" target="_blank" rel="noreferrer"> <div class="kh-card-body"> <span class="kh-tag kh-tag--fuel">Gi\xE1 x\u0103ng</span> <h3 class="kh-card-title">X\u0103ng E10 v\xE0 E5: Ch\xEAnh nhau bao nhi\xEAu v\xE0 lo\u1EA1i n\xE0o h\u1EA1i \u0111\u1ED9ng c\u01A1 h\u01A1n?</h3> <div class="kh-card-meta"> <i data-lucide="clock" style="width:14px;height:14px"></i>
3 ph\xFAt \u0111\u1ECDc
</div> </div> </a> <a class="kh-card kh-card--compact" href="https://momo.vn/tin-tuc" target="_blank" rel="noreferrer"> <div class="kh-card-body"> <span class="kh-tag kh-tag--epass">ePass</span> <h3 class="kh-card-title">ePass l\xE0 g\xEC? C\xE1ch \u0111\u0103ng k\xFD, n\u1EA1p ti\u1EC1n v\xE0 d\xF9ng tr\xEAn to\xE0n b\u1ED9 cao t\u1ED1c Vi\u1EC7t Nam</h3> <div class="kh-card-meta"> <i data-lucide="clock" style="width:14px;height:14px"></i>
6 ph\xFAt \u0111\u1ECDc
</div> </div> </a> </div> </div> <div class="kh-row"> <a class="kh-card kh-card--row" href="https://momo.vn/tin-tuc" target="_blank" rel="noreferrer"> <div class="kh-card-body"> <span class="kh-tag">\u0110\u0103ng ki\u1EC3m</span> <h3 class="kh-card-title">\u0110\u0103ng ki\u1EC3m \xF4 t\xF4 2026: Chu k\u1EF3 m\u1EDBi, ph\xED m\u1EDBi v\xE0 danh s\xE1ch \u0111i\u1EC3m \u0111\u0103ng ki\u1EC3m to\xE0n qu\u1ED1c</h3> <div class="kh-card-meta"> <i data-lucide="clock" style="width:14px;height:14px"></i>
5 ph\xFAt \u0111\u1ECDc
</div> </div> </a> <a class="kh-card kh-card--row" href="https://momo.vn/tin-tuc" target="_blank" rel="noreferrer"> <div class="kh-card-body"> <span class="kh-tag kh-tag--cost">Chi ph\xED</span> <h3 class="kh-card-title">Chi ph\xED th\u1EF1c s\u1EDF h\u1EEFu \xF4 t\xF4 t\u1EA1i Vi\u1EC7t Nam: T\xEDnh \u0111\xFAng, t\xEDnh \u0111\u1EE7 \u0111\u1EC3 kh\xF4ng b\u1ECB b\u1EA5t ng\u1EDD</h3> <div class="kh-card-meta"> <i data-lucide="clock" style="width:14px;height:14px"></i>
7 ph\xFAt \u0111\u1ECDc
</div> </div> </a> <a class="kh-card kh-card--row" href="https://momo.vn/tin-tuc" target="_blank" rel="noreferrer"> <div class="kh-card-body"> <span class="kh-tag kh-tag--insurance">B\u1EA3o hi\u1EC3m</span> <h3 class="kh-card-title">So s\xE1nh b\u1EA3o hi\u1EC3m th\xE2n v\u1ECF \xF4 t\xF4 2026: Ch\u1ECDn g\xF3i n\xE0o ti\u1EBFt ki\u1EC7m nh\u1EA5t?</h3> <div class="kh-card-meta"> <i data-lucide="clock" style="width:14px;height:14px"></i>
8 ph\xFAt \u0111\u1ECDc
</div> </div> </a> </div> </div> </section>  <footer class="site-footer"> <div class="footer-inner"> <div class="footer-cols"> <div> <div class="footer-brand">MoMo <em>Xe & Giao Th\xF4ng</em></div> <p class="footer-about">B\u1ED9 ti\u1EC7n \xEDch cho ch\u1EE7 xe tr\xEAn MoMo: tra ph\u1EA1t ngu\u1ED9i, gi\xE1 x\u0103ng d\u1EA7u, n\u1EA1p ePass, b\u1EA3o hi\u1EC3m xe v\xE0 m\u1EA1ng l\u01B0\u1EDBi c\xE2y x\u0103ng \u0111\u1ED1i t\xE1c to\xE0n qu\u1ED1c.</p> </div> <div class="footer-col"> <h4>Ti\u1EC7n \xEDch</h4> <a href="#tra-phat-nguoi">Tra ph\u1EA1t ngu\u1ED9i</a> <a href="/phat-nguoi-nop-qua-momo">N\u1ED9p ph\u1EA1t vi ph\u1EA1m</a> <a href="/tien-ich-giao-thong/gia-xang">Gi\xE1 x\u0103ng h\xF4m nay</a> <a href="/epass">N\u1EA1p ePass</a> <a href="#bao-hiem">B\u1EA3o hi\u1EC3m TNDS</a> <a href="#cuu-ho">C\u1EE9u h\u1ED9 xe m\xE1y</a> <a href="#parking">B\xE3i \u0111\u1ED7 xe</a> </div> <div class="footer-col"> <h4>Tra c\u1EE9u ph\u1ED5 bi\u1EBFn</h4> <a href="#tra-phat-nguoi">Ph\u1EA1t ngu\u1ED9i TP.HCM</a> <a href="#tra-phat-nguoi">Ph\u1EA1t ngu\u1ED9i H\xE0 N\u1ED9i</a> <a href="/tien-ich-giao-thong/gia-xang">Gi\xE1 x\u0103ng RON 95</a> <a href="/tien-ich-giao-thong/gia-xang">Gi\xE1 d\u1EA7u Diesel</a> </div> <div class="footer-col"> <h4>MoMo</h4> <a href="#" onclick="toast('V\u1EC1 MoMo...');return false">V\u1EC1 ch\xFAng t\xF4i</a> <a href="#" onclick="toast('\u0110i\u1EC1u kho\u1EA3n...');return false">\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng</a> <a href="#" onclick="toast('B\u1EA3o m\u1EADt...');return false">Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt</a> </div> </div> <div class="footer-legal"> <span>\xA9 2026 M_Service. Prototype n\u1ED9i b\u1ED9 - Research Spec, kh\xF4ng ph\u1EA3i production.</span> <span>D\u1EEF li\u1EC7u demo. Gi\xE1 v\xE0 th\xF4ng tin ch\u1EC9 mang t\xEDnh minh h\u1ECDa.</span> </div> </div> </footer> <div id="toast"></div> <script>
  /* \u2500\u2500 data \u2500\u2500 */
  const GAS = {
    1: [
      { name: 'E10 RON 95-III', sub: 'X\u0103ng sinh h\u1ECDc cao c\u1EA5p', price: '22.850', change: '\u25B2 1.420\u0111', dir: 'up' },
      { name: 'E5 RON 92', sub: 'X\u0103ng sinh h\u1ECDc', price: '22.380', change: '\u25B2 1.300\u0111', dir: 'up' },
      { name: 'Diesel 0.05S', sub: 'D\u1EA7u \xF4 t\xF4', price: '27.620', change: '\u25B2 1.860\u0111', dir: 'up' },
    ],
    2: [
      { name: 'E10 RON 95-III', sub: 'V\xF9ng 2', price: '23.300', change: '\u25B2 1.420\u0111', dir: 'up' },
      { name: 'E5 RON 92', sub: 'V\xF9ng 2', price: '22.820', change: '\u25B2 1.300\u0111', dir: 'up' },
      { name: 'Diesel 0.05S', sub: 'V\xF9ng 2', price: '28.170', change: '\u25B2 1.860\u0111', dir: 'up' },
    ],
  };

  const INSURERS = {
    tnds: [
      { code: 'MIC', color: '#B71C1C', name: 'MIC B\u1EA3o hi\u1EC3m', perk: 'Sedan, SUV, Hatchback', price: '489.000', best: true },
      { code: 'PTI', color: '#0D47A1', name: 'PTI B\u1EA3o hi\u1EC3m', perk: 'Sedan, SUV, Pickup', price: '499.000' },
      { code: 'BM', color: '#00695C', name: 'B\u1EA3o Minh', perk: 'SUV, Crossover, MPV', price: '510.000' },
      { code: 'BV', color: '#1565C0', name: 'B\u1EA3o Vi\u1EC7t', perk: 'Sedan, Hybrid, EV', price: '520.000' },
      { code: 'PVI', color: '#4527A0', name: 'PVI B\u1EA3o hi\u1EC3m', perk: 'SUV, Pickup, Van', price: '525.000' },
    ],
    vcx: [
      { code: 'LBT', color: '#1B5E20', name: 'Liberty B\u1EA3o hi\u1EC3m', perk: 'Sedan, SUV, MPV', price: '4.200.000', best: true },
      { code: 'MIC', color: '#B71C1C', name: 'MIC B\u1EA3o hi\u1EC3m', perk: 'VinFast, EV, Sedan', price: '4.500.000' },
      { code: 'PTI', color: '#0D47A1', name: 'PTI B\u1EA3o hi\u1EC3m', perk: 'Pickup, SUV \u0111\u1ECBa h\xECnh', price: '4.650.000' },
      { code: 'BM', color: '#00695C', name: 'B\u1EA3o Minh', perk: 'SUV, Crossover, MPV', price: '4.800.000' },
      { code: 'BV', color: '#1565C0', name: 'B\u1EA3o Vi\u1EC7t', perk: 'Sedan, Hybrid, EV', price: '4.950.000' },
    ],
  };

  const INS_CONTENT = {
    tnds: {
      title: 'B\u1EA3o hi\u1EC3m TNDS',
      desc: 'Ph\xED tham kh\u1EA3o cho \xF4 t\xF4 con d\u01B0\u1EDBi 6 ch\u1ED7.',
      eduTitle: 'Kh\xF4ng c\xF3 TNDS b\u1ECB ph\u1EA1t bao nhi\xEAu?',
      eduBody1: '\xD4 t\xF4 kh\xF4ng c\xF3 b\u1EA3o hi\u1EC3m TNDS b\u1EAFt bu\u1ED9c b\u1ECB ph\u1EA1t <strong>400.000 - 600.000\u0111</strong> theo Ngh\u1ECB \u0111\u1ECBnh 100/2019, v\xE0 kh\xF4ng th\u1EC3 \u0111\u0103ng ki\u1EC3m.',
      eduBody2: 'Gi\u1EA5y ch\u1EE9ng nh\u1EADn \u0111i\u1EC7n t\u1EED mua qua MoMo c\xF3 gi\xE1 tr\u1ECB ph\xE1p l\xFD t\u01B0\u01A1ng \u0111\u01B0\u01A1ng b\u1EA3n gi\u1EA5y theo Ngh\u1ECB \u0111\u1ECBnh 67/2023.',
      compareTitle: 'Ph\xED TNDS 1 n\u0103m \xB7 \xD4 t\xF4 d\u01B0\u1EDBi 6 ch\u1ED7',
      buyLabel: 'TNDS',
    },
    vcx: {
      title: 'B\u1EA3o hi\u1EC3m th\xE2n v\u1ECF',
      desc: 'Ph\xED tham kh\u1EA3o cho xe c\xF3 gi\xE1 tr\u1ECB ~600 tri\u1EC7u, t\u1EF7 l\u1EC7 ph\xED 0.7-0.825%/n\u0103m.',
      eduTitle: 'Th\xE2n v\u1ECF b\u1EA3o v\u1EC7 xe b\u1EA1n kh\u1ECFi \u0111i\u1EC1u g\xEC?',
      eduBody1: 'B\u1EA3o hi\u1EC3m th\xE2n v\u1ECF (VCX) b\u1ED3i th\u01B0\u1EDDng thi\u1EC7t h\u1EA1i do <strong>tai n\u1EA1n, va ch\u1EA1m, tr\u1ED9m c\u1EAFp, ch\xE1y n\u1ED5, thi\xEAn tai</strong> - nh\u1EEFng r\u1EE7i ro TNDS b\u1EAFt bu\u1ED9c kh\xF4ng chi tr\u1EA3.',
      eduBody2: '\u0110\xE2y l\xE0 b\u1EA3o hi\u1EC3m t\u1EF1 nguy\u1EC7n, nh\u01B0ng th\u01B0\u1EDDng b\u1EAFt bu\u1ED9c n\u1EBFu xe mua tr\u1EA3 g\xF3p theo y\xEAu c\u1EA7u ng\xE2n h\xE0ng.',
      compareTitle: 'Ph\xED th\xE2n v\u1ECF 1 n\u0103m \xB7 Xe ~600 tri\u1EC7u',
      buyLabel: 'Th\xE2n v\u1ECF',
    },
  };

  var insTab = 'tnds';

  function switchInsTab(tab, btn) {
    insTab = tab;
    document.querySelectorAll('.ins-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    const c = INS_CONTENT[tab];
    document.getElementById('ins-title').textContent = c.title;
    document.getElementById('ins-desc').textContent = c.desc;
    document.getElementById('ins-edu-title').textContent = c.eduTitle;
    document.getElementById('ins-edu-body1').innerHTML = c.eduBody1;
    document.getElementById('ins-edu-body2').textContent = c.eduBody2;
    document.getElementById('ins-compare-title').textContent = c.compareTitle;
    renderInsurers();
  }

  /* \u2500\u2500 render \u2500\u2500 */
  function renderGas(region) {
    document.getElementById('gasTable').innerHTML = GAS[region].map(g => \`
      <div class="gas-row">
        <div><div class="gr-name">\${g.name}</div><div class="gr-sub">\${g.sub}</div></div>
        <div class="gr-right">
          <span class="gr-badge \${g.dir}">\${g.change}</span>
          <span class="gr-price">\${g.price}<span class="gr-unit"> \u0111/l\xEDt</span></span>
        </div>
      </div>\`).join('');
  }

  function renderInsurers() {
    const list = INSURERS[insTab];
    const label = INS_CONTENT[insTab].buyLabel;
    document.getElementById('insList').innerHTML = list.map(i => \`
      <div class="ins-row">
        <div class="ins-logo" style="background:\${i.color}">\${i.code}</div>
        <div class="ins-info">
          <div class="ins-name">\${i.name}\${i.best ? '<span class="ins-best">R\u1EBA NH\u1EA4T</span>' : ''}</div>
          <div class="ins-perk">\${i.perk}</div>
        </div>
        <div class="ins-price">\${i.price}<small>\u0111/n\u0103m</small></div>
        <button class="ins-buy" onclick="toast('Mua \${label} \${i.name}...')">Mua ngay</button>
      </div>\`).join('');
  }

  /* \u2500\u2500 interactions \u2500\u2500 */
  function setRegion(btn, region) {
    document.querySelectorAll('.grt').forEach(t => t.classList.remove('on'));
    btn.classList.add('on');
    renderGas(region);
  }

  // \u2500\u2500 LOOKUP \u2014 re-use phat-nguoi logic \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  const VEHICLE_LABELS = { oto: '\xD4 t\xF4', xemay: 'Xe m\xE1y', xedien: 'Xe m\xE1y \u0111i\u1EC7n' };
  const MOCK_VIOLATIONS = {
    '29A12345': {
      plate: '29A12345',
      violations: [
        {
          id: 'v1', type: 'V\u01B0\u1EE3t \u0111\xE8n \u0111\u1ECF', severity: 'red',
          date: '15/06/2026', time: '08:23',
          road: 'Ng\xE3 t\u01B0 Khu\u1EA5t Duy Ti\u1EBFn - Nguy\u1EC5n Tr\xE3i',
          unit: 'Ph\xF2ng CSGT - C\xF4ng an TP. H\xE0 N\u1ED9i',
          status: 'Ch\u01B0a x\u1EED l\xFD',
          fine: { oto: '4.000.000 - 6.000.000', xemay: '800.000 - 1.000.000', xedien: '800.000 - 1.000.000' },
          article: { title: 'V\u01B0\u1EE3t \u0111\xE8n \u0111\u1ECF b\u1ECB ph\u1EA1t bao nhi\xEAu? M\u1EE9c ph\u1EA1t \xF4 t\xF4, xe m\xE1y 2026', url: '/mospark-blog/vuot-den-do-bi-phat-bao-nhieu' },
        },
        {
          id: 'v2', type: 'Qu\xE1 t\u1ED1c \u0111\u1ED9 t\u1EEB 20-35 km/h', severity: 'amber',
          date: '20/06/2026', time: '14:47',
          road: '\u0110\u01B0\u1EDDng V\xE0nh \u0111ai 3, \u0111o\u1EA1n Km 8+200',
          unit: 'Ph\xF2ng CSGT - C\xF4ng an TP. H\xE0 N\u1ED9i',
          status: 'Ch\u01B0a x\u1EED l\xFD',
          fine: { oto: '3.000.000 - 5.000.000', xemay: '600.000 - 800.000', xedien: '600.000 - 800.000' },
          article: { title: 'Ph\u1EA1t qu\xE1 t\u1ED1c \u0111\u1ED9 2026: B\u1EA3ng m\u1EE9c ph\u1EA1t chi ti\u1EBFt theo t\u1EEBng lo\u1EA1i xe', url: '/mospark-blog/phat-qua-toc-do-2026' },
        },
      ],
    },
  };

  function iconSvgHub(name) {
    const map = {
      calendar: () => licon('Calendar', 13, 2),
      location: () => licon('MapPin', 13, 2),
      arrow:    () => licon('ChevronRight', 14, 2.5),
      momo:     () => licon('Shield', 16, 2),
      phone:    () => licon('Smartphone', 16, 2),
    };
    return map[name] ? map[name]() : '';
  }

  function renderViolationCard(v, vehicle) {
    const fine = v.fine[vehicle] || v.fine.oto;
    return \`
      <div class="vr-card">
        <div class="vr-card-main">
          <div class="vr-violation-bar\${v.severity === 'red' ? ' is-red' : ''}"></div>
          <div class="vr-card-body">
            <div class="vr-name-block">
              <div class="vr-violation-name">\${v.type}</div>
              <div class="vr-meta-line">\${iconSvgHub('calendar')} \${v.date} \${v.time} &nbsp;\xB7&nbsp; \${iconSvgHub('location')} \${v.road}</div>
            </div>
            <div class="vr-fine-block">
              <div class="vr-fine-amount">\${fine}\u0111</div>
              <div class="vr-fine-unit">m\u1EE9c ph\u1EA1t tham kh\u1EA3o</div>
            </div>
            <span class="vr-status-pill">\${v.status}</span>
          </div>
        </div>
        <div class="vr-card-footer">
          <a class="vr-guide-link" href="\${v.article.url}">\${v.article.title} \${iconSvgHub('arrow')}</a>
        </div>
      </div>\`;
  }

  function renderViolationSection(data, vehicle) {
    const vLabel = VEHICLE_LABELS[vehicle] || '\xD4 t\xF4';
    const count = data.violations.length;
    const section = document.getElementById('violationResultSection');
    const inner = document.getElementById('violationResultInner');
    if (!section || !inner) return;

    inner.innerHTML = \`
      <div class="vr-header">
        <div class="vr-header-left">
          <span class="vr-plate">\${data.plate}</span>
          <span class="vr-vehicle-tag">\${vLabel}</span>
        </div>
        <span class="vr-status-badge">\${count} vi ph\u1EA1m ch\u1EDD x\u1EED l\xFD</span>
      </div>
      <div class="vr-list">
        \${data.violations.map(v => renderViolationCard(v, vehicle)).join('')}
      </div>
      <div class="vr-actions">
        <button class="vr-btn-primary" onclick="window.open('https://momo.vn','_blank')">\${iconSvgHub('momo')} N\u1ED9p ph\u1EA1t qua MoMo</button>
        <button class="vr-btn-secondary">\${iconSvgHub('phone')} Xem chi ti\u1EBFt tr\xEAn App</button>
      </div>\`;

    section.classList.add('is-open');
    section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  /* \u2500\u2500 PLATE HUB \u2500\u2500 */
  (function () {
    const SAVED_KEY = 'vh_saved_plate';
    const plateInput = document.getElementById('plateInput');
    const plateSubmit = document.getElementById('plateSubmit');
    const plateBox = document.getElementById('plateBox');

    const PROVINCE_MAP = {
      '11':'Cao B\u1EB1ng','12':'L\u1EA1ng S\u01A1n','14':'Qu\u1EA3ng Ninh',
      '15':'H\u1EA3i Ph\xF2ng','16':'H\u1EA3i Ph\xF2ng','17':'Th\xE1i B\xECnh','18':'Nam \u0110\u1ECBnh',
      '19':'Th\xE1i Nguy\xEAn','20':'V\u0129nh Ph\xFAc','21':'H\xE0 Giang','22':'Tuy\xEAn Quang',
      '23':'L\xE0o Cai','24':'Y\xEAn B\xE1i','25':'H\xF2a B\xECnh','26':'H\xE0 Nam',
      '27':'B\u1EAFc Giang','28':'H\xE0 N\u1ED9i','29':'H\xE0 N\u1ED9i','30':'H\xE0 N\u1ED9i',
      '31':'H\xE0 N\u1ED9i','32':'H\xE0 N\u1ED9i','33':'H\xE0 N\u1ED9i','34':'H\u1EA3i D\u01B0\u01A1ng',
      '35':'Ninh B\xECnh','36':'Thanh H\xF3a','37':'Ngh\u1EC7 An','38':'H\xE0 T\u0129nh',
      '39':'\u0110\u1ED3ng Nai','40':'H\xE0 Nam','43':'\u0110\xE0 N\u1EB5ng','47':'\u0110\u1EAFk L\u1EAFk',
      '48':'\u0110\u1EAFk N\xF4ng','49':'L\xE2m \u0110\u1ED3ng',
      '51':'TP. H\u1ED3 Ch\xED Minh','52':'TP. H\u1ED3 Ch\xED Minh','53':'TP. H\u1ED3 Ch\xED Minh',
      '54':'TP. H\u1ED3 Ch\xED Minh','55':'TP. H\u1ED3 Ch\xED Minh','56':'TP. H\u1ED3 Ch\xED Minh',
      '57':'TP. H\u1ED3 Ch\xED Minh','58':'TP. H\u1ED3 Ch\xED Minh','59':'TP. H\u1ED3 Ch\xED Minh',
      '60':'\u0110\u1ED3ng Nai','61':'B\xECnh D\u01B0\u01A1ng','62':'Ti\u1EC1n Giang','63':'Long An',
      '64':'V\u0129nh Long','65':'C\u1EA7n Th\u01A1','66':'\u0110\u1ED3ng Th\xE1p','67':'An Giang',
      '68':'Ki\xEAn Giang','69':'C\xE0 Mau','70':'T\xE2y Ninh','71':'B\u1EBFn Tre',
      '72':'B\xE0 R\u1ECBa - V\u0169ng T\xE0u','73':'B\xECnh Ph\u01B0\u1EDBc','75':'Th\u1EEBa Thi\xEAn Hu\u1EBF',
      '76':'Qu\u1EA3ng Ng\xE3i','77':'B\xECnh \u0110\u1ECBnh','78':'Ph\xFA Y\xEAn','79':'Kh\xE1nh H\xF2a',
      '81':'Gia Lai','82':'Kon Tum','83':'S\xF3c Tr\u0103ng','84':'Tr\xE0 Vinh',
      '85':'H\u1EADu Giang','86':'B\xECnh Thu\u1EADn','88':'V\u0129nh Long','92':'Qu\u1EA3ng Nam',
      '93':'B\xECnh Thu\u1EADn','95':'B\u1EA1c Li\xEAu','97':'B\u1EAFc K\u1EA1n','98':'B\u1EAFc Ninh','99':'B\u1EAFc Ninh',
    };

    const plateProvince = document.getElementById('plateProvince');

    function detectProvince(raw) {
      const digits = raw.replace(/[^0-9]/g, '').slice(0, 2);
      return digits.length === 2 ? (PROVINCE_MAP[digits] || null) : null;
    }

    /* Format plate display: uppercase, dot separator */
    let currentVtype = 'oto';

    window.setVtype = function(type) {
      currentVtype = type;
      document.getElementById('vtype-oto').classList.toggle('active', type === 'oto');
      document.getElementById('vtype-xemay').classList.toggle('active', type === 'xemay');
      plateInput.placeholder = type === 'xemay' ? '51A1 \xB7 12345' : '51A \xB7 12345';
      plateInput.focus();
    };

    /* Format bi\u1EC3n s\u1ED1 \u0111\xFAng theo lo\u1EA1i xe:
       - \xD4 t\xF4:        51A-12345   (stripped 8 chars: 2+1+5)
       - Xe m\xE1y m\u1EDBi:  51A1-12345  (stripped 9 chars: 2+1+1+5)
       - Xe m\xE1y c\u0169:   51A1-1234   (stripped 8 chars: 2+1+1+4, ambiguous, default car)  */
    function smartFormatPlate(raw) {
      if (raw.length >= 9) return raw.slice(0, 4) + '-' + raw.slice(4); // moto m\u1EDBi
      if (raw.length > 3)  return raw.slice(0, 3) + '-' + raw.slice(3); // \xF4 t\xF4 / moto c\u0169
      return raw;
    }

    plateInput.addEventListener('input', () => {
      let v = plateInput.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 9);
      plateInput.value = smartFormatPlate(v);

      // Auto-detect: 9 chars \u2192 xe m\xE1y m\u1EDBi
      if (v.length === 9) setVtype('xemay');
      else if (v.length >= 7 && v.length <= 8) setVtype('oto');

      const province = detectProvince(v);
      if (province) {
        plateProvince.textContent = province;
        plateProvince.classList.add('is-visible');
      } else {
        plateProvince.classList.remove('is-visible');
      }
    });

    /* Deterministic fake data from plate string */
    function hashPlate(s) {
      let h = 0;
      for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
      return Math.abs(h);
    }

    function getPlateData(plate) {
      const h = hashPlate(plate);
      const mockData = MOCK_VIOLATIONS[plate.replace('-', '')];
      const violationCount = mockData ? mockData.violations.length : (h % 7 === 0 ? 1 : 0);
      const dkRemain = 15 + (h % 280);
      return { violationCount, dkRemain, mockData };
    }

    function statusClass(days) {
      if (days <= 30) return 'is-alert';
      if (days <= 90) return 'is-warn';
      return 'is-ok';
    }

    const LI = {
      chevron:       licon('ChevronRight', 16, 2),
      alertTriangle: licon('TriangleAlert', 16, 2),
      checkCircle:   licon('CheckCircle2', 16, 2),
      shieldCheck:   licon('ShieldCheck', 16, 2),
      gauge:         licon('Gauge', 16, 2),
      wallet:        licon('Wallet', 16, 2),
      rotateCcw:     licon('RotateCcw', 16, 2),
    };

const USE_CASE_LABELS = {
      'phat-nguoi': 'Nh\u1EADp bi\u1EC3n s\u1ED1 \u0111\u1EC3 ki\u1EC3m tra ph\u1EA1t ngu\u1ED9i',
      'dang-kiem':  'Nh\u1EADp bi\u1EC3n s\u1ED1 \u0111\u1EC3 tra \u0111\u0103ng ki\u1EC3m',
      'gia-xang':   null,
      'bao-hiem':   'Nh\u1EADp bi\u1EC3n s\u1ED1 \u0111\u1EC3 tra b\u1EA3o hi\u1EC3m xe',
    };
    const USE_CASE_NAMES = {
      'phat-nguoi': 'Ph\u1EA1t ngu\u1ED9i',
      'dang-kiem':  '\u0110\u0103ng ki\u1EC3m',
      'gia-xang':   'Gi\xE1 x\u0103ng',
      'bao-hiem':   'B\u1EA3o hi\u1EC3m',
    };
    let activeUseCase = 'dang-kiem';

    const prsWrap  = document.getElementById('plateResultSection');
    const prsInner = document.getElementById('plateResultInner');

    function prsIcon(type) {
      const icons = {
        ok:    licon('CheckCircle2', 22, 2),
        warn:  licon('AlertTriangle', 22, 2),
        alert: licon('XCircle', 22, 2),
        info:  licon('Info', 22, 2),
      };
      return \`<div class="prs-icon \${type}">\${icons[type] || icons.ok}</div>\`;
    }

    const PLATE_REGION = {
      '11':'H\xE0 N\u1ED9i','12':'H\xE0 N\u1ED9i','14':'Qu\u1EA3ng Ninh','15':'H\u1EA3i Ph\xF2ng','16':'H\u1EA3i Ph\xF2ng',
      '17':'Th\xE1i B\xECnh','18':'Nam \u0110\u1ECBnh','19':'H\xE0 Nam','20':'Th\xE1i Nguy\xEAn','21':'Y\xEAn B\xE1i',
      '22':'Tuy\xEAn Quang','23':'H\xE0 Giang','24':'Cao B\u1EB1ng','25':'L\u1EA1ng S\u01A1n','26':'B\u1EAFc Ninh',
      '27':'H\u1EA3i D\u01B0\u01A1ng','28':'H\u01B0ng Y\xEAn','29':'H\xE0 N\u1ED9i','30':'H\xE0 N\u1ED9i','31':'H\xE0 N\u1ED9i',
      '32':'H\xE0 N\u1ED9i','33':'H\xE0 N\u1ED9i','34':'H\u1EA3i D\u01B0\u01A1ng','35':'Ninh B\xECnh','36':'Thanh Ho\xE1',
      '37':'Ngh\u1EC7 An','38':'H\xE0 T\u0129nh','43':'\u0110\xE0 N\u1EB5ng','47':'\u0110\u1EAFk L\u1EAFk','48':'\u0110\u1EAFk N\xF4ng',
      '49':'L\xE2m \u0110\u1ED3ng','50':'TP. HCM','51':'TP. HCM','52':'TP. HCM','53':'TP. HCM',
      '54':'TP. HCM','55':'TP. HCM','56':'TP. HCM','57':'TP. HCM','58':'TP. HCM',
      '59':'TP. HCM','60':'\u0110\u1ED3ng Nai','61':'B\xECnh D\u01B0\u01A1ng','62':'Long An','63':'Ti\u1EC1n Giang',
      '64':'V\u0129nh Long','65':'C\u1EA7n Th\u01A1','66':'\u0110\u1ED3ng Th\xE1p','67':'An Giang','68':'Ki\xEAn Giang',
      '69':'C\xE0 Mau','70':'T\xE2y Ninh','71':'B\u1EBFn Tre','72':'B\xE0 R\u1ECBa-V\u0169ng T\xE0u',
      '73':'B\xECnh Ph\u01B0\u1EDBc','74':'B\xECnh \u0110\u1ECBnh','75':'Th\u1EEBa Thi\xEAn Hu\u1EBF','76':'Qu\u1EA3ng Ng\xE3i',
      '77':'Ph\xFA Y\xEAn','78':'Kh\xE1nh Ho\xE0','79':'Kh\xE1nh Ho\xE0',
    };
    function getRegion(plate) {
      const prefix = plate.replace(/[^0-9]/g,'').slice(0,2);
      return PLATE_REGION[prefix] || PROVINCE_MAP[prefix] || '';
    }

    // Mock vehicle catalog keyed by plate (for demo plates) + hash-based fallback
    const MOCK_VEHICLES = {
      '29A12345': { brand:'Toyota', model:'Fortuner 2.7 4x4 AT', year:2022, color:'Tr\u1EAFng ng\u1ECDc trai' },
      '51G88888': { brand:'Honda', model:'CR-V 1.5L Turbo', year:2021, color:'Xanh d\u01B0\u01A1ng' },
      '30F12345': { brand:'Mazda', model:'CX-5 Premium 2.0', year:2023, color:'\u0110\u1ECF pha l\xEA' },
    };
    const BRANDS_POOL = [
      {b:'Toyota', models:['Vios 1.5G CVT','Camry 2.5Q','Fortuner 2.7 4x4','Innova Cross 2.0']},
      {b:'Honda',  models:['City 1.5RS CVT','CR-V 1.5L Turbo','HR-V L CVT','Civic RS']},
      {b:'Hyundai',models:['Accent 1.4AT','Tucson 2.0 AWD','Santa Fe Premium','Creta 1.5 Turbo']},
      {b:'Mazda',  models:['Mazda3 2.0 Premium','CX-5 2.0 Luxury','CX-8 2.5 Premium']},
      {b:'KIA',    models:['Morning 1.0 AT','Seltos 1.4 Turbo','Sportage 2.0 Premium']},
      {b:'Ford',   models:['Ranger XLT 2.0','Everest Titanium+','Territory Titanium']},
    ];
    const COLORS_POOL = ['Tr\u1EAFng ng\u1ECDc trai','\u0110en \xE1nh kim','B\u1EA1c titan','X\xE1m anthracite','\u0110\u1ECF pha l\xEA','Xanh d\u01B0\u01A1ng navy'];

    function getMockVehicle(plate, vtype) {
      const key = plate.replace(/[^a-zA-Z0-9]/g,'').toUpperCase();
      if (MOCK_VEHICLES[key]) return MOCK_VEHICLES[key];
      if (vtype === 'xemay') {
        const h = hashPlate(plate);
        const xeModels = ['Honda Wave Alpha','Yamaha Exciter 155','Honda SH 160i','Yamaha NVX 155','Honda Air Blade 125'];
        return { brand: h%2===0?'Honda':'Yamaha', model: xeModels[h%xeModels.length], year: 2019+(h%6), color: COLORS_POOL[h%COLORS_POOL.length] };
      }
      const h = hashPlate(plate);
      const pool = BRANDS_POOL[h % BRANDS_POOL.length];
      return { brand: pool.b, model: pool.models[h % pool.models.length], year: 2019+(h%6), color: COLORS_POOL[h%COLORS_POOL.length] };
    }

    function detectVtype(plate) {
      // Xemay m\u1EDBi (9 k\xFD t\u1EF1): 2s\u1ED1 + 1ch\u1EEF + 1s\u1ED1 + 5s\u1ED1  (vd: 51G1-12345)
      // \xD4 t\xF4 (8 k\xFD t\u1EF1):      2s\u1ED1 + 1ch\u1EEF + 5s\u1ED1         (vd: 51A-12345) \u2014 KH\xD4NG match b\u1EB1ng regex
      // Xe m\xE1y c\u0169 (8 k\xFD t\u1EF1): 2s\u1ED1 + 1ch\u1EEF + 1s\u1ED1 + 4s\u1ED1  \u2014 gi\u1EEF nguy\xEAn vtype user ch\u1ECDn
      const raw = plate.replace(/[^a-zA-Z0-9]/g,'').toUpperCase();
      return raw.length === 9 ? 'xemay' : 'oto';
    }

    function renderResult(plate, data, vtype) {
      vtype = detectVtype(plate) === 'xemay' ? 'xemay' : (vtype || currentVtype);
      const { violationCount, mockData } = data;
      const region = getRegion(plate);
      const vtypeLabel = vtype === 'xemay' ? 'Xe m\xE1y' : '\xD4 t\xF4 con';
      const vtypeIcon  = vtype === 'xemay' ? licon('Bike', 22, 1.8) : licon('Car', 22, 1.8);
      const vehicle = getMockVehicle(plate, vtype);

      // timestamp mock
      const now = new Date();
      const ts = \`\${now.getDate().toString().padStart(2,'0')}/\${(now.getMonth()+1).toString().padStart(2,'0')}/\${now.getFullYear()} \u2022 \${now.getHours().toString().padStart(2,'0')}:\${now.getMinutes().toString().padStart(2,'0')}\`;
      const platePrefix = plate.replace(/[^a-zA-Z0-9]/g,'').slice(0,3).toUpperCase();

      // \u2500\u2500 Status pill \u2500\u2500
      const statusPill = violationCount === 0
        ? \`<span class="vr-status-pill ok">\${licon('CheckCircle2', 13, 2.2)} Kh\xF4ng c\xF3 vi ph\u1EA1m m\u1EDBi</span>\`
        : \`<span class="vr-status-pill alert">\${licon('AlertCircle', 13, 2.2)} \${violationCount} vi ph\u1EA1m ch\u1EDD x\u1EED l\xFD</span>\`;

      // \u2500\u2500 Clean state (no violation) \u2500\u2500
      const insUrl = vtype === 'xemay' ? '/bao-hiem/tnds-xe-may' : '/bao-hiem/tnds-oto';
      const cleanHtml = violationCount === 0 ? \`
        <div class="vr-clean-card">
          <div class="vr-clean-icon">\${licon('ShieldCheck', 22, 2)}</div>
          <div class="vr-clean-body">
            <div class="vr-clean-title">Ch\xFAc m\u1EEBng! Xe b\u1EA1n kh\xF4ng c\xF3 vi ph\u1EA1m n\xE0o</div>
            <div class="vr-clean-sub">Xe s\u1EA1ch h\u1ED3 s\u01A1 \u2014 h\xE3y gi\u1EEF v\u1EEFng th\xE0nh t\xEDch n\xE0y. Th\xEAm xe v\xE0o MoMo \u0111\u1EC3 nh\u1EADn nh\u1EAFc nh\u1EDF \u0111\u0103ng ki\u1EC3m, c\u1EA3nh b\xE1o ph\u1EA1t ngu\u1ED9i m\u1EDBi v\xE0 gia h\u1EA1n b\u1EA3o hi\u1EC3m \u0111\xFAng l\xFAc.</div>
            <div class="vr-clean-actions">
              <a class="vr-clean-cta-main" href="/phat-nguoi/goi-theo-doi">\${licon('ShieldCheck', 13, 2.5)} Mua g\xF3i theo d\xF5i ph\u1EA1t ngu\u1ED9i <span class="vr-clean-price-tag">9K/n\u0103m</span></a>
              <button class="vr-clean-cta-sec" onclick="openConsentSheet('\${plate}','\${vtypeLabel}')" style="background:none;border:none;cursor:pointer;font-family:inherit;">\${licon('Plus', 12, 2.5)} Th\xEAm xe v\xE0o MoMo</button>
            </div>
          </div>
        </div>\` : '';

      // \u2500\u2500 Violations \u2500\u2500
      let violationsHtml = '';
      let payBarHtml = '';
      if (violationCount > 0) {
        const violations = mockData ? mockData.violations : [];
        const vCards = violations.map(v => {
          const fine = v.fine ? (v.fine[vtype] || v.fine.oto) : null;
          const sev = v.severity || 'amber';
          const vIcon = sev === 'red' ? licon('FileText', 20, 1.8) : licon('Gauge', 20, 1.8);
          return \`
          <div class="vr-violation">
            <div class="vr-v-bar \${sev}"></div>
            <div style="flex:1;min-width:0">
              <div class="vr-v-content">
                <div class="vr-v-icon \${sev}">\${vIcon}</div>
                <div class="vr-v-info">
                  <div class="vr-v-title">\${v.type}</div>
                  <div class="vr-v-meta">\${licon('Calendar', 11, 2)} \${v.date}\${v.time ? ' '+v.time : ''} &nbsp;\xB7&nbsp; \${licon('MapPin', 11, 2)} \${v.road}</div>
                  \${v.unit ? \`<div class="vr-v-unit">\${licon('Building2', 11, 2)} \${v.unit}</div>\` : ''}
                </div>
                <div class="vr-v-right">
                  \${fine ? \`<div class="vr-v-fine-block"><div class="vr-v-fine">\${fine}\u0111</div><div class="vr-v-fine-label">M\u1EE9c ph\u1EA1t tham kh\u1EA3o</div></div>\` : ''}
                </div>
              </div>
              \${v.article ? \`<div class="vr-v-footer"><a class="vr-v-guide" href="\${v.article.url}">\${licon('BookOpen', 12, 2)} \${v.article.title} \${licon('ChevronRight', 12, 2.5)}</a></div>\` : ''}
            </div>
          </div>\`;
        }).join('');
        violationsHtml = \`
          <div>
            <div class="vr-section-head">
              <span class="vr-section-dot red"></span>
              <span class="vr-section-title">Th\xF4ng tin vi ph\u1EA1m</span>
              <span class="vr-count-pill">\${violationCount}</span>
            </div>
            <div class="vr-violations-wrap">
              <div class="vr-violations">\${vCards}</div>
              <div class="vr-violations-footer">
                <a class="vr-pay-single" href="/phat-nguoi-nop-qua-momo">\${licon('CreditCard', 15, 2.5)} N\u1ED9p ph\u1EA1t \${violationCount} vi ph\u1EA1m qua MoMo</a>
              </div>
            </div>
          </div>\`;
        payBarHtml = \`
          <div class="vr-pay-bar">
            <div class="vr-pay-icon">\${licon('ShieldCheck', 20, 2)}</div>
            <div class="vr-pay-body">
              <div class="vr-pay-title">N\u1ED9p ph\u1EA1t nhanh ch\xF3ng, an to\xE0n</div>
              <div class="vr-pay-sub">Thanh to\xE1n tr\u1EF1c tuy\u1EBFn qua MoMo ch\u1EC9 v\u1EDBi v\xE0i b\u01B0\u1EDBc \u0111\u01A1n gi\u1EA3n</div>
            </div>
            <a class="vr-pay-btn" href="/phat-nguoi-nop-qua-momo">\${licon('CreditCard', 13, 2.5)} N\u1ED9p ph\u1EA1t qua MoMo</a>
          </div>\`;
      }

      // \u2500\u2500 Other services \u2500\u2500
      const dangKiemSub = vtype === 'xemay'
        ? 'Xe m\xE1y ch\u01B0a b\u1EAFt bu\u1ED9c \u0111\u0103ng ki\u1EC3m \u0111\u1ECBnh k\u1EF3 \u2014 nh\u01B0ng h\xE3y ki\u1EC3m tra ngay n\u1EBFu xe tr\xEAn 5 n\u0103m'
        : 'Bi\u1EBFt tr\u01B0\u1EDBc h\u1EA1n \u0111\u0103ng ki\u1EC3m, tr\xE1nh b\u1ECB ph\u1EA1t 800K\u20134 tri\u1EC7u v\xEC qu\xE1 h\u1EA1n. Xem l\u1ECBch tr\u1EF1c ti\u1EBFp trong MoMo';

      // B\u1EA3o hi\u1EC3m rows \u2014 ph\xE2n theo lo\u1EA1i xe
      const insOtoRow = vtype !== 'xemay' ? \`
          <a class="vr-service" href="/bao-hiem-o-to">
            <div class="vr-svc-icon amber">\${licon('ShieldCheck', 20, 1.8)}</div>
            <div class="vr-svc-body">
              <div class="vr-svc-label">B\u1EA3o hi\u1EC3m \xF4 t\xF4</div>
              <div class="vr-svc-sub">TNDS b\u1EAFt bu\u1ED9c t\u1EEB 479K/n\u0103m \xB7 B\u1EA3o hi\u1EC3m v\u1EADt ch\u1EA5t th\xE2n xe t\u1EEB 9 c\xF4ng ty h\xE0ng \u0111\u1EA7u \u2014 so s\xE1nh v\xE0 mua ngay</div>
            </div>
            <div class="vr-svc-right">
              <span class="vr-svc-badge amber">Mua ngay</span>
              <span class="vr-svc-chevron">\${licon('ChevronRight', 15, 2.5)}</span>
            </div>
          </a>\` : '';

      const insXemayRow = \`
          <a class="vr-service" href="/bao-hiem/tnds-xe-may">
            <div class="vr-svc-icon purple">\${licon('Shield', 20, 1.8)}</div>
            <div class="vr-svc-body">
              <div class="vr-svc-label">B\u1EA3o hi\u1EC3m xe m\xE1y\${vtype !== 'xemay' ? ' (TNDS)' : ''}</div>
              <div class="vr-svc-sub">\${vtype === 'xemay'
                ? 'TNDS b\u1EAFt bu\u1ED9c t\u1EEB 66K/n\u0103m \u2014 ki\u1EC3m tra h\u1EA1n b\u1EA3o hi\u1EC3m v\xE0 gia h\u1EA1n nhanh qua MoMo'
                : 'C\xF3 xe m\xE1y trong nh\xE0? Mua TNDS xe m\xE1y t\u1EEB 66K/n\u0103m, x\u1EED l\xFD ho\xE0n to\xE0n tr\xEAn MoMo'}</div>
            </div>
            <div class="vr-svc-right">
              <span class="vr-svc-badge purple">\${vtype === 'xemay' ? 'Gia h\u1EA1n ngay' : 'Mua ngay'}</span>
              <span class="vr-svc-chevron">\${licon('ChevronRight', 15, 2.5)}</span>
            </div>
          </a>\`;

      const servicesHtml = \`
        <div class="vr-services">
          <div class="vr-service" style="cursor:pointer">
            <div class="vr-svc-icon blue">\${licon('ClipboardCheck', 20, 1.8)}</div>
            <div class="vr-svc-body">
              <div class="vr-svc-label">\u0110\u0103ng ki\u1EC3m</div>
              <div class="vr-svc-sub">\${dangKiemSub}</div>
            </div>
            <div class="vr-svc-right">
              <span class="vr-svc-badge blue">M\u1EDF MoMo App</span>
              <span class="vr-svc-chevron">\${licon('ChevronRight', 15, 2.5)}</span>
            </div>
          </div>
          \${insOtoRow}
          \${insXemayRow}
          <a class="vr-service" href="/tien-ich-giao-thong/dinh-gia-xe">
            <div class="vr-svc-icon pink">\${licon('TrendingDown', 20, 1.8)}</div>
            <div class="vr-svc-body">
              <div class="vr-svc-label">\u0110\u1ECBnh gi\xE1 xe</div>
              <div class="vr-svc-sub">Mu\u1ED1n b\xE1n xe kh\xF4ng bi\u1EBFt gi\xE1 h\u1EE3p l\xFD? Nh\u1EADp h\xE3ng, \u0111\u1EDDi xe \u0111\u1EC3 \u01B0\u1EDBc t\xEDnh gi\xE1 th\u1ECB tr\u01B0\u1EDDng ngay</div>
            </div>
            <div class="vr-svc-right">
              <span class="vr-svc-badge gray">Nh\u1EADp th\xEAm</span>
              <span class="vr-svc-chevron">\${licon('ChevronRight', 15, 2.5)}</span>
            </div>
          </a>
          <a class="vr-service" href="/epass/nap-tien-epass">
            <div class="vr-svc-icon green">\${licon('Milestone', 20, 1.8)}</div>
            <div class="vr-svc-body">
              <div class="vr-svc-label">ETC / ePass</div>
              <div class="vr-svc-sub">T\xE0i kho\u1EA3n ETC s\u1EAFp h\u1EBFt ti\u1EC1n? N\u1EA1p ngay qua MoMo \u2014 kh\xF4ng c\u1EA7n ra tr\u1EA1m, kh\xF4ng b\u1ECB ch\u1EB7n c\u1EA7u \u0111\u01B0\u1EDDng</div>
            </div>
            <div class="vr-svc-right">
              <span class="vr-svc-badge" style="background:#f0fdf4;color:#16a34a">N\u1EA1p ngay</span>
              <span class="vr-svc-chevron">\${licon('ChevronRight', 15, 2.5)}</span>
            </div>
          </a>
        </div>\`;

      prsInner.innerHTML = \`
        <div class="vr-wrap">
          <div class="vr-head">
            <div class="vr-car-icon">\${vtypeIcon}</div>
            <div class="vr-head-body">
              <div class="vr-head-label">K\u1EBFt qu\u1EA3 tra c\u1EE9u</div>
              <div class="vr-plate-big">\${plate}</div>
              <div class="vr-head-sub">\${vtypeLabel} \xB7 \${region||platePrefix}</div>
            </div>
            <div class="vr-head-right">
              \${statusPill}
              <button class="vr-reset" onclick="resetPlate()">\${licon('RotateCcw', 10, 2.5)} \u0110\u1ED5i xe</button>
              <span class="vr-head-ts">C\u1EADp nh\u1EADt: \${ts}</span>
            </div>
          </div>
          \${cleanHtml}
          \${violationsHtml}
          \${payBarHtml}
          \${servicesHtml}
        </div>\`;

      prsWrap.style.display = '';
      if (window.lucide) lucide.createIcons();
      prsWrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function showInlinePanel(html) {
      document.getElementById('plateInputArea').style.display = 'none';
      let panel = document.getElementById('pecInlinePanel');
      if (!panel) {
        panel = document.createElement('div');
        panel.id = 'pecInlinePanel';
        document.getElementById('plateInputArea').insertAdjacentElement('afterend', panel);
      }
      panel.innerHTML = html;
      panel.style.display = '';
      if (window.lucide) lucide.createIcons();
    }
    function hideInlinePanel() {
      const p = document.getElementById('pecInlinePanel');
      if (p) p.style.display = 'none';
      document.getElementById('plateInputArea').style.display = '';
    }

    window.selectUseCase = function(btn) {
      const use = btn.dataset.use;
      document.querySelectorAll('.pec-card').forEach(c => c.classList.remove('pec-active'));
      btn.classList.add('pec-active');
      activeUseCase = use;

      if (use === 'gia-xang') {
        const d = new Date(); const day = d.getDate(); const month = d.getMonth()+1;
        showInlinePanel(\`
          <div class="pec-inline pec-fuel">
            <div class="pec-inline-label">Gi\xE1 x\u0103ng d\u1EA7u \u2014 \${day}/\${month < 10 ? '0'+month : month}/2026</div>
            <div class="pec-fuel-rows">
              <div class="pec-fuel-row">
                <span class="pec-fuel-name">E10 RON 95</span>
                <span class="pec-fuel-price">22.850\u0111/L</span>
                <span class="pec-fuel-change pec-down">\u25B2 1.420\u0111</span>
              </div>
              <div class="pec-fuel-row">
                <span class="pec-fuel-name">E5 RON 92</span>
                <span class="pec-fuel-price">22.380\u0111/L</span>
                <span class="pec-fuel-change pec-down">\u25B2 1.300\u0111</span>
              </div>
              <div class="pec-fuel-row">
                <span class="pec-fuel-name">D\u1EA7u diesel 0.05S</span>
                <span class="pec-fuel-price">17.450\u0111/L</span>
                <span class="pec-fuel-change pec-down">\u25BC 295\u0111</span>
              </div>
            </div>
            <a class="pec-inline-cta" href="/tien-ich-giao-thong/gia-xang">Xem \u0111\u1EA7y \u0111\u1EE7 gi\xE1 x\u0103ng d\u1EA7u \u2192</a>
          </div>\`);
        return;
      }
      if (use === 'bao-hiem') {
        showInlinePanel(\`
          <div class="pec-inline pec-bh">
            <div class="pec-inline-label">B\u1EA3o hi\u1EC3m xe tr\xEAn MoMo</div>
            <a class="pec-bh-row" href="/bao-hiem-o-to">
              <i data-lucide="car" width="16" height="16"></i>
              <div class="pec-bh-info"><div class="pec-bh-name">B\u1EA3o hi\u1EC3m \xF4 t\xF4</div><div class="pec-bh-desc">TNDS b\u1EAFt bu\u1ED9c + th\xE2n v\u1ECF</div></div>
              <i data-lucide="chevron-right" width="14" height="14" class="pec-bh-arrow"></i>
            </a>
            <a class="pec-bh-row" href="#bao-hiem">
              <i data-lucide="bike" width="16" height="16"></i>
              <div class="pec-bh-info"><div class="pec-bh-name">B\u1EA3o hi\u1EC3m xe m\xE1y</div><div class="pec-bh-desc">TNDS b\u1EAFt bu\u1ED9c t\u1EEB 66.000\u0111/n\u0103m</div></div>
              <i data-lucide="chevron-right" width="14" height="14" class="pec-bh-arrow"></i>
            </a>
          </div>\`);
        return;
      }
      // plate-based jobs
      hideInlinePanel();
      const label = USE_CASE_LABELS[use];
      document.getElementById('platePanelLabel').textContent = label || 'Nh\u1EADp bi\u1EC3n s\u1ED1 xe c\u1EE7a b\u1EA1n';
      plateInput.focus();
    };

    function submitPlate() {
      const raw = plateInput.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
      if (raw.length < 7) {
        plateBox.style.animation = 'none';
        requestAnimationFrame(() => { plateBox.style.animation = 'plate-shake .35s ease'; });
        plateInput.focus();
        return;
      }
      const plate = smartFormatPlate(raw);
      localStorage.setItem(SAVED_KEY, raw);
      renderResult(plate, getPlateData(raw), currentVtype);
      // Sync bi\u1EC3n s\u1ED1 xu\u1ED1ng section \u0111\u0103ng ki\u1EC3m v\xE0 auto-search
      const dkInput = document.getElementById('dkPlate');
      if (dkInput) { dkInput.value = plate; if (typeof dkSearch === 'function') dkSearch(); }
    }

    function resetPlate() {
      localStorage.removeItem(SAVED_KEY);
      plateInput.value = '';
      plateProvince.classList.remove('is-visible');
      prsWrap.style.display = 'none';
      plateInput.focus();
    }
    window.resetPlate = resetPlate;

    plateSubmit.addEventListener('click', submitPlate);
    plateInput.addEventListener('keydown', e => { if (e.key === 'Enter') submitPlate(); });

    /* Restore saved plate */
    const saved = localStorage.getItem(SAVED_KEY);
    if (saved && saved.length >= 7) {
      const formatted = smartFormatPlate(saved);
      plateInput.value = formatted;
      const province = detectProvince(saved);
      if (province) { plateProvince.textContent = province; plateProvince.classList.add('is-visible'); }
      renderResult(formatted, getPlateData(saved), currentVtype);
    }
  }());

  let epBalance = 245000;
  let epSelectedAmount = 100000;

  function fmtVnd(n) {
    return n.toLocaleString('vi-VN').replace(/\\./g,'.') + '<small>\u0111</small>';
  }
  function updateEpDisplay() {
    const balEl = document.querySelector('.ep-mock-balance');
    if (balEl) balEl.innerHTML = fmtVnd(epBalance);
    const maxBar = 500000;
    const pct = Math.min(100, Math.round(epBalance / maxBar * 100));
    const fill = document.getElementById('epBarFill');
    if (fill) fill.style.width = pct + '%';
    const l\u01B0\u1EE3t = Math.floor(epBalance / 52000);
    const pctEl = document.getElementById('epBarPct');
    if (pctEl) pctEl.textContent = l\u01B0\u1EE3t > 0 ? \`\u0110\u1EE7 ~\${l\u01B0\u1EE3t} l\u01B0\u1EE3t qua tr\u1EA1m\` : 'S\u1EAFp h\u1EBFt ti\u1EC1n';
  }

  function selectEpChip(el, amount) {
    document.querySelectorAll('.ep-chip').forEach(c => c.classList.remove('on'));
    el.classList.add('on');
    epSelectedAmount = amount * 1000;
    const btn = document.getElementById('epTopupBtn');
    if (btn) btn.textContent = \`N\u1EA1p \${amount === 50 ? '50.000' : amount === 100 ? '100.000' : amount === 200 ? '200.000' : '300.000'}\u0111\`;
  }

  function doEpTopup() {
    epBalance += epSelectedAmount;
    updateEpDisplay();
    const btn = document.getElementById('epTopupBtn');
    const origText = btn.textContent;
    btn.textContent = '\u2713 \u0110\xE3 n\u1EA1p th\xE0nh c\xF4ng';
    btn.style.background = '#16a34a';
    setTimeout(() => {
      btn.textContent = origText;
      btn.style.background = '';
    }, 2000);
  }

  function toggleFaq(btn) {
    btn.closest('.faq-item').classList.toggle('open');
  }

  let toastTimer;
  function toast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
  }

  /* nav active state on scroll */
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = ['vehicle-hub', 'gia-xang', 'epass', 'bao-hiem', 'cay-xang', 'cuu-ho', 'parking', 'chi-phi-xe'];
  window.addEventListener('scroll', () => {
    let current = sections[0];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top < 120) current = id;
    });
    navLinks.forEach(l => l.classList.toggle('on', l.getAttribute('href') === '#' + current));
  }, { passive: true });

  renderGas(1);
  renderInsurers();

  /* \u2500\u2500 VEHICLE COST CALCULATOR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  (function () {
    const FUEL_PRICE = { ron95: 20003, e5: 19191, diesel: 21745 };
    const COLORS = ['#2563EB','#7C3AED','#0891B2','#16A34A','#D97706','#6366F1'];

    // Cost constants (VND/month unless noted)
    const COSTS = {
      oto: {
        tnds: Math.round(481000 / 12),         // ~481k/n\u0103m \xF4 t\xF4 d\u01B0\u1EDBi 6 ch\u1ED7
        vcx: Math.round(3500000 / 12),          // ~3.5tr/n\u0103m (gi\xE1 tr\u1ECB xe 500tr, ~0.7%)
        road: Math.round(1560000 / 12),         // ph\xED \u0111\u01B0\u1EDDng b\u1ED9 nh\xF3m 2
        etc: 300000,                            // ph\xED cao t\u1ED1c trung b\xECnh
        maintenance: Math.round(4800000 / 12),  // 2 l\u1EA7n b\u1EA3o d\u01B0\u1EE1ng/n\u0103m ~4.8tr
        inspection: Math.round(340000 / 24),    // \u0111\u0103ng ki\u1EC3m 2 n\u0103m/l\u1EA7n ~340k
        consume: 10,                             // L/100km m\u1EB7c \u0111\u1ECBnh
      },
      xemay: {
        tnds: Math.round(66000 / 12),
        vcx: Math.round(600000 / 12),
        road: Math.round(100000 / 12),
        etc: 0,
        maintenance: Math.round(800000 / 12),
        inspection: Math.round(80000 / 12),
        consume: 3,
      },
      xedien: {
        tnds: Math.round(66000 / 12),
        vcx: Math.round(500000 / 12),
        road: Math.round(100000 / 12),
        etc: 0,
        maintenance: Math.round(400000 / 12),
        inspection: Math.round(80000 / 12),
        consume: 0, // \u0111i\u1EC7n
      },
    };

    let vehicle = 'oto', fuel = 'ron95', subtype = '';

    function fmt(n) {
      if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\\.0$/, '') + ' tr';
      return n.toLocaleString('vi-VN');
    }

    function calcFuel() {
      if (vehicle === 'xedien' || subtype === 'hybrid') {
        const km = +document.getElementById('vc-km').value;
        const rate = subtype === 'hybrid' ? 650 : 87.5;
        return Math.round(km * rate);
      }
      const km = +document.getElementById('vc-km').value;
      const consume = +document.getElementById('vc-consume').value;
      return Math.round(km / 100 * consume * FUEL_PRICE[fuel]);
    }

    function calc() {
      const c = COSTS[vehicle];
      const km = +document.getElementById('vc-km').value;
      const fuelCost = calcFuel();
      const items = [
        { name: 'X\u0103ng / \u0110i\u1EC7n', val: fuelCost, on: true },
        { name: 'B\u1EA3o hi\u1EC3m TNDS', val: c.tnds, on: document.getElementById('vc-tnds').checked },
        { name: 'B\u1EA3o hi\u1EC3m v\u1EADt ch\u1EA5t', val: c.vcx, on: document.getElementById('vc-vcx').checked },
        { name: 'Ph\xED \u0111\u01B0\u1EDDng b\u1ED9', val: c.road, on: document.getElementById('vc-road').checked },
        { name: 'ETC / cao t\u1ED1c', val: c.etc, on: document.getElementById('vc-etc').checked },
        { name: 'B\u1EA3o d\u01B0\u1EE1ng', val: c.maintenance, on: document.getElementById('vc-maintenance').checked },
        { name: '\u0110\u0103ng ki\u1EC3m', val: c.inspection, on: document.getElementById('vc-inspection').checked },
      ];
      const active = items.filter(i => i.on && i.val > 0);
      const total = active.reduce((s, i) => s + i.val, 0);
      const costPerKm = km > 0 ? Math.round(total / km) : 0;
      return { active, total, costPerKm, km };
    }

    function drawDonut(items, total) {
      const svg = document.getElementById('vc-donut');
      const R = 60, r = 40, cx = 70, cy = 70;
      const circumference = 2 * Math.PI * R;
      let offset = 0;
      let paths = '';
      items.forEach((item, i) => {
        const pct = total > 0 ? item.val / total : 0;
        const dash = pct * circumference;
        const gap = circumference - dash;
        // rotate so first segment starts at top
        const rot = (offset / circumference) * 360 - 90;
        paths += \`<circle cx="\${cx}" cy="\${cy}" r="\${R}" fill="none" stroke="\${COLORS[i % COLORS.length]}" stroke-width="20" stroke-dasharray="\${dash.toFixed(2)} \${gap.toFixed(2)}" stroke-dashoffset="0" transform="rotate(\${rot.toFixed(2)} \${cx} \${cy})" />\`;
        offset += dash;
      });
      svg.innerHTML = \`<circle cx="\${cx}" cy="\${cy}" r="\${R}" fill="none" stroke="var(--gray-100)" stroke-width="20"/>\` + paths + \`<circle cx="\${cx}" cy="\${cy}" r="\${r}" fill="white"/>\`;
    }

    function render() {
      const { active, total, costPerKm, km } = calc();

      document.getElementById('vc-total-num').textContent = fmt(total) + '\u0111';
      document.getElementById('vc-total-year').textContent = fmt(total * 12) + '\u0111';
      document.getElementById('vc-chart-center-num').textContent = fmt(costPerKm);

      drawDonut(active, total);

      const breakdown = document.getElementById('vc-breakdown');
      breakdown.innerHTML = active.map((item, i) => {
        const pct = total > 0 ? Math.round(item.val / total * 100) : 0;
        return \`<div class="vc-row">
          <div class="vc-dot" style="background:\${COLORS[i % COLORS.length]}"></div>
          <div class="vc-row-name">\${item.name}</div>
          <div class="vc-row-pct">\${pct}%</div>
          <div class="vc-row-val">\${fmt(item.val)}\u0111</div>
        </div>\`;
      }).join('');

      // insight
      const fuelItem = active[0];
      const fuelPct = total > 0 ? Math.round(fuelItem.val / total * 100) : 0;
      let insight = '';
      const benchmarks = { oto: 850, xemay: 250, xedien: 120 };
      const bench = benchmarks[vehicle];
      if (costPerKm > bench * 1.2) {
        insight = \`Chi ph\xED <strong>\${fmt(costPerKm)}\u0111/km</strong> cao h\u01A1n m\u1EE9c trung b\xECnh \${fmt(bench)}\u0111/km c\u1EE7a xe c\xF9ng lo\u1EA1i. Xem x\xE9t t\u1ED1i \u01B0u l\u1ED9 tr\xECnh ho\u1EB7c b\u1EA3o d\u01B0\u1EE1ng \u0111\u1ECBnh k\u1EF3 \u0111\u1EC3 gi\u1EA3m ti\xEAu hao.\`;
      } else if (costPerKm < bench * 0.85) {
        insight = \`Chi ph\xED <strong>\${fmt(costPerKm)}\u0111/km</strong> t\u1ED1t h\u01A1n m\u1EE9c trung b\xECnh \${fmt(bench)}\u0111/km. Ti\u1EBFp t\u1EE5c duy tr\xEC th\xF3i quen v\u1EADn h\xE0nh hi\u1EC7u qu\u1EA3.\`;
      } else {
        insight = \`Chi ph\xED <strong>\${fmt(costPerKm)}\u0111/km</strong> \u1EDF m\u1EE9c trung b\xECnh. Kho\u1EA3n chi\u1EBFm t\u1EF7 tr\u1ECDng l\u1EDBn nh\u1EA5t: <strong>\${fuelItem.name} (\${fuelPct}%)</strong>.\`;
      }
      document.getElementById('vc-insight').innerHTML = insight;
    }

    function setVehicle(v, st) {
      vehicle = v;
      subtype = st || '';
      document.querySelectorAll('[data-vc-vehicle]').forEach(b => b.classList.remove('on'));
      event && event.target && event.target.classList.add('on');
      const isEV = subtype === 'hybrid';
      const c = COSTS[v];
      const consumeSlider = document.getElementById('vc-consume');
      const defaultConsume = subtype === 'suv' ? 12 : (isEV ? 5 : c.consume);
      consumeSlider.value = defaultConsume;
      document.getElementById('vc-consume-val').textContent = v === 'xedien' ? '\u2014' : defaultConsume + ' L/100km';
      document.getElementById('vc-fuel-field').style.display = (v === 'xedien' || isEV) ? 'none' : '';
      document.getElementById('vc-consumption-field').style.display = (v === 'xedien' || isEV) ? 'none' : '';
      document.getElementById('vc-etc').closest('.vc-toggle-row').style.display = v === 'oto' ? '' : 'none';
      if (isEV) fuel = 'ron95';
      render();
    }

    // vehicle pills
    document.querySelectorAll('[data-vc-vehicle]').forEach(b => {
      b.addEventListener('click', (e) => { event = e; setVehicle(b.dataset.vcVehicle, b.dataset.vcSubtype); });
    });

    // fuel pills
    document.querySelectorAll('[data-vc-fuel]').forEach(b => {
      b.addEventListener('click', () => {
        fuel = b.dataset.vcFuel;
        document.querySelectorAll('[data-vc-fuel]').forEach(x => x.classList.toggle('on', x === b));
        render();
      });
    });

    // sliders
    const kmSlider = document.getElementById('vc-km');
    const consumeSlider = document.getElementById('vc-consume');
    kmSlider.addEventListener('input', () => {
      document.getElementById('vc-km-val').textContent = (+kmSlider.value).toLocaleString('vi-VN') + ' km';
      render();
    });
    consumeSlider.addEventListener('input', () => {
      document.getElementById('vc-consume-val').textContent = consumeSlider.value + ' L/100km';
      render();
    });

    // toggles
    ['vc-tnds','vc-vcx','vc-road','vc-etc','vc-maintenance','vc-inspection'].forEach(id => {
      document.getElementById(id).addEventListener('change', render);
    });

    document.querySelector('[data-vc-vehicle]').classList.add('on');
    setVehicle('oto');
  })();

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 FLIP CARD SECTION \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
const FC_GROUPS = [
  {
    tab: 'An to\xE0n & Ph\xE1p l\xFD',
    cards: [
      { icon:'ShieldAlert', bg:'linear-gradient(135deg,#1a2535 0%,#2d3748 100%)',
        title:'Tra ph\u1EA1t ngu\u1ED9i', desc:'Tra c\u1EE9u vi ph\u1EA1m giao th\xF4ng theo bi\u1EC3n s\u1ED1 xe, to\xE0n qu\u1ED1c.',
        backDesc:'Nh\u1EADp bi\u1EC3n s\u1ED1 xe, h\u1EC7 th\u1ED1ng tra c\u1EE9u ngay vi ph\u1EA1m t\u1EA1i 63 t\u1EC9nh th\xE0nh. Kh\xF4ng c\u1EA7n CMND, kh\xF4ng c\u1EA7n \u0111\u0103ng nh\u1EADp.', href:'/phat-nguoi' },
      { icon:'FileText', bg:'linear-gradient(135deg,#7f1d1d 0%,#b91c1c 100%)',
        title:'N\u1ED9p ph\u1EA1t vi ph\u1EA1m', desc:'N\u1ED9p ph\u1EA1t tr\u1EF1c tuy\u1EBFn ngay tr\xEAn MoMo, kh\xF4ng c\u1EA7n \u0111\u1EBFn kho b\u1EA1c.',
        backDesc:'Sau khi tra ph\u1EA1t ngu\u1ED9i, n\u1ED9p ngay qua MoMo. Bi\xEAn lai \u0111i\u1EC7n t\u1EED g\u1EEDi v\u1EC1 app, h\u1EE3p l\u1EC7 t\u1EA1i CSGT.', href:'/phat-nguoi-nop-qua-momo' },
      { icon:'ShieldCheck', bg:'linear-gradient(135deg,#86105c 0%,#EB2F96 100%)',
        title:'B\u1EA3o hi\u1EC3m xe', desc:'Mua TNDS b\u1EAFt bu\u1ED9c & th\xE2n v\u1ECF t\u1EEB 9 c\xF4ng ty b\u1EA3o hi\u1EC3m h\xE0ng \u0111\u1EA7u.',
        backDesc:'So s\xE1nh gi\xE1 t\u1EEB PVI, B\u1EA3o Vi\u1EC7t, PJICO... Thanh to\xE1n qua MoMo, nh\u1EADn gi\u1EA5y b\u1EA3o hi\u1EC3m PDF ngay.', href:'/bao-hiem-o-to' },
      { icon:'ClipboardList', bg:'linear-gradient(135deg,#134e4a 0%,#0f766e 100%)',
        title:'\u0110\u1EB7t l\u1ECBch \u0111\u0103ng ki\u1EC3m', desc:'\u0110\u1EB7t l\u1ECBch \u0111\u0103ng ki\u1EC3m xe \xF4 t\xF4, nh\u1EADn nh\u1EAFc h\u1EA1n t\u1EF1 \u0111\u1ED9ng.',
        backDesc:'Ch\u1ECDn trung t\xE2m \u0111\u0103ng ki\u1EC3m g\u1EA7n nh\xE0, \u0111\u1EB7t gi\u1EDD thu\u1EADn ti\u1EC7n. MoMo nh\u1EAFc tr\u01B0\u1EDBc 30 ng\xE0y khi s\u1EAFp h\u1EBFt h\u1EA1n.', href:'/tien-ich-giao-thong/dang-kiem' },
    ]
  },
  {
    tab: 'Tr\u01B0\u1EDBc khi l\xEAn \u0111\u01B0\u1EDDng',
    cards: [
      { icon:'Route', bg:'linear-gradient(135deg,#0f172a 0%,#1e3a5f 100%)',
        title:'Ph\xED ETC theo tuy\u1EBFn', desc:'T\xEDnh tr\u01B0\u1EDBc t\u1ED5ng ph\xED qua tr\u1EA1m ETC cho chuy\u1EBFn \u0111i c\u1EE7a b\u1EA1n.',
        backDesc:'Ch\u1ECDn tuy\u1EBFn \u0111\u01B0\u1EDDng, xem chi ti\u1EBFt t\u1EEBng tr\u1EA1m thu ph\xED v\xE0 camera t\u1ED1c \u0111\u1ED9. N\u1EA1p ePass \u0111\xFAng s\u1ED1 ti\u1EC1n c\u1EA7n.', href:'/epass/tinh-phi-etc' },
      { icon:'Fuel', bg:'linear-gradient(135deg,#78350f 0%,#d97706 100%)',
        title:'Gi\xE1 x\u0103ng h\xF4m nay', desc:'Gi\xE1 x\u0103ng d\u1EA7u m\u1EDBi nh\u1EA5t theo t\u1EEBng lo\u1EA1i, c\u1EADp nh\u1EADt m\u1ED7i k\u1EF3 \u0111i\u1EC1u h\xE0nh.',
        backDesc:'Theo d\xF5i RON 95, E5 RON 92, DO 0.05S theo 2 v\xF9ng. Bi\u1EC3u \u0111\u1ED3 xu h\u01B0\u1EDBng 90 ng\xE0y gi\xFAp d\u1EF1 \u0111o\xE1n k\u1EF3 t\u1EDBi.', href:'/gia-xang' },
      { icon:'MapPin', bg:'linear-gradient(135deg,#064e3b 0%,#059669 100%)',
        title:'C\xE2y x\u0103ng g\u1EA7n b\u1EA1n', desc:'T\xECm c\xE2y x\u0103ng \u0111\u1ED1i t\xE1c MoMo Pay g\u1EA7n v\u1ECB tr\xED c\u1EE7a b\u1EA1n nh\u1EA5t.',
        backDesc:'B\u1EADt \u0111\u1ECBnh v\u1ECB \u0111\u1EC3 xem kho\u1EA3ng c\xE1ch \u0111\u1EBFn t\u1EEBng c\xE2y x\u0103ng Petrolimex, PV Oil, Shell. Thanh to\xE1n kh\xF4ng ti\u1EC1n m\u1EB7t.', href:'/cay-xang' },
      { icon:'SquareParking', bg:'linear-gradient(135deg,#1e1b4b 0%,#4338ca 100%)',
        title:'T\xECm b\xE3i \u0111\u1ED7 xe', desc:'Tra c\u1EE9u v\xE0 thanh to\xE1n ph\xED \u0111\u1ED7 xe b\u1EB1ng MoMo t\u1EA1i c\xE1c b\xE3i \u0111\u1ED1i t\xE1c.',
        backDesc:'Xem b\xE3i \u0111\u1ED7 xe g\u1EA7n \u0111i\u1EC3m \u0111\u1EBFn, gi\xE1 theo gi\u1EDD v\xE0 c\xF2n ch\u1ED7 kh\xF4ng. Thanh to\xE1n qu\xE9t QR khi ra, kh\xF4ng c\u1EA7n ti\u1EC1n l\u1EBB.', href:'/tien-ich-giao-thong/bai-do-xe' },
    ]
  },
  {
    tab: 'T\xE0i kho\u1EA3n & Chi ph\xED',
    cards: [
      { icon:'CreditCard', bg:'linear-gradient(135deg,#1e3a5f 0%,#2563eb 100%)',
        title:'N\u1EA1p ePass t\u1EF1 \u0111\u1ED9ng', desc:'Li\xEAn k\u1EBFt v\xED MoMo, t\u1EF1 \u0111\u1ED9ng n\u1EA1p ti\u1EC1n v\xE0o t\xE0i kho\u1EA3n ETC khi s\u1EAFp h\u1EBFt.',
        backDesc:'\u0110\u1EB7t ng\u01B0\u1EE1ng s\u1ED1 d\u01B0 t\u1ED1i thi\u1EC3u, MoMo t\u1EF1 n\u1EA1p t\u1EEB v\xED khi s\u1EAFp v\u1EC1 0. Kh\xF4ng lo d\u1EEBng xe t\u1EA1i tr\u1EA1m thu ph\xED.', href:'/epass' },
      { icon:'Calculator', bg:'linear-gradient(135deg,#713f12 0%,#ca8a04 100%)',
        title:'Chi ph\xED nu\xF4i xe', desc:'\u01AF\u1EDBc t\xEDnh t\u1ED5ng chi ph\xED v\u1EADn h\xE0nh xe trong 1 n\u0103m theo d\xF2ng xe c\u1EE7a b\u1EA1n.',
        backDesc:'Nh\u1EADp lo\u1EA1i xe, s\u1ED1 km/th\xE1ng - h\u1EC7 th\u1ED1ng t\xEDnh x\u0103ng, b\u1EA3o hi\u1EC3m, \u0111\u0103ng ki\u1EC3m, b\u1EA3o d\u01B0\u1EE1ng v\xE0 ETC theo n\u0103m.', href:'#chi-phi-xe' },
      { icon:'Wrench', bg:'linear-gradient(135deg,#881337 0%,#e11d48 100%)',
        title:'C\u1EE9u h\u1ED9 xe m\xE1y', desc:'G\u1ECDi c\u1EE9u h\u1ED9 kh\u1EA9n c\u1EA5p 24/7 ngay tr\xEAn MoMo khi xe h\u1ECFng d\u1ECDc \u0111\u01B0\u1EDDng.',
        backDesc:'D\u1ECBch v\u1EE5 c\u1EE9u h\u1ED9 t\u1EA1i ch\u1ED7, v\xE1 l\u1ED1p, k\xE9o xe v\u1EC1 gara g\u1EA7n nh\u1EA5t. Thanh to\xE1n qua MoMo, c\xF3 gi\xE1 ni\xEAm y\u1EBFt r\xF5 r\xE0ng.', href:'/tien-ich-giao-thong/cuu-ho' },
      { icon:'Zap', bg:'linear-gradient(135deg,#052e16 0%,#16a34a 100%)',
        title:'Tr\u1EA1m s\u1EA1c xe \u0111i\u1EC7n', desc:'T\xECm tr\u1EA1m s\u1EA1c VinFast, Charge++ v\xE0 c\xE1c \u0111\u1ED1i t\xE1c tr\xEAn to\xE0n qu\u1ED1c.',
        backDesc:'Xem tr\u1EA1m s\u1EA1c theo b\u1EA3n \u0111\u1ED3, lo\u1EA1i \u0111\u1EA7u s\u1EA1c, t\u1ED1c \u0111\u1ED9 s\u1EA1c v\xE0 tr\u1EA1ng th\xE1i c\xF2n tr\u1ED1ng. Thanh to\xE1n qua MoMo.', href:'/tram-sac' },
    ]
  }
];

let fcActiveGroup = 0;

function renderFC(groupIdx) {
  fcActiveGroup = groupIdx;
  // tabs
  document.getElementById('fcTabs').innerHTML = FC_GROUPS.map((g, i) =>
    \`<button class="fc-tab\${i===groupIdx?' on':''}" onclick="renderFC(\${i})">\${g.tab}</button>\`
  ).join('');
  // grid
  document.getElementById('fcGrid').innerHTML = FC_GROUPS[groupIdx].cards.map((c, i) => \`
    <div class="fc-card" id="fcc-\${groupIdx}-\${i}">
      <div class="fc-inner">
        <div class="fc-front" style="background:\${c.bg}" data-href="\${c.href}" onclick="flipCard('fcc-\${groupIdx}-\${i}', this)">
          <span class="fc-front-icon">\${licon(c.icon, 72, 1.25)}</span>
          <button class="fc-arrow-btn" onclick="event.stopPropagation();flipCard('fcc-\${groupIdx}-\${i}')">\u2192</button>
          <div class="fc-front-content">
            <div class="fc-front-title">\${c.title}</div>
            <div class="fc-front-desc">\${c.desc}</div>
          </div>
        </div>
        <div class="fc-back">
          <button class="fc-back-close" onclick="unflipCard('fcc-\${groupIdx}-\${i}')">\u2715</button>
          <div class="fc-back-icon-wrap">\${licon(c.icon, 28, 1.5)}</div>
          <div class="fc-back-title">\${c.title}</div>
          <div class="fc-back-desc">\${c.backDesc}</div>
          <a class="fc-back-cta" href="\${c.href}">D\xF9ng ngay \u2192</a>
        </div>
      </div>
    </div>
  \`).join('');
}

function flipCard(id, front) {
  if (window.innerWidth <= 480 && front?.dataset.href) {
    window.location.href = front.dataset.href;
    return;
  }
  document.getElementById(id)?.classList.toggle('flipped');
}
function unflipCard(id) {
  document.getElementById(id)?.classList.remove('flipped');
}

renderFC(0);

// TRIP PLANNER moved to /demos/trip-planner.html
const TP_ROUTES_UNUSED = {
  'hcm-vt': {
    from:'TP. H\u1ED3 Ch\xED Minh', to:'V\u0169ng T\xE0u', km:126,
    road:'QL51 / Cao t\u1ED1c Bi\xEAn H\xF2a - V\u0169ng T\xE0u',
    tolls: { motorbike:0, 'car-gas':66000, 'car-ev':66000 },
    stops: [
      { km:19, name:'Tr\u1EA1m x\u0103ng Petrolimex Long An', type:'\u26FD C\xE2y x\u0103ng', link:'/cay-xang' },
      { km:63, name:'Tr\u1EA1m d\u1EEBng ngh\u1EC9 Long Th\xE0nh', type:'\u2615 Ngh\u1EC9 ch\xE2n + \u0103n u\u1ED1ng', link:null },
      { km:98, name:'V-Green \xB7 Long Th\xE0nh EV Hub', type:'\u26A1 S\u1EA1c nhanh 120kW', link:'/tram-sac', evOnly:true },
    ],
    checklist: ['epass','insurance','tire','water'],
  },
  'hcm-dl': {
    from:'TP. H\u1ED3 Ch\xED Minh', to:'\u0110\xE0 L\u1EA1t', km:307,
    road:'QL20 / Cao t\u1ED1c D\u1EA7u Gi\xE2y - Li\xEAn Kh\u01B0\u01A1ng',
    tolls: { motorbike:0, 'car-gas':142000, 'car-ev':142000 },
    stops: [
      { km:75, name:'Tr\u1EA1m x\u0103ng D\u1EA7u Gi\xE2y', type:'\u26FD C\xE2y x\u0103ng + ti\u1EC7n l\u1EE3i', link:'/cay-xang' },
      { km:160, name:'B\u1EA3o L\u1ED9c - Ngh\u1EC9 ch\xE2n', type:'\u2615 Qu\xE1n \u0103n, c\xE0 ph\xEA', link:null },
      { km:245, name:'V-Green \xB7 \u0110\xE0 L\u1EA1t City', type:'\u26A1 S\u1EA1c 60kW - Trung t\xE2m', link:'/tram-sac', evOnly:true },
    ],
    checklist: ['epass','insurance','tire','water','medicine'],
  },
  'hcm-pt': {
    from:'TP. H\u1ED3 Ch\xED Minh', to:'Phan Thi\u1EBFt', km:198,
    road:'QL1A / Cao t\u1ED1c HCM - Long Th\xE0nh - D\u1EA7u Gi\xE2y',
    tolls: { motorbike:0, 'car-gas':98000, 'car-ev':98000 },
    stops: [
      { km:45, name:'Tr\u1EA1m ngh\u1EC9 Long Th\xE0nh', type:'\u26FD X\u0103ng + \u0103n u\u1ED1ng', link:'/cay-xang' },
      { km:130, name:'Tr\u1EA1m d\u1EEBng B\xECnh Thu\u1EADn', type:'\u2615 Ngh\u1EC9 ch\xE2n', link:null },
      { km:190, name:'Phan Thi\u1EBFt Center - S\u1EA1c EV', type:'\u26A1 S\u1EA1c 60kW', link:'/tram-sac', evOnly:true },
    ],
    checklist: ['epass','insurance','tire','water'],
  },
  'hn-hp': {
    from:'H\xE0 N\u1ED9i', to:'H\u1EA3i Ph\xF2ng', km:105,
    road:'Cao t\u1ED1c H\xE0 N\u1ED9i - H\u1EA3i Ph\xF2ng',
    tolls: { motorbike:0, 'car-gas':88000, 'car-ev':88000 },
    stops: [
      { km:52, name:'Tr\u1EA1m ngh\u1EC9 Km52 - H\u1EA3i D\u01B0\u01A1ng', type:'\u2615 Ngh\u1EC9 ch\xE2n + x\u0103ng', link:'/cay-xang' },
      { km:95, name:'V-Green \xB7 H\u1EA3i Ph\xF2ng Central', type:'\u26A1 S\u1EA1c 120kW', link:'/tram-sac', evOnly:true },
    ],
    checklist: ['epass','insurance','tire'],
  },
  'hn-nb': {
    from:'H\xE0 N\u1ED9i', to:'Ninh B\xECnh', km:93,
    road:'Cao t\u1ED1c Ph\xE1p V\xE2n - C\u1EA7u Gi\u1EBD - Ninh B\xECnh',
    tolls: { motorbike:0, 'car-gas':56000, 'car-ev':56000 },
    stops: [
      { km:46, name:'Tr\u1EA1m ngh\u1EC9 Ph\u1EE7 L\xFD', type:'\u2615 Ngh\u1EC9 ch\xE2n + \u0103n u\u1ED1ng', link:null },
      { km:85, name:'V-Green \xB7 Ninh B\xECnh', type:'\u26A1 S\u1EA1c 60kW', link:'/tram-sac', evOnly:true },
    ],
    checklist: ['epass','insurance','tire','water'],
  },
  'hn-sd': {
    from:'H\xE0 N\u1ED9i', to:'S\u1EA7m S\u01A1n', km:163,
    road:'QL1A / Cao t\u1ED1c Mai S\u01A1n - QL45',
    tolls: { motorbike:0, 'car-gas':76000, 'car-ev':76000 },
    stops: [
      { km:80, name:'Tr\u1EA1m ngh\u1EC9 Thanh H\xF3a', type:'\u26FD X\u0103ng + ti\u1EC7n l\u1EE3i', link:'/cay-xang' },
      { km:158, name:'S\u1EA7m S\u01A1n - S\u1EA1c EV', type:'\u26A1 S\u1EA1c 60kW', link:'/tram-sac', evOnly:true },
    ],
    checklist: ['epass','insurance','tire','water','medicine'],
  },
};

// (removed \u2014 full calculator lives at /trip-planner)

// \u2500\u2500 TRIP SEARCH WIDGET \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const CITIES = [
  { name:'TP. H\u1ED3 Ch\xED Minh', alias:['hcm','saigon','s\xE0i g\xF2n','ho chi minh'] },
  { name:'H\xE0 N\u1ED9i',           alias:['hn','hanoi','ha noi'] },
  { name:'\u0110\xE0 N\u1EB5ng',          alias:['dn','da nang'] },
  { name:'V\u0169ng T\xE0u',         alias:['vt','vung tau'] },
  { name:'\u0110\xE0 L\u1EA1t',           alias:['dl','da lat'] },
  { name:'Phan Thi\u1EBFt',       alias:['pt','mui ne','m\u0169i n\xE9','phan thiet'] },
  { name:'Nha Trang',        alias:['nt','nha trang'] },
  { name:'C\u1EA7n Th\u01A1',          alias:['ct','can tho'] },
  { name:'H\u1ED9i An',           alias:['ha','hoi an'] },
  { name:'Hu\u1EBF',              alias:['hue'] },
  { name:'H\u1EA3i Ph\xF2ng',        alias:['hp','hai phong'] },
  { name:'Ninh B\xECnh',        alias:['nb','ninh binh'] },
  { name:'S\u1EA7m S\u01A1n',          alias:['ss','sam son'] },
  { name:'Quy Nh\u01A1n',         alias:['qn','quy nhon'] },
  { name:'Sa Pa',            alias:['sapa','sa pa','lao cai'] },
  { name:'M\u1ED9c Ch\xE2u',         alias:['moc chau','son la'] },
  { name:'H\u1EA1 Long',          alias:['hl','ha long','quang ninh'] },
  { name:'Ph\xFA Qu\u1ED1c',         alias:['pq','phu quoc'] },
  { name:'H\xE0 Giang',         alias:['hg','ha giang'] },
  { name:'T\xE2y Ninh',         alias:['tn','tay ninh'] },
  { name:'B\xE0 R\u1ECBa',           alias:['ba ria'] },
  { name:'Bu\xF4n Ma Thu\u1ED9t',    alias:['bmt','buon ma thuot'] },
  { name:'Pleiku',           alias:['gia lai'] },
  { name:'Tuy H\xF2a',          alias:['phu yen','tuy hoa'] },
  { name:'Qu\u1EA3ng Ng\xE3i',       alias:['quang ngai'] },
  { name:'Bi\xEAn H\xF2a',         alias:['dong nai','bien hoa'] },
  { name:'Th\u1EE7 D\u1EA7u M\u1ED9t',      alias:['binh duong','thu dau mot'] },
  { name:'M\u1EF9 Tho',           alias:['tien giang','my tho'] },
  { name:'Long Xuy\xEAn',       alias:['an giang','long xuyen'] },
  { name:'Ch\xE2u \u0110\u1ED1c',         alias:['chau doc'] },
  { name:'R\u1EA1ch Gi\xE1',         alias:['kien giang','rach gia'] },
  { name:'C\xE0 Mau',           alias:['ca mau'] },
  { name:'B\u1EBFn Tre',          alias:['ben tre'] },
  { name:'V\u0129nh Long',        alias:['vinh long'] },
  { name:'S\xF3c Tr\u0103ng',        alias:['soc trang'] },
  { name:'B\u1EA1c Li\xEAu',         alias:['bac lieu'] },
  { name:'B\u1EA3o L\u1ED9c',          alias:['bao loc'] },
  { name:'L\u1EA1ng S\u01A1n',         alias:['ls','lang son'] },
  { name:'Thanh H\xF3a',        alias:['th','thanh hoa'] },
  { name:'Vinh',             alias:['nghe an'] },
  { name:'\u0110\u1ED3ng H\u1EDBi',         alias:['quang binh','dong hoi'] },
  { name:'Cao B\u1EB1ng',         alias:['cao bang'] },
];

let tpVehicle = 'car-gas';

function showAC(inputId, dropId) {
  const val = document.getElementById(inputId).value.trim().toLowerCase();
  const drop = document.getElementById(dropId);
  const other = inputId === 'tpFrom' ? document.getElementById('tpTo').value.trim() : document.getElementById('tpFrom').value.trim();
  const nVal = removeAccents(val).toLowerCase();
  const filtered = val.length === 0
    ? CITIES.slice(0, 15)
    : CITIES.filter(c =>
        c.name.toLowerCase().includes(val) ||
        removeAccents(c.name).toLowerCase().includes(nVal) ||
        c.alias.some(a => a.includes(val) || a.includes(nVal))
      ).slice(0, 15);
  if (filtered.length === 0) { drop.classList.remove('open'); return; }
  drop.innerHTML = filtered.map(c =>
    \`<div class="tp-ac-item" onmousedown="pickCity('\${inputId}','\${dropId}','\${c.name}')">
      \${c.name}
    </div>\`
  ).join('');
  drop.classList.add('open');
}

function hideAC(dropId) {
  setTimeout(() => document.getElementById(dropId).classList.remove('open'), 150);
}

function pickCity(inputId, dropId, name) {
  document.getElementById(inputId).value = name;
  document.getElementById(dropId).classList.remove('open');
  checkGoBtn();
}

function swapCities() {
  const f = document.getElementById('tpFrom');
  const t = document.getElementById('tpTo');
  [f.value, t.value] = [t.value, f.value];
  checkGoBtn();
}

function selectVP(btn) {
  document.querySelectorAll('.tp-vpill2').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  tpVehicle = btn.dataset.v;
}

function checkGoBtn() {
  const f = document.getElementById('tpFrom').value.trim();
  const t = document.getElementById('tpTo').value.trim();
  document.getElementById('tpGoBtn').disabled = !(f && t && f !== t);
}

function goTrip() {
  const f = encodeURIComponent(document.getElementById('tpFrom').value.trim());
  const t = encodeURIComponent(document.getElementById('tpTo').value.trim());
  location.href = \`/tien-ich-giao-thong/chuyen-di?from=\${f}&to=\${t}&vehicle=\${tpVehicle}\`;
}

document.getElementById('tpFrom').addEventListener('input', checkGoBtn);
document.getElementById('tpTo').addEventListener('input', checkGoBtn);

function removeAccents(s) {
  return s.normalize('NFD').replace(/[\u0300-\u036F]/g,'').replace(/\u0111/g,'d').replace(/\u0110/g,'D');
}

function licon(name, size, sw) {
  if (!window.lucide || !window.lucide[name]) return '';
  const children = window.lucide[name].map(([tag, attrs]) => {
    const a = Object.entries(attrs).map(([k,v]) => \`\${k}="\${v}"\`).join(' ');
    return \`<\${tag} \${a}/>\`;
  }).join('');
  return \`<svg xmlns="http://www.w3.org/2000/svg" width="\${size||16}" height="\${size||16}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="\${sw||2}" stroke-linecap="round" stroke-linejoin="round">\${children}</svg>\`;
}

window.addEventListener('load', () => {
  lucide.createIcons();
  const set = (id, icon, sz, sw) => { const el = document.getElementById(id); if(el) el.innerHTML = licon(icon, sz, sw); };
  set('tp-icon-from', 'MapPin', 15, 2.2);
  set('tp-icon-to', 'Navigation', 15, 2.2);
  // \u2500\u2500 DANG KIEM LOOKUP \u2500\u2500
  window.dkFormatPlate = function(el) {
    el.value = el.value.replace(/[^a-zA-Z0-9\\-\\.]/g,'').toUpperCase();
  };
  const DK_MOCK = {
    '51F12345':  { expiry:'2026-11-20', center:'Tr\u1EA1m 50-04V Nguy\u1EC5n Th\u1ECB Th\u1EADp', type:'\xD4 t\xF4 con (Sedan)', cycle: 3 },
    '29A12345':  { expiry:'2025-12-01', center:'Tr\u1EA1m 29-02V C\u1EA7u Gi\u1EA5y', type:'\xD4 t\xF4 con (Sedan)', cycle: 6 },
    '51G99999':  { expiry:'2024-03-10', center:'Tr\u1EA1m 50-01V Th\u1EE7 \u0110\u1EE9c', type:'\xD4 t\xF4 con (SUV)', cycle: 8 },
  };
  window.dkSearch = function() {
    const raw = document.getElementById('dkPlate').value.replace(/[^a-zA-Z0-9]/g,'').toUpperCase();
    if (!raw || raw.length < 5) { toast('Nh\u1EADp bi\u1EC3n s\u1ED1 h\u1EE3p l\u1EC7 \u0111\u1EC3 tra c\u1EE9u'); return; }
    const m = DK_MOCK[raw] || { expiry:'2027-03-15', center:'Tr\u1EA1m 50-02V B\xECnh Th\u1EA1nh', type:'\xD4 t\xF4 con', cycle: 2 };
    const exp = new Date(m.expiry), now = new Date();
    const days = Math.round((exp - now) / 86400000);
    let sc, siIcon, siText;
    if (days < 0)       { sc='expired'; siIcon=licon('XCircle',14,2);    siText='\u0110\xE3 h\u1EBFt h\u1EA1n ' + Math.abs(days) + ' ng\xE0y'; }
    else if (days < 30) { sc='warning'; siIcon=licon('AlertTriangle',14,2); siText='C\xF2n ' + days + ' ng\xE0y'; }
    else                { sc='ok';      siIcon=licon('CheckCircle2',14,2);  siText='C\xF2n h\u1EA1n ' + days + ' ng\xE0y'; }
    const plate = document.getElementById('dkPlate').value.toUpperCase();
    document.getElementById('dkResult').innerHTML = \`
      <div class="dk-result">
        <div class="dk-result-plate">\${plate}</div>
        <div class="dk-result-status \${sc}">\${siIcon}\${siText}</div>
        <div class="dk-result-details">
          <strong>H\u1EBFt h\u1EA1n:</strong> \${exp.toLocaleDateString('vi-VN')} &nbsp;\xB7&nbsp;
          <strong>L\u1EA7n \u0111\u0103ng ki\u1EC3m:</strong> L\u1EA7n \${m.cycle}<br>
          <strong>Lo\u1EA1i xe:</strong> \${m.type}<br>
          <strong>N\u01A1i \u0111\u0103ng ki\u1EC3m l\u1EA7n cu\u1ED1i:</strong> \${m.center}
        </div>
        <div class="dk-result-actions">
          <button class="dk-remind-btn" onclick="toast('\u0110\xE3 \u0111\u1EB7t nh\u1EAFc h\u1EA1n \u0111\u0103ng ki\u1EC3m - th\xF4ng b\xE1o tr\u01B0\u1EDBc 45, 30 v\xE0 7 ng\xE0y')">
            \${licon('Bell',14,2)}
            \u0110\u1EB7t nh\u1EAFc
          </button>
          <a class="dk-detail-link" href="/tien-ich-giao-thong/dang-kiem">Xem l\u1ECBch s\u1EED \u0111\u0103ng ki\u1EC3m \u2192</a>
        </div>
      </div>\`;
  };

  set('vp-icon-motorbike', 'Bike', 14, 2);
  set('vp-icon-car-gas', 'Car', 14, 2);
  set('vp-icon-car-ev', 'Zap', 14, 2);
  // mega-menu icons
  document.querySelectorAll('.mega-item[data-micon]').forEach(el => {
    const svg = licon(el.dataset.micon, 15, 1.8);
    el.insertAdjacentHTML('afterbegin', svg);
  });
});

/* \u2500\u2500 NAV SIDEBAR (mobile) \u2500\u2500 */
function openNavSidebar() {
  document.getElementById('navSidebar').classList.add('open');
  document.getElementById('navSidebarOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeNavSidebar() {
  document.getElementById('navSidebar').classList.remove('open');
  document.getElementById('navSidebarOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function toggleSidebarSection(el) {
  el.classList.toggle('expanded');
  el.nextElementSibling.classList.toggle('open');
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeNavSidebar(); closeNavSearch(); } });

/* \u2500\u2500 NAV VEHICLE SEARCH \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
(function() {
  const VEHICLE_DATA = [
    // \u2500\u2500 \xD4 T\xD4 \u2500\u2500
    {brand:'toyota',label:'Toyota',color:'#EB0A1E',cat:'\xD4 t\xF4',models:[
      {name:'Fortuner',slug:'fortuner',type:'SUV'},
      {name:'Camry',slug:'camry',type:'Sedan'},
      {name:'Corolla Cross',slug:'corolla-cross',type:'Crossover'},
      {name:'Innova Cross',slug:'innova-cross',type:'MPV'},
      {name:'Veloz',slug:'veloz',type:'MPV'},
      {name:'Raize',slug:'raize',type:'SUV'},
      {name:'Vios',slug:'vios',type:'Sedan'},
      {name:'Land Cruiser',slug:'land-cruiser',type:'SUV'},
      {name:'Yaris Cross',slug:'yaris-cross',type:'Crossover'},
    ]},
    {brand:'honda',label:'Honda',color:'#CC0000',cat:'\xD4 t\xF4',models:[
      {name:'CR-V',slug:'cr-v',type:'SUV'},
      {name:'City',slug:'city',type:'Sedan'},
      {name:'Civic',slug:'civic',type:'Sedan'},
      {name:'HR-V',slug:'hr-v',type:'Crossover'},
      {name:'BR-V',slug:'br-v',type:'SUV'},
      {name:'Accord',slug:'accord',type:'Sedan'},
      {name:'Brio',slug:'brio',type:'Hatchback'},
    ]},
    {brand:'hyundai',label:'Hyundai',color:'#002C5F',cat:'\xD4 t\xF4',models:[
      {name:'Tucson',slug:'tucson',type:'SUV'},
      {name:'Santa Fe',slug:'santa-fe',type:'SUV'},
      {name:'Accent',slug:'accent',type:'Sedan'},
      {name:'Creta',slug:'creta',type:'Crossover'},
      {name:'Ioniq 6',slug:'ioniq-6',type:'EV'},
      {name:'Kona Electric',slug:'kona-electric',type:'EV'},
    ]},
    {brand:'kia',label:'Kia',color:'#05141F',cat:'\xD4 t\xF4',models:[
      {name:'Carnival',slug:'carnival',type:'MPV'},
      {name:'Sorento',slug:'sorento',type:'SUV'},
      {name:'Seltos',slug:'seltos',type:'Crossover'},
      {name:'Sportage',slug:'sportage',type:'SUV'},
      {name:'K3',slug:'k3',type:'Sedan'},
      {name:'Cerato',slug:'cerato',type:'Sedan'},
      {name:'EV6',slug:'ev6',type:'EV'},
    ]},
    {brand:'mazda',label:'Mazda',color:'#91020C',cat:'\xD4 t\xF4',models:[
      {name:'CX-5',slug:'cx-5',type:'SUV'},
      {name:'CX-8',slug:'cx-8',type:'SUV'},
      {name:'Mazda3',slug:'mazda3',type:'Sedan'},
      {name:'CX-3',slug:'cx-3',type:'Crossover'},
      {name:'CX-30',slug:'cx-30',type:'Crossover'},
      {name:'Mazda6',slug:'mazda6',type:'Sedan'},
    ]},
    {brand:'ford',label:'Ford',color:'#003499',cat:'\xD4 t\xF4',models:[
      {name:'Ranger',slug:'ranger',type:'B\xE1n t\u1EA3i'},
      {name:'Everest',slug:'everest',type:'SUV'},
      {name:'Territory',slug:'territory',type:'Crossover'},
      {name:'Explorer',slug:'explorer',type:'SUV'},
    ]},
    {brand:'mitsubishi',label:'Mitsubishi',color:'#BC1C2B',cat:'\xD4 t\xF4',models:[
      {name:'Xpander',slug:'xpander',type:'MPV'},
      {name:'Xforce',slug:'xforce',type:'Crossover'},
      {name:'Outlander',slug:'outlander',type:'SUV'},
      {name:'Pajero Sport',slug:'pajero-sport',type:'SUV'},
    ]},
    {brand:'vinfast',label:'VinFast',color:'#009EDB',cat:'\xD4 t\xF4',models:[
      {name:'VF 8',slug:'vf-8',type:'EV'},
      {name:'VF 9',slug:'vf-9',type:'EV'},
      {name:'VF 7',slug:'vf-7',type:'EV'},
      {name:'VF 6',slug:'vf-6',type:'EV'},
      {name:'VF 5',slug:'vf-5',type:'EV'},
      {name:'VF 3',slug:'vf-3',type:'EV'},
    ]},
    {brand:'mercedes',label:'Mercedes-Benz',color:'#A0A0A0',cat:'\xD4 t\xF4',models:[
      {name:'C-Class',slug:'c-class',type:'Sedan'},
      {name:'E-Class',slug:'e-class',type:'Sedan'},
      {name:'GLC',slug:'glc',type:'SUV'},
      {name:'GLE',slug:'gle',type:'SUV'},
    ]},
    {brand:'bmw',label:'BMW',color:'#0066CC',cat:'\xD4 t\xF4',models:[
      {name:'3 Series',slug:'3-series',type:'Sedan'},
      {name:'5 Series',slug:'5-series',type:'Sedan'},
      {name:'X3',slug:'x3',type:'SUV'},
      {name:'X5',slug:'x5',type:'SUV'},
    ]},
    {brand:'lexus',label:'Lexus',color:'#1A1A1A',cat:'\xD4 t\xF4',models:[
      {name:'NX',slug:'nx',type:'SUV'},
      {name:'RX',slug:'rx',type:'SUV'},
      {name:'ES',slug:'es',type:'Sedan'},
    ]},
    {brand:'suzuki',label:'Suzuki',color:'#003399',cat:'\xD4 t\xF4',models:[
      {name:'XL7',slug:'xl7',type:'MPV'},
      {name:'Ertiga',slug:'ertiga',type:'MPV'},
    ]},
    {brand:'mg',label:'MG',color:'#B01922',cat:'\xD4 t\xF4',models:[
      {name:'ZS',slug:'zs',type:'SUV'},
      {name:'5',slug:'mg5',type:'Sedan'},
      {name:'HS',slug:'hs',type:'SUV'},
    ]},
    {brand:'isuzu',label:'Isuzu',color:'#CC0000',cat:'\xD4 t\xF4',models:[
      {name:'D-Max',slug:'d-max',type:'B\xE1n t\u1EA3i'},
      {name:'mu-X',slug:'mu-x',type:'SUV'},
    ]},
    {brand:'tesla',label:'Tesla',color:'#CC0000',cat:'\xD4 t\xF4',models:[
      {name:'Model 3',slug:'model-3',type:'EV'},
      {name:'Model Y',slug:'model-y',type:'EV'},
      {name:'Model X',slug:'model-x',type:'EV'},
    ]},
    // \u2500\u2500 XE M\xC1Y \u2500\u2500
    {brand:'honda-may',label:'Honda',color:'#CC0000',cat:'Xe m\xE1y',models:[
      {name:'Wave Alpha',slug:'wave-alpha',type:'Xe s\u1ED1'},
      {name:'Vision',slug:'vision',type:'Tay ga'},
      {name:'Air Blade',slug:'air-blade',type:'Tay ga'},
      {name:'SH Mode',slug:'sh-mode',type:'Tay ga'},
      {name:'SH 160i',slug:'sh-160i',type:'Tay ga'},
      {name:'Winner X',slug:'winner-x',type:'C\xF4n tay'},
    ]},
    {brand:'yamaha-may',label:'Yamaha',color:'#003087',cat:'Xe m\xE1y',models:[
      {name:'Sirius',slug:'sirius',type:'Xe s\u1ED1'},
      {name:'NVX 155',slug:'nvx-155',type:'Tay ga'},
      {name:'Grande',slug:'grande',type:'Tay ga'},
      {name:'Exciter 150',slug:'exciter-150',type:'C\xF4n tay'},
      {name:'Janus',slug:'janus',type:'Tay ga'},
    ]},
    {brand:'suzuki-may',label:'Suzuki',color:'#003399',cat:'Xe m\xE1y',models:[
      {name:'Revo',slug:'revo',type:'Xe s\u1ED1'},
      {name:'Raider R150',slug:'raider',type:'C\xF4n tay'},
      {name:'GSX-S150',slug:'gsx-s150',type:'C\xF4n tay'},
    ]},
    {brand:'piaggio',label:'Piaggio',color:'#0033A0',cat:'Xe m\xE1y',models:[
      {name:'Vespa GTS 300',slug:'vespa-gts',type:'Tay ga'},
      {name:'Vespa Primavera',slug:'vespa-primavera',type:'Tay ga'},
      {name:'Liberty 150',slug:'liberty',type:'Tay ga'},
    ]},
  ];

  // Build flat index for fast search
  const INDEX = [];
  VEHICLE_DATA.forEach(b => {
    b.models.forEach(m => {
      const brandNorm = b.label.toLowerCase().replace(/[^a-z0-9]/g,'');
      const nameNorm = m.name.toLowerCase().replace(/[^a-z0-9]/g,'');
      INDEX.push({
        brand: b.brand, brandLabel: b.label, color: b.color,
        cat: b.cat, name: m.name, slug: m.slug, type: m.type,
        search: (b.label + ' ' + m.name + ' ' + m.slug + ' ' + brandNorm + nameNorm).toLowerCase(),
      });
    });
  });

  const inp = document.getElementById('navSearchInp');
  const drop = document.getElementById('navSearchDrop');
  let activeIdx = -1;
  let blurTimer = null;

  function getUrl(item) {
    if (item.cat === 'Xe m\xE1y') return '/tien-ich-giao-thong/hang-xe-may';
    return '/tien-ich-giao-thong/hang-xe/' + item.brand + '/' + item.slug;
  }

  function renderResults(results) {
    if (!results.length) {
      drop.innerHTML = '<div class="nsd-empty"><strong>Kh\xF4ng t\xECm th\u1EA5y xe</strong>Th\u1EED t\xEAn kh\xE1c nh\u01B0 "Toyota Camry" hay "Honda SH"</div>';
      return;
    }
    // Group by category
    const groups = {};
    results.forEach(r => {
      if (!groups[r.cat]) groups[r.cat] = [];
      groups[r.cat].push(r);
    });
    let html = '';
    Object.entries(groups).forEach(([cat, items], gi) => {
      if (gi > 0) html += '<div class="nsd-divider"></div>';
      html += \`<div class="nsd-section-label">\${cat}</div>\`;
      items.forEach((item, i) => {
        const isEV = item.type === 'EV';
        const isMoto = item.cat === 'Xe m\xE1y';
        const typeClass = isEV ? 'ev' : isMoto ? 'motorbike' : '';
        const url = getUrl(item);
        html += \`<a class="nsd-item" href="\${url}" data-idx="\${INDEX.indexOf(item)}">
          <span class="nsd-dot" style="background:\${item.color}"></span>
          <span class="nsd-info">
            <span class="nsd-model">\${item.name}</span>
            <span class="nsd-brand">\${item.brandLabel}</span>
          </span>
          <span class="nsd-type \${typeClass}">\${item.type}</span>
        </a>\`;
      });
    });
    drop.innerHTML = html;
    activeIdx = -1;
  }

  function showEmpty() {
    drop.innerHTML = \`<div class="nsd-section-label">Ph\u1ED5 bi\u1EBFn nh\u1EA5t</div>\` +
      ['toyota|fortuner|Fortuner|SUV|#EB0A1E|\xD4 t\xF4','honda|city|City|Sedan|#CC0000|\xD4 t\xF4','kia|seltos|Seltos|Crossover|#05141F|\xD4 t\xF4',
       'vinfast|vf-8|VF 8|EV|#009EDB|\xD4 t\xF4','yamaha-may|nvx-155|NVX 155|Tay ga|#003087|Xe m\xE1y','honda-may|air-blade|Air Blade|Tay ga|#CC0000|Xe m\xE1y']
      .map(s => { const [brand,slug,name,type,color,cat] = s.split('|');
        const isEV = type === 'EV'; const isMoto = cat === 'Xe m\xE1y';
        const typeClass = isEV ? 'ev' : isMoto ? 'motorbike' : '';
        const url = isMoto ? '/tien-ich-giao-thong/hang-xe-may' : \`/tien-ich-giao-thong/hang-xe/\${brand}/\${slug}\`;
        return \`<a class="nsd-item" href="\${url}">
          <span class="nsd-dot" style="background:\${color}"></span>
          <span class="nsd-info"><span class="nsd-model">\${name}</span><span class="nsd-brand">\${brand.replace('-may','').charAt(0).toUpperCase()+brand.replace('-may','').slice(1)}</span></span>
          <span class="nsd-type \${typeClass}">\${type}</span></a>\`;
      }).join('');
  }

  function openDrop() {
    const q = inp.value.trim();
    if (!q) showEmpty();
    drop.classList.add('open');
  }
  function closeDrop() {
    drop.classList.remove('open');
    activeIdx = -1;
  }

  inp.addEventListener('input', () => {
    const q = inp.value.trim().toLowerCase();
    if (!q) { showEmpty(); drop.classList.add('open'); return; }
    const results = INDEX.filter(r => r.search.includes(q)).slice(0, 12);
    renderResults(results);
    drop.classList.add('open');
  });

  inp.addEventListener('focus', () => {
    clearTimeout(blurTimer);
    openDrop();
  });

  inp.addEventListener('blur', () => {
    blurTimer = setTimeout(closeDrop, 160);
  });

  // Keyboard navigation
  inp.addEventListener('keydown', e => {
    const items = drop.querySelectorAll('.nsd-item');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIdx = Math.min(activeIdx + 1, items.length - 1);
      items.forEach((el, i) => el.classList.toggle('nsd-active', i === activeIdx));
      if (items[activeIdx]) items[activeIdx].scrollIntoView({block:'nearest'});
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIdx = Math.max(activeIdx - 1, 0);
      items.forEach((el, i) => el.classList.toggle('nsd-active', i === activeIdx));
      if (items[activeIdx]) items[activeIdx].scrollIntoView({block:'nearest'});
    } else if (e.key === 'Enter') {
      if (activeIdx >= 0 && items[activeIdx]) {
        e.preventDefault();
        items[activeIdx].click();
      }
    } else if (e.key === 'Escape') {
      closeDrop(); inp.blur();
    }
  });

  // Slash key shortcut to focus search
  document.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement !== inp && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault(); inp.focus();
    }
  });

  window.closeNavSearch = closeDrop;

  // \u2500\u2500 MOBILE SEARCH \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  const mobileOverlay = document.getElementById('mobileSearchOverlay');
  const mobileInp = document.getElementById('mobileSearchInp');
  const mobileDrop = document.getElementById('mobileSearchDrop');

  function renderMobileResults(results) {
    if (!results.length) {
      mobileDrop.innerHTML = '<div class="nsd-empty"><strong>Kh\xF4ng t\xECm th\u1EA5y xe</strong>Th\u1EED t\xEAn kh\xE1c nh\u01B0 "Toyota Camry" hay "Honda SH"</div>';
    } else {
      const groups = {};
      results.forEach(r => { if (!groups[r.cat]) groups[r.cat] = []; groups[r.cat].push(r); });
      let html = '';
      Object.entries(groups).forEach(([cat, items], gi) => {
        if (gi > 0) html += '<div class="nsd-divider"></div>';
        html += \`<div class="nsd-section-label">\${cat}</div>\`;
        items.forEach(item => {
          const typeClass = item.type === 'EV' ? 'ev' : item.cat === 'Xe m\xE1y' ? 'motorbike' : '';
          const url = getUrl(item);
          html += \`<a class="nsd-item" href="\${url}">
            <span class="nsd-dot" style="background:\${item.color}"></span>
            <span class="nsd-info"><span class="nsd-model">\${item.name}</span><span class="nsd-brand">\${item.brandLabel}</span></span>
            <span class="nsd-type \${typeClass}">\${item.type}</span></a>\`;
        });
      });
      mobileDrop.innerHTML = html;
    }
    mobileDrop.classList.add('open');
  }

  mobileInp.addEventListener('input', () => {
    const q = mobileInp.value.trim().toLowerCase();
    if (!q) { mobileDrop.classList.remove('open'); return; }
    renderMobileResults(INDEX.filter(r => r.search.includes(q)).slice(0, 10));
  });

  window.toggleMobileSearch = function() {
    const isOpen = mobileOverlay.classList.contains('open');
    if (isOpen) { closeMobileSearch(); } else {
      mobileOverlay.classList.add('open');
      mobileDrop.classList.remove('open');
      mobileInp.value = '';
      setTimeout(() => mobileInp.focus(), 60);
    }
  };
  window.closeMobileSearch = function() {
    mobileOverlay.classList.remove('open');
    mobileDrop.classList.remove('open');
    mobileInp.value = '';
  };
})();
(function(){
  var el = document.getElementById('gs-date');
  if(el){ var d=new Date(); el.textContent=String(d.getDate()).padStart(2,'0')+'/'+String(d.getMonth()+1).padStart(2,'0'); }
})();

// \u2500\u2500 BSX TRIGGER \u2014 service pills focus plate input \u2500\u2500
document.querySelectorAll('[data-bsx-trigger]').forEach(pill => {
  pill.addEventListener('click', function(e) {
    e.preventDefault();
    const hint = this.dataset.bsxTrigger;
    const label = document.getElementById('platePanelLabel');
    const box   = document.getElementById('plateBox');
    const input = document.getElementById('plateInput');
    const panel = document.querySelector('.plate-panel');

    if (label) {
      label.textContent = hint;
      label.classList.add('is-triggered');
      setTimeout(() => label.classList.remove('is-triggered'), 1200);
    }
    if (box) {
      box.classList.remove('is-triggered');
      void box.offsetWidth; // reflow \u0111\u1EC3 restart animation
      box.classList.add('is-triggered');
      setTimeout(() => box.classList.remove('is-triggered'), 1300);
    }
    panel && panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    setTimeout(() => input && input.focus(), 300);
  });
});

// \u2500\u2500 Consent Sheet \u2500\u2500
window.openConsentSheet = function(plate, vtypeLabel) {
  const overlay = document.getElementById('consentSheet');
  document.getElementById('csPlateNum').textContent = plate;
  document.getElementById('csPlateType').textContent = vtypeLabel;
  const isOto = vtypeLabel && vtypeLabel.toLowerCase().includes('\xF4 t\xF4');
  document.getElementById('csPlateIcon').innerHTML = isOto
    ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EB2F96" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="7" width="22" height="11" rx="2"/><path d="M5 7V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>'
    : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EB2F96" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6H4L2 14h20l-2-8H15z"/><path d="M15 6l1 8"/></svg>';
  // reset to default view
  document.getElementById('csDefault').style.display = '';
  document.getElementById('csSuccess').style.display = 'none';
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeConsentSheet = function() {
  const overlay = document.getElementById('consentSheet');
  const sheet = document.getElementById('csSheetInner');
  sheet.style.transform = 'translateY(100%)';
  setTimeout(() => {
    overlay.classList.remove('open');
    sheet.style.transform = '';
    document.body.style.overflow = '';
  }, 300);
};

window.confirmAddVehicle = function() {
  document.getElementById('csDefault').style.display = 'none';
  document.getElementById('csSuccess').style.display = 'flex';
};

document.getElementById('consentSheet').addEventListener('click', function(e) {
  if (e.target === this) closeConsentSheet();
});

/* \u2500\u2500 ANIMATION CHOREOGRAPHY \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
(function initAnimations() {

  /* 1. Scroll-triggered reveal \u2014 section eyebrows, titles, [data-anim] */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObs.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.section-eyebrow, .section-title, [data-anim="slide-up"]')
    .forEach(el => revealObs.observe(el));

  /* 2. Feature cards \u2014 staggered spring-pop */
  const cardObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const cards = entry.target.querySelectorAll('.fc-card');
      cards.forEach((card, i) => {
        setTimeout(() => card.classList.add('is-visible'), i * 80);
      });
      cardObs.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  const fcGrid = document.getElementById('fcGrid');
  if (fcGrid) cardObs.observe(fcGrid);

  /* 3. Stats bar \u2014 count-up animation */
  const statTargets = [
    { el: null, end: 1.2, suffix: 'M+', decimals: 1 },
    { el: null, end: 63,  suffix: '',   decimals: 0 },
    { el: null, end: 10,  suffix: '+',  decimals: 0 },
    { el: null, end: 0,   suffix: '\u0111',  decimals: 0 },
  ];
  const statEls = document.querySelectorAll('.stat-num');
  statEls.forEach((el, i) => { if (statTargets[i]) statTargets[i].el = el; });

  function countUp(el, end, suffix, decimals, cell) {
    const duration = 1200;
    const start = performance.now();
    const startVal = 0;
    function step(now) {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      const val = startVal + (end - startVal) * ease;
      const display = decimals > 0 ? val.toFixed(decimals) : Math.round(val);
      el.innerHTML = display + '<em>' + suffix + '</em>';
      if (p < 1) requestAnimationFrame(step);
      else { cell.classList.add('did-count'); }
    }
    requestAnimationFrame(step);
  }

  let statsDone = false;
  const statsObs = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting || statsDone) return;
    statsDone = true;
    statTargets.forEach(({ el, end, suffix, decimals }, i) => {
      if (!el) return;
      const cell = el.closest('.stat-cell');
      setTimeout(() => countUp(el, end, suffix, decimals, cell), i * 120);
    });
    statsObs.disconnect();
  }, { threshold: 0.4 });

  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) statsObs.observe(statsBar);

  /* 4. Wave SVG path draw on load */
  const wavePath = document.querySelector('.hero-wave path');
  if (wavePath) {
    const len = wavePath.getTotalLength ? wavePath.getTotalLength() : 1600;
    wavePath.style.cssText = \`stroke:#F7F5FA;stroke-width:1;stroke-dasharray:\${len};stroke-dashoffset:\${len};fill:#F7F5FA;animation:wave-draw 1.2s cubic-bezier(.22,1,.36,1) .4s both\`;
  }

  /* 5. Plate box pulse on result */
  const origRender = window.renderResult;
  if (typeof origRender === 'function') {
    window.renderResult = function(...args) {
      origRender.apply(this, args);
      const pb = document.getElementById('plateBox');
      if (pb) {
        pb.classList.remove('has-result');
        void pb.offsetWidth;
        pb.classList.add('has-result');
      }
    };
  }

  /* 6. Section cards with [data-anim] \u2014 auto-tag utility section items */
  document.querySelectorAll('.section.section--anim .card, .util-card, .tp-route-card')
    .forEach(el => {
      if (!el.dataset.anim) el.setAttribute('data-anim', 'slide-up');
      revealObs.observe(el);
    });

  /* 7. Road car easter egg on stats bar hover */
  const statsBarInner = document.querySelector('.stats-bar-inner');
  if (statsBarInner) {
    let carAdded = false;
    statsBarInner.addEventListener('mouseenter', () => {
      if (carAdded) return;
      carAdded = true;
      const wrap = document.createElement('div');
      wrap.className = 'road-car-wrap';
      const car = document.createElement('div');
      car.className = 'road-car';
      car.textContent = '\u{1F697}';
      wrap.appendChild(car);
      statsBar.insertBefore(wrap, statsBarInner);
      setTimeout(() => { wrap.remove(); carAdded = false; }, 5000);
    });
  }

  /* 8. Pin-bob on hover for station cards */
  document.addEventListener('mouseover', e => {
    const card = e.target.closest('.stn-card, .parking-spot, .rescue-card');
    if (card && !card._pinBob) {
      card._pinBob = true;
      card.style.animation = 'pin-bob .55s cubic-bezier(.22,1,.36,1)';
      card.addEventListener('animationend', () => {
        card.style.animation = '';
        card._pinBob = false;
      }, { once: true });
    }
  });

  /* 9. Stagger-reveal for brand chips */
  const brandObs = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    document.querySelectorAll('.brand-chip').forEach((chip, i) => {
      chip.style.opacity = '0';
      chip.style.transform = 'translateY(10px)';
      chip.style.transition = \`opacity .35s ease \${i*40}ms, transform .35s cubic-bezier(.22,1,.36,1) \${i*40}ms\`;
      requestAnimationFrame(() => {
        setTimeout(() => {
          chip.style.opacity = '';
          chip.style.transform = '';
        }, i * 40);
      });
    });
    brandObs.disconnect();
  }, { threshold: 0.2 });

  const brandStrip = document.querySelector('.brand-row');
  if (brandStrip) brandObs.observe(brandStrip);

})();
<\/script> `], [" ", " ", `<div class="nav-search" id="navSearch"> <div class="nav-search-box"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg> <input id="navSearchInp" class="nav-search-inp" type="text" placeholder="T\xECm xe c\u1EE7a b\u1EA1n..." autocomplete="off" spellcheck="false"> <kbd class="nav-search-kbd">/</kbd> </div> <div class="nav-search-drop" id="navSearchDrop"></div> </div>  <button class="nav-search-icon-btn" onclick="toggleMobileSearch()" aria-label="T\xECm xe"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg> </button>  <button class="nav-menu-btn" onclick="openNavSidebar()" aria-label="Menu"> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="7" x2="21" y2="7"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="17" x2="21" y2="17"></line></svg> </button>  <div class="nav-search-overlay" id="mobileSearchOverlay"> <div class="nav-search-box"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg> <input id="mobileSearchInp" class="nav-search-inp" type="text" placeholder="T\xECm xe c\u1EE7a b\u1EA1n..." autocomplete="off" spellcheck="false"> <button onclick="closeMobileSearch()" style="background:none;border:none;cursor:pointer;color:var(--gray-400);padding:0;display:flex;align-items:center;"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> </button> </div> <div class="nav-search-drop" id="mobileSearchDrop"></div> </div>  <div class="nav-sidebar-overlay" id="navSidebarOverlay" onclick="closeNavSidebar()"></div>  <div class="cs-overlay" id="consentSheet" onclick="e => { if(e.target===this) closeConsentSheet(); }"> <div class="cs-sheet" id="csSheetInner"> <div class="cs-drag"></div> <!-- Default view --> <div id="csDefault"> <div class="cs-head"> <div class="cs-plate-row"> <div class="cs-plate-icon" id="csPlateIcon"></div> <div> <div class="cs-plate-num" id="csPlateNum"></div> <div class="cs-plate-type" id="csPlateType"></div> </div> </div> <div class="cs-title">L\u01B0u xe v\xE0o h\u1ED3 s\u01A1 c\u1EE7a b\u1EA1n?</div> <div class="cs-sub">MoMo s\u1EBD d\xF9ng th\xF4ng tin n\xE0y \u0111\u1EC3 h\u1ED7 tr\u1EE3 b\u1EA1n t\u1ED1t h\u01A1n:</div> </div> <div class="cs-perms"> <div class="cs-perm-row"> <div class="cs-perm-icon amber"><svg viewBox="0 0 24 24"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></div> <div class="cs-perm-text"><strong>C\u1EA3nh b\xE1o ph\u1EA1t ngu\u1ED9i</strong><span>Th\xF4ng b\xE1o ngay khi bi\u1EC3n s\u1ED1 ph\xE1t sinh vi ph\u1EA1m m\u1EDBi \u2014 kh\xF4ng c\u1EA7n tra th\u1EE7 c\xF4ng</span></div> </div> <div class="cs-perm-row"> <div class="cs-perm-icon blue"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div> <div class="cs-perm-text"><strong>Nh\u1EAFc l\u1ECBch \u0111\u0103ng ki\u1EC3m</strong><span>B\xE1o tr\u01B0\u1EDBc 30 ng\xE0y tr\u01B0\u1EDBc khi h\u1EBFt h\u1EA1n, tr\xE1nh ph\u1EA1t 800K\u20134 tri\u1EC7u</span></div> </div> <div class="cs-perm-row"> <div class="cs-perm-icon pink"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div> <div class="cs-perm-text"><strong>Nh\u1EAFc gia h\u1EA1n b\u1EA3o hi\u1EC3m</strong><span>Th\xF4ng b\xE1o tr\u01B0\u1EDBc khi TNDS h\u1EBFt h\u1EA1n \u0111\u1EC3 xe lu\xF4n \u0111\u01B0\u1EE3c b\u1EA3o v\u1EC7</span></div> </div> <div class="cs-perm-row"> <div class="cs-perm-icon green"><svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div> <div class="cs-perm-text"><strong>C\xE1 nh\xE2n h\xF3a d\u1ECBch v\u1EE5</strong><span>Gi\xE1 b\u1EA3o hi\u1EC3m, l\u1ECBch b\u1EA3o d\u01B0\u1EE1ng v\xE0 \u01B0u \u0111\xE3i ph\xF9 h\u1EE3p v\u1EDBi xe c\u1EE7a b\u1EA1n</span></div> </div> </div> <div class="cs-legal">
Th\xF4ng tin bi\u1EC3n s\u1ED1 \u0111\u01B0\u1EE3c m\xE3 h\xF3a v\xE0 l\u01B0u tr\u1EEF b\u1EA3o m\u1EADt. B\u1EA1n c\xF3 th\u1EC3 x\xF3a b\u1EA5t c\u1EE9 l\xFAc n\xE0o trong <a href="/xe-cua-toi">Xe c\u1EE7a t\xF4i</a>. Xem th\xEAm <a href="/chinh-sach-bao-mat">Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt</a>.
</div> <div class="cs-footer"> <button class="cs-confirm-btn" onclick="confirmAddVehicle()"> <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
\u0110\u1ED3ng \xFD &amp; L\u01B0u xe
</button> <button class="cs-skip-btn" onclick="closeConsentSheet()">B\u1ECF qua, kh\xF4ng l\u01B0u</button> </div> </div> <!-- Success view --> <div class="cs-success" id="csSuccess"> <div class="cs-success-icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></div> <h3>\u0110\xE3 l\u01B0u xe th\xE0nh c\xF4ng!</h3> <p>MoMo s\u1EBD t\u1EF1 \u0111\u1ED9ng theo d\xF5i v\xE0 nh\u1EAFc b\u1EA1n khi c\xF3 c\u1EADp nh\u1EADt quan tr\u1ECDng v\u1EC1 xe.</p> <button class="cs-success-close" onclick="closeConsentSheet()">Xong</button> </div> </div> </div> <div class="nav-sidebar" id="navSidebar"> <div class="nav-sidebar-top"> <span class="nav-sidebar-logo">Ti\u1EC7n \xCDch <em>Giao Th\xF4ng</em></span> <button class="nav-sidebar-close" onclick="closeNavSidebar()"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> </button> </div> <div class="nav-sidebar-body"> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">Di chuy\u1EC3n</div> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/gia-xang">Gi\xE1 x\u0103ng d\u1EA7u h\xF4m nay</a> <a class="nav-sidebar-link" href="/cay-xang">T\xECm c\xE2y x\u0103ng g\u1EA7n \u0111\xE2y</a> <a class="nav-sidebar-link" href="/tram-sac">Tr\u1EA1m s\u1EA1c xe \u0111i\u1EC7n</a> <a class="nav-sidebar-link" href="/epass/tinh-phi-etc">T\xEDnh ph\xED ETC theo tuy\u1EBFn</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/chuyen-di">T\xEDnh chi ph\xED chuy\u1EBFn \u0111i</a> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">B\u1EA3o hi\u1EC3m</div> <a class="nav-sidebar-link" href="/bao-hiem-o-to">B\u1EA3o hi\u1EC3m TNDS b\u1EAFt bu\u1ED9c</a> <a class="nav-sidebar-link" href="/bao-hiem-o-to">B\u1EA3o hi\u1EC3m th\xE2n v\u1ECF</a> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">Ph\xE1p l\xFD &amp; B\u1EA3o d\u01B0\u1EE1ng</div> <a class="nav-sidebar-link" href="/phat-nguoi">Tra ph\u1EA1t ngu\u1ED9i</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/dang-kiem">Ki\u1EC3m tra \u0111\u0103ng ki\u1EC3m</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/bao-duong">L\u1ECBch b\u1EA3o d\u01B0\u1EE1ng xe</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/cuu-ho">C\u1EE9u h\u1ED9 kh\u1EA9n c\u1EA5p</a> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">Xe c\u1EE7a t\xF4i</div> <a class="nav-sidebar-link" href="/tien-ich-giao-thong#ho-so-xe">H\u1ED3 s\u01A1 ph\u01B0\u01A1ng ti\u1EC7n</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong#chi-phi-xe">Chi ph\xED nu\xF4i xe / n\u0103m</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/hang-xe">Nh\xE3n xe &amp; D\xF2ng xe</a> <a class="nav-sidebar-link" href="/epass">ePass &amp; T\u1EF1 \u0111\u1ED9ng n\u1EA1p</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/bai-do-xe">T\xECm b\xE3i \u0111\u1ED7 xe</a> </div> </div> </div>  <section class="hero" id="vehicle-hub"> <div class="hero-inner"> <div class="hero-content"> <h1 class="hero-title">M\u1ECDi th\u1EE9 v\u1EC1 chi\u1EBFc xe<br><em>c\u1EE7a b\u1EA1n, m\u1ED9t n\u01A1i.</em></h1> <ul class="hero-usp"> <li><span class="usp-check">\u2713</span>Tra ph\u1EA1t ngu\u1ED9i theo bi\u1EC3n s\u1ED1 \u2014 kh\xF4ng CAPTCHA, k\u1EBFt qu\u1EA3 ngay</li> <li><span class="usp-check">\u2713</span>T\xEDnh ph\xED ETC t\u1EEBng tuy\u1EBFn + li\xEAn k\u1EBFt ePass qua tr\u1EA1m t\u1EF1 \u0111\u1ED9ng</li> <li><span class="usp-check">\u2713</span>Gi\xE1 x\u0103ng c\u1EADp nh\u1EADt m\u1ED7i k\u1EF3 \u0111i\u1EC1u h\xE0nh \xB7 T\xECm c\xE2y x\u0103ng MoMo g\u1EA7n b\u1EA1n</li> <li><span class="usp-check">\u2713</span>Mua b\u1EA3o hi\u1EC3m xe, \u0111\u1EB7t l\u1ECBch b\u1EA3o d\u01B0\u1EE1ng, g\u1ECDi c\u1EE9u h\u1ED9 \u2014 t\u1EA5t c\u1EA3 trong MoMo</li> </ul> </div> <div class="plate-panel"> <div class="plate-motivation"> <div class="pm-title">T\xECnh tr\u1EA1ng xe b\u1EA1n th\u1EBF n\xE0o</div> <div class="pm-items"> <span class="pm-item"><i data-lucide="alert-circle" width="12" height="12"></i> Ph\u1EA1t ngu\u1ED9i</span> <span class="pm-sep">\xB7</span> <span class="pm-item"><i data-lucide="clipboard-check" width="12" height="12"></i> \u0110\u0103ng ki\u1EC3m</span> <span class="pm-sep">\xB7</span> <span class="pm-item"><i data-lucide="trending-down" width="12" height="12"></i> \u0110\u1ECBnh gi\xE1</span> <span class="pm-sep">\xB7</span> <span class="pm-item"><i data-lucide="milestone" width="12" height="12"></i> ETC</span> </div> </div> <div id="plateInputArea"> <div class="plate-panel-label" id="platePanelLabel">Nh\u1EADp bi\u1EC3n s\u1ED1 \u0111\u1EC3 ki\u1EC3m tra xe</div> <div class="vtype-toggle" id="vtypeToggle"> <button class="vtype-btn active" id="vtype-oto" onclick="setVtype('oto')"> <i data-lucide="car" width="15" height="15"></i>
\xD4 t\xF4
</button> <button class="vtype-btn" id="vtype-xemay" onclick="setVtype('xemay')"> <i data-lucide="bike" width="15" height="15"></i>
Xe m\xE1y
</button> </div> <div class="plate-input-wrap"> <div class="plate-box" id="plateBox"> <div class="plate-vn-strip">\u{1F1FB}\u{1F1F3} VI\u1EC6T NAM</div> <input class="plate-input" id="plateInput" autocomplete="off" placeholder="51A \xB7 12345" maxlength="10" aria-label="Bi\u1EC3n s\u1ED1 xe" inputmode="text"> <div class="plate-province" id="plateProvince"></div> </div> <button class="plate-submit" id="plateSubmit" type="button">Ki\u1EC3m tra xe \u2192</button> </div> </div> </div> </div> <!-- wave divider --> <div class="hero-wave"> <svg viewBox="0 0 1440 72" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0,0 C240,72 480,20 720,40 C960,60 1200,8 1440,48 L1440,72 L0,72 Z" fill="#F7F5FA"></path> </svg> </div> </section>  <div id="plateResultSection" class="prs-wrap" style="display:none" aria-live="polite"> <div class="prs-inner" id="plateResultInner"></div> </div>  <div class="stats-bar"> <div class="stats-bar-inner"> <div class="stat-cell"> <div class="stat-num">1.2<em>M+</em></div> <div class="stat-label">L\u01B0\u1EE3t tra c\u1EE9u ph\u1EA1t ngu\u1ED9i</div> <div class="stat-tag">\u2191 M\u1ED7i th\xE1ng</div> </div> <div class="stat-cell"> <div class="stat-num">63</div> <div class="stat-label">T\u1EC9nh th\xE0nh ph\u1EE7 s\xF3ng</div> <div class="stat-tag">To\xE0n qu\u1ED1c</div> </div> <div class="stat-cell"> <div class="stat-num">10<em>+</em></div> <div class="stat-label">D\u1ECBch v\u1EE5 trong m\u1ED9t n\u01A1i</div> <div class="stat-tag">Kh\xF4ng c\u1EA7n nhi\u1EC1u app</div> </div> <div class="stat-cell"> <div class="stat-num">0\u0111</div> <div class="stat-label">Ph\xED s\u1EED d\u1EE5ng t\u1EA5t c\u1EA3 t\xEDnh n\u0103ng</div> <div class="stat-tag">Mi\u1EC5n ph\xED ho\xE0n to\xE0n</div> </div> </div> </div>  <div class="brand-strip-wrap"> <div class="brand-strip-inner"> <div class="brand-strip-label">Th\xF4ng tin theo h\xE3ng xe</div> <div class="brand-strip-scroll"> <a class="brand-chip" href="/tien-ich-giao-thong/hang-xe/toyota"> <div class="brand-chip-logo" style="background:#fff1f1"><svg viewBox="0 0 60 60" width="32" height="32" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="30" rx="28" ry="28" fill="none" stroke="#EB0A1E" stroke-width="3"></ellipse><ellipse cx="30" cy="30" rx="17" ry="10" fill="none" stroke="#EB0A1E" stroke-width="3"></ellipse><ellipse cx="30" cy="30" rx="10" ry="28" fill="none" stroke="#EB0A1E" stroke-width="3"></ellipse></svg></div> <div class="brand-chip-name">Toyota</div> </a> <a class="brand-chip" href="/tien-ich-giao-thong/hang-xe/honda"> <div class="brand-chip-logo" style="background:#fff1f1"><svg viewBox="0 0 60 40" width="36" height="24" xmlns="http://www.w3.org/2000/svg"><text x="2" y="33" font-family="Arial Black,sans-serif" font-size="36" font-weight="900" fill="#CC0000">H</text></svg></div> <div class="brand-chip-name">Honda</div> </a> <a class="brand-chip" href="/tien-ich-giao-thong/hang-xe/hyundai"> <div class="brand-chip-logo" style="background:#f0f4ff"><svg viewBox="0 0 60 40" width="36" height="24" xmlns="http://www.w3.org/2000/svg"><text x="4" y="33" font-family="Arial Black,sans-serif" font-size="36" font-weight="900" fill="#002C5F" font-style="italic">H</text></svg></div> <div class="brand-chip-name">Hyundai</div> </a> <a class="brand-chip" href="/tien-ich-giao-thong/hang-xe/kia"> <div class="brand-chip-logo" style="background:#f5f5f5"><svg viewBox="0 0 70 28" width="42" height="17" xmlns="http://www.w3.org/2000/svg"><text x="0" y="24" font-family="Arial Black,sans-serif" font-size="26" font-weight="900" fill="#05141F" letter-spacing="-1">KIA</text></svg></div> <div class="brand-chip-name">KIA</div> </a> <a class="brand-chip" href="/tien-ich-giao-thong/hang-xe/mazda"> <div class="brand-chip-logo" style="background:#fff1f1"><svg viewBox="0 0 60 42" width="36" height="25" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="21" rx="28" ry="14" fill="none" stroke="#910000" stroke-width="3"></ellipse><ellipse cx="30" cy="21" rx="14" ry="20" fill="none" stroke="#910000" stroke-width="3"></ellipse></svg></div> <div class="brand-chip-name">Mazda</div> </a> <a class="brand-chip" href="/tien-ich-giao-thong/hang-xe/ford"> <div class="brand-chip-logo" style="background:#f0f4ff"><svg viewBox="0 0 80 36" width="46" height="21" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="76" height="32" rx="16" fill="none" stroke="#003478" stroke-width="3"></rect><text x="40" y="27" font-family="Arial,sans-serif" font-size="20" font-weight="900" fill="#003478" text-anchor="middle" font-style="italic">Ford</text></svg></div> <div class="brand-chip-name">Ford</div> </a> <a class="brand-chip" href="/tien-ich-giao-thong/hang-xe/mitsubishi"> <div class="brand-chip-logo" style="background:#fff1f1"><svg viewBox="0 0 56 52" width="30" height="28" xmlns="http://www.w3.org/2000/svg"><polygon points="28,2 54,48 2,48" fill="none" stroke="#ED1B2F" stroke-width="3"></polygon><polygon points="28,18 48,48 8,48" fill="none" stroke="#ED1B2F" stroke-width="3"></polygon><polygon points="28,34 42,48 14,48" fill="none" stroke="#ED1B2F" stroke-width="3"></polygon></svg></div> <div class="brand-chip-name">Mitsubishi</div> </a> <a class="brand-chip" href="/tien-ich-giao-thong/hang-xe/vinfast"> <div class="brand-chip-logo" style="background:#f0fdf4"><svg viewBox="0 0 70 36" width="42" height="22" xmlns="http://www.w3.org/2000/svg"><text x="2" y="28" font-family="Arial Black,sans-serif" font-size="22" font-weight="900" fill="#00953B" letter-spacing="-0.5">VinFast</text></svg></div> <div class="brand-chip-name">VinFast</div> </a> <a class="brand-chip" href="/tien-ich-giao-thong/hang-xe/mercedes"> <div class="brand-chip-logo" style="background:#f5f5f5"><svg viewBox="0 0 56 56" width="32" height="32" xmlns="http://www.w3.org/2000/svg"><circle cx="28" cy="28" r="26" fill="none" stroke="#1a1a1a" stroke-width="2.5"></circle><line x1="28" y1="4" x2="28" y2="28" stroke="#1a1a1a" stroke-width="2.5"></line><line x1="28" y1="28" x2="7" y2="44" stroke="#1a1a1a" stroke-width="2.5"></line><line x1="28" y1="28" x2="49" y2="44" stroke="#1a1a1a" stroke-width="2.5"></line></svg></div> <div class="brand-chip-name">Mercedes</div> </a> <a class="brand-chip" href="/tien-ich-giao-thong/hang-xe/bmw"> <div class="brand-chip-logo" style="background:#f0f4ff"><svg viewBox="0 0 56 56" width="32" height="32" xmlns="http://www.w3.org/2000/svg"><circle cx="28" cy="28" r="26" fill="none" stroke="#1C1C1C" stroke-width="2.5"></circle><circle cx="28" cy="28" r="13" fill="none" stroke="#1C1C1C" stroke-width="2"></circle><path d="M28 2 L28 28 L2 28" fill="#003A99"></path><path d="M54 28 L28 28 L28 54" fill="#003A99"></path></svg></div> <div class="brand-chip-name">BMW</div> </a> </div> </div> </div> <div class="page-wrap"> <!-- UTILITIES OVERVIEW \u2014 grouped by JTBD --> <section class="section" id="tinh-nang"> <div class="section-head"> <div> <p class="section-eyebrow">T\xEDnh n\u0103ng n\u1ED5i b\u1EADt</p> <h2 class="section-title">T\u1EEB ph\xE1p l\xFD \u0111\u1EBFn h\xE0nh tr\xECnh</h2> <p class="section-desc">Ba nh\xF3m vi\u1EC7c m\xE0 m\u1ECDi ng\u01B0\u1EDDi c\xF3 xe \u0111\u1EC1u c\u1EA7n - MoMo lo tr\u1ECDn, kh\xF4ng c\u1EA7n m\u1EDF nhi\u1EC1u app.</p> </div> </div> <div class="fc-tabs" id="fcTabs"></div> <div class="fc-grid" id="fcGrid"></div> </section> <!-- TRIP PLANNER --> <section class="section" id="chuyen-di"> <div class="page-wrap"> <div class="section-head"> <div> <h2 class="section-title">T\xEDnh chi ph\xED chuy\u1EBFn \u0111i</h2> <p class="section-desc">Nh\u1EADp \u0111i\u1EC3m xu\u1EA5t ph\xE1t v\xE0 \u0111i\u1EC3m \u0111\u1EBFn - h\u1EC7 th\u1ED1ng t\xEDnh chi ph\xED nhi\xEAn li\u1EC7u, ph\xED ETC v\xE0 checklist tr\u01B0\u1EDBc khi xu\u1EA5t ph\xE1t.</p> </div> </div> <div class="tp-widget"> <!-- \u0110i\u1EC3m \u0111i --> <div class="tp-cell" style="position:relative"> <span class="tp-city-label">\u0110i\u1EC3m xu\u1EA5t ph\xE1t</span> <div class="tp-city-row"> <span class="tp-city-icon" id="tp-icon-from"></span> <input class="tp-city-input" id="tpFrom" placeholder="VD: TP. H\u1ED3 Ch\xED Minh" autocomplete="off" oninput="showAC('tpFrom','acFrom')" onfocus="showAC('tpFrom','acFrom')" onblur="hideAC('acFrom')"> </div> <div class="tp-autocomplete" id="acFrom"></div> <button class="tp-swap-btn" onclick="swapCities()" title="\u0110\u1ED5i chi\u1EC1u"> <i data-lucide="arrow-up-down" width="13" height="13"></i> </button> </div> <!-- \u0110i\u1EC3m \u0111\u1EBFn --> <div class="tp-cell" style="position:relative"> <span class="tp-city-label">\u0110i\u1EC3m \u0111\u1EBFn</span> <div class="tp-city-row"> <span class="tp-city-icon" id="tp-icon-to"></span> <input class="tp-city-input" id="tpTo" placeholder="VD: \u0110\xE0 L\u1EA1t, V\u0169ng T\xE0u, H\u1EA3i Ph\xF2ng..." autocomplete="off" oninput="showAC('tpTo','acTo')" onfocus="showAC('tpTo','acTo')" onblur="hideAC('acTo')"> </div> <div class="tp-autocomplete" id="acTo"></div> </div> <!-- Ph\u01B0\u01A1ng ti\u1EC7n --> <div class="tp-cell tp-cell-vehicle"> <span class="tp-city-label">Ph\u01B0\u01A1ng ti\u1EC7n</span> <div class="tp-vpills-row"> <button class="tp-vpill2" data-v="motorbike" onclick="selectVP(this)"> <span class="vp-icon" id="vp-icon-motorbike"></span> Xe m\xE1y
</button> <button class="tp-vpill2 on" data-v="car-gas" onclick="selectVP(this)"> <span class="vp-icon" id="vp-icon-car-gas"></span> \xD4 t\xF4 x\u0103ng
</button> <button class="tp-vpill2" data-v="car-ev" onclick="selectVP(this)"> <span class="vp-icon" id="vp-icon-car-ev"></span> \xD4 t\xF4 \u0111i\u1EC7n
</button> </div> </div> <button class="tp-go-btn" id="tpGoBtn" onclick="goTrip()" disabled>
T\xEDnh chi ph\xED \u2192
</button> </div> </div> </section> <!-- GAS PRICES --> <section class="section" id="gia-xang"> <div class="section-head"> <div> <p class="section-eyebrow">C\u1EADp nh\u1EADt m\u1ED7i k\u1EF3 \u0111i\u1EC1u h\xE0nh</p> <h2 class="section-title">Gi\xE1 x\u0103ng d\u1EA7u h\xF4m nay</h2> <p class="section-desc">K\u1EF3 \u0111i\u1EC1u h\xE0nh g\u1EA7n nh\u1EA5t: 15:00 ng\xE0y 31/07/2026 theo B\u1ED9 C\xF4ng Th\u01B0\u01A1ng.</p> </div> <a class="section-more" href="/tien-ich-giao-thong/gia-xang">Trang gi\xE1 x\u0103ng \u0111\u1EA7y \u0111\u1EE7 \u2192</a> </div> <div class="gas-panel"> <div> <div class="gas-region-tabs"> <button class="grt on" onclick="setRegion(this, 1)">V\xF9ng 1 \xB7 \u0110\u1ED3ng b\u1EB1ng</button> <button class="grt" onclick="setRegion(this, 2)">V\xF9ng 2 \xB7 Mi\u1EC1n n\xFAi, h\u1EA3i \u0111\u1EA3o</button> </div> <div class="gas-table" id="gasTable"></div> </div> <div class="gas-side"> <div class="gas-side-title">Xu h\u01B0\u1EDBng RON 95-III \xB7 90 ng\xE0y</div> <div class="trend-chart"> <svg viewBox="0 0 320 100" style="width:100%;height:100%" preserveAspectRatio="none"> <defs> <linearGradient id="tg" x1="0" y1="0" x2="0" y2="1"> <stop offset="0%" stop-color="#EB2F96" stop-opacity=".22"></stop> <stop offset="100%" stop-color="#EB2F96" stop-opacity="0"></stop> </linearGradient> </defs> <path d="M0,60 L40,55 L80,48 L110,57 L140,44 L170,40 L200,47 L230,35 L260,29 L295,25 L320,22" fill="none" stroke="#EB2F96" stroke-width="2.5" stroke-linejoin="round"></path> <path d="M0,60 L40,55 L80,48 L110,57 L140,44 L170,40 L200,47 L230,35 L260,29 L295,25 L320,22 L320,100 L0,100Z" fill="url(#tg)"></path> <circle cx="320" cy="22" r="4" fill="#EB2F96"></circle> </svg> </div> <div class="trend-x"><span>04/2026</span><span>05/2026</span><span>06/2026</span><span>Nay</span></div> <div class="gas-note"><strong>Gi\xE1 gi\u1EA3m 3 k\u1EF3 li\xEAn ti\u1EBFp.</strong> \u0110\u1ED5 \u0111\u1EA7y b\xECnh 45 l\xEDt RON 95 h\xF4m nay ti\u1EBFt ki\u1EC7m ~7.650\u0111 so v\u1EDBi \u0111\u1EC9nh th\xE1ng 4.</div> </div> </div> </section> <!-- EPASS --> <section class="section" id="epass"> <div class="epass-panel"> <div class="epass-copy"> <h2>Qua tr\u1EA1m kh\xF4ng lo h\u1EBFt ti\u1EC1n,<br>n\u1EA1p ePass t\u1EF1 \u0111\u1ED9ng</h2> <p>Li\xEAn k\u1EBFt t\xE0i kho\u1EA3n ePass v\u1EDBi MoMo m\u1ED9t l\u1EA7n. Khi s\u1ED1 d\u01B0 xu\u1ED1ng d\u01B0\u1EDBi ng\u01B0\u1EE1ng b\u1EA1n ch\u1ECDn, h\u1EC7 th\u1ED1ng t\u1EF1 n\u1EA1p t\u1EEB V\xED MoMo ho\u1EB7c V\xED Tr\u1EA3 Sau - k\u1EC3 c\u1EA3 l\xFAc 5 gi\u1EDD s\xE1ng tr\xEAn cao t\u1ED1c.</p> <ul class="epass-steps"> <li><span class="ep-step-num">1</span>Li\xEAn k\u1EBFt ePass b\u1EB1ng s\u1ED1 \u0111i\u1EC7n tho\u1EA1i \u0111\u0103ng k\xFD th\u1EBB</li> <li><span class="ep-step-num">2</span>Ch\u1ECDn ng\u01B0\u1EE1ng k\xEDch ho\u1EA1t v\xE0 s\u1ED1 ti\u1EC1n n\u1EA1p m\u1ED7i l\u1EA7n</li> <li><span class="ep-step-num">3</span>Xong - MoMo t\u1EF1 canh s\u1ED1 d\u01B0 cho b\u1EA1n</li> </ul> <button class="btn-fill" onclick="toast('M\u1EDF MoMo App \u0111\u1EC3 li\xEAn k\u1EBFt ePass...')">Li\xEAn k\u1EBFt ePass trong App</button> <a class="section-more ep-full-link" href="/epass" style="display:inline-block;margin-top:12px">Xem trang ePass \u0111\u1EA7y \u0111\u1EE7 \u2192</a> <!-- Route toll teaser --> <div class="ep-route-teaser" style="margin-top:18px;padding:14px 16px;background:rgba(235,47,150,.06);border:1.5px solid rgba(235,47,150,.15);border-radius:12px;"> <div style="font-size:11px;font-weight:700;color:var(--pink-500);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px;">\u{1F6E3}\uFE0F T\xEDnh ph\xED tr\u1EA1m ETC tr\u01B0\u1EDBc khi \u0111i</div> <div style="font-size:12.5px;color:var(--gray-600);margin-bottom:10px;line-height:1.5">C\u1EA7n n\u1EA1p bao nhi\xEAu ti\u1EC1n ePass cho chuy\u1EBFn HCM\u2192\u0110\xE0 L\u1EA1t? T\xEDnh ngay.</div> <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px"> <a href="/epass/tinh-phi-etc?r=hcm-dalat" style="height:28px;padding:0 12px;line-height:28px;border-radius:20px;font-size:12px;font-weight:600;background:rgba(235,47,150,.1);color:var(--pink-500);border:1px solid rgba(235,47,150,.2);">HCM \u2192 \u0110\xE0 L\u1EA1t</a> <a href="/epass/tinh-phi-etc?r=hcm-vung-tau" style="height:28px;padding:0 12px;line-height:28px;border-radius:20px;font-size:12px;font-weight:600;background:var(--gray-50);color:var(--gray-600);border:1px solid var(--gray-200);">HCM \u2192 V\u0169ng T\xE0u</a> <a href="/epass/tinh-phi-etc?r=hn-ha-long" style="height:28px;padding:0 12px;line-height:28px;border-radius:20px;font-size:12px;font-weight:600;background:var(--gray-50);color:var(--gray-600);border:1px solid var(--gray-200);">HN \u2192 H\u1EA1 Long</a> </div> <a href="/epass/tinh-phi-etc" style="font-size:12.5px;font-weight:700;color:var(--pink-500);">T\xEDnh tuy\u1EBFn kh\xE1c \u2192</a> </div> </div> <div class="epass-visual"> <div class="ep-mock"> <div class="ep-mock-label" style="margin-bottom:16px">Ch\u1ECDn s\u1ED1 ti\u1EC1n mu\u1ED1n n\u1EA1p v\xE0o ePass</div> <div class="ep-amount-chips" style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px"> <button class="ep-chip" style="height:52px;font-size:15px;font-weight:800" onclick="selectEpChip(this,50)">50.000\u0111</button> <button class="ep-chip on" style="height:52px;font-size:15px;font-weight:800" onclick="selectEpChip(this,100)">100.000\u0111</button> <button class="ep-chip" style="height:52px;font-size:15px;font-weight:800" onclick="selectEpChip(this,200)">200.000\u0111</button> <button class="ep-chip" style="height:52px;font-size:15px;font-weight:800" onclick="selectEpChip(this,300)">300.000\u0111</button> </div> <button class="ep-topup-btn" id="epTopupBtn" onclick="toast('M\u1EDF MoMo App \u0111\u1EC3 n\u1EA1p ePass...')">N\u1EA1p 100.000\u0111 v\xE0o ePass</button> <div class="ep-footnote" style="margin-top:12px;font-size:11.5px;color:rgba(255,255,255,.35);text-align:center;line-height:1.5">
N\u1EA1p qua MoMo App \xB7 Li\xEAn k\u1EBFt ePass VTTI<br>S\u1ED1 d\u01B0 hi\u1EC3n th\u1ECB sau khi \u0111\u0103ng nh\u1EADp
</div> <div class="ep-divider ep-auto-row-wrap" style="margin-top:16px"></div> <div class="ep-auto-row-wrap" style="display:flex;align-items:center;gap:8px;margin-top:14px"> <span class="ep-auto-badge">\u26A1 AUTO-TOPUP</span> <span style="font-size:12px;color:rgba(255,255,255,.5)">T\u1EF1 n\u1EA1p khi s\u1ED1 d\u01B0 xu\u1ED1ng th\u1EA5p \xB7 Li\xEAn k\u1EBFt 1 l\u1EA7n</span> </div> </div> </div> </div> </section> <!-- INSURANCE --> <section class="section" id="bao-hiem"> <div class="section-head"> <div> <h2 class="section-title" id="ins-title">B\u1EA3o hi\u1EC3m TNDS</h2> <p class="section-desc" id="ins-desc">Ph\xED tham kh\u1EA3o cho \xF4 t\xF4 con d\u01B0\u1EDBi 6 ch\u1ED7.</p> </div> </div> <div class="ins-tabs"> <button class="ins-tab active" onclick="switchInsTab('tnds', this)">B\u1EA3o hi\u1EC3m TNDS</button> <button class="ins-tab" onclick="switchInsTab('vcx', this)">B\u1EA3o hi\u1EC3m th\xE2n v\u1ECF</button> </div> <div class="ins-wrap"> <div class="ins-edu" id="ins-edu"> <div class="ins-edu-icon"><i data-lucide="triangle-alert" width="28" height="28" style="color:#D97706"></i></div> <h3 id="ins-edu-title">Kh\xF4ng c\xF3 TNDS b\u1ECB ph\u1EA1t bao nhi\xEAu?</h3> <p id="ins-edu-body1">\xD4 t\xF4 kh\xF4ng c\xF3 b\u1EA3o hi\u1EC3m TNDS b\u1EAFt bu\u1ED9c b\u1ECB ph\u1EA1t <strong>400.000 - 600.000\u0111</strong> theo Ngh\u1ECB \u0111\u1ECBnh 100/2019, v\xE0 kh\xF4ng th\u1EC3 \u0111\u0103ng ki\u1EC3m.</p> <p id="ins-edu-body2">Gi\u1EA5y ch\u1EE9ng nh\u1EADn \u0111i\u1EC7n t\u1EED mua qua MoMo c\xF3 gi\xE1 tr\u1ECB ph\xE1p l\xFD t\u01B0\u01A1ng \u0111\u01B0\u01A1ng b\u1EA3n gi\u1EA5y theo Ngh\u1ECB \u0111\u1ECBnh 67/2023.</p> </div> <div class="ins-compare"> <div class="ins-compare-head"> <strong id="ins-compare-title">Ph\xED TNDS 1 n\u0103m \xB7 \xD4 t\xF4 d\u01B0\u1EDBi 6 ch\u1ED7</strong> <span>\u0110\xE3 g\u1ED3m VAT</span> </div> <div id="insList"></div> </div> </div> </section> <!-- STATIONS --> <section class="section" id="cay-xang"> <div class="section-head"> <div> <h2 class="section-title">C\xE2y x\u0103ng & garage g\u1EA7n b\u1EA1n</h2> <p class="section-desc">Qu\xE9t QR MoMo t\u1EA1i v\xF2i b\u01A1m - nh\u1EADn voucher 20.000\u0111 l\u1EA7n \u0111\u1EA7u, kh\xF4ng x\u1EBFp h\xE0ng thanh to\xE1n. T\xECm tr\u1EA1m \u0111\u1ED1i t\xE1c g\u1EA7n b\u1EA1n.</p> </div> <a class="section-more" href="/cay-xang">Xem b\u1EA3n \u0111\u1ED3 \u0111\u1EA7y \u0111\u1EE7 \u2192</a> </div> <div class="station-grid"> <div class="station-card" onclick="toast('Ch\u1EC9 \u0111\u01B0\u1EDDng t\u1EDBi Petrolimex 101...')"> <div class="st-head"> <div class="st-logo" style="background:#fff1f1;padding:0"><img src="https://homepage.momocdn.net/img/iconholder-260730132529.png" width="32" height="32" alt="C\xE2y x\u0103ng" style="display:block"></div> <div><div class="st-name">Petrolimex 101</div><div class="st-dist">0.4 km \xB7 M\u1EDF 24/7</div></div> </div> <div class="st-addr">101 Nguy\u1EC5n Th\u1ECB Th\u1EADp, Q.7, TP.HCM</div> </div> <div class="station-card" onclick="toast('Ch\u1EC9 \u0111\u01B0\u1EDDng t\u1EDBi PV Oil L\xEA V\u0103n L\u01B0\u01A1ng...')"> <div class="st-head"> <div class="st-logo" style="background:#fff1f1;padding:0"><img src="https://homepage.momocdn.net/img/iconholder-260730132529.png" width="32" height="32" alt="C\xE2y x\u0103ng" style="display:block"></div> <div><div class="st-name">PV Oil L\xEA V\u0103n L\u01B0\u01A1ng</div><div class="st-dist">1.1 km \xB7 M\u1EDF 24/7</div></div> </div> <div class="st-addr">288 L\xEA V\u0103n L\u01B0\u01A1ng, Q.7, TP.HCM</div> </div> <div class="station-card" onclick="toast('Ch\u1EC9 \u0111\u01B0\u1EDDng t\u1EDBi Garage Tu\u1EA5n Auto...')"> <div class="st-head"> <div class="st-logo" style="background:#f0fdf4;padding:0"><img src="https://homepage.momocdn.net/img/logo-260730132528.png" width="32" height="32" alt="Garage" style="display:block"></div> <div><div class="st-name">Garage Tu\u1EA5n Auto</div><div class="st-dist">1.8 km \xB7 T2 - T7</div></div> </div> <div class="st-addr">45 Tr\u1EA7n Xu\xE2n So\u1EA1n, Q.7, TP.HCM</div> </div> <div class="station-card" onclick="toast('Ch\u1EC9 \u0111\u01B0\u1EDDng t\u1EDBi Petrolimex Hu\u1EF3nh T\u1EA5n Ph\xE1t...')"> <div class="st-head"> <div class="st-logo" style="background:#fff1f1;padding:0"><img src="https://homepage.momocdn.net/img/iconholder-260730132529.png" width="32" height="32" alt="C\xE2y x\u0103ng" style="display:block"></div> <div><div class="st-name">Petrolimex HTP</div><div class="st-dist">2.3 km \xB7 M\u1EDF 24/7</div></div> </div> <div class="st-addr">500 Hu\u1EF3nh T\u1EA5n Ph\xE1t, Q.7, TP.HCM</div> </div> </div> <div class="o2o-note"> <span class="o2o-qr"><i data-lucide="smartphone" width="28" height="28"></i></span> <div><strong>Qu\xE9t QR t\u1EA1i v\xF2i b\u01A1m</strong> \u0111\u1EC3 k\xEDch ho\u1EA1t h\u1ED3 s\u01A1 xe v\xE0 nh\u1EADn ngay voucher 20.000\u0111 cho l\u1EA7n \u0111\u1ED5 x\u0103ng \u0111\u1EA7u ti\xEAn qua MoMo.</div> </div> </section> <!-- CUU HO --> <section class="section" id="cuu-ho"> <div class="section-head"> <div> <h2 class="section-title">C\u1EE9u h\u1ED9 xe m\xE1y to\xE0n qu\u1ED1c</h2> <p class="section-desc">H\u1ECFng xe gi\u1EEFa \u0111\u01B0\u1EDDng, g\u1ECDi c\u1EE9u h\u1ED9 ngay tr\xEAn MoMo. Zuttoride ph\u1EE7 s\xF3ng 63 t\u1EC9nh th\xE0nh, \u0111\u1EBFn trong 30 ph\xFAt, thanh to\xE1n kh\xF4ng ti\u1EC1n m\u1EB7t.</p> </div> <a class="section-more" href="/tien-ich-giao-thong/cuu-ho">Xem chi ti\u1EBFt \u2192</a> </div> <div class="rescue-panel"> <div class="rescue-card" onclick="toast('M\u1EDF MoMo App \u0111\u1EC3 g\u1ECDi c\u1EE9u h\u1ED9...')"> <div class="rescue-logo"><img src="https://static.momocdn.net/app/img/publicservice/logo_zuttoride.png" alt="Zuttoride"></div> <div class="rescue-body"> <div class="rescue-name">Zuttoride Rescue</div> <div class="rescue-meta"><i data-lucide="bike" style="width:13px;height:13px;display:inline;vertical-align:middle;margin-right:4px"></i>Xe m\xE1y m\u1ECDi h\xE3ng \xB7 C\u1EE9u h\u1ED9 t\u1EA1i ch\u1ED7 ho\u1EB7c k\xE9o v\u1EC1 garage</div> <div class="rescue-tags"> <span class="rescue-tag">\u0110\u1EBFn trong 30 ph\xFAt</span> <span class="rescue-tag">63 t\u1EC9nh th\xE0nh</span> <span class="rescue-tag">Thanh to\xE1n MoMo</span> </div> </div> <button class="rescue-cta">G\u1ECDi c\u1EE9u h\u1ED9 ngay</button> </div> <div class="rescue-steps"> <div class="rescue-step"><span class="rs-num">1</span><div><strong>M\u1EDF MoMo</strong><p>T\xECm "C\u1EE9u h\u1ED9 xe m\xE1y" trong m\u1EE5c D\u1ECBch v\u1EE5 giao th\xF4ng</p></div></div> <div class="rescue-step"><span class="rs-num">2</span><div><strong>X\xE1c nh\u1EADn v\u1ECB tr\xED</strong><p>GPS t\u1EF1 \u0111\u1ECBnh v\u1ECB, \u0111i\u1EC1u ch\u1EC9nh n\u1EBFu c\u1EA7n - chia s\u1EBB v\u1ECB tr\xED cho t\xE0i x\u1EBF c\u1EE9u h\u1ED9</p></div></div> <div class="rescue-step"><span class="rs-num">3</span><div><strong>Theo d\xF5i & thanh to\xE1n</strong><p>Xem t\xE0i x\u1EBF di chuy\u1EC3n theo th\u1EDDi gian th\u1EF1c, thanh to\xE1n khi xong</p></div></div> </div> </div> </section> <!-- PARKING --> <section class="section" id="parking"> <div class="section-head"> <div> <h2 class="section-title">T\xECm b\xE3i \u0111\u1ED7 xe</h2> <p class="section-desc">Hai \u0111\u1ED1i t\xE1c b\xE3i \u0111\u1ED7 t\xEDch h\u1EE3p MoMo - t\xECm v\u1ECB tr\xED v\xE0 thanh to\xE1n kh\xF4ng ti\u1EC1n m\u1EB7t ngay trong App.</p> </div> <a class="section-more" href="/tien-ich-giao-thong/bai-do-xe">Xem demo \u2192</a> </div> <div class="parking-grid"> <div class="parking-card"> <div class="parking-card-top"> <div class="parking-logo"><img src="https://static.momocdn.net/app/img/transportcenter/ic_VETC_parking.png" alt="VETC Parking"></div> <div> <div class="parking-name">VETC Parking</div> <div class="parking-sub">B\xE3i \u0111\u1ED7 t\xEDch h\u1EE3p th\u1EBB VETC</div> </div> </div> <p class="parking-desc">V\xE0o c\u1ED5ng b\u1EB1ng th\u1EBB VETC, ph\xED t\u1EF1 tr\u1EEB qua li\xEAn k\u1EBFt MoMo. Kh\xF4ng c\u1EA7n l\u1EA5y v\xE9 gi\u1EA5y, kh\xF4ng c\u1EA7n ch\u1EDD.</p> <div class="parking-feats"> <span><i data-lucide="table-2" style="width:12px;height:12px;vertical-align:middle;margin-right:4px"></i>50+ b\xE3i \u0111\u1ED7</span> <span><i data-lucide="car" style="width:12px;height:12px;vertical-align:middle;margin-right:4px"></i>\xD4 t\xF4 & xe m\xE1y</span> <span><i data-lucide="smartphone" style="width:12px;height:12px;vertical-align:middle;margin-right:4px"></i>Thanh to\xE1n t\u1EF1 \u0111\u1ED9ng</span> </div> </div> <div class="parking-card"> <div class="parking-card-top"> <div class="parking-logo"><img src="https://static.momocdn.net/app/img/publicservice/eparking_topup.png" alt="eParking"></div> <div> <div class="parking-name">eParking</div> <div class="parking-sub">B\xE3i \u0111\u1ED7 th\xF4ng minh</div> </div> </div> <p class="parking-desc">T\xECm v\xE0 thanh to\xE1n t\u1EA1i c\xE1c b\xE3i \u0111\u1ED7 th\xF4ng minh trong to\xE0 nh\xE0, TTTM, b\u1EC7nh vi\u1EC7n qua MoMo.</p> <div class="parking-feats"> <span><i data-lucide="building-2" style="width:12px;height:12px;vertical-align:middle;margin-right:4px"></i>TTTM, b\u1EC7nh vi\u1EC7n</span> <span><i data-lucide="car" style="width:12px;height:12px;vertical-align:middle;margin-right:4px"></i>\xD4 t\xF4 & xe m\xE1y</span> <span><i data-lucide="activity" style="width:12px;height:12px;vertical-align:middle;margin-right:4px"></i>L\u1ECBch s\u1EED \u0111\u1ED7 xe</span> </div> </div> </div> </section> <!-- W2A: VEHICLE PROFILE + MOXE --> <section class="section" id="ho-so-xe"> <div class="w2a-panel"> <div class="w2a-copy"> <h2>L\u01B0u xe m\u1ED9t l\u1EA7n,<br>MoMo lo ph\u1EA7n c\xF2n l\u1EA1i</h2> <p>T\u1EA1o h\u1ED3 s\u01A1 xe trong App \u0111\u1EC3 m\u1EDF kh\xF3a tr\u1EA3i nghi\u1EC7m \u0111\u1EA7y \u0111\u1EE7: m\u1ECDi ti\u1EC7n \xEDch tr\xEAn trang n\xE0y \u0111\u01B0\u1EE3c \u0111i\u1EC1n s\u1EB5n th\xF4ng tin xe c\u1EE7a b\u1EA1n, k\xE8m c\u1EA3nh b\xE1o t\u1EF1 \u0111\u1ED9ng cho m\u1ECDi deadline.</p> <div class="w2a-feats"> <div class="w2a-feat"><span class="w2a-feat-icon"><i data-lucide="bell" style="width:20px;height:20px"></i></span><div><strong>Qu\xE9t ph\u1EA1t ngu\u1ED9i h\xE0ng tu\u1EA7n</strong><span>T\u1EF1 \u0111\u1ED9ng ki\u1EC3m tra 03:00 th\u1EE9 Hai, b\xE1o ngay khi c\xF3 vi ph\u1EA1m m\u1EDBi</span></div></div> <div class="w2a-feat"><span class="w2a-feat-icon"><i data-lucide="calendar-clock" style="width:20px;height:20px"></i></span><div><strong>Nh\u1EAFc h\u1EA1n \u0111\u0103ng ki\u1EC3m & TNDS</strong><span>Tr\u01B0\u1EDBc 45, 30 v\xE0 7 ng\xE0y - kh\xF4ng bao gi\u1EDD qu\xEAn gia h\u1EA1n</span></div></div> <div class="w2a-feat"><span class="w2a-feat-icon"><i data-lucide="camera" style="width:20px;height:20px"></i></span><div><strong>Th\xEAm xe b\u1EB1ng OCR</strong><span>Ch\u1EE5p \u0111\u0103ng k\xFD xe, th\xF4ng tin t\u1EF1 \u0111i\u1EC1n trong 5 gi\xE2y</span></div></div> <div class="w2a-feat"><span class="w2a-feat-icon"><i data-lucide="award" style="width:20px;height:20px"></i></span><div><strong>H\u1EA1ng MoXe</strong><span>T\xEDch \u0111i\u1EC3m m\u1ED7i giao d\u1ECBch, \u0111\u1ED5i voucher r\u1EEDa xe, gi\u1EA3m ph\xED b\u1EA3o hi\u1EC3m</span></div></div> </div> <button class="btn-fill" onclick="toast('M\u1EDF MoMo App \u0111\u1EC3 t\u1EA1o h\u1ED3 s\u01A1 xe...')">T\u1EA1o h\u1ED3 s\u01A1 xe mi\u1EC5n ph\xED</button> </div> <div class="w2a-visual"> <div class="mini-plate"> <div class="mp-body"> <div class="mp-num">51F-123.45</div> <div class="mp-tier">\u{1F948} H\u1EA1ng B\u1EA1c \xB7 420 \u0111i\u1EC3m</div> </div> </div> </div> </div> <!-- MoXe Tier breakdown --> <div class="moxe-tier-header"> <div class="moxe-tier-label">Ch\u01B0\u01A1ng tr\xECnh h\u1EA1ng th\xE0nh vi\xEAn</div> <div class="moxe-tier-title">H\u1EA1ng MoXe - c\xE0ng d\xF9ng, c\xE0ng c\xF3 l\u1EE3i</div> </div> <div class="moxe-tiers"> <div class="moxe-tier-card dong"> <div class="moxe-tier-icon">\u{1F949}</div> <div class="moxe-tier-name">MoXe \u0110\u1ED3ng</div> <div class="moxe-tier-cond"><strong>\u0110i\u1EC1u ki\u1EC7n</strong>Add xe v\xE0o Vehicle Hub</div> <div class="moxe-tier-benefits"> <div class="moxe-tier-benefit">Tra ph\u1EA1t ngu\u1ED9i</div> <div class="moxe-tier-benefit">ePass t\u1EF1 \u0111\u1ED9ng n\u1EA1p</div> <div class="moxe-tier-benefit">\u0110\u0103ng ki\u1EC3m c\u01A1 b\u1EA3n</div> </div> </div> <div class="moxe-tier-card bac"> <div class="moxe-tier-icon">\u{1F948}</div> <div class="moxe-tier-name">MoXe B\u1EA1c</div> <div class="moxe-tier-cond"><strong>\u0110i\u1EC1u ki\u1EC7n</strong>D\xF9ng 3+ ti\u1EC7n \xEDch/th\xE1ng li\xEAn t\u1EE5c 3 th\xE1ng</div> <div class="moxe-tier-benefits"> <div class="moxe-tier-benefit">T\u1EA5t c\u1EA3 quy\u1EC1n l\u1EE3i \u0110\u1ED3ng</div> <div class="moxe-tier-benefit">Gi\u1EA3m th\xEAm 5% ph\xED b\u1EA3o hi\u1EC3m</div> <div class="moxe-tier-benefit">Voucher r\u1EEDa xe h\xE0ng qu\xFD</div> </div> </div> <div class="moxe-tier-card vang"> <div class="moxe-tier-icon">\u{1F947}</div> <div class="moxe-tier-name">MoXe V\xE0ng</div> <div class="moxe-tier-cond"><strong>\u0110i\u1EC1u ki\u1EC7n</strong>3+ ti\u1EC7n \xEDch \xD7 3 th\xE1ng + mua 1 s\u1EA3n ph\u1EA9m b\u1EA3o hi\u1EC3m</div> <div class="moxe-tier-benefits"> <div class="moxe-tier-benefit">T\u1EA5t c\u1EA3 quy\u1EC1n l\u1EE3i B\u1EA1c</div> <div class="moxe-tier-benefit">Gi\u1EA3m th\xEAm 10% ph\xED b\u1EA3o hi\u1EC3m</div> <div class="moxe-tier-benefit">Mi\u1EC5n ph\xED c\u1EE9u h\u1ED9 1 l\u1EA7n/n\u0103m</div> </div> </div> <div class="moxe-tier-card bachkim"> <div class="moxe-tier-icon">\u{1F48E}</div> <div class="moxe-tier-name">MoXe B\u1EA1ch Kim</div> <div class="moxe-tier-cond"><strong>\u0110i\u1EC1u ki\u1EC7n</strong>3+ ti\u1EC7n \xEDch \xD7 3 th\xE1ng + mua VCX &amp; CTPL</div> <div class="moxe-tier-benefits"> <div class="moxe-tier-benefit">T\u1EA5t c\u1EA3 quy\u1EC1n l\u1EE3i V\xE0ng</div> <div class="moxe-tier-benefit">Gi\u1EA3m th\xEAm 15% ph\xED b\u1EA3o hi\u1EC3m</div> <div class="moxe-tier-benefit">\u01AFu ti\xEAn h\u1ED7 tr\u1EE3 24/7</div> </div> </div> </div> </section> <!-- FAQ --> <section class="section"> <div class="section-head"> <div> <p class="section-eyebrow">C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p</p> <h2 class="section-title">V\u1EC1 ph\u1EA1t ngu\u1ED9i & ti\u1EC7n \xEDch xe</h2> </div> </div> <div class="faq-list"> <div class="faq-item"> <button class="faq-q" onclick="toggleFaq(this)">Ph\u1EA1t ngu\u1ED9i l\xE0 g\xEC? Bao l\xE2u th\xEC c\xF3 k\u1EBFt qu\u1EA3 tr\xEAn h\u1EC7 th\u1ED1ng?</button> <div class="faq-a">Ph\u1EA1t ngu\u1ED9i l\xE0 h\xECnh th\u1EE9c x\u1EED ph\u1EA1t vi ph\u1EA1m giao th\xF4ng qua h\xECnh \u1EA3nh t\u1EEB camera gi\xE1m s\xE1t, kh\xF4ng d\u1EEBng xe t\u1EA1i ch\u1ED7. Vi ph\u1EA1m th\u01B0\u1EDDng xu\u1EA5t hi\u1EC7n tr\xEAn h\u1EC7 th\u1ED1ng c\u1EE7a C\u1EE5c CSGT sau 3 - 10 ng\xE0y k\u1EC3 t\u1EEB th\u1EDDi \u0111i\u1EC3m vi ph\u1EA1m. MoMo \u0111\u1ED3ng b\u1ED9 d\u1EEF li\u1EC7u n\xE0y h\xE0ng tu\u1EA7n.</div> </div> <div class="faq-item"> <button class="faq-q" onclick="toggleFaq(this)">Tra ph\u1EA1t ngu\u1ED9i tr\xEAn MoMo c\xF3 m\u1EA5t ph\xED kh\xF4ng?</button> <div class="faq-a">Ho\xE0n to\xE0n mi\u1EC5n ph\xED v\xE0 kh\xF4ng gi\u1EDBi h\u1EA1n s\u1ED1 l\u1EA7n tra c\u1EE9u. MoMo c\u0169ng kh\xF4ng y\xEAu c\u1EA7u \u0111\u0103ng nh\u1EADp v\xE0 kh\xF4ng l\u01B0u bi\u1EC3n s\u1ED1 b\u1EA1n nh\u1EADp khi tra c\u1EE9u tr\xEAn web.</div> </div> <div class="faq-item"> <button class="faq-q" onclick="toggleFaq(this)">C\xF3 n\u1ED9p ph\u1EA1t ngu\u1ED9i online \u0111\u01B0\u1EE3c kh\xF4ng?</button> <div class="faq-a">\u0110\u01B0\u1EE3c. Sau khi x\xE1c nh\u1EADn vi ph\u1EA1m v\xE0 nh\u1EADn quy\u1EBFt \u0111\u1ECBnh x\u1EED ph\u1EA1t, b\u1EA1n c\xF3 th\u1EC3 n\u1ED9p ph\u1EA1t tr\u1EF1c tuy\u1EBFn qua MoMo (k\u1EBFt n\u1ED1i C\u1ED5ng D\u1ECBch v\u1EE5 c\xF4ng) m\xE0 kh\xF4ng c\u1EA7n \u0111\u1EBFn kho b\u1EA1c.</div> </div> <div class="faq-item"> <button class="faq-q" onclick="toggleFaq(this)">Kh\xF4ng mua b\u1EA3o hi\u1EC3m TNDS c\xF3 sao kh\xF4ng?</button> <div class="faq-a">\xD4 t\xF4 kh\xF4ng c\xF3 TNDS b\u1EAFt bu\u1ED9c b\u1ECB ph\u1EA1t 400.000 - 600.000\u0111 (xe m\xE1y 100.000 - 200.000\u0111) v\xE0 \xF4 t\xF4 s\u1EBD kh\xF4ng \u0111\u1EE7 \u0111i\u1EC1u ki\u1EC7n \u0111\u0103ng ki\u1EC3m. Gi\u1EA5y ch\u1EE9ng nh\u1EADn \u0111i\u1EC7n t\u1EED mua qua MoMo c\xF3 gi\xE1 tr\u1ECB ph\xE1p l\xFD \u0111\u1EA7y \u0111\u1EE7.</div> </div> <div class="faq-item"> <button class="faq-q" onclick="toggleFaq(this)">Auto-Topup ePass tr\u1EEB ti\u1EC1n t\u1EEB \u0111\xE2u?</button> <div class="faq-a">B\u1EA1n ch\u1ECDn ngu\u1ED3n ti\u1EC1n khi c\u1EA5u h\xECnh: V\xED MoMo ho\u1EB7c V\xED Tr\u1EA3 Sau. Khi s\u1ED1 d\u01B0 ePass xu\u1ED1ng d\u01B0\u1EDBi ng\u01B0\u1EE1ng \u0111\xE3 \u0111\u1EB7t, h\u1EC7 th\u1ED1ng t\u1EF1 n\u1EA1p \u0111\xFAng s\u1ED1 ti\u1EC1n b\u1EA1n ch\u1ECDn v\xE0 g\u1EEDi th\xF4ng b\xE1o x\xE1c nh\u1EADn sau m\u1ED7i l\u1EA7n n\u1EA1p.</div> </div> </div> </section> </div>  <section class="section" id="chi-phi-xe"> <div style="max-width:var(--content);margin:0 auto;padding:0 20px"> <div class="section-head"> <div> <h2 class="section-title">Nu\xF4i xe t\u1ED1n bao nhi\xEAu m\u1ED7i th\xE1ng?</h2> <p class="section-desc">Nh\u1EADp th\xF3i quen di chuy\u1EC3n, h\u1EC7 th\u1ED1ng t\xEDnh t\u1ED5ng chi ph\xED th\u1EF1c t\u1EBF g\u1ED3m x\u0103ng, b\u1EA3o hi\u1EC3m, b\u1EA3o d\u01B0\u1EE1ng, \u0111\u0103ng ki\u1EC3m v\xE0 ph\xED ETC.</p> </div> </div> <div class="vc-wrap"> <!-- FORM --> <div class="vc-form"> <div class="vc-field"> <div class="vc-label">Lo\u1EA1i ph\u01B0\u01A1ng ti\u1EC7n</div> <div class="vc-pills" id="vc-vehicle-pills"> <button class="vc-pill on" data-vc-vehicle="oto"><i data-lucide="car" width="14" height="14" style="vertical-align:middle;margin-right:5px"></i>Sedan</button> <button class="vc-pill" data-vc-vehicle="oto" data-vc-subtype="suv"><i data-lucide="car" width="14" height="14" style="vertical-align:middle;margin-right:5px"></i>SUV / Crossover</button> <button class="vc-pill" data-vc-vehicle="oto" data-vc-subtype="hybrid"><i data-lucide="zap" width="14" height="14" style="vertical-align:middle;margin-right:5px"></i>Hybrid / EV</button> <button class="vc-pill" data-vc-vehicle="xemay"><i data-lucide="bike" width="14" height="14" style="vertical-align:middle;margin-right:5px"></i>Xe m\xE1y</button> </div> </div> <div class="vc-field" id="vc-fuel-field"> <div class="vc-label">Lo\u1EA1i nhi\xEAn li\u1EC7u</div> <div class="vc-pills" id="vc-fuel-pills"> <button class="vc-pill on" data-vc-fuel="ron95">E10 RON 95</button> <button class="vc-pill" data-vc-fuel="e5">E5 RON 92</button> <button class="vc-pill" data-vc-fuel="diesel">Diesel</button> </div> </div> <div class="vc-field"> <div class="vc-label">Km \u0111i m\u1ED7i th\xE1ng</div> <div class="vc-slider-row"> <input class="vc-slider" type="range" id="vc-km" min="200" max="5000" step="100" value="1500"> <span class="vc-slider-val" id="vc-km-val">1.500 km</span> </div> </div> <div class="vc-field" id="vc-consumption-field"> <div class="vc-label">M\u1EE9c ti\xEAu th\u1EE5 nhi\xEAn li\u1EC7u</div> <div class="vc-slider-row"> <input class="vc-slider" type="range" id="vc-consume" min="4" max="20" step="0.5" value="10"> <span class="vc-slider-val" id="vc-consume-val">10 L/100km</span> </div> </div> <div class="vc-field"> <div class="vc-label">C\xE1c chi ph\xED c\u1ED1 \u0111\u1ECBnh</div> <div class="vc-toggle-row"> <span class="vc-toggle-label">B\u1EA3o hi\u1EC3m TNDS</span> <label class="vc-toggle"><input type="checkbox" id="vc-tnds" checked><span class="vc-toggle-track"></span></label> </div> <div class="vc-toggle-row"> <span class="vc-toggle-label">B\u1EA3o hi\u1EC3m v\u1EADt ch\u1EA5t xe</span> <label class="vc-toggle"><input type="checkbox" id="vc-vcx"><span class="vc-toggle-track"></span></label> </div> <div class="vc-toggle-row"> <span class="vc-toggle-label">Ph\xED \u0111\u01B0\u1EDDng b\u1ED9 (theo n\u0103m)</span> <label class="vc-toggle"><input type="checkbox" id="vc-road" checked><span class="vc-toggle-track"></span></label> </div> <div class="vc-toggle-row"> <span class="vc-toggle-label">ETC / ph\xED cao t\u1ED1c</span> <label class="vc-toggle"><input type="checkbox" id="vc-etc" checked><span class="vc-toggle-track"></span></label> </div> <div class="vc-toggle-row"> <span class="vc-toggle-label">B\u1EA3o d\u01B0\u1EE1ng \u0111\u1ECBnh k\u1EF3</span> <label class="vc-toggle"><input type="checkbox" id="vc-maintenance" checked><span class="vc-toggle-track"></span></label> </div> <div class="vc-toggle-row"> <span class="vc-toggle-label">\u0110\u0103ng ki\u1EC3m (ph\xE2n b\u1ED5 theo th\xE1ng)</span> <label class="vc-toggle"><input type="checkbox" id="vc-inspection" checked><span class="vc-toggle-track"></span></label> </div> </div> </div> <!-- RESULT --> <div class="vc-result"> <div class="vc-total"> <div class="vc-total-label">T\u1ED5ng chi ph\xED \u01B0\u1EDBc t\xEDnh</div> <div class="vc-total-num" id="vc-total-num">\u2014</div> <div class="vc-total-unit">/th\xE1ng &nbsp;\xB7&nbsp; <span id="vc-total-year">\u2014</span>/n\u0103m</div> </div> <div class="vc-chart-wrap"> <svg id="vc-donut" viewBox="0 0 140 140"></svg> <div class="vc-chart-center"> <div class="vc-chart-center-num" id="vc-chart-center-num">\u2014</div> <div class="vc-chart-center-sub">\u0111/km</div> </div> </div> <div class="vc-breakdown" id="vc-breakdown"></div> <div class="vc-insight" id="vc-insight"></div> <button class="vc-cta" onclick="window.open('https://momo.vn','_blank')">T\u1ED1i \u01B0u chi ph\xED xe v\u1EDBi MoMo \u2192</button> </div> </div> </div> </section>  <section class="section" id="knowledge-hub"> <div class="section-inner"> <div class="section-head"> <div> <h2 class="section-title">Ch\u1EE7 xe c\u1EA7n bi\u1EBFt</h2> </div> <a class="kh-see-all" href="https://momo.vn/tin-tuc" target="_blank" rel="noreferrer">Xem t\u1EA5t c\u1EA3 b\xE0i vi\u1EBFt
<i data-lucide="chevron-right" style="width:16px;height:16px"></i> </a> </div> <div class="kh-grid"> <a class="kh-card kh-card--featured" href="https://momo.vn/tin-tuc" target="_blank" rel="noreferrer"> <div class="kh-card-img" style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%);"> <div class="kh-card-img-icon"> <i data-lucide="info" style="width:14px;height:14px"></i> </div> </div> <div class="kh-card-body"> <span class="kh-tag">Ph\u1EA1t ngu\u1ED9i</span> <h3 class="kh-card-title">B\u1ECB ph\u1EA1t ngu\u1ED9i ph\u1EA3i l\xE0m g\xEC? Quy tr\xECnh n\u1ED9p ph\u1EA1t v\xE0 kh\xE1ng ngh\u1ECB m\u1EDBi nh\u1EA5t 2026</h3> <p class="kh-card-desc">H\u01B0\u1EDBng d\u1EABn \u0111\u1EA7y \u0111\u1EE7 t\u1EEB khi nh\u1EADn th\xF4ng b\xE1o \u0111\u1EBFn thanh to\xE1n: tra c\u1EE9u tr\u1EF1c tuy\u1EBFn, x\xE1c minh \u0111\xFAng l\u1ED7i, n\u1ED9p ph\u1EA1t qua MoMo v\xE0 c\xE1ch kh\xE1ng ngh\u1ECB khi sai.</p> <div class="kh-card-meta"> <i data-lucide="clock" style="width:14px;height:14px"></i>
5 ph\xFAt \u0111\u1ECDc
</div> </div> </a> <div class="kh-side-stack"> <a class="kh-card kh-card--compact" href="https://momo.vn/tin-tuc" target="_blank" rel="noreferrer"> <div class="kh-card-body"> <span class="kh-tag kh-tag--insurance">B\u1EA3o hi\u1EC3m</span> <h3 class="kh-card-title">B\u1EA3o hi\u1EC3m TNDS xe m\xE1y 2026: Gi\xE1, quy\u1EC1n l\u1EE3i v\xE0 c\xE1ch mua online trong 2 ph\xFAt</h3> <div class="kh-card-meta"> <i data-lucide="clock" style="width:14px;height:14px"></i>
4 ph\xFAt \u0111\u1ECDc
</div> </div> </a> <a class="kh-card kh-card--compact" href="https://momo.vn/tin-tuc" target="_blank" rel="noreferrer"> <div class="kh-card-body"> <span class="kh-tag kh-tag--fuel">Gi\xE1 x\u0103ng</span> <h3 class="kh-card-title">X\u0103ng E10 v\xE0 E5: Ch\xEAnh nhau bao nhi\xEAu v\xE0 lo\u1EA1i n\xE0o h\u1EA1i \u0111\u1ED9ng c\u01A1 h\u01A1n?</h3> <div class="kh-card-meta"> <i data-lucide="clock" style="width:14px;height:14px"></i>
3 ph\xFAt \u0111\u1ECDc
</div> </div> </a> <a class="kh-card kh-card--compact" href="https://momo.vn/tin-tuc" target="_blank" rel="noreferrer"> <div class="kh-card-body"> <span class="kh-tag kh-tag--epass">ePass</span> <h3 class="kh-card-title">ePass l\xE0 g\xEC? C\xE1ch \u0111\u0103ng k\xFD, n\u1EA1p ti\u1EC1n v\xE0 d\xF9ng tr\xEAn to\xE0n b\u1ED9 cao t\u1ED1c Vi\u1EC7t Nam</h3> <div class="kh-card-meta"> <i data-lucide="clock" style="width:14px;height:14px"></i>
6 ph\xFAt \u0111\u1ECDc
</div> </div> </a> </div> </div> <div class="kh-row"> <a class="kh-card kh-card--row" href="https://momo.vn/tin-tuc" target="_blank" rel="noreferrer"> <div class="kh-card-body"> <span class="kh-tag">\u0110\u0103ng ki\u1EC3m</span> <h3 class="kh-card-title">\u0110\u0103ng ki\u1EC3m \xF4 t\xF4 2026: Chu k\u1EF3 m\u1EDBi, ph\xED m\u1EDBi v\xE0 danh s\xE1ch \u0111i\u1EC3m \u0111\u0103ng ki\u1EC3m to\xE0n qu\u1ED1c</h3> <div class="kh-card-meta"> <i data-lucide="clock" style="width:14px;height:14px"></i>
5 ph\xFAt \u0111\u1ECDc
</div> </div> </a> <a class="kh-card kh-card--row" href="https://momo.vn/tin-tuc" target="_blank" rel="noreferrer"> <div class="kh-card-body"> <span class="kh-tag kh-tag--cost">Chi ph\xED</span> <h3 class="kh-card-title">Chi ph\xED th\u1EF1c s\u1EDF h\u1EEFu \xF4 t\xF4 t\u1EA1i Vi\u1EC7t Nam: T\xEDnh \u0111\xFAng, t\xEDnh \u0111\u1EE7 \u0111\u1EC3 kh\xF4ng b\u1ECB b\u1EA5t ng\u1EDD</h3> <div class="kh-card-meta"> <i data-lucide="clock" style="width:14px;height:14px"></i>
7 ph\xFAt \u0111\u1ECDc
</div> </div> </a> <a class="kh-card kh-card--row" href="https://momo.vn/tin-tuc" target="_blank" rel="noreferrer"> <div class="kh-card-body"> <span class="kh-tag kh-tag--insurance">B\u1EA3o hi\u1EC3m</span> <h3 class="kh-card-title">So s\xE1nh b\u1EA3o hi\u1EC3m th\xE2n v\u1ECF \xF4 t\xF4 2026: Ch\u1ECDn g\xF3i n\xE0o ti\u1EBFt ki\u1EC7m nh\u1EA5t?</h3> <div class="kh-card-meta"> <i data-lucide="clock" style="width:14px;height:14px"></i>
8 ph\xFAt \u0111\u1ECDc
</div> </div> </a> </div> </div> </section>  <footer class="site-footer"> <div class="footer-inner"> <div class="footer-cols"> <div> <div class="footer-brand">MoMo <em>Xe & Giao Th\xF4ng</em></div> <p class="footer-about">B\u1ED9 ti\u1EC7n \xEDch cho ch\u1EE7 xe tr\xEAn MoMo: tra ph\u1EA1t ngu\u1ED9i, gi\xE1 x\u0103ng d\u1EA7u, n\u1EA1p ePass, b\u1EA3o hi\u1EC3m xe v\xE0 m\u1EA1ng l\u01B0\u1EDBi c\xE2y x\u0103ng \u0111\u1ED1i t\xE1c to\xE0n qu\u1ED1c.</p> </div> <div class="footer-col"> <h4>Ti\u1EC7n \xEDch</h4> <a href="#tra-phat-nguoi">Tra ph\u1EA1t ngu\u1ED9i</a> <a href="/phat-nguoi-nop-qua-momo">N\u1ED9p ph\u1EA1t vi ph\u1EA1m</a> <a href="/tien-ich-giao-thong/gia-xang">Gi\xE1 x\u0103ng h\xF4m nay</a> <a href="/epass">N\u1EA1p ePass</a> <a href="#bao-hiem">B\u1EA3o hi\u1EC3m TNDS</a> <a href="#cuu-ho">C\u1EE9u h\u1ED9 xe m\xE1y</a> <a href="#parking">B\xE3i \u0111\u1ED7 xe</a> </div> <div class="footer-col"> <h4>Tra c\u1EE9u ph\u1ED5 bi\u1EBFn</h4> <a href="#tra-phat-nguoi">Ph\u1EA1t ngu\u1ED9i TP.HCM</a> <a href="#tra-phat-nguoi">Ph\u1EA1t ngu\u1ED9i H\xE0 N\u1ED9i</a> <a href="/tien-ich-giao-thong/gia-xang">Gi\xE1 x\u0103ng RON 95</a> <a href="/tien-ich-giao-thong/gia-xang">Gi\xE1 d\u1EA7u Diesel</a> </div> <div class="footer-col"> <h4>MoMo</h4> <a href="#" onclick="toast('V\u1EC1 MoMo...');return false">V\u1EC1 ch\xFAng t\xF4i</a> <a href="#" onclick="toast('\u0110i\u1EC1u kho\u1EA3n...');return false">\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng</a> <a href="#" onclick="toast('B\u1EA3o m\u1EADt...');return false">Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt</a> </div> </div> <div class="footer-legal"> <span>\xA9 2026 M_Service. Prototype n\u1ED9i b\u1ED9 - Research Spec, kh\xF4ng ph\u1EA3i production.</span> <span>D\u1EEF li\u1EC7u demo. Gi\xE1 v\xE0 th\xF4ng tin ch\u1EC9 mang t\xEDnh minh h\u1ECDa.</span> </div> </div> </footer> <div id="toast"></div> <script>
  /* \u2500\u2500 data \u2500\u2500 */
  const GAS = {
    1: [
      { name: 'E10 RON 95-III', sub: 'X\u0103ng sinh h\u1ECDc cao c\u1EA5p', price: '22.850', change: '\u25B2 1.420\u0111', dir: 'up' },
      { name: 'E5 RON 92', sub: 'X\u0103ng sinh h\u1ECDc', price: '22.380', change: '\u25B2 1.300\u0111', dir: 'up' },
      { name: 'Diesel 0.05S', sub: 'D\u1EA7u \xF4 t\xF4', price: '27.620', change: '\u25B2 1.860\u0111', dir: 'up' },
    ],
    2: [
      { name: 'E10 RON 95-III', sub: 'V\xF9ng 2', price: '23.300', change: '\u25B2 1.420\u0111', dir: 'up' },
      { name: 'E5 RON 92', sub: 'V\xF9ng 2', price: '22.820', change: '\u25B2 1.300\u0111', dir: 'up' },
      { name: 'Diesel 0.05S', sub: 'V\xF9ng 2', price: '28.170', change: '\u25B2 1.860\u0111', dir: 'up' },
    ],
  };

  const INSURERS = {
    tnds: [
      { code: 'MIC', color: '#B71C1C', name: 'MIC B\u1EA3o hi\u1EC3m', perk: 'Sedan, SUV, Hatchback', price: '489.000', best: true },
      { code: 'PTI', color: '#0D47A1', name: 'PTI B\u1EA3o hi\u1EC3m', perk: 'Sedan, SUV, Pickup', price: '499.000' },
      { code: 'BM', color: '#00695C', name: 'B\u1EA3o Minh', perk: 'SUV, Crossover, MPV', price: '510.000' },
      { code: 'BV', color: '#1565C0', name: 'B\u1EA3o Vi\u1EC7t', perk: 'Sedan, Hybrid, EV', price: '520.000' },
      { code: 'PVI', color: '#4527A0', name: 'PVI B\u1EA3o hi\u1EC3m', perk: 'SUV, Pickup, Van', price: '525.000' },
    ],
    vcx: [
      { code: 'LBT', color: '#1B5E20', name: 'Liberty B\u1EA3o hi\u1EC3m', perk: 'Sedan, SUV, MPV', price: '4.200.000', best: true },
      { code: 'MIC', color: '#B71C1C', name: 'MIC B\u1EA3o hi\u1EC3m', perk: 'VinFast, EV, Sedan', price: '4.500.000' },
      { code: 'PTI', color: '#0D47A1', name: 'PTI B\u1EA3o hi\u1EC3m', perk: 'Pickup, SUV \u0111\u1ECBa h\xECnh', price: '4.650.000' },
      { code: 'BM', color: '#00695C', name: 'B\u1EA3o Minh', perk: 'SUV, Crossover, MPV', price: '4.800.000' },
      { code: 'BV', color: '#1565C0', name: 'B\u1EA3o Vi\u1EC7t', perk: 'Sedan, Hybrid, EV', price: '4.950.000' },
    ],
  };

  const INS_CONTENT = {
    tnds: {
      title: 'B\u1EA3o hi\u1EC3m TNDS',
      desc: 'Ph\xED tham kh\u1EA3o cho \xF4 t\xF4 con d\u01B0\u1EDBi 6 ch\u1ED7.',
      eduTitle: 'Kh\xF4ng c\xF3 TNDS b\u1ECB ph\u1EA1t bao nhi\xEAu?',
      eduBody1: '\xD4 t\xF4 kh\xF4ng c\xF3 b\u1EA3o hi\u1EC3m TNDS b\u1EAFt bu\u1ED9c b\u1ECB ph\u1EA1t <strong>400.000 - 600.000\u0111</strong> theo Ngh\u1ECB \u0111\u1ECBnh 100/2019, v\xE0 kh\xF4ng th\u1EC3 \u0111\u0103ng ki\u1EC3m.',
      eduBody2: 'Gi\u1EA5y ch\u1EE9ng nh\u1EADn \u0111i\u1EC7n t\u1EED mua qua MoMo c\xF3 gi\xE1 tr\u1ECB ph\xE1p l\xFD t\u01B0\u01A1ng \u0111\u01B0\u01A1ng b\u1EA3n gi\u1EA5y theo Ngh\u1ECB \u0111\u1ECBnh 67/2023.',
      compareTitle: 'Ph\xED TNDS 1 n\u0103m \xB7 \xD4 t\xF4 d\u01B0\u1EDBi 6 ch\u1ED7',
      buyLabel: 'TNDS',
    },
    vcx: {
      title: 'B\u1EA3o hi\u1EC3m th\xE2n v\u1ECF',
      desc: 'Ph\xED tham kh\u1EA3o cho xe c\xF3 gi\xE1 tr\u1ECB ~600 tri\u1EC7u, t\u1EF7 l\u1EC7 ph\xED 0.7-0.825%/n\u0103m.',
      eduTitle: 'Th\xE2n v\u1ECF b\u1EA3o v\u1EC7 xe b\u1EA1n kh\u1ECFi \u0111i\u1EC1u g\xEC?',
      eduBody1: 'B\u1EA3o hi\u1EC3m th\xE2n v\u1ECF (VCX) b\u1ED3i th\u01B0\u1EDDng thi\u1EC7t h\u1EA1i do <strong>tai n\u1EA1n, va ch\u1EA1m, tr\u1ED9m c\u1EAFp, ch\xE1y n\u1ED5, thi\xEAn tai</strong> - nh\u1EEFng r\u1EE7i ro TNDS b\u1EAFt bu\u1ED9c kh\xF4ng chi tr\u1EA3.',
      eduBody2: '\u0110\xE2y l\xE0 b\u1EA3o hi\u1EC3m t\u1EF1 nguy\u1EC7n, nh\u01B0ng th\u01B0\u1EDDng b\u1EAFt bu\u1ED9c n\u1EBFu xe mua tr\u1EA3 g\xF3p theo y\xEAu c\u1EA7u ng\xE2n h\xE0ng.',
      compareTitle: 'Ph\xED th\xE2n v\u1ECF 1 n\u0103m \xB7 Xe ~600 tri\u1EC7u',
      buyLabel: 'Th\xE2n v\u1ECF',
    },
  };

  var insTab = 'tnds';

  function switchInsTab(tab, btn) {
    insTab = tab;
    document.querySelectorAll('.ins-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    const c = INS_CONTENT[tab];
    document.getElementById('ins-title').textContent = c.title;
    document.getElementById('ins-desc').textContent = c.desc;
    document.getElementById('ins-edu-title').textContent = c.eduTitle;
    document.getElementById('ins-edu-body1').innerHTML = c.eduBody1;
    document.getElementById('ins-edu-body2').textContent = c.eduBody2;
    document.getElementById('ins-compare-title').textContent = c.compareTitle;
    renderInsurers();
  }

  /* \u2500\u2500 render \u2500\u2500 */
  function renderGas(region) {
    document.getElementById('gasTable').innerHTML = GAS[region].map(g => \\\`
      <div class="gas-row">
        <div><div class="gr-name">\\\${g.name}</div><div class="gr-sub">\\\${g.sub}</div></div>
        <div class="gr-right">
          <span class="gr-badge \\\${g.dir}">\\\${g.change}</span>
          <span class="gr-price">\\\${g.price}<span class="gr-unit"> \u0111/l\xEDt</span></span>
        </div>
      </div>\\\`).join('');
  }

  function renderInsurers() {
    const list = INSURERS[insTab];
    const label = INS_CONTENT[insTab].buyLabel;
    document.getElementById('insList').innerHTML = list.map(i => \\\`
      <div class="ins-row">
        <div class="ins-logo" style="background:\\\${i.color}">\\\${i.code}</div>
        <div class="ins-info">
          <div class="ins-name">\\\${i.name}\\\${i.best ? '<span class="ins-best">R\u1EBA NH\u1EA4T</span>' : ''}</div>
          <div class="ins-perk">\\\${i.perk}</div>
        </div>
        <div class="ins-price">\\\${i.price}<small>\u0111/n\u0103m</small></div>
        <button class="ins-buy" onclick="toast('Mua \\\${label} \\\${i.name}...')">Mua ngay</button>
      </div>\\\`).join('');
  }

  /* \u2500\u2500 interactions \u2500\u2500 */
  function setRegion(btn, region) {
    document.querySelectorAll('.grt').forEach(t => t.classList.remove('on'));
    btn.classList.add('on');
    renderGas(region);
  }

  // \u2500\u2500 LOOKUP \u2014 re-use phat-nguoi logic \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  const VEHICLE_LABELS = { oto: '\xD4 t\xF4', xemay: 'Xe m\xE1y', xedien: 'Xe m\xE1y \u0111i\u1EC7n' };
  const MOCK_VIOLATIONS = {
    '29A12345': {
      plate: '29A12345',
      violations: [
        {
          id: 'v1', type: 'V\u01B0\u1EE3t \u0111\xE8n \u0111\u1ECF', severity: 'red',
          date: '15/06/2026', time: '08:23',
          road: 'Ng\xE3 t\u01B0 Khu\u1EA5t Duy Ti\u1EBFn - Nguy\u1EC5n Tr\xE3i',
          unit: 'Ph\xF2ng CSGT - C\xF4ng an TP. H\xE0 N\u1ED9i',
          status: 'Ch\u01B0a x\u1EED l\xFD',
          fine: { oto: '4.000.000 - 6.000.000', xemay: '800.000 - 1.000.000', xedien: '800.000 - 1.000.000' },
          article: { title: 'V\u01B0\u1EE3t \u0111\xE8n \u0111\u1ECF b\u1ECB ph\u1EA1t bao nhi\xEAu? M\u1EE9c ph\u1EA1t \xF4 t\xF4, xe m\xE1y 2026', url: '/mospark-blog/vuot-den-do-bi-phat-bao-nhieu' },
        },
        {
          id: 'v2', type: 'Qu\xE1 t\u1ED1c \u0111\u1ED9 t\u1EEB 20-35 km/h', severity: 'amber',
          date: '20/06/2026', time: '14:47',
          road: '\u0110\u01B0\u1EDDng V\xE0nh \u0111ai 3, \u0111o\u1EA1n Km 8+200',
          unit: 'Ph\xF2ng CSGT - C\xF4ng an TP. H\xE0 N\u1ED9i',
          status: 'Ch\u01B0a x\u1EED l\xFD',
          fine: { oto: '3.000.000 - 5.000.000', xemay: '600.000 - 800.000', xedien: '600.000 - 800.000' },
          article: { title: 'Ph\u1EA1t qu\xE1 t\u1ED1c \u0111\u1ED9 2026: B\u1EA3ng m\u1EE9c ph\u1EA1t chi ti\u1EBFt theo t\u1EEBng lo\u1EA1i xe', url: '/mospark-blog/phat-qua-toc-do-2026' },
        },
      ],
    },
  };

  function iconSvgHub(name) {
    const map = {
      calendar: () => licon('Calendar', 13, 2),
      location: () => licon('MapPin', 13, 2),
      arrow:    () => licon('ChevronRight', 14, 2.5),
      momo:     () => licon('Shield', 16, 2),
      phone:    () => licon('Smartphone', 16, 2),
    };
    return map[name] ? map[name]() : '';
  }

  function renderViolationCard(v, vehicle) {
    const fine = v.fine[vehicle] || v.fine.oto;
    return \\\`
      <div class="vr-card">
        <div class="vr-card-main">
          <div class="vr-violation-bar\\\${v.severity === 'red' ? ' is-red' : ''}"></div>
          <div class="vr-card-body">
            <div class="vr-name-block">
              <div class="vr-violation-name">\\\${v.type}</div>
              <div class="vr-meta-line">\\\${iconSvgHub('calendar')} \\\${v.date} \\\${v.time} &nbsp;\xB7&nbsp; \\\${iconSvgHub('location')} \\\${v.road}</div>
            </div>
            <div class="vr-fine-block">
              <div class="vr-fine-amount">\\\${fine}\u0111</div>
              <div class="vr-fine-unit">m\u1EE9c ph\u1EA1t tham kh\u1EA3o</div>
            </div>
            <span class="vr-status-pill">\\\${v.status}</span>
          </div>
        </div>
        <div class="vr-card-footer">
          <a class="vr-guide-link" href="\\\${v.article.url}">\\\${v.article.title} \\\${iconSvgHub('arrow')}</a>
        </div>
      </div>\\\`;
  }

  function renderViolationSection(data, vehicle) {
    const vLabel = VEHICLE_LABELS[vehicle] || '\xD4 t\xF4';
    const count = data.violations.length;
    const section = document.getElementById('violationResultSection');
    const inner = document.getElementById('violationResultInner');
    if (!section || !inner) return;

    inner.innerHTML = \\\`
      <div class="vr-header">
        <div class="vr-header-left">
          <span class="vr-plate">\\\${data.plate}</span>
          <span class="vr-vehicle-tag">\\\${vLabel}</span>
        </div>
        <span class="vr-status-badge">\\\${count} vi ph\u1EA1m ch\u1EDD x\u1EED l\xFD</span>
      </div>
      <div class="vr-list">
        \\\${data.violations.map(v => renderViolationCard(v, vehicle)).join('')}
      </div>
      <div class="vr-actions">
        <button class="vr-btn-primary" onclick="window.open('https://momo.vn','_blank')">\\\${iconSvgHub('momo')} N\u1ED9p ph\u1EA1t qua MoMo</button>
        <button class="vr-btn-secondary">\\\${iconSvgHub('phone')} Xem chi ti\u1EBFt tr\xEAn App</button>
      </div>\\\`;

    section.classList.add('is-open');
    section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  /* \u2500\u2500 PLATE HUB \u2500\u2500 */
  (function () {
    const SAVED_KEY = 'vh_saved_plate';
    const plateInput = document.getElementById('plateInput');
    const plateSubmit = document.getElementById('plateSubmit');
    const plateBox = document.getElementById('plateBox');

    const PROVINCE_MAP = {
      '11':'Cao B\u1EB1ng','12':'L\u1EA1ng S\u01A1n','14':'Qu\u1EA3ng Ninh',
      '15':'H\u1EA3i Ph\xF2ng','16':'H\u1EA3i Ph\xF2ng','17':'Th\xE1i B\xECnh','18':'Nam \u0110\u1ECBnh',
      '19':'Th\xE1i Nguy\xEAn','20':'V\u0129nh Ph\xFAc','21':'H\xE0 Giang','22':'Tuy\xEAn Quang',
      '23':'L\xE0o Cai','24':'Y\xEAn B\xE1i','25':'H\xF2a B\xECnh','26':'H\xE0 Nam',
      '27':'B\u1EAFc Giang','28':'H\xE0 N\u1ED9i','29':'H\xE0 N\u1ED9i','30':'H\xE0 N\u1ED9i',
      '31':'H\xE0 N\u1ED9i','32':'H\xE0 N\u1ED9i','33':'H\xE0 N\u1ED9i','34':'H\u1EA3i D\u01B0\u01A1ng',
      '35':'Ninh B\xECnh','36':'Thanh H\xF3a','37':'Ngh\u1EC7 An','38':'H\xE0 T\u0129nh',
      '39':'\u0110\u1ED3ng Nai','40':'H\xE0 Nam','43':'\u0110\xE0 N\u1EB5ng','47':'\u0110\u1EAFk L\u1EAFk',
      '48':'\u0110\u1EAFk N\xF4ng','49':'L\xE2m \u0110\u1ED3ng',
      '51':'TP. H\u1ED3 Ch\xED Minh','52':'TP. H\u1ED3 Ch\xED Minh','53':'TP. H\u1ED3 Ch\xED Minh',
      '54':'TP. H\u1ED3 Ch\xED Minh','55':'TP. H\u1ED3 Ch\xED Minh','56':'TP. H\u1ED3 Ch\xED Minh',
      '57':'TP. H\u1ED3 Ch\xED Minh','58':'TP. H\u1ED3 Ch\xED Minh','59':'TP. H\u1ED3 Ch\xED Minh',
      '60':'\u0110\u1ED3ng Nai','61':'B\xECnh D\u01B0\u01A1ng','62':'Ti\u1EC1n Giang','63':'Long An',
      '64':'V\u0129nh Long','65':'C\u1EA7n Th\u01A1','66':'\u0110\u1ED3ng Th\xE1p','67':'An Giang',
      '68':'Ki\xEAn Giang','69':'C\xE0 Mau','70':'T\xE2y Ninh','71':'B\u1EBFn Tre',
      '72':'B\xE0 R\u1ECBa - V\u0169ng T\xE0u','73':'B\xECnh Ph\u01B0\u1EDBc','75':'Th\u1EEBa Thi\xEAn Hu\u1EBF',
      '76':'Qu\u1EA3ng Ng\xE3i','77':'B\xECnh \u0110\u1ECBnh','78':'Ph\xFA Y\xEAn','79':'Kh\xE1nh H\xF2a',
      '81':'Gia Lai','82':'Kon Tum','83':'S\xF3c Tr\u0103ng','84':'Tr\xE0 Vinh',
      '85':'H\u1EADu Giang','86':'B\xECnh Thu\u1EADn','88':'V\u0129nh Long','92':'Qu\u1EA3ng Nam',
      '93':'B\xECnh Thu\u1EADn','95':'B\u1EA1c Li\xEAu','97':'B\u1EAFc K\u1EA1n','98':'B\u1EAFc Ninh','99':'B\u1EAFc Ninh',
    };

    const plateProvince = document.getElementById('plateProvince');

    function detectProvince(raw) {
      const digits = raw.replace(/[^0-9]/g, '').slice(0, 2);
      return digits.length === 2 ? (PROVINCE_MAP[digits] || null) : null;
    }

    /* Format plate display: uppercase, dot separator */
    let currentVtype = 'oto';

    window.setVtype = function(type) {
      currentVtype = type;
      document.getElementById('vtype-oto').classList.toggle('active', type === 'oto');
      document.getElementById('vtype-xemay').classList.toggle('active', type === 'xemay');
      plateInput.placeholder = type === 'xemay' ? '51A1 \xB7 12345' : '51A \xB7 12345';
      plateInput.focus();
    };

    /* Format bi\u1EC3n s\u1ED1 \u0111\xFAng theo lo\u1EA1i xe:
       - \xD4 t\xF4:        51A-12345   (stripped 8 chars: 2+1+5)
       - Xe m\xE1y m\u1EDBi:  51A1-12345  (stripped 9 chars: 2+1+1+5)
       - Xe m\xE1y c\u0169:   51A1-1234   (stripped 8 chars: 2+1+1+4, ambiguous, default car)  */
    function smartFormatPlate(raw) {
      if (raw.length >= 9) return raw.slice(0, 4) + '-' + raw.slice(4); // moto m\u1EDBi
      if (raw.length > 3)  return raw.slice(0, 3) + '-' + raw.slice(3); // \xF4 t\xF4 / moto c\u0169
      return raw;
    }

    plateInput.addEventListener('input', () => {
      let v = plateInput.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 9);
      plateInput.value = smartFormatPlate(v);

      // Auto-detect: 9 chars \u2192 xe m\xE1y m\u1EDBi
      if (v.length === 9) setVtype('xemay');
      else if (v.length >= 7 && v.length <= 8) setVtype('oto');

      const province = detectProvince(v);
      if (province) {
        plateProvince.textContent = province;
        plateProvince.classList.add('is-visible');
      } else {
        plateProvince.classList.remove('is-visible');
      }
    });

    /* Deterministic fake data from plate string */
    function hashPlate(s) {
      let h = 0;
      for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
      return Math.abs(h);
    }

    function getPlateData(plate) {
      const h = hashPlate(plate);
      const mockData = MOCK_VIOLATIONS[plate.replace('-', '')];
      const violationCount = mockData ? mockData.violations.length : (h % 7 === 0 ? 1 : 0);
      const dkRemain = 15 + (h % 280);
      return { violationCount, dkRemain, mockData };
    }

    function statusClass(days) {
      if (days <= 30) return 'is-alert';
      if (days <= 90) return 'is-warn';
      return 'is-ok';
    }

    const LI = {
      chevron:       licon('ChevronRight', 16, 2),
      alertTriangle: licon('TriangleAlert', 16, 2),
      checkCircle:   licon('CheckCircle2', 16, 2),
      shieldCheck:   licon('ShieldCheck', 16, 2),
      gauge:         licon('Gauge', 16, 2),
      wallet:        licon('Wallet', 16, 2),
      rotateCcw:     licon('RotateCcw', 16, 2),
    };

const USE_CASE_LABELS = {
      'phat-nguoi': 'Nh\u1EADp bi\u1EC3n s\u1ED1 \u0111\u1EC3 ki\u1EC3m tra ph\u1EA1t ngu\u1ED9i',
      'dang-kiem':  'Nh\u1EADp bi\u1EC3n s\u1ED1 \u0111\u1EC3 tra \u0111\u0103ng ki\u1EC3m',
      'gia-xang':   null,
      'bao-hiem':   'Nh\u1EADp bi\u1EC3n s\u1ED1 \u0111\u1EC3 tra b\u1EA3o hi\u1EC3m xe',
    };
    const USE_CASE_NAMES = {
      'phat-nguoi': 'Ph\u1EA1t ngu\u1ED9i',
      'dang-kiem':  '\u0110\u0103ng ki\u1EC3m',
      'gia-xang':   'Gi\xE1 x\u0103ng',
      'bao-hiem':   'B\u1EA3o hi\u1EC3m',
    };
    let activeUseCase = 'dang-kiem';

    const prsWrap  = document.getElementById('plateResultSection');
    const prsInner = document.getElementById('plateResultInner');

    function prsIcon(type) {
      const icons = {
        ok:    licon('CheckCircle2', 22, 2),
        warn:  licon('AlertTriangle', 22, 2),
        alert: licon('XCircle', 22, 2),
        info:  licon('Info', 22, 2),
      };
      return \\\`<div class="prs-icon \\\${type}">\\\${icons[type] || icons.ok}</div>\\\`;
    }

    const PLATE_REGION = {
      '11':'H\xE0 N\u1ED9i','12':'H\xE0 N\u1ED9i','14':'Qu\u1EA3ng Ninh','15':'H\u1EA3i Ph\xF2ng','16':'H\u1EA3i Ph\xF2ng',
      '17':'Th\xE1i B\xECnh','18':'Nam \u0110\u1ECBnh','19':'H\xE0 Nam','20':'Th\xE1i Nguy\xEAn','21':'Y\xEAn B\xE1i',
      '22':'Tuy\xEAn Quang','23':'H\xE0 Giang','24':'Cao B\u1EB1ng','25':'L\u1EA1ng S\u01A1n','26':'B\u1EAFc Ninh',
      '27':'H\u1EA3i D\u01B0\u01A1ng','28':'H\u01B0ng Y\xEAn','29':'H\xE0 N\u1ED9i','30':'H\xE0 N\u1ED9i','31':'H\xE0 N\u1ED9i',
      '32':'H\xE0 N\u1ED9i','33':'H\xE0 N\u1ED9i','34':'H\u1EA3i D\u01B0\u01A1ng','35':'Ninh B\xECnh','36':'Thanh Ho\xE1',
      '37':'Ngh\u1EC7 An','38':'H\xE0 T\u0129nh','43':'\u0110\xE0 N\u1EB5ng','47':'\u0110\u1EAFk L\u1EAFk','48':'\u0110\u1EAFk N\xF4ng',
      '49':'L\xE2m \u0110\u1ED3ng','50':'TP. HCM','51':'TP. HCM','52':'TP. HCM','53':'TP. HCM',
      '54':'TP. HCM','55':'TP. HCM','56':'TP. HCM','57':'TP. HCM','58':'TP. HCM',
      '59':'TP. HCM','60':'\u0110\u1ED3ng Nai','61':'B\xECnh D\u01B0\u01A1ng','62':'Long An','63':'Ti\u1EC1n Giang',
      '64':'V\u0129nh Long','65':'C\u1EA7n Th\u01A1','66':'\u0110\u1ED3ng Th\xE1p','67':'An Giang','68':'Ki\xEAn Giang',
      '69':'C\xE0 Mau','70':'T\xE2y Ninh','71':'B\u1EBFn Tre','72':'B\xE0 R\u1ECBa-V\u0169ng T\xE0u',
      '73':'B\xECnh Ph\u01B0\u1EDBc','74':'B\xECnh \u0110\u1ECBnh','75':'Th\u1EEBa Thi\xEAn Hu\u1EBF','76':'Qu\u1EA3ng Ng\xE3i',
      '77':'Ph\xFA Y\xEAn','78':'Kh\xE1nh Ho\xE0','79':'Kh\xE1nh Ho\xE0',
    };
    function getRegion(plate) {
      const prefix = plate.replace(/[^0-9]/g,'').slice(0,2);
      return PLATE_REGION[prefix] || PROVINCE_MAP[prefix] || '';
    }

    // Mock vehicle catalog keyed by plate (for demo plates) + hash-based fallback
    const MOCK_VEHICLES = {
      '29A12345': { brand:'Toyota', model:'Fortuner 2.7 4x4 AT', year:2022, color:'Tr\u1EAFng ng\u1ECDc trai' },
      '51G88888': { brand:'Honda', model:'CR-V 1.5L Turbo', year:2021, color:'Xanh d\u01B0\u01A1ng' },
      '30F12345': { brand:'Mazda', model:'CX-5 Premium 2.0', year:2023, color:'\u0110\u1ECF pha l\xEA' },
    };
    const BRANDS_POOL = [
      {b:'Toyota', models:['Vios 1.5G CVT','Camry 2.5Q','Fortuner 2.7 4x4','Innova Cross 2.0']},
      {b:'Honda',  models:['City 1.5RS CVT','CR-V 1.5L Turbo','HR-V L CVT','Civic RS']},
      {b:'Hyundai',models:['Accent 1.4AT','Tucson 2.0 AWD','Santa Fe Premium','Creta 1.5 Turbo']},
      {b:'Mazda',  models:['Mazda3 2.0 Premium','CX-5 2.0 Luxury','CX-8 2.5 Premium']},
      {b:'KIA',    models:['Morning 1.0 AT','Seltos 1.4 Turbo','Sportage 2.0 Premium']},
      {b:'Ford',   models:['Ranger XLT 2.0','Everest Titanium+','Territory Titanium']},
    ];
    const COLORS_POOL = ['Tr\u1EAFng ng\u1ECDc trai','\u0110en \xE1nh kim','B\u1EA1c titan','X\xE1m anthracite','\u0110\u1ECF pha l\xEA','Xanh d\u01B0\u01A1ng navy'];

    function getMockVehicle(plate, vtype) {
      const key = plate.replace(/[^a-zA-Z0-9]/g,'').toUpperCase();
      if (MOCK_VEHICLES[key]) return MOCK_VEHICLES[key];
      if (vtype === 'xemay') {
        const h = hashPlate(plate);
        const xeModels = ['Honda Wave Alpha','Yamaha Exciter 155','Honda SH 160i','Yamaha NVX 155','Honda Air Blade 125'];
        return { brand: h%2===0?'Honda':'Yamaha', model: xeModels[h%xeModels.length], year: 2019+(h%6), color: COLORS_POOL[h%COLORS_POOL.length] };
      }
      const h = hashPlate(plate);
      const pool = BRANDS_POOL[h % BRANDS_POOL.length];
      return { brand: pool.b, model: pool.models[h % pool.models.length], year: 2019+(h%6), color: COLORS_POOL[h%COLORS_POOL.length] };
    }

    function detectVtype(plate) {
      // Xemay m\u1EDBi (9 k\xFD t\u1EF1): 2s\u1ED1 + 1ch\u1EEF + 1s\u1ED1 + 5s\u1ED1  (vd: 51G1-12345)
      // \xD4 t\xF4 (8 k\xFD t\u1EF1):      2s\u1ED1 + 1ch\u1EEF + 5s\u1ED1         (vd: 51A-12345) \u2014 KH\xD4NG match b\u1EB1ng regex
      // Xe m\xE1y c\u0169 (8 k\xFD t\u1EF1): 2s\u1ED1 + 1ch\u1EEF + 1s\u1ED1 + 4s\u1ED1  \u2014 gi\u1EEF nguy\xEAn vtype user ch\u1ECDn
      const raw = plate.replace(/[^a-zA-Z0-9]/g,'').toUpperCase();
      return raw.length === 9 ? 'xemay' : 'oto';
    }

    function renderResult(plate, data, vtype) {
      vtype = detectVtype(plate) === 'xemay' ? 'xemay' : (vtype || currentVtype);
      const { violationCount, mockData } = data;
      const region = getRegion(plate);
      const vtypeLabel = vtype === 'xemay' ? 'Xe m\xE1y' : '\xD4 t\xF4 con';
      const vtypeIcon  = vtype === 'xemay' ? licon('Bike', 22, 1.8) : licon('Car', 22, 1.8);
      const vehicle = getMockVehicle(plate, vtype);

      // timestamp mock
      const now = new Date();
      const ts = \\\`\\\${now.getDate().toString().padStart(2,'0')}/\\\${(now.getMonth()+1).toString().padStart(2,'0')}/\\\${now.getFullYear()} \u2022 \\\${now.getHours().toString().padStart(2,'0')}:\\\${now.getMinutes().toString().padStart(2,'0')}\\\`;
      const platePrefix = plate.replace(/[^a-zA-Z0-9]/g,'').slice(0,3).toUpperCase();

      // \u2500\u2500 Status pill \u2500\u2500
      const statusPill = violationCount === 0
        ? \\\`<span class="vr-status-pill ok">\\\${licon('CheckCircle2', 13, 2.2)} Kh\xF4ng c\xF3 vi ph\u1EA1m m\u1EDBi</span>\\\`
        : \\\`<span class="vr-status-pill alert">\\\${licon('AlertCircle', 13, 2.2)} \\\${violationCount} vi ph\u1EA1m ch\u1EDD x\u1EED l\xFD</span>\\\`;

      // \u2500\u2500 Clean state (no violation) \u2500\u2500
      const insUrl = vtype === 'xemay' ? '/bao-hiem/tnds-xe-may' : '/bao-hiem/tnds-oto';
      const cleanHtml = violationCount === 0 ? \\\`
        <div class="vr-clean-card">
          <div class="vr-clean-icon">\\\${licon('ShieldCheck', 22, 2)}</div>
          <div class="vr-clean-body">
            <div class="vr-clean-title">Ch\xFAc m\u1EEBng! Xe b\u1EA1n kh\xF4ng c\xF3 vi ph\u1EA1m n\xE0o</div>
            <div class="vr-clean-sub">Xe s\u1EA1ch h\u1ED3 s\u01A1 \u2014 h\xE3y gi\u1EEF v\u1EEFng th\xE0nh t\xEDch n\xE0y. Th\xEAm xe v\xE0o MoMo \u0111\u1EC3 nh\u1EADn nh\u1EAFc nh\u1EDF \u0111\u0103ng ki\u1EC3m, c\u1EA3nh b\xE1o ph\u1EA1t ngu\u1ED9i m\u1EDBi v\xE0 gia h\u1EA1n b\u1EA3o hi\u1EC3m \u0111\xFAng l\xFAc.</div>
            <div class="vr-clean-actions">
              <a class="vr-clean-cta-main" href="/phat-nguoi/goi-theo-doi">\\\${licon('ShieldCheck', 13, 2.5)} Mua g\xF3i theo d\xF5i ph\u1EA1t ngu\u1ED9i <span class="vr-clean-price-tag">9K/n\u0103m</span></a>
              <button class="vr-clean-cta-sec" onclick="openConsentSheet('\\\${plate}','\\\${vtypeLabel}')" style="background:none;border:none;cursor:pointer;font-family:inherit;">\\\${licon('Plus', 12, 2.5)} Th\xEAm xe v\xE0o MoMo</button>
            </div>
          </div>
        </div>\\\` : '';

      // \u2500\u2500 Violations \u2500\u2500
      let violationsHtml = '';
      let payBarHtml = '';
      if (violationCount > 0) {
        const violations = mockData ? mockData.violations : [];
        const vCards = violations.map(v => {
          const fine = v.fine ? (v.fine[vtype] || v.fine.oto) : null;
          const sev = v.severity || 'amber';
          const vIcon = sev === 'red' ? licon('FileText', 20, 1.8) : licon('Gauge', 20, 1.8);
          return \\\`
          <div class="vr-violation">
            <div class="vr-v-bar \\\${sev}"></div>
            <div style="flex:1;min-width:0">
              <div class="vr-v-content">
                <div class="vr-v-icon \\\${sev}">\\\${vIcon}</div>
                <div class="vr-v-info">
                  <div class="vr-v-title">\\\${v.type}</div>
                  <div class="vr-v-meta">\\\${licon('Calendar', 11, 2)} \\\${v.date}\\\${v.time ? ' '+v.time : ''} &nbsp;\xB7&nbsp; \\\${licon('MapPin', 11, 2)} \\\${v.road}</div>
                  \\\${v.unit ? \\\`<div class="vr-v-unit">\\\${licon('Building2', 11, 2)} \\\${v.unit}</div>\\\` : ''}
                </div>
                <div class="vr-v-right">
                  \\\${fine ? \\\`<div class="vr-v-fine-block"><div class="vr-v-fine">\\\${fine}\u0111</div><div class="vr-v-fine-label">M\u1EE9c ph\u1EA1t tham kh\u1EA3o</div></div>\\\` : ''}
                </div>
              </div>
              \\\${v.article ? \\\`<div class="vr-v-footer"><a class="vr-v-guide" href="\\\${v.article.url}">\\\${licon('BookOpen', 12, 2)} \\\${v.article.title} \\\${licon('ChevronRight', 12, 2.5)}</a></div>\\\` : ''}
            </div>
          </div>\\\`;
        }).join('');
        violationsHtml = \\\`
          <div>
            <div class="vr-section-head">
              <span class="vr-section-dot red"></span>
              <span class="vr-section-title">Th\xF4ng tin vi ph\u1EA1m</span>
              <span class="vr-count-pill">\\\${violationCount}</span>
            </div>
            <div class="vr-violations-wrap">
              <div class="vr-violations">\\\${vCards}</div>
              <div class="vr-violations-footer">
                <a class="vr-pay-single" href="/phat-nguoi-nop-qua-momo">\\\${licon('CreditCard', 15, 2.5)} N\u1ED9p ph\u1EA1t \\\${violationCount} vi ph\u1EA1m qua MoMo</a>
              </div>
            </div>
          </div>\\\`;
        payBarHtml = \\\`
          <div class="vr-pay-bar">
            <div class="vr-pay-icon">\\\${licon('ShieldCheck', 20, 2)}</div>
            <div class="vr-pay-body">
              <div class="vr-pay-title">N\u1ED9p ph\u1EA1t nhanh ch\xF3ng, an to\xE0n</div>
              <div class="vr-pay-sub">Thanh to\xE1n tr\u1EF1c tuy\u1EBFn qua MoMo ch\u1EC9 v\u1EDBi v\xE0i b\u01B0\u1EDBc \u0111\u01A1n gi\u1EA3n</div>
            </div>
            <a class="vr-pay-btn" href="/phat-nguoi-nop-qua-momo">\\\${licon('CreditCard', 13, 2.5)} N\u1ED9p ph\u1EA1t qua MoMo</a>
          </div>\\\`;
      }

      // \u2500\u2500 Other services \u2500\u2500
      const dangKiemSub = vtype === 'xemay'
        ? 'Xe m\xE1y ch\u01B0a b\u1EAFt bu\u1ED9c \u0111\u0103ng ki\u1EC3m \u0111\u1ECBnh k\u1EF3 \u2014 nh\u01B0ng h\xE3y ki\u1EC3m tra ngay n\u1EBFu xe tr\xEAn 5 n\u0103m'
        : 'Bi\u1EBFt tr\u01B0\u1EDBc h\u1EA1n \u0111\u0103ng ki\u1EC3m, tr\xE1nh b\u1ECB ph\u1EA1t 800K\u20134 tri\u1EC7u v\xEC qu\xE1 h\u1EA1n. Xem l\u1ECBch tr\u1EF1c ti\u1EBFp trong MoMo';

      // B\u1EA3o hi\u1EC3m rows \u2014 ph\xE2n theo lo\u1EA1i xe
      const insOtoRow = vtype !== 'xemay' ? \\\`
          <a class="vr-service" href="/bao-hiem-o-to">
            <div class="vr-svc-icon amber">\\\${licon('ShieldCheck', 20, 1.8)}</div>
            <div class="vr-svc-body">
              <div class="vr-svc-label">B\u1EA3o hi\u1EC3m \xF4 t\xF4</div>
              <div class="vr-svc-sub">TNDS b\u1EAFt bu\u1ED9c t\u1EEB 479K/n\u0103m \xB7 B\u1EA3o hi\u1EC3m v\u1EADt ch\u1EA5t th\xE2n xe t\u1EEB 9 c\xF4ng ty h\xE0ng \u0111\u1EA7u \u2014 so s\xE1nh v\xE0 mua ngay</div>
            </div>
            <div class="vr-svc-right">
              <span class="vr-svc-badge amber">Mua ngay</span>
              <span class="vr-svc-chevron">\\\${licon('ChevronRight', 15, 2.5)}</span>
            </div>
          </a>\\\` : '';

      const insXemayRow = \\\`
          <a class="vr-service" href="/bao-hiem/tnds-xe-may">
            <div class="vr-svc-icon purple">\\\${licon('Shield', 20, 1.8)}</div>
            <div class="vr-svc-body">
              <div class="vr-svc-label">B\u1EA3o hi\u1EC3m xe m\xE1y\\\${vtype !== 'xemay' ? ' (TNDS)' : ''}</div>
              <div class="vr-svc-sub">\\\${vtype === 'xemay'
                ? 'TNDS b\u1EAFt bu\u1ED9c t\u1EEB 66K/n\u0103m \u2014 ki\u1EC3m tra h\u1EA1n b\u1EA3o hi\u1EC3m v\xE0 gia h\u1EA1n nhanh qua MoMo'
                : 'C\xF3 xe m\xE1y trong nh\xE0? Mua TNDS xe m\xE1y t\u1EEB 66K/n\u0103m, x\u1EED l\xFD ho\xE0n to\xE0n tr\xEAn MoMo'}</div>
            </div>
            <div class="vr-svc-right">
              <span class="vr-svc-badge purple">\\\${vtype === 'xemay' ? 'Gia h\u1EA1n ngay' : 'Mua ngay'}</span>
              <span class="vr-svc-chevron">\\\${licon('ChevronRight', 15, 2.5)}</span>
            </div>
          </a>\\\`;

      const servicesHtml = \\\`
        <div class="vr-services">
          <div class="vr-service" style="cursor:pointer">
            <div class="vr-svc-icon blue">\\\${licon('ClipboardCheck', 20, 1.8)}</div>
            <div class="vr-svc-body">
              <div class="vr-svc-label">\u0110\u0103ng ki\u1EC3m</div>
              <div class="vr-svc-sub">\\\${dangKiemSub}</div>
            </div>
            <div class="vr-svc-right">
              <span class="vr-svc-badge blue">M\u1EDF MoMo App</span>
              <span class="vr-svc-chevron">\\\${licon('ChevronRight', 15, 2.5)}</span>
            </div>
          </div>
          \\\${insOtoRow}
          \\\${insXemayRow}
          <a class="vr-service" href="/tien-ich-giao-thong/dinh-gia-xe">
            <div class="vr-svc-icon pink">\\\${licon('TrendingDown', 20, 1.8)}</div>
            <div class="vr-svc-body">
              <div class="vr-svc-label">\u0110\u1ECBnh gi\xE1 xe</div>
              <div class="vr-svc-sub">Mu\u1ED1n b\xE1n xe kh\xF4ng bi\u1EBFt gi\xE1 h\u1EE3p l\xFD? Nh\u1EADp h\xE3ng, \u0111\u1EDDi xe \u0111\u1EC3 \u01B0\u1EDBc t\xEDnh gi\xE1 th\u1ECB tr\u01B0\u1EDDng ngay</div>
            </div>
            <div class="vr-svc-right">
              <span class="vr-svc-badge gray">Nh\u1EADp th\xEAm</span>
              <span class="vr-svc-chevron">\\\${licon('ChevronRight', 15, 2.5)}</span>
            </div>
          </a>
          <a class="vr-service" href="/epass/nap-tien-epass">
            <div class="vr-svc-icon green">\\\${licon('Milestone', 20, 1.8)}</div>
            <div class="vr-svc-body">
              <div class="vr-svc-label">ETC / ePass</div>
              <div class="vr-svc-sub">T\xE0i kho\u1EA3n ETC s\u1EAFp h\u1EBFt ti\u1EC1n? N\u1EA1p ngay qua MoMo \u2014 kh\xF4ng c\u1EA7n ra tr\u1EA1m, kh\xF4ng b\u1ECB ch\u1EB7n c\u1EA7u \u0111\u01B0\u1EDDng</div>
            </div>
            <div class="vr-svc-right">
              <span class="vr-svc-badge" style="background:#f0fdf4;color:#16a34a">N\u1EA1p ngay</span>
              <span class="vr-svc-chevron">\\\${licon('ChevronRight', 15, 2.5)}</span>
            </div>
          </a>
        </div>\\\`;

      prsInner.innerHTML = \\\`
        <div class="vr-wrap">
          <div class="vr-head">
            <div class="vr-car-icon">\\\${vtypeIcon}</div>
            <div class="vr-head-body">
              <div class="vr-head-label">K\u1EBFt qu\u1EA3 tra c\u1EE9u</div>
              <div class="vr-plate-big">\\\${plate}</div>
              <div class="vr-head-sub">\\\${vtypeLabel} \xB7 \\\${region||platePrefix}</div>
            </div>
            <div class="vr-head-right">
              \\\${statusPill}
              <button class="vr-reset" onclick="resetPlate()">\\\${licon('RotateCcw', 10, 2.5)} \u0110\u1ED5i xe</button>
              <span class="vr-head-ts">C\u1EADp nh\u1EADt: \\\${ts}</span>
            </div>
          </div>
          \\\${cleanHtml}
          \\\${violationsHtml}
          \\\${payBarHtml}
          \\\${servicesHtml}
        </div>\\\`;

      prsWrap.style.display = '';
      if (window.lucide) lucide.createIcons();
      prsWrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function showInlinePanel(html) {
      document.getElementById('plateInputArea').style.display = 'none';
      let panel = document.getElementById('pecInlinePanel');
      if (!panel) {
        panel = document.createElement('div');
        panel.id = 'pecInlinePanel';
        document.getElementById('plateInputArea').insertAdjacentElement('afterend', panel);
      }
      panel.innerHTML = html;
      panel.style.display = '';
      if (window.lucide) lucide.createIcons();
    }
    function hideInlinePanel() {
      const p = document.getElementById('pecInlinePanel');
      if (p) p.style.display = 'none';
      document.getElementById('plateInputArea').style.display = '';
    }

    window.selectUseCase = function(btn) {
      const use = btn.dataset.use;
      document.querySelectorAll('.pec-card').forEach(c => c.classList.remove('pec-active'));
      btn.classList.add('pec-active');
      activeUseCase = use;

      if (use === 'gia-xang') {
        const d = new Date(); const day = d.getDate(); const month = d.getMonth()+1;
        showInlinePanel(\\\`
          <div class="pec-inline pec-fuel">
            <div class="pec-inline-label">Gi\xE1 x\u0103ng d\u1EA7u \u2014 \\\${day}/\\\${month < 10 ? '0'+month : month}/2026</div>
            <div class="pec-fuel-rows">
              <div class="pec-fuel-row">
                <span class="pec-fuel-name">E10 RON 95</span>
                <span class="pec-fuel-price">22.850\u0111/L</span>
                <span class="pec-fuel-change pec-down">\u25B2 1.420\u0111</span>
              </div>
              <div class="pec-fuel-row">
                <span class="pec-fuel-name">E5 RON 92</span>
                <span class="pec-fuel-price">22.380\u0111/L</span>
                <span class="pec-fuel-change pec-down">\u25B2 1.300\u0111</span>
              </div>
              <div class="pec-fuel-row">
                <span class="pec-fuel-name">D\u1EA7u diesel 0.05S</span>
                <span class="pec-fuel-price">17.450\u0111/L</span>
                <span class="pec-fuel-change pec-down">\u25BC 295\u0111</span>
              </div>
            </div>
            <a class="pec-inline-cta" href="/tien-ich-giao-thong/gia-xang">Xem \u0111\u1EA7y \u0111\u1EE7 gi\xE1 x\u0103ng d\u1EA7u \u2192</a>
          </div>\\\`);
        return;
      }
      if (use === 'bao-hiem') {
        showInlinePanel(\\\`
          <div class="pec-inline pec-bh">
            <div class="pec-inline-label">B\u1EA3o hi\u1EC3m xe tr\xEAn MoMo</div>
            <a class="pec-bh-row" href="/bao-hiem-o-to">
              <i data-lucide="car" width="16" height="16"></i>
              <div class="pec-bh-info"><div class="pec-bh-name">B\u1EA3o hi\u1EC3m \xF4 t\xF4</div><div class="pec-bh-desc">TNDS b\u1EAFt bu\u1ED9c + th\xE2n v\u1ECF</div></div>
              <i data-lucide="chevron-right" width="14" height="14" class="pec-bh-arrow"></i>
            </a>
            <a class="pec-bh-row" href="#bao-hiem">
              <i data-lucide="bike" width="16" height="16"></i>
              <div class="pec-bh-info"><div class="pec-bh-name">B\u1EA3o hi\u1EC3m xe m\xE1y</div><div class="pec-bh-desc">TNDS b\u1EAFt bu\u1ED9c t\u1EEB 66.000\u0111/n\u0103m</div></div>
              <i data-lucide="chevron-right" width="14" height="14" class="pec-bh-arrow"></i>
            </a>
          </div>\\\`);
        return;
      }
      // plate-based jobs
      hideInlinePanel();
      const label = USE_CASE_LABELS[use];
      document.getElementById('platePanelLabel').textContent = label || 'Nh\u1EADp bi\u1EC3n s\u1ED1 xe c\u1EE7a b\u1EA1n';
      plateInput.focus();
    };

    function submitPlate() {
      const raw = plateInput.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
      if (raw.length < 7) {
        plateBox.style.animation = 'none';
        requestAnimationFrame(() => { plateBox.style.animation = 'plate-shake .35s ease'; });
        plateInput.focus();
        return;
      }
      const plate = smartFormatPlate(raw);
      localStorage.setItem(SAVED_KEY, raw);
      renderResult(plate, getPlateData(raw), currentVtype);
      // Sync bi\u1EC3n s\u1ED1 xu\u1ED1ng section \u0111\u0103ng ki\u1EC3m v\xE0 auto-search
      const dkInput = document.getElementById('dkPlate');
      if (dkInput) { dkInput.value = plate; if (typeof dkSearch === 'function') dkSearch(); }
    }

    function resetPlate() {
      localStorage.removeItem(SAVED_KEY);
      plateInput.value = '';
      plateProvince.classList.remove('is-visible');
      prsWrap.style.display = 'none';
      plateInput.focus();
    }
    window.resetPlate = resetPlate;

    plateSubmit.addEventListener('click', submitPlate);
    plateInput.addEventListener('keydown', e => { if (e.key === 'Enter') submitPlate(); });

    /* Restore saved plate */
    const saved = localStorage.getItem(SAVED_KEY);
    if (saved && saved.length >= 7) {
      const formatted = smartFormatPlate(saved);
      plateInput.value = formatted;
      const province = detectProvince(saved);
      if (province) { plateProvince.textContent = province; plateProvince.classList.add('is-visible'); }
      renderResult(formatted, getPlateData(saved), currentVtype);
    }
  }());

  let epBalance = 245000;
  let epSelectedAmount = 100000;

  function fmtVnd(n) {
    return n.toLocaleString('vi-VN').replace(/\\\\./g,'.') + '<small>\u0111</small>';
  }
  function updateEpDisplay() {
    const balEl = document.querySelector('.ep-mock-balance');
    if (balEl) balEl.innerHTML = fmtVnd(epBalance);
    const maxBar = 500000;
    const pct = Math.min(100, Math.round(epBalance / maxBar * 100));
    const fill = document.getElementById('epBarFill');
    if (fill) fill.style.width = pct + '%';
    const l\u01B0\u1EE3t = Math.floor(epBalance / 52000);
    const pctEl = document.getElementById('epBarPct');
    if (pctEl) pctEl.textContent = l\u01B0\u1EE3t > 0 ? \\\`\u0110\u1EE7 ~\\\${l\u01B0\u1EE3t} l\u01B0\u1EE3t qua tr\u1EA1m\\\` : 'S\u1EAFp h\u1EBFt ti\u1EC1n';
  }

  function selectEpChip(el, amount) {
    document.querySelectorAll('.ep-chip').forEach(c => c.classList.remove('on'));
    el.classList.add('on');
    epSelectedAmount = amount * 1000;
    const btn = document.getElementById('epTopupBtn');
    if (btn) btn.textContent = \\\`N\u1EA1p \\\${amount === 50 ? '50.000' : amount === 100 ? '100.000' : amount === 200 ? '200.000' : '300.000'}\u0111\\\`;
  }

  function doEpTopup() {
    epBalance += epSelectedAmount;
    updateEpDisplay();
    const btn = document.getElementById('epTopupBtn');
    const origText = btn.textContent;
    btn.textContent = '\u2713 \u0110\xE3 n\u1EA1p th\xE0nh c\xF4ng';
    btn.style.background = '#16a34a';
    setTimeout(() => {
      btn.textContent = origText;
      btn.style.background = '';
    }, 2000);
  }

  function toggleFaq(btn) {
    btn.closest('.faq-item').classList.toggle('open');
  }

  let toastTimer;
  function toast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
  }

  /* nav active state on scroll */
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = ['vehicle-hub', 'gia-xang', 'epass', 'bao-hiem', 'cay-xang', 'cuu-ho', 'parking', 'chi-phi-xe'];
  window.addEventListener('scroll', () => {
    let current = sections[0];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top < 120) current = id;
    });
    navLinks.forEach(l => l.classList.toggle('on', l.getAttribute('href') === '#' + current));
  }, { passive: true });

  renderGas(1);
  renderInsurers();

  /* \u2500\u2500 VEHICLE COST CALCULATOR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  (function () {
    const FUEL_PRICE = { ron95: 20003, e5: 19191, diesel: 21745 };
    const COLORS = ['#2563EB','#7C3AED','#0891B2','#16A34A','#D97706','#6366F1'];

    // Cost constants (VND/month unless noted)
    const COSTS = {
      oto: {
        tnds: Math.round(481000 / 12),         // ~481k/n\u0103m \xF4 t\xF4 d\u01B0\u1EDBi 6 ch\u1ED7
        vcx: Math.round(3500000 / 12),          // ~3.5tr/n\u0103m (gi\xE1 tr\u1ECB xe 500tr, ~0.7%)
        road: Math.round(1560000 / 12),         // ph\xED \u0111\u01B0\u1EDDng b\u1ED9 nh\xF3m 2
        etc: 300000,                            // ph\xED cao t\u1ED1c trung b\xECnh
        maintenance: Math.round(4800000 / 12),  // 2 l\u1EA7n b\u1EA3o d\u01B0\u1EE1ng/n\u0103m ~4.8tr
        inspection: Math.round(340000 / 24),    // \u0111\u0103ng ki\u1EC3m 2 n\u0103m/l\u1EA7n ~340k
        consume: 10,                             // L/100km m\u1EB7c \u0111\u1ECBnh
      },
      xemay: {
        tnds: Math.round(66000 / 12),
        vcx: Math.round(600000 / 12),
        road: Math.round(100000 / 12),
        etc: 0,
        maintenance: Math.round(800000 / 12),
        inspection: Math.round(80000 / 12),
        consume: 3,
      },
      xedien: {
        tnds: Math.round(66000 / 12),
        vcx: Math.round(500000 / 12),
        road: Math.round(100000 / 12),
        etc: 0,
        maintenance: Math.round(400000 / 12),
        inspection: Math.round(80000 / 12),
        consume: 0, // \u0111i\u1EC7n
      },
    };

    let vehicle = 'oto', fuel = 'ron95', subtype = '';

    function fmt(n) {
      if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\\\\.0$/, '') + ' tr';
      return n.toLocaleString('vi-VN');
    }

    function calcFuel() {
      if (vehicle === 'xedien' || subtype === 'hybrid') {
        const km = +document.getElementById('vc-km').value;
        const rate = subtype === 'hybrid' ? 650 : 87.5;
        return Math.round(km * rate);
      }
      const km = +document.getElementById('vc-km').value;
      const consume = +document.getElementById('vc-consume').value;
      return Math.round(km / 100 * consume * FUEL_PRICE[fuel]);
    }

    function calc() {
      const c = COSTS[vehicle];
      const km = +document.getElementById('vc-km').value;
      const fuelCost = calcFuel();
      const items = [
        { name: 'X\u0103ng / \u0110i\u1EC7n', val: fuelCost, on: true },
        { name: 'B\u1EA3o hi\u1EC3m TNDS', val: c.tnds, on: document.getElementById('vc-tnds').checked },
        { name: 'B\u1EA3o hi\u1EC3m v\u1EADt ch\u1EA5t', val: c.vcx, on: document.getElementById('vc-vcx').checked },
        { name: 'Ph\xED \u0111\u01B0\u1EDDng b\u1ED9', val: c.road, on: document.getElementById('vc-road').checked },
        { name: 'ETC / cao t\u1ED1c', val: c.etc, on: document.getElementById('vc-etc').checked },
        { name: 'B\u1EA3o d\u01B0\u1EE1ng', val: c.maintenance, on: document.getElementById('vc-maintenance').checked },
        { name: '\u0110\u0103ng ki\u1EC3m', val: c.inspection, on: document.getElementById('vc-inspection').checked },
      ];
      const active = items.filter(i => i.on && i.val > 0);
      const total = active.reduce((s, i) => s + i.val, 0);
      const costPerKm = km > 0 ? Math.round(total / km) : 0;
      return { active, total, costPerKm, km };
    }

    function drawDonut(items, total) {
      const svg = document.getElementById('vc-donut');
      const R = 60, r = 40, cx = 70, cy = 70;
      const circumference = 2 * Math.PI * R;
      let offset = 0;
      let paths = '';
      items.forEach((item, i) => {
        const pct = total > 0 ? item.val / total : 0;
        const dash = pct * circumference;
        const gap = circumference - dash;
        // rotate so first segment starts at top
        const rot = (offset / circumference) * 360 - 90;
        paths += \\\`<circle cx="\\\${cx}" cy="\\\${cy}" r="\\\${R}" fill="none" stroke="\\\${COLORS[i % COLORS.length]}" stroke-width="20" stroke-dasharray="\\\${dash.toFixed(2)} \\\${gap.toFixed(2)}" stroke-dashoffset="0" transform="rotate(\\\${rot.toFixed(2)} \\\${cx} \\\${cy})" />\\\`;
        offset += dash;
      });
      svg.innerHTML = \\\`<circle cx="\\\${cx}" cy="\\\${cy}" r="\\\${R}" fill="none" stroke="var(--gray-100)" stroke-width="20"/>\\\` + paths + \\\`<circle cx="\\\${cx}" cy="\\\${cy}" r="\\\${r}" fill="white"/>\\\`;
    }

    function render() {
      const { active, total, costPerKm, km } = calc();

      document.getElementById('vc-total-num').textContent = fmt(total) + '\u0111';
      document.getElementById('vc-total-year').textContent = fmt(total * 12) + '\u0111';
      document.getElementById('vc-chart-center-num').textContent = fmt(costPerKm);

      drawDonut(active, total);

      const breakdown = document.getElementById('vc-breakdown');
      breakdown.innerHTML = active.map((item, i) => {
        const pct = total > 0 ? Math.round(item.val / total * 100) : 0;
        return \\\`<div class="vc-row">
          <div class="vc-dot" style="background:\\\${COLORS[i % COLORS.length]}"></div>
          <div class="vc-row-name">\\\${item.name}</div>
          <div class="vc-row-pct">\\\${pct}%</div>
          <div class="vc-row-val">\\\${fmt(item.val)}\u0111</div>
        </div>\\\`;
      }).join('');

      // insight
      const fuelItem = active[0];
      const fuelPct = total > 0 ? Math.round(fuelItem.val / total * 100) : 0;
      let insight = '';
      const benchmarks = { oto: 850, xemay: 250, xedien: 120 };
      const bench = benchmarks[vehicle];
      if (costPerKm > bench * 1.2) {
        insight = \\\`Chi ph\xED <strong>\\\${fmt(costPerKm)}\u0111/km</strong> cao h\u01A1n m\u1EE9c trung b\xECnh \\\${fmt(bench)}\u0111/km c\u1EE7a xe c\xF9ng lo\u1EA1i. Xem x\xE9t t\u1ED1i \u01B0u l\u1ED9 tr\xECnh ho\u1EB7c b\u1EA3o d\u01B0\u1EE1ng \u0111\u1ECBnh k\u1EF3 \u0111\u1EC3 gi\u1EA3m ti\xEAu hao.\\\`;
      } else if (costPerKm < bench * 0.85) {
        insight = \\\`Chi ph\xED <strong>\\\${fmt(costPerKm)}\u0111/km</strong> t\u1ED1t h\u01A1n m\u1EE9c trung b\xECnh \\\${fmt(bench)}\u0111/km. Ti\u1EBFp t\u1EE5c duy tr\xEC th\xF3i quen v\u1EADn h\xE0nh hi\u1EC7u qu\u1EA3.\\\`;
      } else {
        insight = \\\`Chi ph\xED <strong>\\\${fmt(costPerKm)}\u0111/km</strong> \u1EDF m\u1EE9c trung b\xECnh. Kho\u1EA3n chi\u1EBFm t\u1EF7 tr\u1ECDng l\u1EDBn nh\u1EA5t: <strong>\\\${fuelItem.name} (\\\${fuelPct}%)</strong>.\\\`;
      }
      document.getElementById('vc-insight').innerHTML = insight;
    }

    function setVehicle(v, st) {
      vehicle = v;
      subtype = st || '';
      document.querySelectorAll('[data-vc-vehicle]').forEach(b => b.classList.remove('on'));
      event && event.target && event.target.classList.add('on');
      const isEV = subtype === 'hybrid';
      const c = COSTS[v];
      const consumeSlider = document.getElementById('vc-consume');
      const defaultConsume = subtype === 'suv' ? 12 : (isEV ? 5 : c.consume);
      consumeSlider.value = defaultConsume;
      document.getElementById('vc-consume-val').textContent = v === 'xedien' ? '\u2014' : defaultConsume + ' L/100km';
      document.getElementById('vc-fuel-field').style.display = (v === 'xedien' || isEV) ? 'none' : '';
      document.getElementById('vc-consumption-field').style.display = (v === 'xedien' || isEV) ? 'none' : '';
      document.getElementById('vc-etc').closest('.vc-toggle-row').style.display = v === 'oto' ? '' : 'none';
      if (isEV) fuel = 'ron95';
      render();
    }

    // vehicle pills
    document.querySelectorAll('[data-vc-vehicle]').forEach(b => {
      b.addEventListener('click', (e) => { event = e; setVehicle(b.dataset.vcVehicle, b.dataset.vcSubtype); });
    });

    // fuel pills
    document.querySelectorAll('[data-vc-fuel]').forEach(b => {
      b.addEventListener('click', () => {
        fuel = b.dataset.vcFuel;
        document.querySelectorAll('[data-vc-fuel]').forEach(x => x.classList.toggle('on', x === b));
        render();
      });
    });

    // sliders
    const kmSlider = document.getElementById('vc-km');
    const consumeSlider = document.getElementById('vc-consume');
    kmSlider.addEventListener('input', () => {
      document.getElementById('vc-km-val').textContent = (+kmSlider.value).toLocaleString('vi-VN') + ' km';
      render();
    });
    consumeSlider.addEventListener('input', () => {
      document.getElementById('vc-consume-val').textContent = consumeSlider.value + ' L/100km';
      render();
    });

    // toggles
    ['vc-tnds','vc-vcx','vc-road','vc-etc','vc-maintenance','vc-inspection'].forEach(id => {
      document.getElementById(id).addEventListener('change', render);
    });

    document.querySelector('[data-vc-vehicle]').classList.add('on');
    setVehicle('oto');
  })();

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 FLIP CARD SECTION \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
const FC_GROUPS = [
  {
    tab: 'An to\xE0n & Ph\xE1p l\xFD',
    cards: [
      { icon:'ShieldAlert', bg:'linear-gradient(135deg,#1a2535 0%,#2d3748 100%)',
        title:'Tra ph\u1EA1t ngu\u1ED9i', desc:'Tra c\u1EE9u vi ph\u1EA1m giao th\xF4ng theo bi\u1EC3n s\u1ED1 xe, to\xE0n qu\u1ED1c.',
        backDesc:'Nh\u1EADp bi\u1EC3n s\u1ED1 xe, h\u1EC7 th\u1ED1ng tra c\u1EE9u ngay vi ph\u1EA1m t\u1EA1i 63 t\u1EC9nh th\xE0nh. Kh\xF4ng c\u1EA7n CMND, kh\xF4ng c\u1EA7n \u0111\u0103ng nh\u1EADp.', href:'/phat-nguoi' },
      { icon:'FileText', bg:'linear-gradient(135deg,#7f1d1d 0%,#b91c1c 100%)',
        title:'N\u1ED9p ph\u1EA1t vi ph\u1EA1m', desc:'N\u1ED9p ph\u1EA1t tr\u1EF1c tuy\u1EBFn ngay tr\xEAn MoMo, kh\xF4ng c\u1EA7n \u0111\u1EBFn kho b\u1EA1c.',
        backDesc:'Sau khi tra ph\u1EA1t ngu\u1ED9i, n\u1ED9p ngay qua MoMo. Bi\xEAn lai \u0111i\u1EC7n t\u1EED g\u1EEDi v\u1EC1 app, h\u1EE3p l\u1EC7 t\u1EA1i CSGT.', href:'/phat-nguoi-nop-qua-momo' },
      { icon:'ShieldCheck', bg:'linear-gradient(135deg,#86105c 0%,#EB2F96 100%)',
        title:'B\u1EA3o hi\u1EC3m xe', desc:'Mua TNDS b\u1EAFt bu\u1ED9c & th\xE2n v\u1ECF t\u1EEB 9 c\xF4ng ty b\u1EA3o hi\u1EC3m h\xE0ng \u0111\u1EA7u.',
        backDesc:'So s\xE1nh gi\xE1 t\u1EEB PVI, B\u1EA3o Vi\u1EC7t, PJICO... Thanh to\xE1n qua MoMo, nh\u1EADn gi\u1EA5y b\u1EA3o hi\u1EC3m PDF ngay.', href:'/bao-hiem-o-to' },
      { icon:'ClipboardList', bg:'linear-gradient(135deg,#134e4a 0%,#0f766e 100%)',
        title:'\u0110\u1EB7t l\u1ECBch \u0111\u0103ng ki\u1EC3m', desc:'\u0110\u1EB7t l\u1ECBch \u0111\u0103ng ki\u1EC3m xe \xF4 t\xF4, nh\u1EADn nh\u1EAFc h\u1EA1n t\u1EF1 \u0111\u1ED9ng.',
        backDesc:'Ch\u1ECDn trung t\xE2m \u0111\u0103ng ki\u1EC3m g\u1EA7n nh\xE0, \u0111\u1EB7t gi\u1EDD thu\u1EADn ti\u1EC7n. MoMo nh\u1EAFc tr\u01B0\u1EDBc 30 ng\xE0y khi s\u1EAFp h\u1EBFt h\u1EA1n.', href:'/tien-ich-giao-thong/dang-kiem' },
    ]
  },
  {
    tab: 'Tr\u01B0\u1EDBc khi l\xEAn \u0111\u01B0\u1EDDng',
    cards: [
      { icon:'Route', bg:'linear-gradient(135deg,#0f172a 0%,#1e3a5f 100%)',
        title:'Ph\xED ETC theo tuy\u1EBFn', desc:'T\xEDnh tr\u01B0\u1EDBc t\u1ED5ng ph\xED qua tr\u1EA1m ETC cho chuy\u1EBFn \u0111i c\u1EE7a b\u1EA1n.',
        backDesc:'Ch\u1ECDn tuy\u1EBFn \u0111\u01B0\u1EDDng, xem chi ti\u1EBFt t\u1EEBng tr\u1EA1m thu ph\xED v\xE0 camera t\u1ED1c \u0111\u1ED9. N\u1EA1p ePass \u0111\xFAng s\u1ED1 ti\u1EC1n c\u1EA7n.', href:'/epass/tinh-phi-etc' },
      { icon:'Fuel', bg:'linear-gradient(135deg,#78350f 0%,#d97706 100%)',
        title:'Gi\xE1 x\u0103ng h\xF4m nay', desc:'Gi\xE1 x\u0103ng d\u1EA7u m\u1EDBi nh\u1EA5t theo t\u1EEBng lo\u1EA1i, c\u1EADp nh\u1EADt m\u1ED7i k\u1EF3 \u0111i\u1EC1u h\xE0nh.',
        backDesc:'Theo d\xF5i RON 95, E5 RON 92, DO 0.05S theo 2 v\xF9ng. Bi\u1EC3u \u0111\u1ED3 xu h\u01B0\u1EDBng 90 ng\xE0y gi\xFAp d\u1EF1 \u0111o\xE1n k\u1EF3 t\u1EDBi.', href:'/gia-xang' },
      { icon:'MapPin', bg:'linear-gradient(135deg,#064e3b 0%,#059669 100%)',
        title:'C\xE2y x\u0103ng g\u1EA7n b\u1EA1n', desc:'T\xECm c\xE2y x\u0103ng \u0111\u1ED1i t\xE1c MoMo Pay g\u1EA7n v\u1ECB tr\xED c\u1EE7a b\u1EA1n nh\u1EA5t.',
        backDesc:'B\u1EADt \u0111\u1ECBnh v\u1ECB \u0111\u1EC3 xem kho\u1EA3ng c\xE1ch \u0111\u1EBFn t\u1EEBng c\xE2y x\u0103ng Petrolimex, PV Oil, Shell. Thanh to\xE1n kh\xF4ng ti\u1EC1n m\u1EB7t.', href:'/cay-xang' },
      { icon:'SquareParking', bg:'linear-gradient(135deg,#1e1b4b 0%,#4338ca 100%)',
        title:'T\xECm b\xE3i \u0111\u1ED7 xe', desc:'Tra c\u1EE9u v\xE0 thanh to\xE1n ph\xED \u0111\u1ED7 xe b\u1EB1ng MoMo t\u1EA1i c\xE1c b\xE3i \u0111\u1ED1i t\xE1c.',
        backDesc:'Xem b\xE3i \u0111\u1ED7 xe g\u1EA7n \u0111i\u1EC3m \u0111\u1EBFn, gi\xE1 theo gi\u1EDD v\xE0 c\xF2n ch\u1ED7 kh\xF4ng. Thanh to\xE1n qu\xE9t QR khi ra, kh\xF4ng c\u1EA7n ti\u1EC1n l\u1EBB.', href:'/tien-ich-giao-thong/bai-do-xe' },
    ]
  },
  {
    tab: 'T\xE0i kho\u1EA3n & Chi ph\xED',
    cards: [
      { icon:'CreditCard', bg:'linear-gradient(135deg,#1e3a5f 0%,#2563eb 100%)',
        title:'N\u1EA1p ePass t\u1EF1 \u0111\u1ED9ng', desc:'Li\xEAn k\u1EBFt v\xED MoMo, t\u1EF1 \u0111\u1ED9ng n\u1EA1p ti\u1EC1n v\xE0o t\xE0i kho\u1EA3n ETC khi s\u1EAFp h\u1EBFt.',
        backDesc:'\u0110\u1EB7t ng\u01B0\u1EE1ng s\u1ED1 d\u01B0 t\u1ED1i thi\u1EC3u, MoMo t\u1EF1 n\u1EA1p t\u1EEB v\xED khi s\u1EAFp v\u1EC1 0. Kh\xF4ng lo d\u1EEBng xe t\u1EA1i tr\u1EA1m thu ph\xED.', href:'/epass' },
      { icon:'Calculator', bg:'linear-gradient(135deg,#713f12 0%,#ca8a04 100%)',
        title:'Chi ph\xED nu\xF4i xe', desc:'\u01AF\u1EDBc t\xEDnh t\u1ED5ng chi ph\xED v\u1EADn h\xE0nh xe trong 1 n\u0103m theo d\xF2ng xe c\u1EE7a b\u1EA1n.',
        backDesc:'Nh\u1EADp lo\u1EA1i xe, s\u1ED1 km/th\xE1ng - h\u1EC7 th\u1ED1ng t\xEDnh x\u0103ng, b\u1EA3o hi\u1EC3m, \u0111\u0103ng ki\u1EC3m, b\u1EA3o d\u01B0\u1EE1ng v\xE0 ETC theo n\u0103m.', href:'#chi-phi-xe' },
      { icon:'Wrench', bg:'linear-gradient(135deg,#881337 0%,#e11d48 100%)',
        title:'C\u1EE9u h\u1ED9 xe m\xE1y', desc:'G\u1ECDi c\u1EE9u h\u1ED9 kh\u1EA9n c\u1EA5p 24/7 ngay tr\xEAn MoMo khi xe h\u1ECFng d\u1ECDc \u0111\u01B0\u1EDDng.',
        backDesc:'D\u1ECBch v\u1EE5 c\u1EE9u h\u1ED9 t\u1EA1i ch\u1ED7, v\xE1 l\u1ED1p, k\xE9o xe v\u1EC1 gara g\u1EA7n nh\u1EA5t. Thanh to\xE1n qua MoMo, c\xF3 gi\xE1 ni\xEAm y\u1EBFt r\xF5 r\xE0ng.', href:'/tien-ich-giao-thong/cuu-ho' },
      { icon:'Zap', bg:'linear-gradient(135deg,#052e16 0%,#16a34a 100%)',
        title:'Tr\u1EA1m s\u1EA1c xe \u0111i\u1EC7n', desc:'T\xECm tr\u1EA1m s\u1EA1c VinFast, Charge++ v\xE0 c\xE1c \u0111\u1ED1i t\xE1c tr\xEAn to\xE0n qu\u1ED1c.',
        backDesc:'Xem tr\u1EA1m s\u1EA1c theo b\u1EA3n \u0111\u1ED3, lo\u1EA1i \u0111\u1EA7u s\u1EA1c, t\u1ED1c \u0111\u1ED9 s\u1EA1c v\xE0 tr\u1EA1ng th\xE1i c\xF2n tr\u1ED1ng. Thanh to\xE1n qua MoMo.', href:'/tram-sac' },
    ]
  }
];

let fcActiveGroup = 0;

function renderFC(groupIdx) {
  fcActiveGroup = groupIdx;
  // tabs
  document.getElementById('fcTabs').innerHTML = FC_GROUPS.map((g, i) =>
    \\\`<button class="fc-tab\\\${i===groupIdx?' on':''}" onclick="renderFC(\\\${i})">\\\${g.tab}</button>\\\`
  ).join('');
  // grid
  document.getElementById('fcGrid').innerHTML = FC_GROUPS[groupIdx].cards.map((c, i) => \\\`
    <div class="fc-card" id="fcc-\\\${groupIdx}-\\\${i}">
      <div class="fc-inner">
        <div class="fc-front" style="background:\\\${c.bg}" data-href="\\\${c.href}" onclick="flipCard('fcc-\\\${groupIdx}-\\\${i}', this)">
          <span class="fc-front-icon">\\\${licon(c.icon, 72, 1.25)}</span>
          <button class="fc-arrow-btn" onclick="event.stopPropagation();flipCard('fcc-\\\${groupIdx}-\\\${i}')">\u2192</button>
          <div class="fc-front-content">
            <div class="fc-front-title">\\\${c.title}</div>
            <div class="fc-front-desc">\\\${c.desc}</div>
          </div>
        </div>
        <div class="fc-back">
          <button class="fc-back-close" onclick="unflipCard('fcc-\\\${groupIdx}-\\\${i}')">\u2715</button>
          <div class="fc-back-icon-wrap">\\\${licon(c.icon, 28, 1.5)}</div>
          <div class="fc-back-title">\\\${c.title}</div>
          <div class="fc-back-desc">\\\${c.backDesc}</div>
          <a class="fc-back-cta" href="\\\${c.href}">D\xF9ng ngay \u2192</a>
        </div>
      </div>
    </div>
  \\\`).join('');
}

function flipCard(id, front) {
  if (window.innerWidth <= 480 && front?.dataset.href) {
    window.location.href = front.dataset.href;
    return;
  }
  document.getElementById(id)?.classList.toggle('flipped');
}
function unflipCard(id) {
  document.getElementById(id)?.classList.remove('flipped');
}

renderFC(0);

// TRIP PLANNER moved to /demos/trip-planner.html
const TP_ROUTES_UNUSED = {
  'hcm-vt': {
    from:'TP. H\u1ED3 Ch\xED Minh', to:'V\u0169ng T\xE0u', km:126,
    road:'QL51 / Cao t\u1ED1c Bi\xEAn H\xF2a - V\u0169ng T\xE0u',
    tolls: { motorbike:0, 'car-gas':66000, 'car-ev':66000 },
    stops: [
      { km:19, name:'Tr\u1EA1m x\u0103ng Petrolimex Long An', type:'\u26FD C\xE2y x\u0103ng', link:'/cay-xang' },
      { km:63, name:'Tr\u1EA1m d\u1EEBng ngh\u1EC9 Long Th\xE0nh', type:'\u2615 Ngh\u1EC9 ch\xE2n + \u0103n u\u1ED1ng', link:null },
      { km:98, name:'V-Green \xB7 Long Th\xE0nh EV Hub', type:'\u26A1 S\u1EA1c nhanh 120kW', link:'/tram-sac', evOnly:true },
    ],
    checklist: ['epass','insurance','tire','water'],
  },
  'hcm-dl': {
    from:'TP. H\u1ED3 Ch\xED Minh', to:'\u0110\xE0 L\u1EA1t', km:307,
    road:'QL20 / Cao t\u1ED1c D\u1EA7u Gi\xE2y - Li\xEAn Kh\u01B0\u01A1ng',
    tolls: { motorbike:0, 'car-gas':142000, 'car-ev':142000 },
    stops: [
      { km:75, name:'Tr\u1EA1m x\u0103ng D\u1EA7u Gi\xE2y', type:'\u26FD C\xE2y x\u0103ng + ti\u1EC7n l\u1EE3i', link:'/cay-xang' },
      { km:160, name:'B\u1EA3o L\u1ED9c - Ngh\u1EC9 ch\xE2n', type:'\u2615 Qu\xE1n \u0103n, c\xE0 ph\xEA', link:null },
      { km:245, name:'V-Green \xB7 \u0110\xE0 L\u1EA1t City', type:'\u26A1 S\u1EA1c 60kW - Trung t\xE2m', link:'/tram-sac', evOnly:true },
    ],
    checklist: ['epass','insurance','tire','water','medicine'],
  },
  'hcm-pt': {
    from:'TP. H\u1ED3 Ch\xED Minh', to:'Phan Thi\u1EBFt', km:198,
    road:'QL1A / Cao t\u1ED1c HCM - Long Th\xE0nh - D\u1EA7u Gi\xE2y',
    tolls: { motorbike:0, 'car-gas':98000, 'car-ev':98000 },
    stops: [
      { km:45, name:'Tr\u1EA1m ngh\u1EC9 Long Th\xE0nh', type:'\u26FD X\u0103ng + \u0103n u\u1ED1ng', link:'/cay-xang' },
      { km:130, name:'Tr\u1EA1m d\u1EEBng B\xECnh Thu\u1EADn', type:'\u2615 Ngh\u1EC9 ch\xE2n', link:null },
      { km:190, name:'Phan Thi\u1EBFt Center - S\u1EA1c EV', type:'\u26A1 S\u1EA1c 60kW', link:'/tram-sac', evOnly:true },
    ],
    checklist: ['epass','insurance','tire','water'],
  },
  'hn-hp': {
    from:'H\xE0 N\u1ED9i', to:'H\u1EA3i Ph\xF2ng', km:105,
    road:'Cao t\u1ED1c H\xE0 N\u1ED9i - H\u1EA3i Ph\xF2ng',
    tolls: { motorbike:0, 'car-gas':88000, 'car-ev':88000 },
    stops: [
      { km:52, name:'Tr\u1EA1m ngh\u1EC9 Km52 - H\u1EA3i D\u01B0\u01A1ng', type:'\u2615 Ngh\u1EC9 ch\xE2n + x\u0103ng', link:'/cay-xang' },
      { km:95, name:'V-Green \xB7 H\u1EA3i Ph\xF2ng Central', type:'\u26A1 S\u1EA1c 120kW', link:'/tram-sac', evOnly:true },
    ],
    checklist: ['epass','insurance','tire'],
  },
  'hn-nb': {
    from:'H\xE0 N\u1ED9i', to:'Ninh B\xECnh', km:93,
    road:'Cao t\u1ED1c Ph\xE1p V\xE2n - C\u1EA7u Gi\u1EBD - Ninh B\xECnh',
    tolls: { motorbike:0, 'car-gas':56000, 'car-ev':56000 },
    stops: [
      { km:46, name:'Tr\u1EA1m ngh\u1EC9 Ph\u1EE7 L\xFD', type:'\u2615 Ngh\u1EC9 ch\xE2n + \u0103n u\u1ED1ng', link:null },
      { km:85, name:'V-Green \xB7 Ninh B\xECnh', type:'\u26A1 S\u1EA1c 60kW', link:'/tram-sac', evOnly:true },
    ],
    checklist: ['epass','insurance','tire','water'],
  },
  'hn-sd': {
    from:'H\xE0 N\u1ED9i', to:'S\u1EA7m S\u01A1n', km:163,
    road:'QL1A / Cao t\u1ED1c Mai S\u01A1n - QL45',
    tolls: { motorbike:0, 'car-gas':76000, 'car-ev':76000 },
    stops: [
      { km:80, name:'Tr\u1EA1m ngh\u1EC9 Thanh H\xF3a', type:'\u26FD X\u0103ng + ti\u1EC7n l\u1EE3i', link:'/cay-xang' },
      { km:158, name:'S\u1EA7m S\u01A1n - S\u1EA1c EV', type:'\u26A1 S\u1EA1c 60kW', link:'/tram-sac', evOnly:true },
    ],
    checklist: ['epass','insurance','tire','water','medicine'],
  },
};

// (removed \u2014 full calculator lives at /trip-planner)

// \u2500\u2500 TRIP SEARCH WIDGET \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const CITIES = [
  { name:'TP. H\u1ED3 Ch\xED Minh', alias:['hcm','saigon','s\xE0i g\xF2n','ho chi minh'] },
  { name:'H\xE0 N\u1ED9i',           alias:['hn','hanoi','ha noi'] },
  { name:'\u0110\xE0 N\u1EB5ng',          alias:['dn','da nang'] },
  { name:'V\u0169ng T\xE0u',         alias:['vt','vung tau'] },
  { name:'\u0110\xE0 L\u1EA1t',           alias:['dl','da lat'] },
  { name:'Phan Thi\u1EBFt',       alias:['pt','mui ne','m\u0169i n\xE9','phan thiet'] },
  { name:'Nha Trang',        alias:['nt','nha trang'] },
  { name:'C\u1EA7n Th\u01A1',          alias:['ct','can tho'] },
  { name:'H\u1ED9i An',           alias:['ha','hoi an'] },
  { name:'Hu\u1EBF',              alias:['hue'] },
  { name:'H\u1EA3i Ph\xF2ng',        alias:['hp','hai phong'] },
  { name:'Ninh B\xECnh',        alias:['nb','ninh binh'] },
  { name:'S\u1EA7m S\u01A1n',          alias:['ss','sam son'] },
  { name:'Quy Nh\u01A1n',         alias:['qn','quy nhon'] },
  { name:'Sa Pa',            alias:['sapa','sa pa','lao cai'] },
  { name:'M\u1ED9c Ch\xE2u',         alias:['moc chau','son la'] },
  { name:'H\u1EA1 Long',          alias:['hl','ha long','quang ninh'] },
  { name:'Ph\xFA Qu\u1ED1c',         alias:['pq','phu quoc'] },
  { name:'H\xE0 Giang',         alias:['hg','ha giang'] },
  { name:'T\xE2y Ninh',         alias:['tn','tay ninh'] },
  { name:'B\xE0 R\u1ECBa',           alias:['ba ria'] },
  { name:'Bu\xF4n Ma Thu\u1ED9t',    alias:['bmt','buon ma thuot'] },
  { name:'Pleiku',           alias:['gia lai'] },
  { name:'Tuy H\xF2a',          alias:['phu yen','tuy hoa'] },
  { name:'Qu\u1EA3ng Ng\xE3i',       alias:['quang ngai'] },
  { name:'Bi\xEAn H\xF2a',         alias:['dong nai','bien hoa'] },
  { name:'Th\u1EE7 D\u1EA7u M\u1ED9t',      alias:['binh duong','thu dau mot'] },
  { name:'M\u1EF9 Tho',           alias:['tien giang','my tho'] },
  { name:'Long Xuy\xEAn',       alias:['an giang','long xuyen'] },
  { name:'Ch\xE2u \u0110\u1ED1c',         alias:['chau doc'] },
  { name:'R\u1EA1ch Gi\xE1',         alias:['kien giang','rach gia'] },
  { name:'C\xE0 Mau',           alias:['ca mau'] },
  { name:'B\u1EBFn Tre',          alias:['ben tre'] },
  { name:'V\u0129nh Long',        alias:['vinh long'] },
  { name:'S\xF3c Tr\u0103ng',        alias:['soc trang'] },
  { name:'B\u1EA1c Li\xEAu',         alias:['bac lieu'] },
  { name:'B\u1EA3o L\u1ED9c',          alias:['bao loc'] },
  { name:'L\u1EA1ng S\u01A1n',         alias:['ls','lang son'] },
  { name:'Thanh H\xF3a',        alias:['th','thanh hoa'] },
  { name:'Vinh',             alias:['nghe an'] },
  { name:'\u0110\u1ED3ng H\u1EDBi',         alias:['quang binh','dong hoi'] },
  { name:'Cao B\u1EB1ng',         alias:['cao bang'] },
];

let tpVehicle = 'car-gas';

function showAC(inputId, dropId) {
  const val = document.getElementById(inputId).value.trim().toLowerCase();
  const drop = document.getElementById(dropId);
  const other = inputId === 'tpFrom' ? document.getElementById('tpTo').value.trim() : document.getElementById('tpFrom').value.trim();
  const nVal = removeAccents(val).toLowerCase();
  const filtered = val.length === 0
    ? CITIES.slice(0, 15)
    : CITIES.filter(c =>
        c.name.toLowerCase().includes(val) ||
        removeAccents(c.name).toLowerCase().includes(nVal) ||
        c.alias.some(a => a.includes(val) || a.includes(nVal))
      ).slice(0, 15);
  if (filtered.length === 0) { drop.classList.remove('open'); return; }
  drop.innerHTML = filtered.map(c =>
    \\\`<div class="tp-ac-item" onmousedown="pickCity('\\\${inputId}','\\\${dropId}','\\\${c.name}')">
      \\\${c.name}
    </div>\\\`
  ).join('');
  drop.classList.add('open');
}

function hideAC(dropId) {
  setTimeout(() => document.getElementById(dropId).classList.remove('open'), 150);
}

function pickCity(inputId, dropId, name) {
  document.getElementById(inputId).value = name;
  document.getElementById(dropId).classList.remove('open');
  checkGoBtn();
}

function swapCities() {
  const f = document.getElementById('tpFrom');
  const t = document.getElementById('tpTo');
  [f.value, t.value] = [t.value, f.value];
  checkGoBtn();
}

function selectVP(btn) {
  document.querySelectorAll('.tp-vpill2').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  tpVehicle = btn.dataset.v;
}

function checkGoBtn() {
  const f = document.getElementById('tpFrom').value.trim();
  const t = document.getElementById('tpTo').value.trim();
  document.getElementById('tpGoBtn').disabled = !(f && t && f !== t);
}

function goTrip() {
  const f = encodeURIComponent(document.getElementById('tpFrom').value.trim());
  const t = encodeURIComponent(document.getElementById('tpTo').value.trim());
  location.href = \\\`/tien-ich-giao-thong/chuyen-di?from=\\\${f}&to=\\\${t}&vehicle=\\\${tpVehicle}\\\`;
}

document.getElementById('tpFrom').addEventListener('input', checkGoBtn);
document.getElementById('tpTo').addEventListener('input', checkGoBtn);

function removeAccents(s) {
  return s.normalize('NFD').replace(/[\u0300-\u036F]/g,'').replace(/\u0111/g,'d').replace(/\u0110/g,'D');
}

function licon(name, size, sw) {
  if (!window.lucide || !window.lucide[name]) return '';
  const children = window.lucide[name].map(([tag, attrs]) => {
    const a = Object.entries(attrs).map(([k,v]) => \\\`\\\${k}="\\\${v}"\\\`).join(' ');
    return \\\`<\\\${tag} \\\${a}/>\\\`;
  }).join('');
  return \\\`<svg xmlns="http://www.w3.org/2000/svg" width="\\\${size||16}" height="\\\${size||16}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="\\\${sw||2}" stroke-linecap="round" stroke-linejoin="round">\\\${children}</svg>\\\`;
}

window.addEventListener('load', () => {
  lucide.createIcons();
  const set = (id, icon, sz, sw) => { const el = document.getElementById(id); if(el) el.innerHTML = licon(icon, sz, sw); };
  set('tp-icon-from', 'MapPin', 15, 2.2);
  set('tp-icon-to', 'Navigation', 15, 2.2);
  // \u2500\u2500 DANG KIEM LOOKUP \u2500\u2500
  window.dkFormatPlate = function(el) {
    el.value = el.value.replace(/[^a-zA-Z0-9\\\\-\\\\.]/g,'').toUpperCase();
  };
  const DK_MOCK = {
    '51F12345':  { expiry:'2026-11-20', center:'Tr\u1EA1m 50-04V Nguy\u1EC5n Th\u1ECB Th\u1EADp', type:'\xD4 t\xF4 con (Sedan)', cycle: 3 },
    '29A12345':  { expiry:'2025-12-01', center:'Tr\u1EA1m 29-02V C\u1EA7u Gi\u1EA5y', type:'\xD4 t\xF4 con (Sedan)', cycle: 6 },
    '51G99999':  { expiry:'2024-03-10', center:'Tr\u1EA1m 50-01V Th\u1EE7 \u0110\u1EE9c', type:'\xD4 t\xF4 con (SUV)', cycle: 8 },
  };
  window.dkSearch = function() {
    const raw = document.getElementById('dkPlate').value.replace(/[^a-zA-Z0-9]/g,'').toUpperCase();
    if (!raw || raw.length < 5) { toast('Nh\u1EADp bi\u1EC3n s\u1ED1 h\u1EE3p l\u1EC7 \u0111\u1EC3 tra c\u1EE9u'); return; }
    const m = DK_MOCK[raw] || { expiry:'2027-03-15', center:'Tr\u1EA1m 50-02V B\xECnh Th\u1EA1nh', type:'\xD4 t\xF4 con', cycle: 2 };
    const exp = new Date(m.expiry), now = new Date();
    const days = Math.round((exp - now) / 86400000);
    let sc, siIcon, siText;
    if (days < 0)       { sc='expired'; siIcon=licon('XCircle',14,2);    siText='\u0110\xE3 h\u1EBFt h\u1EA1n ' + Math.abs(days) + ' ng\xE0y'; }
    else if (days < 30) { sc='warning'; siIcon=licon('AlertTriangle',14,2); siText='C\xF2n ' + days + ' ng\xE0y'; }
    else                { sc='ok';      siIcon=licon('CheckCircle2',14,2);  siText='C\xF2n h\u1EA1n ' + days + ' ng\xE0y'; }
    const plate = document.getElementById('dkPlate').value.toUpperCase();
    document.getElementById('dkResult').innerHTML = \\\`
      <div class="dk-result">
        <div class="dk-result-plate">\\\${plate}</div>
        <div class="dk-result-status \\\${sc}">\\\${siIcon}\\\${siText}</div>
        <div class="dk-result-details">
          <strong>H\u1EBFt h\u1EA1n:</strong> \\\${exp.toLocaleDateString('vi-VN')} &nbsp;\xB7&nbsp;
          <strong>L\u1EA7n \u0111\u0103ng ki\u1EC3m:</strong> L\u1EA7n \\\${m.cycle}<br>
          <strong>Lo\u1EA1i xe:</strong> \\\${m.type}<br>
          <strong>N\u01A1i \u0111\u0103ng ki\u1EC3m l\u1EA7n cu\u1ED1i:</strong> \\\${m.center}
        </div>
        <div class="dk-result-actions">
          <button class="dk-remind-btn" onclick="toast('\u0110\xE3 \u0111\u1EB7t nh\u1EAFc h\u1EA1n \u0111\u0103ng ki\u1EC3m - th\xF4ng b\xE1o tr\u01B0\u1EDBc 45, 30 v\xE0 7 ng\xE0y')">
            \\\${licon('Bell',14,2)}
            \u0110\u1EB7t nh\u1EAFc
          </button>
          <a class="dk-detail-link" href="/tien-ich-giao-thong/dang-kiem">Xem l\u1ECBch s\u1EED \u0111\u0103ng ki\u1EC3m \u2192</a>
        </div>
      </div>\\\`;
  };

  set('vp-icon-motorbike', 'Bike', 14, 2);
  set('vp-icon-car-gas', 'Car', 14, 2);
  set('vp-icon-car-ev', 'Zap', 14, 2);
  // mega-menu icons
  document.querySelectorAll('.mega-item[data-micon]').forEach(el => {
    const svg = licon(el.dataset.micon, 15, 1.8);
    el.insertAdjacentHTML('afterbegin', svg);
  });
});

/* \u2500\u2500 NAV SIDEBAR (mobile) \u2500\u2500 */
function openNavSidebar() {
  document.getElementById('navSidebar').classList.add('open');
  document.getElementById('navSidebarOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeNavSidebar() {
  document.getElementById('navSidebar').classList.remove('open');
  document.getElementById('navSidebarOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function toggleSidebarSection(el) {
  el.classList.toggle('expanded');
  el.nextElementSibling.classList.toggle('open');
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeNavSidebar(); closeNavSearch(); } });

/* \u2500\u2500 NAV VEHICLE SEARCH \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
(function() {
  const VEHICLE_DATA = [
    // \u2500\u2500 \xD4 T\xD4 \u2500\u2500
    {brand:'toyota',label:'Toyota',color:'#EB0A1E',cat:'\xD4 t\xF4',models:[
      {name:'Fortuner',slug:'fortuner',type:'SUV'},
      {name:'Camry',slug:'camry',type:'Sedan'},
      {name:'Corolla Cross',slug:'corolla-cross',type:'Crossover'},
      {name:'Innova Cross',slug:'innova-cross',type:'MPV'},
      {name:'Veloz',slug:'veloz',type:'MPV'},
      {name:'Raize',slug:'raize',type:'SUV'},
      {name:'Vios',slug:'vios',type:'Sedan'},
      {name:'Land Cruiser',slug:'land-cruiser',type:'SUV'},
      {name:'Yaris Cross',slug:'yaris-cross',type:'Crossover'},
    ]},
    {brand:'honda',label:'Honda',color:'#CC0000',cat:'\xD4 t\xF4',models:[
      {name:'CR-V',slug:'cr-v',type:'SUV'},
      {name:'City',slug:'city',type:'Sedan'},
      {name:'Civic',slug:'civic',type:'Sedan'},
      {name:'HR-V',slug:'hr-v',type:'Crossover'},
      {name:'BR-V',slug:'br-v',type:'SUV'},
      {name:'Accord',slug:'accord',type:'Sedan'},
      {name:'Brio',slug:'brio',type:'Hatchback'},
    ]},
    {brand:'hyundai',label:'Hyundai',color:'#002C5F',cat:'\xD4 t\xF4',models:[
      {name:'Tucson',slug:'tucson',type:'SUV'},
      {name:'Santa Fe',slug:'santa-fe',type:'SUV'},
      {name:'Accent',slug:'accent',type:'Sedan'},
      {name:'Creta',slug:'creta',type:'Crossover'},
      {name:'Ioniq 6',slug:'ioniq-6',type:'EV'},
      {name:'Kona Electric',slug:'kona-electric',type:'EV'},
    ]},
    {brand:'kia',label:'Kia',color:'#05141F',cat:'\xD4 t\xF4',models:[
      {name:'Carnival',slug:'carnival',type:'MPV'},
      {name:'Sorento',slug:'sorento',type:'SUV'},
      {name:'Seltos',slug:'seltos',type:'Crossover'},
      {name:'Sportage',slug:'sportage',type:'SUV'},
      {name:'K3',slug:'k3',type:'Sedan'},
      {name:'Cerato',slug:'cerato',type:'Sedan'},
      {name:'EV6',slug:'ev6',type:'EV'},
    ]},
    {brand:'mazda',label:'Mazda',color:'#91020C',cat:'\xD4 t\xF4',models:[
      {name:'CX-5',slug:'cx-5',type:'SUV'},
      {name:'CX-8',slug:'cx-8',type:'SUV'},
      {name:'Mazda3',slug:'mazda3',type:'Sedan'},
      {name:'CX-3',slug:'cx-3',type:'Crossover'},
      {name:'CX-30',slug:'cx-30',type:'Crossover'},
      {name:'Mazda6',slug:'mazda6',type:'Sedan'},
    ]},
    {brand:'ford',label:'Ford',color:'#003499',cat:'\xD4 t\xF4',models:[
      {name:'Ranger',slug:'ranger',type:'B\xE1n t\u1EA3i'},
      {name:'Everest',slug:'everest',type:'SUV'},
      {name:'Territory',slug:'territory',type:'Crossover'},
      {name:'Explorer',slug:'explorer',type:'SUV'},
    ]},
    {brand:'mitsubishi',label:'Mitsubishi',color:'#BC1C2B',cat:'\xD4 t\xF4',models:[
      {name:'Xpander',slug:'xpander',type:'MPV'},
      {name:'Xforce',slug:'xforce',type:'Crossover'},
      {name:'Outlander',slug:'outlander',type:'SUV'},
      {name:'Pajero Sport',slug:'pajero-sport',type:'SUV'},
    ]},
    {brand:'vinfast',label:'VinFast',color:'#009EDB',cat:'\xD4 t\xF4',models:[
      {name:'VF 8',slug:'vf-8',type:'EV'},
      {name:'VF 9',slug:'vf-9',type:'EV'},
      {name:'VF 7',slug:'vf-7',type:'EV'},
      {name:'VF 6',slug:'vf-6',type:'EV'},
      {name:'VF 5',slug:'vf-5',type:'EV'},
      {name:'VF 3',slug:'vf-3',type:'EV'},
    ]},
    {brand:'mercedes',label:'Mercedes-Benz',color:'#A0A0A0',cat:'\xD4 t\xF4',models:[
      {name:'C-Class',slug:'c-class',type:'Sedan'},
      {name:'E-Class',slug:'e-class',type:'Sedan'},
      {name:'GLC',slug:'glc',type:'SUV'},
      {name:'GLE',slug:'gle',type:'SUV'},
    ]},
    {brand:'bmw',label:'BMW',color:'#0066CC',cat:'\xD4 t\xF4',models:[
      {name:'3 Series',slug:'3-series',type:'Sedan'},
      {name:'5 Series',slug:'5-series',type:'Sedan'},
      {name:'X3',slug:'x3',type:'SUV'},
      {name:'X5',slug:'x5',type:'SUV'},
    ]},
    {brand:'lexus',label:'Lexus',color:'#1A1A1A',cat:'\xD4 t\xF4',models:[
      {name:'NX',slug:'nx',type:'SUV'},
      {name:'RX',slug:'rx',type:'SUV'},
      {name:'ES',slug:'es',type:'Sedan'},
    ]},
    {brand:'suzuki',label:'Suzuki',color:'#003399',cat:'\xD4 t\xF4',models:[
      {name:'XL7',slug:'xl7',type:'MPV'},
      {name:'Ertiga',slug:'ertiga',type:'MPV'},
    ]},
    {brand:'mg',label:'MG',color:'#B01922',cat:'\xD4 t\xF4',models:[
      {name:'ZS',slug:'zs',type:'SUV'},
      {name:'5',slug:'mg5',type:'Sedan'},
      {name:'HS',slug:'hs',type:'SUV'},
    ]},
    {brand:'isuzu',label:'Isuzu',color:'#CC0000',cat:'\xD4 t\xF4',models:[
      {name:'D-Max',slug:'d-max',type:'B\xE1n t\u1EA3i'},
      {name:'mu-X',slug:'mu-x',type:'SUV'},
    ]},
    {brand:'tesla',label:'Tesla',color:'#CC0000',cat:'\xD4 t\xF4',models:[
      {name:'Model 3',slug:'model-3',type:'EV'},
      {name:'Model Y',slug:'model-y',type:'EV'},
      {name:'Model X',slug:'model-x',type:'EV'},
    ]},
    // \u2500\u2500 XE M\xC1Y \u2500\u2500
    {brand:'honda-may',label:'Honda',color:'#CC0000',cat:'Xe m\xE1y',models:[
      {name:'Wave Alpha',slug:'wave-alpha',type:'Xe s\u1ED1'},
      {name:'Vision',slug:'vision',type:'Tay ga'},
      {name:'Air Blade',slug:'air-blade',type:'Tay ga'},
      {name:'SH Mode',slug:'sh-mode',type:'Tay ga'},
      {name:'SH 160i',slug:'sh-160i',type:'Tay ga'},
      {name:'Winner X',slug:'winner-x',type:'C\xF4n tay'},
    ]},
    {brand:'yamaha-may',label:'Yamaha',color:'#003087',cat:'Xe m\xE1y',models:[
      {name:'Sirius',slug:'sirius',type:'Xe s\u1ED1'},
      {name:'NVX 155',slug:'nvx-155',type:'Tay ga'},
      {name:'Grande',slug:'grande',type:'Tay ga'},
      {name:'Exciter 150',slug:'exciter-150',type:'C\xF4n tay'},
      {name:'Janus',slug:'janus',type:'Tay ga'},
    ]},
    {brand:'suzuki-may',label:'Suzuki',color:'#003399',cat:'Xe m\xE1y',models:[
      {name:'Revo',slug:'revo',type:'Xe s\u1ED1'},
      {name:'Raider R150',slug:'raider',type:'C\xF4n tay'},
      {name:'GSX-S150',slug:'gsx-s150',type:'C\xF4n tay'},
    ]},
    {brand:'piaggio',label:'Piaggio',color:'#0033A0',cat:'Xe m\xE1y',models:[
      {name:'Vespa GTS 300',slug:'vespa-gts',type:'Tay ga'},
      {name:'Vespa Primavera',slug:'vespa-primavera',type:'Tay ga'},
      {name:'Liberty 150',slug:'liberty',type:'Tay ga'},
    ]},
  ];

  // Build flat index for fast search
  const INDEX = [];
  VEHICLE_DATA.forEach(b => {
    b.models.forEach(m => {
      const brandNorm = b.label.toLowerCase().replace(/[^a-z0-9]/g,'');
      const nameNorm = m.name.toLowerCase().replace(/[^a-z0-9]/g,'');
      INDEX.push({
        brand: b.brand, brandLabel: b.label, color: b.color,
        cat: b.cat, name: m.name, slug: m.slug, type: m.type,
        search: (b.label + ' ' + m.name + ' ' + m.slug + ' ' + brandNorm + nameNorm).toLowerCase(),
      });
    });
  });

  const inp = document.getElementById('navSearchInp');
  const drop = document.getElementById('navSearchDrop');
  let activeIdx = -1;
  let blurTimer = null;

  function getUrl(item) {
    if (item.cat === 'Xe m\xE1y') return '/tien-ich-giao-thong/hang-xe-may';
    return '/tien-ich-giao-thong/hang-xe/' + item.brand + '/' + item.slug;
  }

  function renderResults(results) {
    if (!results.length) {
      drop.innerHTML = '<div class="nsd-empty"><strong>Kh\xF4ng t\xECm th\u1EA5y xe</strong>Th\u1EED t\xEAn kh\xE1c nh\u01B0 "Toyota Camry" hay "Honda SH"</div>';
      return;
    }
    // Group by category
    const groups = {};
    results.forEach(r => {
      if (!groups[r.cat]) groups[r.cat] = [];
      groups[r.cat].push(r);
    });
    let html = '';
    Object.entries(groups).forEach(([cat, items], gi) => {
      if (gi > 0) html += '<div class="nsd-divider"></div>';
      html += \\\`<div class="nsd-section-label">\\\${cat}</div>\\\`;
      items.forEach((item, i) => {
        const isEV = item.type === 'EV';
        const isMoto = item.cat === 'Xe m\xE1y';
        const typeClass = isEV ? 'ev' : isMoto ? 'motorbike' : '';
        const url = getUrl(item);
        html += \\\`<a class="nsd-item" href="\\\${url}" data-idx="\\\${INDEX.indexOf(item)}">
          <span class="nsd-dot" style="background:\\\${item.color}"></span>
          <span class="nsd-info">
            <span class="nsd-model">\\\${item.name}</span>
            <span class="nsd-brand">\\\${item.brandLabel}</span>
          </span>
          <span class="nsd-type \\\${typeClass}">\\\${item.type}</span>
        </a>\\\`;
      });
    });
    drop.innerHTML = html;
    activeIdx = -1;
  }

  function showEmpty() {
    drop.innerHTML = \\\`<div class="nsd-section-label">Ph\u1ED5 bi\u1EBFn nh\u1EA5t</div>\\\` +
      ['toyota|fortuner|Fortuner|SUV|#EB0A1E|\xD4 t\xF4','honda|city|City|Sedan|#CC0000|\xD4 t\xF4','kia|seltos|Seltos|Crossover|#05141F|\xD4 t\xF4',
       'vinfast|vf-8|VF 8|EV|#009EDB|\xD4 t\xF4','yamaha-may|nvx-155|NVX 155|Tay ga|#003087|Xe m\xE1y','honda-may|air-blade|Air Blade|Tay ga|#CC0000|Xe m\xE1y']
      .map(s => { const [brand,slug,name,type,color,cat] = s.split('|');
        const isEV = type === 'EV'; const isMoto = cat === 'Xe m\xE1y';
        const typeClass = isEV ? 'ev' : isMoto ? 'motorbike' : '';
        const url = isMoto ? '/tien-ich-giao-thong/hang-xe-may' : \\\`/tien-ich-giao-thong/hang-xe/\\\${brand}/\\\${slug}\\\`;
        return \\\`<a class="nsd-item" href="\\\${url}">
          <span class="nsd-dot" style="background:\\\${color}"></span>
          <span class="nsd-info"><span class="nsd-model">\\\${name}</span><span class="nsd-brand">\\\${brand.replace('-may','').charAt(0).toUpperCase()+brand.replace('-may','').slice(1)}</span></span>
          <span class="nsd-type \\\${typeClass}">\\\${type}</span></a>\\\`;
      }).join('');
  }

  function openDrop() {
    const q = inp.value.trim();
    if (!q) showEmpty();
    drop.classList.add('open');
  }
  function closeDrop() {
    drop.classList.remove('open');
    activeIdx = -1;
  }

  inp.addEventListener('input', () => {
    const q = inp.value.trim().toLowerCase();
    if (!q) { showEmpty(); drop.classList.add('open'); return; }
    const results = INDEX.filter(r => r.search.includes(q)).slice(0, 12);
    renderResults(results);
    drop.classList.add('open');
  });

  inp.addEventListener('focus', () => {
    clearTimeout(blurTimer);
    openDrop();
  });

  inp.addEventListener('blur', () => {
    blurTimer = setTimeout(closeDrop, 160);
  });

  // Keyboard navigation
  inp.addEventListener('keydown', e => {
    const items = drop.querySelectorAll('.nsd-item');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIdx = Math.min(activeIdx + 1, items.length - 1);
      items.forEach((el, i) => el.classList.toggle('nsd-active', i === activeIdx));
      if (items[activeIdx]) items[activeIdx].scrollIntoView({block:'nearest'});
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIdx = Math.max(activeIdx - 1, 0);
      items.forEach((el, i) => el.classList.toggle('nsd-active', i === activeIdx));
      if (items[activeIdx]) items[activeIdx].scrollIntoView({block:'nearest'});
    } else if (e.key === 'Enter') {
      if (activeIdx >= 0 && items[activeIdx]) {
        e.preventDefault();
        items[activeIdx].click();
      }
    } else if (e.key === 'Escape') {
      closeDrop(); inp.blur();
    }
  });

  // Slash key shortcut to focus search
  document.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement !== inp && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault(); inp.focus();
    }
  });

  window.closeNavSearch = closeDrop;

  // \u2500\u2500 MOBILE SEARCH \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  const mobileOverlay = document.getElementById('mobileSearchOverlay');
  const mobileInp = document.getElementById('mobileSearchInp');
  const mobileDrop = document.getElementById('mobileSearchDrop');

  function renderMobileResults(results) {
    if (!results.length) {
      mobileDrop.innerHTML = '<div class="nsd-empty"><strong>Kh\xF4ng t\xECm th\u1EA5y xe</strong>Th\u1EED t\xEAn kh\xE1c nh\u01B0 "Toyota Camry" hay "Honda SH"</div>';
    } else {
      const groups = {};
      results.forEach(r => { if (!groups[r.cat]) groups[r.cat] = []; groups[r.cat].push(r); });
      let html = '';
      Object.entries(groups).forEach(([cat, items], gi) => {
        if (gi > 0) html += '<div class="nsd-divider"></div>';
        html += \\\`<div class="nsd-section-label">\\\${cat}</div>\\\`;
        items.forEach(item => {
          const typeClass = item.type === 'EV' ? 'ev' : item.cat === 'Xe m\xE1y' ? 'motorbike' : '';
          const url = getUrl(item);
          html += \\\`<a class="nsd-item" href="\\\${url}">
            <span class="nsd-dot" style="background:\\\${item.color}"></span>
            <span class="nsd-info"><span class="nsd-model">\\\${item.name}</span><span class="nsd-brand">\\\${item.brandLabel}</span></span>
            <span class="nsd-type \\\${typeClass}">\\\${item.type}</span></a>\\\`;
        });
      });
      mobileDrop.innerHTML = html;
    }
    mobileDrop.classList.add('open');
  }

  mobileInp.addEventListener('input', () => {
    const q = mobileInp.value.trim().toLowerCase();
    if (!q) { mobileDrop.classList.remove('open'); return; }
    renderMobileResults(INDEX.filter(r => r.search.includes(q)).slice(0, 10));
  });

  window.toggleMobileSearch = function() {
    const isOpen = mobileOverlay.classList.contains('open');
    if (isOpen) { closeMobileSearch(); } else {
      mobileOverlay.classList.add('open');
      mobileDrop.classList.remove('open');
      mobileInp.value = '';
      setTimeout(() => mobileInp.focus(), 60);
    }
  };
  window.closeMobileSearch = function() {
    mobileOverlay.classList.remove('open');
    mobileDrop.classList.remove('open');
    mobileInp.value = '';
  };
})();
(function(){
  var el = document.getElementById('gs-date');
  if(el){ var d=new Date(); el.textContent=String(d.getDate()).padStart(2,'0')+'/'+String(d.getMonth()+1).padStart(2,'0'); }
})();

// \u2500\u2500 BSX TRIGGER \u2014 service pills focus plate input \u2500\u2500
document.querySelectorAll('[data-bsx-trigger]').forEach(pill => {
  pill.addEventListener('click', function(e) {
    e.preventDefault();
    const hint = this.dataset.bsxTrigger;
    const label = document.getElementById('platePanelLabel');
    const box   = document.getElementById('plateBox');
    const input = document.getElementById('plateInput');
    const panel = document.querySelector('.plate-panel');

    if (label) {
      label.textContent = hint;
      label.classList.add('is-triggered');
      setTimeout(() => label.classList.remove('is-triggered'), 1200);
    }
    if (box) {
      box.classList.remove('is-triggered');
      void box.offsetWidth; // reflow \u0111\u1EC3 restart animation
      box.classList.add('is-triggered');
      setTimeout(() => box.classList.remove('is-triggered'), 1300);
    }
    panel && panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    setTimeout(() => input && input.focus(), 300);
  });
});

// \u2500\u2500 Consent Sheet \u2500\u2500
window.openConsentSheet = function(plate, vtypeLabel) {
  const overlay = document.getElementById('consentSheet');
  document.getElementById('csPlateNum').textContent = plate;
  document.getElementById('csPlateType').textContent = vtypeLabel;
  const isOto = vtypeLabel && vtypeLabel.toLowerCase().includes('\xF4 t\xF4');
  document.getElementById('csPlateIcon').innerHTML = isOto
    ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EB2F96" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="7" width="22" height="11" rx="2"/><path d="M5 7V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>'
    : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EB2F96" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6H4L2 14h20l-2-8H15z"/><path d="M15 6l1 8"/></svg>';
  // reset to default view
  document.getElementById('csDefault').style.display = '';
  document.getElementById('csSuccess').style.display = 'none';
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeConsentSheet = function() {
  const overlay = document.getElementById('consentSheet');
  const sheet = document.getElementById('csSheetInner');
  sheet.style.transform = 'translateY(100%)';
  setTimeout(() => {
    overlay.classList.remove('open');
    sheet.style.transform = '';
    document.body.style.overflow = '';
  }, 300);
};

window.confirmAddVehicle = function() {
  document.getElementById('csDefault').style.display = 'none';
  document.getElementById('csSuccess').style.display = 'flex';
};

document.getElementById('consentSheet').addEventListener('click', function(e) {
  if (e.target === this) closeConsentSheet();
});

/* \u2500\u2500 ANIMATION CHOREOGRAPHY \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
(function initAnimations() {

  /* 1. Scroll-triggered reveal \u2014 section eyebrows, titles, [data-anim] */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObs.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.section-eyebrow, .section-title, [data-anim="slide-up"]')
    .forEach(el => revealObs.observe(el));

  /* 2. Feature cards \u2014 staggered spring-pop */
  const cardObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const cards = entry.target.querySelectorAll('.fc-card');
      cards.forEach((card, i) => {
        setTimeout(() => card.classList.add('is-visible'), i * 80);
      });
      cardObs.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  const fcGrid = document.getElementById('fcGrid');
  if (fcGrid) cardObs.observe(fcGrid);

  /* 3. Stats bar \u2014 count-up animation */
  const statTargets = [
    { el: null, end: 1.2, suffix: 'M+', decimals: 1 },
    { el: null, end: 63,  suffix: '',   decimals: 0 },
    { el: null, end: 10,  suffix: '+',  decimals: 0 },
    { el: null, end: 0,   suffix: '\u0111',  decimals: 0 },
  ];
  const statEls = document.querySelectorAll('.stat-num');
  statEls.forEach((el, i) => { if (statTargets[i]) statTargets[i].el = el; });

  function countUp(el, end, suffix, decimals, cell) {
    const duration = 1200;
    const start = performance.now();
    const startVal = 0;
    function step(now) {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      const val = startVal + (end - startVal) * ease;
      const display = decimals > 0 ? val.toFixed(decimals) : Math.round(val);
      el.innerHTML = display + '<em>' + suffix + '</em>';
      if (p < 1) requestAnimationFrame(step);
      else { cell.classList.add('did-count'); }
    }
    requestAnimationFrame(step);
  }

  let statsDone = false;
  const statsObs = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting || statsDone) return;
    statsDone = true;
    statTargets.forEach(({ el, end, suffix, decimals }, i) => {
      if (!el) return;
      const cell = el.closest('.stat-cell');
      setTimeout(() => countUp(el, end, suffix, decimals, cell), i * 120);
    });
    statsObs.disconnect();
  }, { threshold: 0.4 });

  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) statsObs.observe(statsBar);

  /* 4. Wave SVG path draw on load */
  const wavePath = document.querySelector('.hero-wave path');
  if (wavePath) {
    const len = wavePath.getTotalLength ? wavePath.getTotalLength() : 1600;
    wavePath.style.cssText = \\\`stroke:#F7F5FA;stroke-width:1;stroke-dasharray:\\\${len};stroke-dashoffset:\\\${len};fill:#F7F5FA;animation:wave-draw 1.2s cubic-bezier(.22,1,.36,1) .4s both\\\`;
  }

  /* 5. Plate box pulse on result */
  const origRender = window.renderResult;
  if (typeof origRender === 'function') {
    window.renderResult = function(...args) {
      origRender.apply(this, args);
      const pb = document.getElementById('plateBox');
      if (pb) {
        pb.classList.remove('has-result');
        void pb.offsetWidth;
        pb.classList.add('has-result');
      }
    };
  }

  /* 6. Section cards with [data-anim] \u2014 auto-tag utility section items */
  document.querySelectorAll('.section.section--anim .card, .util-card, .tp-route-card')
    .forEach(el => {
      if (!el.dataset.anim) el.setAttribute('data-anim', 'slide-up');
      revealObs.observe(el);
    });

  /* 7. Road car easter egg on stats bar hover */
  const statsBarInner = document.querySelector('.stats-bar-inner');
  if (statsBarInner) {
    let carAdded = false;
    statsBarInner.addEventListener('mouseenter', () => {
      if (carAdded) return;
      carAdded = true;
      const wrap = document.createElement('div');
      wrap.className = 'road-car-wrap';
      const car = document.createElement('div');
      car.className = 'road-car';
      car.textContent = '\u{1F697}';
      wrap.appendChild(car);
      statsBar.insertBefore(wrap, statsBarInner);
      setTimeout(() => { wrap.remove(); carAdded = false; }, 5000);
    });
  }

  /* 8. Pin-bob on hover for station cards */
  document.addEventListener('mouseover', e => {
    const card = e.target.closest('.stn-card, .parking-spot, .rescue-card');
    if (card && !card._pinBob) {
      card._pinBob = true;
      card.style.animation = 'pin-bob .55s cubic-bezier(.22,1,.36,1)';
      card.addEventListener('animationend', () => {
        card.style.animation = '';
        card._pinBob = false;
      }, { once: true });
    }
  });

  /* 9. Stagger-reveal for brand chips */
  const brandObs = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    document.querySelectorAll('.brand-chip').forEach((chip, i) => {
      chip.style.opacity = '0';
      chip.style.transform = 'translateY(10px)';
      chip.style.transition = \\\`opacity .35s ease \\\${i*40}ms, transform .35s cubic-bezier(.22,1,.36,1) \\\${i*40}ms\\\`;
      requestAnimationFrame(() => {
        setTimeout(() => {
          chip.style.opacity = '';
          chip.style.transform = '';
        }, i * 40);
      });
    });
    brandObs.disconnect();
  }, { threshold: 0.2 });

  const brandStrip = document.querySelector('.brand-row');
  if (brandStrip) brandObs.observe(brandStrip);

})();
<\/script> `])), renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(`<style>${rawCss}</style>`)}` }), maybeRenderHead()) })}`;
}, "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/index.astro", void 0);

const $$file = "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/index.astro";
const $$url = "/tien-ich-giao-thong";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
