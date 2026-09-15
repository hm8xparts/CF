import { Section, SectionHeading } from "@/components/ui/Section";
import {
  experience,
  experienceAll,
  type ExperienceLogo,
} from "@/lib/content";

const HEADLINE = "30 years of combined experience, delivering for the biggest names.";
const INTRO =
  "CauseFusion's team has over 30 years of combined experience delivering quality product for the biggest names in enterprise and large fashion retail, worldwide — the same operational discipline now behind every nonprofit program we run.";

function LogoImg({ logo }: { logo: ExperienceLogo }) {
  return (
    <div className="flex items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/brand/logos/${logo.file}.png`}
        alt={logo.name}
        loading="lazy"
        className="h-6 w-auto max-w-[8.5rem] object-contain opacity-60 transition-opacity duration-200 hover:opacity-90 sm:h-7"
      />
    </div>
  );
}

/** Home-page strip: headline + one unified greyscale logo wall. */
function ExperienceStrip() {
  return (
    <Section tone="soft" ariaLabel="The team's track record">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow justify-center">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden="true" />
          Proven experience
        </span>
        <h2 className="mt-4 text-2xl font-semibold text-ink sm:text-3xl">
          {HEADLINE}
        </h2>
        <p className="mt-4 text-ink-muted">{INTRO}</p>
      </div>

      <div className="mt-12 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-4 lg:grid-cols-6">
        {experienceAll.map((logo) => (
          <LogoImg key={logo.file} logo={logo} />
        ))}
      </div>
    </Section>
  );
}

function LogoGroup({
  label,
  logos,
}: {
  label: string;
  logos: ExperienceLogo[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
        {label}
      </h3>
      <div className="mt-6 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
        {logos.map((logo) => (
          <LogoImg key={logo.file} logo={logo} />
        ))}
      </div>
    </div>
  );
}

/** About-page full version: grouped by category + operating note. */
function ExperienceFull() {
  return (
    <Section tone="soft" ariaLabel="The team's track record">
      <SectionHeading
        eyebrow="30 years of combined experience"
        title={HEADLINE}
        intro={INTRO}
      />

      <div className="mt-14 space-y-12">
        <LogoGroup label="Enterprise" logos={experience.enterprise} />
        <LogoGroup label="Retail delivery" logos={experience.retail} />
        <LogoGroup label="Foundation & sponsor programs" logos={experience.sponsors} />
      </div>

      <p className="mt-12 max-w-2xl text-sm leading-relaxed text-ink-muted">
        The team brings deep expertise across branded products, large-scale
        production, and end-to-end delivery — managing complex programs from
        concept through execution, with the quality control and reliability that
        multi-billion-dollar enterprises and major retailers demand. That&rsquo;s
        the operational backbone now working for your cause.
      </p>
      <p className="mt-4 text-xs italic text-ink-muted/70">
        Logos represent brands the CauseFusion team has delivered product for
        over their careers.
      </p>
    </Section>
  );
}

export function Experience({ variant = "strip" }: { variant?: "strip" | "full" }) {
  return variant === "full" ? <ExperienceFull /> : <ExperienceStrip />;
}
