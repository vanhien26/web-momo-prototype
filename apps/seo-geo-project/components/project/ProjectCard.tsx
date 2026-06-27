"use client";

import type { Project } from "@/data/types";
import { fmtVol, getProjectContentStats } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  selected: boolean;
  onSelect: (id: string) => void;
}

export default function ProjectCard({ project, selected, onSelect }: ProjectCardProps) {
  const content = getProjectContentStats(project);
  return (
    <div
      className={`pi${selected ? " sel" : ""}`}
      onClick={() => onSelect(project.id)}
    >
      <div className="pi-top">
        <div className="pi-name">{project.name}</div>
      </div>
      <div className="pi-division">{project.division}</div>
      <div className="pi-stats">
        <div className="pi-inventory">
          <strong>{fmtVol(project.vol)}</strong>
          <span>/tháng</span>
        </div>
        <div
          className={`pi-content-count${content.pending === 0 ? " done" : ""}`}
          title={`${content.pending}/${content.total} content chưa xuất bản`}
        >
          <strong>{content.pending}</strong>
          <span>content cần viết</span>
        </div>
      </div>
    </div>
  );
}
