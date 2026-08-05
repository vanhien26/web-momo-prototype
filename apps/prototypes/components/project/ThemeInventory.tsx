"use client";

import { useMemo } from "react";
import type { Project } from "@/data/types";
import { getClusterTheme, getProjectKeywordCount } from "@/lib/utils";
import ThemeRow, { type ThemeGroup } from "./ThemeRow";
import type { InventoryActions } from "./actions";

interface ThemeInventoryProps {
  project: Project;
  openThemes: Record<string, boolean>;
  openClusters: Record<string, boolean>;
  actions: InventoryActions;
}

export default function ThemeInventory({
  project,
  openThemes,
  openClusters,
  actions,
}: ThemeInventoryProps) {
  const themes = useMemo<ThemeGroup[]>(() => {
    const themeMap = new Map<string, typeof project.clusters>();
    project.clusters.forEach((cluster) => {
      const themeName = getClusterTheme(cluster);
      if (!themeMap.has(themeName)) themeMap.set(themeName, []);
      themeMap.get(themeName)!.push(cluster);
    });
    return [...themeMap.entries()]
      .map(([name, clusters], index) => {
        const primaries = clusters.flatMap((c) => c.keywords || []);
        return {
          id: `theme-${project.id}-${index}`,
          name,
          clusters,
          articles: primaries.length,
          published: primaries.filter((p) => p.status === "published").length,
          volume: clusters.reduce((sum, c) => sum + c.vol, 0),
          keywords: clusters.reduce(
            (sum, c) =>
              sum +
              c.keywords.reduce(
                (ks, p) => ks + 1 + (p.secondaries?.length || 0),
                0
              ),
            0
          ),
        };
      })
      .sort((a, b) => b.volume - a.volume);
  }, [project]);

  const totalArticles = project.clusters.reduce((s, c) => s + c.keywords.length, 0);
  const publishedArticles = project.clusters.reduce(
    (s, c) => s + c.keywords.filter((p) => p.status === "published").length,
    0
  );
  const totalKeywords = getProjectKeywordCount(project);
  const totalVolume = project.clusters.reduce((s, c) => s + c.vol, 0);

  // resolve which theme is open: default the first to open if no explicit state
  const isThemeOpen = (themeId: string, index: number) =>
    openThemes[themeId] ?? index === 0;

  return (
    <div className="cp-body">
      <section className="topic-overview">
        <div className="topic-head">
          <div>
            <span className="topic-title">Content Plan</span>
            <div className="topic-source">
              1 Primary Keyword = 1 bài viết AI · Secondary Keywords được triển khai trong
              cùng bài
            </div>
          </div>
          <div className="topic-actions">
            <div className="topic-summary">
              <span>
                Themes <strong>{themes.length}</strong>
              </span>
              <span>
                <span className="ai-mark">✦</span> AI Articles{" "}
                <strong>
                  {publishedArticles}/{totalArticles}
                </strong>
              </span>
              <span>
                Keywords <strong>{totalKeywords.toLocaleString("en-US")}</strong>
              </span>
              <span>
                Total Volume <strong>{totalVolume.toLocaleString("en-US")}</strong>
              </span>
            </div>
            <button className="topic-create" onClick={() => actions.createCluster()}>
              + Cluster
            </button>
          </div>
        </div>
        {themes.length > 0 ? (
          <div className="theme-inventory" aria-label="Content plan hierarchy">
            <div className="ti-head">
              <span>Theme / Cluster</span>
              <span>Primary Keyword</span>
              <span>Month Volume</span>
              <span>Ranking</span>
              <span>Status / Progress</span>
              <span>Actions</span>
            </div>
            {themes.map((theme, index) => (
              <ThemeRow
                key={theme.id}
                theme={theme}
                open={isThemeOpen(theme.id, index)}
                openClusters={openClusters}
                actions={actions}
              />
            ))}
          </div>
        ) : (
          <div className="cp-empty">Dự án chưa có dữ liệu Theme/Cluster/Keyword.</div>
        )}
      </section>
    </div>
  );
}
