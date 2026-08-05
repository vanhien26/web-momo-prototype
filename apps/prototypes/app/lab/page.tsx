import type { Metadata } from "next";
import LabClient from "@/components/lab/LabClient";
import { getLabRegistry } from "@/lib/lab-registry";

export const metadata: Metadata = {
  title: "Lab — Prototype Store",
  description: "React shell cho prototype store HTML tĩnh.",
};

export default function LabPage() {
  const prototypes = getLabRegistry();

  return <LabClient prototypes={prototypes} />;
}
