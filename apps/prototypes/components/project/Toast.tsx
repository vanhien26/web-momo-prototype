"use client";

import type { Toast as ToastType } from "@/lib/store";

export default function Toast({ toast }: { toast: ToastType }) {
  return (
    <div className={`toast${toast ? " show " + toast.tone : ""}`}>{toast?.msg}</div>
  );
}
