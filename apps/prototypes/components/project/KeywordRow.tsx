"use client";

import type { SecondaryKeyword } from "@/data/types";
import { getMockRanking } from "@/lib/utils";
import { RankPill } from "./shared";

interface KeywordRowProps {
  secondary: SecondaryKeyword;
  clusterId: string;
  primaryIndex: number;
  secondaryIndex: number;
  onEdit: (clusterId: string, primaryIndex: number, secondaryIndex: number) => void;
  onDelete: (clusterId: string, primaryIndex: number, secondaryIndex: number) => void;
}

export default function KeywordRow({
  secondary,
  clusterId,
  primaryIndex,
  secondaryIndex,
  onEdit,
  onDelete,
}: KeywordRowProps) {
  return (
    <div className="ti-keyword-row">
      <span className="ti-keyword-name" title={secondary.kw}>
        {secondary.kw}
      </span>
      <span className="ti-secondary-role">Secondary</span>
      <div className="ti-volume-cell">
        <strong>{Number(secondary.vol).toLocaleString("en-US")}</strong>
      </div>
      <div className="ti-rank-cell">
        <RankPill rank={getMockRanking(secondary.kw)} />
      </div>
      <span />
      <div className="ti-row-actions">
        <button
          className="ti-icon-btn"
          onClick={(e) => {
            e.stopPropagation();
            onEdit(clusterId, primaryIndex, secondaryIndex);
          }}
          title="Sửa Secondary Keyword"
        >
          ✎
        </button>
        <button
          className="ti-icon-btn danger"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(clusterId, primaryIndex, secondaryIndex);
          }}
          title="Xóa Secondary Keyword"
        >
          ×
        </button>
      </div>
    </div>
  );
}
