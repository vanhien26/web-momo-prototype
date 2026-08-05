import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Fuel, RefreshCw, MapPin, Sparkles, Zap, ShieldCheck, ChevronRight } from 'lucide-react';

export default function GasPriceHeroMotion() {
  const [region, setRegion] = useState<'1' | '2'>('1');

  return (
    <section style={{
      background: 'linear-gradient(135deg, #1c171a 0%, #2b1f2b 50%, #171118 100%)',
      padding: '40px 20px 48px',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid rgba(255,255,255,0.08)'
    }}>
      {/* Background Animated Gradient Glowing Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '-100px',
          right: '10%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #eb2f96 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: 'absolute',
          bottom: '-120px',
          left: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'center', position: 'relative', zIndex: 2 }}>
        
        {/* Left Column: Hero Text & Region Picker */}
        <div>
          {/* Breadcrumbs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#a09aa5', marginBottom: '14px' }}>
            <a href="/" style={{ color: '#a09aa5', textDecoration: 'none' }}>Trang chủ</a>
            <span>›</span>
            <a href="/tien-ich-giao-thong" style={{ color: '#a09aa5', textDecoration: 'none' }}>Tiện ích giao thông</a>
            <span>›</span>
            <span style={{ color: '#ffffff', fontWeight: 700 }}>Giá xăng dầu</span>
          </div>

          {/* Live Badge */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '20px',
              background: 'rgba(235,47,150,0.18)',
              border: '1px solid rgba(235,47,150,0.35)',
              fontSize: '12px',
              fontWeight: 800,
              color: '#ffd6ee',
              marginBottom: '14px'
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', display: 'inline-block', boxShadow: '0 0 8px #4ade80' }} />
            Cập nhật thời gian thực theo Liên Bộ Công Thương - Tài Chính
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontSize: '36px', fontWeight: 900, color: '#ffffff', margin: '0 0 10px', letterSpacing: '-0.03em', lineHeight: 1.15 }}
          >
            Giá Xăng Dầu Hôm Nay <br />
            <span style={{ background: 'linear-gradient(90deg, #eb2f96 0%, #f472b6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Chính Xác &amp; Minh Bạch
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ fontSize: '14.5px', color: '#c8c3cc', margin: '0 0 24px', lineHeight: 1.55, maxWidth: '520px' }}
          >
            Tra cứu giá RON 95-III, E5 RON 92, Diesel vùng 1 &amp; vùng 2. Tự động tính số lít xăng và ước tính ngân sách nhiên liệu hàng tháng.
          </motion.p>

          {/* Region Picker & Timestamp Bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}
          >
            {/* Region Selector Buttons */}
            <div style={{ display: 'flex', background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '3px', border: '1px solid rgba(255,255,255,0.12)' }}>
              <button
                type="button"
                onClick={() => setRegion('1')}
                style={{
                  padding: '6px 14px',
                  borderRadius: '9px',
                  fontSize: '12px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  border: 'none',
                  background: region === '1' ? '#eb2f96' : 'transparent',
                  color: '#ffffff',
                  boxShadow: region === '1' ? '0 2px 8px rgba(235,47,150,0.4)' : 'none',
                  transition: 'all 0.15s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <MapPin style={{ width: '13px', height: '13px' }} /> Vùng 1 (Đồng Bằng)
              </button>
              <button
                type="button"
                onClick={() => setRegion('2')}
                style={{
                  padding: '6px 14px',
                  borderRadius: '9px',
                  fontSize: '12px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  border: 'none',
                  background: region === '2' ? '#eb2f96' : 'transparent',
                  color: '#ffffff',
                  boxShadow: region === '2' ? '0 2px 8px rgba(235,47,150,0.4)' : 'none',
                  transition: 'all 0.15s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <MapPin style={{ width: '13px', height: '13px' }} /> Vùng 2 (Miền Núi)
              </button>
            </div>

            {/* Last updated timestamp */}
            <div style={{ fontSize: '12px', color: '#a09aa5', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <RefreshCw style={{ width: '13px', height: '13px', color: '#eb2f96' }} />
              Kỳ điều hành: 15h00 31/07/2026
            </div>
          </motion.div>
        </div>

        {/* Right Column: Animated Gas Station & Car Visual */}
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
            {/* Animated Floating MoMo Points Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '-12px',
                right: '20px',
                background: '#eb2f96',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: 900,
                padding: '4px 12px',
                borderRadius: '20px',
                boxShadow: '0 4px 14px rgba(235,47,150,0.5)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Sparkles style={{ width: '12px', height: '12px' }} /> Đổ xăng tích điểm MoMo
            </motion.div>

            {/* SVG Illustration with Animated Elements */}
            <svg width="100%" height="180" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Ground line */}
              <rect x="10" y="150" width="300" height="4" fill="#3d3040" rx="2" />

              {/* Station Canopy */}
              <rect x="40" y="30" width="240" height="14" rx="4" fill="#eb2f96" />
              <rect x="30" y="24" width="260" height="10" rx="3" fill="#c22181" />
              <text x="160" y="42" textAnchor="middle" fontSize="11" fontWeight="900" fill="#ffffff" fontFamily="sans-serif">PUMP STATION</text>

              {/* Pillars */}
              <rect x="60" y="44" width="10" height="106" fill="#5c5060" rx="2" />
              <rect x="250" y="44" width="10" height="106" fill="#5c5060" rx="2" />

              {/* Gas Pump 1 */}
              <rect x="90" y="80" width="40" height="70" rx="6" fill="#ffffff" />
              <rect x="96" y="88" width="28" height="20" rx="4" fill="#eb2f96" opacity="0.15" />
              <rect x="100" y="92" width="20" height="4" rx="2" fill="#eb2f96" />
              <rect x="100" y="100" width="12" height="4" rx="2" fill="#eb2f96" />

              {/* Animated Fuel Drop Effect */}
              <motion.circle
                cx="110"
                cy="115"
                r="3"
                fill="#eb2f96"
                animate={{ y: [0, 20, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Animated Car Driving In */}
              <motion.g
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Car Body */}
                <rect x="170" y="110" width="110" height="34" rx="10" fill="#ffffff" />
                <path d="M185 110 L200 92 L250 92 L265 110 Z" fill="#ffffff" />
                <rect x="202" y="96" width="20" height="12" rx="2" fill="#1c171a" opacity="0.2" />
                <rect x="228" y="96" width="20" height="12" rx="2" fill="#1c171a" opacity="0.2" />

                {/* Animated Wheels */}
                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '195px 144px' }}
                >
                  <circle cx="195" cy="144" r="10" fill="#1c171a" />
                  <circle cx="195" cy="144" r="4" fill="#ffffff" />
                </motion.g>

                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '255px 144px' }}
                >
                  <circle cx="255" cy="144" r="10" fill="#1c171a" />
                  <circle cx="255" cy="144" r="4" fill="#ffffff" />
                </motion.g>
              </motion.g>
            </svg>

            {/* Quick Stat Bar at bottom of Visual Card */}
            <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '14px', marginTop: '10px' }}>
              <div style={{ fontSize: '11.5px', color: '#c8c3cc' }}>
                Giá RON 95-III {region === '1' ? 'Vùng 1' : 'Vùng 2'}:
              </div>
              <div style={{ fontSize: '15px', fontWeight: 900, color: '#4ade80', fontVariantNumeric: 'tabular-nums' }}>
                {region === '1' ? '22.850đ' : '23.300đ'} /lít
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
