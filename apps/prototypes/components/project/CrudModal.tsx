"use client";

import { useEffect, useRef } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogFooter,
} from "@momo-webplatform/mobase";

export interface CrudField {
  name: string;
  label: string;
  value?: string | number;
  type?: "text" | "number";
  full?: boolean;
}

export interface CrudConfig {
  title: string;
  fields?: CrudField[];
  warning?: string;
  destructive?: boolean;
  onSubmit: (values: Record<string, string>) => void;
}

interface CrudModalProps {
  config: CrudConfig | null;
  onClose: () => void;
}

export default function CrudModal({ config, onClose }: CrudModalProps) {
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (config) setTimeout(() => firstInputRef.current?.focus(), 0);
  }, [config]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = Object.fromEntries(
      new FormData(e.currentTarget).entries()
    ) as Record<string, string>;
    config?.onSubmit(values);
  };

  return (
    <Dialog open={!!config} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent size="md">
        <DialogHeader>
          <DialogTitle>{config?.title}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <DialogBody>
            <div className="crud-fields">
              {config?.fields?.map((f, i) => (
                <div key={f.name} className={`crud-field${f.full ? " full" : ""}`}>
                  <label htmlFor={`crud-${f.name}`}>{f.label}</label>
                  <input
                    ref={i === 0 ? firstInputRef : undefined}
                    id={`crud-${f.name}`}
                    name={f.name}
                    type={f.type || "text"}
                    defaultValue={f.value ?? ""}
                    min={f.type === "number" ? 0 : undefined}
                    step={f.type === "number" ? 1 : undefined}
                    required
                  />
                </div>
              ))}
              {config?.warning && <div className="crud-warning">{config.warning}</div>}
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="outline" size="sm" type="button" onClick={onClose}>
              Hủy
            </Button>
            <Button
              variant={config?.destructive ? "danger" : "primary"}
              size="sm"
              type="submit"
            >
              {config?.destructive ? "Xác nhận xóa" : "Lưu thay đổi"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
