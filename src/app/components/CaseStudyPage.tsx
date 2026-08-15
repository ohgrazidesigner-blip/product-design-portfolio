import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { CaseStudy } from "../data/caseStudies";

type CaseStudyPageProps = {
  study: CaseStudy;
  nextStudy?: CaseStudy;
  onBack?: () => void;
  onNext?: () => void;
};

type ExpandedVisual = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  presentation?: "desktop" | "mobile";
} | null;

type CaseStudyVisualImage = NonNullable<
  NonNullable<CaseStudy["visualEvidence"]>["groups"][number]["images"][number]
>;

function VisualPreview({
  image,
  visualId,
  onExpand,
}: {
  image: CaseStudyVisualImage;
  visualId: string;
  onExpand: (payload: ExpandedVisual) => void;
}) {
  const [aspectRatio, setAspectRatio] = useState<string>(
    image.presentation === "mobile" ? "390 / 844" : "1536 / 1024",
  );

  return (
    <button
      type="button"
      onClick={() => {
        onExpand({
          id: visualId,
          src: image.src,
          alt: image.alt,
          caption: image.caption,
          presentation: image.presentation,
        });
      }}
      className="group block w-full cursor-zoom-in overflow-hidden rounded-xl border border-border bg-white text-left shadow-[0_18px_50px_rgba(15,23,42,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--premium-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={`Open larger image: ${image.caption}`}
    >
      <motion.img
        layoutId={visualId}
        src={image.src}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        onLoad={(event) => {
          const { naturalWidth, naturalHeight } = event.currentTarget;
          if (naturalWidth && naturalHeight) {
            setAspectRatio(`${naturalWidth} / ${naturalHeight}`);
          }
        }}
        style={{ aspectRatio }}
        className="w-full object-contain object-top transition-transform duration-500 group-hover:scale-[1.008]"
      />
    </button>
  );
}

export function CaseStudyPage({
  study,
  nextStudy,
  onBack,
  onNext,
}: CaseStudyPageProps) {
  const [expandedVisual, setExpandedVisual] =
    useState<ExpandedVisual>(null);
  const [showAllVisualEvidence, setShowAllVisualEvidence] =
    useState(false);
  const expandedVisualCloseRef = useRef<HTMLButtonElement>(null);
  const expandedVisualTriggerRef = useRef<HTMLElement | null>(null);
  const prototypeHref = study.prototypeUrl
    ? /^https?:\/\//i.test(study.prototypeUrl)
      ? study.prototypeUrl
      : `${import.meta.env.BASE_URL}${study.prototypeUrl.replace(/^\/+/, "")}`
    : undefined;

  const visualEvidenceGroups = study.visualEvidence
    ? showAllVisualEvidence || !study.visualEvidence.initialGroups
      ? study.visualEvidence.groups
      : study.visualEvidence.groups.slice(0, study.visualEvidence.initialGroups)
    : [];

  useEffect(() => {
    setShowAllVisualEvidence(false);
  }, [study.slug]);

  useEffect(() => {
    if (!expandedVisual) {
      return;
    }

    expandedVisualTriggerRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const focusFrame = window.requestAnimationFrame(() => {
      expandedVisualCloseRef.current?.focus();
    });

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setExpandedVisual(null);
        return;
      }

      // The expanded-image dialog currently has one interactive control.
      // Keep keyboard focus inside the modal instead of allowing it to
      // move to the page behind the overlay.
      if (event.key === "Tab") {
        event.preventDefault();
        expandedVisualCloseRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      expandedVisualTriggerRef.current?.focus();
      expandedVisualTriggerRef.current = null;
    };
  }, [expandedVisual]);

  return (
    <article className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-6 pb-16 pt-28 md:px-12 md:pb-20 md:pt-32 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mx-auto max-w-7xl"
        >
          {onBack ? (
            <button
              type="button"
              onClick={onBack}
              className="mb-10 inline-flex min-h-11 items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <span aria-hidden="true" className="mr-2">
                ←
              </span>
              Back to selected work
            </button>
          ) : null}

          {study.brandLogo ? (
            <div className="mb-7">
              <img
                src={study.brandLogo}
                alt={study.brandLogoAlt ?? `${study.company} logo`}
                width={178}
                height={51}
                loading="eager"
                decoding="async"
                className="h-auto w-[178px] rounded-lg border border-white/10 shadow-sm"
              />
            </div>
          ) : null}

          <p className="mb-6 text-sm font-medium uppercase tracking-wider text-[var(--premium-accent)]">
            {study.category}
          </p>

          <h1 className="max-w-5xl text-4xl font-normal leading-[1.06] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl">
            {study.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-[1.7] text-muted-foreground md:text-xl">
            {study.overview}
          </p>

          {study.prototypeUrl ? (
            <a
              href={prototypeHref}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-lg bg-[var(--premium-accent)] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--premium-accent)]"
            >
              Explore the interactive prototype
              <span aria-hidden="true" className="ml-2">↗</span>
            </a>
          ) : null}

          <dl className="mt-10 grid gap-x-10 gap-y-7 border-t border-border pt-7 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Product
              </dt>

              <dd className="text-base leading-[1.6] text-foreground">
                {study.company}
              </dd>
            </div>

            <div>
              <dt className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Role
              </dt>

              <dd className="text-base leading-[1.6] text-foreground">
                {study.role}
              </dd>
            </div>

            {study.duration ? (
              <div>
                <dt className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Duration
                </dt>

                <dd className="text-base leading-[1.6] text-foreground">
                  {study.duration}
                </dd>
              </div>
            ) : null}

            {study.dates ? (
              <div>
                <dt className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Dates
                </dt>

                <dd className="text-base leading-[1.6] text-foreground">
                  {study.dates}
                </dd>
              </div>
            ) : (
              <div>
                <dt className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Year
                </dt>

                <dd className="text-base leading-[1.6] text-foreground">
                  {study.year}
                </dd>
              </div>
            )}

            {study.projectNature ? (
              <div>
                <dt className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Project type
                </dt>

                <dd className="text-base leading-[1.6] text-foreground">
                  {study.projectNature}
                </dd>
              </div>
            ) : null}

            {study.team ? (
              <div>
                <dt className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Team
                </dt>

                <dd className="text-base leading-[1.6] text-foreground">
                  {study.team}
                </dd>
              </div>
            ) : null}

            {study.tools?.length ? (
              <div className="sm:col-span-2">
                <dt className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Tools
                </dt>

                <dd className="text-base leading-[1.6] text-foreground">
                  {study.tools.join(", ")}
                </dd>
              </div>
            ) : null}
          </dl>

          {!study.executiveSummary && (study.scope ||
          study.stakeholderReview ||
          study.status) ? (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {study.scope ? (
                <div className="rounded-xl border border-border bg-muted/30 p-6 sm:col-span-2 lg:col-span-2">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                    Project scope
                  </p>

                  <p className="leading-[1.7] text-foreground">
                    {study.scope}
                  </p>
                </div>
              ) : null}

              {study.stakeholderReview ? (
                <div className="rounded-xl border border-border bg-card p-6">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                    Stakeholder review
                  </p>

                  <p className="leading-[1.7] text-foreground">
                    {study.stakeholderReview}
                  </p>
                </div>
              ) : null}

              {study.status ? (
                <div className="rounded-xl border border-border bg-card p-6">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                    Current status
                  </p>

                  <p className="leading-[1.7] text-foreground">
                    {study.status}
                  </p>
                </div>
              ) : null}
            </div>
          ) : null}
        </motion.div>
      </header>

      <div>
        {study.executiveSummary ? (
          <section
            aria-labelledby="executive-summary-title"
            className="border-b border-border bg-muted/30 px-6 py-16 md:px-12 md:py-20 lg:px-24"
          >
            <div className="mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-5xl"
              >
                <p className="mb-5 text-sm font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                  Executive summary
                </p>
                <h2
                  id="executive-summary-title"
                  className="text-3xl font-normal leading-[1.12] tracking-[-0.02em] md:text-5xl"
                >
                  {study.executiveSummary.heading}
                </h2>
                <p className="mt-6 text-lg leading-[1.8] text-muted-foreground md:text-xl">
                  {study.executiveSummary.summary}
                </p>
              </motion.div>

              <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
                {study.executiveSummary.metrics.map((metric) => (
                  <div key={metric.label} className="bg-card p-6">
                    <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {metric.label}
                    </dt>
                    <dd className="mt-3 text-3xl font-medium tracking-[-0.02em] text-foreground">
                      {metric.value}
                    </dd>
                    <p className="mt-2 text-sm leading-[1.6] text-muted-foreground">
                      {metric.detail}
                    </p>
                  </div>
                ))}
              </dl>

              <div className="mt-10 grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-[0.72fr_1.28fr]">
                <div className="border-b border-border p-6 md:p-8 lg:border-b-0 lg:border-r">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Design decision
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                      Usability gate · {study.executiveSummary.gate.usability}
                    </span>
                    <span className="rounded-full bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-700 dark:text-red-300">
                      Release gate · {study.executiveSummary.gate.release}
                    </span>
                  </div>
                  <p className="mt-5 leading-[1.7] text-muted-foreground">
                    {study.executiveSummary.gate.explanation}
                  </p>
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Evidence-led iteration
                  </p>
                  <ol className="mt-5 grid gap-5 md:grid-cols-3">
                    {study.executiveSummary.iteration.map((item, index) => (
                      <li key={item.step}>
                        <div className="mb-3 flex items-center gap-3">
                          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--premium-accent)] text-xs font-semibold text-white">
                            {index + 1}
                          </span>
                          <h3 className="font-medium text-foreground">
                            {item.step}
                          </h3>
                        </div>
                        <p className="text-sm leading-[1.7] text-muted-foreground">
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ol>
                  <blockquote className="mt-6 border-l-2 border-[var(--premium-accent)] pl-4 text-sm italic leading-[1.7] text-muted-foreground">
                    {study.executiveSummary.participantEvidence}
                  </blockquote>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="px-6 py-20 md:px-12 md:py-24 lg:px-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <p className="mb-5 text-sm font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                The problem
              </p>

              <h2 className="mb-6 text-3xl font-normal leading-[1.12] tracking-[-0.02em] md:text-4xl">
                Understanding the challenge
              </h2>

              <p className="text-lg leading-[1.8] text-muted-foreground">
                {study.challenge}
              </p>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: 0.08,
                ease: "easeOut",
              }}
              className="space-y-8 rounded-2xl border border-border bg-muted/30 p-6 md:p-8"
              aria-label="Project context"
            >
              <div>
                <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                  Business goal
                </h3>

                <p className="leading-[1.7] text-foreground">
                  {study.context.businessGoal}
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                  Users
                </h3>

                <p className="leading-[1.7] text-foreground">
                  {study.context.users}
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                  Constraints
                </h3>

                <ul className="space-y-3">
                  {study.context.constraints.map(
                    (constraint) => (
                      <li
                        key={constraint}
                        className="flex items-start gap-3 leading-[1.7] text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1 text-[var(--premium-accent)]"
                        >
                          •
                        </span>

                        <span>{constraint}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </motion.aside>
          </div>
        </section>

        {study.existingExperience ? (
          <section
            aria-labelledby="existing-experience-title"
            className="border-t border-border bg-muted/30 px-6 py-20 md:px-12 md:py-24 lg:px-24"
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
                className="max-w-4xl"
              >
                <p className="mb-5 text-sm font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                  Understanding the existing experience
                </p>

                <h2
                  id="existing-experience-title"
                  className="text-3xl font-normal leading-[1.12] tracking-[-0.02em] md:text-4xl"
                >
                  {study.existingExperience.heading}
                </h2>

                <p className="mt-6 text-lg leading-[1.8] text-muted-foreground">
                  {study.existingExperience.introduction}
                </p>
              </motion.div>

              <div className="mt-12">
                <h3 className="mb-6 text-xl font-normal tracking-[-0.01em]">
                  Existing ecosystem
                </h3>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {study.existingExperience.platforms.map(
                    (platform, index) => (
                      <motion.div
                        key={platform.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.6,
                          delay: Math.min(index * 0.08, 0.24),
                          ease: "easeOut",
                        }}
                        className="rounded-xl border border-border bg-card p-6"
                      >
                        <h4 className="mb-3 text-lg font-medium text-foreground">
                          {platform.name}
                        </h4>

                        <p className="leading-[1.7] text-muted-foreground">
                          {platform.role}
                        </p>
                      </motion.div>
                    ),
                  )}
                </div>
              </div>

              <div className="mt-16">
                <h3 className="mb-6 text-xl font-normal tracking-[-0.01em]">
                  Main experience problems
                </h3>

                <div className="grid gap-5 md:grid-cols-2">
                  {study.existingExperience.issues.map(
                    (issue, index) => (
                      <motion.div
                        key={issue.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.6,
                          delay: Math.min(index * 0.08, 0.24),
                          ease: "easeOut",
                        }}
                        className="rounded-xl border border-border bg-background p-6 md:p-8"
                      >
                        <h4 className="mb-3 text-lg font-medium text-foreground">
                          {issue.title}
                        </h4>

                        <p className="leading-[1.7] text-muted-foreground">
                          {issue.description}
                        </p>
                      </motion.div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {study.researchDiscovery || study.keyFindings ? (
          <>
            {study.researchDiscovery ? (
              <section
                aria-labelledby="research-discovery-title"
                className="border-t border-border px-6 py-20 md:px-12 md:py-24 lg:px-24"
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
                    className="max-w-4xl"
                  >
                    <p className="mb-5 text-sm font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                      Research and discovery
                    </p>

                    <h2
                      id="research-discovery-title"
                      className="text-3xl font-normal leading-[1.12] tracking-[-0.02em] md:text-4xl"
                    >
                      {study.researchDiscovery.heading}
                    </h2>

                    <p className="mt-6 text-lg leading-[1.8] text-muted-foreground">
                      {study.researchDiscovery.introduction}
                    </p>
                  </motion.div>

                  <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {study.researchDiscovery.methods.map(
                      (method, index) => (
                        <motion.div
                          key={method.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{
                            duration: 0.6,
                            delay: Math.min(index * 0.08, 0.24),
                            ease: "easeOut",
                          }}
                          className="rounded-xl border border-border bg-card p-6 md:p-8"
                        >
                          <h3 className="mb-4 text-xl font-normal tracking-[-0.01em] text-foreground">
                            {method.title}
                          </h3>

                          <p className="leading-[1.7] text-muted-foreground">
                            {method.description}
                          </p>

                          <div className="mt-6 border-t border-border pt-5">
                            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                              Output
                            </p>

                            <p className="leading-[1.7] text-foreground">
                              {method.output}
                            </p>
                          </div>
                        </motion.div>
                      ),
                    )}
                  </div>

                  {study.researchDiscovery.limitations
                    .length ? (
                    <motion.aside
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                      className="mt-12 rounded-2xl border border-border bg-muted/30 p-6 md:p-8"
                      aria-labelledby="research-limitations-title"
                    >
                      <h3
                        id="research-limitations-title"
                        className="mb-5 text-xl font-normal tracking-[-0.01em]"
                      >
                        Research limitations
                      </h3>

                      <ul className="grid gap-4 md:grid-cols-2">
                        {study.researchDiscovery.limitations.map(
                          (limitation) => (
                            <li
                              key={limitation}
                              className="flex items-start gap-3 leading-[1.7] text-muted-foreground"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-1 shrink-0 text-[var(--premium-accent)]"
                              >
                                •
                              </span>

                              <span>{limitation}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </motion.aside>
                  ) : null}
                </div>
              </section>
            ) : null}

            {study.keyFindings ? (
              <section
                aria-labelledby="key-findings-title"
                className="border-y border-border bg-muted/30 px-6 py-20 md:px-12 md:py-24 lg:px-24"
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
                    className="max-w-4xl"
                  >
                    <p className="mb-5 text-sm font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                      Key findings
                    </p>

                    <h2
                      id="key-findings-title"
                      className="text-3xl font-normal leading-[1.12] tracking-[-0.02em] md:text-4xl"
                    >
                      {study.keyFindings.heading}
                    </h2>

                    <p className="mt-6 text-lg leading-[1.8] text-muted-foreground">
                      {study.keyFindings.introduction}
                    </p>
                  </motion.div>

                  <div className="mt-12 grid gap-6 lg:grid-cols-2">
                    {study.keyFindings.findings.map(
                      (finding, index) => (
                        <motion.article
                          key={finding.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{
                            duration: 0.6,
                            delay: Math.min(index * 0.08, 0.24),
                            ease: "easeOut",
                          }}
                          className="rounded-xl border border-border bg-background p-6 md:p-8"
                        >
                          <div className="mb-5 flex items-start gap-4">
                            <span
                              aria-hidden="true"
                              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--premium-accent)]/30 text-sm font-medium text-[var(--premium-accent)]"
                            >
                              {String(index + 1).padStart(
                                2,
                                "0",
                              )}
                            </span>

                            <h3 className="text-xl font-normal leading-[1.3] tracking-[-0.01em] text-foreground">
                              {finding.title}
                            </h3>
                          </div>

                          <div className="space-y-5">
                            <div>
                              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                Evidence
                              </p>

                              <p className="leading-[1.7] text-foreground">
                                {finding.evidence}
                              </p>
                            </div>

                            <div>
                              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                User consequence
                              </p>

                              <p className="leading-[1.7] text-muted-foreground">
                                {finding.consequence}
                              </p>
                            </div>

                            <div className="border-t border-border pt-5">
                              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                                Design implication
                              </p>

                              <p className="leading-[1.7] text-foreground">
                                {finding.implication}
                              </p>
                            </div>
                          </div>
                        </motion.article>
                      ),
                    )}
                  </div>
                </div>
              </section>
            ) : null}
          </>
        ) : (
          <section className="border-y border-border bg-muted/30 px-6 py-20 md:px-12 md:py-24 lg:px-24">
            <div className="mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="mb-12 max-w-3xl"
              >
                <p className="mb-5 text-sm font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                  Process
                </p>

                <h2 className="text-3xl font-normal leading-[1.12] tracking-[-0.02em] md:text-4xl">
                  From assumptions to a testable product
                  direction
                </h2>
              </motion.div>

              <div className="grid gap-6 md:grid-cols-2">
                <ProcessCard
                  title="Domain and workflow framing"
                  items={study.process.research}
                  delay={0}
                />

                <ProcessCard
                  title="Working assumptions"
                  items={study.process.insights}
                  delay={0.08}
                />

                <ProcessCard
                  title="Design hypotheses"
                  items={study.process.solutions}
                  delay={0.16}
                />

                <ProcessCard
                  title="Proposed validation"
                  items={study.process.validation}
                  delay={0.24}
                />
              </div>
            </div>
          </section>
        )}

        {study.designStrategy ? (
          <section
            aria-labelledby="design-strategy-title"
            className="border-t border-border px-6 py-20 md:px-12 md:py-24 lg:px-24"
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
                className="max-w-4xl"
              >
                <p className="mb-5 text-sm font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                  Design strategy
                </p>

                <h2
                  id="design-strategy-title"
                  className="text-3xl font-normal leading-[1.12] tracking-[-0.02em] md:text-4xl"
                >
                  {study.designStrategy.heading}
                </h2>

                <p className="mt-6 text-lg leading-[1.8] text-muted-foreground">
                  {study.designStrategy.introduction}
                </p>
              </motion.div>

              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                {study.designStrategy.principles.map(
                  (principle, index) => (
                    <motion.article
                      key={principle.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.6,
                        delay: Math.min(index * 0.08, 0.24),
                        ease: "easeOut",
                      }}
                      className="rounded-xl border border-border bg-card p-6 md:p-8"
                    >
                      <div className="mb-5 flex items-start gap-4">
                        <span
                          aria-hidden="true"
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--premium-accent)]/30 text-sm font-medium text-[var(--premium-accent)]"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="text-xl font-normal leading-[1.3] tracking-[-0.01em] text-foreground">
                          {principle.title}
                        </h3>
                      </div>

                      <p className="leading-[1.7] text-muted-foreground">
                        {principle.explanation}
                      </p>

                      <div className="mt-6 grid gap-5 border-t border-border pt-5 sm:grid-cols-2">
                        <div>
                          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            Problem addressed
                          </p>

                          <p className="leading-[1.7] text-foreground">
                            {principle.problemAddressed}
                          </p>
                        </div>

                        <div>
                          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                            Influence on the solution
                          </p>

                          <p className="leading-[1.7] text-foreground">
                            {principle.influence}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  ),
                )}
              </div>
            </div>
          </section>
        ) : null}

        {study.informationArchitecture ? (
          <section
            aria-labelledby="information-architecture-title"
            className="border-y border-border bg-muted/30 px-6 py-20 md:px-12 md:py-24 lg:px-24"
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
                className="max-w-4xl"
              >
                <p className="mb-5 text-sm font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                  Information architecture and user flow
                </p>

                <h2
                  id="information-architecture-title"
                  className="text-3xl font-normal leading-[1.12] tracking-[-0.02em] md:text-4xl"
                >
                  {study.informationArchitecture.heading}
                </h2>

                <p className="mt-6 text-lg leading-[1.8] text-muted-foreground">
                  {study.informationArchitecture.introduction}
                </p>
              </motion.div>

              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="rounded-xl border border-border bg-background p-6 md:p-8"
                >
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Previous structure
                  </p>

                  <h3 className="mb-6 text-xl font-normal tracking-[-0.01em]">
                    Existing information model
                  </h3>

                  <ul className="space-y-3">
                    {study.informationArchitecture.previousStructure.map(
                      (item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 leading-[1.7] text-muted-foreground"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-1 shrink-0 text-muted-foreground"
                          >
                            •
                          </span>

                          <span>{item}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.08,
                    ease: "easeOut",
                  }}
                  className="rounded-xl border border-[var(--premium-accent)]/25 bg-[var(--premium-accent)]/5 p-6 md:p-8"
                >
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                    Proposed structure
                  </p>

                  <h3 className="mb-6 text-xl font-normal tracking-[-0.01em]">
                    Proposed information model
                  </h3>

                  <ul className="grid gap-3 sm:grid-cols-2">
                    {study.informationArchitecture.proposedStructure.map(
                      (item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 rounded-lg border border-[var(--premium-accent)]/15 bg-background/70 px-4 py-3 leading-[1.6] text-foreground"
                        >
                          <span
                            aria-hidden="true"
                            className="shrink-0 text-[var(--premium-accent)]"
                          >
                            →
                          </span>

                          <span>{item}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="mt-16"
              >
                <div className="mb-7 max-w-3xl">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                    Main onboarding flow
                  </p>

                  <h3 className="text-2xl font-normal leading-[1.2] tracking-[-0.02em] md:text-3xl">
                    From enrollment confirmation to the first
                    class
                  </h3>
                </div>

                <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {study.informationArchitecture.mainFlow.map(
                    (step, index) => (
                      <motion.li
                        key={`${index + 1}-${step}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.6,
                          delay: Math.min(index * 0.05, 0.25),
                          ease: "easeOut",
                        }}
                        className="flex min-h-28 items-start gap-4 rounded-xl border border-border bg-background p-5"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--premium-accent)]/10 text-sm font-medium text-[var(--premium-accent)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="pt-1 leading-[1.6] text-foreground">
                          {step}
                        </span>
                      </motion.li>
                    ),
                  )}
                </ol>
              </motion.div>

              <div className="mt-16">
                <div className="mb-7 max-w-3xl">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                    Structural decisions
                  </p>

                  <h3 className="text-2xl font-normal leading-[1.2] tracking-[-0.02em] md:text-3xl">
                    Decisions that connect the architecture to
                    the experience
                  </h3>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {study.informationArchitecture.decisions.map(
                    (decision, index) => (
                      <motion.article
                        key={decision.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.6,
                          delay: Math.min(index * 0.08, 0.24),
                          ease: "easeOut",
                        }}
                        className="rounded-xl border border-border bg-card p-6 md:p-8"
                      >
                        <h4 className="mb-3 text-lg font-medium text-foreground">
                          {decision.title}
                        </h4>

                        <p className="leading-[1.7] text-muted-foreground">
                          {decision.description}
                        </p>
                      </motion.article>
                    ),
                  )}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {study.redesignedExperience ? (
          <section
            aria-labelledby="redesigned-experience-title"
            className="border-t border-border px-6 py-20 md:px-12 md:py-24 lg:px-24"
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
                className="max-w-4xl"
              >
                <p className="mb-5 text-sm font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                  The redesigned experience
                </p>

                <h2
                  id="redesigned-experience-title"
                  className="text-3xl font-normal leading-[1.12] tracking-[-0.02em] md:text-4xl"
                >
                  {study.redesignedExperience.heading}
                </h2>

                <p className="mt-6 text-lg leading-[1.8] text-muted-foreground">
                  {study.redesignedExperience.introduction}
                </p>
              </motion.div>

              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                {study.redesignedExperience.solutions.map(
                  (solution, index) => (
                    <motion.article
                      key={solution.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.6,
                        delay: Math.min(index * 0.08, 0.24),
                        ease: "easeOut",
                      }}
                      className="rounded-xl border border-border bg-card p-6 md:p-8"
                    >
                      <div className="mb-5 flex items-start gap-4">
                        <span
                          aria-hidden="true"
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--premium-accent)]/30 text-sm font-medium text-[var(--premium-accent)]"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="text-xl font-normal leading-[1.3] tracking-[-0.01em] text-foreground">
                          {solution.title}
                        </h3>
                      </div>

                      <div className="space-y-5">
                        <div>
                          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            Problem
                          </p>

                          <p className="leading-[1.7] text-muted-foreground">
                            {solution.problem}
                          </p>
                        </div>

                        <div>
                          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-foreground">
                            Design response
                          </p>

                          <p className="leading-[1.7] text-foreground">
                            {solution.response}
                          </p>
                        </div>

                        <div className="border-t border-border pt-5">
                          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                            Intended effect
                          </p>

                          <p className="leading-[1.7] text-foreground">
                            {solution.intendedEffect}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  ),
                )}
              </div>

              {study.redesignedExperience.prototypeCoverage
                .length ? (
                <motion.aside
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="mt-14 rounded-2xl border border-[var(--premium-accent)]/20 bg-[var(--premium-accent)]/5 p-6 md:p-8"
                  aria-labelledby="prototype-coverage-title"
                >
                  <div className="max-w-3xl">
                    <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                      Prototype coverage
                    </p>

                    <h3
                      id="prototype-coverage-title"
                      className="text-2xl font-normal leading-[1.2] tracking-[-0.02em] md:text-3xl"
                    >
                      What was designed and prototyped
                    </h3>
                  </div>

                  <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {study.redesignedExperience.prototypeCoverage.map(
                      (item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 rounded-lg border border-[var(--premium-accent)]/15 bg-background/70 px-4 py-4 leading-[1.6] text-foreground"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-0.5 shrink-0 text-[var(--premium-accent)]"
                          >
                            ✓
                          </span>

                          <span>{item}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </motion.aside>
              ) : null}
            </div>
          </section>
        ) : null}

        {study.visualEvidence ? (
          <section
            aria-labelledby="visual-evidence-title"
            className="border-t border-border bg-muted/30 px-6 py-20 md:px-12 md:py-24 lg:px-24"
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
                className="max-w-4xl"
              >
                <p className="mb-5 text-sm font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                  Visual evidence
                </p>

                <h2
                  id="visual-evidence-title"
                  className="text-3xl font-normal leading-[1.12] tracking-[-0.02em] md:text-4xl"
                >
                  {study.visualEvidence.heading}
                </h2>

                <p className="mt-6 text-lg leading-[1.8] text-muted-foreground">
                  {study.visualEvidence.introduction}
                </p>
              </motion.div>

              <div className="mt-14 space-y-16">
                {visualEvidenceGroups.map(
                  (group, groupIndex) => (
                    <section
                      key={group.title}
                      aria-labelledby={`visual-group-${groupIndex}`}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                        }}
                        className="mb-7 max-w-4xl"
                      >
                        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                          {String(groupIndex + 1).padStart(
                            2,
                            "0",
                          )}
                        </p>

                        <h3
                          id={`visual-group-${groupIndex}`}
                          className="text-2xl font-normal leading-[1.2] tracking-[-0.02em] md:text-3xl"
                        >
                          {group.title}
                        </h3>

                        <p className="mt-4 max-w-3xl leading-[1.8] text-muted-foreground">
                          {group.description}
                        </p>
                      </motion.div>

                      <div className="space-y-10">
                        {Array.from(
                          {
                            length: Math.ceil(
                              group.images.length / 2,
                            ),
                          },
                          (_, pairIndex) =>
                            group.images.slice(
                              pairIndex * 2,
                              pairIndex * 2 + 2,
                            ),
                        ).map((pair, pairIndex) => {
                          const desktopImage =
                            pair.find(
                              (image) =>
                                image.presentation ===
                                "desktop",
                            ) ?? pair[0];
                          const mobileImage =
                            pair.find(
                              (image) =>
                                image.presentation ===
                                "mobile",
                            ) ?? pair[1];
                          const pairTitle =
                            desktopImage.caption.replace(
                              /,\s*desktop\.?$/i,
                              "",
                            );
                          const hasDesktop = pair.some(
                            (image) => image.presentation === "desktop",
                          );
                          const hasMobile = pair.some(
                            (image) => image.presentation === "mobile",
                          );

                          if (pair.length === 1) {
                            const image = pair[0];
                            const visualId = `${study.slug}-${groupIndex}-${pairIndex}-single`;
                            const isMobile = image.presentation === "mobile";
                            const singleTitle = image.caption.replace(
                              /,\s*(desktop|mobile)\.?$/i,
                              "",
                            );

                            return (
                              <motion.figure
                                key={visualId}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.12 }}
                                transition={{
                                  duration: 0.6,
                                  delay: Math.min(pairIndex * 0.08, 0.24),
                                  ease: "easeOut",
                                }}
                                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                              >
                                <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4 md:px-6">
                                  <span className="text-base font-medium text-foreground">
                                    {singleTitle}
                                  </span>
                                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                    {isMobile ? "Mobile view" : "Desktop view"}
                                  </span>
                                </figcaption>

                                <div className="bg-background p-4 sm:p-6 lg:p-8">
                                  <div
                                    className={
                                      isMobile
                                        ? "mx-auto w-full max-w-[310px]"
                                        : "min-w-0"
                                    }
                                  >
                                    <div className="mb-3 flex justify-end">
                                      <span className="text-xs text-muted-foreground">
                                        Select to enlarge
                                      </span>
                                    </div>

                                    <VisualPreview
                                      image={image}
                                      visualId={visualId}
                                      onExpand={(payload) =>
                                        setExpandedVisual(payload)
                                      }
                                    />
                                  </div>
                                </div>
                              </motion.figure>
                            );
                          }

                          if (!hasDesktop || !hasMobile) {
                            return (
                              <motion.figure
                                key={`${study.slug}-${groupIndex}-${pairIndex}-same-format`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.12 }}
                                transition={{
                                  duration: 0.6,
                                  delay: Math.min(pairIndex * 0.08, 0.24),
                                  ease: "easeOut",
                                }}
                                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                              >
                                <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4 md:px-6">
                                  <span className="text-base font-medium text-foreground">
                                    {pairTitle}
                                  </span>
                                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                    Product states
                                  </span>
                                </figcaption>

                                <div className="space-y-8 bg-background p-4 sm:p-6 lg:p-8">
                                  {pair.map((image, imageIndex) => {
                                    const visualId = `${study.slug}-${groupIndex}-${pairIndex}-same-${imageIndex}`;
                                    const isMobile = image.presentation === "mobile";

                                    return (
                                      <div
                                        key={visualId}
                                        className={
                                          isMobile
                                            ? "mx-auto w-full max-w-[310px]"
                                            : "min-w-0"
                                        }
                                      >
                                        <div className="mb-3 flex items-center justify-between gap-3">
                                          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--premium-accent)]">
                                            {String(imageIndex + 1).padStart(2, "0")}
                                          </span>
                                          <span className="text-xs text-muted-foreground">
                                            Select to enlarge
                                          </span>
                                        </div>

                                        <VisualPreview
                                          image={image}
                                          visualId={visualId}
                                          onExpand={(payload) =>
                                            setExpandedVisual(payload)
                                          }
                                        />
                                      </div>
                                    );
                                  })}
                                </div>
                              </motion.figure>
                            );
                          }

                          return (
                            <motion.figure
                              key={`${study.slug}-${groupIndex}-${pairIndex}`}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{
                                opacity: 1,
                                y: 0,
                              }}
                              viewport={{
                                once: true,
                                amount: 0.12,
                              }}
                              transition={{
                                duration: 0.6,
                                delay: Math.min(
                                  pairIndex * 0.08,
                                  0.24,
                                ),
                                ease: "easeOut",
                              }}
                              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                            >
                              <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4 md:px-6">
                                <span className="text-base font-medium text-foreground">
                                  {pairTitle}
                                </span>
                                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                  Responsive pair
                                </span>
                              </figcaption>

                              <div className="grid items-start gap-6 bg-background p-4 sm:p-6 lg:grid-cols-[minmax(0,2.35fr)_minmax(220px,0.65fr)] lg:gap-8 lg:p-8">
                                {[desktopImage, mobileImage]
                                  .filter(Boolean)
                                  .map((image, imageIndex) => {
                                    const visualId = `${study.slug}-${groupIndex}-${pairIndex}-${imageIndex}`;
                                    const isMobile =
                                      image.presentation ===
                                      "mobile";

                                    return (
                                      <div
                                        key={visualId}
                                        className={
                                          isMobile
                                            ? "mx-auto w-full max-w-[310px] lg:max-w-none"
                                            : "min-w-0"
                                        }
                                      >
                                        <div className="mb-3 flex items-center justify-between gap-3">
                                          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--premium-accent)]">
                                            {isMobile
                                              ? "Mobile view"
                                              : "Desktop view"}
                                          </span>
                                          <span className="text-xs text-muted-foreground">
                                            Select to enlarge
                                          </span>
                                        </div>

                                    <VisualPreview
                                      image={image}
                                      visualId={visualId}
                                      onExpand={(payload) =>
                                        setExpandedVisual(payload)
                                      }
                                    />
                                      </div>
                                    );
                                  })}
                              </div>
                            </motion.figure>
                          );
                        })}
                      </div>
                    </section>
                  ),
                )}
              </div>

              {study.visualEvidence.initialGroups &&
              study.visualEvidence.groups.length > study.visualEvidence.initialGroups ? (
                <div className="mt-12 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setShowAllVisualEvidence((current) => !current)}
                    className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-background px-6 py-3 font-medium text-foreground transition-colors hover:border-[var(--premium-accent)] hover:text-[var(--premium-accent)]"
                    aria-expanded={showAllVisualEvidence}
                  >
                    {showAllVisualEvidence
                      ? "Show the featured screens only"
                      : study.visualEvidence.expandLabel ?? "View the complete gallery"}
                  </button>
                </div>
              ) : null}
            </div>
          </section>
        ) : null}

        {study.designSystemAccessibility ? (
          <section
            aria-labelledby="design-system-accessibility-title"
            className="border-y border-border bg-muted/30 px-6 py-20 md:px-12 md:py-24 lg:px-24"
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
                className="max-w-4xl"
              >
                <p className="mb-5 text-sm font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                  Design system and accessibility
                </p>

                <h2
                  id="design-system-accessibility-title"
                  className="text-3xl font-normal leading-[1.12] tracking-[-0.02em] md:text-4xl"
                >
                  {study.designSystemAccessibility.heading}
                </h2>

                <p className="mt-6 text-lg leading-[1.8] text-muted-foreground">
                  {study.designSystemAccessibility.introduction}
                </p>
              </motion.div>

              <div className="mt-12">
                <div className="mb-7 max-w-3xl">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                    Foundations
                  </p>

                  <h3 className="text-2xl font-normal leading-[1.2] tracking-[-0.02em] md:text-3xl">
                    A reusable foundation for consistent product
                    experiences
                  </h3>
                </div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {study.designSystemAccessibility.foundations.map(
                    (foundation, index) => (
                      <motion.article
                        key={foundation.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.6,
                          delay: Math.min(index * 0.08, 0.24),
                          ease: "easeOut",
                        }}
                        className="rounded-xl border border-border bg-background p-6"
                      >
                        <h4 className="mb-3 text-lg font-medium text-foreground">
                          {foundation.title}
                        </h4>

                        <p className="leading-[1.7] text-muted-foreground">
                          {foundation.description}
                        </p>
                      </motion.article>
                    ),
                  )}
                </div>
              </div>

              {study.designSystemAccessibility.components
                .length ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="mt-16 rounded-2xl border border-border bg-card p-6 md:p-8"
                >
                  <div className="max-w-3xl">
                    <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                      Reusable components
                    </p>

                    <h3 className="text-2xl font-normal leading-[1.2] tracking-[-0.02em] md:text-3xl">
                      Components supporting the product
                      experience
                    </h3>
                  </div>

                  <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {study.designSystemAccessibility.components.map(
                      (component) => (
                        <li
                          key={component}
                          className="flex items-start gap-3 rounded-lg border border-border bg-muted/30 px-4 py-4 leading-[1.6] text-foreground"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-0.5 shrink-0 text-[var(--premium-accent)]"
                          >
                            →
                          </span>

                          <span>{component}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </motion.div>
              ) : null}

              <div className="mt-16">
                <div className="mb-7 max-w-3xl">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                    Accessibility considerations
                  </p>

                  <h3 className="text-2xl font-normal leading-[1.2] tracking-[-0.02em] md:text-3xl">
                    Designing for clearer perception,
                    interaction, and recovery
                  </h3>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {study.designSystemAccessibility.accessibility.map(
                    (item, index) => (
                      <motion.article
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.6,
                          delay: Math.min(index * 0.08, 0.24),
                          ease: "easeOut",
                        }}
                        className="rounded-xl border border-border bg-background p-6 md:p-8"
                      >
                        <div className="mb-4 flex items-start gap-4">
                          <span
                            aria-hidden="true"
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--premium-accent)]/30 text-sm font-medium text-[var(--premium-accent)]"
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <h4 className="text-lg font-medium leading-[1.4] text-foreground">
                            {item.title}
                          </h4>
                        </div>

                        <p className="leading-[1.7] text-muted-foreground">
                          {item.description}
                        </p>
                      </motion.article>
                    ),
                  )}
                </div>
              </div>

              <motion.aside
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="mt-12 rounded-2xl border border-[var(--premium-accent)]/20 bg-[var(--premium-accent)]/5 p-6 md:p-8"
                aria-labelledby="accessibility-limitation-title"
              >
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                  Evaluation limitation
                </p>

                <h3
                  id="accessibility-limitation-title"
                  className="mb-4 text-xl font-normal tracking-[-0.01em]"
                >
                  Scope of the accessibility review
                </h3>

                <p className="leading-[1.8] text-foreground">
                  {study.designSystemAccessibility.limitation}
                </p>
              </motion.aside>
            </div>
          </section>
        ) : null}

        {study.usabilityValidation ? (
          <section
            aria-labelledby="usability-validation-title"
            className="border-t border-border bg-muted/30 px-6 py-20 md:px-12 md:py-24 lg:px-24"
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
                className="max-w-4xl"
              >
                <p className="mb-5 text-sm font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                  Usability testing and iteration
                </p>

                <h2
                  id="usability-validation-title"
                  className="text-3xl font-normal leading-[1.12] tracking-[-0.02em] md:text-4xl"
                >
                  {study.usabilityValidation.heading}
                </h2>

                <p className="mt-6 text-lg leading-[1.8] text-muted-foreground">
                  {study.usabilityValidation.introduction}
                </p>
              </motion.div>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {study.usabilityValidation.studyMetrics.map(
                  (metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.6,
                        delay: Math.min(index * 0.08, 0.24),
                        ease: "easeOut",
                      }}
                      className="rounded-xl border border-border bg-card p-6"
                    >
                      <p className="text-3xl font-medium tracking-[-0.03em] text-foreground">
                        {metric.value}
                      </p>

                      <h3 className="mt-3 text-sm font-medium text-foreground">
                        {metric.label}
                      </h3>

                      <p className="mt-2 text-sm leading-[1.6] text-muted-foreground">
                        {metric.detail}
                      </p>
                    </motion.div>
                  ),
                )}
              </div>

              <div className="mt-16">
                <div className="mb-7 max-w-3xl">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                    The turning point
                  </p>

                  <h3 className="text-2xl font-normal leading-[1.2] tracking-[-0.02em] md:text-3xl">
                    Turning observed friction into design decisions
                  </h3>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                  {study.usabilityValidation.iteration.map(
                    (item, index) => (
                      <motion.article
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.6,
                          delay: Math.min(index * 0.08, 0.24),
                          ease: "easeOut",
                        }}
                        className="rounded-xl border border-border bg-background p-6 md:p-8"
                      >
                        <span
                          aria-hidden="true"
                          className="mb-5 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--premium-accent)]/10 text-sm font-medium text-[var(--premium-accent)]"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h4 className="text-lg font-medium leading-[1.4] text-foreground">
                          {item.title}
                        </h4>

                        <p className="mt-3 leading-[1.7] text-muted-foreground">
                          {item.description}
                        </p>
                      </motion.article>
                    ),
                  )}
                </div>
              </div>

              <div className="mt-16">
                <div className="mb-7 max-w-3xl">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                    Task-level results
                  </p>

                  <h3 className="text-2xl font-normal leading-[1.2] tracking-[-0.02em] md:text-3xl">
                    What each tested workflow revealed
                  </h3>
                </div>

                <div className="overflow-x-auto rounded-xl border border-border bg-card">
                  <table className="w-full min-w-[760px] border-collapse text-left">
                    <caption className="sr-only">
                      Usability task results
                    </caption>
                    <thead className="bg-muted/50">
                      <tr>
                        <th
                          scope="col"
                          className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-muted-foreground"
                        >
                          Entry point
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-muted-foreground"
                        >
                          Starting state
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-muted-foreground"
                        >
                          Sessions
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-muted-foreground"
                        >
                          Direct
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-muted-foreground"
                        >
                          Avg. time
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-muted-foreground"
                        >
                          Avg. SEQ
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {study.usabilityValidation.routeResults.map(
                        (result) => (
                          <tr
                            key={result.route}
                            className="border-t border-border"
                          >
                            <th
                              scope="row"
                              className="px-5 py-5 text-sm font-medium text-foreground"
                            >
                              {result.route}
                            </th>
                            <td className="px-5 py-5 text-sm leading-[1.6] text-muted-foreground">
                              {result.startingPoint}
                            </td>
                            <td className="px-5 py-5 text-sm text-foreground">
                              {result.sessions}
                            </td>
                            <td className="px-5 py-5 text-sm font-medium text-[var(--premium-accent)]">
                              {result.directSuccess}
                            </td>
                            <td className="px-5 py-5 text-sm text-foreground">
                              {result.averageTime}
                            </td>
                            <td className="px-5 py-5 text-sm text-foreground">
                              {result.averageSeq}
                            </td>
                          </tr>
                        ),
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-12 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
                <motion.aside
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="rounded-2xl border border-[var(--premium-accent)]/20 bg-[var(--premium-accent)]/5 p-6 md:p-8"
                  aria-label="Usability gate conclusion"
                >
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                    Usability evidence
                  </p>

                  <p className="text-lg leading-[1.8] text-foreground">
                    {study.usabilityValidation.conclusion}
                  </p>
                </motion.aside>

                <motion.aside
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.08,
                    ease: "easeOut",
                  }}
                  className="rounded-2xl border border-border bg-background p-6 md:p-8"
                  aria-label="Governance status"
                >
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Governance status
                  </p>

                  <p className="leading-[1.8] text-foreground">
                    {study.usabilityValidation.governance}
                  </p>
                </motion.aside>
              </div>
            </div>
          </section>
        ) : null}

        {study.validationNextSteps ? (
          <section
            aria-labelledby="validation-next-steps-title"
            className="border-t border-border px-6 py-20 md:px-12 md:py-24 lg:px-24"
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
                className="max-w-4xl"
              >
                <p className="mb-5 text-sm font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                  Validation and next steps
                </p>

                <h2
                  id="validation-next-steps-title"
                  className="text-3xl font-normal leading-[1.12] tracking-[-0.02em] md:text-4xl"
                >
                  {study.validationNextSteps.heading}
                </h2>

                <p className="mt-6 text-lg leading-[1.8] text-muted-foreground">
                  {study.validationNextSteps.introduction}
                </p>
              </motion.div>

              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                <div>
                  <div className="mb-6">
                    <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                      Completed reviews
                    </p>

                    <h3 className="text-2xl font-normal leading-[1.2] tracking-[-0.02em] md:text-3xl">
                      What has already been reviewed
                    </h3>
                  </div>

                  <div className="space-y-5">
                    {study.validationNextSteps.completedReviews.map(
                      (review, index) => (
                        <motion.article
                          key={review.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{
                            duration: 0.6,
                            delay: Math.min(index * 0.08, 0.24),
                            ease: "easeOut",
                          }}
                          className="rounded-xl border border-border bg-card p-6"
                        >
                          <div className="mb-4 flex items-start gap-4">
                            <span
                              aria-hidden="true"
                              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--premium-accent)]/10 text-sm font-medium text-[var(--premium-accent)]"
                            >
                              ✓
                            </span>

                            <h4 className="pt-1 text-lg font-medium leading-[1.4] text-foreground">
                              {review.title}
                            </h4>
                          </div>

                          <p className="leading-[1.7] text-muted-foreground">
                            {review.description}
                          </p>
                        </motion.article>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <div className="mb-6">
                    <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Pending validation
                    </p>

                    <h3 className="text-2xl font-normal leading-[1.2] tracking-[-0.02em] md:text-3xl">
                      What still needs to be tested and
                      confirmed
                    </h3>
                  </div>

                  <div className="space-y-5">
                    {study.validationNextSteps.pendingValidation.map(
                      (item, index) => (
                        <motion.article
                          key={item.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{
                            duration: 0.6,
                            delay: Math.min(index * 0.08, 0.24),
                            ease: "easeOut",
                          }}
                          className="rounded-xl border border-border bg-muted/30 p-6"
                        >
                          <div className="mb-4 flex items-start gap-4">
                            <span
                              aria-hidden="true"
                              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-sm font-medium text-muted-foreground"
                            >
                              {String(index + 1).padStart(
                                2,
                                "0",
                              )}
                            </span>

                            <h4 className="pt-1 text-lg font-medium leading-[1.4] text-foreground">
                              {item.title}
                            </h4>
                          </div>

                          <p className="leading-[1.7] text-muted-foreground">
                            {item.description}
                          </p>
                        </motion.article>
                      ),
                    )}
                  </div>
                </div>
              </div>

              {study.validationNextSteps.proposedSignals
                .length ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="mt-16 rounded-2xl border border-[var(--premium-accent)]/20 bg-[var(--premium-accent)]/5 p-6 md:p-8"
                >
                  <div className="max-w-3xl">
                    <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                      Proposed measurement signals
                    </p>

                    <h3 className="text-2xl font-normal leading-[1.2] tracking-[-0.02em] md:text-3xl">
                      What could be measured after
                      implementation
                    </h3>

                    <p className="mt-4 leading-[1.7] text-muted-foreground">
                      These signals are proposed evaluation
                      criteria, not measured project outcomes.
                    </p>
                  </div>

                  <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {study.validationNextSteps.proposedSignals.map(
                      (signal, index) => (
                        <motion.article
                          key={signal.label}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{
                            duration: 0.6,
                            delay: Math.min(index * 0.08, 0.24),
                            ease: "easeOut",
                          }}
                          className="rounded-xl border border-[var(--premium-accent)]/15 bg-background/70 p-6"
                        >
                          <h4 className="mb-3 text-lg font-medium text-foreground">
                            {signal.label}
                          </h4>

                          <p className="leading-[1.7] text-muted-foreground">
                            {signal.description}
                          </p>
                        </motion.article>
                      ),
                    )}
                  </div>
                </motion.div>
              ) : null}
            </div>
          </section>
        ) : null}

        {study.outcomesCurrentStatus ? (
          <section
            aria-labelledby="outcomes-current-status-title"
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
                className="max-w-4xl"
              >
                <p className="mb-5 text-sm font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                  Outcomes and current status
                </p>

                <h2
                  id="outcomes-current-status-title"
                  className="text-3xl font-normal leading-[1.12] tracking-[-0.02em] md:text-4xl"
                >
                  {study.outcomesCurrentStatus.heading}
                </h2>

                <p className="mt-6 text-lg leading-[1.8] text-muted-foreground">
                  {study.outcomesCurrentStatus.introduction}
                </p>
              </motion.div>

              <div className="mt-12">
                <div className="mb-7 max-w-3xl">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                    Project deliverables
                  </p>

                  <h3 className="text-2xl font-normal leading-[1.2] tracking-[-0.02em] md:text-3xl">
                    What the project produced
                  </h3>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {study.outcomesCurrentStatus.deliverables.map(
                    (deliverable, index) => (
                      <motion.article
                        key={deliverable.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.6,
                          delay: Math.min(index * 0.08, 0.24),
                          ease: "easeOut",
                        }}
                        className="rounded-xl border border-border bg-card p-6 md:p-8"
                      >
                        <div className="mb-4 flex items-start gap-4">
                          <span
                            aria-hidden="true"
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--premium-accent)]/10 text-sm font-medium text-[var(--premium-accent)]"
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <h4 className="pt-1 text-lg font-medium leading-[1.4] text-foreground">
                            {deliverable.title}
                          </h4>
                        </div>

                        <p className="leading-[1.7] text-muted-foreground">
                          {deliverable.description}
                        </p>
                      </motion.article>
                    ),
                  )}
                </div>
              </div>

              <div className="mt-16">
                <div className="mb-7 max-w-3xl">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                    Current project status
                  </p>

                  <h3 className="text-2xl font-normal leading-[1.2] tracking-[-0.02em] md:text-3xl">
                    What is complete, pending, and not yet
                    measured
                  </h3>
                </div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                  {study.outcomesCurrentStatus.currentStatus.map(
                    (item, index) => (
                      <motion.article
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.6,
                          delay: Math.min(index * 0.08, 0.24),
                          ease: "easeOut",
                        }}
                        className="rounded-xl border border-border bg-muted/30 p-6"
                      >
                        <h4 className="mb-3 text-base font-medium text-foreground">
                          {item.label}
                        </h4>

                        <p className="text-sm leading-[1.7] text-muted-foreground">
                          {item.description}
                        </p>
                      </motion.article>
                    ),
                  )}
                </div>
              </div>

              <motion.aside
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="mt-12 rounded-2xl border border-[var(--premium-accent)]/20 bg-[var(--premium-accent)]/5 p-6 md:p-8"
                aria-labelledby="outcomes-evidence-note-title"
              >
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                  Evidence note
                </p>

                <h3
                  id="outcomes-evidence-note-title"
                  className="mb-4 text-xl font-normal tracking-[-0.01em]"
                >
                  How to interpret these outcomes
                </h3>

                <p className="leading-[1.8] text-foreground">
                  {study.outcomesCurrentStatus.evidenceNote}
                </p>
              </motion.aside>
            </div>
          </section>
        ) : (
          <section className="px-6 py-20 md:px-12 md:py-24 lg:px-24">
            <div className="mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="mb-12 max-w-3xl"
              >
                <p className="mb-5 text-sm font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                  Study scope
                </p>

                <h2 className="text-3xl font-normal leading-[1.12] tracking-[-0.02em] md:text-4xl">
                  What this study produced
                </h2>
              </motion.div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {study.impact.metrics.map((metric, index) => (
                  <motion.div
                    key={`${metric.label}-${metric.value}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      delay: Math.min(index * 0.08, 0.24),
                      ease: "easeOut",
                    }}
                    className="rounded-xl border border-border bg-card p-6"
                  >
                    <p className="mb-3 text-3xl font-normal tracking-[-0.02em] text-[var(--premium-accent)]">
                      {metric.value}
                    </p>

                    <h3 className="mb-2 text-base font-medium">
                      {metric.label}
                    </h3>

                    <p className="text-sm leading-[1.6] text-muted-foreground">
                      {metric.detail}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="mt-8 rounded-xl border border-[var(--premium-accent)]/20 bg-[var(--premium-accent)]/5 p-6 md:p-8"
              >
                <p className="text-lg leading-[1.8] text-foreground">
                  {study.impact.business}
                </p>
              </motion.div>
            </div>
          </section>
        )}

        {study.learningsNextSteps &&
        study.slug !== "unifatecie-student-onboarding" ? (
          <section
            aria-labelledby="learnings-next-steps-title"
            className="border-t border-border bg-muted/30 px-6 py-20 md:px-12 md:py-24 lg:px-24"
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
                className="max-w-4xl"
              >
                <p className="mb-5 text-sm font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                  Learnings and next steps
                </p>

                <h2
                  id="learnings-next-steps-title"
                  className="text-3xl font-normal leading-[1.12] tracking-[-0.02em] md:text-4xl"
                >
                  {study.learningsNextSteps.heading}
                </h2>

                <p className="mt-6 text-lg leading-[1.8] text-muted-foreground">
                  {study.learningsNextSteps.introduction}
                </p>
              </motion.div>

              <div className="mt-12">
                <div className="mb-7 max-w-3xl">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                    Key learnings
                  </p>

                  <h3 className="text-2xl font-normal leading-[1.2] tracking-[-0.02em] md:text-3xl">
                    What the project clarified
                  </h3>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {study.learningsNextSteps.learnings.map(
                    (learning, index) => (
                      <motion.article
                        key={learning.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.6,
                          delay: Math.min(index * 0.08, 0.24),
                          ease: "easeOut",
                        }}
                        className="rounded-xl border border-border bg-card p-6 md:p-8"
                      >
                        <div className="mb-4 flex items-start gap-4">
                          <span
                            aria-hidden="true"
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--premium-accent)]/30 text-sm font-medium text-[var(--premium-accent)]"
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <h4 className="pt-1 text-lg font-medium leading-[1.4] text-foreground">
                            {learning.title}
                          </h4>
                        </div>

                        <p className="leading-[1.7] text-muted-foreground">
                          {learning.description}
                        </p>
                      </motion.article>
                    ),
                  )}
                </div>
              </div>

              <div className="mt-16">
                <div className="mb-7 max-w-3xl">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                    Next iteration priorities
                  </p>

                  <h3 className="text-2xl font-normal leading-[1.2] tracking-[-0.02em] md:text-3xl">
                    What should happen before implementation
                  </h3>
                </div>

                <ol className="grid gap-5 md:grid-cols-2">
                  {study.learningsNextSteps.nextIteration.map(
                    (item, index) => (
                      <motion.li
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.6,
                          delay: Math.min(index * 0.08, 0.24),
                          ease: "easeOut",
                        }}
                        className="rounded-xl border border-[var(--premium-accent)]/20 bg-background p-6 md:p-8"
                      >
                        <div className="mb-4 flex items-start gap-4">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--premium-accent)]/10 text-sm font-medium text-[var(--premium-accent)]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <h4 className="pt-1 text-lg font-medium leading-[1.4] text-foreground">
                            {item.title}
                          </h4>
                        </div>

                        <p className="leading-[1.7] text-muted-foreground">
                          {item.description}
                        </p>
                      </motion.li>
                    ),
                  )}
                </ol>
              </div>
            </div>
          </section>
        ) : (
          <section className="border-t border-border bg-muted/30 px-6 py-20 md:px-12 md:py-24 lg:px-24">
            <div className="mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="mb-12 max-w-3xl"
              >
                <p className="mb-5 text-sm font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                  Design principles
                </p>

                <h2 className="text-3xl font-normal leading-[1.12] tracking-[-0.02em] md:text-4xl">
                  Principles to test in the next iteration
                </h2>
              </motion.div>

              <div className="grid gap-5 md:grid-cols-2">
                {study.learnings.map((learning, index) => (
                  <motion.div
                    key={learning}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      delay: Math.min(index * 0.08, 0.24),
                      ease: "easeOut",
                    }}
                    className="rounded-xl border border-border bg-card p-6 text-base leading-[1.7] text-foreground"
                  >
                    {learning}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {nextStudy && onNext ? (
          <section
            aria-labelledby="next-project-title"
            className="border-t border-border px-6 py-20 md:px-12 md:py-24 lg:px-24"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="mx-auto max-w-7xl"
            >
              <button
                type="button"
                onClick={onNext}
                className="group w-full rounded-2xl border border-border bg-card p-6 text-left transition-colors hover:border-[var(--premium-accent)]/30 hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--premium-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-background md:p-10"
                aria-labelledby="next-project-title"
              >
                <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                  <div className="max-w-4xl">
                    <p className="mb-5 text-sm font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                      Next project
                    </p>

                    <h2
                      id="next-project-title"
                      className="text-3xl font-normal leading-[1.12] tracking-[-0.02em] text-foreground transition-colors group-hover:text-[var(--premium-accent)] md:text-4xl lg:text-5xl"
                    >
                      {nextStudy.title}
                    </h2>

                    <p className="mt-5 text-lg leading-[1.7] text-muted-foreground">
                      {nextStudy.company}
                    </p>
                  </div>

                  <span className="inline-flex min-h-11 shrink-0 items-center gap-3 text-base font-medium text-foreground transition-transform group-hover:translate-x-1">
                    View next case study
                    <span
                      aria-hidden="true"
                      className="text-[var(--premium-accent)]"
                    >
                      →
                    </span>
                  </span>
                </div>
              </button>
            </motion.div>
          </section>
        ) : null}
      </div>

      <AnimatePresence>
        {expandedVisual ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Expanded image: ${expandedVisual.caption}`}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.22,
              ease: "easeOut",
            }}
            onClick={() => setExpandedVisual(null)}
          >
            <div className="flex h-screen flex-col">
              <div className="flex shrink-0 items-start justify-between gap-6 border-b border-border bg-card/95 px-5 py-4 shadow-sm backdrop-blur md:px-8">
                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[var(--premium-accent)]">
                    Expanded visual
                  </p>

                  <p className="max-w-4xl text-sm leading-[1.6] text-muted-foreground">
                    {expandedVisual.caption}
                  </p>
                </div>

                <button
                  ref={expandedVisualCloseRef}
                  type="button"
                  onClick={() => setExpandedVisual(null)}
                  className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border border-border px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--premium-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label="Close expanded image"
                >
                  Close
                </button>
              </div>

              <div
                className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden bg-muted/30 px-4 py-6 md:px-8 md:py-8"
                onClick={(event) => event.stopPropagation()}
              >
                <div
                  className={
                    expandedVisual.presentation === "mobile"
                      ? "mx-auto flex w-full max-w-7xl justify-center"
                      : "mx-auto w-full max-w-7xl"
                  }
                >
                  <motion.img
                    layoutId={expandedVisual.id}
                    src={expandedVisual.src}
                    alt={expandedVisual.alt}
                    className={
                      expandedVisual.presentation === "mobile"
                        ? "max-h-[82vh] w-auto max-w-full rounded-2xl border border-border bg-background object-contain shadow-2xl"
                        : "h-auto w-full rounded-2xl border border-border bg-background object-contain shadow-2xl"
                    }
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}

type ExternalLinkIconProps = {
  className?: string;
};

function ExternalLinkIcon({
  className,
}: ExternalLinkIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 17L17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

type ProcessCardProps = {
  title: string;
  items: string[];
  delay: number;
};

function ProcessCard({
  title,
  items,
  delay,
}: ProcessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      className="rounded-xl border border-border bg-card p-6 md:p-8"
    >
      <h3 className="mb-5 text-xl font-normal tracking-[-0.01em]">
        {title}
      </h3>

      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-base leading-[1.7] text-muted-foreground"
          >
            <span
              aria-hidden="true"
              className="mt-1 shrink-0 text-[var(--premium-accent)]"
            >
              →
            </span>

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
