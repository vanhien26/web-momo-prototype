import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart';

const GAS_HISTORY_DATA = [
  { date: '11/04', ron95: 23150, e5: 22680, diesel: 21120 },
  { date: '02/05', ron95: 22920, e5: 22450, diesel: 20980 },
  { date: '23/05', ron95: 23210, e5: 22750, diesel: 21250 },
  { date: '13/06', ron95: 22780, e5: 22310, diesel: 20500 },
  { date: '04/07', ron95: 23270, e5: 22760, diesel: 20850 },
  { date: '31/07', ron95: 22850, e5: 22380, diesel: 20650 },
];

const chartConfig = {
  ron95: {
    label: "Xăng RON 95-III",
    color: "#eb2f96",
  },
  e5: {
    label: "Xăng E5 RON 92",
    color: "#16a34a",
  },
  diesel: {
    label: "Dầu Diesel 0.05S",
    color: "#2563eb",
  },
} satisfies ChartConfig;

export default function BklitGasTrendChart() {
  const [activeMetric, setActiveMetric] = useState<'ron95' | 'e5' | 'diesel'>('ron95');

  return (
    <section style={{ maxWidth: '1240px', margin: '24px auto', padding: '0 20px', fontFamily: "'MoMoTrustSans', -apple-system, sans-serif" }}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: '#ffffff',
          borderRadius: '16px',
          border: '1px solid #e2e8f0',
          padding: '24px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
          <div>
            <h2 style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              Đồ Thị Lịch Sử Giá Xăng Dầu (6 Kỳ Điều Hành Gần Nhất)
            </h2>
            <span style={{ fontSize: '12px', color: '#64748b' }}>Đơn vị tính: VNĐ / lít</span>
          </div>

          {/* Metric Tab Selector */}
          <div style={{ display: 'flex', background: '#f8fafc', padding: '3px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <button
              type="button"
              onClick={() => setActiveMetric('ron95')}
              style={{
                padding: '6px 12px',
                borderRadius: '7px',
                fontSize: '11.5px',
                fontWeight: 700,
                cursor: 'pointer',
                border: 'none',
                background: activeMetric === 'ron95' ? '#eb2f96' : 'transparent',
                color: activeMetric === 'ron95' ? '#ffffff' : '#475569',
                transition: 'all 0.15s ease'
              }}
            >
              RON 95-III
            </button>
            <button
              type="button"
              onClick={() => setActiveMetric('e5')}
              style={{
                padding: '6px 12px',
                borderRadius: '7px',
                fontSize: '11.5px',
                fontWeight: 700,
                cursor: 'pointer',
                border: 'none',
                background: activeMetric === 'e5' ? '#16a34a' : 'transparent',
                color: activeMetric === 'e5' ? '#ffffff' : '#475569',
                transition: 'all 0.15s ease'
              }}
            >
              E5 RON 92
            </button>
            <button
              type="button"
              onClick={() => setActiveMetric('diesel')}
              style={{
                padding: '6px 12px',
                borderRadius: '7px',
                fontSize: '11.5px',
                fontWeight: 700,
                cursor: 'pointer',
                border: 'none',
                background: activeMetric === 'diesel' ? '#2563eb' : 'transparent',
                color: activeMetric === 'diesel' ? '#ffffff' : '#475569',
                transition: 'all 0.15s ease'
              }}
            >
              Dầu Diesel
            </button>
          </div>
        </div>

        {/* Chart Area with Explicit Pixel Height */}
        <div style={{ width: '100%', height: '260px', minHeight: '260px', position: 'relative' }}>
          <ChartContainer config={chartConfig} style={{ width: '100%', height: '260px' }}>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={GAS_HISTORY_DATA} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                <defs>
                  <linearGradient id="fillRon95" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#eb2f96" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#eb2f96" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="fillE5" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#16a34a" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#16a34a" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="fillDiesel" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis domain={['dataMin - 400', 'dataMax + 400']} tickLine={false} axisLine={false} tickFormatter={(v) => `${(v/1000).toFixed(1)}k`} />
                <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
                {activeMetric === 'ron95' && (
                  <Area type="monotone" dataKey="ron95" stroke="#eb2f96" strokeWidth={2.5} fillOpacity={1} fill="url(#fillRon95)" />
                )}
                {activeMetric === 'e5' && (
                  <Area type="monotone" dataKey="e5" stroke="#16a34a" strokeWidth={2.5} fillOpacity={1} fill="url(#fillE5)" />
                )}
                {activeMetric === 'diesel' && (
                  <Area type="monotone" dataKey="diesel" stroke="#2563eb" strokeWidth={2.5} fillOpacity={1} fill="url(#fillDiesel)" />
                )}
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </motion.div>
    </section>
  );
}
