import { motion } from "motion/react";
import { useLanguage } from "../i18n/LanguageContext";
import { copy } from "../i18n/copy";

export function About() {
  const { language } = useLanguage();
  const c = copy[language].about;

  return (
    <section
      id="about"
      className="bg-muted/30 px-6 py-20 md:px-12 md:py-24 lg:px-24"
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

          <div className="grid items-start gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
            <div>
              <h2 className="max-w-xl text-4xl font-normal leading-[1.08] tracking-[-0.02em] md:text-5xl lg:text-[56px]">
                {c.title}
              </h2>
            </div>

            <div className="max-w-[600px] space-y-6 text-lg leading-[1.7] text-muted-foreground md:pt-1">
              {c.paragraphs.map((paragraph: string) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
