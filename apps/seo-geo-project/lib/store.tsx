"use client";

import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import { toast as mobaseToast } from "@momo-webplatform/mobase";
import type { Cluster, Keyword, MerchantEntity, Project } from "@/data/types";
import { PROJECTS } from "@/data/projects";
import { merchantInventory, recalculateProject } from "@/lib/utils";

const CRUD_STORAGE_KEY = "mospark-topic-inventory-v1";
const MERCHANT_STORAGE_KEY = "mospark-merchant-inventory-v1";

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

export type Toast = { id: number; msg: string; tone: string } | null;

interface State {
  projects: Project[];
  selectedId: string | null;
  toast: Toast;
}

type Action =
  | { type: "hydrate"; projects: Project[] }
  | { type: "select"; id: string }
  | { type: "setProjects"; projects: Project[] }
  | { type: "toast"; msg: string; tone: string }
  | { type: "clearToast" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "hydrate":
      return { ...state, projects: action.projects };
    case "select":
      return { ...state, selectedId: action.id };
    case "setProjects":
      return { ...state, projects: action.projects };
    case "toast":
      return { ...state, toast: { id: Date.now(), msg: action.msg, tone: action.tone } };
    case "clearToast":
      return { ...state, toast: null };
    default:
      return state;
  }
}

interface StoreApi {
  projects: Project[];
  selectedId: string | null;
  selectedProject: Project | null;
  toast: Toast;
  selectProject: (id: string) => void;
  showToast: (msg: string, tone?: string) => void;
  updateProject: (updated: Project, message?: string) => void;
}

const StoreContext = createContext<StoreApi | null>(null);

function readCrudStorage(): Record<string, Cluster[]> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(CRUD_STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function applyStoredData(projects: Project[]): Project[] {
  if (typeof window === "undefined") return projects;
  const crud = readCrudStorage();
  let merchantStored: MerchantEntity[] | null = null;
  try {
    const raw = JSON.parse(localStorage.getItem(MERCHANT_STORAGE_KEY) || "null");
    if (Array.isArray(raw)) merchantStored = raw;
  } catch {
    merchantStored = null;
  }
  return projects.map((p) => {
    if (p.isDistributed) {
      if (merchantStored) {
        const next: Project = { ...p, merchants: merchantStored };
        next.vol = merchantStored.reduce((s, m) => s + merchantInventory(m), 0);
        return next;
      }
      return p;
    }
    const stored = crud[p.id];
    if (Array.isArray(stored)) {
      const next: Project = { ...p, clusters: stored };
      recalculateProject(next);
      return next;
    }
    return p;
  });
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    projects: PROJECTS,
    selectedId: null,
    toast: null,
  });

  // Hydrate from localStorage after mount (avoids SSR mismatch).
  useEffect(() => {
    dispatch({ type: "hydrate", projects: applyStoredData(clone(PROJECTS)) });
  }, []);

  const selectProject = useCallback((id: string) => dispatch({ type: "select", id }), []);

  const showToast = useCallback(
    (msg: string, tone = "t-green") => {
      dispatch({ type: "toast", msg, tone });
      // Also fire mobase Toaster
      const variant: "success" | "warning" | "error" =
        tone === "t-amber" ? "warning" : tone === "t-red" ? "error" : "success";
      mobaseToast({ title: msg, variant });
    },
    []
  );

  const updateProject = useCallback(
    (updated: Project, message?: string) => {
      const next = state.projects.map((p) => (p.id === updated.id ? updated : p));
      dispatch({ type: "setProjects", projects: next });
      // Persist
      if (typeof window !== "undefined") {
        if (updated.isDistributed && updated.merchants) {
          localStorage.setItem(
            MERCHANT_STORAGE_KEY,
            JSON.stringify(updated.merchants)
          );
        } else {
          const crud = readCrudStorage();
          crud[updated.id] = updated.clusters;
          localStorage.setItem(CRUD_STORAGE_KEY, JSON.stringify(crud));
        }
      }
      if (message) {
        dispatch({ type: "toast", msg: message, tone: "t-green" });
        mobaseToast({ title: message, variant: "success" });
      }
    },
    [state.projects]
  );

  const selectedProject =
    state.projects.find((p) => p.id === state.selectedId) || null;

  // Auto-clear toast
  useEffect(() => {
    if (!state.toast) return;
    const id = setTimeout(() => dispatch({ type: "clearToast" }), 2600);
    return () => clearTimeout(id);
  }, [state.toast]);

  const api: StoreApi = {
    projects: state.projects,
    selectedId: state.selectedId,
    selectedProject,
    toast: state.toast,
    selectProject,
    showToast,
    updateProject,
  };

  return <StoreContext.Provider value={api}>{children}</StoreContext.Provider>;
}

export function useStore(): StoreApi {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}

/* ─── Mutation helpers — return a new cloned project ──────────────────────── */
export function withRecalc(project: Project): Project {
  const next = clone(project);
  recalculateProject(next);
  return next;
}

export function withMerchantVol(project: Project): Project {
  const next = clone(project);
  if (next.merchants) {
    next.vol = next.merchants.reduce((s, m) => s + merchantInventory(m), 0);
  }
  return next;
}

export type { Keyword, Cluster, MerchantEntity, Project };
