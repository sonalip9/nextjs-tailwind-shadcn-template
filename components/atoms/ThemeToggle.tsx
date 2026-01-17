"use client";

import * as React from "react";

import { Text } from "@/components/atoms/text";
import { Switch } from "@/components/atoms/switch";

const STORAGE_KEY = "theme";

export function ThemeToggle() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    const next = stored === "dark";

    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
  }, []);

  const handleCheckedChange = (next: boolean) => {
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    sessionStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
  };

  return (
    <div className="fixed right-4 top-4 z-50 flex items-center gap-2 rounded-full border border-border bg-background/90 px-3 py-2 shadow-sm">
      <Text as="span" className="text-muted-foreground" variant="caption">
        Dark mode
      </Text>
      <Switch
        checked={isDark}
        onCheckedChange={handleCheckedChange}
        aria-label="Toggle dark mode"
      />
    </div>
  );
}
