import { cn } from "@/lib/utils";

import { Box, type BoxProps } from "./Box";

export type VBoxProps = BoxProps;

export function VBox({ className, ...props }: VBoxProps) {
  return <Box className={cn("flex flex-col", className)} {...props} />;
}
