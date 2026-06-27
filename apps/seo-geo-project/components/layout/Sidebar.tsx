"use client";

import { useMemo, useState } from "react";
import { Button } from "@momo-webplatform/mobase";
import type { Project } from "@/data/types";
import ProjectCard from "@/components/project/ProjectCard";

interface SidebarProps {
  projects: Project[];
  selectedId: string | null;
  open: boolean;
  onSelect: (id: string) => void;
  onCloseMobile: () => void;
  onNewProject: () => void;
}

export default function Sidebar({
  projects,
  selectedId,
  open,
  onSelect,
  onCloseMobile,
  onNewProject,
}: SidebarProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) => !query || p.name.toLowerCase().includes(query.toLowerCase())
      ),
    [projects, query]
  );

  const handleSelect = (id: string) => {
    onSelect(id);
    if (typeof window !== "undefined" && window.innerWidth <= 980) onCloseMobile();
  };

  return (
    <aside className={`panel-left${open ? " open" : ""}`} id="panelLeft">
      <div className="pl-head">
        <div className="pl-title">
          Dự án SEO/GEO
          <span className="pl-count">{filtered.length}</span>
        </div>
        <div className="pl-search">
          <span className="pl-search-icon">⌕</span>
          <input
            type="text"
            placeholder="Tìm dự án..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="project-list">
        {filtered.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            selected={selectedId === p.id}
            onSelect={handleSelect}
          />
        ))}
      </div>
      <div className="pl-foot">
        <Button variant="outline" size="sm" className="w-full border-dashed border-pink-300 text-pink-500 hover:bg-pink-50" onClick={onNewProject}>
          + Dự án mới
        </Button>
      </div>
    </aside>
  );
}
