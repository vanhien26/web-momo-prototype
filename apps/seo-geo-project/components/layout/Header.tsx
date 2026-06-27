"use client";

interface HeaderProps {
  onToggleSidebar: () => void;
}

export default function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header>
      <div className="h-left">
        <button
          className="sidebar-toggle"
          onClick={onToggleSidebar}
          aria-label="Mở menu dự án"
          type="button"
        >
          ☰
        </button>
        <a href="../lab.html" className="h-back">
          ← Lab
        </a>
        <div className="h-div" />
        <div className="h-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg"
            alt="MoMo"
            style={{ width: "80%", height: "80%", objectFit: "contain", display: "block" }}
          />
        </div>
        <div className="h-logo" style={{ background: "#fff", border: "1px solid var(--line)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://homepage.momocdn.net/img/4f2fa6b0-9f96-4077-b210-6e848b7d7104-1-260622153405.png"
            alt="Web Platform"
            style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
          />
        </div>
        <div>
          <div className="h-brand-name">SEO/GEO Project</div>
          <div className="h-brand-sub">MoSpark · Growth Strategy Control Center</div>
        </div>
      </div>
      <span className="h-badge">MOSPARK · SEO/GEO</span>
      <div className="h-user">
        <div className="h-avatar">WP</div>
        <span className="h-user-name">Web Platform · SEO &amp; GEO</span>
      </div>
    </header>
  );
}
