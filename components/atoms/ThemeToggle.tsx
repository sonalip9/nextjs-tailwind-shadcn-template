"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";

const STORAGE_KEY = "theme";

export function ThemeToggle() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    const next = stored === "dark";

    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
  }, []);

  const handleToggle = () => {
    const next = !isDark;

    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    sessionStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={handleToggle}
      aria-pressed={isDark}
      className="fixed right-4 top-4 z-50"
    >
      {isDark ? "Switch to light" : "Switch to dark"}
    </Button>
  );
}
