import { c as createComponent, e as renderComponent, b as renderTemplate, d as createAstro, m as maybeRenderHead, F as Fragment, u as unescapeHTML } from './astro/server_BMOddyS3.mjs';
import 'piccolore';
import { $ as $$VehicleHub } from './VehicleHub_Msovdq2n.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Car, Bike, ShieldCheck, Award, Sparkles } from 'lucide-react';
/* empty css                           */

function HangXeHeroMotion() {
  const [activeVehicleType, setActiveVehicleType] = useState("car");
  return /* @__PURE__ */ jsxs("section", { style: {
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
    padding: "40px 20px 48px",
    color: "#ffffff",
    position: "relative",
    overflow: "hidden",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    fontFamily: "'MoMoTrustSans', -apple-system, sans-serif"
  }, children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        animate: {
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.3, 0.15]
        },
        transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        style: {
          position: "absolute",
          top: "-80px",
          right: "8%",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #2563eb 0%, transparent 70%)",
          pointerEvents: "none"
        }
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        animate: {
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1]
        },
        transition: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2.5 },
        style: {
          position: "absolute",
          bottom: "-100px",
          left: "6%",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #eb2f96 0%, transparent 70%)",
          pointerEvents: "none"
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { style: { maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px", alignItems: "center", position: "relative", zIndex: 2 }, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#94a3b8", marginBottom: "14px" }, children: [
          /* @__PURE__ */ jsx("a", { href: "/", style: { color: "#94a3b8", textDecoration: "none" }, children: "Trang chủ" }),
          /* @__PURE__ */ jsx("span", { children: "›" }),
          /* @__PURE__ */ jsx("a", { href: "/tien-ich-giao-thong", style: { color: "#94a3b8", textDecoration: "none" }, children: "Tiện ích giao thông" }),
          /* @__PURE__ */ jsx("span", { children: "›" }),
          /* @__PURE__ */ jsx("span", { style: { color: "#ffffff", fontWeight: 700 }, children: "Hãng xe" })
        ] }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4 },
            style: { display: "inline-flex", background: "rgba(255,255,255,0.08)", borderRadius: "14px", padding: "4px", border: "1px solid rgba(255,255,255,0.12)", marginBottom: "18px" },
            children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveVehicleType("car"),
                  style: {
                    padding: "7px 16px",
                    borderRadius: "10px",
                    fontSize: "12.5px",
                    fontWeight: 800,
                    cursor: "pointer",
                    border: "none",
                    background: activeVehicleType === "car" ? "#2563eb" : "transparent",
                    color: "#ffffff",
                    boxShadow: activeVehicleType === "car" ? "0 4px 14px rgba(37,99,235,0.4)" : "none",
                    transition: "all 0.15s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  },
                  children: [
                    /* @__PURE__ */ jsx(Car, { style: { width: "15px", height: "15px" } }),
                    " Hãng Xe Ô Tô (34+)"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "/tien-ich-giao-thong/hang-xe-may",
                  style: {
                    padding: "7px 16px",
                    borderRadius: "10px",
                    fontSize: "12.5px",
                    fontWeight: 800,
                    cursor: "pointer",
                    border: "none",
                    background: activeVehicleType === "bike" ? "#eb2f96" : "transparent",
                    color: activeVehicleType === "bike" ? "#ffffff" : "#cbd5e1",
                    textDecoration: "none",
                    transition: "all 0.15s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  },
                  children: [
                    /* @__PURE__ */ jsx(Bike, { style: { width: "15px", height: "15px" } }),
                    " Hãng Xe Máy (12+)"
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.45, delay: 0.1 },
            style: { fontSize: "36px", fontWeight: 900, color: "#ffffff", margin: "0 0 10px", letterSpacing: "-0.03em", lineHeight: 1.15 },
            children: [
              "Dịch Vụ MoMo Cho ",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { style: { background: "linear-gradient(90deg, #60a5fa 0%, #eb2f96 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }, children: "Hãng Xe Của Bạn" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.h2,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.45, delay: 0.15 },
            style: { fontSize: "14.5px", color: "#94a3b8", margin: "0 0 24px", lineHeight: 1.55, fontWeight: 400, maxWidth: "520px" },
            children: "Tra cứu thông số kỹ thuật, lịch bảo dưỡng định kỳ, chi phí nuôi xe hàng năm và bảo hiểm theo từng thương hiệu xe ô tô tại Việt Nam."
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.45, delay: 0.2 },
            style: { display: "flex", gap: "12px", flexWrap: "wrap" },
            children: [
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#cbd5e1", background: "rgba(255,255,255,0.06)", padding: "6px 12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)" }, children: [
                /* @__PURE__ */ jsx(ShieldCheck, { style: { width: "14px", height: "14px", color: "#60a5fa" } }),
                " 200+ Dòng xe Việt Nam"
              ] }),
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#cbd5e1", background: "rgba(255,255,255,0.06)", padding: "6px 12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)" }, children: [
                /* @__PURE__ */ jsx(Award, { style: { width: "14px", height: "14px", color: "#eb2f96" } }),
                " Ước tính bảo dưỡng 1 Click"
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.6, ease: "easeOut" },
          style: { display: "flex", justifyContent: "center" },
          children: /* @__PURE__ */ jsxs("div", { style: {
            position: "relative",
            width: "100%",
            maxWidth: "380px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "24px",
            padding: "24px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.3)"
          }, children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                animate: { y: [0, -5, 0] },
                transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                style: {
                  position: "absolute",
                  top: "-12px",
                  right: "20px",
                  background: "#2563eb",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: 900,
                  padding: "4px 12px",
                  borderRadius: "20px",
                  boxShadow: "0 4px 14px rgba(37,99,235,0.4)",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                },
                children: [
                  /* @__PURE__ */ jsx(Sparkles, { style: { width: "12px", height: "12px" } }),
                  " Toyota, VinFast, Hyundai, BMW..."
                ]
              }
            ),
            /* @__PURE__ */ jsxs("svg", { width: "100%", height: "180", viewBox: "0 0 320 180", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
              /* @__PURE__ */ jsx("rect", { x: "20", y: "150", width: "280", height: "4", fill: "#334155", rx: "2" }),
              /* @__PURE__ */ jsxs(
                motion.g,
                {
                  animate: { y: [0, -4, 0] },
                  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  children: [
                    /* @__PURE__ */ jsx("path", { d: "M40 120 Q60 118 80 100 Q110 82 170 82 Q230 82 250 105 Q275 110 285 120 Q290 135 280 142 L40 142 Z", fill: "#2563eb" }),
                    /* @__PURE__ */ jsx("path", { d: "M90 98 Q120 84 170 84 Q220 84 242 102 Z", fill: "#60a5fa", opacity: "0.4" }),
                    /* @__PURE__ */ jsx("path", { d: "M100 100 L135 90 L165 90 L165 110 L95 110 Z", fill: "#0f172a", opacity: "0.6" }),
                    /* @__PURE__ */ jsx("path", { d: "M172 90 L210 90 L235 105 L172 110 Z", fill: "#0f172a", opacity: "0.6" }),
                    /* @__PURE__ */ jsx("path", { d: "M280 122 L315 112 L315 142 L280 132 Z", fill: "#60a5fa", opacity: "0.2" }),
                    /* @__PURE__ */ jsxs(
                      motion.g,
                      {
                        animate: { rotate: 360 },
                        transition: { duration: 2.5, repeat: Infinity, ease: "linear" },
                        style: { transformOrigin: "85px 142px" },
                        children: [
                          /* @__PURE__ */ jsx("circle", { cx: "85", cy: "142", r: "14", fill: "#0f172a", stroke: "#475569", strokeWidth: "2" }),
                          /* @__PURE__ */ jsx("circle", { cx: "85", cy: "142", r: "6", fill: "#60a5fa" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      motion.g,
                      {
                        animate: { rotate: 360 },
                        transition: { duration: 2.5, repeat: Infinity, ease: "linear" },
                        style: { transformOrigin: "235px 142px" },
                        children: [
                          /* @__PURE__ */ jsx("circle", { cx: "235", cy: "142", r: "14", fill: "#0f172a", stroke: "#475569", strokeWidth: "2" }),
                          /* @__PURE__ */ jsx("circle", { cx: "235", cy: "142", r: "6", fill: "#60a5fa" })
                        ]
                      }
                    )
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "14px", marginTop: "10px" }, children: [
              /* @__PURE__ */ jsx("div", { style: { fontSize: "11.5px", color: "#94a3b8" }, children: "Thương hiệu xe phổ biến nhất:" }),
              /* @__PURE__ */ jsx("div", { style: { fontSize: "13px", fontWeight: 900, color: "#60a5fa" }, children: "VinFast & Toyota" })
            ] })
          ] })
        }
      )
    ] })
  ] });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$HangXeApp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HangXeApp;
  const {
    title = "H\xE3ng Xe - Ti\u1EC7n \xCDch Giao Th\xF4ng MoMo",
    description = "Tra c\u1EE9u model xe, lo\u1EA1i xe v\xE0 chi ph\xED s\u1EED d\u1EE5ng theo t\u1EEBng h\xE3ng xe tr\xEAn MoMo."
  } = Astro2.props;
  const rawCss = `
.listing-hero { display: none !important; }
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

@font-face{font-family:'MoMoTrustSans';src:url('/assets/fonts/momo-trust/MoMoTrustSans-Light.otf') format('opentype');font-weight:300;font-display:swap}
@font-face{font-family:'MoMoTrustSans';src:url('/assets/fonts/momo-trust/MoMoTrustSans-Regular.otf') format('opentype');font-weight:400;font-display:swap}
@font-face{font-family:'MoMoTrustSans';src:url('/assets/fonts/momo-trust/MoMoTrustSans-Medium.otf') format('opentype');font-weight:500 700;font-display:swap}
@font-face{font-family:'MoMoTrustDisplay';src:url('/assets/fonts/momo-trust/MoMoTrustDisplay.otf') format('opentype');font-weight:400 900;font-display:swap}
:root{
  --bg:#F7F5FA;--white:#FFFFFF;
  --pink-500:#EB2F96;--pink-600:#C22181;--pink-50:#FFF0F8;--pink-100:#FFD6EE;--pink-400:#F472B6;
  --gray-900:#1C171A;--gray-700:#3D3040;--gray-600:#5C5060;--gray-500:#7A6E7F;
  --gray-400:#A09AA5;--gray-300:#C8C3CC;--gray-200:#E5E0E9;--gray-100:#F0EBF4;--gray-50:#F7F3FA;
  --mobase-ink:#0F172A;--mobase-ink-2:#1E293B;--mobase-surface:#F8FAFC;--mobase-surface-2:#EEF2F7;
  --mobase-line:#CBD5E1;--mobase-blue:#2563EB;--mobase-blue-soft:#E0ECFF;--mobase-teal:#0F766E;--mobase-teal-soft:#D9F2EF;
  --amber-500:#D97706;--amber-50:#FFFBEB;
  --green-500:#16A34A;--green-50:#F0FDF4;
  --blue-50:#EFF6FF;--blue-500:#2563EB;
  --red-50:#FEF2F2;--red-500:#DC2626;
  --shadow-s:0 1px 3px rgba(28,23,26,.08),0 1px 2px rgba(28,23,26,.06);
  --shadow-m:0 4px 12px rgba(28,23,26,.1),0 2px 4px rgba(28,23,26,.06);
  --r-sm:4px;--r-md:8px;--r-lg:10px;--r-xl:12px;--content:1040px;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
html{background:var(--bg);scroll-behavior:smooth;overflow-x:clip}
body{font-family:'MoMoTrustSans',-apple-system,BlinkMacSystemFont,sans-serif;background:var(--bg);color:var(--gray-900);min-height:100vh;overflow-x:clip}
a{color:inherit;text-decoration:none}
button{cursor:pointer;font-family:inherit;border:none;background:none}
.wrap{max-width:var(--content);margin:0 auto;padding:0 40px}

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
.nav-momo-logo{display:flex;align-items:center;text-decoration:none;flex-shrink:0}
.nav-momo-icon{width:30px;height:30px;border-radius:8px;overflow:hidden;flex-shrink:0}
.nav-momo-icon img{width:100%;height:100%;display:block}
.nav-logo{display:flex;align-items:center;gap:9px;text-decoration:none}
.logo-icon{width:32px;height:32px;border-radius:9px;overflow:hidden;flex-shrink:0}
.logo-icon img{width:100%;height:100%;display:block}
.logo-text{font-size:14px;font-weight:800;color:var(--gray-900)}
.logo-text em{color:var(--pink-500);font-style:normal}
.nav-links{display:flex;gap:0;margin-left:8px;flex:1}
.nav-hub-brand{display:flex;align-items:center;gap:8px;text-decoration:none;flex-shrink:0}
.nav-hub-icon{width:30px;height:30px;border-radius:8px;overflow:hidden;flex-shrink:0}
.nav-hub-icon img{width:100%;height:100%;display:block}
.nav-hub-text{font-size:13px;font-weight:700;color:var(--gray-700);white-space:nowrap}
.nav-hub-text em{color:var(--pink-500);font-style:normal}
.site-nav:has(.nav-item:hover) .nav-hub-text{color:rgba(255,255,255,.8)}
.site-nav:has(.nav-item:hover) .nav-hub-text em{color:rgba(255,255,255,.6)}
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
.mega-cols{display:flex;gap:48px}
.mega-col{display:flex;flex-direction:column;gap:0;min-width:140px}
.mega-col-label{font-size:11px;font-weight:600;color:rgba(255,255,255,.4);letter-spacing:.04em;margin-bottom:10px}
.mega-item{display:flex;align-items:center;gap:8px;padding:7px 0;font-size:15px;font-weight:500;color:rgba(255,255,255,.85);text-decoration:none;transition:color .12s;white-space:nowrap}
.mega-item:hover{color:#fff}
@media(max-width:768px){
  .nav-inner{height:48px;padding:0 10px;gap:8px}
  .nav-back span{display:none}
  .nav-sep{display:none}
  .logo-text{font-size:12.5px}
  .logo-icon{width:28px;height:28px}
  .nav-links{overflow-x:auto;scrollbar-width:none}
  .nav-links::-webkit-scrollbar{display:none}
  .nav-trigger{height:48px;padding:0 10px;font-size:12px}
  .mega{display:none}
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
.site-nav:has(.nav-item:hover) .nav-search-box{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.16)}
.site-nav:has(.nav-item:hover) .nav-search-inp{color:#fff}
.site-nav:has(.nav-item:hover) .nav-search-inp::placeholder{color:rgba(255,255,255,.38)}
.site-nav:has(.nav-item:hover) .nav-search-box svg{color:rgba(255,255,255,.4)}
.site-nav:has(.nav-item:hover) .nav-search-kbd{background:rgba(255,255,255,.12);color:rgba(255,255,255,.4)}
.site-nav:has(.nav-item:hover) .nav-search-box:focus-within{background:rgba(255,255,255,.12);border-color:rgba(235,47,150,.6)}
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
/* \u2500\u2500 BREADCRUMB \u2500\u2500 */
.breadcrumb-bar{background:var(--white);border-bottom:1px solid var(--gray-200);padding:10px 0;position:sticky;top:56px;z-index:100}
.bc-inner{display:flex;align-items:center;gap:4px;font-size:12.5px}
.bc-link{color:var(--gray-400);font-weight:600;transition:.15s}
.bc-link:hover{color:var(--pink-500)}
.bc-sep{color:var(--gray-300);margin:0 3px}
.bc-current{color:var(--gray-900);font-weight:700}

/* \u2500\u2500 LISTING HERO \u2500\u2500 */
/* \u2500\u2500 VEHICLE TYPE TABS \u2500\u2500 */
.veh-tabs{display:flex;gap:4px;margin-bottom:20px}
.veh-tab{display:inline-flex;align-items:center;gap:6px;padding:7px 18px;border-radius:999px;font-size:13px;font-weight:700;border:1.5px solid var(--gray-200);background:var(--white);color:var(--gray-500);cursor:pointer;text-decoration:none;transition:color .15s,border-color .15s,background .15s}
.veh-tab.active{background:var(--gray-900);color:#fff;border-color:var(--gray-900)}
.veh-tab:not(.active):hover{border-color:var(--gray-400);color:var(--gray-700)}
.listing-hero{padding:48px 0 36px;border-bottom:1px solid var(--gray-200);background:var(--white)}
.listing-eyebrow{font-size:11px;font-weight:800;color:var(--pink-500);text-transform:uppercase;letter-spacing:1.2px;margin-bottom:10px}
.listing-title{font-family:'MoMoTrustDisplay','MoMoTrustSans',sans-serif;font-size:clamp(28px,4vw,42px);font-weight:900;line-height:1.1;letter-spacing:-.5px;color:var(--gray-900);margin-bottom:10px}
.listing-title em{color:var(--pink-500);font-style:normal}
.listing-desc{font-size:15px;color:var(--gray-500);line-height:1.65;max-width:540px}

/* \u2500\u2500 FILTER \u2500\u2500 */
.filter-bar{padding:20px 0 24px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.filter-btn{font-size:13px;font-weight:700;padding:7px 16px;border-radius:999px;border:1.5px solid var(--gray-200);color:var(--gray-600);background:var(--white);transition:.15s;cursor:pointer}
.filter-btn.on{background:var(--pink-500);color:#fff;border-color:var(--pink-500)}
.filter-btn:hover:not(.on){border-color:var(--pink-500);color:var(--pink-500)}
.filter-count{font-size:11px;font-weight:700;opacity:.6;margin-left:4px}

/* \u2500\u2500 BRAND CARDS GRID \u2500\u2500 */
.brand-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-bottom:56px}
.brand-card{
  background:#ffffff;border:1.5px solid var(--gray-200);
  border-radius:16px;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;
  transition:all .22s cubic-bezier(.2,.8,.2,1);position:relative;
  box-shadow:0 2px 8px rgba(28,23,26,.04);text-decoration:none;
}
.brand-card:hover{
  box-shadow:0 12px 32px rgba(28,23,26,.1);border-color:var(--pink-400);
  transform:translateY(-3px);
}
.brand-card-visual{
  position:relative;height:90px;overflow:hidden;
  background:linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  display:flex;align-items:center;padding:0 16px;
}
.brand-card-car-bg{
  position:absolute;bottom:-8px;right:-12px;width:135px;
  opacity:.18;pointer-events:none;transition:transform .25s ease;
}
.brand-card:hover .brand-card-car-bg{transform:scale(1.05) translateX(-4px);opacity:.28}
.brand-card-mark-wrap{position:relative;z-index:2}
.brand-mark{
  border-radius:12px;display:flex;align-items:center;justify-content:center;
  flex-shrink:0;color:#fff;font-weight:900;letter-spacing:-.02em;
  box-shadow:0 4px 12px rgba(0,0,0,.15);text-transform:uppercase;
}
.brand-card-body{padding:14px 16px;flex:1;display:flex;flex-direction:column;justify-content:space-between}
.brand-card-name{font-size:16px;font-weight:900;color:var(--gray-900);margin-bottom:2px;line-height:1.2;letter-spacing:-.01em}
.brand-card-origin{
  font-size:10.5px;color:var(--gray-600);font-weight:700;
  display:inline-block;padding:2px 7px;background:var(--gray-100);
  border-radius:6px;margin-bottom:12px;width:fit-content;
}
.brand-card-bottom{
  display:flex;align-items:center;justify-content:space-between;
  padding-top:10px;border-top:1px solid var(--gray-100);
}
.brand-card-top-model{font-size:11.5px;color:var(--gray-500);font-weight:600}
.brand-card-top-model strong{color:var(--gray-900);font-weight:800}
.brand-card-arrow{
  width:26px;height:26px;border-radius:50%;background:var(--gray-100);
  display:flex;align-items:center;justify-content:center;color:var(--gray-700);
  transition:all .18s ease;flex-shrink:0;
}
.brand-card:hover .brand-card-arrow{
  background:var(--pink-500);color:#ffffff;transform:translateX(2px);
}
@media(max-width:1024px){.brand-grid{grid-template-columns:repeat(3,1fr)}}
@media(max-width:640px){.brand-grid{grid-template-columns:repeat(2,1fr);gap:10px}}


/* \u2500\u2500 CAR TYPE SECTION \u2500\u2500 */
.type-section{margin:32px 0 0}
.type-section-title{font-size:13px;font-weight:800;color:var(--gray-500);text-transform:uppercase;letter-spacing:.8px;margin-bottom:14px}
.type-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin-bottom:36px}
.type-card{background:var(--white);border:1.5px solid var(--gray-200);border-radius:var(--r-lg);padding:14px 10px 11px;display:flex;flex-direction:column;align-items:center;gap:8px;cursor:pointer;transition:.15s;text-align:center}
.type-card:hover{border-color:var(--pink-300);background:var(--pink-50);transform:translateY(-1px);box-shadow:var(--shadow-s)}
.type-card.on{border-color:var(--pink-500);background:var(--pink-50)}
.type-card-svg{width:80px;height:72px;display:flex;align-items:center;justify-content:center}
.type-card-svg svg{width:100%;height:100%}
.type-card-svg img{width:auto;height:100%;max-width:100%;object-fit:contain;mix-blend-mode:multiply}
.type-card-label{font-size:11.5px;font-weight:700;color:var(--gray-700)}
.type-card.on .type-card-label{color:var(--pink-500)}

/* \u2500\u2500 DETAIL HERO \u2500\u2500 */
.detail-hero{background:var(--white);border-bottom:1px solid var(--gray-200);padding:36px 0}
.detail-hero-inner{display:flex;align-items:flex-start;gap:24px}
.detail-brand-mark{border-radius:20px;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#fff;font-weight:900;letter-spacing:-.5px}
.detail-hero-meta{flex:1}
.detail-eyebrow{font-size:11px;font-weight:800;color:var(--pink-500);text-transform:uppercase;letter-spacing:1.2px;margin-bottom:6px}
.detail-title{font-family:'MoMoTrustDisplay','MoMoTrustSans',sans-serif;font-size:clamp(26px,4vw,38px);font-weight:900;line-height:1.1;letter-spacing:-.5px;color:var(--gray-900);margin-bottom:6px}
.detail-tagline{font-size:14px;color:var(--gray-500);margin-bottom:14px;line-height:1.5}
.detail-hero-tags{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px}
.quick-nav{display:flex;gap:8px;flex-wrap:wrap}
.quick-pill{font-size:13px;font-weight:700;padding:7px 16px;border-radius:999px;background:var(--gray-100);color:var(--gray-700);border:none;cursor:pointer;transition:.15s;text-decoration:none;display:inline-block}
.quick-pill:hover{background:var(--pink-50);color:var(--pink-500)}
.type-pills{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 14px}
.type-pill{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:999px;font-size:11.5px;font-weight:800;letter-spacing:.01em;background:var(--gray-100);color:var(--gray-700);border:1px solid var(--gray-200)}
.type-pill strong{color:var(--gray-900)}

/* \u2500\u2500 DETAIL CONTENT \u2500\u2500 */
.detail-body{padding:36px 0}
.d-section{margin-bottom:44px}
.d-section-head{margin-bottom:20px}
.eyebrow{font-size:11px;font-weight:800;color:var(--pink-500);text-transform:uppercase;letter-spacing:1.2px;margin-bottom:6px}
.section-h{font-size:22px;font-weight:800;color:var(--gray-900);line-height:1.2;margin-bottom:5px}
.section-sub{font-size:14px;color:var(--gray-500);line-height:1.6}

/* \u2500\u2500 MODEL GRID \u2500\u2500 */
.model-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;align-items:start}
.bd-cta-banner{display:flex;align-items:center;gap:14px;margin-top:14px;padding:16px 20px;background:linear-gradient(135deg,#FFF0F9 0%,#fff 100%);border:1.5px solid rgba(235,47,150,.2);border-radius:12px;text-decoration:none;transition:all .15s;cursor:pointer}
.bd-cta-banner:hover{border-color:rgba(235,47,150,.4);box-shadow:0 4px 12px rgba(235,47,150,.08);transform:translateY(-1px)}
.bd-cta-icon{color:#EB2F96;flex-shrink:0;display:flex;align-items:center}
.bd-cta-text{flex:1;min-width:0}
.bd-cta-title{font-size:14px;font-weight:800;color:#1C171A;margin-bottom:2px}
.bd-cta-sub{font-size:12px;color:#7A6E7F}
.bd-cta-arrow{color:#EB2F96;flex-shrink:0;display:flex;align-items:center}
.maint-row{display:flex;align-items:center;gap:8px;margin-top:16px;padding:12px 16px;background:#F9F7FB;border:1px solid #E5E2EA;border-radius:10px;flex-wrap:wrap}
.maint-row-label{font-size:12px;color:#6B6670;font-weight:600;white-space:nowrap;margin-right:4px}
.maint-chip{display:inline-flex;align-items:center;gap:5px;background:#fff;border:1px solid #C8C4CC;border-radius:20px;padding:5px 12px;font-size:12px;color:#3D3540;text-decoration:none;white-space:nowrap;transition:all .15s}
.maint-chip:hover{border-color:#EB2F96;color:#EB2F96;background:#FFF0F9}
.model-card{background:var(--white);border:1px solid var(--gray-200);border-radius:12px;overflow:hidden;cursor:pointer;transition:transform 0.25s cubic-bezier(0.2,0.8,0.2,1),border-color 0.2s ease,box-shadow 0.25s cubic-bezier(0.2,0.8,0.2,1);text-align:left;padding:0;box-shadow:0 1px 3px rgba(28,23,26,0.04);text-decoration:none;display:flex;flex-direction:column}
.model-card:hover{border-color:var(--pink-500);transform:translateY(-4px);box-shadow:0 10px 20px -8px rgba(28,23,26,0.12)}
.model-card.sel{border-color:var(--pink-500);background:var(--pink-50)}
.model-img{width:100%;height:96px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.model-img svg{width:82%;max-height:76px;display:block;transition:transform 0.3s cubic-bezier(0.2,0.8,0.2,1)}
.model-card:hover .model-img svg{transform:scale(1.06)}
.model-info{padding:12px 14px;display:flex;flex-direction:column;flex-grow:0}
.model-name{font-size:14px;font-weight:700;color:var(--gray-900);margin-bottom:8px}
.model-meta{display:flex;align-items:center;justify-content:space-between;margin-top:auto}
.model-badge{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;padding:4px 8px;border-radius:9999px;background:var(--gray-100);color:var(--gray-600);transition:background 0.2s,color 0.2s}
.model-card:hover .model-badge{background:var(--pink-50);color:var(--pink-500)}
.model-card.sel .model-badge{background:var(--pink-100);color:var(--pink-600)}
.model-arrow{color:var(--gray-400);display:inline-flex;align-items:center;justify-content:center;transition:transform 0.25s cubic-bezier(0.2,0.8,0.2,1),color 0.2s ease}
.model-card:hover .model-arrow{color:var(--pink-500);transform:translateX(4px)}

/* \u2500\u2500 BRAND CARD DESC \u2500\u2500 */
.brand-card-desc{font-size:11.5px;color:var(--gray-500);line-height:1.55;margin-bottom:10px}

/* \u2500\u2500 LISTING CARD BOTTOM \u2500\u2500 */
.brand-card-bottom{display:flex;align-items:center;justify-content:space-between;margin-top:10px;padding-top:10px;border-top:1px solid var(--gray-100)}
.brand-card-top-model{font-size:11.5px;font-weight:700;color:var(--gray-500)}
.brand-card-top-model strong{color:var(--gray-900);font-weight:800}
.brand-card-type{font-size:12px;font-weight:800;color:var(--gray-700)}
.brand-card-arrow{width:24px;height:24px;border-radius:50%;background:var(--gray-100);display:flex;align-items:center;justify-content:center;color:var(--gray-500);transition:.2s;flex-shrink:0}
.brand-card:hover .brand-card-arrow{background:var(--pink-500);color:#fff}

/* \u2500\u2500 SCORE PILLS \u2500\u2500 */
.score-pills{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px}
.score-pill{display:inline-flex;align-items:center;gap:5px;padding:5px 11px;border-radius:999px;font-size:11.5px;font-weight:700;border:1.5px solid}
.score-pill.good{background:var(--green-50);border-color:rgba(22,163,74,.2);color:#166534}
.score-pill.mid{background:#FFFBEB;border-color:rgba(217,119,6,.2);color:#92400e}
.score-pill.high{background:var(--blue-50);border-color:rgba(37,99,235,.2);color:#1d4ed8}
.score-pill.neutral{background:var(--gray-50);border-color:var(--gray-200);color:var(--gray-600)}
.score-pill-label{opacity:.7}
.score-pill-val{font-weight:900}

/* \u2500\u2500 MODEL FEATURED \u2500\u2500 */
.model-card-featured{grid-column:span 2;border-color:var(--gray-200)}
.model-card-featured .model-img{height:160px}
.model-card-featured .model-name{font-size:16px}
.model-featured-badge{display:inline-flex;align-items:center;gap:4px;font-size:10px;font-weight:800;padding:4px 8px;border-radius:9999px;background:var(--pink-50);color:var(--pink-500);margin-bottom:8px;letter-spacing:.2px;border:1px solid var(--pink-100);width:fit-content}

/* \u2500\u2500 BRAND DESC BAND \u2500\u2500 */
.brand-desc-band{background:var(--white);border-bottom:1px solid var(--gray-100);padding:20px 0 24px}
.brand-desc-inner{display:flex;align-items:flex-start;gap:20px}
.brand-desc-text{font-size:14px;color:var(--gray-600);line-height:1.7;flex:1}

/* \u2500\u2500 SERVICES STRIP \u2500\u2500 */
.services-strip{background:var(--white);border-bottom:1px solid var(--gray-200);padding:24px 0}
.services-label{font-size:11px;font-weight:800;color:var(--gray-400);text-transform:uppercase;letter-spacing:.8px;margin-bottom:14px}
.services-row{display:flex;gap:10px;flex-wrap:wrap}
.svc-card{display:flex;align-items:center;gap:10px;padding:12px 16px;background:var(--gray-50);border:1.5px solid var(--gray-200);border-radius:var(--r-lg);text-decoration:none;transition:.15s;min-width:0}
.svc-card:hover{border-color:var(--pink-300);background:var(--pink-50);box-shadow:var(--shadow-s);transform:translateY(-1px)}
.svc-icon{font-size:20px;flex-shrink:0;line-height:1}
.svc-body{}
.svc-name{font-size:13px;font-weight:700;color:var(--gray-900);white-space:nowrap}
.svc-hint{font-size:11px;color:var(--gray-400);margin-top:1px;white-space:nowrap}

@media(max-width:640px){
  .model-card-featured{grid-column:span 1}
}

/* \u2500\u2500 BH SECTION: 2-col \u2500\u2500 */
.bh-cols{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.bh-card{background:var(--white);border:1.5px solid var(--gray-200);border-radius:var(--r-xl);padding:24px}
.form-lbl{font-size:11px;font-weight:800;color:var(--gray-500);text-transform:uppercase;letter-spacing:.5px;margin-bottom:7px;display:block}
.form-sel{width:100%;padding:11px 14px;border:1.5px solid var(--gray-200);border-radius:var(--r-md);font-family:inherit;font-size:14px;font-weight:600;color:var(--gray-900);background:var(--white);cursor:pointer;appearance:none;-webkit-appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23A09AA5' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center;padding-right:36px;transition:.15s;margin-bottom:10px}
.form-sel:focus{outline:none;border-color:var(--pink-500)}
.estimate-box{background:var(--pink-50);border:1.5px solid var(--pink-100);border-radius:var(--r-md);padding:12px 16px;margin-bottom:14px;display:flex;align-items:center;justify-content:space-between}
.est-label{font-size:12px;color:var(--gray-600)}
.est-value{font-size:20px;font-weight:900;color:var(--pink-500)}
.btn-full{display:flex;align-items:center;justify-content:center;gap:8px;background:var(--pink-500);color:#fff;font-family:inherit;font-size:14px;font-weight:700;padding:13px 24px;border-radius:var(--r-md);border:none;cursor:pointer;transition:.15s;text-decoration:none;width:100%}
.btn-full:hover{background:var(--pink-600)}
.ins-row{display:flex;align-items:flex-start;gap:12px;padding:13px 0;border-bottom:1px solid var(--gray-100)}
.ins-row:last-child{border-bottom:none}
.ins-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0;margin-top:5px}
.ins-body{flex:1;display:flex;align-items:center;gap:12px;min-width:0}
.ins-logo{width:44px;height:44px;border-radius:12px;border:1px solid var(--gray-200);background:#fff;display:grid;place-items:center;flex-shrink:0;overflow:hidden}
.ins-logo img{width:100%;height:100%;object-fit:contain;display:block;padding:6px}
.ins-logo-fallback{font-size:10px;font-weight:900;letter-spacing:.04em;color:var(--gray-700);text-align:center;line-height:1.1}
.ins-meta{min-width:0}
.ins-name{font-size:13px;font-weight:800;color:var(--gray-900);line-height:1.3}
.ins-pill{display:none}
.ins-reason{display:none}
.ins-badge{display:none}

/* \u2500\u2500 OWNERS INSIGHT PANEL \u2500\u2500 */
.insight-panel{border-radius:var(--r-xl);overflow:hidden;margin-bottom:44px;border:1.5px solid var(--mobase-line);box-shadow:0 12px 32px rgba(15,23,42,.06)}
.insight-header{padding:14px 24px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--mobase-line)}
.insight-owners{font-size:12px;font-weight:700;color:var(--mobase-ink);opacity:.6}
.insight-body{display:grid;grid-template-columns:1fr 1fr;gap:0;background:linear-gradient(180deg,var(--mobase-surface) 0%,var(--mobase-surface-2) 100%)}
.insight-main{padding:24px;border-right:1px solid rgba(15,23,42,.08)}
.insight-monthly-label{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;margin-bottom:8px;opacity:.6}
.insight-monthly-val{font-size:40px;font-weight:900;line-height:1;letter-spacing:-1.5px;margin-bottom:4px}
.insight-monthly-unit{font-size:13px;font-weight:600;opacity:.62}
.insight-model-note{font-size:12px;margin-top:10px;opacity:.66}
.insight-vs{display:inline-flex;align-items:center;gap:5px;margin-top:12px;padding:6px 12px;border-radius:999px;font-size:12px;font-weight:800;background:rgba(37,99,235,.08);border:1px solid rgba(37,99,235,.14);color:var(--mobase-blue)}
.insight-vs.positive{background:rgba(37,99,235,.08);border-color:rgba(37,99,235,.16);color:var(--mobase-blue)}
.insight-vs.negative{background:rgba(15,118,110,.08);border-color:rgba(15,118,110,.16);color:var(--mobase-teal)}
.insight-right{padding:24px}
.insight-city-toggle{display:flex;gap:6px;margin-bottom:16px}
.city-btn{font-size:11.5px;font-weight:800;padding:5px 14px;border-radius:999px;border:1.5px solid rgba(15,23,42,.15);cursor:pointer;transition:.15s;background:rgba(255,255,255,.72);font-family:inherit;opacity:.72;color:var(--mobase-ink)}
.city-btn.on{background:#fff;opacity:1;border-color:rgba(37,99,235,.28);color:var(--mobase-blue)}
.insight-city-val{font-size:28px;font-weight:900;letter-spacing:-.8px;margin-bottom:4px;color:var(--mobase-ink)}
.insight-city-sub{font-size:11px;opacity:.6;margin-bottom:18px;color:var(--mobase-ink)}
.insight-breakdown-label{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.6px;opacity:.52;margin-bottom:10px;color:var(--mobase-ink)}
.insight-bars{}
.insight-bar-row{display:flex;align-items:center;gap:8px;margin-bottom:7px}
.insight-bar-name{font-size:11px;font-weight:700;width:110px;flex-shrink:0;opacity:.75;color:var(--mobase-ink)}
.insight-bar-track{flex:1;height:6px;border-radius:3px;background:rgba(15,23,42,.1);overflow:hidden}
.insight-bar-fill{height:100%;border-radius:3px;transition:.4s}
.insight-bar-val{font-size:11px;font-weight:800;width:48px;text-align:right;flex-shrink:0;color:var(--mobase-ink)}

/* \u2500\u2500 COST BREAKDOWN \u2500\u2500 */
.cost-model-bar{display:flex;align-items:center;gap:12px;margin-bottom:16px;flex-wrap:wrap}
.cost-model-sel{padding:9px 14px;border:1.5px solid var(--gray-200);border-radius:var(--r-md);font-family:inherit;font-size:13px;font-weight:700;color:var(--gray-900);background:var(--white);cursor:pointer;appearance:none;-webkit-appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23A09AA5' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center;padding-right:30px}
.cost-tiles{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:12px}
.cost-tile{background:var(--white);border:1.5px solid var(--gray-200);border-radius:var(--r-lg);padding:16px}
.cost-tile-label{font-size:11px;font-weight:700;color:var(--gray-500);margin-bottom:7px;line-height:1.3}
.cost-tile-val{font-size:20px;font-weight:900;color:var(--gray-900);line-height:1}
.cost-tile-unit{font-size:11px;color:var(--gray-400);margin-top:3px}
.cost-tile-note{font-size:10px;color:var(--gray-400);margin-top:4px;line-height:1.4}
.cost-tile.pink .cost-tile-val{color:var(--mobase-blue)}
.cost-tile.free .cost-tile-val{color:var(--green-500)}
.cost-total-bar{background:linear-gradient(135deg,var(--mobase-ink) 0%,var(--mobase-ink-2) 100%);border-radius:var(--r-lg);padding:18px 24px;display:flex;align-items:center;justify-content:space-between;gap:16px;box-shadow:0 12px 28px rgba(15,23,42,.16)}
.cost-total-left{flex:1}
.cost-total-label{font-size:12px;color:rgba(255,255,255,.5);margin-bottom:3px}
.cost-total-model{font-size:14px;font-weight:700;color:rgba(255,255,255,.8)}
.cost-total-val{font-size:28px;font-weight:900;color:#fff;flex-shrink:0}
.cost-total-unit{font-size:13px;color:rgba(255,255,255,.5)}

/* \u2500\u2500 OWNERSHIP CALC \u2500\u2500 */
.oc-wrap{background:var(--white);border:1.5px solid var(--gray-200);border-radius:var(--r-xl);overflow:hidden}
.oc-km-section{padding:18px 24px 14px;border-bottom:1px solid var(--gray-100)}
.oc-km-label{font-size:12px;font-weight:700;color:var(--gray-500);text-transform:uppercase;letter-spacing:.04em;margin-bottom:12px}
.oc-km-row{display:flex;align-items:center;gap:14px}
.oc-km-min,.oc-km-max{font-size:11px;color:var(--gray-400);white-space:nowrap;flex-shrink:0}
.oc-slider{flex:1;-webkit-appearance:none;appearance:none;height:5px;border-radius:3px;background:linear-gradient(to right,var(--pink-500) 0%,var(--pink-500) var(--pct,33%),var(--gray-200) var(--pct,33%),var(--gray-200) 100%);outline:none;cursor:pointer}
.oc-slider::-webkit-slider-thumb{-webkit-appearance:none;width:22px;height:22px;border-radius:50%;background:var(--pink-500);border:3px solid #fff;box-shadow:0 2px 10px rgba(235,47,150,.35);cursor:pointer}
.oc-km-val{font-size:20px;font-weight:900;color:var(--gray-900);white-space:nowrap;min-width:110px;text-align:right}
.oc-km-val span{font-size:13px;font-weight:600;color:var(--gray-400);margin-left:2px}
.oc-rows{}
.oc-row{display:flex;align-items:flex-start;gap:14px;padding:14px 24px;border-bottom:1px solid var(--gray-100);transition:background .12s}
.oc-row:hover{background:var(--gray-50)}
.oc-row-icon{flex-shrink:0;width:28px;display:flex;align-items:center;justify-content:center;color:var(--gray-400);margin-top:2px}
.oc-row-body{flex:1;min-width:0}
.oc-row-label{font-size:13.5px;font-weight:700;color:var(--gray-900);line-height:1.2}
.oc-row-hint{font-size:11.5px;color:var(--gray-400);margin-top:3px;line-height:1.4}
.oc-row-right{display:flex;align-items:center;gap:12px;flex-shrink:0;margin-left:auto}
.oc-row-amount{font-size:15px;font-weight:800;color:var(--gray-900);white-space:nowrap;min-width:110px;text-align:right}
.oc-row-link{font-size:11.5px;font-weight:700;color:var(--pink-500);text-decoration:none;white-space:nowrap;padding:4px 8px;border-radius:6px;border:1px solid rgba(235,47,150,.2);transition:.12s}
.oc-row-link:hover{background:var(--pink-50);border-color:var(--pink-300)}
.oc-parking-row .oc-row-amount{display:flex;align-items:center;gap:5px}
.oc-parking-input{height:34px;padding:0 10px;border:1.5px solid var(--gray-200);border-radius:7px;font-size:13px;font-weight:700;color:var(--gray-900);font-family:inherit;outline:none;width:90px;text-align:right;background:var(--white)}
.oc-parking-input:focus{border-color:var(--pink-400);box-shadow:0 0 0 3px rgba(235,47,150,.08)}
.oc-parking-unit{font-size:11px;color:var(--gray-400);white-space:nowrap}
.oc-total{background:var(--gray-900);padding:20px 24px;display:flex;align-items:center;justify-content:space-between;gap:16px}
.oc-total-left{}
.oc-total-label{font-size:11px;font-weight:700;color:rgba(255,255,255,.45);letter-spacing:.06em;text-transform:uppercase;margin-bottom:3px}
.oc-total-note{font-size:11px;color:rgba(255,255,255,.3)}
.oc-total-right{text-align:right}
.oc-total-val{font-size:28px;font-weight:900;color:#fff;line-height:1}
.oc-total-unit{font-size:12px;color:rgba(255,255,255,.4);margin-top:3px}
.oc-ctas{display:flex;gap:8px;padding:14px 24px;flex-wrap:wrap;border-top:1px solid var(--gray-100)}
.oc-cta{display:inline-flex;align-items:center;gap:5px;padding:7px 12px;border-radius:8px;font-size:12px;font-weight:700;text-decoration:none;border:1.5px solid var(--gray-200);color:var(--gray-700);background:var(--white);transition:.12s;white-space:nowrap}
.oc-cta:hover{border-color:var(--pink-400);color:var(--pink-600);background:var(--pink-50)}
/* \u2500\u2500 OWNER DASHBOARD \u2500\u2500 */
.oc-owner-stack{display:flex;flex-direction:column;gap:14px}
/* E10 banner */
.oc-e10-banner{display:flex;align-items:flex-start;gap:14px;padding:14px 18px;border-radius:var(--r-xl);border-left-width:4px;border-left-style:solid;border-top:1.5px solid;border-right:1.5px solid;border-bottom:1.5px solid}
.oc-e10-badge{display:inline-flex;align-items:center;gap:6px;border-radius:7px;padding:4px 10px;font-size:13px;font-weight:800;white-space:nowrap;flex-shrink:0;margin-top:1px}
.oc-e10-body{flex:1;min-width:0}
.oc-e10-title{font-size:13.5px;font-weight:700;line-height:1.3;margin-bottom:4px}
.oc-e10-detail{font-size:12px;line-height:1.5}
/* Tools grid (\u0111\u1ECBnh gi\xE1 + tra c\u1EE9u) */
.oc-tools-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;align-items:start}
.oc-val-card{background:var(--white);border:1.5px solid var(--gray-200);border-radius:var(--r-xl);padding:20px}
.oc-val-eyebrow{font-size:10px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--gray-400);margin-bottom:8px}
.oc-val-price{font-size:22px;font-weight:900;color:var(--gray-900);line-height:1.1;margin-bottom:4px}
.oc-val-unit{font-size:12px;color:var(--gray-400);font-weight:600;margin-left:2px}
.oc-val-sub{font-size:11.5px;color:var(--gray-400);line-height:1.4;margin-bottom:14px}
.oc-val-cta-btn{display:inline-flex;align-items:center;gap:6px;background:var(--gray-900);color:#fff;text-decoration:none;font-size:12.5px;font-weight:800;padding:9px 14px;border-radius:9px;transition:.12s}
.oc-val-cta-btn:hover{background:var(--pink-500)}
/* Lookup card */
.oc-lookup-card{background:var(--white);border:1.5px solid var(--gray-200);border-radius:var(--r-xl);padding:0;overflow:hidden}
.oc-lookup-head{padding:14px 18px 10px;border-bottom:1px solid var(--gray-100)}
.oc-lookup-head-title{font-size:13px;font-weight:800;color:var(--gray-700)}
.oc-lookup-head-sub{font-size:11px;color:var(--gray-400);margin-top:2px}
.oc-lookup-item{padding:12px 18px}
.oc-lookup-item+.oc-lookup-item{border-top:1px solid var(--gray-100)}
.oc-lookup-item-label{font-size:10px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;color:var(--gray-400);margin-bottom:7px;display:flex;align-items:center;gap:5px}
.oc-lookup-row-inner{display:flex;gap:7px}
.oc-lookup-input{flex:1;height:36px;border:1.5px solid var(--gray-200);border-radius:8px;padding:0 10px;font-size:13px;font-weight:700;color:var(--gray-900);font-family:inherit;outline:none;background:var(--gray-50);letter-spacing:.02em;text-transform:uppercase;min-width:0}
.oc-lookup-input::placeholder{text-transform:none;letter-spacing:0;font-weight:400;color:var(--gray-300)}
.oc-lookup-input:focus{border-color:var(--pink-400);background:var(--white);box-shadow:0 0 0 3px rgba(235,47,150,.08)}
.oc-lookup-go{height:36px;padding:0 13px;background:var(--gray-900);border:none;border-radius:8px;font-size:12px;font-weight:800;color:#fff;cursor:pointer;font-family:inherit;transition:.12s;white-space:nowrap;flex-shrink:0}
.oc-lookup-go:hover{background:var(--pink-500)}
.oc-calc-divider{font-size:10px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--gray-400);display:flex;align-items:center;gap:10px}
.oc-calc-divider::before,.oc-calc-divider::after{content:'';flex:1;height:1px;background:var(--gray-150,#E8E8E8)}
@media(max-width:640px){
  .oc-km-row{flex-wrap:wrap}
  .oc-km-val{min-width:auto;font-size:18px}
  .oc-row{flex-wrap:wrap;gap:6px 10px}
  .oc-row-right{width:100%;justify-content:space-between;margin-left:0;padding-left:42px}
  .oc-row-hint{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}
  .cost-tiles{grid-template-columns:repeat(2,1fr)}
  .oc-tools-grid{grid-template-columns:1fr}
  .oc-e10-banner{flex-direction:column;gap:8px}
}

/* \u2500\u2500 VALUATION SECTION \u2500\u2500 */
.val-panel{display:grid;grid-template-columns:1fr 340px;gap:18px;align-items:stretch}
.val-controls{background:#fff;border:1.5px solid var(--gray-100);border-radius:16px;padding:22px;box-shadow:var(--shadow-s);display:flex;flex-direction:column;gap:18px}
.val-field{display:flex;flex-direction:column;gap:8px}
.val-label{font-size:11px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--gray-400)}
.val-select{height:42px;border:1.5px solid var(--gray-200);border-radius:10px;padding:0 12px;font-size:14px;font-weight:700;color:var(--gray-900);background:#fff;cursor:pointer;outline:none}
.val-select:focus{border-color:var(--pink-500)}
.val-km-pills{display:grid;grid-template-columns:repeat(4,1fr);gap:6px}
.val-pill{height:38px;border-radius:9px;border:1.5px solid var(--gray-200);background:#fff;font-size:12px;font-weight:700;color:var(--gray-600);cursor:pointer;font-family:inherit;transition:all .15s;white-space:nowrap}
.val-pill:hover{border-color:var(--gray-300)}
.val-pill.on{background:var(--gray-900);border-color:var(--gray-900);color:#fff}
.val-result{background:linear-gradient(135deg,#1C171A 0%,#3D3040 100%);border-radius:16px;padding:22px;color:#fff;display:flex;flex-direction:column;justify-content:center}
.val-result-label{font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.45);margin-bottom:8px}
.val-result-price{font-size:32px;font-weight:900;letter-spacing:-.5px;line-height:1}
.val-result-price span{font-size:14px;font-weight:700;color:rgba(255,255,255,.5)}
.val-result-sub{font-size:12.5px;color:rgba(255,255,255,.6);margin-top:8px}
.val-retention{display:flex;align-items:center;gap:6px;margin-top:14px;font-size:11.5px;font-weight:700;color:#4ade80;background:rgba(74,222,128,.1);padding:8px 11px;border-radius:9px;line-height:1.4}
.val-retention svg{flex:none}
.val-chart-wrap{margin-top:16px;background:#fff;border:1.5px solid var(--gray-100);border-radius:16px;padding:20px 22px;box-shadow:var(--shadow-s)}
.val-chart-title{font-size:12px;font-weight:700;color:var(--gray-500);margin-bottom:16px}
.val-chart{display:flex;gap:8px;align-items:flex-end;height:150px}
.val-bar-col{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;gap:5px;cursor:pointer;border-radius:8px;padding:4px 2px;transition:background .15s}
.val-bar-col:hover{background:var(--gray-50)}
.val-bar{width:100%;max-width:44px;background:var(--gray-200);border-radius:6px 6px 0 0;transition:background .15s;min-height:8px}
.val-bar-col.sel .val-bar{background:var(--pink-500)}
.val-bar-col.sel .val-bar-val{color:var(--pink-500)}
.val-bar-val{font-size:10.5px;font-weight:800;color:var(--gray-500)}
.val-bar-year{font-size:10.5px;font-weight:700;color:var(--gray-400)}
.val-cta-row{margin-top:16px;display:grid;grid-template-columns:1fr 1fr;gap:12px}
.val-cta{display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:12px;background:var(--pink-50);border:1.5px solid transparent;cursor:pointer;text-decoration:none;font-family:inherit;text-align:left;transition:border-color .15s}
.val-cta:hover{border-color:rgba(235,47,150,.35)}
.val-cta.ghost{background:var(--gray-50)}
.val-cta.ghost:hover{border-color:var(--gray-300)}
.val-cta-icon{width:38px;height:38px;border-radius:10px;background:#fff;display:flex;align-items:center;justify-content:center;color:var(--pink-500);flex-shrink:0;box-shadow:var(--shadow-s)}
.val-cta.ghost .val-cta-icon{color:var(--gray-600)}
.val-cta-body{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1}
.val-cta-body strong{font-size:13px;font-weight:800;color:var(--gray-900)}
.val-cta-body span{font-size:11.5px;color:var(--gray-500);line-height:1.4}
.val-cta-arrow{color:var(--gray-400);flex-shrink:0}

/* \u2500\u2500 GARAGE SPLIT \u2500\u2500 */
.garage-split{display:grid;grid-template-columns:380px 1fr;height:580px;border-radius:16px;overflow:hidden;border:1.5px solid var(--gray-200);box-shadow:var(--shadow-s)}
/* List pane */
.garage-list-col{display:flex;flex-direction:column;height:100%;overflow:hidden;border-right:1px solid var(--gray-100);background:var(--white)}
.garage-list-header{padding:14px 16px 10px;border-bottom:1px solid var(--gray-100);flex-shrink:0}
.garage-list-title{font-size:14px;font-weight:800;color:var(--gray-900);margin-bottom:8px}
.garage-search-box{position:relative}
.garage-search-input{width:100%;padding:7px 12px 7px 32px;font-size:12px;border:1.5px solid var(--gray-200);border-radius:8px;outline:none;background:var(--gray-50);color:var(--gray-900);transition:border-color .2s;font-family:inherit;box-sizing:border-box}
.garage-search-input:focus{border-color:var(--pink-500);background:var(--white)}
.garage-search-icon{position:absolute;left:10px;top:50%;transform:translateY(-50%);color:var(--gray-400);pointer-events:none}
.garage-filter{display:flex;gap:5px;flex-wrap:wrap;padding:8px 16px;border-bottom:1px solid var(--gray-100);flex-shrink:0}
.garage-filter-btn{font-size:11px;font-weight:700;padding:4px 10px;border-radius:999px;border:1.5px solid var(--gray-200);color:var(--gray-500);background:var(--white);cursor:pointer;transition:.13s;font-family:inherit;white-space:nowrap}
.garage-filter-btn.on{background:var(--gray-900);color:#fff;border-color:var(--gray-900)}
.garage-filter-btn:hover:not(.on){border-color:var(--gray-400);color:var(--gray-900)}
.garage-grid{flex:1;overflow-y:auto;padding:8px;display:flex;flex-direction:column;gap:6px;scrollbar-width:thin;scrollbar-color:var(--gray-200) transparent}
.garage-grid::-webkit-scrollbar{width:4px}.garage-grid::-webkit-scrollbar-track{background:transparent}.garage-grid::-webkit-scrollbar-thumb{background:var(--gray-200);border-radius:4px}
.garage-empty{text-align:center;padding:32px 16px;color:var(--gray-400);font-size:12.5px}
/* m-card style */
.garage-card{display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border-radius:10px;background:var(--white);border:1.5px solid var(--gray-100);cursor:pointer;transition:border-color .13s,box-shadow .13s}
.garage-card:hover{border-color:var(--gray-200);box-shadow:0 2px 8px rgba(0,0,0,.06)}
.garage-card.map-active{border-color:var(--pink-400)!important;box-shadow:0 0 0 2px rgba(235,47,150,.18)!important}
.garage-icon{width:44px;height:44px;border-radius:10px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:20px;background:var(--gray-100)}
.garage-body{flex:1;min-width:0}
.garage-body-top{display:flex;align-items:baseline;gap:6px;margin-bottom:3px}
.garage-name{font-size:12.5px;font-weight:800;color:var(--gray-900);line-height:1.3;flex:1;min-width:0}
.garage-rating{font-size:10.5px;font-weight:800;color:#d97706;flex-shrink:0}
.garage-meta{display:flex;align-items:center;gap:5px;margin-bottom:4px;flex-wrap:wrap}
.garage-city{font-size:10px;font-weight:700;color:var(--gray-500);display:flex;align-items:center;gap:3px}
.garage-address{font-size:10.5px;color:var(--gray-400);line-height:1.4}
.garage-card-footer{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:5px}
.garage-bh-row{display:flex;align-items:center;gap:4px;flex-wrap:wrap}
.garage-bh-label{font-size:9px;font-weight:700;color:var(--gray-400);text-transform:uppercase;letter-spacing:.4px}
.garage-bh-tag{font-size:9.5px;font-weight:700;padding:2px 6px;border-radius:4px;background:var(--gray-100);color:var(--gray-600)}
.garage-book-btn{display:inline-flex;align-items:center;font-size:11px;font-weight:700;color:var(--pink-600);background:var(--pink-50);border:1.5px solid rgba(235,47,150,.2);border-radius:6px;padding:4px 10px;text-decoration:none;white-space:nowrap;flex-shrink:0;transition:.12s;cursor:pointer}
.garage-book-btn:hover{background:var(--pink-500);color:#fff;border-color:var(--pink-500)}
/* Map pane */
.garage-map-col{position:relative;height:100%;overflow:hidden}
.garage-map-el{width:100%;height:100%}
/* Pill markers */
.g-pill{background:#fff;border:2px solid var(--pink-500);border-radius:999px;padding:4px 9px;color:var(--pink-500);font-size:11px;font-weight:800;white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,.14);font-family:"MoMo Trust Sans",-apple-system,sans-serif;cursor:pointer;transition:transform .13s,background .13s,color .13s}
.g-pill:hover{transform:scale(1.06)}
.g-pill.active{background:var(--pink-500);color:#fff}
/* Maplibre popup tweak */
.maplibregl-popup-content{font-family:"MoMo Trust Sans",-apple-system,sans-serif;border-radius:8px;padding:6px 10px;font-size:11px;font-weight:700;box-shadow:0 2px 10px rgba(0,0,0,.12)}
.maplibregl-popup-tip{display:none}
@media(max-width:960px){.garage-split{grid-template-columns:1fr;height:auto}.garage-list-col{height:360px;border-right:none;border-bottom:1px solid var(--gray-100)}.garage-map-col{height:300px}}
/* MAP POPUP */
.gmap-overlay{position:fixed;inset:0;background:rgba(15,23,42,.55);backdrop-filter:blur(6px);z-index:9100;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity .2s;padding:16px}
.gmap-overlay.open{opacity:1;pointer-events:auto}
.gmap-sheet{background:#fff;border-radius:20px;width:100%;max-width:640px;max-height:90vh;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 24px 64px rgba(0,0,0,.22);transform:scale(.96) translateY(10px);transition:transform .22s}
.gmap-overlay.open .gmap-sheet{transform:scale(1) translateY(0)}
.gmap-header{display:flex;align-items:flex-start;gap:12px;padding:16px 18px 12px;border-bottom:1px solid var(--gray-100)}
.gmap-garage-name{font-size:15px;font-weight:800;color:var(--gray-900);margin-bottom:2px}
.gmap-garage-addr{font-size:12px;color:var(--gray-500)}
.gmap-close{margin-left:auto;width:28px;height:28px;display:flex;align-items:center;justify-content:center;border-radius:8px;background:var(--gray-100);border:none;cursor:pointer;flex-shrink:0;color:var(--gray-500)}
.gmap-close:hover{background:var(--gray-200)}
.gmap-body{position:relative;flex:1;min-height:320px}
#gmapEl{width:100%;height:100%;min-height:320px}
.gmap-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:var(--gray-50);font-size:13px;color:var(--gray-400);gap:8px;z-index:1}
.gmap-loading.hidden{display:none}
.gmap-footer{padding:12px 16px;border-top:1px solid var(--gray-100);display:flex;gap:8px;align-items:center}
.gmap-dir-btn{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;background:var(--pink-500);color:#fff;border-radius:10px;font-size:13px;font-weight:700;text-decoration:none;transition:.12s}
.gmap-dir-btn:hover{background:var(--pink-600)}
.gmap-osm-note{font-size:11px;color:var(--gray-400);margin-left:auto}
.garage-name{font-size:14px;font-weight:800;color:var(--gray-900);line-height:1.3;flex:1}
.garage-meta{display:flex;align-items:center;gap:10px;margin-bottom:8px;flex-wrap:wrap}
.garage-city{font-size:11px;font-weight:700;color:var(--gray-500);display:flex;align-items:center;gap:3px}
.garage-address{font-size:11px;color:var(--gray-400)}
.garage-rating{font-size:11.5px;font-weight:800;color:var(--amber-500);display:flex;align-items:center;gap:3px}
.garage-claims{font-size:11px;font-weight:700;color:var(--pink-500);display:flex;align-items:center;gap:4px}
.garage-claims-dot{width:5px;height:5px;border-radius:50%;background:var(--pink-500)}
.garage-note{font-size:12px;color:var(--gray-500);line-height:1.6;margin-bottom:10px}
.garage-bh-row{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
.garage-bh-label{font-size:10px;font-weight:700;color:var(--gray-400);text-transform:uppercase;letter-spacing:.4px}
.garage-bh-tag{font-size:10.5px;font-weight:700;padding:2px 8px;border-radius:5px;background:var(--gray-100);color:var(--gray-700)}

/* \u2500\u2500 BOOKING MODAL \u2500\u2500 */
.bk-overlay{position:fixed;inset:0;background:rgba(15,23,42,.5);backdrop-filter:blur(4px);z-index:9000;display:flex;align-items:flex-end;justify-content:center;opacity:0;pointer-events:none;transition:opacity .22s}
.bk-overlay.open{opacity:1;pointer-events:auto}
.bk-sheet{background:#fff;border-radius:20px 20px 0 0;width:100%;max-width:540px;max-height:92vh;overflow-y:auto;transform:translateY(40px);transition:transform .28s cubic-bezier(.32,1,.32,1);display:flex;flex-direction:column}
.bk-overlay.open .bk-sheet{transform:translateY(0)}
.bk-handle-bar{width:36px;height:4px;border-radius:2px;background:var(--gray-200);margin:12px auto 0;flex-shrink:0}
.bk-header{padding:14px 20px 14px;border-bottom:1px solid var(--gray-100);position:sticky;top:0;background:#fff;z-index:2;flex-shrink:0}
.bk-garage-name{font-size:15px;font-weight:800;color:var(--gray-900);line-height:1.3;padding-right:36px}
.bk-garage-sub{font-size:11.5px;color:var(--gray-400);margin-top:2px;display:flex;align-items:center;gap:4px}
.bk-close{position:absolute;top:14px;right:16px;width:30px;height:30px;border-radius:50%;background:var(--gray-100);border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--gray-500);flex-shrink:0}
.bk-close:hover{background:var(--gray-200)}
.bk-body{padding:20px;display:flex;flex-direction:column;gap:20px}
/* field group */
.bk-group{}
.bk-flabel{font-size:10.5px;font-weight:800;color:var(--gray-400);text-transform:uppercase;letter-spacing:.07em;margin-bottom:10px}
/* service chips */
.bk-svc-chips{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:10px}
.bk-svc-chip{border:1.5px solid var(--gray-200);border-radius:20px;padding:6px 14px;font-size:12.5px;font-weight:700;color:var(--gray-700);cursor:pointer;background:#fff;font-family:inherit;transition:.12s;white-space:nowrap}
.bk-svc-chip:hover{border-color:var(--pink-300);color:var(--pink-600)}
.bk-svc-chip.on{border-color:var(--pink-500);background:var(--pink-50);color:var(--pink-600)}
.bk-textarea{width:100%;box-sizing:border-box;padding:11px 14px;border:1.5px solid var(--gray-200);border-radius:12px;font-size:13.5px;font-weight:500;color:var(--gray-900);font-family:inherit;outline:none;background:#fff;resize:none;line-height:1.55;min-height:70px}
.bk-textarea:focus{border-color:var(--pink-400);box-shadow:0 0 0 3px rgba(235,47,150,.08)}
.bk-textarea::placeholder{color:var(--gray-300)}
/* date chips */
.bk-dates{display:flex;gap:7px;overflow-x:auto;scrollbar-width:none;padding-bottom:2px}
.bk-dates::-webkit-scrollbar{display:none}
.bk-date{flex-shrink:0;border:1.5px solid var(--gray-200);border-radius:12px;padding:9px 13px;cursor:pointer;transition:.12s;text-align:center;background:#fff;font-family:inherit;min-width:52px}
.bk-date:hover{border-color:var(--pink-300)}
.bk-date.on{border-color:var(--pink-500);background:var(--pink-50)}
.bk-date-day{font-size:9.5px;font-weight:800;color:var(--gray-400);text-transform:uppercase;letter-spacing:.03em}
.bk-date-num{font-size:20px;font-weight:900;color:var(--gray-900);line-height:1.1;margin:1px 0}
.bk-date-month{font-size:9.5px;color:var(--gray-400)}
.bk-date.on .bk-date-day,.bk-date.on .bk-date-month{color:var(--pink-400)}
.bk-date.on .bk-date-num{color:var(--pink-600)}
/* time slots */
.bk-slots{display:flex;flex-wrap:wrap;gap:8px}
.bk-slot{border:1.5px solid var(--gray-200);border-radius:9px;padding:8px 16px;font-size:13px;font-weight:700;color:var(--gray-700);cursor:pointer;background:#fff;font-family:inherit;transition:.12s}
.bk-slot:hover:not(:disabled){border-color:var(--pink-300);color:var(--pink-600)}
.bk-slot.on{border-color:var(--pink-500);background:var(--pink-50);color:var(--pink-600)}
.bk-slot:disabled{border-color:var(--gray-100);color:var(--gray-300);cursor:not-allowed;background:var(--gray-50)}
.bk-slot-full-note{font-size:10.5px;color:var(--gray-400);margin-top:6px}
/* inputs */
.bk-fields{display:flex;flex-direction:column;gap:9px}
.bk-input-wrap{position:relative}
.bk-input{height:46px;padding:0 14px;border:1.5px solid var(--gray-200);border-radius:12px;font-size:14px;font-weight:600;color:var(--gray-900);font-family:inherit;outline:none;background:#fff;width:100%;box-sizing:border-box;transition:.15s}
.bk-input:focus{border-color:var(--pink-400);box-shadow:0 0 0 3px rgba(235,47,150,.08)}
.bk-input::placeholder{color:var(--gray-300);font-weight:500}
/* submit */
.bk-footer{padding:0 20px 28px;flex-shrink:0}
.bk-submit{width:100%;height:52px;background:var(--pink-500);color:#fff;border:none;border-radius:14px;font-size:15px;font-weight:800;cursor:pointer;font-family:inherit;transition:.15s;display:flex;align-items:center;justify-content:center;gap:8px}
.bk-submit:hover:not(:disabled){background:var(--pink-600)}
.bk-submit:disabled{background:var(--gray-100);color:var(--gray-300);cursor:not-allowed}
/* success */
.bk-success{text-align:center;padding:40px 24px 48px}
.bk-success-icon{width:60px;height:60px;background:#f0fdf4;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 16px}
.bk-success-title{font-size:19px;font-weight:800;color:var(--gray-900);margin-bottom:6px}
.bk-success-sub{font-size:13px;color:var(--gray-500);line-height:1.65}
.bk-success-summary{margin-top:16px;background:var(--gray-50);border-radius:12px;padding:14px 16px;text-align:left;display:flex;flex-direction:column;gap:7px}
.bk-success-row{display:flex;gap:8px;font-size:12.5px}
.bk-success-row-label{color:var(--gray-400);font-weight:600;white-space:nowrap;min-width:72px}
.bk-success-row-val{color:var(--gray-900);font-weight:700}

/* \u2500\u2500 BRAND NOTES Q&A \u2500\u2500 */
.brand-note{background:var(--white);border:1.5px solid var(--gray-200);border-radius:var(--r-lg);overflow:hidden;margin-bottom:8px}
.brand-note-q{padding:15px 18px;font-size:13.5px;font-weight:700;color:var(--gray-900);display:flex;align-items:flex-start;gap:10px;line-height:1.45}
.brand-note-q::before{content:'Q';width:22px;height:22px;min-width:22px;border-radius:50%;background:var(--pink-500);color:#fff;font-size:11px;font-weight:900;display:flex;align-items:center;justify-content:center;margin-top:1px}
.brand-note-a{padding:0 18px 15px 50px;font-size:13px;color:var(--gray-600);line-height:1.7}

/* \u2500\u2500 SCENARIO CARDS \u2500\u2500 */
.scenario-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.scenario-card{background:var(--white);border:1.5px solid var(--gray-200);border-radius:var(--r-lg);padding:16px;display:block;transition:.15s}
.scenario-card:hover{border-color:var(--pink-500);box-shadow:var(--shadow-s)}
.scenario-icon{width:40px;height:40px;border-radius:var(--r-md);display:flex;align-items:center;justify-content:center;background:var(--pink-50);margin-bottom:10px;font-size:22px}
.scenario-badge{display:inline-block;font-size:10px;font-weight:800;padding:3px 8px;border-radius:6px;margin-bottom:8px}
.badge-green{background:var(--green-50);color:#166534}
.badge-amber{background:var(--amber-50);color:#92400e}
.scenario-name{font-size:14px;font-weight:800;color:var(--gray-900);margin-bottom:4px}
.scenario-short{font-size:12px;color:var(--gray-500);line-height:1.5}
.scenario-link{font-size:12px;font-weight:700;color:var(--pink-500);display:flex;align-items:center;gap:3px;margin-top:10px}

/* \u2500\u2500 CTA BLOCK \u2500\u2500 */
.cta-block{background:var(--gray-900);border-radius:var(--r-xl);padding:32px 36px;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;margin-bottom:48px}
.cta-block-copy{}
.cta-block-title{font-size:20px;font-weight:800;color:#fff;margin-bottom:6px}
.cta-block-desc{font-size:14px;color:rgba(255,255,255,.5);line-height:1.5}
.btn-white{display:inline-flex;align-items:center;gap:8px;background:#fff;color:var(--gray-900);font-family:inherit;font-size:14px;font-weight:800;padding:13px 24px;border-radius:var(--r-md);border:none;cursor:pointer;transition:.15s;white-space:nowrap;text-decoration:none}
.btn-white:hover{background:var(--gray-100)}
/* brand-color CTA variant */
.cta-brand{border-radius:var(--r-xl);padding:28px 32px;display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;margin-bottom:48px}
.cta-brand-btn{display:inline-flex;align-items:center;gap:7px;padding:12px 22px;background:rgba(255,255,255,.18);border:1.5px solid rgba(255,255,255,.3);border-radius:10px;font-size:14px;font-weight:800;color:#fff;text-decoration:none;white-space:nowrap;transition:.15s;backdrop-filter:blur(4px)}
.cta-brand-btn:hover{background:rgba(255,255,255,.28)}
/* \u2500\u2500 COMPARE WIDGET \u2500\u2500 */
.compare-wrap{background:var(--white);border:1.5px solid var(--gray-200);border-radius:10px;overflow:hidden}
.compare-pick-bar{display:flex;align-items:center;gap:14px;padding:18px 20px;border-bottom:1px solid var(--gray-100);flex-wrap:wrap}
.compare-a-pill{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:10px;font-size:13px;font-weight:800;color:#fff}
.compare-vs-label{font-size:12px;font-weight:800;color:var(--gray-400);letter-spacing:.5px;flex-shrink:0}
.compare-sel{flex:1;min-width:160px;max-width:220px;padding:9px 12px;border:1.5px solid var(--gray-200);border-radius:10px;font-size:13px;font-weight:700;color:var(--gray-700);background:var(--white);cursor:pointer;outline:none;font-family:inherit}
.compare-sel:focus{border-color:var(--pink-400)}
.compare-body{padding:0 20px 4px}
.compare-col-heads{display:grid;grid-template-columns:130px 1fr 1fr;padding:12px 0 4px}
.compare-col-head{text-align:center;font-size:11px;font-weight:800;color:var(--gray-400);text-transform:uppercase;letter-spacing:.5px}
.compare-col-head:first-child{text-align:left}
.compare-row{display:grid;grid-template-columns:130px 1fr 1fr;align-items:center;border-top:1px solid var(--gray-100);padding:9px 0}
.compare-row-label{font-size:11.5px;color:var(--gray-500);font-weight:600}
.compare-cell{text-align:center;font-size:13px;font-weight:700;color:var(--gray-700)}
.compare-cell.win{color:#16a34a;font-weight:800}
.compare-placeholder{padding:36px 20px;text-align:center;color:var(--gray-400);font-size:13px}
/* sticky BH bar (model detail) */
.sticky-bh-bar{position:fixed;bottom:0;left:0;right:0;z-index:300;padding:12px 16px;display:flex;align-items:center;justify-content:space-between;gap:12px;box-shadow:0 -4px 20px rgba(0,0,0,.12);backdrop-filter:blur(12px)}
.sticky-bh-copy strong{font-size:14px;font-weight:800;color:#fff;display:block}
.sticky-bh-copy span{font-size:11.5px;color:rgba(255,255,255,.6)}
.sticky-bh-btn{display:inline-flex;align-items:center;gap:6px;padding:10px 20px;background:#fff;border-radius:10px;font-size:13px;font-weight:800;text-decoration:none;white-space:nowrap;flex-shrink:0}
@media(max-width:480px){
  .cta-brand{padding:20px 16px}
  .compare-pick-bar{gap:10px;padding:14px 16px}
  .compare-body{padding:0 14px 4px}
  .compare-col-heads,.compare-row{grid-template-columns:100px 1fr 1fr}
  .sticky-bh-bar{padding:10px 14px}
}

/* \u2500\u2500 MODEL DETAIL PAGE \u2500\u2500 */
.md-hero{position:relative;background:linear-gradient(150deg,var(--mobase-ink) 0%,#111C33 55%,var(--mobase-ink-2) 100%);overflow:hidden;padding:44px 0 36px;color:#fff}
.md-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(560px 300px at 78% 30%,var(--brand,#2563EB) 0%,transparent 68%);opacity:.28;pointer-events:none}
.md-hero-ghost{position:absolute;left:0;right:0;text-align:center;top:18px;font-family:'MoMoTrustDisplay','MoMoTrustSans',sans-serif;font-size:clamp(96px,22vw,240px);font-weight:900;letter-spacing:-6px;color:rgba(255,255,255,.04);-webkit-text-stroke:1.5px rgba(255,255,255,.13);white-space:nowrap;pointer-events:none;user-select:none;line-height:1;overflow:hidden}
.md-hero-inner{position:relative;display:flex;align-items:center;gap:32px}
.md-hero-img{width:320px;flex-shrink:0;position:relative;animation:mdDriveIn .8s cubic-bezier(.2,.8,.2,1) both .1s}
.md-hero-img svg{width:100%;max-height:150px;filter:drop-shadow(0 18px 22px rgba(0,0,0,.35))}
.md-hero-road{height:2px;margin-top:6px;border-radius:2px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.35) 20%,rgba(255,255,255,.35) 80%,transparent)}
@keyframes mdDriveIn{from{opacity:0;transform:translateX(60px)}to{opacity:1;transform:translateX(0)}}
.md-hero-meta{flex:1;animation:mdRise .6s ease-out both}
@keyframes mdRise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
.md-hero-brand{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:700;color:rgba(255,255,255,.65);margin-bottom:10px}
.md-hero-brand-mark{width:24px;height:24px;border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:8px;font-weight:900}
.md-hero-title{font-family:'MoMoTrustDisplay','MoMoTrustSans',sans-serif;font-size:clamp(34px,5vw,52px);font-weight:900;line-height:1.05;letter-spacing:-1px;color:#fff;margin-bottom:8px}
.md-hero-desc{font-size:14px;color:rgba(255,255,255,.66);margin-bottom:14px;line-height:1.55;max-width:440px}
.md-hero-pills{display:flex;gap:8px;flex-wrap:wrap}
.md-pill{display:inline-flex;align-items:center;gap:5px;padding:5px 13px;border-radius:999px;font-size:11.5px;font-weight:700;background:rgba(255,255,255,.1);color:rgba(255,255,255,.88);border:1px solid rgba(255,255,255,.18);backdrop-filter:blur(4px);white-space:nowrap;flex-shrink:0}
.md-hero-stats{position:relative;display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-top:34px;padding-top:18px;border-top:1px solid rgba(255,255,255,.14)}
.md-stat{padding:0 20px;border-left:1px solid rgba(255,255,255,.12)}
.md-stat:first-child{padding-left:0;border-left:none}
.md-stat-label{font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;color:rgba(255,255,255,.45);margin-bottom:5px}
.md-stat-val{font-size:21px;font-weight:900;letter-spacing:-.4px;color:#fff;line-height:1.1}
.md-stat-val span{font-size:12px;font-weight:600;color:rgba(255,255,255,.5)}
/* sticky section subnav */
.md-subnav{position:sticky;top:56px;z-index:150;background:rgba(255,255,255,.92);backdrop-filter:blur(10px);border-bottom:1px solid var(--gray-200)}
.md-subnav-inner{max-width:var(--content);margin:0 auto;padding:0 40px;display:flex;gap:4px;overflow-x:auto;scrollbar-width:none}
.md-subnav-inner::-webkit-scrollbar{display:none}
.md-subnav-link{font-size:12.5px;font-weight:700;color:var(--gray-500);padding:12px 12px 10px;border-bottom:2px solid transparent;white-space:nowrap;transition:.15s}
.md-subnav-link:hover{color:var(--gray-900)}
.md-subnav-link.on{color:var(--mobase-blue);border-bottom-color:var(--mobase-blue)}
/* scroll reveal */
.rv{opacity:0;transform:translateY(18px);transition:opacity .55s ease-out,transform .55s cubic-bezier(.2,.8,.2,1)}
.rv.in{opacity:1;transform:none}
@media(prefers-reduced-motion:reduce){
  .md-hero-img,.md-hero-meta{animation:none}
  .rv{opacity:1;transform:none;transition:none}
}

/* variants grid */
.variant-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px}
.variant-card{background:var(--white);border:1.5px solid var(--gray-200);border-radius:var(--r-lg);padding:18px 20px;transition:border-color .2s,box-shadow .2s,transform .2s;cursor:pointer}
.variant-card:hover{border-color:var(--mobase-blue);box-shadow:var(--shadow-s);transform:translateY(-2px)}
.variant-card:active{transform:translateY(0);transition-duration:.08s}
.variant-card.sel{border-color:var(--mobase-blue);background:var(--mobase-blue-soft)}
.variant-name{font-size:14px;font-weight:800;color:var(--gray-900);margin-bottom:6px}
.variant-price{font-size:20px;font-weight:900;color:var(--mobase-ink);margin-bottom:8px}
.variant-price span{font-size:12px;color:var(--gray-400);font-weight:600}
.variant-specs{display:flex;flex-direction:column;gap:4px}
.variant-spec{font-size:11.5px;color:var(--gray-500);display:flex;align-items:center;gap:6px}
.variant-spec strong{color:var(--gray-700);font-weight:700}

/* price table 2026 */
.price-table{width:100%;border-collapse:separate;border-spacing:0;border:1.5px solid var(--gray-200);border-radius:var(--r-lg);overflow:hidden;background:var(--white)}
.price-table thead th{padding:11px 16px;font-size:11px;font-weight:800;color:var(--gray-400);text-transform:uppercase;letter-spacing:.7px;background:var(--gray-50);border-bottom:1.5px solid var(--gray-200);text-align:left;white-space:nowrap}
.price-table thead th:last-child{text-align:right}
.price-table tbody tr{transition:background .12s}
.price-table tbody tr:hover{background:var(--gray-50)}
.price-table tbody tr:last-child td{border-bottom:none}
.price-table td{padding:13px 16px;border-bottom:1px solid var(--gray-100);vertical-align:middle}
.pt-model{display:flex;flex-direction:column;gap:2px}
.pt-model-name{font-size:14px;font-weight:800;color:var(--gray-900)}
.pt-model-desc{font-size:11.5px;color:var(--gray-400)}
.pt-badge{display:inline-block;padding:2px 8px;border-radius:999px;font-size:10.5px;font-weight:700;border:1px solid}
.pt-badge.xang{background:#FFF7ED;border-color:#FED7AA;color:#C2410C}
.pt-badge.dau{background:#F0FDF4;border-color:#BBF7D0;color:#166534}
.pt-badge.ev{background:#EFF6FF;border-color:#BFDBFE;color:#1D4ED8}
.pt-badge.phev{background:#FAF5FF;border-color:#E9D5FF;color:#7E22CE}
.pt-badge.hybrid{background:#ECFDF5;border-color:#A7F3D0;color:#065F46}
.pt-price{text-align:right;white-space:nowrap}
.pt-price-from{font-size:15px;font-weight:900;color:var(--gray-900)}
.pt-price-to{font-size:11.5px;color:var(--gray-400);font-weight:600;margin-top:1px}
.pt-price-single{font-size:15px;font-weight:900;color:var(--gray-900)}
.pt-action{width:32px;text-align:right}
.pt-action a{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:8px;color:var(--gray-400);transition:background .12s,color .12s;text-decoration:none}
.pt-action a:hover{background:var(--gray-100);color:var(--gray-900)}
.price-note{font-size:11.5px;color:var(--gray-400);margin-top:10px;text-align:right}

/* comparison table */
.compare-table{width:100%;border-collapse:separate;border-spacing:0;border:1.5px solid var(--gray-200);border-radius:var(--r-lg);overflow:hidden;background:var(--white)}
.compare-table th{text-align:left;padding:14px 18px;font-size:11px;font-weight:800;color:var(--gray-400);text-transform:uppercase;letter-spacing:.6px;background:var(--gray-50);border-bottom:1px solid var(--gray-200)}
.compare-table td{padding:12px 18px;font-size:13px;color:var(--gray-700);border-bottom:1px solid var(--gray-100)}
.compare-table tr:last-child td{border-bottom:none}
.compare-table .compare-model{font-weight:800;color:var(--gray-900);font-size:14px}
.compare-table .compare-brand{font-size:11px;color:var(--gray-400);font-weight:600}
.compare-table .compare-val{font-weight:800;color:var(--mobase-ink)}
.compare-table .compare-highlight{background:var(--mobase-blue-soft)}
.compare-bar{height:5px;border-radius:3px;background:var(--gray-200);margin-top:4px;overflow:hidden}
.compare-bar-fill{height:100%;border-radius:3px}

/* schedule table */
.schedule-table{width:100%;border-collapse:separate;border-spacing:0;border:1.5px solid var(--gray-200);border-radius:var(--r-lg);overflow:hidden;background:var(--white)}
.schedule-table th{text-align:left;padding:12px 16px;font-size:11px;font-weight:800;color:var(--gray-400);text-transform:uppercase;letter-spacing:.5px;background:var(--gray-50);border-bottom:1px solid var(--gray-200)}
.schedule-table td{padding:12px 16px;font-size:13px;color:var(--gray-700);border-bottom:1px solid var(--gray-100)}
.schedule-table tr:last-child td{border-bottom:none}
.schedule-table .sch-age{font-weight:800;color:var(--gray-900)}
.schedule-table .sch-interval{font-weight:700;color:var(--mobase-blue)}
.schedule-table .sch-cost{font-weight:700;color:var(--mobase-teal)}
.svc-interval-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px}
.svc-interval-card{background:var(--white);border:1.5px solid var(--gray-200);border-radius:var(--r-lg);padding:14px 16px}
.svc-interval-km{font-size:13px;font-weight:800;color:var(--mobase-blue);margin-bottom:4px}
.svc-interval-task{font-size:12.5px;color:var(--gray-700);line-height:1.4;margin-bottom:6px}
.svc-interval-cost{font-size:11.5px;font-weight:700;color:var(--mobase-teal)}

/* common issues */
/* handbook tabs */
.hb-tabs{display:flex;gap:0;border-bottom:1.5px solid var(--gray-200);margin-bottom:20px}
.hb-tab{font-size:13px;font-weight:700;color:var(--gray-400);padding:10px 16px 9px;border-bottom:2px solid transparent;cursor:pointer;background:none;border-top:none;border-left:none;border-right:none;font-family:inherit;transition:color .15s;margin-bottom:-1.5px;white-space:nowrap}
.hb-tab.active{color:var(--gray-900);border-bottom-color:var(--gray-900)}
.hb-tab:hover:not(.active){color:var(--gray-600)}
.hb-panel{display:none}.hb-panel.active{display:block}
/* issue cards */
.issue-card{background:var(--white);border:1.5px solid var(--gray-200);border-radius:var(--r-lg);padding:16px 18px;margin-bottom:10px;transition:border-color .15s,box-shadow .15s}
.issue-card:hover{border-color:var(--gray-300);box-shadow:var(--shadow-s)}
.issue-card-top{display:flex;align-items:flex-start;gap:10px;margin-bottom:8px}
.issue-title{font-size:13.5px;font-weight:800;color:var(--gray-900);flex:1;line-height:1.35}
.issue-severity{font-size:10px;font-weight:800;padding:3px 8px;border-radius:6px;flex-shrink:0;margin-top:1px}
.issue-severity.high{background:#FEF2F2;color:#B91C1C;border:1px solid #FECACA}
.issue-severity.medium{background:#FFF7ED;color:#C2410C;border:1px solid #FED7AA}
.issue-severity.low{background:#F0FDF4;color:#166534;border:1px solid #BBF7D0}
.issue-meta{display:flex;gap:16px;margin-bottom:8px;flex-wrap:wrap}
.issue-km{font-size:11px;font-weight:700;color:var(--gray-400);display:flex;align-items:center;gap:4px}
.issue-km::before{content:'\u{1F4CD}';font-size:10px}
.issue-desc{font-size:12.5px;color:var(--gray-600);line-height:1.55;margin-bottom:10px}
.issue-footer{display:flex;align-items:center;justify-content:space-between;gap:8px;padding-top:10px;border-top:1px solid var(--gray-100)}
.issue-cost-label{font-size:10.5px;font-weight:600;color:var(--gray-400)}
.issue-cost-val{font-size:13px;font-weight:800;color:var(--gray-900)}
/* parts table */
.parts-table{width:100%;border-collapse:separate;border-spacing:0;border:1.5px solid var(--gray-200);border-radius:var(--r-lg);overflow:hidden;background:var(--white)}
.parts-table thead th{padding:10px 14px;font-size:10.5px;font-weight:800;color:var(--gray-400);text-transform:uppercase;letter-spacing:.5px;background:var(--gray-50);text-align:left;border-bottom:1px solid var(--gray-200)}
.parts-table tbody td{padding:12px 14px;font-size:12.5px;color:var(--gray-700);border-bottom:1px solid var(--gray-100);vertical-align:top}
.parts-table tbody tr:last-child td{border-bottom:none}
.parts-table tbody tr:hover td{background:var(--gray-50)}
.parts-name{font-weight:700;color:var(--gray-900)}
.parts-note{font-size:11px;color:var(--gray-400);margin-top:2px}
.parts-interval{font-size:12px;font-weight:700;color:var(--mobase-blue)}
.parts-cost{font-size:12.5px;font-weight:800;color:var(--gray-900);white-space:nowrap}

/* utilities inline */
.util-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.util-card{background:var(--white);border:1.5px solid var(--gray-200);border-radius:var(--r-lg);padding:20px;transition:border-color .2s,box-shadow .2s,transform .2s}
.util-card:hover{border-color:var(--gray-300);box-shadow:var(--shadow-s);transform:translateY(-2px)}
.util-icon{font-size:22px;margin-bottom:10px;color:var(--pink-500)}
.util-icon svg,.svc-icon svg,.scenario-icon svg{display:block}
.svc-icon{color:var(--pink-500)}
.scenario-icon{color:var(--pink-500)}
.garage-search-icon svg{display:block;color:var(--gray-400)}
.tag svg,.brand-card-top-model svg,.model-featured-badge svg,.maint-row-label svg{vertical-align:-2px}
.util-label{font-size:13px;font-weight:800;color:var(--gray-900);margin-bottom:4px}
.util-hint{font-size:11.5px;color:var(--gray-400);margin-bottom:12px}
.util-input-row{display:flex;gap:8px}
.util-input{flex:1;padding:9px 12px;border:1.5px solid var(--gray-200);border-radius:var(--r-md);font-size:13px;font-family:inherit;color:var(--gray-900);background:var(--gray-50);outline:none;transition:.15s}
.util-input:focus{border-color:var(--mobase-blue);background:var(--white)}
.util-input::placeholder{color:var(--gray-300)}
.util-btn{padding:9px 16px;border:none;border-radius:var(--r-md);font-size:12px;font-weight:800;font-family:inherit;cursor:pointer;white-space:nowrap;transition:.15s}
.util-btn-primary{background:var(--gray-900);color:#fff;transition:background .15s,transform .1s}
.util-btn-primary:hover{background:var(--gray-700)}
.util-btn-primary:active{transform:scale(.95)}
.util-result{margin-top:12px;padding:12px 14px;border-radius:var(--r-md);background:var(--gray-50);border:1px solid var(--gray-100);font-size:12.5px;color:var(--gray-700);line-height:1.5;display:none}
.util-result.show{display:block;animation:slideDown .25s ease-out}
@keyframes slideDown{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}
.util-result-ok{background:#F0FDF4;border-color:#BBF7D0;color:#166534}
.util-result-warn{background:#FFF7ED;border-color:#FED7AA;color:#C2410C}
.util-quick{display:flex;gap:6px;margin-top:10px;flex-wrap:wrap}
.util-quick-btn{font-size:11px;font-weight:700;padding:4px 10px;border-radius:999px;border:1px solid var(--gray-200);color:var(--gray-500);background:var(--white);cursor:pointer;font-family:inherit;transition:.15s}
.util-quick-btn:hover{border-color:var(--gray-400);color:var(--gray-900)}
.util-quick-btn:active{transform:scale(.94);transition-duration:.08s}
.util-fuel-row{display:flex;gap:10px;flex-wrap:wrap}
.util-fuel-item{display:flex;align-items:center;gap:6px;font-size:12.5px;color:var(--gray-700)}
.util-fuel-price{font-weight:800;color:var(--mobase-ink)}
.util-fuel-delta{font-size:11px;font-weight:700}
.util-fuel-delta.down{color:#166534}
.util-fuel-delta.up{color:#B91C1C}

@media(max-width:640px){
  .md-hero{padding:0}
  /* visual zone: ghost text + xe side-by-side, full bleed */
  .md-hero-ghost{position:absolute;left:0;right:0;text-align:center;top:16px;font-size:clamp(56px,16vw,120px);letter-spacing:-2px;transform:none;z-index:0}
  .md-hero-inner{flex-direction:column;gap:0;align-items:stretch}
  /* top visual strip \u2014 car pushed to right, ghost bleeds left */
  .md-hero-img{order:-1;width:58%;flex-shrink:0;margin:0;margin-left:auto;display:flex;justify-content:flex-end;align-items:flex-end;height:160px;padding:0 16px 16px 0;position:relative;z-index:1}
  .md-hero-img svg{width:100%;max-height:130px}
  .md-hero-road{display:none}
  /* dark info panel below visual strip */
  .md-hero-meta{order:0;flex:none;padding:16px 20px 20px;background:none;border-top:1px solid rgba(255,255,255,.12);position:relative;z-index:2}
  .md-hero-pills{flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none}
  .md-hero-title{font-size:clamp(28px,8vw,40px);margin-bottom:4px}
  .md-hero-desc{font-size:13px;margin-bottom:10px}
  .md-hero-stats{grid-template-columns:1fr 1fr;gap:14px 0;padding:18px 20px 20px}
  .md-stat:nth-child(3){padding-left:0;border-left:none}
  .md-stat-label{font-size:9px;letter-spacing:.5px;white-space:nowrap}
  .md-subnav-inner{padding:0 12px}
  .variant-grid{grid-template-columns:1fr}
  .svc-interval-grid{grid-template-columns:1fr}
  .util-grid{grid-template-columns:1fr}
}

/* \u2500\u2500 NEWS \u2500\u2500 */
.news-row{display:flex;gap:14px;overflow-x:auto;scrollbar-width:none;padding-bottom:4px}
.news-row::-webkit-scrollbar{display:none}
.news-card{flex:0 0 280px;background:var(--white);border:1.5px solid var(--gray-200);border-radius:var(--r-lg);padding:16px 18px;display:flex;flex-direction:column;gap:8px;transition:border-color .15s,box-shadow .15s,transform .15s;text-decoration:none}
.news-card:hover{border-color:var(--pink-400);box-shadow:var(--shadow-m);transform:translateY(-2px)}
.news-cat{display:inline-flex;align-items:center;gap:5px;font-size:10.5px;font-weight:800;padding:3px 9px;border-radius:999px;width:fit-content}
.news-cat.launch{background:var(--blue-50);color:var(--blue-500)}
.news-cat.promo{background:var(--green-50);color:var(--green-500)}
.news-cat.tech{background:var(--mobase-teal-soft);color:var(--mobase-teal)}
.news-cat.market{background:var(--amber-50);color:var(--amber-500)}
.news-cat.event{background:var(--pink-50);color:var(--pink-500)}
.news-title{font-size:13.5px;font-weight:700;color:var(--gray-900);line-height:1.45;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.news-meta{display:flex;align-items:center;gap:8px;margin-top:auto;padding-top:8px;border-top:1px solid var(--gray-100)}
.news-source{font-size:11px;font-weight:700;color:var(--gray-400)}
.news-date{font-size:11px;color:var(--gray-300);margin-left:auto}
.news-read{font-size:11px;font-weight:700;color:var(--pink-500);white-space:nowrap}

/* \u2500\u2500 EMPTY \u2500\u2500 */
.empty{padding:60px 20px;text-align:center;color:var(--gray-400)}
.empty p{font-size:15px}
.nav-menu-btn{display:none}
.nav-sidebar,.nav-sidebar-overlay{display:none}

/* \u2500\u2500 RESPONSIVE \u2500\u2500 */
@media(max-width:960px){
  .brand-grid{grid-template-columns:repeat(3,1fr)}
  .model-grid{grid-template-columns:repeat(2,1fr)}
  .bh-cols{grid-template-columns:1fr}
  .cost-tiles{grid-template-columns:repeat(2,1fr)}
  .scenario-grid{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:640px){
  .brand-grid{grid-template-columns:repeat(2,1fr)}
  .listing-hero{padding:28px 0 24px}
  .detail-hero{padding:24px 0}
  .detail-brand-mark{width:60px!important;height:60px!important;font-size:18px!important}
  .scenario-grid{grid-template-columns:1fr}
  .cost-tiles{grid-template-columns:1fr 1fr}
  .cta-block{padding:24px 20px}
  .nav-inner{height:44px;padding:0 8px 0 4px;gap:6px}
  .nav-back span{display:none}
  .nav-sep{display:none}
  .logo-text{display:none}
  .logo-icon{width:28px;height:28px}
  .nav-links{flex:1;min-width:0;overflow-x:auto;scrollbar-width:none;padding:0 4px;margin-left:0}
  .nav-link{font-size:12.5px;padding:6px 10px}
}

/* \u2500\u2500 BRAND STATS & ENRICHED DETAILS \u2500\u2500 */
.brand-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin: 20px 0; }
.bstat-card { background: #fff; border: 1px solid var(--gray-200); border-radius: 12px; padding: 14px 16px; display: flex; align-items: center; gap: 12px; box-shadow: var(--shadow-s); }
.bstat-icon { width: 40px; height: 40px; border-radius: 10px; background: var(--pink-50); color: var(--pink-500); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.bstat-val { font-size: 14.5px; font-weight: 800; color: var(--gray-900); }
.bstat-lbl { font-size: 11px; color: var(--gray-500); margin-top: 2px; }

.maint-sched-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 16px; }
.maint-sched-card { background: #fff; border: 1px solid var(--gray-200); border-radius: 14px; padding: 16px; box-shadow: var(--shadow-s); display: flex; flex-direction: column; justify-content: space-between; }
.maint-km-badge { display: inline-flex; align-items: center; gap: 4px; padding: 4px 10px; border-radius: 20px; font-size: 11.5px; font-weight: 800; background: var(--mobase-blue-soft); color: var(--mobase-blue); margin-bottom: 10px; width: fit-content; }
.maint-stage-title { font-size: 14px; font-weight: 700; color: var(--gray-900); margin-bottom: 6px; }
.maint-stage-desc { font-size: 12px; color: var(--gray-600); line-height: 1.5; margin-bottom: 12px; flex: 1; }
.maint-stage-price { font-size: 13px; font-weight: 800; color: var(--pink-600); padding-top: 8px; border-top: 1px dashed var(--gray-200); }

.parts-table-wrap { overflow-x: auto; border-radius: 12px; border: 1px solid var(--gray-200); background: #fff; margin-top: 16px; }
.parts-table { width: 100%; border-collapse: collapse; font-size: 13px; text-align: left; }
.parts-table th { background: var(--gray-50); padding: 12px 16px; font-size: 11.5px; font-weight: 700; color: var(--gray-500); text-transform: uppercase; border-bottom: 1px solid var(--gray-200); }
.parts-table td { padding: 12px 16px; border-bottom: 1px solid var(--gray-100); color: var(--gray-800); }
.parts-table tr:last-child td { border-bottom: none; }
.part-name { font-weight: 700; color: var(--gray-900); }
.part-interval { font-size: 12px; color: var(--gray-500); }
.part-cost { font-weight: 800; color: var(--mobase-blue); }

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   MOBILE UI \u2014 768px
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
@media(max-width:768px){
  /* \u2500\u2500 NAV \u2500\u2500 */
  .nav-inner{height:48px;padding:0 12px;gap:8px}
  .nav-links{display:none}
  .mega{display:none}
  .nav-sep{display:none}
  .nav-back span{display:none}
  .logo-text{display:block;font-size:12.5px}
  .logo-icon{width:28px;height:28px}
  .nav-hub-text{display:none}
  .nav-search{display:none}
  .nav-search-icon-btn{display:flex;margin-left:auto}
  .nav-menu-btn{display:flex!important;align-items:center;justify-content:center;width:36px;height:36px;border:1.5px solid var(--gray-200);border-radius:9px;background:#fff;color:var(--gray-700);flex-shrink:0;cursor:pointer}

  /* \u2500\u2500 NAV SIDEBAR \u2500\u2500 */
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

  /* \u2500\u2500 WRAP \u2500\u2500 */
  .wrap{padding:0 16px}

  /* \u2500\u2500 VALUATION \u2500\u2500 */
  .val-panel{grid-template-columns:1fr}
  .val-km-pills{grid-template-columns:1fr 1fr}
  .val-result-price{font-size:26px}
  .val-chart{gap:4px;height:120px}
  .val-bar-val{font-size:9px}
  .val-bar-year{font-size:9.5px}
  .val-cta-row{grid-template-columns:1fr}

  /* \u2500\u2500 LISTING HERO \u2500\u2500 */
  .listing-hero{padding:20px 0 16px;border-bottom:none}
  .listing-title{font-size:26px;margin-bottom:8px}
  .listing-desc{font-size:13.5px;line-height:1.6}
  .listing-eyebrow{display:none}

  /* \u2500\u2500 FILTER BAR \u2500\u2500 */
  .filter-bar{padding:12px 0 4px;gap:6px;flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;margin:0 -16px;padding-left:16px;padding-right:16px}
  .filter-bar::-webkit-scrollbar{display:none}
  .filter-btn{flex:none;font-size:12px;padding:6px 14px}

  /* \u2500\u2500 TYPE SECTION - horizontal scroll \u2500\u2500 */
  .type-section{margin:16px 0 0}
  .type-section-title{font-size:11px;margin-bottom:10px}
  .type-grid{display:flex;overflow-x:auto;scrollbar-width:none;gap:8px;grid-template-columns:unset;margin:0 -16px;padding:0 16px 12px}
  .type-grid::-webkit-scrollbar{display:none}
  .type-card{flex:none;width:76px;padding:10px 6px 8px;border-radius:12px}
  .type-card-svg{width:56px;height:52px}
  .type-card-label{font-size:11px}

  /* \u2500\u2500 BRAND GRID \u2500\u2500 */
  .brand-grid{gap:10px;margin-bottom:32px}
  .brand-card{padding:0}
  .brand-card-visual{height:72px}
  .brand-card-car-bg{width:110px}
  .brand-card-body{padding:10px 12px 12px}
  .brand-card-name{font-size:14.5px;margin-bottom:1px}
  .brand-card-origin{font-size:10px;margin-bottom:8px}
  .brand-card-desc{font-size:11px;line-height:1.5;-webkit-line-clamp:2;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}
  .brand-card-bottom{margin-top:8px;padding-top:8px}
  .brand-tags{margin-bottom:8px}
  .tag{font-size:9.5px;padding:2px 7px}

  /* \u2500\u2500 BREADCRUMB \u2500\u2500 */
  .breadcrumb-bar{top:48px;font-size:11.5px;padding:0}
  .breadcrumb-bar .wrap{padding:0}
  .breadcrumb-bar .bc-inner{padding:7px 16px;overflow-x:auto;scrollbar-width:none;flex-wrap:nowrap;white-space:nowrap}
  .breadcrumb-bar .bc-inner::-webkit-scrollbar{display:none}

  /* \u2500\u2500 DETAIL HERO \u2500\u2500 */
  .detail-hero{padding:16px 0 14px;border-bottom:none}
  .detail-hero-inner{flex-direction:row;align-items:center;gap:14px}
  .detail-brand-mark{width:52px!important;height:52px!important;font-size:16px!important;border-radius:14px!important}
  .detail-hero-meta{flex:1;min-width:0}
  .detail-eyebrow{display:none}
  .detail-title{font-size:24px;margin-bottom:3px}
  .detail-tagline{font-size:12.5px;margin-bottom:10px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden}
  .type-pills{margin-bottom:0;gap:5px}
  .type-pill{font-size:10px;padding:4px 9px}

  /* \u2500\u2500 SCORE PILLS - horizontal scroll \u2500\u2500 */
  .score-pills{flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;margin:12px -16px 0;padding:0 16px 12px;gap:7px}
  .score-pills::-webkit-scrollbar{display:none}
  .score-pill{flex:none;white-space:nowrap}

  /* \u2500\u2500 QUICK NAV - horizontal scroll \u2500\u2500 */
  .quick-nav{flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;margin:0 -16px;padding:8px 16px 4px;gap:6px;display:flex}
  .quick-nav::-webkit-scrollbar{display:none}
  .quick-pill{flex:none;font-size:12px;padding:6px 13px}

  /* \u2500\u2500 MODEL GRID - horizontal scroll \u2500\u2500 */
  .model-grid{display:flex;overflow-x:auto;scrollbar-width:none;gap:12px;grid-template-columns:unset;margin:0 -16px;padding:0 16px 12px}
  .model-grid::-webkit-scrollbar{display:none}
  .model-card{flex:none;width:148px}
  .model-card-featured{grid-column:unset;width:180px}
  .model-card-featured .model-img{height:110px}
  .model-img{height:80px}
  .model-name{font-size:13px}

  /* \u2500\u2500 INSIGHT PANEL \u2500\u2500 */
  .insight-body{grid-template-columns:1fr}
  .insight-main{border-right:none;border-bottom:1px solid rgba(15,23,42,.08)}
  .insight-monthly-val{font-size:32px}
  .insight-city-val{font-size:24px}

  /* \u2500\u2500 SERVICES STRIP \u2500\u2500 */
  .services-row{display:grid;grid-template-columns:1fr 1fr;gap:8px}
  .svc-card{padding:10px 12px}
  .svc-name{font-size:12px}
  .svc-hint{font-size:10.5px}
  .svc-icon{font-size:18px}

  /* \u2500\u2500 SECTIONS \u2500\u2500 */
  .d-section{margin-bottom:28px}
  .section-h{font-size:18px}
  .detail-body{padding:16px 0}
  .brand-desc-band{padding:14px 0 16px}

  /* \u2500\u2500 NEWS \u2500\u2500 */
  .news-card{flex:0 0 240px}

  /* \u2500\u2500 OC WIDGET \u2500\u2500 */
  .oc-km-val{font-size:16px;min-width:90px}
  .oc-row{padding:12px 16px}
  .oc-total{padding:16px 16px}


  @media(max-width: 768px) {
    .brand-stats-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
    .maint-sched-grid { grid-template-columns: 1fr; gap: 10px; }
  }
}
</style>
`;
  return renderTemplate`${renderComponent($$result, "VehicleHub", $$VehicleHub, { "title": title, "description": description, "theme": "automotive" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", '<div class="nav-search-overlay" id="mobileSearchOverlay"> <div class="nav-search-box"> <i data-lucide="search" width="14" height="14"></i> <input id="mobileSearchInp" class="nav-search-inp" type="text" placeholder="T\xECm xe c\u1EE7a b\u1EA1n..." autocomplete="off" spellcheck="false"> <button onclick="closeMobileSearch()" style="background:none;border:none;cursor:pointer;color:var(--gray-400);padding:0;display:flex;align-items:center;"> <i data-lucide="x" width="16" height="16"></i> </button> </div> <div class="nav-search-drop" id="mobileSearchDrop"></div> </div>  <div class="nav-sidebar-overlay" id="navOverlay" onclick="closeNavSidebar()"></div> <div class="nav-sidebar" id="navSidebar"> <div class="nav-sidebar-top"> <span class="nav-sidebar-logo">Ti\u1EC7n \xCDch <em>Giao Th\xF4ng</em></span> <button class="nav-sidebar-close" onclick="closeNavSidebar()"> <i data-lucide="x" width="14" height="14"></i> </button> </div> <div class="nav-sidebar-body"> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">Di chuy\u1EC3n</div> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/gia-xang">Gi\xE1 x\u0103ng d\u1EA7u h\xF4m nay</a> <a class="nav-sidebar-link" href="/cay-xang">T\xECm c\xE2y x\u0103ng g\u1EA7n \u0111\xE2y</a> <a class="nav-sidebar-link" href="/tram-sac">Tr\u1EA1m s\u1EA1c xe \u0111i\u1EC7n</a> <a class="nav-sidebar-link" href="/epass/tinh-phi-etc">T\xEDnh ph\xED ETC theo tuy\u1EBFn</a> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">B\u1EA3o hi\u1EC3m</div> <a class="nav-sidebar-link" href="/bao-hiem-o-to">B\u1EA3o hi\u1EC3m TNDS b\u1EAFt bu\u1ED9c</a> <a class="nav-sidebar-link" href="/bao-hiem-o-to">B\u1EA3o hi\u1EC3m th\xE2n v\u1ECF</a> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">Ph\xE1p l\xFD &amp; B\u1EA3o d\u01B0\u1EE1ng</div> <a class="nav-sidebar-link" href="/phat-nguoi">Tra ph\u1EA1t ngu\u1ED9i</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/dang-kiem">Ki\u1EC3m tra \u0111\u0103ng ki\u1EC3m</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/bao-duong">L\u1ECBch b\u1EA3o d\u01B0\u1EE1ng xe</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/cuu-ho">C\u1EE9u h\u1ED9 kh\u1EA9n c\u1EA5p</a> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">Xe c\u1EE7a t\xF4i</div> <a class="nav-sidebar-link" href="/tien-ich-giao-thong#ho-so-xe">H\u1ED3 s\u01A1 ph\u01B0\u01A1ng ti\u1EC7n</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong#chi-phi-xe">Chi ph\xED nu\xF4i xe / n\u0103m</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/hang-xe">Nh\xE3n xe &amp; D\xF2ng xe</a> <a class="nav-sidebar-link" href="/epass">ePass &amp; T\u1EF1 \u0111\u1ED9ng n\u1EA1p</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/bai-do-xe">T\xECm b\xE3i \u0111\u1ED7 xe</a> </div> </div> </div> ', `  <main id="app"></main>  <div id="toast" style="position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:var(--gray-900);color:#fff;padding:10px 20px;border-radius:999px;font-size:13px;font-weight:700;opacity:0;transition:.25s;pointer-events:none;z-index:9999;white-space:nowrap"></div> <script>
function licon(name, size, sw) {
  if (!window.lucide || !window.lucide[name]) return '';
  const children = window.lucide[name].map(([tag, attrs]) => {
    const a = Object.entries(attrs).map(([k,v]) => \`\${k}="\${v}"\`).join(' ');
    return \`<\${tag} \${a}/>\`;
  }).join('');
  return \`<svg xmlns="http://www.w3.org/2000/svg" width="\${size||16}" height="\${size||16}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="\${sw||2}" stroke-linecap="round" stroke-linejoin="round">\${children}</svg>\`;
}
/* \u2500\u2500 DATA \u2500\u2500 */
const BRANDS = {
  toyota:{
    name:'Toyota',origin:'Nh\u1EADt B\u1EA3n',color:'#EB0A1E',tagline:'B\u1EC1n b\u1EC9 \xB7 Ti\u1EBFt ki\u1EC7m x\u0103ng \xB7 Gi\xE1 tr\u1ECB l\xE2u d\xE0i',
    fuels:['x\u0103ng','hybrid'],popular:true,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Nh\u1EADt B\u1EA3n v\u1EDBi \u0111\u1ED9 tin c\u1EADy h\xE0ng \u0111\u1EA7u th\u1ECB tr\u01B0\u1EDDng. Toyota d\u1EABn \u0111\u1EA7u ph\xE2n kh\xFAc SUV v\xE0 MPV t\u1EA1i Vi\u1EC7t Nam nh\u1EDD chi ph\xED b\u1EA3o d\u01B0\u1EE1ng th\u1EA5p v\xE0 gi\xE1 tr\u1ECB gi\u1EEF xe t\u1ED1t nh\u1EA5t ph\xE2n kh\xFAc.',
    models:[
      {name:'Fortuner',type:'suv',bh:12,desc:'SUV 7 ch\u1ED7 ph\u1ED5 bi\u1EBFn nh\u1EA5t',monthly:{bh:1000,fuel:3200,reg:175,maint:400},slug:'fortuner',priceFrom:1026,priceTo:1470,
        variants:[
          {name:'2.4L MT 4x2',price:1026,engine:'2.4L Diesel 150hp',fuel:'D\u1EA7u',seats:7,drive:'FWD'},
          {name:'2.4L AT 4x2',price:1096,engine:'2.4L Diesel 150hp',fuel:'D\u1EA7u',seats:7,drive:'FWD'},
          {name:'2.4L AT 4x4',price:1191,engine:'2.4L Diesel 150hp',fuel:'D\u1EA7u',seats:7,drive:'AWD'},
          {name:'2.8L AT 4x4 Legender',price:1350,engine:'2.8L Diesel 204hp',fuel:'D\u1EA7u',seats:7,drive:'AWD'},
          {name:'2.8L AT 4x4 GR Sport',price:1470,engine:'2.8L Diesel 204hp',fuel:'D\u1EA7u',seats:7,drive:'AWD'},
        ],
        valuation:{base:1155,newRange:'1.026 - 1.470 t\u1EF7',segAvgRetention3y:70,retention:{2026:100,2025:90,2024:84,2023:78,2022:72,2021:66,2020:61,2019:56}},
        commonIssues:[
          {title:'L\u1ECDc d\u1EA7u turbo b\xEDt s\u1EDBm',km:'60.000-100.000 km',severity:'high',desc:'D\u1EA7u turbo diesel kh\xF4ng \u0111\u01B0\u1EE3c thay \u0111\xFAng h\u1EA1n g\xE2y b\xEDt l\u1ECDc, \xE1p su\u1EA5t d\u1EA7u th\u1EA5p, turbo m\xF2n nhanh. B\u1EAFt bu\u1ED9c d\xF9ng d\u1EA7u 5W-30 CI-4 tr\u1EDF l\xEAn v\xE0 thay \u0111\xFAng 7.500km.',cost:'150.000-500.000\u0111/l\u1EA7n'},
          {title:'H\u1ED9p s\u1ED1 AT gi\u1EADt nh\u1EB9 khi n\xF3ng m\xE1y',km:'50.000+ km',severity:'medium',desc:'C\u1EA3m gi\xE1c gi\u1EADt nh\u1EB9 khi sang s\u1ED1 1-2 sau khi xe \u0111\xE3 ch\u1EA1y \u1EA5m. Th\u01B0\u1EDDng do d\u1EA7u h\u1ED9p s\u1ED1 b\u1ECB \xF4 nhi\u1EC5m ho\u1EB7c van \u0111i\u1EC7n t\u1EEB m\xF2n. Thay d\u1EA7u AT \u0111\xFAng h\u1EA1n 40.000km.',cost:'800.000-2.000.000\u0111'},
          {title:'Cao su ch\xE2n m\xE1y n\u1EE9t',km:'80.000+ km',severity:'medium',desc:'Ch\xE2n m\xE1y cao su l\xE3o h\xF3a g\xE2y rung m\xE1y t\u0103ng r\xF5 \u1EDF c\u1EA7u s\u1ED1, \u0111\u1EB7c bi\u1EC7t khi \u0111i\u1EC1u h\xF2a b\u1EADt. Thay c\u1EE5m 3-4 ch\xE2n m\xE1y.',cost:'2.000.000-5.000.000\u0111'},
          {title:'C\u1EA3m bi\u1EBFn nhi\u1EC7t \u0111\u1ED9 kh\xED n\u1EA1p b\xE1o l\u1ED7i',km:'70.000+ km',severity:'low',desc:'\u0110\xE8n check engine do c\u1EA3m bi\u1EBFn IAT h\u1ECFng, kh\xF4ng \u1EA3nh h\u01B0\u1EDFng v\u1EADn h\xE0nh nh\u01B0ng c\u1EA7n x\u1EED l\xFD \u0111\u1EC3 tr\xE1nh m\u1EA5t ch\u1EBF \u0111\u1ED9 limp mode.',cost:'500.000-1.500.000\u0111'},
        ],
        spareParts:[
          {name:'L\u1ECDc d\u1EA7u diesel',interval:'7.500 km',cost:'150-200k',note:'Lu\xF4n thay c\xF9ng d\u1EA7u \u0111\u1ED9ng c\u01A1'},
          {name:'D\u1EA7u h\u1ED9p s\u1ED1 AT',interval:'40.000 km',cost:'800k-1.2tr',note:'Toyota genuine ATF WS'},
          {name:'L\u1ECDc gi\xF3 \u0111\u1ED9ng c\u01A1',interval:'15.000 km',cost:'200-350k',note:'M\xF4i tr\u01B0\u1EDDng b\u1EE5i thay s\u1EDBm h\u01A1n'},
          {name:'M\xE1 phanh tr\u01B0\u1EDBc',interval:'40.000-60.000 km',cost:'1.5-3tr/c\u1EB7p',note:'Ki\u1EC3m tra \u0111\u1ED9 d\xE0y t\u1EA1i m\u1ED7i l\u1EA7n \u0111\u0103ng ki\u1EC3m'},
          {name:'D\xE2y curoa ph\u1EE5',interval:'80.000 km',cost:'400-800k',note:'Thay tr\u01B0\u1EDBc khi \u0111\u1EE9t tr\xE1nh h\u1ECFng m\xE1y'},
          {name:'L\u1ECDc nhi\xEAn li\u1EC7u diesel',interval:'40.000 km',cost:'300-500k',note:'Quan tr\u1ECDng v\u1EDBi xe d\u1EA7u - x\u1EA3 n\u01B0\u1EDBc \u0111\u1ECBnh k\u1EF3'},
        ]},
      {name:'Camry',type:'sedan',bh:14,desc:'Sedan h\u1EA1ng D, c\xF3 hybrid',monthly:{bh:1167,fuel:2800,reg:180,maint:350},slug:'camry',priceFrom:1155,priceTo:1455,
        variants:[
          {name:'2.0G AT',price:1155,engine:'2.0L 170hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.0Q AT',price:1285,engine:'2.0L 170hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.5Q AT HEV',price:1455,engine:'2.5L Hybrid 218hp',fuel:'X\u0103ng/\u0110i\u1EC7n',seats:5,drive:'FWD'},
        ]},
      {name:'Corolla Cross',type:'suv',bh:10,desc:'Crossover compact',monthly:{bh:833,fuel:2400,reg:155,maint:280},slug:'corolla-cross',priceFrom:820,priceTo:940,
        variants:[
          {name:'1.8HEV CVT',price:820,engine:'1.8L Hybrid 122hp',fuel:'X\u0103ng/\u0110i\u1EC7n',seats:5,drive:'FWD'},
          {name:'1.8HEV Premium CVT',price:940,engine:'1.8L Hybrid 122hp',fuel:'X\u0103ng/\u0110i\u1EC7n',seats:5,drive:'FWD'},
        ]},
      {name:'Innova Cross',type:'mpv',bh:11,desc:'MPV 8 ch\u1ED7',monthly:{bh:917,fuel:2800,reg:165,maint:300},slug:'innova-cross',priceFrom:810,priceTo:970,
        variants:[
          {name:'2.0V AT',price:810,engine:'2.0L 172hp',fuel:'X\u0103ng',seats:8,drive:'FWD'},
          {name:'2.0GS AT HEV',price:970,engine:'2.0L Hybrid 186hp',fuel:'X\u0103ng/\u0110i\u1EC7n',seats:7,drive:'FWD'},
        ]},
      {name:'Veloz',type:'mpv',bh:8,desc:'MPV gi\xE1 t\u1ED1t',monthly:{bh:667,fuel:2600,reg:145,maint:250},slug:'veloz',priceFrom:658,priceTo:718,
        variants:[
          {name:'1.5G MT',price:658,engine:'1.5L 106hp',fuel:'X\u0103ng',seats:7,drive:'FWD'},
          {name:'1.5Q CVT',price:718,engine:'1.5L 106hp',fuel:'X\u0103ng',seats:7,drive:'FWD'},
        ]},
      {name:'Raize',type:'suv',bh:7,desc:'SUV \u0111\xF4 th\u1ECB c\u1EE1 nh\u1ECF',monthly:{bh:583,fuel:2000,reg:135,maint:220},slug:'raize',priceFrom:527,priceTo:591,
        variants:[
          {name:'1.0 Turbo AT G',price:527,engine:'1.0L Turbo 98hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.0 Turbo AT Z',price:591,engine:'1.0L Turbo 98hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
        ]},
      {name:'Vios',type:'sedan',bh:6,desc:'Sedan h\u1EA1ng B ti\u1EBFt ki\u1EC7m',monthly:{bh:500,fuel:2000,reg:130,maint:200},slug:'vios',priceFrom:479,priceTo:569,
        variants:[
          {name:'1.5E MT',price:479,engine:'1.5L Dual VVT-i 107hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.5E CVT',price:519,engine:'1.5L Dual VVT-i 107hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.5G CVT',price:569,engine:'1.5L Dual VVT-i 107hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
        ]},
      {name:'Land Cruiser',type:'suv',bh:45,desc:'SUV cao c\u1EA5p flagship',monthly:{bh:3750,fuel:4200,reg:450,maint:1200},slug:'land-cruiser',priceFrom:4060,priceTo:4590,
        variants:[
          {name:'3.3D VX-R AT',price:4060,engine:'3.3L Twin-Turbo Diesel 309hp',fuel:'D\u1EA7u',seats:7,drive:'AWD'},
          {name:'3.3D ZX AT',price:4590,engine:'3.3L Twin-Turbo Diesel 309hp',fuel:'D\u1EA7u',seats:7,drive:'AWD'},
        ]},
    ],
    topInsurers:[
      {name:'Liberty Insurance',color:'#2E4099',badge:'Garage Toyota \u1EE7y quy\u1EC1n',reason:'Th\u1ECFa thu\u1EADn tr\u1EF1c ti\u1EBFp v\u1EDBi Toyota Vietnam. Ph\u1EE5 t\xF9ng genuine \u0111\u01B0\u1EE3c duy\u1EC7t t\u1EF1 \u0111\u1ED9ng. X\u1EED l\xFD 3 ng\xE0y l\xE0m vi\u1EC7c.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Nhanh nh\u1EA5t th\u1ECB tr\u01B0\u1EDDng',reason:'B\u1ED3i th\u01B0\u1EDDng trong 3 ng\xE0y l\xE0m vi\u1EC7c. M\u1EA1ng l\u01B0\u1EDBi garage r\u1ED9ng, ph\u1EE7 t\u1ED1t Toyota \u1EDF t\u1EC9nh th\xE0nh v\xE0 ngo\u1EA1i \xF4.'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'Ph\u1EE7 r\u1ED9ng',reason:'H\u1EC7 th\u1ED1ng garage to\xE0n qu\u1ED1c. Ph\xF9 h\u1EE3p xe Toyota th\u01B0\u1EDDng xuy\xEAn di chuy\u1EC3n li\xEAn t\u1EC9nh.'},
    ],
    notes:[
      {q:'Camry hybrid v\xE0 xe x\u0103ng th\u01B0\u1EDDng b\u1EA3o hi\u1EC3m c\xF3 kh\xE1c nhau kh\xF4ng?',a:'Kh\xF4ng kh\xE1c nhau v\u1EC1 ph\xED v\xE0 quy tr\xECnh. Motor \u0111i\u1EC7n h\u01B0 h\u1ECFng do tai n\u1EA1n \u0111\u01B0\u1EE3c b\u1ED3i th\u01B0\u1EDDng nh\u01B0 ph\u1EE5 t\xF9ng th\xF4ng th\u01B0\u1EDDng. Gi\xE1 tr\u1ECB b\u1ED3i th\u01B0\u1EDDng total loss cao h\u01A1n v\xEC gi\xE1 xe hybrid cao h\u01A1n xe x\u0103ng c\xF9ng model.'},
      {q:'Toyota CKD (l\u1EAFp r\xE1p t\u1EA1i VN) vs CBU (nh\u1EADp kh\u1EA9u) \u1EA3nh h\u01B0\u1EDFng BH th\u1EBF n\xE0o?',a:'Ph\xED BH kh\xF4ng b\u1ECB \u1EA3nh h\u01B0\u1EDFng b\u1EDFi ngu\u1ED3n g\u1ED1c. Xe CBU c\xF3 gi\xE1 tr\u1ECB th\u1EF1c t\u1EBF cao h\u01A1n CKD c\xF9ng d\xF2ng \u2014 n\xEAn khi x\u1EA3y ra total loss, m\u1EE9c b\u1ED3i th\u01B0\u1EDDng nh\u1EADn \u0111\u01B0\u1EE3c cao h\u01A1n.'},
      {q:'N\xEAn ch\u1ECDn NB n\xE0o \u0111\u1EC3 s\u1EEDa t\u1EA1i garage Toyota ch\xEDnh h\xE3ng sau tai n\u1EA1n?',a:'Liberty Insurance c\xF3 th\u1ECFa thu\u1EADn authorized repair tr\u1EF1c ti\u1EBFp v\u1EDBi Toyota Vietnam. Xe \u0111\u01B0\u1EE3c \u0111\u01B0a th\u1EB3ng v\xE0o Toyota \u1EE7y quy\u1EC1n, ph\u1EE5 t\xF9ng genuine \u0111\u01B0\u1EE3c duy\u1EC7t t\u1EF1 \u0111\u1ED9ng, kh\xF4ng c\u1EA7n ch\u1EDD gi\xE1m \u0111\u1ECBnh vi\xEAn ri\xEAng.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2605\u2605',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'R\u1EBB nh\u1EA5t',level:'good'},
      {label:'Ph\u1EE5 t\xF9ng',val:'D\u1EC5 t\xECm',level:'good'},
      {label:'Garage',val:'To\xE0n qu\u1ED1c',level:'good'},
    ],
    insight:{owners:6840,topModel:'Fortuner',monthly:4780,vs_estimate:+0.5,hcm:5120,hn:4290,breakdown:{bh:1000,fuel:3200,road:180,maint:400}},
    garages:[
      {name:'Toyota L\xFD Th\u01B0\u1EDDng Ki\u1EC7t',type:'official',city:'HCM',address:'555 L\xFD Th\u01B0\u1EDDng Ki\u1EC7t, Q.10',bh:['Liberty','PVI'],claims:840,rating:4.8,note:'\u0110\u1EA1i l\xFD Toyota ch\xEDnh h\xE3ng. Ph\u1EE5 t\xF9ng genuine, k\u1EF9 thu\u1EADt vi\xEAn \u0111\u01B0\u1EE3c \u0111\xE0o t\u1EA1o t\u1EA1i Nh\u1EADt.'},
      {name:'Toyota G\xF2 V\u1EA5p',type:'official',city:'HCM',address:'Quang Trung, G\xF2 V\u1EA5p',bh:['Liberty'],claims:610,rating:4.7,note:'L\u1EDBn nh\u1EA5t khu v\u1EF1c G\xF2 V\u1EA5p. D\u1ECBch v\u1EE5 nhanh, c\xF3 xe thay th\u1EBF khi s\u1EEDa ch\u1EEFa.'},
      {name:'Toyota Ho\xE0ng Mai',type:'official',city:'HN',address:'272 L\u0129nh Nam, Ho\xE0ng Mai',bh:['Liberty','B\u1EA3o Vi\u1EC7t'],claims:720,rating:4.7,note:'\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng l\u1EDBn nh\u1EA5t H\xE0 N\u1ED9i. Ph\u1EE7 t\u1ED1t khu v\u1EF1c ph\xEDa Nam th\u1EE7 \u0111\xF4.'},
      {name:'Garage Minh Trung Auto',type:'authorized',city:'HCM',address:'B\xECnh Th\u1EA1nh, HCM',bh:['PVI','B\u1EA3o Vi\u1EC7t'],claims:390,rating:4.6,note:'Garage \u1EE7y quy\u1EC1n BH. Chuy\xEAn Toyota 10+ n\u0103m, ph\u1EE5 t\xF9ng genuine, gi\xE1 th\u1EA5p h\u01A1n \u0111\u1EA1i l\xFD 15-20%.'},
      {name:'Auto Care Toyota C\u1EA7u Gi\u1EA5y',type:'authorized',city:'HN',address:'C\u1EA7u Gi\u1EA5y, H\xE0 N\u1ED9i',bh:['PVI'],claims:280,rating:4.5,note:'Garage uy t\xEDn c\u1ED9ng \u0111\u1ED3ng. \u0110\u01B0\u1EE3c recommend nhi\u1EC1u nh\u1EA5t tr\xEAn c\xE1c group ch\u1EE7 xe Toyota HN.'},
    ],
    scenarios:['collision','thuykick','parked'],
  },
  honda:{
    name:'Honda',origin:'Nh\u1EADt B\u1EA3n',color:'#CC0000',tagline:'Ni\u1EC1m vui v\u1EADn h\xE0nh \xB7 Tin c\u1EADy \xB7 Ti\u1EBFt ki\u1EC7m',
    fuels:['x\u0103ng'],popular:true,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Nh\u1EADt B\u1EA3n n\u1ED5i ti\u1EBFng v\u1EC1 \u0111\u1ED9ng c\u01A1 ti\u1EBFt ki\u1EC7m v\xE0 \u0111\u1ED9 b\u1EC1n cao. Honda City v\xE0 CR-V l\xE0 hai m\u1EABu b\xE1n ch\u1EA1y nh\u1EA5t ph\xE2n kh\xFAc, ph\xF9 h\u1EE3p ng\u01B0\u1EDDi d\xF9ng \u0111\xF4 th\u1ECB c\u1EA7n xe \u0111\xE1ng tin c\u1EADy h\u1EB1ng ng\xE0y.',
    models:[
      {name:'CR-V',type:'suv',bh:11,desc:'SUV 5 ch\u1ED7 ph\u1ED5 bi\u1EBFn',monthly:{bh:917,fuel:2600,reg:160,maint:280},slug:'cr-v',priceFrom:1059,priceTo:1219,
        variants:[
          {name:'L Turbo CVT',price:1059,engine:'1.5L Turbo 190hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'e:HEV RS CVT',price:1219,engine:'2.0L Hybrid 184hp',fuel:'X\u0103ng/\u0110i\u1EC7n',seats:5,drive:'AWD'},
        ],
        commonIssues:[
          {title:'R\xF2 d\u1EA7u \u0111\u1ED9ng c\u01A1 1.5T Turbo',km:'60.000+ km',severity:'high',desc:'Gio\u0103ng n\u1EAFp m\xE1y v\xE0 \u0111\u01B0\u1EDDng \u1ED1ng d\u1EA7u turbo 1.5L c\xF3 xu h\u01B0\u1EDBng r\xF2 r\u1EC9 sau 60.000km. Honda \u0111\xE3 c\u1EA3i ti\u1EBFn t\u1EEB \u0111\u1EDDi 2022 nh\u01B0ng xe c\u0169 c\u1EA7n ki\u1EC3m tra \u0111\u1ECBnh k\u1EF3.',cost:'3-8tr t\xF9y m\u1EE9c \u0111\u1ED9'},
          {title:'CVT rung khi kh\u1EDFi \u0111\u1ED9ng l\u1EA1nh',km:'30.000-60.000 km',severity:'medium',desc:'H\u1ED9p s\u1ED1 CVT rung nh\u1EB9 trong 1-2 ph\xFAt \u0111\u1EA7u bu\u1ED5i s\xE1ng. \u0110\u1EB7c t\xEDnh c\u1EE7a CVT Honda - c\u1EA7n h\xE2m m\xE1y 30 gi\xE2y tr\u01B0\u1EDBc khi \u0111i. Thay d\u1EA7u CVT \u0111\xFAng h\u1EA1n.',cost:'600k-1.2tr (thay d\u1EA7u CVT)'},
          {title:'L\u1ED7i c\u1EA3m bi\u1EBFn l\xF9i (2019-2021)',km:'20.000+ km',severity:'low',desc:'Camera l\xF9i b\u1ECB nhi\u1EC5u ho\u1EB7c \u0111\u01B0\u1EDDng k\u1EBB h\u01B0\u1EDBng d\u1EABn kh\xF4ng ch\xEDnh x\xE1c. Honda \u0111\xE3 ph\xE1t h\xE0nh update firmware - y\xEAu c\u1EA7u \u0111\u1EA1i l\xFD update mi\u1EC5n ph\xED.',cost:'0 (update firmware)'},
          {title:'Ti\u1EBFng k\xEAu gi\u1EA3m x\xF3c sau',km:'50.000+ km',severity:'medium',desc:'L\xF2 xo gi\u1EA3m x\xF3c sau CR-V hay ph\xE1t sinh ti\u1EBFng c\u1ED9c khi qua \u0111\u01B0\u1EDDng x\u1EA5u. Ki\u1EC3m tra v\xE0 b\u1ED5 sung m\u1EE1 b\xF4i tr\u01A1n ch\xE2n l\xF2 xo ho\u1EB7c thay bushings.',cost:'1-4tr/c\u1EB7p'},
        ],
        spareParts:[
          {name:'D\u1EA7u \u0111\u1ED9ng c\u01A1 0W-20 Turbo',interval:'5.000 km',cost:'500-900k',note:'Xe turbo n\xEAn thay s\u1EDBm h\u01A1n xe th\u01B0\u1EDDng - 5.000km'},
          {name:'D\u1EA7u h\u1ED9p s\u1ED1 CVT',interval:'30.000 km',cost:'600k-1.2tr',note:'Honda HCF-2 ho\u1EB7c t\u01B0\u01A1ng \u0111\u01B0\u01A1ng - kh\xF4ng d\xF9ng CVT th\u01B0\u1EDDng'},
          {name:'L\u1ECDc gi\xF3 cabin',interval:'15.000 km',cost:'150-300k',note:'Honda CR-V l\u1ECDc cabin t\u01B0\u01A1ng \u0111\u1ED1i d\u1EC5 thay t\u1EF1 l\xE0m'},
          {name:'M\xE1 phanh tr\u01B0\u1EDBc',interval:'40.000-50.000 km',cost:'1.5-3tr/c\u1EB7p',note:''},
          {name:'Bugi iridium 1.5T',interval:'60.000 km',cost:'600k-1tr/b\u1ED9',note:'Xe turbo \u0111\u1ED1t bugi nhanh h\u01A1n xe th\u01B0\u1EDDng'},
          {name:'L\u1ECDc gi\xF3 \u0111\u1ED9ng c\u01A1',interval:'15.000 km',cost:'200-400k',note:''},
        ]},
      {name:'City',type:'sedan',bh:7,desc:'Sedan h\u1EA1ng B',monthly:{bh:583,fuel:2000,reg:130,maint:200},slug:'city',priceFrom:499,priceTo:599,
        variants:[
          {name:'1.5 MT',price:499,engine:'1.5L DOHC 119hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.5 CVT',price:539,engine:'1.5L DOHC 119hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.5 RS CVT',price:599,engine:'1.5L DOHC 119hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
        ]},
      {name:'Civic',type:'sedan',bh:9,desc:'Sedan sporty h\u1EA1ng C',monthly:{bh:750,fuel:2400,reg:150,maint:250},slug:'civic',priceFrom:769,priceTo:929,
        variants:[
          {name:'1.5 Turbo CVT G',price:769,engine:'1.5L Turbo 177hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.5 Turbo CVT RS',price:869,engine:'1.5L Turbo 177hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'e:HEV RS CVT',price:929,engine:'2.0L Hybrid 184hp',fuel:'X\u0103ng/\u0110i\u1EC7n',seats:5,drive:'FWD'},
        ],
        commonIssues:[
          {title:'Ti\xEAu hao d\u1EA7u nh\u1EDBt cao',km:'10.000-30.000 km',severity:'medium',desc:'\u0110\u1ED9ng c\u01A1 1.5T Civic th\u1EBF h\u1EC7 11 (2021+) c\xF3 th\u1EC3 ti\xEAu hao 0.5-1L d\u1EA7u m\u1ED7i 5.000km. Honda th\u1EEBa nh\u1EADn v\xE0 \u0111\xE3 c\u1EA3i ti\u1EBFn piston rings t\u1EEB 2022. Ki\u1EC3m tra m\u1EE9c d\u1EA7u m\u1ED7i 1.000km.',cost:'B\u1ED5 sung d\u1EA7u \u0111\u1ECBnh k\u1EF3 ~200-400k/l\u1EA7n'},
          {title:'L\u1ED7i c\u1EA3m bi\u1EBFn Honda SENSING',km:'B\u1EA5t k\u1EF3',severity:'low',desc:'Camera ADAS tr\u01B0\u1EDBc k\xEDnh l\xE1i nh\u1EA1y c\u1EA3m v\u1EDBi \xF4 nhi\u1EC5m m\u1EB7t k\xEDnh. H\u1EC7 th\u1ED1ng c\xF3 th\u1EC3 t\u1EAFt \u0111\u1ED9t ng\u1ED9t khi k\xEDnh b\u1EA9n ho\u1EB7c nhi\u1EC7t \u0111\u1ED9 cao. V\u1EC7 sinh k\xEDnh v\xE0 khu v\u1EF1c camera.',cost:'0 (t\u1EF1 v\u1EC7 sinh)'},
          {title:'Ti\u1EBFng rung t\u1EEB h\u1ED9p s\u1ED1 CVT \u1EDF 60-80km/h',km:'20.000-50.000 km',severity:'medium',desc:'Ti\u1EBFng vo ve ho\u1EB7c rung nh\u1EB9 \u1EDF d\u1EA3i t\u1ED1c 60-80km/h do \u0111\u1EB7c t\xEDnh CVT. Thay d\u1EA7u CVT v\xE0 ki\u1EC3m tra mounting h\u1ED9p s\u1ED1.',cost:'600k-2tr'},
          {title:'\u0110\xE8n h\u1EADu \u0111\u1ECDng n\u01B0\u1EDBc',km:'B\u1EA5t k\u1EF3',severity:'low',desc:'C\u1EE5m \u0111\xE8n h\u1EADu LED Civic th\u1EBF h\u1EC7 11 hay \u0111\u1ECDng s\u01B0\u01A1ng khi nhi\u1EC7t \u0111\u1ED9 ch\xEAnh l\u1EC7ch cao-th\u1EA5p. Honda c\xF3 TSB v\u1EC1 v\u1EA5n \u0111\u1EC1 n\xE0y - y\xEAu c\u1EA7u \u0111\u1EA1i l\xFD ki\u1EC3m tra v\xE0 thay th\u1EBF mi\u1EC5n ph\xED n\u1EBFu c\xF2n b\u1EA3o h\xE0nh.',cost:'0 (b\u1EA3o h\xE0nh) / 3-5tr (h\u1EBFt b\u1EA3o h\xE0nh)'},
        ],
        spareParts:[
          {name:'D\u1EA7u \u0111\u1ED9ng c\u01A1 0W-20 Full Syn',interval:'5.000 km',cost:'500-900k',note:'Xe turbo - thay s\u1EDBm h\u01A1n xe th\u01B0\u1EDDng'},
          {name:'D\u1EA7u CVT HCF-2',interval:'30.000 km',cost:'600k-1tr',note:'Ch\u1EC9 d\xF9ng Honda genuine - kh\xF4ng pha lo\u1EA1i kh\xE1c'},
          {name:'Bugi iridium NGK',interval:'60.000 km',cost:'500-900k/b\u1ED9',note:'4 bugi cho 1.5T'},
          {name:'L\u1ECDc gi\xF3 cabin',interval:'15.000 km',cost:'150-300k',note:''},
          {name:'M\xE1 phanh tr\u01B0\u1EDBc',interval:'35.000-45.000 km',cost:'1.2-2.5tr/c\u1EB7p',note:'Civic nh\u1EB9 - phanh \xEDt m\xF2n h\u01A1n SUV'},
          {name:'L\u1ECDc d\u1EA7u',interval:'5.000 km',cost:'100-200k',note:'Thay c\xF9ng d\u1EA7u \u0111\u1ED9ng c\u01A1'},
        ]},
      {name:'HR-V',type:'suv',bh:9,desc:'Crossover compact',monthly:{bh:750,fuel:2200,reg:148,maint:240},slug:'hr-v',priceFrom:699,priceTo:829,
        variants:[
          {name:'1.5 CVT L',price:699,engine:'1.5L DOHC 119hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'e:HEV RS CVT',price:829,engine:'1.5L Hybrid 131hp',fuel:'X\u0103ng/\u0110i\u1EC7n',seats:5,drive:'FWD'},
        ]},
      {name:'BR-V',type:'suv',bh:8,desc:'SUV 7 ch\u1ED7 t\u1EA7m trung',monthly:{bh:667,fuel:2400,reg:145,maint:230},slug:'br-v',priceFrom:661,priceTo:761,
        variants:[
          {name:'1.5 MT G',price:661,engine:'1.5L DOHC 119hp',fuel:'X\u0103ng',seats:7,drive:'FWD'},
          {name:'1.5 CVT L',price:761,engine:'1.5L DOHC 119hp',fuel:'X\u0103ng',seats:7,drive:'FWD'},
        ]},
      {name:'Accord',type:'sedan',bh:14,desc:'Sedan h\u1EA1ng D',monthly:{bh:1167,fuel:2800,reg:180,maint:350},slug:'accord',priceFrom:1319,priceTo:1589,
        variants:[
          {name:'1.5 Turbo CVT',price:1319,engine:'1.5L Turbo 192hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'e:HEV CVT',price:1589,engine:'2.0L Hybrid 212hp',fuel:'X\u0103ng/\u0110i\u1EC7n',seats:5,drive:'FWD'},
        ]},
      {name:'Brio',type:'sedan',bh:5,desc:'Hatchback \u0111\xF4 th\u1ECB',monthly:{bh:417,fuel:1800,reg:120,maint:170},slug:'brio',priceFrom:418,priceTo:458,
        variants:[
          {name:'1.2 MT',price:418,engine:'1.2L SOHC 90hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.2 CVT',price:458,engine:'1.2L SOHC 90hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
        ]},
    ],
    topInsurers:[
      {name:'Liberty Insurance',color:'#2E4099',badge:'Garage Honda \u1EE7y quy\u1EC1n',reason:'Th\u1ECFa thu\u1EADn garage \u1EE7y quy\u1EC1n Honda Vietnam. Ph\u1EE5 t\xF9ng genuine \u0111\u01B0\u1EE3c duy\u1EC7t, x\u1EED l\xFD 3-4 ng\xE0y.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Nhanh nh\u1EA5t',reason:'X\u1EED l\xFD b\u1ED3i th\u01B0\u1EDDng trong 3 ng\xE0y, m\u1EA1ng l\u01B0\u1EDBi garage r\u1ED9ng t\u1ED1t cho Honda \u1EDF TP l\u1EDBn.'},
      {name:'PJICO',color:'#CC0000',badge:'T\u1ED1t cho t\u1EC9nh th\xE0nh',reason:'Ph\u1EE7 r\u1ED9ng \u1EDF t\u1EC9nh th\xE0nh, ph\xF9 h\u1EE3p Honda City v\xE0 Brio \u1EDF v\xF9ng ven v\xE0 ngo\u1EA1i t\u1EC9nh.'},
    ],
    notes:[
      {q:'Honda CR-V hybrid v\xE0 x\u0103ng b\u1EA3o hi\u1EC3m c\xF3 kh\xE1c nhau kh\xF4ng?',a:'C\xF9ng m\u1EE9c ph\xED. Motor \u0111i\u1EC7n c\u1EE7a hybrid \u0111\u01B0\u1EE3c BH th\xE2n v\u1ECF b\u1EA3o v\u1EC7 khi tai n\u1EA1n. CR-V hybrid tr\u1ECB gi\xE1 cao h\u01A1n n\xEAn kh\u1EA5u hao ch\u1EADm h\u01A1n, b\u1ED3i th\u01B0\u1EDDng total loss nh\u1EADn nhi\u1EC1u h\u01A1n trong 5 n\u0103m \u0111\u1EA7u.'},
      {q:'N\xEAn s\u1EEDa xe Honda t\u1EA1i \u0111\u1EA1i l\xFD ch\xEDnh h\xE3ng hay garage ngo\xE0i \u0111\u1EC3 BH thanh to\xE1n \u0111\u01B0\u1EE3c?',a:'BH th\xE2n v\u1ECF thanh to\xE1n c\u1EA3 hai. S\u1EEDa t\u1EA1i \u0111\u1EA1i l\xFD Honda \u1EE7y quy\u1EC1n \u0111\u1EA3m b\u1EA3o ph\u1EE5 t\xF9ng genuine v\xE0 b\u1EA3o h\xE0nh c\xF4ng vi\u1EC7c. Liberty v\xE0 PVI c\xF3 th\u1ECFa thu\u1EADn tr\u1EF1c ti\u1EBFp v\u1EDBi Honda Vietnam \u2014 ch\u1ECDn 2 NB n\xE0y \u0111\u1EC3 kh\xF4ng qua kh\xE2u gi\xE1m \u0111\u1ECBnh ri\xEAng.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2605\u2606',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'R\u1EBB',level:'good'},
      {label:'Ph\u1EE5 t\xF9ng',val:'D\u1EC5 t\xECm',level:'good'},
      {label:'Garage',val:'R\u1ED9ng kh\u1EAFp',level:'good'},
    ],
    insight:{owners:5210,topModel:'CR-V',monthly:3960,vs_estimate:-2.1,hcm:4250,hn:3580,breakdown:{bh:917,fuel:2600,road:160,maint:280}},
    garages:[
      {name:'Honda \xD4 t\xF4 S\xE0i G\xF2n - B\xECnh D\u01B0\u01A1ng',type:'official',city:'HCM',address:'B\xECnh D\u01B0\u01A1ng',bh:['Liberty','PVI'],claims:690,rating:4.8,note:'\u0110\u1EA1i l\xFD Honda ch\xEDnh h\xE3ng. Ph\u1EE5 t\xF9ng genuine, k\u1EF9 thu\u1EADt vi\xEAn Honda-certified.'},
      {name:'Honda \xD4 t\xF4 M\u1EF9 \u0110\xECnh',type:'official',city:'HN',address:'M\u1EF9 \u0110\xECnh, Nam T\u1EEB Li\xEAm',bh:['Liberty','PVI'],claims:580,rating:4.7,note:'\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng l\u1EDBn nh\u1EA5t H\xE0 N\u1ED9i. Chuy\xEAn Honda City, CR-V, Civic.'},
      {name:'Garage Ho\xE0ng Gia Auto',type:'authorized',city:'HCM',address:'T\xE2n B\xECnh, HCM',bh:['PVI','PJICO'],claims:340,rating:4.6,note:'Garage \u1EE7y quy\u1EC1n BH. Chuy\xEAn Honda \u0111\xF4 th\u1ECB, gi\xE1 d\u1ECBch v\u1EE5 c\u1EA1nh tranh, ph\u1EE5 t\xF9ng genuine.'},
      {name:'Auto Honda \u0110\u1ED1ng \u0110a',type:'authorized',city:'HN',address:'\u0110\u1ED1ng \u0110a, H\xE0 N\u1ED9i',bh:['PJICO'],claims:210,rating:4.5,note:'\u0110\u01B0\u1EE3c c\u1ED9ng \u0111\u1ED3ng ch\u1EE7 xe Honda HN \u0111\xE1nh gi\xE1 cao nh\u1EA5t khu v\u1EF1c n\u1ED9i th\xE0nh.'},
    ],
    scenarios:['collision','parked','glass'],
  },
  hyundai:{
    name:'Hyundai',origin:'H\xE0n Qu\u1ED1c',color:'#002C5F',tagline:'Thi\u1EBFt k\u1EBF hi\u1EC7n \u0111\u1EA1i \xB7 C\xF4ng ngh\u1EC7 H\xE0n Qu\u1ED1c',
    fuels:['x\u0103ng','\u0111i\u1EC7n'],popular:true,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u H\xE0n Qu\u1ED1c d\u1EABn \u0111\u1EA7u xu h\u01B0\u1EDBng xe \u0111i\u1EC7n t\u1EA1i Vi\u1EC7t Nam v\u1EDBi Ioniq 6 v\xE0 Kona Electric. D\xF2ng xe x\u0103ng Tucson v\xE0 Santa Fe ti\u1EBFp t\u1EE5c ph\u1ED5 bi\u1EBFn nh\u1EDD thi\u1EBFt k\u1EBF hi\u1EC7n \u0111\u1EA1i v\xE0 c\xF4ng ngh\u1EC7 an to\xE0n t\u1ED1t.',
    models:[
      {name:'Tucson',type:'suv',bh:10,desc:'SUV 5 ch\u1ED7 ph\u1ED5 bi\u1EBFn',monthly:{bh:833,fuel:2600,reg:158,maint:270},slug:'tucson',priceFrom:799,priceTo:939,
        variants:[
          {name:'2.0 AT Ti\xEAu chu\u1EA9n',price:799,engine:'2.0L MPI 156hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.0 AT \u0110\u1EB7c bi\u1EC7t',price:869,engine:'2.0L MPI 156hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.6T AT AWD',price:939,engine:'1.6L Turbo 178hp',fuel:'X\u0103ng',seats:5,drive:'AWD'},
        ],
        commonIssues:[
          {title:'R\xF2 r\u1EC9 \u0111\u01B0\u1EDDng \u1ED1ng \u0111i\u1EC1u h\xF2a',km:'30.000-60.000 km',severity:'medium',desc:'H\u1EC7 th\u1ED1ng \u0111i\u1EC1u h\xF2a Tucson 2022-2023 c\xF3 t\u1EF7 l\u1EC7 r\xF2 r\u1EC9 refrigerant kh\xE1 cao. Ki\u1EC3m tra khi \u0111i\u1EC1u h\xF2a k\xE9m l\u1EA1nh - c\u1EA7n t\xECm \u0111i\u1EC3m r\xF2, kh\xF4ng ch\u1EC9 n\u1EA1p gas.',cost:'1-5tr t\xF9y \u0111i\u1EC3m r\xF2'},
          {title:'Ti\u1EBFng k\xEAu tay l\xE1i EPS',km:'20.000-50.000 km',severity:'medium',desc:'Ti\u1EBFng k\xEAu c\u1ED9t l\xE1i khi \u0111\xE1nh l\xE1i \u1EDF t\u1ED1c \u0111\u1ED9 th\u1EA5p. Hyundai c\xF3 TSB v\u1EC1 b\xF4i tr\u01A1n kh\u1EDBp c\u1ED9t l\xE1i - s\u1EEDa mi\u1EC5n ph\xED trong b\u1EA3o h\xE0nh.',cost:'0 (b\u1EA3o h\xE0nh) / 500k-2tr'},
          {title:'\u0110\xE8n check engine c\u1EA3m bi\u1EBFn O2',km:'50.000+ km',severity:'low',desc:'C\u1EA3m bi\u1EBFn O2 b\xE1o l\u1ED7i do nhi\xEAn li\u1EC7u k\xE9m ch\u1EA5t l\u01B0\u1EE3ng. D\xF9ng RON 95 tr\u1EDF l\xEAn, tr\xE1nh x\u0103ng pha.',cost:'1-3tr (thay c\u1EA3m bi\u1EBFn)'},
          {title:'L\u1ECFng \u1ED1p nh\u1EF1a n\u1ED9i th\u1EA5t',km:'B\u1EA5t k\u1EF3',severity:'low',desc:'\u1ED0p c\u1EEDa v\xE0 taplo hay r\xEDt khi qua \u0111\u01B0\u1EDDng x\u1EA5u. Nh\xE9t foam c\xE1ch \xE2m v\xE0o khe h\u1EDF l\xE0 gi\u1EA3i ph\xE1p nhanh.',cost:'0-200k (t\u1EF1 x\u1EED l\xFD)'},
        ],
        spareParts:[
          {name:'D\u1EA7u \u0111\u1ED9ng c\u01A1 5W-30',interval:'10.000 km',cost:'350-600k',note:'Tucson 2.0 MPI thay 10.000km'},
          {name:'D\u1EA7u h\u1ED9p s\u1ED1 AT',interval:'60.000 km',cost:'600k-1tr',note:'Hyundai SP-IV'},
          {name:'L\u1ECDc gi\xF3 cabin',interval:'15.000 km',cost:'150-300k',note:''},
          {name:'M\xE1 phanh tr\u01B0\u1EDBc',interval:'40.000-55.000 km',cost:'1.5-3tr/c\u1EB7p',note:''},
          {name:'L\u1ECDc gi\xF3 \u0111\u1ED9ng c\u01A1',interval:'15.000 km',cost:'200-350k',note:''},
          {name:'Bugi iridium',interval:'80.000 km',cost:'500k-1tr/b\u1ED9',note:'4 bugi cho 2.0L'},
        ]},
      {name:'Santa Fe',type:'suv',bh:14,desc:'SUV 7 ch\u1ED7',monthly:{bh:1167,fuel:3000,reg:180,maint:350},slug:'santa-fe',priceFrom:1069,priceTo:1315,
        variants:[
          {name:'Premium 2.2D',price:1069,engine:'2.2L Diesel Turbo',fuel:'D\u1EA7u',seats:7,drive:'FWD'},
          {name:'Luxury 2.2D',price:1169,engine:'2.2L Diesel Turbo',fuel:'D\u1EA7u',seats:7,drive:'FWD'},
          {name:'Luxury 2.2D AWD',price:1259,engine:'2.2L Diesel Turbo',fuel:'D\u1EA7u',seats:7,drive:'AWD'},
          {name:'Calligraphy 2.2D AWD',price:1315,engine:'2.2L Diesel Turbo',fuel:'D\u1EA7u',seats:7,drive:'AWD'},
        ],
        competitors:['cx-8','sorento'],
        modelInsight:{owners:1240,monthly:4700,vs_estimate:+1.8,hcm:5020,hn:4280,breakdown:{bh:1167,fuel:3000,road:180,maint:350}},
        modelNotes:[
          {q:'Santa Fe Calligraphy AWD vs Luxury c\xF3 \u0111\xE1ng gi\xE1 h\u01A1n kh\xF4ng?',a:'Calligraphy AWD \u0111\u1EAFt h\u01A1n 146tr nh\u01B0ng th\xEAm h\u1EC7 d\u1EABn \u0111\u1ED9ng 4 b\xE1nh, gh\u1EBF da Nappa, c\u1EEDa s\u1ED5 tr\u1EDDi to\xE0n c\u1EA3nh v\xE0 h\u1EC7 th\u1ED1ng \xE2m thanh Harman Kardon. V\u1EC1 chi ph\xED v\u1EADn h\xE0nh kh\xF4ng kh\xE1c bi\u1EC7t \u0111\xE1ng k\u1EC3 - AWD t\u1ED1n x\u0103ng h\u01A1n kho\u1EA3ng 5-8%.'},
          {q:'Santa Fe Diesel vs x\u0103ng - n\xEAn ch\u1ECDn lo\u1EA1i n\xE0o cho chi ph\xED s\u1EED d\u1EE5ng?',a:'Diesel ti\u1EBFt ki\u1EC7m nhi\xEAn li\u1EC7u h\u01A1n 15-20% nh\u01B0ng chi ph\xED b\u1EA3o d\u01B0\u1EE1ng \u0111\u1ECBnh k\u1EF3 cao h\u01A1n kho\u1EA3ng 10%. T\u1ED5ng chi ph\xED v\u1EADn h\xE0nh Diesel th\u1EAFng n\u1EBFu ch\u1EA1y tr\xEAn 1.500km/th\xE1ng. D\u01B0\u1EDBi 1.000km/th\xE1ng, x\u0103ng h\u1EE3p l\xFD h\u01A1n.'},
        ],
        inspectionSchedule:[
          {age:'0-3 n\u0103m',interval:'Mi\u1EC5n \u0111\u0103ng ki\u1EC3m',note:'Xe m\u1EDBi kh\xF4ng c\u1EA7n \u0111\u0103ng ki\u1EC3m trong 3 n\u0103m \u0111\u1EA7u'},
          {age:'3-7 n\u0103m',interval:'2 n\u0103m/l\u1EA7n',note:'\u0110\u0103ng ki\u1EC3m \u0111\u1ECBnh k\u1EF3 24 th\xE1ng'},
          {age:'7-12 n\u0103m',interval:'1 n\u0103m/l\u1EA7n',note:'\u0110\u0103ng ki\u1EC3m h\xE0ng n\u0103m'},
          {age:'Tr\xEAn 12 n\u0103m',interval:'6 th\xE1ng/l\u1EA7n',note:'\u0110\u0103ng ki\u1EC3m 2 l\u1EA7n/n\u0103m'},
        ],
        serviceIntervals:[
          {km:'5.000 km',task:'Thay d\u1EA7u m\xE1y + l\u1ECDc d\u1EA7u',cost:'1.2-1.8'},
          {km:'10.000 km',task:'Thay l\u1ECDc gi\xF3 \u0111\u1ED9ng c\u01A1 + ki\u1EC3m tra phanh',cost:'0.8-1.2'},
          {km:'20.000 km',task:'Thay l\u1ECDc nhi\xEAn li\u1EC7u + d\u1EA7u h\u1ED9p s\u1ED1',cost:'2.5-3.5'},
          {km:'40.000 km',task:'Thay b\u1ED9 d\xE2y curoa + b\u01A1m n\u01B0\u1EDBc',cost:'3.0-4.5'},
          {km:'60.000 km',task:'Thay d\u1EA7u c\u1EA7u + ki\u1EC3m tra g\u1EA7m to\xE0n b\u1ED9',cost:'2.0-3.0'},
        ],
        commonIssues:[
          {title:'H\u1ED9p s\u1ED1 DCT gi\u1EADt \u1EDF t\u1ED1c \u0111\u1ED9 th\u1EA5p',km:'20.000-50.000 km',severity:'medium',desc:'Hi\u1EC7n t\u01B0\u1EE3ng rung gi\u1EADt khi v\xE0o s\u1ED1 1-2 \u1EDF t\u1ED1c \u0111\u1ED9 d\u01B0\u1EDBi 20km/h. \u0110\u1EB7c th\xF9 h\u1ED9p s\u1ED1 ly h\u1EE3p k\xE9p Hyundai, c\u1EA7n c\u1EADp nh\u1EADt ph\u1EA7n m\u1EC1m TCU ho\u1EB7c thay d\u1EA7u ly h\u1EE3p.',cost:'2-5 tri\u1EC7u'},
          {title:'C\u1EA3m bi\u1EBFn \xE1p su\u1EA5t l\u1ED1p b\xE1o sai',km:'30.000+ km',severity:'low',desc:'TPMS b\xE1o c\u1EA3nh b\xE1o d\xF9 l\u1ED1p \u0111\u1EE7 h\u01A1i. Th\u01B0\u1EDDng do pin c\u1EA3m bi\u1EBFn y\u1EBFu ho\u1EB7c c\u1EA7n reset h\u1EC7 th\u1ED1ng.',cost:'0.5-2 tri\u1EC7u/l\u1ED1p'},
          {title:'R\xF2 r\u1EC9 d\u1EA7u turbo diesel',km:'80.000+ km',severity:'high',desc:'R\u1EC9 d\u1EA7u t\u1EA1i \u1ED1ng d\u1EA7u h\u1ED3i turbo ho\u1EB7c gio\u0103ng n\u1EAFp m\xE1y. C\u1EA7n ki\u1EC3m tra \u0111\u1ECBnh k\u1EF3 sau 80.000km, x\u1EED l\xFD s\u1EDBm tr\xE1nh h\u1ECFng turbo.',cost:'5-15 tri\u1EC7u'},
          {title:'Ti\u1EBFng k\xEAu gi\u1EA3m x\xF3c tr\u01B0\u1EDBc',km:'40.000-70.000 km',severity:'medium',desc:'Ti\u1EBFng c\u1ED9c c\u1ED9c khi qua \u1ED5 g\xE0 do cao su ch\xE2n gi\u1EA3m x\xF3c l\xE3o h\xF3a. Thay c\u1EB7p cao su ho\u1EB7c c\u1EA3 c\u1EE5m gi\u1EA3m x\xF3c.',cost:'3-8 tri\u1EC7u/c\u1EB7p'},
        ],
      },
      {name:'Accent',type:'sedan',bh:6,desc:'Sedan h\u1EA1ng B',monthly:{bh:500,fuel:1900,reg:128,maint:190},slug:'accent',priceFrom:439,priceTo:559,
        variants:[
          {name:'1.4 MT Ti\xEAu chu\u1EA9n',price:439,engine:'1.4L MPI 100hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.4 AT Ti\xEAu chu\u1EA9n',price:479,engine:'1.4L MPI 100hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.4 AT \u0110\u1EB7c bi\u1EC7t',price:559,engine:'1.4L MPI 100hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
        ]},
      {name:'Creta',type:'suv',bh:8,desc:'Crossover compact',monthly:{bh:667,fuel:2200,reg:145,maint:230},slug:'creta',priceFrom:599,priceTo:749,
        variants:[
          {name:'1.5 AT Ti\xEAu chu\u1EA9n',price:599,engine:'1.5L MPI 115hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.5T AT \u0110\u1EB7c bi\u1EC7t',price:699,engine:'1.5L Turbo 158hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.5T AT Cao c\u1EA5p',price:749,engine:'1.5L Turbo 158hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
        ]},
      {name:'Ioniq 6',type:'ev',bh:18,desc:'Sedan \u0111i\u1EC7n cao c\u1EA5p',monthly:{bh:1500,fuel:1100,reg:0,maint:150},slug:'ioniq-6',priceFrom:1099,priceTo:1499,
        variants:[
          {name:'RWD Standard',price:1099,engine:'EV 151kW',fuel:'\u0110i\u1EC7n',seats:5,drive:'FWD'},
          {name:'RWD Long Range',price:1299,engine:'EV 168kW 614km',fuel:'\u0110i\u1EC7n',seats:5,drive:'FWD'},
          {name:'AWD Long Range',price:1499,engine:'EV 239kW 519km',fuel:'\u0110i\u1EC7n',seats:5,drive:'AWD'},
        ]},
      {name:'Kona Electric',type:'ev',bh:12,desc:'SUV \u0111i\u1EC7n \u0111\xF4 th\u1ECB',monthly:{bh:1000,fuel:850,reg:0,maint:120},slug:'kona-electric',priceFrom:639,priceTo:759,
        variants:[
          {name:'Standard Range',price:639,engine:'EV 100kW 307km',fuel:'\u0110i\u1EC7n',seats:5,drive:'FWD'},
          {name:'Long Range',price:759,engine:'EV 160kW 481km',fuel:'\u0110i\u1EC7n',seats:5,drive:'FWD'},
        ]},
    ],
    topInsurers:[
      {name:'MIC Insurance',color:'#E52A2A',badge:'Xe \u0111i\u1EC7n',reason:'Kinh nghi\u1EC7m x\u1EED l\xFD b\u1ED3i th\u01B0\u1EDDng xe \u0111i\u1EC7n Hyundai. C\xF3 kinh nghi\u1EC7m v\u1EDBi pin EV v\xE0 quy tr\xECnh x\u1EED l\xFD ri\xEAng.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Nhanh nh\u1EA5t',reason:'X\u1EED l\xFD nhanh, m\u1EA1ng l\u01B0\u1EDBi garage r\u1ED9ng cho Hyundai x\u0103ng (Tucson, Santa Fe, Accent).'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'\u1ED4n \u0111\u1ECBnh',reason:'Uy t\xEDn l\xE2u \u0111\u1EDDi, ph\xF9 h\u1EE3p cho Hyundai Accent v\xE0 Tucson \u1EDF th\u1ECB tr\u01B0\u1EDDng ph\u1ED5 th\xF4ng.'},
    ],
    notes:[
      {q:'Xe \u0111i\u1EC7n Hyundai (Ioniq 6, Kona EV) c\xF3 \u0111\u01B0\u1EE3c b\u1EA3o v\u1EC7 kh\xF4ng?',a:'C\xF3. G\xF3i b\u1EA3o v\u1EC7 xe bao g\u1ED3m th\xE2n xe v\xE0 c\xE1c b\u1ED9 ph\u1EADn c\u01A1 kh\xED. N\u1EBFu mu\u1ED1n t\xE1ch ri\xEAng ph\u1EA7n pin \u0111i\u1EC7n, c\u1EA7n h\u1ECFi r\xF5 ph\u1EA1m vi c\u1EE7a t\u1EEBng nh\xE0 cung c\u1EA5p.'},
      {q:'Hyundai nh\u1EADp t\u1EEB Th\xE1i Lan v\u1EC1 VN, ph\u1EE5 t\xF9ng sau tai n\u1EA1n c\xF3 kh\xF3 t\xECm kh\xF4ng?',a:'M\u1ED9t s\u1ED1 ph\u1EE5 t\xF9ng body \u0111\u1EB7c th\xF9 c\u1EA7n \u0111\u1EB7t h\xE0ng th\xEAm 1-2 tu\u1EA7n. Khuy\u1EBFn ngh\u1ECB ch\u1ECDn NB c\xF3 garage Hyundai \u1EE7y quy\u1EC1n \u0111\u1EC3 \u0111\u1EA3m b\u1EA3o ph\u1EE5 t\xF9ng genuine v\xE0 tr\xE1nh ch\u1EDD \u0111\u1EE3i.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2605\u2606',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Trung b\xECnh',level:'mid'},
      {label:'Ph\u1EE5 t\xF9ng',val:'T\u01B0\u01A1ng \u0111\u1ED1i',level:'mid'},
      {label:'Xe \u0111i\u1EC7n',val:'H\xE0ng \u0111\u1EA7u',level:'high'},
    ],
    insight:{owners:3180,topModel:'Tucson',monthly:3840,vs_estimate:+1.2,hcm:4100,hn:3490,breakdown:{bh:833,fuel:2600,road:158,maint:270}},
    garages:[
      {name:'Hyundai Th\xE0nh C\xF4ng - L\xE1ng H\u1EA1',type:'official',city:'HN',address:'L\xE1ng H\u1EA1, \u0110\u1ED1ng \u0110a',bh:['PVI','B\u1EA3o Vi\u1EC7t'],claims:510,rating:4.7,note:'\u0110\u1EA1i l\xFD Hyundai ch\xEDnh h\xE3ng l\u1EDBn nh\u1EA5t HN. Chuy\xEAn Tucson, Santa Fe, Ioniq 6.'},
      {name:'Hyundai An L\u1EA1c',type:'official',city:'HCM',address:'B\xECnh T\xE2n, HCM',bh:['MIC','PVI'],claims:470,rating:4.7,note:'\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng HCM. C\xF3 k\u1EF9 thu\u1EADt vi\xEAn chuy\xEAn xe \u0111i\u1EC7n Ioniq 6, Kona EV.'},
      {name:'Garage EV Care Hyundai',type:'authorized',city:'HCM',address:'Qu\u1EADn 7, HCM',bh:['MIC'],claims:180,rating:4.8,note:'Chuy\xEAn s\xE2u xe \u0111i\u1EC7n Hyundai. K\u1EF9 thu\u1EADt vi\xEAn \u0111\u01B0\u1EE3c \u0111\xE0o t\u1EA1o v\u1EC1 pin EV v\xE0 h\u1EC7 th\u1ED1ng ADAS.'},
    ],
    scenarios:['collision','thuykick','theft'],
  },
  kia:{
    name:'Kia',origin:'H\xE0n Qu\u1ED1c',color:'#05141F',tagline:'Movement that inspires \xB7 Thi\u1EBFt k\u1EBF t\xE1o b\u1EA1o',
    fuels:['x\u0103ng','\u0111i\u1EC7n'],popular:true,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u H\xE0n Qu\u1ED1c n\u1ED5i b\u1EADt v\u1EDBi thi\u1EBFt k\u1EBF t\xE1o b\u1EA1o v\xE0 gi\xE1 tr\u1ECB trang b\u1ECB t\u1ED1t nh\u1EA5t ph\xE2n kh\xFAc. Kia Seltos v\xE0 Carnival l\xE0 nh\u1EEFng m\u1EABu b\xE1n ch\u1EA1y h\xE0ng \u0111\u1EA7u, \u0111\u01B0\u1EE3c chu\u1ED9ng b\u1EDFi s\u1EF1 k\u1EBFt h\u1EE3p gi\u1EEFa phong c\xE1ch v\xE0 th\u1EF1c d\u1EE5ng.',
    models:[
      {name:'Seltos',type:'suv',bh:9,desc:'Crossover compact',monthly:{bh:750,fuel:2200,reg:148,maint:240},slug:'seltos',priceFrom:629,priceTo:769,
        variants:[
          {name:'1.4T Premium MT',price:629,engine:'1.4L Turbo 138hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.4T Premium AT',price:679,engine:'1.4L Turbo 138hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.4T Luxury AT',price:719,engine:'1.4L Turbo 138hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.4T GT-Line AT',price:769,engine:'1.4L Turbo 138hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
        ],
        commonIssues:[
          {title:'H\u1ED9p s\u1ED1 DCT gi\u1EADt \u1EDF t\u1ED1c \u0111\u1ED9 th\u1EA5p',km:'10.000-40.000 km',severity:'medium',desc:'H\u1ED9p s\u1ED1 ly h\u1EE3p k\xE9p DCT 7 c\u1EA5p Kia gi\u1EADt c\u1ED9c khi \u0111ang \u1EDF s\u1ED1 1-2 t\u1ED1c \u0111\u1ED9 th\u1EA5p. Update ph\u1EA7n m\u1EC1m TCU t\u1EEB \u0111\u1EA1i l\xFD th\u01B0\u1EDDng c\u1EA3i thi\u1EC7n. Thay d\u1EA7u DCT \u0111\xFAng h\u1EA1n.',cost:'0 (update TCU) / 800k-1.5tr (thay d\u1EA7u)'},
          {title:'Rung nh\u1EB9 khi phanh \u1EDF t\u1ED1c \u0111\u1ED9 cao',km:'20.000-50.000 km',severity:'medium',desc:'\u0110\u0129a phanh b\u1ECB bi\u1EBFn d\u1EA1ng nhi\u1EC7t khi phanh g\u1EA5p li\xEAn t\u1EE5c \u1EDF t\u1ED1c \u0111\u1ED9 cao. Tr\xE1nh phanh xu\u1ED1ng d\u1ED1c d\xE0i b\u1EB1ng phanh ch\xE2n - h\xE3y d\xF9ng phanh \u0111\u1ED9ng c\u01A1.',cost:'2-5tr/c\u1EB7p (thay \u0111\u0129a phanh)'},
          {title:'\u0110\xE8n airbag b\xE1o sai',km:'B\u1EA5t k\u1EF3',severity:'low',desc:'L\u1ED7i airbag warning th\u01B0\u1EDDng do connector gh\u1EBF b\u1ECB l\u1ECFng khi th\xE1o/g\u1EAFp l\u1EA1i. Ki\u1EC3m tra connector gh\u1EBF tr\u01B0\u1EDBc khi thay c\u1EA3m bi\u1EBFn.',cost:'0-500k'},
          {title:'Ti\u1EBFng r\xEDt d\xE2y \u0111ai an to\xE0n',km:'30.000+ km',severity:'low',desc:'D\xE2y \u0111ai an to\xE0n ph\xE1t ti\u1EBFng r\xEDt khi k\xE9o ra-v\xE0o. V\u1EC7 sinh track d\xE2y \u0111ai b\u1EB1ng silicon spray.',cost:'0-100k'},
        ],
        spareParts:[
          {name:'D\u1EA7u \u0111\u1ED9ng c\u01A1 5W-30 Full Syn',interval:'10.000 km',cost:'350-600k',note:'Kia Seltos 1.4T'},
          {name:'D\u1EA7u h\u1ED9p s\u1ED1 DCT',interval:'40.000 km',cost:'800k-1.2tr',note:'DCT Fluid - kh\xF4ng d\xF9ng d\u1EA7u AT th\u01B0\u1EDDng'},
          {name:'L\u1ECDc gi\xF3 cabin',interval:'15.000 km',cost:'150-250k',note:''},
          {name:'M\xE1 phanh tr\u01B0\u1EDBc',interval:'35.000-45.000 km',cost:'1.2-2.5tr/c\u1EB7p',note:''},
          {name:'Bugi iridium',interval:'60.000 km',cost:'500-900k/b\u1ED9',note:'4 bugi 1.4T'},
          {name:'L\u1ECDc gi\xF3 \u0111\u1ED9ng c\u01A1',interval:'15.000 km',cost:'200-350k',note:''},
        ]},
      {name:'Sportage',type:'suv',bh:11,desc:'SUV 5 ch\u1ED7',monthly:{bh:917,fuel:2600,reg:162,maint:270},slug:'sportage',priceFrom:879,priceTo:1069,
        variants:[
          {name:'2.0 Premium AT',price:879,engine:'2.0L MPI 156hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.0 Luxury AT',price:969,engine:'2.0L MPI 156hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.6T GT-Line AWD',price:1069,engine:'1.6L Turbo 177hp',fuel:'X\u0103ng',seats:5,drive:'AWD'},
        ]},
      {name:'Carnival',type:'mpv',bh:16,desc:'MPV 8 ch\u1ED7 cao c\u1EA5p',monthly:{bh:1333,fuel:3200,reg:200,maint:420},slug:'carnival',priceFrom:1199,priceTo:1579,
        variants:[
          {name:'2.2D Premium AT',price:1199,engine:'2.2L Diesel 200hp',fuel:'D\u1EA7u',seats:8,drive:'FWD'},
          {name:'2.2D Luxury AT',price:1359,engine:'2.2L Diesel 200hp',fuel:'D\u1EA7u',seats:8,drive:'FWD'},
          {name:'2.2D Signature AT',price:1499,engine:'2.2L Diesel 200hp',fuel:'D\u1EA7u',seats:7,drive:'FWD'},
          {name:'3.5 V6 Limousine',price:1579,engine:'3.5L V6 290hp',fuel:'X\u0103ng',seats:7,drive:'FWD'},
        ]},
      {name:'Sorento',type:'suv',bh:14,desc:'SUV 7 ch\u1ED7',monthly:{bh:1167,fuel:3000,reg:178,maint:350},slug:'sorento',priceFrom:1079,priceTo:1319,competitors:['santa-fe','cx-8'],modelInsight:{owners:720,monthly:4695,vs_estimate:-0.3,hcm:4980,hn:4320,breakdown:{bh:1167,fuel:3000,road:178,maint:350}},
        variants:[
          {name:'2.2D Premium AT',price:1079,engine:'2.2L Diesel 202hp',fuel:'D\u1EA7u',seats:7,drive:'FWD'},
          {name:'2.2D Luxury AT',price:1179,engine:'2.2L Diesel 202hp',fuel:'D\u1EA7u',seats:7,drive:'FWD'},
          {name:'2.2D Signature AT AWD',price:1319,engine:'2.2L Diesel 202hp',fuel:'D\u1EA7u',seats:7,drive:'AWD'},
        ]},
      {name:'K3',type:'sedan',bh:7.4,desc:'Sedan h\u1EA1ng C ph\u1ED5 bi\u1EBFn nh\u1EA5t',slug:'k3',priceFrom:559,priceTo:699,
        monthly:{bh:620,fuel:2100,reg:130,maint:280},
        ownership:{
          fuelRate:7,fuelType:'x\u0103ng',fuelPrice:20003,
          insureAnnual:7440000,   // TNDS 504k + v\u1EADt ch\u1EA5t 6.936tr (3% \xD7 231.2tr)
          maintPer5k:1400000,     // d\u1EA7u nh\u1EDBt + l\u1ECDc + c\xF4ng t\u1EA1i Kia authorized
          roadFeeAnnual:1560000,  // xe d\u01B0\u1EDBi 6 ch\u1ED7, d\u01B0\u1EDBi 1.5L
          inspectPeriod:24,inspectCost:340000,
        },
        variants:[
          {name:'K3 1.6 Standard MT',price:559,engine:'1.6L Smartstream 123hp',fuel:'X\u0103ng RON 95',drive:'FWD',seats:5},
          {name:'K3 1.6 Luxury AT',price:629,engine:'1.6L Smartstream 123hp',fuel:'X\u0103ng RON 95',drive:'FWD',seats:5},
          {name:'K3 2.0 Premium AT',price:699,engine:'2.0L Nu 149hp',fuel:'X\u0103ng RON 95',drive:'FWD',seats:5},
        ],

        commonIssues:[
          {title:'Ti\u1EBFng \u1ED3n phanh sau',freq:'Th\u01B0\u1EDDng g\u1EB7p',note:'M\xE1 phanh sau m\xF2n sau 40.000-60.000km. Chi ph\xED thay th\u1EBF ~2-3 tri\u1EC7u t\u1EA1i Kia authorized.'},
          {title:'L\u1ECFng tay l\xE1i \u1EDF t\u1ED1c \u0111\u1ED9 th\u1EA5p',freq:'Th\u1EC9nh tho\u1EA3ng',note:'H\u1EC7 th\u1ED1ng l\xE1i \u0111i\u1EC7n EPS c\u1EA7n c\xE2n ch\u1EC9nh sau va ch\u1EA1m. Ki\u1EC3m tra khi \u0111\u0103ng ki\u1EC3m \u0111\u1ECBnh k\u1EF3.'},
        ],
        modelNotes:[
          {q:'K3 1.6 MT c\xF3 d\u1EC5 b\u1EA3o d\u01B0\u1EE1ng kh\xF4ng v\xE0 ph\u1EE5 t\xF9ng c\xF3 s\u1EB5n kh\xF4ng?',a:'Kia K3 1.6 Smartstream l\xE0 m\u1ED9t trong nh\u1EEFng xe ph\u1ED5 bi\u1EBFn nh\u1EA5t ph\xE2n kh\xFAc. Ph\u1EE5 t\xF9ng genuine s\u1EB5n t\u1EA1i 27+ \u0111\u1EA1i l\xFD Kia to\xE0n qu\u1ED1c, gi\xE1 ph\u1EA3i ch\u0103ng so v\u1EDBi sedan Nh\u1EADt. Chi ph\xED d\u1EA7u nh\u1EDBt + c\xF4ng t\u1EA1i Kia authorized: 700-900k m\u1ED7i 5.000km.'},
          {q:'Mua b\u1EA3o hi\u1EC3m v\u1EADt ch\u1EA5t cho K3 \u1EDF \u0111\xE2u t\u1ED1t nh\u1EA5t?',a:'PVI v\xE0 PTI ph\xF9 h\u1EE3p nh\u1EA5t cho K3 ph\u1ED5 th\xF4ng \u2014 m\u1EA1ng l\u01B0\u1EDBi garage r\u1ED9ng, x\u1EED l\xFD claim 3-5 ng\xE0y. Gi\xE1 BH v\u1EADt ch\u1EA5t ~6.5-7.5 tri\u1EC7u/n\u0103m t\xF9y \u0111i\u1EC1u ki\u1EC7n. Mua qua MoMo c\xF3 th\u1EC3 so s\xE1nh gi\xE1 ngay.'},
        ],
        competitors:['sorento'],
      },
      {name:'Cerato',type:'sedan',bh:8,desc:'Sedan h\u1EA1ng C',monthly:{bh:667,fuel:2200,reg:145,maint:230},slug:'cerato',priceFrom:679,priceTo:819,
        variants:[
          {name:'1.6 Standard MT',price:679,engine:'1.6L Smartstream 128hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.6 Luxury AT',price:749,engine:'1.6L Smartstream 128hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.0 Premium AT',price:819,engine:'2.0L Nu 149hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
        ]},
      {name:'EV6',type:'ev',bh:20,desc:'SUV \u0111i\u1EC7n cao c\u1EA5p',monthly:{bh:1667,fuel:1200,reg:0,maint:180},slug:'ev6',priceFrom:1599,priceTo:1899,
        variants:[
          {name:'RWD Standard',price:1599,engine:'EV 168kW 384km',fuel:'\u0110i\u1EC7n',seats:5,drive:'FWD'},
          {name:'RWD Long Range',price:1749,engine:'EV 168kW 528km',fuel:'\u0110i\u1EC7n',seats:5,drive:'FWD'},
          {name:'AWD Long Range GT',price:1899,engine:'EV 239kW 506km',fuel:'\u0110i\u1EC7n',seats:5,drive:'AWD'},
        ]},
    ],
    topInsurers:[
      {name:'PVI Insurance',color:'#FF6600',badge:'Nhanh nh\u1EA5t',reason:'X\u1EED l\xFD b\u1ED3i th\u01B0\u1EDDng 3 ng\xE0y, ph\xF9 h\u1EE3p Kia Seltos v\xE0 Sportage \u1EDF c\xE1c TP l\u1EDBn.'},
      {name:'MIC Insurance',color:'#E52A2A',badge:'T\u1ED1t nh\u1EA5t cho Kia EV6',reason:'Kinh nghi\u1EC7m x\u1EED l\xFD EV, ph\xF9 h\u1EE3p Kia EV6 v\u1EDBi quy\u1EC1n l\u1EE3i pin \u0111i\u1EC7n ri\xEAng.'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'M\u1EA1ng l\u01B0\u1EDBi r\u1ED9ng',reason:'Ph\u1EE7 r\u1ED9ng t\u1EC9nh th\xE0nh, t\u1ED1t cho Kia Carnival v\xE0 Sorento.'},
    ],
    notes:[
      {q:'Kia Carnival CBU nh\u1EADp H\xE0n c\xF3 ph\u1EE5 t\xF9ng kh\xF3 t\xECm sau tai n\u1EA1n kh\xF4ng?',a:'Carnival CBU c\xF3 m\u1ED9t s\u1ED1 ph\u1EE5 t\xF9ng body c\u1EA7n \u0111\u1EB7t t\u1EEB 2-3 tu\u1EA7n. Ch\u1ECDn NB c\xF3 garage Kia authorized \u2014 ph\u1EE5 t\xF9ng genuine \u0111\u01B0\u1EE3c \u0111\u1EB7t th\u1EB3ng t\u1EEB Kia Vietnam thay v\xEC qua trung gian.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2605\u2606',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Trung b\xECnh',level:'mid'},
      {label:'Ph\u1EE5 t\xF9ng',val:'T\u01B0\u01A1ng \u0111\u1ED1i',level:'mid'},
      {label:'Thi\u1EBFt k\u1EBF',val:'T\xE1o b\u1EA1o',level:'high'},
    ],
    insight:{owners:2940,topModel:'Seltos',monthly:3720,vs_estimate:-0.8,hcm:3980,hn:3380,breakdown:{bh:750,fuel:2200,road:148,maint:240}},
    garages:[
      {name:'Kia Tr\u01B0\u1EDDng Chinh',type:'official',city:'HCM',address:'Tr\u01B0\u1EDDng Chinh, T\xE2n B\xECnh',bh:['PVI','B\u1EA3o Vi\u1EC7t'],claims:480,rating:4.7,note:'\u0110\u1EA1i l\xFD Kia l\u1EDBn nh\u1EA5t HCM. Chuy\xEAn Seltos, Carnival, EV6. C\xF3 khu v\u1EF1c waiting lounge.'},
      {name:'Kia Ph\u1EA1m V\u0103n \u0110\u1ED3ng',type:'official',city:'HN',address:'Ph\u1EA1m V\u0103n \u0110\u1ED3ng, C\u1EA7u Gi\u1EA5y',bh:['PVI','MIC'],claims:390,rating:4.6,note:'\u0110\u1EA1i l\xFD Kia ch\xEDnh h\xE3ng HN. Ph\u1EE5 t\xF9ng genuine H\xE0n Qu\u1ED1c, th\u1EDDi gian x\u1EED l\xFD claim nhanh.'},
      {name:'Garage Kia Xanh',type:'authorized',city:'HCM',address:'B\xECnh D\u01B0\u01A1ng',bh:['MIC'],claims:160,rating:4.7,note:'Chuy\xEAn Kia EV6. K\u1EF9 thu\u1EADt vi\xEAn \u0111\u01B0\u1EE3c \u0111\xE0o t\u1EA1o v\u1EC1 pin \u0111i\u1EC7n v\xE0 fast-charging system.'},
    ],
    scenarios:['collision','parked','natural'],
  },
  mazda:{
    name:'Mazda',origin:'Nh\u1EADt B\u1EA3n',color:'#910000',tagline:'Jinba Ittai \xB7 Xe v\xE0 ng\u01B0\u1EDDi l\xE0 m\u1ED9t',
    fuels:['x\u0103ng'],popular:true,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Nh\u1EADt B\u1EA3n \u0111\u1ED9c \u0111\xE1o v\u1EDBi tri\u1EBFt l\xFD thi\u1EBFt k\u1EBF Kodo v\xE0 c\u1EA3m gi\xE1c l\xE1i th\u1EC3 thao Jinba Ittai. Mazda CX-5 l\xE0 SUV 5 ch\u1ED7 \u0111\u01B0\u1EE3c chu\u1ED9ng nh\u1EA5t ph\xE2n kh\xFAc t\u1EA7m trung, n\u1ED5i b\u1EADt v\u1EDBi s\u01A1n Soul Red Crystal v\xE0 n\u1ED9i th\u1EA5t sang tr\u1ECDng v\u01B0\u1EE3t t\u1EA7m gi\xE1.',
    models:[
      {name:'CX-5',type:'suv',bh:11,desc:'SUV 5 ch\u1ED7 ph\u1ED5 bi\u1EBFn',monthly:{bh:917,fuel:2500,reg:160,maint:320},slug:'cx-5',priceFrom:749,priceTo:909,
        variants:[
          {name:'2.0L Luxury AT',price:749,engine:'2.0L SKYACTIV-G 155hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.0L Premium AT',price:839,engine:'2.0L SKYACTIV-G 155hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.5L AWD Signature',price:909,engine:'2.5L SKYACTIV-G 188hp',fuel:'X\u0103ng',seats:5,drive:'AWD'},
        ],
        commonIssues:[
          {title:'Ti\xEAu hao nhi\xEAn li\u1EC7u cao h\u01A1n c\xF4ng b\u1ED1',km:'B\u1EA5t k\u1EF3',severity:'low',desc:'CX-5 2.5L AWD th\u1EF1c t\u1EBF ti\xEAu th\u1EE5 10-13L/100km thay v\xEC 7.5L nh\u01B0 c\xF4ng b\u1ED1. \u0110\u1EB7c bi\u1EC7t r\xF5 khi d\xF9ng \u0111i\u1EC1u h\xF2a v\xE0 k\u1EB9t xe. \u0110\xE2y l\xE0 \u0111\u1EB7c \u0111i\u1EC3m xe, kh\xF4ng ph\u1EA3i l\u1ED7i k\u1EF9 thu\u1EADt.',cost:'0'},
          {title:'Rung nh\u1EB9 h\u1ED9p s\u1ED1 AT 6 c\u1EA5p \u1EDF s\u1ED1 th\u1EA5p',km:'30.000-60.000 km',severity:'medium',desc:'AT6 Mazda hay c\xF3 c\u1EA3m gi\xE1c rung rung nh\u1EB9 khi v\u1EC1 s\u1ED1 2-3 \u1EDF t\u1ED1c \u0111\u1ED9 th\u1EA5p, \u0111\u1EB7c bi\u1EC7t khi m\xE1y ch\u01B0a \u1EA5m. Thay d\u1EA7u AT \u0111\xFAng chu k\u1EF3 v\xE0 d\xF9ng \u0111\xFAng lo\u1EA1i SP-III.',cost:'600k-1tr (thay d\u1EA7u AT)'},
          {title:'L\u1ED7i m\xE0n h\xECnh MZD Connect \u0111\u01A1',km:'B\u1EA5t k\u1EF3',severity:'low',desc:'M\xE0n h\xECnh gi\u1EA3i tr\xED \u0111\u01A1 kh\xF4ng ph\u1EA3n h\u1ED3i sau khi t\u1EAFt b\u1EADt l\u1EA1i xe. R\xFAt c\u1EA7u ch\xEC ECU 30 gi\xE2y \u0111\u1EC3 hard reset. Mazda \u0111\xE3 c\u1EA3i ti\u1EBFn firmware t\u1EEB 2022.',cost:'0 (hard reset ho\u1EB7c update firmware)'},
          {title:'Ti\u1EBFng k\xEAu h\u1EC7 th\u1ED1ng treo tr\u01B0\u1EDBc',km:'50.000+ km',severity:'medium',desc:'Ti\u1EBFng c\u1ED9c khi qua \u1ED5 g\xE0 do bushings thanh \u1ED5n \u0111\u1ECBnh l\xE3o h\xF3a. CX-5 ch\u1EA1y \u0111\u1ECBa h\xECnh ho\u1EB7c \u0111\u01B0\u1EDDng x\u1EA5u nhi\u1EC1u s\u1EBD h\u1ECFng s\u1EDBm h\u01A1n.',cost:'1.5-4tr/c\u1EB7p (thay bushings)'},
        ],
        spareParts:[
          {name:'D\u1EA7u \u0111\u1ED9ng c\u01A1 5W-30 Mazda',interval:'10.000 km',cost:'400-700k',note:'D\xF9ng d\u1EA7u Mazda Original ho\u1EB7c t\u01B0\u01A1ng \u0111\u01B0\u01A1ng'},
          {name:'D\u1EA7u h\u1ED9p s\u1ED1 AT SP-III',interval:'40.000 km',cost:'600k-1tr',note:'Mazda AT6 d\xF9ng SP-III - kh\xF4ng d\xF9ng lo\u1EA1i kh\xE1c'},
          {name:'L\u1ECDc gi\xF3 cabin',interval:'15.000 km',cost:'150-300k',note:''},
          {name:'M\xE1 phanh tr\u01B0\u1EDBc',interval:'40.000-55.000 km',cost:'1.5-3tr/c\u1EB7p',note:''},
          {name:'Bugi iridium',interval:'80.000 km',cost:'600k-1.2tr/b\u1ED9',note:'4 bugi 2.0L ho\u1EB7c 4 bugi 2.5L'},
          {name:'L\u1ECDc gi\xF3 \u0111\u1ED9ng c\u01A1',interval:'15.000 km',cost:'200-400k',note:''},
        ]},
      {name:'CX-8',type:'suv',bh:15,desc:'SUV 7 ch\u1ED7 cao c\u1EA5p',monthly:{bh:1250,fuel:3000,reg:185,maint:400},slug:'cx-8',priceFrom:989,priceTo:1279,competitors:['santa-fe','sorento'],modelInsight:{owners:680,monthly:4835,vs_estimate:+0.7,hcm:5100,hn:4490,breakdown:{bh:1250,fuel:3000,road:185,maint:400}},
        variants:[
          {name:'2.0L Luxury AT',price:989,engine:'2.0L SKYACTIV-G 155hp',fuel:'X\u0103ng',seats:6,drive:'FWD'},
          {name:'2.0L Premium AT',price:1099,engine:'2.0L SKYACTIV-G 155hp',fuel:'X\u0103ng',seats:7,drive:'FWD'},
          {name:'2.5L AWD Signature',price:1279,engine:'2.5L SKYACTIV-G 188hp',fuel:'X\u0103ng',seats:6,drive:'AWD'},
        ]},
      {name:'Mazda3',type:'sedan',bh:9,desc:'Sedan/hatchback h\u1EA1ng C',monthly:{bh:750,fuel:2200,reg:148,maint:280},slug:'mazda3',priceFrom:649,priceTo:789,
        variants:[
          {name:'1.5L Luxury AT Sedan',price:649,engine:'1.5L SKYACTIV-G 120hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.0L Premium AT Sedan',price:739,engine:'2.0L SKYACTIV-G 155hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.0L Premium AT Hatchback',price:789,engine:'2.0L SKYACTIV-G 155hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
        ]},
      {name:'CX-3',type:'suv',bh:8,desc:'Crossover \u0111\xF4 th\u1ECB',monthly:{bh:667,fuel:2000,reg:140,maint:250},slug:'cx-3',priceFrom:549,priceTo:609,
        variants:[
          {name:'1.5L Luxury AT',price:549,engine:'1.5L SKYACTIV-G 120hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.5L Premium AT',price:609,engine:'1.5L SKYACTIV-G 120hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
        ]},
      {name:'CX-30',type:'suv',bh:9,desc:'Crossover compact',monthly:{bh:750,fuel:2100,reg:145,maint:260},slug:'cx-30',priceFrom:659,priceTo:799,
        variants:[
          {name:'2.0L Luxury AT',price:659,engine:'2.0L SKYACTIV-G 155hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.0L Premium AT',price:739,engine:'2.0L SKYACTIV-G 155hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.0L AWD Signature',price:799,engine:'2.0L SKYACTIV-G 155hp',fuel:'X\u0103ng',seats:5,drive:'AWD'},
        ]},
      {name:'Mazda6',type:'sedan',bh:12,desc:'Sedan h\u1EA1ng D',monthly:{bh:1000,fuel:2600,reg:168,maint:320},slug:'mazda6',priceFrom:819,priceTo:979,
        variants:[
          {name:'2.0L Luxury AT',price:819,engine:'2.0L SKYACTIV-G 155hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.0L Premium AT',price:899,engine:'2.0L SKYACTIV-G 155hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.5L AWD Signature',price:979,engine:'2.5L SKYACTIV-G 192hp',fuel:'X\u0103ng',seats:5,drive:'AWD'},
        ]},
    ],
    topInsurers:[
      {name:'PVI Insurance',color:'#FF6600',badge:'Nhanh nh\u1EA5t th\u1ECB tr\u01B0\u1EDDng',reason:'X\u1EED l\xFD b\u1ED3i th\u01B0\u1EDDng nhanh nh\u1EA5t, m\u1EA1ng l\u01B0\u1EDBi garage r\u1ED9ng cho Mazda.'},
      {name:'Liberty Insurance',color:'#2E4099',badge:'Garage Mazda authorized',reason:'Th\u1ECFa thu\u1EADn v\u1EDBi m\u1ED9t s\u1ED1 \u0111\u1EA1i l\xFD Mazda, ph\u1EE5 t\xF9ng genuine \u0111\u01B0\u1EE3c duy\u1EC7t.'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'\u1ED4n \u0111\u1ECBnh',reason:'M\u1EA1ng l\u01B0\u1EDBi r\u1ED9ng, ph\xF9 h\u1EE3p CX-5 v\xE0 CX-8 \u1EDF t\u1EC9nh th\xE0nh.'},
    ],
    notes:[
      {q:'S\u01A1n Mazda (Soul Red Crystal, Machine Grey) c\xF3 l\xE0m chi ph\xED s\u1EEDa t\u0103ng kh\xF4ng?',a:'C\xF3 th\u1EC3 cao h\u01A1n 15-25% so v\u1EDBi s\u01A1n th\xF4ng th\u01B0\u1EDDng do k\u1EF9 thu\u1EADt phun \u0111\u1EB7c bi\u1EC7t v\xE0 nhi\u1EC1u l\u1EDBp h\u01A1n. Nh\xE0 BH b\u1ED3i th\u01B0\u1EDDng theo chi ph\xED th\u1EF1c t\u1EBF \u2014 ch\u1EE7 xe kh\xF4ng thi\u1EC7t. L\u01B0u \xFD ch\u1ECDn garage c\xF3 th\u1EE3 \u0111\u01B0\u1EE3c \u0111\xE0o t\u1EA1o s\u01A1n Mazda \u0111\u1EC3 \u0111\xFAng m\xE0u.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2605\u2606',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Trung b\xECnh',level:'mid'},
      {label:'S\u01A1n \u0111\u1EB7c bi\u1EC7t',val:'T\u1ED1n k\xE9m h\u01A1n',level:'mid'},
      {label:'C\u1EA3m gi\xE1c l\xE1i',val:'H\xE0ng \u0111\u1EA7u',level:'high'},
    ],
    insight:{owners:3560,topModel:'CX-5',monthly:4010,vs_estimate:+0.3,hcm:4280,hn:3650,breakdown:{bh:917,fuel:2500,road:160,maint:320}},
    garages:[
      {name:'Mazda L\xEA V\u0103n L\u01B0\u01A1ng',type:'official',city:'HCM',address:'L\xEA V\u0103n L\u01B0\u01A1ng, Q.7',bh:['PVI','Liberty'],claims:420,rating:4.8,note:'\u0110\u1EA1i l\xFD Mazda ch\xEDnh h\xE3ng. Th\u1EE3 s\u01A1n \u0111\u01B0\u1EE3c \u0111\xE0o t\u1EA1o ri\xEAng cho Soul Red Crystal v\xE0 Machine Grey.'},
      {name:'Mazda Tr\u1EA7n Duy H\u01B0ng',type:'official',city:'HN',address:'Tr\u1EA7n Duy H\u01B0ng, C\u1EA7u Gi\u1EA5y',bh:['Liberty','B\u1EA3o Vi\u1EC7t'],claims:350,rating:4.7,note:'\u0110\u1EA1i l\xFD l\u1EDBn nh\u1EA5t HN. K\u1EF9 thu\u1EADt vi\xEAn \u0111\u01B0\u1EE3c Mazda Japan ch\u1EE9ng nh\u1EADn. Ph\u1EE5 t\xF9ng genuine.'},
      {name:'Auto Mazda T\xE2n Ph\xFA',type:'authorized',city:'HCM',address:'T\xE2n Ph\xFA, HCM',bh:['PVI'],claims:190,rating:4.6,note:'Garage \u1EE7y quy\u1EC1n. Gi\xE1 s\u01A1n c\u1EA1nh tranh h\u01A1n \u0111\u1EA1i l\xFD 20%, cam k\u1EBFt \u0111\xFAng m\xE0u Soul Red Crystal.'},
    ],
    scenarios:['collision','parked','glass'],
  },
  ford:{
    name:'Ford',origin:'M\u1EF9',color:'#003178',tagline:'Built Tough \xB7 Built for Vietnam',
    fuels:['x\u0103ng'],popular:true,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u M\u1EF9 v\u1EDBi d\xF2ng xe b\xE1n t\u1EA3i v\xE0 SUV \u0111\u1ECBa h\xECnh m\u1EA1nh m\u1EBD nh\u1EA5t th\u1ECB tr\u01B0\u1EDDng. Ford Ranger li\xEAn t\u1EE5c d\u1EABn \u0111\u1EA7u ph\xE2n kh\xFAc b\xE1n t\u1EA3i nhi\u1EC1u n\u0103m, \u0111\u01B0\u1EE3c y\xEAu th\xEDch b\u1EDFi t\xEDnh \u0111a d\u1EE5ng cho c\u1EA3 c\xF4ng vi\u1EC7c v\xE0 cu\u1ED9c s\u1ED1ng.',
    models:[
      {name:'Ranger',type:'truck',bh:14,desc:'B\xE1n t\u1EA3i s\u1ED1 1 VN',monthly:{bh:1167,fuel:3800,reg:220,maint:550},slug:'ranger',priceFrom:699,priceTo:1109,
        variants:[
          {name:'XLS MT 4x2',price:699,engine:'2.0L EcoBlue Turbo 170hp',fuel:'D\u1EA7u',seats:5,drive:'FWD'},
          {name:'XLS AT 4x2',price:759,engine:'2.0L EcoBlue Turbo 170hp',fuel:'D\u1EA7u',seats:5,drive:'FWD'},
          {name:'XLT AT 4x4',price:889,engine:'2.0L Bi-Turbo 210hp',fuel:'D\u1EA7u',seats:5,drive:'AWD'},
          {name:'Wildtrak AT 4x4',price:969,engine:'2.0L Bi-Turbo 210hp',fuel:'D\u1EA7u',seats:5,drive:'AWD'},
          {name:'Raptor AT 4x4',price:1109,engine:'3.0L EcoBoost V6 288hp',fuel:'X\u0103ng',seats:5,drive:'AWD'},
        ]},
      {name:'Everest',type:'suv',bh:18,desc:'SUV 7 ch\u1ED7 cao c\u1EA5p',monthly:{bh:1500,fuel:3600,reg:240,maint:500},slug:'everest',priceFrom:1099,priceTo:1499,
        variants:[
          {name:'Ambiente 4x2 AT',price:1099,engine:'2.0L EcoBlue 170hp',fuel:'D\u1EA7u',seats:7,drive:'FWD'},
          {name:'Trend 4x2 AT',price:1199,engine:'2.0L EcoBlue 170hp',fuel:'D\u1EA7u',seats:7,drive:'FWD'},
          {name:'Titanium 4x4 AT',price:1369,engine:'2.0L Bi-Turbo 210hp',fuel:'D\u1EA7u',seats:7,drive:'AWD'},
          {name:'Sport 4x4 AT',price:1499,engine:'2.0L Bi-Turbo 210hp',fuel:'D\u1EA7u',seats:7,drive:'AWD'},
        ]},
      {name:'Territory',type:'suv',bh:10,desc:'Crossover \u0111\xF4 th\u1ECB',monthly:{bh:833,fuel:2400,reg:155,maint:280},slug:'territory',priceFrom:799,priceTo:939,
        variants:[
          {name:'1.5T EcoBoost AT Titanium',price:799,engine:'1.5L EcoBoost 163hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.5T EcoBoost AT ST-Line',price:939,engine:'1.5L EcoBoost 163hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
        ]},
      {name:'Explorer',type:'suv',bh:30,desc:'SUV flagship',monthly:{bh:2500,fuel:4500,reg:320,maint:800},slug:'explorer',priceFrom:2859,priceTo:2859,
        variants:[
          {name:'2.3 EcoBoost AT Platinum',price:2859,engine:'2.3L EcoBoost 300hp',fuel:'X\u0103ng',seats:7,drive:'AWD'},
        ]},
    ],
    topInsurers:[
      {name:'PTI Insurance',color:'#005BAA',badge:'Chuy\xEAn b\xE1n t\u1EA3i Ford',reason:'M\u1EA1nh v\u1EC1 xe b\xE1n t\u1EA3i v\xE0 SUV \u0111\u1ECBa h\xECnh, kinh nghi\u1EC7m b\u1ED3i th\u01B0\u1EDDng Ford Ranger nhi\u1EC1u nh\u1EA5t.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Nhanh nh\u1EA5t',reason:'X\u1EED l\xFD nhanh, garage Ford \u1EE7y quy\u1EC1n trong m\u1EA1ng l\u01B0\u1EDBi PVI.'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'R\u1ED9ng kh\u1EAFp',reason:'M\u1EA1ng l\u01B0\u1EDBi r\u1ED9ng, t\u1ED1t cho Ford Everest di chuy\u1EC3n li\xEAn t\u1EC9nh.'},
    ],
    notes:[
      {q:'Ford Ranger l\u1EAFp th\xF9ng ho\u1EB7c ph\u1EE5 ki\u1EC7n \u0111\u1ED9 c\xF3 \u1EA3nh h\u01B0\u1EDFng b\u1EA3o hi\u1EC3m kh\xF4ng?',a:'C\xF3. Ph\u1EE5 ki\u1EC7n l\u1EAFp sau khi mua xe kh\xF4ng khai b\xE1o s\u1EBD kh\xF4ng \u0111\u01B0\u1EE3c b\u1ED3i th\u01B0\u1EDDng n\u1EBFu h\u1ECFng. Th\xF9ng l\u1EAFp th\xEAm c\u1EA7n th\xF4ng b\xE1o nh\xE0 BH \u0111\u1EC3 \u0111i\u1EC1u ch\u1EC9nh gi\xE1 tr\u1ECB b\u1EA3o hi\u1EC3m \u2014 ph\xED BH t\u0103ng th\xEAm kho\u1EA3ng 5-10%.'},
      {q:'Ford Ranger d\xF9ng kinh doanh v\u1EADn t\u1EA3i c\xF3 mua BH th\xE2n v\u1ECF \u0111\u01B0\u1EE3c kh\xF4ng?',a:'\u0110\u01B0\u1EE3c, nh\u01B0ng ph\u1EA3i khai b\xE1o \u0111\xFAng m\u1EE5c \u0111\xEDch s\u1EED d\u1EE5ng. BH c\xE1 nh\xE2n kh\xF4ng h\u1EE3p l\u1EC7 khi xe d\xF9ng v\u1EADn t\u1EA3i th\u01B0\u01A1ng m\u1EA1i. BH th\u01B0\u01A1ng m\u1EA1i ph\xED cao h\u01A1n kho\u1EA3ng 20-30% nh\u01B0ng b\u1EA3o v\u1EC7 \u0111\xFAng ph\u1EA1m vi s\u1EED d\u1EE5ng.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2606\u2606',level:'mid'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Cao h\u01A1n',level:'mid'},
      {label:'B\xE1n t\u1EA3i',val:'S\u1ED1 1 VN',level:'good'},
      {label:'\u0110\u1ECBa h\xECnh',val:'H\xE0ng \u0111\u1EA7u',level:'high'},
    ],
    insight:{owners:2870,topModel:'Ranger',monthly:5740,vs_estimate:+2.8,hcm:6120,hn:5180,breakdown:{bh:1167,fuel:3800,road:220,maint:550}},
    garages:[
      {name:'Ford B\xECnh D\u01B0\u01A1ng',type:'official',city:'HCM',address:'Thu\u1EADn An, B\xECnh D\u01B0\u01A1ng',bh:['PTI','PVI'],claims:560,rating:4.7,note:'\u0110\u1EA1i l\xFD Ford l\u1EDBn nh\u1EA5t mi\u1EC1n Nam. Chuy\xEAn Ranger v\xE0 Everest. C\xF3 pit ri\xEAng cho b\xE1n t\u1EA3i.'},
      {name:'Ford Th\u0103ng Long',type:'official',city:'HN',address:'\u0110\xF4ng Anh, H\xE0 N\u1ED9i',bh:['PTI','B\u1EA3o Vi\u1EC7t'],claims:430,rating:4.6,note:'\u0110\u1EA1i l\xFD Ford ch\xEDnh h\xE3ng HN. Chuy\xEAn b\xE1n t\u1EA3i, c\xF3 x\u01B0\u1EDFng \u0111\u1ED9 ph\u1EE5 ki\u1EC7n Ranger.'},
      {name:'4x4 Auto Garage',type:'authorized',city:'HCM',address:'Qu\u1EADn 12, HCM',bh:['PTI'],claims:240,rating:4.8,note:'Chuy\xEAn s\xE2u Ford Ranger v\xE0 Everest \u0111\u1ECBa h\xECnh. Thay khung g\u1EA7m, ph\u1EE5 t\xF9ng genuine, gi\xE1 t\u1ED1t h\u01A1n \u0111\u1EA1i l\xFD.'},
    ],
    scenarios:['collision','parttheft','natural'],
  },
  mitsubishi:{
    name:'Mitsubishi',origin:'Nh\u1EADt B\u1EA3n',color:'#D0021B',tagline:'Drive the future \xB7 Plug-in hybrid',
    fuels:['x\u0103ng','hybrid'],popular:true,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Nh\u1EADt B\u1EA3n \u0111ang \u0111\u1EA9y m\u1EA1nh d\xF2ng xe PHEV v\xE0 \u0111\u1ECBa h\xECnh t\u1EA1i Vi\u1EC7t Nam. Mitsubishi Xpander l\xE0 MPV 7 ch\u1ED7 b\xE1n ch\u1EA1y nh\u1EA5t ph\xE2n kh\xFAc gia \u0111\xECnh, n\u1ED5i b\u1EADt v\u1EC1 kh\xF4ng gian r\u1ED9ng v\xE0 chi ph\xED s\u1EDF h\u1EEFu h\u1EE3p l\xFD.',
    models:[
      {name:'Xpander',type:'mpv',bh:9,desc:'MPV 7 ch\u1ED7 b\xE1n ch\u1EA1y',monthly:{bh:750,fuel:2700,reg:155,maint:280},slug:'xpander',priceFrom:599,priceTo:699,
        variants:[
          {name:'1.5 MT Ti\xEAu chu\u1EA9n',price:599,engine:'1.5L MIVEC 105hp',fuel:'X\u0103ng',seats:7,drive:'FWD'},
          {name:'1.5 AT Ti\xEAu chu\u1EA9n',price:649,engine:'1.5L MIVEC 105hp',fuel:'X\u0103ng',seats:7,drive:'FWD'},
          {name:'1.5 AT \u0110\u1EB7c bi\u1EC7t',price:699,engine:'1.5L MIVEC 105hp',fuel:'X\u0103ng',seats:7,drive:'FWD'},
        ]},
      {name:'Xforce',type:'suv',bh:9,desc:'Crossover m\u1EDBi nh\u1EA5t',monthly:{bh:750,fuel:2400,reg:148,maint:260},slug:'xforce',priceFrom:629,priceTo:729,
        variants:[
          {name:'1.5 CVT Standard',price:629,engine:'1.5L MIVEC 105hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.5 CVT Ultimate',price:729,engine:'1.5L MIVEC 105hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
        ]},
      {name:'Outlander',type:'suv',bh:12,desc:'SUV 7 ch\u1ED7',monthly:{bh:1000,fuel:2800,reg:165,maint:320},slug:'outlander',priceFrom:869,priceTo:1029,
        variants:[
          {name:'2.0 CVT Standard',price:869,engine:'2.0L MIVEC 150hp',fuel:'X\u0103ng',seats:7,drive:'FWD'},
          {name:'2.0 CVT Premium',price:969,engine:'2.0L MIVEC 150hp',fuel:'X\u0103ng',seats:7,drive:'FWD'},
          {name:'2.5 PHEV Premium',price:1029,engine:'2.5L PHEV 224hp',fuel:'X\u0103ng/\u0110i\u1EC7n',seats:7,drive:'AWD'},
        ]},
      {name:'Eclipse Cross',type:'suv',bh:11,desc:'SUV PHEV',monthly:{bh:917,fuel:1200,reg:155,maint:280},slug:'eclipse-cross',priceFrom:869,priceTo:999,
        variants:[
          {name:'1.5T CVT 2WD',price:869,engine:'1.5L Turbo 163hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.4 PHEV 4WD',price:999,engine:'2.4L PHEV 224hp',fuel:'X\u0103ng/\u0110i\u1EC7n',seats:5,drive:'AWD'},
        ]},
      {name:'Pajero Sport',type:'suv',bh:16,desc:'SUV \u0111\u1ECBa h\xECnh',monthly:{bh:1333,fuel:3600,reg:210,maint:480},slug:'pajero-sport',priceFrom:999,priceTo:1199,
        variants:[
          {name:'4x2 AT',price:999,engine:'2.4L MIVEC Diesel 181hp',fuel:'D\u1EA7u',seats:7,drive:'FWD'},
          {name:'4x4 AT Premium',price:1099,engine:'2.4L MIVEC Diesel 181hp',fuel:'D\u1EA7u',seats:7,drive:'AWD'},
          {name:'4x4 AT Black Edition',price:1199,engine:'2.4L MIVEC Diesel 181hp',fuel:'D\u1EA7u',seats:7,drive:'AWD'},
        ]},
    ],
    topInsurers:[
      {name:'PVI Insurance',color:'#FF6600',badge:'Nhanh nh\u1EA5t',reason:'B\u1ED3i th\u01B0\u1EDDng nhanh, m\u1EA1ng l\u01B0\u1EDBi garage t\u1ED1t cho Xpander v\xE0 Xforce.'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'R\u1ED9ng kh\u1EAFp',reason:'M\u1EA1ng l\u01B0\u1EDBi to\xE0n qu\u1ED1c, t\u1ED1t cho Mitsubishi \u1EDF t\u1EC9nh th\xE0nh.'},
      {name:'Liberty Insurance',color:'#2E4099',badge:'Garage authorized',reason:'Ph\u1EE5 t\xF9ng genuine \u0111\u01B0\u1EE3c duy\u1EC7t, garage Mitsubishi \u1EE7y quy\u1EC1n trong m\u1EA1ng.'},
    ],
    notes:[
      {q:'Eclipse Cross PHEV b\u1EA3o hi\u1EC3m c\xF3 kh\xE1c xe x\u0103ng th\u01B0\u1EDDng kh\xF4ng?',a:'Ph\xED BH t\u01B0\u01A1ng \u0111\u01B0\u01A1ng, nh\u01B0ng chi ph\xED s\u1EEDa motor \u0111i\u1EC7n v\xE0 pin PHEV c\xF3 th\u1EC3 cao h\u01A1n. M\u1ED9t s\u1ED1 NB t\xEDnh quy\u1EC1n l\u1EE3i pin PHEV l\xE0 ph\u1EE5 t\xF9ng th\xF4ng th\u01B0\u1EDDng; s\u1ED1 kh\xE1c y\xEAu c\u1EA7u khai b\xE1o ri\xEAng. N\xEAn h\u1ECFi r\xF5 NB tr\u01B0\u1EDBc khi k\xFD h\u1EE3p \u0111\u1ED3ng.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2605\u2606',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Trung b\xECnh',level:'mid'},
      {label:'Ph\u1EE5 t\xF9ng',val:'T\u01B0\u01A1ng \u0111\u1ED1i',level:'mid'},
      {label:'MPV 7 ch\u1ED7',val:'B\xE1n ch\u1EA1y',level:'good'},
    ],
    insight:{owners:2410,topModel:'Xpander',monthly:3880,vs_estimate:-1.3,hcm:4050,hn:3610,breakdown:{bh:750,fuel:2700,road:155,maint:280}},
    garages:[
      {name:'Mitsubishi Motors Vi\u1EC7t Nam - B\u1EAFc T\u1EEB Li\xEAm',type:'official',city:'HN',address:'B\u1EAFc T\u1EEB Li\xEAm, H\xE0 N\u1ED9i',bh:['PVI','B\u1EA3o Vi\u1EC7t'],claims:380,rating:4.6,note:'\u0110\u1EA1i l\xFD Mitsubishi ch\xEDnh h\xE3ng HN. Chuy\xEAn Xpander v\xE0 Xforce. Ph\u1EE5 t\xF9ng genuine.'},
      {name:'Mitsubishi T\xE2n S\u01A1n Nh\u1EA5t',type:'official',city:'HCM',address:'G\xF2 V\u1EA5p, HCM',bh:['PVI','Liberty'],claims:310,rating:4.6,note:'\u0110\u1EA1i l\xFD l\u1EDBn nh\u1EA5t HCM. Chuy\xEAn PHEV Eclipse Cross v\xE0 Pajero Sport \u0111\u1ECBa h\xECnh.'},
      {name:'Garage MPV Center',type:'authorized',city:'HCM',address:'B\xECnh Th\u1EA1nh, HCM',bh:['PVI'],claims:150,rating:4.5,note:'Chuy\xEAn MPV 7 ch\u1ED7 Mitsubishi v\xE0 Toyota. Ph\u1EE5 t\xF9ng genuine, gi\xE1 t\u1ED1t h\u01A1n \u0111\u1EA1i l\xFD 10-15%.'},
    ],
    scenarios:['collision','thuykick','parked'],
  },
  vinfast:{
    name:'VinFast',origin:'Vi\u1EC7t Nam',color:'#0069AA',tagline:'Xe \u0111i\u1EC7n Vi\u1EC7t \xB7 V\xEC ng\u01B0\u1EDDi Vi\u1EC7t \xB7 Chi ph\xED th\u1EA5p nh\u1EA5t',
    fuels:['\u0111i\u1EC7n'],popular:true,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u xe \u0111i\u1EC7n Vi\u1EC7t Nam \u0111\u1EA7u ti\xEAn v\u1EDBi \u0111\u1EA7y \u0111\u1EE7 d\u1EA3i s\u1EA3n ph\u1EA9m t\u1EEB mini EV \u0111\u1EBFn SUV 7 ch\u1ED7. VF 8 l\xE0 xe \u0111i\u1EC7n b\xE1n ch\u1EA1y nh\u1EA5t Vi\u1EC7t Nam, ti\u1EBFt ki\u1EC7m 3-4tr/th\xE1ng so v\u1EDBi SUV x\u0103ng c\xF9ng ph\xE2n kh\xFAc.',
    models:[
      {name:'VF 8',type:'ev',bh:15,desc:'SUV \u0111i\u1EC7n c\u1EE1 C t\u1ED1t nh\u1EA5t',monthly:{bh:1250,fuel:1100,reg:0,maint:150},slug:'vf-8',priceFrom:649,priceTo:769,
        variants:[
          {name:'VF 8 Eco',price:649,engine:'EV 150kW 350km',fuel:'\u0110i\u1EC7n',seats:5,drive:'FWD'},
          {name:'VF 8 Plus',price:769,engine:'EV 175kW 420km',fuel:'\u0110i\u1EC7n',seats:5,drive:'FWD'},
        ],
        commonIssues:[
          {title:'Ph\u1EA7n m\u1EC1m OTA g\xE2y l\u1ED7i t\u1EA1m th\u1EDDi',km:'B\u1EA5t k\u1EF3',severity:'low',desc:'Update OTA t\u1EF1 \u0111\u1ED9ng \u0111\xF4i khi g\xE2y l\u1ED7i m\xE0n h\xECnh ho\u1EB7c m\u1EA5t k\u1EBFt n\u1ED1i m\u1ED9t s\u1ED1 t\xEDnh n\u0103ng th\xF4ng minh. Kh\u1EDFi \u0111\u1ED9ng l\u1EA1i xe ho\u1EB7c factory reset m\xE0n h\xECnh th\u01B0\u1EDDng gi\u1EA3i quy\u1EBFt.',cost:'0 (t\u1EF1 x\u1EED l\xFD)'},
          {title:'Pin xu\u1ED1ng nhanh khi d\xF9ng \u0111i\u1EC1u h\xF2a nhi\u1EC1u',km:'B\u1EA5t k\u1EF3',severity:'medium',desc:'VF8 ti\xEAu th\u1EE5 \u0111i\u1EC7n \u0111i\u1EC1u h\xF2a kh\xE1 cao, l\xE0m gi\u1EA3m ph\u1EA1m vi ho\u1EA1t \u0111\u1ED9ng 15-25% trong m\xF9a h\xE8. D\xF9ng ch\u1EBF \u0111\u1ED9 pre-cooling khi xe \u0111ang s\u1EA1c \u0111\u1EC3 ti\u1EBFt ki\u1EC7m pin.',cost:'0 (thay \u0111\u1ED5i th\xF3i quen)'},
          {title:'L\u1ED7i c\u1EA3m bi\u1EBFn \u0111\u1ED7 xe sau m\u01B0a',km:'B\u1EA5t k\u1EF3',severity:'low',desc:'C\u1EA3m bi\u1EBFn radar/si\xEAu \xE2m ph\xEDa sau b\xE1o c\u1EA3nh b\xE1o gi\u1EA3 sau khi m\u01B0a ho\u1EB7c r\u1EEDa xe. V\u1EC7 sinh khu v\u1EF1c c\u1EA3m bi\u1EBFn v\xE0 ch\u1EDD kh\xF4.',cost:'0'},
          {title:'Ti\u1EBFng rung nh\u1EF1a taplo khi ch\u1EA1y \u0111\u01B0\u1EDDng x\u1EA5u',km:'10.000+ km',severity:'low',desc:'\u1ED0p nh\u1EF1a n\u1ED9i th\u1EA5t VF8 rung r\xEDt \u1EDF \u0111\u01B0\u1EDDng x\u1EA5u. VinFast \u0111\xE3 c\u1EA3i thi\u1EC7n t\u1EEB l\xF4 s\u1EA3n xu\u1EA5t cu\u1ED1i 2023. Y\xEAu c\u1EA7u \u0111\u1EA1i l\xFD ki\u1EC3m tra v\xE0 si\u1EBFt l\u1EA1i.',cost:'0 (b\u1EA3o h\xE0nh)'},
        ],
        spareParts:[
          {name:'Ki\u1EC3m tra pin \u0111\u1ECBnh k\u1EF3',interval:'12 th\xE1ng',cost:'0 (t\u1EA1i \u0111\u1EA1i l\xFD VinFast)',note:'VinFast b\u1EA3o h\xE0nh pin 8 n\u0103m/160.000km'},
          {name:'D\u1EA7u phanh DOT 4',interval:'2 n\u0103m',cost:'200-400k',note:'Xe \u0111i\u1EC7n \xEDt d\xF9ng phanh ma s\xE1t nh\u1EDD phanh t\xE1i sinh'},
          {name:'L\u1ECDc gi\xF3 cabin',interval:'15.000 km',cost:'150-300k',note:''},
          {name:'G\u1EA1t m\u01B0a',interval:'12 th\xE1ng',cost:'150-300k/c\u1EB7p',note:''},
          {name:'M\xE1 phanh',interval:'80.000-100.000 km',cost:'1.5-3tr/c\u1EB7p',note:'Xe \u0111i\u1EC7n d\xF9ng phanh t\xE1i sinh n\xEAn m\xE1 phanh b\u1EC1n h\u01A1n nhi\u1EC1u'},
          {name:'L\u1ED1p xe',interval:'40.000-60.000 km',cost:'3-5tr/l\u1ED1p',note:'Xe \u0111i\u1EC7n n\u1EB7ng h\u01A1n - l\u1ED1p m\xF2n nhanh h\u01A1n xe x\u0103ng c\xF9ng size'},
        ]},
      {name:'VF 9',type:'ev',bh:25,desc:'SUV \u0111i\u1EC7n 7 ch\u1ED7 c\u1EE1 D',monthly:{bh:2083,fuel:1400,reg:0,maint:200},slug:'vf-9',priceFrom:1059,priceTo:1259,
        variants:[
          {name:'VF 9 Eco',price:1059,engine:'EV 300kW 438km',fuel:'\u0110i\u1EC7n',seats:7,drive:'AWD'},
          {name:'VF 9 Plus',price:1259,engine:'EV 300kW 438km',fuel:'\u0110i\u1EC7n',seats:7,drive:'AWD'},
        ]},
      {name:'VF 7',type:'ev',bh:13,desc:'SUV-coupe \u0111i\u1EC7n',monthly:{bh:1083,fuel:950,reg:0,maint:130},slug:'vf-7',priceFrom:799,priceTo:919,
        variants:[
          {name:'VF 7 Eco',price:799,engine:'EV 150kW 350km',fuel:'\u0110i\u1EC7n',seats:5,drive:'FWD'},
          {name:'VF 7 Plus',price:919,engine:'EV 260kW 431km',fuel:'\u0110i\u1EC7n',seats:5,drive:'AWD'},
        ]},
      {name:'VF 6',type:'ev',bh:10,desc:'Crossover \u0111i\u1EC7n t\u1EA7m trung',monthly:{bh:833,fuel:800,reg:0,maint:120},slug:'vf-6',priceFrom:549,priceTo:599,
        variants:[
          {name:'VF 6 Eco',price:549,engine:'EV 100kW 381km',fuel:'\u0110i\u1EC7n',seats:5,drive:'FWD'},
          {name:'VF 6 Plus',price:599,engine:'EV 125kW 399km',fuel:'\u0110i\u1EC7n',seats:5,drive:'FWD'},
        ]},
      {name:'VF 5',type:'ev',bh:7,desc:'SUV \u0111i\u1EC7n \u0111\xF4 th\u1ECB',monthly:{bh:583,fuel:650,reg:0,maint:100},slug:'vf-5',priceFrom:399,priceTo:479,
        variants:[
          {name:'VF 5 Standard',price:399,engine:'EV 62kW 248km',fuel:'\u0110i\u1EC7n',seats:5,drive:'FWD'},
          {name:'VF 5 Plus',price:479,engine:'EV 100kW 326km',fuel:'\u0110i\u1EC7n',seats:5,drive:'FWD'},
        ]},
      {name:'VF 3',type:'ev',bh:5,desc:'Mini EV \u0111\xF4 th\u1ECB',monthly:{bh:417,fuel:500,reg:0,maint:80},slug:'vf-3',priceFrom:239,priceTo:299,
        variants:[
          {name:'VF 3 Standard',price:239,engine:'EV 42kW 210km',fuel:'\u0110i\u1EC7n',seats:4,drive:'FWD'},
          {name:'VF 3 Plus',price:299,engine:'EV 42kW 215km',fuel:'\u0110i\u1EC7n',seats:4,drive:'FWD'},
        ]},
    ],
    topInsurers:[
      {name:'MIC Insurance',color:'#E52A2A',badge:'\u0110\u1ED1i t\xE1c ch\xEDnh th\u1EE9c VinFast',reason:'\u0110\u1ED1i t\xE1c BH ch\xEDnh th\u1EE9c c\u1EE7a VinFast. Kinh nghi\u1EC7m x\u1EED l\xFD b\u1ED3i th\u01B0\u1EDDng xe \u0111i\u1EC7n VF, pin v\xE0 motor \u0111\u01B0\u1EE3c b\u1ED3i th\u01B0\u1EDDng \u0111\xFAng quy tr\xECnh.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Quy\u1EC1n l\u1EE3i pin EV',reason:'\u0110\xE3 c\xF3 g\xF3i quy\u1EC1n l\u1EE3i pin \u0111i\u1EC7n ri\xEAng cho VinFast, x\u1EED l\xFD b\u1ED3i th\u01B0\u1EDDng nhanh.'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'\u1ED4n \u0111\u1ECBnh',reason:'\u0110ang m\u1EDF r\u1ED9ng n\u0103ng l\u1EF1c x\u1EED l\xFD xe \u0111i\u1EC7n VinFast, uy t\xEDn l\xE2u \u0111\u1EDDi.'},
    ],
    notes:[
      {q:'Pin xe \u0111i\u1EC7n VinFast c\xF3 \u0111\u01B0\u1EE3c b\u1EA3o v\u1EC7 kh\xF4ng?',a:'G\xF3i b\u1EA3o v\u1EC7 xe th\u01B0\u1EDDng x\u1EED l\xFD ph\u1EA7n th\xE2n xe v\xE0 b\u1ED9 ph\u1EADn c\u01A1 kh\xED. N\u1EBFu c\u1EA7n ph\u1EA1m vi ri\xEAng cho pin, n\xEAn ki\u1EC3m tra r\xF5 \u0111i\u1EC1u kho\u1EA3n c\u1EE7a t\u1EEBng nh\xE0 cung c\u1EA5p tr\u01B0\u1EDBc khi mua.'},
      {q:'Th\u1EE7y k\xEDch tr\xEAn xe \u0111i\u1EC7n VinFast x\u1EED l\xFD th\u1EBF n\xE0o?',a:'VinFast \u0111\u01B0\u1EE3c thi\u1EBFt k\u1EBF IP67 (ch\u1ECBu ng\xE2m 1m/30 ph\xFAt). Tuy nhi\xEAn n\u1EBFu n\u01B0\u1EDBc v\xE0o motor ho\u1EB7c h\u1ED9p \u0111i\u1EC7n do tai n\u1EA1n nghi\xEAm tr\u1ECDng, c\u1EA7n ch\u1ECDn g\xF3i c\xF3 ph\u1EA1m vi x\u1EED l\xFD xe \u0111i\u1EC7n r\xF5 r\xE0ng. Chi ph\xED s\u1EEDa motor VF 8 kho\u1EA3ng 80-150tr.'},
      {q:'Chi ph\xED nu\xF4i xe \u0111i\u1EC7n VinFast th\u1EF1c s\u1EF1 r\u1EBB h\u01A1n xe x\u0103ng bao nhi\xEAu?',a:'\u01AF\u1EDBc t\xEDnh VF 8 (1.200km/th\xE1ng): \u0111i\u1EC7n t\u1EA1i nh\xE0 ~1.1tr vs x\u0103ng Toyota Fortuner ~3.2tr. C\u1ED9ng th\xEAm mi\u1EC5n ph\xED \u0111\u01B0\u1EDDng b\u1ED9 v\xE0 b\u1EA3o d\u01B0\u1EE1ng th\u1EA5p h\u01A1n 60-70%, t\u1ED5ng ti\u1EBFt ki\u1EC7m ~3-4tr/th\xE1ng so v\u1EDBi SUV x\u0103ng c\xF9ng ph\xE2n kh\xFAc.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2606\u2606',level:'mid'},
      {label:'Chi ph\xED \u0111i\u1EC7n',val:'R\u1EBB nh\u1EA5t',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Th\u1EA5p nh\u1EA5t',level:'good'},
      {label:'Eco',val:'Zero emission',level:'high'},
    ],
    insight:{owners:4920,topModel:'VF 8',monthly:2640,vs_estimate:-38.2,hcm:2810,hn:2430,breakdown:{bh:1250,fuel:1100,road:0,maint:150}},
    garages:[
      {name:'VinFast Smart Service - Ph\xFA M\u1EF9 H\u01B0ng',type:'official',city:'HCM',address:'Ph\xFA M\u1EF9 H\u01B0ng, Q.7',bh:['MIC','PVI'],claims:820,rating:4.8,note:'Trung t\xE2m d\u1ECBch v\u1EE5 VinFast ti\xEAu chu\u1EA9n cao nh\u1EA5t HCM. K\u1EF9 thu\u1EADt vi\xEAn EV chuy\xEAn bi\u1EC7t, OTA update t\u1EA1i ch\u1ED7.'},
      {name:'VinFast Smart Service - M\u1EF9 \u0110\xECnh',type:'official',city:'HN',address:'M\u1EF9 \u0110\xECnh, Nam T\u1EEB Li\xEAm',bh:['MIC','PVI'],claims:910,rating:4.8,note:'Trung t\xE2m d\u1ECBch v\u1EE5 VinFast l\u1EDBn nh\u1EA5t HN. X\u1EED l\xFD pin EV v\xE0 motor, c\xF3 xe VF thay th\u1EBF mi\u1EC5n ph\xED.'},
      {name:'VinFast Service - Th\u1EE7 \u0110\u1EE9c',type:'official',city:'HCM',address:'Th\u1EE7 \u0110\u1EE9c, HCM',bh:['MIC'],claims:540,rating:4.7,note:'Ph\u1EE7 khu \u0110\xF4ng HCM. Chuy\xEAn VF 8 v\xE0 VF 9, nhanh nh\u1EA5t khu v\u1EF1c theo \u0111\xE1nh gi\xE1 ch\u1EE7 xe MoMo.'},
    ],
    scenarios:['thuykick','collision','theft'],
  },
  mercedes:{
    name:'Mercedes',origin:'\u0110\u1EE9c',color:'#1C1C1C',tagline:'The best or nothing \xB7 Xe sang h\xE0ng \u0111\u1EA7u',
    fuels:['x\u0103ng','hybrid'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u xe sang h\xE0ng \u0111\u1EA7u th\u1EBF gi\u1EDBi t\u1EEB \u0110\u1EE9c. Mercedes C-Class v\xE0 GLC l\xE0 hai m\u1EABu b\xE1n ch\u1EA1y nh\u1EA5t ph\xE2n kh\xFAc sang t\u1EA1i Vi\u1EC7t Nam, \u0111\u01B0\u1EE3c l\u1EF1a ch\u1ECDn b\u1EDFi ph\xE2n kh\xFAc doanh nh\xE2n c\u1EA7n ph\u1EE5 t\xF9ng genuine v\xE0 d\u1ECBch v\u1EE5 ch\xEDnh h\xE3ng.',
    models:[
      {name:'C-Class',type:'sedan',bh:28,desc:'Sedan sang h\u1EA1ng C',monthly:{bh:2333,fuel:3500,reg:380,maint:1500},slug:'c-class',priceFrom:1599,priceTo:2099},
      {name:'E-Class',type:'sedan',bh:40,desc:'Sedan sang h\u1EA1ng D',monthly:{bh:3333,fuel:4000,reg:450,maint:2000},slug:'e-class',priceFrom:2099,priceTo:2799},
      {name:'GLC',type:'suv',bh:35,desc:'SUV 5 ch\u1ED7 premium',monthly:{bh:2917,fuel:3800,reg:400,maint:1800},slug:'glc',priceFrom:2099,priceTo:2599},
      {name:'GLE',type:'suv',bh:55,desc:'SUV 7 ch\u1ED7 cao c\u1EA5p',monthly:{bh:4583,fuel:4800,reg:500,maint:2500},slug:'gle',priceFrom:3099,priceTo:3899},
      {name:'S-Class',type:'sedan',bh:85,desc:'Sedan flagship',monthly:{bh:7083,fuel:5500,reg:700,maint:4000},slug:'s-class',priceFrom:4269,priceTo:7699},
    ],
    topInsurers:[
      {name:'DBY Insurance',color:'#1C1C1C',badge:'Chuy\xEAn xe sang BMW/Merc',reason:'\u0110\u1ED1i t\xE1c garage ch\xEDnh h\xE3ng Mercedes-Benz Vietnam. Ph\u1EE5 t\xF9ng genuine, k\u1EF9 thu\u1EADt vi\xEAn Mercedes-certified.'},
      {name:'GIC Insurance',color:'#2D6B3F',badge:'Xe nh\u1EADp ch\xE2u \xC2u',reason:'Chuy\xEAn xe nh\u1EADp kh\u1EA9u ch\xE2u \xC2u, \u0111\u1ECBnh gi\xE1 v\xE0 b\u1ED3i th\u01B0\u1EDDng \u0111\xFAng gi\xE1 tr\u1ECB th\u1EF1c t\u1EBF xe sang.'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'Uy t\xEDn',reason:'Cam k\u1EBFt b\u1ED3i th\u01B0\u1EDDng \u0111\xFAng h\u1EA1n cho xe sang Mercedes.'},
    ],
    notes:[
      {q:'Ph\u1EE5 t\xF9ng Mercedes ch\xEDnh h\xE3ng vs OEM khi b\u1ED3i th\u01B0\u1EDDng kh\xE1c nhau th\u1EBF n\xE0o?',a:'Nh\xE0 BH m\u1EB7c \u0111\u1ECBnh b\u1ED3i th\u01B0\u1EDDng ph\u1EE5 t\xF9ng OEM (ch\u1EA5t l\u01B0\u1EE3ng t\u01B0\u01A1ng \u0111\u01B0\u01A1ng, kh\xF4ng ph\u1EA3i genuine). V\u1EDBi Mercedes, nhi\u1EC1u ch\u1EE7 xe mu\u1ED1n genuine parts. C\u1EA7n ch\u1ECDn DBY c\xF3 th\u1ECFa thu\u1EADn garage Mercedes ch\xEDnh h\xE3ng, ho\u1EB7c th\xEAm \u0111i\u1EC1u kho\u1EA3n "genuine parts" v\xE0o h\u1EE3p \u0111\u1ED3ng \u2014 ph\xED cao h\u01A1n 10-20%.'},
      {q:'H\u1EC7 th\u1ED1ng \u0111i\u1EC7n t\u1EED ph\u1EE9c t\u1EA1p (MBUX, h\u1EC7 th\u1ED1ng an to\xE0n) h\u01B0 sau tai n\u1EA1n c\xF3 \u0111\u01B0\u1EE3c BH kh\xF4ng?',a:'C\xF3, n\u1EBFu h\u01B0 h\u1ECFng tr\u1EF1c ti\u1EBFp do tai n\u1EA1n. Gi\xE1m \u0111\u1ECBnh vi\xEAn c\u1EA7n x\xE1c nh\u1EADn li\u1EC7u l\u1ED7i \u0111i\u1EC7n t\u1EED l\xE0 h\u1EADu qu\u1EA3 tai n\u1EA1n hay l\u1ED7i ph\u1EA7n m\u1EC1m c\xF3 t\u1EEB tr\u01B0\u1EDBc. Garage Mercedes authorized c\xF3 kh\u1EA3 n\u0103ng x\xE1c \u0111\u1ECBnh ch\xEDnh x\xE1c \u2014 l\xFD do n\xEAn ch\u1ECDn DBY.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2606\u2606',level:'mid'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'R\u1EA5t cao',level:'neutral'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Genuine kh\xF3',level:'neutral'},
      {label:'\u0110\u1EB3ng c\u1EA5p',val:'H\xE0ng \u0111\u1EA7u',level:'high'},
    ],
    insight:{owners:890,topModel:'C-Class',monthly:8230,vs_estimate:+3.1,hcm:8910,hn:7420,breakdown:{bh:2333,fuel:3500,road:380,maint:1500}},
    garages:[
      {name:'Mercedes-Benz Vietnam Star - Tr\u01B0\u1EDDng S\u01A1n',type:'official',city:'HCM',address:'Tr\u01B0\u1EDDng S\u01A1n, Q.T\xE2n B\xECnh',bh:['DBY','GIC'],claims:310,rating:4.9,note:'\u0110\u1EA1i l\xFD Mercedes ch\xEDnh h\xE3ng h\xE0ng \u0111\u1EA7u HCM. Ph\u1EE5 t\xF9ng genuine Germany, k\u1EF9 thu\u1EADt vi\xEAn Mercedes-certified.'},
      {name:'Mercedes-Benz Vietnam Star - H\xE0o Nam',type:'official',city:'HN',address:'H\xE0o Nam, \u0110\u1ED1ng \u0110a',bh:['DBY','GIC'],claims:270,rating:4.9,note:'Showroom flagship HN. Dedicated claims lane cho xe sang, th\u1EDDi gian x\u1EED l\xFD \u01B0u ti\xEAn.'},
      {name:'Star Auto Th\u1EA3o \u0110i\u1EC1n',type:'authorized',city:'HCM',address:'Th\u1EA3o \u0110i\u1EC1n, Q.2',bh:['DBY'],claims:120,rating:4.8,note:'Garage cao c\u1EA5p khu Th\u1EA3o \u0110i\u1EC1n. Chuy\xEAn xe sang ch\xE2u \xC2u, ph\u1EE5 t\xF9ng genuine import, k\u1EF9 thu\u1EADt vi\xEAn 15+ n\u0103m kinh nghi\u1EC7m Mercedes.'},
    ],
    scenarios:['collision','theft','parttheft'],
  },
  bmw:{
    name:'BMW',origin:'\u0110\u1EE9c',color:'#1C69D4',tagline:'Sheer Driving Pleasure \xB7 Ni\u1EC1m vui l\xE1i xe',
    fuels:['x\u0103ng','hybrid'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u xe sang \u0110\u1EE9c n\u1ED5i ti\u1EBFng v\u1EDBi tri\u1EBFt l\xFD l\xE1i th\u1EC3 thao thu\u1EA7n t\xFAy. BMW X3 v\xE0 3 Series ph\u1ED5 bi\u1EBFn nh\u1EA5t t\u1EA1i Vi\u1EC7t Nam, \u0111\u01B0\u1EE3c y\xEAu th\xEDch b\u1EDFi c\u1EA3m gi\xE1c l\xE1i s\u1EAFc n\xE9t v\xE0 c\xF4ng ngh\u1EC7 BMW Intelligent Personal Assistant.',
    models:[
      {name:'3 Series',type:'sedan',bh:30,desc:'Sedan sporty premium',monthly:{bh:2500,fuel:3800,reg:400,maint:1800},slug:'3-series',priceFrom:1799,priceTo:2499},
      {name:'5 Series',type:'sedan',bh:45,desc:'Sedan h\u1EA1ng D cao c\u1EA5p',monthly:{bh:3750,fuel:4200,reg:480,maint:2200},slug:'5-series',priceFrom:2799,priceTo:3499},
      {name:'X3',type:'suv',bh:35,desc:'SUV 5 ch\u1ED7 ph\u1ED5 bi\u1EBFn nh\u1EA5t',monthly:{bh:2917,fuel:3900,reg:420,maint:1900},slug:'x3',priceFrom:1999,priceTo:2699},
      {name:'X5',type:'suv',bh:60,desc:'SUV 7 ch\u1ED7 flagship',monthly:{bh:5000,fuel:5000,reg:550,maint:2800},slug:'x5',priceFrom:3699,priceTo:4899},
    ],
    topInsurers:[
      {name:'DBY Insurance',color:'#1C1C1C',badge:'Chuy\xEAn BMW/Mercedes',reason:'\u0110\u1ED1i t\xE1c garage BMW ch\xEDnh h\xE3ng. K\u1EF9 thu\u1EADt vi\xEAn BMW-certified, ph\u1EE5 t\xF9ng genuine Bavarian \u0111\u01B0\u1EE3c duy\u1EC7t t\u1EF1 \u0111\u1ED9ng.'},
      {name:'GIC Insurance',color:'#2D6B3F',badge:'Xe nh\u1EADp ch\xE2u \xC2u',reason:'Chuy\xEAn xe nh\u1EADp ch\xE2u \xC2u, \u0111\u1ECBnh gi\xE1 t\u1ED1t v\xE0 b\u1ED3i th\u01B0\u1EDDng \u0111\xFAng gi\xE1 tr\u1ECB th\u1EF1c t\u1EBF BMW.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Nhanh nh\u1EA5t',reason:'X\u1EED l\xFD b\u1ED3i th\u01B0\u1EDDng 3 ng\xE0y \u2014 ki\u1EC3m tra th\u1ECFa thu\u1EADn garage BMW tr\u01B0\u1EDBc khi k\xFD h\u1EE3p \u0111\u1ED3ng.'},
    ],
    notes:[
      {q:'BMW xDrive vs sDrive \u1EA3nh h\u01B0\u1EDFng ph\xED b\u1EA3o hi\u1EC3m th\u1EBF n\xE0o?',a:'xDrive (4WD) c\xF3 gi\xE1 xe cao h\u01A1n sDrive c\xF9ng model ~5-10%, n\xEAn ph\xED BH th\xE2n v\u1ECF c\u0169ng cao h\u01A1n t\u01B0\u01A1ng \u1EE9ng. H\u1EC7 th\u1ED1ng xDrive ph\u1EE9c t\u1EA1p h\u01A1n n\xEAn chi ph\xED s\u1EEDa ch\u1EEFa sau tai n\u1EA1n c\u0169ng cao h\u01A1n.'},
      {q:'BMW mua t\u1EA1i \u0111\u1EA1i l\xFD ch\xEDnh h\xE3ng vs nh\u1EADp t\u01B0 c\xF3 \u1EA3nh h\u01B0\u1EDFng BH kh\xF4ng?',a:'\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng: b\u1EA3o h\xE0nh \u0111\u1EA7y \u0111\u1EE7, ph\u1EE5 t\xF9ng genuine s\u1EB5n c\xF3. Nh\u1EADp t\u01B0: ph\u1EA3i ki\u1EC3m tra VIN \u0111\u1EC3 x\xE1c nh\u1EADn ph\xF9 h\u1EE3p ti\xEAu chu\u1EA9n VN, ph\xED BH t\u01B0\u01A1ng \u0111\u01B0\u01A1ng nh\u01B0ng \u0111\u1ECBnh gi\xE1 xe c\xF3 th\u1EC3 kh\xE1c. DBY v\xE0 GIC chuy\xEAn x\u1EED l\xFD c\u1EA3 2 tr\u01B0\u1EDDng h\u1EE3p.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2605\u2606',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'R\u1EA5t cao',level:'neutral'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Genuine kh\xF3',level:'neutral'},
      {label:'C\u1EA3m gi\xE1c l\xE1i',val:'Sporty #1',level:'high'},
    ],
    insight:{owners:720,topModel:'X3',monthly:9120,vs_estimate:+2.4,hcm:9780,hn:8310,breakdown:{bh:2917,fuel:3900,road:420,maint:1900}},
    garages:[
      {name:'BMW Euro Auto - Tr\u01B0\u1EDDng S\u01A1n',type:'official',city:'HCM',address:'Tr\u01B0\u1EDDng S\u01A1n, Q.T\xE2n B\xECnh',bh:['DBY','GIC'],claims:240,rating:4.9,note:'\u0110\u1EA1i l\xFD BMW ch\xEDnh h\xE3ng l\u1EDBn nh\u1EA5t VN. K\u1EF9 thu\u1EADt vi\xEAn BMW-certified, ph\u1EE5 t\xF9ng Bavarian genuine, diagnostic ch\xEDnh h\xE3ng.'},
      {name:'BMW Euro Auto - Tr\u1EA7n Duy H\u01B0ng',type:'official',city:'HN',address:'Tr\u1EA7n Duy H\u01B0ng, C\u1EA7u Gi\u1EA5y',bh:['DBY','GIC'],claims:200,rating:4.8,note:'Flagship showroom HN. Dedicated service lane cho claim BH, thay xe l\u1EDBp lux khi s\u1EEDa ch\u1EEFa d\xE0i ng\xE0y.'},
      {name:'Prestige Auto Th\u1EA3o \u0110i\u1EC1n',type:'authorized',city:'HCM',address:'Qu\u1EADn 2, HCM',bh:['GIC'],claims:90,rating:4.8,note:'Chuy\xEAn BMW v\xE0 xe sang ch\xE2u \xC2u. Gi\xE1 t\u1ED1t h\u01A1n \u0111\u1EA1i l\xFD 15%, kh\xF4ng d\xF9ng ph\u1EE5 t\xF9ng OEM, cam k\u1EBFt genuine.'},
    ],
    scenarios:['collision','theft','parttheft'],
  },
  lexus:{
    name:'Lexus',origin:'Nh\u1EADt B\u1EA3n',color:'#1C1C1C',tagline:'Sang tr\u1ECDng \xB7 \u0110\xE1ng tin \xB7 Tr\u1EA3i nghi\u1EC7m \u0111\u1EC9nh cao',
    fuels:['x\u0103ng','hybrid'],popular:true,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u luxury c\u1EE7a Toyota v\u1EDBi \u0111\u1ED9 tin c\u1EADy Nh\u1EADt B\u1EA3n v\xE0 tr\u1EA3i nghi\u1EC7m n\u1ED9i th\u1EA5t \u0111\u1EB3ng c\u1EA5p. Lexus d\u1EABn \u0111\u1EA7u ph\xE2n kh\xFAc premium t\u1EA1i Vi\u1EC7t Nam nh\u1EDD chi ph\xED b\u1EA3o d\u01B0\u1EE1ng th\u1EA5p h\u01A1n Mercedes v\xE0 BMW c\xF9ng ph\xE2n kh\xFAc.',
    models:[
      {name:'NX',type:'suv',bh:33,desc:'SUV compact premium b\xE1n ch\u1EA1y nh\u1EA5t',monthly:{bh:2750,fuel:2800,reg:300,maint:600},slug:'nx',priceFrom:1999,priceTo:2599},
      {name:'RX',type:'suv',bh:45,desc:'SUV h\u1EA1ng D flagship',monthly:{bh:3750,fuel:3000,reg:400,maint:700},slug:'rx',priceFrom:2599,priceTo:3299},
      {name:'ES',type:'sedan',bh:30,desc:'Sedan business ph\u1ED5 bi\u1EBFn',monthly:{bh:2500,fuel:2600,reg:280,maint:550},slug:'es',priceFrom:1799,priceTo:2399},
      {name:'LX',type:'suv',bh:100,desc:'SUV flagship h\u1EA1ng sang',monthly:{bh:8333,fuel:5200,reg:900,maint:1500},slug:'lx',priceFrom:8099,priceTo:9799},
      {name:'IS',type:'sedan',bh:26,desc:'Sedan sporty h\u1EA1ng C',monthly:{bh:2167,fuel:2600,reg:260,maint:500},slug:'is',priceFrom:1599,priceTo:2099},
      {name:'UX',type:'suv',bh:22,desc:'Crossover \u0111\xF4 th\u1ECB hybrid',monthly:{bh:1833,fuel:2000,reg:230,maint:420},slug:'ux',priceFrom:1699,priceTo:1999},
    ],
    topInsurers:[
      {name:'PTI Insurance',color:'#003087',badge:'Chuy\xEAn xe sang',reason:'T\u1EF7 l\u1EC7 ch\u1EA5p nh\u1EADn ph\u1EE5 t\xF9ng genuine Lexus cao nh\u1EA5t th\u1ECB tr\u01B0\u1EDDng. Th\u1ECFa thu\u1EADn tr\u1EF1c ti\u1EBFp v\u1EDBi TMV.'},
      {name:'Liberty Insurance',color:'#2E4099',badge:'Garage \u1EE7y quy\u1EC1n',reason:'M\u1EA1ng l\u01B0\u1EDBi garage \u1EE7y quy\u1EC1n Lexus. Ph\u1EE5 t\xF9ng genuine \u0111\u01B0\u1EE3c duy\u1EC7t kh\xF4ng c\u1EA7n gi\xE1m \u0111\u1ECBnh ri\xEAng.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Nhanh nh\u1EA5t',reason:'B\u1ED3i th\u01B0\u1EDDng 3-4 ng\xE0y. Ph\u1EE7 t\u1ED1t t\u1EA1i HCM v\xE0 H\xE0 N\u1ED9i \u2014 hai th\u1ECB tr\u01B0\u1EDDng Lexus l\u1EDBn nh\u1EA5t VN.'},
    ],
    notes:[
      {q:'Lexus c\xF3 gi\u1EEF gi\xE1 t\u1ED1t kh\xF4ng so v\u1EDBi Mercedes v\xE0 BMW?',a:'T\u1ED1t h\u01A1n \u0111\xE1ng k\u1EC3. Lexus ES m\u1EA5t ~15% sau 3 n\u0103m, trong khi E-Class m\u1EA5t ~25-30%. Ngu\u1ED3n cung ph\u1EE5 t\xF9ng \u1ED5n \u0111\u1ECBnh t\u1EEB TMV gi\xFAp gi\xE1 d\u1ECBch v\u1EE5 d\u1EC5 ki\u1EC3m so\xE1t.'},
      {q:'B\u1EA3o hi\u1EC3m th\xE2n v\u1ECF Lexus c\xF3 kh\xE1c xe ph\u1ED5 th\xF4ng kh\xF4ng?',a:'Ph\xED cao h\u01A1n v\xEC gi\xE1 tr\u1ECB xe cao, nh\u01B0ng ph\u1EE5 t\xF9ng genuine Lexus \u0111\u01B0\u1EE3c nhi\u1EC1u NB duy\u1EC7t tr\u1EF1c ti\u1EBFp qua th\u1ECFa thu\u1EADn v\u1EDBi TMV. N\xEAn ch\u1ECDn NB c\xF3 authorized garage Lexus \u0111\u1EC3 tr\xE1nh ch\u1EDD gi\xE1m \u0111\u1ECBnh.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2605\u2605',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Th\u1EA5p vs h\u1EA1ng',level:'good'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Genuine s\u1EB5n',level:'good'},
      {label:'Garage',val:'H\u1EA1n ch\u1EBF',level:'warn'},
    ],
    insight:{owners:1240,topModel:'NX',monthly:6450,vs_estimate:+1.2,hcm:7200,hn:5600,breakdown:{bh:2750,fuel:2800,road:300,maint:600}},
    garages:[
      {name:'Lexus Th\u0103ng Long',type:'official',city:'HN',address:'Ph\u1EA1m H\xF9ng, Nam T\u1EEB Li\xEAm',bh:['PTI','Liberty'],claims:420,rating:4.9,note:'Showroom flagship mi\u1EC1n B\u1EAFc. K\u1EF9 thu\u1EADt vi\xEAn \u0111\u01B0\u1EE3c \u0111\xE0o t\u1EA1o t\u1EA1i Nh\u1EADt, d\u1ECBch v\u1EE5 xe thay th\u1EBF Lexus.'},
      {name:'Lexus S\xE0i G\xF2n',type:'official',city:'HCM',address:'241 \u0110i\u1EC7n Bi\xEAn Ph\u1EE7, B\xECnh Th\u1EA1nh',bh:['PTI','Liberty'],claims:510,rating:4.9,note:'Showroom flagship mi\u1EC1n Nam. D\u1ECBch v\u1EE5 h\u1EA1ng sang, ph\u1EE5 t\xF9ng genuine nh\u1EADp tr\u1EF1c ti\u1EBFp t\u1EEB Nh\u1EADt.'},
      {name:'Lexus \u0110\xE0 N\u1EB5ng',type:'official',city:'\u0110\xE0 N\u1EB5ng',address:'L\xEA V\u0103n Hi\u1EBFn, Ng\u0169 H\xE0nh S\u01A1n',bh:['PTI'],claims:180,rating:4.8,note:'\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng duy nh\u1EA5t mi\u1EC1n Trung.'},
    ],
    scenarios:['collision','glass','parked'],
  },
  audi:{
    name:'Audi',origin:'\u0110\u1EE9c',color:'#BB0A14',tagline:'C\xF4ng ngh\u1EC7 ti\xEAn ti\u1EBFn \xB7 Thi\u1EBFt k\u1EBF hi\u1EC7n \u0111\u1EA1i \xB7 Quattro',
    fuels:['x\u0103ng','phev'],popular:true,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u \u0110\u1EE9c v\u1EDBi thi\u1EBFt k\u1EBF \u0111\u01B0\u01A1ng \u0111\u1EA1i v\xE0 h\u1EC7 th\u1ED1ng AWD Quattro n\u1ED5i ti\u1EBFng. Audi h\xFAt \u0111\u1ED1i t\u01B0\u1EE3ng kh\xE1ch h\xE0ng tr\u1EBB d\u01B0\u1EDBi 45 tu\u1ED5i nh\u1EDD giao di\u1EC7n MMI ti\xEAn ti\u1EBFn v\xE0 exterior design n\u1ED5i b\u1EADt h\u01A1n Mercedes.',
    models:[
      {name:'Q5',type:'suv',bh:28,desc:'SUV h\u1EA1ng C b\xE1n ch\u1EA1y nh\u1EA5t',monthly:{bh:2333,fuel:2800,reg:270,maint:700},slug:'q5',priceFrom:1999,priceTo:2599},
      {name:'Q7',type:'suv',bh:42,desc:'SUV 7 ch\u1ED7 h\u1EA1ng D',monthly:{bh:3500,fuel:3600,reg:400,maint:900},slug:'q7',priceFrom:2999,priceTo:3799},
      {name:'A6',type:'sedan',bh:30,desc:'Sedan business flagship',monthly:{bh:2500,fuel:2800,reg:290,maint:750},slug:'a6',priceFrom:2199,priceTo:2899},
      {name:'A4',type:'sedan',bh:20,desc:'Sedan h\u1EA1ng C entry premium',monthly:{bh:1667,fuel:2600,reg:210,maint:600},slug:'a4',priceFrom:1399,priceTo:1899},
      {name:'Q3',type:'suv',bh:20,desc:'SUV compact entry',monthly:{bh:1667,fuel:2400,reg:210,maint:550},slug:'q3',priceFrom:1399,priceTo:1799},
      {name:'Q8',type:'suv',bh:60,desc:'SUV coupe flagship',monthly:{bh:5000,fuel:4000,reg:600,maint:1200},slug:'q8',priceFrom:3599,priceTo:4599},
    ],
    topInsurers:[
      {name:'PTI Insurance',color:'#003087',badge:'Chuy\xEAn xe \u0110\u1EE9c',reason:'T\u1EF7 l\u1EC7 duy\u1EC7t ph\u1EE5 t\xF9ng genuine Audi t\u1ED1t nh\u1EA5t. Th\u1ECFa thu\u1EADn v\u1EDBi c\xE1c garage \u1EE7y quy\u1EC1n Audi.'},
      {name:'AXA Insurance',color:'#00008F',badge:'Xe nh\u1EADp kh\u1EA9u',reason:'Kinh nghi\u1EC7m b\u1ED3i th\u01B0\u1EDDng xe CBU nh\u1EADp kh\u1EA9u. Ph\xF9 h\u1EE3p Audi nh\u1EADp t\u1EEB ch\xE2u \xC2u.'},
      {name:'Liberty Insurance',color:'#2E4099',badge:'Nhanh',reason:'X\u1EED l\xFD 3-4 ng\xE0y t\u1EA1i HCM v\xE0 H\xE0 N\u1ED9i. T\u1ED1t cho xe Audi th\u01B0\u1EDDng xuy\xEAn s\u1EED d\u1EE5ng \u0111\xF4 th\u1ECB.'},
    ],
    notes:[
      {q:'Audi TFSI v\xE0 TDI b\u1EA3o hi\u1EC3m c\xF3 kh\xE1c nhau kh\xF4ng?',a:'TDI (diesel) ph\xED BH th\u01B0\u1EDDng cao h\u01A1n 3-5% v\xEC chi ph\xED s\u1EEDa \u0111\u1ED9ng c\u01A1 diesel cao h\u01A1n. Tuy nhi\xEAn ti\xEAu hao nhi\xEAn li\u1EC7u th\u1EA5p h\u01A1n \u0111\xE1ng k\u1EC3. Ph\u1EA7n l\u1EDBn Audi b\xE1n t\u1EA1i VN l\xE0 TFSI (x\u0103ng).'},
      {q:'Ph\u1EE5 t\xF9ng Audi nh\u1EADp v\u1EC1 c\xF3 l\xE2u kh\xF4ng?',a:'Audi ch\xEDnh h\xE3ng do VW Group Vietnam ph\xE2n ph\u1ED1i. Ph\u1EE5 t\xF9ng th\xF4ng th\u01B0\u1EDDng c\xF3 s\u1EB5n 3-5 ng\xE0y. Ph\u1EE5 t\xF9ng hi\u1EBFm t\u1EEB \u0110\u1EE9c m\u1EA5t 2-4 tu\u1EA7n. N\xEAn ch\u1ECDn NB c\xF3 authorized garage Audi \u0111\u1EC3 kh\xF4ng ch\u1EDD ph\xE1n quy\u1EBFt ri\xEAng.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2606\u2606',level:'warn'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Kh\xE1 cao',level:'warn'},
      {label:'Ph\u1EE5 t\xF9ng',val:'2-4 tu\u1EA7n',level:'warn'},
      {label:'Garage',val:'T\u1EADp trung HCM/HN',level:'warn'},
    ],
    insight:{owners:890,topModel:'Q5',monthly:6600,vs_estimate:+1.8,hcm:7400,hn:5800,breakdown:{bh:2333,fuel:2800,road:270,maint:700}},
    garages:[
      {name:'Audi \u0110\u1ED1ng \u0110a',type:'official',city:'HN',address:'229 T\xE2y S\u01A1n, \u0110\u1ED1ng \u0110a',bh:['PTI','Liberty'],claims:310,rating:4.7,note:'Showroom Audi l\u1EDBn nh\u1EA5t H\xE0 N\u1ED9i. K\u1EF9 thu\u1EADt vi\xEAn \u0111\u01B0\u1EE3c \u0111\xE0o t\u1EA1o t\u1EA1i VWAG.'},
      {name:'Audi B\xECnh D\u01B0\u01A1ng',type:'official',city:'HCM',address:'Qu\u1ED1c l\u1ED9 13, B\xECnh D\u01B0\u01A1ng',bh:['PTI'],claims:280,rating:4.7,note:'\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng ph\u1EE5c v\u1EE5 khu v\u1EF1c HCM v\xE0 v\xF9ng ven.'},
    ],
    scenarios:['collision','glass','parttheft'],
  },
  volvo:{
    name:'Volvo',origin:'Th\u1EE5y \u0110i\u1EC3n',color:'#003057',tagline:'An to\xE0n h\xE0ng \u0111\u1EA7u \xB7 B\u1EAFc \xC2u \xB7 Xe \u0111i\u1EC7n h\xF3a',
    fuels:['x\u0103ng','phev','mild-hybrid'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Th\u1EE5y \u0110i\u1EC3n v\u1EDBi tri\u1EBFt l\xFD an to\xE0n h\xE0ng \u0111\u1EA7u th\u1EBF gi\u1EDBi. Volvo XC60 l\xE0 l\u1EF1a ch\u1ECDn c\u1EE7a gia \u0111\xECnh \u01B0u ti\xEAn an to\xE0n v\xE0 s\u1EB5n s\xE0ng tr\u1EA3 gi\xE1 cho thi\u1EBFt k\u1EBF Scandinavian t\u1ED1i gi\u1EA3n kh\xE1c bi\u1EC7t.',
    models:[
      {name:'XC60',type:'suv',bh:26,desc:'SUV h\u1EA1ng C b\xE1n ch\u1EA1y nh\u1EA5t',monthly:{bh:2167,fuel:2800,reg:260,maint:700},slug:'xc60',priceFrom:2049,priceTo:2599},
      {name:'XC90',type:'suv',bh:36,desc:'SUV 7 ch\u1ED7 flagship',monthly:{bh:3000,fuel:3200,reg:360,maint:900},slug:'xc90',priceFrom:3099,priceTo:3799},
      {name:'XC40',type:'suv',bh:14,desc:'SUV compact entry',monthly:{bh:1167,fuel:2400,reg:175,maint:550},slug:'xc40',priceFrom:1099,priceTo:1499},
      {name:'S90',type:'sedan',bh:30,desc:'Sedan h\u1EA1ng D Phev',monthly:{bh:2500,fuel:2600,reg:290,maint:800},slug:'s90',priceFrom:2299,priceTo:2799},
    ],
    topInsurers:[
      {name:'AXA Insurance',color:'#00008F',badge:'Xe ch\xE2u \xC2u',reason:'Chuy\xEAn xe nh\u1EADp Th\u1EE5y \u0110i\u1EC3n. Th\u1ECFa thu\u1EADn ph\u1EE5 t\xF9ng genuine v\u1EDBi Volvo Cars Vietnam.'},
      {name:'PTI Insurance',color:'#003087',badge:'B\u1ED3i th\u01B0\u1EDDng nhanh',reason:'X\u1EED l\xFD 4-5 ng\xE0y. T\u1ED1t cho xe Volvo d\xF9ng \u0111\xF4 th\u1ECB v\xE0 c\xF3 garage \u1EE7y quy\u1EC1n t\u1EA1i HCM/HN.'},
    ],
    notes:[
      {q:'Volvo PHEV c\xF3 b\u1EA3o hi\u1EC3m kh\xE1c xe x\u0103ng th\u01B0\u1EDDng kh\xF4ng?',a:'Kh\xF4ng kh\xE1c ph\xED. Pin PHEV b\u1ECB h\u01B0 h\u1ECFng do tai n\u1EA1n \u0111\u01B0\u1EE3c BH th\xE2n v\u1ECF b\u1ED3i th\u01B0\u1EDDng. Tuy nhi\xEAn chi ph\xED thay pin cao (200-400 tri\u1EC7u) n\xEAn n\xEAn ch\u1ECDn m\u1EE9c kh\u1EA5u tr\u1EEB th\u1EA5p cho xe PHEV.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2605\u2606',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Trung b\xECnh cao',level:'warn'},
      {label:'Ph\u1EE5 t\xF9ng',val:'\u0110\u1EB7t t\u1EEB Th\u1EE5y \u0110i\u1EC3n',level:'warn'},
      {label:'Garage',val:'\xCDt \u0111i\u1EC3m',level:'warn'},
    ],
    insight:{owners:420,topModel:'XC60',monthly:6127,vs_estimate:+2.1,hcm:6900,hn:5200,breakdown:{bh:2167,fuel:2800,road:260,maint:700}},
    garages:[
      {name:'Volvo C\u1EA7u Gi\u1EA5y',type:'official',city:'HN',address:'C\u1EA7u Gi\u1EA5y, H\xE0 N\u1ED9i',bh:['AXA','PTI'],claims:180,rating:4.8,note:'Showroom Volvo duy nh\u1EA5t t\u1EA1i H\xE0 N\u1ED9i. K\u1EF9 thu\u1EADt vi\xEAn \u0111\u01B0\u1EE3c \u0111\xE0o t\u1EA1o t\u1EEB Volvo Sweden.'},
      {name:'Volvo V\xF5 V\u0103n Ki\u1EC7t',type:'official',city:'HCM',address:'V\xF5 V\u0103n Ki\u1EC7t, Qu\u1EADn 6',bh:['AXA','PTI'],claims:220,rating:4.8,note:'Flagship showroom t\u1EA1i HCM. C\xF3 xe thay th\u1EBF Volvo khi xe \u0111ang s\u1EEDa.'},
    ],
    scenarios:['collision','glass','parked'],
  },
  mg:{
    name:'MG',origin:'Trung Qu\u1ED1c (SAIC)',color:'#C41E3A',tagline:'Trang b\u1ECB \u0111\u1EA7y \u0111\u1EE7 \xB7 Gi\xE1 c\u1EA1nh tranh \xB7 N\u1ED5i b\u1EADt',
    fuels:['x\u0103ng','phev'],popular:true,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Anh thu\u1ED9c t\u1EADp \u0111o\xE0n SAIC (Trung Qu\u1ED1c), n\u1ED5i ti\u1EBFng v\u1EC1 trang b\u1ECB \u0111\u1EA7y \u0111\u1EE7 v\u1EDBi gi\xE1 t\u1ED1t. MG ZS v\xE0 HS l\xE0 l\u1EF1a ch\u1ECDn h\xE0ng \u0111\u1EA7u cho ng\u01B0\u1EDDi mu\u1ED1n SUV \u0111\u1EB9p, nhi\u1EC1u t\xEDnh n\u0103ng m\xE0 kh\xF4ng mu\u1ED1n tr\u1EA3 gi\xE1 xe Nh\u1EADt hay H\xE0n.',
    models:[
      {name:'ZS',slug:'zs',type:'suv',bh:6,desc:'SUV \u0111\xF4 th\u1ECB c\u1EE1 nh\u1ECF b\xE1n ch\u1EA1y nh\u1EA5t',monthly:{bh:500,fuel:2000,reg:125,maint:200}},
      {name:'ZS EV',slug:'zs-ev',type:'ev',bh:7,desc:'SUV \u0111i\u1EC7n \u0111\xF4 th\u1ECB 320km/s\u1EA1c',monthly:{bh:583,fuel:500,reg:130,maint:170}},
      {name:'HS',slug:'hs',type:'suv',bh:8,desc:'SUV h\u1EA1ng C trang b\u1ECB t\u1ED1t',monthly:{bh:667,fuel:2400,reg:145,maint:250}},
      {name:'MG4 EV',slug:'mg4-ev',type:'ev',bh:8,desc:'Hatchback \u0111i\u1EC7n sporty 430km',monthly:{bh:667,fuel:600,reg:140,maint:180}},
      {name:'MG5',slug:'mg5',type:'sedan',bh:5,desc:'Sedan h\u1EA1ng B gi\xE1 t\u1ED1t',monthly:{bh:417,fuel:2000,reg:120,maint:190}},
      {name:'RX8',slug:'rx8',type:'suv',bh:10,desc:'SUV 7 ch\u1ED7 h\u1EA1ng D',monthly:{bh:833,fuel:2800,reg:160,maint:320}},
      {name:'VS HEV',slug:'vs-hev',type:'suv',bh:9,desc:'SUV hybrid 2 c\u1EA7u',monthly:{bh:750,fuel:1800,reg:155,maint:280}},
    ],
    topInsurers:[
      {name:'B\u1EA3o Minh',color:'#0066CC',badge:'Ph\u1EE5 t\xF9ng t\u1ED1t',reason:'T\u1EF7 l\u1EC7 duy\u1EC7t ph\u1EE5 t\xF9ng MG t\u1ED1t, garage MG \u1EE7y quy\u1EC1n nhi\u1EC1u t\u1EA1i TP l\u1EDBn. Ph\xED th\u1EA5p nh\u1EA5t cho xe MG.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Nhanh',reason:'B\u1ED3i th\u01B0\u1EDDng 3 ng\xE0y. M\u1EA1ng l\u01B0\u1EDBi garage r\u1ED9ng ph\u1EE7 c\u1EA3 xe Trung Qu\u1ED1c.'},
      {name:'PJICO',color:'#CC0000',badge:'Ph\u1EE7 t\u1EC9nh th\xE0nh',reason:'T\u1ED1t cho xe MG \u1EDF khu v\u1EF1c t\u1EC9nh th\xE0nh v\xE0 v\xF9ng ven n\u01A1i \u0111\u1EA1i l\xFD MG \u0111ang m\u1EDF r\u1ED9ng.'},
    ],
    notes:[
      {q:'Ph\u1EE5 t\xF9ng MG c\xF3 d\u1EC5 t\xECm kh\xF4ng n\u1EBFu xe h\u01B0 h\u1ECFng?',a:'MG c\xF3 h\u1EC7 th\u1ED1ng ph\u1EE5 t\xF9ng t\u01B0\u01A1ng \u0111\u1ED1i t\u1ED1t t\u1EA1i VN nh\u1EDD SAIC c\xF3 kho \u1EDF HCM v\xE0 HN. Ph\u1EE5 t\xF9ng th\xE2n v\u1ECF (c\u1EA3n, \u0111\xE8n) th\u01B0\u1EDDng c\xF3 s\u1EB5n trong 1-3 ng\xE0y. Ph\u1EE5 t\xF9ng \u0111\u1ED9ng c\u01A1 c\xF3 th\u1EC3 m\u1EA5t 1-2 tu\u1EA7n n\u1EBFu kh\xF4ng ph\u1ED5 bi\u1EBFn.'},
      {q:'Gi\xE1 tr\u1ECB gi\u1EEF xe c\u1EE7a MG sau 3-5 n\u0103m nh\u01B0 th\u1EBF n\xE0o?',a:'Gi\u1EEF gi\xE1 trung b\xECnh th\u1EA5p h\u01A1n xe Nh\u1EADt H\xE0n c\xF9ng ph\xE2n kh\xFAc, kho\u1EA3ng 55-65% sau 3 n\u0103m. Mua xe m\u1EDBi d\u1EC5 h\u01A1n xe c\u0169 c\u1EE7a MG. N\xEAn ch\u1ECDn BH th\xE2n v\u1ECF v\u1EDBi m\u1EE9c kh\u1EA5u tr\u1EEB th\u1EA5p \u0111\u1EC3 b\u1EA3o v\u1EC7 gi\xE1 tr\u1ECB xe.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2606\u2606\u2606',level:'bad'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'R\u1EBB',level:'good'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Kh\xE1 s\u1EB5n',level:'good'},
      {label:'Garage',val:'\u0110ang m\u1EDF r\u1ED9ng',level:'warn'},
    ],
    insight:{owners:1680,topModel:'ZS',monthly:2845,vs_estimate:-0.3,hcm:2900,hn:2780,breakdown:{bh:500,fuel:2000,road:125,maint:200}},
    garages:[
      {name:'MG Tr\u01B0\u1EDDng Chinh',type:'official',city:'HCM',address:'Tr\u01B0\u1EDDng Chinh, T\xE2n B\xECnh',bh:['B\u1EA3o Minh','PVI'],claims:340,rating:4.5,note:'Showroom MG l\u1EDBn nh\u1EA5t HCM. Ph\u1EE5 t\xF9ng kho \u0111\u1EA7y \u0111\u1EE7 nh\u1EA5t.'},
      {name:'MG \u0110\u1ED1ng \u0110a',type:'official',city:'HN',address:'Nguy\u1EC5n L\u01B0\u01A1ng B\u1EB1ng, \u0110\u1ED1ng \u0110a',bh:['B\u1EA3o Minh'],claims:280,rating:4.5,note:'\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng t\u1EA1i H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','parked','theft'],
  },
  isuzu:{
    name:'Isuzu',origin:'Nh\u1EADt B\u1EA3n',color:'#CC0000',tagline:'B\xE1n t\u1EA3i b\u1EC1n b\u1EC9 \xB7 T\u1EA3i th\u1EF1c d\u1EE5ng \xB7 Chi ph\xED th\u1EA5p',
    fuels:['diesel'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Nh\u1EADt B\u1EA3n chuy\xEAn \u0111\u1ED9ng c\u01A1 diesel v\xE0 xe th\u01B0\u01A1ng m\u1EA1i b\u1EC1n b\u1EC9. D-Max l\xE0 m\u1EABu b\xE1n t\u1EA3i b\xE1n ch\u1EA1y top 5 th\u1ECB tr\u01B0\u1EDDng VN. Ph\xF9 h\u1EE3p doanh nghi\u1EC7p, n\xF4ng nghi\u1EC7p v\xE0 ng\u01B0\u1EDDi d\xF9ng c\u1EA7n xe v\u1EEBa ch\u1EDF h\xE0ng v\u1EEBa ch\u1EDF ng\u01B0\u1EDDi.',
    models:[
      {name:'D-Max',type:'truck',bh:9,desc:'B\xE1n t\u1EA3i diesel b\xE1n ch\u1EA1y nh\u1EA5t',monthly:{bh:750,fuel:2600,reg:140,maint:280},slug:'d-max',priceFrom:759,priceTo:959},
      {name:'mu-X',type:'suv',bh:11,desc:'SUV 7 ch\u1ED7 g\u1EA7m cao',monthly:{bh:917,fuel:2800,reg:165,maint:320},slug:'mu-x',priceFrom:949,priceTo:1149},
    ],
    topInsurers:[
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'Xe th\u01B0\u01A1ng m\u1EA1i',reason:'Kinh nghi\u1EC7m b\u1EA3o hi\u1EC3m xe b\xE1n t\u1EA3i v\xE0 th\u01B0\u01A1ng m\u1EA1i l\xE2u n\u0103m. Ph\u1EE7 t\u1ED1t \u1EDF t\u1EC9nh th\xE0nh.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Nhanh nh\u1EA5t',reason:'B\u1ED3i th\u01B0\u1EDDng 3 ng\xE0y. Ph\u1EE7 r\u1ED9ng bao g\u1ED3m c\u1EA3 v\xF9ng t\u1EC9nh th\xE0nh.'},
      {name:'PJICO',color:'#CC0000',badge:'Ph\u1EE7 t\u1EC9nh',reason:'M\u1EA1ng l\u01B0\u1EDBi s\u1EEDa ch\u1EEFa ph\u1EE7 t\u1ED1t \u1EDF t\u1EC9nh th\xE0nh v\xE0 n\xF4ng th\xF4n \u2014 n\u01A1i D-Max \u0111\u01B0\u1EE3c d\xF9ng nhi\u1EC1u nh\u1EA5t.'},
    ],
    notes:[
      {q:'B\xE1n t\u1EA3i D-Max c\xF3 \u0111\u01B0\u1EE3c BH th\xE2n v\u1ECF nh\u01B0 xe con kh\xF4ng?',a:'C\xF3. D-Max v\xE0 mu-X \u0111\u01B0\u1EE3c b\u1EA3o hi\u1EC3m th\xE2n v\u1ECF theo gi\xE1 tr\u1ECB th\u1EF1c t\u1EBF. Tuy nhi\xEAn m\u1ED9t s\u1ED1 NB ph\xE2n lo\u1EA1i b\xE1n t\u1EA3i v\xE0o nh\xF3m xe th\u01B0\u01A1ng m\u1EA1i v\u1EDBi \u0111i\u1EC1u kho\u1EA3n \u0111\u1EB7c bi\u1EC7t. N\xEAn ki\u1EC3m tra r\xF5 \u0111i\u1EC1u kho\u1EA3n tr\u01B0\u1EDBc khi mua.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2605\u2606',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'R\u1EBB nh\u1EA5t h\u1EA1ng',level:'good'},
      {label:'Ph\u1EE5 t\xF9ng',val:'D\u1EC5 t\xECm',level:'good'},
      {label:'Garage',val:'To\xE0n qu\u1ED1c',level:'good'},
    ],
    insight:{owners:2140,topModel:'D-Max',monthly:3770,vs_estimate:-0.8,hcm:3900,hn:3650,breakdown:{bh:750,fuel:2600,road:140,maint:280}},
    garages:[
      {name:'Isuzu Vi\u1EC7t Nam HCM',type:'official',city:'HCM',address:'Qu\u1ED1c l\u1ED9 1A, B\xECnh Ch\xE1nh',bh:['B\u1EA3o Vi\u1EC7t','PVI'],claims:480,rating:4.6,note:'Trung t\xE2m d\u1ECBch v\u1EE5 l\u1EDBn nh\u1EA5t mi\u1EC1n Nam. Chuy\xEAn D-Max v\xE0 mu-X.'},
      {name:'Isuzu H\xE0 N\u1ED9i',type:'official',city:'HN',address:'Gi\u1EA3i Ph\xF3ng, Ho\xE0ng Mai',bh:['B\u1EA3o Vi\u1EC7t'],claims:390,rating:4.6,note:'\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng mi\u1EC1n B\u1EAFc.'},
    ],
    scenarios:['collision','parttheft','fire'],
  },
  suzuki:{
    name:'Suzuki',origin:'Nh\u1EADt B\u1EA3n',color:'#003DA5',tagline:'Nh\u1ECF g\u1ECDn \xB7 Ti\u1EBFt ki\u1EC7m \xB7 Gi\xE1 th\u1EF1c t\u1EBF',
    fuels:['x\u0103ng'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Nh\u1EADt B\u1EA3n chuy\xEAn xe nh\u1ECF g\u1ECDn v\xE0 ti\u1EBFt ki\u1EC7m nhi\xEAn li\u1EC7u. Suzuki XL7 v\xE0 Ertiga ph\xF9 h\u1EE3p gia \u0111\xECnh c\u1EA7n MPV 7 ch\u1ED7 gi\xE1 ph\u1EA3i ch\u0103ng. Swift l\xE0 hatchback c\u1EE1 nh\u1ECF ph\u1ED5 bi\u1EBFn v\u1EDBi ph\u1EE5 n\u1EEF \u0111\xF4 th\u1ECB.',
    models:[
      {name:'XL7',type:'mpv',bh:8,desc:'MPV 7 ch\u1ED7 gi\xE1 t\u1ED1t',monthly:{bh:667,fuel:2400,reg:140,maint:220},slug:'xl7',priceFrom:599,priceTo:669},
      {name:'Ertiga',type:'mpv',bh:6,desc:'MPV 7 ch\u1ED7 compact',monthly:{bh:500,fuel:2200,reg:125,maint:200},slug:'ertiga',priceFrom:499,priceTo:559},
      {name:'Swift',type:'sedan',bh:6,desc:'Hatchback \u0111\xF4 th\u1ECB nh\u1ECF g\u1ECDn',monthly:{bh:500,fuel:1800,reg:125,maint:180},slug:'swift',priceFrom:529,priceTo:609},
    ],
    topInsurers:[
      {name:'B\u1EA3o Minh',color:'#0066CC',badge:'Ph\xED t\u1ED1t nh\u1EA5t',reason:'Ph\xED th\xE2n v\u1ECF th\u1EA5p nh\u1EA5t cho xe Suzuki gi\xE1 trung b\xECnh th\u1EA5p. B\u1ED3i th\u01B0\u1EDDng \u1ED5n \u0111\u1ECBnh.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Ph\u1EE7 t\u1EC9nh',reason:'Ph\u1EE7 r\u1ED9ng to\xE0n qu\u1ED1c, ph\xF9 h\u1EE3p XL7 v\xE0 Ertiga d\xF9ng c\u1EA3 t\u1EC9nh th\xE0nh l\u1EABn n\u1ED9i \u0111\xF4.'},
    ],
    notes:[
      {q:'Suzuki XL7 vs Ertiga n\xEAn ch\u1ECDn BH g\xF3i n\xE0o?',a:'XL7 v\xE0 Ertiga gi\xE1 th\u1EA5p, n\xEAn c\xE2n nh\u1EAFc g\xF3i th\xE2n v\u1ECF c\u01A1 b\u1EA3n (va ch\u1EA1m + tr\u1ED9m c\u1EAFp) m\xE0 kh\xF4ng c\u1EA7n m\u1EDF r\u1ED9ng nhi\u1EC1u. Chi ph\xED BH th\u01B0\u1EDDng chi\u1EBFm d\u01B0\u1EDBi 1.2% gi\xE1 tr\u1ECB xe m\u1ED7i n\u0103m.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2606\u2606',level:'warn'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'R\u1EBB nh\u1EA5t',level:'good'},
      {label:'Ph\u1EE5 t\xF9ng',val:'D\u1EC5 t\xECm',level:'good'},
      {label:'Garage',val:'To\xE0n qu\u1ED1c',level:'good'},
    ],
    insight:{owners:1340,topModel:'XL7',monthly:3427,vs_estimate:-0.5,hcm:3500,hn:3350,breakdown:{bh:667,fuel:2400,road:140,maint:220}},
    garages:[
      {name:'Suzuki B\xECnh Tri\u1EC7u',type:'official',city:'HCM',address:'Qu\u1ED1c l\u1ED9 13, B\xECnh Tri\u1EC7u',bh:['B\u1EA3o Minh','PVI'],claims:320,rating:4.5,note:'\u0110\u1EA1i l\xFD Suzuki l\u1EDBn nh\u1EA5t HCM.'},
      {name:'Suzuki Ho\xE0ng Qu\u1ED1c Vi\u1EC7t',type:'official',city:'HN',address:'Ho\xE0ng Qu\u1ED1c Vi\u1EC7t, C\u1EA7u Gi\u1EA5y',bh:['B\u1EA3o Minh'],claims:250,rating:4.5,note:'Showroom ch\xEDnh h\xE3ng t\u1EA1i H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','parked','theft'],
  },
  nissan:{
    name:'Nissan',origin:'Nh\u1EADt B\u1EA3n',color:'#C41230',tagline:'\u0110\u1ED5i m\u1EDBi \xB7 Tin c\u1EADy \xB7 C\xF4ng ngh\u1EC7 th\u1EF1c d\u1EE5ng',
    fuels:['x\u0103ng','diesel'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Nh\u1EADt B\u1EA3n v\u1EDBi th\u1EBF m\u1EA1nh \u1EDF ph\xE2n kh\xFAc b\xE1n t\u1EA3i v\xE0 SUV g\u1EA7m cao. Nissan Terra l\xE0 \u0111\u1ED1i th\u1EE7 tr\u1EF1c ti\u1EBFp c\u1EE7a Ford Ranger v\xE0 Toyota Fortuner. Almera l\xE0 sedan h\u1EA1ng B gi\xE1 th\u1EF1c t\u1EBF \u0111ang t\u0103ng th\u1ECB ph\u1EA7n.',
    models:[
      {name:'Terra',type:'suv',bh:11,desc:'SUV 7 ch\u1ED7 g\u1EA7m cao diesel',monthly:{bh:917,fuel:2800,reg:165,maint:320},slug:'terra',priceFrom:969,priceTo:1169},
      {name:'Almera',type:'sedan',bh:5,desc:'Sedan h\u1EA1ng B ph\u1ED5 th\xF4ng',monthly:{bh:417,fuel:1800,reg:120,maint:180},slug:'almera',priceFrom:459,priceTo:549},
      {name:'Navara',type:'truck',bh:9,desc:'B\xE1n t\u1EA3i diesel',monthly:{bh:750,fuel:2600,reg:145,maint:280},slug:'navara',priceFrom:679,priceTo:879},
    ],
    topInsurers:[
      {name:'PVI Insurance',color:'#FF6600',badge:'Ph\u1EE7 r\u1ED9ng',reason:'M\u1EA1ng l\u01B0\u1EDBi garage r\u1ED9ng, ph\xF9 h\u1EE3p Terra v\xE0 Navara di chuy\u1EC3n li\xEAn t\u1EC9nh.'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'Xe th\u01B0\u01A1ng m\u1EA1i',reason:'Kinh nghi\u1EC7m v\u1EDBi xe diesel v\xE0 b\xE1n t\u1EA3i. T\u1ED1t cho Navara d\xF9ng m\u1EE5c \u0111\xEDch th\u01B0\u01A1ng m\u1EA1i.'},
    ],
    notes:[
      {q:'Nissan Terra diesel c\xF3 b\u1EA3o hi\u1EC3m \u0111\u1EB7c bi\u1EC7t g\xEC kh\xF4ng?',a:'Ph\xED BH diesel cao h\u01A1n x\u0103ng 3-5%. Quan tr\u1ECDng h\u01A1n l\xE0 ch\u1ECDn NB c\xF3 garage s\u1EEDa \u0111\u01B0\u1EE3c \u0111\u1ED9ng c\u01A1 diesel YD25 c\u1EE7a Nissan, kh\xF4ng ph\u1EA3i t\u1EA5t c\u1EA3 garage \u1EE7y quy\u1EC1n \u0111\u1EC1u c\xF3 k\u1EF9 thu\u1EADt vi\xEAn diesel chuy\xEAn.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2606\u2606',level:'warn'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Trung b\xECnh',level:'warn'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Kh\xE1 s\u1EB5n',level:'good'},
      {label:'Garage',val:'V\u1EEBa \u0111\u1EE7',level:'warn'},
    ],
    insight:{owners:980,topModel:'Terra',monthly:4202,vs_estimate:+0.1,hcm:4350,hn:4050,breakdown:{bh:917,fuel:2800,road:165,maint:320}},
    garages:[
      {name:'Nissan G\xF2 V\u1EA5p',type:'official',city:'HCM',address:'Quang Trung, G\xF2 V\u1EA5p',bh:['PVI','B\u1EA3o Vi\u1EC7t'],claims:280,rating:4.5,note:'\u0110\u1EA1i l\xFD Nissan l\u1EDBn nh\u1EA5t HCM.'},
      {name:'Nissan Long Bi\xEAn',type:'official',city:'HN',address:'Ng\xF4 Gia T\u1EF1, Long Bi\xEAn',bh:['PVI'],claims:210,rating:4.5,note:'Showroom ch\xEDnh h\xE3ng t\u1EA1i H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','thuykick','parked'],
  },
  byd:{
    name:'BYD',origin:'Trung Qu\u1ED1c',color:'#1565C0',tagline:'Xe \u0111i\u1EC7n h\xE0ng \u0111\u1EA7u Trung Qu\u1ED1c \xB7 C\xF4ng ngh\u1EC7 Blade Battery',
    fuels:['ev','phev'],popular:true,
    desc:'Nh\xE0 s\u1EA3n xu\u1EA5t xe \u0111i\u1EC7n l\u1EDBn nh\u1EA5t th\u1EBF gi\u1EDBi t\xEDnh theo doanh s\u1ED1. BYD t\u1EA5n c\xF4ng th\u1ECB tr\u01B0\u1EDDng VN t\u1EEB 2023 v\u1EDBi pin Blade Battery an to\xE0n v\xE0 gi\xE1 c\u1EA1nh tranh. Atto 3 v\xE0 Seal \u0111ang b\xE1n ch\u1EA1y trong ph\xE2n kh\xFAc EV t\u1EA7m trung.',
    models:[
      {name:'Atto 3',slug:'atto-3',type:'ev',bh:9,desc:'SUV \u0111i\u1EC7n h\u1EA1ng C, 410km/s\u1EA1c',monthly:{bh:750,fuel:800,reg:155,maint:180}},
      {name:'Seal',slug:'seal',type:'ev',bh:11,desc:'Sedan \u0111i\u1EC7n sporty, 570km',monthly:{bh:917,fuel:900,reg:170,maint:200}},
      {name:'Seal U',slug:'seal-u',type:'ev',bh:10,desc:'SUV \u0111i\u1EC7n 5 ch\u1ED7 500km DM-i',monthly:{bh:833,fuel:750,reg:160,maint:190}},
      {name:'Dolphin',slug:'dolphin',type:'ev',bh:7,desc:'Hatchback \u0111i\u1EC7n nh\u1ECF g\u1ECDn 340km',monthly:{bh:583,fuel:600,reg:130,maint:160}},
      {name:'Sea Lion 6',slug:'sea-lion-6',type:'ev',bh:9,desc:'SUV \u0111i\u1EC7n 5 ch\u1ED7 DM-i',monthly:{bh:750,fuel:700,reg:155,maint:200}},
      {name:'Sea Lion 07',slug:'sea-lion-07',type:'ev',bh:12,desc:'SUV coupe \u0111i\u1EC7n 480km',monthly:{bh:1000,fuel:850,reg:170,maint:210}},
      {name:'Shark',slug:'shark',type:'truck',bh:11,desc:'B\xE1n t\u1EA3i PHEV \u0111\u1EA7u ti\xEAn t\u1EA1i VN',monthly:{bh:917,fuel:1200,reg:165,maint:250}},
      {name:'Tang EV',slug:'tang-ev',type:'suv',bh:18,desc:'SUV \u0111i\u1EC7n 7 ch\u1ED7 h\u1EA1ng D',monthly:{bh:1500,fuel:1000,reg:240,maint:280}},
    ],
    topInsurers:[
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'Chuy\xEAn EV',reason:'C\xF3 ch\xEDnh s\xE1ch ri\xEAng cho xe \u0111i\u1EC7n BYD. Bao g\u1ED3m h\u01B0 h\u1ECFng pin trong ph\u1EA1m vi tai n\u1EA1n.'},
      {name:'PTI Insurance',color:'#003087',badge:'B\u1ED3i th\u01B0\u1EDDng pin',reason:'\u0110i\u1EC1u kho\u1EA3n b\u1ED3i th\u01B0\u1EDDng pin EV r\xF5 r\xE0ng. T\u1ED1t cho Atto 3 v\xE0 Seal d\xF9ng h\xE0ng ng\xE0y.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Ph\u1EE7 r\u1ED9ng',reason:'M\u1EA1ng l\u01B0\u1EDBi r\u1ED9ng, ph\xF9 h\u1EE3p BYD d\xF9ng li\xEAn t\u1EC9nh n\u01A1i garage \xEDt h\u01A1n.'},
    ],
    notes:[
      {q:'B\u1EA3o hi\u1EC3m th\xE2n v\u1ECF xe \u0111i\u1EC7n BYD c\xF3 bao g\u1ED3m h\u01B0 h\u1ECFng pin kh\xF4ng?',a:'Pin b\u1ECB h\u01B0 do tai n\u1EA1n (va ch\u1EA1m, l\u1EADt xe) \u0111\u01B0\u1EE3c BH th\xE2n v\u1ECF b\u1ED3i th\u01B0\u1EDDng. H\u01B0 t\u1EF1 nhi\xEAn (pin chai, dung l\u01B0\u1EE3ng gi\u1EA3m) do b\u1EA3o h\xE0nh t\u1EEB BYD \u2014 b\u1EA3o h\xE0nh pin 8 n\u0103m ho\u1EB7c 160.000km. N\xEAn ki\u1EC3m tra k\u1EF9 \u0111i\u1EC1u kho\u1EA3n lo\u1EA1i tr\u1EEB pin v\u1EDBi t\u1EEBng NB.'},
      {q:'Tr\u1EA1m s\u1EA1c h\u1ECFng xe BYD d\u1EABn \u0111\u1EBFn h\u01B0 \u0111\u1ED9ng c\u01A1, BH c\xF3 chi tr\u1EA3 kh\xF4ng?',a:'H\u01B0 h\u1ECFng do \u0111i\u1EC7n l\u01B0\u1EDBi b\u1EA5t th\u01B0\u1EDDng (\u0111i\u1EC7n \xE1p, d\xF2ng \u0111i\u1EC7n sai) kh\xF4ng thu\u1ED9c ph\u1EA1m vi BH th\xE2n v\u1ECF ti\xEAu chu\u1EA9n. M\u1ED9t s\u1ED1 NB c\xF3 quy\u1EC1n l\u1EE3i m\u1EDF r\u1ED9ng cho s\u1EF1 c\u1ED1 \u0111i\u1EC7n \u2014 n\xEAn h\u1ECFi r\xF5 khi mua.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2606\u2606\u2606',level:'bad'},
      {label:'Chi ph\xED v\u1EADn h\xE0nh',val:'Th\u1EA5p nh\u1EA5t',level:'good'},
      {label:'Ph\u1EE5 t\xF9ng',val:'\u0110ang ph\xE1t tri\u1EC3n',level:'warn'},
      {label:'Tr\u1EA1m s\u1EA1c',val:'\u0110ang m\u1EDF r\u1ED9ng',level:'warn'},
    ],
    insight:{owners:1920,topModel:'Atto 3',monthly:1885,vs_estimate:-0.6,hcm:1950,hn:1820,breakdown:{bh:750,fuel:800,road:155,maint:180}},
    garages:[
      {name:'BYD B\xECnh Th\u1EA1nh',type:'official',city:'HCM',address:'\u0110i\u1EC7n Bi\xEAn Ph\u1EE7, B\xECnh Th\u1EA1nh',bh:['B\u1EA3o Vi\u1EC7t','PTI'],claims:290,rating:4.6,note:'Showroom BYD flagship t\u1EA1i HCM. C\xF3 s\u1EA1c nhanh DC 120kW.'},
      {name:'BYD C\u1EA7u Gi\u1EA5y',type:'official',city:'HN',address:'Tr\u1EA7n Th\xE1i T\xF4ng, C\u1EA7u Gi\u1EA5y',bh:['B\u1EA3o Vi\u1EC7t'],claims:210,rating:4.6,note:'Showroom BYD flagship t\u1EA1i H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','fire','parked'],
  },
  peugeot:{
    name:'Peugeot',origin:'Ph\xE1p',color:'#003189',tagline:'Thi\u1EBFt k\u1EBF Ph\xE1p \xB7 SUV ch\xE2u \xC2u \xB7 L\xE1i th\xFA v\u1ECB',
    fuels:['x\u0103ng'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Ph\xE1p v\u1EDBi thi\u1EBFt k\u1EBF s\u1EAFc n\xE9t v\xE0 tr\u1EA3i nghi\u1EC7m l\xE1i \u0111\u1EB7c tr\u01B0ng ch\xE2u \xC2u. 3008 v\xE0 5008 \u0111ang thu h\xFAt kh\xE1ch h\xE0ng VN mu\u1ED1n SUV ch\xE2u \xC2u \u1EDF ph\xE2n kh\xFAc t\u1EA7m trung m\xE0 kh\xF4ng ph\u1EA3i tr\u1EA3 gi\xE1 premium xe \u0110\u1EE9c.',
    models:[
      {name:'3008',type:'suv',bh:13,desc:'SUV h\u1EA1ng C thi\u1EBFt k\u1EBF n\u1ED5i b\u1EADt',monthly:{bh:1083,fuel:2600,reg:175,maint:580},slug:'3008',priceFrom:1099,priceTo:1399},
      {name:'5008',type:'suv',bh:18,desc:'SUV 7 ch\u1ED7 h\u1EA1ng D',monthly:{bh:1500,fuel:2800,reg:220,maint:680},slug:'5008',priceFrom:1399,priceTo:1799},
      {name:'2008',type:'suv',bh:9,desc:'SUV compact entry',monthly:{bh:750,fuel:2200,reg:150,maint:480},slug:'2008',priceFrom:739,priceTo:899},
    ],
    topInsurers:[
      {name:'AXA Insurance',color:'#00008F',badge:'Xe ch\xE2u \xC2u',reason:'Chuy\xEAn xe nh\u1EADp ch\xE2u \xC2u. Th\u1ECFa thu\u1EADn v\u1EDBi garage Peugeot \u1EE7y quy\u1EC1n t\u1EA1i VN.'},
      {name:'Liberty Insurance',color:'#2E4099',badge:'Ph\u1EE7 \u0111\xF4 th\u1ECB',reason:'Ph\xF9 h\u1EE3p Peugeot d\xF9ng n\u1ED9i \u0111\xF4. B\u1ED3i th\u01B0\u1EDDng nhanh t\u1EA1i HCM v\xE0 H\xE0 N\u1ED9i.'},
    ],
    notes:[
      {q:'Peugeot 3008 h\u1ED9p s\u1ED1 EAT8 h\u1ECFng, BH c\xF3 b\u1ED3i th\u01B0\u1EDDng kh\xF4ng?',a:'H\u1ED9p s\u1ED1 h\u01B0 do tai n\u1EA1n \u0111\u01B0\u1EE3c BH b\u1ED3i th\u01B0\u1EDDng. H\u01B0 t\u1EF1 nhi\xEAn (m\xF2n do s\u1EED d\u1EE5ng) kh\xF4ng thu\u1ED9c ph\u1EA1m vi. H\u1ED9p s\u1ED1 EAT8 c\u1EE7a Peugeot c\xF3 \xEDt v\u1EA5n \u0111\u1EC1 h\u01A1n th\u1EBF h\u1EC7 tr\u01B0\u1EDBc nh\u01B0ng chi ph\xED s\u1EEDa ch\u1EEFa kh\xE1 cao (~30-60 tri\u1EC7u).'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2606\u2606',level:'warn'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Trung b\xECnh cao',level:'warn'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Ch\u1EADm h\u01A1n Nh\u1EADt',level:'warn'},
      {label:'Garage',val:'H\u1EA1n ch\u1EBF t\u1EC9nh',level:'warn'},
    ],
    insight:{owners:480,topModel:'3008',monthly:5038,vs_estimate:+1.4,hcm:5600,hn:4450,breakdown:{bh:1083,fuel:2600,road:175,maint:580}},
    garages:[
      {name:'Peugeot Qu\u1ED1c l\u1ED9 13',type:'official',city:'HCM',address:'Qu\u1ED1c l\u1ED9 13, B\xECnh D\u01B0\u01A1ng',bh:['AXA','Liberty'],claims:190,rating:4.6,note:'Showroom l\u1EDBn nh\u1EA5t mi\u1EC1n Nam.'},
      {name:'Peugeot X\xE3 \u0110\xE0n',type:'official',city:'HN',address:'X\xE3 \u0110\xE0n, \u0110\u1ED1ng \u0110a',bh:['AXA'],claims:140,rating:4.6,note:'\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng t\u1EA1i H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','glass','parked'],
  },
  subaru:{
    name:'Subaru',origin:'Nh\u1EADt B\u1EA3n',color:'#003F8A',tagline:'AWD ti\xEAu chu\u1EA9n \xB7 EyeSight \xB7 \u0110\u1EB7c tr\u01B0ng',
    fuels:['x\u0103ng'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Nh\u1EADt B\u1EA3n niche v\u1EDBi h\u1EC7 th\u1ED1ng AWD ti\xEAu chu\u1EA9n tr\xEAn m\u1ECDi m\u1EABu xe v\xE0 h\u1EC7 th\u1ED1ng an to\xE0n EyeSight. Subaru Forester v\xE0 Outback h\xFAt \u0111\u1ED1i t\u01B0\u1EE3ng y\xEAu th\xEDch outdoor v\xE0 l\xE1i \u0111\u01B0\u1EDDng x\u1EA5u m\xE0 v\u1EABn tho\u1EA3i m\xE1i.',
    models:[
      {name:'Forester',type:'suv',bh:12,desc:'SUV compact AWD ti\xEAu chu\u1EA9n',monthly:{bh:1000,fuel:2600,reg:165,maint:450},slug:'forester',priceFrom:979,priceTo:1199},
      {name:'Outback',type:'suv',bh:15,desc:'Wagon AWD \u0111\u01B0\u1EDDng tr\u01B0\u1EDDng',monthly:{bh:1250,fuel:2600,reg:185,maint:500},slug:'outback',priceFrom:1349,priceTo:1599},
      {name:'Crosstrek',type:'suv',bh:10,desc:'Crossover compact AWD',monthly:{bh:833,fuel:2400,reg:155,maint:400},slug:'crosstrek',priceFrom:879,priceTo:999},
    ],
    topInsurers:[
      {name:'AXA Insurance',color:'#00008F',badge:'Xe nh\u1EADp',reason:'Chuy\xEAn xe CBU nh\u1EADp. Ph\u1EE5 t\xF9ng Subaru t\u1EEB Nh\u1EADt \u0111\u01B0\u1EE3c duy\u1EC7t t\u1ED1t.'},
      {name:'Liberty Insurance',color:'#2E4099',badge:'Ph\u1EE7 \u0111\xF4 th\u1ECB',reason:'Ph\xF9 h\u1EE3p Subaru d\xF9ng \u0111\xF4 th\u1ECB. B\u1ED3i th\u01B0\u1EDDng \u1ED5n \u0111\u1ECBnh.'},
    ],
    notes:[
      {q:'Subaru AWD h\u01B0 trong \u0111i\u1EC1u ki\u1EC7n offroad, BH c\xF3 chi tr\u1EA3 kh\xF4ng?',a:'H\u01B0 h\u1ECFng do s\u1EED d\u1EE5ng offroad b\xECnh th\u01B0\u1EDDng (\u0111\u01B0\u1EDDng \u0111\u1EA5t, b\xF9n) kh\xF4ng thu\u1ED9c ph\u1EA1m vi. H\u01B0 do tai n\u1EA1n khi offroad (\u0111\xE2m v\xE0o \u0111\xE1, \u0111\u1ED5 xe) \u0111\u01B0\u1EE3c b\u1ED3i th\u01B0\u1EDDng t\xF9y theo \u0111i\u1EC1u kho\u1EA3n. N\xEAn \u0111\u1ECDc k\u1EF9 \u0111\u1ECBnh ngh\u0129a "tai n\u1EA1n" trong h\u1EE3p \u0111\u1ED3ng.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2605\u2606',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Trung b\xECnh',level:'warn'},
      {label:'Ph\u1EE5 t\xF9ng',val:'\u0110\u1EB7t t\u1EEB Nh\u1EADt',level:'warn'},
      {label:'Garage',val:'\xCDt \u0111i\u1EC3m',level:'warn'},
    ],
    insight:{owners:310,topModel:'Forester',monthly:4215,vs_estimate:+0.9,hcm:4600,hn:3800,breakdown:{bh:1000,fuel:2600,road:165,maint:450}},
    garages:[
      {name:'Subaru Ph\xFA M\u1EF9 H\u01B0ng',type:'official',city:'HCM',address:'Nguy\u1EC5n L\u01B0\u01A1ng B\u1EB1ng, Ph\xFA M\u1EF9 H\u01B0ng',bh:['AXA','Liberty'],claims:160,rating:4.7,note:'Showroom ch\xEDnh h\xE3ng HCM.'},
      {name:'Subaru Nguy\u1EC5n Xi\u1EC3n',type:'official',city:'HN',address:'Nguy\u1EC5n Xi\u1EC3n, H\xE0 \u0110\xF4ng',bh:['AXA'],claims:120,rating:4.7,note:'\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','glass','parked'],
  },
  landrover:{
    name:'Land Rover',origin:'Anh',color:'#005A2B',tagline:'Offroad \u0111\u1EC9nh cao \xB7 Xa x\u1EC9 \xB7 Range Rover',
    fuels:['x\u0103ng','phev','mild-hybrid'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Anh bi\u1EC3u t\u01B0\u1EE3ng c\u1EE7a xe \u0111\u1ECBa h\xECnh sang tr\u1ECDng. Range Rover l\xE0 \u0111\u1EC9nh cao ph\xE2n kh\xFAc SUV h\u1EA1ng sang t\u1EA1i Vi\u1EC7t Nam. Defender t\xE1i sinh thu h\xFAt th\u1EBF h\u1EC7 kh\xE1ch h\xE0ng m\u1EDBi y\xEAu th\xEDch phong c\xE1ch adventure.',
    models:[
      {name:'Defender 90',type:'suv',bh:47,desc:'SUV \u0111a \u0111\u1ECBa h\xECnh bi\u1EC3u t\u01B0\u1EE3ng',monthly:{bh:3917,fuel:3800,reg:460,maint:1200},slug:'defender-90',priceFrom:3599,priceTo:4499},
      {name:'Defender 110',type:'suv',bh:55,desc:'Defender 5 ch\u1ED7 d\xE0i h\u01A1n',monthly:{bh:4583,fuel:3800,reg:520,maint:1200},slug:'defender-110',priceFrom:4099,priceTo:5299},
      {name:'Discovery Sport',type:'suv',bh:29,desc:'SUV 7 ch\u1ED7 entry LR',monthly:{bh:2417,fuel:3200,reg:300,maint:900},slug:'discovery-sport',priceFrom:2199,priceTo:2599},
      {name:'Range Rover Sport',type:'suv',bh:87,desc:'SUV coupe h\u1EA1ng sang',monthly:{bh:7250,fuel:4200,reg:800,maint:1800},slug:'range-rover-sport',priceFrom:6499,priceTo:8999},
      {name:'Range Rover',type:'suv',bh:135,desc:'SUV luxury flagship',monthly:{bh:11250,fuel:5000,reg:1200,maint:2500},slug:'range-rover',priceFrom:9999,priceTo:16999},
    ],
    topInsurers:[
      {name:'AXA Insurance',color:'#00008F',badge:'Xe sang nh\u1EADp',reason:'Chuy\xEAn xe CBU h\u1EA1ng sang t\u1EEB Anh. \u0110i\u1EC1u kho\u1EA3n ph\u1EE5 t\xF9ng genuine Land Rover r\xF5 r\xE0ng.'},
      {name:'PTI Insurance',color:'#003087',badge:'Garage \u1EE7y quy\u1EC1n',reason:'Th\u1ECFa thu\u1EADn v\u1EDBi garage Land Rover \u1EE7y quy\u1EC1n t\u1EA1i VN. Kh\xF4ng c\u1EA7n gi\xE1m \u0111\u1ECBnh ri\xEAng.'},
    ],
    notes:[
      {q:'Range Rover ph\u1EE5 t\xF9ng \u0111\u1EAFt \u2014 BH c\xF3 tr\u1EA3 \u0111\u1EE7 kh\xF4ng?',a:'BH th\xE2n v\u1ECF b\u1ED3i th\u01B0\u1EDDng theo gi\xE1 tr\u1ECB ph\u1EE5 t\xF9ng genuine t\u1EA1i VN. Range Rover ph\u1EE5 t\xF9ng nh\u1EADp Anh r\u1EA5t \u0111\u1EAFt, c\u1EA7n mua BH v\u1EDBi m\u1EE9c tr\u1EA7n b\u1ED3i th\u01B0\u1EDDng cao (kh\xF4ng c\xF3 gi\u1EDBi h\u1EA1n ho\u1EB7c gi\u1EDBi h\u1EA1n cao). AXA v\xE0 PTI c\xF3 \u0111i\u1EC1u kho\u1EA3n ph\xF9 h\u1EE3p.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2605\u2606',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Cao nh\u1EA5t',level:'bad'},
      {label:'Ph\u1EE5 t\xF9ng',val:'R\u1EA5t \u0111\u1EAFt',level:'bad'},
      {label:'Garage',val:'R\u1EA5t \xEDt \u0111i\u1EC3m',level:'bad'},
    ],
    insight:{owners:280,topModel:'Defender 110',monthly:10103,vs_estimate:+3.2,hcm:11500,hn:8700,breakdown:{bh:4583,fuel:3800,road:520,maint:1200}},
    garages:[
      {name:'Land Rover Vi\u1EC7t Nam HCM',type:'official',city:'HCM',address:'Nguy\u1EC5n V\u0103n Tr\u1ED7i, Ph\xFA Nhu\u1EADn',bh:['AXA','PTI'],claims:180,rating:4.8,note:'Showroom flagship HCM. D\u1ECBch v\u1EE5 cao c\u1EA5p, \u0111\u1EB7t h\u1EB9n tr\u01B0\u1EDBc.'},
      {name:'Land Rover Vi\u1EC7t Nam HN',type:'official',city:'HN',address:'\u0110\xE0o T\u1EA5n, Ba \u0110\xECnh',bh:['AXA'],claims:140,rating:4.8,note:'Showroom flagship H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','parttheft','glass'],
  },
  wuling:{
    name:'Wuling',origin:'Trung Qu\u1ED1c',color:'#FF6600',tagline:'Xe \u0111i\u1EC7n gi\xE1 r\u1EBB nh\u1EA5t \xB7 Mini EV \xB7 \u0110\xF4 th\u1ECB nh\u1ECF',
    fuels:['ev'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Trung Qu\u1ED1c (SAIC-GM-Wuling) n\u1ED5i ti\u1EBFng v\u1EDBi Mini EV b\xE1n ch\u1EA1y nh\u1EA5t th\u1EBF gi\u1EDBi. T\u1EA1i Vi\u1EC7t Nam, BingGuo EV l\xE0 l\u1EF1a ch\u1ECDn xe \u0111i\u1EC7n r\u1EBB nh\u1EA5t th\u1ECB tr\u01B0\u1EDDng. Ph\xF9 h\u1EE3p \u0111i l\u1EA1i ng\u1EAFn d\u01B0\u1EDBi 50km/ng\xE0y trong n\u1ED9i \u0111\xF4.',
    models:[
      {name:'BingGuo EV',slug:'binguo-ev',type:'ev',bh:4,desc:'Mini SUV \u0111i\u1EC7n, 300km/s\u1EA1c',monthly:{bh:333,fuel:400,reg:100,maint:130}},
      {name:'Cloud EV',slug:'cloud-ev',type:'ev',bh:5,desc:'Hatchback \u0111i\u1EC7n 460km gi\xE1 t\u1ED1t',monthly:{bh:417,fuel:450,reg:110,maint:140}},
      {name:'Almaz',slug:'almaz',type:'suv',bh:7,desc:'SUV 7 ch\u1ED7 \u0111a d\u1EE5ng',monthly:{bh:583,fuel:2400,reg:135,maint:220}},
    ],
    topInsurers:[
      {name:'B\u1EA3o Minh',color:'#0066CC',badge:'Ph\xED th\u1EA5p nh\u1EA5t',reason:'Ph\xED BH th\u1EA5p nh\u1EA5t cho BingGuo. B\u1ED3i th\u01B0\u1EDDng \u1ED5n \u0111\u1ECBnh cho xe gi\xE1 tr\u1ECB th\u1EA5p.'},
      {name:'PJICO',color:'#CC0000',badge:'Ph\u1EE7 t\u1EC9nh',reason:'Ph\xF9 h\u1EE3p BingGuo d\xF9ng \u1EDF c\xE1c t\u1EC9nh th\xE0nh v\xE0 \u0111\xF4 th\u1ECB nh\u1ECF.'},
    ],
    notes:[
      {q:'BingGuo EV c\xF3 \u0111\xE1ng mua BH th\xE2n v\u1ECF kh\xF4ng?',a:'Ph\xED BH th\xE2n v\u1ECF BingGuo kho\u1EA3ng 4-5 tri\u1EC7u/n\u0103m. Xe gi\xE1 350-450 tri\u1EC7u, n\xEAn BH th\xE2n v\u1ECF v\u1EABn \u0111\xE1ng n\u1EBFu d\xF9ng \u0111\u01B0\u1EDDng \u0111\xF4ng. N\u1EBFu ch\u1EC9 \u0111i trong khu d\xE2n c\u01B0 y\xEAn t\u0129nh, c\xF3 th\u1EC3 ch\u1EC9 c\u1EA7n TNDS b\u1EAFt bu\u1ED9c.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2606\u2606\u2606\u2606',level:'bad'},
      {label:'Chi ph\xED v\u1EADn h\xE0nh',val:'Th\u1EA5p nh\u1EA5t',level:'good'},
      {label:'Ph\u1EE5 t\xF9ng',val:'\u0110ang ph\xE1t tri\u1EC3n',level:'warn'},
      {label:'H\u1EA1n ch\u1EBF',val:'Ph\u1EA1m vi ng\u1EAFn',level:'warn'},
    ],
    insight:{owners:620,topModel:'BingGuo EV',monthly:963,vs_estimate:-0.9,hcm:1000,hn:925,breakdown:{bh:333,fuel:400,road:100,maint:130}},
    garages:[
      {name:'Wuling HCM',type:'official',city:'HCM',address:'Qu\u1ED1c l\u1ED9 1A, B\xECnh T\xE2n',bh:['B\u1EA3o Minh'],claims:140,rating:4.3,note:'Showroom Wuling t\u1EA1i HCM.'},
      {name:'Wuling H\xE0 N\u1ED9i',type:'official',city:'HN',address:'Gi\u1EA3i Ph\xF3ng, Hai B\xE0 Tr\u01B0ng',bh:['B\u1EA3o Minh'],claims:100,rating:4.3,note:'Showroom Wuling t\u1EA1i H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','parked','theft'],
  },
  tesla:{
    name:'Tesla',origin:'M\u1EF9',color:'#CC0000',tagline:'EV thu\u1EA7n t\xFAy \xB7 Autopilot \xB7 OTA updates',
    fuels:['ev'],popular:true,
    desc:'Nh\xE0 ti\xEAn phong xe \u0111i\u1EC7n M\u1EF9 v\u1EDBi h\u1EC7 sinh th\xE1i ph\u1EA7n m\u1EC1m v\xE0 tr\u1EA1m s\u1EA1c Supercharger ri\xEAng. Tesla Model 3 v\xE0 Model Y l\xE0 2 m\u1EABu EV \u0111\u01B0\u1EE3c t\xECm mua nhi\u1EC1u nh\u1EA5t Vi\u1EC7t Nam trong ph\xE2n kh\xFAc EV h\u1EA1ng trung cao c\u1EA5p. Autopilot v\xE0 c\u1EADp nh\u1EADt OTA l\xE0 \u0111i\u1EC3m kh\xE1c bi\u1EC7t l\u1EDBn so v\u1EDBi \u0111\u1ED1i th\u1EE7.',
    models:[
      {name:'Model 3',slug:'model-3',type:'ev',bh:12,desc:'Sedan \u0111i\u1EC7n h\u1EA1ng C, 576km/s\u1EA1c',monthly:{bh:1000,fuel:900,reg:170,maint:180}},
      {name:'Model 3 Highland',slug:'model-3-highland',type:'ev',bh:14,desc:'Model 3 facelift 2024, 629km',monthly:{bh:1167,fuel:950,reg:185,maint:180}},
      {name:'Model Y',slug:'model-y',type:'ev',bh:13,desc:'SUV \u0111i\u1EC7n h\u1EA1ng C b\xE1n ch\u1EA1y nh\u1EA5t',monthly:{bh:1083,fuel:1000,reg:180,maint:190}},
      {name:'Model Y Juniper',slug:'model-y-juniper',type:'ev',bh:15,desc:'Model Y facelift 2025, 593km',monthly:{bh:1250,fuel:1050,reg:195,maint:190}},
      {name:'Model X',slug:'model-x',type:'suv',bh:35,desc:'SUV \u0111i\u1EC7n 7 ch\u1ED7 falcon door',monthly:{bh:2917,fuel:1400,reg:380,maint:500}},
      {name:'Model S',slug:'model-s',type:'ev',bh:40,desc:'Sedan \u0111i\u1EC7n flagship 652km',monthly:{bh:3333,fuel:1500,reg:430,maint:550}},
    ],
    topInsurers:[
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'Chuy\xEAn EV',reason:'Ch\xEDnh s\xE1ch EV r\xF5 r\xE0ng, bao g\u1ED3m h\u01B0 h\u1ECFng pin trong ph\u1EA1m vi tai n\u1EA1n. Ph\xF9 h\u1EE3p Tesla gi\xE1 tr\u1ECB cao.'},
      {name:'PTI Insurance',color:'#003087',badge:'B\u1ED3i th\u01B0\u1EDDng pin',reason:'\u0110i\u1EC1u kho\u1EA3n b\u1ED3i th\u01B0\u1EDDng pin v\xE0 ph\u1EA7n m\u1EC1m EV r\xF5 r\xE0ng. T\u1ED1t cho Model 3 v\xE0 Model Y.'},
      {name:'AXA Insurance',color:'#00008F',badge:'Xe nh\u1EADp CBU',reason:'Kinh nghi\u1EC7m xe nh\u1EADp kh\u1EA9u CBU gi\xE1 cao. Ph\u1EE5 t\xF9ng Tesla genuine \u0111\u01B0\u1EE3c duy\u1EC7t t\u1ED1t.'},
    ],
    notes:[
      {q:'Tesla kh\xF4ng c\xF3 garage ch\xEDnh h\xE3ng t\u1EA1i VN, BH s\u1EEDa \u1EDF \u0111\xE2u?',a:'Tesla VN hi\u1EC7n c\xF3 Service Center t\u1EA1i HCM v\xE0 HN. Ngo\xE0i ra Mobile Service (k\u1EF9 thu\u1EADt vi\xEAn \u0111\u1EBFn t\u1EADn n\u01A1i) h\u1ED7 tr\u1EE3 c\xE1c s\u1EF1 c\u1ED1 nh\u1ECF. BH c\u1EA7n ch\u1ECDn NB c\xF3 th\u1ECFa thu\u1EADn v\u1EDBi garage Tesla \u1EE7y quy\u1EC1n ho\u1EB7c garage EV chuy\xEAn nghi\u1EC7p.'},
      {q:'Ph\u1EE5 t\xF9ng Tesla \u0111\u1EAFt kh\xF4ng, BH c\xF3 b\u1ED3i th\u01B0\u1EDDng \u0111\u1EE7 kh\xF4ng?',a:'Ph\u1EE5 t\xF9ng th\xE2n v\u1ECF Tesla nh\u1EADp t\u1EEB M\u1EF9/Trung Qu\u1ED1c, gi\xE1 cao h\u01A1n xe Nh\u1EADt c\xF9ng h\u1EA1ng 40-80%. N\xEAn mua BH kh\xF4ng gi\u1EDBi h\u1EA1n m\u1EE9c tr\u1EA7n b\u1ED3i th\u01B0\u1EDDng ph\u1EE5 t\xF9ng. Tr\xE1nh NB c\xF3 \u0111i\u1EC1u kho\u1EA3n d\xF9ng ph\u1EE5 t\xF9ng thay th\u1EBF (kh\xF4ng genuine).'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2606\u2606',level:'warn'},
      {label:'Chi ph\xED v\u1EADn h\xE0nh',val:'Th\u1EA5p nh\u1EA5t h\u1EA1ng',level:'good'},
      {label:'Ph\u1EE5 t\xF9ng',val:'\u0110\u1EB7t t\u1EEB n\u01B0\u1EDBc ngo\xE0i',level:'warn'},
      {label:'Service Center',val:'2 \u0111i\u1EC3m VN',level:'warn'},
    ],
    insight:{owners:1240,topModel:'Model Y',monthly:3303,vs_estimate:+0.4,hcm:3500,hn:3100,breakdown:{bh:1083,fuel:1000,road:180,maint:190}},
    garages:[
      {name:'Tesla Service Center HCM',type:'official',city:'HCM',address:'Xa l\u1ED9 H\xE0 N\u1ED9i, Th\u1EE7 \u0110\u1EE9c',bh:['B\u1EA3o Vi\u1EC7t','PTI'],claims:310,rating:4.7,note:'Service Center ch\xEDnh h\xE3ng duy nh\u1EA5t t\u1EA1i HCM. C\xF3 Mobile Service \u0111\u1EBFn t\u1EADn nh\xE0.'},
      {name:'Tesla Service Center HN',type:'official',city:'HN',address:'Ph\u1EA1m H\xF9ng, Nam T\u1EEB Li\xEAm',bh:['B\u1EA3o Vi\u1EC7t'],claims:220,rating:4.7,note:'Service Center ch\xEDnh h\xE3ng t\u1EA1i H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','fire','parked'],
  },
  volkswagen:{
    name:'Volkswagen',origin:'\u0110\u1EE9c',color:'#001E50',tagline:'K\u1EF9 thu\u1EADt \u0110\u1EE9c \xB7 B\u1EC1n ch\u1EAFc \xB7 Th\u1EF1c d\u1EE5ng',
    fuels:['x\u0103ng'],popular:true,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u \u0110\u1EE9c \u0111\u1EA1i ch\xFAng l\u1EDBn nh\u1EA5t th\u1EBF gi\u1EDBi. Tiguan v\xE0 Teramont l\xE0 2 m\u1EABu SUV \u0111ang t\u0103ng tr\u01B0\u1EDFng m\u1EA1nh t\u1EA1i VN. N\u1ED5i b\u1EADt b\u1EDFi c\u1EA3m gi\xE1c l\xE1i ch\u1EAFc ch\u1EAFn, n\u1ED9i th\u1EA5t ch\u1EA5t l\u01B0\u1EE3ng cao v\xE0 h\u1EC7 truy\u1EC1n \u0111\u1ED9ng DSG ti\u1EBFt ki\u1EC7m nhi\xEAn li\u1EC7u.',
    models:[
      {name:'Tiguan',slug:'tiguan',type:'suv',bh:12,desc:'SUV h\u1EA1ng C ph\u1ED5 bi\u1EBFn nh\u1EA5t c\u1EE7a VW',monthly:{bh:1000,fuel:2600,reg:170,maint:550},priceFrom:1099,priceTo:1499},
      {name:'Teramont',slug:'teramont',type:'suv',bh:18,desc:'SUV 7 ch\u1ED7 h\u1EA1ng D c\u1EE1 l\u1EDBn',monthly:{bh:1500,fuel:3000,reg:220,maint:700},priceFrom:1799,priceTo:2099},
      {name:'Touareg',slug:'touareg',type:'suv',bh:25,desc:'SUV flagship h\u1EA1ng E',monthly:{bh:2083,fuel:3500,reg:280,maint:900},priceFrom:2499,priceTo:2999},
      {name:'Passat',slug:'passat',type:'sedan',bh:13,desc:'Sedan h\u1EA1ng D sang tr\u1ECDng',monthly:{bh:1083,fuel:2800,reg:175,maint:600},priceFrom:1099,priceTo:1499},
      {name:'Polo',slug:'polo',type:'hatchback',bh:6,desc:'Hatchback \u0111\xF4 th\u1ECB nh\u1ECF g\u1ECDn',monthly:{bh:500,fuel:1800,reg:120,maint:400},priceFrom:599,priceTo:699},
      {name:'Scirocco',slug:'scirocco',type:'coupe',bh:8,desc:'Coupe sporty 2 c\u1EEDa',monthly:{bh:667,fuel:2200,reg:135,maint:500},priceFrom:799,priceTo:999},
    ],
    topInsurers:[
      {name:'AXA Insurance',color:'#00008F',badge:'Xe \u0110\u1EE9c chuy\xEAn s\xE2u',reason:'Kinh nghi\u1EC7m l\xE2u n\u0103m v\u1EDBi xe \u0110\u1EE9c nh\u1EADp. Ph\u1EE5 t\xF9ng VW genuine \u0111\u01B0\u1EE3c duy\u1EC7t t\u1EF1 \u0111\u1ED9ng, \xEDt tranh ch\u1EA5p nh\u1EA5t.'},
      {name:'Liberty Insurance',color:'#2E4099',badge:'B\u1ED3i th\u01B0\u1EDDng nhanh',reason:'B\u1ED3i th\u01B0\u1EDDng 3-5 ng\xE0y l\xE0m vi\u1EC7c. Ph\xF9 h\u1EE3p Tiguan v\xE0 Passat d\xF9ng \u0111\xF4 th\u1ECB th\u01B0\u1EDDng xuy\xEAn.'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'Ph\u1EE7 to\xE0n qu\u1ED1c',reason:'M\u1EA1ng l\u01B0\u1EDBi r\u1ED9ng to\xE0n qu\u1ED1c. Ph\xF9 h\u1EE3p xe VW \u0111i li\xEAn t\u1EC9nh.'},
    ],
    notes:[
      {q:'H\u1ED9p s\u1ED1 DSG c\u1EE7a Volkswagen h\u1ECFng, BH c\xF3 chi tr\u1EA3 kh\xF4ng?',a:'H\u1ED9p s\u1ED1 DSG h\u01B0 do tai n\u1EA1n \u0111\u01B0\u1EE3c BH b\u1ED3i th\u01B0\u1EDDng. H\u01B0 t\u1EF1 nhi\xEAn do m\xF2n ho\u1EB7c l\u1ED7i k\u1EF9 thu\u1EADt thu\u1ED9c ph\u1EA1m vi b\u1EA3o h\xE0nh nh\xE0 s\u1EA3n xu\u1EA5t (3-5 n\u0103m). Chi ph\xED s\u1EEDa DSG kh\xE1 cao (~25-60 tri\u1EC7u), n\xEAn b\u1EA3o tr\xEC \u0111\xFAng chu k\u1EF3 thay d\u1EA7u DSG m\u1ED7i 40.000km.'},
      {q:'Ph\u1EE5 t\xF9ng Volkswagen \u1EDF VN c\xF3 d\u1EC5 t\xECm kh\xF4ng?',a:'Volkswagen VN (qua VWGVN) c\xF3 kho ph\u1EE5 t\xF9ng t\u1EA1i HCM v\xE0 HN. Ph\u1EE5 t\xF9ng th\xE2n v\u1ECF th\u01B0\u1EDDng c\xF3 trong 3-7 ng\xE0y. M\u1ED9t s\u1ED1 linh ki\u1EC7n \u0111\u1EB7c th\xF9 nh\u1EADp tr\u1EF1c ti\u1EBFp t\u1EEB \u0110\u1EE9c c\xF3 th\u1EC3 m\u1EA5t 2-4 tu\u1EA7n. Gi\xE1 ph\u1EE5 t\xF9ng cao h\u01A1n xe Nh\u1EADt 30-50%.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2606\u2606',level:'warn'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Trung b\xECnh cao',level:'warn'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Kh\xE1 \u0111\u1EA7y \u0111\u1EE7',level:'warn'},
      {label:'Garage',val:'\u0110\u1EA1i l\xFD \u1EE7y quy\u1EC1n',level:'warn'},
    ],
    insight:{owners:980,topModel:'Tiguan',monthly:4320,vs_estimate:+0.8,hcm:4600,hn:4050,breakdown:{bh:1000,fuel:2600,road:170,maint:550}},
    garages:[
      {name:'VW Long Bi\xEAn',type:'official',city:'HN',address:'Long Bi\xEAn, H\xE0 N\u1ED9i',bh:['AXA','Liberty'],claims:280,rating:4.7,note:'\u0110\u1EA1i l\xFD VW ch\xEDnh h\xE3ng HN. K\u1EF9 thu\u1EADt vi\xEAn \u0111\xE0o t\u1EA1o t\u1EA1i \u0110\u1EE9c.'},
      {name:'VW Tr\u01B0\u1EDDng Chinh',type:'official',city:'HCM',address:'Tr\u01B0\u1EDDng Chinh, T\xE2n B\xECnh',bh:['AXA'],claims:350,rating:4.7,note:'Showroom VW l\u1EDBn nh\u1EA5t HCM.'},
    ],
    scenarios:['collision','glass','parked'],
  },
  chevrolet:{
    name:'Chevrolet',origin:'M\u1EF9',color:'#D4AF37',tagline:'Phong c\xE1ch M\u1EF9 \xB7 Colorado b\xE1n t\u1EA3i \xB7 N\u1ED9i th\u1EA5t r\u1ED9ng',
    fuels:['x\u0103ng','diesel'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u M\u1EF9 c\u1EE7a General Motors. Colorado l\xE0 m\u1EABu b\xE1n t\u1EA3i b\xE1n ch\u1EA1y top 3 t\u1EA1i VN, c\u1EA1nh tranh tr\u1EF1c ti\u1EBFp v\u1EDBi Ford Ranger v\xE0 Isuzu D-Max. TrailBlazer c\u0169ng t\u1EEBng r\u1EA5t ph\u1ED5 bi\u1EBFn tr\u01B0\u1EDBc khi GM thu h\u1EB9p ho\u1EA1t \u0111\u1ED9ng t\u1EA1i VN.',
    models:[
      {name:'Colorado',slug:'colorado',type:'truck',bh:9,desc:'B\xE1n t\u1EA3i m\u1EA1nh m\u1EBD phong c\xE1ch M\u1EF9',monthly:{bh:750,fuel:2800,reg:155,maint:400},priceFrom:699,priceTo:1099},
      {name:'TrailBlazer',slug:'trailblazer',type:'suv',bh:11,desc:'SUV 7 ch\u1ED7 g\u1EA7m cao',monthly:{bh:917,fuel:3000,reg:165,maint:500},priceFrom:899,priceTo:1199},
      {name:'Captiva',slug:'captiva',type:'suv',bh:8,desc:'SUV 7 ch\u1ED7 \u0111\xF4 th\u1ECB',monthly:{bh:667,fuel:2400,reg:145,maint:420},priceFrom:699,priceTo:899},
      {name:'Cruze',slug:'cruze',type:'sedan',bh:6,desc:'Sedan h\u1EA1ng C gi\xE1 t\u1ED1t',monthly:{bh:500,fuel:2000,reg:125,maint:350},priceFrom:499,priceTo:699},
      {name:'Spark',slug:'spark',type:'hatchback',bh:4,desc:'City car nh\u1ECF g\u1ECDn ti\u1EBFt ki\u1EC7m',monthly:{bh:333,fuel:1400,reg:100,maint:250},priceFrom:299,priceTo:399},
      {name:'Orlando',slug:'orlando',type:'mpv',bh:7,desc:'MPV 7 ch\u1ED7 gia \u0111\xECnh',monthly:{bh:583,fuel:2200,reg:135,maint:380},priceFrom:599,priceTo:799},
    ],
    topInsurers:[
      {name:'B\u1EA3o Minh',color:'#0066CC',badge:'B\xE1n t\u1EA3i chuy\xEAn',reason:'Kinh nghi\u1EC7m b\u1EA3o hi\u1EC3m xe b\xE1n t\u1EA3i Colorado. Ph\u1EE5 t\xF9ng Chevrolet \u0111\u01B0\u1EE3c duy\u1EC7t t\u1ED1t.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Ph\u1EE7 r\u1ED9ng',reason:'M\u1EA1ng l\u01B0\u1EDBi garage r\u1ED9ng, ph\xF9 h\u1EE3p Colorado th\u01B0\u1EDDng xuy\xEAn \u0111i \u0111\u1ECBa h\xECnh.'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'\u1ED4n \u0111\u1ECBnh',reason:'Ph\xF9 h\u1EE3p xe Chevrolet c\u0169, ph\xED th\u1EA5p h\u01A1n nh\u1EDD kh\u1EA5u hao xe \u0111\xE3 xu\u1ED1ng.'},
    ],
    notes:[
      {q:'GM \u0111\xE3 r\xFAt kh\u1ECFi VN, xe Chevrolet c\xF2n mua BH v\xE0 s\u1EEDa \u0111\u01B0\u1EE3c kh\xF4ng?',a:'GM d\u1EEBng l\u1EAFp r\xE1p t\u1EA1i VN t\u1EEB 2019 nh\u01B0ng xe Chevrolet v\u1EABn l\u01B0u h\xE0nh. Ph\u1EE5 t\xF9ng v\u1EABn c\xF3 qua nh\u1EADp kh\u1EA9u t\u01B0 nh\xE2n. BH th\xE2n v\u1ECF ho\xE0n to\xE0n b\xECnh th\u01B0\u1EDDng \u2014 c\xE1c NB v\u1EABn b\u1EA3o hi\u1EC3m v\xE0 s\u1EEDa qua garage t\u01B0 nh\xE2n uy t\xEDn.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2606\u2606\u2606',level:'bad'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Trung b\xECnh',level:'warn'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Nh\u1EADp kh\u1EA9u t\u01B0',level:'warn'},
      {label:'Garage',val:'Garage t\u01B0 nh\xE2n',level:'warn'},
    ],
    insight:{owners:540,topModel:'Colorado',monthly:4103,vs_estimate:-0.5,hcm:4200,hn:4000,breakdown:{bh:750,fuel:2800,road:155,maint:400}},
    garages:[
      {name:'Garage AutoViet HCM',type:'authorized',city:'HCM',address:'B\xECnh Th\u1EA1nh, HCM',bh:['B\u1EA3o Minh','PVI'],claims:210,rating:4.4,note:'Garage t\u01B0 nh\xE2n uy t\xEDn chuy\xEAn Chevrolet. Ph\u1EE5 t\xF9ng nh\u1EADp tr\u1EF1c ti\u1EBFp, gi\xE1 t\u1ED1t.'},
      {name:'Garage M\u1EF9 Auto HN',type:'authorized',city:'HN',address:'Thanh Xu\xE2n, H\xE0 N\u1ED9i',bh:['B\u1EA3o Minh'],claims:160,rating:4.3,note:'Chuy\xEAn xe M\u1EF9 Chevrolet v\xE0 Ford. 10+ n\u0103m kinh nghi\u1EC7m.'},
    ],
    scenarios:['collision','parked','theft'],
  },
  porsche:{
    name:'Porsche',origin:'\u0110\u1EE9c',color:'#8B0000',tagline:'Hi\u1EC7u su\u1EA5t thu\u1EA7n t\xFAy \xB7 Sang tr\u1ECDng \xB7 Bi\u1EC3u t\u01B0\u1EE3ng',
    fuels:['x\u0103ng','phev','ev'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u xe th\u1EC3 thao cao c\u1EA5p \u0110\u1EE9c c\u1EE7a t\u1EADp \u0111o\xE0n Volkswagen Group. Macan v\xE0 Cayenne l\xE0 2 m\u1EABu SUV \u0111ang \u0111\u01B0\u1EE3c gi\u1EDBi nh\xE0 gi\xE0u VN \u01B0a chu\u1ED9ng. Ph\xED b\u1EA3o hi\u1EC3m cao nh\u01B0ng tr\u1EA3i nghi\u1EC7m l\xE1i v\xE0 \u0111\u1EB3ng c\u1EA5p th\u01B0\u01A1ng hi\u1EC7u l\xE0 kh\xE1c bi\u1EC7t l\u1EDBn.',
    models:[
      {name:'Macan',slug:'macan',type:'suv',bh:22,desc:'SUV th\u1EC3 thao compact h\u1EA1ng C',monthly:{bh:1833,fuel:3200,reg:250,maint:800},priceFrom:2099,priceTo:2999},
      {name:'Cayenne',slug:'cayenne',type:'suv',bh:35,desc:'SUV flagship h\u1EA1ng D cao c\u1EA5p',monthly:{bh:2917,fuel:4000,reg:380,maint:1200},priceFrom:3499,priceTo:5999},
      {name:'Taycan',slug:'taycan',type:'ev',bh:45,desc:'Sedan \u0111i\u1EC7n hi\u1EC7u su\u1EA5t cao',monthly:{bh:3750,fuel:1200,reg:480,maint:900},priceFrom:4999,priceTo:7999},
      {name:'Panamera',slug:'panamera',type:'sedan',bh:40,desc:'Sedan/coupe grand touring',monthly:{bh:3333,fuel:4200,reg:430,maint:1100},priceFrom:4299,priceTo:6999},
      {name:'911',slug:'911',type:'coupe',bh:50,desc:'Coupe th\u1EC3 thao bi\u1EC3u t\u01B0\u1EE3ng',monthly:{bh:4167,fuel:4500,reg:520,maint:1500},priceFrom:5999,priceTo:12000},
    ],
    topInsurers:[
      {name:'AXA Insurance',color:'#00008F',badge:'Xe cao c\u1EA5p chuy\xEAn',reason:'Chuy\xEAn b\u1EA3o hi\u1EC3m xe nh\u1EADp CBU gi\xE1 tr\u1ECB cao. Ph\u1EE5 t\xF9ng Porsche ch\xEDnh h\xE3ng \u0111\u01B0\u1EE3c duy\u1EC7t to\xE0n b\u1ED9.'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'Gi\xE1 tr\u1ECB cao',reason:'G\xF3i Premium Car ph\xF9 h\u1EE3p Porsche. B\u1ED3i th\u01B0\u1EDDng \u0111\xFAng gi\xE1 tr\u1ECB th\u1ECB tr\u01B0\u1EDDng kh\xF4ng kh\u1EA5u hao nhanh.'},
      {name:'PTI Insurance',color:'#003087',badge:'Chuy\xEAn xe th\u1EC3 thao',reason:'C\xF3 \u0111i\u1EC1u kho\u1EA3n ri\xEAng cho xe th\u1EC3 thao. Ph\xED c\u1EA1nh tranh cho Macan so v\u1EDBi c\xE1c NB kh\xE1c.'},
    ],
    notes:[
      {q:'B\u1EA3o hi\u1EC3m Porsche c\xF3 \u0111\u1EAFt kh\xF4ng v\xE0 b\u1EA3o v\u1EC7 \u0111\u01B0\u1EE3c g\xEC?',a:'Ph\xED BH th\xE2n v\u1ECF Porsche Macan th\u01B0\u1EDDng 22-28 tri\u1EC7u/n\u0103m (2-2.5% gi\xE1 tr\u1ECB xe). Cayenne 35-45 tri\u1EC7u/n\u0103m. N\xEAn ch\u1ECDn g\xF3i kh\xF4ng gi\u1EDBi h\u1EA1n m\u1EE9c tr\u1EA7n b\u1ED3i th\u01B0\u1EDDng ph\u1EE5 t\xF9ng \u2014 m\u1ED9t chi\u1EBFc \u0111\xE8n pha Porsche c\xF3 th\u1EC3 15-25 tri\u1EC7u.'},
      {q:'Porsche s\u1EEDa \u1EDF \u0111\xE2u t\u1EA1i VN khi tai n\u1EA1n?',a:'Porsche VN c\xF3 2 showroom service t\u1EA1i HCM v\xE0 HN v\u1EDBi k\u1EF9 thu\u1EADt vi\xEAn \u0111\u01B0\u1EE3c \u0111\xE0o t\u1EA1o tr\u1EF1c ti\u1EBFp t\u1EEB Stuttgart. M\u1ED9t s\u1ED1 NB c\xF3 th\u1ECFa thu\u1EADn v\u1EDBi Porsche Center Vietnam \u2014 \u01B0u ti\xEAn ch\u1ECDn NB n\xE0y \u0111\u1EC3 ph\u1EE5 t\xF9ng genuine \u0111\u01B0\u1EE3c duy\u1EC7t t\u1EF1 \u0111\u1ED9ng.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2605\u2606',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'R\u1EA5t cao',level:'bad'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Ch\xEDnh h\xE3ng \u0110\u1EE9c',level:'warn'},
      {label:'Service Center',val:'2 \u0111i\u1EC3m VN',level:'warn'},
    ],
    insight:{owners:320,topModel:'Macan',monthly:6083,vs_estimate:+1.2,hcm:6500,hn:5600,breakdown:{bh:1833,fuel:3200,road:250,maint:800}},
    garages:[
      {name:'Porsche Center HCM',type:'official',city:'HCM',address:'Xa l\u1ED9 H\xE0 N\u1ED9i, Th\u1EE7 \u0110\u1EE9c',bh:['AXA','B\u1EA3o Vi\u1EC7t'],claims:180,rating:4.9,note:'Porsche Authorized Service. K\u1EF9 thu\u1EADt vi\xEAn \u0111\xE0o t\u1EA1o Stuttgart. Ph\u1EE5 t\xF9ng genuine 100%.'},
      {name:'Porsche Center HN',type:'official',city:'HN',address:'Ph\u1EA1m H\xF9ng, Nam T\u1EEB Li\xEAm',bh:['AXA'],claims:130,rating:4.8,note:'Porsche Center ch\xEDnh h\xE3ng t\u1EA1i H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','fire','theft'],
  },
  jaguar:{
    name:'Jaguar',origin:'Anh',color:'#005A2B',tagline:'Thi\u1EBFt k\u1EBF Anh qu\u1ED1c \xB7 \u0110\u1EB3ng c\u1EA5p \xB7 Hi\u1EC7u su\u1EA5t',
    fuels:['x\u0103ng','phev'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u xe sang Anh thu\u1ED9c Jaguar Land Rover (\u1EA4n \u0110\u1ED9 - Tata Motors). F-Pace v\xE0 E-Pace l\xE0 2 m\u1EABu SUV \u0111\u01B0\u1EE3c gi\u1EDBi th\u01B0\u1EE3ng l\u01B0u VN \u01B0a chu\u1ED9ng v\xEC thi\u1EBFt k\u1EBF ri\xEAng bi\u1EC7t kh\xF4ng tr\xF9ng l\u1EABn v\u1EDBi xe \u0110\u1EE9c ph\u1ED5 th\xF4ng.',
    models:[
      {name:'F-PACE',slug:'f-pace',type:'suv',bh:30,desc:'SUV th\u1EC3 thao h\u1EA1ng D flagship',monthly:{bh:2500,fuel:3800,reg:320,maint:1000},priceFrom:2999,priceTo:4599},
      {name:'E-PACE',slug:'e-pace',type:'suv',bh:18,desc:'SUV compact th\u1EC3 thao h\u1EA1ng C',monthly:{bh:1500,fuel:3000,reg:220,maint:800},priceFrom:1899,priceTo:2499},
      {name:'XE',slug:'xe',type:'sedan',bh:15,desc:'Sedan th\u1EC3 thao h\u1EA1ng C',monthly:{bh:1250,fuel:2800,reg:200,maint:700},priceFrom:1599,priceTo:2199},
      {name:'XF',slug:'xf',type:'sedan',bh:22,desc:'Sedan grand touring h\u1EA1ng D',monthly:{bh:1833,fuel:3200,reg:260,maint:900},priceFrom:2199,priceTo:3099},
      {name:'XJ',slug:'xj',type:'sedan',bh:35,desc:'Sedan flagship h\u1EA1ng E',monthly:{bh:2917,fuel:4000,reg:380,maint:1200},priceFrom:3499,priceTo:5499},
      {name:'F-TYPE',slug:'f-type',type:'coupe',bh:40,desc:'Coupe/Roadster th\u1EC3 thao',monthly:{bh:3333,fuel:4500,reg:430,maint:1400},priceFrom:3999,priceTo:6499},
    ],
    topInsurers:[
      {name:'AXA Insurance',color:'#00008F',badge:'Xe Anh cao c\u1EA5p',reason:'Kinh nghi\u1EC7m l\xE2u n\u0103m v\u1EDBi Jaguar Land Rover. Ph\u1EE5 t\xF9ng JLR genuine \u0111\u01B0\u1EE3c duy\u1EC7t to\xE0n b\u1ED9 kh\xF4ng tranh ch\u1EA5p.'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'Xe nh\u1EADp gi\xE1 tr\u1ECB cao',reason:'G\xF3i b\u1EA3o hi\u1EC3m Premium ph\xF9 h\u1EE3p Jaguar. B\u1ED3i th\u01B0\u1EDDng \u0111\xFAng gi\xE1 tr\u1ECB th\u1EF1c kh\xF4ng kh\u1EA5u hao cao.'},
    ],
    notes:[
      {q:'Jaguar s\u1EEDa ch\u1EEFa \u1EDF \u0111\xE2u t\u1EA1i VN sau tai n\u1EA1n?',a:'Jaguar Land Rover VN c\xF3 showroom service t\u1EA1i HCM (Th\u1EE7 \u0110\u1EE9c) v\xE0 HN. Ph\u1EE5 t\xF9ng nh\u1EADp t\u1EEB UK v\xE0 \u1EA4n \u0110\u1ED9. Th\u1EDDi gian ch\u1EDD ph\u1EE5 t\xF9ng \u0111\u1EB7c th\xF9 c\xF3 th\u1EC3 2-4 tu\u1EA7n. N\xEAn ch\u1ECDn NB c\xF3 \u0111i\u1EC1u kho\u1EA3n xe thay th\u1EBF trong th\u1EDDi gian s\u1EEDa.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2606\u2606',level:'warn'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'R\u1EA5t cao',level:'bad'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Nh\u1EADp UK/\u1EA4n \u0110\u1ED9',level:'warn'},
      {label:'Service Center',val:'\xCDt \u0111i\u1EC3m',level:'warn'},
    ],
    insight:{owners:210,topModel:'F-PACE',monthly:7630,vs_estimate:+1.5,hcm:8200,hn:7000,breakdown:{bh:2500,fuel:3800,road:320,maint:1000}},
    garages:[
      {name:'JLR Center HCM',type:'official',city:'HCM',address:'Xa l\u1ED9 H\xE0 N\u1ED9i, Th\u1EE7 \u0110\u1EE9c',bh:['AXA','B\u1EA3o Vi\u1EC7t'],claims:120,rating:4.7,note:'Jaguar Land Rover Authorized Service Center. Ph\u1EE5 t\xF9ng genuine nh\u1EADp t\u1EEB UK.'},
      {name:'JLR Center HN',type:'official',city:'HN',address:'Ph\u1EA1m H\xF9ng, Nam T\u1EEB Li\xEAm',bh:['AXA'],claims:90,rating:4.6,note:'JLR Service Center ch\xEDnh h\xE3ng t\u1EA1i H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','fire','theft'],
  },
  skoda:{
    name:'\u0160koda',origin:'S\xE9c',color:'#4CAF50',tagline:'Xe S\xE9c tinh t\u1EBF \xB7 Kh\xF4ng gian r\u1ED9ng \xB7 Gi\xE1 c\u1EA1nh tranh',
    fuels:['x\u0103ng'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u S\xE9c thu\u1ED9c Volkswagen Group. N\u1ED5i ti\u1EBFng v\u1EDBi kh\xF4ng gian n\u1ED9i th\u1EA5t r\u1ED9ng h\u01A1n h\u1EB3n \u0111\u1ED1i th\u1EE7 c\xF9ng ph\xE2n kh\xFAc nh\u1EDD tri\u1EBFt l\xFD Simply Clever. Karoq v\xE0 Kodiaq \u0111ang \u0111\u01B0\u1EE3c ph\xE2n ph\u1ED1i ch\xEDnh h\xE3ng t\u1EA1i VN.',
    models:[
      {name:'Karoq',slug:'karoq',type:'suv',bh:11,desc:'SUV h\u1EA1ng C kh\xF4ng gian r\u1ED9ng',monthly:{bh:917,fuel:2400,reg:165,maint:500},priceFrom:899,priceTo:1299},
      {name:'Kodiaq',slug:'kodiaq',type:'suv',bh:15,desc:'SUV 7 ch\u1ED7 h\u1EA1ng D r\u1ED9ng r\xE3i',monthly:{bh:1250,fuel:2800,reg:200,maint:650},priceFrom:1399,priceTo:1799},
      {name:'Slavia',slug:'slavia',type:'sedan',bh:7,desc:'Sedan h\u1EA1ng B nh\u1ECF g\u1ECDn',monthly:{bh:583,fuel:2000,reg:130,maint:400}},
      {name:'Kushaq',slug:'kushaq',type:'suv',bh:8,desc:'SUV compact entry',monthly:{bh:667,fuel:2200,reg:140,maint:450}},
    ],
    topInsurers:[
      {name:'AXA Insurance',color:'#00008F',badge:'Volkswagen Group',reason:'Kinh nghi\u1EC7m v\u1EDBi to\xE0n b\u1ED9 xe VW Group. Ph\u1EE5 t\xF9ng \u0160koda \u0111\u01B0\u1EE3c duy\u1EC7t nh\u01B0 VW, \xEDt tranh ch\u1EA5p.'},
      {name:'Liberty Insurance',color:'#2E4099',badge:'Ph\u1EE5 t\xF9ng t\u1ED1t',reason:'M\u1EA1ng l\u01B0\u1EDBi garage r\u1ED9ng, ph\xF9 h\u1EE3p Karoq d\xF9ng n\u1ED9i \u0111\xF4.'},
    ],
    notes:[
      {q:'\u0160koda VN c\xF3 ph\u1EE5 t\xF9ng ch\xEDnh h\xE3ng d\u1EC5 t\xECm kh\xF4ng?',a:'\u0160koda VN ph\xE2n ph\u1ED1i qua VWGVN n\xEAn ph\u1EE5 t\xF9ng d\xF9ng chung chu\u1ED7i cung \u1EE9ng VW. Ph\u1EE5 t\xF9ng Karoq v\xE0 Kodiaq kh\xE1 s\u1EB5n t\u1EA1i HCM v\xE0 HN (3-7 ng\xE0y). T\u1ED1t h\u01A1n Peugeot hay Jaguar nh\u01B0ng \u0111\u1EAFt h\u01A1n xe Nh\u1EADt.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2606\u2606',level:'warn'},
      {label:'Kh\xF4ng gian',val:'R\u1ED9ng nh\u1EA5t ph\xE2n kh\xFAc',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Trung b\xECnh',level:'warn'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Qua VW Group',level:'warn'},
    ],
    insight:{owners:380,topModel:'Karoq',monthly:4032,vs_estimate:+0.6,hcm:4300,hn:3760,breakdown:{bh:917,fuel:2400,road:165,maint:550}},
    garages:[
      {name:'\u0160koda Tr\u01B0\u1EDDng Chinh',type:'official',city:'HCM',address:'Tr\u01B0\u1EDDng Chinh, T\xE2n B\xECnh',bh:['AXA','Liberty'],claims:160,rating:4.6,note:'\u0110\u1EA1i l\xFD \u0160koda ch\xEDnh h\xE3ng HCM. Ph\u1EE5 t\xF9ng t\u1EEB kho VW Group.'},
      {name:'\u0160koda Long Bi\xEAn',type:'official',city:'HN',address:'Long Bi\xEAn, H\xE0 N\u1ED9i',bh:['AXA'],claims:120,rating:4.6,note:'\u0110\u1EA1i l\xFD \u0160koda ch\xEDnh h\xE3ng H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','glass','parked'],
  },
  mini:{
    name:'MINI',origin:'Anh',color:'#231F20',tagline:'Icon \u0111\xF4 th\u1ECB \xB7 C\xE1 t\xEDnh \xB7 Fun to drive',
    fuels:['x\u0103ng','ev'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Anh thu\u1ED9c BMW Group. MINI l\xE0 bi\u1EC3u t\u01B0\u1EE3ng xe \u0111\xF4 th\u1ECB c\xE1 t\xEDnh v\u1EDBi thi\u1EBFt k\u1EBF retro-modern kh\xF4ng \u0111\u1ED5i t\u1EEB th\u1EADp ni\xEAn 60. Cooper v\xE0 Cooper S l\xE0 2 m\u1EABu \u0111\u01B0\u1EE3c d\xE2n ch\u01A1i xe VN y\xEAu th\xEDch v\xEC kh\xE1c bi\u1EC7t tuy\u1EC7t \u0111\u1ED1i so v\u1EDBi xe Nh\u1EADt H\xE0n.',
    models:[
      {name:'Cooper',slug:'cooper',type:'hatchback',bh:10,desc:'Hatchback \u0111\xF4 th\u1ECB c\xE1 t\xEDnh 3/5 c\u1EEDa',monthly:{bh:833,fuel:2200,reg:155,maint:600},priceFrom:999,priceTo:1299},
      {name:'Cooper S',slug:'cooper-s',type:'hatchback',bh:12,desc:'Hatchback th\u1EC3 thao 192hp',monthly:{bh:1000,fuel:2400,reg:175,maint:650},priceFrom:1199,priceTo:1499},
      {name:'Countryman',slug:'countryman',type:'suv',bh:14,desc:'SUV 5 c\u1EEDa to h\u01A1n Cooper',monthly:{bh:1167,fuel:2600,reg:195,maint:700},priceFrom:1399,priceTo:1999},
      {name:'JCW',slug:'jcw',type:'hatchback',bh:15,desc:'John Cooper Works - phi\xEAn b\u1EA3n \u0111ua',monthly:{bh:1250,fuel:2800,reg:210,maint:800},priceFrom:1699,priceTo:2199},
      {name:'Electric',slug:'mini-electric',type:'ev',bh:11,desc:'MINI hatchback \u0111i\u1EC7n thu\u1EA7n t\xFAy',monthly:{bh:917,fuel:600,reg:165,maint:400},priceFrom:1099,priceTo:1299},
    ],
    topInsurers:[
      {name:'AXA Insurance',color:'#00008F',badge:'BMW Group chuy\xEAn',reason:'C\xF9ng chuy\xEAn BMW Group. Ph\u1EE5 t\xF9ng MINI v\xE0 BMW shared platform \u0111\u01B0\u1EE3c duy\u1EC7t nhanh.'},
      {name:'Liberty Insurance',color:'#2E4099',badge:'Xe \u0111\xF4 th\u1ECB',reason:'Ph\xF9 h\u1EE3p MINI d\xF9ng n\u1ED9i \u0111\xF4. B\u1ED3i th\u01B0\u1EDDng nhanh v\u1EDBi h\u01B0 h\u1ECFng nh\u1ECF th\u01B0\u1EDDng g\u1EB7p \u1EDF xe c\xE1 t\xEDnh.'},
    ],
    notes:[
      {q:'MINI h\u1ECFng c\xF3 kh\xF3 s\u1EEDa t\u1EA1i VN kh\xF4ng?',a:'MINI VN (BMW Group Vietnam) c\xF3 Service Center t\u1EA1i HCM v\xE0 HN. Ph\u1EE5 t\xF9ng d\xF9ng chung m\u1ED9t ph\u1EA7n v\u1EDBi BMW n\xEAn kh\xE1 s\u1EB5n. Gi\xE1 ph\u1EE5 t\xF9ng cao h\u01A1n xe \u0111\u1EA1i ch\xFAng 50-80% nh\u01B0ng th\u1EA5p h\u01A1n Ferrari hay Lamborghini.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2606\u2606',level:'warn'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Cao',level:'warn'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Qua BMW Group',level:'warn'},
      {label:'C\xE1 t\xEDnh',val:'\u0110\u1ED9c nh\u1EA5t',level:'good'},
    ],
    insight:{owners:290,topModel:'Cooper',monthly:3788,vs_estimate:+0.9,hcm:4000,hn:3500,breakdown:{bh:833,fuel:2200,road:155,maint:600}},
    garages:[
      {name:'MINI Studio HCM',type:'official',city:'HCM',address:'Xa l\u1ED9 H\xE0 N\u1ED9i, Th\u1EE7 \u0110\u1EE9c',bh:['AXA','Liberty'],claims:150,rating:4.7,note:'Showroom & Service MINI ch\xEDnh h\xE3ng HCM. K\u1EF9 thu\u1EADt vi\xEAn BMW Group.'},
      {name:'MINI Studio HN',type:'official',city:'HN',address:'Ph\u1EA1m H\xF9ng, Nam T\u1EEB Li\xEAm',bh:['AXA'],claims:110,rating:4.6,note:'MINI Service Center ch\xEDnh h\xE3ng H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','theft','parked'],
  },
  renault:{
    name:'Renault',origin:'Ph\xE1p',color:'#FFCD00',tagline:'Phong c\xE1ch Ph\xE1p \xB7 \u0110\u1ED5i m\u1EDBi \xB7 Th\u1EF1c d\u1EE5ng',
    fuels:['x\u0103ng'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Ph\xE1p l\u1EDBn nh\u1EA5t th\u1EBF gi\u1EDBi. Renault t\u1EEBng c\xF3 m\u1EB7t t\u1EA1i VN qua li\xEAn doanh nh\u01B0ng hi\u1EC7n nh\u1EADp kh\u1EA9u CBU s\u1ED1 l\u01B0\u1EE3ng h\u1EA1n ch\u1EBF. Megane l\xE0 m\u1EABu hatchback/sedan ch\xE2u \xC2u \u0111\u01B0\u1EE3c m\u1ED9t s\u1ED1 ng\u01B0\u1EDDi \u01B0a chu\u1ED9ng v\xEC phong c\xE1ch kh\xE1c bi\u1EC7t.',
    models:[
      {name:'Megane',slug:'megane',type:'hatchback',bh:8,desc:'Hatchback ch\xE2u \xC2u phong c\xE1ch Ph\xE1p',monthly:{bh:667,fuel:2200,reg:140,maint:500},priceFrom:799,priceTo:1099},
      {name:'Koleos',slug:'koleos',type:'suv',bh:10,desc:'SUV h\u1EA1ng C d\xE1ng Ph\xE1p',monthly:{bh:833,fuel:2400,reg:160,maint:550},priceFrom:999,priceTo:1299},
    ],
    topInsurers:[
      {name:'AXA Insurance',color:'#00008F',badge:'Xe ch\xE2u \xC2u',reason:'Kinh nghi\u1EC7m xe nh\u1EADp ch\xE2u \xC2u. Ph\xF9 h\u1EE3p Renault CBU nh\u1EADp kh\u1EA9u s\u1ED1 l\u01B0\u1EE3ng nh\u1ECF.'},
      {name:'Liberty Insurance',color:'#2E4099',badge:'Ph\u1EE7 \u0111\xF4 th\u1ECB',reason:'B\u1ED3i th\u01B0\u1EDDng nhanh t\u1EA1i th\xE0nh ph\u1ED1 l\u1EDBn.'},
    ],
    notes:[
      {q:'Renault ph\u1EE5 t\xF9ng \u1EDF VN c\xF3 kh\xF3 ki\u1EBFm kh\xF4ng?',a:'Renault VN ph\xE2n ph\u1ED1i qua nh\xE0 nh\u1EADp kh\u1EA9u \u0111\u1ED9c l\u1EADp, ph\u1EE5 t\xF9ng \xEDt h\u01A1n Peugeot hay VW. Ph\u1EE5 t\xF9ng th\xE2n v\u1ECF nh\u1EADp t\u1EEB Ph\xE1p ho\u1EB7c Th\xE1i c\xF3 th\u1EC3 m\u1EA5t 2-6 tu\u1EA7n. N\xEAn mua b\u1EA3o hi\u1EC3m c\xF3 quy\u1EC1n l\u1EE3i xe thay th\u1EBF trong th\u1EDDi gian s\u1EEDa ch\u1EEFa.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2606\u2606\u2606',level:'bad'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Cao',level:'warn'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Kh\xF3 t\xECm',level:'bad'},
      {label:'Garage',val:'R\u1EA5t \xEDt',level:'bad'},
    ],
    insight:{owners:120,topModel:'Megane',monthly:3507,vs_estimate:+1.1,hcm:3700,hn:3300,breakdown:{bh:667,fuel:2200,road:140,maint:500}},
    garages:[
      {name:'Garage ch\xE2u \xC2u Auto',type:'authorized',city:'HCM',address:'Qu\u1EADn 7, HCM',bh:['AXA'],claims:60,rating:4.3,note:'Garage t\u01B0 nh\xE2n chuy\xEAn xe ch\xE2u \xC2u. C\xF3 kinh nghi\u1EC7m v\u1EDBi Renault nh\u1EADp kh\u1EA9u.'},
    ],
    scenarios:['collision','parked'],
  },
  geely:{
    name:'Geely',origin:'Trung Qu\u1ED1c',color:'#0047AB',tagline:'Xe Trung Qu\u1ED1c th\u1EBF h\u1EC7 m\u1EDBi \xB7 C\xF4ng ngh\u1EC7 cao \xB7 Gi\xE1 t\u1ED1t',
    fuels:['x\u0103ng'],popular:false,
    desc:'T\u1EADp \u0111o\xE0n xe h\u01A1i t\u01B0 nh\xE2n l\u1EDBn nh\u1EA5t Trung Qu\u1ED1c, s\u1EDF h\u1EEFu Volvo, Lotus v\xE0 Polestar. Coolray l\xE0 m\u1EABu crossover Trung Qu\u1ED1c \u0111\u1EA7u ti\xEAn chinh ph\u1EE5c ng\u01B0\u1EDDi d\xF9ng VN nh\u1EDD thi\u1EBFt k\u1EBF \u0111\u1EB9p v\xE0 trang b\u1ECB hi\u1EC7n \u0111\u1EA1i \u1EDF ph\xE2n kh\xFAc gi\xE1 600-700 tri\u1EC7u.',
    models:[
      {name:'Coolray',slug:'coolray',type:'suv',bh:7,desc:'Crossover compact thi\u1EBFt k\u1EBF tr\u1EBB trung',monthly:{bh:583,fuel:2000,reg:130,maint:250},priceFrom:559,priceTo:699},
      {name:'Emgrand',slug:'emgrand',type:'sedan',bh:5,desc:'Sedan h\u1EA1ng B gi\xE1 r\u1EBB',monthly:{bh:417,fuel:1800,reg:115,maint:220},priceFrom:399,priceTo:549},
    ],
    topInsurers:[
      {name:'B\u1EA3o Minh',color:'#0066CC',badge:'Xe Trung Qu\u1ED1c',reason:'C\xF3 kinh nghi\u1EC7m v\u1EDBi xe Trung Qu\u1ED1c \u0111ang t\u0103ng tr\u01B0\u1EDFng. Ph\u1EE5 t\xF9ng Geely s\u1EB5n h\u01A1n d\u1EF1 ki\u1EBFn.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Ph\u1EE7 r\u1ED9ng',reason:'M\u1EA1ng l\u01B0\u1EDBi garage r\u1ED9ng, ph\xF9 h\u1EE3p Coolray \u0111i t\u1EC9nh th\xE0nh.'},
    ],
    notes:[
      {q:'Geely Coolray ph\u1EE5 t\xF9ng c\xF3 d\u1EC5 ki\u1EBFm kh\xF4ng?',a:'Geely VN qua li\xEAn doanh THACO c\xF3 kho ph\u1EE5 t\xF9ng t\u1EA1i HCM. Ph\u1EE5 t\xF9ng th\xE2n v\u1ECF Coolray (c\u1EA3n, \u0111\xE8n) th\u01B0\u1EDDng c\xF3 trong 3-5 ng\xE0y. Ph\u1EE5 t\xF9ng \u0111\u1ED9ng c\u01A1 v\xE0 h\u1ED9p s\u1ED1 \u0111\u1EB7c th\xF9 c\xF3 th\u1EC3 ch\u1EDD 1-2 tu\u1EA7n.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2606\u2606\u2606',level:'bad'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'R\u1EBB',level:'good'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Kh\xE1 s\u1EB5n HCM',level:'warn'},
      {label:'Thi\u1EBFt k\u1EBF',val:'Tr\u1EBB trung',level:'good'},
    ],
    insight:{owners:480,topModel:'Coolray',monthly:2963,vs_estimate:-0.2,hcm:3000,hn:2920,breakdown:{bh:583,fuel:2000,road:130,maint:250}},
    garages:[
      {name:'Geely Tr\u01B0\u1EDDng Chinh',type:'official',city:'HCM',address:'Tr\u01B0\u1EDDng Chinh, T\xE2n B\xECnh',bh:['B\u1EA3o Minh','PVI'],claims:180,rating:4.4,note:'\u0110\u1EA1i l\xFD Geely ch\xEDnh h\xE3ng HCM qua THACO.'},
      {name:'Geely C\u1EA7u Gi\u1EA5y',type:'official',city:'HN',address:'C\u1EA7u Gi\u1EA5y, H\xE0 N\u1ED9i',bh:['B\u1EA3o Minh'],claims:130,rating:4.3,note:'\u0110\u1EA1i l\xFD Geely ch\xEDnh h\xE3ng H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','parked','theft'],
  },
  omoda:{
    name:'Omoda',origin:'Trung Qu\u1ED1c (Chery)',color:'#E31837',tagline:'M\u1EDBi t\u1EA1i VN \xB7 Thi\u1EBFt k\u1EBF t\xE1o b\u1EA1o \xB7 Trang b\u1ECB hi\u1EC7n \u0111\u1EA1i',
    fuels:['x\u0103ng'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u con c\u1EE7a Chery Auto (Trung Qu\u1ED1c), t\u1EADp trung v\xE0o ph\xE2n kh\xFAc crossover thi\u1EBFt k\u1EBF b\u1EAFt m\u1EAFt cho gi\u1EDBi tr\u1EBB. Omoda C5 v\u1EEBa ra m\u1EAFt t\u1EA1i VN v\u1EDBi thi\u1EBFt k\u1EBF \u0111\u1EB7c bi\u1EC7t n\u1ED5i b\u1EADt v\xE0 trang b\u1ECB c\xF4ng ngh\u1EC7 \u0111\u1EA7y \u0111\u1EE7 \u1EDF m\u1EE9c gi\xE1 h\u1EA5p d\u1EABn.',
    models:[
      {name:'C5',slug:'c5',type:'suv',bh:7,desc:'Crossover thi\u1EBFt k\u1EBF t\xE1o b\u1EA1o cho gi\u1EDBi tr\u1EBB',monthly:{bh:583,fuel:2000,reg:130,maint:280},priceFrom:599,priceTo:799},
    ],
    topInsurers:[
      {name:'B\u1EA3o Minh',color:'#0066CC',badge:'Xe Trung Qu\u1ED1c',reason:'Chuy\xEAn xe Trung Qu\u1ED1c m\u1EDBi v\xE0o VN. Ph\u1EE5 t\xF9ng Chery/Omoda qua k\xEAnh nh\u1EADp ch\xEDnh h\xE3ng.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Ph\u1EE7 r\u1ED9ng',reason:'Ph\xF9 h\u1EE3p Omoda d\xF9ng \u0111\xF4 th\u1ECB. B\u1ED3i th\u01B0\u1EDDng nhanh.'},
    ],
    notes:[
      {q:'Omoda C5 m\u1EDBi ra m\u1EAFt VN, ph\u1EE5 t\xF9ng v\xE0 garage s\u1EBD th\u1EBF n\xE0o?',a:'Chery VN \u0111ang x\xE2y d\u1EF1ng m\u1EA1ng l\u01B0\u1EDBi \u0111\u1EA1i l\xFD. Ph\u1EE5 t\xF9ng th\xE2n v\u1ECF nh\u1EADp tr\u1EF1c ti\u1EBFp t\u1EEB TQ, th\u1EDDi gian ch\u1EDD c\xF3 th\u1EC3 d\xE0i h\u01A1n xe \u0111\xE3 ph\u1ED5 bi\u1EBFn. N\xEAn mua BH c\xF3 \u0111i\u1EC1u kho\u1EA3n xe thay th\u1EBF v\xE0 kh\xF4ng gi\u1EDBi h\u1EA1n th\u1EDDi gian s\u1EEDa ch\u1EEFa.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'Ch\u01B0a x\xE1c \u0111\u1ECBnh',level:'warn'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'D\u1EF1 ki\u1EBFn th\u1EA5p',level:'good'},
      {label:'Ph\u1EE5 t\xF9ng',val:'\u0110ang x\xE2y d\u1EF1ng',level:'warn'},
      {label:'Thi\u1EBFt k\u1EBF',val:'R\u1EA5t n\u1ED5i b\u1EADt',level:'good'},
    ],
    insight:{owners:190,topModel:'C5',monthly:2993,vs_estimate:0,hcm:3000,hn:2980,breakdown:{bh:583,fuel:2000,road:130,maint:280}},
    garages:[
      {name:'Omoda HCM',type:'official',city:'HCM',address:'Qu\u1ED1c l\u1ED9 1A, B\xECnh T\xE2n',bh:['B\u1EA3o Minh'],claims:50,rating:4.3,note:'Showroom Omoda ch\xEDnh h\xE3ng HCM. Kho ph\u1EE5 t\xF9ng \u0111ang \u0111\u01B0\u1EE3c x\xE2y d\u1EF1ng.'},
    ],
    scenarios:['collision','parked'],
  },
  jaecoo:{
    name:'Jaecoo',origin:'Trung Qu\u1ED1c (Chery)',color:'#2F4F4F',tagline:'Off-road style \xB7 Gi\xE1 ph\u1EA3i ch\u0103ng \xB7 C\xE1 t\xEDnh \u0111\u1ECBa h\xECnh',
    fuels:['x\u0103ng'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u SUV off-road style c\u1EE7a Chery Auto, c\xF9ng nh\xE0 v\u1EDBi Omoda. Jaecoo J7 h\u01B0\u1EDBng \u0111\u1EBFn ng\u01B0\u1EDDi y\xEAu th\xEDch phong c\xE1ch \u0111\u1ECBa h\xECnh nam t\xEDnh nh\u01B0ng ng\xE2n s\xE1ch t\u1EA7m trung. \u0110ang ph\xE2n ph\u1ED1i ch\xEDnh h\xE3ng t\u1EA1i VN t\u1EEB 2024.',
    models:[
      {name:'J7',slug:'j7',type:'suv',bh:8,desc:'SUV off-road style 5 ch\u1ED7',monthly:{bh:667,fuel:2400,reg:145,maint:300},priceFrom:699,priceTo:899},
    ],
    topInsurers:[
      {name:'B\u1EA3o Minh',color:'#0066CC',badge:'Xe Trung Qu\u1ED1c',reason:'Kinh nghi\u1EC7m v\u1EDBi Chery/Jaecoo. Ph\u1EE5 t\xF9ng qua k\xEAnh ph\xE2n ph\u1ED1i ch\xEDnh h\xE3ng.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Ph\u1EE7 r\u1ED9ng',reason:'Ph\xF9 h\u1EE3p J7 \u0111i \u0111\u1ECBa h\xECnh. B\u1EA3o hi\u1EC3m to\xE0n di\u1EC7n h\u01A1n cho xe off-road.'},
    ],
    notes:[
      {q:'Jaecoo J7 d\xF9ng \u0111i \u0111\u1ECBa h\xECnh c\xF3 \u1EA3nh h\u01B0\u1EDFng \u0111\u1EBFn BH kh\xF4ng?',a:'Tham gia off-road nghi\u1EC7p d\u01B0 (\u0111\u01B0\u1EDDng m\xF2n, \u0111\u01B0\u1EDDng r\u1EEBng th\xF4ng th\u01B0\u1EDDng) kh\xF4ng \u1EA3nh h\u01B0\u1EDFng \u0111\u1EBFn BH th\xE2n v\u1ECF ti\xEAu chu\u1EA9n. H\u01B0 h\u1ECFng do l\u1ED3i l\xF5m \u0111\u01B0\u1EDDng off-road th\xF4ng th\u01B0\u1EDDng \u0111\u01B0\u1EE3c b\u1ED3i th\u01B0\u1EDDng. \u0110ua xe hay \u0111i v\xE0o khu v\u1EF1c nguy hi\u1EC3m c\xF3 c\u1EA3nh b\xE1o (bi\u1EC3n c\u1EA5m) th\u01B0\u1EDDng b\u1ECB t\u1EEB ch\u1ED1i.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'Ch\u01B0a x\xE1c \u0111\u1ECBnh',level:'warn'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'D\u1EF1 ki\u1EBFn th\u1EA5p',level:'good'},
      {label:'Ph\u1EE5 t\xF9ng',val:'\u0110ang x\xE2y d\u1EF1ng',level:'warn'},
      {label:'\u0110\u1ECBa h\xECnh',val:'T\u1ED1t cho t\u1EA7m gi\xE1',level:'good'},
    ],
    insight:{owners:160,topModel:'J7',monthly:3512,vs_estimate:+0.3,hcm:3600,hn:3400,breakdown:{bh:667,fuel:2400,road:145,maint:300}},
    garages:[
      {name:'Jaecoo HCM',type:'official',city:'HCM',address:'Qu\u1ED1c l\u1ED9 13, B\xECnh D\u01B0\u01A1ng',bh:['B\u1EA3o Minh'],claims:40,rating:4.2,note:'Showroom Jaecoo ch\xEDnh h\xE3ng HCM.'},
    ],
    scenarios:['collision','parked'],
  },
  acura:{
    name:'Acura',origin:'M\u1EF9 (Honda)',color:'#CC0000',tagline:'Xe sang Honda \xB7 C\xF4ng ngh\u1EC7 precision \xB7 Th\u1EC3 thao',
    fuels:['x\u0103ng','hybrid'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u xe sang c\u1EE7a Honda d\xE0nh cho th\u1ECB tr\u01B0\u1EDDng B\u1EAFc M\u1EF9. T\u1EA1i VN, Acura \u0111\u01B0\u1EE3c nh\u1EADp kh\u1EA9u t\u01B0 nh\xE2n. MDX v\xE0 RDX l\xE0 2 m\u1EABu SUV \u0111\u01B0\u1EE3c \u01B0a chu\u1ED9ng nh\u1EA5t nh\u1EDD k\u1EBF th\u1EEBa \u0111\u1ED9 tin c\u1EADy Honda nh\u01B0ng v\u1EDBi trang b\u1ECB v\xE0 thi\u1EBFt k\u1EBF \u0111\u1EB3ng c\u1EA5p h\u01A1n.',
    models:[
      {name:'RDX',slug:'rdx',type:'suv',bh:14,desc:'SUV compact luxury h\u1EA1ng C',monthly:{bh:1167,fuel:2600,reg:195,maint:600},priceFrom:1499,priceTo:1999},
      {name:'MDX',slug:'mdx',type:'suv',bh:18,desc:'SUV 7 ch\u1ED7 h\u1EA1ng D flagship',monthly:{bh:1500,fuel:3000,reg:240,maint:750},priceFrom:1899,priceTo:2499},
      {name:'TLX',slug:'tlx',type:'sedan',bh:13,desc:'Sedan sport luxury',monthly:{bh:1083,fuel:2800,reg:185,maint:650},priceFrom:1299,priceTo:1799},
      {name:'ILX',slug:'ilx',type:'sedan',bh:9,desc:'Sedan compact entry luxury',monthly:{bh:750,fuel:2200,reg:155,maint:500},priceFrom:899,priceTo:1199},
    ],
    topInsurers:[
      {name:'AXA Insurance',color:'#00008F',badge:'Xe nh\u1EADp CBU',reason:'Kinh nghi\u1EC7m xe nh\u1EADp M\u1EF9. Ph\u1EE5 t\xF9ng Acura qua k\xEAnh Honda \u1EE7y quy\u1EC1n \u0111\u01B0\u1EE3c duy\u1EC7t t\u1ED1t.'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'Xe sang nh\u1EADp',reason:'G\xF3i b\u1EA3o hi\u1EC3m ph\xF9 h\u1EE3p xe sang nh\u1EADp CBU. B\u1ED3i th\u01B0\u1EDDng \u0111\xFAng gi\xE1 tr\u1ECB.'},
    ],
    notes:[
      {q:'Acura s\u1EEDa \u1EDF \u0111\xE2u t\u1EA1i VN, ph\u1EE5 t\xF9ng c\xF3 d\u1EC5 ki\u1EBFm kh\xF4ng?',a:'Acura kh\xF4ng c\xF3 showroom ch\xEDnh h\xE3ng t\u1EA1i VN. S\u1EEDa ch\u1EEFa qua garage Honda \u1EE7y quy\u1EC1n c\xF3 kinh nghi\u1EC7m xe M\u1EF9, ho\u1EB7c garage t\u01B0 nh\xE2n chuy\xEAn xe Nh\u1EADt cao c\u1EA5p. Ph\u1EE5 t\xF9ng nh\u1EADp t\u1EEB Nh\u1EADt ho\u1EB7c M\u1EF9 c\xF3 th\u1EC3 m\u1EA5t 1-3 tu\u1EA7n.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2606\u2606',level:'warn'},
      {label:'Tin c\u1EADy',val:'Cao (Honda)',level:'good'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Nh\u1EADp Nh\u1EADt/M\u1EF9',level:'warn'},
      {label:'Garage',val:'Honda \u1EE7y quy\u1EC1n',level:'warn'},
    ],
    insight:{owners:180,topModel:'RDX',monthly:4712,vs_estimate:+0.7,hcm:5000,hn:4400,breakdown:{bh:1167,fuel:2600,road:195,maint:750}},
    garages:[
      {name:'Garage Nh\u1EADt Cao C\u1EA5p HCM',type:'authorized',city:'HCM',address:'Qu\u1EADn 2, HCM',bh:['AXA','B\u1EA3o Vi\u1EC7t'],claims:80,rating:4.5,note:'Garage chuy\xEAn xe Nh\u1EADt cao c\u1EA5p Honda/Acura/Lexus. Ph\u1EE5 t\xF9ng genuine nh\u1EADp tr\u1EF1c ti\u1EBFp.'},
    ],
    scenarios:['collision','theft','parked'],
  },
};

const BRAND_LIST = ['toyota','honda','hyundai','kia','mazda','ford','mitsubishi','vinfast','mercedes','bmw','lexus','audi','volvo','mg','isuzu','suzuki','nissan','byd','peugeot','subaru','landrover','wuling','tesla','volkswagen','chevrolet','porsche','jaguar','skoda','mini','renault','geely','omoda','jaecoo','acura'];
const DUAL_BRANDS = ['honda','vinfast','suzuki']; // brands c\xF3 c\u1EA3 \xF4 t\xF4 l\u1EABn xe m\xE1y

const BRAND_NEWS = {
  toyota:[
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Toyota Camry 2025 ch\xEDnh th\u1EE9c ra m\u1EAFt t\u1EA1i Vi\u1EC7t Nam, gi\xE1 t\u1EEB 1,4 t\u1EF7 \u0111\u1ED3ng',source:'VnExpress',date:'T6/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'H\u1EC7 th\u1ED1ng hybrid th\u1EBF h\u1EC7 5 c\u1EE7a Toyota ti\u1EBFt ki\u1EC7m nhi\xEAn li\u1EC7u h\u01A1n 30% so v\u1EDBi \u0111\u1ED9ng c\u01A1 x\u0103ng th\xF4ng th\u01B0\u1EDDng',source:'AutoZine',date:'T5/2025',href:'#'},
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'Toyota gi\u1EEF v\u1EEFng v\u1ECB tr\xED s\u1ED1 1 th\u1ECB ph\u1EA7n \xF4 t\xF4 t\u1EA1i Vi\u1EC7t Nam 6 th\xE1ng \u0111\u1EA7u n\u0103m 2025',source:'VAMA',date:'T7/2025',href:'#'},
  ],
  honda:[
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Honda CR-V 2025 b\u1ED5 sung phi\xEAn b\u1EA3n hybrid e:HEV, gi\xE1 t\u1EEB 1,12 t\u1EF7 \u0111\u1ED3ng',source:'Tu\u1ED5i Tr\u1EBB',date:'T5/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Honda Accord th\u1EBF h\u1EC7 th\u1EE9 11 ra m\u1EAFt t\u1EA1i Vi\u1EC7t Nam v\u1EDBi Honda SENSING to\xE0n di\u1EC7n',source:'VnExpress',date:'T4/2025',href:'#'},
    {cat:'event',catLabel:'S\u1EF1 ki\u1EC7n',title:'Honda Vi\u1EC7t Nam khai tr\u01B0\u01A1ng trung t\xE2m d\u1ECBch v\u1EE5 3S th\u1EE9 30 t\u1EA1i TP.HCM',source:'AutoZine',date:'T6/2025',href:'#'},
  ],
  hyundai:[
    {cat:'promo',catLabel:'\u01AFu \u0111\xE3i',title:'Hyundai IONIQ 5 gi\u1EA3m gi\xE1 c\xF2n 899 tri\u1EC7u sau \u01B0u \u0111\xE3i thu\u1EBF - m\u1EE9c th\u1EA5p nh\u1EA5t t\u1EEB tr\u01B0\u1EDBc \u0111\u1EBFn nay',source:'CafeAuto',date:'T5/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Hyundai Tucson 2025 facelift ra m\u1EAFt v\u1EDBi thi\u1EBFt k\u1EBF m\u1EB7t calandra m\u1EDBi v\xE0 ADAS ti\xEAu chu\u1EA9n',source:'VnExpress',date:'T4/2025',href:'#'},
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'Hyundai \u0111\u1EA1t m\u1ED1c 500.000 xe b\xE1n ra t\u1EA1i Vi\u1EC7t Nam, t\u1EADp trung m\u1EDF r\u1ED9ng m\u1EA3ng xe \u0111i\u1EC7n',source:'VAMA',date:'T6/2025',href:'#'},
  ],
  kia:[
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Kia Seltos 2025 phi\xEAn b\u1EA3n Signature cao nh\u1EA5t ra m\u1EAFt, gi\xE1 849 tri\u1EC7u \u0111\u1ED3ng',source:'Tu\u1ED5i Tr\u1EBB',date:'T5/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'Kia EV6 GT-Line 2025 n\xE2ng ph\u1EA1m vi ho\u1EA1t \u0111\u1ED9ng l\xEAn 528km m\u1ED9t l\u1EA7n s\u1EA1c \u0111\u1EA7y',source:'AutoZine',date:'T4/2025',href:'#'},
    {cat:'promo',catLabel:'\u01AFu \u0111\xE3i',title:'Kia Carnival 2025 \u01B0u \u0111\xE3i l\xEAn \u0111\u1EBFn 50 tri\u1EC7u \u0111\u1ED3ng ti\u1EC1n m\u1EB7t trong th\xE1ng 7/2025',source:'CafeAuto',date:'T7/2025',href:'#'},
  ],
  mazda:[
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Mazda CX-5 2025 n\xE2ng c\u1EA5p m\xE0n h\xECnh 10.25 inch v\xE0 h\u1EC7 th\u1ED1ng \xE2m thanh Bose 12 loa',source:'VnExpress',date:'T6/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Mazda3 Sedan 2025 phi\xEAn b\u1EA3n m\u1EDBi gi\xE1 t\u1EEB 699 tri\u1EC7u, b\u1ED5 sung m\xE0u Artisan Red Metallic',source:'AutoZine',date:'T5/2025',href:'#'},
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'Mazda CX-5 ti\u1EBFp t\u1EE5c d\u1EABn \u0111\u1EA7u ph\xE2n kh\xFAc C-SUV t\u1EA1i Vi\u1EC7t Nam qu\xFD 2/2025',source:'VAMA',date:'T7/2025',href:'#'},
  ],
  ford:[
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Ford Ranger Raptor 2025 phi\xEAn b\u1EA3n V6 EcoBoost ra m\u1EAFt, m\u1EA1nh 392 m\xE3 l\u1EF1c',source:'Tu\u1ED5i Tr\u1EBB',date:'T6/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Ford Everest 2025 Platinum b\u1ED5 sung \u0111\u1ED9ng c\u01A1 V6 3.0L v\xE0 h\u1ED9p s\u1ED1 10 c\u1EA5p',source:'CafeAuto',date:'T4/2025',href:'#'},
    {cat:'promo',catLabel:'\u01AFu \u0111\xE3i',title:'Ford Vi\u1EC7t Nam \u01B0u \u0111\xE3i l\xE3i su\u1EA5t 0% trong 12 th\xE1ng cho Ranger v\xE0 Territory th\xE1ng 7/2025',source:'AutoZine',date:'T7/2025',href:'#'},
  ],
  mitsubishi:[
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Mitsubishi Xpander 2025 facelift ra m\u1EAFt v\u1EDBi thi\u1EBFt k\u1EBF Dynamic Shield th\u1EBF h\u1EC7 m\u1EDBi',source:'VnExpress',date:'T5/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Mitsubishi Outlander PHEV 2025 s\u1EAFp ra m\u1EAFt t\u1EA1i Vi\u1EC7t Nam, ph\u1EA1m vi hybrid 87km',source:'AutoZine',date:'T6/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'Mi-Pilot Assist - h\u1EC7 th\u1ED1ng h\u1ED7 tr\u1EE3 l\xE1i ti\xEAu chu\u1EA9n tr\xEAn to\xE0n b\u1ED9 d\u1EA3i s\u1EA3n ph\u1EA9m Mitsubishi 2025',source:'CafeAuto',date:'T4/2025',href:'#'},
  ],
  vinfast:[
    {cat:'promo',catLabel:'\u01AFu \u0111\xE3i',title:'VinFast VF 5 Plus gi\u1EA3m gi\xE1 c\xF2n 458 tri\u1EC7u, \u01B0u \u0111\xE3i th\xEAm g\xF3i pin mi\u1EC5n ph\xED 3 n\u0103m',source:'Tu\u1ED5i Tr\u1EBB',date:'T6/2025',href:'#'},
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'VinFast m\u1EDF r\u1ED9ng h\u1EC7 th\u1ED1ng tr\u1EA1m s\u1EA1c VinFast Green l\xEAn 3.000 \u0111i\u1EC3m tr\xEAn to\xE0n qu\u1ED1c',source:'VnExpress',date:'T5/2025',href:'#'},
    {cat:'event',catLabel:'S\u1EF1 ki\u1EC7n',title:'VinFast k\xFD th\u1ECFa thu\u1EADn cung c\u1EA5p 10.000 xe VF 8 cho \u0111\u1ED1i t\xE1c d\u1ECBch v\u1EE5 v\u1EADn t\u1EA3i t\u1EA1i M\u1EF9',source:'CafeAuto',date:'T7/2025',href:'#'},
  ],
  mercedes:[
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Mercedes E-Class 2025 All-Terrain ch\xEDnh th\u1EE9c b\xE1n t\u1EA1i Vi\u1EC7t Nam gi\xE1 t\u1EEB 3,2 t\u1EF7 \u0111\u1ED3ng',source:'AutoZine',date:'T6/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'MBUX Superscreen th\u1EBF h\u1EC7 m\u1EDBi t\xEDch h\u1EE3p AI tr\xEAn GLE v\xE0 GLS 2025 t\u1EA1i th\u1ECB tr\u01B0\u1EDDng Vi\u1EC7t Nam',source:'VnExpress',date:'T5/2025',href:'#'},
    {cat:'event',catLabel:'S\u1EF1 ki\u1EC7n',title:'Mercedes-Benz khai tr\u01B0\u01A1ng Trung t\xE2m Tr\u1EA3i nghi\u1EC7m AMG \u0111\u1EA7u ti\xEAn t\u1EA1i H\xE0 N\u1ED9i',source:'Tu\u1ED5i Tr\u1EBB',date:'T4/2025',href:'#'},
  ],
  bmw:[
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'BMW X3 2025 ch\xEDnh th\u1EE9c l\u1EAFp r\xE1p CKD t\u1EA1i Vi\u1EC7t Nam, gi\xE1 gi\u1EA3m 180 tri\u1EC7u so v\u1EDBi CBU',source:'VnExpress',date:'T6/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'BMW i5 thu\u1EA7n \u0111i\u1EC7n ra m\u1EAFt t\u1EA1i Vi\u1EC7t Nam v\u1EDBi ph\u1EA1m vi 582km, gi\xE1 t\u1EEB 3,8 t\u1EF7 \u0111\u1ED3ng',source:'CafeAuto',date:'T5/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'BMW ConnectedDrive c\u1EADp nh\u1EADt Over-the-Air t\xEDnh n\u0103ng l\xE1i b\xE1n t\u1EF1 \u0111\u1ED9ng tr\xEAn BMW 3 Series 2024',source:'AutoZine',date:'T7/2025',href:'#'},
  ],
  lexus:[
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'Lexus NX 2025 d\u1EABn \u0111\u1EA7u ph\xE2n kh\xFAc SUV luxury t\u1EA1i Vi\u1EC7t Nam, gi\u1EEF gi\xE1 t\u1ED1t h\u01A1n Mercedes GLC',source:'VnExpress',date:'T5/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Lexus RX 500h ra m\u1EAFt t\u1EA1i Vi\u1EC7t Nam: SUV hybrid 367 m\xE3 l\u1EF1c, gi\xE1 t\u1EEB 4,3 t\u1EF7 \u0111\u1ED3ng',source:'CafeAuto',date:'T4/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'Lexus Safety System+ 3.0 n\xE2ng c\u1EA5p m\u1EA1nh t\xEDnh n\u0103ng c\u1EA3nh b\xE1o \u0111i\u1EC3m m\xF9 v\xE0 t\u1EF1 \u0111\u1ED9ng \u0111\xE1nh l\xE1i tr\xE1nh va ch\u1EA1m',source:'AutoZine',date:'T6/2025',href:'#'},
  ],
  audi:[
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'Audi Q5 2025 l\u1EAFp r\xE1p CKD t\u1EA1i VN, gi\xE1 r\u1EBB h\u01A1n 280 tri\u1EC7u so v\u1EDBi phi\xEAn b\u1EA3n nh\u1EADp kh\u1EA9u',source:'VnExpress',date:'T5/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Audi Q8 e-tron thu\u1EA7n \u0111i\u1EC7n ra m\u1EAFt t\u1EA1i Vi\u1EC7t Nam, ph\u1EA1m vi 582km, gi\xE1 4,9 t\u1EF7 \u0111\u1ED3ng',source:'CafeAuto',date:'T3/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'H\u1EC7 th\u1ED1ng \u0111\xE8n ma tr\u1EADn Matrix LED th\u1EBF h\u1EC7 m\u1EDBi tr\xEAn Audi A6 2025 \u0111\u01B0\u1EE3c ph\xEA duy\u1EC7t ho\u1EA1t \u0111\u1ED9ng t\u1EA1i Vi\u1EC7t Nam',source:'AutoZine',date:'T6/2025',href:'#'},
  ],
  volvo:[
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'Volvo XC60 B5 Mild Hybrid chinh ph\u1EE5c th\u1ECB tr\u01B0\u1EDDng SUV cao c\u1EA5p v\u1EDBi gi\xE1 c\u1EA1nh tranh h\u01A1n Q5 v\xE0 GLC',source:'VnExpress',date:'T5/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Volvo EX30 thu\u1EA7n \u0111i\u1EC7n d\u1EF1 ki\u1EBFn ra m\u1EAFt Vi\u1EC7t Nam cu\u1ED1i 2025, gi\xE1 d\u1EF1 ki\u1EBFn d\u01B0\u1EDBi 1,5 t\u1EF7 \u0111\u1ED3ng',source:'CafeAuto',date:'T6/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'Volvo Cars tuy\xEAn b\u1ED1 m\u1EE5c ti\xEAu zero death goal \u2014 kh\xF4ng ca t\u1EED vong n\xE0o trong xe Volvo m\u1EDBi t\u1EEB 2030',source:'AutoZine',date:'T4/2025',href:'#'},
  ],
  mg:[
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'MG ZS chi\u1EBFm 8% th\u1ECB ph\u1EA7n SUV \u0111\xF4 th\u1ECB t\u1EA1i Vi\u1EC7t Nam, th\xE1ch th\u1EE9c Hyundai Kona v\xE0 Kia Seltos',source:'VnExpress',date:'T6/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'MG VS HEV Hybrid ra m\u1EAFt, tr\u1EDF th\xE0nh SUV hybrid r\u1EBB nh\u1EA5t Vi\u1EC7t Nam d\u01B0\u1EDBi 800 tri\u1EC7u \u0111\u1ED3ng',source:'CafeAuto',date:'T4/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'SAIC \u0111\u1EA7u t\u01B0 nh\xE0 m\xE1y ph\u1EE5 t\xF9ng MG t\u1EA1i B\xECnh D\u01B0\u01A1ng \u2014 cam k\u1EBFt t\u0103ng t\u1EF7 l\u1EC7 n\u1ED9i \u0111\u1ECBa h\xF3a l\xEAn 40%',source:'AutoZine',date:'T5/2025',href:'#'},
  ],
  isuzu:[
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'Isuzu D-Max 2025 gi\u1EEF v\u1EEFng top 3 b\xE1n t\u1EA3i to\xE0n qu\u1ED1c v\u1EDBi doanh s\u1ED1 v\u01B0\u1EE3t 1.200 xe/th\xE1ng',source:'VnExpress',date:'T5/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Isuzu mu-X 2025 ra m\u1EAFt v\u1EDBi h\u1EC7 th\u1ED1ng phanh t\u1ED5ng h\u1EE3p m\u1EDBi, gi\xE1 t\u1EEB 899 tri\u1EC7u \u0111\u1ED3ng',source:'CafeAuto',date:'T3/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'\u0110\u1ED9ng c\u01A1 diesel 4JJ3 c\u1EE7a Isuzu D-Max \u0111\u1EA1t ti\xEAu chu\u1EA9n Euro 5, ti\u1EBFt ki\u1EC7m 12% nhi\xEAn li\u1EC7u so v\u1EDBi \u0111\u1EDDi c\u0169',source:'AutoZine',date:'T6/2025',href:'#'},
  ],
  suzuki:[
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'Suzuki XL7 t\u0103ng tr\u01B0\u1EDFng 24% doanh s\u1ED1 nh\u1EDD gi\xE1 c\u1EA1nh tranh trong ph\xE2n kh\xFAc MPV 7 ch\u1ED7',source:'VnExpress',date:'T6/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Suzuki Swift Sport 2025 ra m\u1EAFt t\u1EA1i VN \u2014 hatchback th\u1EC3 thao nh\u1ECF g\u1ECDn gi\xE1 699 tri\u1EC7u \u0111\u1ED3ng',source:'CafeAuto',date:'T4/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'Suzuki gi\u1EDBi thi\u1EC7u h\u1EC7 th\u1ED1ng HYBRID SYSTEM nh\u1EB9 cho Ertiga, ti\u1EBFt ki\u1EC7m th\xEAm 8% nhi\xEAn li\u1EC7u',source:'AutoZine',date:'T5/2025',href:'#'},
  ],
  nissan:[
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'Nissan Terra 2025 l\u1EA5y l\u1EA1i th\u1ECB ph\u1EA7n v\u1EDBi combo off-road m\u1EA1nh m\u1EBD v\xE0 d\u1ECBch v\u1EE5 h\u1EADu m\xE3i c\u1EA3i thi\u1EC7n',source:'VnExpress',date:'T6/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Nissan Almera 2025 n\xE2ng c\u1EA5p an to\xE0n AEB v\xE0 c\u1EA3nh b\xE1o \u0111i\u1EC3m m\xF9, gi\xE1 gi\u1EEF nguy\xEAn t\u1EEB 428 tri\u1EC7u',source:'CafeAuto',date:'T5/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'ProPILOT Assist c\u1EE7a Nissan \u0111\u01B0\u1EE3c n\xE2ng c\u1EA5p h\u1ED7 tr\u1EE3 l\xE1i tr\xEAn \u0111\u01B0\u1EDDng cao t\u1ED1c Vi\u1EC7t Nam',source:'AutoZine',date:'T4/2025',href:'#'},
  ],
  byd:[
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'BYD Atto 3 tr\u1EDF th\xE0nh SUV \u0111i\u1EC7n b\xE1n ch\u1EA1y nh\u1EA5t Vi\u1EC7t Nam, v\u01B0\u1EE3t qua VinFast VF 8 th\xE1ng 5/2025',source:'VnExpress',date:'T6/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'BYD Sea Lion 6 DM-i ra m\u1EAFt: plug-in hybrid \u0111i 80km \u0111i\u1EC7n, gi\xE1 t\u1EEB 748 tri\u1EC7u \u0111\u1ED3ng',source:'CafeAuto',date:'T5/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'Pin Blade Battery th\u1EBF h\u1EC7 2 c\u1EE7a BYD t\u0103ng m\u1EADt \u0111\u1ED9 n\u0103ng l\u01B0\u1EE3ng 15%, v\u01B0\u1EE3t qua b\xE0i ki\u1EC3m tra \u0111\xE2m kim neeble test',source:'AutoZine',date:'T4/2025',href:'#'},
  ],
  peugeot:[
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'Peugeot 3008 2025 t\u0103ng tr\u01B0\u1EDFng m\u1EA1nh nh\u1EDD thi\u1EBFt k\u1EBF kh\xE1c bi\u1EC7t v\xE0 g\xF3i khuy\u1EBFn m\xE3i h\u1EA5p d\u1EABn t\u1EEB T\u1EADp \u0110o\xE0n Th\xE0nh C\xF4ng',source:'VnExpress',date:'T6/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Peugeot 408 Fastback ch\xEDnh th\u1EE9c ra m\u1EAFt Vi\u1EC7t Nam \u2014 sedan-SUV hybrid phong c\xE1ch ch\xE2u \xC2u gi\xE1 1,1 t\u1EF7',source:'CafeAuto',date:'T4/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'i-Cockpit 3D c\u1EE7a Peugeot \u0111\u01B0\u1EE3c \u0111\xE1nh gi\xE1 l\xE0 m\xE0n h\xECnh c\u1EE5m \u0111\u1ED3ng h\u1ED3 \u0111\u1EB9p nh\u1EA5t ph\xE2n kh\xFAc t\u1EA7m trung t\u1EA1i VN',source:'AutoZine',date:'T5/2025',href:'#'},
  ],
  subaru:[
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'Subaru Forester AWD \u0111\u01B0\u1EE3c c\u1ED9ng \u0111\u1ED3ng outdoor Vi\u1EC7t Nam b\xECnh ch\u1ECDn l\xE0 SUV \u0111\xE1ng tin nh\u1EA5t trong \u0111i\u1EC1u ki\u1EC7n \u0111\u01B0\u1EDDng x\u1EA5u',source:'VnExpress',date:'T5/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Subaru Crosstrek 2025 ra m\u1EAFt v\u1EDBi \u0111\u1ED9ng c\u01A1 hybrid nh\u1EB9, ph\u1EA1m vi d\u1EEBng \u0111\xE8n gi\u1EA3m 15% ti\xEAu hao nhi\xEAn li\u1EC7u',source:'CafeAuto',date:'T4/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'EyeSight 4.0 c\u1EE7a Subaru \u0111\u01B0\u1EE3c ph\xEA duy\u1EC7t ho\u1EA1t \u0111\u1ED9ng tr\xEAn cao t\u1ED1c Vi\u1EC7t Nam \u2014 l\u1EA7n \u0111\u1EA7u ti\xEAn cho th\u01B0\u01A1ng hi\u1EC7u n\xE0y',source:'AutoZine',date:'T6/2025',href:'#'},
  ],
  landrover:[
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'Land Rover Defender 110 chi\u1EBFm l\u0129nh ph\xE2n kh\xFAc SUV h\u1EA1ng sang off-road, gi\u1EEF gi\xE1 t\u1ED1t h\u01A1n 20% so v\u1EDBi G-Class',source:'VnExpress',date:'T6/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Range Rover Sport PHEV ra m\u1EAFt Vi\u1EC7t Nam \u2014 SUV hybrid s\u1EA1c ngo\xE0i, \u0111i 80km \u0111i\u1EC7n, gi\xE1 t\u1EEB 7,8 t\u1EF7 \u0111\u1ED3ng',source:'CafeAuto',date:'T4/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'Terrain Response 2 Auto c\u1EE7a Land Rover h\u1ECDc th\xF3i quen l\xE1i \u0111\u1ECBa h\xECnh v\xE0 t\u1EF1 \u0111i\u1EC1u ch\u1EC9nh theo \u0111\u01B0\u1EDDng \u0111\u1EB7c tr\u01B0ng c\u1EE7a VN',source:'AutoZine',date:'T5/2025',href:'#'},
  ],
  wuling:[
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'Wuling BingGuo EV tr\u1EDF th\xE0nh xe \u0111i\u1EC7n r\u1EBB nh\u1EA5t d\u01B0\u1EDBi 400 tri\u1EC7u \u0111\u1ED3ng \u0111ang b\xE1n ch\xEDnh h\xE3ng t\u1EA1i Vi\u1EC7t Nam',source:'VnExpress',date:'T5/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Wuling Cloud EV ra m\u1EAFt t\u1EA1i VN \u2014 sedan \u0111i\u1EC7n phong c\xE1ch v\u1EDBi ph\u1EA1m vi 460km, gi\xE1 598 tri\u1EC7u \u0111\u1ED3ng',source:'CafeAuto',date:'T4/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'SAIC-GM-Wuling c\xF4ng b\u1ED1 m\u1EA1ng l\u01B0\u1EDBi 50 tr\u1EA1m s\u1EA1c nhanh DC t\u1EA1i Vi\u1EC7t Nam cho d\xF2ng xe BingGuo EV',source:'AutoZine',date:'T6/2025',href:'#'},
  ],
};

const CAR_TYPES = [
  {id:'sedan',    label:'Sedan',     svgType:'sedan', color:'#5C5060', img:'https://homepage.momocdn.net/img/sedan-260803142120.png'},
  {id:'suv',      label:'SUV',       svgType:'suv',   color:'#5C5060', img:'https://homepage.momocdn.net/img/suv-260803142121.png'},
  {id:'crossover',label:'Crossover', svgType:'suv',   color:'#5C5060', img:'https://homepage.momocdn.net/img/crossover-260803142108.png'},
  {id:'mpv',      label:'MPV',       svgType:'mpv',   color:'#5C5060', img:'https://homepage.momocdn.net/img/mpv-260803142112.png'},
  {id:'truck',    label:'B\xE1n t\u1EA3i',   svgType:'truck', color:'#5C5060', img:'https://homepage.momocdn.net/img/ban-tai-260803142106.png'},
  {id:'ev',       label:'\xD4 t\xF4 \u0111i\u1EC7n', svgType:'ev',    color:'#2563EB', img:'https://homepage.momocdn.net/img/o-to-dien-260803142116.png'},
];

const SCENARIOS = {
  collision:{name:'Va ch\u1EA1m & Tai n\u1EA1n',badge:'Ti\xEAu chu\u1EA9n',badgeCls:'badge-green',short:'Ph\u1ED5 bi\u1EBFn nh\u1EA5t, chi\u1EBFm 60% v\u1EE5 b\u1ED3i th\u01B0\u1EDDng. D\u1EEBng xe, ch\u1EE5p \u1EA3nh, g\u1ECDi CA.',icon:'Zap'},
  thuykick:{name:'Th\u1EE7y k\xEDch',badge:'M\u1EDF r\u1ED9ng th\xEAm',badgeCls:'badge-amber',short:'KH\xD4NG \u0111\u1EC1 m\xE1y l\u1EA1i sau ng\u1EADp n\u01B0\u1EDBc. Chi ph\xED s\u1EEDa 40-120tr. C\u1EA7n th\xEAm +2tr/n\u0103m.',icon:'Droplets'},
  parked:{name:'Xe \u0111\u1ED7 b\u1ECB va ch\u1EA1m',badge:'Ti\xEAu chu\u1EA9n',badgeCls:'badge-green',short:'Kh\xF4ng c\u1EA7n t\xECm \u0111\u01B0\u1EE3c xe g\xE2y thi\u1EC7t h\u1EA1i. BH c\u1EE7a ch\xEDnh b\u1EA1n chi tr\u1EA3 sau kh\u1EA5u tr\u1EEB.',icon:'SquareParking'},
  glass:{name:'V\u1EE1 k\xEDnh',badge:'Ti\xEAu chu\u1EA9n',badgeCls:'badge-green',short:'\u0110\xE1 v\u0103ng, v\u1EE1 do nhi\u1EC7t. Kh\xF4ng c\u1EA7n bi\xEAn b\u1EA3n CA. X\u1EED l\xFD qua app nhi\u1EC1u NB.',icon:'AppWindow'},
  theft:{name:'M\u1EA5t c\u1EAFp to\xE0n b\u1ED9 xe',badge:'Ti\xEAu chu\u1EA9n',badgeCls:'badge-green',short:'Tr\xECnh b\xE1o CA trong 24h. Ch\u1EDD 30 ng\xE0y. B\u1ED3i th\u01B0\u1EDDng gi\xE1 tr\u1ECB th\u1EF1c t\u1EBF tr\u1EEB kh\u1EA5u hao.',icon:'KeyRound'},
  parttheft:{name:'M\u1EA5t c\u1EAFp b\u1ED9 ph\u1EADn',badge:'M\u1EDF r\u1ED9ng th\xEAm',badgeCls:'badge-amber',short:'B\xE1nh xe, camera, \u0111\u1EA7u m\xE0n h\xECnh. C\u1EA7n quy\u1EC1n l\u1EE3i th\xEAm +600-900K/n\u0103m.',icon:'Wrench'},
  fire:{name:'Ch\xE1y xe',badge:'Ti\xEAu chu\u1EA9n',badgeCls:'badge-green',short:'Tho\xE1t ra ngay, g\u1ECDi 114. \u0110\u1EE9ng c\xE1ch xa 30m. B\u1EA3o hi\u1EC3m b\u1ED3i th\u01B0\u1EDDng theo thi\u1EC7t h\u1EA1i th\u1EF1c t\u1EBF.',icon:'Flame'},
  natural:{name:'Thi\xEAn tai',badge:'M\u1EDF r\u1ED9ng th\xEAm',badgeCls:'badge-amber',short:'C\xE2y \u0111\u1ED5 th\u01B0\u1EDDng \u0111\u01B0\u1EE3c x\u1EED l\xFD trong ph\u1EA1m vi ti\xEAu chu\u1EA9n. Ng\u1EADp l\u1EE5t th\xE2n v\u1ECF v\xE0 th\u1EE7y k\xEDch c\u1EA7n ph\u1EA1m vi ri\xEAng.',icon:'Waves'},
};

/* \u2500\u2500 HELPERS \u2500\u2500 */
const fmt = n => n >= 1000 ? (n/1000).toFixed(n%1000===0?0:1)+'tr' : n+'K';
const fmtM = n => n === 0 ? 'Mi\u1EC5n ph\xED' : fmt(n) + '/th\xE1ng';

function carSVG(type, color) {
  const c = color; const op1 = '0.18'; const op2 = '0.32'; const op3 = '0.55';
  if (type === 'sedan' || type === 'coupe') {
    return \`<svg viewBox="0 0 200 72" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-height:72px">
      <path d="M8,56 L8,40 Q12,22 38,18 L62,11 L138,11 L162,18 Q186,24 192,40 L192,56 Z" fill="\${c}" opacity="\${op1}"/>
      <path d="M62,11 L75,4 L125,4 L138,11 Z" fill="\${c}" opacity="\${op2}"/>
      <rect x="18" y="42" width="164" height="4" rx="2" fill="\${c}" opacity="0.1"/>
      <circle cx="48" cy="56" r="14" fill="\${c}" opacity="\${op2}"/><circle cx="48" cy="56" r="8" fill="white" opacity="0.75"/>
      <circle cx="152" cy="56" r="14" fill="\${c}" opacity="\${op2}"/><circle cx="152" cy="56" r="8" fill="white" opacity="0.75"/>
    </svg>\`;
  }
  if (type === 'truck') {
    return \`<svg viewBox="0 0 200 72" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-height:72px">
      <rect x="8" y="24" width="80" height="34" rx="4" fill="\${c}" opacity="\${op2}"/>
      <rect x="88" y="34" width="104" height="24" rx="2" fill="\${c}" opacity="\${op1}"/>
      <path d="M88,34 L88,58 L192,58 L192,34 Z" fill="\${c}" opacity="\${op1}"/>
      <rect x="8" y="14" width="80" height="12" rx="3" fill="\${c}" opacity="\${op3}"/>
      <circle cx="38" cy="60" r="12" fill="\${c}" opacity="\${op2}"/><circle cx="38" cy="60" r="7" fill="white" opacity="0.75"/>
      <circle cx="162" cy="60" r="12" fill="\${c}" opacity="\${op2}"/><circle cx="162" cy="60" r="7" fill="white" opacity="0.75"/>
    </svg>\`;
  }
  if (type === 'mpv') {
    return \`<svg viewBox="0 0 200 72" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-height:72px">
      <path d="M8,58 L8,34 Q10,12 38,10 L162,10 Q188,12 192,34 L192,58 Z" fill="\${c}" opacity="\${op1}"/>
      <path d="M38,10 L42,4 L158,4 L162,10 Z" fill="\${c}" opacity="\${op2}"/>
      <rect x="18" y="10" width="164" height="3" rx="1.5" fill="\${c}" opacity="0.12"/>
      <circle cx="48" cy="58" r="13" fill="\${c}" opacity="\${op2}"/><circle cx="48" cy="58" r="7" fill="white" opacity="0.75"/>
      <circle cx="152" cy="58" r="13" fill="\${c}" opacity="\${op2}"/><circle cx="152" cy="58" r="7" fill="white" opacity="0.75"/>
    </svg>\`;
  }
  if (type === 'ev') {
    return \`<svg viewBox="0 0 200 72" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-height:72px">
      <path d="M8,56 L8,36 Q14,14 42,12 L158,12 Q184,14 192,36 L192,56 Z" fill="\${c}" opacity="\${op1}"/>
      <path d="M42,12 L50,5 L150,5 L158,12 Z" fill="\${c}" opacity="\${op2}"/>
      <path d="M86,26 L94,14 L106,14 L98,26 L110,26 L88,46 L94,32 L82,32 Z" fill="\${c}" opacity="0.45"/>
      <circle cx="48" cy="56" r="13" fill="\${c}" opacity="\${op2}"/><circle cx="48" cy="56" r="7" fill="white" opacity="0.75"/>
      <circle cx="152" cy="56" r="13" fill="\${c}" opacity="\${op2}"/><circle cx="152" cy="56" r="7" fill="white" opacity="0.75"/>
    </svg>\`;
  }
  // suv (default)
  return \`<svg viewBox="0 0 200 72" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-height:72px">
    <path d="M8,58 L8,38 Q14,18 40,14 L160,14 Q184,18 192,38 L192,58 Z" fill="\${c}" opacity="\${op1}"/>
    <path d="M40,14 L46,6 L154,6 L160,14 Z" fill="\${c}" opacity="\${op2}"/>
    <rect x="46" y="20" width="108" height="20" rx="3" fill="\${c}" opacity="0.08"/>
    <circle cx="48" cy="58" r="13" fill="\${c}" opacity="\${op2}"/><circle cx="48" cy="58" r="7" fill="white" opacity="0.75"/>
    <circle cx="152" cy="58" r="13" fill="\${c}" opacity="\${op2}"/><circle cx="152" cy="58" r="7" fill="white" opacity="0.75"/>
  </svg>\`;
}

function brandMark(id, w=56, h=56, r=14, fs=17) {
  const b = BRANDS[id];
  const abbr = {toyota:'TOY',honda:'HON',hyundai:'HYN',kia:'KIA',mazda:'MZD',ford:'FOR',mitsubishi:'MIT',vinfast:'VF',mercedes:'MBZ',bmw:'BMW'}[id]||id.slice(0,3).toUpperCase();
  return \`<div class="brand-mark" style="width:\${w}px;height:\${h}px;border-radius:\${r}px;background:\${b.color};font-size:\${fs}px">\${abbr}</div>\`;
}

function fuelTag(f) {
  const map = {x\u0103ng:'tag-petrol',hybrid:'tag-hybrid',\u0111i\u1EC7n:'tag-electric'};
  const icon = {x\u0103ng:'Fuel',hybrid:'BatteryCharging',\u0111i\u1EC7n:'Zap'}[f]||'';
  return \`<span class="tag \${map[f]||'tag-petrol'}">\${icon?licon(icon,12,2.2):''} \${f}</span>\`;
}

const TYPE_LABELS = {
  sedan: 'Sedan',
  suv: 'SUV',
  crossover: 'Crossover',
  mpv: 'MPV',
  truck: 'B\xE1n t\u1EA3i',
  ev: 'EV',
};

function modelTypeLabel(m) {
  return TYPE_LABELS[m.type || 'suv'] || 'Xe';
}

function brandTypeSummary(b) {
  const types = [...new Set(b.models.map(modelTypeLabel))];
  const fuels = [];
  if (b.fuels.includes('hybrid')) fuels.push('Hybrid');
  if (b.fuels.includes('\u0111i\u1EC7n') && b.fuels.length === 1) fuels.push('EV');
  return [...types.slice(0, 2), ...fuels].join(' \xB7 ');
}

const INSURER_LOGOS = {
  'Liberty Insurance': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Liberty_Mutual_Logo.svg/160px-Liberty_Mutual_Logo.svg.png',
  'PVI Insurance': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/PVI_Holdings_logo.svg/160px-PVI_Holdings_logo.svg.png',
  'B\u1EA3o Vi\u1EC7t': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bao_Viet_Holdings_logo.svg/160px-Bao_Viet_Holdings_logo.svg.png',
  'MIC Insurance': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/MIC_logo.svg/160px-MIC_logo.svg.png',
  'PJICO': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/PJICO_logo.svg/160px-PJICO_logo.svg.png',
  'PTI Insurance': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/PTI_logo.svg/160px-PTI_logo.svg.png',
  'GIC Insurance': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/GIC_logo.svg/160px-GIC_logo.svg.png',
  'DBY Insurance': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/DBY_logo.svg/160px-DBY_logo.svg.png',
};

function insurerLogoHtml(name) {
  const src = INSURER_LOGOS[name];
  const short = name.replace(/ Insurance$/, '').replace(/[^A-Z0-9\u0110\u0102\xC2\xCA\xD4\u01A0\u01AF]/gi, '').slice(0, 4).toUpperCase() || name.slice(0, 3).toUpperCase();
  if (src) {
    return \`<div class="ins-logo"><img src="\${src}" alt="\${name}" onerror="this.outerHTML='<div class=&quot;ins-logo-fallback&quot;>\${short}</div>'"></div>\`;
  }
  return \`<div class="ins-logo"><div class="ins-logo-fallback">\${short}</div></div>\`;
}

let selectedModel = {};

/* \u2500\u2500 RENDER LISTING \u2500\u2500 */
function renderListing() {
  document.getElementById('page-title').textContent = 'H\xE3ng Xe - Ti\u1EC7n \xCDch Giao Th\xF4ng MoMo';
  let currentFilter = 'all';

  function brandCardHTML(id) {
    const b = BRANDS[id];
    const topType = b.models[0].type;
    return \`<a class="brand-card" href="/tien-ich-giao-thong/hang-xe/\${id}">
      <div class="brand-card-visual" style="background:linear-gradient(140deg,\${b.color}18 0%,\${b.color}08 60%,transparent 100%)">
        <div class="brand-card-car-bg">\${carSVG(topType, b.color)}</div>
        <div class="brand-card-mark-wrap">\${brandMark(id,44,44,11,14)}</div>
      </div>
      <div class="brand-card-body">
        <div class="brand-card-name">\${b.name}</div>
        <div class="brand-card-origin">\${b.origin}</div>
        <div class="brand-card-bottom">
          <span class="brand-card-top-model">Model <strong>\${b.models[0].name}</strong></span>
          <div class="brand-card-arrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </div>
        </div>
      </div>
    </a>\`;
  }

  function cards(filter) {
    return BRAND_LIST.filter(id => {
      const b = BRANDS[id];
      if (filter === 'popular') return b.popular;
      if (filter === 'electric') return b.fuels.includes('\u0111i\u1EC7n');
      if (filter === 'luxury') return !b.popular;
      return true;
    }).map(brandCardHTML).join('');
  }

  document.getElementById('app').innerHTML = \`
    <div class="listing-hero">
      <div class="wrap">
        <div class="veh-tabs">
          <span class="veh-tab active">\u{1F697} \xD4 t\xF4</span>
          <a class="veh-tab" href="/tien-ich-giao-thong/hang-xe-may"><i data-lucide="bike" width="14" height="14"></i> Xe m\xE1y</a>
        </div>
        <h1 class="listing-title">D\u1ECBch v\u1EE5 MoMo cho <em>h\xE3ng xe c\u1EE7a b\u1EA1n</em></h1>
        <p class="listing-desc">Ch\u1ECDn h\xE3ng xe \u0111\u1EC3 xem model ch\u1EE7 l\u1EF1c, lo\u1EA1i xe, v\xE0 chi ph\xED s\u1EED d\u1EE5ng theo t\u1EEBng d\xF2ng xe.</p>
      </div>
    </div>
    <div class="wrap">
      <div class="type-section">
        <div class="type-section-title">Lo\u1EA1i xe</div>
        <div class="type-grid">
          \${CAR_TYPES.map(t=>\`
            <button class="type-card" onclick="filterByType('\${t.id}',this)">
              <div class="type-card-svg">\${t.img ? \`<img src="\${t.img}" alt="\${t.label}" style="width:100%;height:100%;object-fit:contain">\` : carSVG(t.svgType, t.color)}</div>
              <div class="type-card-label">\${t.label}</div>
            </button>\`).join('')}
        </div>
      </div>
      <div class="brand-grid" id="brand-grid">\${cards('all')}</div>
    </div>\`;
}

window.applyFilter = function(f, btn) {
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  document.querySelectorAll('.type-card').forEach(c=>c.classList.remove('on'));
  const list = BRAND_LIST.filter(id => {
    const b = BRANDS[id];
    if (f==='popular') return b.popular;
    if (f==='electric') return b.fuels.includes('\u0111i\u1EC7n');
    if (f==='luxury') return !b.popular;
    return true;
  });
  document.getElementById('brand-grid').innerHTML = list.map(brandCardHTML).join('') || '<div class="empty"><p>Kh\xF4ng t\xECm th\u1EA5y h\xE3ng xe ph\xF9 h\u1EE3p</p></div>';
};

window.filterByType = function(typeId, btn) {
  document.querySelectorAll('.type-card').forEach(c=>c.classList.remove('on'));
  btn.classList.add('on');
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('on'));
  // Map type id -> model types to match
  const typeMap = {sedan:['sedan','coupe'],suv:['suv'],crossover:['suv'],mpv:['mpv'],truck:['truck'],ev:['ev']};
  const matchTypes = typeMap[typeId]||[typeId];
  const list = BRAND_LIST.filter(id => BRANDS[id].models.some(m=>(m.type||'suv')===matchTypes[0]||matchTypes.includes(m.type||'suv')));
  const topModelFn = id => BRANDS[id].models.find(m=>matchTypes.includes(m.type||'suv'))||BRANDS[id].models[0];
  document.getElementById('brand-grid').innerHTML = list.map(id => {
    const b = BRANDS[id];
    const topModel = topModelFn(id);
    return \`<a class="brand-card" href="/tien-ich-giao-thong/hang-xe/\${id}">
      <div class="brand-card-visual" style="background:linear-gradient(140deg,\${b.color}18 0%,\${b.color}08 60%,transparent 100%)">
        <div class="brand-card-car-bg">\${carSVG(topModel.type||'suv', b.color)}</div>
        <div class="brand-card-mark-wrap">\${brandMark(id,44,44,11,14)}</div>
      </div>
      <div class="brand-card-body">
        <div class="brand-card-name">\${b.name}</div>
        <div class="brand-card-origin">\${b.origin}</div>
        <div class="brand-card-bottom">
          <span class="brand-card-top-model">Model <strong>\${topModel.name}</strong></span>
          <div class="brand-card-arrow"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
        </div>
      </div>
    </a>\`;
  }).join('') || '<div class="empty"><p>Kh\xF4ng t\xECm th\u1EA5y h\xE3ng xe c\xF3 lo\u1EA1i xe n\xE0y</p></div>';
};

window.doCompare = function(idA, idB) {
  if (!idB) { document.getElementById('compare-result').innerHTML = '<div class="compare-placeholder">\u2190 Ch\u1ECDn m\u1ED9t h\xE3ng xe \u0111\u1EC3 xem b\u1EA3ng so s\xE1nh</div>'; return; }
  const a = BRANDS[idA], bx = BRANDS[idB];
  const sm = s => { const o={}; (s||[]).forEach(x=>o[x.label]=x.val); return o; };
  const sa = sm(a.scores), sb = sm(bx.scores);
  const aM = a.insight?.monthly||0, bM = bx.insight?.monthly||0;
  const aG = a.garages?.length||0, bG = bx.garages?.length||0;
  const fmtM = v => v ? \`\${(v/1000).toFixed(1).replace('.',',')}tr/th\xE1ng\` : 'N/A';
  const rows = [
    { label:'Th\u1EF1c chi/th\xE1ng', a:fmtM(aM), b:fmtM(bM), win: aM&&bM ? (aM<bM?'a':aM>bM?'b':'') : '' },
    { label:'Gi\u1EEF gi\xE1',        a:sa['Gi\u1EEF gi\xE1']||'\u2014',     b:sb['Gi\u1EEF gi\xE1']||'\u2014',     win:'' },
    { label:'B\u1EA3o d\u01B0\u1EE1ng',      a:sa['B\u1EA3o d\u01B0\u1EE1ng']||'\u2014',   b:sb['B\u1EA3o d\u01B0\u1EE1ng']||'\u2014',   win:'' },
    { label:'Ph\u1EE5 t\xF9ng',       a:sa['Ph\u1EE5 t\xF9ng']||'\u2014',    b:sb['Ph\u1EE5 t\xF9ng']||'\u2014',    win:'' },
    { label:'Garage VN',      a:\`\${aG} \u0111i\u1EC3m\`,            b:\`\${bG} \u0111i\u1EC3m\`,            win:aG>bG?'a':aG<bG?'b':'' },
    { label:'S\u1ED1 model',       a:\`\${a.models.length} model\`, b:\`\${bx.models.length} model\`, win:a.models.length>bx.models.length?'a':a.models.length<bx.models.length?'b':'' },
    { label:'Nhi\xEAn li\u1EC7u',     a:a.fuels.join(', '),      b:bx.fuels.join(', '),     win:'' },
    { label:'Xu\u1EA5t x\u1EE9',        a:a.origin,                b:bx.origin,               win:'' },
  ];
  document.getElementById('compare-result').innerHTML = \`
    <div class="compare-body">
      <div class="compare-col-heads">
        <div class="compare-col-head"></div>
        <div class="compare-col-head">\${a.name}</div>
        <div class="compare-col-head">\${bx.name}</div>
      </div>
      \${rows.map(r=>\`<div class="compare-row">
        <div class="compare-row-label">\${r.label}</div>
        <div class="compare-cell\${r.win==='a'?' win':''}">\${r.a}</div>
        <div class="compare-cell\${r.win==='b'?' win':''}">\${r.b}</div>
      </div>\`).join('')}
    </div>\`;
};

function getCityLabel(city) {
  const map = {
    'HCM': 'TP.HCM',
    'HN': 'H\xE0 N\u1ED9i',
    'DN': '\u0110\xE0 N\u1EB5ng',
    'BD': 'B\xECnh D\u01B0\u01A1ng',
    'HP': 'H\u1EA3i Ph\xF2ng',
    'CT': 'C\u1EA7n Th\u01A1'
  };
  return map[city] || city;
}

function renderPriceTable(b) {
  const fmtP = v => {
    if (v >= 1000) {
      const t = v / 1000;
      return (Number.isInteger(t) ? t : t.toFixed(3).replace(/\\.?0+$/, '')) + ' t\u1EF7';
    }
    return v + ' tri\u1EC7u';
  };
  const fuelBadge = fuels => {
    const f = fuels || [];
    if (f.includes('ev')) return '<span class="pt-badge ev">\u0110i\u1EC7n</span>';
    if (f.includes('phev')) return '<span class="pt-badge phev">PHEV</span>';
    if (f.includes('hybrid')) return '<span class="pt-badge hybrid">Hybrid</span>';
    if (f.includes('diesel') || f.includes('dau')) return '<span class="pt-badge dau">D\u1EA7u</span>';
    return '<span class="pt-badge xang">X\u0103ng</span>';
  };
  const typeFuelOf = m => {
    // EV type is always electric
    if (m.type === 'ev') return '<span class="pt-badge ev">\u0110i\u1EC7n</span>';
    // Use first variant fuel if available \u2014 most accurate
    if (m.variants && m.variants.length) {
      const fuels = [...new Set(m.variants.map(v => v.fuel || ''))];
      const hasEV = fuels.some(f => f === '\u0110i\u1EC7n');
      const hasGas = fuels.some(f => f.includes('X\u0103ng'));
      const hasDiesel = fuels.some(f => f.includes('D\u1EA7u') || f.includes('diesel'));
      const hasHybrid = fuels.some(f => f.includes('\u0110i\u1EC7n') && f.includes('X\u0103ng'));
      if (hasHybrid) return '<span class="pt-badge hybrid">Hybrid</span>';
      if (hasEV && hasGas) return '<span class="pt-badge phev">PHEV</span>';
      if (hasEV) return '<span class="pt-badge ev">\u0110i\u1EC7n</span>';
      if (hasDiesel) return '<span class="pt-badge dau">D\u1EA7u</span>';
      return '<span class="pt-badge xang">X\u0103ng</span>';
    }
    // Fallback: infer from desc or brand fuels
    const desc = (m.desc || '').toLowerCase();
    if (desc.includes('diesel') || desc.includes('d\u1EA7u')) return '<span class="pt-badge dau">D\u1EA7u</span>';
    if (desc.includes('phev')) return '<span class="pt-badge phev">PHEV</span>';
    if (desc.includes('hybrid') || desc.includes('\u0111i\u1EC7n')) return '<span class="pt-badge hybrid">Hybrid</span>';
    const fs = b.fuels || [];
    if (fs.includes('phev')) return '<span class="pt-badge phev">PHEV</span>';
    if (fs.includes('hybrid')) return '<span class="pt-badge hybrid">Hybrid</span>';
    if (fs.includes('diesel')) return '<span class="pt-badge dau">D\u1EA7u</span>';
    return '<span class="pt-badge xang">X\u0103ng</span>';
  };
  const rows = b.models.map(m => {
    const from = m.priceFrom || (m.variants ? m.variants[0].price : null);
    const to = m.priceTo || (m.variants ? m.variants[m.variants.length-1].price : null);
    const samePrice = !to || from === to;
    const priceCell = from
      ? \`<div class="pt-price-from">\${fmtP(from)}</div>\${!samePrice ? \`<div class="pt-price-to">\u0111\u1EBFn \${fmtP(to)}</div>\` : ''}\`
      : '<div class="pt-price-from" style="color:var(--gray-400)">Li\xEAn h\u1EC7</div>';
    const href = m.slug ? \`/tien-ich-giao-thong/hang-xe/\${Object.keys(BRANDS).find(k=>BRANDS[k]===b)}/\${m.slug}\` : null;
    return \`<tr>
      <td><div class="pt-model"><div class="pt-model-name">\${m.name}</div><div class="pt-model-desc">\${m.desc}</div></div></td>
      <td>\${typeFuelOf(m)}</td>
      <td><div class="pt-price">\${priceCell}</div></td>
      <td class="pt-action">\${href ? \`<a href="\${href}">\${licon('ChevronRight',15,2.5)}</a>\` : ''}</td>
    </tr>\`;
  }).join('');
  return \`
    <div style="overflow-x:auto">
      <table class="price-table">
        <thead><tr>
          <th>D\xF2ng xe</th>
          <th>Nhi\xEAn li\u1EC7u</th>
          <th style="text-align:right">Gi\xE1 ni\xEAm y\u1EBFt 2026</th>
          <th></th>
        </tr></thead>
        <tbody>\${rows}</tbody>
      </table>
    </div>
    <div class="price-note">* Gi\xE1 tham kh\u1EA3o \xB7 Ch\u01B0a bao g\u1ED3m ph\xED tr\u01B0\u1EDBc b\u1EA1, \u0111\u0103ng k\xFD \xB7 C\u1EADp nh\u1EADt \${new Date().toLocaleDateString('vi',{month:'long',year:'numeric'})}</div>\`;
}

function renderGarages(b, id) {
  if (!b.garages || !b.garages.length) return '';
  
  // Count garages per city dynamically
  const counts = { all: b.garages.length, HCM: 0, HN: 0, DN: 0, BD: 0, HP: 0, CT: 0 };
  b.garages.forEach(g => {
    if (counts[g.city] !== undefined) counts[g.city]++;
  });

  const cityButtons = Object.entries(counts)
    .filter(([city, count]) => count > 0)
    .map(([city, count]) => {
      const label = city === 'all' ? 'T\u1EA5t c\u1EA3' : getCityLabel(city);
      const activeCls = city === 'all' ? ' on' : '';
      return \`<button class="garage-filter-btn\${activeCls}" data-city="\${city}" onclick="filterGarage('\${city}','\${id}',this)">\${label} (\${count})</button>\`;
    }).join('');

  return \`
    <div class="garage-split">
      <div class="garage-list-col">
        <div class="garage-list-header">
          <div class="garage-list-title">\${b.garages.length} garage \xB7 X\u1EBFp h\u1EA1ng theo MoMo</div>
          <div class="garage-search-box">
            <span class="garage-search-icon">\${licon('Search',14,2)}</span>
            <input type="text" placeholder="T\xEAn, \u0111\u1ECBa ch\u1EC9, t\u1EC9nh th\xE0nh..." oninput="searchGarage('\${id}', this.value)" class="garage-search-input" id="gsearch-\${id}">
          </div>
        </div>
        <div class="garage-filter" id="gf-\${id}">
          \${cityButtons}
        </div>
        <div class="garage-grid" id="garage-grid-\${id}">
          \${renderGarageCards(b.garages, id)}
        </div>
      </div>
      <div class="garage-map-col">
        <div id="gmap-inline-\${id}" class="garage-map-el"></div>
      </div>
    </div>\`;
}

function renderGarageCards(list, id) {
  if (!list || !list.length) {
    return \`<div class="garage-empty"><p>Kh\xF4ng t\xECm th\u1EA5y garage ph\xF9 h\u1EE3p.</p></div>\`;
  }
  return list.map((g, idx) => {
    return \`
    <div class="garage-card" data-idx="\${idx}" onclick="focusGaragePin(\${idx},'\${id}')">
      <div class="garage-icon" style="background:var(--pink-50);color:var(--pink-500)">\${licon('Wrench',20,2)}</div>
      <div class="garage-body">
        <div class="garage-body-top">
          <div class="garage-name">\${g.name}</div>
          <span class="garage-rating">\u2605 \${g.rating}</span>
        </div>
        <div class="garage-meta">
          <span class="garage-city"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> \${getCityLabel(g.city)}</span>
        </div>
        <div class="garage-address">\${g.address}</div>
        <div class="garage-card-footer">
          <div class="garage-bh-row">
            <span class="garage-bh-label">BH:</span>
            \${g.bh.map(name => \`<span class="garage-bh-tag">\${name}</span>\`).join('')}
          </div>
          <button class="garage-book-btn" data-name="\${g.name}" data-city="\${g.city}" data-address="\${g.address}" onclick="event.stopPropagation();openBookingModal(this.dataset.name,this.dataset.city,this.dataset.address)">\u0110\u1EB7t l\u1ECBch</button>
        </div>
      </div>
    </div>\`;
  }).join('');
}

window.filterGarage = function(city, id, btn) {
  document.querySelectorAll(\`#gf-\${id} .garage-filter-btn\`).forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  
  // Re-trigger search to combine city filter and search text input
  const searchVal = document.getElementById(\`gsearch-\${id}\`).value;
  searchGarage(id, searchVal);
};

window.searchGarage = function(id, query) {
  const b = BRANDS[id];
  const activeBtn = document.querySelector(\`#gf-\${id} .garage-filter-btn.on\`);
  const city = activeBtn ? activeBtn.getAttribute('data-city') : 'all';
  
  const q = query.toLowerCase().trim();
  const list = b.garages.filter(g => {
    // City filter
    if (city !== 'all' && g.city !== city) return false;
    
    // Search query filter
    if (!q) return true;
    const cityLabel = getCityLabel(g.city).toLowerCase();
    return g.name.toLowerCase().includes(q) || 
           g.address.toLowerCase().includes(q) || 
           cityLabel.includes(q);
  });
  
  document.getElementById(\`garage-grid-\${id}\`).innerHTML = renderGarageCards(list, id);
  updateGarageMapPins(list, id);
};

/* \u2500\u2500 INLINE GARAGE MAP \u2500\u2500 */
const _CITY_BASE = {HCM:[10.7769,106.7009],HN:[21.0285,105.8542],DN:[16.0471,108.2062],BD:[10.9804,106.6519],HP:[20.8449,106.6881],CT:[10.0341,105.7796]};
const _gMaps = {};

function initGarageMap(garages, id) {
  const el = document.getElementById('gmap-inline-'+id);
  if (!el || !garages?.length || typeof maplibregl==='undefined') return;
  if (_gMaps[id]) { try{_gMaps[id].map.remove()}catch(e){} }

  // Spread positions per city in a circle
  const cityCount = {}, cityIdx = {};
  garages.forEach(g => { cityCount[g.city]=(cityCount[g.city]||0)+1; cityIdx[g.city]=0; });
  const positions = garages.map(g => {
    const base = _CITY_BASE[g.city] || [16,106];
    const total = cityCount[g.city], ci = cityIdx[g.city]++;
    if (total === 1) return { lat:base[0], lng:base[1] };
    const angle = (ci/total)*2*Math.PI, r=0.016;
    return { lat:base[0]+r*Math.sin(angle), lng:base[1]+r*Math.cos(angle) };
  });

  const singleCity = new Set(garages.map(g=>g.city)).size===1;
  const allLats=positions.map(p=>p.lat), allLngs=positions.map(p=>p.lng);
  const centerLat=(Math.min(...allLats)+Math.max(...allLats))/2;
  const centerLng=(Math.min(...allLngs)+Math.max(...allLngs))/2;

  const map = new maplibregl.Map({
    container: el,
    style: 'https://demotiles.maplibre.org/style.json',
    center: [centerLng, centerLat],
    zoom: singleCity ? 11 : 5,
  });

  const markers = positions.map((pos, idx) => {
    const pill = document.createElement('div');
    pill.className = 'g-pill';
    pill.textContent = garages[idx].name.split(' ').slice(-2).join(' ');
    pill.addEventListener('click', e => { e.stopPropagation(); focusGaragePin(idx, id); });
    const marker = new maplibregl.Marker({element:pill, anchor:'center'}).setLngLat([pos.lng, pos.lat]).addTo(map);
    return { marker, pos, pill };
  });

  map.on('load', () => {
    if (markers.length > 1) {
      const b0 = new maplibregl.LngLatBounds([markers[0].pos.lng,markers[0].pos.lat],[markers[0].pos.lng,markers[0].pos.lat]);
      const bounds = markers.reduce((b,m)=>b.extend([m.pos.lng,m.pos.lat]), b0);
      map.fitBounds(bounds, {padding:60, maxZoom:13});
    }
  });

  _gMaps[id] = { map, markers, garages, positions };
}

window.focusGaragePin = function(idx, id) {
  document.querySelectorAll(\`#garage-grid-\${id} .garage-card\`).forEach((c,i) => c.classList.toggle('map-active', i===idx));
  const data = _gMaps[id];
  if (!data) return;
  const m = data.markers[idx];
  if (!m) return;
  data.markers.forEach((mk,i) => mk.pill.classList.toggle('active', i===idx));
  data.map.flyTo({center:[m.pos.lng, m.pos.lat], zoom:13, duration:500});
  const g = data.garages[idx];
  data.map.once('moveend', () => {
    new maplibregl.Popup({closeButton:false,offset:16})
      .setLngLat([m.pos.lng, m.pos.lat])
      .setHTML(\`<strong>\${g.name}</strong><br><span style="color:#6B7280;font-weight:500">\${g.address}, \${getCityLabel(g.city)}</span>\`)
      .addTo(data.map);
  });
};

function updateGarageMapPins(list, id) {
  const data = _gMaps[id];
  if (!data) return;
  const activeIds = new Set(list.map(g => data.garages.indexOf(g)));
  data.markers.forEach((m, i) => {
    m.pinEl.style.opacity = activeIds.has(i) ? '1' : '0.25';
  });
}

/* \u2500\u2500 RENDER INSIGHT PANEL \u2500\u2500 */
function renderInsightPanel(b, id) {
  const ins = b.insight;
  if (!ins) return '';
  const total = ins.monthly;
  const bd = ins.breakdown;
  const maxVal = Math.max(bd.bh, bd.fuel, bd.road, bd.maint);
  const bar = (val, fillColor) => {
    const pct = Math.round((val / maxVal) * 100);
    return \`<div class="insight-bar-track"><div class="insight-bar-fill" style="width:\${pct}%;background:\${fillColor}"></div></div>\`;
  };
  const vsSign = ins.vs_estimate > 0 ? '+' : '';
  const vsCls = ins.vs_estimate > 0 ? 'positive' : 'negative';
  const vsLabel = ins.vs_estimate > 0
    ? \`Cao h\u01A1n \u01B0\u1EDBc t\xEDnh \${vsSign}\${ins.vs_estimate}%\`
    : \`Ti\u1EBFt ki\u1EC7m h\u01A1n \u01B0\u1EDBc t\xEDnh \${Math.abs(ins.vs_estimate)}%\`;

  return \`<div class="insight-panel" id="insight-panel-\${id}">
    <div class="insight-header" style="background:var(--mobase-surface)">
      <div class="insight-owners">\${ins.owners.toLocaleString('vi')} ch\u1EE7 xe \${b.name} tr\xEAn MoMo</div>
    </div>
    <div class="insight-body">
      <div class="insight-main">
        <div class="insight-monthly-label">Th\u1EF1c chi trung b\xECnh / th\xE1ng</div>
        <div class="insight-monthly-val">\${(total/1000).toFixed(1).replace('.',',')}tr</div>
        <div class="insight-monthly-unit">\u0111\u1ED3ng / th\xE1ng \xB7 xe \${ins.topModel}</div>
        <div class="insight-model-note">G\u1ED3m: d\u1EF1 ph\xF2ng xe, nhi\xEAn li\u1EC7u, \u0111\u01B0\u1EDDng b\u1ED9, b\u1EA3o d\u01B0\u1EE1ng</div>
        <div class="insight-vs \${vsCls}">\${vsLabel}</div>
      </div>
      <div class="insight-right">
        <div class="insight-city-toggle">
          <button class="city-btn on" onclick="switchCity('hcm','\${id}')" id="city-hcm-\${id}">HCM</button>
          <button class="city-btn" onclick="switchCity('hn','\${id}')" id="city-hn-\${id}">H\xE0 N\u1ED9i</button>
        </div>
        <div class="insight-city-val" id="city-val-\${id}">\${(ins.hcm/1000).toFixed(1).replace('.',',')}tr</div>
        <div class="insight-city-sub" id="city-sub-\${id}">TP.HCM \xB7 trung b\xECnh / th\xE1ng</div>
        <div class="insight-breakdown-label">C\u01A1 c\u1EA5u chi ph\xED</div>
        <div class="insight-bars">
          <div class="insight-bar-row">
            <div class="insight-bar-name">D\u1EF1 ph\xF2ng xe</div>
            \${bar(bd.bh, 'var(--mobase-ink)')}
            <div class="insight-bar-val">\${fmt(bd.bh)}</div>
          </div>
          <div class="insight-bar-row">
            <div class="insight-bar-name">\${b.fuels.includes('\u0111i\u1EC7n')&&b.fuels.length===1?'\u0110i\u1EC7n':'Nhi\xEAn li\u1EC7u'}</div>
            \${bar(bd.fuel, 'var(--mobase-blue)')}
            <div class="insight-bar-val">\${fmt(bd.fuel)}</div>
          </div>
          <div class="insight-bar-row">
            <div class="insight-bar-name">\u0110\u01B0\u1EDDng b\u1ED9 & \u0110K</div>
            \${bar(bd.road||1, 'var(--mobase-teal)')}
            <div class="insight-bar-val">\${bd.road?fmt(bd.road):'Mi\u1EC5n ph\xED'}</div>
          </div>
          <div class="insight-bar-row">
            <div class="insight-bar-name">B\u1EA3o d\u01B0\u1EE1ng</div>
            \${bar(bd.maint, 'var(--gray-500)')}
            <div class="insight-bar-val">\${fmt(bd.maint)}</div>
          </div>
          </div>
        </div>
      </div>
    </div>\`;
}

window.switchCity = function(city, id) {
  const b = BRANDS[id];
  const ins = b.insight;
  document.querySelectorAll(\`#city-hcm-\${id}, #city-hn-\${id}\`).forEach(el=>el.classList.remove('on'));
  document.getElementById(\`city-\${city}-\${id}\`).classList.add('on');
  const val = city === 'hcm' ? ins.hcm : ins.hn;
  const label = city === 'hcm' ? 'TP.HCM \xB7 trung b\xECnh / th\xE1ng' : 'H\xE0 N\u1ED9i \xB7 trung b\xECnh / th\xE1ng';
  document.getElementById(\`city-val-\${id}\`).textContent = (val/1000).toFixed(1).replace('.',',') + 'tr';
  document.getElementById(\`city-sub-\${id}\`).textContent = label;
};

function renderBrandStats(b, id) {
  const dealersMap = {
    toyota:'86+ \u0110\u1EA1i l\xFD / 3S', vinfast:'150+ Showroom & S\u1EA1c', hyundai:'72+ \u0110\u1EA1i l\xFD 3S',
    honda:'48+ \u0110\u1EA1i l\xFD 3S', mazda:'55+ Showroom', ford:'42+ \u0110\u1EA1i l\xFD', kia:'65+ Showroom',
    mitsubishi:'52+ \u0110\u1EA1i l\xFD', mercedes:'18+ Center', bmw:'15+ Showroom', audi:'8+ Center',
    lexus:'6+ Center 3S', mg:'35+ Showroom', suzuki:'38+ \u0110\u1EA1i l\xFD', nissan:'28+ \u0110\u1EA1i l\xFD'
  };
  const warrantyMap = {
    vinfast:'10 n\u0103m / 200.000 km', toyota:'5 n\u0103m / 150.000 km', hyundai:'5 n\u0103m / 100.000 km',
    honda:'3 n\u0103m / 100.000 km', mazda:'3 n\u0103m / 100.000 km', ford:'3 n\u0103m / 100.000 km',
    kia:'5 n\u0103m / kh\xF4ng gi\u1EDBi h\u1EA1n', mitsubishi:'3 n\u0103m / 100.000 km', mercedes:'3 n\u0103m / kh\xF4ng gi\u1EDBi h\u1EA1n',
    bmw:'5 n\u0103m / kh\xF4ng gi\u1EDBi h\u1EA1n', volvo:'5 n\u0103m / kh\xF4ng gi\u1EDBi h\u1EA1n'
  };
  const shareMap = {
    toyota:'Top 1 (21.4% th\u1ECB ph\u1EA7n)', vinfast:'Top 1 Xe \u0110i\u1EC7n', hyundai:'Top 2 (18.2% th\u1ECB ph\u1EA7n)',
    kia:'Top 3 (12.5% th\u1ECB ph\u1EA7n)', honda:'Top 4 (9.8% th\u1ECB ph\u1EA7n)', ford:'Top 1 B\xE1n T\u1EA3i & SUV 7 ch\u1ED7',
    mitsubishi:'Top 1 MPV Xpander', mazda:'Top 1 Crossover C-SUV'
  };
  const dealers = dealersMap[id] || (b.origin === 'Nh\u1EADt B\u1EA3n' ? '45+ \u0110\u1EA1i l\xFD 3S' : '30+ Showroom');
  const warranty = warrantyMap[id] || '3 n\u0103m / 100.000 km';
  const share = shareMap[id] || (b.origin + ' \xB7 Ph\u1ED5 bi\u1EBFn');
  const retention = b.models[0]?.valuation?.segAvgRetention3y ? \`\${b.models[0].valuation.segAvgRetention3y}% sau 3 n\u0103m\` : '72% - 82%';

  return \`<div class="brand-stats-grid">
    <div class="bstat-card">
      <div class="bstat-icon">\${licon('Store',18,2)}</div>
      <div class="bstat-info">
        <div class="bstat-val">\${dealers}</div>
        <div class="bstat-lbl">M\u1EA1ng l\u01B0\u1EDBi \u0111\u1EA1i l\xFD ch\xEDnh h\xE3ng</div>
      </div>
    </div>
    <div class="bstat-card">
      <div class="bstat-icon">\${licon('ShieldCheck',18,2)}</div>
      <div class="bstat-info">
        <div class="bstat-val">\${warranty}</div>
        <div class="bstat-lbl">Ch\xEDnh s\xE1ch b\u1EA3o h\xE0nh</div>
      </div>
    </div>
    <div class="bstat-card">
      <div class="bstat-icon">\${licon('TrendingUp',18,2)}</div>
      <div class="bstat-info">
        <div class="bstat-val">\${share}</div>
        <div class="bstat-lbl">V\u1ECB th\u1EBF t\u1EA1i th\u1ECB tr\u01B0\u1EDDng VN</div>
      </div>
    </div>
    <div class="bstat-card">
      <div class="bstat-icon">\${licon('Coins',18,2)}</div>
      <div class="bstat-info">
        <div class="bstat-val">\${retention}</div>
        <div class="bstat-lbl">Ch\u1EC9 s\u1ED1 gi\u1EEF gi\xE1 trung b\xECnh</div>
      </div>
    </div>
  </div>\`;
}

function renderMaintenanceSchedule(b) {
  const isEV = b.fuels.includes('\u0111i\u1EC7n') && b.fuels.length === 1;
  if (isEV) {
    return \`<div class="maint-sched-grid">
      <div class="maint-sched-card">
        <div class="maint-km-badge">12.000 km / 1 n\u0103m</div>
        <div class="maint-stage-title">B\u1EA3o d\u01B0\u1EE1ng C\u1EA5p 1</div>
        <div class="maint-stage-desc">Ki\u1EC3m tra dung l\u01B0\u1EE3ng Pin, c\u1EADp nh\u1EADt ph\u1EA7n m\u1EC1m ECU, ki\u1EC3m tra h\u1EC7 th\u1ED1ng phanh regen &amp; l\u1ECDc gi\xF3 cabin.</div>
        <div class="maint-stage-price">500.000\u0111 - 900.000\u0111</div>
      </div>
      <div class="maint-sched-card">
        <div class="maint-km-badge">24.000 km / 2 n\u0103m</div>
        <div class="maint-stage-title">B\u1EA3o d\u01B0\u1EE1ng C\u1EA5p 2</div>
        <div class="maint-stage-desc">Thay l\u1ECDc gi\xF3 \u0111i\u1EC1u h\xF2a than ho\u1EA1t t\xEDnh, thay d\u1EA7u phanh, c\xE2n b\u1EB1ng \u0111\u1ED9ng 4 b\xE1nh &amp; \u0111\u1EA3o l\u1ED1p.</div>
        <div class="maint-stage-price">1.200.000\u0111 - 1.800.000\u0111</div>
      </div>
      <div class="maint-sched-card">
        <div class="maint-km-badge">48.000 km / 4 n\u0103m</div>
        <div class="maint-stage-title">B\u1EA3o d\u01B0\u1EE1ng C\u1EA5p 3</div>
        <div class="maint-stage-desc">Thay n\u01B0\u1EDBc l\xE0m m\xE1t pin cao \xE1p (HV battery coolant), ki\u1EC3m tra c\u1ED5ng s\u1EA1c &amp; \u0111\u01B0\u1EDDng d\xE2y \u0111i\u1EC7n 400V.</div>
        <div class="maint-stage-price">2.500.000\u0111 - 4.000.000\u0111</div>
      </div>
      <div class="maint-sched-card">
        <div class="maint-km-badge">96.000 km / 8 n\u0103m</div>
        <div class="maint-stage-title">B\u1EA3o d\u01B0\u1EE1ng \u0110\u1EA1i tu</div>
        <div class="maint-stage-desc">\u0110\xE1nh gi\xE1 s\u1EE9c kh\u1ECFe Pin SOH, thay dung d\u1ECBch l\xE0m m\xE1t \u0111\u1ED9ng c\u01A1 \u0111i\u1EC7n e-Motor &amp; d\u1EA7u c\u1EA7u e-Axle.</div>
        <div class="maint-stage-price">4.500.000\u0111 - 7.000.000\u0111</div>
      </div>
    </div>\`;
  }
  return \`<div class="maint-sched-grid">
    <div class="maint-sched-card">
      <div class="maint-km-badge">5.000 km / 6 th\xE1ng</div>
      <div class="maint-stage-title">B\u1EA3o d\u01B0\u1EE1ng C\u1EA5p Nh\u1ECF</div>
      <div class="maint-stage-desc">Thay nh\u1EDBt \u0111\u1ED9ng c\u01A1 ch\xEDnh h\xE3ng, v\u1EC7 sinh l\u1ECDc gi\xF3, ki\u1EC3m tra g\u1EA7m, m\u1EE9c n\u01B0\u1EDBc r\u1EEDa k\xEDnh &amp; \xE1p su\u1EA5t l\u1ED1p.</div>
      <div class="maint-stage-price">600.000\u0111 - 1.200.000\u0111</div>
    </div>
    <div class="maint-sched-card">
      <div class="maint-km-badge">10.000 km / 1 n\u0103m</div>
      <div class="maint-stage-title">B\u1EA3o d\u01B0\u1EE1ng C\u1EA5p V\u1EEBa</div>
      <div class="maint-stage-desc">Thay nh\u1EDBt + L\u1ECDc nh\u1EDBt \u0111\u1ED9ng c\u01A1, \u0111\u1EA3o l\u1ED1p xe, b\u1EA3o d\u01B0\u1EE1ng v\u1EC7 sinh 4 phanh &amp; ki\u1EC3m tra h\u1EC7 th\u1ED1ng treo.</div>
      <div class="maint-stage-price">1.200.000\u0111 - 2.200.000\u0111</div>
    </div>
    <div class="maint-sched-card">
      <div class="maint-km-badge">20.000 - 40.000 km</div>
      <div class="maint-stage-title">B\u1EA3o d\u01B0\u1EE1ng C\u1EA5p L\u1EDBn</div>
      <div class="maint-stage-desc">Thay l\u1ECDc gi\xF3 \u0111\u1ED9ng c\u01A1/\u0111i\u1EC1u h\xF2a, d\u1EA7u phanh, n\u01B0\u1EDBc l\xE0m m\xE1t, d\u1EA7u h\u1ED9p s\u1ED1 AT/CVT &amp; l\u1ECDc nhi\xEAn li\u1EC7u.</div>
      <div class="maint-stage-price">3.500.000\u0111 - 7.500.000\u0111</div>
    </div>
    <div class="maint-sched-card">
      <div class="maint-km-badge">80.000 km / 4 n\u0103m</div>
      <div class="maint-stage-title">\u0110\u1EA1i B\u1EA3o D\u01B0\u1EE1ng</div>
      <div class="maint-stage-desc">Thay b\u1ED9 bugi Iridium, d\xE2y curoa t\u1ED5ng, dung d\u1ECBch l\xE0m m\xE1t to\xE0n h\u1EC7 th\u1ED1ng, s\xFAc r\u1EEDa h\u1ECDng h\xFAt &amp; kim phun.</div>
      <div class="maint-stage-price">8.000.000\u0111 - 16.000.000\u0111</div>
    </div>
  </div>\`;
}

function renderSparePartsTable(b) {
  const parts = b.models[0]?.spareParts || [
    { name:'L\u1ECDc d\u1EA7u \u0111\u1ED9ng c\u01A1 ch\xEDnh h\xE3ng', interval:'7.500 - 10.000 km', cost:'150.000\u0111 - 350.000\u0111', note:'Khuy\xEAn d\xF9ng h\xE0ng ch\xEDnh h\xE3ng' },
    { name:'L\u1ECDc gi\xF3 \u0111\u1ED9ng c\u01A1', interval:'15.000 - 20.000 km', cost:'250.000\u0111 - 550.000\u0111', note:'Thay s\u1EDBm h\u01A1n n\u1EBFu ch\u1EA1y \u0111\u01B0\u1EDDng b\u1EE5i' },
    { name:'L\u1ECDc gi\xF3 \u0111i\u1EC1u h\xF2a than ho\u1EA1t t\xEDnh', interval:'15.000 km', cost:'200.000\u0111 - 650.000\u0111', note:'Gi\u1EEF kh\xF4ng kh\xED cabin s\u1EA1ch khu\u1EA9n' },
    { name:'M\xE1 phanh tr\u01B0\u1EDBc / sau', interval:'40.000 - 60.000 km', cost:'1.200.000\u0111 - 3.200.000\u0111/c\u1EB7p', note:'Ki\u1EC3m tra \u0111\u1ED9 d\xE0y phanh \u0111\u1ECBnh k\u1EF3' },
    { name:'D\u1EA7u h\u1ED9p s\u1ED1 t\u1EF1 \u0111\u1ED9ng (AT/CVT)', interval:'40.000 - 60.000 km', cost:'900.000\u0111 - 2.500.000\u0111', note:'B\u1EA3o v\u1EC7 b\xE1nh r\u0103ng & l\xE1 c\xF4n' },
    { name:'B\xECnh \u1EAFc quy ch\xEDnh h\xE3ng (12V)', interval:'2 - 3 n\u0103m', cost:'1.600.000\u0111 - 3.800.000\u0111', note:'\u1EAEc quy kh\xF4 mi\u1EC5n b\u1EA3o d\u01B0\u1EE1ng' },
    { name:'G\u1EA1t m\u01B0a Silicon cao c\u1EA5p', interval:'12 th\xE1ng', cost:'350.000\u0111 - 850.000\u0111/c\u1EB7p', note:'G\u1EA1t s\u1EA1ch n\u01B0\u1EDBc, kh\xF4ng \u0111\u1EC3 l\u1EA1i v\u1EC7t' },
  ];

  const rows = parts.map(p => \`<tr>
    <td><div class="part-name">\${p.name}</div></td>
    <td><span class="part-interval">\${p.interval}</span></td>
    <td><span class="part-cost">\${p.cost}</span></td>
    <td><span style="font-size:12px;color:var(--gray-500)">\${p.note || 'Thay th\u1EBF t\u1EA1i \u0111\u1EA1i l\xFD / garage uy t\xEDn'}</span></td>
  </tr>\`).join('');

  return \`<div class="parts-table-wrap">
    <table class="parts-table">
      <thead>
        <tr>
          <th>T\xEAn ph\u1EE5 t\xF9ng</th>
          <th>Chu k\u1EF3 thay th\u1EBF</th>
          <th>Chi ph\xED tham kh\u1EA3o</th>
          <th>Ghi ch\xFA s\u1EED d\u1EE5ng</th>
        </tr>
      </thead>
      <tbody>\${rows}</tbody>
    </table>
  </div>\`;
}

/* \u2500\u2500 RENDER DETAIL \u2500\u2500 */
function renderDetail(id) {
  const b = BRANDS[id];
  if (!b) { renderListing(); return; }
  document.getElementById('page-title').textContent = b.name + ' - H\xE3ng xe tr\xEAn MoMo';

  // Breadcrumb
  const bc = \`<div class="breadcrumb-bar"><div class="wrap"><div class="bc-inner">
    <a class="bc-link" href="/tien-ich-giao-thong">Ti\u1EC7n \xCDch Giao Th\xF4ng</a>
    <span class="bc-sep">\u203A</span>
    <a class="bc-link" href="/tien-ich-giao-thong/hang-xe">H\xE3ng xe</a>
    <span class="bc-sep">\u203A</span>
    <span class="bc-current">\${b.name}</span>
  </div></div></div>\`;

  // Hero
  const hero = \`<div class="detail-hero">
    <div class="wrap">
      <div class="detail-hero-inner">
        \${brandMark(id,80,80,20,22)}
        <div class="detail-hero-meta">
          <h1 class="detail-title">\${b.name}</h1>
          <p class="detail-tagline">\${b.tagline}</p>
          <div class="type-pills">
            <span class="type-pill"><strong>Model</strong> \${b.models[0].name}</span>
            <span class="type-pill"><strong>Lo\u1EA1i</strong> \${brandTypeSummary(b)}</span>
          </div>
          <div class="score-pills">
            \${(b.scores||[]).map(s=>\`<span class="score-pill \${s.level}"><span class="score-pill-label">\${s.label}</span><span class="score-pill-val">\${s.val}</span></span>\`).join('')}
          </div>
          <div class="quick-nav">
            <a class="quick-pill" href="#models">D\xF2ng xe</a>
            <a class="quick-pill" href="#bang-gia">B\u1EA3ng gi\xE1</a>
            <a class="quick-pill" href="#bao-duong-dinh-ky">L\u1ECBch b\u1EA3o d\u01B0\u1EE1ng</a>
            <a class="quick-pill" href="#phu-tung">Ph\u1EE5 t\xF9ng</a>
            <a class="quick-pill" href="#bh">\u0110\u1ED1i t\xE1c</a>
            <a class="quick-pill" href="#chi-phi">Chi ph\xED</a>
            <a class="quick-pill" href="#garage">Garage</a>
            <a class="quick-pill" href="#notes">Ghi ch\xFA</a>
            <a class="quick-pill" href="#so-sanh">So s\xE1nh</a>
            <a class="quick-pill" href="#tin-tuc">Tin t\u1EE9c</a>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>\`;

  // Models
  const modelCards = b.models.map((m,i) => {
    const imgBg = \`linear-gradient(160deg,\${b.color}14 0%,\${b.color}06 100%)\`;
    const tag = m.slug ? 'a' : 'button';
    const linkAttr = m.slug ? \`href="/tien-ich-giao-thong/hang-xe/\${id}/\${m.slug}"\` : \`onclick="selectModel(\${i},'\${id}')"\`;
    return \`<\${tag} class="model-card" \${linkAttr} id="mc-\${i}">
      <div class="model-img" style="background:\${imgBg}">
        \${carSVG(m.type||'suv', b.color)}
      </div>
      <div class="model-info">
        <div class="model-name">\${m.name}</div>
        <div class="model-meta">
          <span class="model-badge">\${modelTypeLabel(m)}</span>
          \${m.slug ? '<span class="model-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>' : ''}
        </div>
      </div>
    </\${tag}>\`;
  }).join('');

  // BH section
  const insRows = b.topInsurers.map(ins => \`
    <div class="ins-row">
      <div class="ins-body">
        \${insurerLogoHtml(ins.name)}
        <div class="ins-meta">
          <div class="ins-name">\${ins.name}</div>
        </div>
      </div>
    </div>\`).join('');

  // Year options
  const years = Array.from({length:16},(_,i)=>2025-i).map(y=>\`<option value="\${y}">\${y}</option>\`).join('');

  // Model options for quote
  const modelOpts = b.models.map((m,i)=>\`<option value="\${i}">\${m.name}</option>\`).join('');

  // Cost tiles for first model
  const firstM = b.models[0];

  // Scenarios
  const SIT_SLUG = { collision:'va-cham-tai-nan', thuykick:'thuy-kich-nuoc-vao-may', fire:'chay-no-xe', theft:'mat-cap-toan-bo-xe', parttheft:'mat-cap-bo-phan', natural:'thien-tai-bao-lu', glass:'vo-kinh', parked:'xe-do-bi-va-xay-xuoc' };
  const scCards = b.scenarios.map(sid => {
    const sc = SCENARIOS[sid];
    if (!sc) return '';
    return \`<a class="scenario-card" href="/bao-hiem-o-to/tinh-huong/\${SIT_SLUG[sid]||sid}">
      <div class="scenario-icon">\${licon(sc.icon,20,2)}</div>
      <div class="scenario-name">\${sc.name}</div>
      <div class="scenario-short">\${sc.short}</div>
      <div class="scenario-link">Xem chi ti\u1EBFt <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg></div>
    </a>\`;
  }).join('');

  // Notes
  const noteHtml = b.notes.map(n => \`
    <div class="brand-note">
      <div class="brand-note-q">\${n.q}</div>
      <div class="brand-note-a">\${n.a}</div>
    </div>\`).join('');

  // Model options for cost
  const costModelOpts = b.models.map((m,i)=>\`<option value="\${i}">\${m.name}</option>\`).join('');
  const fuelLabel = b.fuels.includes('\u0111i\u1EC7n') ? '\u0110i\u1EC7n (th\xE1ng)' : 'X\u0103ng (th\xE1ng)';

  // Brand desc + services
  const isEV = b.fuels.includes('\u0111i\u1EC7n') && b.fuels.length === 1;
  const services = [
    isEV
      ? {icon:'Zap', name:'Tr\u1EA1m s\u1EA1c \u0111i\u1EC7n', hint:'T\xECm tr\u1EA1m g\u1EA7n nh\u1EA5t', href:'/cay-xang'}
      : {icon:'Fuel', name:'Gi\xE1 x\u0103ng h\xF4m nay', hint:'RON 95, E5, D\u1EA7u', href:'/gia-xang'},
    isEV
      ? null
      : {icon:'Map', name:'T\xECm c\xE2y x\u0103ng', hint:'G\u1EA7n v\u1ECB tr\xED c\u1EE7a b\u1EA1n', href:'/cay-xang'},
    {icon:'Search', name:'\u0110\u0103ng ki\u1EC3m', hint:'L\u1ECBch h\u1EB9n & tra c\u1EE9u', href:'/tien-ich-giao-thong/dang-kiem'},
    {icon:'Route', name:'ePass \xB7 Ph\xED \u0111\u01B0\u1EDDng b\u1ED9', hint:'N\u1EA1p ti\u1EC1n ETC nhanh', href:'/epass'},
    {icon:'SquareParking', name:'B\xE3i \u0111\u1ED7 xe', hint:'Gi\u1EEF ch\u1ED7 tr\u01B0\u1EDBc', href:'/tien-ich-giao-thong/bai-do-xe'},
    {icon:'ClipboardList', name:'Ph\u1EA1t ngu\u1ED9i', hint:'Tra c\u1EE9u bi\u1EC3n s\u1ED1', href:'/phat-nguoi'},
  ].filter(Boolean);

  const descBand = \`<div class="brand-desc-band">
    <div class="wrap"><div class="brand-desc-text">\${b.desc}</div></div>
  </div>\`;

  const brandStatsHtml = \`<div class="wrap" style="margin-top:-10px">\${renderBrandStats(b, id)}</div>\`;

  const svcStrip = \`<div class="services-strip" id="dich-vu">
    <div class="wrap">
      <div class="services-label">D\u1ECBch v\u1EE5 cho xe \${b.name} tr\xEAn MoMo</div>
      <div class="services-row">
        \${services.map(s=>\`<a class="svc-card" href="\${s.href}">
          <div class="svc-icon">\${licon(s.icon,20,2)}</div>
          <div class="svc-body">
            <div class="svc-name">\${s.name}</div>
            <div class="svc-hint">\${s.hint}</div>
          </div>
        </a>\`).join('')}
      </div>
    </div>
  </div>\`;

  const dualTab = DUAL_BRANDS.includes(id) ? \`
    <div style="background:#fff;border-bottom:1px solid var(--gray-200);padding:0">
      <div class="wrap" style="padding-top:12px;padding-bottom:0">
        <div class="veh-tabs">
          <span class="veh-tab active">\u{1F697} \xD4 t\xF4</span>
          <a class="veh-tab" href="/tien-ich-giao-thong/hang-xe-may/\${id}"><i data-lucide="bike" width="14" height="14"></i> Xe m\xE1y</a>
        </div>
      </div>
    </div>\` : '';

  document.getElementById('app').innerHTML = bc + dualTab + hero + descBand + brandStatsHtml + svcStrip + \`
    <div class="wrap detail-body">

      <!-- MODELS -->
      <div class="d-section" id="models">
        <div class="d-section-head">
          <div class="eyebrow">D\xF2ng xe</div>
          <div class="section-h">D\xF2ng xe \${b.name} ph\u1ED5 bi\u1EBFn t\u1EA1i Vi\u1EC7t Nam</div>
          <div class="section-sub">Ch\u1ECDn d\xF2ng xe \u0111\u1EC3 xem lo\u1EA1i xe v\xE0 chi ph\xED s\u1EED d\u1EE5ng c\u1EE5 th\u1EC3</div>
        </div>
        <div class="model-grid">\${modelCards}</div>
      </div>

      <!-- B\u1EA2NG GI\xC1 2026 -->
      <div class="d-section" id="bang-gia">
        <div class="d-section-head">
          <div class="eyebrow">B\u1EA3ng gi\xE1</div>
          <div class="section-h">B\u1EA3ng gi\xE1 xe \${b.name} 2026</div>
          <div class="section-sub">Gi\xE1 ni\xEAm y\u1EBFt t\u1EEB \u0111\u1EA1i l\xFD ch\xEDnh h\xE3ng t\u1EA1i Vi\u1EC7t Nam \xB7 Ch\u01B0a g\u1ED3m ph\xED tr\u01B0\u1EDBc b\u1EA1</div>
        </div>
        \${renderPriceTable(b)}
      </div>

      <!-- L\u1ECACH B\u1EA2O D\u01AF\u1EE0NG \u0110\u1ECANH K\u1EF2 -->
      <div class="d-section" id="bao-duong-dinh-ky">
        <div class="d-section-head">
          <div class="eyebrow">L\u1ECBch b\u1EA3o d\u01B0\u1EE1ng</div>
          <div class="section-h">L\u1ECBch b\u1EA3o d\u01B0\u1EE1ng \u0111\u1ECBnh k\u1EF3 xe \${b.name}</div>
          <div class="section-sub">Khuy\u1EBFn c\xE1o t\u1EEB nh\xE0 s\u1EA3n xu\u1EA5t & m\u1ED1c ki\u1EC3m tra \u0111\u1ECBnh k\u1EF3 thi\u1EBFt y\u1EBFu</div>
        </div>
        \${renderMaintenanceSchedule(b)}
      </div>

      <!-- PH\u1EE4 T\xD9NG TI\xCAU HOA -->
      <div class="d-section" id="phu-tung">
        <div class="d-section-head">
          <div class="eyebrow">Ph\u1EE5 t\xF9ng ch\xEDnh h\xE3ng</div>
          <div class="section-h">B\u1EA3ng gi\xE1 ph\u1EE5 t\xF9ng ti\xEAu hao xe \${b.name}</div>
          <div class="section-sub">Gi\xE1 tham kh\u1EA3o linh ki\u1EC7n thay th\u1EBF \u0111\u1ECBnh k\u1EF3 gi\xFAp b\u1EA1n ch\u1EE7 \u0111\u1ED9ng ng\xE2n s\xE1ch</div>
        </div>
        \${renderSparePartsTable(b)}
      </div>

      <!-- \u0110\u1ED0I T\xC1C -->
      <div class="d-section" id="bh">
        <div class="d-section-head">
          <div class="eyebrow">\u0110\u1ED1i t\xE1c</div>
          <div class="section-h">\u0110\u01A1n v\u1ECB h\u1ED7 tr\u1EE3 cho xe \${b.name}</div>
          <div class="section-sub">Tham kh\u1EA3o theo m\u1EA1ng l\u01B0\u1EDBi garage v\xE0 t\u1ED1c \u0111\u1ED9 x\u1EED l\xFD</div>
        </div>
        <div class="bh-cols">
          <div class="bh-card">
            <div class="eyebrow" style="margin-bottom:14px">Khung tham chi\u1EBFu</div>
            <label class="form-lbl">D\xF2ng xe</label>
            <select class="form-sel" id="quote-model" onchange="updateQuote('\${id}')">
              \${modelOpts}
            </select>
            <label class="form-lbl">N\u0103m s\u1EA3n xu\u1EA5t</label>
            <select class="form-sel" id="quote-year" onchange="updateQuote('\${id}')">
              \${years}
            </select>
            <div class="estimate-box" style="background:var(--mobase-surface);border-color:var(--mobase-line)">
              <div class="est-label" id="est-label">\u01AF\u1EDBc t\xEDnh / n\u0103m</div>
              <div class="est-value" id="est-value" style="color:var(--mobase-blue)">\${firstM.bh}tr/n\u0103m</div>
            </div>
          </div>
          <div class="bh-card">
            <div class="eyebrow" style="margin-bottom:14px">\u0110\u01A1n v\u1ECB n\u1ED5i b\u1EADt cho \${b.name}</div>
            \${insRows}
          </div>
        </div>
      </div>

      <!-- GARAGE -->
      <div class="d-section" id="garage">
        <div class="d-section-head">
          <div class="eyebrow">Garage & D\u1ECBch v\u1EE5</div>
          <div class="section-h">Garage t\u1ED1t nh\u1EA5t cho xe \${b.name}</div>
          <div class="section-sub">X\u1EBFp h\u1EA1ng theo s\u1ED1 l\u01B0\u1EE3ng x\u1EED l\xFD qua MoMo \xB7 Ph\u1EE5 t\xF9ng genuine \xB7 C\xF3 trong m\u1EA1ng l\u01B0\u1EDBi h\u1ED7 tr\u1EE3</div>
        </div>
        \${renderGarages(b, id)}
      </div>

      <!-- CHI PH\xCD V\u1EACN H\xC0NH -->
      <div class="d-section" id="chi-phi">
        <div class="d-section-head">
          <div class="eyebrow">Chi ph\xED v\u1EADn h\xE0nh</div>
          <div class="section-h">Ch\u1EE7 xe \${b.name} th\u1EF1c chi bao nhi\xEAu m\u1ED7i th\xE1ng?</div>
          <div class="section-sub">\u01AF\u1EDBc t\xEDnh t\u1EEB d\u1EEF li\u1EC7u s\u1EED d\u1EE5ng th\u1EF1c t\u1EBF \xB7 C\u1EADp nh\u1EADt \${new Date().toLocaleDateString('vi',{month:'long',year:'numeric'})}</div>
        </div>
        \${renderInsightPanel(b, id)}
        <div class="cost-model-bar" style="margin-top:28px">
          <span style="font-size:13px;font-weight:700;color:var(--gray-500)">\u01AF\u1EDBc t\xEDnh theo d\xF2ng xe:</span>
          <select class="cost-model-sel" id="cost-model" onchange="updateCost('\${id}')">
            \${costModelOpts}
          </select>
        </div>
        <div class="cost-tiles" id="cost-tiles">\${renderCostTiles(firstM, b)}</div>
        <div class="cost-total-bar" id="cost-total-bar">\${renderCostTotal(firstM, b)}</div>
      </div>

      <!-- NOTES -->
      <div class="d-section" id="notes">
        <div class="d-section-head">
          <div class="eyebrow">\u0110\u1EB7c th\xF9 h\xE3ng</div>
          <div class="section-h">Nh\u1EEFng \u0111i\u1EC1u c\u1EA7n bi\u1EBFt v\u1EC1 xe \${b.name}</div>
          <div class="section-sub">Th\xF4ng tin th\u1EF1c t\u1EBF t\u1EEB kinh nghi\u1EC7m b\u1ED3i th\u01B0\u1EDDng \u2014 kh\xF4ng c\xF3 \u1EDF n\u01A1i kh\xE1c</div>
        </div>
        \${noteHtml}
      </div>

      <!-- SCENARIOS -->
      <div class="d-section" id="tinh-huong">
        <div class="d-section-head">
          <div class="eyebrow">T\xECnh hu\u1ED1ng hay g\u1EB7p</div>
          <div class="section-h">T\xECnh hu\u1ED1ng b\u1ED3i th\u01B0\u1EDDng ph\u1ED5 bi\u1EBFn v\u1EDBi xe \${b.name}</div>
          <div class="section-sub">Xem quy tr\xECnh x\u1EED l\xFD v\xE0 \u0111i\u1EC1u kho\u1EA3n c\u1EE5 th\u1EC3 cho t\u1EEBng t\xECnh hu\u1ED1ng</div>
        </div>
        <div class="scenario-grid">\${scCards}</div>
      </div>

      <!-- TIN T\u1EE8C -->
      <div class="d-section" id="tin-tuc">
        <div class="d-section-head">
          <div class="eyebrow">Tin t\u1EE9c</div>
          <div class="section-h">Tin m\u1EDBi nh\u1EA5t v\u1EC1 \${b.name}</div>
          <div class="section-sub">C\u1EADp nh\u1EADt t\u1EEB c\xE1c ngu\u1ED3n b\xE1o ch\xED \xF4 t\xF4 uy t\xEDn \xB7 \${new Date().toLocaleDateString('vi',{month:'long',year:'numeric'})}</div>
        </div>
        \${renderNews(id)}
      </div>

      <!-- SO S\xC1NH H\xC3NG -->
      <div class="d-section" id="so-sanh">
        <div class="d-section-head">
          <div class="eyebrow">So s\xE1nh h\xE3ng</div>
          <div class="section-h">So s\xE1nh \${b.name} v\u1EDBi h\xE3ng kh\xE1c</div>
          <div class="section-sub">Ch\u1ECDn h\xE3ng th\u1EE9 hai \u0111\u1EC3 xem b\u1EA3ng so s\xE1nh chi ph\xED, \u0111\xE1nh gi\xE1 v\xE0 garage</div>
        </div>
        <div class="compare-wrap">
          <div class="compare-pick-bar">
            <div class="compare-a-pill" style="background:\${b.color}">\${brandMark(id,28,28,7,10)} \${b.name}</div>
            <div class="compare-vs-label">VS</div>
            <select class="compare-sel" onchange="doCompare('\${id}',this.value)">
              <option value="">Ch\u1ECDn h\xE3ng \u0111\u1EC3 so s\xE1nh...</option>
              \${BRAND_LIST.filter(x=>x!==id).map(x=>\`<option value="\${x}">\${BRANDS[x].name}</option>\`).join('')}
            </select>
          </div>
          <div id="compare-result"><div class="compare-placeholder">\u2190 Ch\u1ECDn m\u1ED9t h\xE3ng xe \u0111\u1EC3 xem b\u1EA3ng so s\xE1nh</div></div>
        </div>
      </div>

      <!-- CTA MUA BH -->
      <div class="cta-brand" style="background:linear-gradient(135deg,\${b.color} 0%,\${b.color}bb 100%)">
        <div class="cta-block-copy">
          <div class="cta-block-title">Mua b\u1EA3o hi\u1EC3m \xF4 t\xF4 cho xe \${b.name} tr\xEAn MoMo</div>
          <div class="cta-block-desc">So s\xE1nh t\u1EEB 10+ nh\xE0 b\u1EA3o hi\u1EC3m \xB7 Ph\xEA duy\u1EC7t trong 5 ph\xFAt \xB7 B\u1ED3i th\u01B0\u1EDDng nhanh qua app</div>
        </div>
        <a class="cta-brand-btn" href="/bao-hiem-o-to">\${licon('Shield',16,2)} Xem g\xF3i BH ngay \u2192</a>
      </div>
    </div>\`;
  setTimeout(() => initGarageMap(b.garages, id), 0);
}

function renderNews(id) {
  const items = BRAND_NEWS[id] || [];
  if (!items.length) return '<p style="color:var(--gray-400);font-size:13px">Ch\u01B0a c\xF3 tin t\u1EE9c.</p>';
  const cards = items.map(n => \`<a class="news-card" href="\${n.href}">
    <div class="news-cat \${n.cat}">\${n.catLabel}</div>
    <div class="news-title">\${n.title}</div>
    <div class="news-meta">
      <span class="news-source">\${n.source}</span>
      <span class="news-date">\${n.date}</span>
      <span class="news-read">\u0110\u1ECDc th\xEAm \u2192</span>
    </div>
  </a>\`).join('');
  return \`<div class="news-row">\${cards}</div>\`;
}

function renderCostTiles(m, b) {
  const fuelLabel = b.fuels.includes('\u0111i\u1EC7n') ? '\u0110i\u1EC7n (1.200km/th\xE1ng)' : 'X\u0103ng (1.200km/th\xE1ng)';
  const regFree = b.fuels.includes('\u0111i\u1EC7n') && !b.fuels.includes('x\u0103ng');
  return \`
    <div class="cost-tile pink">
      <div class="cost-tile-label">D\u1EF1 ph\xF2ng xe</div>
      <div class="cost-tile-val">\${fmt(m.monthly.bh)}</div>
      <div class="cost-tile-unit">/th\xE1ng</div>
      <div class="cost-tile-note">kho\u1EA3n d\u1EF1 ph\xF2ng cho b\u1EA3o v\u1EC7 xe</div>
    </div>
    <div class="cost-tile\${regFree?' free':''}">
      <div class="cost-tile-label">\${fuelLabel}</div>
      <div class="cost-tile-val">\${m.monthly.fuel === 0 ? 'Mi\u1EC5n ph\xED' : fmt(m.monthly.fuel)}</div>
      <div class="cost-tile-unit">\${m.monthly.fuel > 0 ? '/th\xE1ng' : ''}</div>
      <div class="cost-tile-note">\${regFree&&m.monthly.fuel===0?'xe \u0111i\u1EC7n mi\u1EC5n ph\xED \u0111\u1EBFn 2027':'\u01B0\u1EDBc t\xEDnh 1.200km/th\xE1ng'}</div>
    </div>
    <div class="cost-tile\${regFree?' free':''}">
      <div class="cost-tile-label">Ph\xED \u0111\u01B0\u1EDDng b\u1ED9 & \u0111\u0103ng ki\u1EC3m</div>
      <div class="cost-tile-val">\${m.monthly.reg === 0 ? 'Mi\u1EC5n ph\xED' : fmt(m.monthly.reg)}</div>
      <div class="cost-tile-unit">\${m.monthly.reg > 0 ? '/th\xE1ng' : ''}</div>
      <div class="cost-tile-note">\${m.monthly.reg === 0 ? 'xe \u0111i\u1EC7n \u0111\u01B0\u1EE3c mi\u1EC5n \u0111\u1EBFn 2027' : 'ph\xE2n b\u1ED5 theo n\u0103m'}</div>
    </div>
    <div class="cost-tile">
      <div class="cost-tile-label">B\u1EA3o d\u01B0\u1EE1ng \u0111\u1ECBnh k\u1EF3</div>
      <div class="cost-tile-val">\${fmt(m.monthly.maint)}</div>
      <div class="cost-tile-unit">/th\xE1ng</div>
      <div class="cost-tile-note">\u01B0\u1EDBc t\xEDnh trung b\xECnh n\u0103m</div>
    </div>\`;
}

function renderCostTotal(m, b) {
  const total = m.monthly.bh + m.monthly.fuel + m.monthly.reg + m.monthly.maint;
  return \`
    <div class="cost-total-left">
      <div class="cost-total-label">T\u1ED5ng chi ph\xED \u01B0\u1EDBc t\xEDnh</div>
      <div class="cost-total-model">\${b.name} \${m.name} \xB7 1.200km/th\xE1ng</div>
    </div>
    <div style="text-align:right">
      <div class="cost-total-val">\${fmt(total)}</div>
      <div class="cost-total-unit">/th\xE1ng</div>
    </div>\`;
}

window.selectModel = function(i, id) {
  document.querySelectorAll('.model-card').forEach((c,j)=>c.classList.toggle('sel',j===i));
};

window.updateQuote = function(id) {
  const b = BRANDS[id];
  const mi = parseInt(document.getElementById('quote-model').value);
  const year = parseInt(document.getElementById('quote-year').value);
  const m = b.models[mi];
  const age = 2025 - year;
  const adj = Math.round(m.bh * Math.pow(0.92, Math.min(age,10)));
  document.getElementById('est-value').textContent = adj + 'tr/n\u0103m';
  document.getElementById('est-label').textContent = \`\u01AF\u1EDBc t\xEDnh \${b.name} \${m.name} (\${year})\`;
};

window.updateCost = function(id) {
  const b = BRANDS[id];
  const mi = parseInt(document.getElementById('cost-model').value);
  const m = b.models[mi];
  document.getElementById('cost-tiles').innerHTML = renderCostTiles(m, b);
  document.getElementById('cost-total-bar').innerHTML = renderCostTotal(m, b);
};

/* \u2500\u2500 TOAST \u2500\u2500 */
window.toast = function(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.style.opacity = '1'; t.style.transform = 'translateX(-50%) translateY(0)';
  setTimeout(()=>{t.style.opacity='0';t.style.transform='translateX(-50%) translateY(20px)'},2400);
};

/* \u2500\u2500 FIND MODEL BY SLUG \u2500\u2500 */
function findModelBySlug(slug) {
  for (const [brandId, b] of Object.entries(BRANDS)) {
    const m = b.models.find(m => m.slug === slug);
    if (m) return { brandId, brand: b, model: m, modelIndex: b.models.indexOf(m) };
  }
  return null;
}

/* \u2500\u2500 OWNERSHIP CALC \u2500\u2500 */
function ocLookup(type) {
  const inputId = type === 'plate' ? 'oc-phat-nguoi-input' : 'oc-dang-kiem-input';
  const resultId = type === 'plate' ? 'oc-plate-result' : 'oc-reg-result';
  const input = document.getElementById(inputId);
  const bienso = (input ? input.value : '').trim().replace(/[\\s.\\-]/g,'').toUpperCase();
  if (!bienso || bienso.length < 4) { input && input.focus(); return; }
  const el = document.getElementById(resultId);
  if (!el) return;
  // Demo data \u2014 reuse same mock as phat-nguoi
  const VIOLATIONS = {'29A12345':true,'30A99999':true,'51G12345':true};
  if (type === 'plate') {
    if (VIOLATIONS[bienso]) {
      el.className = 'lookup-result is-visible is-alert';
      el.innerHTML = '<strong>Ph\xE1t hi\u1EC7n vi ph\u1EA1m ch\u01B0a x\u1EED l\xFD</strong><p>Xem chi ti\u1EBFt v\xE0 n\u1ED9p ph\u1EA1t tr\u1EF1c ti\u1EBFp tr\xEAn MoMo.</p><a href="/phat-nguoi?bienso=' + encodeURIComponent(bienso) + '" style="display:inline-flex;align-items:center;gap:5px;margin-top:8px;font-size:12px;font-weight:700;color:#EB2F96;text-decoration:none">Xem chi ti\u1EBFt \u2192</a>';
    } else {
      el.className = 'lookup-result is-visible';
      el.innerHTML = '<strong>Kh\xF4ng c\xF3 vi ph\u1EA1m</strong><p>Bi\u1EC3n s\u1ED1 ' + bienso + ' ch\u01B0a ghi nh\u1EADn ph\u1EA1t ngu\u1ED9i. Ki\u1EC3m tra l\u1EA7n cu\u1ED1i: h\xF4m nay.</p>';
    }
  } else {
    el.className = 'lookup-result is-visible is-alert';
    el.innerHTML = '<strong>H\u1EA1n \u0111\u0103ng ki\u1EC3m: 15/09/2026</strong><p>C\xF2n 66 ng\xE0y. N\xEAn \u0111\u1EB7t l\u1ECBch tr\u01B0\u1EDBc 2 tu\u1EA7n \u0111\u1EC3 tr\xE1nh ch\u1EDD \u0111\u1EE3i.</p>';
  }
}

function buildOwnershipCalc(b, m, brandId, e10info) {
  const typeToFuelRate = {suv:9,mpv:10,sedan:7.5,ev:15,pickup:12,coupe:8};
  const isEV = m.type === 'ev' || (m.ownership && m.ownership.fuelType === '\u0111i\u1EC7n');
  const ow = m.ownership || {
    fuelRate: typeToFuelRate[m.type] || 8,
    fuelType: isEV ? '\u0111i\u1EC7n' : 'x\u0103ng',
    fuelPrice: isEV ? 3858 : 22850,
    insureAnnual: (m.monthly ? m.monthly.bh * 12 * 1000 : 7440000),
    maintPer5k: (m.monthly ? Math.round(m.monthly.maint * 12 / 24 * 5000 / 1500 * 1000) : 1200000),
    roadFeeAnnual: (m.monthly ? m.monthly.reg * 12 * 1000 : 1560000),
    inspectPeriod: 24,
    inspectCost: 340000,
  };
  window.__ow = ow;
  const defaultKm = 1500;
  const pct = Math.round((defaultKm - 500) / (3000 - 500) * 100);
  const fuelLabel = isEV ? 'Chi ph\xED s\u1EA1c \u0111i\u1EC7n' : 'Nhi\xEAn li\u1EC7u';
  const fuelLink = isEV ? '/tram-sac' : '/gia-xang';
  const fuelLinkText = isEV ? 'Xem gi\xE1 \u0111i\u1EC7n \u2192' : 'Gi\xE1 x\u0103ng \u2192';

  // E10 banner (x\u0103ng only, compact full-width strip)
  const e10 = e10info || {status:'na'};
  let e10Banner = '';
  if (e10.status === 'ok' || e10.status === 'no') {
    const ok = e10.status === 'ok';
    const bannerBg  = ok ? '#F0FDF4' : '#FEF2F2';
    const borderClr = ok ? '#86EFAC' : '#FCA5A5';
    const badgeBg   = ok ? '#DCFCE7' : '#FEE2E2';
    const clr       = ok ? '#15803D' : '#DC2626';
    const iconSvg = ok
      ? \`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="\${clr}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>\`
      : \`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="\${clr}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>\`;
    const badgeText = ok ? 'D\xF9ng \u0111\u01B0\u1EE3c x\u0103ng E10' : 'Kh\xF4ng d\xF9ng x\u0103ng E10';
    const detail = e10.detail || (ok ? 'Xe t\u01B0\u01A1ng th\xEDch x\u0103ng E10 (Ethanol 10%). Ti\u1EBFt ki\u1EC7m h\u01A1n RON 95-III kho\u1EA3ng 5-8%.' : 'H\xE3ng kh\xF4ng khuy\u1EBFn ngh\u1ECB x\u0103ng E10 cho xe n\xE0y. Ki\u1EC3m tra s\u1ED5 tay b\u1EA3o d\u01B0\u1EE1ng tr\u01B0\u1EDBc khi \u0111\u1ED5.');
    const saving = ok ? \` \xB7 ~50.000-80.000\u0111/th\xE1ng ti\u1EBFt ki\u1EC7m \u0111\u01B0\u1EE3c\` : '';
    e10Banner = \`<div class="oc-e10-banner" style="background:\${bannerBg};border-color:\${borderClr}">
      <div class="oc-e10-badge" style="background:\${badgeBg};color:\${clr}">\${iconSvg} \${badgeText}</div>
      <div class="oc-e10-body">
        <div class="oc-e10-title" style="color:\${clr}">\${detail}<span style="font-weight:800">\${saving}</span></div>
      </div>
    </div>\`;
  }

  // \u0110\u1ECBnh gi\xE1 card
  const pMin = m.priceFrom || (m.price ? m.price[0] : null);
  const pMax = m.priceTo || (m.price ? m.price[1] : null);
  const priceStr = pMin
    ? \`\${(pMin/1000).toLocaleString('vi-VN')} - \${(pMax/1000).toLocaleString('vi-VN')}\`
    : null;
  const valCard = \`<div class="oc-val-card">
    <div class="oc-val-eyebrow">Gi\xE1 th\u1ECB tr\u01B0\u1EDDng</div>
    \${priceStr
      ? \`<div class="oc-val-price">\${priceStr} <span class="oc-val-unit">tri\u1EC7u</span></div>
         <div class="oc-val-sub">Gi\xE1 m\u1EDBi ni\xEAm y\u1EBFt \xB7 xe c\u0169 ph\u1EE5 thu\u1ED9c n\u0103m SX, km, t\xECnh tr\u1EA1ng</div>\`
      : \`<div class="oc-val-price" style="font-size:16px">Tra c\u1EE9u \u0111\u1ECBnh gi\xE1</div>
         <div class="oc-val-sub">Nh\u1EADp th\xF4ng tin xe \u0111\u1EC3 \u01B0\u1EDBc t\xEDnh gi\xE1 th\u1ECB tr\u01B0\u1EDDng</div>\`}
    <a class="oc-val-cta-btn" href="/tien-ich-giao-thong/dinh-gia-xe?brand=\${brandId}&model=\${m.slug}">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
      \u0110\u1ECBnh gi\xE1 xe c\u0169
    </a>
  </div>\`;

  // Lookup card (combined) \u2014 d\xF9ng UI classes c\u1EE7a phat-nguoi.css
  const lookupCard = \`<div class="oc-lookup-card">
    <div class="oc-lookup-head">
      <div class="oc-lookup-head-title">Tra c\u1EE9u theo bi\u1EC3n s\u1ED1</div>
      <div class="oc-lookup-head-sub">Nh\u1EADp bi\u1EC3n s\u1ED1 \u2192 k\u1EBFt qu\u1EA3 t\u1EE9c th\xEC</div>
    </div>
    <div class="oc-lookup-item">
      <div class="oc-lookup-item-label">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        Ph\u1EA1t ngu\u1ED9i
      </div>
      <div class="hero-input-row" style="border-radius:10px">
        <input id="oc-phat-nguoi-input" placeholder="VD: 29A12345" maxlength="12" onkeydown="if(event.key==='Enter')ocLookup('plate')" autocomplete="off">
        <button class="hero-submit" style="font-size:13px;padding:0 14px;height:38px;margin:5px 5px 5px 0" onclick="ocLookup('plate')">Tra ngay</button>
      </div>
      <div class="lookup-result" id="oc-plate-result"></div>
    </div>
    <div class="oc-lookup-item">
      <div class="oc-lookup-item-label">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M14 8H9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-1"/></svg>
        H\u1EA1n \u0111\u0103ng ki\u1EC3m
      </div>
      <div class="hero-input-row" style="border-radius:10px">
        <input id="oc-dang-kiem-input" placeholder="VD: 29A12345" maxlength="12" onkeydown="if(event.key==='Enter')ocLookup('reg')" autocomplete="off">
        <button class="hero-submit" style="font-size:13px;padding:0 14px;height:38px;margin:5px 5px 5px 0" onclick="ocLookup('reg')">Tra ngay</button>
      </div>
      <div class="lookup-result" id="oc-reg-result"></div>
    </div>
  </div>\`;

  return \`<div class="oc-owner-stack">
    \${e10Banner}
    <div class="oc-tools-grid">\${valCard}\${lookupCard}</div>
    <div class="oc-calc-divider">Chi ph\xED \u01B0\u1EDBc t\xEDnh / th\xE1ng</div>
    <div class="oc-wrap">
    <div class="oc-km-section">
      <div class="oc-km-label">B\u1EA1n \u0111i bao nhi\xEAu km / th\xE1ng?</div>
      <div class="oc-km-row">
        <span class="oc-km-min">500 km</span>
        <input type="range" class="oc-slider" id="oc-km-slider" min="500" max="3000" step="100" value="\${defaultKm}" style="--pct:\${pct}%" oninput="calcOC(this.value,this)">
        <span class="oc-km-max">3.000 km</span>
        <div class="oc-km-val"><span id="oc-km-display">\${defaultKm.toLocaleString('vi-VN')}</span> <span>km/th</span></div>
      </div>
    </div>
    <div class="oc-rows">
      <div class="oc-row">
        <div class="oc-row-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 22V8l9-6 9 6v14"/><path d="M5 22V10.5"/><path d="M19 22V10.5"/><ellipse cx="12" cy="17" rx="3" ry="5"/></svg></div>
        <div class="oc-row-body">
          <div class="oc-row-label">\${fuelLabel}</div>
          <div class="oc-row-hint" id="oc-fuel-hint"></div>
        </div>
        <div class="oc-row-right">
          <div class="oc-row-amount" id="oc-fuel-val">\u2014</div>
          <a class="oc-row-link" href="\${fuelLink}">\${fuelLinkText}</a>
        </div>
      </div>
      <div class="oc-row">
        <div class="oc-row-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <div class="oc-row-body">
          <div class="oc-row-label">B\u1EA3o hi\u1EC3m (TNDS + v\u1EADt ch\u1EA5t)</div>
          <div class="oc-row-hint" id="oc-ins-hint"></div>
        </div>
        <div class="oc-row-right">
          <div class="oc-row-amount" id="oc-ins-val">\u2014</div>
          <a class="oc-row-link" href="/bao-hiem-o-to">Mua b\u1EA3o hi\u1EC3m \u2192</a>
        </div>
      </div>
      <div class="oc-row">
        <div class="oc-row-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg></div>
        <div class="oc-row-body">
          <div class="oc-row-label">B\u1EA3o d\u01B0\u1EE1ng \u0111\u1ECBnh k\u1EF3</div>
          <div class="oc-row-hint" id="oc-maint-hint"></div>
        </div>
        <div class="oc-row-right">
          <div class="oc-row-amount" id="oc-maint-val">\u2014</div>
          <a class="oc-row-link" href="/tien-ich-giao-thong/bao-duong">\u0110\u1EB7t l\u1ECBch \u2192</a>
        </div>
      </div>
      <div class="oc-row">
        <div class="oc-row-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M14 8H9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-1"/><line x1="12" y1="13" x2="12" y2="17"/><line x1="10" y1="15" x2="14" y2="15"/></svg></div>
        <div class="oc-row-body">
          <div class="oc-row-label">\u0110\u0103ng ki\u1EC3m + ph\xED \u0111\u01B0\u1EDDng b\u1ED9</div>
          <div class="oc-row-hint" id="oc-reg-hint"></div>
        </div>
        <div class="oc-row-right">
          <div class="oc-row-amount" id="oc-reg-val">\u2014</div>
          <a class="oc-row-link" href="/tien-ich-giao-thong/dang-kiem">Tra h\u1EA1n \u2192</a>
        </div>
      </div>
      <div class="oc-row oc-parking-row">
        <div class="oc-row-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 12h4a2 2 0 0 0 0-4h-4v8"/></svg></div>
        <div class="oc-row-body">
          <div class="oc-row-label">\u0110\u1ED7 xe / gi\u1EEF xe</div>
          <div class="oc-row-hint">Nh\u1EADp theo th\u1EF1c t\u1EBF (tu\u1EF3 khu v\u1EF1c)</div>
        </div>
        <div class="oc-row-right">
          <div class="oc-row-amount">
            <input type="number" class="oc-parking-input" id="oc-parking" placeholder="0" min="0" step="100" oninput="calcOC(document.getElementById('oc-km-slider').value,null)">
            <span class="oc-parking-unit">ngh\xECn \u0111/th</span>
          </div>
          <a class="oc-row-link" href="/tien-ich-giao-thong/bai-do-xe">T\xECm b\xE3i \u2192</a>
        </div>
      </div>
    </div>
    <div class="oc-total">
      <div class="oc-total-left">
        <div class="oc-total-label">T\u1ED4NG \u01AF\u1EDAC T\xCDNH / TH\xC1NG</div>
        <div class="oc-total-note">Ch\u01B0a t\xEDnh: r\u1EEDa xe, ph\xED c\u1EA7u \u0111\u01B0\u1EDDng l\u1EBB</div>
      </div>
      <div class="oc-total-right">
        <div class="oc-total-val" id="oc-total-val">\u2014</div>
        <div class="oc-total-unit">\u0111\u1ED3ng / th\xE1ng</div>
      </div>
    </div>
    <div class="oc-ctas">
      <a class="oc-cta" href="/tien-ich-giao-thong/gia-xang"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 22V8l9-6 9 6v14"/><ellipse cx="12" cy="17" rx="3" ry="5"/></svg> Gi\xE1 x\u0103ng h\xF4m nay</a>
      <a class="oc-cta" href="/bao-hiem-o-to"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Mua b\u1EA3o hi\u1EC3m \xF4 t\xF4</a>
      <a class="oc-cta" href="/tien-ich-giao-thong/bao-duong"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> \u0110\u1EB7t l\u1ECBch b\u1EA3o d\u01B0\u1EE1ng</a>
      <a class="oc-cta" href="/tien-ich-giao-thong/dang-kiem"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M14 8H9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-1"/></svg> \u0110\u1EB7t l\u1ECBch \u0111\u0103ng ki\u1EC3m</a>
      <a class="oc-cta" href="/tien-ich-giao-thong/bai-do-xe"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 12h4a2 2 0 0 0 0-4h-4v8"/></svg> T\xECm b\xE3i \u0111\u1ED7 xe</a>
    </div>
  </div>
  </div>\`;
}

function calcOC(km, sliderEl) {
  km = parseInt(km);
  const ow = window.__ow;
  if (!ow) return;

  if (sliderEl) {
    const pct = Math.round((km - 500) / (3000 - 500) * 100);
    sliderEl.style.setProperty('--pct', pct + '%');
  }
  document.getElementById('oc-km-display').textContent = km.toLocaleString('vi-VN');

  // Fuel
  const fuelCost = Math.round(km * ow.fuelRate / 100 * ow.fuelPrice);
  const fuelHint = ow.fuelType === '\u0111i\u1EC7n'
    ? \`\${km.toLocaleString('vi-VN')}km \xD7 \${ow.fuelRate}kWh/100km \xD7 \${ow.fuelPrice.toLocaleString('vi-VN')}\u0111/kWh\`
    : \`\${km.toLocaleString('vi-VN')}km \xD7 \${ow.fuelRate}L/100km \xD7 \${ow.fuelPrice.toLocaleString('vi-VN')}\u0111/L\`;

  // Insurance (fixed)
  const insCost = Math.round(ow.insureAnnual / 12);
  const insAnnualM = Math.round(ow.insureAnnual / 1000000 * 10) / 10;
  const insHint = \`\${insAnnualM} tri\u1EC7u/n\u0103m \xF7 12 th\xE1ng\`;

  // Maintenance (scales with km)
  const maintCost = Math.round(km * ow.maintPer5k / 5000);
  const maintPer5kM = Math.round(ow.maintPer5k / 1000);
  const maintHint = \`\${maintPer5kM.toLocaleString('vi-VN')}.000\u0111 / 5.000km, ph\xE2n b\u1ED5 theo qu\xE3ng \u0111\u01B0\u1EDDng th\u1EF1c t\u1EBF\`;

  // Reg + road fee (fixed)
  const inspectMonthly = Math.round(ow.inspectCost / ow.inspectPeriod);
  const roadMonthly = Math.round(ow.roadFeeAnnual / 12);
  const regCost = inspectMonthly + roadMonthly;
  const roadM = Math.round(ow.roadFeeAnnual / 1000000 * 10) / 10;
  const inspM = Math.round(ow.inspectCost / 1000);
  const regHint = \`Ph\xED \u0111\u01B0\u1EDDng b\u1ED9 \${roadM}tr/n\u0103m + \u0111\u0103ng ki\u1EC3m \${inspM}.000\u0111/\${ow.inspectPeriod} th\xE1ng\`;

  // Parking
  const parkingVal = parseFloat(document.getElementById('oc-parking').value) || 0;
  const parkingCost = parkingVal * 1000;

  const total = fuelCost + insCost + maintCost + regCost + parkingCost;
  const fmt = v => v.toLocaleString('vi-VN') + '\u0111';

  document.getElementById('oc-fuel-val').textContent = fmt(fuelCost);
  document.getElementById('oc-fuel-hint').textContent = fuelHint;
  document.getElementById('oc-ins-val').textContent = fmt(insCost);
  document.getElementById('oc-ins-hint').textContent = insHint;
  document.getElementById('oc-maint-val').textContent = fmt(maintCost);
  document.getElementById('oc-maint-hint').textContent = maintHint;
  document.getElementById('oc-reg-val').textContent = fmt(regCost);
  document.getElementById('oc-reg-hint').textContent = regHint;
  document.getElementById('oc-total-val').textContent = fmt(total);
}

/* \u2500\u2500 HANDBOOK TAB SWITCH \u2500\u2500 */
function switchHbTab(btn, panelId) {
  const section = btn.closest('.d-section');
  section.querySelectorAll('.hb-tab').forEach(t => t.classList.remove('active'));
  section.querySelectorAll('.hb-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  section.querySelector('#' + panelId).classList.add('active');
}

/* \u2500\u2500 RENDER MODEL DETAIL \u2500\u2500 */
function renderModelDetail(brandId, modelSlug) {
  const found = findModelBySlug(modelSlug);
  if (!found) { renderDetail(brandId); return; }
  const { brand: b, model: m, modelIndex: mi } = found;
  const id = found.brandId;

  document.getElementById('page-title').textContent = \`\${b.name} \${m.name} - Chi ph\xED s\u1EDF h\u1EEFu tr\xEAn MoMo\`;

  const bc = \`<div class="breadcrumb-bar"><div class="wrap"><div class="bc-inner">
    <a class="bc-link" href="/tien-ich-giao-thong">Ti\u1EC7n \xCDch Giao Th\xF4ng</a>
    <span class="bc-sep">\u203A</span>
    <a class="bc-link" href="/tien-ich-giao-thong/hang-xe">H\xE3ng xe</a>
    <span class="bc-sep">\u203A</span>
    <a class="bc-link" href="/tien-ich-giao-thong/hang-xe/\${id}">\${b.name}</a>
    <span class="bc-sep">\u203A</span>
    <span class="bc-current">\${m.name}</span>
  </div></div></div>\`;

  const typeLabel = modelTypeLabel(m);
  const mTotal = m.monthly ? m.monthly.bh + m.monthly.fuel + m.monthly.reg + m.monthly.maint : 0;
  const fuelLabel = m.type==='ev'?'\u0110i\u1EC7n':(m.type==='hybrid'?'X\u0103ng/\u0110i\u1EC7n':(m.variants&&m.variants[0].fuel)||'X\u0103ng');
  const _seatsM = m.desc&&m.desc.match(/(\\d+)\\s*ch\u1ED7/);
  const seatsLabel = m.variants?\`\${m.variants[0].seats} ch\u1ED7\`:(_seatsM?\`\${_seatsM[1]} ch\u1ED7\`:(m.type==='truck'?'2-5 ch\u1ED7':m.type==='mpv'?'7 ch\u1ED7':'5 ch\u1ED7'));

  // E10 compatibility (hero pills + utils section)
  const _isEV_e10 = m.type === 'ev' || (b.fuels.includes('\u0111i\u1EC7n') && b.fuels.length===1);
  const _fuel_e10 = _isEV_e10 ? '\u0111i\u1EC7n' : (m.variants && m.variants[0] && m.variants[0].fuel === 'D\u1EA7u' ? 'diesel' : 'x\u0103ng');
  const e10 = (function(model, fuelT, ev) {
    if (ev || fuelT === '\u0111i\u1EC7n') return {status:'na'};
    if (fuelT === 'diesel') return {status:'na'};
    if (model.e10 === false) return {status:'no', badge:'Kh\xF4ng t\u01B0\u01A1ng th\xEDch', color:'#DC2626', bg:'#FEF2F2', detail:'H\xE3ng kh\xF4ng khuy\u1EBFn ngh\u1ECB d\xF9ng E10. Ki\u1EC3m tra s\u1ED5 tay \u0111\u1EC3 ch\u1EAFc ch\u1EAFn.'};
    return {status:'ok', badge:'T\u01B0\u01A1ng th\xEDch E10', color:'#15803D', bg:'#F0FDF4', detail: model.e10Note || 'Xe t\u01B0\u01A1ng th\xEDch x\u0103ng E10 (Ethanol 10%). Ti\u1EBFt ki\u1EC7m h\u01A1n RON 95-III kho\u1EA3ng 5-8%.'};
  })(m, _fuel_e10, _isEV_e10);

  const hero = \`<div class="md-hero" style="--brand:\${b.color}">
    <div class="md-hero-ghost">\${m.name.toUpperCase()}</div>
    <div class="wrap">
      <div class="md-hero-inner">
        <div class="md-hero-meta">
          <div class="md-hero-brand">
            <div class="md-hero-brand-mark" style="background:\${b.color}">\${b.name.slice(0,2).toUpperCase()}</div>
            \${b.name} \xB7 \${b.origin}
          </div>
          <h1 class="md-hero-title">\${m.name}</h1>
          <p class="md-hero-desc">\${m.desc}</p>
          <div class="md-hero-pills">
            <span class="md-pill">\${typeLabel}</span>
            <span class="md-pill">\${seatsLabel}</span>
            <span class="md-pill">\${fuelLabel}</span>
            \${e10.status==='ok'?'<span class="md-pill" style="background:rgba(34,197,94,.18);color:#4ADE80;border-color:rgba(34,197,94,.3)">E10 \u2713</span>':''}
            \${e10.status==='no'?'<span class="md-pill" style="background:rgba(239,68,68,.18);color:#FCA5A5;border-color:rgba(239,68,68,.3)">Kh\xF4ng d\xF9ng E10</span>':''}
          </div>
        </div>
        <div class="md-hero-img">
          \${carSVG(m.type||'suv', '#FFFFFF')}
          <div class="md-hero-road"></div>
        </div>
      </div>
      <div class="md-hero-stats">
        \${m.variants?\`<div class="md-stat"><div class="md-stat-label">Gi\xE1 ni\xEAm y\u1EBFt</div><div class="md-stat-val">\${fmtPrice(m.variants[0].price)}\u2013\${fmtPrice(m.variants[m.variants.length-1].price)} <span>tri\u1EC7u</span></div></div>\`:\`<div class="md-stat"><div class="md-stat-label">Lo\u1EA1i xe</div><div class="md-stat-val" style="font-size:17px;letter-spacing:0">\${typeLabel}</div></div>\`}
        \${mTotal?\`<div class="md-stat"><div class="md-stat-label">Th\u1EF1c chi / th\xE1ng</div><div class="md-stat-val">~\${(mTotal/1000).toFixed(1).replace('.',',')}tr <span>\u0111\u1ED3ng</span></div></div>\`:''}
        \${m.monthly?\`<div class="md-stat"><div class="md-stat-label">B\u1EA3o hi\u1EC3m / th\xE1ng</div><div class="md-stat-val">~\${(m.monthly.bh/1000).toFixed(1).replace('.',',')}tr <span>\u0111\u1ED3ng</span></div></div>\`:''}
        <div class="md-stat"><div class="md-stat-label">Nhi\xEAn li\u1EC7u</div><div class="md-stat-val" style="font-size:17px;letter-spacing:0">\${fuelLabel}</div></div>
      </div>
      </div>
    </div>
  <div class="md-subnav"><div class="md-subnav-inner">
    <a class="md-subnav-link" href="#md-cost">Chi ph\xED</a>
    \${m.valuation?'<a class="md-subnav-link" href="#md-valuation">\u0110\u1ECBnh gi\xE1</a>':''}
    \${m.inspectionSchedule||m.serviceIntervals?'<a class="md-subnav-link" href="#md-schedule">B\u1EA3o d\u01B0\u1EE1ng</a>':''}
    \${(m.commonIssues&&m.commonIssues.length)||(m.spareParts&&m.spareParts.length)?'<a class="md-subnav-link" href="#md-issues">Handbook</a>':''}
    <a class="md-subnav-link" href="#md-garage">Garage</a>
    <a class="md-subnav-link" href="#md-utils">Ti\u1EC7n \xEDch</a>
    \${m.variants?'<a class="md-subnav-link" href="#variants">Phi\xEAn b\u1EA3n</a>':''}
    \${m.competitors?'<a class="md-subnav-link" href="#compare">So s\xE1nh</a>':''}
    <a class="md-subnav-link" href="#md-notes">Ghi ch\xFA</a>
  </div></div>\`;

  // Variants
  let variantSection = '';
  if (m.variants) {
    const vCards = m.variants.map((v, i) => \`
      <div class="variant-card\${i===0?' sel':''}" onclick="selectVariant(\${i})">
        <div class="variant-name">\${v.name}</div>
        <div class="variant-price">\${fmtPrice(v.price)} <span>tri\u1EC7u</span></div>
        <div class="variant-specs">
          <div class="variant-spec"><strong>\u0110\u1ED9ng c\u01A1</strong> \${v.engine}</div>
          <div class="variant-spec"><strong>Nhi\xEAn li\u1EC7u</strong> \${v.fuel}</div>
          <div class="variant-spec"><strong>D\u1EABn \u0111\u1ED9ng</strong> \${v.drive}</div>
        </div>
      </div>\`).join('');
    variantSection = \`
      <div class="d-section" id="variants">
        <div class="d-section-head">
          <div class="eyebrow">Phi\xEAn b\u1EA3n</div>
          <div class="section-h">\${b.name} \${m.name} c\xF3 \${m.variants.length} phi\xEAn b\u1EA3n</div>
          <div class="section-sub">Gi\xE1 ni\xEAm y\u1EBFt \xB7 Ch\u1ECDn phi\xEAn b\u1EA3n \u0111\u1EC3 xem chi ti\u1EBFt</div>
        </div>
        <div class="variant-grid">\${vCards}</div>
      </div>\`;
  }

  // Cost section \u2014 ownership calc + static insight
  const costSection = \`
    <div class="d-section" id="md-cost">
      <div class="d-section-head">
        <div class="eyebrow">Ch\u1EE7 xe</div>
        <div class="section-h">Th\xF4ng tin h\u1EEFu \xEDch cho ch\u1EE7 \${b.name} \${m.name}</div>
        <div class="section-sub">Nhi\xEAn li\u1EC7u \xB7 \u0111\u1ECBnh gi\xE1 \xB7 tra c\u1EE9u \xB7 chi ph\xED \u01B0\u1EDBc t\xEDnh</div>
      </div>
      \${buildOwnershipCalc(b, m, id, e10)}
      <div style="margin-top:20px">\${renderModelInsight(b, m, id)}</div>
    </div>\`;

  // Valuation \u2014 used car price estimate
  let valuationSection = '';
  if (m.valuation) {
    const years = Object.keys(m.valuation.retention).map(Number).sort((a,b)=>b-a).filter(y=>y<2026);
    valuationSection = \`
    <div class="d-section" id="md-valuation">
      <div class="d-section-head">
        <div class="eyebrow">\u0110\u1ECBnh gi\xE1 xe c\u0169</div>
        <div class="section-h">\${b.name} \${m.name} c\u0169 c\xF2n \u0111\xE1ng gi\xE1 bao nhi\xEAu?</div>
        <div class="section-sub">\u01AF\u1EDBc t\xEDnh theo n\u0103m s\u1EA3n xu\u1EA5t v\xE0 s\u1ED1 km \u0111\xE3 \u0111i \xB7 d\u1EEF li\u1EC7u th\u1ECB tr\u01B0\u1EDDng xe c\u0169 Vi\u1EC7t Nam</div>
      </div>
      <div class="val-panel">
        <div class="val-controls">
          <div class="val-field">
            <label class="val-label">N\u0103m s\u1EA3n xu\u1EA5t</label>
            <select class="val-select" id="val-year" onchange="calcVal('\${id}','\${m.slug}')">
              \${years.map(y=>\`<option value="\${y}">\${y}</option>\`).join('')}
            </select>
          </div>
          <div class="val-field">
            <label class="val-label">S\u1ED1 km \u0111\xE3 \u0111i</label>
            <div class="val-km-pills" id="val-km">
              <button class="val-pill" data-f="1.03" onclick="valKm(this,'\${id}','\${m.slug}')">&lt; 30.000</button>
              <button class="val-pill on" data-f="1" onclick="valKm(this,'\${id}','\${m.slug}')">30 - 60k</button>
              <button class="val-pill" data-f="0.96" onclick="valKm(this,'\${id}','\${m.slug}')">60 - 100k</button>
              <button class="val-pill" data-f="0.91" onclick="valKm(this,'\${id}','\${m.slug}')">&gt; 100.000</button>
            </div>
          </div>
        </div>
        <div class="val-result">
          <div class="val-result-label">Gi\xE1 th\u1ECB tr\u01B0\u1EDDng \u01B0\u1EDBc t\xEDnh</div>
          <div class="val-result-price" id="val-price"></div>
          <div class="val-result-sub" id="val-sub"></div>
          <div class="val-retention" id="val-retention"></div>
        </div>
      </div>
      <div class="val-chart-wrap">
        <div class="val-chart-title">\u0110\u01B0\u1EDDng cong kh\u1EA5u hao \${m.name} \xB7 gi\xE1 ni\xEAm y\u1EBFt trung b\xECnh \${fmtPrice(m.valuation.base)} tri\u1EC7u (m\u1EDBi)</div>
        <div class="val-chart" id="val-chart"></div>
      </div>
      <div class="val-cta-row">
        <a class="val-cta" href="/bao-hiem-o-to">
          <span class="val-cta-icon">\${licon('ShieldCheck',18,2)}</span>
          <span class="val-cta-body"><strong>B\u1EA3o hi\u1EC3m th\xE2n v\u1ECF theo gi\xE1 tr\u1ECB xe</strong><span id="val-ins-hint"></span></span>
          <span class="val-cta-arrow">\${licon('ArrowRight',15,2.2)}</span>
        </a>
        <a class="val-cta ghost" href="/tien-ich-giao-thong/dinh-gia-xe?model=\${m.slug}&brand=\${id}">
          <span class="val-cta-icon">\${licon('Calculator',18,2)}</span>
          <span class="val-cta-body"><strong>\u0110\u1ECBnh gi\xE1 nhanh \${b.name} \${m.name}</strong><span>\u0110i\u1EC1u ch\u1EC9nh n\u0103m SX, km, t\xECnh tr\u1EA1ng \xB7 k\u1EBFt qu\u1EA3 t\u1EE9c th\xEC</span></span>
          <span class="val-cta-arrow">\${licon('ArrowRight',15,2.2)}</span>
        </a>
      </div>
      <a href="/tien-ich-giao-thong/dinh-gia-xe" style="display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--gray-400);margin-top:12px;text-decoration:none" onmouseover="this.style.color='var(--pink)'" onmouseout="this.style.color='var(--gray-400)'">
        \${licon('Info',13,2)} T\xECm hi\u1EC3u ph\u01B0\u01A1ng ph\xE1p \u0111\u1ECBnh gi\xE1 c\u1EE7a MoMo
      </a>
    </div>\`;
  }

  // Comparison
  let compareSection = '';
  if (m.competitors && m.competitors.length) {
    const compModels = [{ brandId: id, brand: b, model: m }];
    m.competitors.forEach(slug => {
      const f = findModelBySlug(slug);
      if (f) compModels.push(f);
    });

    const maxMonthly = Math.max(...compModels.map(c => {
      const mt = c.model.monthly;
      return mt.bh + mt.fuel + mt.reg + mt.maint;
    }));

    const rows = compModels.map((c, i) => {
      const mt = c.model.monthly;
      const total = mt.bh + mt.fuel + mt.reg + mt.maint;
      const pct = Math.round((total / maxMonthly) * 100);
      const isThis = i === 0;
      return \`<tr\${isThis?' class="compare-highlight"':''}>
        <td>
          <div class="compare-model">\${c.model.name}</div>
          <div class="compare-brand">\${c.brand.name}</div>
        </td>
        <td class="compare-val">\${fmtPrice(c.model.variants?c.model.variants[0].price:0)}</td>
        <td class="compare-val">\${fmt(mt.fuel)}</td>
        <td class="compare-val">\${fmt(mt.maint)}</td>
        <td>
          <div class="compare-val">\${fmt(total)}</div>
          <div class="compare-bar"><div class="compare-bar-fill" style="width:\${pct}%;background:\${isThis?'var(--mobase-blue)':'var(--gray-400)'}"></div></div>
        </td>
      </tr>\`;
    }).join('');

    compareSection = \`
      <div class="d-section" id="compare">
        <div class="d-section-head">
          <div class="eyebrow">So s\xE1nh</div>
          <div class="section-h">Chi ph\xED s\u1EDF h\u1EEFu: \${m.name} vs \u0111\u1ED1i th\u1EE7</div>
          <div class="section-sub">So s\xE1nh chi ph\xED v\u1EADn h\xE0nh th\u1EF1c t\u1EBF h\xE0ng th\xE1ng \xB7 c\xF9ng ph\xE2n kh\xFAc SUV 7 ch\u1ED7</div>
        </div>
        <div style="overflow-x:auto">
          <table class="compare-table">
            <thead><tr>
              <th>D\xF2ng xe</th>
              <th>Gi\xE1 t\u1EEB</th>
              <th>Nhi\xEAn li\u1EC7u/th\xE1ng</th>
              <th>B\u1EA3o d\u01B0\u1EE1ng/th\xE1ng</th>
              <th>T\u1ED5ng/th\xE1ng</th>
            </tr></thead>
            <tbody>\${rows}</tbody>
          </table>
        </div>
      </div>\`;
  }

  // Inspection & maintenance schedule
  let scheduleSection = '';
  if (m.inspectionSchedule || m.serviceIntervals) {
    const inspRows = (m.inspectionSchedule||[]).map(r => \`
      <tr><td class="sch-age">\${r.age}</td><td class="sch-interval">\${r.interval}</td><td>\${r.note}</td></tr>\`).join('');
    const svcCards = (m.serviceIntervals||[]).map(s => \`
      <div class="svc-interval-card">
        <div class="svc-interval-km">\${s.km}</div>
        <div class="svc-interval-task">\${s.task}</div>
        <div class="svc-interval-cost">~\${s.cost} tri\u1EC7u</div>
      </div>\`).join('');
    scheduleSection = \`
      <div class="d-section" id="md-schedule">
        <div class="d-section-head">
          <div class="eyebrow">L\u1ECBch b\u1EA3o d\u01B0\u1EE1ng</div>
          <div class="section-h">\u0110\u0103ng ki\u1EC3m & b\u1EA3o d\u01B0\u1EE1ng \${b.name} \${m.name}</div>
          <div class="section-sub">Theo quy \u0111\u1ECBnh B\u1ED9 GTVT v\xE0 khuy\u1EBFn ngh\u1ECB h\xE3ng</div>
        </div>
        \${inspRows ? \`<table class="schedule-table"><thead><tr><th>Tu\u1ED5i xe</th><th>Chu k\u1EF3</th><th>Ghi ch\xFA</th></tr></thead><tbody>\${inspRows}</tbody></table>\` : ''}
        \${svcCards ? \`<div style="margin-top:20px"><div style="font-size:13px;font-weight:800;color:var(--gray-900);margin-bottom:12px">M\u1ED1c b\u1EA3o d\u01B0\u1EE1ng theo km</div><div class="svc-interval-grid">\${svcCards}</div></div>\` : ''}
      </div>\`;
  }

  // Handbook (issues + spare parts)
  let issuesSection = '';
  const hasIssues = m.commonIssues && m.commonIssues.length;
  const hasParts = m.spareParts && m.spareParts.length;
  if (hasIssues || hasParts) {
    const sevLabel = {high:'Nghi\xEAm tr\u1ECDng',medium:'Trung b\xECnh',low:'Nh\u1EB9'};
    let issuesHtml = '';
    if (hasIssues) {
      issuesHtml = m.commonIssues.map(issue => \`
        <div class="issue-card">
          <div class="issue-card-top">
            <div class="issue-title">\${issue.title}</div>
            <div class="issue-severity \${issue.severity}">\${sevLabel[issue.severity]||issue.severity}</div>
          </div>
          <div class="issue-km">Th\u01B0\u1EDDng g\u1EB7p: \${issue.km}</div>
          <div class="issue-desc">\${issue.desc}</div>
          <div class="issue-footer">
            <span class="issue-cost-label">Chi ph\xED x\u1EED l\xFD</span>
            <span class="issue-cost-val">\${issue.cost}</span>
          </div>
        </div>\`).join('');
    }
    let partsHtml = '';
    if (hasParts) {
      const rows = m.spareParts.map(p => \`
        <tr>
          <td><div class="parts-name">\${p.name}</div>\${p.note?\`<div class="parts-note">\${p.note}</div>\`:''}</td>
          <td><span class="parts-interval">\${p.interval}</span></td>
          <td><span class="parts-cost">\${p.cost}</span></td>
        </tr>\`).join('');
      partsHtml = \`
        <table class="parts-table">
          <thead>
            <tr>
              <th>Linh ki\u1EC7n</th>
              <th>Chu k\u1EF3 thay</th>
              <th>Chi ph\xED</th>
            </tr>
          </thead>
          <tbody>\${rows}</tbody>
        </table>\`;
    }
    const tabs = (hasIssues && hasParts) ? \`
      <div class="hb-tabs">
        <button class="hb-tab active" onclick="switchHbTab(this,'hb-issues-\${m.id||'x'}')">L\u1ED7i hay g\u1EB7p <span style="font-size:10px;font-weight:600;background:var(--gray-100);color:var(--gray-500);border-radius:4px;padding:1px 5px;margin-left:4px">\${m.commonIssues.length}</span></button>
        <button class="hb-tab" onclick="switchHbTab(this,'hb-parts-\${m.id||'x'}')">Linh ki\u1EC7n hay thay <span style="font-size:10px;font-weight:600;background:var(--gray-100);color:var(--gray-500);border-radius:4px;padding:1px 5px;margin-left:4px">\${m.spareParts.length}</span></button>
      </div>\` : '';
    issuesSection = \`
      <div class="d-section" id="md-issues">
        <div class="d-section-head">
          <div class="eyebrow">Handbook ch\u1EE7 xe</div>
          <div class="section-h">\${b.name} \${m.name} \u2014 C\u1EA9m nang v\u1EADn h\xE0nh</div>
          <div class="section-sub">T\u1ED5ng h\u1EE3p t\u1EEB d\u1EEF li\u1EC7u s\u1EEDa ch\u1EEFa v\xE0 b\u1EA3o d\u01B0\u1EE1ng th\u1EF1c t\u1EBF</div>
        </div>
        \${tabs}
        \${hasIssues ? \`<div class="hb-panel active" id="hb-issues-\${m.id||'x'}">\${issuesHtml}</div>\` : ''}
        \${hasParts ? \`<div class="hb-panel\${!hasIssues?' active':''}" id="hb-parts-\${m.id||'x'}">\${partsHtml}</div>\` : ''}
      </div>\`;
  }

  // Garage (reuse from brand)
  const garageSection = \`
    <div class="d-section" id="md-garage">
      <div class="d-section-head">
        <div class="eyebrow">Garage</div>
        <div class="section-h">Garage t\u1ED1t cho \${b.name} \${m.name}</div>
        <div class="section-sub">X\u1EBFp h\u1EA1ng theo s\u1ED1 l\u01B0\u1EE3ng x\u1EED l\xFD qua MoMo</div>
      </div>
      \${renderGarages(b, id)}
    </div>\`;

  // Notes (model-specific if available, else brand)
  const notes = m.modelNotes || b.notes;
  const noteHtml = notes.map(n => \`
    <div class="brand-note">
      <div class="brand-note-q">\${n.q}</div>
      <div class="brand-note-a">\${n.a}</div>
    </div>\`).join('');

  const noteSection = \`
    <div class="d-section" id="md-notes">
      <div class="d-section-head">
        <div class="eyebrow">Ghi ch\xFA</div>
        <div class="section-h">\u0110i\u1EC1u c\u1EA7n bi\u1EBFt v\u1EC1 \${b.name} \${m.name}</div>
      </div>
      \${noteHtml}
    </div>\`;

  // Utilities inline
  const isEV = _isEV_e10;
  const fuelType = _fuel_e10;
  const utilSection = \`
    <div class="d-section" id="md-utils">
      <div class="d-section-head">
        <div class="eyebrow">Ti\u1EC7n \xEDch</div>
        <div class="section-h">Tra c\u1EE9u nhanh cho \${b.name} \${m.name}</div>
      </div>
      <div class="util-grid">
        <div class="util-card">
          <div class="util-icon">\${licon('ClipboardList',22,2)}</div>
          <div class="util-label">Tra c\u1EE9u ph\u1EA1t ngu\u1ED9i</div>
          <div class="util-hint">Nh\u1EADp bi\u1EC3n s\u1ED1 xe \u0111\u1EC3 ki\u1EC3m tra vi ph\u1EA1m</div>
          <div class="util-input-row">
            <input class="util-input" id="util-plate" placeholder="VD: 30A-123.45" maxlength="12">
            <button class="util-btn util-btn-primary" onclick="demoLookup('plate')">Tra c\u1EE9u</button>
          </div>
          <div class="util-result" id="util-plate-result"></div>
        </div>
        <div class="util-card">
          <div class="util-icon">\${licon('Search',22,2)}</div>
          <div class="util-label">Tra c\u1EE9u \u0111\u0103ng ki\u1EC3m</div>
          <div class="util-hint">Ki\u1EC3m tra h\u1EA1n \u0111\u0103ng ki\u1EC3m theo bi\u1EC3n s\u1ED1</div>
          <div class="util-input-row">
            <input class="util-input" id="util-reg" placeholder="VD: 30A-123.45" maxlength="12">
            <button class="util-btn util-btn-primary" onclick="demoLookup('reg')">Tra c\u1EE9u</button>
          </div>
          <div class="util-result" id="util-reg-result"></div>
        </div>
        <div class="util-card">
          <div class="util-icon">\${licon(isEV ? 'Zap' : 'Fuel',22,2)}</div>
          <div class="util-label">\${isEV ? 'Gi\xE1 s\u1EA1c \u0111i\u1EC7n h\xF4m nay' : 'Gi\xE1 x\u0103ng d\u1EA7u h\xF4m nay'}</div>
          <div class="util-hint">\${isEV ? 'Gi\xE1 s\u1EA1c t\u1EA1i c\xE1c tr\u1EA1m ph\u1ED5 bi\u1EBFn' : \`\${fuelType === 'diesel' ? 'DO 0.05S - nhi\xEAn li\u1EC7u Santa Fe' : 'RON 95-III, E5 RON 92'}\`}</div>
          \${isEV ? \`
            <div class="util-fuel-row" style="margin-top:4px">
              <div class="util-fuel-item">VinFast: <span class="util-fuel-price">3.858\u0111/kWh</span></div>
              <div class="util-fuel-item">EverCharge: <span class="util-fuel-price">4.200\u0111/kWh</span></div>
            </div>
          \` : \`
            <div class="util-fuel-row" style="margin-top:4px">
              \${fuelType === 'diesel' ? \`
                <div class="util-fuel-item">DO 0.05S: <span class="util-fuel-price">18.536\u0111</span> <span class="util-fuel-delta down">\u25BC318</span></div>
                <div class="util-fuel-item">E5 RON 92: <span class="util-fuel-price">22.380\u0111</span> <span class="util-fuel-delta down">\u25B21.300</span></div>
              \` : \`
                <div class="util-fuel-item">RON 95-III: <span class="util-fuel-price">22.850\u0111</span> <span class="util-fuel-delta down">\u25B21.420</span></div>
                <div class="util-fuel-item">E5 RON 92: <span class="util-fuel-price">22.380\u0111</span> <span class="util-fuel-delta down">\u25B21.300</span></div>
              \`}
            </div>
          \`}
          \${fuelType === 'x\u0103ng' ? \`
          <div style="margin:10px 0 4px;padding:10px 12px;background:\${e10.bg};border-radius:10px;display:flex;align-items:flex-start;gap:10px">
            <span style="font-size:15px;margin-top:1px">\${e10.status==='ok'?'\u2705':e10.status==='no'?'\u274C':'\u2796'}</span>
            <div style="flex:1;min-width:0">
              <div style="font-size:12px;font-weight:700;color:\${e10.color};margin-bottom:3px">\${e10.badge}</div>
              <div style="font-size:11.5px;color:var(--gray-600);line-height:1.5">\${e10.detail}</div>
            </div>
          </div>\` : ''}
          <div class="util-quick">
            <button class="util-quick-btn" onclick="demoLookup('fuel')">T\xECm \${isEV ? 'tr\u1EA1m s\u1EA1c' : 'c\xE2y x\u0103ng'} g\u1EA7n nh\u1EA5t</button>
          </div>
          <div class="util-result" id="util-fuel-result"></div>
        </div>
        <div class="util-card">
          <div class="util-icon">\${licon('SquareParking',22,2)}</div>
          <div class="util-label">B\xE3i \u0111\u1ED7 xe g\u1EA7n \u0111\xE2y</div>
          <div class="util-hint">T\xECm b\xE3i \u0111\u1ED7 c\xF3 ch\u1ED7 tr\u1ED1ng g\u1EA7n b\u1EA1n</div>
          <div class="util-quick">
            <button class="util-quick-btn" onclick="demoLookup('park','q1')">Qu\u1EADn 1</button>
            <button class="util-quick-btn" onclick="demoLookup('park','q3')">Qu\u1EADn 3</button>
            <button class="util-quick-btn" onclick="demoLookup('park','q7')">Qu\u1EADn 7</button>
            <button class="util-quick-btn" onclick="demoLookup('park','td')">Th\u1EE7 \u0110\u1EE9c</button>
            <button class="util-quick-btn" onclick="demoLookup('park','hn')">Ho\xE0n Ki\u1EBFm</button>
          </div>
          <div class="util-result" id="util-park-result"></div>
        </div>
      </div>
      \${m.slug ? \`
      <a href="/tien-ich-giao-thong/bao-duong" class="bd-cta-banner">
        <div class="bd-cta-icon">\${licon('Wrench',20,2)}</div>
        <div class="bd-cta-text">
          <div class="bd-cta-title">L\u1ECBch b\u1EA3o d\u01B0\u1EE1ng \${b.name} \${m.name}</div>
          <div class="bd-cta-sub">Chu k\u1EF3 thay d\u1EA7u, bugi, l\u1ECDc gi\xF3 \xB7 Chi ph\xED \u01B0\u1EDBc t\xEDnh t\u1EA1i Vi\u1EC7t Nam</div>
        </div>
        <div class="bd-cta-arrow">\${licon('ChevronRight',18,2.5)}</div>
      </a>\` : ''}
    </div>\`;

  // Other models from same brand
  const otherModels = b.models.filter(om => om !== m);
  let otherModelsSection = '';
  if (otherModels.length) {
    const cards = otherModels.map(om => {
      const imgBg = \`linear-gradient(160deg,\${b.color}14 0%,\${b.color}06 100%)\`;
      const tag = om.slug ? 'a' : 'div';
      const linkAttr = om.slug ? \`href="/tien-ich-giao-thong/hang-xe/\${brandId}/\${om.slug}"\` : '';
      return \`<\${tag} class="model-card" \${linkAttr} style="cursor:\${om.slug?'pointer':'default'}">
        <div class="model-img" style="background:\${imgBg}">\${carSVG(om.type||'suv', b.color)}</div>
        <div class="model-info">
          <div class="model-name">\${om.name}</div>
          <div class="model-meta">
            <span class="model-badge">\${modelTypeLabel(om)}</span>
            \${om.slug ? '<span class="model-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>' : ''}
          </div>
        </div>
      </\${tag}>\`;
    }).join('');
    otherModelsSection = \`
      <div class="d-section" id="md-others">
        <div class="d-section-head">
          <div class="eyebrow">C\xF9ng h\xE3ng</div>
          <div class="section-h">D\xF2ng xe kh\xE1c c\u1EE7a \${b.name}</div>
        </div>
        <div class="model-grid">\${cards}</div>
      </div>\`;
  }

  const stickyBar = \`<div class="sticky-bh-bar" style="background:linear-gradient(90deg,\${b.color} 0%,\${b.color}cc 100%)">
    <div class="sticky-bh-copy">
      <strong>Mua BH cho \${b.name} \${m.name}</strong>
      <span>So s\xE1nh 10+ nh\xE0 BH \xB7 Ph\xEA duy\u1EC7t 5 ph\xFAt</span>
    </div>
    <a class="sticky-bh-btn" href="/bao-hiem-o-to" style="color:\${b.color}">\${licon('Shield',14,2)} Xem ngay</a>
  </div>\`;

  document.getElementById('app').innerHTML = bc + hero + \`
    <div class="wrap detail-body">
      \${costSection}
      \${valuationSection}
      \${scheduleSection}
      \${issuesSection}
      \${garageSection}
      \${utilSection}
      \${variantSection}
      \${compareSection}
      \${noteSection}
      \${otherModelsSection}
    </div>\` + stickyBar;
  initModelDetailMotion();
  setTimeout(() => initGarageMap(b.garages, id), 0);
  // Init ownership calc with default km
  setTimeout(() => calcOC(1500, document.getElementById('oc-km-slider')), 0);
  if (m.valuation) setTimeout(() => calcVal(id, m.slug), 0);
}

/* \u2500\u2500 VALUATION \u2500\u2500 */
function valKm(btn, brandId, slug) {
  document.querySelectorAll('#val-km .val-pill').forEach(p => p.classList.remove('on'));
  btn.classList.add('on');
  calcVal(brandId, slug);
}

function calcVal(brandId, slug) {
  const found = findModelBySlug(slug);
  if (!found || !found.model.valuation) return;
  const v = found.model.valuation;
  const year = parseInt(document.getElementById('val-year').value, 10);
  const kmF  = parseFloat(document.querySelector('#val-km .val-pill.on').dataset.f);
  const ret  = (v.retention[year] || 50) / 100;
  const mid  = v.base * ret * kmF;
  const lo   = Math.round(mid * 0.96), hi = Math.round(mid * 1.04);
  const age  = 2026 - year;

  document.getElementById('val-price').innerHTML = \`\${fmtPrice(lo)} - \${fmtPrice(hi)} <span>tri\u1EC7u</span>\`;
  document.getElementById('val-sub').textContent = \`\${found.model.name} \${year} \xB7 \${age} n\u0103m tu\u1ED5i \xB7 c\xF2n \${Math.round(ret*kmF*100)}% gi\xE1 ni\xEAm y\u1EBFt\`;

  const seg = v.segAvgRetention3y;
  const own3 = v.retention[2023] || 0;
  document.getElementById('val-retention').innerHTML = own3 > seg
    ? \`\${licon('TrendingUp',13,2.2)} Gi\u1EEF gi\xE1 t\u1ED1t h\u01A1n trung b\xECnh ph\xE2n kh\xFAc SUV 7 ch\u1ED7 (\${own3}% so v\u1EDBi \${seg}% sau 3 n\u0103m)\`
    : \`\${licon('TrendingDown',13,2.2)} Gi\u1EEF gi\xE1 \${own3}% sau 3 n\u0103m \xB7 trung b\xECnh ph\xE2n kh\xFAc \${seg}%\`;

  // Depreciation chart
  const years = Object.keys(v.retention).map(Number).sort((a,b)=>b-a);
  document.getElementById('val-chart').innerHTML = years.map(y => {
    const val = Math.round(v.base * v.retention[y] / 100);
    return \`<div class="val-bar-col\${y===year?' sel':''}" onclick="document.getElementById('val-year').value='\${y<2026?y:years[1]}';calcVal('\${brandId}','\${slug}')">
      <div class="val-bar-val">\${fmtPrice(val)}</div>
      <div class="val-bar" style="height:\${v.retention[y]}%"></div>
      <div class="val-bar-year">\${y===2026?'M\u1EDBi':y}</div>
    </div>\`;
  }).join('');

  // Insurance hint: th\xE2n v\u1ECF ~1.5%/n\u0103m gi\xE1 tr\u1ECB xe
  const insFee = Math.round(mid * 0.015 * 10) / 10;
  document.getElementById('val-ins-hint').textContent = \`Ph\xED tham kh\u1EA3o ~\${fmtPrice(Math.round(insFee))} tri\u1EC7u/n\u0103m cho xe gi\xE1 tr\u1ECB \${fmtPrice(Math.round(mid))} tri\u1EC7u\`;
}

function initModelDetailMotion() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sections = Array.from(document.querySelectorAll('.detail-body .d-section'));

  // scroll reveal
  if (!reduced && 'IntersectionObserver' in window) {
    sections.forEach(s => s.classList.add('rv'));
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    sections.forEach(s => io.observe(s));

    // bars grow when their container appears
    const barIo = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll('.insight-bar-fill,.compare-bar-fill').forEach(f => {
          const w = f.style.width;
          f.style.transition = 'none'; f.style.width = '0';
          requestAnimationFrame(() => { f.style.transition = 'width .8s cubic-bezier(.2,.8,.2,1)'; f.style.width = w; });
        });
        barIo.unobserve(e.target);
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('.insight-panel,.compare-table').forEach(el => barIo.observe(el));
  }

  // subnav scrollspy
  const links = Array.from(document.querySelectorAll('.md-subnav-link'));
  if (!links.length) return;
  const targets = links.map(l => document.getElementById(l.getAttribute('href').slice(1))).filter(Boolean);
  const spy = () => {
    const fromTop = window.scrollY + 190;
    let current = targets[0];
    targets.forEach(t => { if (t.offsetTop <= fromTop) current = t; });
    links.forEach(l => l.classList.toggle('on', current && l.getAttribute('href') === '#' + current.id));
  };
  window.addEventListener('scroll', spy, { passive: true });
  spy();
}

function renderModelInsight(b, m, id) {
  const ins = m.modelInsight || b.insight;
  if (!ins) return '';
  const total = ins.monthly;
  const bd = ins.breakdown;
  const maxVal = Math.max(bd.bh, bd.fuel, bd.road||1, bd.maint);
  const bar = (val, fillColor) => {
    const pct = Math.round((val / maxVal) * 100);
    return \`<div class="insight-bar-track"><div class="insight-bar-fill" style="width:\${pct}%;background:\${fillColor}"></div></div>\`;
  };
  const vsSign = ins.vs_estimate > 0 ? '+' : '';
  const vsCls = ins.vs_estimate > 0 ? 'positive' : 'negative';
  const vsLabel = ins.vs_estimate > 0
    ? \`Cao h\u01A1n \u01B0\u1EDBc t\xEDnh \${vsSign}\${ins.vs_estimate}%\`
    : \`Ti\u1EBFt ki\u1EC7m h\u01A1n \u01B0\u1EDBc t\xEDnh \${Math.abs(ins.vs_estimate)}%\`;

  return \`<div class="insight-panel" id="mi-panel-\${id}">
    <div class="insight-header" style="background:var(--mobase-surface)">
      <div class="insight-owners">\${ins.owners.toLocaleString('vi')} ch\u1EE7 xe \${m.name} tr\xEAn MoMo</div>
    </div>
    <div class="insight-body">
      <div class="insight-main">
        <div class="insight-monthly-label">Th\u1EF1c chi trung b\xECnh / th\xE1ng</div>
        <div class="insight-monthly-val">\${(total/1000).toFixed(1).replace('.',',')}tr</div>
        <div class="insight-monthly-unit">\u0111\u1ED3ng / th\xE1ng \xB7 \${b.name} \${m.name}</div>
        <div class="insight-model-note">G\u1ED3m: d\u1EF1 ph\xF2ng xe, nhi\xEAn li\u1EC7u, \u0111\u01B0\u1EDDng b\u1ED9, b\u1EA3o d\u01B0\u1EE1ng</div>
        <div class="insight-vs \${vsCls}">\${vsLabel}</div>
      </div>
      <div class="insight-right">
        <div class="insight-city-toggle">
          <button class="city-btn on" onclick="switchModelCity('hcm','\${id}')" id="mcity-hcm-\${id}">HCM</button>
          <button class="city-btn" onclick="switchModelCity('hn','\${id}')" id="mcity-hn-\${id}">H\xE0 N\u1ED9i</button>
        </div>
        <div class="insight-city-val" id="mcity-val-\${id}">\${(ins.hcm/1000).toFixed(1).replace('.',',')}tr</div>
        <div class="insight-city-sub" id="mcity-sub-\${id}">TP.HCM \xB7 trung b\xECnh / th\xE1ng</div>
        <div class="insight-breakdown-label">C\u01A1 c\u1EA5u chi ph\xED</div>
        <div class="insight-bars">
          <div class="insight-bar-row">
            <div class="insight-bar-name">D\u1EF1 ph\xF2ng xe</div>
            \${bar(bd.bh, 'var(--mobase-ink)')}
            <div class="insight-bar-val">\${fmt(bd.bh)}</div>
          </div>
          <div class="insight-bar-row">
            <div class="insight-bar-name">\${b.fuels.includes('\u0111i\u1EC7n')&&b.fuels.length===1?'\u0110i\u1EC7n':'Nhi\xEAn li\u1EC7u'}</div>
            \${bar(bd.fuel, 'var(--mobase-blue)')}
            <div class="insight-bar-val">\${fmt(bd.fuel)}</div>
          </div>
          <div class="insight-bar-row">
            <div class="insight-bar-name">\u0110\u01B0\u1EDDng b\u1ED9 & \u0110K</div>
            \${bar(bd.road||1, 'var(--mobase-teal)')}
            <div class="insight-bar-val">\${bd.road?fmt(bd.road):'Mi\u1EC5n ph\xED'}</div>
          </div>
          <div class="insight-bar-row">
            <div class="insight-bar-name">B\u1EA3o d\u01B0\u1EE1ng</div>
            \${bar(bd.maint, 'var(--gray-500)')}
            <div class="insight-bar-val">\${fmt(bd.maint)}</div>
          </div>
          </div>
        </div>
      </div>
    </div>\`;
}

window.switchModelCity = function(city, id) {
  const slug = new URLSearchParams(location.search).get('model');
  const found = findModelBySlug(slug);
  if (!found) return;
  const ins = found.model.modelInsight || found.brand.insight;
  document.querySelectorAll(\`#mcity-hcm-\${id}, #mcity-hn-\${id}\`).forEach(el=>el.classList.remove('on'));
  document.getElementById(\`mcity-\${city}-\${id}\`).classList.add('on');
  const val = city === 'hcm' ? ins.hcm : ins.hn;
  const label = city === 'hcm' ? 'TP.HCM \xB7 trung b\xECnh / th\xE1ng' : 'H\xE0 N\u1ED9i \xB7 trung b\xECnh / th\xE1ng';
  document.getElementById(\`mcity-val-\${id}\`).textContent = (val/1000).toFixed(1).replace('.',',') + 'tr';
  document.getElementById(\`mcity-sub-\${id}\`).textContent = label;
};

window.selectVariant = function(i) {
  document.querySelectorAll('.variant-card').forEach((c,j)=>c.classList.toggle('sel',j===i));
};

function fmtPrice(n) { return n ? n.toLocaleString('vi') : '\u2014'; }

function demoLookup(type, arg) {
  const demos = {
    plate: {id:'util-plate-result', cls:'util-result-ok',
      html:'<strong>Kh\xF4ng c\xF3 vi ph\u1EA1m</strong> - Bi\u1EC3n s\u1ED1 n\xE0y ch\u01B0a ghi nh\u1EADn ph\u1EA1t ngu\u1ED9i. Ki\u1EC3m tra l\u1EA7n cu\u1ED1i: h\xF4m nay.'},
    reg: {id:'util-reg-result', cls:'util-result-warn',
      html:'<strong>H\u1EA1n \u0111\u0103ng ki\u1EC3m: 15/09/2026</strong> - C\xF2n 66 ng\xE0y. N\xEAn \u0111\u1EB7t l\u1ECBch tr\u01B0\u1EDBc 2 tu\u1EA7n \u0111\u1EC3 tr\xE1nh ch\u1EDD \u0111\u1EE3i.'},
    fuel: {id:'util-fuel-result', cls:'util-result-ok',
      html:'<strong>3 c\xE2y x\u0103ng g\u1EA7n nh\u1EA5t:</strong> Petrolimex 123 Nguy\u1EC5n Th\u1ECB Minh Khai (0.3km) \xB7 Shell Hai B\xE0 Tr\u01B0ng (0.8km) \xB7 PVOIL \u0110i\u1EC7n Bi\xEAn Ph\u1EE7 (1.2km)'},
    park: {id:'util-park-result', cls:'util-result-ok', html:{
      q1:'<strong>5 b\xE3i \u0111\u1ED7 c\xF2n ch\u1ED7:</strong> B\xE3i Nguy\u1EC5n Hu\u1EC7 (12 ch\u1ED7 SUV) \xB7 Vincom \u0110\u1ED3ng Kh\u1EDFi (8 ch\u1ED7) \xB7 Parkee L\xEA Th\xE1nh T\xF4n (5 ch\u1ED7)',
      q3:'<strong>4 b\xE3i \u0111\u1ED7 c\xF2n ch\u1ED7:</strong> B\xE3i V\xF5 V\u0103n T\u1EA7n (6 ch\u1ED7 SUV) \xB7 Parkee Nguy\u1EC5n Th\u1ECB Minh Khai (10 ch\u1ED7) \xB7 Diamond Plaza (3 ch\u1ED7)',
      q7:'<strong>6 b\xE3i \u0111\u1ED7 c\xF2n ch\u1ED7:</strong> SC VivoCity (15 ch\u1ED7 SUV) \xB7 B\xE3i Nguy\u1EC5n L\u01B0\u01A1ng B\u1EB1ng (8 ch\u1ED7) \xB7 Crescent Mall (12 ch\u1ED7)',
      td:'<strong>3 b\xE3i \u0111\u1ED7 c\xF2n ch\u1ED7:</strong> B\xE3i V\xF5 Ch\xED C\xF4ng (10 ch\u1ED7 SUV) \xB7 GigaMall (20 ch\u1ED7) \xB7 Parkee Xa L\u1ED9 H\xE0 N\u1ED9i (7 ch\u1ED7)',
      hn:'<strong>4 b\xE3i \u0111\u1ED7 c\xF2n ch\u1ED7:</strong> B\xE3i Tr\xE0ng Thi (4 ch\u1ED7 SUV) \xB7 Vincom B\xE0 Tri\u1EC7u (6 ch\u1ED7) \xB7 B\xE3i \u0110inh Ti\xEAn Ho\xE0ng (3 ch\u1ED7)',
    }},
  };
  const d = demos[type]; if (!d) return;
  const el = document.getElementById(d.id); if (!el) return;
  const text = typeof d.html === 'object' ? (d.html[arg]||d.html.q1) : d.html;
  el.className = 'util-result show ' + d.cls;
  el.innerHTML = text;
}

function enrichGaragesWithProvinces() {
  const extraGarages = {
    DN: [
      { name: ' \u0110\xE0 N\u1EB5ng', type: 'official', address: '12-14 Nguy\u1EC5n H\u1EEFu Th\u1ECD, H\u1EA3i Ch\xE2u, \u0110\xE0 N\u1EB5ng', bh: ['Liberty', 'PVI', 'B\u1EA3o Vi\u1EC7t'], claims: 410, rating: 4.8, note: '\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng mi\u1EC1n Trung. Quy tr\xECnh b\u1ED3i th\u01B0\u1EDDng b\u1EA3o hi\u1EC3m nhanh ch\xF3ng.' },
      { name: ' Auto Service S\xF4ng H\xE0n', type: 'authorized', address: '228 \u0110i\u1EC7n Bi\xEAn Ph\u1EE7, Thanh Kh\xEA, \u0110\xE0 N\u1EB5ng', bh: ['PVI', 'B\u1EA3o Vi\u1EC7t'], claims: 280, rating: 4.6, note: 'Garage \u1EE7y quy\u1EC1n uy t\xEDn. Chuy\xEAn \u0111\u1ED3ng s\u01A1n, s\u1EEDa ch\u1EEFa ph\u1EE5c h\u1ED3i sau tai n\u1EA1n.' }
    ],
    BD: [
      { name: ' B\xECnh D\u01B0\u01A1ng', type: 'official', address: '\u0110\u1EA1i l\u1ED9 B\xECnh D\u01B0\u01A1ng, Thu\u1EADn An, B\xECnh D\u01B0\u01A1ng', bh: ['Liberty', 'PVI'], claims: 350, rating: 4.7, note: 'Chi nh\xE1nh 3S ch\xEDnh h\xE3ng l\u1EDBn nh\u1EA5t B\xECnh D\u01B0\u01A1ng. Garage \u0111\u1ED3ng s\u01A1n hi\u1EC7n \u0111\u1EA1i.' },
      { name: ' Garage Tr\u01B0\u1EDDng An B\xECnh D\u01B0\u01A1ng', type: 'authorized', address: 'Khu ph\u1ED1 \u0110\xF4ng Chi\xEAu, T\xE2n \u0110\xF4ng Hi\u1EC7p, D\u0129 An, B\xECnh D\u01B0\u01A1ng', bh: ['PVI', 'MIC'], claims: 210, rating: 4.5, note: 'Garage li\xEAn k\u1EBFt b\u1EA3o hi\u1EC3m l\xE2u n\u0103m, h\u1ED7 tr\u1EE3 gi\xE1m \u0111\u1ECBnh b\u1ED3i th\u01B0\u1EDDng t\u1EA1i ch\u1ED7.' }
    ],
    HP: [
      { name: ' H\u1EA3i Ph\xF2ng', type: 'official', address: 'L\xEA H\u1ED3ng Phong, Ng\xF4 Quy\u1EC1n, H\u1EA3i Ph\xF2ng', bh: ['Liberty', 'B\u1EA3o Vi\u1EC7t'], claims: 320, rating: 4.7, note: '\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng H\u1EA3i Ph\xF2ng. C\u01A1 s\u1EDF v\u1EADt ch\u1EA5t ti\xEAu chu\u1EA9n 3S to\xE0n c\u1EA7u.' }
    ],
    CT: [
      { name: ' C\u1EA7n Th\u01A1', type: 'official', address: '\u0110\u01B0\u1EDDng Quang Trung, C\xE1i R\u0103ng, C\u1EA7n Th\u01A1', bh: ['PVI', 'B\u1EA3o Vi\u1EC7t'], claims: 290, rating: 4.7, note: '\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng C\xE1i R\u0103ng. H\u1ED7 tr\u1EE3 c\u1EE9u h\u1ED9 24/7 khu v\u1EF1c T\xE2y Nam B\u1ED9.' }
    ]
  };

  for (const [brandId, b] of Object.entries(BRANDS)) {
    if (!b.garages) b.garages = [];
    if (b.garages.some(g => g.city === 'DN')) continue;
    
    const brandName = b.name;
    for (const [cityCode, list] of Object.entries(extraGarages)) {
      list.forEach(item => {
        const enrichedItem = {
          name: item.name.startsWith(' Garage') || item.name.startsWith(' Auto')
            ? item.name.trim() 
            : \`\${brandName}\${item.name}\`,
          type: item.type,
          city: cityCode,
          address: item.address,
          bh: [...item.bh],
          claims: item.claims,
          rating: item.rating,
          note: item.note.replace('Ch\xEDnh h\xE3ng', \`Ch\xEDnh h\xE3ng \${brandName}\`).replace('\u1EE7y quy\u1EC1n', \`\u1EE7y quy\u1EC1n \${brandName}\`)
        };
        b.garages.push(enrichedItem);
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const gsDate = document.getElementById('gs-date');
  if (gsDate) { const d = new Date(); gsDate.textContent = \`\${String(d.getDate()).padStart(2,'0')}/\${String(d.getMonth()+1).padStart(2,'0')}\`; }

  enrichGaragesWithProvinces();

  const pathParts = location.pathname.split('/').filter(Boolean);
  let id = null;
  let model = null;
  
  // pathParts: ['tien-ich-giao-thong','hang-xe','toyota','camry'] or ['hang-xe','toyota','camry']
  const hangXeIdx = pathParts.indexOf('hang-xe');
  if (hangXeIdx !== -1) {
    id = pathParts[hangXeIdx + 1] || null;
    model = pathParts[hangXeIdx + 2] || null;
  }
  
  // Fallback to URL search parameters for backward compatibility
  if (!id) {
    const params = new URLSearchParams(location.search);
    id = params.get('id') || params.get('brand');
    model = params.get('model');
  }
  
  if (id && model && BRANDS[id]) renderModelDetail(id, model);
  else if (id && BRANDS[id]) renderDetail(id);
  else renderListing();

  if (window.lucide) lucide.createIcons();
});

/* \u2500\u2500 BOOKING MODAL JS \u2500\u2500 */
const BK_SVC_CHIPS = ['B\u1EA3o d\u01B0\u1EE1ng \u0111\u1ECBnh k\u1EF3','Thay d\u1EA7u nh\u1EDBt','Thay l\u1ED1p','Ki\u1EC3m tra phanh','\u0110\u1ED3ng s\u01A1n / th\xE2n v\u1ECF','\u0110i\u1EC7n - \u0111i\u1EC1u h\xF2a','\u0110\u0103ng ki\u1EC3m h\u1ED7 tr\u1EE3','S\u1EEDa ch\u1EEFa kh\xE1c'];
const BK_SLOTS = ['7:30','8:00','8:30','9:00','10:00','10:30','13:30','14:00','15:00','15:30','16:00'];
const BK_FULL  = ['9:00','14:00'];

let bkState = { chips:[], date:null, slot:null };

function openBookingModal(name, city, address) {
  bkState = { chips:[], date:null, slot:null };
  const overlay = document.getElementById('bk-overlay');
  document.getElementById('bk-garage-name').textContent = name;
  document.getElementById('bk-garage-sub').innerHTML =
    \`<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> \${city ? getCityLabel(city)+' \xB7 ' : ''}\${address||''}\`;
  renderBkBody();
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
  document.getElementById('bk-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function renderBkBody() {
  const days = ['CN','T2','T3','T4','T5','T6','T7'];
  const months = ['Th1','Th2','Th3','Th4','Th5','Th6','Th7','Th8','Th9','Th10','Th11','Th12'];
  const dateItems = [];
  let d = new Date(); d.setDate(d.getDate()+1);
  while (dateItems.length < 8) {
    if (d.getDay() !== 0) {
      dateItems.push({ key: d.toISOString().slice(0,10), day: days[d.getDay()], num: d.getDate(), month: months[d.getMonth()] });
    }
    d.setDate(d.getDate()+1);
  }
  if (!bkState.date) bkState.date = dateItems[0].key;

  const chipHtml = BK_SVC_CHIPS.map(c => \`
    <button class="bk-svc-chip\${bkState.chips.includes(c)?' on':''}" onclick="bkToggleChip('\${c}')">\${c}</button>\`).join('');

  const dateHtml = dateItems.map(dt => \`
    <button class="bk-date\${bkState.date===dt.key?' on':''}" onclick="bkPickDate('\${dt.key}')">
      <div class="bk-date-day">\${dt.day}</div>
      <div class="bk-date-num">\${dt.num}</div>
      <div class="bk-date-month">\${dt.month}</div>
    </button>\`).join('');

  const slotHtml = BK_SLOTS.map(s => {
    const full = BK_FULL.includes(s);
    return \`<button class="bk-slot\${bkState.slot===s?' on':''}\${full?' full':''}" \${full?'disabled':''} onclick="bkPickSlot('\${s}')">\${s}</button>\`;
  }).join('');

  document.getElementById('bk-body').innerHTML = \`
    <div class="bk-group">
      <div class="bk-flabel">D\u1ECBch v\u1EE5 c\u1EA7n l\xE0m</div>
      <div class="bk-svc-chips">\${chipHtml}</div>
      <textarea class="bk-textarea" id="bk-note" placeholder="M\xF4 t\u1EA3 th\xEAm t\xECnh tr\u1EA1ng xe ho\u1EB7c y\xEAu c\u1EA7u c\u1EE5 th\u1EC3..." rows="2" oninput="bkValidate()"></textarea>
    </div>
    <div class="bk-group">
      <div class="bk-flabel">Ch\u1ECDn ng\xE0y</div>
      <div class="bk-dates">\${dateHtml}</div>
    </div>
    <div class="bk-group">
      <div class="bk-flabel">Ch\u1ECDn gi\u1EDD <span style="font-size:10px;color:var(--gray-300);font-weight:500;text-transform:none;letter-spacing:0">\u2014 m\u1EDD = \u0111\xE3 k\xEDn</span></div>
      <div class="bk-slots">\${slotHtml}</div>
    </div>
    <div class="bk-group">
      <div class="bk-flabel">Th\xF4ng tin li\xEAn h\u1EC7</div>
      <div class="bk-fields">
        <input class="bk-input" id="bk-name" placeholder="H\u1ECD v\xE0 t\xEAn" value="\${bkState._name||''}" oninput="bkState._name=this.value;bkValidate()">
        <input class="bk-input" id="bk-phone" placeholder="S\u1ED1 \u0111i\u1EC7n tho\u1EA1i" type="tel" value="\${bkState._phone||''}" oninput="bkState._phone=this.value;bkValidate()">
      </div>
    </div>\`;
  bkValidate();
}

function bkToggleChip(c) {
  const i = bkState.chips.indexOf(c);
  if (i >= 0) bkState.chips.splice(i,1); else bkState.chips.push(c);
  renderBkBody();
}
function bkPickDate(key) { bkState.date=key; renderBkBody(); }
function bkPickSlot(s)   { bkState.slot=s;   renderBkBody(); }

function bkValidate() {
  const btn   = document.getElementById('bk-submit');
  if (!btn) return;
  const name  = document.getElementById('bk-name')?.value.trim();
  const phone = document.getElementById('bk-phone')?.value.trim();
  const note  = document.getElementById('bk-note')?.value.trim();
  const hasSvc = bkState.chips.length > 0 || note;
  btn.disabled = !(hasSvc && bkState.date && bkState.slot && name && phone.length >= 9);
}

function bkSubmit() {
  const d = new Date(bkState.date);
  const days = ['Ch\u1EE7 nh\u1EADt','Th\u1EE9 2','Th\u1EE9 3','Th\u1EE9 4','Th\u1EE9 5','Th\u1EE9 6','Th\u1EE9 7'];
  const dateLabel = \`\${days[d.getDay()]}, \${d.getDate()}/\${d.getMonth()+1}/\${d.getFullYear()}\`;
  const svcLabel = bkState.chips.length ? bkState.chips.join(', ') : 'Theo m\xF4 t\u1EA3';
  const garageName = document.getElementById('bk-garage-name').textContent;
  document.getElementById('bk-body').innerHTML = \`
    <div class="bk-success">
      <div class="bk-success-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div class="bk-success-title">\u0110\u1EB7t l\u1ECBch th\xE0nh c\xF4ng!</div>
      <div class="bk-success-sub">Garage s\u1EBD g\u1ECDi x\xE1c nh\u1EADn trong v\xF2ng 30 ph\xFAt.</div>
      <div class="bk-success-summary">
        <div class="bk-success-row"><span class="bk-success-row-label">Garage</span><span class="bk-success-row-val">\${garageName}</span></div>
        <div class="bk-success-row"><span class="bk-success-row-label">D\u1ECBch v\u1EE5</span><span class="bk-success-row-val">\${svcLabel}</span></div>
        <div class="bk-success-row"><span class="bk-success-row-label">Ng\xE0y gi\u1EDD</span><span class="bk-success-row-val">\${dateLabel} \xB7 \${bkState.slot}</span></div>
      </div>
    </div>\`;
  document.getElementById('bk-submit').textContent = '\u0110\xF3ng';
  document.getElementById('bk-submit').disabled = false;
  document.getElementById('bk-submit').onclick = closeBookingModal;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('bk-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('bk-overlay')) closeBookingModal();
  });
});

window.openNavSidebar = function() {
  document.getElementById('navSidebar').classList.add('open');
  document.getElementById('navOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
};
window.closeNavSidebar = function() {
  document.getElementById('navSidebar').classList.remove('open');
  document.getElementById('navOverlay').classList.remove('open');
  document.body.style.overflow = '';
};

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
    {brand:'volkswagen',label:'Volkswagen',color:'#001E50',cat:'\xD4 t\xF4',models:[
      {name:'Tiguan',slug:'tiguan',type:'SUV'},
      {name:'Teramont',slug:'teramont',type:'SUV'},
      {name:'Touareg',slug:'touareg',type:'SUV'},
      {name:'Passat',slug:'passat',type:'Sedan'},
      {name:'Polo',slug:'polo',type:'Hatchback'},
      {name:'Scirocco',slug:'scirocco',type:'Coupe'},
    ]},
    {brand:'chevrolet',label:'Chevrolet',color:'#D4AF37',cat:'\xD4 t\xF4',models:[
      {name:'Colorado',slug:'colorado',type:'B\xE1n t\u1EA3i'},
      {name:'TrailBlazer',slug:'trailblazer',type:'SUV'},
      {name:'Captiva',slug:'captiva',type:'SUV'},
      {name:'Cruze',slug:'cruze',type:'Sedan'},
      {name:'Spark',slug:'spark',type:'Hatchback'},
      {name:'Orlando',slug:'orlando',type:'MPV'},
    ]},
    {brand:'porsche',label:'Porsche',color:'#8B0000',cat:'\xD4 t\xF4',models:[
      {name:'Macan',slug:'macan',type:'SUV'},
      {name:'Cayenne',slug:'cayenne',type:'SUV'},
      {name:'Taycan',slug:'taycan',type:'EV'},
      {name:'Panamera',slug:'panamera',type:'Sedan'},
      {name:'911',slug:'911',type:'Coupe'},
    ]},
    {brand:'jaguar',label:'Jaguar',color:'#005A2B',cat:'\xD4 t\xF4',models:[
      {name:'F-PACE',slug:'f-pace',type:'SUV'},
      {name:'E-PACE',slug:'e-pace',type:'SUV'},
      {name:'XE',slug:'xe',type:'Sedan'},
      {name:'XF',slug:'xf',type:'Sedan'},
      {name:'XJ',slug:'xj',type:'Sedan'},
      {name:'F-TYPE',slug:'f-type',type:'Coupe'},
    ]},
    {brand:'skoda',label:'\u0160koda',color:'#4CAF50',cat:'\xD4 t\xF4',models:[
      {name:'Karoq',slug:'karoq',type:'SUV'},
      {name:'Kodiaq',slug:'kodiaq',type:'SUV'},
      {name:'Slavia',slug:'slavia',type:'Sedan'},
      {name:'Kushaq',slug:'kushaq',type:'SUV'},
    ]},
    {brand:'mini',label:'MINI',color:'#231F20',cat:'\xD4 t\xF4',models:[
      {name:'Cooper',slug:'cooper',type:'Hatchback'},
      {name:'Cooper S',slug:'cooper-s',type:'Hatchback'},
      {name:'Countryman',slug:'countryman',type:'SUV'},
      {name:'JCW',slug:'jcw',type:'Hatchback'},
    ]},
    {brand:'renault',label:'Renault',color:'#FFCD00',cat:'\xD4 t\xF4',models:[
      {name:'Megane',slug:'megane',type:'Hatchback'},
      {name:'Koleos',slug:'koleos',type:'SUV'},
    ]},
    {brand:'geely',label:'Geely',color:'#0047AB',cat:'\xD4 t\xF4',models:[
      {name:'Coolray',slug:'coolray',type:'Crossover'},
      {name:'Emgrand',slug:'emgrand',type:'Sedan'},
    ]},
    {brand:'omoda',label:'Omoda',color:'#E31837',cat:'\xD4 t\xF4',models:[
      {name:'C5',slug:'c5',type:'SUV'},
    ]},
    {brand:'jaecoo',label:'Jaecoo',color:'#2F4F4F',cat:'\xD4 t\xF4',models:[
      {name:'J7',slug:'j7',type:'SUV'},
    ]},
    {brand:'acura',label:'Acura',color:'#CC0000',cat:'\xD4 t\xF4',models:[
      {name:'RDX',slug:'rdx',type:'SUV'},
      {name:'MDX',slug:'mdx',type:'SUV'},
      {name:'TLX',slug:'tlx',type:'Sedan'},
      {name:'ILX',slug:'ilx',type:'Sedan'},
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
    const groups = {};
    results.forEach(r => { if (!groups[r.cat]) groups[r.cat] = []; groups[r.cat].push(r); });
    let html = '';
    Object.entries(groups).forEach(([cat, items], gi) => {
      if (gi > 0) html += '<div class="nsd-divider"></div>';
      html += \`<div class="nsd-section-label">\${cat}</div>\`;
      items.forEach((item) => {
        const isEV = item.type === 'EV';
        const isMoto = item.cat === 'Xe m\xE1y';
        const typeClass = isEV ? 'ev' : isMoto ? 'motorbike' : '';
        const url = getUrl(item);
        html += \`<a class="nsd-item" href="\${url}">
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

  function openDrop() { const q = inp.value.trim(); if (!q) showEmpty(); drop.classList.add('open'); }
  function closeDrop() { drop.classList.remove('open'); activeIdx = -1; }

  inp.addEventListener('input', () => {
    const q = inp.value.trim().toLowerCase();
    if (!q) { showEmpty(); drop.classList.add('open'); return; }
    const results = INDEX.filter(r => r.search.includes(q)).slice(0, 12);
    renderResults(results);
    drop.classList.add('open');
  });
  inp.addEventListener('focus', () => { clearTimeout(blurTimer); openDrop(); });
  inp.addEventListener('blur', () => { blurTimer = setTimeout(closeDrop, 160); });

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
      if (activeIdx >= 0 && items[activeIdx]) { e.preventDefault(); items[activeIdx].click(); }
    } else if (e.key === 'Escape') { closeDrop(); inp.blur(); }
  });

  document.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement !== inp && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault(); inp.focus();
    }
  });

  window.closeNavSearch = closeDrop;

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
<\/script>  <div id="gmap-overlay" class="gmap-overlay" role="dialog" aria-modal="true" onclick="if(event.target===this)closeGarageMap()"> <div class="gmap-sheet"> <div class="gmap-header"> <div> <div class="gmap-garage-name" id="gmap-name"></div> <div class="gmap-garage-addr" id="gmap-addr"></div> </div> <button class="gmap-close" onclick="closeGarageMap()"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> </button> </div> <div class="gmap-body"> <div class="gmap-loading" id="gmap-loading"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>
\u0110ang t\xECm v\u1ECB tr\xED...
</div> <div id="gmapEl"></div> </div> <div class="gmap-footer"> <a id="gmap-dir" href="#" target="_blank" class="gmap-dir-btn"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
Ch\u1EC9 \u0111\u01B0\u1EDDng
</a> <span class="gmap-osm-note">\xA9 OpenStreetMap contributors</span> </div> </div> </div> <script>
(function() {
  let _map = null;
  let _marker = null;

  window.openGarageMap = async function(name, address) {
    const overlay = document.getElementById('gmap-overlay');
    document.getElementById('gmap-name').textContent = name;
    document.getElementById('gmap-addr').textContent = address;
    document.getElementById('gmap-loading').classList.remove('hidden');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Geocode via Nominatim
    let lat = 10.7769, lng = 106.7009; // fallback HCM
    try {
      const q = encodeURIComponent(address + ', Vi\u1EC7t Nam');
      const res = await fetch(\`https://nominatim.openstreetmap.org/search?q=\${q}&format=json&limit=1\`, {
        headers: { 'Accept-Language': 'vi' }
      });
      const data = await res.json();
      if (data && data[0]) {
        lat = parseFloat(data[0].lat);
        lng = parseFloat(data[0].lon);
      }
    } catch (_) {}

    document.getElementById('gmap-loading').classList.add('hidden');

    // Update directions link
    document.getElementById('gmap-dir').href =
      \`https://www.google.com/maps/dir/?api=1&destination=\${lat},\${lng}\`;

    // Init or reset map
    const mapEl = document.getElementById('gmapEl');
    if (_map) {
      _map.remove();
      _map = null;
      _marker = null;
    }

    _map = new maplibregl.Map({
      container: mapEl,
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
      center: [lng, lat],
      zoom: 15,
      attributionControl: false,
    });

    _map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');

    // Custom pink marker
    const el = document.createElement('div');
    el.style.cssText = 'width:36px;height:36px;background:#eb2f96;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.3)';
    _marker = new maplibregl.Marker({ element: el })
      .setLngLat([lng, lat])
      .setPopup(new maplibregl.Popup({ offset: 28, closeButton: false })
        .setHTML(\`<div style="font-size:13px;font-weight:700;color:#1c1c1e">\${name}</div><div style="font-size:11px;color:#6b7280;margin-top:2px">\${address}</div>\`))
      .addTo(_map);

    _marker.togglePopup();
  };

  window.closeGarageMap = function() {
    document.getElementById('gmap-overlay').classList.remove('open');
    document.body.style.overflow = '';
    if (_map) { _map.remove(); _map = null; _marker = null; }
  };

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeGarageMap();
  });
})();
<\/script>  <div id="bk-overlay" class="bk-overlay" role="dialog" aria-modal="true"> <div id="bk-sheet" class="bk-sheet"> <div class="bk-handle-bar"></div> <div class="bk-header"> <div class="bk-garage-name" id="bk-garage-name"></div> <div class="bk-garage-sub" id="bk-garage-sub"></div> <button class="bk-close" onclick="closeBookingModal()"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> </button> </div> <div class="bk-body" id="bk-body"></div> <div class="bk-footer"> <button class="bk-submit" id="bk-submit" disabled onclick="bkSubmit()">X\xE1c nh\u1EADn \u0111\u1EB7t l\u1ECBch</button> </div> </div> </div> `], [" ", " ", '<div class="nav-search-overlay" id="mobileSearchOverlay"> <div class="nav-search-box"> <i data-lucide="search" width="14" height="14"></i> <input id="mobileSearchInp" class="nav-search-inp" type="text" placeholder="T\xECm xe c\u1EE7a b\u1EA1n..." autocomplete="off" spellcheck="false"> <button onclick="closeMobileSearch()" style="background:none;border:none;cursor:pointer;color:var(--gray-400);padding:0;display:flex;align-items:center;"> <i data-lucide="x" width="16" height="16"></i> </button> </div> <div class="nav-search-drop" id="mobileSearchDrop"></div> </div>  <div class="nav-sidebar-overlay" id="navOverlay" onclick="closeNavSidebar()"></div> <div class="nav-sidebar" id="navSidebar"> <div class="nav-sidebar-top"> <span class="nav-sidebar-logo">Ti\u1EC7n \xCDch <em>Giao Th\xF4ng</em></span> <button class="nav-sidebar-close" onclick="closeNavSidebar()"> <i data-lucide="x" width="14" height="14"></i> </button> </div> <div class="nav-sidebar-body"> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">Di chuy\u1EC3n</div> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/gia-xang">Gi\xE1 x\u0103ng d\u1EA7u h\xF4m nay</a> <a class="nav-sidebar-link" href="/cay-xang">T\xECm c\xE2y x\u0103ng g\u1EA7n \u0111\xE2y</a> <a class="nav-sidebar-link" href="/tram-sac">Tr\u1EA1m s\u1EA1c xe \u0111i\u1EC7n</a> <a class="nav-sidebar-link" href="/epass/tinh-phi-etc">T\xEDnh ph\xED ETC theo tuy\u1EBFn</a> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">B\u1EA3o hi\u1EC3m</div> <a class="nav-sidebar-link" href="/bao-hiem-o-to">B\u1EA3o hi\u1EC3m TNDS b\u1EAFt bu\u1ED9c</a> <a class="nav-sidebar-link" href="/bao-hiem-o-to">B\u1EA3o hi\u1EC3m th\xE2n v\u1ECF</a> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">Ph\xE1p l\xFD &amp; B\u1EA3o d\u01B0\u1EE1ng</div> <a class="nav-sidebar-link" href="/phat-nguoi">Tra ph\u1EA1t ngu\u1ED9i</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/dang-kiem">Ki\u1EC3m tra \u0111\u0103ng ki\u1EC3m</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/bao-duong">L\u1ECBch b\u1EA3o d\u01B0\u1EE1ng xe</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/cuu-ho">C\u1EE9u h\u1ED9 kh\u1EA9n c\u1EA5p</a> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">Xe c\u1EE7a t\xF4i</div> <a class="nav-sidebar-link" href="/tien-ich-giao-thong#ho-so-xe">H\u1ED3 s\u01A1 ph\u01B0\u01A1ng ti\u1EC7n</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong#chi-phi-xe">Chi ph\xED nu\xF4i xe / n\u0103m</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/hang-xe">Nh\xE3n xe &amp; D\xF2ng xe</a> <a class="nav-sidebar-link" href="/epass">ePass &amp; T\u1EF1 \u0111\u1ED9ng n\u1EA1p</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/bai-do-xe">T\xECm b\xE3i \u0111\u1ED7 xe</a> </div> </div> </div> ', `  <main id="app"></main>  <div id="toast" style="position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:var(--gray-900);color:#fff;padding:10px 20px;border-radius:999px;font-size:13px;font-weight:700;opacity:0;transition:.25s;pointer-events:none;z-index:9999;white-space:nowrap"></div> <script>
function licon(name, size, sw) {
  if (!window.lucide || !window.lucide[name]) return '';
  const children = window.lucide[name].map(([tag, attrs]) => {
    const a = Object.entries(attrs).map(([k,v]) => \\\`\\\${k}="\\\${v}"\\\`).join(' ');
    return \\\`<\\\${tag} \\\${a}/>\\\`;
  }).join('');
  return \\\`<svg xmlns="http://www.w3.org/2000/svg" width="\\\${size||16}" height="\\\${size||16}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="\\\${sw||2}" stroke-linecap="round" stroke-linejoin="round">\\\${children}</svg>\\\`;
}
/* \u2500\u2500 DATA \u2500\u2500 */
const BRANDS = {
  toyota:{
    name:'Toyota',origin:'Nh\u1EADt B\u1EA3n',color:'#EB0A1E',tagline:'B\u1EC1n b\u1EC9 \xB7 Ti\u1EBFt ki\u1EC7m x\u0103ng \xB7 Gi\xE1 tr\u1ECB l\xE2u d\xE0i',
    fuels:['x\u0103ng','hybrid'],popular:true,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Nh\u1EADt B\u1EA3n v\u1EDBi \u0111\u1ED9 tin c\u1EADy h\xE0ng \u0111\u1EA7u th\u1ECB tr\u01B0\u1EDDng. Toyota d\u1EABn \u0111\u1EA7u ph\xE2n kh\xFAc SUV v\xE0 MPV t\u1EA1i Vi\u1EC7t Nam nh\u1EDD chi ph\xED b\u1EA3o d\u01B0\u1EE1ng th\u1EA5p v\xE0 gi\xE1 tr\u1ECB gi\u1EEF xe t\u1ED1t nh\u1EA5t ph\xE2n kh\xFAc.',
    models:[
      {name:'Fortuner',type:'suv',bh:12,desc:'SUV 7 ch\u1ED7 ph\u1ED5 bi\u1EBFn nh\u1EA5t',monthly:{bh:1000,fuel:3200,reg:175,maint:400},slug:'fortuner',priceFrom:1026,priceTo:1470,
        variants:[
          {name:'2.4L MT 4x2',price:1026,engine:'2.4L Diesel 150hp',fuel:'D\u1EA7u',seats:7,drive:'FWD'},
          {name:'2.4L AT 4x2',price:1096,engine:'2.4L Diesel 150hp',fuel:'D\u1EA7u',seats:7,drive:'FWD'},
          {name:'2.4L AT 4x4',price:1191,engine:'2.4L Diesel 150hp',fuel:'D\u1EA7u',seats:7,drive:'AWD'},
          {name:'2.8L AT 4x4 Legender',price:1350,engine:'2.8L Diesel 204hp',fuel:'D\u1EA7u',seats:7,drive:'AWD'},
          {name:'2.8L AT 4x4 GR Sport',price:1470,engine:'2.8L Diesel 204hp',fuel:'D\u1EA7u',seats:7,drive:'AWD'},
        ],
        valuation:{base:1155,newRange:'1.026 - 1.470 t\u1EF7',segAvgRetention3y:70,retention:{2026:100,2025:90,2024:84,2023:78,2022:72,2021:66,2020:61,2019:56}},
        commonIssues:[
          {title:'L\u1ECDc d\u1EA7u turbo b\xEDt s\u1EDBm',km:'60.000-100.000 km',severity:'high',desc:'D\u1EA7u turbo diesel kh\xF4ng \u0111\u01B0\u1EE3c thay \u0111\xFAng h\u1EA1n g\xE2y b\xEDt l\u1ECDc, \xE1p su\u1EA5t d\u1EA7u th\u1EA5p, turbo m\xF2n nhanh. B\u1EAFt bu\u1ED9c d\xF9ng d\u1EA7u 5W-30 CI-4 tr\u1EDF l\xEAn v\xE0 thay \u0111\xFAng 7.500km.',cost:'150.000-500.000\u0111/l\u1EA7n'},
          {title:'H\u1ED9p s\u1ED1 AT gi\u1EADt nh\u1EB9 khi n\xF3ng m\xE1y',km:'50.000+ km',severity:'medium',desc:'C\u1EA3m gi\xE1c gi\u1EADt nh\u1EB9 khi sang s\u1ED1 1-2 sau khi xe \u0111\xE3 ch\u1EA1y \u1EA5m. Th\u01B0\u1EDDng do d\u1EA7u h\u1ED9p s\u1ED1 b\u1ECB \xF4 nhi\u1EC5m ho\u1EB7c van \u0111i\u1EC7n t\u1EEB m\xF2n. Thay d\u1EA7u AT \u0111\xFAng h\u1EA1n 40.000km.',cost:'800.000-2.000.000\u0111'},
          {title:'Cao su ch\xE2n m\xE1y n\u1EE9t',km:'80.000+ km',severity:'medium',desc:'Ch\xE2n m\xE1y cao su l\xE3o h\xF3a g\xE2y rung m\xE1y t\u0103ng r\xF5 \u1EDF c\u1EA7u s\u1ED1, \u0111\u1EB7c bi\u1EC7t khi \u0111i\u1EC1u h\xF2a b\u1EADt. Thay c\u1EE5m 3-4 ch\xE2n m\xE1y.',cost:'2.000.000-5.000.000\u0111'},
          {title:'C\u1EA3m bi\u1EBFn nhi\u1EC7t \u0111\u1ED9 kh\xED n\u1EA1p b\xE1o l\u1ED7i',km:'70.000+ km',severity:'low',desc:'\u0110\xE8n check engine do c\u1EA3m bi\u1EBFn IAT h\u1ECFng, kh\xF4ng \u1EA3nh h\u01B0\u1EDFng v\u1EADn h\xE0nh nh\u01B0ng c\u1EA7n x\u1EED l\xFD \u0111\u1EC3 tr\xE1nh m\u1EA5t ch\u1EBF \u0111\u1ED9 limp mode.',cost:'500.000-1.500.000\u0111'},
        ],
        spareParts:[
          {name:'L\u1ECDc d\u1EA7u diesel',interval:'7.500 km',cost:'150-200k',note:'Lu\xF4n thay c\xF9ng d\u1EA7u \u0111\u1ED9ng c\u01A1'},
          {name:'D\u1EA7u h\u1ED9p s\u1ED1 AT',interval:'40.000 km',cost:'800k-1.2tr',note:'Toyota genuine ATF WS'},
          {name:'L\u1ECDc gi\xF3 \u0111\u1ED9ng c\u01A1',interval:'15.000 km',cost:'200-350k',note:'M\xF4i tr\u01B0\u1EDDng b\u1EE5i thay s\u1EDBm h\u01A1n'},
          {name:'M\xE1 phanh tr\u01B0\u1EDBc',interval:'40.000-60.000 km',cost:'1.5-3tr/c\u1EB7p',note:'Ki\u1EC3m tra \u0111\u1ED9 d\xE0y t\u1EA1i m\u1ED7i l\u1EA7n \u0111\u0103ng ki\u1EC3m'},
          {name:'D\xE2y curoa ph\u1EE5',interval:'80.000 km',cost:'400-800k',note:'Thay tr\u01B0\u1EDBc khi \u0111\u1EE9t tr\xE1nh h\u1ECFng m\xE1y'},
          {name:'L\u1ECDc nhi\xEAn li\u1EC7u diesel',interval:'40.000 km',cost:'300-500k',note:'Quan tr\u1ECDng v\u1EDBi xe d\u1EA7u - x\u1EA3 n\u01B0\u1EDBc \u0111\u1ECBnh k\u1EF3'},
        ]},
      {name:'Camry',type:'sedan',bh:14,desc:'Sedan h\u1EA1ng D, c\xF3 hybrid',monthly:{bh:1167,fuel:2800,reg:180,maint:350},slug:'camry',priceFrom:1155,priceTo:1455,
        variants:[
          {name:'2.0G AT',price:1155,engine:'2.0L 170hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.0Q AT',price:1285,engine:'2.0L 170hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.5Q AT HEV',price:1455,engine:'2.5L Hybrid 218hp',fuel:'X\u0103ng/\u0110i\u1EC7n',seats:5,drive:'FWD'},
        ]},
      {name:'Corolla Cross',type:'suv',bh:10,desc:'Crossover compact',monthly:{bh:833,fuel:2400,reg:155,maint:280},slug:'corolla-cross',priceFrom:820,priceTo:940,
        variants:[
          {name:'1.8HEV CVT',price:820,engine:'1.8L Hybrid 122hp',fuel:'X\u0103ng/\u0110i\u1EC7n',seats:5,drive:'FWD'},
          {name:'1.8HEV Premium CVT',price:940,engine:'1.8L Hybrid 122hp',fuel:'X\u0103ng/\u0110i\u1EC7n',seats:5,drive:'FWD'},
        ]},
      {name:'Innova Cross',type:'mpv',bh:11,desc:'MPV 8 ch\u1ED7',monthly:{bh:917,fuel:2800,reg:165,maint:300},slug:'innova-cross',priceFrom:810,priceTo:970,
        variants:[
          {name:'2.0V AT',price:810,engine:'2.0L 172hp',fuel:'X\u0103ng',seats:8,drive:'FWD'},
          {name:'2.0GS AT HEV',price:970,engine:'2.0L Hybrid 186hp',fuel:'X\u0103ng/\u0110i\u1EC7n',seats:7,drive:'FWD'},
        ]},
      {name:'Veloz',type:'mpv',bh:8,desc:'MPV gi\xE1 t\u1ED1t',monthly:{bh:667,fuel:2600,reg:145,maint:250},slug:'veloz',priceFrom:658,priceTo:718,
        variants:[
          {name:'1.5G MT',price:658,engine:'1.5L 106hp',fuel:'X\u0103ng',seats:7,drive:'FWD'},
          {name:'1.5Q CVT',price:718,engine:'1.5L 106hp',fuel:'X\u0103ng',seats:7,drive:'FWD'},
        ]},
      {name:'Raize',type:'suv',bh:7,desc:'SUV \u0111\xF4 th\u1ECB c\u1EE1 nh\u1ECF',monthly:{bh:583,fuel:2000,reg:135,maint:220},slug:'raize',priceFrom:527,priceTo:591,
        variants:[
          {name:'1.0 Turbo AT G',price:527,engine:'1.0L Turbo 98hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.0 Turbo AT Z',price:591,engine:'1.0L Turbo 98hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
        ]},
      {name:'Vios',type:'sedan',bh:6,desc:'Sedan h\u1EA1ng B ti\u1EBFt ki\u1EC7m',monthly:{bh:500,fuel:2000,reg:130,maint:200},slug:'vios',priceFrom:479,priceTo:569,
        variants:[
          {name:'1.5E MT',price:479,engine:'1.5L Dual VVT-i 107hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.5E CVT',price:519,engine:'1.5L Dual VVT-i 107hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.5G CVT',price:569,engine:'1.5L Dual VVT-i 107hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
        ]},
      {name:'Land Cruiser',type:'suv',bh:45,desc:'SUV cao c\u1EA5p flagship',monthly:{bh:3750,fuel:4200,reg:450,maint:1200},slug:'land-cruiser',priceFrom:4060,priceTo:4590,
        variants:[
          {name:'3.3D VX-R AT',price:4060,engine:'3.3L Twin-Turbo Diesel 309hp',fuel:'D\u1EA7u',seats:7,drive:'AWD'},
          {name:'3.3D ZX AT',price:4590,engine:'3.3L Twin-Turbo Diesel 309hp',fuel:'D\u1EA7u',seats:7,drive:'AWD'},
        ]},
    ],
    topInsurers:[
      {name:'Liberty Insurance',color:'#2E4099',badge:'Garage Toyota \u1EE7y quy\u1EC1n',reason:'Th\u1ECFa thu\u1EADn tr\u1EF1c ti\u1EBFp v\u1EDBi Toyota Vietnam. Ph\u1EE5 t\xF9ng genuine \u0111\u01B0\u1EE3c duy\u1EC7t t\u1EF1 \u0111\u1ED9ng. X\u1EED l\xFD 3 ng\xE0y l\xE0m vi\u1EC7c.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Nhanh nh\u1EA5t th\u1ECB tr\u01B0\u1EDDng',reason:'B\u1ED3i th\u01B0\u1EDDng trong 3 ng\xE0y l\xE0m vi\u1EC7c. M\u1EA1ng l\u01B0\u1EDBi garage r\u1ED9ng, ph\u1EE7 t\u1ED1t Toyota \u1EDF t\u1EC9nh th\xE0nh v\xE0 ngo\u1EA1i \xF4.'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'Ph\u1EE7 r\u1ED9ng',reason:'H\u1EC7 th\u1ED1ng garage to\xE0n qu\u1ED1c. Ph\xF9 h\u1EE3p xe Toyota th\u01B0\u1EDDng xuy\xEAn di chuy\u1EC3n li\xEAn t\u1EC9nh.'},
    ],
    notes:[
      {q:'Camry hybrid v\xE0 xe x\u0103ng th\u01B0\u1EDDng b\u1EA3o hi\u1EC3m c\xF3 kh\xE1c nhau kh\xF4ng?',a:'Kh\xF4ng kh\xE1c nhau v\u1EC1 ph\xED v\xE0 quy tr\xECnh. Motor \u0111i\u1EC7n h\u01B0 h\u1ECFng do tai n\u1EA1n \u0111\u01B0\u1EE3c b\u1ED3i th\u01B0\u1EDDng nh\u01B0 ph\u1EE5 t\xF9ng th\xF4ng th\u01B0\u1EDDng. Gi\xE1 tr\u1ECB b\u1ED3i th\u01B0\u1EDDng total loss cao h\u01A1n v\xEC gi\xE1 xe hybrid cao h\u01A1n xe x\u0103ng c\xF9ng model.'},
      {q:'Toyota CKD (l\u1EAFp r\xE1p t\u1EA1i VN) vs CBU (nh\u1EADp kh\u1EA9u) \u1EA3nh h\u01B0\u1EDFng BH th\u1EBF n\xE0o?',a:'Ph\xED BH kh\xF4ng b\u1ECB \u1EA3nh h\u01B0\u1EDFng b\u1EDFi ngu\u1ED3n g\u1ED1c. Xe CBU c\xF3 gi\xE1 tr\u1ECB th\u1EF1c t\u1EBF cao h\u01A1n CKD c\xF9ng d\xF2ng \u2014 n\xEAn khi x\u1EA3y ra total loss, m\u1EE9c b\u1ED3i th\u01B0\u1EDDng nh\u1EADn \u0111\u01B0\u1EE3c cao h\u01A1n.'},
      {q:'N\xEAn ch\u1ECDn NB n\xE0o \u0111\u1EC3 s\u1EEDa t\u1EA1i garage Toyota ch\xEDnh h\xE3ng sau tai n\u1EA1n?',a:'Liberty Insurance c\xF3 th\u1ECFa thu\u1EADn authorized repair tr\u1EF1c ti\u1EBFp v\u1EDBi Toyota Vietnam. Xe \u0111\u01B0\u1EE3c \u0111\u01B0a th\u1EB3ng v\xE0o Toyota \u1EE7y quy\u1EC1n, ph\u1EE5 t\xF9ng genuine \u0111\u01B0\u1EE3c duy\u1EC7t t\u1EF1 \u0111\u1ED9ng, kh\xF4ng c\u1EA7n ch\u1EDD gi\xE1m \u0111\u1ECBnh vi\xEAn ri\xEAng.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2605\u2605',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'R\u1EBB nh\u1EA5t',level:'good'},
      {label:'Ph\u1EE5 t\xF9ng',val:'D\u1EC5 t\xECm',level:'good'},
      {label:'Garage',val:'To\xE0n qu\u1ED1c',level:'good'},
    ],
    insight:{owners:6840,topModel:'Fortuner',monthly:4780,vs_estimate:+0.5,hcm:5120,hn:4290,breakdown:{bh:1000,fuel:3200,road:180,maint:400}},
    garages:[
      {name:'Toyota L\xFD Th\u01B0\u1EDDng Ki\u1EC7t',type:'official',city:'HCM',address:'555 L\xFD Th\u01B0\u1EDDng Ki\u1EC7t, Q.10',bh:['Liberty','PVI'],claims:840,rating:4.8,note:'\u0110\u1EA1i l\xFD Toyota ch\xEDnh h\xE3ng. Ph\u1EE5 t\xF9ng genuine, k\u1EF9 thu\u1EADt vi\xEAn \u0111\u01B0\u1EE3c \u0111\xE0o t\u1EA1o t\u1EA1i Nh\u1EADt.'},
      {name:'Toyota G\xF2 V\u1EA5p',type:'official',city:'HCM',address:'Quang Trung, G\xF2 V\u1EA5p',bh:['Liberty'],claims:610,rating:4.7,note:'L\u1EDBn nh\u1EA5t khu v\u1EF1c G\xF2 V\u1EA5p. D\u1ECBch v\u1EE5 nhanh, c\xF3 xe thay th\u1EBF khi s\u1EEDa ch\u1EEFa.'},
      {name:'Toyota Ho\xE0ng Mai',type:'official',city:'HN',address:'272 L\u0129nh Nam, Ho\xE0ng Mai',bh:['Liberty','B\u1EA3o Vi\u1EC7t'],claims:720,rating:4.7,note:'\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng l\u1EDBn nh\u1EA5t H\xE0 N\u1ED9i. Ph\u1EE7 t\u1ED1t khu v\u1EF1c ph\xEDa Nam th\u1EE7 \u0111\xF4.'},
      {name:'Garage Minh Trung Auto',type:'authorized',city:'HCM',address:'B\xECnh Th\u1EA1nh, HCM',bh:['PVI','B\u1EA3o Vi\u1EC7t'],claims:390,rating:4.6,note:'Garage \u1EE7y quy\u1EC1n BH. Chuy\xEAn Toyota 10+ n\u0103m, ph\u1EE5 t\xF9ng genuine, gi\xE1 th\u1EA5p h\u01A1n \u0111\u1EA1i l\xFD 15-20%.'},
      {name:'Auto Care Toyota C\u1EA7u Gi\u1EA5y',type:'authorized',city:'HN',address:'C\u1EA7u Gi\u1EA5y, H\xE0 N\u1ED9i',bh:['PVI'],claims:280,rating:4.5,note:'Garage uy t\xEDn c\u1ED9ng \u0111\u1ED3ng. \u0110\u01B0\u1EE3c recommend nhi\u1EC1u nh\u1EA5t tr\xEAn c\xE1c group ch\u1EE7 xe Toyota HN.'},
    ],
    scenarios:['collision','thuykick','parked'],
  },
  honda:{
    name:'Honda',origin:'Nh\u1EADt B\u1EA3n',color:'#CC0000',tagline:'Ni\u1EC1m vui v\u1EADn h\xE0nh \xB7 Tin c\u1EADy \xB7 Ti\u1EBFt ki\u1EC7m',
    fuels:['x\u0103ng'],popular:true,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Nh\u1EADt B\u1EA3n n\u1ED5i ti\u1EBFng v\u1EC1 \u0111\u1ED9ng c\u01A1 ti\u1EBFt ki\u1EC7m v\xE0 \u0111\u1ED9 b\u1EC1n cao. Honda City v\xE0 CR-V l\xE0 hai m\u1EABu b\xE1n ch\u1EA1y nh\u1EA5t ph\xE2n kh\xFAc, ph\xF9 h\u1EE3p ng\u01B0\u1EDDi d\xF9ng \u0111\xF4 th\u1ECB c\u1EA7n xe \u0111\xE1ng tin c\u1EADy h\u1EB1ng ng\xE0y.',
    models:[
      {name:'CR-V',type:'suv',bh:11,desc:'SUV 5 ch\u1ED7 ph\u1ED5 bi\u1EBFn',monthly:{bh:917,fuel:2600,reg:160,maint:280},slug:'cr-v',priceFrom:1059,priceTo:1219,
        variants:[
          {name:'L Turbo CVT',price:1059,engine:'1.5L Turbo 190hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'e:HEV RS CVT',price:1219,engine:'2.0L Hybrid 184hp',fuel:'X\u0103ng/\u0110i\u1EC7n',seats:5,drive:'AWD'},
        ],
        commonIssues:[
          {title:'R\xF2 d\u1EA7u \u0111\u1ED9ng c\u01A1 1.5T Turbo',km:'60.000+ km',severity:'high',desc:'Gio\u0103ng n\u1EAFp m\xE1y v\xE0 \u0111\u01B0\u1EDDng \u1ED1ng d\u1EA7u turbo 1.5L c\xF3 xu h\u01B0\u1EDBng r\xF2 r\u1EC9 sau 60.000km. Honda \u0111\xE3 c\u1EA3i ti\u1EBFn t\u1EEB \u0111\u1EDDi 2022 nh\u01B0ng xe c\u0169 c\u1EA7n ki\u1EC3m tra \u0111\u1ECBnh k\u1EF3.',cost:'3-8tr t\xF9y m\u1EE9c \u0111\u1ED9'},
          {title:'CVT rung khi kh\u1EDFi \u0111\u1ED9ng l\u1EA1nh',km:'30.000-60.000 km',severity:'medium',desc:'H\u1ED9p s\u1ED1 CVT rung nh\u1EB9 trong 1-2 ph\xFAt \u0111\u1EA7u bu\u1ED5i s\xE1ng. \u0110\u1EB7c t\xEDnh c\u1EE7a CVT Honda - c\u1EA7n h\xE2m m\xE1y 30 gi\xE2y tr\u01B0\u1EDBc khi \u0111i. Thay d\u1EA7u CVT \u0111\xFAng h\u1EA1n.',cost:'600k-1.2tr (thay d\u1EA7u CVT)'},
          {title:'L\u1ED7i c\u1EA3m bi\u1EBFn l\xF9i (2019-2021)',km:'20.000+ km',severity:'low',desc:'Camera l\xF9i b\u1ECB nhi\u1EC5u ho\u1EB7c \u0111\u01B0\u1EDDng k\u1EBB h\u01B0\u1EDBng d\u1EABn kh\xF4ng ch\xEDnh x\xE1c. Honda \u0111\xE3 ph\xE1t h\xE0nh update firmware - y\xEAu c\u1EA7u \u0111\u1EA1i l\xFD update mi\u1EC5n ph\xED.',cost:'0 (update firmware)'},
          {title:'Ti\u1EBFng k\xEAu gi\u1EA3m x\xF3c sau',km:'50.000+ km',severity:'medium',desc:'L\xF2 xo gi\u1EA3m x\xF3c sau CR-V hay ph\xE1t sinh ti\u1EBFng c\u1ED9c khi qua \u0111\u01B0\u1EDDng x\u1EA5u. Ki\u1EC3m tra v\xE0 b\u1ED5 sung m\u1EE1 b\xF4i tr\u01A1n ch\xE2n l\xF2 xo ho\u1EB7c thay bushings.',cost:'1-4tr/c\u1EB7p'},
        ],
        spareParts:[
          {name:'D\u1EA7u \u0111\u1ED9ng c\u01A1 0W-20 Turbo',interval:'5.000 km',cost:'500-900k',note:'Xe turbo n\xEAn thay s\u1EDBm h\u01A1n xe th\u01B0\u1EDDng - 5.000km'},
          {name:'D\u1EA7u h\u1ED9p s\u1ED1 CVT',interval:'30.000 km',cost:'600k-1.2tr',note:'Honda HCF-2 ho\u1EB7c t\u01B0\u01A1ng \u0111\u01B0\u01A1ng - kh\xF4ng d\xF9ng CVT th\u01B0\u1EDDng'},
          {name:'L\u1ECDc gi\xF3 cabin',interval:'15.000 km',cost:'150-300k',note:'Honda CR-V l\u1ECDc cabin t\u01B0\u01A1ng \u0111\u1ED1i d\u1EC5 thay t\u1EF1 l\xE0m'},
          {name:'M\xE1 phanh tr\u01B0\u1EDBc',interval:'40.000-50.000 km',cost:'1.5-3tr/c\u1EB7p',note:''},
          {name:'Bugi iridium 1.5T',interval:'60.000 km',cost:'600k-1tr/b\u1ED9',note:'Xe turbo \u0111\u1ED1t bugi nhanh h\u01A1n xe th\u01B0\u1EDDng'},
          {name:'L\u1ECDc gi\xF3 \u0111\u1ED9ng c\u01A1',interval:'15.000 km',cost:'200-400k',note:''},
        ]},
      {name:'City',type:'sedan',bh:7,desc:'Sedan h\u1EA1ng B',monthly:{bh:583,fuel:2000,reg:130,maint:200},slug:'city',priceFrom:499,priceTo:599,
        variants:[
          {name:'1.5 MT',price:499,engine:'1.5L DOHC 119hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.5 CVT',price:539,engine:'1.5L DOHC 119hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.5 RS CVT',price:599,engine:'1.5L DOHC 119hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
        ]},
      {name:'Civic',type:'sedan',bh:9,desc:'Sedan sporty h\u1EA1ng C',monthly:{bh:750,fuel:2400,reg:150,maint:250},slug:'civic',priceFrom:769,priceTo:929,
        variants:[
          {name:'1.5 Turbo CVT G',price:769,engine:'1.5L Turbo 177hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.5 Turbo CVT RS',price:869,engine:'1.5L Turbo 177hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'e:HEV RS CVT',price:929,engine:'2.0L Hybrid 184hp',fuel:'X\u0103ng/\u0110i\u1EC7n',seats:5,drive:'FWD'},
        ],
        commonIssues:[
          {title:'Ti\xEAu hao d\u1EA7u nh\u1EDBt cao',km:'10.000-30.000 km',severity:'medium',desc:'\u0110\u1ED9ng c\u01A1 1.5T Civic th\u1EBF h\u1EC7 11 (2021+) c\xF3 th\u1EC3 ti\xEAu hao 0.5-1L d\u1EA7u m\u1ED7i 5.000km. Honda th\u1EEBa nh\u1EADn v\xE0 \u0111\xE3 c\u1EA3i ti\u1EBFn piston rings t\u1EEB 2022. Ki\u1EC3m tra m\u1EE9c d\u1EA7u m\u1ED7i 1.000km.',cost:'B\u1ED5 sung d\u1EA7u \u0111\u1ECBnh k\u1EF3 ~200-400k/l\u1EA7n'},
          {title:'L\u1ED7i c\u1EA3m bi\u1EBFn Honda SENSING',km:'B\u1EA5t k\u1EF3',severity:'low',desc:'Camera ADAS tr\u01B0\u1EDBc k\xEDnh l\xE1i nh\u1EA1y c\u1EA3m v\u1EDBi \xF4 nhi\u1EC5m m\u1EB7t k\xEDnh. H\u1EC7 th\u1ED1ng c\xF3 th\u1EC3 t\u1EAFt \u0111\u1ED9t ng\u1ED9t khi k\xEDnh b\u1EA9n ho\u1EB7c nhi\u1EC7t \u0111\u1ED9 cao. V\u1EC7 sinh k\xEDnh v\xE0 khu v\u1EF1c camera.',cost:'0 (t\u1EF1 v\u1EC7 sinh)'},
          {title:'Ti\u1EBFng rung t\u1EEB h\u1ED9p s\u1ED1 CVT \u1EDF 60-80km/h',km:'20.000-50.000 km',severity:'medium',desc:'Ti\u1EBFng vo ve ho\u1EB7c rung nh\u1EB9 \u1EDF d\u1EA3i t\u1ED1c 60-80km/h do \u0111\u1EB7c t\xEDnh CVT. Thay d\u1EA7u CVT v\xE0 ki\u1EC3m tra mounting h\u1ED9p s\u1ED1.',cost:'600k-2tr'},
          {title:'\u0110\xE8n h\u1EADu \u0111\u1ECDng n\u01B0\u1EDBc',km:'B\u1EA5t k\u1EF3',severity:'low',desc:'C\u1EE5m \u0111\xE8n h\u1EADu LED Civic th\u1EBF h\u1EC7 11 hay \u0111\u1ECDng s\u01B0\u01A1ng khi nhi\u1EC7t \u0111\u1ED9 ch\xEAnh l\u1EC7ch cao-th\u1EA5p. Honda c\xF3 TSB v\u1EC1 v\u1EA5n \u0111\u1EC1 n\xE0y - y\xEAu c\u1EA7u \u0111\u1EA1i l\xFD ki\u1EC3m tra v\xE0 thay th\u1EBF mi\u1EC5n ph\xED n\u1EBFu c\xF2n b\u1EA3o h\xE0nh.',cost:'0 (b\u1EA3o h\xE0nh) / 3-5tr (h\u1EBFt b\u1EA3o h\xE0nh)'},
        ],
        spareParts:[
          {name:'D\u1EA7u \u0111\u1ED9ng c\u01A1 0W-20 Full Syn',interval:'5.000 km',cost:'500-900k',note:'Xe turbo - thay s\u1EDBm h\u01A1n xe th\u01B0\u1EDDng'},
          {name:'D\u1EA7u CVT HCF-2',interval:'30.000 km',cost:'600k-1tr',note:'Ch\u1EC9 d\xF9ng Honda genuine - kh\xF4ng pha lo\u1EA1i kh\xE1c'},
          {name:'Bugi iridium NGK',interval:'60.000 km',cost:'500-900k/b\u1ED9',note:'4 bugi cho 1.5T'},
          {name:'L\u1ECDc gi\xF3 cabin',interval:'15.000 km',cost:'150-300k',note:''},
          {name:'M\xE1 phanh tr\u01B0\u1EDBc',interval:'35.000-45.000 km',cost:'1.2-2.5tr/c\u1EB7p',note:'Civic nh\u1EB9 - phanh \xEDt m\xF2n h\u01A1n SUV'},
          {name:'L\u1ECDc d\u1EA7u',interval:'5.000 km',cost:'100-200k',note:'Thay c\xF9ng d\u1EA7u \u0111\u1ED9ng c\u01A1'},
        ]},
      {name:'HR-V',type:'suv',bh:9,desc:'Crossover compact',monthly:{bh:750,fuel:2200,reg:148,maint:240},slug:'hr-v',priceFrom:699,priceTo:829,
        variants:[
          {name:'1.5 CVT L',price:699,engine:'1.5L DOHC 119hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'e:HEV RS CVT',price:829,engine:'1.5L Hybrid 131hp',fuel:'X\u0103ng/\u0110i\u1EC7n',seats:5,drive:'FWD'},
        ]},
      {name:'BR-V',type:'suv',bh:8,desc:'SUV 7 ch\u1ED7 t\u1EA7m trung',monthly:{bh:667,fuel:2400,reg:145,maint:230},slug:'br-v',priceFrom:661,priceTo:761,
        variants:[
          {name:'1.5 MT G',price:661,engine:'1.5L DOHC 119hp',fuel:'X\u0103ng',seats:7,drive:'FWD'},
          {name:'1.5 CVT L',price:761,engine:'1.5L DOHC 119hp',fuel:'X\u0103ng',seats:7,drive:'FWD'},
        ]},
      {name:'Accord',type:'sedan',bh:14,desc:'Sedan h\u1EA1ng D',monthly:{bh:1167,fuel:2800,reg:180,maint:350},slug:'accord',priceFrom:1319,priceTo:1589,
        variants:[
          {name:'1.5 Turbo CVT',price:1319,engine:'1.5L Turbo 192hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'e:HEV CVT',price:1589,engine:'2.0L Hybrid 212hp',fuel:'X\u0103ng/\u0110i\u1EC7n',seats:5,drive:'FWD'},
        ]},
      {name:'Brio',type:'sedan',bh:5,desc:'Hatchback \u0111\xF4 th\u1ECB',monthly:{bh:417,fuel:1800,reg:120,maint:170},slug:'brio',priceFrom:418,priceTo:458,
        variants:[
          {name:'1.2 MT',price:418,engine:'1.2L SOHC 90hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.2 CVT',price:458,engine:'1.2L SOHC 90hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
        ]},
    ],
    topInsurers:[
      {name:'Liberty Insurance',color:'#2E4099',badge:'Garage Honda \u1EE7y quy\u1EC1n',reason:'Th\u1ECFa thu\u1EADn garage \u1EE7y quy\u1EC1n Honda Vietnam. Ph\u1EE5 t\xF9ng genuine \u0111\u01B0\u1EE3c duy\u1EC7t, x\u1EED l\xFD 3-4 ng\xE0y.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Nhanh nh\u1EA5t',reason:'X\u1EED l\xFD b\u1ED3i th\u01B0\u1EDDng trong 3 ng\xE0y, m\u1EA1ng l\u01B0\u1EDBi garage r\u1ED9ng t\u1ED1t cho Honda \u1EDF TP l\u1EDBn.'},
      {name:'PJICO',color:'#CC0000',badge:'T\u1ED1t cho t\u1EC9nh th\xE0nh',reason:'Ph\u1EE7 r\u1ED9ng \u1EDF t\u1EC9nh th\xE0nh, ph\xF9 h\u1EE3p Honda City v\xE0 Brio \u1EDF v\xF9ng ven v\xE0 ngo\u1EA1i t\u1EC9nh.'},
    ],
    notes:[
      {q:'Honda CR-V hybrid v\xE0 x\u0103ng b\u1EA3o hi\u1EC3m c\xF3 kh\xE1c nhau kh\xF4ng?',a:'C\xF9ng m\u1EE9c ph\xED. Motor \u0111i\u1EC7n c\u1EE7a hybrid \u0111\u01B0\u1EE3c BH th\xE2n v\u1ECF b\u1EA3o v\u1EC7 khi tai n\u1EA1n. CR-V hybrid tr\u1ECB gi\xE1 cao h\u01A1n n\xEAn kh\u1EA5u hao ch\u1EADm h\u01A1n, b\u1ED3i th\u01B0\u1EDDng total loss nh\u1EADn nhi\u1EC1u h\u01A1n trong 5 n\u0103m \u0111\u1EA7u.'},
      {q:'N\xEAn s\u1EEDa xe Honda t\u1EA1i \u0111\u1EA1i l\xFD ch\xEDnh h\xE3ng hay garage ngo\xE0i \u0111\u1EC3 BH thanh to\xE1n \u0111\u01B0\u1EE3c?',a:'BH th\xE2n v\u1ECF thanh to\xE1n c\u1EA3 hai. S\u1EEDa t\u1EA1i \u0111\u1EA1i l\xFD Honda \u1EE7y quy\u1EC1n \u0111\u1EA3m b\u1EA3o ph\u1EE5 t\xF9ng genuine v\xE0 b\u1EA3o h\xE0nh c\xF4ng vi\u1EC7c. Liberty v\xE0 PVI c\xF3 th\u1ECFa thu\u1EADn tr\u1EF1c ti\u1EBFp v\u1EDBi Honda Vietnam \u2014 ch\u1ECDn 2 NB n\xE0y \u0111\u1EC3 kh\xF4ng qua kh\xE2u gi\xE1m \u0111\u1ECBnh ri\xEAng.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2605\u2606',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'R\u1EBB',level:'good'},
      {label:'Ph\u1EE5 t\xF9ng',val:'D\u1EC5 t\xECm',level:'good'},
      {label:'Garage',val:'R\u1ED9ng kh\u1EAFp',level:'good'},
    ],
    insight:{owners:5210,topModel:'CR-V',monthly:3960,vs_estimate:-2.1,hcm:4250,hn:3580,breakdown:{bh:917,fuel:2600,road:160,maint:280}},
    garages:[
      {name:'Honda \xD4 t\xF4 S\xE0i G\xF2n - B\xECnh D\u01B0\u01A1ng',type:'official',city:'HCM',address:'B\xECnh D\u01B0\u01A1ng',bh:['Liberty','PVI'],claims:690,rating:4.8,note:'\u0110\u1EA1i l\xFD Honda ch\xEDnh h\xE3ng. Ph\u1EE5 t\xF9ng genuine, k\u1EF9 thu\u1EADt vi\xEAn Honda-certified.'},
      {name:'Honda \xD4 t\xF4 M\u1EF9 \u0110\xECnh',type:'official',city:'HN',address:'M\u1EF9 \u0110\xECnh, Nam T\u1EEB Li\xEAm',bh:['Liberty','PVI'],claims:580,rating:4.7,note:'\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng l\u1EDBn nh\u1EA5t H\xE0 N\u1ED9i. Chuy\xEAn Honda City, CR-V, Civic.'},
      {name:'Garage Ho\xE0ng Gia Auto',type:'authorized',city:'HCM',address:'T\xE2n B\xECnh, HCM',bh:['PVI','PJICO'],claims:340,rating:4.6,note:'Garage \u1EE7y quy\u1EC1n BH. Chuy\xEAn Honda \u0111\xF4 th\u1ECB, gi\xE1 d\u1ECBch v\u1EE5 c\u1EA1nh tranh, ph\u1EE5 t\xF9ng genuine.'},
      {name:'Auto Honda \u0110\u1ED1ng \u0110a',type:'authorized',city:'HN',address:'\u0110\u1ED1ng \u0110a, H\xE0 N\u1ED9i',bh:['PJICO'],claims:210,rating:4.5,note:'\u0110\u01B0\u1EE3c c\u1ED9ng \u0111\u1ED3ng ch\u1EE7 xe Honda HN \u0111\xE1nh gi\xE1 cao nh\u1EA5t khu v\u1EF1c n\u1ED9i th\xE0nh.'},
    ],
    scenarios:['collision','parked','glass'],
  },
  hyundai:{
    name:'Hyundai',origin:'H\xE0n Qu\u1ED1c',color:'#002C5F',tagline:'Thi\u1EBFt k\u1EBF hi\u1EC7n \u0111\u1EA1i \xB7 C\xF4ng ngh\u1EC7 H\xE0n Qu\u1ED1c',
    fuels:['x\u0103ng','\u0111i\u1EC7n'],popular:true,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u H\xE0n Qu\u1ED1c d\u1EABn \u0111\u1EA7u xu h\u01B0\u1EDBng xe \u0111i\u1EC7n t\u1EA1i Vi\u1EC7t Nam v\u1EDBi Ioniq 6 v\xE0 Kona Electric. D\xF2ng xe x\u0103ng Tucson v\xE0 Santa Fe ti\u1EBFp t\u1EE5c ph\u1ED5 bi\u1EBFn nh\u1EDD thi\u1EBFt k\u1EBF hi\u1EC7n \u0111\u1EA1i v\xE0 c\xF4ng ngh\u1EC7 an to\xE0n t\u1ED1t.',
    models:[
      {name:'Tucson',type:'suv',bh:10,desc:'SUV 5 ch\u1ED7 ph\u1ED5 bi\u1EBFn',monthly:{bh:833,fuel:2600,reg:158,maint:270},slug:'tucson',priceFrom:799,priceTo:939,
        variants:[
          {name:'2.0 AT Ti\xEAu chu\u1EA9n',price:799,engine:'2.0L MPI 156hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.0 AT \u0110\u1EB7c bi\u1EC7t',price:869,engine:'2.0L MPI 156hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.6T AT AWD',price:939,engine:'1.6L Turbo 178hp',fuel:'X\u0103ng',seats:5,drive:'AWD'},
        ],
        commonIssues:[
          {title:'R\xF2 r\u1EC9 \u0111\u01B0\u1EDDng \u1ED1ng \u0111i\u1EC1u h\xF2a',km:'30.000-60.000 km',severity:'medium',desc:'H\u1EC7 th\u1ED1ng \u0111i\u1EC1u h\xF2a Tucson 2022-2023 c\xF3 t\u1EF7 l\u1EC7 r\xF2 r\u1EC9 refrigerant kh\xE1 cao. Ki\u1EC3m tra khi \u0111i\u1EC1u h\xF2a k\xE9m l\u1EA1nh - c\u1EA7n t\xECm \u0111i\u1EC3m r\xF2, kh\xF4ng ch\u1EC9 n\u1EA1p gas.',cost:'1-5tr t\xF9y \u0111i\u1EC3m r\xF2'},
          {title:'Ti\u1EBFng k\xEAu tay l\xE1i EPS',km:'20.000-50.000 km',severity:'medium',desc:'Ti\u1EBFng k\xEAu c\u1ED9t l\xE1i khi \u0111\xE1nh l\xE1i \u1EDF t\u1ED1c \u0111\u1ED9 th\u1EA5p. Hyundai c\xF3 TSB v\u1EC1 b\xF4i tr\u01A1n kh\u1EDBp c\u1ED9t l\xE1i - s\u1EEDa mi\u1EC5n ph\xED trong b\u1EA3o h\xE0nh.',cost:'0 (b\u1EA3o h\xE0nh) / 500k-2tr'},
          {title:'\u0110\xE8n check engine c\u1EA3m bi\u1EBFn O2',km:'50.000+ km',severity:'low',desc:'C\u1EA3m bi\u1EBFn O2 b\xE1o l\u1ED7i do nhi\xEAn li\u1EC7u k\xE9m ch\u1EA5t l\u01B0\u1EE3ng. D\xF9ng RON 95 tr\u1EDF l\xEAn, tr\xE1nh x\u0103ng pha.',cost:'1-3tr (thay c\u1EA3m bi\u1EBFn)'},
          {title:'L\u1ECFng \u1ED1p nh\u1EF1a n\u1ED9i th\u1EA5t',km:'B\u1EA5t k\u1EF3',severity:'low',desc:'\u1ED0p c\u1EEDa v\xE0 taplo hay r\xEDt khi qua \u0111\u01B0\u1EDDng x\u1EA5u. Nh\xE9t foam c\xE1ch \xE2m v\xE0o khe h\u1EDF l\xE0 gi\u1EA3i ph\xE1p nhanh.',cost:'0-200k (t\u1EF1 x\u1EED l\xFD)'},
        ],
        spareParts:[
          {name:'D\u1EA7u \u0111\u1ED9ng c\u01A1 5W-30',interval:'10.000 km',cost:'350-600k',note:'Tucson 2.0 MPI thay 10.000km'},
          {name:'D\u1EA7u h\u1ED9p s\u1ED1 AT',interval:'60.000 km',cost:'600k-1tr',note:'Hyundai SP-IV'},
          {name:'L\u1ECDc gi\xF3 cabin',interval:'15.000 km',cost:'150-300k',note:''},
          {name:'M\xE1 phanh tr\u01B0\u1EDBc',interval:'40.000-55.000 km',cost:'1.5-3tr/c\u1EB7p',note:''},
          {name:'L\u1ECDc gi\xF3 \u0111\u1ED9ng c\u01A1',interval:'15.000 km',cost:'200-350k',note:''},
          {name:'Bugi iridium',interval:'80.000 km',cost:'500k-1tr/b\u1ED9',note:'4 bugi cho 2.0L'},
        ]},
      {name:'Santa Fe',type:'suv',bh:14,desc:'SUV 7 ch\u1ED7',monthly:{bh:1167,fuel:3000,reg:180,maint:350},slug:'santa-fe',priceFrom:1069,priceTo:1315,
        variants:[
          {name:'Premium 2.2D',price:1069,engine:'2.2L Diesel Turbo',fuel:'D\u1EA7u',seats:7,drive:'FWD'},
          {name:'Luxury 2.2D',price:1169,engine:'2.2L Diesel Turbo',fuel:'D\u1EA7u',seats:7,drive:'FWD'},
          {name:'Luxury 2.2D AWD',price:1259,engine:'2.2L Diesel Turbo',fuel:'D\u1EA7u',seats:7,drive:'AWD'},
          {name:'Calligraphy 2.2D AWD',price:1315,engine:'2.2L Diesel Turbo',fuel:'D\u1EA7u',seats:7,drive:'AWD'},
        ],
        competitors:['cx-8','sorento'],
        modelInsight:{owners:1240,monthly:4700,vs_estimate:+1.8,hcm:5020,hn:4280,breakdown:{bh:1167,fuel:3000,road:180,maint:350}},
        modelNotes:[
          {q:'Santa Fe Calligraphy AWD vs Luxury c\xF3 \u0111\xE1ng gi\xE1 h\u01A1n kh\xF4ng?',a:'Calligraphy AWD \u0111\u1EAFt h\u01A1n 146tr nh\u01B0ng th\xEAm h\u1EC7 d\u1EABn \u0111\u1ED9ng 4 b\xE1nh, gh\u1EBF da Nappa, c\u1EEDa s\u1ED5 tr\u1EDDi to\xE0n c\u1EA3nh v\xE0 h\u1EC7 th\u1ED1ng \xE2m thanh Harman Kardon. V\u1EC1 chi ph\xED v\u1EADn h\xE0nh kh\xF4ng kh\xE1c bi\u1EC7t \u0111\xE1ng k\u1EC3 - AWD t\u1ED1n x\u0103ng h\u01A1n kho\u1EA3ng 5-8%.'},
          {q:'Santa Fe Diesel vs x\u0103ng - n\xEAn ch\u1ECDn lo\u1EA1i n\xE0o cho chi ph\xED s\u1EED d\u1EE5ng?',a:'Diesel ti\u1EBFt ki\u1EC7m nhi\xEAn li\u1EC7u h\u01A1n 15-20% nh\u01B0ng chi ph\xED b\u1EA3o d\u01B0\u1EE1ng \u0111\u1ECBnh k\u1EF3 cao h\u01A1n kho\u1EA3ng 10%. T\u1ED5ng chi ph\xED v\u1EADn h\xE0nh Diesel th\u1EAFng n\u1EBFu ch\u1EA1y tr\xEAn 1.500km/th\xE1ng. D\u01B0\u1EDBi 1.000km/th\xE1ng, x\u0103ng h\u1EE3p l\xFD h\u01A1n.'},
        ],
        inspectionSchedule:[
          {age:'0-3 n\u0103m',interval:'Mi\u1EC5n \u0111\u0103ng ki\u1EC3m',note:'Xe m\u1EDBi kh\xF4ng c\u1EA7n \u0111\u0103ng ki\u1EC3m trong 3 n\u0103m \u0111\u1EA7u'},
          {age:'3-7 n\u0103m',interval:'2 n\u0103m/l\u1EA7n',note:'\u0110\u0103ng ki\u1EC3m \u0111\u1ECBnh k\u1EF3 24 th\xE1ng'},
          {age:'7-12 n\u0103m',interval:'1 n\u0103m/l\u1EA7n',note:'\u0110\u0103ng ki\u1EC3m h\xE0ng n\u0103m'},
          {age:'Tr\xEAn 12 n\u0103m',interval:'6 th\xE1ng/l\u1EA7n',note:'\u0110\u0103ng ki\u1EC3m 2 l\u1EA7n/n\u0103m'},
        ],
        serviceIntervals:[
          {km:'5.000 km',task:'Thay d\u1EA7u m\xE1y + l\u1ECDc d\u1EA7u',cost:'1.2-1.8'},
          {km:'10.000 km',task:'Thay l\u1ECDc gi\xF3 \u0111\u1ED9ng c\u01A1 + ki\u1EC3m tra phanh',cost:'0.8-1.2'},
          {km:'20.000 km',task:'Thay l\u1ECDc nhi\xEAn li\u1EC7u + d\u1EA7u h\u1ED9p s\u1ED1',cost:'2.5-3.5'},
          {km:'40.000 km',task:'Thay b\u1ED9 d\xE2y curoa + b\u01A1m n\u01B0\u1EDBc',cost:'3.0-4.5'},
          {km:'60.000 km',task:'Thay d\u1EA7u c\u1EA7u + ki\u1EC3m tra g\u1EA7m to\xE0n b\u1ED9',cost:'2.0-3.0'},
        ],
        commonIssues:[
          {title:'H\u1ED9p s\u1ED1 DCT gi\u1EADt \u1EDF t\u1ED1c \u0111\u1ED9 th\u1EA5p',km:'20.000-50.000 km',severity:'medium',desc:'Hi\u1EC7n t\u01B0\u1EE3ng rung gi\u1EADt khi v\xE0o s\u1ED1 1-2 \u1EDF t\u1ED1c \u0111\u1ED9 d\u01B0\u1EDBi 20km/h. \u0110\u1EB7c th\xF9 h\u1ED9p s\u1ED1 ly h\u1EE3p k\xE9p Hyundai, c\u1EA7n c\u1EADp nh\u1EADt ph\u1EA7n m\u1EC1m TCU ho\u1EB7c thay d\u1EA7u ly h\u1EE3p.',cost:'2-5 tri\u1EC7u'},
          {title:'C\u1EA3m bi\u1EBFn \xE1p su\u1EA5t l\u1ED1p b\xE1o sai',km:'30.000+ km',severity:'low',desc:'TPMS b\xE1o c\u1EA3nh b\xE1o d\xF9 l\u1ED1p \u0111\u1EE7 h\u01A1i. Th\u01B0\u1EDDng do pin c\u1EA3m bi\u1EBFn y\u1EBFu ho\u1EB7c c\u1EA7n reset h\u1EC7 th\u1ED1ng.',cost:'0.5-2 tri\u1EC7u/l\u1ED1p'},
          {title:'R\xF2 r\u1EC9 d\u1EA7u turbo diesel',km:'80.000+ km',severity:'high',desc:'R\u1EC9 d\u1EA7u t\u1EA1i \u1ED1ng d\u1EA7u h\u1ED3i turbo ho\u1EB7c gio\u0103ng n\u1EAFp m\xE1y. C\u1EA7n ki\u1EC3m tra \u0111\u1ECBnh k\u1EF3 sau 80.000km, x\u1EED l\xFD s\u1EDBm tr\xE1nh h\u1ECFng turbo.',cost:'5-15 tri\u1EC7u'},
          {title:'Ti\u1EBFng k\xEAu gi\u1EA3m x\xF3c tr\u01B0\u1EDBc',km:'40.000-70.000 km',severity:'medium',desc:'Ti\u1EBFng c\u1ED9c c\u1ED9c khi qua \u1ED5 g\xE0 do cao su ch\xE2n gi\u1EA3m x\xF3c l\xE3o h\xF3a. Thay c\u1EB7p cao su ho\u1EB7c c\u1EA3 c\u1EE5m gi\u1EA3m x\xF3c.',cost:'3-8 tri\u1EC7u/c\u1EB7p'},
        ],
      },
      {name:'Accent',type:'sedan',bh:6,desc:'Sedan h\u1EA1ng B',monthly:{bh:500,fuel:1900,reg:128,maint:190},slug:'accent',priceFrom:439,priceTo:559,
        variants:[
          {name:'1.4 MT Ti\xEAu chu\u1EA9n',price:439,engine:'1.4L MPI 100hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.4 AT Ti\xEAu chu\u1EA9n',price:479,engine:'1.4L MPI 100hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.4 AT \u0110\u1EB7c bi\u1EC7t',price:559,engine:'1.4L MPI 100hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
        ]},
      {name:'Creta',type:'suv',bh:8,desc:'Crossover compact',monthly:{bh:667,fuel:2200,reg:145,maint:230},slug:'creta',priceFrom:599,priceTo:749,
        variants:[
          {name:'1.5 AT Ti\xEAu chu\u1EA9n',price:599,engine:'1.5L MPI 115hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.5T AT \u0110\u1EB7c bi\u1EC7t',price:699,engine:'1.5L Turbo 158hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.5T AT Cao c\u1EA5p',price:749,engine:'1.5L Turbo 158hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
        ]},
      {name:'Ioniq 6',type:'ev',bh:18,desc:'Sedan \u0111i\u1EC7n cao c\u1EA5p',monthly:{bh:1500,fuel:1100,reg:0,maint:150},slug:'ioniq-6',priceFrom:1099,priceTo:1499,
        variants:[
          {name:'RWD Standard',price:1099,engine:'EV 151kW',fuel:'\u0110i\u1EC7n',seats:5,drive:'FWD'},
          {name:'RWD Long Range',price:1299,engine:'EV 168kW 614km',fuel:'\u0110i\u1EC7n',seats:5,drive:'FWD'},
          {name:'AWD Long Range',price:1499,engine:'EV 239kW 519km',fuel:'\u0110i\u1EC7n',seats:5,drive:'AWD'},
        ]},
      {name:'Kona Electric',type:'ev',bh:12,desc:'SUV \u0111i\u1EC7n \u0111\xF4 th\u1ECB',monthly:{bh:1000,fuel:850,reg:0,maint:120},slug:'kona-electric',priceFrom:639,priceTo:759,
        variants:[
          {name:'Standard Range',price:639,engine:'EV 100kW 307km',fuel:'\u0110i\u1EC7n',seats:5,drive:'FWD'},
          {name:'Long Range',price:759,engine:'EV 160kW 481km',fuel:'\u0110i\u1EC7n',seats:5,drive:'FWD'},
        ]},
    ],
    topInsurers:[
      {name:'MIC Insurance',color:'#E52A2A',badge:'Xe \u0111i\u1EC7n',reason:'Kinh nghi\u1EC7m x\u1EED l\xFD b\u1ED3i th\u01B0\u1EDDng xe \u0111i\u1EC7n Hyundai. C\xF3 kinh nghi\u1EC7m v\u1EDBi pin EV v\xE0 quy tr\xECnh x\u1EED l\xFD ri\xEAng.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Nhanh nh\u1EA5t',reason:'X\u1EED l\xFD nhanh, m\u1EA1ng l\u01B0\u1EDBi garage r\u1ED9ng cho Hyundai x\u0103ng (Tucson, Santa Fe, Accent).'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'\u1ED4n \u0111\u1ECBnh',reason:'Uy t\xEDn l\xE2u \u0111\u1EDDi, ph\xF9 h\u1EE3p cho Hyundai Accent v\xE0 Tucson \u1EDF th\u1ECB tr\u01B0\u1EDDng ph\u1ED5 th\xF4ng.'},
    ],
    notes:[
      {q:'Xe \u0111i\u1EC7n Hyundai (Ioniq 6, Kona EV) c\xF3 \u0111\u01B0\u1EE3c b\u1EA3o v\u1EC7 kh\xF4ng?',a:'C\xF3. G\xF3i b\u1EA3o v\u1EC7 xe bao g\u1ED3m th\xE2n xe v\xE0 c\xE1c b\u1ED9 ph\u1EADn c\u01A1 kh\xED. N\u1EBFu mu\u1ED1n t\xE1ch ri\xEAng ph\u1EA7n pin \u0111i\u1EC7n, c\u1EA7n h\u1ECFi r\xF5 ph\u1EA1m vi c\u1EE7a t\u1EEBng nh\xE0 cung c\u1EA5p.'},
      {q:'Hyundai nh\u1EADp t\u1EEB Th\xE1i Lan v\u1EC1 VN, ph\u1EE5 t\xF9ng sau tai n\u1EA1n c\xF3 kh\xF3 t\xECm kh\xF4ng?',a:'M\u1ED9t s\u1ED1 ph\u1EE5 t\xF9ng body \u0111\u1EB7c th\xF9 c\u1EA7n \u0111\u1EB7t h\xE0ng th\xEAm 1-2 tu\u1EA7n. Khuy\u1EBFn ngh\u1ECB ch\u1ECDn NB c\xF3 garage Hyundai \u1EE7y quy\u1EC1n \u0111\u1EC3 \u0111\u1EA3m b\u1EA3o ph\u1EE5 t\xF9ng genuine v\xE0 tr\xE1nh ch\u1EDD \u0111\u1EE3i.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2605\u2606',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Trung b\xECnh',level:'mid'},
      {label:'Ph\u1EE5 t\xF9ng',val:'T\u01B0\u01A1ng \u0111\u1ED1i',level:'mid'},
      {label:'Xe \u0111i\u1EC7n',val:'H\xE0ng \u0111\u1EA7u',level:'high'},
    ],
    insight:{owners:3180,topModel:'Tucson',monthly:3840,vs_estimate:+1.2,hcm:4100,hn:3490,breakdown:{bh:833,fuel:2600,road:158,maint:270}},
    garages:[
      {name:'Hyundai Th\xE0nh C\xF4ng - L\xE1ng H\u1EA1',type:'official',city:'HN',address:'L\xE1ng H\u1EA1, \u0110\u1ED1ng \u0110a',bh:['PVI','B\u1EA3o Vi\u1EC7t'],claims:510,rating:4.7,note:'\u0110\u1EA1i l\xFD Hyundai ch\xEDnh h\xE3ng l\u1EDBn nh\u1EA5t HN. Chuy\xEAn Tucson, Santa Fe, Ioniq 6.'},
      {name:'Hyundai An L\u1EA1c',type:'official',city:'HCM',address:'B\xECnh T\xE2n, HCM',bh:['MIC','PVI'],claims:470,rating:4.7,note:'\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng HCM. C\xF3 k\u1EF9 thu\u1EADt vi\xEAn chuy\xEAn xe \u0111i\u1EC7n Ioniq 6, Kona EV.'},
      {name:'Garage EV Care Hyundai',type:'authorized',city:'HCM',address:'Qu\u1EADn 7, HCM',bh:['MIC'],claims:180,rating:4.8,note:'Chuy\xEAn s\xE2u xe \u0111i\u1EC7n Hyundai. K\u1EF9 thu\u1EADt vi\xEAn \u0111\u01B0\u1EE3c \u0111\xE0o t\u1EA1o v\u1EC1 pin EV v\xE0 h\u1EC7 th\u1ED1ng ADAS.'},
    ],
    scenarios:['collision','thuykick','theft'],
  },
  kia:{
    name:'Kia',origin:'H\xE0n Qu\u1ED1c',color:'#05141F',tagline:'Movement that inspires \xB7 Thi\u1EBFt k\u1EBF t\xE1o b\u1EA1o',
    fuels:['x\u0103ng','\u0111i\u1EC7n'],popular:true,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u H\xE0n Qu\u1ED1c n\u1ED5i b\u1EADt v\u1EDBi thi\u1EBFt k\u1EBF t\xE1o b\u1EA1o v\xE0 gi\xE1 tr\u1ECB trang b\u1ECB t\u1ED1t nh\u1EA5t ph\xE2n kh\xFAc. Kia Seltos v\xE0 Carnival l\xE0 nh\u1EEFng m\u1EABu b\xE1n ch\u1EA1y h\xE0ng \u0111\u1EA7u, \u0111\u01B0\u1EE3c chu\u1ED9ng b\u1EDFi s\u1EF1 k\u1EBFt h\u1EE3p gi\u1EEFa phong c\xE1ch v\xE0 th\u1EF1c d\u1EE5ng.',
    models:[
      {name:'Seltos',type:'suv',bh:9,desc:'Crossover compact',monthly:{bh:750,fuel:2200,reg:148,maint:240},slug:'seltos',priceFrom:629,priceTo:769,
        variants:[
          {name:'1.4T Premium MT',price:629,engine:'1.4L Turbo 138hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.4T Premium AT',price:679,engine:'1.4L Turbo 138hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.4T Luxury AT',price:719,engine:'1.4L Turbo 138hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.4T GT-Line AT',price:769,engine:'1.4L Turbo 138hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
        ],
        commonIssues:[
          {title:'H\u1ED9p s\u1ED1 DCT gi\u1EADt \u1EDF t\u1ED1c \u0111\u1ED9 th\u1EA5p',km:'10.000-40.000 km',severity:'medium',desc:'H\u1ED9p s\u1ED1 ly h\u1EE3p k\xE9p DCT 7 c\u1EA5p Kia gi\u1EADt c\u1ED9c khi \u0111ang \u1EDF s\u1ED1 1-2 t\u1ED1c \u0111\u1ED9 th\u1EA5p. Update ph\u1EA7n m\u1EC1m TCU t\u1EEB \u0111\u1EA1i l\xFD th\u01B0\u1EDDng c\u1EA3i thi\u1EC7n. Thay d\u1EA7u DCT \u0111\xFAng h\u1EA1n.',cost:'0 (update TCU) / 800k-1.5tr (thay d\u1EA7u)'},
          {title:'Rung nh\u1EB9 khi phanh \u1EDF t\u1ED1c \u0111\u1ED9 cao',km:'20.000-50.000 km',severity:'medium',desc:'\u0110\u0129a phanh b\u1ECB bi\u1EBFn d\u1EA1ng nhi\u1EC7t khi phanh g\u1EA5p li\xEAn t\u1EE5c \u1EDF t\u1ED1c \u0111\u1ED9 cao. Tr\xE1nh phanh xu\u1ED1ng d\u1ED1c d\xE0i b\u1EB1ng phanh ch\xE2n - h\xE3y d\xF9ng phanh \u0111\u1ED9ng c\u01A1.',cost:'2-5tr/c\u1EB7p (thay \u0111\u0129a phanh)'},
          {title:'\u0110\xE8n airbag b\xE1o sai',km:'B\u1EA5t k\u1EF3',severity:'low',desc:'L\u1ED7i airbag warning th\u01B0\u1EDDng do connector gh\u1EBF b\u1ECB l\u1ECFng khi th\xE1o/g\u1EAFp l\u1EA1i. Ki\u1EC3m tra connector gh\u1EBF tr\u01B0\u1EDBc khi thay c\u1EA3m bi\u1EBFn.',cost:'0-500k'},
          {title:'Ti\u1EBFng r\xEDt d\xE2y \u0111ai an to\xE0n',km:'30.000+ km',severity:'low',desc:'D\xE2y \u0111ai an to\xE0n ph\xE1t ti\u1EBFng r\xEDt khi k\xE9o ra-v\xE0o. V\u1EC7 sinh track d\xE2y \u0111ai b\u1EB1ng silicon spray.',cost:'0-100k'},
        ],
        spareParts:[
          {name:'D\u1EA7u \u0111\u1ED9ng c\u01A1 5W-30 Full Syn',interval:'10.000 km',cost:'350-600k',note:'Kia Seltos 1.4T'},
          {name:'D\u1EA7u h\u1ED9p s\u1ED1 DCT',interval:'40.000 km',cost:'800k-1.2tr',note:'DCT Fluid - kh\xF4ng d\xF9ng d\u1EA7u AT th\u01B0\u1EDDng'},
          {name:'L\u1ECDc gi\xF3 cabin',interval:'15.000 km',cost:'150-250k',note:''},
          {name:'M\xE1 phanh tr\u01B0\u1EDBc',interval:'35.000-45.000 km',cost:'1.2-2.5tr/c\u1EB7p',note:''},
          {name:'Bugi iridium',interval:'60.000 km',cost:'500-900k/b\u1ED9',note:'4 bugi 1.4T'},
          {name:'L\u1ECDc gi\xF3 \u0111\u1ED9ng c\u01A1',interval:'15.000 km',cost:'200-350k',note:''},
        ]},
      {name:'Sportage',type:'suv',bh:11,desc:'SUV 5 ch\u1ED7',monthly:{bh:917,fuel:2600,reg:162,maint:270},slug:'sportage',priceFrom:879,priceTo:1069,
        variants:[
          {name:'2.0 Premium AT',price:879,engine:'2.0L MPI 156hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.0 Luxury AT',price:969,engine:'2.0L MPI 156hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.6T GT-Line AWD',price:1069,engine:'1.6L Turbo 177hp',fuel:'X\u0103ng',seats:5,drive:'AWD'},
        ]},
      {name:'Carnival',type:'mpv',bh:16,desc:'MPV 8 ch\u1ED7 cao c\u1EA5p',monthly:{bh:1333,fuel:3200,reg:200,maint:420},slug:'carnival',priceFrom:1199,priceTo:1579,
        variants:[
          {name:'2.2D Premium AT',price:1199,engine:'2.2L Diesel 200hp',fuel:'D\u1EA7u',seats:8,drive:'FWD'},
          {name:'2.2D Luxury AT',price:1359,engine:'2.2L Diesel 200hp',fuel:'D\u1EA7u',seats:8,drive:'FWD'},
          {name:'2.2D Signature AT',price:1499,engine:'2.2L Diesel 200hp',fuel:'D\u1EA7u',seats:7,drive:'FWD'},
          {name:'3.5 V6 Limousine',price:1579,engine:'3.5L V6 290hp',fuel:'X\u0103ng',seats:7,drive:'FWD'},
        ]},
      {name:'Sorento',type:'suv',bh:14,desc:'SUV 7 ch\u1ED7',monthly:{bh:1167,fuel:3000,reg:178,maint:350},slug:'sorento',priceFrom:1079,priceTo:1319,competitors:['santa-fe','cx-8'],modelInsight:{owners:720,monthly:4695,vs_estimate:-0.3,hcm:4980,hn:4320,breakdown:{bh:1167,fuel:3000,road:178,maint:350}},
        variants:[
          {name:'2.2D Premium AT',price:1079,engine:'2.2L Diesel 202hp',fuel:'D\u1EA7u',seats:7,drive:'FWD'},
          {name:'2.2D Luxury AT',price:1179,engine:'2.2L Diesel 202hp',fuel:'D\u1EA7u',seats:7,drive:'FWD'},
          {name:'2.2D Signature AT AWD',price:1319,engine:'2.2L Diesel 202hp',fuel:'D\u1EA7u',seats:7,drive:'AWD'},
        ]},
      {name:'K3',type:'sedan',bh:7.4,desc:'Sedan h\u1EA1ng C ph\u1ED5 bi\u1EBFn nh\u1EA5t',slug:'k3',priceFrom:559,priceTo:699,
        monthly:{bh:620,fuel:2100,reg:130,maint:280},
        ownership:{
          fuelRate:7,fuelType:'x\u0103ng',fuelPrice:20003,
          insureAnnual:7440000,   // TNDS 504k + v\u1EADt ch\u1EA5t 6.936tr (3% \xD7 231.2tr)
          maintPer5k:1400000,     // d\u1EA7u nh\u1EDBt + l\u1ECDc + c\xF4ng t\u1EA1i Kia authorized
          roadFeeAnnual:1560000,  // xe d\u01B0\u1EDBi 6 ch\u1ED7, d\u01B0\u1EDBi 1.5L
          inspectPeriod:24,inspectCost:340000,
        },
        variants:[
          {name:'K3 1.6 Standard MT',price:559,engine:'1.6L Smartstream 123hp',fuel:'X\u0103ng RON 95',drive:'FWD',seats:5},
          {name:'K3 1.6 Luxury AT',price:629,engine:'1.6L Smartstream 123hp',fuel:'X\u0103ng RON 95',drive:'FWD',seats:5},
          {name:'K3 2.0 Premium AT',price:699,engine:'2.0L Nu 149hp',fuel:'X\u0103ng RON 95',drive:'FWD',seats:5},
        ],

        commonIssues:[
          {title:'Ti\u1EBFng \u1ED3n phanh sau',freq:'Th\u01B0\u1EDDng g\u1EB7p',note:'M\xE1 phanh sau m\xF2n sau 40.000-60.000km. Chi ph\xED thay th\u1EBF ~2-3 tri\u1EC7u t\u1EA1i Kia authorized.'},
          {title:'L\u1ECFng tay l\xE1i \u1EDF t\u1ED1c \u0111\u1ED9 th\u1EA5p',freq:'Th\u1EC9nh tho\u1EA3ng',note:'H\u1EC7 th\u1ED1ng l\xE1i \u0111i\u1EC7n EPS c\u1EA7n c\xE2n ch\u1EC9nh sau va ch\u1EA1m. Ki\u1EC3m tra khi \u0111\u0103ng ki\u1EC3m \u0111\u1ECBnh k\u1EF3.'},
        ],
        modelNotes:[
          {q:'K3 1.6 MT c\xF3 d\u1EC5 b\u1EA3o d\u01B0\u1EE1ng kh\xF4ng v\xE0 ph\u1EE5 t\xF9ng c\xF3 s\u1EB5n kh\xF4ng?',a:'Kia K3 1.6 Smartstream l\xE0 m\u1ED9t trong nh\u1EEFng xe ph\u1ED5 bi\u1EBFn nh\u1EA5t ph\xE2n kh\xFAc. Ph\u1EE5 t\xF9ng genuine s\u1EB5n t\u1EA1i 27+ \u0111\u1EA1i l\xFD Kia to\xE0n qu\u1ED1c, gi\xE1 ph\u1EA3i ch\u0103ng so v\u1EDBi sedan Nh\u1EADt. Chi ph\xED d\u1EA7u nh\u1EDBt + c\xF4ng t\u1EA1i Kia authorized: 700-900k m\u1ED7i 5.000km.'},
          {q:'Mua b\u1EA3o hi\u1EC3m v\u1EADt ch\u1EA5t cho K3 \u1EDF \u0111\xE2u t\u1ED1t nh\u1EA5t?',a:'PVI v\xE0 PTI ph\xF9 h\u1EE3p nh\u1EA5t cho K3 ph\u1ED5 th\xF4ng \u2014 m\u1EA1ng l\u01B0\u1EDBi garage r\u1ED9ng, x\u1EED l\xFD claim 3-5 ng\xE0y. Gi\xE1 BH v\u1EADt ch\u1EA5t ~6.5-7.5 tri\u1EC7u/n\u0103m t\xF9y \u0111i\u1EC1u ki\u1EC7n. Mua qua MoMo c\xF3 th\u1EC3 so s\xE1nh gi\xE1 ngay.'},
        ],
        competitors:['sorento'],
      },
      {name:'Cerato',type:'sedan',bh:8,desc:'Sedan h\u1EA1ng C',monthly:{bh:667,fuel:2200,reg:145,maint:230},slug:'cerato',priceFrom:679,priceTo:819,
        variants:[
          {name:'1.6 Standard MT',price:679,engine:'1.6L Smartstream 128hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.6 Luxury AT',price:749,engine:'1.6L Smartstream 128hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.0 Premium AT',price:819,engine:'2.0L Nu 149hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
        ]},
      {name:'EV6',type:'ev',bh:20,desc:'SUV \u0111i\u1EC7n cao c\u1EA5p',monthly:{bh:1667,fuel:1200,reg:0,maint:180},slug:'ev6',priceFrom:1599,priceTo:1899,
        variants:[
          {name:'RWD Standard',price:1599,engine:'EV 168kW 384km',fuel:'\u0110i\u1EC7n',seats:5,drive:'FWD'},
          {name:'RWD Long Range',price:1749,engine:'EV 168kW 528km',fuel:'\u0110i\u1EC7n',seats:5,drive:'FWD'},
          {name:'AWD Long Range GT',price:1899,engine:'EV 239kW 506km',fuel:'\u0110i\u1EC7n',seats:5,drive:'AWD'},
        ]},
    ],
    topInsurers:[
      {name:'PVI Insurance',color:'#FF6600',badge:'Nhanh nh\u1EA5t',reason:'X\u1EED l\xFD b\u1ED3i th\u01B0\u1EDDng 3 ng\xE0y, ph\xF9 h\u1EE3p Kia Seltos v\xE0 Sportage \u1EDF c\xE1c TP l\u1EDBn.'},
      {name:'MIC Insurance',color:'#E52A2A',badge:'T\u1ED1t nh\u1EA5t cho Kia EV6',reason:'Kinh nghi\u1EC7m x\u1EED l\xFD EV, ph\xF9 h\u1EE3p Kia EV6 v\u1EDBi quy\u1EC1n l\u1EE3i pin \u0111i\u1EC7n ri\xEAng.'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'M\u1EA1ng l\u01B0\u1EDBi r\u1ED9ng',reason:'Ph\u1EE7 r\u1ED9ng t\u1EC9nh th\xE0nh, t\u1ED1t cho Kia Carnival v\xE0 Sorento.'},
    ],
    notes:[
      {q:'Kia Carnival CBU nh\u1EADp H\xE0n c\xF3 ph\u1EE5 t\xF9ng kh\xF3 t\xECm sau tai n\u1EA1n kh\xF4ng?',a:'Carnival CBU c\xF3 m\u1ED9t s\u1ED1 ph\u1EE5 t\xF9ng body c\u1EA7n \u0111\u1EB7t t\u1EEB 2-3 tu\u1EA7n. Ch\u1ECDn NB c\xF3 garage Kia authorized \u2014 ph\u1EE5 t\xF9ng genuine \u0111\u01B0\u1EE3c \u0111\u1EB7t th\u1EB3ng t\u1EEB Kia Vietnam thay v\xEC qua trung gian.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2605\u2606',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Trung b\xECnh',level:'mid'},
      {label:'Ph\u1EE5 t\xF9ng',val:'T\u01B0\u01A1ng \u0111\u1ED1i',level:'mid'},
      {label:'Thi\u1EBFt k\u1EBF',val:'T\xE1o b\u1EA1o',level:'high'},
    ],
    insight:{owners:2940,topModel:'Seltos',monthly:3720,vs_estimate:-0.8,hcm:3980,hn:3380,breakdown:{bh:750,fuel:2200,road:148,maint:240}},
    garages:[
      {name:'Kia Tr\u01B0\u1EDDng Chinh',type:'official',city:'HCM',address:'Tr\u01B0\u1EDDng Chinh, T\xE2n B\xECnh',bh:['PVI','B\u1EA3o Vi\u1EC7t'],claims:480,rating:4.7,note:'\u0110\u1EA1i l\xFD Kia l\u1EDBn nh\u1EA5t HCM. Chuy\xEAn Seltos, Carnival, EV6. C\xF3 khu v\u1EF1c waiting lounge.'},
      {name:'Kia Ph\u1EA1m V\u0103n \u0110\u1ED3ng',type:'official',city:'HN',address:'Ph\u1EA1m V\u0103n \u0110\u1ED3ng, C\u1EA7u Gi\u1EA5y',bh:['PVI','MIC'],claims:390,rating:4.6,note:'\u0110\u1EA1i l\xFD Kia ch\xEDnh h\xE3ng HN. Ph\u1EE5 t\xF9ng genuine H\xE0n Qu\u1ED1c, th\u1EDDi gian x\u1EED l\xFD claim nhanh.'},
      {name:'Garage Kia Xanh',type:'authorized',city:'HCM',address:'B\xECnh D\u01B0\u01A1ng',bh:['MIC'],claims:160,rating:4.7,note:'Chuy\xEAn Kia EV6. K\u1EF9 thu\u1EADt vi\xEAn \u0111\u01B0\u1EE3c \u0111\xE0o t\u1EA1o v\u1EC1 pin \u0111i\u1EC7n v\xE0 fast-charging system.'},
    ],
    scenarios:['collision','parked','natural'],
  },
  mazda:{
    name:'Mazda',origin:'Nh\u1EADt B\u1EA3n',color:'#910000',tagline:'Jinba Ittai \xB7 Xe v\xE0 ng\u01B0\u1EDDi l\xE0 m\u1ED9t',
    fuels:['x\u0103ng'],popular:true,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Nh\u1EADt B\u1EA3n \u0111\u1ED9c \u0111\xE1o v\u1EDBi tri\u1EBFt l\xFD thi\u1EBFt k\u1EBF Kodo v\xE0 c\u1EA3m gi\xE1c l\xE1i th\u1EC3 thao Jinba Ittai. Mazda CX-5 l\xE0 SUV 5 ch\u1ED7 \u0111\u01B0\u1EE3c chu\u1ED9ng nh\u1EA5t ph\xE2n kh\xFAc t\u1EA7m trung, n\u1ED5i b\u1EADt v\u1EDBi s\u01A1n Soul Red Crystal v\xE0 n\u1ED9i th\u1EA5t sang tr\u1ECDng v\u01B0\u1EE3t t\u1EA7m gi\xE1.',
    models:[
      {name:'CX-5',type:'suv',bh:11,desc:'SUV 5 ch\u1ED7 ph\u1ED5 bi\u1EBFn',monthly:{bh:917,fuel:2500,reg:160,maint:320},slug:'cx-5',priceFrom:749,priceTo:909,
        variants:[
          {name:'2.0L Luxury AT',price:749,engine:'2.0L SKYACTIV-G 155hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.0L Premium AT',price:839,engine:'2.0L SKYACTIV-G 155hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.5L AWD Signature',price:909,engine:'2.5L SKYACTIV-G 188hp',fuel:'X\u0103ng',seats:5,drive:'AWD'},
        ],
        commonIssues:[
          {title:'Ti\xEAu hao nhi\xEAn li\u1EC7u cao h\u01A1n c\xF4ng b\u1ED1',km:'B\u1EA5t k\u1EF3',severity:'low',desc:'CX-5 2.5L AWD th\u1EF1c t\u1EBF ti\xEAu th\u1EE5 10-13L/100km thay v\xEC 7.5L nh\u01B0 c\xF4ng b\u1ED1. \u0110\u1EB7c bi\u1EC7t r\xF5 khi d\xF9ng \u0111i\u1EC1u h\xF2a v\xE0 k\u1EB9t xe. \u0110\xE2y l\xE0 \u0111\u1EB7c \u0111i\u1EC3m xe, kh\xF4ng ph\u1EA3i l\u1ED7i k\u1EF9 thu\u1EADt.',cost:'0'},
          {title:'Rung nh\u1EB9 h\u1ED9p s\u1ED1 AT 6 c\u1EA5p \u1EDF s\u1ED1 th\u1EA5p',km:'30.000-60.000 km',severity:'medium',desc:'AT6 Mazda hay c\xF3 c\u1EA3m gi\xE1c rung rung nh\u1EB9 khi v\u1EC1 s\u1ED1 2-3 \u1EDF t\u1ED1c \u0111\u1ED9 th\u1EA5p, \u0111\u1EB7c bi\u1EC7t khi m\xE1y ch\u01B0a \u1EA5m. Thay d\u1EA7u AT \u0111\xFAng chu k\u1EF3 v\xE0 d\xF9ng \u0111\xFAng lo\u1EA1i SP-III.',cost:'600k-1tr (thay d\u1EA7u AT)'},
          {title:'L\u1ED7i m\xE0n h\xECnh MZD Connect \u0111\u01A1',km:'B\u1EA5t k\u1EF3',severity:'low',desc:'M\xE0n h\xECnh gi\u1EA3i tr\xED \u0111\u01A1 kh\xF4ng ph\u1EA3n h\u1ED3i sau khi t\u1EAFt b\u1EADt l\u1EA1i xe. R\xFAt c\u1EA7u ch\xEC ECU 30 gi\xE2y \u0111\u1EC3 hard reset. Mazda \u0111\xE3 c\u1EA3i ti\u1EBFn firmware t\u1EEB 2022.',cost:'0 (hard reset ho\u1EB7c update firmware)'},
          {title:'Ti\u1EBFng k\xEAu h\u1EC7 th\u1ED1ng treo tr\u01B0\u1EDBc',km:'50.000+ km',severity:'medium',desc:'Ti\u1EBFng c\u1ED9c khi qua \u1ED5 g\xE0 do bushings thanh \u1ED5n \u0111\u1ECBnh l\xE3o h\xF3a. CX-5 ch\u1EA1y \u0111\u1ECBa h\xECnh ho\u1EB7c \u0111\u01B0\u1EDDng x\u1EA5u nhi\u1EC1u s\u1EBD h\u1ECFng s\u1EDBm h\u01A1n.',cost:'1.5-4tr/c\u1EB7p (thay bushings)'},
        ],
        spareParts:[
          {name:'D\u1EA7u \u0111\u1ED9ng c\u01A1 5W-30 Mazda',interval:'10.000 km',cost:'400-700k',note:'D\xF9ng d\u1EA7u Mazda Original ho\u1EB7c t\u01B0\u01A1ng \u0111\u01B0\u01A1ng'},
          {name:'D\u1EA7u h\u1ED9p s\u1ED1 AT SP-III',interval:'40.000 km',cost:'600k-1tr',note:'Mazda AT6 d\xF9ng SP-III - kh\xF4ng d\xF9ng lo\u1EA1i kh\xE1c'},
          {name:'L\u1ECDc gi\xF3 cabin',interval:'15.000 km',cost:'150-300k',note:''},
          {name:'M\xE1 phanh tr\u01B0\u1EDBc',interval:'40.000-55.000 km',cost:'1.5-3tr/c\u1EB7p',note:''},
          {name:'Bugi iridium',interval:'80.000 km',cost:'600k-1.2tr/b\u1ED9',note:'4 bugi 2.0L ho\u1EB7c 4 bugi 2.5L'},
          {name:'L\u1ECDc gi\xF3 \u0111\u1ED9ng c\u01A1',interval:'15.000 km',cost:'200-400k',note:''},
        ]},
      {name:'CX-8',type:'suv',bh:15,desc:'SUV 7 ch\u1ED7 cao c\u1EA5p',monthly:{bh:1250,fuel:3000,reg:185,maint:400},slug:'cx-8',priceFrom:989,priceTo:1279,competitors:['santa-fe','sorento'],modelInsight:{owners:680,monthly:4835,vs_estimate:+0.7,hcm:5100,hn:4490,breakdown:{bh:1250,fuel:3000,road:185,maint:400}},
        variants:[
          {name:'2.0L Luxury AT',price:989,engine:'2.0L SKYACTIV-G 155hp',fuel:'X\u0103ng',seats:6,drive:'FWD'},
          {name:'2.0L Premium AT',price:1099,engine:'2.0L SKYACTIV-G 155hp',fuel:'X\u0103ng',seats:7,drive:'FWD'},
          {name:'2.5L AWD Signature',price:1279,engine:'2.5L SKYACTIV-G 188hp',fuel:'X\u0103ng',seats:6,drive:'AWD'},
        ]},
      {name:'Mazda3',type:'sedan',bh:9,desc:'Sedan/hatchback h\u1EA1ng C',monthly:{bh:750,fuel:2200,reg:148,maint:280},slug:'mazda3',priceFrom:649,priceTo:789,
        variants:[
          {name:'1.5L Luxury AT Sedan',price:649,engine:'1.5L SKYACTIV-G 120hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.0L Premium AT Sedan',price:739,engine:'2.0L SKYACTIV-G 155hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.0L Premium AT Hatchback',price:789,engine:'2.0L SKYACTIV-G 155hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
        ]},
      {name:'CX-3',type:'suv',bh:8,desc:'Crossover \u0111\xF4 th\u1ECB',monthly:{bh:667,fuel:2000,reg:140,maint:250},slug:'cx-3',priceFrom:549,priceTo:609,
        variants:[
          {name:'1.5L Luxury AT',price:549,engine:'1.5L SKYACTIV-G 120hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.5L Premium AT',price:609,engine:'1.5L SKYACTIV-G 120hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
        ]},
      {name:'CX-30',type:'suv',bh:9,desc:'Crossover compact',monthly:{bh:750,fuel:2100,reg:145,maint:260},slug:'cx-30',priceFrom:659,priceTo:799,
        variants:[
          {name:'2.0L Luxury AT',price:659,engine:'2.0L SKYACTIV-G 155hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.0L Premium AT',price:739,engine:'2.0L SKYACTIV-G 155hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.0L AWD Signature',price:799,engine:'2.0L SKYACTIV-G 155hp',fuel:'X\u0103ng',seats:5,drive:'AWD'},
        ]},
      {name:'Mazda6',type:'sedan',bh:12,desc:'Sedan h\u1EA1ng D',monthly:{bh:1000,fuel:2600,reg:168,maint:320},slug:'mazda6',priceFrom:819,priceTo:979,
        variants:[
          {name:'2.0L Luxury AT',price:819,engine:'2.0L SKYACTIV-G 155hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.0L Premium AT',price:899,engine:'2.0L SKYACTIV-G 155hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.5L AWD Signature',price:979,engine:'2.5L SKYACTIV-G 192hp',fuel:'X\u0103ng',seats:5,drive:'AWD'},
        ]},
    ],
    topInsurers:[
      {name:'PVI Insurance',color:'#FF6600',badge:'Nhanh nh\u1EA5t th\u1ECB tr\u01B0\u1EDDng',reason:'X\u1EED l\xFD b\u1ED3i th\u01B0\u1EDDng nhanh nh\u1EA5t, m\u1EA1ng l\u01B0\u1EDBi garage r\u1ED9ng cho Mazda.'},
      {name:'Liberty Insurance',color:'#2E4099',badge:'Garage Mazda authorized',reason:'Th\u1ECFa thu\u1EADn v\u1EDBi m\u1ED9t s\u1ED1 \u0111\u1EA1i l\xFD Mazda, ph\u1EE5 t\xF9ng genuine \u0111\u01B0\u1EE3c duy\u1EC7t.'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'\u1ED4n \u0111\u1ECBnh',reason:'M\u1EA1ng l\u01B0\u1EDBi r\u1ED9ng, ph\xF9 h\u1EE3p CX-5 v\xE0 CX-8 \u1EDF t\u1EC9nh th\xE0nh.'},
    ],
    notes:[
      {q:'S\u01A1n Mazda (Soul Red Crystal, Machine Grey) c\xF3 l\xE0m chi ph\xED s\u1EEDa t\u0103ng kh\xF4ng?',a:'C\xF3 th\u1EC3 cao h\u01A1n 15-25% so v\u1EDBi s\u01A1n th\xF4ng th\u01B0\u1EDDng do k\u1EF9 thu\u1EADt phun \u0111\u1EB7c bi\u1EC7t v\xE0 nhi\u1EC1u l\u1EDBp h\u01A1n. Nh\xE0 BH b\u1ED3i th\u01B0\u1EDDng theo chi ph\xED th\u1EF1c t\u1EBF \u2014 ch\u1EE7 xe kh\xF4ng thi\u1EC7t. L\u01B0u \xFD ch\u1ECDn garage c\xF3 th\u1EE3 \u0111\u01B0\u1EE3c \u0111\xE0o t\u1EA1o s\u01A1n Mazda \u0111\u1EC3 \u0111\xFAng m\xE0u.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2605\u2606',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Trung b\xECnh',level:'mid'},
      {label:'S\u01A1n \u0111\u1EB7c bi\u1EC7t',val:'T\u1ED1n k\xE9m h\u01A1n',level:'mid'},
      {label:'C\u1EA3m gi\xE1c l\xE1i',val:'H\xE0ng \u0111\u1EA7u',level:'high'},
    ],
    insight:{owners:3560,topModel:'CX-5',monthly:4010,vs_estimate:+0.3,hcm:4280,hn:3650,breakdown:{bh:917,fuel:2500,road:160,maint:320}},
    garages:[
      {name:'Mazda L\xEA V\u0103n L\u01B0\u01A1ng',type:'official',city:'HCM',address:'L\xEA V\u0103n L\u01B0\u01A1ng, Q.7',bh:['PVI','Liberty'],claims:420,rating:4.8,note:'\u0110\u1EA1i l\xFD Mazda ch\xEDnh h\xE3ng. Th\u1EE3 s\u01A1n \u0111\u01B0\u1EE3c \u0111\xE0o t\u1EA1o ri\xEAng cho Soul Red Crystal v\xE0 Machine Grey.'},
      {name:'Mazda Tr\u1EA7n Duy H\u01B0ng',type:'official',city:'HN',address:'Tr\u1EA7n Duy H\u01B0ng, C\u1EA7u Gi\u1EA5y',bh:['Liberty','B\u1EA3o Vi\u1EC7t'],claims:350,rating:4.7,note:'\u0110\u1EA1i l\xFD l\u1EDBn nh\u1EA5t HN. K\u1EF9 thu\u1EADt vi\xEAn \u0111\u01B0\u1EE3c Mazda Japan ch\u1EE9ng nh\u1EADn. Ph\u1EE5 t\xF9ng genuine.'},
      {name:'Auto Mazda T\xE2n Ph\xFA',type:'authorized',city:'HCM',address:'T\xE2n Ph\xFA, HCM',bh:['PVI'],claims:190,rating:4.6,note:'Garage \u1EE7y quy\u1EC1n. Gi\xE1 s\u01A1n c\u1EA1nh tranh h\u01A1n \u0111\u1EA1i l\xFD 20%, cam k\u1EBFt \u0111\xFAng m\xE0u Soul Red Crystal.'},
    ],
    scenarios:['collision','parked','glass'],
  },
  ford:{
    name:'Ford',origin:'M\u1EF9',color:'#003178',tagline:'Built Tough \xB7 Built for Vietnam',
    fuels:['x\u0103ng'],popular:true,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u M\u1EF9 v\u1EDBi d\xF2ng xe b\xE1n t\u1EA3i v\xE0 SUV \u0111\u1ECBa h\xECnh m\u1EA1nh m\u1EBD nh\u1EA5t th\u1ECB tr\u01B0\u1EDDng. Ford Ranger li\xEAn t\u1EE5c d\u1EABn \u0111\u1EA7u ph\xE2n kh\xFAc b\xE1n t\u1EA3i nhi\u1EC1u n\u0103m, \u0111\u01B0\u1EE3c y\xEAu th\xEDch b\u1EDFi t\xEDnh \u0111a d\u1EE5ng cho c\u1EA3 c\xF4ng vi\u1EC7c v\xE0 cu\u1ED9c s\u1ED1ng.',
    models:[
      {name:'Ranger',type:'truck',bh:14,desc:'B\xE1n t\u1EA3i s\u1ED1 1 VN',monthly:{bh:1167,fuel:3800,reg:220,maint:550},slug:'ranger',priceFrom:699,priceTo:1109,
        variants:[
          {name:'XLS MT 4x2',price:699,engine:'2.0L EcoBlue Turbo 170hp',fuel:'D\u1EA7u',seats:5,drive:'FWD'},
          {name:'XLS AT 4x2',price:759,engine:'2.0L EcoBlue Turbo 170hp',fuel:'D\u1EA7u',seats:5,drive:'FWD'},
          {name:'XLT AT 4x4',price:889,engine:'2.0L Bi-Turbo 210hp',fuel:'D\u1EA7u',seats:5,drive:'AWD'},
          {name:'Wildtrak AT 4x4',price:969,engine:'2.0L Bi-Turbo 210hp',fuel:'D\u1EA7u',seats:5,drive:'AWD'},
          {name:'Raptor AT 4x4',price:1109,engine:'3.0L EcoBoost V6 288hp',fuel:'X\u0103ng',seats:5,drive:'AWD'},
        ]},
      {name:'Everest',type:'suv',bh:18,desc:'SUV 7 ch\u1ED7 cao c\u1EA5p',monthly:{bh:1500,fuel:3600,reg:240,maint:500},slug:'everest',priceFrom:1099,priceTo:1499,
        variants:[
          {name:'Ambiente 4x2 AT',price:1099,engine:'2.0L EcoBlue 170hp',fuel:'D\u1EA7u',seats:7,drive:'FWD'},
          {name:'Trend 4x2 AT',price:1199,engine:'2.0L EcoBlue 170hp',fuel:'D\u1EA7u',seats:7,drive:'FWD'},
          {name:'Titanium 4x4 AT',price:1369,engine:'2.0L Bi-Turbo 210hp',fuel:'D\u1EA7u',seats:7,drive:'AWD'},
          {name:'Sport 4x4 AT',price:1499,engine:'2.0L Bi-Turbo 210hp',fuel:'D\u1EA7u',seats:7,drive:'AWD'},
        ]},
      {name:'Territory',type:'suv',bh:10,desc:'Crossover \u0111\xF4 th\u1ECB',monthly:{bh:833,fuel:2400,reg:155,maint:280},slug:'territory',priceFrom:799,priceTo:939,
        variants:[
          {name:'1.5T EcoBoost AT Titanium',price:799,engine:'1.5L EcoBoost 163hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.5T EcoBoost AT ST-Line',price:939,engine:'1.5L EcoBoost 163hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
        ]},
      {name:'Explorer',type:'suv',bh:30,desc:'SUV flagship',monthly:{bh:2500,fuel:4500,reg:320,maint:800},slug:'explorer',priceFrom:2859,priceTo:2859,
        variants:[
          {name:'2.3 EcoBoost AT Platinum',price:2859,engine:'2.3L EcoBoost 300hp',fuel:'X\u0103ng',seats:7,drive:'AWD'},
        ]},
    ],
    topInsurers:[
      {name:'PTI Insurance',color:'#005BAA',badge:'Chuy\xEAn b\xE1n t\u1EA3i Ford',reason:'M\u1EA1nh v\u1EC1 xe b\xE1n t\u1EA3i v\xE0 SUV \u0111\u1ECBa h\xECnh, kinh nghi\u1EC7m b\u1ED3i th\u01B0\u1EDDng Ford Ranger nhi\u1EC1u nh\u1EA5t.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Nhanh nh\u1EA5t',reason:'X\u1EED l\xFD nhanh, garage Ford \u1EE7y quy\u1EC1n trong m\u1EA1ng l\u01B0\u1EDBi PVI.'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'R\u1ED9ng kh\u1EAFp',reason:'M\u1EA1ng l\u01B0\u1EDBi r\u1ED9ng, t\u1ED1t cho Ford Everest di chuy\u1EC3n li\xEAn t\u1EC9nh.'},
    ],
    notes:[
      {q:'Ford Ranger l\u1EAFp th\xF9ng ho\u1EB7c ph\u1EE5 ki\u1EC7n \u0111\u1ED9 c\xF3 \u1EA3nh h\u01B0\u1EDFng b\u1EA3o hi\u1EC3m kh\xF4ng?',a:'C\xF3. Ph\u1EE5 ki\u1EC7n l\u1EAFp sau khi mua xe kh\xF4ng khai b\xE1o s\u1EBD kh\xF4ng \u0111\u01B0\u1EE3c b\u1ED3i th\u01B0\u1EDDng n\u1EBFu h\u1ECFng. Th\xF9ng l\u1EAFp th\xEAm c\u1EA7n th\xF4ng b\xE1o nh\xE0 BH \u0111\u1EC3 \u0111i\u1EC1u ch\u1EC9nh gi\xE1 tr\u1ECB b\u1EA3o hi\u1EC3m \u2014 ph\xED BH t\u0103ng th\xEAm kho\u1EA3ng 5-10%.'},
      {q:'Ford Ranger d\xF9ng kinh doanh v\u1EADn t\u1EA3i c\xF3 mua BH th\xE2n v\u1ECF \u0111\u01B0\u1EE3c kh\xF4ng?',a:'\u0110\u01B0\u1EE3c, nh\u01B0ng ph\u1EA3i khai b\xE1o \u0111\xFAng m\u1EE5c \u0111\xEDch s\u1EED d\u1EE5ng. BH c\xE1 nh\xE2n kh\xF4ng h\u1EE3p l\u1EC7 khi xe d\xF9ng v\u1EADn t\u1EA3i th\u01B0\u01A1ng m\u1EA1i. BH th\u01B0\u01A1ng m\u1EA1i ph\xED cao h\u01A1n kho\u1EA3ng 20-30% nh\u01B0ng b\u1EA3o v\u1EC7 \u0111\xFAng ph\u1EA1m vi s\u1EED d\u1EE5ng.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2606\u2606',level:'mid'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Cao h\u01A1n',level:'mid'},
      {label:'B\xE1n t\u1EA3i',val:'S\u1ED1 1 VN',level:'good'},
      {label:'\u0110\u1ECBa h\xECnh',val:'H\xE0ng \u0111\u1EA7u',level:'high'},
    ],
    insight:{owners:2870,topModel:'Ranger',monthly:5740,vs_estimate:+2.8,hcm:6120,hn:5180,breakdown:{bh:1167,fuel:3800,road:220,maint:550}},
    garages:[
      {name:'Ford B\xECnh D\u01B0\u01A1ng',type:'official',city:'HCM',address:'Thu\u1EADn An, B\xECnh D\u01B0\u01A1ng',bh:['PTI','PVI'],claims:560,rating:4.7,note:'\u0110\u1EA1i l\xFD Ford l\u1EDBn nh\u1EA5t mi\u1EC1n Nam. Chuy\xEAn Ranger v\xE0 Everest. C\xF3 pit ri\xEAng cho b\xE1n t\u1EA3i.'},
      {name:'Ford Th\u0103ng Long',type:'official',city:'HN',address:'\u0110\xF4ng Anh, H\xE0 N\u1ED9i',bh:['PTI','B\u1EA3o Vi\u1EC7t'],claims:430,rating:4.6,note:'\u0110\u1EA1i l\xFD Ford ch\xEDnh h\xE3ng HN. Chuy\xEAn b\xE1n t\u1EA3i, c\xF3 x\u01B0\u1EDFng \u0111\u1ED9 ph\u1EE5 ki\u1EC7n Ranger.'},
      {name:'4x4 Auto Garage',type:'authorized',city:'HCM',address:'Qu\u1EADn 12, HCM',bh:['PTI'],claims:240,rating:4.8,note:'Chuy\xEAn s\xE2u Ford Ranger v\xE0 Everest \u0111\u1ECBa h\xECnh. Thay khung g\u1EA7m, ph\u1EE5 t\xF9ng genuine, gi\xE1 t\u1ED1t h\u01A1n \u0111\u1EA1i l\xFD.'},
    ],
    scenarios:['collision','parttheft','natural'],
  },
  mitsubishi:{
    name:'Mitsubishi',origin:'Nh\u1EADt B\u1EA3n',color:'#D0021B',tagline:'Drive the future \xB7 Plug-in hybrid',
    fuels:['x\u0103ng','hybrid'],popular:true,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Nh\u1EADt B\u1EA3n \u0111ang \u0111\u1EA9y m\u1EA1nh d\xF2ng xe PHEV v\xE0 \u0111\u1ECBa h\xECnh t\u1EA1i Vi\u1EC7t Nam. Mitsubishi Xpander l\xE0 MPV 7 ch\u1ED7 b\xE1n ch\u1EA1y nh\u1EA5t ph\xE2n kh\xFAc gia \u0111\xECnh, n\u1ED5i b\u1EADt v\u1EC1 kh\xF4ng gian r\u1ED9ng v\xE0 chi ph\xED s\u1EDF h\u1EEFu h\u1EE3p l\xFD.',
    models:[
      {name:'Xpander',type:'mpv',bh:9,desc:'MPV 7 ch\u1ED7 b\xE1n ch\u1EA1y',monthly:{bh:750,fuel:2700,reg:155,maint:280},slug:'xpander',priceFrom:599,priceTo:699,
        variants:[
          {name:'1.5 MT Ti\xEAu chu\u1EA9n',price:599,engine:'1.5L MIVEC 105hp',fuel:'X\u0103ng',seats:7,drive:'FWD'},
          {name:'1.5 AT Ti\xEAu chu\u1EA9n',price:649,engine:'1.5L MIVEC 105hp',fuel:'X\u0103ng',seats:7,drive:'FWD'},
          {name:'1.5 AT \u0110\u1EB7c bi\u1EC7t',price:699,engine:'1.5L MIVEC 105hp',fuel:'X\u0103ng',seats:7,drive:'FWD'},
        ]},
      {name:'Xforce',type:'suv',bh:9,desc:'Crossover m\u1EDBi nh\u1EA5t',monthly:{bh:750,fuel:2400,reg:148,maint:260},slug:'xforce',priceFrom:629,priceTo:729,
        variants:[
          {name:'1.5 CVT Standard',price:629,engine:'1.5L MIVEC 105hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'1.5 CVT Ultimate',price:729,engine:'1.5L MIVEC 105hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
        ]},
      {name:'Outlander',type:'suv',bh:12,desc:'SUV 7 ch\u1ED7',monthly:{bh:1000,fuel:2800,reg:165,maint:320},slug:'outlander',priceFrom:869,priceTo:1029,
        variants:[
          {name:'2.0 CVT Standard',price:869,engine:'2.0L MIVEC 150hp',fuel:'X\u0103ng',seats:7,drive:'FWD'},
          {name:'2.0 CVT Premium',price:969,engine:'2.0L MIVEC 150hp',fuel:'X\u0103ng',seats:7,drive:'FWD'},
          {name:'2.5 PHEV Premium',price:1029,engine:'2.5L PHEV 224hp',fuel:'X\u0103ng/\u0110i\u1EC7n',seats:7,drive:'AWD'},
        ]},
      {name:'Eclipse Cross',type:'suv',bh:11,desc:'SUV PHEV',monthly:{bh:917,fuel:1200,reg:155,maint:280},slug:'eclipse-cross',priceFrom:869,priceTo:999,
        variants:[
          {name:'1.5T CVT 2WD',price:869,engine:'1.5L Turbo 163hp',fuel:'X\u0103ng',seats:5,drive:'FWD'},
          {name:'2.4 PHEV 4WD',price:999,engine:'2.4L PHEV 224hp',fuel:'X\u0103ng/\u0110i\u1EC7n',seats:5,drive:'AWD'},
        ]},
      {name:'Pajero Sport',type:'suv',bh:16,desc:'SUV \u0111\u1ECBa h\xECnh',monthly:{bh:1333,fuel:3600,reg:210,maint:480},slug:'pajero-sport',priceFrom:999,priceTo:1199,
        variants:[
          {name:'4x2 AT',price:999,engine:'2.4L MIVEC Diesel 181hp',fuel:'D\u1EA7u',seats:7,drive:'FWD'},
          {name:'4x4 AT Premium',price:1099,engine:'2.4L MIVEC Diesel 181hp',fuel:'D\u1EA7u',seats:7,drive:'AWD'},
          {name:'4x4 AT Black Edition',price:1199,engine:'2.4L MIVEC Diesel 181hp',fuel:'D\u1EA7u',seats:7,drive:'AWD'},
        ]},
    ],
    topInsurers:[
      {name:'PVI Insurance',color:'#FF6600',badge:'Nhanh nh\u1EA5t',reason:'B\u1ED3i th\u01B0\u1EDDng nhanh, m\u1EA1ng l\u01B0\u1EDBi garage t\u1ED1t cho Xpander v\xE0 Xforce.'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'R\u1ED9ng kh\u1EAFp',reason:'M\u1EA1ng l\u01B0\u1EDBi to\xE0n qu\u1ED1c, t\u1ED1t cho Mitsubishi \u1EDF t\u1EC9nh th\xE0nh.'},
      {name:'Liberty Insurance',color:'#2E4099',badge:'Garage authorized',reason:'Ph\u1EE5 t\xF9ng genuine \u0111\u01B0\u1EE3c duy\u1EC7t, garage Mitsubishi \u1EE7y quy\u1EC1n trong m\u1EA1ng.'},
    ],
    notes:[
      {q:'Eclipse Cross PHEV b\u1EA3o hi\u1EC3m c\xF3 kh\xE1c xe x\u0103ng th\u01B0\u1EDDng kh\xF4ng?',a:'Ph\xED BH t\u01B0\u01A1ng \u0111\u01B0\u01A1ng, nh\u01B0ng chi ph\xED s\u1EEDa motor \u0111i\u1EC7n v\xE0 pin PHEV c\xF3 th\u1EC3 cao h\u01A1n. M\u1ED9t s\u1ED1 NB t\xEDnh quy\u1EC1n l\u1EE3i pin PHEV l\xE0 ph\u1EE5 t\xF9ng th\xF4ng th\u01B0\u1EDDng; s\u1ED1 kh\xE1c y\xEAu c\u1EA7u khai b\xE1o ri\xEAng. N\xEAn h\u1ECFi r\xF5 NB tr\u01B0\u1EDBc khi k\xFD h\u1EE3p \u0111\u1ED3ng.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2605\u2606',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Trung b\xECnh',level:'mid'},
      {label:'Ph\u1EE5 t\xF9ng',val:'T\u01B0\u01A1ng \u0111\u1ED1i',level:'mid'},
      {label:'MPV 7 ch\u1ED7',val:'B\xE1n ch\u1EA1y',level:'good'},
    ],
    insight:{owners:2410,topModel:'Xpander',monthly:3880,vs_estimate:-1.3,hcm:4050,hn:3610,breakdown:{bh:750,fuel:2700,road:155,maint:280}},
    garages:[
      {name:'Mitsubishi Motors Vi\u1EC7t Nam - B\u1EAFc T\u1EEB Li\xEAm',type:'official',city:'HN',address:'B\u1EAFc T\u1EEB Li\xEAm, H\xE0 N\u1ED9i',bh:['PVI','B\u1EA3o Vi\u1EC7t'],claims:380,rating:4.6,note:'\u0110\u1EA1i l\xFD Mitsubishi ch\xEDnh h\xE3ng HN. Chuy\xEAn Xpander v\xE0 Xforce. Ph\u1EE5 t\xF9ng genuine.'},
      {name:'Mitsubishi T\xE2n S\u01A1n Nh\u1EA5t',type:'official',city:'HCM',address:'G\xF2 V\u1EA5p, HCM',bh:['PVI','Liberty'],claims:310,rating:4.6,note:'\u0110\u1EA1i l\xFD l\u1EDBn nh\u1EA5t HCM. Chuy\xEAn PHEV Eclipse Cross v\xE0 Pajero Sport \u0111\u1ECBa h\xECnh.'},
      {name:'Garage MPV Center',type:'authorized',city:'HCM',address:'B\xECnh Th\u1EA1nh, HCM',bh:['PVI'],claims:150,rating:4.5,note:'Chuy\xEAn MPV 7 ch\u1ED7 Mitsubishi v\xE0 Toyota. Ph\u1EE5 t\xF9ng genuine, gi\xE1 t\u1ED1t h\u01A1n \u0111\u1EA1i l\xFD 10-15%.'},
    ],
    scenarios:['collision','thuykick','parked'],
  },
  vinfast:{
    name:'VinFast',origin:'Vi\u1EC7t Nam',color:'#0069AA',tagline:'Xe \u0111i\u1EC7n Vi\u1EC7t \xB7 V\xEC ng\u01B0\u1EDDi Vi\u1EC7t \xB7 Chi ph\xED th\u1EA5p nh\u1EA5t',
    fuels:['\u0111i\u1EC7n'],popular:true,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u xe \u0111i\u1EC7n Vi\u1EC7t Nam \u0111\u1EA7u ti\xEAn v\u1EDBi \u0111\u1EA7y \u0111\u1EE7 d\u1EA3i s\u1EA3n ph\u1EA9m t\u1EEB mini EV \u0111\u1EBFn SUV 7 ch\u1ED7. VF 8 l\xE0 xe \u0111i\u1EC7n b\xE1n ch\u1EA1y nh\u1EA5t Vi\u1EC7t Nam, ti\u1EBFt ki\u1EC7m 3-4tr/th\xE1ng so v\u1EDBi SUV x\u0103ng c\xF9ng ph\xE2n kh\xFAc.',
    models:[
      {name:'VF 8',type:'ev',bh:15,desc:'SUV \u0111i\u1EC7n c\u1EE1 C t\u1ED1t nh\u1EA5t',monthly:{bh:1250,fuel:1100,reg:0,maint:150},slug:'vf-8',priceFrom:649,priceTo:769,
        variants:[
          {name:'VF 8 Eco',price:649,engine:'EV 150kW 350km',fuel:'\u0110i\u1EC7n',seats:5,drive:'FWD'},
          {name:'VF 8 Plus',price:769,engine:'EV 175kW 420km',fuel:'\u0110i\u1EC7n',seats:5,drive:'FWD'},
        ],
        commonIssues:[
          {title:'Ph\u1EA7n m\u1EC1m OTA g\xE2y l\u1ED7i t\u1EA1m th\u1EDDi',km:'B\u1EA5t k\u1EF3',severity:'low',desc:'Update OTA t\u1EF1 \u0111\u1ED9ng \u0111\xF4i khi g\xE2y l\u1ED7i m\xE0n h\xECnh ho\u1EB7c m\u1EA5t k\u1EBFt n\u1ED1i m\u1ED9t s\u1ED1 t\xEDnh n\u0103ng th\xF4ng minh. Kh\u1EDFi \u0111\u1ED9ng l\u1EA1i xe ho\u1EB7c factory reset m\xE0n h\xECnh th\u01B0\u1EDDng gi\u1EA3i quy\u1EBFt.',cost:'0 (t\u1EF1 x\u1EED l\xFD)'},
          {title:'Pin xu\u1ED1ng nhanh khi d\xF9ng \u0111i\u1EC1u h\xF2a nhi\u1EC1u',km:'B\u1EA5t k\u1EF3',severity:'medium',desc:'VF8 ti\xEAu th\u1EE5 \u0111i\u1EC7n \u0111i\u1EC1u h\xF2a kh\xE1 cao, l\xE0m gi\u1EA3m ph\u1EA1m vi ho\u1EA1t \u0111\u1ED9ng 15-25% trong m\xF9a h\xE8. D\xF9ng ch\u1EBF \u0111\u1ED9 pre-cooling khi xe \u0111ang s\u1EA1c \u0111\u1EC3 ti\u1EBFt ki\u1EC7m pin.',cost:'0 (thay \u0111\u1ED5i th\xF3i quen)'},
          {title:'L\u1ED7i c\u1EA3m bi\u1EBFn \u0111\u1ED7 xe sau m\u01B0a',km:'B\u1EA5t k\u1EF3',severity:'low',desc:'C\u1EA3m bi\u1EBFn radar/si\xEAu \xE2m ph\xEDa sau b\xE1o c\u1EA3nh b\xE1o gi\u1EA3 sau khi m\u01B0a ho\u1EB7c r\u1EEDa xe. V\u1EC7 sinh khu v\u1EF1c c\u1EA3m bi\u1EBFn v\xE0 ch\u1EDD kh\xF4.',cost:'0'},
          {title:'Ti\u1EBFng rung nh\u1EF1a taplo khi ch\u1EA1y \u0111\u01B0\u1EDDng x\u1EA5u',km:'10.000+ km',severity:'low',desc:'\u1ED0p nh\u1EF1a n\u1ED9i th\u1EA5t VF8 rung r\xEDt \u1EDF \u0111\u01B0\u1EDDng x\u1EA5u. VinFast \u0111\xE3 c\u1EA3i thi\u1EC7n t\u1EEB l\xF4 s\u1EA3n xu\u1EA5t cu\u1ED1i 2023. Y\xEAu c\u1EA7u \u0111\u1EA1i l\xFD ki\u1EC3m tra v\xE0 si\u1EBFt l\u1EA1i.',cost:'0 (b\u1EA3o h\xE0nh)'},
        ],
        spareParts:[
          {name:'Ki\u1EC3m tra pin \u0111\u1ECBnh k\u1EF3',interval:'12 th\xE1ng',cost:'0 (t\u1EA1i \u0111\u1EA1i l\xFD VinFast)',note:'VinFast b\u1EA3o h\xE0nh pin 8 n\u0103m/160.000km'},
          {name:'D\u1EA7u phanh DOT 4',interval:'2 n\u0103m',cost:'200-400k',note:'Xe \u0111i\u1EC7n \xEDt d\xF9ng phanh ma s\xE1t nh\u1EDD phanh t\xE1i sinh'},
          {name:'L\u1ECDc gi\xF3 cabin',interval:'15.000 km',cost:'150-300k',note:''},
          {name:'G\u1EA1t m\u01B0a',interval:'12 th\xE1ng',cost:'150-300k/c\u1EB7p',note:''},
          {name:'M\xE1 phanh',interval:'80.000-100.000 km',cost:'1.5-3tr/c\u1EB7p',note:'Xe \u0111i\u1EC7n d\xF9ng phanh t\xE1i sinh n\xEAn m\xE1 phanh b\u1EC1n h\u01A1n nhi\u1EC1u'},
          {name:'L\u1ED1p xe',interval:'40.000-60.000 km',cost:'3-5tr/l\u1ED1p',note:'Xe \u0111i\u1EC7n n\u1EB7ng h\u01A1n - l\u1ED1p m\xF2n nhanh h\u01A1n xe x\u0103ng c\xF9ng size'},
        ]},
      {name:'VF 9',type:'ev',bh:25,desc:'SUV \u0111i\u1EC7n 7 ch\u1ED7 c\u1EE1 D',monthly:{bh:2083,fuel:1400,reg:0,maint:200},slug:'vf-9',priceFrom:1059,priceTo:1259,
        variants:[
          {name:'VF 9 Eco',price:1059,engine:'EV 300kW 438km',fuel:'\u0110i\u1EC7n',seats:7,drive:'AWD'},
          {name:'VF 9 Plus',price:1259,engine:'EV 300kW 438km',fuel:'\u0110i\u1EC7n',seats:7,drive:'AWD'},
        ]},
      {name:'VF 7',type:'ev',bh:13,desc:'SUV-coupe \u0111i\u1EC7n',monthly:{bh:1083,fuel:950,reg:0,maint:130},slug:'vf-7',priceFrom:799,priceTo:919,
        variants:[
          {name:'VF 7 Eco',price:799,engine:'EV 150kW 350km',fuel:'\u0110i\u1EC7n',seats:5,drive:'FWD'},
          {name:'VF 7 Plus',price:919,engine:'EV 260kW 431km',fuel:'\u0110i\u1EC7n',seats:5,drive:'AWD'},
        ]},
      {name:'VF 6',type:'ev',bh:10,desc:'Crossover \u0111i\u1EC7n t\u1EA7m trung',monthly:{bh:833,fuel:800,reg:0,maint:120},slug:'vf-6',priceFrom:549,priceTo:599,
        variants:[
          {name:'VF 6 Eco',price:549,engine:'EV 100kW 381km',fuel:'\u0110i\u1EC7n',seats:5,drive:'FWD'},
          {name:'VF 6 Plus',price:599,engine:'EV 125kW 399km',fuel:'\u0110i\u1EC7n',seats:5,drive:'FWD'},
        ]},
      {name:'VF 5',type:'ev',bh:7,desc:'SUV \u0111i\u1EC7n \u0111\xF4 th\u1ECB',monthly:{bh:583,fuel:650,reg:0,maint:100},slug:'vf-5',priceFrom:399,priceTo:479,
        variants:[
          {name:'VF 5 Standard',price:399,engine:'EV 62kW 248km',fuel:'\u0110i\u1EC7n',seats:5,drive:'FWD'},
          {name:'VF 5 Plus',price:479,engine:'EV 100kW 326km',fuel:'\u0110i\u1EC7n',seats:5,drive:'FWD'},
        ]},
      {name:'VF 3',type:'ev',bh:5,desc:'Mini EV \u0111\xF4 th\u1ECB',monthly:{bh:417,fuel:500,reg:0,maint:80},slug:'vf-3',priceFrom:239,priceTo:299,
        variants:[
          {name:'VF 3 Standard',price:239,engine:'EV 42kW 210km',fuel:'\u0110i\u1EC7n',seats:4,drive:'FWD'},
          {name:'VF 3 Plus',price:299,engine:'EV 42kW 215km',fuel:'\u0110i\u1EC7n',seats:4,drive:'FWD'},
        ]},
    ],
    topInsurers:[
      {name:'MIC Insurance',color:'#E52A2A',badge:'\u0110\u1ED1i t\xE1c ch\xEDnh th\u1EE9c VinFast',reason:'\u0110\u1ED1i t\xE1c BH ch\xEDnh th\u1EE9c c\u1EE7a VinFast. Kinh nghi\u1EC7m x\u1EED l\xFD b\u1ED3i th\u01B0\u1EDDng xe \u0111i\u1EC7n VF, pin v\xE0 motor \u0111\u01B0\u1EE3c b\u1ED3i th\u01B0\u1EDDng \u0111\xFAng quy tr\xECnh.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Quy\u1EC1n l\u1EE3i pin EV',reason:'\u0110\xE3 c\xF3 g\xF3i quy\u1EC1n l\u1EE3i pin \u0111i\u1EC7n ri\xEAng cho VinFast, x\u1EED l\xFD b\u1ED3i th\u01B0\u1EDDng nhanh.'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'\u1ED4n \u0111\u1ECBnh',reason:'\u0110ang m\u1EDF r\u1ED9ng n\u0103ng l\u1EF1c x\u1EED l\xFD xe \u0111i\u1EC7n VinFast, uy t\xEDn l\xE2u \u0111\u1EDDi.'},
    ],
    notes:[
      {q:'Pin xe \u0111i\u1EC7n VinFast c\xF3 \u0111\u01B0\u1EE3c b\u1EA3o v\u1EC7 kh\xF4ng?',a:'G\xF3i b\u1EA3o v\u1EC7 xe th\u01B0\u1EDDng x\u1EED l\xFD ph\u1EA7n th\xE2n xe v\xE0 b\u1ED9 ph\u1EADn c\u01A1 kh\xED. N\u1EBFu c\u1EA7n ph\u1EA1m vi ri\xEAng cho pin, n\xEAn ki\u1EC3m tra r\xF5 \u0111i\u1EC1u kho\u1EA3n c\u1EE7a t\u1EEBng nh\xE0 cung c\u1EA5p tr\u01B0\u1EDBc khi mua.'},
      {q:'Th\u1EE7y k\xEDch tr\xEAn xe \u0111i\u1EC7n VinFast x\u1EED l\xFD th\u1EBF n\xE0o?',a:'VinFast \u0111\u01B0\u1EE3c thi\u1EBFt k\u1EBF IP67 (ch\u1ECBu ng\xE2m 1m/30 ph\xFAt). Tuy nhi\xEAn n\u1EBFu n\u01B0\u1EDBc v\xE0o motor ho\u1EB7c h\u1ED9p \u0111i\u1EC7n do tai n\u1EA1n nghi\xEAm tr\u1ECDng, c\u1EA7n ch\u1ECDn g\xF3i c\xF3 ph\u1EA1m vi x\u1EED l\xFD xe \u0111i\u1EC7n r\xF5 r\xE0ng. Chi ph\xED s\u1EEDa motor VF 8 kho\u1EA3ng 80-150tr.'},
      {q:'Chi ph\xED nu\xF4i xe \u0111i\u1EC7n VinFast th\u1EF1c s\u1EF1 r\u1EBB h\u01A1n xe x\u0103ng bao nhi\xEAu?',a:'\u01AF\u1EDBc t\xEDnh VF 8 (1.200km/th\xE1ng): \u0111i\u1EC7n t\u1EA1i nh\xE0 ~1.1tr vs x\u0103ng Toyota Fortuner ~3.2tr. C\u1ED9ng th\xEAm mi\u1EC5n ph\xED \u0111\u01B0\u1EDDng b\u1ED9 v\xE0 b\u1EA3o d\u01B0\u1EE1ng th\u1EA5p h\u01A1n 60-70%, t\u1ED5ng ti\u1EBFt ki\u1EC7m ~3-4tr/th\xE1ng so v\u1EDBi SUV x\u0103ng c\xF9ng ph\xE2n kh\xFAc.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2606\u2606',level:'mid'},
      {label:'Chi ph\xED \u0111i\u1EC7n',val:'R\u1EBB nh\u1EA5t',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Th\u1EA5p nh\u1EA5t',level:'good'},
      {label:'Eco',val:'Zero emission',level:'high'},
    ],
    insight:{owners:4920,topModel:'VF 8',monthly:2640,vs_estimate:-38.2,hcm:2810,hn:2430,breakdown:{bh:1250,fuel:1100,road:0,maint:150}},
    garages:[
      {name:'VinFast Smart Service - Ph\xFA M\u1EF9 H\u01B0ng',type:'official',city:'HCM',address:'Ph\xFA M\u1EF9 H\u01B0ng, Q.7',bh:['MIC','PVI'],claims:820,rating:4.8,note:'Trung t\xE2m d\u1ECBch v\u1EE5 VinFast ti\xEAu chu\u1EA9n cao nh\u1EA5t HCM. K\u1EF9 thu\u1EADt vi\xEAn EV chuy\xEAn bi\u1EC7t, OTA update t\u1EA1i ch\u1ED7.'},
      {name:'VinFast Smart Service - M\u1EF9 \u0110\xECnh',type:'official',city:'HN',address:'M\u1EF9 \u0110\xECnh, Nam T\u1EEB Li\xEAm',bh:['MIC','PVI'],claims:910,rating:4.8,note:'Trung t\xE2m d\u1ECBch v\u1EE5 VinFast l\u1EDBn nh\u1EA5t HN. X\u1EED l\xFD pin EV v\xE0 motor, c\xF3 xe VF thay th\u1EBF mi\u1EC5n ph\xED.'},
      {name:'VinFast Service - Th\u1EE7 \u0110\u1EE9c',type:'official',city:'HCM',address:'Th\u1EE7 \u0110\u1EE9c, HCM',bh:['MIC'],claims:540,rating:4.7,note:'Ph\u1EE7 khu \u0110\xF4ng HCM. Chuy\xEAn VF 8 v\xE0 VF 9, nhanh nh\u1EA5t khu v\u1EF1c theo \u0111\xE1nh gi\xE1 ch\u1EE7 xe MoMo.'},
    ],
    scenarios:['thuykick','collision','theft'],
  },
  mercedes:{
    name:'Mercedes',origin:'\u0110\u1EE9c',color:'#1C1C1C',tagline:'The best or nothing \xB7 Xe sang h\xE0ng \u0111\u1EA7u',
    fuels:['x\u0103ng','hybrid'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u xe sang h\xE0ng \u0111\u1EA7u th\u1EBF gi\u1EDBi t\u1EEB \u0110\u1EE9c. Mercedes C-Class v\xE0 GLC l\xE0 hai m\u1EABu b\xE1n ch\u1EA1y nh\u1EA5t ph\xE2n kh\xFAc sang t\u1EA1i Vi\u1EC7t Nam, \u0111\u01B0\u1EE3c l\u1EF1a ch\u1ECDn b\u1EDFi ph\xE2n kh\xFAc doanh nh\xE2n c\u1EA7n ph\u1EE5 t\xF9ng genuine v\xE0 d\u1ECBch v\u1EE5 ch\xEDnh h\xE3ng.',
    models:[
      {name:'C-Class',type:'sedan',bh:28,desc:'Sedan sang h\u1EA1ng C',monthly:{bh:2333,fuel:3500,reg:380,maint:1500},slug:'c-class',priceFrom:1599,priceTo:2099},
      {name:'E-Class',type:'sedan',bh:40,desc:'Sedan sang h\u1EA1ng D',monthly:{bh:3333,fuel:4000,reg:450,maint:2000},slug:'e-class',priceFrom:2099,priceTo:2799},
      {name:'GLC',type:'suv',bh:35,desc:'SUV 5 ch\u1ED7 premium',monthly:{bh:2917,fuel:3800,reg:400,maint:1800},slug:'glc',priceFrom:2099,priceTo:2599},
      {name:'GLE',type:'suv',bh:55,desc:'SUV 7 ch\u1ED7 cao c\u1EA5p',monthly:{bh:4583,fuel:4800,reg:500,maint:2500},slug:'gle',priceFrom:3099,priceTo:3899},
      {name:'S-Class',type:'sedan',bh:85,desc:'Sedan flagship',monthly:{bh:7083,fuel:5500,reg:700,maint:4000},slug:'s-class',priceFrom:4269,priceTo:7699},
    ],
    topInsurers:[
      {name:'DBY Insurance',color:'#1C1C1C',badge:'Chuy\xEAn xe sang BMW/Merc',reason:'\u0110\u1ED1i t\xE1c garage ch\xEDnh h\xE3ng Mercedes-Benz Vietnam. Ph\u1EE5 t\xF9ng genuine, k\u1EF9 thu\u1EADt vi\xEAn Mercedes-certified.'},
      {name:'GIC Insurance',color:'#2D6B3F',badge:'Xe nh\u1EADp ch\xE2u \xC2u',reason:'Chuy\xEAn xe nh\u1EADp kh\u1EA9u ch\xE2u \xC2u, \u0111\u1ECBnh gi\xE1 v\xE0 b\u1ED3i th\u01B0\u1EDDng \u0111\xFAng gi\xE1 tr\u1ECB th\u1EF1c t\u1EBF xe sang.'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'Uy t\xEDn',reason:'Cam k\u1EBFt b\u1ED3i th\u01B0\u1EDDng \u0111\xFAng h\u1EA1n cho xe sang Mercedes.'},
    ],
    notes:[
      {q:'Ph\u1EE5 t\xF9ng Mercedes ch\xEDnh h\xE3ng vs OEM khi b\u1ED3i th\u01B0\u1EDDng kh\xE1c nhau th\u1EBF n\xE0o?',a:'Nh\xE0 BH m\u1EB7c \u0111\u1ECBnh b\u1ED3i th\u01B0\u1EDDng ph\u1EE5 t\xF9ng OEM (ch\u1EA5t l\u01B0\u1EE3ng t\u01B0\u01A1ng \u0111\u01B0\u01A1ng, kh\xF4ng ph\u1EA3i genuine). V\u1EDBi Mercedes, nhi\u1EC1u ch\u1EE7 xe mu\u1ED1n genuine parts. C\u1EA7n ch\u1ECDn DBY c\xF3 th\u1ECFa thu\u1EADn garage Mercedes ch\xEDnh h\xE3ng, ho\u1EB7c th\xEAm \u0111i\u1EC1u kho\u1EA3n "genuine parts" v\xE0o h\u1EE3p \u0111\u1ED3ng \u2014 ph\xED cao h\u01A1n 10-20%.'},
      {q:'H\u1EC7 th\u1ED1ng \u0111i\u1EC7n t\u1EED ph\u1EE9c t\u1EA1p (MBUX, h\u1EC7 th\u1ED1ng an to\xE0n) h\u01B0 sau tai n\u1EA1n c\xF3 \u0111\u01B0\u1EE3c BH kh\xF4ng?',a:'C\xF3, n\u1EBFu h\u01B0 h\u1ECFng tr\u1EF1c ti\u1EBFp do tai n\u1EA1n. Gi\xE1m \u0111\u1ECBnh vi\xEAn c\u1EA7n x\xE1c nh\u1EADn li\u1EC7u l\u1ED7i \u0111i\u1EC7n t\u1EED l\xE0 h\u1EADu qu\u1EA3 tai n\u1EA1n hay l\u1ED7i ph\u1EA7n m\u1EC1m c\xF3 t\u1EEB tr\u01B0\u1EDBc. Garage Mercedes authorized c\xF3 kh\u1EA3 n\u0103ng x\xE1c \u0111\u1ECBnh ch\xEDnh x\xE1c \u2014 l\xFD do n\xEAn ch\u1ECDn DBY.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2606\u2606',level:'mid'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'R\u1EA5t cao',level:'neutral'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Genuine kh\xF3',level:'neutral'},
      {label:'\u0110\u1EB3ng c\u1EA5p',val:'H\xE0ng \u0111\u1EA7u',level:'high'},
    ],
    insight:{owners:890,topModel:'C-Class',monthly:8230,vs_estimate:+3.1,hcm:8910,hn:7420,breakdown:{bh:2333,fuel:3500,road:380,maint:1500}},
    garages:[
      {name:'Mercedes-Benz Vietnam Star - Tr\u01B0\u1EDDng S\u01A1n',type:'official',city:'HCM',address:'Tr\u01B0\u1EDDng S\u01A1n, Q.T\xE2n B\xECnh',bh:['DBY','GIC'],claims:310,rating:4.9,note:'\u0110\u1EA1i l\xFD Mercedes ch\xEDnh h\xE3ng h\xE0ng \u0111\u1EA7u HCM. Ph\u1EE5 t\xF9ng genuine Germany, k\u1EF9 thu\u1EADt vi\xEAn Mercedes-certified.'},
      {name:'Mercedes-Benz Vietnam Star - H\xE0o Nam',type:'official',city:'HN',address:'H\xE0o Nam, \u0110\u1ED1ng \u0110a',bh:['DBY','GIC'],claims:270,rating:4.9,note:'Showroom flagship HN. Dedicated claims lane cho xe sang, th\u1EDDi gian x\u1EED l\xFD \u01B0u ti\xEAn.'},
      {name:'Star Auto Th\u1EA3o \u0110i\u1EC1n',type:'authorized',city:'HCM',address:'Th\u1EA3o \u0110i\u1EC1n, Q.2',bh:['DBY'],claims:120,rating:4.8,note:'Garage cao c\u1EA5p khu Th\u1EA3o \u0110i\u1EC1n. Chuy\xEAn xe sang ch\xE2u \xC2u, ph\u1EE5 t\xF9ng genuine import, k\u1EF9 thu\u1EADt vi\xEAn 15+ n\u0103m kinh nghi\u1EC7m Mercedes.'},
    ],
    scenarios:['collision','theft','parttheft'],
  },
  bmw:{
    name:'BMW',origin:'\u0110\u1EE9c',color:'#1C69D4',tagline:'Sheer Driving Pleasure \xB7 Ni\u1EC1m vui l\xE1i xe',
    fuels:['x\u0103ng','hybrid'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u xe sang \u0110\u1EE9c n\u1ED5i ti\u1EBFng v\u1EDBi tri\u1EBFt l\xFD l\xE1i th\u1EC3 thao thu\u1EA7n t\xFAy. BMW X3 v\xE0 3 Series ph\u1ED5 bi\u1EBFn nh\u1EA5t t\u1EA1i Vi\u1EC7t Nam, \u0111\u01B0\u1EE3c y\xEAu th\xEDch b\u1EDFi c\u1EA3m gi\xE1c l\xE1i s\u1EAFc n\xE9t v\xE0 c\xF4ng ngh\u1EC7 BMW Intelligent Personal Assistant.',
    models:[
      {name:'3 Series',type:'sedan',bh:30,desc:'Sedan sporty premium',monthly:{bh:2500,fuel:3800,reg:400,maint:1800},slug:'3-series',priceFrom:1799,priceTo:2499},
      {name:'5 Series',type:'sedan',bh:45,desc:'Sedan h\u1EA1ng D cao c\u1EA5p',monthly:{bh:3750,fuel:4200,reg:480,maint:2200},slug:'5-series',priceFrom:2799,priceTo:3499},
      {name:'X3',type:'suv',bh:35,desc:'SUV 5 ch\u1ED7 ph\u1ED5 bi\u1EBFn nh\u1EA5t',monthly:{bh:2917,fuel:3900,reg:420,maint:1900},slug:'x3',priceFrom:1999,priceTo:2699},
      {name:'X5',type:'suv',bh:60,desc:'SUV 7 ch\u1ED7 flagship',monthly:{bh:5000,fuel:5000,reg:550,maint:2800},slug:'x5',priceFrom:3699,priceTo:4899},
    ],
    topInsurers:[
      {name:'DBY Insurance',color:'#1C1C1C',badge:'Chuy\xEAn BMW/Mercedes',reason:'\u0110\u1ED1i t\xE1c garage BMW ch\xEDnh h\xE3ng. K\u1EF9 thu\u1EADt vi\xEAn BMW-certified, ph\u1EE5 t\xF9ng genuine Bavarian \u0111\u01B0\u1EE3c duy\u1EC7t t\u1EF1 \u0111\u1ED9ng.'},
      {name:'GIC Insurance',color:'#2D6B3F',badge:'Xe nh\u1EADp ch\xE2u \xC2u',reason:'Chuy\xEAn xe nh\u1EADp ch\xE2u \xC2u, \u0111\u1ECBnh gi\xE1 t\u1ED1t v\xE0 b\u1ED3i th\u01B0\u1EDDng \u0111\xFAng gi\xE1 tr\u1ECB th\u1EF1c t\u1EBF BMW.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Nhanh nh\u1EA5t',reason:'X\u1EED l\xFD b\u1ED3i th\u01B0\u1EDDng 3 ng\xE0y \u2014 ki\u1EC3m tra th\u1ECFa thu\u1EADn garage BMW tr\u01B0\u1EDBc khi k\xFD h\u1EE3p \u0111\u1ED3ng.'},
    ],
    notes:[
      {q:'BMW xDrive vs sDrive \u1EA3nh h\u01B0\u1EDFng ph\xED b\u1EA3o hi\u1EC3m th\u1EBF n\xE0o?',a:'xDrive (4WD) c\xF3 gi\xE1 xe cao h\u01A1n sDrive c\xF9ng model ~5-10%, n\xEAn ph\xED BH th\xE2n v\u1ECF c\u0169ng cao h\u01A1n t\u01B0\u01A1ng \u1EE9ng. H\u1EC7 th\u1ED1ng xDrive ph\u1EE9c t\u1EA1p h\u01A1n n\xEAn chi ph\xED s\u1EEDa ch\u1EEFa sau tai n\u1EA1n c\u0169ng cao h\u01A1n.'},
      {q:'BMW mua t\u1EA1i \u0111\u1EA1i l\xFD ch\xEDnh h\xE3ng vs nh\u1EADp t\u01B0 c\xF3 \u1EA3nh h\u01B0\u1EDFng BH kh\xF4ng?',a:'\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng: b\u1EA3o h\xE0nh \u0111\u1EA7y \u0111\u1EE7, ph\u1EE5 t\xF9ng genuine s\u1EB5n c\xF3. Nh\u1EADp t\u01B0: ph\u1EA3i ki\u1EC3m tra VIN \u0111\u1EC3 x\xE1c nh\u1EADn ph\xF9 h\u1EE3p ti\xEAu chu\u1EA9n VN, ph\xED BH t\u01B0\u01A1ng \u0111\u01B0\u01A1ng nh\u01B0ng \u0111\u1ECBnh gi\xE1 xe c\xF3 th\u1EC3 kh\xE1c. DBY v\xE0 GIC chuy\xEAn x\u1EED l\xFD c\u1EA3 2 tr\u01B0\u1EDDng h\u1EE3p.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2605\u2606',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'R\u1EA5t cao',level:'neutral'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Genuine kh\xF3',level:'neutral'},
      {label:'C\u1EA3m gi\xE1c l\xE1i',val:'Sporty #1',level:'high'},
    ],
    insight:{owners:720,topModel:'X3',monthly:9120,vs_estimate:+2.4,hcm:9780,hn:8310,breakdown:{bh:2917,fuel:3900,road:420,maint:1900}},
    garages:[
      {name:'BMW Euro Auto - Tr\u01B0\u1EDDng S\u01A1n',type:'official',city:'HCM',address:'Tr\u01B0\u1EDDng S\u01A1n, Q.T\xE2n B\xECnh',bh:['DBY','GIC'],claims:240,rating:4.9,note:'\u0110\u1EA1i l\xFD BMW ch\xEDnh h\xE3ng l\u1EDBn nh\u1EA5t VN. K\u1EF9 thu\u1EADt vi\xEAn BMW-certified, ph\u1EE5 t\xF9ng Bavarian genuine, diagnostic ch\xEDnh h\xE3ng.'},
      {name:'BMW Euro Auto - Tr\u1EA7n Duy H\u01B0ng',type:'official',city:'HN',address:'Tr\u1EA7n Duy H\u01B0ng, C\u1EA7u Gi\u1EA5y',bh:['DBY','GIC'],claims:200,rating:4.8,note:'Flagship showroom HN. Dedicated service lane cho claim BH, thay xe l\u1EDBp lux khi s\u1EEDa ch\u1EEFa d\xE0i ng\xE0y.'},
      {name:'Prestige Auto Th\u1EA3o \u0110i\u1EC1n',type:'authorized',city:'HCM',address:'Qu\u1EADn 2, HCM',bh:['GIC'],claims:90,rating:4.8,note:'Chuy\xEAn BMW v\xE0 xe sang ch\xE2u \xC2u. Gi\xE1 t\u1ED1t h\u01A1n \u0111\u1EA1i l\xFD 15%, kh\xF4ng d\xF9ng ph\u1EE5 t\xF9ng OEM, cam k\u1EBFt genuine.'},
    ],
    scenarios:['collision','theft','parttheft'],
  },
  lexus:{
    name:'Lexus',origin:'Nh\u1EADt B\u1EA3n',color:'#1C1C1C',tagline:'Sang tr\u1ECDng \xB7 \u0110\xE1ng tin \xB7 Tr\u1EA3i nghi\u1EC7m \u0111\u1EC9nh cao',
    fuels:['x\u0103ng','hybrid'],popular:true,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u luxury c\u1EE7a Toyota v\u1EDBi \u0111\u1ED9 tin c\u1EADy Nh\u1EADt B\u1EA3n v\xE0 tr\u1EA3i nghi\u1EC7m n\u1ED9i th\u1EA5t \u0111\u1EB3ng c\u1EA5p. Lexus d\u1EABn \u0111\u1EA7u ph\xE2n kh\xFAc premium t\u1EA1i Vi\u1EC7t Nam nh\u1EDD chi ph\xED b\u1EA3o d\u01B0\u1EE1ng th\u1EA5p h\u01A1n Mercedes v\xE0 BMW c\xF9ng ph\xE2n kh\xFAc.',
    models:[
      {name:'NX',type:'suv',bh:33,desc:'SUV compact premium b\xE1n ch\u1EA1y nh\u1EA5t',monthly:{bh:2750,fuel:2800,reg:300,maint:600},slug:'nx',priceFrom:1999,priceTo:2599},
      {name:'RX',type:'suv',bh:45,desc:'SUV h\u1EA1ng D flagship',monthly:{bh:3750,fuel:3000,reg:400,maint:700},slug:'rx',priceFrom:2599,priceTo:3299},
      {name:'ES',type:'sedan',bh:30,desc:'Sedan business ph\u1ED5 bi\u1EBFn',monthly:{bh:2500,fuel:2600,reg:280,maint:550},slug:'es',priceFrom:1799,priceTo:2399},
      {name:'LX',type:'suv',bh:100,desc:'SUV flagship h\u1EA1ng sang',monthly:{bh:8333,fuel:5200,reg:900,maint:1500},slug:'lx',priceFrom:8099,priceTo:9799},
      {name:'IS',type:'sedan',bh:26,desc:'Sedan sporty h\u1EA1ng C',monthly:{bh:2167,fuel:2600,reg:260,maint:500},slug:'is',priceFrom:1599,priceTo:2099},
      {name:'UX',type:'suv',bh:22,desc:'Crossover \u0111\xF4 th\u1ECB hybrid',monthly:{bh:1833,fuel:2000,reg:230,maint:420},slug:'ux',priceFrom:1699,priceTo:1999},
    ],
    topInsurers:[
      {name:'PTI Insurance',color:'#003087',badge:'Chuy\xEAn xe sang',reason:'T\u1EF7 l\u1EC7 ch\u1EA5p nh\u1EADn ph\u1EE5 t\xF9ng genuine Lexus cao nh\u1EA5t th\u1ECB tr\u01B0\u1EDDng. Th\u1ECFa thu\u1EADn tr\u1EF1c ti\u1EBFp v\u1EDBi TMV.'},
      {name:'Liberty Insurance',color:'#2E4099',badge:'Garage \u1EE7y quy\u1EC1n',reason:'M\u1EA1ng l\u01B0\u1EDBi garage \u1EE7y quy\u1EC1n Lexus. Ph\u1EE5 t\xF9ng genuine \u0111\u01B0\u1EE3c duy\u1EC7t kh\xF4ng c\u1EA7n gi\xE1m \u0111\u1ECBnh ri\xEAng.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Nhanh nh\u1EA5t',reason:'B\u1ED3i th\u01B0\u1EDDng 3-4 ng\xE0y. Ph\u1EE7 t\u1ED1t t\u1EA1i HCM v\xE0 H\xE0 N\u1ED9i \u2014 hai th\u1ECB tr\u01B0\u1EDDng Lexus l\u1EDBn nh\u1EA5t VN.'},
    ],
    notes:[
      {q:'Lexus c\xF3 gi\u1EEF gi\xE1 t\u1ED1t kh\xF4ng so v\u1EDBi Mercedes v\xE0 BMW?',a:'T\u1ED1t h\u01A1n \u0111\xE1ng k\u1EC3. Lexus ES m\u1EA5t ~15% sau 3 n\u0103m, trong khi E-Class m\u1EA5t ~25-30%. Ngu\u1ED3n cung ph\u1EE5 t\xF9ng \u1ED5n \u0111\u1ECBnh t\u1EEB TMV gi\xFAp gi\xE1 d\u1ECBch v\u1EE5 d\u1EC5 ki\u1EC3m so\xE1t.'},
      {q:'B\u1EA3o hi\u1EC3m th\xE2n v\u1ECF Lexus c\xF3 kh\xE1c xe ph\u1ED5 th\xF4ng kh\xF4ng?',a:'Ph\xED cao h\u01A1n v\xEC gi\xE1 tr\u1ECB xe cao, nh\u01B0ng ph\u1EE5 t\xF9ng genuine Lexus \u0111\u01B0\u1EE3c nhi\u1EC1u NB duy\u1EC7t tr\u1EF1c ti\u1EBFp qua th\u1ECFa thu\u1EADn v\u1EDBi TMV. N\xEAn ch\u1ECDn NB c\xF3 authorized garage Lexus \u0111\u1EC3 tr\xE1nh ch\u1EDD gi\xE1m \u0111\u1ECBnh.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2605\u2605',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Th\u1EA5p vs h\u1EA1ng',level:'good'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Genuine s\u1EB5n',level:'good'},
      {label:'Garage',val:'H\u1EA1n ch\u1EBF',level:'warn'},
    ],
    insight:{owners:1240,topModel:'NX',monthly:6450,vs_estimate:+1.2,hcm:7200,hn:5600,breakdown:{bh:2750,fuel:2800,road:300,maint:600}},
    garages:[
      {name:'Lexus Th\u0103ng Long',type:'official',city:'HN',address:'Ph\u1EA1m H\xF9ng, Nam T\u1EEB Li\xEAm',bh:['PTI','Liberty'],claims:420,rating:4.9,note:'Showroom flagship mi\u1EC1n B\u1EAFc. K\u1EF9 thu\u1EADt vi\xEAn \u0111\u01B0\u1EE3c \u0111\xE0o t\u1EA1o t\u1EA1i Nh\u1EADt, d\u1ECBch v\u1EE5 xe thay th\u1EBF Lexus.'},
      {name:'Lexus S\xE0i G\xF2n',type:'official',city:'HCM',address:'241 \u0110i\u1EC7n Bi\xEAn Ph\u1EE7, B\xECnh Th\u1EA1nh',bh:['PTI','Liberty'],claims:510,rating:4.9,note:'Showroom flagship mi\u1EC1n Nam. D\u1ECBch v\u1EE5 h\u1EA1ng sang, ph\u1EE5 t\xF9ng genuine nh\u1EADp tr\u1EF1c ti\u1EBFp t\u1EEB Nh\u1EADt.'},
      {name:'Lexus \u0110\xE0 N\u1EB5ng',type:'official',city:'\u0110\xE0 N\u1EB5ng',address:'L\xEA V\u0103n Hi\u1EBFn, Ng\u0169 H\xE0nh S\u01A1n',bh:['PTI'],claims:180,rating:4.8,note:'\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng duy nh\u1EA5t mi\u1EC1n Trung.'},
    ],
    scenarios:['collision','glass','parked'],
  },
  audi:{
    name:'Audi',origin:'\u0110\u1EE9c',color:'#BB0A14',tagline:'C\xF4ng ngh\u1EC7 ti\xEAn ti\u1EBFn \xB7 Thi\u1EBFt k\u1EBF hi\u1EC7n \u0111\u1EA1i \xB7 Quattro',
    fuels:['x\u0103ng','phev'],popular:true,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u \u0110\u1EE9c v\u1EDBi thi\u1EBFt k\u1EBF \u0111\u01B0\u01A1ng \u0111\u1EA1i v\xE0 h\u1EC7 th\u1ED1ng AWD Quattro n\u1ED5i ti\u1EBFng. Audi h\xFAt \u0111\u1ED1i t\u01B0\u1EE3ng kh\xE1ch h\xE0ng tr\u1EBB d\u01B0\u1EDBi 45 tu\u1ED5i nh\u1EDD giao di\u1EC7n MMI ti\xEAn ti\u1EBFn v\xE0 exterior design n\u1ED5i b\u1EADt h\u01A1n Mercedes.',
    models:[
      {name:'Q5',type:'suv',bh:28,desc:'SUV h\u1EA1ng C b\xE1n ch\u1EA1y nh\u1EA5t',monthly:{bh:2333,fuel:2800,reg:270,maint:700},slug:'q5',priceFrom:1999,priceTo:2599},
      {name:'Q7',type:'suv',bh:42,desc:'SUV 7 ch\u1ED7 h\u1EA1ng D',monthly:{bh:3500,fuel:3600,reg:400,maint:900},slug:'q7',priceFrom:2999,priceTo:3799},
      {name:'A6',type:'sedan',bh:30,desc:'Sedan business flagship',monthly:{bh:2500,fuel:2800,reg:290,maint:750},slug:'a6',priceFrom:2199,priceTo:2899},
      {name:'A4',type:'sedan',bh:20,desc:'Sedan h\u1EA1ng C entry premium',monthly:{bh:1667,fuel:2600,reg:210,maint:600},slug:'a4',priceFrom:1399,priceTo:1899},
      {name:'Q3',type:'suv',bh:20,desc:'SUV compact entry',monthly:{bh:1667,fuel:2400,reg:210,maint:550},slug:'q3',priceFrom:1399,priceTo:1799},
      {name:'Q8',type:'suv',bh:60,desc:'SUV coupe flagship',monthly:{bh:5000,fuel:4000,reg:600,maint:1200},slug:'q8',priceFrom:3599,priceTo:4599},
    ],
    topInsurers:[
      {name:'PTI Insurance',color:'#003087',badge:'Chuy\xEAn xe \u0110\u1EE9c',reason:'T\u1EF7 l\u1EC7 duy\u1EC7t ph\u1EE5 t\xF9ng genuine Audi t\u1ED1t nh\u1EA5t. Th\u1ECFa thu\u1EADn v\u1EDBi c\xE1c garage \u1EE7y quy\u1EC1n Audi.'},
      {name:'AXA Insurance',color:'#00008F',badge:'Xe nh\u1EADp kh\u1EA9u',reason:'Kinh nghi\u1EC7m b\u1ED3i th\u01B0\u1EDDng xe CBU nh\u1EADp kh\u1EA9u. Ph\xF9 h\u1EE3p Audi nh\u1EADp t\u1EEB ch\xE2u \xC2u.'},
      {name:'Liberty Insurance',color:'#2E4099',badge:'Nhanh',reason:'X\u1EED l\xFD 3-4 ng\xE0y t\u1EA1i HCM v\xE0 H\xE0 N\u1ED9i. T\u1ED1t cho xe Audi th\u01B0\u1EDDng xuy\xEAn s\u1EED d\u1EE5ng \u0111\xF4 th\u1ECB.'},
    ],
    notes:[
      {q:'Audi TFSI v\xE0 TDI b\u1EA3o hi\u1EC3m c\xF3 kh\xE1c nhau kh\xF4ng?',a:'TDI (diesel) ph\xED BH th\u01B0\u1EDDng cao h\u01A1n 3-5% v\xEC chi ph\xED s\u1EEDa \u0111\u1ED9ng c\u01A1 diesel cao h\u01A1n. Tuy nhi\xEAn ti\xEAu hao nhi\xEAn li\u1EC7u th\u1EA5p h\u01A1n \u0111\xE1ng k\u1EC3. Ph\u1EA7n l\u1EDBn Audi b\xE1n t\u1EA1i VN l\xE0 TFSI (x\u0103ng).'},
      {q:'Ph\u1EE5 t\xF9ng Audi nh\u1EADp v\u1EC1 c\xF3 l\xE2u kh\xF4ng?',a:'Audi ch\xEDnh h\xE3ng do VW Group Vietnam ph\xE2n ph\u1ED1i. Ph\u1EE5 t\xF9ng th\xF4ng th\u01B0\u1EDDng c\xF3 s\u1EB5n 3-5 ng\xE0y. Ph\u1EE5 t\xF9ng hi\u1EBFm t\u1EEB \u0110\u1EE9c m\u1EA5t 2-4 tu\u1EA7n. N\xEAn ch\u1ECDn NB c\xF3 authorized garage Audi \u0111\u1EC3 kh\xF4ng ch\u1EDD ph\xE1n quy\u1EBFt ri\xEAng.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2606\u2606',level:'warn'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Kh\xE1 cao',level:'warn'},
      {label:'Ph\u1EE5 t\xF9ng',val:'2-4 tu\u1EA7n',level:'warn'},
      {label:'Garage',val:'T\u1EADp trung HCM/HN',level:'warn'},
    ],
    insight:{owners:890,topModel:'Q5',monthly:6600,vs_estimate:+1.8,hcm:7400,hn:5800,breakdown:{bh:2333,fuel:2800,road:270,maint:700}},
    garages:[
      {name:'Audi \u0110\u1ED1ng \u0110a',type:'official',city:'HN',address:'229 T\xE2y S\u01A1n, \u0110\u1ED1ng \u0110a',bh:['PTI','Liberty'],claims:310,rating:4.7,note:'Showroom Audi l\u1EDBn nh\u1EA5t H\xE0 N\u1ED9i. K\u1EF9 thu\u1EADt vi\xEAn \u0111\u01B0\u1EE3c \u0111\xE0o t\u1EA1o t\u1EA1i VWAG.'},
      {name:'Audi B\xECnh D\u01B0\u01A1ng',type:'official',city:'HCM',address:'Qu\u1ED1c l\u1ED9 13, B\xECnh D\u01B0\u01A1ng',bh:['PTI'],claims:280,rating:4.7,note:'\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng ph\u1EE5c v\u1EE5 khu v\u1EF1c HCM v\xE0 v\xF9ng ven.'},
    ],
    scenarios:['collision','glass','parttheft'],
  },
  volvo:{
    name:'Volvo',origin:'Th\u1EE5y \u0110i\u1EC3n',color:'#003057',tagline:'An to\xE0n h\xE0ng \u0111\u1EA7u \xB7 B\u1EAFc \xC2u \xB7 Xe \u0111i\u1EC7n h\xF3a',
    fuels:['x\u0103ng','phev','mild-hybrid'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Th\u1EE5y \u0110i\u1EC3n v\u1EDBi tri\u1EBFt l\xFD an to\xE0n h\xE0ng \u0111\u1EA7u th\u1EBF gi\u1EDBi. Volvo XC60 l\xE0 l\u1EF1a ch\u1ECDn c\u1EE7a gia \u0111\xECnh \u01B0u ti\xEAn an to\xE0n v\xE0 s\u1EB5n s\xE0ng tr\u1EA3 gi\xE1 cho thi\u1EBFt k\u1EBF Scandinavian t\u1ED1i gi\u1EA3n kh\xE1c bi\u1EC7t.',
    models:[
      {name:'XC60',type:'suv',bh:26,desc:'SUV h\u1EA1ng C b\xE1n ch\u1EA1y nh\u1EA5t',monthly:{bh:2167,fuel:2800,reg:260,maint:700},slug:'xc60',priceFrom:2049,priceTo:2599},
      {name:'XC90',type:'suv',bh:36,desc:'SUV 7 ch\u1ED7 flagship',monthly:{bh:3000,fuel:3200,reg:360,maint:900},slug:'xc90',priceFrom:3099,priceTo:3799},
      {name:'XC40',type:'suv',bh:14,desc:'SUV compact entry',monthly:{bh:1167,fuel:2400,reg:175,maint:550},slug:'xc40',priceFrom:1099,priceTo:1499},
      {name:'S90',type:'sedan',bh:30,desc:'Sedan h\u1EA1ng D Phev',monthly:{bh:2500,fuel:2600,reg:290,maint:800},slug:'s90',priceFrom:2299,priceTo:2799},
    ],
    topInsurers:[
      {name:'AXA Insurance',color:'#00008F',badge:'Xe ch\xE2u \xC2u',reason:'Chuy\xEAn xe nh\u1EADp Th\u1EE5y \u0110i\u1EC3n. Th\u1ECFa thu\u1EADn ph\u1EE5 t\xF9ng genuine v\u1EDBi Volvo Cars Vietnam.'},
      {name:'PTI Insurance',color:'#003087',badge:'B\u1ED3i th\u01B0\u1EDDng nhanh',reason:'X\u1EED l\xFD 4-5 ng\xE0y. T\u1ED1t cho xe Volvo d\xF9ng \u0111\xF4 th\u1ECB v\xE0 c\xF3 garage \u1EE7y quy\u1EC1n t\u1EA1i HCM/HN.'},
    ],
    notes:[
      {q:'Volvo PHEV c\xF3 b\u1EA3o hi\u1EC3m kh\xE1c xe x\u0103ng th\u01B0\u1EDDng kh\xF4ng?',a:'Kh\xF4ng kh\xE1c ph\xED. Pin PHEV b\u1ECB h\u01B0 h\u1ECFng do tai n\u1EA1n \u0111\u01B0\u1EE3c BH th\xE2n v\u1ECF b\u1ED3i th\u01B0\u1EDDng. Tuy nhi\xEAn chi ph\xED thay pin cao (200-400 tri\u1EC7u) n\xEAn n\xEAn ch\u1ECDn m\u1EE9c kh\u1EA5u tr\u1EEB th\u1EA5p cho xe PHEV.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2605\u2606',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Trung b\xECnh cao',level:'warn'},
      {label:'Ph\u1EE5 t\xF9ng',val:'\u0110\u1EB7t t\u1EEB Th\u1EE5y \u0110i\u1EC3n',level:'warn'},
      {label:'Garage',val:'\xCDt \u0111i\u1EC3m',level:'warn'},
    ],
    insight:{owners:420,topModel:'XC60',monthly:6127,vs_estimate:+2.1,hcm:6900,hn:5200,breakdown:{bh:2167,fuel:2800,road:260,maint:700}},
    garages:[
      {name:'Volvo C\u1EA7u Gi\u1EA5y',type:'official',city:'HN',address:'C\u1EA7u Gi\u1EA5y, H\xE0 N\u1ED9i',bh:['AXA','PTI'],claims:180,rating:4.8,note:'Showroom Volvo duy nh\u1EA5t t\u1EA1i H\xE0 N\u1ED9i. K\u1EF9 thu\u1EADt vi\xEAn \u0111\u01B0\u1EE3c \u0111\xE0o t\u1EA1o t\u1EEB Volvo Sweden.'},
      {name:'Volvo V\xF5 V\u0103n Ki\u1EC7t',type:'official',city:'HCM',address:'V\xF5 V\u0103n Ki\u1EC7t, Qu\u1EADn 6',bh:['AXA','PTI'],claims:220,rating:4.8,note:'Flagship showroom t\u1EA1i HCM. C\xF3 xe thay th\u1EBF Volvo khi xe \u0111ang s\u1EEDa.'},
    ],
    scenarios:['collision','glass','parked'],
  },
  mg:{
    name:'MG',origin:'Trung Qu\u1ED1c (SAIC)',color:'#C41E3A',tagline:'Trang b\u1ECB \u0111\u1EA7y \u0111\u1EE7 \xB7 Gi\xE1 c\u1EA1nh tranh \xB7 N\u1ED5i b\u1EADt',
    fuels:['x\u0103ng','phev'],popular:true,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Anh thu\u1ED9c t\u1EADp \u0111o\xE0n SAIC (Trung Qu\u1ED1c), n\u1ED5i ti\u1EBFng v\u1EC1 trang b\u1ECB \u0111\u1EA7y \u0111\u1EE7 v\u1EDBi gi\xE1 t\u1ED1t. MG ZS v\xE0 HS l\xE0 l\u1EF1a ch\u1ECDn h\xE0ng \u0111\u1EA7u cho ng\u01B0\u1EDDi mu\u1ED1n SUV \u0111\u1EB9p, nhi\u1EC1u t\xEDnh n\u0103ng m\xE0 kh\xF4ng mu\u1ED1n tr\u1EA3 gi\xE1 xe Nh\u1EADt hay H\xE0n.',
    models:[
      {name:'ZS',slug:'zs',type:'suv',bh:6,desc:'SUV \u0111\xF4 th\u1ECB c\u1EE1 nh\u1ECF b\xE1n ch\u1EA1y nh\u1EA5t',monthly:{bh:500,fuel:2000,reg:125,maint:200}},
      {name:'ZS EV',slug:'zs-ev',type:'ev',bh:7,desc:'SUV \u0111i\u1EC7n \u0111\xF4 th\u1ECB 320km/s\u1EA1c',monthly:{bh:583,fuel:500,reg:130,maint:170}},
      {name:'HS',slug:'hs',type:'suv',bh:8,desc:'SUV h\u1EA1ng C trang b\u1ECB t\u1ED1t',monthly:{bh:667,fuel:2400,reg:145,maint:250}},
      {name:'MG4 EV',slug:'mg4-ev',type:'ev',bh:8,desc:'Hatchback \u0111i\u1EC7n sporty 430km',monthly:{bh:667,fuel:600,reg:140,maint:180}},
      {name:'MG5',slug:'mg5',type:'sedan',bh:5,desc:'Sedan h\u1EA1ng B gi\xE1 t\u1ED1t',monthly:{bh:417,fuel:2000,reg:120,maint:190}},
      {name:'RX8',slug:'rx8',type:'suv',bh:10,desc:'SUV 7 ch\u1ED7 h\u1EA1ng D',monthly:{bh:833,fuel:2800,reg:160,maint:320}},
      {name:'VS HEV',slug:'vs-hev',type:'suv',bh:9,desc:'SUV hybrid 2 c\u1EA7u',monthly:{bh:750,fuel:1800,reg:155,maint:280}},
    ],
    topInsurers:[
      {name:'B\u1EA3o Minh',color:'#0066CC',badge:'Ph\u1EE5 t\xF9ng t\u1ED1t',reason:'T\u1EF7 l\u1EC7 duy\u1EC7t ph\u1EE5 t\xF9ng MG t\u1ED1t, garage MG \u1EE7y quy\u1EC1n nhi\u1EC1u t\u1EA1i TP l\u1EDBn. Ph\xED th\u1EA5p nh\u1EA5t cho xe MG.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Nhanh',reason:'B\u1ED3i th\u01B0\u1EDDng 3 ng\xE0y. M\u1EA1ng l\u01B0\u1EDBi garage r\u1ED9ng ph\u1EE7 c\u1EA3 xe Trung Qu\u1ED1c.'},
      {name:'PJICO',color:'#CC0000',badge:'Ph\u1EE7 t\u1EC9nh th\xE0nh',reason:'T\u1ED1t cho xe MG \u1EDF khu v\u1EF1c t\u1EC9nh th\xE0nh v\xE0 v\xF9ng ven n\u01A1i \u0111\u1EA1i l\xFD MG \u0111ang m\u1EDF r\u1ED9ng.'},
    ],
    notes:[
      {q:'Ph\u1EE5 t\xF9ng MG c\xF3 d\u1EC5 t\xECm kh\xF4ng n\u1EBFu xe h\u01B0 h\u1ECFng?',a:'MG c\xF3 h\u1EC7 th\u1ED1ng ph\u1EE5 t\xF9ng t\u01B0\u01A1ng \u0111\u1ED1i t\u1ED1t t\u1EA1i VN nh\u1EDD SAIC c\xF3 kho \u1EDF HCM v\xE0 HN. Ph\u1EE5 t\xF9ng th\xE2n v\u1ECF (c\u1EA3n, \u0111\xE8n) th\u01B0\u1EDDng c\xF3 s\u1EB5n trong 1-3 ng\xE0y. Ph\u1EE5 t\xF9ng \u0111\u1ED9ng c\u01A1 c\xF3 th\u1EC3 m\u1EA5t 1-2 tu\u1EA7n n\u1EBFu kh\xF4ng ph\u1ED5 bi\u1EBFn.'},
      {q:'Gi\xE1 tr\u1ECB gi\u1EEF xe c\u1EE7a MG sau 3-5 n\u0103m nh\u01B0 th\u1EBF n\xE0o?',a:'Gi\u1EEF gi\xE1 trung b\xECnh th\u1EA5p h\u01A1n xe Nh\u1EADt H\xE0n c\xF9ng ph\xE2n kh\xFAc, kho\u1EA3ng 55-65% sau 3 n\u0103m. Mua xe m\u1EDBi d\u1EC5 h\u01A1n xe c\u0169 c\u1EE7a MG. N\xEAn ch\u1ECDn BH th\xE2n v\u1ECF v\u1EDBi m\u1EE9c kh\u1EA5u tr\u1EEB th\u1EA5p \u0111\u1EC3 b\u1EA3o v\u1EC7 gi\xE1 tr\u1ECB xe.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2606\u2606\u2606',level:'bad'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'R\u1EBB',level:'good'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Kh\xE1 s\u1EB5n',level:'good'},
      {label:'Garage',val:'\u0110ang m\u1EDF r\u1ED9ng',level:'warn'},
    ],
    insight:{owners:1680,topModel:'ZS',monthly:2845,vs_estimate:-0.3,hcm:2900,hn:2780,breakdown:{bh:500,fuel:2000,road:125,maint:200}},
    garages:[
      {name:'MG Tr\u01B0\u1EDDng Chinh',type:'official',city:'HCM',address:'Tr\u01B0\u1EDDng Chinh, T\xE2n B\xECnh',bh:['B\u1EA3o Minh','PVI'],claims:340,rating:4.5,note:'Showroom MG l\u1EDBn nh\u1EA5t HCM. Ph\u1EE5 t\xF9ng kho \u0111\u1EA7y \u0111\u1EE7 nh\u1EA5t.'},
      {name:'MG \u0110\u1ED1ng \u0110a',type:'official',city:'HN',address:'Nguy\u1EC5n L\u01B0\u01A1ng B\u1EB1ng, \u0110\u1ED1ng \u0110a',bh:['B\u1EA3o Minh'],claims:280,rating:4.5,note:'\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng t\u1EA1i H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','parked','theft'],
  },
  isuzu:{
    name:'Isuzu',origin:'Nh\u1EADt B\u1EA3n',color:'#CC0000',tagline:'B\xE1n t\u1EA3i b\u1EC1n b\u1EC9 \xB7 T\u1EA3i th\u1EF1c d\u1EE5ng \xB7 Chi ph\xED th\u1EA5p',
    fuels:['diesel'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Nh\u1EADt B\u1EA3n chuy\xEAn \u0111\u1ED9ng c\u01A1 diesel v\xE0 xe th\u01B0\u01A1ng m\u1EA1i b\u1EC1n b\u1EC9. D-Max l\xE0 m\u1EABu b\xE1n t\u1EA3i b\xE1n ch\u1EA1y top 5 th\u1ECB tr\u01B0\u1EDDng VN. Ph\xF9 h\u1EE3p doanh nghi\u1EC7p, n\xF4ng nghi\u1EC7p v\xE0 ng\u01B0\u1EDDi d\xF9ng c\u1EA7n xe v\u1EEBa ch\u1EDF h\xE0ng v\u1EEBa ch\u1EDF ng\u01B0\u1EDDi.',
    models:[
      {name:'D-Max',type:'truck',bh:9,desc:'B\xE1n t\u1EA3i diesel b\xE1n ch\u1EA1y nh\u1EA5t',monthly:{bh:750,fuel:2600,reg:140,maint:280},slug:'d-max',priceFrom:759,priceTo:959},
      {name:'mu-X',type:'suv',bh:11,desc:'SUV 7 ch\u1ED7 g\u1EA7m cao',monthly:{bh:917,fuel:2800,reg:165,maint:320},slug:'mu-x',priceFrom:949,priceTo:1149},
    ],
    topInsurers:[
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'Xe th\u01B0\u01A1ng m\u1EA1i',reason:'Kinh nghi\u1EC7m b\u1EA3o hi\u1EC3m xe b\xE1n t\u1EA3i v\xE0 th\u01B0\u01A1ng m\u1EA1i l\xE2u n\u0103m. Ph\u1EE7 t\u1ED1t \u1EDF t\u1EC9nh th\xE0nh.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Nhanh nh\u1EA5t',reason:'B\u1ED3i th\u01B0\u1EDDng 3 ng\xE0y. Ph\u1EE7 r\u1ED9ng bao g\u1ED3m c\u1EA3 v\xF9ng t\u1EC9nh th\xE0nh.'},
      {name:'PJICO',color:'#CC0000',badge:'Ph\u1EE7 t\u1EC9nh',reason:'M\u1EA1ng l\u01B0\u1EDBi s\u1EEDa ch\u1EEFa ph\u1EE7 t\u1ED1t \u1EDF t\u1EC9nh th\xE0nh v\xE0 n\xF4ng th\xF4n \u2014 n\u01A1i D-Max \u0111\u01B0\u1EE3c d\xF9ng nhi\u1EC1u nh\u1EA5t.'},
    ],
    notes:[
      {q:'B\xE1n t\u1EA3i D-Max c\xF3 \u0111\u01B0\u1EE3c BH th\xE2n v\u1ECF nh\u01B0 xe con kh\xF4ng?',a:'C\xF3. D-Max v\xE0 mu-X \u0111\u01B0\u1EE3c b\u1EA3o hi\u1EC3m th\xE2n v\u1ECF theo gi\xE1 tr\u1ECB th\u1EF1c t\u1EBF. Tuy nhi\xEAn m\u1ED9t s\u1ED1 NB ph\xE2n lo\u1EA1i b\xE1n t\u1EA3i v\xE0o nh\xF3m xe th\u01B0\u01A1ng m\u1EA1i v\u1EDBi \u0111i\u1EC1u kho\u1EA3n \u0111\u1EB7c bi\u1EC7t. N\xEAn ki\u1EC3m tra r\xF5 \u0111i\u1EC1u kho\u1EA3n tr\u01B0\u1EDBc khi mua.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2605\u2606',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'R\u1EBB nh\u1EA5t h\u1EA1ng',level:'good'},
      {label:'Ph\u1EE5 t\xF9ng',val:'D\u1EC5 t\xECm',level:'good'},
      {label:'Garage',val:'To\xE0n qu\u1ED1c',level:'good'},
    ],
    insight:{owners:2140,topModel:'D-Max',monthly:3770,vs_estimate:-0.8,hcm:3900,hn:3650,breakdown:{bh:750,fuel:2600,road:140,maint:280}},
    garages:[
      {name:'Isuzu Vi\u1EC7t Nam HCM',type:'official',city:'HCM',address:'Qu\u1ED1c l\u1ED9 1A, B\xECnh Ch\xE1nh',bh:['B\u1EA3o Vi\u1EC7t','PVI'],claims:480,rating:4.6,note:'Trung t\xE2m d\u1ECBch v\u1EE5 l\u1EDBn nh\u1EA5t mi\u1EC1n Nam. Chuy\xEAn D-Max v\xE0 mu-X.'},
      {name:'Isuzu H\xE0 N\u1ED9i',type:'official',city:'HN',address:'Gi\u1EA3i Ph\xF3ng, Ho\xE0ng Mai',bh:['B\u1EA3o Vi\u1EC7t'],claims:390,rating:4.6,note:'\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng mi\u1EC1n B\u1EAFc.'},
    ],
    scenarios:['collision','parttheft','fire'],
  },
  suzuki:{
    name:'Suzuki',origin:'Nh\u1EADt B\u1EA3n',color:'#003DA5',tagline:'Nh\u1ECF g\u1ECDn \xB7 Ti\u1EBFt ki\u1EC7m \xB7 Gi\xE1 th\u1EF1c t\u1EBF',
    fuels:['x\u0103ng'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Nh\u1EADt B\u1EA3n chuy\xEAn xe nh\u1ECF g\u1ECDn v\xE0 ti\u1EBFt ki\u1EC7m nhi\xEAn li\u1EC7u. Suzuki XL7 v\xE0 Ertiga ph\xF9 h\u1EE3p gia \u0111\xECnh c\u1EA7n MPV 7 ch\u1ED7 gi\xE1 ph\u1EA3i ch\u0103ng. Swift l\xE0 hatchback c\u1EE1 nh\u1ECF ph\u1ED5 bi\u1EBFn v\u1EDBi ph\u1EE5 n\u1EEF \u0111\xF4 th\u1ECB.',
    models:[
      {name:'XL7',type:'mpv',bh:8,desc:'MPV 7 ch\u1ED7 gi\xE1 t\u1ED1t',monthly:{bh:667,fuel:2400,reg:140,maint:220},slug:'xl7',priceFrom:599,priceTo:669},
      {name:'Ertiga',type:'mpv',bh:6,desc:'MPV 7 ch\u1ED7 compact',monthly:{bh:500,fuel:2200,reg:125,maint:200},slug:'ertiga',priceFrom:499,priceTo:559},
      {name:'Swift',type:'sedan',bh:6,desc:'Hatchback \u0111\xF4 th\u1ECB nh\u1ECF g\u1ECDn',monthly:{bh:500,fuel:1800,reg:125,maint:180},slug:'swift',priceFrom:529,priceTo:609},
    ],
    topInsurers:[
      {name:'B\u1EA3o Minh',color:'#0066CC',badge:'Ph\xED t\u1ED1t nh\u1EA5t',reason:'Ph\xED th\xE2n v\u1ECF th\u1EA5p nh\u1EA5t cho xe Suzuki gi\xE1 trung b\xECnh th\u1EA5p. B\u1ED3i th\u01B0\u1EDDng \u1ED5n \u0111\u1ECBnh.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Ph\u1EE7 t\u1EC9nh',reason:'Ph\u1EE7 r\u1ED9ng to\xE0n qu\u1ED1c, ph\xF9 h\u1EE3p XL7 v\xE0 Ertiga d\xF9ng c\u1EA3 t\u1EC9nh th\xE0nh l\u1EABn n\u1ED9i \u0111\xF4.'},
    ],
    notes:[
      {q:'Suzuki XL7 vs Ertiga n\xEAn ch\u1ECDn BH g\xF3i n\xE0o?',a:'XL7 v\xE0 Ertiga gi\xE1 th\u1EA5p, n\xEAn c\xE2n nh\u1EAFc g\xF3i th\xE2n v\u1ECF c\u01A1 b\u1EA3n (va ch\u1EA1m + tr\u1ED9m c\u1EAFp) m\xE0 kh\xF4ng c\u1EA7n m\u1EDF r\u1ED9ng nhi\u1EC1u. Chi ph\xED BH th\u01B0\u1EDDng chi\u1EBFm d\u01B0\u1EDBi 1.2% gi\xE1 tr\u1ECB xe m\u1ED7i n\u0103m.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2606\u2606',level:'warn'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'R\u1EBB nh\u1EA5t',level:'good'},
      {label:'Ph\u1EE5 t\xF9ng',val:'D\u1EC5 t\xECm',level:'good'},
      {label:'Garage',val:'To\xE0n qu\u1ED1c',level:'good'},
    ],
    insight:{owners:1340,topModel:'XL7',monthly:3427,vs_estimate:-0.5,hcm:3500,hn:3350,breakdown:{bh:667,fuel:2400,road:140,maint:220}},
    garages:[
      {name:'Suzuki B\xECnh Tri\u1EC7u',type:'official',city:'HCM',address:'Qu\u1ED1c l\u1ED9 13, B\xECnh Tri\u1EC7u',bh:['B\u1EA3o Minh','PVI'],claims:320,rating:4.5,note:'\u0110\u1EA1i l\xFD Suzuki l\u1EDBn nh\u1EA5t HCM.'},
      {name:'Suzuki Ho\xE0ng Qu\u1ED1c Vi\u1EC7t',type:'official',city:'HN',address:'Ho\xE0ng Qu\u1ED1c Vi\u1EC7t, C\u1EA7u Gi\u1EA5y',bh:['B\u1EA3o Minh'],claims:250,rating:4.5,note:'Showroom ch\xEDnh h\xE3ng t\u1EA1i H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','parked','theft'],
  },
  nissan:{
    name:'Nissan',origin:'Nh\u1EADt B\u1EA3n',color:'#C41230',tagline:'\u0110\u1ED5i m\u1EDBi \xB7 Tin c\u1EADy \xB7 C\xF4ng ngh\u1EC7 th\u1EF1c d\u1EE5ng',
    fuels:['x\u0103ng','diesel'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Nh\u1EADt B\u1EA3n v\u1EDBi th\u1EBF m\u1EA1nh \u1EDF ph\xE2n kh\xFAc b\xE1n t\u1EA3i v\xE0 SUV g\u1EA7m cao. Nissan Terra l\xE0 \u0111\u1ED1i th\u1EE7 tr\u1EF1c ti\u1EBFp c\u1EE7a Ford Ranger v\xE0 Toyota Fortuner. Almera l\xE0 sedan h\u1EA1ng B gi\xE1 th\u1EF1c t\u1EBF \u0111ang t\u0103ng th\u1ECB ph\u1EA7n.',
    models:[
      {name:'Terra',type:'suv',bh:11,desc:'SUV 7 ch\u1ED7 g\u1EA7m cao diesel',monthly:{bh:917,fuel:2800,reg:165,maint:320},slug:'terra',priceFrom:969,priceTo:1169},
      {name:'Almera',type:'sedan',bh:5,desc:'Sedan h\u1EA1ng B ph\u1ED5 th\xF4ng',monthly:{bh:417,fuel:1800,reg:120,maint:180},slug:'almera',priceFrom:459,priceTo:549},
      {name:'Navara',type:'truck',bh:9,desc:'B\xE1n t\u1EA3i diesel',monthly:{bh:750,fuel:2600,reg:145,maint:280},slug:'navara',priceFrom:679,priceTo:879},
    ],
    topInsurers:[
      {name:'PVI Insurance',color:'#FF6600',badge:'Ph\u1EE7 r\u1ED9ng',reason:'M\u1EA1ng l\u01B0\u1EDBi garage r\u1ED9ng, ph\xF9 h\u1EE3p Terra v\xE0 Navara di chuy\u1EC3n li\xEAn t\u1EC9nh.'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'Xe th\u01B0\u01A1ng m\u1EA1i',reason:'Kinh nghi\u1EC7m v\u1EDBi xe diesel v\xE0 b\xE1n t\u1EA3i. T\u1ED1t cho Navara d\xF9ng m\u1EE5c \u0111\xEDch th\u01B0\u01A1ng m\u1EA1i.'},
    ],
    notes:[
      {q:'Nissan Terra diesel c\xF3 b\u1EA3o hi\u1EC3m \u0111\u1EB7c bi\u1EC7t g\xEC kh\xF4ng?',a:'Ph\xED BH diesel cao h\u01A1n x\u0103ng 3-5%. Quan tr\u1ECDng h\u01A1n l\xE0 ch\u1ECDn NB c\xF3 garage s\u1EEDa \u0111\u01B0\u1EE3c \u0111\u1ED9ng c\u01A1 diesel YD25 c\u1EE7a Nissan, kh\xF4ng ph\u1EA3i t\u1EA5t c\u1EA3 garage \u1EE7y quy\u1EC1n \u0111\u1EC1u c\xF3 k\u1EF9 thu\u1EADt vi\xEAn diesel chuy\xEAn.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2606\u2606',level:'warn'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Trung b\xECnh',level:'warn'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Kh\xE1 s\u1EB5n',level:'good'},
      {label:'Garage',val:'V\u1EEBa \u0111\u1EE7',level:'warn'},
    ],
    insight:{owners:980,topModel:'Terra',monthly:4202,vs_estimate:+0.1,hcm:4350,hn:4050,breakdown:{bh:917,fuel:2800,road:165,maint:320}},
    garages:[
      {name:'Nissan G\xF2 V\u1EA5p',type:'official',city:'HCM',address:'Quang Trung, G\xF2 V\u1EA5p',bh:['PVI','B\u1EA3o Vi\u1EC7t'],claims:280,rating:4.5,note:'\u0110\u1EA1i l\xFD Nissan l\u1EDBn nh\u1EA5t HCM.'},
      {name:'Nissan Long Bi\xEAn',type:'official',city:'HN',address:'Ng\xF4 Gia T\u1EF1, Long Bi\xEAn',bh:['PVI'],claims:210,rating:4.5,note:'Showroom ch\xEDnh h\xE3ng t\u1EA1i H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','thuykick','parked'],
  },
  byd:{
    name:'BYD',origin:'Trung Qu\u1ED1c',color:'#1565C0',tagline:'Xe \u0111i\u1EC7n h\xE0ng \u0111\u1EA7u Trung Qu\u1ED1c \xB7 C\xF4ng ngh\u1EC7 Blade Battery',
    fuels:['ev','phev'],popular:true,
    desc:'Nh\xE0 s\u1EA3n xu\u1EA5t xe \u0111i\u1EC7n l\u1EDBn nh\u1EA5t th\u1EBF gi\u1EDBi t\xEDnh theo doanh s\u1ED1. BYD t\u1EA5n c\xF4ng th\u1ECB tr\u01B0\u1EDDng VN t\u1EEB 2023 v\u1EDBi pin Blade Battery an to\xE0n v\xE0 gi\xE1 c\u1EA1nh tranh. Atto 3 v\xE0 Seal \u0111ang b\xE1n ch\u1EA1y trong ph\xE2n kh\xFAc EV t\u1EA7m trung.',
    models:[
      {name:'Atto 3',slug:'atto-3',type:'ev',bh:9,desc:'SUV \u0111i\u1EC7n h\u1EA1ng C, 410km/s\u1EA1c',monthly:{bh:750,fuel:800,reg:155,maint:180}},
      {name:'Seal',slug:'seal',type:'ev',bh:11,desc:'Sedan \u0111i\u1EC7n sporty, 570km',monthly:{bh:917,fuel:900,reg:170,maint:200}},
      {name:'Seal U',slug:'seal-u',type:'ev',bh:10,desc:'SUV \u0111i\u1EC7n 5 ch\u1ED7 500km DM-i',monthly:{bh:833,fuel:750,reg:160,maint:190}},
      {name:'Dolphin',slug:'dolphin',type:'ev',bh:7,desc:'Hatchback \u0111i\u1EC7n nh\u1ECF g\u1ECDn 340km',monthly:{bh:583,fuel:600,reg:130,maint:160}},
      {name:'Sea Lion 6',slug:'sea-lion-6',type:'ev',bh:9,desc:'SUV \u0111i\u1EC7n 5 ch\u1ED7 DM-i',monthly:{bh:750,fuel:700,reg:155,maint:200}},
      {name:'Sea Lion 07',slug:'sea-lion-07',type:'ev',bh:12,desc:'SUV coupe \u0111i\u1EC7n 480km',monthly:{bh:1000,fuel:850,reg:170,maint:210}},
      {name:'Shark',slug:'shark',type:'truck',bh:11,desc:'B\xE1n t\u1EA3i PHEV \u0111\u1EA7u ti\xEAn t\u1EA1i VN',monthly:{bh:917,fuel:1200,reg:165,maint:250}},
      {name:'Tang EV',slug:'tang-ev',type:'suv',bh:18,desc:'SUV \u0111i\u1EC7n 7 ch\u1ED7 h\u1EA1ng D',monthly:{bh:1500,fuel:1000,reg:240,maint:280}},
    ],
    topInsurers:[
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'Chuy\xEAn EV',reason:'C\xF3 ch\xEDnh s\xE1ch ri\xEAng cho xe \u0111i\u1EC7n BYD. Bao g\u1ED3m h\u01B0 h\u1ECFng pin trong ph\u1EA1m vi tai n\u1EA1n.'},
      {name:'PTI Insurance',color:'#003087',badge:'B\u1ED3i th\u01B0\u1EDDng pin',reason:'\u0110i\u1EC1u kho\u1EA3n b\u1ED3i th\u01B0\u1EDDng pin EV r\xF5 r\xE0ng. T\u1ED1t cho Atto 3 v\xE0 Seal d\xF9ng h\xE0ng ng\xE0y.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Ph\u1EE7 r\u1ED9ng',reason:'M\u1EA1ng l\u01B0\u1EDBi r\u1ED9ng, ph\xF9 h\u1EE3p BYD d\xF9ng li\xEAn t\u1EC9nh n\u01A1i garage \xEDt h\u01A1n.'},
    ],
    notes:[
      {q:'B\u1EA3o hi\u1EC3m th\xE2n v\u1ECF xe \u0111i\u1EC7n BYD c\xF3 bao g\u1ED3m h\u01B0 h\u1ECFng pin kh\xF4ng?',a:'Pin b\u1ECB h\u01B0 do tai n\u1EA1n (va ch\u1EA1m, l\u1EADt xe) \u0111\u01B0\u1EE3c BH th\xE2n v\u1ECF b\u1ED3i th\u01B0\u1EDDng. H\u01B0 t\u1EF1 nhi\xEAn (pin chai, dung l\u01B0\u1EE3ng gi\u1EA3m) do b\u1EA3o h\xE0nh t\u1EEB BYD \u2014 b\u1EA3o h\xE0nh pin 8 n\u0103m ho\u1EB7c 160.000km. N\xEAn ki\u1EC3m tra k\u1EF9 \u0111i\u1EC1u kho\u1EA3n lo\u1EA1i tr\u1EEB pin v\u1EDBi t\u1EEBng NB.'},
      {q:'Tr\u1EA1m s\u1EA1c h\u1ECFng xe BYD d\u1EABn \u0111\u1EBFn h\u01B0 \u0111\u1ED9ng c\u01A1, BH c\xF3 chi tr\u1EA3 kh\xF4ng?',a:'H\u01B0 h\u1ECFng do \u0111i\u1EC7n l\u01B0\u1EDBi b\u1EA5t th\u01B0\u1EDDng (\u0111i\u1EC7n \xE1p, d\xF2ng \u0111i\u1EC7n sai) kh\xF4ng thu\u1ED9c ph\u1EA1m vi BH th\xE2n v\u1ECF ti\xEAu chu\u1EA9n. M\u1ED9t s\u1ED1 NB c\xF3 quy\u1EC1n l\u1EE3i m\u1EDF r\u1ED9ng cho s\u1EF1 c\u1ED1 \u0111i\u1EC7n \u2014 n\xEAn h\u1ECFi r\xF5 khi mua.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2606\u2606\u2606',level:'bad'},
      {label:'Chi ph\xED v\u1EADn h\xE0nh',val:'Th\u1EA5p nh\u1EA5t',level:'good'},
      {label:'Ph\u1EE5 t\xF9ng',val:'\u0110ang ph\xE1t tri\u1EC3n',level:'warn'},
      {label:'Tr\u1EA1m s\u1EA1c',val:'\u0110ang m\u1EDF r\u1ED9ng',level:'warn'},
    ],
    insight:{owners:1920,topModel:'Atto 3',monthly:1885,vs_estimate:-0.6,hcm:1950,hn:1820,breakdown:{bh:750,fuel:800,road:155,maint:180}},
    garages:[
      {name:'BYD B\xECnh Th\u1EA1nh',type:'official',city:'HCM',address:'\u0110i\u1EC7n Bi\xEAn Ph\u1EE7, B\xECnh Th\u1EA1nh',bh:['B\u1EA3o Vi\u1EC7t','PTI'],claims:290,rating:4.6,note:'Showroom BYD flagship t\u1EA1i HCM. C\xF3 s\u1EA1c nhanh DC 120kW.'},
      {name:'BYD C\u1EA7u Gi\u1EA5y',type:'official',city:'HN',address:'Tr\u1EA7n Th\xE1i T\xF4ng, C\u1EA7u Gi\u1EA5y',bh:['B\u1EA3o Vi\u1EC7t'],claims:210,rating:4.6,note:'Showroom BYD flagship t\u1EA1i H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','fire','parked'],
  },
  peugeot:{
    name:'Peugeot',origin:'Ph\xE1p',color:'#003189',tagline:'Thi\u1EBFt k\u1EBF Ph\xE1p \xB7 SUV ch\xE2u \xC2u \xB7 L\xE1i th\xFA v\u1ECB',
    fuels:['x\u0103ng'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Ph\xE1p v\u1EDBi thi\u1EBFt k\u1EBF s\u1EAFc n\xE9t v\xE0 tr\u1EA3i nghi\u1EC7m l\xE1i \u0111\u1EB7c tr\u01B0ng ch\xE2u \xC2u. 3008 v\xE0 5008 \u0111ang thu h\xFAt kh\xE1ch h\xE0ng VN mu\u1ED1n SUV ch\xE2u \xC2u \u1EDF ph\xE2n kh\xFAc t\u1EA7m trung m\xE0 kh\xF4ng ph\u1EA3i tr\u1EA3 gi\xE1 premium xe \u0110\u1EE9c.',
    models:[
      {name:'3008',type:'suv',bh:13,desc:'SUV h\u1EA1ng C thi\u1EBFt k\u1EBF n\u1ED5i b\u1EADt',monthly:{bh:1083,fuel:2600,reg:175,maint:580},slug:'3008',priceFrom:1099,priceTo:1399},
      {name:'5008',type:'suv',bh:18,desc:'SUV 7 ch\u1ED7 h\u1EA1ng D',monthly:{bh:1500,fuel:2800,reg:220,maint:680},slug:'5008',priceFrom:1399,priceTo:1799},
      {name:'2008',type:'suv',bh:9,desc:'SUV compact entry',monthly:{bh:750,fuel:2200,reg:150,maint:480},slug:'2008',priceFrom:739,priceTo:899},
    ],
    topInsurers:[
      {name:'AXA Insurance',color:'#00008F',badge:'Xe ch\xE2u \xC2u',reason:'Chuy\xEAn xe nh\u1EADp ch\xE2u \xC2u. Th\u1ECFa thu\u1EADn v\u1EDBi garage Peugeot \u1EE7y quy\u1EC1n t\u1EA1i VN.'},
      {name:'Liberty Insurance',color:'#2E4099',badge:'Ph\u1EE7 \u0111\xF4 th\u1ECB',reason:'Ph\xF9 h\u1EE3p Peugeot d\xF9ng n\u1ED9i \u0111\xF4. B\u1ED3i th\u01B0\u1EDDng nhanh t\u1EA1i HCM v\xE0 H\xE0 N\u1ED9i.'},
    ],
    notes:[
      {q:'Peugeot 3008 h\u1ED9p s\u1ED1 EAT8 h\u1ECFng, BH c\xF3 b\u1ED3i th\u01B0\u1EDDng kh\xF4ng?',a:'H\u1ED9p s\u1ED1 h\u01B0 do tai n\u1EA1n \u0111\u01B0\u1EE3c BH b\u1ED3i th\u01B0\u1EDDng. H\u01B0 t\u1EF1 nhi\xEAn (m\xF2n do s\u1EED d\u1EE5ng) kh\xF4ng thu\u1ED9c ph\u1EA1m vi. H\u1ED9p s\u1ED1 EAT8 c\u1EE7a Peugeot c\xF3 \xEDt v\u1EA5n \u0111\u1EC1 h\u01A1n th\u1EBF h\u1EC7 tr\u01B0\u1EDBc nh\u01B0ng chi ph\xED s\u1EEDa ch\u1EEFa kh\xE1 cao (~30-60 tri\u1EC7u).'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2606\u2606',level:'warn'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Trung b\xECnh cao',level:'warn'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Ch\u1EADm h\u01A1n Nh\u1EADt',level:'warn'},
      {label:'Garage',val:'H\u1EA1n ch\u1EBF t\u1EC9nh',level:'warn'},
    ],
    insight:{owners:480,topModel:'3008',monthly:5038,vs_estimate:+1.4,hcm:5600,hn:4450,breakdown:{bh:1083,fuel:2600,road:175,maint:580}},
    garages:[
      {name:'Peugeot Qu\u1ED1c l\u1ED9 13',type:'official',city:'HCM',address:'Qu\u1ED1c l\u1ED9 13, B\xECnh D\u01B0\u01A1ng',bh:['AXA','Liberty'],claims:190,rating:4.6,note:'Showroom l\u1EDBn nh\u1EA5t mi\u1EC1n Nam.'},
      {name:'Peugeot X\xE3 \u0110\xE0n',type:'official',city:'HN',address:'X\xE3 \u0110\xE0n, \u0110\u1ED1ng \u0110a',bh:['AXA'],claims:140,rating:4.6,note:'\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng t\u1EA1i H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','glass','parked'],
  },
  subaru:{
    name:'Subaru',origin:'Nh\u1EADt B\u1EA3n',color:'#003F8A',tagline:'AWD ti\xEAu chu\u1EA9n \xB7 EyeSight \xB7 \u0110\u1EB7c tr\u01B0ng',
    fuels:['x\u0103ng'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Nh\u1EADt B\u1EA3n niche v\u1EDBi h\u1EC7 th\u1ED1ng AWD ti\xEAu chu\u1EA9n tr\xEAn m\u1ECDi m\u1EABu xe v\xE0 h\u1EC7 th\u1ED1ng an to\xE0n EyeSight. Subaru Forester v\xE0 Outback h\xFAt \u0111\u1ED1i t\u01B0\u1EE3ng y\xEAu th\xEDch outdoor v\xE0 l\xE1i \u0111\u01B0\u1EDDng x\u1EA5u m\xE0 v\u1EABn tho\u1EA3i m\xE1i.',
    models:[
      {name:'Forester',type:'suv',bh:12,desc:'SUV compact AWD ti\xEAu chu\u1EA9n',monthly:{bh:1000,fuel:2600,reg:165,maint:450},slug:'forester',priceFrom:979,priceTo:1199},
      {name:'Outback',type:'suv',bh:15,desc:'Wagon AWD \u0111\u01B0\u1EDDng tr\u01B0\u1EDDng',monthly:{bh:1250,fuel:2600,reg:185,maint:500},slug:'outback',priceFrom:1349,priceTo:1599},
      {name:'Crosstrek',type:'suv',bh:10,desc:'Crossover compact AWD',monthly:{bh:833,fuel:2400,reg:155,maint:400},slug:'crosstrek',priceFrom:879,priceTo:999},
    ],
    topInsurers:[
      {name:'AXA Insurance',color:'#00008F',badge:'Xe nh\u1EADp',reason:'Chuy\xEAn xe CBU nh\u1EADp. Ph\u1EE5 t\xF9ng Subaru t\u1EEB Nh\u1EADt \u0111\u01B0\u1EE3c duy\u1EC7t t\u1ED1t.'},
      {name:'Liberty Insurance',color:'#2E4099',badge:'Ph\u1EE7 \u0111\xF4 th\u1ECB',reason:'Ph\xF9 h\u1EE3p Subaru d\xF9ng \u0111\xF4 th\u1ECB. B\u1ED3i th\u01B0\u1EDDng \u1ED5n \u0111\u1ECBnh.'},
    ],
    notes:[
      {q:'Subaru AWD h\u01B0 trong \u0111i\u1EC1u ki\u1EC7n offroad, BH c\xF3 chi tr\u1EA3 kh\xF4ng?',a:'H\u01B0 h\u1ECFng do s\u1EED d\u1EE5ng offroad b\xECnh th\u01B0\u1EDDng (\u0111\u01B0\u1EDDng \u0111\u1EA5t, b\xF9n) kh\xF4ng thu\u1ED9c ph\u1EA1m vi. H\u01B0 do tai n\u1EA1n khi offroad (\u0111\xE2m v\xE0o \u0111\xE1, \u0111\u1ED5 xe) \u0111\u01B0\u1EE3c b\u1ED3i th\u01B0\u1EDDng t\xF9y theo \u0111i\u1EC1u kho\u1EA3n. N\xEAn \u0111\u1ECDc k\u1EF9 \u0111\u1ECBnh ngh\u0129a "tai n\u1EA1n" trong h\u1EE3p \u0111\u1ED3ng.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2605\u2606',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Trung b\xECnh',level:'warn'},
      {label:'Ph\u1EE5 t\xF9ng',val:'\u0110\u1EB7t t\u1EEB Nh\u1EADt',level:'warn'},
      {label:'Garage',val:'\xCDt \u0111i\u1EC3m',level:'warn'},
    ],
    insight:{owners:310,topModel:'Forester',monthly:4215,vs_estimate:+0.9,hcm:4600,hn:3800,breakdown:{bh:1000,fuel:2600,road:165,maint:450}},
    garages:[
      {name:'Subaru Ph\xFA M\u1EF9 H\u01B0ng',type:'official',city:'HCM',address:'Nguy\u1EC5n L\u01B0\u01A1ng B\u1EB1ng, Ph\xFA M\u1EF9 H\u01B0ng',bh:['AXA','Liberty'],claims:160,rating:4.7,note:'Showroom ch\xEDnh h\xE3ng HCM.'},
      {name:'Subaru Nguy\u1EC5n Xi\u1EC3n',type:'official',city:'HN',address:'Nguy\u1EC5n Xi\u1EC3n, H\xE0 \u0110\xF4ng',bh:['AXA'],claims:120,rating:4.7,note:'\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','glass','parked'],
  },
  landrover:{
    name:'Land Rover',origin:'Anh',color:'#005A2B',tagline:'Offroad \u0111\u1EC9nh cao \xB7 Xa x\u1EC9 \xB7 Range Rover',
    fuels:['x\u0103ng','phev','mild-hybrid'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Anh bi\u1EC3u t\u01B0\u1EE3ng c\u1EE7a xe \u0111\u1ECBa h\xECnh sang tr\u1ECDng. Range Rover l\xE0 \u0111\u1EC9nh cao ph\xE2n kh\xFAc SUV h\u1EA1ng sang t\u1EA1i Vi\u1EC7t Nam. Defender t\xE1i sinh thu h\xFAt th\u1EBF h\u1EC7 kh\xE1ch h\xE0ng m\u1EDBi y\xEAu th\xEDch phong c\xE1ch adventure.',
    models:[
      {name:'Defender 90',type:'suv',bh:47,desc:'SUV \u0111a \u0111\u1ECBa h\xECnh bi\u1EC3u t\u01B0\u1EE3ng',monthly:{bh:3917,fuel:3800,reg:460,maint:1200},slug:'defender-90',priceFrom:3599,priceTo:4499},
      {name:'Defender 110',type:'suv',bh:55,desc:'Defender 5 ch\u1ED7 d\xE0i h\u01A1n',monthly:{bh:4583,fuel:3800,reg:520,maint:1200},slug:'defender-110',priceFrom:4099,priceTo:5299},
      {name:'Discovery Sport',type:'suv',bh:29,desc:'SUV 7 ch\u1ED7 entry LR',monthly:{bh:2417,fuel:3200,reg:300,maint:900},slug:'discovery-sport',priceFrom:2199,priceTo:2599},
      {name:'Range Rover Sport',type:'suv',bh:87,desc:'SUV coupe h\u1EA1ng sang',monthly:{bh:7250,fuel:4200,reg:800,maint:1800},slug:'range-rover-sport',priceFrom:6499,priceTo:8999},
      {name:'Range Rover',type:'suv',bh:135,desc:'SUV luxury flagship',monthly:{bh:11250,fuel:5000,reg:1200,maint:2500},slug:'range-rover',priceFrom:9999,priceTo:16999},
    ],
    topInsurers:[
      {name:'AXA Insurance',color:'#00008F',badge:'Xe sang nh\u1EADp',reason:'Chuy\xEAn xe CBU h\u1EA1ng sang t\u1EEB Anh. \u0110i\u1EC1u kho\u1EA3n ph\u1EE5 t\xF9ng genuine Land Rover r\xF5 r\xE0ng.'},
      {name:'PTI Insurance',color:'#003087',badge:'Garage \u1EE7y quy\u1EC1n',reason:'Th\u1ECFa thu\u1EADn v\u1EDBi garage Land Rover \u1EE7y quy\u1EC1n t\u1EA1i VN. Kh\xF4ng c\u1EA7n gi\xE1m \u0111\u1ECBnh ri\xEAng.'},
    ],
    notes:[
      {q:'Range Rover ph\u1EE5 t\xF9ng \u0111\u1EAFt \u2014 BH c\xF3 tr\u1EA3 \u0111\u1EE7 kh\xF4ng?',a:'BH th\xE2n v\u1ECF b\u1ED3i th\u01B0\u1EDDng theo gi\xE1 tr\u1ECB ph\u1EE5 t\xF9ng genuine t\u1EA1i VN. Range Rover ph\u1EE5 t\xF9ng nh\u1EADp Anh r\u1EA5t \u0111\u1EAFt, c\u1EA7n mua BH v\u1EDBi m\u1EE9c tr\u1EA7n b\u1ED3i th\u01B0\u1EDDng cao (kh\xF4ng c\xF3 gi\u1EDBi h\u1EA1n ho\u1EB7c gi\u1EDBi h\u1EA1n cao). AXA v\xE0 PTI c\xF3 \u0111i\u1EC1u kho\u1EA3n ph\xF9 h\u1EE3p.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2605\u2606',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Cao nh\u1EA5t',level:'bad'},
      {label:'Ph\u1EE5 t\xF9ng',val:'R\u1EA5t \u0111\u1EAFt',level:'bad'},
      {label:'Garage',val:'R\u1EA5t \xEDt \u0111i\u1EC3m',level:'bad'},
    ],
    insight:{owners:280,topModel:'Defender 110',monthly:10103,vs_estimate:+3.2,hcm:11500,hn:8700,breakdown:{bh:4583,fuel:3800,road:520,maint:1200}},
    garages:[
      {name:'Land Rover Vi\u1EC7t Nam HCM',type:'official',city:'HCM',address:'Nguy\u1EC5n V\u0103n Tr\u1ED7i, Ph\xFA Nhu\u1EADn',bh:['AXA','PTI'],claims:180,rating:4.8,note:'Showroom flagship HCM. D\u1ECBch v\u1EE5 cao c\u1EA5p, \u0111\u1EB7t h\u1EB9n tr\u01B0\u1EDBc.'},
      {name:'Land Rover Vi\u1EC7t Nam HN',type:'official',city:'HN',address:'\u0110\xE0o T\u1EA5n, Ba \u0110\xECnh',bh:['AXA'],claims:140,rating:4.8,note:'Showroom flagship H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','parttheft','glass'],
  },
  wuling:{
    name:'Wuling',origin:'Trung Qu\u1ED1c',color:'#FF6600',tagline:'Xe \u0111i\u1EC7n gi\xE1 r\u1EBB nh\u1EA5t \xB7 Mini EV \xB7 \u0110\xF4 th\u1ECB nh\u1ECF',
    fuels:['ev'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Trung Qu\u1ED1c (SAIC-GM-Wuling) n\u1ED5i ti\u1EBFng v\u1EDBi Mini EV b\xE1n ch\u1EA1y nh\u1EA5t th\u1EBF gi\u1EDBi. T\u1EA1i Vi\u1EC7t Nam, BingGuo EV l\xE0 l\u1EF1a ch\u1ECDn xe \u0111i\u1EC7n r\u1EBB nh\u1EA5t th\u1ECB tr\u01B0\u1EDDng. Ph\xF9 h\u1EE3p \u0111i l\u1EA1i ng\u1EAFn d\u01B0\u1EDBi 50km/ng\xE0y trong n\u1ED9i \u0111\xF4.',
    models:[
      {name:'BingGuo EV',slug:'binguo-ev',type:'ev',bh:4,desc:'Mini SUV \u0111i\u1EC7n, 300km/s\u1EA1c',monthly:{bh:333,fuel:400,reg:100,maint:130}},
      {name:'Cloud EV',slug:'cloud-ev',type:'ev',bh:5,desc:'Hatchback \u0111i\u1EC7n 460km gi\xE1 t\u1ED1t',monthly:{bh:417,fuel:450,reg:110,maint:140}},
      {name:'Almaz',slug:'almaz',type:'suv',bh:7,desc:'SUV 7 ch\u1ED7 \u0111a d\u1EE5ng',monthly:{bh:583,fuel:2400,reg:135,maint:220}},
    ],
    topInsurers:[
      {name:'B\u1EA3o Minh',color:'#0066CC',badge:'Ph\xED th\u1EA5p nh\u1EA5t',reason:'Ph\xED BH th\u1EA5p nh\u1EA5t cho BingGuo. B\u1ED3i th\u01B0\u1EDDng \u1ED5n \u0111\u1ECBnh cho xe gi\xE1 tr\u1ECB th\u1EA5p.'},
      {name:'PJICO',color:'#CC0000',badge:'Ph\u1EE7 t\u1EC9nh',reason:'Ph\xF9 h\u1EE3p BingGuo d\xF9ng \u1EDF c\xE1c t\u1EC9nh th\xE0nh v\xE0 \u0111\xF4 th\u1ECB nh\u1ECF.'},
    ],
    notes:[
      {q:'BingGuo EV c\xF3 \u0111\xE1ng mua BH th\xE2n v\u1ECF kh\xF4ng?',a:'Ph\xED BH th\xE2n v\u1ECF BingGuo kho\u1EA3ng 4-5 tri\u1EC7u/n\u0103m. Xe gi\xE1 350-450 tri\u1EC7u, n\xEAn BH th\xE2n v\u1ECF v\u1EABn \u0111\xE1ng n\u1EBFu d\xF9ng \u0111\u01B0\u1EDDng \u0111\xF4ng. N\u1EBFu ch\u1EC9 \u0111i trong khu d\xE2n c\u01B0 y\xEAn t\u0129nh, c\xF3 th\u1EC3 ch\u1EC9 c\u1EA7n TNDS b\u1EAFt bu\u1ED9c.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2606\u2606\u2606\u2606',level:'bad'},
      {label:'Chi ph\xED v\u1EADn h\xE0nh',val:'Th\u1EA5p nh\u1EA5t',level:'good'},
      {label:'Ph\u1EE5 t\xF9ng',val:'\u0110ang ph\xE1t tri\u1EC3n',level:'warn'},
      {label:'H\u1EA1n ch\u1EBF',val:'Ph\u1EA1m vi ng\u1EAFn',level:'warn'},
    ],
    insight:{owners:620,topModel:'BingGuo EV',monthly:963,vs_estimate:-0.9,hcm:1000,hn:925,breakdown:{bh:333,fuel:400,road:100,maint:130}},
    garages:[
      {name:'Wuling HCM',type:'official',city:'HCM',address:'Qu\u1ED1c l\u1ED9 1A, B\xECnh T\xE2n',bh:['B\u1EA3o Minh'],claims:140,rating:4.3,note:'Showroom Wuling t\u1EA1i HCM.'},
      {name:'Wuling H\xE0 N\u1ED9i',type:'official',city:'HN',address:'Gi\u1EA3i Ph\xF3ng, Hai B\xE0 Tr\u01B0ng',bh:['B\u1EA3o Minh'],claims:100,rating:4.3,note:'Showroom Wuling t\u1EA1i H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','parked','theft'],
  },
  tesla:{
    name:'Tesla',origin:'M\u1EF9',color:'#CC0000',tagline:'EV thu\u1EA7n t\xFAy \xB7 Autopilot \xB7 OTA updates',
    fuels:['ev'],popular:true,
    desc:'Nh\xE0 ti\xEAn phong xe \u0111i\u1EC7n M\u1EF9 v\u1EDBi h\u1EC7 sinh th\xE1i ph\u1EA7n m\u1EC1m v\xE0 tr\u1EA1m s\u1EA1c Supercharger ri\xEAng. Tesla Model 3 v\xE0 Model Y l\xE0 2 m\u1EABu EV \u0111\u01B0\u1EE3c t\xECm mua nhi\u1EC1u nh\u1EA5t Vi\u1EC7t Nam trong ph\xE2n kh\xFAc EV h\u1EA1ng trung cao c\u1EA5p. Autopilot v\xE0 c\u1EADp nh\u1EADt OTA l\xE0 \u0111i\u1EC3m kh\xE1c bi\u1EC7t l\u1EDBn so v\u1EDBi \u0111\u1ED1i th\u1EE7.',
    models:[
      {name:'Model 3',slug:'model-3',type:'ev',bh:12,desc:'Sedan \u0111i\u1EC7n h\u1EA1ng C, 576km/s\u1EA1c',monthly:{bh:1000,fuel:900,reg:170,maint:180}},
      {name:'Model 3 Highland',slug:'model-3-highland',type:'ev',bh:14,desc:'Model 3 facelift 2024, 629km',monthly:{bh:1167,fuel:950,reg:185,maint:180}},
      {name:'Model Y',slug:'model-y',type:'ev',bh:13,desc:'SUV \u0111i\u1EC7n h\u1EA1ng C b\xE1n ch\u1EA1y nh\u1EA5t',monthly:{bh:1083,fuel:1000,reg:180,maint:190}},
      {name:'Model Y Juniper',slug:'model-y-juniper',type:'ev',bh:15,desc:'Model Y facelift 2025, 593km',monthly:{bh:1250,fuel:1050,reg:195,maint:190}},
      {name:'Model X',slug:'model-x',type:'suv',bh:35,desc:'SUV \u0111i\u1EC7n 7 ch\u1ED7 falcon door',monthly:{bh:2917,fuel:1400,reg:380,maint:500}},
      {name:'Model S',slug:'model-s',type:'ev',bh:40,desc:'Sedan \u0111i\u1EC7n flagship 652km',monthly:{bh:3333,fuel:1500,reg:430,maint:550}},
    ],
    topInsurers:[
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'Chuy\xEAn EV',reason:'Ch\xEDnh s\xE1ch EV r\xF5 r\xE0ng, bao g\u1ED3m h\u01B0 h\u1ECFng pin trong ph\u1EA1m vi tai n\u1EA1n. Ph\xF9 h\u1EE3p Tesla gi\xE1 tr\u1ECB cao.'},
      {name:'PTI Insurance',color:'#003087',badge:'B\u1ED3i th\u01B0\u1EDDng pin',reason:'\u0110i\u1EC1u kho\u1EA3n b\u1ED3i th\u01B0\u1EDDng pin v\xE0 ph\u1EA7n m\u1EC1m EV r\xF5 r\xE0ng. T\u1ED1t cho Model 3 v\xE0 Model Y.'},
      {name:'AXA Insurance',color:'#00008F',badge:'Xe nh\u1EADp CBU',reason:'Kinh nghi\u1EC7m xe nh\u1EADp kh\u1EA9u CBU gi\xE1 cao. Ph\u1EE5 t\xF9ng Tesla genuine \u0111\u01B0\u1EE3c duy\u1EC7t t\u1ED1t.'},
    ],
    notes:[
      {q:'Tesla kh\xF4ng c\xF3 garage ch\xEDnh h\xE3ng t\u1EA1i VN, BH s\u1EEDa \u1EDF \u0111\xE2u?',a:'Tesla VN hi\u1EC7n c\xF3 Service Center t\u1EA1i HCM v\xE0 HN. Ngo\xE0i ra Mobile Service (k\u1EF9 thu\u1EADt vi\xEAn \u0111\u1EBFn t\u1EADn n\u01A1i) h\u1ED7 tr\u1EE3 c\xE1c s\u1EF1 c\u1ED1 nh\u1ECF. BH c\u1EA7n ch\u1ECDn NB c\xF3 th\u1ECFa thu\u1EADn v\u1EDBi garage Tesla \u1EE7y quy\u1EC1n ho\u1EB7c garage EV chuy\xEAn nghi\u1EC7p.'},
      {q:'Ph\u1EE5 t\xF9ng Tesla \u0111\u1EAFt kh\xF4ng, BH c\xF3 b\u1ED3i th\u01B0\u1EDDng \u0111\u1EE7 kh\xF4ng?',a:'Ph\u1EE5 t\xF9ng th\xE2n v\u1ECF Tesla nh\u1EADp t\u1EEB M\u1EF9/Trung Qu\u1ED1c, gi\xE1 cao h\u01A1n xe Nh\u1EADt c\xF9ng h\u1EA1ng 40-80%. N\xEAn mua BH kh\xF4ng gi\u1EDBi h\u1EA1n m\u1EE9c tr\u1EA7n b\u1ED3i th\u01B0\u1EDDng ph\u1EE5 t\xF9ng. Tr\xE1nh NB c\xF3 \u0111i\u1EC1u kho\u1EA3n d\xF9ng ph\u1EE5 t\xF9ng thay th\u1EBF (kh\xF4ng genuine).'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2606\u2606',level:'warn'},
      {label:'Chi ph\xED v\u1EADn h\xE0nh',val:'Th\u1EA5p nh\u1EA5t h\u1EA1ng',level:'good'},
      {label:'Ph\u1EE5 t\xF9ng',val:'\u0110\u1EB7t t\u1EEB n\u01B0\u1EDBc ngo\xE0i',level:'warn'},
      {label:'Service Center',val:'2 \u0111i\u1EC3m VN',level:'warn'},
    ],
    insight:{owners:1240,topModel:'Model Y',monthly:3303,vs_estimate:+0.4,hcm:3500,hn:3100,breakdown:{bh:1083,fuel:1000,road:180,maint:190}},
    garages:[
      {name:'Tesla Service Center HCM',type:'official',city:'HCM',address:'Xa l\u1ED9 H\xE0 N\u1ED9i, Th\u1EE7 \u0110\u1EE9c',bh:['B\u1EA3o Vi\u1EC7t','PTI'],claims:310,rating:4.7,note:'Service Center ch\xEDnh h\xE3ng duy nh\u1EA5t t\u1EA1i HCM. C\xF3 Mobile Service \u0111\u1EBFn t\u1EADn nh\xE0.'},
      {name:'Tesla Service Center HN',type:'official',city:'HN',address:'Ph\u1EA1m H\xF9ng, Nam T\u1EEB Li\xEAm',bh:['B\u1EA3o Vi\u1EC7t'],claims:220,rating:4.7,note:'Service Center ch\xEDnh h\xE3ng t\u1EA1i H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','fire','parked'],
  },
  volkswagen:{
    name:'Volkswagen',origin:'\u0110\u1EE9c',color:'#001E50',tagline:'K\u1EF9 thu\u1EADt \u0110\u1EE9c \xB7 B\u1EC1n ch\u1EAFc \xB7 Th\u1EF1c d\u1EE5ng',
    fuels:['x\u0103ng'],popular:true,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u \u0110\u1EE9c \u0111\u1EA1i ch\xFAng l\u1EDBn nh\u1EA5t th\u1EBF gi\u1EDBi. Tiguan v\xE0 Teramont l\xE0 2 m\u1EABu SUV \u0111ang t\u0103ng tr\u01B0\u1EDFng m\u1EA1nh t\u1EA1i VN. N\u1ED5i b\u1EADt b\u1EDFi c\u1EA3m gi\xE1c l\xE1i ch\u1EAFc ch\u1EAFn, n\u1ED9i th\u1EA5t ch\u1EA5t l\u01B0\u1EE3ng cao v\xE0 h\u1EC7 truy\u1EC1n \u0111\u1ED9ng DSG ti\u1EBFt ki\u1EC7m nhi\xEAn li\u1EC7u.',
    models:[
      {name:'Tiguan',slug:'tiguan',type:'suv',bh:12,desc:'SUV h\u1EA1ng C ph\u1ED5 bi\u1EBFn nh\u1EA5t c\u1EE7a VW',monthly:{bh:1000,fuel:2600,reg:170,maint:550},priceFrom:1099,priceTo:1499},
      {name:'Teramont',slug:'teramont',type:'suv',bh:18,desc:'SUV 7 ch\u1ED7 h\u1EA1ng D c\u1EE1 l\u1EDBn',monthly:{bh:1500,fuel:3000,reg:220,maint:700},priceFrom:1799,priceTo:2099},
      {name:'Touareg',slug:'touareg',type:'suv',bh:25,desc:'SUV flagship h\u1EA1ng E',monthly:{bh:2083,fuel:3500,reg:280,maint:900},priceFrom:2499,priceTo:2999},
      {name:'Passat',slug:'passat',type:'sedan',bh:13,desc:'Sedan h\u1EA1ng D sang tr\u1ECDng',monthly:{bh:1083,fuel:2800,reg:175,maint:600},priceFrom:1099,priceTo:1499},
      {name:'Polo',slug:'polo',type:'hatchback',bh:6,desc:'Hatchback \u0111\xF4 th\u1ECB nh\u1ECF g\u1ECDn',monthly:{bh:500,fuel:1800,reg:120,maint:400},priceFrom:599,priceTo:699},
      {name:'Scirocco',slug:'scirocco',type:'coupe',bh:8,desc:'Coupe sporty 2 c\u1EEDa',monthly:{bh:667,fuel:2200,reg:135,maint:500},priceFrom:799,priceTo:999},
    ],
    topInsurers:[
      {name:'AXA Insurance',color:'#00008F',badge:'Xe \u0110\u1EE9c chuy\xEAn s\xE2u',reason:'Kinh nghi\u1EC7m l\xE2u n\u0103m v\u1EDBi xe \u0110\u1EE9c nh\u1EADp. Ph\u1EE5 t\xF9ng VW genuine \u0111\u01B0\u1EE3c duy\u1EC7t t\u1EF1 \u0111\u1ED9ng, \xEDt tranh ch\u1EA5p nh\u1EA5t.'},
      {name:'Liberty Insurance',color:'#2E4099',badge:'B\u1ED3i th\u01B0\u1EDDng nhanh',reason:'B\u1ED3i th\u01B0\u1EDDng 3-5 ng\xE0y l\xE0m vi\u1EC7c. Ph\xF9 h\u1EE3p Tiguan v\xE0 Passat d\xF9ng \u0111\xF4 th\u1ECB th\u01B0\u1EDDng xuy\xEAn.'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'Ph\u1EE7 to\xE0n qu\u1ED1c',reason:'M\u1EA1ng l\u01B0\u1EDBi r\u1ED9ng to\xE0n qu\u1ED1c. Ph\xF9 h\u1EE3p xe VW \u0111i li\xEAn t\u1EC9nh.'},
    ],
    notes:[
      {q:'H\u1ED9p s\u1ED1 DSG c\u1EE7a Volkswagen h\u1ECFng, BH c\xF3 chi tr\u1EA3 kh\xF4ng?',a:'H\u1ED9p s\u1ED1 DSG h\u01B0 do tai n\u1EA1n \u0111\u01B0\u1EE3c BH b\u1ED3i th\u01B0\u1EDDng. H\u01B0 t\u1EF1 nhi\xEAn do m\xF2n ho\u1EB7c l\u1ED7i k\u1EF9 thu\u1EADt thu\u1ED9c ph\u1EA1m vi b\u1EA3o h\xE0nh nh\xE0 s\u1EA3n xu\u1EA5t (3-5 n\u0103m). Chi ph\xED s\u1EEDa DSG kh\xE1 cao (~25-60 tri\u1EC7u), n\xEAn b\u1EA3o tr\xEC \u0111\xFAng chu k\u1EF3 thay d\u1EA7u DSG m\u1ED7i 40.000km.'},
      {q:'Ph\u1EE5 t\xF9ng Volkswagen \u1EDF VN c\xF3 d\u1EC5 t\xECm kh\xF4ng?',a:'Volkswagen VN (qua VWGVN) c\xF3 kho ph\u1EE5 t\xF9ng t\u1EA1i HCM v\xE0 HN. Ph\u1EE5 t\xF9ng th\xE2n v\u1ECF th\u01B0\u1EDDng c\xF3 trong 3-7 ng\xE0y. M\u1ED9t s\u1ED1 linh ki\u1EC7n \u0111\u1EB7c th\xF9 nh\u1EADp tr\u1EF1c ti\u1EBFp t\u1EEB \u0110\u1EE9c c\xF3 th\u1EC3 m\u1EA5t 2-4 tu\u1EA7n. Gi\xE1 ph\u1EE5 t\xF9ng cao h\u01A1n xe Nh\u1EADt 30-50%.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2606\u2606',level:'warn'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Trung b\xECnh cao',level:'warn'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Kh\xE1 \u0111\u1EA7y \u0111\u1EE7',level:'warn'},
      {label:'Garage',val:'\u0110\u1EA1i l\xFD \u1EE7y quy\u1EC1n',level:'warn'},
    ],
    insight:{owners:980,topModel:'Tiguan',monthly:4320,vs_estimate:+0.8,hcm:4600,hn:4050,breakdown:{bh:1000,fuel:2600,road:170,maint:550}},
    garages:[
      {name:'VW Long Bi\xEAn',type:'official',city:'HN',address:'Long Bi\xEAn, H\xE0 N\u1ED9i',bh:['AXA','Liberty'],claims:280,rating:4.7,note:'\u0110\u1EA1i l\xFD VW ch\xEDnh h\xE3ng HN. K\u1EF9 thu\u1EADt vi\xEAn \u0111\xE0o t\u1EA1o t\u1EA1i \u0110\u1EE9c.'},
      {name:'VW Tr\u01B0\u1EDDng Chinh',type:'official',city:'HCM',address:'Tr\u01B0\u1EDDng Chinh, T\xE2n B\xECnh',bh:['AXA'],claims:350,rating:4.7,note:'Showroom VW l\u1EDBn nh\u1EA5t HCM.'},
    ],
    scenarios:['collision','glass','parked'],
  },
  chevrolet:{
    name:'Chevrolet',origin:'M\u1EF9',color:'#D4AF37',tagline:'Phong c\xE1ch M\u1EF9 \xB7 Colorado b\xE1n t\u1EA3i \xB7 N\u1ED9i th\u1EA5t r\u1ED9ng',
    fuels:['x\u0103ng','diesel'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u M\u1EF9 c\u1EE7a General Motors. Colorado l\xE0 m\u1EABu b\xE1n t\u1EA3i b\xE1n ch\u1EA1y top 3 t\u1EA1i VN, c\u1EA1nh tranh tr\u1EF1c ti\u1EBFp v\u1EDBi Ford Ranger v\xE0 Isuzu D-Max. TrailBlazer c\u0169ng t\u1EEBng r\u1EA5t ph\u1ED5 bi\u1EBFn tr\u01B0\u1EDBc khi GM thu h\u1EB9p ho\u1EA1t \u0111\u1ED9ng t\u1EA1i VN.',
    models:[
      {name:'Colorado',slug:'colorado',type:'truck',bh:9,desc:'B\xE1n t\u1EA3i m\u1EA1nh m\u1EBD phong c\xE1ch M\u1EF9',monthly:{bh:750,fuel:2800,reg:155,maint:400},priceFrom:699,priceTo:1099},
      {name:'TrailBlazer',slug:'trailblazer',type:'suv',bh:11,desc:'SUV 7 ch\u1ED7 g\u1EA7m cao',monthly:{bh:917,fuel:3000,reg:165,maint:500},priceFrom:899,priceTo:1199},
      {name:'Captiva',slug:'captiva',type:'suv',bh:8,desc:'SUV 7 ch\u1ED7 \u0111\xF4 th\u1ECB',monthly:{bh:667,fuel:2400,reg:145,maint:420},priceFrom:699,priceTo:899},
      {name:'Cruze',slug:'cruze',type:'sedan',bh:6,desc:'Sedan h\u1EA1ng C gi\xE1 t\u1ED1t',monthly:{bh:500,fuel:2000,reg:125,maint:350},priceFrom:499,priceTo:699},
      {name:'Spark',slug:'spark',type:'hatchback',bh:4,desc:'City car nh\u1ECF g\u1ECDn ti\u1EBFt ki\u1EC7m',monthly:{bh:333,fuel:1400,reg:100,maint:250},priceFrom:299,priceTo:399},
      {name:'Orlando',slug:'orlando',type:'mpv',bh:7,desc:'MPV 7 ch\u1ED7 gia \u0111\xECnh',monthly:{bh:583,fuel:2200,reg:135,maint:380},priceFrom:599,priceTo:799},
    ],
    topInsurers:[
      {name:'B\u1EA3o Minh',color:'#0066CC',badge:'B\xE1n t\u1EA3i chuy\xEAn',reason:'Kinh nghi\u1EC7m b\u1EA3o hi\u1EC3m xe b\xE1n t\u1EA3i Colorado. Ph\u1EE5 t\xF9ng Chevrolet \u0111\u01B0\u1EE3c duy\u1EC7t t\u1ED1t.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Ph\u1EE7 r\u1ED9ng',reason:'M\u1EA1ng l\u01B0\u1EDBi garage r\u1ED9ng, ph\xF9 h\u1EE3p Colorado th\u01B0\u1EDDng xuy\xEAn \u0111i \u0111\u1ECBa h\xECnh.'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'\u1ED4n \u0111\u1ECBnh',reason:'Ph\xF9 h\u1EE3p xe Chevrolet c\u0169, ph\xED th\u1EA5p h\u01A1n nh\u1EDD kh\u1EA5u hao xe \u0111\xE3 xu\u1ED1ng.'},
    ],
    notes:[
      {q:'GM \u0111\xE3 r\xFAt kh\u1ECFi VN, xe Chevrolet c\xF2n mua BH v\xE0 s\u1EEDa \u0111\u01B0\u1EE3c kh\xF4ng?',a:'GM d\u1EEBng l\u1EAFp r\xE1p t\u1EA1i VN t\u1EEB 2019 nh\u01B0ng xe Chevrolet v\u1EABn l\u01B0u h\xE0nh. Ph\u1EE5 t\xF9ng v\u1EABn c\xF3 qua nh\u1EADp kh\u1EA9u t\u01B0 nh\xE2n. BH th\xE2n v\u1ECF ho\xE0n to\xE0n b\xECnh th\u01B0\u1EDDng \u2014 c\xE1c NB v\u1EABn b\u1EA3o hi\u1EC3m v\xE0 s\u1EEDa qua garage t\u01B0 nh\xE2n uy t\xEDn.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2606\u2606\u2606',level:'bad'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Trung b\xECnh',level:'warn'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Nh\u1EADp kh\u1EA9u t\u01B0',level:'warn'},
      {label:'Garage',val:'Garage t\u01B0 nh\xE2n',level:'warn'},
    ],
    insight:{owners:540,topModel:'Colorado',monthly:4103,vs_estimate:-0.5,hcm:4200,hn:4000,breakdown:{bh:750,fuel:2800,road:155,maint:400}},
    garages:[
      {name:'Garage AutoViet HCM',type:'authorized',city:'HCM',address:'B\xECnh Th\u1EA1nh, HCM',bh:['B\u1EA3o Minh','PVI'],claims:210,rating:4.4,note:'Garage t\u01B0 nh\xE2n uy t\xEDn chuy\xEAn Chevrolet. Ph\u1EE5 t\xF9ng nh\u1EADp tr\u1EF1c ti\u1EBFp, gi\xE1 t\u1ED1t.'},
      {name:'Garage M\u1EF9 Auto HN',type:'authorized',city:'HN',address:'Thanh Xu\xE2n, H\xE0 N\u1ED9i',bh:['B\u1EA3o Minh'],claims:160,rating:4.3,note:'Chuy\xEAn xe M\u1EF9 Chevrolet v\xE0 Ford. 10+ n\u0103m kinh nghi\u1EC7m.'},
    ],
    scenarios:['collision','parked','theft'],
  },
  porsche:{
    name:'Porsche',origin:'\u0110\u1EE9c',color:'#8B0000',tagline:'Hi\u1EC7u su\u1EA5t thu\u1EA7n t\xFAy \xB7 Sang tr\u1ECDng \xB7 Bi\u1EC3u t\u01B0\u1EE3ng',
    fuels:['x\u0103ng','phev','ev'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u xe th\u1EC3 thao cao c\u1EA5p \u0110\u1EE9c c\u1EE7a t\u1EADp \u0111o\xE0n Volkswagen Group. Macan v\xE0 Cayenne l\xE0 2 m\u1EABu SUV \u0111ang \u0111\u01B0\u1EE3c gi\u1EDBi nh\xE0 gi\xE0u VN \u01B0a chu\u1ED9ng. Ph\xED b\u1EA3o hi\u1EC3m cao nh\u01B0ng tr\u1EA3i nghi\u1EC7m l\xE1i v\xE0 \u0111\u1EB3ng c\u1EA5p th\u01B0\u01A1ng hi\u1EC7u l\xE0 kh\xE1c bi\u1EC7t l\u1EDBn.',
    models:[
      {name:'Macan',slug:'macan',type:'suv',bh:22,desc:'SUV th\u1EC3 thao compact h\u1EA1ng C',monthly:{bh:1833,fuel:3200,reg:250,maint:800},priceFrom:2099,priceTo:2999},
      {name:'Cayenne',slug:'cayenne',type:'suv',bh:35,desc:'SUV flagship h\u1EA1ng D cao c\u1EA5p',monthly:{bh:2917,fuel:4000,reg:380,maint:1200},priceFrom:3499,priceTo:5999},
      {name:'Taycan',slug:'taycan',type:'ev',bh:45,desc:'Sedan \u0111i\u1EC7n hi\u1EC7u su\u1EA5t cao',monthly:{bh:3750,fuel:1200,reg:480,maint:900},priceFrom:4999,priceTo:7999},
      {name:'Panamera',slug:'panamera',type:'sedan',bh:40,desc:'Sedan/coupe grand touring',monthly:{bh:3333,fuel:4200,reg:430,maint:1100},priceFrom:4299,priceTo:6999},
      {name:'911',slug:'911',type:'coupe',bh:50,desc:'Coupe th\u1EC3 thao bi\u1EC3u t\u01B0\u1EE3ng',monthly:{bh:4167,fuel:4500,reg:520,maint:1500},priceFrom:5999,priceTo:12000},
    ],
    topInsurers:[
      {name:'AXA Insurance',color:'#00008F',badge:'Xe cao c\u1EA5p chuy\xEAn',reason:'Chuy\xEAn b\u1EA3o hi\u1EC3m xe nh\u1EADp CBU gi\xE1 tr\u1ECB cao. Ph\u1EE5 t\xF9ng Porsche ch\xEDnh h\xE3ng \u0111\u01B0\u1EE3c duy\u1EC7t to\xE0n b\u1ED9.'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'Gi\xE1 tr\u1ECB cao',reason:'G\xF3i Premium Car ph\xF9 h\u1EE3p Porsche. B\u1ED3i th\u01B0\u1EDDng \u0111\xFAng gi\xE1 tr\u1ECB th\u1ECB tr\u01B0\u1EDDng kh\xF4ng kh\u1EA5u hao nhanh.'},
      {name:'PTI Insurance',color:'#003087',badge:'Chuy\xEAn xe th\u1EC3 thao',reason:'C\xF3 \u0111i\u1EC1u kho\u1EA3n ri\xEAng cho xe th\u1EC3 thao. Ph\xED c\u1EA1nh tranh cho Macan so v\u1EDBi c\xE1c NB kh\xE1c.'},
    ],
    notes:[
      {q:'B\u1EA3o hi\u1EC3m Porsche c\xF3 \u0111\u1EAFt kh\xF4ng v\xE0 b\u1EA3o v\u1EC7 \u0111\u01B0\u1EE3c g\xEC?',a:'Ph\xED BH th\xE2n v\u1ECF Porsche Macan th\u01B0\u1EDDng 22-28 tri\u1EC7u/n\u0103m (2-2.5% gi\xE1 tr\u1ECB xe). Cayenne 35-45 tri\u1EC7u/n\u0103m. N\xEAn ch\u1ECDn g\xF3i kh\xF4ng gi\u1EDBi h\u1EA1n m\u1EE9c tr\u1EA7n b\u1ED3i th\u01B0\u1EDDng ph\u1EE5 t\xF9ng \u2014 m\u1ED9t chi\u1EBFc \u0111\xE8n pha Porsche c\xF3 th\u1EC3 15-25 tri\u1EC7u.'},
      {q:'Porsche s\u1EEDa \u1EDF \u0111\xE2u t\u1EA1i VN khi tai n\u1EA1n?',a:'Porsche VN c\xF3 2 showroom service t\u1EA1i HCM v\xE0 HN v\u1EDBi k\u1EF9 thu\u1EADt vi\xEAn \u0111\u01B0\u1EE3c \u0111\xE0o t\u1EA1o tr\u1EF1c ti\u1EBFp t\u1EEB Stuttgart. M\u1ED9t s\u1ED1 NB c\xF3 th\u1ECFa thu\u1EADn v\u1EDBi Porsche Center Vietnam \u2014 \u01B0u ti\xEAn ch\u1ECDn NB n\xE0y \u0111\u1EC3 ph\u1EE5 t\xF9ng genuine \u0111\u01B0\u1EE3c duy\u1EC7t t\u1EF1 \u0111\u1ED9ng.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2605\u2606',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'R\u1EA5t cao',level:'bad'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Ch\xEDnh h\xE3ng \u0110\u1EE9c',level:'warn'},
      {label:'Service Center',val:'2 \u0111i\u1EC3m VN',level:'warn'},
    ],
    insight:{owners:320,topModel:'Macan',monthly:6083,vs_estimate:+1.2,hcm:6500,hn:5600,breakdown:{bh:1833,fuel:3200,road:250,maint:800}},
    garages:[
      {name:'Porsche Center HCM',type:'official',city:'HCM',address:'Xa l\u1ED9 H\xE0 N\u1ED9i, Th\u1EE7 \u0110\u1EE9c',bh:['AXA','B\u1EA3o Vi\u1EC7t'],claims:180,rating:4.9,note:'Porsche Authorized Service. K\u1EF9 thu\u1EADt vi\xEAn \u0111\xE0o t\u1EA1o Stuttgart. Ph\u1EE5 t\xF9ng genuine 100%.'},
      {name:'Porsche Center HN',type:'official',city:'HN',address:'Ph\u1EA1m H\xF9ng, Nam T\u1EEB Li\xEAm',bh:['AXA'],claims:130,rating:4.8,note:'Porsche Center ch\xEDnh h\xE3ng t\u1EA1i H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','fire','theft'],
  },
  jaguar:{
    name:'Jaguar',origin:'Anh',color:'#005A2B',tagline:'Thi\u1EBFt k\u1EBF Anh qu\u1ED1c \xB7 \u0110\u1EB3ng c\u1EA5p \xB7 Hi\u1EC7u su\u1EA5t',
    fuels:['x\u0103ng','phev'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u xe sang Anh thu\u1ED9c Jaguar Land Rover (\u1EA4n \u0110\u1ED9 - Tata Motors). F-Pace v\xE0 E-Pace l\xE0 2 m\u1EABu SUV \u0111\u01B0\u1EE3c gi\u1EDBi th\u01B0\u1EE3ng l\u01B0u VN \u01B0a chu\u1ED9ng v\xEC thi\u1EBFt k\u1EBF ri\xEAng bi\u1EC7t kh\xF4ng tr\xF9ng l\u1EABn v\u1EDBi xe \u0110\u1EE9c ph\u1ED5 th\xF4ng.',
    models:[
      {name:'F-PACE',slug:'f-pace',type:'suv',bh:30,desc:'SUV th\u1EC3 thao h\u1EA1ng D flagship',monthly:{bh:2500,fuel:3800,reg:320,maint:1000},priceFrom:2999,priceTo:4599},
      {name:'E-PACE',slug:'e-pace',type:'suv',bh:18,desc:'SUV compact th\u1EC3 thao h\u1EA1ng C',monthly:{bh:1500,fuel:3000,reg:220,maint:800},priceFrom:1899,priceTo:2499},
      {name:'XE',slug:'xe',type:'sedan',bh:15,desc:'Sedan th\u1EC3 thao h\u1EA1ng C',monthly:{bh:1250,fuel:2800,reg:200,maint:700},priceFrom:1599,priceTo:2199},
      {name:'XF',slug:'xf',type:'sedan',bh:22,desc:'Sedan grand touring h\u1EA1ng D',monthly:{bh:1833,fuel:3200,reg:260,maint:900},priceFrom:2199,priceTo:3099},
      {name:'XJ',slug:'xj',type:'sedan',bh:35,desc:'Sedan flagship h\u1EA1ng E',monthly:{bh:2917,fuel:4000,reg:380,maint:1200},priceFrom:3499,priceTo:5499},
      {name:'F-TYPE',slug:'f-type',type:'coupe',bh:40,desc:'Coupe/Roadster th\u1EC3 thao',monthly:{bh:3333,fuel:4500,reg:430,maint:1400},priceFrom:3999,priceTo:6499},
    ],
    topInsurers:[
      {name:'AXA Insurance',color:'#00008F',badge:'Xe Anh cao c\u1EA5p',reason:'Kinh nghi\u1EC7m l\xE2u n\u0103m v\u1EDBi Jaguar Land Rover. Ph\u1EE5 t\xF9ng JLR genuine \u0111\u01B0\u1EE3c duy\u1EC7t to\xE0n b\u1ED9 kh\xF4ng tranh ch\u1EA5p.'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'Xe nh\u1EADp gi\xE1 tr\u1ECB cao',reason:'G\xF3i b\u1EA3o hi\u1EC3m Premium ph\xF9 h\u1EE3p Jaguar. B\u1ED3i th\u01B0\u1EDDng \u0111\xFAng gi\xE1 tr\u1ECB th\u1EF1c kh\xF4ng kh\u1EA5u hao cao.'},
    ],
    notes:[
      {q:'Jaguar s\u1EEDa ch\u1EEFa \u1EDF \u0111\xE2u t\u1EA1i VN sau tai n\u1EA1n?',a:'Jaguar Land Rover VN c\xF3 showroom service t\u1EA1i HCM (Th\u1EE7 \u0110\u1EE9c) v\xE0 HN. Ph\u1EE5 t\xF9ng nh\u1EADp t\u1EEB UK v\xE0 \u1EA4n \u0110\u1ED9. Th\u1EDDi gian ch\u1EDD ph\u1EE5 t\xF9ng \u0111\u1EB7c th\xF9 c\xF3 th\u1EC3 2-4 tu\u1EA7n. N\xEAn ch\u1ECDn NB c\xF3 \u0111i\u1EC1u kho\u1EA3n xe thay th\u1EBF trong th\u1EDDi gian s\u1EEDa.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2606\u2606',level:'warn'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'R\u1EA5t cao',level:'bad'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Nh\u1EADp UK/\u1EA4n \u0110\u1ED9',level:'warn'},
      {label:'Service Center',val:'\xCDt \u0111i\u1EC3m',level:'warn'},
    ],
    insight:{owners:210,topModel:'F-PACE',monthly:7630,vs_estimate:+1.5,hcm:8200,hn:7000,breakdown:{bh:2500,fuel:3800,road:320,maint:1000}},
    garages:[
      {name:'JLR Center HCM',type:'official',city:'HCM',address:'Xa l\u1ED9 H\xE0 N\u1ED9i, Th\u1EE7 \u0110\u1EE9c',bh:['AXA','B\u1EA3o Vi\u1EC7t'],claims:120,rating:4.7,note:'Jaguar Land Rover Authorized Service Center. Ph\u1EE5 t\xF9ng genuine nh\u1EADp t\u1EEB UK.'},
      {name:'JLR Center HN',type:'official',city:'HN',address:'Ph\u1EA1m H\xF9ng, Nam T\u1EEB Li\xEAm',bh:['AXA'],claims:90,rating:4.6,note:'JLR Service Center ch\xEDnh h\xE3ng t\u1EA1i H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','fire','theft'],
  },
  skoda:{
    name:'\u0160koda',origin:'S\xE9c',color:'#4CAF50',tagline:'Xe S\xE9c tinh t\u1EBF \xB7 Kh\xF4ng gian r\u1ED9ng \xB7 Gi\xE1 c\u1EA1nh tranh',
    fuels:['x\u0103ng'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u S\xE9c thu\u1ED9c Volkswagen Group. N\u1ED5i ti\u1EBFng v\u1EDBi kh\xF4ng gian n\u1ED9i th\u1EA5t r\u1ED9ng h\u01A1n h\u1EB3n \u0111\u1ED1i th\u1EE7 c\xF9ng ph\xE2n kh\xFAc nh\u1EDD tri\u1EBFt l\xFD Simply Clever. Karoq v\xE0 Kodiaq \u0111ang \u0111\u01B0\u1EE3c ph\xE2n ph\u1ED1i ch\xEDnh h\xE3ng t\u1EA1i VN.',
    models:[
      {name:'Karoq',slug:'karoq',type:'suv',bh:11,desc:'SUV h\u1EA1ng C kh\xF4ng gian r\u1ED9ng',monthly:{bh:917,fuel:2400,reg:165,maint:500},priceFrom:899,priceTo:1299},
      {name:'Kodiaq',slug:'kodiaq',type:'suv',bh:15,desc:'SUV 7 ch\u1ED7 h\u1EA1ng D r\u1ED9ng r\xE3i',monthly:{bh:1250,fuel:2800,reg:200,maint:650},priceFrom:1399,priceTo:1799},
      {name:'Slavia',slug:'slavia',type:'sedan',bh:7,desc:'Sedan h\u1EA1ng B nh\u1ECF g\u1ECDn',monthly:{bh:583,fuel:2000,reg:130,maint:400}},
      {name:'Kushaq',slug:'kushaq',type:'suv',bh:8,desc:'SUV compact entry',monthly:{bh:667,fuel:2200,reg:140,maint:450}},
    ],
    topInsurers:[
      {name:'AXA Insurance',color:'#00008F',badge:'Volkswagen Group',reason:'Kinh nghi\u1EC7m v\u1EDBi to\xE0n b\u1ED9 xe VW Group. Ph\u1EE5 t\xF9ng \u0160koda \u0111\u01B0\u1EE3c duy\u1EC7t nh\u01B0 VW, \xEDt tranh ch\u1EA5p.'},
      {name:'Liberty Insurance',color:'#2E4099',badge:'Ph\u1EE5 t\xF9ng t\u1ED1t',reason:'M\u1EA1ng l\u01B0\u1EDBi garage r\u1ED9ng, ph\xF9 h\u1EE3p Karoq d\xF9ng n\u1ED9i \u0111\xF4.'},
    ],
    notes:[
      {q:'\u0160koda VN c\xF3 ph\u1EE5 t\xF9ng ch\xEDnh h\xE3ng d\u1EC5 t\xECm kh\xF4ng?',a:'\u0160koda VN ph\xE2n ph\u1ED1i qua VWGVN n\xEAn ph\u1EE5 t\xF9ng d\xF9ng chung chu\u1ED7i cung \u1EE9ng VW. Ph\u1EE5 t\xF9ng Karoq v\xE0 Kodiaq kh\xE1 s\u1EB5n t\u1EA1i HCM v\xE0 HN (3-7 ng\xE0y). T\u1ED1t h\u01A1n Peugeot hay Jaguar nh\u01B0ng \u0111\u1EAFt h\u01A1n xe Nh\u1EADt.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2606\u2606',level:'warn'},
      {label:'Kh\xF4ng gian',val:'R\u1ED9ng nh\u1EA5t ph\xE2n kh\xFAc',level:'good'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Trung b\xECnh',level:'warn'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Qua VW Group',level:'warn'},
    ],
    insight:{owners:380,topModel:'Karoq',monthly:4032,vs_estimate:+0.6,hcm:4300,hn:3760,breakdown:{bh:917,fuel:2400,road:165,maint:550}},
    garages:[
      {name:'\u0160koda Tr\u01B0\u1EDDng Chinh',type:'official',city:'HCM',address:'Tr\u01B0\u1EDDng Chinh, T\xE2n B\xECnh',bh:['AXA','Liberty'],claims:160,rating:4.6,note:'\u0110\u1EA1i l\xFD \u0160koda ch\xEDnh h\xE3ng HCM. Ph\u1EE5 t\xF9ng t\u1EEB kho VW Group.'},
      {name:'\u0160koda Long Bi\xEAn',type:'official',city:'HN',address:'Long Bi\xEAn, H\xE0 N\u1ED9i',bh:['AXA'],claims:120,rating:4.6,note:'\u0110\u1EA1i l\xFD \u0160koda ch\xEDnh h\xE3ng H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','glass','parked'],
  },
  mini:{
    name:'MINI',origin:'Anh',color:'#231F20',tagline:'Icon \u0111\xF4 th\u1ECB \xB7 C\xE1 t\xEDnh \xB7 Fun to drive',
    fuels:['x\u0103ng','ev'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Anh thu\u1ED9c BMW Group. MINI l\xE0 bi\u1EC3u t\u01B0\u1EE3ng xe \u0111\xF4 th\u1ECB c\xE1 t\xEDnh v\u1EDBi thi\u1EBFt k\u1EBF retro-modern kh\xF4ng \u0111\u1ED5i t\u1EEB th\u1EADp ni\xEAn 60. Cooper v\xE0 Cooper S l\xE0 2 m\u1EABu \u0111\u01B0\u1EE3c d\xE2n ch\u01A1i xe VN y\xEAu th\xEDch v\xEC kh\xE1c bi\u1EC7t tuy\u1EC7t \u0111\u1ED1i so v\u1EDBi xe Nh\u1EADt H\xE0n.',
    models:[
      {name:'Cooper',slug:'cooper',type:'hatchback',bh:10,desc:'Hatchback \u0111\xF4 th\u1ECB c\xE1 t\xEDnh 3/5 c\u1EEDa',monthly:{bh:833,fuel:2200,reg:155,maint:600},priceFrom:999,priceTo:1299},
      {name:'Cooper S',slug:'cooper-s',type:'hatchback',bh:12,desc:'Hatchback th\u1EC3 thao 192hp',monthly:{bh:1000,fuel:2400,reg:175,maint:650},priceFrom:1199,priceTo:1499},
      {name:'Countryman',slug:'countryman',type:'suv',bh:14,desc:'SUV 5 c\u1EEDa to h\u01A1n Cooper',monthly:{bh:1167,fuel:2600,reg:195,maint:700},priceFrom:1399,priceTo:1999},
      {name:'JCW',slug:'jcw',type:'hatchback',bh:15,desc:'John Cooper Works - phi\xEAn b\u1EA3n \u0111ua',monthly:{bh:1250,fuel:2800,reg:210,maint:800},priceFrom:1699,priceTo:2199},
      {name:'Electric',slug:'mini-electric',type:'ev',bh:11,desc:'MINI hatchback \u0111i\u1EC7n thu\u1EA7n t\xFAy',monthly:{bh:917,fuel:600,reg:165,maint:400},priceFrom:1099,priceTo:1299},
    ],
    topInsurers:[
      {name:'AXA Insurance',color:'#00008F',badge:'BMW Group chuy\xEAn',reason:'C\xF9ng chuy\xEAn BMW Group. Ph\u1EE5 t\xF9ng MINI v\xE0 BMW shared platform \u0111\u01B0\u1EE3c duy\u1EC7t nhanh.'},
      {name:'Liberty Insurance',color:'#2E4099',badge:'Xe \u0111\xF4 th\u1ECB',reason:'Ph\xF9 h\u1EE3p MINI d\xF9ng n\u1ED9i \u0111\xF4. B\u1ED3i th\u01B0\u1EDDng nhanh v\u1EDBi h\u01B0 h\u1ECFng nh\u1ECF th\u01B0\u1EDDng g\u1EB7p \u1EDF xe c\xE1 t\xEDnh.'},
    ],
    notes:[
      {q:'MINI h\u1ECFng c\xF3 kh\xF3 s\u1EEDa t\u1EA1i VN kh\xF4ng?',a:'MINI VN (BMW Group Vietnam) c\xF3 Service Center t\u1EA1i HCM v\xE0 HN. Ph\u1EE5 t\xF9ng d\xF9ng chung m\u1ED9t ph\u1EA7n v\u1EDBi BMW n\xEAn kh\xE1 s\u1EB5n. Gi\xE1 ph\u1EE5 t\xF9ng cao h\u01A1n xe \u0111\u1EA1i ch\xFAng 50-80% nh\u01B0ng th\u1EA5p h\u01A1n Ferrari hay Lamborghini.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2606\u2606',level:'warn'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Cao',level:'warn'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Qua BMW Group',level:'warn'},
      {label:'C\xE1 t\xEDnh',val:'\u0110\u1ED9c nh\u1EA5t',level:'good'},
    ],
    insight:{owners:290,topModel:'Cooper',monthly:3788,vs_estimate:+0.9,hcm:4000,hn:3500,breakdown:{bh:833,fuel:2200,road:155,maint:600}},
    garages:[
      {name:'MINI Studio HCM',type:'official',city:'HCM',address:'Xa l\u1ED9 H\xE0 N\u1ED9i, Th\u1EE7 \u0110\u1EE9c',bh:['AXA','Liberty'],claims:150,rating:4.7,note:'Showroom & Service MINI ch\xEDnh h\xE3ng HCM. K\u1EF9 thu\u1EADt vi\xEAn BMW Group.'},
      {name:'MINI Studio HN',type:'official',city:'HN',address:'Ph\u1EA1m H\xF9ng, Nam T\u1EEB Li\xEAm',bh:['AXA'],claims:110,rating:4.6,note:'MINI Service Center ch\xEDnh h\xE3ng H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','theft','parked'],
  },
  renault:{
    name:'Renault',origin:'Ph\xE1p',color:'#FFCD00',tagline:'Phong c\xE1ch Ph\xE1p \xB7 \u0110\u1ED5i m\u1EDBi \xB7 Th\u1EF1c d\u1EE5ng',
    fuels:['x\u0103ng'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u Ph\xE1p l\u1EDBn nh\u1EA5t th\u1EBF gi\u1EDBi. Renault t\u1EEBng c\xF3 m\u1EB7t t\u1EA1i VN qua li\xEAn doanh nh\u01B0ng hi\u1EC7n nh\u1EADp kh\u1EA9u CBU s\u1ED1 l\u01B0\u1EE3ng h\u1EA1n ch\u1EBF. Megane l\xE0 m\u1EABu hatchback/sedan ch\xE2u \xC2u \u0111\u01B0\u1EE3c m\u1ED9t s\u1ED1 ng\u01B0\u1EDDi \u01B0a chu\u1ED9ng v\xEC phong c\xE1ch kh\xE1c bi\u1EC7t.',
    models:[
      {name:'Megane',slug:'megane',type:'hatchback',bh:8,desc:'Hatchback ch\xE2u \xC2u phong c\xE1ch Ph\xE1p',monthly:{bh:667,fuel:2200,reg:140,maint:500},priceFrom:799,priceTo:1099},
      {name:'Koleos',slug:'koleos',type:'suv',bh:10,desc:'SUV h\u1EA1ng C d\xE1ng Ph\xE1p',monthly:{bh:833,fuel:2400,reg:160,maint:550},priceFrom:999,priceTo:1299},
    ],
    topInsurers:[
      {name:'AXA Insurance',color:'#00008F',badge:'Xe ch\xE2u \xC2u',reason:'Kinh nghi\u1EC7m xe nh\u1EADp ch\xE2u \xC2u. Ph\xF9 h\u1EE3p Renault CBU nh\u1EADp kh\u1EA9u s\u1ED1 l\u01B0\u1EE3ng nh\u1ECF.'},
      {name:'Liberty Insurance',color:'#2E4099',badge:'Ph\u1EE7 \u0111\xF4 th\u1ECB',reason:'B\u1ED3i th\u01B0\u1EDDng nhanh t\u1EA1i th\xE0nh ph\u1ED1 l\u1EDBn.'},
    ],
    notes:[
      {q:'Renault ph\u1EE5 t\xF9ng \u1EDF VN c\xF3 kh\xF3 ki\u1EBFm kh\xF4ng?',a:'Renault VN ph\xE2n ph\u1ED1i qua nh\xE0 nh\u1EADp kh\u1EA9u \u0111\u1ED9c l\u1EADp, ph\u1EE5 t\xF9ng \xEDt h\u01A1n Peugeot hay VW. Ph\u1EE5 t\xF9ng th\xE2n v\u1ECF nh\u1EADp t\u1EEB Ph\xE1p ho\u1EB7c Th\xE1i c\xF3 th\u1EC3 m\u1EA5t 2-6 tu\u1EA7n. N\xEAn mua b\u1EA3o hi\u1EC3m c\xF3 quy\u1EC1n l\u1EE3i xe thay th\u1EBF trong th\u1EDDi gian s\u1EEDa ch\u1EEFa.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2606\u2606\u2606',level:'bad'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'Cao',level:'warn'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Kh\xF3 t\xECm',level:'bad'},
      {label:'Garage',val:'R\u1EA5t \xEDt',level:'bad'},
    ],
    insight:{owners:120,topModel:'Megane',monthly:3507,vs_estimate:+1.1,hcm:3700,hn:3300,breakdown:{bh:667,fuel:2200,road:140,maint:500}},
    garages:[
      {name:'Garage ch\xE2u \xC2u Auto',type:'authorized',city:'HCM',address:'Qu\u1EADn 7, HCM',bh:['AXA'],claims:60,rating:4.3,note:'Garage t\u01B0 nh\xE2n chuy\xEAn xe ch\xE2u \xC2u. C\xF3 kinh nghi\u1EC7m v\u1EDBi Renault nh\u1EADp kh\u1EA9u.'},
    ],
    scenarios:['collision','parked'],
  },
  geely:{
    name:'Geely',origin:'Trung Qu\u1ED1c',color:'#0047AB',tagline:'Xe Trung Qu\u1ED1c th\u1EBF h\u1EC7 m\u1EDBi \xB7 C\xF4ng ngh\u1EC7 cao \xB7 Gi\xE1 t\u1ED1t',
    fuels:['x\u0103ng'],popular:false,
    desc:'T\u1EADp \u0111o\xE0n xe h\u01A1i t\u01B0 nh\xE2n l\u1EDBn nh\u1EA5t Trung Qu\u1ED1c, s\u1EDF h\u1EEFu Volvo, Lotus v\xE0 Polestar. Coolray l\xE0 m\u1EABu crossover Trung Qu\u1ED1c \u0111\u1EA7u ti\xEAn chinh ph\u1EE5c ng\u01B0\u1EDDi d\xF9ng VN nh\u1EDD thi\u1EBFt k\u1EBF \u0111\u1EB9p v\xE0 trang b\u1ECB hi\u1EC7n \u0111\u1EA1i \u1EDF ph\xE2n kh\xFAc gi\xE1 600-700 tri\u1EC7u.',
    models:[
      {name:'Coolray',slug:'coolray',type:'suv',bh:7,desc:'Crossover compact thi\u1EBFt k\u1EBF tr\u1EBB trung',monthly:{bh:583,fuel:2000,reg:130,maint:250},priceFrom:559,priceTo:699},
      {name:'Emgrand',slug:'emgrand',type:'sedan',bh:5,desc:'Sedan h\u1EA1ng B gi\xE1 r\u1EBB',monthly:{bh:417,fuel:1800,reg:115,maint:220},priceFrom:399,priceTo:549},
    ],
    topInsurers:[
      {name:'B\u1EA3o Minh',color:'#0066CC',badge:'Xe Trung Qu\u1ED1c',reason:'C\xF3 kinh nghi\u1EC7m v\u1EDBi xe Trung Qu\u1ED1c \u0111ang t\u0103ng tr\u01B0\u1EDFng. Ph\u1EE5 t\xF9ng Geely s\u1EB5n h\u01A1n d\u1EF1 ki\u1EBFn.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Ph\u1EE7 r\u1ED9ng',reason:'M\u1EA1ng l\u01B0\u1EDBi garage r\u1ED9ng, ph\xF9 h\u1EE3p Coolray \u0111i t\u1EC9nh th\xE0nh.'},
    ],
    notes:[
      {q:'Geely Coolray ph\u1EE5 t\xF9ng c\xF3 d\u1EC5 ki\u1EBFm kh\xF4ng?',a:'Geely VN qua li\xEAn doanh THACO c\xF3 kho ph\u1EE5 t\xF9ng t\u1EA1i HCM. Ph\u1EE5 t\xF9ng th\xE2n v\u1ECF Coolray (c\u1EA3n, \u0111\xE8n) th\u01B0\u1EDDng c\xF3 trong 3-5 ng\xE0y. Ph\u1EE5 t\xF9ng \u0111\u1ED9ng c\u01A1 v\xE0 h\u1ED9p s\u1ED1 \u0111\u1EB7c th\xF9 c\xF3 th\u1EC3 ch\u1EDD 1-2 tu\u1EA7n.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2606\u2606\u2606',level:'bad'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'R\u1EBB',level:'good'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Kh\xE1 s\u1EB5n HCM',level:'warn'},
      {label:'Thi\u1EBFt k\u1EBF',val:'Tr\u1EBB trung',level:'good'},
    ],
    insight:{owners:480,topModel:'Coolray',monthly:2963,vs_estimate:-0.2,hcm:3000,hn:2920,breakdown:{bh:583,fuel:2000,road:130,maint:250}},
    garages:[
      {name:'Geely Tr\u01B0\u1EDDng Chinh',type:'official',city:'HCM',address:'Tr\u01B0\u1EDDng Chinh, T\xE2n B\xECnh',bh:['B\u1EA3o Minh','PVI'],claims:180,rating:4.4,note:'\u0110\u1EA1i l\xFD Geely ch\xEDnh h\xE3ng HCM qua THACO.'},
      {name:'Geely C\u1EA7u Gi\u1EA5y',type:'official',city:'HN',address:'C\u1EA7u Gi\u1EA5y, H\xE0 N\u1ED9i',bh:['B\u1EA3o Minh'],claims:130,rating:4.3,note:'\u0110\u1EA1i l\xFD Geely ch\xEDnh h\xE3ng H\xE0 N\u1ED9i.'},
    ],
    scenarios:['collision','parked','theft'],
  },
  omoda:{
    name:'Omoda',origin:'Trung Qu\u1ED1c (Chery)',color:'#E31837',tagline:'M\u1EDBi t\u1EA1i VN \xB7 Thi\u1EBFt k\u1EBF t\xE1o b\u1EA1o \xB7 Trang b\u1ECB hi\u1EC7n \u0111\u1EA1i',
    fuels:['x\u0103ng'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u con c\u1EE7a Chery Auto (Trung Qu\u1ED1c), t\u1EADp trung v\xE0o ph\xE2n kh\xFAc crossover thi\u1EBFt k\u1EBF b\u1EAFt m\u1EAFt cho gi\u1EDBi tr\u1EBB. Omoda C5 v\u1EEBa ra m\u1EAFt t\u1EA1i VN v\u1EDBi thi\u1EBFt k\u1EBF \u0111\u1EB7c bi\u1EC7t n\u1ED5i b\u1EADt v\xE0 trang b\u1ECB c\xF4ng ngh\u1EC7 \u0111\u1EA7y \u0111\u1EE7 \u1EDF m\u1EE9c gi\xE1 h\u1EA5p d\u1EABn.',
    models:[
      {name:'C5',slug:'c5',type:'suv',bh:7,desc:'Crossover thi\u1EBFt k\u1EBF t\xE1o b\u1EA1o cho gi\u1EDBi tr\u1EBB',monthly:{bh:583,fuel:2000,reg:130,maint:280},priceFrom:599,priceTo:799},
    ],
    topInsurers:[
      {name:'B\u1EA3o Minh',color:'#0066CC',badge:'Xe Trung Qu\u1ED1c',reason:'Chuy\xEAn xe Trung Qu\u1ED1c m\u1EDBi v\xE0o VN. Ph\u1EE5 t\xF9ng Chery/Omoda qua k\xEAnh nh\u1EADp ch\xEDnh h\xE3ng.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Ph\u1EE7 r\u1ED9ng',reason:'Ph\xF9 h\u1EE3p Omoda d\xF9ng \u0111\xF4 th\u1ECB. B\u1ED3i th\u01B0\u1EDDng nhanh.'},
    ],
    notes:[
      {q:'Omoda C5 m\u1EDBi ra m\u1EAFt VN, ph\u1EE5 t\xF9ng v\xE0 garage s\u1EBD th\u1EBF n\xE0o?',a:'Chery VN \u0111ang x\xE2y d\u1EF1ng m\u1EA1ng l\u01B0\u1EDBi \u0111\u1EA1i l\xFD. Ph\u1EE5 t\xF9ng th\xE2n v\u1ECF nh\u1EADp tr\u1EF1c ti\u1EBFp t\u1EEB TQ, th\u1EDDi gian ch\u1EDD c\xF3 th\u1EC3 d\xE0i h\u01A1n xe \u0111\xE3 ph\u1ED5 bi\u1EBFn. N\xEAn mua BH c\xF3 \u0111i\u1EC1u kho\u1EA3n xe thay th\u1EBF v\xE0 kh\xF4ng gi\u1EDBi h\u1EA1n th\u1EDDi gian s\u1EEDa ch\u1EEFa.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'Ch\u01B0a x\xE1c \u0111\u1ECBnh',level:'warn'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'D\u1EF1 ki\u1EBFn th\u1EA5p',level:'good'},
      {label:'Ph\u1EE5 t\xF9ng',val:'\u0110ang x\xE2y d\u1EF1ng',level:'warn'},
      {label:'Thi\u1EBFt k\u1EBF',val:'R\u1EA5t n\u1ED5i b\u1EADt',level:'good'},
    ],
    insight:{owners:190,topModel:'C5',monthly:2993,vs_estimate:0,hcm:3000,hn:2980,breakdown:{bh:583,fuel:2000,road:130,maint:280}},
    garages:[
      {name:'Omoda HCM',type:'official',city:'HCM',address:'Qu\u1ED1c l\u1ED9 1A, B\xECnh T\xE2n',bh:['B\u1EA3o Minh'],claims:50,rating:4.3,note:'Showroom Omoda ch\xEDnh h\xE3ng HCM. Kho ph\u1EE5 t\xF9ng \u0111ang \u0111\u01B0\u1EE3c x\xE2y d\u1EF1ng.'},
    ],
    scenarios:['collision','parked'],
  },
  jaecoo:{
    name:'Jaecoo',origin:'Trung Qu\u1ED1c (Chery)',color:'#2F4F4F',tagline:'Off-road style \xB7 Gi\xE1 ph\u1EA3i ch\u0103ng \xB7 C\xE1 t\xEDnh \u0111\u1ECBa h\xECnh',
    fuels:['x\u0103ng'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u SUV off-road style c\u1EE7a Chery Auto, c\xF9ng nh\xE0 v\u1EDBi Omoda. Jaecoo J7 h\u01B0\u1EDBng \u0111\u1EBFn ng\u01B0\u1EDDi y\xEAu th\xEDch phong c\xE1ch \u0111\u1ECBa h\xECnh nam t\xEDnh nh\u01B0ng ng\xE2n s\xE1ch t\u1EA7m trung. \u0110ang ph\xE2n ph\u1ED1i ch\xEDnh h\xE3ng t\u1EA1i VN t\u1EEB 2024.',
    models:[
      {name:'J7',slug:'j7',type:'suv',bh:8,desc:'SUV off-road style 5 ch\u1ED7',monthly:{bh:667,fuel:2400,reg:145,maint:300},priceFrom:699,priceTo:899},
    ],
    topInsurers:[
      {name:'B\u1EA3o Minh',color:'#0066CC',badge:'Xe Trung Qu\u1ED1c',reason:'Kinh nghi\u1EC7m v\u1EDBi Chery/Jaecoo. Ph\u1EE5 t\xF9ng qua k\xEAnh ph\xE2n ph\u1ED1i ch\xEDnh h\xE3ng.'},
      {name:'PVI Insurance',color:'#FF6600',badge:'Ph\u1EE7 r\u1ED9ng',reason:'Ph\xF9 h\u1EE3p J7 \u0111i \u0111\u1ECBa h\xECnh. B\u1EA3o hi\u1EC3m to\xE0n di\u1EC7n h\u01A1n cho xe off-road.'},
    ],
    notes:[
      {q:'Jaecoo J7 d\xF9ng \u0111i \u0111\u1ECBa h\xECnh c\xF3 \u1EA3nh h\u01B0\u1EDFng \u0111\u1EBFn BH kh\xF4ng?',a:'Tham gia off-road nghi\u1EC7p d\u01B0 (\u0111\u01B0\u1EDDng m\xF2n, \u0111\u01B0\u1EDDng r\u1EEBng th\xF4ng th\u01B0\u1EDDng) kh\xF4ng \u1EA3nh h\u01B0\u1EDFng \u0111\u1EBFn BH th\xE2n v\u1ECF ti\xEAu chu\u1EA9n. H\u01B0 h\u1ECFng do l\u1ED3i l\xF5m \u0111\u01B0\u1EDDng off-road th\xF4ng th\u01B0\u1EDDng \u0111\u01B0\u1EE3c b\u1ED3i th\u01B0\u1EDDng. \u0110ua xe hay \u0111i v\xE0o khu v\u1EF1c nguy hi\u1EC3m c\xF3 c\u1EA3nh b\xE1o (bi\u1EC3n c\u1EA5m) th\u01B0\u1EDDng b\u1ECB t\u1EEB ch\u1ED1i.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'Ch\u01B0a x\xE1c \u0111\u1ECBnh',level:'warn'},
      {label:'B\u1EA3o d\u01B0\u1EE1ng',val:'D\u1EF1 ki\u1EBFn th\u1EA5p',level:'good'},
      {label:'Ph\u1EE5 t\xF9ng',val:'\u0110ang x\xE2y d\u1EF1ng',level:'warn'},
      {label:'\u0110\u1ECBa h\xECnh',val:'T\u1ED1t cho t\u1EA7m gi\xE1',level:'good'},
    ],
    insight:{owners:160,topModel:'J7',monthly:3512,vs_estimate:+0.3,hcm:3600,hn:3400,breakdown:{bh:667,fuel:2400,road:145,maint:300}},
    garages:[
      {name:'Jaecoo HCM',type:'official',city:'HCM',address:'Qu\u1ED1c l\u1ED9 13, B\xECnh D\u01B0\u01A1ng',bh:['B\u1EA3o Minh'],claims:40,rating:4.2,note:'Showroom Jaecoo ch\xEDnh h\xE3ng HCM.'},
    ],
    scenarios:['collision','parked'],
  },
  acura:{
    name:'Acura',origin:'M\u1EF9 (Honda)',color:'#CC0000',tagline:'Xe sang Honda \xB7 C\xF4ng ngh\u1EC7 precision \xB7 Th\u1EC3 thao',
    fuels:['x\u0103ng','hybrid'],popular:false,
    desc:'Th\u01B0\u01A1ng hi\u1EC7u xe sang c\u1EE7a Honda d\xE0nh cho th\u1ECB tr\u01B0\u1EDDng B\u1EAFc M\u1EF9. T\u1EA1i VN, Acura \u0111\u01B0\u1EE3c nh\u1EADp kh\u1EA9u t\u01B0 nh\xE2n. MDX v\xE0 RDX l\xE0 2 m\u1EABu SUV \u0111\u01B0\u1EE3c \u01B0a chu\u1ED9ng nh\u1EA5t nh\u1EDD k\u1EBF th\u1EEBa \u0111\u1ED9 tin c\u1EADy Honda nh\u01B0ng v\u1EDBi trang b\u1ECB v\xE0 thi\u1EBFt k\u1EBF \u0111\u1EB3ng c\u1EA5p h\u01A1n.',
    models:[
      {name:'RDX',slug:'rdx',type:'suv',bh:14,desc:'SUV compact luxury h\u1EA1ng C',monthly:{bh:1167,fuel:2600,reg:195,maint:600},priceFrom:1499,priceTo:1999},
      {name:'MDX',slug:'mdx',type:'suv',bh:18,desc:'SUV 7 ch\u1ED7 h\u1EA1ng D flagship',monthly:{bh:1500,fuel:3000,reg:240,maint:750},priceFrom:1899,priceTo:2499},
      {name:'TLX',slug:'tlx',type:'sedan',bh:13,desc:'Sedan sport luxury',monthly:{bh:1083,fuel:2800,reg:185,maint:650},priceFrom:1299,priceTo:1799},
      {name:'ILX',slug:'ilx',type:'sedan',bh:9,desc:'Sedan compact entry luxury',monthly:{bh:750,fuel:2200,reg:155,maint:500},priceFrom:899,priceTo:1199},
    ],
    topInsurers:[
      {name:'AXA Insurance',color:'#00008F',badge:'Xe nh\u1EADp CBU',reason:'Kinh nghi\u1EC7m xe nh\u1EADp M\u1EF9. Ph\u1EE5 t\xF9ng Acura qua k\xEAnh Honda \u1EE7y quy\u1EC1n \u0111\u01B0\u1EE3c duy\u1EC7t t\u1ED1t.'},
      {name:'B\u1EA3o Vi\u1EC7t',color:'#1B60A8',badge:'Xe sang nh\u1EADp',reason:'G\xF3i b\u1EA3o hi\u1EC3m ph\xF9 h\u1EE3p xe sang nh\u1EADp CBU. B\u1ED3i th\u01B0\u1EDDng \u0111\xFAng gi\xE1 tr\u1ECB.'},
    ],
    notes:[
      {q:'Acura s\u1EEDa \u1EDF \u0111\xE2u t\u1EA1i VN, ph\u1EE5 t\xF9ng c\xF3 d\u1EC5 ki\u1EBFm kh\xF4ng?',a:'Acura kh\xF4ng c\xF3 showroom ch\xEDnh h\xE3ng t\u1EA1i VN. S\u1EEDa ch\u1EEFa qua garage Honda \u1EE7y quy\u1EC1n c\xF3 kinh nghi\u1EC7m xe M\u1EF9, ho\u1EB7c garage t\u01B0 nh\xE2n chuy\xEAn xe Nh\u1EADt cao c\u1EA5p. Ph\u1EE5 t\xF9ng nh\u1EADp t\u1EEB Nh\u1EADt ho\u1EB7c M\u1EF9 c\xF3 th\u1EC3 m\u1EA5t 1-3 tu\u1EA7n.'},
    ],
    scores:[
      {label:'Gi\u1EEF gi\xE1',val:'\u2605\u2605\u2605\u2606\u2606',level:'warn'},
      {label:'Tin c\u1EADy',val:'Cao (Honda)',level:'good'},
      {label:'Ph\u1EE5 t\xF9ng',val:'Nh\u1EADp Nh\u1EADt/M\u1EF9',level:'warn'},
      {label:'Garage',val:'Honda \u1EE7y quy\u1EC1n',level:'warn'},
    ],
    insight:{owners:180,topModel:'RDX',monthly:4712,vs_estimate:+0.7,hcm:5000,hn:4400,breakdown:{bh:1167,fuel:2600,road:195,maint:750}},
    garages:[
      {name:'Garage Nh\u1EADt Cao C\u1EA5p HCM',type:'authorized',city:'HCM',address:'Qu\u1EADn 2, HCM',bh:['AXA','B\u1EA3o Vi\u1EC7t'],claims:80,rating:4.5,note:'Garage chuy\xEAn xe Nh\u1EADt cao c\u1EA5p Honda/Acura/Lexus. Ph\u1EE5 t\xF9ng genuine nh\u1EADp tr\u1EF1c ti\u1EBFp.'},
    ],
    scenarios:['collision','theft','parked'],
  },
};

const BRAND_LIST = ['toyota','honda','hyundai','kia','mazda','ford','mitsubishi','vinfast','mercedes','bmw','lexus','audi','volvo','mg','isuzu','suzuki','nissan','byd','peugeot','subaru','landrover','wuling','tesla','volkswagen','chevrolet','porsche','jaguar','skoda','mini','renault','geely','omoda','jaecoo','acura'];
const DUAL_BRANDS = ['honda','vinfast','suzuki']; // brands c\xF3 c\u1EA3 \xF4 t\xF4 l\u1EABn xe m\xE1y

const BRAND_NEWS = {
  toyota:[
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Toyota Camry 2025 ch\xEDnh th\u1EE9c ra m\u1EAFt t\u1EA1i Vi\u1EC7t Nam, gi\xE1 t\u1EEB 1,4 t\u1EF7 \u0111\u1ED3ng',source:'VnExpress',date:'T6/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'H\u1EC7 th\u1ED1ng hybrid th\u1EBF h\u1EC7 5 c\u1EE7a Toyota ti\u1EBFt ki\u1EC7m nhi\xEAn li\u1EC7u h\u01A1n 30% so v\u1EDBi \u0111\u1ED9ng c\u01A1 x\u0103ng th\xF4ng th\u01B0\u1EDDng',source:'AutoZine',date:'T5/2025',href:'#'},
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'Toyota gi\u1EEF v\u1EEFng v\u1ECB tr\xED s\u1ED1 1 th\u1ECB ph\u1EA7n \xF4 t\xF4 t\u1EA1i Vi\u1EC7t Nam 6 th\xE1ng \u0111\u1EA7u n\u0103m 2025',source:'VAMA',date:'T7/2025',href:'#'},
  ],
  honda:[
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Honda CR-V 2025 b\u1ED5 sung phi\xEAn b\u1EA3n hybrid e:HEV, gi\xE1 t\u1EEB 1,12 t\u1EF7 \u0111\u1ED3ng',source:'Tu\u1ED5i Tr\u1EBB',date:'T5/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Honda Accord th\u1EBF h\u1EC7 th\u1EE9 11 ra m\u1EAFt t\u1EA1i Vi\u1EC7t Nam v\u1EDBi Honda SENSING to\xE0n di\u1EC7n',source:'VnExpress',date:'T4/2025',href:'#'},
    {cat:'event',catLabel:'S\u1EF1 ki\u1EC7n',title:'Honda Vi\u1EC7t Nam khai tr\u01B0\u01A1ng trung t\xE2m d\u1ECBch v\u1EE5 3S th\u1EE9 30 t\u1EA1i TP.HCM',source:'AutoZine',date:'T6/2025',href:'#'},
  ],
  hyundai:[
    {cat:'promo',catLabel:'\u01AFu \u0111\xE3i',title:'Hyundai IONIQ 5 gi\u1EA3m gi\xE1 c\xF2n 899 tri\u1EC7u sau \u01B0u \u0111\xE3i thu\u1EBF - m\u1EE9c th\u1EA5p nh\u1EA5t t\u1EEB tr\u01B0\u1EDBc \u0111\u1EBFn nay',source:'CafeAuto',date:'T5/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Hyundai Tucson 2025 facelift ra m\u1EAFt v\u1EDBi thi\u1EBFt k\u1EBF m\u1EB7t calandra m\u1EDBi v\xE0 ADAS ti\xEAu chu\u1EA9n',source:'VnExpress',date:'T4/2025',href:'#'},
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'Hyundai \u0111\u1EA1t m\u1ED1c 500.000 xe b\xE1n ra t\u1EA1i Vi\u1EC7t Nam, t\u1EADp trung m\u1EDF r\u1ED9ng m\u1EA3ng xe \u0111i\u1EC7n',source:'VAMA',date:'T6/2025',href:'#'},
  ],
  kia:[
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Kia Seltos 2025 phi\xEAn b\u1EA3n Signature cao nh\u1EA5t ra m\u1EAFt, gi\xE1 849 tri\u1EC7u \u0111\u1ED3ng',source:'Tu\u1ED5i Tr\u1EBB',date:'T5/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'Kia EV6 GT-Line 2025 n\xE2ng ph\u1EA1m vi ho\u1EA1t \u0111\u1ED9ng l\xEAn 528km m\u1ED9t l\u1EA7n s\u1EA1c \u0111\u1EA7y',source:'AutoZine',date:'T4/2025',href:'#'},
    {cat:'promo',catLabel:'\u01AFu \u0111\xE3i',title:'Kia Carnival 2025 \u01B0u \u0111\xE3i l\xEAn \u0111\u1EBFn 50 tri\u1EC7u \u0111\u1ED3ng ti\u1EC1n m\u1EB7t trong th\xE1ng 7/2025',source:'CafeAuto',date:'T7/2025',href:'#'},
  ],
  mazda:[
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Mazda CX-5 2025 n\xE2ng c\u1EA5p m\xE0n h\xECnh 10.25 inch v\xE0 h\u1EC7 th\u1ED1ng \xE2m thanh Bose 12 loa',source:'VnExpress',date:'T6/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Mazda3 Sedan 2025 phi\xEAn b\u1EA3n m\u1EDBi gi\xE1 t\u1EEB 699 tri\u1EC7u, b\u1ED5 sung m\xE0u Artisan Red Metallic',source:'AutoZine',date:'T5/2025',href:'#'},
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'Mazda CX-5 ti\u1EBFp t\u1EE5c d\u1EABn \u0111\u1EA7u ph\xE2n kh\xFAc C-SUV t\u1EA1i Vi\u1EC7t Nam qu\xFD 2/2025',source:'VAMA',date:'T7/2025',href:'#'},
  ],
  ford:[
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Ford Ranger Raptor 2025 phi\xEAn b\u1EA3n V6 EcoBoost ra m\u1EAFt, m\u1EA1nh 392 m\xE3 l\u1EF1c',source:'Tu\u1ED5i Tr\u1EBB',date:'T6/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Ford Everest 2025 Platinum b\u1ED5 sung \u0111\u1ED9ng c\u01A1 V6 3.0L v\xE0 h\u1ED9p s\u1ED1 10 c\u1EA5p',source:'CafeAuto',date:'T4/2025',href:'#'},
    {cat:'promo',catLabel:'\u01AFu \u0111\xE3i',title:'Ford Vi\u1EC7t Nam \u01B0u \u0111\xE3i l\xE3i su\u1EA5t 0% trong 12 th\xE1ng cho Ranger v\xE0 Territory th\xE1ng 7/2025',source:'AutoZine',date:'T7/2025',href:'#'},
  ],
  mitsubishi:[
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Mitsubishi Xpander 2025 facelift ra m\u1EAFt v\u1EDBi thi\u1EBFt k\u1EBF Dynamic Shield th\u1EBF h\u1EC7 m\u1EDBi',source:'VnExpress',date:'T5/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Mitsubishi Outlander PHEV 2025 s\u1EAFp ra m\u1EAFt t\u1EA1i Vi\u1EC7t Nam, ph\u1EA1m vi hybrid 87km',source:'AutoZine',date:'T6/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'Mi-Pilot Assist - h\u1EC7 th\u1ED1ng h\u1ED7 tr\u1EE3 l\xE1i ti\xEAu chu\u1EA9n tr\xEAn to\xE0n b\u1ED9 d\u1EA3i s\u1EA3n ph\u1EA9m Mitsubishi 2025',source:'CafeAuto',date:'T4/2025',href:'#'},
  ],
  vinfast:[
    {cat:'promo',catLabel:'\u01AFu \u0111\xE3i',title:'VinFast VF 5 Plus gi\u1EA3m gi\xE1 c\xF2n 458 tri\u1EC7u, \u01B0u \u0111\xE3i th\xEAm g\xF3i pin mi\u1EC5n ph\xED 3 n\u0103m',source:'Tu\u1ED5i Tr\u1EBB',date:'T6/2025',href:'#'},
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'VinFast m\u1EDF r\u1ED9ng h\u1EC7 th\u1ED1ng tr\u1EA1m s\u1EA1c VinFast Green l\xEAn 3.000 \u0111i\u1EC3m tr\xEAn to\xE0n qu\u1ED1c',source:'VnExpress',date:'T5/2025',href:'#'},
    {cat:'event',catLabel:'S\u1EF1 ki\u1EC7n',title:'VinFast k\xFD th\u1ECFa thu\u1EADn cung c\u1EA5p 10.000 xe VF 8 cho \u0111\u1ED1i t\xE1c d\u1ECBch v\u1EE5 v\u1EADn t\u1EA3i t\u1EA1i M\u1EF9',source:'CafeAuto',date:'T7/2025',href:'#'},
  ],
  mercedes:[
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Mercedes E-Class 2025 All-Terrain ch\xEDnh th\u1EE9c b\xE1n t\u1EA1i Vi\u1EC7t Nam gi\xE1 t\u1EEB 3,2 t\u1EF7 \u0111\u1ED3ng',source:'AutoZine',date:'T6/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'MBUX Superscreen th\u1EBF h\u1EC7 m\u1EDBi t\xEDch h\u1EE3p AI tr\xEAn GLE v\xE0 GLS 2025 t\u1EA1i th\u1ECB tr\u01B0\u1EDDng Vi\u1EC7t Nam',source:'VnExpress',date:'T5/2025',href:'#'},
    {cat:'event',catLabel:'S\u1EF1 ki\u1EC7n',title:'Mercedes-Benz khai tr\u01B0\u01A1ng Trung t\xE2m Tr\u1EA3i nghi\u1EC7m AMG \u0111\u1EA7u ti\xEAn t\u1EA1i H\xE0 N\u1ED9i',source:'Tu\u1ED5i Tr\u1EBB',date:'T4/2025',href:'#'},
  ],
  bmw:[
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'BMW X3 2025 ch\xEDnh th\u1EE9c l\u1EAFp r\xE1p CKD t\u1EA1i Vi\u1EC7t Nam, gi\xE1 gi\u1EA3m 180 tri\u1EC7u so v\u1EDBi CBU',source:'VnExpress',date:'T6/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'BMW i5 thu\u1EA7n \u0111i\u1EC7n ra m\u1EAFt t\u1EA1i Vi\u1EC7t Nam v\u1EDBi ph\u1EA1m vi 582km, gi\xE1 t\u1EEB 3,8 t\u1EF7 \u0111\u1ED3ng',source:'CafeAuto',date:'T5/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'BMW ConnectedDrive c\u1EADp nh\u1EADt Over-the-Air t\xEDnh n\u0103ng l\xE1i b\xE1n t\u1EF1 \u0111\u1ED9ng tr\xEAn BMW 3 Series 2024',source:'AutoZine',date:'T7/2025',href:'#'},
  ],
  lexus:[
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'Lexus NX 2025 d\u1EABn \u0111\u1EA7u ph\xE2n kh\xFAc SUV luxury t\u1EA1i Vi\u1EC7t Nam, gi\u1EEF gi\xE1 t\u1ED1t h\u01A1n Mercedes GLC',source:'VnExpress',date:'T5/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Lexus RX 500h ra m\u1EAFt t\u1EA1i Vi\u1EC7t Nam: SUV hybrid 367 m\xE3 l\u1EF1c, gi\xE1 t\u1EEB 4,3 t\u1EF7 \u0111\u1ED3ng',source:'CafeAuto',date:'T4/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'Lexus Safety System+ 3.0 n\xE2ng c\u1EA5p m\u1EA1nh t\xEDnh n\u0103ng c\u1EA3nh b\xE1o \u0111i\u1EC3m m\xF9 v\xE0 t\u1EF1 \u0111\u1ED9ng \u0111\xE1nh l\xE1i tr\xE1nh va ch\u1EA1m',source:'AutoZine',date:'T6/2025',href:'#'},
  ],
  audi:[
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'Audi Q5 2025 l\u1EAFp r\xE1p CKD t\u1EA1i VN, gi\xE1 r\u1EBB h\u01A1n 280 tri\u1EC7u so v\u1EDBi phi\xEAn b\u1EA3n nh\u1EADp kh\u1EA9u',source:'VnExpress',date:'T5/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Audi Q8 e-tron thu\u1EA7n \u0111i\u1EC7n ra m\u1EAFt t\u1EA1i Vi\u1EC7t Nam, ph\u1EA1m vi 582km, gi\xE1 4,9 t\u1EF7 \u0111\u1ED3ng',source:'CafeAuto',date:'T3/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'H\u1EC7 th\u1ED1ng \u0111\xE8n ma tr\u1EADn Matrix LED th\u1EBF h\u1EC7 m\u1EDBi tr\xEAn Audi A6 2025 \u0111\u01B0\u1EE3c ph\xEA duy\u1EC7t ho\u1EA1t \u0111\u1ED9ng t\u1EA1i Vi\u1EC7t Nam',source:'AutoZine',date:'T6/2025',href:'#'},
  ],
  volvo:[
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'Volvo XC60 B5 Mild Hybrid chinh ph\u1EE5c th\u1ECB tr\u01B0\u1EDDng SUV cao c\u1EA5p v\u1EDBi gi\xE1 c\u1EA1nh tranh h\u01A1n Q5 v\xE0 GLC',source:'VnExpress',date:'T5/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Volvo EX30 thu\u1EA7n \u0111i\u1EC7n d\u1EF1 ki\u1EBFn ra m\u1EAFt Vi\u1EC7t Nam cu\u1ED1i 2025, gi\xE1 d\u1EF1 ki\u1EBFn d\u01B0\u1EDBi 1,5 t\u1EF7 \u0111\u1ED3ng',source:'CafeAuto',date:'T6/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'Volvo Cars tuy\xEAn b\u1ED1 m\u1EE5c ti\xEAu zero death goal \u2014 kh\xF4ng ca t\u1EED vong n\xE0o trong xe Volvo m\u1EDBi t\u1EEB 2030',source:'AutoZine',date:'T4/2025',href:'#'},
  ],
  mg:[
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'MG ZS chi\u1EBFm 8% th\u1ECB ph\u1EA7n SUV \u0111\xF4 th\u1ECB t\u1EA1i Vi\u1EC7t Nam, th\xE1ch th\u1EE9c Hyundai Kona v\xE0 Kia Seltos',source:'VnExpress',date:'T6/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'MG VS HEV Hybrid ra m\u1EAFt, tr\u1EDF th\xE0nh SUV hybrid r\u1EBB nh\u1EA5t Vi\u1EC7t Nam d\u01B0\u1EDBi 800 tri\u1EC7u \u0111\u1ED3ng',source:'CafeAuto',date:'T4/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'SAIC \u0111\u1EA7u t\u01B0 nh\xE0 m\xE1y ph\u1EE5 t\xF9ng MG t\u1EA1i B\xECnh D\u01B0\u01A1ng \u2014 cam k\u1EBFt t\u0103ng t\u1EF7 l\u1EC7 n\u1ED9i \u0111\u1ECBa h\xF3a l\xEAn 40%',source:'AutoZine',date:'T5/2025',href:'#'},
  ],
  isuzu:[
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'Isuzu D-Max 2025 gi\u1EEF v\u1EEFng top 3 b\xE1n t\u1EA3i to\xE0n qu\u1ED1c v\u1EDBi doanh s\u1ED1 v\u01B0\u1EE3t 1.200 xe/th\xE1ng',source:'VnExpress',date:'T5/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Isuzu mu-X 2025 ra m\u1EAFt v\u1EDBi h\u1EC7 th\u1ED1ng phanh t\u1ED5ng h\u1EE3p m\u1EDBi, gi\xE1 t\u1EEB 899 tri\u1EC7u \u0111\u1ED3ng',source:'CafeAuto',date:'T3/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'\u0110\u1ED9ng c\u01A1 diesel 4JJ3 c\u1EE7a Isuzu D-Max \u0111\u1EA1t ti\xEAu chu\u1EA9n Euro 5, ti\u1EBFt ki\u1EC7m 12% nhi\xEAn li\u1EC7u so v\u1EDBi \u0111\u1EDDi c\u0169',source:'AutoZine',date:'T6/2025',href:'#'},
  ],
  suzuki:[
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'Suzuki XL7 t\u0103ng tr\u01B0\u1EDFng 24% doanh s\u1ED1 nh\u1EDD gi\xE1 c\u1EA1nh tranh trong ph\xE2n kh\xFAc MPV 7 ch\u1ED7',source:'VnExpress',date:'T6/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Suzuki Swift Sport 2025 ra m\u1EAFt t\u1EA1i VN \u2014 hatchback th\u1EC3 thao nh\u1ECF g\u1ECDn gi\xE1 699 tri\u1EC7u \u0111\u1ED3ng',source:'CafeAuto',date:'T4/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'Suzuki gi\u1EDBi thi\u1EC7u h\u1EC7 th\u1ED1ng HYBRID SYSTEM nh\u1EB9 cho Ertiga, ti\u1EBFt ki\u1EC7m th\xEAm 8% nhi\xEAn li\u1EC7u',source:'AutoZine',date:'T5/2025',href:'#'},
  ],
  nissan:[
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'Nissan Terra 2025 l\u1EA5y l\u1EA1i th\u1ECB ph\u1EA7n v\u1EDBi combo off-road m\u1EA1nh m\u1EBD v\xE0 d\u1ECBch v\u1EE5 h\u1EADu m\xE3i c\u1EA3i thi\u1EC7n',source:'VnExpress',date:'T6/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Nissan Almera 2025 n\xE2ng c\u1EA5p an to\xE0n AEB v\xE0 c\u1EA3nh b\xE1o \u0111i\u1EC3m m\xF9, gi\xE1 gi\u1EEF nguy\xEAn t\u1EEB 428 tri\u1EC7u',source:'CafeAuto',date:'T5/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'ProPILOT Assist c\u1EE7a Nissan \u0111\u01B0\u1EE3c n\xE2ng c\u1EA5p h\u1ED7 tr\u1EE3 l\xE1i tr\xEAn \u0111\u01B0\u1EDDng cao t\u1ED1c Vi\u1EC7t Nam',source:'AutoZine',date:'T4/2025',href:'#'},
  ],
  byd:[
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'BYD Atto 3 tr\u1EDF th\xE0nh SUV \u0111i\u1EC7n b\xE1n ch\u1EA1y nh\u1EA5t Vi\u1EC7t Nam, v\u01B0\u1EE3t qua VinFast VF 8 th\xE1ng 5/2025',source:'VnExpress',date:'T6/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'BYD Sea Lion 6 DM-i ra m\u1EAFt: plug-in hybrid \u0111i 80km \u0111i\u1EC7n, gi\xE1 t\u1EEB 748 tri\u1EC7u \u0111\u1ED3ng',source:'CafeAuto',date:'T5/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'Pin Blade Battery th\u1EBF h\u1EC7 2 c\u1EE7a BYD t\u0103ng m\u1EADt \u0111\u1ED9 n\u0103ng l\u01B0\u1EE3ng 15%, v\u01B0\u1EE3t qua b\xE0i ki\u1EC3m tra \u0111\xE2m kim neeble test',source:'AutoZine',date:'T4/2025',href:'#'},
  ],
  peugeot:[
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'Peugeot 3008 2025 t\u0103ng tr\u01B0\u1EDFng m\u1EA1nh nh\u1EDD thi\u1EBFt k\u1EBF kh\xE1c bi\u1EC7t v\xE0 g\xF3i khuy\u1EBFn m\xE3i h\u1EA5p d\u1EABn t\u1EEB T\u1EADp \u0110o\xE0n Th\xE0nh C\xF4ng',source:'VnExpress',date:'T6/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Peugeot 408 Fastback ch\xEDnh th\u1EE9c ra m\u1EAFt Vi\u1EC7t Nam \u2014 sedan-SUV hybrid phong c\xE1ch ch\xE2u \xC2u gi\xE1 1,1 t\u1EF7',source:'CafeAuto',date:'T4/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'i-Cockpit 3D c\u1EE7a Peugeot \u0111\u01B0\u1EE3c \u0111\xE1nh gi\xE1 l\xE0 m\xE0n h\xECnh c\u1EE5m \u0111\u1ED3ng h\u1ED3 \u0111\u1EB9p nh\u1EA5t ph\xE2n kh\xFAc t\u1EA7m trung t\u1EA1i VN',source:'AutoZine',date:'T5/2025',href:'#'},
  ],
  subaru:[
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'Subaru Forester AWD \u0111\u01B0\u1EE3c c\u1ED9ng \u0111\u1ED3ng outdoor Vi\u1EC7t Nam b\xECnh ch\u1ECDn l\xE0 SUV \u0111\xE1ng tin nh\u1EA5t trong \u0111i\u1EC1u ki\u1EC7n \u0111\u01B0\u1EDDng x\u1EA5u',source:'VnExpress',date:'T5/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Subaru Crosstrek 2025 ra m\u1EAFt v\u1EDBi \u0111\u1ED9ng c\u01A1 hybrid nh\u1EB9, ph\u1EA1m vi d\u1EEBng \u0111\xE8n gi\u1EA3m 15% ti\xEAu hao nhi\xEAn li\u1EC7u',source:'CafeAuto',date:'T4/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'EyeSight 4.0 c\u1EE7a Subaru \u0111\u01B0\u1EE3c ph\xEA duy\u1EC7t ho\u1EA1t \u0111\u1ED9ng tr\xEAn cao t\u1ED1c Vi\u1EC7t Nam \u2014 l\u1EA7n \u0111\u1EA7u ti\xEAn cho th\u01B0\u01A1ng hi\u1EC7u n\xE0y',source:'AutoZine',date:'T6/2025',href:'#'},
  ],
  landrover:[
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'Land Rover Defender 110 chi\u1EBFm l\u0129nh ph\xE2n kh\xFAc SUV h\u1EA1ng sang off-road, gi\u1EEF gi\xE1 t\u1ED1t h\u01A1n 20% so v\u1EDBi G-Class',source:'VnExpress',date:'T6/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Range Rover Sport PHEV ra m\u1EAFt Vi\u1EC7t Nam \u2014 SUV hybrid s\u1EA1c ngo\xE0i, \u0111i 80km \u0111i\u1EC7n, gi\xE1 t\u1EEB 7,8 t\u1EF7 \u0111\u1ED3ng',source:'CafeAuto',date:'T4/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'Terrain Response 2 Auto c\u1EE7a Land Rover h\u1ECDc th\xF3i quen l\xE1i \u0111\u1ECBa h\xECnh v\xE0 t\u1EF1 \u0111i\u1EC1u ch\u1EC9nh theo \u0111\u01B0\u1EDDng \u0111\u1EB7c tr\u01B0ng c\u1EE7a VN',source:'AutoZine',date:'T5/2025',href:'#'},
  ],
  wuling:[
    {cat:'market',catLabel:'Th\u1ECB tr\u01B0\u1EDDng',title:'Wuling BingGuo EV tr\u1EDF th\xE0nh xe \u0111i\u1EC7n r\u1EBB nh\u1EA5t d\u01B0\u1EDBi 400 tri\u1EC7u \u0111\u1ED3ng \u0111ang b\xE1n ch\xEDnh h\xE3ng t\u1EA1i Vi\u1EC7t Nam',source:'VnExpress',date:'T5/2025',href:'#'},
    {cat:'launch',catLabel:'Ra m\u1EAFt',title:'Wuling Cloud EV ra m\u1EAFt t\u1EA1i VN \u2014 sedan \u0111i\u1EC7n phong c\xE1ch v\u1EDBi ph\u1EA1m vi 460km, gi\xE1 598 tri\u1EC7u \u0111\u1ED3ng',source:'CafeAuto',date:'T4/2025',href:'#'},
    {cat:'tech',catLabel:'C\xF4ng ngh\u1EC7',title:'SAIC-GM-Wuling c\xF4ng b\u1ED1 m\u1EA1ng l\u01B0\u1EDBi 50 tr\u1EA1m s\u1EA1c nhanh DC t\u1EA1i Vi\u1EC7t Nam cho d\xF2ng xe BingGuo EV',source:'AutoZine',date:'T6/2025',href:'#'},
  ],
};

const CAR_TYPES = [
  {id:'sedan',    label:'Sedan',     svgType:'sedan', color:'#5C5060', img:'https://homepage.momocdn.net/img/sedan-260803142120.png'},
  {id:'suv',      label:'SUV',       svgType:'suv',   color:'#5C5060', img:'https://homepage.momocdn.net/img/suv-260803142121.png'},
  {id:'crossover',label:'Crossover', svgType:'suv',   color:'#5C5060', img:'https://homepage.momocdn.net/img/crossover-260803142108.png'},
  {id:'mpv',      label:'MPV',       svgType:'mpv',   color:'#5C5060', img:'https://homepage.momocdn.net/img/mpv-260803142112.png'},
  {id:'truck',    label:'B\xE1n t\u1EA3i',   svgType:'truck', color:'#5C5060', img:'https://homepage.momocdn.net/img/ban-tai-260803142106.png'},
  {id:'ev',       label:'\xD4 t\xF4 \u0111i\u1EC7n', svgType:'ev',    color:'#2563EB', img:'https://homepage.momocdn.net/img/o-to-dien-260803142116.png'},
];

const SCENARIOS = {
  collision:{name:'Va ch\u1EA1m & Tai n\u1EA1n',badge:'Ti\xEAu chu\u1EA9n',badgeCls:'badge-green',short:'Ph\u1ED5 bi\u1EBFn nh\u1EA5t, chi\u1EBFm 60% v\u1EE5 b\u1ED3i th\u01B0\u1EDDng. D\u1EEBng xe, ch\u1EE5p \u1EA3nh, g\u1ECDi CA.',icon:'Zap'},
  thuykick:{name:'Th\u1EE7y k\xEDch',badge:'M\u1EDF r\u1ED9ng th\xEAm',badgeCls:'badge-amber',short:'KH\xD4NG \u0111\u1EC1 m\xE1y l\u1EA1i sau ng\u1EADp n\u01B0\u1EDBc. Chi ph\xED s\u1EEDa 40-120tr. C\u1EA7n th\xEAm +2tr/n\u0103m.',icon:'Droplets'},
  parked:{name:'Xe \u0111\u1ED7 b\u1ECB va ch\u1EA1m',badge:'Ti\xEAu chu\u1EA9n',badgeCls:'badge-green',short:'Kh\xF4ng c\u1EA7n t\xECm \u0111\u01B0\u1EE3c xe g\xE2y thi\u1EC7t h\u1EA1i. BH c\u1EE7a ch\xEDnh b\u1EA1n chi tr\u1EA3 sau kh\u1EA5u tr\u1EEB.',icon:'SquareParking'},
  glass:{name:'V\u1EE1 k\xEDnh',badge:'Ti\xEAu chu\u1EA9n',badgeCls:'badge-green',short:'\u0110\xE1 v\u0103ng, v\u1EE1 do nhi\u1EC7t. Kh\xF4ng c\u1EA7n bi\xEAn b\u1EA3n CA. X\u1EED l\xFD qua app nhi\u1EC1u NB.',icon:'AppWindow'},
  theft:{name:'M\u1EA5t c\u1EAFp to\xE0n b\u1ED9 xe',badge:'Ti\xEAu chu\u1EA9n',badgeCls:'badge-green',short:'Tr\xECnh b\xE1o CA trong 24h. Ch\u1EDD 30 ng\xE0y. B\u1ED3i th\u01B0\u1EDDng gi\xE1 tr\u1ECB th\u1EF1c t\u1EBF tr\u1EEB kh\u1EA5u hao.',icon:'KeyRound'},
  parttheft:{name:'M\u1EA5t c\u1EAFp b\u1ED9 ph\u1EADn',badge:'M\u1EDF r\u1ED9ng th\xEAm',badgeCls:'badge-amber',short:'B\xE1nh xe, camera, \u0111\u1EA7u m\xE0n h\xECnh. C\u1EA7n quy\u1EC1n l\u1EE3i th\xEAm +600-900K/n\u0103m.',icon:'Wrench'},
  fire:{name:'Ch\xE1y xe',badge:'Ti\xEAu chu\u1EA9n',badgeCls:'badge-green',short:'Tho\xE1t ra ngay, g\u1ECDi 114. \u0110\u1EE9ng c\xE1ch xa 30m. B\u1EA3o hi\u1EC3m b\u1ED3i th\u01B0\u1EDDng theo thi\u1EC7t h\u1EA1i th\u1EF1c t\u1EBF.',icon:'Flame'},
  natural:{name:'Thi\xEAn tai',badge:'M\u1EDF r\u1ED9ng th\xEAm',badgeCls:'badge-amber',short:'C\xE2y \u0111\u1ED5 th\u01B0\u1EDDng \u0111\u01B0\u1EE3c x\u1EED l\xFD trong ph\u1EA1m vi ti\xEAu chu\u1EA9n. Ng\u1EADp l\u1EE5t th\xE2n v\u1ECF v\xE0 th\u1EE7y k\xEDch c\u1EA7n ph\u1EA1m vi ri\xEAng.',icon:'Waves'},
};

/* \u2500\u2500 HELPERS \u2500\u2500 */
const fmt = n => n >= 1000 ? (n/1000).toFixed(n%1000===0?0:1)+'tr' : n+'K';
const fmtM = n => n === 0 ? 'Mi\u1EC5n ph\xED' : fmt(n) + '/th\xE1ng';

function carSVG(type, color) {
  const c = color; const op1 = '0.18'; const op2 = '0.32'; const op3 = '0.55';
  if (type === 'sedan' || type === 'coupe') {
    return \\\`<svg viewBox="0 0 200 72" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-height:72px">
      <path d="M8,56 L8,40 Q12,22 38,18 L62,11 L138,11 L162,18 Q186,24 192,40 L192,56 Z" fill="\\\${c}" opacity="\\\${op1}"/>
      <path d="M62,11 L75,4 L125,4 L138,11 Z" fill="\\\${c}" opacity="\\\${op2}"/>
      <rect x="18" y="42" width="164" height="4" rx="2" fill="\\\${c}" opacity="0.1"/>
      <circle cx="48" cy="56" r="14" fill="\\\${c}" opacity="\\\${op2}"/><circle cx="48" cy="56" r="8" fill="white" opacity="0.75"/>
      <circle cx="152" cy="56" r="14" fill="\\\${c}" opacity="\\\${op2}"/><circle cx="152" cy="56" r="8" fill="white" opacity="0.75"/>
    </svg>\\\`;
  }
  if (type === 'truck') {
    return \\\`<svg viewBox="0 0 200 72" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-height:72px">
      <rect x="8" y="24" width="80" height="34" rx="4" fill="\\\${c}" opacity="\\\${op2}"/>
      <rect x="88" y="34" width="104" height="24" rx="2" fill="\\\${c}" opacity="\\\${op1}"/>
      <path d="M88,34 L88,58 L192,58 L192,34 Z" fill="\\\${c}" opacity="\\\${op1}"/>
      <rect x="8" y="14" width="80" height="12" rx="3" fill="\\\${c}" opacity="\\\${op3}"/>
      <circle cx="38" cy="60" r="12" fill="\\\${c}" opacity="\\\${op2}"/><circle cx="38" cy="60" r="7" fill="white" opacity="0.75"/>
      <circle cx="162" cy="60" r="12" fill="\\\${c}" opacity="\\\${op2}"/><circle cx="162" cy="60" r="7" fill="white" opacity="0.75"/>
    </svg>\\\`;
  }
  if (type === 'mpv') {
    return \\\`<svg viewBox="0 0 200 72" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-height:72px">
      <path d="M8,58 L8,34 Q10,12 38,10 L162,10 Q188,12 192,34 L192,58 Z" fill="\\\${c}" opacity="\\\${op1}"/>
      <path d="M38,10 L42,4 L158,4 L162,10 Z" fill="\\\${c}" opacity="\\\${op2}"/>
      <rect x="18" y="10" width="164" height="3" rx="1.5" fill="\\\${c}" opacity="0.12"/>
      <circle cx="48" cy="58" r="13" fill="\\\${c}" opacity="\\\${op2}"/><circle cx="48" cy="58" r="7" fill="white" opacity="0.75"/>
      <circle cx="152" cy="58" r="13" fill="\\\${c}" opacity="\\\${op2}"/><circle cx="152" cy="58" r="7" fill="white" opacity="0.75"/>
    </svg>\\\`;
  }
  if (type === 'ev') {
    return \\\`<svg viewBox="0 0 200 72" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-height:72px">
      <path d="M8,56 L8,36 Q14,14 42,12 L158,12 Q184,14 192,36 L192,56 Z" fill="\\\${c}" opacity="\\\${op1}"/>
      <path d="M42,12 L50,5 L150,5 L158,12 Z" fill="\\\${c}" opacity="\\\${op2}"/>
      <path d="M86,26 L94,14 L106,14 L98,26 L110,26 L88,46 L94,32 L82,32 Z" fill="\\\${c}" opacity="0.45"/>
      <circle cx="48" cy="56" r="13" fill="\\\${c}" opacity="\\\${op2}"/><circle cx="48" cy="56" r="7" fill="white" opacity="0.75"/>
      <circle cx="152" cy="56" r="13" fill="\\\${c}" opacity="\\\${op2}"/><circle cx="152" cy="56" r="7" fill="white" opacity="0.75"/>
    </svg>\\\`;
  }
  // suv (default)
  return \\\`<svg viewBox="0 0 200 72" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-height:72px">
    <path d="M8,58 L8,38 Q14,18 40,14 L160,14 Q184,18 192,38 L192,58 Z" fill="\\\${c}" opacity="\\\${op1}"/>
    <path d="M40,14 L46,6 L154,6 L160,14 Z" fill="\\\${c}" opacity="\\\${op2}"/>
    <rect x="46" y="20" width="108" height="20" rx="3" fill="\\\${c}" opacity="0.08"/>
    <circle cx="48" cy="58" r="13" fill="\\\${c}" opacity="\\\${op2}"/><circle cx="48" cy="58" r="7" fill="white" opacity="0.75"/>
    <circle cx="152" cy="58" r="13" fill="\\\${c}" opacity="\\\${op2}"/><circle cx="152" cy="58" r="7" fill="white" opacity="0.75"/>
  </svg>\\\`;
}

function brandMark(id, w=56, h=56, r=14, fs=17) {
  const b = BRANDS[id];
  const abbr = {toyota:'TOY',honda:'HON',hyundai:'HYN',kia:'KIA',mazda:'MZD',ford:'FOR',mitsubishi:'MIT',vinfast:'VF',mercedes:'MBZ',bmw:'BMW'}[id]||id.slice(0,3).toUpperCase();
  return \\\`<div class="brand-mark" style="width:\\\${w}px;height:\\\${h}px;border-radius:\\\${r}px;background:\\\${b.color};font-size:\\\${fs}px">\\\${abbr}</div>\\\`;
}

function fuelTag(f) {
  const map = {x\u0103ng:'tag-petrol',hybrid:'tag-hybrid',\u0111i\u1EC7n:'tag-electric'};
  const icon = {x\u0103ng:'Fuel',hybrid:'BatteryCharging',\u0111i\u1EC7n:'Zap'}[f]||'';
  return \\\`<span class="tag \\\${map[f]||'tag-petrol'}">\\\${icon?licon(icon,12,2.2):''} \\\${f}</span>\\\`;
}

const TYPE_LABELS = {
  sedan: 'Sedan',
  suv: 'SUV',
  crossover: 'Crossover',
  mpv: 'MPV',
  truck: 'B\xE1n t\u1EA3i',
  ev: 'EV',
};

function modelTypeLabel(m) {
  return TYPE_LABELS[m.type || 'suv'] || 'Xe';
}

function brandTypeSummary(b) {
  const types = [...new Set(b.models.map(modelTypeLabel))];
  const fuels = [];
  if (b.fuels.includes('hybrid')) fuels.push('Hybrid');
  if (b.fuels.includes('\u0111i\u1EC7n') && b.fuels.length === 1) fuels.push('EV');
  return [...types.slice(0, 2), ...fuels].join(' \xB7 ');
}

const INSURER_LOGOS = {
  'Liberty Insurance': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Liberty_Mutual_Logo.svg/160px-Liberty_Mutual_Logo.svg.png',
  'PVI Insurance': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/PVI_Holdings_logo.svg/160px-PVI_Holdings_logo.svg.png',
  'B\u1EA3o Vi\u1EC7t': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bao_Viet_Holdings_logo.svg/160px-Bao_Viet_Holdings_logo.svg.png',
  'MIC Insurance': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/MIC_logo.svg/160px-MIC_logo.svg.png',
  'PJICO': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/PJICO_logo.svg/160px-PJICO_logo.svg.png',
  'PTI Insurance': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/PTI_logo.svg/160px-PTI_logo.svg.png',
  'GIC Insurance': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/GIC_logo.svg/160px-GIC_logo.svg.png',
  'DBY Insurance': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/DBY_logo.svg/160px-DBY_logo.svg.png',
};

function insurerLogoHtml(name) {
  const src = INSURER_LOGOS[name];
  const short = name.replace(/ Insurance$/, '').replace(/[^A-Z0-9\u0110\u0102\xC2\xCA\xD4\u01A0\u01AF]/gi, '').slice(0, 4).toUpperCase() || name.slice(0, 3).toUpperCase();
  if (src) {
    return \\\`<div class="ins-logo"><img src="\\\${src}" alt="\\\${name}" onerror="this.outerHTML='<div class=&quot;ins-logo-fallback&quot;>\\\${short}</div>'"></div>\\\`;
  }
  return \\\`<div class="ins-logo"><div class="ins-logo-fallback">\\\${short}</div></div>\\\`;
}

let selectedModel = {};

/* \u2500\u2500 RENDER LISTING \u2500\u2500 */
function renderListing() {
  document.getElementById('page-title').textContent = 'H\xE3ng Xe - Ti\u1EC7n \xCDch Giao Th\xF4ng MoMo';
  let currentFilter = 'all';

  function brandCardHTML(id) {
    const b = BRANDS[id];
    const topType = b.models[0].type;
    return \\\`<a class="brand-card" href="/tien-ich-giao-thong/hang-xe/\\\${id}">
      <div class="brand-card-visual" style="background:linear-gradient(140deg,\\\${b.color}18 0%,\\\${b.color}08 60%,transparent 100%)">
        <div class="brand-card-car-bg">\\\${carSVG(topType, b.color)}</div>
        <div class="brand-card-mark-wrap">\\\${brandMark(id,44,44,11,14)}</div>
      </div>
      <div class="brand-card-body">
        <div class="brand-card-name">\\\${b.name}</div>
        <div class="brand-card-origin">\\\${b.origin}</div>
        <div class="brand-card-bottom">
          <span class="brand-card-top-model">Model <strong>\\\${b.models[0].name}</strong></span>
          <div class="brand-card-arrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </div>
        </div>
      </div>
    </a>\\\`;
  }

  function cards(filter) {
    return BRAND_LIST.filter(id => {
      const b = BRANDS[id];
      if (filter === 'popular') return b.popular;
      if (filter === 'electric') return b.fuels.includes('\u0111i\u1EC7n');
      if (filter === 'luxury') return !b.popular;
      return true;
    }).map(brandCardHTML).join('');
  }

  document.getElementById('app').innerHTML = \\\`
    <div class="listing-hero">
      <div class="wrap">
        <div class="veh-tabs">
          <span class="veh-tab active">\u{1F697} \xD4 t\xF4</span>
          <a class="veh-tab" href="/tien-ich-giao-thong/hang-xe-may"><i data-lucide="bike" width="14" height="14"></i> Xe m\xE1y</a>
        </div>
        <h1 class="listing-title">D\u1ECBch v\u1EE5 MoMo cho <em>h\xE3ng xe c\u1EE7a b\u1EA1n</em></h1>
        <p class="listing-desc">Ch\u1ECDn h\xE3ng xe \u0111\u1EC3 xem model ch\u1EE7 l\u1EF1c, lo\u1EA1i xe, v\xE0 chi ph\xED s\u1EED d\u1EE5ng theo t\u1EEBng d\xF2ng xe.</p>
      </div>
    </div>
    <div class="wrap">
      <div class="type-section">
        <div class="type-section-title">Lo\u1EA1i xe</div>
        <div class="type-grid">
          \\\${CAR_TYPES.map(t=>\\\`
            <button class="type-card" onclick="filterByType('\\\${t.id}',this)">
              <div class="type-card-svg">\\\${t.img ? \\\`<img src="\\\${t.img}" alt="\\\${t.label}" style="width:100%;height:100%;object-fit:contain">\\\` : carSVG(t.svgType, t.color)}</div>
              <div class="type-card-label">\\\${t.label}</div>
            </button>\\\`).join('')}
        </div>
      </div>
      <div class="brand-grid" id="brand-grid">\\\${cards('all')}</div>
    </div>\\\`;
}

window.applyFilter = function(f, btn) {
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  document.querySelectorAll('.type-card').forEach(c=>c.classList.remove('on'));
  const list = BRAND_LIST.filter(id => {
    const b = BRANDS[id];
    if (f==='popular') return b.popular;
    if (f==='electric') return b.fuels.includes('\u0111i\u1EC7n');
    if (f==='luxury') return !b.popular;
    return true;
  });
  document.getElementById('brand-grid').innerHTML = list.map(brandCardHTML).join('') || '<div class="empty"><p>Kh\xF4ng t\xECm th\u1EA5y h\xE3ng xe ph\xF9 h\u1EE3p</p></div>';
};

window.filterByType = function(typeId, btn) {
  document.querySelectorAll('.type-card').forEach(c=>c.classList.remove('on'));
  btn.classList.add('on');
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('on'));
  // Map type id -> model types to match
  const typeMap = {sedan:['sedan','coupe'],suv:['suv'],crossover:['suv'],mpv:['mpv'],truck:['truck'],ev:['ev']};
  const matchTypes = typeMap[typeId]||[typeId];
  const list = BRAND_LIST.filter(id => BRANDS[id].models.some(m=>(m.type||'suv')===matchTypes[0]||matchTypes.includes(m.type||'suv')));
  const topModelFn = id => BRANDS[id].models.find(m=>matchTypes.includes(m.type||'suv'))||BRANDS[id].models[0];
  document.getElementById('brand-grid').innerHTML = list.map(id => {
    const b = BRANDS[id];
    const topModel = topModelFn(id);
    return \\\`<a class="brand-card" href="/tien-ich-giao-thong/hang-xe/\\\${id}">
      <div class="brand-card-visual" style="background:linear-gradient(140deg,\\\${b.color}18 0%,\\\${b.color}08 60%,transparent 100%)">
        <div class="brand-card-car-bg">\\\${carSVG(topModel.type||'suv', b.color)}</div>
        <div class="brand-card-mark-wrap">\\\${brandMark(id,44,44,11,14)}</div>
      </div>
      <div class="brand-card-body">
        <div class="brand-card-name">\\\${b.name}</div>
        <div class="brand-card-origin">\\\${b.origin}</div>
        <div class="brand-card-bottom">
          <span class="brand-card-top-model">Model <strong>\\\${topModel.name}</strong></span>
          <div class="brand-card-arrow"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
        </div>
      </div>
    </a>\\\`;
  }).join('') || '<div class="empty"><p>Kh\xF4ng t\xECm th\u1EA5y h\xE3ng xe c\xF3 lo\u1EA1i xe n\xE0y</p></div>';
};

window.doCompare = function(idA, idB) {
  if (!idB) { document.getElementById('compare-result').innerHTML = '<div class="compare-placeholder">\u2190 Ch\u1ECDn m\u1ED9t h\xE3ng xe \u0111\u1EC3 xem b\u1EA3ng so s\xE1nh</div>'; return; }
  const a = BRANDS[idA], bx = BRANDS[idB];
  const sm = s => { const o={}; (s||[]).forEach(x=>o[x.label]=x.val); return o; };
  const sa = sm(a.scores), sb = sm(bx.scores);
  const aM = a.insight?.monthly||0, bM = bx.insight?.monthly||0;
  const aG = a.garages?.length||0, bG = bx.garages?.length||0;
  const fmtM = v => v ? \\\`\\\${(v/1000).toFixed(1).replace('.',',')}tr/th\xE1ng\\\` : 'N/A';
  const rows = [
    { label:'Th\u1EF1c chi/th\xE1ng', a:fmtM(aM), b:fmtM(bM), win: aM&&bM ? (aM<bM?'a':aM>bM?'b':'') : '' },
    { label:'Gi\u1EEF gi\xE1',        a:sa['Gi\u1EEF gi\xE1']||'\u2014',     b:sb['Gi\u1EEF gi\xE1']||'\u2014',     win:'' },
    { label:'B\u1EA3o d\u01B0\u1EE1ng',      a:sa['B\u1EA3o d\u01B0\u1EE1ng']||'\u2014',   b:sb['B\u1EA3o d\u01B0\u1EE1ng']||'\u2014',   win:'' },
    { label:'Ph\u1EE5 t\xF9ng',       a:sa['Ph\u1EE5 t\xF9ng']||'\u2014',    b:sb['Ph\u1EE5 t\xF9ng']||'\u2014',    win:'' },
    { label:'Garage VN',      a:\\\`\\\${aG} \u0111i\u1EC3m\\\`,            b:\\\`\\\${bG} \u0111i\u1EC3m\\\`,            win:aG>bG?'a':aG<bG?'b':'' },
    { label:'S\u1ED1 model',       a:\\\`\\\${a.models.length} model\\\`, b:\\\`\\\${bx.models.length} model\\\`, win:a.models.length>bx.models.length?'a':a.models.length<bx.models.length?'b':'' },
    { label:'Nhi\xEAn li\u1EC7u',     a:a.fuels.join(', '),      b:bx.fuels.join(', '),     win:'' },
    { label:'Xu\u1EA5t x\u1EE9',        a:a.origin,                b:bx.origin,               win:'' },
  ];
  document.getElementById('compare-result').innerHTML = \\\`
    <div class="compare-body">
      <div class="compare-col-heads">
        <div class="compare-col-head"></div>
        <div class="compare-col-head">\\\${a.name}</div>
        <div class="compare-col-head">\\\${bx.name}</div>
      </div>
      \\\${rows.map(r=>\\\`<div class="compare-row">
        <div class="compare-row-label">\\\${r.label}</div>
        <div class="compare-cell\\\${r.win==='a'?' win':''}">\\\${r.a}</div>
        <div class="compare-cell\\\${r.win==='b'?' win':''}">\\\${r.b}</div>
      </div>\\\`).join('')}
    </div>\\\`;
};

function getCityLabel(city) {
  const map = {
    'HCM': 'TP.HCM',
    'HN': 'H\xE0 N\u1ED9i',
    'DN': '\u0110\xE0 N\u1EB5ng',
    'BD': 'B\xECnh D\u01B0\u01A1ng',
    'HP': 'H\u1EA3i Ph\xF2ng',
    'CT': 'C\u1EA7n Th\u01A1'
  };
  return map[city] || city;
}

function renderPriceTable(b) {
  const fmtP = v => {
    if (v >= 1000) {
      const t = v / 1000;
      return (Number.isInteger(t) ? t : t.toFixed(3).replace(/\\\\.?0+$/, '')) + ' t\u1EF7';
    }
    return v + ' tri\u1EC7u';
  };
  const fuelBadge = fuels => {
    const f = fuels || [];
    if (f.includes('ev')) return '<span class="pt-badge ev">\u0110i\u1EC7n</span>';
    if (f.includes('phev')) return '<span class="pt-badge phev">PHEV</span>';
    if (f.includes('hybrid')) return '<span class="pt-badge hybrid">Hybrid</span>';
    if (f.includes('diesel') || f.includes('dau')) return '<span class="pt-badge dau">D\u1EA7u</span>';
    return '<span class="pt-badge xang">X\u0103ng</span>';
  };
  const typeFuelOf = m => {
    // EV type is always electric
    if (m.type === 'ev') return '<span class="pt-badge ev">\u0110i\u1EC7n</span>';
    // Use first variant fuel if available \u2014 most accurate
    if (m.variants && m.variants.length) {
      const fuels = [...new Set(m.variants.map(v => v.fuel || ''))];
      const hasEV = fuels.some(f => f === '\u0110i\u1EC7n');
      const hasGas = fuels.some(f => f.includes('X\u0103ng'));
      const hasDiesel = fuels.some(f => f.includes('D\u1EA7u') || f.includes('diesel'));
      const hasHybrid = fuels.some(f => f.includes('\u0110i\u1EC7n') && f.includes('X\u0103ng'));
      if (hasHybrid) return '<span class="pt-badge hybrid">Hybrid</span>';
      if (hasEV && hasGas) return '<span class="pt-badge phev">PHEV</span>';
      if (hasEV) return '<span class="pt-badge ev">\u0110i\u1EC7n</span>';
      if (hasDiesel) return '<span class="pt-badge dau">D\u1EA7u</span>';
      return '<span class="pt-badge xang">X\u0103ng</span>';
    }
    // Fallback: infer from desc or brand fuels
    const desc = (m.desc || '').toLowerCase();
    if (desc.includes('diesel') || desc.includes('d\u1EA7u')) return '<span class="pt-badge dau">D\u1EA7u</span>';
    if (desc.includes('phev')) return '<span class="pt-badge phev">PHEV</span>';
    if (desc.includes('hybrid') || desc.includes('\u0111i\u1EC7n')) return '<span class="pt-badge hybrid">Hybrid</span>';
    const fs = b.fuels || [];
    if (fs.includes('phev')) return '<span class="pt-badge phev">PHEV</span>';
    if (fs.includes('hybrid')) return '<span class="pt-badge hybrid">Hybrid</span>';
    if (fs.includes('diesel')) return '<span class="pt-badge dau">D\u1EA7u</span>';
    return '<span class="pt-badge xang">X\u0103ng</span>';
  };
  const rows = b.models.map(m => {
    const from = m.priceFrom || (m.variants ? m.variants[0].price : null);
    const to = m.priceTo || (m.variants ? m.variants[m.variants.length-1].price : null);
    const samePrice = !to || from === to;
    const priceCell = from
      ? \\\`<div class="pt-price-from">\\\${fmtP(from)}</div>\\\${!samePrice ? \\\`<div class="pt-price-to">\u0111\u1EBFn \\\${fmtP(to)}</div>\\\` : ''}\\\`
      : '<div class="pt-price-from" style="color:var(--gray-400)">Li\xEAn h\u1EC7</div>';
    const href = m.slug ? \\\`/tien-ich-giao-thong/hang-xe/\\\${Object.keys(BRANDS).find(k=>BRANDS[k]===b)}/\\\${m.slug}\\\` : null;
    return \\\`<tr>
      <td><div class="pt-model"><div class="pt-model-name">\\\${m.name}</div><div class="pt-model-desc">\\\${m.desc}</div></div></td>
      <td>\\\${typeFuelOf(m)}</td>
      <td><div class="pt-price">\\\${priceCell}</div></td>
      <td class="pt-action">\\\${href ? \\\`<a href="\\\${href}">\\\${licon('ChevronRight',15,2.5)}</a>\\\` : ''}</td>
    </tr>\\\`;
  }).join('');
  return \\\`
    <div style="overflow-x:auto">
      <table class="price-table">
        <thead><tr>
          <th>D\xF2ng xe</th>
          <th>Nhi\xEAn li\u1EC7u</th>
          <th style="text-align:right">Gi\xE1 ni\xEAm y\u1EBFt 2026</th>
          <th></th>
        </tr></thead>
        <tbody>\\\${rows}</tbody>
      </table>
    </div>
    <div class="price-note">* Gi\xE1 tham kh\u1EA3o \xB7 Ch\u01B0a bao g\u1ED3m ph\xED tr\u01B0\u1EDBc b\u1EA1, \u0111\u0103ng k\xFD \xB7 C\u1EADp nh\u1EADt \\\${new Date().toLocaleDateString('vi',{month:'long',year:'numeric'})}</div>\\\`;
}

function renderGarages(b, id) {
  if (!b.garages || !b.garages.length) return '';
  
  // Count garages per city dynamically
  const counts = { all: b.garages.length, HCM: 0, HN: 0, DN: 0, BD: 0, HP: 0, CT: 0 };
  b.garages.forEach(g => {
    if (counts[g.city] !== undefined) counts[g.city]++;
  });

  const cityButtons = Object.entries(counts)
    .filter(([city, count]) => count > 0)
    .map(([city, count]) => {
      const label = city === 'all' ? 'T\u1EA5t c\u1EA3' : getCityLabel(city);
      const activeCls = city === 'all' ? ' on' : '';
      return \\\`<button class="garage-filter-btn\\\${activeCls}" data-city="\\\${city}" onclick="filterGarage('\\\${city}','\\\${id}',this)">\\\${label} (\\\${count})</button>\\\`;
    }).join('');

  return \\\`
    <div class="garage-split">
      <div class="garage-list-col">
        <div class="garage-list-header">
          <div class="garage-list-title">\\\${b.garages.length} garage \xB7 X\u1EBFp h\u1EA1ng theo MoMo</div>
          <div class="garage-search-box">
            <span class="garage-search-icon">\\\${licon('Search',14,2)}</span>
            <input type="text" placeholder="T\xEAn, \u0111\u1ECBa ch\u1EC9, t\u1EC9nh th\xE0nh..." oninput="searchGarage('\\\${id}', this.value)" class="garage-search-input" id="gsearch-\\\${id}">
          </div>
        </div>
        <div class="garage-filter" id="gf-\\\${id}">
          \\\${cityButtons}
        </div>
        <div class="garage-grid" id="garage-grid-\\\${id}">
          \\\${renderGarageCards(b.garages, id)}
        </div>
      </div>
      <div class="garage-map-col">
        <div id="gmap-inline-\\\${id}" class="garage-map-el"></div>
      </div>
    </div>\\\`;
}

function renderGarageCards(list, id) {
  if (!list || !list.length) {
    return \\\`<div class="garage-empty"><p>Kh\xF4ng t\xECm th\u1EA5y garage ph\xF9 h\u1EE3p.</p></div>\\\`;
  }
  return list.map((g, idx) => {
    return \\\`
    <div class="garage-card" data-idx="\\\${idx}" onclick="focusGaragePin(\\\${idx},'\\\${id}')">
      <div class="garage-icon" style="background:var(--pink-50);color:var(--pink-500)">\\\${licon('Wrench',20,2)}</div>
      <div class="garage-body">
        <div class="garage-body-top">
          <div class="garage-name">\\\${g.name}</div>
          <span class="garage-rating">\u2605 \\\${g.rating}</span>
        </div>
        <div class="garage-meta">
          <span class="garage-city"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> \\\${getCityLabel(g.city)}</span>
        </div>
        <div class="garage-address">\\\${g.address}</div>
        <div class="garage-card-footer">
          <div class="garage-bh-row">
            <span class="garage-bh-label">BH:</span>
            \\\${g.bh.map(name => \\\`<span class="garage-bh-tag">\\\${name}</span>\\\`).join('')}
          </div>
          <button class="garage-book-btn" data-name="\\\${g.name}" data-city="\\\${g.city}" data-address="\\\${g.address}" onclick="event.stopPropagation();openBookingModal(this.dataset.name,this.dataset.city,this.dataset.address)">\u0110\u1EB7t l\u1ECBch</button>
        </div>
      </div>
    </div>\\\`;
  }).join('');
}

window.filterGarage = function(city, id, btn) {
  document.querySelectorAll(\\\`#gf-\\\${id} .garage-filter-btn\\\`).forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  
  // Re-trigger search to combine city filter and search text input
  const searchVal = document.getElementById(\\\`gsearch-\\\${id}\\\`).value;
  searchGarage(id, searchVal);
};

window.searchGarage = function(id, query) {
  const b = BRANDS[id];
  const activeBtn = document.querySelector(\\\`#gf-\\\${id} .garage-filter-btn.on\\\`);
  const city = activeBtn ? activeBtn.getAttribute('data-city') : 'all';
  
  const q = query.toLowerCase().trim();
  const list = b.garages.filter(g => {
    // City filter
    if (city !== 'all' && g.city !== city) return false;
    
    // Search query filter
    if (!q) return true;
    const cityLabel = getCityLabel(g.city).toLowerCase();
    return g.name.toLowerCase().includes(q) || 
           g.address.toLowerCase().includes(q) || 
           cityLabel.includes(q);
  });
  
  document.getElementById(\\\`garage-grid-\\\${id}\\\`).innerHTML = renderGarageCards(list, id);
  updateGarageMapPins(list, id);
};

/* \u2500\u2500 INLINE GARAGE MAP \u2500\u2500 */
const _CITY_BASE = {HCM:[10.7769,106.7009],HN:[21.0285,105.8542],DN:[16.0471,108.2062],BD:[10.9804,106.6519],HP:[20.8449,106.6881],CT:[10.0341,105.7796]};
const _gMaps = {};

function initGarageMap(garages, id) {
  const el = document.getElementById('gmap-inline-'+id);
  if (!el || !garages?.length || typeof maplibregl==='undefined') return;
  if (_gMaps[id]) { try{_gMaps[id].map.remove()}catch(e){} }

  // Spread positions per city in a circle
  const cityCount = {}, cityIdx = {};
  garages.forEach(g => { cityCount[g.city]=(cityCount[g.city]||0)+1; cityIdx[g.city]=0; });
  const positions = garages.map(g => {
    const base = _CITY_BASE[g.city] || [16,106];
    const total = cityCount[g.city], ci = cityIdx[g.city]++;
    if (total === 1) return { lat:base[0], lng:base[1] };
    const angle = (ci/total)*2*Math.PI, r=0.016;
    return { lat:base[0]+r*Math.sin(angle), lng:base[1]+r*Math.cos(angle) };
  });

  const singleCity = new Set(garages.map(g=>g.city)).size===1;
  const allLats=positions.map(p=>p.lat), allLngs=positions.map(p=>p.lng);
  const centerLat=(Math.min(...allLats)+Math.max(...allLats))/2;
  const centerLng=(Math.min(...allLngs)+Math.max(...allLngs))/2;

  const map = new maplibregl.Map({
    container: el,
    style: 'https://demotiles.maplibre.org/style.json',
    center: [centerLng, centerLat],
    zoom: singleCity ? 11 : 5,
  });

  const markers = positions.map((pos, idx) => {
    const pill = document.createElement('div');
    pill.className = 'g-pill';
    pill.textContent = garages[idx].name.split(' ').slice(-2).join(' ');
    pill.addEventListener('click', e => { e.stopPropagation(); focusGaragePin(idx, id); });
    const marker = new maplibregl.Marker({element:pill, anchor:'center'}).setLngLat([pos.lng, pos.lat]).addTo(map);
    return { marker, pos, pill };
  });

  map.on('load', () => {
    if (markers.length > 1) {
      const b0 = new maplibregl.LngLatBounds([markers[0].pos.lng,markers[0].pos.lat],[markers[0].pos.lng,markers[0].pos.lat]);
      const bounds = markers.reduce((b,m)=>b.extend([m.pos.lng,m.pos.lat]), b0);
      map.fitBounds(bounds, {padding:60, maxZoom:13});
    }
  });

  _gMaps[id] = { map, markers, garages, positions };
}

window.focusGaragePin = function(idx, id) {
  document.querySelectorAll(\\\`#garage-grid-\\\${id} .garage-card\\\`).forEach((c,i) => c.classList.toggle('map-active', i===idx));
  const data = _gMaps[id];
  if (!data) return;
  const m = data.markers[idx];
  if (!m) return;
  data.markers.forEach((mk,i) => mk.pill.classList.toggle('active', i===idx));
  data.map.flyTo({center:[m.pos.lng, m.pos.lat], zoom:13, duration:500});
  const g = data.garages[idx];
  data.map.once('moveend', () => {
    new maplibregl.Popup({closeButton:false,offset:16})
      .setLngLat([m.pos.lng, m.pos.lat])
      .setHTML(\\\`<strong>\\\${g.name}</strong><br><span style="color:#6B7280;font-weight:500">\\\${g.address}, \\\${getCityLabel(g.city)}</span>\\\`)
      .addTo(data.map);
  });
};

function updateGarageMapPins(list, id) {
  const data = _gMaps[id];
  if (!data) return;
  const activeIds = new Set(list.map(g => data.garages.indexOf(g)));
  data.markers.forEach((m, i) => {
    m.pinEl.style.opacity = activeIds.has(i) ? '1' : '0.25';
  });
}

/* \u2500\u2500 RENDER INSIGHT PANEL \u2500\u2500 */
function renderInsightPanel(b, id) {
  const ins = b.insight;
  if (!ins) return '';
  const total = ins.monthly;
  const bd = ins.breakdown;
  const maxVal = Math.max(bd.bh, bd.fuel, bd.road, bd.maint);
  const bar = (val, fillColor) => {
    const pct = Math.round((val / maxVal) * 100);
    return \\\`<div class="insight-bar-track"><div class="insight-bar-fill" style="width:\\\${pct}%;background:\\\${fillColor}"></div></div>\\\`;
  };
  const vsSign = ins.vs_estimate > 0 ? '+' : '';
  const vsCls = ins.vs_estimate > 0 ? 'positive' : 'negative';
  const vsLabel = ins.vs_estimate > 0
    ? \\\`Cao h\u01A1n \u01B0\u1EDBc t\xEDnh \\\${vsSign}\\\${ins.vs_estimate}%\\\`
    : \\\`Ti\u1EBFt ki\u1EC7m h\u01A1n \u01B0\u1EDBc t\xEDnh \\\${Math.abs(ins.vs_estimate)}%\\\`;

  return \\\`<div class="insight-panel" id="insight-panel-\\\${id}">
    <div class="insight-header" style="background:var(--mobase-surface)">
      <div class="insight-owners">\\\${ins.owners.toLocaleString('vi')} ch\u1EE7 xe \\\${b.name} tr\xEAn MoMo</div>
    </div>
    <div class="insight-body">
      <div class="insight-main">
        <div class="insight-monthly-label">Th\u1EF1c chi trung b\xECnh / th\xE1ng</div>
        <div class="insight-monthly-val">\\\${(total/1000).toFixed(1).replace('.',',')}tr</div>
        <div class="insight-monthly-unit">\u0111\u1ED3ng / th\xE1ng \xB7 xe \\\${ins.topModel}</div>
        <div class="insight-model-note">G\u1ED3m: d\u1EF1 ph\xF2ng xe, nhi\xEAn li\u1EC7u, \u0111\u01B0\u1EDDng b\u1ED9, b\u1EA3o d\u01B0\u1EE1ng</div>
        <div class="insight-vs \\\${vsCls}">\\\${vsLabel}</div>
      </div>
      <div class="insight-right">
        <div class="insight-city-toggle">
          <button class="city-btn on" onclick="switchCity('hcm','\\\${id}')" id="city-hcm-\\\${id}">HCM</button>
          <button class="city-btn" onclick="switchCity('hn','\\\${id}')" id="city-hn-\\\${id}">H\xE0 N\u1ED9i</button>
        </div>
        <div class="insight-city-val" id="city-val-\\\${id}">\\\${(ins.hcm/1000).toFixed(1).replace('.',',')}tr</div>
        <div class="insight-city-sub" id="city-sub-\\\${id}">TP.HCM \xB7 trung b\xECnh / th\xE1ng</div>
        <div class="insight-breakdown-label">C\u01A1 c\u1EA5u chi ph\xED</div>
        <div class="insight-bars">
          <div class="insight-bar-row">
            <div class="insight-bar-name">D\u1EF1 ph\xF2ng xe</div>
            \\\${bar(bd.bh, 'var(--mobase-ink)')}
            <div class="insight-bar-val">\\\${fmt(bd.bh)}</div>
          </div>
          <div class="insight-bar-row">
            <div class="insight-bar-name">\\\${b.fuels.includes('\u0111i\u1EC7n')&&b.fuels.length===1?'\u0110i\u1EC7n':'Nhi\xEAn li\u1EC7u'}</div>
            \\\${bar(bd.fuel, 'var(--mobase-blue)')}
            <div class="insight-bar-val">\\\${fmt(bd.fuel)}</div>
          </div>
          <div class="insight-bar-row">
            <div class="insight-bar-name">\u0110\u01B0\u1EDDng b\u1ED9 & \u0110K</div>
            \\\${bar(bd.road||1, 'var(--mobase-teal)')}
            <div class="insight-bar-val">\\\${bd.road?fmt(bd.road):'Mi\u1EC5n ph\xED'}</div>
          </div>
          <div class="insight-bar-row">
            <div class="insight-bar-name">B\u1EA3o d\u01B0\u1EE1ng</div>
            \\\${bar(bd.maint, 'var(--gray-500)')}
            <div class="insight-bar-val">\\\${fmt(bd.maint)}</div>
          </div>
          </div>
        </div>
      </div>
    </div>\\\`;
}

window.switchCity = function(city, id) {
  const b = BRANDS[id];
  const ins = b.insight;
  document.querySelectorAll(\\\`#city-hcm-\\\${id}, #city-hn-\\\${id}\\\`).forEach(el=>el.classList.remove('on'));
  document.getElementById(\\\`city-\\\${city}-\\\${id}\\\`).classList.add('on');
  const val = city === 'hcm' ? ins.hcm : ins.hn;
  const label = city === 'hcm' ? 'TP.HCM \xB7 trung b\xECnh / th\xE1ng' : 'H\xE0 N\u1ED9i \xB7 trung b\xECnh / th\xE1ng';
  document.getElementById(\\\`city-val-\\\${id}\\\`).textContent = (val/1000).toFixed(1).replace('.',',') + 'tr';
  document.getElementById(\\\`city-sub-\\\${id}\\\`).textContent = label;
};

function renderBrandStats(b, id) {
  const dealersMap = {
    toyota:'86+ \u0110\u1EA1i l\xFD / 3S', vinfast:'150+ Showroom & S\u1EA1c', hyundai:'72+ \u0110\u1EA1i l\xFD 3S',
    honda:'48+ \u0110\u1EA1i l\xFD 3S', mazda:'55+ Showroom', ford:'42+ \u0110\u1EA1i l\xFD', kia:'65+ Showroom',
    mitsubishi:'52+ \u0110\u1EA1i l\xFD', mercedes:'18+ Center', bmw:'15+ Showroom', audi:'8+ Center',
    lexus:'6+ Center 3S', mg:'35+ Showroom', suzuki:'38+ \u0110\u1EA1i l\xFD', nissan:'28+ \u0110\u1EA1i l\xFD'
  };
  const warrantyMap = {
    vinfast:'10 n\u0103m / 200.000 km', toyota:'5 n\u0103m / 150.000 km', hyundai:'5 n\u0103m / 100.000 km',
    honda:'3 n\u0103m / 100.000 km', mazda:'3 n\u0103m / 100.000 km', ford:'3 n\u0103m / 100.000 km',
    kia:'5 n\u0103m / kh\xF4ng gi\u1EDBi h\u1EA1n', mitsubishi:'3 n\u0103m / 100.000 km', mercedes:'3 n\u0103m / kh\xF4ng gi\u1EDBi h\u1EA1n',
    bmw:'5 n\u0103m / kh\xF4ng gi\u1EDBi h\u1EA1n', volvo:'5 n\u0103m / kh\xF4ng gi\u1EDBi h\u1EA1n'
  };
  const shareMap = {
    toyota:'Top 1 (21.4% th\u1ECB ph\u1EA7n)', vinfast:'Top 1 Xe \u0110i\u1EC7n', hyundai:'Top 2 (18.2% th\u1ECB ph\u1EA7n)',
    kia:'Top 3 (12.5% th\u1ECB ph\u1EA7n)', honda:'Top 4 (9.8% th\u1ECB ph\u1EA7n)', ford:'Top 1 B\xE1n T\u1EA3i & SUV 7 ch\u1ED7',
    mitsubishi:'Top 1 MPV Xpander', mazda:'Top 1 Crossover C-SUV'
  };
  const dealers = dealersMap[id] || (b.origin === 'Nh\u1EADt B\u1EA3n' ? '45+ \u0110\u1EA1i l\xFD 3S' : '30+ Showroom');
  const warranty = warrantyMap[id] || '3 n\u0103m / 100.000 km';
  const share = shareMap[id] || (b.origin + ' \xB7 Ph\u1ED5 bi\u1EBFn');
  const retention = b.models[0]?.valuation?.segAvgRetention3y ? \\\`\\\${b.models[0].valuation.segAvgRetention3y}% sau 3 n\u0103m\\\` : '72% - 82%';

  return \\\`<div class="brand-stats-grid">
    <div class="bstat-card">
      <div class="bstat-icon">\\\${licon('Store',18,2)}</div>
      <div class="bstat-info">
        <div class="bstat-val">\\\${dealers}</div>
        <div class="bstat-lbl">M\u1EA1ng l\u01B0\u1EDBi \u0111\u1EA1i l\xFD ch\xEDnh h\xE3ng</div>
      </div>
    </div>
    <div class="bstat-card">
      <div class="bstat-icon">\\\${licon('ShieldCheck',18,2)}</div>
      <div class="bstat-info">
        <div class="bstat-val">\\\${warranty}</div>
        <div class="bstat-lbl">Ch\xEDnh s\xE1ch b\u1EA3o h\xE0nh</div>
      </div>
    </div>
    <div class="bstat-card">
      <div class="bstat-icon">\\\${licon('TrendingUp',18,2)}</div>
      <div class="bstat-info">
        <div class="bstat-val">\\\${share}</div>
        <div class="bstat-lbl">V\u1ECB th\u1EBF t\u1EA1i th\u1ECB tr\u01B0\u1EDDng VN</div>
      </div>
    </div>
    <div class="bstat-card">
      <div class="bstat-icon">\\\${licon('Coins',18,2)}</div>
      <div class="bstat-info">
        <div class="bstat-val">\\\${retention}</div>
        <div class="bstat-lbl">Ch\u1EC9 s\u1ED1 gi\u1EEF gi\xE1 trung b\xECnh</div>
      </div>
    </div>
  </div>\\\`;
}

function renderMaintenanceSchedule(b) {
  const isEV = b.fuels.includes('\u0111i\u1EC7n') && b.fuels.length === 1;
  if (isEV) {
    return \\\`<div class="maint-sched-grid">
      <div class="maint-sched-card">
        <div class="maint-km-badge">12.000 km / 1 n\u0103m</div>
        <div class="maint-stage-title">B\u1EA3o d\u01B0\u1EE1ng C\u1EA5p 1</div>
        <div class="maint-stage-desc">Ki\u1EC3m tra dung l\u01B0\u1EE3ng Pin, c\u1EADp nh\u1EADt ph\u1EA7n m\u1EC1m ECU, ki\u1EC3m tra h\u1EC7 th\u1ED1ng phanh regen &amp; l\u1ECDc gi\xF3 cabin.</div>
        <div class="maint-stage-price">500.000\u0111 - 900.000\u0111</div>
      </div>
      <div class="maint-sched-card">
        <div class="maint-km-badge">24.000 km / 2 n\u0103m</div>
        <div class="maint-stage-title">B\u1EA3o d\u01B0\u1EE1ng C\u1EA5p 2</div>
        <div class="maint-stage-desc">Thay l\u1ECDc gi\xF3 \u0111i\u1EC1u h\xF2a than ho\u1EA1t t\xEDnh, thay d\u1EA7u phanh, c\xE2n b\u1EB1ng \u0111\u1ED9ng 4 b\xE1nh &amp; \u0111\u1EA3o l\u1ED1p.</div>
        <div class="maint-stage-price">1.200.000\u0111 - 1.800.000\u0111</div>
      </div>
      <div class="maint-sched-card">
        <div class="maint-km-badge">48.000 km / 4 n\u0103m</div>
        <div class="maint-stage-title">B\u1EA3o d\u01B0\u1EE1ng C\u1EA5p 3</div>
        <div class="maint-stage-desc">Thay n\u01B0\u1EDBc l\xE0m m\xE1t pin cao \xE1p (HV battery coolant), ki\u1EC3m tra c\u1ED5ng s\u1EA1c &amp; \u0111\u01B0\u1EDDng d\xE2y \u0111i\u1EC7n 400V.</div>
        <div class="maint-stage-price">2.500.000\u0111 - 4.000.000\u0111</div>
      </div>
      <div class="maint-sched-card">
        <div class="maint-km-badge">96.000 km / 8 n\u0103m</div>
        <div class="maint-stage-title">B\u1EA3o d\u01B0\u1EE1ng \u0110\u1EA1i tu</div>
        <div class="maint-stage-desc">\u0110\xE1nh gi\xE1 s\u1EE9c kh\u1ECFe Pin SOH, thay dung d\u1ECBch l\xE0m m\xE1t \u0111\u1ED9ng c\u01A1 \u0111i\u1EC7n e-Motor &amp; d\u1EA7u c\u1EA7u e-Axle.</div>
        <div class="maint-stage-price">4.500.000\u0111 - 7.000.000\u0111</div>
      </div>
    </div>\\\`;
  }
  return \\\`<div class="maint-sched-grid">
    <div class="maint-sched-card">
      <div class="maint-km-badge">5.000 km / 6 th\xE1ng</div>
      <div class="maint-stage-title">B\u1EA3o d\u01B0\u1EE1ng C\u1EA5p Nh\u1ECF</div>
      <div class="maint-stage-desc">Thay nh\u1EDBt \u0111\u1ED9ng c\u01A1 ch\xEDnh h\xE3ng, v\u1EC7 sinh l\u1ECDc gi\xF3, ki\u1EC3m tra g\u1EA7m, m\u1EE9c n\u01B0\u1EDBc r\u1EEDa k\xEDnh &amp; \xE1p su\u1EA5t l\u1ED1p.</div>
      <div class="maint-stage-price">600.000\u0111 - 1.200.000\u0111</div>
    </div>
    <div class="maint-sched-card">
      <div class="maint-km-badge">10.000 km / 1 n\u0103m</div>
      <div class="maint-stage-title">B\u1EA3o d\u01B0\u1EE1ng C\u1EA5p V\u1EEBa</div>
      <div class="maint-stage-desc">Thay nh\u1EDBt + L\u1ECDc nh\u1EDBt \u0111\u1ED9ng c\u01A1, \u0111\u1EA3o l\u1ED1p xe, b\u1EA3o d\u01B0\u1EE1ng v\u1EC7 sinh 4 phanh &amp; ki\u1EC3m tra h\u1EC7 th\u1ED1ng treo.</div>
      <div class="maint-stage-price">1.200.000\u0111 - 2.200.000\u0111</div>
    </div>
    <div class="maint-sched-card">
      <div class="maint-km-badge">20.000 - 40.000 km</div>
      <div class="maint-stage-title">B\u1EA3o d\u01B0\u1EE1ng C\u1EA5p L\u1EDBn</div>
      <div class="maint-stage-desc">Thay l\u1ECDc gi\xF3 \u0111\u1ED9ng c\u01A1/\u0111i\u1EC1u h\xF2a, d\u1EA7u phanh, n\u01B0\u1EDBc l\xE0m m\xE1t, d\u1EA7u h\u1ED9p s\u1ED1 AT/CVT &amp; l\u1ECDc nhi\xEAn li\u1EC7u.</div>
      <div class="maint-stage-price">3.500.000\u0111 - 7.500.000\u0111</div>
    </div>
    <div class="maint-sched-card">
      <div class="maint-km-badge">80.000 km / 4 n\u0103m</div>
      <div class="maint-stage-title">\u0110\u1EA1i B\u1EA3o D\u01B0\u1EE1ng</div>
      <div class="maint-stage-desc">Thay b\u1ED9 bugi Iridium, d\xE2y curoa t\u1ED5ng, dung d\u1ECBch l\xE0m m\xE1t to\xE0n h\u1EC7 th\u1ED1ng, s\xFAc r\u1EEDa h\u1ECDng h\xFAt &amp; kim phun.</div>
      <div class="maint-stage-price">8.000.000\u0111 - 16.000.000\u0111</div>
    </div>
  </div>\\\`;
}

function renderSparePartsTable(b) {
  const parts = b.models[0]?.spareParts || [
    { name:'L\u1ECDc d\u1EA7u \u0111\u1ED9ng c\u01A1 ch\xEDnh h\xE3ng', interval:'7.500 - 10.000 km', cost:'150.000\u0111 - 350.000\u0111', note:'Khuy\xEAn d\xF9ng h\xE0ng ch\xEDnh h\xE3ng' },
    { name:'L\u1ECDc gi\xF3 \u0111\u1ED9ng c\u01A1', interval:'15.000 - 20.000 km', cost:'250.000\u0111 - 550.000\u0111', note:'Thay s\u1EDBm h\u01A1n n\u1EBFu ch\u1EA1y \u0111\u01B0\u1EDDng b\u1EE5i' },
    { name:'L\u1ECDc gi\xF3 \u0111i\u1EC1u h\xF2a than ho\u1EA1t t\xEDnh', interval:'15.000 km', cost:'200.000\u0111 - 650.000\u0111', note:'Gi\u1EEF kh\xF4ng kh\xED cabin s\u1EA1ch khu\u1EA9n' },
    { name:'M\xE1 phanh tr\u01B0\u1EDBc / sau', interval:'40.000 - 60.000 km', cost:'1.200.000\u0111 - 3.200.000\u0111/c\u1EB7p', note:'Ki\u1EC3m tra \u0111\u1ED9 d\xE0y phanh \u0111\u1ECBnh k\u1EF3' },
    { name:'D\u1EA7u h\u1ED9p s\u1ED1 t\u1EF1 \u0111\u1ED9ng (AT/CVT)', interval:'40.000 - 60.000 km', cost:'900.000\u0111 - 2.500.000\u0111', note:'B\u1EA3o v\u1EC7 b\xE1nh r\u0103ng & l\xE1 c\xF4n' },
    { name:'B\xECnh \u1EAFc quy ch\xEDnh h\xE3ng (12V)', interval:'2 - 3 n\u0103m', cost:'1.600.000\u0111 - 3.800.000\u0111', note:'\u1EAEc quy kh\xF4 mi\u1EC5n b\u1EA3o d\u01B0\u1EE1ng' },
    { name:'G\u1EA1t m\u01B0a Silicon cao c\u1EA5p', interval:'12 th\xE1ng', cost:'350.000\u0111 - 850.000\u0111/c\u1EB7p', note:'G\u1EA1t s\u1EA1ch n\u01B0\u1EDBc, kh\xF4ng \u0111\u1EC3 l\u1EA1i v\u1EC7t' },
  ];

  const rows = parts.map(p => \\\`<tr>
    <td><div class="part-name">\\\${p.name}</div></td>
    <td><span class="part-interval">\\\${p.interval}</span></td>
    <td><span class="part-cost">\\\${p.cost}</span></td>
    <td><span style="font-size:12px;color:var(--gray-500)">\\\${p.note || 'Thay th\u1EBF t\u1EA1i \u0111\u1EA1i l\xFD / garage uy t\xEDn'}</span></td>
  </tr>\\\`).join('');

  return \\\`<div class="parts-table-wrap">
    <table class="parts-table">
      <thead>
        <tr>
          <th>T\xEAn ph\u1EE5 t\xF9ng</th>
          <th>Chu k\u1EF3 thay th\u1EBF</th>
          <th>Chi ph\xED tham kh\u1EA3o</th>
          <th>Ghi ch\xFA s\u1EED d\u1EE5ng</th>
        </tr>
      </thead>
      <tbody>\\\${rows}</tbody>
    </table>
  </div>\\\`;
}

/* \u2500\u2500 RENDER DETAIL \u2500\u2500 */
function renderDetail(id) {
  const b = BRANDS[id];
  if (!b) { renderListing(); return; }
  document.getElementById('page-title').textContent = b.name + ' - H\xE3ng xe tr\xEAn MoMo';

  // Breadcrumb
  const bc = \\\`<div class="breadcrumb-bar"><div class="wrap"><div class="bc-inner">
    <a class="bc-link" href="/tien-ich-giao-thong">Ti\u1EC7n \xCDch Giao Th\xF4ng</a>
    <span class="bc-sep">\u203A</span>
    <a class="bc-link" href="/tien-ich-giao-thong/hang-xe">H\xE3ng xe</a>
    <span class="bc-sep">\u203A</span>
    <span class="bc-current">\\\${b.name}</span>
  </div></div></div>\\\`;

  // Hero
  const hero = \\\`<div class="detail-hero">
    <div class="wrap">
      <div class="detail-hero-inner">
        \\\${brandMark(id,80,80,20,22)}
        <div class="detail-hero-meta">
          <h1 class="detail-title">\\\${b.name}</h1>
          <p class="detail-tagline">\\\${b.tagline}</p>
          <div class="type-pills">
            <span class="type-pill"><strong>Model</strong> \\\${b.models[0].name}</span>
            <span class="type-pill"><strong>Lo\u1EA1i</strong> \\\${brandTypeSummary(b)}</span>
          </div>
          <div class="score-pills">
            \\\${(b.scores||[]).map(s=>\\\`<span class="score-pill \\\${s.level}"><span class="score-pill-label">\\\${s.label}</span><span class="score-pill-val">\\\${s.val}</span></span>\\\`).join('')}
          </div>
          <div class="quick-nav">
            <a class="quick-pill" href="#models">D\xF2ng xe</a>
            <a class="quick-pill" href="#bang-gia">B\u1EA3ng gi\xE1</a>
            <a class="quick-pill" href="#bao-duong-dinh-ky">L\u1ECBch b\u1EA3o d\u01B0\u1EE1ng</a>
            <a class="quick-pill" href="#phu-tung">Ph\u1EE5 t\xF9ng</a>
            <a class="quick-pill" href="#bh">\u0110\u1ED1i t\xE1c</a>
            <a class="quick-pill" href="#chi-phi">Chi ph\xED</a>
            <a class="quick-pill" href="#garage">Garage</a>
            <a class="quick-pill" href="#notes">Ghi ch\xFA</a>
            <a class="quick-pill" href="#so-sanh">So s\xE1nh</a>
            <a class="quick-pill" href="#tin-tuc">Tin t\u1EE9c</a>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>\\\`;

  // Models
  const modelCards = b.models.map((m,i) => {
    const imgBg = \\\`linear-gradient(160deg,\\\${b.color}14 0%,\\\${b.color}06 100%)\\\`;
    const tag = m.slug ? 'a' : 'button';
    const linkAttr = m.slug ? \\\`href="/tien-ich-giao-thong/hang-xe/\\\${id}/\\\${m.slug}"\\\` : \\\`onclick="selectModel(\\\${i},'\\\${id}')"\\\`;
    return \\\`<\\\${tag} class="model-card" \\\${linkAttr} id="mc-\\\${i}">
      <div class="model-img" style="background:\\\${imgBg}">
        \\\${carSVG(m.type||'suv', b.color)}
      </div>
      <div class="model-info">
        <div class="model-name">\\\${m.name}</div>
        <div class="model-meta">
          <span class="model-badge">\\\${modelTypeLabel(m)}</span>
          \\\${m.slug ? '<span class="model-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>' : ''}
        </div>
      </div>
    </\\\${tag}>\\\`;
  }).join('');

  // BH section
  const insRows = b.topInsurers.map(ins => \\\`
    <div class="ins-row">
      <div class="ins-body">
        \\\${insurerLogoHtml(ins.name)}
        <div class="ins-meta">
          <div class="ins-name">\\\${ins.name}</div>
        </div>
      </div>
    </div>\\\`).join('');

  // Year options
  const years = Array.from({length:16},(_,i)=>2025-i).map(y=>\\\`<option value="\\\${y}">\\\${y}</option>\\\`).join('');

  // Model options for quote
  const modelOpts = b.models.map((m,i)=>\\\`<option value="\\\${i}">\\\${m.name}</option>\\\`).join('');

  // Cost tiles for first model
  const firstM = b.models[0];

  // Scenarios
  const SIT_SLUG = { collision:'va-cham-tai-nan', thuykick:'thuy-kich-nuoc-vao-may', fire:'chay-no-xe', theft:'mat-cap-toan-bo-xe', parttheft:'mat-cap-bo-phan', natural:'thien-tai-bao-lu', glass:'vo-kinh', parked:'xe-do-bi-va-xay-xuoc' };
  const scCards = b.scenarios.map(sid => {
    const sc = SCENARIOS[sid];
    if (!sc) return '';
    return \\\`<a class="scenario-card" href="/bao-hiem-o-to/tinh-huong/\\\${SIT_SLUG[sid]||sid}">
      <div class="scenario-icon">\\\${licon(sc.icon,20,2)}</div>
      <div class="scenario-name">\\\${sc.name}</div>
      <div class="scenario-short">\\\${sc.short}</div>
      <div class="scenario-link">Xem chi ti\u1EBFt <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg></div>
    </a>\\\`;
  }).join('');

  // Notes
  const noteHtml = b.notes.map(n => \\\`
    <div class="brand-note">
      <div class="brand-note-q">\\\${n.q}</div>
      <div class="brand-note-a">\\\${n.a}</div>
    </div>\\\`).join('');

  // Model options for cost
  const costModelOpts = b.models.map((m,i)=>\\\`<option value="\\\${i}">\\\${m.name}</option>\\\`).join('');
  const fuelLabel = b.fuels.includes('\u0111i\u1EC7n') ? '\u0110i\u1EC7n (th\xE1ng)' : 'X\u0103ng (th\xE1ng)';

  // Brand desc + services
  const isEV = b.fuels.includes('\u0111i\u1EC7n') && b.fuels.length === 1;
  const services = [
    isEV
      ? {icon:'Zap', name:'Tr\u1EA1m s\u1EA1c \u0111i\u1EC7n', hint:'T\xECm tr\u1EA1m g\u1EA7n nh\u1EA5t', href:'/cay-xang'}
      : {icon:'Fuel', name:'Gi\xE1 x\u0103ng h\xF4m nay', hint:'RON 95, E5, D\u1EA7u', href:'/gia-xang'},
    isEV
      ? null
      : {icon:'Map', name:'T\xECm c\xE2y x\u0103ng', hint:'G\u1EA7n v\u1ECB tr\xED c\u1EE7a b\u1EA1n', href:'/cay-xang'},
    {icon:'Search', name:'\u0110\u0103ng ki\u1EC3m', hint:'L\u1ECBch h\u1EB9n & tra c\u1EE9u', href:'/tien-ich-giao-thong/dang-kiem'},
    {icon:'Route', name:'ePass \xB7 Ph\xED \u0111\u01B0\u1EDDng b\u1ED9', hint:'N\u1EA1p ti\u1EC1n ETC nhanh', href:'/epass'},
    {icon:'SquareParking', name:'B\xE3i \u0111\u1ED7 xe', hint:'Gi\u1EEF ch\u1ED7 tr\u01B0\u1EDBc', href:'/tien-ich-giao-thong/bai-do-xe'},
    {icon:'ClipboardList', name:'Ph\u1EA1t ngu\u1ED9i', hint:'Tra c\u1EE9u bi\u1EC3n s\u1ED1', href:'/phat-nguoi'},
  ].filter(Boolean);

  const descBand = \\\`<div class="brand-desc-band">
    <div class="wrap"><div class="brand-desc-text">\\\${b.desc}</div></div>
  </div>\\\`;

  const brandStatsHtml = \\\`<div class="wrap" style="margin-top:-10px">\\\${renderBrandStats(b, id)}</div>\\\`;

  const svcStrip = \\\`<div class="services-strip" id="dich-vu">
    <div class="wrap">
      <div class="services-label">D\u1ECBch v\u1EE5 cho xe \\\${b.name} tr\xEAn MoMo</div>
      <div class="services-row">
        \\\${services.map(s=>\\\`<a class="svc-card" href="\\\${s.href}">
          <div class="svc-icon">\\\${licon(s.icon,20,2)}</div>
          <div class="svc-body">
            <div class="svc-name">\\\${s.name}</div>
            <div class="svc-hint">\\\${s.hint}</div>
          </div>
        </a>\\\`).join('')}
      </div>
    </div>
  </div>\\\`;

  const dualTab = DUAL_BRANDS.includes(id) ? \\\`
    <div style="background:#fff;border-bottom:1px solid var(--gray-200);padding:0">
      <div class="wrap" style="padding-top:12px;padding-bottom:0">
        <div class="veh-tabs">
          <span class="veh-tab active">\u{1F697} \xD4 t\xF4</span>
          <a class="veh-tab" href="/tien-ich-giao-thong/hang-xe-may/\\\${id}"><i data-lucide="bike" width="14" height="14"></i> Xe m\xE1y</a>
        </div>
      </div>
    </div>\\\` : '';

  document.getElementById('app').innerHTML = bc + dualTab + hero + descBand + brandStatsHtml + svcStrip + \\\`
    <div class="wrap detail-body">

      <!-- MODELS -->
      <div class="d-section" id="models">
        <div class="d-section-head">
          <div class="eyebrow">D\xF2ng xe</div>
          <div class="section-h">D\xF2ng xe \\\${b.name} ph\u1ED5 bi\u1EBFn t\u1EA1i Vi\u1EC7t Nam</div>
          <div class="section-sub">Ch\u1ECDn d\xF2ng xe \u0111\u1EC3 xem lo\u1EA1i xe v\xE0 chi ph\xED s\u1EED d\u1EE5ng c\u1EE5 th\u1EC3</div>
        </div>
        <div class="model-grid">\\\${modelCards}</div>
      </div>

      <!-- B\u1EA2NG GI\xC1 2026 -->
      <div class="d-section" id="bang-gia">
        <div class="d-section-head">
          <div class="eyebrow">B\u1EA3ng gi\xE1</div>
          <div class="section-h">B\u1EA3ng gi\xE1 xe \\\${b.name} 2026</div>
          <div class="section-sub">Gi\xE1 ni\xEAm y\u1EBFt t\u1EEB \u0111\u1EA1i l\xFD ch\xEDnh h\xE3ng t\u1EA1i Vi\u1EC7t Nam \xB7 Ch\u01B0a g\u1ED3m ph\xED tr\u01B0\u1EDBc b\u1EA1</div>
        </div>
        \\\${renderPriceTable(b)}
      </div>

      <!-- L\u1ECACH B\u1EA2O D\u01AF\u1EE0NG \u0110\u1ECANH K\u1EF2 -->
      <div class="d-section" id="bao-duong-dinh-ky">
        <div class="d-section-head">
          <div class="eyebrow">L\u1ECBch b\u1EA3o d\u01B0\u1EE1ng</div>
          <div class="section-h">L\u1ECBch b\u1EA3o d\u01B0\u1EE1ng \u0111\u1ECBnh k\u1EF3 xe \\\${b.name}</div>
          <div class="section-sub">Khuy\u1EBFn c\xE1o t\u1EEB nh\xE0 s\u1EA3n xu\u1EA5t & m\u1ED1c ki\u1EC3m tra \u0111\u1ECBnh k\u1EF3 thi\u1EBFt y\u1EBFu</div>
        </div>
        \\\${renderMaintenanceSchedule(b)}
      </div>

      <!-- PH\u1EE4 T\xD9NG TI\xCAU HOA -->
      <div class="d-section" id="phu-tung">
        <div class="d-section-head">
          <div class="eyebrow">Ph\u1EE5 t\xF9ng ch\xEDnh h\xE3ng</div>
          <div class="section-h">B\u1EA3ng gi\xE1 ph\u1EE5 t\xF9ng ti\xEAu hao xe \\\${b.name}</div>
          <div class="section-sub">Gi\xE1 tham kh\u1EA3o linh ki\u1EC7n thay th\u1EBF \u0111\u1ECBnh k\u1EF3 gi\xFAp b\u1EA1n ch\u1EE7 \u0111\u1ED9ng ng\xE2n s\xE1ch</div>
        </div>
        \\\${renderSparePartsTable(b)}
      </div>

      <!-- \u0110\u1ED0I T\xC1C -->
      <div class="d-section" id="bh">
        <div class="d-section-head">
          <div class="eyebrow">\u0110\u1ED1i t\xE1c</div>
          <div class="section-h">\u0110\u01A1n v\u1ECB h\u1ED7 tr\u1EE3 cho xe \\\${b.name}</div>
          <div class="section-sub">Tham kh\u1EA3o theo m\u1EA1ng l\u01B0\u1EDBi garage v\xE0 t\u1ED1c \u0111\u1ED9 x\u1EED l\xFD</div>
        </div>
        <div class="bh-cols">
          <div class="bh-card">
            <div class="eyebrow" style="margin-bottom:14px">Khung tham chi\u1EBFu</div>
            <label class="form-lbl">D\xF2ng xe</label>
            <select class="form-sel" id="quote-model" onchange="updateQuote('\\\${id}')">
              \\\${modelOpts}
            </select>
            <label class="form-lbl">N\u0103m s\u1EA3n xu\u1EA5t</label>
            <select class="form-sel" id="quote-year" onchange="updateQuote('\\\${id}')">
              \\\${years}
            </select>
            <div class="estimate-box" style="background:var(--mobase-surface);border-color:var(--mobase-line)">
              <div class="est-label" id="est-label">\u01AF\u1EDBc t\xEDnh / n\u0103m</div>
              <div class="est-value" id="est-value" style="color:var(--mobase-blue)">\\\${firstM.bh}tr/n\u0103m</div>
            </div>
          </div>
          <div class="bh-card">
            <div class="eyebrow" style="margin-bottom:14px">\u0110\u01A1n v\u1ECB n\u1ED5i b\u1EADt cho \\\${b.name}</div>
            \\\${insRows}
          </div>
        </div>
      </div>

      <!-- GARAGE -->
      <div class="d-section" id="garage">
        <div class="d-section-head">
          <div class="eyebrow">Garage & D\u1ECBch v\u1EE5</div>
          <div class="section-h">Garage t\u1ED1t nh\u1EA5t cho xe \\\${b.name}</div>
          <div class="section-sub">X\u1EBFp h\u1EA1ng theo s\u1ED1 l\u01B0\u1EE3ng x\u1EED l\xFD qua MoMo \xB7 Ph\u1EE5 t\xF9ng genuine \xB7 C\xF3 trong m\u1EA1ng l\u01B0\u1EDBi h\u1ED7 tr\u1EE3</div>
        </div>
        \\\${renderGarages(b, id)}
      </div>

      <!-- CHI PH\xCD V\u1EACN H\xC0NH -->
      <div class="d-section" id="chi-phi">
        <div class="d-section-head">
          <div class="eyebrow">Chi ph\xED v\u1EADn h\xE0nh</div>
          <div class="section-h">Ch\u1EE7 xe \\\${b.name} th\u1EF1c chi bao nhi\xEAu m\u1ED7i th\xE1ng?</div>
          <div class="section-sub">\u01AF\u1EDBc t\xEDnh t\u1EEB d\u1EEF li\u1EC7u s\u1EED d\u1EE5ng th\u1EF1c t\u1EBF \xB7 C\u1EADp nh\u1EADt \\\${new Date().toLocaleDateString('vi',{month:'long',year:'numeric'})}</div>
        </div>
        \\\${renderInsightPanel(b, id)}
        <div class="cost-model-bar" style="margin-top:28px">
          <span style="font-size:13px;font-weight:700;color:var(--gray-500)">\u01AF\u1EDBc t\xEDnh theo d\xF2ng xe:</span>
          <select class="cost-model-sel" id="cost-model" onchange="updateCost('\\\${id}')">
            \\\${costModelOpts}
          </select>
        </div>
        <div class="cost-tiles" id="cost-tiles">\\\${renderCostTiles(firstM, b)}</div>
        <div class="cost-total-bar" id="cost-total-bar">\\\${renderCostTotal(firstM, b)}</div>
      </div>

      <!-- NOTES -->
      <div class="d-section" id="notes">
        <div class="d-section-head">
          <div class="eyebrow">\u0110\u1EB7c th\xF9 h\xE3ng</div>
          <div class="section-h">Nh\u1EEFng \u0111i\u1EC1u c\u1EA7n bi\u1EBFt v\u1EC1 xe \\\${b.name}</div>
          <div class="section-sub">Th\xF4ng tin th\u1EF1c t\u1EBF t\u1EEB kinh nghi\u1EC7m b\u1ED3i th\u01B0\u1EDDng \u2014 kh\xF4ng c\xF3 \u1EDF n\u01A1i kh\xE1c</div>
        </div>
        \\\${noteHtml}
      </div>

      <!-- SCENARIOS -->
      <div class="d-section" id="tinh-huong">
        <div class="d-section-head">
          <div class="eyebrow">T\xECnh hu\u1ED1ng hay g\u1EB7p</div>
          <div class="section-h">T\xECnh hu\u1ED1ng b\u1ED3i th\u01B0\u1EDDng ph\u1ED5 bi\u1EBFn v\u1EDBi xe \\\${b.name}</div>
          <div class="section-sub">Xem quy tr\xECnh x\u1EED l\xFD v\xE0 \u0111i\u1EC1u kho\u1EA3n c\u1EE5 th\u1EC3 cho t\u1EEBng t\xECnh hu\u1ED1ng</div>
        </div>
        <div class="scenario-grid">\\\${scCards}</div>
      </div>

      <!-- TIN T\u1EE8C -->
      <div class="d-section" id="tin-tuc">
        <div class="d-section-head">
          <div class="eyebrow">Tin t\u1EE9c</div>
          <div class="section-h">Tin m\u1EDBi nh\u1EA5t v\u1EC1 \\\${b.name}</div>
          <div class="section-sub">C\u1EADp nh\u1EADt t\u1EEB c\xE1c ngu\u1ED3n b\xE1o ch\xED \xF4 t\xF4 uy t\xEDn \xB7 \\\${new Date().toLocaleDateString('vi',{month:'long',year:'numeric'})}</div>
        </div>
        \\\${renderNews(id)}
      </div>

      <!-- SO S\xC1NH H\xC3NG -->
      <div class="d-section" id="so-sanh">
        <div class="d-section-head">
          <div class="eyebrow">So s\xE1nh h\xE3ng</div>
          <div class="section-h">So s\xE1nh \\\${b.name} v\u1EDBi h\xE3ng kh\xE1c</div>
          <div class="section-sub">Ch\u1ECDn h\xE3ng th\u1EE9 hai \u0111\u1EC3 xem b\u1EA3ng so s\xE1nh chi ph\xED, \u0111\xE1nh gi\xE1 v\xE0 garage</div>
        </div>
        <div class="compare-wrap">
          <div class="compare-pick-bar">
            <div class="compare-a-pill" style="background:\\\${b.color}">\\\${brandMark(id,28,28,7,10)} \\\${b.name}</div>
            <div class="compare-vs-label">VS</div>
            <select class="compare-sel" onchange="doCompare('\\\${id}',this.value)">
              <option value="">Ch\u1ECDn h\xE3ng \u0111\u1EC3 so s\xE1nh...</option>
              \\\${BRAND_LIST.filter(x=>x!==id).map(x=>\\\`<option value="\\\${x}">\\\${BRANDS[x].name}</option>\\\`).join('')}
            </select>
          </div>
          <div id="compare-result"><div class="compare-placeholder">\u2190 Ch\u1ECDn m\u1ED9t h\xE3ng xe \u0111\u1EC3 xem b\u1EA3ng so s\xE1nh</div></div>
        </div>
      </div>

      <!-- CTA MUA BH -->
      <div class="cta-brand" style="background:linear-gradient(135deg,\\\${b.color} 0%,\\\${b.color}bb 100%)">
        <div class="cta-block-copy">
          <div class="cta-block-title">Mua b\u1EA3o hi\u1EC3m \xF4 t\xF4 cho xe \\\${b.name} tr\xEAn MoMo</div>
          <div class="cta-block-desc">So s\xE1nh t\u1EEB 10+ nh\xE0 b\u1EA3o hi\u1EC3m \xB7 Ph\xEA duy\u1EC7t trong 5 ph\xFAt \xB7 B\u1ED3i th\u01B0\u1EDDng nhanh qua app</div>
        </div>
        <a class="cta-brand-btn" href="/bao-hiem-o-to">\\\${licon('Shield',16,2)} Xem g\xF3i BH ngay \u2192</a>
      </div>
    </div>\\\`;
  setTimeout(() => initGarageMap(b.garages, id), 0);
}

function renderNews(id) {
  const items = BRAND_NEWS[id] || [];
  if (!items.length) return '<p style="color:var(--gray-400);font-size:13px">Ch\u01B0a c\xF3 tin t\u1EE9c.</p>';
  const cards = items.map(n => \\\`<a class="news-card" href="\\\${n.href}">
    <div class="news-cat \\\${n.cat}">\\\${n.catLabel}</div>
    <div class="news-title">\\\${n.title}</div>
    <div class="news-meta">
      <span class="news-source">\\\${n.source}</span>
      <span class="news-date">\\\${n.date}</span>
      <span class="news-read">\u0110\u1ECDc th\xEAm \u2192</span>
    </div>
  </a>\\\`).join('');
  return \\\`<div class="news-row">\\\${cards}</div>\\\`;
}

function renderCostTiles(m, b) {
  const fuelLabel = b.fuels.includes('\u0111i\u1EC7n') ? '\u0110i\u1EC7n (1.200km/th\xE1ng)' : 'X\u0103ng (1.200km/th\xE1ng)';
  const regFree = b.fuels.includes('\u0111i\u1EC7n') && !b.fuels.includes('x\u0103ng');
  return \\\`
    <div class="cost-tile pink">
      <div class="cost-tile-label">D\u1EF1 ph\xF2ng xe</div>
      <div class="cost-tile-val">\\\${fmt(m.monthly.bh)}</div>
      <div class="cost-tile-unit">/th\xE1ng</div>
      <div class="cost-tile-note">kho\u1EA3n d\u1EF1 ph\xF2ng cho b\u1EA3o v\u1EC7 xe</div>
    </div>
    <div class="cost-tile\\\${regFree?' free':''}">
      <div class="cost-tile-label">\\\${fuelLabel}</div>
      <div class="cost-tile-val">\\\${m.monthly.fuel === 0 ? 'Mi\u1EC5n ph\xED' : fmt(m.monthly.fuel)}</div>
      <div class="cost-tile-unit">\\\${m.monthly.fuel > 0 ? '/th\xE1ng' : ''}</div>
      <div class="cost-tile-note">\\\${regFree&&m.monthly.fuel===0?'xe \u0111i\u1EC7n mi\u1EC5n ph\xED \u0111\u1EBFn 2027':'\u01B0\u1EDBc t\xEDnh 1.200km/th\xE1ng'}</div>
    </div>
    <div class="cost-tile\\\${regFree?' free':''}">
      <div class="cost-tile-label">Ph\xED \u0111\u01B0\u1EDDng b\u1ED9 & \u0111\u0103ng ki\u1EC3m</div>
      <div class="cost-tile-val">\\\${m.monthly.reg === 0 ? 'Mi\u1EC5n ph\xED' : fmt(m.monthly.reg)}</div>
      <div class="cost-tile-unit">\\\${m.monthly.reg > 0 ? '/th\xE1ng' : ''}</div>
      <div class="cost-tile-note">\\\${m.monthly.reg === 0 ? 'xe \u0111i\u1EC7n \u0111\u01B0\u1EE3c mi\u1EC5n \u0111\u1EBFn 2027' : 'ph\xE2n b\u1ED5 theo n\u0103m'}</div>
    </div>
    <div class="cost-tile">
      <div class="cost-tile-label">B\u1EA3o d\u01B0\u1EE1ng \u0111\u1ECBnh k\u1EF3</div>
      <div class="cost-tile-val">\\\${fmt(m.monthly.maint)}</div>
      <div class="cost-tile-unit">/th\xE1ng</div>
      <div class="cost-tile-note">\u01B0\u1EDBc t\xEDnh trung b\xECnh n\u0103m</div>
    </div>\\\`;
}

function renderCostTotal(m, b) {
  const total = m.monthly.bh + m.monthly.fuel + m.monthly.reg + m.monthly.maint;
  return \\\`
    <div class="cost-total-left">
      <div class="cost-total-label">T\u1ED5ng chi ph\xED \u01B0\u1EDBc t\xEDnh</div>
      <div class="cost-total-model">\\\${b.name} \\\${m.name} \xB7 1.200km/th\xE1ng</div>
    </div>
    <div style="text-align:right">
      <div class="cost-total-val">\\\${fmt(total)}</div>
      <div class="cost-total-unit">/th\xE1ng</div>
    </div>\\\`;
}

window.selectModel = function(i, id) {
  document.querySelectorAll('.model-card').forEach((c,j)=>c.classList.toggle('sel',j===i));
};

window.updateQuote = function(id) {
  const b = BRANDS[id];
  const mi = parseInt(document.getElementById('quote-model').value);
  const year = parseInt(document.getElementById('quote-year').value);
  const m = b.models[mi];
  const age = 2025 - year;
  const adj = Math.round(m.bh * Math.pow(0.92, Math.min(age,10)));
  document.getElementById('est-value').textContent = adj + 'tr/n\u0103m';
  document.getElementById('est-label').textContent = \\\`\u01AF\u1EDBc t\xEDnh \\\${b.name} \\\${m.name} (\\\${year})\\\`;
};

window.updateCost = function(id) {
  const b = BRANDS[id];
  const mi = parseInt(document.getElementById('cost-model').value);
  const m = b.models[mi];
  document.getElementById('cost-tiles').innerHTML = renderCostTiles(m, b);
  document.getElementById('cost-total-bar').innerHTML = renderCostTotal(m, b);
};

/* \u2500\u2500 TOAST \u2500\u2500 */
window.toast = function(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.style.opacity = '1'; t.style.transform = 'translateX(-50%) translateY(0)';
  setTimeout(()=>{t.style.opacity='0';t.style.transform='translateX(-50%) translateY(20px)'},2400);
};

/* \u2500\u2500 FIND MODEL BY SLUG \u2500\u2500 */
function findModelBySlug(slug) {
  for (const [brandId, b] of Object.entries(BRANDS)) {
    const m = b.models.find(m => m.slug === slug);
    if (m) return { brandId, brand: b, model: m, modelIndex: b.models.indexOf(m) };
  }
  return null;
}

/* \u2500\u2500 OWNERSHIP CALC \u2500\u2500 */
function ocLookup(type) {
  const inputId = type === 'plate' ? 'oc-phat-nguoi-input' : 'oc-dang-kiem-input';
  const resultId = type === 'plate' ? 'oc-plate-result' : 'oc-reg-result';
  const input = document.getElementById(inputId);
  const bienso = (input ? input.value : '').trim().replace(/[\\\\s.\\\\-]/g,'').toUpperCase();
  if (!bienso || bienso.length < 4) { input && input.focus(); return; }
  const el = document.getElementById(resultId);
  if (!el) return;
  // Demo data \u2014 reuse same mock as phat-nguoi
  const VIOLATIONS = {'29A12345':true,'30A99999':true,'51G12345':true};
  if (type === 'plate') {
    if (VIOLATIONS[bienso]) {
      el.className = 'lookup-result is-visible is-alert';
      el.innerHTML = '<strong>Ph\xE1t hi\u1EC7n vi ph\u1EA1m ch\u01B0a x\u1EED l\xFD</strong><p>Xem chi ti\u1EBFt v\xE0 n\u1ED9p ph\u1EA1t tr\u1EF1c ti\u1EBFp tr\xEAn MoMo.</p><a href="/phat-nguoi?bienso=' + encodeURIComponent(bienso) + '" style="display:inline-flex;align-items:center;gap:5px;margin-top:8px;font-size:12px;font-weight:700;color:#EB2F96;text-decoration:none">Xem chi ti\u1EBFt \u2192</a>';
    } else {
      el.className = 'lookup-result is-visible';
      el.innerHTML = '<strong>Kh\xF4ng c\xF3 vi ph\u1EA1m</strong><p>Bi\u1EC3n s\u1ED1 ' + bienso + ' ch\u01B0a ghi nh\u1EADn ph\u1EA1t ngu\u1ED9i. Ki\u1EC3m tra l\u1EA7n cu\u1ED1i: h\xF4m nay.</p>';
    }
  } else {
    el.className = 'lookup-result is-visible is-alert';
    el.innerHTML = '<strong>H\u1EA1n \u0111\u0103ng ki\u1EC3m: 15/09/2026</strong><p>C\xF2n 66 ng\xE0y. N\xEAn \u0111\u1EB7t l\u1ECBch tr\u01B0\u1EDBc 2 tu\u1EA7n \u0111\u1EC3 tr\xE1nh ch\u1EDD \u0111\u1EE3i.</p>';
  }
}

function buildOwnershipCalc(b, m, brandId, e10info) {
  const typeToFuelRate = {suv:9,mpv:10,sedan:7.5,ev:15,pickup:12,coupe:8};
  const isEV = m.type === 'ev' || (m.ownership && m.ownership.fuelType === '\u0111i\u1EC7n');
  const ow = m.ownership || {
    fuelRate: typeToFuelRate[m.type] || 8,
    fuelType: isEV ? '\u0111i\u1EC7n' : 'x\u0103ng',
    fuelPrice: isEV ? 3858 : 22850,
    insureAnnual: (m.monthly ? m.monthly.bh * 12 * 1000 : 7440000),
    maintPer5k: (m.monthly ? Math.round(m.monthly.maint * 12 / 24 * 5000 / 1500 * 1000) : 1200000),
    roadFeeAnnual: (m.monthly ? m.monthly.reg * 12 * 1000 : 1560000),
    inspectPeriod: 24,
    inspectCost: 340000,
  };
  window.__ow = ow;
  const defaultKm = 1500;
  const pct = Math.round((defaultKm - 500) / (3000 - 500) * 100);
  const fuelLabel = isEV ? 'Chi ph\xED s\u1EA1c \u0111i\u1EC7n' : 'Nhi\xEAn li\u1EC7u';
  const fuelLink = isEV ? '/tram-sac' : '/gia-xang';
  const fuelLinkText = isEV ? 'Xem gi\xE1 \u0111i\u1EC7n \u2192' : 'Gi\xE1 x\u0103ng \u2192';

  // E10 banner (x\u0103ng only, compact full-width strip)
  const e10 = e10info || {status:'na'};
  let e10Banner = '';
  if (e10.status === 'ok' || e10.status === 'no') {
    const ok = e10.status === 'ok';
    const bannerBg  = ok ? '#F0FDF4' : '#FEF2F2';
    const borderClr = ok ? '#86EFAC' : '#FCA5A5';
    const badgeBg   = ok ? '#DCFCE7' : '#FEE2E2';
    const clr       = ok ? '#15803D' : '#DC2626';
    const iconSvg = ok
      ? \\\`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="\\\${clr}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>\\\`
      : \\\`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="\\\${clr}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>\\\`;
    const badgeText = ok ? 'D\xF9ng \u0111\u01B0\u1EE3c x\u0103ng E10' : 'Kh\xF4ng d\xF9ng x\u0103ng E10';
    const detail = e10.detail || (ok ? 'Xe t\u01B0\u01A1ng th\xEDch x\u0103ng E10 (Ethanol 10%). Ti\u1EBFt ki\u1EC7m h\u01A1n RON 95-III kho\u1EA3ng 5-8%.' : 'H\xE3ng kh\xF4ng khuy\u1EBFn ngh\u1ECB x\u0103ng E10 cho xe n\xE0y. Ki\u1EC3m tra s\u1ED5 tay b\u1EA3o d\u01B0\u1EE1ng tr\u01B0\u1EDBc khi \u0111\u1ED5.');
    const saving = ok ? \\\` \xB7 ~50.000-80.000\u0111/th\xE1ng ti\u1EBFt ki\u1EC7m \u0111\u01B0\u1EE3c\\\` : '';
    e10Banner = \\\`<div class="oc-e10-banner" style="background:\\\${bannerBg};border-color:\\\${borderClr}">
      <div class="oc-e10-badge" style="background:\\\${badgeBg};color:\\\${clr}">\\\${iconSvg} \\\${badgeText}</div>
      <div class="oc-e10-body">
        <div class="oc-e10-title" style="color:\\\${clr}">\\\${detail}<span style="font-weight:800">\\\${saving}</span></div>
      </div>
    </div>\\\`;
  }

  // \u0110\u1ECBnh gi\xE1 card
  const pMin = m.priceFrom || (m.price ? m.price[0] : null);
  const pMax = m.priceTo || (m.price ? m.price[1] : null);
  const priceStr = pMin
    ? \\\`\\\${(pMin/1000).toLocaleString('vi-VN')} - \\\${(pMax/1000).toLocaleString('vi-VN')}\\\`
    : null;
  const valCard = \\\`<div class="oc-val-card">
    <div class="oc-val-eyebrow">Gi\xE1 th\u1ECB tr\u01B0\u1EDDng</div>
    \\\${priceStr
      ? \\\`<div class="oc-val-price">\\\${priceStr} <span class="oc-val-unit">tri\u1EC7u</span></div>
         <div class="oc-val-sub">Gi\xE1 m\u1EDBi ni\xEAm y\u1EBFt \xB7 xe c\u0169 ph\u1EE5 thu\u1ED9c n\u0103m SX, km, t\xECnh tr\u1EA1ng</div>\\\`
      : \\\`<div class="oc-val-price" style="font-size:16px">Tra c\u1EE9u \u0111\u1ECBnh gi\xE1</div>
         <div class="oc-val-sub">Nh\u1EADp th\xF4ng tin xe \u0111\u1EC3 \u01B0\u1EDBc t\xEDnh gi\xE1 th\u1ECB tr\u01B0\u1EDDng</div>\\\`}
    <a class="oc-val-cta-btn" href="/tien-ich-giao-thong/dinh-gia-xe?brand=\\\${brandId}&model=\\\${m.slug}">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
      \u0110\u1ECBnh gi\xE1 xe c\u0169
    </a>
  </div>\\\`;

  // Lookup card (combined) \u2014 d\xF9ng UI classes c\u1EE7a phat-nguoi.css
  const lookupCard = \\\`<div class="oc-lookup-card">
    <div class="oc-lookup-head">
      <div class="oc-lookup-head-title">Tra c\u1EE9u theo bi\u1EC3n s\u1ED1</div>
      <div class="oc-lookup-head-sub">Nh\u1EADp bi\u1EC3n s\u1ED1 \u2192 k\u1EBFt qu\u1EA3 t\u1EE9c th\xEC</div>
    </div>
    <div class="oc-lookup-item">
      <div class="oc-lookup-item-label">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        Ph\u1EA1t ngu\u1ED9i
      </div>
      <div class="hero-input-row" style="border-radius:10px">
        <input id="oc-phat-nguoi-input" placeholder="VD: 29A12345" maxlength="12" onkeydown="if(event.key==='Enter')ocLookup('plate')" autocomplete="off">
        <button class="hero-submit" style="font-size:13px;padding:0 14px;height:38px;margin:5px 5px 5px 0" onclick="ocLookup('plate')">Tra ngay</button>
      </div>
      <div class="lookup-result" id="oc-plate-result"></div>
    </div>
    <div class="oc-lookup-item">
      <div class="oc-lookup-item-label">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M14 8H9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-1"/></svg>
        H\u1EA1n \u0111\u0103ng ki\u1EC3m
      </div>
      <div class="hero-input-row" style="border-radius:10px">
        <input id="oc-dang-kiem-input" placeholder="VD: 29A12345" maxlength="12" onkeydown="if(event.key==='Enter')ocLookup('reg')" autocomplete="off">
        <button class="hero-submit" style="font-size:13px;padding:0 14px;height:38px;margin:5px 5px 5px 0" onclick="ocLookup('reg')">Tra ngay</button>
      </div>
      <div class="lookup-result" id="oc-reg-result"></div>
    </div>
  </div>\\\`;

  return \\\`<div class="oc-owner-stack">
    \\\${e10Banner}
    <div class="oc-tools-grid">\\\${valCard}\\\${lookupCard}</div>
    <div class="oc-calc-divider">Chi ph\xED \u01B0\u1EDBc t\xEDnh / th\xE1ng</div>
    <div class="oc-wrap">
    <div class="oc-km-section">
      <div class="oc-km-label">B\u1EA1n \u0111i bao nhi\xEAu km / th\xE1ng?</div>
      <div class="oc-km-row">
        <span class="oc-km-min">500 km</span>
        <input type="range" class="oc-slider" id="oc-km-slider" min="500" max="3000" step="100" value="\\\${defaultKm}" style="--pct:\\\${pct}%" oninput="calcOC(this.value,this)">
        <span class="oc-km-max">3.000 km</span>
        <div class="oc-km-val"><span id="oc-km-display">\\\${defaultKm.toLocaleString('vi-VN')}</span> <span>km/th</span></div>
      </div>
    </div>
    <div class="oc-rows">
      <div class="oc-row">
        <div class="oc-row-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 22V8l9-6 9 6v14"/><path d="M5 22V10.5"/><path d="M19 22V10.5"/><ellipse cx="12" cy="17" rx="3" ry="5"/></svg></div>
        <div class="oc-row-body">
          <div class="oc-row-label">\\\${fuelLabel}</div>
          <div class="oc-row-hint" id="oc-fuel-hint"></div>
        </div>
        <div class="oc-row-right">
          <div class="oc-row-amount" id="oc-fuel-val">\u2014</div>
          <a class="oc-row-link" href="\\\${fuelLink}">\\\${fuelLinkText}</a>
        </div>
      </div>
      <div class="oc-row">
        <div class="oc-row-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <div class="oc-row-body">
          <div class="oc-row-label">B\u1EA3o hi\u1EC3m (TNDS + v\u1EADt ch\u1EA5t)</div>
          <div class="oc-row-hint" id="oc-ins-hint"></div>
        </div>
        <div class="oc-row-right">
          <div class="oc-row-amount" id="oc-ins-val">\u2014</div>
          <a class="oc-row-link" href="/bao-hiem-o-to">Mua b\u1EA3o hi\u1EC3m \u2192</a>
        </div>
      </div>
      <div class="oc-row">
        <div class="oc-row-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg></div>
        <div class="oc-row-body">
          <div class="oc-row-label">B\u1EA3o d\u01B0\u1EE1ng \u0111\u1ECBnh k\u1EF3</div>
          <div class="oc-row-hint" id="oc-maint-hint"></div>
        </div>
        <div class="oc-row-right">
          <div class="oc-row-amount" id="oc-maint-val">\u2014</div>
          <a class="oc-row-link" href="/tien-ich-giao-thong/bao-duong">\u0110\u1EB7t l\u1ECBch \u2192</a>
        </div>
      </div>
      <div class="oc-row">
        <div class="oc-row-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M14 8H9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-1"/><line x1="12" y1="13" x2="12" y2="17"/><line x1="10" y1="15" x2="14" y2="15"/></svg></div>
        <div class="oc-row-body">
          <div class="oc-row-label">\u0110\u0103ng ki\u1EC3m + ph\xED \u0111\u01B0\u1EDDng b\u1ED9</div>
          <div class="oc-row-hint" id="oc-reg-hint"></div>
        </div>
        <div class="oc-row-right">
          <div class="oc-row-amount" id="oc-reg-val">\u2014</div>
          <a class="oc-row-link" href="/tien-ich-giao-thong/dang-kiem">Tra h\u1EA1n \u2192</a>
        </div>
      </div>
      <div class="oc-row oc-parking-row">
        <div class="oc-row-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 12h4a2 2 0 0 0 0-4h-4v8"/></svg></div>
        <div class="oc-row-body">
          <div class="oc-row-label">\u0110\u1ED7 xe / gi\u1EEF xe</div>
          <div class="oc-row-hint">Nh\u1EADp theo th\u1EF1c t\u1EBF (tu\u1EF3 khu v\u1EF1c)</div>
        </div>
        <div class="oc-row-right">
          <div class="oc-row-amount">
            <input type="number" class="oc-parking-input" id="oc-parking" placeholder="0" min="0" step="100" oninput="calcOC(document.getElementById('oc-km-slider').value,null)">
            <span class="oc-parking-unit">ngh\xECn \u0111/th</span>
          </div>
          <a class="oc-row-link" href="/tien-ich-giao-thong/bai-do-xe">T\xECm b\xE3i \u2192</a>
        </div>
      </div>
    </div>
    <div class="oc-total">
      <div class="oc-total-left">
        <div class="oc-total-label">T\u1ED4NG \u01AF\u1EDAC T\xCDNH / TH\xC1NG</div>
        <div class="oc-total-note">Ch\u01B0a t\xEDnh: r\u1EEDa xe, ph\xED c\u1EA7u \u0111\u01B0\u1EDDng l\u1EBB</div>
      </div>
      <div class="oc-total-right">
        <div class="oc-total-val" id="oc-total-val">\u2014</div>
        <div class="oc-total-unit">\u0111\u1ED3ng / th\xE1ng</div>
      </div>
    </div>
    <div class="oc-ctas">
      <a class="oc-cta" href="/tien-ich-giao-thong/gia-xang"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 22V8l9-6 9 6v14"/><ellipse cx="12" cy="17" rx="3" ry="5"/></svg> Gi\xE1 x\u0103ng h\xF4m nay</a>
      <a class="oc-cta" href="/bao-hiem-o-to"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Mua b\u1EA3o hi\u1EC3m \xF4 t\xF4</a>
      <a class="oc-cta" href="/tien-ich-giao-thong/bao-duong"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> \u0110\u1EB7t l\u1ECBch b\u1EA3o d\u01B0\u1EE1ng</a>
      <a class="oc-cta" href="/tien-ich-giao-thong/dang-kiem"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M14 8H9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-1"/></svg> \u0110\u1EB7t l\u1ECBch \u0111\u0103ng ki\u1EC3m</a>
      <a class="oc-cta" href="/tien-ich-giao-thong/bai-do-xe"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 12h4a2 2 0 0 0 0-4h-4v8"/></svg> T\xECm b\xE3i \u0111\u1ED7 xe</a>
    </div>
  </div>
  </div>\\\`;
}

function calcOC(km, sliderEl) {
  km = parseInt(km);
  const ow = window.__ow;
  if (!ow) return;

  if (sliderEl) {
    const pct = Math.round((km - 500) / (3000 - 500) * 100);
    sliderEl.style.setProperty('--pct', pct + '%');
  }
  document.getElementById('oc-km-display').textContent = km.toLocaleString('vi-VN');

  // Fuel
  const fuelCost = Math.round(km * ow.fuelRate / 100 * ow.fuelPrice);
  const fuelHint = ow.fuelType === '\u0111i\u1EC7n'
    ? \\\`\\\${km.toLocaleString('vi-VN')}km \xD7 \\\${ow.fuelRate}kWh/100km \xD7 \\\${ow.fuelPrice.toLocaleString('vi-VN')}\u0111/kWh\\\`
    : \\\`\\\${km.toLocaleString('vi-VN')}km \xD7 \\\${ow.fuelRate}L/100km \xD7 \\\${ow.fuelPrice.toLocaleString('vi-VN')}\u0111/L\\\`;

  // Insurance (fixed)
  const insCost = Math.round(ow.insureAnnual / 12);
  const insAnnualM = Math.round(ow.insureAnnual / 1000000 * 10) / 10;
  const insHint = \\\`\\\${insAnnualM} tri\u1EC7u/n\u0103m \xF7 12 th\xE1ng\\\`;

  // Maintenance (scales with km)
  const maintCost = Math.round(km * ow.maintPer5k / 5000);
  const maintPer5kM = Math.round(ow.maintPer5k / 1000);
  const maintHint = \\\`\\\${maintPer5kM.toLocaleString('vi-VN')}.000\u0111 / 5.000km, ph\xE2n b\u1ED5 theo qu\xE3ng \u0111\u01B0\u1EDDng th\u1EF1c t\u1EBF\\\`;

  // Reg + road fee (fixed)
  const inspectMonthly = Math.round(ow.inspectCost / ow.inspectPeriod);
  const roadMonthly = Math.round(ow.roadFeeAnnual / 12);
  const regCost = inspectMonthly + roadMonthly;
  const roadM = Math.round(ow.roadFeeAnnual / 1000000 * 10) / 10;
  const inspM = Math.round(ow.inspectCost / 1000);
  const regHint = \\\`Ph\xED \u0111\u01B0\u1EDDng b\u1ED9 \\\${roadM}tr/n\u0103m + \u0111\u0103ng ki\u1EC3m \\\${inspM}.000\u0111/\\\${ow.inspectPeriod} th\xE1ng\\\`;

  // Parking
  const parkingVal = parseFloat(document.getElementById('oc-parking').value) || 0;
  const parkingCost = parkingVal * 1000;

  const total = fuelCost + insCost + maintCost + regCost + parkingCost;
  const fmt = v => v.toLocaleString('vi-VN') + '\u0111';

  document.getElementById('oc-fuel-val').textContent = fmt(fuelCost);
  document.getElementById('oc-fuel-hint').textContent = fuelHint;
  document.getElementById('oc-ins-val').textContent = fmt(insCost);
  document.getElementById('oc-ins-hint').textContent = insHint;
  document.getElementById('oc-maint-val').textContent = fmt(maintCost);
  document.getElementById('oc-maint-hint').textContent = maintHint;
  document.getElementById('oc-reg-val').textContent = fmt(regCost);
  document.getElementById('oc-reg-hint').textContent = regHint;
  document.getElementById('oc-total-val').textContent = fmt(total);
}

/* \u2500\u2500 HANDBOOK TAB SWITCH \u2500\u2500 */
function switchHbTab(btn, panelId) {
  const section = btn.closest('.d-section');
  section.querySelectorAll('.hb-tab').forEach(t => t.classList.remove('active'));
  section.querySelectorAll('.hb-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  section.querySelector('#' + panelId).classList.add('active');
}

/* \u2500\u2500 RENDER MODEL DETAIL \u2500\u2500 */
function renderModelDetail(brandId, modelSlug) {
  const found = findModelBySlug(modelSlug);
  if (!found) { renderDetail(brandId); return; }
  const { brand: b, model: m, modelIndex: mi } = found;
  const id = found.brandId;

  document.getElementById('page-title').textContent = \\\`\\\${b.name} \\\${m.name} - Chi ph\xED s\u1EDF h\u1EEFu tr\xEAn MoMo\\\`;

  const bc = \\\`<div class="breadcrumb-bar"><div class="wrap"><div class="bc-inner">
    <a class="bc-link" href="/tien-ich-giao-thong">Ti\u1EC7n \xCDch Giao Th\xF4ng</a>
    <span class="bc-sep">\u203A</span>
    <a class="bc-link" href="/tien-ich-giao-thong/hang-xe">H\xE3ng xe</a>
    <span class="bc-sep">\u203A</span>
    <a class="bc-link" href="/tien-ich-giao-thong/hang-xe/\\\${id}">\\\${b.name}</a>
    <span class="bc-sep">\u203A</span>
    <span class="bc-current">\\\${m.name}</span>
  </div></div></div>\\\`;

  const typeLabel = modelTypeLabel(m);
  const mTotal = m.monthly ? m.monthly.bh + m.monthly.fuel + m.monthly.reg + m.monthly.maint : 0;
  const fuelLabel = m.type==='ev'?'\u0110i\u1EC7n':(m.type==='hybrid'?'X\u0103ng/\u0110i\u1EC7n':(m.variants&&m.variants[0].fuel)||'X\u0103ng');
  const _seatsM = m.desc&&m.desc.match(/(\\\\d+)\\\\s*ch\u1ED7/);
  const seatsLabel = m.variants?\\\`\\\${m.variants[0].seats} ch\u1ED7\\\`:(_seatsM?\\\`\\\${_seatsM[1]} ch\u1ED7\\\`:(m.type==='truck'?'2-5 ch\u1ED7':m.type==='mpv'?'7 ch\u1ED7':'5 ch\u1ED7'));

  // E10 compatibility (hero pills + utils section)
  const _isEV_e10 = m.type === 'ev' || (b.fuels.includes('\u0111i\u1EC7n') && b.fuels.length===1);
  const _fuel_e10 = _isEV_e10 ? '\u0111i\u1EC7n' : (m.variants && m.variants[0] && m.variants[0].fuel === 'D\u1EA7u' ? 'diesel' : 'x\u0103ng');
  const e10 = (function(model, fuelT, ev) {
    if (ev || fuelT === '\u0111i\u1EC7n') return {status:'na'};
    if (fuelT === 'diesel') return {status:'na'};
    if (model.e10 === false) return {status:'no', badge:'Kh\xF4ng t\u01B0\u01A1ng th\xEDch', color:'#DC2626', bg:'#FEF2F2', detail:'H\xE3ng kh\xF4ng khuy\u1EBFn ngh\u1ECB d\xF9ng E10. Ki\u1EC3m tra s\u1ED5 tay \u0111\u1EC3 ch\u1EAFc ch\u1EAFn.'};
    return {status:'ok', badge:'T\u01B0\u01A1ng th\xEDch E10', color:'#15803D', bg:'#F0FDF4', detail: model.e10Note || 'Xe t\u01B0\u01A1ng th\xEDch x\u0103ng E10 (Ethanol 10%). Ti\u1EBFt ki\u1EC7m h\u01A1n RON 95-III kho\u1EA3ng 5-8%.'};
  })(m, _fuel_e10, _isEV_e10);

  const hero = \\\`<div class="md-hero" style="--brand:\\\${b.color}">
    <div class="md-hero-ghost">\\\${m.name.toUpperCase()}</div>
    <div class="wrap">
      <div class="md-hero-inner">
        <div class="md-hero-meta">
          <div class="md-hero-brand">
            <div class="md-hero-brand-mark" style="background:\\\${b.color}">\\\${b.name.slice(0,2).toUpperCase()}</div>
            \\\${b.name} \xB7 \\\${b.origin}
          </div>
          <h1 class="md-hero-title">\\\${m.name}</h1>
          <p class="md-hero-desc">\\\${m.desc}</p>
          <div class="md-hero-pills">
            <span class="md-pill">\\\${typeLabel}</span>
            <span class="md-pill">\\\${seatsLabel}</span>
            <span class="md-pill">\\\${fuelLabel}</span>
            \\\${e10.status==='ok'?'<span class="md-pill" style="background:rgba(34,197,94,.18);color:#4ADE80;border-color:rgba(34,197,94,.3)">E10 \u2713</span>':''}
            \\\${e10.status==='no'?'<span class="md-pill" style="background:rgba(239,68,68,.18);color:#FCA5A5;border-color:rgba(239,68,68,.3)">Kh\xF4ng d\xF9ng E10</span>':''}
          </div>
        </div>
        <div class="md-hero-img">
          \\\${carSVG(m.type||'suv', '#FFFFFF')}
          <div class="md-hero-road"></div>
        </div>
      </div>
      <div class="md-hero-stats">
        \\\${m.variants?\\\`<div class="md-stat"><div class="md-stat-label">Gi\xE1 ni\xEAm y\u1EBFt</div><div class="md-stat-val">\\\${fmtPrice(m.variants[0].price)}\u2013\\\${fmtPrice(m.variants[m.variants.length-1].price)} <span>tri\u1EC7u</span></div></div>\\\`:\\\`<div class="md-stat"><div class="md-stat-label">Lo\u1EA1i xe</div><div class="md-stat-val" style="font-size:17px;letter-spacing:0">\\\${typeLabel}</div></div>\\\`}
        \\\${mTotal?\\\`<div class="md-stat"><div class="md-stat-label">Th\u1EF1c chi / th\xE1ng</div><div class="md-stat-val">~\\\${(mTotal/1000).toFixed(1).replace('.',',')}tr <span>\u0111\u1ED3ng</span></div></div>\\\`:''}
        \\\${m.monthly?\\\`<div class="md-stat"><div class="md-stat-label">B\u1EA3o hi\u1EC3m / th\xE1ng</div><div class="md-stat-val">~\\\${(m.monthly.bh/1000).toFixed(1).replace('.',',')}tr <span>\u0111\u1ED3ng</span></div></div>\\\`:''}
        <div class="md-stat"><div class="md-stat-label">Nhi\xEAn li\u1EC7u</div><div class="md-stat-val" style="font-size:17px;letter-spacing:0">\\\${fuelLabel}</div></div>
      </div>
      </div>
    </div>
  <div class="md-subnav"><div class="md-subnav-inner">
    <a class="md-subnav-link" href="#md-cost">Chi ph\xED</a>
    \\\${m.valuation?'<a class="md-subnav-link" href="#md-valuation">\u0110\u1ECBnh gi\xE1</a>':''}
    \\\${m.inspectionSchedule||m.serviceIntervals?'<a class="md-subnav-link" href="#md-schedule">B\u1EA3o d\u01B0\u1EE1ng</a>':''}
    \\\${(m.commonIssues&&m.commonIssues.length)||(m.spareParts&&m.spareParts.length)?'<a class="md-subnav-link" href="#md-issues">Handbook</a>':''}
    <a class="md-subnav-link" href="#md-garage">Garage</a>
    <a class="md-subnav-link" href="#md-utils">Ti\u1EC7n \xEDch</a>
    \\\${m.variants?'<a class="md-subnav-link" href="#variants">Phi\xEAn b\u1EA3n</a>':''}
    \\\${m.competitors?'<a class="md-subnav-link" href="#compare">So s\xE1nh</a>':''}
    <a class="md-subnav-link" href="#md-notes">Ghi ch\xFA</a>
  </div></div>\\\`;

  // Variants
  let variantSection = '';
  if (m.variants) {
    const vCards = m.variants.map((v, i) => \\\`
      <div class="variant-card\\\${i===0?' sel':''}" onclick="selectVariant(\\\${i})">
        <div class="variant-name">\\\${v.name}</div>
        <div class="variant-price">\\\${fmtPrice(v.price)} <span>tri\u1EC7u</span></div>
        <div class="variant-specs">
          <div class="variant-spec"><strong>\u0110\u1ED9ng c\u01A1</strong> \\\${v.engine}</div>
          <div class="variant-spec"><strong>Nhi\xEAn li\u1EC7u</strong> \\\${v.fuel}</div>
          <div class="variant-spec"><strong>D\u1EABn \u0111\u1ED9ng</strong> \\\${v.drive}</div>
        </div>
      </div>\\\`).join('');
    variantSection = \\\`
      <div class="d-section" id="variants">
        <div class="d-section-head">
          <div class="eyebrow">Phi\xEAn b\u1EA3n</div>
          <div class="section-h">\\\${b.name} \\\${m.name} c\xF3 \\\${m.variants.length} phi\xEAn b\u1EA3n</div>
          <div class="section-sub">Gi\xE1 ni\xEAm y\u1EBFt \xB7 Ch\u1ECDn phi\xEAn b\u1EA3n \u0111\u1EC3 xem chi ti\u1EBFt</div>
        </div>
        <div class="variant-grid">\\\${vCards}</div>
      </div>\\\`;
  }

  // Cost section \u2014 ownership calc + static insight
  const costSection = \\\`
    <div class="d-section" id="md-cost">
      <div class="d-section-head">
        <div class="eyebrow">Ch\u1EE7 xe</div>
        <div class="section-h">Th\xF4ng tin h\u1EEFu \xEDch cho ch\u1EE7 \\\${b.name} \\\${m.name}</div>
        <div class="section-sub">Nhi\xEAn li\u1EC7u \xB7 \u0111\u1ECBnh gi\xE1 \xB7 tra c\u1EE9u \xB7 chi ph\xED \u01B0\u1EDBc t\xEDnh</div>
      </div>
      \\\${buildOwnershipCalc(b, m, id, e10)}
      <div style="margin-top:20px">\\\${renderModelInsight(b, m, id)}</div>
    </div>\\\`;

  // Valuation \u2014 used car price estimate
  let valuationSection = '';
  if (m.valuation) {
    const years = Object.keys(m.valuation.retention).map(Number).sort((a,b)=>b-a).filter(y=>y<2026);
    valuationSection = \\\`
    <div class="d-section" id="md-valuation">
      <div class="d-section-head">
        <div class="eyebrow">\u0110\u1ECBnh gi\xE1 xe c\u0169</div>
        <div class="section-h">\\\${b.name} \\\${m.name} c\u0169 c\xF2n \u0111\xE1ng gi\xE1 bao nhi\xEAu?</div>
        <div class="section-sub">\u01AF\u1EDBc t\xEDnh theo n\u0103m s\u1EA3n xu\u1EA5t v\xE0 s\u1ED1 km \u0111\xE3 \u0111i \xB7 d\u1EEF li\u1EC7u th\u1ECB tr\u01B0\u1EDDng xe c\u0169 Vi\u1EC7t Nam</div>
      </div>
      <div class="val-panel">
        <div class="val-controls">
          <div class="val-field">
            <label class="val-label">N\u0103m s\u1EA3n xu\u1EA5t</label>
            <select class="val-select" id="val-year" onchange="calcVal('\\\${id}','\\\${m.slug}')">
              \\\${years.map(y=>\\\`<option value="\\\${y}">\\\${y}</option>\\\`).join('')}
            </select>
          </div>
          <div class="val-field">
            <label class="val-label">S\u1ED1 km \u0111\xE3 \u0111i</label>
            <div class="val-km-pills" id="val-km">
              <button class="val-pill" data-f="1.03" onclick="valKm(this,'\\\${id}','\\\${m.slug}')">&lt; 30.000</button>
              <button class="val-pill on" data-f="1" onclick="valKm(this,'\\\${id}','\\\${m.slug}')">30 - 60k</button>
              <button class="val-pill" data-f="0.96" onclick="valKm(this,'\\\${id}','\\\${m.slug}')">60 - 100k</button>
              <button class="val-pill" data-f="0.91" onclick="valKm(this,'\\\${id}','\\\${m.slug}')">&gt; 100.000</button>
            </div>
          </div>
        </div>
        <div class="val-result">
          <div class="val-result-label">Gi\xE1 th\u1ECB tr\u01B0\u1EDDng \u01B0\u1EDBc t\xEDnh</div>
          <div class="val-result-price" id="val-price"></div>
          <div class="val-result-sub" id="val-sub"></div>
          <div class="val-retention" id="val-retention"></div>
        </div>
      </div>
      <div class="val-chart-wrap">
        <div class="val-chart-title">\u0110\u01B0\u1EDDng cong kh\u1EA5u hao \\\${m.name} \xB7 gi\xE1 ni\xEAm y\u1EBFt trung b\xECnh \\\${fmtPrice(m.valuation.base)} tri\u1EC7u (m\u1EDBi)</div>
        <div class="val-chart" id="val-chart"></div>
      </div>
      <div class="val-cta-row">
        <a class="val-cta" href="/bao-hiem-o-to">
          <span class="val-cta-icon">\\\${licon('ShieldCheck',18,2)}</span>
          <span class="val-cta-body"><strong>B\u1EA3o hi\u1EC3m th\xE2n v\u1ECF theo gi\xE1 tr\u1ECB xe</strong><span id="val-ins-hint"></span></span>
          <span class="val-cta-arrow">\\\${licon('ArrowRight',15,2.2)}</span>
        </a>
        <a class="val-cta ghost" href="/tien-ich-giao-thong/dinh-gia-xe?model=\\\${m.slug}&brand=\\\${id}">
          <span class="val-cta-icon">\\\${licon('Calculator',18,2)}</span>
          <span class="val-cta-body"><strong>\u0110\u1ECBnh gi\xE1 nhanh \\\${b.name} \\\${m.name}</strong><span>\u0110i\u1EC1u ch\u1EC9nh n\u0103m SX, km, t\xECnh tr\u1EA1ng \xB7 k\u1EBFt qu\u1EA3 t\u1EE9c th\xEC</span></span>
          <span class="val-cta-arrow">\\\${licon('ArrowRight',15,2.2)}</span>
        </a>
      </div>
      <a href="/tien-ich-giao-thong/dinh-gia-xe" style="display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--gray-400);margin-top:12px;text-decoration:none" onmouseover="this.style.color='var(--pink)'" onmouseout="this.style.color='var(--gray-400)'">
        \\\${licon('Info',13,2)} T\xECm hi\u1EC3u ph\u01B0\u01A1ng ph\xE1p \u0111\u1ECBnh gi\xE1 c\u1EE7a MoMo
      </a>
    </div>\\\`;
  }

  // Comparison
  let compareSection = '';
  if (m.competitors && m.competitors.length) {
    const compModels = [{ brandId: id, brand: b, model: m }];
    m.competitors.forEach(slug => {
      const f = findModelBySlug(slug);
      if (f) compModels.push(f);
    });

    const maxMonthly = Math.max(...compModels.map(c => {
      const mt = c.model.monthly;
      return mt.bh + mt.fuel + mt.reg + mt.maint;
    }));

    const rows = compModels.map((c, i) => {
      const mt = c.model.monthly;
      const total = mt.bh + mt.fuel + mt.reg + mt.maint;
      const pct = Math.round((total / maxMonthly) * 100);
      const isThis = i === 0;
      return \\\`<tr\\\${isThis?' class="compare-highlight"':''}>
        <td>
          <div class="compare-model">\\\${c.model.name}</div>
          <div class="compare-brand">\\\${c.brand.name}</div>
        </td>
        <td class="compare-val">\\\${fmtPrice(c.model.variants?c.model.variants[0].price:0)}</td>
        <td class="compare-val">\\\${fmt(mt.fuel)}</td>
        <td class="compare-val">\\\${fmt(mt.maint)}</td>
        <td>
          <div class="compare-val">\\\${fmt(total)}</div>
          <div class="compare-bar"><div class="compare-bar-fill" style="width:\\\${pct}%;background:\\\${isThis?'var(--mobase-blue)':'var(--gray-400)'}"></div></div>
        </td>
      </tr>\\\`;
    }).join('');

    compareSection = \\\`
      <div class="d-section" id="compare">
        <div class="d-section-head">
          <div class="eyebrow">So s\xE1nh</div>
          <div class="section-h">Chi ph\xED s\u1EDF h\u1EEFu: \\\${m.name} vs \u0111\u1ED1i th\u1EE7</div>
          <div class="section-sub">So s\xE1nh chi ph\xED v\u1EADn h\xE0nh th\u1EF1c t\u1EBF h\xE0ng th\xE1ng \xB7 c\xF9ng ph\xE2n kh\xFAc SUV 7 ch\u1ED7</div>
        </div>
        <div style="overflow-x:auto">
          <table class="compare-table">
            <thead><tr>
              <th>D\xF2ng xe</th>
              <th>Gi\xE1 t\u1EEB</th>
              <th>Nhi\xEAn li\u1EC7u/th\xE1ng</th>
              <th>B\u1EA3o d\u01B0\u1EE1ng/th\xE1ng</th>
              <th>T\u1ED5ng/th\xE1ng</th>
            </tr></thead>
            <tbody>\\\${rows}</tbody>
          </table>
        </div>
      </div>\\\`;
  }

  // Inspection & maintenance schedule
  let scheduleSection = '';
  if (m.inspectionSchedule || m.serviceIntervals) {
    const inspRows = (m.inspectionSchedule||[]).map(r => \\\`
      <tr><td class="sch-age">\\\${r.age}</td><td class="sch-interval">\\\${r.interval}</td><td>\\\${r.note}</td></tr>\\\`).join('');
    const svcCards = (m.serviceIntervals||[]).map(s => \\\`
      <div class="svc-interval-card">
        <div class="svc-interval-km">\\\${s.km}</div>
        <div class="svc-interval-task">\\\${s.task}</div>
        <div class="svc-interval-cost">~\\\${s.cost} tri\u1EC7u</div>
      </div>\\\`).join('');
    scheduleSection = \\\`
      <div class="d-section" id="md-schedule">
        <div class="d-section-head">
          <div class="eyebrow">L\u1ECBch b\u1EA3o d\u01B0\u1EE1ng</div>
          <div class="section-h">\u0110\u0103ng ki\u1EC3m & b\u1EA3o d\u01B0\u1EE1ng \\\${b.name} \\\${m.name}</div>
          <div class="section-sub">Theo quy \u0111\u1ECBnh B\u1ED9 GTVT v\xE0 khuy\u1EBFn ngh\u1ECB h\xE3ng</div>
        </div>
        \\\${inspRows ? \\\`<table class="schedule-table"><thead><tr><th>Tu\u1ED5i xe</th><th>Chu k\u1EF3</th><th>Ghi ch\xFA</th></tr></thead><tbody>\\\${inspRows}</tbody></table>\\\` : ''}
        \\\${svcCards ? \\\`<div style="margin-top:20px"><div style="font-size:13px;font-weight:800;color:var(--gray-900);margin-bottom:12px">M\u1ED1c b\u1EA3o d\u01B0\u1EE1ng theo km</div><div class="svc-interval-grid">\\\${svcCards}</div></div>\\\` : ''}
      </div>\\\`;
  }

  // Handbook (issues + spare parts)
  let issuesSection = '';
  const hasIssues = m.commonIssues && m.commonIssues.length;
  const hasParts = m.spareParts && m.spareParts.length;
  if (hasIssues || hasParts) {
    const sevLabel = {high:'Nghi\xEAm tr\u1ECDng',medium:'Trung b\xECnh',low:'Nh\u1EB9'};
    let issuesHtml = '';
    if (hasIssues) {
      issuesHtml = m.commonIssues.map(issue => \\\`
        <div class="issue-card">
          <div class="issue-card-top">
            <div class="issue-title">\\\${issue.title}</div>
            <div class="issue-severity \\\${issue.severity}">\\\${sevLabel[issue.severity]||issue.severity}</div>
          </div>
          <div class="issue-km">Th\u01B0\u1EDDng g\u1EB7p: \\\${issue.km}</div>
          <div class="issue-desc">\\\${issue.desc}</div>
          <div class="issue-footer">
            <span class="issue-cost-label">Chi ph\xED x\u1EED l\xFD</span>
            <span class="issue-cost-val">\\\${issue.cost}</span>
          </div>
        </div>\\\`).join('');
    }
    let partsHtml = '';
    if (hasParts) {
      const rows = m.spareParts.map(p => \\\`
        <tr>
          <td><div class="parts-name">\\\${p.name}</div>\\\${p.note?\\\`<div class="parts-note">\\\${p.note}</div>\\\`:''}</td>
          <td><span class="parts-interval">\\\${p.interval}</span></td>
          <td><span class="parts-cost">\\\${p.cost}</span></td>
        </tr>\\\`).join('');
      partsHtml = \\\`
        <table class="parts-table">
          <thead>
            <tr>
              <th>Linh ki\u1EC7n</th>
              <th>Chu k\u1EF3 thay</th>
              <th>Chi ph\xED</th>
            </tr>
          </thead>
          <tbody>\\\${rows}</tbody>
        </table>\\\`;
    }
    const tabs = (hasIssues && hasParts) ? \\\`
      <div class="hb-tabs">
        <button class="hb-tab active" onclick="switchHbTab(this,'hb-issues-\\\${m.id||'x'}')">L\u1ED7i hay g\u1EB7p <span style="font-size:10px;font-weight:600;background:var(--gray-100);color:var(--gray-500);border-radius:4px;padding:1px 5px;margin-left:4px">\\\${m.commonIssues.length}</span></button>
        <button class="hb-tab" onclick="switchHbTab(this,'hb-parts-\\\${m.id||'x'}')">Linh ki\u1EC7n hay thay <span style="font-size:10px;font-weight:600;background:var(--gray-100);color:var(--gray-500);border-radius:4px;padding:1px 5px;margin-left:4px">\\\${m.spareParts.length}</span></button>
      </div>\\\` : '';
    issuesSection = \\\`
      <div class="d-section" id="md-issues">
        <div class="d-section-head">
          <div class="eyebrow">Handbook ch\u1EE7 xe</div>
          <div class="section-h">\\\${b.name} \\\${m.name} \u2014 C\u1EA9m nang v\u1EADn h\xE0nh</div>
          <div class="section-sub">T\u1ED5ng h\u1EE3p t\u1EEB d\u1EEF li\u1EC7u s\u1EEDa ch\u1EEFa v\xE0 b\u1EA3o d\u01B0\u1EE1ng th\u1EF1c t\u1EBF</div>
        </div>
        \\\${tabs}
        \\\${hasIssues ? \\\`<div class="hb-panel active" id="hb-issues-\\\${m.id||'x'}">\\\${issuesHtml}</div>\\\` : ''}
        \\\${hasParts ? \\\`<div class="hb-panel\\\${!hasIssues?' active':''}" id="hb-parts-\\\${m.id||'x'}">\\\${partsHtml}</div>\\\` : ''}
      </div>\\\`;
  }

  // Garage (reuse from brand)
  const garageSection = \\\`
    <div class="d-section" id="md-garage">
      <div class="d-section-head">
        <div class="eyebrow">Garage</div>
        <div class="section-h">Garage t\u1ED1t cho \\\${b.name} \\\${m.name}</div>
        <div class="section-sub">X\u1EBFp h\u1EA1ng theo s\u1ED1 l\u01B0\u1EE3ng x\u1EED l\xFD qua MoMo</div>
      </div>
      \\\${renderGarages(b, id)}
    </div>\\\`;

  // Notes (model-specific if available, else brand)
  const notes = m.modelNotes || b.notes;
  const noteHtml = notes.map(n => \\\`
    <div class="brand-note">
      <div class="brand-note-q">\\\${n.q}</div>
      <div class="brand-note-a">\\\${n.a}</div>
    </div>\\\`).join('');

  const noteSection = \\\`
    <div class="d-section" id="md-notes">
      <div class="d-section-head">
        <div class="eyebrow">Ghi ch\xFA</div>
        <div class="section-h">\u0110i\u1EC1u c\u1EA7n bi\u1EBFt v\u1EC1 \\\${b.name} \\\${m.name}</div>
      </div>
      \\\${noteHtml}
    </div>\\\`;

  // Utilities inline
  const isEV = _isEV_e10;
  const fuelType = _fuel_e10;
  const utilSection = \\\`
    <div class="d-section" id="md-utils">
      <div class="d-section-head">
        <div class="eyebrow">Ti\u1EC7n \xEDch</div>
        <div class="section-h">Tra c\u1EE9u nhanh cho \\\${b.name} \\\${m.name}</div>
      </div>
      <div class="util-grid">
        <div class="util-card">
          <div class="util-icon">\\\${licon('ClipboardList',22,2)}</div>
          <div class="util-label">Tra c\u1EE9u ph\u1EA1t ngu\u1ED9i</div>
          <div class="util-hint">Nh\u1EADp bi\u1EC3n s\u1ED1 xe \u0111\u1EC3 ki\u1EC3m tra vi ph\u1EA1m</div>
          <div class="util-input-row">
            <input class="util-input" id="util-plate" placeholder="VD: 30A-123.45" maxlength="12">
            <button class="util-btn util-btn-primary" onclick="demoLookup('plate')">Tra c\u1EE9u</button>
          </div>
          <div class="util-result" id="util-plate-result"></div>
        </div>
        <div class="util-card">
          <div class="util-icon">\\\${licon('Search',22,2)}</div>
          <div class="util-label">Tra c\u1EE9u \u0111\u0103ng ki\u1EC3m</div>
          <div class="util-hint">Ki\u1EC3m tra h\u1EA1n \u0111\u0103ng ki\u1EC3m theo bi\u1EC3n s\u1ED1</div>
          <div class="util-input-row">
            <input class="util-input" id="util-reg" placeholder="VD: 30A-123.45" maxlength="12">
            <button class="util-btn util-btn-primary" onclick="demoLookup('reg')">Tra c\u1EE9u</button>
          </div>
          <div class="util-result" id="util-reg-result"></div>
        </div>
        <div class="util-card">
          <div class="util-icon">\\\${licon(isEV ? 'Zap' : 'Fuel',22,2)}</div>
          <div class="util-label">\\\${isEV ? 'Gi\xE1 s\u1EA1c \u0111i\u1EC7n h\xF4m nay' : 'Gi\xE1 x\u0103ng d\u1EA7u h\xF4m nay'}</div>
          <div class="util-hint">\\\${isEV ? 'Gi\xE1 s\u1EA1c t\u1EA1i c\xE1c tr\u1EA1m ph\u1ED5 bi\u1EBFn' : \\\`\\\${fuelType === 'diesel' ? 'DO 0.05S - nhi\xEAn li\u1EC7u Santa Fe' : 'RON 95-III, E5 RON 92'}\\\`}</div>
          \\\${isEV ? \\\`
            <div class="util-fuel-row" style="margin-top:4px">
              <div class="util-fuel-item">VinFast: <span class="util-fuel-price">3.858\u0111/kWh</span></div>
              <div class="util-fuel-item">EverCharge: <span class="util-fuel-price">4.200\u0111/kWh</span></div>
            </div>
          \\\` : \\\`
            <div class="util-fuel-row" style="margin-top:4px">
              \\\${fuelType === 'diesel' ? \\\`
                <div class="util-fuel-item">DO 0.05S: <span class="util-fuel-price">18.536\u0111</span> <span class="util-fuel-delta down">\u25BC318</span></div>
                <div class="util-fuel-item">E5 RON 92: <span class="util-fuel-price">22.380\u0111</span> <span class="util-fuel-delta down">\u25B21.300</span></div>
              \\\` : \\\`
                <div class="util-fuel-item">RON 95-III: <span class="util-fuel-price">22.850\u0111</span> <span class="util-fuel-delta down">\u25B21.420</span></div>
                <div class="util-fuel-item">E5 RON 92: <span class="util-fuel-price">22.380\u0111</span> <span class="util-fuel-delta down">\u25B21.300</span></div>
              \\\`}
            </div>
          \\\`}
          \\\${fuelType === 'x\u0103ng' ? \\\`
          <div style="margin:10px 0 4px;padding:10px 12px;background:\\\${e10.bg};border-radius:10px;display:flex;align-items:flex-start;gap:10px">
            <span style="font-size:15px;margin-top:1px">\\\${e10.status==='ok'?'\u2705':e10.status==='no'?'\u274C':'\u2796'}</span>
            <div style="flex:1;min-width:0">
              <div style="font-size:12px;font-weight:700;color:\\\${e10.color};margin-bottom:3px">\\\${e10.badge}</div>
              <div style="font-size:11.5px;color:var(--gray-600);line-height:1.5">\\\${e10.detail}</div>
            </div>
          </div>\\\` : ''}
          <div class="util-quick">
            <button class="util-quick-btn" onclick="demoLookup('fuel')">T\xECm \\\${isEV ? 'tr\u1EA1m s\u1EA1c' : 'c\xE2y x\u0103ng'} g\u1EA7n nh\u1EA5t</button>
          </div>
          <div class="util-result" id="util-fuel-result"></div>
        </div>
        <div class="util-card">
          <div class="util-icon">\\\${licon('SquareParking',22,2)}</div>
          <div class="util-label">B\xE3i \u0111\u1ED7 xe g\u1EA7n \u0111\xE2y</div>
          <div class="util-hint">T\xECm b\xE3i \u0111\u1ED7 c\xF3 ch\u1ED7 tr\u1ED1ng g\u1EA7n b\u1EA1n</div>
          <div class="util-quick">
            <button class="util-quick-btn" onclick="demoLookup('park','q1')">Qu\u1EADn 1</button>
            <button class="util-quick-btn" onclick="demoLookup('park','q3')">Qu\u1EADn 3</button>
            <button class="util-quick-btn" onclick="demoLookup('park','q7')">Qu\u1EADn 7</button>
            <button class="util-quick-btn" onclick="demoLookup('park','td')">Th\u1EE7 \u0110\u1EE9c</button>
            <button class="util-quick-btn" onclick="demoLookup('park','hn')">Ho\xE0n Ki\u1EBFm</button>
          </div>
          <div class="util-result" id="util-park-result"></div>
        </div>
      </div>
      \\\${m.slug ? \\\`
      <a href="/tien-ich-giao-thong/bao-duong" class="bd-cta-banner">
        <div class="bd-cta-icon">\\\${licon('Wrench',20,2)}</div>
        <div class="bd-cta-text">
          <div class="bd-cta-title">L\u1ECBch b\u1EA3o d\u01B0\u1EE1ng \\\${b.name} \\\${m.name}</div>
          <div class="bd-cta-sub">Chu k\u1EF3 thay d\u1EA7u, bugi, l\u1ECDc gi\xF3 \xB7 Chi ph\xED \u01B0\u1EDBc t\xEDnh t\u1EA1i Vi\u1EC7t Nam</div>
        </div>
        <div class="bd-cta-arrow">\\\${licon('ChevronRight',18,2.5)}</div>
      </a>\\\` : ''}
    </div>\\\`;

  // Other models from same brand
  const otherModels = b.models.filter(om => om !== m);
  let otherModelsSection = '';
  if (otherModels.length) {
    const cards = otherModels.map(om => {
      const imgBg = \\\`linear-gradient(160deg,\\\${b.color}14 0%,\\\${b.color}06 100%)\\\`;
      const tag = om.slug ? 'a' : 'div';
      const linkAttr = om.slug ? \\\`href="/tien-ich-giao-thong/hang-xe/\\\${brandId}/\\\${om.slug}"\\\` : '';
      return \\\`<\\\${tag} class="model-card" \\\${linkAttr} style="cursor:\\\${om.slug?'pointer':'default'}">
        <div class="model-img" style="background:\\\${imgBg}">\\\${carSVG(om.type||'suv', b.color)}</div>
        <div class="model-info">
          <div class="model-name">\\\${om.name}</div>
          <div class="model-meta">
            <span class="model-badge">\\\${modelTypeLabel(om)}</span>
            \\\${om.slug ? '<span class="model-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>' : ''}
          </div>
        </div>
      </\\\${tag}>\\\`;
    }).join('');
    otherModelsSection = \\\`
      <div class="d-section" id="md-others">
        <div class="d-section-head">
          <div class="eyebrow">C\xF9ng h\xE3ng</div>
          <div class="section-h">D\xF2ng xe kh\xE1c c\u1EE7a \\\${b.name}</div>
        </div>
        <div class="model-grid">\\\${cards}</div>
      </div>\\\`;
  }

  const stickyBar = \\\`<div class="sticky-bh-bar" style="background:linear-gradient(90deg,\\\${b.color} 0%,\\\${b.color}cc 100%)">
    <div class="sticky-bh-copy">
      <strong>Mua BH cho \\\${b.name} \\\${m.name}</strong>
      <span>So s\xE1nh 10+ nh\xE0 BH \xB7 Ph\xEA duy\u1EC7t 5 ph\xFAt</span>
    </div>
    <a class="sticky-bh-btn" href="/bao-hiem-o-to" style="color:\\\${b.color}">\\\${licon('Shield',14,2)} Xem ngay</a>
  </div>\\\`;

  document.getElementById('app').innerHTML = bc + hero + \\\`
    <div class="wrap detail-body">
      \\\${costSection}
      \\\${valuationSection}
      \\\${scheduleSection}
      \\\${issuesSection}
      \\\${garageSection}
      \\\${utilSection}
      \\\${variantSection}
      \\\${compareSection}
      \\\${noteSection}
      \\\${otherModelsSection}
    </div>\\\` + stickyBar;
  initModelDetailMotion();
  setTimeout(() => initGarageMap(b.garages, id), 0);
  // Init ownership calc with default km
  setTimeout(() => calcOC(1500, document.getElementById('oc-km-slider')), 0);
  if (m.valuation) setTimeout(() => calcVal(id, m.slug), 0);
}

/* \u2500\u2500 VALUATION \u2500\u2500 */
function valKm(btn, brandId, slug) {
  document.querySelectorAll('#val-km .val-pill').forEach(p => p.classList.remove('on'));
  btn.classList.add('on');
  calcVal(brandId, slug);
}

function calcVal(brandId, slug) {
  const found = findModelBySlug(slug);
  if (!found || !found.model.valuation) return;
  const v = found.model.valuation;
  const year = parseInt(document.getElementById('val-year').value, 10);
  const kmF  = parseFloat(document.querySelector('#val-km .val-pill.on').dataset.f);
  const ret  = (v.retention[year] || 50) / 100;
  const mid  = v.base * ret * kmF;
  const lo   = Math.round(mid * 0.96), hi = Math.round(mid * 1.04);
  const age  = 2026 - year;

  document.getElementById('val-price').innerHTML = \\\`\\\${fmtPrice(lo)} - \\\${fmtPrice(hi)} <span>tri\u1EC7u</span>\\\`;
  document.getElementById('val-sub').textContent = \\\`\\\${found.model.name} \\\${year} \xB7 \\\${age} n\u0103m tu\u1ED5i \xB7 c\xF2n \\\${Math.round(ret*kmF*100)}% gi\xE1 ni\xEAm y\u1EBFt\\\`;

  const seg = v.segAvgRetention3y;
  const own3 = v.retention[2023] || 0;
  document.getElementById('val-retention').innerHTML = own3 > seg
    ? \\\`\\\${licon('TrendingUp',13,2.2)} Gi\u1EEF gi\xE1 t\u1ED1t h\u01A1n trung b\xECnh ph\xE2n kh\xFAc SUV 7 ch\u1ED7 (\\\${own3}% so v\u1EDBi \\\${seg}% sau 3 n\u0103m)\\\`
    : \\\`\\\${licon('TrendingDown',13,2.2)} Gi\u1EEF gi\xE1 \\\${own3}% sau 3 n\u0103m \xB7 trung b\xECnh ph\xE2n kh\xFAc \\\${seg}%\\\`;

  // Depreciation chart
  const years = Object.keys(v.retention).map(Number).sort((a,b)=>b-a);
  document.getElementById('val-chart').innerHTML = years.map(y => {
    const val = Math.round(v.base * v.retention[y] / 100);
    return \\\`<div class="val-bar-col\\\${y===year?' sel':''}" onclick="document.getElementById('val-year').value='\\\${y<2026?y:years[1]}';calcVal('\\\${brandId}','\\\${slug}')">
      <div class="val-bar-val">\\\${fmtPrice(val)}</div>
      <div class="val-bar" style="height:\\\${v.retention[y]}%"></div>
      <div class="val-bar-year">\\\${y===2026?'M\u1EDBi':y}</div>
    </div>\\\`;
  }).join('');

  // Insurance hint: th\xE2n v\u1ECF ~1.5%/n\u0103m gi\xE1 tr\u1ECB xe
  const insFee = Math.round(mid * 0.015 * 10) / 10;
  document.getElementById('val-ins-hint').textContent = \\\`Ph\xED tham kh\u1EA3o ~\\\${fmtPrice(Math.round(insFee))} tri\u1EC7u/n\u0103m cho xe gi\xE1 tr\u1ECB \\\${fmtPrice(Math.round(mid))} tri\u1EC7u\\\`;
}

function initModelDetailMotion() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sections = Array.from(document.querySelectorAll('.detail-body .d-section'));

  // scroll reveal
  if (!reduced && 'IntersectionObserver' in window) {
    sections.forEach(s => s.classList.add('rv'));
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    sections.forEach(s => io.observe(s));

    // bars grow when their container appears
    const barIo = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll('.insight-bar-fill,.compare-bar-fill').forEach(f => {
          const w = f.style.width;
          f.style.transition = 'none'; f.style.width = '0';
          requestAnimationFrame(() => { f.style.transition = 'width .8s cubic-bezier(.2,.8,.2,1)'; f.style.width = w; });
        });
        barIo.unobserve(e.target);
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('.insight-panel,.compare-table').forEach(el => barIo.observe(el));
  }

  // subnav scrollspy
  const links = Array.from(document.querySelectorAll('.md-subnav-link'));
  if (!links.length) return;
  const targets = links.map(l => document.getElementById(l.getAttribute('href').slice(1))).filter(Boolean);
  const spy = () => {
    const fromTop = window.scrollY + 190;
    let current = targets[0];
    targets.forEach(t => { if (t.offsetTop <= fromTop) current = t; });
    links.forEach(l => l.classList.toggle('on', current && l.getAttribute('href') === '#' + current.id));
  };
  window.addEventListener('scroll', spy, { passive: true });
  spy();
}

function renderModelInsight(b, m, id) {
  const ins = m.modelInsight || b.insight;
  if (!ins) return '';
  const total = ins.monthly;
  const bd = ins.breakdown;
  const maxVal = Math.max(bd.bh, bd.fuel, bd.road||1, bd.maint);
  const bar = (val, fillColor) => {
    const pct = Math.round((val / maxVal) * 100);
    return \\\`<div class="insight-bar-track"><div class="insight-bar-fill" style="width:\\\${pct}%;background:\\\${fillColor}"></div></div>\\\`;
  };
  const vsSign = ins.vs_estimate > 0 ? '+' : '';
  const vsCls = ins.vs_estimate > 0 ? 'positive' : 'negative';
  const vsLabel = ins.vs_estimate > 0
    ? \\\`Cao h\u01A1n \u01B0\u1EDBc t\xEDnh \\\${vsSign}\\\${ins.vs_estimate}%\\\`
    : \\\`Ti\u1EBFt ki\u1EC7m h\u01A1n \u01B0\u1EDBc t\xEDnh \\\${Math.abs(ins.vs_estimate)}%\\\`;

  return \\\`<div class="insight-panel" id="mi-panel-\\\${id}">
    <div class="insight-header" style="background:var(--mobase-surface)">
      <div class="insight-owners">\\\${ins.owners.toLocaleString('vi')} ch\u1EE7 xe \\\${m.name} tr\xEAn MoMo</div>
    </div>
    <div class="insight-body">
      <div class="insight-main">
        <div class="insight-monthly-label">Th\u1EF1c chi trung b\xECnh / th\xE1ng</div>
        <div class="insight-monthly-val">\\\${(total/1000).toFixed(1).replace('.',',')}tr</div>
        <div class="insight-monthly-unit">\u0111\u1ED3ng / th\xE1ng \xB7 \\\${b.name} \\\${m.name}</div>
        <div class="insight-model-note">G\u1ED3m: d\u1EF1 ph\xF2ng xe, nhi\xEAn li\u1EC7u, \u0111\u01B0\u1EDDng b\u1ED9, b\u1EA3o d\u01B0\u1EE1ng</div>
        <div class="insight-vs \\\${vsCls}">\\\${vsLabel}</div>
      </div>
      <div class="insight-right">
        <div class="insight-city-toggle">
          <button class="city-btn on" onclick="switchModelCity('hcm','\\\${id}')" id="mcity-hcm-\\\${id}">HCM</button>
          <button class="city-btn" onclick="switchModelCity('hn','\\\${id}')" id="mcity-hn-\\\${id}">H\xE0 N\u1ED9i</button>
        </div>
        <div class="insight-city-val" id="mcity-val-\\\${id}">\\\${(ins.hcm/1000).toFixed(1).replace('.',',')}tr</div>
        <div class="insight-city-sub" id="mcity-sub-\\\${id}">TP.HCM \xB7 trung b\xECnh / th\xE1ng</div>
        <div class="insight-breakdown-label">C\u01A1 c\u1EA5u chi ph\xED</div>
        <div class="insight-bars">
          <div class="insight-bar-row">
            <div class="insight-bar-name">D\u1EF1 ph\xF2ng xe</div>
            \\\${bar(bd.bh, 'var(--mobase-ink)')}
            <div class="insight-bar-val">\\\${fmt(bd.bh)}</div>
          </div>
          <div class="insight-bar-row">
            <div class="insight-bar-name">\\\${b.fuels.includes('\u0111i\u1EC7n')&&b.fuels.length===1?'\u0110i\u1EC7n':'Nhi\xEAn li\u1EC7u'}</div>
            \\\${bar(bd.fuel, 'var(--mobase-blue)')}
            <div class="insight-bar-val">\\\${fmt(bd.fuel)}</div>
          </div>
          <div class="insight-bar-row">
            <div class="insight-bar-name">\u0110\u01B0\u1EDDng b\u1ED9 & \u0110K</div>
            \\\${bar(bd.road||1, 'var(--mobase-teal)')}
            <div class="insight-bar-val">\\\${bd.road?fmt(bd.road):'Mi\u1EC5n ph\xED'}</div>
          </div>
          <div class="insight-bar-row">
            <div class="insight-bar-name">B\u1EA3o d\u01B0\u1EE1ng</div>
            \\\${bar(bd.maint, 'var(--gray-500)')}
            <div class="insight-bar-val">\\\${fmt(bd.maint)}</div>
          </div>
          </div>
        </div>
      </div>
    </div>\\\`;
}

window.switchModelCity = function(city, id) {
  const slug = new URLSearchParams(location.search).get('model');
  const found = findModelBySlug(slug);
  if (!found) return;
  const ins = found.model.modelInsight || found.brand.insight;
  document.querySelectorAll(\\\`#mcity-hcm-\\\${id}, #mcity-hn-\\\${id}\\\`).forEach(el=>el.classList.remove('on'));
  document.getElementById(\\\`mcity-\\\${city}-\\\${id}\\\`).classList.add('on');
  const val = city === 'hcm' ? ins.hcm : ins.hn;
  const label = city === 'hcm' ? 'TP.HCM \xB7 trung b\xECnh / th\xE1ng' : 'H\xE0 N\u1ED9i \xB7 trung b\xECnh / th\xE1ng';
  document.getElementById(\\\`mcity-val-\\\${id}\\\`).textContent = (val/1000).toFixed(1).replace('.',',') + 'tr';
  document.getElementById(\\\`mcity-sub-\\\${id}\\\`).textContent = label;
};

window.selectVariant = function(i) {
  document.querySelectorAll('.variant-card').forEach((c,j)=>c.classList.toggle('sel',j===i));
};

function fmtPrice(n) { return n ? n.toLocaleString('vi') : '\u2014'; }

function demoLookup(type, arg) {
  const demos = {
    plate: {id:'util-plate-result', cls:'util-result-ok',
      html:'<strong>Kh\xF4ng c\xF3 vi ph\u1EA1m</strong> - Bi\u1EC3n s\u1ED1 n\xE0y ch\u01B0a ghi nh\u1EADn ph\u1EA1t ngu\u1ED9i. Ki\u1EC3m tra l\u1EA7n cu\u1ED1i: h\xF4m nay.'},
    reg: {id:'util-reg-result', cls:'util-result-warn',
      html:'<strong>H\u1EA1n \u0111\u0103ng ki\u1EC3m: 15/09/2026</strong> - C\xF2n 66 ng\xE0y. N\xEAn \u0111\u1EB7t l\u1ECBch tr\u01B0\u1EDBc 2 tu\u1EA7n \u0111\u1EC3 tr\xE1nh ch\u1EDD \u0111\u1EE3i.'},
    fuel: {id:'util-fuel-result', cls:'util-result-ok',
      html:'<strong>3 c\xE2y x\u0103ng g\u1EA7n nh\u1EA5t:</strong> Petrolimex 123 Nguy\u1EC5n Th\u1ECB Minh Khai (0.3km) \xB7 Shell Hai B\xE0 Tr\u01B0ng (0.8km) \xB7 PVOIL \u0110i\u1EC7n Bi\xEAn Ph\u1EE7 (1.2km)'},
    park: {id:'util-park-result', cls:'util-result-ok', html:{
      q1:'<strong>5 b\xE3i \u0111\u1ED7 c\xF2n ch\u1ED7:</strong> B\xE3i Nguy\u1EC5n Hu\u1EC7 (12 ch\u1ED7 SUV) \xB7 Vincom \u0110\u1ED3ng Kh\u1EDFi (8 ch\u1ED7) \xB7 Parkee L\xEA Th\xE1nh T\xF4n (5 ch\u1ED7)',
      q3:'<strong>4 b\xE3i \u0111\u1ED7 c\xF2n ch\u1ED7:</strong> B\xE3i V\xF5 V\u0103n T\u1EA7n (6 ch\u1ED7 SUV) \xB7 Parkee Nguy\u1EC5n Th\u1ECB Minh Khai (10 ch\u1ED7) \xB7 Diamond Plaza (3 ch\u1ED7)',
      q7:'<strong>6 b\xE3i \u0111\u1ED7 c\xF2n ch\u1ED7:</strong> SC VivoCity (15 ch\u1ED7 SUV) \xB7 B\xE3i Nguy\u1EC5n L\u01B0\u01A1ng B\u1EB1ng (8 ch\u1ED7) \xB7 Crescent Mall (12 ch\u1ED7)',
      td:'<strong>3 b\xE3i \u0111\u1ED7 c\xF2n ch\u1ED7:</strong> B\xE3i V\xF5 Ch\xED C\xF4ng (10 ch\u1ED7 SUV) \xB7 GigaMall (20 ch\u1ED7) \xB7 Parkee Xa L\u1ED9 H\xE0 N\u1ED9i (7 ch\u1ED7)',
      hn:'<strong>4 b\xE3i \u0111\u1ED7 c\xF2n ch\u1ED7:</strong> B\xE3i Tr\xE0ng Thi (4 ch\u1ED7 SUV) \xB7 Vincom B\xE0 Tri\u1EC7u (6 ch\u1ED7) \xB7 B\xE3i \u0110inh Ti\xEAn Ho\xE0ng (3 ch\u1ED7)',
    }},
  };
  const d = demos[type]; if (!d) return;
  const el = document.getElementById(d.id); if (!el) return;
  const text = typeof d.html === 'object' ? (d.html[arg]||d.html.q1) : d.html;
  el.className = 'util-result show ' + d.cls;
  el.innerHTML = text;
}

function enrichGaragesWithProvinces() {
  const extraGarages = {
    DN: [
      { name: ' \u0110\xE0 N\u1EB5ng', type: 'official', address: '12-14 Nguy\u1EC5n H\u1EEFu Th\u1ECD, H\u1EA3i Ch\xE2u, \u0110\xE0 N\u1EB5ng', bh: ['Liberty', 'PVI', 'B\u1EA3o Vi\u1EC7t'], claims: 410, rating: 4.8, note: '\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng mi\u1EC1n Trung. Quy tr\xECnh b\u1ED3i th\u01B0\u1EDDng b\u1EA3o hi\u1EC3m nhanh ch\xF3ng.' },
      { name: ' Auto Service S\xF4ng H\xE0n', type: 'authorized', address: '228 \u0110i\u1EC7n Bi\xEAn Ph\u1EE7, Thanh Kh\xEA, \u0110\xE0 N\u1EB5ng', bh: ['PVI', 'B\u1EA3o Vi\u1EC7t'], claims: 280, rating: 4.6, note: 'Garage \u1EE7y quy\u1EC1n uy t\xEDn. Chuy\xEAn \u0111\u1ED3ng s\u01A1n, s\u1EEDa ch\u1EEFa ph\u1EE5c h\u1ED3i sau tai n\u1EA1n.' }
    ],
    BD: [
      { name: ' B\xECnh D\u01B0\u01A1ng', type: 'official', address: '\u0110\u1EA1i l\u1ED9 B\xECnh D\u01B0\u01A1ng, Thu\u1EADn An, B\xECnh D\u01B0\u01A1ng', bh: ['Liberty', 'PVI'], claims: 350, rating: 4.7, note: 'Chi nh\xE1nh 3S ch\xEDnh h\xE3ng l\u1EDBn nh\u1EA5t B\xECnh D\u01B0\u01A1ng. Garage \u0111\u1ED3ng s\u01A1n hi\u1EC7n \u0111\u1EA1i.' },
      { name: ' Garage Tr\u01B0\u1EDDng An B\xECnh D\u01B0\u01A1ng', type: 'authorized', address: 'Khu ph\u1ED1 \u0110\xF4ng Chi\xEAu, T\xE2n \u0110\xF4ng Hi\u1EC7p, D\u0129 An, B\xECnh D\u01B0\u01A1ng', bh: ['PVI', 'MIC'], claims: 210, rating: 4.5, note: 'Garage li\xEAn k\u1EBFt b\u1EA3o hi\u1EC3m l\xE2u n\u0103m, h\u1ED7 tr\u1EE3 gi\xE1m \u0111\u1ECBnh b\u1ED3i th\u01B0\u1EDDng t\u1EA1i ch\u1ED7.' }
    ],
    HP: [
      { name: ' H\u1EA3i Ph\xF2ng', type: 'official', address: 'L\xEA H\u1ED3ng Phong, Ng\xF4 Quy\u1EC1n, H\u1EA3i Ph\xF2ng', bh: ['Liberty', 'B\u1EA3o Vi\u1EC7t'], claims: 320, rating: 4.7, note: '\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng H\u1EA3i Ph\xF2ng. C\u01A1 s\u1EDF v\u1EADt ch\u1EA5t ti\xEAu chu\u1EA9n 3S to\xE0n c\u1EA7u.' }
    ],
    CT: [
      { name: ' C\u1EA7n Th\u01A1', type: 'official', address: '\u0110\u01B0\u1EDDng Quang Trung, C\xE1i R\u0103ng, C\u1EA7n Th\u01A1', bh: ['PVI', 'B\u1EA3o Vi\u1EC7t'], claims: 290, rating: 4.7, note: '\u0110\u1EA1i l\xFD ch\xEDnh h\xE3ng C\xE1i R\u0103ng. H\u1ED7 tr\u1EE3 c\u1EE9u h\u1ED9 24/7 khu v\u1EF1c T\xE2y Nam B\u1ED9.' }
    ]
  };

  for (const [brandId, b] of Object.entries(BRANDS)) {
    if (!b.garages) b.garages = [];
    if (b.garages.some(g => g.city === 'DN')) continue;
    
    const brandName = b.name;
    for (const [cityCode, list] of Object.entries(extraGarages)) {
      list.forEach(item => {
        const enrichedItem = {
          name: item.name.startsWith(' Garage') || item.name.startsWith(' Auto')
            ? item.name.trim() 
            : \\\`\\\${brandName}\\\${item.name}\\\`,
          type: item.type,
          city: cityCode,
          address: item.address,
          bh: [...item.bh],
          claims: item.claims,
          rating: item.rating,
          note: item.note.replace('Ch\xEDnh h\xE3ng', \\\`Ch\xEDnh h\xE3ng \\\${brandName}\\\`).replace('\u1EE7y quy\u1EC1n', \\\`\u1EE7y quy\u1EC1n \\\${brandName}\\\`)
        };
        b.garages.push(enrichedItem);
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const gsDate = document.getElementById('gs-date');
  if (gsDate) { const d = new Date(); gsDate.textContent = \\\`\\\${String(d.getDate()).padStart(2,'0')}/\\\${String(d.getMonth()+1).padStart(2,'0')}\\\`; }

  enrichGaragesWithProvinces();

  const pathParts = location.pathname.split('/').filter(Boolean);
  let id = null;
  let model = null;
  
  // pathParts: ['tien-ich-giao-thong','hang-xe','toyota','camry'] or ['hang-xe','toyota','camry']
  const hangXeIdx = pathParts.indexOf('hang-xe');
  if (hangXeIdx !== -1) {
    id = pathParts[hangXeIdx + 1] || null;
    model = pathParts[hangXeIdx + 2] || null;
  }
  
  // Fallback to URL search parameters for backward compatibility
  if (!id) {
    const params = new URLSearchParams(location.search);
    id = params.get('id') || params.get('brand');
    model = params.get('model');
  }
  
  if (id && model && BRANDS[id]) renderModelDetail(id, model);
  else if (id && BRANDS[id]) renderDetail(id);
  else renderListing();

  if (window.lucide) lucide.createIcons();
});

/* \u2500\u2500 BOOKING MODAL JS \u2500\u2500 */
const BK_SVC_CHIPS = ['B\u1EA3o d\u01B0\u1EE1ng \u0111\u1ECBnh k\u1EF3','Thay d\u1EA7u nh\u1EDBt','Thay l\u1ED1p','Ki\u1EC3m tra phanh','\u0110\u1ED3ng s\u01A1n / th\xE2n v\u1ECF','\u0110i\u1EC7n - \u0111i\u1EC1u h\xF2a','\u0110\u0103ng ki\u1EC3m h\u1ED7 tr\u1EE3','S\u1EEDa ch\u1EEFa kh\xE1c'];
const BK_SLOTS = ['7:30','8:00','8:30','9:00','10:00','10:30','13:30','14:00','15:00','15:30','16:00'];
const BK_FULL  = ['9:00','14:00'];

let bkState = { chips:[], date:null, slot:null };

function openBookingModal(name, city, address) {
  bkState = { chips:[], date:null, slot:null };
  const overlay = document.getElementById('bk-overlay');
  document.getElementById('bk-garage-name').textContent = name;
  document.getElementById('bk-garage-sub').innerHTML =
    \\\`<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> \\\${city ? getCityLabel(city)+' \xB7 ' : ''}\\\${address||''}\\\`;
  renderBkBody();
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
  document.getElementById('bk-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function renderBkBody() {
  const days = ['CN','T2','T3','T4','T5','T6','T7'];
  const months = ['Th1','Th2','Th3','Th4','Th5','Th6','Th7','Th8','Th9','Th10','Th11','Th12'];
  const dateItems = [];
  let d = new Date(); d.setDate(d.getDate()+1);
  while (dateItems.length < 8) {
    if (d.getDay() !== 0) {
      dateItems.push({ key: d.toISOString().slice(0,10), day: days[d.getDay()], num: d.getDate(), month: months[d.getMonth()] });
    }
    d.setDate(d.getDate()+1);
  }
  if (!bkState.date) bkState.date = dateItems[0].key;

  const chipHtml = BK_SVC_CHIPS.map(c => \\\`
    <button class="bk-svc-chip\\\${bkState.chips.includes(c)?' on':''}" onclick="bkToggleChip('\\\${c}')">\\\${c}</button>\\\`).join('');

  const dateHtml = dateItems.map(dt => \\\`
    <button class="bk-date\\\${bkState.date===dt.key?' on':''}" onclick="bkPickDate('\\\${dt.key}')">
      <div class="bk-date-day">\\\${dt.day}</div>
      <div class="bk-date-num">\\\${dt.num}</div>
      <div class="bk-date-month">\\\${dt.month}</div>
    </button>\\\`).join('');

  const slotHtml = BK_SLOTS.map(s => {
    const full = BK_FULL.includes(s);
    return \\\`<button class="bk-slot\\\${bkState.slot===s?' on':''}\\\${full?' full':''}" \\\${full?'disabled':''} onclick="bkPickSlot('\\\${s}')">\\\${s}</button>\\\`;
  }).join('');

  document.getElementById('bk-body').innerHTML = \\\`
    <div class="bk-group">
      <div class="bk-flabel">D\u1ECBch v\u1EE5 c\u1EA7n l\xE0m</div>
      <div class="bk-svc-chips">\\\${chipHtml}</div>
      <textarea class="bk-textarea" id="bk-note" placeholder="M\xF4 t\u1EA3 th\xEAm t\xECnh tr\u1EA1ng xe ho\u1EB7c y\xEAu c\u1EA7u c\u1EE5 th\u1EC3..." rows="2" oninput="bkValidate()"></textarea>
    </div>
    <div class="bk-group">
      <div class="bk-flabel">Ch\u1ECDn ng\xE0y</div>
      <div class="bk-dates">\\\${dateHtml}</div>
    </div>
    <div class="bk-group">
      <div class="bk-flabel">Ch\u1ECDn gi\u1EDD <span style="font-size:10px;color:var(--gray-300);font-weight:500;text-transform:none;letter-spacing:0">\u2014 m\u1EDD = \u0111\xE3 k\xEDn</span></div>
      <div class="bk-slots">\\\${slotHtml}</div>
    </div>
    <div class="bk-group">
      <div class="bk-flabel">Th\xF4ng tin li\xEAn h\u1EC7</div>
      <div class="bk-fields">
        <input class="bk-input" id="bk-name" placeholder="H\u1ECD v\xE0 t\xEAn" value="\\\${bkState._name||''}" oninput="bkState._name=this.value;bkValidate()">
        <input class="bk-input" id="bk-phone" placeholder="S\u1ED1 \u0111i\u1EC7n tho\u1EA1i" type="tel" value="\\\${bkState._phone||''}" oninput="bkState._phone=this.value;bkValidate()">
      </div>
    </div>\\\`;
  bkValidate();
}

function bkToggleChip(c) {
  const i = bkState.chips.indexOf(c);
  if (i >= 0) bkState.chips.splice(i,1); else bkState.chips.push(c);
  renderBkBody();
}
function bkPickDate(key) { bkState.date=key; renderBkBody(); }
function bkPickSlot(s)   { bkState.slot=s;   renderBkBody(); }

function bkValidate() {
  const btn   = document.getElementById('bk-submit');
  if (!btn) return;
  const name  = document.getElementById('bk-name')?.value.trim();
  const phone = document.getElementById('bk-phone')?.value.trim();
  const note  = document.getElementById('bk-note')?.value.trim();
  const hasSvc = bkState.chips.length > 0 || note;
  btn.disabled = !(hasSvc && bkState.date && bkState.slot && name && phone.length >= 9);
}

function bkSubmit() {
  const d = new Date(bkState.date);
  const days = ['Ch\u1EE7 nh\u1EADt','Th\u1EE9 2','Th\u1EE9 3','Th\u1EE9 4','Th\u1EE9 5','Th\u1EE9 6','Th\u1EE9 7'];
  const dateLabel = \\\`\\\${days[d.getDay()]}, \\\${d.getDate()}/\\\${d.getMonth()+1}/\\\${d.getFullYear()}\\\`;
  const svcLabel = bkState.chips.length ? bkState.chips.join(', ') : 'Theo m\xF4 t\u1EA3';
  const garageName = document.getElementById('bk-garage-name').textContent;
  document.getElementById('bk-body').innerHTML = \\\`
    <div class="bk-success">
      <div class="bk-success-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div class="bk-success-title">\u0110\u1EB7t l\u1ECBch th\xE0nh c\xF4ng!</div>
      <div class="bk-success-sub">Garage s\u1EBD g\u1ECDi x\xE1c nh\u1EADn trong v\xF2ng 30 ph\xFAt.</div>
      <div class="bk-success-summary">
        <div class="bk-success-row"><span class="bk-success-row-label">Garage</span><span class="bk-success-row-val">\\\${garageName}</span></div>
        <div class="bk-success-row"><span class="bk-success-row-label">D\u1ECBch v\u1EE5</span><span class="bk-success-row-val">\\\${svcLabel}</span></div>
        <div class="bk-success-row"><span class="bk-success-row-label">Ng\xE0y gi\u1EDD</span><span class="bk-success-row-val">\\\${dateLabel} \xB7 \\\${bkState.slot}</span></div>
      </div>
    </div>\\\`;
  document.getElementById('bk-submit').textContent = '\u0110\xF3ng';
  document.getElementById('bk-submit').disabled = false;
  document.getElementById('bk-submit').onclick = closeBookingModal;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('bk-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('bk-overlay')) closeBookingModal();
  });
});

window.openNavSidebar = function() {
  document.getElementById('navSidebar').classList.add('open');
  document.getElementById('navOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
};
window.closeNavSidebar = function() {
  document.getElementById('navSidebar').classList.remove('open');
  document.getElementById('navOverlay').classList.remove('open');
  document.body.style.overflow = '';
};

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
    {brand:'volkswagen',label:'Volkswagen',color:'#001E50',cat:'\xD4 t\xF4',models:[
      {name:'Tiguan',slug:'tiguan',type:'SUV'},
      {name:'Teramont',slug:'teramont',type:'SUV'},
      {name:'Touareg',slug:'touareg',type:'SUV'},
      {name:'Passat',slug:'passat',type:'Sedan'},
      {name:'Polo',slug:'polo',type:'Hatchback'},
      {name:'Scirocco',slug:'scirocco',type:'Coupe'},
    ]},
    {brand:'chevrolet',label:'Chevrolet',color:'#D4AF37',cat:'\xD4 t\xF4',models:[
      {name:'Colorado',slug:'colorado',type:'B\xE1n t\u1EA3i'},
      {name:'TrailBlazer',slug:'trailblazer',type:'SUV'},
      {name:'Captiva',slug:'captiva',type:'SUV'},
      {name:'Cruze',slug:'cruze',type:'Sedan'},
      {name:'Spark',slug:'spark',type:'Hatchback'},
      {name:'Orlando',slug:'orlando',type:'MPV'},
    ]},
    {brand:'porsche',label:'Porsche',color:'#8B0000',cat:'\xD4 t\xF4',models:[
      {name:'Macan',slug:'macan',type:'SUV'},
      {name:'Cayenne',slug:'cayenne',type:'SUV'},
      {name:'Taycan',slug:'taycan',type:'EV'},
      {name:'Panamera',slug:'panamera',type:'Sedan'},
      {name:'911',slug:'911',type:'Coupe'},
    ]},
    {brand:'jaguar',label:'Jaguar',color:'#005A2B',cat:'\xD4 t\xF4',models:[
      {name:'F-PACE',slug:'f-pace',type:'SUV'},
      {name:'E-PACE',slug:'e-pace',type:'SUV'},
      {name:'XE',slug:'xe',type:'Sedan'},
      {name:'XF',slug:'xf',type:'Sedan'},
      {name:'XJ',slug:'xj',type:'Sedan'},
      {name:'F-TYPE',slug:'f-type',type:'Coupe'},
    ]},
    {brand:'skoda',label:'\u0160koda',color:'#4CAF50',cat:'\xD4 t\xF4',models:[
      {name:'Karoq',slug:'karoq',type:'SUV'},
      {name:'Kodiaq',slug:'kodiaq',type:'SUV'},
      {name:'Slavia',slug:'slavia',type:'Sedan'},
      {name:'Kushaq',slug:'kushaq',type:'SUV'},
    ]},
    {brand:'mini',label:'MINI',color:'#231F20',cat:'\xD4 t\xF4',models:[
      {name:'Cooper',slug:'cooper',type:'Hatchback'},
      {name:'Cooper S',slug:'cooper-s',type:'Hatchback'},
      {name:'Countryman',slug:'countryman',type:'SUV'},
      {name:'JCW',slug:'jcw',type:'Hatchback'},
    ]},
    {brand:'renault',label:'Renault',color:'#FFCD00',cat:'\xD4 t\xF4',models:[
      {name:'Megane',slug:'megane',type:'Hatchback'},
      {name:'Koleos',slug:'koleos',type:'SUV'},
    ]},
    {brand:'geely',label:'Geely',color:'#0047AB',cat:'\xD4 t\xF4',models:[
      {name:'Coolray',slug:'coolray',type:'Crossover'},
      {name:'Emgrand',slug:'emgrand',type:'Sedan'},
    ]},
    {brand:'omoda',label:'Omoda',color:'#E31837',cat:'\xD4 t\xF4',models:[
      {name:'C5',slug:'c5',type:'SUV'},
    ]},
    {brand:'jaecoo',label:'Jaecoo',color:'#2F4F4F',cat:'\xD4 t\xF4',models:[
      {name:'J7',slug:'j7',type:'SUV'},
    ]},
    {brand:'acura',label:'Acura',color:'#CC0000',cat:'\xD4 t\xF4',models:[
      {name:'RDX',slug:'rdx',type:'SUV'},
      {name:'MDX',slug:'mdx',type:'SUV'},
      {name:'TLX',slug:'tlx',type:'Sedan'},
      {name:'ILX',slug:'ilx',type:'Sedan'},
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
    const groups = {};
    results.forEach(r => { if (!groups[r.cat]) groups[r.cat] = []; groups[r.cat].push(r); });
    let html = '';
    Object.entries(groups).forEach(([cat, items], gi) => {
      if (gi > 0) html += '<div class="nsd-divider"></div>';
      html += \\\`<div class="nsd-section-label">\\\${cat}</div>\\\`;
      items.forEach((item) => {
        const isEV = item.type === 'EV';
        const isMoto = item.cat === 'Xe m\xE1y';
        const typeClass = isEV ? 'ev' : isMoto ? 'motorbike' : '';
        const url = getUrl(item);
        html += \\\`<a class="nsd-item" href="\\\${url}">
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

  function openDrop() { const q = inp.value.trim(); if (!q) showEmpty(); drop.classList.add('open'); }
  function closeDrop() { drop.classList.remove('open'); activeIdx = -1; }

  inp.addEventListener('input', () => {
    const q = inp.value.trim().toLowerCase();
    if (!q) { showEmpty(); drop.classList.add('open'); return; }
    const results = INDEX.filter(r => r.search.includes(q)).slice(0, 12);
    renderResults(results);
    drop.classList.add('open');
  });
  inp.addEventListener('focus', () => { clearTimeout(blurTimer); openDrop(); });
  inp.addEventListener('blur', () => { blurTimer = setTimeout(closeDrop, 160); });

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
      if (activeIdx >= 0 && items[activeIdx]) { e.preventDefault(); items[activeIdx].click(); }
    } else if (e.key === 'Escape') { closeDrop(); inp.blur(); }
  });

  document.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement !== inp && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault(); inp.focus();
    }
  });

  window.closeNavSearch = closeDrop;

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
<\/script>  <div id="gmap-overlay" class="gmap-overlay" role="dialog" aria-modal="true" onclick="if(event.target===this)closeGarageMap()"> <div class="gmap-sheet"> <div class="gmap-header"> <div> <div class="gmap-garage-name" id="gmap-name"></div> <div class="gmap-garage-addr" id="gmap-addr"></div> </div> <button class="gmap-close" onclick="closeGarageMap()"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> </button> </div> <div class="gmap-body"> <div class="gmap-loading" id="gmap-loading"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>
\u0110ang t\xECm v\u1ECB tr\xED...
</div> <div id="gmapEl"></div> </div> <div class="gmap-footer"> <a id="gmap-dir" href="#" target="_blank" class="gmap-dir-btn"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
Ch\u1EC9 \u0111\u01B0\u1EDDng
</a> <span class="gmap-osm-note">\xA9 OpenStreetMap contributors</span> </div> </div> </div> <script>
(function() {
  let _map = null;
  let _marker = null;

  window.openGarageMap = async function(name, address) {
    const overlay = document.getElementById('gmap-overlay');
    document.getElementById('gmap-name').textContent = name;
    document.getElementById('gmap-addr').textContent = address;
    document.getElementById('gmap-loading').classList.remove('hidden');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Geocode via Nominatim
    let lat = 10.7769, lng = 106.7009; // fallback HCM
    try {
      const q = encodeURIComponent(address + ', Vi\u1EC7t Nam');
      const res = await fetch(\\\`https://nominatim.openstreetmap.org/search?q=\\\${q}&format=json&limit=1\\\`, {
        headers: { 'Accept-Language': 'vi' }
      });
      const data = await res.json();
      if (data && data[0]) {
        lat = parseFloat(data[0].lat);
        lng = parseFloat(data[0].lon);
      }
    } catch (_) {}

    document.getElementById('gmap-loading').classList.add('hidden');

    // Update directions link
    document.getElementById('gmap-dir').href =
      \\\`https://www.google.com/maps/dir/?api=1&destination=\\\${lat},\\\${lng}\\\`;

    // Init or reset map
    const mapEl = document.getElementById('gmapEl');
    if (_map) {
      _map.remove();
      _map = null;
      _marker = null;
    }

    _map = new maplibregl.Map({
      container: mapEl,
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
      center: [lng, lat],
      zoom: 15,
      attributionControl: false,
    });

    _map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');

    // Custom pink marker
    const el = document.createElement('div');
    el.style.cssText = 'width:36px;height:36px;background:#eb2f96;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.3)';
    _marker = new maplibregl.Marker({ element: el })
      .setLngLat([lng, lat])
      .setPopup(new maplibregl.Popup({ offset: 28, closeButton: false })
        .setHTML(\\\`<div style="font-size:13px;font-weight:700;color:#1c1c1e">\\\${name}</div><div style="font-size:11px;color:#6b7280;margin-top:2px">\\\${address}</div>\\\`))
      .addTo(_map);

    _marker.togglePopup();
  };

  window.closeGarageMap = function() {
    document.getElementById('gmap-overlay').classList.remove('open');
    document.body.style.overflow = '';
    if (_map) { _map.remove(); _map = null; _marker = null; }
  };

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeGarageMap();
  });
})();
<\/script>  <div id="bk-overlay" class="bk-overlay" role="dialog" aria-modal="true"> <div id="bk-sheet" class="bk-sheet"> <div class="bk-handle-bar"></div> <div class="bk-header"> <div class="bk-garage-name" id="bk-garage-name"></div> <div class="bk-garage-sub" id="bk-garage-sub"></div> <button class="bk-close" onclick="closeBookingModal()"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> </button> </div> <div class="bk-body" id="bk-body"></div> <div class="bk-footer"> <button class="bk-submit" id="bk-submit" disabled onclick="bkSubmit()">X\xE1c nh\u1EADn \u0111\u1EB7t l\u1ECBch</button> </div> </div> </div> `])), renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(`<style>${rawCss}</style>`)}` }), maybeRenderHead(), renderComponent($$result2, "HangXeHeroMotion", HangXeHeroMotion, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/components/hang-xe/HangXeHeroMotion", "client:component-export": "default" })) })}`;
}, "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/components/HangXeApp.astro", void 0);

export { $$HangXeApp as $ };
