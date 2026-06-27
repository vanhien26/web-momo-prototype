'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
  Badge,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Input,
  Button,
  Progress,
  ProgressTrack,
  ProgressIndicator
} from '@momo-webplatform/mobase-next';
import './blog.css';

export default function BlogPage() {
  // Reading Progress State
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('s1');

  // Fixed CTA State
  const [showFixedCta, setShowFixedCta] = useState(false);
  const [ctaDismissed, setCtaDismissed] = useState(false);

  // Audio Speech State
  const [audioMode, setAudioMode] = useState<'idle' | 'playing' | 'paused'>('idle');
  const [audioStatus, setAudioStatus] = useState('Play để MoMo đọc nội dung chính bằng giọng tiếng Việt.');
  const [speechSupported, setSpeechSupported] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // User Reactions State
  const [feedbackReaction, setFeedbackReaction] = useState<'like' | 'dislike' | null>(null);
  const [feedbackAck, setFeedbackAck] = useState(false);

  // Quiz Game State
  const [quizStep, setQuizStep] = useState<'intro' | 0 | 1 | 2 | 'result'>('intro');
  const [quizScore, setQuizScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  // Product Tabs State
  const [activeVehicleTab, setActiveVehicleTab] = useState<'car' | 'moto' | 'scooter'>('car');

  // Scroll Reveal states
  const [revealedElements, setRevealedElements] = useState<Record<string, boolean>>({});

  // 1. Detect Speech Synthesis Support
  useEffect(() => {
    const supported = typeof window !== 'undefined' && typeof window.speechSynthesis !== 'undefined' && typeof window.SpeechSynthesisUtterance !== 'undefined';
    setSpeechSupported(supported);
  }, []);

  // 2. Scroll and Intersection tracking
  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const totalScroll = doc.scrollHeight - doc.clientHeight;
      const pct = totalScroll > 0 ? Math.min((window.scrollY / totalScroll) * 100, 100) : 0;
      setScrollProgress(pct);

      if (!ctaDismissed) {
        setShowFixedCta(window.scrollY > 380);
      }

      // Check current active section
      const sectionIds = ['s1', 's2', 's3', 's4', 's5'];
      let currentActive = 's1';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 120) {
          currentActive = id;
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ctaDismissed]);

  // 3. Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setRevealedElements((prev) => ({ ...prev, [e.target.id || e.target.className]: true }));
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -36px 0px' }
    );

    document.querySelectorAll('.rv').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // 4. TTS Audio Reading Logic
  const getArticleAudioText = () => {
    if (typeof document === 'undefined') return '';
    const title = 'Tra cứu phạt nguội xe máy 2025: Hướng dẫn đầy đủ từ A đến Z để không bị oan';
    const summary = [
      'Phạt nguội ghi nhận qua camera - bạn có thể bị phạt mà không hay biết cho đến khi đăng kiểm.',
      '3 kênh tra cứu chính thống: MoMo, csgt.vn, và tổng đài 1088.',
      'Mức phạt 2025 tăng theo Nghị định 168: từ 400.000đ đến 1.000.000đ tùy lỗi vi phạm.',
      'Nộp phạt online qua MoMo không cần đến trụ sở, xử lý trong 24h, nhận xác nhận ngay.'
    ];
    return [title, 'Tóm tắt nội dung.', ...summary, 'Nội dung chính.', 
      'Bạn đột nhiên nhận được thông báo phạt nguội khi đi đăng kiểm? Hay ai đó báo biển số của bạn xuất hiện trong danh sách vi phạm? Đây là tình huống ngày càng phổ biến khi hệ thống camera giao thông được mở rộng toàn quốc.',
      'Phạt nguội là gì và tại sao lại có? Phạt nguội là hình thức xử phạt hành chính dựa trên hình ảnh camera giao thông - không có cảnh sát trực tiếp dừng xe. Hệ thống AI nhận diện biển số, phân loại lỗi và ghi nhận vào hồ sơ phương tiện.'
    ].join('. ');
  };

  const handleAudioToggle = () => {
    if (!speechSupported) {
      setAudioStatus('Thiết bị này chưa hỗ trợ đọc audio tự động.');
      return;
    }

    if (audioMode === 'playing') {
      window.speechSynthesis.pause();
      setAudioMode('paused');
      setAudioStatus('Đã tạm dừng. Bấm Play để nghe tiếp.');
      return;
    }

    if (audioMode === 'paused') {
      window.speechSynthesis.resume();
      setAudioMode('playing');
      setAudioStatus('Đã đọc bài viết. Bấm lần nữa để tạm dừng.');
      return;
    }

    // Start New Audio
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(getArticleAudioText());
    utterance.lang = 'vi-VN';
    utterance.rate = 0.96;
    utterance.pitch = 1;
    
    // Find Vietnamese Voice if available
    const voices = window.speechSynthesis.getVoices();
    const viVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith('vi'));
    if (viVoice) utterance.voice = viVoice;

    utterance.onend = () => {
      setAudioMode('idle');
      setAudioStatus('Đã đọc xong. Bấm Play để nghe lại.');
    };
    utterance.onerror = () => {
      setAudioMode('idle');
      setAudioStatus('Không phát được audio. Vui lòng thử lại.');
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setAudioMode('playing');
    setAudioStatus('Đã đọc bài viết. Bấm lần nữa để tạm dừng.');
  };

  // Clean up SpeechSynthesis on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // 5. Scroll to Section helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // 6. Feedback Submit
  const submitFeedback = (type: 'like' | 'dislike') => {
    setFeedbackReaction(type);
    setFeedbackAck(true);
  };

  // 7. Quiz Questions & Answers
  const QUIZ_QUESTIONS = [
    {
      q: 'Theo Nghị định 168/2024, mức phạt vượt đèn đỏ xe máy là bao nhiêu?',
      opts: ['200.000 - 400.000đ', '400.000 - 600.000đ', '800.000 - 1.000.000đ', '1.500.000 - 2.000.000đ'],
      correct: 2,
      feedback: 'NĐ 168 tăng mức phạt vượt đèn đỏ xe máy lên 800.000 - 1.000.000đ, kèm tước bằng 1-3 tháng. Mức cũ theo NĐ 100 chỉ 300.000 - 400.000đ.'
    },
    {
      q: 'Sau khi camera ghi nhận vi phạm, chủ xe nhận thông báo như thế nào?',
      opts: ['SMS tự động trong vòng 24h', 'Thông báo qua app VNeID', 'Không có - chủ xe phải tự tra cứu định kỳ', 'Giấy phạt gửi về địa chỉ đăng ký'],
      correct: 2,
      feedback: 'Hệ thống không gửi thông báo chủ động. Chủ xe phải tự tra định kỳ qua csgt.vn, VNeID hoặc MoMo - đây là lý do nhiều người bị phạt mà không hay biết.'
    },
    {
      q: 'Không nộp phạt nguội, hậu quả trực tiếp nhất là gì?',
      opts: ['Bị khóa tài khoản ngân hàng', 'Bị chặn đăng kiểm và sang tên xe', 'Bị tước bằng lái ngay lập tức', 'Tiền phạt tự trừ vào ví điện tử'],
      correct: 1,
      feedback: 'Phạt nguội liên thông sang đăng kiểm - xe không thể đăng kiểm hoặc sang tên cho đến khi nộp đủ. Sau 10 ngày còn bị cộng lãi 0,05%/ngày.'
    }
  ];

  const handleQuizAnswer = (optIdx: number, qIdx: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(optIdx);
    const question = QUIZ_QUESTIONS[qIdx];
    if (optIdx === question.correct) {
      setQuizScore(prev => prev + 1);
    }
  };

  const handleQuizNext = (qIdx: number) => {
    setSelectedAnswer(null);
    if (qIdx === 2) {
      setQuizStep('result');
    } else {
      setQuizStep((qIdx + 1) as 0 | 1 | 2);
    }
  };

  const resetQuiz = () => {
    setQuizStep('intro');
    setQuizScore(0);
    setSelectedAnswer(null);
  };

  const getQuizResultData = () => {
    const data = [
      { msg: 'Cần ôn lại chút rồi!', sub: 'Đừng lo - MoMo giúp bạn tra cứu và nộp phạt nhanh nhất, không cần nhớ luật.', col: '#E24B4A' },
      { msg: 'Khá tốt, còn 1 điểm nhỏ!', sub: 'Kiểm tra xe định kỳ để không bị phạt bất ngờ.', col: '#EF9F27' },
      { msg: 'Xuất sắc! Nắm chắc luật.', sub: 'Nhưng đừng quên kiểm tra biển số định kỳ - an toàn hơn chủ quan.', col: '#A8D86E' }
    ];
    return data[Math.min(quizScore, 2)];
  };

  const resultData = getQuizResultData();
  const ringOffset = 226.2 * (1 - quizScore / 3);

  const TOC_LABELS: Record<string, string> = {
    s1: 'Phạt nguội là gì?',
    s2: 'Bảng mức phạt 2025',
    s3: '3 cách tra cứu',
    s4: 'Nộp phạt từng bước',
    s5: 'AI nói gì?'
  };

  return (
    <div className="blog-page-container">
      {/* 1. Universal Fixed CTA */}
      <div className={`fixed-cta ${showFixedCta && !ctaDismissed ? 'show' : ''}`} id="fixedCta">
        <span className="u-label-tag">Universal</span>
        <div className="fixed-cta-left">
          <i className="ti ti-device-mobile" style={{ fontSize: '20px', color: 'rgba(255,255,255,.8)' }}></i>
          <div className="fixed-cta-text">
            <strong>Nộp phạt nguội ngay trên MoMo</strong>
            Không cần đến trụ sở · Xử lý trong 24h
          </div>
        </div>
        <Button size="sm" variant="outline" className="fixed-cta-btn bg-white! text-pink-600! rounded-full!">
          <i className="ti ti-download" style={{ fontSize: '11px', verticalAlign: '-1px', marginRight: '3px' }}></i>
          Tải MoMo
        </Button>
        <button className="fixed-cta-x" onClick={() => setCtaDismissed(true)}>✕</button>
      </div>

      {/* 2. Topbar Info */}
      <div className="u-topbar">
        <span className="u-label-tag" style={{ opacity: 0.6 }}>Universal</span>
        <span><strong>MoMo:</strong> Tra cứu + nộp phạt nguội ngay trong app - không cần đến trụ sở</span>
        <Button size="sm" className="u-topbar-cta rounded-full! py-0.5! px-3! h-6!">Mở MoMo</Button>
      </div>

      {/* 3. Site Navigation Header */}
      <nav className="topbar">
        <Link className="topbar-logo" href="/lab.html" target="_top" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text)', textDecoration: 'none' }}>
          <span className="brand-mark" style={{ background: 'var(--momo)', width: '32px', height: '32px', borderRadius: 'var(--rounded-lg)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
            <img src="/assets/images/momo-logo.svg" alt="MoMo" style={{ width: '75%', height: '75%', objectFit: 'contain', display: 'block' }} />
          </span>
          <span style={{ fontWeight: 800 }}>MoSpark Blog</span>
          <Badge variant="secondary" className="bg-pink-50! text-pink-600! border-0! h-5! px-1.5! text-[10px]!">BETA</Badge>
        </Link>
        <div className="topbar-right">
          <ul className="topbar-nav">
            <li>GenAI</li><li>Tài chính</li><li>Giao thông</li><li>Bảo hiểm</li><li>SEO/GEO</li>
            <li><i className="ti ti-search" style={{ fontSize: '13px', verticalAlign: '-1px' }}></i></li>
          </ul>
          <Link className="topbar-back" href="/lab.html" target="_top">
            <i className="ti ti-arrow-left" style={{ fontSize: '11px' }}></i> Store
          </Link>
        </div>
      </nav>
      <Progress value={scrollProgress} className="prog-bar fixed top-[48px] left-0 right-0 z-[299] w-full flex flex-col gap-0 border-0 bg-transparent!">
        <ProgressTrack className="h-0.5! w-full bg-neutral-200! rounded-none!">
          <ProgressIndicator className="bg-pink-600! transition-all" />
        </ProgressTrack>
      </Progress>

      {/* 4. Desktop Sidebar TOC */}
      <aside className="toc-float">
        <div className="listen-mini">
          <button 
            className={`listen-mini-btn audio-toggle ${audioMode === 'playing' ? 'playing' : ''}`} 
            type="button" 
            onClick={handleAudioToggle}
            aria-label="Nghe bài viết" 
            aria-pressed={audioMode === 'playing' ? 'true' : 'false'}
          >
            <i className={audioMode === 'playing' ? 'ti ti-player-pause-filled' : 'ti ti-player-play-filled'}></i>
          </button>
          <div>
            <div className="listen-mini-title">Nghe bài viết</div>
            <div className="listen-mini-meta">{audioMode === 'playing' ? 'Đang đọc' : 'Audio 8 phút'}</div>
          </div>
        </div>
        <div className="toc-hd">Mục lục bài viết</div>
        <ul className="toc-list" id="tocList">
          {Object.keys(TOC_LABELS).map((id) => (
            <li 
              key={id} 
              className={`toc-item ${activeSection === id ? 'toc-active' : ''}`} 
              onClick={() => scrollToSection(id)}
            >
              <span className="toc-dot"></span>{TOC_LABELS[id]}
            </li>
          ))}
        </ul>
        <div className="toc-prog">
          Tiến độ đọc
          <Progress value={scrollProgress} className="w-full mt-1.5 border-0 bg-transparent!">
            <ProgressTrack className="h-[2px] w-full bg-[var(--line)]! rounded-[1px]!">
              <ProgressIndicator className="bg-[var(--momo)]! transition-all" />
            </ProgressTrack>
          </Progress>
        </div>
      </aside>

      {/* 5. Mobile TOC FAB */}
      <button className={`toc-fab ${scrollProgress > 5 ? 'show' : ''}`} id="tocFab" onClick={handleAudioToggle}>
        <i className="ti ti-list" style={{ fontSize: '14px' }}></i>
        <span className="toc-fab-label">{TOC_LABELS[activeSection] || 'Mục lục'}</span>
      </button>

      {/* 6. Main Content Area */}
      <div className="page">
        <Breadcrumb className="bc">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Giao thông</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Phạt nguội xe máy 2025</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="hero">
          <i className="ti ti-car hero-icon"></i>
        </div>

        <span className="cat-pill"><i className="ti ti-car" style={{ fontSize: '11px' }}></i>Giao thông &amp; Phạt nguội</span>

        <h1 className="article-title">Tra cứu phạt nguội xe máy 2025: Hướng dẫn đầy đủ từ A đến Z để không bị oan</h1>

        <div className="mini-author">
          <div className="avatar" style={{ width: '36px', height: '36px' }}>TL</div>
          <div>
            <div className="author-name-row">Trần Linh <span>- Chuyên gia Tài chính Cá nhân</span></div>
            <div className="mini-author-meta">
              <span><i className="ti ti-calendar" style={{ fontSize: '11px', verticalAlign: '-1px' }}></i> 12/06/2025</span>
              <span><i className="ti ti-clock" style={{ fontSize: '11px', verticalAlign: '-1px' }}></i> 8 phút đọc</span>
              <span><i className="ti ti-eye" style={{ fontSize: '11px', verticalAlign: '-1px' }}></i> 24.831 lượt xem</span>
              <span><i className="ti ti-thumb-up" style={{ fontSize: '11px', verticalAlign: '-1px' }}></i> 2.847 hữu ích</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                <span style={{ color: '#F5B840', fontSize: '11px', letterSpacing: '1px' }}>★★★★★</span>
                <span style={{ fontWeight: 600, color: 'var(--text)' }}>4.8</span>
                <span style={{ color: 'var(--text3)' }}>· 1.2K đánh giá</span>
              </span>
            </div>
          </div>
        </div>

        {/* Listen Card */}
        <section className={`listen-card rv ${revealedElements['listen-card rv'] ? 'vis' : ''}`} aria-label="Nghe bài viết bằng audio">
          <button 
            className={`listen-play audio-toggle ${audioMode === 'playing' ? 'playing' : ''}`} 
            type="button" 
            onClick={handleAudioToggle} 
            aria-label="Play audio bài viết" 
            aria-pressed={audioMode === 'playing' ? 'true' : 'false'}
          >
            <i className={audioMode === 'playing' ? 'ti ti-player-pause-filled' : 'ti ti-player-play-filled'}></i>
          </button>
          <div className="listen-copy">
            <div className="listen-kicker">Audio bài viết</div>
            <div className="listen-title">Nghe toàn bộ bài trong lúc di chuyển</div>
            <div className="listen-sub"><span>{audioStatus}</span></div>
            <div className="listen-progress" aria-hidden="true">
              <span style={{ width: audioMode === 'playing' ? '100%' : '0%', transition: audioMode === 'playing' ? 'playback 480s linear' : 'none' }}></span>
            </div>
            <div className="podcast-options" aria-label="Gợi ý định dạng podcast">
              <span className="podcast-chip">Tóm tắt 3 phút</span>
              <span className="podcast-chip">Hỏi đáp 2 giọng</span>
              <span className="podcast-chip">Lưu nghe sau</span>
            </div>
          </div>
        </section>

        {/* Inline TOC */}
        <div className="toc-inline">
          <div className="toc-hd">Mục lục bài viết</div>
          <ul className="toc-list">
            {Object.keys(TOC_LABELS).map((id) => (
              <li 
                key={id} 
                className={activeSection === id ? 'toc-active' : ''} 
                onClick={() => scrollToSection(id)}
              >
                <span className="toc-dot"></span>{TOC_LABELS[id]}
              </li>
            ))}
          </ul>
        </div>

        {/* AI Summary */}
        <div className={`ai-sum rv ${revealedElements['ai-sum rv'] ? 'vis' : ''}`}>
          <div className="ai-sum-hd">
            <div className="ai-sum-title">
              <i className="ti ti-sparkles"></i>AI Tóm tắt nội dung
              <Badge variant="secondary" className="bg-pink-50! text-pink-600! border-0! h-5! px-1.5! text-[10px]! ml-1.5!">BETA</Badge>
            </div>
            <span style={{ fontSize: '11px', color: 'var(--text2)', cursor: 'pointer' }}>Thu gọn <i className="ti ti-chevron-up" style={{ fontSize: '11px', verticalAlign: '-1px' }}></i></span>
          </div>
          <ul className="ai-ul">
            <li className="ai-li"><span className="ai-dot">1</span><span>Phạt nguội ghi nhận qua camera - bạn có thể bị phạt mà không hay biết cho đến khi đăng kiểm.</span></li>
            <li className="ai-li"><span className="ai-dot">2</span><span>3 kênh tra cứu chính thống: MoMo (nhanh nhất, tra + nộp luôn), csgt.vn, và tổng đài 1088.</span></li>
            <li className="ai-li"><span className="ai-dot">3</span><span>Mức phạt 2025 tăng theo Nghị định 168: từ 400.000đ đến 1.000.000đ tùy lỗi vi phạm.</span></li>
            <li className="ai-li"><span className="ai-dot">4</span><span>Nộp phạt online qua MoMo không cần đến trụ sở, xử lý trong 24h, nhận xác nhận ngay.</span></li>
          </ul>
        </div>

        {/* Embedded Vehicle Lookup Widget */}
        <section className={`product-lookup rv ${revealedElements['product-lookup rv'] ? 'vis' : ''}`} aria-label="Tra cứu phạt nguội trên MoMo">
          <div className="product-lookup-kicker"><i className="ti ti-apps"></i>Sản phẩm nhúng trong bài viết</div>
          
          <Tabs value={activeVehicleTab} onValueChange={(val) => setActiveVehicleTab(val as 'car' | 'moto' | 'scooter')}>
            <TabsList className="product-lookup-tabs">
              <TabsTrigger value="car" className="product-tab"><i className="ti ti-car"></i>Ô tô</TabsTrigger>
              <TabsTrigger value="moto" className="product-tab"><i className="ti ti-motorbike"></i>Xe máy</TabsTrigger>
              <TabsTrigger value="scooter" className="product-tab"><i className="ti ti-scooter-electric"></i>Xe máy điện</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="product-lookup-main">
            <Input 
              className="product-lookup-input border-0! bg-transparent! shadow-none! h-full w-full focus-within:ring-0! p-0!"
              aria-label="Nhập biển số xe"
              placeholder={
                activeVehicleTab === 'car' ? 'VD: 62A06607' : 
                activeVehicleTab === 'moto' ? 'VD: 59G2-12345' : 
                'VD: 59MĐ1-123.45'
              }
              clearButton
            />
            <Button className="product-lookup-cta" type="button">Tra cứu miễn phí</Button>
          </div>
          <div className="product-source">
            <div className="product-source-logos" aria-hidden="true">
              <span className="product-source-logo">CSGT</span>
              <span className="product-source-logo">DK</span>
            </div>
            <div className="product-source-copy">Dữ liệu chính thống từ Cục CSGT và Cục Đăng kiểm Việt Nam.</div>
          </div>
        </section>

        {/* Main Article Body */}
        <div className="body">
          <p>Bạn đột nhiên nhận được thông báo phạt nguội khi đi đăng kiểm? Hay ai đó báo biển số của bạn xuất hiện trong danh sách vi phạm? Đây là tình huống ngày càng phổ biến khi hệ thống camera giao thông được mở rộng toàn quốc trong năm 2025.</p>

          <div className="callout callout-info">
            <div className="callout-icon"><i className="ti ti-info-circle"></i></div>
            <div>
              <div className="callout-label">Lưu ý quan trọng</div>
              <div className="callout-text">Theo Cục CSGT, tính đến tháng 5/2025 có hơn <strong>2,4 triệu phương tiện</strong> đang tồn đọng lỗi phạt nguội chưa xử lý trên toàn quốc. Kiểm tra ngay để tránh bị chặn đăng kiểm.</div>
            </div>
          </div>

          <div className="h2 rv" id="s1">Phạt nguội là gì và tại sao lại có?</div>
          <p>Phạt nguội là hình thức xử phạt hành chính dựa trên hình ảnh camera giao thông - không có cảnh sát trực tiếp dừng xe. Hệ thống AI nhận diện biển số, phân loại lỗi và ghi nhận vào hồ sơ phương tiện.</p>

          <ul className="blist">
            <li><span className="blist-dot"></span><span>Camera giao thông nhận diện lỗi vi phạm tự động 24/7</span></li>
            <li><span className="blist-dot"></span><span>Hệ thống liên thông với CSDL đăng kiểm và giao dịch xe</span></li>
            <li><span className="blist-dot"></span><span>Chủ xe cần chủ động tra cứu định kỳ hàng tháng</span></li>
            <li><span className="blist-dot"></span><span>Lỗi tồn đọng sẽ chặn các thủ tục đăng kiểm và sang tên</span></li>
          </ul>

          <div className="callout callout-danger">
            <div className="callout-icon"><i className="ti ti-alert-triangle"></i></div>
            <div>
              <div className="callout-label">Cảnh báo</div>
              <div className="callout-text">Không nộp phạt đúng hạn có thể bị tăng mức phạt gấp đôi và bị tước bằng lái từ 1-3 tháng theo Nghị định 168/2024/NĐ-CP có hiệu lực từ 1/1/2025.</div>
            </div>
          </div>

          {/* Product Module #1 */}
          <section className={`product-embed rv ${revealedElements['product-embed rv'] ? 'vis' : ''}`} aria-label="Sản phẩm tra cứu và nộp phạt nguội">
            <div className="product-icon"><i className="ti ti-search"></i></div>
            <div className="product-copy">
              <div className="product-kicker">MoMo Product · Giao thông</div>
              <div className="product-title">Tra cứu, lưu xe và nộp phạt nguội trong MoMo</div>
              <div className="product-sub">Nhập biển số một lần, MoMo nhắc kiểm tra định kỳ và mở luồng thanh toán khi có lỗi.</div>
            </div>
            <div className="product-benefits">
              <div className="product-benefit"><i className="ti ti-clock"></i>Kết quả nhanh</div>
              <div className="product-benefit"><i className="ti ti-bell"></i>Nhắc định kỳ</div>
              <div className="product-benefit"><i className="ti ti-receipt"></i>Biên lai điện tử</div>
            </div>
            <div className="product-actions">
              <Button size="sm" className="product-btn bg-pink-600! hover:bg-pink-700! text-white! rounded-full!">Tra cứu trong MoMo</Button>
              <a className="product-link" href="#s4" onClick={(e) => { e.preventDefault(); scrollToSection('s4'); }}>Xem cách nộp phạt</a>
              <span className="product-meta">Có thể xem hướng dẫn trước khi mở app.</span>
            </div>
          </section>

          <div className="h2 rv" id="s2">Bảng mức phạt xe máy theo Nghị định 168 (2025)</div>
          <p>Dưới đây là bảng tổng hợp các lỗi vi phạm phổ biến nhất bị ghi nhận qua camera phạt nguội:</p>

          <div className="tbl-wrap rv">
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ width: '36%' }}>Lỗi vi phạm</th>
                  <th style={{ width: '22%' }}>Mức phạt</th>
                  <th style={{ width: '19%' }}>Tước bằng</th>
                  <th style={{ width: '23%' }}>Mức độ</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Vượt đèn đỏ</td><td>800.000 - 1.000.000đ</td><td>1-3 tháng</td><td><Badge variant="destructive" size="sm">Nghiêm trọng</Badge></td></tr>
                <tr><td>Đi ngược chiều</td><td>800.000 - 1.000.000đ</td><td>2-4 tháng</td><td><Badge variant="destructive" size="sm">Nghiêm trọng</Badge></td></tr>
                <tr><td>Vượt tốc độ &gt;20km/h</td><td>600.000 - 800.000đ</td><td>1-3 tháng</td><td><Badge variant="destructive" size="sm">Nghiêm trọng</Badge></td></tr>
                <tr><td>Vượt tốc độ 10-20km/h</td><td>400.000 - 600.000đ</td><td>Không</td><td><Badge variant="outline" className="bg-amber-50! text-amber-700! border-amber-200!" size="sm">Trung bình</Badge></td></tr>
                <tr><td>Không đội mũ bảo hiểm</td><td>400.000 - 600.000đ</td><td>Không</td><td><Badge variant="outline" className="bg-amber-50! text-amber-700! border-amber-200!" size="sm">Trung bình</Badge></td></tr>
                <tr><td>Dừng đỗ sai quy định</td><td>100.000 - 200.000đ</td><td>Không</td><td><Badge variant="outline" className="bg-emerald-50! text-emerald-700! border-emerald-200!" size="sm">Nhẹ</Badge></td></tr>
                <tr><td>Không có gương chiếu hậu</td><td>100.000 - 200.000đ</td><td>Không</td><td><Badge variant="outline" className="bg-emerald-50! text-emerald-700! border-emerald-200!" size="sm">Nhẹ</Badge></td></tr>
              </tbody>
            </table>
          </div>

          <div className="callout callout-warn">
            <div className="callout-icon"><i className="ti ti-coin"></i></div>
            <div>
              <div className="callout-label">Mẹo tiết kiệm</div>
              <div className="callout-text">Nộp phạt trong vòng <strong>10 ngày</strong> kể từ ngày vi phạm được ghi nhận sẽ không bị cộng thêm lãi phạt. Sau 10 ngày, mỗi tháng cộng thêm 0.05%/ngày trên tổng số tiền phạt.</div>
            </div>
          </div>

          {/* Product Module #2 - Insurance */}
          <section className="product-embed insurance rv" aria-label="Sản phẩm bảo hiểm xe máy">
            <div className="product-icon"><i className="ti ti-shield-check"></i></div>
            <div className="product-copy">
              <div className="product-kicker">MoMo Product · Bảo hiểm</div>
              <div className="product-title">Bảo hiểm xe máy TNDS, cấp giấy chứng nhận online</div>
              <div className="product-sub">Phù hợp với bài phạt nguội vì user đang ở ngữ cảnh xe, đăng kiểm và tuân thủ pháp lý.</div>
            </div>
            <div className="product-benefits">
              <div className="product-benefit"><i className="ti ti-certificate"></i>Từ 66.000đ/năm</div>
              <div className="product-benefit"><i className="ti ti-bolt"></i>Cấp trong 2 phút</div>
              <div className="product-benefit"><i className="ti ti-file-check"></i>Lưu trên app</div>
            </div>
            <div className="product-actions">
              <Button size="sm" className="product-btn bg-pink-600! hover:bg-pink-700! text-white! rounded-full!">Mua bảo hiểm trên MoMo</Button>
              <a className="product-link" href="#s2" onClick={(e) => { e.preventDefault(); scrollToSection('s2'); }}>Xem mức phạt liên quan</a>
              <span className="product-meta">Gợi ý theo ngữ cảnh xe và đăng kiểm.</span>
            </div>
          </section>

          <div className="h2 rv" id="s3">3 cách tra cứu phạt nguội chính thống</div>

          <div className="h3" id="s3a">1. Tra cứu qua MoMo (nhanh nhất)</div>
          <ul className="blist">
            <li><span className="blist-check"><i className="ti ti-check"></i></span><span>Mở app MoMo → chọn mục <em>Phạt nguội</em> → nhập biển số</span></li>
            <li><span className="blist-check"><i className="ti ti-check"></i></span><span>Kết quả hiện ngay: số tiền phạt, ngày vi phạm, địa điểm</span></li>
            <li><span className="blist-check"><i className="ti ti-check"></i></span><span>Nộp phạt luôn trong app - không cần đến trụ sở</span></li>
            <li><span className="blist-check"><i className="ti ti-check"></i></span><span>Xác nhận biên lai điện tử ngay sau khi thanh toán</span></li>
          </ul>

          <div className="h3" id="s3b">2. Tra cứu qua website Cục CSGT</div>
          <p>Truy cập csgt.vn → mục "Tra cứu phương tiện vi phạm" → nhập biển số và mã xác nhận. Xem được thông tin đầy đủ nhưng không nộp phạt online.</p>

          <div className="h3" id="s3c">3. Gọi tổng đài 1088</div>
          <p>Hoạt động 24/7, phù hợp cho người không có smartphone. Cần chuẩn bị số biển xe và CMND chủ xe khi gọi.</p>

          <div className="callout callout-success">
            <div className="callout-icon"><i className="ti ti-star"></i></div>
            <div>
              <div className="callout-label">Khuyến nghị</div>
              <div className="callout-text">Dùng MoMo để tra cứu định kỳ mỗi tháng một lần - đặc biệt trước khi đi đăng kiểm hoặc muốn sang tên xe. Chỉ mất 30 giây, tránh được rắc rối lớn.</div>
            </div>
          </div>

          {/* Product Module #3 - Pay Later */}
          <section className="product-embed paylater rv" aria-label="Sản phẩm Ví Trả Sau cho chi phí xe">
            <div className="product-icon"><i className="ti ti-credit-card"></i></div>
            <div className="product-copy">
              <div className="product-kicker">MoMo Product · Ví Trả Sau</div>
              <div className="product-title">Chia nhỏ chi phí xe: phạt, bảo hiểm, bảo dưỡng</div>
              <div className="product-sub">Gợi ý product tài chính theo ngữ cảnh, nhưng copy cần nói rõ điều kiện áp dụng thay vì hứa giải ngân.</div>
            </div>
            <div className="product-benefits">
              <div className="product-benefit"><i className="ti ti-calendar-dollar"></i>Trả sau linh hoạt</div>
              <div className="product-benefit"><i className="ti ti-lock-check"></i>Xét duyệt trong app</div>
              <div className="product-benefit"><i className="ti ti-alert-circle"></i>Có điều kiện</div>
            </div>
            <div className="product-actions">
              <Button size="sm" className="product-btn bg-pink-600! hover:bg-pink-700! text-white! rounded-full!">Kiểm tra hạn mức</Button>
              <a className="product-link" href="#s4" onClick={(e) => { e.preventDefault(); scrollToSection('s4'); }}>Xem bước thanh toán</a>
              <span className="product-meta">Hiển thị điều kiện trước khi đăng ký.</span>
            </div>
          </section>

          <div className="h2 rv" id="s4">Hướng dẫn nộp phạt qua MoMo từng bước</div>
          <p>Sau khi tra cứu và xác nhận có lỗi phạt nguội, quy trình nộp phạt online như sau:</p>

          <div className="tbl-wrap rv">
            <table className="data-table">
              <thead><tr><th style={{ width: '12%' }}>Bước</th><th style={{ width: '36%' }}>Thao tác</th><th>Lưu ý</th></tr></thead>
              <tbody>
                <tr><td style={{ fontWeight: 700, color: 'var(--text2)' }}>01</td><td>Mở app MoMo → Tìm kiếm "Phạt nguội"</td><td>Yêu cầu cập nhật app lên phiên bản mới nhất</td></tr>
                <tr><td style={{ fontWeight: 700, color: 'var(--text2)' }}>02</td><td>Nhập biển số xe (định dạng: 51F-123.45)</td><td>Không cần đăng nhập chủ xe - ai cũng tra được</td></tr>
                <tr><td style={{ fontWeight: 700, color: 'var(--text2)' }}>03</td><td>Chọn lỗi vi phạm cần nộp phạt</td><td>Có thể nộp nhiều lỗi trong một lần giao dịch</td></tr>
                <tr><td style={{ fontWeight: 700, color: 'var(--text2)' }}>04</td><td>Xác nhận thông tin và thanh toán</td><td>Hỗ trợ: Ví MoMo, thẻ ngân hàng, QR Pay</td></tr>
                <tr><td style={{ fontWeight: 700, color: 'var(--text2)' }}>05</td><td>Nhận biên lai điện tử qua app và email</td><td>Biên lai có giá trị pháp lý, lưu 3 năm</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Feedback Panel */}
        <section className="feedback-panel rv" id="article-feedback" aria-label="Đánh giá mức độ hữu ích của bài viết">
          <div className="feedback-head">
            <div>
              <div className="feedback-title">Bài viết này có hữu ích với bạn không?</div>
              <div className="feedback-sub">Phản hồi của bạn giúp MoMo cải thiện nội dung hướng dẫn.</div>
            </div>
          </div>
          <div className="reaction-row" data-reaction-group="article-final">
            <button 
              className={`reaction-chip ${feedbackReaction === 'like' ? 'selected' : ''}`} 
              onClick={() => submitFeedback('like')} 
              type="button"
            >
              <i className="ti ti-thumb-up"></i> Hữu ích
            </button>
            <button 
              className={`reaction-chip ${feedbackReaction === 'dislike' ? 'selected' : ''}`} 
              onClick={() => submitFeedback('dislike')} 
              type="button"
            >
              <i className="ti ti-thumb-down"></i> Không hữu ích
            </button>
          </div>
          {feedbackAck && <div className="feedback-ack show" aria-live="polite">Cảm ơn, MoMo đã ghi nhận phản hồi này.</div>}
        </section>

        {/* Interactive Quiz Game */}
        <div className="quiz-section rv" id="s5">
          <div className="sec-hd"><i className="ti ti-checklist" style={{ fontSize: '14px', color: 'var(--text3)' }}></i>Thử kiến thức của bạn</div>

          <div className="quiz-box" id="quizBox">
            {quizStep === 'intro' && (
              <div className="quiz-intro" id="quizIntro">
                <div className="quiz-intro-icon"><i className="ti ti-clipboard-check"></i></div>
                <div className="quiz-intro-title">Kiểm tra nhanh: Luật phạt nguội 2025</div>
                <div className="quiz-intro-meta">
                  <span>3 câu hỏi</span><span className="quiz-intro-dot"></span>
                  <span>~2 phút</span><span className="quiz-intro-dot"></span>
                  <span>Theo NĐ 168/2024</span>
                </div>
                <Button className="quiz-start-btn" onClick={() => setQuizStep(0)}><i className="ti ti-arrow-right" style={{ fontSize: '13px' }}></i>Bắt đầu ngay</Button>
              </div>
            )}

            {[0, 1, 2].includes(Number(quizStep)) && (() => {
              const qIdx = quizStep as number;
              const question = QUIZ_QUESTIONS[qIdx];
              return (
                <div className="quiz-q active" id={`quizQ${qIdx}`}>
                  <div className="quiz-progress flex items-center gap-3">
                    <span className="quiz-step">Câu {qIdx + 1} / 3</span>
                    <Progress value={(qIdx + 1) * 33.33} className="flex-1 mt-0 border-0 bg-transparent!">
                      <ProgressTrack className="h-[4px] w-full bg-[var(--line)]! rounded-[2px]!">
                        <ProgressIndicator className="bg-[var(--momo)]! transition-all" />
                      </ProgressTrack>
                    </Progress>
                  </div>
                  <div className="quiz-q-text">{question.q}</div>
                  <div className="quiz-opts">
                    {question.opts.map((opt, optIdx) => {
                      const isCorrect = optIdx === question.correct;
                      const isSelected = selectedAnswer === optIdx;
                      let optionClass = '';
                      if (selectedAnswer !== null) {
                        if (isCorrect) optionClass = 'correct';
                        else if (isSelected) optionClass = 'wrong';
                      }
                      return (
                        <button 
                          key={optIdx} 
                          className={`quiz-opt ${optionClass}`} 
                          onClick={() => handleQuizAnswer(optIdx, qIdx)}
                          disabled={selectedAnswer !== null}
                        >
                          <span className="quiz-opt-key">{String.fromCharCode(65 + optIdx)}</span>
                          <span className="quiz-opt-text">{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                  {selectedAnswer !== null && (
                    <>
                      <div className="quiz-feedback show" id={`quizFb${qIdx}`}>{question.feedback}</div>
                      <Button className="quiz-next-btn show" onClick={() => handleQuizNext(qIdx)}>
                        <i className={qIdx === 2 ? 'ti ti-trophy' : 'ti ti-arrow-right'} style={{ fontSize: '12px' }}></i>
                        {qIdx === 2 ? ' Xem kết quả' : 'Câu tiếp theo'}
                      </Button>
                    </>
                  )}
                </div>
              );
            })()}

            {quizStep === 'result' && (
              <div className="quiz-result" id="quizResult" style={{ display: 'block' }}>
                <div className="quiz-score-ring">
                  <svg width="84" height="84" viewBox="0 0 84 84">
                    <circle cx="42" cy="42" r="36" fill="none" stroke="rgba(26,18,16,.09)" strokeWidth="6" />
                    <circle 
                      id="quizRingFill" 
                      cx="42" 
                      cy="42" 
                      r="36" 
                      fill="none" 
                      stroke={resultData.col} 
                      strokeWidth="6" 
                      strokeLinecap="round" 
                      strokeDasharray="226.2" 
                      strokeDashoffset={ringOffset}
                      style={{ transition: 'stroke-dashoffset .6s ease' }}
                    />
                  </svg>
                  <div className="quiz-score-inner"><span className="quiz-score-num" id="quizScoreNum">{quizScore}</span><div className="quiz-score-denom">/ 3</div></div>
                </div>
                <div className="quiz-result-msg" id="quizResultMsg">{resultData.msg}</div>
                <div className="quiz-result-sub" id="quizResultSub">{resultData.sub}</div>
                <Button className="quiz-cta-btn" onClick={resetQuiz}><i className="ti ti-device-mobile"></i>Kiểm tra xe ngay trên MoMo</Button><br />
                <span className="quiz-retry" onClick={resetQuiz}>Làm lại từ đầu</span>
              </div>
            )}
          </div>
        </div>

        {/* Share Bar */}
        <div className="share-bar">
          <span style={{ fontSize: '12px', color: 'var(--text2)', marginRight: '4px' }}>Chia sẻ:</span>
          <div className="shr-btn"><i className="ti ti-brand-facebook"></i></div>
          <div className="shr-btn"><i className="ti ti-message-circle"></i></div>
          <div className="shr-btn"><i className="ti ti-link"></i></div>
          <div className="shr-btn"><i className="ti ti-bookmark"></i></div>
          <span style={{ flex: 1 }}></span>
          <span style={{ fontSize: '12px', color: 'var(--text2)' }}><i className="ti ti-thumb-up" style={{ fontSize: '13px', verticalAlign: '-1px', marginRight: '4px' }}></i>2.847 hữu ích</span>
        </div>

        {/* Author Details Card */}
        <div className="full-author rv">
          <div className="author-avatar-lg">TL</div>
          <div>
            <div className="author-role">Chuyên gia Tài chính Cá nhân · MoSpark</div>
            <div className="author-name">Trần Linh</div>
            <div className="author-bio">6 năm kinh nghiệm tư vấn tài chính cá nhân và pháp lý giao thông. Từng cộng tác với Báo Tuổi Trẻ, VnExpress Kinh tế. Chuyên viết về phạt nguội, bảo hiểm, vay tiêu dùng cho người Việt.</div>
            <div className="author-socials">
              <a href="#" className="soc-link"><i className="ti ti-brand-linkedin"></i>LinkedIn</a>
              <a href="#" className="soc-link"><i className="ti ti-brand-facebook"></i>Facebook</a>
              <a href="#" className="soc-link"><i className="ti ti-article"></i>42 bài viết</a>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="sec-hd">Bài viết liên quan</div>
        <div className="related-grid">
          <div className="rel-card"><div className="rel-img"><i className="ti ti-file-invoice"></i></div><div className="rel-body"><div className="rel-cat">GIAO THÔNG</div><div className="rel-title">Bảng mức phạt nguội xe máy theo NĐ 168 mới nhất</div><div className="rel-date">5/06/2025</div></div></div>
          <div className="rel-card"><div className="rel-img"><i className="ti ti-shield-check"></i></div><div className="rel-body"><div className="rel-cat">BẢO HIỂM</div><div className="rel-title">Bảo hiểm TNDS xe máy bắt buộc: Mua online ở đâu rẻ nhất?</div><div className="rel-date">2/06/2025</div></div></div>
          <div className="rel-card"><div className="rel-img"><i className="ti ti-receipt"></i></div><div className="rel-body"><div className="rel-cat">GIAO THÔNG</div><div className="rel-title">Hướng dẫn nộp phạt nguội online qua MoMo từng bước</div><div className="rel-date">28/05/2025</div></div></div>
          <div className="rel-card"><div className="rel-img"><i className="ti ti-map-pin"></i></div><div className="rel-body"><div className="rel-cat">GIAO THÔNG</div><div className="rel-title">Danh sách camera phạt nguội tại TP.HCM và Hà Nội 2025</div><div className="rel-date">19/05/2025</div></div></div>
        </div>

        {/* Popular Reads */}
        <div className="sec-hd">Bài đọc nhiều</div>
        <div className="popular-list">
          <div className="pop-item">
            <div className="pop-num">01</div>
            <div className="pop-thumb"><i className="ti ti-coin"></i></div>
            <div><div className="pop-title">Lãi suất vay tiêu dùng thấp nhất tháng 6/2025</div><div className="pop-views">89.412 lượt đọc</div></div>
          </div>
          <div className="pop-item">
            <div className="pop-num">02</div>
            <div className="pop-thumb"><i className="ti ti-car"></i></div>
            <div><div className="pop-title">Đăng kiểm xe máy hết hạn bị phạt bao nhiêu?</div><div className="pop-views">67.204 lượt đọc</div></div>
          </div>
          <div className="pop-item">
            <div className="pop-num">03</div>
            <div className="pop-thumb"><i className="ti ti-shield"></i></div>
            <div><div className="pop-title">So sánh 5 loại bảo hiểm xe máy phổ biến nhất</div><div className="pop-views">41.889 lượt đọc</div></div>
          </div>
        </div>

      </div>

      <footer className="site-footer">
        MoSpark Blog · Nội dung được tạo và kiểm duyệt bởi đội ngũ MoSpark GenAI · <Link href="/lab.html" target="_top" style={{ color: 'var(--text2)' }}>← Lab</Link>
      </footer>
    </div>
  );
}
