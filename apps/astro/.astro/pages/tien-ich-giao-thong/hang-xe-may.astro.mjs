import { c as createComponent, e as renderComponent, b as renderTemplate, m as maybeRenderHead, F as Fragment, u as unescapeHTML } from '../../chunks/astro/server_BMOddyS3.mjs';
import 'piccolore';
import { $ as $$VehicleHub } from '../../chunks/VehicleHub_Msovdq2n.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$HangXeMay = createComponent(($$result, $$props, $$slots) => {
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

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --pink-500:#EB2F96;--pink-400:#F06AB5;--pink-300:#F6A3CE;--pink-100:#FBD6EC;--pink-50:#FFF0F9;
  --gray-900:#1C171A;--gray-700:#3D3540;--gray-500:#7C7483;--gray-400:#A09AA5;--gray-200:#E8E4EB;--gray-100:#F4F2F6;--gray-50:#FAFAFA;
  --white:#fff;
  --r-sm:4px;--r-md:8px;--r-lg:10px;--r-xl:12px;
  --shadow-s:0 2px 8px rgba(0,0,0,.08);--shadow-m:0 4px 20px rgba(0,0,0,.10);
  --content:1040px;
}
body{font-family:'Be Vietnam Pro',sans-serif;color:var(--gray-900);background:var(--gray-50);font-size:14px;line-height:1.5}
a{text-decoration:none;color:inherit}
button{font-family:inherit;cursor:pointer}
.shell{max-width:var(--content);margin:0 auto;padding:0 20px}

/* \u2500\u2500 GAS STRIP \u2500\u2500 */
.gas-strip{height:36px;background:var(--gray-900);display:flex;align-items:center;justify-content:center;overflow:hidden}
.gas-strip-inner{display:flex;align-items:center;gap:20px;font-size:11.5px;white-space:nowrap}
.gs-label{color:rgba(255,255,255,.45);display:flex;align-items:center;gap:6px;font-weight:700}
.gs-dot{width:6px;height:6px;border-radius:50%;background:#16a34a}
.gs-item{display:flex;align-items:center;gap:6px;color:rgba(255,255,255,.7)}
.gs-name{font-weight:600}
.gs-price{font-weight:800;color:#fff}
.gs-change{font-size:10px;font-weight:700}.gs-change.up{color:#4ade80}.gs-change.down{color:#f87171}
.gs-link{color:var(--pink-400);font-weight:700;font-size:11.5px}
/* \u2500\u2500 SITE NAV \u2500\u2500 */
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
.nav-momo-logo{display:flex;align-items:center;text-decoration:none;flex-shrink:0}
.nav-momo-icon{width:30px;height:30px;border-radius:8px;overflow:hidden;flex-shrink:0}
.nav-momo-icon img{width:100%;height:100%;display:block}
.logo-text{font-size:14px;font-weight:800;color:var(--gray-900)}
.logo-text em{color:var(--pink-500);font-style:normal}
.nav-hub-brand{display:flex;align-items:center;gap:8px;text-decoration:none;flex-shrink:0}
.nav-hub-icon{width:30px;height:30px;border-radius:8px;overflow:hidden;flex-shrink:0}
.nav-hub-icon img{width:100%;height:100%;display:block}
.nav-hub-text{font-size:13px;font-weight:700;color:var(--gray-700,#374151);white-space:nowrap}
.nav-hub-text em{color:var(--pink-500,#EB2F96);font-style:normal}
.site-nav:has(.nav-item:hover) .nav-hub-text{color:rgba(255,255,255,.8)}
.site-nav:has(.nav-item:hover) .nav-hub-text em{color:rgba(255,255,255,.6)}
.nav-links{display:flex;gap:0;margin-left:8px;flex:1}
.nav-item{position:static}
.nav-trigger{display:inline-flex;align-items:center;gap:5px;height:56px;padding:0 14px;font-size:13px;font-weight:600;color:var(--gray-600);background:none;border:none;cursor:pointer;text-decoration:none;white-space:nowrap;transition:color .15s;font-family:inherit}
.nav-trigger:hover,.nav-item:hover .nav-trigger{color:var(--gray-900)}
.nav-trigger svg{transition:transform .2s;flex:none}
.nav-item:hover .nav-trigger svg{transform:rotate(180deg)}
.mega{position:absolute;top:100%;left:0;right:0;z-index:400;background:#1a2535;border-radius:0 0 20px 20px;padding:28px 32px 36px;opacity:0;transform:translateY(-6px);pointer-events:none;transition:opacity .18s,transform .18s;box-shadow:0 20px 48px rgba(0,0,0,.28)}
.nav-item:hover .mega{opacity:1;transform:translateY(0);pointer-events:auto}
.mega-header{display:inline-flex;align-items:center;gap:6px;font-size:15px;font-weight:700;color:#fff;text-decoration:none;margin-bottom:24px;opacity:.9;transition:opacity .12s}
.mega-header:hover{opacity:1}
.mega-header svg{flex:none}
.mega-cols{display:flex;gap:48px}
.mega-col{display:flex;flex-direction:column;gap:0;min-width:140px}
.mega-col-label{font-size:11px;font-weight:600;color:rgba(255,255,255,.4);letter-spacing:.04em;margin-bottom:10px}
.mega-item{display:block;padding:7px 0;font-size:15px;font-weight:500;color:rgba(255,255,255,.85);text-decoration:none;transition:color .12s;white-space:nowrap}
.mega-item:hover{color:#fff}
.nav-menu-btn{display:none}
.nav-sidebar,.nav-sidebar-overlay{display:none}
@media(max-width:768px){
  .nav-inner{height:48px;padding:0 10px;gap:8px}
  .nav-back span{display:none}
  .nav-hub-text{display:none}
  .nav-sep{display:none}
  .logo-text{font-size:12.5px}
  .logo-icon{width:28px;height:28px}
  .nav-links{overflow-x:auto;scrollbar-width:none}
  .nav-links::-webkit-scrollbar{display:none}
  .nav-trigger{height:48px;padding:0 10px;font-size:12px}
  .mega{display:none}
  .nav-search{display:none}
  .nav-search-icon-btn{display:flex;margin-left:auto}
  .nav-menu-btn{display:flex!important;align-items:center;justify-content:center;width:36px;height:36px;border:1.5px solid var(--gray-200);border-radius:9px;background:#fff;color:var(--gray-700);flex-shrink:0;cursor:pointer}
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
}

/* \u2500\u2500 NAV SEARCH \u2500\u2500 */
.nav-search{position:relative;margin-left:auto;flex-shrink:0}
.nav-search-box{display:flex;align-items:center;gap:7px;height:34px;padding:0 10px 0 11px;background:var(--gray-100);border:1.5px solid var(--gray-200);border-radius:9px;cursor:text;min-width:200px;transition:border-color .18s,background .18s,min-width .25s cubic-bezier(.4,0,.2,1),box-shadow .18s}
.nav-search-box:focus-within{border-color:var(--pink-500);background:#fff;box-shadow:0 0 0 3px rgba(235,47,150,.12);min-width:260px}
.nav-search-box svg{flex-shrink:0;color:var(--gray-400);transition:color .15s}
.nav-search-box:focus-within svg{color:var(--pink-500)}
.nav-search-inp{flex:1;border:none;background:none;outline:none;font-family:inherit;font-size:13px;font-weight:500;color:var(--gray-900);min-width:0}
.nav-search-inp::placeholder{color:var(--gray-400)}
.nav-search-kbd{font-size:10px;font-weight:700;color:var(--gray-400);background:var(--gray-200);border-radius:4px;padding:1px 5px;flex-shrink:0;font-family:inherit;pointer-events:none;transition:opacity .15s}
.nav-search-box:focus-within .nav-search-kbd{opacity:0}
.nav-search-drop{position:absolute;top:calc(100% + 10px);right:0;width:320px;max-height:400px;overflow-y:auto;background:#fff;border:1px solid var(--gray-200);border-radius:14px;box-shadow:0 12px 40px rgba(28,23,26,.16),0 2px 8px rgba(28,23,26,.07);z-index:600;display:none;flex-direction:column;scrollbar-width:thin;scrollbar-color:var(--gray-200) transparent}
.nav-search-drop.open{display:flex}
.nsd-section-label{font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--gray-400);padding:12px 14px 6px;flex-shrink:0}
.nsd-item{display:flex;align-items:center;gap:11px;padding:9px 14px;cursor:pointer;text-decoration:none;transition:background .12s}
.nsd-item:hover,.nsd-item.nsd-active{background:var(--gray-50)}
.nsd-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.nsd-info{flex:1;min-width:0}
.nsd-model{font-size:13.5px;font-weight:700;color:var(--gray-900);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.nsd-brand{font-size:11.5px;color:var(--gray-500);margin-top:1px}
.nsd-type{font-size:10px;font-weight:700;letter-spacing:.03em;padding:3px 7px;border-radius:5px;flex-shrink:0;background:var(--gray-100);color:var(--gray-600)}
.nsd-type.ev{background:var(--green-50);color:var(--green-500)}
.nsd-type.motorbike{background:var(--blue-50);color:var(--blue-500)}
.nsd-divider{height:1px;background:var(--gray-100);margin:4px 0;flex-shrink:0}
.nsd-empty{padding:28px 14px;text-align:center;font-size:13px;color:var(--gray-400)}
.nsd-empty strong{display:block;font-size:14px;font-weight:700;color:var(--gray-600);margin-bottom:4px}
.nav-search-icon-btn{display:none;align-items:center;justify-content:center;width:36px;height:36px;border-radius:8px;background:none;border:1.5px solid var(--gray-200);color:var(--gray-600);cursor:pointer;flex-shrink:0;transition:background .15s,color .15s}
.nav-search-icon-btn:hover{background:var(--gray-100);color:var(--gray-900)}
.nav-search-overlay{display:none;position:sticky;top:56px;left:0;right:0;z-index:199;padding:8px 12px 10px;background:#fff;border-bottom:1px solid var(--gray-200);box-shadow:0 4px 12px rgba(28,23,26,.08)}
.nav-search-overlay.open{display:block}
.nav-search-overlay .nav-search-box{width:100%;min-width:0;border-color:var(--pink-500);background:#fff;box-shadow:0 0 0 3px rgba(235,47,150,.1)}
.nav-search-overlay .nav-search-drop{position:static;width:100%;margin-top:8px;max-height:320px;border-radius:10px}
/* BREADCRUMB */
.bc-bar{background:#fff;border-bottom:1px solid var(--gray-200);padding:8px 0}
.bc-inner{display:flex;align-items:center;gap:4px;font-size:12px}
.bc-link{color:var(--gray-500);font-weight:600}
.bc-link:hover{color:var(--pink-500)}
.bc-sep{color:var(--gray-400);margin:0 2px}
.bc-cur{color:var(--gray-900);font-weight:700}

/* HERO */
.hero{background:#fff;padding:32px 0 24px;border-bottom:1px solid var(--gray-200)}
.veh-tabs{display:flex;gap:4px;margin-bottom:20px}
.veh-tab{display:inline-flex;align-items:center;gap:6px;padding:7px 18px;border-radius:999px;font-size:13px;font-weight:700;border:1.5px solid var(--gray-200);background:var(--white);color:var(--gray-500);cursor:pointer;text-decoration:none;transition:color .15s,border-color .15s,background .15s}
.veh-tab.active{background:var(--gray-900);color:#fff;border-color:var(--gray-900)}
.veh-tab:not(.active):hover{border-color:var(--gray-400);color:var(--gray-700)}
.hero-eyebrow{font-size:11px;font-weight:800;color:var(--pink-500);letter-spacing:1.2px;text-transform:uppercase;margin-bottom:8px}
.hero-title{font-size:28px;font-weight:900;color:var(--gray-900);line-height:1.2;margin-bottom:8px}
.hero-title span{color:var(--pink-500)}
.hero-sub{font-size:14px;color:var(--gray-500);max-width:480px}

/* FILTER TABS */
.filter-bar{padding:20px 0 0}
.filter-tabs{display:flex;gap:8px;flex-wrap:wrap}
.filter-tab{padding:8px 16px;border-radius:20px;border:1.5px solid var(--gray-200);font-size:13px;font-weight:700;color:var(--gray-700);background:#fff;cursor:pointer;transition:.15s;display:flex;align-items:center;gap:6px}
.filter-tab:hover{border-color:var(--pink-300);color:var(--pink-500)}
.filter-tab.active{border-color:var(--pink-500);background:var(--pink-50);color:var(--pink-500)}
.filter-count{font-size:11px;font-weight:800;background:var(--pink-100);color:var(--pink-500);border-radius:10px;padding:1px 6px}
.filter-tab.active .filter-count{background:var(--pink-500);color:#fff}

/* TYPE GRID */
.type-section{padding:24px 0 8px}
.section-label{font-size:11px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:var(--gray-400);margin-bottom:14px}
.type-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:24px}
.type-card{background:#fff;border:1.5px solid var(--gray-200);border-radius:var(--r-lg);padding:14px 10px 11px;display:flex;flex-direction:column;align-items:center;gap:8px;cursor:pointer;transition:.15s;text-align:center}
.type-card:hover,.type-card.active{border-color:var(--pink-500);background:var(--pink-50)}
.type-card-icon{font-size:24px;line-height:1}
.type-card-name{font-size:12px;font-weight:700;color:var(--gray-700)}
.type-card.active .type-card-name{color:var(--pink-500)}

/* BRAND GRID */
.brand-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;padding-bottom:48px}
.brand-card{background:#fff;border:1.5px solid var(--gray-100);border-radius:10px;overflow:hidden;display:block;transition:.22s cubic-bezier(.2,.8,.2,1);position:relative;box-shadow:0 1px 4px rgba(0,0,0,.05)}
.brand-card:hover{border-color:var(--pink-300);box-shadow:var(--shadow-m);transform:translateY(-2px)}
.brand-card-visual{height:100px;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center}
.brand-card-bike-bg{position:absolute;right:-8px;bottom:-4px;opacity:.18}
.brand-card-mark-wrap{position:absolute;top:12px;left:12px}
.brand-mark{border-radius:var(--r-md);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#fff;font-weight:900;letter-spacing:-.5px;box-shadow:0 3px 10px rgba(0,0,0,.22)}
.brand-card-body{padding:12px 14px 14px}
.brand-card-name{font-size:15px;font-weight:800;color:var(--gray-900);margin-bottom:2px}
.brand-card-origin{font-size:11px;color:var(--gray-400);font-weight:600;margin-bottom:10px}
.brand-card-bottom{display:flex;align-items:center;justify-content:space-between}
.brand-card-top-model{font-size:12px;color:var(--gray-500)}
.brand-card-top-model strong{color:var(--gray-700)}
.brand-card-arrow{width:24px;height:24px;border-radius:50%;background:var(--gray-100);display:flex;align-items:center;justify-content:center;flex-shrink:0}

/* DETAIL LAYOUT */
.detail-layout{display:grid;grid-template-columns:1fr 320px;gap:32px;padding-top:32px;padding-bottom:48px;align-items:start}
.detail-main{}
.detail-sidebar{}

/* DETAIL HEADER */
.detail-header{display:flex;align-items:flex-start;gap:16px;margin-bottom:20px}
.detail-brand-mark{border-radius:var(--r-lg);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#fff;font-weight:900;letter-spacing:-.5px}
.detail-brand-name{font-size:24px;font-weight:900;margin-bottom:4px}
.detail-brand-tagline{font-size:13px;color:var(--gray-500)}
.detail-meta{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
.meta-chip{display:inline-flex;align-items:center;gap:5px;padding:5px 10px;border-radius:20px;font-size:12px;font-weight:700;border:1px solid var(--gray-200);color:var(--gray-700);background:#fff}
.meta-chip.green{color:#059669;border-color:#A7F3D0;background:#ECFDF5}
.meta-chip.blue{color:#2563EB;border-color:#BFDBFE;background:#EFF6FF}
.meta-chip.amber{color:#D97706;border-color:#FDE68A;background:#FFFBEB}

/* QUICK NAV */
.quick-nav{display:flex;gap:6px;flex-wrap:wrap;padding:14px 0;border-bottom:1px solid var(--gray-200);margin-bottom:24px}
.qnav-pill{padding:6px 14px;border-radius:20px;font-size:12px;font-weight:700;color:var(--gray-600);background:var(--gray-100);border:none;cursor:pointer;transition:.12s}
.qnav-pill:hover{background:var(--gray-200)}

/* SECTIONS */
.section-h{font-size:18px;font-weight:800;margin-bottom:4px}
.section-sub{font-size:13px;color:var(--gray-500);margin-bottom:20px}
.eyebrow{font-size:10px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;color:var(--pink-500);margin-bottom:6px}

/* MODEL GRID */
.model-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:40px}
.model-card{background:#fff;border:1.5px solid var(--gray-200);border-radius:var(--r-lg);padding:16px;cursor:pointer;transition:.15s;position:relative}
.model-card:hover{border-color:var(--pink-400);box-shadow:var(--shadow-s)}
.model-card-visual{height:70px;display:flex;align-items:center;justify-content:center;margin-bottom:10px;opacity:.85}
.model-card-name{font-size:14px;font-weight:800;margin-bottom:2px}
.model-card-type{font-size:11px;font-weight:700;color:var(--gray-400);margin-bottom:8px}
.model-card-price{font-size:12px;color:var(--gray-600)}
.model-card-price strong{color:var(--gray-900);font-weight:800}
.model-card-arrow{position:absolute;top:12px;right:12px;color:var(--gray-300)}

/* BH SIDEBAR CARD */
.bh-side-card{background:#fff;border:1.5px solid var(--gray-200);border-radius:var(--r-xl);padding:20px;margin-bottom:16px}
.bh-side-title{font-size:13px;font-weight:800;margin-bottom:4px}
.bh-side-sub{font-size:12px;color:var(--gray-500);margin-bottom:14px}
.bh-type-row{display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--gray-100)}
.bh-type-row:last-child{border-bottom:none}
.bh-type-label{font-size:12px;font-weight:700;color:var(--gray-700)}
.bh-type-note{font-size:11px;color:var(--gray-400)}
.bh-type-price{font-size:13px;font-weight:800;color:var(--pink-500)}
.btn-bh{display:flex;align-items:center;justify-content:center;gap:8px;background:var(--pink-500);color:#fff;font-size:13px;font-weight:700;padding:12px;border-radius:var(--r-md);border:none;width:100%;cursor:pointer;margin-top:14px;text-decoration:none}
.btn-bh:hover{background:#c7007e}

/* GARAGE */
.garage-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:40px}
.garage-card{background:#fff;border:1.5px solid var(--gray-200);border-radius:var(--r-lg);padding:14px}
.garage-name{font-size:13px;font-weight:800;margin-bottom:2px}
.garage-addr{font-size:12px;color:var(--gray-500)}
.garage-tag{display:inline-block;font-size:10px;font-weight:800;padding:2px 8px;border-radius:4px;margin-top:6px}
.garage-tag.auth{background:#EFF6FF;color:#2563EB}
.garage-tag.partner{background:var(--pink-50);color:var(--pink-500)}

/* FAQ */
.faq-list{display:flex;flex-direction:column;gap:10px;margin-bottom:40px}
.faq-item{background:#fff;border:1.5px solid var(--gray-200);border-radius:var(--r-lg);overflow:hidden}
.faq-q{padding:14px 16px;font-size:13px;font-weight:700;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:8px}
.faq-q:hover{background:var(--gray-50)}
.faq-a{padding:0 16px 14px;font-size:13px;color:var(--gray-600);line-height:1.6;display:none}
.faq-item.open .faq-a{display:block}
.faq-item.open .faq-chevron{transform:rotate(180deg)}
.faq-chevron{flex-shrink:0;transition:.2s;color:var(--gray-400)}

/* STAT BAND */
.stat-band{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--gray-200);border:1px solid var(--gray-200);border-radius:var(--r-lg);overflow:hidden;margin-bottom:24px}
.stat-cell{background:#fff;padding:16px;text-align:center}
.stat-val{font-size:20px;font-weight:900;color:var(--gray-900);margin-bottom:2px}
.stat-label{font-size:11px;color:var(--gray-400);font-weight:600}

/* MODEL DETAIL */
.model-detail-header{background:#fff;border:1.5px solid var(--gray-200);border-radius:var(--r-xl);padding:20px;margin-bottom:20px}
.model-specs{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:14px}
.spec-row{display:flex;flex-direction:column;padding:10px 12px;background:var(--gray-50);border-radius:var(--r-md)}
.spec-label{font-size:11px;color:var(--gray-400);font-weight:600;margin-bottom:2px}
.spec-val{font-size:13px;font-weight:800;color:var(--gray-900)}

/* STICKY BH BAR */
.sticky-bh-bar{position:fixed;bottom:0;left:0;right:0;z-index:300;display:flex;align-items:center;justify-content:space-between;padding:12px 20px;color:#fff}
.sticky-bh-copy strong{font-size:14px;font-weight:800;display:block}
.sticky-bh-copy span{font-size:12px;opacity:.85}
.sticky-bh-btn{background:#fff;font-size:13px;font-weight:800;padding:10px 20px;border-radius:var(--r-md);border:none;cursor:pointer;display:flex;align-items:center;gap:6px;white-space:nowrap;flex-shrink:0}

/* EMPTY / BACK */
.back-btn{display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:700;color:var(--gray-500);border:none;background:none;padding:0;margin-bottom:20px;cursor:pointer}
.back-btn:hover{color:var(--pink-500)}

/* RESPONSIVE */
@media(max-width:900px){
  .detail-layout{grid-template-columns:1fr}
  .brand-grid{grid-template-columns:repeat(2,1fr)}
  .model-grid{grid-template-columns:repeat(2,1fr)}
  .type-grid{grid-template-columns:repeat(4,1fr)}
}
@media(max-width:600px){
  .brand-grid{grid-template-columns:repeat(2,1fr);gap:10px}
  .model-grid{grid-template-columns:1fr 1fr}
  .type-grid{grid-template-columns:repeat(2,1fr)}
  .garage-grid{grid-template-columns:1fr}
  .hero-title{font-size:22px}
  .detail-brand-name{font-size:20px}
}
</style>
`;
  return renderTemplate`${renderComponent($$result, "VehicleHub", $$VehicleHub, { "title": "H\xE3ng Xe M\xE1y - Ti\u1EC7n \xCDch Giao Th\xF4ng MoMo", "description": "Tra c\u1EE9u h\xE3ng xe m\xE1y, d\xF2ng xe v\xE0 chi ph\xED b\u1EA3o hi\u1EC3m xe m\xE1y b\u1EAFt bu\u1ED9c + t\u1EF1 nguy\u1EC7n tr\xEAn MoMo.", "theme": "automotive" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", `<div class="nav-search-overlay" id="mobileSearchOverlay"> <div class="nav-search-box"> <i data-lucide="search" width="14" height="14"></i> <input id="mobileSearchInp" class="nav-search-inp" type="text" placeholder="T\xECm xe c\u1EE7a b\u1EA1n..." autocomplete="off" spellcheck="false"> <button onclick="closeMobileSearch()" style="background:none;border:none;cursor:pointer;color:var(--gray-400);padding:0;display:flex;align-items:center;"> <i data-lucide="x" width="16" height="16"></i> </button> </div> <div class="nav-search-drop" id="mobileSearchDrop"></div> </div>  <div class="nav-sidebar-overlay" id="navOverlay" onclick="this.classList.remove('open');document.getElementById('navSidebar').classList.remove('open')"></div> <div class="nav-sidebar" id="navSidebar"> <div class="nav-sidebar-top"> <span class="nav-sidebar-logo">Ti\u1EC7n \xCDch <em>Giao Th\xF4ng</em></span> <button class="nav-sidebar-close" onclick="document.getElementById('navSidebar').classList.remove('open');document.getElementById('navOverlay').classList.remove('open')"> <i data-lucide="x" width="14" height="14"></i> </button> </div> <div class="nav-sidebar-body"> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">Di chuy\u1EC3n</div> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/gia-xang">Gi\xE1 x\u0103ng d\u1EA7u h\xF4m nay</a> <a class="nav-sidebar-link" href="/cay-xang">T\xECm c\xE2y x\u0103ng g\u1EA7n \u0111\xE2y</a> <a class="nav-sidebar-link" href="/tram-sac">Tr\u1EA1m s\u1EA1c xe \u0111i\u1EC7n</a> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">B\u1EA3o hi\u1EC3m</div> <a class="nav-sidebar-link" href="/bao-hiem-o-to">BH \xF4 t\xF4 b\u1EAFt bu\u1ED9c</a> <a class="nav-sidebar-link" href="/bao-hiem-o-to">BH th\xE2n v\u1ECF \xF4 t\xF4</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/hang-xe-may">BH xe m\xE1y</a> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">Ph\xE1p l\xFD &amp; B\u1EA3o d\u01B0\u1EE1ng</div> <a class="nav-sidebar-link" href="/phat-nguoi">Tra ph\u1EA1t ngu\u1ED9i</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/dang-kiem">Ki\u1EC3m tra \u0111\u0103ng ki\u1EC3m</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/bao-duong">L\u1ECBch b\u1EA3o d\u01B0\u1EE1ng xe</a> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">Xe c\u1EE7a t\xF4i</div> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/hang-xe">Nh\xE3n xe \xF4 t\xF4</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/hang-xe-may">Nh\xE3n xe m\xE1y</a> <a class="nav-sidebar-link" href="/epass">ePass &amp; T\u1EF1 \u0111\u1ED9ng n\u1EA1p</a> </div> </div> </div>  <div class="bc-bar" id="bc-bar"> <div class="shell bc-inner" id="bc-inner"> <a class="bc-link" href="/tien-ich-giao-thong">Ti\u1EC7n \xCDch Giao Th\xF4ng</a> <span class="bc-sep">\u203A</span> <a class="bc-link" href="/tien-ich-giao-thong/hang-xe-may">H\xE3ng xe m\xE1y</a> <span class="bc-sep" id="bc-sep2" style="display:none">\u203A</span> <span class="bc-cur" id="bc-brand" style="display:none"></span> <span class="bc-sep" id="bc-sep3" style="display:none">\u203A</span> <span class="bc-cur" id="bc-model" style="display:none"></span> </div> </div> <div id="app"></div> <script>
/* \u2500\u2500 Helpers \u2500\u2500 */
function licon(name, size=16, sw=2) {
  if (window.lucide && window.lucide[name]) {
    const children = window.lucide[name].map(([tag, attrs]) => {
      const a = Object.entries(attrs).map(([k,v]) => \`\${k}="\${v}"\`).join(' ');
      return \`<\${tag} \${a}/>\`;
    }).join('');
    return \`<svg xmlns="http://www.w3.org/2000/svg" width="\${size}" height="\${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="\${sw}" stroke-linecap="round" stroke-linejoin="round">\${children}</svg>\`;
  }
  const paths = {
    ArrowRight:'<polyline points="9 18 15 12 9 6"/>',
    ArrowLeft:'<polyline points="15 18 9 12 15 6"/>',
    Shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    MapPin:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    ChevronDown:'<polyline points="6 9 12 15 18 9"/>',
    ChevronUp:'<polyline points="18 15 12 9 6 15"/>',
    Zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    Lock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    Flame:'<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
    Wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    Star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    Info:'<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
    Check:'<polyline points="20 6 9 17 4 12"/>',
  };
  return \`<svg xmlns="http://www.w3.org/2000/svg" width="\${size}" height="\${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="\${sw}" stroke-linecap="round" stroke-linejoin="round">\${paths[name]||''}</svg>\`;
}

function brandMark(id, w=44, h=44, r=10, fs=14) {
  const b = BRANDS[id];
  const abbr = id === 'piaggio' ? 'PGO' : id === 'kymco' ? 'KYM' : id.substring(0,3).toUpperCase();
  return \`<div class="brand-mark" style="width:\${w}px;height:\${h}px;border-radius:\${r}px;font-size:\${fs}px;background:\${b.color}">\${abbr}</div>\`;
}

function bikeSVG(type, color='#EB2F96', size=90) {
  const c = color;
  if (type === 'dien') return \`<svg width="\${size}" height="\${size*0.6}" viewBox="0 0 120 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="26" cy="54" r="14" stroke="\${c}" stroke-width="3" fill="\${c}22"/>
    <circle cx="94" cy="54" r="14" stroke="\${c}" stroke-width="3" fill="\${c}22"/>
    <path d="M26 54L40 32H75L88 46V54" stroke="\${c}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M55 32V22H70" stroke="\${c}" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="52" y="18" width="22" height="8" rx="2" fill="\${c}44" stroke="\${c}" stroke-width="1.5"/>
    <path d="M40 32H60L58 44H42L40 32Z" fill="\${c}33" stroke="\${c}" stroke-width="1.5"/>
    <circle cx="26" cy="54" r="5" fill="\${c}"/>
    <circle cx="94" cy="54" r="5" fill="\${c}"/>
  </svg>\`;
  if (type === 'con') return \`<svg width="\${size}" height="\${size*0.6}" viewBox="0 0 120 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="54" r="14" stroke="\${c}" stroke-width="3" fill="\${c}22"/>
    <circle cx="96" cy="54" r="14" stroke="\${c}" stroke-width="3" fill="\${c}22"/>
    <path d="M24 54L36 30H60L80 42L96 54" stroke="\${c}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M60 30L64 20" stroke="\${c}" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M50 26H70" stroke="\${c}" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M36 30L44 44H64L60 30Z" fill="\${c}33" stroke="\${c}" stroke-width="1.5"/>
    <circle cx="24" cy="54" r="5" fill="\${c}"/>
    <circle cx="96" cy="54" r="5" fill="\${c}"/>
  </svg>\`;
  if (type === 'tayga') return \`<svg width="\${size}" height="\${size*0.6}" viewBox="0 0 120 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="26" cy="54" r="14" stroke="\${c}" stroke-width="3" fill="\${c}22"/>
    <circle cx="94" cy="54" r="14" stroke="\${c}" stroke-width="3" fill="\${c}22"/>
    <path d="M26 54L38 34H80L94 54" stroke="\${c}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M58 20H72L76 34" stroke="\${c}" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M38 34H80L76 50H42L38 34Z" fill="\${c}33" stroke="\${c}" stroke-width="1.5" stroke-linejoin="round"/>
    <rect x="52" y="16" width="20" height="8" rx="4" fill="\${c}55" stroke="\${c}" stroke-width="1.5"/>
    <circle cx="26" cy="54" r="5" fill="\${c}"/>
    <circle cx="94" cy="54" r="5" fill="\${c}"/>
  </svg>\`;
  // xe so (default)
  return \`<svg width="\${size}" height="\${size*0.6}" viewBox="0 0 120 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="54" r="14" stroke="\${c}" stroke-width="3" fill="\${c}22"/>
    <circle cx="96" cy="54" r="14" stroke="\${c}" stroke-width="3" fill="\${c}22"/>
    <path d="M24 54L36 32H72L88 46L96 54" stroke="\${c}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M62 20H74" stroke="\${c}" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M68 20L72 32" stroke="\${c}" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M36 32H72L70 48H40L36 32Z" fill="\${c}33" stroke="\${c}" stroke-width="1.5"/>
    <circle cx="24" cy="54" r="5" fill="\${c}"/>
    <circle cx="96" cy="54" r="5" fill="\${c}"/>
  </svg>\`;
}

/* \u2500\u2500 DATA \u2500\u2500 */
const BRANDS = {
  honda: {
    name:'Honda', origin:'Nh\u1EADt B\u1EA3n', color:'#CC0000',
    tagline:'Th\u01B0\u01A1ng hi\u1EC7u s\u1ED1 1 th\u1ECB tr\u01B0\u1EDDng - tin c\u1EADy, ti\u1EBFt ki\u1EC7m nhi\xEAn li\u1EC7u',
    types:['so','tayga','con'],
    models:[
      {name:'Wave Alpha',slug:'wave-alpha',type:'so',price:'17-19 tri\u1EC7u',engine:'110cc',fuel:'2.0L/100km',bh_range:'66-180k/n\u0103m'},
      {name:'Vision',slug:'vision',type:'tayga',price:'30-35 tri\u1EC7u',engine:'110cc',fuel:'2.2L/100km',bh_range:'66-180k/n\u0103m'},
      {name:'Air Blade',slug:'air-blade',type:'tayga',price:'45-55 tri\u1EC7u',engine:'125cc',fuel:'2.1L/100km',bh_range:'66-180k/n\u0103m'},
      {name:'SH Mode',slug:'sh-mode',type:'tayga',price:'65-75 tri\u1EC7u',engine:'125cc',fuel:'2.3L/100km',bh_range:'66-180k/n\u0103m'},
      {name:'SH 160i',slug:'sh-160i',type:'tayga',price:'90-110 tri\u1EC7u',engine:'160cc',fuel:'2.4L/100km',bh_range:'99-220k/n\u0103m'},
      {name:'Winner X',slug:'winner-x',type:'con',price:'46-52 tri\u1EC7u',engine:'150cc',fuel:'2.8L/100km',bh_range:'99-220k/n\u0103m'},
    ],
    bh:{bat_buoc:'66.000\u0111/n\u0103m',tu_nguyen:'300-800k/n\u0103m'},
    garages:2600,
    scores:[{label:'\u0110\u1ED9 ph\u1ED5 bi\u1EBFn',val:'\u2B50\u2B50\u2B50\u2B50\u2B50'},{label:'Ti\u1EBFt ki\u1EC7m x\u0103ng',val:'\u2B50\u2B50\u2B50\u2B50\u2B50'},{label:'Gi\u1EEF gi\xE1',val:'\u2B50\u2B50\u2B50\u2B50'},{label:'Chi ph\xED s\u1EEDa',val:'R\u1EA5t th\u1EA5p'}],
    faq:[
      {q:'Honda hay Yamaha b\u1EC1n h\u01A1n?',a:'Honda \u0111\u01B0\u1EE3c \u0111\xE1nh gi\xE1 b\u1EC1n h\u01A1n v\u1EC1 l\xE2u d\xE0i, \u0111\u1EB7c bi\u1EC7t d\xF2ng Wave v\xE0 Vision. Yamaha c\xF3 l\u1EE3i th\u1EBF v\u1EC1 hi\u1EC7u su\u1EA5t v\xE0 thi\u1EBFt k\u1EBF hi\u1EC7n \u0111\u1EA1i. C\u1EA3 hai \u0111\u1EC1u c\xF3 m\u1EA1ng l\u01B0\u1EDBi d\u1ECBch v\u1EE5 ph\u1EE7 r\u1ED9ng to\xE0n qu\u1ED1c.'},
      {q:'BH xe m\xE1y Honda b\u1EAFt bu\u1ED9c ph\u1EA3i mua kh\xF4ng?',a:'C\xF3 - theo Lu\u1EADt Kinh doanh B\u1EA3o hi\u1EC3m, BH tr\xE1ch nhi\u1EC7m d\xE2n s\u1EF1 xe m\xE1y l\xE0 b\u1EAFt bu\u1ED9c. Ph\xED 66.000\u0111/n\u0103m cho xe d\u01B0\u1EDBi 50cc v\xE0 99.000\u0111/n\u0103m cho xe tr\xEAn 50cc. Kh\xF4ng c\xF3 BH b\u1ECB ph\u1EA1t 400k-600k \u0111\u1ED3ng.'},
      {q:'Xe Honda Vision \u0111i bao nhi\xEAu km th\xEC b\u1EA3o d\u01B0\u1EE1ng?',a:'L\u1ECBch chu\u1EA9n c\u1EE7a Honda: thay d\u1EA7u m\u1ED7i 3.000km (kho\u1EA3ng 100-150k), ki\u1EC3m tra t\u1ED5ng th\u1EC3 m\u1ED7i 6.000km. S\xEAn \u0111\u0129a l\xEDp thay kho\u1EA3ng 15.000-20.000km.'},
    ],
    garageList:[
      {name:'Honda Head Tr\u1EA7n Kh\xE1t Ch\xE2n',addr:'105 Tr\u1EA7n Kh\xE1t Ch\xE2n, Hai B\xE0 Tr\u01B0ng, HN',type:'auth'},
      {name:'Honda Head Nguy\u1EC5n Tr\xE3i',addr:'214 Nguy\u1EC5n Tr\xE3i, Thanh Xu\xE2n, HN',type:'auth'},
      {name:'S\u1EEDa xe MoMo Partner - \u0110\u1ED1ng \u0110a',addr:'45 \u0110\xEA La Th\xE0nh, \u0110\u1ED1ng \u0110a, HN',type:'partner'},
      {name:'S\u1EEDa xe MoMo Partner - C\u1EA7u Gi\u1EA5y',addr:'88 Xu\xE2n Th\u1EE7y, C\u1EA7u Gi\u1EA5y, HN',type:'partner'},
    ],
  },
  yamaha: {
    name:'Yamaha', origin:'Nh\u1EADt B\u1EA3n', color:'#003087',
    tagline:'C\xF4ng ngh\u1EC7 Blue Core ti\u1EBFt ki\u1EC7m - thi\u1EBFt k\u1EBF th\u1EC3 thao tr\u1EBB trung',
    types:['so','tayga','con'],
    models:[
      {name:'Sirius',slug:'sirius',type:'so',price:'18-21 tri\u1EC7u',engine:'115cc',fuel:'1.9L/100km',bh_range:'66-180k/n\u0103m'},
      {name:'Janus',slug:'janus',type:'tayga',price:'29-35 tri\u1EC7u',engine:'125cc',fuel:'2.1L/100km',bh_range:'66-180k/n\u0103m'},
      {name:'NVX 155',slug:'nvx-155',type:'tayga',price:'52-62 tri\u1EC7u',engine:'155cc',fuel:'2.4L/100km',bh_range:'99-220k/n\u0103m'},
      {name:'Grande',slug:'grande',type:'tayga',price:'48-56 tri\u1EC7u',engine:'125cc',fuel:'2.2L/100km',bh_range:'66-180k/n\u0103m'},
      {name:'Exciter 150',slug:'exciter-150',type:'con',price:'48-58 tri\u1EC7u',engine:'150cc',fuel:'2.9L/100km',bh_range:'99-220k/n\u0103m'},
      {name:'R15 V4',slug:'r15',type:'con',price:'75-85 tri\u1EC7u',engine:'155cc',fuel:'3.0L/100km',bh_range:'99-220k/n\u0103m'},
    ],
    bh:{bat_buoc:'66.000\u0111/n\u0103m',tu_nguyen:'280-750k/n\u0103m'},
    garages:2100,
    scores:[{label:'Thi\u1EBFt k\u1EBF',val:'\u2B50\u2B50\u2B50\u2B50\u2B50'},{label:'Ti\u1EBFt ki\u1EC7m x\u0103ng',val:'\u2B50\u2B50\u2B50\u2B50\u2B50'},{label:'Hi\u1EC7u su\u1EA5t',val:'\u2B50\u2B50\u2B50\u2B50'},{label:'Chi ph\xED s\u1EEDa',val:'Th\u1EA5p'}],
    faq:[
      {q:'Exciter hay Winner X n\xEAn mua?',a:'Exciter 150 nh\u1EB9 h\u01A1n, phanh \u0111\u0129a 4 b\xE1nh, ph\xF9 h\u1EE3p \u0111\xF4 th\u1ECB. Winner X m\u1EA1nh h\u01A1n (150cc DOHC), ph\xF9 h\u1EE3p \u0111\u01B0\u1EDDng d\xE0i v\xE0 \u0111\u1ECBa h\xECnh. N\u1EBFu \u0111i ph\u1ED1 ch\u1ECDn Exciter, \u0111i \u0111\u01B0\u1EDDng d\xE0i ho\u1EB7c t\u1EC9nh ch\u1ECDn Winner X.'},
      {q:'Yamaha NVX c\xF3 t\u1ED1n x\u0103ng kh\xF4ng?',a:'NVX 155 ti\xEAu th\u1EE5 kho\u1EA3ng 2.3-2.5L/100km v\u1EDBi c\xF4ng ngh\u1EC7 Blue Core. \u0110\xF4 th\u1ECB n\u1EB7ng c\xF3 th\u1EC3 l\xEAn 2.7L. M\u1EE9c n\xE0y t\u1ED1t h\u01A1n SH 160i v\xE0 ngang Air Blade 125.'},
      {q:'BH t\u1EF1 nguy\u1EC7n xe Yamaha c\xF3 \u0111\xE1ng mua kh\xF4ng?',a:'\u0110\xE1ng v\u1EDBi xe gi\xE1 tr\xEAn 40 tri\u1EC7u. BH v\u1EADt ch\u1EA5t kho\u1EA3ng 500-700k/n\u0103m, b\u1ED3i th\u01B0\u1EDDng 70-80% gi\xE1 tr\u1ECB s\u1EEDa ch\u1EEFa khi tai n\u1EA1n. Xe m\u1EDBi n\xEAn mua trong 2-3 n\u0103m \u0111\u1EA7u.'},
    ],
    garageList:[
      {name:'Yamaha Town B\xE0 Tri\u1EC7u',addr:'65 B\xE0 Tri\u1EC7u, Ho\xE0n Ki\u1EBFm, HN',type:'auth'},
      {name:'Yamaha Town L\xE1ng H\u1EA1',addr:'158 L\xE1ng H\u1EA1, \u0110\u1ED1ng \u0110a, HN',type:'auth'},
      {name:'S\u1EEDa xe MoMo Partner - Ho\xE0ng Mai',addr:'12 Tr\u01B0\u01A1ng \u0110\u1ECBnh, Ho\xE0ng Mai, HN',type:'partner'},
    ],
  },
  suzuki: {
    name:'Suzuki', origin:'Nh\u1EADt B\u1EA3n', color:'#005BAC',
    tagline:'C\xE2n b\u1EB1ng gi\u1EEFa hi\u1EC7u su\u1EA5t v\xE0 chi ph\xED v\u1EADn h\xE0nh th\u1EA5p',
    types:['so','con'],
    models:[
      {name:'Revo',slug:'revo',type:'so',price:'16-18 tri\u1EC7u',engine:'110cc',fuel:'2.1L/100km',bh_range:'66-180k/n\u0103m'},
      {name:'Raider R150',slug:'raider',type:'con',price:'42-48 tri\u1EC7u',engine:'150cc',fuel:'3.1L/100km',bh_range:'99-220k/n\u0103m'},
      {name:'GSX-S150',slug:'gsx-s150',type:'con',price:'55-62 tri\u1EC7u',engine:'150cc',fuel:'2.9L/100km',bh_range:'99-220k/n\u0103m'},
    ],
    bh:{bat_buoc:'66.000\u0111/n\u0103m',tu_nguyen:'250-650k/n\u0103m'},
    garages:280,
    scores:[{label:'Gi\xE1 tr\u1ECB',val:'\u2B50\u2B50\u2B50\u2B50'},{label:'\u0110\u1ED9 b\u1EC1n',val:'\u2B50\u2B50\u2B50\u2B50'},{label:'M\u1EA1ng l\u01B0\u1EDBi',val:'\u2B50\u2B50\u2B50'},{label:'Chi ph\xED s\u1EEDa',val:'Th\u1EA5p'}],
    faq:[
      {q:'Suzuki Revo c\xF3 \u1ED5n \u0111\u1ECBnh kh\xF4ng?',a:'Revo l\xE0 d\xF2ng xe ph\u1ED5 th\xF4ng b\u1EC1n b\u1EC9, ph\xF9 h\u1EE3p \u0111\xF4 th\u1ECB v\xE0 n\xF4ng th\xF4n. \u0110\u1ED9ng c\u01A1 110cc \u0111\u01A1n gi\u1EA3n, \xEDt h\u1ECFng v\u1EB7t, ph\u1EE5 t\xF9ng r\u1EBB. H\u1EA1n ch\u1EBF l\xE0 m\u1EA1ng l\u01B0\u1EDBi \u0111\u1EA1i l\xFD \xEDt h\u01A1n Honda/Yamaha.'},
      {q:'Raider R150 t\u1ED1n b\u1EA3o hi\u1EC3m kh\xF4ng?',a:'BH b\u1EAFt bu\u1ED9c 99.000\u0111/n\u0103m (tr\xEAn 50cc). BH t\u1EF1 nguy\u1EC7n kho\u1EA3ng 500-650k/n\u0103m cho xe m\u1EDBi. Xe c\xF4n tay th\u01B0\u1EDDng ph\xED BH t\u1EF1 nguy\u1EC7n nh\u1EC9nh h\u01A1n xe s\u1ED1 v\xEC r\u1EE7i ro cao h\u01A1n.'},
    ],
    garageList:[
      {name:'Suzuki \u0110\u1EA1i L\xFD C\u1EA7u Gi\u1EA5y',addr:'102 Xu\xE2n Th\u1EE7y, C\u1EA7u Gi\u1EA5y, HN',type:'auth'},
      {name:'S\u1EEDa xe MoMo Partner - \u0110\u1ED1ng \u0110a',addr:'78 La Th\xE0nh, \u0110\u1ED1ng \u0110a, HN',type:'partner'},
    ],
  },
  kawasaki: {
    name:'Kawasaki', origin:'Nh\u1EADt B\u1EA3n', color:'#00A550',
    tagline:'Xe c\xF4n tay th\u1EC3 thao - hi\u1EC7u su\u1EA5t cao ph\xE2n kh\xFAc sporting',
    types:['con'],
    models:[
      {name:'Z125 Pro',slug:'z125',type:'con',price:'58-65 tri\u1EC7u',engine:'125cc',fuel:'2.6L/100km',bh_range:'66-180k/n\u0103m'},
      {name:'Ninja 400',slug:'ninja-400',type:'con',price:'180-200 tri\u1EC7u',engine:'399cc',fuel:'4.2L/100km',bh_range:'200-500k/n\u0103m'},
      {name:'Z400',slug:'z400',type:'con',price:'175-195 tri\u1EC7u',engine:'399cc',fuel:'4.0L/100km',bh_range:'200-500k/n\u0103m'},
    ],
    bh:{bat_buoc:'99.000\u0111/n\u0103m',tu_nguyen:'400-1.200k/n\u0103m'},
    garages:45,
    scores:[{label:'Hi\u1EC7u su\u1EA5t',val:'\u2B50\u2B50\u2B50\u2B50\u2B50'},{label:'Thi\u1EBFt k\u1EBF',val:'\u2B50\u2B50\u2B50\u2B50\u2B50'},{label:'M\u1EA1ng l\u01B0\u1EDBi',val:'\u2B50\u2B50'},{label:'Chi ph\xED s\u1EEDa',val:'Cao'}],
    faq:[
      {q:'Kawasaki Ninja 400 b\u1EA3o hi\u1EC3m t\u1ED1n bao nhi\xEAu?',a:'BH b\u1EAFt bu\u1ED9c 99k/n\u0103m. BH v\u1EADt ch\u1EA5t t\u1EF1 nguy\u1EC7n cho Ninja 400 kho\u1EA3ng 800k-1.2 tri\u1EC7u/n\u0103m t\xF9y nh\xE0 BH. Xe tr\xEAn 100 tri\u1EC7u n\xEAn mua BH v\u1EADt ch\u1EA5t \u0111\u1EC3 b\u1EA3o v\u1EC7 t\xE0i s\u1EA3n.'},
      {q:'Z125 ph\xF9 h\u1EE3p v\u1EDBi ng\u01B0\u1EDDi m\u1EDBi h\u1ECDc xe c\xF4n kh\xF4ng?',a:'Z125 l\xE0 l\u1EF1a ch\u1ECDn t\u1ED1t cho ng\u01B0\u1EDDi m\u1EDBi - 125cc nh\u1EB9 nh\xE0ng, d\u1EC5 \u0111i\u1EC1u khi\u1EC3n nh\u01B0ng \u0111\u1EE7 phong c\xE1ch th\u1EC3 thao. Tr\u1ECDng l\u01B0\u1EE3ng ch\u1EC9 102kg, ph\xF9 h\u1EE3p h\u1ECDc c\u01A1 b\u1EA3n tr\u01B0\u1EDBc khi l\xEAn xe l\u1EDBn h\u01A1n.'},
    ],
    garageList:[
      {name:'Kawasaki Authorized M\u1EF9 \u0110\xECnh',addr:'23 M\u1EF9 \u0110\xECnh, Nam T\u1EEB Li\xEAm, HN',type:'auth'},
      {name:'Kawasaki Authorized HCM',addr:'456 \u0110i\u1EC7n Bi\xEAn Ph\u1EE7, B\xECnh Th\u1EA1nh, HCM',type:'auth'},
    ],
  },
  sym: {
    name:'SYM', origin:'\u0110\xE0i Loan', color:'#E63329',
    tagline:'Gi\xE1 t\u1ED1t - ph\u1ED5 bi\u1EBFn t\u1EA1i th\u1ECB tr\u01B0\u1EDDng mi\u1EC1n Nam v\xE0 n\xF4ng th\xF4n',
    types:['so','tayga'],
    models:[
      {name:'Attila Elizabeth',slug:'attila',type:'tayga',price:'22-26 tri\u1EC7u',engine:'125cc',fuel:'2.3L/100km',bh_range:'66-180k/n\u0103m'},
      {name:'Shark 150',slug:'shark',type:'so',price:'28-32 tri\u1EC7u',engine:'150cc',fuel:'2.5L/100km',bh_range:'99-220k/n\u0103m'},
      {name:'Star SR',slug:'star-sr',type:'so',price:'19-23 tri\u1EC7u',engine:'125cc',fuel:'2.1L/100km',bh_range:'66-180k/n\u0103m'},
    ],
    bh:{bat_buoc:'66.000\u0111/n\u0103m',tu_nguyen:'200-500k/n\u0103m'},
    garages:380,
    scores:[{label:'Gi\xE1 tr\u1ECB',val:'\u2B50\u2B50\u2B50\u2B50\u2B50'},{label:'Thi\u1EBFt k\u1EBF',val:'\u2B50\u2B50\u2B50'},{label:'M\u1EA1ng l\u01B0\u1EDBi',val:'\u2B50\u2B50\u2B50'},{label:'Chi ph\xED s\u1EEDa',val:'R\u1EA5t th\u1EA5p'}],
    faq:[
      {q:'SYM c\xF3 b\u1EC1n kh\xF4ng so v\u1EDBi Honda?',a:'SYM b\u1EC1n v\u1EEBa, ph\xF9 h\u1EE3p v\u1EDBi ng\u01B0\u1EDDi c\u1EA7n xe gi\xE1 r\u1EBB \u0111i l\u1EA1i h\xE0ng ng\xE0y. \u0110\u1ED9 b\u1EC1n kh\xF4ng b\u1EB1ng Honda nh\u01B0ng chi ph\xED s\u1EEDa th\u1EA5p h\u01A1n v\xE0 ph\u1EE5 t\xF9ng r\u1EBB. T\u1ED1t cho xe ph\u1ED5 th\xF4ng d\u01B0\u1EDBi 25 tri\u1EC7u.'},
    ],
    garageList:[
      {name:'SYM \u0110\u1EA1i L\xFD Thanh H\xF3a',addr:'12 Quang Trung, TP Thanh H\xF3a',type:'auth'},
      {name:'S\u1EEDa xe MoMo Partner - B\xECnh D\u01B0\u01A1ng',addr:'55 \u0110L B\xECnh D\u01B0\u01A1ng, Th\u1EE7 D\u1EA7u M\u1ED9t',type:'partner'},
    ],
  },
  piaggio: {
    name:'Piaggio', origin:'\xDD', color:'#003DA5',
    tagline:'Vespa & Liberty - bi\u1EC3u t\u01B0\u1EE3ng th\u1EDDi trang \u0111\xF4 th\u1ECB cao c\u1EA5p',
    types:['tayga'],
    models:[
      {name:'Vespa GTS 300',slug:'vespa-gts',type:'tayga',price:'175-200 tri\u1EC7u',engine:'300cc',fuel:'3.2L/100km',bh_range:'200-600k/n\u0103m'},
      {name:'Vespa Primavera 150',slug:'vespa-primavera',type:'tayga',price:'90-105 tri\u1EC7u',engine:'150cc',fuel:'2.6L/100km',bh_range:'99-300k/n\u0103m'},
      {name:'Liberty 150',slug:'liberty',type:'tayga',price:'55-65 tri\u1EC7u',engine:'150cc',fuel:'2.5L/100km',bh_range:'99-250k/n\u0103m'},
    ],
    bh:{bat_buoc:'99.000\u0111/n\u0103m',tu_nguyen:'350-900k/n\u0103m'},
    garages:120,
    scores:[{label:'Th\u1EDDi trang',val:'\u2B50\u2B50\u2B50\u2B50\u2B50'},{label:'Ch\u1EA5t l\u01B0\u1EE3ng',val:'\u2B50\u2B50\u2B50\u2B50\u2B50'},{label:'M\u1EA1ng l\u01B0\u1EDBi',val:'\u2B50\u2B50'},{label:'Chi ph\xED s\u1EEDa',val:'Cao'}],
    faq:[
      {q:'Vespa c\xF3 n\xEAn mua BH v\u1EADt ch\u1EA5t kh\xF4ng?',a:'B\u1EAFt bu\u1ED9c n\xEAn mua - Vespa t\u1EEB 90-200 tri\u1EC7u l\xE0 t\xE0i s\u1EA3n l\u1EDBn. BH v\u1EADt ch\u1EA5t kho\u1EA3ng 500k-1tr/n\u0103m, b\u1ED3i th\u01B0\u1EDDng khi tai n\u1EA1n, tr\u1ED9m. Kh\xF4ng c\xF3 BH m\xE0 m\u1EA5t xe l\xE0 thi\u1EC7t h\u1EA1i r\u1EA5t l\u1EDBn.'},
      {q:'Piaggio Liberty kh\xE1c g\xEC Vespa?',a:'Liberty thi\u1EBFt k\u1EBF hi\u1EC7n \u0111\u1EA1i, d\u1EC5 l\xE1i h\u01A1n Vespa, khung nh\u1EF1a nh\u1EB9 h\u01A1n. Vespa khung kim lo\u1EA1i, thi\u1EBFt k\u1EBF c\u1ED5 \u0111i\u1EC3n, b\u1EC1n h\u01A1n nh\u01B0ng n\u1EB7ng h\u01A1n. Liberty ph\xF9 h\u1EE3p \u0111i l\u1EA1i h\xE0ng ng\xE0y, Vespa l\xE0 lifestyle choice.'},
    ],
    garageList:[
      {name:'Piaggio Authorized \u0110i\u1EC7n Bi\xEAn Ph\u1EE7',addr:'299 \u0110i\u1EC7n Bi\xEAn Ph\u1EE7, B\xECnh Th\u1EA1nh, HCM',type:'auth'},
      {name:'Piaggio Authorized H\xE0 N\u1ED9i',addr:'80 Nguy\u1EC5n Ch\xED Thanh, \u0110\u1ED1ng \u0110a, HN',type:'auth'},
    ],
  },
  kymco: {
    name:'Kymco', origin:'\u0110\xE0i Loan', color:'#8B0000',
    tagline:'Xe tay ga b\u1EC1n - ph\u1ED5 bi\u1EBFn t\u1EA1i th\u1ECB tr\u01B0\u1EDDng mi\u1EC1n Trung',
    types:['tayga'],
    models:[
      {name:'Like 125',slug:'like-125',type:'tayga',price:'35-42 tri\u1EC7u',engine:'125cc',fuel:'2.3L/100km',bh_range:'66-180k/n\u0103m'},
      {name:'Many 125',slug:'many',type:'tayga',price:'38-45 tri\u1EC7u',engine:'125cc',fuel:'2.2L/100km',bh_range:'66-180k/n\u0103m'},
      {name:'Downtown 350i',slug:'downtown',type:'tayga',price:'110-125 tri\u1EC7u',engine:'350cc',fuel:'3.5L/100km',bh_range:'200-500k/n\u0103m'},
    ],
    bh:{bat_buoc:'66.000\u0111/n\u0103m',tu_nguyen:'200-550k/n\u0103m'},
    garages:95,
    scores:[{label:'Gi\xE1 tr\u1ECB',val:'\u2B50\u2B50\u2B50\u2B50'},{label:'\u0110\u1ED9 b\u1EC1n',val:'\u2B50\u2B50\u2B50\u2B50'},{label:'M\u1EA1ng l\u01B0\u1EDBi',val:'\u2B50\u2B50'},{label:'Chi ph\xED s\u1EEDa',val:'Th\u1EA5p'}],
    faq:[
      {q:'Kymco Like c\xF3 \u0111\xE1ng mua h\u01A1n Honda Vision kh\xF4ng?',a:'Like 125 thi\u1EBFt k\u1EBF retro \u0111\u1EB9p, gi\xE1 r\u1EBB h\u01A1n Vision 5-8 tri\u1EC7u. Nh\u01B0\u1EE3c \u0111i\u1EC3m l\xE0 m\u1EA1ng l\u01B0\u1EDBi d\u1ECBch v\u1EE5 h\u1EB9p h\u01A1n Honda. N\u1EBFu \u1EDF th\xE0nh ph\u1ED1 l\u1EDBn c\xF3 \u0111\u1EA1i l\xFD Kymco g\u1EA7n th\xEC l\xE0 l\u1EF1a ch\u1ECDn t\u1ED1t v\u1EC1 gi\xE1 tr\u1ECB.'},
    ],
    garageList:[
      {name:'Kymco Authorized \u0110\xE0 N\u1EB5ng',addr:'24 \u0110i\u1EC7n Bi\xEAn Ph\u1EE7, H\u1EA3i Ch\xE2u, \u0110\xE0 N\u1EB5ng',type:'auth'},
      {name:'S\u1EEDa xe MoMo Partner - Ng\u0169 H\xE0nh S\u01A1n',addr:'88 Tr\u1EA7n \u0110\u1EA1i Ngh\u0129a, Ng\u0169 H\xE0nh S\u01A1n',type:'partner'},
    ],
  },
  vinfast: {
    name:'VinFast', origin:'Vi\u1EC7t Nam', color:'#00ADD8',
    tagline:'Xe m\xE1y \u0111i\u1EC7n - kh\xF4ng x\u0103ng, kh\xF4ng kh\xED th\u1EA3i, pin c\xF3 th\u1EC3 thu\xEA',
    types:['dien'],
    models:[
      {name:'Vento',slug:'vento',type:'dien',price:'21-25 tri\u1EC7u',engine:'1.700W',fuel:'1.5kWh/100km',bh_range:'66-180k/n\u0103m'},
      {name:'Theon',slug:'theon',type:'dien',price:'30-36 tri\u1EC7u',engine:'2.000W',fuel:'1.8kWh/100km',bh_range:'66-180k/n\u0103m'},
      {name:'Evo',slug:'evo',type:'dien',price:'18-22 tri\u1EC7u',engine:'1.200W',fuel:'1.2kWh/100km',bh_range:'66-180k/n\u0103m'},
      {name:'Ludo',slug:'ludo',type:'dien',price:'22-28 tri\u1EC7u',engine:'1.400W',fuel:'1.3kWh/100km',bh_range:'66-180k/n\u0103m'},
    ],
    bh:{bat_buoc:'66.000\u0111/n\u0103m',tu_nguyen:'200-500k/n\u0103m'},
    garages:620,
    scores:[{label:'Chi ph\xED v\u1EADn h\xE0nh',val:'\u2B50\u2B50\u2B50\u2B50\u2B50'},{label:'Th\xE2n thi\u1EC7n MT',val:'\u2B50\u2B50\u2B50\u2B50\u2B50'},{label:'H\u1EA1 t\u1EA7ng pin',val:'\u2B50\u2B50\u2B50\u2B50'},{label:'Chi ph\xED s\u1EEDa',val:'R\u1EA5t th\u1EA5p'}],
    faq:[
      {q:'Xe \u0111i\u1EC7n VinFast BH nh\u01B0 th\u1EBF n\xE0o?',a:'BH b\u1EAFt bu\u1ED9c \xE1p d\u1EE5ng nh\u01B0 xe x\u0103ng: 66k/n\u0103m. BH v\u1EADt ch\u1EA5t t\u1EF1 nguy\u1EC7n kho\u1EA3ng 200-400k/n\u0103m. Pin do VinFast qu\u1EA3n l\xFD theo g\xF3i thu\xEA pin ri\xEAng (200-400k/th\xE1ng) ho\u1EB7c mua \u0111\u1EE9t. BH kh\xF4ng bao pin tr\u1EEB khi c\xF3 rider th\xEAm.'},
      {q:'VinFast Vento \u0111i \u0111\u01B0\u1EE3c bao nhi\xEAu km m\u1ED9t l\u1EA7n s\u1EA1c?',a:'Vento \u0111\u1EA1t 110-130km/l\u1EA7n s\u1EA1c trong \u0111i\u1EC1u ki\u1EC7n b\xECnh th\u01B0\u1EDDng. \u0110\xF4 th\u1ECB k\u1EB9t xe c\xF3 th\u1EC3 \u0111\u1EA1t 90-100km. S\u1EA1c \u0111\u1EA7y m\u1EA5t 4-5 gi\u1EDD v\u1EDBi s\u1EA1c th\u01B0\u1EDDng, 1.5h v\u1EDBi s\u1EA1c nhanh t\u1EA1i tr\u1EA1m VF.'},
      {q:'Thu\xEA hay mua pin VinFast c\xF3 l\u1EE3i h\u01A1n?',a:'Thu\xEA pin (200-400k/th\xE1ng) ph\xF9 h\u1EE3p ng\u01B0\u1EDDi \u0111i d\u01B0\u1EDBi 1.000km/th\xE1ng, kh\xF4ng lo pin xu\u1ED1ng c\u1EA5p. Mua \u0111\u1EE9t pin ti\u1EBFt ki\u1EC7m h\u01A1n n\u1EBFu \u0111i nhi\u1EC1u v\xE0 gi\u1EEF xe l\xE2u d\xE0i. \u0110a s\u1ED1 ng\u01B0\u1EDDi d\xF9ng VN ch\u1ECDn thu\xEA pin.'},
    ],
    garageList:[
      {name:'VinFast Service M\u1EF9 \u0110\xECnh',addr:'Khu \u0111\xF4 th\u1ECB M\u1EF9 \u0110\xECnh 1, Nam T\u1EEB Li\xEAm, HN',type:'auth'},
      {name:'VinFast Service Ho\xE0ng Mai',addr:'15 Tam Trinh, Ho\xE0ng Mai, HN',type:'auth'},
      {name:'VinFast Service Th\u1EE7 \u0110\u1EE9c',addr:'50 \u0110\u01B0\u1EDDng D1, TP Th\u1EE7 \u0110\u1EE9c, HCM',type:'auth'},
    ],
  },
};

const BRAND_LIST = ['honda','yamaha','suzuki','kawasaki','sym','piaggio','kymco','vinfast'];
const DUAL_BRANDS = ['honda','vinfast','suzuki']; // brands c\xF3 c\u1EA3 \xF4 t\xF4 l\u1EABn xe m\xE1y

const TYPE_LABELS = { so:'Xe s\u1ED1', tayga:'Tay ga', con:'C\xF4n tay', dien:'Xe \u0111i\u1EC7n' };
const TYPE_ICONS = { so:'\u{1F3CD}\uFE0F', tayga:'\u{1F6F5}', con:'\u26A1', dien:'\u{1F50B}' };

/* \u2500\u2500 State \u2500\u2500 */
const state = { view:'listing', brand:null, model:null, typeFilter:'all' };

/* \u2500\u2500 Render \u2500\u2500 */
function render() {
  if (state.view === 'listing') renderListing();
  else if (state.view === 'brand') renderBrand();
  else if (state.view === 'model') renderModel();
  updateBreadcrumb();
  updateURL();
}

function updateBreadcrumb() {
  const s2 = document.getElementById('bc-sep2');
  const bcBrand = document.getElementById('bc-brand');
  const s3 = document.getElementById('bc-sep3');
  const bcModel = document.getElementById('bc-model');
  if (state.brand) {
    const b = BRANDS[state.brand];
    s2.style.display = '';
    bcBrand.style.display = '';
    bcBrand.textContent = b.name;
    bcBrand.onclick = state.view === 'model' ? () => navBrand(state.brand) : null;
    bcBrand.style.cursor = state.view === 'model' ? 'pointer' : 'default';
  } else {
    s2.style.display = 'none';
    bcBrand.style.display = 'none';
  }
  if (state.model) {
    const m = BRANDS[state.brand].models.find(x => x.slug === state.model);
    s3.style.display = '';
    bcModel.style.display = '';
    bcModel.textContent = m ? m.name : state.model;
  } else {
    s3.style.display = 'none';
    bcModel.style.display = 'none';
  }
}

function updateURL() {
  let path = '/tien-ich-giao-thong/hang-xe-may';
  if (state.brand) path += '/' + state.brand;
  if (state.model) path += '/' + state.model;
  history.replaceState(null, '', path);
}

function navListing() {
  state.view = 'listing'; state.brand = null; state.model = null;
  document.title = 'H\xE3ng Xe M\xE1y - Ti\u1EC7n \xCDch Giao Th\xF4ng MoMo';
  render();
}
function navBrand(id) {
  state.view = 'brand'; state.brand = id; state.model = null;
  document.title = BRANDS[id].name + ' - H\xE3ng Xe M\xE1y MoMo';
  render();
}
function navModel(brandId, slug) {
  state.view = 'model'; state.brand = brandId; state.model = slug;
  const m = BRANDS[brandId].models.find(x => x.slug === slug);
  document.title = (m ? m.name : slug) + ' | ' + BRANDS[brandId].name + ' - MoMo';
  render();
}

function renderListing() {
  const filteredBrands = state.typeFilter === 'all'
    ? BRAND_LIST
    : BRAND_LIST.filter(id => BRANDS[id].types.includes(state.typeFilter));

  const typeButtons = ['all','so','tayga','con','dien'].map(t => {
    const active = state.typeFilter === t;
    const label = t === 'all' ? 'T\u1EA5t c\u1EA3' : TYPE_LABELS[t];
    const icon = t === 'all' ? '\u{1F3CD}\uFE0F' : TYPE_ICONS[t];
    const count = t === 'all' ? BRAND_LIST.length : BRAND_LIST.filter(id => BRANDS[id].types.includes(t)).length;
    return \`<button class="filter-tab\${active?' active':''}" onclick="setTypeFilter('\${t}')">
      \${icon} \${label}
      <span class="filter-count">\${count}</span>
    </button>\`;
  }).join('');

  const typeGrid = Object.entries(TYPE_LABELS).map(([t, label]) => {
    const active = state.typeFilter === t;
    const count = BRAND_LIST.filter(id => BRANDS[id].types.includes(t)).length;
    return \`<div class="type-card\${active?' active':''}" onclick="setTypeFilter('\${t}')">
      <div class="type-card-icon">\${TYPE_ICONS[t]}</div>
      <div class="type-card-name">\${label}</div>
    </div>\`;
  }).join('');

  const brandCards = filteredBrands.map(id => {
    const b = BRANDS[id];
    const topModel = b.models[0];
    const topType = b.types[0];
    return \`<a class="brand-card" href="/tien-ich-giao-thong/hang-xe-may/\${id}" onclick="event.preventDefault();navBrand('\${id}')">
      <div class="brand-card-visual" style="background:linear-gradient(140deg,\${b.color}18 0%,\${b.color}08 60%,transparent 100%)">
        <div class="brand-card-bike-bg">\${bikeSVG(topType, b.color, 100)}</div>
        <div class="brand-card-mark-wrap">\${brandMark(id,44,44,10,13)}</div>
      </div>
      <div class="brand-card-body">
        <div class="brand-card-name">\${b.name}</div>
        <div class="brand-card-origin">\${b.origin}</div>
        <div class="brand-card-bottom">
          <span class="brand-card-top-model">Model <strong>\${topModel.name}</strong></span>
          <div class="brand-card-arrow">\${licon('ArrowRight',12,2.5)}</div>
        </div>
      </div>
    </a>\`;
  }).join('');

  document.getElementById('app').innerHTML = \`
    <div class="hero">
      <div class="shell">
        <div class="veh-tabs">
          <a class="veh-tab" href="/hang-xe">\u{1F697} \xD4 t\xF4</a>
          <span class="veh-tab active">\u{1F3CD}\uFE0F Xe m\xE1y</span>
        </div>
        <h1 class="hero-title">D\u1ECBch v\u1EE5 MoMo cho <span>xe m\xE1y c\u1EE7a b\u1EA1n</span></h1>
        <p class="hero-sub">Ch\u1ECDn h\xE3ng xe \u0111\u1EC3 xem d\xF2ng xe ch\u1EE7 l\u1EF1c, ph\xED b\u1EA3o hi\u1EC3m v\xE0 m\u1EA1ng l\u01B0\u1EDBi s\u1EEDa ch\u1EEFa.</p>
        <div class="filter-bar">
          <div class="filter-tabs">\${typeButtons}</div>
        </div>
      </div>
    </div>
    <div style="background:#fff;border-bottom:1px solid var(--gray-200);padding:16px 0">
      <div class="shell">
        <div class="section-label">Lo\u1EA1i xe</div>
        <div class="type-grid">\${typeGrid}</div>
      </div>
    </div>
    <div style="padding:24px 0 0">
      <div class="shell">
        <div class="section-label" style="margin-bottom:16px">H\xE3ng xe (\${filteredBrands.length})</div>
        <div class="brand-grid">\${brandCards}</div>
      </div>
    </div>
  \`;
}

window.setTypeFilter = function(t) {
  state.typeFilter = t;
  renderListing();
};

function renderBrand() {
  const id = state.brand;
  const b = BRANDS[id];

  const modelCards = b.models.map(m => \`
    <div class="model-card" onclick="navModel('\${id}','\${m.slug}')">
      <div class="model-card-visual">\${bikeSVG(m.type, b.color, 80)}</div>
      <div class="model-card-name">\${m.name}</div>
      <div class="model-card-type">\${TYPE_LABELS[m.type]||m.type}</div>
      <div class="model-card-price">Gi\xE1: <strong>\${m.price}</strong></div>
      <div class="model-card-arrow">\${licon('ArrowRight',14,2.5)}</div>
    </div>
  \`).join('');

  const garageCards = b.garageList.map(g => \`
    <div class="garage-card">
      <div class="garage-name">\${g.name}</div>
      <div class="garage-addr">\${licon('MapPin',11,2)} \${g.addr}</div>
      <span class="garage-tag \${g.type}">\${g.type === 'auth' ? '\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng' : '\u0110\u1ED1i t\xE1c MoMo'}</span>
    </div>
  \`).join('');

  const faqItems = b.faq.map((f,i) => \`
    <div class="faq-item" id="faq-\${i}">
      <div class="faq-q" onclick="toggleFaq(\${i})">\${f.q}<span class="faq-chevron">\${licon('ChevronDown',14,2.5)}</span></div>
      <div class="faq-a">\${f.a}</div>
    </div>
  \`).join('');

  const scoreChips = b.scores.map(s =>
    \`<span class="meta-chip">\${s.label}: \${s.val}</span>\`
  ).join('');

  document.getElementById('app').innerHTML = \`
    <div style="background:#fff;border-bottom:1px solid var(--gray-200)">
      <div class="shell" style="padding-top:24px;padding-bottom:16px">
        <button class="back-btn" onclick="navListing()">\${licon('ArrowLeft',14,2.5)} H\xE3ng xe m\xE1y</button>
        \${DUAL_BRANDS.includes(id) ? \`<div class="veh-tabs" style="margin-top:12px">
          <a class="veh-tab" href="/tien-ich-giao-thong/hang-xe/\${id}">\u{1F697} \xD4 t\xF4</a>
          <span class="veh-tab active">\u{1F3CD}\uFE0F Xe m\xE1y</span>
        </div>\` : ''}
        <div class="detail-header">
          \${brandMark(id, 64, 64, 14, 20)}
          <div>
            <div class="detail-brand-name">\${b.name}</div>
            <div class="detail-brand-tagline">\${b.tagline}</div>
            <div class="detail-meta">\${scoreChips}</div>
          </div>
        </div>
        <div class="quick-nav">
          <button class="qnav-pill" onclick="document.getElementById('sec-models').scrollIntoView({behavior:'smooth'})">D\xF2ng xe</button>
          <button class="qnav-pill" onclick="document.getElementById('sec-bh').scrollIntoView({behavior:'smooth'})">B\u1EA3o hi\u1EC3m</button>
          <button class="qnav-pill" onclick="document.getElementById('sec-garage').scrollIntoView({behavior:'smooth'})">Garage</button>
          <button class="qnav-pill" onclick="document.getElementById('sec-faq').scrollIntoView({behavior:'smooth'})">H\u1ECFi \u0111\xE1p</button>
        </div>
      </div>
    </div>
    <div class="shell">
      <div class="detail-layout">
        <div class="detail-main">
          <div id="sec-models">
            <div class="eyebrow">D\xF2ng xe</div>
            <div class="section-h">C\xE1c d\xF2ng xe \${b.name} ph\u1ED5 bi\u1EBFn t\u1EA1i Vi\u1EC7t Nam</div>
            <div class="section-sub">Ch\u1ECDn d\xF2ng xe \u0111\u1EC3 xem th\xF4ng s\u1ED1 v\xE0 chi ph\xED b\u1EA3o hi\u1EC3m c\u1EE5 th\u1EC3</div>
            <div class="model-grid">\${modelCards}</div>
          </div>

          <div id="sec-garage">
            <div class="eyebrow">M\u1EA1ng l\u01B0\u1EDBi</div>
            <div class="section-h">\u0110\u1EA1i l\xFD & garage \${b.name}</div>
            <div class="section-sub">\${b.garages.toLocaleString('vi')} \u0111i\u1EC3m tr\xEAn to\xE0n qu\u1ED1c</div>
            <div class="garage-grid">\${garageCards}</div>
          </div>

          <div id="sec-faq">
            <div class="eyebrow">H\u1ECFi \u0111\xE1p</div>
            <div class="section-h">C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p v\u1EC1 \${b.name}</div>
            <div class="section-sub" style="margin-bottom:16px">Th\xF4ng tin h\u1EEFu \xEDch t\u1EEB ch\u1EE7 xe th\u1EF1c t\u1EBF</div>
            <div class="faq-list">\${faqItems}</div>
          </div>
        </div>

        <div class="detail-sidebar" id="sec-bh">
          <div class="bh-side-card">
            <div class="bh-side-title">\${licon('Shield',14,2)} B\u1EA3o hi\u1EC3m xe \${b.name}</div>
            <div class="bh-side-sub">Mua nhanh qua MoMo \xB7 Ph\xEA duy\u1EC7t ngay</div>
            <div class="bh-type-row">
              <div>
                <div class="bh-type-label">BH B\u1EAFt bu\u1ED9c TNDS</div>
                <div class="bh-type-note">Theo quy \u0111\u1ECBnh ph\xE1p lu\u1EADt</div>
              </div>
              <div class="bh-type-price">\${b.bh.bat_buoc}</div>
            </div>
            <div class="bh-type-row">
              <div>
                <div class="bh-type-label">BH V\u1EADt ch\u1EA5t t\u1EF1 nguy\u1EC7n</div>
                <div class="bh-type-note">Tai n\u1EA1n, tr\u1ED9m, thi\xEAn tai</div>
              </div>
              <div class="bh-type-price">\${b.bh.tu_nguyen}</div>
            </div>
            <a class="btn-bh" href="/bao-hiem-xe-may">\${licon('Shield',14,2)} Xem g\xF3i & mua ngay</a>
          </div>

          <div class="bh-side-card" style="background:var(--gray-50)">
            <div style="font-size:12px;font-weight:800;color:var(--gray-700);margin-bottom:8px">\${licon('Info',13,2)} L\u01B0u \xFD BH xe m\xE1y</div>
            <div style="font-size:12px;color:var(--gray-600);line-height:1.6">
              BH b\u1EAFt bu\u1ED9c l\xE0 <strong>b\u1EAFt bu\u1ED9c theo lu\u1EADt</strong>. Kh\xF4ng c\xF3 BH s\u1EBD b\u1ECB ph\u1EA1t <strong>400.000 - 600.000\u0111</strong> khi ki\u1EC3m tra.
              <br><br>
              BH t\u1EF1 nguy\u1EC7n b\u1EA3o v\u1EC7 xe khi tai n\u1EA1n, m\u1EA5t tr\u1ED9m - n\xEAn mua v\u1EDBi xe tr\xEAn 30 tri\u1EC7u.
            </div>
          </div>
        </div>
      </div>
    </div>
  \`;
}

function renderModel() {
  const id = state.brand;
  const b = BRANDS[id];
  const m = b.models.find(x => x.slug === state.model);
  if (!m) { navBrand(id); return; }

  document.getElementById('app').innerHTML = \`
    <div style="background:#fff;border-bottom:1px solid var(--gray-200)">
      <div class="shell" style="padding:20px 0 16px">
        <button class="back-btn" onclick="navBrand('\${id}')">\${licon('ArrowLeft',14,2.5)} \${b.name}</button>
        <div class="detail-header">
          \${brandMark(id, 52, 52, 12, 16)}
          <div>
            <div class="detail-brand-name">\${b.name} \${m.name}</div>
            <div class="detail-brand-tagline">\${TYPE_LABELS[m.type]} \xB7 \${m.engine} \xB7 \${m.price}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="shell" style="padding-top:24px;padding-bottom:80px">
      <div class="detail-layout">
        <div>
          <div class="model-detail-header">
            <div style="display:flex;justify-content:center;margin-bottom:16px">\${bikeSVG(m.type, b.color, 140)}</div>
            <div class="model-specs">
              <div class="spec-row"><div class="spec-label">Dung t\xEDch / C\xF4ng su\u1EA5t</div><div class="spec-val">\${m.engine}</div></div>
              <div class="spec-row"><div class="spec-label">Gi\xE1 b\xE1n l\u1EBB</div><div class="spec-val">\${m.price}</div></div>
              <div class="spec-row"><div class="spec-label">Ti\xEAu hao nhi\xEAn li\u1EC7u</div><div class="spec-val">\${m.fuel}</div></div>
              <div class="spec-row"><div class="spec-label">Lo\u1EA1i xe</div><div class="spec-val">\${TYPE_LABELS[m.type]}</div></div>
            </div>
          </div>

          <div class="eyebrow">B\u1EA3o hi\u1EC3m</div>
          <div class="section-h">Chi ph\xED BH cho \${m.name}</div>
          <div class="stat-band" style="margin-top:14px">
            <div class="stat-cell"><div class="stat-val" style="font-size:15px">\${b.bh.bat_buoc}</div><div class="stat-label">BH b\u1EAFt bu\u1ED9c/n\u0103m</div></div>
            <div class="stat-cell"><div class="stat-val" style="font-size:15px;color:var(--pink-500)">\${m.bh_range}</div><div class="stat-label">BH v\u1EADt ch\u1EA5t/n\u0103m</div></div>
            <div class="stat-cell"><div class="stat-val" style="font-size:15px">\${b.garages.toLocaleString('vi')}</div><div class="stat-label">\u0110i\u1EC3m s\u1EEDa ch\u1EEFa</div></div>
          </div>
        </div>

        <div>
          <div class="bh-side-card">
            <div class="bh-side-title">\${licon('Shield',14,2)} Mua BH cho \${m.name}</div>
            <div class="bh-side-sub">So s\xE1nh nhi\u1EC1u nh\xE0 BH \xB7 Ph\xEA duy\u1EC7t ngay</div>
            <div class="bh-type-row">
              <div><div class="bh-type-label">BH B\u1EAFt bu\u1ED9c</div><div class="bh-type-note">B\u1EAFt bu\u1ED9c theo lu\u1EADt</div></div>
              <div class="bh-type-price">\${b.bh.bat_buoc}</div>
            </div>
            <div class="bh-type-row">
              <div><div class="bh-type-label">BH V\u1EADt ch\u1EA5t</div><div class="bh-type-note">\u01AF\u1EDBc t\xEDnh cho \${m.name}</div></div>
              <div class="bh-type-price">\${m.bh_range}</div>
            </div>
            <a class="btn-bh" href="/bao-hiem-xe-may">\${licon('Shield',14,2)} Mua ngay tr\xEAn MoMo</a>
          </div>
        </div>
      </div>
    </div>

    <div class="sticky-bh-bar" style="background:linear-gradient(90deg,\${b.color} 0%,\${b.color}cc 100%)">
      <div class="sticky-bh-copy">
        <strong>BH cho \${b.name} \${m.name}</strong>
        <span>T\u1EEB \${b.bh.bat_buoc} \xB7 Duy\u1EC7t ngay</span>
      </div>
      <a class="sticky-bh-btn" href="/bao-hiem-xe-may" style="color:\${b.color}">\${licon('Shield',13,2)} Mua ngay</a>
    </div>
  \`;
}

window.toggleFaq = function(i) {
  const el = document.getElementById('faq-' + i);
  el.classList.toggle('open');
};

/* \u2500\u2500 Init from URL \u2500\u2500 */
(function init() {
  const rawPath = location.pathname.replace(/^\\/tien-ich-giao-thong\\/hang-xe-may\\/?/,'').replace(/^\\/hang-xe-may\\/?/,'');
  const parts = rawPath.split('/').filter(Boolean);
  if (parts[0] && BRANDS[parts[0]]) {
    state.brand = parts[0];
    if (parts[1]) {
      const m = BRANDS[parts[0]].models.find(x => x.slug === parts[1]);
      if (m) { state.model = parts[1]; state.view = 'model'; }
      else state.view = 'brand';
    } else {
      state.view = 'brand';
    }
  }
  render();
  if (window.lucide) lucide.createIcons();
})();
(function(){
  var el = document.getElementById('gs-date');
  if(el){ var d=new Date(); el.textContent=String(d.getDate()).padStart(2,'0')+'/'+String(d.getMonth()+1).padStart(2,'0'); }
})();

/* \u2500\u2500 NAV VEHICLE SEARCH \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
(function() {
  const VEHICLE_DATA = [
    {brand:'toyota',label:'Toyota',color:'#EB0A1E',cat:'\xD4 t\xF4',models:[
      {name:'Fortuner',slug:'fortuner',type:'SUV'},{name:'Camry',slug:'camry',type:'Sedan'},
      {name:'Corolla Cross',slug:'corolla-cross',type:'Crossover'},{name:'Innova Cross',slug:'innova-cross',type:'MPV'},
      {name:'Veloz',slug:'veloz',type:'MPV'},{name:'Raize',slug:'raize',type:'SUV'},
    ]},
    {brand:'honda',label:'Honda',color:'#CC0000',cat:'\xD4 t\xF4',models:[
      {name:'CR-V',slug:'cr-v',type:'SUV'},{name:'City',slug:'city',type:'Sedan'},
      {name:'Civic',slug:'civic',type:'Sedan'},{name:'HR-V',slug:'hr-v',type:'Crossover'},
    ]},
    {brand:'hyundai',label:'Hyundai',color:'#002C5F',cat:'\xD4 t\xF4',models:[
      {name:'Tucson',slug:'tucson',type:'SUV'},{name:'Ioniq 6',slug:'ioniq-6',type:'EV'},
    ]},
    {brand:'kia',label:'Kia',color:'#05141F',cat:'\xD4 t\xF4',models:[
      {name:'Seltos',slug:'seltos',type:'Crossover'},{name:'Sorento',slug:'sorento',type:'SUV'},
    ]},
    {brand:'vinfast',label:'VinFast',color:'#009EDB',cat:'\xD4 t\xF4',models:[
      {name:'VF 8',slug:'vf-8',type:'EV'},{name:'VF 6',slug:'vf-6',type:'EV'},
    ]},
    {brand:'honda-may',label:'Honda',color:'#CC0000',cat:'Xe m\xE1y',models:[
      {name:'Wave Alpha',slug:'wave-alpha',type:'Xe s\u1ED1'},{name:'Vision',slug:'vision',type:'Tay ga'},
      {name:'Air Blade',slug:'air-blade',type:'Tay ga'},{name:'SH Mode',slug:'sh-mode',type:'Tay ga'},
      {name:'SH 160i',slug:'sh-160i',type:'Tay ga'},{name:'Winner X',slug:'winner-x',type:'C\xF4n tay'},
    ]},
    {brand:'yamaha-may',label:'Yamaha',color:'#003087',cat:'Xe m\xE1y',models:[
      {name:'Sirius',slug:'sirius',type:'Xe s\u1ED1'},{name:'NVX 155',slug:'nvx-155',type:'Tay ga'},
      {name:'Grande',slug:'grande',type:'Tay ga'},{name:'Exciter 150',slug:'exciter-150',type:'C\xF4n tay'},
      {name:'Janus',slug:'janus',type:'Tay ga'},
    ]},
    {brand:'suzuki-may',label:'Suzuki',color:'#003399',cat:'Xe m\xE1y',models:[
      {name:'Revo',slug:'revo',type:'Xe s\u1ED1'},{name:'Raider R150',slug:'raider',type:'C\xF4n tay'},
    ]},
    {brand:'piaggio',label:'Piaggio',color:'#0033A0',cat:'Xe m\xE1y',models:[
      {name:'Vespa GTS 300',slug:'vespa-gts',type:'Tay ga'},{name:'Vespa Primavera',slug:'vespa-primavera',type:'Tay ga'},
      {name:'Liberty 150',slug:'liberty',type:'Tay ga'},
    ]},
  ];

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
  let activeIdx = -1, blurTimer = null;

  function getUrl(item) {
    if (item.cat === 'Xe m\xE1y') return '/tien-ich-giao-thong/hang-xe-may';
    return '/tien-ich-giao-thong/hang-xe/' + item.brand + '/' + item.slug;
  }

  function renderResults(results) {
    if (!results.length) {
      drop.innerHTML = '<div class="nsd-empty"><strong>Kh\xF4ng t\xECm th\u1EA5y xe</strong>Th\u1EED t\xEAn kh\xE1c nh\u01B0 "Toyota Camry" hay "Honda SH"</div>';
      return;
    }
    const groups = {};
    results.forEach(r => { if (!groups[r.cat]) groups[r.cat] = []; groups[r.cat].push(r); });
    let html = '';
    Object.entries(groups).forEach(([cat, items], gi) => {
      if (gi > 0) html += '<div class="nsd-divider"></div>';
      html += \`<div class="nsd-section-label">\${cat}</div>\`;
      items.forEach(item => {
        const typeClass = item.type === 'EV' ? 'ev' : item.cat === 'Xe m\xE1y' ? 'motorbike' : '';
        html += \`<a class="nsd-item" href="\${getUrl(item)}">
          <span class="nsd-dot" style="background:\${item.color}"></span>
          <span class="nsd-info"><span class="nsd-model">\${item.name}</span><span class="nsd-brand">\${item.brandLabel}</span></span>
          <span class="nsd-type \${typeClass}">\${item.type}</span></a>\`;
      });
    });
    drop.innerHTML = html; activeIdx = -1;
  }

  function showEmpty() {
    drop.innerHTML = \`<div class="nsd-section-label">Ph\u1ED5 bi\u1EBFn nh\u1EA5t</div>\` +
      ['honda-may|air-blade|Air Blade|Tay ga|#CC0000|Xe m\xE1y','yamaha-may|nvx-155|NVX 155|Tay ga|#003087|Xe m\xE1y',
       'honda-may|sh-160i|SH 160i|Tay ga|#CC0000|Xe m\xE1y','piaggio|vespa-gts|Vespa GTS 300|Tay ga|#0033A0|Xe m\xE1y',
       'toyota|fortuner|Fortuner|SUV|#EB0A1E|\xD4 t\xF4','vinfast|vf-8|VF 8|EV|#009EDB|\xD4 t\xF4']
      .map(s => { const [brand,slug,name,type,color,cat] = s.split('|');
        const isMoto = cat === 'Xe m\xE1y';
        const url = isMoto ? '/tien-ich-giao-thong/hang-xe-may' : \`/tien-ich-giao-thong/hang-xe/\${brand}/\${slug}\`;
        const typeClass = type === 'EV' ? 'ev' : isMoto ? 'motorbike' : '';
        return \`<a class="nsd-item" href="\${url}">
          <span class="nsd-dot" style="background:\${color}"></span>
          <span class="nsd-info"><span class="nsd-model">\${name}</span><span class="nsd-brand">\${brand.replace('-may','').charAt(0).toUpperCase()+brand.replace('-may','').slice(1)}</span></span>
          <span class="nsd-type \${typeClass}">\${type}</span></a>\`;
      }).join('');
  }

  function openDrop() { if (!inp.value.trim()) showEmpty(); drop.classList.add('open'); }
  function closeDrop() { drop.classList.remove('open'); activeIdx = -1; }

  inp.addEventListener('input', () => {
    const q = inp.value.trim().toLowerCase();
    if (!q) { showEmpty(); drop.classList.add('open'); return; }
    renderResults(INDEX.filter(r => r.search.includes(q)).slice(0, 12));
    drop.classList.add('open');
  });
  inp.addEventListener('focus', () => { clearTimeout(blurTimer); openDrop(); });
  inp.addEventListener('blur', () => { blurTimer = setTimeout(closeDrop, 160); });

  inp.addEventListener('keydown', e => {
    const items = drop.querySelectorAll('.nsd-item');
    if (e.key === 'ArrowDown') { e.preventDefault(); activeIdx = Math.min(activeIdx+1, items.length-1); items.forEach((el,i)=>el.classList.toggle('nsd-active',i===activeIdx)); if(items[activeIdx])items[activeIdx].scrollIntoView({block:'nearest'}); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); activeIdx = Math.max(activeIdx-1, 0); items.forEach((el,i)=>el.classList.toggle('nsd-active',i===activeIdx)); if(items[activeIdx])items[activeIdx].scrollIntoView({block:'nearest'}); }
    else if (e.key === 'Enter' && activeIdx >= 0 && items[activeIdx]) { e.preventDefault(); items[activeIdx].click(); }
    else if (e.key === 'Escape') { closeDrop(); inp.blur(); }
  });

  document.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement !== inp && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') { e.preventDefault(); inp.focus(); }
  });

  const mobileOverlay = document.getElementById('mobileSearchOverlay');
  const mobileInp = document.getElementById('mobileSearchInp');
  const mobileDrop = document.getElementById('mobileSearchDrop');

  mobileInp.addEventListener('input', () => {
    const q = mobileInp.value.trim().toLowerCase();
    if (!q) { mobileDrop.classList.remove('open'); return; }
    const groups = {};
    INDEX.filter(r => r.search.includes(q)).slice(0, 10).forEach(r => { if (!groups[r.cat]) groups[r.cat] = []; groups[r.cat].push(r); });
    let html = '';
    Object.entries(groups).forEach(([cat, items], gi) => {
      if (gi > 0) html += '<div class="nsd-divider"></div>';
      html += \`<div class="nsd-section-label">\${cat}</div>\`;
      items.forEach(item => { const tc=item.type==='EV'?'ev':item.cat==='Xe m\xE1y'?'motorbike':''; html+=\`<a class="nsd-item" href="\${getUrl(item)}"><span class="nsd-dot" style="background:\${item.color}"></span><span class="nsd-info"><span class="nsd-model">\${item.name}</span><span class="nsd-brand">\${item.brandLabel}</span></span><span class="nsd-type \${tc}">\${item.type}</span></a>\`; });
    });
    mobileDrop.innerHTML = html; mobileDrop.classList.add('open');
  });

  window.toggleMobileSearch = function() {
    const isOpen = mobileOverlay.classList.contains('open');
    if (isOpen) { closeMobileSearch(); } else {
      mobileOverlay.classList.add('open'); mobileDrop.classList.remove('open'); mobileInp.value = '';
      setTimeout(() => mobileInp.focus(), 60);
    }
  };
  window.closeMobileSearch = function() { mobileOverlay.classList.remove('open'); mobileDrop.classList.remove('open'); mobileInp.value = ''; };
})();
<\/script> `], [" ", " ", `<div class="nav-search-overlay" id="mobileSearchOverlay"> <div class="nav-search-box"> <i data-lucide="search" width="14" height="14"></i> <input id="mobileSearchInp" class="nav-search-inp" type="text" placeholder="T\xECm xe c\u1EE7a b\u1EA1n..." autocomplete="off" spellcheck="false"> <button onclick="closeMobileSearch()" style="background:none;border:none;cursor:pointer;color:var(--gray-400);padding:0;display:flex;align-items:center;"> <i data-lucide="x" width="16" height="16"></i> </button> </div> <div class="nav-search-drop" id="mobileSearchDrop"></div> </div>  <div class="nav-sidebar-overlay" id="navOverlay" onclick="this.classList.remove('open');document.getElementById('navSidebar').classList.remove('open')"></div> <div class="nav-sidebar" id="navSidebar"> <div class="nav-sidebar-top"> <span class="nav-sidebar-logo">Ti\u1EC7n \xCDch <em>Giao Th\xF4ng</em></span> <button class="nav-sidebar-close" onclick="document.getElementById('navSidebar').classList.remove('open');document.getElementById('navOverlay').classList.remove('open')"> <i data-lucide="x" width="14" height="14"></i> </button> </div> <div class="nav-sidebar-body"> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">Di chuy\u1EC3n</div> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/gia-xang">Gi\xE1 x\u0103ng d\u1EA7u h\xF4m nay</a> <a class="nav-sidebar-link" href="/cay-xang">T\xECm c\xE2y x\u0103ng g\u1EA7n \u0111\xE2y</a> <a class="nav-sidebar-link" href="/tram-sac">Tr\u1EA1m s\u1EA1c xe \u0111i\u1EC7n</a> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">B\u1EA3o hi\u1EC3m</div> <a class="nav-sidebar-link" href="/bao-hiem-o-to">BH \xF4 t\xF4 b\u1EAFt bu\u1ED9c</a> <a class="nav-sidebar-link" href="/bao-hiem-o-to">BH th\xE2n v\u1ECF \xF4 t\xF4</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/hang-xe-may">BH xe m\xE1y</a> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">Ph\xE1p l\xFD &amp; B\u1EA3o d\u01B0\u1EE1ng</div> <a class="nav-sidebar-link" href="/phat-nguoi">Tra ph\u1EA1t ngu\u1ED9i</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/dang-kiem">Ki\u1EC3m tra \u0111\u0103ng ki\u1EC3m</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/bao-duong">L\u1ECBch b\u1EA3o d\u01B0\u1EE1ng xe</a> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">Xe c\u1EE7a t\xF4i</div> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/hang-xe">Nh\xE3n xe \xF4 t\xF4</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/hang-xe-may">Nh\xE3n xe m\xE1y</a> <a class="nav-sidebar-link" href="/epass">ePass &amp; T\u1EF1 \u0111\u1ED9ng n\u1EA1p</a> </div> </div> </div>  <div class="bc-bar" id="bc-bar"> <div class="shell bc-inner" id="bc-inner"> <a class="bc-link" href="/tien-ich-giao-thong">Ti\u1EC7n \xCDch Giao Th\xF4ng</a> <span class="bc-sep">\u203A</span> <a class="bc-link" href="/tien-ich-giao-thong/hang-xe-may">H\xE3ng xe m\xE1y</a> <span class="bc-sep" id="bc-sep2" style="display:none">\u203A</span> <span class="bc-cur" id="bc-brand" style="display:none"></span> <span class="bc-sep" id="bc-sep3" style="display:none">\u203A</span> <span class="bc-cur" id="bc-model" style="display:none"></span> </div> </div> <div id="app"></div> <script>
/* \u2500\u2500 Helpers \u2500\u2500 */
function licon(name, size=16, sw=2) {
  if (window.lucide && window.lucide[name]) {
    const children = window.lucide[name].map(([tag, attrs]) => {
      const a = Object.entries(attrs).map(([k,v]) => \\\`\\\${k}="\\\${v}"\\\`).join(' ');
      return \\\`<\\\${tag} \\\${a}/>\\\`;
    }).join('');
    return \\\`<svg xmlns="http://www.w3.org/2000/svg" width="\\\${size}" height="\\\${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="\\\${sw}" stroke-linecap="round" stroke-linejoin="round">\\\${children}</svg>\\\`;
  }
  const paths = {
    ArrowRight:'<polyline points="9 18 15 12 9 6"/>',
    ArrowLeft:'<polyline points="15 18 9 12 15 6"/>',
    Shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    MapPin:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    ChevronDown:'<polyline points="6 9 12 15 18 9"/>',
    ChevronUp:'<polyline points="18 15 12 9 6 15"/>',
    Zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    Lock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    Flame:'<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
    Wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    Star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    Info:'<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
    Check:'<polyline points="20 6 9 17 4 12"/>',
  };
  return \\\`<svg xmlns="http://www.w3.org/2000/svg" width="\\\${size}" height="\\\${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="\\\${sw}" stroke-linecap="round" stroke-linejoin="round">\\\${paths[name]||''}</svg>\\\`;
}

function brandMark(id, w=44, h=44, r=10, fs=14) {
  const b = BRANDS[id];
  const abbr = id === 'piaggio' ? 'PGO' : id === 'kymco' ? 'KYM' : id.substring(0,3).toUpperCase();
  return \\\`<div class="brand-mark" style="width:\\\${w}px;height:\\\${h}px;border-radius:\\\${r}px;font-size:\\\${fs}px;background:\\\${b.color}">\\\${abbr}</div>\\\`;
}

function bikeSVG(type, color='#EB2F96', size=90) {
  const c = color;
  if (type === 'dien') return \\\`<svg width="\\\${size}" height="\\\${size*0.6}" viewBox="0 0 120 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="26" cy="54" r="14" stroke="\\\${c}" stroke-width="3" fill="\\\${c}22"/>
    <circle cx="94" cy="54" r="14" stroke="\\\${c}" stroke-width="3" fill="\\\${c}22"/>
    <path d="M26 54L40 32H75L88 46V54" stroke="\\\${c}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M55 32V22H70" stroke="\\\${c}" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="52" y="18" width="22" height="8" rx="2" fill="\\\${c}44" stroke="\\\${c}" stroke-width="1.5"/>
    <path d="M40 32H60L58 44H42L40 32Z" fill="\\\${c}33" stroke="\\\${c}" stroke-width="1.5"/>
    <circle cx="26" cy="54" r="5" fill="\\\${c}"/>
    <circle cx="94" cy="54" r="5" fill="\\\${c}"/>
  </svg>\\\`;
  if (type === 'con') return \\\`<svg width="\\\${size}" height="\\\${size*0.6}" viewBox="0 0 120 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="54" r="14" stroke="\\\${c}" stroke-width="3" fill="\\\${c}22"/>
    <circle cx="96" cy="54" r="14" stroke="\\\${c}" stroke-width="3" fill="\\\${c}22"/>
    <path d="M24 54L36 30H60L80 42L96 54" stroke="\\\${c}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M60 30L64 20" stroke="\\\${c}" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M50 26H70" stroke="\\\${c}" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M36 30L44 44H64L60 30Z" fill="\\\${c}33" stroke="\\\${c}" stroke-width="1.5"/>
    <circle cx="24" cy="54" r="5" fill="\\\${c}"/>
    <circle cx="96" cy="54" r="5" fill="\\\${c}"/>
  </svg>\\\`;
  if (type === 'tayga') return \\\`<svg width="\\\${size}" height="\\\${size*0.6}" viewBox="0 0 120 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="26" cy="54" r="14" stroke="\\\${c}" stroke-width="3" fill="\\\${c}22"/>
    <circle cx="94" cy="54" r="14" stroke="\\\${c}" stroke-width="3" fill="\\\${c}22"/>
    <path d="M26 54L38 34H80L94 54" stroke="\\\${c}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M58 20H72L76 34" stroke="\\\${c}" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M38 34H80L76 50H42L38 34Z" fill="\\\${c}33" stroke="\\\${c}" stroke-width="1.5" stroke-linejoin="round"/>
    <rect x="52" y="16" width="20" height="8" rx="4" fill="\\\${c}55" stroke="\\\${c}" stroke-width="1.5"/>
    <circle cx="26" cy="54" r="5" fill="\\\${c}"/>
    <circle cx="94" cy="54" r="5" fill="\\\${c}"/>
  </svg>\\\`;
  // xe so (default)
  return \\\`<svg width="\\\${size}" height="\\\${size*0.6}" viewBox="0 0 120 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="54" r="14" stroke="\\\${c}" stroke-width="3" fill="\\\${c}22"/>
    <circle cx="96" cy="54" r="14" stroke="\\\${c}" stroke-width="3" fill="\\\${c}22"/>
    <path d="M24 54L36 32H72L88 46L96 54" stroke="\\\${c}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M62 20H74" stroke="\\\${c}" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M68 20L72 32" stroke="\\\${c}" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M36 32H72L70 48H40L36 32Z" fill="\\\${c}33" stroke="\\\${c}" stroke-width="1.5"/>
    <circle cx="24" cy="54" r="5" fill="\\\${c}"/>
    <circle cx="96" cy="54" r="5" fill="\\\${c}"/>
  </svg>\\\`;
}

/* \u2500\u2500 DATA \u2500\u2500 */
const BRANDS = {
  honda: {
    name:'Honda', origin:'Nh\u1EADt B\u1EA3n', color:'#CC0000',
    tagline:'Th\u01B0\u01A1ng hi\u1EC7u s\u1ED1 1 th\u1ECB tr\u01B0\u1EDDng - tin c\u1EADy, ti\u1EBFt ki\u1EC7m nhi\xEAn li\u1EC7u',
    types:['so','tayga','con'],
    models:[
      {name:'Wave Alpha',slug:'wave-alpha',type:'so',price:'17-19 tri\u1EC7u',engine:'110cc',fuel:'2.0L/100km',bh_range:'66-180k/n\u0103m'},
      {name:'Vision',slug:'vision',type:'tayga',price:'30-35 tri\u1EC7u',engine:'110cc',fuel:'2.2L/100km',bh_range:'66-180k/n\u0103m'},
      {name:'Air Blade',slug:'air-blade',type:'tayga',price:'45-55 tri\u1EC7u',engine:'125cc',fuel:'2.1L/100km',bh_range:'66-180k/n\u0103m'},
      {name:'SH Mode',slug:'sh-mode',type:'tayga',price:'65-75 tri\u1EC7u',engine:'125cc',fuel:'2.3L/100km',bh_range:'66-180k/n\u0103m'},
      {name:'SH 160i',slug:'sh-160i',type:'tayga',price:'90-110 tri\u1EC7u',engine:'160cc',fuel:'2.4L/100km',bh_range:'99-220k/n\u0103m'},
      {name:'Winner X',slug:'winner-x',type:'con',price:'46-52 tri\u1EC7u',engine:'150cc',fuel:'2.8L/100km',bh_range:'99-220k/n\u0103m'},
    ],
    bh:{bat_buoc:'66.000\u0111/n\u0103m',tu_nguyen:'300-800k/n\u0103m'},
    garages:2600,
    scores:[{label:'\u0110\u1ED9 ph\u1ED5 bi\u1EBFn',val:'\u2B50\u2B50\u2B50\u2B50\u2B50'},{label:'Ti\u1EBFt ki\u1EC7m x\u0103ng',val:'\u2B50\u2B50\u2B50\u2B50\u2B50'},{label:'Gi\u1EEF gi\xE1',val:'\u2B50\u2B50\u2B50\u2B50'},{label:'Chi ph\xED s\u1EEDa',val:'R\u1EA5t th\u1EA5p'}],
    faq:[
      {q:'Honda hay Yamaha b\u1EC1n h\u01A1n?',a:'Honda \u0111\u01B0\u1EE3c \u0111\xE1nh gi\xE1 b\u1EC1n h\u01A1n v\u1EC1 l\xE2u d\xE0i, \u0111\u1EB7c bi\u1EC7t d\xF2ng Wave v\xE0 Vision. Yamaha c\xF3 l\u1EE3i th\u1EBF v\u1EC1 hi\u1EC7u su\u1EA5t v\xE0 thi\u1EBFt k\u1EBF hi\u1EC7n \u0111\u1EA1i. C\u1EA3 hai \u0111\u1EC1u c\xF3 m\u1EA1ng l\u01B0\u1EDBi d\u1ECBch v\u1EE5 ph\u1EE7 r\u1ED9ng to\xE0n qu\u1ED1c.'},
      {q:'BH xe m\xE1y Honda b\u1EAFt bu\u1ED9c ph\u1EA3i mua kh\xF4ng?',a:'C\xF3 - theo Lu\u1EADt Kinh doanh B\u1EA3o hi\u1EC3m, BH tr\xE1ch nhi\u1EC7m d\xE2n s\u1EF1 xe m\xE1y l\xE0 b\u1EAFt bu\u1ED9c. Ph\xED 66.000\u0111/n\u0103m cho xe d\u01B0\u1EDBi 50cc v\xE0 99.000\u0111/n\u0103m cho xe tr\xEAn 50cc. Kh\xF4ng c\xF3 BH b\u1ECB ph\u1EA1t 400k-600k \u0111\u1ED3ng.'},
      {q:'Xe Honda Vision \u0111i bao nhi\xEAu km th\xEC b\u1EA3o d\u01B0\u1EE1ng?',a:'L\u1ECBch chu\u1EA9n c\u1EE7a Honda: thay d\u1EA7u m\u1ED7i 3.000km (kho\u1EA3ng 100-150k), ki\u1EC3m tra t\u1ED5ng th\u1EC3 m\u1ED7i 6.000km. S\xEAn \u0111\u0129a l\xEDp thay kho\u1EA3ng 15.000-20.000km.'},
    ],
    garageList:[
      {name:'Honda Head Tr\u1EA7n Kh\xE1t Ch\xE2n',addr:'105 Tr\u1EA7n Kh\xE1t Ch\xE2n, Hai B\xE0 Tr\u01B0ng, HN',type:'auth'},
      {name:'Honda Head Nguy\u1EC5n Tr\xE3i',addr:'214 Nguy\u1EC5n Tr\xE3i, Thanh Xu\xE2n, HN',type:'auth'},
      {name:'S\u1EEDa xe MoMo Partner - \u0110\u1ED1ng \u0110a',addr:'45 \u0110\xEA La Th\xE0nh, \u0110\u1ED1ng \u0110a, HN',type:'partner'},
      {name:'S\u1EEDa xe MoMo Partner - C\u1EA7u Gi\u1EA5y',addr:'88 Xu\xE2n Th\u1EE7y, C\u1EA7u Gi\u1EA5y, HN',type:'partner'},
    ],
  },
  yamaha: {
    name:'Yamaha', origin:'Nh\u1EADt B\u1EA3n', color:'#003087',
    tagline:'C\xF4ng ngh\u1EC7 Blue Core ti\u1EBFt ki\u1EC7m - thi\u1EBFt k\u1EBF th\u1EC3 thao tr\u1EBB trung',
    types:['so','tayga','con'],
    models:[
      {name:'Sirius',slug:'sirius',type:'so',price:'18-21 tri\u1EC7u',engine:'115cc',fuel:'1.9L/100km',bh_range:'66-180k/n\u0103m'},
      {name:'Janus',slug:'janus',type:'tayga',price:'29-35 tri\u1EC7u',engine:'125cc',fuel:'2.1L/100km',bh_range:'66-180k/n\u0103m'},
      {name:'NVX 155',slug:'nvx-155',type:'tayga',price:'52-62 tri\u1EC7u',engine:'155cc',fuel:'2.4L/100km',bh_range:'99-220k/n\u0103m'},
      {name:'Grande',slug:'grande',type:'tayga',price:'48-56 tri\u1EC7u',engine:'125cc',fuel:'2.2L/100km',bh_range:'66-180k/n\u0103m'},
      {name:'Exciter 150',slug:'exciter-150',type:'con',price:'48-58 tri\u1EC7u',engine:'150cc',fuel:'2.9L/100km',bh_range:'99-220k/n\u0103m'},
      {name:'R15 V4',slug:'r15',type:'con',price:'75-85 tri\u1EC7u',engine:'155cc',fuel:'3.0L/100km',bh_range:'99-220k/n\u0103m'},
    ],
    bh:{bat_buoc:'66.000\u0111/n\u0103m',tu_nguyen:'280-750k/n\u0103m'},
    garages:2100,
    scores:[{label:'Thi\u1EBFt k\u1EBF',val:'\u2B50\u2B50\u2B50\u2B50\u2B50'},{label:'Ti\u1EBFt ki\u1EC7m x\u0103ng',val:'\u2B50\u2B50\u2B50\u2B50\u2B50'},{label:'Hi\u1EC7u su\u1EA5t',val:'\u2B50\u2B50\u2B50\u2B50'},{label:'Chi ph\xED s\u1EEDa',val:'Th\u1EA5p'}],
    faq:[
      {q:'Exciter hay Winner X n\xEAn mua?',a:'Exciter 150 nh\u1EB9 h\u01A1n, phanh \u0111\u0129a 4 b\xE1nh, ph\xF9 h\u1EE3p \u0111\xF4 th\u1ECB. Winner X m\u1EA1nh h\u01A1n (150cc DOHC), ph\xF9 h\u1EE3p \u0111\u01B0\u1EDDng d\xE0i v\xE0 \u0111\u1ECBa h\xECnh. N\u1EBFu \u0111i ph\u1ED1 ch\u1ECDn Exciter, \u0111i \u0111\u01B0\u1EDDng d\xE0i ho\u1EB7c t\u1EC9nh ch\u1ECDn Winner X.'},
      {q:'Yamaha NVX c\xF3 t\u1ED1n x\u0103ng kh\xF4ng?',a:'NVX 155 ti\xEAu th\u1EE5 kho\u1EA3ng 2.3-2.5L/100km v\u1EDBi c\xF4ng ngh\u1EC7 Blue Core. \u0110\xF4 th\u1ECB n\u1EB7ng c\xF3 th\u1EC3 l\xEAn 2.7L. M\u1EE9c n\xE0y t\u1ED1t h\u01A1n SH 160i v\xE0 ngang Air Blade 125.'},
      {q:'BH t\u1EF1 nguy\u1EC7n xe Yamaha c\xF3 \u0111\xE1ng mua kh\xF4ng?',a:'\u0110\xE1ng v\u1EDBi xe gi\xE1 tr\xEAn 40 tri\u1EC7u. BH v\u1EADt ch\u1EA5t kho\u1EA3ng 500-700k/n\u0103m, b\u1ED3i th\u01B0\u1EDDng 70-80% gi\xE1 tr\u1ECB s\u1EEDa ch\u1EEFa khi tai n\u1EA1n. Xe m\u1EDBi n\xEAn mua trong 2-3 n\u0103m \u0111\u1EA7u.'},
    ],
    garageList:[
      {name:'Yamaha Town B\xE0 Tri\u1EC7u',addr:'65 B\xE0 Tri\u1EC7u, Ho\xE0n Ki\u1EBFm, HN',type:'auth'},
      {name:'Yamaha Town L\xE1ng H\u1EA1',addr:'158 L\xE1ng H\u1EA1, \u0110\u1ED1ng \u0110a, HN',type:'auth'},
      {name:'S\u1EEDa xe MoMo Partner - Ho\xE0ng Mai',addr:'12 Tr\u01B0\u01A1ng \u0110\u1ECBnh, Ho\xE0ng Mai, HN',type:'partner'},
    ],
  },
  suzuki: {
    name:'Suzuki', origin:'Nh\u1EADt B\u1EA3n', color:'#005BAC',
    tagline:'C\xE2n b\u1EB1ng gi\u1EEFa hi\u1EC7u su\u1EA5t v\xE0 chi ph\xED v\u1EADn h\xE0nh th\u1EA5p',
    types:['so','con'],
    models:[
      {name:'Revo',slug:'revo',type:'so',price:'16-18 tri\u1EC7u',engine:'110cc',fuel:'2.1L/100km',bh_range:'66-180k/n\u0103m'},
      {name:'Raider R150',slug:'raider',type:'con',price:'42-48 tri\u1EC7u',engine:'150cc',fuel:'3.1L/100km',bh_range:'99-220k/n\u0103m'},
      {name:'GSX-S150',slug:'gsx-s150',type:'con',price:'55-62 tri\u1EC7u',engine:'150cc',fuel:'2.9L/100km',bh_range:'99-220k/n\u0103m'},
    ],
    bh:{bat_buoc:'66.000\u0111/n\u0103m',tu_nguyen:'250-650k/n\u0103m'},
    garages:280,
    scores:[{label:'Gi\xE1 tr\u1ECB',val:'\u2B50\u2B50\u2B50\u2B50'},{label:'\u0110\u1ED9 b\u1EC1n',val:'\u2B50\u2B50\u2B50\u2B50'},{label:'M\u1EA1ng l\u01B0\u1EDBi',val:'\u2B50\u2B50\u2B50'},{label:'Chi ph\xED s\u1EEDa',val:'Th\u1EA5p'}],
    faq:[
      {q:'Suzuki Revo c\xF3 \u1ED5n \u0111\u1ECBnh kh\xF4ng?',a:'Revo l\xE0 d\xF2ng xe ph\u1ED5 th\xF4ng b\u1EC1n b\u1EC9, ph\xF9 h\u1EE3p \u0111\xF4 th\u1ECB v\xE0 n\xF4ng th\xF4n. \u0110\u1ED9ng c\u01A1 110cc \u0111\u01A1n gi\u1EA3n, \xEDt h\u1ECFng v\u1EB7t, ph\u1EE5 t\xF9ng r\u1EBB. H\u1EA1n ch\u1EBF l\xE0 m\u1EA1ng l\u01B0\u1EDBi \u0111\u1EA1i l\xFD \xEDt h\u01A1n Honda/Yamaha.'},
      {q:'Raider R150 t\u1ED1n b\u1EA3o hi\u1EC3m kh\xF4ng?',a:'BH b\u1EAFt bu\u1ED9c 99.000\u0111/n\u0103m (tr\xEAn 50cc). BH t\u1EF1 nguy\u1EC7n kho\u1EA3ng 500-650k/n\u0103m cho xe m\u1EDBi. Xe c\xF4n tay th\u01B0\u1EDDng ph\xED BH t\u1EF1 nguy\u1EC7n nh\u1EC9nh h\u01A1n xe s\u1ED1 v\xEC r\u1EE7i ro cao h\u01A1n.'},
    ],
    garageList:[
      {name:'Suzuki \u0110\u1EA1i L\xFD C\u1EA7u Gi\u1EA5y',addr:'102 Xu\xE2n Th\u1EE7y, C\u1EA7u Gi\u1EA5y, HN',type:'auth'},
      {name:'S\u1EEDa xe MoMo Partner - \u0110\u1ED1ng \u0110a',addr:'78 La Th\xE0nh, \u0110\u1ED1ng \u0110a, HN',type:'partner'},
    ],
  },
  kawasaki: {
    name:'Kawasaki', origin:'Nh\u1EADt B\u1EA3n', color:'#00A550',
    tagline:'Xe c\xF4n tay th\u1EC3 thao - hi\u1EC7u su\u1EA5t cao ph\xE2n kh\xFAc sporting',
    types:['con'],
    models:[
      {name:'Z125 Pro',slug:'z125',type:'con',price:'58-65 tri\u1EC7u',engine:'125cc',fuel:'2.6L/100km',bh_range:'66-180k/n\u0103m'},
      {name:'Ninja 400',slug:'ninja-400',type:'con',price:'180-200 tri\u1EC7u',engine:'399cc',fuel:'4.2L/100km',bh_range:'200-500k/n\u0103m'},
      {name:'Z400',slug:'z400',type:'con',price:'175-195 tri\u1EC7u',engine:'399cc',fuel:'4.0L/100km',bh_range:'200-500k/n\u0103m'},
    ],
    bh:{bat_buoc:'99.000\u0111/n\u0103m',tu_nguyen:'400-1.200k/n\u0103m'},
    garages:45,
    scores:[{label:'Hi\u1EC7u su\u1EA5t',val:'\u2B50\u2B50\u2B50\u2B50\u2B50'},{label:'Thi\u1EBFt k\u1EBF',val:'\u2B50\u2B50\u2B50\u2B50\u2B50'},{label:'M\u1EA1ng l\u01B0\u1EDBi',val:'\u2B50\u2B50'},{label:'Chi ph\xED s\u1EEDa',val:'Cao'}],
    faq:[
      {q:'Kawasaki Ninja 400 b\u1EA3o hi\u1EC3m t\u1ED1n bao nhi\xEAu?',a:'BH b\u1EAFt bu\u1ED9c 99k/n\u0103m. BH v\u1EADt ch\u1EA5t t\u1EF1 nguy\u1EC7n cho Ninja 400 kho\u1EA3ng 800k-1.2 tri\u1EC7u/n\u0103m t\xF9y nh\xE0 BH. Xe tr\xEAn 100 tri\u1EC7u n\xEAn mua BH v\u1EADt ch\u1EA5t \u0111\u1EC3 b\u1EA3o v\u1EC7 t\xE0i s\u1EA3n.'},
      {q:'Z125 ph\xF9 h\u1EE3p v\u1EDBi ng\u01B0\u1EDDi m\u1EDBi h\u1ECDc xe c\xF4n kh\xF4ng?',a:'Z125 l\xE0 l\u1EF1a ch\u1ECDn t\u1ED1t cho ng\u01B0\u1EDDi m\u1EDBi - 125cc nh\u1EB9 nh\xE0ng, d\u1EC5 \u0111i\u1EC1u khi\u1EC3n nh\u01B0ng \u0111\u1EE7 phong c\xE1ch th\u1EC3 thao. Tr\u1ECDng l\u01B0\u1EE3ng ch\u1EC9 102kg, ph\xF9 h\u1EE3p h\u1ECDc c\u01A1 b\u1EA3n tr\u01B0\u1EDBc khi l\xEAn xe l\u1EDBn h\u01A1n.'},
    ],
    garageList:[
      {name:'Kawasaki Authorized M\u1EF9 \u0110\xECnh',addr:'23 M\u1EF9 \u0110\xECnh, Nam T\u1EEB Li\xEAm, HN',type:'auth'},
      {name:'Kawasaki Authorized HCM',addr:'456 \u0110i\u1EC7n Bi\xEAn Ph\u1EE7, B\xECnh Th\u1EA1nh, HCM',type:'auth'},
    ],
  },
  sym: {
    name:'SYM', origin:'\u0110\xE0i Loan', color:'#E63329',
    tagline:'Gi\xE1 t\u1ED1t - ph\u1ED5 bi\u1EBFn t\u1EA1i th\u1ECB tr\u01B0\u1EDDng mi\u1EC1n Nam v\xE0 n\xF4ng th\xF4n',
    types:['so','tayga'],
    models:[
      {name:'Attila Elizabeth',slug:'attila',type:'tayga',price:'22-26 tri\u1EC7u',engine:'125cc',fuel:'2.3L/100km',bh_range:'66-180k/n\u0103m'},
      {name:'Shark 150',slug:'shark',type:'so',price:'28-32 tri\u1EC7u',engine:'150cc',fuel:'2.5L/100km',bh_range:'99-220k/n\u0103m'},
      {name:'Star SR',slug:'star-sr',type:'so',price:'19-23 tri\u1EC7u',engine:'125cc',fuel:'2.1L/100km',bh_range:'66-180k/n\u0103m'},
    ],
    bh:{bat_buoc:'66.000\u0111/n\u0103m',tu_nguyen:'200-500k/n\u0103m'},
    garages:380,
    scores:[{label:'Gi\xE1 tr\u1ECB',val:'\u2B50\u2B50\u2B50\u2B50\u2B50'},{label:'Thi\u1EBFt k\u1EBF',val:'\u2B50\u2B50\u2B50'},{label:'M\u1EA1ng l\u01B0\u1EDBi',val:'\u2B50\u2B50\u2B50'},{label:'Chi ph\xED s\u1EEDa',val:'R\u1EA5t th\u1EA5p'}],
    faq:[
      {q:'SYM c\xF3 b\u1EC1n kh\xF4ng so v\u1EDBi Honda?',a:'SYM b\u1EC1n v\u1EEBa, ph\xF9 h\u1EE3p v\u1EDBi ng\u01B0\u1EDDi c\u1EA7n xe gi\xE1 r\u1EBB \u0111i l\u1EA1i h\xE0ng ng\xE0y. \u0110\u1ED9 b\u1EC1n kh\xF4ng b\u1EB1ng Honda nh\u01B0ng chi ph\xED s\u1EEDa th\u1EA5p h\u01A1n v\xE0 ph\u1EE5 t\xF9ng r\u1EBB. T\u1ED1t cho xe ph\u1ED5 th\xF4ng d\u01B0\u1EDBi 25 tri\u1EC7u.'},
    ],
    garageList:[
      {name:'SYM \u0110\u1EA1i L\xFD Thanh H\xF3a',addr:'12 Quang Trung, TP Thanh H\xF3a',type:'auth'},
      {name:'S\u1EEDa xe MoMo Partner - B\xECnh D\u01B0\u01A1ng',addr:'55 \u0110L B\xECnh D\u01B0\u01A1ng, Th\u1EE7 D\u1EA7u M\u1ED9t',type:'partner'},
    ],
  },
  piaggio: {
    name:'Piaggio', origin:'\xDD', color:'#003DA5',
    tagline:'Vespa & Liberty - bi\u1EC3u t\u01B0\u1EE3ng th\u1EDDi trang \u0111\xF4 th\u1ECB cao c\u1EA5p',
    types:['tayga'],
    models:[
      {name:'Vespa GTS 300',slug:'vespa-gts',type:'tayga',price:'175-200 tri\u1EC7u',engine:'300cc',fuel:'3.2L/100km',bh_range:'200-600k/n\u0103m'},
      {name:'Vespa Primavera 150',slug:'vespa-primavera',type:'tayga',price:'90-105 tri\u1EC7u',engine:'150cc',fuel:'2.6L/100km',bh_range:'99-300k/n\u0103m'},
      {name:'Liberty 150',slug:'liberty',type:'tayga',price:'55-65 tri\u1EC7u',engine:'150cc',fuel:'2.5L/100km',bh_range:'99-250k/n\u0103m'},
    ],
    bh:{bat_buoc:'99.000\u0111/n\u0103m',tu_nguyen:'350-900k/n\u0103m'},
    garages:120,
    scores:[{label:'Th\u1EDDi trang',val:'\u2B50\u2B50\u2B50\u2B50\u2B50'},{label:'Ch\u1EA5t l\u01B0\u1EE3ng',val:'\u2B50\u2B50\u2B50\u2B50\u2B50'},{label:'M\u1EA1ng l\u01B0\u1EDBi',val:'\u2B50\u2B50'},{label:'Chi ph\xED s\u1EEDa',val:'Cao'}],
    faq:[
      {q:'Vespa c\xF3 n\xEAn mua BH v\u1EADt ch\u1EA5t kh\xF4ng?',a:'B\u1EAFt bu\u1ED9c n\xEAn mua - Vespa t\u1EEB 90-200 tri\u1EC7u l\xE0 t\xE0i s\u1EA3n l\u1EDBn. BH v\u1EADt ch\u1EA5t kho\u1EA3ng 500k-1tr/n\u0103m, b\u1ED3i th\u01B0\u1EDDng khi tai n\u1EA1n, tr\u1ED9m. Kh\xF4ng c\xF3 BH m\xE0 m\u1EA5t xe l\xE0 thi\u1EC7t h\u1EA1i r\u1EA5t l\u1EDBn.'},
      {q:'Piaggio Liberty kh\xE1c g\xEC Vespa?',a:'Liberty thi\u1EBFt k\u1EBF hi\u1EC7n \u0111\u1EA1i, d\u1EC5 l\xE1i h\u01A1n Vespa, khung nh\u1EF1a nh\u1EB9 h\u01A1n. Vespa khung kim lo\u1EA1i, thi\u1EBFt k\u1EBF c\u1ED5 \u0111i\u1EC3n, b\u1EC1n h\u01A1n nh\u01B0ng n\u1EB7ng h\u01A1n. Liberty ph\xF9 h\u1EE3p \u0111i l\u1EA1i h\xE0ng ng\xE0y, Vespa l\xE0 lifestyle choice.'},
    ],
    garageList:[
      {name:'Piaggio Authorized \u0110i\u1EC7n Bi\xEAn Ph\u1EE7',addr:'299 \u0110i\u1EC7n Bi\xEAn Ph\u1EE7, B\xECnh Th\u1EA1nh, HCM',type:'auth'},
      {name:'Piaggio Authorized H\xE0 N\u1ED9i',addr:'80 Nguy\u1EC5n Ch\xED Thanh, \u0110\u1ED1ng \u0110a, HN',type:'auth'},
    ],
  },
  kymco: {
    name:'Kymco', origin:'\u0110\xE0i Loan', color:'#8B0000',
    tagline:'Xe tay ga b\u1EC1n - ph\u1ED5 bi\u1EBFn t\u1EA1i th\u1ECB tr\u01B0\u1EDDng mi\u1EC1n Trung',
    types:['tayga'],
    models:[
      {name:'Like 125',slug:'like-125',type:'tayga',price:'35-42 tri\u1EC7u',engine:'125cc',fuel:'2.3L/100km',bh_range:'66-180k/n\u0103m'},
      {name:'Many 125',slug:'many',type:'tayga',price:'38-45 tri\u1EC7u',engine:'125cc',fuel:'2.2L/100km',bh_range:'66-180k/n\u0103m'},
      {name:'Downtown 350i',slug:'downtown',type:'tayga',price:'110-125 tri\u1EC7u',engine:'350cc',fuel:'3.5L/100km',bh_range:'200-500k/n\u0103m'},
    ],
    bh:{bat_buoc:'66.000\u0111/n\u0103m',tu_nguyen:'200-550k/n\u0103m'},
    garages:95,
    scores:[{label:'Gi\xE1 tr\u1ECB',val:'\u2B50\u2B50\u2B50\u2B50'},{label:'\u0110\u1ED9 b\u1EC1n',val:'\u2B50\u2B50\u2B50\u2B50'},{label:'M\u1EA1ng l\u01B0\u1EDBi',val:'\u2B50\u2B50'},{label:'Chi ph\xED s\u1EEDa',val:'Th\u1EA5p'}],
    faq:[
      {q:'Kymco Like c\xF3 \u0111\xE1ng mua h\u01A1n Honda Vision kh\xF4ng?',a:'Like 125 thi\u1EBFt k\u1EBF retro \u0111\u1EB9p, gi\xE1 r\u1EBB h\u01A1n Vision 5-8 tri\u1EC7u. Nh\u01B0\u1EE3c \u0111i\u1EC3m l\xE0 m\u1EA1ng l\u01B0\u1EDBi d\u1ECBch v\u1EE5 h\u1EB9p h\u01A1n Honda. N\u1EBFu \u1EDF th\xE0nh ph\u1ED1 l\u1EDBn c\xF3 \u0111\u1EA1i l\xFD Kymco g\u1EA7n th\xEC l\xE0 l\u1EF1a ch\u1ECDn t\u1ED1t v\u1EC1 gi\xE1 tr\u1ECB.'},
    ],
    garageList:[
      {name:'Kymco Authorized \u0110\xE0 N\u1EB5ng',addr:'24 \u0110i\u1EC7n Bi\xEAn Ph\u1EE7, H\u1EA3i Ch\xE2u, \u0110\xE0 N\u1EB5ng',type:'auth'},
      {name:'S\u1EEDa xe MoMo Partner - Ng\u0169 H\xE0nh S\u01A1n',addr:'88 Tr\u1EA7n \u0110\u1EA1i Ngh\u0129a, Ng\u0169 H\xE0nh S\u01A1n',type:'partner'},
    ],
  },
  vinfast: {
    name:'VinFast', origin:'Vi\u1EC7t Nam', color:'#00ADD8',
    tagline:'Xe m\xE1y \u0111i\u1EC7n - kh\xF4ng x\u0103ng, kh\xF4ng kh\xED th\u1EA3i, pin c\xF3 th\u1EC3 thu\xEA',
    types:['dien'],
    models:[
      {name:'Vento',slug:'vento',type:'dien',price:'21-25 tri\u1EC7u',engine:'1.700W',fuel:'1.5kWh/100km',bh_range:'66-180k/n\u0103m'},
      {name:'Theon',slug:'theon',type:'dien',price:'30-36 tri\u1EC7u',engine:'2.000W',fuel:'1.8kWh/100km',bh_range:'66-180k/n\u0103m'},
      {name:'Evo',slug:'evo',type:'dien',price:'18-22 tri\u1EC7u',engine:'1.200W',fuel:'1.2kWh/100km',bh_range:'66-180k/n\u0103m'},
      {name:'Ludo',slug:'ludo',type:'dien',price:'22-28 tri\u1EC7u',engine:'1.400W',fuel:'1.3kWh/100km',bh_range:'66-180k/n\u0103m'},
    ],
    bh:{bat_buoc:'66.000\u0111/n\u0103m',tu_nguyen:'200-500k/n\u0103m'},
    garages:620,
    scores:[{label:'Chi ph\xED v\u1EADn h\xE0nh',val:'\u2B50\u2B50\u2B50\u2B50\u2B50'},{label:'Th\xE2n thi\u1EC7n MT',val:'\u2B50\u2B50\u2B50\u2B50\u2B50'},{label:'H\u1EA1 t\u1EA7ng pin',val:'\u2B50\u2B50\u2B50\u2B50'},{label:'Chi ph\xED s\u1EEDa',val:'R\u1EA5t th\u1EA5p'}],
    faq:[
      {q:'Xe \u0111i\u1EC7n VinFast BH nh\u01B0 th\u1EBF n\xE0o?',a:'BH b\u1EAFt bu\u1ED9c \xE1p d\u1EE5ng nh\u01B0 xe x\u0103ng: 66k/n\u0103m. BH v\u1EADt ch\u1EA5t t\u1EF1 nguy\u1EC7n kho\u1EA3ng 200-400k/n\u0103m. Pin do VinFast qu\u1EA3n l\xFD theo g\xF3i thu\xEA pin ri\xEAng (200-400k/th\xE1ng) ho\u1EB7c mua \u0111\u1EE9t. BH kh\xF4ng bao pin tr\u1EEB khi c\xF3 rider th\xEAm.'},
      {q:'VinFast Vento \u0111i \u0111\u01B0\u1EE3c bao nhi\xEAu km m\u1ED9t l\u1EA7n s\u1EA1c?',a:'Vento \u0111\u1EA1t 110-130km/l\u1EA7n s\u1EA1c trong \u0111i\u1EC1u ki\u1EC7n b\xECnh th\u01B0\u1EDDng. \u0110\xF4 th\u1ECB k\u1EB9t xe c\xF3 th\u1EC3 \u0111\u1EA1t 90-100km. S\u1EA1c \u0111\u1EA7y m\u1EA5t 4-5 gi\u1EDD v\u1EDBi s\u1EA1c th\u01B0\u1EDDng, 1.5h v\u1EDBi s\u1EA1c nhanh t\u1EA1i tr\u1EA1m VF.'},
      {q:'Thu\xEA hay mua pin VinFast c\xF3 l\u1EE3i h\u01A1n?',a:'Thu\xEA pin (200-400k/th\xE1ng) ph\xF9 h\u1EE3p ng\u01B0\u1EDDi \u0111i d\u01B0\u1EDBi 1.000km/th\xE1ng, kh\xF4ng lo pin xu\u1ED1ng c\u1EA5p. Mua \u0111\u1EE9t pin ti\u1EBFt ki\u1EC7m h\u01A1n n\u1EBFu \u0111i nhi\u1EC1u v\xE0 gi\u1EEF xe l\xE2u d\xE0i. \u0110a s\u1ED1 ng\u01B0\u1EDDi d\xF9ng VN ch\u1ECDn thu\xEA pin.'},
    ],
    garageList:[
      {name:'VinFast Service M\u1EF9 \u0110\xECnh',addr:'Khu \u0111\xF4 th\u1ECB M\u1EF9 \u0110\xECnh 1, Nam T\u1EEB Li\xEAm, HN',type:'auth'},
      {name:'VinFast Service Ho\xE0ng Mai',addr:'15 Tam Trinh, Ho\xE0ng Mai, HN',type:'auth'},
      {name:'VinFast Service Th\u1EE7 \u0110\u1EE9c',addr:'50 \u0110\u01B0\u1EDDng D1, TP Th\u1EE7 \u0110\u1EE9c, HCM',type:'auth'},
    ],
  },
};

const BRAND_LIST = ['honda','yamaha','suzuki','kawasaki','sym','piaggio','kymco','vinfast'];
const DUAL_BRANDS = ['honda','vinfast','suzuki']; // brands c\xF3 c\u1EA3 \xF4 t\xF4 l\u1EABn xe m\xE1y

const TYPE_LABELS = { so:'Xe s\u1ED1', tayga:'Tay ga', con:'C\xF4n tay', dien:'Xe \u0111i\u1EC7n' };
const TYPE_ICONS = { so:'\u{1F3CD}\uFE0F', tayga:'\u{1F6F5}', con:'\u26A1', dien:'\u{1F50B}' };

/* \u2500\u2500 State \u2500\u2500 */
const state = { view:'listing', brand:null, model:null, typeFilter:'all' };

/* \u2500\u2500 Render \u2500\u2500 */
function render() {
  if (state.view === 'listing') renderListing();
  else if (state.view === 'brand') renderBrand();
  else if (state.view === 'model') renderModel();
  updateBreadcrumb();
  updateURL();
}

function updateBreadcrumb() {
  const s2 = document.getElementById('bc-sep2');
  const bcBrand = document.getElementById('bc-brand');
  const s3 = document.getElementById('bc-sep3');
  const bcModel = document.getElementById('bc-model');
  if (state.brand) {
    const b = BRANDS[state.brand];
    s2.style.display = '';
    bcBrand.style.display = '';
    bcBrand.textContent = b.name;
    bcBrand.onclick = state.view === 'model' ? () => navBrand(state.brand) : null;
    bcBrand.style.cursor = state.view === 'model' ? 'pointer' : 'default';
  } else {
    s2.style.display = 'none';
    bcBrand.style.display = 'none';
  }
  if (state.model) {
    const m = BRANDS[state.brand].models.find(x => x.slug === state.model);
    s3.style.display = '';
    bcModel.style.display = '';
    bcModel.textContent = m ? m.name : state.model;
  } else {
    s3.style.display = 'none';
    bcModel.style.display = 'none';
  }
}

function updateURL() {
  let path = '/tien-ich-giao-thong/hang-xe-may';
  if (state.brand) path += '/' + state.brand;
  if (state.model) path += '/' + state.model;
  history.replaceState(null, '', path);
}

function navListing() {
  state.view = 'listing'; state.brand = null; state.model = null;
  document.title = 'H\xE3ng Xe M\xE1y - Ti\u1EC7n \xCDch Giao Th\xF4ng MoMo';
  render();
}
function navBrand(id) {
  state.view = 'brand'; state.brand = id; state.model = null;
  document.title = BRANDS[id].name + ' - H\xE3ng Xe M\xE1y MoMo';
  render();
}
function navModel(brandId, slug) {
  state.view = 'model'; state.brand = brandId; state.model = slug;
  const m = BRANDS[brandId].models.find(x => x.slug === slug);
  document.title = (m ? m.name : slug) + ' | ' + BRANDS[brandId].name + ' - MoMo';
  render();
}

function renderListing() {
  const filteredBrands = state.typeFilter === 'all'
    ? BRAND_LIST
    : BRAND_LIST.filter(id => BRANDS[id].types.includes(state.typeFilter));

  const typeButtons = ['all','so','tayga','con','dien'].map(t => {
    const active = state.typeFilter === t;
    const label = t === 'all' ? 'T\u1EA5t c\u1EA3' : TYPE_LABELS[t];
    const icon = t === 'all' ? '\u{1F3CD}\uFE0F' : TYPE_ICONS[t];
    const count = t === 'all' ? BRAND_LIST.length : BRAND_LIST.filter(id => BRANDS[id].types.includes(t)).length;
    return \\\`<button class="filter-tab\\\${active?' active':''}" onclick="setTypeFilter('\\\${t}')">
      \\\${icon} \\\${label}
      <span class="filter-count">\\\${count}</span>
    </button>\\\`;
  }).join('');

  const typeGrid = Object.entries(TYPE_LABELS).map(([t, label]) => {
    const active = state.typeFilter === t;
    const count = BRAND_LIST.filter(id => BRANDS[id].types.includes(t)).length;
    return \\\`<div class="type-card\\\${active?' active':''}" onclick="setTypeFilter('\\\${t}')">
      <div class="type-card-icon">\\\${TYPE_ICONS[t]}</div>
      <div class="type-card-name">\\\${label}</div>
    </div>\\\`;
  }).join('');

  const brandCards = filteredBrands.map(id => {
    const b = BRANDS[id];
    const topModel = b.models[0];
    const topType = b.types[0];
    return \\\`<a class="brand-card" href="/tien-ich-giao-thong/hang-xe-may/\\\${id}" onclick="event.preventDefault();navBrand('\\\${id}')">
      <div class="brand-card-visual" style="background:linear-gradient(140deg,\\\${b.color}18 0%,\\\${b.color}08 60%,transparent 100%)">
        <div class="brand-card-bike-bg">\\\${bikeSVG(topType, b.color, 100)}</div>
        <div class="brand-card-mark-wrap">\\\${brandMark(id,44,44,10,13)}</div>
      </div>
      <div class="brand-card-body">
        <div class="brand-card-name">\\\${b.name}</div>
        <div class="brand-card-origin">\\\${b.origin}</div>
        <div class="brand-card-bottom">
          <span class="brand-card-top-model">Model <strong>\\\${topModel.name}</strong></span>
          <div class="brand-card-arrow">\\\${licon('ArrowRight',12,2.5)}</div>
        </div>
      </div>
    </a>\\\`;
  }).join('');

  document.getElementById('app').innerHTML = \\\`
    <div class="hero">
      <div class="shell">
        <div class="veh-tabs">
          <a class="veh-tab" href="/hang-xe">\u{1F697} \xD4 t\xF4</a>
          <span class="veh-tab active">\u{1F3CD}\uFE0F Xe m\xE1y</span>
        </div>
        <h1 class="hero-title">D\u1ECBch v\u1EE5 MoMo cho <span>xe m\xE1y c\u1EE7a b\u1EA1n</span></h1>
        <p class="hero-sub">Ch\u1ECDn h\xE3ng xe \u0111\u1EC3 xem d\xF2ng xe ch\u1EE7 l\u1EF1c, ph\xED b\u1EA3o hi\u1EC3m v\xE0 m\u1EA1ng l\u01B0\u1EDBi s\u1EEDa ch\u1EEFa.</p>
        <div class="filter-bar">
          <div class="filter-tabs">\\\${typeButtons}</div>
        </div>
      </div>
    </div>
    <div style="background:#fff;border-bottom:1px solid var(--gray-200);padding:16px 0">
      <div class="shell">
        <div class="section-label">Lo\u1EA1i xe</div>
        <div class="type-grid">\\\${typeGrid}</div>
      </div>
    </div>
    <div style="padding:24px 0 0">
      <div class="shell">
        <div class="section-label" style="margin-bottom:16px">H\xE3ng xe (\\\${filteredBrands.length})</div>
        <div class="brand-grid">\\\${brandCards}</div>
      </div>
    </div>
  \\\`;
}

window.setTypeFilter = function(t) {
  state.typeFilter = t;
  renderListing();
};

function renderBrand() {
  const id = state.brand;
  const b = BRANDS[id];

  const modelCards = b.models.map(m => \\\`
    <div class="model-card" onclick="navModel('\\\${id}','\\\${m.slug}')">
      <div class="model-card-visual">\\\${bikeSVG(m.type, b.color, 80)}</div>
      <div class="model-card-name">\\\${m.name}</div>
      <div class="model-card-type">\\\${TYPE_LABELS[m.type]||m.type}</div>
      <div class="model-card-price">Gi\xE1: <strong>\\\${m.price}</strong></div>
      <div class="model-card-arrow">\\\${licon('ArrowRight',14,2.5)}</div>
    </div>
  \\\`).join('');

  const garageCards = b.garageList.map(g => \\\`
    <div class="garage-card">
      <div class="garage-name">\\\${g.name}</div>
      <div class="garage-addr">\\\${licon('MapPin',11,2)} \\\${g.addr}</div>
      <span class="garage-tag \\\${g.type}">\\\${g.type === 'auth' ? '\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng' : '\u0110\u1ED1i t\xE1c MoMo'}</span>
    </div>
  \\\`).join('');

  const faqItems = b.faq.map((f,i) => \\\`
    <div class="faq-item" id="faq-\\\${i}">
      <div class="faq-q" onclick="toggleFaq(\\\${i})">\\\${f.q}<span class="faq-chevron">\\\${licon('ChevronDown',14,2.5)}</span></div>
      <div class="faq-a">\\\${f.a}</div>
    </div>
  \\\`).join('');

  const scoreChips = b.scores.map(s =>
    \\\`<span class="meta-chip">\\\${s.label}: \\\${s.val}</span>\\\`
  ).join('');

  document.getElementById('app').innerHTML = \\\`
    <div style="background:#fff;border-bottom:1px solid var(--gray-200)">
      <div class="shell" style="padding-top:24px;padding-bottom:16px">
        <button class="back-btn" onclick="navListing()">\\\${licon('ArrowLeft',14,2.5)} H\xE3ng xe m\xE1y</button>
        \\\${DUAL_BRANDS.includes(id) ? \\\`<div class="veh-tabs" style="margin-top:12px">
          <a class="veh-tab" href="/tien-ich-giao-thong/hang-xe/\\\${id}">\u{1F697} \xD4 t\xF4</a>
          <span class="veh-tab active">\u{1F3CD}\uFE0F Xe m\xE1y</span>
        </div>\\\` : ''}
        <div class="detail-header">
          \\\${brandMark(id, 64, 64, 14, 20)}
          <div>
            <div class="detail-brand-name">\\\${b.name}</div>
            <div class="detail-brand-tagline">\\\${b.tagline}</div>
            <div class="detail-meta">\\\${scoreChips}</div>
          </div>
        </div>
        <div class="quick-nav">
          <button class="qnav-pill" onclick="document.getElementById('sec-models').scrollIntoView({behavior:'smooth'})">D\xF2ng xe</button>
          <button class="qnav-pill" onclick="document.getElementById('sec-bh').scrollIntoView({behavior:'smooth'})">B\u1EA3o hi\u1EC3m</button>
          <button class="qnav-pill" onclick="document.getElementById('sec-garage').scrollIntoView({behavior:'smooth'})">Garage</button>
          <button class="qnav-pill" onclick="document.getElementById('sec-faq').scrollIntoView({behavior:'smooth'})">H\u1ECFi \u0111\xE1p</button>
        </div>
      </div>
    </div>
    <div class="shell">
      <div class="detail-layout">
        <div class="detail-main">
          <div id="sec-models">
            <div class="eyebrow">D\xF2ng xe</div>
            <div class="section-h">C\xE1c d\xF2ng xe \\\${b.name} ph\u1ED5 bi\u1EBFn t\u1EA1i Vi\u1EC7t Nam</div>
            <div class="section-sub">Ch\u1ECDn d\xF2ng xe \u0111\u1EC3 xem th\xF4ng s\u1ED1 v\xE0 chi ph\xED b\u1EA3o hi\u1EC3m c\u1EE5 th\u1EC3</div>
            <div class="model-grid">\\\${modelCards}</div>
          </div>

          <div id="sec-garage">
            <div class="eyebrow">M\u1EA1ng l\u01B0\u1EDBi</div>
            <div class="section-h">\u0110\u1EA1i l\xFD & garage \\\${b.name}</div>
            <div class="section-sub">\\\${b.garages.toLocaleString('vi')} \u0111i\u1EC3m tr\xEAn to\xE0n qu\u1ED1c</div>
            <div class="garage-grid">\\\${garageCards}</div>
          </div>

          <div id="sec-faq">
            <div class="eyebrow">H\u1ECFi \u0111\xE1p</div>
            <div class="section-h">C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p v\u1EC1 \\\${b.name}</div>
            <div class="section-sub" style="margin-bottom:16px">Th\xF4ng tin h\u1EEFu \xEDch t\u1EEB ch\u1EE7 xe th\u1EF1c t\u1EBF</div>
            <div class="faq-list">\\\${faqItems}</div>
          </div>
        </div>

        <div class="detail-sidebar" id="sec-bh">
          <div class="bh-side-card">
            <div class="bh-side-title">\\\${licon('Shield',14,2)} B\u1EA3o hi\u1EC3m xe \\\${b.name}</div>
            <div class="bh-side-sub">Mua nhanh qua MoMo \xB7 Ph\xEA duy\u1EC7t ngay</div>
            <div class="bh-type-row">
              <div>
                <div class="bh-type-label">BH B\u1EAFt bu\u1ED9c TNDS</div>
                <div class="bh-type-note">Theo quy \u0111\u1ECBnh ph\xE1p lu\u1EADt</div>
              </div>
              <div class="bh-type-price">\\\${b.bh.bat_buoc}</div>
            </div>
            <div class="bh-type-row">
              <div>
                <div class="bh-type-label">BH V\u1EADt ch\u1EA5t t\u1EF1 nguy\u1EC7n</div>
                <div class="bh-type-note">Tai n\u1EA1n, tr\u1ED9m, thi\xEAn tai</div>
              </div>
              <div class="bh-type-price">\\\${b.bh.tu_nguyen}</div>
            </div>
            <a class="btn-bh" href="/bao-hiem-xe-may">\\\${licon('Shield',14,2)} Xem g\xF3i & mua ngay</a>
          </div>

          <div class="bh-side-card" style="background:var(--gray-50)">
            <div style="font-size:12px;font-weight:800;color:var(--gray-700);margin-bottom:8px">\\\${licon('Info',13,2)} L\u01B0u \xFD BH xe m\xE1y</div>
            <div style="font-size:12px;color:var(--gray-600);line-height:1.6">
              BH b\u1EAFt bu\u1ED9c l\xE0 <strong>b\u1EAFt bu\u1ED9c theo lu\u1EADt</strong>. Kh\xF4ng c\xF3 BH s\u1EBD b\u1ECB ph\u1EA1t <strong>400.000 - 600.000\u0111</strong> khi ki\u1EC3m tra.
              <br><br>
              BH t\u1EF1 nguy\u1EC7n b\u1EA3o v\u1EC7 xe khi tai n\u1EA1n, m\u1EA5t tr\u1ED9m - n\xEAn mua v\u1EDBi xe tr\xEAn 30 tri\u1EC7u.
            </div>
          </div>
        </div>
      </div>
    </div>
  \\\`;
}

function renderModel() {
  const id = state.brand;
  const b = BRANDS[id];
  const m = b.models.find(x => x.slug === state.model);
  if (!m) { navBrand(id); return; }

  document.getElementById('app').innerHTML = \\\`
    <div style="background:#fff;border-bottom:1px solid var(--gray-200)">
      <div class="shell" style="padding:20px 0 16px">
        <button class="back-btn" onclick="navBrand('\\\${id}')">\\\${licon('ArrowLeft',14,2.5)} \\\${b.name}</button>
        <div class="detail-header">
          \\\${brandMark(id, 52, 52, 12, 16)}
          <div>
            <div class="detail-brand-name">\\\${b.name} \\\${m.name}</div>
            <div class="detail-brand-tagline">\\\${TYPE_LABELS[m.type]} \xB7 \\\${m.engine} \xB7 \\\${m.price}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="shell" style="padding-top:24px;padding-bottom:80px">
      <div class="detail-layout">
        <div>
          <div class="model-detail-header">
            <div style="display:flex;justify-content:center;margin-bottom:16px">\\\${bikeSVG(m.type, b.color, 140)}</div>
            <div class="model-specs">
              <div class="spec-row"><div class="spec-label">Dung t\xEDch / C\xF4ng su\u1EA5t</div><div class="spec-val">\\\${m.engine}</div></div>
              <div class="spec-row"><div class="spec-label">Gi\xE1 b\xE1n l\u1EBB</div><div class="spec-val">\\\${m.price}</div></div>
              <div class="spec-row"><div class="spec-label">Ti\xEAu hao nhi\xEAn li\u1EC7u</div><div class="spec-val">\\\${m.fuel}</div></div>
              <div class="spec-row"><div class="spec-label">Lo\u1EA1i xe</div><div class="spec-val">\\\${TYPE_LABELS[m.type]}</div></div>
            </div>
          </div>

          <div class="eyebrow">B\u1EA3o hi\u1EC3m</div>
          <div class="section-h">Chi ph\xED BH cho \\\${m.name}</div>
          <div class="stat-band" style="margin-top:14px">
            <div class="stat-cell"><div class="stat-val" style="font-size:15px">\\\${b.bh.bat_buoc}</div><div class="stat-label">BH b\u1EAFt bu\u1ED9c/n\u0103m</div></div>
            <div class="stat-cell"><div class="stat-val" style="font-size:15px;color:var(--pink-500)">\\\${m.bh_range}</div><div class="stat-label">BH v\u1EADt ch\u1EA5t/n\u0103m</div></div>
            <div class="stat-cell"><div class="stat-val" style="font-size:15px">\\\${b.garages.toLocaleString('vi')}</div><div class="stat-label">\u0110i\u1EC3m s\u1EEDa ch\u1EEFa</div></div>
          </div>
        </div>

        <div>
          <div class="bh-side-card">
            <div class="bh-side-title">\\\${licon('Shield',14,2)} Mua BH cho \\\${m.name}</div>
            <div class="bh-side-sub">So s\xE1nh nhi\u1EC1u nh\xE0 BH \xB7 Ph\xEA duy\u1EC7t ngay</div>
            <div class="bh-type-row">
              <div><div class="bh-type-label">BH B\u1EAFt bu\u1ED9c</div><div class="bh-type-note">B\u1EAFt bu\u1ED9c theo lu\u1EADt</div></div>
              <div class="bh-type-price">\\\${b.bh.bat_buoc}</div>
            </div>
            <div class="bh-type-row">
              <div><div class="bh-type-label">BH V\u1EADt ch\u1EA5t</div><div class="bh-type-note">\u01AF\u1EDBc t\xEDnh cho \\\${m.name}</div></div>
              <div class="bh-type-price">\\\${m.bh_range}</div>
            </div>
            <a class="btn-bh" href="/bao-hiem-xe-may">\\\${licon('Shield',14,2)} Mua ngay tr\xEAn MoMo</a>
          </div>
        </div>
      </div>
    </div>

    <div class="sticky-bh-bar" style="background:linear-gradient(90deg,\\\${b.color} 0%,\\\${b.color}cc 100%)">
      <div class="sticky-bh-copy">
        <strong>BH cho \\\${b.name} \\\${m.name}</strong>
        <span>T\u1EEB \\\${b.bh.bat_buoc} \xB7 Duy\u1EC7t ngay</span>
      </div>
      <a class="sticky-bh-btn" href="/bao-hiem-xe-may" style="color:\\\${b.color}">\\\${licon('Shield',13,2)} Mua ngay</a>
    </div>
  \\\`;
}

window.toggleFaq = function(i) {
  const el = document.getElementById('faq-' + i);
  el.classList.toggle('open');
};

/* \u2500\u2500 Init from URL \u2500\u2500 */
(function init() {
  const rawPath = location.pathname.replace(/^\\\\/tien-ich-giao-thong\\\\/hang-xe-may\\\\/?/,'').replace(/^\\\\/hang-xe-may\\\\/?/,'');
  const parts = rawPath.split('/').filter(Boolean);
  if (parts[0] && BRANDS[parts[0]]) {
    state.brand = parts[0];
    if (parts[1]) {
      const m = BRANDS[parts[0]].models.find(x => x.slug === parts[1]);
      if (m) { state.model = parts[1]; state.view = 'model'; }
      else state.view = 'brand';
    } else {
      state.view = 'brand';
    }
  }
  render();
  if (window.lucide) lucide.createIcons();
})();
(function(){
  var el = document.getElementById('gs-date');
  if(el){ var d=new Date(); el.textContent=String(d.getDate()).padStart(2,'0')+'/'+String(d.getMonth()+1).padStart(2,'0'); }
})();

/* \u2500\u2500 NAV VEHICLE SEARCH \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
(function() {
  const VEHICLE_DATA = [
    {brand:'toyota',label:'Toyota',color:'#EB0A1E',cat:'\xD4 t\xF4',models:[
      {name:'Fortuner',slug:'fortuner',type:'SUV'},{name:'Camry',slug:'camry',type:'Sedan'},
      {name:'Corolla Cross',slug:'corolla-cross',type:'Crossover'},{name:'Innova Cross',slug:'innova-cross',type:'MPV'},
      {name:'Veloz',slug:'veloz',type:'MPV'},{name:'Raize',slug:'raize',type:'SUV'},
    ]},
    {brand:'honda',label:'Honda',color:'#CC0000',cat:'\xD4 t\xF4',models:[
      {name:'CR-V',slug:'cr-v',type:'SUV'},{name:'City',slug:'city',type:'Sedan'},
      {name:'Civic',slug:'civic',type:'Sedan'},{name:'HR-V',slug:'hr-v',type:'Crossover'},
    ]},
    {brand:'hyundai',label:'Hyundai',color:'#002C5F',cat:'\xD4 t\xF4',models:[
      {name:'Tucson',slug:'tucson',type:'SUV'},{name:'Ioniq 6',slug:'ioniq-6',type:'EV'},
    ]},
    {brand:'kia',label:'Kia',color:'#05141F',cat:'\xD4 t\xF4',models:[
      {name:'Seltos',slug:'seltos',type:'Crossover'},{name:'Sorento',slug:'sorento',type:'SUV'},
    ]},
    {brand:'vinfast',label:'VinFast',color:'#009EDB',cat:'\xD4 t\xF4',models:[
      {name:'VF 8',slug:'vf-8',type:'EV'},{name:'VF 6',slug:'vf-6',type:'EV'},
    ]},
    {brand:'honda-may',label:'Honda',color:'#CC0000',cat:'Xe m\xE1y',models:[
      {name:'Wave Alpha',slug:'wave-alpha',type:'Xe s\u1ED1'},{name:'Vision',slug:'vision',type:'Tay ga'},
      {name:'Air Blade',slug:'air-blade',type:'Tay ga'},{name:'SH Mode',slug:'sh-mode',type:'Tay ga'},
      {name:'SH 160i',slug:'sh-160i',type:'Tay ga'},{name:'Winner X',slug:'winner-x',type:'C\xF4n tay'},
    ]},
    {brand:'yamaha-may',label:'Yamaha',color:'#003087',cat:'Xe m\xE1y',models:[
      {name:'Sirius',slug:'sirius',type:'Xe s\u1ED1'},{name:'NVX 155',slug:'nvx-155',type:'Tay ga'},
      {name:'Grande',slug:'grande',type:'Tay ga'},{name:'Exciter 150',slug:'exciter-150',type:'C\xF4n tay'},
      {name:'Janus',slug:'janus',type:'Tay ga'},
    ]},
    {brand:'suzuki-may',label:'Suzuki',color:'#003399',cat:'Xe m\xE1y',models:[
      {name:'Revo',slug:'revo',type:'Xe s\u1ED1'},{name:'Raider R150',slug:'raider',type:'C\xF4n tay'},
    ]},
    {brand:'piaggio',label:'Piaggio',color:'#0033A0',cat:'Xe m\xE1y',models:[
      {name:'Vespa GTS 300',slug:'vespa-gts',type:'Tay ga'},{name:'Vespa Primavera',slug:'vespa-primavera',type:'Tay ga'},
      {name:'Liberty 150',slug:'liberty',type:'Tay ga'},
    ]},
  ];

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
  let activeIdx = -1, blurTimer = null;

  function getUrl(item) {
    if (item.cat === 'Xe m\xE1y') return '/tien-ich-giao-thong/hang-xe-may';
    return '/tien-ich-giao-thong/hang-xe/' + item.brand + '/' + item.slug;
  }

  function renderResults(results) {
    if (!results.length) {
      drop.innerHTML = '<div class="nsd-empty"><strong>Kh\xF4ng t\xECm th\u1EA5y xe</strong>Th\u1EED t\xEAn kh\xE1c nh\u01B0 "Toyota Camry" hay "Honda SH"</div>';
      return;
    }
    const groups = {};
    results.forEach(r => { if (!groups[r.cat]) groups[r.cat] = []; groups[r.cat].push(r); });
    let html = '';
    Object.entries(groups).forEach(([cat, items], gi) => {
      if (gi > 0) html += '<div class="nsd-divider"></div>';
      html += \\\`<div class="nsd-section-label">\\\${cat}</div>\\\`;
      items.forEach(item => {
        const typeClass = item.type === 'EV' ? 'ev' : item.cat === 'Xe m\xE1y' ? 'motorbike' : '';
        html += \\\`<a class="nsd-item" href="\\\${getUrl(item)}">
          <span class="nsd-dot" style="background:\\\${item.color}"></span>
          <span class="nsd-info"><span class="nsd-model">\\\${item.name}</span><span class="nsd-brand">\\\${item.brandLabel}</span></span>
          <span class="nsd-type \\\${typeClass}">\\\${item.type}</span></a>\\\`;
      });
    });
    drop.innerHTML = html; activeIdx = -1;
  }

  function showEmpty() {
    drop.innerHTML = \\\`<div class="nsd-section-label">Ph\u1ED5 bi\u1EBFn nh\u1EA5t</div>\\\` +
      ['honda-may|air-blade|Air Blade|Tay ga|#CC0000|Xe m\xE1y','yamaha-may|nvx-155|NVX 155|Tay ga|#003087|Xe m\xE1y',
       'honda-may|sh-160i|SH 160i|Tay ga|#CC0000|Xe m\xE1y','piaggio|vespa-gts|Vespa GTS 300|Tay ga|#0033A0|Xe m\xE1y',
       'toyota|fortuner|Fortuner|SUV|#EB0A1E|\xD4 t\xF4','vinfast|vf-8|VF 8|EV|#009EDB|\xD4 t\xF4']
      .map(s => { const [brand,slug,name,type,color,cat] = s.split('|');
        const isMoto = cat === 'Xe m\xE1y';
        const url = isMoto ? '/tien-ich-giao-thong/hang-xe-may' : \\\`/tien-ich-giao-thong/hang-xe/\\\${brand}/\\\${slug}\\\`;
        const typeClass = type === 'EV' ? 'ev' : isMoto ? 'motorbike' : '';
        return \\\`<a class="nsd-item" href="\\\${url}">
          <span class="nsd-dot" style="background:\\\${color}"></span>
          <span class="nsd-info"><span class="nsd-model">\\\${name}</span><span class="nsd-brand">\\\${brand.replace('-may','').charAt(0).toUpperCase()+brand.replace('-may','').slice(1)}</span></span>
          <span class="nsd-type \\\${typeClass}">\\\${type}</span></a>\\\`;
      }).join('');
  }

  function openDrop() { if (!inp.value.trim()) showEmpty(); drop.classList.add('open'); }
  function closeDrop() { drop.classList.remove('open'); activeIdx = -1; }

  inp.addEventListener('input', () => {
    const q = inp.value.trim().toLowerCase();
    if (!q) { showEmpty(); drop.classList.add('open'); return; }
    renderResults(INDEX.filter(r => r.search.includes(q)).slice(0, 12));
    drop.classList.add('open');
  });
  inp.addEventListener('focus', () => { clearTimeout(blurTimer); openDrop(); });
  inp.addEventListener('blur', () => { blurTimer = setTimeout(closeDrop, 160); });

  inp.addEventListener('keydown', e => {
    const items = drop.querySelectorAll('.nsd-item');
    if (e.key === 'ArrowDown') { e.preventDefault(); activeIdx = Math.min(activeIdx+1, items.length-1); items.forEach((el,i)=>el.classList.toggle('nsd-active',i===activeIdx)); if(items[activeIdx])items[activeIdx].scrollIntoView({block:'nearest'}); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); activeIdx = Math.max(activeIdx-1, 0); items.forEach((el,i)=>el.classList.toggle('nsd-active',i===activeIdx)); if(items[activeIdx])items[activeIdx].scrollIntoView({block:'nearest'}); }
    else if (e.key === 'Enter' && activeIdx >= 0 && items[activeIdx]) { e.preventDefault(); items[activeIdx].click(); }
    else if (e.key === 'Escape') { closeDrop(); inp.blur(); }
  });

  document.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement !== inp && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') { e.preventDefault(); inp.focus(); }
  });

  const mobileOverlay = document.getElementById('mobileSearchOverlay');
  const mobileInp = document.getElementById('mobileSearchInp');
  const mobileDrop = document.getElementById('mobileSearchDrop');

  mobileInp.addEventListener('input', () => {
    const q = mobileInp.value.trim().toLowerCase();
    if (!q) { mobileDrop.classList.remove('open'); return; }
    const groups = {};
    INDEX.filter(r => r.search.includes(q)).slice(0, 10).forEach(r => { if (!groups[r.cat]) groups[r.cat] = []; groups[r.cat].push(r); });
    let html = '';
    Object.entries(groups).forEach(([cat, items], gi) => {
      if (gi > 0) html += '<div class="nsd-divider"></div>';
      html += \\\`<div class="nsd-section-label">\\\${cat}</div>\\\`;
      items.forEach(item => { const tc=item.type==='EV'?'ev':item.cat==='Xe m\xE1y'?'motorbike':''; html+=\\\`<a class="nsd-item" href="\\\${getUrl(item)}"><span class="nsd-dot" style="background:\\\${item.color}"></span><span class="nsd-info"><span class="nsd-model">\\\${item.name}</span><span class="nsd-brand">\\\${item.brandLabel}</span></span><span class="nsd-type \\\${tc}">\\\${item.type}</span></a>\\\`; });
    });
    mobileDrop.innerHTML = html; mobileDrop.classList.add('open');
  });

  window.toggleMobileSearch = function() {
    const isOpen = mobileOverlay.classList.contains('open');
    if (isOpen) { closeMobileSearch(); } else {
      mobileOverlay.classList.add('open'); mobileDrop.classList.remove('open'); mobileInp.value = '';
      setTimeout(() => mobileInp.focus(), 60);
    }
  };
  window.closeMobileSearch = function() { mobileOverlay.classList.remove('open'); mobileDrop.classList.remove('open'); mobileInp.value = ''; };
})();
<\/script> `])), renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(`<style>${rawCss}</style>`)}` }), maybeRenderHead()) })}`;
}, "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/hang-xe-may.astro", void 0);

const $$file = "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/hang-xe-may.astro";
const $$url = "/tien-ich-giao-thong/hang-xe-may";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HangXeMay,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
