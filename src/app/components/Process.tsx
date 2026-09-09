import { motion } from "motion/react";
import {
  Search,
  Users,
  Lightbulb,
  Pencil,
  TestTube,
  Code,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { copy } from "../i18n/copy";

const stepIcons = [Search, Users, Lightbulb, TestTube, Pencil, Code];

export function Process() {
  const { language } = useLanguage();
  const c = copy[language].process;

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
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-6 text-sm font-medium uppercase tracking-wider text-[var(--premium-accent)]">
            {c.eyebrow}
          </p>

          <div className="mb-20 grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="max-w-2xl text-4xl font-normal leading-[1.08] tracking-[-0.02em] md:text-5xl lg:text-[56px]">
                {c.title}
              </h2>
            </div>

            <div className="max-w-[600px] space-y-6 text-lg leading-[1.7] text-muted-foreground">
              {c.paragraphs.map((paragraph: string) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {c.steps.map(
            (
              step: { title: string; description: string },
              index: number,
            ) => {
              const StepIcon = stepIcons[index];

              return (
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
                    <StepIcon
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
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}
