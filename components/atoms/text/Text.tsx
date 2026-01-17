import * as React from "react";

import { cn } from "@/lib/utils";

const HeaderVariants = ["h1", "h2", "h3", "h4"] as const;
type HeaderVariant = (typeof HeaderVariants)[number];

type TextVariant = HeaderVariant | "body" | "caption" | "footer";

const textVariants: Record<TextVariant, string> = {
  h1: "text-h1 font-header",
  h2: "text-h2 font-header",
  h3: "text-h3 font-header",
  h4: "text-h4 font-header",
  body: "text-body font-body",
  caption: "text-caption font-body",
  footer: "text-footer font-body",
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
  const isHeaderVariant = HeaderVariants.includes(variant as HeaderVariant);
  const Comp = as ?? (isHeaderVariant ? variant : "p");

  return <Comp className={cn(textVariants[variant], className)} {...props} />;
}
