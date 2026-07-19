import { motion } from "motion/react";

export function About() {
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
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <p className="mb-6 text-sm font-medium uppercase tracking-wider text-[var(--premium-accent)]">
            About
          </p>

          <div className="grid items-start gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
            <div>
              <h2 className="max-w-xl text-4xl font-normal leading-[1.08] tracking-[-0.02em] md:text-5xl lg:text-[56px]">
                The perspective behind the work
              </h2>
            </div>

            <div className="max-w-[600px] space-y-6 text-lg leading-[1.7] text-muted-foreground md:pt-1">
              <p>
                Over 11 years across visual and digital design,
                I’ve learned to turn dense information into
                experiences people can understand and navigate
                with confidence. Today, I apply that foundation
                to product design, with a focus on complex
                workflows and scalable systems.
              </p>

              <p>
                My practice connects information architecture,
                interaction design, UX writing, interface craft,
                and design systems. I use these disciplines to
                clarify product structure, make decisions
                explicit, and create patterns that can evolve as
                a product grows.
              </p>

              <p>
                My background in education and psychopedagogy
                also shapes how I design. I pay close attention
                to how people interpret information, build
                confidence, and move through unfamiliar or
                demanding tasks.
              </p>

              <p>
                The case studies in this portfolio are
                independent product studies. They show my
                end-to-end reasoning and proposed solutions;
                concept-stage work is identified clearly and is
                not presented as shipped or validated impact.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}