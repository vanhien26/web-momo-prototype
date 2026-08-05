"use client";

import { useEffect, useState } from "react";

export default function PageFooter() {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(new Date().toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" }));
  }, []);

  return (
    <footer className="mx-auto flex flex-col gap-2 border-t px-5 py-6 text-xs md:flex-row md:items-center md:justify-between md:px-10"
      style={{ maxWidth: "1160px", borderColor: "#e4e7ec", color: "#94a3b8" }}>
      <span>MoMo Web Platform · Prototype Store</span>
      <span>Research-Spec · Web Platform · {date}</span>
    </footer>
  );
}
