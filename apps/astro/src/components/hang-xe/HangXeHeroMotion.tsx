import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Car, Bike, Search, ShieldCheck, Sparkles, ChevronRight, Award, Zap, Fuel } from 'lucide-react';

export default function HangXeHeroMotion() {
  const [activeVehicleType, setActiveVehicleType] = useState<'car' | 'bike'>('car');

  return (
    <section style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      padding: '40px 20px 48px',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      fontFamily: "'MoMoTrustSans', -apple-system, sans-serif"
    }}>
      {/* Background Motion Glow Effects */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '-80px',
          right: '8%',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '6%',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #eb2f96 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'center', position: 'relative', zIndex: 2 }}>
        
        {/* Left Col: Hero Text & Vehicle Switcher */}
        <div>
          {/* Breadcrumbs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#94a3b8', marginBottom: '14px' }}>
            <a href="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Trang chủ</a>
            <span>›</span>
            <a href="/tien-ich-giao-thong" style={{ color: '#94a3b8', textDecoration: 'none' }}>Tiện ích giao thông</a>
            <span>›</span>
            <span style={{ color: '#ffffff', fontWeight: 700 }}>Hãng xe</span>
          </div>

          {/* Top Pill Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ display: 'inline-flex', background: 'rgba(255,255,255,0.08)', borderRadius: '14px', padding: '4px', border: '1px solid rgba(255,255,255,0.12)', marginBottom: '18px' }}
          >
            <button
              type="button"
              onClick={() => setActiveVehicleType('car')}
              style={{
                padding: '7px 16px',
                borderRadius: '10px',
                fontSize: '12.5px',
                fontWeight: 800,
                cursor: 'pointer',
                border: 'none',
                background: activeVehicleType === 'car' ? '#2563eb' : 'transparent',
                color: '#ffffff',
                boxShadow: activeVehicleType === 'car' ? '0 4px 14px rgba(37,99,235,0.4)' : 'none',
                transition: 'all 0.15s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Car style={{ width: '15px', height: '15px' }} /> Hãng Xe Ô Tô (34+)
            </button>

            <a
              href="/tien-ich-giao-thong/hang-xe-may"
              style={{
                padding: '7px 16px',
                borderRadius: '10px',
                fontSize: '12.5px',
                fontWeight: 800,
                cursor: 'pointer',
                border: 'none',
                background: activeVehicleType === 'bike' ? '#eb2f96' : 'transparent',
                color: activeVehicleType === 'bike' ? '#ffffff' : '#cbd5e1',
                textDecoration: 'none',
                transition: 'all 0.15s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Bike style={{ width: '15px', height: '15px' }} /> Hãng Xe Máy (12+)
            </a>
          </motion.div>

          {/* Heading H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            style={{ fontSize: '36px', fontWeight: 900, color: '#ffffff', margin: '0 0 10px', letterSpacing: '-0.03em', lineHeight: 1.15 }}
          >
            Dịch Vụ MoMo Cho <br />
            <span style={{ background: 'linear-gradient(90deg, #60a5fa 0%, #eb2f96 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Hãng Xe Của Bạn
            </span>
          </motion.h1>

          {/* Subheading H2 for semantic structure */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            style={{ fontSize: '14.5px', color: '#94a3b8', margin: '0 0 24px', lineHeight: 1.55, fontWeight: 400, maxWidth: '520px' }}
          >
            Tra cứu thông số kỹ thuật, lịch bảo dưỡng định kỳ, chi phí nuôi xe hàng năm và bảo hiểm theo từng thương hiệu xe ô tô tại Việt Nam.
          </motion.h2>

          {/* Quick Feature Badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#cbd5e1', background: 'rgba(255,255,255,0.06)', padding: '6px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <ShieldCheck style={{ width: '14px', height: '14px', color: '#60a5fa' }} /> 200+ Dòng xe Việt Nam
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#cbd5e1', background: 'rgba(255,255,255,0.06)', padding: '6px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Award style={{ width: '14px', height: '14px', color: '#eb2f96' }} /> Ước tính bảo dưỡng 1 Click
            </div>
          </motion.div>
        </div>

        {/* Right Col: Animated Car Graphic Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '380px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '24px',
            padding: '24px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
          }}>
            {/* Top Badge */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '-12px',
                right: '20px',
                background: '#2563eb',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: 900,
                padding: '4px 12px',
                borderRadius: '20px',
                boxShadow: '0 4px 14px rgba(37,99,235,0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Sparkles style={{ width: '12px', height: '12px' }} /> Toyota, VinFast, Hyundai, BMW...
            </motion.div>

            {/* SVG Car Graphic */}
            <svg width="100%" height="180" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Ground line */}
              <rect x="20" y="150" width="280" height="4" fill="#334155" rx="2" />

              {/* Animated Floating Car Silhouette */}
              <motion.g
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Modern Car Body */}
                <path d="M40 120 Q60 118 80 100 Q110 82 170 82 Q230 82 250 105 Q275 110 285 120 Q290 135 280 142 L40 142 Z" fill="#2563eb" />
                {/* Roofline highlight */}
                <path d="M90 98 Q120 84 170 84 Q220 84 242 102 Z" fill="#60a5fa" opacity="0.4" />
                {/* Windows */}
                <path d="M100 100 L135 90 L165 90 L165 110 L95 110 Z" fill="#0f172a" opacity="0.6" />
                <path d="M172 90 L210 90 L235 105 L172 110 Z" fill="#0f172a" opacity="0.6" />
                {/* Headlight LED beam */}
                <path d="M280 122 L315 112 L315 142 L280 132 Z" fill="#60a5fa" opacity="0.2" />

                {/* Animated Wheels */}
                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '85px 142px' }}
                >
                  <circle cx="85" cy="142" r="14" fill="#0f172a" stroke="#475569" strokeWidth="2" />
                  <circle cx="85" cy="142" r="6" fill="#60a5fa" />
                </motion.g>

                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '235px 142px' }}
                >
                  <circle cx="235" cy="142" r="14" fill="#0f172a" stroke="#475569" strokeWidth="2" />
                  <circle cx="235" cy="142" r="6" fill="#60a5fa" />
                </motion.g>
              </motion.g>
            </svg>

            {/* Quick Stat Bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '14px', marginTop: '10px' }}>
              <div style={{ fontSize: '11.5px', color: '#94a3b8' }}>Thương hiệu xe phổ biến nhất:</div>
              <div style={{ fontSize: '13px', fontWeight: 900, color: '#60a5fa' }}>VinFast &amp; Toyota</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
