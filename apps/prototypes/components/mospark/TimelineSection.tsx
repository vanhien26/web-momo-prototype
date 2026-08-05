"use client";

import { Card, HeadingBlock } from "@momo-webplatform/mobase";

export default function TimelineSection() {
  return (
    <section id="content-production" style={{ background: "#f0f2f5", padding: "80px 0" }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 20px" }}>

        <div className="rv" style={{ marginBottom: "36px" }}>
          <HeadingBlock
            title="Trước và sau khi có MoSpark"
            description="Workflow từ keyword đến bài viết đầy đủ: product embed, SEO/GEO score, widget và CTA Web-to-App."
            tagHeading="h2"
            colorScheme="black"
            align="left"
          />
        </div>

        <div className="rv" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" }}></div>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#6b7280" }}>Cách cũ · 16 tuần</span>
          </div>
          <div className="ba-speed-pill" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 16px", borderRadius: "100px", background: "#e5e7eb" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            <span style={{ fontSize: "12px", fontWeight: 800, color: "#111827", letterSpacing: "-.01em" }}>16 tuần → 5 tuần · Tiết kiệm 69%</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" }}></div>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#6b7280" }}>Với MoSpark · 5 tuần</span>
          </div>
        </div>

        <div className="rv ba-shell">
          {/* OLD LANE */}
          <div className="ba-old-lane">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "14px 20px", borderBottom: "1px solid #f1f5f9" }}>
              <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "rgba(239,68,68,.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
              </div>
              <strong style={{ fontSize: "12px", color: "#374151", fontWeight: 800 }}>Cách cũ</strong>
              <span style={{ marginLeft: "auto", fontSize: "10px", fontWeight: 700, color: "#ef4444", background: "rgba(239,68,68,.08)", padding: "3px 10px", borderRadius: "100px" }}>16 tuần</span>
            </div>
            <div className="ba-stage-grid">
              <div className="ba-flow-track" aria-hidden="true"><span className="ba-flow-progress"></span><i className="ba-flow-head"></i></div>
              {[
                { label: "Brainstorm", time: "2 tuần", desc: "Họp nhiều team, brief qua lại, chưa rõ scope" },
                { label: "Research", time: "3 tuần", desc: "Manual keyword research, đối thủ, gap analysis" },
                { label: "Viết bài", time: "4 tuần", desc: "Content writer viết tay từng bài, review nhiều vòng" },
                { label: "SEO Check", time: "2 tuần", desc: "Kiểm SEO thủ công, không có GEO score" },
                { label: "Integration", time: "2 tuần", desc: "Nhờ Dev nhúng CTA và product card" },
                { label: "Measure", time: "3 tuần", desc: "Pageview rời rạc, khó nối giao dịch" },
              ].map((s, i) => (
                <div key={i} className="bef-step" style={i === 5 ? { borderRight: "none" } : {}}>
                  <div className="bef-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M12 3l1.9 5.8h6.1l-4.9 3.6 1.9 5.8L12 14.6l-4.9 3.6 1.9-5.8L4 8.8h6.1z"/>
                    </svg>
                  </div>
                  <b>{s.label}</b><strong>{s.time}</strong><p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* NEW LANE */}
          <div className="ba-new-lane">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "14px 20px", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
              <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "rgba(16,185,129,.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <strong style={{ fontSize: "12px", color: "#fff", fontWeight: 800 }}>Với MoSpark</strong>
              <span style={{ marginLeft: "auto", fontSize: "10px", fontWeight: 700, color: "#10b981", background: "rgba(16,185,129,.12)", padding: "3px 10px", borderRadius: "100px" }}>5 tuần</span>
            </div>
            <div className="ba-stage-grid">
              <div className="ba-flow-track" aria-hidden="true"><span className="ba-flow-progress"></span><i className="ba-flow-head"></i></div>
              {[
                { label: "Ideation", time: "2 ngày", desc: "AI concept từ use case và market gap", color: "rgba(200,0,122,.15)", iconColor: "#f472b6" },
                { label: "Inventory", time: "1 tuần", desc: "SEO/GEO cluster, registry, priority", color: "rgba(59,130,246,.15)", iconColor: "#60a5fa" },
                { label: "GenAI Draft", time: "2 tuần", desc: "Outline, article, FAQ, product embed", color: "rgba(139,92,246,.15)", iconColor: "#a78bfa" },
                { label: "Gate", time: "2 ngày", desc: "Business context và SEO/GEO score", color: "rgba(16,185,129,.15)", iconColor: "#34d399" },
                { label: "Widget Sync", time: "3 ngày", desc: "Lookup widget, ads, chatbot, audio", color: "rgba(245,158,11,.15)", iconColor: "#fbbf24" },
                { label: "Performance", time: "1 tuần", desc: "Search, AI Search, Web-to-App, transaction", color: "rgba(20,184,166,.15)", iconColor: "#2dd4bf" },
              ].map((s, i) => (
                <div key={i} className="aft-step" style={i === 5 ? { borderRight: "none" } : {}}>
                  <div className="aft-icon" style={{ background: s.color, color: s.iconColor }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                  </div>
                  <b>{s.label}</b><strong>{s.time}</strong><p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rv mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Build Widget", desc: "Mỗi product đóng thành widget có input, output, state và tracking rõ ràng." },
            { title: "Embed Component", desc: "Product card, lookup form, chatbot và CTA nhúng theo context thay vì banner text." },
            { title: "Reuse Surface", desc: "Một component dùng trên landing, blog, service page và campaign page." },
            { title: "Track Outcome", desc: "Đo từ đọc bài, dùng widget, mở app, tải app đến giao dịch theo use case." },
          ].map((c) => (
            <Card key={c.title} className="p-5">
              <b className="block text-[13px] font-extrabold" style={{ color: "#101828" }}>{c.title}</b>
              <p className="mt-2 text-[11.5px] leading-[1.7]" style={{ color: "#667085" }}>{c.desc}</p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
