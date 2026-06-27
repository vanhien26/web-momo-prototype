'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getGroupedPrototypes, type Prototype } from '@/data/prototypes';

// ─── Search icon SVG ────────────────────────────────────────────────────────
function SearchIcon() {
  return (
    <svg className="sidebar-search-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="7" cy="7" r="5" />
      <path d="M11 11l3.5 3.5" strokeLinecap="round" />
    </svg>
  );
}

// ─── Chevron SVG ────────────────────────────────────────────────────────────
function ChevronIcon() {
  return (
    <svg className="sidebar-group-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M5 3l5 5-5 5" />
    </svg>
  );
}

// ─── Sidebar Component ──────────────────────────────────────────────────────
export default function Sidebar() {
  const pathname = usePathname();
  const groups = useMemo(() => getGroupedPrototypes(), []);
  const [search, setSearch] = useState('');
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const toggleGroup = (name: string) => {
    setCollapsed((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const filteredGroups = useMemo(() => {
    if (!search.trim()) return groups;
    const q = search.toLowerCase();
    return groups
      .map((g) => ({
        ...g,
        items: g.items.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.id.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q)
        ),
      }))
      .filter((g) => g.items.length > 0);
  }, [groups, search]);

  return (
    <aside className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <Link href="/" className="sidebar-logo" title="Quay lại trang chủ">
          <img src="/assets/images/momo-logo.svg" alt="MoMo Logo" />
        </Link>
        <div>
          <div className="sidebar-title">Prototype Store</div>
          <div className="sidebar-subtitle">MoMo Web Platform</div>
        </div>
      </div>

      {/* Search */}
      <div className="sidebar-search">
        <div className="sidebar-search-wrap">
          <SearchIcon />
          <input
            type="text"
            placeholder="Tìm prototype…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {filteredGroups.map((group) => {
          const isCollapsed = collapsed[group.name] && !search.trim();
          return (
            <div
              key={group.name}
              className={`sidebar-group ${isCollapsed ? 'collapsed' : ''}`}
            >
              <div
                className="sidebar-group-header"
                onClick={() => toggleGroup(group.name)}
              >
                <span className="sidebar-group-label">{group.label}</span>
                <span className="sidebar-group-count">{group.items.length}</span>
                <ChevronIcon />
              </div>

              <div className="sidebar-group-items">
                {group.items.map((proto, i) => (
                  <SidebarItem
                    key={proto.id}
                    proto={proto}
                    pathname={pathname}
                    index={i}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

// ─── Sidebar Item (Parent) ──────────────────────────────────────────────────
function SidebarItem({
  proto,
  pathname,
  index,
}: {
  proto: Prototype;
  pathname: string;
  index: number;
}) {
  const isCurrentActive = pathname === `/demo/${proto.id}`;
  
  // Kiểm tra xem có child nào active không (đệ quy)
  const hasActiveChild = useMemo(() => {
    if (!proto.tools) return false;
    const checkActive = (items: any[]): boolean => {
      return items.some(
        (item) =>
          pathname === `/demo/${item.id}` ||
          (item.tools && checkActive(item.tools))
      );
    };
    return checkActive(proto.tools);
  }, [proto.tools, pathname]);

  const shouldExpand = isCurrentActive || hasActiveChild;

  return (
    <div className="sidebar-item-wrap">
      <Link
        href={`/demo/${proto.id}`}
        className={`sidebar-item animate-slide-in ${isCurrentActive ? 'active' : ''}`}
        style={{ animationDelay: `${index * 20}ms` }}
        title={proto.description}
      >
        <span className="sidebar-item-label">{proto.name}</span>
      </Link>

      {/* Hiển thị child tools theo cơ chế Progressive Disclosure */}
      {shouldExpand && proto.tools && proto.tools.length > 0 && (
        <div className="sidebar-item-children animate-fade-in">
          {proto.tools.map((child) => (
            <SidebarChildItem
              key={child.id}
              tool={child}
              pathname={pathname}
              depth={1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Sidebar Child Item (Hỗ trợ đệ quy) ──────────────────────────────────────
function SidebarChildItem({
  tool,
  pathname,
  depth,
}: {
  tool: any;
  pathname: string;
  depth: number;
}) {
  const isCurrentActive = pathname === `/demo/${tool.id}`;
  
  const hasActiveChild = useMemo(() => {
    if (!tool.tools) return false;
    return tool.tools.some((t: any) => pathname === `/demo/${t.id}`);
  }, [tool.tools, pathname]);

  const shouldExpand = isCurrentActive || hasActiveChild;
  const paddingLeftVal = 24 + depth * 12; // Thụt lề sâu hơn theo cấp

  return (
    <div className="sidebar-child-item-wrap">
      <Link
        href={`/demo/${tool.id}`}
        className={`sidebar-item sidebar-child-item ${isCurrentActive ? 'active' : ''}`}
        style={{ paddingLeft: `${paddingLeftVal}px`, fontSize: '12.5px', opacity: isCurrentActive ? 1 : 0.85 }}
        title={tool.description}
      >
        <span className="sidebar-child-indicator">├─</span>
        <span className="sidebar-item-label">{tool.name}</span>
      </Link>

      {shouldExpand && tool.tools && tool.tools.length > 0 && (
        <div className="sidebar-item-children">
          {tool.tools.map((subChild: any) => (
            <SidebarChildItem
              key={subChild.id}
              tool={subChild}
              pathname={pathname}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
