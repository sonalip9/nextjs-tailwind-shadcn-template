import * as React from "react";

import { cn } from "@/lib/utils";

type BoxProps<T extends React.ElementType = "div"> = {
  as?: T;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

export function Box<T extends React.ElementType = "div">({
  as,
  className,
  ...props
}: BoxProps<T>) {
  const Comp = as ?? "div";

  return <Comp className={cn(className)} {...props} />;
}
