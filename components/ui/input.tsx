import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<"input">
>(({ className, type, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-xl w-full rounded-md border border-input bg-transparent px-sm py-xs text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
