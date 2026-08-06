import { c as createComponent, e as renderComponent, b as renderTemplate, m as maybeRenderHead, F as Fragment, u as unescapeHTML } from '../../chunks/astro/server_BMOddyS3.mjs';
import 'piccolore';
import { $ as $$VehicleHub } from '../../chunks/VehicleHub_Msovdq2n.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$BaoDuong = createComponent(($$result, $$props, $$slots) => {
  const rawCss = `
html, body { overflow: auto !important; height: auto !important; }
body { display: block !important; }
#navSearch, .nav-search { display: none !important; }
.nav-search-icon-btn, .nav-menu-btn { display: none !important; }
.site-nav { background: rgba(255,255,255,.97) !important; transition: none !important; }
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
  --amber-400: #FBBF24;
  --amber-100: #FDE68A;
  --amber-50:  #FFFBEB;
  --green-500: #16A34A;
  --green-400: #4ADE80;
  --green-100: #BBF7D0;
  --green-50:  #F0FDF4;
  --blue-50:   #EFF6FF;
  --blue-500:  #2563EB;
  --red-500:   #DC2626;
  --red-100:   #FECACA;
  --red-50:    #FEF2F2;
  --shadow-s:  0 1px 3px rgba(28,23,26,.08), 0 1px 2px rgba(28,23,26,.06);
  --shadow-m:  0 4px 12px rgba(28,23,26,.1), 0 2px 4px rgba(28,23,26,.06);
  --shadow-l:  0 8px 28px rgba(28,23,26,.14), 0 4px 8px rgba(28,23,26,.06);
  --r-sm:   8px;
  --r-md:   12px;
  --r-lg:   16px;
  --r-xl:   20px;
  --content: 1240px;
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
html { background: var(--bg); scroll-behavior: smooth; overflow-x: hidden; }
body {
  font-family: 'MoMoTrustSans', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--bg); color: var(--gray-900); min-height: 100vh; overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

/* \u2500\u2500 SITE NAV (Mega Menu) \u2500\u2500 */
.site-nav{position:sticky;top:0;z-index:200;background:#fff;border-bottom:1px solid var(--gray-200);box-shadow:0 1px 3px rgba(0,0,0,.06);transition:background .2s,border-color .2s,box-shadow .2s}
.site-nav:has(.nav-item:hover){background:#1a2535;border-bottom-color:transparent;box-shadow:none}
.site-nav:has(.nav-item:hover) .nav-trigger{color:rgba(255,255,255,.6)}
.site-nav:has(.nav-item:hover) .nav-item:hover .nav-trigger{color:#fff}
.site-nav:has(.nav-item:hover) .nav-back{color:rgba(255,255,255,.9)}
.site-nav:has(.nav-item:hover) .nav-back:hover{color:#fff;background:rgba(255,255,255,.12)}
.site-nav:has(.nav-item:hover) .nav-sep{background:rgba(255,255,255,.15)}
.site-nav:has(.nav-item:hover) .logo-text{color:#fff}
.site-nav:has(.nav-item:hover) .logo-text em{color:rgba(255,255,255,.7)}
.nav-inner{max-width:var(--content);margin:0 auto;height:56px;padding:0 20px;display:flex;align-items:center;gap:16px;overflow:visible}
.nav-left{display:flex;align-items:center;gap:14px;flex-shrink:0}
.nav-back{display:inline-flex;align-items:center;gap:4px;font-size:12px;font-weight:600;color:var(--gray-400);text-decoration:none;padding:5px 8px;border-radius:7px;transition:color .15s,background .15s}
.nav-back:hover{color:var(--gray-700);background:var(--gray-100)}
.nav-sep{width:1px;height:18px;background:var(--gray-200);flex-shrink:0}
.nav-logo{display:flex;align-items:center;gap:9px;text-decoration:none}
.logo-icon{width:32px;height:32px;border-radius:9px;overflow:hidden;flex-shrink:0}
.logo-icon img{width:100%;height:100%;display:block}
.logo-text{font-size:14px;font-weight:800;color:var(--gray-900)}
.logo-text em{color:var(--pink-500);font-style:normal}
.nav-links{display:flex;gap:0;margin-left:8px}
.nav-item{position:static}
.nav-trigger{display:inline-flex;align-items:center;gap:5px;height:56px;padding:0 14px;font-size:13px;font-weight:600;color:var(--gray-600);background:none;border:none;cursor:pointer;text-decoration:none;white-space:nowrap;transition:color .15s;font-family:inherit}
.nav-trigger:hover,.nav-item:hover .nav-trigger{color:var(--gray-900)}
.nav-trigger svg{transition:transform .2s;flex:none}
.nav-item:hover .nav-trigger svg{transform:rotate(180deg)}
.mega{position:absolute;top:100%;left:0;right:0;z-index:400;background:#1a2535;border-radius:0 0 20px 20px;padding:0;opacity:0;transform:translateY(-6px);pointer-events:none;transition:opacity .18s,transform .18s;box-shadow:0 20px 48px rgba(0,0,0,.28)}
.nav-item:hover .mega{opacity:1;transform:translateY(0);pointer-events:auto}
.mega-header{display:inline-flex;align-items:center;gap:6px;font-size:15px;font-weight:700;color:#fff;text-decoration:none;margin-bottom:24px;opacity:.9;transition:opacity .12s}
.mega-header:hover{opacity:1}
.mega-header svg{flex:none}
.mega-body{max-width:1152px;margin:0 auto;padding:28px 20px 36px}
.mega-item svg{flex-shrink:0;opacity:.7;transition:opacity .12s}.mega-item:hover svg{opacity:1}
.mega-cols{display:flex;gap:48px}
.mega-col{display:flex;flex-direction:column;gap:0;min-width:140px}
.mega-col-label{font-size:11px;font-weight:600;color:rgba(255,255,255,.4);letter-spacing:.04em;margin-bottom:10px}
.mega-item{display:flex;align-items:center;gap:8px;padding:7px 0;font-size:15px;font-weight:500;color:rgba(255,255,255,.85);text-decoration:none;transition:color .12s;white-space:nowrap}
.mega-item:hover{color:#fff}
@media(max-width:768px){
  .nav-inner{height:48px;padding:0 10px;gap:8px}
  .nav-back span{display:none}
  .nav-sep{display:none}
  .logo-text{display:none}
  .logo-icon{width:28px;height:28px}
  .nav-links{overflow-x:auto;scrollbar-width:none}
  .nav-links::-webkit-scrollbar{display:none}
  .nav-trigger{height:48px;padding:0 10px;font-size:12px}
  .mega{display:none}
}

/* \u2500\u2500 PAGE LAYOUT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.bd-page { padding: 0; }
.bd-wrap { max-width: var(--content); margin: 0 auto; padding: 32px 20px 80px; }

/* \u2500\u2500 HERO SECTION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.bd-hero-section {
  background: var(--gray-900);
  position: relative; overflow: hidden;
}
.bd-hero-section::before {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 60% 90% at 75% 50%, rgba(235,47,150,.13) 0%, transparent 65%);
  pointer-events: none;
}
.bd-hero-inner {
  max-width: var(--content); margin: 0 auto; padding: 56px 20px 56px;
  display: grid; grid-template-columns: 1fr 440px; gap: 56px; align-items: center;
}
.bd-hero-eyebrow {
  font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
  color: var(--pink-400); margin-bottom: 14px;
}
.bd-hero-title {
  font-family: 'MoMoTrustDisplay', 'MoMoTrustSans', sans-serif;
  font-size: clamp(28px, 3.6vw, 44px); font-weight: 900; line-height: 1.09;
  letter-spacing: -.025em; color: #fff; margin-bottom: 12px;
}
.bd-hero-title em { color: var(--pink-400); font-style: normal; }
.bd-hero-sub {
  font-size: 15px; color: rgba(255,255,255,.5); line-height: 1.6;
  max-width: 460px; margin-bottom: 28px;
}
.bd-hero-stats {
  display: flex; gap: 24px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,.08);
}
.bd-hero-stat-num {
  font-family: 'MoMoTrustDisplay', 'MoMoTrustSans', sans-serif;
  font-size: 22px; font-weight: 900; color: #fff; line-height: 1;
}
.bd-hero-stat-label {
  font-size: 11px; color: rgba(255,255,255,.35); margin-top: 3px; font-weight: 500;
}

/* \u2500\u2500 HERO MINI FORM \u2500\u2500 */
.hf-card {
  background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1);
  border-radius: 20px; overflow: hidden;
}
.hf-header {
  padding: 18px 20px 14px; border-bottom: 1px solid rgba(255,255,255,.07);
  display: flex; align-items: center; justify-content: space-between;
}
.hf-header-label {
  font-size: 12px; font-weight: 700; color: rgba(255,255,255,.5);
  letter-spacing: .04em; text-transform: uppercase;
}
.hf-step-dots { display: flex; align-items: center; gap: 6px; }
.hf-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: rgba(255,255,255,.2); transition: all .2s;
}
.hf-dot.active { background: var(--pink-400); width: 18px; border-radius: 3px; }
.hf-dot.done { background: rgba(255,255,255,.4); }

.hf-body { padding: 20px; }

/* Type pills */
.hf-type-row { display: flex; gap: 8px; margin-bottom: 16px; }
.hf-type-pill {
  flex: 1; padding: 10px 12px; border-radius: 10px; border: 1.5px solid rgba(255,255,255,.12);
  background: transparent; color: rgba(255,255,255,.5); font-family: inherit;
  font-size: 13px; font-weight: 700; cursor: pointer; transition: all .15s;
  display: flex; align-items: center; justify-content: center; gap: 7px;
}
.hf-type-pill:hover { border-color: rgba(255,255,255,.25); color: rgba(255,255,255,.8); }
.hf-type-pill.active { background: rgba(235,47,150,.18); border-color: var(--pink-400); color: #fff; }

/* Selects */
.hf-select-row { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px; }
.hf-select {
  width: 100%; padding: 10px 12px; border-radius: 10px;
  border: 1.5px solid rgba(255,255,255,.12); background: rgba(255,255,255,.06);
  color: #fff; font-family: inherit; font-size: 13px; font-weight: 600;
  cursor: pointer; appearance: none; -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 10px center;
  padding-right: 30px; transition: border-color .15s;
}
.hf-select:focus { outline: none; border-color: rgba(235,47,150,.6); }
.hf-select option { background: #1a2535; color: #fff; }
.hf-select:disabled { opacity: .35; cursor: not-allowed; }

/* KM Input */
.hf-km-row { position: relative; margin-bottom: 16px; }
.hf-km-input {
  width: 100%; padding: 12px 48px 12px 14px;
  border-radius: 10px; border: 1.5px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.06); color: #fff;
  font-family: 'MoMoTrustDisplay', 'MoMoTrustSans', sans-serif;
  font-size: 20px; font-weight: 900; letter-spacing: -.01em; transition: border-color .15s;
}
.hf-km-input::placeholder { color: rgba(255,255,255,.2); font-size: 14px; font-weight: 500; font-family: 'MoMoTrustSans', sans-serif; }
.hf-km-input:focus { outline: none; border-color: rgba(235,47,150,.6); }
.hf-km-unit {
  position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
  font-size: 12px; font-weight: 700; color: rgba(255,255,255,.3); pointer-events: none;
}
.hf-km-chips { display: flex; gap: 6px; margin-bottom: 16px; flex-wrap: wrap; }
.hf-km-chip {
  padding: 5px 11px; border-radius: 999px; border: 1px solid rgba(255,255,255,.12);
  background: transparent; color: rgba(255,255,255,.45); font-family: inherit;
  font-size: 12px; font-weight: 700; cursor: pointer; transition: all .15s;
}
.hf-km-chip:hover { border-color: rgba(255,255,255,.3); color: rgba(255,255,255,.75); }
.hf-km-chip.active { border-color: var(--pink-400); color: var(--pink-300); background: rgba(235,47,150,.1); }

/* CTA Button */
.hf-cta {
  width: 100%; padding: 13px 20px; border-radius: 12px;
  background: var(--pink-500); color: #fff; border: none;
  font-family: inherit; font-size: 15px; font-weight: 800;
  cursor: pointer; transition: all .15s;
  display: flex; align-items: center; justify-content: center; gap: 8px;
  box-shadow: 0 4px 16px rgba(235,47,150,.3);
}
.hf-cta:hover { background: var(--pink-600); transform: translateY(-1px); box-shadow: 0 6px 20px rgba(235,47,150,.35); }
.hf-cta:disabled { opacity: .4; cursor: not-allowed; transform: none; box-shadow: none; }

/* Result preview */
.hf-result { display: none; }
.hf-result.show { display: block; }
.hf-result-car {
  font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
  color: rgba(255,255,255,.4); margin-bottom: 12px; padding-bottom: 12px;
  border-bottom: 1px solid rgba(255,255,255,.07);
  display: flex; align-items: center; justify-content: space-between;
}
.hf-result-car button {
  font-size: 11px; font-weight: 700; color: rgba(255,255,255,.4); background: none;
  border: 1px solid rgba(255,255,255,.15); border-radius: 5px; padding: 3px 8px;
  cursor: pointer; font-family: inherit; transition: all .15s;
}
.hf-result-car button:hover { color: #fff; border-color: rgba(255,255,255,.3); }
.hf-result-km {
  display: flex; align-items: baseline; gap: 5px; margin-bottom: 16px;
}
.hf-result-km-num {
  font-family: 'MoMoTrustDisplay', 'MoMoTrustSans', sans-serif;
  font-size: 44px; font-weight: 900; color: #fff; letter-spacing: -.03em; line-height: 1;
}
.hf-result-km-unit { font-size: 16px; font-weight: 600; color: rgba(255,255,255,.35); }
.hf-result-items { display: flex; flex-direction: column; gap: 9px; margin-bottom: 14px; }
.hf-result-item {
  display: flex; align-items: center; gap: 10px; padding: 10px 12px;
  border-radius: 10px; background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.06);
}
.hf-result-item.urgent { background: rgba(220,38,38,.08); border-color: rgba(220,38,38,.2); }
.hf-result-item.warn-item { background: rgba(251,191,36,.06); border-color: rgba(251,191,36,.15); }
.hf-result-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.hf-result-dot.red { background: var(--red-500); }
.hf-result-dot.amber { background: var(--amber-400); }
.hf-result-dot.green { background: var(--green-400); }
.hf-result-name { flex: 1; font-size: 13px; font-weight: 700; color: rgba(255,255,255,.85); }
.hf-result-status { font-size: 11px; font-weight: 800; }
.hf-result-status.red { color: var(--red-500); }
.hf-result-status.amber { color: var(--amber-400); }
.hf-result-status.green { color: rgba(255,255,255,.3); }
.hf-result-cta {
  width: 100%; padding: 12px 20px; border-radius: 12px;
  background: var(--pink-500); color: #fff; border: none;
  font-family: inherit; font-size: 14px; font-weight: 800;
  cursor: pointer; transition: all .15s;
  display: flex; align-items: center; justify-content: center; gap: 8px;
  box-shadow: 0 4px 16px rgba(235,47,150,.3);
}
.hf-result-cta:hover { background: var(--pink-600); }

@media (max-width: 860px) {
  .bd-hero-inner { grid-template-columns: 1fr; gap: 28px; padding: 40px 16px 40px; }
  .bd-hero-stats { gap: 20px; }
  .hf-select-row { grid-template-columns: 1fr; }
}

/* \u2500\u2500 GARAGE SECTION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.garage-section {
  background: var(--white); border-top: 1px solid var(--gray-100);
  padding: 64px 20px 80px;
}
.garage-inner { max-width: var(--content); margin: 0 auto; }
.garage-header { margin-bottom: 32px; }
.garage-eyebrow {
  font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
  color: var(--pink-500); margin-bottom: 8px;
}
.garage-title {
  font-family: 'MoMoTrustDisplay', 'MoMoTrustSans', sans-serif;
  font-size: clamp(22px, 3vw, 30px); font-weight: 900; color: var(--gray-900);
  letter-spacing: -.02em; margin-bottom: 6px;
}
.garage-sub { font-size: 14px; color: var(--gray-500); line-height: 1.5; }
.garage-filters {
  display: flex; gap: 8px; margin-bottom: 28px; flex-wrap: wrap;
}
.garage-filter-group { display: flex; gap: 6px; }
.garage-filter-sep {
  width: 1px; background: var(--gray-200); margin: 0 4px; align-self: stretch;
}
.gf-btn {
  font-size: 13px; font-weight: 600; padding: 7px 14px;
  border: 1.5px solid var(--gray-200); border-radius: 8px;
  background: var(--white); color: var(--gray-600);
  cursor: pointer; transition: all .15s; font-family: inherit;
}
.gf-btn:hover { border-color: var(--pink-400); color: var(--pink-500); }
.gf-btn.active { background: var(--pink-500); border-color: var(--pink-500); color: #fff; }
.garage-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;
}
@media (max-width: 860px) { .garage-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px) { .garage-grid { grid-template-columns: 1fr; } }
.garage-card {
  border: 1.5px solid var(--gray-200); border-radius: var(--r-lg);
  padding: 20px; background: var(--white); transition: border-color .15s, box-shadow .15s;
  display: flex; flex-direction: column; gap: 12px;
}
.garage-card:hover { border-color: var(--pink-300); box-shadow: var(--shadow-s); }
.garage-card-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; }
.garage-card-badge {
  font-size: 10px; font-weight: 800; letter-spacing: .05em; padding: 3px 8px;
  border-radius: 6px; flex-shrink: 0; white-space: nowrap;
}
.garage-card-badge.official { background: var(--blue-50); color: var(--blue-500); }
.garage-card-badge.authorized { background: var(--green-50); color: var(--green-500); }
.garage-card-name { font-size: 14px; font-weight: 800; color: var(--gray-900); line-height: 1.3; }
.garage-card-brand { font-size: 12px; font-weight: 600; color: var(--pink-500); margin-top: 2px; }
.garage-card-meta { display: flex; flex-direction: column; gap: 5px; }
.garage-card-row { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--gray-500); }
.garage-card-row svg { flex-shrink: 0; color: var(--gray-400); }
.garage-card-footer { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-top: auto; padding-top: 12px; border-top: 1px solid var(--gray-100); }
.garage-rating { display: flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 800; color: var(--amber-500); }
.garage-momo-badge {
  font-size: 10px; font-weight: 700; color: var(--pink-500);
  background: var(--pink-50); border-radius: 5px; padding: 2px 7px;
}
.garage-book-btn {
  font-size: 12px; font-weight: 700; color: var(--pink-500);
  background: var(--pink-50); border: 1.5px solid var(--pink-100);
  border-radius: 8px; padding: 7px 14px; cursor: pointer; font-family: inherit;
  transition: background .15s, border-color .15s; white-space: nowrap;
}
.garage-book-btn:hover { background: var(--pink-100); border-color: var(--pink-300); }

/* \u2500\u2500 TOOL SHELL \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.bd-tool {
  background: var(--white); border-radius: var(--r-xl);
  box-shadow: var(--shadow-m); overflow: hidden;
  display: grid; grid-template-columns: 360px 1fr;
}
@media (max-width: 860px) {
  .bd-tool { grid-template-columns: 1fr; }
}

/* \u2500\u2500 FORM PANEL \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.bd-form-panel {
  border-right: 1px solid var(--gray-200);
  display: flex; flex-direction: column;
}
@media (max-width: 860px) {
  .bd-form-panel { border-right: none; border-bottom: 1px solid var(--gray-200); }
}
.bd-form-header {
  padding: 24px 24px 16px;
  border-bottom: 1px solid var(--gray-100);
}
.bd-form-title { font-size: 15px; font-weight: 800; color: var(--gray-900); margin-bottom: 3px; }
.bd-form-sub { font-size: 12px; color: var(--gray-500); line-height: 1.5; }

.bd-form-body { padding: 20px 24px; flex: 1; display: flex; flex-direction: column; gap: 18px; }

.bd-field { display: flex; flex-direction: column; gap: 7px; }
.bd-label {
  font-size: 11.5px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase;
  color: var(--gray-500);
}

/* Type pills */
.type-pills { display: flex; gap: 8px; }
.type-pill {
  flex: 1; padding: 10px 8px; border-radius: var(--r-md);
  border: 2px solid var(--gray-200); background: var(--white);
  cursor: pointer; transition: all .15s;
  display: flex; flex-direction: column; align-items: center; gap: 5px;
}
.type-pill:hover { border-color: var(--pink-400); }
.type-pill.active { border-color: var(--pink-500); background: var(--pink-50); }
.type-pill-icon { width: 36px; height: 24px; display: flex; align-items: center; justify-content: center; }
.type-pill-label { font-size: 12px; font-weight: 700; color: var(--gray-700); }
.type-pill.active .type-pill-label { color: var(--pink-500); }

/* Selects */
.bd-select {
  appearance: none; width: 100%; padding: 10px 36px 10px 12px;
  border: 1.5px solid var(--gray-200); border-radius: var(--r-md);
  font-family: inherit; font-size: 13px; font-weight: 600; color: var(--gray-900);
  background: var(--white) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%237A6E7F' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E") no-repeat right 12px center;
  cursor: pointer; transition: border-color .15s;
}
.bd-select:focus { outline: none; border-color: var(--pink-500); }
.bd-select:disabled { opacity: .4; cursor: not-allowed; }

/* KM input */
.km-input-row { display: flex; gap: 8px; align-items: center; }
.km-input {
  flex: 1; padding: 10px 12px; border: 1.5px solid var(--gray-200); border-radius: var(--r-md);
  font-family: inherit; font-size: 15px; font-weight: 800; color: var(--gray-900);
  background: var(--white); transition: border-color .15s; text-align: right;
}
.km-input:focus { outline: none; border-color: var(--pink-500); }
.km-unit {
  font-size: 12px; font-weight: 700; color: var(--gray-500);
  flex-shrink: 0; padding-right: 2px;
}
.km-chips { display: flex; gap: 6px; flex-wrap: wrap; }
.km-chip {
  padding: 4px 10px; border-radius: 999px;
  border: 1.5px solid var(--gray-200); background: var(--white);
  font-size: 11.5px; font-weight: 700; color: var(--gray-600);
  cursor: pointer; transition: all .15s;
}
.km-chip:hover { border-color: var(--pink-400); color: var(--pink-500); }
.km-chip.active { border-color: var(--pink-500); background: var(--pink-50); color: var(--pink-500); }

/* EV note */
.ev-note {
  display: none; padding: 10px 12px; border-radius: var(--r-md);
  background: var(--blue-50); border: 1px solid #BFDBFE;
  font-size: 11.5px; color: #1D4ED8; line-height: 1.5;
}
.ev-note.show { display: block; }

/* Submit */
.bd-submit {
  margin-top: auto; padding-top: 20px;
  padding-bottom: 24px;
  padding-left: 24px; padding-right: 24px;
}
.btn-check {
  width: 100%; padding: 13px 20px;
  background: var(--pink-500); color: var(--white);
  border: none; border-radius: var(--r-lg); cursor: pointer;
  font-family: inherit; font-size: 14px; font-weight: 800;
  display: flex; align-items: center; justify-content: center; gap: 8px;
  transition: background .15s, transform .1s, box-shadow .15s;
  box-shadow: 0 2px 8px rgba(235,47,150,.28);
}
.btn-check:hover { background: var(--pink-600); box-shadow: 0 4px 16px rgba(235,47,150,.38); }
.btn-check:active { transform: scale(.98); }
.btn-check:disabled { opacity: .45; cursor: not-allowed; transform: none; box-shadow: none; }

/* \u2500\u2500 RESULTS PANEL \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.bd-result-panel {
  display: flex; flex-direction: column;
  min-height: 480px;
}

/* Empty state */
.bd-empty {
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: 40px 24px; text-align: center; gap: 14px;
}
.bd-empty-icon { opacity: .25; }
.bd-empty-title { font-size: 15px; font-weight: 700; color: var(--gray-700); }
.bd-empty-sub { font-size: 13px; color: var(--gray-500); line-height: 1.5; max-width: 260px; }

/* Results content */
.bd-results { display: none; flex-direction: column; padding: 24px; gap: 24px; }
.bd-results.show { display: flex; }

/* Score row */
.bd-score-row { display: flex; align-items: center; gap: 16px; }
.bd-score-dial { position: relative; flex-shrink: 0; }
.bd-score-num {
  font-family: 'MoMoTrustDisplay', 'MoMoTrustSans', sans-serif;
  font-size: 32px; font-weight: 900; line-height: 1; letter-spacing: -.03em;
}
.bd-score-meta { flex: 1; }
.bd-score-label { font-size: 12px; font-weight: 700; color: var(--gray-500); text-transform: uppercase; letter-spacing: .06em; margin-bottom: 5px; }
.bd-score-status { font-size: 16px; font-weight: 800; }
.bd-score-bar-wrap { margin-top: 8px; height: 6px; background: var(--gray-100); border-radius: 999px; overflow: hidden; }
.bd-score-bar { height: 100%; border-radius: 999px; transition: width .6s cubic-bezier(.22,1,.36,1); }
.bd-score-breakdown { font-size: 11.5px; color: var(--gray-500); margin-top: 6px; }

/* Section heading */
.bd-section-label {
  font-size: 10.5px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
  color: var(--gray-400); margin-bottom: 10px;
}

/* \u2500\u2500 KM TIMELINE (SIGNATURE) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.bd-timeline-wrap {
  background: var(--gray-900); border-radius: var(--r-lg);
  padding: 18px 18px 14px; overflow: hidden;
}
.bd-timeline-label {
  font-size: 10px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
  color: var(--gray-400); margin-bottom: 14px;
}
.bd-timeline-track-wrap {
  position: relative;
  padding-bottom: 52px;
}
.bd-timeline-axis {
  position: relative; height: 4px;
  background: var(--gray-700); border-radius: 2px;
  margin: 0 0 0 0;
}
.bd-timeline-progress {
  position: absolute; left: 0; top: 0; bottom: 0;
  background: var(--pink-500); border-radius: 2px;
  width: 0; transition: width .5s;
}
.bd-timeline-now {
  position: absolute; top: -4px; width: 12px; height: 12px;
  background: var(--pink-500); border: 2.5px solid var(--gray-900);
  border-radius: 50%; transform: translateX(-50%);
  box-shadow: 0 0 0 3px rgba(235,47,150,.3);
  left: 0;
}
.bd-timeline-pin {
  position: absolute; top: -5px;
  transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center;
  cursor: default;
}
.bd-timeline-pin-dot {
  width: 10px; height: 10px; border-radius: 50%;
  border: 2px solid var(--gray-900);
  flex-shrink: 0;
}
.bd-timeline-pin-line {
  width: 1px; background: currentColor; opacity: .3;
  flex-shrink: 0;
}
.bd-timeline-pin-tag {
  font-size: 9px; font-weight: 800; white-space: nowrap;
  padding: 2px 5px; border-radius: 4px;
  background: rgba(255,255,255,.08);
  max-width: 72px; overflow: hidden; text-overflow: ellipsis;
  text-align: center;
}
.bd-timeline-ticks {
  position: relative; height: 18px; margin-top: 6px;
}
.bd-timeline-tick {
  position: absolute; transform: translateX(-50%);
  font-size: 9.5px; font-weight: 700; color: var(--gray-500);
  white-space: nowrap;
}

/* Pin states */
.pin-overdue  .bd-timeline-pin-dot { background: var(--red-500); }
.pin-overdue  .bd-timeline-pin-tag { color: var(--red-500); }
.pin-overdue  .bd-timeline-pin-line { background: var(--red-500); }
.pin-warn     .bd-timeline-pin-dot { background: var(--amber-400); }
.pin-warn     .bd-timeline-pin-tag { color: var(--amber-400); }
.pin-warn     .bd-timeline-pin-line { background: var(--amber-400); }
.pin-ok       .bd-timeline-pin-dot { background: var(--green-400); }
.pin-ok       .bd-timeline-pin-tag { color: var(--green-400); }
.pin-ok       .bd-timeline-pin-line { background: var(--green-400); }

/* \u2500\u2500 ITEM LIST \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.bd-items { display: flex; flex-direction: column; gap: 8px; }
.bd-item {
  display: flex; align-items: center; gap: 12px;
  padding: 13px 14px; border-radius: var(--r-md);
  border: 1.5px solid var(--gray-100); background: var(--white);
  transition: border-color .15s, box-shadow .15s;
}
.bd-item:hover { border-color: var(--gray-200); box-shadow: var(--shadow-s); }
.bd-item.is-overdue { background: var(--red-50); border-color: var(--red-100); }
.bd-item.is-warn { background: var(--amber-50); border-color: var(--amber-100); }
.bd-item.is-ok { background: var(--green-50); border-color: var(--green-100); }

.bd-item-icon {
  width: 36px; height: 36px; border-radius: var(--r-sm); flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.bd-item.is-overdue .bd-item-icon { background: var(--red-100); color: var(--red-500); }
.bd-item.is-warn    .bd-item-icon { background: var(--amber-100); color: var(--amber-500); }
.bd-item.is-ok      .bd-item-icon { background: var(--green-100); color: var(--green-500); }

.bd-item-body { flex: 1; min-width: 0; }
.bd-item-name { font-size: 13px; font-weight: 800; color: var(--gray-900); margin-bottom: 3px; }
.bd-item-interval { font-size: 11px; color: var(--gray-500); margin-bottom: 7px; }

.bd-item-bar-wrap { height: 5px; background: var(--gray-100); border-radius: 999px; overflow: hidden; }
.bd-item-bar { height: 100%; border-radius: 999px; transition: width .6s cubic-bezier(.22,1,.36,1); }
.bd-item.is-overdue .bd-item-bar { background: var(--red-500); }
.bd-item.is-warn    .bd-item-bar { background: var(--amber-500); }
.bd-item.is-ok      .bd-item-bar { background: var(--green-500); }

.bd-item-meta { flex-shrink: 0; text-align: right; }
.bd-item-remaining { font-size: 14px; font-weight: 900; letter-spacing: -.01em; line-height: 1.1; }
.bd-item.is-overdue .bd-item-remaining { color: var(--red-500); }
.bd-item.is-warn    .bd-item-remaining { color: var(--amber-500); }
.bd-item.is-ok      .bd-item-remaining { color: var(--green-500); }
.bd-item-next-km { font-size: 10.5px; color: var(--gray-500); margin-top: 2px; }

/* EV badge */
.bd-ev-badge {
  display: inline-flex; align-items: center; gap: 4px;
  font-size: 10.5px; font-weight: 800; color: #1D4ED8;
  background: var(--blue-50); border: 1px solid #BFDBFE;
  border-radius: 999px; padding: 2px 8px; margin-bottom: 6px;
}

/* \u2500\u2500 CTA STRIP \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.bd-cta-strip {
  margin-top: 24px; padding: 18px 20px;
  background: var(--white); border-radius: var(--r-lg);
  box-shadow: var(--shadow-s);
  display: flex; gap: 12px; flex-wrap: wrap; align-items: center;
}
.bd-cta-label { font-size: 13px; font-weight: 700; color: var(--gray-700); flex: 1; min-width: 180px; }
.bd-cta-label span { color: var(--pink-500); }
.cta-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 9px 16px; border-radius: var(--r-md);
  font-family: inherit; font-size: 12.5px; font-weight: 800;
  text-decoration: none; transition: all .15s; white-space: nowrap; cursor: pointer;
  border: 1.5px solid transparent;
}
.cta-btn-outline {
  color: var(--pink-500); background: var(--pink-50); border-color: var(--pink-100);
}
.cta-btn-outline:hover { background: var(--pink-100); border-color: var(--pink-400); }
.cta-btn-solid {
  color: var(--white); background: var(--pink-500); border-color: var(--pink-500);
  box-shadow: 0 2px 8px rgba(235,47,150,.25);
}
.cta-btn-solid:hover { background: var(--pink-600); border-color: var(--pink-600); }

/* \u2500\u2500 TOAST \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.toast {
  position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%) translateY(20px);
  background: var(--gray-900); color: var(--white);
  padding: 10px 20px; border-radius: 999px;
  font-size: 13px; font-weight: 700; white-space: nowrap;
  opacity: 0; pointer-events: none; transition: all .25s; z-index: 999;
}
.toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

/* \u2500\u2500 RESPONSIVE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@media (max-width: 600px) {
  .bd-page { padding: 0; }
  .bd-wrap { padding: 20px 12px 60px; }
  .bd-score-row { flex-direction: column; align-items: flex-start; gap: 8px; }
  .bd-cta-strip { flex-direction: column; }
}

/* Animations */
@keyframes fade-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
.bd-results.show { animation: fade-in .3s ease; }
@keyframes slide-up { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }

/* \u2500\u2500 BOOKING FLOW \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.bk-section {
  display: none; margin-top: 24px;
  background: var(--white); border-radius: var(--r-xl);
  box-shadow: var(--shadow-m); overflow: hidden;
}
.bk-section.show { display: block; animation: slide-up .35s ease; }

.bk-header {
  padding: 20px 24px 16px;
  border-bottom: 1px solid var(--gray-100);
  display: flex; align-items: center; gap: 14px;
}
.bk-header-text { flex: 1; }
.bk-header-title { font-size: 16px; font-weight: 800; color: var(--gray-900); }
.bk-header-sub { font-size: 12px; color: var(--gray-500); margin-top: 2px; }

/* Step indicators */
.bk-steps { display: flex; align-items: center; gap: 0; flex-shrink: 0; }
.bk-step-dot {
  width: 28px; height: 28px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 800; flex-shrink: 0;
  background: var(--gray-100); color: var(--gray-400);
  border: 2px solid var(--gray-200); transition: all .2s;
}
.bk-step-dot.active { background: var(--pink-500); color: var(--white); border-color: var(--pink-500); }
.bk-step-dot.done { background: var(--green-50); color: var(--green-500); border-color: var(--green-100); }
.bk-step-line { width: 20px; height: 2px; background: var(--gray-200); flex-shrink: 0; }
.bk-step-line.done { background: var(--green-200, #bbf7d0); }

/* Step panels */
.bk-panel { display: none; padding: 24px; }
.bk-panel.active { display: block; }
.bk-panel-title { font-size: 13px; font-weight: 800; color: var(--gray-700); margin-bottom: 16px; }

/* Step 1: Service checkboxes */
.bk-service-grid { display: flex; flex-direction: column; gap: 8px; }
.bk-service-item {
  display: flex; align-items: center; gap: 12px;
  padding: 12px 14px; border-radius: var(--r-md);
  border: 1.5px solid var(--gray-100); background: var(--white);
  cursor: pointer; transition: all .15s; user-select: none;
}
.bk-service-item:hover { border-color: var(--gray-200); }
.bk-service-item.checked { border-color: var(--pink-400); background: var(--pink-50); }
.bk-service-item.is-urgent { border-color: var(--red-100); background: var(--red-50); }
.bk-service-item.is-urgent.checked { border-color: var(--red-500); background: var(--red-50); }
.bk-service-check {
  width: 20px; height: 20px; border-radius: 6px; flex-shrink: 0;
  border: 2px solid var(--gray-300); background: var(--white);
  display: flex; align-items: center; justify-content: center;
  transition: all .15s;
}
.bk-service-item.checked .bk-service-check { background: var(--pink-500); border-color: var(--pink-500); }
.bk-service-item.is-urgent.checked .bk-service-check { background: var(--red-500); border-color: var(--red-500); }
.bk-service-name { flex: 1; font-size: 13px; font-weight: 700; color: var(--gray-900); }
.bk-service-badge {
  font-size: 10px; font-weight: 800; padding: 2px 7px; border-radius: 999px; flex-shrink: 0;
}
.badge-urgent { background: var(--red-100); color: var(--red-500); }
.badge-soon { background: var(--amber-100); color: var(--amber-500); }
.badge-ok { background: var(--green-100); color: var(--green-500); }

/* Step 2: Garage */
.bk-city-tabs { display: flex; gap: 8px; margin-bottom: 16px; }
.bk-city-tab {
  padding: 7px 16px; border-radius: 999px;
  border: 1.5px solid var(--gray-200); background: var(--white);
  font-size: 12px; font-weight: 700; color: var(--gray-600);
  cursor: pointer; transition: all .15s;
}
.bk-city-tab.active { background: var(--gray-900); color: var(--white); border-color: var(--gray-900); }

.bk-garage-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
@media (max-width: 600px) { .bk-garage-grid { grid-template-columns: 1fr; } }

.bk-garage-card {
  padding: 14px; border-radius: var(--r-md);
  border: 1.5px solid var(--gray-100); background: var(--white);
  cursor: pointer; transition: all .15s;
}
.bk-garage-card:hover { border-color: var(--gray-300); box-shadow: var(--shadow-s); }
.bk-garage-card.selected { border-color: var(--pink-500); background: var(--pink-50); }
.bk-garage-type {
  display: inline-flex; align-items: center; gap: 4px;
  font-size: 9.5px; font-weight: 800; padding: 2px 7px; border-radius: 5px;
  margin-bottom: 7px;
}
.bk-garage-type.official { background: var(--blue-50); color: var(--blue-500); }
.bk-garage-type.authorized { background: var(--green-50); color: var(--green-500); }
.bk-garage-name { font-size: 13px; font-weight: 800; color: var(--gray-900); line-height: 1.3; margin-bottom: 5px; }
.bk-garage-meta { font-size: 11px; color: var(--gray-500); line-height: 1.6; }
.bk-garage-rating { display: inline-flex; align-items: center; gap: 3px; color: var(--amber-500); font-weight: 800; }
.bk-garage-momo {
  display: inline-flex; align-items: center; gap: 3px;
  font-size: 10px; font-weight: 700; color: var(--pink-500);
  background: var(--pink-50); border: 1px solid var(--pink-100);
  border-radius: 4px; padding: 1px 5px; margin-left: 4px;
}

/* Step 3: Booking form */
.bk-dates { display: flex; gap: 7px; flex-wrap: wrap; margin-bottom: 18px; }
.bk-date-btn {
  padding: 9px 14px; border-radius: var(--r-md);
  border: 1.5px solid var(--gray-200); background: var(--white);
  cursor: pointer; text-align: center; transition: all .15s; min-width: 72px;
}
.bk-date-btn:hover { border-color: var(--gray-300); }
.bk-date-btn.active { border-color: var(--pink-500); background: var(--pink-50); }
.bk-date-dow { font-size: 10px; font-weight: 700; color: var(--gray-500); }
.bk-date-day { font-size: 15px; font-weight: 900; color: var(--gray-900); line-height: 1; }
.bk-date-btn.active .bk-date-dow,
.bk-date-btn.active .bk-date-day { color: var(--pink-500); }

.bk-slots { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px; }
.bk-slot {
  padding: 8px 16px; border-radius: var(--r-md);
  border: 1.5px solid var(--gray-200); background: var(--white);
  font-size: 13px; font-weight: 700; color: var(--gray-700);
  cursor: pointer; transition: all .15s;
}
.bk-slot:hover { border-color: var(--gray-300); }
.bk-slot.active { border-color: var(--pink-500); background: var(--pink-50); color: var(--pink-500); }
.bk-slot.full { opacity: .4; cursor: not-allowed; text-decoration: line-through; }

.bk-fields { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px; }
@media (max-width: 600px) { .bk-fields { grid-template-columns: 1fr; } }
.bk-field label { display: block; font-size: 11px; font-weight: 700; color: var(--gray-500); text-transform: uppercase; letter-spacing: .04em; margin-bottom: 6px; }
.bk-field input {
  width: 100%; padding: 10px 12px; border: 1.5px solid var(--gray-200); border-radius: var(--r-md);
  font-family: inherit; font-size: 13px; font-weight: 600; color: var(--gray-900);
  background: var(--white); transition: border-color .15s;
}
.bk-field input:focus { outline: none; border-color: var(--pink-500); }

.bk-summary-box {
  padding: 14px 16px; background: var(--gray-50); border-radius: var(--r-md);
  border: 1px solid var(--gray-100); margin-bottom: 20px;
  font-size: 12px; color: var(--gray-600); line-height: 1.8;
}
.bk-summary-box strong { color: var(--gray-900); font-weight: 800; }

/* Nav buttons */
.bk-nav { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding-top: 4px; }
.btn-back-step {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 10px 16px; border-radius: var(--r-md);
  border: 1.5px solid var(--gray-200); background: var(--white);
  font-family: inherit; font-size: 13px; font-weight: 700; color: var(--gray-600);
  cursor: pointer; transition: all .15s;
}
.btn-back-step:hover { border-color: var(--gray-300); color: var(--gray-900); }
.btn-next-step {
  flex: 1; padding: 12px 20px; border-radius: var(--r-md);
  background: var(--pink-500); color: var(--white); border: none;
  font-family: inherit; font-size: 14px; font-weight: 800;
  cursor: pointer; transition: all .15s;
  display: flex; align-items: center; justify-content: center; gap: 7px;
  box-shadow: 0 2px 8px rgba(235,47,150,.25);
}
.btn-next-step:hover { background: var(--pink-600); }
.btn-next-step:disabled { opacity: .45; cursor: not-allowed; box-shadow: none; }

/* Confirmation screen */
.bk-confirm {
  display: none; padding: 36px 24px; text-align: center;
  flex-direction: column; align-items: center; gap: 14px;
}
.bk-confirm.show { display: flex; animation: slide-up .35s ease; }
.bk-confirm-icon {
  width: 64px; height: 64px; border-radius: 50%;
  background: var(--green-50); display: flex; align-items: center; justify-content: center;
  color: var(--green-500);
}
.bk-confirm-title { font-size: 20px; font-weight: 900; color: var(--gray-900); }
.bk-confirm-sub { font-size: 14px; color: var(--gray-600); line-height: 1.6; max-width: 360px; }
.bk-confirm-detail {
  background: var(--gray-50); border: 1px solid var(--gray-100); border-radius: var(--r-lg);
  padding: 16px 20px; text-align: left; width: 100%; max-width: 400px;
  font-size: 13px; line-height: 2; color: var(--gray-700);
}
.bk-confirm-detail strong { color: var(--gray-900); font-weight: 800; }

</style>
`;
  return renderTemplate`${renderComponent($$result, "VehicleHub", $$VehicleHub, { "title": "L\u1ECBch B\u1EA3o D\u01B0\u1EE1ng Xe - Nh\u1EAFc \u0110\u1ED5i D\u1EA7u, Bugi, \u0110ai Cam | MoMo", "description": "C\xF4ng c\u1EE5 l\u1EADp l\u1ECBch b\u1EA3o d\u01B0\u1EE1ng xe theo km: d\u1EA7u m\xE1y, bugi, l\u1ECDc gi\xF3, \u0111ai cam, m\xE1 phanh, l\u1ED1p. H\u1ED7 tr\u1EE3 xe m\xE1y, \xF4 t\xF4 x\u0103ng v\xE0 VinFast EV.", "theme": "automotive" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", "  ", `<main class="bd-page"> <!-- Hero --> <section class="bd-hero-section"> <div class="bd-hero-inner"> <!-- Left: copy --> <div class="bd-hero-text"> <div class="bd-hero-eyebrow">Ti\u1EC7n \xEDch \xB7 B\u1EA3o d\u01B0\u1EE1ng xe</div> <h1 class="bd-hero-title">Bi\u1EBFt xe c\u1EA7n g\xEC,<br><em>tr\u01B0\u1EDBc khi xe c\u1EA7n s\u1EEDa.</em></h1> <p class="bd-hero-sub">B\u1ECF s\xF3t m\u1ED9t l\u1EA7n \u0111\u1ED5i d\u1EA7u c\xF3 th\u1EC3 d\u1EABn \u0111\u1EBFn h\u1ECFng \u0111\u1ED9ng c\u01A1 t\u1ED1n 5-15 tri\u1EC7u. Nh\u1EADp xe v\xE0 s\u1ED1 km \u0111\u1EC3 xem ngay h\u1EA1ng m\u1EE5c n\xE0o s\u1EAFp \u0111\u1EBFn h\u1EA1n.</p> <div class="bd-hero-stats"> <div class="bd-hero-stat"> <div class="bd-hero-stat-num">13</div> <div class="bd-hero-stat-label">h\xE3ng xe h\u1ED7 tr\u1EE3</div> </div> <div class="bd-hero-stat"> <div class="bd-hero-stat-num">20+</div> <div class="bd-hero-stat-label">h\u1EA1ng m\u1EE5c b\u1EA3o d\u01B0\u1EE1ng</div> </div> <div class="bd-hero-stat"> <div class="bd-hero-stat-num">50+</div> <div class="bd-hero-stat-label">d\xF2ng xe ph\u1ED5 bi\u1EBFn</div> </div> </div> </div> <!-- Right: mini form card --> <div class="hf-card"> <div class="hf-header"> <span class="hf-header-label" id="hf-header-label">Ch\u1ECDn lo\u1EA1i xe</span> <div class="hf-step-dots"> <div class="hf-dot active" id="hf-d1"></div> <div class="hf-dot" id="hf-d2"></div> <div class="hf-dot" id="hf-d3"></div> </div> </div> <div class="hf-body"> <!-- Step 1: type + brand + model --> <div id="hf-step1"> <div class="hf-type-row"> <button class="hf-type-pill active" id="hf-pill-xemay" onclick="hfSelectType('xemay')"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2H5z"></path><circle cx="14" cy="17" r="2"></circle><circle cx="5" cy="17" r="2"></circle></svg>
Xe m\xE1y
</button> <button class="hf-type-pill" id="hf-pill-oto" onclick="hfSelectType('oto')"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
\xD4 t\xF4
</button> </div> <div class="hf-select-row"> <select class="hf-select" id="hf-brand" onchange="hfOnBrandChange()"> <option value="">Ch\u1ECDn h\xE3ng</option> </select> <select class="hf-select" id="hf-model" onchange="hfOnModelChange()" disabled> <option value="">Ch\u1ECDn model</option> </select> </div> <button class="hf-cta" id="hf-btn1" onclick="hfGoStep2()" disabled>
Ti\u1EBFp theo - Nh\u1EADp s\u1ED1 km
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg> </button> </div> <!-- Step 2: km input --> <div id="hf-step2" style="display:none"> <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,.4);margin-bottom:12px;" id="hf-step2-car"></div> <div class="hf-km-row"> <input class="hf-km-input" type="number" id="hf-km" placeholder="Nh\u1EADp s\u1ED1 km \u0111\u1ED3ng h\u1ED3" min="0" max="999999" oninput="hfOnKmInput()"> <span class="hf-km-unit">km</span> </div> <div class="hf-km-chips"> <button class="hf-km-chip" onclick="hfSetKm(5000)">5.000</button> <button class="hf-km-chip" onclick="hfSetKm(10000)">10.000</button> <button class="hf-km-chip" onclick="hfSetKm(20000)">20.000</button> <button class="hf-km-chip" onclick="hfSetKm(35000)">35.000</button> <button class="hf-km-chip" onclick="hfSetKm(50000)">50.000</button> </div> <button class="hf-cta" id="hf-btn2" onclick="hfShowResult()" disabled>
Xem l\u1ECBch b\u1EA3o d\u01B0\u1EE1ng
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg> </button> </div> <!-- Result preview --> <div id="hf-result" class="hf-result"> <div class="hf-result-car" id="hf-result-car"> <span id="hf-result-car-label"></span> <button onclick="hfReset()">\u0110\u1ED5i xe</button> </div> <div class="hf-result-km"> <div class="hf-result-km-num" id="hf-result-km-num">0</div> <div class="hf-result-km-unit">km</div> </div> <div class="hf-result-items" id="hf-result-items"></div> <button class="hf-result-cta" onclick="hfScrollToTool()">
Xem \u0111\u1EA7y \u0111\u1EE7 + \u0111\u1EB7t l\u1ECBch garage
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg> </button> </div> </div> </div> </div> </section> <div class="bd-wrap" id="bd-tool-anchor"> <!-- Tool --> <div class="bd-tool"> <!-- Form panel --> <div class="bd-form-panel"> <div class="bd-form-header"> <div class="bd-form-title">Th\xF4ng tin xe c\u1EE7a b\u1EA1n</div> <div class="bd-form-sub">Ch\u1ECDn h\xE3ng, model v\xE0 nh\u1EADp s\u1ED1 km \u0111\u1ED3ng h\u1ED3 hi\u1EC7n t\u1EA1i</div> </div> <div class="bd-form-body"> <!-- Vehicle type --> <div class="bd-field"> <div class="bd-label">Lo\u1EA1i xe</div> <div class="type-pills"> <button class="type-pill active" id="pill-xemay" onclick="selectType('xemay')"> <div class="type-pill-icon"> <svg viewBox="0 0 60 36" width="44" height="26" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="10" cy="28" r="7" stroke="currentColor" stroke-width="2.5"></circle> <circle cx="50" cy="28" r="7" stroke="currentColor" stroke-width="2.5"></circle> <path d="M17 28 L28 14 L38 14 L46 28" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" fill="none"></path> <path d="M28 14 L24 8 L38 8 L40 14" stroke="currentColor" stroke-width="2" fill="none"></path> <line x1="30" y1="14" x2="30" y2="22" stroke="currentColor" stroke-width="2"></line> </svg> </div> <span class="type-pill-label">Xe m\xE1y</span> </button> <button class="type-pill" id="pill-oto" onclick="selectType('oto')"> <div class="type-pill-icon"> <svg viewBox="0 0 72 36" width="48" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="6" y="16" width="60" height="16" rx="4" stroke="currentColor" stroke-width="2.5"></rect> <path d="M14 16 L20 6 L52 6 L58 16" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"></path> <circle cx="18" cy="32" r="5" stroke="currentColor" stroke-width="2.5"></circle> <circle cx="54" cy="32" r="5" stroke="currentColor" stroke-width="2.5"></circle> </svg> </div> <span class="type-pill-label">\xD4 t\xF4</span> </button> </div> </div> <!-- Brand --> <div class="bd-field"> <label class="bd-label" for="sel-brand">H\xE3ng xe</label> <select class="bd-select" id="sel-brand" onchange="onBrandChange()"> <option value="">-- Ch\u1ECDn h\xE3ng xe --</option> </select> </div> <!-- Model --> <div class="bd-field"> <label class="bd-label" for="sel-model">Model</label> <select class="bd-select" id="sel-model" disabled onchange="onModelChange()"> <option value="">-- Ch\u1ECDn model --</option> </select> </div> <!-- EV note --> <div class="ev-note" id="ev-note"> <strong>Xe \u0111i\u1EC7n VinFast</strong> - L\u1ECBch b\u1EA3o d\u01B0\u1EE1ng kh\xF4ng bao g\u1ED3m thay d\u1EA7u m\xE1y. C\xE1c h\u1EA1ng m\u1EE5c \u0111\u01B0\u1EE3c t\xEDnh theo chu k\u1EF3 ri\xEAng cho EV.
</div> <!-- Year --> <div class="bd-field"> <label class="bd-label" for="sel-year">N\u0103m s\u1EA3n xu\u1EA5t</label> <select class="bd-select" id="sel-year"> <option value="">-- Ch\u1ECDn n\u0103m --</option> </select> </div> <!-- KM --> <div class="bd-field"> <div class="bd-label">S\u1ED1 km hi\u1EC7n t\u1EA1i (\u0111\u1ED3ng h\u1ED3)</div> <div class="km-input-row"> <input class="km-input" id="km-input" type="text" inputmode="numeric" placeholder="VD: 24.500" oninput="onKmInput(this)" onkeydown="if(event.key==='Enter') doCheck()"> <span class="km-unit">km</span> </div> <div class="km-chips" id="km-chips"> <button class="km-chip" onclick="setKm(5000)">5.000</button> <button class="km-chip" onclick="setKm(15000)">15.000</button> <button class="km-chip" onclick="setKm(30000)">30.000</button> <button class="km-chip" onclick="setKm(60000)">60.000</button> <button class="km-chip" onclick="setKm(100000)">100.000</button> </div> </div> </div><!-- /form-body --> <div class="bd-submit"> <button class="btn-check" id="btn-check" onclick="doCheck()" disabled> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
Xem l\u1ECBch b\u1EA3o d\u01B0\u1EE1ng
</button> </div> </div><!-- /form-panel --> <!-- Result panel --> <div class="bd-result-panel"> <!-- Empty state --> <div class="bd-empty" id="bd-empty"> <div class="bd-empty-icon"> <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="36" cy="36" r="32" stroke="#C8C3CC" stroke-width="2" stroke-dasharray="6 4"></circle> <path d="M24 44 L24 32 Q24 26 30 26 L42 26 Q48 26 48 32 L48 44" stroke="#C8C3CC" stroke-width="2.5" stroke-linecap="round" fill="none"></path> <circle cx="28" cy="46" r="4" stroke="#C8C3CC" stroke-width="2.5"></circle> <circle cx="44" cy="46" r="4" stroke="#C8C3CC" stroke-width="2.5"></circle> <line x1="32" y1="46" x2="40" y2="46" stroke="#C8C3CC" stroke-width="2.5"></line> <path d="M34 26 L34 20 L38 20 L38 26" stroke="#C8C3CC" stroke-width="2"></path> <circle cx="47" cy="30" r="2" fill="#C8C3CC"></circle> </svg> </div> <div class="bd-empty-title">Nh\u1EADp th\xF4ng tin xe \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u</div> <div class="bd-empty-sub">Ch\u1ECDn h\xE3ng, model v\xE0 s\u1ED1 km - h\u1EC7 th\u1ED1ng t\xEDnh ngay chu k\u1EF3 b\u1EA3o d\u01B0\u1EE1ng cho t\u1EEBng h\u1EA1ng m\u1EE5c.</div> </div> <!-- Results --> <div class="bd-results" id="bd-results"> <!-- Score --> <div> <div class="bd-section-label">T\xECnh tr\u1EA1ng t\u1ED5ng th\u1EC3</div> <div class="bd-score-row"> <div> <div class="bd-score-num" id="score-num">--</div> <div style="font-size:10px;color:var(--gray-500);font-weight:700;margin-top:2px">/100</div> </div> <div class="bd-score-meta"> <div class="bd-score-label">Ch\u1EC9 s\u1ED1 s\u1EE9c kh\u1ECFe xe</div> <div class="bd-score-status" id="score-status">--</div> <div class="bd-score-bar-wrap"> <div class="bd-score-bar" id="score-bar" style="width:0%"></div> </div> <div class="bd-score-breakdown" id="score-breakdown"></div> </div> </div> </div> <!-- Timeline --> <div> <div class="bd-section-label">L\u1ECBch b\u1EA3o d\u01B0\u1EE1ng theo km</div> <div class="bd-timeline-wrap"> <div class="bd-timeline-label" id="tl-label">Ti\u1EBFp theo trong 20.000 km t\u1EDBi</div> <div class="bd-timeline-track-wrap" id="tl-wrap"> <div class="bd-timeline-axis" id="tl-axis"> <div class="bd-timeline-progress" id="tl-progress"></div> <div class="bd-timeline-now" id="tl-now"></div> <!-- pins injected by JS --> </div> <div class="bd-timeline-ticks" id="tl-ticks"></div> </div> </div> </div> <!-- Items --> <div> <div class="bd-section-label" id="items-label">H\u1EA1ng m\u1EE5c b\u1EA3o d\u01B0\u1EE1ng</div> <div class="bd-items" id="bd-items"></div> </div> </div><!-- /results --> </div><!-- /result-panel --> </div><!-- /tool --> <!-- Booking section --> <div class="bk-section" id="bk-section"> <!-- Header + step dots --> <div class="bk-header"> <div class="bk-header-text"> <div class="bk-header-title">\u0110\u1EB7t l\u1ECBch b\u1EA3o d\u01B0\u1EE1ng</div> <div class="bk-header-sub" id="bk-header-sub">Ch\u1ECDn d\u1ECBch v\u1EE5 \u2192 T\xECm garage \u2192 X\xE1c nh\u1EADn l\u1ECBch h\u1EB9n</div> </div> <div class="bk-steps"> <div class="bk-step-dot active" id="bk-dot-1">1</div> <div class="bk-step-line" id="bk-line-1"></div> <div class="bk-step-dot" id="bk-dot-2">2</div> <div class="bk-step-line" id="bk-line-2"></div> <div class="bk-step-dot" id="bk-dot-3">3</div> </div> </div> <!-- Confirmation screen (hidden until step 4) --> <div class="bk-confirm" id="bk-confirm"> <div class="bk-confirm-icon"> <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> </div> <div class="bk-confirm-title">\u0110\u1EB7t l\u1ECBch th\xE0nh c\xF4ng!</div> <div class="bk-confirm-sub">MoMo s\u1EBD nh\u1EAFc b\u1EA1n tr\u01B0\u1EDBc 1 ng\xE0y qua th\xF4ng b\xE1o. Garage s\u1EBD li\xEAn h\u1EC7 x\xE1c nh\u1EADn l\u1ECBch h\u1EB9n trong v\xF2ng 2 gi\u1EDD.</div> <div class="bk-confirm-detail" id="bk-confirm-detail"></div> <button class="btn-next-step" style="max-width:280px" onclick="resetBooking()">
\u0110\u1EB7t l\u1ECBch kh\xE1c
</button> </div> <!-- Step 1: Ch\u1ECDn d\u1ECBch v\u1EE5 --> <div class="bk-panel active" id="bk-panel-1"> <div class="bk-panel-title">Ch\u1ECDn d\u1ECBch v\u1EE5 c\u1EA7n th\u1EF1c hi\u1EC7n</div> <div class="bk-service-grid" id="bk-services"></div> <div class="bk-nav" style="margin-top:16px"> <div style="font-size:12px;color:var(--gray-500)" id="bk-selected-count">Ch\u1ECDn \xEDt nh\u1EA5t 1 d\u1ECBch v\u1EE5</div> <button class="btn-next-step" id="bk-btn-1" onclick="bkGoStep(2)" disabled style="flex:0;padding:11px 24px">
Ti\u1EBFp theo
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg> </button> </div> </div> <!-- Step 2: Ch\u1ECDn garage --> <div class="bk-panel" id="bk-panel-2"> <div class="bk-panel-title">Ch\u1ECDn garage g\u1EA7n b\u1EA1n</div> <div class="bk-city-tabs" id="bk-city-tabs"> <button class="bk-city-tab active" onclick="bkSelectCity('HCM')">TP. H\u1ED3 Ch\xED Minh</button> <button class="bk-city-tab" onclick="bkSelectCity('HN')">H\xE0 N\u1ED9i</button> <button class="bk-city-tab" onclick="bkSelectCity('ALL')">T\u1EA5t c\u1EA3</button> </div> <div class="bk-garage-grid" id="bk-garages"></div> <div class="bk-nav" style="margin-top:16px"> <button class="btn-back-step" onclick="bkGoStep(1)"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
Quay l\u1EA1i
</button> <button class="btn-next-step" id="bk-btn-2" onclick="bkGoStep(3)" disabled>
Ti\u1EBFp theo
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg> </button> </div> </div> <!-- Step 3: Ch\u1ECDn ng\xE0y gi\u1EDD + th\xF4ng tin --> <div class="bk-panel" id="bk-panel-3"> <div class="bk-panel-title">Ch\u1ECDn ng\xE0y &amp; gi\u1EDD</div> <div class="bk-dates" id="bk-dates"></div> <div class="bk-panel-title" style="margin-top:4px">Khung gi\u1EDD</div> <div class="bk-slots" id="bk-slots"></div> <div class="bk-panel-title">Th\xF4ng tin li\xEAn h\u1EC7</div> <div class="bk-fields"> <div class="bk-field"><label>H\u1ECD v\xE0 t\xEAn</label><input id="bk-name" type="text" placeholder="Nguy\u1EC5n V\u0103n A"></div> <div class="bk-field"><label>S\u1ED1 \u0111i\u1EC7n tho\u1EA1i</label><input id="bk-phone" type="tel" placeholder="09x xxx xxxx"></div> </div> <div class="bk-summary-box" id="bk-summary"></div> <div class="bk-nav"> <button class="btn-back-step" onclick="bkGoStep(2)"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
Quay l\u1EA1i
</button> <button class="btn-next-step" id="bk-btn-3" onclick="bkConfirm()"> <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
X\xE1c nh\u1EADn \u0111\u1EB7t l\u1ECBch
</button> </div> </div> </div><!-- /bk-section --> <!-- CTA strip --> <div class="bd-cta-strip" id="cta-strip" style="display:none"> <div class="bd-cta-label">S\u1EB5n s\xE0ng b\u1EA3o d\u01B0\u1EE1ng? <span>\u0110\u1EB7t l\u1ECBch ngay</span> t\u1EA1i garage MoMo \u0111\u1ED1i t\xE1c.</div> <button class="cta-btn cta-btn-outline" onclick="openBooking()"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
\u0110\u1EB7t l\u1ECBch b\u1EA3o d\u01B0\u1EE1ng
</button> <a class="cta-btn cta-btn-solid" href="/bao-hiem-xe-flow"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
Gia h\u1EA1n b\u1EA3o hi\u1EC3m
</a> </div> </div><!-- /bd-wrap --> <!-- MoXe Section removed - moved to vehicle-hub --> <section class="moxe-section" style="display:none"> <div class="moxe-inner"> <!-- Top card: value prop + license plate --> <div class="moxe-card"> <div class="moxe-card-left"> <div class="moxe-card-eyebrow">Trong App MoMo</div> <h2 class="moxe-card-title">L\u01B0u xe m\u1ED9t l\u1EA7n,<br>MoMo lo ph\u1EA7n c\xF2n l\u1EA1i</h2> <p class="moxe-card-sub">T\u1EA1o h\u1ED3 s\u01A1 xe trong App \u0111\u1EC3 m\u1EDF kh\xF3a tr\u1EA3i nghi\u1EC7m \u0111\u1EA7y \u0111\u1EE7: m\u1ECDi ti\u1EC7n \xEDch tr\xEAn trang n\xE0y \u0111\u01B0\u1EE3c \u0111i\u1EC1n s\u1EB5n th\xF4ng tin xe c\u1EE7a b\u1EA1n, k\xE8m c\u1EA3nh b\xE1o t\u1EF1 \u0111\u1ED9ng cho m\u1ECDi deadline.</p> <div class="moxe-features"> <div class="moxe-feat"> <div class="moxe-feat-icon"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg> </div> <div> <div class="moxe-feat-title">Qu\xE9t ph\u1EA1t ngu\u1ED9i h\xE0ng tu\u1EA7n</div> <div class="moxe-feat-sub">T\u1EF1 \u0111\u1ED9ng ki\u1EC3m tra 03:00 th\u1EE9 Hai, b\xE1o ngay khi c\xF3 vi ph\u1EA1m m\u1EDBi</div> </div> </div> <div class="moxe-feat"> <div class="moxe-feat-icon"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> </div> <div> <div class="moxe-feat-title">Nh\u1EAFc h\u1EA1n \u0111\u0103ng ki\u1EC3m &amp; TNDS</div> <div class="moxe-feat-sub">Tr\u01B0\u1EDBc 45, 30 v\xE0 7 ng\xE0y - kh\xF4ng bao gi\u1EDD qu\xEAn gia h\u1EA1n</div> </div> </div> <div class="moxe-feat"> <div class="moxe-feat-icon"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg> </div> <div> <div class="moxe-feat-title">Th\xEAm xe b\u1EB1ng OCR</div> <div class="moxe-feat-sub">Ch\u1EE5p \u0111\u0103ng k\xFD xe, th\xF4ng tin t\u1EF1 \u0111i\u1EC1n trong 5 gi\xE2y</div> </div> </div> <div class="moxe-feat"> <div class="moxe-feat-icon"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg> </div> <div> <div class="moxe-feat-title">H\u1EA1ng MoXe</div> <div class="moxe-feat-sub">T\xEDch \u0111i\u1EC3m m\u1ED7i giao d\u1ECBch, \u0111\u1ED5i voucher r\u1EEDa xe, gi\u1EA3m ph\xED b\u1EA3o hi\u1EC3m</div> </div> </div> </div> <a href="#" class="moxe-cta">T\u1EA1o h\u1ED3 s\u01A1 xe mi\u1EC5n ph\xED</a> </div> <div class="moxe-plate-wrap"> <div class="moxe-plate"> <div class="moxe-plate-strip"></div> <div class="moxe-plate-num">51F-123.45</div> </div> <div class="moxe-plate-badge"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>
H\u1EA1ng B\u1EA1c \xB7 420 \u0111i\u1EC3m
</div> </div> </div> <!-- Tier section --> <div class="moxe-tier-header"> <div class="moxe-tier-label">Ch\u01B0\u01A1ng tr\xECnh h\u1EA1ng th\xE0nh vi\xEAn</div> <div class="moxe-tier-title">H\u1EA1ng MoXe - c\xE0ng d\xF9ng, c\xE0ng c\xF3 l\u1EE3i</div> </div> <div class="moxe-tiers"> <!-- \u0110\u1ED3ng --> <div class="moxe-tier-card dong"> <div class="moxe-tier-icon">\u{1F949}</div> <div class="moxe-tier-name">MoXe \u0110\u1ED3ng</div> <div class="moxe-tier-cond"> <strong>\u0110i\u1EC1u ki\u1EC7n</strong>
Add xe v\xE0o Vehicle Hub
</div> <div class="moxe-tier-benefits"> <div class="moxe-tier-benefit">Tra ph\u1EA1t ngu\u1ED9i</div> <div class="moxe-tier-benefit">ePass t\u1EF1 \u0111\u1ED9ng n\u1EA1p</div> <div class="moxe-tier-benefit">\u0110\u0103ng ki\u1EC3m c\u01A1 b\u1EA3n</div> </div> </div> <!-- B\u1EA1c --> <div class="moxe-tier-card bac"> <div class="moxe-tier-icon">\u{1F948}</div> <div class="moxe-tier-name">MoXe B\u1EA1c</div> <div class="moxe-tier-cond"> <strong>\u0110i\u1EC1u ki\u1EC7n</strong>
D\xF9ng 3+ ti\u1EC7n \xEDch/th\xE1ng li\xEAn t\u1EE5c 3 th\xE1ng
</div> <div class="moxe-tier-benefits"> <div class="moxe-tier-benefit">T\u1EA5t c\u1EA3 quy\u1EC1n l\u1EE3i \u0110\u1ED3ng</div> <div class="moxe-tier-benefit">Gi\u1EA3m th\xEAm 5% ph\xED b\u1EA3o hi\u1EC3m</div> <div class="moxe-tier-benefit">Voucher r\u1EEDa xe h\xE0ng qu\xFD</div> </div> </div> <!-- V\xE0ng --> <div class="moxe-tier-card vang"> <div class="moxe-tier-icon">\u{1F947}</div> <div class="moxe-tier-name">MoXe V\xE0ng</div> <div class="moxe-tier-cond"> <strong>\u0110i\u1EC1u ki\u1EC7n</strong>
D\xF9ng 3+ ti\u1EC7n \xEDch/th\xE1ng \xD7 3 th\xE1ng + mua 1 s\u1EA3n ph\u1EA9m b\u1EA3o hi\u1EC3m
</div> <div class="moxe-tier-benefits"> <div class="moxe-tier-benefit">T\u1EA5t c\u1EA3 quy\u1EC1n l\u1EE3i B\u1EA1c</div> <div class="moxe-tier-benefit">Gi\u1EA3m th\xEAm 10% ph\xED b\u1EA3o hi\u1EC3m</div> <div class="moxe-tier-benefit">Mi\u1EC5n ph\xED c\u1EE9u h\u1ED9 1 l\u1EA7n/n\u0103m</div> </div> </div> <!-- B\u1EA1ch Kim --> <div class="moxe-tier-card bachkim"> <div class="moxe-tier-icon">\u{1F48E}</div> <div class="moxe-tier-name">MoXe B\u1EA1ch Kim</div> <div class="moxe-tier-cond"> <strong>\u0110i\u1EC1u ki\u1EC7n</strong>
D\xF9ng 3+ ti\u1EC7n \xEDch/th\xE1ng \xD7 3 th\xE1ng + mua VCX &amp; CTPL
</div> <div class="moxe-tier-benefits"> <div class="moxe-tier-benefit">T\u1EA5t c\u1EA3 quy\u1EC1n l\u1EE3i V\xE0ng</div> <div class="moxe-tier-benefit">Gi\u1EA3m th\xEAm 15% ph\xED b\u1EA3o hi\u1EC3m</div> <div class="moxe-tier-benefit">\u01AFu ti\xEAn h\u1ED7 tr\u1EE3 24/7</div> </div> </div> </div> </div> </section> <!-- Garage Section --> <section class="garage-section"> <div class="garage-inner"> <div class="garage-header"> <div class="garage-eyebrow">\u0110\u1ED1i t\xE1c MoMo</div> <h2 class="garage-title">T\xECm garage b\u1EA3o d\u01B0\u1EE1ng g\u1EA7n b\u1EA1n</h2> <p class="garage-sub">\u0110\u1EB7t l\u1ECBch tr\u1EF1c ti\u1EBFp qua MoMo - thanh to\xE1n kh\xF4ng ti\u1EC1n m\u1EB7t, nh\u1EADn \u0111i\u1EC3m th\u01B0\u1EDFng.</p> </div> <div class="garage-filters"> <div class="garage-filter-group"> <button class="gf-btn active" onclick="garageFilter('type','xemay',this)">Xe m\xE1y</button> <button class="gf-btn" onclick="garageFilter('type','oto',this)">\xD4 t\xF4</button> </div> <div class="garage-filter-sep"></div> <div class="garage-filter-group"> <button class="gf-btn active" onclick="garageFilter('city','HCM',this)">TP.HCM</button> <button class="gf-btn" onclick="garageFilter('city','HN',this)">H\xE0 N\u1ED9i</button> </div> </div> <div class="garage-grid" id="garage-grid"></div> </div> </section> </main>  <div class="toast" id="toast"></div> <script>
// \u2500\u2500 HERO MINI FORM \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

const HF = { type: 'xemay', brand: '', model: '', km: null };

function hfInit() {
  hfPopulateBrands();
}

function hfPopulateBrands() {
  const sel = document.getElementById('hf-brand');
  const data = VEHICLE_DATA[HF.type];
  sel.innerHTML = '<option value="">Ch\u1ECDn h\xE3ng</option>';
  data.brands.forEach(b => sel.innerHTML += \`<option value="\${b}">\${b}</option>\`);
  document.getElementById('hf-model').innerHTML = '<option value="">Ch\u1ECDn model</option>';
  document.getElementById('hf-model').disabled = true;
  HF.brand = ''; HF.model = '';
  hfCheckStep1();
}

function hfSelectType(type) {
  HF.type = type;
  document.getElementById('hf-pill-xemay').classList.toggle('active', type === 'xemay');
  document.getElementById('hf-pill-oto').classList.toggle('active', type === 'oto');
  hfPopulateBrands();
}

function hfOnBrandChange() {
  HF.brand = document.getElementById('hf-brand').value;
  HF.model = '';
  const modelSel = document.getElementById('hf-model');
  const models = (VEHICLE_DATA[HF.type].models[HF.brand] || []);
  modelSel.innerHTML = '<option value="">Ch\u1ECDn model</option>';
  models.forEach(m => modelSel.innerHTML += \`<option value="\${m}">\${m}</option>\`);
  modelSel.disabled = !HF.brand;
  hfCheckStep1();
}

function hfOnModelChange() {
  HF.model = document.getElementById('hf-model').value;
  hfCheckStep1();
}

function hfCheckStep1() {
  document.getElementById('hf-btn1').disabled = !(HF.brand && HF.model);
}

function hfGoStep2() {
  document.getElementById('hf-step1').style.display = 'none';
  document.getElementById('hf-step2').style.display = 'block';
  document.getElementById('hf-result').classList.remove('show');
  document.getElementById('hf-step2-car').textContent = \`\${HF.brand} \${HF.model}\`;
  document.getElementById('hf-header-label').textContent = 'Nh\u1EADp s\u1ED1 km \u0111\u1ED3ng h\u1ED3';
  document.getElementById('hf-d1').classList.remove('active'); document.getElementById('hf-d1').classList.add('done');
  document.getElementById('hf-d2').classList.add('active');
  document.getElementById('hf-d3').classList.remove('active', 'done');
  document.getElementById('hf-km').value = '';
  HF.km = null;
  hfCheckStep2();
}

function hfOnKmInput() {
  const v = parseInt(document.getElementById('hf-km').value);
  HF.km = isNaN(v) ? null : v;
  // sync chips
  document.querySelectorAll('.hf-km-chip').forEach(c => c.classList.remove('active'));
  hfCheckStep2();
}

function hfSetKm(val) {
  document.getElementById('hf-km').value = val;
  HF.km = val;
  document.querySelectorAll('.hf-km-chip').forEach(c => {
    c.classList.toggle('active', parseInt(c.textContent.replace(/\\./g,'')) === val);
  });
  hfCheckStep2();
}

function hfCheckStep2() {
  document.getElementById('hf-btn2').disabled = !(HF.km !== null && HF.km >= 0);
}

function hfShowResult() {
  const intervals = VEHICLE_DATA[HF.type].intervals;
  const km = HF.km;
  // compute items: show top 4 by urgency
  const items = intervals.map(iv => {
    const cyclesDone = Math.floor(km / iv.km);
    const nextAt = (cyclesDone + 1) * iv.km;
    const remaining = nextAt - km;
    const pct = remaining / iv.km;
    return { ...iv, remaining, pct };
  }).sort((a, b) => a.pct - b.pct).slice(0, 4);

  // render
  let html = '';
  items.forEach(it => {
    let cls = 'green', dotCls = 'green', statusText = '';
    if (it.remaining <= 0) {
      cls = 'red'; dotCls = 'red'; statusText = 'Qu\xE1 h\u1EA1n';
    } else if (it.pct <= 0.25) {
      cls = 'red'; dotCls = 'red'; statusText = \`C\xF2n \${it.remaining.toLocaleString('vi-VN')} km\`;
    } else if (it.pct <= 0.5) {
      cls = 'amber'; dotCls = 'amber'; statusText = \`C\xF2n \${it.remaining.toLocaleString('vi-VN')} km\`;
    } else {
      statusText = \`C\xF2n \${it.remaining.toLocaleString('vi-VN')} km\`;
    }
    const rowCls = dotCls === 'red' ? 'urgent' : dotCls === 'amber' ? 'warn-item' : '';
    html += \`<div class="hf-result-item \${rowCls}">
      <div class="hf-result-dot \${dotCls}"></div>
      <div class="hf-result-name">\${it.name}</div>
      <div class="hf-result-status \${cls}">\${statusText}</div>
    </div>\`;
  });

  document.getElementById('hf-result-items').innerHTML = html;
  document.getElementById('hf-result-car-label').textContent = \`\${HF.brand} \${HF.model}\`;
  document.getElementById('hf-result-km-num').textContent = km.toLocaleString('vi-VN');

  document.getElementById('hf-step2').style.display = 'none';
  document.getElementById('hf-result').classList.add('show');
  document.getElementById('hf-header-label').textContent = 'T\xECnh tr\u1EA1ng xe c\u1EE7a b\u1EA1n';
  document.getElementById('hf-d2').classList.remove('active'); document.getElementById('hf-d2').classList.add('done');
  document.getElementById('hf-d3').classList.add('active');
}

function hfReset() {
  document.getElementById('hf-result').classList.remove('show');
  document.getElementById('hf-step2').style.display = 'none';
  document.getElementById('hf-step1').style.display = 'block';
  document.getElementById('hf-header-label').textContent = 'Ch\u1ECDn lo\u1EA1i xe';
  document.getElementById('hf-d1').classList.add('active'); document.getElementById('hf-d1').classList.remove('done');
  document.getElementById('hf-d2').classList.remove('active', 'done');
  document.getElementById('hf-d3').classList.remove('active', 'done');
  hfPopulateBrands();
}

function hfScrollToTool() {
  // sync state to main tool then scroll
  if (HF.type !== S.type) selectType(HF.type);
  setTimeout(() => {
    const brandSel = document.getElementById('sel-brand');
    if (brandSel) { brandSel.value = HF.brand; onBrandChange(); }
    setTimeout(() => {
      const modelSel = document.getElementById('sel-model');
      if (modelSel) { modelSel.value = HF.model; onModelChange(); }
      const kmInp = document.getElementById('inp-km');
      if (kmInp) { kmInp.value = HF.km; S.km = HF.km; checkReady(); }
    }, 50);
  }, 50);
  document.getElementById('bd-tool-anchor').scrollIntoView({ behavior: 'smooth' });
}

// \u2500\u2500 DATA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

const VEHICLE_DATA = {
  xemay: {
    brands: ['Honda', 'Yamaha', 'Suzuki', 'SYM', 'Piaggio'],
    models: {
      Honda:   ['Wave Alpha 110', 'Dream 110', 'Future 125', 'Vision 110', 'Air Blade 125', 'SH 125i', 'SH 150i', 'PCX 125', 'Lead 125', 'Winner X'],
      Yamaha:  ['Sirius 110', 'Jupiter 115', 'Exciter 150', 'Exciter 155', 'NVX 155', 'Grande 125', 'Janus 125', 'Latte 125'],
      Suzuki:  ['Raider R150', 'Hayate 125', 'Avenis 125', 'Address 110'],
      SYM:     ['Star SR 125', 'Attila Elizabeth 125', 'Shark 125'],
      Piaggio: ['Vespa Sprint 125', 'Vespa Primavera 125', 'Medley 150', 'Liberty 150'],
    },
    intervals: [
      { id: 'oil',       name: 'D\u1EA7u m\xE1y',       km: 3000,  priority: 5, icon: 'oil',    note: 'M\u1ED7i 3.000 km ho\u1EB7c 3 th\xE1ng' },
      { id: 'spark',     name: 'Bugi',           km: 8000,  priority: 4, icon: 'spark',  note: 'M\u1ED7i 8.000 km' },
      { id: 'airfilter', name: 'L\u1ECDc gi\xF3',        km: 10000, priority: 3, icon: 'filter', note: 'M\u1ED7i 10.000 km ho\u1EB7c 1 n\u0103m' },
      { id: 'chain',     name: 'X\xEDch/d\xE2y \u0111ai',   km: 20000, priority: 3, icon: 'chain',  note: 'M\u1ED7i 20.000 km, b\xF4i tr\u01A1n m\u1ED7i 5.000 km' },
      { id: 'brake',     name: 'M\xE1 phanh',       km: 25000, priority: 4, icon: 'brake',  note: 'M\u1ED7i 25.000 km ho\u1EB7c khi m\xF2n' },
      { id: 'tire',      name: 'L\u1ED1p xe',         km: 35000, priority: 3, icon: 'tire',   note: 'M\u1ED7i 35.000 km ho\u1EB7c 3-4 n\u0103m' },
    ],
  },
  oto: {
    brands: ['Toyota', 'Honda', 'Hyundai', 'Kia', 'VinFast', 'Ford', 'Mazda', 'Mitsubishi'],
    models: {
      Toyota:     ['Vios 1.5', 'Camry 2.5', 'Corolla Cross 1.8', 'Fortuner 2.4', 'Innova Cross 2.0', 'Rush 1.5', 'Raize 1.0T', 'Veloz Cross'],
      Honda:      ['City 1.5', 'Civic 1.5T', 'CR-V 1.5T', 'HR-V 1.5', 'Accord 1.5T', 'BR-V 1.5'],
      Hyundai:    ['Grand i10 1.2', 'Accent 1.4', 'Elantra 1.4T', 'Tucson 2.0', 'Santa Fe 2.2', 'Creta 1.5T', 'Stargazer 1.5'],
      Kia:        ['K3 1.6', 'K5 2.0T', 'Seltos 1.4T', 'Sportage 1.6T', 'Sorento 2.2D', 'Carnival 2.2D', 'EV6'],
      VinFast:    ['VF3 EV', 'VF5 EV', 'VF6 EV', 'VF7 EV', 'VF8 EV', 'VF9 EV'],
      Ford:       ['EcoSport 1.0T', 'Territory 1.5T', 'Everest 2.0T', 'Ranger 2.0', 'Bronco Sport'],
      Mazda:      ['Mazda2 1.5', 'Mazda3 2.0', 'Mazda3 2.5T', 'Mazda CX-3 1.5', 'Mazda CX-5 2.0', 'Mazda CX-8 2.5T'],
      Mitsubishi: ['Attrage 1.2', 'Xpander 1.5', 'Outlander 2.0', 'Pajero Sport 2.4D', 'Triton 2.4D'],
    },
    intervals: [
      { id: 'oil',        name: 'D\u1EA7u m\xE1y',            km: 5000,  priority: 5, icon: 'oil',     note: 'M\u1ED7i 5.000 km ho\u1EB7c 6 th\xE1ng' },
      { id: 'oilfilter',  name: 'L\u1ECDc d\u1EA7u',            km: 10000, priority: 4, icon: 'filter',  note: 'Thay c\xF9ng l\xFAc v\u1EDBi d\u1EA7u m\xE1y m\u1ED7i 2 l\u1EA7n' },
      { id: 'airfilter',  name: 'L\u1ECDc gi\xF3 \u0111\u1ED9ng c\u01A1',    km: 20000, priority: 3, icon: 'filter',  note: 'M\u1ED7i 20.000 km ho\u1EB7c 1 n\u0103m' },
      { id: 'cabin',      name: 'L\u1ECDc gi\xF3 \u0111i\u1EC1u h\xF2a',   km: 15000, priority: 3, icon: 'ac',      note: 'M\u1ED7i 15.000 km ho\u1EB7c 1 n\u0103m' },
      { id: 'spark',      name: 'Bugi',                km: 40000, priority: 3, icon: 'spark',   note: 'M\u1ED7i 40.000 km (platinum: 80.000 km)' },
      { id: 'brake',      name: 'M\xE1 phanh tr\u01B0\u1EDBc',      km: 30000, priority: 4, icon: 'brake',   note: 'M\u1ED7i 30.000 km ho\u1EB7c khi m\xF2n' },
      { id: 'brakeback',  name: 'M\xE1 phanh sau',        km: 50000, priority: 3, icon: 'brake',   note: 'M\u1ED7i 50.000 km ho\u1EB7c khi m\xF2n' },
      { id: 'trans',      name: 'D\u1EA7u h\u1ED9p s\u1ED1',          km: 40000, priority: 3, icon: 'oil',     note: 'M\u1ED7i 40.000 km (CVT: 60.000 km)' },
      { id: 'timing',     name: '\u0110ai cam',             km: 70000, priority: 5, icon: 'belt',    note: 'M\u1ED7i 70.000 km - kh\xF4ng b\u1ECF qua!' },
      { id: 'tire',       name: 'L\u1ED1p xe',              km: 50000, priority: 3, icon: 'tire',    note: 'M\u1ED7i 50.000 km ho\u1EB7c 5 n\u0103m' },
    ],
    evIntervals: [
      { id: 'brake',     name: 'M\xE1 phanh tr\u01B0\u1EDBc',     km: 20000, priority: 4, icon: 'brake',   note: 'M\u1ED7i 20.000 km (regenerative braking k\xE9o d\xE0i tu\u1ED5i th\u1ECD)' },
      { id: 'brakeback', name: 'M\xE1 phanh sau',        km: 40000, priority: 3, icon: 'brake',   note: 'M\u1ED7i 40.000 km' },
      { id: 'cabin',     name: 'L\u1ECDc gi\xF3 \u0111i\u1EC1u h\xF2a',   km: 25000, priority: 3, icon: 'ac',      note: 'M\u1ED7i 25.000 km ho\u1EB7c 2 n\u0103m' },
      { id: 'coolant',   name: 'Dung d\u1ECBch l\xE0m m\xE1t',  km: 80000, priority: 3, icon: 'coolant', note: 'M\u1ED7i 80.000 km ho\u1EB7c 4 n\u0103m' },
      { id: 'tire',      name: 'L\u1ED1p xe',              km: 40000, priority: 3, icon: 'tire',    note: 'M\u1ED7i 40.000 km (EV n\u1EB7ng h\u01A1n, m\xF2n nhanh h\u01A1n)' },
      { id: 'battery',   name: 'Ki\u1EC3m tra pin HV',     km: null,  years: 1,   priority: 5, icon: 'battery', note: 'Ki\u1EC3m tra h\xE0ng n\u0103m t\u1EA1i trung t\xE2m VinFast' },
    ],
  },
};

const ICONS = {
  oil: \`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>\`,
  spark: \`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>\`,
  filter: \`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>\`,
  chain: \`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>\`,
  brake: \`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/></svg>\`,
  tire: \`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/></svg>\`,
  ac: \`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="3"/><path d="M6 12h.01M10 12h.01M14 12h.01M18 12h.01"/><path d="M7 18v3M17 18v3M12 18v3"/></svg>\`,
  belt: \`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="6" height="20" rx="3"/><rect x="16" y="2" width="6" height="20" rx="3"/><path d="M8 5 L16 5"/><path d="M8 19 L16 19"/></svg>\`,
  coolant: \`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6m-4 0a6 6 0 1 0 8 0"/><path d="M8 8H7a5 5 0 0 0 0 10h10a5 5 0 0 0 0-10h-1"/></svg>\`,
  battery: \`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="6" width="18" height="12" rx="2"/><line x1="23" y1="13" x2="23" y2="11"/><line x1="8" y1="12" x2="8" y2="12"/><polyline points="5 12 8 9 11 12 14 9 17 12"/></svg>\`,
};

// \u2500\u2500 STATE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

const S = {
  type: 'xemay',
  brand: '',
  model: '',
  year: '',
  km: null,
};

// \u2500\u2500 INIT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

function init() {
  populateYears();
  populateBrands();
  hfInit();
}

function populateYears() {
  const sel = document.getElementById('sel-year');
  const cur = new Date().getFullYear();
  sel.innerHTML = '<option value="">-- Ch\u1ECDn n\u0103m --</option>';
  for (let y = cur; y >= cur - 20; y--) {
    sel.innerHTML += \`<option value="\${y}">\${y}</option>\`;
  }
  sel.value = cur - 3;
  S.year = cur - 3;
}

function populateBrands() {
  const sel = document.getElementById('sel-brand');
  const data = VEHICLE_DATA[S.type];
  sel.innerHTML = '<option value="">-- Ch\u1ECDn h\xE3ng xe --</option>';
  data.brands.forEach(b => {
    sel.innerHTML += \`<option value="\${b}">\${b}</option>\`;
  });
}

function selectType(type) {
  S.type = type;
  S.brand = ''; S.model = '';
  document.getElementById('pill-xemay').classList.toggle('active', type === 'xemay');
  document.getElementById('pill-oto').classList.toggle('active', type === 'oto');
  populateBrands();
  const modelSel = document.getElementById('sel-model');
  modelSel.innerHTML = '<option value="">-- Ch\u1ECDn model --</option>';
  modelSel.disabled = true;
  document.getElementById('sel-brand').value = '';
  document.getElementById('ev-note').classList.remove('show');
  checkReady();
}

function onBrandChange() {
  S.brand = document.getElementById('sel-brand').value;
  S.model = '';
  const modelSel = document.getElementById('sel-model');
  const models = (VEHICLE_DATA[S.type].models[S.brand] || []);
  modelSel.innerHTML = '<option value="">-- Ch\u1ECDn model --</option>';
  models.forEach(m => { modelSel.innerHTML += \`<option value="\${m}">\${m}</option>\`; });
  modelSel.disabled = !S.brand;
  checkReady();
}

function onModelChange() {
  S.model = document.getElementById('sel-model').value;
  const isEV = S.type === 'oto' && S.model && S.model.includes('EV');
  document.getElementById('ev-note').classList.toggle('show', isEV);
  checkReady();
}

function onKmInput(el) {
  const raw = el.value.replace(/\\D/g, '');
  S.km = raw ? parseInt(raw) : null;
  el.value = raw ? parseInt(raw).toLocaleString('vi-VN') : '';
  // chip highlight
  document.querySelectorAll('.km-chip').forEach(c => {
    c.classList.toggle('active', parseInt(c.textContent.replace(/\\D/g,'')) === S.km);
  });
  checkReady();
}

function setKm(val) {
  S.km = val;
  document.getElementById('km-input').value = val.toLocaleString('vi-VN');
  document.querySelectorAll('.km-chip').forEach(c => {
    c.classList.toggle('active', parseInt(c.textContent.replace(/\\D/g,'')) === val);
  });
  checkReady();
}

function checkReady() {
  const ok = S.brand && S.model && S.km > 0;
  document.getElementById('btn-check').disabled = !ok;
}

// \u2500\u2500 COMPUTE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

function getIntervals() {
  const data = VEHICLE_DATA[S.type];
  const isEV = S.type === 'oto' && S.model && S.model.includes('EV');
  if (isEV && data.evIntervals) return data.evIntervals;
  return data.intervals;
}

function computeItems() {
  const intervals = getIntervals();
  const km = S.km;
  return intervals.map(item => {
    if (item.km === null) {
      // year-based (battery check)
      return {
        ...item, type: 'year',
        remaining_km: null, next_due_km: null, pct: 1,
        status: 'ok', bar_pct: 100,
        remaining_label: \`M\u1ED7i \${item.years} n\u0103m\`,
        next_label: 'Ki\u1EC3m tra theo l\u1ECBch h\xE3ng',
      };
    }
    const last_km = Math.floor(km / item.km) * item.km;
    const next_km = last_km + item.km;
    const remaining = next_km - km;
    const pct = remaining / item.km; // 0 = overdue, 1 = just serviced

    let status;
    if (pct <= 0) status = 'overdue';
    else if (pct < 0.25) status = 'warn';
    else status = 'ok';

    const bar_pct = Math.max(0, Math.min(100, Math.round(pct * 100)));

    let remaining_label;
    if (pct <= 0) {
      remaining_label = \`Qu\xE1 h\u1EA1n \${Math.abs(remaining).toLocaleString('vi-VN')} km\`;
    } else {
      remaining_label = \`C\xF2n \${remaining.toLocaleString('vi-VN')} km\`;
    }

    return {
      ...item, type: 'km',
      last_km, next_km, remaining, pct,
      status, bar_pct,
      remaining_label,
      next_label: \`\${next_km.toLocaleString('vi-VN')} km\`,
    };
  });
}

function computeScore(items) {
  let wSum = 0, wTotal = 0;
  items.forEach(item => {
    if (item.type === 'year') { wSum += 100 * item.priority; wTotal += item.priority; return; }
    let score;
    const p = item.pct;
    if (p > 0.5) score = 100;
    else if (p > 0.3) score = 85;
    else if (p > 0.1) score = 60;
    else if (p > 0) score = 35;
    else score = 0;
    wSum += score * item.priority;
    wTotal += item.priority;
  });
  return Math.round(wSum / wTotal);
}

// \u2500\u2500 RENDER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

function doCheck() {
  if (!S.brand || !S.model || !S.km) return;
  const items = computeItems();
  BK.lastComputedItems = items;
  const score = computeScore(items);
  renderScore(score, items);
  renderTimeline(items);
  renderItems(items);
  document.getElementById('bd-empty').style.display = 'none';
  document.getElementById('bd-results').classList.add('show');
  document.getElementById('cta-strip').style.display = 'flex';
  // Reset booking if re-checking
  document.getElementById('bk-section').classList.remove('show');
}

function renderScore(score, items) {
  const numEl = document.getElementById('score-num');
  const statusEl = document.getElementById('score-status');
  const barEl = document.getElementById('score-bar');
  const bkEl = document.getElementById('score-breakdown');

  numEl.textContent = score;
  numEl.style.color = score >= 80 ? 'var(--green-500)' : score >= 55 ? 'var(--amber-500)' : 'var(--red-500)';

  let statusText, barColor;
  if (score >= 80) { statusText = 'T\u1ED1t - Xe \u0111ang trong t\xECnh tr\u1EA1ng \u1ED5n'; barColor = 'var(--green-500)'; }
  else if (score >= 60) { statusText = 'C\u1EA7n theo d\xF5i - M\u1ED9t s\u1ED1 h\u1EA1ng m\u1EE5c s\u1EAFp \u0111\u1EBFn h\u1EA1n'; barColor = 'var(--amber-500)'; }
  else if (score >= 40) { statusText = 'C\u1EA7n ki\u1EC3m tra - C\xF3 h\u1EA1ng m\u1EE5c g\u1EA7n qu\xE1 h\u1EA1n'; barColor = 'var(--amber-500)'; }
  else { statusText = 'C\u1EA7n b\u1EA3o d\u01B0\u1EE1ng ngay - C\xF3 h\u1EA1ng m\u1EE5c \u0111\xE3 qu\xE1 h\u1EA1n'; barColor = 'var(--red-500)'; }

  statusEl.textContent = statusText;
  statusEl.style.color = barColor;
  barEl.style.width = score + '%';
  barEl.style.background = barColor;

  const overdues = items.filter(i => i.status === 'overdue');
  const warns = items.filter(i => i.status === 'warn');
  const parts = [];
  if (overdues.length) parts.push(\`\${overdues.length} h\u1EA1ng m\u1EE5c qu\xE1 h\u1EA1n\`);
  if (warns.length) parts.push(\`\${warns.length} h\u1EA1ng m\u1EE5c s\u1EAFp \u0111\u1EBFn h\u1EA1n\`);
  bkEl.textContent = parts.length ? parts.join(' \xB7 ') : 'T\u1EA5t c\u1EA3 h\u1EA1ng m\u1EE5c trong chu k\u1EF3 an to\xE0n';
}

function renderTimeline(items) {
  const km = S.km;
  const kmItems = items.filter(i => i.type === 'km');
  if (!kmItems.length) return;

  const RANGE = 20000;
  const maxKm = km + RANGE;

  // Build ticks: current + every 5000
  const tickStep = 5000;
  const firstTick = Math.ceil(km / tickStep) * tickStep;
  const ticks = [km];
  for (let t = firstTick; t <= maxKm; t += tickStep) ticks.push(t);

  // Sort items by next_km
  const sorted = [...kmItems].sort((a,b) => a.next_km - b.next_km);

  const axis = document.getElementById('tl-axis');
  const ticksEl = document.getElementById('tl-ticks');

  // Clear existing pins (keep progress + now)
  axis.querySelectorAll('.bd-timeline-pin').forEach(p => p.remove());

  // Render pins - alternate row heights to avoid overlap
  const pinHeights = [24, 44, 32, 56, 20, 48]; // line heights px
  sorted.forEach((item, i) => {
    if (item.next_km < km) {
      // overdue - show at left edge with negative offset indicator
      const pin = document.createElement('div');
      pin.className = 'bd-timeline-pin pin-overdue';
      pin.style.left = '0%';
      const lineH = 18;
      pin.innerHTML = \`
        <div class="bd-timeline-pin-line" style="height:\${lineH}px"></div>
        <div class="bd-timeline-pin-tag">\${item.name}</div>
      \`;
      axis.appendChild(pin);
      return;
    }
    if (item.next_km > maxKm) return; // beyond range, skip

    const leftPct = ((item.next_km - km) / RANGE * 100).toFixed(1);
    const lineH = pinHeights[i % pinHeights.length];
    const pinClass = item.status === 'warn' ? 'pin-warn' : item.status === 'overdue' ? 'pin-overdue' : 'pin-ok';

    const pin = document.createElement('div');
    pin.className = \`bd-timeline-pin \${pinClass}\`;
    pin.style.left = leftPct + '%';
    pin.style.top = '-5px';
    pin.innerHTML = \`
      <div class="bd-timeline-pin-dot"></div>
      <div class="bd-timeline-pin-line" style="height:\${lineH}px"></div>
      <div class="bd-timeline-pin-tag">\${item.name}</div>
    \`;
    axis.appendChild(pin);
  });

  // Render ticks
  ticksEl.innerHTML = '';
  ticks.forEach(t => {
    const pct = ((t - km) / RANGE * 100).toFixed(1);
    const div = document.createElement('div');
    div.className = 'bd-timeline-tick';
    div.style.left = pct + '%';
    div.textContent = t === km ? \`\${(t/1000).toFixed(0)}K km\` : \`+\${((t-km)/1000).toFixed(0)}K\`;
    ticksEl.appendChild(div);
  });

  document.getElementById('tl-label').textContent = \`Ti\u1EBFp theo trong \${RANGE.toLocaleString('vi-VN')} km t\u1EDBi \xB7 \${S.model} @ \${km.toLocaleString('vi-VN')} km\`;
}

function renderItems(items) {
  const container = document.getElementById('bd-items');
  const label = document.getElementById('items-label');

  const overdueCount = items.filter(i => i.status === 'overdue').length;
  const warnCount = items.filter(i => i.status === 'warn').length;
  const parts = [];
  if (overdueCount) parts.push(\`\${overdueCount} qu\xE1 h\u1EA1n\`);
  if (warnCount) parts.push(\`\${warnCount} s\u1EAFp \u0111\u1EBFn\`);
  label.textContent = \`H\u1EA1ng m\u1EE5c b\u1EA3o d\u01B0\u1EE1ng\${parts.length ? ' \xB7 ' + parts.join(', ') : ''}\`;

  const isEV = S.type === 'oto' && S.model && S.model.includes('EV');

  // Sort: overdue first, then warn, then ok
  const sorted = [...items].sort((a,b) => {
    const rank = { overdue: 0, warn: 1, ok: 2 };
    return (rank[a.status] ?? 2) - (rank[b.status] ?? 2);
  });

  container.innerHTML = sorted.map(item => {
    const icon = ICONS[item.icon] || ICONS.oil;
    const statusClass = \`is-\${item.status}\`;
    const yearBadge = isEV && item.type === 'year'
      ? \`<div class="bd-ev-badge"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> Xe \u0111i\u1EC7n</div>\`
      : '';
    return \`
      <div class="bd-item \${statusClass}">
        <div class="bd-item-icon">\${icon}</div>
        <div class="bd-item-body">
          \${yearBadge}
          <div class="bd-item-name">\${item.name}</div>
          <div class="bd-item-interval">\${item.note}</div>
          <div class="bd-item-bar-wrap">
            <div class="bd-item-bar" style="width:\${item.bar_pct}%"></div>
          </div>
        </div>
        <div class="bd-item-meta">
          <div class="bd-item-remaining">\${item.remaining_label.replace('C\xF2n ','').replace('Qu\xE1 h\u1EA1n ','').replace('km','').trim() || '\u2013'} <span style="font-size:10px;font-weight:700">\${item.type==='km'?'km':''}</span></div>
          <div class="bd-item-next-km">\${item.next_label}</div>
        </div>
      </div>
    \`;
  }).join('');

  // Animate bars after render
  requestAnimationFrame(() => {
    document.querySelectorAll('.bd-item-bar').forEach(bar => {
      const w = bar.style.width;
      bar.style.width = '0%';
      requestAnimationFrame(() => { bar.style.width = w; });
    });
  });
}

// \u2500\u2500 BOOKING DATA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

const GARAGES = {
  xemay: [
    { id:'hm1', name:'Honda Head Nguy\u1EC5n Th\u1ECB Th\u1EADp', type:'official', brand:'Honda', city:'HCM', district:'Qu\u1EADn 7', address:'123 Nguy\u1EC5n Th\u1ECB Th\u1EADp, Q.7', rating:4.8, wait:'2-3 ng\xE0y', momo:true },
    { id:'hm2', name:'Yamaha Town B\xECnh Th\u1EA1nh', type:'official', brand:'Yamaha', city:'HCM', district:'B\xECnh Th\u1EA1nh', address:'456 \u0110inh B\u1ED9 L\u0129nh, B\xECnh Th\u1EA1nh', rating:4.7, wait:'1-2 ng\xE0y', momo:true },
    { id:'hm3', name:'Garage Tu\u1EA5n Auto', type:'authorized', brand:'\u0110a h\xE3ng', city:'HCM', district:'Qu\u1EADn 10', address:'789 Ba Th\xE1ng Hai, Q.10', rating:4.6, wait:'Trong ng\xE0y', momo:true },
    { id:'hm4', name:'SYM Service Center G\xF2 V\u1EA5p', type:'official', brand:'SYM', city:'HCM', district:'G\xF2 V\u1EA5p', address:'100 Quang Trung, G\xF2 V\u1EA5p', rating:4.5, wait:'1-2 ng\xE0y', momo:false },
    { id:'hn1', name:'Honda Head C\u1EA7u Gi\u1EA5y', type:'official', brand:'Honda', city:'HN', district:'C\u1EA7u Gi\u1EA5y', address:'C\u1EA7u Gi\u1EA5y, H\xE0 N\u1ED9i', rating:4.8, wait:'2-3 ng\xE0y', momo:true },
    { id:'hn2', name:'Yamaha Town Ho\xE0ng Mai', type:'official', brand:'Yamaha', city:'HN', district:'Ho\xE0ng Mai', address:'Ho\xE0ng Mai, H\xE0 N\u1ED9i', rating:4.6, wait:'1-2 ng\xE0y', momo:false },
    { id:'hn3', name:'Garage \u0110\u1EE9c Anh Thanh Xu\xE2n', type:'authorized', brand:'\u0110a h\xE3ng', city:'HN', district:'Thanh Xu\xE2n', address:'Thanh Xu\xE2n, H\xE0 N\u1ED9i', rating:4.7, wait:'Trong ng\xE0y', momo:true },
  ],
  oto: [
    { id:'om1', name:'Toyota L\xFD Th\u01B0\u1EDDng Ki\u1EC7t', type:'official', brand:'Toyota', city:'HCM', district:'Qu\u1EADn 10', address:'555 L\xFD Th\u01B0\u1EDDng Ki\u1EC7t, Q.10', rating:4.8, wait:'2-3 ng\xE0y', momo:true },
    { id:'om2', name:'Honda \xD4 t\xF4 S\xE0i G\xF2n', type:'official', brand:'Honda', city:'HCM', district:'B\xECnh Th\u1EA1nh', address:'\u0110i\u1EC7n Bi\xEAn Ph\u1EE7, B\xECnh Th\u1EA1nh', rating:4.8, wait:'2-3 ng\xE0y', momo:true },
    { id:'om3', name:'Hyundai Kinh D\u01B0\u01A1ng V\u01B0\u01A1ng', type:'official', brand:'Hyundai', city:'HCM', district:'B\xECnh T\xE2n', address:'Kinh D\u01B0\u01A1ng V\u01B0\u01A1ng, B\xECnh T\xE2n', rating:4.6, wait:'1-2 ng\xE0y', momo:true },
    { id:'om4', name:'Garage Minh Trung Auto', type:'authorized', brand:'\u0110a h\xE3ng', city:'HCM', district:'Qu\u1EADn 3', address:'V\xF5 V\u0103n T\u1EA7n, Q.3', rating:4.6, wait:'Trong ng\xE0y', momo:true },
    { id:'om5', name:'VinFast Service Center Q.7', type:'official', brand:'VinFast', city:'HCM', district:'Qu\u1EADn 7', address:'Ph\xFA M\u1EF9 H\u01B0ng, Q.7', rating:4.7, wait:'1-2 ng\xE0y', momo:false },
    { id:'on1', name:'Toyota Ho\xE0ng Mai', type:'official', brand:'Toyota', city:'HN', district:'Ho\xE0ng Mai', address:'272 L\u0129nh Nam, Ho\xE0ng Mai', rating:4.7, wait:'2-3 ng\xE0y', momo:true },
    { id:'on2', name:'Kia C\u1EA7u Di\u1EC5n', type:'official', brand:'Kia', city:'HN', district:'Nam T\u1EEB Li\xEAm', address:'C\u1EA7u Di\u1EC5n, Nam T\u1EEB Li\xEAm', rating:4.6, wait:'1-2 ng\xE0y', momo:true },
    { id:'on3', name:'Auto Care \u0110\u1ED1ng \u0110a', type:'authorized', brand:'\u0110a h\xE3ng', city:'HN', district:'\u0110\u1ED1ng \u0110a', address:'L\xE1ng H\u1EA1, \u0110\u1ED1ng \u0110a', rating:4.5, wait:'Trong ng\xE0y', momo:false },
  ],
};

const TIME_SLOTS = ['08:00', '10:00', '14:00', '16:00'];

// Booking state
const BK = {
  step: 1,
  selectedServices: new Set(),
  city: 'HCM',
  garage: null,
  date: null,
  slot: null,
  lastComputedItems: [],
};

// \u2500\u2500 BOOKING FLOW \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

function openBooking() {
  const section = document.getElementById('bk-section');
  section.classList.add('show');
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  renderBkServices();
}

function renderBkServices() {
  const items = BK.lastComputedItems;
  const container = document.getElementById('bk-services');
  // Pre-select overdue + warn
  BK.selectedServices.clear();
  items.filter(i => i.type === 'km' && (i.status === 'overdue' || i.status === 'warn'))
    .forEach(i => BK.selectedServices.add(i.id));

  container.innerHTML = items.filter(i => i.type === 'km').map(item => {
    const isChecked = BK.selectedServices.has(item.id);
    const isUrgent = item.status === 'overdue';
    const badgeClass = item.status === 'overdue' ? 'badge-urgent' : item.status === 'warn' ? 'badge-soon' : 'badge-ok';
    const badgeText = item.status === 'overdue' ? 'Qu\xE1 h\u1EA1n' : item.status === 'warn' ? 'S\u1EAFp \u0111\u1EBFn' : 'C\xF2n h\u1EA1n';
    return \`
      <div class="bk-service-item \${isChecked?'checked':''} \${isUrgent?'is-urgent':''}"
           onclick="toggleService('\${item.id}', this)">
        <div class="bk-service-check">
          \${isChecked ? \`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>\` : ''}
        </div>
        <div class="bk-service-name">\${item.name}</div>
        <div class="bk-service-badge \${badgeClass}">\${badgeText}</div>
      </div>
    \`;
  }).join('');
  updateBkStep1Count();
}

function toggleService(id, el) {
  if (BK.selectedServices.has(id)) {
    BK.selectedServices.delete(id);
    el.classList.remove('checked');
    el.querySelector('.bk-service-check').innerHTML = '';
  } else {
    BK.selectedServices.add(id);
    el.classList.add('checked');
    el.querySelector('.bk-service-check').innerHTML = \`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>\`;
  }
  updateBkStep1Count();
}

function updateBkStep1Count() {
  const n = BK.selectedServices.size;
  document.getElementById('bk-selected-count').textContent = n ? \`\u0110\xE3 ch\u1ECDn \${n} d\u1ECBch v\u1EE5\` : 'Ch\u1ECDn \xEDt nh\u1EA5t 1 d\u1ECBch v\u1EE5';
  document.getElementById('bk-btn-1').disabled = n === 0;
}

function bkSelectCity(city) {
  BK.city = city;
  BK.garage = null;
  document.querySelectorAll('.bk-city-tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  renderBkGarages();
  document.getElementById('bk-btn-2').disabled = true;
}

function renderBkGarages() {
  const all = GARAGES[S.type] || GARAGES.oto;
  const filtered = BK.city === 'ALL' ? all : all.filter(g => g.city === BK.city);
  const container = document.getElementById('bk-garages');
  container.innerHTML = filtered.map(g => \`
    <div class="bk-garage-card \${BK.garage?.id === g.id ? 'selected' : ''}"
         data-id="\${g.id}" onclick="selectGarage('\${g.id}', this)">
      <div class="bk-garage-type \${g.type}">\${g.type === 'official' ? 'Ch\xEDnh h\xE3ng' : '\u1EE6y quy\u1EC1n BH'}</div>
      <div class="bk-garage-name">\${g.name}</div>
      <div class="bk-garage-meta">
        <span class="bk-garage-rating">\u2605 \${g.rating}</span>
        \${g.momo ? \`<span class="bk-garage-momo">MoMo Pay</span>\` : ''}
        <br>\${g.district} \xB7 \${g.wait}
      </div>
    </div>
  \`).join('') || '<div style="grid-column:span 2;text-align:center;padding:24px;color:var(--gray-400);font-size:13px">Kh\xF4ng c\xF3 garage \u1EDF khu v\u1EF1c n\xE0y</div>';
}

function selectGarage(id, el) {
  const all = GARAGES[S.type] || GARAGES.oto;
  BK.garage = all.find(g => g.id === id);
  document.querySelectorAll('.bk-garage-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('bk-btn-2').disabled = false;
}

function renderBkDates() {
  const container = document.getElementById('bk-dates');
  const dow = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  const dates = [];
  const today = new Date();
  for (let i = 1; i <= 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    if (d.getDay() !== 0) dates.push(d); // skip Sunday
    if (dates.length === 6) break;
  }
  if (!BK.date) BK.date = dates[0].toISOString().slice(0,10);
  container.innerHTML = dates.map(d => {
    const key = d.toISOString().slice(0,10);
    const isActive = key === BK.date;
    return \`
      <button class="bk-date-btn \${isActive?'active':''}" onclick="selectDate('\${key}', this)">
        <div class="bk-date-dow">\${dow[d.getDay()]}</div>
        <div class="bk-date-day">\${d.getDate()}/\${d.getMonth()+1}</div>
      </button>
    \`;
  }).join('');
}

function selectDate(key, el) {
  BK.date = key;
  BK.slot = null;
  document.querySelectorAll('.bk-date-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  renderBkSlots();
  updateBkSummary();
}

function renderBkSlots() {
  // Randomly mark 1 slot as full for realism
  const fullSlot = TIME_SLOTS[1];
  const container = document.getElementById('bk-slots');
  container.innerHTML = TIME_SLOTS.map(t => {
    const isFull = t === fullSlot;
    const isActive = t === BK.slot;
    return \`<button class="bk-slot \${isFull?'full':''} \${isActive?'active':''}"
      \${isFull?'disabled':''} onclick="selectSlot('\${t}', this)">\${t}</button>\`;
  }).join('');
}

function selectSlot(t, el) {
  BK.slot = t;
  document.querySelectorAll('.bk-slot').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  updateBkSummary();
}

function updateBkSummary() {
  const services = [...BK.selectedServices];
  const items = BK.lastComputedItems;
  const names = services.map(id => items.find(i => i.id === id)?.name).filter(Boolean);
  const dateStr = BK.date ? (() => {
    const d = new Date(BK.date + 'T00:00:00');
    return \`\${d.getDate()}/\${d.getMonth()+1}/\${d.getFullYear()}\`;
  })() : '--';
  document.getElementById('bk-summary').innerHTML = \`
    <strong>Xe:</strong> \${S.brand} \${S.model} (\${S.year})<br>
    <strong>Garage:</strong> \${BK.garage?.name || '--'} \xB7 \${BK.garage?.district || ''}<br>
    <strong>D\u1ECBch v\u1EE5:</strong> \${names.join(', ') || '--'}<br>
    <strong>Ng\xE0y:</strong> \${dateStr} \xB7 \${BK.slot || '--'}
  \`;
}

function bkGoStep(step) {
  // Validate
  if (step === 2 && BK.selectedServices.size === 0) return;
  if (step === 3 && !BK.garage) return;

  BK.step = step;

  // Update panels
  [1,2,3].forEach(s => {
    document.getElementById(\`bk-panel-\${s}\`).classList.toggle('active', s === step);
  });

  // Update dots
  [1,2,3].forEach(s => {
    const dot = document.getElementById(\`bk-dot-\${s}\`);
    dot.classList.remove('active','done');
    if (s < step) dot.classList.add('done'), dot.innerHTML = \`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>\`;
    else if (s === step) dot.classList.add('active'), dot.textContent = s;
    else dot.textContent = s;
  });
  [1,2].forEach(s => {
    document.getElementById(\`bk-line-\${s}\`).classList.toggle('done', s < step);
  });

  // Sub text
  const subs = ['', 'Ch\u1ECDn garage ph\xF9 h\u1EE3p v\u1EDBi xe c\u1EE7a b\u1EA1n', 'Ch\u1ECDn ng\xE0y & gi\u1EDD, x\xE1c nh\u1EADn th\xF4ng tin'];
  document.getElementById('bk-header-sub').textContent = subs[step] || '';

  // Step-specific init
  if (step === 2) { BK.garage = null; document.getElementById('bk-btn-2').disabled = true; renderBkGarages(); }
  if (step === 3) { renderBkDates(); renderBkSlots(); updateBkSummary(); }

  document.getElementById('bk-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function bkConfirm() {
  const name = document.getElementById('bk-name').value.trim();
  const phone = document.getElementById('bk-phone').value.trim();
  if (!name || !phone) { toast('Vui l\xF2ng nh\u1EADp h\u1ECD t\xEAn v\xE0 s\u1ED1 \u0111i\u1EC7n tho\u1EA1i'); return; }
  if (!BK.slot) { toast('Vui l\xF2ng ch\u1ECDn khung gi\u1EDD'); return; }

  // Show panels hidden, show confirm
  [1,2,3].forEach(s => document.getElementById(\`bk-panel-\${s}\`).classList.remove('active'));
  [1,2,3].forEach(s => {
    const dot = document.getElementById(\`bk-dot-\${s}\`);
    dot.classList.remove('active'); dot.classList.add('done');
    dot.innerHTML = \`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>\`;
  });
  [1,2].forEach(s => document.getElementById(\`bk-line-\${s}\`).classList.add('done'));

  const items = BK.lastComputedItems;
  const names = [...BK.selectedServices].map(id => items.find(i => i.id === id)?.name).filter(Boolean);
  const dateStr = (() => {
    const d = new Date(BK.date + 'T00:00:00');
    return \`\${d.getDate()}/\${d.getMonth()+1}/\${d.getFullYear()}\`;
  })();
  document.getElementById('bk-confirm-detail').innerHTML = \`
    <strong>Xe:</strong> \${S.brand} \${S.model} (\${S.year})<br>
    <strong>Garage:</strong> \${BK.garage.name}<br>
    <strong>\u0110\u1ECBa ch\u1EC9:</strong> \${BK.garage.address}<br>
    <strong>D\u1ECBch v\u1EE5:</strong> \${names.join(', ')}<br>
    <strong>L\u1ECBch h\u1EB9n:</strong> \${dateStr} \xB7 \${BK.slot}<br>
    <strong>Li\xEAn h\u1EC7:</strong> \${name} \xB7 \${phone}
  \`;
  document.getElementById('bk-confirm').classList.add('show');
  document.getElementById('bk-header-sub').textContent = 'L\u1ECBch h\u1EB9n \u0111\xE3 \u0111\u01B0\u1EE3c ghi nh\u1EADn';
  document.getElementById('bk-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetBooking() {
  BK.step = 1; BK.selectedServices.clear(); BK.garage = null; BK.date = null; BK.slot = null;
  document.getElementById('bk-confirm').classList.remove('show');
  [1,2,3].forEach(s => {
    const dot = document.getElementById(\`bk-dot-\${s}\`);
    dot.classList.remove('done','active');
    dot.textContent = s;
    document.getElementById(\`bk-panel-\${s}\`).classList.remove('active');
  });
  document.getElementById('bk-dot-1').classList.add('active');
  document.getElementById('bk-panel-1').classList.add('active');
  document.getElementById('bk-line-1').classList.remove('done');
  document.getElementById('bk-line-2').classList.remove('done');
  document.getElementById('bk-header-sub').textContent = 'Ch\u1ECDn d\u1ECBch v\u1EE5 \u2192 T\xECm garage \u2192 X\xE1c nh\u1EADn l\u1ECBch h\u1EB9n';
  renderBkServices();
}

// \u2500\u2500 TOAST \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg; el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2400);
}

// \u2500\u2500 BOOT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

var garageState = { type: 'xemay', city: 'HCM' };
init();
renderGarageSection();
animateOdometer();

// \u2500\u2500 HERO ODOMETER ANIMATION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

function animateOdometer() {
  const el = document.getElementById('hero-odo');
  if (!el) return;
  const target = 24500;
  const duration = 1800;
  const start = performance.now();
  function step(now) {
    const p = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(ease * target).toLocaleString('vi-VN');
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// \u2500\u2500 GARAGE SECTION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

function renderGarageSection() {
  const all = GARAGES[garageState.type] || [];
  const filtered = all.filter(g => g.city === garageState.city);
  const container = document.getElementById('garage-grid');
  if (!container) return;
  container.innerHTML = filtered.map(g => \`
    <div class="garage-card">
      <div class="garage-card-top">
        <div>
          <div class="garage-card-name">\${g.name}</div>
          <div class="garage-card-brand">\${g.brand}</div>
        </div>
        <div class="garage-card-badge \${g.type}">\${g.type === 'official' ? 'Ch\xEDnh h\xE3ng' : '\u1EE6y quy\u1EC1n'}</div>
      </div>
      <div class="garage-card-meta">
        <div class="garage-card-row">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          \${g.address}
        </div>
        <div class="garage-card-row">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Ch\u1EDD \${g.wait}
        </div>
      </div>
      <div class="garage-card-footer">
        <div class="garage-rating">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          \${g.rating}
          \${g.momo ? '<span class="garage-momo-badge">MoMo Pay</span>' : ''}
        </div>
        <button class="garage-book-btn" data-garage-id="\${g.id}" data-garage-name="\${g.name}" onclick="bookFromGarage(this)">\u0110\u1EB7t l\u1ECBch</button>
      </div>
    </div>
  \`).join('');
}

function garageFilter(key, val, btn) {
  garageState[key] = val;
  const group = btn.closest('.garage-filter-group');
  group.querySelectorAll('.gf-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderGarageSection();
}

function bookFromGarage(btn) {
  const name = btn.dataset.garageName;
  // Pre-select garage in booking flow and open it
  const garageId = btn.dataset.garageId;
  // Find matching garage in BK data
  openBooking();
  // After rendering, auto-select this garage
  setTimeout(() => {
    bkGoStep(2);
    setTimeout(() => {
      const card = document.querySelector(\`.bk-garage-card[data-id="\${garageId}"]\`);
      if (card) { selectGarage(garageId, card); }
    }, 100);
  }, 300);
}
<\/script> `], [" ", "  ", `<main class="bd-page"> <!-- Hero --> <section class="bd-hero-section"> <div class="bd-hero-inner"> <!-- Left: copy --> <div class="bd-hero-text"> <div class="bd-hero-eyebrow">Ti\u1EC7n \xEDch \xB7 B\u1EA3o d\u01B0\u1EE1ng xe</div> <h1 class="bd-hero-title">Bi\u1EBFt xe c\u1EA7n g\xEC,<br><em>tr\u01B0\u1EDBc khi xe c\u1EA7n s\u1EEDa.</em></h1> <p class="bd-hero-sub">B\u1ECF s\xF3t m\u1ED9t l\u1EA7n \u0111\u1ED5i d\u1EA7u c\xF3 th\u1EC3 d\u1EABn \u0111\u1EBFn h\u1ECFng \u0111\u1ED9ng c\u01A1 t\u1ED1n 5-15 tri\u1EC7u. Nh\u1EADp xe v\xE0 s\u1ED1 km \u0111\u1EC3 xem ngay h\u1EA1ng m\u1EE5c n\xE0o s\u1EAFp \u0111\u1EBFn h\u1EA1n.</p> <div class="bd-hero-stats"> <div class="bd-hero-stat"> <div class="bd-hero-stat-num">13</div> <div class="bd-hero-stat-label">h\xE3ng xe h\u1ED7 tr\u1EE3</div> </div> <div class="bd-hero-stat"> <div class="bd-hero-stat-num">20+</div> <div class="bd-hero-stat-label">h\u1EA1ng m\u1EE5c b\u1EA3o d\u01B0\u1EE1ng</div> </div> <div class="bd-hero-stat"> <div class="bd-hero-stat-num">50+</div> <div class="bd-hero-stat-label">d\xF2ng xe ph\u1ED5 bi\u1EBFn</div> </div> </div> </div> <!-- Right: mini form card --> <div class="hf-card"> <div class="hf-header"> <span class="hf-header-label" id="hf-header-label">Ch\u1ECDn lo\u1EA1i xe</span> <div class="hf-step-dots"> <div class="hf-dot active" id="hf-d1"></div> <div class="hf-dot" id="hf-d2"></div> <div class="hf-dot" id="hf-d3"></div> </div> </div> <div class="hf-body"> <!-- Step 1: type + brand + model --> <div id="hf-step1"> <div class="hf-type-row"> <button class="hf-type-pill active" id="hf-pill-xemay" onclick="hfSelectType('xemay')"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2H5z"></path><circle cx="14" cy="17" r="2"></circle><circle cx="5" cy="17" r="2"></circle></svg>
Xe m\xE1y
</button> <button class="hf-type-pill" id="hf-pill-oto" onclick="hfSelectType('oto')"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
\xD4 t\xF4
</button> </div> <div class="hf-select-row"> <select class="hf-select" id="hf-brand" onchange="hfOnBrandChange()"> <option value="">Ch\u1ECDn h\xE3ng</option> </select> <select class="hf-select" id="hf-model" onchange="hfOnModelChange()" disabled> <option value="">Ch\u1ECDn model</option> </select> </div> <button class="hf-cta" id="hf-btn1" onclick="hfGoStep2()" disabled>
Ti\u1EBFp theo - Nh\u1EADp s\u1ED1 km
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg> </button> </div> <!-- Step 2: km input --> <div id="hf-step2" style="display:none"> <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,.4);margin-bottom:12px;" id="hf-step2-car"></div> <div class="hf-km-row"> <input class="hf-km-input" type="number" id="hf-km" placeholder="Nh\u1EADp s\u1ED1 km \u0111\u1ED3ng h\u1ED3" min="0" max="999999" oninput="hfOnKmInput()"> <span class="hf-km-unit">km</span> </div> <div class="hf-km-chips"> <button class="hf-km-chip" onclick="hfSetKm(5000)">5.000</button> <button class="hf-km-chip" onclick="hfSetKm(10000)">10.000</button> <button class="hf-km-chip" onclick="hfSetKm(20000)">20.000</button> <button class="hf-km-chip" onclick="hfSetKm(35000)">35.000</button> <button class="hf-km-chip" onclick="hfSetKm(50000)">50.000</button> </div> <button class="hf-cta" id="hf-btn2" onclick="hfShowResult()" disabled>
Xem l\u1ECBch b\u1EA3o d\u01B0\u1EE1ng
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg> </button> </div> <!-- Result preview --> <div id="hf-result" class="hf-result"> <div class="hf-result-car" id="hf-result-car"> <span id="hf-result-car-label"></span> <button onclick="hfReset()">\u0110\u1ED5i xe</button> </div> <div class="hf-result-km"> <div class="hf-result-km-num" id="hf-result-km-num">0</div> <div class="hf-result-km-unit">km</div> </div> <div class="hf-result-items" id="hf-result-items"></div> <button class="hf-result-cta" onclick="hfScrollToTool()">
Xem \u0111\u1EA7y \u0111\u1EE7 + \u0111\u1EB7t l\u1ECBch garage
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg> </button> </div> </div> </div> </div> </section> <div class="bd-wrap" id="bd-tool-anchor"> <!-- Tool --> <div class="bd-tool"> <!-- Form panel --> <div class="bd-form-panel"> <div class="bd-form-header"> <div class="bd-form-title">Th\xF4ng tin xe c\u1EE7a b\u1EA1n</div> <div class="bd-form-sub">Ch\u1ECDn h\xE3ng, model v\xE0 nh\u1EADp s\u1ED1 km \u0111\u1ED3ng h\u1ED3 hi\u1EC7n t\u1EA1i</div> </div> <div class="bd-form-body"> <!-- Vehicle type --> <div class="bd-field"> <div class="bd-label">Lo\u1EA1i xe</div> <div class="type-pills"> <button class="type-pill active" id="pill-xemay" onclick="selectType('xemay')"> <div class="type-pill-icon"> <svg viewBox="0 0 60 36" width="44" height="26" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="10" cy="28" r="7" stroke="currentColor" stroke-width="2.5"></circle> <circle cx="50" cy="28" r="7" stroke="currentColor" stroke-width="2.5"></circle> <path d="M17 28 L28 14 L38 14 L46 28" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" fill="none"></path> <path d="M28 14 L24 8 L38 8 L40 14" stroke="currentColor" stroke-width="2" fill="none"></path> <line x1="30" y1="14" x2="30" y2="22" stroke="currentColor" stroke-width="2"></line> </svg> </div> <span class="type-pill-label">Xe m\xE1y</span> </button> <button class="type-pill" id="pill-oto" onclick="selectType('oto')"> <div class="type-pill-icon"> <svg viewBox="0 0 72 36" width="48" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="6" y="16" width="60" height="16" rx="4" stroke="currentColor" stroke-width="2.5"></rect> <path d="M14 16 L20 6 L52 6 L58 16" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"></path> <circle cx="18" cy="32" r="5" stroke="currentColor" stroke-width="2.5"></circle> <circle cx="54" cy="32" r="5" stroke="currentColor" stroke-width="2.5"></circle> </svg> </div> <span class="type-pill-label">\xD4 t\xF4</span> </button> </div> </div> <!-- Brand --> <div class="bd-field"> <label class="bd-label" for="sel-brand">H\xE3ng xe</label> <select class="bd-select" id="sel-brand" onchange="onBrandChange()"> <option value="">-- Ch\u1ECDn h\xE3ng xe --</option> </select> </div> <!-- Model --> <div class="bd-field"> <label class="bd-label" for="sel-model">Model</label> <select class="bd-select" id="sel-model" disabled onchange="onModelChange()"> <option value="">-- Ch\u1ECDn model --</option> </select> </div> <!-- EV note --> <div class="ev-note" id="ev-note"> <strong>Xe \u0111i\u1EC7n VinFast</strong> - L\u1ECBch b\u1EA3o d\u01B0\u1EE1ng kh\xF4ng bao g\u1ED3m thay d\u1EA7u m\xE1y. C\xE1c h\u1EA1ng m\u1EE5c \u0111\u01B0\u1EE3c t\xEDnh theo chu k\u1EF3 ri\xEAng cho EV.
</div> <!-- Year --> <div class="bd-field"> <label class="bd-label" for="sel-year">N\u0103m s\u1EA3n xu\u1EA5t</label> <select class="bd-select" id="sel-year"> <option value="">-- Ch\u1ECDn n\u0103m --</option> </select> </div> <!-- KM --> <div class="bd-field"> <div class="bd-label">S\u1ED1 km hi\u1EC7n t\u1EA1i (\u0111\u1ED3ng h\u1ED3)</div> <div class="km-input-row"> <input class="km-input" id="km-input" type="text" inputmode="numeric" placeholder="VD: 24.500" oninput="onKmInput(this)" onkeydown="if(event.key==='Enter') doCheck()"> <span class="km-unit">km</span> </div> <div class="km-chips" id="km-chips"> <button class="km-chip" onclick="setKm(5000)">5.000</button> <button class="km-chip" onclick="setKm(15000)">15.000</button> <button class="km-chip" onclick="setKm(30000)">30.000</button> <button class="km-chip" onclick="setKm(60000)">60.000</button> <button class="km-chip" onclick="setKm(100000)">100.000</button> </div> </div> </div><!-- /form-body --> <div class="bd-submit"> <button class="btn-check" id="btn-check" onclick="doCheck()" disabled> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
Xem l\u1ECBch b\u1EA3o d\u01B0\u1EE1ng
</button> </div> </div><!-- /form-panel --> <!-- Result panel --> <div class="bd-result-panel"> <!-- Empty state --> <div class="bd-empty" id="bd-empty"> <div class="bd-empty-icon"> <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="36" cy="36" r="32" stroke="#C8C3CC" stroke-width="2" stroke-dasharray="6 4"></circle> <path d="M24 44 L24 32 Q24 26 30 26 L42 26 Q48 26 48 32 L48 44" stroke="#C8C3CC" stroke-width="2.5" stroke-linecap="round" fill="none"></path> <circle cx="28" cy="46" r="4" stroke="#C8C3CC" stroke-width="2.5"></circle> <circle cx="44" cy="46" r="4" stroke="#C8C3CC" stroke-width="2.5"></circle> <line x1="32" y1="46" x2="40" y2="46" stroke="#C8C3CC" stroke-width="2.5"></line> <path d="M34 26 L34 20 L38 20 L38 26" stroke="#C8C3CC" stroke-width="2"></path> <circle cx="47" cy="30" r="2" fill="#C8C3CC"></circle> </svg> </div> <div class="bd-empty-title">Nh\u1EADp th\xF4ng tin xe \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u</div> <div class="bd-empty-sub">Ch\u1ECDn h\xE3ng, model v\xE0 s\u1ED1 km - h\u1EC7 th\u1ED1ng t\xEDnh ngay chu k\u1EF3 b\u1EA3o d\u01B0\u1EE1ng cho t\u1EEBng h\u1EA1ng m\u1EE5c.</div> </div> <!-- Results --> <div class="bd-results" id="bd-results"> <!-- Score --> <div> <div class="bd-section-label">T\xECnh tr\u1EA1ng t\u1ED5ng th\u1EC3</div> <div class="bd-score-row"> <div> <div class="bd-score-num" id="score-num">--</div> <div style="font-size:10px;color:var(--gray-500);font-weight:700;margin-top:2px">/100</div> </div> <div class="bd-score-meta"> <div class="bd-score-label">Ch\u1EC9 s\u1ED1 s\u1EE9c kh\u1ECFe xe</div> <div class="bd-score-status" id="score-status">--</div> <div class="bd-score-bar-wrap"> <div class="bd-score-bar" id="score-bar" style="width:0%"></div> </div> <div class="bd-score-breakdown" id="score-breakdown"></div> </div> </div> </div> <!-- Timeline --> <div> <div class="bd-section-label">L\u1ECBch b\u1EA3o d\u01B0\u1EE1ng theo km</div> <div class="bd-timeline-wrap"> <div class="bd-timeline-label" id="tl-label">Ti\u1EBFp theo trong 20.000 km t\u1EDBi</div> <div class="bd-timeline-track-wrap" id="tl-wrap"> <div class="bd-timeline-axis" id="tl-axis"> <div class="bd-timeline-progress" id="tl-progress"></div> <div class="bd-timeline-now" id="tl-now"></div> <!-- pins injected by JS --> </div> <div class="bd-timeline-ticks" id="tl-ticks"></div> </div> </div> </div> <!-- Items --> <div> <div class="bd-section-label" id="items-label">H\u1EA1ng m\u1EE5c b\u1EA3o d\u01B0\u1EE1ng</div> <div class="bd-items" id="bd-items"></div> </div> </div><!-- /results --> </div><!-- /result-panel --> </div><!-- /tool --> <!-- Booking section --> <div class="bk-section" id="bk-section"> <!-- Header + step dots --> <div class="bk-header"> <div class="bk-header-text"> <div class="bk-header-title">\u0110\u1EB7t l\u1ECBch b\u1EA3o d\u01B0\u1EE1ng</div> <div class="bk-header-sub" id="bk-header-sub">Ch\u1ECDn d\u1ECBch v\u1EE5 \u2192 T\xECm garage \u2192 X\xE1c nh\u1EADn l\u1ECBch h\u1EB9n</div> </div> <div class="bk-steps"> <div class="bk-step-dot active" id="bk-dot-1">1</div> <div class="bk-step-line" id="bk-line-1"></div> <div class="bk-step-dot" id="bk-dot-2">2</div> <div class="bk-step-line" id="bk-line-2"></div> <div class="bk-step-dot" id="bk-dot-3">3</div> </div> </div> <!-- Confirmation screen (hidden until step 4) --> <div class="bk-confirm" id="bk-confirm"> <div class="bk-confirm-icon"> <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> </div> <div class="bk-confirm-title">\u0110\u1EB7t l\u1ECBch th\xE0nh c\xF4ng!</div> <div class="bk-confirm-sub">MoMo s\u1EBD nh\u1EAFc b\u1EA1n tr\u01B0\u1EDBc 1 ng\xE0y qua th\xF4ng b\xE1o. Garage s\u1EBD li\xEAn h\u1EC7 x\xE1c nh\u1EADn l\u1ECBch h\u1EB9n trong v\xF2ng 2 gi\u1EDD.</div> <div class="bk-confirm-detail" id="bk-confirm-detail"></div> <button class="btn-next-step" style="max-width:280px" onclick="resetBooking()">
\u0110\u1EB7t l\u1ECBch kh\xE1c
</button> </div> <!-- Step 1: Ch\u1ECDn d\u1ECBch v\u1EE5 --> <div class="bk-panel active" id="bk-panel-1"> <div class="bk-panel-title">Ch\u1ECDn d\u1ECBch v\u1EE5 c\u1EA7n th\u1EF1c hi\u1EC7n</div> <div class="bk-service-grid" id="bk-services"></div> <div class="bk-nav" style="margin-top:16px"> <div style="font-size:12px;color:var(--gray-500)" id="bk-selected-count">Ch\u1ECDn \xEDt nh\u1EA5t 1 d\u1ECBch v\u1EE5</div> <button class="btn-next-step" id="bk-btn-1" onclick="bkGoStep(2)" disabled style="flex:0;padding:11px 24px">
Ti\u1EBFp theo
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg> </button> </div> </div> <!-- Step 2: Ch\u1ECDn garage --> <div class="bk-panel" id="bk-panel-2"> <div class="bk-panel-title">Ch\u1ECDn garage g\u1EA7n b\u1EA1n</div> <div class="bk-city-tabs" id="bk-city-tabs"> <button class="bk-city-tab active" onclick="bkSelectCity('HCM')">TP. H\u1ED3 Ch\xED Minh</button> <button class="bk-city-tab" onclick="bkSelectCity('HN')">H\xE0 N\u1ED9i</button> <button class="bk-city-tab" onclick="bkSelectCity('ALL')">T\u1EA5t c\u1EA3</button> </div> <div class="bk-garage-grid" id="bk-garages"></div> <div class="bk-nav" style="margin-top:16px"> <button class="btn-back-step" onclick="bkGoStep(1)"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
Quay l\u1EA1i
</button> <button class="btn-next-step" id="bk-btn-2" onclick="bkGoStep(3)" disabled>
Ti\u1EBFp theo
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg> </button> </div> </div> <!-- Step 3: Ch\u1ECDn ng\xE0y gi\u1EDD + th\xF4ng tin --> <div class="bk-panel" id="bk-panel-3"> <div class="bk-panel-title">Ch\u1ECDn ng\xE0y &amp; gi\u1EDD</div> <div class="bk-dates" id="bk-dates"></div> <div class="bk-panel-title" style="margin-top:4px">Khung gi\u1EDD</div> <div class="bk-slots" id="bk-slots"></div> <div class="bk-panel-title">Th\xF4ng tin li\xEAn h\u1EC7</div> <div class="bk-fields"> <div class="bk-field"><label>H\u1ECD v\xE0 t\xEAn</label><input id="bk-name" type="text" placeholder="Nguy\u1EC5n V\u0103n A"></div> <div class="bk-field"><label>S\u1ED1 \u0111i\u1EC7n tho\u1EA1i</label><input id="bk-phone" type="tel" placeholder="09x xxx xxxx"></div> </div> <div class="bk-summary-box" id="bk-summary"></div> <div class="bk-nav"> <button class="btn-back-step" onclick="bkGoStep(2)"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
Quay l\u1EA1i
</button> <button class="btn-next-step" id="bk-btn-3" onclick="bkConfirm()"> <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
X\xE1c nh\u1EADn \u0111\u1EB7t l\u1ECBch
</button> </div> </div> </div><!-- /bk-section --> <!-- CTA strip --> <div class="bd-cta-strip" id="cta-strip" style="display:none"> <div class="bd-cta-label">S\u1EB5n s\xE0ng b\u1EA3o d\u01B0\u1EE1ng? <span>\u0110\u1EB7t l\u1ECBch ngay</span> t\u1EA1i garage MoMo \u0111\u1ED1i t\xE1c.</div> <button class="cta-btn cta-btn-outline" onclick="openBooking()"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
\u0110\u1EB7t l\u1ECBch b\u1EA3o d\u01B0\u1EE1ng
</button> <a class="cta-btn cta-btn-solid" href="/bao-hiem-xe-flow"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
Gia h\u1EA1n b\u1EA3o hi\u1EC3m
</a> </div> </div><!-- /bd-wrap --> <!-- MoXe Section removed - moved to vehicle-hub --> <section class="moxe-section" style="display:none"> <div class="moxe-inner"> <!-- Top card: value prop + license plate --> <div class="moxe-card"> <div class="moxe-card-left"> <div class="moxe-card-eyebrow">Trong App MoMo</div> <h2 class="moxe-card-title">L\u01B0u xe m\u1ED9t l\u1EA7n,<br>MoMo lo ph\u1EA7n c\xF2n l\u1EA1i</h2> <p class="moxe-card-sub">T\u1EA1o h\u1ED3 s\u01A1 xe trong App \u0111\u1EC3 m\u1EDF kh\xF3a tr\u1EA3i nghi\u1EC7m \u0111\u1EA7y \u0111\u1EE7: m\u1ECDi ti\u1EC7n \xEDch tr\xEAn trang n\xE0y \u0111\u01B0\u1EE3c \u0111i\u1EC1n s\u1EB5n th\xF4ng tin xe c\u1EE7a b\u1EA1n, k\xE8m c\u1EA3nh b\xE1o t\u1EF1 \u0111\u1ED9ng cho m\u1ECDi deadline.</p> <div class="moxe-features"> <div class="moxe-feat"> <div class="moxe-feat-icon"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg> </div> <div> <div class="moxe-feat-title">Qu\xE9t ph\u1EA1t ngu\u1ED9i h\xE0ng tu\u1EA7n</div> <div class="moxe-feat-sub">T\u1EF1 \u0111\u1ED9ng ki\u1EC3m tra 03:00 th\u1EE9 Hai, b\xE1o ngay khi c\xF3 vi ph\u1EA1m m\u1EDBi</div> </div> </div> <div class="moxe-feat"> <div class="moxe-feat-icon"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> </div> <div> <div class="moxe-feat-title">Nh\u1EAFc h\u1EA1n \u0111\u0103ng ki\u1EC3m &amp; TNDS</div> <div class="moxe-feat-sub">Tr\u01B0\u1EDBc 45, 30 v\xE0 7 ng\xE0y - kh\xF4ng bao gi\u1EDD qu\xEAn gia h\u1EA1n</div> </div> </div> <div class="moxe-feat"> <div class="moxe-feat-icon"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg> </div> <div> <div class="moxe-feat-title">Th\xEAm xe b\u1EB1ng OCR</div> <div class="moxe-feat-sub">Ch\u1EE5p \u0111\u0103ng k\xFD xe, th\xF4ng tin t\u1EF1 \u0111i\u1EC1n trong 5 gi\xE2y</div> </div> </div> <div class="moxe-feat"> <div class="moxe-feat-icon"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg> </div> <div> <div class="moxe-feat-title">H\u1EA1ng MoXe</div> <div class="moxe-feat-sub">T\xEDch \u0111i\u1EC3m m\u1ED7i giao d\u1ECBch, \u0111\u1ED5i voucher r\u1EEDa xe, gi\u1EA3m ph\xED b\u1EA3o hi\u1EC3m</div> </div> </div> </div> <a href="#" class="moxe-cta">T\u1EA1o h\u1ED3 s\u01A1 xe mi\u1EC5n ph\xED</a> </div> <div class="moxe-plate-wrap"> <div class="moxe-plate"> <div class="moxe-plate-strip"></div> <div class="moxe-plate-num">51F-123.45</div> </div> <div class="moxe-plate-badge"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>
H\u1EA1ng B\u1EA1c \xB7 420 \u0111i\u1EC3m
</div> </div> </div> <!-- Tier section --> <div class="moxe-tier-header"> <div class="moxe-tier-label">Ch\u01B0\u01A1ng tr\xECnh h\u1EA1ng th\xE0nh vi\xEAn</div> <div class="moxe-tier-title">H\u1EA1ng MoXe - c\xE0ng d\xF9ng, c\xE0ng c\xF3 l\u1EE3i</div> </div> <div class="moxe-tiers"> <!-- \u0110\u1ED3ng --> <div class="moxe-tier-card dong"> <div class="moxe-tier-icon">\u{1F949}</div> <div class="moxe-tier-name">MoXe \u0110\u1ED3ng</div> <div class="moxe-tier-cond"> <strong>\u0110i\u1EC1u ki\u1EC7n</strong>
Add xe v\xE0o Vehicle Hub
</div> <div class="moxe-tier-benefits"> <div class="moxe-tier-benefit">Tra ph\u1EA1t ngu\u1ED9i</div> <div class="moxe-tier-benefit">ePass t\u1EF1 \u0111\u1ED9ng n\u1EA1p</div> <div class="moxe-tier-benefit">\u0110\u0103ng ki\u1EC3m c\u01A1 b\u1EA3n</div> </div> </div> <!-- B\u1EA1c --> <div class="moxe-tier-card bac"> <div class="moxe-tier-icon">\u{1F948}</div> <div class="moxe-tier-name">MoXe B\u1EA1c</div> <div class="moxe-tier-cond"> <strong>\u0110i\u1EC1u ki\u1EC7n</strong>
D\xF9ng 3+ ti\u1EC7n \xEDch/th\xE1ng li\xEAn t\u1EE5c 3 th\xE1ng
</div> <div class="moxe-tier-benefits"> <div class="moxe-tier-benefit">T\u1EA5t c\u1EA3 quy\u1EC1n l\u1EE3i \u0110\u1ED3ng</div> <div class="moxe-tier-benefit">Gi\u1EA3m th\xEAm 5% ph\xED b\u1EA3o hi\u1EC3m</div> <div class="moxe-tier-benefit">Voucher r\u1EEDa xe h\xE0ng qu\xFD</div> </div> </div> <!-- V\xE0ng --> <div class="moxe-tier-card vang"> <div class="moxe-tier-icon">\u{1F947}</div> <div class="moxe-tier-name">MoXe V\xE0ng</div> <div class="moxe-tier-cond"> <strong>\u0110i\u1EC1u ki\u1EC7n</strong>
D\xF9ng 3+ ti\u1EC7n \xEDch/th\xE1ng \xD7 3 th\xE1ng + mua 1 s\u1EA3n ph\u1EA9m b\u1EA3o hi\u1EC3m
</div> <div class="moxe-tier-benefits"> <div class="moxe-tier-benefit">T\u1EA5t c\u1EA3 quy\u1EC1n l\u1EE3i B\u1EA1c</div> <div class="moxe-tier-benefit">Gi\u1EA3m th\xEAm 10% ph\xED b\u1EA3o hi\u1EC3m</div> <div class="moxe-tier-benefit">Mi\u1EC5n ph\xED c\u1EE9u h\u1ED9 1 l\u1EA7n/n\u0103m</div> </div> </div> <!-- B\u1EA1ch Kim --> <div class="moxe-tier-card bachkim"> <div class="moxe-tier-icon">\u{1F48E}</div> <div class="moxe-tier-name">MoXe B\u1EA1ch Kim</div> <div class="moxe-tier-cond"> <strong>\u0110i\u1EC1u ki\u1EC7n</strong>
D\xF9ng 3+ ti\u1EC7n \xEDch/th\xE1ng \xD7 3 th\xE1ng + mua VCX &amp; CTPL
</div> <div class="moxe-tier-benefits"> <div class="moxe-tier-benefit">T\u1EA5t c\u1EA3 quy\u1EC1n l\u1EE3i V\xE0ng</div> <div class="moxe-tier-benefit">Gi\u1EA3m th\xEAm 15% ph\xED b\u1EA3o hi\u1EC3m</div> <div class="moxe-tier-benefit">\u01AFu ti\xEAn h\u1ED7 tr\u1EE3 24/7</div> </div> </div> </div> </div> </section> <!-- Garage Section --> <section class="garage-section"> <div class="garage-inner"> <div class="garage-header"> <div class="garage-eyebrow">\u0110\u1ED1i t\xE1c MoMo</div> <h2 class="garage-title">T\xECm garage b\u1EA3o d\u01B0\u1EE1ng g\u1EA7n b\u1EA1n</h2> <p class="garage-sub">\u0110\u1EB7t l\u1ECBch tr\u1EF1c ti\u1EBFp qua MoMo - thanh to\xE1n kh\xF4ng ti\u1EC1n m\u1EB7t, nh\u1EADn \u0111i\u1EC3m th\u01B0\u1EDFng.</p> </div> <div class="garage-filters"> <div class="garage-filter-group"> <button class="gf-btn active" onclick="garageFilter('type','xemay',this)">Xe m\xE1y</button> <button class="gf-btn" onclick="garageFilter('type','oto',this)">\xD4 t\xF4</button> </div> <div class="garage-filter-sep"></div> <div class="garage-filter-group"> <button class="gf-btn active" onclick="garageFilter('city','HCM',this)">TP.HCM</button> <button class="gf-btn" onclick="garageFilter('city','HN',this)">H\xE0 N\u1ED9i</button> </div> </div> <div class="garage-grid" id="garage-grid"></div> </div> </section> </main>  <div class="toast" id="toast"></div> <script>
// \u2500\u2500 HERO MINI FORM \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

const HF = { type: 'xemay', brand: '', model: '', km: null };

function hfInit() {
  hfPopulateBrands();
}

function hfPopulateBrands() {
  const sel = document.getElementById('hf-brand');
  const data = VEHICLE_DATA[HF.type];
  sel.innerHTML = '<option value="">Ch\u1ECDn h\xE3ng</option>';
  data.brands.forEach(b => sel.innerHTML += \\\`<option value="\\\${b}">\\\${b}</option>\\\`);
  document.getElementById('hf-model').innerHTML = '<option value="">Ch\u1ECDn model</option>';
  document.getElementById('hf-model').disabled = true;
  HF.brand = ''; HF.model = '';
  hfCheckStep1();
}

function hfSelectType(type) {
  HF.type = type;
  document.getElementById('hf-pill-xemay').classList.toggle('active', type === 'xemay');
  document.getElementById('hf-pill-oto').classList.toggle('active', type === 'oto');
  hfPopulateBrands();
}

function hfOnBrandChange() {
  HF.brand = document.getElementById('hf-brand').value;
  HF.model = '';
  const modelSel = document.getElementById('hf-model');
  const models = (VEHICLE_DATA[HF.type].models[HF.brand] || []);
  modelSel.innerHTML = '<option value="">Ch\u1ECDn model</option>';
  models.forEach(m => modelSel.innerHTML += \\\`<option value="\\\${m}">\\\${m}</option>\\\`);
  modelSel.disabled = !HF.brand;
  hfCheckStep1();
}

function hfOnModelChange() {
  HF.model = document.getElementById('hf-model').value;
  hfCheckStep1();
}

function hfCheckStep1() {
  document.getElementById('hf-btn1').disabled = !(HF.brand && HF.model);
}

function hfGoStep2() {
  document.getElementById('hf-step1').style.display = 'none';
  document.getElementById('hf-step2').style.display = 'block';
  document.getElementById('hf-result').classList.remove('show');
  document.getElementById('hf-step2-car').textContent = \\\`\\\${HF.brand} \\\${HF.model}\\\`;
  document.getElementById('hf-header-label').textContent = 'Nh\u1EADp s\u1ED1 km \u0111\u1ED3ng h\u1ED3';
  document.getElementById('hf-d1').classList.remove('active'); document.getElementById('hf-d1').classList.add('done');
  document.getElementById('hf-d2').classList.add('active');
  document.getElementById('hf-d3').classList.remove('active', 'done');
  document.getElementById('hf-km').value = '';
  HF.km = null;
  hfCheckStep2();
}

function hfOnKmInput() {
  const v = parseInt(document.getElementById('hf-km').value);
  HF.km = isNaN(v) ? null : v;
  // sync chips
  document.querySelectorAll('.hf-km-chip').forEach(c => c.classList.remove('active'));
  hfCheckStep2();
}

function hfSetKm(val) {
  document.getElementById('hf-km').value = val;
  HF.km = val;
  document.querySelectorAll('.hf-km-chip').forEach(c => {
    c.classList.toggle('active', parseInt(c.textContent.replace(/\\\\./g,'')) === val);
  });
  hfCheckStep2();
}

function hfCheckStep2() {
  document.getElementById('hf-btn2').disabled = !(HF.km !== null && HF.km >= 0);
}

function hfShowResult() {
  const intervals = VEHICLE_DATA[HF.type].intervals;
  const km = HF.km;
  // compute items: show top 4 by urgency
  const items = intervals.map(iv => {
    const cyclesDone = Math.floor(km / iv.km);
    const nextAt = (cyclesDone + 1) * iv.km;
    const remaining = nextAt - km;
    const pct = remaining / iv.km;
    return { ...iv, remaining, pct };
  }).sort((a, b) => a.pct - b.pct).slice(0, 4);

  // render
  let html = '';
  items.forEach(it => {
    let cls = 'green', dotCls = 'green', statusText = '';
    if (it.remaining <= 0) {
      cls = 'red'; dotCls = 'red'; statusText = 'Qu\xE1 h\u1EA1n';
    } else if (it.pct <= 0.25) {
      cls = 'red'; dotCls = 'red'; statusText = \\\`C\xF2n \\\${it.remaining.toLocaleString('vi-VN')} km\\\`;
    } else if (it.pct <= 0.5) {
      cls = 'amber'; dotCls = 'amber'; statusText = \\\`C\xF2n \\\${it.remaining.toLocaleString('vi-VN')} km\\\`;
    } else {
      statusText = \\\`C\xF2n \\\${it.remaining.toLocaleString('vi-VN')} km\\\`;
    }
    const rowCls = dotCls === 'red' ? 'urgent' : dotCls === 'amber' ? 'warn-item' : '';
    html += \\\`<div class="hf-result-item \\\${rowCls}">
      <div class="hf-result-dot \\\${dotCls}"></div>
      <div class="hf-result-name">\\\${it.name}</div>
      <div class="hf-result-status \\\${cls}">\\\${statusText}</div>
    </div>\\\`;
  });

  document.getElementById('hf-result-items').innerHTML = html;
  document.getElementById('hf-result-car-label').textContent = \\\`\\\${HF.brand} \\\${HF.model}\\\`;
  document.getElementById('hf-result-km-num').textContent = km.toLocaleString('vi-VN');

  document.getElementById('hf-step2').style.display = 'none';
  document.getElementById('hf-result').classList.add('show');
  document.getElementById('hf-header-label').textContent = 'T\xECnh tr\u1EA1ng xe c\u1EE7a b\u1EA1n';
  document.getElementById('hf-d2').classList.remove('active'); document.getElementById('hf-d2').classList.add('done');
  document.getElementById('hf-d3').classList.add('active');
}

function hfReset() {
  document.getElementById('hf-result').classList.remove('show');
  document.getElementById('hf-step2').style.display = 'none';
  document.getElementById('hf-step1').style.display = 'block';
  document.getElementById('hf-header-label').textContent = 'Ch\u1ECDn lo\u1EA1i xe';
  document.getElementById('hf-d1').classList.add('active'); document.getElementById('hf-d1').classList.remove('done');
  document.getElementById('hf-d2').classList.remove('active', 'done');
  document.getElementById('hf-d3').classList.remove('active', 'done');
  hfPopulateBrands();
}

function hfScrollToTool() {
  // sync state to main tool then scroll
  if (HF.type !== S.type) selectType(HF.type);
  setTimeout(() => {
    const brandSel = document.getElementById('sel-brand');
    if (brandSel) { brandSel.value = HF.brand; onBrandChange(); }
    setTimeout(() => {
      const modelSel = document.getElementById('sel-model');
      if (modelSel) { modelSel.value = HF.model; onModelChange(); }
      const kmInp = document.getElementById('inp-km');
      if (kmInp) { kmInp.value = HF.km; S.km = HF.km; checkReady(); }
    }, 50);
  }, 50);
  document.getElementById('bd-tool-anchor').scrollIntoView({ behavior: 'smooth' });
}

// \u2500\u2500 DATA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

const VEHICLE_DATA = {
  xemay: {
    brands: ['Honda', 'Yamaha', 'Suzuki', 'SYM', 'Piaggio'],
    models: {
      Honda:   ['Wave Alpha 110', 'Dream 110', 'Future 125', 'Vision 110', 'Air Blade 125', 'SH 125i', 'SH 150i', 'PCX 125', 'Lead 125', 'Winner X'],
      Yamaha:  ['Sirius 110', 'Jupiter 115', 'Exciter 150', 'Exciter 155', 'NVX 155', 'Grande 125', 'Janus 125', 'Latte 125'],
      Suzuki:  ['Raider R150', 'Hayate 125', 'Avenis 125', 'Address 110'],
      SYM:     ['Star SR 125', 'Attila Elizabeth 125', 'Shark 125'],
      Piaggio: ['Vespa Sprint 125', 'Vespa Primavera 125', 'Medley 150', 'Liberty 150'],
    },
    intervals: [
      { id: 'oil',       name: 'D\u1EA7u m\xE1y',       km: 3000,  priority: 5, icon: 'oil',    note: 'M\u1ED7i 3.000 km ho\u1EB7c 3 th\xE1ng' },
      { id: 'spark',     name: 'Bugi',           km: 8000,  priority: 4, icon: 'spark',  note: 'M\u1ED7i 8.000 km' },
      { id: 'airfilter', name: 'L\u1ECDc gi\xF3',        km: 10000, priority: 3, icon: 'filter', note: 'M\u1ED7i 10.000 km ho\u1EB7c 1 n\u0103m' },
      { id: 'chain',     name: 'X\xEDch/d\xE2y \u0111ai',   km: 20000, priority: 3, icon: 'chain',  note: 'M\u1ED7i 20.000 km, b\xF4i tr\u01A1n m\u1ED7i 5.000 km' },
      { id: 'brake',     name: 'M\xE1 phanh',       km: 25000, priority: 4, icon: 'brake',  note: 'M\u1ED7i 25.000 km ho\u1EB7c khi m\xF2n' },
      { id: 'tire',      name: 'L\u1ED1p xe',         km: 35000, priority: 3, icon: 'tire',   note: 'M\u1ED7i 35.000 km ho\u1EB7c 3-4 n\u0103m' },
    ],
  },
  oto: {
    brands: ['Toyota', 'Honda', 'Hyundai', 'Kia', 'VinFast', 'Ford', 'Mazda', 'Mitsubishi'],
    models: {
      Toyota:     ['Vios 1.5', 'Camry 2.5', 'Corolla Cross 1.8', 'Fortuner 2.4', 'Innova Cross 2.0', 'Rush 1.5', 'Raize 1.0T', 'Veloz Cross'],
      Honda:      ['City 1.5', 'Civic 1.5T', 'CR-V 1.5T', 'HR-V 1.5', 'Accord 1.5T', 'BR-V 1.5'],
      Hyundai:    ['Grand i10 1.2', 'Accent 1.4', 'Elantra 1.4T', 'Tucson 2.0', 'Santa Fe 2.2', 'Creta 1.5T', 'Stargazer 1.5'],
      Kia:        ['K3 1.6', 'K5 2.0T', 'Seltos 1.4T', 'Sportage 1.6T', 'Sorento 2.2D', 'Carnival 2.2D', 'EV6'],
      VinFast:    ['VF3 EV', 'VF5 EV', 'VF6 EV', 'VF7 EV', 'VF8 EV', 'VF9 EV'],
      Ford:       ['EcoSport 1.0T', 'Territory 1.5T', 'Everest 2.0T', 'Ranger 2.0', 'Bronco Sport'],
      Mazda:      ['Mazda2 1.5', 'Mazda3 2.0', 'Mazda3 2.5T', 'Mazda CX-3 1.5', 'Mazda CX-5 2.0', 'Mazda CX-8 2.5T'],
      Mitsubishi: ['Attrage 1.2', 'Xpander 1.5', 'Outlander 2.0', 'Pajero Sport 2.4D', 'Triton 2.4D'],
    },
    intervals: [
      { id: 'oil',        name: 'D\u1EA7u m\xE1y',            km: 5000,  priority: 5, icon: 'oil',     note: 'M\u1ED7i 5.000 km ho\u1EB7c 6 th\xE1ng' },
      { id: 'oilfilter',  name: 'L\u1ECDc d\u1EA7u',            km: 10000, priority: 4, icon: 'filter',  note: 'Thay c\xF9ng l\xFAc v\u1EDBi d\u1EA7u m\xE1y m\u1ED7i 2 l\u1EA7n' },
      { id: 'airfilter',  name: 'L\u1ECDc gi\xF3 \u0111\u1ED9ng c\u01A1',    km: 20000, priority: 3, icon: 'filter',  note: 'M\u1ED7i 20.000 km ho\u1EB7c 1 n\u0103m' },
      { id: 'cabin',      name: 'L\u1ECDc gi\xF3 \u0111i\u1EC1u h\xF2a',   km: 15000, priority: 3, icon: 'ac',      note: 'M\u1ED7i 15.000 km ho\u1EB7c 1 n\u0103m' },
      { id: 'spark',      name: 'Bugi',                km: 40000, priority: 3, icon: 'spark',   note: 'M\u1ED7i 40.000 km (platinum: 80.000 km)' },
      { id: 'brake',      name: 'M\xE1 phanh tr\u01B0\u1EDBc',      km: 30000, priority: 4, icon: 'brake',   note: 'M\u1ED7i 30.000 km ho\u1EB7c khi m\xF2n' },
      { id: 'brakeback',  name: 'M\xE1 phanh sau',        km: 50000, priority: 3, icon: 'brake',   note: 'M\u1ED7i 50.000 km ho\u1EB7c khi m\xF2n' },
      { id: 'trans',      name: 'D\u1EA7u h\u1ED9p s\u1ED1',          km: 40000, priority: 3, icon: 'oil',     note: 'M\u1ED7i 40.000 km (CVT: 60.000 km)' },
      { id: 'timing',     name: '\u0110ai cam',             km: 70000, priority: 5, icon: 'belt',    note: 'M\u1ED7i 70.000 km - kh\xF4ng b\u1ECF qua!' },
      { id: 'tire',       name: 'L\u1ED1p xe',              km: 50000, priority: 3, icon: 'tire',    note: 'M\u1ED7i 50.000 km ho\u1EB7c 5 n\u0103m' },
    ],
    evIntervals: [
      { id: 'brake',     name: 'M\xE1 phanh tr\u01B0\u1EDBc',     km: 20000, priority: 4, icon: 'brake',   note: 'M\u1ED7i 20.000 km (regenerative braking k\xE9o d\xE0i tu\u1ED5i th\u1ECD)' },
      { id: 'brakeback', name: 'M\xE1 phanh sau',        km: 40000, priority: 3, icon: 'brake',   note: 'M\u1ED7i 40.000 km' },
      { id: 'cabin',     name: 'L\u1ECDc gi\xF3 \u0111i\u1EC1u h\xF2a',   km: 25000, priority: 3, icon: 'ac',      note: 'M\u1ED7i 25.000 km ho\u1EB7c 2 n\u0103m' },
      { id: 'coolant',   name: 'Dung d\u1ECBch l\xE0m m\xE1t',  km: 80000, priority: 3, icon: 'coolant', note: 'M\u1ED7i 80.000 km ho\u1EB7c 4 n\u0103m' },
      { id: 'tire',      name: 'L\u1ED1p xe',              km: 40000, priority: 3, icon: 'tire',    note: 'M\u1ED7i 40.000 km (EV n\u1EB7ng h\u01A1n, m\xF2n nhanh h\u01A1n)' },
      { id: 'battery',   name: 'Ki\u1EC3m tra pin HV',     km: null,  years: 1,   priority: 5, icon: 'battery', note: 'Ki\u1EC3m tra h\xE0ng n\u0103m t\u1EA1i trung t\xE2m VinFast' },
    ],
  },
};

const ICONS = {
  oil: \\\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>\\\`,
  spark: \\\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>\\\`,
  filter: \\\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>\\\`,
  chain: \\\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>\\\`,
  brake: \\\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/></svg>\\\`,
  tire: \\\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/></svg>\\\`,
  ac: \\\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="3"/><path d="M6 12h.01M10 12h.01M14 12h.01M18 12h.01"/><path d="M7 18v3M17 18v3M12 18v3"/></svg>\\\`,
  belt: \\\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="6" height="20" rx="3"/><rect x="16" y="2" width="6" height="20" rx="3"/><path d="M8 5 L16 5"/><path d="M8 19 L16 19"/></svg>\\\`,
  coolant: \\\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6m-4 0a6 6 0 1 0 8 0"/><path d="M8 8H7a5 5 0 0 0 0 10h10a5 5 0 0 0 0-10h-1"/></svg>\\\`,
  battery: \\\`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="6" width="18" height="12" rx="2"/><line x1="23" y1="13" x2="23" y2="11"/><line x1="8" y1="12" x2="8" y2="12"/><polyline points="5 12 8 9 11 12 14 9 17 12"/></svg>\\\`,
};

// \u2500\u2500 STATE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

const S = {
  type: 'xemay',
  brand: '',
  model: '',
  year: '',
  km: null,
};

// \u2500\u2500 INIT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

function init() {
  populateYears();
  populateBrands();
  hfInit();
}

function populateYears() {
  const sel = document.getElementById('sel-year');
  const cur = new Date().getFullYear();
  sel.innerHTML = '<option value="">-- Ch\u1ECDn n\u0103m --</option>';
  for (let y = cur; y >= cur - 20; y--) {
    sel.innerHTML += \\\`<option value="\\\${y}">\\\${y}</option>\\\`;
  }
  sel.value = cur - 3;
  S.year = cur - 3;
}

function populateBrands() {
  const sel = document.getElementById('sel-brand');
  const data = VEHICLE_DATA[S.type];
  sel.innerHTML = '<option value="">-- Ch\u1ECDn h\xE3ng xe --</option>';
  data.brands.forEach(b => {
    sel.innerHTML += \\\`<option value="\\\${b}">\\\${b}</option>\\\`;
  });
}

function selectType(type) {
  S.type = type;
  S.brand = ''; S.model = '';
  document.getElementById('pill-xemay').classList.toggle('active', type === 'xemay');
  document.getElementById('pill-oto').classList.toggle('active', type === 'oto');
  populateBrands();
  const modelSel = document.getElementById('sel-model');
  modelSel.innerHTML = '<option value="">-- Ch\u1ECDn model --</option>';
  modelSel.disabled = true;
  document.getElementById('sel-brand').value = '';
  document.getElementById('ev-note').classList.remove('show');
  checkReady();
}

function onBrandChange() {
  S.brand = document.getElementById('sel-brand').value;
  S.model = '';
  const modelSel = document.getElementById('sel-model');
  const models = (VEHICLE_DATA[S.type].models[S.brand] || []);
  modelSel.innerHTML = '<option value="">-- Ch\u1ECDn model --</option>';
  models.forEach(m => { modelSel.innerHTML += \\\`<option value="\\\${m}">\\\${m}</option>\\\`; });
  modelSel.disabled = !S.brand;
  checkReady();
}

function onModelChange() {
  S.model = document.getElementById('sel-model').value;
  const isEV = S.type === 'oto' && S.model && S.model.includes('EV');
  document.getElementById('ev-note').classList.toggle('show', isEV);
  checkReady();
}

function onKmInput(el) {
  const raw = el.value.replace(/\\\\D/g, '');
  S.km = raw ? parseInt(raw) : null;
  el.value = raw ? parseInt(raw).toLocaleString('vi-VN') : '';
  // chip highlight
  document.querySelectorAll('.km-chip').forEach(c => {
    c.classList.toggle('active', parseInt(c.textContent.replace(/\\\\D/g,'')) === S.km);
  });
  checkReady();
}

function setKm(val) {
  S.km = val;
  document.getElementById('km-input').value = val.toLocaleString('vi-VN');
  document.querySelectorAll('.km-chip').forEach(c => {
    c.classList.toggle('active', parseInt(c.textContent.replace(/\\\\D/g,'')) === val);
  });
  checkReady();
}

function checkReady() {
  const ok = S.brand && S.model && S.km > 0;
  document.getElementById('btn-check').disabled = !ok;
}

// \u2500\u2500 COMPUTE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

function getIntervals() {
  const data = VEHICLE_DATA[S.type];
  const isEV = S.type === 'oto' && S.model && S.model.includes('EV');
  if (isEV && data.evIntervals) return data.evIntervals;
  return data.intervals;
}

function computeItems() {
  const intervals = getIntervals();
  const km = S.km;
  return intervals.map(item => {
    if (item.km === null) {
      // year-based (battery check)
      return {
        ...item, type: 'year',
        remaining_km: null, next_due_km: null, pct: 1,
        status: 'ok', bar_pct: 100,
        remaining_label: \\\`M\u1ED7i \\\${item.years} n\u0103m\\\`,
        next_label: 'Ki\u1EC3m tra theo l\u1ECBch h\xE3ng',
      };
    }
    const last_km = Math.floor(km / item.km) * item.km;
    const next_km = last_km + item.km;
    const remaining = next_km - km;
    const pct = remaining / item.km; // 0 = overdue, 1 = just serviced

    let status;
    if (pct <= 0) status = 'overdue';
    else if (pct < 0.25) status = 'warn';
    else status = 'ok';

    const bar_pct = Math.max(0, Math.min(100, Math.round(pct * 100)));

    let remaining_label;
    if (pct <= 0) {
      remaining_label = \\\`Qu\xE1 h\u1EA1n \\\${Math.abs(remaining).toLocaleString('vi-VN')} km\\\`;
    } else {
      remaining_label = \\\`C\xF2n \\\${remaining.toLocaleString('vi-VN')} km\\\`;
    }

    return {
      ...item, type: 'km',
      last_km, next_km, remaining, pct,
      status, bar_pct,
      remaining_label,
      next_label: \\\`\\\${next_km.toLocaleString('vi-VN')} km\\\`,
    };
  });
}

function computeScore(items) {
  let wSum = 0, wTotal = 0;
  items.forEach(item => {
    if (item.type === 'year') { wSum += 100 * item.priority; wTotal += item.priority; return; }
    let score;
    const p = item.pct;
    if (p > 0.5) score = 100;
    else if (p > 0.3) score = 85;
    else if (p > 0.1) score = 60;
    else if (p > 0) score = 35;
    else score = 0;
    wSum += score * item.priority;
    wTotal += item.priority;
  });
  return Math.round(wSum / wTotal);
}

// \u2500\u2500 RENDER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

function doCheck() {
  if (!S.brand || !S.model || !S.km) return;
  const items = computeItems();
  BK.lastComputedItems = items;
  const score = computeScore(items);
  renderScore(score, items);
  renderTimeline(items);
  renderItems(items);
  document.getElementById('bd-empty').style.display = 'none';
  document.getElementById('bd-results').classList.add('show');
  document.getElementById('cta-strip').style.display = 'flex';
  // Reset booking if re-checking
  document.getElementById('bk-section').classList.remove('show');
}

function renderScore(score, items) {
  const numEl = document.getElementById('score-num');
  const statusEl = document.getElementById('score-status');
  const barEl = document.getElementById('score-bar');
  const bkEl = document.getElementById('score-breakdown');

  numEl.textContent = score;
  numEl.style.color = score >= 80 ? 'var(--green-500)' : score >= 55 ? 'var(--amber-500)' : 'var(--red-500)';

  let statusText, barColor;
  if (score >= 80) { statusText = 'T\u1ED1t - Xe \u0111ang trong t\xECnh tr\u1EA1ng \u1ED5n'; barColor = 'var(--green-500)'; }
  else if (score >= 60) { statusText = 'C\u1EA7n theo d\xF5i - M\u1ED9t s\u1ED1 h\u1EA1ng m\u1EE5c s\u1EAFp \u0111\u1EBFn h\u1EA1n'; barColor = 'var(--amber-500)'; }
  else if (score >= 40) { statusText = 'C\u1EA7n ki\u1EC3m tra - C\xF3 h\u1EA1ng m\u1EE5c g\u1EA7n qu\xE1 h\u1EA1n'; barColor = 'var(--amber-500)'; }
  else { statusText = 'C\u1EA7n b\u1EA3o d\u01B0\u1EE1ng ngay - C\xF3 h\u1EA1ng m\u1EE5c \u0111\xE3 qu\xE1 h\u1EA1n'; barColor = 'var(--red-500)'; }

  statusEl.textContent = statusText;
  statusEl.style.color = barColor;
  barEl.style.width = score + '%';
  barEl.style.background = barColor;

  const overdues = items.filter(i => i.status === 'overdue');
  const warns = items.filter(i => i.status === 'warn');
  const parts = [];
  if (overdues.length) parts.push(\\\`\\\${overdues.length} h\u1EA1ng m\u1EE5c qu\xE1 h\u1EA1n\\\`);
  if (warns.length) parts.push(\\\`\\\${warns.length} h\u1EA1ng m\u1EE5c s\u1EAFp \u0111\u1EBFn h\u1EA1n\\\`);
  bkEl.textContent = parts.length ? parts.join(' \xB7 ') : 'T\u1EA5t c\u1EA3 h\u1EA1ng m\u1EE5c trong chu k\u1EF3 an to\xE0n';
}

function renderTimeline(items) {
  const km = S.km;
  const kmItems = items.filter(i => i.type === 'km');
  if (!kmItems.length) return;

  const RANGE = 20000;
  const maxKm = km + RANGE;

  // Build ticks: current + every 5000
  const tickStep = 5000;
  const firstTick = Math.ceil(km / tickStep) * tickStep;
  const ticks = [km];
  for (let t = firstTick; t <= maxKm; t += tickStep) ticks.push(t);

  // Sort items by next_km
  const sorted = [...kmItems].sort((a,b) => a.next_km - b.next_km);

  const axis = document.getElementById('tl-axis');
  const ticksEl = document.getElementById('tl-ticks');

  // Clear existing pins (keep progress + now)
  axis.querySelectorAll('.bd-timeline-pin').forEach(p => p.remove());

  // Render pins - alternate row heights to avoid overlap
  const pinHeights = [24, 44, 32, 56, 20, 48]; // line heights px
  sorted.forEach((item, i) => {
    if (item.next_km < km) {
      // overdue - show at left edge with negative offset indicator
      const pin = document.createElement('div');
      pin.className = 'bd-timeline-pin pin-overdue';
      pin.style.left = '0%';
      const lineH = 18;
      pin.innerHTML = \\\`
        <div class="bd-timeline-pin-line" style="height:\\\${lineH}px"></div>
        <div class="bd-timeline-pin-tag">\\\${item.name}</div>
      \\\`;
      axis.appendChild(pin);
      return;
    }
    if (item.next_km > maxKm) return; // beyond range, skip

    const leftPct = ((item.next_km - km) / RANGE * 100).toFixed(1);
    const lineH = pinHeights[i % pinHeights.length];
    const pinClass = item.status === 'warn' ? 'pin-warn' : item.status === 'overdue' ? 'pin-overdue' : 'pin-ok';

    const pin = document.createElement('div');
    pin.className = \\\`bd-timeline-pin \\\${pinClass}\\\`;
    pin.style.left = leftPct + '%';
    pin.style.top = '-5px';
    pin.innerHTML = \\\`
      <div class="bd-timeline-pin-dot"></div>
      <div class="bd-timeline-pin-line" style="height:\\\${lineH}px"></div>
      <div class="bd-timeline-pin-tag">\\\${item.name}</div>
    \\\`;
    axis.appendChild(pin);
  });

  // Render ticks
  ticksEl.innerHTML = '';
  ticks.forEach(t => {
    const pct = ((t - km) / RANGE * 100).toFixed(1);
    const div = document.createElement('div');
    div.className = 'bd-timeline-tick';
    div.style.left = pct + '%';
    div.textContent = t === km ? \\\`\\\${(t/1000).toFixed(0)}K km\\\` : \\\`+\\\${((t-km)/1000).toFixed(0)}K\\\`;
    ticksEl.appendChild(div);
  });

  document.getElementById('tl-label').textContent = \\\`Ti\u1EBFp theo trong \\\${RANGE.toLocaleString('vi-VN')} km t\u1EDBi \xB7 \\\${S.model} @ \\\${km.toLocaleString('vi-VN')} km\\\`;
}

function renderItems(items) {
  const container = document.getElementById('bd-items');
  const label = document.getElementById('items-label');

  const overdueCount = items.filter(i => i.status === 'overdue').length;
  const warnCount = items.filter(i => i.status === 'warn').length;
  const parts = [];
  if (overdueCount) parts.push(\\\`\\\${overdueCount} qu\xE1 h\u1EA1n\\\`);
  if (warnCount) parts.push(\\\`\\\${warnCount} s\u1EAFp \u0111\u1EBFn\\\`);
  label.textContent = \\\`H\u1EA1ng m\u1EE5c b\u1EA3o d\u01B0\u1EE1ng\\\${parts.length ? ' \xB7 ' + parts.join(', ') : ''}\\\`;

  const isEV = S.type === 'oto' && S.model && S.model.includes('EV');

  // Sort: overdue first, then warn, then ok
  const sorted = [...items].sort((a,b) => {
    const rank = { overdue: 0, warn: 1, ok: 2 };
    return (rank[a.status] ?? 2) - (rank[b.status] ?? 2);
  });

  container.innerHTML = sorted.map(item => {
    const icon = ICONS[item.icon] || ICONS.oil;
    const statusClass = \\\`is-\\\${item.status}\\\`;
    const yearBadge = isEV && item.type === 'year'
      ? \\\`<div class="bd-ev-badge"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> Xe \u0111i\u1EC7n</div>\\\`
      : '';
    return \\\`
      <div class="bd-item \\\${statusClass}">
        <div class="bd-item-icon">\\\${icon}</div>
        <div class="bd-item-body">
          \\\${yearBadge}
          <div class="bd-item-name">\\\${item.name}</div>
          <div class="bd-item-interval">\\\${item.note}</div>
          <div class="bd-item-bar-wrap">
            <div class="bd-item-bar" style="width:\\\${item.bar_pct}%"></div>
          </div>
        </div>
        <div class="bd-item-meta">
          <div class="bd-item-remaining">\\\${item.remaining_label.replace('C\xF2n ','').replace('Qu\xE1 h\u1EA1n ','').replace('km','').trim() || '\u2013'} <span style="font-size:10px;font-weight:700">\\\${item.type==='km'?'km':''}</span></div>
          <div class="bd-item-next-km">\\\${item.next_label}</div>
        </div>
      </div>
    \\\`;
  }).join('');

  // Animate bars after render
  requestAnimationFrame(() => {
    document.querySelectorAll('.bd-item-bar').forEach(bar => {
      const w = bar.style.width;
      bar.style.width = '0%';
      requestAnimationFrame(() => { bar.style.width = w; });
    });
  });
}

// \u2500\u2500 BOOKING DATA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

const GARAGES = {
  xemay: [
    { id:'hm1', name:'Honda Head Nguy\u1EC5n Th\u1ECB Th\u1EADp', type:'official', brand:'Honda', city:'HCM', district:'Qu\u1EADn 7', address:'123 Nguy\u1EC5n Th\u1ECB Th\u1EADp, Q.7', rating:4.8, wait:'2-3 ng\xE0y', momo:true },
    { id:'hm2', name:'Yamaha Town B\xECnh Th\u1EA1nh', type:'official', brand:'Yamaha', city:'HCM', district:'B\xECnh Th\u1EA1nh', address:'456 \u0110inh B\u1ED9 L\u0129nh, B\xECnh Th\u1EA1nh', rating:4.7, wait:'1-2 ng\xE0y', momo:true },
    { id:'hm3', name:'Garage Tu\u1EA5n Auto', type:'authorized', brand:'\u0110a h\xE3ng', city:'HCM', district:'Qu\u1EADn 10', address:'789 Ba Th\xE1ng Hai, Q.10', rating:4.6, wait:'Trong ng\xE0y', momo:true },
    { id:'hm4', name:'SYM Service Center G\xF2 V\u1EA5p', type:'official', brand:'SYM', city:'HCM', district:'G\xF2 V\u1EA5p', address:'100 Quang Trung, G\xF2 V\u1EA5p', rating:4.5, wait:'1-2 ng\xE0y', momo:false },
    { id:'hn1', name:'Honda Head C\u1EA7u Gi\u1EA5y', type:'official', brand:'Honda', city:'HN', district:'C\u1EA7u Gi\u1EA5y', address:'C\u1EA7u Gi\u1EA5y, H\xE0 N\u1ED9i', rating:4.8, wait:'2-3 ng\xE0y', momo:true },
    { id:'hn2', name:'Yamaha Town Ho\xE0ng Mai', type:'official', brand:'Yamaha', city:'HN', district:'Ho\xE0ng Mai', address:'Ho\xE0ng Mai, H\xE0 N\u1ED9i', rating:4.6, wait:'1-2 ng\xE0y', momo:false },
    { id:'hn3', name:'Garage \u0110\u1EE9c Anh Thanh Xu\xE2n', type:'authorized', brand:'\u0110a h\xE3ng', city:'HN', district:'Thanh Xu\xE2n', address:'Thanh Xu\xE2n, H\xE0 N\u1ED9i', rating:4.7, wait:'Trong ng\xE0y', momo:true },
  ],
  oto: [
    { id:'om1', name:'Toyota L\xFD Th\u01B0\u1EDDng Ki\u1EC7t', type:'official', brand:'Toyota', city:'HCM', district:'Qu\u1EADn 10', address:'555 L\xFD Th\u01B0\u1EDDng Ki\u1EC7t, Q.10', rating:4.8, wait:'2-3 ng\xE0y', momo:true },
    { id:'om2', name:'Honda \xD4 t\xF4 S\xE0i G\xF2n', type:'official', brand:'Honda', city:'HCM', district:'B\xECnh Th\u1EA1nh', address:'\u0110i\u1EC7n Bi\xEAn Ph\u1EE7, B\xECnh Th\u1EA1nh', rating:4.8, wait:'2-3 ng\xE0y', momo:true },
    { id:'om3', name:'Hyundai Kinh D\u01B0\u01A1ng V\u01B0\u01A1ng', type:'official', brand:'Hyundai', city:'HCM', district:'B\xECnh T\xE2n', address:'Kinh D\u01B0\u01A1ng V\u01B0\u01A1ng, B\xECnh T\xE2n', rating:4.6, wait:'1-2 ng\xE0y', momo:true },
    { id:'om4', name:'Garage Minh Trung Auto', type:'authorized', brand:'\u0110a h\xE3ng', city:'HCM', district:'Qu\u1EADn 3', address:'V\xF5 V\u0103n T\u1EA7n, Q.3', rating:4.6, wait:'Trong ng\xE0y', momo:true },
    { id:'om5', name:'VinFast Service Center Q.7', type:'official', brand:'VinFast', city:'HCM', district:'Qu\u1EADn 7', address:'Ph\xFA M\u1EF9 H\u01B0ng, Q.7', rating:4.7, wait:'1-2 ng\xE0y', momo:false },
    { id:'on1', name:'Toyota Ho\xE0ng Mai', type:'official', brand:'Toyota', city:'HN', district:'Ho\xE0ng Mai', address:'272 L\u0129nh Nam, Ho\xE0ng Mai', rating:4.7, wait:'2-3 ng\xE0y', momo:true },
    { id:'on2', name:'Kia C\u1EA7u Di\u1EC5n', type:'official', brand:'Kia', city:'HN', district:'Nam T\u1EEB Li\xEAm', address:'C\u1EA7u Di\u1EC5n, Nam T\u1EEB Li\xEAm', rating:4.6, wait:'1-2 ng\xE0y', momo:true },
    { id:'on3', name:'Auto Care \u0110\u1ED1ng \u0110a', type:'authorized', brand:'\u0110a h\xE3ng', city:'HN', district:'\u0110\u1ED1ng \u0110a', address:'L\xE1ng H\u1EA1, \u0110\u1ED1ng \u0110a', rating:4.5, wait:'Trong ng\xE0y', momo:false },
  ],
};

const TIME_SLOTS = ['08:00', '10:00', '14:00', '16:00'];

// Booking state
const BK = {
  step: 1,
  selectedServices: new Set(),
  city: 'HCM',
  garage: null,
  date: null,
  slot: null,
  lastComputedItems: [],
};

// \u2500\u2500 BOOKING FLOW \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

function openBooking() {
  const section = document.getElementById('bk-section');
  section.classList.add('show');
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  renderBkServices();
}

function renderBkServices() {
  const items = BK.lastComputedItems;
  const container = document.getElementById('bk-services');
  // Pre-select overdue + warn
  BK.selectedServices.clear();
  items.filter(i => i.type === 'km' && (i.status === 'overdue' || i.status === 'warn'))
    .forEach(i => BK.selectedServices.add(i.id));

  container.innerHTML = items.filter(i => i.type === 'km').map(item => {
    const isChecked = BK.selectedServices.has(item.id);
    const isUrgent = item.status === 'overdue';
    const badgeClass = item.status === 'overdue' ? 'badge-urgent' : item.status === 'warn' ? 'badge-soon' : 'badge-ok';
    const badgeText = item.status === 'overdue' ? 'Qu\xE1 h\u1EA1n' : item.status === 'warn' ? 'S\u1EAFp \u0111\u1EBFn' : 'C\xF2n h\u1EA1n';
    return \\\`
      <div class="bk-service-item \\\${isChecked?'checked':''} \\\${isUrgent?'is-urgent':''}"
           onclick="toggleService('\\\${item.id}', this)">
        <div class="bk-service-check">
          \\\${isChecked ? \\\`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>\\\` : ''}
        </div>
        <div class="bk-service-name">\\\${item.name}</div>
        <div class="bk-service-badge \\\${badgeClass}">\\\${badgeText}</div>
      </div>
    \\\`;
  }).join('');
  updateBkStep1Count();
}

function toggleService(id, el) {
  if (BK.selectedServices.has(id)) {
    BK.selectedServices.delete(id);
    el.classList.remove('checked');
    el.querySelector('.bk-service-check').innerHTML = '';
  } else {
    BK.selectedServices.add(id);
    el.classList.add('checked');
    el.querySelector('.bk-service-check').innerHTML = \\\`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>\\\`;
  }
  updateBkStep1Count();
}

function updateBkStep1Count() {
  const n = BK.selectedServices.size;
  document.getElementById('bk-selected-count').textContent = n ? \\\`\u0110\xE3 ch\u1ECDn \\\${n} d\u1ECBch v\u1EE5\\\` : 'Ch\u1ECDn \xEDt nh\u1EA5t 1 d\u1ECBch v\u1EE5';
  document.getElementById('bk-btn-1').disabled = n === 0;
}

function bkSelectCity(city) {
  BK.city = city;
  BK.garage = null;
  document.querySelectorAll('.bk-city-tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  renderBkGarages();
  document.getElementById('bk-btn-2').disabled = true;
}

function renderBkGarages() {
  const all = GARAGES[S.type] || GARAGES.oto;
  const filtered = BK.city === 'ALL' ? all : all.filter(g => g.city === BK.city);
  const container = document.getElementById('bk-garages');
  container.innerHTML = filtered.map(g => \\\`
    <div class="bk-garage-card \\\${BK.garage?.id === g.id ? 'selected' : ''}"
         data-id="\\\${g.id}" onclick="selectGarage('\\\${g.id}', this)">
      <div class="bk-garage-type \\\${g.type}">\\\${g.type === 'official' ? 'Ch\xEDnh h\xE3ng' : '\u1EE6y quy\u1EC1n BH'}</div>
      <div class="bk-garage-name">\\\${g.name}</div>
      <div class="bk-garage-meta">
        <span class="bk-garage-rating">\u2605 \\\${g.rating}</span>
        \\\${g.momo ? \\\`<span class="bk-garage-momo">MoMo Pay</span>\\\` : ''}
        <br>\\\${g.district} \xB7 \\\${g.wait}
      </div>
    </div>
  \\\`).join('') || '<div style="grid-column:span 2;text-align:center;padding:24px;color:var(--gray-400);font-size:13px">Kh\xF4ng c\xF3 garage \u1EDF khu v\u1EF1c n\xE0y</div>';
}

function selectGarage(id, el) {
  const all = GARAGES[S.type] || GARAGES.oto;
  BK.garage = all.find(g => g.id === id);
  document.querySelectorAll('.bk-garage-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('bk-btn-2').disabled = false;
}

function renderBkDates() {
  const container = document.getElementById('bk-dates');
  const dow = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  const dates = [];
  const today = new Date();
  for (let i = 1; i <= 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    if (d.getDay() !== 0) dates.push(d); // skip Sunday
    if (dates.length === 6) break;
  }
  if (!BK.date) BK.date = dates[0].toISOString().slice(0,10);
  container.innerHTML = dates.map(d => {
    const key = d.toISOString().slice(0,10);
    const isActive = key === BK.date;
    return \\\`
      <button class="bk-date-btn \\\${isActive?'active':''}" onclick="selectDate('\\\${key}', this)">
        <div class="bk-date-dow">\\\${dow[d.getDay()]}</div>
        <div class="bk-date-day">\\\${d.getDate()}/\\\${d.getMonth()+1}</div>
      </button>
    \\\`;
  }).join('');
}

function selectDate(key, el) {
  BK.date = key;
  BK.slot = null;
  document.querySelectorAll('.bk-date-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  renderBkSlots();
  updateBkSummary();
}

function renderBkSlots() {
  // Randomly mark 1 slot as full for realism
  const fullSlot = TIME_SLOTS[1];
  const container = document.getElementById('bk-slots');
  container.innerHTML = TIME_SLOTS.map(t => {
    const isFull = t === fullSlot;
    const isActive = t === BK.slot;
    return \\\`<button class="bk-slot \\\${isFull?'full':''} \\\${isActive?'active':''}"
      \\\${isFull?'disabled':''} onclick="selectSlot('\\\${t}', this)">\\\${t}</button>\\\`;
  }).join('');
}

function selectSlot(t, el) {
  BK.slot = t;
  document.querySelectorAll('.bk-slot').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  updateBkSummary();
}

function updateBkSummary() {
  const services = [...BK.selectedServices];
  const items = BK.lastComputedItems;
  const names = services.map(id => items.find(i => i.id === id)?.name).filter(Boolean);
  const dateStr = BK.date ? (() => {
    const d = new Date(BK.date + 'T00:00:00');
    return \\\`\\\${d.getDate()}/\\\${d.getMonth()+1}/\\\${d.getFullYear()}\\\`;
  })() : '--';
  document.getElementById('bk-summary').innerHTML = \\\`
    <strong>Xe:</strong> \\\${S.brand} \\\${S.model} (\\\${S.year})<br>
    <strong>Garage:</strong> \\\${BK.garage?.name || '--'} \xB7 \\\${BK.garage?.district || ''}<br>
    <strong>D\u1ECBch v\u1EE5:</strong> \\\${names.join(', ') || '--'}<br>
    <strong>Ng\xE0y:</strong> \\\${dateStr} \xB7 \\\${BK.slot || '--'}
  \\\`;
}

function bkGoStep(step) {
  // Validate
  if (step === 2 && BK.selectedServices.size === 0) return;
  if (step === 3 && !BK.garage) return;

  BK.step = step;

  // Update panels
  [1,2,3].forEach(s => {
    document.getElementById(\\\`bk-panel-\\\${s}\\\`).classList.toggle('active', s === step);
  });

  // Update dots
  [1,2,3].forEach(s => {
    const dot = document.getElementById(\\\`bk-dot-\\\${s}\\\`);
    dot.classList.remove('active','done');
    if (s < step) dot.classList.add('done'), dot.innerHTML = \\\`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>\\\`;
    else if (s === step) dot.classList.add('active'), dot.textContent = s;
    else dot.textContent = s;
  });
  [1,2].forEach(s => {
    document.getElementById(\\\`bk-line-\\\${s}\\\`).classList.toggle('done', s < step);
  });

  // Sub text
  const subs = ['', 'Ch\u1ECDn garage ph\xF9 h\u1EE3p v\u1EDBi xe c\u1EE7a b\u1EA1n', 'Ch\u1ECDn ng\xE0y & gi\u1EDD, x\xE1c nh\u1EADn th\xF4ng tin'];
  document.getElementById('bk-header-sub').textContent = subs[step] || '';

  // Step-specific init
  if (step === 2) { BK.garage = null; document.getElementById('bk-btn-2').disabled = true; renderBkGarages(); }
  if (step === 3) { renderBkDates(); renderBkSlots(); updateBkSummary(); }

  document.getElementById('bk-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function bkConfirm() {
  const name = document.getElementById('bk-name').value.trim();
  const phone = document.getElementById('bk-phone').value.trim();
  if (!name || !phone) { toast('Vui l\xF2ng nh\u1EADp h\u1ECD t\xEAn v\xE0 s\u1ED1 \u0111i\u1EC7n tho\u1EA1i'); return; }
  if (!BK.slot) { toast('Vui l\xF2ng ch\u1ECDn khung gi\u1EDD'); return; }

  // Show panels hidden, show confirm
  [1,2,3].forEach(s => document.getElementById(\\\`bk-panel-\\\${s}\\\`).classList.remove('active'));
  [1,2,3].forEach(s => {
    const dot = document.getElementById(\\\`bk-dot-\\\${s}\\\`);
    dot.classList.remove('active'); dot.classList.add('done');
    dot.innerHTML = \\\`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>\\\`;
  });
  [1,2].forEach(s => document.getElementById(\\\`bk-line-\\\${s}\\\`).classList.add('done'));

  const items = BK.lastComputedItems;
  const names = [...BK.selectedServices].map(id => items.find(i => i.id === id)?.name).filter(Boolean);
  const dateStr = (() => {
    const d = new Date(BK.date + 'T00:00:00');
    return \\\`\\\${d.getDate()}/\\\${d.getMonth()+1}/\\\${d.getFullYear()}\\\`;
  })();
  document.getElementById('bk-confirm-detail').innerHTML = \\\`
    <strong>Xe:</strong> \\\${S.brand} \\\${S.model} (\\\${S.year})<br>
    <strong>Garage:</strong> \\\${BK.garage.name}<br>
    <strong>\u0110\u1ECBa ch\u1EC9:</strong> \\\${BK.garage.address}<br>
    <strong>D\u1ECBch v\u1EE5:</strong> \\\${names.join(', ')}<br>
    <strong>L\u1ECBch h\u1EB9n:</strong> \\\${dateStr} \xB7 \\\${BK.slot}<br>
    <strong>Li\xEAn h\u1EC7:</strong> \\\${name} \xB7 \\\${phone}
  \\\`;
  document.getElementById('bk-confirm').classList.add('show');
  document.getElementById('bk-header-sub').textContent = 'L\u1ECBch h\u1EB9n \u0111\xE3 \u0111\u01B0\u1EE3c ghi nh\u1EADn';
  document.getElementById('bk-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetBooking() {
  BK.step = 1; BK.selectedServices.clear(); BK.garage = null; BK.date = null; BK.slot = null;
  document.getElementById('bk-confirm').classList.remove('show');
  [1,2,3].forEach(s => {
    const dot = document.getElementById(\\\`bk-dot-\\\${s}\\\`);
    dot.classList.remove('done','active');
    dot.textContent = s;
    document.getElementById(\\\`bk-panel-\\\${s}\\\`).classList.remove('active');
  });
  document.getElementById('bk-dot-1').classList.add('active');
  document.getElementById('bk-panel-1').classList.add('active');
  document.getElementById('bk-line-1').classList.remove('done');
  document.getElementById('bk-line-2').classList.remove('done');
  document.getElementById('bk-header-sub').textContent = 'Ch\u1ECDn d\u1ECBch v\u1EE5 \u2192 T\xECm garage \u2192 X\xE1c nh\u1EADn l\u1ECBch h\u1EB9n';
  renderBkServices();
}

// \u2500\u2500 TOAST \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg; el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2400);
}

// \u2500\u2500 BOOT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

var garageState = { type: 'xemay', city: 'HCM' };
init();
renderGarageSection();
animateOdometer();

// \u2500\u2500 HERO ODOMETER ANIMATION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

function animateOdometer() {
  const el = document.getElementById('hero-odo');
  if (!el) return;
  const target = 24500;
  const duration = 1800;
  const start = performance.now();
  function step(now) {
    const p = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(ease * target).toLocaleString('vi-VN');
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// \u2500\u2500 GARAGE SECTION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

function renderGarageSection() {
  const all = GARAGES[garageState.type] || [];
  const filtered = all.filter(g => g.city === garageState.city);
  const container = document.getElementById('garage-grid');
  if (!container) return;
  container.innerHTML = filtered.map(g => \\\`
    <div class="garage-card">
      <div class="garage-card-top">
        <div>
          <div class="garage-card-name">\\\${g.name}</div>
          <div class="garage-card-brand">\\\${g.brand}</div>
        </div>
        <div class="garage-card-badge \\\${g.type}">\\\${g.type === 'official' ? 'Ch\xEDnh h\xE3ng' : '\u1EE6y quy\u1EC1n'}</div>
      </div>
      <div class="garage-card-meta">
        <div class="garage-card-row">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          \\\${g.address}
        </div>
        <div class="garage-card-row">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Ch\u1EDD \\\${g.wait}
        </div>
      </div>
      <div class="garage-card-footer">
        <div class="garage-rating">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          \\\${g.rating}
          \\\${g.momo ? '<span class="garage-momo-badge">MoMo Pay</span>' : ''}
        </div>
        <button class="garage-book-btn" data-garage-id="\\\${g.id}" data-garage-name="\\\${g.name}" onclick="bookFromGarage(this)">\u0110\u1EB7t l\u1ECBch</button>
      </div>
    </div>
  \\\`).join('');
}

function garageFilter(key, val, btn) {
  garageState[key] = val;
  const group = btn.closest('.garage-filter-group');
  group.querySelectorAll('.gf-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderGarageSection();
}

function bookFromGarage(btn) {
  const name = btn.dataset.garageName;
  // Pre-select garage in booking flow and open it
  const garageId = btn.dataset.garageId;
  // Find matching garage in BK data
  openBooking();
  // After rendering, auto-select this garage
  setTimeout(() => {
    bkGoStep(2);
    setTimeout(() => {
      const card = document.querySelector(\\\`.bk-garage-card[data-id="\\\${garageId}"]\\\`);
      if (card) { selectGarage(garageId, card); }
    }, 100);
  }, 300);
}
<\/script> `])), renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(`<style>${rawCss}</style>`)}` }), maybeRenderHead()) })}`;
}, "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/bao-duong.astro", void 0);

const $$file = "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/bao-duong.astro";
const $$url = "/tien-ich-giao-thong/bao-duong";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BaoDuong,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
