import { cn } from "@/lib/utils";

import { type BoxProps } from "./Box";
import { Box } from "./Box";

export type HBoxProps = BoxProps;

export function HBox({ className, ...props }: HBoxProps) {
  return <Box className={cn("flex flex-row", className)} {...props} />;
}
