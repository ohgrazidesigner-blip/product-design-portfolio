import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const scrollBehavior: ScrollBehavior = shouldReduceMotion
    ? "auto"
    : "smooth";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: scrollBehavior,
      block: "start",
    });
  };

  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden px-6 pb-16 pt-36 md:px-12 md:pb-24 md:pt-40 lg:px-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--premium-accent)]/5 via-transparent to-transparent" />

      <div className="z-10 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-6 text-lg font-normal text-muted-foreground md:text-xl">
            Hi, I’m Graziele Costa.
          </p>

          <h1 className="max-w-7xl text-4xl font-normal leading-[1.08] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl">
            I simplify fragmented workflows{" "}
            <span className="block bg-gradient-to-r from-[var(--premium-accent)] to-[var(--premium-accent-light)] bg-clip-text text-transparent">
              with clear, scalable product systems.
            </span>
          </h1>

          <p className="mt-8 max-w-[640px] text-lg leading-[1.7] text-muted-foreground">
            I’m a Product Designer based in Salvador, Brazil. I
            connect information architecture, UX/UI, and design
            systems to make complex B2B, education, and
            financial products easier to understand, use, and
            evolve.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button
              type="button"
              onClick={() => scrollToSection("case-studies")}
              className="group flex items-center gap-2 rounded-lg bg-[var(--premium-accent)] px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-[var(--premium-accent-dark)]"
            >
              View selected work
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className="rounded-lg border border-border px-8 py-4 text-base font-medium transition-all duration-300 hover:border-[var(--premium-accent)] hover:text-[var(--premium-accent)]"
            >
              About me
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}