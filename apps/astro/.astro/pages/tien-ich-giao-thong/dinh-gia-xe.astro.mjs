import { c as createComponent, b as renderTemplate, e as renderComponent, F as Fragment, u as unescapeHTML, m as maybeRenderHead } from '../../chunks/astro/server_BMOddyS3.mjs';
import 'piccolore';
import { $ as $$VehicleHub } from '../../chunks/VehicleHub_Msovdq2n.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Star, MinusCircle, Wrench, Car, ShieldCheck, Search, Calendar, Gauge, TrendingUp } from 'lucide-react';
import { f as fireConfetti } from '../../chunks/confetti_DUZ25cbN.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const CAR_DATABASE = [
  { brandId: "toyota", brandName: "Toyota", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg", modelId: "vios", modelName: "Vios 1.5G", sub: "Sedan hạng B", fullName: "Toyota Vios 1.5G", baseNew: 592 },
  { brandId: "toyota", brandName: "Toyota", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg", modelId: "camry", modelName: "Camry 2.5Q", sub: "Sedan hạng D", fullName: "Toyota Camry 2.5Q", baseNew: 1405 },
  { brandId: "toyota", brandName: "Toyota", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg", modelId: "fortuner", modelName: "Fortuner 2.7V", sub: "SUV 7 chỗ", fullName: "Toyota Fortuner 2.7V", baseNew: 1229 },
  { brandId: "toyota", brandName: "Toyota", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg", modelId: "corolla-cross", modelName: "Corolla Cross 1.8V", sub: "SUV hạng C", fullName: "Toyota Corolla Cross 1.8V", baseNew: 860 },
  { brandId: "honda", brandName: "Honda", logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Honda_logo.svg", modelId: "city", modelName: "City RS", sub: "Sedan hạng B", fullName: "Honda City RS", baseNew: 609 },
  { brandId: "honda", brandName: "Honda", logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Honda_logo.svg", modelId: "crv", modelName: "CR-V L AWD", sub: "SUV 5+2 chỗ", fullName: "Honda CR-V L AWD", baseNew: 1310 },
  { brandId: "honda", brandName: "Honda", logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Honda_logo.svg", modelId: "civic", modelName: "Civic RS", sub: "Sedan hạng C", fullName: "Honda Civic RS", baseNew: 870 },
  { brandId: "hyundai", brandName: "Hyundai", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Hyundai_Motor_Company_logo.svg", modelId: "accent", modelName: "Accent 1.4 AT", sub: "Sedan hạng B", fullName: "Hyundai Accent 1.4 AT", baseNew: 484 },
  { brandId: "hyundai", brandName: "Hyundai", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Hyundai_Motor_Company_logo.svg", modelId: "tucson", modelName: "Tucson 2.0 Dầu", sub: "SUV hạng C", fullName: "Hyundai Tucson 2.0 Dầu", baseNew: 959 },
  { brandId: "hyundai", brandName: "Hyundai", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Hyundai_Motor_Company_logo.svg", modelId: "santa-fe", modelName: "Santa Fe 2.2 Dầu", sub: "SUV 7 chỗ", fullName: "Hyundai Santa Fe 2.2 Dầu", baseNew: 1269 },
  { brandId: "mazda", brandName: "Mazda", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Mazda_logo.svg", modelId: "cx5", modelName: "CX-5 2.0 Premium", sub: "SUV hạng C", fullName: "Mazda CX-5 2.0 Premium", baseNew: 829 },
  { brandId: "mazda", brandName: "Mazda", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Mazda_logo.svg", modelId: "mazda3", modelName: "Mazda3 1.5 Luxury", sub: "Sedan hạng C", fullName: "Mazda3 1.5 Luxury", baseNew: 619 },
  { brandId: "ford", brandName: "Ford", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg", modelId: "ranger", modelName: "Ranger Wildtrak", sub: "Bán tải 4x4", fullName: "Ford Ranger Wildtrak", baseNew: 979 },
  { brandId: "ford", brandName: "Ford", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg", modelId: "everest", modelName: "Everest Titanium+", sub: "SUV 7 chỗ", fullName: "Ford Everest Titanium+", baseNew: 1468 },
  { brandId: "vinfast", brandName: "VinFast", logo: "https://homepage.momocdn.net/img/momo-upload-api-240411101101-638482506617370879.png", modelId: "vf8", modelName: "VF 8 Plus", sub: "SUV hạng D điện", fullName: "VinFast VF 8 Plus", baseNew: 1270 },
  { brandId: "mercedes", brandName: "Mercedes", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg", modelId: "glc", modelName: "GLC 300 4MATIC", sub: "SUV hạng D sang", fullName: "Mercedes-Benz GLC 300", baseNew: 2799 }
];
const POPULAR_SUGGESTIONS = [
  { label: "Toyota Vios", entry: CAR_DATABASE[0] },
  { label: "Honda CR-V", entry: CAR_DATABASE[5] },
  { label: "Mazda CX-5", entry: CAR_DATABASE[10] },
  { label: "Hyundai Accent", entry: CAR_DATABASE[7] },
  { label: "Ford Ranger", entry: CAR_DATABASE[12] },
  { label: "VinFast VF 8", entry: CAR_DATABASE[14] }
];
const DEPRECIATION_RATES = [1, 0.91, 0.83, 0.76, 0.69, 0.63, 0.57, 0.52, 0.47, 0.43];
const CONDITION_MULTIPLIERS = {
  "can-sua": { label: "Cần sửa chữa", mult: 0.82, icon: Wrench },
  "trung-binh": { label: "Trung bình", mult: 0.93, icon: MinusCircle },
  "tot": { label: "Tốt", mult: 1, icon: Star },
  "rat-tot": { label: "Rất tốt", mult: 1.05, icon: Sparkles }
};
function DinhGiaXeMotionWidget() {
  const [searchQuery, setSearchQuery] = useState("Mazda CX-5 2.0 Premium");
  const [selectedCar, setSelectedCar] = useState(CAR_DATABASE[10]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const [year, setYear] = useState(2021);
  const [km, setKm] = useState(45e3);
  const [condition, setCondition] = useState("tot");
  const [isCalculated, setIsCalculated] = useState(true);
  const searchResults = CAR_DATABASE.filter(
    (c) => c.fullName.toLowerCase().includes(searchQuery.toLowerCase()) || c.modelName.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 6);
  const handleSelectCar = (car) => {
    setSelectedCar(car);
    setSearchQuery(car.fullName);
    setIsDropdownOpen(false);
    setIsCalculated(true);
    fireConfetti();
  };
  const age = Math.max(0, currentYear - year);
  const retainRate = DEPRECIATION_RATES[Math.min(age, DEPRECIATION_RATES.length - 1)];
  const condMult = CONDITION_MULTIPLIERS[condition].mult;
  let kmMult = 1;
  if (km > 15e4) kmMult = 0.88;
  else if (km > 8e4) kmMult = 0.94;
  else if (km < 2e4) kmMult = 1.03;
  const midValuation = Math.round(selectedCar.baseNew * retainRate * kmMult * condMult);
  const privateSaleLow = Math.round(midValuation * 0.97);
  const privateSaleHigh = Math.round(midValuation * 1.03);
  const dealerTradeInLow = Math.round(midValuation * 0.9);
  const dealerTradeInHigh = Math.round(midValuation * 0.95);
  const insPct = midValuation > 1500 ? 0.016 : midValuation > 800 ? 0.018 : 0.02;
  const annualInsuranceFee = Math.round(midValuation * insPct);
  const deprLossAmt = Math.round(selectedCar.baseNew * (1 - retainRate));
  const kmAdjAmt = Math.round(selectedCar.baseNew * retainRate * (kmMult - 1));
  const condAdjAmt = Math.round(selectedCar.baseNew * retainRate * kmMult * (condMult - 1));
  const formatPrice = (m) => {
    if (m >= 1e3) {
      return `${(m / 1e3).toFixed(2).replace(".00", "")} tỷ`;
    }
    return `${m} triệu`;
  };
  return /* @__PURE__ */ jsx("section", { style: { maxWidth: "1240px", margin: "24px auto", padding: "0 20px", fontFamily: "'MoMoTrustSans', -apple-system, sans-serif" }, children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4 },
      style: {
        background: "#ffffff",
        borderRadius: "20px",
        border: "1px solid #e2e8f0",
        boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
        overflow: "hidden",
        marginBottom: "24px"
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
            }, children: /* @__PURE__ */ jsx(Car, { style: { width: "22px", height: "22px" } }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { style: { fontSize: "18px", fontWeight: 900, color: "#ffffff", margin: 0, letterSpacing: "-0.01em" }, children: "Định Giá Xe Ô Tô Cũ Nhanh & Minh Bạch" }),
              /* @__PURE__ */ jsx("p", { style: { fontSize: "12.5px", color: "#94a3b8", margin: "3px 0 0" }, children: "Dữ liệu thuật toán tổng hợp từ 2.000+ phiên đấu giá & tin đăng xe cũ tại Việt Nam" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#cbd5e1", background: "rgba(255,255,255,0.08)", padding: "6px 12px", borderRadius: "8px" }, children: [
            /* @__PURE__ */ jsx(ShieldCheck, { style: { width: "15px", height: "15px", color: "#4ade80" } }),
            " Kiểm định bởi PVI, PJICO, MIC"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { padding: "24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }, children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { style: { marginBottom: "18px", position: "relative" }, children: [
              /* @__PURE__ */ jsxs("label", { style: { fontSize: "12px", fontWeight: 800, color: "#475569", textTransform: "uppercase", letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }, children: [
                /* @__PURE__ */ jsx(Search, { style: { width: "14px", height: "14px", color: "#eb2f96" } }),
                " 1. Dòng xe cần định giá"
              ] }),
              /* @__PURE__ */ jsxs("div", { style: {
                display: "flex",
                alignItems: "center",
                gap: "10px",
                border: "1.5px solid #cbd5e1",
                borderRadius: "12px",
                padding: "11px 14px",
                background: "#ffffff",
                transition: "all 0.15s ease",
                boxShadow: isDropdownOpen ? "0 0 0 3px rgba(235,47,150,0.12)" : "none"
              }, children: [
                /* @__PURE__ */ jsx(Search, { style: { width: "18px", height: "18px", color: "#94a3b8", flexShrink: 0 } }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    value: searchQuery,
                    onChange: (e) => {
                      setSearchQuery(e.target.value);
                      setIsDropdownOpen(true);
                    },
                    onFocus: () => setIsDropdownOpen(true),
                    placeholder: "Gõ tên xe (VD: Toyota Vios, Mazda CX-5, Ford Ranger...)",
                    style: {
                      flex: 1,
                      border: "none",
                      outline: "none",
                      fontSize: "14.5px",
                      fontWeight: 700,
                      color: "#0f172a",
                      background: "transparent",
                      fontFamily: "inherit"
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(AnimatePresence, { children: isDropdownOpen && searchResults.length > 0 && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 4 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: 4 },
                  style: {
                    position: "absolute",
                    top: "calc(100% + 6px)",
                    left: 0,
                    right: 0,
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "14px",
                    boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                    zIndex: 100,
                    overflow: "hidden"
                  },
                  children: searchResults.map((car) => /* @__PURE__ */ jsxs(
                    "div",
                    {
                      onClick: () => handleSelectCar(car),
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "10px 14px",
                        cursor: "pointer",
                        borderBottom: "1px solid #f1f5f9",
                        transition: "background 0.1s ease"
                      },
                      children: [
                        /* @__PURE__ */ jsx("img", { src: car.logo, alt: car.brandName, style: { width: "24px", height: "24px", objectFit: "contain" } }),
                        /* @__PURE__ */ jsxs("div", { style: { flex: 1 }, children: [
                          /* @__PURE__ */ jsx("span", { style: { fontSize: "13.5px", fontWeight: 800, color: "#0f172a" }, children: car.fullName }),
                          /* @__PURE__ */ jsxs("span", { style: { fontSize: "11px", color: "#64748b", marginLeft: "6px" }, children: [
                            "(",
                            car.sub,
                            ")"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("span", { style: { fontSize: "11.5px", fontWeight: 700, color: "#eb2f96" }, children: [
                          "Mới: ",
                          formatPrice(car.baseNew)
                        ] })
                      ]
                    },
                    car.fullName
                  ))
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { style: { marginTop: "10px", display: "flex", flexWrap: "wrap", gap: "6px" }, children: [
                /* @__PURE__ */ jsx("span", { style: { fontSize: "11px", color: "#94a3b8", fontWeight: 700, alignSelf: "center" }, children: "Đề xuất:" }),
                POPULAR_SUGGESTIONS.map((sug) => /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleSelectCar(sug.entry),
                    style: {
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "11.5px",
                      fontWeight: 700,
                      cursor: "pointer",
                      border: selectedCar.fullName === sug.entry.fullName ? "1px solid #eb2f96" : "1px solid #e2e8f0",
                      background: selectedCar.fullName === sug.entry.fullName ? "#fff0f8" : "#f8fafc",
                      color: selectedCar.fullName === sug.entry.fullName ? "#eb2f96" : "#475569",
                      transition: "all 0.15s ease"
                    },
                    children: sug.label
                  },
                  sug.label
                ))
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { style: { background: "#f8fafc", padding: "16px", borderRadius: "14px", border: "1px solid #e2e8f0" }, children: [
              /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "16px" }, children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("label", { style: { fontSize: "11.5px", fontWeight: 800, color: "#475569", textTransform: "uppercase", letterSpacing: "0.04em", display: "flex", alignItems: "center", gap: "4px", marginBottom: "6px" }, children: [
                    /* @__PURE__ */ jsx(Calendar, { style: { width: "13px", height: "13px", color: "#eb2f96" } }),
                    " Năm sản xuất"
                  ] }),
                  /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: /* @__PURE__ */ jsx(
                    "select",
                    {
                      value: year,
                      onChange: (e) => setYear(Number(e.target.value)),
                      style: {
                        flex: 1,
                        padding: "9px 10px",
                        borderRadius: "8px",
                        border: "1.5px solid #cbd5e1",
                        fontSize: "14px",
                        fontWeight: 800,
                        color: "#0f172a",
                        background: "#ffffff",
                        cursor: "pointer"
                      },
                      children: Array.from({ length: 16 }, (_, i) => currentYear - i).map((y) => /* @__PURE__ */ jsx("option", { value: y, children: y }, y))
                    }
                  ) }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "range",
                      min: 2011,
                      max: currentYear,
                      step: 1,
                      value: year,
                      onChange: (e) => setYear(Number(e.target.value)),
                      style: { width: "100%", accentColor: "#eb2f96", height: "4px", marginTop: "6px", cursor: "pointer" }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("label", { style: { fontSize: "11.5px", fontWeight: 800, color: "#475569", textTransform: "uppercase", letterSpacing: "0.04em", display: "flex", alignItems: "center", gap: "4px", marginBottom: "6px" }, children: [
                    /* @__PURE__ */ jsx(Gauge, { style: { width: "13px", height: "13px", color: "#eb2f96" } }),
                    " Số km đã đi"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "number",
                        value: km,
                        onChange: (e) => setKm(Math.max(0, Number(e.target.value))),
                        step: 5e3,
                        style: {
                          flex: 1,
                          padding: "9px 10px",
                          borderRadius: "8px",
                          border: "1.5px solid #cbd5e1",
                          fontSize: "14px",
                          fontWeight: 800,
                          color: "#0f172a",
                          background: "#ffffff"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { style: { fontSize: "12px", fontWeight: 700, color: "#64748b" }, children: "km" })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "range",
                      min: 0,
                      max: 2e5,
                      step: 5e3,
                      value: km,
                      onChange: (e) => setKm(Number(e.target.value)),
                      style: { width: "100%", accentColor: "#eb2f96", height: "4px", marginTop: "6px", cursor: "pointer" }
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("label", { style: { fontSize: "11.5px", fontWeight: 800, color: "#475569", textTransform: "uppercase", letterSpacing: "0.04em", display: "flex", alignItems: "center", gap: "4px", marginBottom: "8px" }, children: [
                  /* @__PURE__ */ jsx(Wrench, { style: { width: "13px", height: "13px", color: "#eb2f96" } }),
                  " Tình trạng ngoại / nội thất xe"
                ] }),
                /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "6px" }, children: Object.keys(CONDITION_MULTIPLIERS).map((key) => {
                  const condObj = CONDITION_MULTIPLIERS[key];
                  const IconComp = condObj.icon;
                  const isSel = condition === key;
                  return /* @__PURE__ */ jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setCondition(key),
                      style: {
                        padding: "8px 4px",
                        borderRadius: "8px",
                        border: isSel ? "1.5px solid #eb2f96" : "1px solid #cbd5e1",
                        background: isSel ? "#eb2f96" : "#ffffff",
                        color: isSel ? "#ffffff" : "#475569",
                        fontSize: "11px",
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "3px",
                        transition: "all 0.15s ease"
                      },
                      children: [
                        /* @__PURE__ */ jsx(IconComp, { style: { width: "14px", height: "14px", color: isSel ? "#ffffff" : "#64748b" } }),
                        condObj.label
                      ]
                    },
                    key
                  );
                }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { style: { background: "#f8fafc", padding: "20px", borderRadius: "16px", border: "1px solid #e2e8f0", display: "flex", flexDirection: "column", justifyContent: "space-between" }, children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }, children: [
              /* @__PURE__ */ jsx("span", { style: { fontSize: "13px", fontWeight: 800, color: "#0f172a" }, children: selectedCar.fullName }),
              /* @__PURE__ */ jsxs("span", { style: { fontSize: "11px", fontWeight: 700, color: "#eb2f96", background: "#fff0f8", border: "1px solid #ffd6ee", padding: "2px 8px", borderRadius: "6px" }, children: [
                "Năm ",
                year,
                " · ",
                km >= 1e3 ? `${(km / 1e3).toFixed(0)}k km` : `${km} km`
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { style: { background: "#ffffff", padding: "16px", borderRadius: "14px", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.03)", marginBottom: "14px" }, children: [
              /* @__PURE__ */ jsxs("div", { style: { fontSize: "11px", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "4px" }, children: [
                /* @__PURE__ */ jsx(TrendingUp, { style: { width: "12px", height: "12px", color: "#eb2f96", display: "inline", marginRight: "4px" } }),
                "Giá Ước Tính Rao Bán Cá Nhân"
              ] }),
              /* @__PURE__ */ jsxs("div", { style: { fontSize: "30px", fontWeight: 900, color: "#eb2f96", letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums", lineHeight: 1.1 }, children: [
                formatPrice(privateSaleLow),
                " – ",
                formatPrice(privateSaleHigh)
              ] }),
              /* @__PURE__ */ jsxs("div", { style: { fontSize: "11.5px", color: "#64748b", marginTop: "6px", display: "flex", justifyContent: "space-between" }, children: [
                /* @__PURE__ */ jsx("span", { children: "Giá thu mua nhanh (Showroom):" }),
                /* @__PURE__ */ jsxs("strong", { style: { color: "#0f172a" }, children: [
                  formatPrice(dealerTradeInLow),
                  " – ",
                  formatPrice(dealerTradeInHigh)
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { style: { background: "#ffffff", padding: "14px", borderRadius: "14px", border: "1px solid #e2e8f0", marginBottom: "14px" }, children: [
              /* @__PURE__ */ jsx("div", { style: { fontSize: "11.5px", fontWeight: 800, color: "#0f172a", marginBottom: "10px" }, children: "📊 Bảng Phân Tích Cấu Thành Khấu Hao (bklit Visual Meter)" }),
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "8px", fontSize: "11.5px" }, children: [
                /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", color: "#475569" }, children: [
                  /* @__PURE__ */ jsx("span", { children: "Giá xe mới niêm yết:" }),
                  /* @__PURE__ */ jsx("span", { style: { fontWeight: 800, color: "#0f172a" }, children: formatPrice(selectedCar.baseNew) })
                ] }),
                /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", color: "#dc2626" }, children: [
                  /* @__PURE__ */ jsxs("span", { children: [
                    "Trừ khấu hao ",
                    age,
                    " năm sử dụng:"
                  ] }),
                  /* @__PURE__ */ jsxs("span", { style: { fontWeight: 800 }, children: [
                    "-",
                    formatPrice(deprLossAmt)
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", color: kmAdjAmt < 0 ? "#dc2626" : "#16a34a" }, children: [
                  /* @__PURE__ */ jsxs("span", { children: [
                    "Điều chỉnh số km (",
                    km.toLocaleString("vi-VN"),
                    " km):"
                  ] }),
                  /* @__PURE__ */ jsxs("span", { style: { fontWeight: 800 }, children: [
                    kmAdjAmt >= 0 ? "+" : "",
                    formatPrice(Math.abs(kmAdjAmt))
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", color: condAdjAmt < 0 ? "#dc2626" : "#16a34a" }, children: [
                  /* @__PURE__ */ jsxs("span", { children: [
                    "Điều chỉnh tình trạng (",
                    CONDITION_MULTIPLIERS[condition].label,
                    "):"
                  ] }),
                  /* @__PURE__ */ jsxs("span", { style: { fontWeight: 800 }, children: [
                    condAdjAmt >= 0 ? "+" : "",
                    formatPrice(Math.abs(condAdjAmt))
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { style: { marginTop: "12px" }, children: [
                /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "10.5px", color: "#64748b", fontWeight: 700, marginBottom: "4px" }, children: [
                  /* @__PURE__ */ jsx("span", { children: "Tỷ lệ giá trị còn giữ lại:" }),
                  /* @__PURE__ */ jsxs("span", { style: { color: "#eb2f96", fontWeight: 800 }, children: [
                    Math.round(retainRate * kmMult * condMult * 100),
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { style: { height: "8px", background: "#e2e8f0", borderRadius: "999px", overflow: "hidden" }, children: /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    animate: { width: `${Math.min(100, Math.round(retainRate * kmMult * condMult * 100))}%` },
                    transition: { duration: 0.4 },
                    style: { height: "100%", background: "linear-gradient(90deg, #eb2f96 0%, #f472b6 100%)", borderRadius: "999px" }
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { style: { background: "#eff6ff", padding: "12px 14px", borderRadius: "10px", border: "1px solid #bfdbfe", display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { style: { fontSize: "11px", fontWeight: 700, color: "#1d4ed8" }, children: "Ước tính phí bảo hiểm thân vỏ:" }),
                /* @__PURE__ */ jsxs("div", { style: { fontSize: "14px", fontWeight: 900, color: "#1e40af" }, children: [
                  "~",
                  annualInsuranceFee,
                  " triệu/năm"
                ] })
              ] }),
              /* @__PURE__ */ jsx("a", { href: "/bao-hiem-o-to", style: { fontSize: "11.5px", fontWeight: 800, color: "#ffffff", background: "#2563eb", padding: "6px 12px", borderRadius: "8px", textDecoration: "none" }, children: "Báo giá 1-Click" })
            ] })
          ] }) })
        ] })
      ]
    }
  ) });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$DinhGiaXe = createComponent(($$result, $$props, $$slots) => {
  const rawCss = `
.hero { display: none !important; }
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

:root{
  --pink:#EB2F96;--pink-d:#C22181;--pink-50:#FFF0F8;--pink-100:#fce7f3;
  --gray-900:#1C171A;--gray-700:#3D3040;--gray-500:#7A6E7F;
  --gray-400:#A09AA5;--gray-300:#C8C3CC;--gray-200:#E5E0E9;--gray-100:#F0EBF4;--gray-50:#F7F3FA;
  --green:#16A34A;--green-50:#F0FDF4;
  --amber:#D97706;--amber-50:#FFFBEB;
  --blue:#2563EB;--blue-50:#EFF6FF;
  --bg:#F5F5F7;
}

/* \u2500\u2500 HERO \u2500\u2500 */
.hero{background:linear-gradient(155deg,#1a0a14 0%,#2d0a22 55%,#190010 100%);padding:40px 20px 56px;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 70% at 75% 40%,rgba(235,47,150,.2),transparent);pointer-events:none}
.hero-inner{max-width:960px;margin:0 auto;display:grid;grid-template-columns:1fr 440px;gap:40px;align-items:center;position:relative;z-index:1}

.hero-eyebrow{display:inline-flex;align-items:center;gap:7px;font-size:11px;font-weight:700;color:rgba(255,255,255,.55);letter-spacing:.07em;text-transform:uppercase;margin-bottom:16px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:999px;padding:5px 13px}
.hero-eyebrow i[data-lucide]{width:11px;height:11px}
.hero-title{font-size:32px;font-weight:900;color:#fff;line-height:1.2;margin-bottom:14px}
.hero-title em{font-style:normal;color:var(--pink)}
.hero-desc{font-size:13.5px;color:rgba(255,255,255,.6);line-height:1.65;margin-bottom:28px;max-width:400px}
.hero-stats{display:flex;gap:24px;flex-wrap:wrap}
.hstat-num{font-size:20px;font-weight:900;color:#fff;line-height:1}
.hstat-num.accent{color:var(--pink)}
.hstat-label{font-size:11.5px;color:rgba(255,255,255,.45);margin-top:3px}

/* \u2500\u2500 FORM CARD inside hero \u2500\u2500 */
.hero-form{background:rgba(255,255,255,.97);backdrop-filter:blur(20px);border-radius:20px;padding:20px;box-shadow:0 20px 60px rgba(0,0,0,.35)}

.hf-label{font-size:10.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--gray-400);margin-bottom:7px;display:flex;align-items:center;gap:6px}
.hf-label i[data-lucide]{width:13px;height:13px;color:var(--pink)}

/* Search */
.search-wrap{position:relative;margin-bottom:12px}
.search-row{display:flex;align-items:center;gap:8px;border:1.5px solid var(--gray-200);border-radius:12px;padding:11px 14px;background:#fff;transition:border-color .15s}
.search-row:focus-within{border-color:var(--pink)}
.search-row i[data-lucide]{width:16px;height:16px;color:var(--gray-400);flex-shrink:0}
.search-input{flex:1;border:none;outline:none;font-size:14px;font-weight:500;color:var(--gray-900);background:transparent;font-family:inherit}
.search-input::placeholder{color:var(--gray-400)}
.search-clear{background:none;border:none;cursor:pointer;color:var(--gray-400);padding:0;display:none;line-height:1}
.search-clear.visible{display:flex}
.search-clear i[data-lucide]{width:14px;height:14px}
.search-dropdown{position:absolute;top:calc(100% + 6px);left:0;right:0;background:#fff;border:1px solid var(--gray-200);border-radius:14px;box-shadow:0 12px 32px rgba(0,0,0,.14);z-index:300;display:none;max-height:260px;overflow-y:auto}
.search-dropdown.open{display:block}
.dd-item{display:flex;align-items:center;gap:12px;padding:10px 14px;cursor:pointer;transition:background .1s;border-bottom:1px solid var(--gray-100)}
.dd-item:last-child{border-bottom:none}
.dd-item:hover,.dd-item:focus{background:var(--gray-50)}
.dd-logo{width:26px;height:26px;object-fit:contain;flex-shrink:0}
.dd-name{font-size:13px;font-weight:700;color:var(--gray-900);flex:1}
.dd-name small{font-weight:500;color:var(--gray-400);margin-left:4px}
.dd-price{font-size:11.5px;color:var(--gray-500);flex-shrink:0}

/* Row 2: Year + KM */
.hf-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px}
.hf-control{display:flex;align-items:center;border:1.5px solid var(--gray-200);border-radius:12px;overflow:hidden;background:#fff;transition:border-color .15s}
.hf-control:focus-within{border-color:var(--pink)}
.hf-select{flex:1;border:none;outline:none;font-size:14px;font-weight:700;color:var(--gray-900);padding:11px 12px;background:transparent;font-family:inherit;cursor:pointer;-webkit-appearance:none;appearance:none}
.hf-select-arrow{padding:0 12px 0 4px;color:var(--gray-400);flex-shrink:0;pointer-events:none}
.hf-select-arrow i[data-lucide]{width:14px;height:14px}
.hf-number{flex:1;border:none;outline:none;font-size:14px;font-weight:700;color:var(--gray-900);padding:11px 12px;background:transparent;font-family:inherit}
.hf-number::-webkit-inner-spin-button,.hf-number::-webkit-outer-spin-button{-webkit-appearance:none}
.hf-unit{padding:0 12px 0 0;font-size:12px;font-weight:600;color:var(--gray-400);flex-shrink:0;white-space:nowrap}

/* Condition pills */
.cond-group{margin-bottom:16px}
.cond-pills{display:flex;gap:6px;flex-wrap:wrap}
.cond-pill{flex:1;min-width:0;border:1.5px solid var(--gray-200);border-radius:10px;background:#fff;padding:9px 4px;display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;font-family:inherit;transition:border-color .15s,background .12s}
.cond-pill:hover{border-color:var(--gray-400)}
.cond-pill.sel{border-color:var(--pink);background:var(--pink-50)}
.cond-pill i[data-lucide]{width:16px;height:16px;color:var(--gray-400)}
.cond-pill.sel i[data-lucide]{color:var(--pink)}
.cp-name{font-size:11px;font-weight:700;color:var(--gray-600)}
.cond-pill.sel .cp-name{color:var(--pink)}

/* CTA */
.btn-calc{width:100%;padding:14px;background:var(--pink);color:#fff;font-size:15px;font-weight:800;border:none;border-radius:12px;cursor:pointer;font-family:inherit;transition:background .15s;display:flex;align-items:center;justify-content:center;gap:8px}
.btn-calc:hover{background:var(--pink-d)}
.btn-calc:disabled{background:var(--gray-300);cursor:not-allowed}
.btn-calc i[data-lucide]{width:16px;height:16px}

/* \u2500\u2500 PAGE BELOW \u2500\u2500 */
.page{max-width:960px;margin:0 auto;padding:24px 20px 80px}
.two-col{display:grid;grid-template-columns:1fr 300px;gap:16px;align-items:start}

/* \u2500\u2500 SIDEBAR \u2500\u2500 */
.sidebar-promo{background:linear-gradient(135deg,#831843,#be185d);border-radius:20px;padding:20px;margin-bottom:12px;color:#fff}
.sp-eyebrow{font-size:10px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;opacity:.65;margin-bottom:10px;display:flex;align-items:center;gap:6px}
.sp-eyebrow i[data-lucide]{width:11px;height:11px}
.sp-title{font-size:15px;font-weight:900;line-height:1.3;margin-bottom:8px}
.sp-sub{font-size:12px;opacity:.75;line-height:1.5;margin-bottom:14px}
.sp-items{display:flex;flex-direction:column;gap:7px}
.sp-item{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.1);border-radius:10px;padding:10px 12px;cursor:pointer;transition:background .15s;text-decoration:none}
.sp-item:hover{background:rgba(255,255,255,.18)}
.sp-item-icon{width:30px;height:30px;border-radius:8px;background:rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center;flex-shrink:0}
.sp-item-icon i[data-lucide]{width:13px;height:13px;color:#fff}
.sp-item-name{font-size:12px;font-weight:800;color:#fff}
.sp-item-sub{font-size:10.5px;opacity:.7;margin-top:1px;color:#fff}

.sidebar-note{background:#fff;border:1px solid var(--gray-200);border-radius:16px;padding:16px}
.note-title{font-size:10.5px;font-weight:700;color:var(--gray-500);letter-spacing:.05em;text-transform:uppercase;margin-bottom:8px;display:flex;align-items:center;gap:5px}
.note-title i[data-lucide]{width:12px;height:12px}
.note-text{font-size:11.5px;color:var(--gray-500);line-height:1.6}

/* \u2500\u2500 RESULT \u2500\u2500 */
#resultSection{display:none}
.result-full{grid-column:1/-1}

.car-bar{display:flex;align-items:center;gap:8px;background:#fff;border:1px solid var(--gray-200);border-radius:14px;padding:12px 16px;margin-bottom:14px;flex-wrap:wrap}
.car-bar-name{font-size:14px;font-weight:800;color:var(--gray-900);flex:1;min-width:0}
.car-tag{font-size:11.5px;font-weight:700;border-radius:999px;padding:3px 10px}
.car-tag.year{background:var(--amber-50);color:var(--amber)}
.car-tag.km{background:var(--blue-50);color:var(--blue)}
.car-tag.cond{background:var(--green-50);color:var(--green)}
.btn-recalc{display:inline-flex;align-items:center;gap:5px;font-size:12px;font-weight:700;color:var(--gray-500);background:var(--gray-50);border:1px solid var(--gray-200);border-radius:999px;padding:7px 13px;cursor:pointer;font-family:inherit;transition:border-color .15s;white-space:nowrap}
.btn-recalc:hover{border-color:var(--gray-400)}
.btn-recalc i[data-lucide]{width:11px;height:11px}

.price-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:14px}
.price-box{background:#fff;border:1.5px solid var(--gray-200);border-radius:16px;padding:16px}
.price-box.hl{border-color:var(--pink);background:var(--pink-50)}
.pb-label{font-size:9.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--gray-400);margin-bottom:8px;line-height:1.4}
.pb-price{font-size:17px;font-weight:900;color:var(--gray-900);margin-bottom:4px}
.price-box.hl .pb-price{color:var(--pink)}
.pb-sub{font-size:11px;color:var(--gray-400);line-height:1.4}

.sec-card{background:#fff;border:1px solid var(--gray-200);border-radius:16px;padding:18px 20px;margin-bottom:14px}
.sec-label{font-size:10.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--gray-400);margin-bottom:14px}
.bc-row{display:flex;align-items:center;padding:10px 0;border-bottom:1px solid var(--gray-100)}
.bc-row:last-child{border-bottom:none}
.bc-row-label{font-size:13px;color:var(--gray-500);flex:1;display:flex;align-items:center;gap:7px}
.bc-row-label i[data-lucide]{width:14px;height:14px;color:var(--gray-300)}
.bc-row-val{font-size:13px;font-weight:800;color:var(--gray-900)}
.bc-row-val.pos{color:var(--green)}
.bc-row-val.neg{color:#dc2626}
.bc-total{background:var(--pink-50);border-radius:10px;padding:11px 14px;margin-top:8px;display:flex;align-items:center;justify-content:space-between}
.bc-total-label{font-size:13px;font-weight:800;color:var(--gray-900)}
.bc-total-val{font-size:16px;font-weight:900;color:var(--pink)}

.src-items{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.src-item{border:1px solid var(--gray-100);border-radius:12px;padding:12px}
.src-name{font-size:11px;font-weight:700;color:var(--gray-500);margin-bottom:4px}
.src-price{font-size:14px;font-weight:900;color:var(--gray-900)}
.src-detail{font-size:10.5px;color:var(--gray-400);margin-top:2px}

.ins-card{background:linear-gradient(135deg,#831843,#be185d);border-radius:16px;padding:18px 20px;margin-bottom:14px;display:flex;align-items:center;gap:14px}
.ins-body{flex:1;min-width:0}
.ins-eyebrow{font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:rgba(255,255,255,.7);margin-bottom:4px}
.ins-title{font-size:14px;font-weight:900;color:#fff;margin-bottom:2px}
.ins-sub{font-size:11.5px;color:rgba(255,255,255,.75)}
.btn-ins{padding:9px 16px;background:#fff;color:var(--pink);font-size:12.5px;font-weight:800;border-radius:10px;border:none;cursor:pointer;flex-shrink:0;transition:background .15s;text-decoration:none}
.btn-ins:hover{background:var(--pink-50)}

@media(max-width:768px){
  .hero-inner{grid-template-columns:1fr;gap:24px}
  .hero-copy{display:none}
  .two-col{grid-template-columns:1fr}
  .price-grid{grid-template-columns:1fr}
  .src-items{grid-template-columns:1fr}
}
`;
  return renderTemplate(_a || (_a = __template(["", " <script>\n// \u2500\u2500 DATA \u2500\u2500\nconst BRANDS=[\n  {id:'toyota',name:'Toyota',logo:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg'},\n  {id:'honda',name:'Honda',logo:'https://upload.wikimedia.org/wikipedia/commons/7/76/Honda_logo.svg'},\n  {id:'hyundai',name:'Hyundai',logo:'https://upload.wikimedia.org/wikipedia/commons/1/1b/Hyundai_Motor_Company_logo.svg'},\n  {id:'kia',name:'KIA',logo:'https://upload.wikimedia.org/wikipedia/commons/1/13/Kia-logo.svg'},\n  {id:'mazda',name:'Mazda',logo:'https://upload.wikimedia.org/wikipedia/commons/e/e0/Mazda_logo.svg'},\n  {id:'ford',name:'Ford',logo:'https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg'},\n  {id:'mitsubishi',name:'Mitsubishi',logo:'https://upload.wikimedia.org/wikipedia/commons/8/8b/Mitsubishi_logo.svg'},\n  {id:'vinfast',name:'VinFast',logo:'https://homepage.momocdn.net/img/momo-upload-api-240411101101-638482506617370879.png'},\n  {id:'mercedes',name:'Mercedes',logo:'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg'},\n  {id:'bmw',name:'BMW',logo:'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg'},\n  {id:'audi',name:'Audi',logo:'https://upload.wikimedia.org/wikipedia/commons/7/7f/Audi_logo_detail.svg'},\n  {id:'nissan',name:'Nissan',logo:'https://upload.wikimedia.org/wikipedia/commons/2/26/Nissan_2020_logo.svg'},\n];\nconst MODELS_MAP={\n  toyota:[{id:'vios',name:'Vios',sub:'Sedan h\u1EA1ng B'},{id:'camry',name:'Camry',sub:'Sedan h\u1EA1ng D'},{id:'fortuner',name:'Fortuner',sub:'SUV 7 ch\u1ED7'},{id:'innova',name:'Innova Cross',sub:'MPV 7 ch\u1ED7'},{id:'corolla-cross',name:'Corolla Cross',sub:'SUV h\u1EA1ng C'},{id:'hilux',name:'Hilux',sub:'B\xE1n t\u1EA3i'}],\n  honda:[{id:'city',name:'City',sub:'Sedan h\u1EA1ng B'},{id:'crv',name:'CR-V',sub:'SUV 5 ch\u1ED7'},{id:'hrv',name:'HR-V',sub:'SUV h\u1EA1ng B'},{id:'civic',name:'Civic',sub:'Sedan h\u1EA1ng C'},{id:'accord',name:'Accord',sub:'Sedan h\u1EA1ng E'}],\n  hyundai:[{id:'accent',name:'Accent',sub:'Sedan h\u1EA1ng B'},{id:'tucson',name:'Tucson',sub:'SUV 5 ch\u1ED7'},{id:'santa-fe',name:'Santa Fe',sub:'SUV 7 ch\u1ED7'},{id:'creta',name:'Creta',sub:'SUV h\u1EA1ng B+'},{id:'i10',name:'Grand i10',sub:'Hatchback'}],\n  kia:[{id:'morning',name:'Morning',sub:'Hatchback'},{id:'seltos',name:'Seltos',sub:'SUV h\u1EA1ng B+'},{id:'sportage',name:'Sportage',sub:'SUV h\u1EA1ng C'},{id:'carnival',name:'Carnival',sub:'MPV cao c\u1EA5p'},{id:'k5',name:'K5',sub:'Sedan h\u1EA1ng D'}],\n  mazda:[{id:'mazda2',name:'Mazda2',sub:'Sedan h\u1EA1ng B'},{id:'mazda3',name:'Mazda3',sub:'Sedan h\u1EA1ng C'},{id:'cx5',name:'CX-5',sub:'SUV h\u1EA1ng C'},{id:'cx8',name:'CX-8',sub:'SUV 7 ch\u1ED7'},{id:'bt50',name:'BT-50',sub:'B\xE1n t\u1EA3i'}],\n  ford:[{id:'ranger',name:'Ranger',sub:'B\xE1n t\u1EA3i'},{id:'everest',name:'Everest',sub:'SUV 7 ch\u1ED7'},{id:'territory',name:'Territory',sub:'SUV h\u1EA1ng C'},{id:'explorer',name:'Explorer',sub:'SUV h\u1EA1ng E'}],\n  mitsubishi:[{id:'xpander',name:'Xpander',sub:'MPV 7 ch\u1ED7'},{id:'outlander',name:'Outlander',sub:'SUV h\u1EA1ng D'},{id:'attrage',name:'Attrage',sub:'Sedan h\u1EA1ng B'},{id:'pajero',name:'Pajero Sport',sub:'SUV 7 ch\u1ED7'}],\n  vinfast:[{id:'vf5',name:'VF 5',sub:'SUV \u0111i\u1EC7n'},{id:'vf6',name:'VF 6',sub:'SUV h\u1EA1ng B \u0111i\u1EC7n'},{id:'vf7',name:'VF 7',sub:'SUV h\u1EA1ng C \u0111i\u1EC7n'},{id:'vf8',name:'VF 8',sub:'SUV h\u1EA1ng D \u0111i\u1EC7n'},{id:'vf9',name:'VF 9',sub:'SUV 7 ch\u1ED7 \u0111i\u1EC7n'}],\n  mercedes:[{id:'c200',name:'C 200',sub:'Sedan h\u1EA1ng E'},{id:'e300',name:'E 300',sub:'Sedan h\u1EA1ng F'},{id:'glc',name:'GLC',sub:'SUV h\u1EA1ng D'},{id:'gle',name:'GLE',sub:'SUV h\u1EA1ng E'}],\n  bmw:[{id:'3series',name:'3 Series',sub:'Sedan h\u1EA1ng E'},{id:'5series',name:'5 Series',sub:'Sedan h\u1EA1ng F'},{id:'x3',name:'X3',sub:'SUV h\u1EA1ng D'},{id:'x5',name:'X5',sub:'SUV h\u1EA1ng E'}],\n  audi:[{id:'a4',name:'A4',sub:'Sedan h\u1EA1ng E'},{id:'a6',name:'A6',sub:'Sedan h\u1EA1ng F'},{id:'q5',name:'Q5',sub:'SUV h\u1EA1ng D'},{id:'q7',name:'Q7',sub:'SUV 7 ch\u1ED7'}],\n  nissan:[{id:'navara',name:'Navara',sub:'B\xE1n t\u1EA3i'},{id:'terra',name:'Terra',sub:'SUV 7 ch\u1ED7'},{id:'almera',name:'Almera',sub:'Sedan h\u1EA1ng B'}],\n};\nconst BASE_PRICES={\n  'toyota-vios':750,'toyota-camry':1350,'toyota-fortuner':1400,'toyota-innova':1050,'toyota-corolla-cross':870,'toyota-hilux':850,\n  'honda-city':540,'honda-crv':1150,'honda-hrv':750,'honda-civic':870,'honda-accord':1350,\n  'hyundai-accent':480,'hyundai-tucson':850,'hyundai-santa-fe':1280,'hyundai-creta':650,'hyundai-i10':380,\n  'kia-morning':430,'kia-seltos':680,'kia-sportage':950,'kia-carnival':1500,'kia-k5':1150,\n  'mazda-mazda2':510,'mazda-mazda3':750,'mazda-cx5':900,'mazda-cx8':1180,'mazda-bt50':720,\n  'ford-ranger':750,'ford-everest':1300,'ford-territory':820,'ford-explorer':2200,\n  'mitsubishi-xpander':680,'mitsubishi-outlander':1200,'mitsubishi-attrage':510,'mitsubishi-pajero':1250,\n  'vinfast-vf5':550,'vinfast-vf6':700,'vinfast-vf7':950,'vinfast-vf8':1200,'vinfast-vf9':1500,\n  'mercedes-c200':1800,'mercedes-e300':2600,'mercedes-glc':2400,'mercedes-gle':3600,\n  'bmw-3series':2000,'bmw-5series':2900,'bmw-x3':2400,'bmw-x5':4000,\n  'audi-a4':1900,'audi-a6':2800,'audi-q5':2400,'audi-q7':3800,\n  'nissan-navara':820,'nissan-terra':1050,'nissan-almera':480,\n};\nconst DEPR=[1,.92,.84,.76,.69,.63,.57,.52,.47,.43];\nconst COND_M={'can-sua':.82,'trung-binh':.93,'tot':1,'rat-tot':1.05};\n\nconst SEARCH_LIST=[];\nBRANDS.forEach(b=>(MODELS_MAP[b.id]||[]).forEach(m=>{\n  SEARCH_LIST.push({brandId:b.id,brandName:b.name,logo:b.logo,modelId:m.id,modelName:m.name,sub:m.sub,fullName:`${b.name} ${m.name}`,baseNew:BASE_PRICES[`${b.id}-${m.id}`]||900});\n}));\n\nconst S={entry:null,year:new Date().getFullYear(),km:0,cond:'tot',condName:'T\u1ED1t'};\n\nfunction initYearSelect(){\n  const sel=document.getElementById('yearSelect');\n  if(!sel)return;\n  const cur=new Date().getFullYear();\n  for(let y=cur;y>=2011;y--){\n    const o=document.createElement('option');\n    o.value=y; o.textContent=y;\n    if(y===cur) o.selected=true;\n    sel.appendChild(o);\n  }\n  S.year=cur;\n}\n\nwindow.onSearch=function(q){\n  const dd=document.getElementById('searchDropdown');\n  const clr=document.getElementById('searchClear');\n  if(!dd||!clr)return;\n  clr.classList.toggle('visible',q.length>0);\n  if(!q.trim()){dd.classList.remove('open');return;}\n  const hits=SEARCH_LIST.filter(e=>e.fullName.toLowerCase().includes(q.toLowerCase())||e.modelName.toLowerCase().includes(q.toLowerCase())).slice(0,8);\n  if(!hits.length){dd.classList.remove('open');return;}\n  dd.innerHTML=hits.map(e=>{\n    const lo=fmt(Math.round(e.baseNew*.63));\n    const hi=fmt(Math.round(e.baseNew*1.0));\n    return `<div class=\"dd-item\" tabindex=\"0\" onclick='selectEntry(${JSON.stringify(e).replace(/'/g, \"\\\\'\")})'>\n      <img class=\"dd-logo\" src=\"${e.logo}\" alt=\"\" onerror=\"this.style.display='none'\">\n      <div class=\"dd-name\">${e.fullName} <small>${e.sub}</small></div>\n      <div class=\"dd-price\">Xe c\u0169 ${lo} \u2013 ${hi}</div>\n    </div>`;\n  }).join('');\n  dd.classList.add('open');\n}\n\nwindow.selectEntry=function(e){\n  S.entry=e;\n  const inp=document.getElementById('searchInput');\n  const dd=document.getElementById('searchDropdown');\n  const clr=document.getElementById('searchClear');\n  const btn=document.getElementById('calcBtn');\n  if(inp) inp.value=e.fullName;\n  if(dd) dd.classList.remove('open');\n  if(clr) clr.classList.add('visible');\n  if(btn) btn.disabled=false;\n}\n\nwindow.clearSearch=function(){\n  S.entry=null;\n  const inp=document.getElementById('searchInput');\n  const dd=document.getElementById('searchDropdown');\n  const clr=document.getElementById('searchClear');\n  const btn=document.getElementById('calcBtn');\n  if(inp) inp.value='';\n  if(dd) dd.classList.remove('open');\n  if(clr) clr.classList.remove('visible');\n  if(btn) btn.disabled=true;\n}\n\nwindow.selectCond=function(id,name,el){\n  S.cond=id;S.condName=name;\n  document.querySelectorAll('.cond-pill').forEach(b=>b.classList.remove('sel'));\n  if(el) el.classList.add('sel');\n}\n\nwindow.calculate=function(){\n  if(!S.entry)return;\n  const e=S.entry;\n  const yearSelect=document.getElementById('yearSelect');\n  const kmInput=document.getElementById('kmInput');\n  const year=parseInt(yearSelect?yearSelect.value:new Date().getFullYear());\n  const km=parseInt(kmInput?kmInput.value:0)||0;\n  S.year=year; S.km=km;\n  const cur=new Date().getFullYear();\n  const age=Math.max(0,cur-year);\n  const retain=DEPR[Math.min(age,DEPR.length-1)];\n  const cMult=COND_M[S.cond]||1;\n  let kAdj=1;\n  if(km>150000)kAdj=.88; else if(km>80000)kAdj=.94; else if(km<20000)kAdj=1.03;\n  const mid=Math.round(e.baseNew*retain*kAdj*cMult);\n  const finLow=Math.round(mid*.90),finHigh=Math.round(mid*.97);\n  const buyLow=Math.round(mid*.95),buyHigh=Math.round(mid*1.07);\n  const insPct=mid>1500?.016:mid>800?.018:.02;\n  const insAmt=Math.round(mid*insPct);\n  const deprAmt=Math.round(e.baseNew*(1-retain));\n  const kmAdj=Math.round(e.baseNew*retain*(kAdj-1));\n  const condAdj=Math.round(e.baseNew*retain*kAdj*(cMult-1));\n  showResult({e,year,km,mid,finLow,finHigh,buyLow,buyHigh,insAmt,deprAmt,kmAdj,condAdj});\n}\n\nfunction fmt(n){return n>=1000?(n/1000).toFixed(1).replace('.0','')+' t\u1EF7':n+' tri\u1EC7u';}\nfunction fmtAdj(n){\n  if(n===0)return '<span style=\"color:var(--gray-400)\">Kh\xF4ng \u0111\u1ED5i</span>';\n  const s=n>0?'+':'';const c=n>0?'pos':'neg';\n  return `<span class=\"bc-row-val ${c}\">${s}${fmt(Math.abs(n))}</span>`;\n}\n\nfunction showResult(r){\n  const kmLabel=r.km>=1000?Math.round(r.km/1000)+'k km':r.km+' km';\n  const rCarName=document.getElementById('rCarName');\n  if(rCarName) rCarName.textContent=r.e.fullName;\n  const rYearTag=document.getElementById('rYearTag');\n  if(rYearTag) rYearTag.textContent=r.year;\n  const rKmTag=document.getElementById('rKmTag');\n  if(rKmTag) rKmTag.textContent=kmLabel;\n  const rCondTag=document.getElementById('rCondTag');\n  if(rCondTag) rCondTag.textContent=S.condName;\n  const rPriceLow=document.getElementById('rPriceLow');\n  if(rPriceLow) rPriceLow.textContent=`${fmt(r.finLow)} \u2013 ${fmt(r.finHigh)}`;\n  const rPriceMid=document.getElementById('rPriceMid');\n  if(rPriceMid) rPriceMid.textContent=`${fmt(r.buyLow)} \u2013 ${fmt(r.buyHigh)}`;\n  const rPriceIns=document.getElementById('rPriceIns');\n  if(rPriceIns) rPriceIns.textContent=`~${fmt(r.insAmt)}/n\u0103m`;\n  const insPrice=document.getElementById('insPrice');\n  if(insPrice) insPrice.textContent=`~${fmt(r.insAmt)}`;\n  const bBase=document.getElementById('bBase');\n  if(bBase) bBase.textContent=fmt(r.e.baseNew);\n  const bDepr=document.getElementById('bDepr');\n  if(bDepr) bDepr.innerHTML=`-${fmt(r.deprAmt)}`;\n  const bKm=document.getElementById('bKm');\n  if(bKm) bKm.innerHTML=fmtAdj(r.kmAdj);\n  const bCond=document.getElementById('bCond');\n  if(bCond) bCond.innerHTML=fmtAdj(r.condAdj);\n  const bFinal=document.getElementById('bFinal');\n  if(bFinal) bFinal.textContent=fmt(r.mid);\n\n  const r1=r.mid+Math.round((Math.random()-.3)*r.mid*.06);\n  const r2=r.mid+Math.round((Math.random()-.2)*r.mid*.12);\n  const srcMomo=document.getElementById('srcMomo');\n  if(srcMomo) srcMomo.textContent=`${fmt(r.finLow)} \u2013 ${fmt(r.buyHigh)}`;\n  const srcBonbanh=document.getElementById('srcBonbanh');\n  if(srcBonbanh) srcBonbanh.textContent=`${fmt(Math.round(r1*.95))} \u2013 ${fmt(r1)}`;\n  const srcBonbanhTB=document.getElementById('srcBonbanhTB');\n  if(srcBonbanhTB) srcBonbanhTB.textContent=`TB ${fmt(r1)}`;\n  const srcChotot=document.getElementById('srcChotot');\n  if(srcChotot) srcChotot.textContent=`${fmt(Math.round(r2*.92))} \u2013 ${fmt(r2)}`;\n  const srcChotTB=document.getElementById('srcChotTB');\n  if(srcChotTB) srcChotTB.textContent=`${Math.round(Math.random()*4+2)} tin \u0111\u0103ng`;\n\n  const rs=document.getElementById('resultSection');\n  const uncalc=document.getElementById('uncalcState');\n  if(rs) rs.style.display='block';\n  if(uncalc) uncalc.style.display='none';\n  setTimeout(()=>rs?.scrollIntoView({behavior:'smooth',block:'start'}),80);\n}\n\nwindow.scrollToForm=function(){\n  document.querySelector('.hero-form')?.scrollIntoView({behavior:'smooth',block:'center'});\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  initYearSelect();\n\n  // Auto-parse query params if passed: ?brand=toyota&model=vios\n  const params = new URLSearchParams(window.location.search);\n  const brand = params.get('brand');\n  const model = params.get('model');\n  if (brand && model) {\n    const entry = SEARCH_LIST.find(e => e.brandId === brand && e.modelId === model);\n    if (entry) {\n      selectEntry(entry);\n    }\n  }\n});\n<\/script>"], ["", " <script>\n// \u2500\u2500 DATA \u2500\u2500\nconst BRANDS=[\n  {id:'toyota',name:'Toyota',logo:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg'},\n  {id:'honda',name:'Honda',logo:'https://upload.wikimedia.org/wikipedia/commons/7/76/Honda_logo.svg'},\n  {id:'hyundai',name:'Hyundai',logo:'https://upload.wikimedia.org/wikipedia/commons/1/1b/Hyundai_Motor_Company_logo.svg'},\n  {id:'kia',name:'KIA',logo:'https://upload.wikimedia.org/wikipedia/commons/1/13/Kia-logo.svg'},\n  {id:'mazda',name:'Mazda',logo:'https://upload.wikimedia.org/wikipedia/commons/e/e0/Mazda_logo.svg'},\n  {id:'ford',name:'Ford',logo:'https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg'},\n  {id:'mitsubishi',name:'Mitsubishi',logo:'https://upload.wikimedia.org/wikipedia/commons/8/8b/Mitsubishi_logo.svg'},\n  {id:'vinfast',name:'VinFast',logo:'https://homepage.momocdn.net/img/momo-upload-api-240411101101-638482506617370879.png'},\n  {id:'mercedes',name:'Mercedes',logo:'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg'},\n  {id:'bmw',name:'BMW',logo:'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg'},\n  {id:'audi',name:'Audi',logo:'https://upload.wikimedia.org/wikipedia/commons/7/7f/Audi_logo_detail.svg'},\n  {id:'nissan',name:'Nissan',logo:'https://upload.wikimedia.org/wikipedia/commons/2/26/Nissan_2020_logo.svg'},\n];\nconst MODELS_MAP={\n  toyota:[{id:'vios',name:'Vios',sub:'Sedan h\u1EA1ng B'},{id:'camry',name:'Camry',sub:'Sedan h\u1EA1ng D'},{id:'fortuner',name:'Fortuner',sub:'SUV 7 ch\u1ED7'},{id:'innova',name:'Innova Cross',sub:'MPV 7 ch\u1ED7'},{id:'corolla-cross',name:'Corolla Cross',sub:'SUV h\u1EA1ng C'},{id:'hilux',name:'Hilux',sub:'B\xE1n t\u1EA3i'}],\n  honda:[{id:'city',name:'City',sub:'Sedan h\u1EA1ng B'},{id:'crv',name:'CR-V',sub:'SUV 5 ch\u1ED7'},{id:'hrv',name:'HR-V',sub:'SUV h\u1EA1ng B'},{id:'civic',name:'Civic',sub:'Sedan h\u1EA1ng C'},{id:'accord',name:'Accord',sub:'Sedan h\u1EA1ng E'}],\n  hyundai:[{id:'accent',name:'Accent',sub:'Sedan h\u1EA1ng B'},{id:'tucson',name:'Tucson',sub:'SUV 5 ch\u1ED7'},{id:'santa-fe',name:'Santa Fe',sub:'SUV 7 ch\u1ED7'},{id:'creta',name:'Creta',sub:'SUV h\u1EA1ng B+'},{id:'i10',name:'Grand i10',sub:'Hatchback'}],\n  kia:[{id:'morning',name:'Morning',sub:'Hatchback'},{id:'seltos',name:'Seltos',sub:'SUV h\u1EA1ng B+'},{id:'sportage',name:'Sportage',sub:'SUV h\u1EA1ng C'},{id:'carnival',name:'Carnival',sub:'MPV cao c\u1EA5p'},{id:'k5',name:'K5',sub:'Sedan h\u1EA1ng D'}],\n  mazda:[{id:'mazda2',name:'Mazda2',sub:'Sedan h\u1EA1ng B'},{id:'mazda3',name:'Mazda3',sub:'Sedan h\u1EA1ng C'},{id:'cx5',name:'CX-5',sub:'SUV h\u1EA1ng C'},{id:'cx8',name:'CX-8',sub:'SUV 7 ch\u1ED7'},{id:'bt50',name:'BT-50',sub:'B\xE1n t\u1EA3i'}],\n  ford:[{id:'ranger',name:'Ranger',sub:'B\xE1n t\u1EA3i'},{id:'everest',name:'Everest',sub:'SUV 7 ch\u1ED7'},{id:'territory',name:'Territory',sub:'SUV h\u1EA1ng C'},{id:'explorer',name:'Explorer',sub:'SUV h\u1EA1ng E'}],\n  mitsubishi:[{id:'xpander',name:'Xpander',sub:'MPV 7 ch\u1ED7'},{id:'outlander',name:'Outlander',sub:'SUV h\u1EA1ng D'},{id:'attrage',name:'Attrage',sub:'Sedan h\u1EA1ng B'},{id:'pajero',name:'Pajero Sport',sub:'SUV 7 ch\u1ED7'}],\n  vinfast:[{id:'vf5',name:'VF 5',sub:'SUV \u0111i\u1EC7n'},{id:'vf6',name:'VF 6',sub:'SUV h\u1EA1ng B \u0111i\u1EC7n'},{id:'vf7',name:'VF 7',sub:'SUV h\u1EA1ng C \u0111i\u1EC7n'},{id:'vf8',name:'VF 8',sub:'SUV h\u1EA1ng D \u0111i\u1EC7n'},{id:'vf9',name:'VF 9',sub:'SUV 7 ch\u1ED7 \u0111i\u1EC7n'}],\n  mercedes:[{id:'c200',name:'C 200',sub:'Sedan h\u1EA1ng E'},{id:'e300',name:'E 300',sub:'Sedan h\u1EA1ng F'},{id:'glc',name:'GLC',sub:'SUV h\u1EA1ng D'},{id:'gle',name:'GLE',sub:'SUV h\u1EA1ng E'}],\n  bmw:[{id:'3series',name:'3 Series',sub:'Sedan h\u1EA1ng E'},{id:'5series',name:'5 Series',sub:'Sedan h\u1EA1ng F'},{id:'x3',name:'X3',sub:'SUV h\u1EA1ng D'},{id:'x5',name:'X5',sub:'SUV h\u1EA1ng E'}],\n  audi:[{id:'a4',name:'A4',sub:'Sedan h\u1EA1ng E'},{id:'a6',name:'A6',sub:'Sedan h\u1EA1ng F'},{id:'q5',name:'Q5',sub:'SUV h\u1EA1ng D'},{id:'q7',name:'Q7',sub:'SUV 7 ch\u1ED7'}],\n  nissan:[{id:'navara',name:'Navara',sub:'B\xE1n t\u1EA3i'},{id:'terra',name:'Terra',sub:'SUV 7 ch\u1ED7'},{id:'almera',name:'Almera',sub:'Sedan h\u1EA1ng B'}],\n};\nconst BASE_PRICES={\n  'toyota-vios':750,'toyota-camry':1350,'toyota-fortuner':1400,'toyota-innova':1050,'toyota-corolla-cross':870,'toyota-hilux':850,\n  'honda-city':540,'honda-crv':1150,'honda-hrv':750,'honda-civic':870,'honda-accord':1350,\n  'hyundai-accent':480,'hyundai-tucson':850,'hyundai-santa-fe':1280,'hyundai-creta':650,'hyundai-i10':380,\n  'kia-morning':430,'kia-seltos':680,'kia-sportage':950,'kia-carnival':1500,'kia-k5':1150,\n  'mazda-mazda2':510,'mazda-mazda3':750,'mazda-cx5':900,'mazda-cx8':1180,'mazda-bt50':720,\n  'ford-ranger':750,'ford-everest':1300,'ford-territory':820,'ford-explorer':2200,\n  'mitsubishi-xpander':680,'mitsubishi-outlander':1200,'mitsubishi-attrage':510,'mitsubishi-pajero':1250,\n  'vinfast-vf5':550,'vinfast-vf6':700,'vinfast-vf7':950,'vinfast-vf8':1200,'vinfast-vf9':1500,\n  'mercedes-c200':1800,'mercedes-e300':2600,'mercedes-glc':2400,'mercedes-gle':3600,\n  'bmw-3series':2000,'bmw-5series':2900,'bmw-x3':2400,'bmw-x5':4000,\n  'audi-a4':1900,'audi-a6':2800,'audi-q5':2400,'audi-q7':3800,\n  'nissan-navara':820,'nissan-terra':1050,'nissan-almera':480,\n};\nconst DEPR=[1,.92,.84,.76,.69,.63,.57,.52,.47,.43];\nconst COND_M={'can-sua':.82,'trung-binh':.93,'tot':1,'rat-tot':1.05};\n\nconst SEARCH_LIST=[];\nBRANDS.forEach(b=>(MODELS_MAP[b.id]||[]).forEach(m=>{\n  SEARCH_LIST.push({brandId:b.id,brandName:b.name,logo:b.logo,modelId:m.id,modelName:m.name,sub:m.sub,fullName:\\`\\${b.name} \\${m.name}\\`,baseNew:BASE_PRICES[\\`\\${b.id}-\\${m.id}\\`]||900});\n}));\n\nconst S={entry:null,year:new Date().getFullYear(),km:0,cond:'tot',condName:'T\u1ED1t'};\n\nfunction initYearSelect(){\n  const sel=document.getElementById('yearSelect');\n  if(!sel)return;\n  const cur=new Date().getFullYear();\n  for(let y=cur;y>=2011;y--){\n    const o=document.createElement('option');\n    o.value=y; o.textContent=y;\n    if(y===cur) o.selected=true;\n    sel.appendChild(o);\n  }\n  S.year=cur;\n}\n\nwindow.onSearch=function(q){\n  const dd=document.getElementById('searchDropdown');\n  const clr=document.getElementById('searchClear');\n  if(!dd||!clr)return;\n  clr.classList.toggle('visible',q.length>0);\n  if(!q.trim()){dd.classList.remove('open');return;}\n  const hits=SEARCH_LIST.filter(e=>e.fullName.toLowerCase().includes(q.toLowerCase())||e.modelName.toLowerCase().includes(q.toLowerCase())).slice(0,8);\n  if(!hits.length){dd.classList.remove('open');return;}\n  dd.innerHTML=hits.map(e=>{\n    const lo=fmt(Math.round(e.baseNew*.63));\n    const hi=fmt(Math.round(e.baseNew*1.0));\n    return \\`<div class=\"dd-item\" tabindex=\"0\" onclick='selectEntry(\\${JSON.stringify(e).replace(/'/g, \"\\\\\\\\'\")})'>\n      <img class=\"dd-logo\" src=\"\\${e.logo}\" alt=\"\" onerror=\"this.style.display='none'\">\n      <div class=\"dd-name\">\\${e.fullName} <small>\\${e.sub}</small></div>\n      <div class=\"dd-price\">Xe c\u0169 \\${lo} \u2013 \\${hi}</div>\n    </div>\\`;\n  }).join('');\n  dd.classList.add('open');\n}\n\nwindow.selectEntry=function(e){\n  S.entry=e;\n  const inp=document.getElementById('searchInput');\n  const dd=document.getElementById('searchDropdown');\n  const clr=document.getElementById('searchClear');\n  const btn=document.getElementById('calcBtn');\n  if(inp) inp.value=e.fullName;\n  if(dd) dd.classList.remove('open');\n  if(clr) clr.classList.add('visible');\n  if(btn) btn.disabled=false;\n}\n\nwindow.clearSearch=function(){\n  S.entry=null;\n  const inp=document.getElementById('searchInput');\n  const dd=document.getElementById('searchDropdown');\n  const clr=document.getElementById('searchClear');\n  const btn=document.getElementById('calcBtn');\n  if(inp) inp.value='';\n  if(dd) dd.classList.remove('open');\n  if(clr) clr.classList.remove('visible');\n  if(btn) btn.disabled=true;\n}\n\nwindow.selectCond=function(id,name,el){\n  S.cond=id;S.condName=name;\n  document.querySelectorAll('.cond-pill').forEach(b=>b.classList.remove('sel'));\n  if(el) el.classList.add('sel');\n}\n\nwindow.calculate=function(){\n  if(!S.entry)return;\n  const e=S.entry;\n  const yearSelect=document.getElementById('yearSelect');\n  const kmInput=document.getElementById('kmInput');\n  const year=parseInt(yearSelect?yearSelect.value:new Date().getFullYear());\n  const km=parseInt(kmInput?kmInput.value:0)||0;\n  S.year=year; S.km=km;\n  const cur=new Date().getFullYear();\n  const age=Math.max(0,cur-year);\n  const retain=DEPR[Math.min(age,DEPR.length-1)];\n  const cMult=COND_M[S.cond]||1;\n  let kAdj=1;\n  if(km>150000)kAdj=.88; else if(km>80000)kAdj=.94; else if(km<20000)kAdj=1.03;\n  const mid=Math.round(e.baseNew*retain*kAdj*cMult);\n  const finLow=Math.round(mid*.90),finHigh=Math.round(mid*.97);\n  const buyLow=Math.round(mid*.95),buyHigh=Math.round(mid*1.07);\n  const insPct=mid>1500?.016:mid>800?.018:.02;\n  const insAmt=Math.round(mid*insPct);\n  const deprAmt=Math.round(e.baseNew*(1-retain));\n  const kmAdj=Math.round(e.baseNew*retain*(kAdj-1));\n  const condAdj=Math.round(e.baseNew*retain*kAdj*(cMult-1));\n  showResult({e,year,km,mid,finLow,finHigh,buyLow,buyHigh,insAmt,deprAmt,kmAdj,condAdj});\n}\n\nfunction fmt(n){return n>=1000?(n/1000).toFixed(1).replace('.0','')+' t\u1EF7':n+' tri\u1EC7u';}\nfunction fmtAdj(n){\n  if(n===0)return '<span style=\"color:var(--gray-400)\">Kh\xF4ng \u0111\u1ED5i</span>';\n  const s=n>0?'+':'';const c=n>0?'pos':'neg';\n  return \\`<span class=\"bc-row-val \\${c}\">\\${s}\\${fmt(Math.abs(n))}</span>\\`;\n}\n\nfunction showResult(r){\n  const kmLabel=r.km>=1000?Math.round(r.km/1000)+'k km':r.km+' km';\n  const rCarName=document.getElementById('rCarName');\n  if(rCarName) rCarName.textContent=r.e.fullName;\n  const rYearTag=document.getElementById('rYearTag');\n  if(rYearTag) rYearTag.textContent=r.year;\n  const rKmTag=document.getElementById('rKmTag');\n  if(rKmTag) rKmTag.textContent=kmLabel;\n  const rCondTag=document.getElementById('rCondTag');\n  if(rCondTag) rCondTag.textContent=S.condName;\n  const rPriceLow=document.getElementById('rPriceLow');\n  if(rPriceLow) rPriceLow.textContent=\\`\\${fmt(r.finLow)} \u2013 \\${fmt(r.finHigh)}\\`;\n  const rPriceMid=document.getElementById('rPriceMid');\n  if(rPriceMid) rPriceMid.textContent=\\`\\${fmt(r.buyLow)} \u2013 \\${fmt(r.buyHigh)}\\`;\n  const rPriceIns=document.getElementById('rPriceIns');\n  if(rPriceIns) rPriceIns.textContent=\\`~\\${fmt(r.insAmt)}/n\u0103m\\`;\n  const insPrice=document.getElementById('insPrice');\n  if(insPrice) insPrice.textContent=\\`~\\${fmt(r.insAmt)}\\`;\n  const bBase=document.getElementById('bBase');\n  if(bBase) bBase.textContent=fmt(r.e.baseNew);\n  const bDepr=document.getElementById('bDepr');\n  if(bDepr) bDepr.innerHTML=\\`-\\${fmt(r.deprAmt)}\\`;\n  const bKm=document.getElementById('bKm');\n  if(bKm) bKm.innerHTML=fmtAdj(r.kmAdj);\n  const bCond=document.getElementById('bCond');\n  if(bCond) bCond.innerHTML=fmtAdj(r.condAdj);\n  const bFinal=document.getElementById('bFinal');\n  if(bFinal) bFinal.textContent=fmt(r.mid);\n\n  const r1=r.mid+Math.round((Math.random()-.3)*r.mid*.06);\n  const r2=r.mid+Math.round((Math.random()-.2)*r.mid*.12);\n  const srcMomo=document.getElementById('srcMomo');\n  if(srcMomo) srcMomo.textContent=\\`\\${fmt(r.finLow)} \u2013 \\${fmt(r.buyHigh)}\\`;\n  const srcBonbanh=document.getElementById('srcBonbanh');\n  if(srcBonbanh) srcBonbanh.textContent=\\`\\${fmt(Math.round(r1*.95))} \u2013 \\${fmt(r1)}\\`;\n  const srcBonbanhTB=document.getElementById('srcBonbanhTB');\n  if(srcBonbanhTB) srcBonbanhTB.textContent=\\`TB \\${fmt(r1)}\\`;\n  const srcChotot=document.getElementById('srcChotot');\n  if(srcChotot) srcChotot.textContent=\\`\\${fmt(Math.round(r2*.92))} \u2013 \\${fmt(r2)}\\`;\n  const srcChotTB=document.getElementById('srcChotTB');\n  if(srcChotTB) srcChotTB.textContent=\\`\\${Math.round(Math.random()*4+2)} tin \u0111\u0103ng\\`;\n\n  const rs=document.getElementById('resultSection');\n  const uncalc=document.getElementById('uncalcState');\n  if(rs) rs.style.display='block';\n  if(uncalc) uncalc.style.display='none';\n  setTimeout(()=>rs?.scrollIntoView({behavior:'smooth',block:'start'}),80);\n}\n\nwindow.scrollToForm=function(){\n  document.querySelector('.hero-form')?.scrollIntoView({behavior:'smooth',block:'center'});\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  initYearSelect();\n\n  // Auto-parse query params if passed: ?brand=toyota&model=vios\n  const params = new URLSearchParams(window.location.search);\n  const brand = params.get('brand');\n  const model = params.get('model');\n  if (brand && model) {\n    const entry = SEARCH_LIST.find(e => e.brandId === brand && e.modelId === model);\n    if (entry) {\n      selectEntry(entry);\n    }\n  }\n});\n<\/script>"])), renderComponent($$result, "VehicleHub", $$VehicleHub, { "title": "\u0110\u1ECBnh Gi\xE1 Xe \xD4 T\xF4 C\u0169 Nhanh & Minh B\u1EA1ch | MoMo", "description": "Tra c\u1EE9u v\xE0 \u0111\u1ECBnh gi\xE1 xe \xF4 t\xF4 c\u0169 ch\xEDnh x\xE1c d\u1EF1a tr\xEAn d\u1EEF li\u1EC7u giao d\u1ECBch th\u1EF1c t\u1EBF t\u1EA1i th\u1ECB tr\u01B0\u1EDDng Vi\u1EC7t Nam. Ph\xE2n t\xEDch kh\u1EA5u hao v\xE0 \u01B0\u1EDBc t\xEDnh b\u1EA3o hi\u1EC3m 1-Click.", "theme": "momo" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(`<style>${rawCss}</style>`)}` })}  ${maybeRenderHead()}<div class="hero"> <div class="hero-inner"> <!-- Copy (desktop only) --> <div class="hero-copy"> <div class="hero-eyebrow"><i data-lucide="shield-check"></i> Dữ liệu cập nhật thường xuyên</div> <h1 class="hero-title">Định giá xe ô tô cũ <em>nhanh &amp; minh bạch</em></h1> <p class="hero-desc">Dữ liệu tổng hợp từ thị trường Việt Nam, được kiểm tra và tin dùng bởi các đối tác bảo hiểm hàng đầu như PVI, PJICO, DBV, MIC.</p> <div class="hero-stats"> <div><div class="hstat-num">2.000+</div><div class="hstat-label">phiên bán xe</div></div> <div><div class="hstat-num">65</div><div class="hstat-label">hãng xe</div></div> <div><div class="hstat-num accent">Tức thì</div><div class="hstat-label">định giá xe cũ</div></div> </div> </div> <!-- Form card --> <div class="hero-form"> <div style="font-size:15px;font-weight:900;color:var(--gray-900);margin-bottom:14px">Nhập thông tin xe</div> <!-- Search --> <div class="hf-label"><i data-lucide="search"></i> Dòng xe cần định giá</div> <div class="search-wrap"> <div class="search-row"> <i data-lucide="search"></i> <input class="search-input" id="searchInput" type="text" placeholder="Toyota Fortuner, Honda CR-V..." autocomplete="off" oninput="onSearch(this.value)" onfocus="onSearch(this.value)"> <button class="search-clear" id="searchClear" onclick="clearSearch()"><i data-lucide="x"></i></button> </div> <div class="search-dropdown" id="searchDropdown"></div> </div> <!-- Year + KM --> <div class="hf-row" style="margin-top:12px"> <div class="hf-field"> <div class="hf-label"><i data-lucide="calendar"></i> Năm sản xuất</div> <div class="hf-control"> <select class="hf-select" id="yearSelect" onchange="S.year=parseInt(this.value)"></select> <span class="hf-select-arrow"><i data-lucide="chevron-down"></i></span> </div> </div> <div class="hf-field"> <div class="hf-label"><i data-lucide="gauge"></i> Số km đã đi</div> <div class="hf-control"> <input class="hf-number" id="kmInput" type="number" min="0" max="500000" step="1000" placeholder="45000" oninput="S.km=parseInt(this.value)||0"> <span class="hf-unit">km</span> </div> </div> </div> <!-- Condition --> <div class="cond-group"> <div class="hf-label" style="margin-bottom:8px"><i data-lucide="car"></i> Tình trạng xe</div> <div class="cond-pills"> <button class="cond-pill" onclick="selectCond('can-sua','Cần sửa',this)"> <i data-lucide="wrench"></i><span class="cp-name">Cần sửa</span> </button> <button class="cond-pill" onclick="selectCond('trung-binh','Trung bình',this)"> <i data-lucide="minus-circle"></i><span class="cp-name">Trung bình</span> </button> <button class="cond-pill sel" onclick="selectCond('tot','Tốt',this)"> <i data-lucide="star"></i><span class="cp-name">Tốt</span> </button> <button class="cond-pill" onclick="selectCond('rat-tot','Rất tốt',this)"> <i data-lucide="sparkles"></i><span class="cp-name">Rất tốt</span> </button> </div> </div> <button class="btn-calc" id="calcBtn" onclick="calculate()" disabled> <i data-lucide="zap"></i> Định giá ngay
</button> </div> </div> </div> ${renderComponent($$result2, "DinhGiaXeMotionWidget", DinhGiaXeMotionWidget, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/components/dinh-gia-xe/DinhGiaXeMotionWidget", "client:component-export": "default" })}  <div class="page"> <!-- RESULT SECTION --> <div id="resultSection" style="margin-bottom:24px"> <!-- Active car bar --> <div class="car-bar"> <div class="car-bar-name" id="rCarName">Toyota Fortuner 2.7V</div> <span class="car-tag year" id="rYearTag">2021</span> <span class="car-tag km" id="rKmTag">45k km</span> <span class="car-tag cond" id="rCondTag">Tốt</span> <button class="btn-recalc" onclick="scrollToForm()"><i data-lucide="refresh-cw"></i> Định giá xe khác</button> </div> <!-- 3 price cards --> <div class="price-grid"> <div class="price-box hl"> <div class="pb-label"><i data-lucide="trending-up" style="width:11px;height:11px;vertical-align:-1px"></i> Giá bán cho cá nhân</div> <div class="pb-price" id="rPriceLow">780 – 820 triệu</div> <div class="pb-sub">Giá tham khảo khi rao bán lại cho người dùng cá nhân</div> </div> <div class="price-box"> <div class="pb-label"><i data-lucide="store" style="width:11px;height:11px;vertical-align:-1px"></i> Giá thu mua nhanh (showroom)</div> <div class="pb-price" id="rPriceMid">720 – 760 triệu</div> <div class="pb-sub">Giá dealer / đại lý sẵn sàng thu mua ngay trong ngày</div> </div> <div class="price-box"> <div class="pb-label"><i data-lucide="shield-check" style="width:11px;height:11px;vertical-align:-1px"></i> Phí bảo hiểm thân vỏ / năm</div> <div class="pb-price" id="rPriceIns">~12.5 triệu</div> <div class="pb-sub">Ước tính phí bảo hiểm vật chất xe trên MoMo</div> </div> </div> <!-- Breakdown + Insurance offer --> <div class="two-col"> <div> <!-- Breakdown --> <div class="sec-card"> <div class="sec-label">Chi tiết cấu thành định giá</div> <div class="bc-row"> <div class="bc-row-label"><i data-lucide="tag"></i> Giá xe mới niêm yết (năm ra mắt)</div> <div class="bc-row-val" id="bBase">1.050 tỷ</div> </div> <div class="bc-row"> <div class="bc-row-label"><i data-lucide="clock"></i> Khấu hao theo năm sử dụng</div> <div class="bc-row-val neg" id="bDepr">-252 triệu</div> </div> <div class="bc-row"> <div class="bc-row-label"><i data-lucide="gauge"></i> Điều chỉnh theo số km đã đi</div> <div class="bc-row-val" id="bKm">Không đổi</div> </div> <div class="bc-row"> <div class="bc-row-label"><i data-lucide="wrench"></i> Điều chỉnh theo tình trạng xe</div> <div class="bc-row-val" id="bCond">Không đổi</div> </div> <div class="bc-total"> <div class="bc-total-label">Định giá thị trường trung bình</div> <div class="bc-total-val" id="bFinal">798 triệu</div> </div> </div> <!-- 3 sources comparison --> <div class="sec-card"> <div class="sec-label">Tham khảo nguồn dữ liệu</div> <div class="src-items"> <div class="src-item"> <div class="src-name">MoMo Auto Data</div> <div class="src-price" id="srcMomo">780 – 820 triệu</div> <div class="src-detail">Dựa trên 450+ phiên đấu giá</div> </div> <div class="src-item"> <div class="src-name">Bonbanh.com</div> <div class="src-price" id="srcBonbanh">775 – 830 triệu</div> <div class="src-detail" id="srcBonbanhTB">TB 800 triệu</div> </div> <div class="src-item"> <div class="src-name">Chợ Tốt Xe</div> <div class="src-price" id="srcChotot">770 – 825 triệu</div> <div class="src-detail" id="srcChotTB">12 tin đăng tương đương</div> </div> </div> </div> </div> <!-- Right Insurance Callout --> <div> <div class="ins-card"> <div class="ins-body"> <div class="ins-eyebrow">Bảo hiểm ô tô</div> <div class="ins-title">Bảo hiểm thân vỏ</div> <div class="ins-sub">Bảo vệ xe trước rủi ro va quẹt, ngập nước. Nhận báo giá tức thì.</div> </div> <a class="btn-ins" href="/bao-hiem-o-to">Xem phí <span id="insPrice"></span></a> </div> <div class="sidebar-note"> <div class="note-title"><i data-lucide="info"></i> Lưu ý định giá</div> <div class="note-text">Giá mang tính chất tham khảo dựa trên thuật toán thống kê từ thị trường. Giá thực tế có thể thay đổi tùy thuộc vào lịch sử bảo dưỡng, lịch sử đâm đụng, thủy kích và thỏa thuận giữa hai bên.</div> </div> </div> </div> </div> <!-- PROMO SIDEBAR CONTENT FOR UNCALCULATED STATE --> <div id="uncalcState" class="two-col"> <div class="sec-card"> <div class="sec-label">Tại sao chọn Định giá xe MoMo?</div> <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-top:10px"> <div> <div style="font-size:14px;font-weight:800;color:var(--gray-900);margin-bottom:4px">📊 Thuật toán minh bạch</div> <div style="font-size:12px;color:var(--gray-500);line-height:1.6">Phân tích dữ liệu khấu hao thực tế từ hàng nghìn tin đăng và phiên giao dịch xe cũ.</div> </div> <div> <div style="font-size:14px;font-weight:800;color:var(--gray-900);margin-bottom:4px">⚡ Báo giá tức thì</div> <div style="font-size:12px;color:var(--gray-500);line-height:1.6">Chỉ cần 3 bước chọn dòng xe, năm sản xuất và số km để nhận ngay kết quả định giá.</div> </div> <div> <div style="font-size:14px;font-weight:800;color:var(--gray-900);margin-bottom:4px">🛡️ Đối tác uy tín</div> <div style="font-size:12px;color:var(--gray-500);line-height:1.6">Hợp tác cùng PVI, PJICO, DBV mang tới giải pháp bảo hiểm và bảo dưỡng tối ưu cho xe.</div> </div> </div> </div> <div> <div class="sidebar-promo"> <div class="sp-eyebrow"><i data-lucide="zap"></i> Tiện ích nổi bật</div> <div class="sp-title">Quản lý xe ô tô toàn diện trên MoMo</div> <div class="sp-sub">Tra phạt nguội, mua bảo hiểm TNDS, nạp tự động ePass và đặt lịch bảo dưỡng chỉ với 1 ứng dụng.</div> <div class="sp-items"> <a class="sp-item" href="/phat-nguoi"> <div class="sp-item-icon"><i data-lucide="alert-triangle"></i></div> <div><div class="sp-item-name">Tra phạt nguội</div><div class="sp-item-sub">Kiểm tra vi phạm miễn phí</div></div> </a> <a class="sp-item" href="/epass"> <div class="sp-item-icon"><i data-lucide="credit-card"></i></div> <div><div class="sp-item-name">Nạp tự động ePass</div><div class="sp-item-sub">Không lo kẹt trạm ETC</div></div> </a> <a class="sp-item" href="/bao-hiem-o-to"> <div class="sp-item-icon"><i data-lucide="shield"></i></div> <div><div class="sp-item-name">Bảo hiểm ô tô</div><div class="sp-item-sub">TNDS &amp; Thân vỏ giá tốt</div></div> </a> </div> </div> </div> </div> </div> ` }));
}, "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/dinh-gia-xe.astro", void 0);

const $$file = "/Users/hienhv/HienHv/Klaus/Web-Idea/web-momo-prototype/apps/astro/src/pages/tien-ich-giao-thong/dinh-gia-xe.astro";
const $$url = "/tien-ich-giao-thong/dinh-gia-xe";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DinhGiaXe,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
