import Link from 'next/link';
import { getGroupedPrototypes } from '@/data/prototypes';

export default function HomePage() {
  const groups = getGroupedPrototypes();

  return (
    <div className="home-container">
      {/* Hero */}
      <div className="home-hero animate-fade-in">
        <h1>MoMo Prototype Store</h1>
        <p>
          Kho prototype tương tác của Web Platform — duyệt theo nhóm, mở demo
          trực tiếp trong sidebar hoặc click vào card bên dưới.
        </p>
      </div>

      {/* Group Cards — dùng Mobase CSS tokens */}
      <div className="home-grid">
        {groups.map((group, gi) => (
          <Link
            key={group.name}
            href={group.items[0] ? `/demo/${group.items[0].id}` : '#'}
            className="home-card animate-fade-in"
            style={{ animationDelay: `${gi * 80}ms` }}
          >
            <div className="home-card-header">
              <span className="home-card-badge">{group.summary?.eyebrow || group.label}</span>
              <span className="home-card-count">{group.items.length}</span>
            </div>
            <div className="home-card-title">
              {group.summary?.title || group.label}
            </div>
            <div className="home-card-desc">
              {group.summary?.description || `${group.items.length} prototype(s)`}
            </div>
            <div className="home-card-examples">
              {group.summary?.examples || group.items.map((p) => p.name).join(' · ')}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
