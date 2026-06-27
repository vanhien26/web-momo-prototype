"use client";

import { Card, CardContent, HeadingBlock } from "@momo-webplatform/mobase";

export default function PlatformStorySection() {
  return (
    <section className="mx-auto px-5 py-20 md:px-10" style={{ maxWidth: "1160px" }}>
      <div className="rv platform-intro">
        <HeadingBlock
          tagline="Platform"
          title="Một platform, trọn vòng tăng trưởng Web"
          description="MoSpark giúp đội tăng trưởng không phải chờ Dev cho mọi thử nghiệm Web. BU/PM có thể khởi tạo landing, sản xuất content, nhúng widget, setup ads, bật chatbot và đo kết quả đến tận hành động mở app hoặc giao dịch."
          tagHeading="h2"
          colorScheme="black"
          align="left"
        />
        <p className="mt-3 leading-[1.8]" style={{ maxWidth: "640px", fontSize: "14.5px", color: "#667085" }}>
          Tinh thần chính là Product Led Growth: sản phẩm gặp user ngay tại nơi họ đang tìm kiếm, trước khi user tải app.
        </p>
      </div>

      <div className="rv platform-story" style={{ ["--story-delay" as string]: ".08s" }}>
        <div className="ps-scene ps-old">
          <div className="ps-scene-head">
            <span className="ps-stage-label">CŨ</span>
            <strong>Đội đông, chờ Dev</strong>
          </div>
          <div className="ps-canvas">
            <svg viewBox="0 0 220 180" className="ps-illustration" aria-hidden="true">
              <g className="ps-tool-icons" stroke="#fbcfe8" strokeWidth="1.5" fill="#fdf2f8">
                <rect x="32" y="18" width="56" height="38" rx="3"/>
                <line x1="32" y1="26" x2="88" y2="26"/>
                <circle cx="37" cy="22" r="1" fill="#fbcfe8" stroke="none"/>
                <circle cx="41" cy="22" r="1" fill="#fbcfe8" stroke="none"/>
                <line x1="38" y1="32" x2="62" y2="32" strokeWidth="1.2"/>
                <line x1="38" y1="38" x2="80" y2="38" strokeWidth="1.2"/>
                <line x1="38" y1="44" x2="68" y2="44" strokeWidth="1.2"/>
                <circle cx="106" cy="32" r="9" fill="#fdf2f8"/>
                <path d="M106 23 A 9 9 0 0 1 115 32 L 106 32 Z" fill="#fbcfe8"/>
                <circle cx="18" cy="32" r="8" fill="#fdf2f8"/>
                <line x1="18" y1="32" x2="18" y2="26" strokeWidth="1.2"/>
                <line x1="18" y1="32" x2="22" y2="32" strokeWidth="1.2"/>
                <rect x="118" y="48" width="20" height="14" rx="1.5"/>
                <rect x="115" y="44" width="20" height="14" rx="1.5"/>
              </g>
              <g className="ps-people-old" stroke="#f472b6" strokeWidth="2" fill="#fce7f3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="40" cy="90" r="10"/>
                <path d="M28 130 L 28 105 Q 40 96 52 105 L 52 130 Z"/>
                <path d="M50 112 L 60 122" fill="none"/>
                <circle cx="85" cy="82" r="11"/>
                <path d="M72 130 L 72 100 Q 85 90 98 100 L 98 130 Z"/>
                <rect x="98" y="98" width="8" height="12" rx="1.5"/>
                <path d="M97 108 L 100 102" fill="none"/>
                <circle cx="135" cy="90" r="10"/>
                <path d="M123 130 L 123 105 Q 135 96 147 105 L 147 130 Z"/>
                <line x1="147" y1="110" x2="155" y2="103" strokeWidth="1.8"/>
              </g>
              <g className="ps-laptops" stroke="#ec4899" strokeWidth="1.8" fill="#fce7f3" strokeLinejoin="round">
                <path d="M16 135 L 64 135 L 60 122 L 20 122 Z"/>
                <line x1="16" y1="135" x2="64" y2="135" strokeWidth="2.2"/>
                <path d="M70 135 L 120 135 L 115 120 L 75 120 Z"/>
                <line x1="70" y1="135" x2="120" y2="135" strokeWidth="2.2"/>
              </g>
              <line x1="8" y1="148" x2="170" y2="148" stroke="#f9a8d4" strokeWidth="2" strokeLinecap="round"/>
              <line x1="8" y1="170" x2="170" y2="170" stroke="#fbcfe8" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 4"/>
            </svg>
          </div>
          <div className="ps-meta">
            <span>Brief → Spec → Ticket → Sprint Dev → QA → Live</span>
            <strong>4-8 tuần / lần thử</strong>
          </div>
        </div>

        <div className="ps-flow">
          <div className="ps-arrow-wrap">
            <svg viewBox="0 0 120 36" className="ps-arrow" aria-hidden="true">
              <path d="M4 18 L 100 18" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" fill="none" className="ps-arrow-line"/>
              <path d="M100 18 L 88 10 M 100 18 L 88 26" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <circle cx="60" cy="18" r="3.5" fill="#ec4899" className="ps-arrow-dot"/>
            </svg>
            <span className="ps-flow-badge">
              <img className="block h-3 w-auto object-contain" src="https://static.momocdn.net/app/img/web-platform/logo-mospark-dark.svg" alt="MoSpark" decoding="async"/>
            </span>
          </div>
        </div>

        <div className="ps-scene ps-new">
          <div className="ps-scene-head">
            <span className="ps-stage-label new">MOSPARK</span>
            <strong>PM tự build, có AI</strong>
          </div>
          <div className="ps-canvas">
            <svg viewBox="0 0 220 180" className="ps-illustration" aria-hidden="true">
              <g className="ps-sparkle-badge">
                <rect x="160" y="14" width="44" height="44" rx="9" fill="#fce7f3" stroke="#ec4899" strokeWidth="1.5"/>
                <g className="ps-sparkle" fill="#ec4899">
                  <path d="M178 36 L 181 30 L 184 36 L 190 39 L 184 42 L 181 48 L 178 42 L 172 39 Z"/>
                  <path d="M192 26 L 194 22 L 196 26 L 200 28 L 196 30 L 194 34 L 192 30 L 188 28 Z" opacity={0.85}/>
                </g>
              </g>
              <g stroke="#1f1f29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <ellipse cx="98" cy="68" rx="11" ry="7" fill="#1f1f29"/>
                <path d="M82 88 Q 80 74 92 70 Q 88 64 98 60 Q 110 60 114 72 Q 116 90 110 100" fill="#fff"/>
                <path d="M86 86 Q 86 76 96 74 Q 110 74 112 86 Q 112 100 100 104 Q 88 102 86 86" fill="#fff"/>
                <circle cx="84" cy="92" r="1.8" fill="#1f1f29"/>
              </g>
              <g stroke="#1f1f29" strokeWidth="2" strokeLinejoin="round">
                <path d="M88 110 L 86 142 L 116 142 L 114 110 Z" fill="#fff"/>
                <path d="M76 122 L 88 110 L 88 142 L 76 148 Z" fill="#f9a8d4"/>
                <path d="M114 110 L 130 122 L 130 148 L 114 142 Z" fill="#f9a8d4"/>
                <path d="M130 122 Q 144 118 152 100" fill="#f9a8d4" strokeLinecap="round"/>
              </g>
              <g>
                <rect x="32" y="108" width="60" height="44" rx="3" fill="#ec4899" stroke="#1f1f29" strokeWidth="2"/>
                <rect x="36" y="112" width="52" height="36" rx="1.5" fill="#fce7f3"/>
                <path d="M52 152 L 60 162 L 76 162 L 84 152" stroke="#1f1f29" strokeWidth="2" fill="#f9a8d4" strokeLinejoin="round"/>
              </g>
              <g>
                <path d="M138 78 L 138 102 Q 138 108 144 108 L 152 108 Q 158 108 158 102 L 158 78 Z" fill="#ec4899" stroke="#1f1f29" strokeWidth="2" strokeLinejoin="round"/>
                <rect x="138" y="74" width="20" height="6" rx="1.5" fill="#fff" stroke="#1f1f29" strokeWidth="2"/>
                <path className="ps-steam" d="M144 64 Q 142 60 146 56 Q 150 52 148 48" stroke="#9ca3af" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <path className="ps-steam" d="M152 66 Q 154 62 150 58 Q 146 54 150 50" stroke="#9ca3af" strokeWidth="1.5" fill="none" strokeLinecap="round" style={{ animationDelay: ".5s" }}/>
              </g>
              <g stroke="#f472b6" strokeWidth="1.8" strokeLinecap="round" fill="none">
                <line x1="166" y1="78" x2="172" y2="76"/>
                <line x1="166" y1="84" x2="172" y2="84"/>
                <line x1="168" y1="92" x2="174" y2="92"/>
              </g>
              <g stroke="#1f1f29" strokeWidth="2" strokeLinejoin="round">
                <path d="M174 138 L 178 162 L 200 162 L 204 138 Z" fill="#f9a8d4"/>
                <path d="M178 138 L 200 138" strokeWidth="2.2" fill="none"/>
                <path d="M185 138 Q 188 118 196 116" fill="#fff" strokeWidth="2"/>
                <path d="M196 116 Q 200 112 204 116 Q 200 126 196 116" fill="#fff"/>
                <path d="M192 138 Q 185 122 178 124" fill="#fff" strokeWidth="2"/>
              </g>
              <line x1="8" y1="162" x2="212" y2="162" stroke="#1f1f29" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="ps-meta">
            <span>Brief → AI draft → Score gate → Publish</span>
            <strong>1-2 ngày / lần thử</strong>
          </div>
        </div>
      </div>

      <div className="rv grid gap-3 sm:grid-cols-2 lg:grid-cols-3" style={{ ["--story-delay" as string]: ".16s" }}>
        {[
          { icon: "✦", title: "Không còn phụ thuộc Dev cho mọi thay đổi", desc: "Landing, content block, widget và campaign placement được cấu hình như component thay vì hardcode từng sprint." },
          { icon: "◎", title: "GenAI có quality gate", desc: "AI chỉ là production engine. Business context, outline approval, SEO/GEO score và review gate mới là phần bảo vệ chất lượng." },
          { icon: "▲", title: "Đo được business outcome", desc: "Không dừng ở pageview. Mỗi use case cần đo được Open App, Download App, MAU, MEU và transaction." },
        ].map((card) => (
          <Card key={card.title} className="transition hover:-translate-y-px">
            <CardContent className="pt-5">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md text-[12px] font-extrabold" style={{ background: "#fff0f7", color: "#a50064" }}>{card.icon}</span>
              <h3 className="mt-3 text-[15px] font-extrabold" style={{ color: "#101828" }}>{card.title}</h3>
              <p className="mt-2 text-[12.5px] leading-[1.7]" style={{ color: "#667085" }}>{card.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
