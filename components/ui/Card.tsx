import { PHeading, PText } from "@porsche-design-system/components-react/ssr";
import type { ReactNode } from "react";

type CardProps = {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Card({ title, description, children, className = "" }: CardProps) {
  return (
    <article
      className={`rounded-lg border border-contrast-low bg-surface p-fluid-md shadow-medium ${className}`}
    >
      <header className="mb-fluid-sm">
        <PHeading tag="h3" size="lg" weight="semibold">
          {title}
        </PHeading>
        {description ? (
          <PText size="small" color="contrast-medium" className="mt-static-xs">
            {description}
          </PText>
        ) : null}
      </header>
      {children}
    </article>
  );
}
