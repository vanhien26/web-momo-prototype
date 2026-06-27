"use client";

import { useState, useEffect } from "react";
import { StoreProvider, useStore } from "@/lib/store";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import EmptyState from "@/components/project/EmptyState";
import ProjectDetail from "@/components/project/ProjectDetail";
import Toast from "@/components/project/Toast";

function HubInner() {
  const { projects, selectedId, selectedProject, toast, selectProject, showToast } =
    useStore();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  useEffect(() => {
    setSidebarOpen(window.innerWidth > 640);
    const onResize = () => setSidebarOpen(window.innerWidth > 640);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div id="seo-geo-app">
      <Header onToggleSidebar={() => setSidebarOpen((o) => !o)} />
      <div className="layout">
        {sidebarOpen && (
          <div
            className="sidebar-backdrop show"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <Sidebar
          projects={projects}
          selectedId={selectedId}
          open={sidebarOpen}
          onSelect={selectProject}
          onCloseMobile={() => setSidebarOpen(false)}
          onNewProject={() =>
            showToast("Tính năng tạo dự án mới đang phát triển", "t-amber")
          }
        />
        <div className="panel-right">
          {selectedProject ? (
            <ProjectDetail key={selectedProject.id} project={selectedProject} />
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
      <Toast toast={toast} />
    </div>
  );
}

export default function ProjectHub() {
  return (
    <StoreProvider>
      <HubInner />
    </StoreProvider>
  );
}
