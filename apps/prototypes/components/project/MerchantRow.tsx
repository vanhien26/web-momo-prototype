"use client";

import type { MerchantEntity } from "@/data/types";
import { merchantInventory, merchantTopicCluster, getMockRanking } from "@/lib/utils";
import { MERCHANT_ACTION_LABEL } from "@/data/projects";
import { RankPill } from "./shared";
import type { MerchantActions } from "./actions";

interface MerchantRowProps {
  merchant: MerchantEntity;
  open: boolean;
  actions: MerchantActions;
}

export default function MerchantRow({ merchant, open, actions }: MerchantRowProps) {
  const totalVolume = merchantInventory(merchant);
  const topicCluster = merchantTopicCluster(merchant);
  const topicClusterLabel =
    topicCluster.trim().toLowerCase() === merchant.name.trim().toLowerCase()
      ? "1 Topic Cluster"
      : topicCluster;
  const status = merchant.contentStatus || "none";
  const actionLabel = MERCHANT_ACTION_LABEL[status] || "Edit";

  return (
    <div className={`ti-theme${open ? " open" : ""}`}>
      <div
        className="ti-theme-row merchant-theme-row"
        onClick={() => actions.toggleMerchant(merchant.id)}
      >
        <div className="ti-theme-main">
          <span className="ti-arrow">▶</span>
          <span className="ti-theme-name" title={merchant.name}>
            {merchant.name}
          </span>
        </div>
        <div className="ti-cell-meta">
          <strong title={topicCluster}>{topicClusterLabel}</strong>
        </div>
        <div className="ti-primary-cell">
          <span className="ti-primary-kw" title={merchant.primary.kw}>
            {merchant.primary.kw}
          </span>
          <span className="ti-secondary-pill">
            {merchant.secondaries.length} Secondary
          </span>
        </div>
        <div className="ti-volume-cell">
          <strong>{totalVolume.toLocaleString("en-US")}</strong>
        </div>
        <div className="ti-rank-cell">
          <RankPill rank={getMockRanking(merchant.primary.kw)} />
        </div>
        <div className="ti-row-actions">
          <button
            className={`ti-action${status === "published" ? " published" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              actions.openBuilder(merchant.id);
            }}
          >
            {actionLabel}
          </button>
          <button
            className="ti-icon-btn"
            onClick={(e) => {
              e.stopPropagation();
              actions.editMerchant(merchant.id);
            }}
            title="Sửa Merchant"
          >
            ✎
          </button>
          <button
            className="ti-icon-btn danger"
            onClick={(e) => {
              e.stopPropagation();
              actions.deleteMerchant(merchant.id);
            }}
            title="Xóa Merchant"
          >
            ×
          </button>
        </div>
      </div>
      <div className="ti-theme-body">
        <div className="merchant-secondary-panel">
          <div className="ti-secondary-toolbar">
            <span>{merchant.secondaries.length} Secondary Keywords</span>
            <button
              className="ti-add-secondary"
              onClick={(e) => {
                e.stopPropagation();
                actions.createMerchantKeyword(merchant.id);
              }}
            >
              + Secondary Keyword
            </button>
          </div>
          {merchant.secondaries.map((keyword, keywordIndex) => (
            <div className="ti-keyword-row merchant-keyword-row" key={keywordIndex}>
              <span className="ti-keyword-name" title={keyword.kw}>
                {keyword.kw}
              </span>
              <span className="ti-secondary-role">Secondary</span>
              <div className="ti-volume-cell">
                <strong>{Number(keyword.vol).toLocaleString("en-US")}</strong>
              </div>
              <div className="ti-rank-cell">
                <RankPill rank={getMockRanking(keyword.kw)} />
              </div>
              <span />
              <div className="ti-row-actions">
                <button
                  className="ti-icon-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    actions.editMerchantKeyword(merchant.id, keywordIndex);
                  }}
                  title="Sửa Secondary Keyword"
                >
                  ✎
                </button>
                <button
                  className="ti-icon-btn danger"
                  onClick={(e) => {
                    e.stopPropagation();
                    actions.deleteMerchantKeyword(merchant.id, keywordIndex);
                  }}
                  title="Xóa Secondary Keyword"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
