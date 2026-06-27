"use client";

import { useState } from "react";
import type { ProjectContext } from "@/data/types";

export default function BusinessContext({ ctx }: { ctx: Partial<ProjectContext> }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="info-sections">
      <div className={`info-sec collapsible${open ? " open" : ""}`}>
        <div className="info-sec-head" onClick={() => setOpen((o) => !o)}>
          <button
            className="info-toggle"
            type="button"
            aria-label="Mở hoặc đóng Business Context"
            aria-expanded={open}
          >
            ▶
          </button>
          <span className="info-sec-title">Business Context</span>
          <span className="info-sec-summary">Thông tin đầy đủ dự án</span>
        </div>
        <div className="info-sec-body">
          <div className="info-sec-content">
            <div className="biz-grid">
              <div style={{ gridColumn: "1/-1" }}>
                <div className="biz-label">Mô tả sản phẩm</div>
                <div className="biz-val">{ctx.description || "Chưa cập nhật"}</div>
              </div>
              <div>
                <div className="biz-label">Value Proposition</div>
                <div className="biz-val">{ctx.valueProp || "Chưa cập nhật"}</div>
              </div>
              <div>
                <div className="biz-label">Target Audience</div>
                <div className="biz-val">{ctx.audience || "Chưa cập nhật"}</div>
              </div>
              <div>
                <div className="biz-label">User Problem</div>
                <div className="biz-val">{ctx.userProblem || "Chưa cập nhật"}</div>
              </div>
              <div>
                <div className="biz-label">Growth Outcome</div>
                <div className="biz-val">{ctx.growthOutcome || "Chưa cập nhật"}</div>
              </div>
              <div style={{ gridColumn: "1/-1" }}>
                <div className="biz-label">North Star Metric</div>
                <div className="biz-val">{ctx.northStar || "Chưa cập nhật"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
