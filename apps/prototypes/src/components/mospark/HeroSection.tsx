"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@momo-webplatform/mobase-next";
import ThemeToggle from "@/components/ThemeToggle";

export default function HeroSection() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vis");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".rv").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between border-b px-5 backdrop-blur-xl md:px-10"
        style={{ borderColor: "var(--border-color)", background: "var(--nav-bg)" }}>
        <a className="flex items-center gap-3 no-underline" href="/" aria-label="MoSpark Prototype Store" style={{ color: "var(--text-main)" }}>
          <span className="inline-flex items-center rounded-xl bg-black px-3 py-2" style={{ boxShadow: "0 8px 24px rgba(16,24,40,.16)" }}>
            <img className="block h-5 w-auto object-contain" src="https://static.momocdn.net/app/img/web-platform/logo-mospark-dark.svg" alt="MoSpark" decoding="async" />
          </span>
          <span className="hidden rounded-full border px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[.06em] sm:inline-flex" style={{ borderColor: "var(--border-color)", color: "var(--text-sub)" }}>
            Prototype Lab
          </span>
        </a>
        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[9px] font-medium uppercase tracking-[.05em] sm:inline-flex" style={{ borderColor: "rgba(212,0,110,0.15)", background: "#fff0f7", color: "#a50064" }}>
            <span className="dot-pulse h-1.5 w-1.5 rounded-full" style={{ background: "#a50064" }}></span>
            Internal Only
          </span>
          <ThemeToggle />
          <Link href="/lab" className={buttonVariants({ variant: "default", size: "sm" })}>
            Enter Lab
          </Link>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center overflow-hidden px-5 py-28 md:px-10">
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 75% 0%,rgba(165,0,100,.07),transparent 65%)" }}></div>

        <div className="relative z-10 mx-auto grid w-full items-center gap-12 md:grid-cols-[1fr_.75fr] md:gap-20" style={{ maxWidth: "1160px" }}>
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black bg-black px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-[.08em] text-white" style={{ boxShadow: "0 10px 30px rgba(16,24,40,.18)" }}>
              <span className="dot-pulse h-1.5 w-1.5 rounded-full" style={{ background: "#a50064" }}></span>
              <img className="block h-4 w-auto object-contain" src="https://static.momocdn.net/app/img/web-platform/logo-mospark-dark.svg" alt="MoSpark" decoding="async" />
              <span style={{ color: "rgba(255,255,255,0.65)" }}>Web Growth Platform</span>
            </div>

            <h1 className="momo-display font-black leading-[.94] tracking-[-0.025em]"
              style={{ fontSize: "clamp(44px,6.5vw,84px)", maxWidth: "580px", textWrap: "balance", color: "var(--text-main)" }}>
              <span style={{ color: "#a50064" }}>MoSpark</span> - Product Led Growth cùng MoMo.vn
            </h1>

            <p className="mt-6 leading-[1.8]" style={{ fontSize: "14.5px", maxWidth: "500px", color: "var(--text-sub)" }}>
              Nền tảng AI-powered Web App/Content của MoMo giúp vận hành và tăng trưởng mọi sản phẩm trên nền tảng Web - từ Landing Page, Mini Web, Web Application.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/lab" className={buttonVariants({ variant: "default", size: "lg" })}>
                Mở Prototype Lab
              </Link>
            </div>
          </div>

          <div className="rv os-panel">
            <div className="os-topbar">
              <div className="os-dots">
                <span className="os-d1"></span>
                <span className="os-d2"></span>
                <span className="os-d3"></span>
              </div>
              <span className="os-name">MoSpark Platform</span>
              <span className="os-live-badge">
                <span className="dot-pulse" style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#a50064", display: "inline-block", flexShrink: 0 }}></span>
                Live
              </span>
            </div>
            <div className="os-body">
              <div className="os-mods-col">
                <div className="os-col-label">Modules</div>
                <div className="os-mod-row"><span className="os-mod-dot mi1"></span>LP Builder</div>
                <div className="os-mod-row"><span className="os-mod-dot mi2"></span>GenAI Content</div>
                <div className="os-mod-row"><span className="os-mod-dot mi3"></span>Ads &amp; Widget</div>
                <div className="os-mod-row"><span className="os-mod-dot mi4"></span>Chatbot</div>
                <div className="os-mod-row"><span className="os-mod-dot mi5"></span>SEO/GEO</div>
                <div className="os-mod-row"><span className="os-mod-dot mi6"></span>Score Gate</div>
              </div>
              <div className="os-feed-col">
                <div className="os-col-label">Activity</div>
                <div className="os-feed-viewport">
                  <div className="os-feed-scroller">
                    <div className="os-act-entry"><span className="ae-hi">↑</span> LP Vay Nhanh · published</div>
                    <div className="os-act-entry"><span className="ae-ok">✓</span> Score 84 · BH xe máy · pass</div>
                    <div className="os-act-entry"><span className="ae-hi">→</span> Chatbot · 14 sessions</div>
                    <div className="os-act-entry"><span className="ae-ok">↑</span> SEO rank +3 · phạt nguội</div>
                    <div className="os-act-entry"><span className="ae-hi">⚡</span> GenAI draft · 1,247 từ</div>
                    <div className="os-act-entry"><span className="ae-ok">✓</span> Widget · blog.momo.vn · live</div>
                    <div className="os-act-entry"><span className="ae-hi">↑</span> LP BH ô tô · published</div>
                    <div className="os-act-entry"><span className="ae-ok">✓</span> Score 91 · VTS · pass</div>
                    <div className="os-act-entry"><span className="ae-hi">→</span> Chatbot · Credit · active</div>
                    <div className="os-act-entry"><span className="ae-ok">↑</span> SEO cite · AI Overview</div>
                    <div className="os-act-entry"><span className="ae-hi">↑</span> LP Vay Nhanh · published</div>
                    <div className="os-act-entry"><span className="ae-ok">✓</span> Score 84 · BH xe máy · pass</div>
                    <div className="os-act-entry"><span className="ae-hi">→</span> Chatbot · 14 sessions</div>
                    <div className="os-act-entry"><span className="ae-ok">↑</span> SEO rank +3 · phạt nguội</div>
                    <div className="os-act-entry"><span className="ae-hi">⚡</span> GenAI draft · 1,247 từ</div>
                    <div className="os-act-entry"><span className="ae-ok">✓</span> Widget · blog.momo.vn · live</div>
                    <div className="os-act-entry"><span className="ae-hi">↑</span> LP BH ô tô · published</div>
                    <div className="os-act-entry"><span className="ae-ok">✓</span> Score 91 · VTS · pass</div>
                    <div className="os-act-entry"><span className="ae-hi">→</span> Chatbot · Credit · active</div>
                    <div className="os-act-entry"><span className="ae-ok">↑</span> SEO cite · AI Overview</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="os-footer">
              <div className="os-track"><div className="os-fill"></div></div>
              <span className="os-metric">+47 sessions/min</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
