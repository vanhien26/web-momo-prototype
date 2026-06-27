"use client";

import { Button } from "@momo-webplatform/mobase";
import type { Cluster } from "@/data/types";
import { themeRanking } from "@/lib/utils";
import { RankPill } from "./shared";
import ClusterRow from "./ClusterRow";
import type { InventoryActions } from "./actions";

export interface ThemeGroup {
  id: string;
  name: string;
  clusters: Cluster[];
  articles: number;
  published: number;
  volume: number;
  keywords: number;
}

interface ThemeRowProps {
  theme: ThemeGroup;
  open: boolean;
  openClusters: Record<string, boolean>;
  actions: InventoryActions;
}

export default function ThemeRow({ theme, open, openClusters, actions }: ThemeRowProps) {
  const pubPct = theme.articles > 0 ? Math.round((theme.published / theme.articles) * 100) : 0;
  const clusterWord = theme.clusters.length === 1 ? "cluster" : "clusters";

  return (
    <div className={`ti-theme${open ? " open" : ""}`}>
      <div className="ti-theme-row" onClick={() => actions.toggleTheme(theme.id)}>
        <div className="ti-theme-main">
          <span className="ti-arrow">▶</span>
          <span className="ti-theme-name" title={theme.name}>
            {theme.name}
          </span>
          <span className="ti-theme-tools">
            <button
              className="ti-icon-btn"
              onClick={(e) => {
                e.stopPropagation();
                actions.renameTheme(theme.name);
              }}
              title="Đổi tên Theme"
            >
              ✎
            </button>
            <button
              className="ti-icon-btn danger"
              onClick={(e) => {
                e.stopPropagation();
                actions.deleteTheme(theme.name);
              }}
              title="Xóa Theme"
            >
              ×
            </button>
          </span>

        </div>
        <div className="ti-cell-meta">
          <strong>
            {theme.clusters.length.toLocaleString("en-US")} {clusterWord}
          </strong>
          <span>
            {theme.articles.toLocaleString("en-US")} bài viết AI ·{" "}
            {theme.keywords.toLocaleString("en-US")} keywords
          </span>
        </div>
        <div className="ti-volume-cell">
          <strong>{theme.volume.toLocaleString("en-US")}</strong>
        </div>
        <div className="ti-rank-cell">
          <RankPill rank={themeRanking(theme.clusters)} />
        </div>
        <div className="ti-published">
          <div className="ti-published-num">
            <strong>
              {theme.published}/{theme.articles}
            </strong>{" "}
            xuất bản
          </div>
          <div className="ti-published-bar">
            <div
              className={`ti-published-fill${pubPct === 0 ? " zero" : ""}`}
              style={{ width: `${pubPct}%` }}
            />
          </div>
        </div>
        <div className="ti-row-actions">
          <Button
            variant="outline"
            size="sm"
            className="border-dashed border-pink-300 text-pink-500 hover:bg-pink-50 w-full"
            onClick={(e) => {
              e.stopPropagation();
              actions.createCluster(theme.name);
            }}
          >
            + Cluster mới
          </Button>
        </div>
      </div>
      <div className="ti-theme-body">
        {[...theme.clusters]
          .sort((a, b) => b.vol - a.vol)
          .map((cluster) => (
            <ClusterRow
              key={cluster.id}
              cluster={cluster}
              open={!!openClusters[cluster.id]}
              actions={actions}
            />
          ))}
      </div>
    </div>
  );
}
