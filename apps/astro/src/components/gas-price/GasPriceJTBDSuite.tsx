import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingDown, Calendar, Sparkles, Bike, Car, Zap, 
  ChevronRight, ArrowRight, BellRing, Info, ShieldCheck, Check
} from 'lucide-react';
import { fireConfetti } from '@/lib/confetti';

interface VehiclePreset {
  name: string;
  category: 'bike' | 'car';
  tankLiters: number;
  popularGas: string;
}

const VEHICLE_PRESETS: VehiclePreset[] = [
  { name: 'Honda Vision 110', category: 'bike', tankLiters: 4.9, popularGas: 'RON 95-III' },
  { name: 'Honda SH Mode / SH 125i', category: 'bike', tankLiters: 5.6, popularGas: 'RON 95-III' },
  { name: 'Honda Air Blade 160', category: 'bike', tankLiters: 4.4, popularGas: 'RON 95-III' },
  { name: 'Yamaha Exciter 155', category: 'bike', tankLiters: 5.4, popularGas: 'RON 95-III' },
  { name: 'Toyota Vios 1.5G', category: 'car', tankLiters: 42, popularGas: 'RON 95-III' },
  { name: 'Hyundai Accent', category: 'car', tankLiters: 45, popularGas: 'RON 95-III' },
  { name: 'Mazda CX-5', category: 'car', tankLiters: 56, popularGas: 'RON 95-III' },
  { name: 'Ford Ranger Wildtrak', category: 'car', tankLiters: 80, popularGas: 'Dầu Diesel' },
];

export default function GasPriceJTBDSuite() {
  const [selectedVehicle, setSelectedVehicle] = useState<VehiclePreset>(VEHICLE_PRESETS[0]);
  const [dailyKm, setDailyKm] = useState<number>(30);
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const gasPriceRon95 = 22850;
  const evChargePricePerKwh = 3858; // VinFast charge rate ~3,858 VND/kWh

  // Calculate full tank cost for selected vehicle
  const currentGasPrice = selectedVehicle.popularGas === 'Dầu Diesel' ? 20650 : gasPriceRon95;
  const fullTankCost = Math.round(selectedVehicle.tankLiters * currentGasPrice);

  // Monthly travel cost calculation (30 days)
  const monthlyKm = dailyKm * 30;
  // Gas car/bike average: 6L / 100km for cars, 2L / 100km for bikes
  const litersPer100km = selectedVehicle.category === 'car' ? 6.5 : 2.1;
  const monthlyLiters = (monthlyKm / 100) * litersPer100km;
  const monthlyGasCost = Math.round(monthlyLiters * gasPriceRon95);

  // EV equivalent: 15 kWh / 100km for car, 2.5 kWh / 100km for e-bike
  const kwhPer100km = selectedVehicle.category === 'car' ? 15 : 2.5;
  const monthlyKwh = (monthlyKm / 100) * kwhPer100km;
  const monthlyEvCost = Math.round(monthlyKwh * evChargePricePerKwh);
  const monthlySavings = monthlyGasCost - monthlyEvCost;
  const savingsPct = Math.round((monthlySavings / monthlyGasCost) * 100);

  const handleSelectVehicle = (v: VehiclePreset) => {
    setSelectedVehicle(v);
    fireConfetti();
  };

  const handleSubscribe = () => {
    setSubscribed(true);
    fireConfetti();
  };

  return (
    <div style={{ maxWidth: '1240px', margin: '32px auto', padding: '0 20px', fontFamily: "'MoMoTrustSans', -apple-system, sans-serif", display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* FEATURE 1: FORECAST & SMART ADVISORY BADGE */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: 'linear-gradient(135deg, #101827 0%, #1e293b 100%)',
          borderRadius: '20px',
          padding: '24px',
          color: '#ffffff',
          boxShadow: '0 10px 30px rgba(15,23,42,0.15)',
          border: '1px solid rgba(255,255,255,0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(34,197,94,0.2) 0%, rgba(16,185,129,0.3) 100%)',
              border: '1px solid rgba(34,197,94,0.4)',
              color: '#4ade80',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <TrendingDown style={{ width: '28px', height: '28px' }} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', tracking: '0.08em', color: '#4ade80', background: 'rgba(34,197,94,0.15)', padding: '3px 10px', borderRadius: '20px', border: '1px solid rgba(34,197,94,0.3)' }}>
                  🔮 Dự Báo Kỳ Điều Hành Tới (15h00 Thống kê 07/08)
                </span>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#e2e8f0', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar style={{ width: '13px', height: '13px' }} /> Cập nhật theo giá Brent thế giới
                </span>
              </div>
              <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#ffffff', margin: 0, letterSpacing: '-0.02em' }}>
                Dự báo giá xăng có thể <span style={{ color: '#4ade80' }}>GIẢM 200đ - 350đ/lít</span>
              </h2>
              <p style={{ fontSize: '13px', color: '#94a3b8', margin: '6px 0 0', lineHeight: 1.5 }}>
                💡 <strong>Lời khuyên cho chủ xe:</strong> Nếu chưa gấp, bạn nên chờ sau 15h00 ngày mai để đổ xăng với mức giá tiết kiệm hơn!
              </p>
            </div>
          </div>

          {/* Subscribe alert button */}
          <div>
            {!subscribed ? (
              <button
                type="button"
                onClick={handleSubscribe}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  borderRadius: '14px',
                  background: '#eb2f96',
                  color: '#ffffff',
                  fontSize: '13px',
                  fontWeight: 800,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(235,47,150,0.4)',
                  transition: 'all 0.15s ease'
                }}
              >
                <BellRing style={{ width: '16px', height: '16px' }} /> Nhận Thông Báo Đổi Giá Xăng
              </button>
            ) : (
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                borderRadius: '14px',
                background: 'rgba(34,197,94,0.18)',
                color: '#4ade80',
                border: '1px solid rgba(34,197,94,0.3)',
                fontSize: '13px',
                fontWeight: 800
              }}>
                <ShieldCheck style={{ width: '18px', height: '18px' }} /> Đã Đăng Ký Nhận Tin App MoMo
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* FEATURE 2 & 3: GRID (VEHICLE LOOKUP + EV COMPARISON) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
        
        {/* CARD 1: VEHICLE TANK LOOKUP */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{
            background: '#ffffff',
            borderRadius: '20px',
            border: '1.5px solid #e5e0e9',
            padding: '24px',
            boxShadow: '0 4px 20px rgba(28,23,26,0.06)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#fff0f8', color: '#eb2f96', display: 'flex', alignItems: 'center', justifyCenter: 'center', flexShrink: 0 }}>
                {selectedVehicle.category === 'bike' ? <Bike style={{ width: '20px', height: '20px', margin: 'auto' }} /> : <Car style={{ width: '20px', height: '20px', margin: 'auto' }} />}
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 900, color: '#1c171a', margin: 0 }}>
                  Tra Cứu Giá Đổ Đầy Bình Theo Dòng Xe
                </h3>
                <span style={{ fontSize: '12px', color: '#7a6e7f' }}>Chọn xe của bạn để tính số tiền đổ xăng</span>
              </div>
            </div>

            {/* Vehicle Selector Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
              {VEHICLE_PRESETS.map((v) => {
                const isSelected = selectedVehicle.name === v.name;
                return (
                  <button
                    key={v.name}
                    type="button"
                    onClick={() => handleSelectVehicle(v)}
                    style={{
                      padding: '7px 12px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      border: isSelected ? '1.5px solid #eb2f96' : '1.5px solid #e5e0e9',
                      background: isSelected ? '#fff0f8' : '#f7f5fa',
                      color: isSelected ? '#c22181' : '#5c5060',
                      transition: 'all 0.15s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    {isSelected && <Check style={{ width: '13px', height: '13px' }} />}
                    {v.name} ({v.tankLiters}L)
                  </button>
                );
              })}
            </div>

            {/* Live Tank Calculation Card */}
            <div style={{ background: 'linear-gradient(135deg, #fff0f8 0%, #ffd6ee 100%)', borderRadius: '16px', padding: '20px', border: '1px solid #f472b6' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#c22181', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Giá đổ đầy bình ({selectedVehicle.name})
                </span>
                <span style={{ fontSize: '11px', fontWeight: 700, background: '#ffffff', color: '#c22181', padding: '2px 8px', borderRadius: '12px' }}>
                  Dung tích {selectedVehicle.tankLiters} Lít
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedVehicle.name}
                  initial={{ scale: 0.88, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.88, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ fontSize: '32px', fontWeight: 900, color: '#1c171a', letterSpacing: '-0.03em', lineHeight: 1.1 }}
                >
                  {fullTankCost.toLocaleString('vi-VN')} <span style={{ fontSize: '16px', fontWeight: 700, color: '#5c5060' }}>VNĐ</span>
                </motion.div>
              </AnimatePresence>

              <p style={{ fontSize: '12px', color: '#7a6e7f', margin: '8px 0 0' }}>
                Nhiên liệu đề xuất: <strong style={{ color: '#1c171a' }}>{selectedVehicle.popularGas}</strong> (Đơn giá {currentGasPrice.toLocaleString('vi-VN')}đ/L)
              </p>
            </div>
          </div>

          <div style={{ marginTop: '16px', fontSize: '12px', color: '#a09aa5', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Info style={{ width: '14px', height: '14px', flexShrink: 0 }} /> Giá tính ước lượng khi bình xăng cạn hoàn toàn đến đầy vòi bơm.
          </div>
        </motion.div>

        {/* CARD 2: GAS VS EV COST COMPARISON */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{
            background: '#ffffff',
            borderRadius: '20px',
            border: '1.5px solid #e5e0e9',
            padding: '24px',
            boxShadow: '0 4px 20px rgba(28,23,26,0.06)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#f0fdf4', color: '#16a34a', display: 'flex', alignItems: 'center', justifyCenter: 'center', flexShrink: 0 }}>
                <Zap style={{ width: '20px', height: '20px', margin: 'auto' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 900, color: '#1c171a', margin: 0 }}>
                  So Sánh Chi Phí Hàng Tháng: Xe Xăng vs Xe Điện
                </h3>
                <span style={{ fontSize: '12px', color: '#7a6e7f' }}>Tính toán ngân sách nhiên liệu theo quãng đường di chuyển</span>
              </div>
            </div>

            {/* Daily Km Range Slider Input */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '12.5px', fontWeight: 800, color: '#5c5060' }}>
                  Quãng đường di chuyển trung bình:
                </label>
                <span style={{ fontSize: '14px', fontWeight: 900, color: '#eb2f96', background: '#fff0f8', padding: '2px 10px', borderRadius: '8px', border: '1px solid #ffd6ee' }}>
                  {dailyKm} km / ngày ({monthlyKm.toLocaleString('vi-VN')} km/tháng)
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="120"
                step="5"
                value={dailyKm}
                onChange={(e) => setDailyKm(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#eb2f96', cursor: 'pointer' }}
              />
            </div>

            {/* Comparison Side by Side */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
              {/* Gas Box */}
              <div style={{ background: '#f7f5fa', borderRadius: '14px', padding: '14px', border: '1px solid #e5e0e9' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#7a6e7f', display: 'block', marginBottom: '4px' }}>🚗 Xe Nhiên Liệu Xăng</span>
                <div style={{ fontSize: '18px', fontWeight: 900, color: '#1c171a' }}>
                  {monthlyGasCost.toLocaleString('vi-VN')} <span style={{ fontSize: '11px', fontWeight: 600 }}>đ/tháng</span>
                </div>
                <span style={{ fontSize: '11px', color: '#a09aa5', marginTop: '4px', display: 'block' }}>~{monthlyLiters.toFixed(1)} Lít xăng</span>
              </div>

              {/* EV Box */}
              <div style={{ background: '#f0fdf4', borderRadius: '14px', padding: '14px', border: '1px solid #bbf7d0' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#15803d', display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '4px' }}>
                  ⚡ Xe Điện <Sparkles style={{ width: '11px', height: '11px' }} />
                </span>
                <div style={{ fontSize: '18px', fontWeight: 900, color: '#16a34a' }}>
                  {monthlyEvCost.toLocaleString('vi-VN')} <span style={{ fontSize: '11px', fontWeight: 600 }}>đ/tháng</span>
                </div>
                <span style={{ fontSize: '11px', color: '#15803d', marginTop: '4px', display: 'block' }}>~{monthlyKwh.toFixed(1)} kWh điện</span>
              </div>
            </div>

            {/* Savings Banner */}
            <div style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', borderRadius: '12px', padding: '12px 16px', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 700, opacity: 0.9, display: 'block' }}>Tiết kiệm được với xe điện</span>
                <strong style={{ fontSize: '15px', fontWeight: 900 }}>{monthlySavings.toLocaleString('vi-VN')}đ / tháng</strong>
              </div>
              <span style={{ fontSize: '14px', fontWeight: 900, background: 'rgba(255,255,255,0.2)', padding: '4px 10px', borderRadius: '20px' }}>
                -{savingsPct}%
              </span>
            </div>
          </div>

          <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyBetween: 'space-between' }}>
            <a href="/tram-sac" style={{ fontSize: '12.5px', fontWeight: 800, color: '#eb2f96', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              Tìm trạm sạc xe điện gần đây <ArrowRight style={{ width: '14px', height: '14px' }} />
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
