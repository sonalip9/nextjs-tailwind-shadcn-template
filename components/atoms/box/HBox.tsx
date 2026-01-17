import * as React from "react";

import { cn } from "@/lib/utils";

import { Box, type BoxProps } from "./Box";

export type HBoxProps<T extends React.ElementType = "div"> = BoxProps<T>;

export function HBox<T extends React.ElementType = "div">({
  className,
  ...props
}: HBoxProps<T>) {
  return <Box className={cn("flex flex-row", className)} {...props} />;
}
