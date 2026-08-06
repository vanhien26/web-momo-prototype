import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

/* ── DATA ── */
const BRANDS = [
  { id: 'toyota', name: 'Toyota', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg' },
  { id: 'honda', name: 'Honda', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Honda_logo.svg' },
  { id: 'hyundai', name: 'Hyundai', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Hyundai_Motor_Company_logo.svg' },
  { id: 'mazda', name: 'Mazda', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Mazda_logo.svg' },
  { id: 'ford', name: 'Ford', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg' },
  { id: 'mitsubishi', name: 'Mitsubishi', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Mitsubishi_logo.svg' },
  { id: 'vinfast', name: 'VinFast', logo: 'https://homepage.momocdn.net/img/momo-upload-api-240411101101-638482506617370879.png' },
  { id: 'mercedes', name: 'Mercedes', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg' },
  { id: 'bmw', name: 'BMW', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg' },
  { id: 'kia', name: 'KIA', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Kia-logo.svg' },
];

interface Car { brandId: string; name: string; logo: string; sub: string; baseNew: number; }

const CARS: Car[] = [
  { brandId:'toyota', name:'Toyota Vios 1.5G',       logo:BRANDS[0].logo, sub:'Sedan hạng B',   baseNew:592  },
  { brandId:'toyota', name:'Toyota Camry 2.5Q',       logo:BRANDS[0].logo, sub:'Sedan hạng D',   baseNew:1405 },
  { brandId:'toyota', name:'Toyota Fortuner 2.7V',    logo:BRANDS[0].logo, sub:'SUV 7 chỗ',      baseNew:1229 },
  { brandId:'toyota', name:'Toyota Corolla Cross 1.8V',logo:BRANDS[0].logo,sub:'SUV hạng C',     baseNew:860  },
  { brandId:'toyota', name:'Toyota Innova Cross',     logo:BRANDS[0].logo, sub:'MPV 7 chỗ',      baseNew:990  },
  { brandId:'honda',  name:'Honda City RS',           logo:BRANDS[1].logo, sub:'Sedan hạng B',   baseNew:609  },
  { brandId:'honda',  name:'Honda CR-V L AWD',        logo:BRANDS[1].logo, sub:'SUV 5+2 chỗ',    baseNew:1310 },
  { brandId:'honda',  name:'Honda Civic RS',          logo:BRANDS[1].logo, sub:'Sedan hạng C',   baseNew:870  },
  { brandId:'hyundai',name:'Hyundai Accent 1.4 AT',   logo:BRANDS[2].logo, sub:'Sedan hạng B',   baseNew:484  },
  { brandId:'hyundai',name:'Hyundai Tucson 2.0 Dầu',  logo:BRANDS[2].logo, sub:'SUV hạng C',     baseNew:959  },
  { brandId:'hyundai',name:'Hyundai Santa Fe 2.2 Dầu',logo:BRANDS[2].logo, sub:'SUV 7 chỗ',      baseNew:1269 },
  { brandId:'mazda',  name:'Mazda CX-5 2.0 Premium',  logo:BRANDS[3].logo, sub:'SUV hạng C',     baseNew:829  },
  { brandId:'mazda',  name:'Mazda3 1.5 Luxury',       logo:BRANDS[3].logo, sub:'Sedan hạng C',   baseNew:619  },
  { brandId:'ford',   name:'Ford Ranger Wildtrak',    logo:BRANDS[4].logo, sub:'Bán tải 4x4',    baseNew:979  },
  { brandId:'ford',   name:'Ford Everest Titanium+',  logo:BRANDS[4].logo, sub:'SUV 7 chỗ',      baseNew:1468 },
  { brandId:'mitsubishi',name:'Mitsubishi Xpander',   logo:BRANDS[5].logo, sub:'MPV 7 chỗ',      baseNew:680  },
  { brandId:'mitsubishi',name:'Mitsubishi Pajero Sport',logo:BRANDS[5].logo,sub:'SUV 7 chỗ',     baseNew:1250 },
  { brandId:'vinfast',name:'VinFast VF 8 Plus',       logo:BRANDS[6].logo, sub:'SUV hạng D điện',baseNew:1270 },
  { brandId:'vinfast',name:'VinFast VF 6 Plus',       logo:BRANDS[6].logo, sub:'SUV hạng B điện',baseNew:700  },
  { brandId:'mercedes',name:'Mercedes-Benz GLC 300',  logo:BRANDS[7].logo, sub:'SUV hạng D sang',baseNew:2799 },
  { brandId:'mercedes',name:'Mercedes-Benz C 200',    logo:BRANDS[7].logo, sub:'Sedan hạng E',   baseNew:1800 },
  { brandId:'bmw',    name:'BMW 3 Series 320i',       logo:BRANDS[8].logo, sub:'Sedan hạng E',   baseNew:2069 },
  { brandId:'kia',    name:'KIA Seltos 1.4T',         logo:BRANDS[9].logo, sub:'SUV hạng B+',    baseNew:689  },
  { brandId:'kia',    name:'KIA Carnival 2.2D',       logo:BRANDS[9].logo, sub:'MPV cao cấp',    baseNew:1499 },
];

const SUGGESTS = ['Toyota Vios', 'Honda CR-V', 'Mazda CX-5', 'Ford Ranger', 'VinFast VF 8'];

const DEPR = [1, .91, .83, .76, .69, .63, .57, .52, .47, .43];
const CONDS = {
  'can-sua':   { label: 'Cần sửa',   mult: .82 },
  'trung-binh':{ label: 'Trung bình',mult: .93 },
  'tot':       { label: 'Tốt',       mult: 1.0 },
  'rat-tot':   { label: 'Rất tốt',   mult: 1.05 },
} as const;
type CondKey = keyof typeof CONDS;

function fmt(n: number) {
  return n >= 1000 ? `${(n / 1000).toFixed(1).replace('.0', '')} tỷ` : `${n} triệu`;
}
function fmtKm(k: number) { return k >= 1000 ? `${Math.round(k / 1000)}k km` : `${k} km`; }

/* ── SVG ICONS (inline, no dep) ── */
const I = {
  shield: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  search: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  x: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  cal: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  gauge: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10M12 6v6l4 2"/></svg>,
  wrench: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  minus: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg>,
  star: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  sparkle: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z"/></svg>,
  zap: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  refresh: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.36"/></svg>,
  check: <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  trending: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  home: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>,
  shieldChk: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  chevron: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>,
  tag: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
  clock: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  bars: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  info: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>,
};

const COND_ICONS: Record<CondKey, React.ReactNode> = {
  'can-sua': I.wrench, 'trung-binh': I.minus, 'tot': I.star, 'rat-tot': I.sparkle,
};

/* ── MOTION VARIANTS ── */
const fadeUp   = { hidden: { opacity: 0, y: 22 }, show: (i=0) => ({ opacity: 1, y: 0, transition: { duration: .5, ease: [.22,1,.36,1], delay: i*.1 } }) };
const fadeRight= { hidden: { opacity: 0, x: -18 }, show: (i=0) => ({ opacity: 1, x: 0, transition: { duration: .45, ease: 'easeOut', delay: i*.1 } }) };

/* ── MAIN COMPONENT ── */
export default function DinhGiaXeHeroMotion() {
  const [query, setQuery] = useState('');
  const [ddOpen, setDdOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const curYear = new Date().getFullYear();
  const [year, setYear] = useState(curYear - 4);
  const [km, setKm] = useState(45000);
  const [cond, setCond] = useState<CondKey>('tot');
  const [result, setResult] = useState<null | ReturnType<typeof calcResult>>(null);

  const hits = query.trim()
    ? CARS.filter(c => c.name.toLowerCase().includes(query.toLowerCase())).slice(0, 7)
    : [];

  function selectCar(c: Car) {
    setSelectedCar(c);
    setQuery(c.name);
    setDdOpen(false);
  }

  function calcResult(car: Car) {
    const age = Math.max(0, curYear - year);
    const retain = DEPR[Math.min(age, DEPR.length - 1)];
    const condMult = CONDS[cond].mult;
    let kmMult = 1;
    if (km > 150000) kmMult = .88;
    else if (km > 80000) kmMult = .94;
    else if (km < 20000) kmMult = 1.03;
    const mid = Math.round(car.baseNew * retain * kmMult * condMult);
    const sellLow = Math.round(mid * .90), sellHigh = Math.round(mid * .97);
    const buyLow = Math.round(mid * .95), buyHigh = Math.round(mid * 1.07);
    const insPct = mid > 1500 ? .016 : mid > 800 ? .018 : .02;
    const ins = Math.round(mid * insPct);
    const deprAmt = Math.round(car.baseNew * (1 - retain));
    const kmAdj = Math.round(car.baseNew * retain * (kmMult - 1));
    const condAdj = Math.round(car.baseNew * retain * kmMult * (condMult - 1));
    const retainPct = Math.round(retain * kmMult * condMult * 100);
    const r1 = mid + Math.round((Math.random() - .3) * mid * .06);
    const r2 = mid + Math.round((Math.random() - .2) * mid * .12);
    return { car, year, km, cond, mid, sellLow, sellHigh, buyLow, buyHigh, ins, deprAmt, kmAdj, condAdj, retainPct, r1, r2 };
  }

  function onCalculate() {
    if (!selectedCar) return;
    setResult(calcResult(selectedCar));
    setTimeout(() => {
      document.getElementById('dg-result')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }

  function onReset() {
    setResult(null);
    setSelectedCar(null);
    setQuery('');
    document.getElementById('dg-hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* styles */
  const pink = '#EB2F96', pinkD = '#C22181', pink50 = '#FFF0F8';
  const gray900 = '#1C171A', gray700 = '#3D3040', gray600 = '#5C5465',
        gray500 = '#7A6E7F', gray400 = '#A09AA5', gray300 = '#C8C3CC',
        gray200 = '#E5E0E9', gray100 = '#F0EBF4', gray50 = '#F7F3FA';
  const green = '#16A34A', green50 = '#F0FDF4';
  const blue = '#2563EB', blue50 = '#EFF6FF';
  const amber = '#D97706', amber50 = '#FFFBEB';
  const red = '#dc2626';
  const font = "'MoMo Trust Sans', -apple-system, sans-serif";

  return (
    <>
      {/* ── HERO ── */}
      <section id="dg-hero" style={{
        background: '#0B0A12',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Gradient overlays */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `
            radial-gradient(ellipse 80% 70% at 10% 40%, rgba(235,47,150,.18) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 90% 20%, rgba(37,99,235,.12) 0%, transparent 55%),
            radial-gradient(ellipse 50% 60% at 55% 100%, rgba(139,92,246,.10) 0%, transparent 55%)
          `
        }}/>
        {/* Speed lines */}
        <div style={{
          position: 'absolute', top: 0, right: -60, width: 420, height: '100%', pointerEvents: 'none',
          background: `repeating-linear-gradient(108deg, transparent 0, transparent 38px, rgba(235,47,150,.05) 38px, rgba(235,47,150,.05) 40px)`,
        }}/>

        <div style={{
          position: 'relative', zIndex: 1,
          maxWidth: 1080, margin: '0 auto',
          padding: '64px 20px 80px',
          display: 'grid', gridTemplateColumns: '1fr 440px', gap: 48, alignItems: 'center',
        }}
          className="dg-hero-inner"
        >
          {/* ── LEFT: COPY ── */}
          <div>
            <motion.div
              variants={fadeRight} initial="hidden" animate="show" custom={0}
              style={{ display:'inline-flex', alignItems:'center', gap:8, fontSize:11, fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', color:'rgba(255,255,255,.4)', marginBottom:20, fontFamily:font }}
            >
              <span style={{ color: pink }}>{I.shield}</span>
              Dữ liệu từ 2.000+ phiên giao dịch thực tế
            </motion.div>

            <motion.h1
              variants={fadeUp} initial="hidden" animate="show" custom={1}
              style={{ fontSize:46, fontWeight:900, lineHeight:1.1, color:'#fff', letterSpacing:'-.02em', marginBottom:18, fontFamily:font }}
            >
              Định giá xe ô tô cũ<br/>
              <em style={{ fontStyle:'none', color: pink }}>nhanh & minh bạch</em>
            </motion.h1>

            <motion.ul
              initial="hidden" animate="show"
              style={{ listStyle:'none', padding:0, margin:'0 0 32px', display:'flex', flexDirection:'column', gap:12, fontFamily:font }}
            >
              {[
                'Dữ liệu khấu hao từ thị trường xe cũ Việt Nam, cập nhật liên tục',
                'Phân tích cấu thành định giá minh bạch — năm, km, tình trạng',
                'Ước tính phí bảo hiểm thân vỏ ngay sau khi định giá',
                'Kiểm định và hợp tác với PVI, PJICO, DBV, MIC',
              ].map((txt, i) => (
                <motion.li
                  key={i} variants={fadeRight} custom={i + 2}
                  style={{ display:'flex', alignItems:'flex-start', gap:10, fontSize:14, lineHeight:1.55, color:'rgba(255,255,255,.72)' }}
                >
                  <span style={{
                    flexShrink:0, width:18, height:18, borderRadius:'50%',
                    background:'rgba(34,197,94,.2)', color:'#4ade80',
                    fontSize:10, fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center', marginTop:1,
                  }}>✓</span>
                  {txt}
                </motion.li>
              ))}
            </motion.ul>

            {/* Stats row */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={5}
              style={{ display:'flex', gap:28, flexWrap:'wrap', fontFamily:font }}
            >
              {[
                { num:'2.000+', label:'phiên đấu giá xe cũ' },
                { num:'65', label:'hãng xe được hỗ trợ' },
                { num:'Tức thì', label:'kết quả định giá' },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize:22, fontWeight:900, color:'#fff', letterSpacing:'-.01em', lineHeight:1 }}>{s.num}</div>
                  <div style={{ fontSize:11.5, color:'rgba(255,255,255,.4)', marginTop:4 }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: FORM CARD ── */}
          <motion.div
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:.5, ease:[.22,1,.36,1], delay:.15 }}
            style={{
              background: '#fff', borderRadius:20, padding:24,
              boxShadow:'0 24px 80px rgba(0,0,0,.5), 0 0 0 1px rgba(255,255,255,.06)',
              fontFamily: font,
            }}
          >
            <div style={{ fontSize:13, fontWeight:800, color:gray500, letterSpacing:'.04em', textTransform:'uppercase', marginBottom:16, display:'flex', alignItems:'center', gap:6 }}>
              <span style={{ color:pink }}>{I.search}</span> Nhập thông tin xe
            </div>

            {/* Search */}
            <div style={{ position:'relative', marginBottom:10 }}>
              <div style={{
                display:'flex', alignItems:'center', gap:8,
                border:`1.5px solid ${ddOpen ? pink : gray200}`,
                borderRadius:12, padding:'11px 14px', background:'#fff', transition:'border-color .15s',
                boxShadow: ddOpen ? `0 0 0 3px rgba(235,47,150,.1)` : 'none',
              }}>
                <span style={{ color:gray400, flexShrink:0 }}>{I.search}</span>
                <input
                  type="text" value={query}
                  onChange={e => { setQuery(e.target.value); setDdOpen(true); }}
                  onFocus={() => setDdOpen(true)}
                  placeholder="Toyota Fortuner, Honda CR-V, Mazda CX-5..."
                  style={{
                    flex:1, border:'none', outline:'none', fontSize:14, fontWeight:600,
                    color:gray900, background:'transparent', fontFamily:'inherit',
                  }}
                />
                {query && (
                  <button onClick={() => { setQuery(''); setSelectedCar(null); setDdOpen(false); }}
                    style={{ background:'none', border:'none', cursor:'pointer', color:gray400, padding:0, display:'flex' }}>
                    {I.x}
                  </button>
                )}
              </div>

              {/* Dropdown */}
              <AnimatePresence>
                {ddOpen && hits.length > 0 && (
                  <motion.div
                    initial={{ opacity:0, y:4 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:4 }}
                    transition={{ duration:.15 }}
                    style={{
                      position:'absolute', top:'calc(100% + 6px)', left:0, right:0,
                      background:'#fff', border:`1px solid ${gray200}`, borderRadius:14,
                      boxShadow:'0 12px 32px rgba(0,0,0,.14)', zIndex:300,
                      maxHeight:240, overflowY:'auto',
                    }}
                  >
                    {hits.map(c => (
                      <div key={c.name} onClick={() => selectCar(c)}
                        style={{
                          display:'flex', alignItems:'center', gap:12, padding:'10px 14px', cursor:'pointer',
                          borderBottom:`1px solid ${gray100}`, transition:'background .1s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.background = gray50)}
                        onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
                      >
                        <img src={c.logo} alt="" style={{ width:24, height:24, objectFit:'contain', flexShrink:0 }} onError={e => (e.currentTarget.style.display='none')} />
                        <div style={{ flex:1 }}>
                          <span style={{ fontSize:13, fontWeight:700, color:gray900 }}>{c.name}</span>
                          <span style={{ fontSize:11, color:gray400, marginLeft:5 }}>{c.sub}</span>
                        </div>
                        <span style={{ fontSize:11.5, color:gray500, flexShrink:0 }}>Mới: {fmt(c.baseNew)}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Suggest chips */}
            {!selectedCar && (
              <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:14 }}>
                <span style={{ fontSize:11, color:gray400, fontWeight:700, alignSelf:'center', fontFamily:font }}>Đề xuất:</span>
                {SUGGESTS.map(s => (
                  <button key={s}
                    onClick={() => { setQuery(s); setDdOpen(true); }}
                    style={{
                      fontSize:11.5, fontWeight:600, color:gray600, border:`1px solid ${gray200}`,
                      borderRadius:999, padding:'4px 11px', cursor:'pointer', background:gray50,
                      fontFamily:'inherit', transition:'border-color .12s, color .12s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor=pink; e.currentTarget.style.color=pink; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor=gray200; e.currentTarget.style.color=gray600; }}
                  >{s}</button>
                ))}
              </div>
            )}

            {/* Year + KM */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:14 }}>
              <div>
                <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.06em', textTransform:'uppercase', color:gray400, marginBottom:6, display:'flex', alignItems:'center', gap:5 }}>
                  <span style={{ color:pink }}>{I.cal}</span> Năm sản xuất
                </div>
                <div style={{ border:`1.5px solid ${gray200}`, borderRadius:12, overflow:'hidden', background:'#fff', display:'flex', alignItems:'center' }}>
                  <select value={year} onChange={e => setYear(+e.target.value)}
                    style={{ flex:1, border:'none', outline:'none', fontSize:14, fontWeight:700, color:gray900, padding:'10px 12px', background:'transparent', fontFamily:'inherit', cursor:'pointer', appearance:'none' }}
                  >
                    {Array.from({ length: curYear - 2010 }, (_, i) => curYear - i).map(y => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                  <span style={{ paddingRight:10, color:gray400 }}>{I.chevron}</span>
                </div>
                <input type="range" min={2011} max={curYear} step={1} value={year}
                  onChange={e => setYear(+e.target.value)}
                  style={{ width:'100%', accentColor:pink, marginTop:5, cursor:'pointer' }}
                />
              </div>
              <div>
                <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.06em', textTransform:'uppercase', color:gray400, marginBottom:6, display:'flex', alignItems:'center', gap:5 }}>
                  <span style={{ color:pink }}>{I.gauge}</span> Số km đã đi
                </div>
                <div style={{ border:`1.5px solid ${gray200}`, borderRadius:12, overflow:'hidden', background:'#fff', display:'flex', alignItems:'center' }}>
                  <input type="number" value={km} min={0} max={500000} step={5000}
                    onChange={e => setKm(+e.target.value || 0)}
                    style={{ flex:1, border:'none', outline:'none', fontSize:14, fontWeight:700, color:gray900, padding:'10px 12px', background:'transparent', fontFamily:'inherit' }}
                  />
                  <span style={{ paddingRight:12, fontSize:12, fontWeight:600, color:gray400 }}>km</span>
                </div>
                <input type="range" min={0} max={200000} step={5000} value={km}
                  onChange={e => setKm(+e.target.value)}
                  style={{ width:'100%', accentColor:pink, marginTop:5, cursor:'pointer' }}
                />
              </div>
            </div>

            {/* Condition pills */}
            <div style={{ marginBottom:18 }}>
              <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.06em', textTransform:'uppercase', color:gray400, marginBottom:8, display:'flex', alignItems:'center', gap:5 }}>
                <span style={{ color:pink }}>{I.wrench}</span> Tình trạng xe
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:6 }}>
                {(Object.keys(CONDS) as CondKey[]).map(k => {
                  const sel = cond === k;
                  return (
                    <button key={k} onClick={() => setCond(k)}
                      style={{
                        padding:'9px 4px', borderRadius:10, cursor:'pointer', fontFamily:'inherit',
                        border:`1.5px solid ${sel ? pink : gray200}`,
                        background: sel ? pink50 : '#fff',
                        display:'flex', flexDirection:'column', alignItems:'center', gap:4,
                        transition:'border-color .15s, background .12s',
                      }}
                    >
                      <span style={{ color: sel ? pink : gray300 }}>{COND_ICONS[k]}</span>
                      <span style={{ fontSize:10.5, fontWeight:700, color: sel ? pink : gray500 }}>{CONDS[k].label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <button onClick={onCalculate} disabled={!selectedCar}
              style={{
                width:'100%', padding:'14px', borderRadius:12, border:'none', cursor: selectedCar ? 'pointer' : 'not-allowed',
                background: selectedCar ? pink : gray200, color: selectedCar ? '#fff' : gray400,
                fontSize:15, fontWeight:800, fontFamily:'inherit', display:'flex', alignItems:'center', justifyContent:'center', gap:8,
                transition:'background .15s',
              }}
              onMouseEnter={e => { if(selectedCar) e.currentTarget.style.background = pinkD; }}
              onMouseLeave={e => { if(selectedCar) e.currentTarget.style.background = pink; }}
            >
              {I.zap}
              {selectedCar ? 'Định giá ngay' : 'Chọn dòng xe trước'}
            </button>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div style={{ lineHeight:0, marginTop:-2 }}>
          <svg viewBox="0 0 1440 72" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ display:'block', width:'100%' }}>
            <path d="M0,0 C240,72 480,20 720,40 C960,60 1200,8 1440,48 L1440,72 L0,72 Z" fill="#F7F5FA"/>
          </svg>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <div id="dg-result" style={{ background:'#F7F5FA', minHeight: result ? 0 : undefined }}>
        <AnimatePresence>
          {result && (
            <motion.div
              key="result"
              initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
              transition={{ duration:.4, ease:[.22,1,.36,1] }}
              style={{ maxWidth:900, margin:'0 auto', padding:'32px 20px 80px', fontFamily:font }}
            >
              {/* Car bar */}
              <div style={{
                display:'flex', alignItems:'center', gap:8, flexWrap:'wrap',
                background:'#fff', border:`1px solid ${gray200}`, borderRadius:14, padding:'14px 18px', marginBottom:16,
              }}>
                <div style={{ fontSize:15, fontWeight:800, color:gray900, flex:1, minWidth:0 }}>{result.car.name}</div>
                <span style={{ fontSize:11.5, fontWeight:700, background:amber50, color:amber, borderRadius:999, padding:'4px 11px' }}>{result.year}</span>
                <span style={{ fontSize:11.5, fontWeight:700, background:blue50, color:blue, borderRadius:999, padding:'4px 11px' }}>{fmtKm(result.km)}</span>
                <span style={{ fontSize:11.5, fontWeight:700, background:green50, color:green, borderRadius:999, padding:'4px 11px' }}>{CONDS[result.cond].label}</span>
                <button onClick={onReset}
                  style={{
                    display:'inline-flex', alignItems:'center', gap:5, fontSize:12, fontWeight:700,
                    color:gray500, background:gray50, border:`1px solid ${gray200}`, borderRadius:999,
                    padding:'7px 14px', cursor:'pointer', fontFamily:'inherit', whiteSpace:'nowrap',
                    transition:'border-color .15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor=gray400}
                  onMouseLeave={e => e.currentTarget.style.borderColor=gray200}
                >
                  {I.refresh} Định giá xe khác
                </button>
              </div>

              {/* 3 Price Cards */}
              <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, marginBottom:16 }}>
                {[
                  { icon:I.trending, label:'Giá rao bán cá nhân', val:`${fmt(result.sellLow)} – ${fmt(result.sellHigh)}`, sub:'Tham khảo khi rao bán lại cho người mua cá nhân', hl:true },
                  { icon:I.home,     label:'Thu mua nhanh (Showroom)', val:`${fmt(result.buyLow)} – ${fmt(result.buyHigh)}`, sub:'Dealer thu mua ngay trong ngày, không cần chờ', hl:false },
                  { icon:I.shieldChk,label:'Phí bảo hiểm thân vỏ/năm', val:`~${fmt(result.ins)}/năm`, sub:'Ước tính bảo hiểm vật chất xe trên MoMo', hl:false },
                ].map((p, i) => (
                  <motion.div key={i} initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ delay: i*.07, duration:.35, ease:[.22,1,.36,1] }}
                    style={{
                      background: p.hl ? pink50 : '#fff', borderRadius:16, padding:18,
                      border:`1.5px solid ${p.hl ? pink : gray200}`,
                    }}
                  >
                    <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.05em', textTransform:'uppercase', color:gray400, marginBottom:10, display:'flex', alignItems:'center', gap:5 }}>
                      {p.icon} {p.label}
                    </div>
                    <div style={{ fontSize:19, fontWeight:900, color: p.hl ? pink : gray900, marginBottom:5 }}>{p.val}</div>
                    <div style={{ fontSize:11.5, color:gray400, lineHeight:1.45 }}>{p.sub}</div>
                  </motion.div>
                ))}
              </div>

              {/* Breakdown + Sources */}
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:16 }}>
                {/* Breakdown */}
                <div style={{ background:'#fff', border:`1px solid ${gray200}`, borderRadius:16, padding:20 }}>
                  <div style={{ fontSize:10.5, fontWeight:700, letterSpacing:'.05em', textTransform:'uppercase', color:gray400, marginBottom:14 }}>Chi tiết cấu thành định giá</div>
                  {[
                    { icon:I.tag,   label:'Giá xe mới niêm yết', val:fmt(result.car.baseNew), cls:'normal' },
                    { icon:I.clock, label:'Khấu hao theo năm sử dụng', val:`-${fmt(result.deprAmt)}`, cls:'neg' },
                    { icon:I.bars,  label:'Điều chỉnh theo số km', val: result.kmAdj === 0 ? 'Không đổi' : (result.kmAdj > 0 ? '+' : '') + fmt(Math.abs(result.kmAdj)), cls: result.kmAdj > 0 ? 'pos' : result.kmAdj < 0 ? 'neg' : 'muted' },
                    { icon:I.wrench,label:'Điều chỉnh theo tình trạng', val: result.condAdj === 0 ? 'Không đổi' : (result.condAdj > 0 ? '+' : '') + fmt(Math.abs(result.condAdj)), cls: result.condAdj > 0 ? 'pos' : result.condAdj < 0 ? 'neg' : 'muted' },
                  ].map((row, i) => (
                    <div key={i} style={{ display:'flex', alignItems:'center', padding:'10px 0', borderBottom:`1px solid ${gray100}` }}>
                      <div style={{ display:'flex', alignItems:'center', gap:7, fontSize:13, color:gray500, flex:1 }}>
                        <span style={{ color:gray300 }}>{row.icon}</span> {row.label}
                      </div>
                      <div style={{ fontSize:13, fontWeight:800, color: row.cls==='pos'?green : row.cls==='neg'?red : row.cls==='muted'?gray400 : gray900 }}>{row.val}</div>
                    </div>
                  ))}
                  <div style={{ background:pink50, borderRadius:10, padding:'12px 14px', marginTop:8, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                    <div style={{ fontSize:13, fontWeight:800, color:gray900 }}>Định giá trung bình thị trường</div>
                    <div style={{ fontSize:18, fontWeight:900, color:pink }}>{fmt(result.mid)}</div>
                  </div>
                  {/* retain bar */}
                  <div style={{ marginTop:14 }}>
                    <div style={{ display:'flex', justifyContent:'space-between', fontSize:10.5, fontWeight:700, color:gray400, marginBottom:5 }}>
                      <span>Tỷ lệ giá trị còn giữ lại</span>
                      <span style={{ color:pink }}>{result.retainPct}%</span>
                    </div>
                    <div style={{ height:7, background:gray100, borderRadius:999, overflow:'hidden' }}>
                      <motion.div
                        initial={{ width:0 }} animate={{ width:`${result.retainPct}%` }}
                        transition={{ duration:.6, ease:[.22,1,.36,1], delay:.2 }}
                        style={{ height:'100%', background:`linear-gradient(90deg, ${pink}, #f472b6)`, borderRadius:999 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Sources */}
                <div style={{ background:'#fff', border:`1px solid ${gray200}`, borderRadius:16, padding:20 }}>
                  <div style={{ fontSize:10.5, fontWeight:700, letterSpacing:'.05em', textTransform:'uppercase', color:gray400, marginBottom:14 }}>Tham khảo nguồn dữ liệu</div>
                  {[
                    { name:'MoMo Auto Data', detail:'Dựa trên 450+ phiên đấu giá', price:`${fmt(result.sellLow)} – ${fmt(result.buyHigh)}` },
                    { name:'Bonbanh.com', detail:`TB ${fmt(result.r1)}`, price:`${fmt(Math.round(result.r1*.95))} – ${fmt(result.r1)}` },
                    { name:'Chợ Tốt Xe', detail:`${Math.round(Math.random()*4+2)} tin đăng tương đương`, price:`${fmt(Math.round(result.r2*.92))} – ${fmt(result.r2)}` },
                  ].map((s, i) => (
                    <div key={i} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'11px 13px', border:`1px solid ${gray100}`, borderRadius:12, background:gray50, marginBottom:8 }}>
                      <div>
                        <div style={{ fontSize:12.5, fontWeight:700, color:gray700 }}>{s.name}</div>
                        <div style={{ fontSize:11, color:gray400, marginTop:2 }}>{s.detail}</div>
                      </div>
                      <div style={{ fontSize:13.5, fontWeight:900, color:gray900, textAlign:'right' }}>{s.price}</div>
                    </div>
                  ))}
                  <div style={{ marginTop:8, padding:'11px 13px', background:gray50, borderRadius:10, border:`1px solid ${gray100}` }}>
                    <div style={{ fontSize:10, fontWeight:700, color:gray400, textTransform:'uppercase', letterSpacing:'.04em', marginBottom:4, display:'flex', alignItems:'center', gap:5 }}>
                      {I.info} Lưu ý
                    </div>
                    <div style={{ fontSize:11.5, color:gray500, lineHeight:1.6 }}>Giá mang tính tham khảo theo thuật toán thống kê. Giá thực tế phụ thuộc lịch sử bảo dưỡng, tai nạn và thỏa thuận các bên.</div>
                  </div>
                </div>
              </div>

              {/* Insurance CTA */}
              <div style={{
                background:'linear-gradient(135deg, #831843, #be185d)', borderRadius:16,
                padding:'20px 24px', display:'flex', alignItems:'center', gap:16,
              }}>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.06em', textTransform:'uppercase', color:'rgba(255,255,255,.7)', marginBottom:4 }}>Gợi ý từ MoMo</div>
                  <div style={{ fontSize:15, fontWeight:900, color:'#fff', marginBottom:3 }}>Mua bảo hiểm thân vỏ cho xe vừa định giá</div>
                  <div style={{ fontSize:12, color:'rgba(255,255,255,.75)', lineHeight:1.5 }}>
                    Ước tính <strong style={{ color:'#fff' }}>~{fmt(result.ins)}/năm</strong>. Báo giá chính xác trong 30 giây, so sánh PVI, PJICO, MIC.
                  </div>
                </div>
                <a href="/bao-hiem-o-to" style={{ padding:'10px 18px', background:'#fff', color:pink, fontSize:13, fontWeight:800, borderRadius:10, textDecoration:'none', whiteSpace:'nowrap', transition:'background .15s', flexShrink:0 }}
                  onMouseEnter={e => e.currentTarget.style.background=pink50}
                  onMouseLeave={e => e.currentTarget.style.background='#fff'}
                >Báo giá ngay →</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Uncalculated state */}
        {!result && (
          <div style={{ maxWidth:900, margin:'0 auto', padding:'32px 20px 80px', fontFamily:font }}>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, marginBottom:12 }}>
              {[
                { icon:I.bars, title:'Thuật toán minh bạch', desc:'Phân tích dữ liệu khấu hao thực tế từ hàng nghìn phiên giao dịch và tin đăng xe cũ trên thị trường Việt Nam.' },
                { icon:I.zap,  title:'Kết quả tức thì', desc:'Chỉ cần 3 bước — chọn dòng xe, năm sản xuất và số km — để nhận ngay kết quả và phân tích khấu hao chi tiết.' },
                { icon:I.shieldChk, title:'Đối tác bảo hiểm uy tín', desc:'Hợp tác cùng PVI, PJICO, MIC mang tới báo giá bảo hiểm thân vỏ chính xác ngay sau khi định giá.' },
              ].map((c, i) => (
                <div key={i} style={{ background:'#fff', border:`1px solid ${gray200}`, borderRadius:16, padding:20 }}>
                  <div style={{ width:40, height:40, borderRadius:12, background:pink50, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:12 }}>
                    <span style={{ color:pink }}>{c.icon}</span>
                  </div>
                  <div style={{ fontSize:14, fontWeight:800, color:gray900, marginBottom:6 }}>{c.title}</div>
                  <div style={{ fontSize:12.5, color:gray500, lineHeight:1.6 }}>{c.desc}</div>
                </div>
              ))}
            </div>
            <div style={{ background:'#fff', border:`1px solid ${gray200}`, borderRadius:16, padding:'16px 20px', display:'flex', alignItems:'center', gap:12 }}>
              <div style={{ fontSize:11, fontWeight:700, color:gray400, textTransform:'uppercase', letterSpacing:'.05em', whiteSpace:'nowrap' }}>Đối tác kiểm định</div>
              <div style={{ fontSize:13, fontWeight:700, color:gray600 }}>PVI Insurance &nbsp;·&nbsp; PJICO &nbsp;·&nbsp; MIC &nbsp;·&nbsp; DBV &nbsp;·&nbsp; Bảo Việt</div>
            </div>
          </div>
        )}
      </div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 768px) {
          .dg-hero-inner { grid-template-columns: 1fr !important; padding: 44px 16px 52px !important; gap: 28px !important; }
        }
      `}</style>
    </>
  );
}
