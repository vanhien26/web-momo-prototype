"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@momo-webplatform/mobase-next";
import { Sun, Moon, Contrast } from "lucide-react";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  const handleToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("contrast");
    } else if (theme === "contrast") {
      setTheme("light");
    } else {
      // Fallback for system theme
      setTheme(resolvedTheme === "dark" ? "contrast" : "dark");
    }
  };

  const getThemeIcon = () => {
    const active = theme === "system" ? resolvedTheme : theme;
    if (active === "contrast") {
      return <Contrast className="h-4 w-4 text-pink-500" />;
    }
    if (active === "dark") {
      return <Moon className="h-4 w-4 text-indigo-400" />;
    }
    return <Sun className="h-4 w-4 text-amber-500" />;
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className="w-9 h-9 p-0 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-800"
      onClick={handleToggle}
      aria-label="Toggle theme"
      title={`Theme: ${theme}`}
    >
      {getThemeIcon()}
    </Button>
  );
}
