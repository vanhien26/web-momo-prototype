import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Fuel, ArrowDownRight, ArrowUpRight, Calculator, Sparkles, RefreshCw, CheckCircle2, TrendingDown } from 'lucide-react';
import { fireConfetti } from '@/lib/confetti';

interface GasType {
  id: string;
  name: string;
  price: number;
  change: number; // negative for reduction, positive for increase
  unit: string;
  color: string;
  popular?: boolean;
}

const GAS_TYPES: GasType[] = [
  { id: 'ron95', name: 'Xăng RON 95-III', price: 22850, change: -420, unit: 'đ/lít', color: '#eb2f96', popular: true },
  { id: 'e5ron92', name: 'Xăng E5 RON 92', price: 22380, change: -380, unit: 'đ/lít', color: '#16a34a' },
  { id: 'diesel', name: 'Dầu Diesel 0.05S', price: 20650, change: +150, unit: 'đ/lít', color: '#2563eb' },
];

export default function GasPriceMotionWidget() {
  const [selectedGas, setSelectedGas] = useState<GasType>(GAS_TYPES[0]);
  const [amount, setAmount] = useState<number>(100000); // 100,000 VND default
  const [tankCapacity, setTankCapacity] = useState<number>(50); // 50L for full tank

  const calculatedLiters = (amount / selectedGas.price).toFixed(2);
  const fullTankCost = (selectedGas.price * tankCapacity).toLocaleString('vi-VN');

  const handleQuickAmount = (val: number) => {
    setAmount(val);
  };

  const handleFullTank = () => {
    const total = selectedGas.price * tankCapacity;
    setAmount(total);
    fireConfetti();
  };

  return (
    <div className="w-full max-w-[1240px] mx-auto my-8 px-4 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden"
      >
        {/* Widget Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 text-white flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400">
              <Fuel className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-black tracking-tight text-white">Bảng Giá Xăng &amp; Công Cụ Tính Tiền Xăng</h2>
                <span className="bg-pink-500/20 text-pink-300 border border-pink-500/30 text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Motion Enabled
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">Cập nhật kỳ điều chỉnh mới nhất · Tự động tính số lít &amp; tiền đổ xăng</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
            <TrendingDown className="w-4 h-4" /> Kỳ điều hành 31/07: Giá xăng giảm đến 420đ/lít
          </div>
        </div>

        {/* Main Widget Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          
          {/* Left 2 Cols: Gas Cards Selection */}
          <div className="lg:col-span-2 p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">1. Chọn loại nhiên liệu</h3>
              <span className="text-xs text-slate-400">Giá áp dụng Vùng 1 (Hà Nội, TP.HCM,...)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {GAS_TYPES.map((gas) => {
                const isSelected = selectedGas.id === gas.id;
                return (
                  <motion.div
                    key={gas.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedGas(gas)}
                    className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      isSelected
                        ? 'border-pink-500 bg-pink-50/30 shadow-md'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    {gas.popular && (
                      <span className="absolute -top-2.5 right-3 bg-pink-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                        Phổ biến nhất
                      </span>
                    )}

                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-500">{gas.name}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-pink-600" />}
                    </div>

                    <div className="text-2xl font-black text-slate-900 tracking-tight">
                      {gas.price.toLocaleString('vi-VN')} <span className="text-xs font-semibold text-slate-500">{gas.unit}</span>
                    </div>

                    <div className="mt-2 flex items-center gap-1 text-xs font-bold">
                      {gas.change < 0 ? (
                        <span className="text-emerald-600 flex items-center bg-emerald-50 px-2 py-0.5 rounded-md">
                          <ArrowDownRight className="w-3.5 h-3.5 mr-0.5" /> Giảm {Math.abs(gas.change)}đ
                        </span>
                      ) : (
                        <span className="text-rose-600 flex items-center bg-rose-50 px-2 py-0.5 rounded-md">
                          <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" /> Tăng {gas.change}đ
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Presets */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">2. Chọn số tiền dự định đổ</h3>
              <div className="flex flex-wrap items-center gap-2">
                {[50000, 100000, 200000, 500000].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => handleQuickAmount(preset)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                      amount === preset
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                    }`}
                  >
                    {preset.toLocaleString('vi-VN')}đ
                  </button>
                ))}

                <button
                  onClick={handleFullTank}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-pink-600 hover:bg-pink-700 text-white transition-all shadow-sm flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" /> Đầy bình ({tankCapacity}L)
                </button>
              </div>
            </div>
          </div>

          {/* Right Col: Live Calculation Animated Display */}
          <div className="p-6 bg-slate-50 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                  <Calculator className="w-4 h-4 text-pink-600" /> Kết Quả Ước Tính
                </h3>
                <span className="text-xs text-slate-400 font-semibold">{selectedGas.name}</span>
              </div>

              {/* Liters Big Display */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm text-center relative overflow-hidden">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Số Lít Xăng Nhận Được</span>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${selectedGas.id}-${amount}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-4xl font-black text-pink-600 tracking-tight"
                  >
                    {calculatedLiters} <span className="text-lg font-bold text-slate-700">Lít</span>
                  </motion.div>
                </AnimatePresence>

                <p className="text-xs text-slate-500 mt-2">
                  Ứng với số tiền: <strong className="text-slate-900">{amount.toLocaleString('vi-VN')}đ</strong>
                </p>
              </div>

              {/* Full tank cost estimate */}
              <div className="mt-4 p-4 rounded-xl bg-pink-50/60 border border-pink-100 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-pink-900 block">Ước tính đổ đầy bình ({tankCapacity}L)</span>
                  <span className="text-[11px] text-pink-700">Dành cho bình xăng ô tô 50L</span>
                </div>
                <span className="text-base font-black text-pink-700">{fullTankCost}đ</span>
              </div>
            </div>

            {/* Action CTA */}
            <button
              onClick={handleFullTank}
              className="w-full py-3 px-4 bg-pink-600 hover:bg-pink-700 active:scale-95 text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Fuel className="w-4 h-4" /> Mô phỏng bơm xăng &amp; Bắn pháo hoa
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
