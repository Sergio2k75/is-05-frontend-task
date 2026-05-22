"use client";

import { PButton } from "@porsche-design-system/components-react/ssr";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "danger";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
  className?: string;
  id?: string;
  disabled?: boolean;
  onClick?: () => void;
  "aria-label"?: string;
};

export function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const pdsVariant = variant === "danger" ? "secondary" : variant;

  return (
    <PButton
      type={type}
      variant={pdsVariant}
      className={className}
      {...props}
    >
      {children}
    </PButton>
  );
}
