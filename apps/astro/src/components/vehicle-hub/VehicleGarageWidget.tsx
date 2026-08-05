import React, { useState } from 'react';
import { Car, Bike, ShieldCheck, Fuel, AlertTriangle, ChevronRight, Zap, RefreshCw } from 'lucide-react';

export default function VehicleGarageWidget() {
  const [activeVehicle, setActiveVehicle] = useState<'car' | 'bike'>('car');

  return (
    <div style={{ maxWidth: '1240px', margin: '32px auto 24px', padding: '0 20px', fontFamily: "'MoMoTrustSans', -apple-system, sans-serif" }}>
      {/* Widget Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#1c171a', margin: 0, display: 'flex', alignItems: 'center', gap: '8px', letterSpacing: '-0.02em' }}>
            <span style={{ width: '10px', height: '22px', background: '#eb2f96', borderRadius: '5px', display: 'inline-block' }}></span>
            Quản Lý Phương Tiện &amp; Tiện Ích Xe
          </h2>
          <p style={{ fontSize: '13px', color: '#7a6e7f', margin: '4px 0 0 18px' }}>
            Theo dõi hạn đăng kiểm, lịch bảo dưỡng, phạt nguội và chi phí sử dụng
          </p>
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 12px', borderRadius: '20px', background: '#fff0f8', border: '1px solid #ffd6ee', color: '#c22181', fontSize: '12px', fontWeight: 700 }}>
          <Zap style={{ width: '14px', height: '14px', color: '#eb2f96' }} /> Smart Vehicle Hub
        </span>
      </div>

      {/* Main Grid: 2 Columns (Main Garage Card + Fuel/EV Card) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        
        {/* Main Garage Card */}
        <div style={{ background: '#ffffff', border: '1px solid #e5e0e9', borderRadius: '16px', boxShadow: '0 4px 16px rgba(28,23,26,0.06)', overflow: 'hidden', gridColumn: 'span 2 / span 2' }}>
          
          {/* Card Header */}
          <div style={{ padding: '16px 20px', borderBottom: '1px solid #f0ebf4', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#fff0f8', color: '#eb2f96', display: 'flex', alignItems: 'center', justifyCenter: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {activeVehicle === 'car' ? <Car style={{ width: '22px', height: '22px' }} /> : <Bike style={{ width: '22px', height: '22px' }} />}
              </div>
              <div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#1c171a', margin: 0, lineHeight: 1.2 }}>
                  {activeVehicle === 'car' ? 'Toyota Camry 2.5Q' : 'Honda SH 160i ABS'}
                </h3>
                <span style={{ fontSize: '12px', color: '#7a6e7f' }}>
                  Biển số: <strong style={{ color: '#1c171a', fontWeight: 700 }}>{activeVehicle === 'car' ? '30H-888.99' : '59-S3 999.88'}</strong>
                </span>
              </div>
            </div>

            {/* Vehicle Selector Switcher */}
            <div style={{ display: 'inline-flex', background: '#f0ebf4', padding: '3px', borderRadius: '10px', gap: '2px' }}>
              <button
                type="button"
                onClick={() => setActiveVehicle('car')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '6px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: 700, border: 'none', cursor: 'pointer',
                  background: activeVehicle === 'car' ? '#ffffff' : 'transparent',
                  color: activeVehicle === 'car' ? '#1c171a' : '#7a6e7f',
                  boxShadow: activeVehicle === 'car' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                <Car style={{ width: '14px', height: '14px' }} /> Ô tô
              </button>
              <button
                type="button"
                onClick={() => setActiveVehicle('bike')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '6px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: 700, border: 'none', cursor: 'pointer',
                  background: activeVehicle === 'bike' ? '#ffffff' : 'transparent',
                  color: activeVehicle === 'bike' ? '#1c171a' : '#7a6e7f',
                  boxShadow: activeVehicle === 'bike' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                <Bike style={{ width: '14px', height: '14px' }} /> Xe máy
              </button>
            </div>
          </div>

          {/* Card Body */}
          <div style={{ padding: '20px' }}>
            
            {/* Status Chips Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px', marginBottom: '16px' }}>
              
              {/* Phạt nguội */}
              <div style={{ background: '#f7f5fa', padding: '12px', borderRadius: '12px', border: '1px solid #f0ebf4' }}>
                <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#a09aa5', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>Phạt Nguội</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '6px', background: '#dcfce7', color: '#15803d', fontSize: '11.5px', fontWeight: 700 }}>
                  <ShieldCheck style={{ width: '13px', height: '13px' }} /> Sạch (0 lỗi)
                </span>
              </div>

              {/* Hạn đăng kiểm */}
              <div style={{ background: '#f7f5fa', padding: '12px', borderRadius: '12px', border: '1px solid #f0ebf4' }}>
                <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#a09aa5', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>Hạn Đăng Kiểm</span>
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#1c171a', display: 'block', lineHeight: 1.2 }}>
                  {activeVehicle === 'car' ? '15/10/2026' : 'Không bắt buộc'}
                </span>
                {activeVehicle === 'car' && <span style={{ fontSize: '10.5px', color: '#16a34a', fontWeight: 700 }}>Còn 620 ngày</span>}
              </div>

              {/* Dư nợ ePass */}
              <div style={{ background: '#f7f5fa', padding: '12px', borderRadius: '12px', border: '1px solid #f0ebf4' }}>
                <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#a09aa5', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>Tài Khoản ePass</span>
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#eb2f96', display: 'block', lineHeight: 1.2 }}>
                  {activeVehicle === 'car' ? '450.000đ' : '0đ'}
                </span>
                <span style={{ fontSize: '10.5px', color: '#7a6e7f', fontWeight: 600 }}>Tự động nạp OK</span>
              </div>

              {/* Lịch bảo dưỡng */}
              <div style={{ background: '#f7f5fa', padding: '12px', borderRadius: '12px', border: '1px solid #f0ebf4' }}>
                <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#a09aa5', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>Bảo Dưỡng Kế</span>
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#d97706', display: 'block', lineHeight: 1.2 }}>45.000 km</span>
                <span style={{ fontSize: '10.5px', color: '#d97706', fontWeight: 700 }}>Cần thay nhớt</span>
              </div>

            </div>

            {/* Alert Banner */}
            <div style={{ background: '#fffbeb', border: '1px solid #fef3c7', borderRadius: '12px', padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <AlertTriangle style={{ width: '18px', height: '18px', color: '#d97706', flexShrink: 0 }} />
                <div>
                  <strong style={{ fontSize: '12.5px', color: '#92400e', display: 'block' }}>Lịch nhắc bảo dưỡng sắp tới</strong>
                  <span style={{ fontSize: '12px', color: '#b45309' }}>
                    {activeVehicle === 'car' ? 'Xe đã đi được 44.850 km. Hãy đặt lịch bảo dưỡng mốc 45.000 km.' : 'Khuyên dùng: Thay dầu máy & kiểm tra xích/curoa mỗi 3.000 km.'}
                  </span>
                </div>
              </div>
              <a href="/tien-ich-giao-thong/bao-duong" style={{ textDecoration: 'none' }}>
                <button type="button" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '6px 12px', borderRadius: '8px', background: '#d97706', color: '#ffffff', fontSize: '12px', fontWeight: 700, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                  Đặt lịch <ChevronRight style={{ width: '14px', height: '14px' }} />
                </button>
              </a>
            </div>

          </div>

          {/* Card Footer Actions */}
          <div style={{ background: '#faf8fc', padding: '12px 20px', borderTop: '1px solid #f0ebf4', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ display: 'flex', itemsCenter: 'center', gap: '8px' }}>
              <a href="/phat-nguoi" style={{ textDecoration: 'none' }}>
                <button type="button" style={{ padding: '6px 12px', borderRadius: '8px', background: '#ffffff', border: '1px solid #c8c3cc', color: '#3d3040', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>
                  Tra phạt nguội
                </button>
              </a>
              <a href="/tien-ich-giao-thong/hang-xe" style={{ textDecoration: 'none' }}>
                <button type="button" style={{ padding: '6px 12px', borderRadius: '8px', background: '#ffffff', border: '1px solid #c8c3cc', color: '#3d3040', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>
                  Tra cứu dòng xe
                </button>
              </a>
            </div>
            <a href="/tien-ich-giao-thong/chuyen-di" style={{ textDecoration: 'none' }}>
              <button type="button" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '7px 14px', borderRadius: '8px', background: '#eb2f96', color: '#ffffff', fontSize: '12.5px', fontWeight: 700, border: 'none', cursor: 'pointer' }}>
                Tính chi phí chuyến đi <ChevronRight style={{ width: '14px', height: '14px' }} />
              </button>
            </a>
          </div>

        </div>

        {/* Side Card: Gas & EV Charger Info */}
        <div style={{ background: '#ffffff', border: '1px solid #e5e0e9', borderRadius: '16px', boxShadow: '0 4px 16px rgba(28,23,26,0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
          <div>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid #f0ebf4', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#1c171a', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Fuel style={{ width: '18px', height: '18px', color: '#d97706' }} /> Nhiên Liệu &amp; Trạm Sạc
              </h3>
              <span style={{ fontSize: '11px', fontWeight: 700, background: '#fffbeb', color: '#b45309', padding: '2px 8px', borderRadius: '6px' }}>Hôm nay</span>
            </div>

            <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              
              <div style={{ background: '#f7f5fa', padding: '10px 12px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <strong style={{ fontSize: '12.5px', color: '#1c171a', display: 'block' }}>Giá RON 95-III</strong>
                  <span style={{ fontSize: '11px', color: '#7a6e7f' }}>Kỳ điều chỉnh mới nhất</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '14px', fontWeight: 800, color: '#1c171a', display: 'block' }}>22.850đ</span>
                  <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#16a34a' }}>▼ 420đ/lít</span>
                </div>
              </div>

              <div style={{ background: '#f7f5fa', padding: '10px 12px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <strong style={{ fontSize: '12.5px', color: '#1c171a', display: 'block' }}>Trạm Sạc EV Gần Nhất</strong>
                  <span style={{ fontSize: '11px', color: '#7a6e7f' }}>VinFast FastCharge (0.8km)</span>
                </div>
                <span style={{ fontSize: '10.5px', fontWeight: 700, background: '#16a34a', color: '#ffffff', padding: '3px 8px', borderRadius: '6px' }}>
                  Còn 4 trụ
                </span>
              </div>

            </div>
          </div>

          <div style={{ background: '#faf8fc', padding: '12px 20px', borderTop: '1px solid #f0ebf4', display: 'flex', gap: '8px' }}>
            <a href="/tien-ich-giao-thong/cay-xang" style={{ flex: 1, textDecoration: 'none' }}>
              <button type="button" style={{ width: '100%', padding: '6px 8px', borderRadius: '8px', background: '#ffffff', border: '1px solid #c8c3cc', color: '#3d3040', fontSize: '12px', fontWeight: 700, cursor: 'pointer', textAlign: 'center' }}>
                Tìm cây xăng
              </button>
            </a>
            <a href="/tien-ich-giao-thong/tram-sac" style={{ flex: 1, textDecoration: 'none' }}>
              <button type="button" style={{ width: '100%', padding: '6px 8px', borderRadius: '8px', background: '#16a34a', color: '#ffffff', fontSize: '12px', fontWeight: 700, border: 'none', cursor: 'pointer', textAlign: 'center' }}>
                Tìm trạm sạc EV
              </button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
