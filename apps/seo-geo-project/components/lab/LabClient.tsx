"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Separator from "@radix-ui/react-separator";
import * as Tabs from "@radix-ui/react-tabs";
import * as Tooltip from "@radix-ui/react-tooltip";
import {
  ArrowUpRight,
  ExternalLink,
  FileText,
  Layers3,
  Maximize2,
  MoreHorizontal,
  PanelLeftClose,
  Search,
  Sparkles,
  SquareStack,
  Wrench,
} from "lucide-react";
import type { LabPrototype } from "@/lib/lab-registry";

interface LabClientProps {
  prototypes: LabPrototype[];
}

type CategoryFilter = "all" | string;

function normalizePreviewPath(proto: LabPrototype): string | null {
  const raw = proto.src ?? proto.address;
  if (!raw) return null;
  if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;

  const [pathname, query = ""] = raw.split("?");
  let normalized = pathname;

  if (!normalized.startsWith("/")) {
    normalized = `/${normalized}`;
  }

  if (normalized.startsWith("/demos/")) {
    return query ? `${normalized}?${query}` : normalized;
  }

  if (normalized.endsWith(".html")) {
    return query ? `${normalized}?${query}` : normalized;
  }

  const slug = normalized.replace(/^\/+/, "").replace(/\/+$/, "");
  if (!slug) return null;
  const demoPath = `/demos/${slug}.html`;
  return query ? `${demoPath}?${query}` : demoPath;
}

function groupLabel(category: string) {
  switch (category) {
    case "MiniWeb":
      return "Mini Web";
    case "Widget":
      return "Widget";
    case "MoSpark":
      return "MoSpark";
    case "Platform":
      return "Platform";
    default:
      return "Other";
  }
}

function categoryIcon(category: string) {
  switch (category) {
    case "MiniWeb":
      return <SquareStack className="lab-icon" />;
    case "Widget":
      return <Wrench className="lab-icon" />;
    case "MoSpark":
      return <Sparkles className="lab-icon" />;
    case "Platform":
      return <Layers3 className="lab-icon" />;
    default:
      return <FileText className="lab-icon" />;
  }
}

function categoryTone(category: string) {
  switch (category) {
    case "MiniWeb":
      return "var(--lab-teal)";
    case "Widget":
      return "var(--lab-amber)";
    case "MoSpark":
      return "var(--lab-pink)";
    case "Platform":
      return "var(--lab-blue)";
    default:
      return "var(--lab-violet)";
  }
}

function statTone(category: string) {
  switch (category) {
    case "MiniWeb":
      return "Mini Web";
    case "Widget":
      return "Widget";
    case "MoSpark":
      return "MoSpark";
    case "Platform":
      return "Platform";
    default:
      return "Other";
  }
}

export default function LabClient({ prototypes }: LabClientProps) {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(prototypes[0]?.id ?? "");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [previewOpen, setPreviewOpen] = useState(false);
  const hasSyncedUrl = useRef(false);

  const categories = useMemo(
    () => ["all", ...new Set(prototypes.map((item) => item.category || "Other"))],
    [prototypes]
  );

  const selected = useMemo(
    () => prototypes.find((item) => item.id === selectedId) ?? prototypes[0] ?? null,
    [prototypes, selectedId]
  );

  useEffect(() => {
    const id = new URL(window.location.href).searchParams.get("id");
    if (id && prototypes.some((item) => item.id === id)) {
      setSelectedId(id);
    }
  }, [prototypes]);

  useEffect(() => {
    if (!selected || hasSyncedUrl.current === false) {
      hasSyncedUrl.current = true;
      return;
    }

    const next = new URL(window.location.href);
    next.searchParams.set("id", selected.id);
    window.history.replaceState(null, "", `${next.pathname}?${next.searchParams.toString()}`);
  }, [selected]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return prototypes.filter((item) => {
      const matchesCategory = category === "all" || (item.category || "Other") === category;
      if (!matchesCategory) return false;
      if (!needle) return true;

      const haystack = [
        item.id,
        item.name,
        item.category,
        item.description,
        item.maturity,
        item.ownerGroup,
        item.src,
        item.address,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });
  }, [category, prototypes, query]);

  const groups = useMemo(() => {
    const map = new Map<string, LabPrototype[]>();
    for (const item of filtered) {
      const key = item.category || "Other";
      const bucket = map.get(key);
      if (bucket) bucket.push(item);
      else map.set(key, [item]);
    }
    return Array.from(map.entries()).map(([cat, items]) => ({ category: cat, items }));
  }, [filtered]);

  const previewPath = selected ? normalizePreviewPath(selected) : null;
  const totalTools = selected?.tools?.length ?? 0;
  const totalCount = prototypes.length;
  const filteredCount = filtered.length;
  const activeCategoryCount = category === "all"
    ? prototypes.length
    : prototypes.filter((item) => (item.category || "Other") === category).length;

  const openCurrentPreview = () => {
    if (!previewPath) return;
    window.open(previewPath, "_blank", "noopener,noreferrer");
  };

  return (
    <Tooltip.Provider delayDuration={180}>
      <Dialog.Root open={previewOpen} onOpenChange={setPreviewOpen}>
        <div className="lab-page">
          <header className="lab-topbar">
            <div className="lab-brand">
              <button
                type="button"
                className="lab-icon-button"
                onClick={() => setSidebarOpen((prev) => !prev)}
                aria-label={sidebarOpen ? "Ẩn sidebar" : "Hiện sidebar"}
              >
                <PanelLeftClose className="lab-icon" />
              </button>

              <a className="lab-brand-link" href="/lab">
                <span className="lab-mark">M</span>
                <span>
                  <strong>Prototype Lab</strong>
                  <small>React shell for the static demo store</small>
                </span>
              </a>

              <span className="lab-route">/lab</span>
            </div>

            <div className="lab-topbar-actions">
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <a className="lab-ghost-link" href="/lab.html">
                    Bản HTML cũ
                  </a>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="lab-tooltip" sideOffset={8}>
                    Mở lại store HTML tĩnh hiện tại
                    <Tooltip.Arrow className="lab-tooltip-arrow" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>

              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button type="button" className="lab-ghost-link lab-menu-trigger">
                    <MoreHorizontal className="lab-menu-icon" />
                    Actions
                  </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content className="lab-menu" sideOffset={10} align="end">
                    <DropdownMenu.Item className="lab-menu-item" onSelect={openCurrentPreview}>
                      <ExternalLink className="lab-menu-item-icon" />
                      Mở demo hiện tại
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="lab-menu-item" onSelect={() => setPreviewOpen(true)}>
                      <Maximize2 className="lab-menu-item-icon" />
                      Xem preview lớn
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator className="lab-menu-separator" />
                    <DropdownMenu.Item className="lab-menu-item" asChild>
                      <a href={previewPath ?? "#"} target="_blank" rel="noreferrer">
                        <ArrowUpRight className="lab-menu-item-icon" />
                        Mở tab mới
                      </a>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </div>
          </header>

          <main className={`lab-shell${sidebarOpen ? "" : " is-collapsed"}`}>
            <aside className="lab-sidebar">
              <div className="lab-sidebar-head">
                <div className="lab-kicker">Registry</div>
                <h1>Lab prototypes</h1>
                <p>
                  Chọn một prototype để xem metadata và preview live từ bộ HTML hiện có.
                </p>

                <label className="lab-search">
                  <Search className="lab-search-icon" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Tìm theo tên, id, mô tả..."
                  />
                </label>
              </div>

              <div className="lab-stats">
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <div>
                      <strong>{totalCount}</strong>
                      <span>prototype</span>
                    </div>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content className="lab-tooltip" sideOffset={8}>
                      Tổng số prototype trong registry
                      <Tooltip.Arrow className="lab-tooltip-arrow" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
                <div>
                  <strong>{filteredCount}</strong>
                  <span>đang lọc</span>
                </div>
                <div>
                  <strong>{activeCategoryCount}</strong>
                  <span>{statTone(category === "all" ? "Other" : category)}</span>
                </div>
              </div>

              <Tabs.Root value={category} onValueChange={(value) => setCategory(value)} className="lab-tabs">
                <Tabs.List className="lab-tabs-list" aria-label="Prototype category filter">
                  {categories.map((item) => (
                    <Tabs.Trigger key={item} value={item} className="lab-tab">
                      {item === "all" ? "Tất cả" : item}
                    </Tabs.Trigger>
                  ))}
                </Tabs.List>
              </Tabs.Root>

              <ScrollArea.Root className="lab-scroll-root">
                <ScrollArea.Viewport className="lab-scroll-viewport">
                  <div className="lab-groups">
                    <AnimatePresence initial={false}>
                      {groups.map((group) => (
                        <motion.section
                          key={group.category}
                          className="lab-group"
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                        >
                          <div className="lab-group-head">
                            <span>
                              {groupIcon(group.category)}
                              {groupLabel(group.category)}
                            </span>
                            <b>{group.items.length}</b>
                          </div>

                          <div className="lab-group-list">
                            {group.items.map((item, index) => {
                              const active = item.id === selected?.id;
                              return (
                                <motion.button
                                  type="button"
                                  key={item.id}
                                  className={`lab-item${active ? " is-active" : ""}`}
                                  onClick={() => setSelectedId(item.id)}
                                  initial={{ opacity: 0, y: 8 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.18, delay: Math.min(index * 0.02, 0.12) }}
                                >
                                  <div
                                    className="lab-item-accent"
                                    style={{ background: categoryTone(item.category || "Other") }}
                                  />
                                  <div className="lab-item-top">
                                    <strong>{item.name}</strong>
                                    <span>{item.maturity ?? item.category}</span>
                                  </div>
                                  <p>{item.description ?? "No description"}</p>
                                  <div className="lab-item-meta">
                                    <span>{item.id}</span>
                                    <span>{item.tools?.length ? `${item.tools.length} tools` : "single page"}</span>
                                  </div>
                                </motion.button>
                              );
                            })}
                          </div>
                        </motion.section>
                      ))}
                    </AnimatePresence>
                  </div>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar className="lab-scrollbar" orientation="vertical">
                  <ScrollArea.Thumb className="lab-scroll-thumb" />
                </ScrollArea.Scrollbar>
              </ScrollArea.Root>
            </aside>

            <section className="lab-workspace">
              {selected ? (
                <motion.div
                  key={selected.id}
                  className="lab-workspace-inner"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.26, ease: "easeOut" }}
                >
                  <div className="lab-detail">
                    <div className="lab-detail-copy">
                      <div className="lab-detail-eyebrow">
                        {selected.category} · {selected.ownerGroup ?? "Registry"}
                      </div>
                      <h2>{selected.name}</h2>
                      <p>{selected.description ?? "No description"}</p>

                      <div className="lab-detail-pills">
                        <span>{selected.id}</span>
                        <span>{selected.maturity ?? "Unknown maturity"}</span>
                        <span>{totalTools ? `${totalTools} child tools` : "Single page"}</span>
                      </div>
                    </div>

                    <div className="lab-detail-grid">
                      <div>
                        <span>Preview</span>
                        <strong>{previewPath ?? "-"}</strong>
                      </div>
                      <div>
                        <span>Category</span>
                        <strong>{selected.category}</strong>
                      </div>
                      <div>
                        <span>Source</span>
                        <strong>{selected.src ?? selected.address ?? "-"}</strong>
                      </div>
                      <div>
                        <span>Path mode</span>
                        <strong>{previewPath?.includes("?") ? "query" : "static"}</strong>
                      </div>
                    </div>
                  </div>

                  <Separator.Root className="lab-divider" />

                  <div className="lab-preview-shell">
                    <div className="lab-preview-head">
                      <div>
                        <span>Live preview</span>
                        <strong>Current demo frame</strong>
                      </div>
                      <div className="lab-preview-actions">
                        <Tooltip.Root>
                          <Tooltip.Trigger asChild>
                            <button type="button" className="lab-icon-button" onClick={() => setPreviewOpen(true)}>
                              <Maximize2 className="lab-icon" />
                            </button>
                          </Tooltip.Trigger>
                          <Tooltip.Portal>
                            <Tooltip.Content className="lab-tooltip" sideOffset={8}>
                              Mở preview full screen
                              <Tooltip.Arrow className="lab-tooltip-arrow" />
                            </Tooltip.Content>
                          </Tooltip.Portal>
                        </Tooltip.Root>

                        <Tooltip.Root>
                          <Tooltip.Trigger asChild>
                            <button type="button" className="lab-icon-button" onClick={openCurrentPreview}>
                              <ExternalLink className="lab-icon" />
                            </button>
                          </Tooltip.Trigger>
                          <Tooltip.Portal>
                            <Tooltip.Content className="lab-tooltip" sideOffset={8}>
                              Mở demo trong tab mới
                              <Tooltip.Arrow className="lab-tooltip-arrow" />
                            </Tooltip.Content>
                          </Tooltip.Portal>
                        </Tooltip.Root>
                      </div>
                    </div>

                    <div className="lab-preview-frame-wrap">
                      {previewPath ? (
                        <iframe
                          title={`Preview ${selected.name}`}
                          src={previewPath}
                          className="lab-frame"
                          sandbox="allow-forms allow-modals allow-popups allow-scripts allow-same-origin"
                        />
                      ) : (
                        <div className="lab-preview-empty">
                          <strong>Không có đường dẫn preview hợp lệ.</strong>
                          <span>Prototype này chưa có `src` để mở trong frame.</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="lab-preview-empty">
                  <strong>Chưa có prototype nào.</strong>
                  <span>Không đọc được registry từ assets/store.js.</span>
                </div>
              )}
            </section>
          </main>
        </div>

        <Dialog.Portal>
          <Dialog.Overlay className="lab-dialog-overlay" />
          <Dialog.Content className="lab-dialog-content">
            <Dialog.Title className="lab-dialog-title">
              {selected?.name ?? "Preview"}
            </Dialog.Title>
            <Dialog.Description className="lab-dialog-description">
              {selected?.description ?? "Live preview of the selected prototype."}
            </Dialog.Description>
            <div className="lab-dialog-frame-wrap">
              {previewPath ? (
                <iframe
                  title={`Full preview ${selected?.name ?? "prototype"}`}
                  src={previewPath}
                  className="lab-dialog-frame"
                  sandbox="allow-forms allow-modals allow-popups allow-scripts allow-same-origin"
                />
              ) : null}
            </div>
            <Dialog.Close asChild>
              <button type="button" className="lab-dialog-close">
                Đóng
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Tooltip.Provider>
  );
}

function groupIcon(category: string) {
  const icon = categoryIcon(category);
  return <span className="lab-group-icon">{icon}</span>;
}
