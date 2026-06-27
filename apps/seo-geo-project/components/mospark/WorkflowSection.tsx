"use client";

import { useState, useCallback } from "react";
import { HeadingBlock } from "@momo-webplatform/mobase";
import { PLG_WORKFLOW_STEPS } from "@/data/workflow";

const FLOW_LABELS = ["Context", "Research + Mapping", "Structure", "Content", "SEO/GEO", "Entity", "W2A"];

export default function WorkflowSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback((index: number) => {
    const safe = Math.max(0, Math.min(index, PLG_WORKFLOW_STEPS.length - 1));
    setActiveIndex(safe);
  }, []);

  const step = PLG_WORKFLOW_STEPS[activeIndex];
  const padded = String(activeIndex + 1).padStart(2, "0");
  const progress = `${(activeIndex / (PLG_WORKFLOW_STEPS.length - 1)) * 100}%`;

  return (
    <section id="plg-workflow" className="workflow-section">
      <div className="workflow-wrap">
        <div className="rv workflow-head">
          <div>
            <HeadingBlock
              tagline="Quy trình chuẩn hóa"
              title="Quy trình chuẩn hóa PLG Project trên MoSpark"
              description="Case Phạt Nguội minh họa cách MoSpark chuẩn hóa một dự án từ business context, keyword mapping, web structure, content production, SEO/GEO, entity follow-up đến đo Web-to-App."
              tagHeading="h2"
              colorScheme="black"
              align="left"
            />
          </div>
          <aside className="workflow-case-badge" aria-label="Case study Phạt Nguội">
            <strong>Case study: Phạt Nguội</strong>
            <span>Từ nhu cầu tra cứu vi phạm giao thông đến content, widget tra cứu, app open và thanh toán trong MoMo.</span>
          </aside>
        </div>

        <div className="rv workflow-shell" aria-label="Workflow triển khai PLG Project trên MoSpark">
          <div className="workflow-steps" role="tablist" aria-label="Các bước triển khai">
            {PLG_WORKFLOW_STEPS.map((s, i) => {
              const idx = String(i + 1).padStart(2, "0");
              const isActive = i === activeIndex;
              return (
                <button
                  key={i}
                  className={`workflow-step${isActive ? " active" : ""}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => goTo(i)}
                  onKeyDown={(e) => {
                    if (!["ArrowDown","ArrowRight","ArrowUp","ArrowLeft","Home","End"].includes(e.key)) return;
                    e.preventDefault();
                    const next =
                      e.key === "Home" ? 0
                      : e.key === "End" ? PLG_WORKFLOW_STEPS.length - 1
                      : i + (e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1);
                    goTo(Math.max(0, Math.min(next, PLG_WORKFLOW_STEPS.length - 1)));
                  }}
                >
                  <span className="workflow-step-index">{idx}</span>
                  <span>
                    <h3>{s.title}</h3>
                    <p>{s.desc.split(".")[0]}.</p>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="workflow-panel" role="tabpanel" aria-live="polite">
            <div className="workflow-panel-content">
              <div className="workflow-panel-top">
                <span className="workflow-panel-label">Phạt Nguội PLG Project</span>
                <span className="workflow-panel-step">Step {padded} / 07</span>
              </div>
              <h3 className="momo-display">{step.title}</h3>
              <p className="workflow-panel-desc">{step.desc}</p>

              <div className="workflow-meta-grid">
                <div className="workflow-meta">
                  <small>Input</small>
                  <span>{step.input}</span>
                </div>
                <div className="workflow-meta">
                  <small>MoSpark role</small>
                  <span>{step.role}</span>
                </div>
                <div className="workflow-meta">
                  <small>Output</small>
                  <span>{step.output}</span>
                </div>
              </div>

              <div className="workflow-output">
                <strong>Deliverables step {padded}</strong>
                <ul>
                  {step.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="workflow-proof">
                <b>Why it matters:</b>
                <span>{step.proof}</span>
              </div>
            </div>

            <div className="workflow-flow-map" aria-hidden="true" style={{ ["--workflow-progress" as string]: progress }}>
              {FLOW_LABELS.map((label, i) => (
                <span
                  key={i}
                  className={`${i <= activeIndex ? "on" : ""} ${i === activeIndex ? "current" : ""}`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
