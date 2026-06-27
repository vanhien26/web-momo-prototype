"use client";

import type { Project } from "@/data/types";
import { fmtVol, getProjectKeywordCount, rankPillClass } from "@/lib/utils";

export function RankPill({ rank }: { rank: number | null }) {
  if (rank === null || rank === undefined) {
    return (
      <span className="ti-rank-pill out" title="Ngoài Top 100">
        Out
      </span>
    );
  }
  return (
    <span
      className={`ti-rank-pill ${rankPillClass(rank)}`}
      title="Vị trí trung bình Google SERP"
    >
      <small>#</small>
      {rank}
    </span>
  );
}

export function ProjectOverview({ project }: { project: Project }) {
  const totalKeywords = getProjectKeywordCount(project);
  return (
    <section className="project-overview">
      <div className="po-title">Project Overview</div>
      <div className="po-grid">
        <div className="po-item">
          <span className="po-label">URL</span>
          <a
            className="po-value url"
            href={`https://${project.microsite}`}
            target="_blank"
            rel="noreferrer"
          >
            {project.microsite}
          </a>
        </div>
        <div className="po-item">
          <span className="po-label">Total Keywords</span>
          <strong className="po-value">{totalKeywords.toLocaleString("en-US")}</strong>
          <span className="po-sub">primary + secondary</span>
        </div>
        <div className="po-item">
          <span className="po-label">Total Volume</span>
          <strong className="po-value">{fmtVol(project.vol)}</strong>
          <span className="po-sub">searches/tháng</span>
        </div>
        <div className="po-item">
          <span className="po-label">Division</span>
          <strong className="po-value">{project.division}</strong>
          <span className="po-sub">project owner</span>
        </div>
      </div>
    </section>
  );
}
