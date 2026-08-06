import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Fuel, ArrowDownRight, ArrowUpRight, Calculator, CheckCircle2, TrendingDown } from 'lucide-react';
import { fireConfetti } from '@/lib/confetti';

interface GasType {
  id: string;
  name: string;
  price: number;
  change: number;
  unit: string;
  popular?: boolean;
}

const GAS_TYPES: GasType[] = [
  { id: 'ron95', name: 'Xăng RON 95-III', price: 22850, change: -420, unit: 'đ/lít', popular: true },
  { id: 'e5ron92', name: 'Xăng E5 RON 92', price: 22380, change: -380, unit: 'đ/lít' },
  { id: 'diesel', name: 'Dầu Diesel 0.05S', price: 20650, change: +150, unit: 'đ/lít' },
];

const PRESETS = [50000, 100000, 200000, 500000, 1000000];
const TANK_CAPACITIES = [
  { label: 'Xe máy (4L)', value: 4 },
  { label: 'Sedan (45L)', value: 45 },
  { label: 'SUV (60L)', value: 60 },
  { label: 'Bán tải (75L)', value: 75 },
];

export default function GasPriceMotionWidget() {
  const [selectedGas, setSelectedGas] = useState<GasType>(GAS_TYPES[0]);
  const [amount, setAmount] = useState<number>(100000);
  const [tankCapacity, setTankCapacity] = useState<number>(45);

  const calculatedLiters = (amount / selectedGas.price).toFixed(2);
  const fullTankCost = selectedGas.price * tankCapacity;

  const handleFullTank = (capacity: number) => {
    setTankCapacity(capacity);
    setAmount(selectedGas.price * capacity);
    fireConfetti();
  };

  const handleAmountInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val)) {
      setAmount(Math.max(0, val));
    } else {
      setAmount(0);
    }
  };

  return (
    <section style={{ maxWidth: '1240px', margin: '32px auto', padding: '0 20px', fontFamily: "'MoMoTrustSans', -apple-system, sans-serif" }}>
      <motion.div 
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
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
              <Fuel style={{ width: '22px', height: '22px' }} />
            </div>
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', margin: 0, letterSpacing: '-0.01em' }}>
                Bảng Giá Xăng &amp; Công Cụ Tính Tiền Xăng Trực Tuyến
              </h2>
              <p style={{ fontSize: '12.5px', color: '#94a3b8', margin: '4px 0 0' }}>
                Cập nhật kỳ điều chỉnh mới nhất · Tự động tính số lít &amp; tiền đổ đầy bình
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '12px',
            fontWeight: 700,
            color: '#4ade80',
            background: 'rgba(22,163,74,0.15)',
            padding: '6px 12px',
            borderRadius: '8px',
            border: '1px solid rgba(22,163,74,0.3)'
          }}>
            <TrendingDown style={{ width: '15px', height: '15px' }} /> Kỳ 31/07: Giá xăng giảm tới 420đ/lít
          </div>
        </div>

        {/* Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 0 }}>
          
          {/* Left Inputs Section */}
          <div style={{ padding: '24px', borderRight: '1px solid #f1f5f9' }}>
            
            {/* Step 1: Fuel Type */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '12px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                  1. Chọn loại nhiên liệu
                </h3>
                <span style={{ fontSize: '11.5px', color: '#94a3b8' }}>Vùng 1</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
                {GAS_TYPES.map((gas) => {
                  const isSelected = selectedGas.id === gas.id;
                  return (
                    <div
                      key={gas.id}
                      onClick={() => setSelectedGas(gas)}
                      style={{
                        position: 'relative',
                        padding: '14px',
                        borderRadius: '12px',
                        border: isSelected ? '2px solid #eb2f96' : '1.5px solid #e2e8f0',
                        background: isSelected ? '#fff0f8' : '#ffffff',
                        boxShadow: isSelected ? '0 4px 12px rgba(235,47,150,0.12)' : 'none',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        userSelect: 'none'
                      }}
                    >
                      {gas.popular && (
                        <span style={{
                          position: 'absolute',
                          top: '-9px',
                          right: '8px',
                          background: '#eb2f96',
                          color: '#ffffff',
                          fontSize: '9px',
                          fontWeight: 800,
                          padding: '2px 6px',
                          borderRadius: '8px'
                        }}>
                          Phổ biến
                        </span>
                      )}

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#475569' }}>{gas.name}</span>
                        {isSelected && <CheckCircle2 style={{ width: '15px', height: '15px', color: '#eb2f96' }} />}
                      </div>

                      <div style={{ fontSize: '17px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.01em' }}>
                        {gas.price.toLocaleString('vi-VN')} <span style={{ fontSize: '11px', fontWeight: 600, color: '#64748b' }}>{gas.unit}</span>
                      </div>

                      <div style={{ marginTop: '6px' }}>
                        {gas.change < 0 ? (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', padding: '2px 6px', borderRadius: '5px', background: '#dcfce7', color: '#15803d', fontSize: '10.5px', fontWeight: 700 }}>
                            <ArrowDownRight style={{ width: '11px', height: '11px' }} /> Giảm {Math.abs(gas.change)}đ
                          </span>
                        ) : (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', padding: '2px 6px', borderRadius: '5px', background: '#ffe4e6', color: '#e11d48', fontSize: '10.5px', fontWeight: 700 }}>
                            <ArrowUpRight style={{ width: '11px', height: '11px' }} /> Tăng {gas.change}đ
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Amount & Range Slider */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <h3 style={{ fontSize: '12px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                  2. Nhập số tiền hoặc Kéo thanh trượt
                </h3>
              </div>

              {/* Number Input & Slider */}
              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <input
                    type="number"
                    value={amount}
                    onChange={handleAmountInputChange}
                    step={10000}
                    min={10000}
                    max={3000000}
                    style={{
                      flex: 1,
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '18px',
                      fontWeight: 900,
                      color: '#0f172a',
                      background: '#ffffff',
                      outline: 'none'
                    }}
                  />
                  <span style={{ fontSize: '14px', fontWeight: 800, color: '#475569' }}>VNĐ</span>
                </div>

                {/* Range Slider */}
                <div>
                  <input
                    type="range"
                    min={10000}
                    max={1500000}
                    step={10000}
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    style={{
                      width: '100%',
                      accentColor: '#eb2f96',
                      height: '6px',
                      cursor: 'pointer'
                    }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', color: '#94a3b8', marginTop: '4px', fontWeight: 600 }}>
                    <span>10.000đ</span>
                    <span>500.000đ</span>
                    <span>1.500.000đ</span>
                  </div>
                </div>
              </div>

              {/* Quick Presets */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {PRESETS.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setAmount(preset)}
                    style={{
                      padding: '7px 12px',
                      borderRadius: '8px',
                      fontSize: '11.5px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      border: amount === preset ? '1.5px solid #0f172a' : '1px solid #cbd5e1',
                      background: amount === preset ? '#0f172a' : '#ffffff',
                      color: amount === preset ? '#ffffff' : '#475569',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {preset.toLocaleString('vi-VN')}đ
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Tank Capacity Selector */}
            <div>
              <h3 style={{ fontSize: '12px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 10px' }}>
                3. Đổ đầy bình theo dòng xe
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {TANK_CAPACITIES.map((cap) => (
                  <button
                    key={cap.value}
                    type="button"
                    onClick={() => handleFullTank(cap.value)}
                    style={{
                      padding: '7px 12px',
                      borderRadius: '8px',
                      fontSize: '11.5px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      border: tankCapacity === cap.value ? '1.5px solid #eb2f96' : '1px solid #cbd5e1',
                      background: tankCapacity === cap.value ? '#eb2f96' : '#ffffff',
                      color: tankCapacity === cap.value ? '#ffffff' : '#475569',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {cap.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Live Calculation Output */}
          <div style={{ background: '#f8fafc', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '20px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calculator style={{ width: '16px', height: '16px', color: '#eb2f96' }} /> Kết Quả Ước Tính Chi Tiết
                </h3>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b' }}>{selectedGas.name}</span>
              </div>

              {/* Liters Card with bklit-ui Capacity Meter */}
              <div style={{ background: '#ffffff', padding: '20px', borderRadius: '14px', border: '1px solid #e2e8f0', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', marginBottom: '14px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>
                  Số Lít Xăng Nhận Được
                </span>
                <div style={{ fontSize: '38px', fontWeight: 900, color: '#eb2f96', letterSpacing: '-0.03em', lineHeight: 1 }}>
                  {calculatedLiters} <span style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a' }}>Lít</span>
                </div>
                <div style={{ fontSize: '11.5px', color: '#64748b', marginTop: '8px' }}>
                  Với {amount.toLocaleString('vi-VN')}đ @ {selectedGas.price.toLocaleString('vi-VN')}đ/lít
                </div>

                {/* bklit-ui Fill Capacity Gauge */}
                <div style={{ marginTop: '14px', textAlign: 'left' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                    <span>Tỷ lệ nạp đầy bình ({tankCapacity}L):</span>
                    <span style={{ color: '#eb2f96', fontWeight: 800 }}>{Math.min(100, Math.round(((amount / selectedGas.price) / tankCapacity) * 100))}%</span>
                  </div>
                  <div style={{ height: '8px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
                    <motion.div
                      animate={{ width: `${Math.min(100, Math.round(((amount / selectedGas.price) / tankCapacity) * 100))}%` }}
                      transition={{ duration: 0.3 }}
                      style={{ height: '100%', background: 'linear-gradient(90deg, #eb2f96 0%, #f472b6 100%)', borderRadius: '999px' }}
                    />
                  </div>
                </div>
              </div>

              {/* Full Tank Estimated Cost Card */}
              <div style={{ background: '#ffffff', padding: '16px', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>Chi Phí Đổ Đầy Bình ({tankCapacity}L):</span>
                  <span style={{ fontSize: '15px', fontWeight: 900, color: '#0f172a' }}>
                    {fullTankCost.toLocaleString('vi-VN')}đ
                  </span>
                </div>
                <div style={{ fontSize: '11px', color: '#64748b' }}>
                  Ước tính chạy được khoảng <strong>{(tankCapacity * 16.5).toFixed(0)} km</strong> đường hỗn hợp.
                </div>
              </div>
            </div>

            {/* Bottom Tip */}
            <div style={{ background: '#eff6ff', padding: '12px 14px', borderRadius: '10px', border: '1px solid #bfdbfe', fontSize: '12px', color: '#1e40af', lineHeight: 1.5 }}>
              💡 <strong>Mẹo tiết kiệm:</strong> Đổ xăng theo số tiền tròn (như 100k, 200k) hoặc đổ đầy bình giúp bạn tiết kiệm thời gian chờ đợi tại cây xăng.
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}
