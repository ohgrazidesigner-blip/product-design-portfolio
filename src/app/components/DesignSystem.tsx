import { motion } from "motion/react";
import { Box, Palette, Shield, GitBranch } from "lucide-react";

const systemPractices = [
  {
    icon: Box,
    title: "Reusable product patterns",
    description:
      "I identify repeated structures across workflows and turn them into reusable patterns with defined anatomy, variants, states, and behavior.",
  },
  {
    icon: Palette,
    title: "Semantic foundations",
    description:
      "I organize color, typography, spacing, and interface decisions through semantic foundations that preserve meaning across different contexts.",
  },
  {
    icon: Shield,
    title: "States and accessibility",
    description:
      "I account for focus, contrast, responsiveness, loading, errors, empty states, permissions, and recovery, not only the ideal path.",
  },
  {
    icon: GitBranch,
    title: "Design-to-code consistency",
    description:
      "I align component naming, properties, responsive behavior, and interaction rules between design decisions and coded prototypes.",
  },
];

export function DesignSystem() {
  return (
    <section
      id="design-system"
      className="border-t border-border/60 bg-muted/30 px-6 py-20 md:px-12 md:py-24 lg:px-24"
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
            Design systems
          </p>

          <div className="mb-16 grid gap-12 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h2 className="max-w-2xl text-4xl font-normal leading-[1.08] tracking-[-0.02em] md:text-5xl lg:text-[56px]">
                Build consistency without limiting the product
              </h2>
            </div>

            <div className="max-w-[600px] space-y-6 text-lg leading-[1.7] text-muted-foreground">
              <p>
                In my product studies, I use systems thinking to
                connect individual interface decisions with the
                wider experience.
              </p>

              <p>
                The goal is not to create a large component
                library. It is to reduce unnecessary variation,
                make behavior predictable, and help the product
                evolve without losing clarity.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {systemPractices.map((practice, index) => (
            <motion.div
              key={practice.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: Math.min(index * 0.08, 0.24),
                ease: "easeOut",
              }}
              className="group rounded-xl border border-border bg-card p-8 transition-colors duration-300 hover:border-[var(--premium-accent)]/60"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--premium-accent)]/10 transition-colors duration-300 group-hover:bg-[var(--premium-accent)]/20">
                <practice.icon
                  aria-hidden="true"
                  className="h-6 w-6 text-[var(--premium-accent)]"
                />
              </div>

              <h3 className="mb-3 text-xl font-normal leading-[1.25] tracking-[-0.01em] text-foreground">
                {practice.title}
              </h3>

              <p className="text-base leading-[1.7] text-muted-foreground">
                {practice.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}