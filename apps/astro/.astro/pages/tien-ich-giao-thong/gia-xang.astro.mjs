import { c as createComponent, e as renderComponent, b as renderTemplate, f as renderScript, m as maybeRenderHead, F as Fragment$1, u as unescapeHTML } from '../../chunks/astro/server_BMOddyS3.mjs';
import 'piccolore';
import { $ as $$VehicleHub } from '../../chunks/VehicleHub_Msovdq2n.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, RefreshCw, Sparkles, Fuel, TrendingDown, CheckCircle2, ArrowDownRight, ArrowUpRight, Calculator, BellRing, ShieldCheck, Bike, Car, Info, Zap, ArrowRight } from 'lucide-react';
import { f as fireConfetti } from '../../chunks/confetti_DUZ25cbN.mjs';
import * as RechartsPrimitive from 'recharts';
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Area } from 'recharts';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

function GasPriceHeroMotion() {
  const [region, setRegion] = useState("1");
  return /* @__PURE__ */ jsxs("section", { style: {
    background: "linear-gradient(135deg, #1c171a 0%, #2b1f2b 50%, #171118 100%)",
    padding: "40px 20px 48px",
    color: "#ffffff",
    position: "relative",
    overflow: "hidden",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }, children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        animate: {
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15]
        },
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        style: {
          position: "absolute",
          top: "-100px",
          right: "10%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #eb2f96 0%, transparent 70%)",
          pointerEvents: "none"
        }
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        animate: {
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        },
        transition: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 },
        style: {
          position: "absolute",
          bottom: "-120px",
          left: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #2563eb 0%, transparent 70%)",
          pointerEvents: "none"
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { style: { maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px", alignItems: "center", position: "relative", zIndex: 2 }, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#a09aa5", marginBottom: "14px" }, children: [
          /* @__PURE__ */ jsx("a", { href: "/", style: { color: "#a09aa5", textDecoration: "none" }, children: "Trang chủ" }),
          /* @__PURE__ */ jsx("span", { children: "›" }),
          /* @__PURE__ */ jsx("a", { href: "/tien-ich-giao-thong", style: { color: "#a09aa5", textDecoration: "none" }, children: "Tiện ích giao thông" }),
          /* @__PURE__ */ jsx("span", { children: "›" }),
          /* @__PURE__ */ jsx("span", { style: { color: "#ffffff", fontWeight: 700 }, children: "Giá xăng dầu" })
        ] }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -16 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.4 },
            style: {
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 12px",
              borderRadius: "20px",
              background: "rgba(235,47,150,0.18)",
              border: "1px solid rgba(235,47,150,0.35)",
              fontSize: "12px",
              fontWeight: 800,
              color: "#ffd6ee",
              marginBottom: "14px"
            },
            children: [
              /* @__PURE__ */ jsx("span", { style: { width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", display: "inline-block", boxShadow: "0 0 8px #4ade80" } }),
              "Cập nhật thời gian thực theo Liên Bộ Công Thương - Tài Chính"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: 0.1 },
            style: { fontSize: "36px", fontWeight: 900, color: "#ffffff", margin: "0 0 10px", letterSpacing: "-0.03em", lineHeight: 1.15 },
            children: [
              "Giá Xăng Dầu Hôm Nay ",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { style: { background: "linear-gradient(90deg, #eb2f96 0%, #f472b6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }, children: "Chính Xác & Minh Bạch" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: 0.15 },
            style: { fontSize: "14.5px", color: "#c8c3cc", margin: "0 0 24px", lineHeight: 1.55, maxWidth: "520px" },
            children: "Tra cứu giá RON 95-III, E5 RON 92, Diesel vùng 1 & vùng 2. Tự động tính số lít xăng và ước tính ngân sách nhiên liệu hàng tháng."
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: 0.2 },
            style: { display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" },
            children: [
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", background: "rgba(255,255,255,0.08)", borderRadius: "12px", padding: "3px", border: "1px solid rgba(255,255,255,0.12)" }, children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setRegion("1"),
                    style: {
                      padding: "6px 14px",
                      borderRadius: "9px",
                      fontSize: "12px",
                      fontWeight: 800,
                      cursor: "pointer",
                      border: "none",
                      background: region === "1" ? "#eb2f96" : "transparent",
                      color: "#ffffff",
                      boxShadow: region === "1" ? "0 2px 8px rgba(235,47,150,0.4)" : "none",
                      transition: "all 0.15s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px"
                    },
                    children: [
                      /* @__PURE__ */ jsx(MapPin, { style: { width: "13px", height: "13px" } }),
                      " Vùng 1 (Đồng Bằng)"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setRegion("2"),
                    style: {
                      padding: "6px 14px",
                      borderRadius: "9px",
                      fontSize: "12px",
                      fontWeight: 800,
                      cursor: "pointer",
                      border: "none",
                      background: region === "2" ? "#eb2f96" : "transparent",
                      color: "#ffffff",
                      boxShadow: region === "2" ? "0 2px 8px rgba(235,47,150,0.4)" : "none",
                      transition: "all 0.15s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px"
                    },
                    children: [
                      /* @__PURE__ */ jsx(MapPin, { style: { width: "13px", height: "13px" } }),
                      " Vùng 2 (Miền Núi)"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { style: { fontSize: "12px", color: "#a09aa5", display: "flex", alignItems: "center", gap: "5px" }, children: [
                /* @__PURE__ */ jsx(RefreshCw, { style: { width: "13px", height: "13px", color: "#eb2f96" } }),
                "Kỳ điều hành: 15h00 31/07/2026"
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
                animate: { y: [0, -6, 0] },
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                style: {
                  position: "absolute",
                  top: "-12px",
                  right: "20px",
                  background: "#eb2f96",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: 900,
                  padding: "4px 12px",
                  borderRadius: "20px",
                  boxShadow: "0 4px 14px rgba(235,47,150,0.5)",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                },
                children: [
                  /* @__PURE__ */ jsx(Sparkles, { style: { width: "12px", height: "12px" } }),
                  " Đổ xăng tích điểm MoMo"
                ]
              }
            ),
            /* @__PURE__ */ jsxs("svg", { width: "100%", height: "180", viewBox: "0 0 320 180", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
              /* @__PURE__ */ jsx("rect", { x: "10", y: "150", width: "300", height: "4", fill: "#3d3040", rx: "2" }),
              /* @__PURE__ */ jsx("rect", { x: "40", y: "30", width: "240", height: "14", rx: "4", fill: "#eb2f96" }),
              /* @__PURE__ */ jsx("rect", { x: "30", y: "24", width: "260", height: "10", rx: "3", fill: "#c22181" }),
              /* @__PURE__ */ jsx("text", { x: "160", y: "42", textAnchor: "middle", fontSize: "11", fontWeight: "900", fill: "#ffffff", fontFamily: "sans-serif", children: "PUMP STATION" }),
              /* @__PURE__ */ jsx("rect", { x: "60", y: "44", width: "10", height: "106", fill: "#5c5060", rx: "2" }),
              /* @__PURE__ */ jsx("rect", { x: "250", y: "44", width: "10", height: "106", fill: "#5c5060", rx: "2" }),
              /* @__PURE__ */ jsx("rect", { x: "90", y: "80", width: "40", height: "70", rx: "6", fill: "#ffffff" }),
              /* @__PURE__ */ jsx("rect", { x: "96", y: "88", width: "28", height: "20", rx: "4", fill: "#eb2f96", opacity: "0.15" }),
              /* @__PURE__ */ jsx("rect", { x: "100", y: "92", width: "20", height: "4", rx: "2", fill: "#eb2f96" }),
              /* @__PURE__ */ jsx("rect", { x: "100", y: "100", width: "12", height: "4", rx: "2", fill: "#eb2f96" }),
              /* @__PURE__ */ jsx(
                motion.circle,
                {
                  cx: "110",
                  cy: "115",
                  r: "3",
                  fill: "#eb2f96",
                  animate: { y: [0, 20, 0], opacity: [0, 1, 0] },
                  transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.g,
                {
                  animate: { x: [0, 8, 0] },
                  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  children: [
                    /* @__PURE__ */ jsx("rect", { x: "170", y: "110", width: "110", height: "34", rx: "10", fill: "#ffffff" }),
                    /* @__PURE__ */ jsx("path", { d: "M185 110 L200 92 L250 92 L265 110 Z", fill: "#ffffff" }),
                    /* @__PURE__ */ jsx("rect", { x: "202", y: "96", width: "20", height: "12", rx: "2", fill: "#1c171a", opacity: "0.2" }),
                    /* @__PURE__ */ jsx("rect", { x: "228", y: "96", width: "20", height: "12", rx: "2", fill: "#1c171a", opacity: "0.2" }),
                    /* @__PURE__ */ jsxs(
                      motion.g,
                      {
                        animate: { rotate: 360 },
                        transition: { duration: 2, repeat: Infinity, ease: "linear" },
                        style: { transformOrigin: "195px 144px" },
                        children: [
                          /* @__PURE__ */ jsx("circle", { cx: "195", cy: "144", r: "10", fill: "#1c171a" }),
                          /* @__PURE__ */ jsx("circle", { cx: "195", cy: "144", r: "4", fill: "#ffffff" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      motion.g,
                      {
                        animate: { rotate: 360 },
                        transition: { duration: 2, repeat: Infinity, ease: "linear" },
                        style: { transformOrigin: "255px 144px" },
                        children: [
                          /* @__PURE__ */ jsx("circle", { cx: "255", cy: "144", r: "10", fill: "#1c171a" }),
                          /* @__PURE__ */ jsx("circle", { cx: "255", cy: "144", r: "4", fill: "#ffffff" })
                        ]
                      }
                    )
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", justifyBetween: "space-between", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "14px", marginTop: "10px" }, children: [
              /* @__PURE__ */ jsxs("div", { style: { fontSize: "11.5px", color: "#c8c3cc" }, children: [
                "Giá RON 95-III ",
                region === "1" ? "Vùng 1" : "Vùng 2",
                ":"
              ] }),
              /* @__PURE__ */ jsxs("div", { style: { fontSize: "15px", fontWeight: 900, color: "#4ade80", fontVariantNumeric: "tabular-nums" }, children: [
                region === "1" ? "22.850đ" : "23.300đ",
                " /lít"
              ] })
            ] })
          ] })
        }
      )
    ] })
  ] });
}

const GAS_TYPES = [
  { id: "ron95", name: "Xăng RON 95-III", price: 22850, change: -420, unit: "đ/lít", popular: true },
  { id: "e5ron92", name: "Xăng E5 RON 92", price: 22380, change: -380, unit: "đ/lít" },
  { id: "diesel", name: "Dầu Diesel 0.05S", price: 20650, change: 150, unit: "đ/lít" }
];
const PRESETS = [5e4, 1e5, 2e5, 5e5, 1e6];
const TANK_CAPACITIES = [
  { label: "Xe máy (4L)", value: 4 },
  { label: "Sedan (45L)", value: 45 },
  { label: "SUV (60L)", value: 60 },
  { label: "Bán tải (75L)", value: 75 }
];
function GasPriceMotionWidget() {
  const [selectedGas, setSelectedGas] = useState(GAS_TYPES[0]);
  const [amount, setAmount] = useState(1e5);
  const [tankCapacity, setTankCapacity] = useState(45);
  const calculatedLiters = (amount / selectedGas.price).toFixed(2);
  const fullTankCost = selectedGas.price * tankCapacity;
  const handleFullTank = (capacity) => {
    setTankCapacity(capacity);
    setAmount(selectedGas.price * capacity);
    fireConfetti();
  };
  const handleAmountInputChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val)) {
      setAmount(Math.max(0, val));
    } else {
      setAmount(0);
    }
  };
  return /* @__PURE__ */ jsx("section", { style: { maxWidth: "1240px", margin: "32px auto", padding: "0 20px", fontFamily: "'MoMoTrustSans', -apple-system, sans-serif" }, children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3 },
      style: {
        background: "#ffffff",
        borderRadius: "20px",
        border: "1px solid #e2e8f0",
        boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
        overflow: "hidden"
      },
      children: [
        /* @__PURE__ */ jsxs("div", { style: {
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          padding: "20px 24px",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px"
        }, children: [
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "14px" }, children: [
            /* @__PURE__ */ jsx("div", { style: {
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              background: "rgba(235,47,150,0.2)",
              border: "1px solid rgba(235,47,150,0.4)",
              color: "#f472b6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            }, children: /* @__PURE__ */ jsx(Fuel, { style: { width: "22px", height: "22px" } }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { style: { fontSize: "18px", fontWeight: 900, color: "#ffffff", margin: 0, letterSpacing: "-0.01em" }, children: "Bảng Giá Xăng & Công Cụ Tính Tiền Xăng Trực Tuyến" }),
              /* @__PURE__ */ jsx("p", { style: { fontSize: "12.5px", color: "#94a3b8", margin: "4px 0 0" }, children: "Cập nhật kỳ điều chỉnh mới nhất · Tự động tính số lít & tiền đổ đầy bình" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "12px",
            fontWeight: 700,
            color: "#4ade80",
            background: "rgba(22,163,74,0.15)",
            padding: "6px 12px",
            borderRadius: "8px",
            border: "1px solid rgba(22,163,74,0.3)"
          }, children: [
            /* @__PURE__ */ jsx(TrendingDown, { style: { width: "15px", height: "15px" } }),
            " Kỳ 31/07: Giá xăng giảm tới 420đ/lít"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 0 }, children: [
          /* @__PURE__ */ jsxs("div", { style: { padding: "24px", borderRight: "1px solid #f1f5f9" }, children: [
            /* @__PURE__ */ jsxs("div", { style: { marginBottom: "24px" }, children: [
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }, children: [
                /* @__PURE__ */ jsx("h3", { style: { fontSize: "12px", fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }, children: "1. Chọn loại nhiên liệu" }),
                /* @__PURE__ */ jsx("span", { style: { fontSize: "11.5px", color: "#94a3b8" }, children: "Vùng 1" })
              ] }),
              /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "10px" }, children: GAS_TYPES.map((gas) => {
                const isSelected = selectedGas.id === gas.id;
                return /* @__PURE__ */ jsxs(
                  "div",
                  {
                    onClick: () => setSelectedGas(gas),
                    style: {
                      position: "relative",
                      padding: "14px",
                      borderRadius: "12px",
                      border: isSelected ? "2px solid #eb2f96" : "1.5px solid #e2e8f0",
                      background: isSelected ? "#fff0f8" : "#ffffff",
                      boxShadow: isSelected ? "0 4px 12px rgba(235,47,150,0.12)" : "none",
                      cursor: "pointer",
                      transition: "all 0.15s ease",
                      userSelect: "none"
                    },
                    children: [
                      gas.popular && /* @__PURE__ */ jsx("span", { style: {
                        position: "absolute",
                        top: "-9px",
                        right: "8px",
                        background: "#eb2f96",
                        color: "#ffffff",
                        fontSize: "9px",
                        fontWeight: 800,
                        padding: "2px 6px",
                        borderRadius: "8px"
                      }, children: "Phổ biến" }),
                      /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }, children: [
                        /* @__PURE__ */ jsx("span", { style: { fontSize: "11.5px", fontWeight: 700, color: "#475569" }, children: gas.name }),
                        isSelected && /* @__PURE__ */ jsx(CheckCircle2, { style: { width: "15px", height: "15px", color: "#eb2f96" } })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { style: { fontSize: "17px", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.01em" }, children: [
                        gas.price.toLocaleString("vi-VN"),
                        " ",
                        /* @__PURE__ */ jsx("span", { style: { fontSize: "11px", fontWeight: 600, color: "#64748b" }, children: gas.unit })
                      ] }),
                      /* @__PURE__ */ jsx("div", { style: { marginTop: "6px" }, children: gas.change < 0 ? /* @__PURE__ */ jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: "2px", padding: "2px 6px", borderRadius: "5px", background: "#dcfce7", color: "#15803d", fontSize: "10.5px", fontWeight: 700 }, children: [
                        /* @__PURE__ */ jsx(ArrowDownRight, { style: { width: "11px", height: "11px" } }),
                        " Giảm ",
                        Math.abs(gas.change),
                        "đ"
                      ] }) : /* @__PURE__ */ jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: "2px", padding: "2px 6px", borderRadius: "5px", background: "#ffe4e6", color: "#e11d48", fontSize: "10.5px", fontWeight: 700 }, children: [
                        /* @__PURE__ */ jsx(ArrowUpRight, { style: { width: "11px", height: "11px" } }),
                        " Tăng ",
                        gas.change,
                        "đ"
                      ] }) })
                    ]
                  },
                  gas.id
                );
              }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { style: { marginBottom: "24px" }, children: [
              /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }, children: /* @__PURE__ */ jsx("h3", { style: { fontSize: "12px", fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }, children: "2. Nhập số tiền hoặc Kéo thanh trượt" }) }),
              /* @__PURE__ */ jsxs("div", { style: { background: "#f8fafc", padding: "16px", borderRadius: "12px", border: "1px solid #e2e8f0", marginBottom: "12px" }, children: [
                /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }, children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "number",
                      value: amount,
                      onChange: handleAmountInputChange,
                      step: 1e4,
                      min: 1e4,
                      max: 3e6,
                      style: {
                        flex: 1,
                        padding: "10px 14px",
                        borderRadius: "8px",
                        border: "1.5px solid #cbd5e1",
                        fontSize: "18px",
                        fontWeight: 900,
                        color: "#0f172a",
                        background: "#ffffff",
                        outline: "none"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { style: { fontSize: "14px", fontWeight: 800, color: "#475569" }, children: "VNĐ" })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "range",
                      min: 1e4,
                      max: 15e5,
                      step: 1e4,
                      value: amount,
                      onChange: (e) => setAmount(Number(e.target.value)),
                      style: {
                        width: "100%",
                        accentColor: "#eb2f96",
                        height: "6px",
                        cursor: "pointer"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "10.5px", color: "#94a3b8", marginTop: "4px", fontWeight: 600 }, children: [
                    /* @__PURE__ */ jsx("span", { children: "10.000đ" }),
                    /* @__PURE__ */ jsx("span", { children: "500.000đ" }),
                    /* @__PURE__ */ jsx("span", { children: "1.500.000đ" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px" }, children: PRESETS.map((preset) => /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setAmount(preset),
                  style: {
                    padding: "7px 12px",
                    borderRadius: "8px",
                    fontSize: "11.5px",
                    fontWeight: 700,
                    cursor: "pointer",
                    border: amount === preset ? "1.5px solid #0f172a" : "1px solid #cbd5e1",
                    background: amount === preset ? "#0f172a" : "#ffffff",
                    color: amount === preset ? "#ffffff" : "#475569",
                    transition: "all 0.15s ease"
                  },
                  children: [
                    preset.toLocaleString("vi-VN"),
                    "đ"
                  ]
                },
                preset
              )) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { style: { fontSize: "12px", fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 10px" }, children: "3. Đổ đầy bình theo dòng xe" }),
              /* @__PURE__ */ jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px" }, children: TANK_CAPACITIES.map((cap) => /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => handleFullTank(cap.value),
                  style: {
                    padding: "7px 12px",
                    borderRadius: "8px",
                    fontSize: "11.5px",
                    fontWeight: 700,
                    cursor: "pointer",
                    border: tankCapacity === cap.value ? "1.5px solid #eb2f96" : "1px solid #cbd5e1",
                    background: tankCapacity === cap.value ? "#eb2f96" : "#ffffff",
                    color: tankCapacity === cap.value ? "#ffffff" : "#475569",
                    transition: "all 0.15s ease"
                  },
                  children: cap.label
                },
                cap.value
              )) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: { background: "#f8fafc", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px" }, children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }, children: [
                /* @__PURE__ */ jsxs("h3", { style: { fontSize: "14px", fontWeight: 800, color: "#0f172a", margin: 0, display: "flex", alignItems: "center", gap: "6px" }, children: [
                  /* @__PURE__ */ jsx(Calculator, { style: { width: "16px", height: "16px", color: "#eb2f96" } }),
                  " Kết Quả Ước Tính Chi Tiết"
                ] }),
                /* @__PURE__ */ jsx("span", { style: { fontSize: "12px", fontWeight: 700, color: "#64748b" }, children: selectedGas.name })
              ] }),
              /* @__PURE__ */ jsxs("div", { style: { background: "#ffffff", padding: "20px", borderRadius: "14px", border: "1px solid #e2e8f0", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.03)", marginBottom: "14px" }, children: [
                /* @__PURE__ */ jsx("span", { style: { fontSize: "11px", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: "4px" }, children: "Số Lít Xăng Nhận Được" }),
                /* @__PURE__ */ jsxs("div", { style: { fontSize: "38px", fontWeight: 900, color: "#eb2f96", letterSpacing: "-0.03em", lineHeight: 1 }, children: [
                  calculatedLiters,
                  " ",
                  /* @__PURE__ */ jsx("span", { style: { fontSize: "18px", fontWeight: 700, color: "#0f172a" }, children: "Lít" })
                ] }),
                /* @__PURE__ */ jsxs("div", { style: { fontSize: "11.5px", color: "#64748b", marginTop: "8px" }, children: [
                  "Với ",
                  amount.toLocaleString("vi-VN"),
                  "đ @ ",
                  selectedGas.price.toLocaleString("vi-VN"),
                  "đ/lít"
                ] }),
                /* @__PURE__ */ jsxs("div", { style: { marginTop: "14px", textAlign: "left" }, children: [
                  /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "11px", fontWeight: 700, color: "#475569", marginBottom: "4px" }, children: [
                    /* @__PURE__ */ jsxs("span", { children: [
                      "Tỷ lệ nạp đầy bình (",
                      tankCapacity,
                      "L):"
                    ] }),
                    /* @__PURE__ */ jsxs("span", { style: { color: "#eb2f96", fontWeight: 800 }, children: [
                      Math.min(100, Math.round(amount / selectedGas.price / tankCapacity * 100)),
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { style: { height: "8px", background: "#e2e8f0", borderRadius: "999px", overflow: "hidden" }, children: /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      animate: { width: `${Math.min(100, Math.round(amount / selectedGas.price / tankCapacity * 100))}%` },
                      transition: { duration: 0.3 },
                      style: { height: "100%", background: "linear-gradient(90deg, #eb2f96 0%, #f472b6 100%)", borderRadius: "999px" }
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { style: { background: "#ffffff", padding: "16px", borderRadius: "14px", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }, children: [
                /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }, children: [
                  /* @__PURE__ */ jsxs("span", { style: { fontSize: "12px", fontWeight: 700, color: "#475569" }, children: [
                    "Chi Phí Đổ Đầy Bình (",
                    tankCapacity,
                    "L):"
                  ] }),
                  /* @__PURE__ */ jsxs("span", { style: { fontSize: "15px", fontWeight: 900, color: "#0f172a" }, children: [
                    fullTankCost.toLocaleString("vi-VN"),
                    "đ"
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { style: { fontSize: "11px", color: "#64748b" }, children: [
                  "Ước tính chạy được khoảng ",
                  /* @__PURE__ */ jsxs("strong", { children: [
                    (tankCapacity * 16.5).toFixed(0),
                    " km"
                  ] }),
                  " đường hỗn hợp."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { style: { background: "#eff6ff", padding: "12px 14px", borderRadius: "10px", border: "1px solid #bfdbfe", fontSize: "12px", color: "#1e40af", lineHeight: 1.5 }, children: [
              "💡 ",
              /* @__PURE__ */ jsx("strong", { children: "Mẹo tiết kiệm:" }),
              " Đổ xăng theo số tiền tròn (như 100k, 200k) hoặc đổ đầy bình giúp bạn tiết kiệm thời gian chờ đợi tại cây xăng."
            ] })
          ] })
        ] })
      ]
    }
  ) });
}

const VEHICLE_PRESETS = [
  { name: "Honda Vision", category: "bike", tankLiters: 4.9, popularGas: "RON 95-III" },
  { name: "Honda SH Mode", category: "bike", tankLiters: 5.6, popularGas: "RON 95-III" },
  { name: "Air Blade 160", category: "bike", tankLiters: 4.4, popularGas: "RON 95-III" },
  { name: "Exciter 155", category: "bike", tankLiters: 5.4, popularGas: "RON 95-III" },
  { name: "Toyota Vios", category: "car", tankLiters: 42, popularGas: "RON 95-III" },
  { name: "Hyundai Accent", category: "car", tankLiters: 45, popularGas: "RON 95-III" },
  { name: "Mazda CX-5", category: "car", tankLiters: 56, popularGas: "RON 95-III" },
  { name: "Ford Ranger", category: "car", tankLiters: 80, popularGas: "Dầu Diesel" }
];
function GasPriceJTBDSuite() {
  const [selectedVehicle, setSelectedVehicle] = useState(VEHICLE_PRESETS[6]);
  const [dailyKm, setDailyKm] = useState(30);
  const [subscribed, setSubscribed] = useState(false);
  const gasPriceRon95 = 22850;
  const evChargePricePerKwh = 3858;
  const currentGasPrice = selectedVehicle.popularGas === "Dầu Diesel" ? 20650 : gasPriceRon95;
  const fullTankCost = Math.round(selectedVehicle.tankLiters * currentGasPrice);
  const monthlyKm = dailyKm * 30;
  const litersPer100km = selectedVehicle.category === "car" ? 6.5 : 2.1;
  const monthlyLiters = monthlyKm / 100 * litersPer100km;
  const monthlyGasCost = Math.round(monthlyLiters * gasPriceRon95);
  const kwhPer100km = selectedVehicle.category === "car" ? 15 : 2.5;
  const monthlyKwh = monthlyKm / 100 * kwhPer100km;
  const monthlyEvCost = Math.round(monthlyKwh * evChargePricePerKwh);
  const monthlySavings = monthlyGasCost - monthlyEvCost;
  const savingsPct = Math.round(monthlySavings / monthlyGasCost * 100);
  const maxCost = Math.max(monthlyGasCost, monthlyEvCost, 1);
  const gasPct = Math.min(100, Math.round(monthlyGasCost / maxCost * 100));
  const evPct = Math.min(100, Math.round(monthlyEvCost / maxCost * 100));
  const handleSelectVehicle = (v) => {
    setSelectedVehicle(v);
    fireConfetti();
  };
  const handleSubscribe = () => {
    setSubscribed(true);
    fireConfetti();
  };
  return /* @__PURE__ */ jsxs("div", { style: { maxWidth: "1240px", margin: "24px auto", padding: "0 20px", fontFamily: "'MoMoTrustSans', -apple-system, sans-serif", display: "flex", flexDirection: "column", gap: "16px" }, children: [
    /* @__PURE__ */ jsx("section", { style: { width: "100%" }, children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3 },
        style: {
          background: "#ffffff",
          borderRadius: "16px",
          padding: "16px 20px",
          border: "1px solid #e2e8f0",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px"
        },
        children: [
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
            /* @__PURE__ */ jsx("div", { style: {
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "#f0fdf4",
              color: "#16a34a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            }, children: /* @__PURE__ */ jsx(TrendingDown, { style: { width: "18px", height: "18px" } }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }, children: [
                /* @__PURE__ */ jsx("span", { style: { fontSize: "11px", fontWeight: 800, color: "#16a34a", background: "#dcfce7", padding: "2px 8px", borderRadius: "6px", textTransform: "uppercase", letterSpacing: "0.03em" }, children: "Dự báo kỳ 07/08" }),
                /* @__PURE__ */ jsx("h2", { style: { fontSize: "13px", fontWeight: 800, color: "#0f172a", margin: 0 }, children: "Giá xăng có thể GIẢM 200đ - 350đ/lít" })
              ] }),
              /* @__PURE__ */ jsx("p", { style: { fontSize: "12px", color: "#64748b", margin: "2px 0 0" }, children: "Khuyên dùng: Nếu chưa gấp, nên chờ sau 15h00 ngày mai để đổ xăng giá rẻ hơn." })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { children: !subscribed ? /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: handleSubscribe,
              style: {
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 14px",
                borderRadius: "10px",
                background: "#eb2f96",
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                transition: "all 0.15s ease"
              },
              children: [
                /* @__PURE__ */ jsx(BellRing, { style: { width: "14px", height: "14px" } }),
                " Nhận Báo Giá Xăng"
              ]
            }
          ) : /* @__PURE__ */ jsxs("div", { style: {
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 14px",
            borderRadius: "10px",
            background: "#f0fdf4",
            color: "#16a34a",
            fontSize: "12px",
            fontWeight: 700,
            border: "1px solid #bbf7d0"
          }, children: [
            /* @__PURE__ */ jsx(ShieldCheck, { style: { width: "15px", height: "15px" } }),
            " Đã nhận thông báo"
          ] }) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "16px" }, children: [
      /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, delay: 0.05 },
          style: {
            background: "#ffffff",
            borderRadius: "16px",
            border: "1px solid #e2e8f0",
            padding: "20px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            boxSizing: "border-box"
          },
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }, children: [
                /* @__PURE__ */ jsx("div", { style: { width: "32px", height: "32px", borderRadius: "8px", background: "#f8fafc", color: "#0f172a", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: selectedVehicle.category === "bike" ? /* @__PURE__ */ jsx(Bike, { style: { width: "16px", height: "16px" } }) : /* @__PURE__ */ jsx(Car, { style: { width: "16px", height: "16px" } }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h2", { style: { fontSize: "14px", fontWeight: 800, color: "#0f172a", margin: 0 }, children: "Tra Cứu Tiền Đổ Đầy Bình theo Dòng Xe" }),
                  /* @__PURE__ */ jsx("span", { style: { fontSize: "11.5px", color: "#64748b" }, children: "Chọn xe của bạn để tính tổng tiền nạp đầy vòi" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }, children: VEHICLE_PRESETS.map((v) => {
                const isSelected = selectedVehicle.name === v.name;
                return /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleSelectVehicle(v),
                    style: {
                      padding: "6px 12px",
                      borderRadius: "8px",
                      fontSize: "11.5px",
                      fontWeight: 700,
                      cursor: "pointer",
                      border: isSelected ? "1.5px solid #eb2f96" : "1px solid #e2e8f0",
                      background: isSelected ? "#fff0f8" : "#f8fafc",
                      color: isSelected ? "#eb2f96" : "#475569",
                      transition: "all 0.15s ease",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px"
                    },
                    children: [
                      v.name,
                      " ",
                      /* @__PURE__ */ jsxs("span", { style: { opacity: 0.75, fontSize: "10.5px" }, children: [
                        "(",
                        v.tankLiters,
                        "L)"
                      ] })
                    ]
                  },
                  v.name
                );
              }) }),
              /* @__PURE__ */ jsxs("div", { style: { background: "#f8fafc", borderRadius: "14px", padding: "16px", border: "1px solid #e2e8f0" }, children: [
                /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [
                  /* @__PURE__ */ jsx("span", { style: { fontSize: "12px", fontWeight: 800, color: "#0f172a" }, children: selectedVehicle.name }),
                  /* @__PURE__ */ jsx("span", { style: { fontSize: "11px", fontWeight: 700, color: "#eb2f96", background: "#fff0f8", border: "1px solid #ffd6ee", padding: "2px 8px", borderRadius: "6px" }, children: selectedVehicle.popularGas })
                ] }),
                /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, scale: 0.98 },
                    animate: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, scale: 0.98 },
                    transition: { duration: 0.15 },
                    children: /* @__PURE__ */ jsxs("div", { style: { fontSize: "28px", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums", lineHeight: 1.1 }, children: [
                      fullTankCost.toLocaleString("vi-VN"),
                      " ",
                      /* @__PURE__ */ jsx("span", { style: { fontSize: "14px", fontWeight: 700, color: "#64748b" }, children: "VNĐ" })
                    ] })
                  },
                  selectedVehicle.name
                ) }),
                /* @__PURE__ */ jsxs("div", { style: { marginTop: "12px" }, children: [
                  /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#64748b", fontWeight: 700, marginBottom: "4px" }, children: [
                    /* @__PURE__ */ jsxs("span", { children: [
                      "Dung tích bình: ",
                      selectedVehicle.tankLiters,
                      " Lít"
                    ] }),
                    /* @__PURE__ */ jsx("span", { children: "100% Đầy vòi" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { style: { height: "8px", background: "#e2e8f0", borderRadius: "999px", overflow: "hidden" }, children: /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: { width: 0 },
                      animate: { width: "100%" },
                      transition: { duration: 0.5, ease: "easeOut" },
                      style: { height: "100%", background: "linear-gradient(90deg, #eb2f96 0%, #f472b6 100%)", borderRadius: "999px" }
                    }
                  ) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { style: { marginTop: "14px", fontSize: "11px", color: "#94a3b8", display: "flex", alignItems: "center", gap: "4px" }, children: [
              /* @__PURE__ */ jsx(Info, { style: { width: "12px", height: "12px", flexShrink: 0 } }),
              " Giá tính theo niêm yết kỳ mới nhất của Tập đoàn Xăng dầu Petrolimex."
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, delay: 0.1 },
          style: {
            background: "#ffffff",
            borderRadius: "16px",
            border: "1px solid #e2e8f0",
            padding: "20px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            boxSizing: "border-box"
          },
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }, children: [
                /* @__PURE__ */ jsx("div", { style: { width: "32px", height: "32px", borderRadius: "8px", background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ jsx(Zap, { style: { width: "16px", height: "16px" } }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h2", { style: { fontSize: "14px", fontWeight: 800, color: "#0f172a", margin: 0 }, children: "So Sánh Ngân Sách Tiêu Hao: Xe Xăng vs Xe Điện" }),
                  /* @__PURE__ */ jsx("span", { style: { fontSize: "11.5px", color: "#64748b" }, children: "Ước tính ngân sách nhiên liệu trung bình hàng tháng" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { style: { marginBottom: "16px" }, children: [
                /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }, children: [
                  /* @__PURE__ */ jsx("span", { style: { fontSize: "12px", fontWeight: 700, color: "#475569" }, children: "Quãng đường di chuyển:" }),
                  /* @__PURE__ */ jsxs("span", { style: { fontSize: "12px", fontWeight: 800, color: "#0f172a", fontVariantNumeric: "tabular-nums" }, children: [
                    dailyKm,
                    " km/ngày (",
                    monthlyKm.toLocaleString("vi-VN"),
                    " km/tháng)"
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "range",
                    min: "10",
                    max: "120",
                    step: "5",
                    value: dailyKm,
                    onChange: (e) => setDailyKm(Number(e.target.value)),
                    style: { width: "100%", accentColor: "#16a34a", cursor: "pointer", height: "6px" }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { style: { background: "#f8fafc", padding: "14px", borderRadius: "12px", border: "1px solid #e2e8f0", marginBottom: "12px" }, children: [
                /* @__PURE__ */ jsxs("div", { style: { marginBottom: "12px" }, children: [
                  /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "11.5px", fontWeight: 700, color: "#475569", marginBottom: "4px" }, children: [
                    /* @__PURE__ */ jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: "4px" }, children: [
                      /* @__PURE__ */ jsx(Fuel, { style: { width: "13px", height: "13px", color: "#eb2f96" } }),
                      " Xe Xăng"
                    ] }),
                    /* @__PURE__ */ jsxs("span", { style: { fontWeight: 800, color: "#0f172a" }, children: [
                      monthlyGasCost.toLocaleString("vi-VN"),
                      "đ/tháng"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { style: { height: "10px", background: "#e2e8f0", borderRadius: "999px", overflow: "hidden" }, children: /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      animate: { width: `${gasPct}%` },
                      transition: { duration: 0.3 },
                      style: { height: "100%", background: "#eb2f96", borderRadius: "999px" }
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "11.5px", fontWeight: 700, color: "#16a34a", marginBottom: "4px" }, children: [
                    /* @__PURE__ */ jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: "4px" }, children: [
                      /* @__PURE__ */ jsx(Zap, { style: { width: "13px", height: "13px", color: "#16a34a" } }),
                      " Xe Điện"
                    ] }),
                    /* @__PURE__ */ jsxs("span", { style: { fontWeight: 800, color: "#16a34a" }, children: [
                      monthlyEvCost.toLocaleString("vi-VN"),
                      "đ/tháng"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { style: { height: "10px", background: "#e2e8f0", borderRadius: "999px", overflow: "hidden" }, children: /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      animate: { width: `${evPct}%` },
                      transition: { duration: 0.3 },
                      style: { height: "100%", background: "#16a34a", borderRadius: "999px" }
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { style: { background: "#f0fdf4", borderRadius: "10px", padding: "10px 14px", border: "1px solid #bbf7d0", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
                /* @__PURE__ */ jsx("span", { style: { fontSize: "12px", color: "#166534", fontWeight: 700 }, children: "Tiết kiệm được với xe điện:" }),
                /* @__PURE__ */ jsxs("span", { style: { fontSize: "13px", fontWeight: 900, color: "#15803d", fontVariantNumeric: "tabular-nums" }, children: [
                  monthlySavings.toLocaleString("vi-VN"),
                  "đ (-",
                  savingsPct,
                  "%)"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { style: { marginTop: "14px" }, children: /* @__PURE__ */ jsxs("a", { href: "/tram-sac", style: { fontSize: "12px", fontWeight: 700, color: "#0f172a", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }, children: [
              "Tìm trạm sạc xe điện gần nhất ",
              /* @__PURE__ */ jsx(ArrowRight, { style: { width: "13px", height: "13px" } })
            ] }) })
          ]
        }
      ) })
    ] })
  ] });
}

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const THEMES = { light: "", dark: ".dark" };
const ChartContext = React.createContext(null);
function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}
const ChartContainer = React.forwardRef(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
  return /* @__PURE__ */ jsx(ChartContext.Provider, { value: { config }, children: /* @__PURE__ */ jsxs(
    "div",
    {
      "data-chart": chartId,
      ref,
      style: { width: "100%", height: "100%", minHeight: "260px", display: "flex", justifyContent: "center", fontSize: "12px", ...props.style },
      className: cn(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-slate-500 [&_.recharts-cartesian-grid_line]:stroke-slate-200 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-slate-300 [&_.recharts-dot[aria-selected=true]]:stroke-slate-900 [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-slate-200 [&_.recharts-radial-bar-background-sector]:fill-slate-100 [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-slate-100 [&_.recharts-reference-line_[stroke='#ccc']]:stroke-slate-300 [&_.recharts-sector[aria-selected=true]]:stroke-slate-900 [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(ChartStyle, { id: chartId, config }),
        /* @__PURE__ */ jsx(RechartsPrimitive.ResponsiveContainer, { width: "100%", height: "100%", children })
      ]
    }
  ) });
});
ChartContainer.displayName = "Chart";
const ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config2]) => config2.theme || config2.color
  );
  if (!colorConfig.length) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(THEMES).map(
          ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig]) => {
            const color = itemConfig.theme?.[theme] || itemConfig.color;
            return color ? `  --color-${key}: ${color};` : null;
          }).filter(Boolean).join("\n")}
}
`
        ).join("\n")
      }
    }
  );
};
const ChartTooltip = RechartsPrimitive.Tooltip;
const ChartTooltipContent = React.forwardRef(
  ({
    active,
    payload,
    className,
    indicator = "dot",
    hideLabel = false,
    hideIndicator = false,
    label,
    labelFormatter,
    labelClassName,
    formatter,
    color,
    nameKey,
    labelKey
  }, ref) => {
    const { config } = useChart();
    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }
      const [item] = payload;
      const key = `${labelKey || item.dataKey || item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value = !labelKey && typeof label === "string" ? config[label]?.label || label : itemConfig?.label;
      if (labelFormatter) {
        return /* @__PURE__ */ jsx("div", { className: cn("font-medium", labelClassName), children: labelFormatter(value, payload) });
      }
      if (!value) {
        return null;
      }
      return /* @__PURE__ */ jsx("div", { className: cn("font-medium", labelClassName), children: value });
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey
    ]);
    if (!active || !payload?.length) {
      return null;
    }
    const nestLabel = payload.length === 1 && indicator !== "dot";
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-slate-200 bg-white p-2.5 text-xs shadow-xl font-sans",
          className
        ),
        children: [
          !nestLabel ? tooltipLabel : null,
          /* @__PURE__ */ jsx("div", { className: "grid gap-1.5", children: payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;
            return /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  "flex w-full flex-wrap items-center gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-slate-500",
                  indicator === "dot" && "items-center"
                ),
                children: formatter && item?.value !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  itemConfig?.icon ? /* @__PURE__ */ jsx(itemConfig.icon, {}) : !hideIndicator && /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: cn(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": indicator === "dot",
                          "w-1 h-3": indicator === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": indicatorColor,
                        "--color-border": indicatorColor
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
                          nestLabel ? tooltipLabel : null,
                          /* @__PURE__ */ jsx("span", { className: "text-slate-500 font-medium", children: itemConfig?.label || item.name })
                        ] }),
                        item.value && /* @__PURE__ */ jsx("span", { className: "font-bold tabular-nums text-slate-900 ml-2", children: typeof item.value === "number" ? item.value.toLocaleString("vi-VN") : item.value })
                      ]
                    }
                  )
                ] })
              },
              item.dataKey || index
            );
          }) })
        ]
      }
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltipContent";
function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== "object" || payload === null) {
    return void 0;
  }
  const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : void 0;
  let configLabelKey = key;
  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }
  return configLabelKey in config ? config[configLabelKey] : config[key];
}

const GAS_HISTORY_DATA = [
  { date: "11/04", ron95: 23150, e5: 22680, diesel: 21120 },
  { date: "02/05", ron95: 22920, e5: 22450, diesel: 20980 },
  { date: "23/05", ron95: 23210, e5: 22750, diesel: 21250 },
  { date: "13/06", ron95: 22780, e5: 22310, diesel: 20500 },
  { date: "04/07", ron95: 23270, e5: 22760, diesel: 20850 },
  { date: "31/07", ron95: 22850, e5: 22380, diesel: 20650 }
];
const chartConfig = {
  ron95: {
    label: "Xăng RON 95-III",
    color: "#eb2f96"
  },
  e5: {
    label: "Xăng E5 RON 92",
    color: "#16a34a"
  },
  diesel: {
    label: "Dầu Diesel 0.05S",
    color: "#2563eb"
  }
};
function BklitGasTrendChart() {
  const [activeMetric, setActiveMetric] = useState("ron95");
  return /* @__PURE__ */ jsx("section", { style: { maxWidth: "1240px", margin: "24px auto", padding: "0 20px", fontFamily: "'MoMoTrustSans', -apple-system, sans-serif" }, children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3 },
      style: {
        background: "#ffffff",
        borderRadius: "16px",
        border: "1px solid #e2e8f0",
        padding: "24px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
      },
      children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "20px" }, children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { style: { fontSize: "15px", fontWeight: 800, color: "#0f172a", margin: 0 }, children: "Đồ Thị Lịch Sử Giá Xăng Dầu (6 Kỳ Điều Hành Gần Nhất)" }),
            /* @__PURE__ */ jsx("span", { style: { fontSize: "12px", color: "#64748b" }, children: "Đơn vị tính: VNĐ / lít" })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", background: "#f8fafc", padding: "3px", borderRadius: "10px", border: "1px solid #e2e8f0" }, children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => setActiveMetric("ron95"),
                style: {
                  padding: "6px 12px",
                  borderRadius: "7px",
                  fontSize: "11.5px",
                  fontWeight: 700,
                  cursor: "pointer",
                  border: "none",
                  background: activeMetric === "ron95" ? "#eb2f96" : "transparent",
                  color: activeMetric === "ron95" ? "#ffffff" : "#475569",
                  transition: "all 0.15s ease"
                },
                children: "RON 95-III"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => setActiveMetric("e5"),
                style: {
                  padding: "6px 12px",
                  borderRadius: "7px",
                  fontSize: "11.5px",
                  fontWeight: 700,
                  cursor: "pointer",
                  border: "none",
                  background: activeMetric === "e5" ? "#16a34a" : "transparent",
                  color: activeMetric === "e5" ? "#ffffff" : "#475569",
                  transition: "all 0.15s ease"
                },
                children: "E5 RON 92"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => setActiveMetric("diesel"),
                style: {
                  padding: "6px 12px",
                  borderRadius: "7px",
                  fontSize: "11.5px",
                  fontWeight: 700,
                  cursor: "pointer",
                  border: "none",
                  background: activeMetric === "diesel" ? "#2563eb" : "transparent",
                  color: activeMetric === "diesel" ? "#ffffff" : "#475569",
                  transition: "all 0.15s ease"
                },
                children: "Dầu Diesel"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { width: "100%", height: "260px", minHeight: "260px", position: "relative" }, children: /* @__PURE__ */ jsx(ChartContainer, { config: chartConfig, style: { width: "100%", height: "260px" }, children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: 260, children: /* @__PURE__ */ jsxs(AreaChart, { data: GAS_HISTORY_DATA, margin: { top: 10, right: 10, left: 10, bottom: 0 }, children: [
          /* @__PURE__ */ jsxs("defs", { children: [
            /* @__PURE__ */ jsxs("linearGradient", { id: "fillRon95", x1: "0", y1: "0", x2: "0", y2: "1", children: [
              /* @__PURE__ */ jsx("stop", { offset: "5%", stopColor: "#eb2f96", stopOpacity: 0.35 }),
              /* @__PURE__ */ jsx("stop", { offset: "95%", stopColor: "#eb2f96", stopOpacity: 0 })
            ] }),
            /* @__PURE__ */ jsxs("linearGradient", { id: "fillE5", x1: "0", y1: "0", x2: "0", y2: "1", children: [
              /* @__PURE__ */ jsx("stop", { offset: "5%", stopColor: "#16a34a", stopOpacity: 0.35 }),
              /* @__PURE__ */ jsx("stop", { offset: "95%", stopColor: "#16a34a", stopOpacity: 0 })
            ] }),
            /* @__PURE__ */ jsxs("linearGradient", { id: "fillDiesel", x1: "0", y1: "0", x2: "0", y2: "1", children: [
              /* @__PURE__ */ jsx("stop", { offset: "5%", stopColor: "#2563eb", stopOpacity: 0.35 }),
              /* @__PURE__ */ jsx("stop", { offset: "95%", stopColor: "#2563eb", stopOpacity: 0 })
            ] })
          ] }),
          /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3", vertical: false, stroke: "#e2e8f0" }),
          /* @__PURE__ */ jsx(XAxis, { dataKey: "date", tickLine: false, axisLine: false, tickMargin: 8 }),
          /* @__PURE__ */ jsx(YAxis, { domain: ["dataMin - 400", "dataMax + 400"], tickLine: false, axisLine: false, tickFormatter: (v) => `${(v / 1e3).toFixed(1)}k` }),
          /* @__PURE__ */ jsx(ChartTooltip, { content: /* @__PURE__ */ jsx(ChartTooltipContent, { indicator: "line" }) }),
          activeMetric === "ron95" && /* @__PURE__ */ jsx(Area, { type: "monotone", dataKey: "ron95", stroke: "#eb2f96", strokeWidth: 2.5, fillOpacity: 1, fill: "url(#fillRon95)" }),
          activeMetric === "e5" && /* @__PURE__ */ jsx(Area, { type: "monotone", dataKey: "e5", stroke: "#16a34a", strokeWidth: 2.5, fillOpacity: 1, fill: "url(#fillE5)" }),
          activeMetric === "diesel" && /* @__PURE__ */ jsx(Area, { type: "monotone", dataKey: "diesel", stroke: "#2563eb", strokeWidth: 2.5, fillOpacity: 1, fill: "url(#fillDiesel)" })
        ] }) }) }) })
      ]
    }
  ) });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$GiaXang = createComponent(($$result, $$props, $$slots) => {
  const rawCss = `
html, body { overflow: auto !important; height: auto !important; }
body { display: block !important; }
#navSearch, .nav-search { display: none !important; }
.nav-search-icon-btn, .nav-menu-btn { display: none !important; }
.site-nav { background: rgba(255,255,255,.97) !important; transition: none !important; }
.site-nav:has(.nav-item:hover) { background: rgba(255,255,255,.97) !important; border-bottom-color: rgba(0,0,0,.06) !important; box-shadow: 0 1px 3px rgba(0,0,0,.04) !important; }
.site-nav:has(.nav-item:hover) .nav-trigger { color: #6b7280 !important; }
.site-nav:has(.nav-item:hover) .nav-item:hover .nav-trigger { color: #1c1c1e !important; }
.site-nav:has(.nav-item:hover) .nav-back { color: #9ca3af !important; }
.site-nav:has(.nav-item:hover) .nav-sep { background: #e5e7eb !important; }
.site-nav:has(.nav-item:hover) .logo-text { color: #1c1c1e !important; }
.site-nav:has(.nav-item:hover) .logo-text em { color: #eb2f96 !important; }

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
html, body { overflow-x: hidden; }
html { background: var(--bg); scroll-behavior: smooth; }
body {
  font-family: 'MoMoTrustSans', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--bg); color: var(--gray-900); min-height: 100vh;
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
.mega-cols{display:flex;gap:48px}
.mega-col{display:flex;flex-direction:column;gap:0;min-width:140px}
.mega-col-label{font-size:11px;font-weight:600;color:rgba(255,255,255,.4);letter-spacing:.04em;margin-bottom:10px}
.mega-item{display:flex;align-items:center;gap:8px;padding:7px 0;font-size:15px;font-weight:500;color:rgba(255,255,255,.85);text-decoration:none;transition:color .12s;white-space:nowrap}
.mega-item:hover{color:#fff}
@media(max-width:768px){
  .nav-inner{height:48px;padding:0 12px;gap:8px}
  .nav-back span{display:none}
  .nav-sep{display:none}
  .logo-text{display:block;font-size:12.5px}
  .logo-icon{width:28px;height:28px}
  .nav-links{display:none}
  .mega{display:none}
  .nav-search{display:none}
  .nav-search-icon-btn{display:flex!important;margin-left:auto}
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
}
.nav-menu-btn{display:none}
.nav-sidebar{display:none}
.nav-sidebar-overlay{display:none}

/* \u2500\u2500 NAV SEARCH \u2500\u2500 */
.nav-momo-logo{display:flex;align-items:center;text-decoration:none;flex-shrink:0}
.nav-momo-icon{width:32px;height:32px;border-radius:9px;overflow:hidden;flex-shrink:0}
.nav-momo-icon img{width:100%;height:100%;display:block}
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
.nsd-type.ev{background:#F0FFF4;color:#16A34A}
.nsd-type.motorbike{background:#EFF6FF;color:#2563EB}
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
.breadcrumb-bar{background:#fff;border-bottom:1px solid var(--gray-200);padding:10px 0;position:sticky;top:56px;z-index:100}
.bc-inner{display:flex;align-items:center;gap:4px;font-size:12.5px}
.bc-link{color:var(--gray-400);font-weight:600;text-decoration:none;transition:.15s}
.bc-link:hover{color:var(--pink-500)}
.bc-sep{color:var(--gray-300);margin:0 3px}
.bc-current{color:var(--gray-900);font-weight:700}
.crumbs strong { color: var(--gray-900); font-weight: 600; }

/* \u2500\u2500 HEADER BLOCK \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.page-head { max-width: var(--content); margin: 0 auto; padding: 20px 20px 0; }
.page-eyebrow {
  font-size: 11.5px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
  color: var(--pink-500); margin-bottom: 8px;
  display: flex; align-items: center; gap: 8px;
}
.live-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--green-500); animation: pulse 2s infinite; }
@keyframes pulse { 50% { opacity: .3; } }
h1.page-title {
  font-family: 'MoMoTrustDisplay', 'MoMoTrustSans', sans-serif;
  font-size: 34px; font-weight: 800; letter-spacing: -.01em; margin-bottom: 10px; line-height: 1.15;
}
.page-sub { font-size: 14px; color: var(--gray-500); line-height: 1.6; max-width: 640px; }
.page-sub strong { color: var(--gray-900); }

/* \u2500\u2500 LAYOUT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.page-wrap { max-width: var(--content); margin: 0 auto; padding: 24px 20px 0; }
.main-grid { display: flex; flex-direction: column; gap: 18px; }
.col { display: flex; flex-direction: column; gap: 18px; }
/* \u2500\u2500 STATIONS SECTION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.stations-section { padding: 20px 0 0; }
.stations-head {
  display: flex; align-items: center; justify-content: space-between;
  gap: 16px; padding: 18px 20px 14px;
}
.stations-title { font-size: 15px; font-weight: 800; color: var(--gray-900); }
.stations-sub { font-size: 12px; color: var(--gray-500); margin-top: 3px; }
.stations-all {
  font-size: 13px; font-weight: 700; color: var(--pink-500);
  text-decoration: none; white-space: nowrap; flex-shrink: 0;
}
.stations-all:hover { text-decoration: underline; }
.stn-list { display: grid; grid-template-columns: repeat(3, 1fr); background: var(--white); border-top: 1px solid var(--gray-100); }
@media(max-width:720px) { .stn-list { grid-template-columns: repeat(2, 1fr); } }
@media(max-width:480px) { .stn-list { grid-template-columns: 1fr; } }
.stn-card {
  display: flex; align-items: flex-start; gap: 10px;
  padding: 14px 16px; background: var(--white);
  text-decoration: none; color: inherit; transition: background .15s;
  border-right: 1px solid var(--gray-100); border-bottom: 1px solid var(--gray-100);
}
.stn-card:nth-child(3n) { border-right: none; }
@media(max-width:720px) { .stn-card:nth-child(3n) { border-right: 1px solid var(--gray-100); } .stn-card:nth-child(2n) { border-right: none; } }
@media(max-width:480px) { .stn-card { border-right: none; } }
.stn-card:hover { background: var(--gray-50); }
.stn-logo {
  width: 34px; height: 34px; border-radius: 8px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 10px; font-weight: 900; color: #fff; letter-spacing: .5px;
}
.stn-info { flex: 1; min-width: 0; overflow: hidden; }
.stn-name { font-size: 12.5px; font-weight: 700; color: var(--gray-900); line-height: 1.35; }
.stn-addr { font-size: 11px; color: var(--gray-400); margin-top: 2px; line-height: 1.4; }
.stn-dist-badge { flex-shrink: 0; font-size: 11px; font-weight: 700; color: var(--gray-500); background: var(--gray-100); padding: 3px 7px; border-radius: 20px; white-space: nowrap; align-self: flex-start; margin-top: 1px; }
.stn-view-all { display: block; padding: 13px 20px; font-size: 13px; font-weight: 700; color: var(--pink-500); text-decoration: none; border-top: 1px solid var(--gray-100); text-align: center; background: var(--white); border-radius: 0 0 var(--r-lg) var(--r-lg); }
.stn-view-all:hover { background: var(--pink-50); }

.card {
  background: var(--white); border-radius: var(--r-lg);
  box-shadow: var(--shadow-s); overflow: hidden;
}
.card-head {
  padding: 16px 22px 14px; border-bottom: 1px solid var(--gray-100);
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
}
.card-title { font-size: 15px; font-weight: 800; }
.card-note { font-size: 11.5px; color: var(--gray-400); }

/* region tabs */
.region-tabs { display: flex; gap: 8px; padding: 16px 22px 0; }
.grt {
  font-size: 12.5px; font-weight: 700; padding: 7px 16px; border-radius: 20px;
  border: 1.5px solid var(--gray-200); background: none; cursor: pointer;
  color: var(--gray-500); transition: all .15s; font-family: inherit;
}
.grt.on { border-color: var(--pink-500); background: var(--pink-50); color: var(--pink-500); }

/* price rows */
.gas-row {
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px 22px; border-bottom: 1px solid var(--gray-100);
}
.gas-row:last-child { border-bottom: none; }
.gr-left { display: flex; align-items: center; gap: 12px; }
.gr-swatch { width: 10px; height: 34px; border-radius: 4px; flex-shrink: 0; }
.gr-name { font-size: 14.5px; font-weight: 700; }
.gr-sub { font-size: 11.5px; color: var(--gray-400); }
.gr-right { display: flex; align-items: center; gap: 14px; }
.gr-price { font-size: 22px; font-weight: 800; font-variant-numeric: tabular-nums; letter-spacing: -.01em; }
.gr-unit { font-size: 11px; color: var(--gray-400); font-weight: 400; }
.gr-badge { font-size: 11px; font-weight: 700; padding: 3px 9px; border-radius: 20px; white-space: nowrap; }
.gr-badge.down { background: var(--green-50); color: var(--green-500); }
.gr-badge.up { background: var(--red-50); color: var(--red-500); }
.gr-badge.same { background: var(--gray-100); color: var(--gray-400); }

/* history table */
.hist-table { width: 100%; border-collapse: collapse; }
.hist-table th {
  text-align: left; padding: 11px 22px;
  font-size: 11px; font-weight: 700; color: var(--gray-400);
  text-transform: uppercase; letter-spacing: .6px;
  background: var(--gray-50); border-bottom: 1px solid var(--gray-100);
  white-space: nowrap;
}
.hist-table td {
  padding: 12px 22px; font-size: 13px; border-bottom: 1px solid var(--gray-100);
  font-variant-numeric: tabular-nums;
}
.hist-table tr:last-child td { border-bottom: none; }
.hist-table tr:hover td { background: var(--gray-50); }
.hist-table .num { font-weight: 700; }
.ht-delta { font-size: 11.5px; font-weight: 700; }
.ht-delta.down { color: var(--green-500); }
.ht-delta.up { color: var(--red-500); }
.ht-delta.same { color: var(--gray-400); }

/* trend chart */
.trend-body { padding: 20px 22px; }
.trend-legend { display: flex; gap: 18px; margin-bottom: 14px; }
.tl-item { display: flex; align-items: center; gap: 7px; font-size: 12px; color: var(--gray-600); }
.tl-dot { width: 10px; height: 10px; border-radius: 3px; }
.trend-chart { height: 180px; }
.trend-x { display: flex; justify-content: space-between; font-size: 10.5px; color: var(--gray-400); margin-top: 8px; }

/* \u2500\u2500 UTILITIES TOOL CALCULATOR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.util-calc-wrap {
  background: linear-gradient(180deg, #fff 0%, #fbfcff 100%);
  border: 1px solid rgba(28,23,26,.08);
  border-radius: 28px;
  box-shadow: 0 18px 38px rgba(28,23,26,.05);
  overflow: hidden;
}
.util-calc-head {
  padding: 24px 28px 0;
  display: flex; align-items: flex-start; justify-content: space-between; gap: 16px;
}
.util-calc-kicker {
  font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: .06em;
  color: var(--pink-500); margin-bottom: 5px; display: block;
}
.util-calc-head h3 { font-size: 19px; font-weight: 800; margin: 0 0 5px; line-height: 1.2; }
.util-calc-head p { font-size: 12px; color: var(--gray-500); margin: 0; line-height: 1.6; }
.intent-chip {
  font-size: 10px; font-weight: 700; background: var(--amber-50); color: #b45309;
  padding: 5px 10px; border-radius: 20px; white-space: nowrap; flex: none; margin-top: 4px;
}
.jtbd-frame {
  margin: 14px 28px 18px;
  padding: 16px 20px 16px 56px;
  background: radial-gradient(circle at top right, rgba(235,47,150,.12), transparent 60%),
              linear-gradient(135deg, var(--pink-50) 0%, #fff8fb 100%);
  border-radius: 16px; border: 1px solid var(--pink-100);
  position: relative; overflow: hidden;
}
.jtbd-frame::before {
  content: '\\201C'; position: absolute; top: -10px; left: 12px;
  font-size: 80px; font-weight: 900; color: var(--pink-100);
  font-family: Georgia, serif; line-height: 1; pointer-events: none;
}
.jtbd-kicker {
  display: inline-block; font-size: 9px; font-weight: 800; letter-spacing: .08em;
  text-transform: uppercase; color: var(--pink-500);
  background: rgba(255,255,255,.8); padding: 4px 10px; border-radius: 999px;
  margin-bottom: 8px; position: relative; z-index: 1;
}
.jtbd-frame p { margin: 0; font-size: 13px; line-height: 1.7; color: var(--gray-700); position: relative; z-index: 1; }
.jtbd-frame b { color: var(--pink-500); font-weight: 700; }
.calculator-layout {
  display: grid; grid-template-columns: minmax(0,1.16fr) minmax(300px,.84fr);
  gap: 20px; padding: 0 28px 28px;
}
.input-panel { display: flex; flex-direction: column; gap: 18px; }
.field-group { display: flex; flex-direction: column; gap: 8px; }
.field-label {
  display: flex; align-items: baseline; justify-content: space-between;
  font-size: 11.5px; font-weight: 700; color: var(--gray-500);
  text-transform: uppercase; letter-spacing: .6px;
}
.field-label-main { color: var(--gray-500); }
.field-value { font-size: 12px; font-weight: 800; color: var(--pink-500); text-transform: none; letter-spacing: 0; }
.pills-grid { display: flex; gap: 7px; flex-wrap: wrap; }
.pill-btn {
  font-size: 12.5px; font-weight: 600; padding: 7px 14px; border-radius: 20px;
  border: 1.5px solid var(--gray-200); background: none; cursor: pointer;
  color: var(--gray-600); transition: all .15s; font-family: inherit;
}
.pill-btn:hover { border-color: var(--pink-500); color: var(--pink-500); }
.pill-btn.active { border-color: var(--pink-500); background: var(--pink-50); color: var(--pink-500); }
.money-input-row {
  display: flex; align-items: center; gap: 8px;
  background: #fff; border: 1.5px solid var(--gray-200); border-radius: 20px;
  padding: 10px 14px; transition: border-color .15s, box-shadow .15s;
}
.money-input-row:focus-within { border-color: var(--pink-500); box-shadow: 0 0 0 4px var(--pink-100); }
.money-input-row input {
  flex: 1; min-width: 0; border: 0; outline: 0; background: transparent;
  font-size: 18px; font-weight: 700; color: var(--gray-900); font-family: inherit;
  font-variant-numeric: tabular-nums;
}
.unit-tag { font-size: 13px; font-weight: 700; color: var(--gray-400); }
.mode-toggle {
  display: flex; border: 1.5px solid var(--gray-200); border-radius: var(--r-sm);
  overflow: hidden; flex-shrink: 0; align-self: flex-start; margin-top: 2px;
}
.mode-btn {
  font-size: 12px; font-weight: 700; padding: 8px 14px; border: none; background: none;
  color: var(--gray-500); cursor: pointer; font-family: inherit; transition: all .15s;
}
.mode-btn.active { background: var(--pink-500); color: #fff; }
.chip-row { display: flex; gap: 6px; flex-wrap: wrap; }
.chip-btn {
  padding: 6px 12px; border: 1px solid var(--gray-200); background: #fff;
  border-radius: 999px; font-size: 12px; font-weight: 600; color: var(--gray-500);
  cursor: pointer; font-family: inherit; transition: all .15s; white-space: nowrap;
}
.chip-btn:hover { border-color: var(--pink-500); color: var(--pink-500); }
.chip-btn.active { border-color: var(--pink-500); background: var(--pink-50); color: var(--pink-500); }
.inline-note { font-size: 11px; color: var(--gray-400); line-height: 1.55; margin-top: 4px; }
/* Result panel */
.result-panel {
  background: linear-gradient(180deg, #f6f8fd 0%, #eef3fa 100%);
  border-radius: 22px; padding: 18px;
  display: flex; flex-direction: column; gap: 12px;
}
.result-hero {
  padding: 16px 18px; border-radius: 18px; background: rgba(255,255,255,.84);
}
.result-hero-label {
  font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em;
  color: #143c8b; margin-bottom: 10px; display: block;
}
.result-hero-value {
  font-size: 42px; font-weight: 900; color: #143c8b;
  line-height: .95; letter-spacing: -.04em; font-variant-numeric: tabular-nums;
}
.result-hero-value small { font-size: 18px; font-weight: 500; letter-spacing: 0; opacity: .65; }
.result-details {
  border-radius: 16px; background: rgba(255,255,255,.78); overflow: hidden;
}
.result-row {
  display: flex; justify-content: space-between; align-items: baseline; gap: 12px;
  font-size: 11.5px; padding: 12px 16px;
  border-bottom: 1px solid rgba(28,23,26,.07); color: var(--gray-600);
}
.result-row:last-child { border-bottom: 0; }
.result-row strong { color: var(--gray-900); font-weight: 800; text-align: right; font-variant-numeric: tabular-nums; }
.insight-box {
  background: var(--pink-50); border-radius: 10px;
  padding: 10px 12px; font-size: 11px; color: var(--pink-500); line-height: 1.6;
}
.insight-box em { font-style: normal; font-weight: 700; }
@media(max-width:860px) {
  .calculator-layout { grid-template-columns: 1fr; }
  .util-calc-head { flex-wrap: wrap; }
}

/* side widgets */
.next-cycle {
  background: linear-gradient(120deg, #0B0A12 0%, #171226 100%);
  border-radius: var(--r-lg); padding: 22px; position: relative; overflow: hidden;
}
.next-cycle::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse 70% 90% at 85% 15%, rgba(235,47,150,.16) 0%, transparent 60%);
  pointer-events: none;
}
.nc-label { font-size: 11px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: var(--pink-400); margin-bottom: 10px; position: relative; }
.nc-date { font-size: 24px; font-weight: 800; color: #fff; position: relative; }
.nc-count { font-size: 13px; color: rgba(255,255,255,.5); margin-top: 4px; position: relative; }
.nc-count strong { color: #fff; }
.nc-cta {
  display: inline-block; margin-top: 16px; padding: 10px 20px;
  background: var(--pink-500); color: #fff; border: none; border-radius: var(--r-md);
  font-size: 13px; font-weight: 700; cursor: pointer; font-family: inherit; position: relative;
  transition: background .15s;
}
.nc-cta:hover { background: var(--pink-600); }

.station-item {
  display: flex; align-items: center; gap: 12px;
  padding: 13px 22px; border-bottom: 1px solid var(--gray-100);
  cursor: pointer; transition: background .12s;
}
.station-item:last-child { border-bottom: none; }
.station-item:hover { background: var(--gray-50); }
.st-logo {
  width: 36px; height: 36px; border-radius: var(--r-sm); flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 10px; font-weight: 800; color: #fff;
}
.st-name { font-size: 13px; font-weight: 700; }
.st-addr { font-size: 11.5px; color: var(--gray-400); }
.st-dist { margin-left: auto; font-size: 12px; color: var(--gray-400); white-space: nowrap; flex-shrink: 0; }

.w2a-box {
  background: var(--pink-50); border: 1px dashed var(--pink-100);
  border-radius: var(--r-lg); padding: 20px 22px;
}
.w2a-box strong { display: block; font-size: 14px; font-weight: 800; color: var(--pink-600); margin-bottom: 6px; }
.w2a-box p { font-size: 12.5px; color: var(--gray-600); line-height: 1.6; margin-bottom: 14px; }
.w2a-btn {
  padding: 10px 20px; background: var(--pink-500); color: #fff; border: none;
  border-radius: var(--r-md); font-size: 13px; font-weight: 700; cursor: pointer;
  font-family: inherit; transition: background .15s;
}
.w2a-btn:hover { background: var(--pink-600); }

/* FAQ */
.section { padding: 40px 0 8px; }
.section-eyebrow { font-size: 11.5px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--pink-500); margin-bottom: 8px; }
.section-title { font-family: 'MoMoTrustDisplay', 'MoMoTrustSans', sans-serif; font-size: 26px; font-weight: 800; letter-spacing: -.01em; margin-bottom: 22px; text-align: center; }
.faq-list { max-width: 760px; margin: 0 auto; }
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

/* \u2500\u2500 FOOTER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.site-footer { background: var(--gray-900); margin-top: 56px; }
.footer-inner { max-width: var(--content); margin: 0 auto; padding: 40px 20px 28px; }
.footer-cols { display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 32px; margin-bottom: 30px; }
.footer-brand { font-size: 15px; font-weight: 800; color: #fff; margin-bottom: 10px; }
.footer-brand em { color: var(--pink-400); font-style: normal; }
.footer-about { font-size: 12.5px; color: rgba(255,255,255,.45); line-height: 1.65; max-width: 280px; }
.footer-col h4 { font-size: 11.5px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: rgba(255,255,255,.4); margin-bottom: 14px; }
.footer-col a { display: block; font-size: 13px; color: rgba(255,255,255,.65); text-decoration: none; margin-bottom: 9px; }
.footer-col a:hover { color: var(--pink-400); }
.footer-legal {
  border-top: 1px solid rgba(255,255,255,.08); padding-top: 18px;
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
  .main-grid { grid-template-columns: 1fr; }
  h1.page-title { font-size: 27px; }
  .footer-cols { grid-template-columns: 1fr 1fr; }
}
@media(max-width: 560px) {
  h1.page-title { font-size: 23px; }
  .gr-price { font-size: 18px; }
  .hist-table th, .hist-table td { padding: 10px 12px; font-size: 12px; }
  .footer-cols { grid-template-columns: 1fr; }
  .section-title { font-size: 21px; }

  /* card header: stack title + note on mobile */
  .card-head { flex-direction: column; align-items: flex-start; gap: 2px; padding: 14px 16px 12px; }
  .card-title { font-size: 14px; }
  .card-note { font-size: 11px; }

  /* region tabs: tighter padding so pills fit on one line */
  .region-tabs { padding: 12px 16px 0; gap: 6px; }
  .grt { font-size: 12px; padding: 6px 12px; white-space: nowrap; }

  /* price rows: tighter padding on mobile */
  .gas-row { padding: 13px 16px; }
  .gr-name { font-size: 13.5px; }
  .gr-sub { font-size: 11px; }
  .gr-price { font-size: 19px; }

  /* stations section: stack header vertically */
  .stations-head { flex-direction: column; align-items: flex-start; gap: 10px; }
  .stations-head > div:last-child { width: 100%; display: flex; align-items: center; gap: 10px; }
  .stn-locate-btn { flex: 1; justify-content: center; }
  .stations-title { font-size: 16px; }
  .stations-sub { font-size: 11.5px; }

  /* station cards: prevent overflow */
  .stn-card { overflow: hidden; }
  .stn-info { overflow: hidden; min-width: 0; }
}
.mega-item svg{flex-shrink:0;opacity:.7;transition:opacity .12s}.mega-item:hover svg{opacity:1}

/* \u2500\u2500 GIA-XANG REVAMP \u2500\u2500 */
/* Hero */
.gz-hero { background: #fff; border-bottom: 1px solid var(--gray-100); }
.gz-hero-inner {
  max-width: var(--content); margin: 0 auto; padding: 28px 20px 32px;
  display: flex; align-items: center; justify-content: space-between; gap: 24px;
}
.gz-hero-content { flex: 1; min-width: 0; }
.gz-crumbs { font-size: 12px; color: var(--gray-400); margin-bottom: 14px; display: flex; align-items: center; gap: 5px; flex-wrap: wrap; }
.gz-crumbs a { color: var(--gray-400); text-decoration: none; transition: color .15s; }
.gz-crumbs a:hover { color: var(--pink-500); }
.gz-crumbs strong { color: var(--gray-700); font-weight: 600; }
.gz-crumbs span { color: var(--gray-300); }
.gz-eyebrow {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 11px; font-weight: 700; letter-spacing: .8px; text-transform: uppercase;
  color: var(--pink-500); background: var(--pink-50); border: 1px solid var(--pink-100);
  border-radius: 999px; padding: 4px 12px; margin-bottom: 12px;
}
.gz-title {
  font-family: 'MoMoTrustDisplay','MoMoTrustSans',sans-serif;
  font-size: 38px; font-weight: 800; letter-spacing: -.02em; line-height: 1.1; margin-bottom: 10px;
}
.gz-sub { font-size: 14px; color: var(--gray-500); line-height: 1.6; margin-bottom: 20px; max-width: 520px; }
.gz-meta-row { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.gz-region-picker {
  display: flex; align-items: center; gap: 8px;
  background: var(--gray-50); border: 1.5px solid var(--gray-200); border-radius: 10px;
  padding: 8px 12px; cursor: pointer;
}
.gz-region-picker svg { width: 14px; height: 14px; fill: none; stroke: var(--pink-500); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; flex-shrink: 0; }
.gz-region-picker select {
  border: none; outline: none; background: transparent; font-size: 13px; font-weight: 700;
  color: var(--gray-900); font-family: inherit; cursor: pointer;
}
.gz-update-time {
  display: flex; align-items: center; gap: 6px;
  font-size: 12px; color: var(--gray-400); font-weight: 500;
}
.gz-update-time svg { width: 13px; height: 13px; fill: none; stroke: var(--gray-400); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; flex-shrink: 0; }
.gz-hero-visual {
  flex-shrink: 0; width: 340px; height: 220px;
  background: linear-gradient(135deg, #fff0f8 0%, #ffe4f2 50%, #ffd6ee 100%);
  border-radius: 20px; overflow: hidden; position: relative;
  display: flex; align-items: flex-end; justify-content: center;
}
.gz-station-svg { position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); }
@media(max-width:860px) { .gz-hero-inner { flex-direction: column; } .gz-hero-visual { width: 100%; height: 160px; } .gz-title { font-size: 28px; } }
@media(max-width:640px) { .gz-hero-inner { padding: 20px 16px 24px; } .gz-hero-visual { display: none; } .gz-title { font-size: 24px; } .gz-sub { margin-bottom: 14px; } }

/* Price strip */
.gz-price-strip { background: #F7F5FA; padding: 20px 0 10px; }
.gz-ps-inner {
  max-width: var(--content); margin: 0 auto; padding: 0 20px;
  display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px;
}
.gz-price-card {
  background: #ffffff; border: 1.5px solid var(--gray-200);
  border-radius: 14px; padding: 14px 16px; cursor: pointer; position: relative;
  transition: all .18s ease; display: flex; flex-direction: column; justify-content: space-between;
  box-shadow: 0 2px 8px rgba(28,23,26,0.04);
}
.gz-price-card:hover {
  border-color: var(--gray-300); transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(28,23,26,0.08);
}
.gz-price-card.active {
  background: #ffffff; border-color: var(--pink-500);
  box-shadow: 0 6px 20px rgba(235,47,150,0.18), 0 0 0 1px var(--pink-500);
}
.gz-pc-top { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.gz-pc-icon {
  width: 28px; height: 28px; border-radius: 8px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.gz-pc-icon svg { width: 14px; height: 14px; fill: none; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }
.gz-pc-name { font-size: 12px; font-weight: 700; color: var(--gray-700); line-height: 1.25; }
.gz-pc-price { font-size: 20px; font-weight: 900; color: var(--gray-900); font-variant-numeric: tabular-nums; letter-spacing: -.02em; margin-bottom: 8px; }
.gz-pc-price .gz-unit { font-size: 11.5px; font-weight: 600; color: var(--gray-500); }
.gz-pc-badge {
  display: inline-flex; align-items: center; gap: 4px; padding: 3px 8px; border-radius: 6px;
  font-size: 11px; font-weight: 700; width: fit-content;
}
.gz-pc-badge.up { background: #fee2e2; color: #dc2626; }
.gz-pc-badge.down { background: #dcfce7; color: #16a34a; }
.gz-pc-badge.same { background: #f0ebf4; color: #7a6e7f; }
.gz-pc-pct { opacity: 0.85; font-size: 10px; font-weight: 600; }

@media(max-width:860px) { .gz-ps-inner { grid-template-columns: repeat(3,1fr); } }
@media(max-width:640px) {
  .gz-ps-inner { display: flex; overflow-x: auto; padding: 0 16px 8px; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
  .gz-ps-inner::-webkit-scrollbar { display: none; }
  .gz-price-card { flex-shrink: 0; min-width: 140px; }
}

/* Active column highlight in price table */
.gz-region-table th.gz-col-active { color: var(--pink-500); background: #fff0f8; }
.gz-region-table td.gz-col-active { background: #fff0f8; }

/* Cycle info bar */
.gz-cycle-bar {
  max-width: var(--content); margin: 0 auto; padding: 8px 20px;
  display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;
  font-size: 12px; color: var(--gray-500); border-top: 1px solid var(--gray-100);
}
.gz-cycle-bar span { display: flex; align-items: center; gap: 5px; }
.gz-cycle-bar svg { width: 12px; height: 12px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; flex-shrink: 0; }
.gz-cycle-bar a { color: var(--gray-500); text-decoration: none; }

/* 2-col content layout */
.gz-layout {
  max-width: var(--content); margin: 0 auto; padding: 24px 20px 40px;
  display: flex; flex-direction: column; gap: 18px;
}
.gz-main { display: contents; }
@media(max-width:980px) {
  .gz-layout { padding: 16px 16px 32px; }
  .gz-notify-bar { min-width: 0; box-sizing: border-box; }
}
@media(max-width:640px) { .gz-layout { padding: 12px 12px 28px; gap: 14px; } }

/* Price table tabs */
.gz-tab-bar {
  display: flex; border-bottom: 1px solid var(--gray-100);
  padding: 0 20px;
}
.gz-tab {
  font-size: 12.5px; font-weight: 700; padding: 14px 16px;
  border: none; background: none; cursor: pointer; color: var(--gray-500);
  border-bottom: 2.5px solid transparent; margin-bottom: -1px; font-family: inherit;
  text-transform: uppercase; letter-spacing: .5px; transition: color .15s;
}
.gz-tab.active { color: var(--pink-500); border-bottom-color: var(--pink-500); }

/* Regional price table */
.gz-region-table { width: 100%; border-collapse: collapse; table-layout: fixed; border-radius: 12px; overflow: hidden; }
.gz-region-table thead tr { background: #f8fafc; border-bottom: 1px solid var(--gray-200); }
.gz-region-table th {
  padding: 12px 14px; font-size: 11px; font-weight: 800; color: var(--gray-500);
  text-transform: uppercase; letter-spacing: .04em; text-align: right;
}
.gz-region-table th:first-child { text-align: left; }
.gz-region-table td {
  padding: 14px; font-size: 13px; border-bottom: 1px solid var(--gray-100);
  text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; color: var(--gray-900);
  background: #ffffff; transition: background .15s;
}
.gz-region-table td:first-child { text-align: left; }
.gz-region-table tr:last-child td { border-bottom: none; }
.gz-region-table tr:hover td { background: #fdf4ff; }
.gz-rt-region { font-size: 13.5px; font-weight: 800; color: var(--gray-900); }
.gz-rt-city { font-size: 11px; color: var(--gray-500); font-weight: 500; margin-top: 2px; line-height: 1.3; }
.gz-val { font-size: 14px; font-weight: 800; color: var(--gray-900); }
.gz-rt-delta {
  font-size: 10.5px; font-weight: 700; display: inline-flex; align-items: center; gap: 2px;
  padding: 2px 6px; border-radius: 4px; margin-top: 4px;
}
.gz-rt-delta.up { color: #dc2626; background: #fee2e2; }
.gz-rt-delta.down { color: #16a34a; background: #dcfce7; }

.gz-table-footer { padding: 12px 20px; border-top: 1px solid var(--gray-100); }
.gz-table-footer a { font-size: 13px; font-weight: 700; color: var(--pink-500); text-decoration: none; }
.gz-table-footer a:hover { text-decoration: underline; }

/* Trend chart card */
.gz-trend-head { padding: 16px 20px 12px; border-bottom: 1px solid var(--gray-100); display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
.gz-time-tabs { display: flex; gap: 4px; }
.gz-tt { font-size: 11.5px; font-weight: 700; padding: 5px 10px; border-radius: 6px; border: 1.5px solid var(--gray-200); background: none; cursor: pointer; color: var(--gray-500); font-family: inherit; transition: all .15s; }
.gz-tt.active { background: var(--pink-500); color: #fff; border-color: var(--pink-500); }
.gz-chart-area { padding: 8px 20px 0; }
.gz-chart-link { display: block; padding: 12px 20px; font-size: 13px; font-weight: 700; color: var(--pink-500); text-decoration: none; border-top: 1px solid var(--gray-100); margin-top: 8px; }
.gz-chart-link:hover { text-decoration: underline; }

/* Notification bar */
.gz-notify-bar {
  background: #fff; border: 1px solid var(--gray-200); border-radius: var(--r-lg);
  padding: 16px 20px; display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
}
.gz-notify-icon {
  width: 44px; height: 44px; border-radius: 12px; background: var(--amber-50);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.gz-notify-icon svg { width: 22px; height: 22px; fill: none; stroke: var(--amber-500); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.gz-notify-body { flex: 1; min-width: 180px; }
.gz-notify-body strong { font-size: 14px; font-weight: 700; color: var(--gray-900); display: block; margin-bottom: 2px; }
.gz-notify-body p { font-size: 12px; color: var(--gray-500); line-height: 1.5; }
.gz-notify-btn { flex-shrink: 0; padding: 10px 20px; background: var(--pink-500); color: #fff; border: none; border-radius: 10px; font-size: 13px; font-weight: 700; cursor: pointer; font-family: inherit; transition: background .15s; white-space: nowrap; }
.gz-notify-btn:hover { background: var(--pink-600); }

/* Sidebar cards */
.gz-sb-card { background: #fff; border-radius: var(--r-lg); box-shadow: var(--shadow-s); overflow: hidden; }
.gz-sb-head { padding: 14px 16px 10px; }
.gz-sb-title { font-size: 14px; font-weight: 800; color: var(--gray-900); margin-bottom: 12px; }
.gz-station-inp-row {
  display: flex; align-items: center; gap: 0;
  border: 1.5px solid var(--gray-200); border-radius: 10px; overflow: hidden; margin-bottom: 12px;
}
.gz-station-inp-row input {
  flex: 1; border: none; outline: none; font-size: 13px; color: var(--gray-900); font-family: inherit;
  padding: 9px 12px; background: transparent;
}
.gz-station-inp-row input::placeholder { color: var(--gray-400); }
.gz-station-pin-btn {
  background: var(--pink-500); border: none; cursor: pointer; padding: 9px 14px; color: #fff;
  display: flex; align-items: center;
}
.gz-station-pin-btn svg { width: 15px; height: 15px; fill: none; stroke: #fff; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.gz-brand-row { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; flex-wrap: wrap; }
.gz-brand-chip {
  flex: 1; border: 1.5px solid var(--gray-200); border-radius: 8px; padding: 7px 8px;
  display: flex; align-items: center; justify-content: center; cursor: pointer; transition: border-color .15s;
  font-size: 11px; font-weight: 700; color: var(--gray-600); text-align: center;
}
.gz-brand-chip:hover { border-color: var(--pink-500); color: var(--pink-500); }
.gz-brand-chip img { width: 28px; height: 20px; object-fit: contain; }
.gz-find-station-btn {
  display: block; width: 100%; padding: 11px; background: var(--pink-500); color: #fff;
  border: none; border-radius: 10px; font-size: 13px; font-weight: 700; cursor: pointer;
  font-family: inherit; text-align: center; text-decoration: none; transition: background .15s;
}
.gz-find-station-btn:hover { background: var(--pink-600); }

/* Payment CTA */
.gz-payment-cta {
  background: linear-gradient(135deg,#fff0f8,#ffd6ee);
  border-radius: var(--r-lg); padding: 18px 16px; position: relative; overflow: hidden;
  border: 1px solid var(--pink-100);
}
.gz-pc-eyebrow { font-size: 11px; font-weight: 700; color: var(--pink-500); margin-bottom: 6px; }
.gz-pc-h { font-size: 14px; font-weight: 800; color: var(--gray-900); margin-bottom: 6px; line-height: 1.3; }
.gz-pc-desc { font-size: 12px; color: var(--gray-600); line-height: 1.55; margin-bottom: 14px; max-width: 200px; }
.gz-pc-pay-btn { display: inline-flex; align-items: center; gap: 6px; padding: 9px 18px; background: var(--pink-500); color: #fff; border: none; border-radius: 8px; font-size: 13px; font-weight: 700; cursor: pointer; font-family: inherit; transition: background .15s; }
.gz-pc-pay-btn:hover { background: var(--pink-600); }
.gz-pc-phone { position: absolute; right: 0; bottom: 0; width: 100px; height: 110px; overflow: hidden; opacity: .7; }

/* Sidebar regional prices */
.gz-kv-tabs { display: flex; gap: 4px; padding: 0 16px 10px; border-bottom: 1px solid var(--gray-100); }
.gz-kv-tab { font-size: 12px; font-weight: 700; padding: 5px 10px; border-radius: 6px; border: 1.5px solid var(--gray-200); background: none; cursor: pointer; color: var(--gray-500); font-family: inherit; transition: all .15s; }
.gz-kv-tab.active { background: var(--pink-50); color: var(--pink-500); border-color: var(--pink-200,#fbcfe8); }
.gz-kv-list { padding: 0 16px 14px; }
.gz-kv-summary { display: flex; align-items: baseline; gap: 6px; padding: 12px 0 10px; border-bottom: 1px solid var(--gray-100); margin-bottom: 10px; }
.gz-kv-summary-label { font-size: 12px; color: var(--gray-400); font-weight: 500; }
.gz-kv-summary-price { font-size: 22px; font-weight: 900; color: var(--gray-900); font-variant-numeric: tabular-nums; letter-spacing: -.02em; }
.gz-kv-summary-unit { font-size: 12px; color: var(--gray-400); font-weight: 500; }
.gz-kv-cities { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; }
.gz-kv-city-item { font-size: 13px; color: var(--gray-700); font-weight: 500; padding: 6px 0; display: flex; align-items: center; gap: 6px; }
.gz-kv-city-item::before { content:''; width:5px; height:5px; border-radius:50%; background:var(--gray-300); flex-shrink:0; }
/* keep old selectors for compat */
.gz-kv-row { display: none; }
.gz-kv-city { display: none; }
.gz-kv-price { display: none; }
.gz-kv-footer { padding: 10px 16px; border-top: 1px solid var(--gray-100); }
.gz-kv-footer a { font-size: 13px; font-weight: 700; color: var(--pink-500); text-decoration: none; display: flex; align-items: center; gap: 4px; }
.gz-kv-footer a:hover { text-decoration: underline; }

/* Next cycle dark card */
.gz-next-cycle {
  background: linear-gradient(120deg,#0B0A12,#171226); border-radius: var(--r-lg);
  padding: 18px 16px; position: relative; overflow: hidden;
}
.gz-next-cycle::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse 70% 90% at 85% 15%, rgba(235,47,150,.18) 0%, transparent 60%);
  pointer-events: none;
}
.gz-nc-label { font-size: 10.5px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: var(--pink-400); margin-bottom: 8px; position: relative; }
.gz-nc-icon { display: flex; align-items: center; gap: 6px; margin-bottom: 6px; position: relative; }
.gz-nc-icon svg { width: 15px; height: 15px; fill: none; stroke: rgba(255,255,255,.5); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.gz-nc-date { font-size: 16px; font-weight: 800; color: #fff; position: relative; line-height: 1.3; }
.gz-nc-sub { font-size: 12px; color: rgba(255,255,255,.4); margin-top: 4px; position: relative; }

/* FAQ in new layout */
.gz-faq-wrap { max-width: var(--content); margin: 0 auto; padding: 0 20px 48px; }
@media(max-width:640px) {
  .gz-faq-wrap { padding: 0 12px 32px; }
  .gz-cycle-bar { padding: 8px 12px; }
  .gz-sb-card { border-radius: 14px; }
  .gz-payment-cta { border-radius: 14px; }
  .gz-next-cycle { border-radius: 14px; }
  .gz-notify-bar { flex-direction: column; align-items: flex-start; gap: 10px; }
  .gz-notify-btn { width: 100%; text-align: center; }
  .gz-tab { padding: 12px 10px; font-size: 11.5px; }
  .gz-tab-bar { overflow-x: auto; scrollbar-width: none; flex-wrap: nowrap; }
  .gz-tab-bar::-webkit-scrollbar { display: none; }
  .gz-trend-head { flex-direction: column; align-items: flex-start; gap: 8px; }
  .gz-kv-tabs { overflow-x: auto; scrollbar-width: none; }
  .gz-kv-tabs::-webkit-scrollbar { display: none; }
}
</style>
`;
  return renderTemplate`${renderComponent($$result, "VehicleHub", $$VehicleHub, { "title": "Gi\xE1 X\u0103ng D\u1EA7u H\xF4m Nay - E10 RON 95, E5 RON 92, Diesel | MoMo", "description": "C\u1EADp nh\u1EADt gi\xE1 x\u0103ng d\u1EA7u m\u1EDBi nh\u1EA5t t\u1EA1i Vi\u1EC7t Nam theo k\u1EF3 \u0111i\u1EC1u h\xE0nh. Gi\xE1 E10 RON 95-III, E5 RON 92, D\u1EA7u diesel v\xF9ng 1 v\xE0 v\xF9ng 2.", "theme": "energy" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", '<div class="nav-search-overlay" id="mobileSearchOverlay"> <div class="nav-search-box"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg> <input id="mobileSearchInp" class="nav-search-inp" type="text" placeholder="T\xECm xe c\u1EE7a b\u1EA1n..." autocomplete="off" spellcheck="false"> <button onclick="closeMobileSearch()" style="background:none;border:none;cursor:pointer;color:var(--gray-400);padding:0;display:flex;align-items:center;"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> </button> </div> <div class="nav-search-drop" id="mobileSearchDrop"></div> </div>  <div class="nav-sidebar-overlay" id="navOverlay" onclick="closeNavSidebar()"></div> <div class="nav-sidebar" id="navSidebar"> <div class="nav-sidebar-top"> <span class="nav-sidebar-logo">Ti\u1EC7n \xCDch <em>Giao Th\xF4ng</em></span> <button class="nav-sidebar-close" onclick="closeNavSidebar()"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> </button> </div> <div class="nav-sidebar-body"> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">Di chuy\u1EC3n</div> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/gia-xang">Gi\xE1 x\u0103ng d\u1EA7u h\xF4m nay</a> <a class="nav-sidebar-link" href="/cay-xang">T\xECm c\xE2y x\u0103ng g\u1EA7n \u0111\xE2y</a> <a class="nav-sidebar-link" href="/tram-sac">Tr\u1EA1m s\u1EA1c xe \u0111i\u1EC7n</a> <a class="nav-sidebar-link" href="/epass/tinh-phi-etc">T\xEDnh ph\xED ETC theo tuy\u1EBFn</a> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">B\u1EA3o hi\u1EC3m</div> <a class="nav-sidebar-link" href="/bao-hiem-o-to">B\u1EA3o hi\u1EC3m TNDS b\u1EAFt bu\u1ED9c</a> <a class="nav-sidebar-link" href="/bao-hiem-o-to">B\u1EA3o hi\u1EC3m th\xE2n v\u1ECF</a> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">Ph\xE1p l\xFD &amp; B\u1EA3o d\u01B0\u1EE1ng</div> <a class="nav-sidebar-link" href="/phat-nguoi">Tra ph\u1EA1t ngu\u1ED9i</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/dang-kiem">Ki\u1EC3m tra \u0111\u0103ng ki\u1EC3m</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/bao-duong">L\u1ECBch b\u1EA3o d\u01B0\u1EE1ng xe</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/cuu-ho">C\u1EE9u h\u1ED9 kh\u1EA9n c\u1EA5p</a> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">Xe c\u1EE7a t\xF4i</div> <a class="nav-sidebar-link" href="/tien-ich-giao-thong#ho-so-xe">H\u1ED3 s\u01A1 ph\u01B0\u01A1ng ti\u1EC7n</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong#chi-phi-xe">Chi ph\xED nu\xF4i xe / n\u0103m</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/hang-xe">Nh\xE3n xe &amp; D\xF2ng xe</a> <a class="nav-sidebar-link" href="/epass">ePass &amp; T\u1EF1 \u0111\u1ED9ng n\u1EA1p</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/bai-do-xe">T\xECm b\xE3i \u0111\u1ED7 xe</a> </div> </div> </div> ', " ", " ", " ", `  <div class="gz-price-strip"> <div class="gz-ps-inner" id="priceStrip"><!-- rendered by JS --></div> <div class="gz-cycle-bar"> <span> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
C\u1EADp nh\u1EADt m\u1EDBi nh\u1EA5t: 15h00 ng\xE0y 31/07/2026 \xB7 Li\xEAn B\u1ED9 C\xF4ng Th\u01B0\u01A1ng - T\xE0i Ch\xEDnh
</span> <span id="countdownBadge" style="display:inline-flex;align-items:center;gap:5px;font-weight:700;color:var(--gray-700)"> <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> <span id="countdownText">\u0110ang t\xEDnh...</span> </span> </div> </div>  <div class="gz-layout"> <!-- Price table card --> <div class="gz-main"> <div class="card" style="padding:0;overflow:hidden"> <div class="gz-tab-bar" style="padding:0 20px"> <button class="gz-tab active" onclick="switchPriceTab('khu-vuc',this)">B\u1EA3ng gi\xE1 theo khu v\u1EF1c</button> </div> <div id="priceTablePanel" style="overflow-x:auto;width:100%"></div> </div> </div> <!-- Station finder --> <div class="card" style="padding:0;overflow:hidden"> <div class="stations-head"> <div> <div class="stations-title">C\xE2y x\u0103ng g\u1EA7n b\u1EA1n</div> <div class="stations-sub">1.200+ \u0111i\u1EC3m Petrolimex, PV Oil \xB7 thanh to\xE1n MoMo, t\xEDch \u0111i\u1EC3m MoXe</div> </div> <a class="stations-all" href="/cay-xang">Xem t\u1EA5t c\u1EA3 \u2192</a> </div> <div class="stn-list"> <a class="stn-card" href="/cay-xang"> <div class="stn-logo" style="background:#E8232A">PL</div> <div class="stn-info"> <div class="stn-name">Petrolimex 101 - Nguy\u1EC5n Th\u1ECB Th\u1EADp</div> <div class="stn-addr">101 Nguy\u1EC5n Th\u1ECB Th\u1EADp, T\xE2n Ph\xFA, Qu\u1EADn 7, TP.HCM</div> </div> <span class="stn-dist-badge">0.4 km</span> </a> <a class="stn-card" href="/cay-xang"> <div class="stn-logo" style="background:#006DB8">PV</div> <div class="stn-info"> <div class="stn-name">PV Oil L\xEA V\u0103n L\u01B0\u01A1ng</div> <div class="stn-addr">288 L\xEA V\u0103n L\u01B0\u01A1ng, T\xE2n Quy, Qu\u1EADn 7, TP.HCM</div> </div> <span class="stn-dist-badge">1.1 km</span> </a> <a class="stn-card" href="/cay-xang"> <div class="stn-logo" style="background:#E8232A">PL</div> <div class="stn-info"> <div class="stn-name">Petrolimex Nguy\u1EC5n V\u0103n Linh</div> <div class="stn-addr">725 Nguy\u1EC5n V\u0103n Linh, T\xE2n H\u01B0ng, Qu\u1EADn 7, TP.HCM</div> </div> <span class="stn-dist-badge">1.8 km</span> </a> <a class="stn-card" href="/cay-xang"> <div class="stn-logo" style="background:#FBCE07;color:#d00">SH</div> <div class="stn-info"> <div class="stn-name">Shell Nguy\u1EC5n H\u1EEFu Th\u1ECD</div> <div class="stn-addr">1200 Nguy\u1EC5n H\u1EEFu Th\u1ECD, Ph\u01B0\u1EDBc Ki\u1EC3n, Nh\xE0 B\xE8, TP.HCM</div> </div> <span class="stn-dist-badge">2.3 km</span> </a> <a class="stn-card" href="/cay-xang"> <div class="stn-logo" style="background:#006DB8">PV</div> <div class="stn-info"> <div class="stn-name">PV Oil Hu\u1EF3nh T\u1EA5n Ph\xE1t</div> <div class="stn-addr">450 Hu\u1EF3nh T\u1EA5n Ph\xE1t, B\xECnh Thu\u1EADn, Qu\u1EADn 7, TP.HCM</div> </div> <span class="stn-dist-badge">2.7 km</span> </a> <a class="stn-card" href="/cay-xang"> <div class="stn-logo" style="background:#E8232A">PL</div> <div class="stn-info"> <div class="stn-name">Petrolimex Kh\xE1nh H\u1ED9i</div> <div class="stn-addr">185 B\u1EBFn V\xE2n \u0110\u1ED3n, Ph\u01B0\u1EDDng 6, Qu\u1EADn 4, TP.HCM</div> </div> <span class="stn-dist-badge">3.5 km</span> </a> <a class="stn-card" href="/cay-xang"> <div class="stn-logo" style="background:#CC0000">MI</div> <div class="stn-info"> <div class="stn-name">Mipec Nguy\u1EC5n Th\u1ECB Minh Khai</div> <div class="stn-addr">320 Nguy\u1EC5n Th\u1ECB Minh Khai, Ph\u01B0\u1EDDng 5, Qu\u1EADn 3, TP.HCM</div> </div> <span class="stn-dist-badge">4.2 km</span> </a> <a class="stn-card" href="/cay-xang"> <div class="stn-logo" style="background:#E8232A">PL</div> <div class="stn-info"> <div class="stn-name">Petrolimex \u0110i\u1EC7n Bi\xEAn Ph\u1EE7</div> <div class="stn-addr">92 \u0110i\u1EC7n Bi\xEAn Ph\u1EE7, Ph\u01B0\u1EDDng \u0110a Kao, Qu\u1EADn 1, TP.HCM</div> </div> <span class="stn-dist-badge">5.0 km</span> </a> <a class="stn-card" href="/cay-xang"> <div class="stn-logo" style="background:#E8232A">PL</div> <div class="stn-info"> <div class="stn-name">Petrolimex Nguy\u1EC5n \u0110\xECnh Chi\u1EC3u</div> <div class="stn-addr">200 Nguy\u1EC5n \u0110\xECnh Chi\u1EC3u, Ph\u01B0\u1EDDng 6, Qu\u1EADn 3, TP.HCM</div> </div> <span class="stn-dist-badge">5.8 km</span> </a> </div> </div> <!-- Calculator --> <div class="util-calc-wrap"> <div class="util-calc-head"> <div> <h3>T\xEDnh ti\u1EC1n \u0111\u1ED5 x\u0103ng</h3> <p>Nh\u1EADp s\u1ED1 l\xEDt ho\u1EB7c s\u1ED1 ti\u1EC1n \u0111\u1EC3 bi\u1EBFt ch\xEDnh x\xE1c chi ph\xED theo gi\xE1 h\xF4m nay.</p> </div> </div> <div class="calculator-layout"> <div class="input-panel"> <div class="field-group"> <div class="field-label"><span class="field-label-main">Lo\u1EA1i nhi\xEAn li\u1EC7u</span></div> <div class="pills-grid" id="fuelPills"> <button class="pill-btn active" data-price="22850" onclick="setFuel(this)">E10 RON 95-III</button> <button class="pill-btn" data-price="22380" onclick="setFuel(this)">E5 RON 92-II</button> <button class="pill-btn" data-price="27620" onclick="setFuel(this)">DO 0,05S-II</button> <button class="pill-btn" data-price="29720" onclick="setFuel(this)">DO 0,001S-V</button> </div> </div> <div class="field-group"> <div class="field-label"> <span class="field-label-main" id="calcInputLabel">S\u1ED1 l\xEDt c\u1EA7n \u0111\u1ED5</span> <span class="field-value" id="calcFieldValue">45 l\xEDt</span> </div> <div class="money-input-row"> <input id="calcInput" type="number" inputmode="decimal" value="45" min="0" oninput="calc()"> <span class="unit-tag" id="calcUnitTag">l\xEDt</span> </div> <div class="chip-row" id="calcChips"> <button class="chip-btn" onclick="setChip(20)">20 l\xEDt</button> <button class="chip-btn active" onclick="setChip(45)">45 l\xEDt</button> <button class="chip-btn" onclick="setChip(60)">60 l\xEDt</button> <button class="chip-btn" onclick="setChip(70)">70 l\xEDt</button> </div> </div> <div class="field-group"> <div class="field-label"><span class="field-label-main">Ch\u1EBF \u0111\u1ED9 t\xEDnh</span></div> <div class="mode-toggle"> <button class="mode-btn active" id="modeLit" onclick="setMode('lit')">Nh\u1EADp l\xEDt</button> <button class="mode-btn" id="modeMoney" onclick="setMode('money')">Nh\u1EADp ti\u1EC1n</button> </div> </div> <p class="inline-note">Gi\xE1 b\xE1n l\u1EBB V\xF9ng 1, k\u1EF3 \u0111i\u1EC1u h\xE0nh 31/07/2026. Gi\xE1 th\u1EF1c t\u1EBF c\xF3 th\u1EC3 ch\xEAnh nh\u1ECF.</p> </div> <div class="result-panel"> <div class="result-hero"> <span class="result-hero-label" id="crLabel">Th\xE0nh ti\u1EC1n</span> <div class="result-hero-value" id="crValue">1.000.800<small>\u0111</small></div> </div> <div class="result-details"> <div class="result-row"><span>\u0110\u01A1n gi\xE1</span><strong id="crUnitPrice">22.240\u0111/l\xEDt</strong></div> <div class="result-row"><span id="crQtyLabel">S\u1ED1 l\xEDt</span><strong id="crQty">45 l\xEDt</strong></div> <div class="result-row"><span>Lo\u1EA1i x\u0103ng</span><strong id="crFuelName">RON 95-III</strong></div> </div> <div class="insight-box" id="crNote">Thanh to\xE1n qua <em>V\xED Tr\u1EA3 Sau ho\xE0n 10%</em> t\u1EA1i c\xE2y x\u0103ng \u0111\u1ED1i t\xE1c Petrolimex, PV Oil.</div> </div> </div> </div> </div>  <div class="gz-faq-wrap"> <h2 class="section-title">V\u1EC1 gi\xE1 x\u0103ng d\u1EA7u</h2> <div class="faq-list"> <div class="faq-item"> <button class="faq-q" onclick="toggleFaq(this)">Gi\xE1 x\u0103ng \u0111\u01B0\u1EE3c \u0111i\u1EC1u ch\u1EC9nh khi n\xE0o?</button> <div class="faq-a">Theo Ngh\u1ECB \u0111\u1ECBnh 80/2023, gi\xE1 x\u0103ng d\u1EA7u \u0111\u01B0\u1EE3c \u0111i\u1EC1u h\xE0nh \u0111\u1ECBnh k\u1EF3 v\xE0o th\u1EE9 N\u0103m h\xE0ng tu\u1EA7n. N\u1EBFu tr\xF9ng ng\xE0y ngh\u1EC9 l\u1EC5, k\u1EF3 \u0111i\u1EC1u h\xE0nh \u0111\u01B0\u1EE3c d\u1EDDi sang ng\xE0y l\xE0m vi\u1EC7c ti\u1EBFp theo. MoMo c\u1EADp nh\u1EADt b\u1EA3ng gi\xE1 ngay khi li\xEAn B\u1ED9 C\xF4ng Th\u01B0\u01A1ng - T\xE0i ch\xEDnh c\xF4ng b\u1ED1.</div> </div> <div class="faq-item"> <button class="faq-q" onclick="toggleFaq(this)">V\xF9ng 1 v\xE0 V\xF9ng 2 kh\xE1c nhau th\u1EBF n\xE0o?</button> <div class="faq-a">V\xF9ng 1 l\xE0 c\xE1c \u0111\u1ECBa b\xE0n g\u1EA7n c\u1EA3ng, kho \u0111\u1EA7u m\u1ED1i (\u0111a s\u1ED1 th\xE0nh ph\u1ED1 l\u1EDBn, \u0111\u1ED3ng b\u1EB1ng). V\xF9ng 2 l\xE0 \u0111\u1ECBa b\xE0n xa c\u1EA3ng, chi ph\xED v\u1EADn chuy\u1EC3n cao h\u01A1n (mi\u1EC1n n\xFAi, h\u1EA3i \u0111\u1EA3o) - gi\xE1 b\xE1n l\u1EBB V\xF9ng 2 \u0111\u01B0\u1EE3c c\u1ED9ng t\u1ED1i \u0111a 2% so v\u1EDBi gi\xE1 c\u01A1 s\u1EDF.</div> </div> <div class="faq-item"> <button class="faq-q" onclick="toggleFaq(this)">N\xEAn \u0111\u1ED5 E10 RON 95 hay E5 RON 92?</button> <div class="faq-a">T\u1EEB 01/06/2026, x\u0103ng RON 95 \u0111\xE3 \u0111\u01B0\u1EE3c thay th\u1EBF b\u1EDFi E10 RON 95 (pha 10% ethanol) tr\xEAn to\xE0n qu\u1ED1c. E10 RON 95-III ph\xF9 h\u1EE3p xe \u0111\u1EDDi m\u1EDBi, \u0111\u1ED9ng c\u01A1 t\u1EF7 s\u1ED1 n\xE9n cao. E5 RON 92-II (pha 5% ethanol) ph\xF9 h\u1EE3p \u0111a s\u1ED1 xe m\xE1y v\xE0 \xF4 t\xF4 ph\u1ED5 th\xF4ng, gi\xE1 th\u1EA5p h\u01A1n kho\u1EA3ng 470\u0111/l\xEDt. Ki\u1EC3m tra s\xE1ch h\u01B0\u1EDBng d\u1EABn xe c\u1EE7a b\u1EA1n \u0111\u1EC3 ch\u1ECDn \u0111\xFAng lo\u1EA1i.</div> </div> <div class="faq-item"> <button class="faq-q" onclick="toggleFaq(this)">Thanh to\xE1n x\u0103ng qua MoMo \u1EDF \u0111\xE2u?</button> <div class="faq-a">MoMo h\u1EE3p t\xE1c v\u1EDBi h\u01A1n 1.200 c\xE2y x\u0103ng Petrolimex v\xE0 PV Oil tr\xEAn to\xE0n qu\u1ED1c. B\u1EA1n qu\xE9t QR t\u1EA1i c\u1ED9t b\u01A1m ho\u1EB7c qu\u1EA7y thu ng\xE2n, ch\u1ECDn ngu\u1ED3n ti\u1EC1n V\xED MoMo ho\u1EB7c V\xED Tr\u1EA3 Sau. Giao d\u1ECBch b\u1EB1ng V\xED Tr\u1EA3 Sau \u0111\u01B0\u1EE3c ho\xE0n 10% (t\u1ED1i \u0111a 20.000\u0111) v\xE0 t\xEDch \u0111i\u1EC3m h\u1EA1ng MoXe.</div> </div> </div> </div>  <div style="display:none"><div id="gasTable"></div><table><tbody id="histBody"></tbody></table></div>  <footer class="site-footer"> <div class="footer-inner"> <div class="footer-cols"> <div> <div class="footer-brand">MoMo <em>Xe & Giao Th\xF4ng</em></div> <p class="footer-about">B\u1ED9 ti\u1EC7n \xEDch cho ch\u1EE7 xe tr\xEAn MoMo: tra ph\u1EA1t ngu\u1ED9i, gi\xE1 x\u0103ng d\u1EA7u, n\u1EA1p ePass, b\u1EA3o hi\u1EC3m xe v\xE0 m\u1EA1ng l\u01B0\u1EDBi c\xE2y x\u0103ng \u0111\u1ED1i t\xE1c to\xE0n qu\u1ED1c.</p> </div> <div class="footer-col"> <h4>Ti\u1EC7n \xEDch</h4> <a href="/tien-ich-giao-thong#tra-phat-nguoi">Tra ph\u1EA1t ngu\u1ED9i</a> <a href="/tien-ich-giao-thong/gia-xang">Gi\xE1 x\u0103ng h\xF4m nay</a> <a href="/tien-ich-giao-thong#epass">N\u1EA1p ePass</a> <a href="/tien-ich-giao-thong#bao-hiem">B\u1EA3o hi\u1EC3m TNDS</a> </div> <div class="footer-col"> <h4>Tra c\u1EE9u ph\u1ED5 bi\u1EBFn</h4> <a href="/tien-ich-giao-thong/gia-xang">Gi\xE1 x\u0103ng E10 RON 95 h\xF4m nay</a> <a href="/tien-ich-giao-thong/gia-xang">Gi\xE1 x\u0103ng E5 RON 92</a> <a href="/tien-ich-giao-thong/gia-xang">Gi\xE1 d\u1EA7u Diesel h\xF4m nay</a> <a href="/tien-ich-giao-thong#tra-phat-nguoi">Ph\u1EA1t ngu\u1ED9i TP.HCM</a> </div> <div class="footer-col"> <h4>MoMo</h4> <a href="#" onclick="toast('V\u1EC1 MoMo...');return false">V\u1EC1 ch\xFAng t\xF4i</a> <a href="#" onclick="toast('\u0110i\u1EC1u kho\u1EA3n...');return false">\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng</a> <a href="#" onclick="toast('B\u1EA3o m\u1EADt...');return false">Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt</a> </div> </div> <div class="footer-legal"> <span>\xA9 2026 M_Service. Prototype n\u1ED9i b\u1ED9 - Research Spec, kh\xF4ng ph\u1EA3i production.</span> <span>D\u1EEF li\u1EC7u demo. Gi\xE1 v\xE0 th\xF4ng tin ch\u1EC9 mang t\xEDnh minh h\u1ECDa.</span> </div> </div> </footer> <div id="toast"></div> <script>
  /* \u2500\u2500 data \u2500\u2500 */
  const GAS = {
    1: [
      { name: 'E10 RON 95-III', sub: 'X\u0103ng sinh h\u1ECDc E10', color: '#EB2F96', price: 22850, change: '\u25B2 1.420\u0111', dir: 'up' },
      { name: 'E5 RON 92-II',   sub: 'X\u0103ng sinh h\u1ECDc E5',  color: '#16A34A', price: 22380, change: '\u25B2 1.300\u0111', dir: 'up' },
      { name: 'DO 0,05S-II',    sub: 'D\u1EA7u diesel ph\u1ED5 th\xF4ng', color: '#2563EB', price: 27620, change: '\u25B2 1.860\u0111', dir: 'up' },
      { name: 'DO 0,001S-V',    sub: 'D\u1EA7u diesel cao c\u1EA5p',   color: '#7C3AED', price: 29720, change: '\u25B2 1.950\u0111', dir: 'up' },
      { name: 'D\u1EA7u h\u1ECFa 2-K',   sub: 'Kerosene',             color: '#D97706', price: 27400, change: '\u25B2 1.780\u0111', dir: 'up' },
    ],
    2: [
      { name: 'E10 RON 95-III', sub: 'V\xF9ng 2', color: '#EB2F96', price: 23300, change: '\u25B2 1.420\u0111', dir: 'up' },
      { name: 'E5 RON 92-II',   sub: 'V\xF9ng 2', color: '#16A34A', price: 22820, change: '\u25B2 1.300\u0111', dir: 'up' },
      { name: 'DO 0,05S-II',    sub: 'V\xF9ng 2', color: '#2563EB', price: 28170, change: '\u25B2 1.860\u0111', dir: 'up' },
      { name: 'DO 0,001S-V',    sub: 'V\xF9ng 2', color: '#7C3AED', price: 30310, change: '\u25B2 1.950\u0111', dir: 'up' },
      { name: 'D\u1EA7u h\u1ECFa 2-K',   sub: 'V\xF9ng 2', color: '#D97706', price: 27940, change: '\u25B2 1.780\u0111', dir: 'up' },
    ],
  };

  const HISTORY = [
    { date: '26/06/2026', price: '22.240', delta: '\u25BC 170', dir: 'down' },
    { date: '19/06/2026', price: '22.410', delta: '\u25BC 230', dir: 'down' },
    { date: '12/06/2026', price: '22.640', delta: '\u25BC 310', dir: 'down' },
    { date: '05/06/2026', price: '22.950', delta: '\u25B2 180', dir: 'up' },
    { date: '29/05/2026', price: '22.770', delta: '\u25BC 420', dir: 'down' },
    { date: '22/05/2026', price: '23.190', delta: '\u25B2 250', dir: 'up' },
    { date: '15/05/2026', price: '22.940', delta: '\u25BC 190', dir: 'down' },
    { date: '08/05/2026', price: '23.130', delta: '\u25B2 360', dir: 'up' },
    { date: '24/04/2026', price: '22.770', delta: '\u25BC 280', dir: 'down' },
    { date: '10/04/2026', price: '23.050', delta: '\u25B2 410', dir: 'up' },
  ];

  /* \u2500\u2500 render \u2500\u2500 */
  const fmt = n => n.toLocaleString('vi-VN');

  function renderGas(region) {
    document.getElementById('gasTable').innerHTML = GAS[region].map(g => \`
      <div class="gas-row">
        <div class="gr-left">
          <div class="gr-swatch" style="background:\${g.color}"></div>
          <div><div class="gr-name">\${g.name}</div><div class="gr-sub">\${g.sub}</div></div>
        </div>
        <div class="gr-right">
          <span class="gr-badge \${g.dir}">\${g.change}</span>
          <span class="gr-price">\${fmt(g.price)}<span class="gr-unit"> \u0111/l\xEDt</span></span>
        </div>
      </div>\`).join('');
  }

  function renderHistory() {
    document.getElementById('histBody').innerHTML = HISTORY.map(h => \`
      <tr>
        <td>\${h.date}</td>
        <td class="num">\${h.price} \u0111/l\xEDt</td>
        <td><span class="ht-delta \${h.dir}">\${h.delta}\u0111</span></td>
      </tr>\`).join('');
  }

  /* \u2500\u2500 calculator \u2500\u2500 */
  let calcMode = 'lit';
  let fuelPrice = 22850;
  let fuelName = 'E10 RON 95-III';

  function setFuel(btn) {
    document.querySelectorAll('#fuelPills .pill-btn').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    fuelPrice = +btn.dataset.price;
    fuelName = btn.textContent.trim();
    document.getElementById('crFuelName').textContent = fuelName;
    document.getElementById('crUnitPrice').textContent = fmt(fuelPrice) + '\u0111/l\xEDt';
    calc();
  }

  function setChip(val) {
    document.getElementById('calcInput').value = val;
    document.querySelectorAll('.chip-row .chip-btn').forEach(b => {
      const bVal = calcMode === 'lit' ? +b.textContent : +b.textContent.replace(/\\D/g,'') * 1000;
      b.classList.toggle('active', +b.onclick?.toString().match(/\\d+/)?.[0] === val);
    });
    // simpler: match text
    document.querySelectorAll('#calcChips .chip-btn').forEach(b => {
      const num = +b.getAttribute('onclick').match(/\\d+/)[0];
      b.classList.toggle('active', num === val);
    });
    calc();
  }

  function setMode(mode) {
    calcMode = mode;
    document.getElementById('modeLit').classList.toggle('active', mode === 'lit');
    document.getElementById('modeMoney').classList.toggle('active', mode === 'money');
    const input = document.getElementById('calcInput');
    const chips = document.getElementById('calcChips');
    if (mode === 'lit') {
      document.getElementById('calcInputLabel').textContent = 'S\u1ED1 l\xEDt c\u1EA7n \u0111\u1ED5';
      document.getElementById('calcUnitTag').textContent = 'l\xEDt';
      document.getElementById('crLabel').textContent = 'Th\xE0nh ti\u1EC1n';
      document.getElementById('crQtyLabel').textContent = 'S\u1ED1 l\xEDt';
      input.value = 45;
      chips.innerHTML = \`
        <button class="chip-btn" onclick="setChip(20)">20 l\xEDt</button>
        <button class="chip-btn active" onclick="setChip(45)">45 l\xEDt</button>
        <button class="chip-btn" onclick="setChip(60)">60 l\xEDt</button>
        <button class="chip-btn" onclick="setChip(70)">70 l\xEDt</button>\`;
    } else {
      document.getElementById('calcInputLabel').textContent = 'S\u1ED1 ti\u1EC1n mu\u1ED1n \u0111\u1ED5';
      document.getElementById('calcUnitTag').textContent = '\u0111';
      document.getElementById('crLabel').textContent = 'S\u1ED1 l\xEDt nh\u1EADn \u0111\u01B0\u1EE3c';
      document.getElementById('crQtyLabel').textContent = 'S\u1ED1 ti\u1EC1n';
      input.value = 200000;
      chips.innerHTML = \`
        <button class="chip-btn" onclick="setChip(100000)">100k</button>
        <button class="chip-btn active" onclick="setChip(200000)">200k</button>
        <button class="chip-btn" onclick="setChip(500000)">500k</button>
        <button class="chip-btn" onclick="setChip(1000000)">1 tri\u1EC7u</button>\`;
    }
    calc();
  }

  function calc() {
    const v = parseFloat(document.getElementById('calcInput').value) || 0;
    const crValue = document.getElementById('crValue');
    const crNote = document.getElementById('crNote');
    const crQty = document.getElementById('crQty');
    const fieldVal = document.getElementById('calcFieldValue');
    if (calcMode === 'lit') {
      const total = Math.round(v * fuelPrice);
      crValue.innerHTML = \`\${fmt(total)}<small>\u0111</small>\`;
      crQty.textContent = v + ' l\xEDt';
      fieldVal.textContent = v + ' l\xEDt';
      crNote.innerHTML = \`Thanh to\xE1n qua <em>V\xED Tr\u1EA3 Sau ho\xE0n 10%</em> t\u1EA1i c\xE2y x\u0103ng \u0111\u1ED1i t\xE1c Petrolimex, PV Oil.\`;
    } else {
      const liters = v / fuelPrice;
      crValue.innerHTML = \`\${liters.toFixed(2).replace('.', ',')}<small> l\xEDt</small>\`;
      crQty.textContent = fmt(v) + '\u0111';
      fieldVal.textContent = fmt(v) + '\u0111';
      crNote.innerHTML = \`Thanh to\xE1n qua <em>V\xED Tr\u1EA3 Sau ho\xE0n 10%</em> \u0111\u01B0\u1EE3c ho\xE0n l\u1EA1i kho\u1EA3ng \${fmt(Math.round(v * 0.1 > 20000 ? 20000 : v * 0.1))}\u0111.\`;
    }
  }

  /* \u2500\u2500 misc \u2500\u2500 */
  function setRegion(btn, region) {
    document.querySelectorAll('.grt').forEach(t => t.classList.remove('on'));
    btn.classList.add('on');
    renderGas(region);
  }

  function toggleFaq(btn) {
    btn.closest('.faq-item').classList.toggle('open');
  }

  let toastTimer;
  function detectLocation() {
    const btn = document.getElementById('stn-locate-btn');
    btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> \u0110ang x\xE1c \u0111\u1ECBnh...';
    btn.disabled = true;
    setTimeout(() => {
      document.getElementById('stn-title').textContent = 'G\u1EA7n b\u1EA1n nh\u1EA5t';
      document.getElementById('stn-sub').textContent = 'Qu\u1EADn 7, TP.HCM \xB7 S\u1EAFp x\u1EBFp theo kho\u1EA3ng c\xE1ch';
      document.querySelectorAll('.stn-dist-val').forEach(el => el.style.display = '');
      btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg> Qu\u1EADn 7';
      btn.classList.add('located');
      btn.disabled = false;
    }, 1200);
  }
  function toast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
  }

  /* \u2500\u2500 price strip data \u2500\u2500 */
  const STRIP_DATA = [
    { name:'E10 RON 95-III', price:22850, delta:+1420, pct:'+6,63%', icon:'Fuel',  color:'#EB2F96', bg:'#fdf2f8',
      history:[21430,21780,22050,22770,22950,22640,22410,22240,21430,22850] },
    { name:'E5 RON 92-II',   price:22380, delta:+1300, pct:'+6,16%', icon:'Leaf',  color:'#16A34A', bg:'#f0fdf4',
      history:[20960,21310,21580,22300,22480,22170,21940,21770,20960,22380] },
    { name:'DO 0,05S-II',    price:27620, delta:+1860, pct:'+7,22%', icon:'Truck', color:'#2563EB', bg:'#eff6ff',
      history:[26100,26450,26700,27240,27480,27020,26780,26580,26100,27620] },
    { name:'DO 0,001S-V',    price:29720, delta:+1950, pct:'+7,02%', icon:'Truck', color:'#7C3AED', bg:'#f5f3ff',
      history:[28100,28510,28800,29380,29580,29120,28870,28650,28100,29720] },
    { name:'D\u1EA7u h\u1ECFa 2-K',   price:27400, delta:+1780, pct:'+6,95%', icon:'Flame', color:'#D97706', bg:'#fffbeb',
      history:[25820,26170,26430,27020,27220,26770,26520,26310,25820,27400] },
  ];

  /* \u2500\u2500 sparkline SVG helper \u2500\u2500 */
  function buildSparkline(prices, color) {
    const W = 100, H = 28, pad = 3;
    const min = Math.min(...prices), max = Math.max(...prices);
    const range = max - min || 1;
    const pts = prices.map((p, i) => {
      const x = pad + (i / (prices.length - 1)) * (W - pad * 2);
      const y = H - pad - ((p - min) / range) * (H - pad * 2);
      return \`\${x.toFixed(1)},\${y.toFixed(1)}\`;
    });
    const ptsStr = pts.join(' ');
    const lastPt = pts[pts.length - 1];
    const [lx, ly] = lastPt.split(',');
    const fillPts = \`\${pad},\${H} \` + ptsStr + \` \${(W-pad).toFixed(1)},\${H}\`;
    return \`<svg class="gz-pc-spark" viewBox="0 0 \${W} \${H}" preserveAspectRatio="none">
      <polygon class="spark-fill" points="\${fillPts}" fill="\${color}"/>
      <polyline points="\${ptsStr}" stroke="\${color}" stroke-width="1.5"/>
      <circle class="spark-dot" cx="\${lx}" cy="\${ly}" r="2.5" fill="\${color}"/>
    </svg>\`;
  }

  /* \u2500\u2500 countdown to next k\u1EF3 \u0111i\u1EC1u h\xE0nh (every Thursday 15:00 VN time) \u2500\u2500 */
  function getNextKyDieuHanh() {
    const now = new Date();
    // Vietnam is UTC+7
    const vnNow = new Date(now.getTime() + 7 * 3600000);
    const day = vnNow.getUTCDay(); // 0=Sun,4=Thu
    let daysUntilThu = (4 - day + 7) % 7;
    // If today is Thursday and before 15:00, next is today; if after, next week
    if (day === 4) {
      const h = vnNow.getUTCHours(), m = vnNow.getUTCMinutes();
      if (h > 15 || (h === 15 && m >= 5)) daysUntilThu = 7;
      else daysUntilThu = 0;
    } else if (daysUntilThu === 0) {
      daysUntilThu = 7;
    }
    const next = new Date(vnNow);
    next.setUTCDate(next.getUTCDate() + daysUntilThu);
    next.setUTCHours(15, 0, 0, 0);
    return new Date(next.getTime() - 7 * 3600000); // back to UTC
  }

  function updateCountdown() {
    const el = document.getElementById('countdownText');
    if (!el) return;
    const diff = getNextKyDieuHanh() - new Date();
    if (diff <= 0) { el.textContent = '\u0110ang c\u1EADp nh\u1EADt...'; return; }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    el.textContent = d > 0
      ? \`K\u1EF3 ti\u1EBFp theo: \${d} ng\xE0y \${h}h\${String(m).padStart(2,'0')}p\`
      : \`K\u1EF3 ti\u1EBFp theo: \${h}h \${String(m).padStart(2,'0')}p \${String(s).padStart(2,'0')}s\`;
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* \u2500\u2500 CountUp animation helper \u2500\u2500 */
  function animateCount(el, target, duration) {
    const start = performance.now();
    const from = 0;
    function step(now) {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3); // ease-out cubic
      const val = Math.round(from + (target - from) * ease);
      el.textContent = val.toLocaleString('vi-VN');
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const KV_DATA = {
    1: [
      {city:'H\xE0 N\u1ED9i',          price:22850},
      {city:'H\u1EA3i Ph\xF2ng',       price:22850},
      {city:'TP. H\u1ED3 Ch\xED Minh', price:22850},
      {city:'\u0110\xE0 N\u1EB5ng',         price:22850},
      {city:'C\u1EA7n Th\u01A1',         price:22850},
      {city:'B\xECnh D\u01B0\u01A1ng',      price:22850},
      {city:'\u0110\u1ED3ng Nai',        price:22850},
      {city:'B\u1EAFc Ninh',        price:22850},
    ],
    2: [
      {city:'H\xE0 Giang',      price:23300},
      {city:'Cao B\u1EB1ng',      price:23300},
      {city:'L\u1EA1ng S\u01A1n',      price:23300},
      {city:'Lai Ch\xE2u',      price:23300},
      {city:'\u0110i\u1EC7n Bi\xEAn',     price:23300},
      {city:'S\u01A1n La',        price:23300},
      {city:'H\xF2a B\xECnh',      price:23300},
      {city:'Ph\xFA Th\u1ECD',       price:23300},
    ],
  };

  const REGION_TABLE = [
    { region:'V\xF9ng 1', city:'H\xE0 N\u1ED9i, TP.HCM, \u0110\xE0 N\u1EB5ng v\xE0 60 t\u1EC9nh \u0111\u1ED3ng b\u1EB1ng', r95:22850, e5:22380, do05:27620, do001:29720, dh:27400, d:+1420 },
    { region:'V\xF9ng 2', city:'H\xE0 Giang, Cao B\u1EB1ng, L\u1EA1ng S\u01A1n v\xE0 c\xE1c t\u1EC9nh mi\u1EC1n n\xFAi, h\u1EA3i \u0111\u1EA3o',  r95:23300, e5:22820, do05:28170, do001:30310, dh:27940, d:+1420 },
  ];

  function renderPriceStrip() {
    const el = document.getElementById('priceStrip');
    if (!el) return;
    el.innerHTML = STRIP_DATA.map((f, i) => {
      const isUp = f.delta > 0;
      const isDown = f.delta < 0;
      const dir = isDown ? 'down' : isUp ? 'up' : 'same';
      const arrow = isDown ? '\u25BC' : isUp ? '\u25B2' : '\u25AC';
      const sign = isUp ? '+' : '';
      return \`<div class="gz-price-card\${i===0?' active':''}" onclick="selectFuelCard(this,\${i})">
        <div class="gz-pc-top">
          <div class="gz-pc-icon" style="background:\${f.bg}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="\${f.color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">\${licon(f.icon,14,2.2).replace(/<svg[^>]*>/,'').replace('</svg>','')}</svg>
          </div>
          <div class="gz-pc-name">\${f.name}</div>
        </div>
        <div class="gz-pc-price"><span class="gz-count" data-target="\${f.price}" data-delay="\${i * 60}">0</span> <span class="gz-unit">\u0111/l\xEDt</span></div>
        <div class="gz-pc-badge \${dir}">
          <span>\${arrow} \${sign}\${Math.abs(f.delta)}\u0111</span>
          <span class="gz-pc-pct">(\${f.pct})</span>
        </div>
      </div>\`;
    }).join('');
    // Animate counts with stagger
    el.querySelectorAll('.gz-count').forEach(span => {
      const target = parseInt(span.dataset.target);
      const delay = parseInt(span.dataset.delay) || 0;
      setTimeout(() => animateCount(span, target, 800), delay);
    });
  }

  function selectFuelCard(el, idx) {
    document.querySelectorAll('.gz-price-card').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    // Highlight matching column in price table
    document.querySelectorAll('.gz-region-table th, .gz-region-table td').forEach(cell => cell.classList.remove('gz-col-active'));
    document.querySelectorAll(\`.gz-region-table th:nth-child(\${idx+2}), .gz-region-table td:nth-child(\${idx+2})\`).forEach(cell => cell.classList.add('gz-col-active'));
  }

  function renderPriceTable() {
    const el = document.getElementById('priceTablePanel');
    if (!el) return;
    el.innerHTML = \`<table class="gz-region-table">
      <thead><tr>
        <th>Khu v\u1EF1c \xE1p d\u1EE5ng</th>
        <th>E10 RON 95-III</th>
        <th>E5 RON 92-II</th>
        <th>DO 0,05S-II</th>
        <th>DO 0,001S-V</th>
        <th>D\u1EA7u h\u1ECFa 2-K</th>
      </tr></thead>
      <tbody>\${REGION_TABLE.map(r => \`<tr>
        <td><div class="gz-rt-region">\${r.region}</div><div class="gz-rt-city">\${r.city}</div></td>
        <td><div class="gz-val">\${fmt(r.r95)} \u0111</div><span class="gz-rt-delta up">\u25B2 +1.420</span></td>
        <td><div class="gz-val">\${fmt(r.e5)} \u0111</div><span class="gz-rt-delta up">\u25B2 +1.300</span></td>
        <td><div class="gz-val">\${fmt(r.do05)} \u0111</div><span class="gz-rt-delta up">\u25B2 +1.860</span></td>
        <td><div class="gz-val">\${fmt(r.do001)} \u0111</div><span class="gz-rt-delta up">\u25B2 +1.950</span></td>
        <td><div class="gz-val">\${fmt(r.dh)} \u0111</div><span class="gz-rt-delta up">\u25B2 +1.780</span></td>
      </tr>\`).join('')}</tbody>
    </table>\`;
  }


  function renderKVPrices(v) {
    const el = document.getElementById('kvPriceList');
    if (!el) return;
    const data = KV_DATA[v];
    const commonPrice = data[0].price;
    const allSame = data.every(c => c.price === commonPrice);
    if (allSame) {
      el.innerHTML = \`
        <div class="gz-kv-summary">
          <span class="gz-kv-summary-label">Gi\xE1 E10 RON 95-III</span>
          <span class="gz-kv-summary-price">\${fmt(commonPrice)}</span>
          <span class="gz-kv-summary-unit">\u0111/l\xEDt</span>
        </div>
        <div class="gz-kv-cities">
          \${data.map(c => \`<div class="gz-kv-city-item">\${c.city}</div>\`).join('')}
        </div>\`;
    } else {
      el.innerHTML = \`<div class="gz-kv-cities" style="grid-template-columns:1fr auto;gap:0">
        \${data.map(c => \`
          <div class="gz-kv-city-item">\${c.city}</div>
          <div style="font-size:13px;font-weight:700;padding:6px 0;font-variant-numeric:tabular-nums">\${fmt(c.price)} \u0111/l\xEDt</div>
        \`).join('')}
      </div>\`;
    }
  }

  function switchKV(btn, v) {
    document.querySelectorAll('.gz-kv-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    renderKVPrices(v);
  }

  function switchPriceTab(tab, btn) {
    document.querySelectorAll('.gz-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    if (tab === 'cay-xang') {
      document.getElementById('priceTablePanel').innerHTML = \`<div style="padding:24px 20px;text-align:center;color:var(--gray-400);font-size:13px">T\xEDnh n\u0103ng \u0111ang ph\xE1t tri\u1EC3n \u2014 Xem gi\xE1 theo t\u1EEBng c\xE2y x\u0103ng s\u1EBD ra m\u1EAFt s\u1EDBm.</div>\`;
    } else {
      renderPriceTable();
    }
  }

  function setTimePeriod(btn) {
    document.querySelectorAll('.gz-tt').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
  }

  function onHeroRegionChange(v) { /* future: re-fetch data */ }

  renderGas(1);
  renderHistory();
  calc();
  renderPriceTable();
  renderKVPrices(1);

  // \u2500\u2500 lucide helpers \u2500\u2500
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
    document.querySelectorAll('.mega-item[data-micon]').forEach(el => {
      if(!el.querySelector('svg'))el.insertAdjacentHTML('afterbegin',licon(el.dataset.micon,15,1.8));
    });
    renderPriceStrip();
  });

/* \u2500\u2500 NAV VEHICLE SEARCH \u2500\u2500 */
(function() {
  const VEHICLE_DATA = [
    {brand:'toyota',label:'Toyota',color:'#EB0A1E',cat:'\xD4 t\xF4',models:[{name:'Fortuner',slug:'fortuner',type:'SUV'},{name:'Camry',slug:'camry',type:'Sedan'},{name:'Corolla Cross',slug:'corolla-cross',type:'Crossover'},{name:'Innova Cross',slug:'innova-cross',type:'MPV'}]},
    {brand:'honda',label:'Honda',color:'#CC0000',cat:'\xD4 t\xF4',models:[{name:'CR-V',slug:'cr-v',type:'SUV'},{name:'City',slug:'city',type:'Sedan'},{name:'Civic',slug:'civic',type:'Sedan'},{name:'HR-V',slug:'hr-v',type:'Crossover'}]},
    {brand:'hyundai',label:'Hyundai',color:'#002C5F',cat:'\xD4 t\xF4',models:[{name:'Tucson',slug:'tucson',type:'SUV'},{name:'Ioniq 6',slug:'ioniq-6',type:'EV'}]},
    {brand:'kia',label:'Kia',color:'#05141F',cat:'\xD4 t\xF4',models:[{name:'Seltos',slug:'seltos',type:'Crossover'},{name:'Sorento',slug:'sorento',type:'SUV'}]},
    {brand:'vinfast',label:'VinFast',color:'#009EDB',cat:'\xD4 t\xF4',models:[{name:'VF 8',slug:'vf-8',type:'EV'},{name:'VF 6',slug:'vf-6',type:'EV'}]},
    {brand:'honda-may',label:'Honda',color:'#CC0000',cat:'Xe m\xE1y',models:[{name:'Wave Alpha',slug:'wave-alpha',type:'Xe s\u1ED1'},{name:'Vision',slug:'vision',type:'Tay ga'},{name:'Air Blade',slug:'air-blade',type:'Tay ga'},{name:'SH 160i',slug:'sh-160i',type:'Tay ga'}]},
    {brand:'yamaha-may',label:'Yamaha',color:'#003087',cat:'Xe m\xE1y',models:[{name:'NVX 155',slug:'nvx-155',type:'Tay ga'},{name:'Exciter 150',slug:'exciter-150',type:'C\xF4n tay'}]},
  ];
  const INDEX = [];
  VEHICLE_DATA.forEach(b => b.models.forEach(m => {
    INDEX.push({brand:b.brand,brandLabel:b.label,color:b.color,cat:b.cat,name:m.name,slug:m.slug,type:m.type,
      search:(b.label+' '+m.name+' '+m.slug+' '+b.label.toLowerCase().replace(/[^a-z0-9]/g,'')+m.name.toLowerCase().replace(/[^a-z0-9]/g,'')).toLowerCase()});
  }));
  const inp = document.getElementById('navSearchInp');
  const drop = document.getElementById('navSearchDrop');
  let blurTimer = null;
  function getUrl(item){return item.cat==='Xe m\xE1y'?'/tien-ich-giao-thong/hang-xe-may':'/tien-ich-giao-thong/hang-xe/'+item.brand+'/'+item.slug;}
  function renderTo(cont,results){
    if(!results.length){cont.innerHTML='<div class="nsd-empty"><strong>Kh\xF4ng t\xECm th\u1EA5y xe</strong>Th\u1EED t\xEAn kh\xE1c</div>';return;}
    const g={};results.forEach(r=>{if(!g[r.cat])g[r.cat]=[];g[r.cat].push(r);});
    let h='';Object.entries(g).forEach(([c,its],i)=>{if(i>0)h+='<div class="nsd-divider"></div>';h+=\`<div class="nsd-section-label">\${c}</div>\`;its.forEach(r=>{const tc=r.type==='EV'?'ev':r.cat==='Xe m\xE1y'?'motorbike':'';h+=\`<a class="nsd-item" href="\${getUrl(r)}"><span class="nsd-dot" style="background:\${r.color}"></span><span class="nsd-info"><span class="nsd-model">\${r.name}</span><span class="nsd-brand">\${r.brandLabel}</span></span><span class="nsd-type \${tc}">\${r.type}</span></a>\`;});});
    cont.innerHTML=h;
  }
  function showEmpty(){
    drop.innerHTML='<div class="nsd-section-label">Ph\u1ED5 bi\u1EBFn nh\u1EA5t</div>'+
      ['toyota|fortuner|Fortuner|SUV|#EB0A1E|\xD4 t\xF4','honda|city|City|Sedan|#CC0000|\xD4 t\xF4','vinfast|vf-8|VF 8|EV|#009EDB|\xD4 t\xF4',
       'honda-may|air-blade|Air Blade|Tay ga|#CC0000|Xe m\xE1y','yamaha-may|nvx-155|NVX 155|Tay ga|#003087|Xe m\xE1y']
      .map(s=>{const [brand,slug,name,type,color,cat]=s.split('|');const isMoto=cat==='Xe m\xE1y';const url=isMoto?'/tien-ich-giao-thong/hang-xe-may':\`/tien-ich-giao-thong/hang-xe/\${brand}/\${slug}\`;const tc=type==='EV'?'ev':isMoto?'motorbike':'';
        return \`<a class="nsd-item" href="\${url}"><span class="nsd-dot" style="background:\${color}"></span><span class="nsd-info"><span class="nsd-model">\${name}</span><span class="nsd-brand">\${brand.replace('-may','').charAt(0).toUpperCase()+brand.replace('-may','').slice(1)}</span></span><span class="nsd-type \${tc}">\${type}</span></a>\`;
      }).join('');
  }
  inp.addEventListener('input',()=>{const q=inp.value.trim().toLowerCase();if(!q){showEmpty();drop.classList.add('open');return;}renderTo(drop,INDEX.filter(r=>r.search.includes(q)).slice(0,12));drop.classList.add('open');});
  inp.addEventListener('focus',()=>{clearTimeout(blurTimer);if(!inp.value.trim())showEmpty();drop.classList.add('open');});
  inp.addEventListener('blur',()=>{blurTimer=setTimeout(()=>drop.classList.remove('open'),160);});
  inp.addEventListener('keydown',e=>{if(e.key==='Escape'){drop.classList.remove('open');inp.blur();}});
  document.addEventListener('keydown',e=>{if(e.key==='/'&&document.activeElement!==inp&&document.activeElement.tagName!=='INPUT'&&document.activeElement.tagName!=='TEXTAREA'){e.preventDefault();inp.focus();}});
  const mOv=document.getElementById('mobileSearchOverlay'),mInp=document.getElementById('mobileSearchInp'),mDrop=document.getElementById('mobileSearchDrop');
  mInp.addEventListener('input',()=>{const q=mInp.value.trim().toLowerCase();if(!q){mDrop.classList.remove('open');return;}renderTo(mDrop,INDEX.filter(r=>r.search.includes(q)).slice(0,10));mDrop.classList.add('open');});
  window.toggleMobileSearch=function(){const o=mOv.classList.contains('open');if(o){closeMobileSearch();}else{mOv.classList.add('open');mDrop.classList.remove('open');mInp.value='';setTimeout(()=>mInp.focus(),60);}};
  window.closeMobileSearch=function(){mOv.classList.remove('open');mDrop.classList.remove('open');mInp.value='';};
})();
window.openNavSidebar=function(){document.getElementById('navSidebar').classList.add('open');document.getElementById('navOverlay').classList.add('open');};
window.closeNavSidebar=function(){document.getElementById('navSidebar').classList.remove('open');document.getElementById('navOverlay').classList.remove('open');};
<\/script> `, " "], [" ", " ", '<div class="nav-search-overlay" id="mobileSearchOverlay"> <div class="nav-search-box"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg> <input id="mobileSearchInp" class="nav-search-inp" type="text" placeholder="T\xECm xe c\u1EE7a b\u1EA1n..." autocomplete="off" spellcheck="false"> <button onclick="closeMobileSearch()" style="background:none;border:none;cursor:pointer;color:var(--gray-400);padding:0;display:flex;align-items:center;"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> </button> </div> <div class="nav-search-drop" id="mobileSearchDrop"></div> </div>  <div class="nav-sidebar-overlay" id="navOverlay" onclick="closeNavSidebar()"></div> <div class="nav-sidebar" id="navSidebar"> <div class="nav-sidebar-top"> <span class="nav-sidebar-logo">Ti\u1EC7n \xCDch <em>Giao Th\xF4ng</em></span> <button class="nav-sidebar-close" onclick="closeNavSidebar()"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> </button> </div> <div class="nav-sidebar-body"> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">Di chuy\u1EC3n</div> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/gia-xang">Gi\xE1 x\u0103ng d\u1EA7u h\xF4m nay</a> <a class="nav-sidebar-link" href="/cay-xang">T\xECm c\xE2y x\u0103ng g\u1EA7n \u0111\xE2y</a> <a class="nav-sidebar-link" href="/tram-sac">Tr\u1EA1m s\u1EA1c xe \u0111i\u1EC7n</a> <a class="nav-sidebar-link" href="/epass/tinh-phi-etc">T\xEDnh ph\xED ETC theo tuy\u1EBFn</a> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">B\u1EA3o hi\u1EC3m</div> <a class="nav-sidebar-link" href="/bao-hiem-o-to">B\u1EA3o hi\u1EC3m TNDS b\u1EAFt bu\u1ED9c</a> <a class="nav-sidebar-link" href="/bao-hiem-o-to">B\u1EA3o hi\u1EC3m th\xE2n v\u1ECF</a> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">Ph\xE1p l\xFD &amp; B\u1EA3o d\u01B0\u1EE1ng</div> <a class="nav-sidebar-link" href="/phat-nguoi">Tra ph\u1EA1t ngu\u1ED9i</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/dang-kiem">Ki\u1EC3m tra \u0111\u0103ng ki\u1EC3m</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/bao-duong">L\u1ECBch b\u1EA3o d\u01B0\u1EE1ng xe</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/cuu-ho">C\u1EE9u h\u1ED9 kh\u1EA9n c\u1EA5p</a> </div> <div class="nav-sidebar-divider"></div> <div class="nav-sidebar-section"> <div class="nav-sidebar-section-label">Xe c\u1EE7a t\xF4i</div> <a class="nav-sidebar-link" href="/tien-ich-giao-thong#ho-so-xe">H\u1ED3 s\u01A1 ph\u01B0\u01A1ng ti\u1EC7n</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong#chi-phi-xe">Chi ph\xED nu\xF4i xe / n\u0103m</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/hang-xe">Nh\xE3n xe &amp; D\xF2ng xe</a> <a class="nav-sidebar-link" href="/epass">ePass &amp; T\u1EF1 \u0111\u1ED9ng n\u1EA1p</a> <a class="nav-sidebar-link" href="/tien-ich-giao-thong/bai-do-xe">T\xECm b\xE3i \u0111\u1ED7 xe</a> </div> </div> </div> ', " ", " ", " ", `  <div class="gz-price-strip"> <div class="gz-ps-inner" id="priceStrip"><!-- rendered by JS --></div> <div class="gz-cycle-bar"> <span> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
C\u1EADp nh\u1EADt m\u1EDBi nh\u1EA5t: 15h00 ng\xE0y 31/07/2026 \xB7 Li\xEAn B\u1ED9 C\xF4ng Th\u01B0\u01A1ng - T\xE0i Ch\xEDnh
</span> <span id="countdownBadge" style="display:inline-flex;align-items:center;gap:5px;font-weight:700;color:var(--gray-700)"> <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> <span id="countdownText">\u0110ang t\xEDnh...</span> </span> </div> </div>  <div class="gz-layout"> <!-- Price table card --> <div class="gz-main"> <div class="card" style="padding:0;overflow:hidden"> <div class="gz-tab-bar" style="padding:0 20px"> <button class="gz-tab active" onclick="switchPriceTab('khu-vuc',this)">B\u1EA3ng gi\xE1 theo khu v\u1EF1c</button> </div> <div id="priceTablePanel" style="overflow-x:auto;width:100%"></div> </div> </div> <!-- Station finder --> <div class="card" style="padding:0;overflow:hidden"> <div class="stations-head"> <div> <div class="stations-title">C\xE2y x\u0103ng g\u1EA7n b\u1EA1n</div> <div class="stations-sub">1.200+ \u0111i\u1EC3m Petrolimex, PV Oil \xB7 thanh to\xE1n MoMo, t\xEDch \u0111i\u1EC3m MoXe</div> </div> <a class="stations-all" href="/cay-xang">Xem t\u1EA5t c\u1EA3 \u2192</a> </div> <div class="stn-list"> <a class="stn-card" href="/cay-xang"> <div class="stn-logo" style="background:#E8232A">PL</div> <div class="stn-info"> <div class="stn-name">Petrolimex 101 - Nguy\u1EC5n Th\u1ECB Th\u1EADp</div> <div class="stn-addr">101 Nguy\u1EC5n Th\u1ECB Th\u1EADp, T\xE2n Ph\xFA, Qu\u1EADn 7, TP.HCM</div> </div> <span class="stn-dist-badge">0.4 km</span> </a> <a class="stn-card" href="/cay-xang"> <div class="stn-logo" style="background:#006DB8">PV</div> <div class="stn-info"> <div class="stn-name">PV Oil L\xEA V\u0103n L\u01B0\u01A1ng</div> <div class="stn-addr">288 L\xEA V\u0103n L\u01B0\u01A1ng, T\xE2n Quy, Qu\u1EADn 7, TP.HCM</div> </div> <span class="stn-dist-badge">1.1 km</span> </a> <a class="stn-card" href="/cay-xang"> <div class="stn-logo" style="background:#E8232A">PL</div> <div class="stn-info"> <div class="stn-name">Petrolimex Nguy\u1EC5n V\u0103n Linh</div> <div class="stn-addr">725 Nguy\u1EC5n V\u0103n Linh, T\xE2n H\u01B0ng, Qu\u1EADn 7, TP.HCM</div> </div> <span class="stn-dist-badge">1.8 km</span> </a> <a class="stn-card" href="/cay-xang"> <div class="stn-logo" style="background:#FBCE07;color:#d00">SH</div> <div class="stn-info"> <div class="stn-name">Shell Nguy\u1EC5n H\u1EEFu Th\u1ECD</div> <div class="stn-addr">1200 Nguy\u1EC5n H\u1EEFu Th\u1ECD, Ph\u01B0\u1EDBc Ki\u1EC3n, Nh\xE0 B\xE8, TP.HCM</div> </div> <span class="stn-dist-badge">2.3 km</span> </a> <a class="stn-card" href="/cay-xang"> <div class="stn-logo" style="background:#006DB8">PV</div> <div class="stn-info"> <div class="stn-name">PV Oil Hu\u1EF3nh T\u1EA5n Ph\xE1t</div> <div class="stn-addr">450 Hu\u1EF3nh T\u1EA5n Ph\xE1t, B\xECnh Thu\u1EADn, Qu\u1EADn 7, TP.HCM</div> </div> <span class="stn-dist-badge">2.7 km</span> </a> <a class="stn-card" href="/cay-xang"> <div class="stn-logo" style="background:#E8232A">PL</div> <div class="stn-info"> <div class="stn-name">Petrolimex Kh\xE1nh H\u1ED9i</div> <div class="stn-addr">185 B\u1EBFn V\xE2n \u0110\u1ED3n, Ph\u01B0\u1EDDng 6, Qu\u1EADn 4, TP.HCM</div> </div> <span class="stn-dist-badge">3.5 km</span> </a> <a class="stn-card" href="/cay-xang"> <div class="stn-logo" style="background:#CC0000">MI</div> <div class="stn-info"> <div class="stn-name">Mipec Nguy\u1EC5n Th\u1ECB Minh Khai</div> <div class="stn-addr">320 Nguy\u1EC5n Th\u1ECB Minh Khai, Ph\u01B0\u1EDDng 5, Qu\u1EADn 3, TP.HCM</div> </div> <span class="stn-dist-badge">4.2 km</span> </a> <a class="stn-card" href="/cay-xang"> <div class="stn-logo" style="background:#E8232A">PL</div> <div class="stn-info"> <div class="stn-name">Petrolimex \u0110i\u1EC7n Bi\xEAn Ph\u1EE7</div> <div class="stn-addr">92 \u0110i\u1EC7n Bi\xEAn Ph\u1EE7, Ph\u01B0\u1EDDng \u0110a Kao, Qu\u1EADn 1, TP.HCM</div> </div> <span class="stn-dist-badge">5.0 km</span> </a> <a class="stn-card" href="/cay-xang"> <div class="stn-logo" style="background:#E8232A">PL</div> <div class="stn-info"> <div class="stn-name">Petrolimex Nguy\u1EC5n \u0110\xECnh Chi\u1EC3u</div> <div class="stn-addr">200 Nguy\u1EC5n \u0110\xECnh Chi\u1EC3u, Ph\u01B0\u1EDDng 6, Qu\u1EADn 3, TP.HCM</div> </div> <span class="stn-dist-badge">5.8 km</span> </a> </div> </div> <!-- Calculator --> <div class="util-calc-wrap"> <div class="util-calc-head"> <div> <h3>T\xEDnh ti\u1EC1n \u0111\u1ED5 x\u0103ng</h3> <p>Nh\u1EADp s\u1ED1 l\xEDt ho\u1EB7c s\u1ED1 ti\u1EC1n \u0111\u1EC3 bi\u1EBFt ch\xEDnh x\xE1c chi ph\xED theo gi\xE1 h\xF4m nay.</p> </div> </div> <div class="calculator-layout"> <div class="input-panel"> <div class="field-group"> <div class="field-label"><span class="field-label-main">Lo\u1EA1i nhi\xEAn li\u1EC7u</span></div> <div class="pills-grid" id="fuelPills"> <button class="pill-btn active" data-price="22850" onclick="setFuel(this)">E10 RON 95-III</button> <button class="pill-btn" data-price="22380" onclick="setFuel(this)">E5 RON 92-II</button> <button class="pill-btn" data-price="27620" onclick="setFuel(this)">DO 0,05S-II</button> <button class="pill-btn" data-price="29720" onclick="setFuel(this)">DO 0,001S-V</button> </div> </div> <div class="field-group"> <div class="field-label"> <span class="field-label-main" id="calcInputLabel">S\u1ED1 l\xEDt c\u1EA7n \u0111\u1ED5</span> <span class="field-value" id="calcFieldValue">45 l\xEDt</span> </div> <div class="money-input-row"> <input id="calcInput" type="number" inputmode="decimal" value="45" min="0" oninput="calc()"> <span class="unit-tag" id="calcUnitTag">l\xEDt</span> </div> <div class="chip-row" id="calcChips"> <button class="chip-btn" onclick="setChip(20)">20 l\xEDt</button> <button class="chip-btn active" onclick="setChip(45)">45 l\xEDt</button> <button class="chip-btn" onclick="setChip(60)">60 l\xEDt</button> <button class="chip-btn" onclick="setChip(70)">70 l\xEDt</button> </div> </div> <div class="field-group"> <div class="field-label"><span class="field-label-main">Ch\u1EBF \u0111\u1ED9 t\xEDnh</span></div> <div class="mode-toggle"> <button class="mode-btn active" id="modeLit" onclick="setMode('lit')">Nh\u1EADp l\xEDt</button> <button class="mode-btn" id="modeMoney" onclick="setMode('money')">Nh\u1EADp ti\u1EC1n</button> </div> </div> <p class="inline-note">Gi\xE1 b\xE1n l\u1EBB V\xF9ng 1, k\u1EF3 \u0111i\u1EC1u h\xE0nh 31/07/2026. Gi\xE1 th\u1EF1c t\u1EBF c\xF3 th\u1EC3 ch\xEAnh nh\u1ECF.</p> </div> <div class="result-panel"> <div class="result-hero"> <span class="result-hero-label" id="crLabel">Th\xE0nh ti\u1EC1n</span> <div class="result-hero-value" id="crValue">1.000.800<small>\u0111</small></div> </div> <div class="result-details"> <div class="result-row"><span>\u0110\u01A1n gi\xE1</span><strong id="crUnitPrice">22.240\u0111/l\xEDt</strong></div> <div class="result-row"><span id="crQtyLabel">S\u1ED1 l\xEDt</span><strong id="crQty">45 l\xEDt</strong></div> <div class="result-row"><span>Lo\u1EA1i x\u0103ng</span><strong id="crFuelName">RON 95-III</strong></div> </div> <div class="insight-box" id="crNote">Thanh to\xE1n qua <em>V\xED Tr\u1EA3 Sau ho\xE0n 10%</em> t\u1EA1i c\xE2y x\u0103ng \u0111\u1ED1i t\xE1c Petrolimex, PV Oil.</div> </div> </div> </div> </div>  <div class="gz-faq-wrap"> <h2 class="section-title">V\u1EC1 gi\xE1 x\u0103ng d\u1EA7u</h2> <div class="faq-list"> <div class="faq-item"> <button class="faq-q" onclick="toggleFaq(this)">Gi\xE1 x\u0103ng \u0111\u01B0\u1EE3c \u0111i\u1EC1u ch\u1EC9nh khi n\xE0o?</button> <div class="faq-a">Theo Ngh\u1ECB \u0111\u1ECBnh 80/2023, gi\xE1 x\u0103ng d\u1EA7u \u0111\u01B0\u1EE3c \u0111i\u1EC1u h\xE0nh \u0111\u1ECBnh k\u1EF3 v\xE0o th\u1EE9 N\u0103m h\xE0ng tu\u1EA7n. N\u1EBFu tr\xF9ng ng\xE0y ngh\u1EC9 l\u1EC5, k\u1EF3 \u0111i\u1EC1u h\xE0nh \u0111\u01B0\u1EE3c d\u1EDDi sang ng\xE0y l\xE0m vi\u1EC7c ti\u1EBFp theo. MoMo c\u1EADp nh\u1EADt b\u1EA3ng gi\xE1 ngay khi li\xEAn B\u1ED9 C\xF4ng Th\u01B0\u01A1ng - T\xE0i ch\xEDnh c\xF4ng b\u1ED1.</div> </div> <div class="faq-item"> <button class="faq-q" onclick="toggleFaq(this)">V\xF9ng 1 v\xE0 V\xF9ng 2 kh\xE1c nhau th\u1EBF n\xE0o?</button> <div class="faq-a">V\xF9ng 1 l\xE0 c\xE1c \u0111\u1ECBa b\xE0n g\u1EA7n c\u1EA3ng, kho \u0111\u1EA7u m\u1ED1i (\u0111a s\u1ED1 th\xE0nh ph\u1ED1 l\u1EDBn, \u0111\u1ED3ng b\u1EB1ng). V\xF9ng 2 l\xE0 \u0111\u1ECBa b\xE0n xa c\u1EA3ng, chi ph\xED v\u1EADn chuy\u1EC3n cao h\u01A1n (mi\u1EC1n n\xFAi, h\u1EA3i \u0111\u1EA3o) - gi\xE1 b\xE1n l\u1EBB V\xF9ng 2 \u0111\u01B0\u1EE3c c\u1ED9ng t\u1ED1i \u0111a 2% so v\u1EDBi gi\xE1 c\u01A1 s\u1EDF.</div> </div> <div class="faq-item"> <button class="faq-q" onclick="toggleFaq(this)">N\xEAn \u0111\u1ED5 E10 RON 95 hay E5 RON 92?</button> <div class="faq-a">T\u1EEB 01/06/2026, x\u0103ng RON 95 \u0111\xE3 \u0111\u01B0\u1EE3c thay th\u1EBF b\u1EDFi E10 RON 95 (pha 10% ethanol) tr\xEAn to\xE0n qu\u1ED1c. E10 RON 95-III ph\xF9 h\u1EE3p xe \u0111\u1EDDi m\u1EDBi, \u0111\u1ED9ng c\u01A1 t\u1EF7 s\u1ED1 n\xE9n cao. E5 RON 92-II (pha 5% ethanol) ph\xF9 h\u1EE3p \u0111a s\u1ED1 xe m\xE1y v\xE0 \xF4 t\xF4 ph\u1ED5 th\xF4ng, gi\xE1 th\u1EA5p h\u01A1n kho\u1EA3ng 470\u0111/l\xEDt. Ki\u1EC3m tra s\xE1ch h\u01B0\u1EDBng d\u1EABn xe c\u1EE7a b\u1EA1n \u0111\u1EC3 ch\u1ECDn \u0111\xFAng lo\u1EA1i.</div> </div> <div class="faq-item"> <button class="faq-q" onclick="toggleFaq(this)">Thanh to\xE1n x\u0103ng qua MoMo \u1EDF \u0111\xE2u?</button> <div class="faq-a">MoMo h\u1EE3p t\xE1c v\u1EDBi h\u01A1n 1.200 c\xE2y x\u0103ng Petrolimex v\xE0 PV Oil tr\xEAn to\xE0n qu\u1ED1c. B\u1EA1n qu\xE9t QR t\u1EA1i c\u1ED9t b\u01A1m ho\u1EB7c qu\u1EA7y thu ng\xE2n, ch\u1ECDn ngu\u1ED3n ti\u1EC1n V\xED MoMo ho\u1EB7c V\xED Tr\u1EA3 Sau. Giao d\u1ECBch b\u1EB1ng V\xED Tr\u1EA3 Sau \u0111\u01B0\u1EE3c ho\xE0n 10% (t\u1ED1i \u0111a 20.000\u0111) v\xE0 t\xEDch \u0111i\u1EC3m h\u1EA1ng MoXe.</div> </div> </div> </div>  <div style="display:none"><div id="gasTable"></div><table><tbody id="histBody"></tbody></table></div>  <footer class="site-footer"> <div class="footer-inner"> <div class="footer-cols"> <div> <div class="footer-brand">MoMo <em>Xe & Giao Th\xF4ng</em></div> <p class="footer-about">B\u1ED9 ti\u1EC7n \xEDch cho ch\u1EE7 xe tr\xEAn MoMo: tra ph\u1EA1t ngu\u1ED9i, gi\xE1 x\u0103ng d\u1EA7u, n\u1EA1p ePass, b\u1EA3o hi\u1EC3m xe v\xE0 m\u1EA1ng l\u01B0\u1EDBi c\xE2y x\u0103ng \u0111\u1ED1i t\xE1c to\xE0n qu\u1ED1c.</p> </div> <div class="footer-col"> <h4>Ti\u1EC7n \xEDch</h4> <a href="/tien-ich-giao-thong#tra-phat-nguoi">Tra ph\u1EA1t ngu\u1ED9i</a> <a href="/tien-ich-giao-thong/gia-xang">Gi\xE1 x\u0103ng h\xF4m nay</a> <a href="/tien-ich-giao-thong#epass">N\u1EA1p ePass</a> <a href="/tien-ich-giao-thong#bao-hiem">B\u1EA3o hi\u1EC3m TNDS</a> </div> <div class="footer-col"> <h4>Tra c\u1EE9u ph\u1ED5 bi\u1EBFn</h4> <a href="/tien-ich-giao-thong/gia-xang">Gi\xE1 x\u0103ng E10 RON 95 h\xF4m nay</a> <a href="/tien-ich-giao-thong/gia-xang">Gi\xE1 x\u0103ng E5 RON 92</a> <a href="/tien-ich-giao-thong/gia-xang">Gi\xE1 d\u1EA7u Diesel h\xF4m nay</a> <a href="/tien-ich-giao-thong#tra-phat-nguoi">Ph\u1EA1t ngu\u1ED9i TP.HCM</a> </div> <div class="footer-col"> <h4>MoMo</h4> <a href="#" onclick="toast('V\u1EC1 MoMo...');return false">V\u1EC1 ch\xFAng t\xF4i</a> <a href="#" onclick="toast('\u0110i\u1EC1u kho\u1EA3n...');return false">\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng</a> <a href="#" onclick="toast('B\u1EA3o m\u1EADt...');return false">Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt</a> </div> </div> <div class="footer-legal"> <span>\xA9 2026 M_Service. Prototype n\u1ED9i b\u1ED9 - Research Spec, kh\xF4ng ph\u1EA3i production.</span> <span>D\u1EEF li\u1EC7u demo. Gi\xE1 v\xE0 th\xF4ng tin ch\u1EC9 mang t\xEDnh minh h\u1ECDa.</span> </div> </div> </footer> <div id="toast"></div> <script>
  /* \u2500\u2500 data \u2500\u2500 */
  const GAS = {
    1: [
      { name: 'E10 RON 95-III', sub: 'X\u0103ng sinh h\u1ECDc E10', color: '#EB2F96', price: 22850, change: '\u25B2 1.420\u0111', dir: 'up' },
      { name: 'E5 RON 92-II',   sub: 'X\u0103ng sinh h\u1ECDc E5',  color: '#16A34A', price: 22380, change: '\u25B2 1.300\u0111', dir: 'up' },
      { name: 'DO 0,05S-II',    sub: 'D\u1EA7u diesel ph\u1ED5 th\xF4ng', color: '#2563EB', price: 27620, change: '\u25B2 1.860\u0111', dir: 'up' },
      { name: 'DO 0,001S-V',    sub: 'D\u1EA7u diesel cao c\u1EA5p',   color: '#7C3AED', price: 29720, change: '\u25B2 1.950\u0111', dir: 'up' },
      { name: 'D\u1EA7u h\u1ECFa 2-K',   sub: 'Kerosene',             color: '#D97706', price: 27400, change: '\u25B2 1.780\u0111', dir: 'up' },
    ],
    2: [
      { name: 'E10 RON 95-III', sub: 'V\xF9ng 2', color: '#EB2F96', price: 23300, change: '\u25B2 1.420\u0111', dir: 'up' },
      { name: 'E5 RON 92-II',   sub: 'V\xF9ng 2', color: '#16A34A', price: 22820, change: '\u25B2 1.300\u0111', dir: 'up' },
      { name: 'DO 0,05S-II',    sub: 'V\xF9ng 2', color: '#2563EB', price: 28170, change: '\u25B2 1.860\u0111', dir: 'up' },
      { name: 'DO 0,001S-V',    sub: 'V\xF9ng 2', color: '#7C3AED', price: 30310, change: '\u25B2 1.950\u0111', dir: 'up' },
      { name: 'D\u1EA7u h\u1ECFa 2-K',   sub: 'V\xF9ng 2', color: '#D97706', price: 27940, change: '\u25B2 1.780\u0111', dir: 'up' },
    ],
  };

  const HISTORY = [
    { date: '26/06/2026', price: '22.240', delta: '\u25BC 170', dir: 'down' },
    { date: '19/06/2026', price: '22.410', delta: '\u25BC 230', dir: 'down' },
    { date: '12/06/2026', price: '22.640', delta: '\u25BC 310', dir: 'down' },
    { date: '05/06/2026', price: '22.950', delta: '\u25B2 180', dir: 'up' },
    { date: '29/05/2026', price: '22.770', delta: '\u25BC 420', dir: 'down' },
    { date: '22/05/2026', price: '23.190', delta: '\u25B2 250', dir: 'up' },
    { date: '15/05/2026', price: '22.940', delta: '\u25BC 190', dir: 'down' },
    { date: '08/05/2026', price: '23.130', delta: '\u25B2 360', dir: 'up' },
    { date: '24/04/2026', price: '22.770', delta: '\u25BC 280', dir: 'down' },
    { date: '10/04/2026', price: '23.050', delta: '\u25B2 410', dir: 'up' },
  ];

  /* \u2500\u2500 render \u2500\u2500 */
  const fmt = n => n.toLocaleString('vi-VN');

  function renderGas(region) {
    document.getElementById('gasTable').innerHTML = GAS[region].map(g => \\\`
      <div class="gas-row">
        <div class="gr-left">
          <div class="gr-swatch" style="background:\\\${g.color}"></div>
          <div><div class="gr-name">\\\${g.name}</div><div class="gr-sub">\\\${g.sub}</div></div>
        </div>
        <div class="gr-right">
          <span class="gr-badge \\\${g.dir}">\\\${g.change}</span>
          <span class="gr-price">\\\${fmt(g.price)}<span class="gr-unit"> \u0111/l\xEDt</span></span>
        </div>
      </div>\\\`).join('');
  }

  function renderHistory() {
    document.getElementById('histBody').innerHTML = HISTORY.map(h => \\\`
      <tr>
        <td>\\\${h.date}</td>
        <td class="num">\\\${h.price} \u0111/l\xEDt</td>
        <td><span class="ht-delta \\\${h.dir}">\\\${h.delta}\u0111</span></td>
      </tr>\\\`).join('');
  }

  /* \u2500\u2500 calculator \u2500\u2500 */
  let calcMode = 'lit';
  let fuelPrice = 22850;
  let fuelName = 'E10 RON 95-III';

  function setFuel(btn) {
    document.querySelectorAll('#fuelPills .pill-btn').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    fuelPrice = +btn.dataset.price;
    fuelName = btn.textContent.trim();
    document.getElementById('crFuelName').textContent = fuelName;
    document.getElementById('crUnitPrice').textContent = fmt(fuelPrice) + '\u0111/l\xEDt';
    calc();
  }

  function setChip(val) {
    document.getElementById('calcInput').value = val;
    document.querySelectorAll('.chip-row .chip-btn').forEach(b => {
      const bVal = calcMode === 'lit' ? +b.textContent : +b.textContent.replace(/\\\\D/g,'') * 1000;
      b.classList.toggle('active', +b.onclick?.toString().match(/\\\\d+/)?.[0] === val);
    });
    // simpler: match text
    document.querySelectorAll('#calcChips .chip-btn').forEach(b => {
      const num = +b.getAttribute('onclick').match(/\\\\d+/)[0];
      b.classList.toggle('active', num === val);
    });
    calc();
  }

  function setMode(mode) {
    calcMode = mode;
    document.getElementById('modeLit').classList.toggle('active', mode === 'lit');
    document.getElementById('modeMoney').classList.toggle('active', mode === 'money');
    const input = document.getElementById('calcInput');
    const chips = document.getElementById('calcChips');
    if (mode === 'lit') {
      document.getElementById('calcInputLabel').textContent = 'S\u1ED1 l\xEDt c\u1EA7n \u0111\u1ED5';
      document.getElementById('calcUnitTag').textContent = 'l\xEDt';
      document.getElementById('crLabel').textContent = 'Th\xE0nh ti\u1EC1n';
      document.getElementById('crQtyLabel').textContent = 'S\u1ED1 l\xEDt';
      input.value = 45;
      chips.innerHTML = \\\`
        <button class="chip-btn" onclick="setChip(20)">20 l\xEDt</button>
        <button class="chip-btn active" onclick="setChip(45)">45 l\xEDt</button>
        <button class="chip-btn" onclick="setChip(60)">60 l\xEDt</button>
        <button class="chip-btn" onclick="setChip(70)">70 l\xEDt</button>\\\`;
    } else {
      document.getElementById('calcInputLabel').textContent = 'S\u1ED1 ti\u1EC1n mu\u1ED1n \u0111\u1ED5';
      document.getElementById('calcUnitTag').textContent = '\u0111';
      document.getElementById('crLabel').textContent = 'S\u1ED1 l\xEDt nh\u1EADn \u0111\u01B0\u1EE3c';
      document.getElementById('crQtyLabel').textContent = 'S\u1ED1 ti\u1EC1n';
      input.value = 200000;
      chips.innerHTML = \\\`
        <button class="chip-btn" onclick="setChip(100000)">100k</button>
        <button class="chip-btn active" onclick="setChip(200000)">200k</button>
        <button class="chip-btn" onclick="setChip(500000)">500k</button>
        <button class="chip-btn" onclick="setChip(1000000)">1 tri\u1EC7u</button>\\\`;
    }
    calc();
  }

  function calc() {
    const v = parseFloat(document.getElementById('calcInput').value) || 0;
    const crValue = document.getElementById('crValue');
    const crNote = document.getElementById('crNote');
    const crQty = document.getElementById('crQty');
    const fieldVal = document.getElementById('calcFieldValue');
    if (calcMode === 'lit') {
      const total = Math.round(v * fuelPrice);
      crValue.innerHTML = \\\`\\\${fmt(total)}<small>\u0111</small>\\\`;
      crQty.textContent = v + ' l\xEDt';
      fieldVal.textContent = v + ' l\xEDt';
      crNote.innerHTML = \\\`Thanh to\xE1n qua <em>V\xED Tr\u1EA3 Sau ho\xE0n 10%</em> t\u1EA1i c\xE2y x\u0103ng \u0111\u1ED1i t\xE1c Petrolimex, PV Oil.\\\`;
    } else {
      const liters = v / fuelPrice;
      crValue.innerHTML = \\\`\\\${liters.toFixed(2).replace('.', ',')}<small> l\xEDt</small>\\\`;
      crQty.textContent = fmt(v) + '\u0111';
      fieldVal.textContent = fmt(v) + '\u0111';
      crNote.innerHTML = \\\`Thanh to\xE1n qua <em>V\xED Tr\u1EA3 Sau ho\xE0n 10%</em> \u0111\u01B0\u1EE3c ho\xE0n l\u1EA1i kho\u1EA3ng \\\${fmt(Math.round(v * 0.1 > 20000 ? 20000 : v * 0.1))}\u0111.\\\`;
    }
  }

  /* \u2500\u2500 misc \u2500\u2500 */
  function setRegion(btn, region) {
    document.querySelectorAll('.grt').forEach(t => t.classList.remove('on'));
    btn.classList.add('on');
    renderGas(region);
  }

  function toggleFaq(btn) {
    btn.closest('.faq-item').classList.toggle('open');
  }

  let toastTimer;
  function detectLocation() {
    const btn = document.getElementById('stn-locate-btn');
    btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> \u0110ang x\xE1c \u0111\u1ECBnh...';
    btn.disabled = true;
    setTimeout(() => {
      document.getElementById('stn-title').textContent = 'G\u1EA7n b\u1EA1n nh\u1EA5t';
      document.getElementById('stn-sub').textContent = 'Qu\u1EADn 7, TP.HCM \xB7 S\u1EAFp x\u1EBFp theo kho\u1EA3ng c\xE1ch';
      document.querySelectorAll('.stn-dist-val').forEach(el => el.style.display = '');
      btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg> Qu\u1EADn 7';
      btn.classList.add('located');
      btn.disabled = false;
    }, 1200);
  }
  function toast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
  }

  /* \u2500\u2500 price strip data \u2500\u2500 */
  const STRIP_DATA = [
    { name:'E10 RON 95-III', price:22850, delta:+1420, pct:'+6,63%', icon:'Fuel',  color:'#EB2F96', bg:'#fdf2f8',
      history:[21430,21780,22050,22770,22950,22640,22410,22240,21430,22850] },
    { name:'E5 RON 92-II',   price:22380, delta:+1300, pct:'+6,16%', icon:'Leaf',  color:'#16A34A', bg:'#f0fdf4',
      history:[20960,21310,21580,22300,22480,22170,21940,21770,20960,22380] },
    { name:'DO 0,05S-II',    price:27620, delta:+1860, pct:'+7,22%', icon:'Truck', color:'#2563EB', bg:'#eff6ff',
      history:[26100,26450,26700,27240,27480,27020,26780,26580,26100,27620] },
    { name:'DO 0,001S-V',    price:29720, delta:+1950, pct:'+7,02%', icon:'Truck', color:'#7C3AED', bg:'#f5f3ff',
      history:[28100,28510,28800,29380,29580,29120,28870,28650,28100,29720] },
    { name:'D\u1EA7u h\u1ECFa 2-K',   price:27400, delta:+1780, pct:'+6,95%', icon:'Flame', color:'#D97706', bg:'#fffbeb',
      history:[25820,26170,26430,27020,27220,26770,26520,26310,25820,27400] },
  ];

  /* \u2500\u2500 sparkline SVG helper \u2500\u2500 */
  function buildSparkline(prices, color) {
    const W = 100, H = 28, pad = 3;
    const min = Math.min(...prices), max = Math.max(...prices);
    const range = max - min || 1;
    const pts = prices.map((p, i) => {
      const x = pad + (i / (prices.length - 1)) * (W - pad * 2);
      const y = H - pad - ((p - min) / range) * (H - pad * 2);
      return \\\`\\\${x.toFixed(1)},\\\${y.toFixed(1)}\\\`;
    });
    const ptsStr = pts.join(' ');
    const lastPt = pts[pts.length - 1];
    const [lx, ly] = lastPt.split(',');
    const fillPts = \\\`\\\${pad},\\\${H} \\\` + ptsStr + \\\` \\\${(W-pad).toFixed(1)},\\\${H}\\\`;
    return \\\`<svg class="gz-pc-spark" viewBox="0 0 \\\${W} \\\${H}" preserveAspectRatio="none">
      <polygon class="spark-fill" points="\\\${fillPts}" fill="\\\${color}"/>
      <polyline points="\\\${ptsStr}" stroke="\\\${color}" stroke-width="1.5"/>
      <circle class="spark-dot" cx="\\\${lx}" cy="\\\${ly}" r="2.5" fill="\\\${color}"/>
    </svg>\\\`;
  }

  /* \u2500\u2500 countdown to next k\u1EF3 \u0111i\u1EC1u h\xE0nh (every Thursday 15:00 VN time) \u2500\u2500 */
  function getNextKyDieuHanh() {
    const now = new Date();
    // Vietnam is UTC+7
    const vnNow = new Date(now.getTime() + 7 * 3600000);
    const day = vnNow.getUTCDay(); // 0=Sun,4=Thu
    let daysUntilThu = (4 - day + 7) % 7;
    // If today is Thursday and before 15:00, next is today; if after, next week
    if (day === 4) {
      const h = vnNow.getUTCHours(), m = vnNow.getUTCMinutes();
      if (h > 15 || (h === 15 && m >= 5)) daysUntilThu = 7;
      else daysUntilThu = 0;
    } else if (daysUntilThu === 0) {
      daysUntilThu = 7;
    }
    const next = new Date(vnNow);
    next.setUTCDate(next.getUTCDate() + daysUntilThu);
    next.setUTCHours(15, 0, 0, 0);
    return new Date(next.getTime() - 7 * 3600000); // back to UTC
  }

  function updateCountdown() {
    const el = document.getElementById('countdownText');
    if (!el) return;
    const diff = getNextKyDieuHanh() - new Date();
    if (diff <= 0) { el.textContent = '\u0110ang c\u1EADp nh\u1EADt...'; return; }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    el.textContent = d > 0
      ? \\\`K\u1EF3 ti\u1EBFp theo: \\\${d} ng\xE0y \\\${h}h\\\${String(m).padStart(2,'0')}p\\\`
      : \\\`K\u1EF3 ti\u1EBFp theo: \\\${h}h \\\${String(m).padStart(2,'0')}p \\\${String(s).padStart(2,'0')}s\\\`;
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* \u2500\u2500 CountUp animation helper \u2500\u2500 */
  function animateCount(el, target, duration) {
    const start = performance.now();
    const from = 0;
    function step(now) {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3); // ease-out cubic
      const val = Math.round(from + (target - from) * ease);
      el.textContent = val.toLocaleString('vi-VN');
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const KV_DATA = {
    1: [
      {city:'H\xE0 N\u1ED9i',          price:22850},
      {city:'H\u1EA3i Ph\xF2ng',       price:22850},
      {city:'TP. H\u1ED3 Ch\xED Minh', price:22850},
      {city:'\u0110\xE0 N\u1EB5ng',         price:22850},
      {city:'C\u1EA7n Th\u01A1',         price:22850},
      {city:'B\xECnh D\u01B0\u01A1ng',      price:22850},
      {city:'\u0110\u1ED3ng Nai',        price:22850},
      {city:'B\u1EAFc Ninh',        price:22850},
    ],
    2: [
      {city:'H\xE0 Giang',      price:23300},
      {city:'Cao B\u1EB1ng',      price:23300},
      {city:'L\u1EA1ng S\u01A1n',      price:23300},
      {city:'Lai Ch\xE2u',      price:23300},
      {city:'\u0110i\u1EC7n Bi\xEAn',     price:23300},
      {city:'S\u01A1n La',        price:23300},
      {city:'H\xF2a B\xECnh',      price:23300},
      {city:'Ph\xFA Th\u1ECD',       price:23300},
    ],
  };

  const REGION_TABLE = [
    { region:'V\xF9ng 1', city:'H\xE0 N\u1ED9i, TP.HCM, \u0110\xE0 N\u1EB5ng v\xE0 60 t\u1EC9nh \u0111\u1ED3ng b\u1EB1ng', r95:22850, e5:22380, do05:27620, do001:29720, dh:27400, d:+1420 },
    { region:'V\xF9ng 2', city:'H\xE0 Giang, Cao B\u1EB1ng, L\u1EA1ng S\u01A1n v\xE0 c\xE1c t\u1EC9nh mi\u1EC1n n\xFAi, h\u1EA3i \u0111\u1EA3o',  r95:23300, e5:22820, do05:28170, do001:30310, dh:27940, d:+1420 },
  ];

  function renderPriceStrip() {
    const el = document.getElementById('priceStrip');
    if (!el) return;
    el.innerHTML = STRIP_DATA.map((f, i) => {
      const isUp = f.delta > 0;
      const isDown = f.delta < 0;
      const dir = isDown ? 'down' : isUp ? 'up' : 'same';
      const arrow = isDown ? '\u25BC' : isUp ? '\u25B2' : '\u25AC';
      const sign = isUp ? '+' : '';
      return \\\`<div class="gz-price-card\\\${i===0?' active':''}" onclick="selectFuelCard(this,\\\${i})">
        <div class="gz-pc-top">
          <div class="gz-pc-icon" style="background:\\\${f.bg}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="\\\${f.color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">\\\${licon(f.icon,14,2.2).replace(/<svg[^>]*>/,'').replace('</svg>','')}</svg>
          </div>
          <div class="gz-pc-name">\\\${f.name}</div>
        </div>
        <div class="gz-pc-price"><span class="gz-count" data-target="\\\${f.price}" data-delay="\\\${i * 60}">0</span> <span class="gz-unit">\u0111/l\xEDt</span></div>
        <div class="gz-pc-badge \\\${dir}">
          <span>\\\${arrow} \\\${sign}\\\${Math.abs(f.delta)}\u0111</span>
          <span class="gz-pc-pct">(\\\${f.pct})</span>
        </div>
      </div>\\\`;
    }).join('');
    // Animate counts with stagger
    el.querySelectorAll('.gz-count').forEach(span => {
      const target = parseInt(span.dataset.target);
      const delay = parseInt(span.dataset.delay) || 0;
      setTimeout(() => animateCount(span, target, 800), delay);
    });
  }

  function selectFuelCard(el, idx) {
    document.querySelectorAll('.gz-price-card').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    // Highlight matching column in price table
    document.querySelectorAll('.gz-region-table th, .gz-region-table td').forEach(cell => cell.classList.remove('gz-col-active'));
    document.querySelectorAll(\\\`.gz-region-table th:nth-child(\\\${idx+2}), .gz-region-table td:nth-child(\\\${idx+2})\\\`).forEach(cell => cell.classList.add('gz-col-active'));
  }

  function renderPriceTable() {
    const el = document.getElementById('priceTablePanel');
    if (!el) return;
    el.innerHTML = \\\`<table class="gz-region-table">
      <thead><tr>
        <th>Khu v\u1EF1c \xE1p d\u1EE5ng</th>
        <th>E10 RON 95-III</th>
        <th>E5 RON 92-II</th>
        <th>DO 0,05S-II</th>
        <th>DO 0,001S-V</th>
        <th>D\u1EA7u h\u1ECFa 2-K</th>
      </tr></thead>
      <tbody>\\\${REGION_TABLE.map(r => \\\`<tr>
        <td><div class="gz-rt-region">\\\${r.region}</div><div class="gz-rt-city">\\\${r.city}</div></td>
        <td><div class="gz-val">\\\${fmt(r.r95)} \u0111</div><span class="gz-rt-delta up">\u25B2 +1.420</span></td>
        <td><div class="gz-val">\\\${fmt(r.e5)} \u0111</div><span class="gz-rt-delta up">\u25B2 +1.300</span></td>
        <td><div class="gz-val">\\\${fmt(r.do05)} \u0111</div><span class="gz-rt-delta up">\u25B2 +1.860</span></td>
        <td><div class="gz-val">\\\${fmt(r.do001)} \u0111</div><span class="gz-rt-delta up">\u25B2 +1.950</span></td>
        <td><div class="gz-val">\\\${fmt(r.dh)} \u0111</div><span class="gz-rt-delta up">\u25B2 +1.780</span></td>
      </tr>\\\`).join('')}</tbody>
    </table>\\\`;
  }


  function renderKVPrices(v) {
    const el = document.getElementById('kvPriceList');
    if (!el) return;
    const data = KV_DATA[v];
    const commonPrice = data[0].price;
    const allSame = data.every(c => c.price === commonPrice);
    if (allSame) {
      el.innerHTML = \\\`
        <div class="gz-kv-summary">
          <span class="gz-kv-summary-label">Gi\xE1 E10 RON 95-III</span>
          <span class="gz-kv-summary-price">\\\${fmt(commonPrice)}</span>
          <span class="gz-kv-summary-unit">\u0111/l\xEDt</span>
        </div>
        <div class="gz-kv-cities">
          \\\${data.map(c => \\\`<div class="gz-kv-city-item">\\\${c.city}</div>\\\`).join('')}
        </div>\\\`;
    } else {
      el.innerHTML = \\\`<div class="gz-kv-cities" style="grid-template-columns:1fr auto;gap:0">
        \\\${data.map(c => \\\`
          <div class="gz-kv-city-item">\\\${c.city}</div>
          <div style="font-size:13px;font-weight:700;padding:6px 0;font-variant-numeric:tabular-nums">\\\${fmt(c.price)} \u0111/l\xEDt</div>
        \\\`).join('')}
      </div>\\\`;
    }
  }

  function switchKV(btn, v) {
    document.querySelectorAll('.gz-kv-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    renderKVPrices(v);
  }

  function switchPriceTab(tab, btn) {
    document.querySelectorAll('.gz-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    if (tab === 'cay-xang') {
      document.getElementById('priceTablePanel').innerHTML = \\\`<div style="padding:24px 20px;text-align:center;color:var(--gray-400);font-size:13px">T\xEDnh n\u0103ng \u0111ang ph\xE1t tri\u1EC3n \u2014 Xem gi\xE1 theo t\u1EEBng c\xE2y x\u0103ng s\u1EBD ra m\u1EAFt s\u1EDBm.</div>\\\`;
    } else {
      renderPriceTable();
    }
  }

  function setTimePeriod(btn) {
    document.querySelectorAll('.gz-tt').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
  }

  function onHeroRegionChange(v) { /* future: re-fetch data */ }

  renderGas(1);
  renderHistory();
  calc();
  renderPriceTable();
  renderKVPrices(1);

  // \u2500\u2500 lucide helpers \u2500\u2500
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
    document.querySelectorAll('.mega-item[data-micon]').forEach(el => {
      if(!el.querySelector('svg'))el.insertAdjacentHTML('afterbegin',licon(el.dataset.micon,15,1.8));
    });
    renderPriceStrip();
  });

/* \u2500\u2500 NAV VEHICLE SEARCH \u2500\u2500 */
(function() {
  const VEHICLE_DATA = [
    {brand:'toyota',label:'Toyota',color:'#EB0A1E',cat:'\xD4 t\xF4',models:[{name:'Fortuner',slug:'fortuner',type:'SUV'},{name:'Camry',slug:'camry',type:'Sedan'},{name:'Corolla Cross',slug:'corolla-cross',type:'Crossover'},{name:'Innova Cross',slug:'innova-cross',type:'MPV'}]},
    {brand:'honda',label:'Honda',color:'#CC0000',cat:'\xD4 t\xF4',models:[{name:'CR-V',slug:'cr-v',type:'SUV'},{name:'City',slug:'city',type:'Sedan'},{name:'Civic',slug:'civic',type:'Sedan'},{name:'HR-V',slug:'hr-v',type:'Crossover'}]},
    {brand:'hyundai',label:'Hyundai',color:'#002C5F',cat:'\xD4 t\xF4',models:[{name:'Tucson',slug:'tucson',type:'SUV'},{name:'Ioniq 6',slug:'ioniq-6',type:'EV'}]},
    {brand:'kia',label:'Kia',color:'#05141F',cat:'\xD4 t\xF4',models:[{name:'Seltos',slug:'seltos',type:'Crossover'},{name:'Sorento',slug:'sorento',type:'SUV'}]},
    {brand:'vinfast',label:'VinFast',color:'#009EDB',cat:'\xD4 t\xF4',models:[{name:'VF 8',slug:'vf-8',type:'EV'},{name:'VF 6',slug:'vf-6',type:'EV'}]},
    {brand:'honda-may',label:'Honda',color:'#CC0000',cat:'Xe m\xE1y',models:[{name:'Wave Alpha',slug:'wave-alpha',type:'Xe s\u1ED1'},{name:'Vision',slug:'vision',type:'Tay ga'},{name:'Air Blade',slug:'air-blade',type:'Tay ga'},{name:'SH 160i',slug:'sh-160i',type:'Tay ga'}]},
    {brand:'yamaha-may',label:'Yamaha',color:'#003087',cat:'Xe m\xE1y',models:[{name:'NVX 155',slug:'nvx-155',type:'Tay ga'},{name:'Exciter 150',slug:'exciter-150',type:'C\xF4n tay'}]},
  ];
  const INDEX = [];
  VEHICLE_DATA.forEach(b => b.models.forEach(m => {
    INDEX.push({brand:b.brand,brandLabel:b.label,color:b.color,cat:b.cat,name:m.name,slug:m.slug,type:m.type,
      search:(b.label+' '+m.name+' '+m.slug+' '+b.label.toLowerCase().replace(/[^a-z0-9]/g,'')+m.name.toLowerCase().replace(/[^a-z0-9]/g,'')).toLowerCase()});
  }));
  const inp = document.getElementById('navSearchInp');
  const drop = document.getElementById('navSearchDrop');
  let blurTimer = null;
  function getUrl(item){return item.cat==='Xe m\xE1y'?'/tien-ich-giao-thong/hang-xe-may':'/tien-ich-giao-thong/hang-xe/'+item.brand+'/'+item.slug;}
  function renderTo(cont,results){
    if(!results.length){cont.innerHTML='<div class="nsd-empty"><strong>Kh\xF4ng t\xECm th\u1EA5y xe</strong>Th\u1EED t\xEAn kh\xE1c</div>';return;}
    const g={};results.forEach(r=>{if(!g[r.cat])g[r.cat]=[];g[r.cat].push(r);});
    let h='';Object.entries(g).forEach(([c,its],i)=>{if(i>0)h+='<div class="nsd-divider"></div>';h+=\\\`<div class="nsd-section-label">\\\${c}</div>\\\`;its.forEach(r=>{const tc=r.type==='EV'?'ev':r.cat==='Xe m\xE1y'?'motorbike':'';h+=\\\`<a class="nsd-item" href="\\\${getUrl(r)}"><span class="nsd-dot" style="background:\\\${r.color}"></span><span class="nsd-info"><span class="nsd-model">\\\${r.name}</span><span class="nsd-brand">\\\${r.brandLabel}</span></span><span class="nsd-type \\\${tc}">\\\${r.type}</span></a>\\\`;});});
    cont.innerHTML=h;
  }
  function showEmpty(){
    drop.innerHTML='<div class="nsd-section-label">Ph\u1ED5 bi\u1EBFn nh\u1EA5t</div>'+
      ['toyota|fortuner|Fortuner|SUV|#EB0A1E|\xD4 t\xF4','honda|city|City|Sedan|#CC0000|\xD4 t\xF4','vinfast|vf-8|VF 8|EV|#009EDB|\xD4 t\xF4',
       'honda-may|air-blade|Air Blade|Tay ga|#CC0000|Xe m\xE1y','yamaha-may|nvx-155|NVX 155|Tay ga|#003087|Xe m\xE1y']
      .map(s=>{const [brand,slug,name,type,color,cat]=s.split('|');const isMoto=cat==='Xe m\xE1y';const url=isMoto?'/tien-ich-giao-thong/hang-xe-may':\\\`/tien-ich-giao-thong/hang-xe/\\\${brand}/\\\${slug}\\\`;const tc=type==='EV'?'ev':isMoto?'motorbike':'';
        return \\\`<a class="nsd-item" href="\\\${url}"><span class="nsd-dot" style="background:\\\${color}"></span><span class="nsd-info"><span class="nsd-model">\\\${name}</span><span class="nsd-brand">\\\${brand.replace('-may','').charAt(0).toUpperCase()+brand.replace('-may','').slice(1)}</span></span><span class="nsd-type \\\${tc}">\\\${type}</span></a>\\\`;
      }).join('');
  }
  inp.addEventListener('input',()=>{const q=inp.value.trim().toLowerCase();if(!q){showEmpty();drop.classList.add('open');return;}renderTo(drop,INDEX.filter(r=>r.search.includes(q)).slice(0,12));drop.classList.add('open');});
  inp.addEventListener('focus',()=>{clearTimeout(blurTimer);if(!inp.value.trim())showEmpty();drop.classList.add('open');});
  inp.addEventListener('blur',()=>{blurTimer=setTimeout(()=>drop.classList.remove('open'),160);});
  inp.addEventListener('keydown',e=>{if(e.key==='Escape'){drop.classList.remove('open');inp.blur();}});
  document.addEventListener('keydown',e=>{if(e.key==='/'&&document.activeElement!==inp&&document.activeElement.tagName!=='INPUT'&&document.activeElement.tagName!=='TEXTAREA'){e.preventDefault();inp.focus();}});
  const mOv=document.getElementById('mobileSearchOverlay'),mInp=document.getElementById('mobileSearchInp'),mDrop=document.getElementById('mobileSearchDrop');
  mInp.addEventListener('input',()=>{const q=mInp.value.trim().toLowerCase();if(!q){mDrop.classList.remove('open');return;}renderTo(mDrop,INDEX.filter(r=>r.search.includes(q)).slice(0,10));mDrop.classList.add('open');});
  window.toggleMobileSearch=function(){const o=mOv.classList.contains('open');if(o){closeMobileSearch();}else{mOv.classList.add('open');mDrop.classList.remove('open');mInp.value='';setTimeout(()=>mInp.focus(),60);}};
  window.closeMobileSearch=function(){mOv.classList.remove('open');mDrop.classList.remove('open');mInp.value='';};
})();
window.openNavSidebar=function(){document.getElementById('navSidebar').classList.add('open');document.getElementById('navOverlay').classList.add('open');};
window.closeNavSidebar=function(){document.getElementById('navSidebar').classList.remove('open');document.getElementById('navOverlay').classList.remove('open');};
<\/script> `, " "])), renderComponent($$result2, "Fragment", Fragment$1, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(`<style>${rawCss}</style>`)}` }), maybeRenderHead(), renderComponent($$result2, "GasPriceHeroMotion", GasPriceHeroMotion, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/components/gas-price/GasPriceHeroMotion", "client:component-export": "default" }), renderComponent($$result2, "GasPriceMotionWidget", GasPriceMotionWidget, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/components/gas-price/GasPriceMotionWidget", "client:component-export": "default" }), renderComponent($$result2, "GasPriceJTBDSuite", GasPriceJTBDSuite, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/components/gas-price/GasPriceJTBDSuite", "client:component-export": "default" }), renderComponent($$result2, "BklitGasTrendChart", BklitGasTrendChart, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/components/gas-price/BklitGasTrendChart", "client:component-export": "default" }), renderScript($$result2, "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/gia-xang.astro?astro&type=script&index=0&lang.ts")) })}`;
}, "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/gia-xang.astro", void 0);

const $$file = "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/gia-xang.astro";
const $$url = "/tien-ich-giao-thong/gia-xang";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GiaXang,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
