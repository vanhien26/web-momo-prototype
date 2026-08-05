"use client";

import type { Cluster, Keyword } from "@/data/types";
import {
  clusterRanking,
  statusPillClass,
  STATUS_PILL_LABEL,
  getArticleAction,
} from "@/lib/utils";
import { RankPill } from "./shared";
import KeywordRow from "./KeywordRow";
import type { InventoryActions } from "./actions";

interface ClusterRowProps {
  cluster: Cluster;
  open: boolean;
  actions: InventoryActions;
}

export default function ClusterRow({ cluster, open, actions }: ClusterRowProps) {
  const primary: Keyword =
    cluster.keywords[0] || {
      kw: "(chưa có)",
      vol: 0,
      status: "none",
      rank: null,
      intent: "info",
      secondaries: [],
    };
  const secondaries = primary.secondaries || [];
  const action = getArticleAction(primary);
  const sLbl = STATUS_PILL_LABEL[primary.status] || "Chưa tạo";
  const sClass = statusPillClass(primary.status);

  return (
    <div className={`ti-cluster${open ? " open" : ""}`}>
      <div className="ti-cluster-row" onClick={() => actions.toggleCluster(cluster.id)}>
        <div className="ti-cluster-main">
          <span className="ti-arrow">▶</span>
          {cluster.funnel && (
            <span className="ti-cluster-funnel">{cluster.funnel.toUpperCase()}</span>
          )}
          <span className="ti-cluster-name" title={cluster.name}>
            {cluster.name}
          </span>
        </div>
        <div className="ti-primary-cell">
          <span className="ti-primary-label">Primary KW</span>
          <span className="ti-primary-kw" title={primary.kw}>
            {primary.kw}
          </span>
          {secondaries.length > 0 && (
            <span className="ti-secondary-pill">{secondaries.length} Secondary</span>
          )}
        </div>
        <div className="ti-volume-cell">
          <strong>{Number(cluster.vol).toLocaleString("en-US")}</strong>
        </div>
        <div className="ti-rank-cell">
          <RankPill rank={clusterRanking(cluster)} />
        </div>
        <div className="ti-status-cell">
          <span className={`ti-status-pill ${sClass}`}>{sLbl}</span>
        </div>
        <div className="ti-row-actions">
          <button
            className={`ti-action${action.className}`}
            onClick={(e) => {
              e.stopPropagation();
              actions.writeOrView(cluster.id, primary);
            }}
          >
            <span className="ai-mark">✦</span> {action.label}
          </button>
          <button
            className="ti-icon-btn"
            onClick={(e) => {
              e.stopPropagation();
              actions.editCluster(cluster.id);
            }}
            title="Sửa Cluster"
          >
            ✎
          </button>
          <button
            className="ti-icon-btn danger"
            onClick={(e) => {
              e.stopPropagation();
              actions.deleteCluster(cluster.id);
            }}
            title="Xóa Cluster"
          >
            ×
          </button>
        </div>
      </div>
      <div className="ti-keywords">
        <div className="ti-secondary-toolbar">
          <span>{secondaries.length} Secondary Keywords cùng bài viết</span>
          <button
            className="ti-add-secondary"
            onClick={(e) => {
              e.stopPropagation();
              actions.createSecondary(cluster.id, 0);
            }}
          >
            + Secondary Keyword
          </button>
        </div>
        {secondaries.map((s, idx) => (
          <KeywordRow
            key={idx}
            secondary={s}
            clusterId={cluster.id}
            primaryIndex={0}
            secondaryIndex={idx}
            onEdit={actions.editSecondary}
            onDelete={actions.deleteSecondary}
          />
        ))}
      </div>
    </div>
  );
}
