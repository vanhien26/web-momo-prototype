"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@momo-webplatform/mobase-next";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="w-9 h-9 p-0 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-800"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4 text-amber-500" />
      ) : (
        <Moon className="h-4 w-4 text-slate-700" />
      )}
    </Button>
  );
}
