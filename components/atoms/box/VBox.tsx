import * as React from "react";

import { cn } from "@/lib/utils";

import { Box, type BoxProps } from "./Box";

export type VBoxProps<T extends React.ElementType = "div"> = BoxProps<T>;

export function VBox<T extends React.ElementType = "div">({
  className,
  ...props
}: VBoxProps<T>) {
  return <Box className={cn("flex flex-col", className)} {...props} />;
}
