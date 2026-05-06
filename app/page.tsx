export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-20">
      <header className="flex flex-col gap-3">
        <p className="text-sm font-medium uppercase tracking-widest text-foreground/60">
          is-05-frontend-task
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          AI Frontend Workflow 2026 — your turn.
        </h1>
        <p className="text-lg leading-7 text-foreground/70">
          This is the homework starter. Replace this page with sections composed
          from your own <code>components/sections</code> and{" "}
          <code>components/ui</code>, driven by your{" "}
          <code>docs/DESIGN.md</code> and a Figma frame referenced from{" "}
          <code>docs/prd.md</code>.
        </p>
      </header>

      <section className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6">
        <h2 className="text-xl font-semibold text-foreground">
          Workshop checklist
        </h2>
        <ol className="mt-4 list-inside list-decimal space-y-2 text-foreground/80">
          <li>
            Fill <code>docs/prd.md</code> with your Figma URLs and product brief
          </li>
          <li>
            Fill <code>docs/DESIGN.md</code> with the tokens extracted from
            Figma
          </li>
          <li>
            Translate the tokens into <code>app/globals.css</code> (
            <code>:root</code> + <code>@theme inline</code>)
          </li>
          <li>
            Implement <strong>≥ 3 sections</strong> as RSC components in{" "}
            <code>components/sections/</code>
          </li>
          <li>
            Add <strong>≥ 1 client component</strong> with proper a11y in{" "}
            <code>components/ui/</code>
          </li>
          <li>
            Run <code>npm run lint</code>,{" "}
            <code>npx tsc --noEmit</code>,{" "}
            <code>npm run build</code> — all green
          </li>
          <li>
            Open a PR to <code>koldovsky/is-05-frontend-task</code> from{" "}
            <code>frontend/&lt;your-github-username&gt;</code>
          </li>
        </ol>
      </section>

      <section className="flex flex-col gap-3 text-sm text-foreground/60">
        <p>
          Reference implementation:{" "}
          <a
            className="text-foreground underline"
            href="https://github.com/koldovsky/is-05-frontend"
          >
            koldovsky/is-05-frontend
          </a>
        </p>
        <p>
          Slides:{" "}
          <a
            className="text-foreground underline"
            href="https://koldovsky.github.io/is-05-slidev-frontend/"
          >
            koldovsky.github.io/is-05-slidev-frontend
          </a>
        </p>
      </section>
    </main>
  );
}
