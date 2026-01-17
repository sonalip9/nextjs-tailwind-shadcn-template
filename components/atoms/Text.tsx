import * as React from "react";

import { cn } from "@/lib/utils";

type TextVariant = "title" | "body" | "muted" | "lead";

const textVariants: Record<TextVariant, string> = {
  title: "text-3xl font-semibold tracking-tight text-foreground",
  body: "text-base text-foreground",
  muted: "text-sm text-muted-foreground",
  lead: "text-lg text-muted-foreground",
};

type TextProps<T extends React.ElementType = "p"> = {
  as?: T;
  variant?: TextVariant;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

export function Text<T extends React.ElementType = "p">({
  as,
  variant = "body",
  className,
  ...props
}: TextProps<T>) {
  const Comp = as ?? "p";

  return <Comp className={cn(textVariants[variant], className)} {...props} />;
}
