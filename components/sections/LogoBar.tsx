/**
 * Trust / logo bar. Uses clearly-labeled placeholders — the brief says not to
 * invent nonprofit client names or logos.
 */
export function LogoBar() {
  const placeholders = [
    "Foundation",
    "Advocacy Org",
    "Community Fund",
    "Relief Network",
    "Youth Alliance",
  ];
  return (
    <section
      aria-label="Trusted by mission-driven organizations"
      className="border-y border-ink/8 bg-paper"
    >
      <div className="container-x py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
          Built for mission-driven organizations
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
          {placeholders.map((name) => (
            <div
              key={name}
              className="flex items-center gap-2 opacity-55"
              title="Placeholder — partner logos to be added"
            >
              <span
                className="h-6 w-6 rounded-md bg-ink/15"
                aria-hidden="true"
              />
              <span className="text-sm font-semibold tracking-tight text-ink/70">
                {name}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-[11px] italic text-ink-muted/70">
          Placeholder logos &mdash; partner marks added with permission.
        </p>
      </div>
    </section>
  );
}
