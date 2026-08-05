"use client";

import { useMemo, useState } from "react";
import type { Keyword, Project } from "@/data/types";
import { PROJECT_CONTEXT } from "@/data/projects";
import { getClusterTheme, fmtVol } from "@/lib/utils";
import { useStore, withRecalc, withMerchantVol } from "@/lib/store";
import BusinessContext from "./BusinessContext";
import { ProjectOverview } from "./shared";
import ThemeInventory from "./ThemeInventory";
import MerchantInventory from "./MerchantInventory";
import CrudModal, { type CrudConfig } from "./CrudModal";
import WriteWizard, { type WizardTarget } from "./WriteWizard";
import type { InventoryActions, MerchantActions } from "./actions";

export default function ProjectDetail({ project }: { project: Project }) {
  const { showToast, updateProject } = useStore();
  const [openThemes, setOpenThemes] = useState<Record<string, boolean>>({});
  const [openClusters, setOpenClusters] = useState<Record<string, boolean>>({});
  const [openMerchant, setOpenMerchant] = useState<Record<string, boolean>>({});
  const [crud, setCrud] = useState<CrudConfig | null>(null);
  const [wizardTarget, setWizardTarget] = useState<WizardTarget | null>(null);
  const [wizardCtx, setWizardCtx] = useState<{ clusterId: string } | null>(null);

  // Open-state is reset by the parent remounting this component via `key`.

  const ctx = PROJECT_CONTEXT[project.id] || {};

  /* ── helpers to mutate clusters immutably ───────────────────────────────── */
  const commitClusters = (mutate: (p: Project) => void, message: string) => {
    const next = withRecalc(project);
    mutate(next);
    const recalced = withRecalc(next);
    updateProject(recalced, message);
  };
  const commitMerchants = (mutate: (p: Project) => void, message: string) => {
    const next = withMerchantVol(project);
    mutate(next);
    updateProject(withMerchantVol(next), message);
  };

  /* ── Inventory (theme/cluster/keyword) actions ──────────────────────────── */
  const inventoryActions: InventoryActions = useMemo(
    () => ({
      toggleTheme: (themeId) =>
        setOpenThemes((s) => {
          const cur =
            s[themeId] ??
            themeId.endsWith(`-0`); // default first open
          return { ...s, [themeId]: !cur };
        }),
      toggleCluster: (clusterId) =>
        setOpenClusters((s) => ({ ...s, [clusterId]: !s[clusterId] })),
      writeOrView: (clusterId, primary: Keyword) => {
        if (primary.status === "published") {
          showToast(`Mở bài viết: "${primary.kw}"`, "t-pk");
          return;
        }
        setWizardCtx({ clusterId });
        setWizardTarget({ keyword: primary, projectName: project.name });
      },
      createCluster: (theme = "") =>
        setCrud({
          title: "Thêm Cluster",
          fields: [
            { name: "theme", label: "Theme", value: theme, full: true },
            { name: "cluster", label: "Cluster" },
            { name: "volume", label: "Primary Volume", value: "0", type: "number" },
            { name: "keyword", label: "Primary Keyword", full: true },
          ],
          onSubmit: (v) => {
            commitClusters((p) => {
              p.clusters.push({
                id: `custom-${Date.now()}`,
                theme: v.theme.trim(),
                name: v.cluster.trim(),
                vol: Number(v.volume),
                funnel: "tofu",
                keywords: [
                  {
                    kw: v.keyword.trim(),
                    vol: Number(v.volume),
                    intent: "info",
                    status: "none",
                    rank: null,
                    isPrimary: true,
                    secondaries: [],
                  },
                ],
              });
            }, "Đã tạo Cluster và bài viết AI mới");
            setCrud(null);
          },
        }),
      editCluster: (clusterId) => {
        const cluster = project.clusters.find((c) => c.id === clusterId)!;
        setCrud({
          title: "Sửa Cluster",
          fields: [
            {
              name: "theme",
              label: "Theme",
              value: getClusterTheme(cluster),
              full: true,
            },
            { name: "cluster", label: "Cluster", value: cluster.name },
          ],
          onSubmit: (v) => {
            commitClusters((p) => {
              const c = p.clusters.find((x) => x.id === clusterId)!;
              c.theme = v.theme.trim();
              c.name = v.cluster.trim();
            }, "Đã cập nhật Cluster");
            setCrud(null);
          },
        });
      },
      deleteCluster: (clusterId) => {
        const cluster = project.clusters.find((c) => c.id === clusterId)!;
        setCrud({
          title: "Xóa Cluster",
          destructive: true,
          warning: `Cluster "${cluster.name}" cùng toàn bộ Primary và Secondary Keywords sẽ bị xóa.`,
          onSubmit: () => {
            commitClusters((p) => {
              p.clusters = p.clusters.filter((x) => x.id !== clusterId);
            }, "Đã xóa Cluster");
            setCrud(null);
          },
        });
      },
      createSecondary: (clusterId, primaryIndex) =>
        setCrud({
          title: "Thêm Secondary Keyword",
          fields: [
            { name: "keyword", label: "Secondary Keyword", full: true },
            { name: "volume", label: "Volume", value: "0", type: "number" },
          ],
          onSubmit: (v) => {
            commitClusters((p) => {
              const c = p.clusters.find((x) => x.id === clusterId)!;
              (c.keywords[primaryIndex].secondaries ||= []).push({
                kw: v.keyword.trim(),
                vol: Number(v.volume),
              });
            }, "Đã thêm Secondary Keyword");
            setOpenClusters((s) => ({ ...s, [clusterId]: true }));
            setCrud(null);
          },
        }),
      editSecondary: (clusterId, primaryIndex, secondaryIndex) => {
        const kw =
          project.clusters.find((c) => c.id === clusterId)!.keywords[primaryIndex]
            .secondaries![secondaryIndex];
        setCrud({
          title: "Sửa Secondary Keyword",
          fields: [
            { name: "keyword", label: "Secondary Keyword", value: kw.kw, full: true },
            { name: "volume", label: "Volume", value: kw.vol, type: "number" },
          ],
          onSubmit: (v) => {
            commitClusters((p) => {
              const s = p.clusters.find((x) => x.id === clusterId)!.keywords[
                primaryIndex
              ].secondaries![secondaryIndex];
              s.kw = v.keyword.trim();
              s.vol = Number(v.volume);
            }, "Đã cập nhật Secondary Keyword");
            setOpenClusters((s) => ({ ...s, [clusterId]: true }));
            setCrud(null);
          },
        });
      },
      deleteSecondary: (clusterId, primaryIndex, secondaryIndex) => {
        const kw =
          project.clusters.find((c) => c.id === clusterId)!.keywords[primaryIndex]
            .secondaries![secondaryIndex];
        setCrud({
          title: "Xóa Secondary Keyword",
          destructive: true,
          warning: `Secondary Keyword "${kw.kw}" sẽ bị xóa khỏi Primary Keyword này.`,
          onSubmit: () => {
            commitClusters((p) => {
              p.clusters
                .find((x) => x.id === clusterId)!
                .keywords[primaryIndex].secondaries!.splice(secondaryIndex, 1);
            }, "Đã xóa Secondary Keyword");
            setOpenClusters((s) => ({ ...s, [clusterId]: true }));
            setCrud(null);
          },
        });
      },
      renameTheme: (theme) =>
        setCrud({
          title: "Đổi tên Theme",
          fields: [{ name: "theme", label: "Tên Theme mới", value: theme, full: true }],
          onSubmit: (v) => {
            commitClusters((p) => {
              p.clusters
                .filter((c) => getClusterTheme(c) === theme)
                .forEach((c) => (c.theme = v.theme.trim()));
            }, "Đã đổi tên Theme");
            setCrud(null);
          },
        }),
      deleteTheme: (theme) => {
        const count = project.clusters.filter(
          (c) => getClusterTheme(c) === theme
        ).length;
        setCrud({
          title: "Xóa Theme",
          destructive: true,
          warning: `Theme "${theme}" và toàn bộ ${count} Cluster bên trong sẽ bị xóa.`,
          onSubmit: () => {
            commitClusters((p) => {
              p.clusters = p.clusters.filter((c) => getClusterTheme(c) !== theme);
            }, "Đã xóa Theme và các Cluster liên quan");
            setCrud(null);
          },
        });
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [project]
  );

  /* ── Merchant actions ───────────────────────────────────────────────────── */
  const merchantActions: MerchantActions = useMemo(
    () => ({
      toggleMerchant: (merchantId) =>
        setOpenMerchant((s) => {
          const willOpen = !s[merchantId];
          const reset: Record<string, boolean> = {};
          reset[merchantId] = willOpen;
          return reset;
        }),
      openBuilder: (merchantId) => {
        const m = project.merchants?.find((x) => x.id === merchantId);
        if (m) showToast(`Mở Merchant Page Builder: "${m.name}"`, "t-pk");
      },
      createMerchant: () =>
        setCrud({
          title: "Thêm Merchant và bài viết AI",
          fields: [
            { name: "merchant", label: "Merchant", full: true },
            { name: "topicCluster", label: "Topic Cluster", full: true },
            { name: "volume", label: "Primary Volume", value: "0", type: "number" },
            { name: "keyword", label: "Primary Keyword", full: true },
          ],
          onSubmit: (v) => {
            commitMerchants((p) => {
              p.merchants!.push({
                id: `merchant-${Date.now()}`,
                name: v.merchant.trim(),
                category: "F&B",
                location: "Việt Nam",
                topicCluster: v.topicCluster.trim(),
                primary: { kw: v.keyword.trim(), vol: Number(v.volume) },
                secondaries: [],
                contentStatus: "none",
                context: "",
              });
            }, "Đã tạo Merchant và bài viết AI mới");
            setCrud(null);
          },
        }),
      editMerchant: (merchantId) => {
        const m = project.merchants!.find((x) => x.id === merchantId)!;
        setCrud({
          title: "Sửa Merchant và Primary Keyword",
          fields: [
            { name: "merchant", label: "Merchant", value: m.name, full: true },
            {
              name: "topicCluster",
              label: "Topic Cluster",
              value: m.topicCluster || "",
              full: true,
            },
            { name: "volume", label: "Primary Volume", value: m.primary.vol, type: "number" },
            { name: "keyword", label: "Primary Keyword", value: m.primary.kw, full: true },
          ],
          onSubmit: (v) => {
            commitMerchants((p) => {
              const merchant = p.merchants!.find((x) => x.id === merchantId)!;
              merchant.name = v.merchant.trim();
              merchant.topicCluster = v.topicCluster.trim();
              merchant.primary.kw = v.keyword.trim();
              merchant.primary.vol = Number(v.volume);
            }, "Đã cập nhật Merchant và Primary Keyword");
            setCrud(null);
          },
        });
      },
      deleteMerchant: (merchantId) => {
        const m = project.merchants!.find((x) => x.id === merchantId)!;
        setCrud({
          title: "Xóa Merchant",
          destructive: true,
          warning: `Merchant "${m.name}", Primary Keyword và toàn bộ Secondary Keywords sẽ bị xóa.`,
          onSubmit: () => {
            commitMerchants((p) => {
              p.merchants = p.merchants!.filter((x) => x.id !== merchantId);
            }, "Đã xóa Merchant");
            setCrud(null);
          },
        });
      },
      createMerchantKeyword: (merchantId) =>
        setCrud({
          title: "Thêm Secondary Keyword",
          fields: [
            { name: "keyword", label: "Secondary Keyword", full: true },
            { name: "volume", label: "Volume", value: "0", type: "number" },
          ],
          onSubmit: (v) => {
            commitMerchants((p) => {
              p.merchants!
                .find((x) => x.id === merchantId)!
                .secondaries.push({ kw: v.keyword.trim(), vol: Number(v.volume) });
            }, "Đã thêm Secondary Keyword");
            setOpenMerchant({ [merchantId]: true });
            setCrud(null);
          },
        }),
      editMerchantKeyword: (merchantId, keywordIndex) => {
        const kw = project.merchants!.find((x) => x.id === merchantId)!.secondaries[
          keywordIndex
        ];
        setCrud({
          title: "Sửa Secondary Keyword",
          fields: [
            { name: "keyword", label: "Secondary Keyword", value: kw.kw, full: true },
            { name: "volume", label: "Volume", value: kw.vol, type: "number" },
          ],
          onSubmit: (v) => {
            commitMerchants((p) => {
              const s = p.merchants!.find((x) => x.id === merchantId)!.secondaries[
                keywordIndex
              ];
              s.kw = v.keyword.trim();
              s.vol = Number(v.volume);
            }, "Đã cập nhật Secondary Keyword");
            setOpenMerchant({ [merchantId]: true });
            setCrud(null);
          },
        });
      },
      deleteMerchantKeyword: (merchantId, keywordIndex) => {
        const kw = project.merchants!.find((x) => x.id === merchantId)!.secondaries[
          keywordIndex
        ];
        setCrud({
          title: "Xóa Secondary Keyword",
          destructive: true,
          warning: `Secondary Keyword "${kw.kw}" sẽ bị xóa khỏi bài viết Merchant này.`,
          onSubmit: () => {
            commitMerchants((p) => {
              p.merchants!
                .find((x) => x.id === merchantId)!
                .secondaries.splice(keywordIndex, 1);
            }, "Đã xóa Secondary Keyword");
            setOpenMerchant({ [merchantId]: true });
            setCrud(null);
          },
        });
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [project]
  );

  /* ── Wizard publish handoff: mark primary as published ──────────────────── */
  const handleChoosePageType = (type: "blog" | "landing", h1: string) => {
    if (wizardCtx) {
      commitClusters((p) => {
        const c = p.clusters.find((x) => x.id === wizardCtx.clusterId);
        if (c && c.keywords[0]) c.keywords[0].status = "published";
      }, `Đã xuất bản ${type === "blog" ? "Blog Article" : "Landing Page"}: "${h1 || ""}"`);
    }
    setWizardTarget(null);
    setWizardCtx(null);
  };

  return (
    <div className="project-detail" style={{ display: "flex" }}>
      {project.isDistributed ? (
        <MerchantInventory
          project={project}
          openMerchant={openMerchant}
          actions={merchantActions}
        />
      ) : (
        <>
          <div className="dh">
            <div className="dh-top">
              <div>
                <h2 className="dh-title">{project.name}</h2>
              </div>
            </div>
          </div>
          <ProjectOverview project={project} />
          <BusinessContext ctx={ctx} />
          <ThemeInventory
            project={project}
            openThemes={openThemes}
            openClusters={openClusters}
            actions={inventoryActions}
          />
        </>
      )}

      <CrudModal config={crud} onClose={() => setCrud(null)} />
      <WriteWizard
        key={wizardCtx?.clusterId ?? "none"}
        target={wizardTarget}
        onClose={() => {
          setWizardTarget(null);
          setWizardCtx(null);
        }}
        onChoosePageType={handleChoosePageType}
      />
    </div>
  );
}

export { fmtVol };
