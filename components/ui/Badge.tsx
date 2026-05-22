import { PTag } from "@porsche-design-system/components-react/ssr";
import type { ReactNode } from "react";
import type { TagVariant } from "@porsche-design-system/components-react/ssr";

type BadgeVariant = "success" | "danger" | "neutral" | "accent";

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
};

const variantMap: Record<BadgeVariant, TagVariant> = {
  success: "success",
  danger: "error",
  neutral: "secondary",
  accent: "primary",
};

export function Badge({ children, variant = "neutral" }: BadgeProps) {
  return <PTag variant={variantMap[variant]}>{children}</PTag>;
}
