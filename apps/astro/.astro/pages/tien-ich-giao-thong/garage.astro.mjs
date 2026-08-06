import { c as createComponent, e as renderComponent, b as renderTemplate, f as renderScript, m as maybeRenderHead, F as Fragment, u as unescapeHTML } from '../../chunks/astro/server_BMOddyS3.mjs';
import 'piccolore';
import { $ as $$VehicleHub } from '../../chunks/VehicleHub_Msovdq2n.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Garage = createComponent(($$result, $$props, $$slots) => {
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
  --green-500: #16A34A;
  --green-50:  #F0FDF4;
  --amber-500: #D97706;
  --amber-50:  #FFFBEB;
  --red-500:   #DC2626;
  --red-50:    #FEF2F2;
  --shadow-s:  0 1px 3px rgba(28,23,26,.08), 0 1px 2px rgba(28,23,26,.06);
  --shadow-m:  0 4px 12px rgba(28,23,26,.1), 0 2px 4px rgba(28,23,26,.06);
  --shadow-l:  0 8px 28px rgba(28,23,26,.14), 0 4px 8px rgba(28,23,26,.06);
  --r-sm:      8px;
  --r-md:      12px;
  --r-lg:      16px;
  --content:   1240px;
}
* { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
html { scroll-behavior: smooth; }
body {
  font-family: 'MoMoTrustSans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  color: var(--gray-900);
  background: var(--bg);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
}
a { color: inherit; text-decoration: none; }
button { font: inherit; cursor: pointer; border: none; }
input { font: inherit; }

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
/* Nav hamburger button */
.nav-menu-btn{display:none;margin-left:auto;width:36px;height:36px;border-radius:8px;background:none;border:none;color:var(--gray-700);cursor:pointer;align-items:center;justify-content:center;flex-shrink:0;transition:background .15s,color .15s}
.nav-menu-btn:hover{background:var(--gray-100)}
/* Nav sidebar */
.nav-sidebar-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:1000;backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}
.nav-sidebar-overlay.open{display:block}
.nav-sidebar{position:fixed;top:0;right:0;bottom:0;width:300px;background:#1a2535;z-index:1001;transform:translateX(100%);transition:transform .28s cubic-bezier(.4,0,.2,1);display:flex;flex-direction:column;overflow:hidden}
.nav-sidebar.open{transform:translateX(0)}
.nav-sidebar-header{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid rgba(255,255,255,.1);flex-shrink:0}
.nav-sidebar-logo{font-size:15px;font-weight:800;color:#fff}
.nav-sidebar-logo em{color:var(--pink-500);font-style:normal}
.nav-sidebar-close{width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,.1);border:none;display:grid;place-items:center;color:rgba(255,255,255,.8);cursor:pointer;transition:background .15s,color .15s}
.nav-sidebar-close:hover{background:rgba(255,255,255,.18);color:#fff}
.nav-sidebar-body{flex:1;overflow-y:auto;padding:8px 0 32px}
.nav-sidebar-body::-webkit-scrollbar{width:3px}
.nav-sidebar-body::-webkit-scrollbar-thumb{background:rgba(255,255,255,.15);border-radius:99px}
.nav-sidebar-section{margin-bottom:2px}
.nav-sidebar-group{display:flex;align-items:center;gap:6px;padding:12px 20px;font-size:13px;font-weight:700;color:rgba(255,255,255,.6);cursor:pointer;user-select:none;transition:color .15s,background .15s;border-radius:0}
.nav-sidebar-group:hover{color:#fff;background:rgba(255,255,255,.06)}
.nav-sidebar-group svg{flex:none;transition:transform .2s;margin-left:auto;color:rgba(255,255,255,.3)}
.nav-sidebar-group.expanded{color:#fff}
.nav-sidebar-group.expanded svg{transform:rotate(180deg);color:rgba(255,255,255,.5)}
.nav-sidebar-links{display:none;padding:0 0 6px}
.nav-sidebar-links.open{display:block}
.nav-sidebar-col-label{font-size:10px;font-weight:600;color:rgba(255,255,255,.28);letter-spacing:.07em;text-transform:uppercase;padding:10px 20px 4px}
.nav-sidebar-link{display:block;padding:9px 20px;font-size:14px;font-weight:500;color:rgba(255,255,255,.75);text-decoration:none;transition:color .12s,background .12s}
.nav-sidebar-link:hover{color:#fff;background:rgba(255,255,255,.07)}
.nav-sidebar-divider{height:1px;background:rgba(255,255,255,.07);margin:4px 0}
@media(max-width:800px){
  .nav-inner{height:48px;padding:0 10px;gap:8px}
  .nav-back span{display:none}
  .nav-sep{display:none}
  .logo-text{font-size:13px}
  .logo-icon{width:28px;height:28px}
  .nav-links{display:none}
  .mega{display:none}
  .nav-menu-btn{display:flex}
}

/* \u2500\u2500 BREADCRUMB + HERO \u2500\u2500 */
.page-top {
  background: var(--white);
  border-bottom: 1px solid var(--gray-200);
}
.page-top-inner {
  max-width: var(--content); margin: 0 auto;
  padding: 16px 24px 18px;
}
.breadcrumb {
  display: flex; align-items: center; gap: 6px;
  font-size: 12px; color: var(--gray-500);
  margin-bottom: 12px;
}
.breadcrumb a { color: var(--gray-500); }
.breadcrumb a:hover { color: var(--pink-500); }
.breadcrumb svg { flex: none; }
.page-title {
  font-family: 'MoMoTrustDisplay', sans-serif;
  font-size: 24px; font-weight: 700; line-height: 1.2;
  color: var(--gray-900); margin-bottom: 6px;
}
.page-desc { font-size: 13px; color: var(--gray-600); line-height: 1.6; }
.page-stats {
  display: flex; gap: 10px; flex-wrap: wrap; margin-top: 14px;
}
.page-stat {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 11px; font-weight: 700; color: var(--gray-900);
  background: var(--gray-50); border: 1px solid var(--gray-200);
  padding: 5px 12px; border-radius: 999px;
}
.page-stat strong { color: var(--pink-500); font-weight: 800; }
.page-stat svg { flex: none; color: var(--pink-500); }

/* \u2500\u2500 FILTER BAR \u2500\u2500 */
.filter-bar {
  background: var(--white);
  border-bottom: 1px solid var(--gray-200);
}
.filter-bar-row {
  max-width: var(--content); margin: 0 auto;
  padding: 10px 24px;
  display: flex; align-items: center; gap: 12px;
  overflow-x: auto; -ms-overflow-style: none; scrollbar-width: none;
}
.filter-bar-row::-webkit-scrollbar { display: none; }
/* type switcher */
.type-switcher {
  display: flex; background: var(--gray-100);
  border-radius: 999px; padding: 3px; gap: 2px; flex: none;
}
.type-btn {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 6px 14px; border-radius: 999px;
  font-size: 12px; font-weight: 700; color: var(--gray-500);
  background: transparent; white-space: nowrap;
  transition: background .15s, color .15s, box-shadow .15s;
}
.type-btn.active {
  background: var(--white); color: var(--gray-900);
  box-shadow: var(--shadow-s);
}
/* divider between switcher & chips */
.filter-divider {
  width: 1px; height: 20px; background: var(--gray-200); flex: none;
}
.filter-bar-inner {
  display: flex; align-items: center; gap: 8px; flex: none;
}
.filter-bar-inner::-webkit-scrollbar { display: none; }
.filter-chip {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 7px 14px; border-radius: 999px;
  background: var(--white); border: 1.5px solid var(--gray-200);
  font-size: 12px; font-weight: 600; color: var(--gray-700);
  white-space: nowrap; flex: none;
  transition: border-color .15s, background .15s, color .15s;
}
.filter-chip:hover { border-color: var(--gray-400); }
.filter-chip.active {
  background: var(--gray-900); border-color: var(--gray-900); color: #fff;
}
.filter-chip .brand-dot {
  width: 8px; height: 8px; border-radius: 50%; flex: none;
}

/* \u2500\u2500 SPLIT LAYOUT \u2500\u2500 */
.split {
  display: flex;
  flex-direction: column;
  flex: 1;
}

/* \u2500\u2500 LIST PANE \u2500\u2500 */
.list-pane {
  order: 1;
  overflow-y: visible;
  background: var(--bg);
  border-top: 1px solid var(--gray-200);
}
.list-pane::-webkit-scrollbar { width: 4px; }
.list-pane::-webkit-scrollbar-track { background: transparent; }
.list-pane::-webkit-scrollbar-thumb { background: var(--gray-300); border-radius: 99px; }

.list-header {
  padding: 14px 16px 10px;
  display: flex; align-items: center; justify-content: space-between;
  position: sticky; top: 0; background: var(--bg); z-index: 10;
  border-bottom: 1px solid var(--gray-100);
}
.list-header-left h2 {
  font-size: 14px; font-weight: 700; color: var(--gray-900);
}
.list-header-left p {
  font-size: 11px; color: var(--gray-500); margin-top: 2px;
}
.sort-btn {
  display: flex; align-items: center; gap: 5px;
  font-size: 11px; font-weight: 600; color: var(--gray-600);
  background: var(--white); border: 1px solid var(--gray-200);
  padding: 6px 10px; border-radius: var(--r-sm);
}
.sort-btn svg { flex: none; color: var(--gray-500); }
.sort-btn select {
  border: 0; outline: 0; background: transparent;
  font-size: 11px; font-weight: 700; color: var(--gray-900); cursor: pointer;
}

.station-list { padding: 10px 10px 20px; display: flex; flex-direction: column; gap: 8px; }

.station-card {
  background: var(--white);
  border: 1.5px solid var(--gray-200);
  border-radius: var(--r-md);
  padding: 12px;
  cursor: pointer;
  transition: border-color .15s, box-shadow .15s, transform .1s;
  display: flex; gap: 12px; align-items: flex-start;
}
.station-card:hover {
  border-color: var(--gray-300);
  box-shadow: var(--shadow-m);
  transform: translateY(-1px);
}
.station-card.is-active {
  border-color: var(--pink-500);
  box-shadow: 0 0 0 3px rgba(235,47,150,.12);
}

.station-brand-badge {
  width: 44px; height: 44px; border-radius: 10px;
  display: grid; place-items: center; flex: none;
  font-size: 9px; font-weight: 900; color: #fff; letter-spacing: .02em;
  text-transform: uppercase;
}
.station-info { flex: 1; min-width: 0; }
.station-name-row {
  display: flex; align-items: baseline; gap: 6px; margin-bottom: 2px; min-width: 0;
}
.station-name {
  font-size: 13px; font-weight: 700; color: var(--gray-900);
  line-height: 1.3; flex: 1; min-width: 0;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.station-rating {
  font-size: 11px; font-weight: 700; color: #d97706; flex-shrink: 0;
}
.station-addr {
  font-size: 11px; color: var(--gray-500); line-height: 1.4;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  margin-bottom: 7px;
}
.station-meta {
  display: flex; align-items: center; gap: 6px; flex-wrap: wrap;
}
.badge {
  display: inline-flex; align-items: center; gap: 3px;
  font-size: 10px; font-weight: 700;
  padding: 2px 8px; border-radius: 999px;
}
.badge-open { background: var(--green-50); color: var(--green-500); }
.badge-closed { background: var(--red-50); color: var(--red-500); }
.badge-svc { background: var(--gray-100); color: var(--gray-600); }
.badge-dist { background: var(--gray-100); color: var(--gray-600); font-size: 10px; }

.station-price-row {
  display: flex; align-items: center; gap: 8px; margin-top: 6px;
}
.fuel-pill {
  display: inline-flex; align-items: center; gap: 3px;
  font-size: 10px; color: var(--gray-600);
}
.fuel-pill strong { font-weight: 700; color: var(--gray-900); }

/* \u2500\u2500 MAP PANE \u2500\u2500 */
.map-pane {
  order: -1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  height: 260px;
  flex-shrink: 0;
  isolation: isolate;
}
#map {
  width: 100%;
  height: 100%;
  flex: 1;
  background: #e9eef3;
}
.leaflet-container { font-family: 'MoMoTrustSans', sans-serif; }
.leaflet-control-zoom { display: none !important; }
.leaflet-control-attribution {
  font-size: 9px !important;
  background: rgba(255,255,255,.85) !important;
  padding: 2px 7px !important;
}

/* Map overlay badge */
.map-badge {
  position: absolute; top: 14px; left: 14px; z-index: 400;
  background: rgba(255,255,255,.96); backdrop-filter: blur(10px);
  border-radius: 999px; padding: 8px 14px;
  font-size: 11px; font-weight: 700; color: var(--gray-900);
  box-shadow: var(--shadow-m);
  display: flex; align-items: center; gap: 7px;
}
.map-badge i {
  width: 7px; height: 7px; border-radius: 50%; background: var(--pink-500);
  display: inline-block; animation: pulse 1.6s infinite;
}
@keyframes pulse {
  0%,100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.6); opacity: .5; }
}

/* Map control stack */
.map-ctrl {
  position: absolute; top: 14px; right: 14px; z-index: 400;
  display: flex; flex-direction: column; gap: 6px;
}
.map-ctrl-btn {
  width: 38px; height: 38px; border-radius: 10px;
  background: rgba(255,255,255,.96); backdrop-filter: blur(10px);
  border: 0; display: grid; place-items: center;
  color: var(--gray-900);
  box-shadow: 0 2px 10px rgba(0,0,0,.1), 0 0 0 1px rgba(0,0,0,.04);
  cursor: pointer; transition: transform .12s, background .12s;
  font-size: 16px;
}
.map-ctrl-btn:hover { background: #fff; transform: translateY(-1px); }
.map-ctrl-btn.active svg { color: var(--pink-500); }

/* Custom pin marker */
.pin {
  display: inline-flex; align-items: center; gap: 4px;
  background: #fff; border-radius: 999px;
  padding: 4px 9px 4px 5px;
  font-size: 10.5px; font-weight: 800; color: var(--gray-900);
  box-shadow: 0 2px 6px rgba(0,0,0,.18), 0 0 0 1px rgba(0,0,0,.06);
  white-space: nowrap;
  cursor: pointer;
  transform: translate(-50%, -100%) translateY(-4px);
  position: relative;
  transition: transform .15s, background .15s, color .15s;
}
.pin::after {
  content: ''; position: absolute; bottom: -5px; left: 50%;
  width: 8px; height: 8px; background: #fff;
  transform: translateX(-50%) rotate(45deg);
  box-shadow: 2px 2px 4px rgba(0,0,0,.08);
  z-index: -1;
}
.pin.active {
  background: var(--pink-500); color: #fff;
  transform: translate(-50%, -100%) translateY(-4px) scale(1.15);
  box-shadow: 0 4px 14px rgba(235,47,150,.45), 0 0 0 3px #fff;
}
.pin.active::after { background: var(--pink-500); }
.pin-icon {
  width: 20px; height: 20px; border-radius: 50%;
  display: grid; place-items: center; flex: none;
  font-size: 10px; color: #fff;
}
.pin-garage { font-size: 10px; }
.pin-garage.active { background: var(--gray-900); color: #fff; }
.pin-garage.active::after { background: var(--gray-900); }
.pin.active .pin-icon { background: rgba(255,255,255,.25) !important; }

/* Cluster */
.marker-cluster-small, .marker-cluster-medium, .marker-cluster-large {
  background: rgba(235,47,150,.15) !important;
}
.marker-cluster-small div, .marker-cluster-medium div, .marker-cluster-large div {
  background: linear-gradient(135deg, var(--pink-500) 0%, var(--pink-600) 100%) !important;
  color: #fff !important;
  font-family: 'MoMoTrustSans', sans-serif; font-weight: 800 !important;
  box-shadow: 0 4px 14px rgba(235,47,150,.4) !important;
  border: 2px solid #fff !important;
}

/* User location dot */
.me-dot { position: relative; width: 14px; height: 14px; }
.me-dot::before {
  content: ''; position: absolute; inset: -8px; border-radius: 50%;
  background: rgba(33,150,243,.2); animation: meRing 2s ease-out infinite;
}
.me-dot::after {
  content: ''; position: absolute; inset: 0; border-radius: 50%;
  background: #2196f3; border: 3px solid #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,.3);
}
@keyframes meRing {
  0% { transform: scale(.5); opacity: .85; }
  100% { transform: scale(2.4); opacity: 0; }
}

/* Detail drag handle */
.detail-drag-handle {
  flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  padding: 10px 0 2px;
}
.detail-drag-handle::before {
  content: '';
  width: 36px; height: 4px;
  background: var(--gray-300); border-radius: 99px;
}

/* Detail column (side panel) */
.detail-panel {
  position: fixed;
  bottom: 0; left: 0; right: 0;
  width: 100%; height: 80vh;
  background: var(--white);
  border-radius: var(--r-lg) var(--r-lg) 0 0;
  border-top: 1px solid var(--gray-200);
  display: flex; flex-direction: column;
  overflow: hidden;
  transform: translateY(100%);
  transition: transform .28s cubic-bezier(.4,0,.2,1);
  z-index: 300;
  box-shadow: 0 -8px 32px rgba(28,23,26,.15);
}
.detail-panel.open { transform: translateY(0); }

/* Card strip */
.card-strip { display: none; }
.detail-topbar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 10px 12px; border-bottom: 1px solid var(--gray-200); flex-shrink: 0;
  background: var(--white);
}
.detail-back {
  display: inline-flex; align-items: center; gap: 5px;
  height: 30px; padding: 0 12px 0 8px; border-radius: 999px;
  background: var(--white); border: 1px solid var(--gray-200);
  font-size: 11px; font-weight: 700; color: var(--gray-900);
  transition: all .15s;
}
.detail-back:hover { border-color: var(--pink-500); color: var(--pink-500); }
.detail-close {
  width: 30px; height: 30px; border-radius: 999px;
  background: var(--white); border: 1px solid var(--gray-200);
  display: grid; place-items: center;
  transition: all .15s;
}
.detail-close:hover { border-color: var(--gray-900); }
.detail-info-block {
  padding: 14px 14px 12px; border-bottom: 1px solid var(--gray-200); flex-shrink: 0;
  background: var(--white);
}
.detail-info-top { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 10px; }
.detail-icon {
  width: 56px; height: 56px; border-radius: 12px; flex: none;
  display: grid; place-items: center;
  font-size: 16px; font-weight: 900; color: #fff;
  letter-spacing: .02em;
}
.detail-info-main { flex: 1; min-width: 0; }
.detail-name {
  font-size: 14px; font-weight: 900; color: var(--gray-900); margin: 0 0 4px;
  text-transform: uppercase; letter-spacing: .02em; line-height: 1.2;
}
.detail-status-inline { display: flex; align-items: center; gap: 6px; margin-bottom: 4px; }
.detail-row { display: flex; align-items: flex-start; gap: 7px; margin-bottom: 6px; font-size: 11.5px; color: var(--gray-500); }
.detail-row:last-child { margin-bottom: 0; }
.detail-row svg { flex: none; margin-top: 1px; color: var(--pink-500); }
.detail-row .detail-hours-inline { color: var(--green-500); font-weight: 600; }
.detail-scroll { flex: 1; overflow-y: auto; padding: 14px; }
.detail-desc { font-size: 12px; color: var(--gray-500); line-height: 1.6; margin: 0 0 14px; }
.detail-actions { display: flex; flex-direction: column; gap: 8px; padding-top: 4px; }
.btn-primary {
  display: flex; align-items: center; justify-content: center; gap: 6px;
  background: var(--pink-500); color: #fff; border-radius: 10px;
  padding: 13px; font-size: 14px; font-weight: 800;
  transition: background .15s, transform .15s;
}
.btn-primary:hover { background: var(--pink-600); transform: translateY(-1px); }
.btn-secondary {
  display: flex; align-items: center; justify-content: center; gap: 6px;
  background: var(--white); color: var(--gray-900); border: 1px solid var(--gray-200); border-radius: 10px;
  padding: 11px; font-size: 13px; font-weight: 700;
  transition: border-color .15s;
}
.btn-secondary svg { color: var(--pink-500); }
.btn-secondary:hover { border-color: var(--pink-500); }
.detail-actions-split { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.detail-section { margin-bottom: 16px; }
.detail-section-title {
  font-size: 11px; font-weight: 700; color: var(--gray-500);
  text-transform: uppercase; letter-spacing: .06em;
  margin-bottom: 8px;
}
.detail-fuel-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 6px;
}
.detail-fuel-item {
  background: var(--gray-50); border: 1px solid var(--gray-100);
  border-radius: var(--r-sm); padding: 8px 10px;
}
.detail-fuel-type { font-size: 10px; color: var(--gray-500); margin-bottom: 2px; }
.detail-fuel-price { font-size: 14px; font-weight: 800; color: var(--gray-900); }
.detail-fuel-unit { font-size: 10px; color: var(--gray-500); font-weight: 400; }
.detail-hero { height: 130px; position: relative; overflow: hidden; flex-shrink: 0; }
.detail-hero-logo {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  font-size: 40px; font-weight: 900; color: rgba(255,255,255,.3);
  font-family: 'MoMoTrustDisplay', sans-serif;
  letter-spacing: -.02em;
}
.momo-overlay {
  position: absolute; bottom: 0; left: 0; right: 0;
  background: linear-gradient(0deg, rgba(0,0,0,.55) 0%, transparent 100%);
  padding: 12px 12px 10px;
  display: flex; align-items: center; gap: 8px;
}
.momo-overlay-badge {
  display: inline-flex; align-items: center; gap: 5px;
  background: var(--pink-500); color: #fff;
  border-radius: 6px; padding: 4px 9px;
  font-size: 10px; font-weight: 800; white-space: nowrap; flex: none;
}
.momo-overlay-badge img { width: 13px; height: 13px; border-radius: 3px; object-fit: contain; background: #fff; }
.momo-overlay-text { font-size: 10px; color: rgba(255,255,255,.88); line-height: 1.35; }
.momo-overlay-text strong { color: #fff; display: block; font-size: 10.5px; }

/* \u2500\u2500 TRAVEL CONTROL \u2500\u2500 */
.travel-bar {
  flex-shrink: 0;
  background: rgba(255,255,255,.97);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid var(--gray-200);
  padding: 12px 16px;
  display: flex; align-items: center; gap: 12px;
  box-shadow: 0 -4px 20px rgba(28,23,26,.08);
}
.travel-mode {
  display: flex; background: var(--gray-100);
  border-radius: 999px; padding: 3px; gap: 2px; flex: none;
}
.travel-mode-btn {
  display: flex; align-items: center; gap: 5px;
  padding: 6px 12px; border-radius: 999px;
  font-size: 12px; font-weight: 600; color: var(--gray-500);
  background: transparent; border: 0;
  transition: background .15s, color .15s, box-shadow .15s;
  white-space: nowrap;
}
.travel-mode-btn.active {
  background: var(--white); color: var(--gray-900);
  box-shadow: var(--shadow-s);
}
.travel-mode-btn svg { flex: none; }
.travel-slider-wrap { flex: 1; display: flex; flex-direction: column; gap: 4px; min-width: 0; }
.travel-slider-label {
  display: flex; align-items: center; justify-content: space-between;
  font-size: 11px; color: var(--gray-500);
}
.travel-slider-label strong { font-size: 13px; font-weight: 800; color: var(--gray-900); }
.travel-slider {
  -webkit-appearance: none; appearance: none;
  width: 100%; height: 4px;
  background: var(--gray-200); border-radius: 99px; outline: none; cursor: pointer;
}
.travel-slider::-webkit-slider-thumb {
  -webkit-appearance: none; appearance: none;
  width: 18px; height: 18px; border-radius: 50%;
  background: var(--gray-900); cursor: pointer;
  box-shadow: 0 1px 4px rgba(0,0,0,.25);
  border: 2px solid #fff;
}
.travel-slider::-moz-range-thumb {
  width: 18px; height: 18px; border-radius: 50%;
  background: var(--gray-900); cursor: pointer;
  box-shadow: 0 1px 4px rgba(0,0,0,.25);
  border: 2px solid #fff;
}
.travel-update-btn {
  display: flex; align-items: center; gap: 6px;
  padding: 8px 14px; border-radius: 999px;
  background: var(--gray-900); color: #fff; border: 0;
  font-size: 12px; font-weight: 700; white-space: nowrap;
  transition: background .15s; flex: none;
}
.travel-update-btn:hover { background: #000; }
.travel-update-btn svg { flex: none; }
.travel-area-active .travel-slider { background: linear-gradient(to right, var(--pink-500) var(--fill), var(--gray-200) var(--fill)); }
.travel-area-active .travel-slider::-webkit-slider-thumb { background: var(--pink-500); }
.travel-area-active .travel-slider::-moz-range-thumb { background: var(--pink-500); }
.travel-area-active .travel-mode-btn.active { color: var(--pink-500); }

/* \u2500\u2500 MOBILE: Groupon-style fullscreen map + swipe cards \u2500\u2500 */
@media (max-width: 800px) {
  body { overflow: hidden; height: 100dvh; }
  .nav-links { display: none; }
  .page-top { display: none; }
  .split { display: block; flex: none; }
  .list-pane { display: none; }
  .map-pane {
    position: fixed;
    top: 48px; left: 0; right: 0; bottom: 0;
    height: auto; order: unset; flex-shrink: unset;
    z-index: 1; isolation: isolate;
  }
  #map { height: 100%; }
  .travel-bar { display: none; }
  .filter-bar {
    position: fixed;
    top: 48px; left: 0; right: 0;
    z-index: 50;
    background: linear-gradient(to bottom, rgba(255,255,255,.92) 70%, transparent 100%);
    border: 0; box-shadow: none;
  }
  .filter-bar-row { padding: 10px 16px 14px; }
  .filter-chip {
    box-shadow: 0 2px 8px rgba(28,23,26,.18), 0 0 0 1px rgba(28,23,26,.05);
    background: rgba(255,255,255,.96);
    padding: 9px 16px; min-height: 40px;
  }
  .filter-chip.active {
    background: var(--gray-900); border-color: var(--gray-900);
    box-shadow: 0 2px 10px rgba(28,23,26,.35);
  }
  .map-badge { top: 70px; left: 14px; padding: 6px 12px; font-size: 10px; }
  .map-ctrl { top: 70px; right: 14px; gap: 5px; }
  .map-ctrl-btn { width: 36px; height: 36px; }

  /* Card strip */
  .card-strip {
    display: block;
    position: fixed; bottom: 0; left: 0; right: 0;
    z-index: 20;
    padding-bottom: env(safe-area-inset-bottom, 0px);
    pointer-events: none;
  }
  .card-strip-track {
    display: flex; gap: 10px;
    padding: 12px 26px 20px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    pointer-events: auto;
  }
  .card-strip-track::-webkit-scrollbar { display: none; }
  .swipe-card {
    min-width: calc(100vw - 72px); max-width: 340px;
    scroll-snap-align: center; flex-shrink: 0;
    background: #fff; border-radius: 18px;
    box-shadow: 0 6px 28px rgba(28,23,26,.18), 0 1px 4px rgba(28,23,26,.08);
    padding: 14px 16px; border: 2px solid transparent;
    cursor: pointer; transition: border-color .18s, box-shadow .18s;
    -webkit-tap-highlight-color: transparent;
  }
  .swipe-card.is-active {
    border-color: var(--pink-500);
    box-shadow: 0 6px 28px rgba(235,47,150,.22), 0 0 0 4px rgba(235,47,150,.1);
  }
  .swipe-card-top { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
  .swipe-badge {
    width: 42px; height: 42px; border-radius: 10px; flex-shrink: 0;
    display: grid; place-items: center;
    font-size: 10px; font-weight: 900; color: #fff; letter-spacing: .02em;
  }
  .swipe-info { flex: 1; min-width: 0; }
  .swipe-name {
    font-size: 13px; font-weight: 700; color: var(--gray-900);
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: 2px;
  }
  .swipe-meta { font-size: 11px; color: var(--gray-500); display: flex; align-items: center; gap: 5px; }
  .swipe-rating { font-size: 12px; font-weight: 700; color: #d97706; flex-shrink: 0; }
  .swipe-services { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
  .swipe-tags { display: flex; gap: 5px; flex-wrap: wrap; flex: 1; }
  .swipe-tag {
    font-size: 10px; font-weight: 600; color: var(--gray-600);
    background: var(--gray-100); border-radius: 999px;
    padding: 3px 8px;
  }
  .swipe-cta {
    display: inline-flex; align-items: center; gap: 5px;
    background: var(--gray-900); color: #fff;
    border: none; border-radius: 10px;
    padding: 10px 14px; font-size: 12px; font-weight: 700;
    cursor: pointer; flex-shrink: 0; font-family: inherit;
    -webkit-tap-highlight-color: transparent;
  }
  .detail-drag-handle { display: flex; }
}

/* \u2500\u2500 DESKTOP \u2500\u2500 */
@media (min-width: 801px) {
  body { height: 100vh; overflow: hidden; }
  .filter-bar { position: static; }
  .split {
    display: grid;
    grid-template-columns: 380px 0px 1fr;
    flex: 1; min-height: 0; overflow: hidden;
    transition: grid-template-columns .28s cubic-bezier(.4,0,.2,1);
  }
  .split.detail-open { grid-template-columns: 290px 340px 1fr; }
  .map-pane {
    order: 3; height: auto; flex-shrink: 1; min-height: 0;
    isolation: isolate;
  }
  #map { height: auto; flex: 1; min-height: 0; }
  .list-pane {
    order: 1; overflow-y: auto; border-right: 1px solid var(--gray-200);
    border-top: 0; min-height: 0;
  }
  .detail-panel {
    order: 2; position: static; transform: none !important;
    transition: none; border-radius: 0; border-top: 0;
    border-right: 1px solid var(--gray-200); box-shadow: none;
    height: auto; width: auto; min-width: 0; min-height: 0; z-index: auto;
  }
  .detail-drag-handle { display: none; }
  .nav-back span { display: inline; }
  .nav-sep { display: flex; }
}
</style>
`;
  return renderTemplate`${renderComponent($$result, "VehicleHub", $$VehicleHub, { "title": "T\xECm Garage & X\u01B0\u1EDFng S\u1EEDa Xe G\u1EA7n \u0110\xE2y | MoMo", "description": "Danh s\xE1ch garage v\xE0 x\u01B0\u1EDFng s\u1EEDa xe g\u1EA7n b\u1EA1n: Honda, Yamaha, VinFast, \u0111\u1EB7t l\u1ECBch v\xE0 thanh to\xE1n qua MoMo.", "theme": "automotive" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", "  ", `<div class="nav-sidebar-overlay" id="navSidebarOverlay" onclick="closeNavSidebar()"></div> <div class="nav-sidebar" id="navSidebar"> <div class="nav-sidebar-header"> <span class="nav-sidebar-logo">Ti\u1EC7n \xCDch <em>Giao Th\xF4ng</em></span> <button class="nav-sidebar-close" onclick="closeNavSidebar()"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> </button> </div> <div class="nav-sidebar-body"> <div class="nav-sidebar-section"> <div class="nav-sidebar-group expanded" onclick="toggleSidebarSection(this)">
Di chuy\u1EC3n
<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg> </div> <div class="nav-sidebar-links open"> <div class="nav-sidebar-col-label">Nhi\xEAn li\u1EC7u</div> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/gia-xang">Gi\xE1 x\u0103ng d\u1EA7u h\xF4m nay</a> <a class="nav-sidebar-link" href="/cay-xang">T\xECm c\xE2y x\u0103ng g\u1EA7n \u0111\xE2y</a> <a class="nav-sidebar-link" href="/tram-sac">Tr\u1EA1m s\u1EA1c xe \u0111i\u1EC7n</a> <div class="nav-sidebar-col-label">H\xE0nh tr\xECnh</div> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/chuyen-di">T\xEDnh chi ph\xED chuy\u1EBFn \u0111i</a> <a class="nav-sidebar-link" href="/epass/tinh-phi-etc">T\xEDnh ph\xED ETC theo tuy\u1EBFn</a> </div> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-group" onclick="toggleSidebarSection(this)">
B\u1EA3o hi\u1EC3m
<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg> </div> <div class="nav-sidebar-links"> <div class="nav-sidebar-col-label">\xD4 t\xF4</div> <a class="nav-sidebar-link" href="/bao-hiem-o-to">B\u1EA3o hi\u1EC3m TNDS b\u1EAFt bu\u1ED9c</a> <a class="nav-sidebar-link" href="/bao-hiem-o-to">B\u1EA3o hi\u1EC3m th\xE2n v\u1ECF</a> </div> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-group" onclick="toggleSidebarSection(this)">
Ph\xE1p l\xFD &amp; B\u1EA3o d\u01B0\u1EE1ng
<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg> </div> <div class="nav-sidebar-links"> <div class="nav-sidebar-col-label">Ph\xE1p l\xFD</div> <a class="nav-sidebar-link" href="/phat-nguoi">Tra ph\u1EA1t ngu\u1ED9i</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/dang-kiem">Ki\u1EC3m tra \u0111\u0103ng ki\u1EC3m</a> <div class="nav-sidebar-col-label">B\u1EA3o d\u01B0\u1EE1ng</div> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/bao-duong">L\u1ECBch b\u1EA3o d\u01B0\u1EE1ng xe</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/cuu-ho">C\u1EE9u h\u1ED9 kh\u1EA9n c\u1EA5p</a> </div> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-group" onclick="toggleSidebarSection(this)">
Xe c\u1EE7a t\xF4i
<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg> </div> <div class="nav-sidebar-links"> <div class="nav-sidebar-col-label">H\u1ED3 s\u01A1 &amp; Chi ph\xED</div> <a class="nav-sidebar-link" href="/tien-ich-giao-thong#ho-so-xe">H\u1ED3 s\u01A1 ph\u01B0\u01A1ng ti\u1EC7n</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong#chi-phi-xe">Chi ph\xED nu\xF4i xe / n\u0103m</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/hang-xe">Nh\xE3n xe &amp; D\xF2ng xe</a> <div class="nav-sidebar-col-label">Ti\u1EC7n \xEDch</div> <a class="nav-sidebar-link" href="/epass">ePass &amp; T\u1EF1 \u0111\u1ED9ng n\u1EA1p</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/bai-do-xe">T\xECm b\xE3i \u0111\u1ED7 xe</a> </div> </div> </div> </div>  <div class="page-top"> <div class="page-top-inner"> <div class="breadcrumb"> <a href="/tien-ich-giao-thong">Xe &amp; Giao Th\xF4ng</a> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg> <span>Garage g\u1EA7n b\u1EA1n</span> </div> <h1 class="page-title">Garage &amp; X\u01B0\u1EDFng s\u1EEDa xe g\u1EA7n b\u1EA1n</h1> <p class="page-desc">T\xECm Honda Head, Yamaha Town, VinFast Service v\xE0 garage uy t\xEDn g\u1EA7n nh\u1EA5t - xem d\u1ECBch v\u1EE5, gi\u1EDD m\u1EDF c\u1EEDa v\xE0 \u0111\u1EB7t l\u1ECBch qua MoMo.</p> </div> </div>  <div class="filter-bar"> <div class="filter-bar-row"> <div class="filter-bar-inner" id="filterBar"></div> </div> </div>  <div class="split"> <!-- LIST PANE --> <div class="list-pane"> <div class="list-header"> <div class="list-header-left"> <h2 id="listCount">18 c\xE2y x\u0103ng</h2> <p>G\u1EA7n khu v\u1EF1c Qu\u1EADn 1, TP.HCM</p> </div> <div class="sort-btn"> <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 6h18M7 12h10M11 18h2"></path></svg> <select id="sortSelect" onchange="sortStations()"> <option value="dist">G\u1EA7n nh\u1EA5t</option> <option value="rating">\u0110\xE1nh gi\xE1 cao</option> <option value="open">\u0110ang m\u1EDF</option> </select> </div> </div> <div class="station-list" id="stationList"></div> </div> <!-- DETAIL COLUMN --> <div class="detail-panel" id="detailPanel"> <div class="detail-drag-handle"></div> <div class="detail-topbar"> <button class="detail-back" onclick="closeDetail()"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
Danh s\xE1ch
</button> <button class="detail-close" onclick="closeDetail()"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> </button> </div> <div id="detailContent" style="flex:1;display:flex;flex-direction:column;overflow:hidden;min-height:0"></div> </div> <!-- MAP PANE --> <div class="map-pane"> <div id="map"></div> <div class="map-badge"> <i></i> <span id="mapCount">18 tr\u1EA1m</span> </div> <div class="map-ctrl"> <button class="map-ctrl-btn locate" id="locateBtn" title="V\u1ECB tr\xED c\u1EE7a t\xF4i" onclick="locateMe()"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M12 2v3M12 19v3M2 12h3M19 12h3"></path><circle cx="12" cy="12" r="8" stroke-dasharray="3 3"></circle></svg> </button> <button class="map-ctrl-btn" title="Ph\xF3ng to" onclick="map.zoomIn()"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> </button> <button class="map-ctrl-btn" title="Thu nh\u1ECF" onclick="map.zoomOut()"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line></svg> </button> </div> <!-- TRAVEL CONTROL --> <div class="travel-bar" id="travelBar"> <div class="travel-mode"> <button class="travel-mode-btn active" id="modeWalk" onclick="setTravelMode('walk')"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="2"></circle><path d="M8 14l2-4 2 2 2-4"></path><path d="M7 21l2-5h6l2 5"></path></svg>
\u0110i b\u1ED9
</button> <button class="travel-mode-btn" id="modeDrive" onclick="setTravelMode('drive')"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="10" rx="2"></rect><path d="M16 7l-2-4H10L8 7"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
L\xE1i xe
</button> </div> <div class="travel-slider-wrap"> <div class="travel-slider-label"> <span>Th\u1EDDi gian di chuy\u1EC3n</span> <strong id="travelMinsLabel">10 ph\xFAt</strong> </div> <input class="travel-slider" id="travelSlider" type="range" min="5" max="30" step="5" value="10" oninput="onSliderInput(this.value)"> </div> <button class="travel-update-btn" onclick="applyTravelArea()"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 .49-3.5"></path></svg>
C\u1EADp nh\u1EADt
</button> </div> </div> </div> <div class="card-strip" id="cardStrip"> <div class="card-strip-track" id="cardStripTrack"></div> </div> `, " ", ` <script>
// \u2500\u2500 DATA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const BRANDS = {
  plx:   { name: 'Petrolimex', short: 'PLX', color: '#DA2032', dark: '#A5172B' },
  pvoil: { name: 'PVOIL',      short: 'PVO', color: '#003087', dark: '#001F5C' },
};

const FUELS_BASE = { ron95: 23150, ron92: 21810, diesel: 20150 };

const GARAGE_BRANDS = {
  honda:   { name: 'Honda Head',       short: 'HH',  color: '#CC0000', dark: '#8B0000' },
  yamaha:  { name: 'Yamaha Town',      short: 'YT',  color: '#003087', dark: '#001A5C' },
  vinfast: { name: 'VinFast Service',  short: 'VF',  color: '#00856F', dark: '#005C4C' },
  generic: { name: 'Garage',           short: 'GA',  color: '#F59E0B', dark: '#D97706' },
};
const SVC_LABELS = { motorbike:'Xe m\xE1y', car:'\xD4 t\xF4', oil:'Thay d\u1EA7u', tire:'V\xE1 l\u1ED1p', wash:'R\u1EEDa xe', inspect:'\u0110\u0103ng ki\u1EC3m', body:'\u0110\u1ED3ng s\u01A1n' };

const GARAGES = [
  { id:201, brand:'honda',   name:'Honda Head Nguy\u1EC5n Tr\xE3i',         addr:'12 Nguy\u1EC5n Tr\xE3i, P.B\u1EBFn Th\xE0nh, Q.1',        lat:10.7718, lng:106.6900, dist:0.8, open24:false, rating:4.7, vehicles:['motorbike'],        services:['oil','tire','wash'],            hours:'7:30 - 18:00' },
  { id:202, brand:'yamaha',  name:'Yamaha Town L\xEA L\u1EE3i',              addr:'55 L\xEA L\u1EE3i, P.B\u1EBFn Ngh\xE9, Q.1',              lat:10.7745, lng:106.7025, dist:1.1, open24:false, rating:4.5, vehicles:['motorbike'],        services:['oil','tire','wash','inspect'],  hours:'8:00 - 17:30' },
  { id:203, brand:'generic', name:'Garage \xD4 T\xF4 Tr\u1EA7n H\u01B0ng \u0110\u1EA1o',      addr:'122 Tr\u1EA7n H\u01B0ng \u0110\u1EA1o, P.C\u1EA7u Kho, Q.1',       lat:10.7656, lng:106.6912, dist:1.5, open24:false, rating:4.4, vehicles:['car'],              services:['oil','tire','body','wash'],     hours:'7:00 - 18:30' },
  { id:204, brand:'honda',   name:'Honda Head \u0110inh Ti\xEAn Ho\xE0ng',      addr:'88 \u0110inh Ti\xEAn Ho\xE0ng, P.\u0110a Kao, Q.1',       lat:10.7905, lng:106.6990, dist:1.7, open24:false, rating:4.6, vehicles:['motorbike'],        services:['oil','tire','wash'],            hours:'7:30 - 17:30' },
  { id:205, brand:'vinfast', name:'VinFast Service Center Q.3',      addr:'25 V\xF5 V\u0103n T\u1EA7n, P.6, Q.3',                 lat:10.7810, lng:106.6830, dist:2.0, open24:false, rating:4.8, vehicles:['car'],              services:['oil','tire','body','inspect'],  hours:'7:00 - 19:00' },
  { id:206, brand:'generic', name:'Garage Xe M\xE1y Hai B\xE0 Tr\u01B0ng',      addr:'230 Hai B\xE0 Tr\u01B0ng, P.T\xE2n \u0110\u1ECBnh, Q.1',       lat:10.7890, lng:106.6940, dist:2.2, open24:false, rating:4.2, vehicles:['motorbike'],        services:['oil','tire'],                  hours:'7:00 - 18:00' },
  { id:207, brand:'yamaha',  name:'Yamaha Town C\xE1ch M\u1EA1ng Th\xE1ng T\xE1m', addr:'180 CMT8, P.3, Q.3',                       lat:10.7795, lng:106.6755, dist:2.9, open24:false, rating:4.3, vehicles:['motorbike'],        services:['oil','tire','wash','inspect'],  hours:'8:00 - 17:30' },
  { id:208, brand:'generic', name:'Garage \xD4 T\xF4 B\xECnh Th\u1EA1nh',          addr:'34 \u0110inh B\u1ED9 L\u0129nh, P.24, Q.B\xECnh Th\u1EA1nh',    lat:10.8060, lng:106.7110, dist:3.5, open24:false, rating:4.5, vehicles:['car','motorbike'],  services:['oil','tire','body','wash'],     hours:'7:00 - 18:00' },
  { id:209, brand:'honda',   name:'Honda Head Ph\xFA Nhu\u1EADn',             addr:'92 Ho\xE0ng V\u0103n Th\u1EE5, P.9, Q.Ph\xFA Nhu\u1EADn',     lat:10.8000, lng:106.6720, dist:3.8, open24:false, rating:4.6, vehicles:['motorbike'],        services:['oil','tire','wash'],            hours:'7:30 - 18:00' },
  { id:210, brand:'vinfast', name:'VinFast Service Center Q.5',       addr:'56 Nguy\u1EC5n Tr\xE3i, P.2, Q.5',               lat:10.7580, lng:106.6820, dist:4.0, open24:false, rating:4.7, vehicles:['car'],              services:['oil','tire','body','inspect'],  hours:'7:00 - 19:00' },
  { id:211, brand:'generic', name:'Garage K\u1EF9 Thu\u1EADt L\xEA V\u0103n S\u1EF9',       addr:'290 L\xEA V\u0103n S\u1EF9, P.14, Q.3',               lat:10.7890, lng:106.6680, dist:4.3, open24:false, rating:4.3, vehicles:['car','motorbike'],  services:['oil','tire','body'],            hours:'7:30 - 17:30' },
  { id:212, brand:'yamaha',  name:'Yamaha Town T\xE2n B\xECnh',             addr:'44 Tr\u01B0\u1EDDng S\u01A1n, P.2, Q.T\xE2n B\xECnh',          lat:10.8100, lng:106.6660, dist:4.9, open24:false, rating:4.4, vehicles:['motorbike'],        services:['oil','tire','wash','inspect'],  hours:'8:00 - 17:30' },
];

const STATIONS = [
  { id:1,  brand:'plx',   name:'Petrolimex s\u1ED1 6 \u0110inh Ti\xEAn Ho\xE0ng',  addr:'6 \u0110inh Ti\xEAn Ho\xE0ng, P.\u0110a Kao, Q.1',      lat:10.7892, lng:106.6975, dist:0.4, open24:true,  rating:4.7, fuels:['ron95','ron92','diesel'], services:['carwash','shop'], delta:{} },
  { id:2,  brand:'plx',   name:'Petrolimex Nguy\u1EC5n Th\u1ECB Minh Khai',  addr:'45 Nguy\u1EC5n Th\u1ECB Minh Khai, Q.1',          lat:10.7823, lng:106.6844, dist:1.2, open24:false, rating:4.3, fuels:['ron95','ron92'],          services:['shop'],           delta:{ ron95:-200 } },
  { id:3,  brand:'plx',   name:'Petrolimex L\xEA Du\u1EA9n',               addr:'124 L\xEA Du\u1EA9n, P.B\u1EBFn Ngh\xE9, Q.1',          lat:10.7799, lng:106.7005, dist:1.4, open24:true,  rating:4.6, fuels:['ron95','ron92','diesel'], services:['carwash'],        delta:{ ron95:-100 } },
  { id:4,  brand:'pvoil', name:'PVOIL \u0110i\u1EC7n Bi\xEAn Ph\u1EE7',               addr:'312 \u0110i\u1EC7n Bi\xEAn Ph\u1EE7, P.4, Q.3',           lat:10.7831, lng:106.6803, dist:2.1, open24:true,  rating:4.4, fuels:['ron95','diesel'],         services:[],                 delta:{} },
  { id:5,  brand:'plx',   name:'Petrolimex Hai B\xE0 Tr\u01B0ng',           addr:'178 Hai B\xE0 Tr\u01B0ng, P.\u0110a Kao, Q.1',       lat:10.7874, lng:106.6928, dist:2.3, open24:true,  rating:4.6, fuels:['ron95','ron92','diesel'], services:['carwash','shop'], delta:{} },
  { id:6,  brand:'plx',   name:'Petrolimex C\xE1ch M\u1EA1ng Th\xE1ng T\xE1m',   addr:'210 CMT8, P.4, Q.3',                     lat:10.7789, lng:106.6780, dist:2.8, open24:true,  rating:4.5, fuels:['ron95','ron92','diesel'], services:['shop'],           delta:{} },
  { id:7,  brand:'pvoil', name:'PVOIL S\u01B0 V\u1EA1n H\u1EA1nh',                 addr:'268 S\u01B0 V\u1EA1n H\u1EA1nh, P.9, Q.10',            lat:10.7780, lng:106.6686, dist:3.3, open24:true,  rating:4.5, fuels:['ron95','ron92'],          services:[],                 delta:{} },
  { id:8,  brand:'pvoil', name:'PVOIL Nguy\u1EC5n Tr\xE3i',                 addr:'405 Nguy\u1EC5n Tr\xE3i, P.7, Q.5',             lat:10.7601, lng:106.6810, dist:3.6, open24:true,  rating:4.3, fuels:['ron95','ron92','diesel'], services:['carwash'],        delta:{ diesel:-100 } },
  { id:9,  brand:'plx',   name:'Petrolimex B\xECnh Th\u1EA1nh',             addr:'50 \u0110inh B\u1ED9 L\u0129nh, P.26, Q.B\xECnh Th\u1EA1nh',  lat:10.8074, lng:106.7097, dist:3.9, open24:true,  rating:4.7, fuels:['ron95','ron92','diesel'], services:['carwash','shop'], delta:{} },
  { id:10, brand:'pvoil', name:'PVOIL Ho\xE0ng Di\u1EC7u',                  addr:'90 Ho\xE0ng Di\u1EC7u, P.9, Q.4',               lat:10.7656, lng:106.6964, dist:4.2, open24:false, rating:4.1, fuels:['ron95','diesel'],         services:[],                 delta:{ ron95:+100 } },
  { id:11, brand:'pvoil', name:'PVOIL Nguy\u1EC5n H\u1EEFu C\u1EA3nh',             addr:'100 Nguy\u1EC5n H\u1EEFu C\u1EA3nh, Q.B\xECnh Th\u1EA1nh',    lat:10.7963, lng:106.7162, dist:4.1, open24:true,  rating:4.4, fuels:['ron95','diesel'],         services:['shop'],           delta:{} },
  { id:12, brand:'plx',   name:'Petrolimex Phan X\xEDch Long',         addr:'166 Phan X\xEDch Long, P.2, Q.Ph\xFA Nhu\u1EADn', lat:10.7966, lng:106.6800, dist:4.4, open24:false, rating:4.2, fuels:['ron95','ron92'],          services:[],                 delta:{} },
  { id:13, brand:'pvoil', name:'PVOIL L\xEA V\u0103n S\u1EF9',                   addr:'377 L\xEA V\u0103n S\u1EF9, P.1, Q.T\xE2n B\xECnh',       lat:10.7898, lng:106.6663, dist:4.7, open24:true,  rating:4.4, fuels:['ron95','diesel'],         services:['carwash'],        delta:{} },
  { id:14, brand:'plx',   name:'Petrolimex T\xE2n S\u01A1n Nh\u1EA5t',           addr:'22 Tr\u01B0\u1EDDng S\u01A1n, P.2, Q.T\xE2n B\xECnh',        lat:10.8114, lng:106.6644, dist:5.2, open24:true,  rating:4.8, fuels:['ron95','ron92','diesel'], services:['carwash','shop'], delta:{} },
  { id:15, brand:'plx',   name:'Petrolimex Ho\xE0ng V\u0103n Th\u1EE5',         addr:'158 Ho\xE0ng V\u0103n Th\u1EE5, P.8, Q.Ph\xFA Nhu\u1EADn',  lat:10.7994, lng:106.6716, dist:5.5, open24:false, rating:4.3, fuels:['ron95','ron92','diesel'], services:['shop'],           delta:{} },
];

const FUEL_LABELS = { ron95: 'RON 95-III', ron92: 'E5 RON 92', diesel: 'Diesel' };

// \u2500\u2500 STATE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
let activeType = 'garage';
let activeFilter = 'all';
let activeId = null;
let markerMap = {};
let meMarker = null;

// Travel area state
let travelMode = 'walk';   // 'walk' | 'drive'
let travelMins = 10;
let travelCenter = [10.7847, 106.6879]; // default = map center
let travelCircle = null;
let travelActive = false;

// Speed m/min: walk 80, drive 500 (~30km/h city)
const SPEED = { walk: 80, drive: 500 };

function travelRadius() { return SPEED[travelMode] * travelMins; }

function haversine(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

// \u2500\u2500 MAP INIT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const map = L.map('map', {
  center: [10.7847, 106.6879],
  zoom: 14,
  zoomControl: false,
  attributionControl: true,
});
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> &copy; <a href="https://carto.com">CARTO</a>',
  subdomains: 'abcd', maxZoom: 19
}).addTo(map);

const markerCluster = L.markerClusterGroup({
  maxClusterRadius: 48,
  iconCreateFunction: function(cluster) {
    return L.divIcon({
      html: \`<div class="marker-cluster-inner">\${cluster.getChildCount()}</div>\`,
      className: 'marker-cluster marker-cluster-medium',
      iconSize: [40, 40]
    });
  }
});
map.addLayer(markerCluster);

// \u2500\u2500 HELPERS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function fmtPrice(val) {
  return val.toLocaleString('vi-VN') + '\u0111';
}
function fuelPrice(s, fuel) {
  return FUELS_BASE[fuel] + (s.delta[fuel] || 0);
}

function filtered() {
  let list = [...GARAGES];

  if      (activeFilter === 'motorbike') list = list.filter(g => g.vehicles.includes('motorbike'));
  else if (activeFilter === 'car')       list = list.filter(g => g.vehicles.includes('car'));
  else if (activeFilter === 'oil')       list = list.filter(g => g.services.includes('oil'));
  else if (activeFilter === 'wash')      list = list.filter(g => g.services.includes('wash'));

  if (travelActive) {
    const r = travelRadius();
    list = list.filter(s => haversine(travelCenter[0], travelCenter[1], s.lat, s.lng) <= r);
  }

  const sort = document.getElementById('sortSelect').value;
  if (sort === 'dist')   list.sort((a,b) => a.dist - b.dist);
  if (sort === 'rating') list.sort((a,b) => b.rating - a.rating);
  if (sort === 'open')   list.sort((a,b) => (b.open24 ? 1:0) - (a.open24 ? 1:0));
  return list;
}

// \u2500\u2500 CARD STRIP \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function renderCardStrip() {
  const track = document.getElementById('cardStripTrack');
  if (!track) return;
  const list = filtered();
  track.innerHTML = list.map(g => {
    const b = GARAGE_BRANDS[g.brand];
    const isActive = g.id === activeId;
    const vehicleLabel = g.vehicles.includes('car') && g.vehicles.includes('motorbike') ? 'Xe m\xE1y + \xD4 t\xF4'
      : g.vehicles.includes('car') ? '\xD4 t\xF4' : 'Xe m\xE1y';
    const topSvcs = g.services.slice(0, 2).map(sv => \`<span class="swipe-tag">\${SVC_LABELS[sv]||sv}</span>\`).join('');
    return \`
    <div class="swipe-card\${isActive ? ' is-active' : ''}" id="swipe-\${g.id}" data-id="\${g.id}" onclick="selectStation(\${g.id})">
      <div class="swipe-card-top">
        <div class="swipe-badge" style="background:linear-gradient(135deg,\${b.color} 0%,\${b.dark} 100%)">\${b.short}</div>
        <div class="swipe-info">
          <div class="swipe-name">\${g.name}</div>
          <div class="swipe-meta">\${g.dist} km \xB7 \${vehicleLabel}</div>
        </div>
        <div class="swipe-rating">\u2605 \${g.rating}</div>
      </div>
      <div class="swipe-services">
        <div class="swipe-tags">\${topSvcs}</div>
        <button class="swipe-cta" onclick="event.stopPropagation();selectStation(\${g.id})">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          Chi ti\u1EBFt
        </button>
      </div>
    </div>\`;
  }).join('');
  setupCardSnap(list);
}

let _snapTimer;
function setupCardSnap(list) {
  const track = document.getElementById('cardStripTrack');
  if (!track || track._snapBound) return;
  track._snapBound = true;
  track.addEventListener('scroll', () => {
    clearTimeout(_snapTimer);
    _snapTimer = setTimeout(() => {
      const cards = track.querySelectorAll('.swipe-card');
      const center = track.scrollLeft + track.clientWidth / 2;
      let closest = null, minDist = Infinity;
      cards.forEach(c => {
        const d = Math.abs((c.offsetLeft + c.offsetWidth / 2) - center);
        if (d < minDist) { minDist = d; closest = c; }
      });
      if (!closest) return;
      const id = parseInt(closest.dataset.id);
      if (id === activeId) return;
      activeId = id;
      const g = list.find(x => x.id === id);
      if (g) map.setView([g.lat, g.lng], 15, { animate: true, duration: 0.4 });
      renderMarkers();
      cards.forEach(c => c.classList.toggle('is-active', parseInt(c.dataset.id) === id));
    }, 100);
  }, { passive: true });
}

function scrollCardTo(id) {
  const card = document.getElementById('swipe-' + id);
  if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
}

// \u2500\u2500 RENDER LIST \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function renderList() {
  const list = filtered();
  const el = document.getElementById('stationList');
  renderCardStrip();
  document.getElementById('listCount').textContent = list.length + ' garage';
  document.getElementById('mapCount').textContent = list.length + ' \u0111\u1ECBa \u0111i\u1EC3m';

  el.innerHTML = list.map(g => {
    const b = GARAGE_BRANDS[g.brand];
    const vehicleTag = g.vehicles.includes('car') && g.vehicles.includes('motorbike')
      ? '<span class="badge badge-svc">Xe m\xE1y + \xD4 t\xF4</span>'
      : g.vehicles.includes('car')
        ? '<span class="badge badge-svc">\xD4 t\xF4</span>'
        : '<span class="badge badge-svc">Xe m\xE1y</span>';
    return \`
    <div class="station-card\${g.id === activeId ? ' is-active' : ''}" id="card-\${g.id}" onclick="selectStation(\${g.id})">
      <div class="station-brand-badge" style="background:linear-gradient(135deg,\${b.color} 0%,\${b.dark} 100%)">\${b.short}</div>
      <div class="station-info">
        <div class="station-name-row">
          <span class="station-name">\${g.name}</span>
          <span class="station-rating">\u2605 \${g.rating}</span>
        </div>
        <div class="station-addr">\${g.addr}</div>
        <div class="station-meta">
          <span class="badge badge-dist"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>\${g.dist} km</span>
          \${vehicleTag}
          \${g.services.slice(0,2).map(sv => \`<span class="badge badge-svc">\${SVC_LABELS[sv]||sv}</span>\`).join('')}
        </div>
        <div class="station-price-row">
          <div class="fuel-pill" style="color:var(--gray-600)">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            \${g.hours}
          </div>
        </div>
      </div>
    </div>\`;
  }).join('');
}

// \u2500\u2500 RENDER MARKERS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function renderMarkers() {
  markerCluster.clearLayers();
  markerMap = {};
  const list = filtered();

  list.forEach(s => {
    const isActive = s.id === activeId;
    const b = GARAGE_BRANDS[s.brand];
    const pinHtml = \`<div class="pin pin-garage\${isActive ? ' active' : ''}">
      <div class="pin-icon" style="background:\${b.color}">\${b.short.slice(0,1)}</div>
      \${b.short}
    </div>\`;
    const icon = L.divIcon({ html: pinHtml, className: '', iconSize: [null,null], iconAnchor: [0,0] });
    const marker = L.marker([s.lat, s.lng], { icon }).addTo(markerCluster);
    marker.on('click', () => selectStation(s.id));
    markerMap[s.id] = marker;
  });
}

// \u2500\u2500 SELECT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function selectStation(id) {
  if (activeId === id) { closeDetail(); return; }
  activeId = id;
  renderList();
  renderMarkers();
  const s = GARAGES.find(x => x.id === id);
  if (!s) return;
  map.setView([s.lat, s.lng], 15, { animate: true });
  showDetail(s);
  setTimeout(() => {
    const card = document.getElementById('card-' + id);
    if (card) card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    scrollCardTo(id);
  }, 50);
}

function closeDetail() {
  activeId = null;
  document.querySelector('.split').classList.remove('detail-open');
  document.getElementById('detailPanel').classList.remove('open');
  renderList();
  renderMarkers();
}

function showDetail(s) {
  const b = GARAGE_BRANDS[s.brand];

  const mainContent = \`
    <div class="detail-section">
      <div class="detail-section-title">D\u1ECBch v\u1EE5</div>
      <div class="detail-fuel-grid">
        \${s.services.map(sv => \`
          <div class="detail-fuel-item">
            <div class="detail-fuel-type">\${SVC_LABELS[sv] || sv}</div>
            <div class="detail-fuel-price" style="font-size:12px;color:var(--green-500)">C\xF3 d\u1ECBch v\u1EE5</div>
          </div>\`).join('')}
      </div>
    </div>
    <div class="detail-section">
      <div class="detail-section-title">Lo\u1EA1i xe ph\u1EE5c v\u1EE5</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        \${s.vehicles.map(v => \`<span class="badge badge-svc" style="padding:6px 12px;font-size:12px">\${SVC_LABELS[v]||v}</span>\`).join('')}
      </div>
    </div>
  \`;

  const openStatus = \`<span class="badge badge-open">\${s.hours}</span>\`;

  document.getElementById('detailContent').innerHTML = \`
    <div class="detail-info-block">
      <div class="detail-info-top">
        <div class="detail-icon" style="background:linear-gradient(135deg,\${b.color} 0%,\${b.dark} 100%)">\${b.short}</div>
        <div class="detail-info-main">
          <h2 class="detail-name">\${s.name}</h2>
          <div class="detail-status-inline">\${openStatus}</div>
        </div>
      </div>
      <div class="detail-row">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>\${s.addr} \xB7 <strong>\${s.dist} km</strong></span>
      </div>
      <div class="detail-row">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        <span class="detail-hours-inline">\${s.hours} h\u1EB1ng ng\xE0y</span>
      </div>
    </div>
    <div class="detail-hero" style="background:linear-gradient(135deg,\${b.color} 0%,\${b.dark} 100%)">
      <div class="detail-hero-logo">\${b.short}</div>
      <div class="momo-overlay">
        <div class="momo-overlay-badge">
          <img src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg" alt="MoMo">
          Thanh to\xE1n MoMo
        </div>
        <div class="momo-overlay-text">
          <strong>\${b.name}</strong>
          \u0110\u1EB7t d\u1ECBch v\u1EE5, thanh to\xE1n qua v\xED
        </div>
      </div>
    </div>
    <div class="detail-scroll">
      \${mainContent}
      <div class="detail-actions">
        <button class="btn-primary" onclick="window.open('https://momo.vn', '_blank')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          M\u1EDF App MoMo
        </button>
        <div class="detail-actions-split">
          <button class="btn-secondary" onclick="window.open('https://maps.google.com/?daddr=\${s.lat},\${s.lng}', '_blank')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
            Ch\u1EC9 \u0111\u01B0\u1EDDng
          </button>
          <button class="btn-secondary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.08 4.18 2 2 0 015 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            G\u1ECDi \u0111i\u1EC7n
          </button>
        </div>
      </div>
    </div>
  \`;
  document.querySelector('.split').classList.add('detail-open');
  document.getElementById('detailPanel').classList.add('open');
}

// \u2500\u2500 FILTER & SORT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function setFilter(f, btn) {
  activeFilter = f;
  activeId = null;
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  closeDetail();
  renderList();
  renderMarkers();
}
function sortStations() { renderList(); renderMarkers(); }

function renderFilterChips() {
  document.getElementById('filterBar').innerHTML = \`
    <button class="filter-chip active" onclick="setFilter('all',this)">T\u1EA5t c\u1EA3</button>
    <button class="filter-chip" onclick="setFilter('motorbike',this)">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M5 17H3v-4l2-5h8l3 5h2a2 2 0 0 1 0 4h-1"/><path d="M9 8l2 4"/></svg>
      Xe m\xE1y
    </button>
    <button class="filter-chip" onclick="setFilter('car',this)">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M16 7l-2-4H10L8 7"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
      \xD4 t\xF4
    </button>
    <button class="filter-chip" onclick="setFilter('oil',this)">Thay d\u1EA7u</button>
    <button class="filter-chip" onclick="setFilter('wash',this)">R\u1EEDa xe</button>\`;
}

// \u2500\u2500 TRAVEL AREA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function onSliderInput(val) {
  travelMins = +val;
  document.getElementById('travelMinsLabel').textContent = val + ' ph\xFAt';
  const pct = ((val - 5) / 25 * 100).toFixed(1) + '%';
  document.getElementById('travelSlider').style.setProperty('--fill', pct);
  if (travelCircle) {
    travelCircle.setRadius(travelRadius());
    renderList();
    renderMarkers();
  }
}

function setTravelMode(mode) {
  travelMode = mode;
  document.getElementById('modeWalk').classList.toggle('active', mode === 'walk');
  document.getElementById('modeDrive').classList.toggle('active', mode === 'drive');
  if (travelCircle) {
    travelCircle.setRadius(travelRadius());
    renderList();
    renderMarkers();
  }
}

function applyTravelArea() {
  // Use current map center as anchor if no GPS
  travelCenter = [map.getCenter().lat, map.getCenter().lng];
  travelActive = true;

  const r = travelRadius();
  if (travelCircle) map.removeLayer(travelCircle);
  travelCircle = L.circle(travelCenter, {
    radius: r,
    color: '#1C171A',
    weight: 2,
    dashArray: '6 4',
    fillColor: '#1C171A',
    fillOpacity: 0.05,
  }).addTo(map);

  document.getElementById('travelBar').classList.add('travel-area-active');
  document.getElementById('travelSlider').style.setProperty('--fill',
    ((travelMins - 5) / 25 * 100).toFixed(1) + '%');

  renderList();
  renderMarkers();

  // Fit map to circle
  map.fitBounds(travelCircle.getBounds(), { padding: [32, 32] });
}

function clearTravelArea() {
  travelActive = false;
  if (travelCircle) { map.removeLayer(travelCircle); travelCircle = null; }
  document.getElementById('travelBar').classList.remove('travel-area-active');
  renderList(); renderMarkers();
}

// \u2500\u2500 GEOLOCATION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function locateMe() {
  if (!navigator.geolocation) return;
  document.getElementById('locateBtn').classList.add('active');
  navigator.geolocation.getCurrentPosition(pos => {
    const { latitude: lat, longitude: lng } = pos.coords;
    travelCenter = [lat, lng];
    map.setView([lat, lng], 15);
    if (meMarker) map.removeLayer(meMarker);
    meMarker = L.marker([lat, lng], {
      icon: L.divIcon({
        html: '<div class="me-dot"></div>',
        className: '', iconSize: [14, 14], iconAnchor: [7, 7]
      })
    }).addTo(map);
    // Auto-apply travel area from GPS
    travelActive = true;
    applyTravelArea();
    setTimeout(() => document.getElementById('locateBtn').classList.remove('active'), 2000);
  }, () => {
    document.getElementById('locateBtn').classList.remove('active');
  });
}

// \u2500\u2500 NAV SIDEBAR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function openNavSidebar() {
  document.getElementById('navSidebar').classList.add('open');
  document.getElementById('navSidebarOverlay').classList.add('open');
}
function closeNavSidebar() {
  document.getElementById('navSidebar').classList.remove('open');
  document.getElementById('navSidebarOverlay').classList.remove('open');
}
function toggleSidebarSection(el) {
  el.classList.toggle('expanded');
  el.nextElementSibling.classList.toggle('open');
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNavSidebar(); });

// \u2500\u2500 INIT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
renderFilterChips();
renderList();
renderMarkers();
renderCardStrip();
<\/script> `], [" ", "  ", `<div class="nav-sidebar-overlay" id="navSidebarOverlay" onclick="closeNavSidebar()"></div> <div class="nav-sidebar" id="navSidebar"> <div class="nav-sidebar-header"> <span class="nav-sidebar-logo">Ti\u1EC7n \xCDch <em>Giao Th\xF4ng</em></span> <button class="nav-sidebar-close" onclick="closeNavSidebar()"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> </button> </div> <div class="nav-sidebar-body"> <div class="nav-sidebar-section"> <div class="nav-sidebar-group expanded" onclick="toggleSidebarSection(this)">
Di chuy\u1EC3n
<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg> </div> <div class="nav-sidebar-links open"> <div class="nav-sidebar-col-label">Nhi\xEAn li\u1EC7u</div> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/gia-xang">Gi\xE1 x\u0103ng d\u1EA7u h\xF4m nay</a> <a class="nav-sidebar-link" href="/cay-xang">T\xECm c\xE2y x\u0103ng g\u1EA7n \u0111\xE2y</a> <a class="nav-sidebar-link" href="/tram-sac">Tr\u1EA1m s\u1EA1c xe \u0111i\u1EC7n</a> <div class="nav-sidebar-col-label">H\xE0nh tr\xECnh</div> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/chuyen-di">T\xEDnh chi ph\xED chuy\u1EBFn \u0111i</a> <a class="nav-sidebar-link" href="/epass/tinh-phi-etc">T\xEDnh ph\xED ETC theo tuy\u1EBFn</a> </div> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-group" onclick="toggleSidebarSection(this)">
B\u1EA3o hi\u1EC3m
<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg> </div> <div class="nav-sidebar-links"> <div class="nav-sidebar-col-label">\xD4 t\xF4</div> <a class="nav-sidebar-link" href="/bao-hiem-o-to">B\u1EA3o hi\u1EC3m TNDS b\u1EAFt bu\u1ED9c</a> <a class="nav-sidebar-link" href="/bao-hiem-o-to">B\u1EA3o hi\u1EC3m th\xE2n v\u1ECF</a> </div> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-group" onclick="toggleSidebarSection(this)">
Ph\xE1p l\xFD &amp; B\u1EA3o d\u01B0\u1EE1ng
<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg> </div> <div class="nav-sidebar-links"> <div class="nav-sidebar-col-label">Ph\xE1p l\xFD</div> <a class="nav-sidebar-link" href="/phat-nguoi">Tra ph\u1EA1t ngu\u1ED9i</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/dang-kiem">Ki\u1EC3m tra \u0111\u0103ng ki\u1EC3m</a> <div class="nav-sidebar-col-label">B\u1EA3o d\u01B0\u1EE1ng</div> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/bao-duong">L\u1ECBch b\u1EA3o d\u01B0\u1EE1ng xe</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/cuu-ho">C\u1EE9u h\u1ED9 kh\u1EA9n c\u1EA5p</a> </div> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-group" onclick="toggleSidebarSection(this)">
Xe c\u1EE7a t\xF4i
<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg> </div> <div class="nav-sidebar-links"> <div class="nav-sidebar-col-label">H\u1ED3 s\u01A1 &amp; Chi ph\xED</div> <a class="nav-sidebar-link" href="/tien-ich-giao-thong#ho-so-xe">H\u1ED3 s\u01A1 ph\u01B0\u01A1ng ti\u1EC7n</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong#chi-phi-xe">Chi ph\xED nu\xF4i xe / n\u0103m</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/hang-xe">Nh\xE3n xe &amp; D\xF2ng xe</a> <div class="nav-sidebar-col-label">Ti\u1EC7n \xEDch</div> <a class="nav-sidebar-link" href="/epass">ePass &amp; T\u1EF1 \u0111\u1ED9ng n\u1EA1p</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/bai-do-xe">T\xECm b\xE3i \u0111\u1ED7 xe</a> </div> </div> </div> </div>  <div class="page-top"> <div class="page-top-inner"> <div class="breadcrumb"> <a href="/tien-ich-giao-thong">Xe &amp; Giao Th\xF4ng</a> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg> <span>Garage g\u1EA7n b\u1EA1n</span> </div> <h1 class="page-title">Garage &amp; X\u01B0\u1EDFng s\u1EEDa xe g\u1EA7n b\u1EA1n</h1> <p class="page-desc">T\xECm Honda Head, Yamaha Town, VinFast Service v\xE0 garage uy t\xEDn g\u1EA7n nh\u1EA5t - xem d\u1ECBch v\u1EE5, gi\u1EDD m\u1EDF c\u1EEDa v\xE0 \u0111\u1EB7t l\u1ECBch qua MoMo.</p> </div> </div>  <div class="filter-bar"> <div class="filter-bar-row"> <div class="filter-bar-inner" id="filterBar"></div> </div> </div>  <div class="split"> <!-- LIST PANE --> <div class="list-pane"> <div class="list-header"> <div class="list-header-left"> <h2 id="listCount">18 c\xE2y x\u0103ng</h2> <p>G\u1EA7n khu v\u1EF1c Qu\u1EADn 1, TP.HCM</p> </div> <div class="sort-btn"> <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 6h18M7 12h10M11 18h2"></path></svg> <select id="sortSelect" onchange="sortStations()"> <option value="dist">G\u1EA7n nh\u1EA5t</option> <option value="rating">\u0110\xE1nh gi\xE1 cao</option> <option value="open">\u0110ang m\u1EDF</option> </select> </div> </div> <div class="station-list" id="stationList"></div> </div> <!-- DETAIL COLUMN --> <div class="detail-panel" id="detailPanel"> <div class="detail-drag-handle"></div> <div class="detail-topbar"> <button class="detail-back" onclick="closeDetail()"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
Danh s\xE1ch
</button> <button class="detail-close" onclick="closeDetail()"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> </button> </div> <div id="detailContent" style="flex:1;display:flex;flex-direction:column;overflow:hidden;min-height:0"></div> </div> <!-- MAP PANE --> <div class="map-pane"> <div id="map"></div> <div class="map-badge"> <i></i> <span id="mapCount">18 tr\u1EA1m</span> </div> <div class="map-ctrl"> <button class="map-ctrl-btn locate" id="locateBtn" title="V\u1ECB tr\xED c\u1EE7a t\xF4i" onclick="locateMe()"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M12 2v3M12 19v3M2 12h3M19 12h3"></path><circle cx="12" cy="12" r="8" stroke-dasharray="3 3"></circle></svg> </button> <button class="map-ctrl-btn" title="Ph\xF3ng to" onclick="map.zoomIn()"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> </button> <button class="map-ctrl-btn" title="Thu nh\u1ECF" onclick="map.zoomOut()"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line></svg> </button> </div> <!-- TRAVEL CONTROL --> <div class="travel-bar" id="travelBar"> <div class="travel-mode"> <button class="travel-mode-btn active" id="modeWalk" onclick="setTravelMode('walk')"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="2"></circle><path d="M8 14l2-4 2 2 2-4"></path><path d="M7 21l2-5h6l2 5"></path></svg>
\u0110i b\u1ED9
</button> <button class="travel-mode-btn" id="modeDrive" onclick="setTravelMode('drive')"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="10" rx="2"></rect><path d="M16 7l-2-4H10L8 7"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
L\xE1i xe
</button> </div> <div class="travel-slider-wrap"> <div class="travel-slider-label"> <span>Th\u1EDDi gian di chuy\u1EC3n</span> <strong id="travelMinsLabel">10 ph\xFAt</strong> </div> <input class="travel-slider" id="travelSlider" type="range" min="5" max="30" step="5" value="10" oninput="onSliderInput(this.value)"> </div> <button class="travel-update-btn" onclick="applyTravelArea()"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 .49-3.5"></path></svg>
C\u1EADp nh\u1EADt
</button> </div> </div> </div> <div class="card-strip" id="cardStrip"> <div class="card-strip-track" id="cardStripTrack"></div> </div> `, " ", ` <script>
// \u2500\u2500 DATA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const BRANDS = {
  plx:   { name: 'Petrolimex', short: 'PLX', color: '#DA2032', dark: '#A5172B' },
  pvoil: { name: 'PVOIL',      short: 'PVO', color: '#003087', dark: '#001F5C' },
};

const FUELS_BASE = { ron95: 23150, ron92: 21810, diesel: 20150 };

const GARAGE_BRANDS = {
  honda:   { name: 'Honda Head',       short: 'HH',  color: '#CC0000', dark: '#8B0000' },
  yamaha:  { name: 'Yamaha Town',      short: 'YT',  color: '#003087', dark: '#001A5C' },
  vinfast: { name: 'VinFast Service',  short: 'VF',  color: '#00856F', dark: '#005C4C' },
  generic: { name: 'Garage',           short: 'GA',  color: '#F59E0B', dark: '#D97706' },
};
const SVC_LABELS = { motorbike:'Xe m\xE1y', car:'\xD4 t\xF4', oil:'Thay d\u1EA7u', tire:'V\xE1 l\u1ED1p', wash:'R\u1EEDa xe', inspect:'\u0110\u0103ng ki\u1EC3m', body:'\u0110\u1ED3ng s\u01A1n' };

const GARAGES = [
  { id:201, brand:'honda',   name:'Honda Head Nguy\u1EC5n Tr\xE3i',         addr:'12 Nguy\u1EC5n Tr\xE3i, P.B\u1EBFn Th\xE0nh, Q.1',        lat:10.7718, lng:106.6900, dist:0.8, open24:false, rating:4.7, vehicles:['motorbike'],        services:['oil','tire','wash'],            hours:'7:30 - 18:00' },
  { id:202, brand:'yamaha',  name:'Yamaha Town L\xEA L\u1EE3i',              addr:'55 L\xEA L\u1EE3i, P.B\u1EBFn Ngh\xE9, Q.1',              lat:10.7745, lng:106.7025, dist:1.1, open24:false, rating:4.5, vehicles:['motorbike'],        services:['oil','tire','wash','inspect'],  hours:'8:00 - 17:30' },
  { id:203, brand:'generic', name:'Garage \xD4 T\xF4 Tr\u1EA7n H\u01B0ng \u0110\u1EA1o',      addr:'122 Tr\u1EA7n H\u01B0ng \u0110\u1EA1o, P.C\u1EA7u Kho, Q.1',       lat:10.7656, lng:106.6912, dist:1.5, open24:false, rating:4.4, vehicles:['car'],              services:['oil','tire','body','wash'],     hours:'7:00 - 18:30' },
  { id:204, brand:'honda',   name:'Honda Head \u0110inh Ti\xEAn Ho\xE0ng',      addr:'88 \u0110inh Ti\xEAn Ho\xE0ng, P.\u0110a Kao, Q.1',       lat:10.7905, lng:106.6990, dist:1.7, open24:false, rating:4.6, vehicles:['motorbike'],        services:['oil','tire','wash'],            hours:'7:30 - 17:30' },
  { id:205, brand:'vinfast', name:'VinFast Service Center Q.3',      addr:'25 V\xF5 V\u0103n T\u1EA7n, P.6, Q.3',                 lat:10.7810, lng:106.6830, dist:2.0, open24:false, rating:4.8, vehicles:['car'],              services:['oil','tire','body','inspect'],  hours:'7:00 - 19:00' },
  { id:206, brand:'generic', name:'Garage Xe M\xE1y Hai B\xE0 Tr\u01B0ng',      addr:'230 Hai B\xE0 Tr\u01B0ng, P.T\xE2n \u0110\u1ECBnh, Q.1',       lat:10.7890, lng:106.6940, dist:2.2, open24:false, rating:4.2, vehicles:['motorbike'],        services:['oil','tire'],                  hours:'7:00 - 18:00' },
  { id:207, brand:'yamaha',  name:'Yamaha Town C\xE1ch M\u1EA1ng Th\xE1ng T\xE1m', addr:'180 CMT8, P.3, Q.3',                       lat:10.7795, lng:106.6755, dist:2.9, open24:false, rating:4.3, vehicles:['motorbike'],        services:['oil','tire','wash','inspect'],  hours:'8:00 - 17:30' },
  { id:208, brand:'generic', name:'Garage \xD4 T\xF4 B\xECnh Th\u1EA1nh',          addr:'34 \u0110inh B\u1ED9 L\u0129nh, P.24, Q.B\xECnh Th\u1EA1nh',    lat:10.8060, lng:106.7110, dist:3.5, open24:false, rating:4.5, vehicles:['car','motorbike'],  services:['oil','tire','body','wash'],     hours:'7:00 - 18:00' },
  { id:209, brand:'honda',   name:'Honda Head Ph\xFA Nhu\u1EADn',             addr:'92 Ho\xE0ng V\u0103n Th\u1EE5, P.9, Q.Ph\xFA Nhu\u1EADn',     lat:10.8000, lng:106.6720, dist:3.8, open24:false, rating:4.6, vehicles:['motorbike'],        services:['oil','tire','wash'],            hours:'7:30 - 18:00' },
  { id:210, brand:'vinfast', name:'VinFast Service Center Q.5',       addr:'56 Nguy\u1EC5n Tr\xE3i, P.2, Q.5',               lat:10.7580, lng:106.6820, dist:4.0, open24:false, rating:4.7, vehicles:['car'],              services:['oil','tire','body','inspect'],  hours:'7:00 - 19:00' },
  { id:211, brand:'generic', name:'Garage K\u1EF9 Thu\u1EADt L\xEA V\u0103n S\u1EF9',       addr:'290 L\xEA V\u0103n S\u1EF9, P.14, Q.3',               lat:10.7890, lng:106.6680, dist:4.3, open24:false, rating:4.3, vehicles:['car','motorbike'],  services:['oil','tire','body'],            hours:'7:30 - 17:30' },
  { id:212, brand:'yamaha',  name:'Yamaha Town T\xE2n B\xECnh',             addr:'44 Tr\u01B0\u1EDDng S\u01A1n, P.2, Q.T\xE2n B\xECnh',          lat:10.8100, lng:106.6660, dist:4.9, open24:false, rating:4.4, vehicles:['motorbike'],        services:['oil','tire','wash','inspect'],  hours:'8:00 - 17:30' },
];

const STATIONS = [
  { id:1,  brand:'plx',   name:'Petrolimex s\u1ED1 6 \u0110inh Ti\xEAn Ho\xE0ng',  addr:'6 \u0110inh Ti\xEAn Ho\xE0ng, P.\u0110a Kao, Q.1',      lat:10.7892, lng:106.6975, dist:0.4, open24:true,  rating:4.7, fuels:['ron95','ron92','diesel'], services:['carwash','shop'], delta:{} },
  { id:2,  brand:'plx',   name:'Petrolimex Nguy\u1EC5n Th\u1ECB Minh Khai',  addr:'45 Nguy\u1EC5n Th\u1ECB Minh Khai, Q.1',          lat:10.7823, lng:106.6844, dist:1.2, open24:false, rating:4.3, fuels:['ron95','ron92'],          services:['shop'],           delta:{ ron95:-200 } },
  { id:3,  brand:'plx',   name:'Petrolimex L\xEA Du\u1EA9n',               addr:'124 L\xEA Du\u1EA9n, P.B\u1EBFn Ngh\xE9, Q.1',          lat:10.7799, lng:106.7005, dist:1.4, open24:true,  rating:4.6, fuels:['ron95','ron92','diesel'], services:['carwash'],        delta:{ ron95:-100 } },
  { id:4,  brand:'pvoil', name:'PVOIL \u0110i\u1EC7n Bi\xEAn Ph\u1EE7',               addr:'312 \u0110i\u1EC7n Bi\xEAn Ph\u1EE7, P.4, Q.3',           lat:10.7831, lng:106.6803, dist:2.1, open24:true,  rating:4.4, fuels:['ron95','diesel'],         services:[],                 delta:{} },
  { id:5,  brand:'plx',   name:'Petrolimex Hai B\xE0 Tr\u01B0ng',           addr:'178 Hai B\xE0 Tr\u01B0ng, P.\u0110a Kao, Q.1',       lat:10.7874, lng:106.6928, dist:2.3, open24:true,  rating:4.6, fuels:['ron95','ron92','diesel'], services:['carwash','shop'], delta:{} },
  { id:6,  brand:'plx',   name:'Petrolimex C\xE1ch M\u1EA1ng Th\xE1ng T\xE1m',   addr:'210 CMT8, P.4, Q.3',                     lat:10.7789, lng:106.6780, dist:2.8, open24:true,  rating:4.5, fuels:['ron95','ron92','diesel'], services:['shop'],           delta:{} },
  { id:7,  brand:'pvoil', name:'PVOIL S\u01B0 V\u1EA1n H\u1EA1nh',                 addr:'268 S\u01B0 V\u1EA1n H\u1EA1nh, P.9, Q.10',            lat:10.7780, lng:106.6686, dist:3.3, open24:true,  rating:4.5, fuels:['ron95','ron92'],          services:[],                 delta:{} },
  { id:8,  brand:'pvoil', name:'PVOIL Nguy\u1EC5n Tr\xE3i',                 addr:'405 Nguy\u1EC5n Tr\xE3i, P.7, Q.5',             lat:10.7601, lng:106.6810, dist:3.6, open24:true,  rating:4.3, fuels:['ron95','ron92','diesel'], services:['carwash'],        delta:{ diesel:-100 } },
  { id:9,  brand:'plx',   name:'Petrolimex B\xECnh Th\u1EA1nh',             addr:'50 \u0110inh B\u1ED9 L\u0129nh, P.26, Q.B\xECnh Th\u1EA1nh',  lat:10.8074, lng:106.7097, dist:3.9, open24:true,  rating:4.7, fuels:['ron95','ron92','diesel'], services:['carwash','shop'], delta:{} },
  { id:10, brand:'pvoil', name:'PVOIL Ho\xE0ng Di\u1EC7u',                  addr:'90 Ho\xE0ng Di\u1EC7u, P.9, Q.4',               lat:10.7656, lng:106.6964, dist:4.2, open24:false, rating:4.1, fuels:['ron95','diesel'],         services:[],                 delta:{ ron95:+100 } },
  { id:11, brand:'pvoil', name:'PVOIL Nguy\u1EC5n H\u1EEFu C\u1EA3nh',             addr:'100 Nguy\u1EC5n H\u1EEFu C\u1EA3nh, Q.B\xECnh Th\u1EA1nh',    lat:10.7963, lng:106.7162, dist:4.1, open24:true,  rating:4.4, fuels:['ron95','diesel'],         services:['shop'],           delta:{} },
  { id:12, brand:'plx',   name:'Petrolimex Phan X\xEDch Long',         addr:'166 Phan X\xEDch Long, P.2, Q.Ph\xFA Nhu\u1EADn', lat:10.7966, lng:106.6800, dist:4.4, open24:false, rating:4.2, fuels:['ron95','ron92'],          services:[],                 delta:{} },
  { id:13, brand:'pvoil', name:'PVOIL L\xEA V\u0103n S\u1EF9',                   addr:'377 L\xEA V\u0103n S\u1EF9, P.1, Q.T\xE2n B\xECnh',       lat:10.7898, lng:106.6663, dist:4.7, open24:true,  rating:4.4, fuels:['ron95','diesel'],         services:['carwash'],        delta:{} },
  { id:14, brand:'plx',   name:'Petrolimex T\xE2n S\u01A1n Nh\u1EA5t',           addr:'22 Tr\u01B0\u1EDDng S\u01A1n, P.2, Q.T\xE2n B\xECnh',        lat:10.8114, lng:106.6644, dist:5.2, open24:true,  rating:4.8, fuels:['ron95','ron92','diesel'], services:['carwash','shop'], delta:{} },
  { id:15, brand:'plx',   name:'Petrolimex Ho\xE0ng V\u0103n Th\u1EE5',         addr:'158 Ho\xE0ng V\u0103n Th\u1EE5, P.8, Q.Ph\xFA Nhu\u1EADn',  lat:10.7994, lng:106.6716, dist:5.5, open24:false, rating:4.3, fuels:['ron95','ron92','diesel'], services:['shop'],           delta:{} },
];

const FUEL_LABELS = { ron95: 'RON 95-III', ron92: 'E5 RON 92', diesel: 'Diesel' };

// \u2500\u2500 STATE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
let activeType = 'garage';
let activeFilter = 'all';
let activeId = null;
let markerMap = {};
let meMarker = null;

// Travel area state
let travelMode = 'walk';   // 'walk' | 'drive'
let travelMins = 10;
let travelCenter = [10.7847, 106.6879]; // default = map center
let travelCircle = null;
let travelActive = false;

// Speed m/min: walk 80, drive 500 (~30km/h city)
const SPEED = { walk: 80, drive: 500 };

function travelRadius() { return SPEED[travelMode] * travelMins; }

function haversine(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

// \u2500\u2500 MAP INIT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
const map = L.map('map', {
  center: [10.7847, 106.6879],
  zoom: 14,
  zoomControl: false,
  attributionControl: true,
});
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> &copy; <a href="https://carto.com">CARTO</a>',
  subdomains: 'abcd', maxZoom: 19
}).addTo(map);

const markerCluster = L.markerClusterGroup({
  maxClusterRadius: 48,
  iconCreateFunction: function(cluster) {
    return L.divIcon({
      html: \\\`<div class="marker-cluster-inner">\\\${cluster.getChildCount()}</div>\\\`,
      className: 'marker-cluster marker-cluster-medium',
      iconSize: [40, 40]
    });
  }
});
map.addLayer(markerCluster);

// \u2500\u2500 HELPERS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function fmtPrice(val) {
  return val.toLocaleString('vi-VN') + '\u0111';
}
function fuelPrice(s, fuel) {
  return FUELS_BASE[fuel] + (s.delta[fuel] || 0);
}

function filtered() {
  let list = [...GARAGES];

  if      (activeFilter === 'motorbike') list = list.filter(g => g.vehicles.includes('motorbike'));
  else if (activeFilter === 'car')       list = list.filter(g => g.vehicles.includes('car'));
  else if (activeFilter === 'oil')       list = list.filter(g => g.services.includes('oil'));
  else if (activeFilter === 'wash')      list = list.filter(g => g.services.includes('wash'));

  if (travelActive) {
    const r = travelRadius();
    list = list.filter(s => haversine(travelCenter[0], travelCenter[1], s.lat, s.lng) <= r);
  }

  const sort = document.getElementById('sortSelect').value;
  if (sort === 'dist')   list.sort((a,b) => a.dist - b.dist);
  if (sort === 'rating') list.sort((a,b) => b.rating - a.rating);
  if (sort === 'open')   list.sort((a,b) => (b.open24 ? 1:0) - (a.open24 ? 1:0));
  return list;
}

// \u2500\u2500 CARD STRIP \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function renderCardStrip() {
  const track = document.getElementById('cardStripTrack');
  if (!track) return;
  const list = filtered();
  track.innerHTML = list.map(g => {
    const b = GARAGE_BRANDS[g.brand];
    const isActive = g.id === activeId;
    const vehicleLabel = g.vehicles.includes('car') && g.vehicles.includes('motorbike') ? 'Xe m\xE1y + \xD4 t\xF4'
      : g.vehicles.includes('car') ? '\xD4 t\xF4' : 'Xe m\xE1y';
    const topSvcs = g.services.slice(0, 2).map(sv => \\\`<span class="swipe-tag">\\\${SVC_LABELS[sv]||sv}</span>\\\`).join('');
    return \\\`
    <div class="swipe-card\\\${isActive ? ' is-active' : ''}" id="swipe-\\\${g.id}" data-id="\\\${g.id}" onclick="selectStation(\\\${g.id})">
      <div class="swipe-card-top">
        <div class="swipe-badge" style="background:linear-gradient(135deg,\\\${b.color} 0%,\\\${b.dark} 100%)">\\\${b.short}</div>
        <div class="swipe-info">
          <div class="swipe-name">\\\${g.name}</div>
          <div class="swipe-meta">\\\${g.dist} km \xB7 \\\${vehicleLabel}</div>
        </div>
        <div class="swipe-rating">\u2605 \\\${g.rating}</div>
      </div>
      <div class="swipe-services">
        <div class="swipe-tags">\\\${topSvcs}</div>
        <button class="swipe-cta" onclick="event.stopPropagation();selectStation(\\\${g.id})">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          Chi ti\u1EBFt
        </button>
      </div>
    </div>\\\`;
  }).join('');
  setupCardSnap(list);
}

let _snapTimer;
function setupCardSnap(list) {
  const track = document.getElementById('cardStripTrack');
  if (!track || track._snapBound) return;
  track._snapBound = true;
  track.addEventListener('scroll', () => {
    clearTimeout(_snapTimer);
    _snapTimer = setTimeout(() => {
      const cards = track.querySelectorAll('.swipe-card');
      const center = track.scrollLeft + track.clientWidth / 2;
      let closest = null, minDist = Infinity;
      cards.forEach(c => {
        const d = Math.abs((c.offsetLeft + c.offsetWidth / 2) - center);
        if (d < minDist) { minDist = d; closest = c; }
      });
      if (!closest) return;
      const id = parseInt(closest.dataset.id);
      if (id === activeId) return;
      activeId = id;
      const g = list.find(x => x.id === id);
      if (g) map.setView([g.lat, g.lng], 15, { animate: true, duration: 0.4 });
      renderMarkers();
      cards.forEach(c => c.classList.toggle('is-active', parseInt(c.dataset.id) === id));
    }, 100);
  }, { passive: true });
}

function scrollCardTo(id) {
  const card = document.getElementById('swipe-' + id);
  if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
}

// \u2500\u2500 RENDER LIST \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function renderList() {
  const list = filtered();
  const el = document.getElementById('stationList');
  renderCardStrip();
  document.getElementById('listCount').textContent = list.length + ' garage';
  document.getElementById('mapCount').textContent = list.length + ' \u0111\u1ECBa \u0111i\u1EC3m';

  el.innerHTML = list.map(g => {
    const b = GARAGE_BRANDS[g.brand];
    const vehicleTag = g.vehicles.includes('car') && g.vehicles.includes('motorbike')
      ? '<span class="badge badge-svc">Xe m\xE1y + \xD4 t\xF4</span>'
      : g.vehicles.includes('car')
        ? '<span class="badge badge-svc">\xD4 t\xF4</span>'
        : '<span class="badge badge-svc">Xe m\xE1y</span>';
    return \\\`
    <div class="station-card\\\${g.id === activeId ? ' is-active' : ''}" id="card-\\\${g.id}" onclick="selectStation(\\\${g.id})">
      <div class="station-brand-badge" style="background:linear-gradient(135deg,\\\${b.color} 0%,\\\${b.dark} 100%)">\\\${b.short}</div>
      <div class="station-info">
        <div class="station-name-row">
          <span class="station-name">\\\${g.name}</span>
          <span class="station-rating">\u2605 \\\${g.rating}</span>
        </div>
        <div class="station-addr">\\\${g.addr}</div>
        <div class="station-meta">
          <span class="badge badge-dist"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>\\\${g.dist} km</span>
          \\\${vehicleTag}
          \\\${g.services.slice(0,2).map(sv => \\\`<span class="badge badge-svc">\\\${SVC_LABELS[sv]||sv}</span>\\\`).join('')}
        </div>
        <div class="station-price-row">
          <div class="fuel-pill" style="color:var(--gray-600)">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            \\\${g.hours}
          </div>
        </div>
      </div>
    </div>\\\`;
  }).join('');
}

// \u2500\u2500 RENDER MARKERS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function renderMarkers() {
  markerCluster.clearLayers();
  markerMap = {};
  const list = filtered();

  list.forEach(s => {
    const isActive = s.id === activeId;
    const b = GARAGE_BRANDS[s.brand];
    const pinHtml = \\\`<div class="pin pin-garage\\\${isActive ? ' active' : ''}">
      <div class="pin-icon" style="background:\\\${b.color}">\\\${b.short.slice(0,1)}</div>
      \\\${b.short}
    </div>\\\`;
    const icon = L.divIcon({ html: pinHtml, className: '', iconSize: [null,null], iconAnchor: [0,0] });
    const marker = L.marker([s.lat, s.lng], { icon }).addTo(markerCluster);
    marker.on('click', () => selectStation(s.id));
    markerMap[s.id] = marker;
  });
}

// \u2500\u2500 SELECT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function selectStation(id) {
  if (activeId === id) { closeDetail(); return; }
  activeId = id;
  renderList();
  renderMarkers();
  const s = GARAGES.find(x => x.id === id);
  if (!s) return;
  map.setView([s.lat, s.lng], 15, { animate: true });
  showDetail(s);
  setTimeout(() => {
    const card = document.getElementById('card-' + id);
    if (card) card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    scrollCardTo(id);
  }, 50);
}

function closeDetail() {
  activeId = null;
  document.querySelector('.split').classList.remove('detail-open');
  document.getElementById('detailPanel').classList.remove('open');
  renderList();
  renderMarkers();
}

function showDetail(s) {
  const b = GARAGE_BRANDS[s.brand];

  const mainContent = \\\`
    <div class="detail-section">
      <div class="detail-section-title">D\u1ECBch v\u1EE5</div>
      <div class="detail-fuel-grid">
        \\\${s.services.map(sv => \\\`
          <div class="detail-fuel-item">
            <div class="detail-fuel-type">\\\${SVC_LABELS[sv] || sv}</div>
            <div class="detail-fuel-price" style="font-size:12px;color:var(--green-500)">C\xF3 d\u1ECBch v\u1EE5</div>
          </div>\\\`).join('')}
      </div>
    </div>
    <div class="detail-section">
      <div class="detail-section-title">Lo\u1EA1i xe ph\u1EE5c v\u1EE5</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        \\\${s.vehicles.map(v => \\\`<span class="badge badge-svc" style="padding:6px 12px;font-size:12px">\\\${SVC_LABELS[v]||v}</span>\\\`).join('')}
      </div>
    </div>
  \\\`;

  const openStatus = \\\`<span class="badge badge-open">\\\${s.hours}</span>\\\`;

  document.getElementById('detailContent').innerHTML = \\\`
    <div class="detail-info-block">
      <div class="detail-info-top">
        <div class="detail-icon" style="background:linear-gradient(135deg,\\\${b.color} 0%,\\\${b.dark} 100%)">\\\${b.short}</div>
        <div class="detail-info-main">
          <h2 class="detail-name">\\\${s.name}</h2>
          <div class="detail-status-inline">\\\${openStatus}</div>
        </div>
      </div>
      <div class="detail-row">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>\\\${s.addr} \xB7 <strong>\\\${s.dist} km</strong></span>
      </div>
      <div class="detail-row">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        <span class="detail-hours-inline">\\\${s.hours} h\u1EB1ng ng\xE0y</span>
      </div>
    </div>
    <div class="detail-hero" style="background:linear-gradient(135deg,\\\${b.color} 0%,\\\${b.dark} 100%)">
      <div class="detail-hero-logo">\\\${b.short}</div>
      <div class="momo-overlay">
        <div class="momo-overlay-badge">
          <img src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg" alt="MoMo">
          Thanh to\xE1n MoMo
        </div>
        <div class="momo-overlay-text">
          <strong>\\\${b.name}</strong>
          \u0110\u1EB7t d\u1ECBch v\u1EE5, thanh to\xE1n qua v\xED
        </div>
      </div>
    </div>
    <div class="detail-scroll">
      \\\${mainContent}
      <div class="detail-actions">
        <button class="btn-primary" onclick="window.open('https://momo.vn', '_blank')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          M\u1EDF App MoMo
        </button>
        <div class="detail-actions-split">
          <button class="btn-secondary" onclick="window.open('https://maps.google.com/?daddr=\\\${s.lat},\\\${s.lng}', '_blank')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
            Ch\u1EC9 \u0111\u01B0\u1EDDng
          </button>
          <button class="btn-secondary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.08 4.18 2 2 0 015 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            G\u1ECDi \u0111i\u1EC7n
          </button>
        </div>
      </div>
    </div>
  \\\`;
  document.querySelector('.split').classList.add('detail-open');
  document.getElementById('detailPanel').classList.add('open');
}

// \u2500\u2500 FILTER & SORT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function setFilter(f, btn) {
  activeFilter = f;
  activeId = null;
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  closeDetail();
  renderList();
  renderMarkers();
}
function sortStations() { renderList(); renderMarkers(); }

function renderFilterChips() {
  document.getElementById('filterBar').innerHTML = \\\`
    <button class="filter-chip active" onclick="setFilter('all',this)">T\u1EA5t c\u1EA3</button>
    <button class="filter-chip" onclick="setFilter('motorbike',this)">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M5 17H3v-4l2-5h8l3 5h2a2 2 0 0 1 0 4h-1"/><path d="M9 8l2 4"/></svg>
      Xe m\xE1y
    </button>
    <button class="filter-chip" onclick="setFilter('car',this)">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M16 7l-2-4H10L8 7"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
      \xD4 t\xF4
    </button>
    <button class="filter-chip" onclick="setFilter('oil',this)">Thay d\u1EA7u</button>
    <button class="filter-chip" onclick="setFilter('wash',this)">R\u1EEDa xe</button>\\\`;
}

// \u2500\u2500 TRAVEL AREA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function onSliderInput(val) {
  travelMins = +val;
  document.getElementById('travelMinsLabel').textContent = val + ' ph\xFAt';
  const pct = ((val - 5) / 25 * 100).toFixed(1) + '%';
  document.getElementById('travelSlider').style.setProperty('--fill', pct);
  if (travelCircle) {
    travelCircle.setRadius(travelRadius());
    renderList();
    renderMarkers();
  }
}

function setTravelMode(mode) {
  travelMode = mode;
  document.getElementById('modeWalk').classList.toggle('active', mode === 'walk');
  document.getElementById('modeDrive').classList.toggle('active', mode === 'drive');
  if (travelCircle) {
    travelCircle.setRadius(travelRadius());
    renderList();
    renderMarkers();
  }
}

function applyTravelArea() {
  // Use current map center as anchor if no GPS
  travelCenter = [map.getCenter().lat, map.getCenter().lng];
  travelActive = true;

  const r = travelRadius();
  if (travelCircle) map.removeLayer(travelCircle);
  travelCircle = L.circle(travelCenter, {
    radius: r,
    color: '#1C171A',
    weight: 2,
    dashArray: '6 4',
    fillColor: '#1C171A',
    fillOpacity: 0.05,
  }).addTo(map);

  document.getElementById('travelBar').classList.add('travel-area-active');
  document.getElementById('travelSlider').style.setProperty('--fill',
    ((travelMins - 5) / 25 * 100).toFixed(1) + '%');

  renderList();
  renderMarkers();

  // Fit map to circle
  map.fitBounds(travelCircle.getBounds(), { padding: [32, 32] });
}

function clearTravelArea() {
  travelActive = false;
  if (travelCircle) { map.removeLayer(travelCircle); travelCircle = null; }
  document.getElementById('travelBar').classList.remove('travel-area-active');
  renderList(); renderMarkers();
}

// \u2500\u2500 GEOLOCATION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function locateMe() {
  if (!navigator.geolocation) return;
  document.getElementById('locateBtn').classList.add('active');
  navigator.geolocation.getCurrentPosition(pos => {
    const { latitude: lat, longitude: lng } = pos.coords;
    travelCenter = [lat, lng];
    map.setView([lat, lng], 15);
    if (meMarker) map.removeLayer(meMarker);
    meMarker = L.marker([lat, lng], {
      icon: L.divIcon({
        html: '<div class="me-dot"></div>',
        className: '', iconSize: [14, 14], iconAnchor: [7, 7]
      })
    }).addTo(map);
    // Auto-apply travel area from GPS
    travelActive = true;
    applyTravelArea();
    setTimeout(() => document.getElementById('locateBtn').classList.remove('active'), 2000);
  }, () => {
    document.getElementById('locateBtn').classList.remove('active');
  });
}

// \u2500\u2500 NAV SIDEBAR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
function openNavSidebar() {
  document.getElementById('navSidebar').classList.add('open');
  document.getElementById('navSidebarOverlay').classList.add('open');
}
function closeNavSidebar() {
  document.getElementById('navSidebar').classList.remove('open');
  document.getElementById('navSidebarOverlay').classList.remove('open');
}
function toggleSidebarSection(el) {
  el.classList.toggle('expanded');
  el.nextElementSibling.classList.toggle('open');
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNavSidebar(); });

// \u2500\u2500 INIT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
renderFilterChips();
renderList();
renderMarkers();
renderCardStrip();
<\/script> `])), renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(`<style>${rawCss}</style>`)}` }), maybeRenderHead(), renderScript($$result2, "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/garage.astro?astro&type=script&index=0&lang.ts"), renderScript($$result2, "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/garage.astro?astro&type=script&index=1&lang.ts")) })}`;
}, "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/garage.astro", void 0);

const $$file = "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/garage.astro";
const $$url = "/tien-ich-giao-thong/garage";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Garage,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
