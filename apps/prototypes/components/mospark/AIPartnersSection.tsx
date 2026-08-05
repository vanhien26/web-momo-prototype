"use client";

import { Card, CardContent, HeadingBlock } from "@momo-webplatform/mobase";

export default function AIPartnersSection() {
  return (
    <section style={{ background: "linear-gradient(160deg,#0f0c14 0%,#0d1020 60%,#0c0e1a 100%)", padding: "72px 20px 80px" }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <div style={{ display: "grid", gap: "48px", alignItems: "start" }} className="md:grid-cols-[1fr_1.6fr]">

          <div>
            <HeadingBlock
              tagline="AI Orchestration"
              title="Powered by 3 model AI hàng đầu"
              description="MoSpark route tự động đến đúng model cho mỗi task - content generation, analysis, hay multi-agent pipeline."
              tagHeading="h2"
              colorScheme="white"
              align="left"
            />
            <div style={{ marginTop: "24px", display: "inline-flex", alignItems: "center", gap: "10px", padding: "10px 16px", borderRadius: "12px", background: "rgba(200,0,122,.08)", border: "1px solid rgba(200,0,122,.18)" }}>
              <span className="dot-pulse" style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#c8007a", display: "inline-block", flexShrink: 0 }}></span>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,.8)" }}>MoSpark Orchestrator</span>
              <span style={{ fontSize: "10px", color: "rgba(200,0,122,.7)", fontFamily: "ui-monospace,monospace" }}>routing active</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Card className="ai-model-card border-0">
              <CardContent className="pt-4">
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#1a1a1a", border: "1px solid rgba(255,255,255,.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zm-9.261 12.618a4.492 4.492 0 0 1-2.889-1.044l.142-.081 4.803-2.773a.795.795 0 0 0 .401-.695v-6.777l2.031 1.172a.073.073 0 0 1 .04.057v5.605a4.506 4.506 0 0 1-4.528 4.536zM4.5 18.944a4.491 4.491 0 0 1-.537-3.019l.142.085 4.803 2.773a.771.771 0 0 0 .795 0l5.864-3.386v2.342a.079.079 0 0 1-.032.067L10.578 20.9a4.49 4.49 0 0 1-6.078-1.956zM3.08 8.14a4.488 4.488 0 0 1 2.335-1.98V12a.777.777 0 0 0 .394.695l5.864 3.386-2.031 1.172a.079.079 0 0 1-.075.012L4.64 14.208A4.49 4.49 0 0 1 3.08 8.14zm16.651 3.855-5.864-3.386 2.031-1.172a.079.079 0 0 1 .075-.012l4.927 2.847a4.5 4.5 0 0 1-.697 8.116v-5.86a.79.79 0 0 0-.472-.533zm2.02-3.025-.142-.085-4.803-2.773a.768.768 0 0 0-.795 0L10.146 9.5V7.157a.079.079 0 0 1 .032-.067l4.857-2.805a4.5 4.5 0 0 1 6.695 4.661zm-12.73 4.194-2.031-1.172a.079.079 0 0 1-.04-.057V6.33a4.5 4.5 0 0 1 7.368-3.45l-.142.08-4.803 2.773a.795.795 0 0 0-.401.695zm1.102-2.378 2.609-1.507 2.609 1.507v3.013l-2.609 1.507-2.609-1.507z"/>
                    </svg>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <strong style={{ fontSize: "14px", color: "#fff", fontWeight: 800 }}>OpenAI</strong>
                    <div style={{ marginTop: "6px", display: "flex", flexWrap: "wrap", gap: "4px" }}>
                      <span className="mv">GPT-4o</span><span className="mv">GPT-4o mini</span><span className="mv">o1</span><span className="mv">o3 mini</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="ai-model-card border-0">
              <CardContent className="pt-4">
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#0d1b3e", border: "1px solid rgba(66,133,244,.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="gg2" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#4285F4"/>
                          <stop offset="60%" stopColor="#9b72cb"/>
                          <stop offset="100%" stopColor="#d96570"/>
                        </linearGradient>
                      </defs>
                      <path d="M12 2C10.6 7.4 6.6 11.4 1.2 12.8 6.6 14.2 10.6 18.2 12 23.6 13.4 18.2 17.4 14.2 22.8 12.8 17.4 11.4 13.4 7.4 12 2Z" fill="url(#gg2)"/>
                    </svg>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <strong style={{ fontSize: "14px", color: "#fff", fontWeight: 800 }}>Gemini</strong>
                    <div style={{ marginTop: "6px", display: "flex", flexWrap: "wrap", gap: "4px" }}>
                      <span className="mv" style={{ color: "rgba(100,160,255,.8)", borderColor: "rgba(66,133,244,.2)" }}>2.0 Flash</span>
                      <span className="mv" style={{ color: "rgba(100,160,255,.8)", borderColor: "rgba(66,133,244,.2)" }}>1.5 Pro</span>
                      <span className="mv" style={{ color: "rgba(100,160,255,.8)", borderColor: "rgba(66,133,244,.2)" }}>1.5 Flash</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="ai-model-card border-0">
              <CardContent className="pt-4">
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#1e0f06", border: "1px solid rgba(212,122,60,.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 241 241" fill="#d47a3c">
                      <path d="M139.9 0h-38.8L0 241h61.6l21.5-55.5h75.7L180.4 241H241L139.9 0zm-40 137.2 23.6-60.8 23.6 60.8H99.9z"/>
                    </svg>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <strong style={{ fontSize: "14px", color: "#fff", fontWeight: 800 }}>Anthropic</strong>
                    <div style={{ marginTop: "6px", display: "flex", flexWrap: "wrap", gap: "4px" }}>
                      <span className="mv" style={{ color: "rgba(212,122,60,.85)", borderColor: "rgba(212,122,60,.2)" }}>Claude Sonnet 4.6</span>
                      <span className="mv" style={{ color: "rgba(212,122,60,.85)", borderColor: "rgba(212,122,60,.2)" }}>Claude Haiku 4.5</span>
                      <span className="mv" style={{ color: "rgba(212,122,60,.85)", borderColor: "rgba(212,122,60,.2)" }}>Claude Opus 4.8</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div style={{ marginTop: "2px", padding: "14px 18px", borderRadius: "12px", border: "1px solid rgba(255,255,255,.06)", background: "rgba(255,255,255,.02)" }}>
              <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "rgba(255,255,255,.25)", marginBottom: "8px" }}>Xử lý đa định dạng</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                <span className="ct">📝 Text</span><span className="ct">🖼️ Image</span><span className="ct">🎬 Video</span>
                <span className="ct">📜 Script</span><span className="ct">🎧 Audio</span><span className="ct">💻 Code</span>
                <span className="ct">📊 Data</span><span className="ct">🔗 URL / Doc</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
