import type { Cluster, Keyword, MerchantEntity, Project } from "@/data/types";
import { CLUSTER_THEME } from "@/data/projects";

export function fmtVol(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return Math.round(n / 1000) + "K";
  return n + "";
}

export function getSovClass(sov: number | null): string | null {
  if (sov === null) return null;
  return sov >= 40 ? "f-leader" : sov >= 20 ? "f-mid" : "f-low";
}

export function kwPublished(c: Cluster): number {
  return c.keywords.filter((k) => k.status === "published").length;
}

export function projKwPublished(p: Project): number {
  return p.clusters.reduce((s, c) => s + kwPublished(c), 0);
}

export function projKwTotal(p: Project): number {
  return p.clusters.reduce((s, c) => s + c.keywords.length, 0);
}

export function projSecondaryTotal(p: Project): number {
  return p.clusters.reduce(
    (sum, cluster) =>
      sum +
      cluster.keywords.reduce(
        (keywordSum, keyword) => keywordSum + (keyword.secondaries?.length || 0),
        0
      ),
    0
  );
}

export function merchantInventory(m: MerchantEntity): number {
  return m.primary.vol + m.secondaries.reduce((sum, k) => sum + k.vol, 0);
}

export function merchantKeywordCount(m: MerchantEntity): number {
  return 1 + m.secondaries.length;
}

export function merchantTopicCluster(m: MerchantEntity): string {
  return m.topicCluster || `${m.name}: thương hiệu, sản phẩm và thanh toán`;
}

export function getProjectKeywordCount(p: Project): number {
  if (p.isDistributed && p.merchants) {
    return p.merchants.reduce((sum, m) => sum + merchantKeywordCount(m), 0);
  }
  return projKwTotal(p) + projSecondaryTotal(p);
}

export function getProjectContentStats(p: Project): {
  total: number;
  pending: number;
} {
  if (p.isDistributed && p.merchants) {
    const total = p.merchants.length;
    const pending = p.merchants.filter(
      (m) => (m.contentStatus || "none") !== "published"
    ).length;
    return { total, pending };
  }
  const articles = p.clusters.flatMap((cluster) => cluster.keywords || []);
  return {
    total: articles.length,
    pending: articles.filter((k) => (k.status || "none") !== "published").length,
  };
}

export function getClusterTheme(cluster: Cluster): string {
  return cluster.theme || CLUSTER_THEME[cluster.id] || cluster.name;
}

/* Mock SERP ranking per keyword (deterministic seed based on string hash). */
export function getMockRanking(keyword: string | null | undefined): number | null {
  if (!keyword) return null;
  const str = String(keyword).toLowerCase();
  let hash = 0;
  for (let i = 0; i < str.length; i++)
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
  const seed = Math.abs(hash) % 100;
  if (seed < 12) return null;
  if (seed < 22) return Math.floor(seed / 4) + 1;
  if (seed < 42) return Math.floor((seed - 22) / 2) + 6;
  if (seed < 70) return Math.floor((seed - 42) / 1.5) + 16;
  return Math.floor(seed) + 5;
}

export function rankPillClass(rank: number | null): string {
  if (rank === null || rank === undefined) return "out";
  return rank <= 3 ? "top3" : rank <= 10 ? "top10" : rank <= 30 ? "top30" : "top100";
}

export function clusterRanking(cluster: Cluster): number | null {
  const primary = (cluster.keywords && cluster.keywords[0]) || null;
  return getMockRanking(primary && primary.kw);
}

export function themeRanking(clusters: Cluster[]): number | null {
  const ranks = clusters
    .map((c) => getMockRanking(((c.keywords || [])[0] || {}).kw))
    .filter((r): r is number => r !== null);
  if (!ranks.length) return null;
  return Math.min(...ranks);
}

export function getArticleAction(keyword: Keyword): {
  label: string;
  className: string;
} {
  if (keyword.status === "published") return { label: "View", className: " published" };
  if (keyword.status && keyword.status !== "none")
    return { label: "Continue", className: "" };
  return { label: "Write", className: "" };
}

export const STATUS_PILL_LABEL: Record<string, string> = {
  published: "Đã xuất bản",
  draft: "Bản nháp",
  outline: "Outline review",
  "outline-review": "Outline review",
  "draft-review": "Review bản nháp",
  none: "Chưa tạo",
};

export function statusPillClass(status: string): string {
  return status === "published"
    ? "published"
    : status === "draft" || status === "draft-review"
    ? "draft"
    : status && status !== "none"
    ? "outline"
    : "none";
}

export function recalculateProject(project: Project): void {
  project.clusters.forEach((cluster) => {
    cluster.vol = cluster.keywords.reduce(
      (sum, primary) =>
        sum +
        Number(primary.vol || 0) +
        (primary.secondaries || []).reduce(
          (secondarySum, secondary) => secondarySum + Number(secondary.vol || 0),
          0
        ),
      0
    );
  });
  project.vol = project.clusters.reduce((sum, cluster) => sum + cluster.vol, 0);
}
