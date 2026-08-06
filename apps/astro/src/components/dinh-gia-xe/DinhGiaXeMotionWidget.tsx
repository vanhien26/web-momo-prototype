import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, Calendar, Gauge, Wrench, MinusCircle, Star, Sparkles, Zap, 
  TrendingUp, Store, ShieldCheck, RefreshCw, Check, ArrowRight, Info, Car
} from 'lucide-react';
import { fireConfetti } from '@/lib/confetti';

interface CarModelEntry {
  brandId: string;
  brandName: string;
  logo: string;
  modelId: string;
  modelName: string;
  sub: string;
  fullName: string;
  baseNew: number; // in million VND
}

const BRANDS_DATA = [
  { id: 'toyota', name: 'Toyota', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg' },
  { id: 'honda', name: 'Honda', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Honda_logo.svg' },
  { id: 'hyundai', name: 'Hyundai', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Hyundai_Motor_Company_logo.svg' },
  { id: 'kia', name: 'KIA', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Kia-logo.svg' },
  { id: 'mazda', name: 'Mazda', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Mazda_logo.svg' },
  { id: 'ford', name: 'Ford', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg' },
  { id: 'mitsubishi', name: 'Mitsubishi', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Mitsubishi_logo.svg' },
  { id: 'vinfast', name: 'VinFast', logo: 'https://homepage.momocdn.net/img/momo-upload-api-240411101101-638482506617370879.png' },
  { id: 'mercedes', name: 'Mercedes', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg' },
  { id: 'bmw', name: 'BMW', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg' },
];

const CAR_DATABASE: CarModelEntry[] = [
  { brandId: 'toyota', brandName: 'Toyota', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg', modelId: 'vios', modelName: 'Vios 1.5G', sub: 'Sedan hạng B', fullName: 'Toyota Vios 1.5G', baseNew: 592 },
  { brandId: 'toyota', brandName: 'Toyota', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg', modelId: 'camry', modelName: 'Camry 2.5Q', sub: 'Sedan hạng D', fullName: 'Toyota Camry 2.5Q', baseNew: 1405 },
  { brandId: 'toyota', brandName: 'Toyota', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg', modelId: 'fortuner', modelName: 'Fortuner 2.7V', sub: 'SUV 7 chỗ', fullName: 'Toyota Fortuner 2.7V', baseNew: 1229 },
  { brandId: 'toyota', brandName: 'Toyota', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg', modelId: 'corolla-cross', modelName: 'Corolla Cross 1.8V', sub: 'SUV hạng C', fullName: 'Toyota Corolla Cross 1.8V', baseNew: 860 },
  { brandId: 'honda', brandName: 'Honda', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Honda_logo.svg', modelId: 'city', modelName: 'City RS', sub: 'Sedan hạng B', fullName: 'Honda City RS', baseNew: 609 },
  { brandId: 'honda', brandName: 'Honda', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Honda_logo.svg', modelId: 'crv', modelName: 'CR-V L AWD', sub: 'SUV 5+2 chỗ', fullName: 'Honda CR-V L AWD', baseNew: 1310 },
  { brandId: 'honda', brandName: 'Honda', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Honda_logo.svg', modelId: 'civic', brandName: 'Honda', modelName: 'Civic RS', sub: 'Sedan hạng C', fullName: 'Honda Civic RS', baseNew: 870 },
  { brandId: 'hyundai', brandName: 'Hyundai', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Hyundai_Motor_Company_logo.svg', modelId: 'accent', modelName: 'Accent 1.4 AT', sub: 'Sedan hạng B', fullName: 'Hyundai Accent 1.4 AT', baseNew: 484 },
  { brandId: 'hyundai', brandName: 'Hyundai', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Hyundai_Motor_Company_logo.svg', modelId: 'tucson', modelName: 'Tucson 2.0 Dầu', sub: 'SUV hạng C', fullName: 'Hyundai Tucson 2.0 Dầu', baseNew: 959 },
  { brandId: 'hyundai', brandName: 'Hyundai', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Hyundai_Motor_Company_logo.svg', modelId: 'santa-fe', modelName: 'Santa Fe 2.2 Dầu', sub: 'SUV 7 chỗ', fullName: 'Hyundai Santa Fe 2.2 Dầu', baseNew: 1269 },
  { brandId: 'mazda', brandName: 'Mazda', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Mazda_logo.svg', modelId: 'cx5', modelName: 'CX-5 2.0 Premium', sub: 'SUV hạng C', fullName: 'Mazda CX-5 2.0 Premium', baseNew: 829 },
  { brandId: 'mazda', brandName: 'Mazda', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Mazda_logo.svg', modelId: 'mazda3', modelName: 'Mazda3 1.5 Luxury', sub: 'Sedan hạng C', fullName: 'Mazda3 1.5 Luxury', baseNew: 619 },
  { brandId: 'ford', brandName: 'Ford', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg', modelId: 'ranger', modelName: 'Ranger Wildtrak', sub: 'Bán tải 4x4', fullName: 'Ford Ranger Wildtrak', baseNew: 979 },
  { brandId: 'ford', brandName: 'Ford', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg', modelId: 'everest', modelName: 'Everest Titanium+', sub: 'SUV 7 chỗ', fullName: 'Ford Everest Titanium+', baseNew: 1468 },
  { brandId: 'vinfast', brandName: 'VinFast', logo: 'https://homepage.momocdn.net/img/momo-upload-api-240411101101-638482506617370879.png', modelId: 'vf8', modelName: 'VF 8 Plus', sub: 'SUV hạng D điện', fullName: 'VinFast VF 8 Plus', baseNew: 1270 },
  { brandId: 'mercedes', brandName: 'Mercedes', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg', modelId: 'glc', modelName: 'GLC 300 4MATIC', sub: 'SUV hạng D sang', fullName: 'Mercedes-Benz GLC 300', baseNew: 2799 },
];

const POPULAR_SUGGESTIONS = [
  { label: 'Toyota Vios', entry: CAR_DATABASE[0] },
  { label: 'Honda CR-V', entry: CAR_DATABASE[5] },
  { label: 'Mazda CX-5', entry: CAR_DATABASE[10] },
  { label: 'Hyundai Accent', entry: CAR_DATABASE[7] },
  { label: 'Ford Ranger', entry: CAR_DATABASE[12] },
  { label: 'VinFast VF 8', entry: CAR_DATABASE[14] },
];

const DEPRECIATION_RATES = [1, 0.91, 0.83, 0.76, 0.69, 0.63, 0.57, 0.52, 0.47, 0.43];
const CONDITION_MULTIPLIERS = {
  'can-sua': { label: 'Cần sửa chữa', mult: 0.82, icon: Wrench },
  'trung-binh': { label: 'Trung bình', mult: 0.93, icon: MinusCircle },
  'tot': { label: 'Tốt', mult: 1.0, icon: Star },
  'rat-tot': { label: 'Rất tốt', mult: 1.05, icon: Sparkles }
};

type CondKey = keyof typeof CONDITION_MULTIPLIERS;

export default function DinhGiaXeMotionWidget() {
  const [searchQuery, setSearchQuery] = useState<string>('Mazda CX-5 2.0 Premium');
  const [selectedCar, setSelectedCar] = useState<CarModelEntry>(CAR_DATABASE[10]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState<number>(2021);
  const [km, setKm] = useState<number>(45000);
  const [condition, setCondition] = useState<CondKey>('tot');
  const [isCalculated, setIsCalculated] = useState<boolean>(true);

  // Autocomplete filtering
  const searchResults = CAR_DATABASE.filter(c => 
    c.fullName.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.modelName.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 6);

  const handleSelectCar = (car: CarModelEntry) => {
    setSelectedCar(car);
    setSearchQuery(car.fullName);
    setIsDropdownOpen(false);
    setIsCalculated(true);
    fireConfetti();
  };

  // Valuation algorithm
  const age = Math.max(0, currentYear - year);
  const retainRate = DEPRECIATION_RATES[Math.min(age, DEPRECIATION_RATES.length - 1)];
  const condMult = CONDITION_MULTIPLIERS[condition].mult;

  let kmMult = 1.0;
  if (km > 150000) kmMult = 0.88;
  else if (km > 80000) kmMult = 0.94;
  else if (km < 20000) kmMult = 1.03;

  const midValuation = Math.round(selectedCar.baseNew * retainRate * kmMult * condMult);
  const privateSaleLow = Math.round(midValuation * 0.97);
  const privateSaleHigh = Math.round(midValuation * 1.03);
  const dealerTradeInLow = Math.round(midValuation * 0.90);
  const dealerTradeInHigh = Math.round(midValuation * 0.95);

  const insPct = midValuation > 1500 ? 0.016 : midValuation > 800 ? 0.018 : 0.02;
  const annualInsuranceFee = Math.round(midValuation * insPct);

  // bklit UI proportional breakdown bar
  const deprLossAmt = Math.round(selectedCar.baseNew * (1 - retainRate));
  const kmAdjAmt = Math.round(selectedCar.baseNew * retainRate * (kmMult - 1));
  const condAdjAmt = Math.round(selectedCar.baseNew * retainRate * kmMult * (condMult - 1));

  const formatPrice = (m: number) => {
    if (m >= 1000) {
      return `${(m / 1000).toFixed(2).replace('.00', '')} tỷ`;
    }
    return `${m} triệu`;
  };

  return (
    <section style={{ maxWidth: '1240px', margin: '24px auto', padding: '0 20px', fontFamily: "'MoMoTrustSans', -apple-system, sans-serif" }}>
      
      {/* ── MAIN HERO FORM CARD ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
          overflow: 'hidden',
          marginBottom: '24px'
        }}
      >
        {/* Top Header */}
        <div style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          padding: '20px 24px',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'rgba(235,47,150,0.2)',
              border: '1px solid rgba(235,47,150,0.4)',
              color: '#f472b6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Car style={{ width: '22px', height: '22px' }} />
            </div>
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', margin: 0, letterSpacing: '-0.01em' }}>
                Định Giá Xe Ô Tô Cũ Nhanh &amp; Minh Bạch
              </h2>
              <p style={{ fontSize: '12.5px', color: '#94a3b8', margin: '3px 0 0' }}>
                Dữ liệu thuật toán tổng hợp từ 2.000+ phiên đấu giá &amp; tin đăng xe cũ tại Việt Nam
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#cbd5e1', background: 'rgba(255,255,255,0.08)', padding: '6px 12px', borderRadius: '8px' }}>
            <ShieldCheck style={{ width: '15px', height: '15px', color: '#4ade80' }} /> Kiểm định bởi PVI, PJICO, MIC
          </div>
        </div>

        {/* Form Body Layout */}
        <div style={{ padding: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          
          {/* HẠNG MỤC 1: TÌM XE CỰC NHANH & AUTOCOMPLETE */}
          <div>
            <div style={{ marginBottom: '18px', position: 'relative' }}>
              <label style={{ fontSize: '12px', fontWeight: 800, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <Search style={{ width: '14px', height: '14px', color: '#eb2f96' }} /> 1. Dòng xe cần định giá
              </label>

              {/* Search Box Input */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                border: '1.5px solid #cbd5e1',
                borderRadius: '12px',
                padding: '11px 14px',
                background: '#ffffff',
                transition: 'all 0.15s ease',
                boxShadow: isDropdownOpen ? '0 0 0 3px rgba(235,47,150,0.12)' : 'none'
              }}>
                <Search style={{ width: '18px', height: '18px', color: '#94a3b8', flexShrink: 0 }} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsDropdownOpen(true);
                  }}
                  onFocus={() => setIsDropdownOpen(true)}
                  placeholder="Gõ tên xe (VD: Toyota Vios, Mazda CX-5, Ford Ranger...)"
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    color: '#0f172a',
                    background: 'transparent',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              {/* Autocomplete Dropdown */}
              <AnimatePresence>
                {isDropdownOpen && searchResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 6px)',
                      left: 0,
                      right: 0,
                      background: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '14px',
                      boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
                      zIndex: 100,
                      overflow: 'hidden'
                    }}
                  >
                    {searchResults.map((car) => (
                      <div
                        key={car.fullName}
                        onClick={() => handleSelectCar(car)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '10px 14px',
                          cursor: 'pointer',
                          borderBottom: '1px solid #f1f5f9',
                          transition: 'background 0.1s ease'
                        }}
                      >
                        <img src={car.logo} alt={car.brandName} style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                        <div style={{ flex: 1 }}>
                          <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#0f172a' }}>{car.fullName}</span>
                          <span style={{ fontSize: '11px', color: '#64748b', marginLeft: '6px' }}>({car.sub})</span>
                        </div>
                        <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#eb2f96' }}>
                          Mới: {formatPrice(car.baseNew)}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Popular Suggestions Pills */}
              <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 700, alignSelf: 'center' }}>Đề xuất:</span>
                {POPULAR_SUGGESTIONS.map((sug) => (
                  <button
                    key={sug.label}
                    type="button"
                    onClick={() => handleSelectCar(sug.entry)}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '11.5px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      border: selectedCar.fullName === sug.entry.fullName ? '1px solid #eb2f96' : '1px solid #e2e8f0',
                      background: selectedCar.fullName === sug.entry.fullName ? '#fff0f8' : '#f8fafc',
                      color: selectedCar.fullName === sug.entry.fullName ? '#eb2f96' : '#475569',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {sug.label}
                  </button>
                ))}
              </div>
            </div>

            {/* HẠNG MỤC 2: FORM CHỌN CHUẨN 3 THAM SỐ WITH SLIDERS */}
            <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '16px' }}>
                
                {/* Year Select & Slider */}
                <div>
                  <label style={{ fontSize: '11.5px', fontWeight: 800, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
                    <Calendar style={{ width: '13px', height: '13px', color: '#eb2f96' }} /> Năm sản xuất
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <select
                      value={year}
                      onChange={(e) => setYear(Number(e.target.value))}
                      style={{
                        flex: 1,
                        padding: '9px 10px',
                        borderRadius: '8px',
                        border: '1.5px solid #cbd5e1',
                        fontSize: '14px',
                        fontWeight: 800,
                        color: '#0f172a',
                        background: '#ffffff',
                        cursor: 'pointer'
                      }}
                    >
                      {Array.from({ length: 16 }, (_, i) => currentYear - i).map((y) => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>
                  <input
                    type="range"
                    min={2011}
                    max={currentYear}
                    step={1}
                    value={year}
                    onChange={(e) => setYear(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#eb2f96', height: '4px', marginTop: '6px', cursor: 'pointer' }}
                  />
                </div>

                {/* Mileage Input & Slider */}
                <div>
                  <label style={{ fontSize: '11.5px', fontWeight: 800, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
                    <Gauge style={{ width: '13px', height: '13px', color: '#eb2f96' }} /> Số km đã đi
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <input
                      type="number"
                      value={km}
                      onChange={(e) => setKm(Math.max(0, Number(e.target.value)))}
                      step={5000}
                      style={{
                        flex: 1,
                        padding: '9px 10px',
                        borderRadius: '8px',
                        border: '1.5px solid #cbd5e1',
                        fontSize: '14px',
                        fontWeight: 800,
                        color: '#0f172a',
                        background: '#ffffff'
                      }}
                    />
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b' }}>km</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={200000}
                    step={5000}
                    value={km}
                    onChange={(e) => setKm(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#eb2f96', height: '4px', marginTop: '6px', cursor: 'pointer' }}
                  />
                </div>

              </div>

              {/* Condition Selector Pills */}
              <div>
                <label style={{ fontSize: '11.5px', fontWeight: 800, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                  <Wrench style={{ width: '13px', height: '13px', color: '#eb2f96' }} /> Tình trạng ngoại / nội thất xe
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
                  {(Object.keys(CONDITION_MULTIPLIERS) as CondKey[]).map((key) => {
                    const condObj = CONDITION_MULTIPLIERS[key];
                    const IconComp = condObj.icon;
                    const isSel = condition === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setCondition(key)}
                        style={{
                          padding: '8px 4px',
                          borderRadius: '8px',
                          border: isSel ? '1.5px solid #eb2f96' : '1px solid #cbd5e1',
                          background: isSel ? '#eb2f96' : '#ffffff',
                          color: isSel ? '#ffffff' : '#475569',
                          fontSize: '11px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '3px',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <IconComp style={{ width: '14px', height: '14px', color: isSel ? '#ffffff' : '#64748b' }} />
                        {condObj.label}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* HẠNG MỤC 3: MINH BẠCH THÔNG TIN VỚI BKLIT-UI VISUAL METERS */}
          <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              
              {/* Main Selected Car Title */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a' }}>{selectedCar.fullName}</span>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#eb2f96', background: '#fff0f8', border: '1px solid #ffd6ee', padding: '2px 8px', borderRadius: '6px' }}>
                  Năm {year} · {km >= 1000 ? `${(km/1000).toFixed(0)}k km` : `${km} km`}
                </span>
              </div>

              {/* Valuation Hero Prices */}
              <div style={{ background: '#ffffff', padding: '16px', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', marginBottom: '14px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
                  <TrendingUp style={{ width: '12px', height: '12px', color: '#eb2f96', display: 'inline', marginRight: '4px' }} />
                  Giá Ước Tính Rao Bán Cá Nhân
                </div>
                <div style={{ fontSize: '30px', fontWeight: 900, color: '#eb2f96', letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums', lineHeight: 1.1 }}>
                  {formatPrice(privateSaleLow)} – {formatPrice(privateSaleHigh)}
                </div>
                <div style={{ fontSize: '11.5px', color: '#64748b', marginTop: '6px', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Giá thu mua nhanh (Showroom):</span>
                  <strong style={{ color: '#0f172a' }}>{formatPrice(dealerTradeInLow)} – {formatPrice(dealerTradeInHigh)}</strong>
                </div>
              </div>

              {/* bklit-ui Stacked Depreciation Breakdown Meter */}
              <div style={{ background: '#ffffff', padding: '14px', borderRadius: '14px', border: '1px solid #e2e8f0', marginBottom: '14px' }}>
                <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                  📊 Bảng Phân Tích Cấu Thành Khấu Hao (bklit Visual Meter)
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '11.5px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569' }}>
                    <span>Giá xe mới niêm yết:</span>
                    <span style={{ fontWeight: 800, color: '#0f172a' }}>{formatPrice(selectedCar.baseNew)}</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#dc2626' }}>
                    <span>Trừ khấu hao {age} năm sử dụng:</span>
                    <span style={{ fontWeight: 800 }}>-{formatPrice(deprLossAmt)}</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', color: kmAdjAmt < 0 ? '#dc2626' : '#16a34a' }}>
                    <span>Điều chỉnh số km ({km.toLocaleString('vi-VN')} km):</span>
                    <span style={{ fontWeight: 800 }}>{kmAdjAmt >= 0 ? '+' : ''}{formatPrice(Math.abs(kmAdjAmt))}</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', color: condAdjAmt < 0 ? '#dc2626' : '#16a34a' }}>
                    <span>Điều chỉnh tình trạng ({CONDITION_MULTIPLIERS[condition].label}):</span>
                    <span style={{ fontWeight: 800 }}>{condAdjAmt >= 0 ? '+' : ''}{formatPrice(Math.abs(condAdjAmt))}</span>
                  </div>
                </div>

                {/* Visual Progress Bar */}
                <div style={{ marginTop: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', color: '#64748b', fontWeight: 700, marginBottom: '4px' }}>
                    <span>Tỷ lệ giá trị còn giữ lại:</span>
                    <span style={{ color: '#eb2f96', fontWeight: 800 }}>{Math.round(retainRate * kmMult * condMult * 100)}%</span>
                  </div>
                  <div style={{ height: '8px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
                    <motion.div
                      animate={{ width: `${Math.min(100, Math.round(retainRate * kmMult * condMult * 100))}%` }}
                      transition={{ duration: 0.4 }}
                      style={{ height: '100%', background: 'linear-gradient(90deg, #eb2f96 0%, #f472b6 100%)', borderRadius: '999px' }}
                    />
                  </div>
                </div>
              </div>

              {/* Insurance Cross-sell */}
              <div style={{ background: '#eff6ff', padding: '12px 14px', borderRadius: '10px', border: '1px solid #bfdbfe', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#1d4ed8' }}>Ước tính phí bảo hiểm thân vỏ:</div>
                  <div style={{ fontSize: '14px', fontWeight: 900, color: '#1e40af' }}>~{annualInsuranceFee} triệu/năm</div>
                </div>
                <a href="/bao-hiem-o-to" style={{ fontSize: '11.5px', fontWeight: 800, color: '#ffffff', background: '#2563eb', padding: '6px 12px', borderRadius: '8px', textDecoration: 'none' }}>
                  Báo giá 1-Click
                </a>
              </div>

            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
