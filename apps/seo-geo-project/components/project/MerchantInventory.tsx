"use client";

import type { Project } from "@/data/types";
import { merchantKeywordCount } from "@/lib/utils";
import { ProjectOverview } from "./shared";
import MerchantRow from "./MerchantRow";
import type { MerchantActions } from "./actions";

interface MerchantInventoryProps {
  project: Project;
  openMerchant: Record<string, boolean>;
  actions: MerchantActions;
}

export default function MerchantInventory({
  project,
  openMerchant,
  actions,
}: MerchantInventoryProps) {
  const merchants = project.merchants || [];
  const published = merchants.filter((m) => m.contentStatus === "published").length;
  const keywordCount = merchants.reduce((s, m) => s + merchantKeywordCount(m), 0);

  return (
    <div className="merchant-project">
      <div className="dh">
        <div className="dh-top">
          <div>
            <h2 className="dh-title">{project.name}</h2>
          </div>
        </div>
      </div>
      <ProjectOverview project={project} />
      <div className="cp-body">
        <section className="topic-overview">
          <div className="topic-head">
            <div>
              <span className="topic-title">Content Plan</span>
              <div className="topic-source">
                Merchant &gt; Topic Cluster &gt; Primary Keyword &gt; Secondary Keyword
              </div>
            </div>
            <div className="topic-actions">
              <div className="topic-summary">
                <span>
                  Merchants <strong>{merchants.length}</strong>
                </span>
                <span>
                  <span className="ai-mark">✦</span> AI Articles{" "}
                  <strong>
                    {published}/{merchants.length}
                  </strong>
                </span>
                <span>
                  Keywords <strong>{keywordCount.toLocaleString("en-US")}</strong>
                </span>
                <span>
                  Monthly Volume{" "}
                  <strong>{Number(project.vol).toLocaleString("en-US")}</strong>
                </span>
              </div>
              <button className="topic-create" onClick={actions.createMerchant}>
                + Merchant
              </button>
            </div>
          </div>
          <div
            className="theme-inventory merchant-inventory"
            aria-label="Merchant content hierarchy"
          >
            <div className="ti-head">
              <span>Merchant</span>
              <span>Topic Cluster</span>
              <span>Primary Keyword</span>
              <span>Monthly Volume</span>
              <span>Ranking</span>
              <span>Actions</span>
            </div>
            {merchants.length > 0 ? (
              merchants.map((m, index) => (
                <MerchantRow
                  key={m.id}
                  merchant={m}
                  open={openMerchant[m.id] ?? index === 0}
                  actions={actions}
                />
              ))
            ) : (
              <div className="cp-empty">Chưa có Merchant nào trong Content Plan.</div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
