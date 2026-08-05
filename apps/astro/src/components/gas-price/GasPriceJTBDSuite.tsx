import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingDown, Calendar, Sparkles, Bike, Car, Zap, Fuel,
  ArrowRight, BellRing, ShieldCheck, Check, Info
} from 'lucide-react';
import { fireConfetti } from '@/lib/confetti';

interface VehiclePreset {
  name: string;
  category: 'bike' | 'car';
  tankLiters: number;
  popularGas: string;
}

const VEHICLE_PRESETS: VehiclePreset[] = [
  { name: 'Honda Vision', category: 'bike', tankLiters: 4.9, popularGas: 'RON 95-III' },
  { name: 'Honda SH Mode', category: 'bike', tankLiters: 5.6, popularGas: 'RON 95-III' },
  { name: 'Air Blade 160', category: 'bike', tankLiters: 4.4, popularGas: 'RON 95-III' },
  { name: 'Exciter 155', category: 'bike', tankLiters: 5.4, popularGas: 'RON 95-III' },
  { name: 'Toyota Vios', category: 'car', tankLiters: 42, popularGas: 'RON 95-III' },
  { name: 'Hyundai Accent', category: 'car', tankLiters: 45, popularGas: 'RON 95-III' },
  { name: 'Mazda CX-5', category: 'car', tankLiters: 56, popularGas: 'RON 95-III' },
  { name: 'Ford Ranger', category: 'car', tankLiters: 80, popularGas: 'Dầu Diesel' },
];

export default function GasPriceJTBDSuite() {
  const [selectedVehicle, setSelectedVehicle] = useState<VehiclePreset>(VEHICLE_PRESETS[0]);
  const [dailyKm, setDailyKm] = useState<number>(30);
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const gasPriceRon95 = 22850;
  const evChargePricePerKwh = 3858;

  const currentGasPrice = selectedVehicle.popularGas === 'Dầu Diesel' ? 20650 : gasPriceRon95;
  const fullTankCost = Math.round(selectedVehicle.tankLiters * currentGasPrice);

  const monthlyKm = dailyKm * 30;
  const litersPer100km = selectedVehicle.category === 'car' ? 6.5 : 2.1;
  const monthlyLiters = (monthlyKm / 100) * litersPer100km;
  const monthlyGasCost = Math.round(monthlyLiters * gasPriceRon95);

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
    <div style={{ maxWidth: '1240px', margin: '24px auto', padding: '0 20px', fontFamily: "'MoMoTrustSans', -apple-system, sans-serif", display: 'flex', flexDirection: 'column', gap: '16px' }}>
      
      {/* 1. FORECAST BAR - MINIMALIST STRIP */}
      <section style={{ width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '16px 20px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: '#f0fdf4',
              color: '#16a34a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <TrendingDown style={{ width: '18px', height: '18px' }} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#16a34a', background: '#dcfce7', padding: '2px 8px', borderRadius: '6px', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  Dự báo kỳ 07/08
                </span>
                <h2 style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  Giá xăng có thể GIẢM 200đ - 350đ/lít
                </h2>
              </div>
              <p style={{ fontSize: '12px', color: '#64748b', margin: '2px 0 0' }}>
                Khuyên dùng: Nếu chưa gấp, nên chờ sau 15h00 ngày mai để đổ xăng giá rẻ hơn.
              </p>
            </div>
          </div>

          <div>
            {!subscribed ? (
              <button
                type="button"
                onClick={handleSubscribe}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: '10px',
                  background: '#eb2f96',
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <BellRing style={{ width: '14px', height: '14px' }} /> Nhận Báo Giá Xăng
              </button>
            ) : (
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '10px',
                background: '#f0fdf4',
                color: '#16a34a',
                fontSize: '12px',
                fontWeight: 700,
                border: '1px solid #bbf7d0'
              }}>
                <ShieldCheck style={{ width: '15px', height: '15px' }} /> Đã nhận thông báo
              </div>
            )}
          </div>
        </motion.div>
      </section>

      {/* 2 & 3. TWO CLEAN MINIMALIST CARDS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
        
        {/* CARD A: VEHICLE TANK LOOKUP */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              boxSizing: 'border-box'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#f8fafc', color: '#0f172a', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {selectedVehicle.category === 'bike' ? <Bike style={{ width: '16px', height: '16px' }} /> : <Car style={{ width: '16px', height: '16px' }} />}
                </div>
                <div>
                  <h2 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    Tra Cứu Tiền Đổ Đầy Bình
                  </h2>
                  <span style={{ fontSize: '11.5px', color: '#64748b' }}>Chọn xe của bạn để xem tổng chi phí</span>
                </div>
              </div>

              {/* Minimal Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                {VEHICLE_PRESETS.map((v) => {
                  const isSelected = selectedVehicle.name === v.name;
                  return (
                    <button
                      key={v.name}
                      type="button"
                      onClick={() => handleSelectVehicle(v)}
                      style={{
                        padding: '5px 10px',
                        borderRadius: '8px',
                        fontSize: '11.5px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        border: isSelected ? '1px solid #eb2f96' : '1px solid #e2e8f0',
                        background: isSelected ? '#fff0f8' : '#f8fafc',
                        color: isSelected ? '#eb2f96' : '#475569',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      {v.name} ({v.tankLiters}L)
                    </button>
                  );
                })}
              </div>

              {/* Clean Result Box */}
              <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '16px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {selectedVehicle.name} · {selectedVehicle.tankLiters} Lít
                  </span>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#eb2f96' }}>
                    {selectedVehicle.popularGas}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedVehicle.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    style={{ fontSize: '26px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}
                  >
                    {fullTankCost.toLocaleString('vi-VN')} <span style={{ fontSize: '13px', fontWeight: 600, color: '#64748b' }}>đ</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div style={{ marginTop: '12px', fontSize: '11px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Info style={{ width: '12px', height: '12px', flexShrink: 0 }} /> Ước tính khi cạn bình đến đầy vòi bơm.
            </div>
          </motion.div>
        </section>

        {/* CARD B: EV VS GAS COMPARISON */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              boxSizing: 'border-box'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Zap style={{ width: '16px', height: '16px' }} />
                </div>
                <div>
                  <h2 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    So Sánh Tiêu Hao: Xe Xăng vs Xe Điện
                  </h2>
                  <span style={{ fontSize: '11.5px', color: '#64748b' }}>Ước tính ngân sách nhiên liệu hàng tháng</span>
                </div>
              </div>

              {/* Slider */}
              <div style={{ marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>Quãng đường đi:</span>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a', fontVariantNumeric: 'tabular-nums' }}>
                    {dailyKm} km/ngày ({monthlyKm.toLocaleString('vi-VN')} km/tháng)
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="120"
                  step="5"
                  value={dailyKm}
                  onChange={(e) => setDailyKm(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#0f172a', cursor: 'pointer' }}
                />
              </div>

              {/* Minimal Grid Comparison */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '12px', border: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Fuel style={{ width: '12px', height: '12px' }} /> Xe Xăng
                  </span>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', marginTop: '2px', fontVariantNumeric: 'tabular-nums' }}>
                    {monthlyGasCost.toLocaleString('vi-VN')} <span style={{ fontSize: '11px', fontWeight: 600, color: '#64748b' }}>đ</span>
                  </div>
                </div>

                <div style={{ background: '#f0fdf4', borderRadius: '10px', padding: '12px', border: '1px solid #bbf7d0' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#16a34a', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Zap style={{ width: '12px', height: '12px' }} /> Xe Điện
                  </span>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#16a34a', marginTop: '2px', fontVariantNumeric: 'tabular-nums' }}>
                    {monthlyEvCost.toLocaleString('vi-VN')} <span style={{ fontSize: '11px', fontWeight: 600, color: '#15803d' }}>đ</span>
                  </div>
                </div>
              </div>

              {/* Minimal Savings Banner */}
              <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '10px 14px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '12px', color: '#475569', fontWeight: 700 }}>Tiết kiệm được với xe điện:</span>
                <span style={{ fontSize: '13px', fontWeight: 900, color: '#16a34a', fontVariantNumeric: 'tabular-nums' }}>
                  {monthlySavings.toLocaleString('vi-VN')}đ (-{savingsPct}%)
                </span>
              </div>
            </div>

            <div style={{ marginTop: '12px' }}>
              <a href="/tram-sac" style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                Trạm sạc xe điện gần đây <ArrowRight style={{ width: '13px', height: '13px' }} />
              </a>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
