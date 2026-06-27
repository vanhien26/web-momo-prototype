"use client";

import { Badge, Button, Card, CardContent } from "@momo-webplatform/mobase-next";
import HeadingBlock from "@/components/HeadingBlock";

const BASIC_FEATURES = [
  { title: "Merchant Profile", desc: "Nhận diện thương hiệu, giờ hoạt động, dịch vụ, liên hệ" },
  { title: "Category Design Theme", desc: "Giao diện tối ưu theo ngành hàng: F&B, Retail, Beauty..." },
  { title: "SEO/GEO First", desc: "Schema markup, entity signal, structured data chuẩn" },
  { title: "Google Map & Popular Time", desc: "Vị trí, chỉ đường và giờ cao điểm từ Google Maps" },
  { title: "GenAI Content & Design", desc: "Mô tả, tagline, layout được AI sinh từ context merchant" },
];

const PREMIUM_FEATURES = [
  ...BASIC_FEATURES,
  { title: "Review từ User", desc: "Tổng hợp đánh giá thực từ khách hàng đã ghé thăm" },
  { title: "Menu / Catalogue", desc: "Danh sách sản phẩm, dịch vụ, combo và giá" },
  { title: "AI Overview từ Google Review", desc: "Tóm tắt điểm mạnh, điểm cần cải thiện từ review thực" },
  { title: "Gen Video Introduce", desc: "Video AI-generated từ ảnh và thông tin merchant" },
];

function CheckIcon({ premium = false }: { premium?: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: "1px" }}>
      <circle cx="9" cy="9" r="9" fill={premium ? "rgba(255,255,255,.22)" : "#f0fdf4"}/>
      <path d="M6 9l2.2 2.2L13 7" stroke={premium ? "#fff" : "#16a34a"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function MerchantSection() {
  return (
    <section id="merchant-o2o" style={{ background: "linear-gradient(160deg,#10131b 0%,#0d1222 60%,#0f1018 100%)", padding: "80px 0 92px" }}>
      <div className="mx-auto px-5 md:px-10" style={{ maxWidth: "1160px" }}>

        <div className="rv mb-14 flex flex-col items-center text-center">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "18px", padding: "7px 14px", borderRadius: "999px", border: "1px solid rgba(165,0,100,.22)", background: "rgba(165,0,100,.07)" }}>
            <span className="dot-pulse" style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#a50064", display: "inline-block", flexShrink: 0 }}></span>
            <span style={{ fontSize: "9px", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: "#a50064", fontFamily: "ui-monospace,monospace" }}>SME Merchant Page</span>
            <span style={{ width: "1px", height: "10px", background: "rgba(165,0,100,.25)", display: "inline-block" }}></span>
            <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "rgba(255,255,255,.35)", fontFamily: "ui-monospace,monospace" }}>O2O Solution</span>
          </div>
          <HeadingBlock
            title="Merchant Page dành cho SME trên MoMo"
            description="Trang thương nhân chuẩn SEO/GEO, tích hợp Google Map và AI-generated content - cầu nối từ Search đến giao dịch thực tế tại điểm bán."
            tagHeading="h2"
            colorScheme="white"
            align="center"
          />
        </div>

        <div className="rv grid grid-cols-1 gap-5 sm:grid-cols-2" style={{ maxWidth: "900px", margin: "0 auto" }}>

          {/* BASIC CARD */}
          <Card className="flex flex-col bg-white dark:bg-[#131522]" style={{ background: "var(--card-bg)", borderRadius: "22px", padding: "28px 26px 32px", boxShadow: "0 0 0 1px rgba(255,255,255,.06),0 20px 48px rgba(0,0,0,.22)" }}>
            <div style={{ fontFamily: "ui-monospace,monospace", fontSize: "8.5px", fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--text-sub)", marginBottom: "10px" }}>5 tính năng</div>
            <div className="momo-display" style={{ fontSize: "52px", fontWeight: 900, color: "var(--text-main)", lineHeight: .92, letterSpacing: "-.04em", marginBottom: "8px" }}>Basic</div>
            <div style={{ fontSize: "12.5px", lineHeight: 1.6, color: "var(--text-sub)", marginBottom: "22px", maxWidth: "320px" }}>Trang SME định danh rõ ràng, chuẩn SEO/GEO và tích hợp Google Maps - đủ để được tìm thấy và tạo tin tưởng trước khi ghé.</div>
            <a href="/merchant" target="_blank" className="mb-6 block w-full no-underline">
              <Button variant="outline" className="w-full bg-[#f3f4f6] dark:bg-[#1f2937] text-[#374151] dark:text-[#f3f4f6] border-[#e5e7eb] dark:border-[#374151] hover:bg-[#e5e7eb]" style={{ width: "100%", background: "var(--secondary)", borderColor: "var(--border-color)", color: "var(--text-sub)", fontWeight: 800 }}>Xem Demo Basic →</Button>
            </a>
            <div style={{ fontSize: "8px", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-sub)", fontFamily: "ui-monospace,monospace", marginBottom: "14px" }}>Bao gồm</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
              {BASIC_FEATURES.map((f) => (
                <div key={f.title} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                   <CheckIcon/>
                  <div style={{ fontSize: "12.5px", color: "var(--text-sub)", lineHeight: 1.5 }}>
                    <strong style={{ color: "var(--text-main)", fontWeight: 700 }}>{f.title}</strong><br/>
                    <span style={{ fontSize: "11px", color: "var(--text-sub)" }}>{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* PREMIUM CARD */}
          <Card className="flex flex-col relative overflow-hidden border-0" style={{ background: "linear-gradient(145deg,#a50064 0%,#7a004b 55%,#5c0038 100%)", borderRadius: "22px", padding: "28px 26px 32px", boxShadow: "0 0 0 1.5px rgba(255,255,255,.1),0 20px 60px rgba(165,0,100,.4)" }}>
            <div style={{ position: "absolute", top: "-80px", right: "-60px", width: "260px", height: "260px", background: "radial-gradient(circle,rgba(255,255,255,.1),transparent 65%)", pointerEvents: "none" }}></div>
            <div style={{ position: "absolute", bottom: "-40px", left: "-40px", width: "200px", height: "200px", background: "radial-gradient(circle,rgba(0,0,0,.18),transparent 65%)", pointerEvents: "none" }}></div>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", height: "100%" }}>
              <div className="mb-2.5 flex items-center gap-2">
                <span style={{ fontFamily: "ui-monospace,monospace", fontSize: "8.5px", fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.6)" }}>9 tính năng</span>
                <Badge className="text-white border border-white/25 bg-white/15" style={{ fontSize: "8px", fontWeight: 900, padding: "2px 8px", borderRadius: "4px", background: "rgba(255,255,255,.15)", borderColor: "rgba(255,255,255,.25)", color: "#fff", letterSpacing: ".07em" }}>FEATURED</Badge>
              </div>
              <div className="momo-display" style={{ fontSize: "52px", fontWeight: 900, color: "#fff", lineHeight: .92, letterSpacing: "-.04em", marginBottom: "8px" }}>Premium</div>
              <div style={{ fontSize: "12.5px", lineHeight: 1.6, color: "rgba(255,255,255,.7)", marginBottom: "22px", maxWidth: "320px" }}>Trải nghiệm thương nhân đầy đủ nhất - từ định danh, bản đồ, review đến AI Overview và Video giới thiệu.</div>
              <a href="/merchant-page-builder" target="_blank" className="mb-6 block w-full no-underline">
                <Button variant="secondary" className="w-full bg-white text-[#a50064] border-none hover:bg-[#ffd6ec]" style={{ width: "100%", background: "#fff", color: "#a50064", fontWeight: 800, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,.15)" }}>Xem Demo Premium →</Button>
              </a>
              <div style={{ fontSize: "8px", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.35)", fontFamily: "ui-monospace,monospace", marginBottom: "14px" }}>Tất cả tính năng</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                {PREMIUM_FEATURES.map((f, i) => (
                  <div key={f.title}>
                    {i === 5 && (
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", margin: "4px 0 12px" }}>
                        <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,.15)" }}></div>
                        <span style={{ fontSize: "8px", fontWeight: 800, letterSpacing: ".07em", textTransform: "uppercase", color: "rgba(255,255,255,.4)", fontFamily: "ui-monospace,monospace", whiteSpace: "nowrap" }}>Premium Exclusive</span>
                        <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,.15)" }}></div>
                      </div>
                    )}
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <CheckIcon premium />
                      <div style={{ fontSize: "12.5px", color: i >= 5 ? "rgba(255,255,255,.85)" : "rgba(255,255,255,.65)", lineHeight: 1.5 }}>
                        <strong style={{ color: i >= 5 ? "#fff" : "rgba(255,255,255,.85)", fontWeight: 700 }}>{f.title}</strong><br/>
                        <span style={{ fontSize: "11px", color: i >= 5 ? "rgba(255,255,255,.5)" : "rgba(255,255,255,.42)" }}>{f.desc}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

        </div>

        {/* Bottom funnel bar */}
        <div className="rv mt-12 flex justify-center">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 0, border: "1px solid rgba(255,255,255,.07)", borderRadius: "18px", overflow: "hidden", background: "rgba(255,255,255,.025)" }}>
            {[
              { num: "5", label: "Basic", numColor: "#fff" },
              { num: "9", label: "Premium", numColor: "#a50064" },
              { num: "Google Search", label: "Discovery", numColor: "#fff", large: true },
              { num: "Merchant Page", label: "Evaluate", numColor: "#ff83c6", large: true },
              { num: "Ví Trả Sau", label: "Convert", numColor: "#fff", large: true, last: true },
            ].map((item, i) => (
              <div key={i} style={{ padding: "16px 28px", borderRight: item.last ? "none" : "1px solid rgba(255,255,255,.06)", textAlign: "center", minWidth: item.large ? "120px" : "100px" }}>
                <div className="momo-display" style={{ fontSize: item.large ? "22px" : "28px", fontWeight: 900, color: item.numColor, letterSpacing: "-.03em", lineHeight: item.large ? 1.1 : 1, whiteSpace: item.large ? "nowrap" : undefined }}>{item.num}</div>
                <div style={{ fontSize: "8.5px", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(255,255,255,.3)", fontFamily: "ui-monospace,monospace", marginTop: "5px" }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
