import { motion } from "motion/react";
import {
  Search,
  Users,
  Lightbulb,
  Pencil,
  TestTube,
  Code,
} from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Understand the system",
    description:
      "Before proposing solutions, I examine existing workflows, business rules, user roles, technical dependencies, and patterns already in use.",
  },
  {
    icon: Users,
    title: "Frame the decision",
    description:
      "I clarify what needs to be decided, who is affected, which assumptions remain uncertain, and what evidence would support the next decision.",
  },
  {
    icon: Lightbulb,
    title: "Reduce the highest risk first",
    description:
      "I prioritize the assumption that could create the greatest user, business, or implementation risk if it proves to be wrong.",
  },
  {
    icon: TestTube,
    title: "Match evidence to the decision",
    description:
      "Audits, interviews, behavioral data, prototypes, and usability tests are selected according to the question. They are not treated as mandatory steps.",
  },
  {
    icon: Pencil,
    title: "Design beyond the happy path",
    description:
      "I consider content, errors, empty states, permissions, responsiveness, accessibility, and edge cases before defining a solution as complete.",
  },
  {
    icon: Code,
    title: "Plan for implementation and learning",
    description:
      "I document behavior, surface dependencies, support design QA, and define what the team should observe or validate after implementation.",
  },
];

export function Process() {
  return (
    <section
      id="process"
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
            How I work
          </p>

          <div className="mb-20 grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="max-w-2xl text-4xl font-normal leading-[1.08] tracking-[-0.02em] md:text-5xl lg:text-[56px]">
                The process changes. The decision criteria stay
                consistent.
              </h2>
            </div>

            <div className="max-w-[600px] space-y-6 text-lg leading-[1.7] text-muted-foreground">
              <p>
                Shared methods create consistency, but they do
                not replace product judgment. Every challenge
                has a different level of uncertainty, user and
                business risk, implementation cost, and
                available evidence.
              </p>

              <p>
                I adapt the process to the decision at hand,
                focusing on the smallest useful evidence needed
                to reduce risk and move the product forward.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: Math.min(index * 0.08, 0.24),
                ease: "easeOut",
              }}
              className="group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-[var(--premium-accent)]/60"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--premium-accent)]/10 transition-colors duration-300 group-hover:bg-[var(--premium-accent)]/20">
                <step.icon
                  aria-hidden="true"
                  className="h-6 w-6 text-[var(--premium-accent)]"
                />
              </div>

              <h3 className="mb-3 text-xl font-normal leading-[1.25] tracking-[-0.01em] text-foreground">
                {step.title}
              </h3>

              <p className="text-base leading-[1.7] text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}