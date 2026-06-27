"use client";

import { Button, Card, CardContent } from "@momo-webplatform/mobase-next";
import HeadingBlock from "@/components/HeadingBlock";

export default function ModulesSection() {
  return (
    <section className="py-20" style={{ background: "var(--modules-bg)" }}>
      <div className="mx-auto px-5 md:px-10" style={{ maxWidth: "1160px" }}>
        <div className="rv mb-10">
          <HeadingBlock
            tagline="6 Division"
            title="6 module · 50 use case"
            description="MoSpark bao phủ toàn bộ vòng tăng trưởng Web: tạo landing, sản xuất content GenAI, nhúng widget, tích hợp chatbot, build microsite SEO/GEO, và chấm điểm content trước khi publish."
            tagHeading="h2"
            colorScheme="black"
            align="left"
          />
        </div>

        <div className="rv grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

          {/* 1. Landing Page Builder */}
          <Card className="overflow-hidden p-0" style={{ border: "1px solid var(--module-card-border)", background: "var(--module-card-dark-bg)" }}>
            <div className="relative flex items-center justify-center overflow-hidden" style={{ height: "148px" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 70% 20%,rgba(165,0,100,.2),transparent 65%)", pointerEvents: "none" }}></div>
              <div className="lp-frame-anim">
                <div className="lp-bar-anim"></div>
                <div className="lp-hero-anim"></div>
                <div className="lp-row-anim"></div>
                <div className="lp-row2-anim"></div>
              </div>
            </div>
            <CardContent className="px-5 pb-5 pt-4">
              <h3 className="mb-1.5 text-[15px] font-extrabold" style={{ color: "var(--module-card-dark-text)" }}>Landing Page Builder</h3>
              <p className="text-[11.5px] leading-[1.7]" style={{ color: "var(--module-card-dark-sub)" }}>Tạo landing page nhanh từ brief hoặc prompt, dùng template chuẩn hóa và dễ handoff cho Dev.</p>
            </CardContent>
          </Card>

          {/* 2. GenAI Content */}
          <Card className="overflow-hidden p-0" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
            <div className="relative flex items-center justify-center overflow-hidden" style={{ height: "148px", background: "var(--secondary)" }}>
              <div className="ai-doc-frame">
                <div className="ai-doc-hd"></div>
                <div className="ai-doc-l1"></div>
                <div className="ai-doc-l2"></div>
                <div className="ai-doc-l3"></div>
              </div>
            </div>
            <CardContent className="px-5 pb-5 pt-4">
              <h3 className="mb-1.5 text-[15px] font-extrabold" style={{ color: "var(--text-main)" }}>GenAI Content</h3>
              <p className="text-[11.5px] leading-[1.7]" style={{ color: "var(--text-sub)" }}>Sản xuất outline, bài viết, FAQ và product embed dựa trên business context của từng PLG Project.</p>
            </CardContent>
          </Card>

          {/* 3. Ads & Widget */}
          <Card className="overflow-hidden p-0" style={{ border: "1px solid var(--module-card-border)", background: "var(--module-card-dark-bg)" }}>
            <div className="relative flex items-center justify-center overflow-hidden" style={{ height: "148px" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 72% 30%,rgba(124,58,237,.18),transparent 64%)", pointerEvents: "none" }}></div>
              <div className="ads-frame-anim">
                <div className="ads-tl ads-tl1"></div>
                <div className="ads-tl ads-tl2"></div>
                <div className="ads-card-anim">
                  <div className="ads-ci-box"></div>
                  <div className="ads-ct-box">
                    <div className="ads-ct1-line"></div>
                    <div className="ads-ct2-line"></div>
                  </div>
                </div>
              </div>
            </div>
            <CardContent className="px-5 pb-5 pt-4">
              <h3 className="mb-1.5 text-[15px] font-extrabold" style={{ color: "var(--module-card-dark-text)" }}>Ads &amp; Widget</h3>
              <p className="text-[11.5px] leading-[1.7]" style={{ color: "var(--module-card-dark-sub)" }}>Quản lý product card, banner và utility widget theo ngữ cảnh từng trang, không hardcode theo từng sprint.</p>
            </CardContent>
          </Card>

          {/* 4. Chatbot */}
          <Card className="overflow-hidden p-0" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
            <div className="relative flex items-center justify-center overflow-hidden" style={{ height: "148px", background: "var(--secondary)" }}>
              <div className="chat-frame-anim">
                <div className="chat-u-msg">Vay nhanh điều kiện gì?</div>
                <div className="chat-dots-anim"><span></span><span></span><span></span></div>
                <div className="chat-ai-msg">Chỉ cần CMND và tài khoản MoMo - duyệt ngay trong 5 phút.</div>
              </div>
            </div>
            <CardContent className="px-5 pb-5 pt-4">
              <h3 className="mb-1.5 text-[15px] font-extrabold" style={{ color: "var(--text-main)" }}>Chatbot</h3>
              <p className="text-[11.5px] leading-[1.7]" style={{ color: "var(--text-sub)" }}>Nhúng trợ lý vào mini web hoặc microsite để trả lời từ RAG và dẫn user tới hành động phù hợp.</p>
            </CardContent>
          </Card>

          {/* 5. SEO/GEO Project */}
          <Card className="overflow-hidden p-0" style={{ border: "1px solid var(--module-card-border)", background: "var(--module-card-dark-bg)" }}>
            <div className="relative flex items-center justify-center overflow-hidden" style={{ height: "148px" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 40% 20%,rgba(14,165,233,.16),transparent 62%)", pointerEvents: "none" }}></div>
              <div className="seo-chart-frame">
                <div className="seo-b seo-b1"><div className="seo-bl" style={{ ["--h" as string]: "72%" }}></div></div>
                <div className="seo-b seo-b2"><div className="seo-bl" style={{ ["--h" as string]: "48%" }}></div></div>
                <div className="seo-b seo-b3"><div className="seo-bl" style={{ ["--h" as string]: "88%" }}></div></div>
                <div className="seo-b seo-b4"><div className="seo-bl" style={{ ["--h" as string]: "55%" }}></div></div>
                <div className="seo-b seo-b5"><div className="seo-bl" style={{ ["--h" as string]: "76%" }}></div></div>
              </div>
            </div>
            <CardContent className="px-5 pb-5 pt-4">
              <h3 className="mb-1.5 text-[15px] font-extrabold" style={{ color: "var(--module-card-dark-text)" }}>SEO/GEO Project</h3>
              <p className="text-[11.5px] leading-[1.7]" style={{ color: "var(--module-card-dark-sub)" }}>Quản lý keyword, cấu trúc web, nội dung và hiệu suất cho Google Search và AI Search.</p>
            </CardContent>
          </Card>

          {/* 6. SEO/GEO Score */}
          <Card className="overflow-hidden p-0" style={{ background: "var(--card-bg)", borderColor: "var(--border-color)" }}>
            <div className="relative flex items-center justify-center overflow-hidden" style={{ height: "148px", background: "var(--secondary)" }}>
              <div className="score-gauge-frame">
                <svg viewBox="0 0 100 100" width="88" height="88" style={{ transform: "rotate(-90deg)", position: "absolute" }}>
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#e4e7ec" strokeWidth="7"/>
                  <circle className="sg-arc" cx="50" cy="50" r="38" fill="none" stroke="#a50064" strokeWidth="7" strokeLinecap="round" strokeDasharray="239" strokeDashoffset="239"/>
                </svg>
                <div className="sg-inner-label">
                  <span className="sg-num-anim">84</span>
                  <span style={{ fontSize: "9px", color: "var(--text-sub)", fontWeight: 700 }}>/100</span>
                </div>
              </div>
            </div>
            <CardContent className="px-5 pb-5 pt-4">
              <h3 className="mb-1.5 text-[15px] font-extrabold" style={{ color: "var(--text-main)" }}>SEO/GEO Score</h3>
              <p className="text-[11.5px] leading-[1.7]" style={{ color: "var(--text-sub)" }}>Chấm điểm nội dung trước publish để kiểm soát factuality, citation, readability và khả năng được AI trích dẫn.</p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
