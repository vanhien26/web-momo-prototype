"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Contrast } from "lucide-react";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-[78px] h-9" />;
  }

  const isContrast = theme === "contrast";
  const isDark = theme === "dark" || (theme === "system" && resolvedTheme === "dark");

  const toggleLightDark = () => {
    if (isDark) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const toggleContrast = () => {
    if (isContrast) {
      setTheme("light");
    } else {
      setTheme("contrast");
    }
  };

  return (
    <div className="flex items-center gap-1.5">
      {/* Light/Dark Toggle — transparent icon button, chuẩn mobase transparent variant */}
      <button
        type="button"
        className={`w-9 h-9 p-0 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
          !isContrast
            ? "border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800"
            : "border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
        }`}
        onClick={toggleLightDark}
        aria-label="Toggle light/dark theme"
        title="Chế độ Sáng/Tối"
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-indigo-400" />
        ) : (
          <Sun className="h-4 w-4 text-amber-500" />
        )}
      </button>

      {/* High Contrast Toggle — transparent icon button */}
      {/* High Contrast Toggle — transparent pill button with text */}
      <button
        type="button"
        className={`h-9 px-3 rounded-full flex items-center justify-center gap-1.5 border transition-all cursor-pointer text-xs font-bold ${
          isContrast
            ? "border-pink-500 bg-pink-50 dark:bg-pink-950/30 text-pink-500"
            : "border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
        }`}
        onClick={toggleContrast}
        aria-label="Toggle high contrast accessibility theme"
        title="Độ tương phản cao"
      >
        <Contrast className="h-4 w-4 shrink-0" />
        <span>Tương phản cao</span>
      </button>
    </div>
  );
}
