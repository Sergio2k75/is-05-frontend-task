import { Badge } from "@/components/ui/Badge";
import { PHeading, PText } from "@porsche-design-system/components-react/ssr";

type HeroSectionProps = {
  activeHost: string;
};

export function HeroSection({ activeHost }: HeroSectionProps) {
  return (
    <section aria-labelledby="hero-title" className="grid gap-fluid-sm">
      <PText size="x-small" weight="semibold" color="contrast-medium">
        LOCAL-FIRST DASHBOARD
      </PText>
      <PHeading id="hero-title" tag="h1" size="4xl" weight="semibold">
        Ollama Panel
      </PHeading>
      <PText size="medium" color="contrast-medium" className="max-w-3xl">
        Monitor Ollama host health, version, installed models, and running models
        from one simple dashboard.
      </PText>
      <div className="flex flex-wrap items-center gap-static-sm">
        <Badge variant="neutral">Default host</Badge>
        <code className="rounded-md bg-frosted-soft px-static-sm py-static-xs text-small">
          {activeHost}
        </code>
      </div>
    </section>
  );
}
