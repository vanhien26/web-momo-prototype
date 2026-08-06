import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Fuel, ArrowDownRight, ArrowUpRight, Calculator, Sparkles, CheckCircle2, TrendingDown } from 'lucide-react';
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

export default function GasPriceMotionWidget() {
  const [selectedGas, setSelectedGas] = useState<GasType>(GAS_TYPES[0]);
  const [amount, setAmount] = useState<number>(100000);
  const [tankCapacity] = useState<number>(50);

  const calculatedLiters = (amount / selectedGas.price).toFixed(2);
  const fullTankCost = (selectedGas.price * tankCapacity).toLocaleString('vi-VN');

  const handleFullTank = () => {
    setAmount(selectedGas.price * tankCapacity);
    fireConfetti();
  };

  return (
    <div style={{ maxWidth: '1240px', margin: '32px auto', padding: '0 20px', fontFamily: "'MoMoTrustSans', -apple-system, sans-serif" }}>
      <motion.div 
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #e5e0e9',
          boxShadow: '0 8px 30px rgba(28,23,26,0.08)',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #1c171a 0%, #2d242d 100%)',
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
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: 'rgba(235,47,150,0.2)',
              border: '1px solid rgba(235,47,150,0.4)',
              color: '#f472b6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Fuel style={{ width: '24px', height: '24px' }} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', margin: 0, letterSpacing: '-0.02em' }}>
                  Bảng Giá Xăng &amp; Công Cụ Tính Tiền Xăng
                </h2>
              </div>
              <p style={{ fontSize: '12px', color: '#c8c3cc', margin: '4px 0 0' }}>
                Cập nhật kỳ điều chỉnh mới nhất · Tự động tính số lít &amp; tiền đổ xăng
              </p>
            </div>
          </div>

          <div style={{
            display: 'inline-flex',
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

        {/* Content Layout Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 0 }}>
          
          {/* Left Selection Area */}
          <div style={{ padding: '24px', borderRight: '1px solid #f0ebf4' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '12px', fontWeight: 800, color: '#7a6e7f', textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>
                1. Chọn loại nhiên liệu
              </h3>
              <span style={{ fontSize: '11.5px', color: '#a09aa5' }}>Vùng 1 (Hà Nội, TP.HCM,...)</span>
            </div>

            {/* Fuel Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginBottom: '20px' }}>
              {GAS_TYPES.map((gas) => {
                const isSelected = selectedGas.id === gas.id;
                return (
                  <motion.div
                    key={gas.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedGas(gas)}
                    style={{
                      position: 'relative',
                      padding: '14px',
                      borderRadius: '14px',
                      border: isSelected ? '2px solid #eb2f96' : '1.5px solid #e5e0e9',
                      background: isSelected ? '#fff0f8' : '#ffffff',
                      boxShadow: isSelected ? '0 4px 12px rgba(235,47,150,0.12)' : 'none',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {gas.popular && (
                      <span style={{
                        position: 'absolute',
                        top: '-10px',
                        right: '10px',
                        background: '#eb2f96',
                        color: '#ffffff',
                        fontSize: '9.5px',
                        fontWeight: 800,
                        padding: '2px 7px',
                        borderRadius: '10px'
                      }}>
                        Phổ biến
                      </span>
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#5c5060' }}>{gas.name}</span>
                      {isSelected && <CheckCircle2 style={{ width: '15px', height: '15px', color: '#eb2f96' }} />}
                    </div>

                    <div style={{ fontSize: '18px', fontWeight: 900, color: '#1c171a', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                      {gas.price.toLocaleString('vi-VN')} <span style={{ fontSize: '11px', fontWeight: 600, color: '#7a6e7f' }}>{gas.unit}</span>
                    </div>

                    <div style={{ marginTop: '8px' }}>
                      {gas.change < 0 ? (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', padding: '2px 6px', borderRadius: '6px', background: '#dcfce7', color: '#15803d', fontSize: '11px', fontWeight: 700 }}>
                          <ArrowDownRight style={{ width: '12px', height: '12px' }} /> Giảm {Math.abs(gas.change)}đ
                        </span>
                      ) : (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', padding: '2px 6px', borderRadius: '6px', background: '#ffe4e6', color: '#e11d48', fontSize: '11px', fontWeight: 700 }}>
                          <ArrowUpRight style={{ width: '12px', height: '12px' }} /> Tăng {gas.change}đ
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Amount Presets */}
            <div>
              <h3 style={{ fontSize: '12px', fontWeight: 800, color: '#7a6e7f', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 12px' }}>
                2. Chọn số tiền dự định đổ
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {[50000, 100000, 200000, 500000].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setAmount(preset)}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '10px',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      border: amount === preset ? '1.5px solid #1c171a' : '1.5px solid #e5e0e9',
                      background: amount === preset ? '#1c171a' : '#f7f5fa',
                      color: amount === preset ? '#ffffff' : '#3d3040',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {preset.toLocaleString('vi-VN')}đ
                  </button>
                ))}

                <button
                  type="button"
                  onClick={handleFullTank}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '8px 14px',
                    borderRadius: '10px',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    border: 'none',
                    background: '#eb2f96',
                    color: '#ffffff',
                    boxShadow: '0 2px 8px rgba(235,47,150,0.3)',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <Sparkles style={{ width: '13px', height: '13px' }} /> Đầy bình ({tankCapacity}L)
                </button>
              </div>
            </div>
          </div>

          {/* Right Live Result Calculation */}
          <div style={{ background: '#faf8fc', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '20px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <h3 style={{ fontSize: '13.5px', fontWeight: 800, color: '#1c171a', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calculator style={{ width: '16px', height: '16px', color: '#eb2f96' }} /> Kết Quả Ước Tính
                </h3>
                <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#7a6e7f' }}>{selectedGas.name}</span>
              </div>

              {/* Liters Card */}
              <div style={{ background: '#ffffff', padding: '20px', borderRadius: '14px', border: '1px solid #e5e0e9', textAlign: 'center', boxShadow: '0 2px 8px rgba(28,23,26,0.04)' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#a09aa5', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>
                  Số Lít Xăng Nhận Được
                </span>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${selectedGas.id}-${amount}`}
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.85, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ fontSize: '36px', fontWeight: 900, color: '#eb2f96', letterSpacing: '-0.03em', lineHeight: 1.1 }}
                  >
                    {calculatedLiters} <span style={{ fontSize: '16px', fontWeight: 700, color: '#3d3040' }}>Lít</span>
                  </motion.div>
                </AnimatePresence>

                <p style={{ fontSize: '12px', color: '#5c5060', margin: '8px 0 0' }}>
                  Số tiền thanh toán: <strong style={{ color: '#1c171a', fontWeight: 800 }}>{amount.toLocaleString('vi-VN')}đ</strong>
                </p>
              </div>

              {/* Full tank estimation */}
              <div style={{ marginTop: '14px', padding: '12px 14px', borderRadius: '12px', background: '#fff0f8', border: '1px solid #ffd6ee', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <strong style={{ fontSize: '12px', color: '#c22181', display: 'block' }}>Đổ đầy bình ({tankCapacity}L)</strong>
                  <span style={{ fontSize: '11px', color: '#7a6e7f' }}>Dành cho bình xăng ô tô 50L</span>
                </div>
                <span style={{ fontSize: '15px', fontWeight: 900, color: '#c22181' }}>{fullTankCost}đ</span>
              </div>
            </div>

            {/* Trigger Confetti CTA Button */}
            <button
              type="button"
              onClick={handleFullTank}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '12px',
                background: '#eb2f96',
                color: '#ffffff',
                fontSize: '13px',
                fontWeight: 800,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(235,47,150,0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.15s ease'
              }}
            >
              <Fuel style={{ width: '16px', height: '16px' }} /> Mô phỏng bơm xăng &amp; Bắn pháo hoa 🎉
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
