"use client";

import { useEffect, useState, useCallback } from "react";
import { Button } from "@momo-webplatform/mobase";
import type { Keyword } from "@/data/types";
import { fmtVol } from "@/lib/utils";

export interface WizardTarget {
  keyword: Keyword;
  projectName: string;
}

interface WriteWizardProps {
  target: WizardTarget | null;
  onClose: () => void;
  onChoosePageType: (type: "blog" | "landing", h1: string, h2List: string[]) => void;
}

const OUTLINE_H2: Record<Keyword["intent"], string[]> = {
  info: [
    "Định nghĩa & Cách hoạt động",
    "Tại sao điều này quan trọng với người dùng?",
    "Hướng dẫn thực hiện trên MoMo (step-by-step)",
    "So sánh với phương án khác trên thị trường",
    "FAQ — Câu hỏi thường gặp",
    "Kết luận & CTA",
  ],
  comm: [
    "Tổng quan thị trường & các lựa chọn hiện có",
    "Bảng so sánh theo tiêu chí cụ thể",
    "Phân tích ưu/nhược điểm từng lựa chọn",
    "Khuyến nghị theo profile người dùng",
    "FAQ & Kết luận",
  ],
  trans: [
    "Điều kiện & Chuẩn bị",
    "Các bước thực hiện",
    "Lưu ý & Xử lý lỗi thường gặp",
    "CTA Deep-link",
  ],
};

const H1_SUFFIX: Record<Keyword["intent"], string> = {
  info: "Giải thích chi tiết & Hướng dẫn thực tế",
  comm: "So sánh & Đánh giá toàn diện",
  trans: "Hướng dẫn nhanh trong 3 bước",
};

export default function WriteWizard({
  target,
  onClose,
  onChoosePageType,
}: WriteWizardProps) {
  const k = target?.keyword;

  const [stage, setStage] = useState(1);
  const [generating, setGenerating] = useState(true);
  const [genNonce, setGenNonce] = useState(0);
  const [h1, setH1] = useState(k ? `${k.kw} — ${H1_SUFFIX[k.intent]}` : "");
  const [h2List, setH2List] = useState<string[]>(
    k ? OUTLINE_H2[k.intent].slice() : []
  );
  const [draftProgress, setDraftProgress] = useState(0);

  const resetForStage1 = useCallback(() => {
    if (!k) return;
    setGenerating(true);
    setH1(`${k.kw} — ${H1_SUFFIX[k.intent]}`);
    setH2List(OUTLINE_H2[k.intent].slice());
    setGenNonce((n) => n + 1);
  }, [k]);

  // Outline "generation" timer (re-runs on regenerate via genNonce).
  useEffect(() => {
    if (!k) return;
    const id = setTimeout(() => setGenerating(false), 1400);
    return () => clearTimeout(id);
  }, [k, genNonce]);

  // Draft generation progress when entering stage 2.
  useEffect(() => {
    if (stage !== 2) return;
    let n = 0;
    const total = h2List.length || 1;
    const id = setInterval(() => {
      n += 1;
      setDraftProgress(Math.min(Math.round((n / total) * 100), 100));
      if (n >= total) clearInterval(id);
    }, 500);
    return () => clearInterval(id);
  }, [stage, h2List.length]);

  if (!target || !k) return null;

  const draftDone = stage === 2 && draftProgress >= 100;

  const stepClass = (s: number) =>
    `wiz-step${s === stage ? " active" : ""}${s < stage ? " done" : ""}`;

  const updateH2 = (idx: number, val: string) =>
    setH2List((list) => list.map((h, i) => (i === idx ? val : h)));
  const removeH2 = (idx: number) =>
    setH2List((list) => list.filter((_, i) => i !== idx));
  const addH2 = () =>
    setH2List((list) => [...list, "Mục mới — viết tiêu đề H2 tại đây"]);

  const handleOverlay = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="wiz-overlay show" onClick={handleOverlay}>
      <div className="wiz-modal" role="dialog" aria-modal="true">
        <div className="wiz-hd">
          <div className="wiz-hd-l">
            <div className="wiz-icon">✦</div>
            <div className="wiz-hd-title">
              <span>Viết bài cho</span>
              <span className="wiz-hd-kw">
                &quot;{k.kw}&quot; - {fmtVol(k.vol)}/tháng - {k.intent.toUpperCase()}
              </span>
              <span className="wiz-model-badge">claude-sonnet-4-6</span>
            </div>
          </div>
          <button className="wiz-close" type="button" onClick={onClose} aria-label="Đóng">
            ✕
          </button>
        </div>

        <div className="wiz-stepper">
          <div className={stepClass(1)}>
            <span className="wiz-step-num">1</span>
            <span className="wiz-step-lbl">Outline &amp; Chỉnh sửa</span>
          </div>
          <div className={stepClass(2)}>
            <span className="wiz-step-num">2</span>
            <span className="wiz-step-lbl">Bài nháp chi tiết</span>
          </div>
          <div className={stepClass(3)}>
            <span className="wiz-step-num">3</span>
            <span className="wiz-step-lbl">Page Type</span>
          </div>
        </div>

        <div className="wiz-body">
          {/* Stage 1 */}
          {stage === 1 && (
            <div className="wiz-stage active">
              <div className={`wiz-gen-status${generating ? "" : " done"}`}>
                {generating ? (
                  <>
                    <div className="wiz-gen-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <span>Đang phân tích keyword và tạo outline...</span>
                  </>
                ) : (
                  <span>
                    ✓ Outline đã tạo xong - chỉnh sửa H1 và các H2 bên dưới trước khi tạo
                    bài nháp
                  </span>
                )}
              </div>

              {!generating && (
                <div>
                  <p className="wiz-editor-tip">
                    Outline đã tạo xong - bạn có thể chỉnh sửa H1 và các H2 trực tiếp bên
                    dưới trước khi tạo bài nháp chi tiết.
                  </p>
                  <div className="wiz-h1-field">
                    <label className="wiz-h1-label" htmlFor="wizH1Input">
                      H1 (tiêu đề chính)
                    </label>
                    <input
                      className="wiz-h1-input"
                      id="wizH1Input"
                      type="text"
                      value={h1}
                      onChange={(e) => setH1(e.target.value)}
                      placeholder="Nhập H1..."
                    />
                  </div>
                  <div className="wiz-h2-section">
                    <div className="wiz-h2-label">
                      <span>H2 (các mục con)</span>
                      <span>{h2List.length} mục</span>
                    </div>
                    <div className="wiz-h2-list">
                      {h2List.map((h, idx) => (
                        <div className="wiz-h2-row" key={idx}>
                          <span className="wiz-h2-idx">{idx + 1}</span>
                          <input
                            className="wiz-h2-input"
                            type="text"
                            value={h}
                            onChange={(e) => updateH2(idx, e.target.value)}
                          />
                          <button
                            className="wiz-h2-remove"
                            type="button"
                            onClick={() => removeH2(idx)}
                            aria-label="Xoá mục"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                    <button className="wiz-h2-add" type="button" onClick={addH2}>
                      + Thêm mục H2
                    </button>
                    <button
                      className="wiz-regen"
                      type="button"
                      onClick={() => resetForStage1()}
                    >
                      ↻ Tạo lại bằng AI
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Stage 2 */}
          {stage === 2 && (
            <div className="wiz-stage active">
              <div className="wiz-draft-summary">
                <div className="wiz-draft-summary-ico">📐</div>
                <div className="wiz-draft-summary-body">
                  <strong>{h1 || k.kw}</strong>
                  <span>
                    {h2List.length} H2 sections - {k.intent.toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="wiz-progress">
                <div
                  className="wiz-progress-fill"
                  style={{ width: `${draftProgress}%` }}
                />
              </div>
              <div className={`wiz-gen-status${draftDone ? " done" : ""}`}>
                {draftDone ? (
                  <span>
                    ✓ Bài nháp {h2List.length} sections đã xong - chọn Page Type để xuất
                    bản
                  </span>
                ) : (
                  <>
                    <div className="wiz-gen-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <span>Đang viết bài nháp chi tiết theo outline...</span>
                  </>
                )}
              </div>
              <div className="wiz-content">
                <h2>{h1 || k.kw}</h2>
                <p>
                  <strong>Search Volume:</strong> {fmtVol(k.vol)}/tháng · Intent:{" "}
                  {k.intent.toUpperCase()}
                </p>
                {h2List
                  .slice(0, Math.ceil((draftProgress / 100) * h2List.length))
                  .map((h2, i) => (
                    <div key={i}>
                      <h3>
                        {i + 1}. {h2}
                      </h3>
                      <p>
                        Nội dung chi tiết cho <strong>{h2.toLowerCase()}</strong> trong bối
                        cảnh {k.kw}.
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Stage 3 */}
          {stage === 3 && (
            <div className="wiz-stage active">
              <p className="wiz-pt-intro">
                Chọn nơi triển khai bài nháp này. <strong>Blog</strong> phù hợp cho
                TOFU/MOFU content, share trên social. <strong>Landing Page</strong> dùng
                cho conversion-focused content với CTA app MoMo.
              </p>
              <div className="wiz-pt-grid">
                <button
                  className="wiz-pt-card"
                  type="button"
                  onClick={() => onChoosePageType("blog", h1, h2List)}
                >
                  <span className="wiz-pt-badge">TOFU · MOFU</span>
                  <div className="wiz-pt-preview">
                    <div className="wiz-pt-blog-preview">
                      <div className="bp-meta" />
                      <div className="bp-h1" />
                      <div style={{ height: 6 }} />
                      <div className="bp-line" />
                      <div className="bp-line" />
                      <div className="bp-line short" />
                    </div>
                  </div>
                  <h3 className="wiz-pt-title">Blog Article</h3>
                  <p className="wiz-pt-desc">
                    Article template chuẩn SEO với floating TOC, product embed inline và
                    FAQ.
                  </p>
                  <div className="wiz-pt-feats">
                    <span className="wiz-pt-feat">URL: /blog/{"{slug}"}</span>
                    <span className="wiz-pt-feat">Schema: Article + FAQPage</span>
                    <span className="wiz-pt-feat">Mục tiêu: traffic organic + read time</span>
                  </div>
                  <span className="wiz-pt-action">Xuất bản Blog →</span>
                </button>

                <button
                  className="wiz-pt-card lp"
                  type="button"
                  onClick={() => onChoosePageType("landing", h1, h2List)}
                >
                  <span className="wiz-pt-badge">BOFU · Conversion</span>
                  <div className="wiz-pt-preview">
                    <div className="wiz-pt-lp-preview">
                      <div className="lpp-hero" />
                      <div className="lpp-sub" />
                      <div className="lpp-cta" />
                      <div className="lpp-cards">
                        <div />
                        <div />
                        <div />
                      </div>
                    </div>
                  </div>
                  <h3 className="wiz-pt-title">Landing Page</h3>
                  <p className="wiz-pt-desc">
                    Đẩy nội dung vào Long Form Content editor để build landing page với CTA
                    app + widget.
                  </p>
                  <div className="wiz-pt-feats">
                    <span className="wiz-pt-feat">URL: /lp/{"{slug}"}</span>
                    <span className="wiz-pt-feat">Schema: WebPage + Product</span>
                    <span className="wiz-pt-feat">Mục tiêu: download/open app</span>
                  </div>
                  <span className="wiz-pt-action">Input vào Long Form →</span>
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="wiz-ft">
          <div className="wiz-ft-info">
            Bước {stage} / 3 -{" "}
            {stage === 1
              ? "Outline & Chỉnh sửa"
              : stage === 2
              ? "Bài nháp chi tiết"
              : "Chọn Page Type"}
          </div>
          <div className="wiz-ft-actions">
            <Button
              variant="outline"
              size="sm"
              type="button"
              onClick={() => setStage((s) => Math.max(1, s - 1))}
              isDisabled={stage === 1}
            >
              ← Quay lại
            </Button>
            {stage !== 3 && (
              <Button
                variant="primary"
                size="sm"
                type="button"
                onClick={() => setStage((s) => s + 1)}
                isDisabled={(stage === 1 && generating) || (stage === 2 && !draftDone)}
              >
                {stage === 1 ? "Approve & Tạo bài nháp →" : "Chọn Page Type →"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
