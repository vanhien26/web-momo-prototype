'use client';

interface DemoFrameProps {
  /** Đường dẫn tới file HTML gốc, ví dụ: /demos/payments.html */
  src: string;
  /** Tiêu đề hiển thị */
  title: string;
}

/**
 * Component wrapper nhúng một demo HTML prototype vào iframe.
 *
 * Chiến lược: dùng iframe để giữ nguyên inline CSS/JS của từng demo
 * mà không cần chuyển đổi toàn bộ sang React ngay. Đây là bước trung gian
 * cho phép toàn bộ demo hoạt động trong Next.js layout mới ngay lập tức.
 */
export default function DemoFrame({ src, title }: DemoFrameProps) {
  // Tính đường dẫn tuyệt đối — các demo nằm ở root repo, ngoài apps/prototypes
  // Trong quá trình dev, ta sẽ dùng proxy hoặc static file serving
  // Trong production, file sẽ được phục vụ từ public/ hoặc qua rewrite
  const iframeSrc = src.startsWith('http') ? src : src;

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
      }}
    >
      <iframe
        src={iframeSrc}
        title={title}
        style={{
          flex: 1,
          width: '100%',
          border: 'none',
          background: '#faf9fb',
        }}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
      />
    </div>
  );
}
