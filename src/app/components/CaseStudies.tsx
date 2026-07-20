import { motion } from "motion/react";
import { ArrowRight, Layers3 } from "lucide-react";
import { caseStudies } from "../data/caseStudies";

type CaseStudiesProps = {
  onSelectCase?: (slug: string) => void;
};

function createCaseHref(slug: string) {
  if (typeof window === "undefined") {
    return `?case=${encodeURIComponent(slug)}`;
  }

  const url = new URL(window.location.href);

  url.searchParams.set("case", slug);
  url.hash = "";

  return `${url.pathname}${url.search}`;
}

const studyFlows: Record<string, string[]> = {
  "optima-operational-intelligence": [
    "Detect risk",
    "Explain cause",
    "Support action",
  ],
  "ledgerflow-accounting-platform": [
    "Capture",
    "Reconcile",
    "Report",
  ],
};

export function CaseStudies({
  onSelectCase,
}: CaseStudiesProps) {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-title"
      className="px-6 py-20 md:px-12 md:py-24 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <p className="mb-6 text-sm font-medium uppercase tracking-wider text-[var(--premium-accent)]">
            Selected work
          </p>

          <h2
            id="case-studies-title"
            className="mb-6 max-w-3xl text-4xl font-normal leading-[1.08] tracking-[-0.02em] md:text-5xl lg:text-[56px]"
          >
            Selected projects
          </h2>

          <p className="mb-16 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Three independent studies show how I approach
            complexity at different layers: orienting students
            across a fragmented ecosystem, helping supply chain
            teams act on operational risk, and structuring
            financial workflows for businesses and accountants.
            Each case separates completed design decisions from
            validation still required.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {caseStudies.map((study, index) => {
            const previewImage =
              study.visualEvidence?.groups[0]?.images[0];

            return (
              <motion.article
                key={study.id}
                aria-labelledby={`case-study-title-${study.slug}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: Math.min(index * 0.08, 0.24),
                  ease: "easeOut",
                }}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 text-left transition-colors hover:border-[var(--premium-accent)]/30 md:p-8"
              >
                {previewImage ? (
                  <div className="mb-6 overflow-hidden rounded-xl border border-border bg-muted/30 p-2">
                    <div className="overflow-hidden rounded-lg border border-border bg-background">
                      <img
                        src={previewImage.src}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="aspect-[16/10] w-full origin-center scale-[1.65] bg-background object-cover object-center transition-transform duration-500 group-hover:scale-[1.72]"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="mb-6 overflow-hidden rounded-xl border border-border bg-muted/30 p-2">
                    <div className="flex aspect-[16/10] min-w-0 flex-col justify-between rounded-lg border border-border bg-background p-4 sm:p-6">
                      <div className="flex items-center gap-2 text-sm font-medium text-[var(--premium-accent)]">
                        <Layers3
                          aria-hidden="true"
                          className="h-4 w-4"
                        />
                        Independent product study
                      </div>

                      <div className="flex min-w-0 items-center gap-1 sm:gap-2">
                        {(
                          studyFlows[study.slug] ?? [
                            "Understand",
                            "Structure",
                            "Validate",
                          ]
                        ).map((step, stepIndex, steps) => (
                          <div key={step} className="contents">
                            <span className="min-w-0 flex-1 rounded-md border border-border bg-card px-1 py-2 text-center text-[10px] font-medium leading-tight text-foreground sm:px-3 sm:py-3 sm:text-xs">
                              {step}
                            </span>

                            {stepIndex < steps.length - 1 ? (
                              <ArrowRight
                                aria-hidden="true"
                                className="h-3 w-3 shrink-0 text-muted-foreground sm:h-4 sm:w-4"
                              />
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <p className="mb-4 text-sm font-medium text-muted-foreground">
                  {study.category}
                </p>

                {study.projectNature ? (
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                    {study.projectNature}
                  </p>
                ) : null}

                <h3
                  id={`case-study-title-${study.slug}`}
                  className="mb-3 text-2xl font-normal leading-[1.2] tracking-[-0.02em]"
                >
                  {study.title}
                </h3>

                <p className="mb-6 text-base leading-[1.7] text-muted-foreground">
                  {study.company}
                </p>

                <div className="mt-auto border-t border-border pt-5">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                    <span>{study.role}</span>

                    <span aria-hidden="true">·</span>

                    <span>{study.year}</span>
                  </div>

                  <a
                    id={`case-study-link-${study.slug}`}
                    href={createCaseHref(study.slug)}
                    onClick={(event) => {
                      const isModifiedClick =
                        event.metaKey ||
                        event.ctrlKey ||
                        event.shiftKey ||
                        event.altKey;

                      if (
                        !onSelectCase ||
                        isModifiedClick ||
                        event.button !== 0
                      ) {
                        return;
                      }

                      event.preventDefault();
                      onSelectCase(study.slug);
                    }}
                    aria-label={`View case study: ${study.title}`}
                    className="mt-6 inline-flex min-h-11 items-center gap-2 font-medium text-[var(--premium-accent)] hover:text-[var(--premium-accent-dark)]"
                  >
                    View case study
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
